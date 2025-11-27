// Script robuste pour analyser les questions MCQ
const fs = require('fs');

const files = [
  { path: String.raw`C:\Users\RK\Desktop\Cap'taine\Cap'taine DEV\src\services\exerciseLibrary.ts`, name: 'exerciseLibrary.ts' },
  { path: String.raw`C:\Users\RK\Desktop\Cap'taine\Cap'taine DEV\src\data\exercisesLibraryExtended.ts`, name: 'exercisesLibraryExtended.ts' }
];

function parseOptions(optionsString) {
  // Gérer les apostrophes échappées et les différents types de guillemets
  const options = [];
  let inString = false;
  let stringChar = null;
  let currentOption = '';
  let escaped = false;

  for (let i = 0; i < optionsString.length; i++) {
    const char = optionsString[i];
    const prevChar = i > 0 ? optionsString[i - 1] : '';

    if (!inString) {
      if (char === '"' || char === "'" || char === '\'') {
        inString = true;
        stringChar = char;
        currentOption = '';
      }
    } else {
      if (escaped) {
        currentOption += char;
        escaped = false;
      } else if (char === '\\') {
        // C'est un backslash d'échappement
        escaped = true;
      } else if (char === stringChar) {
        // Fin de la string
        options.push(currentOption);
        inString = false;
        stringChar = null;
        currentOption = '';
      } else {
        currentOption += char;
      }
    }
  }

  return options;
}

function analyzeFile(fileInfo) {
  const content = fs.readFileSync(fileInfo.path, 'utf-8');
  const errors = [];
  const lines = content.split('\n');

  // Parser plus robuste utilisant le contenu brut
  const exerciseRegex = /\{\s*id:\s*['"]([^'"]+)['"]/g;
  const questionRegex = /id:\s*['"]q\d+['"]/g;

  // Parse ligne par ligne en gardant le contexte
  let currentExerciseId = null;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Détecter un exercice (pas une question)
    if (line.includes('id:') && (line.includes('math-') || line.includes('fr-') ||
                                  line.includes('sci-') || line.includes('hist-') ||
                                  line.includes('ang-') || line.includes('dec-'))) {
      const match = line.match(/id:\s*['"]([^'"]+)['"]/);
      if (match && match[1].includes('-')) {
        currentExerciseId = match[1];
      }
    }

    // Détecter une question
    if (line.includes('id:') && line.includes('\'q')) {
      const qMatch = line.match(/id:\s*['"]([^'"]+)['"]/);
      if (qMatch && qMatch[1].startsWith('q')) {
        const questionId = qMatch[1];
        const questionLine = i + 1;

        // Chercher le type, options et correctAnswer dans les lignes suivantes
        let type = null;
        let options = null;
        let correctAnswer = null;
        let optionsLine = null;
        let answerLine = null;
        let j = i + 1;

        // Parcourir jusqu'à la fin de la question (jusqu'au prochain '},')
        while (j < lines.length && lines[j].trim() !== '},') {
          const qLine = lines[j];

          // Type
          if (qLine.includes('type:') && qLine.includes('multiple-choice')) {
            type = 'multiple-choice';
          }

          // Options - peut s'étendre sur plusieurs lignes
          if (qLine.includes('options:')) {
            optionsLine = j + 1;
            let optionsStr = qLine;
            let k = j;

            // Continuer tant qu'on n'a pas trouvé la fermeture du tableau
            while (k < lines.length && !optionsStr.includes('],')) {
              k++;
              if (k < lines.length) {
                optionsStr += lines[k];
              }
            }

            // Extraire le contenu entre [ et ]
            const match = optionsStr.match(/options:\s*\[(.*?)\]/s);
            if (match) {
              options = parseOptions(match[1]);
            }
          }

          // correctAnswer
          if (qLine.includes('correctAnswer:')) {
            answerLine = j + 1;
            const match = qLine.match(/correctAnswer:\s*['"]([^'"]*)['"]/);
            if (match) {
              correctAnswer = match[1];
            }
          }

          j++;
        }

        // Vérifier si c'est une question MCQ complète avec erreur
        if (type === 'multiple-choice' && options && correctAnswer !== null) {
          // Vérification stricte de l'inclusion
          if (!options.includes(correctAnswer)) {
            errors.push({
              file: fileInfo.name,
              exerciseId: currentExerciseId,
              questionId: questionId,
              line: questionLine,
              optionsLine: optionsLine,
              answerLine: answerLine,
              options: options,
              correctAnswer: correctAnswer
            });
          }
        }

        // Sauter à la fin de la question
        i = j;
      }
    }

    i++;
  }

  return errors;
}

// Analyser tous les fichiers
console.log('\n' + '='.repeat(100));
console.log('RAPPORT EXHAUSTIF - VÉRIFICATION DES QUESTIONS MULTIPLE-CHOICE');
console.log('='.repeat(100) + '\n');

let allErrors = [];
let totalQuestions = 0;

files.forEach(fileInfo => {
  console.log(`📄 Analyse de ${fileInfo.name}...`);
  const errors = analyzeFile(fileInfo);
  allErrors = allErrors.concat(errors);
  console.log(`   → ${errors.length} erreur(s) trouvée(s)\n`);
});

console.log('='.repeat(100) + '\n');

if (allErrors.length === 0) {
  console.log('✅ AUCUNE ERREUR TROUVÉE\n');
  console.log('Tous les correctAnswer des questions multiple-choice sont présents dans leurs options.\n');
} else {
  console.log(`❌ ${allErrors.length} ERREUR(S) DÉTECTÉE(S)\n`);
  console.log('Les erreurs suivantes doivent être corrigées:\n');
  console.log('─'.repeat(100) + '\n');

  allErrors.forEach((error, index) => {
    console.log(`[ERREUR #${index + 1}]`);
    console.log(`  📁 Fichier: ${error.file}`);
    console.log(`  🎯 Exercice ID: ${error.exerciseId}`);
    console.log(`  ❓ Question ID: ${error.questionId}`);
    console.log(`  📍 Ligne question: ${error.line}`);
    console.log(`  📍 Ligne options: ${error.optionsLine}`);
    console.log(`  📍 Ligne correctAnswer: ${error.answerLine}`);
    console.log(`\n  📋 Options disponibles dans le tableau (${error.options.length} options):`);
    error.options.forEach((opt, i) => {
      console.log(`     [${i}] "${opt}"`);
    });
    console.log(`\n  ❌ correctAnswer actuelle: "${error.correctAnswer}"`);
    console.log(`\n  ⚠️  PROBLÈME: La valeur "${error.correctAnswer}" N'EST PAS dans le tableau options!`);
    console.log('\n' + '─'.repeat(100) + '\n');
  });

  console.log(`\n📊 RÉSUMÉ: ${allErrors.length} erreur(s) à corriger\n`);
}

console.log('='.repeat(100) + '\n');
