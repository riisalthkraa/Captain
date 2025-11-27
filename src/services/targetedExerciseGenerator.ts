/**
 * Targeted Exercise Generator - Génération d'exercices ciblés sur les faiblesses
 *
 * Génère des exercices spécifiquement conçus pour :
 * - Renforcer les compétences faibles détectées
 * - Corriger les patterns d'erreurs récurrents
 * - Optimiser l'apprentissage avec le SRS
 *
 * @module TargetedExerciseGenerator
 */

import { useErrorPatterns, ErrorPattern, ErrorPatternType } from './errorPatternDetector'
import { useSRS, ReviewCard } from './spacedRepetition'
import { useAdaptiveLearning } from './adaptiveLearning'

/**
 * Types d'exercices générables
 */
export type ExerciseType =
  | 'fill_blank'      // Texte à trous
  | 'multiple_choice' // QCM
  | 'calculation'     // Calcul
  | 'matching'        // Association
  | 'ordering'        // Remise en ordre
  | 'true_false'      // Vrai/Faux
  | 'correction'      // Trouver l'erreur

/**
 * Exercice généré
 */
export interface GeneratedExercise {
  id: string
  type: ExerciseType
  subject: string
  skill: string
  difficulty: number  // 1-5

  // Contenu
  question: string
  options?: string[]          // Pour QCM
  correctAnswer: string
  hint?: string
  explanation?: string

  // Métadonnées
  targetedWeakness?: string   // Pattern d'erreur ciblé
  targetedSkill?: string      // Compétence SRS ciblée
  generatedFor: 'weakness' | 'srs' | 'reinforcement' | 'challenge'

  // Timing suggéré
  suggestedTimeSeconds: number
}

/**
 * Templates d'exercices par pattern d'erreur
 */
const EXERCISE_TEMPLATES: Record<string, {
  exercises: Omit<GeneratedExercise, 'id' | 'generatedFor' | 'targetedWeakness' | 'targetedSkill'>[]
}> = {
  // === HOMOPHONES FRANÇAIS ===
  "Confond 'a' (verbe avoir) et 'à' (préposition)": {
    exercises: [
      {
        type: 'fill_blank',
        subject: 'français',
        skill: 'homophones a/à',
        difficulty: 2,
        question: "Complète : Il ___ mangé une pomme ___ la cantine.",
        correctAnswer: "a, à",
        hint: "Remplace par 'avait'. Si ça marche, c'est 'a'.",
        explanation: "'a' est le verbe avoir (il avait mangé). 'à' est une préposition (à la cantine).",
        suggestedTimeSeconds: 30
      },
      {
        type: 'multiple_choice',
        subject: 'français',
        skill: 'homophones a/à',
        difficulty: 2,
        question: "Quelle phrase est correcte ?",
        options: [
          "Marie à un chien.",
          "Marie a un chien.",
          "Marie as un chien."
        ],
        correctAnswer: "Marie a un chien.",
        explanation: "'a' est le verbe avoir conjugué à la 3e personne.",
        suggestedTimeSeconds: 20
      },
      {
        type: 'correction',
        subject: 'français',
        skill: 'homophones a/à',
        difficulty: 3,
        question: "Trouve et corrige l'erreur : \"Papa à acheté un gâteau a la boulangerie.\"",
        correctAnswer: "Papa a acheté un gâteau à la boulangerie.",
        hint: "Il y a deux erreurs à corriger !",
        explanation: "Papa 'a' (verbe avoir) acheté... 'à' (préposition) la boulangerie.",
        suggestedTimeSeconds: 45
      }
    ]
  },

  "Confond 'et' (conjonction) et 'est' (verbe être)": {
    exercises: [
      {
        type: 'fill_blank',
        subject: 'français',
        skill: 'homophones et/est',
        difficulty: 2,
        question: "Complète : Le chat ___ noir ___ blanc.",
        correctAnswer: "est, et",
        hint: "Remplace par 'était'. Si ça marche, c'est 'est'.",
        explanation: "Le chat 'est' (verbe être) noir 'et' (addition) blanc.",
        suggestedTimeSeconds: 30
      },
      {
        type: 'true_false',
        subject: 'français',
        skill: 'homophones et/est',
        difficulty: 1,
        question: "Vrai ou Faux : Dans 'Pierre et Paul', 'et' peut être remplacé par 'était'.",
        correctAnswer: "Faux",
        explanation: "'et' relie deux noms, on ne peut pas dire 'Pierre était Paul'.",
        suggestedTimeSeconds: 15
      }
    ]
  },

  "Confond ces/ses ou c'est/s'est": {
    exercises: [
      {
        type: 'fill_blank',
        subject: 'français',
        skill: 'homophones ces/ses/c\'est/s\'est',
        difficulty: 3,
        question: "Complète : ___ chaussures sont à lui. Ce sont ___ affaires.",
        correctAnswer: "Ces, ses",
        hint: "'Ses' = les siennes. 'Ces' = celles-là.",
        explanation: "'Ces' est démonstratif (ces chaussures-là). 'Ses' est possessif (ses affaires à lui).",
        suggestedTimeSeconds: 40
      },
      {
        type: 'multiple_choice',
        subject: 'français',
        skill: 'homophones ces/ses/c\'est/s\'est',
        difficulty: 3,
        question: "Il ___ levé tôt ce matin.",
        options: ["c'est", "s'est", "ces", "ses"],
        correctAnswer: "s'est",
        explanation: "'s'est' vient du verbe pronominal 'se lever' : il s'est levé.",
        suggestedTimeSeconds: 25
      }
    ]
  },

  "Confond 'leur' et 'leurs' (accord du pluriel)": {
    exercises: [
      {
        type: 'fill_blank',
        subject: 'français',
        skill: 'homophones leur/leurs',
        difficulty: 2,
        question: "Je ___ ai donné ___ cahiers.",
        correctAnswer: "leur, leurs",
        hint: "Devant un verbe = 'leur'. Devant un nom pluriel = 'leurs'.",
        explanation: "'leur' (devant verbe = à eux). 'leurs' (devant nom pluriel = leurs cahiers).",
        suggestedTimeSeconds: 30
      }
    ]
  },

  // === CALCUL ===
  "Oublie les retenues dans les additions": {
    exercises: [
      {
        type: 'calculation',
        subject: 'maths',
        skill: 'addition avec retenue',
        difficulty: 2,
        question: "Calcule en posant bien l'opération : 47 + 28 = ?",
        correctAnswer: "75",
        hint: "7 + 8 = 15. On pose 5 et on retient 1.",
        explanation: "47 + 28 : unités 7+8=15 (pose 5, retiens 1). Dizaines 4+2+1=7. Résultat : 75.",
        suggestedTimeSeconds: 45
      },
      {
        type: 'calculation',
        subject: 'maths',
        skill: 'addition avec retenue',
        difficulty: 3,
        question: "156 + 87 = ?",
        correctAnswer: "243",
        hint: "N'oublie pas les retenues à chaque étape !",
        explanation: "6+7=13 (pose 3, retiens 1). 5+8+1=14 (pose 4, retiens 1). 1+1=2. Total : 243.",
        suggestedTimeSeconds: 60
      }
    ]
  },

  "Confond multiplication et addition": {
    exercises: [
      {
        type: 'matching',
        subject: 'maths',
        skill: 'distinction multiplication/addition',
        difficulty: 2,
        question: "Associe chaque opération à son résultat : 3+4=? et 3×4=?",
        correctAnswer: "3+4=7 et 3×4=12",
        hint: "+ c'est ajouter, × c'est répéter.",
        explanation: "3+4 = 7 (addition). 3×4 = 3+3+3+3 = 12 (multiplication = addition répétée).",
        suggestedTimeSeconds: 30
      },
      {
        type: 'multiple_choice',
        subject: 'maths',
        skill: 'distinction multiplication/addition',
        difficulty: 2,
        question: "5 × 3 signifie :",
        options: ["5 + 3", "5 + 5 + 5", "3 + 3 + 3 + 3 + 3", "5 - 3"],
        correctAnswer: "5 + 5 + 5",
        explanation: "5 × 3 = 5 fois 3 = 5 répété 3 fois = 5 + 5 + 5 = 15.",
        suggestedTimeSeconds: 25
      }
    ]
  },

  "Difficultés avec les tables de 7, 8 ou 9": {
    exercises: [
      {
        type: 'calculation',
        subject: 'maths',
        skill: 'tables de multiplication',
        difficulty: 2,
        question: "7 × 8 = ?",
        correctAnswer: "56",
        hint: "Pense à 7×8 = 56 (5-6-7-8 dans l'ordre !).",
        explanation: "Astuce : 56 = 7 × 8 (les chiffres 5, 6, 7, 8 se suivent).",
        suggestedTimeSeconds: 15
      },
      {
        type: 'calculation',
        subject: 'maths',
        skill: 'tables de multiplication',
        difficulty: 2,
        question: "9 × 6 = ?",
        correctAnswer: "54",
        hint: "Pour × 9 : le résultat a des chiffres qui font 9 (5+4=9).",
        explanation: "9 × 6 = 54. Vérification : 5 + 4 = 9 (astuce de la table de 9).",
        suggestedTimeSeconds: 15
      },
      {
        type: 'calculation',
        subject: 'maths',
        skill: 'tables de multiplication',
        difficulty: 3,
        question: "8 × 7 = ?",
        correctAnswer: "56",
        hint: "C'est la même chose que 7 × 8.",
        explanation: "8 × 7 = 7 × 8 = 56. La multiplication est commutative.",
        suggestedTimeSeconds: 15
      }
    ]
  },

  "Inverse l'ordre dans les soustractions": {
    exercises: [
      {
        type: 'calculation',
        subject: 'maths',
        skill: 'soustraction',
        difficulty: 2,
        question: "15 - 8 = ? (le grand nombre moins le petit)",
        correctAnswer: "7",
        hint: "On enlève 8 de 15, pas l'inverse !",
        explanation: "15 - 8 : j'ai 15, j'enlève 8, il reste 7.",
        suggestedTimeSeconds: 20
      },
      {
        type: 'true_false',
        subject: 'maths',
        skill: 'soustraction',
        difficulty: 2,
        question: "Vrai ou Faux : 12 - 5 = 5 - 12",
        correctAnswer: "Faux",
        explanation: "12 - 5 = 7, mais 5 - 12 = -7. L'ordre compte en soustraction !",
        suggestedTimeSeconds: 15
      }
    ]
  },

  // === ATTENTION ===
  "Fait des fautes de frappe/inattention": {
    exercises: [
      {
        type: 'correction',
        subject: 'général',
        skill: 'attention',
        difficulty: 1,
        question: "Trouve l'erreur : \"Le chein joue dans le jardin.\"",
        correctAnswer: "chien",
        hint: "Relis chaque mot lentement.",
        explanation: "L'erreur est 'chein' au lieu de 'chien'.",
        suggestedTimeSeconds: 20
      },
      {
        type: 'correction',
        subject: 'général',
        skill: 'attention',
        difficulty: 2,
        question: "Quel nombre est mal écrit : 12, 15, 81, 24, 36 ?",
        correctAnswer: "Aucun, tous sont corrects",
        hint: "Vérifie bien chaque chiffre.",
        explanation: "Piège ! Tous les nombres sont corrects. Il faut toujours vérifier avant de répondre.",
        suggestedTimeSeconds: 30
      }
    ]
  }
}

/**
 * Génère un ID unique pour un exercice
 */
function generateExerciseId(): string {
  return `ex_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Sélectionne des exercices ciblés sur les patterns d'erreurs
 */
export function generateWeaknessExercises(
  profileId: string,
  count: number = 5
): GeneratedExercise[] {
  const errorPatterns = useErrorPatterns.getState()
  const activePatterns = errorPatterns.getTopPatterns(profileId, count)

  const exercises: GeneratedExercise[] = []

  for (const pattern of activePatterns) {
    const template = EXERCISE_TEMPLATES[pattern.description]
    if (!template) continue

    // Sélectionner un exercice aléatoire du template
    const randomIndex = Math.floor(Math.random() * template.exercises.length)
    const exerciseTemplate = template.exercises[randomIndex]

    exercises.push({
      ...exerciseTemplate,
      id: generateExerciseId(),
      targetedWeakness: pattern.description,
      generatedFor: 'weakness'
    })
  }

  return exercises
}

/**
 * Génère des exercices basés sur le SRS (compétences à réviser)
 */
export function generateSRSExercises(
  profileId: string,
  count: number = 5
): GeneratedExercise[] {
  const srs = useSRS.getState()
  const dueCards = srs.getDueCards(profileId, count)

  const exercises: GeneratedExercise[] = []

  for (const card of dueCards) {
    // Générer un exercice basé sur la compétence de la carte
    const exercise = generateExerciseForSkill(card.skill, card.subject, card.easeFactor)
    if (exercise) {
      exercises.push({
        ...exercise,
        id: generateExerciseId(),
        targetedSkill: card.skill,
        generatedFor: 'srs'
      })
    }
  }

  return exercises
}

/**
 * Génère un exercice pour une compétence spécifique
 */
function generateExerciseForSkill(
  skill: string,
  subject: string,
  easeFactor: number
): Omit<GeneratedExercise, 'id' | 'generatedFor' | 'targetedWeakness' | 'targetedSkill'> | null {
  // Difficulté basée sur le easeFactor (plus bas = plus difficile pour l'élève)
  const difficulty = easeFactor < 1.8 ? 2 : easeFactor < 2.2 ? 3 : 4

  // Exercices génériques par matière
  if (subject === 'maths') {
    if (skill.includes('addition')) {
      const a = Math.floor(Math.random() * 50) + 10
      const b = Math.floor(Math.random() * 50) + 10
      return {
        type: 'calculation',
        subject: 'maths',
        skill: skill,
        difficulty,
        question: `${a} + ${b} = ?`,
        correctAnswer: String(a + b),
        suggestedTimeSeconds: 30
      }
    }
    if (skill.includes('multiplication') || skill.includes('table')) {
      const a = Math.floor(Math.random() * 9) + 2
      const b = Math.floor(Math.random() * 9) + 2
      return {
        type: 'calculation',
        subject: 'maths',
        skill: skill,
        difficulty,
        question: `${a} × ${b} = ?`,
        correctAnswer: String(a * b),
        suggestedTimeSeconds: 20
      }
    }
    if (skill.includes('soustraction')) {
      const a = Math.floor(Math.random() * 50) + 20
      const b = Math.floor(Math.random() * (a - 10)) + 5
      return {
        type: 'calculation',
        subject: 'maths',
        skill: skill,
        difficulty,
        question: `${a} - ${b} = ?`,
        correctAnswer: String(a - b),
        suggestedTimeSeconds: 30
      }
    }
  }

  // Retourner null si pas de template trouvé
  return null
}

/**
 * Génère une session d'exercices adaptée à l'état de l'élève
 */
export function generateAdaptiveSession(
  profileId: string,
  sessionLength: number = 10
): {
  exercises: GeneratedExercise[]
  sessionPlan: {
    warmup: number      // Exercices faciles pour commencer
    core: number        // Exercices ciblés
    challenge: number   // Exercices plus difficiles
    cooldown: number    // Exercices de révision faciles
  }
  estimatedMinutes: number
} {
  const adaptiveLearning = useAdaptiveLearning.getState()
  const session = adaptiveLearning.getSession(profileId)

  // Adapter la répartition selon l'état émotionnel
  let sessionPlan = {
    warmup: 2,
    core: 5,
    challenge: 2,
    cooldown: 1
  }

  if (session?.emotionalState === 'frustrated' || session?.emotionalState === 'struggling') {
    // Plus d'exercices faciles si l'élève est en difficulté
    sessionPlan = { warmup: 3, core: 4, challenge: 1, cooldown: 2 }
  } else if (session?.emotionalState === 'confident' || session?.emotionalState === 'engaged') {
    // Plus de défis si l'élève est confiant
    sessionPlan = { warmup: 1, core: 4, challenge: 4, cooldown: 1 }
  } else if (session?.emotionalState === 'fatigued' || session?.emotionalState === 'bored') {
    // Session plus courte si fatigue détectée
    sessionPlan = { warmup: 1, core: 3, challenge: 1, cooldown: 1 }
  }

  // Ajuster au nombre total demandé
  const totalPlanned = sessionPlan.warmup + sessionPlan.core + sessionPlan.challenge + sessionPlan.cooldown
  const ratio = sessionLength / totalPlanned
  sessionPlan = {
    warmup: Math.round(sessionPlan.warmup * ratio),
    core: Math.round(sessionPlan.core * ratio),
    challenge: Math.round(sessionPlan.challenge * ratio),
    cooldown: Math.round(sessionPlan.cooldown * ratio)
  }

  // Générer les exercices
  const weaknessExercises = generateWeaknessExercises(profileId, sessionPlan.core)
  const srsExercises = generateSRSExercises(profileId, sessionPlan.warmup + sessionPlan.cooldown)

  // Combiner et mélanger
  const exercises: GeneratedExercise[] = [
    ...srsExercises.slice(0, sessionPlan.warmup),
    ...weaknessExercises,
    ...srsExercises.slice(sessionPlan.warmup)
  ]

  // Estimer le temps
  const estimatedSeconds = exercises.reduce((sum, ex) => sum + ex.suggestedTimeSeconds, 0)
  const estimatedMinutes = Math.ceil(estimatedSeconds / 60)

  return {
    exercises,
    sessionPlan,
    estimatedMinutes
  }
}

/**
 * Génère un quiz rapide sur les faiblesses principales
 */
export function generateQuickQuiz(
  profileId: string,
  questionCount: number = 5
): {
  exercises: GeneratedExercise[]
  focusAreas: string[]
  estimatedMinutes: number
} {
  const exercises = generateWeaknessExercises(profileId, questionCount)
  const focusAreas = [...new Set(exercises.map(e => e.targetedWeakness).filter(Boolean))] as string[]

  const estimatedSeconds = exercises.reduce((sum, ex) => sum + ex.suggestedTimeSeconds, 0)

  return {
    exercises,
    focusAreas,
    estimatedMinutes: Math.ceil(estimatedSeconds / 60)
  }
}

/**
 * Génère un défi basé sur les compétences maîtrisées (pour maintenir la confiance)
 */
export function generateConfidenceBooster(
  profileId: string,
  count: number = 3
): GeneratedExercise[] {
  const srs = useSRS.getState()
  const stats = srs.getStats(profileId)

  // Utiliser les compétences avec bon easeFactor
  const masteredCards = srs.cards.filter(
    c => c.profileId === profileId && c.easeFactor > 2.3
  ).slice(0, count)

  const exercises: GeneratedExercise[] = []

  for (const card of masteredCards) {
    const exercise = generateExerciseForSkill(card.skill, card.subject, card.easeFactor)
    if (exercise) {
      exercises.push({
        ...exercise,
        id: generateExerciseId(),
        difficulty: Math.max(1, exercise.difficulty - 1), // Plus facile pour booster la confiance
        targetedSkill: card.skill,
        generatedFor: 'reinforcement'
      })
    }
  }

  return exercises
}

/**
 * Génère un rapport sur les exercices recommandés
 */
export function getExerciseRecommendations(profileId: string): {
  immediate: string[]       // À faire maintenant
  daily: string[]          // À faire aujourd'hui
  weekly: string[]         // À planifier cette semaine
  strengths: string[]      // Points forts (pour booster la confiance)
} {
  const errorPatterns = useErrorPatterns.getState()
  const srs = useSRS.getState()

  const topPatterns = errorPatterns.getTopPatterns(profileId, 5)
  const dueCards = srs.getDueCards(profileId, 10)
  const upcomingCards = srs.getUpcomingCards(profileId, 7)
  const stats = srs.getStats(profileId)

  // Exercices immédiats : patterns avec haute confiance + cartes très en retard
  const immediate = [
    ...topPatterns
      .filter(p => p.confidence > 60)
      .map(p => `Travailler : ${p.description}`),
    ...dueCards
      .slice(0, 3)
      .map(c => `Réviser : ${c.skill}`)
  ].slice(0, 5)

  // Exercices du jour
  const daily = [
    ...dueCards.map(c => c.skill),
    ...topPatterns.map(p => p.skills[0])
  ].filter((v, i, a) => a.indexOf(v) === i).slice(0, 8)

  // Exercices de la semaine
  const weekly = upcomingCards.map(c => `${c.skill} (dans ${
    Math.ceil((new Date(c.nextReviewDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  } jours)`)

  // Points forts
  const strengths = srs.cards
    .filter(c => c.profileId === profileId && c.easeFactor > 2.5 && c.interval > 14)
    .map(c => c.skill)
    .slice(0, 5)

  return { immediate, daily, weekly, strengths }
}

/**
 * Export pour l'intégration avec l'IA
 */
export function generateExercisePromptContext(profileId: string): string {
  const recommendations = getExerciseRecommendations(profileId)

  let context = "\n📚 EXERCICES RECOMMANDÉS POUR CET ÉLÈVE:\n"

  if (recommendations.immediate.length > 0) {
    context += "\n🔴 Prioritaires:\n"
    context += recommendations.immediate.map(r => `  • ${r}`).join('\n')
  }

  if (recommendations.daily.length > 0) {
    context += "\n\n📅 À travailler aujourd'hui:\n"
    context += recommendations.daily.map(s => `  • ${s}`).join('\n')
  }

  if (recommendations.strengths.length > 0) {
    context += "\n\n⭐ Points forts (pour encourager):\n"
    context += recommendations.strengths.map(s => `  • ${s}`).join('\n')
  }

  return context
}
