/**
 * Progress Reports - Système de rapports de progression
 *
 * Génère des rapports détaillés sur :
 * - Performance des sessions
 * - Progression à long terme
 * - Comparaison avec les objectifs
 * - Recommandations personnalisées
 *
 * @module ProgressReports
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useErrorPatterns } from './errorPatternDetector'
import { useSRS, generateReviewReport } from './spacedRepetition'
import { useAdaptiveLearning, SessionMetrics } from './adaptiveLearning'
import { getExerciseRecommendations } from './targetedExerciseGenerator'

/**
 * Rapport de session (après chaque session d'exercices)
 */
export interface SessionReport {
  id: string
  profileId: string
  date: Date
  durationMinutes: number

  // Performance
  totalExercises: number
  correctAnswers: number
  successRate: number
  averageTimePerExercise: number

  // Émotionnel
  emotionalStates: string[]
  predominantState: string
  fatigueDetected: boolean
  frustrationDetected: boolean

  // Patterns
  newPatternsDetected: string[]
  patternsWorkedOn: string[]

  // Progression
  skillsImproved: string[]
  skillsStruggled: string[]

  // Comparaison
  comparedToAverage: 'better' | 'same' | 'worse'
  improvementSinceLastSession: number // en %

  // Feedback
  highlights: string[]      // Points positifs
  areasToImprove: string[]  // Axes d'amélioration
  recommendations: string[] // Conseils pour la prochaine fois
}

/**
 * Rapport hebdomadaire
 */
export interface WeeklyReport {
  profileId: string
  weekStart: Date
  weekEnd: Date

  // Activité
  totalSessions: number
  totalExercises: number
  totalMinutes: number
  daysActive: number

  // Performance
  averageSuccessRate: number
  bestDay: { date: Date; successRate: number }
  worstDay: { date: Date; successRate: number }

  // Progression
  skillsMastered: string[]
  skillsInProgress: string[]
  skillsNeedingAttention: string[]

  // Patterns
  patternsResolved: string[]
  persistentPatterns: string[]

  // Tendances
  trend: 'improving' | 'stable' | 'declining'
  consistency: 'excellent' | 'good' | 'needs_improvement'

  // Objectifs
  weeklyGoalMet: boolean
  exercisesVsGoal: { completed: number; goal: number }

  // Récompenses suggérées
  achievements: string[]
  encouragement: string
}

/**
 * Statistiques globales d'un profil
 */
export interface ProfileStats {
  profileId: string

  // Totaux
  totalSessions: number
  totalExercises: number
  totalCorrect: number
  totalMinutes: number

  // Moyennes
  averageSuccessRate: number
  averageSessionLength: number
  averageExercisesPerSession: number

  // Records
  bestStreak: number           // Meilleure série de bonnes réponses
  currentStreak: number
  longestSession: number       // En minutes
  bestDayEver: { date: Date; successRate: number; exercises: number }

  // Par matière
  bySubject: Record<string, {
    exercises: number
    successRate: number
    averageTime: number
  }>

  // Progression dans le temps
  last7Days: { date: Date; successRate: number; exercises: number }[]
  last30Days: { date: Date; successRate: number; exercises: number }[]

  // Niveau estimé
  estimatedLevel: 'débutant' | 'en progression' | 'confirmé' | 'expert'
}

/**
 * Store pour les rapports
 */
interface ReportsStore {
  sessionReports: SessionReport[]
  weeklyReports: WeeklyReport[]

  // Enregistrement
  saveSessionReport: (report: Omit<SessionReport, 'id'>) => SessionReport
  generateWeeklyReport: (profileId: string) => WeeklyReport

  // Récupération
  getSessionReports: (profileId: string, limit?: number) => SessionReport[]
  getWeeklyReports: (profileId: string, limit?: number) => WeeklyReport[]
  getLastSessionReport: (profileId: string) => SessionReport | undefined

  // Analyse
  getProfileStats: (profileId: string) => ProfileStats
  getTrend: (profileId: string, days?: number) => 'improving' | 'stable' | 'declining'

  // Comparaison
  compareWithPrevious: (profileId: string) => {
    change: number
    direction: 'up' | 'down' | 'same'
    message: string
  }
}

export const useReports = create<ReportsStore>()(
  persist(
    (set, get) => ({
      sessionReports: [],
      weeklyReports: [],

      saveSessionReport: (reportData) => {
        const report: SessionReport = {
          ...reportData,
          id: `report_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        }

        set((state) => ({
          sessionReports: [...state.sessionReports, report].slice(-100) // Garder 100 derniers
        }))

        console.log('[Reports] Session report saved:', report.id)
        return report
      },

      generateWeeklyReport: (profileId) => {
        const now = new Date()
        const weekStart = new Date(now)
        weekStart.setDate(weekStart.getDate() - 7)

        const sessionReports = get().sessionReports.filter(
          r => r.profileId === profileId && new Date(r.date) >= weekStart
        )

        const srs = useSRS.getState()
        const errorPatterns = useErrorPatterns.getState()
        const srsStats = srs.getStats(profileId)
        const patterns = errorPatterns.getPatterns(profileId)

        // Calculer les stats de la semaine
        const totalSessions = sessionReports.length
        const totalExercises = sessionReports.reduce((sum, r) => sum + r.totalExercises, 0)
        const totalMinutes = sessionReports.reduce((sum, r) => sum + r.durationMinutes, 0)

        // Jours actifs
        const activeDays = new Set(sessionReports.map(r =>
          new Date(r.date).toDateString()
        )).size

        // Moyenne du taux de réussite
        const avgSuccess = sessionReports.length > 0
          ? sessionReports.reduce((sum, r) => sum + r.successRate, 0) / sessionReports.length
          : 0

        // Meilleur et pire jour
        const byDay = sessionReports.reduce((acc, r) => {
          const day = new Date(r.date).toDateString()
          if (!acc[day]) acc[day] = { total: 0, correct: 0, count: 0 }
          acc[day].total += r.totalExercises
          acc[day].correct += r.correctAnswers
          acc[day].count++
          return acc
        }, {} as Record<string, { total: number; correct: number; count: number }>)

        const dayStats = Object.entries(byDay).map(([day, stats]) => ({
          date: new Date(day),
          successRate: stats.total > 0 ? (stats.correct / stats.total) * 100 : 0
        }))

        const sortedDays = dayStats.sort((a, b) => b.successRate - a.successRate)
        const bestDay = sortedDays[0] || { date: now, successRate: 0 }
        const worstDay = sortedDays[sortedDays.length - 1] || { date: now, successRate: 0 }

        // Compétences
        const skillsWithHighEF = srs.cards.filter(c =>
          c.profileId === profileId && c.easeFactor > 2.5 && c.interval > 14
        ).map(c => c.skill)

        const skillsInProgress = srs.cards.filter(c =>
          c.profileId === profileId && c.easeFactor >= 2.0 && c.easeFactor <= 2.5
        ).map(c => c.skill)

        const skillsNeedingWork = srs.cards.filter(c =>
          c.profileId === profileId && c.easeFactor < 2.0
        ).map(c => c.skill)

        // Patterns
        const resolvedPatterns = patterns.filter(p =>
          p.isResolved && p.resolvedAt && new Date(p.resolvedAt) >= weekStart
        ).map(p => p.description)

        const persistentPatterns = patterns.filter(p =>
          !p.isResolved && p.occurrences > 3
        ).map(p => p.description)

        // Tendance
        const trend = get().getTrend(profileId, 7)

        // Constance
        const consistency = activeDays >= 5 ? 'excellent' :
                           activeDays >= 3 ? 'good' : 'needs_improvement'

        // Objectif hebdomadaire (50 exercices par défaut)
        const weeklyGoal = 50
        const weeklyGoalMet = totalExercises >= weeklyGoal

        // Succès et encouragements
        const achievements: string[] = []
        if (weeklyGoalMet) achievements.push("Objectif hebdomadaire atteint !")
        if (activeDays >= 5) achievements.push("Présent 5 jours ou plus !")
        if (avgSuccess >= 80) achievements.push("Excellence : +80% de réussite !")
        if (resolvedPatterns.length > 0) achievements.push(`${resolvedPatterns.length} difficulté(s) surmontée(s) !`)

        const encouragements = [
          "Continue comme ça, tu progresses super bien !",
          "Chaque exercice te rend plus fort(e) !",
          "Tes efforts portent leurs fruits, bravo !",
          "Tu es sur la bonne voie, continue !",
          "Impressionnant ! Tu t'améliores chaque jour !"
        ]
        const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]

        const report: WeeklyReport = {
          profileId,
          weekStart,
          weekEnd: now,
          totalSessions,
          totalExercises,
          totalMinutes,
          daysActive: activeDays,
          averageSuccessRate: Math.round(avgSuccess),
          bestDay,
          worstDay,
          skillsMastered: skillsWithHighEF.slice(0, 5),
          skillsInProgress: skillsInProgress.slice(0, 5),
          skillsNeedingAttention: skillsNeedingWork.slice(0, 5),
          patternsResolved: resolvedPatterns,
          persistentPatterns: persistentPatterns.slice(0, 3),
          trend,
          consistency,
          weeklyGoalMet,
          exercisesVsGoal: { completed: totalExercises, goal: weeklyGoal },
          achievements,
          encouragement
        }

        set((state) => ({
          weeklyReports: [...state.weeklyReports, report].slice(-52) // Garder 1 an
        }))

        return report
      },

      getSessionReports: (profileId, limit = 10) => {
        return get().sessionReports
          .filter(r => r.profileId === profileId)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, limit)
      },

      getWeeklyReports: (profileId, limit = 4) => {
        return get().weeklyReports
          .filter(r => r.profileId === profileId)
          .sort((a, b) => new Date(b.weekEnd).getTime() - new Date(a.weekEnd).getTime())
          .slice(0, limit)
      },

      getLastSessionReport: (profileId) => {
        return get().getSessionReports(profileId, 1)[0]
      },

      getProfileStats: (profileId) => {
        const reports = get().sessionReports.filter(r => r.profileId === profileId)
        const srs = useSRS.getState()
        const cards = srs.cards.filter(c => c.profileId === profileId)

        // Totaux
        const totalSessions = reports.length
        const totalExercises = reports.reduce((sum, r) => sum + r.totalExercises, 0)
        const totalCorrect = reports.reduce((sum, r) => sum + r.correctAnswers, 0)
        const totalMinutes = reports.reduce((sum, r) => sum + r.durationMinutes, 0)

        // Moyennes
        const averageSuccessRate = totalExercises > 0 ? (totalCorrect / totalExercises) * 100 : 0
        const averageSessionLength = totalSessions > 0 ? totalMinutes / totalSessions : 0
        const averageExercisesPerSession = totalSessions > 0 ? totalExercises / totalSessions : 0

        // Records (à implémenter avec un tracking plus fin)
        const bestStreak = 0 // TODO: calculer depuis les données d'exercices
        const currentStreak = 0
        const longestSession = Math.max(...reports.map(r => r.durationMinutes), 0)

        // Meilleur jour
        const bestDay = reports.reduce((best, r) => {
          if (r.successRate > (best?.successRate || 0)) {
            return { date: r.date, successRate: r.successRate, exercises: r.totalExercises }
          }
          return best
        }, null as { date: Date; successRate: number; exercises: number } | null)

        // Par matière (à partir des cartes SRS)
        const bySubject: Record<string, { exercises: number; successRate: number; averageTime: number }> = {}
        for (const card of cards) {
          if (!bySubject[card.subject]) {
            bySubject[card.subject] = { exercises: 0, successRate: 0, averageTime: 0 }
          }
          bySubject[card.subject].exercises += card.totalReviews
          bySubject[card.subject].successRate = card.totalReviews > 0
            ? (card.correctReviews / card.totalReviews) * 100
            : 0
        }

        // Derniers jours
        const now = new Date()
        const last7Days: { date: Date; successRate: number; exercises: number }[] = []
        const last30Days: { date: Date; successRate: number; exercises: number }[] = []

        for (let i = 0; i < 30; i++) {
          const date = new Date(now)
          date.setDate(date.getDate() - i)
          const dateStr = date.toDateString()

          const dayReports = reports.filter(r => new Date(r.date).toDateString() === dateStr)
          const exercises = dayReports.reduce((sum, r) => sum + r.totalExercises, 0)
          const correct = dayReports.reduce((sum, r) => sum + r.correctAnswers, 0)
          const successRate = exercises > 0 ? (correct / exercises) * 100 : 0

          const dayStats = { date, successRate, exercises }

          if (i < 7) last7Days.push(dayStats)
          last30Days.push(dayStats)
        }

        // Niveau estimé
        let estimatedLevel: 'débutant' | 'en progression' | 'confirmé' | 'expert' = 'débutant'
        if (averageSuccessRate >= 90 && totalExercises > 500) estimatedLevel = 'expert'
        else if (averageSuccessRate >= 75 && totalExercises > 200) estimatedLevel = 'confirmé'
        else if (averageSuccessRate >= 60 && totalExercises > 50) estimatedLevel = 'en progression'

        return {
          profileId,
          totalSessions,
          totalExercises,
          totalCorrect,
          totalMinutes,
          averageSuccessRate: Math.round(averageSuccessRate * 10) / 10,
          averageSessionLength: Math.round(averageSessionLength),
          averageExercisesPerSession: Math.round(averageExercisesPerSession),
          bestStreak,
          currentStreak,
          longestSession,
          bestDayEver: bestDay || { date: now, successRate: 0, exercises: 0 },
          bySubject,
          last7Days,
          last30Days,
          estimatedLevel
        }
      },

      getTrend: (profileId, days = 7) => {
        const reports = get().sessionReports.filter(r => {
          const reportDate = new Date(r.date)
          const cutoff = new Date()
          cutoff.setDate(cutoff.getDate() - days)
          return r.profileId === profileId && reportDate >= cutoff
        })

        if (reports.length < 3) return 'stable'

        // Comparer première et deuxième moitié
        const sorted = reports.sort((a, b) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
        )
        const mid = Math.floor(sorted.length / 2)
        const firstHalf = sorted.slice(0, mid)
        const secondHalf = sorted.slice(mid)

        const avgFirst = firstHalf.reduce((sum, r) => sum + r.successRate, 0) / firstHalf.length
        const avgSecond = secondHalf.reduce((sum, r) => sum + r.successRate, 0) / secondHalf.length

        if (avgSecond > avgFirst + 5) return 'improving'
        if (avgSecond < avgFirst - 5) return 'declining'
        return 'stable'
      },

      compareWithPrevious: (profileId) => {
        const reports = get().getSessionReports(profileId, 2)

        if (reports.length < 2) {
          return {
            change: 0,
            direction: 'same' as const,
            message: "C'est ta première session, continue !"
          }
        }

        const [current, previous] = reports
        const change = current.successRate - previous.successRate

        let direction: 'up' | 'down' | 'same'
        let message: string

        if (change > 5) {
          direction = 'up'
          message = `Super ! Tu as progressé de ${Math.round(change)}% par rapport à la dernière fois !`
        } else if (change < -5) {
          direction = 'down'
          message = `Tu as eu un peu plus de mal aujourd'hui (-${Math.round(Math.abs(change))}%), mais c'est normal ! Continue !`
        } else {
          direction = 'same'
          message = "Tu maintiens un bon niveau, continue comme ça !"
        }

        return { change: Math.round(change), direction, message }
      }
    }),
    {
      name: 'captaine-reports'
    }
  )
)

/**
 * Crée un rapport de session à partir des métriques de session adaptive
 */
export function createSessionReportFromMetrics(
  profileId: string,
  metrics: SessionMetrics
): SessionReport {
  const errorPatterns = useErrorPatterns.getState()
  const patterns = errorPatterns.getActivePatterns(profileId)
  const reports = useReports.getState()
  const lastReport = reports.getLastSessionReport(profileId)

  const successRate = metrics.totalAnswers > 0
    ? (metrics.correctAnswers / metrics.totalAnswers) * 100
    : 0

  // Déterminer l'état émotionnel prédominant
  // (simplifié - dans une vraie implémentation, on tracerait au fil de la session)
  const predominantState = metrics.consecutiveCorrect > 3 ? 'confident' :
                           metrics.consecutiveWrong > 2 ? 'struggling' : 'engaged'

  // Calculer l'amélioration
  const improvementSinceLastSession = lastReport
    ? successRate - lastReport.successRate
    : 0

  // Comparer à la moyenne
  const stats = reports.getProfileStats(profileId)
  const comparedToAverage: 'better' | 'same' | 'worse' =
    successRate > stats.averageSuccessRate + 5 ? 'better' :
    successRate < stats.averageSuccessRate - 5 ? 'worse' : 'same'

  // Points positifs
  const highlights: string[] = []
  if (successRate >= 80) highlights.push("Excellent taux de réussite !")
  if (metrics.consecutiveCorrect >= 5) highlights.push("Belle série de bonnes réponses !")
  if (improvementSinceLastSession > 0) highlights.push("Tu t'es amélioré(e) depuis la dernière fois !")

  // Axes d'amélioration
  const areasToImprove: string[] = []
  if (metrics.averageResponseTime > 60) areasToImprove.push("Essaie de répondre un peu plus vite")
  if (successRate < 60) areasToImprove.push("Revois les notions difficiles")
  patterns.slice(0, 2).forEach(p => areasToImprove.push(p.description))

  // Recommandations
  const recommendations: string[] = []
  if (metrics.totalAnswers < 10) recommendations.push("Essaie de faire au moins 10 exercices par session")
  if (patterns.length > 0) {
    recommendations.push(`Travaille sur : ${patterns[0].description}`)
  }
  recommendations.push("N'oublie pas de faire des pauses régulières !")

  const report: Omit<SessionReport, 'id'> = {
    profileId,
    date: new Date(),
    durationMinutes: Math.round((Date.now() - metrics.startTime) / 60000),
    totalExercises: metrics.totalAnswers,
    correctAnswers: metrics.correctAnswers,
    successRate: Math.round(successRate),
    averageTimePerExercise: Math.round(metrics.averageResponseTime),
    emotionalStates: [predominantState],
    predominantState,
    fatigueDetected: predominantState === 'fatigued',
    frustrationDetected: metrics.consecutiveWrong > 3,
    newPatternsDetected: [],
    patternsWorkedOn: patterns.map(p => p.description).slice(0, 3),
    skillsImproved: [],
    skillsStruggled: patterns.map(p => p.skills[0]).filter(Boolean).slice(0, 3),
    comparedToAverage,
    improvementSinceLastSession: Math.round(improvementSinceLastSession),
    highlights,
    areasToImprove,
    recommendations
  }

  return reports.saveSessionReport(report)
}

/**
 * Génère un texte de rapport pour l'affichage
 */
export function formatSessionReportText(report: SessionReport): string {
  let text = `📊 RAPPORT DE SESSION\n`
  text += `${'─'.repeat(40)}\n\n`

  // Performance
  text += `✅ ${report.correctAnswers}/${report.totalExercises} bonnes réponses (${report.successRate}%)\n`
  text += `⏱️ Durée : ${report.durationMinutes} minutes\n`
  text += `⚡ Temps moyen par exercice : ${report.averageTimePerExercise}s\n\n`

  // État
  const stateEmojis: Record<string, string> = {
    engaged: '😊',
    confident: '💪',
    struggling: '😰',
    frustrated: '😤',
    fatigued: '😴',
    bored: '😑'
  }
  text += `État : ${stateEmojis[report.predominantState] || '🙂'} ${report.predominantState}\n\n`

  // Comparaison
  if (report.comparedToAverage === 'better') {
    text += `📈 Au-dessus de ta moyenne ! Bravo !\n`
  } else if (report.comparedToAverage === 'worse') {
    text += `📉 Un peu en dessous de ta moyenne, mais c'est normal !\n`
  }

  if (report.improvementSinceLastSession > 0) {
    text += `🚀 +${report.improvementSinceLastSession}% par rapport à la dernière session !\n`
  }

  text += '\n'

  // Points positifs
  if (report.highlights.length > 0) {
    text += `🌟 Points positifs :\n`
    report.highlights.forEach(h => text += `   • ${h}\n`)
    text += '\n'
  }

  // Axes d'amélioration
  if (report.areasToImprove.length > 0) {
    text += `📝 À travailler :\n`
    report.areasToImprove.forEach(a => text += `   • ${a}\n`)
    text += '\n'
  }

  // Recommandations
  if (report.recommendations.length > 0) {
    text += `💡 Conseils :\n`
    report.recommendations.forEach(r => text += `   • ${r}\n`)
  }

  return text
}

/**
 * Génère un rapport hebdomadaire formaté
 */
export function formatWeeklyReportText(report: WeeklyReport): string {
  let text = `📅 RAPPORT DE LA SEMAINE\n`
  text += `${'═'.repeat(40)}\n\n`

  // Activité
  text += `📊 Activité :\n`
  text += `   • ${report.totalSessions} sessions\n`
  text += `   • ${report.totalExercises} exercices (objectif: ${report.exercisesVsGoal.goal})\n`
  text += `   • ${report.totalMinutes} minutes au total\n`
  text += `   • ${report.daysActive} jours actifs\n\n`

  // Performance
  text += `📈 Performance :\n`
  text += `   • Taux de réussite moyen : ${report.averageSuccessRate}%\n`
  text += `   • Tendance : ${report.trend === 'improving' ? '📈 En progression' :
                           report.trend === 'declining' ? '📉 En baisse' : '➡️ Stable'}\n`
  text += `   • Régularité : ${report.consistency === 'excellent' ? '⭐ Excellente' :
                              report.consistency === 'good' ? '✓ Bonne' : '⚠️ À améliorer'}\n\n`

  // Compétences
  if (report.skillsMastered.length > 0) {
    text += `🏆 Compétences maîtrisées :\n`
    report.skillsMastered.forEach(s => text += `   • ${s}\n`)
    text += '\n'
  }

  if (report.skillsNeedingAttention.length > 0) {
    text += `📝 À renforcer :\n`
    report.skillsNeedingAttention.forEach(s => text += `   • ${s}\n`)
    text += '\n'
  }

  // Achievements
  if (report.achievements.length > 0) {
    text += `🎖️ Succès de la semaine :\n`
    report.achievements.forEach(a => text += `   🌟 ${a}\n`)
    text += '\n'
  }

  // Encouragement
  text += `\n💪 ${report.encouragement}\n`

  return text
}

/**
 * Génère le contexte de rapport pour l'IA
 */
export function generateReportContextForAI(profileId: string): string {
  const reports = useReports.getState()
  const lastSession = reports.getLastSessionReport(profileId)
  const stats = reports.getProfileStats(profileId)
  const comparison = reports.compareWithPrevious(profileId)
  const trend = reports.getTrend(profileId)

  let context = "\n📊 HISTORIQUE ET PROGRESSION:\n"

  // Stats globales
  context += `\nStatistiques globales:\n`
  context += `  • ${stats.totalSessions} sessions, ${stats.totalExercises} exercices\n`
  context += `  • Taux de réussite moyen: ${stats.averageSuccessRate}%\n`
  context += `  • Niveau estimé: ${stats.estimatedLevel}\n`
  context += `  • Tendance: ${trend === 'improving' ? 'en amélioration' :
                             trend === 'declining' ? 'en baisse' : 'stable'}\n`

  // Dernière session
  if (lastSession) {
    context += `\nDernière session (${new Date(lastSession.date).toLocaleDateString('fr-FR')}):\n`
    context += `  • ${lastSession.successRate}% de réussite\n`
    context += `  • État: ${lastSession.predominantState}\n`
    context += `  • ${comparison.message}\n`
  }

  return context
}
