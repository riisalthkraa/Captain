/**
 * Analyseur de faiblesses des élèves
 * Détecte les difficultés à partir des soumissions de devoirs
 */

import { dbV2 } from './databaseV2'
import type { StudentAnalytics, HomeworkSubmission, Exercise } from './databaseV2'

export interface WeaknessReport {
  studentId: string
  weaknesses: {
    skill: string
    difficulty: number // 0-100 (100 = très difficile pour l'élève)
    failureRate: number // % d'échec sur cette compétence
    exercisesFailed: number
    exercisesTotal: number
    examples: string[] // Exemples de questions ratées
  }[]
  strengths: {
    skill: string
    successRate: number
    exercisesSuccess: number
  }[]
  overallScore: number // Moyenne générale
  totalHomeworks: number
  completionRate: number // % de devoirs rendus
}

export interface ClassroomWeaknessHeatmap {
  skills: string[]
  students: {
    id: string
    name: string
    scores: number[] // Score par compétence (0-100)
  }[]
  averageBySkill: number[]
  criticalSkills: string[] // Compétences problématiques pour toute la classe
}

/**
 * Analyse les faiblesses d'un élève
 */
export async function analyzeStudentWeaknesses(studentId: string): Promise<WeaknessReport> {
  try {
    // Récupérer toutes les soumissions de l'élève
    const submissions = await dbV2.homeworkSubmissions
      .where('studentId')
      .equals(studentId)
      .toArray()

    // Filtrer uniquement les devoirs soumis
    const submittedHomeworks = submissions.filter(s => s.submittedAt)

    if (submittedHomeworks.length === 0) {
      return {
        studentId,
        weaknesses: [],
        strengths: [],
        overallScore: 0,
        totalHomeworks: 0,
        completionRate: 0
      }
    }

    // Charger tous les exercices concernés
    const allExerciseIds = new Set<string>()
    const homeworksData = await Promise.all(
      submittedHomeworks.map(async (sub) => {
        const homework = await dbV2.homeworks.get(sub.homeworkId)
        homework?.exerciseIds?.forEach(id => allExerciseIds.add(id))
        return { submission: sub, homework }
      })
    )

    const exercises = await Promise.all(
      Array.from(allExerciseIds).map(id => dbV2.exercises.get(id))
    )
    const exerciseMap = new Map(
      exercises.filter(Boolean).map(ex => [ex!.id, ex!])
    )

    // Analyser par compétence
    const skillStats = new Map<string, {
      total: number
      failed: number
      examples: string[]
    }>()

    let totalScore = 0
    let scoreCount = 0

    for (const { submission, homework } of homeworksData) {
      if (!homework || !submission) continue

      const exerciseIds = homework.exerciseIds || []

      for (const exId of exerciseIds) {
        const exercise = exerciseMap.get(exId)
        if (!exercise) continue

        const answer = submission.answers?.[exId]
        const isCorrect = checkAnswer(exercise, answer)

        // Ajouter aux stats par compétence
        for (const skill of exercise.skillsTested || []) {
          if (!skillStats.has(skill)) {
            skillStats.set(skill, { total: 0, failed: 0, examples: [] })
          }
          const stats = skillStats.get(skill)!
          stats.total++
          if (!isCorrect) {
            stats.failed++
            if (stats.examples.length < 3) {
              stats.examples.push(exercise.question)
            }
          }
        }

        // Score global
        if (isCorrect) {
          totalScore += 100
        }
        scoreCount++
      }
    }

    const overallScore = scoreCount > 0 ? Math.round(totalScore / scoreCount) : 0

    // Identifier faiblesses (taux d'échec > 40%)
    const weaknesses = Array.from(skillStats.entries())
      .filter(([_, stats]) => stats.total >= 2 && (stats.failed / stats.total) > 0.4)
      .map(([skill, stats]) => ({
        skill,
        difficulty: Math.round((stats.failed / stats.total) * 100),
        failureRate: Math.round((stats.failed / stats.total) * 100),
        exercisesFailed: stats.failed,
        exercisesTotal: stats.total,
        examples: stats.examples
      }))
      .sort((a, b) => b.difficulty - a.difficulty)

    // Identifier forces (taux de réussite > 80%)
    const strengths = Array.from(skillStats.entries())
      .filter(([_, stats]) => stats.total >= 2 && (stats.failed / stats.total) < 0.2)
      .map(([skill, stats]) => ({
        skill,
        successRate: Math.round(((stats.total - stats.failed) / stats.total) * 100),
        exercisesSuccess: stats.total - stats.failed
      }))
      .sort((a, b) => b.successRate - a.successRate)

    // Taux de complétion
    const allHomeworks = await dbV2.homeworkSubmissions
      .where('studentId')
      .equals(studentId)
      .toArray()
    const completionRate = allHomeworks.length > 0
      ? Math.round((submittedHomeworks.length / allHomeworks.length) * 100)
      : 0

    return {
      studentId,
      weaknesses,
      strengths,
      overallScore,
      totalHomeworks: submittedHomeworks.length,
      completionRate
    }
  } catch (error) {
    console.error('[WeaknessAnalyzer] Error analyzing student:', error)
    return {
      studentId,
      weaknesses: [],
      strengths: [],
      overallScore: 0,
      totalHomeworks: 0,
      completionRate: 0
    }
  }
}

/**
 * Génère une heatmap des faiblesses de classe
 */
export async function generateClassroomHeatmap(classroomId: string): Promise<ClassroomWeaknessHeatmap> {
  try {
    // Récupérer tous les élèves
    const students = await dbV2.students
      .where('classroomId')
      .equals(classroomId)
      .toArray()

    if (students.length === 0) {
      return {
        skills: [],
        students: [],
        averageBySkill: [],
        criticalSkills: []
      }
    }

    // Analyser chaque élève
    const studentReports = await Promise.all(
      students.map(async (student) => ({
        student,
        report: await analyzeStudentWeaknesses(student.id)
      }))
    )

    // Collecter toutes les compétences
    const allSkills = new Set<string>()
    studentReports.forEach(({ report }) => {
      report.weaknesses.forEach(w => allSkills.add(w.skill))
      report.strengths.forEach(s => allSkills.add(s.skill))
    })

    const skills = Array.from(allSkills).sort()

    // Calculer les scores par élève et par compétence
    const studentsData = studentReports.map(({ student, report }) => {
      const scores = skills.map(skill => {
        const weakness = report.weaknesses.find(w => w.skill === skill)
        if (weakness) {
          return 100 - weakness.difficulty // Inverser pour avoir un score (100 = parfait)
        }

        const strength = report.strengths.find(s => s.skill === skill)
        if (strength) {
          return strength.successRate
        }

        return 50 // Neutre si pas de données
      })

      return {
        id: student.id,
        name: `${student.firstName} ${student.lastName || ''}`.trim(),
        scores
      }
    })

    // Moyennes par compétence
    const averageBySkill = skills.map((_, idx) => {
      const sum = studentsData.reduce((acc, student) => acc + student.scores[idx], 0)
      return Math.round(sum / studentsData.length)
    })

    // Compétences critiques (moyenne < 60%)
    const criticalSkills = skills.filter((_, idx) => averageBySkill[idx] < 60)

    return {
      skills,
      students: studentsData,
      averageBySkill,
      criticalSkills
    }
  } catch (error) {
    console.error('[WeaknessAnalyzer] Error generating heatmap:', error)
    return {
      skills: [],
      students: [],
      averageBySkill: [],
      criticalSkills: []
    }
  }
}

/**
 * Vérifie si une réponse est correcte
 */
function checkAnswer(exercise: Exercise, answer: string | string[] | undefined): boolean {
  if (!answer) return false

  const normalize = (str: string) => str.toLowerCase().trim()

  if (exercise.type === 'QCM') {
    return normalize(answer as string) === normalize(exercise.correctAnswer as string)
  }

  if (exercise.type === 'TRUE_FALSE') {
    return normalize(answer as string) === normalize(exercise.correctAnswer as string)
  }

  if (exercise.type === 'FILL_BLANK' || exercise.type === 'OPEN') {
    const correctAnswers = Array.isArray(exercise.correctAnswer)
      ? exercise.correctAnswer
      : [exercise.correctAnswer]

    return correctAnswers.some(correct =>
      normalize(answer as string).includes(normalize(correct))
    )
  }

  return false
}

/**
 * Met à jour les analytics d'un élève
 */
export async function updateStudentAnalytics(studentId: string): Promise<void> {
  try {
    const report = await analyzeStudentWeaknesses(studentId)

    const analytics: StudentAnalytics = {
      id: `analytics_${studentId}`,
      studentId,
      weaknesses: report.weaknesses.map(w => ({
        skill: w.skill,
        failureCount: w.exercisesFailed,
        totalAttempts: w.exercisesTotal,
        lastFailedAt: new Date()
      })),
      strengths: report.strengths.map(s => s.skill),
      averageScore: report.overallScore,
      totalExercisesDone: report.totalHomeworks,
      lastUpdated: new Date()
    }

    // Upsert
    const existing = await dbV2.studentAnalytics.get(analytics.id)
    if (existing) {
      await dbV2.studentAnalytics.update(analytics.id, analytics)
    } else {
      await dbV2.studentAnalytics.add(analytics)
    }

    console.log('[WeaknessAnalyzer] Updated analytics for student:', studentId)
  } catch (error) {
    console.error('[WeaknessAnalyzer] Error updating analytics:', error)
  }
}

/**
 * Recommande des exercices pour combler les faiblesses
 */
export async function recommendExercises(
  studentId: string,
  limit: number = 5
): Promise<Exercise[]> {
  try {
    const report = await analyzeStudentWeaknesses(studentId)

    if (report.weaknesses.length === 0) {
      // Pas de faiblesses détectées, recommander des exercices variés
      return dbV2.exercises
        .orderBy('createdAt')
        .reverse()
        .limit(limit)
        .toArray()
    }

    // Récupérer les compétences faibles
    const weakSkills = report.weaknesses.map(w => w.skill)

    // Chercher des exercices ciblant ces compétences
    const allExercises = await dbV2.exercises.toArray()

    const recommended = allExercises
      .filter(ex => {
        // Exercice doit tester au moins une compétence faible
        return ex.skillsTested?.some(skill => weakSkills.includes(skill))
      })
      .sort((a, b) => {
        // Prioriser les exercices de difficulté progressive
        const aRelevance = a.skillsTested?.filter(s => weakSkills.includes(s)).length || 0
        const bRelevance = b.skillsTested?.filter(s => weakSkills.includes(s)).length || 0
        return bRelevance - aRelevance
      })
      .slice(0, limit)

    return recommended
  } catch (error) {
    console.error('[WeaknessAnalyzer] Error recommending exercises:', error)
    return []
  }
}
