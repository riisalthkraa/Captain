// Vérification finale en utilisant eval()
const fs = require('fs');

function checkFile(filePath, fileName) {
  console.log(`\nAnalyse de ${fileName}...`);

  const content = fs.readFileSync(filePath, 'utf-8');
  const errors = [];

  // Extraire chaque exercice individuellement
  const lines = content.split('\n');
  let currentExercise = null;
  let currentExerciseId = null;
  let braceLevel = 0;
  let inExercise = false;
  let exerciseLines = [];
  let exerciseStartLine = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Détecter début d'exercice par le pattern {id: 'xxx-yyy-zzz'
    if (line.match(/^\s*\{/) && i + 1 < lines.length && lines[i + 1].match(/^\s*id:/)) {
      inExercise = true;
      braceLevel = 0;
      exerciseLines = [];
      exerciseStartLine = i + 1;
    }

    if (inExercise) {
      exerciseLines.push(line);

      // Compter les accolades
      for (const char of line) {
        if (char === '{') braceLevel++;
        if (char === '}') braceLevel--;
      }

      // Fin d'exercice
      if (braceLevel === 0 && exerciseLines.length > 1) {
        const exerciseText = exerciseLines.join('\n');

        // Extraire l'ID de l'exercice
        const idMatch = exerciseText.match(/id:\s*['"]([^'"]+)['"]/);
        if (idMatch) {
          currentExerciseId = idMatch[1];

          // Vérifier si c'est un ID d'exercice (pas une question)
          if (currentExerciseId.match(/^(math|fr|sci|hist|ang|dec)-/)) {
            // Extraire les questions
            const questionsMatch = exerciseText.match(/questions:\s*\[([\s\S]*)\]/);
            if (questionsMatch) {
              const questionsText = questionsMatch[1];

              // Parser chaque question
              let questionBraceLevel = 0;
              let questionLines = [];
              let inQuestion = false;
              let questionStartLine = 0;

              const qLines = questionsText.split('\n');
              for (let j = 0; j < qLines.length; j++) {
                const qLine = qLines[j];

                if (qLine.match(/^\s*\{/) || (qLine.match(/\{/) && questionBraceLevel === 0)) {
                  inQuestion = true;
                  questionLines = [qLine];
                  questionStartLine = exerciseStartLine + j;
                  questionBraceLevel = (qLine.match(/\{/g) || []).length - (qLine.match(/\}/g) || []).length;
                } else if (inQuestion) {
                  questionLines.push(qLine);
                  questionBraceLevel += (qLine.match(/\{/g) || []).length - (qLine.match(/\}/g) || []).length;

                  if (questionBraceLevel === 0) {
                    // Fin de question - vérifier
                    const questionText = questionLines.join('\n');

                    // Est-ce une MCQ?
                    if (questionText.match(/type:\s*['"]multiple-choice['"]/)) {
                      // Extraire ID de la question
                      const qIdMatch = questionText.match(/id:\s*['"]([^'"]+)['"]/);
                      const questionId = qIdMatch ? qIdMatch[1] : 'inconnu';

                      // Extraire options - utiliser eval()
                      const optionsMatch = questionText.match(/options:\s*(\[[\s\S]*?\]),/);
                      if (optionsMatch) {
                        try {
                          // Évaluer le tableau d'options
                          const options = eval(optionsMatch[1]);

                          // Extraire correctAnswer
                          const answerMatch = questionText.match(/correctAnswer:\s*['"]([^'"\\]*(?:\\.[^'"\\]*)*)['"]/);
                          if (answerMatch) {
                            let correctAnswer = answerMatch[1];
                            // Décoder les échappements
                            correctAnswer = correctAnswer.replace(/\\'/g, "'").replace(/\\"/g, '"');

                            // Vérifier
                            if (!options.includes(correctAnswer)) {
                              errors.push({
                                file: fileName,
                                exerciseId: currentExerciseId,
                                questionId: questionId,
                                line: questionStartLine,
                                options: options,
                                correctAnswer: correctAnswer
                              });
                            }
                          }
                        } catch (e) {
                          // Erreur d'eval - ignorer
                        }
                      }
                    }

                    inQuestion = false;
                  }
                }
              }
            }
          }
        }

        inExercise = false;
      }
    }
  }

  console.log(`  -> ${errors.length} erreur(s) trouvee(s)`);
  return errors;
}

// Fichiers à analyser
const files = [
  {
    path: 'C:\\Users\\RK\\Desktop\\Cap\'taine\\Cap\'taine DEV\\src\\services\\exerciseLibrary.ts',
    name: 'exerciseLibrary.ts'
  },
  {
    path: 'C:\\Users\\RK\\Desktop\\Cap\'taine\\Cap\'taine DEV\\src\\data\\exercisesLibraryExtended.ts',
    name: 'exercisesLibraryExtended.ts'
  }
];

console.log('\n' + '='.repeat(100));
console.log('VERIFICATION FINALE DES QUESTIONS MULTIPLE-CHOICE');
console.log('='.repeat(100));

let allErrors = [];

files.forEach(file => {
  try {
    const errors = checkFile(file.path, file.name);
    allErrors = allErrors.concat(errors);
  } catch (e) {
    console.log(`\nErreur lors de l'analyse: ${e.message}`);
  }
});

console.log('\n' + '='.repeat(100) + '\n');

if (allErrors.length === 0) {
  console.log('Aucune erreur trouvee\n');
} else {
  console.log(`${allErrors.length} ERREUR(S) DETECTEE(S):\n`);
  console.log('-'.repeat(100) + '\n');

  allErrors.forEach((error, i) => {
    console.log(`[ERREUR #${i + 1}]`);
    console.log(`  Fichier: ${error.file}`);
    console.log(`  Exercice: ${error.exerciceId}`);
    console.log(`  Question: ${error.questionId}`);
    console.log(`  Ligne: ~${error.line}`);
    console.log(`\n  Options:`);
    error.options.forEach((opt, j) => {
      console.log(`    [${j}] "${opt}"`);
    });
    console.log(`\n  correctAnswer: "${error.correctAnswer}"`);
    console.log(`\n  PROBLEME: "${error.correctAnswer}" N'EST PAS dans options!\n`);
    console.log('-'.repeat(100) + '\n');
  });
}

console.log('='.repeat(100) + '\n');
