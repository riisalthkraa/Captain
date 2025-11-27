/**
 * Error Pattern Detector - Détection intelligente des patterns d'erreurs
 *
 * Analyse les erreurs de l'élève pour détecter des patterns récurrents :
 * - Confusions (a/à, ×/÷, etc.)
 * - Erreurs de calcul spécifiques (retenues, tables)
 * - Lacunes conceptuelles
 *
 * @module ErrorPatternDetector
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * Types de patterns d'erreurs
 */
export type ErrorPatternType =
  | 'confusion'        // Confond deux choses (a/à, leur/leurs)
  | 'calculation'      // Erreur de calcul récurrente
  | 'concept'          // Ne comprend pas un concept
  | 'attention'        // Erreurs d'inattention
  | 'method'           // Mauvaise méthode/procédure
  | 'memory'           // Oublie des règles/formules

/**
 * Pattern d'erreur détecté
 */
export interface ErrorPattern {
  id: string
  profileId: string

  type: ErrorPatternType
  description: string           // "Confond × et ÷"
  subject: string
  skills: string[]              // Compétences affectées

  // Statistiques
  occurrences: number           // Nombre de fois détecté
  lastOccurrence: Date
  firstOccurrence: Date

  // Exemples
  examples: {
    question: string
    userAnswer: string
    correctAnswer: string
    timestamp: Date
  }[]

  // Confiance dans la détection (0-100)
  confidence: number

  // Recommandations générées
  recommendations: string[]

  // Statut
  isResolved: boolean           // L'élève a corrigé ce pattern
  resolvedAt?: Date
}

/**
 * Règles de détection prédéfinies
 */
const DETECTION_RULES: {
  pattern: RegExp | ((q: string, ua: string, ca: string) => boolean)
  type: ErrorPatternType
  description: string
  subject: string
  skills: string[]
  recommendations: string[]
}[] = [
  // === FRANÇAIS ===
  {
    pattern: (q, ua, ca) => {
      const hasA = ca.includes(' a ') || ca.includes("a ")
      const hasÀ = ca.includes(' à ') || ca.includes("à ")
      const userWrong = (hasA && ua.includes(' à ')) || (hasÀ && ua.includes(' a '))
      return userWrong
    },
    type: 'confusion',
    description: "Confond 'a' (verbe avoir) et 'à' (préposition)",
    subject: 'français',
    skills: ['homophones', 'grammaire', 'conjugaison'],
    recommendations: [
      "Astuce : remplace par 'avait'. Si ça marche, c'est 'a' (verbe avoir)",
      "Exercice : écrire 5 phrases avec 'a' et 5 avec 'à'",
      "Rappel : 'à' indique un lieu, un destinataire, un moment"
    ]
  },
  {
    pattern: (q, ua, ca) => {
      const confusionET = (ca.includes(' et ') && ua.includes(' est ')) ||
                          (ca.includes(' est ') && ua.includes(' et '))
      return confusionET
    },
    type: 'confusion',
    description: "Confond 'et' (conjonction) et 'est' (verbe être)",
    subject: 'français',
    skills: ['homophones', 'grammaire'],
    recommendations: [
      "Astuce : remplace par 'était'. Si ça marche, c'est 'est' (verbe être)",
      "Astuce : remplace par 'et puis'. Si ça marche, c'est 'et' (addition)",
      "Exercice : transformer des phrases au passé pour identifier 'est'"
    ]
  },
  {
    pattern: (q, ua, ca) => {
      const confusionSeSaï =
        (ca.toLowerCase().includes('ces ') && ua.toLowerCase().includes('ses ')) ||
        (ca.toLowerCase().includes('ses ') && ua.toLowerCase().includes('ces ')) ||
        (ca.toLowerCase().includes("c'est ") && ua.toLowerCase().includes("s'est ")) ||
        (ca.toLowerCase().includes("s'est ") && ua.toLowerCase().includes("c'est "))
      return confusionSeSaï
    },
    type: 'confusion',
    description: "Confond ces/ses ou c'est/s'est",
    subject: 'français',
    skills: ['homophones', 'grammaire', 'déterminants'],
    recommendations: [
      "'Ses' = les siens (possessif). 'Ces' = ceux-là (démonstratif)",
      "'C'est' = cela est. 'S'est' = il s'est (verbe pronominal)",
      "Exercice : remplacer par 'les siens' pour vérifier 'ses'"
    ]
  },
  {
    pattern: (q, ua, ca) => {
      return (ca.includes('leur ') && ua.includes('leurs ')) ||
             (ca.includes('leurs ') && ua.includes('leur '))
    },
    type: 'confusion',
    description: "Confond 'leur' et 'leurs' (accord du pluriel)",
    subject: 'français',
    skills: ['accord', 'grammaire', 'pluriel'],
    recommendations: [
      "'Leur' devant un verbe = ne prend jamais de S",
      "'Leurs' devant un nom pluriel = prend un S",
      "Astuce : si on peut remplacer par 'lui', c'est 'leur' sans S"
    ]
  },

  // === MATHS ===
  {
    pattern: (q, ua, ca) => {
      // Détecte les erreurs de retenue dans l'addition
      if (!q.toLowerCase().includes('+')) return false
      const caNum = parseInt(ca)
      const uaNum = parseInt(ua)
      if (isNaN(caNum) || isNaN(uaNum)) return false
      // Erreur de 10 = retenue oubliée
      return Math.abs(caNum - uaNum) === 10 || Math.abs(caNum - uaNum) === 100
    },
    type: 'calculation',
    description: "Oublie les retenues dans les additions",
    subject: 'maths',
    skills: ['addition', 'calcul posé', 'retenues'],
    recommendations: [
      "Bien poser le calcul en colonnes",
      "Marquer la retenue au-dessus de la colonne suivante",
      "Vérifier : additionner dans l'autre sens pour confirmer"
    ]
  },
  {
    pattern: (q, ua, ca) => {
      // Confond multiplication et addition
      if (!q.includes('×') && !q.includes('*')) return false
      const numbers = q.match(/\d+/g)
      if (!numbers || numbers.length < 2) return false
      const sum = parseInt(numbers[0]) + parseInt(numbers[1])
      return parseInt(ua) === sum && parseInt(ua) !== parseInt(ca)
    },
    type: 'confusion',
    description: "Confond multiplication et addition",
    subject: 'maths',
    skills: ['multiplication', 'opérations'],
    recommendations: [
      "× = 'fois' = répétition. + = 'et' = ajout",
      "3 × 4 = 3 + 3 + 3 + 3 (4 fois le 3)",
      "Visualiser avec des objets : 3 groupes de 4"
    ]
  },
  {
    pattern: (q, ua, ca) => {
      // Tables de multiplication spécifiques (7, 8, 9)
      const match = q.match(/([789])\s*[×*]\s*(\d+)|(\d+)\s*[×*]\s*([789])/)
      if (!match) return false
      return ua !== ca
    },
    type: 'memory',
    description: "Difficultés avec les tables de 7, 8 ou 9",
    subject: 'maths',
    skills: ['tables de multiplication', 'calcul mental'],
    recommendations: [
      "Réviser les tables difficiles chaque jour (5 min)",
      "Utiliser les doigts pour la table de 9",
      "Créer des cartes mémoire avec les tables"
    ]
  },
  {
    pattern: (q, ua, ca) => {
      // Erreur de signe dans les soustractions
      if (!q.includes('-')) return false
      const numbers = q.match(/\d+/g)
      if (!numbers || numbers.length < 2) return false
      const reversed = parseInt(numbers[1]) - parseInt(numbers[0])
      return parseInt(ua) === reversed && parseInt(ua) !== parseInt(ca)
    },
    type: 'method',
    description: "Inverse l'ordre dans les soustractions",
    subject: 'maths',
    skills: ['soustraction', 'opérations'],
    recommendations: [
      "Dans a - b, on enlève b de a (pas l'inverse)",
      "Le plus grand nombre est toujours en premier",
      "Visualiser : j'ai 10 bonbons, j'en mange 3 = il en reste 7"
    ]
  },

  // === ERREURS D'ATTENTION ===
  {
    pattern: (q, ua, ca) => {
      // Réponse très proche mais avec faute de frappe
      if (ua.length !== ca.length) return false
      let diffs = 0
      for (let i = 0; i < ua.length; i++) {
        if (ua[i] !== ca[i]) diffs++
      }
      return diffs === 1
    },
    type: 'attention',
    description: "Fait des fautes de frappe/inattention",
    subject: 'général',
    skills: ['attention', 'relecture'],
    recommendations: [
      "Toujours relire sa réponse avant de valider",
      "Prendre son temps, ne pas se précipiter",
      "Vérifier lettre par lettre pour les mots difficiles"
    ]
  }
]

/**
 * Analyse une erreur et détecte les patterns
 */
export function analyzeError(
  question: string,
  userAnswer: string,
  correctAnswer: string,
  subject: string
): { matched: boolean; rule: typeof DETECTION_RULES[0] | null } {
  for (const rule of DETECTION_RULES) {
    // Filtrer par matière si spécifié
    if (rule.subject !== 'général' && rule.subject !== subject) continue

    let matches = false
    if (typeof rule.pattern === 'function') {
      matches = rule.pattern(question, userAnswer, correctAnswer)
    } else {
      matches = rule.pattern.test(`${question} ${userAnswer} ${correctAnswer}`)
    }

    if (matches) {
      return { matched: true, rule }
    }
  }

  return { matched: false, rule: null }
}

/**
 * Store pour les patterns d'erreurs
 */
interface ErrorPatternStore {
  patterns: ErrorPattern[]

  // Analyse et enregistrement
  recordError: (
    profileId: string,
    question: string,
    userAnswer: string,
    correctAnswer: string,
    subject: string,
    skills: string[]
  ) => ErrorPattern | null

  // Récupération
  getPatterns: (profileId: string) => ErrorPattern[]
  getActivePatterns: (profileId: string) => ErrorPattern[]  // Non résolus
  getTopPatterns: (profileId: string, count?: number) => ErrorPattern[]

  // Résolution
  markAsResolved: (patternId: string) => void

  // Statistiques
  getPatternStats: (profileId: string) => {
    total: number
    active: number
    resolved: number
    byType: Record<ErrorPatternType, number>
    topSubject: string
  }

  // Recommandations agrégées
  getRecommendations: (profileId: string) => string[]
}

export const useErrorPatterns = create<ErrorPatternStore>()(
  persist(
    (set, get) => ({
      patterns: [],

      recordError: (profileId, question, userAnswer, correctAnswer, subject, skills) => {
        const { matched, rule } = analyzeError(question, userAnswer, correctAnswer, subject)

        if (!matched || !rule) {
          console.log('[ErrorPatterns] No pattern matched for this error')
          return null
        }

        const existingPattern = get().patterns.find(
          p => p.profileId === profileId &&
               p.description === rule.description &&
               !p.isResolved
        )

        const now = new Date()
        const example = { question, userAnswer, correctAnswer, timestamp: now }

        if (existingPattern) {
          // Mettre à jour le pattern existant
          set((state) => ({
            patterns: state.patterns.map(p => {
              if (p.id === existingPattern.id) {
                const newExamples = [...p.examples, example].slice(-10) // Garder 10 derniers exemples
                return {
                  ...p,
                  occurrences: p.occurrences + 1,
                  lastOccurrence: now,
                  examples: newExamples,
                  confidence: Math.min(100, p.confidence + 10) // Augmente la confiance
                }
              }
              return p
            })
          }))

          console.log(`[ErrorPatterns] Updated pattern: ${rule.description} (${existingPattern.occurrences + 1} occurrences)`)
          return get().patterns.find(p => p.id === existingPattern.id) || null
        }

        // Créer un nouveau pattern
        const newPattern: ErrorPattern = {
          id: `pattern_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          profileId,
          type: rule.type,
          description: rule.description,
          subject: rule.subject,
          skills: [...new Set([...rule.skills, ...skills])],
          occurrences: 1,
          lastOccurrence: now,
          firstOccurrence: now,
          examples: [example],
          confidence: 30, // Confiance initiale faible
          recommendations: rule.recommendations,
          isResolved: false
        }

        set((state) => ({
          patterns: [...state.patterns, newPattern]
        }))

        console.log(`[ErrorPatterns] New pattern detected: ${rule.description}`)
        return newPattern
      },

      getPatterns: (profileId) => {
        return get().patterns.filter(p => p.profileId === profileId)
      },

      getActivePatterns: (profileId) => {
        return get().patterns.filter(p => p.profileId === profileId && !p.isResolved)
      },

      getTopPatterns: (profileId, count = 5) => {
        return get().getActivePatterns(profileId)
          .sort((a, b) => {
            // Trier par occurrences * confiance
            const scoreA = a.occurrences * a.confidence
            const scoreB = b.occurrences * b.confidence
            return scoreB - scoreA
          })
          .slice(0, count)
      },

      markAsResolved: (patternId) => {
        set((state) => ({
          patterns: state.patterns.map(p => {
            if (p.id === patternId) {
              return { ...p, isResolved: true, resolvedAt: new Date() }
            }
            return p
          })
        }))
        console.log(`[ErrorPatterns] Pattern marked as resolved: ${patternId}`)
      },

      getPatternStats: (profileId) => {
        const patterns = get().getPatterns(profileId)
        const active = patterns.filter(p => !p.isResolved)

        const byType: Record<ErrorPatternType, number> = {
          confusion: 0,
          calculation: 0,
          concept: 0,
          attention: 0,
          method: 0,
          memory: 0
        }

        const subjectCount: Record<string, number> = {}

        for (const p of active) {
          byType[p.type]++
          subjectCount[p.subject] = (subjectCount[p.subject] || 0) + p.occurrences
        }

        const topSubject = Object.entries(subjectCount)
          .sort((a, b) => b[1] - a[1])[0]?.[0] || ''

        return {
          total: patterns.length,
          active: active.length,
          resolved: patterns.length - active.length,
          byType,
          topSubject
        }
      },

      getRecommendations: (profileId) => {
        const topPatterns = get().getTopPatterns(profileId, 3)
        const recommendations: string[] = []

        for (const pattern of topPatterns) {
          recommendations.push(`📌 ${pattern.description}:`)
          recommendations.push(...pattern.recommendations.map(r => `   • ${r}`))
        }

        return recommendations
      }
    }),
    {
      name: 'captaine-error-patterns'
    }
  )
)

/**
 * Génère un résumé des patterns pour l'IA
 */
export function generatePatternSummaryForAI(profileId: string): string {
  const store = useErrorPatterns.getState()
  const topPatterns = store.getTopPatterns(profileId, 5)

  if (topPatterns.length === 0) {
    return "Aucun pattern d'erreur récurrent détecté pour le moment."
  }

  let summary = "⚠️ PATTERNS D'ERREURS DÉTECTÉS:\n"

  for (const pattern of topPatterns) {
    summary += `\n• ${pattern.description} (${pattern.occurrences} fois, confiance: ${pattern.confidence}%)\n`
    summary += `  Type: ${pattern.type}, Matière: ${pattern.subject}\n`
    if (pattern.examples.length > 0) {
      const lastExample = pattern.examples[pattern.examples.length - 1]
      summary += `  Dernier exemple: "${lastExample.question}" → répondu "${lastExample.userAnswer}" au lieu de "${lastExample.correctAnswer}"\n`
    }
  }

  return summary
}
