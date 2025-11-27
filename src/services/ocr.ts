import Tesseract from 'tesseract.js'
import pdfParse from 'pdf-parse'
import { Buffer } from 'buffer'

// Polyfill Buffer pour le navigateur
if (typeof window !== 'undefined') {
  (window as any).Buffer = Buffer
}

export interface OCRResult {
  text: string
  confidence?: number
  error?: string
}

export async function extractTextFromImage(file: File): Promise<OCRResult> {
  try {
    const result = await Tesseract.recognize(file, 'fra', {
      logger: (m) => console.log(m),
    })

    return {
      text: result.data.text,
      confidence: result.data.confidence,
    }
  } catch (error) {
    console.error('OCR error:', error)
    return {
      text: '',
      error: 'Impossible de lire le texte de l\'image',
    }
  }
}

export async function extractTextFromPDF(file: File): Promise<OCRResult> {
  try {
    console.log('[OCR] Starting PDF extraction for:', file.name, 'Size:', file.size)

    const arrayBuffer = await file.arrayBuffer()

    // Vérifier si le fichier n'est pas vide
    if (arrayBuffer.byteLength === 0) {
      return {
        text: '',
        error: 'Le fichier PDF est vide'
      }
    }

    // Convertir en Buffer pour pdf-parse
    const buffer = Buffer.from(arrayBuffer)
    const data = await pdfParse(buffer)

    console.log('[OCR] PDF extracted successfully. Text length:', data.text?.length || 0)

    // Vérifier si du texte a été extrait
    if (!data.text || data.text.trim().length === 0) {
      return {
        text: '',
        error: 'Le PDF ne contient pas de texte extractible (il pourrait être scanné)'
      }
    }

    return {
      text: data.text,
      confidence: 100 // PDF text extraction is reliable
    }
  } catch (error: any) {
    console.error('[OCR] PDF parse error:', error)
    const errorMessage = error.message || 'Erreur inconnue'
    return {
      text: '',
      error: `Impossible de lire le PDF: ${errorMessage}`
    }
  }
}

export async function extractTextFromFile(file: File): Promise<OCRResult> {
  const fileType = file.type

  if (fileType.startsWith('image/')) {
    return extractTextFromImage(file)
  } else if (fileType === 'application/pdf') {
    return extractTextFromPDF(file)
  } else if (
    fileType === 'application/msword' ||
    fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    // For Word documents, we'd need a specific library
    return {
      text: '',
      error: 'Les fichiers Word ne sont pas encore supportés. Utilise un PDF ou une image.',
    }
  }

  return {
    text: '',
    error: 'Type de fichier non supporté',
  }
}
