/**
 * Store Zustand pour l'authentification
 */

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { authService, type AuthSession } from '@/services/auth'
import type { Teacher, Student } from '@/services/databaseV2'

interface AuthState {
  // Session actuelle
  session: AuthSession | null
  currentUser: Teacher | Student | null

  // Actions
  loginStudent: (username: string, classroomCode: string) => Promise<{ success: boolean; error?: string }>
  loginTeacher: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  loginGuest: (name: string) => Promise<{ success: boolean; error?: string }>
  registerTeacher: (firstName: string, lastName: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void

  // Helpers
  isAuthenticated: () => boolean
  isTeacher: () => boolean
  isStudent: () => boolean
  isGuest: () => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // État initial
      session: authService.getSession(),
      currentUser: null,

      // Login élève
      loginStudent: async (username, classroomCode) => {
        const result = await authService.loginStudent(username, classroomCode)

        if (result.success && result.student) {
          set({
            session: authService.getSession(),
            currentUser: result.student
          })
        }

        return {
          success: result.success,
          error: result.error
        }
      },

      // Login prof
      loginTeacher: async (email, password) => {
        const result = await authService.loginTeacher(email, password)

        if (result.success && result.teacher) {
          set({
            session: authService.getSession(),
            currentUser: result.teacher
          })
        }

        return {
          success: result.success,
          error: result.error
        }
      },

      // Login invité
      loginGuest: async (name) => {
        const result = await authService.loginGuest(name)

        if (result.success) {
          set({
            session: authService.getSession(),
            currentUser: null // Pas d'utilisateur DB pour les invités
          })
        }

        return {
          success: result.success,
          error: result.error
        }
      },

      // Inscription prof
      registerTeacher: async (firstName, lastName, email, password) => {
        const result = await authService.registerTeacher(firstName, lastName, email, password)

        if (result.success && result.teacher) {
          set({
            session: authService.getSession(),
            currentUser: result.teacher
          })
        }

        return {
          success: result.success,
          error: result.error
        }
      },

      // Déconnexion
      logout: () => {
        authService.logout()
        set({
          session: null,
          currentUser: null
        })
      },

      // Helpers
      isAuthenticated: () => {
        return get().session !== null
      },

      isTeacher: () => {
        return get().session?.role === 'teacher'
      },

      isStudent: () => {
        return get().session?.role === 'student'
      },

      isGuest: () => {
        return get().session?.role === 'guest'
      }
    }),
    {
      name: 'captaine-auth-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        session: state.session
        // currentUser se recharge au besoin
      })
    }
  )
)
