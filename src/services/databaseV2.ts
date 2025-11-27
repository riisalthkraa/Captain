/**
 * Base de données V2 - Système Multi-tenant (Professeur/Élève)
 * Support complet du workflow classe/devoirs/analytics
 */

import Dexie, { Table } from 'dexie'

// ==========================================
// TYPES & INTERFACES
// ==========================================

export type StudentLevel = 'CP' | 'CE1' | 'CE2' | 'CM1' | 'CM2' | '6ème' | '5ème' | '4ème' | '3ème'
export type UserRole = 'teacher' | 'student' | 'guest'
export type ExerciseType = 'QCM' | 'OPEN' | 'TRUE_FALSE' | 'FILL_BLANK' | 'DRAG_DROP'
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'
export type Severity = 'low' | 'medium' | 'high'
export type Trend = 'improving' | 'stable' | 'declining'

/** CLASSE (Classroom) */
export interface Classroom {
  id: string                    // "cls_abc123"
  name: string                  // "CM2-A"
  level: StudentLevel           // "CM2"

  // Authentification simple
  accessCode: string            // "PIRATES2024" (mot de passe commun)

  // Professeur propriétaire
  teacherId: string
  teacherName: string

  // Configuration
  subjects: string[]            // ["Mathématiques", "Français", "Histoire"]
  schoolYear: string            // "2024-2025"

  // Métadonnées
  createdAt: Date
  isArchived: boolean

  // Stats rapides
  totalStudents: number
  activeStudents: number        // Connectés cette semaine
}

/** ÉLÈVE (Student) */
export interface Student {
  id: string                    // "std_xyz789"

  // Identité
  firstName: string             // "Théo"
  lastName?: string             // Optionnel

  // Authentification ULTRA SIMPLE
  username: string              // "theo" (juste le prénom en minuscule)
  classroomId: string           // "cls_abc123"

  // Métadonnées
  age: number
  level: StudentLevel
  avatarEmoji?: string          // "🦁" choisi par l'élève

  joinedAt: Date
  lastLoginAt?: Date

  // Gamification (profil personnel)
  xp: number
  coins: number
  studentLevel: number          // Niveau gamification (pas niveau scolaire)
  badges: string[]

  // Compagnon
  companionType: 'chat' | 'chien' | 'lapin' | 'oiseau' | 'perroquet' | 'dauphin'
  companionLevel: number
  companionName?: string
}

/** PROFESSEUR (Teacher) */
export interface Teacher {
  id: string                    // "tchr_001"

  // Identité
  firstName: string
  lastName: string
  email: string

  // Authentification
  passwordHash: string          // Hash du mot de passe

  // Métadonnées
  createdAt: Date
  lastLoginAt?: Date

  // Classes gérées
  classroomIds: string[]
}

/** LEÇON (Lesson) */
export interface Lesson {
  id: string                    // "lsn_001"
  classroomId: string

  // Contenu
  title: string                 // "Les Fractions - Introduction"
  subject: string               // "Mathématiques"
  topic: string                 // "Fractions"

  content: {
    type: 'text' | 'markdown' | 'video' | 'pdf'
    body: string                // Contenu principal
    attachments?: {
      name: string
      url: string
      type: string
    }[]

    // Contenu enrichi
    summary: string             // Résumé auto-généré par IA
    keyPoints: string[]         // Points clés à retenir
    examples: string[]          // Exemples illustratifs
  }

  // Métadonnées
  difficulty: 1 | 2 | 3 | 4 | 5
  estimatedTime: number         // minutes

  publishedAt: Date
  isPublished: boolean

  // Stats
  views: number
  studentsCompleted: string[]   // IDs des élèves ayant marqué "compris"
}

/** EXERCICE (Exercise) */
export interface Exercise {
  id: string                    // "ex_001"

  // Source
  createdBy: 'teacher' | 'ai'
  teacherId?: string

  // Contenu
  subject: string
  topic: string                 // "Fractions - Addition"

  question: string
  type: ExerciseType

  // Pour QCM
  choices?: string[]
  correctAnswer: string | string[]

  // Aide
  hints: string[]               // Indices progressifs
  explanation: string           // Explication de la réponse

  // Métadonnées
  difficulty: 1 | 2 | 3 | 4 | 5
  skillsTested: string[]        // ["fractions", "addition", "dénominateurs"]
  xpReward: number

  // Stats globales
  totalAttempts: number
  successRate: number           // %

  createdAt: Date
}

/** DEVOIR (Homework) */
export interface Homework {
  id: string                    // "hw_001"
  classroomId: string
  teacherId: string

  // Métadonnées
  title: string                 // "Devoir Maison - Les Fractions"
  subject: string
  description?: string

  // Contenu
  lessonIds: string[]           // IDs des leçons à réviser
  exerciseIds: string[]         // IDs des exercices à faire

  // Configuration
  dueDate: Date
  allowLateSubmission: boolean
  showCorrection: 'immediate' | 'after_deadline' | 'manual'

  // Aide autorisée
  allowHints: boolean
  maxHintsPerExercise: number

  // Publication
  assignedAt: Date
  isPublished: boolean

  // Stats (calculées dynamiquement)
  totalStudents?: number
  studentsCompleted?: number
  studentsInProgress?: number
  averageScore?: number
}

/** SOUMISSION DEVOIR (HomeworkSubmission) */
export interface HomeworkSubmission {
  id: string
  homeworkId: string
  studentId: string

  // Timing
  startedAt: Date
  submittedAt?: Date
  isLate: boolean

  // Résultats par exercice
  exerciseResults: Array<{
    exerciseId: string

    // Tentatives
    attempts: number
    hintsUsed: number

    // Réponse
    studentAnswer: string | string[]
    isCorrect: boolean

    // Temps passé
    timeSpent: number           // secondes

    // Compétences évaluées
    skillsResults: {
      [skill: string]: 'mastered' | 'ok' | 'needs_work' | 'failed'
    }
  }>

  // Score global
  totalExercises: number
  correctAnswers: number
  score: number                 // 0-100

  // Détection automatique des difficultés
  weaknessesDetected: Array<{
    skill: string               // "division de fractions"
    severity: Severity
    exercisesFailed: string[]
  }>

  // Feedback prof (optionnel)
  teacherComment?: string
  teacherGrade?: number
}

/** ANALYTICS PAR ÉLÈVE (StudentAnalytics) */
export interface StudentAnalytics {
  studentId: string
  classroomId: string

  // Vue globale
  overall: {
    totalExercisesDone: number
    averageScore: number
    totalTimeSpent: number      // minutes
    streak: number              // jours consécutifs
    lastActivity: Date
  }

  // Par matière
  subjects: {
    [subject: string]: {
      exercisesDone: number
      averageScore: number

      // Progression temporelle
      progressionCurve: Array<{
        date: Date
        score: number
      }>

      // Par compétence
      skills: {
        [skill: string]: {
          level: SkillLevel
          exercisesDone: number
          successRate: number
          needsReview: boolean
        }
      }
    }
  }

  // Faiblesses identifiées
  weaknesses: Array<{
    skill: string
    subject: string
    occurrences: number         // Nombre de fois échoué
    lastFailedAt: Date
    severity: Severity

    // Recommandations auto
    recommendedExercises: string[]
  }>

  // Forces
  strengths: Array<{
    skill: string
    subject: string
    successRate: number
  }>

  // Comparaison classe
  classRank?: number            // Position dans la classe
  percentile?: number           // Top 20%

  lastUpdated: Date
}

/** ANALYTICS CLASSE (ClassroomAnalytics) */
export interface ClassroomAnalytics {
  classroomId: string
  generatedAt: Date

  // Vue d'ensemble
  overview: {
    totalStudents: number
    activeStudents: number      // Actifs cette semaine
    averageScore: number
    totalExercisesDone: number
  }

  // Heatmap des compétences de TOUTE la classe
  skillsHeatmap: Array<{
    skill: string
    subject: string

    // Distribution des élèves
    distribution: {
      expert: number            // Nb d'élèves "expert"
      advanced: number
      intermediate: number
      beginner: number
      struggling: number        // < 50% réussite
    }

    averageScore: number
    totalAttempts: number

    // Tendance
    trend: Trend

    // Alertes
    alert?: {
      type: 'majority_struggling' | 'no_one_mastered'
      message: string
      studentsAffected: number
    }
  }>

  // Top élèves en difficulté (besoin de soutien)
  studentsNeedingHelp: Array<{
    studentId: string
    studentName: string

    issues: Array<{
      skill: string
      score: number
      failedExercises: number
    }>

    overallScore: number
    recommendation: string
  }>

  // Top performers (pour valorisation)
  topPerformers: Array<{
    studentId: string
    studentName: string
    averageScore: number
    strengths: string[]
  }>

  // Comparaison devoirs
  homeworkComparison: Array<{
    homeworkId: string
    homeworkTitle: string

    completionRate: number      // % élèves ayant rendu
    averageScore: number

    difficultExercises: Array<{
      exerciseId: string
      successRate: number
      commonMistakes: string[]
    }>
  }>
}

// ==========================================
// BASE DE DONNÉES DEXIE
// ==========================================

export class CaptaineDatabaseV2 extends Dexie {
  // Tables
  classrooms!: Table<Classroom, string>
  students!: Table<Student, string>
  teachers!: Table<Teacher, string>
  lessons!: Table<Lesson, string>
  exercises!: Table<Exercise, string>
  homeworks!: Table<Homework, string>
  submissions!: Table<HomeworkSubmission, string>
  studentAnalytics!: Table<StudentAnalytics, string>
  classroomAnalytics!: Table<ClassroomAnalytics, string>

  constructor() {
    super('CaptaineV2DB')

    // Version 2 avec tous les indexes
    this.version(2).stores({
      classrooms: 'id, accessCode, teacherId, createdAt',
      students: 'id, classroomId, username, lastLoginAt',
      teachers: 'id, email, createdAt',
      lessons: 'id, classroomId, subject, topic, publishedAt',
      exercises: 'id, subject, topic, difficulty, createdBy, createdAt',
      homeworks: 'id, classroomId, teacherId, dueDate, isPublished',
      submissions: 'id, homeworkId, studentId, submittedAt, score',
      studentAnalytics: 'studentId, classroomId, lastUpdated',
      classroomAnalytics: 'classroomId, generatedAt'
    })
  }

  // ==========================================
  // MÉTHODES UTILITAIRES - CLASSROOM
  // ==========================================

  /**
   * Crée une nouvelle classe
   */
  async createClassroom(data: Omit<Classroom, 'id' | 'createdAt' | 'totalStudents' | 'activeStudents'>): Promise<Classroom> {
    const classroom: Classroom = {
      id: `cls_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...data,
      createdAt: new Date(),
      totalStudents: 0,
      activeStudents: 0
    }

    await this.classrooms.add(classroom)
    console.log('[DBV2] Classroom created:', classroom.id, classroom.name)
    return classroom
  }

  /**
   * Récupère une classe par code d'accès
   */
  async getClassroomByAccessCode(accessCode: string): Promise<Classroom | undefined> {
    return await this.classrooms.where('accessCode').equals(accessCode).first()
  }

  /**
   * Récupère toutes les classes d'un prof
   */
  async getTeacherClassrooms(teacherId: string): Promise<Classroom[]> {
    return await this.classrooms.where('teacherId').equals(teacherId).toArray()
  }

  // ==========================================
  // MÉTHODES UTILITAIRES - STUDENT
  // ==========================================

  /**
   * Crée un nouvel élève
   */
  async createStudent(data: Omit<Student, 'id' | 'joinedAt' | 'xp' | 'coins' | 'studentLevel' | 'badges' | 'companionLevel'>): Promise<Student> {
    const student: Student = {
      id: `std_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...data,
      joinedAt: new Date(),
      xp: 0,
      coins: 0,
      studentLevel: 1,
      badges: [],
      companionLevel: 1
    }

    await this.students.add(student)

    // Mettre à jour le compteur de la classe
    const classroom = await this.classrooms.get(student.classroomId)
    if (classroom) {
      classroom.totalStudents += 1
      await this.classrooms.put(classroom)
    }

    console.log('[DBV2] Student created:', student.id, student.firstName)
    return student
  }

  /**
   * Login élève (username + code classe)
   */
  async studentLogin(username: string, classroomCode: string): Promise<Student | null> {
    // Trouver la classe
    const classroom = await this.getClassroomByAccessCode(classroomCode)
    if (!classroom) {
      console.error('[DBV2] Classroom not found with code:', classroomCode)
      return null
    }

    // Trouver l'élève dans cette classe
    const student = await this.students
      .where('classroomId').equals(classroom.id)
      .and(s => s.username.toLowerCase() === username.toLowerCase())
      .first()

    if (!student) {
      console.error('[DBV2] Student not found:', username, 'in classroom', classroom.id)
      return null
    }

    // Mettre à jour lastLoginAt
    student.lastLoginAt = new Date()
    await this.students.put(student)

    console.log('[DBV2] Student logged in:', student.firstName, student.id)
    return student
  }

  /**
   * Récupère tous les élèves d'une classe
   */
  async getClassroomStudents(classroomId: string): Promise<Student[]> {
    return await this.students.where('classroomId').equals(classroomId).toArray()
  }

  // ==========================================
  // MÉTHODES UTILITAIRES - HOMEWORK
  // ==========================================

  /**
   * Crée un nouveau devoir
   */
  async createHomework(data: Omit<Homework, 'id' | 'assignedAt'>): Promise<Homework> {
    const homework: Homework = {
      id: `hw_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...data,
      assignedAt: new Date()
    }

    await this.homeworks.add(homework)
    console.log('[DBV2] Homework created:', homework.id, homework.title)
    return homework
  }

  /**
   * Récupère les devoirs d'une classe
   */
  async getClassroomHomeworks(classroomId: string): Promise<Homework[]> {
    return await this.homeworks
      .where('classroomId')
      .equals(classroomId)
      .reverse()
      .sortBy('assignedAt')
  }

  /**
   * Récupère les devoirs d'un élève (via sa classe)
   */
  async getStudentHomeworks(studentId: string): Promise<Homework[]> {
    const student = await this.students.get(studentId)
    if (!student) return []

    return await this.getClassroomHomeworks(student.classroomId)
  }

  // ==========================================
  // MÉTHODES UTILITAIRES - SUBMISSION
  // ==========================================

  /**
   * Démarre une soumission de devoir
   */
  async startHomeworkSubmission(homeworkId: string, studentId: string): Promise<HomeworkSubmission> {
    const submission: HomeworkSubmission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      homeworkId,
      studentId,
      startedAt: new Date(),
      isLate: false,
      exerciseResults: [],
      totalExercises: 0,
      correctAnswers: 0,
      score: 0,
      weaknessesDetected: []
    }

    await this.submissions.add(submission)
    console.log('[DBV2] Homework submission started:', submission.id)
    return submission
  }

  /**
   * Récupère une soumission
   */
  async getSubmission(homeworkId: string, studentId: string): Promise<HomeworkSubmission | undefined> {
    return await this.submissions
      .where('homeworkId').equals(homeworkId)
      .and(s => s.studentId === studentId)
      .first()
  }

  /**
   * Met à jour une soumission
   */
  async updateSubmission(submission: HomeworkSubmission): Promise<void> {
    await this.submissions.put(submission)
  }

  /**
   * Soumet un devoir (marque comme terminé)
   */
  async submitHomework(submissionId: string): Promise<void> {
    const submission = await this.submissions.get(submissionId)
    if (!submission) return

    submission.submittedAt = new Date()

    // Vérifier si en retard
    const homework = await this.homeworks.get(submission.homeworkId)
    if (homework && submission.submittedAt > homework.dueDate) {
      submission.isLate = true
    }

    await this.submissions.put(submission)
    console.log('[DBV2] Homework submitted:', submissionId)
  }

  // ==========================================
  // MÉTHODES UTILITAIRES - ANALYTICS
  // ==========================================

  /**
   * Génère ou met à jour les analytics d'un élève
   */
  async updateStudentAnalytics(studentId: string): Promise<void> {
    const student = await this.students.get(studentId)
    if (!student) return

    // Récupérer toutes les soumissions de l'élève
    const submissions = await this.submissions
      .where('studentId')
      .equals(studentId)
      .toArray()

    // Calculer les stats globales
    const totalExercisesDone = submissions.reduce((sum, sub) => sum + sub.totalExercises, 0)
    const averageScore = submissions.length > 0
      ? submissions.reduce((sum, sub) => sum + sub.score, 0) / submissions.length
      : 0

    const analytics: StudentAnalytics = {
      studentId,
      classroomId: student.classroomId,
      overall: {
        totalExercisesDone,
        averageScore,
        totalTimeSpent: 0, // TODO: calculer depuis submissions
        streak: 0, // TODO: calculer
        lastActivity: student.lastLoginAt || new Date()
      },
      subjects: {},
      weaknesses: [],
      strengths: [],
      lastUpdated: new Date()
    }

    await this.studentAnalytics.put(analytics)
    console.log('[DBV2] Student analytics updated:', studentId)
  }

  /**
   * Récupère les analytics d'un élève
   */
  async getStudentAnalytics(studentId: string): Promise<StudentAnalytics | undefined> {
    return await this.studentAnalytics.get(studentId)
  }

  /**
   * Génère les analytics d'une classe
   */
  async generateClassroomAnalytics(classroomId: string): Promise<ClassroomAnalytics> {
    const students = await this.getClassroomStudents(classroomId)

    // Calculer les stats
    const totalStudents = students.length
    const activeStudents = students.filter(s => {
      if (!s.lastLoginAt) return false
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      return s.lastLoginAt > weekAgo
    }).length

    const analytics: ClassroomAnalytics = {
      classroomId,
      generatedAt: new Date(),
      overview: {
        totalStudents,
        activeStudents,
        averageScore: 0,
        totalExercisesDone: 0
      },
      skillsHeatmap: [],
      studentsNeedingHelp: [],
      topPerformers: [],
      homeworkComparison: []
    }

    await this.classroomAnalytics.put(analytics)
    console.log('[DBV2] Classroom analytics generated:', classroomId)
    return analytics
  }
}

/**
 * Instance singleton de la base de données V2
 */
export const dbV2 = new CaptaineDatabaseV2()
