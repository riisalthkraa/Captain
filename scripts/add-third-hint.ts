/**
 * Script pour ajouter automatiquement un 3ème indice (la réponse) à tous les exercices
 * qui ont moins de 3 indices
 */

import * as fs from 'fs'
import * as path from 'path'

interface Question {
  id: string
  question: string
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'open-ended'
  correctAnswer: string | string[]
  hints?: string[]
  options?: string[]
}

function generateThirdHint(question: Question): string {
  const answer = Array.isArray(question.correctAnswer)
    ? question.correctAnswer[0]
    : question.correctAnswer

  switch (question.type) {
    case 'multiple-choice':
      return `La réponse est : ${answer}`

    case 'true-false':
      const isTrue = answer.toLowerCase().includes('vrai') || answer.toLowerCase() === 'true'
      return isTrue ? "C'est vrai" : "C'est faux"

    case 'fill-blank':
    case 'open-ended':
      return `La réponse est : ${answer}`

    default:
      return `La réponse est : ${answer}`
  }
}

function processFile(filePath: string): void {
  console.log(`\n🔍 Traitement de ${path.basename(filePath)}...`)

  const content = fs.readFileSync(filePath, 'utf-8')
  let modified = content
  let modificationCount = 0

  // Regex pour trouver les objets questions avec leurs hints
  // Cette regex est simplifiée et peut nécessiter des ajustements
  const questionRegex = /({[^}]*question:\s*['"`]([^'"`]+)['"`][^}]*type:\s*['"`]([^'"`]+)['"`][^}]*correctAnswer:\s*(['"`\[].*?['\]`])[^}]*hints:\s*\[(.*?)\][^}]*})/gs

  const matches = [...content.matchAll(questionRegex)]

  console.log(`   Trouvé ${matches.length} questions potentielles`)

  for (const match of matches) {
    const fullMatch = match[1]
    const hintsContent = match[5]

    // Compter le nombre d'indices (compte les chaînes entre guillemets)
    const hintMatches = hintsContent.match(/['"`][^'"`]+['"`]/g) || []
    const hintCount = hintMatches.length

    if (hintCount < 3) {
      // Extraire les informations nécessaires
      const typeMatch = fullMatch.match(/type:\s*['"`](.*?)['"`]/)
      const answerMatch = fullMatch.match(/correctAnswer:\s*(['"`\[].*?['\]`])/)

      if (typeMatch && answerMatch) {
        const type = typeMatch[1] as Question['type']
        let answer = answerMatch[1]

        // Nettoyer la réponse
        answer = answer.replace(/^['"`\[]|['\]`]$/g, '').trim()

        const mockQuestion: Question = {
          id: '',
          question: '',
          type,
          correctAnswer: answer,
          hints: hintMatches.map(h => h.replace(/^['"`]|['"`]$/g, ''))
        }

        const thirdHint = generateThirdHint(mockQuestion)

        // Construire le nouveau tableau de hints
        const newHints = [...mockQuestion.hints]

        // Ajouter des indices manquants si nécessaire
        while (newHints.length < 2) {
          if (newHints.length === 0) {
            newHints.push("Lis attentivement la question")
          } else if (newHints.length === 1) {
            newHints.push("Pense à ce que tu as appris")
          }
        }

        // Ajouter le 3ème indice (la réponse)
        newHints.push(thirdHint)

        // Formater le nouveau tableau de hints
        const newHintsStr = `[${newHints.map(h => `'${h.replace(/'/g, "\\'")}'`).join(', ')}]`

        // Remplacer dans le contenu
        const oldHintsStr = `hints: [${hintsContent}]`
        const newFullHintsStr = `hints: ${newHintsStr}`

        modified = modified.replace(oldHintsStr, newFullHintsStr)
        modificationCount++
      }
    }
  }

  if (modificationCount > 0) {
    fs.writeFileSync(filePath, modified, 'utf-8')
    console.log(`   ✅ ${modificationCount} questions modifiées`)
  } else {
    console.log(`   ℹ️  Aucune modification nécessaire`)
  }
}

// Fichiers à traiter
const files = [
  path.join(__dirname, '../src/services/exerciseLibrary.ts'),
  path.join(__dirname, '../src/data/exercisesLibraryExtended.ts'),
  path.join(__dirname, '../src/data/exercisesCollege.ts')
]

console.log('🚀 Démarrage du script d\'ajout du 3ème indice...\n')

for (const file of files) {
  if (fs.existsSync(file)) {
    processFile(file)
  } else {
    console.log(`❌ Fichier non trouvé : ${file}`)
  }
}

console.log('\n✨ Script terminé !')
