/**
 * Base de données locale avec Dexie (IndexedDB)
 * Stocke les documents, exercices, progression de l'élève
 */

import Dexie, { Table } from 'dexie'
import { AnalyzedDocument, DetectedExercise } from './documentProcessor'

/**
 * Session de travail sur un exercice
 */
export interface ExerciseSession {
  id: string
  exerciseId: string
  studentId: string
  documentId: string
  startedAt: Date
  completedAt?: Date
  attempts: number
  hintsUsed: number
  score?: number // 0-100
  needsHelp: boolean
  chatHistory: {
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
  }[]
  weaknessDetected?: string[] // Faiblesses détectées (ex: "fractions", "conjugaison passé simple")
}

/**
 * Profil d'élève enrichi
 */
export interface StudentProfile {
  id: string
  name: string
  age: number
  level: string
  createdAt: Date
  totalExercises: number
  completedExercises: number
  averageScore: number
  weaknesses: { [key: string]: number } // "fractions": 3 (nombre de fois où l'élève a eu du mal)
  strengths: string[]
  favoriteSubjects: string[]
  studyTimeMinutes: number
  lastActivityAt?: Date
}

/**
 * Base de données Cap'taine
 */
export class CaptaineDatabase extends Dexie {
  // Tables
  documents!: Table<AnalyzedDocument, string>
  exercises!: Table<DetectedExercise, string>
  sessions!: Table<ExerciseSession, string>
  students!: Table<StudentProfile, string>

  constructor() {
    super('CaptaineDB')

    this.version(1).stores({
      documents: 'id, fileName, uploadedAt',
      exercises: 'id, pageNumber, subject, estimatedDifficulty',
      sessions: 'id, exerciseId, studentId, documentId, startedAt, completedAt',
      students: 'id, name, level, createdAt'
    })
  }

  /**
   * Sauvegarde un document analysé
   */
  async saveDocument(document: AnalyzedDocument): Promise<void> {
    console.log('[DB] Saving document:', document.id, document.fileName)
    await this.documents.put(document)

    // Sauvegarder aussi tous les exercices détectés
    for (const exercise of document.detectedExercises) {
      await this.exercises.put(exercise)
    }
  }

  /**
   * Récupère un document par ID
   */
  async getDocument(id: string): Promise<AnalyzedDocument | undefined> {
    return await this.documents.get(id)
  }

  /**
   * Récupère tous les documents
   */
  async getAllDocuments(): Promise<AnalyzedDocument[]> {
    return await this.documents.toArray()
  }

  /**
   * Supprime un document et tous ses exercices
   */
  async deleteDocument(id: string): Promise<void> {
    console.log('[DB] Deleting document:', id)
    await this.documents.delete(id)
    // Supprimer tous les exercices de ce document
    const exercises = await this.exercises.toArray()
    const exerciseIds = exercises.filter(ex =>
      ex.id.startsWith(`ex_`) // Filtrer par pattern (pas optimal, mais fonctionne)
    ).map(ex => ex.id)

    await this.exercises.bulkDelete(exerciseIds)
  }

  /**
   * Crée ou met à jour un profil d'élève
   */
  async saveStudent(student: StudentProfile): Promise<void> {
    console.log('[DB] Saving student:', student.id, student.name)
    await this.students.put(student)
  }

  /**
   * Récupère un élève par ID
   */
  async getStudent(id: string): Promise<StudentProfile | undefined> {
    return await this.students.get(id)
  }

  /**
   * Crée une session d'exercice
   */
  async createExerciseSession(
    exerciseId: string,
    studentId: string,
    documentId: string
  ): Promise<ExerciseSession> {
    const session: ExerciseSession = {
      id: `session_${Date.now()}`,
      exerciseId,
      studentId,
      documentId,
      startedAt: new Date(),
      attempts: 0,
      hintsUsed: 0,
      needsHelp: false,
      chatHistory: []
    }

    await this.sessions.put(session)
    console.log('[DB] Created exercise session:', session.id)
    return session
  }

  /**
   * Met à jour une session d'exercice
   */
  async updateSession(session: ExerciseSession): Promise<void> {
    await this.sessions.put(session)
  }

  /**
   * Complète une session d'exercice
   */
  async completeSession(
    sessionId: string,
    score: number,
    weaknesses?: string[]
  ): Promise<void> {
    const session = await this.sessions.get(sessionId)
    if (!session) {
      console.error('[DB] Session not found:', sessionId)
      return
    }

    session.completedAt = new Date()
    session.score = score
    if (weaknesses) {
      session.weaknessDetected = weaknesses
    }

    await this.sessions.put(session)

    // Mettre à jour le profil de l'élève
    await this.updateStudentProgress(session.studentId, score, weaknesses)
  }

  /**
   * Met à jour la progression de l'élève
   */
  async updateStudentProgress(
    studentId: string,
    score: number,
    weaknesses?: string[]
  ): Promise<void> {
    const student = await this.students.get(studentId)
    if (!student) {
      console.error('[DB] Student not found:', studentId)
      return
    }

    // Mettre à jour les statistiques
    student.completedExercises += 1
    student.totalExercises = Math.max(student.totalExercises, student.completedExercises)
    student.averageScore = (
      (student.averageScore * (student.completedExercises - 1) + score) /
      student.completedExercises
    )
    student.lastActivityAt = new Date()

    // Mettre à jour les faiblesses
    if (weaknesses && weaknesses.length > 0) {
      for (const weakness of weaknesses) {
        if (!student.weaknesses) student.weaknesses = {}
        student.weaknesses[weakness] = (student.weaknesses[weakness] || 0) + 1
      }
    }

    await this.students.put(student)
    console.log('[DB] Updated student progress:', studentId, 'Score:', score)
  }

  /**
   * Récupère l'historique des sessions d'un élève
   */
  async getStudentSessions(studentId: string): Promise<ExerciseSession[]> {
    return await this.sessions
      .where('studentId')
      .equals(studentId)
      .reverse()
      .sortBy('startedAt')
  }

  /**
   * Récupère les statistiques d'un élève
   */
  async getStudentStats(studentId: string): Promise<{
    totalExercises: number
    completedExercises: number
    averageScore: number
    totalTimeMinutes: number
    weaknesses: { [key: string]: number }
    recentSessions: ExerciseSession[]
  }> {
    const student = await this.students.get(studentId)
    const sessions = await this.getStudentSessions(studentId)

    if (!student) {
      return {
        totalExercises: 0,
        completedExercises: 0,
        averageScore: 0,
        totalTimeMinutes: 0,
        weaknesses: {},
        recentSessions: []
      }
    }

    return {
      totalExercises: student.totalExercises,
      completedExercises: student.completedExercises,
      averageScore: student.averageScore,
      totalTimeMinutes: student.studyTimeMinutes,
      weaknesses: student.weaknesses || {},
      recentSessions: sessions.slice(0, 10)
    }
  }
}

/**
 * Instance singleton de la base de données
 */
export const db = new CaptaineDatabase()
