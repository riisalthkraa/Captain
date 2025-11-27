/**
 * Générateur d'exercices par IA
 * Utilise l'IA pour créer des exercices personnalisés selon le sujet/niveau/difficulté
 */

import { aiManager } from './aiProviders'
import type { Exercise, ExerciseType } from './databaseV2'

export interface ExerciseGenerationParams {
  subject: string          // "Mathématiques", "Français", etc.
  topic: string            // "Fractions", "Conjugaison", etc.
  level: string            // "CP", "CE1", "CM2", etc.
  difficulty: 1 | 2 | 3 | 4 | 5
  count: number            // Nombre d'exercices à générer
  type?: ExerciseType      // Type souhaité (optionnel)
}

export interface GeneratedExercise {
  question: string
  type: ExerciseType
  choices?: string[]
  correctAnswer: string | string[]
  explanation: string
  hints: string[]
  skillsTested: string[]
  difficulty: number
}

/**
 * Génère des exercices via l'IA
 */
export async function generateExercises(params: ExerciseGenerationParams): Promise<{
  success: boolean
  exercises?: GeneratedExercise[]
  error?: string
}> {
  try {
    console.log('[ExerciseGenerator] Generating exercises with params:', params)

    const prompt = buildGenerationPrompt(params)

    const response = await aiManager.chat([
      {
        role: 'system',
        content: EXERCISE_GENERATOR_SYSTEM_PROMPT
      },
      {
        role: 'user',
        content: prompt
      }
    ])

    if (!response.success || !response.content) {
      return {
        success: false,
        error: response.error || 'Erreur lors de la génération'
      }
    }

    // Parser la réponse JSON de l'IA
    const exercises = parseAIResponse(response.content)

    if (!exercises || exercises.length === 0) {
      return {
        success: false,
        error: 'Aucun exercice généré'
      }
    }

    console.log('[ExerciseGenerator] Successfully generated', exercises.length, 'exercises')

    return {
      success: true,
      exercises
    }
  } catch (error: any) {
    console.error('[ExerciseGenerator] Error:', error)
    return {
      success: false,
      error: error.message || 'Erreur inattendue'
    }
  }
}

/**
 * System prompt pour le générateur d'exercices
 */
const EXERCISE_GENERATOR_SYSTEM_PROMPT = `Tu es un expert en pédagogie et création d'exercices scolaires pour élèves de primaire et collège (CP à 3ème).

Ta mission : Générer des exercices de qualité, adaptés au niveau et progressifs.

RÈGLES ABSOLUES :
1. Génère EXACTEMENT le nombre d'exercices demandé
2. Retourne UNIQUEMENT un JSON valide (pas de texte avant/après)
3. Adapte la difficulté au niveau scolaire (CP = très simple, 3ème = complexe)
4. Utilise un langage clair et adapté à l'âge
5. Les QCM doivent avoir 4 choix dont 1 seul correct
6. Les indices doivent être progressifs (du plus vague au plus précis)
7. L'explication doit être pédagogique et complète

FORMAT DE RÉPONSE (JSON strict) :
{
  "exercises": [
    {
      "question": "Question claire et précise",
      "type": "QCM" | "OPEN" | "TRUE_FALSE" | "FILL_BLANK",
      "choices": ["Choix A", "Choix B", "Choix C", "Choix D"],  // Seulement pour QCM
      "correctAnswer": "Réponse exacte",
      "explanation": "Explication pédagogique détaillée",
      "hints": ["Indice 1 (vague)", "Indice 2 (précis)", "Indice 3 (très précis)"],
      "skillsTested": ["compétence1", "compétence2"],
      "difficulty": 1-5
    }
  ]
}

EXEMPLES DE BONNES QUESTIONS :

Mathématiques CM2 - Fractions :
{
  "question": "Calcule : 1/2 + 1/4 = ?",
  "type": "QCM",
  "choices": ["2/6", "3/4", "2/4", "1/6"],
  "correctAnswer": "3/4",
  "explanation": "Pour additionner des fractions, il faut qu'elles aient le même dénominateur. 1/2 = 2/4, donc 2/4 + 1/4 = 3/4.",
  "hints": [
    "Pense à mettre les fractions au même dénominateur",
    "1/2 peut s'écrire 2/4",
    "2/4 + 1/4 = (2+1)/4"
  ],
  "skillsTested": ["fractions", "addition", "dénominateurs communs"],
  "difficulty": 3
}

Français CE2 - Conjugaison :
{
  "question": "Conjugue le verbe 'manger' au présent : Je _____",
  "type": "FILL_BLANK",
  "correctAnswer": "mange",
  "explanation": "Le verbe 'manger' du 1er groupe se conjugue : je mange, tu manges, il mange. Attention au 'e' à la fin !",
  "hints": [
    "C'est un verbe du 1er groupe",
    "À la première personne du singulier, les verbes en -er prennent -e",
    "La réponse est 'mange'"
  ],
  "skillsTested": ["conjugaison", "présent", "1er groupe"],
  "difficulty": 2
}

IMPORTANT : Retourne SEULEMENT le JSON, sans texte autour.`

/**
 * Construit le prompt de génération
 */
function buildGenerationPrompt(params: ExerciseGenerationParams): string {
  let prompt = `Génère ${params.count} exercice(s) pour :

📚 Matière : ${params.subject}
📖 Sujet : ${params.topic}
🎓 Niveau scolaire : ${params.level}
⭐ Difficulté : ${params.difficulty}/5 (1=très facile, 5=très difficile)
`

  if (params.type) {
    prompt += `📝 Type d'exercice : ${params.type}\n`
  } else {
    prompt += `📝 Type d'exercice : Varie les types (QCM, OPEN, TRUE_FALSE, FILL_BLANK)\n`
  }

  prompt += `
CONSIGNES SPÉCIFIQUES :
- Adapte le vocabulaire au niveau ${params.level}
- Varie la difficulté autour de ${params.difficulty}/5 (±1 niveau acceptable)
- Crée des questions progressives si plusieurs exercices
- Utilise des contextes ludiques et concrets pour les plus jeunes
- Pour les niveaux avancés (4ème, 3ème), complexifie les énoncés

Retourne le JSON maintenant :`

  return prompt
}

/**
 * Parse la réponse de l'IA
 */
function parseAIResponse(content: string): GeneratedExercise[] | null {
  try {
    // Nettoyer la réponse (enlever markdown code blocks si présent)
    let cleaned = content.trim()

    // Si l'IA a mis le JSON dans un code block markdown
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/```json?\n?/g, '').replace(/```\n?$/g, '')
    }

    // Parser le JSON
    const parsed = JSON.parse(cleaned)

    // Vérifier la structure
    if (!parsed.exercises || !Array.isArray(parsed.exercises)) {
      console.error('[ExerciseGenerator] Invalid response structure:', parsed)
      return null
    }

    return parsed.exercises
  } catch (error) {
    console.error('[ExerciseGenerator] Failed to parse AI response:', error)
    console.error('[ExerciseGenerator] Raw content:', content)
    return null
  }
}

/**
 * Génère des exercices de démonstration (fallback si IA échoue)
 */
export function generateDemoExercises(params: ExerciseGenerationParams): GeneratedExercise[] {
  console.log('[ExerciseGenerator] Generating demo exercises (IA fallback)')

  const demos: GeneratedExercise[] = []

  // Exercices de démo selon le sujet
  if (params.subject === 'Mathématiques' && params.topic.toLowerCase().includes('fraction')) {
    demos.push({
      question: "Combien font 1/2 + 1/4 ?",
      type: "QCM",
      choices: ["2/6", "3/4", "2/4", "1/6"],
      correctAnswer: "3/4",
      explanation: "Pour additionner des fractions, il faut le même dénominateur. 1/2 = 2/4, donc 2/4 + 1/4 = 3/4.",
      hints: [
        "Mets les fractions au même dénominateur",
        "1/2 = 2/4",
        "2/4 + 1/4 = 3/4"
      ],
      skillsTested: ["fractions", "addition"],
      difficulty: params.difficulty
    })

    demos.push({
      question: "Quelle fraction représente la moitié d'une pizza ?",
      type: "QCM",
      choices: ["1/4", "1/2", "2/4", "1/3"],
      correctAnswer: "1/2",
      explanation: "La moitié se note 1/2 (1 part sur 2 parts égales). Note que 2/4 est égal à 1/2 !",
      hints: [
        "La moitié = diviser en 2",
        "1 part sur 2",
        "C'est 1/2"
      ],
      skillsTested: ["fractions", "vocabulaire"],
      difficulty: params.difficulty - 1
    })
  } else if (params.subject === 'Français' && params.topic.toLowerCase().includes('conjugaison')) {
    demos.push({
      question: "Conjugue 'manger' au présent : Je _____",
      type: "FILL_BLANK",
      correctAnswer: "mange",
      explanation: "Les verbes en -er du 1er groupe prennent -e à la 1ère personne : je mange.",
      hints: [
        "Verbe du 1er groupe",
        "Terminaison en -e",
        "mange"
      ],
      skillsTested: ["conjugaison", "présent"],
      difficulty: params.difficulty
    })

    demos.push({
      question: "Le verbe 'finir' est du 2ème groupe. Vrai ou faux ?",
      type: "TRUE_FALSE",
      correctAnswer: "Vrai",
      explanation: "Oui ! 'Finir' est bien un verbe du 2ème groupe (comme grandir, choisir...).",
      hints: [
        "Regarde la terminaison -ir",
        "Les verbes en -ir du 2ème groupe font -issons au présent",
        "C'est vrai"
      ],
      skillsTested: ["conjugaison", "groupes de verbes"],
      difficulty: params.difficulty
    })
  } else {
    // Exercice générique
    demos.push({
      question: `Question de ${params.subject} sur ${params.topic}`,
      type: "OPEN",
      correctAnswer: "Réponse exemple",
      explanation: "Explication de la réponse.",
      hints: ["Indice 1", "Indice 2", "Indice 3"],
      skillsTested: [params.topic.toLowerCase()],
      difficulty: params.difficulty
    })
  }

  return demos.slice(0, params.count)
}

/**
 * Sauvegarde les exercices générés dans la base
 */
export async function saveGeneratedExercises(
  exercises: GeneratedExercise[],
  teacherId: string
): Promise<Exercise[]> {
  const { dbV2 } = await import('./databaseV2')

  const savedExercises: Exercise[] = []

  for (const ex of exercises) {
    const exercise: Exercise = {
      id: `ex_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdBy: 'ai',
      teacherId,
      subject: ex.skillsTested[0] || 'Général',
      topic: ex.skillsTested.join(', '),
      question: ex.question,
      type: ex.type,
      choices: ex.choices,
      correctAnswer: ex.correctAnswer,
      hints: ex.hints,
      explanation: ex.explanation,
      difficulty: ex.difficulty as 1 | 2 | 3 | 4 | 5,
      skillsTested: ex.skillsTested,
      xpReward: ex.difficulty * 20,
      totalAttempts: 0,
      successRate: 0,
      createdAt: new Date()
    }

    await dbV2.exercises.add(exercise)
    savedExercises.push(exercise)
  }

  console.log('[ExerciseGenerator] Saved', savedExercises.length, 'exercises to DB')
  return savedExercises
}
