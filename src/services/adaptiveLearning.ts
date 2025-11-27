/**
 * Adaptive Learning System - Adaptation dynamique et détection émotionnelle
 *
 * - Ajuste automatiquement la difficulté selon les performances temps-réel
 * - Détecte la fatigue, frustration et démotivation
 * - Suggère des pauses et ajustements
 *
 * @module AdaptiveLearning
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * État émotionnel détecté
 */
export type EmotionalState =
  | 'engaged'       // Engagé, motivé
  | 'confident'     // Confiant, en réussite
  | 'struggling'    // En difficulté mais persévère
  | 'frustrated'    // Frustré, répète les mêmes erreurs
  | 'fatigued'      // Fatigué, temps de réponse qui augmente
  | 'bored'         // Ennuyé, exercices trop faciles
  | 'distracted'    // Distrait, erreurs d'inattention

/**
 * Indicateurs de session en cours
 */
export interface SessionMetrics {
  profileId: string
  sessionStart: Date

  // Compteurs
  totalQuestions: number
  correctAnswers: number
  consecutiveCorrect: number
  consecutiveWrong: number

  // Temps
  averageResponseTime: number    // secondes
  lastResponseTimes: number[]    // 10 derniers temps
  totalDuration: number          // minutes

  // Indices
  hintsUsed: number
  hintsPerQuestion: number

  // Difficulté
  currentDifficulty: number      // 1-5
  difficultyHistory: number[]

  // État émotionnel
  emotionalState: EmotionalState
  emotionalHistory: EmotionalState[]

  // Alertes
  alerts: SessionAlert[]
}

/**
 * Alerte de session
 */
export interface SessionAlert {
  type: 'break_suggested' | 'difficulty_adjusted' | 'encouragement' | 'challenge' | 'help_offered'
  message: string
  timestamp: Date
  acknowledged: boolean
}

/**
 * Labels d'émotions adaptés aux enfants (français)
 */
export const EMOTION_LABELS: Record<EmotionalState, string> = {
  engaged: 'Motivé',
  confident: 'Confiant',
  struggling: 'En difficulté',
  frustrated: 'Découragé',
  fatigued: 'Fatigué',
  bored: 'S\'ennuie',
  distracted: 'Distrait'
}

/**
 * Emojis pour chaque état émotionnel
 */
export const EMOTION_EMOJIS: Record<EmotionalState, string> = {
  engaged: '😊',
  confident: '💪',
  struggling: '😕',
  frustrated: '😤',
  fatigued: '😴',
  bored: '😑',
  distracted: '🤔'
}

/**
 * Mots-clés pour détecter l'émotion dans le texte
 */
const EMOTION_KEYWORDS: { emotion: EmotionalState; keywords: string[]; priority: number }[] = [
  // Frustration / Découragement (priorité haute)
  {
    emotion: 'frustrated',
    keywords: [
      "j'y arrive pas", "j'arrive pas", "je n'y arrive pas", "j'comprends pas",
      "je comprends pas", "je comprends rien", "c'est trop dur", "trop difficile",
      "j'en ai marre", "j'abandonne", "c'est nul", "je suis nul", "je suis nulle",
      "énervé", "enerve", "en colère", "je déteste", "je peux pas", "impossible",
      "ça m'énerve", "ça me saoule", "je rage", "c'est chiant", "pfff", "grrr",
      "j'en peux plus", "laisse tomber", "tant pis"
    ],
    priority: 10
  },
  // Fatigue
  {
    emotion: 'fatigued',
    keywords: [
      "fatigué", "fatiguée", "je suis fatigué", "je suis fatiguée", "épuisé",
      "crevé", "crevée", "j'ai sommeil", "je dors", "baille", "pause",
      "j'ai besoin d'une pause", "stop", "j'arrête", "on arrête"
    ],
    priority: 9
  },
  // Ennui
  {
    emotion: 'bored',
    keywords: [
      "c'est facile", "trop facile", "je m'ennuie", "ennuyeux", "boring",
      "c'est long", "c'est lent", "plus dur", "un défi", "challenge",
      "je connais déjà", "je sais déjà", "répétitif"
    ],
    priority: 7
  },
  // Confusion / Difficulté
  {
    emotion: 'struggling',
    keywords: [
      "je ne sais pas", "je sais pas", "c'est quoi", "comment on fait",
      "aide-moi", "aidez-moi", "help", "je suis perdu", "perdue",
      "explique", "explique-moi", "tu peux m'aider", "pas compris"
    ],
    priority: 6
  },
  // Confiance / Réussite
  {
    emotion: 'confident',
    keywords: [
      "c'est bon", "j'ai compris", "facile", "trop bien", "génial",
      "je gère", "easy", "tranquille", "pas de problème", "nickel",
      "yes", "youpi", "super", "cool", "parfait"
    ],
    priority: 5
  },
  // Motivation / Engagement
  {
    emotion: 'engaged',
    keywords: [
      "allons-y", "on y va", "c'est parti", "encore", "un autre",
      "suivant", "prochain", "continue", "j'aime bien", "intéressant",
      "ok", "d'accord", "prêt", "prête", "go"
    ],
    priority: 4
  }
]

/**
 * Mots-clés pour le mode défi (difficulté max)
 */
const CHALLENGE_MODE_KEYWORDS = [
  "mode défi", "mode defi", "difficulté max", "difficulte max",
  "niveau max", "le plus dur", "maximum", "je veux un défi",
  "donne-moi un défi", "mets le max", "niveau 5", "difficulté 5"
]

/**
 * Mots-clés pour le mode facile (difficulté min)
 */
const EASY_MODE_KEYWORDS = [
  "mode facile", "plus facile", "trop dur pour moi", "niveau 1",
  "difficulté 1", "le plus simple", "niveau débutant", "niveau facile"
]

/**
 * Détecte si l'utilisateur demande un mode spécial
 * Retourne 'challenge' | 'easy' | null
 */
export function detectModeRequest(text: string): 'challenge' | 'easy' | null {
  const lowerText = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  const normalizedText = text.toLowerCase()

  for (const keyword of CHALLENGE_MODE_KEYWORDS) {
    const normalizedKeyword = keyword.toLowerCase()
    if (normalizedText.includes(normalizedKeyword) ||
        lowerText.includes(normalizedKeyword.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
      return 'challenge'
    }
  }

  for (const keyword of EASY_MODE_KEYWORDS) {
    const normalizedKeyword = keyword.toLowerCase()
    if (normalizedText.includes(normalizedKeyword) ||
        lowerText.includes(normalizedKeyword.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
      return 'easy'
    }
  }

  return null
}

/**
 * Détecte l'émotion à partir du texte du message
 * Retourne l'émotion détectée ou null si aucun mot-clé trouvé
 */
export function detectEmotionFromText(text: string): EmotionalState | null {
  const lowerText = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  const normalizedText = text.toLowerCase()

  let detectedEmotion: EmotionalState | null = null
  let highestPriority = 0

  for (const { emotion, keywords, priority } of EMOTION_KEYWORDS) {
    for (const keyword of keywords) {
      const normalizedKeyword = keyword.toLowerCase()
      // Cherche dans le texte original et normalisé (sans accents)
      if (normalizedText.includes(normalizedKeyword) ||
          lowerText.includes(normalizedKeyword.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
        if (priority > highestPriority) {
          highestPriority = priority
          detectedEmotion = emotion
        }
        break // Un mot-clé suffit par catégorie
      }
    }
  }

  return detectedEmotion
}

/**
 * Détecte l'état émotionnel basé sur les métriques
 */
export function detectEmotionalState(metrics: SessionMetrics): EmotionalState {
  const successRate = metrics.totalQuestions > 0
    ? metrics.correctAnswers / metrics.totalQuestions
    : 0.5

  // Calcul de la tendance des temps de réponse
  const recentTimes = metrics.lastResponseTimes.slice(-5)
  const olderTimes = metrics.lastResponseTimes.slice(0, 5)
  const recentAvg = recentTimes.length > 0
    ? recentTimes.reduce((a, b) => a + b, 0) / recentTimes.length
    : metrics.averageResponseTime
  const olderAvg = olderTimes.length > 0
    ? olderTimes.reduce((a, b) => a + b, 0) / olderTimes.length
    : metrics.averageResponseTime

  const timeIncreasing = recentAvg > olderAvg * 1.5

  // === Détection des états ===

  // FATIGUÉ : temps qui augmentent + session longue
  if (timeIncreasing && metrics.totalDuration > 20) {
    return 'fatigued'
  }

  // FRUSTRÉ : beaucoup d'erreurs consécutives
  if (metrics.consecutiveWrong >= 3) {
    return 'frustrated'
  }

  // ENNUYÉ : trop de bonnes réponses rapides
  if (metrics.consecutiveCorrect >= 7 && successRate > 0.9 && recentAvg < 10) {
    return 'bored'
  }

  // DISTRAIT : erreurs d'inattention (réponses très rapides mais fausses)
  if (successRate < 0.5 && recentAvg < 5 && metrics.hintsPerQuestion < 0.5) {
    return 'distracted'
  }

  // EN DIFFICULTÉ : taux faible mais continue d'essayer
  if (successRate < 0.5 && metrics.hintsPerQuestion > 1) {
    return 'struggling'
  }

  // CONFIANT : bonne série de réussites
  if (metrics.consecutiveCorrect >= 4 && successRate > 0.75) {
    return 'confident'
  }

  // ENGAGÉ : tout va bien
  return 'engaged'
}

/**
 * Calcule la difficulté recommandée
 */
export function calculateRecommendedDifficulty(metrics: SessionMetrics): {
  difficulty: number
  reason: string
} {
  const current = metrics.currentDifficulty
  const successRate = metrics.totalQuestions > 0
    ? metrics.correctAnswers / metrics.totalQuestions
    : 0.5

  // Trop facile → Augmenter
  if (successRate > 0.85 && metrics.consecutiveCorrect >= 5 && metrics.totalQuestions >= 5) {
    return {
      difficulty: Math.min(5, current + 1),
      reason: "Tu gères super bien ! On passe au niveau supérieur ?"
    }
  }

  // Trop difficile → Diminuer
  if (successRate < 0.4 && metrics.totalQuestions >= 5) {
    return {
      difficulty: Math.max(1, current - 1),
      reason: "On va reprendre des bases plus simples pour mieux avancer."
    }
  }

  // Frustration → Diminuer
  if (metrics.emotionalState === 'frustrated') {
    return {
      difficulty: Math.max(1, current - 1),
      reason: "Pas de panique ! Essayons quelque chose de plus accessible."
    }
  }

  // Ennui → Augmenter
  if (metrics.emotionalState === 'bored') {
    return {
      difficulty: Math.min(5, current + 1),
      reason: "Tu trouves ça trop facile ? Voyons si tu relèves ce défi !"
    }
  }

  return { difficulty: current, reason: '' }
}

/**
 * Génère des alertes basées sur l'état
 */
export function generateAlerts(metrics: SessionMetrics): SessionAlert[] {
  const alerts: SessionAlert[] = []
  const now = new Date()

  // Pause suggérée après 25 minutes (technique Pomodoro)
  if (metrics.totalDuration >= 25 && !metrics.alerts.some(a => a.type === 'break_suggested')) {
    alerts.push({
      type: 'break_suggested',
      message: "Tu travailles depuis 25 minutes ! Une petite pause de 5 minutes ?",
      timestamp: now,
      acknowledged: false
    })
  }

  // Pause si fatigue détectée
  if (metrics.emotionalState === 'fatigued') {
    alerts.push({
      type: 'break_suggested',
      message: "Tu sembles un peu fatigué(e). Que dirais-tu d'une pause ?",
      timestamp: now,
      acknowledged: false
    })
  }

  // Encouragement si frustration
  if (metrics.emotionalState === 'frustrated') {
    const encouragements = [
      "Pas facile celui-là ! Mais tu progresses, continue !",
      "Les erreurs font partie de l'apprentissage. Tu vas y arriver !",
      "C'est normal de bloquer parfois. On essaie autrement ?",
      "Chaque difficulté te rend plus fort(e). Ne lâche pas !"
    ]
    alerts.push({
      type: 'encouragement',
      message: encouragements[Math.floor(Math.random() * encouragements.length)],
      timestamp: now,
      acknowledged: false
    })
  }

  // Challenge si ennui
  if (metrics.emotionalState === 'bored') {
    alerts.push({
      type: 'challenge',
      message: "Tu veux un vrai défi ? Essayons quelque chose de plus corsé !",
      timestamp: now,
      acknowledged: false
    })
  }

  // Proposition d'aide si struggling
  if (metrics.emotionalState === 'struggling' && metrics.consecutiveWrong >= 2) {
    alerts.push({
      type: 'help_offered',
      message: "Tu veux que je t'explique cette notion différemment ?",
      timestamp: now,
      acknowledged: false
    })
  }

  return alerts
}

/**
 * Store pour l'apprentissage adaptatif
 */
interface AdaptiveLearningStore {
  currentSession: SessionMetrics | null
  sessionHistory: {
    date: Date
    duration: number
    questionsAnswered: number
    successRate: number
    averageDifficulty: number
  }[]

  // Gestion de session
  startSession: (profileId: string, startDifficulty?: number) => void
  endSession: () => void

  // Enregistrement
  recordAnswer: (
    isCorrect: boolean,
    responseTime: number,
    hintsUsed: number
  ) => {
    emotionalState: EmotionalState
    alerts: SessionAlert[]
    recommendedDifficulty: number
  }

  // Ajustements
  setDifficulty: (difficulty: number) => void
  acknowledgeAlert: (alertIndex: number) => void
  updateEmotionalState: (state: EmotionalState) => void
  activateChallengeMode: () => void  // Mode défi → difficulté 5/5
  activateEasyMode: () => void       // Mode facile → difficulté 1/5

  // Accesseurs
  getCurrentState: () => EmotionalState | null
  getSessionStats: () => SessionMetrics | null
  getRecommendations: () => string[]

  // Historique
  getWeeklyStats: () => {
    totalSessions: number
    totalMinutes: number
    totalQuestions: number
    averageSuccessRate: number
  }
}

export const useAdaptiveLearning = create<AdaptiveLearningStore>()(
  persist(
    (set, get) => ({
      currentSession: null,
      sessionHistory: [],

      startSession: (profileId, startDifficulty = 3) => {
        const session: SessionMetrics = {
          profileId,
          sessionStart: new Date(),
          totalQuestions: 0,
          correctAnswers: 0,
          consecutiveCorrect: 0,
          consecutiveWrong: 0,
          averageResponseTime: 0,
          lastResponseTimes: [],
          totalDuration: 0,
          hintsUsed: 0,
          hintsPerQuestion: 0,
          currentDifficulty: startDifficulty,
          difficultyHistory: [startDifficulty],
          emotionalState: 'engaged',
          emotionalHistory: ['engaged'],
          alerts: []
        }

        set({ currentSession: session })
        console.log('[AdaptiveLearning] Session started for', profileId)
      },

      endSession: () => {
        const session = get().currentSession
        if (!session) return

        // Sauvegarder dans l'historique
        const summary = {
          date: session.sessionStart,
          duration: session.totalDuration,
          questionsAnswered: session.totalQuestions,
          successRate: session.totalQuestions > 0
            ? session.correctAnswers / session.totalQuestions
            : 0,
          averageDifficulty: session.difficultyHistory.length > 0
            ? session.difficultyHistory.reduce((a, b) => a + b, 0) / session.difficultyHistory.length
            : 3
        }

        set((state) => ({
          currentSession: null,
          sessionHistory: [...state.sessionHistory.slice(-100), summary] // Garder 100 dernières sessions
        }))

        console.log('[AdaptiveLearning] Session ended:', summary)
      },

      recordAnswer: (isCorrect, responseTime, hintsUsed) => {
        const session = get().currentSession
        if (!session) {
          return {
            emotionalState: 'engaged' as EmotionalState,
            alerts: [],
            recommendedDifficulty: 3
          }
        }

        // Mettre à jour les métriques
        const now = new Date()
        const durationMinutes = (now.getTime() - session.sessionStart.getTime()) / 60000

        const newTimes = [...session.lastResponseTimes, responseTime].slice(-10)
        const avgTime = newTimes.reduce((a, b) => a + b, 0) / newTimes.length

        const updatedSession: SessionMetrics = {
          ...session,
          totalQuestions: session.totalQuestions + 1,
          correctAnswers: isCorrect ? session.correctAnswers + 1 : session.correctAnswers,
          consecutiveCorrect: isCorrect ? session.consecutiveCorrect + 1 : 0,
          consecutiveWrong: isCorrect ? 0 : session.consecutiveWrong + 1,
          averageResponseTime: avgTime,
          lastResponseTimes: newTimes,
          totalDuration: durationMinutes,
          hintsUsed: session.hintsUsed + hintsUsed,
          hintsPerQuestion: (session.hintsUsed + hintsUsed) / (session.totalQuestions + 1)
        }

        // Détecter l'état émotionnel
        const emotionalState = detectEmotionalState(updatedSession)
        updatedSession.emotionalState = emotionalState
        updatedSession.emotionalHistory = [...session.emotionalHistory, emotionalState].slice(-20)

        // Générer les alertes
        const newAlerts = generateAlerts(updatedSession)
        updatedSession.alerts = [...session.alerts, ...newAlerts]

        // Calculer la difficulté recommandée
        const { difficulty: recommendedDifficulty, reason } = calculateRecommendedDifficulty(updatedSession)

        // Auto-ajuster la difficulté si gros écart
        if (Math.abs(recommendedDifficulty - session.currentDifficulty) >= 1 && reason) {
          updatedSession.currentDifficulty = recommendedDifficulty
          updatedSession.difficultyHistory = [...session.difficultyHistory, recommendedDifficulty]
          updatedSession.alerts.push({
            type: 'difficulty_adjusted',
            message: reason,
            timestamp: now,
            acknowledged: false
          })
        }

        set({ currentSession: updatedSession })

        return {
          emotionalState,
          alerts: newAlerts,
          recommendedDifficulty
        }
      },

      setDifficulty: (difficulty) => {
        const session = get().currentSession
        if (!session) return

        set({
          currentSession: {
            ...session,
            currentDifficulty: difficulty,
            difficultyHistory: [...session.difficultyHistory, difficulty]
          }
        })
      },

      acknowledgeAlert: (alertIndex) => {
        const session = get().currentSession
        if (!session) return

        const updatedAlerts = session.alerts.map((alert, idx) =>
          idx === alertIndex ? { ...alert, acknowledged: true } : alert
        )

        set({
          currentSession: { ...session, alerts: updatedAlerts }
        })
      },

      activateChallengeMode: () => {
        const session = get().currentSession
        if (!session) return

        console.log('[AdaptiveLearning] 🔥 MODE DÉFI ACTIVÉ → Difficulté 5/5')

        set({
          currentSession: {
            ...session,
            currentDifficulty: 5,
            difficultyHistory: [...session.difficultyHistory, 5],
            alerts: [...session.alerts, {
              type: 'challenge' as const,
              message: "🔥 MODE DÉFI ACTIVÉ ! Difficulté maximale !",
              timestamp: new Date(),
              acknowledged: false
            }]
          }
        })
      },

      activateEasyMode: () => {
        const session = get().currentSession
        if (!session) return

        console.log('[AdaptiveLearning] 🌱 MODE FACILE ACTIVÉ → Difficulté 1/5')

        set({
          currentSession: {
            ...session,
            currentDifficulty: 1,
            difficultyHistory: [...session.difficultyHistory, 1],
            alerts: [...session.alerts, {
              type: 'encouragement' as const,
              message: "🌱 Mode tranquille activé. On y va doucement !",
              timestamp: new Date(),
              acknowledged: false
            }]
          }
        })
      },

      updateEmotionalState: (state) => {
        const session = get().currentSession
        if (!session) return

        console.log('[AdaptiveLearning] Mise à jour état émotionnel:', state)

        const now = new Date()
        let updatedSession = {
          ...session,
          emotionalState: state,
          emotionalHistory: [...session.emotionalHistory, state]
        }

        // === AJUSTEMENT AUTOMATIQUE DE LA DIFFICULTÉ BASÉ SUR L'ÉMOTION ===

        // Si l'élève est frustré ou en difficulté → baisser la difficulté
        if ((state === 'frustrated' || state === 'struggling') && session.currentDifficulty > 1) {
          const newDifficulty = Math.max(1, session.currentDifficulty - 1)
          console.log('[AdaptiveLearning] 📉 Baisse de difficulté automatique:', session.currentDifficulty, '→', newDifficulty)

          updatedSession = {
            ...updatedSession,
            currentDifficulty: newDifficulty,
            difficultyHistory: [...session.difficultyHistory, newDifficulty],
            alerts: [...session.alerts, {
              type: 'difficulty_adjusted' as const,
              message: state === 'frustrated'
                ? "😊 Je vois que c'est difficile. J'ai baissé le niveau pour t'aider !"
                : "💪 Pas de souci, on va reprendre plus doucement.",
              timestamp: now,
              acknowledged: false
            }]
          }
        }

        // Si l'élève s'ennuie → augmenter la difficulté
        if (state === 'bored' && session.currentDifficulty < 5) {
          const newDifficulty = Math.min(5, session.currentDifficulty + 1)
          console.log('[AdaptiveLearning] 📈 Hausse de difficulté automatique:', session.currentDifficulty, '→', newDifficulty)

          updatedSession = {
            ...updatedSession,
            currentDifficulty: newDifficulty,
            difficultyHistory: [...session.difficultyHistory, newDifficulty],
            alerts: [...session.alerts, {
              type: 'difficulty_adjusted' as const,
              message: "🚀 Tu veux du challenge ? C'est parti, j'augmente le niveau !",
              timestamp: now,
              acknowledged: false
            }]
          }
        }

        // Si l'élève est confiant → augmenter légèrement la difficulté
        if (state === 'confident' && session.currentDifficulty < 5) {
          const newDifficulty = Math.min(5, session.currentDifficulty + 1)
          console.log('[AdaptiveLearning] 📈 Hausse de difficulté (confiance):', session.currentDifficulty, '→', newDifficulty)

          updatedSession = {
            ...updatedSession,
            currentDifficulty: newDifficulty,
            difficultyHistory: [...session.difficultyHistory, newDifficulty],
            alerts: [...updatedSession.alerts, {
              type: 'challenge' as const,
              message: "⭐ Tu gères bien ! On monte d'un cran ?",
              timestamp: now,
              acknowledged: false
            }]
          }
        }

        // Si l'élève est fatigué → suggérer une pause
        if (state === 'fatigued') {
          const hasRecentBreakAlert = session.alerts.some(
            a => a.type === 'break_suggested' &&
            (now.getTime() - new Date(a.timestamp).getTime()) < 5 * 60 * 1000 // 5 min
          )

          if (!hasRecentBreakAlert) {
            updatedSession = {
              ...updatedSession,
              alerts: [...updatedSession.alerts, {
                type: 'break_suggested' as const,
                message: "😴 Tu as l'air fatigué(e). On fait une petite pause ?",
                timestamp: now,
                acknowledged: false
              }]
            }
          }
        }

        set({ currentSession: updatedSession })
      },

      getCurrentState: () => {
        return get().currentSession?.emotionalState || null
      },

      getSessionStats: () => {
        return get().currentSession
      },

      getRecommendations: () => {
        const session = get().currentSession
        if (!session) return []

        const recommendations: string[] = []

        switch (session.emotionalState) {
          case 'fatigued':
            recommendations.push("🛋️ Prends une pause de 5-10 minutes")
            recommendations.push("🚶 Fais quelques étirements ou va marcher")
            recommendations.push("💧 Bois un verre d'eau")
            break
          case 'frustrated':
            recommendations.push("😤 C'est normal de bloquer, ça fait partie de l'apprentissage")
            recommendations.push("📝 Essaie de relire la leçon sur ce sujet")
            recommendations.push("🆘 N'hésite pas à demander de l'aide")
            break
          case 'bored':
            recommendations.push("🚀 Passe au niveau supérieur pour plus de challenge")
            recommendations.push("🎮 Essaie un mini-jeu pour varier")
            recommendations.push("🎯 Fixe-toi un objectif plus ambitieux")
            break
          case 'distracted':
            recommendations.push("📱 Range les distractions (téléphone, TV...)")
            recommendations.push("🎧 Mets de la musique calme si ça t'aide")
            recommendations.push("⏱️ Fais des sessions plus courtes (15 min)")
            break
          case 'struggling':
            recommendations.push("📚 Revois les bases de cette notion")
            recommendations.push("✏️ Essaie de faire un exercice plus simple d'abord")
            recommendations.push("🤔 Demande à Cap'taine d'expliquer autrement")
            break
          case 'confident':
            recommendations.push("⭐ Bravo ! Continue sur ta lancée")
            recommendations.push("🎯 C'est le moment d'attaquer un sujet plus difficile")
            break
          default:
            recommendations.push("👍 Tu travailles bien, continue !")
        }

        return recommendations
      },

      getWeeklyStats: () => {
        const oneWeekAgo = new Date()
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

        const weekSessions = get().sessionHistory.filter(
          s => new Date(s.date) >= oneWeekAgo
        )

        if (weekSessions.length === 0) {
          return {
            totalSessions: 0,
            totalMinutes: 0,
            totalQuestions: 0,
            averageSuccessRate: 0
          }
        }

        return {
          totalSessions: weekSessions.length,
          totalMinutes: Math.round(weekSessions.reduce((sum, s) => sum + s.duration, 0)),
          totalQuestions: weekSessions.reduce((sum, s) => sum + s.questionsAnswered, 0),
          averageSuccessRate: Math.round(
            (weekSessions.reduce((sum, s) => sum + s.successRate, 0) / weekSessions.length) * 100
          )
        }
      }
    }),
    {
      name: 'captaine-adaptive-learning'
    }
  )
)

/**
 * Génère un résumé de l'état pour le prompt IA
 */
export function generateAdaptiveContextForAI(profileId: string): string {
  const store = useAdaptiveLearning.getState()
  const session = store.currentSession

  if (!session || session.profileId !== profileId) {
    return ""
  }

  let context = "\n📊 ÉTAT DE SESSION EN COURS:\n"
  context += `- Questions répondues: ${session.totalQuestions}\n`
  context += `- Taux de réussite: ${Math.round((session.correctAnswers / Math.max(1, session.totalQuestions)) * 100)}%\n`
  context += `- Difficulté actuelle: ${session.currentDifficulty}/5\n`
  context += `- Durée: ${Math.round(session.totalDuration)} minutes\n`

  context += `\n🎭 ÉTAT ÉMOTIONNEL DÉTECTÉ: ${session.emotionalState.toUpperCase()}\n`

  switch (session.emotionalState) {
    case 'fatigued':
      context += "→ L'élève semble fatigué. Sois plus concis et propose une pause.\n"
      break
    case 'frustrated':
      context += "→ L'élève est frustré. Sois TRÈS encourageant et simplifie les explications.\n"
      break
    case 'bored':
      context += "→ L'élève s'ennuie (trop facile). Propose des défis plus complexes.\n"
      break
    case 'distracted':
      context += "→ L'élève semble distrait. Recentre-le avec des questions directes.\n"
      break
    case 'struggling':
      context += "→ L'élève a du mal mais persévère. Aide-le avec des indices progressifs.\n"
      break
    case 'confident':
      context += "→ L'élève est confiant. C'est le moment de le challenger davantage.\n"
      break
  }

  if (session.consecutiveWrong >= 2) {
    context += `\n⚠️ ATTENTION: ${session.consecutiveWrong} erreurs consécutives. Propose de l'aide.\n`
  }

  if (session.consecutiveCorrect >= 5) {
    context += `\n🌟 SÉRIE: ${session.consecutiveCorrect} bonnes réponses d'affilée ! Félicite l'élève.\n`
  }

  return context
}
