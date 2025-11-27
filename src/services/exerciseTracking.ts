/**
 * Service de tracking des exercices de la bibliothèque
 * Enregistre chaque tentative pour l'analyse ML des forces/faiblesses
 * Fonctionne pour les invités ET les élèves connectés
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/** Tentative d'exercice */
export interface ExerciseAttempt {
  id: string

  // Identification
  profileId: string           // ID du profil (invité ou élève)
  profileType: 'guest' | 'student'

  // Exercice
  exerciseId: string
  subject: string            // "maths", "français", etc.
  level: string              // "CP", "CE1", etc.
  skills: string[]           // ["compter", "addition simple"]
  difficulty: number         // 1-5

  // Question spécifique
  questionId: string
  questionText: string

  // Résultat
  userAnswer: string
  correctAnswer: string
  isCorrect: boolean

  // Métadonnées
  hintsUsed: number
  timeSpent: number          // secondes
  attemptedAt: Date
}

/** Stats par compétence */
export interface SkillStats {
  skill: string
  subject: string

  totalAttempts: number
  correctAttempts: number
  successRate: number        // 0-100

  lastAttemptedAt: Date

  // Classification
  level: 'mastered' | 'good' | 'needs_practice' | 'struggling'
  isWeakness: boolean
  isStrength: boolean
}

/** Analyse globale du profil */
export interface ProfileAnalysis {
  profileId: string
  profileType: 'guest' | 'student'

  // Stats globales
  totalAttempts: number
  correctAnswers: number
  successRate: number

  // Par matière
  subjectStats: {
    [subject: string]: {
      attempts: number
      successRate: number
      skills: SkillStats[]
    }
  }

  // Forces et faiblesses
  topStrengths: SkillStats[]
  topWeaknesses: SkillStats[]

  // Recommandations
  recommendedSkills: string[]

  lastUpdated: Date
}

/** Store pour le tracking */
interface ExerciseTrackingStore {
  attempts: ExerciseAttempt[]

  // Enregistrer une tentative
  recordAttempt: (attempt: Omit<ExerciseAttempt, 'id' | 'attemptedAt'>) => void

  // Obtenir les tentatives d'un profil
  getProfileAttempts: (profileId: string) => ExerciseAttempt[]

  // Analyser un profil
  analyzeProfile: (profileId: string) => ProfileAnalysis

  // Nettoyer les anciennes tentatives (garder 6 derniers mois)
  cleanup: () => void
}

export const useExerciseTracking = create<ExerciseTrackingStore>()(
  persist(
    (set, get) => ({
      attempts: [],

      recordAttempt: (attemptData) => {
        const attempt: ExerciseAttempt = {
          ...attemptData,
          id: `attempt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          attemptedAt: new Date()
        }

        set((state) => ({
          attempts: [...state.attempts, attempt]
        }))

        console.log('[ExerciseTracking] Recorded attempt:', attempt.questionId, attempt.isCorrect ? '✓' : '✗')
      },

      getProfileAttempts: (profileId) => {
        return get().attempts.filter(a => a.profileId === profileId)
      },

      analyzeProfile: (profileId) => {
        const attempts = get().getProfileAttempts(profileId)

        if (attempts.length === 0) {
          return {
            profileId,
            profileType: 'guest',
            totalAttempts: 0,
            correctAnswers: 0,
            successRate: 0,
            subjectStats: {},
            topStrengths: [],
            topWeaknesses: [],
            recommendedSkills: [],
            lastUpdated: new Date()
          }
        }

        const profileType = attempts[0].profileType
        const totalAttempts = attempts.length
        const correctAnswers = attempts.filter(a => a.isCorrect).length
        const successRate = Math.round((correctAnswers / totalAttempts) * 100)

        // Analyser par compétence
        const skillMap = new Map<string, {
          skill: string
          subject: string
          correct: number
          total: number
          lastAttemptedAt: Date
        }>()

        for (const attempt of attempts) {
          for (const skill of attempt.skills) {
            const key = `${attempt.subject}:${skill}`

            if (!skillMap.has(key)) {
              skillMap.set(key, {
                skill,
                subject: attempt.subject,
                correct: 0,
                total: 0,
                lastAttemptedAt: attempt.attemptedAt
              })
            }

            const stats = skillMap.get(key)!
            stats.total++
            if (attempt.isCorrect) stats.correct++
            if (attempt.attemptedAt > stats.lastAttemptedAt) {
              stats.lastAttemptedAt = attempt.attemptedAt
            }
          }
        }

        // Convertir en SkillStats
        const skillStats: SkillStats[] = Array.from(skillMap.values()).map(s => {
          const successRate = Math.round((s.correct / s.total) * 100)

          let level: SkillStats['level'] = 'needs_practice'
          if (successRate >= 90) level = 'mastered'
          else if (successRate >= 70) level = 'good'
          else if (successRate < 50) level = 'struggling'

          return {
            skill: s.skill,
            subject: s.subject,
            totalAttempts: s.total,
            correctAttempts: s.correct,
            successRate,
            lastAttemptedAt: s.lastAttemptedAt,
            level,
            isWeakness: successRate < 60 && s.total >= 3,
            isStrength: successRate >= 80 && s.total >= 3
          }
        })

        // Grouper par matière
        const subjectStats: ProfileAnalysis['subjectStats'] = {}
        for (const stat of skillStats) {
          if (!subjectStats[stat.subject]) {
            subjectStats[stat.subject] = {
              attempts: 0,
              successRate: 0,
              skills: []
            }
          }
          subjectStats[stat.subject].skills.push(stat)
        }

        // Calculer les moyennes par matière
        for (const subject in subjectStats) {
          const skills = subjectStats[subject].skills
          subjectStats[subject].attempts = skills.reduce((sum, s) => sum + s.totalAttempts, 0)
          const avgSuccess = skills.reduce((sum, s) => sum + s.successRate, 0) / skills.length
          subjectStats[subject].successRate = Math.round(avgSuccess)
        }

        // Top forces/faiblesses
        const topStrengths = skillStats
          .filter(s => s.isStrength)
          .sort((a, b) => b.successRate - a.successRate)
          .slice(0, 5)

        const topWeaknesses = skillStats
          .filter(s => s.isWeakness)
          .sort((a, b) => a.successRate - b.successRate)
          .slice(0, 5)

        // Recommandations (compétences avec taux de réussite 40-70%)
        const recommendedSkills = skillStats
          .filter(s => s.successRate >= 40 && s.successRate < 70 && s.totalAttempts >= 2)
          .sort((a, b) => a.successRate - b.successRate)
          .slice(0, 3)
          .map(s => s.skill)

        return {
          profileId,
          profileType,
          totalAttempts,
          correctAnswers,
          successRate,
          subjectStats,
          topStrengths,
          topWeaknesses,
          recommendedSkills,
          lastUpdated: new Date()
        }
      },

      cleanup: () => {
        const sixMonthsAgo = new Date()
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

        set((state) => ({
          attempts: state.attempts.filter(a => a.attemptedAt > sixMonthsAgo)
        }))

        console.log('[ExerciseTracking] Cleaned up old attempts')
      }
    }),
    {
      name: 'captaine-exercise-tracking'
    }
  )
)
