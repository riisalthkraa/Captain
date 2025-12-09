/**
 * Script amélioré pour ajouter un 3ème indice
 * Gère les hints sur une seule ligne ET sur plusieurs lignes
 */

const fs = require('fs');
const path = require('path');

function generateThirdHint(type, correctAnswer) {
  let answer = String(correctAnswer).trim();
  answer = answer.replace(/^['"`\[]|['\]`]$/g, '').trim();

  if (answer.startsWith('[')) {
    const match = answer.match(/['"`]([^'"`]+)['"`]/);
    if (match) answer = match[1];
  } else {
    answer = answer.replace(/^['"`]|['"`]$/g, '');
  }

  switch (type) {
    case 'multiple-choice':
    case 'QCM':
      return `La réponse est : ${answer}`;
    case 'true-false':
    case 'TRUE_FALSE':
      const isTrue = answer.toLowerCase().includes('vrai') || answer.toLowerCase() === 'true';
      return isTrue ? "C'est vrai" : "C'est faux";
    case 'fill-blank':
    case 'FILL_BLANK':
    case 'open-ended':
    case 'OPEN':
      return `La réponse est : ${answer}`;
    default:
      return `La réponse est : ${answer}`;
  }
}

function processFile(filePath) {
  console.log(`\n🔍 Traitement de ${path.basename(filePath)}...`);

  const content = fs.readFileSync(filePath, 'utf-8');

  // Utilise une approche différente : cherche tous les blocs "hints: [...]"
  // et compte combien d'éléments ils contiennent

  let modified = content;
  let modificationCount = 0;

  // Pattern pour matcher hints: [...] sur une ou plusieurs lignes
  const hintsPattern = /hints:\s*\[((?:[^[\]]|\[[^\]]*\])*?)\]/g;

  const matches = [...content.matchAll(hintsPattern)];
  console.log(`   Trouvé ${matches.length} blocs hints`);

  // Pour chaque bloc hints, vérifie combien d'indices il y a
  for (const match of matches) {
    const fullMatch = match[0];
    const hintsContent = match[1];

    // Compte le nombre d'indices (chaînes entre guillemets)
    const hintItems = hintsContent.match(/['"`][^'"`]*['"`]/g) || [];
    const hintCount = hintItems.length;

    if (hintCount > 0 && hintCount < 3) {
      // Cherche le type et correctAnswer dans les 500 caractères avant
      const matchIndex = match.index;
      const contextBefore = content.substring(Math.max(0, matchIndex - 500), matchIndex);

      const typeMatch = contextBefore.match(/type:\s*['"`]([^'"`]+)['"`]/);
      const answerMatch = contextBefore.match(/correctAnswer:\s*(['"`\[][^,\n]+)/);

      if (typeMatch && answerMatch) {
        const type = typeMatch[1];
        const correctAnswer = answerMatch[1];

        const thirdHint = generateThirdHint(type, correctAnswer);

        // Récupère les hints existants
        let existingHints = hintItems.map(h => h.slice(1, -1)); // Enlève les guillemets

        // Ajoute des hints génériques si nécessaire
        while (existingHints.length < 2) {
          if (existingHints.length === 0) {
            existingHints.push("Lis attentivement la question");
          } else {
            existingHints.push("Pense à ce que tu as appris");
          }
        }

        // Ajoute le 3ème indice
        existingHints.push(thirdHint);

        // Formate les nouveaux hints (échappe les apostrophes)
        const newHintsArray = existingHints.map(h => `'${h.replace(/'/g, "\\'")}'`);
        const newHintsStr = `hints: [${newHintsArray.join(', ')}]`;

        // Remplace dans le contenu
        modified = modified.replace(fullMatch, newHintsStr);
        modificationCount++;
      }
    }
  }

  if (modificationCount > 0) {
    fs.writeFileSync(filePath, modified, 'utf-8');
    console.log(`   ✅ ${modificationCount} questions modifiées`);
  } else {
    console.log(`   ℹ️  Aucune modification nécessaire`);
  }

  return modificationCount;
}

const files = [
  path.join(__dirname, '../src/services/exerciseLibrary.ts'),
  path.join(__dirname, '../src/data/exercisesLibraryExtended.ts'),
  path.join(__dirname, '../src/data/exercisesCollege.ts')
];

console.log('🚀 Démarrage du script d\'ajout du 3ème indice (v2)...\n');

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
