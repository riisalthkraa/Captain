/**
 * Script de test automatisé pour vérifier tous les exercices
 * Niveaux: CP, CE1, CE2
 */

const fs = require('fs');

// Lire le fichier
const filePath = String.raw`C:\Users\RK\Desktop\Cap'taine\Cap'taine DEV\src\data\exercisesLibraryExtended.ts`;
const content = fs.readFileSync(filePath, 'utf8');

// Variables de statistiques
const stats = {
  total: 0,
  byLevel: { CP: 0, CE1: 0, CE2: 0 },
  bySubject: {},
  totalQuestions: 0,
  errors: [],
  warnings: [],
  success: 0
};

// Fonction pour extraire les exercices du fichier
function extractExercises(content) {
  const exercises = [];

  // Pattern pour trouver les objets d'exercice
  const exercisePattern = /\{[\s\S]*?id:\s*['"]([^'"]+)['"][\s\S]*?\n\s*\}/g;

  // Diviser le contenu en blocs d'exercices
  const lines = content.split('\n');
  let currentExercise = null;
  let braceCount = 0;
  let exerciseStart = -1;
  let inExerciseArray = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Détecter le début du tableau EXTENDED_EXERCISES
    if (line.includes('EXTENDED_EXERCISES') && line.includes('[')) {
      inExerciseArray = true;
      continue;
    }

    // Détecter la fin du tableau
    if (inExerciseArray && line.trim().startsWith(']')) {
      break;
    }

    if (inExerciseArray) {
      // Compter les accolades
      const openBraces = (line.match(/\{/g) || []).length;
      const closeBraces = (line.match(/\}/g) || []).length;

      if (openBraces > 0 && braceCount === 0 && line.trim().startsWith('{')) {
        exerciseStart = i;
      }

      braceCount += openBraces - closeBraces;

      // Quand on ferme complètement un exercice
      if (braceCount === 0 && exerciseStart !== -1) {
        const exerciseText = lines.slice(exerciseStart, i + 1).join('\n');
        exercises.push({ text: exerciseText, startLine: exerciseStart });
        exerciseStart = -1;
      }
    }
  }

  return exercises;
}

// Fonction pour parser un exercice
function parseExercise(exerciseText) {
  const exercise = {
    id: null,
    title: null,
    subject: null,
    level: null,
    difficulty: null,
    description: null,
    estimatedTime: null,
    skills: [],
    questions: []
  };

  // Extraire l'ID
  const idMatch = exerciseText.match(/id:\s*['"]([^'"]+)['"]/);
  if (idMatch) exercise.id = idMatch[1];

  // Extraire le title
  const titleMatch = exerciseText.match(/title:\s*['"]([^'"]+)['"]/);
  if (titleMatch) exercise.title = titleMatch[1];

  // Extraire le subject
  const subjectMatch = exerciseText.match(/subject:\s*['"]([^'"]+)['"]/);
  if (subjectMatch) exercise.subject = subjectMatch[1];

  // Extraire le level
  const levelMatch = exerciseText.match(/level:\s*['"]([^'"]+)['"]/);
  if (levelMatch) exercise.level = levelMatch[1];

  // Extraire difficulty
  const difficultyMatch = exerciseText.match(/difficulty:\s*(\d+)/);
  if (difficultyMatch) exercise.difficulty = parseInt(difficultyMatch[1]);

  // Extraire description
  const descMatch = exerciseText.match(/description:\s*['"]([^'"]+)['"]/);
  if (descMatch) exercise.description = descMatch[1];

  // Extraire estimatedTime
  const timeMatch = exerciseText.match(/estimatedTime:\s*(\d+)/);
  if (timeMatch) exercise.estimatedTime = parseInt(timeMatch[1]);

  // Extraire skills
  const skillsMatch = exerciseText.match(/skills:\s*\[(.*?)\]/s);
  if (skillsMatch) {
    const skillsStr = skillsMatch[1];
    const skills = skillsStr.match(/['"]([^'"]+)['"]/g);
    if (skills) {
      exercise.skills = skills.map(s => s.replace(/['"]/g, ''));
    }
  }

  // Extraire les questions
  const questionsMatch = exerciseText.match(/questions:\s*\[([\s\S]*)\]/);
  if (questionsMatch) {
    const questionsText = questionsMatch[1];

    // Diviser par les objets de questions
    const questionBlocks = [];
    let currentBlock = '';
    let braceCount = 0;

    for (let char of questionsText) {
      currentBlock += char;
      if (char === '{') braceCount++;
      if (char === '}') {
        braceCount--;
        if (braceCount === 0 && currentBlock.trim().startsWith('{')) {
          questionBlocks.push(currentBlock.trim());
          currentBlock = '';
        }
      }
    }

    questionBlocks.forEach(qText => {
      const q = parseQuestion(qText);
      if (q.id) exercise.questions.push(q);
    });
  }

  return exercise;
}

// Fonction pour parser une question
function parseQuestion(qText) {
  const question = {
    id: null,
    question: null,
    type: null,
    options: [],
    correctAnswer: null,
    explanation: null,
    hints: []
  };

  // Extraire id
  const idMatch = qText.match(/id:\s*['"]([^'"]+)['"]/);
  if (idMatch) question.id = idMatch[1];

  // Extraire question
  const qMatch = qText.match(/question:\s*['"]([^'"]+)['"]/);
  if (qMatch) question.question = qMatch[1];

  // Extraire type
  const typeMatch = qText.match(/type:\s*['"]([^'"]+)['"]/);
  if (typeMatch) question.type = typeMatch[1];

  // Extraire options (pour multiple-choice)
  const optionsMatch = qText.match(/options:\s*\[(.*?)\]/s);
  if (optionsMatch) {
    const optionsStr = optionsMatch[1];
    const opts = optionsStr.match(/['"]([^'"]+)['"]/g);
    if (opts) {
      question.options = opts.map(o => o.replace(/['"]/g, ''));
    }
  }

  // Extraire correctAnswer
  const ansMatch = qText.match(/correctAnswer:\s*['"]([^'"]+)['"]/);
  if (ansMatch) question.correctAnswer = ansMatch[1];

  // Extraire explanation
  const expMatch = qText.match(/explanation:\s*['"]([^'"]*)['"]/s);
  if (expMatch) question.explanation = expMatch[1];

  // Extraire hints
  const hintsMatch = qText.match(/hints:\s*\[(.*?)\]/s);
  if (hintsMatch) {
    const hintsStr = hintsMatch[1];
    const hints = hintsStr.match(/['"]([^'"]+)['"]/g);
    if (hints) {
      question.hints = hints.map(h => h.replace(/['"]/g, ''));
    }
  }

  return question;
}

// Fonction de validation d'un exercice
function validateExercise(exercise) {
  const errors = [];
  const warnings = [];

  // Filtrer uniquement CP, CE1, CE2
  if (!['CP', 'CE1', 'CE2'].includes(exercise.level)) {
    return { errors, warnings, skip: true };
  }

  // 1. Vérifier la structure de base
  if (!exercise.id) {
    errors.push({ field: 'id', message: 'ID manquant' });
  } else {
    // Vérifier le format de l'ID
    const validIdPattern = /^[a-z-]+-(?:cp|ce1|ce2)-\d+$/i;
    if (!validIdPattern.test(exercise.id)) {
      warnings.push({ field: 'id', message: `Format d'ID non standard: ${exercise.id}` });
    }
  }

  if (!exercise.title) {
    errors.push({ field: 'title', message: 'Titre manquant' });
  }

  // Vérifier subject
  const validSubjects = ['maths', 'francais', 'sciences', 'anglais', 'histoire-geo', 'decouverte'];
  if (!exercise.subject) {
    errors.push({ field: 'subject', message: 'Matière manquante' });
  } else if (!validSubjects.includes(exercise.subject)) {
    errors.push({ field: 'subject', message: `Matière invalide: ${exercise.subject}` });
  }

  // Vérifier level
  if (!exercise.level) {
    errors.push({ field: 'level', message: 'Niveau manquant' });
  }

  // Vérifier difficulty
  if (exercise.difficulty === null) {
    errors.push({ field: 'difficulty', message: 'Difficulté manquante' });
  } else if (exercise.difficulty < 1 || exercise.difficulty > 3) {
    errors.push({ field: 'difficulty', message: `Difficulté invalide: ${exercise.difficulty} (doit être 1-3)` });
  }

  // Vérifier description
  if (!exercise.description) {
    errors.push({ field: 'description', message: 'Description manquante' });
  }

  // Vérifier estimatedTime
  if (exercise.estimatedTime === null) {
    errors.push({ field: 'estimatedTime', message: 'Temps estimé manquant' });
  } else if (typeof exercise.estimatedTime !== 'number') {
    errors.push({ field: 'estimatedTime', message: 'Temps estimé doit être un nombre' });
  }

  // Vérifier skills
  if (!exercise.skills || exercise.skills.length === 0) {
    errors.push({ field: 'skills', message: 'Compétences manquantes (tableau vide)' });
  }

  // Vérifier questions
  if (!exercise.questions || exercise.questions.length === 0) {
    errors.push({ field: 'questions', message: 'Aucune question trouvée' });
  } else {
    if (exercise.questions.length !== 10) {
      warnings.push({ field: 'questions', message: `${exercise.questions.length} questions au lieu de 10` });
    }

    // Vérifier chaque question
    const questionIds = new Set();
    exercise.questions.forEach((q, idx) => {
      const qErrors = validateQuestion(q, idx + 1, exercise.level);
      errors.push(...qErrors.map(e => ({ ...e, question: idx + 1 })));

      // Vérifier l'unicité des IDs de questions
      if (q.id) {
        if (questionIds.has(q.id)) {
          errors.push({ field: 'question.id', question: idx + 1, message: `ID de question dupliqué: ${q.id}` });
        }
        questionIds.add(q.id);
      }
    });
  }

  return { errors, warnings, skip: false };
}

// Fonction de validation d'une question
function validateQuestion(question, questionNumber, level) {
  const errors = [];

  // Vérifier id
  if (!question.id) {
    errors.push({ field: 'question.id', message: 'ID de question manquant' });
  } else if (question.id !== `q${questionNumber}`) {
    errors.push({ field: 'question.id', message: `ID attendu: q${questionNumber}, trouvé: ${question.id}` });
  }

  // Vérifier question text
  if (!question.question || question.question.trim() === '') {
    errors.push({ field: 'question.question', message: 'Texte de la question vide' });
  }

  // Vérifier type
  const validTypes = ['multiple-choice', 'true-false', 'fill-blank'];
  if (!question.type) {
    errors.push({ field: 'question.type', message: 'Type de question manquant' });
  } else if (!validTypes.includes(question.type)) {
    errors.push({ field: 'question.type', message: `Type invalide: ${question.type}` });
  }

  // Validation spécifique par type
  if (question.type === 'multiple-choice') {
    // Vérifier options
    if (!question.options || question.options.length === 0) {
      errors.push({ field: 'question.options', message: 'Options manquantes pour QCM' });
    } else if (question.options.length !== 4) {
      errors.push({ field: 'question.options', message: `QCM devrait avoir 4 options, trouvé: ${question.options.length}` });
    }

    // Vérifier que correctAnswer est dans les options
    if (question.correctAnswer && question.options) {
      if (!question.options.includes(question.correctAnswer)) {
        errors.push({
          field: 'question.correctAnswer',
          message: `Réponse "${question.correctAnswer}" n'est pas dans les options: [${question.options.join(', ')}]`
        });
      }
    }
  }

  if (question.type === 'true-false') {
    // Vérifier que correctAnswer est 'Vrai' ou 'Faux'
    if (question.correctAnswer !== 'Vrai' && question.correctAnswer !== 'Faux') {
      errors.push({
        field: 'question.correctAnswer',
        message: `Pour true-false, correctAnswer doit être 'Vrai' ou 'Faux', trouvé: '${question.correctAnswer}'`
      });
    }
  }

  if (question.type === 'fill-blank') {
    // Vérifier que la réponse n'est pas trop complexe
    if (question.correctAnswer && question.correctAnswer.includes(' ')) {
      errors.push({
        field: 'question.correctAnswer',
        message: `Réponse fill-blank trop complexe (contient des espaces): "${question.correctAnswer}"`
      });
    }
  }

  // Vérifier correctAnswer
  if (!question.correctAnswer) {
    errors.push({ field: 'question.correctAnswer', message: 'Réponse correcte manquante' });
  }

  // Vérifier explanation
  if (!question.explanation || question.explanation.trim() === '') {
    errors.push({ field: 'question.explanation', message: 'Explication manquante' });
  }

  // Vérifier hints
  if (!question.hints || question.hints.length === 0) {
    errors.push({ field: 'question.hints', message: 'Aucun indice fourni' });
  }

  return errors;
}

// Fonction principale
function runTests() {
  console.log('='.repeat(80));
  console.log('TEST AUTOMATISÉ DES EXERCICES - CP, CE1, CE2');
  console.log('='.repeat(80));
  console.log('\n');

  // Extraire les exercices
  console.log('Extraction des exercices du fichier...');
  const exerciseBlocks = extractExercises(content);
  console.log(`Trouvé ${exerciseBlocks.length} blocs d'exercices\n`);

  // Parser et valider chaque exercice
  exerciseBlocks.forEach(({ text, startLine }) => {
    const exercise = parseExercise(text);

    // Filtrer uniquement CP, CE1, CE2
    if (!['CP', 'CE1', 'CE2'].includes(exercise.level)) {
      return;
    }

    stats.total++;
    stats.byLevel[exercise.level]++;

    if (exercise.subject) {
      if (!stats.bySubject[exercise.subject]) {
        stats.bySubject[exercise.subject] = { CP: 0, CE1: 0, CE2: 0 };
      }
      stats.bySubject[exercise.subject][exercise.level]++;
    }

    stats.totalQuestions += exercise.questions.length;

    // Valider
    const { errors, warnings } = validateExercise(exercise);

    if (errors.length === 0) {
      stats.success++;
    } else {
      errors.forEach(error => {
        stats.errors.push({
          exerciseId: exercise.id,
          line: startLine,
          ...error
        });
      });
    }

    warnings.forEach(warning => {
      stats.warnings.push({
        exerciseId: exercise.id,
        line: startLine,
        ...warning
      });
    });
  });

  // Afficher les résultats
  console.log('\n' + '='.repeat(80));
  console.log('STATISTIQUES');
  console.log('='.repeat(80));
  console.log(`Total d'exercices testés: ${stats.total}`);
  console.log(`  - CP:  ${stats.byLevel.CP} exercices`);
  console.log(`  - CE1: ${stats.byLevel.CE1} exercices`);
  console.log(`  - CE2: ${stats.byLevel.CE2} exercices`);
  console.log(`\nTotal de questions testées: ${stats.totalQuestions}`);

  console.log('\nRépartition par matière:');
  Object.keys(stats.bySubject).sort().forEach(subject => {
    const counts = stats.bySubject[subject];
    console.log(`  ${subject}:`);
    console.log(`    CP: ${counts.CP}, CE1: ${counts.CE1}, CE2: ${counts.CE2}`);
  });

  // Afficher les erreurs
  console.log('\n' + '='.repeat(80));
  console.log(`ERREURS TROUVÉES: ${stats.errors.length}`);
  console.log('='.repeat(80));

  if (stats.errors.length > 0) {
    const errorsByExercise = {};
    stats.errors.forEach(error => {
      if (!errorsByExercise[error.exerciseId]) {
        errorsByExercise[error.exerciseId] = [];
      }
      errorsByExercise[error.exerciseId].push(error);
    });

    Object.keys(errorsByExercise).forEach(exerciseId => {
      console.log(`\n[${exerciseId}]`);
      errorsByExercise[exerciseId].forEach(error => {
        const location = error.question ? `Question ${error.question}` : 'Exercice';
        console.log(`  ${location} - ${error.field}: ${error.message}`);
      });
    });
  } else {
    console.log('Aucune erreur trouvée!');
  }

  // Afficher les avertissements
  console.log('\n' + '='.repeat(80));
  console.log(`AVERTISSEMENTS: ${stats.warnings.length}`);
  console.log('='.repeat(80));

  if (stats.warnings.length > 0) {
    const warningsByExercise = {};
    stats.warnings.forEach(warning => {
      if (!warningsByExercise[warning.exerciseId]) {
        warningsByExercise[warning.exerciseId] = [];
      }
      warningsByExercise[warning.exerciseId].push(warning);
    });

    Object.keys(warningsByExercise).forEach(exerciseId => {
      console.log(`\n[${exerciseId}]`);
      warningsByExercise[exerciseId].forEach(warning => {
        const location = warning.question ? `Question ${warning.question}` : 'Exercice';
        console.log(`  ${location} - ${warning.field}: ${warning.message}`);
      });
    });
  } else {
    console.log('Aucun avertissement');
  }

  // Résumé final
  console.log('\n' + '='.repeat(80));
  console.log('RÉSUMÉ FINAL');
  console.log('='.repeat(80));

  const successRate = stats.total > 0 ? ((stats.success / stats.total) * 100).toFixed(1) : 0;
  const status = stats.errors.length === 0 ? 'SUCCÈS ✓' : 'ÉCHEC ✗';

  console.log(`Status: ${status}`);
  console.log(`Score: ${stats.success}/${stats.total} exercices OK (${successRate}%)`);
  console.log(`Erreurs: ${stats.errors.length}`);
  console.log(`Avertissements: ${stats.warnings.length}`);

  console.log('\n' + '='.repeat(80));

  return stats.errors.length === 0 ? 0 : 1;
}

// Exécuter les tests
const exitCode = runTests();
process.exit(exitCode);
