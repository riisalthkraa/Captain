/**
 * Bibliothèque de normalisation des réponses
 * Permet d'accepter différentes variantes d'une même réponse correcte
 */

/**
 * Normalise une chaîne de caractères pour la comparaison
 * - Convertit en minuscules
 * - Supprime les accents
 * - Supprime les espaces multiples
 * - Supprime la ponctuation
 */
function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD') // Décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[.,;:!?'"()]/g, '') // Supprime la ponctuation
    .replace(/\s+/g, ' ') // Remplace les espaces multiples par un seul
    .trim()
}

/**
 * Liste des pronoms personnels français
 */
const FRENCH_PRONOUNS = [
  'je', 'j', 'tu', 'il', 'elle', 'on',
  'nous', 'vous', 'ils', 'elles'
]

/**
 * Liste des articles/déterminants français
 */
const FRENCH_ARTICLES = [
  'le', 'la', 'les', 'l',
  'un', 'une', 'des',
  'du', 'de', 'd',
  'ce', 'cet', 'cette', 'ces',
  'mon', 'ma', 'mes',
  'ton', 'ta', 'tes',
  'son', 'sa', 'ses',
  'notre', 'nos',
  'votre', 'vos',
  'leur', 'leurs'
]

/**
 * Supprime les pronoms personnels en début de réponse
 */
function removeLeadingPronouns(str: string): string {
  const words = str.split(' ')
  if (words.length > 1 && FRENCH_PRONOUNS.includes(words[0])) {
    return words.slice(1).join(' ')
  }
  return str
}

/**
 * Supprime les articles/déterminants en début de réponse
 */
function removeLeadingArticles(str: string): string {
  const words = str.split(' ')
  if (words.length > 1 && FRENCH_ARTICLES.includes(words[0])) {
    return words.slice(1).join(' ')
  }
  return str
}

/**
 * Génère toutes les variantes acceptables d'une réponse
 */
function generateAnswerVariants(answer: string): string[] {
  const normalized = normalizeString(answer)
  const variants = new Set<string>()

  // Variante de base
  variants.add(normalized)

  // Variante sans pronom
  const withoutPronoun = removeLeadingPronouns(normalized)
  variants.add(withoutPronoun)

  // Variante sans article
  const withoutArticle = removeLeadingArticles(normalized)
  variants.add(withoutArticle)

  // Variante sans pronom ni article
  const withoutBoth = removeLeadingArticles(removeLeadingPronouns(normalized))
  variants.add(withoutBoth)

  // Cas spécial : "j'" → "je"
  const withJe = normalized.replace(/^j /, 'je ')
  if (withJe !== normalized) {
    variants.add(withJe)
    variants.add(removeLeadingPronouns(withJe))
  }

  // Cas spécial : "l'" → "le/la"
  const withLe = normalized.replace(/^l /, 'le ')
  const withLa = normalized.replace(/^l /, 'la ')
  if (withLe !== normalized) {
    variants.add(withLe)
    variants.add(removeLeadingArticles(withLe))
  }
  if (withLa !== normalized) {
    variants.add(withLa)
    variants.add(removeLeadingArticles(withLa))
  }

  // Cas spécial : "d'" → "de"
  const withDe = normalized.replace(/^d /, 'de ')
  if (withDe !== normalized) {
    variants.add(withDe)
    variants.add(removeLeadingArticles(withDe))
  }

  return Array.from(variants).filter(v => v.length > 0)
}

/**
 * Interface de résultat de validation
 */
export interface AnswerValidationResult {
  isCorrect: boolean
  normalizedUserAnswer: string
  normalizedCorrectAnswer: string
  matchedVariant?: string
}

/**
 * Valide une réponse utilisateur contre une ou plusieurs réponses correctes
 * Accepte toutes les variantes raisonnables (avec/sans pronoms, avec/sans articles, etc.)
 *
 * @param userAnswer - La réponse fournie par l'utilisateur
 * @param correctAnswers - La ou les réponses correctes acceptées
 * @returns Résultat de la validation avec détails
 *
 * @example
 * validateAnswer("je mangeais", "mangeais") // true
 * validateAnswer("Mangeais", "mangeais") // true
 * validateAnswer("le pharaon", "pharaon") // true
 * validateAnswer("Le Sphinx", ["sphinx", "le sphinx"]) // true
 */
export function validateAnswer(
  userAnswer: string,
  correctAnswers: string | string[]
): AnswerValidationResult {
  // Normaliser la réponse utilisateur
  const normalizedUserAnswer = normalizeString(userAnswer)

  // Convertir en tableau si nécessaire
  const correctAnswersArray = Array.isArray(correctAnswers)
    ? correctAnswers
    : [correctAnswers]

  // Pour chaque réponse correcte possible
  for (const correctAnswer of correctAnswersArray) {
    const normalizedCorrectAnswer = normalizeString(correctAnswer)

    // Générer toutes les variantes acceptables
    const userVariants = generateAnswerVariants(normalizedUserAnswer)
    const correctVariants = generateAnswerVariants(normalizedCorrectAnswer)

    // Vérifier si une variante utilisateur correspond à une variante correcte
    for (const userVariant of userVariants) {
      for (const correctVariant of correctVariants) {
        // Comparaison exacte
        if (userVariant === correctVariant) {
          return {
            isCorrect: true,
            normalizedUserAnswer,
            normalizedCorrectAnswer,
            matchedVariant: correctVariant
          }
        }

        // Comparaison flexible : la réponse correcte est contenue dans la réponse utilisateur
        // (utile pour "le pharaon" quand la réponse attendue est "pharaon")
        if (userVariant.includes(correctVariant) && correctVariant.length >= 3) {
          return {
            isCorrect: true,
            normalizedUserAnswer,
            normalizedCorrectAnswer,
            matchedVariant: correctVariant
          }
        }

        // Comparaison flexible inverse : la réponse utilisateur est contenue dans la réponse correcte
        // (moins courant mais peut être utile)
        if (correctVariant.includes(userVariant) && userVariant.length >= 3) {
          return {
            isCorrect: true,
            normalizedUserAnswer,
            normalizedCorrectAnswer,
            matchedVariant: userVariant
          }
        }
      }
    }
  }

  // Aucune correspondance trouvée
  return {
    isCorrect: false,
    normalizedUserAnswer,
    normalizedCorrectAnswer: normalizeString(correctAnswersArray[0])
  }
}

/**
 * Version simplifiée qui retourne juste un booléen
 */
export function isAnswerCorrect(
  userAnswer: string,
  correctAnswers: string | string[]
): boolean {
  return validateAnswer(userAnswer, correctAnswers).isCorrect
}

/**
 * Fonction pour tester la normalisation (utile pour le debug)
 */
export function debugNormalization(answer: string): {
  original: string
  normalized: string
  variants: string[]
} {
  return {
    original: answer,
    normalized: normalizeString(answer),
    variants: generateAnswerVariants(answer)
  }
}
