/**
 * Store pour les profils invités (multi-profils locaux)
 */

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { StudentLevel } from './useAppStore'

interface Badge {
  id: string
  name: string
  description: string
  icon: string
  unlockedAt?: Date
}

interface TreeProgress {
  level: number
  experience: number
  maxExperience: number
}

interface GamificationProgress {
  treeProgress: TreeProgress
  badges: Badge[]
  totalExercises: number
  correctAnswers: number
  streak: number
  animalType: 'chat' | 'chien' | 'lapin' | 'oiseau'
  animalLevel: number
}

export interface GuestProfile {
  name: string
  age: number
  level: StudentLevel
  createdAt: Date
  lastUsed: Date
  progression: GamificationProgress
}

interface GuestProfileState {
  profiles: GuestProfile[]
  currentProfile: GuestProfile | null

  // Actions
  createProfile: (name: string, age: number, level: StudentLevel) => void
  updateProfile: (name: string, updates: Partial<GuestProfile>) => void
  deleteProfile: (name: string) => void
  selectProfile: (name: string) => GuestProfile | null
  getAllProfiles: () => GuestProfile[]
  getProfileByName: (name: string) => GuestProfile | null
  updateProfileProgression: (name: string, progression: GamificationProgress) => void
}

const createDefaultProgression = (): GamificationProgress => ({
  treeProgress: {
    level: 1,
    experience: 0,
    maxExperience: 100,
  },
  badges: [
    { id: '1', name: 'Premier pas', description: 'Termine ton premier exercice', icon: '🌟' },
    { id: '2', name: 'Maître des fractions', description: 'Résous 10 exercices sur les fractions', icon: '🍕' },
    { id: '3', name: 'Série de 7', description: 'Résous 7 exercices d\'affilée', icon: '🔥' },
    { id: '4', name: 'Explorateur', description: 'Essaie 3 matières différentes', icon: '🗺️' },
    { id: '5', name: 'Persévérant', description: 'Travaille 5 jours de suite', icon: '💪' },
    { id: '6', name: 'As des maths', description: 'Obtiens 100% à 5 exercices de maths', icon: '🧮' },
    { id: '7', name: 'Grammairien', description: 'Réussis 20 exercices de français', icon: '📚' },
    { id: '8', name: 'Scientifique', description: 'Termine tous les quiz de sciences', icon: '🔬' },
    { id: '9', name: 'Champion', description: 'Atteins le niveau 10', icon: '🏆' },
    { id: '10', name: 'Curieux', description: 'Pose 50 questions à Cap\'taine', icon: '🤔' },
    { id: '11', name: 'Rapide', description: 'Résous un exercice en moins de 30 secondes', icon: '⚡' },
    { id: '12', name: 'Perfectionniste', description: 'Obtiens 100% à 10 exercices différents', icon: '✨' },
    { id: '13', name: 'Marathonien', description: 'Travaille 30 jours de suite', icon: '🏃' },
    { id: '14', name: 'Polyglotte', description: 'Réussis 15 exercices d\'anglais', icon: '🇬🇧' },
    { id: '15', name: 'Génie', description: 'Atteins le niveau 25', icon: '🧠' },
  ],
  totalExercises: 0,
  correctAnswers: 0,
  streak: 0,
  animalType: 'chat',
  animalLevel: 1,
})

export const useGuestProfileStore = create<GuestProfileState>()(
  persist(
    (set, get) => ({
      profiles: [],
      currentProfile: null,

      createProfile: (name, age, level) => {
        const profile: GuestProfile = {
          name: name.trim(),
          age,
          level,
          createdAt: new Date(),
          lastUsed: new Date(),
          progression: createDefaultProgression()
        }

        set((state) => ({
          profiles: [...state.profiles.filter(p => p.name !== name), profile],
          currentProfile: profile
        }))

        console.log('[GuestProfile] Profile created:', name)
      },

      updateProfile: (name, updates) => {
        set((state) => {
          const profiles = state.profiles.map(p =>
            p.name === name
              ? { ...p, ...updates, lastUsed: new Date() }
              : p
          )

          const currentProfile = state.currentProfile?.name === name
            ? { ...state.currentProfile, ...updates, lastUsed: new Date() }
            : state.currentProfile

          return { profiles, currentProfile }
        })

        console.log('[GuestProfile] Profile updated:', name)
      },

      deleteProfile: (name) => {
        set((state) => ({
          profiles: state.profiles.filter(p => p.name !== name),
          currentProfile: state.currentProfile?.name === name ? null : state.currentProfile
        }))

        console.log('[GuestProfile] Profile deleted:', name)
      },

      selectProfile: (name) => {
        let profile = get().profiles.find(p => p.name === name)

        if (profile) {
          // Migration: Ajouter la progression par défaut si elle n'existe pas
          if (!(profile as any).progression) {
            console.log('[GuestProfile] Migrating profile without progression:', name)
            const migratedProfile = {
              ...profile,
              progression: createDefaultProgression()
            }

            // Mettre à jour le profil avec la progression
            set((state) => ({
              profiles: state.profiles.map(p =>
                p.name === name ? migratedProfile : p
              )
            }))

            profile = migratedProfile
          }

          // Mettre à jour lastUsed
          get().updateProfile(name, {})

          set({ currentProfile: profile })
          console.log('[GuestProfile] Profile selected:', name)
          return profile
        }

        console.warn('[GuestProfile] Profile not found:', name)
        return null
      },

      getAllProfiles: () => {
        return get().profiles.sort((a, b) =>
          new Date(b.lastUsed).getTime() - new Date(a.lastUsed).getTime()
        )
      },

      getProfileByName: (name) => {
        return get().profiles.find(p => p.name === name) || null
      },

      updateProfileProgression: (name, progression) => {
        set((state) => {
          const profiles = state.profiles.map(p =>
            p.name === name
              ? { ...p, progression, lastUsed: new Date() }
              : p
          )

          const currentProfile = state.currentProfile?.name === name
            ? { ...state.currentProfile, progression, lastUsed: new Date() }
            : state.currentProfile

          return { profiles, currentProfile }
        })

        console.log('[GuestProfile] Progression updated for:', name)
      }
    }),
    {
      name: 'captaine-guest-profiles',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
