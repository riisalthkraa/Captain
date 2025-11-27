/**
 * Service de traitement de documents multi-pages
 * Gère le parsing, la structuration et la sélection d'exercices
 */

import pdfParse from 'pdf-parse'
import { Buffer } from 'buffer'

/**
 * Représente une page d'un document
 */
export interface DocumentPage {
  pageNumber: number
  content: string
  wordCount: number
  hasImages: boolean
  estimatedExercises: number
}

/**
 * Un exercice détecté dans un document
 */
export interface DetectedExercise {
  id: string
  pageNumber: number
  content: string
  estimatedDifficulty: 1 | 2 | 3 | 4 | 5
  subject?: 'maths' | 'français' | 'sciences' | 'histoire' | 'géographie' | 'anglais' | 'autre'
  keywords: string[]
}

/**
 * Document analysé et structuré
 */
export interface AnalyzedDocument {
  id: string
  fileName: string
  totalPages: number
  pages: DocumentPage[]
  detectedExercises: DetectedExercise[]
  uploadedAt: Date
  fileSize: number
}

/**
 * Résultat du parsing
 */
export interface DocumentParseResult {
  success: boolean
  document?: AnalyzedDocument
  error?: string
}

/**
 * Parse un PDF et le structure page par page
 */
export async function parsePDFDocument(file: File): Promise<DocumentParseResult> {
  try {
    console.log('[DocumentProcessor] Starting PDF analysis:', file.name, file.size, 'bytes')

    const arrayBuffer = await file.arrayBuffer()

    if (arrayBuffer.byteLength === 0) {
      return {
        success: false,
        error: 'Le fichier PDF est vide'
      }
    }

    if (arrayBuffer.byteLength > 50 * 1024 * 1024) {
      return {
        success: false,
        error: 'Le fichier est trop volumineux (max 50 MB)'
      }
    }

    const buffer = Buffer.from(arrayBuffer)
    const data = await pdfParse(buffer, {
      // Options pour extraire page par page si possible
      max: 0 // Pas de limite de pages
    })

    console.log('[DocumentProcessor] PDF parsed successfully')
    console.log('[DocumentProcessor] Pages:', data.numpages)
    console.log('[DocumentProcessor] Text length:', data.text?.length || 0)

    if (!data.text || data.text.trim().length === 0) {
      return {
        success: false,
        error: 'Le PDF ne contient pas de texte extractible. Il est peut-être scanné.'
      }
    }

    // Diviser le texte en pages (approximatif car pdf-parse ne donne pas toujours les pages séparées)
    const pages = await extractPages(data.text, data.numpages)

    // Détecter les exercices potentiels
    const detectedExercises = detectExercisesInPages(pages)

    const document: AnalyzedDocument = {
      id: `doc_${Date.now()}`,
      fileName: file.name,
      totalPages: data.numpages,
      pages,
      detectedExercises,
      uploadedAt: new Date(),
      fileSize: file.size
    }

    console.log('[DocumentProcessor] Document analyzed:', {
      pages: document.totalPages,
      exercises: document.detectedExercises.length
    })

    return {
      success: true,
      document
    }

  } catch (error: any) {
    console.error('[DocumentProcessor] Error parsing PDF:', error)
    return {
      success: false,
      error: `Erreur lors de l'analyse du PDF: ${error.message || 'Erreur inconnue'}`
    }
  }
}

/**
 * Extrait et structure les pages du document
 */
async function extractPages(fullText: string, numPages: number): Promise<DocumentPage[]> {
  const pages: DocumentPage[] = []

  // Stratégie : diviser le texte en chunks approximativement égaux
  // Note: pdf-parse ne donne pas toujours les pages séparées, on fait une approximation
  const avgCharsPerPage = Math.ceil(fullText.length / numPages)

  // Chercher des séparateurs naturels (Form Feed, ou patterns de page)
  const pageBreakPattern = /\f|\n\s*Page\s+\d+\s*\n|\n\s*-\s*\d+\s*-\s*\n/gi
  let segments = fullText.split(pageBreakPattern)

  // Si on n'a pas trouvé de séparateurs naturels, diviser de manière uniforme
  if (segments.length < numPages) {
    segments = []
    for (let i = 0; i < numPages; i++) {
      const start = i * avgCharsPerPage
      const end = Math.min(start + avgCharsPerPage, fullText.length)
      segments.push(fullText.substring(start, end))
    }
  }

  // Créer les objets DocumentPage
  for (let i = 0; i < Math.min(segments.length, numPages); i++) {
    const content = segments[i].trim()

    pages.push({
      pageNumber: i + 1,
      content,
      wordCount: content.split(/\s+/).length,
      hasImages: false, // TODO: Détecter les images avec un parser plus avancé
      estimatedExercises: estimateExerciseCount(content)
    })
  }

  return pages
}

/**
 * Estime le nombre d'exercices dans un texte
 */
function estimateExerciseCount(text: string): number {
  // Patterns qui indiquent des exercices
  const exercisePatterns = [
    /exercice\s+\d+/gi,
    /question\s+\d+/gi,
    /\d+\)\s+/g, // Numérotation type "1) "
    /\n\s*\d+\.\s+/g, // Numérotation type "1. "
    /problème\s+\d+/gi,
    /activité\s+\d+/gi
  ]

  let count = 0
  for (const pattern of exercisePatterns) {
    const matches = text.match(pattern)
    if (matches) {
      count = Math.max(count, matches.length)
    }
  }

  return count
}

/**
 * Détecte les exercices dans les pages
 */
function detectExercisesInPages(pages: DocumentPage[]): DetectedExercise[] {
  const exercises: DetectedExercise[] = []

  for (const page of pages) {
    const pageExercises = detectExercisesInText(page.content, page.pageNumber)
    exercises.push(...pageExercises)
  }

  return exercises
}

/**
 * Détecte les exercices dans un texte donné
 */
function detectExercisesInText(text: string, pageNumber: number): DetectedExercise[] {
  const exercises: DetectedExercise[] = []

  // Patterns pour détecter le début d'exercices
  const exerciseStartPatterns = [
    { regex: /(?:exercice|ex\.?)\s*(\d+)\s*[:;]?\s*(.*?)(?=(?:exercice|ex\.?)\s*\d+|$)/gis, type: 'exercice' },
    { regex: /(?:question|q\.?)\s*(\d+)\s*[:;]?\s*(.*?)(?=(?:question|q\.?)\s*\d+|$)/gis, type: 'question' },
    { regex: /(?:problème|pb\.?)\s*(\d+)\s*[:;]?\s*(.*?)(?=(?:problème|pb\.?)\s*\d+|$)/gis, type: 'problème' },
    { regex: /(?:activité|act\.?)\s*(\d+)\s*[:;]?\s*(.*?)(?=(?:activité|act\.?)\s*\d+|$)/gis, type: 'activité' }
  ]

  for (const { regex, type } of exerciseStartPatterns) {
    let match
    while ((match = regex.exec(text)) !== null) {
      const exerciseNum = match[1]
      const content = match[2] ? match[2].trim().substring(0, 500) : '' // Limiter à 500 chars

      if (content.length > 10) { // Ignorer les exercices trop courts
        const keywords = extractKeywords(content)
        const subject = detectSubject(content, keywords)
        const difficulty = estimateDifficulty(content)

        exercises.push({
          id: `ex_${pageNumber}_${exerciseNum}_${Date.now()}`,
          pageNumber,
          content,
          estimatedDifficulty: difficulty,
          subject,
          keywords
        })
      }
    }
  }

  return exercises
}

/**
 * Extrait les mots-clés d'un texte
 */
function extractKeywords(text: string): string[] {
  // Mots-clés éducatifs courants
  const educationalKeywords = [
    'addition', 'soustraction', 'multiplication', 'division', 'fraction',
    'verbe', 'nom', 'adjectif', 'conjugaison', 'grammaire', 'orthographe',
    'histoire', 'géographie', 'sciences', 'physique', 'chimie', 'biologie',
    'équation', 'problème', 'calcul', 'mesure', 'géométrie',
    'phrase', 'texte', 'lecture', 'vocabulaire', 'synonyme', 'antonyme'
  ]

  const found: string[] = []
  const lowerText = text.toLowerCase()

  for (const keyword of educationalKeywords) {
    if (lowerText.includes(keyword)) {
      found.push(keyword)
    }
  }

  return found
}

/**
 * Détecte la matière d'un exercice
 */
function detectSubject(
  text: string,
  keywords: string[]
): 'maths' | 'français' | 'sciences' | 'histoire' | 'géographie' | 'anglais' | 'autre' {
  const lowerText = text.toLowerCase()

  // Maths
  if (keywords.some(k => ['addition', 'soustraction', 'multiplication', 'division', 'fraction', 'équation', 'calcul', 'mesure', 'géométrie'].includes(k))) {
    return 'maths'
  }

  // Français
  if (keywords.some(k => ['verbe', 'nom', 'adjectif', 'conjugaison', 'grammaire', 'orthographe', 'phrase', 'texte', 'lecture', 'vocabulaire', 'synonyme', 'antonyme'].includes(k))) {
    return 'français'
  }

  // Sciences
  if (keywords.some(k => ['sciences', 'physique', 'chimie', 'biologie'].includes(k))) {
    return 'sciences'
  }

  // Histoire
  if (lowerText.includes('histoire') || lowerText.includes('roi') || lowerText.includes('guerre') || lowerText.includes('siècle')) {
    return 'histoire'
  }

  // Géographie
  if (lowerText.includes('géographie') || lowerText.includes('carte') || lowerText.includes('pays') || lowerText.includes('ville')) {
    return 'géographie'
  }

  // Anglais
  if (lowerText.includes('english') || lowerText.includes('anglais')) {
    return 'anglais'
  }

  return 'autre'
}

/**
 * Estime la difficulté d'un exercice
 */
function estimateDifficulty(text: string): 1 | 2 | 3 | 4 | 5 {
  const lowerText = text.toLowerCase()
  let difficulty: number = 3 // Difficulté moyenne par défaut

  // Indicateurs de difficulté faible
  if (
    lowerText.includes('facile') ||
    lowerText.includes('simple') ||
    lowerText.includes('cp') ||
    lowerText.includes('ce1')
  ) {
    difficulty = 2
  }

  // Indicateurs de difficulté élevée
  if (
    lowerText.includes('difficile') ||
    lowerText.includes('complexe') ||
    lowerText.includes('avancé') ||
    lowerText.includes('expert') ||
    lowerText.includes('3ème') ||
    lowerText.includes('brevet')
  ) {
    difficulty = 4
  }

  // Ajustement basé sur la longueur du texte
  if (text.length > 300) difficulty += 1
  if (text.length < 100) difficulty -= 1

  // Clamp entre 1 et 5
  return Math.max(1, Math.min(5, difficulty)) as 1 | 2 | 3 | 4 | 5
}
