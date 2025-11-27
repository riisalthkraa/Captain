// Script pour analyser TOUS les fichiers d'exercices
const fs = require('fs');

const files = [
  String.raw`C:\Users\RK\Desktop\Cap'taine\Cap'taine DEV\src\services\exerciseLibrary.ts`,
  String.raw`C:\Users\RK\Desktop\Cap'taine\Cap'taine DEV\src\data\exercisesLibraryExtended.ts`
];

// Helper pour afficher les codes de caractères
function showCharCodes(str) {
  if (str.length > 50) return '[trop long]';
  return str.split('').map(c => `${c}(${c.charCodeAt(0)})`).join(' ');
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const errors = [];
  const lines = content.split('\n');

  let currentExerciseId = null;
  let inQuestion = false;
  let currentQuestion = {};
  let questionDepth = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Détecter l'ID de l'exercice
    if (line.includes('id:') && !inQuestion) {
      const match = line.match(/id:\s*['"]([^'"]+)['"]/);
      if (match && (match[1].includes('math-') || match[1].includes('fr-') ||
                    match[1].includes('sci-') || match[1].includes('hist-') ||
                    match[1].includes('ang-') || match[1].includes('dec-'))) {
        currentExerciseId = match[1];
      }
    }

    // Détecter le début d'une question
    if (line.includes('id:') && line.includes('\'q')) {
      const match = line.match(/id:\s*['"]([^'"]+)['"]/);
      if (match && match[1].startsWith('q')) {
        inQuestion = true;
        currentQuestion = {
          id: match[1],
          exerciseId: currentExerciseId,
          line: i + 1,
          file: filePath.split('\\').pop()
        };
      }
    }

    // Extraire le type
    if (inQuestion && line.includes('type:') && line.includes('multiple-choice')) {
      currentQuestion.type = 'multiple-choice';
    }

    // Extraire options
    if (inQuestion && line.includes('options:')) {
      let optionsStr = line;
      let j = i + 1;

      // Continuer jusqu'à trouver la fin
      while (j < lines.length && !optionsStr.includes('],')) {
        optionsStr += ' ' + lines[j].trim();
        j++;
      }

      try {
        const optionsMatch = optionsStr.match(/options:\s*\[(.*?)\]/s);
        if (optionsMatch) {
          const optionsContent = optionsMatch[1];
          const options = [...optionsContent.matchAll(/['"]([^'"]*)['"]/g)].map(m => m[1]);
          currentQuestion.options = options;
          currentQuestion.optionsLine = i + 1;
        }
      } catch (e) {
        // Ignore
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

    // Fin de la question
    if (inQuestion && line.trim() === '},') {
      if (currentQuestion.type === 'multiple-choice' &&
          currentQuestion.options &&
          currentQuestion.correctAnswer !== undefined) {

        // Vérification STRICTE
        const found = currentQuestion.options.includes(currentQuestion.correctAnswer);

        if (!found) {
          errors.push({
            file: currentQuestion.file,
            exerciseId: currentQuestion.exerciseId,
            questionId: currentQuestion.id,
            line: currentQuestion.line,
            optionsLine: currentQuestion.optionsLine,
            answerLine: currentQuestion.answerLine,
            options: currentQuestion.options,
            correctAnswer: currentQuestion.correctAnswer
          });
        }
      }

      inQuestion = false;
      currentQuestion = {};
    }
  }

  return errors;
}

// Analyser tous les fichiers
console.log('\n' + '='.repeat(80));
console.log('ANALYSE EXHAUSTIVE - TOUTES LES QUESTIONS MULTIPLE-CHOICE');
console.log('='.repeat(80) + '\n');

let allErrors = [];

files.forEach(file => {
  console.log(`Analyse de ${file.split('\\').pop()}...`);
  const errors = analyzeFile(file);
  allErrors = allErrors.concat(errors);
  console.log(`  → ${errors.length} erreur(s) trouvée(s)\n`);
});

console.log('='.repeat(80) + '\n');

if (allErrors.length === 0) {
  console.log('✓ AUCUNE ERREUR TROUVÉE\n');
  console.log('Tous les correctAnswer sont présents dans leurs options respectives.\n');
} else {
  console.log(`✗ ${allErrors.length} ERREUR(S) TROUVÉE(S)\n`);
  console.log('─'.repeat(80) + '\n');

  allErrors.forEach((error, index) => {
    console.log(`[ERREUR ${index + 1}/${allErrors.length}]`);
    console.log(`  Fichier: ${error.file}`);
    console.log(`  Exercice: ${error.exerciseId}`);
    console.log(`  Question: ${error.questionId}`);
    console.log(`  Ligne: ${error.line}`);
    console.log(`\n  Options disponibles (${error.options.length}):`);
    error.options.forEach((opt, i) => {
      console.log(`    [${i}] '${opt}'`);
    });
    console.log(`\n  correctAnswer attendue:`);
    console.log(`    '${error.correctAnswer}'`);
    console.log(`\n  ⚠️  '${error.correctAnswer}' N'EST PAS dans options!`);
    console.log('\n' + '─'.repeat(80) + '\n');
  });
}

console.log('='.repeat(80) + '\n');
