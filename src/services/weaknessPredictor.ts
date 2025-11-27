/**
 * Système ML de Prédiction et Détection des Faiblesses
 * Analyse les performances de l'enfant et prédit les difficultés futures
 */

import { aiManager } from './aiProviders'

export interface SkillPerformance {
  skill: string
  subject: string
  totalAttempts: number
  successCount: number
  failureCount: number
  averageTime?: number // secondes
  lastAttempts: boolean[] // Historique des 10 dernières tentatives
  trend: 'improving' | 'stable' | 'declining'
  confidence: number // 0-100% confiance dans la prédiction
}

export interface WeaknessPrediction {
  skill: string
  subject: string
  currentLevel: number // 0-100
  predictedLevel: number // 0-100 dans 1 mois si pas d'intervention
  riskScore: number // 0-100 (100 = risque élevé d'échec)
  recommendedActions: string[]
  suggestedExercises: {
    type: string
    difficulty: number
    description: string
  }[]
}

export interface LearningProfile {
  strengths: string[]
  weaknesses: string[]
  learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'mixed'
  optimalDifficulty: number // 1-5
  motivationLevel: number // 0-100
  consistency: number // 0-100 (régularité du travail)
}

/**
 * Analyse locale (ML basique) - GRATUIT
 */
export class LocalWeaknessAnalyzer {
  /**
   * Calcule le taux de réussite avec pondération temporelle
   * Les tentatives récentes comptent plus
   */
  static calculateWeightedSuccessRate(attempts: boolean[]): number {
    if (attempts.length === 0) return 0

    let weightedSum = 0
    let totalWeight = 0

    attempts.forEach((success, index) => {
      // Plus c'est récent, plus le poids est élevé
      const weight = Math.pow(1.5, index)
      weightedSum += success ? weight : 0
      totalWeight += weight
    })

    return (weightedSum / totalWeight) * 100
  }

  /**
   * Détecte la tendance d'évolution
   */
  static detectTrend(attempts: boolean[]): 'improving' | 'stable' | 'declining' {
    if (attempts.length < 3) return 'stable'

    // Comparer première moitié vs seconde moitié
    const half = Math.floor(attempts.length / 2)
    const firstHalf = attempts.slice(0, half)
    const secondHalf = attempts.slice(half)

    const firstRate = firstHalf.filter(Boolean).length / firstHalf.length
    const secondRate = secondHalf.filter(Boolean).length / secondHalf.length

    const diff = secondRate - firstRate

    if (diff > 0.2) return 'improving'
    if (diff < -0.2) return 'declining'
    return 'stable'
  }

  /**
   * Prédit le risque d'échec futur
   */
  static predictRiskScore(performance: SkillPerformance): number {
    const successRate = this.calculateWeightedSuccessRate(performance.lastAttempts)
    const trend = performance.trend

    let riskScore = 100 - successRate

    // Ajuster selon la tendance
    if (trend === 'declining') {
      riskScore += 20
    } else if (trend === 'improving') {
      riskScore -= 20
    }

    // Ajuster selon le nombre de tentatives
    if (performance.totalAttempts < 3) {
      riskScore += 10 // Moins de données = plus d'incertitude
    }

    return Math.max(0, Math.min(100, riskScore))
  }

  /**
   * Génère des recommandations basées sur les patterns
   */
  static generateLocalRecommendations(performance: SkillPerformance): string[] {
    const recommendations: string[] = []
    const successRate = this.calculateWeightedSuccessRate(performance.lastAttempts)

    if (successRate < 40) {
      recommendations.push(`⚠️ ${performance.skill} : Revoir les bases avec des exercices très simples`)
      recommendations.push(`📚 Regarder un mini-cours sur ${performance.skill}`)
    } else if (successRate < 70) {
      recommendations.push(`📖 ${performance.skill} : Pratique régulière recommandée`)
      recommendations.push(`🎯 Faire 5 exercices par jour pendant une semaine`)
    } else {
      recommendations.push(`✅ ${performance.skill} : Continue comme ça !`)
      recommendations.push(`🚀 Passe au niveau suivant`)
    }

    if (performance.trend === 'declining') {
      recommendations.push(`⚠️ Attention : Baisse de performance détectée`)
      recommendations.push(`💡 Prendre une pause et reprendre les fondamentaux`)
    }

    return recommendations
  }
}

/**
 * Analyse Cloud (IA Avancée) - OPTIONNEL
 */
export class CloudWeaknessAnalyzer {
  /**
   * Analyse sémantique profonde avec Claude/Gemini
   */
  static async analyzeWithAI(
    performances: SkillPerformance[],
    recentErrors: { question: string; answer: string; expected: string }[]
  ): Promise<{
    insights: string[]
    predictions: WeaknessPrediction[]
    learningProfile: LearningProfile
  }> {
    console.log('[CloudAnalyzer] Starting AI analysis...')

    try {
      // Construire le prompt d'analyse
      const prompt = this.buildAnalysisPrompt(performances, recentErrors)

      // Appeler l'IA
      const response = await aiManager.chat([
        {
          role: 'system',
          content: `Tu es un expert en pédagogie et psychologie de l'apprentissage.
Analyse les performances d'un élève et fournis des insights pédagogiques précis.
Réponds UNIQUEMENT en JSON valide, sans texte autour.`
        },
        {
          role: 'user',
          content: prompt
        }
      ])

      if (!response.success || !response.content) {
        throw new Error('AI analysis failed')
      }

      // Parser la réponse
      const analysis = this.parseAIResponse(response.content)

      console.log('[CloudAnalyzer] AI analysis complete')
      return analysis

    } catch (error) {
      console.error('[CloudAnalyzer] Error:', error)
      // Fallback sur analyse locale
      return this.fallbackAnalysis(performances)
    }
  }

  /**
   * Construit le prompt d'analyse pour l'IA
   */
  private static buildAnalysisPrompt(
    performances: SkillPerformance[],
    recentErrors: { question: string; answer: string; expected: string }[]
  ): string {
    return `Analyse les performances de cet élève et fournis des insights pédagogiques.

**PERFORMANCES PAR COMPÉTENCE:**
${performances.map(p => `
- ${p.skill} (${p.subject}):
  * Taux de réussite: ${Math.round((p.successCount / p.totalAttempts) * 100)}%
  * Tendance: ${p.trend}
  * Dernières tentatives: ${p.lastAttempts.map(s => s ? '✓' : '✗').join(' ')}
`).join('\n')}

**ERREURS RÉCENTES:**
${recentErrors.slice(0, 5).map((err, i) => `
${i + 1}. Question: "${err.question}"
   Réponse donnée: "${err.answer}"
   Réponse attendue: "${err.expected}"
`).join('\n')}

**ANALYSE DEMANDÉE:**
Retourne un JSON avec cette structure exacte:
{
  "insights": [
    "Insight pédagogique 1",
    "Insight pédagogique 2",
    "Insight pédagogique 3"
  ],
  "predictions": [
    {
      "skill": "nom de la compétence",
      "subject": "matière",
      "currentLevel": 0-100,
      "predictedLevel": 0-100,
      "riskScore": 0-100,
      "recommendedActions": ["action 1", "action 2"],
      "suggestedExercises": [
        {
          "type": "Type d'exercice",
          "difficulty": 1-5,
          "description": "Description"
        }
      ]
    }
  ],
  "learningProfile": {
    "strengths": ["force 1", "force 2"],
    "weaknesses": ["faiblesse 1", "faiblesse 2"],
    "learningStyle": "visual|auditory|kinesthetic|mixed",
    "optimalDifficulty": 1-5,
    "motivationLevel": 0-100,
    "consistency": 0-100
  }
}

Concentre-toi sur:
1. Patterns d'erreurs récurrents
2. Compétences à renforcer en priorité
3. Recommandations concrètes et actionnables
4. Prédictions réalistes basées sur les données`
  }

  /**
   * Parse la réponse IA
   */
  private static parseAIResponse(content: string): {
    insights: string[]
    predictions: WeaknessPrediction[]
    learningProfile: LearningProfile
  } {
    try {
      // Nettoyer le markdown si présent
      let cleaned = content.trim()
      if (cleaned.startsWith('```')) {
        cleaned = cleaned.replace(/```json?\n?/g, '').replace(/```\n?$/g, '')
      }

      const parsed = JSON.parse(cleaned)

      return {
        insights: parsed.insights || [],
        predictions: parsed.predictions || [],
        learningProfile: parsed.learningProfile || this.getDefaultProfile()
      }
    } catch (error) {
      console.error('[CloudAnalyzer] Parse error:', error)
      throw error
    }
  }

  /**
   * Analyse de fallback si l'IA échoue
   */
  private static fallbackAnalysis(performances: SkillPerformance[]): {
    insights: string[]
    predictions: WeaknessPrediction[]
    learningProfile: LearningProfile
  } {
    const insights: string[] = [
      'Analyse basée sur les données locales (mode hors ligne)',
      'Pour une analyse plus poussée, active une IA cloud dans les paramètres'
    ]

    const predictions: WeaknessPrediction[] = performances.map(perf => ({
      skill: perf.skill,
      subject: perf.subject,
      currentLevel: Math.round((perf.successCount / perf.totalAttempts) * 100),
      predictedLevel: Math.round((perf.successCount / perf.totalAttempts) * 100) - (perf.trend === 'declining' ? 10 : 0),
      riskScore: LocalWeaknessAnalyzer.predictRiskScore(perf),
      recommendedActions: LocalWeaknessAnalyzer.generateLocalRecommendations(perf),
      suggestedExercises: []
    }))

    return {
      insights,
      predictions,
      learningProfile: this.getDefaultProfile()
    }
  }

  /**
   * Profil par défaut
   */
  private static getDefaultProfile(): LearningProfile {
    return {
      strengths: [],
      weaknesses: [],
      learningStyle: 'mixed',
      optimalDifficulty: 3,
      motivationLevel: 50,
      consistency: 50
    }
  }
}

/**
 * Interface unifiée - choisit automatiquement local ou cloud
 */
export class WeaknessPredictor {
  static async analyze(
    performances: SkillPerformance[],
    recentErrors: { question: string; answer: string; expected: string }[] = [],
    useCloud: boolean = false
  ) {
    console.log(`[WeaknessPredictor] Analyzing with ${useCloud ? 'CLOUD AI' : 'LOCAL ML'}`)

    if (useCloud) {
      // Essayer l'analyse cloud
      try {
        return await CloudWeaknessAnalyzer.analyzeWithAI(performances, recentErrors)
      } catch (error) {
        console.warn('[WeaknessPredictor] Cloud analysis failed, falling back to local')
      }
    }

    // Analyse locale
    const insights: string[] = [
      `Analyse de ${performances.length} compétences`,
      'Basée sur les performances récentes'
    ]

    const predictions: WeaknessPrediction[] = performances.map(perf => ({
      skill: perf.skill,
      subject: perf.subject,
      currentLevel: Math.round((perf.successCount / perf.totalAttempts) * 100),
      predictedLevel: Math.round((perf.successCount / perf.totalAttempts) * 100),
      riskScore: LocalWeaknessAnalyzer.predictRiskScore(perf),
      recommendedActions: LocalWeaknessAnalyzer.generateLocalRecommendations(perf),
      suggestedExercises: []
    }))

    return {
      insights,
      predictions,
      learningProfile: CloudWeaknessAnalyzer['getDefaultProfile']()
    }
  }
}
