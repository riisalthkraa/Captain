// Script détaillé pour analyser les questions multiple-choice avec vérification Unicode
const fs = require('fs');

const filePath = String.raw`C:\Users\RK\Desktop\Cap'taine\Cap'taine DEV\src\services\exerciseLibrary.ts`;
const content = fs.readFileSync(filePath, 'utf-8');

const errors = [];
const lines = content.split('\n');

let currentExerciseId = null;
let inQuestion = false;
let currentQuestion = {};

// Helper function pour afficher les codes des caractères
function showCharCodes(str) {
  return str.split('').map((c, i) => `${c}(${c.charCodeAt(0)})`).join(' ');
}

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Détecter l'ID de l'exercice (hors questions)
  if (line.includes('id:') && !inQuestion && (line.includes('math-') || line.includes('fr-') || line.includes('sci-') || line.includes('hist-') || line.includes('ang-'))) {
    const match = line.match(/id:\s*['"]([^'"]+)['"]/);
    if (match && (match[1].includes('-') && !match[1].startsWith('q'))) {
      currentExerciseId = match[1];
    }
  }

  // Détecter le début d'une question
  if (line.includes('id:') && line.includes('\'q')) {
    const match = line.match(/id:\s*['"]([^'"]+)['"]/);
    if (match) {
      inQuestion = true;
      currentQuestion = {
        id: match[1],
        exerciseId: currentExerciseId,
        line: i + 1
      };
    }
  }

  // Extraire le type
  if (inQuestion && line.includes('type:') && line.includes('multiple-choice')) {
    currentQuestion.type = 'multiple-choice';
  }

  // Extraire options (gérer les lignes multiples)
  if (inQuestion && line.includes('options:')) {
    let optionsStr = line;
    let j = i + 1;

    // Continuer jusqu'à trouver la fin du tableau
    while (j < lines.length && !optionsStr.includes('],')) {
      optionsStr += ' ' + lines[j].trim();
      j++;
    }

    try {
      // Parser les options avec regex
      const optionsMatch = optionsStr.match(/options:\s*\[(.*?)\]/s);
      if (optionsMatch) {
        const optionsContent = optionsMatch[1];
        // Extraire chaque option entre guillemets (simple ou double)
        const options = [...optionsContent.matchAll(/['"]([^'"]*)['"]/g)].map(m => m[1]);
        currentQuestion.options = options;
        currentQuestion.optionsLine = i + 1;
      }
    } catch (e) {
      console.error(`Erreur parsing options ligne ${i + 1}:`, e.message);
    }
  }

  // Extraire correctAnswer
  if (inQuestion && line.includes('correctAnswer:')) {
    const answerMatch = line.match(/correctAnswer:\s*['"]([^'"]*)['"]/);
    if (answerMatch) {
      currentQuestion.correctAnswer = answerMatch[1];
      currentQuestion.answerLine = i + 1;
    }
  }

  // Fin de la question (détection du } qui ferme l'objet question)
  if (inQuestion && line.trim() === '},') {
    // Vérifier si c'est une question multiple-choice complète
    if (currentQuestion.type === 'multiple-choice' &&
        currentQuestion.options &&
        currentQuestion.correctAnswer !== undefined) {

      // Vérifier si correctAnswer est EXACTEMENT dans options
      const found = currentQuestion.options.some(opt => opt === currentQuestion.correctAnswer);

      if (!found) {
        // Vérification détaillée pour debugging
        const closeMatches = currentQuestion.options.filter(opt =>
          opt.toLowerCase() === currentQuestion.correctAnswer.toLowerCase() ||
          opt.normalize() === currentQuestion.correctAnswer.normalize()
        );

        errors.push({
          exerciseId: currentQuestion.exerciseId,
          questionId: currentQuestion.id,
          line: currentQuestion.line,
          optionsLine: currentQuestion.optionsLine,
          answerLine: currentQuestion.answerLine,
          options: currentQuestion.options,
          correctAnswer: currentQuestion.correctAnswer,
          closeMatches: closeMatches
        });
      }
    }

    // Reset
    inQuestion = false;
    currentQuestion = {};
  }
}

// Afficher les résultats
console.log('\n========================================');
console.log('RAPPORT DÉTAILLÉ - QUESTIONS MCQ');
console.log('========================================\n');

if (errors.length === 0) {
  console.log('✓ Aucune erreur trouvée - Tous les correctAnswer sont dans leurs options respectives\n');
} else {
  console.log(`✗ ${errors.length} ERREUR(S) TROUVÉE(S):\n`);
  console.log('─'.repeat(80) + '\n');

  errors.forEach((error, index) => {
    console.log(`[ERREUR ${index + 1}/${errors.length}]`);
    console.log(`  Exercice: ${error.exerciseId}`);
    console.log(`  Question: ${error.questionId}`);
    console.log(`  Ligne question: ${error.line}`);
    console.log(`  Ligne options: ${error.optionsLine}`);
    console.log(`  Ligne correctAnswer: ${error.answerLine}`);
    console.log(`\n  Options disponibles (${error.options.length}):`);
    error.options.forEach((opt, i) => {
      console.log(`    [${i}] '${opt}'`);
      if (opt.length < 50) {
        console.log(`        Codes: ${showCharCodes(opt)}`);
      }
    });
    console.log(`\n  correctAnswer actuelle:`);
    console.log(`    '${error.correctAnswer}'`);
    console.log(`    Codes: ${showCharCodes(error.correctAnswer)}`);

    console.log(`\n  ⚠️  PROBLÈME: '${error.correctAnswer}' N'EST PAS dans le tableau options!`);

    if (error.closeMatches.length > 0) {
      console.log(`\n  ℹ️  Correspondances proches trouvées (casse/normalisation):`);
      error.closeMatches.forEach(m => console.log(`    - '${m}'`));
    }

    console.log('\n' + '─'.repeat(80) + '\n');
  });

  console.log(`\nTOTAL: ${errors.length} erreur(s) à corriger\n`);
}

console.log('========================================\n');
