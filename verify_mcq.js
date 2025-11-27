// Vérification MCQ en important directement les données
const fs = require('fs');
const path = require('path');

// Fonction pour extraire et vérifier les questions MCQ d'un contenu TS
function verifyMCQ(fileContent, fileName) {
  const errors = [];

  // Utiliser une regex pour trouver tous les blocs de questions
  const questionBlocks = fileContent.match(/\{[^{}]*id:\s*['"]q\d+['"][^{}]*\}/gs) || [];

  // Pour chaque bloc potentiel, chercher dans le contexte plus large
  const lines = fileContent.split('\n');
  let currentExerciseId = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Détecter l'ID d'exercice
    if (line.match(/^\s*id:\s*['"](?:math|fr|sci|hist|ang|dec)-/)) {
      const match = line.match(/id:\s*['"]([^'"]+)['"]/);
      if (match) {
        currentExerciseId = match[1];
      }
    }

    // Détecter le début d'une question
    if (line.match(/^\s*id:\s*['"]q\d+['"]/)) {
      const qMatch = line.match(/id:\s*['"]([^'"]+)['"]/);
      if (!qMatch) continue;

      const questionId = qMatch[1];
      const startLine = i + 1;

      // Collecter toutes les lignes de cette question jusqu'au },
      let questionText = '';
      let j = i;
      let braceCount = 0;
      let foundStart = false;

      while (j < lines.length) {
        const currentLine = lines[j];
        questionText += currentLine + '\n';

        // Compter les accolades
        for (const char of currentLine) {
          if (char === '{') {
            braceCount++;
            foundStart = true;
          } else if (char === '}') {
            braceCount--;
            if (foundStart && braceCount === 0) {
              break;
            }
          }
        }

        if (foundStart && braceCount === 0) break;
        j++;
      }

      // Parser cette question
      const typeMatch = questionText.match(/type:\s*['"]multiple-choice['"]/);
      if (!typeMatch) continue; // Pas une MCQ

      // Extraire options - gérer le multiligne
      const optionsMatch = questionText.match(/options:\s*\[([\s\S]*?)\]/);
      if (!optionsMatch) continue;

      const optionsText = optionsMatch[1];

      // Parser les options - gérer tous les cas d'échappement
      const options = [];
      let inQuote = false;
      let quoteChar = null;
      let current = '';
      let escaped = false;

      for (let k = 0; k < optionsText.length; k++) {
        const char = optionsText[k];

        if (!inQuote) {
          if (char === '"' || char === "'") {
            inQuote = true;
            quoteChar = char;
            current = '';
          }
        } else {
          if (escaped) {
            current += char;
            escaped = false;
          } else if (char === '\\') {
            // Ne pas inclure le backslash, juste traiter le prochain char
            const nextChar = optionsText[k + 1];
            if (nextChar === "'" || nextChar === '"' || nextChar === '\\') {
              k++; // Skip the backslash
              current += nextChar;
            } else {
              current += char;
            }
          } else if (char === quoteChar) {
            options.push(current);
            inQuote = false;
            quoteChar = null;
            current = '';
          } else {
            current += char;
          }
        }
      }

      // Extraire correctAnswer
      const answerMatch = questionText.match(/correctAnswer:\s*['"]([^'"\\]*(?:\\.[^'"\\]*)*)['"]/);
      if (!answerMatch) continue;

      let correctAnswer = answerMatch[1];
      // Décoder les échappements dans correctAnswer
      correctAnswer = correctAnswer.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\');

      // Vérifier si correctAnswer est dans options
      if (!options.includes(correctAnswer)) {
        errors.push({
          file: fileName,
          exerciseId: currentExerciseId || 'inconnu',
          questionId: questionId,
          line: startLine,
          options: options,
          correctAnswer: correctAnswer
        });
      }

      // Sauter à la fin de cette question
      i = j;
    }
  }

  return errors;
}

// Analyser les fichiers
const files = [
  {
    path: path.join(__dirname, 'src', 'services', 'exerciseLibrary.ts'),
    name: 'exerciseLibrary.ts'
  },
  {
    path: path.join(__dirname, 'src', 'data', 'exercisesLibraryExtended.ts'),
    name: 'exercisesLibraryExtended.ts'
  }
];

console.log('\n' + '='.repeat(100));
console.log('VÉRIFICATION DES QUESTIONS MULTIPLE-CHOICE');
console.log('='.repeat(100) + '\n');

let allErrors = [];

files.forEach(fileInfo => {
  console.log(`Analyse de ${fileInfo.name}...`);
  try {
    const content = fs.readFileSync(fileInfo.path, 'utf-8');
    const errors = verifyMCQ(content, fileInfo.name);
    allErrors = allErrors.concat(errors);
    console.log(`  → ${errors.length} erreur(s) trouvée(s)\n`);
  } catch (err) {
    console.log(`  ✗ Erreur de lecture: ${err.message}\n`);
  }
});

console.log('='.repeat(100) + '\n');

if (allErrors.length === 0) {
  console.log('✅ Aucune erreur trouvée\n');
  console.log('Tous les correctAnswer des questions multiple-choice sont dans leurs options.\n');
} else {
  console.log(`❌ ${allErrors.length} ERREUR(S) TROUVÉE(S)\n`);
  console.log('─'.repeat(100) + '\n');

  allErrors.forEach((error, index) => {
    console.log(`[ERREUR #${index + 1}]`);
    console.log(`  Fichier: ${error.file}`);
    console.log(`  Exercice ID: ${error.exerciseId}`);
    console.log(`  Question ID: ${error.questionId}`);
    console.log(`  Ligne: ${error.line}`);
    console.log(`\n  Options disponibles (${error.options.length}):`);
    error.options.forEach((opt, i) => {
      console.log(`    [${i}] "${opt}"`);
    });
    console.log(`\n  correctAnswer: "${error.correctAnswer}"`);
    console.log(`\n  ⚠️  "${error.correctAnswer}" N'EST PAS dans le tableau options!\n`);
    console.log('─'.repeat(100) + '\n');
  });
}

console.log('='.repeat(100) + '\n');
