/**
 * Bibliothèque d'Exercices par Niveau et Matière
 * Exercices pré-enregistrés pour pratiquer sans professeur
 */

import type { StudentLevel } from '@/store/useAppStore'

export type Subject = 'maths' | 'francais' | 'sciences' | 'histoire-geo' | 'anglais' | 'decouverte' | 'espagnol' | 'allemand' | 'italien' | 'latin' | 'arabe' | 'emc' | 'technologie' | 'arts-plastiques'
export type Difficulty = 1 | 2 | 3 | 4 | 5

export interface Exercise {
  id: string
  title: string
  subject: Subject
  level: StudentLevel
  difficulty: Difficulty
  description: string
  questions: ExerciseQuestion[]
  estimatedTime: number // en minutes
  skills: string[] // Compétences travaillées
}

export interface ExerciseQuestion {
  id: string
  question: string
  type: 'multiple-choice' | 'open-ended' | 'true-false' | 'fill-blank'
  options?: string[] // Pour QCM
  correctAnswer: string | string[] // Réponse(s) correcte(s)
  explanation: string // Explication pédagogique
  hints?: string[] // Indices progressifs
}

// Import des exercices étendus
import { EXTENDED_EXERCISES } from '@/data/exercisesLibraryExtended'

/**
 * Base de données d'exercices
 */
export const EXERCISE_LIBRARY: Exercise[] = [
  // ========== MATHÉMATIQUES ==========

  // CP - Maths
  {
    id: 'math-cp-001',
    title: 'Compter jusqu\'à 10',
    subject: 'maths',
    level: 'CP',
    difficulty: 1,
    description: 'Apprends à compter les objets jusqu\'à 10',
    estimatedTime: 15,
    skills: ['Dénombrement', 'Nombres jusqu\'à 10'],
    questions: [
      {
        id: 'q1',
        question: 'Combien y a-t-il de pommes ? 🍎🍎🍎🍎🍎',
        type: 'multiple-choice',
        options: ['3', '5', '7', '10'],
        correctAnswer: '5',
        explanation: 'On compte une par une : 1, 2, 3, 4, 5. Il y a 5 pommes !',
        hints: ['Essaie de compter sur tes doigts', 'Pointe chaque pomme en comptant']
      },
      {
        id: 'q2',
        question: 'Quel nombre vient après 7 ?',
        type: 'multiple-choice',
        options: ['6', '8', '9', '10'],
        correctAnswer: '8',
        explanation: 'Après 7, on compte 8. La suite est : 7, 8, 9, 10...',
        hints: ['Récite la comptine des nombres', 'Pense à ce qui vient après dans l\'ordre']
      },
      {
        id: 'q3',
        question: 'Combien y a-t-il d\'étoiles ? ⭐⭐⭐',
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        explanation: 'Il y a 3 étoiles ! Compte-les bien : 1, 2, 3.',
        hints: ['Compte chaque étoile', 'Utilise tes doigts pour t\'aider']
      },
      {
        id: 'q4',
        question: 'Quel nombre vient juste avant 5 ?',
        type: 'multiple-choice',
        options: ['3', '4', '6', '7'],
        correctAnswer: '4',
        explanation: 'Avant 5, c\'est 4. La comptine : 1, 2, 3, 4, 5...',
        hints: ['Récite la comptine des nombres', 'Quel nombre dis-tu juste avant 5 ?']
      },
      {
        id: 'q5',
        question: 'Combien de doigts as-tu sur une main ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: 'Tu as 5 doigts sur une main ! Compte-les : le pouce, l\'index, le majeur, l\'annulaire et l\'auriculaire.',
        hints: ['Regarde ta main', 'Compte tes doigts un par un']
      },
      {
        id: 'q6',
        question: 'Combien y a-t-il de ballons ? 🎈🎈🎈🎈🎈🎈🎈🎈',
        type: 'multiple-choice',
        options: ['6', '7', '8', '9'],
        correctAnswer: '8',
        explanation: 'Il y a 8 ballons. Compte bien : 1, 2, 3, 4, 5, 6, 7, 8 !',
        hints: ['Compte doucement', 'N\'oublie pas de compter tous les ballons']
      },
      {
        id: 'q7',
        question: 'Quel est le plus grand nombre : 3 ou 9 ?',
        type: 'multiple-choice',
        options: ['3', '9', 'C\'est pareil'],
        correctAnswer: '9',
        explanation: '9 est plus grand que 3. Dans la comptine, 9 vient après 3, donc c\'est plus grand !',
        hints: ['Lequel vient en dernier dans la comptine ?', 'Plus c\'est loin dans la comptine, plus c\'est grand']
      },
      {
        id: 'q8',
        question: 'Combien font 10 doigts moins 0 doigt ?',
        type: 'fill-blank',
        correctAnswer: '10',
        explanation: 'Si tu as 10 doigts et que tu n\'en enlèves aucun, tu as toujours 10 doigts !',
        hints: ['Tu ne caches aucun doigt', 'Tu gardes tous tes doigts']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : 6 vient après 7',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! 6 vient AVANT 7. La comptine c\'est : 5, 6, 7, 8...',
        hints: ['Récite la comptine', '6 ou 7, lequel dis-tu en premier ?']
      },
      {
        id: 'q10',
        question: 'Combien y a-t-il de cœurs ? ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️',
        type: 'fill-blank',
        correctAnswer: '10',
        explanation: 'Il y a 10 cœurs ! C\'est le plus grand nombre à un chiffre. Bravo !',
        hints: ['Compte sur tes 10 doigts', 'C\'est le dernier nombre avant 11']
      }
    ]
  },
  {
    id: 'math-cp-002',
    title: 'Additions simples',
    subject: 'maths',
    level: 'CP',
    difficulty: 2,
    description: 'Additions avec des nombres jusqu\'à 10',
    estimatedTime: 18,
    skills: ['Addition', 'Calcul mental'],
    questions: [
      {
        id: 'q1',
        question: 'Combien font 2 + 3 ?',
        type: 'multiple-choice',
        options: ['4', '5', '6', '7'],
        correctAnswer: '5',
        explanation: 'Si tu as 2 bonbons et qu\'on t\'en donne 3 de plus, tu en as 5 en tout !',
        hints: ['Compte sur tes doigts', 'Lève 2 doigts, puis 3 autres']
      },
      {
        id: 'q2',
        question: '3 + 4 = ?',
        type: 'fill-blank',
        correctAnswer: '7',
        explanation: '3 + 4 = 7. Tu peux compter : 4, 5, 6, 7 (en ajoutant 3)',
        hints: ['Pars de 4 et ajoute 3', 'Utilise tes doigts']
      },
      {
        id: 'q3',
        question: 'Marie a 1 bille. Son ami lui en donne 4. Combien de billes a-t-elle maintenant ?',
        type: 'multiple-choice',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        explanation: '1 + 4 = 5. Marie avait 1 bille, on lui en donne 4, elle en a 5 en tout !',
        hints: ['C\'est une addition', 'Combien font 1 + 4 ?', 'La réponse est 5']
      },
      {
        id: 'q4',
        question: 'Combien font 5 + 2 ?',
        type: 'fill-blank',
        correctAnswer: '7',
        explanation: '5 + 2 = 7. Pars de 5 et ajoute 2 : cinq, six, sept !',
        hints: ['Commence à 5', 'Ajoute 2 en comptant', 'C\'est 7']
      },
      {
        id: 'q5',
        question: 'Combien font 1 + 1 ?',
        type: 'multiple-choice',
        options: ['1', '2', '3', '11'],
        correctAnswer: '2',
        explanation: '1 + 1 = 2. Si tu as un bonbon et qu\'on t\'en donne un autre, tu en as deux !',
        hints: ['C\'est très facile', 'Un plus un', 'La réponse est 2']
      },
      {
        id: 'q6',
        question: '4 + 4 = ?',
        type: 'fill-blank',
        correctAnswer: '8',
        explanation: '4 + 4 = 8. C\'est le double de 4 ! Quand on additionne deux fois le même nombre, on appelle ça un double.',
        hints: ['C\'est le double de 4', '4 et encore 4', 'La réponse est 8']
      },
      {
        id: 'q7',
        question: 'Dans le jardin, il y a 3 papillons rouges et 5 papillons bleus. Combien y a-t-il de papillons en tout ?',
        type: 'multiple-choice',
        options: ['6', '7', '8', '9'],
        correctAnswer: '8',
        explanation: '3 + 5 = 8. Il faut additionner les papillons rouges et les papillons bleus pour trouver le total.',
        hints: ['Combien de papillons rouges ? 3', 'Combien de papillons bleus ? 5', '3 + 5 = 8']
      },
      {
        id: 'q8',
        question: 'Combien font 6 + 1 ?',
        type: 'fill-blank',
        correctAnswer: '7',
        explanation: '6 + 1 = 7. Quand on ajoute 1, on prend le nombre qui vient juste après dans la comptine !',
        hints: ['Quel nombre vient après 6 ?', 'C\'est juste après dans la comptine', 'La réponse est 7']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : 2 + 4 = 6',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 2 + 4 = 6. Compte sur tes doigts pour vérifier !',
        hints: ['Compte sur tes doigts', '2, 3, 4, 5, 6', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Combien font 3 + 3 ?',
        type: 'multiple-choice',
        options: ['3', '5', '6', '9'],
        correctAnswer: '6',
        explanation: '3 + 3 = 6. C\'est le double de 3 !',
        hints: ['C\'est le double de 3', '3 et encore 3', 'La réponse est 6']
      }
    ]
  },

  // ========== CE1 - Mathématiques ==========

  {
    id: 'math-ce1-001',
    title: 'Tables de multiplication (2 et 5)',
    subject: 'maths',
    level: 'CE1',
    difficulty: 2,
    description: 'Révise les tables de 2 et 5',
    estimatedTime: 15,
    skills: ['Multiplication', 'Tables'],
    questions: [
      {
        id: 'q1',
        question: '2 × 5 = ?',
        type: 'multiple-choice',
        options: ['7', '10', '12', '15'],
        correctAnswer: '10',
        explanation: '2 × 5 = 10. C\'est comme 5 + 5 = 10',
        hints: ['2 fois 5, c\'est 5 + 5', 'Compte de 5 en 5 : 5, 10']
      },
      {
        id: 'q2',
        question: '5 × 3 = ?',
        type: 'fill-blank',
        correctAnswer: '15',
        explanation: '5 × 3 = 15. Tu ajoutes 5 trois fois : 5 + 5 + 5 = 15',
        hints: ['Compte : 5, 10, 15', 'C\'est 3 groupes de 5']
      },
      {
        id: 'q3',
        question: '2 × 8 = ?',
        type: 'multiple-choice',
        options: ['12', '14', '16', '18'],
        correctAnswer: '16',
        explanation: '2 × 8 = 16. C\'est 8 + 8 = 16',
        hints: ['Double 8', 'Compte de 2 en 2 huit fois']
      },
      {
        id: 'q4',
        question: '5 × 5 = ?',
        type: 'fill-blank',
        correctAnswer: '25',
        explanation: '5 × 5 = 25. Cinq fois cinq égale vingt-cinq',
        hints: ['5 + 5 + 5 + 5 + 5', 'Compte par 5 : 5, 10, 15, 20, 25']
      },
      {
        id: 'q5',
        question: '2 × 3 = ?',
        type: 'multiple-choice',
        options: ['4', '5', '6', '7'],
        correctAnswer: '6',
        explanation: '2 × 3 = 6. C\'est 3 + 3 = 6',
        hints: ['Double 3', 'Deux groupes de 3']
      },
      {
        id: 'q6',
        question: '5 × 4 = ?',
        type: 'fill-blank',
        correctAnswer: '20',
        explanation: '5 × 4 = 20. Quatre fois cinq égale vingt',
        hints: ['5 + 5 + 5 + 5', 'Compte : 5, 10, 15, 20']
      },
      {
        id: 'q7',
        question: '2 × 7 = ?',
        type: 'multiple-choice',
        options: ['12', '13', '14', '15'],
        correctAnswer: '14',
        explanation: '2 × 7 = 14. C\'est 7 + 7 = 14',
        hints: ['Double 7', 'Sept fois deux']
      },
      {
        id: 'q8',
        question: 'Julie a 2 paquets de 6 bonbons. Combien a-t-elle de bonbons ?',
        type: 'fill-blank',
        correctAnswer: '12',
        explanation: '2 × 6 = 12 bonbons. Elle a deux groupes de 6',
        hints: ['Fais 2 × 6', '6 + 6 = ?']
      },
      {
        id: 'q9',
        question: '5 × 2 = ?',
        type: 'true-false',
        options: ['10', 'Faux'],
        correctAnswer: '10',
        explanation: '5 × 2 = 10. Cinq fois deux égale dix',
        hints: ['5 + 5', 'Deux groupes de 5']
      },
      {
        id: 'q10',
        question: 'Tom a 5 boîtes avec 6 crayons dans chaque boîte. Combien a-t-il de crayons ?',
        type: 'multiple-choice',
        options: ['25', '28', '30', '35'],
        correctAnswer: '30',
        explanation: '5 × 6 = 30 crayons. Il y a 5 groupes de 6',
        hints: ['Fais 5 × 6', 'Compte : 6, 12, 18, 24, 30']
      }
    ]
  },

  {
    id: 'math-ce1-002',
    title: 'Additions à 2 chiffres',
    subject: 'maths',
    level: 'CE1',
    difficulty: 2,
    description: 'Apprends à additionner des nombres jusqu\'à 100',
    estimatedTime: 15,
    skills: ['Addition', 'Calcul mental'],
    questions: [
      {
        id: 'q1',
        question: '23 + 15 = ?',
        type: 'fill-blank',
        correctAnswer: '38',
        explanation: '23 + 15 = 38. On additionne 20 + 10 = 30, puis 3 + 5 = 8, donc 30 + 8 = 38',
        hints: ['Additionne les dizaines d\'abord', '20 + 10 = 30, puis 3 + 5 = 8']
      },
      {
        id: 'q2',
        question: '42 + 27 = ?',
        type: 'multiple-choice',
        options: ['59', '69', '79', '89'],
        correctAnswer: '69',
        explanation: '42 + 27 = 69. Tu peux faire 42 + 20 = 62, puis 62 + 7 = 69',
        hints: ['Ajoute 20 d\'abord', 'Puis ajoute les 7 unités']
      },
      {
        id: 'q3',
        question: '35 + 25 = ?',
        type: 'fill-blank',
        correctAnswer: '60',
        explanation: '35 + 25 = 60. 30 + 20 = 50, et 5 + 5 = 10, donc 50 + 10 = 60',
        hints: ['30 + 20 = ?', '5 + 5 = 10']
      },
      {
        id: 'q4',
        question: '18 + 32 = ?',
        type: 'multiple-choice',
        options: ['40', '45', '50', '55'],
        correctAnswer: '50',
        explanation: '18 + 32 = 50. Tu peux faire 18 + 30 = 48, puis 48 + 2 = 50',
        hints: ['Ajoute 30 d\'abord', '18 + 30 = 48']
      },
      {
        id: 'q5',
        question: '56 + 23 = ?',
        type: 'fill-blank',
        correctAnswer: '79',
        explanation: '56 + 23 = 79. 50 + 20 = 70, et 6 + 3 = 9, donc 70 + 9 = 79',
        hints: ['Additionne les dizaines', '50 + 20 = 70']
      },
      {
        id: 'q6',
        question: 'Marc a 34 billes. Il en gagne 15. Combien en a-t-il maintenant ?',
        type: 'multiple-choice',
        options: ['39', '49', '59', '69'],
        correctAnswer: '49',
        explanation: '34 + 15 = 49 billes. Marc a gagné 15 billes',
        hints: ['Fais 34 + 15', 'Ajoute d\'abord 10, puis 5']
      },
      {
        id: 'q7',
        question: '61 + 28 = ?',
        type: 'fill-blank',
        correctAnswer: '89',
        explanation: '61 + 28 = 89. 60 + 20 = 80, et 1 + 8 = 9, donc 80 + 9 = 89',
        hints: ['60 + 20 = ?', '1 + 8 = 9']
      },
      {
        id: 'q8',
        question: '45 + 45 = ?',
        type: 'multiple-choice',
        options: ['80', '85', '90', '95'],
        correctAnswer: '90',
        explanation: '45 + 45 = 90. C\'est le double de 45',
        hints: ['Double de 45', '40 + 40 = 80, et 5 + 5 = 10']
      },
      {
        id: 'q9',
        question: 'Julie a 27 autocollants. Sa soeur lui en donne 32. Combien en a-t-elle ?',
        type: 'fill-blank',
        correctAnswer: '59',
        explanation: '27 + 32 = 59 autocollants. 20 + 30 = 50, et 7 + 2 = 9',
        hints: ['Fais 27 + 32', 'Additionne les dizaines puis les unités']
      },
      {
        id: 'q10',
        question: '73 + 16 = ?',
        type: 'multiple-choice',
        options: ['79', '83', '89', '93'],
        correctAnswer: '89',
        explanation: '73 + 16 = 89. 70 + 10 = 80, et 3 + 6 = 9, donc 80 + 9 = 89',
        hints: ['70 + 10 = 80', '3 + 6 = 9']
      }
    ]
  },

  {
    id: 'math-ce1-003',
    title: 'Soustractions simples',
    subject: 'maths',
    level: 'CE1',
    difficulty: 2,
    description: 'Entraîne-toi aux soustractions',
    estimatedTime: 15,
    skills: ['Soustraction', 'Calcul mental'],
    questions: [
      {
        id: 'q1',
        question: '45 - 12 = ?',
        type: 'fill-blank',
        correctAnswer: '33',
        explanation: '45 - 12 = 33. Tu enlèves 10 d\'abord (45 - 10 = 35), puis 2 (35 - 2 = 33)',
        hints: ['Enlève 10 d\'abord', '45 - 10 = 35']
      },
      {
        id: 'q2',
        question: '68 - 25 = ?',
        type: 'multiple-choice',
        options: ['33', '43', '53', '63'],
        correctAnswer: '43',
        explanation: '68 - 25 = 43. 68 - 20 = 48, puis 48 - 5 = 43',
        hints: ['Enlève 20 d\'abord', '68 - 20 = 48']
      },
      {
        id: 'q3',
        question: '50 - 17 = ?',
        type: 'fill-blank',
        correctAnswer: '33',
        explanation: '50 - 17 = 33. Tu peux faire 50 - 10 = 40, puis 40 - 7 = 33',
        hints: ['50 - 10 = 40', 'Puis enlève 7']
      },
      {
        id: 'q4',
        question: '84 - 32 = ?',
        type: 'multiple-choice',
        options: ['42', '52', '62', '72'],
        correctAnswer: '52',
        explanation: '84 - 32 = 52. 80 - 30 = 50, et 4 - 2 = 2, donc 50 + 2 = 52',
        hints: ['Soustrais les dizaines', '80 - 30 = 50']
      },
      {
        id: 'q5',
        question: 'Tom a 39 bonbons. Il en mange 14. Combien lui en reste-t-il ?',
        type: 'fill-blank',
        correctAnswer: '25',
        explanation: '39 - 14 = 25 bonbons. Il lui reste 25 bonbons',
        hints: ['Fais 39 - 14', '39 - 10 = 29, puis 29 - 4']
      },
      {
        id: 'q6',
        question: '76 - 41 = ?',
        type: 'multiple-choice',
        options: ['25', '35', '45', '55'],
        correctAnswer: '35',
        explanation: '76 - 41 = 35. 70 - 40 = 30, et 6 - 1 = 5, donc 30 + 5 = 35',
        hints: ['70 - 40 = ?', '6 - 1 = 5']
      },
      {
        id: 'q7',
        question: '90 - 28 = ?',
        type: 'fill-blank',
        correctAnswer: '62',
        explanation: '90 - 28 = 62. 90 - 20 = 70, puis 70 - 8 = 62',
        hints: ['Enlève 20 d\'abord', '90 - 20 = 70']
      },
      {
        id: 'q8',
        question: '53 - 27 = ?',
        type: 'multiple-choice',
        options: ['16', '26', '36', '46'],
        correctAnswer: '26',
        explanation: '53 - 27 = 26. Tu peux faire 53 - 20 = 33, puis 33 - 7 = 26',
        hints: ['53 - 20 = 33', 'Puis enlève 7']
      },
      {
        id: 'q9',
        question: 'Il y a 65 oiseaux sur un arbre. 23 s\'envolent. Combien en reste-t-il ?',
        type: 'fill-blank',
        correctAnswer: '42',
        explanation: '65 - 23 = 42 oiseaux. Il reste 42 oiseaux sur l\'arbre',
        hints: ['Fais 65 - 23', '60 - 20 = 40']
      },
      {
        id: 'q10',
        question: '81 - 36 = ?',
        type: 'multiple-choice',
        options: ['35', '45', '55', '65'],
        correctAnswer: '45',
        explanation: '81 - 36 = 45. 80 - 30 = 50, et 1 - 6 : on emprunte 1, donc 11 - 6 = 5, résultat 45',
        hints: ['Commence par les dizaines', '80 - 30 = 50']
      }
    ]
  },

  {
    id: 'math-ce1-004',
    title: 'Lire l\'heure',
    subject: 'maths',
    level: 'CE1',
    difficulty: 2,
    description: 'Apprends à lire l\'heure sur une horloge',
    estimatedTime: 12,
    skills: ['Heure', 'Mesure du temps'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle heure est-il quand la petite aiguille est sur 3 et la grande sur 12 ?',
        type: 'multiple-choice',
        options: ['2 heures', '3 heures', '12 heures', '4 heures'],
        correctAnswer: '3 heures',
        explanation: 'C\'est 3 heures. La petite aiguille indique les heures',
        hints: ['Regarde la petite aiguille', 'La grande sur 12 signifie pile']
      },
      {
        id: 'q2',
        question: 'Il est 8 heures et demie. Où est la grande aiguille ?',
        type: 'multiple-choice',
        options: ['Sur le 12', 'Sur le 3', 'Sur le 6', 'Sur le 9'],
        correctAnswer: 'Sur le 6',
        explanation: 'À 8h30 (et demie), la grande aiguille est sur le 6',
        hints: ['Et demie = 30 minutes', 'Le 6 est à la moitié de l\'horloge']
      },
      {
        id: 'q3',
        question: 'Quelle heure est-il quand la petite aiguille est sur 7 et la grande sur 12 ?',
        type: 'fill-blank',
        correctAnswer: '7 heures',
        explanation: 'C\'est 7 heures pile. La grande aiguille sur 12 signifie l\'heure pile',
        hints: ['Petite aiguille sur 7', 'Grande sur 12 = pile']
      },
      {
        id: 'q4',
        question: 'Combien de minutes y a-t-il dans une demi-heure ?',
        type: 'multiple-choice',
        options: ['15 minutes', '20 minutes', '30 minutes', '60 minutes'],
        correctAnswer: '30 minutes',
        explanation: 'Une demi-heure = 30 minutes. C\'est la moitié d\'une heure',
        hints: ['Demi = moitié', 'Une heure = 60 minutes']
      },
      {
        id: 'q5',
        question: 'Il est 10 heures et quart. La grande aiguille est sur quel chiffre ?',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: 'À 10h15 (et quart), la grande aiguille est sur le 3',
        hints: ['Et quart = 15 minutes', 'Le 3 est à un quart de l\'horloge']
      },
      {
        id: 'q6',
        question: 'Quelle heure est-il quand la petite aiguille est entre 2 et 3, et la grande sur 6 ?',
        type: 'multiple-choice',
        options: ['2 heures', '2h30', '3 heures', '3h30'],
        correctAnswer: '2h30',
        explanation: 'C\'est 2h30. La petite aiguille est entre 2 et 3, la grande sur 6',
        hints: ['La petite est entre 2 et 3', 'Grande sur 6 = et demie']
      },
      {
        id: 'q7',
        question: 'Combien de minutes y a-t-il dans une heure ?',
        type: 'fill-blank',
        correctAnswer: '60',
        explanation: 'Il y a 60 minutes dans une heure complète',
        hints: ['C\'est un tour complet de la grande aiguille', 'Pense à un tour d\'horloge']
      },
      {
        id: 'q8',
        question: 'Il est 5h15. Peut-on dire aussi :',
        type: 'multiple-choice',
        options: ['5 heures et demie', '5 heures et quart', '5 heures moins le quart', '6 heures'],
        correctAnswer: '5 heures et quart',
        explanation: '5h15 = 5 heures et quart. 15 minutes = un quart d\'heure',
        hints: ['15 minutes = un quart', 'Quart = 1/4 d\'heure']
      },
      {
        id: 'q9',
        question: 'La récréation commence à 10 heures et dure 15 minutes. À quelle heure finit-elle ?',
        type: 'fill-blank',
        correctAnswer: '10h15',
        explanation: 'Elle finit à 10h15. On ajoute 15 minutes à 10 heures',
        hints: ['10h + 15 minutes', '10 heures et quart']
      },
      {
        id: 'q10',
        question: 'Quelle heure est-il quand la petite aiguille est sur 12 et la grande aussi ?',
        type: 'multiple-choice',
        options: ['11 heures', '12 heures', '1 heure', 'Minuit ou midi'],
        correctAnswer: 'Minuit ou midi',
        explanation: 'C\'est minuit (0h) ou midi (12h). Les deux aiguilles sont sur le 12',
        hints: ['Les deux aiguilles sont ensemble', 'Début de journée ou milieu']
      }
    ]
  },

  {
    id: 'math-ce1-005',
    title: 'La monnaie : euros et centimes',
    subject: 'maths',
    level: 'CE1',
    difficulty: 2,
    description: 'Apprends à compter l\'argent',
    estimatedTime: 15,
    skills: ['Monnaie', 'Addition', 'Euros'],
    questions: [
      {
        id: 'q1',
        question: 'Combien font 2 pièces de 1 euro ?',
        type: 'multiple-choice',
        options: ['1 euro', '2 euros', '3 euros', '5 euros'],
        correctAnswer: '2 euros',
        explanation: '2 pièces de 1€ = 2€. On additionne 1 + 1 = 2',
        hints: ['1€ + 1€', 'Compte : 1, 2']
      },
      {
        id: 'q2',
        question: 'Combien font 1 pièce de 2€ et 1 pièce de 1€ ? (écris le nombre en euros)',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: '2€ + 1€ = 3€',
        hints: ['Additionne 2 et 1', '2 + 1 = ?']
      },
      {
        id: 'q3',
        question: 'Un bonbon coûte 50 centimes. Combien de centimes font 2 bonbons ?',
        type: 'multiple-choice',
        options: ['50 centimes', '75 centimes', '1 euro', '2 euros'],
        correctAnswer: '1 euro',
        explanation: '50c + 50c = 100c = 1€. Deux bonbons coûtent 1 euro',
        hints: ['50 + 50 = ?', '100 centimes = 1 euro']
      },
      {
        id: 'q4',
        question: 'Tu as un billet de 5€. Tu achètes un cahier à 3€. Combien te reste-t-il ? (écris le nombre)',
        type: 'fill-blank',
        correctAnswer: '2',
        explanation: '5€ - 3€ = 2€. Il te reste 2 euros',
        hints: ['Fais 5 - 3', 'C\'est une soustraction']
      },
      {
        id: 'q5',
        question: 'Combien font 5 pièces de 1 euro ?',
        type: 'multiple-choice',
        options: ['3 euros', '4 euros', '5 euros', '6 euros'],
        correctAnswer: '5 euros',
        explanation: '5 pièces de 1€ = 5€. On compte 1, 2, 3, 4, 5 euros',
        hints: ['Compte les pièces', '1 + 1 + 1 + 1 + 1']
      },
      {
        id: 'q6',
        question: 'Un crayon coûte 1€ et une gomme 50 centimes. Combien coûtent les deux ensemble ? (écris le prix, ex: 1,50)',
        type: 'fill-blank',
        correctAnswer: '1,50',
        explanation: '1€ + 0,50€ = 1,50€. Ensemble ils coûtent 1 euro et 50 centimes',
        hints: ['1 euro + 50 centimes', 'C\'est 1€50']
      },
      {
        id: 'q7',
        question: 'Tu as 3 pièces de 2€. Combien d\'euros as-tu ?',
        type: 'multiple-choice',
        options: ['4 euros', '5 euros', '6 euros', '8 euros'],
        correctAnswer: '6 euros',
        explanation: '3 × 2€ = 6€. Tu as 6 euros en tout',
        hints: ['2 + 2 + 2', 'Compte par 2 : 2, 4, 6']
      },
      {
        id: 'q8',
        question: 'Un livre coûte 10€. Tu donnes un billet de 20€. Combien la vendeuse te rend-elle ? (écris le nombre)',
        type: 'fill-blank',
        correctAnswer: '10',
        explanation: '20€ - 10€ = 10€. On te rend 10 euros',
        hints: ['Fais 20 - 10', 'C\'est la moitié de 20']
      },
      {
        id: 'q9',
        question: 'Combien de pièces de 1€ faut-il pour faire 5€ ?',
        type: 'multiple-choice',
        options: ['3 pièces', '4 pièces', '5 pièces', '6 pièces'],
        correctAnswer: '5 pièces',
        explanation: 'Il faut 5 pièces de 1€ pour faire 5€',
        hints: ['1€ + 1€ + 1€ + 1€ + 1€', 'Compte jusqu\'à 5']
      },
      {
        id: 'q10',
        question: 'Tu as 2€. Tu achètes un stylo à 1€50. Combien te reste-t-il ? (écris le prix, ex: 0,50)',
        type: 'fill-blank',
        correctAnswer: '0,50',
        explanation: '2€ - 1,50€ = 0,50€. Il te reste 50 centimes',
        hints: ['2€ = 200 centimes', '200c - 150c = 50c']
      }
    ]
  },

  {
    id: 'math-ce1-006',
    title: 'Doubles et moitiés',
    subject: 'maths',
    level: 'CE1',
    difficulty: 2,
    description: 'Calcule les doubles et les moitiés',
    estimatedTime: 12,
    skills: ['Double', 'Moitié', 'Calcul mental'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est le double de 5 ?',
        type: 'multiple-choice',
        options: ['8', '10', '12', '15'],
        correctAnswer: '10',
        explanation: 'Le double de 5 = 5 × 2 = 10',
        hints: ['Double = fois 2', '5 + 5']
      },
      {
        id: 'q2',
        question: 'Quel est le double de 8 ?',
        type: 'fill-blank',
        correctAnswer: '16',
        explanation: 'Le double de 8 = 8 × 2 = 16',
        hints: ['8 + 8', 'Multiplie par 2']
      },
      {
        id: 'q3',
        question: 'Quelle est la moitié de 10 ?',
        type: 'multiple-choice',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        explanation: 'La moitié de 10 = 10 ÷ 2 = 5',
        hints: ['Partage 10 en 2', 'Divise par 2']
      },
      {
        id: 'q4',
        question: 'Quel est le double de 12 ?',
        type: 'fill-blank',
        correctAnswer: '24',
        explanation: 'Le double de 12 = 12 × 2 = 24',
        hints: ['12 + 12', 'Multiplie par 2']
      },
      {
        id: 'q5',
        question: 'Quelle est la moitié de 14 ?',
        type: 'multiple-choice',
        options: ['5', '6', '7', '8'],
        correctAnswer: '7',
        explanation: 'La moitié de 14 = 14 ÷ 2 = 7',
        hints: ['Partage 14 en 2 parts égales', '7 + 7 = 14']
      },
      {
        id: 'q6',
        question: 'Quel est le double de 15 ?',
        type: 'fill-blank',
        correctAnswer: '30',
        explanation: 'Le double de 15 = 15 × 2 = 30',
        hints: ['15 + 15', 'Multiplie par 2']
      },
      {
        id: 'q7',
        question: 'Marc a 6 billes. Son frère en a le double. Combien le frère a-t-il de billes ?',
        type: 'multiple-choice',
        options: ['8', '10', '12', '14'],
        correctAnswer: '12',
        explanation: 'Le double de 6 = 12 billes',
        hints: ['Double de 6', '6 + 6']
      },
      {
        id: 'q8',
        question: 'Quelle est la moitié de 20 ?',
        type: 'fill-blank',
        correctAnswer: '10',
        explanation: 'La moitié de 20 = 20 ÷ 2 = 10',
        hints: ['20 partagé en 2', '10 + 10 = 20']
      },
      {
        id: 'q9',
        question: 'Julie a 16 bonbons. Elle en donne la moitié à sa soeur. Combien en donne-t-elle ?',
        type: 'multiple-choice',
        options: ['6', '7', '8', '9'],
        correctAnswer: '8',
        explanation: 'La moitié de 16 = 8 bonbons',
        hints: ['Partage 16 en 2', '8 + 8 = 16']
      },
      {
        id: 'q10',
        question: 'Quel est le double de 20 ?',
        type: 'fill-blank',
        correctAnswer: '40',
        explanation: 'Le double de 20 = 20 × 2 = 40',
        hints: ['20 + 20', 'Multiplie par 2']
      }
    ]
  },

  // ========== CE1 - Français ==========
  // (Les exercices CE1 français sont plus bas dans le fichier, après les exercices CP)

  // ========== CM1 - Mathématiques ==========
  // (Les exercices CM1 complets sont dans exercisesLibraryExtended.ts)

  // ========== 6ème - Mathématiques ==========
  // (Les exercices 6ème complets sont dans exercisesLibraryExtended.ts)

  // ========== FRANÇAIS ==========

  // CP - Français
  {
    id: 'fr-cp-001',
    title: 'Reconnaître les voyelles',
    subject: 'francais',
    level: 'CP',
    difficulty: 1,
    description: 'Identifie les voyelles dans les mots',
    estimatedTime: 15,
    skills: ['Alphabet', 'Voyelles'],
    questions: [
      {
        id: 'q1',
        question: 'Combien y a-t-il de voyelles dans le mot "PAPA" ?',
        type: 'multiple-choice',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        explanation: 'Les voyelles sont A, E, I, O, U. Dans PAPA, il y a deux A.',
        hints: ['Les voyelles sont : A E I O U', 'Cherche les A dans PAPA']
      },
      {
        id: 'q2',
        question: 'Quelles sont les voyelles dans l\'alphabet ?',
        type: 'multiple-choice',
        options: ['A, E, I, O, U', 'B, C, D, F', 'A, B, C, D', 'X, Y, Z'],
        correctAnswer: 'A, E, I, O, U',
        explanation: 'Les voyelles sont : A, E, I, O, U (et parfois Y). Toutes les autres lettres sont des consonnes.',
        hints: ['Il y a 5 voyelles principales', 'On peut les chanter', 'A, E, I, O, U']
      },
      {
        id: 'q3',
        question: 'Dans le mot "CHAT", quelle est la voyelle ?',
        type: 'multiple-choice',
        options: ['C', 'H', 'A', 'T'],
        correctAnswer: 'A',
        explanation: 'Dans CHAT, la voyelle est A. Les lettres C, H et T sont des consonnes.',
        hints: ['Cherche parmi A, E, I, O, U', 'C-H-A-T : laquelle est une voyelle ?', 'C\'est la lettre A']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : La lettre I est une voyelle',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! I est une voyelle. On peut la chanter : Iiiii !',
        hints: ['Les voyelles sont A, E, I, O, U', 'I fait partie des voyelles']
      },
      {
        id: 'q5',
        question: 'Combien y a-t-il de voyelles dans le mot "ÉCOLE" ?',
        type: 'multiple-choice',
        options: ['1', '2', '3', '4'],
        correctAnswer: '3',
        explanation: 'Dans ÉCOLE, il y a 3 voyelles : É, O et E. Les lettres C et L sont des consonnes.',
        hints: ['Cherche les voyelles : A, E, I, O, U', 'N\'oublie pas le É qui est aussi un E', 'É, O, E = 3 voyelles']
      },
      {
        id: 'q6',
        question: 'Quelle lettre n\'est PAS une voyelle ?',
        type: 'multiple-choice',
        options: ['A', 'E', 'B', 'O'],
        correctAnswer: 'B',
        explanation: 'B n\'est pas une voyelle, c\'est une consonne ! Les voyelles sont A, E, I, O, U.',
        hints: ['Quelles sont les voyelles ?', 'A, E, I, O, U', 'B n\'est pas dans cette liste']
      },
      {
        id: 'q7',
        question: 'Dans le mot "LUNE", combien y a-t-il de voyelles ?',
        type: 'fill-blank',
        correctAnswer: '2',
        explanation: 'Dans LUNE, il y a 2 voyelles : U et E. Les lettres L et N sont des consonnes.',
        hints: ['Cherche les voyelles', 'L-U-N-E : lesquelles sont des voyelles ?', 'U et E = 2 voyelles']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : Dans le mot "PETIT", il y a 2 voyelles',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Dans PETIT, il y a 2 voyelles : E et I. Les lettres P et T sont des consonnes (le deuxième T aussi).',
        hints: ['P-E-T-I-T', 'Cherche les voyelles', 'E et I sont des voyelles']
      },
      {
        id: 'q9',
        question: 'Quelle voyelle entends-tu dans le mot "VÉLO" (au début) ?',
        type: 'multiple-choice',
        options: ['A', 'É', 'I', 'O'],
        correctAnswer: 'É',
        explanation: 'Au début de VÉLO, on entend É (un E avec un accent). C\'est une voyelle !',
        hints: ['VÉ-LO', 'C\'est la première lettre que tu entends', 'C\'est É']
      },
      {
        id: 'q10',
        question: 'Dans le mot "BATEAU", combien y a-t-il de voyelles ?',
        type: 'multiple-choice',
        options: ['1', '2', '3', '4'],
        correctAnswer: '3',
        explanation: 'Dans BATEAU, il y a 3 voyelles : A, E et A (oui, il y a deux fois A, et aussi un U à la fin qui se prononce O). En comptant toutes les lettres voyelles, c\'est bien 3 : le premier A, le E, et le dernier A. Attention, AU fait le son [o] mais ce sont 2 lettres !',
        hints: ['B-A-T-E-A-U', 'Cherche les A, E, I, O, U', 'A, E, A = 3 voyelles']
      }
    ]
  },

  // CE1 - Français
  {
    id: 'fr-ce1-001',
    title: 'Masculin et Féminin',
    subject: 'francais',
    level: 'CE1',
    difficulty: 2,
    description: 'Apprends à mettre les mots au féminin',
    estimatedTime: 15,
    skills: ['Grammaire', 'Genre'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est le féminin de "un chat" ?',
        type: 'multiple-choice',
        options: ['un chate', 'une chat', 'une chatte', 'la chat'],
        correctAnswer: 'une chatte',
        explanation: 'Au féminin : "un chat" devient "une chatte" (on double le T)',
        hints: ['Il faut changer "un" en "une"', 'On ajoute souvent un E au féminin']
      },
      {
        id: 'q2',
        question: 'Quel est le féminin de "un ami" ?',
        type: 'multiple-choice',
        options: ['un amie', 'une ami', 'une amie', 'la ami'],
        correctAnswer: 'une amie',
        explanation: 'Au féminin : "un ami" devient "une amie" (on ajoute un E)',
        hints: ['Change "un" en "une"', 'Ajoute un E à la fin']
      },
      {
        id: 'q3',
        question: 'Quel est le féminin de "le chien" ?',
        type: 'fill-blank',
        correctAnswer: 'la chienne',
        explanation: 'Au féminin : "le chien" devient "la chienne" (on double le N et ajoute E)',
        hints: ['"le" devient "la"', 'Double le N et ajoute E']
      },
      {
        id: 'q4',
        question: 'Quel est le féminin de "un lion" ?',
        type: 'multiple-choice',
        options: ['un lionne', 'une lion', 'une lionne', 'la lion'],
        correctAnswer: 'une lionne',
        explanation: 'Au féminin : "un lion" devient "une lionne" (on double le N et ajoute E)',
        hints: ['Change "un" en "une"', 'Double le N']
      },
      {
        id: 'q5',
        question: 'Quel est le féminin de "un boulanger" ?',
        type: 'fill-blank',
        correctAnswer: 'une boulangère',
        explanation: 'Au féminin : "un boulanger" devient "une boulangère" (-er devient -ère)',
        hints: ['-er devient -ère', 'Pense à "une fermière"']
      },
      {
        id: 'q6',
        question: '"Un maître" au féminin, c\'est :',
        type: 'multiple-choice',
        options: ['une maître', 'une maîtresse', 'une maitresse', 'la maître'],
        correctAnswer: 'une maîtresse',
        explanation: '"Un maître" devient "une maîtresse" (attention à l\'accent)',
        hints: ['Pense à ta maîtresse d\'école', 'Garde l\'accent circonflexe']
      },
      {
        id: 'q7',
        question: 'Quel est le féminin de "un tigre" ?',
        type: 'fill-blank',
        correctAnswer: 'une tigresse',
        explanation: '"Un tigre" devient "une tigresse" (on ajoute -esse)',
        hints: ['Ajoute -esse', 'Comme "une princesse"']
      },
      {
        id: 'q8',
        question: '"Le directeur" au féminin donne :',
        type: 'multiple-choice',
        options: ['la directeur', 'une directeure', 'la directrice', 'une directeuse'],
        correctAnswer: 'la directrice',
        explanation: '"Le directeur" devient "la directrice" (-eur devient -rice)',
        hints: ['-eur devient -rice', '"le" devient "la"']
      },
      {
        id: 'q9',
        question: 'Quel est le féminin de "un écolier" ?',
        type: 'fill-blank',
        correctAnswer: 'une écolière',
        explanation: '"Un écolier" devient "une écolière" (-ier devient -ière)',
        hints: ['-ier devient -ière', 'Comme "une infirmière"']
      },
      {
        id: 'q10',
        question: '"Un coiffeur" au féminin, c\'est :',
        type: 'multiple-choice',
        options: ['une coiffeur', 'une coiffeuse', 'la coiffère', 'une coifferesse'],
        correctAnswer: 'une coiffeuse',
        explanation: '"Un coiffeur" devient "une coiffeuse" (-eur devient -euse)',
        hints: ['-eur peut devenir -euse', 'Pense à "une danseuse"']
      }
    ]
  },

  {
    id: 'fr-ce1-002',
    title: 'Le singulier et le pluriel',
    subject: 'francais',
    level: 'CE1',
    difficulty: 2,
    description: 'Apprends à mettre les mots au pluriel',
    estimatedTime: 12,
    skills: ['Grammaire', 'Pluriel'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est le pluriel de "un chat" ?',
        type: 'multiple-choice',
        options: ['un chats', 'des chat', 'des chats', 'les chat'],
        correctAnswer: 'des chats',
        explanation: 'Au pluriel : "un chat" devient "des chats" (on ajoute un S)',
        hints: ['"un" devient "des"', 'On ajoute un S à la fin']
      },
      {
        id: 'q2',
        question: 'Quel est le pluriel de "le chien" ?',
        type: 'fill-blank',
        correctAnswer: 'les chiens',
        explanation: 'Au pluriel : "le chien" devient "les chiens" (on ajoute un S)',
        hints: ['"le" devient "les"', 'Ajoute un S']
      },
      {
        id: 'q3',
        question: 'Quel est le pluriel de "un oiseau" ?',
        type: 'multiple-choice',
        options: ['des oiseau', 'des oiseaus', 'des oiseaux', 'les oiseau'],
        correctAnswer: 'des oiseaux',
        explanation: 'Au pluriel : "un oiseau" devient "des oiseaux" (on ajoute un X car le mot finit en -eau)',
        hints: ['Les mots en -eau prennent un X', 'Pas de S mais un X']
      },
      {
        id: 'q4',
        question: 'Quel est le pluriel de "le cheval" ?',
        type: 'fill-blank',
        correctAnswer: 'les chevaux',
        explanation: 'Au pluriel : "le cheval" devient "les chevaux" (-al devient -aux)',
        hints: ['Les mots en -al font -aux', 'Pense à "des animaux"']
      },
      {
        id: 'q5',
        question: 'Quel est le pluriel de "une fleur" ?',
        type: 'multiple-choice',
        options: ['une fleurs', 'des fleur', 'des fleurs', 'les fleur'],
        correctAnswer: 'des fleurs',
        explanation: 'Au pluriel : "une fleur" devient "des fleurs" (on ajoute un S)',
        hints: ['"une" devient "des"', 'Ajoute un S']
      },
      {
        id: 'q6',
        question: 'Quel est le pluriel de "un jeu" ?',
        type: 'fill-blank',
        correctAnswer: 'des jeux',
        explanation: 'Au pluriel : "un jeu" devient "des jeux" (les mots en -eu prennent un X)',
        hints: ['Les mots en -eu prennent un X', 'Comme "des cheveux"']
      },
      {
        id: 'q7',
        question: 'Quel est le pluriel de "la table" ?',
        type: 'multiple-choice',
        options: ['la tables', 'des table', 'les tables', 'les table'],
        correctAnswer: 'les tables',
        explanation: 'Au pluriel : "la table" devient "les tables"',
        hints: ['"la" devient "les"', 'Ajoute un S']
      },
      {
        id: 'q8',
        question: 'Quel est le pluriel de "le journal" ?',
        type: 'fill-blank',
        correctAnswer: 'les journaux',
        explanation: 'Au pluriel : "le journal" devient "les journaux" (-al devient -aux)',
        hints: ['-al devient -aux', 'Comme "des animaux"']
      },
      {
        id: 'q9',
        question: 'Il y a plusieurs... sur la table. Quel est le mot au pluriel ?',
        type: 'multiple-choice',
        options: ['livres', 'livre', 'livress', 'livr'],
        correctAnswer: 'livres',
        explanation: 'Au pluriel, "livre" devient "livres" avec un S',
        hints: ['Ajoute un S au mot', 'livre + s = ?']
      },
      {
        id: 'q10',
        question: 'Quel est le pluriel de "un nez" ?',
        type: 'fill-blank',
        correctAnswer: 'des nez',
        explanation: 'Au pluriel : "un nez" reste "des nez" (les mots en -z ne changent pas)',
        hints: ['Les mots en -z ne changent pas', 'C\'est déjà un Z à la fin']
      }
    ]
  },

  {
    id: 'fr-ce1-003',
    title: 'Les sons : é, è, ê',
    subject: 'francais',
    level: 'CE1',
    difficulty: 2,
    description: 'Distingue les différents sons du E',
    estimatedTime: 12,
    skills: ['Orthographe', 'Sons'],
    questions: [
      {
        id: 'q1',
        question: 'Quel accent manque dans le mot "ecole" ?',
        type: 'multiple-choice',
        options: ['é', 'è', 'ê', 'ë'],
        correctAnswer: 'é',
        explanation: 'Le mot s\'écrit "école" avec un accent aigu (é)',
        hints: ['É-cole', 'C\'est un accent aigu']
      },
      {
        id: 'q2',
        question: 'Comment s\'écrit le mot ? "une f__te"',
        type: 'multiple-choice',
        options: ['fete', 'fête', 'féte', 'fète'],
        correctAnswer: 'fête',
        explanation: 'Le mot s\'écrit "fête" avec un accent circonflexe (ê)',
        hints: ['C\'est un accent circonflexe', 'Comme un petit chapeau']
      },
      {
        id: 'q3',
        question: 'Quel est le bon mot ? "ma m__re"',
        type: 'fill-blank',
        correctAnswer: 'mère',
        explanation: 'Le mot s\'écrit "mère" avec un accent grave (è)',
        hints: ['C\'est un accent grave', 'Mè-re']
      },
      {
        id: 'q4',
        question: 'Comment écrit-on le mot ? "un __l__phant"',
        type: 'multiple-choice',
        options: ['élefant', 'éléphant', 'elephant', 'èlèphant'],
        correctAnswer: 'éléphant',
        explanation: 'Le mot s\'écrit "éléphant" avec deux accents aigus',
        hints: ['É-lé-phant', 'Deux accents aigus']
      },
      {
        id: 'q5',
        question: 'Quel accent dans "frère" ?',
        type: 'fill-blank',
        correctAnswer: 'è',
        explanation: 'Le mot "frère" a un accent grave (è)',
        hints: ['Frè-re', 'C\'est un accent grave']
      },
      {
        id: 'q6',
        question: 'Comment s\'écrit ? "une f__n__tre"',
        type: 'multiple-choice',
        options: ['fenetre', 'fenêtre', 'fenètre', 'fênetre'],
        correctAnswer: 'fenêtre',
        explanation: 'Le mot s\'écrit "fenêtre" avec un accent circonflexe',
        hints: ['Fe-nê-tre', 'Accent circonflexe sur le E']
      },
      {
        id: 'q7',
        question: 'Quel est le bon mot ? "un __l__ve"',
        type: 'fill-blank',
        correctAnswer: 'élève',
        explanation: 'Le mot s\'écrit "élève" : é au début, è à la fin',
        hints: ['É-lè-ve', 'Accent aigu puis grave']
      },
      {
        id: 'q8',
        question: 'Comment écrit-on ? "une t__te"',
        type: 'multiple-choice',
        options: ['tete', 'tête', 'téte', 'tète'],
        correctAnswer: 'tête',
        explanation: 'Le mot s\'écrit "tête" avec un accent circonflexe',
        hints: ['Tê-te', 'Comme "fête"']
      },
      {
        id: 'q9',
        question: 'Quel mot est bien écrit ?',
        type: 'multiple-choice',
        options: ['un rêve', 'un reve', 'un réve', 'un rève'],
        correctAnswer: 'un rêve',
        explanation: 'Le mot correct est "rêve" avec un accent circonflexe',
        hints: ['Rê-ve', 'Accent circonflexe']
      },
      {
        id: 'q10',
        question: 'Comment s\'écrit ? "la for__t"',
        type: 'fill-blank',
        correctAnswer: 'forêt',
        explanation: 'Le mot s\'écrit "forêt" avec un accent circonflexe',
        hints: ['For-ê-t', 'Accent circonflexe']
      }
    ]
  },

  {
    id: 'fr-ce1-004',
    title: 'Les phrases : ordre des mots',
    subject: 'francais',
    level: 'CE1',
    difficulty: 2,
    description: 'Construis des phrases correctes',
    estimatedTime: 15,
    skills: ['Grammaire', 'Phrase', 'Ordre des mots'],
    questions: [
      {
        id: 'q1',
        question: 'Remets les mots dans l\'ordre : "joue / Paul / dans / le jardin"',
        type: 'multiple-choice',
        options: ['Dans le jardin joue Paul', 'Paul joue dans le jardin', 'Joue Paul dans le jardin', 'Le jardin dans Paul joue'],
        correctAnswer: 'Paul joue dans le jardin',
        explanation: 'La phrase correcte est : "Paul joue dans le jardin" (Sujet + Verbe + Complément)',
        hints: ['Qui ? Fait quoi ? Où ?', 'Paul (qui) joue (fait quoi)']
      },
      {
        id: 'q2',
        question: 'Quel mot manque ? "Le chat... sur le toit"',
        type: 'multiple-choice',
        options: ['le', 'est', 'et', 'un'],
        correctAnswer: 'est',
        explanation: 'La phrase complète est : "Le chat est sur le toit" (il faut un verbe)',
        hints: ['Il faut un verbe', 'Le chat [verbe] sur le toit']
      },
      {
        id: 'q3',
        question: 'Remets dans l\'ordre : "mange / une pomme / Julie"',
        type: 'fill-blank',
        correctAnswer: 'Julie mange une pomme',
        explanation: 'La phrase correcte est : "Julie mange une pomme"',
        hints: ['Qui ? Fait quoi ?', 'Julie (qui) mange (fait quoi)']
      },
      {
        id: 'q4',
        question: 'Quelle phrase est correcte ?',
        type: 'multiple-choice',
        options: ['Dessine Tom un bateau', 'Tom dessine un bateau', 'Un bateau Tom dessine', 'Dessine un bateau Tom'],
        correctAnswer: 'Tom dessine un bateau',
        explanation: 'La phrase correcte est : "Tom dessine un bateau" (Sujet + Verbe + Complément)',
        hints: ['Sujet + Verbe + Complément', 'Tom (qui) dessine (fait quoi) un bateau']
      },
      {
        id: 'q5',
        question: 'Complète : "Les oiseaux... dans le ciel"',
        type: 'fill-blank',
        correctAnswer: 'volent',
        explanation: 'La phrase complète est : "Les oiseaux volent dans le ciel"',
        hints: ['Que font les oiseaux ?', 'Ils vo... dans le ciel']
      },
      {
        id: 'q6',
        question: 'Remets dans l\'ordre : "à l\'école / va / Marie"',
        type: 'multiple-choice',
        options: ['À l\'école Marie va', 'Va Marie à l\'école', 'Marie va à l\'école', 'Marie à l\'école va'],
        correctAnswer: 'Marie va à l\'école',
        explanation: 'La phrase correcte est : "Marie va à l\'école"',
        hints: ['Qui ? Fait quoi ? Où ?', 'Marie (qui) va (fait quoi) à l\'école (où)']
      },
      {
        id: 'q7',
        question: 'Quel mot commence une phrase ?',
        type: 'multiple-choice',
        options: ['Une majuscule', 'Un point', 'Une virgule', 'Un espace'],
        correctAnswer: 'Une majuscule',
        explanation: 'Une phrase commence toujours par une majuscule',
        hints: ['Lettre en capitale au début', 'Grande lettre']
      },
      {
        id: 'q8',
        question: 'Complète : "Le chien... avec une balle"',
        type: 'fill-blank',
        correctAnswer: 'joue',
        explanation: 'La phrase complète est : "Le chien joue avec une balle"',
        hints: ['Que fait le chien ?', 'Le chien [verbe] avec une balle']
      },
      {
        id: 'q9',
        question: 'Quelle phrase est correcte ?',
        type: 'multiple-choice',
        options: ['mange Le garçon un gâteau', 'Un gâteau mange le garçon', 'Le garçon mange un gâteau', 'Mange un gâteau le garçon'],
        correctAnswer: 'Le garçon mange un gâteau',
        explanation: 'La phrase correcte est : "Le garçon mange un gâteau"',
        hints: ['Sujet + Verbe + Complément', 'Qui mange quoi ?']
      },
      {
        id: 'q10',
        question: 'Par quoi se termine une phrase ?',
        type: 'multiple-choice',
        options: ['Un point', 'Une majuscule', 'Un espace', 'Une lettre'],
        correctAnswer: 'Un point',
        explanation: 'Une phrase se termine toujours par un point (.  !  ?)',
        hints: ['Un signe de ponctuation', '. ou ! ou ?']
      }
    ]
  },

  {
    id: 'fr-ce1-005',
    title: 'Les verbes au présent',
    subject: 'francais',
    level: 'CE1',
    difficulty: 2,
    description: 'Conjugue les verbes au présent',
    estimatedTime: 15,
    skills: ['Conjugaison', 'Présent'],
    questions: [
      {
        id: 'q1',
        question: 'Conjugue "chanter" : Je...',
        type: 'multiple-choice',
        options: ['chante', 'chantes', 'chantons', 'chantent'],
        correctAnswer: 'chante',
        explanation: 'Je chante. À la 1ère personne du singulier, le verbe se termine par -e',
        hints: ['Je chant...', 'Avec JE, on met -e']
      },
      {
        id: 'q2',
        question: 'Conjugue "manger" au présent : Tu... (écris seulement le verbe)',
        type: 'fill-blank',
        correctAnswer: 'manges',
        explanation: 'Tu manges. À la 2ème personne du singulier, on ajoute -es',
        hints: ['Tu mang...', 'Avec TU, on met -es']
      },
      {
        id: 'q3',
        question: 'Conjugue "jouer" : Il/Elle...',
        type: 'multiple-choice',
        options: ['joue', 'joues', 'jouent', 'jouons'],
        correctAnswer: 'joue',
        explanation: 'Il/Elle joue. À la 3ème personne du singulier, on met -e',
        hints: ['Il jou...', 'Avec IL/ELLE, on met -e']
      },
      {
        id: 'q4',
        question: 'Conjugue "parler" au présent : Nous... (écris seulement le verbe)',
        type: 'fill-blank',
        correctAnswer: 'parlons',
        explanation: 'Nous parlons. À la 1ère personne du pluriel, on met -ons',
        hints: ['Nous parl...', 'Avec NOUS, on met -ons']
      },
      {
        id: 'q5',
        question: 'Conjugue "danser" : Vous...',
        type: 'multiple-choice',
        options: ['danse', 'danses', 'dansez', 'dansent'],
        correctAnswer: 'dansez',
        explanation: 'Vous dansez. À la 2ème personne du pluriel, on met -ez',
        hints: ['Vous dans...', 'Avec VOUS, on met -ez']
      },
      {
        id: 'q6',
        question: 'Conjugue "sauter" au présent : Ils/Elles... (écris seulement le verbe)',
        type: 'fill-blank',
        correctAnswer: 'sautent',
        explanation: 'Ils/Elles sautent. À la 3ème personne du pluriel, on met -ent',
        hints: ['Ils saut...', 'Avec ILS/ELLES, on met -ent']
      },
      {
        id: 'q7',
        question: 'Complète : "Tu... (regarder) la télévision"',
        type: 'multiple-choice',
        options: ['regarde', 'regardes', 'regardez', 'regardent'],
        correctAnswer: 'regardes',
        explanation: 'Tu regardes. Avec TU, le verbe prend -es',
        hints: ['Tu regard...', 'TU = -es']
      },
      {
        id: 'q8',
        question: 'Complète : "Nous... (aimer) les bonbons"',
        type: 'fill-blank',
        correctAnswer: 'aimons',
        explanation: 'Nous aimons. Avec NOUS, le verbe prend -ons',
        hints: ['Nous aim...', 'NOUS = -ons']
      },
      {
        id: 'q9',
        question: 'Quelle phrase est correcte ?',
        type: 'multiple-choice',
        options: ['Je joues au ballon', 'Je joue au ballon', 'Je jouent au ballon', 'Je jouons au ballon'],
        correctAnswer: 'Je joue au ballon',
        explanation: 'Je joue au ballon. Avec JE, on met -e (pas de S)',
        hints: ['Je jou...', 'JE = -e sans S']
      },
      {
        id: 'q10',
        question: 'Complète : "Les enfants... (courir) dans la cour"',
        type: 'fill-blank',
        correctAnswer: 'courent',
        explanation: 'Les enfants courent. Avec ILS/ELLES, on met -ent',
        hints: ['Les enfants cour...', 'ILS = -ent']
      }
    ]
  },

  {
    id: 'fr-ce1-006',
    title: 'Les mots de la même famille',
    subject: 'francais',
    level: 'CE1',
    difficulty: 2,
    description: 'Trouve les mots de la même famille',
    estimatedTime: 12,
    skills: ['Vocabulaire', 'Familles de mots'],
    questions: [
      {
        id: 'q1',
        question: 'Quel mot est de la même famille que "lait" ?',
        type: 'multiple-choice',
        options: ['laitage', 'laid', 'laine', 'lire'],
        correctAnswer: 'laitage',
        explanation: 'Laitage est de la famille de "lait" (yaourt, fromage = laitages)',
        hints: ['Cherche le mot qui parle de lait', 'Les produits laitiers']
      },
      {
        id: 'q2',
        question: 'Trouve le mot de la famille de "dent" :',
        type: 'fill-blank',
        correctAnswer: 'dentiste',
        explanation: 'Dentiste est de la famille de "dent" (le docteur des dents)',
        hints: ['Le docteur des dents', 'Dent... iste']
      },
      {
        id: 'q3',
        question: 'Quel mot est de la même famille que "terre" ?',
        type: 'multiple-choice',
        options: ['terrible', 'terrain', 'terminer', 'tête'],
        correctAnswer: 'terrain',
        explanation: 'Terrain est de la famille de "terre" (un terrain, c\'est un bout de terre)',
        hints: ['Un bout de terre pour jouer', 'Terr...']
      },
      {
        id: 'q4',
        question: 'Trouve le mot de la famille de "chaud" :',
        type: 'fill-blank',
        correctAnswer: 'chauffage',
        explanation: 'Chauffage est de la famille de "chaud" (ce qui rend chaud)',
        hints: ['Ce qui rend chaud l\'hiver', 'Chauf...']
      },
      {
        id: 'q5',
        question: 'Quel mot est de la même famille que "fleur" ?',
        type: 'multiple-choice',
        options: ['fleuriste', 'feuille', 'fleuve', 'fléau'],
        correctAnswer: 'fleuriste',
        explanation: 'Fleuriste est de la famille de "fleur" (celui qui vend des fleurs)',
        hints: ['Celui qui vend des fleurs', 'Fleur... iste']
      },
      {
        id: 'q6',
        question: 'Trouve le mot de la famille de "jardin" :',
        type: 'fill-blank',
        correctAnswer: 'jardinier',
        explanation: 'Jardinier est de la famille de "jardin" (celui qui s\'occupe du jardin)',
        hints: ['Celui qui s\'occupe du jardin', 'Jardin...']
      },
      {
        id: 'q7',
        question: 'Quel mot est de la même famille que "boulanger" ?',
        type: 'multiple-choice',
        options: ['boulangerie', 'bouger', 'boulet', 'boulevard'],
        correctAnswer: 'boulangerie',
        explanation: 'Boulangerie est de la famille de "boulanger" (le magasin du boulanger)',
        hints: ['Le magasin du boulanger', 'Boulang...']
      },
      {
        id: 'q8',
        question: 'Trouve le mot de la famille de "laver" :',
        type: 'fill-blank',
        correctAnswer: 'lavage',
        explanation: 'Lavage est de la famille de "laver" (l\'action de laver)',
        hints: ['L\'action de laver', 'Lav...']
      },
      {
        id: 'q9',
        question: 'Quel mot est de la même famille que "chanter" ?',
        type: 'multiple-choice',
        options: ['chanteur', 'chanter', 'champ', 'chapeau'],
        correctAnswer: 'chanteur',
        explanation: 'Chanteur est de la famille de "chanter" (celui qui chante)',
        hints: ['Celui qui chante', 'Chant...']
      },
      {
        id: 'q10',
        question: 'Trouve le mot de la famille de "courir" :',
        type: 'fill-blank',
        correctAnswer: 'coureur',
        explanation: 'Coureur est de la famille de "courir" (celui qui court)',
        hints: ['Celui qui court', 'Cour...']
      }
    ]
  },

  // ========== CE2 - Mathématiques ==========
  {
    id: 'math-ce2-001',
    title: 'Multiplication : tables jusqu\'à 10',
    subject: 'maths',
    level: 'CE2',
    difficulty: 3,
    description: 'Maîtrise toutes les tables de multiplication',
    estimatedTime: 15,
    skills: ['Multiplication', 'Tables', 'Calcul mental'],
    questions: [
      {
        id: 'q1',
        question: '6 × 7 = ?',
        type: 'fill-blank',
        correctAnswer: '42',
        explanation: '6 × 7 = 42. C\'est dans la table de 6 ou de 7',
        hints: ['Table de 6 : 6, 12, 18, 24, 30, 36, 42...', 'Compte de 6 en 6 sept fois']
      },
      {
        id: 'q2',
        question: '8 × 9 = ?',
        type: 'fill-blank',
        correctAnswer: '72',
        explanation: '8 × 9 = 72. C\'est la table de 8 ou de 9',
        hints: ['8 × 10 = 80, puis enlève 8', '80 - 8 = 72']
      },
      {
        id: 'q3',
        question: '7 × 8 = ?',
        type: 'multiple-choice',
        options: ['54', '56', '63', '64'],
        correctAnswer: '56',
        explanation: '7 × 8 = 56',
        hints: ['Table de 7 ou de 8', '7 × 8 = 56']
      },
      {
        id: 'q4',
        question: '9 × 6 = ?',
        type: 'fill-blank',
        correctAnswer: '54',
        explanation: '9 × 6 = 54',
        hints: ['9 × 5 = 45, puis ajoute 9', '45 + 9 = 54']
      },
      {
        id: 'q5',
        question: 'Combien font 7 × 7 ?',
        type: 'multiple-choice',
        options: ['42', '45', '49', '56'],
        correctAnswer: '49',
        explanation: '7 × 7 = 49. C\'est 7 au carré !',
        hints: ['7 fois 7', 'Compte de 7 en 7 : 7, 14, 21, 28, 35, 42, 49']
      },
      {
        id: 'q6',
        question: '8 × 8 = ?',
        type: 'fill-blank',
        correctAnswer: '64',
        explanation: '8 × 8 = 64. C\'est 8 au carré',
        hints: ['8 fois 8', '8 × 7 = 56, puis ajoute 8']
      },
      {
        id: 'q7',
        question: '9 × 9 = ?',
        type: 'fill-blank',
        correctAnswer: '81',
        explanation: '9 × 9 = 81. C\'est 9 au carré',
        hints: ['9 fois 9', '9 × 10 = 90, puis enlève 9']
      },
      {
        id: 'q8',
        question: 'Quel est le résultat de 6 × 9 ?',
        type: 'multiple-choice',
        options: ['45', '52', '54', '63'],
        correctAnswer: '54',
        explanation: '6 × 9 = 54',
        hints: ['6 × 10 = 60, puis enlève 6', 'Ou 9 × 6 = 54']
      },
      {
        id: 'q9',
        question: '7 × 9 = ?',
        type: 'fill-blank',
        correctAnswer: '63',
        explanation: '7 × 9 = 63',
        hints: ['7 × 10 = 70, puis enlève 7', '70 - 7 = 63']
      },
      {
        id: 'q10',
        question: 'Combien font 8 × 6 ?',
        type: 'fill-blank',
        correctAnswer: '48',
        explanation: '8 × 6 = 48',
        hints: ['8 × 5 = 40, puis ajoute 8', '40 + 8 = 48']
      }
    ]
  },

  {
    id: 'math-ce2-002',
    title: 'Addition et soustraction jusqu\'à 1000',
    subject: 'maths',
    level: 'CE2',
    difficulty: 3,
    description: 'Additionne et soustrais des grands nombres',
    estimatedTime: 15,
    skills: ['Addition', 'Soustraction', 'Grands nombres'],
    questions: [
      {
        id: 'q1',
        question: '345 + 238 = ?',
        type: 'fill-blank',
        correctAnswer: '583',
        explanation: '345 + 238 = 583. On additionne : 300 + 200 = 500, 40 + 30 = 70, 5 + 8 = 13, donc 500 + 70 + 13 = 583',
        hints: ['Additionne les centaines, puis les dizaines, puis les unités', '300 + 200 = 500']
      },
      {
        id: 'q2',
        question: '567 - 243 = ?',
        type: 'fill-blank',
        correctAnswer: '324',
        explanation: '567 - 243 = 324',
        hints: ['Soustrais les centaines, puis les dizaines, puis les unités', '500 - 200 = 300']
      },
      {
        id: 'q3',
        question: 'Combien font 456 + 389 ?',
        type: 'multiple-choice',
        options: ['745', '835', '845', '855'],
        correctAnswer: '845',
        explanation: '456 + 389 = 845',
        hints: ['400 + 300 = 700', 'N\'oublie pas les retenues']
      },
      {
        id: 'q4',
        question: '800 - 456 = ?',
        type: 'fill-blank',
        correctAnswer: '344',
        explanation: '800 - 456 = 344',
        hints: ['800 - 400 = 400', 'Puis enlève 56']
      },
      {
        id: 'q5',
        question: '234 + 567 = ?',
        type: 'fill-blank',
        correctAnswer: '801',
        explanation: '234 + 567 = 801',
        hints: ['200 + 500 = 700', '30 + 60 = 90, 4 + 7 = 11']
      },
      {
        id: 'q6',
        question: '999 - 123 = ?',
        type: 'multiple-choice',
        options: ['776', '866', '876', '886'],
        correctAnswer: '876',
        explanation: '999 - 123 = 876',
        hints: ['900 - 100 = 800', '90 - 20 = 70, 9 - 3 = 6']
      },
      {
        id: 'q7',
        question: '654 + 346 = ?',
        type: 'fill-blank',
        correctAnswer: '1000',
        explanation: '654 + 346 = 1000. Remarque : 654 + 346 font exactement 1000 !',
        hints: ['4 + 6 = 10', '50 + 40 = 90, plus la retenue']
      },
      {
        id: 'q8',
        question: '725 - 367 = ?',
        type: 'fill-blank',
        correctAnswer: '358',
        explanation: '725 - 367 = 358',
        hints: ['700 - 300 = 400', 'Attention aux retenues']
      },
      {
        id: 'q9',
        question: 'Combien font 488 + 412 ?',
        type: 'multiple-choice',
        options: ['800', '890', '900', '910'],
        correctAnswer: '900',
        explanation: '488 + 412 = 900',
        hints: ['400 + 400 = 800', '88 + 12 = 100']
      },
      {
        id: 'q10',
        question: '1000 - 678 = ?',
        type: 'fill-blank',
        correctAnswer: '322',
        explanation: '1000 - 678 = 322',
        hints: ['1000 - 600 = 400', 'Puis continue à soustraire']
      }
    ]
  },

  {
    id: 'math-ce2-003',
    title: 'La division : partage',
    subject: 'maths',
    level: 'CE2',
    difficulty: 3,
    description: 'Découvre la division en partageant',
    estimatedTime: 15,
    skills: ['Division', 'Partage', 'Calcul'],
    questions: [
      {
        id: 'q1',
        question: 'J\'ai 12 bonbons à partager entre 3 enfants. Combien chacun en aura ?',
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        explanation: '12 ÷ 3 = 4. Chaque enfant aura 4 bonbons',
        hints: ['12 ÷ 3 = ?', '3 × 4 = 12']
      },
      {
        id: 'q2',
        question: '20 ÷ 5 = ?',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: '20 ÷ 5 = 4. Car 5 × 4 = 20',
        hints: ['5 fois combien font 20 ?', '5 × 4 = 20']
      },
      {
        id: 'q3',
        question: 'Il y a 24 élèves à mettre en 4 équipes égales. Combien d\'élèves par équipe ?',
        type: 'fill-blank',
        correctAnswer: '6',
        explanation: '24 ÷ 4 = 6. Il y aura 6 élèves par équipe',
        hints: ['24 ÷ 4 = ?', '4 × 6 = 24']
      },
      {
        id: 'q4',
        question: '18 ÷ 2 = ?',
        type: 'multiple-choice',
        options: ['6', '8', '9', '10'],
        correctAnswer: '9',
        explanation: '18 ÷ 2 = 9. Car 2 × 9 = 18',
        hints: ['2 fois combien font 18 ?', 'C\'est la moitié de 18']
      },
      {
        id: 'q5',
        question: '30 ÷ 6 = ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: '30 ÷ 6 = 5. Car 6 × 5 = 30',
        hints: ['6 fois combien font 30 ?', '6 × 5 = 30']
      },
      {
        id: 'q6',
        question: 'J\'ai 40 billes à partager en 8 sacs. Combien de billes par sac ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: '40 ÷ 8 = 5. Chaque sac aura 5 billes',
        hints: ['40 ÷ 8 = ?', '8 × 5 = 40']
      },
      {
        id: 'q7',
        question: '35 ÷ 7 = ?',
        type: 'multiple-choice',
        options: ['4', '5', '6', '7'],
        correctAnswer: '5',
        explanation: '35 ÷ 7 = 5. Car 7 × 5 = 35',
        hints: ['Table de 7', '7 × 5 = 35']
      },
      {
        id: 'q8',
        question: '48 ÷ 6 = ?',
        type: 'fill-blank',
        correctAnswer: '8',
        explanation: '48 ÷ 6 = 8. Car 6 × 8 = 48',
        hints: ['6 fois combien font 48 ?', '6 × 8 = 48']
      },
      {
        id: 'q9',
        question: 'Une tablette de chocolat a 54 carrés. Je la partage en 9 parts égales. Combien de carrés par part ?',
        type: 'fill-blank',
        correctAnswer: '6',
        explanation: '54 ÷ 9 = 6. Chaque part aura 6 carrés',
        hints: ['54 ÷ 9 = ?', '9 × 6 = 54']
      },
      {
        id: 'q10',
        question: '72 ÷ 8 = ?',
        type: 'multiple-choice',
        options: ['7', '8', '9', '10'],
        correctAnswer: '9',
        explanation: '72 ÷ 8 = 9. Car 8 × 9 = 72',
        hints: ['Table de 8', '8 × 9 = 72']
      }
    ]
  },

  {
    id: 'math-ce2-004',
    title: 'Les nombres jusqu\'à 10 000',
    subject: 'maths',
    level: 'CE2',
    difficulty: 3,
    description: 'Comprendre et écrire les grands nombres',
    estimatedTime: 15,
    skills: ['Numération', 'Grands nombres', 'Écriture'],
    questions: [
      {
        id: 'q1',
        question: 'Comment s\'écrit en chiffres "trois mille deux cent cinquante-six" ?',
        type: 'fill-blank',
        correctAnswer: '3256',
        explanation: '3256 = 3 milliers, 2 centaines, 5 dizaines, 6 unités',
        hints: ['3 milliers = 3000', '3000 + 200 + 50 + 6']
      },
      {
        id: 'q2',
        question: 'Quel est le chiffre des centaines dans 4 567 ?',
        type: 'multiple-choice',
        options: ['4', '5', '6', '7'],
        correctAnswer: '5',
        explanation: 'Dans 4 567, le 5 est le chiffre des centaines (500)',
        hints: ['Le 3e chiffre en partant de la droite', 'Milliers, centaines, dizaines, unités']
      },
      {
        id: 'q3',
        question: 'Combien y a-t-il de dizaines dans 5 340 ?',
        type: 'fill-blank',
        correctAnswer: '534',
        explanation: 'Dans 5 340, il y a 534 dizaines (5340 ÷ 10 = 534)',
        hints: ['Enlève le 0 des unités', '5 340 = 534 dizaines']
      },
      {
        id: 'q4',
        question: 'Range ces nombres du plus petit au plus grand : 7845, 7854, 7485',
        type: 'multiple-choice',
        options: ['7845, 7854, 7485', '7485, 7845, 7854', '7854, 7845, 7485', '7485, 7854, 7845'],
        correctAnswer: '7485, 7845, 7854',
        explanation: '7485 < 7845 < 7854. Compare d\'abord les milliers, puis les centaines, etc.',
        hints: ['Compare les chiffres un par un', 'Les milliers sont les mêmes, regarde les centaines']
      },
      {
        id: 'q5',
        question: 'Comment s\'écrit en lettres 8 042 ?',
        type: 'multiple-choice',
        options: [
          'huit mille quarante-deux',
          'huit cents quarante-deux',
          'huit mille quatre cent deux',
          'huit mille quatre-vingt-deux'
        ],
        correctAnswer: 'huit mille quarante-deux',
        explanation: '8 042 s\'écrit : huit mille quarante-deux (8000 + 40 + 2)',
        hints: ['8 milliers = huit mille', 'Pas de centaines, 4 dizaines et 2 unités']
      },
      {
        id: 'q6',
        question: 'Quel nombre est égal à 6000 + 300 + 70 + 4 ?',
        type: 'fill-blank',
        correctAnswer: '6374',
        explanation: '6000 + 300 + 70 + 4 = 6374',
        hints: ['Additionne chaque partie', '6 milliers, 3 centaines, 7 dizaines, 4 unités']
      },
      {
        id: 'q7',
        question: 'Quel est le nombre qui vient juste après 9 999 ?',
        type: 'fill-blank',
        correctAnswer: '10000',
        explanation: 'Après 9 999 vient 10 000 (dix mille)',
        hints: ['Après le plus grand nombre à 4 chiffres', '10 000 = dix mille']
      },
      {
        id: 'q8',
        question: 'Dans 2 508, combien de centaines y a-t-il ?',
        type: 'multiple-choice',
        options: ['2', '5', '25', '250'],
        correctAnswer: '25',
        explanation: 'Dans 2 508, il y a 25 centaines (2508 ÷ 100 = 25,08... donc 25 centaines complètes)',
        hints: ['2508 ÷ 100', '2000 + 500 = 2500 = 25 centaines']
      },
      {
        id: 'q9',
        question: 'Comment décompose-t-on 7 346 ?',
        type: 'multiple-choice',
        options: [
          '7000 + 300 + 40 + 6',
          '700 + 30 + 4 + 6',
          '7000 + 30 + 40 + 6',
          '70 + 30 + 40 + 6'
        ],
        correctAnswer: '7000 + 300 + 40 + 6',
        explanation: '7 346 = 7000 + 300 + 40 + 6',
        hints: ['7 milliers, 3 centaines, 4 dizaines, 6 unités', '7000 + 300 + 40 + 6']
      },
      {
        id: 'q10',
        question: 'Quel est le double de 2 500 ?',
        type: 'fill-blank',
        correctAnswer: '5000',
        explanation: 'Le double de 2 500 est 5 000 (2500 × 2 = 5000)',
        hints: ['2500 + 2500', '2500 × 2']
      }
    ]
  },

  {
    id: 'math-ce2-005',
    title: 'Les mesures : longueurs',
    subject: 'maths',
    level: 'CE2',
    difficulty: 3,
    description: 'Apprends les unités de longueur (m, cm, km)',
    estimatedTime: 15,
    skills: ['Mesures', 'Longueurs', 'Conversions'],
    questions: [
      {
        id: 'q1',
        question: 'Combien y a-t-il de centimètres dans 1 mètre ?',
        type: 'fill-blank',
        correctAnswer: '100',
        explanation: '1 mètre = 100 centimètres',
        hints: ['1 m = 100 cm', 'Un mètre, c\'est 100 centimètres']
      },
      {
        id: 'q2',
        question: 'Combien y a-t-il de mètres dans 1 kilomètre ?',
        type: 'multiple-choice',
        options: ['10', '100', '1000', '10000'],
        correctAnswer: '1000',
        explanation: '1 kilomètre = 1000 mètres',
        hints: ['Kilo = mille', '1 km = 1000 m']
      },
      {
        id: 'q3',
        question: 'Combien font 3 mètres en centimètres ?',
        type: 'fill-blank',
        correctAnswer: '300',
        explanation: '3 mètres = 300 centimètres (3 × 100 = 300)',
        hints: ['1 m = 100 cm', '3 × 100 = 300']
      },
      {
        id: 'q4',
        question: 'Quelle unité utilise-t-on pour mesurer la longueur d\'un crayon ?',
        type: 'multiple-choice',
        options: ['millimètre', 'centimètre', 'mètre', 'kilomètre'],
        correctAnswer: 'centimètre',
        explanation: 'On mesure un crayon en centimètres (environ 15-20 cm)',
        hints: ['Pas trop petit, pas trop grand', 'Un crayon fait environ 15 cm']
      },
      {
        id: 'q5',
        question: 'Combien de mètres font 2 km ?',
        type: 'fill-blank',
        correctAnswer: '2000',
        explanation: '2 kilomètres = 2000 mètres (2 × 1000 = 2000)',
        hints: ['1 km = 1000 m', '2 × 1000 = 2000']
      },
      {
        id: 'q6',
        question: '500 cm = combien de mètres ?',
        type: 'multiple-choice',
        options: ['5', '50', '500', '5000'],
        correctAnswer: '5',
        explanation: '500 cm = 5 mètres (500 ÷ 100 = 5)',
        hints: ['100 cm = 1 m', '500 ÷ 100 = 5']
      },
      {
        id: 'q7',
        question: 'Quelle unité pour mesurer la distance entre deux villes ?',
        type: 'multiple-choice',
        options: ['centimètre', 'mètre', 'kilomètre', 'millimètre'],
        correctAnswer: 'kilomètre',
        explanation: 'On mesure les distances entre villes en kilomètres',
        hints: ['C\'est une grande distance', 'km']
      },
      {
        id: 'q8',
        question: 'Un livre mesure 25 cm. Combien de mm ?',
        type: 'fill-blank',
        correctAnswer: '250',
        explanation: '25 cm = 250 mm (1 cm = 10 mm, donc 25 × 10 = 250)',
        hints: ['1 cm = 10 mm', '25 × 10 = 250']
      },
      {
        id: 'q9',
        question: 'Range du plus petit au plus grand : 1 km, 500 m, 50 cm',
        type: 'multiple-choice',
        options: ['50 cm, 500 m, 1 km', '1 km, 500 m, 50 cm', '500 m, 1 km, 50 cm', '50 cm, 1 km, 500 m'],
        correctAnswer: '50 cm, 500 m, 1 km',
        explanation: '50 cm < 500 m < 1 km. (0,5 m < 500 m < 1000 m)',
        hints: ['Convertis tout en mètres', '50 cm = 0,5 m']
      },
      {
        id: 'q10',
        question: '8 m + 120 cm = combien de cm ?',
        type: 'fill-blank',
        correctAnswer: '920',
        explanation: '8 m + 120 cm = 800 cm + 120 cm = 920 cm',
        hints: ['8 m = 800 cm', '800 + 120 = 920']
      }
    ]
  },

  {
    id: 'math-ce2-006',
    title: 'La géométrie : polygones',
    subject: 'maths',
    level: 'CE2',
    difficulty: 3,
    description: 'Reconnais les formes géométriques',
    estimatedTime: 12,
    skills: ['Géométrie', 'Polygones', 'Formes'],
    questions: [
      {
        id: 'q1',
        question: 'Combien de côtés a un triangle ?',
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        explanation: 'Un triangle a toujours 3 côtés',
        hints: ['Tri = trois', 'Un triangle a 3 côtés']
      },
      {
        id: 'q2',
        question: 'Combien de côtés a un carré ?',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: 'Un carré a 4 côtés égaux',
        hints: ['Comme un rectangle', '4 côtés égaux']
      },
      {
        id: 'q3',
        question: 'Quelle forme a 4 côtés dont 2 sont parallèles ?',
        type: 'multiple-choice',
        options: ['triangle', 'rectangle', 'trapèze', 'cercle'],
        correctAnswer: 'trapèze',
        explanation: 'Le trapèze a 4 côtés dont 2 sont parallèles',
        hints: ['Ce n\'est pas un rectangle', 'Trap... comme trapèze']
      },
      {
        id: 'q4',
        question: 'Combien d\'angles droits a un rectangle ?',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: 'Un rectangle a 4 angles droits (90°)',
        hints: ['Tous ses angles sont droits', 'Autant que de côtés']
      },
      {
        id: 'q5',
        question: 'Comment s\'appelle un polygone à 5 côtés ?',
        type: 'multiple-choice',
        options: ['triangle', 'carré', 'pentagone', 'hexagone'],
        correctAnswer: 'pentagone',
        explanation: 'Un pentagone a 5 côtés (penta = cinq)',
        hints: ['Penta = cinq', 'Pent...-gone']
      },
      {
        id: 'q6',
        question: 'Comment s\'appelle un polygone à 6 côtés ?',
        type: 'fill-blank',
        correctAnswer: 'hexagone',
        explanation: 'Un hexagone a 6 côtés (hexa = six)',
        hints: ['Hexa = six', 'Comme un alvéole de ruche']
      },
      {
        id: 'q7',
        question: 'Un carré a tous ses côtés...',
        type: 'multiple-choice',
        options: ['différents', 'égaux', 'parallèles', 'ronds'],
        correctAnswer: 'égaux',
        explanation: 'Un carré a tous ses côtés égaux',
        hints: ['Ils ont tous la même longueur', 'Tous pareils']
      },
      {
        id: 'q8',
        question: 'Combien de sommets a un triangle ?',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: 'Un triangle a 3 sommets (les coins)',
        hints: ['Autant que de côtés', 'Les coins s\'appellent les sommets']
      },
      {
        id: 'q9',
        question: 'Quelle figure n\'est PAS un polygone ?',
        type: 'multiple-choice',
        options: ['carré', 'triangle', 'cercle', 'rectangle'],
        correctAnswer: 'cercle',
        explanation: 'Le cercle n\'est pas un polygone car il n\'a pas de côtés droits',
        hints: ['Un polygone a des côtés droits', 'Le cercle est rond']
      },
      {
        id: 'q10',
        question: 'Un rectangle a des côtés opposés...',
        type: 'multiple-choice',
        options: ['égaux', 'différents', 'ronds', 'croisés'],
        correctAnswer: 'égaux',
        explanation: 'Dans un rectangle, les côtés opposés sont égaux',
        hints: ['Les côtés d\'en face', 'Parallèles et de même longueur']
      }
    ]
  },

  // ========== CE2 - Français ==========
  {
    id: 'fr-ce2-001',
    title: 'L\'imparfait : verbes du 1er groupe',
    subject: 'francais',
    level: 'CE2',
    difficulty: 3,
    description: 'Conjugue les verbes en -er à l\'imparfait',
    estimatedTime: 15,
    skills: ['Conjugaison', 'Imparfait', 'Verbes du 1er groupe'],
    questions: [
      {
        id: 'q1',
        question: 'Conjugue "chanter" à l\'imparfait : Je... (écris seulement le verbe conjugué)',
        type: 'fill-blank',
        correctAnswer: 'chantais',
        explanation: 'Je chantais. À l\'imparfait, je → -ais',
        hints: ['Je chant...', 'Terminaison : -ais']
      },
      {
        id: 'q2',
        question: 'Conjugue "jouer" à l\'imparfait : Tu...',
        type: 'multiple-choice',
        options: ['jouais', 'joues', 'jouait', 'jouions'],
        correctAnswer: 'jouais',
        explanation: 'Tu jouais. À l\'imparfait, tu → -ais',
        hints: ['Tu jou...', 'Terminaison : -ais']
      },
      {
        id: 'q3',
        question: 'Conjugue "manger" à l\'imparfait : Il... (écris seulement le verbe)',
        type: 'fill-blank',
        correctAnswer: 'mangeait',
        explanation: 'Il mangeait. À l\'imparfait, il/elle → -ait',
        hints: ['Il mange...', 'Terminaison : -ait']
      },
      {
        id: 'q4',
        question: 'Conjugue "parler" à l\'imparfait : Nous...',
        type: 'multiple-choice',
        options: ['parlais', 'parlait', 'parlions', 'parlez'],
        correctAnswer: 'parlions',
        explanation: 'Nous parlions. À l\'imparfait, nous → -ions',
        hints: ['Nous parl...', 'Terminaison : -ions']
      },
      {
        id: 'q5',
        question: 'Conjugue "aimer" à l\'imparfait : Vous... (écris seulement le verbe)',
        type: 'fill-blank',
        correctAnswer: 'aimiez',
        explanation: 'Vous aimiez. À l\'imparfait, vous → -iez',
        hints: ['Vous aim...', 'Terminaison : -iez']
      },
      {
        id: 'q6',
        question: 'Conjugue "danser" à l\'imparfait : Ils...',
        type: 'multiple-choice',
        options: ['dansais', 'dansait', 'dansions', 'dansaient'],
        correctAnswer: 'dansaient',
        explanation: 'Ils dansaient. À l\'imparfait, ils/elles → -aient',
        hints: ['Ils dans...', 'Terminaison : -aient']
      },
      {
        id: 'q7',
        question: 'Quelle est la terminaison de l\'imparfait pour "tu" ?',
        type: 'multiple-choice',
        options: ['-ais', '-ait', '-ions', '-aient'],
        correctAnswer: '-ais',
        explanation: 'Pour "tu" à l\'imparfait, la terminaison est -ais',
        hints: ['Tu chantais, tu jouais...', '-ais']
      },
      {
        id: 'q8',
        question: 'Conjugue "regarder" à l\'imparfait : Elle... (écris seulement le verbe)',
        type: 'fill-blank',
        correctAnswer: 'regardait',
        explanation: 'Elle regardait. À l\'imparfait, elle → -ait',
        hints: ['Elle regard...', 'Terminaison : -ait']
      },
      {
        id: 'q9',
        question: 'Conjugue "travailler" à l\'imparfait : Nous... (écris seulement le verbe)',
        type: 'fill-blank',
        correctAnswer: 'travaillions',
        explanation: 'Nous travaillions. À l\'imparfait, nous → -ions',
        hints: ['Nous travaill...', 'Terminaison : -ions']
      },
      {
        id: 'q10',
        question: 'Quelle phrase est à l\'imparfait ?',
        type: 'multiple-choice',
        options: ['Je mange', 'Je mangeais', 'Je mangerai', 'Je mange'],
        correctAnswer: 'Je mangeais',
        explanation: '"Je mangeais" est à l\'imparfait (terminaison -ais)',
        hints: ['Cherche -ais, -ait, -ions, -iez, -aient', 'L\'imparfait parle du passé']
      }
    ]
  },

  {
    id: 'fr-ce2-002',
    title: 'L\'accord sujet-verbe',
    subject: 'francais',
    level: 'CE2',
    difficulty: 3,
    description: 'Accorde le verbe avec son sujet',
    estimatedTime: 15,
    skills: ['Grammaire', 'Accord', 'Sujet-verbe'],
    questions: [
      {
        id: 'q1',
        question: 'Le chat... sur le toit.',
        type: 'multiple-choice',
        options: ['dort', 'dors', 'dorment', 'dormez'],
        correctAnswer: 'dort',
        explanation: '"Le chat" est singulier (3e personne) → dort',
        hints: ['Le chat = il', 'Singulier : il dort']
      },
      {
        id: 'q2',
        question: 'Les enfants... dans la cour.',
        type: 'multiple-choice',
        options: ['joue', 'joues', 'jouent', 'jouons'],
        correctAnswer: 'jouent',
        explanation: '"Les enfants" est pluriel (3e personne) → jouent',
        hints: ['Les enfants = ils', 'Pluriel : ils jouent']
      },
      {
        id: 'q3',
        question: 'Tu... à l\'école.',
        type: 'fill-blank',
        correctAnswer: 'vas',
        explanation: 'Tu vas (verbe "aller" à la 2e personne du singulier)',
        hints: ['Tu → -s', 'Verbe aller : tu vas']
      },
      {
        id: 'q4',
        question: 'Nous... des histoires.',
        type: 'multiple-choice',
        options: ['lis', 'lit', 'lisons', 'lisent'],
        correctAnswer: 'lisons',
        explanation: '"Nous" → lisons (1re personne du pluriel)',
        hints: ['Nous → -ons', 'Nous lisons']
      },
      {
        id: 'q5',
        question: 'Marie et Paul... au football.',
        type: 'fill-blank',
        correctAnswer: 'jouent',
        explanation: '"Marie et Paul" = pluriel (ils) → jouent',
        hints: ['Marie et Paul = ils', 'Pluriel : -ent']
      },
      {
        id: 'q6',
        question: 'Je... un gâteau.',
        type: 'multiple-choice',
        options: ['mange', 'manges', 'mangeons', 'mangent'],
        correctAnswer: 'mange',
        explanation: '"Je" → mange (1re personne du singulier, pas de -s)',
        hints: ['Je → -e', 'Je mange']
      },
      {
        id: 'q7',
        question: 'Vous... très gentils.',
        type: 'fill-blank',
        correctAnswer: 'êtes',
        explanation: 'Vous êtes (verbe "être" à la 2e personne du pluriel)',
        hints: ['Verbe être', 'Vous êtes']
      },
      {
        id: 'q8',
        question: 'Mon frère... un livre.',
        type: 'multiple-choice',
        options: ['lis', 'lit', 'lisons', 'lisent'],
        correctAnswer: 'lit',
        explanation: '"Mon frère" = il (singulier) → lit',
        hints: ['Mon frère = il', 'Il lit']
      },
      {
        id: 'q9',
        question: 'Les oiseaux... dans le ciel.',
        type: 'fill-blank',
        correctAnswer: 'volent',
        explanation: '"Les oiseaux" = ils (pluriel) → volent',
        hints: ['Les oiseaux = ils', 'Pluriel : -ent']
      },
      {
        id: 'q10',
        question: 'Tu... tes devoirs ?',
        type: 'multiple-choice',
        options: ['fais', 'fait', 'faisons', 'font'],
        correctAnswer: 'fais',
        explanation: '"Tu" → fais (verbe "faire" à la 2e personne du singulier)',
        hints: ['Tu → -s', 'Tu fais']
      }
    ]
  },

  {
    id: 'fr-ce2-003',
    title: 'Les types de phrases',
    subject: 'francais',
    level: 'CE2',
    difficulty: 3,
    description: 'Reconnais les différents types de phrases',
    estimatedTime: 15,
    skills: ['Grammaire', 'Types de phrases', 'Ponctuation'],
    questions: [
      {
        id: 'q1',
        question: 'Quel type de phrase est : "Tu viens jouer ?"',
        type: 'multiple-choice',
        options: ['déclarative', 'interrogative', 'exclamative', 'impérative'],
        correctAnswer: 'interrogative',
        explanation: 'C\'est une phrase interrogative (on pose une question avec ?)',
        hints: ['Il y a un point d\'interrogation', 'On pose une question']
      },
      {
        id: 'q2',
        question: 'Quel type de phrase est : "Quel beau dessin !"',
        type: 'multiple-choice',
        options: ['déclarative', 'interrogative', 'exclamative', 'impérative'],
        correctAnswer: 'exclamative',
        explanation: 'C\'est une phrase exclamative (on exprime un sentiment avec !)',
        hints: ['Il y a un point d\'exclamation', 'On exprime une émotion']
      },
      {
        id: 'q3',
        question: 'Quel type de phrase est : "Range ta chambre."',
        type: 'fill-blank',
        correctAnswer: 'impérative',
        explanation: 'C\'est une phrase impérative (on donne un ordre)',
        hints: ['On donne un ordre', 'Verbe à l\'impératif']
      },
      {
        id: 'q4',
        question: 'Quel type de phrase est : "Le chat dort."',
        type: 'multiple-choice',
        options: ['déclarative', 'interrogative', 'exclamative', 'impérative'],
        correctAnswer: 'déclarative',
        explanation: 'C\'est une phrase déclarative (on déclare quelque chose avec .)',
        hints: ['Il y a un point simple', 'On raconte quelque chose']
      },
      {
        id: 'q5',
        question: 'Par quoi se termine une phrase interrogative ?',
        type: 'fill-blank',
        correctAnswer: '?',
        explanation: 'Une phrase interrogative se termine par un point d\'interrogation (?)',
        hints: ['Le signe des questions', '?']
      },
      {
        id: 'q6',
        question: 'Transforme en phrase interrogative : "Tu aimes le chocolat."',
        type: 'multiple-choice',
        options: [
          'Tu aimes le chocolat !',
          'Aimes-tu le chocolat ?',
          'Tu aimes le chocolat.',
          'Aime le chocolat !'
        ],
        correctAnswer: 'Aimes-tu le chocolat ?',
        explanation: 'Pour poser une question : "Aimes-tu le chocolat ?"',
        hints: ['On inverse le sujet et le verbe', 'Aimes-tu...?']
      },
      {
        id: 'q7',
        question: 'Quel type de phrase pour donner un ordre ?',
        type: 'multiple-choice',
        options: ['déclarative', 'interrogative', 'exclamative', 'impérative'],
        correctAnswer: 'impérative',
        explanation: 'On utilise une phrase impérative pour donner un ordre',
        hints: ['Faire faire quelque chose à quelqu\'un', 'Impér... comme commandement']
      },
      {
        id: 'q8',
        question: 'Transforme en phrase exclamative : "C\'est beau."',
        type: 'fill-blank',
        correctAnswer: 'Comme c\'est beau !',
        explanation: 'Pour exprimer l\'admiration : "Comme c\'est beau !" ou "C\'est beau !"',
        hints: ['Ajoute de l\'émotion', 'Utilise ! et "Comme..."']
      },
      {
        id: 'q9',
        question: 'Quel mot utilise-t-on souvent dans une phrase interrogative ?',
        type: 'multiple-choice',
        options: ['Vite', 'Pourquoi', 'Mais', 'Très'],
        correctAnswer: 'Pourquoi',
        explanation: '"Pourquoi" est un mot interrogatif (Qui, Quoi, Où, Quand, Comment, Pourquoi)',
        hints: ['Un mot qui pose une question', 'Qui, Quoi, Où, Quand...']
      },
      {
        id: 'q10',
        question: 'Quelle phrase est impérative ?',
        type: 'multiple-choice',
        options: [
          'Il fait beau.',
          'Fais tes devoirs !',
          'Tu viens ?',
          'Quel beau temps !'
        ],
        correctAnswer: 'Fais tes devoirs !',
        explanation: '"Fais tes devoirs !" est une phrase impérative (ordre)',
        hints: ['Un ordre', 'Verbe à l\'impératif']
      }
    ]
  },

  {
    id: 'fr-ce2-004',
    title: 'Les homophones : a/à, on/ont, son/sont',
    subject: 'francais',
    level: 'CE2',
    difficulty: 3,
    description: 'Distingue les mots qui se prononcent pareil',
    estimatedTime: 15,
    skills: ['Orthographe', 'Homophones'],
    questions: [
      {
        id: 'q1',
        question: 'Il... un chat. (a ou à ?)',
        type: 'multiple-choice',
        options: ['a', 'à'],
        correctAnswer: 'a',
        explanation: '"a" sans accent = verbe avoir (il a = il avait)',
        hints: ['Verbe avoir', 'Il avait un chat']
      },
      {
        id: 'q2',
        question: 'Il va... l\'école. (a ou à ?)',
        type: 'fill-blank',
        correctAnswer: 'à',
        explanation: '"à" avec accent = préposition (va à, à la maison)',
        hints: ['Préposition de lieu', 'On ne peut pas dire "il va avait"']
      },
      {
        id: 'q3',
        question: '... mange à la cantine. (on ou ont ?)',
        type: 'multiple-choice',
        options: ['On', 'Ont'],
        correctAnswer: 'On',
        explanation: '"On" = pronom (on = nous)',
        hints: ['On = nous', 'Pronom sujet']
      },
      {
        id: 'q4',
        question: 'Ils... un chien. (on ou ont ?)',
        type: 'fill-blank',
        correctAnswer: 'ont',
        explanation: '"ont" = verbe avoir (ils ont = ils avaient)',
        hints: ['Verbe avoir', 'Ils avaient un chien']
      },
      {
        id: 'q5',
        question: 'C\'est... livre. (son ou sont ?)',
        type: 'multiple-choice',
        options: ['son', 'sont'],
        correctAnswer: 'son',
        explanation: '"son" = déterminant possessif (son livre = le livre à lui)',
        hints: ['Le livre de quelqu\'un', 'Déterminant possessif']
      },
      {
        id: 'q6',
        question: 'Ils... contents. (son ou sont ?)',
        type: 'fill-blank',
        correctAnswer: 'sont',
        explanation: '"sont" = verbe être (ils sont = ils étaient)',
        hints: ['Verbe être', 'Ils étaient contents']
      },
      {
        id: 'q7',
        question: 'Elle... une idée. (a ou à ?)',
        type: 'multiple-choice',
        options: ['a', 'à'],
        correctAnswer: 'a',
        explanation: '"a" sans accent = verbe avoir (elle a = elle avait)',
        hints: ['Verbe avoir', 'Elle avait une idée']
      },
      {
        id: 'q8',
        question: '... joue ensemble. (on ou ont ?)',
        type: 'fill-blank',
        correctAnswer: 'On',
        explanation: '"On" = pronom (on joue = nous jouons)',
        hints: ['On = nous', 'Pronom sujet']
      },
      {
        id: 'q9',
        question: 'Elles... parties. (son ou sont ?)',
        type: 'multiple-choice',
        options: ['son', 'sont'],
        correctAnswer: 'sont',
        explanation: '"sont" = verbe être (elles sont parties)',
        hints: ['Verbe être', 'Elles étaient parties']
      },
      {
        id: 'q10',
        question: 'Je vais... Paris. (a ou à ?)',
        type: 'fill-blank',
        correctAnswer: 'à',
        explanation: '"à" avec accent = préposition de lieu',
        hints: ['Préposition', 'On va à un endroit']
      }
    ]
  },

  {
    id: 'fr-ce2-005',
    title: 'Le groupe nominal',
    subject: 'francais',
    level: 'CE2',
    difficulty: 3,
    description: 'Comprendre le groupe nominal (déterminant + nom + adjectif)',
    estimatedTime: 15,
    skills: ['Grammaire', 'Groupe nominal', 'Adjectifs'],
    questions: [
      {
        id: 'q1',
        question: 'Dans "le petit chat", quel est le nom ?',
        type: 'multiple-choice',
        options: ['le', 'petit', 'chat', 'le petit'],
        correctAnswer: 'chat',
        explanation: '"chat" est le nom (l\'être ou la chose dont on parle)',
        hints: ['L\'animal dont on parle', 'Qui ou quoi ?']
      },
      {
        id: 'q2',
        question: 'Dans "une jolie fleur", quel est l\'adjectif ?',
        type: 'fill-blank',
        correctAnswer: 'jolie',
        explanation: '"jolie" est l\'adjectif (il décrit le nom "fleur")',
        hints: ['Le mot qui décrit la fleur', 'Comment est la fleur ?']
      },
      {
        id: 'q3',
        question: 'Dans "les grands arbres", quel est le déterminant ?',
        type: 'multiple-choice',
        options: ['les', 'grands', 'arbres', 'grands arbres'],
        correctAnswer: 'les',
        explanation: '"les" est le déterminant (il accompagne le nom)',
        hints: ['Le petit mot devant le nom', 'Article']
      },
      {
        id: 'q4',
        question: 'Trouve le groupe nominal : "Le chat noir dort."',
        type: 'fill-blank',
        correctAnswer: 'Le chat noir',
        explanation: 'Le groupe nominal est "Le chat noir" (déterminant + nom + adjectif)',
        hints: ['Déterminant + nom + adjectif', 'Le chat noir']
      },
      {
        id: 'q5',
        question: 'Quel adjectif peut compléter : "une ... maison" ?',
        type: 'multiple-choice',
        options: ['grande', 'dormir', 'elle', 'vite'],
        correctAnswer: 'grande',
        explanation: '"grande" est un adjectif qui peut décrire une maison',
        hints: ['Un mot qui décrit', 'Comment est la maison ?']
      },
      {
        id: 'q6',
        question: 'Dans "mon nouveau vélo", combien y a-t-il de mots ?',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: 'Il y a 3 mots : "mon" (déterminant), "nouveau" (adjectif), "vélo" (nom)',
        hints: ['Compte les mots', 'mon / nouveau / vélo']
      },
      {
        id: 'q7',
        question: 'Quel déterminant manque : "... belle journée" ?',
        type: 'multiple-choice',
        options: ['jolie', 'une', 'soleil', 'très'],
        correctAnswer: 'une',
        explanation: '"une" est un déterminant (article indéfini)',
        hints: ['Un petit mot devant', 'un, une, des']
      },
      {
        id: 'q8',
        question: 'Place l\'adjectif : "chien/blanc/un"',
        type: 'fill-blank',
        correctAnswer: 'un chien blanc',
        explanation: 'Le groupe nominal correct est "un chien blanc"',
        hints: ['Déterminant + nom + adjectif', 'un chien blanc']
      },
      {
        id: 'q9',
        question: 'Dans "la voiture rouge", où est placé l\'adjectif ?',
        type: 'multiple-choice',
        options: ['avant le nom', 'après le nom', 'au début', 'à la fin'],
        correctAnswer: 'après le nom',
        explanation: 'L\'adjectif "rouge" est placé après le nom "voiture"',
        hints: ['voiture... rouge', 'Après le nom']
      },
      {
        id: 'q10',
        question: 'Accorde l\'adjectif : "des fleur... rouge..."',
        type: 'fill-blank',
        correctAnswer: 'des fleurs rouges',
        explanation: '"des fleurs rouges" (pluriel : on ajoute -s au nom et à l\'adjectif)',
        hints: ['Pluriel : -s', 'fleurs rouges']
      }
    ]
  },

  {
    id: 'fr-ce2-006',
    title: 'Le futur simple',
    subject: 'francais',
    level: 'CE2',
    difficulty: 3,
    description: 'Conjugue les verbes au futur',
    estimatedTime: 15,
    skills: ['Conjugaison', 'Futur simple'],
    questions: [
      {
        id: 'q1',
        question: 'Conjugue "chanter" au futur : Je...',
        type: 'fill-blank',
        correctAnswer: 'chanterai',
        explanation: 'Je chanterai. Au futur, on garde l\'infinitif + -ai',
        hints: ['chanter + ai', 'Terminaison : -ai']
      },
      {
        id: 'q2',
        question: 'Conjugue "finir" au futur : Tu...',
        type: 'multiple-choice',
        options: ['finiras', 'finis', 'finirais', 'finissais'],
        correctAnswer: 'finiras',
        explanation: 'Tu finiras. Au futur, tu → -as',
        hints: ['finir + as', 'Terminaison : -as']
      },
      {
        id: 'q3',
        question: 'Conjugue "jouer" au futur : Il...',
        type: 'fill-blank',
        correctAnswer: 'jouera',
        explanation: 'Il jouera. Au futur, il/elle → -a',
        hints: ['jouer + a', 'Terminaison : -a']
      },
      {
        id: 'q4',
        question: 'Conjugue "manger" au futur : Nous...',
        type: 'multiple-choice',
        options: ['mangerons', 'mangeons', 'mangerions', 'mangions'],
        correctAnswer: 'mangerons',
        explanation: 'Nous mangerons. Au futur, nous → -ons',
        hints: ['manger + ons', 'Terminaison : -ons']
      },
      {
        id: 'q5',
        question: 'Conjugue "parler" au futur : Vous...',
        type: 'fill-blank',
        correctAnswer: 'parlerez',
        explanation: 'Vous parlerez. Au futur, vous → -ez',
        hints: ['parler + ez', 'Terminaison : -ez']
      },
      {
        id: 'q6',
        question: 'Conjugue "danser" au futur : Ils...',
        type: 'multiple-choice',
        options: ['danseront', 'dansent', 'danseraient', 'dansaient'],
        correctAnswer: 'danseront',
        explanation: 'Ils danseront. Au futur, ils/elles → -ont',
        hints: ['danser + ont', 'Terminaison : -ont']
      },
      {
        id: 'q7',
        question: 'Quelle est la terminaison du futur pour "je" ?',
        type: 'multiple-choice',
        options: ['-ai', '-as', '-a', '-ons'],
        correctAnswer: '-ai',
        explanation: 'Pour "je" au futur, la terminaison est -ai',
        hints: ['Je chanterai, je parlerai...', '-ai']
      },
      {
        id: 'q8',
        question: 'Conjugue "être" au futur : Je...',
        type: 'fill-blank',
        correctAnswer: 'serai',
        explanation: 'Je serai (verbe être, irrégulier au futur)',
        hints: ['Verbe être', 'Je serai']
      },
      {
        id: 'q9',
        question: 'Conjugue "avoir" au futur : Tu...',
        type: 'multiple-choice',
        options: ['auras', 'as', 'avais', 'aurais'],
        correctAnswer: 'auras',
        explanation: 'Tu auras (verbe avoir, irrégulier au futur)',
        hints: ['Verbe avoir', 'Tu auras']
      },
      {
        id: 'q10',
        question: 'Quelle phrase est au futur ?',
        type: 'multiple-choice',
        options: ['Je mange', 'Je mangeais', 'Je mangerai', 'Je mangerais'],
        correctAnswer: 'Je mangerai',
        explanation: '"Je mangerai" est au futur (terminaison -ai)',
        hints: ['Cherche -ai, -as, -a, -ons, -ez, -ont', 'Le futur parle de demain']
      }
    ]
  },

  // ========== CM2 - Français ==========
  // (Les exercices CM2 complets sont dans exercisesLibraryExtended.ts)

  // ========== SCIENCES ==========

  // CE2 - Sciences
  {
    id: 'sci-ce2-001',
    title: 'Le cycle de l\'eau',
    subject: 'sciences',
    level: 'CE2',
    difficulty: 2,
    description: 'Comprends le cycle de l\'eau',
    estimatedTime: 10,
    skills: ['Sciences', 'Cycle de l\'eau'],
    questions: [
      {
        id: 'q1',
        question: 'Que se passe-t-il quand l\'eau chauffe au soleil ?',
        type: 'multiple-choice',
        options: ['Elle gèle', 'Elle s\'évapore', 'Elle devient bleue', 'Elle disparaît'],
        correctAnswer: 'Elle s\'évapore',
        explanation: 'L\'eau s\'évapore : elle se transforme en vapeur d\'eau qui monte dans le ciel.',
        hints: ['Pense à une flaque qui sèche au soleil', 'L\'eau devient de la vapeur']
      }
    ]
  },

  // CM1 - Sciences
  // (Les exercices CM1 complets sont dans exercisesLibraryExtended.ts)

  // ========== ANGLAIS ==========

  // CE2 - Anglais
  {
    id: 'en-ce2-001',
    title: 'Les couleurs en anglais',
    subject: 'anglais',
    level: 'CE2',
    difficulty: 1,
    description: 'Apprends les couleurs en anglais',
    estimatedTime: 5,
    skills: ['Vocabulaire', 'Couleurs'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "rouge" en anglais ?',
        type: 'multiple-choice',
        options: ['Blue', 'Red', 'Green', 'Yellow'],
        correctAnswer: 'Red',
        explanation: 'Rouge = Red en anglais',
        hints: ['Pense aux feux de circulation', 'Ça commence par R']
      }
    ]
  },

  // CM2 - Anglais
  // (Les exercices CM2 complets sont dans exercisesLibraryExtended.ts)

  // Fusion avec la bibliothèque étendue
  ...EXTENDED_EXERCISES
]

/**
 * Récupère tous les exercices pour un niveau donné
 */
export function getExercisesByLevel(level: StudentLevel): Exercise[] {
  return EXERCISE_LIBRARY.filter(ex => ex.level === level)
}

/**
 * Récupère les exercices pour un niveau et une matière
 */
export function getExercisesByLevelAndSubject(level: StudentLevel, subject: Subject): Exercise[] {
  return EXERCISE_LIBRARY.filter(ex => ex.level === level && ex.subject === subject)
}

/**
 * Récupère un exercice par son ID
 */
export function getExerciseById(id: string): Exercise | undefined {
  return EXERCISE_LIBRARY.find(ex => ex.id === id)
}

/**
 * Récupère les matières disponibles pour un niveau
 */
export function getAvailableSubjectsForLevel(level: StudentLevel): Subject[] {
  const subjects = new Set<Subject>()
  EXERCISE_LIBRARY
    .filter(ex => ex.level === level)
    .forEach(ex => subjects.add(ex.subject))
  return Array.from(subjects)
}

/**
 * Compte le nombre d'exercices par matière pour un niveau
 */
export function countExercisesBySubject(level: StudentLevel): Record<Subject, number> {
  const counts: Record<Subject, number> = {
    'maths': 0,
    'francais': 0,
    'sciences': 0,
    'histoire-geo': 0,
    'anglais': 0,
    'decouverte': 0
  }

  EXERCISE_LIBRARY
    .filter(ex => ex.level === level)
    .forEach(ex => {
      if (counts[ex.subject] !== undefined) {
        counts[ex.subject]++
      }
    })

  return counts
}

/**
 * Normalise une valeur monétaire pour comparaison flexible
 * Accepte: "1,50", "1.50", "1,50€", "1.50€", "1,50 €", "1,50 euro", "1,50 euros"
 */
function normalizeMoneyValue(str: string): string {
  return str
    .toLowerCase()
    .trim()
    // Supprime le symbole euro et le mot "euro(s)"
    .replace(/€/g, '')
    .replace(/\s*euros?\s*/gi, '')
    // Normalise la virgule en point pour la comparaison
    .replace(/,/g, '.')
    // Supprime les espaces restants
    .replace(/\s+/g, '')
    .trim()
}

/**
 * Vérifie si une réponse est une valeur monétaire
 */
function isMoneyAnswer(answer: string): boolean {
  return /[\d]/.test(answer) && (
    answer.includes('€') ||
    answer.toLowerCase().includes('euro') ||
    /^\d+[.,]\d+$/.test(answer.trim()) ||
    /^\d+[.,]\d+\s*€?$/.test(answer.trim())
  )
}

/**
 * Normalise une valeur numérique (pour la comparaison flexible des nombres décimaux)
 * Accepte virgule ou point comme séparateur décimal
 */
function normalizeNumericValue(str: string): string {
  const cleaned = str.trim()
  // Si c'est un nombre avec virgule ou point, normaliser en point
  if (/^-?\d+[.,]\d+$/.test(cleaned)) {
    return cleaned.replace(',', '.')
  }
  return cleaned
}

/**
 * Vérifie une réponse d'élève avec normalisation flexible
 * - Accepte virgule ou point pour les décimaux
 * - Accepte €, "euro", "euros" ou rien pour les montants
 * - Comparaison insensible à la casse et aux espaces
 */
export function checkAnswer(
  question: ExerciseQuestion,
  userAnswer: string
): { correct: boolean; feedback: string } {
  const correctAnswers = Array.isArray(question.correctAnswer)
    ? question.correctAnswer
    : [question.correctAnswer]

  const normalizedUserAnswer = userAnswer.trim().toLowerCase()

  // Vérifie chaque réponse correcte possible
  const correct = correctAnswers.some(correctAnswer => {
    const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase()

    // Comparaison exacte simple (après normalisation basique)
    if (normalizedUserAnswer === normalizedCorrectAnswer) {
      return true
    }

    // Pour les valeurs monétaires, comparaison flexible
    if (isMoneyAnswer(correctAnswer) || isMoneyAnswer(userAnswer)) {
      const userMoney = normalizeMoneyValue(userAnswer)
      const correctMoney = normalizeMoneyValue(correctAnswer)
      if (userMoney === correctMoney) {
        return true
      }
    }

    // Pour les valeurs numériques avec décimales (virgule vs point)
    const userNumeric = normalizeNumericValue(userAnswer)
    const correctNumeric = normalizeNumericValue(correctAnswer)
    if (userNumeric === correctNumeric) {
      return true
    }

    // Comparaison sans espaces multiples
    const userNoSpaces = normalizedUserAnswer.replace(/\s+/g, ' ')
    const correctNoSpaces = normalizedCorrectAnswer.replace(/\s+/g, ' ')
    if (userNoSpaces === correctNoSpaces) {
      return true
    }

    return false
  })

  return {
    correct,
    feedback: correct
      ? '✅ Bravo ! C\'est la bonne réponse !'
      : `❌ Pas tout à fait. ${question.explanation}`
  }
}
