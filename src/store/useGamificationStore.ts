import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Badge {
  id: string
  name: string
  description: string
  icon: string
  category: 'progression' | 'matiere' | 'defi' | 'social' | 'fun' | 'special'
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  unlockedAt?: Date
}

// Badges favoris sélectionnés par l'enfant (max 3)
type FavoriteBadges = string[]

interface TreeProgress {
  level: number
  experience: number
  maxExperience: number
}

interface GamificationState {
  // Tree progress
  treeProgress: TreeProgress
  addExperience: (amount: number) => void

  // Badges
  badges: Badge[]
  unlockBadge: (badgeId: string) => void

  // Badges favoris (affichés sur le profil)
  favoriteBadges: FavoriteBadges
  setFavoriteBadges: (badgeIds: string[]) => void
  toggleFavoriteBadge: (badgeId: string) => void
  getUnlockedBadges: () => Badge[]
  getFavoriteBadgesData: () => Badge[]

  // Stats
  totalExercises: number
  correctAnswers: number
  streak: number
  incrementExercises: () => void
  incrementCorrectAnswers: () => void
  updateStreak: () => void

  // Animal companion
  animalType: 'chat' | 'chien' | 'lapin' | 'oiseau'
  animalLevel: number
  setAnimalType: (type: 'chat' | 'chien' | 'lapin' | 'oiseau') => void

  // Profile sync
  loadProgressionFromProfile: (progression: any) => void
  getProgressionData: () => any
}

const calculateLevel = (experience: number): number => {
  return Math.floor(experience / 100) + 1
}

const calculateMaxExperience = (level: number): number => {
  return level * 100
}

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set) => ({
      // Tree progress
      treeProgress: {
        level: 1,
        experience: 0,
        maxExperience: 100,
      },
      addExperience: (amount) => set((state) => {
        const totalExperience = (state.treeProgress.level - 1) * 100 + state.treeProgress.experience + amount
        const newLevel = calculateLevel(totalExperience)
        const maxExperience = calculateMaxExperience(newLevel)
        const newExperience = totalExperience - (newLevel - 1) * 100

        console.log('[Gamification] XP ajouté:', amount, '| Total XP:', totalExperience, '| Nouveau niveau:', newLevel, '| XP dans niveau:', newExperience)

        // 🆕 Débloquer le badge "Champion" si niveau 10 atteint
        if (newLevel >= 10 && !state.badges.find(b => b.id === '9')?.unlockedAt) {
          console.log('[Gamification] 🏆 Badge "Champion" débloqué!')
          state.unlockBadge('9')
        }

        // 🆕 Débloquer le badge "Génie" si niveau 25 atteint
        if (newLevel >= 25 && !state.badges.find(b => b.id === '15')?.unlockedAt) {
          console.log('[Gamification] 🧠 Badge "Génie" débloqué!')
          state.unlockBadge('15')
        }

        return {
          treeProgress: {
            level: newLevel,
            experience: newExperience,
            maxExperience,
          },
        }
      }),

      // Badges - Collection complète
      badges: [
        // === PROGRESSION (Niveaux) ===
        { id: '1', name: 'Premier pas', description: 'Termine ton premier exercice', icon: '🌟', category: 'progression', rarity: 'common' },
        { id: '9', name: 'Champion', description: 'Atteins le niveau 10', icon: '🏆', category: 'progression', rarity: 'rare' },
        { id: '15', name: 'Génie', description: 'Atteins le niveau 25', icon: '🧠', category: 'progression', rarity: 'epic' },
        { id: '16', name: 'Légende', description: 'Atteins le niveau 50', icon: '👑', category: 'progression', rarity: 'legendary' },
        { id: '17', name: 'Dieu du savoir', description: 'Atteins le niveau 100', icon: '⚡', category: 'progression', rarity: 'legendary' },

        // === SÉRIE & RÉGULARITÉ ===
        { id: '3', name: 'Série de 7', description: '7 bonnes réponses d\'affilée', icon: '🔥', category: 'defi', rarity: 'common' },
        { id: '18', name: 'On fire!', description: '15 bonnes réponses d\'affilée', icon: '💥', category: 'defi', rarity: 'rare' },
        { id: '19', name: 'Inarrêtable', description: '25 bonnes réponses d\'affilée', icon: '🚀', category: 'defi', rarity: 'epic' },
        { id: '20', name: 'Machine', description: '50 bonnes réponses d\'affilée', icon: '🤖', category: 'defi', rarity: 'legendary' },
        { id: '5', name: 'Persévérant', description: 'Travaille 5 jours de suite', icon: '💪', category: 'progression', rarity: 'common' },
        { id: '13', name: 'Marathonien', description: 'Travaille 30 jours de suite', icon: '🏃', category: 'progression', rarity: 'epic' },
        { id: '21', name: 'Ultra-instinct', description: 'Travaille 100 jours de suite', icon: '🔮', category: 'progression', rarity: 'legendary' },

        // === MATIÈRES ===
        { id: '6', name: 'As des maths', description: '100% à 5 exercices de maths', icon: '🧮', category: 'matiere', rarity: 'common' },
        { id: '2', name: 'Maître des fractions', description: '10 exercices de fractions réussis', icon: '🍕', category: 'matiere', rarity: 'common' },
        { id: '7', name: 'Grammairien', description: '20 exercices de français réussis', icon: '📚', category: 'matiere', rarity: 'common' },
        { id: '8', name: 'Scientifique', description: 'Tous les quiz de sciences terminés', icon: '🔬', category: 'matiere', rarity: 'rare' },
        { id: '14', name: 'Polyglotte', description: '15 exercices d\'anglais réussis', icon: '🇬🇧', category: 'matiere', rarity: 'common' },
        { id: '22', name: 'Historien', description: '20 exercices d\'histoire réussis', icon: '🏛️', category: 'matiere', rarity: 'common' },
        { id: '23', name: 'Géographe', description: 'Connais tous les pays d\'Europe', icon: '🌍', category: 'matiere', rarity: 'rare' },
        { id: '24', name: 'Einstein junior', description: '100 exercices de maths parfaits', icon: '🔢', category: 'matiere', rarity: 'epic' },
        { id: '25', name: 'Shakespeare', description: '100 exercices de français parfaits', icon: '🎭', category: 'matiere', rarity: 'epic' },

        // === DÉFIS & PERFORMANCE ===
        { id: '11', name: 'Rapide', description: 'Exercice en moins de 30 secondes', icon: '⚡', category: 'defi', rarity: 'common' },
        { id: '12', name: 'Perfectionniste', description: '100% à 10 exercices différents', icon: '✨', category: 'defi', rarity: 'rare' },
        { id: '26', name: 'Flash', description: '10 exercices en moins de 5 minutes', icon: '💨', category: 'defi', rarity: 'rare' },
        { id: '27', name: 'Sans faute', description: '50 exercices sans aucune erreur', icon: '🎯', category: 'defi', rarity: 'epic' },
        { id: '28', name: 'Boss final battu', description: 'Bats Cap\'taine en mode VS', icon: '🎮', category: 'defi', rarity: 'epic' },
        { id: '29', name: 'Combo master', description: '100 combo en mini-jeu', icon: '🕹️', category: 'defi', rarity: 'rare' },

        // === FUN & RIGOLOS ===
        { id: '30', name: 'Lève-tôt', description: 'Travaille avant 7h du matin', icon: '🌅', category: 'fun', rarity: 'common' },
        { id: '31', name: 'Couche-tard', description: 'Travaille après 22h', icon: '🌙', category: 'fun', rarity: 'common' },
        { id: '32', name: 'Weekend warrior', description: 'Travaille un samedi ET un dimanche', icon: '📅', category: 'fun', rarity: 'common' },
        { id: '33', name: 'No life (positif!)', description: '500 exercices terminés', icon: '🤓', category: 'fun', rarity: 'epic' },
        { id: '34', name: 'Erreur 404', description: 'Se trompe 10 fois sur la même notion', icon: '🤦', category: 'fun', rarity: 'common' },
        { id: '35', name: 'Redemption arc', description: 'Passe de 20% à 80% sur une notion', icon: '📈', category: 'fun', rarity: 'rare' },
        { id: '36', name: 'Tryhard', description: 'Refais 5 fois le même exercice', icon: '😤', category: 'fun', rarity: 'common' },
        { id: '37', name: 'Big brain time', description: 'Résous un exercice "difficile" du premier coup', icon: '🧐', category: 'fun', rarity: 'rare' },
        { id: '38', name: 'GG EZ', description: 'Finis un quiz en moins de 2 minutes', icon: '😎', category: 'fun', rarity: 'rare' },

        // === SPÉCIAL ADOS (Collège/3ème) ===
        { id: '39', name: 'Prêt pour le lycée', description: 'Maîtrise 80% des compétences de 3ème', icon: '🎓', category: 'special', rarity: 'epic' },
        { id: '40', name: 'Futur bachelier', description: 'Niveau 50 atteint', icon: '📜', category: 'special', rarity: 'epic' },
        { id: '41', name: 'Brevet en poche', description: 'Réussis tous les quiz type brevet', icon: '🏅', category: 'special', rarity: 'legendary' },
        { id: '42', name: 'Matheux level 100', description: '200 exercices de maths collège réussis', icon: '📐', category: 'special', rarity: 'legendary' },
        { id: '43', name: 'Litteraire confirmé', description: '200 exercices de français collège', icon: '✒️', category: 'special', rarity: 'legendary' },
        { id: '44', name: 'Scientifique en herbe', description: 'Maîtrise physique-chimie et SVT', icon: '🧪', category: 'special', rarity: 'epic' },
        { id: '45', name: 'Bilingue', description: '100 exercices d\'anglais niveau collège', icon: '🗣️', category: 'special', rarity: 'epic' },

        // === EXPLORATION ===
        { id: '4', name: 'Explorateur', description: 'Essaie 3 matières différentes', icon: '🗺️', category: 'progression', rarity: 'common' },
        { id: '10', name: 'Curieux', description: 'Pose 50 questions à Cap\'taine', icon: '🤔', category: 'progression', rarity: 'rare' },
        { id: '46', name: 'Touche-à-tout', description: 'Essaie toutes les matières', icon: '🌈', category: 'progression', rarity: 'rare' },
        { id: '47', name: 'Encyclopédie vivante', description: '1000 exercices terminés', icon: '📖', category: 'progression', rarity: 'legendary' },

        // === SOCIAL & PARTAGE ===
        { id: '48', name: 'Compétiteur', description: 'Joue 10 parties en mode VS', icon: '⚔️', category: 'social', rarity: 'common' },
        { id: '49', name: 'Invincible', description: 'Gagne 10 parties VS d\'affilée', icon: '🛡️', category: 'social', rarity: 'epic' },
        { id: '50', name: 'Mentor', description: 'Aide un autre élève (via partage)', icon: '🤝', category: 'social', rarity: 'rare' },

        // === SECRETS & EASTER EGGS ===
        { id: '51', name: 'Pi lover', description: 'Fais un exercice le 14 mars', icon: '🥧', category: 'fun', rarity: 'rare' },
        { id: '52', name: 'Halloween scholar', description: 'Travaille le 31 octobre', icon: '🎃', category: 'fun', rarity: 'rare' },
        { id: '53', name: 'Noël studieux', description: 'Travaille le 25 décembre', icon: '🎄', category: 'fun', rarity: 'rare' },
        { id: '54', name: 'Année parfaite', description: 'Travaille le 1er janvier', icon: '🎆', category: 'fun', rarity: 'rare' },
        { id: '55', name: '???', description: 'Badge mystère...', icon: '❓', category: 'special', rarity: 'legendary' },
      ],
      unlockBadge: (badgeId) => set((state) => ({
        badges: state.badges.map((badge) =>
          badge.id === badgeId && !badge.unlockedAt
            ? { ...badge, unlockedAt: new Date() }
            : badge
        ),
      })),

      // Badges favoris
      favoriteBadges: [],

      setFavoriteBadges: (badgeIds) => set({ favoriteBadges: badgeIds.slice(0, 3) }),

      toggleFavoriteBadge: (badgeId) => set((state) => {
        const isCurrentlyFavorite = state.favoriteBadges.includes(badgeId)
        if (isCurrentlyFavorite) {
          // Retirer des favoris
          return { favoriteBadges: state.favoriteBadges.filter(id => id !== badgeId) }
        } else if (state.favoriteBadges.length < 3) {
          // Ajouter aux favoris (max 3)
          return { favoriteBadges: [...state.favoriteBadges, badgeId] }
        }
        // Max 3 atteint, ne rien faire
        return state
      }),

      getUnlockedBadges: () => {
        const state = useGamificationStore.getState()
        return state.badges.filter(b => b.unlockedAt)
      },

      getFavoriteBadgesData: () => {
        const state = useGamificationStore.getState()
        return state.badges.filter(b => state.favoriteBadges.includes(b.id) && b.unlockedAt)
      },

      // Stats
      totalExercises: 0,
      correctAnswers: 0,
      streak: 0,
      incrementExercises: () => set((state) => {
        const newTotal = state.totalExercises + 1

        // 🆕 Débloquer le badge "Premier pas" au premier exercice
        if (newTotal === 1 && !state.badges.find(b => b.id === '1')?.unlockedAt) {
          console.log('[Gamification] 🌟 Badge "Premier pas" débloqué!')
          state.unlockBadge('1')
        }

        return { totalExercises: newTotal }
      }),
      incrementCorrectAnswers: () => set((state) => {
        const newCorrect = state.correctAnswers + 1

        // 🆕 Série de 7 exercices réussis consécutifs (simplification)
        if (newCorrect === 7 && !state.badges.find(b => b.id === '3')?.unlockedAt) {
          console.log('[Gamification] 🔥 Badge "Série de 7" débloqué!')
          state.unlockBadge('3')
        }

        return { correctAnswers: newCorrect }
      }),
      updateStreak: () => set((state) => {
        const newStreak = state.streak + 1

        // 🆕 Débloquer "Persévérant" à 5 jours
        if (newStreak === 5 && !state.badges.find(b => b.id === '5')?.unlockedAt) {
          console.log('[Gamification] 💪 Badge "Persévérant" débloqué!')
          state.unlockBadge('5')
        }

        // 🆕 Débloquer "Marathonien" à 30 jours
        if (newStreak === 30 && !state.badges.find(b => b.id === '13')?.unlockedAt) {
          console.log('[Gamification] 🏃 Badge "Marathonien" débloqué!')
          state.unlockBadge('13')
        }

        return { streak: newStreak }
      }),

      // Animal companion
      animalType: 'chat',
      animalLevel: 1,
      setAnimalType: (type) => set({ animalType: type }),

      // Profile sync
      loadProgressionFromProfile: (progression) => {
        if (progression) {
          set({
            treeProgress: progression.treeProgress || {
              level: 1,
              experience: 0,
              maxExperience: 100,
            },
            badges: progression.badges || [],
            totalExercises: progression.totalExercises || 0,
            correctAnswers: progression.correctAnswers || 0,
            streak: progression.streak || 0,
            animalType: progression.animalType || 'chat',
            animalLevel: progression.animalLevel || 1,
          })
          console.log('[Gamification] Loaded progression from profile')
        }
      },

      getProgressionData: () => {
        const state = useGamificationStore.getState()
        return {
          treeProgress: state.treeProgress,
          badges: state.badges,
          totalExercises: state.totalExercises,
          correctAnswers: state.correctAnswers,
          streak: state.streak,
          animalType: state.animalType,
          animalLevel: state.animalLevel,
        }
      },
    }),
    {
      name: 'captaine-gamification',
      // Migration : fusionner les badges existants avec les nouveaux
      merge: (persistedState: any, currentState: GamificationState) => {
        // Si pas de badges persistés ou moins que les badges actuels, utiliser les nouveaux
        const persistedBadges = persistedState?.badges || []
        const currentBadges = currentState.badges

        // Créer une map des badges débloqués
        const unlockedMap = new Map<string, Date>()
        persistedBadges.forEach((badge: Badge) => {
          if (badge.unlockedAt) {
            unlockedMap.set(badge.id, badge.unlockedAt)
          }
        })

        // Appliquer les unlocks aux badges actuels
        const mergedBadges = currentBadges.map(badge => ({
          ...badge,
          unlockedAt: unlockedMap.get(badge.id) || undefined
        }))

        console.log(`[Gamification] Migration: ${persistedBadges.length} → ${mergedBadges.length} badges`)

        return {
          ...currentState,
          ...persistedState,
          badges: mergedBadges, // Toujours utiliser les badges du code avec les unlocks persistés
        }
      }
    }
  )
)
