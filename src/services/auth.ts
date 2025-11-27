/**
 * Service d'authentification pour Cap'taine V2
 * Gère le login Prof et Élève
 */

import { dbV2 } from './databaseV2'
import type { Teacher, Student, UserRole } from './databaseV2'

export interface AuthSession {
  userId: string
  role: UserRole
  classroomId?: string  // Pour les élèves
  displayName: string
}

/**
 * Classe de gestion de l'authentification
 */
class AuthService {
  private currentSession: AuthSession | null = null

  constructor() {
    // Restaurer la session depuis localStorage au démarrage
    this.restoreSession()
  }

  /**
   * Restaure la session depuis localStorage
   */
  private restoreSession(): void {
    try {
      const saved = localStorage.getItem('captaine_auth_session')
      if (saved) {
        this.currentSession = JSON.parse(saved)
        console.log('[Auth] Session restored:', this.currentSession?.displayName, this.currentSession?.role)
      }
    } catch (error) {
      console.error('[Auth] Failed to restore session:', error)
      this.currentSession = null
    }
  }

  /**
   * Sauvegarde la session dans localStorage
   */
  private saveSession(): void {
    try {
      if (this.currentSession) {
        localStorage.setItem('captaine_auth_session', JSON.stringify(this.currentSession))
      } else {
        localStorage.removeItem('captaine_auth_session')
      }
    } catch (error) {
      console.error('[Auth] Failed to save session:', error)
    }
  }

  /**
   * Login ÉLÈVE (prénom + code classe)
   */
  async loginStudent(username: string, classroomCode: string): Promise<{ success: boolean; student?: Student; error?: string }> {
    try {
      console.log('[Auth] Student login attempt:', username, classroomCode)

      // Vérifier les champs
      if (!username || !classroomCode) {
        return {
          success: false,
          error: 'Prénom et code de classe requis'
        }
      }

      // Tenter le login
      const student = await dbV2.studentLogin(username.trim(), classroomCode.trim().toUpperCase())

      if (!student) {
        return {
          success: false,
          error: 'Prénom ou code de classe incorrect'
        }
      }

      // Créer la session
      this.currentSession = {
        userId: student.id,
        role: 'student',
        classroomId: student.classroomId,
        displayName: student.firstName
      }

      this.saveSession()

      console.log('[Auth] Student logged in successfully:', student.firstName)

      return {
        success: true,
        student
      }
    } catch (error: any) {
      console.error('[Auth] Student login error:', error)
      return {
        success: false,
        error: error.message || 'Erreur lors de la connexion'
      }
    }
  }

  /**
   * Login PROFESSEUR (email + mot de passe)
   */
  async loginTeacher(email: string, password: string): Promise<{ success: boolean; teacher?: Teacher; error?: string }> {
    try {
      console.log('[Auth] Teacher login attempt:', email)

      // Vérifier les champs
      if (!email || !password) {
        return {
          success: false,
          error: 'Email et mot de passe requis'
        }
      }

      // Récupérer le prof
      const teacher = await dbV2.teachers.where('email').equals(email.toLowerCase()).first()

      if (!teacher) {
        return {
          success: false,
          error: 'Email ou mot de passe incorrect'
        }
      }

      // Vérifier le mot de passe (simple hash - en prod, utiliser bcrypt)
      const isPasswordValid = await this.verifyPassword(password, teacher.passwordHash)

      if (!isPasswordValid) {
        return {
          success: false,
          error: 'Email ou mot de passe incorrect'
        }
      }

      // Mettre à jour lastLoginAt
      teacher.lastLoginAt = new Date()
      await dbV2.teachers.put(teacher)

      // Créer la session
      this.currentSession = {
        userId: teacher.id,
        role: 'teacher',
        displayName: `${teacher.firstName} ${teacher.lastName}`
      }

      this.saveSession()

      console.log('[Auth] Teacher logged in successfully:', teacher.email)

      return {
        success: true,
        teacher
      }
    } catch (error: any) {
      console.error('[Auth] Teacher login error:', error)
      return {
        success: false,
        error: error.message || 'Erreur lors de la connexion'
      }
    }
  }

  /**
   * Login INVITÉ (Guest mode - pas de compte requis)
   */
  async loginGuest(name: string): Promise<{ success: boolean; error?: string }> {
    try {
      console.log('[Auth] Guest login attempt:', name)

      // Vérifier le nom
      if (!name || name.trim().length === 0) {
        return {
          success: false,
          error: 'Un nom est requis'
        }
      }

      // Créer une session invité (pas de DB)
      this.currentSession = {
        userId: `guest_${Date.now()}`,
        role: 'guest',
        displayName: name.trim()
      }

      this.saveSession()

      console.log('[Auth] Guest logged in successfully:', name)

      return {
        success: true
      }
    } catch (error: any) {
      console.error('[Auth] Guest login error:', error)
      return {
        success: false,
        error: error.message || 'Erreur lors de la connexion'
      }
    }
  }

  /**
   * Inscription PROFESSEUR
   */
  async registerTeacher(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<{ success: boolean; teacher?: Teacher; error?: string }> {
    try {
      console.log('[Auth] Teacher registration attempt:', email)

      // Vérifier les champs
      if (!firstName || !lastName || !email || !password) {
        return {
          success: false,
          error: 'Tous les champs sont requis'
        }
      }

      // Vérifier si l'email existe déjà
      const existing = await dbV2.teachers.where('email').equals(email.toLowerCase()).first()
      if (existing) {
        return {
          success: false,
          error: 'Cet email est déjà utilisé'
        }
      }

      // Hash du mot de passe (simple en dev - utiliser bcrypt en prod)
      const passwordHash = await this.hashPassword(password)

      // Créer le prof
      const teacher: Teacher = {
        id: `tchr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.toLowerCase().trim(),
        passwordHash,
        createdAt: new Date(),
        classroomIds: []
      }

      await dbV2.teachers.add(teacher)

      console.log('[Auth] Teacher registered successfully:', teacher.email)

      // Auto-login après inscription
      this.currentSession = {
        userId: teacher.id,
        role: 'teacher',
        displayName: `${teacher.firstName} ${teacher.lastName}`
      }

      this.saveSession()

      return {
        success: true,
        teacher
      }
    } catch (error: any) {
      console.error('[Auth] Teacher registration error:', error)
      return {
        success: false,
        error: error.message || 'Erreur lors de l\'inscription'
      }
    }
  }

  /**
   * Déconnexion
   */
  logout(): void {
    console.log('[Auth] Logging out:', this.currentSession?.displayName)
    this.currentSession = null
    this.saveSession()
  }

  /**
   * Vérifie si l'utilisateur est connecté
   */
  isAuthenticated(): boolean {
    return this.currentSession !== null
  }

  /**
   * Récupère la session actuelle
   */
  getSession(): AuthSession | null {
    return this.currentSession
  }

  /**
   * Vérifie si l'utilisateur est un prof
   */
  isTeacher(): boolean {
    return this.currentSession?.role === 'teacher'
  }

  /**
   * Vérifie si l'utilisateur est un élève
   */
  isStudent(): boolean {
    return this.currentSession?.role === 'student'
  }

  /**
   * Hash simple de mot de passe (EN DEV - utiliser bcrypt en prod)
   */
  private async hashPassword(password: string): Promise<string> {
    // EN PRODUCTION: utiliser bcrypt ou argon2
    // Pour l'instant, simple hash SHA-256
    const encoder = new TextEncoder()
    const data = encoder.encode(password)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  }

  /**
   * Vérifie un mot de passe
   */
  private async verifyPassword(password: string, hash: string): Promise<boolean> {
    const passwordHash = await this.hashPassword(password)
    return passwordHash === hash
  }
}

/**
 * Instance singleton du service d'authentification
 */
export const authService = new AuthService()
