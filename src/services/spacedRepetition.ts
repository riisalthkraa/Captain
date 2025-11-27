/**
 * Spaced Repetition System (SRS) - Algorithme SM-2 adapté pour Cap'taine
 *
 * Basé sur l'algorithme SuperMemo 2, optimisé pour l'apprentissage scolaire.
 * Calcule les intervalles de révision optimaux pour maximiser la rétention.
 *
 * @module SpacedRepetition
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * Carte de révision (un concept/compétence à apprendre)
 */
export interface ReviewCard {
  id: string

  // Identification
  profileId: string
  skill: string           // "tables de multiplication x7"
  subject: string         // "maths"
  level: string           // "CE2"

  // Paramètres SM-2
  easeFactor: number      // Facteur de facilité (2.5 par défaut, min 1.3)
  interval: number        // Intervalle actuel en jours
  repetitions: number     // Nombre de révisions réussies consécutives

  // Planification
  nextReviewDate: Date    // Prochaine date de révision
  lastReviewDate: Date    // Dernière révision

  // Statistiques
  totalReviews: number
  correctReviews: number

  // Métadonnées
  createdAt: Date

  // Exemples de questions liées à cette compétence
  sampleQuestions?: string[]
}

/**
 * Qualité de la réponse (0-5)
 * 0: Échec total, pas de souvenir
 * 1: Mauvaise réponse après réflexion
 * 2: Mauvaise réponse mais proche
 * 3: Bonne réponse avec difficulté
 * 4: Bonne réponse après hésitation
 * 5: Réponse parfaite et rapide
 */
export type ResponseQuality = 0 | 1 | 2 | 3 | 4 | 5

/**
 * Convertit un résultat booléen + temps en qualité SM-2
 */
export function calculateQuality(
  isCorrect: boolean,
  timeSpent: number,      // en secondes
  hintsUsed: number,
  expectedTime: number = 30
): ResponseQuality {
  if (!isCorrect) {
    // Réponse incorrecte
    if (hintsUsed > 2) return 0  // Échec total malgré les indices
    if (hintsUsed > 0) return 1  // Mauvais avec aide
    return 2                      // Mauvais mais a essayé seul
  }

  // Réponse correcte
  if (hintsUsed > 1) return 3           // Correct mais beaucoup d'aide
  if (timeSpent > expectedTime * 2) return 3  // Correct mais très lent
  if (hintsUsed === 1 || timeSpent > expectedTime * 1.5) return 4  // Correct avec hésitation
  return 5                               // Parfait !
}

/**
 * Algorithme SM-2 : Calcule le prochain intervalle de révision
 */
export function calculateNextReview(
  card: ReviewCard,
  quality: ResponseQuality
): { interval: number; easeFactor: number; repetitions: number } {
  let { easeFactor, interval, repetitions } = card

  // Si qualité < 3, on recommence (l'élève n'a pas retenu)
  if (quality < 3) {
    repetitions = 0
    interval = 1  // Revoir demain
  } else {
    // Réponse correcte : augmenter l'intervalle
    if (repetitions === 0) {
      interval = 1
    } else if (repetitions === 1) {
      interval = 3  // 3 jours après la première révision réussie
    } else {
      // Formule SM-2 : interval = interval * easeFactor
      interval = Math.round(interval * easeFactor)
    }
    repetitions++
  }

  // Ajuster le facteur de facilité
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))

  // EF minimum de 1.3 (sinon les intervalles deviennent trop courts)
  easeFactor = Math.max(1.3, easeFactor)

  // Intervalle maximum de 365 jours (1 an)
  interval = Math.min(interval, 365)

  return { interval, easeFactor, repetitions }
}

/**
 * Calcule la priorité de révision (plus c'est haut, plus urgent)
 */
export function calculateReviewPriority(card: ReviewCard): number {
  const now = new Date()
  const nextReview = new Date(card.nextReviewDate)
  const daysDue = Math.floor((now.getTime() - nextReview.getTime()) / (1000 * 60 * 60 * 24))

  // Base : jours de retard (négatif si pas encore dû)
  let priority = daysDue

  // Bonus pour les cartes difficiles (faible easeFactor)
  if (card.easeFactor < 2.0) priority += 5

  // Bonus pour les cartes jamais révisées
  if (card.totalReviews === 0) priority += 10

  // Bonus pour les cartes avec faible taux de réussite
  const successRate = card.totalReviews > 0
    ? card.correctReviews / card.totalReviews
    : 0.5
  if (successRate < 0.5) priority += 5

  return priority
}

/**
 * Store pour le système SRS
 */
interface SRSStore {
  cards: ReviewCard[]

  // Gestion des cartes
  addCard: (card: Omit<ReviewCard, 'id' | 'createdAt' | 'easeFactor' | 'interval' | 'repetitions' | 'nextReviewDate' | 'lastReviewDate' | 'totalReviews' | 'correctReviews'>) => ReviewCard
  getCard: (profileId: string, skill: string) => ReviewCard | undefined
  getOrCreateCard: (profileId: string, skill: string, subject: string, level: string) => ReviewCard

  // Révision
  recordReview: (cardId: string, quality: ResponseQuality) => void

  // Récupération des cartes à réviser
  getDueCards: (profileId: string, limit?: number) => ReviewCard[]
  getUpcomingCards: (profileId: string, days?: number) => ReviewCard[]

  // Stats
  getStats: (profileId: string) => {
    totalCards: number
    dueToday: number
    mastered: number      // easeFactor > 2.5 et interval > 30
    struggling: number    // easeFactor < 1.8
    averageEaseFactor: number
  }

  // Suggestions
  getSuggestedSkillsToReview: (profileId: string, count?: number) => string[]
}

export const useSRS = create<SRSStore>()(
  persist(
    (set, get) => ({
      cards: [],

      addCard: (cardData) => {
        const now = new Date()
        const card: ReviewCard = {
          ...cardData,
          id: `srs_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          easeFactor: 2.5,        // Valeur par défaut SM-2
          interval: 0,
          repetitions: 0,
          nextReviewDate: now,    // À réviser immédiatement
          lastReviewDate: now,
          totalReviews: 0,
          correctReviews: 0,
          createdAt: now
        }

        set((state) => ({
          cards: [...state.cards, card]
        }))

        console.log('[SRS] Card added:', card.skill)
        return card
      },

      getCard: (profileId, skill) => {
        return get().cards.find(c => c.profileId === profileId && c.skill === skill)
      },

      getOrCreateCard: (profileId, skill, subject, level) => {
        const existing = get().getCard(profileId, skill)
        if (existing) return existing

        return get().addCard({ profileId, skill, subject, level })
      },

      recordReview: (cardId, quality) => {
        set((state) => {
          const cardIndex = state.cards.findIndex(c => c.id === cardId)
          if (cardIndex === -1) return state

          const card = state.cards[cardIndex]
          const { interval, easeFactor, repetitions } = calculateNextReview(card, quality)

          const now = new Date()
          const nextReviewDate = new Date(now)
          nextReviewDate.setDate(nextReviewDate.getDate() + interval)

          const updatedCard: ReviewCard = {
            ...card,
            easeFactor,
            interval,
            repetitions,
            nextReviewDate,
            lastReviewDate: now,
            totalReviews: card.totalReviews + 1,
            correctReviews: quality >= 3 ? card.correctReviews + 1 : card.correctReviews
          }

          const newCards = [...state.cards]
          newCards[cardIndex] = updatedCard

          console.log(`[SRS] Review recorded for ${card.skill}: quality=${quality}, next in ${interval} days`)

          return { cards: newCards }
        })
      },

      getDueCards: (profileId, limit = 20) => {
        const now = new Date()
        return get().cards
          .filter(c => c.profileId === profileId && new Date(c.nextReviewDate) <= now)
          .sort((a, b) => calculateReviewPriority(b) - calculateReviewPriority(a))
          .slice(0, limit)
      },

      getUpcomingCards: (profileId, days = 7) => {
        const now = new Date()
        const futureDate = new Date(now)
        futureDate.setDate(futureDate.getDate() + days)

        return get().cards
          .filter(c => {
            const reviewDate = new Date(c.nextReviewDate)
            return c.profileId === profileId && reviewDate > now && reviewDate <= futureDate
          })
          .sort((a, b) => new Date(a.nextReviewDate).getTime() - new Date(b.nextReviewDate).getTime())
      },

      getStats: (profileId) => {
        const profileCards = get().cards.filter(c => c.profileId === profileId)
        const now = new Date()

        const dueToday = profileCards.filter(c => new Date(c.nextReviewDate) <= now).length
        const mastered = profileCards.filter(c => c.easeFactor > 2.5 && c.interval > 30).length
        const struggling = profileCards.filter(c => c.easeFactor < 1.8).length

        const totalEF = profileCards.reduce((sum, c) => sum + c.easeFactor, 0)
        const averageEaseFactor = profileCards.length > 0 ? totalEF / profileCards.length : 2.5

        return {
          totalCards: profileCards.length,
          dueToday,
          mastered,
          struggling,
          averageEaseFactor: Math.round(averageEaseFactor * 100) / 100
        }
      },

      getSuggestedSkillsToReview: (profileId, count = 5) => {
        const dueCards = get().getDueCards(profileId, count)
        return dueCards.map(c => c.skill)
      }
    }),
    {
      name: 'captaine-srs'
    }
  )
)

/**
 * Hook utilitaire pour intégrer SRS avec le tracking d'exercices
 */
export function processExerciseForSRS(
  profileId: string,
  skill: string,
  subject: string,
  level: string,
  isCorrect: boolean,
  timeSpent: number,
  hintsUsed: number
) {
  const srs = useSRS.getState()

  // Récupérer ou créer la carte
  const card = srs.getOrCreateCard(profileId, skill, subject, level)

  // Calculer la qualité de la réponse
  const quality = calculateQuality(isCorrect, timeSpent, hintsUsed)

  // Enregistrer la révision
  srs.recordReview(card.id, quality)

  return { card, quality }
}

/**
 * Génère un rapport de révision pour l'affichage
 */
export function generateReviewReport(profileId: string): {
  summary: string
  dueToday: string[]
  upcoming: { skill: string; daysUntil: number }[]
  mastered: string[]
  needsWork: string[]
} {
  const srs = useSRS.getState()
  const stats = srs.getStats(profileId)
  const dueCards = srs.getDueCards(profileId)
  const upcomingCards = srs.getUpcomingCards(profileId, 7)
  const allCards = srs.cards.filter(c => c.profileId === profileId)

  const now = new Date()

  return {
    summary: `${stats.dueToday} à réviser aujourd'hui, ${stats.mastered} maîtrisées, ${stats.struggling} en difficulté`,
    dueToday: dueCards.map(c => c.skill),
    upcoming: upcomingCards.map(c => ({
      skill: c.skill,
      daysUntil: Math.ceil((new Date(c.nextReviewDate).getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    })),
    mastered: allCards.filter(c => c.easeFactor > 2.5 && c.interval > 30).map(c => c.skill),
    needsWork: allCards.filter(c => c.easeFactor < 1.8).map(c => c.skill)
  }
}
