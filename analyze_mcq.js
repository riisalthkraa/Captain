// Script pour analyser les questions multiple-choice
const fs = require('fs');

const filePath = String.raw`C:\Users\RK\Desktop\Cap'taine\Cap'taine DEV\src\services\exerciseLibrary.ts`;
const content = fs.readFileSync(filePath, 'utf-8');

// Supprimer les commentaires
let cleanContent = content.replace(/\/\*[\s\S]*?\*\//g, '');
cleanContent = cleanContent.replace(/\/\/.*/g, '');

const errors = [];
let currentExerciseId = null;

// Parser basique pour trouver les exercices et questions
const exerciseMatches = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)];
const lines = content.split('\n');

let inQuestion = false;
let currentQuestion = {};
let currentExId = null;
let questionStartLine = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Détecter l'ID de l'exercice
  if (line.includes('id:') && !inQuestion && line.includes(',')) {
    const match = line.match(/id:\s*['"]([^'"]+)['"]/);
    if (match) {
      currentExId = match[1];
    }
  }

  // Détecter le début d'une question
  if (line.trim().startsWith('{') && i > 0 && lines[i-1].includes('questions:')) {
    // Début du tableau de questions
  }

  if (line.includes('id:') && inQuestion === false && line.includes('q')) {
    const match = line.match(/id:\s*['"]([^'"]+)['"]/);
    if (match) {
      inQuestion = true;
      questionStartLine = i + 1;
      currentQuestion = { id: match[1], exerciseId: currentExId, line: i + 1 };
    }
  }

  // Extraire le type
  if (inQuestion && line.includes('type:')) {
    const typeMatch = line.match(/type:\s*['"]([^'"]+)['"]/);
    if (typeMatch) {
      currentQuestion.type = typeMatch[1];
    }
  }

  // Extraire options (peut s'étendre sur plusieurs lignes)
  if (inQuestion && line.includes('options:')) {
    let optionsStr = line;
    let j = i + 1;

    // Si les options ne se terminent pas sur la même ligne
    if (!line.includes('],')) {
      while (j < lines.length && !lines[j].includes('],')) {
        optionsStr += lines[j];
        j++;
      }
      if (j < lines.length) {
        optionsStr += lines[j];
      }
    }

    // Parser les options
    try {
      const optionsMatch = optionsStr.match(/options:\s*\[(.*?)\]/s);
      if (optionsMatch) {
        const optionsContent = optionsMatch[1];
        // Extraire chaque option entre guillemets
        const options = [...optionsContent.matchAll(/['"]([^'"]*)['"]/g)].map(m => m[1]);
        currentQuestion.options = options;
      }
    } catch (e) {
      // Ignore parsing errors
    }
  }

  // Extraire correctAnswer
  if (inQuestion && line.includes('correctAnswer:')) {
    const answerMatch = line.match(/correctAnswer:\s*['"]([^'"]*)['"]/);
    if (answerMatch) {
      currentQuestion.correctAnswer = answerMatch[1];
    }
  }

  // Fin de la question
  if (inQuestion && line.trim().startsWith('}') && line.includes(',')) {
    // Vérifier si c'est une question multiple-choice
    if (currentQuestion.type === 'multiple-choice' &&
        currentQuestion.options &&
        currentQuestion.correctAnswer !== undefined) {

      // Vérifier si correctAnswer est dans options
      if (!currentQuestion.options.includes(currentQuestion.correctAnswer)) {
        errors.push({
          exerciseId: currentQuestion.exerciseId,
          questionId: currentQuestion.id,
          line: currentQuestion.line,
          options: currentQuestion.options,
          correctAnswer: currentQuestion.correctAnswer
        });
      }
    }

    // Reset pour la prochaine question
    inQuestion = false;
    currentQuestion = {};
  }
}

// Afficher les résultats
console.log('\n========================================');
console.log('RAPPORT D\'ANALYSE DES QUESTIONS MCQ');
console.log('========================================\n');

if (errors.length === 0) {
  console.log('✓ Aucune erreur trouvée\n');
} else {
  console.log(`✗ ${errors.length} erreur(s) trouvée(s):\n`);

  errors.forEach((error, index) => {
    console.log(`[${index + 1}] ERREUR:`);
    console.log(`  - Exercice ID: ${error.exerciseId}`);
    console.log(`  - Question ID: ${error.questionId}`);
    console.log(`  - Ligne: ${error.line}`);
    console.log(`  - Options disponibles: [${error.options.map(o => `'${o}'`).join(', ')}]`);
    console.log(`  - correctAnswer attendue: '${error.correctAnswer}'`);
    console.log(`  - PROBLÈME: '${error.correctAnswer}' N'EST PAS dans le tableau options!\n`);
  });
}

console.log('========================================\n');
