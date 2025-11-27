/**
 * Hook pour synchroniser automatiquement la progression avec le profil actuel
 */

import { useEffect } from 'react'
import { useGamificationStore } from '@/store/useGamificationStore'
import { useGuestProfileStore } from '@/store/useGuestProfileStore'

export function useSyncProgression() {
  const currentProfile = useGuestProfileStore((state) => state.currentProfile)
  const updateProfileProgression = useGuestProfileStore((state) => state.updateProfileProgression)

  useEffect(() => {
    if (!currentProfile) return

    // S'abonner aux changements du store de gamification
    const unsubscribe = useGamificationStore.subscribe((state) => {
      const progressionData = {
        treeProgress: state.treeProgress,
        badges: state.badges,
        totalExercises: state.totalExercises,
        correctAnswers: state.correctAnswers,
        streak: state.streak,
        animalType: state.animalType,
        animalLevel: state.animalLevel,
      }

      // Sauvegarder dans le profil
      updateProfileProgression(currentProfile.name, progressionData)
    })

    return () => {
      unsubscribe()
    }
  }, [currentProfile, updateProfileProgression])
}
