/**
 * Script pour ajouter un 3ème indice à tous les exercices qui en ont moins de 3
 * Utilise une approche simple de manipulation de texte
 */

const fs = require('fs');
const path = require('path');

function generateThirdHint(question, type, correctAnswer) {
  // Nettoie la réponse correcte
  let answer = correctAnswer.trim();

  // Enlève les guillemets et crochets si présents
  answer = answer.replace(/^['"`\[]|['\]`]$/g, '').trim();

  // Si c'est un tableau, prend le premier élément
  if (answer.startsWith('[')) {
    const match = answer.match(/['"`]([^'"`]+)['"`]/);
    if (match) answer = match[1];
  } else {
    answer = answer.replace(/^['"`]|['"`]$/g, '');
  }

  switch (type) {
    case 'multiple-choice':
      return `La réponse est : ${answer}`;

    case 'true-false':
      const isTrue = answer.toLowerCase().includes('vrai') ||
                    answer.toLowerCase() === 'true';
      return isTrue ? "C'est vrai" : "C'est faux";

    case 'fill-blank':
    case 'open-ended':
    case 'FILL_BLANK':
    case 'OPEN':
      return `La réponse est : ${answer}`;

    default:
      return `La réponse est : ${answer}`;
  }
}

function processFile(filePath) {
  console.log(`\n🔍 Traitement de ${path.basename(filePath)}...`);

  let content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  let modified = false;
  let modificationCount = 0;

  // Variables pour tracker le contexte
  let inQuestion = false;
  let currentQuestion = {};
  let questionStartLine = -1;
  let hintsLine = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Détecte le début d'une question
    if (trimmed.includes('question:') && trimmed.includes("'")) {
      inQuestion = true;
      questionStartLine = i;
      currentQuestion = { question: trimmed };
    }

    // Collecte les infos de la question
    if (inQuestion) {
      if (trimmed.includes('type:')) {
        const typeMatch = trimmed.match(/type:\s*['"`]([^'"`]+)['"`]/);
        if (typeMatch) currentQuestion.type = typeMatch[1];
      }

      if (trimmed.includes('correctAnswer:')) {
        const answerMatch = trimmed.match(/correctAnswer:\s*(.+?)(?:,\s*$|$)/);
        if (answerMatch) currentQuestion.correctAnswer = answerMatch[1];
      }

      if (trimmed.includes('hints:')) {
        hintsLine = i;

        // Extrait le contenu des hints
        const hintsMatch = line.match(/hints:\s*\[(.*?)\]/);
        if (hintsMatch) {
          const hintsContent = hintsMatch[1];
          const hintMatches = hintsContent.match(/['"`][^'"`]*['"`]/g) || [];
          const hintCount = hintMatches.length;

          // Si moins de 3 hints, on doit ajouter le 3ème
          if (hintCount > 0 && hintCount < 3 && currentQuestion.type && currentQuestion.correctAnswer) {
            const thirdHint = generateThirdHint(
              currentQuestion.question,
              currentQuestion.type,
              currentQuestion.correctAnswer
            );

            // Construit le nouveau tableau de hints
            let newHints = hintMatches.map(h => h.replace(/^['"`]|['"`]$/g, ''));

            // Ajoute des indices génériques si nécessaire
            while (newHints.length < 2) {
              if (newHints.length === 0) {
                newHints.push("Lis attentivement la question");
              } else if (newHints.length === 1) {
                newHints.push("Pense à ce que tu as appris");
              }
            }

            // Ajoute le 3ème indice
            newHints.push(thirdHint);

            // Formate le nouveau tableau
            const indent = line.match(/^(\s*)/)[1];
            const newHintsStr = newHints.map(h => `'${h.replace(/'/g, "\\'")}'`).join(', ');
            lines[i] = `${indent}hints: [${newHintsStr}]${trimmed.endsWith(',') ? ',' : ''}`;

            modified = true;
            modificationCount++;
          }
        }
      }

      // Détecte la fin de la question (ligne avec })
      if (trimmed === '},' || trimmed === '}') {
        inQuestion = false;
        currentQuestion = {};
        questionStartLine = -1;
        hintsLine = -1;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
    console.log(`   ✅ ${modificationCount} questions modifiées`);
  } else {
    console.log(`   ℹ️  Aucune modification nécessaire`);
  }

  return modificationCount;
}

// Fichiers à traiter
const files = [
  path.join(__dirname, '../src/services/exerciseLibrary.ts'),
  path.join(__dirname, '../src/data/exercisesLibraryExtended.ts'),
  path.join(__dirname, '../src/data/exercisesCollege.ts')
];

console.log('🚀 Démarrage du script d\'ajout du 3ème indice...\n');

let totalModifications = 0;

for (const file of files) {
  if (fs.existsSync(file)) {
    const count = processFile(file);
    totalModifications += count;
  } else {
    console.log(`❌ Fichier non trouvé : ${file}`);
  }
}

console.log(`\n✨ Script terminé ! ${totalModifications} questions modifiées au total.`);
