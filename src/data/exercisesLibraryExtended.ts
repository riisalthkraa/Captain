/**
 * BIBLIOTHÈQUE ÉTENDUE D'EXERCICES
 * Collection massive et complète d'exercices pour tous les niveaux scolaires
 *
 * Couvre l'ensemble du parcours élémentaire et collège :
 * - CP (6-7 ans) : Compter, additions, voyelles, syllabes
 * - CE1, CE2 : Tables de multiplication, lecture, orthographe
 * - CM1, CM2 : Division, fractions, conjugaison, géométrie
 * - 6ème à 3ème : Algèbre, littérature, sciences, langues
 *
 * Structure des exercices :
 * - ID unique par exercice (format: matière-niveau-numéro)
 * - Questions variées (QCM, vrai/faux, texte libre, complétion)
 * - Système d'indices progressifs pour guider l'élève
 * - Explications pédagogiques détaillées
 * - Estimation du temps de réalisation
 * - Tags de compétences travaillées
 *
 * Cette bibliothèque est fusionnée avec COLLEGE_EXERCISES pour former
 * la base de données complète d'exercices de l'application.
 *
 * @module data/exercisesLibraryExtended
 */

import type { Exercise } from '@/services/exerciseLibrary'
import { COLLEGE_EXERCISES } from './exercisesCollege'

/**
 * Collection étendue d'exercices du CP à la 3ème
 * Fusionnée avec les exercices du collège pour créer la bibliothèque complète
 */
export const EXTENDED_EXERCISES: Exercise[] = [
  // ==================== CP - MATHÉMATIQUES ====================

  {
    id: 'math-cp-003',
    title: 'Les formes géométriques',
    subject: 'maths',
    level: 'CP',
    difficulty: 1,
    description: 'Reconnais les formes : carré, cercle, triangle, rectangle',
    estimatedTime: 15,
    skills: ['Géométrie', 'Formes'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle forme a 3 côtés ?',
        type: 'multiple-choice',
        options: ['Carré', 'Triangle', 'Cercle', 'Rectangle'],
        correctAnswer: 'Triangle',
        explanation: 'Un triangle a 3 côtés et 3 angles. C\'est son nom : tri = trois !',
        hints: ['Tri signifie trois', 'Compte les côtés', 'C\'est le triangle']
      },
      {
        id: 'q2',
        question: 'Quelle forme n\'a pas de coins ?',
        type: 'multiple-choice',
        options: ['Triangle', 'Carré', 'Cercle', 'Rectangle'],
        correctAnswer: 'Cercle',
        explanation: 'Le cercle est rond, il n\'a ni côtés ni coins !',
        hints: ['C\'est une forme ronde', 'Comme une balle', 'Le cercle !']
      },
      {
        id: 'q3',
        question: 'Combien de côtés a un carré ?',
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        explanation: 'Un carré a 4 côtés égaux et 4 coins (angles droits).',
        hints: ['Compte les côtés d\'un carré', 'Pense à une fenêtre', 'C\'est 4']
      },
      {
        id: 'q4',
        question: 'Quelle forme ressemble à une porte ?',
        type: 'multiple-choice',
        options: ['Triangle', 'Cercle', 'Rectangle', 'Carré'],
        correctAnswer: 'Rectangle',
        explanation: 'Un rectangle a 4 côtés mais 2 longs et 2 courts, comme une porte !',
        hints: ['Une porte est plus haute que large', 'Ce n\'est pas un carré', 'Le rectangle !']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Un cercle peut rouler',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le cercle est rond, donc il peut rouler comme une roue ou un ballon.',
        hints: ['Pense à une roue de vélo', 'Les formes rondes roulent']
      },
      {
        id: 'q6',
        question: 'Quelle forme a tous ses côtés égaux : le carré ou le rectangle ?',
        type: 'multiple-choice',
        options: ['Le carré', 'Le rectangle', 'Les deux', 'Aucun'],
        correctAnswer: 'Le carré',
        explanation: 'Le carré a tous ses côtés égaux. Le rectangle a 2 grands côtés et 2 petits côtés.',
        hints: ['Le carré a 4 côtés identiques', 'Le rectangle est allongé']
      },
      {
        id: 'q7',
        question: 'Combien de coins a un triangle ?',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: 'Un triangle a 3 coins (3 angles) et 3 côtés.',
        hints: ['Tri = trois', 'Autant que de côtés', 'La réponse est 3']
      },
      {
        id: 'q8',
        question: 'Quelle forme ressemble au soleil ?',
        type: 'multiple-choice',
        options: ['Triangle', 'Carré', 'Cercle', 'Rectangle'],
        correctAnswer: 'Cercle',
        explanation: 'Le soleil est rond comme un cercle !',
        hints: ['Le soleil est rond', 'Pas de coins', 'C\'est le cercle']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : Un carré est aussi un rectangle',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Un carré est un rectangle spécial où tous les côtés sont égaux.',
        hints: ['Un carré a 4 angles droits comme le rectangle', 'C\'est vrai !']
      },
      {
        id: 'q10',
        question: 'Quelle forme a le moins de côtés ?',
        type: 'multiple-choice',
        options: ['Triangle', 'Carré', 'Rectangle', 'Cercle'],
        correctAnswer: 'Cercle',
        explanation: 'Le cercle n\'a aucun côté ! Ensuite c\'est le triangle avec 3 côtés.',
        hints: ['Qui n\'a pas de côtés du tout ?', 'C\'est rond', 'Le cercle !']
      }
    ]
  },

  {
    id: 'math-cp-004',
    title: 'Soustractions simples',
    subject: 'maths',
    level: 'CP',
    difficulty: 2,
    description: 'Apprends à retirer des nombres de 0 à 10',
    estimatedTime: 18,
    skills: ['Soustraction', 'Calcul mental'],
    questions: [
      {
        id: 'q1',
        question: 'Tu as 5 bonbons et tu en manges 2. Combien t\'en reste-t-il ?',
        type: 'multiple-choice',
        options: ['2', '3', '4', '7'],
        correctAnswer: '3',
        explanation: '5 - 2 = 3. Si tu as 5 bonbons et que tu en manges 2, il t\'en reste 3 !',
        hints: ['Compte sur tes doigts', 'Enlève 2 à 5', 'La réponse est 3']
      },
      {
        id: 'q2',
        question: '8 - 3 = ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: '8 - 3 = 5. Tu peux compter à rebours : 8, 7, 6, 5',
        hints: ['Pars de 8 et enlève 3', 'Compte à rebours', 'C\'est 5']
      },
      {
        id: 'q3',
        question: '7 - 4 = ?',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: '7 - 4 = 3. Compte à rebours : 7, 6, 5, 4... stop ! C\'est 3.',
        hints: ['Pars de 7', 'Enlève 4', 'La réponse est 3']
      },
      {
        id: 'q4',
        question: 'Il y a 10 oiseaux sur une branche. 6 s\'envolent. Combien en reste-t-il ?',
        type: 'multiple-choice',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4',
        explanation: '10 - 6 = 4. Il reste 4 oiseaux sur la branche.',
        hints: ['10 - 6', 'Compte sur tes doigts', 'C\'est 4']
      },
      {
        id: 'q5',
        question: '9 - 5 = ?',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: '9 - 5 = 4. Tu peux compter : 9, 8, 7, 6, 5... c\'est 4 !',
        hints: ['Pars de 9 et recule de 5', 'Compte à rebours', 'La réponse est 4']
      },
      {
        id: 'q6',
        question: '6 - 6 = ?',
        type: 'multiple-choice',
        options: ['0', '1', '6', '12'],
        correctAnswer: '0',
        explanation: '6 - 6 = 0. Si tu enlèves tout, il ne reste rien !',
        hints: ['Tu enlèves tout', 'Il ne reste rien', 'C\'est 0']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : 10 - 2 = 8',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 10 - 2 = 8. Si tu as 10 doigts et que tu en caches 2, il en reste 8.',
        hints: ['Compte sur tes doigts', 'C\'est vrai']
      },
      {
        id: 'q8',
        question: '5 - 1 = ?',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: '5 - 1 = 4. Enlève juste 1 à 5, tu obtiens 4.',
        hints: ['Enlève 1 à 5', 'C\'est facile', 'La réponse est 4']
      },
      {
        id: 'q9',
        question: 'Marie a 7 billes. Elle en perd 3. Combien lui en reste-t-il ?',
        type: 'multiple-choice',
        options: ['3', '4', '5', '10'],
        correctAnswer: '4',
        explanation: '7 - 3 = 4. Il reste 4 billes à Marie.',
        hints: ['7 - 3', 'Compte bien', 'C\'est 4']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : 4 - 2 = 3',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! 4 - 2 = 2, pas 3.',
        hints: ['Calcule bien 4 - 2', 'C\'est faux']
      },
      {
        id: 'q11',
        question: '10 - 10 = ?',
        type: 'fill-blank',
        correctAnswer: '0',
        explanation: '10 - 10 = 0. Si tu enlèves tout, il ne reste rien !',
        hints: ['Tu enlèves tout', 'Il reste rien', 'C\'est 0']
      },
      {
        id: 'q12',
        question: '8 - 1 = ?',
        type: 'fill-blank',
        correctAnswer: '7',
        explanation: '8 - 1 = 7. Juste avant 8 dans la comptine, c\'est 7 !',
        hints: ['Juste avant 8', 'Recule d\'un pas', 'La réponse est 7']
      }
    ]
  },

  {
    id: 'math-cp-005',
    title: 'Comparer les nombres',
    subject: 'maths',
    level: 'CP',
    difficulty: 1,
    description: 'Apprends à comparer : plus grand, plus petit, égal',
    estimatedTime: 15,
    skills: ['Comparaison', 'Nombres'],
    questions: [
      {
        id: 'q1',
        question: 'Quel nombre est le plus grand : 3 ou 7 ?',
        type: 'multiple-choice',
        options: ['3', '7', 'Ils sont égaux', 'Je ne sais pas'],
        correctAnswer: '7',
        explanation: '7 est plus grand que 3. Imagine 7 bonbons contre 3 bonbons !',
        hints: ['Lequel vient après dans la comptine ?', 'Compare sur tes doigts']
      },
      {
        id: 'q2',
        question: 'Quel nombre est le plus petit : 5 ou 2 ?',
        type: 'multiple-choice',
        options: ['5', '2', 'Ils sont égaux', 'Aucun'],
        correctAnswer: '2',
        explanation: '2 est plus petit que 5. Dans la comptine, 2 vient avant 5 !',
        hints: ['Le plus petit vient avant dans 1, 2, 3...', 'C\'est 2']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : 8 est plus grand que 4',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 8 est plus grand que 4. 8 bonbons c\'est plus que 4 bonbons.',
        hints: ['8 vient après 4', 'C\'est vrai']
      },
      {
        id: 'q4',
        question: 'Quel est le plus grand : 10 ou 9 ?',
        type: 'multiple-choice',
        options: ['10', '9', 'Égaux'],
        correctAnswer: '10',
        explanation: '10 est plus grand que 9. C\'est même le plus grand nombre à un chiffre !',
        hints: ['10 est le plus grand', '9 + 1 = 10']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : 3 = 3',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 3 est égal à 3. Le signe = signifie "égal".',
        hints: ['C\'est le même nombre', 'Égal !', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'Range du plus petit au plus grand : 6, 2, 9. Quel nombre vient en premier ?',
        type: 'multiple-choice',
        options: ['6', '2', '9'],
        correctAnswer: '2',
        explanation: '2 est le plus petit, donc il vient en premier : 2, 6, 9',
        hints: ['Le plus petit d\'abord', 'Commence par le début de la comptine', 'C\'est 2']
      },
      {
        id: 'q7',
        question: 'Quel nombre est le plus petit : 1 ou 0 ?',
        type: 'multiple-choice',
        options: ['1', '0', 'Égaux'],
        correctAnswer: '0',
        explanation: '0 est plus petit que 1. Zéro, ça veut dire rien du tout !',
        hints: ['0 = rien', 'Le plus petit c\'est 0']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : 6 est plus petit que 5',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! 6 est PLUS GRAND que 5, pas plus petit.',
        hints: ['6 vient après 5', 'C\'est faux']
      },
      {
        id: 'q9',
        question: 'Entre 4 et 7, quel nombre est au milieu ?',
        type: 'multiple-choice',
        options: ['4', '5', '6', '7'],
        correctAnswer: '5',
        explanation: 'Entre 4 et 7, le nombre du milieu c\'est 5 : 4, 5, 6, 7',
        hints: ['Compte : 4, ?, 6', 'Juste après 4', 'C\'est 5']
      },
      {
        id: 'q10',
        question: 'Quel est le plus grand nombre : 8, 3, ou 5 ?',
        type: 'multiple-choice',
        options: ['8', '3', '5'],
        correctAnswer: '8',
        explanation: '8 est le plus grand de ces trois nombres : 8 > 5 > 3',
        hints: ['Le plus grand vient en dernier dans la comptine', 'C\'est 8']
      }
    ]
  },

  // ==================== CP - SCIENCES ====================

  {
    id: 'sciences-cp-001',
    title: 'Les 5 sens',
    subject: 'sciences',
    level: 'CP',
    difficulty: 1,
    description: 'Découvre tes 5 sens et apprends à les reconnaître',
    estimatedTime: 15,
    skills: ['Identifier les 5 sens', 'Associer un sens à une action'],
    questions: [
      {
        id: 'q1',
        question: 'Quel sens utilises-tu pour voir un oiseau dans le ciel ?',
        type: 'multiple-choice',
        options: ['La vue', 'L\'ouïe', 'Le toucher', 'L\'odorat'],
        correctAnswer: 'La vue',
        explanation: 'Bravo ! Tu utilises tes yeux et la vue pour voir tout ce qui t\'entoure.',
        hints: ['Tu utilises tes yeux', 'C\'est grâce à tes yeux que tu peux lire']
      },
      {
        id: 'q2',
        question: 'Avec quel sens entends-tu la musique ?',
        type: 'multiple-choice',
        options: ['L\'ouïe', 'La vue', 'Le goût', 'Le toucher'],
        correctAnswer: 'L\'ouïe',
        explanation: 'Très bien ! Tes oreilles te permettent d\'entendre tous les sons et la musique.',
        hints: ['Tu utilises tes oreilles', 'C\'est le sens qui capte les sons']
      },
      {
        id: 'q3',
        question: 'Quel sens te permet de sentir l\'odeur des fleurs ?',
        type: 'multiple-choice',
        options: ['L\'odorat', 'Le goût', 'La vue', 'L\'ouïe'],
        correctAnswer: 'L\'odorat',
        explanation: 'Excellent ! Ton nez et l\'odorat te permettent de sentir toutes les odeurs.',
        hints: ['Tu utilises ton nez', 'C\'est le sens des odeurs']
      },
      {
        id: 'q4',
        question: 'Vrai ou faux : Le goût te permet de savoir si un gâteau est sucré.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'C\'est exact ! Ta langue et le sens du goût te disent si c\'est sucré, salé ou amer.',
        hints: ['Tu utilises ta langue pour goûter', 'Le gâteau a un goût sucré']
      },
      {
        id: 'q5',
        question: 'Avec quel sens peux-tu savoir si un objet est doux ou rugueux ?',
        type: 'multiple-choice',
        options: ['Le toucher', 'La vue', 'L\'odorat', 'Le goût'],
        correctAnswer: 'Le toucher',
        explanation: 'Parfait ! Tes mains et ta peau te permettent de sentir si c\'est doux ou rugueux.',
        hints: ['Tu utilises tes mains', 'C\'est le sens de la peau']
      },
      {
        id: 'q6',
        question: 'Vrai ou faux : Tu as 3 sens en tout.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Non, tu as 5 sens : la vue, l\'ouïe, l\'odorat, le goût et le toucher !',
        hints: ['Compte bien tous tes sens', 'Il y en a plus que 3']
      },
      {
        id: 'q7',
        question: 'Pour lire un livre, tu utilises tes...',
        type: 'fill-blank',
        correctAnswer: 'yeux',
        explanation: 'Bravo ! Tes yeux te permettent de lire et de voir les images du livre.',
        hints: ['C\'est sur ton visage', 'Tu en as deux pour voir']
      },
      {
        id: 'q8',
        question: 'Vrai ou faux : Les oreilles servent à sentir les odeurs.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Non ! Les oreilles servent à entendre. C\'est le nez qui sent les odeurs.',
        hints: ['Les oreilles servent à entendre', 'Le nez sert à sentir']
      },
      {
        id: 'q9',
        question: 'Quel sens utilises-tu quand tu caresses un chat ?',
        type: 'multiple-choice',
        options: ['Le toucher', 'L\'ouïe', 'Le goût', 'L\'odorat'],
        correctAnswer: 'Le toucher',
        explanation: 'Super ! Quand tu caresses, tu utilises ton sens du toucher avec tes mains.',
        hints: ['Tu utilises tes mains', 'Tu sens que c\'est doux']
      },
      {
        id: 'q10',
        question: 'Pour manger une pomme, tu utilises le sens du...',
        type: 'fill-blank',
        correctAnswer: 'goût',
        explanation: 'Excellent ! Le goût te permet de savoir si la pomme est sucrée et délicieuse.',
        hints: ['Tu utilises ta langue', 'C\'est le sens qui dit si c\'est bon']
      }
    ]
  },

  {
    id: 'sciences-cp-002',
    title: 'Les animaux',
    subject: 'sciences',
    level: 'CP',
    difficulty: 1,
    description: 'Découvre les animaux de la ferme et de la nature',
    estimatedTime: 15,
    skills: ['Reconnaître les animaux', 'Connaître leur habitat', 'Savoir ce qu\'ils mangent'],
    questions: [
      {
        id: 'q1',
        question: 'Où vit la vache ?',
        type: 'multiple-choice',
        options: ['À la ferme', 'Dans la mer', 'Dans la forêt', 'Dans le désert'],
        correctAnswer: 'À la ferme',
        explanation: 'Bravo ! La vache vit à la ferme avec d\'autres animaux comme le cochon et la poule.',
        hints: ['C\'est là où vivent aussi les poules', 'Le fermier s\'occupe d\'elle']
      },
      {
        id: 'q2',
        question: 'Vrai ou faux : Le lapin mange de la viande.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'C\'est faux ! Le lapin mange des carottes, de la salade et de l\'herbe. C\'est un herbivore.',
        hints: ['Pense à ce que mange le lapin', 'Il adore les carottes']
      },
      {
        id: 'q3',
        question: 'Quel animal vit dans la forêt ?',
        type: 'multiple-choice',
        options: ['Le renard', 'La vache', 'Le mouton', 'La poule'],
        correctAnswer: 'Le renard',
        explanation: 'Très bien ! Le renard est un animal sauvage qui vit dans la forêt.',
        hints: ['C\'est un animal sauvage', 'Il a une queue touffue et est roux']
      },
      {
        id: 'q4',
        question: 'La poule pond des...',
        type: 'fill-blank',
        correctAnswer: 'oeufs',
        explanation: 'Parfait ! La poule pond des œufs que nous pouvons manger au petit-déjeuner.',
        hints: ['On peut les manger au petit-déjeuner', 'Ils sont blancs ou marrons']
      },
      {
        id: 'q5',
        question: 'Vrai ou faux : Le poisson vit dans l\'eau.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui, c\'est vrai ! Les poissons vivent dans l\'eau, dans les rivières et les mers.',
        hints: ['Où nage le poisson ?', 'Il a des nageoires pour nager']
      },
      {
        id: 'q6',
        question: 'Que mange la vache ?',
        type: 'multiple-choice',
        options: ['De l\'herbe', 'De la viande', 'Des bonbons', 'Du pain'],
        correctAnswer: 'De l\'herbe',
        explanation: 'Super ! La vache mange de l\'herbe et du foin. Elle broute dans les prés.',
        hints: ['Elle broute dans le pré', 'C\'est vert et ça pousse par terre']
      },
      {
        id: 'q7',
        question: 'Le chat est un animal de...',
        type: 'fill-blank',
        correctAnswer: 'compagnie',
        explanation: 'Bravo ! Le chat est un animal de compagnie qui vit avec nous à la maison.',
        hints: ['Il vit à la maison avec nous', 'C\'est un animal domestique']
      },
      {
        id: 'q8',
        question: 'Quel animal fait "meuh" ?',
        type: 'multiple-choice',
        options: ['La vache', 'Le cochon', 'Le mouton', 'Le chien'],
        correctAnswer: 'La vache',
        explanation: 'Excellent ! La vache fait "meuh", le cochon fait "groin" et le mouton fait "bêê".',
        hints: ['C\'est un gros animal de la ferme', 'Elle donne du lait']
      },
      {
        id: 'q9',
        question: 'Vrai ou faux : L\'oiseau a des plumes.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui ! Tous les oiseaux ont des plumes qui leur permettent de voler.',
        hints: ['Regarde bien un oiseau', 'C\'est doux et coloré sur son corps']
      },
      {
        id: 'q10',
        question: 'Où dort le chien de la ferme ?',
        type: 'multiple-choice',
        options: ['Dans sa niche', 'Dans un nid', 'Dans la rivière', 'Dans un arbre'],
        correctAnswer: 'Dans sa niche',
        explanation: 'Très bien ! Le chien dort dans sa niche, une petite maison pour lui.',
        hints: ['C\'est une petite maison pour le chien', 'Elle est souvent en bois']
      }
    ]
  },

  {
    id: 'sciences-cp-003',
    title: 'Les saisons',
    subject: 'sciences',
    level: 'CP',
    difficulty: 1,
    description: 'Apprends à reconnaître les 4 saisons et leurs caractéristiques',
    estimatedTime: 15,
    skills: ['Identifier les 4 saisons', 'Connaître la météo', 'Choisir les vêtements adaptés'],
    questions: [
      {
        id: 'q1',
        question: 'Combien y a-t-il de saisons dans l\'année ?',
        type: 'multiple-choice',
        options: ['4 saisons', '2 saisons', '6 saisons', '10 saisons'],
        correctAnswer: '4 saisons',
        explanation: 'Bravo ! Il y a 4 saisons : le printemps, l\'été, l\'automne et l\'hiver.',
        hints: ['Il y en a plus que 2', 'Compte : printemps, été, automne, hiver']
      },
      {
        id: 'q2',
        question: 'En hiver, il fait...',
        type: 'fill-blank',
        correctAnswer: 'froid',
        explanation: 'Parfait ! En hiver, il fait froid et il peut même neiger !',
        hints: ['C\'est le contraire de chaud', 'Tu mets un manteau']
      },
      {
        id: 'q3',
        question: 'Vrai ou faux : En été, il fait très chaud.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui ! En été, il fait très chaud et c\'est le moment d\'aller à la plage.',
        hints: ['Pense aux vacances d\'été', 'On va se baigner']
      },
      {
        id: 'q4',
        question: 'Quelle saison vient après l\'hiver ?',
        type: 'multiple-choice',
        options: ['Le printemps', 'L\'été', 'L\'automne', 'L\'hiver'],
        correctAnswer: 'Le printemps',
        explanation: 'Super ! Après l\'hiver vient le printemps, les fleurs poussent et les oiseaux chantent.',
        hints: ['C\'est la saison des fleurs', 'Elle commence en mars']
      },
      {
        id: 'q5',
        question: 'En automne, les feuilles des arbres tombent et deviennent...',
        type: 'fill-blank',
        correctAnswer: 'jaunes',
        explanation: 'Très bien ! En automne, les feuilles deviennent jaunes, orange ou rouges et tombent.',
        hints: ['C\'est une couleur chaude', 'Comme le soleil ou un citron']
      },
      {
        id: 'q6',
        question: 'Vrai ou faux : En hiver, on peut voir de la neige.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui ! Quand il fait très froid en hiver, il peut neiger et tout devient blanc.',
        hints: ['Quand il fait très froid', 'C\'est blanc et ça tombe du ciel']
      },
      {
        id: 'q7',
        question: 'Quel vêtement portes-tu en hiver pour avoir chaud ?',
        type: 'multiple-choice',
        options: ['Un manteau', 'Un maillot de bain', 'Un short', 'Des sandales'],
        correctAnswer: 'Un manteau',
        explanation: 'Excellent ! En hiver, tu portes un manteau, une écharpe et des gants pour avoir chaud.',
        hints: ['C\'est un vêtement chaud et long', 'Tu le mets par-dessus tes habits']
      },
      {
        id: 'q8',
        question: 'En été, tu portes un maillot de bain pour aller à la...',
        type: 'fill-blank',
        correctAnswer: 'plage',
        explanation: 'Bravo ! En été, on va à la plage ou à la piscine pour se baigner et se rafraîchir.',
        hints: ['C\'est au bord de la mer', 'Il y a du sable et de l\'eau']
      },
      {
        id: 'q9',
        question: 'Au printemps, que se passe-t-il dans la nature ?',
        type: 'multiple-choice',
        options: ['Les fleurs poussent', 'Il neige', 'Les feuilles tombent', 'Il fait très chaud'],
        correctAnswer: 'Les fleurs poussent',
        explanation: 'Parfait ! Au printemps, les fleurs poussent, les arbres ont des feuilles vertes et les bébés animaux naissent.',
        hints: ['C\'est coloré et joli', 'Les arbres deviennent verts']
      },
      {
        id: 'q10',
        question: 'Vrai ou faux : L\'automne arrive après l\'été.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui ! Les saisons se suivent : printemps, été, automne, puis hiver.',
        hints: ['L\'ordre est : printemps, été, automne, hiver', 'Après les vacances d\'été']
      }
    ]
  },

  // ==================== CP - ANGLAIS ====================

  {
    id: 'anglais-cp-001',
    title: 'Les couleurs en anglais',
    subject: 'anglais',
    level: 'CP',
    difficulty: 1,
    description: 'Apprendre les noms des couleurs en anglais',
    estimatedTime: 15,
    skills: ['Vocabulaire des couleurs', 'Compréhension orale'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "rouge" en anglais ?',
        type: 'multiple-choice',
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        correctAnswer: 'Red',
        explanation: 'Rouge se dit "Red" en anglais (prononce "rède")',
        hints: ['C\'est la couleur des fraises', 'Ça commence par la lettre R']
      },
      {
        id: 'q2',
        question: 'Comment dit-on "bleu" en anglais ?',
        type: 'multiple-choice',
        options: ['Green', 'Blue', 'Pink', 'Black'],
        correctAnswer: 'Blue',
        explanation: 'Bleu se dit "Blue" en anglais (prononce "blou")',
        hints: ['C\'est la couleur du ciel', 'Ça commence par la lettre B']
      },
      {
        id: 'q3',
        question: 'Quelle couleur est "Yellow" ?',
        type: 'multiple-choice',
        options: ['Jaune', 'Vert', 'Orange', 'Violet'],
        correctAnswer: 'Jaune',
        explanation: '"Yellow" (prononce "yèlo") signifie jaune en français',
        hints: ['C\'est la couleur du soleil', 'C\'est la couleur des citrons']
      },
      {
        id: 'q4',
        question: 'Comment dit-on "vert" en anglais ?',
        type: 'multiple-choice',
        options: ['Red', 'Green', 'Brown', 'White'],
        correctAnswer: 'Green',
        explanation: 'Vert se dit "Green" en anglais (prononce "grine")',
        hints: ['C\'est la couleur de l\'herbe', 'Ça commence par la lettre G']
      },
      {
        id: 'q5',
        question: 'Quelle couleur est "Pink" ?',
        type: 'multiple-choice',
        options: ['Noir', 'Blanc', 'Rose', 'Marron'],
        correctAnswer: 'Rose',
        explanation: '"Pink" (prononce "pinque") signifie rose en français',
        hints: ['C\'est une couleur douce', 'C\'est la couleur des cochons']
      },
      {
        id: 'q6',
        question: 'Comment dit-on "noir" en anglais ?',
        type: 'multiple-choice',
        options: ['White', 'Black', 'Brown', 'Purple'],
        correctAnswer: 'Black',
        explanation: 'Noir se dit "Black" en anglais (prononce "blaque")',
        hints: ['C\'est le contraire du blanc', 'Ça commence par la lettre B']
      },
      {
        id: 'q7',
        question: 'Quelle couleur est "White" ?',
        type: 'multiple-choice',
        options: ['Blanc', 'Noir', 'Gris', 'Bleu'],
        correctAnswer: 'Blanc',
        explanation: '"White" (prononce "waïte") signifie blanc en français',
        hints: ['C\'est la couleur de la neige', 'C\'est le contraire du noir']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "orange" en anglais ?',
        type: 'multiple-choice',
        options: ['Orange', 'Yellow', 'Red', 'Pink'],
        correctAnswer: 'Orange',
        explanation: 'Orange se dit "Orange" en anglais (prononce "orènje")',
        hints: ['C\'est pareil qu\'en français !', 'C\'est la couleur de l\'orange (le fruit)']
      },
      {
        id: 'q9',
        question: 'Quelle couleur est "Brown" ?',
        type: 'multiple-choice',
        options: ['Violet', 'Marron', 'Jaune', 'Vert'],
        correctAnswer: 'Marron',
        explanation: '"Brown" (prononce "braoun") signifie marron en français',
        hints: ['C\'est la couleur du chocolat', 'C\'est la couleur de la terre']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "violet" en anglais ?',
        type: 'multiple-choice',
        options: ['Purple', 'Blue', 'Pink', 'Black'],
        correctAnswer: 'Purple',
        explanation: 'Violet se dit "Purple" en anglais (prononce "peurpeul")',
        hints: ['Ça commence par la lettre P', 'C\'est un mélange de rouge et bleu']
      }
    ]
  },

  {
    id: 'anglais-cp-002',
    title: 'Les nombres de 1 à 10',
    subject: 'anglais',
    level: 'CP',
    difficulty: 1,
    description: 'Apprendre à compter de 1 à 10 en anglais',
    estimatedTime: 15,
    skills: ['Vocabulaire des nombres', 'Compter en anglais'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "un" (1) en anglais ?',
        type: 'multiple-choice',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 'One',
        explanation: 'Un se dit "One" en anglais (prononce "ouane")',
        hints: ['C\'est le premier nombre', 'Ça commence par la lettre O']
      },
      {
        id: 'q2',
        question: 'Quel nombre est "Two" ?',
        type: 'multiple-choice',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        explanation: '"Two" (prononce "tou") signifie deux en français',
        hints: ['C\'est après le nombre 1', 'C\'est le nombre de tes mains']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "trois" (3) en anglais ?',
        type: 'multiple-choice',
        options: ['Two', 'Three', 'Five', 'Six'],
        correctAnswer: 'Three',
        explanation: 'Trois se dit "Three" en anglais (prononce "sri")',
        hints: ['C\'est après Two', 'Ça commence par la lettre T']
      },
      {
        id: 'q4',
        question: 'Quel nombre est "Five" ?',
        type: 'multiple-choice',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        explanation: '"Five" (prononce "faïve") signifie cinq en français',
        hints: ['C\'est le nombre de doigts sur une main', 'C\'est après le nombre 4']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "quatre" (4) en anglais ?',
        type: 'multiple-choice',
        options: ['Four', 'Five', 'Six', 'Seven'],
        correctAnswer: 'Four',
        explanation: 'Quatre se dit "Four" en anglais (prononce "fore")',
        hints: ['C\'est entre Three et Five', 'C\'est le nombre de pattes d\'un chien']
      },
      {
        id: 'q6',
        question: 'Quel nombre est "Ten" ?',
        type: 'multiple-choice',
        options: ['8', '9', '10', '11'],
        correctAnswer: '10',
        explanation: '"Ten" (prononce "tène") signifie dix en français',
        hints: ['C\'est le dernier nombre qu\'on apprend', 'C\'est le nombre de doigts sur tes deux mains']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "six" (6) en anglais ?',
        type: 'multiple-choice',
        options: ['Four', 'Five', 'Six', 'Seven'],
        correctAnswer: 'Six',
        explanation: 'Six se dit "Six" en anglais (prononce "sixe")',
        hints: ['C\'est presque pareil qu\'en français', 'C\'est après Five']
      },
      {
        id: 'q8',
        question: 'Quel nombre est "Eight" ?',
        type: 'multiple-choice',
        options: ['6', '7', '8', '9'],
        correctAnswer: '8',
        explanation: '"Eight" (prononce "eïte") signifie huit en français',
        hints: ['C\'est entre 7 et 9', 'C\'est le nombre de pattes d\'une araignée']
      },
      {
        id: 'q9',
        question: 'Comment dit-on "sept" (7) en anglais ?',
        type: 'multiple-choice',
        options: ['Six', 'Seven', 'Eight', 'Nine'],
        correctAnswer: 'Seven',
        explanation: 'Sept se dit "Seven" en anglais (prononce "sèvène")',
        hints: ['C\'est entre Six et Eight', 'C\'est le nombre de jours dans une semaine']
      },
      {
        id: 'q10',
        question: 'Quel nombre est "Nine" ?',
        type: 'multiple-choice',
        options: ['7', '8', '9', '10'],
        correctAnswer: '9',
        explanation: '"Nine" (prononce "naïne") signifie neuf en français',
        hints: ['C\'est juste avant Ten', 'C\'est entre 8 et 10']
      }
    ]
  },

  {
    id: 'anglais-cp-003',
    title: 'Les animaux en anglais',
    subject: 'anglais',
    level: 'CP',
    difficulty: 1,
    description: 'Apprendre les noms des animaux en anglais',
    estimatedTime: 15,
    skills: ['Vocabulaire des animaux', 'Reconnaissance des mots'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "chat" en anglais ?',
        type: 'multiple-choice',
        options: ['Cat', 'Dog', 'Mouse', 'Bird'],
        correctAnswer: 'Cat',
        explanation: 'Chat se dit "Cat" en anglais (prononce "quate")',
        hints: ['C\'est un animal qui dit "meow"', 'Ça commence par la lettre C']
      },
      {
        id: 'q2',
        question: 'Quel animal est "Dog" ?',
        type: 'multiple-choice',
        options: ['Chat', 'Chien', 'Lapin', 'Oiseau'],
        correctAnswer: 'Chien',
        explanation: '"Dog" (prononce "dogue") signifie chien en français',
        hints: ['C\'est l\'animal qui aboie', 'C\'est le meilleur ami de l\'homme']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "oiseau" en anglais ?',
        type: 'multiple-choice',
        options: ['Fish', 'Bird', 'Mouse', 'Rabbit'],
        correctAnswer: 'Bird',
        explanation: 'Oiseau se dit "Bird" en anglais (prononce "beurde")',
        hints: ['C\'est un animal qui vole', 'Ça commence par la lettre B']
      },
      {
        id: 'q4',
        question: 'Quel animal est "Fish" ?',
        type: 'multiple-choice',
        options: ['Poisson', 'Cochon', 'Vache', 'Cheval'],
        correctAnswer: 'Poisson',
        explanation: '"Fish" (prononce "fiche") signifie poisson en français',
        hints: ['C\'est un animal qui vit dans l\'eau', 'C\'est un animal qui nage']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "lapin" en anglais ?',
        type: 'multiple-choice',
        options: ['Mouse', 'Rabbit', 'Horse', 'Cow'],
        correctAnswer: 'Rabbit',
        explanation: 'Lapin se dit "Rabbit" en anglais (prononce "rabite")',
        hints: ['C\'est un animal avec de longues oreilles', 'Ça commence par la lettre R']
      },
      {
        id: 'q6',
        question: 'Quel animal est "Mouse" ?',
        type: 'multiple-choice',
        options: ['Souris', 'Poule', 'Cochon', 'Vache'],
        correctAnswer: 'Souris',
        explanation: '"Mouse" (prononce "maousse") signifie souris en français',
        hints: ['C\'est un petit animal qui aime le fromage', 'Le chat aime le chasser']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "cheval" en anglais ?',
        type: 'multiple-choice',
        options: ['Cow', 'Pig', 'Horse', 'Chicken'],
        correctAnswer: 'Horse',
        explanation: 'Cheval se dit "Horse" en anglais (prononce "horss")',
        hints: ['C\'est un grand animal qu\'on peut monter', 'Ça commence par la lettre H']
      },
      {
        id: 'q8',
        question: 'Quel animal est "Cow" ?',
        type: 'multiple-choice',
        options: ['Cheval', 'Vache', 'Cochon', 'Poule'],
        correctAnswer: 'Vache',
        explanation: '"Cow" (prononce "kaou") signifie vache en français',
        hints: ['C\'est un animal qui donne du lait', 'C\'est un animal qui dit "meuh"']
      },
      {
        id: 'q9',
        question: 'Comment dit-on "cochon" en anglais ?',
        type: 'multiple-choice',
        options: ['Pig', 'Chicken', 'Cat', 'Dog'],
        correctAnswer: 'Pig',
        explanation: 'Cochon se dit "Pig" en anglais (prononce "pigue")',
        hints: ['C\'est un animal rose', 'Ça commence par la lettre P']
      },
      {
        id: 'q10',
        question: 'Quel animal est "Chicken" ?',
        type: 'multiple-choice',
        options: ['Lapin', 'Souris', 'Poule', 'Oiseau'],
        correctAnswer: 'Poule',
        explanation: '"Chicken" (prononce "tchikène") signifie poule en français',
        hints: ['C\'est un animal qui pond des œufs', 'C\'est un animal qui fait "cot cot"']
      }
    ]
  },

  // ==================== CP - DÉCOUVERTE DU MONDE ====================

  {
    id: 'decouverte-cp-001',
    title: 'Les jours de la semaine',
    subject: 'histoire-geo',
    level: 'CP',
    difficulty: 1,
    description: 'Apprends à reconnaître et ordonner les jours de la semaine',
    estimatedTime: 15,
    skills: ['Se repérer dans le temps', 'Connaître les jours de la semaine'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est le premier jour de la semaine ?',
        type: 'multiple-choice',
        options: ['Lundi', 'Dimanche', 'Mardi', 'Samedi'],
        correctAnswer: 'Lundi',
        explanation: 'Bravo ! La semaine commence le lundi. C\'est souvent le jour où tu retournes à l\'école après le week-end.',
        hints: ['C\'est le jour où on retourne à l\'école', 'Ce jour commence par la lettre L']
      },
      {
        id: 'q2',
        question: 'Quel jour vient après mardi ?',
        type: 'multiple-choice',
        options: ['Jeudi', 'Lundi', 'Mercredi', 'Vendredi'],
        correctAnswer: 'Mercredi',
        explanation: 'Très bien ! Après mardi, c\'est mercredi. C\'est le milieu de la semaine !',
        hints: ['Ce jour est au milieu de la semaine', 'Ce jour commence par la lettre M']
      },
      {
        id: 'q3',
        question: 'Si nous sommes lundi, quel jour étions-nous hier ?',
        type: 'multiple-choice',
        options: ['Dimanche', 'Mardi', 'Samedi', 'Vendredi'],
        correctAnswer: 'Dimanche',
        explanation: 'Excellent ! Hier, c\'était dimanche. Le dimanche est le dernier jour du week-end.',
        hints: ['Hier, c\'était encore le week-end', 'C\'est le dernier jour de la semaine']
      },
      {
        id: 'q4',
        question: 'Combien y a-t-il de jours dans une semaine ?',
        type: 'multiple-choice',
        options: ['7 jours', '5 jours', '10 jours', '6 jours'],
        correctAnswer: '7 jours',
        explanation: 'Super ! Une semaine a 7 jours : lundi, mardi, mercredi, jeudi, vendredi, samedi et dimanche.',
        hints: ['Compte les jours de lundi à dimanche', 'C\'est plus que 5 mais moins que 10']
      },
      {
        id: 'q5',
        question: 'Vrai ou faux : Le samedi et le dimanche, c\'est le week-end.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui, c\'est vrai ! Le week-end, c\'est samedi et dimanche. Il n\'y a pas école ces jours-là.',
        hints: ['Pense aux jours où tu ne vas pas à l\'école', 'Ce sont les deux derniers jours de la semaine']
      },
      {
        id: 'q6',
        question: 'Quel jour vient juste avant samedi ?',
        type: 'multiple-choice',
        options: ['Vendredi', 'Jeudi', 'Dimanche', 'Mercredi'],
        correctAnswer: 'Vendredi',
        explanation: 'Parfait ! Vendredi est juste avant samedi. Après vendredi, c\'est le week-end qui commence !',
        hints: ['C\'est le dernier jour d\'école de la semaine', 'Après ce jour, c\'est le week-end']
      },
      {
        id: 'q7',
        question: 'Vrai ou faux : Si aujourd\'hui c\'est mercredi, demain ce sera jeudi.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Bravo ! Demain veut dire le jour d\'après. Après mercredi, c\'est bien jeudi.',
        hints: ['Demain, c\'est le jour qui vient juste après', 'Quel jour suit mercredi ?']
      },
      {
        id: 'q8',
        question: 'Complète : Lundi, mardi, mercredi, ...',
        type: 'fill-blank',
        correctAnswer: 'jeudi',
        explanation: 'Très bien ! Après mercredi vient jeudi. Tu connais bien l\'ordre des jours !',
        hints: ['C\'est le 4ème jour de la semaine', 'Ce jour commence par la lettre J']
      },
      {
        id: 'q9',
        question: 'Quel est le dernier jour de la semaine ?',
        type: 'multiple-choice',
        options: ['Dimanche', 'Samedi', 'Vendredi', 'Lundi'],
        correctAnswer: 'Dimanche',
        explanation: 'Excellent ! Dimanche est le dernier jour de la semaine. Après, la semaine recommence avec lundi.',
        hints: ['C\'est un jour du week-end', 'Après ce jour, c\'est de nouveau lundi']
      },
      {
        id: 'q10',
        question: 'Vrai ou faux : Tu vas à l\'école le dimanche.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'C\'est faux ! Le dimanche, c\'est le week-end, tu ne vas pas à l\'école.',
        hints: ['Pense aux jours où tu te reposes', 'Le dimanche fait partie du week-end']
      }
    ]
  },

  {
    id: 'decouverte-cp-002',
    title: 'Se repérer dans l\'espace',
    subject: 'histoire-geo',
    level: 'CP',
    difficulty: 1,
    description: 'Apprends à te repérer : gauche, droite, devant, derrière, dessus, dessous',
    estimatedTime: 15,
    skills: ['Se repérer dans l\'espace', 'Connaître les positions'],
    questions: [
      {
        id: 'q1',
        question: 'Le chat est SUR la table. Où est le chat ?',
        type: 'multiple-choice',
        options: ['Dessus la table', 'Dessous la table', 'À côté de la table', 'Loin de la table'],
        correctAnswer: 'Dessus la table',
        explanation: 'Bravo ! Quand quelque chose est SUR un objet, c\'est DESSUS.',
        hints: ['Sur veut dire au-dessus', 'Le chat est en haut de la table']
      },
      {
        id: 'q2',
        question: 'Vrai ou faux : Ta main droite est celle avec laquelle tu écris (si tu es droitier).',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui, c\'est vrai ! La plupart des enfants écrivent avec leur main droite.',
        hints: ['Pense à la main que tu utilises pour écrire', 'Regarde avec quelle main tu tiens ton crayon']
      },
      {
        id: 'q3',
        question: 'Le chien est caché SOUS le lit. Où est-il ?',
        type: 'multiple-choice',
        options: ['Dessous le lit', 'Dessus le lit', 'Devant le lit', 'Derrière le lit'],
        correctAnswer: 'Dessous le lit',
        explanation: 'Très bien ! SOUS veut dire DESSOUS. Le chien est en-dessous du lit.',
        hints: ['Sous veut dire en-dessous', 'Le chien est caché en bas du lit']
      },
      {
        id: 'q4',
        question: 'Si tu regardes devant toi, ton dos est...',
        type: 'multiple-choice',
        options: ['Derrière toi', 'Devant toi', 'À côté de toi', 'Dessus toi'],
        correctAnswer: 'Derrière toi',
        explanation: 'Parfait ! Ton dos est toujours derrière toi, et ton ventre est devant toi.',
        hints: ['Tu ne peux pas voir ton dos', 'C\'est l\'opposé de devant']
      },
      {
        id: 'q5',
        question: 'Vrai ou faux : Ton nez est entre tes deux yeux.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui, bravo ! Ton nez est bien au milieu de ton visage, entre ton œil gauche et ton œil droit.',
        hints: ['Touche ton visage avec ton doigt', 'Ton nez est au milieu']
      },
      {
        id: 'q6',
        question: 'L\'oiseau vole AU-DESSUS de la maison, le ver de terre rampe EN-...',
        type: 'fill-blank',
        correctAnswer: 'dessous',
        explanation: 'Excellent ! Le ver de terre est EN-DESSOUS, dans la terre, sous le sol.',
        hints: ['C\'est l\'opposé de dessus', 'Le ver est dans la terre, en bas']
      },
      {
        id: 'q7',
        question: 'Quand tu es assis en classe, le tableau est...',
        type: 'multiple-choice',
        options: ['Devant toi', 'Derrière toi', 'Dessus toi', 'Dessous toi'],
        correctAnswer: 'Devant toi',
        explanation: 'Super ! Le tableau est devant toi, face à toi.',
        hints: ['Tu regardes le tableau', 'C\'est face à toi']
      },
      {
        id: 'q8',
        question: 'Vrai ou faux : Si tu lèves la main gauche, ton oreille gauche est du même côté.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui, très bien ! Ton oreille gauche et ta main gauche sont du même côté de ton corps.',
        hints: ['Lève ta main gauche et touche ton oreille', 'Le mot "gauche" est le même pour les deux']
      },
      {
        id: 'q9',
        question: 'L\'école est proche de chez toi. Cela veut dire qu\'elle est...',
        type: 'multiple-choice',
        options: ['Près de chez toi', 'Loin de chez toi', 'Dessus ta maison', 'Dessous ta maison'],
        correctAnswer: 'Près de chez toi',
        explanation: 'Bravo ! Proche veut dire PRÈS. Tu n\'as pas besoin de marcher longtemps.',
        hints: ['Proche veut dire pas très loin', 'C\'est l\'opposé de loin']
      },
      {
        id: 'q10',
        question: 'Le chapeau est sur la tête, les chaussures sont aux...',
        type: 'fill-blank',
        correctAnswer: 'pieds',
        explanation: 'Parfait ! Les chaussures se mettent aux pieds, tout en bas de ton corps.',
        hints: ['C\'est tout en bas de ton corps', 'Tu marches avec cette partie du corps']
      }
    ]
  },

  {
    id: 'decouverte-cp-003',
    title: 'Ma journée',
    subject: 'histoire-geo',
    level: 'CP',
    difficulty: 1,
    description: 'Découvre les différents moments de la journée et les activités',
    estimatedTime: 15,
    skills: ['Se repérer dans la journée', 'Connaître les moments de la journée'],
    questions: [
      {
        id: 'q1',
        question: 'Le matin, quand tu te réveilles, tu prends...',
        type: 'multiple-choice',
        options: ['Le petit-déjeuner', 'Le déjeuner', 'Le goûter', 'Le dîner'],
        correctAnswer: 'Le petit-déjeuner',
        explanation: 'Bravo ! Le matin, on prend le petit-déjeuner. C\'est le premier repas de la journée !',
        hints: ['C\'est le premier repas du matin', 'Ce repas a le mot "petit" dedans']
      },
      {
        id: 'q2',
        question: 'Vrai ou faux : Tu vas à l\'école le matin.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui, c\'est vrai ! En général, l\'école commence le matin, après le petit-déjeuner.',
        hints: ['Pense à quand tu te lèves', 'C\'est avant midi']
      },
      {
        id: 'q3',
        question: 'Quel repas prends-tu à midi ?',
        type: 'multiple-choice',
        options: ['Le déjeuner', 'Le petit-déjeuner', 'Le goûter', 'Le dîner'],
        correctAnswer: 'Le déjeuner',
        explanation: 'Très bien ! À midi, c\'est l\'heure du déjeuner. Tu manges à la cantine ou à la maison.',
        hints: ['C\'est le repas du milieu de la journée', 'Tu manges ce repas à la cantine']
      },
      {
        id: 'q4',
        question: 'Le soir, avant de dormir, tu mets ton...',
        type: 'fill-blank',
        correctAnswer: 'pyjama',
        explanation: 'Parfait ! Le soir, tu mets ton pyjama pour dormir confortablement toute la nuit.',
        hints: ['C\'est un vêtement pour dormir', 'Ce mot commence par la lettre P']
      },
      {
        id: 'q5',
        question: 'Quand il fait nuit et que tu dors, c\'est...',
        type: 'multiple-choice',
        options: ['La nuit', 'Le matin', 'L\'après-midi', 'Midi'],
        correctAnswer: 'La nuit',
        explanation: 'Excellent ! Quand il fait noir dehors et que tu dors dans ton lit, c\'est la nuit.',
        hints: ['Il fait tout noir dehors', 'C\'est quand tu es dans ton lit']
      },
      {
        id: 'q6',
        question: 'Vrai ou faux : L\'après-midi vient après le matin.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui, bravo ! L\'après-midi commence après le déjeuner, après le matin.',
        hints: ['Regarde bien le mot "après-midi"', 'C\'est après le repas de midi']
      },
      {
        id: 'q7',
        question: 'Vers 16h, après l\'école, tu prends...',
        type: 'multiple-choice',
        options: ['Le goûter', 'Le dîner', 'Le déjeuner', 'Le petit-déjeuner'],
        correctAnswer: 'Le goûter',
        explanation: 'Super ! Vers 16h, en rentrant de l\'école, c\'est l\'heure du goûter.',
        hints: ['C\'est après l\'école', 'Ce n\'est pas un gros repas, c\'est une petite pause']
      },
      {
        id: 'q8',
        question: 'Le matin, tu te réveilles. Le soir, tu te...',
        type: 'fill-blank',
        correctAnswer: 'couches',
        explanation: 'Très bien ! Le soir, tu te couches pour dormir. C\'est l\'opposé de se réveiller !',
        hints: ['C\'est l\'opposé de se réveiller', 'Tu vas dans ton lit']
      },
      {
        id: 'q9',
        question: 'Le dernier repas de la journée, le soir, s\'appelle...',
        type: 'multiple-choice',
        options: ['Le dîner', 'Le goûter', 'Le déjeuner', 'Le petit-déjeuner'],
        correctAnswer: 'Le dîner',
        explanation: 'Parfait ! Le dîner est le repas du soir, le dernier repas avant d\'aller dormir.',
        hints: ['C\'est le repas du soir', 'Tu manges ce repas avec ta famille avant de dormir']
      },
      {
        id: 'q10',
        question: 'Vrai ou faux : Tu te brosses les dents après les repas.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui, bravo ! C\'est important de se brosser les dents après avoir mangé.',
        hints: ['C\'est bon pour la santé de tes dents', 'Tu utilises une brosse à dents et du dentifrice']
      }
    ]
  },

  // ==================== CE1 - MATHÉMATIQUES ====================

  {
    id: 'math-ce1-002',
    title: 'Doubles et moitiés',
    subject: 'maths',
    level: 'CE1',
    difficulty: 2,
    description: 'Calcule le double et la moitié des nombres',
    estimatedTime: 18,
    skills: ['Double', 'Moitié', 'Multiplication'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est le double de 4 ?',
        type: 'multiple-choice',
        options: ['2', '6', '8', '12'],
        correctAnswer: '8',
        explanation: 'Le double de 4 c\'est 4 + 4 = 8, ou 4 × 2 = 8',
        hints: ['Double = multiplier par 2', '4 + 4', 'C\'est 8']
      },
      {
        id: 'q2',
        question: 'Quelle est la moitié de 10 ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: 'La moitié de 10 c\'est 5. Divise 10 en 2 parts égales : 10 ÷ 2 = 5',
        hints: ['Moitié = diviser par 2', '10 ÷ 2', 'La réponse est 5']
      },
      {
        id: 'q3',
        question: 'Quel est le double de 7 ?',
        type: 'fill-blank',
        correctAnswer: '14',
        explanation: 'Le double de 7 c\'est 7 + 7 = 14, ou 7 × 2 = 14',
        hints: ['7 + 7', 'Multiplie par 2', 'C\'est 14']
      },
      {
        id: 'q4',
        question: 'Quelle est la moitié de 16 ?',
        type: 'multiple-choice',
        options: ['6', '7', '8', '9'],
        correctAnswer: '8',
        explanation: 'La moitié de 16 c\'est 8. 16 ÷ 2 = 8',
        hints: ['Divise par 2', '16 ÷ 2', 'C\'est 8']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Le double de 6 est 12',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 6 × 2 = 12 ou 6 + 6 = 12',
        hints: ['6 + 6', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'Quelle est la moitié de 20 ?',
        type: 'fill-blank',
        correctAnswer: '10',
        explanation: 'La moitié de 20 c\'est 10. 20 ÷ 2 = 10',
        hints: ['Divise en deux parts égales', '20 ÷ 2', 'C\'est 10']
      },
      {
        id: 'q7',
        question: 'Quel est le double de 9 ?',
        type: 'multiple-choice',
        options: ['16', '17', '18', '19'],
        correctAnswer: '18',
        explanation: 'Le double de 9 c\'est 9 + 9 = 18, ou 9 × 2 = 18',
        hints: ['9 + 9', 'Multiplie par 2']
      },
      {
        id: 'q8',
        question: 'Quelle est la moitié de 14 ?',
        type: 'fill-blank',
        correctAnswer: '7',
        explanation: 'La moitié de 14 c\'est 7. 14 ÷ 2 = 7',
        hints: ['14 ÷ 2', 'La réponse est 7']
      },
      {
        id: 'q9',
        question: 'Si tu as le double de 5 bonbons, combien en as-tu ?',
        type: 'multiple-choice',
        options: ['8', '9', '10', '11'],
        correctAnswer: '10',
        explanation: 'Le double de 5 c\'est 5 × 2 = 10 bonbons !',
        hints: ['5 + 5', 'Double de 5', 'C\'est 10']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : La moitié de 18 est 8',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! La moitié de 18 est 9, pas 8. 18 ÷ 2 = 9',
        hints: ['18 ÷ 2 = ?', 'C\'est faux']
      }
    ]
  },

  {
    id: 'math-ce1-003',
    title: 'L\'heure - Lire l\'horloge',
    subject: 'maths',
    level: 'CE1',
    difficulty: 3,
    description: 'Apprends à lire l\'heure',
    estimatedTime: 20,
    skills: ['Heure', 'Temps'],
    questions: [
      {
        id: 'q1',
        question: 'Quand la petite aiguille est sur le 3 et la grande sur le 12, quelle heure est-il ?',
        type: 'multiple-choice',
        options: ['12h00', '3h00', '3h30', '15h00'],
        correctAnswer: '3h00',
        explanation: 'La petite aiguille indique l\'heure (3) et la grande indique les minutes (0). C\'est 3h00 !',
        hints: ['La petite aiguille = les heures', 'La grande aiguille sur 12 = pile']
      },
      {
        id: 'q2',
        question: 'Quand la grande aiguille est sur le 6, combien de minutes cela fait-il ?',
        type: 'multiple-choice',
        options: ['15 minutes', '20 minutes', '30 minutes', '45 minutes'],
        correctAnswer: '30 minutes',
        explanation: 'La grande aiguille sur le 6 indique 30 minutes (et demie)',
        hints: ['Le 6 est en bas de l\'horloge', 'C\'est la demie', '30 minutes']
      },
      {
        id: 'q3',
        question: 'Il est 7h30. Où est la grande aiguille ?',
        type: 'multiple-choice',
        options: ['Sur le 12', 'Sur le 3', 'Sur le 6', 'Sur le 9'],
        correctAnswer: 'Sur le 6',
        explanation: '30 minutes = la grande aiguille sur le 6',
        hints: ['30 minutes = et demie', 'C\'est le 6']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : Quand la grande aiguille fait un tour complet, 1 heure est passée',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! La grande aiguille fait le tour de l\'horloge en 60 minutes = 1 heure',
        hints: ['60 minutes = 1 heure', 'C\'est vrai']
      },
      {
        id: 'q5',
        question: 'Quand il est 5h00, où est la petite aiguille ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: 'La petite aiguille pointe sur le 5 quand il est 5h00',
        hints: ['La petite aiguille montre les heures', 'C\'est 5']
      },
      {
        id: 'q6',
        question: 'Combien y a-t-il de minutes dans une heure ?',
        type: 'multiple-choice',
        options: ['30', '50', '60', '100'],
        correctAnswer: '60',
        explanation: '1 heure = 60 minutes',
        hints: ['Plus que 50', 'C\'est 60']
      },
      {
        id: 'q7',
        question: 'Il est 9h15. La grande aiguille est sur le :',
        type: 'multiple-choice',
        options: ['3', '6', '9', '12'],
        correctAnswer: '3',
        explanation: '15 minutes = un quart d\'heure = la grande aiguille sur le 3',
        hints: ['15 minutes = quart d\'heure', 'C\'est le 3']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : La petite aiguille tourne plus vite que la grande',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! La petite aiguille (heures) tourne MOINS vite que la grande (minutes)',
        hints: ['Observe une horloge', 'C\'est faux']
      },
      {
        id: 'q9',
        question: 'Quelle heure est-il : petite aiguille sur 12, grande aiguille sur 12 ?',
        type: 'multiple-choice',
        options: ['11h00', '12h00', '1h00', '12h30'],
        correctAnswer: '12h00',
        explanation: 'Les deux aiguilles sur le 12 = midi ou minuit = 12h00',
        hints: ['Les deux sur le 12', 'C\'est midi', '12h00']
      },
      {
        id: 'q10',
        question: 'Combien de temps entre 2h00 et 3h00 ?',
        type: 'fill-blank',
        correctAnswer: '1',
        explanation: 'Entre 2h00 et 3h00, il s\'écoule 1 heure (60 minutes)',
        hints: ['D\'une heure à la suivante', 'C\'est 1 heure']
      }
    ]
  },

  {
    id: 'math-ce1-004',
    title: 'Problèmes simples',
    subject: 'maths',
    level: 'CE1',
    difficulty: 2,
    description: 'Résous des problèmes de la vie quotidienne',
    estimatedTime: 18,
    skills: ['Problèmes', 'Addition', 'Soustraction'],
    questions: [
      {
        id: 'q1',
        question: 'Lucas a 12 billes. Il en gagne 5 au jeu. Combien en a-t-il maintenant ?',
        type: 'fill-blank',
        correctAnswer: '17',
        explanation: '12 + 5 = 17 billes. Lucas en a maintenant 17 !',
        hints: ['C\'est une addition', '12 + 5', 'La réponse est 17']
      },
      {
        id: 'q2',
        question: 'Marie a 20€. Elle achète un livre à 8€. Combien lui reste-t-il ?',
        type: 'fill-blank',
        correctAnswer: '12',
        explanation: '20 - 8 = 12€. Il lui reste 12€ !',
        hints: ['C\'est une soustraction', '20 - 8']
      },
      {
        id: 'q3',
        question: 'Dans une classe, il y a 14 filles et 13 garçons. Combien d\'élèves en tout ?',
        type: 'fill-blank',
        correctAnswer: '27',
        explanation: '14 + 13 = 27 élèves en tout',
        hints: ['Additionne filles et garçons', '14 + 13', 'C\'est 27']
      },
      {
        id: 'q4',
        question: 'Tom a 25 autocollants. Il en donne 7 à son ami. Combien lui en reste-t-il ?',
        type: 'multiple-choice',
        options: ['16', '17', '18', '19'],
        correctAnswer: '18',
        explanation: '25 - 7 = 18 autocollants',
        hints: ['Il faut soustraire', '25 - 7', 'C\'est 18']
      },
      {
        id: 'q5',
        question: 'Sophie a 3 boîtes de 5 crayons. Combien a-t-elle de crayons en tout ?',
        type: 'fill-blank',
        correctAnswer: '15',
        explanation: '3 boîtes de 5 = 3 × 5 = 15 crayons ou 5 + 5 + 5 = 15',
        hints: ['3 fois 5', '5 + 5 + 5', 'C\'est 15']
      },
      {
        id: 'q6',
        question: 'Un gâteau coûte 6€. J\'achète 2 gâteaux. Combien vais-je payer ?',
        type: 'multiple-choice',
        options: ['8€', '10€', '12€', '14€'],
        correctAnswer: '12€',
        explanation: '6€ × 2 = 12€ ou 6 + 6 = 12€',
        hints: ['Le double de 6', '6 + 6']
      },
      {
        id: 'q7',
        question: 'Il y a 30 bonbons à partager entre 2 enfants. Combien chacun en reçoit-il ?',
        type: 'fill-blank',
        correctAnswer: '15',
        explanation: '30 ÷ 2 = 15 bonbons chacun',
        hints: ['Partage en 2', 'La moitié de 30', 'C\'est 15']
      },
      {
        id: 'q8',
        question: 'Anna lit 10 pages lundi et 12 pages mardi. Combien de pages a-t-elle lu en tout ?',
        type: 'fill-blank',
        correctAnswer: '22',
        explanation: '10 + 12 = 22 pages au total',
        hints: ['Additionne les deux jours', '10 + 12']
      },
      {
        id: 'q9',
        question: 'Paul a 50€. Il achète un jeu à 35€. Combien lui reste-t-il ?',
        type: 'multiple-choice',
        options: ['10€', '15€', '20€', '25€'],
        correctAnswer: '15€',
        explanation: '50 - 35 = 15€',
        hints: ['50 - 35', 'C\'est 15€']
      },
      {
        id: 'q10',
        question: 'Dans un panier il y a 8 pommes rouges et 6 pommes vertes. Combien de pommes en tout ?',
        type: 'fill-blank',
        correctAnswer: '14',
        explanation: '8 + 6 = 14 pommes en tout',
        hints: ['Additionne toutes les pommes', '8 + 6', 'C\'est 14']
      }
    ]
  },

  // ==================== CE1 - SCIENCES ====================

  {
    id: 'sciences-ce1-001',
    title: 'Le corps humain',
    subject: 'sciences',
    level: 'CE1',
    difficulty: 2,
    description: 'Découvre les parties du corps humain et leurs fonctions',
    estimatedTime: 15,
    skills: ['Corps humain', 'Anatomie', 'Fonctions du corps'],
    questions: [
      {
        id: 'q1',
        question: 'Quel organe permet de pomper le sang dans tout le corps ?',
        type: 'multiple-choice',
        options: ['Le cerveau', 'Le cœur', 'Les poumons', 'L\'estomac'],
        correctAnswer: 'Le cœur',
        explanation: 'Le cœur est un muscle qui pompe le sang pour l\'envoyer dans tout ton corps.',
        hints: ['C\'est dans ta poitrine', 'Tu peux le sentir battre']
      },
      {
        id: 'q2',
        question: 'Combien as-tu de sens ?',
        type: 'multiple-choice',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        explanation: 'Tu as 5 sens : la vue, l\'ouïe, l\'odorat, le goût et le toucher.',
        hints: ['Les yeux, les oreilles, le nez...', 'Compte-les tous !']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : Les poumons servent à respirer.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les poumons permettent de faire entrer l\'air dans ton corps.',
        hints: ['L\'air entre par ton nez ou ta bouche', 'C\'est vrai']
      },
      {
        id: 'q4',
        question: 'Quel organe te permet de penser et de réfléchir ?',
        type: 'multiple-choice',
        options: ['Le cœur', 'L\'estomac', 'Le cerveau', 'Les muscles'],
        correctAnswer: 'Le cerveau',
        explanation: 'Le cerveau est dans ta tête et te permet de penser, réfléchir et commander ton corps.',
        hints: ['C\'est dans ta tête', 'C\'est le chef de ton corps']
      },
      {
        id: 'q5',
        question: 'Avec quel sens peux-tu écouter de la musique ?',
        type: 'fill-blank',
        correctAnswer: 'ouïe',
        explanation: 'L\'ouïe te permet d\'entendre les sons grâce à tes oreilles.',
        hints: ['Tu utilises tes oreilles', 'C\'est le sens de l\'...']
      },
      {
        id: 'q6',
        question: 'Combien d\'os y a-t-il environ dans le corps d\'un enfant ?',
        type: 'multiple-choice',
        options: ['50', '100', 'Plus de 200', 'Plus de 500'],
        correctAnswer: 'Plus de 200',
        explanation: 'Un enfant a plus de 200 os ! Les os forment ton squelette.',
        hints: ['C\'est beaucoup', 'Plus de 200']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : L\'estomac sert à digérer les aliments.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'estomac broie et digère les aliments que tu manges.',
        hints: ['C\'est là que va la nourriture', 'C\'est vrai']
      },
      {
        id: 'q8',
        question: 'Quel sens utilises-tu pour sentir une fleur ?',
        type: 'multiple-choice',
        options: ['La vue', 'Le toucher', 'L\'odorat', 'Le goût'],
        correctAnswer: 'L\'odorat',
        explanation: 'L\'odorat te permet de sentir les odeurs grâce à ton nez.',
        hints: ['Tu utilises ton nez', 'C\'est l\'odorat']
      },
      {
        id: 'q9',
        question: 'Qu\'est-ce qui protège ton cerveau ?',
        type: 'multiple-choice',
        options: ['La peau', 'Le crâne', 'Les cheveux', 'Les muscles'],
        correctAnswer: 'Le crâne',
        explanation: 'Le crâne est un os très dur qui protège ton cerveau.',
        hints: ['C\'est un os de ta tête', 'C\'est le crâne']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : Le sang transporte l\'oxygène dans tout le corps.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le sang transporte l\'oxygène des poumons vers toutes les parties de ton corps.',
        hints: ['Le sang circule partout', 'C\'est vrai']
      }
    ]
  },

  {
    id: 'sciences-ce1-002',
    title: 'Les êtres vivants',
    subject: 'sciences',
    level: 'CE1',
    difficulty: 2,
    description: 'Apprends ce qui caractérise les êtres vivants',
    estimatedTime: 15,
    skills: ['Êtres vivants', 'Animaux', 'Végétaux', 'Cycle de vie'],
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce qu\'un être vivant peut faire que les objets ne peuvent pas ?',
        type: 'multiple-choice',
        options: ['Tomber', 'Grandir', 'Rouler', 'Être coloré'],
        correctAnswer: 'Grandir',
        explanation: 'Les êtres vivants naissent, grandissent et se reproduisent.',
        hints: ['Les plantes le font aussi', 'C\'est grandir']
      },
      {
        id: 'q2',
        question: 'Vrai ou Faux : Une plante est un être vivant.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les plantes naissent, grandissent, se reproduisent et meurent comme tous les êtres vivants.',
        hints: ['Elle pousse et grandit', 'C\'est vrai']
      },
      {
        id: 'q3',
        question: 'De quoi a besoin une plante pour vivre ?',
        type: 'multiple-choice',
        options: ['De l\'eau et de la lumière', 'Du chocolat', 'De la télévision', 'Des jouets'],
        correctAnswer: 'De l\'eau et de la lumière',
        explanation: 'Les plantes ont besoin d\'eau, de lumière et de terre pour vivre.',
        hints: ['On les arrose', 'Elles ont besoin du soleil']
      },
      {
        id: 'q4',
        question: 'Comment s\'appelle le bébé de la grenouille ?',
        type: 'fill-blank',
        correctAnswer: 'têtard',
        explanation: 'Le têtard est le bébé de la grenouille. Il vit dans l\'eau avant de devenir une grenouille.',
        hints: ['Il vit dans l\'eau', 'Il a une queue']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Une pierre est un être vivant.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Une pierre ne naît pas, ne grandit pas et ne se reproduit pas.',
        hints: ['Elle ne bouge pas toute seule', 'C\'est faux']
      },
      {
        id: 'q6',
        question: 'Que devient une chenille ?',
        type: 'multiple-choice',
        options: ['Un oiseau', 'Un papillon', 'Une araignée', 'Un escargot'],
        correctAnswer: 'Un papillon',
        explanation: 'La chenille se transforme en papillon. C\'est la métamorphose !',
        hints: ['Elle fait un cocon', 'C\'est un papillon']
      },
      {
        id: 'q7',
        question: 'De quoi a besoin un animal pour vivre ?',
        type: 'multiple-choice',
        options: ['De nourriture et d\'eau', 'De jouets', 'D\'une voiture', 'De vêtements'],
        correctAnswer: 'De nourriture et d\'eau',
        explanation: 'Les animaux ont besoin de nourriture, d\'eau et d\'air pour vivre.',
        hints: ['Comme toi !', 'Nourriture et eau']
      },
      {
        id: 'q8',
        question: 'Comment s\'appelle le cycle naissance-croissance-reproduction-mort ?',
        type: 'multiple-choice',
        options: ['Le cycle de l\'eau', 'Le cycle de vie', 'Le cycle des saisons', 'Le cycle lunaire'],
        correctAnswer: 'Le cycle de vie',
        explanation: 'Le cycle de vie décrit les étapes de la vie de tous les êtres vivants.',
        hints: ['C\'est le cycle de...', 'Le cycle de vie']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : Les poissons respirent sous l\'eau grâce à leurs branchies.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les branchies permettent aux poissons de respirer sous l\'eau.',
        hints: ['Ils vivent dans l\'eau', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'De quoi sort une plante ?',
        type: 'multiple-choice',
        options: ['D\'un œuf', 'D\'une graine', 'D\'un bébé', 'D\'une pierre'],
        correctAnswer: 'D\'une graine',
        explanation: 'Les plantes poussent à partir d\'une graine plantée dans la terre.',
        hints: ['On la plante dans la terre', 'C\'est une graine']
      }
    ]
  },

  // ==================== CE1 - ANGLAIS ====================

  {
    id: 'anglais-ce1-001',
    title: 'Se présenter en anglais',
    subject: 'anglais',
    level: 'CE1',
    difficulty: 2,
    description: 'Apprends à te présenter et à saluer en anglais',
    estimatedTime: 15,
    skills: ['Présentation', 'Salutations', 'Questions simples'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "Bonjour" en anglais le matin ?',
        type: 'multiple-choice',
        options: ['Good night', 'Good morning', 'Goodbye', 'Good evening'],
        correctAnswer: 'Good morning',
        explanation: '"Good morning" veut dire "Bonjour" le matin.',
        hints: ['Morning = matin', 'Good morning']
      },
      {
        id: 'q2',
        question: 'Que veut dire "My name is" ?',
        type: 'multiple-choice',
        options: ['J\'ai faim', 'Je m\'appelle', 'J\'habite à', 'J\'ai ... ans'],
        correctAnswer: 'Je m\'appelle',
        explanation: '"My name is" signifie "Je m\'appelle".',
        hints: ['Name = nom', 'Je m\'appelle']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "Au revoir" en anglais ?',
        type: 'fill-blank',
        correctAnswer: 'Goodbye',
        explanation: '"Goodbye" veut dire "Au revoir".',
        hints: ['Good + bye', 'Commence par Good...']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : "Hello" veut dire "Bonjour".',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Hello" est une façon courante de dire "Bonjour" en anglais.',
        hints: ['C\'est très courant', 'C\'est vrai']
      },
      {
        id: 'q5',
        question: 'Comment demande-t-on "Comment tu t\'appelles ?" en anglais ?',
        type: 'multiple-choice',
        options: ['How are you?', 'What is your name?', 'Where are you?', 'How old are you?'],
        correctAnswer: 'What is your name?',
        explanation: '"What is your name?" signifie "Comment tu t\'appelles ?".',
        hints: ['What = Quoi', 'Name = nom']
      },
      {
        id: 'q6',
        question: 'Que réponds-tu si on te demande "How are you?" ?',
        type: 'multiple-choice',
        options: ['My name is...', 'I am fine', 'I am 7', 'Goodbye'],
        correctAnswer: 'I am fine',
        explanation: '"I am fine" veut dire "Je vais bien".',
        hints: ['How are you = Comment vas-tu', 'I am fine']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "S\'il te plaît" en anglais ?',
        type: 'fill-blank',
        correctAnswer: 'Please',
        explanation: '"Please" veut dire "S\'il te plaît".',
        hints: ['C\'est poli', 'Commence par P']
      },
      {
        id: 'q8',
        question: 'Que veut dire "Thank you" ?',
        type: 'multiple-choice',
        options: ['De rien', 'Merci', 'Bonjour', 'Excuse-moi'],
        correctAnswer: 'Merci',
        explanation: '"Thank you" signifie "Merci".',
        hints: ['On le dit quand on reçoit quelque chose', 'Merci']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : "Good night" se dit le soir avant de dormir.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Good night" veut dire "Bonne nuit" et se dit le soir.',
        hints: ['Night = nuit', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "Oui" en anglais ?',
        type: 'multiple-choice',
        options: ['No', 'Yes', 'Maybe', 'Please'],
        correctAnswer: 'Yes',
        explanation: '"Yes" veut dire "Oui".',
        hints: ['C\'est court', 'Yes']
      }
    ]
  },

  {
    id: 'anglais-ce1-002',
    title: 'La famille en anglais',
    subject: 'anglais',
    level: 'CE1',
    difficulty: 2,
    description: 'Apprends les mots de la famille en anglais',
    estimatedTime: 15,
    skills: ['Vocabulaire famille', 'Membres de la famille'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "maman" en anglais ?',
        type: 'multiple-choice',
        options: ['Father', 'Mother', 'Sister', 'Brother'],
        correctAnswer: 'Mother',
        explanation: '"Mother" veut dire "maman" ou "mère".',
        hints: ['Commence par M', 'Mother']
      },
      {
        id: 'q2',
        question: 'Que veut dire "Father" ?',
        type: 'multiple-choice',
        options: ['Maman', 'Papa', 'Frère', 'Sœur'],
        correctAnswer: 'Papa',
        explanation: '"Father" signifie "papa" ou "père".',
        hints: ['C\'est un parent', 'Papa']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "frère" en anglais ?',
        type: 'fill-blank',
        correctAnswer: 'Brother',
        explanation: '"Brother" veut dire "frère".',
        hints: ['Commence par B', 'Brother']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : "Sister" veut dire "sœur".',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Sister" signifie "sœur".',
        hints: ['Ressemble un peu à "sœur"', 'C\'est vrai']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "grand-mère" en anglais ?',
        type: 'multiple-choice',
        options: ['Grandfather', 'Grandmother', 'Mother', 'Aunt'],
        correctAnswer: 'Grandmother',
        explanation: '"Grandmother" veut dire "grand-mère".',
        hints: ['Grand + mother', 'Grandmother']
      },
      {
        id: 'q6',
        question: 'Que veut dire "Grandfather" ?',
        type: 'multiple-choice',
        options: ['Grand-mère', 'Grand-père', 'Oncle', 'Père'],
        correctAnswer: 'Grand-père',
        explanation: '"Grandfather" signifie "grand-père".',
        hints: ['Grand + father', 'Grand-père']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "famille" en anglais ?',
        type: 'fill-blank',
        correctAnswer: 'Family',
        explanation: '"Family" veut dire "famille".',
        hints: ['Ressemble au mot français', 'Family']
      },
      {
        id: 'q8',
        question: 'Que veut dire "Uncle" ?',
        type: 'multiple-choice',
        options: ['Tante', 'Oncle', 'Cousin', 'Neveu'],
        correctAnswer: 'Oncle',
        explanation: '"Uncle" signifie "oncle".',
        hints: ['Ressemble un peu', 'Oncle']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : "Aunt" veut dire "tante".',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Aunt" signifie "tante".',
        hints: ['C\'est la sœur de tes parents', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "parents" en anglais ?',
        type: 'multiple-choice',
        options: ['Family', 'Parents', 'Children', 'Brothers'],
        correctAnswer: 'Parents',
        explanation: '"Parents" s\'écrit pareil en anglais et en français !',
        hints: ['C\'est le même mot', 'Parents']
      }
    ]
  },

  // ==================== CE1 - HISTOIRE-GÉOGRAPHIE ====================

  {
    id: 'histoire-geo-ce1-001',
    title: 'Les mois et les saisons',
    subject: 'histoire-geo',
    level: 'CE1',
    difficulty: 2,
    description: 'Apprends les mois de l\'année et les saisons',
    estimatedTime: 15,
    skills: ['Mois', 'Saisons', 'Calendrier'],
    questions: [
      {
        id: 'q1',
        question: 'Combien y a-t-il de mois dans une année ?',
        type: 'multiple-choice',
        options: ['10', '11', '12', '13'],
        correctAnswer: '12',
        explanation: 'Une année compte 12 mois : janvier, février, mars...',
        hints: ['Compte sur tes doigts', 'C\'est 12']
      },
      {
        id: 'q2',
        question: 'Quel est le premier mois de l\'année ?',
        type: 'fill-blank',
        correctAnswer: 'janvier',
        explanation: 'Janvier est le premier mois de l\'année.',
        hints: ['Après le 31 décembre', 'C\'est janvier']
      },
      {
        id: 'q3',
        question: 'Combien y a-t-il de saisons ?',
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
        explanation: 'Il y a 4 saisons : printemps, été, automne, hiver.',
        hints: ['Printemps, été...', 'C\'est 4']
      },
      {
        id: 'q4',
        question: 'En quelle saison fait-il très chaud et on va à la plage ?',
        type: 'multiple-choice',
        options: ['Printemps', 'Été', 'Automne', 'Hiver'],
        correctAnswer: 'Été',
        explanation: 'L\'été est la saison chaude où on peut se baigner.',
        hints: ['Les grandes vacances', 'C\'est l\'été']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Décembre est le dernier mois de l\'année.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Décembre est le 12ème et dernier mois de l\'année.',
        hints: ['C\'est le mois de Noël', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'En quelle saison les feuilles tombent des arbres ?',
        type: 'multiple-choice',
        options: ['Printemps', 'Été', 'Automne', 'Hiver'],
        correctAnswer: 'Automne',
        explanation: 'En automne, les feuilles changent de couleur et tombent.',
        hints: ['Feuilles orange et marron', 'C\'est l\'automne']
      },
      {
        id: 'q7',
        question: 'Quel mois vient après février ?',
        type: 'fill-blank',
        correctAnswer: 'mars',
        explanation: 'Mars est le 3ème mois de l\'année, après février.',
        hints: ['C\'est le début du printemps', 'C\'est mars']
      },
      {
        id: 'q8',
        question: 'En quelle saison neige-t-il souvent ?',
        type: 'multiple-choice',
        options: ['Printemps', 'Été', 'Automne', 'Hiver'],
        correctAnswer: 'Hiver',
        explanation: 'L\'hiver est la saison froide où il peut neiger.',
        hints: ['C\'est la saison de Noël', 'C\'est l\'hiver']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : Le printemps est la saison où les fleurs commencent à pousser.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Au printemps, la nature se réveille et les fleurs poussent.',
        hints: ['La nature se réveille', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Combien de jours y a-t-il dans une semaine ?',
        type: 'multiple-choice',
        options: ['5', '6', '7', '8'],
        correctAnswer: '7',
        explanation: 'Une semaine compte 7 jours : lundi, mardi, mercredi...',
        hints: ['Lundi à dimanche', 'C\'est 7']
      }
    ]
  },

  {
    id: 'histoire-geo-ce1-002',
    title: 'Mon quartier, mon village',
    subject: 'histoire-geo',
    level: 'CE1',
    difficulty: 2,
    description: 'Découvre les lieux importants de ton environnement proche',
    estimatedTime: 15,
    skills: ['Géographie locale', 'Lieux publics', 'Orientation'],
    questions: [
      {
        id: 'q1',
        question: 'Où va-t-on pour acheter du pain ?',
        type: 'multiple-choice',
        options: ['À la pharmacie', 'À la boulangerie', 'À la bibliothèque', 'À l\'école'],
        correctAnswer: 'À la boulangerie',
        explanation: 'On achète le pain à la boulangerie.',
        hints: ['Le boulanger fait le pain', 'La boulangerie']
      },
      {
        id: 'q2',
        question: 'Comment s\'appelle le lieu où on soigne les malades ?',
        type: 'multiple-choice',
        options: ['L\'école', 'L\'hôpital', 'La mairie', 'Le supermarché'],
        correctAnswer: 'L\'hôpital',
        explanation: 'L\'hôpital est le lieu où les médecins soignent les malades.',
        hints: ['Les docteurs y travaillent', 'L\'hôpital']
      },
      {
        id: 'q3',
        question: 'Où peut-on emprunter des livres gratuitement ?',
        type: 'fill-blank',
        correctAnswer: 'bibliothèque',
        explanation: 'À la bibliothèque, on peut emprunter des livres gratuitement.',
        hints: ['Beaucoup de livres', 'La biblio...']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : Le maire travaille à la mairie.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le maire dirige la ville ou le village depuis la mairie.',
        hints: ['Mairie et maire...', 'C\'est vrai']
      },
      {
        id: 'q5',
        question: 'Où les pompiers travaillent-ils ?',
        type: 'multiple-choice',
        options: ['À la poste', 'À la caserne', 'À l\'école', 'Au marché'],
        correctAnswer: 'À la caserne',
        explanation: 'Les pompiers travaillent à la caserne de pompiers.',
        hints: ['C\'est leur base', 'La caserne']
      },
      {
        id: 'q6',
        question: 'Comment s\'appelle le lieu où on envoie des lettres ?',
        type: 'multiple-choice',
        options: ['La banque', 'La poste', 'Le cinéma', 'Le restaurant'],
        correctAnswer: 'La poste',
        explanation: 'On envoie les lettres et les colis à la poste.',
        hints: ['Le facteur y travaille', 'La poste']
      },
      {
        id: 'q7',
        question: 'Où les enfants vont-ils apprendre à lire et à écrire ?',
        type: 'fill-blank',
        correctAnswer: 'école',
        explanation: 'Les enfants vont à l\'école pour apprendre.',
        hints: ['Tu y vas tous les jours', 'L\'...']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : À la pharmacie, on achète des médicaments.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le pharmacien vend des médicaments à la pharmacie.',
        hints: ['Quand tu es malade', 'C\'est vrai']
      },
      {
        id: 'q9',
        question: 'Comment s\'appelle le grand magasin où on achète beaucoup de choses différentes ?',
        type: 'multiple-choice',
        options: ['La boulangerie', 'La boucherie', 'Le supermarché', 'La librairie'],
        correctAnswer: 'Le supermarché',
        explanation: 'Au supermarché, on trouve de la nourriture, des produits ménagers et bien plus.',
        hints: ['C\'est grand', 'Le super...']
      },
      {
        id: 'q10',
        question: 'Où peut-on voir des films sur grand écran ?',
        type: 'multiple-choice',
        options: ['À la bibliothèque', 'Au cinéma', 'À la mairie', 'À l\'école'],
        correctAnswer: 'Au cinéma',
        explanation: 'On regarde des films sur grand écran au cinéma.',
        hints: ['Avec du pop-corn', 'Le cinéma']
      }
    ]
  },

  {
    id: 'histoire-geo-ce1-003',
    title: 'Autrefois et aujourd\'hui',
    subject: 'histoire-geo',
    level: 'CE1',
    difficulty: 2,
    description: 'Compare la vie d\'autrefois et celle d\'aujourd\'hui',
    estimatedTime: 15,
    skills: ['Histoire', 'Comparaison temporelle', 'Évolution'],
    questions: [
      {
        id: 'q1',
        question: 'Autrefois, comment s\'éclairait-on avant l\'électricité ?',
        type: 'multiple-choice',
        options: ['Avec des lampes électriques', 'Avec des bougies', 'Avec des téléphones', 'Avec la télévision'],
        correctAnswer: 'Avec des bougies',
        explanation: 'Avant l\'électricité, on utilisait des bougies ou des lampes à huile.',
        hints: ['Ça fait de la flamme', 'Des bougies']
      },
      {
        id: 'q2',
        question: 'Vrai ou Faux : Autrefois, les gens se déplaçaient souvent à cheval.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Avant les voitures, on utilisait les chevaux pour se déplacer.',
        hints: ['Pas de voitures', 'C\'est vrai']
      },
      {
        id: 'q3',
        question: 'Comment s\'appelle l\'objet ancien qu\'on utilisait pour écrire avec de l\'encre ?',
        type: 'multiple-choice',
        options: ['Un stylo bille', 'Une plume', 'Un crayon', 'Un feutre'],
        correctAnswer: 'Une plume',
        explanation: 'Autrefois, on écrivait avec une plume qu\'on trempait dans l\'encre.',
        hints: ['Comme les oiseaux', 'Une plume']
      },
      {
        id: 'q4',
        question: 'Aujourd\'hui, comment communique-t-on rapidement avec quelqu\'un de loin ?',
        type: 'multiple-choice',
        options: ['Par lettre', 'Par téléphone', 'Par pigeon voyageur', 'En criant fort'],
        correctAnswer: 'Par téléphone',
        explanation: 'Aujourd\'hui, on utilise le téléphone ou internet pour communiquer vite.',
        hints: ['Instantané', 'Le téléphone']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : La télévision existait il y a 200 ans.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! La télévision a été inventée au 20ème siècle, il y a moins de 100 ans.',
        hints: ['C\'est une invention récente', 'C\'est faux']
      },
      {
        id: 'q6',
        question: 'Autrefois, comment lavait-on le linge sans machine ?',
        type: 'multiple-choice',
        options: ['Au lavoir avec les mains', 'Au supermarché', 'Avec un aspirateur', 'On ne lavait pas'],
        correctAnswer: 'Au lavoir avec les mains',
        explanation: 'Autrefois, on lavait le linge à la main au lavoir ou à la rivière.',
        hints: ['Avec de l\'eau et du savon', 'À la main']
      },
      {
        id: 'q7',
        question: 'Quel moyen de transport n\'existait pas autrefois ?',
        type: 'multiple-choice',
        options: ['Le cheval', 'Le bateau', 'L\'avion', 'La charrette'],
        correctAnswer: 'L\'avion',
        explanation: 'L\'avion a été inventé au début du 20ème siècle seulement.',
        hints: ['Une invention récente', 'L\'avion']
      },
      {
        id: 'q8',
        question: 'Comment conservait-on les aliments au frais avant le réfrigérateur ?',
        type: 'multiple-choice',
        options: ['Dans une glacière avec de la glace', 'Dans le four', 'Sur la table', 'Dans la cheminée'],
        correctAnswer: 'Dans une glacière avec de la glace',
        explanation: 'On utilisait des glacières remplies de glace pour garder les aliments frais.',
        hints: ['Avec du froid', 'Une glacière']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : Autrefois, tous les enfants allaient à l\'école.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Autrefois, beaucoup d\'enfants travaillaient au lieu d\'aller à l\'école.',
        hints: ['L\'école obligatoire est récente', 'C\'est faux']
      },
      {
        id: 'q10',
        question: 'Qu\'utilise-t-on aujourd\'hui pour chauffer les maisons ?',
        type: 'multiple-choice',
        options: ['Seulement du bois', 'Du chauffage électrique ou au gaz', 'Des bougies', 'Rien'],
        correctAnswer: 'Du chauffage électrique ou au gaz',
        explanation: 'Aujourd\'hui, on utilise souvent l\'électricité ou le gaz pour chauffer les maisons.',
        hints: ['C\'est moderne', 'Électrique ou gaz']
      }
    ]
  },

  // ==================== CE2 - MATHÉMATIQUES ====================

  {
    id: 'math-ce2-001',
    title: 'Toutes les tables de multiplication',
    subject: 'maths',
    level: 'CE2',
    difficulty: 3,
    description: 'Révise les tables de 1 à 10',
    estimatedTime: 20,
    skills: ['Multiplication', 'Tables'],
    questions: [
      {
        id: 'q1',
        question: '7 × 8 = ?',
        type: 'fill-blank',
        correctAnswer: '56',
        explanation: '7 × 8 = 56. Astuce : 7 × 8 = 56 (cinq-six, 5-6 !) ',
        hints: ['C\'est dans la table de 7 et de 8', 'Entre 50 et 60']
      },
      {
        id: 'q2',
        question: '9 × 6 = ?',
        type: 'multiple-choice',
        options: ['45', '54', '63', '48'],
        correctAnswer: '54',
        explanation: '9 × 6 = 54. Tu peux faire 10 × 6 = 60, puis enlever 6',
        hints: ['Astuce : 10 × 6 moins 6', '60 - 6']
      },
      {
        id: 'q3',
        question: '12 × 3 = ?',
        type: 'fill-blank',
        correctAnswer: '36',
        explanation: '12 × 3 = 36. Tu peux faire (10 × 3) + (2 × 3) = 30 + 6 = 36',
        hints: ['Décompose : 10 × 3 + 2 × 3', 'C\'est 36']
      },
      {
        id: 'q4',
        question: '6 × 7 = ?',
        type: 'fill-blank',
        correctAnswer: '42',
        explanation: '6 × 7 = 42',
        hints: ['Table de 6 et de 7', 'C\'est 42']
      },
      {
        id: 'q5',
        question: '8 × 9 = ?',
        type: 'multiple-choice',
        options: ['63', '72', '81', '64'],
        correctAnswer: '72',
        explanation: '8 × 9 = 72',
        hints: ['Proche de 8 × 10 = 80', 'Enlève 8', 'C\'est 72']
      },
      {
        id: 'q6',
        question: '5 × 12 = ?',
        type: 'fill-blank',
        correctAnswer: '60',
        explanation: '5 × 12 = 60. C\'est la moitié de 10 × 12 = 120',
        hints: ['5 × 10 = 50, ajoute 5 × 2', 'C\'est 60']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : 9 × 9 = 81',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 9 × 9 = 81',
        hints: ['C\'est dans la table de 9', 'C\'est vrai']
      },
      {
        id: 'q8',
        question: '4 × 8 = ?',
        type: 'multiple-choice',
        options: ['28', '30', '32', '36'],
        correctAnswer: '32',
        explanation: '4 × 8 = 32. C\'est le double de 4 × 4 = 16',
        hints: ['4 × 4 = 16, double ça', 'C\'est 32']
      },
      {
        id: 'q9',
        question: '7 × 7 = ?',
        type: 'fill-blank',
        correctAnswer: '49',
        explanation: '7 × 7 = 49. Important à retenir !',
        hints: ['Sept fois sept', 'Proche de 50', 'C\'est 49']
      },
      {
        id: 'q10',
        question: '6 × 9 = ?',
        type: 'fill-blank',
        correctAnswer: '54',
        explanation: '6 × 9 = 54',
        hints: ['Table de 6 et 9', 'Entre 50 et 60', 'C\'est 54']
      }
    ]
  },

  {
    id: 'math-ce2-002',
    title: 'La monnaie',
    subject: 'maths',
    level: 'CE2',
    difficulty: 2,
    description: 'Rendre la monnaie et calculer',
    estimatedTime: 18,
    skills: ['Monnaie', 'Calcul', 'Euros'],
    questions: [
      {
        id: 'q1',
        question: 'Tu achètes un gâteau à 3,50€ et tu paies avec un billet de 5€. Combien te rend-on ?',
        type: 'multiple-choice',
        options: ['1€', '1,50€', '2€', '2,50€'],
        correctAnswer: '1,50€',
        explanation: '5€ - 3,50€ = 1,50€ de monnaie',
        hints: ['Soustrais : 5 - 3,50', '5 - 3 = 2, mais attention aux centimes']
      },
      {
        id: 'q2',
        question: 'Combien de centimes dans 1 euro ?',
        type: 'multiple-choice',
        options: ['10', '50', '100', '1000'],
        correctAnswer: '100',
        explanation: '1 euro = 100 centimes',
        hints: ['C\'est comme les centimètres', 'C\'est 100']
      },
      {
        id: 'q3',
        question: 'J\'achète un livre à 7,20€ et je donne 10€. Combien me rend-on ? (écris le prix, ex: 2,80)',
        type: 'fill-blank',
        correctAnswer: '2,80',
        explanation: '10€ - 7,20€ = 2,80€',
        hints: ['10 - 7,20', 'Attention aux centimes', 'C\'est 2,80€']
      },
      {
        id: 'q4',
        question: 'Combien coûtent 3 bonbons à 0,50€ chacun ?',
        type: 'multiple-choice',
        options: ['1€', '1,50€', '2€', '3€'],
        correctAnswer: '1,50€',
        explanation: '3 × 0,50€ = 1,50€ ou 0,50 + 0,50 + 0,50 = 1,50€',
        hints: ['3 fois 0,50', '0,50 + 0,50 + 0,50']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : 2,50€ = 250 centimes',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 2,50€ = 2 euros + 50 centimes = 200 + 50 = 250 centimes',
        hints: ['1€ = 100 centimes', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'Tu as une pièce de 2€ et une pièce de 1€. Combien as-tu en tout ? (écris le nombre)',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: '2€ + 1€ = 3€',
        hints: ['Additionne les pièces', '2 + 1', 'C\'est 3€']
      },
      {
        id: 'q7',
        question: 'Un cahier coûte 2,80€. J\'en achète 2. Combien vais-je payer ? (écris le prix, ex: 5,60)',
        type: 'fill-blank',
        correctAnswer: '5,60',
        explanation: '2,80€ × 2 = 5,60€',
        hints: ['Double de 2,80', '2,80 + 2,80', 'C\'est 5,60€']
      },
      {
        id: 'q8',
        question: 'J\'achète pour 15€ et je paie avec un billet de 20€. Combien me rend-on ?',
        type: 'multiple-choice',
        options: ['3€', '4€', '5€', '6€'],
        correctAnswer: '5€',
        explanation: '20€ - 15€ = 5€',
        hints: ['20 - 15', 'C\'est 5€']
      },
      {
        id: 'q9',
        question: 'Combien font 4 pièces de 0,20€ ? (écris le prix, ex: 0,80)',
        type: 'fill-blank',
        correctAnswer: '0,80',
        explanation: '4 × 0,20€ = 0,80€',
        hints: ['4 fois 20 centimes', '0,20 + 0,20 + 0,20 + 0,20']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : 5€ et 50 centimes = 5,50€',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 5€ + 0,50€ = 5,50€',
        hints: ['5 euros et 50 centimes', 'C\'est vrai']
      }
    ]
  },

  {
    id: 'math-ce2-003',
    title: 'Mesures de longueur',
    subject: 'maths',
    level: 'CE2',
    difficulty: 2,
    description: 'Mètre, centimètre, kilomètre',
    estimatedTime: 16,
    skills: ['Mesures', 'Longueur', 'Conversion'],
    questions: [
      {
        id: 'q1',
        question: 'Combien y a-t-il de centimètres dans 1 mètre ?',
        type: 'multiple-choice',
        options: ['10', '50', '100', '1000'],
        correctAnswer: '100',
        explanation: '1 mètre = 100 centimètres (cm)',
        hints: ['Pense au préfixe "centi" = cent', 'C\'est 100 !']
      },
      {
        id: 'q2',
        question: 'Combien y a-t-il de mètres dans 1 kilomètre ?',
        type: 'fill-blank',
        correctAnswer: '1000',
        explanation: '1 kilomètre = 1000 mètres. Kilo = mille !',
        hints: ['Kilo veut dire mille', 'C\'est 1000']
      },
      {
        id: 'q3',
        question: 'Combien de centimètres font 2 mètres ?',
        type: 'fill-blank',
        correctAnswer: '200',
        explanation: '2 mètres = 2 × 100 = 200 centimètres',
        hints: ['1 m = 100 cm', '2 × 100', 'C\'est 200']
      },
      {
        id: 'q4',
        question: 'Quelle unité utilises-tu pour mesurer la longueur de ta chambre ?',
        type: 'multiple-choice',
        options: ['Millimètre', 'Centimètre', 'Mètre', 'Kilomètre'],
        correctAnswer: 'Mètre',
        explanation: 'Le mètre (m) est l\'unité adaptée pour mesurer une pièce',
        hints: ['Pas trop petit, pas trop grand', 'C\'est le mètre']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : 1 km = 100 mètres',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! 1 km = 1000 mètres, pas 100',
        hints: ['Kilo = mille', 'C\'est faux']
      },
      {
        id: 'q6',
        question: 'Quelle unité pour mesurer la distance entre deux villes ?',
        type: 'multiple-choice',
        options: ['Centimètre', 'Mètre', 'Kilomètre', 'Millimètre'],
        correctAnswer: 'Kilomètre',
        explanation: 'Le kilomètre (km) est utilisé pour les grandes distances',
        hints: ['Grande distance', 'C\'est le kilomètre']
      },
      {
        id: 'q7',
        question: '50 centimètres, c\'est la même chose que :',
        type: 'multiple-choice',
        options: ['0,5 mètre', '5 mètres', '50 mètres', '500 mètres'],
        correctAnswer: '0,5 mètre',
        explanation: '50 cm = 0,5 m (la moitié d\'un mètre)',
        hints: ['La moitié de 100 cm', 'C\'est 0,5 m']
      },
      {
        id: 'q8',
        question: '3 mètres et 25 centimètres = combien de centimètres ?',
        type: 'fill-blank',
        correctAnswer: '325',
        explanation: '3 m = 300 cm, donc 300 + 25 = 325 cm',
        hints: ['3 m = 300 cm', 'Ajoute 25 cm', 'C\'est 325']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : 1 mètre = 10 décimètres',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 1 mètre = 10 décimètres (dm). Déci = dix !',
        hints: ['Déci = dix', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Quelle est l\'unité la plus petite ?',
        type: 'multiple-choice',
        options: ['Kilomètre', 'Mètre', 'Centimètre', 'Millimètre'],
        correctAnswer: 'Millimètre',
        explanation: 'Le millimètre (mm) est plus petit que le centimètre, le mètre et le kilomètre',
        hints: ['Milli = mille fois plus petit', 'C\'est le millimètre']
      }
    ]
  },

  // ==================== CE2 - SCIENCES ====================

  {
    id: 'sciences-ce2-001',
    title: 'Les états de la matière',
    subject: 'sciences',
    level: 'CE2',
    difficulty: 2,
    description: 'Découvre les trois états de la matière : solide, liquide et gaz',
    estimatedTime: 15,
    skills: ['États de la matière', 'Eau', 'Transformations'],
    questions: [
      {
        id: 'q1',
        question: 'Combien d\'états de la matière existe-t-il ?',
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        explanation: 'Il existe trois états de la matière : solide, liquide et gaz. Par exemple, l\'eau peut être de la glace (solide), de l\'eau liquide, ou de la vapeur (gaz).',
        hints: ['Pense à l\'eau : glace, eau, vapeur', 'C\'est moins que 4', 'La réponse est 3']
      },
      {
        id: 'q2',
        question: 'Vrai ou Faux : La glace est de l\'eau à l\'état solide.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Quand l\'eau gèle dans le congélateur, elle devient solide et se transforme en glace.',
        hints: ['La glace est dure', 'Elle se forme quand il fait froid', 'C\'est vrai !']
      },
      {
        id: 'q3',
        question: 'Quel est l\'état de l\'air que tu respires ?',
        type: 'multiple-choice',
        options: ['Solide', 'Liquide', 'Gaz', 'Plasma'],
        correctAnswer: 'Gaz',
        explanation: 'L\'air est un gaz ! Tu ne peux pas le voir ni le toucher, mais il est partout autour de toi.',
        hints: ['Tu ne peux pas le voir', 'Ce n\'est ni solide ni liquide', 'C\'est un gaz']
      },
      {
        id: 'q4',
        question: 'Quand l\'eau bout dans une casserole, elle se transforme en...',
        type: 'fill-blank',
        correctAnswer: 'vapeur',
        explanation: 'Bravo ! Quand l\'eau bout, elle se transforme en vapeur d\'eau, qui est de l\'eau à l\'état gazeux.',
        hints: ['C\'est de l\'eau à l\'état gazeux', 'Tu vois des bulles et de la fumée blanche', 'Le mot est "vapeur"']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Un glaçon peut fondre et devenir liquide.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Quand tu sors un glaçon du congélateur, il fond avec la chaleur et redevient de l\'eau liquide.',
        hints: ['Que se passe-t-il quand tu laisses un glaçon dehors ?', 'Il devient liquide', 'C\'est vrai !']
      },
      {
        id: 'q6',
        question: 'Quel est l\'état d\'une pierre ?',
        type: 'multiple-choice',
        options: ['Solide', 'Liquide', 'Gaz', 'Les trois'],
        correctAnswer: 'Solide',
        explanation: 'Une pierre est solide ! Elle a une forme fixe et on ne peut pas la verser comme un liquide.',
        hints: ['Elle est dure', 'Elle garde sa forme', 'C\'est solide']
      },
      {
        id: 'q7',
        question: 'Complète : Le jus d\'orange est à l\'état...',
        type: 'fill-blank',
        correctAnswer: 'liquide',
        explanation: 'Le jus d\'orange est liquide ! On peut le verser dans un verre, il prend la forme du récipient.',
        hints: ['On peut le verser', 'Ce n\'est pas solide', 'Le mot est "liquide"']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : L\'eau peut exister sous les trois états.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'eau peut être solide (glace), liquide (eau) ou gazeuse (vapeur). C\'est une matière extraordinaire !',
        hints: ['Pense à la glace, l\'eau et la vapeur', 'L\'eau change d\'état facilement', 'C\'est vrai !']
      },
      {
        id: 'q9',
        question: 'Que faut-il pour transformer de l\'eau liquide en glace ?',
        type: 'multiple-choice',
        options: ['De la chaleur', 'Du froid', 'Du sel', 'Du sucre'],
        correctAnswer: 'Du froid',
        explanation: 'Il faut du froid ! Dans le congélateur, la température descend en dessous de 0°C et l\'eau gèle pour devenir de la glace.',
        hints: ['On met l\'eau au congélateur', 'Il faut une température basse', 'C\'est le froid']
      },
      {
        id: 'q10',
        question: 'Complète : Quand un liquide se transforme en gaz, on dit qu\'il s\'...',
        type: 'fill-blank',
        correctAnswer: 'évapore',
        explanation: 'Excellent ! Quand un liquide se transforme en gaz, on dit qu\'il s\'évapore. Par exemple, une flaque d\'eau s\'évapore au soleil.',
        hints: ['Cela commence par "é"', 'Une flaque disparaît au soleil', 'Le mot est "évapore"']
      }
    ]
  },

  {
    id: 'sciences-ce2-002',
    title: 'L\'alimentation et la digestion',
    subject: 'sciences',
    level: 'CE2',
    difficulty: 2,
    description: 'Découvre les familles d\'aliments et comment fonctionne la digestion',
    estimatedTime: 15,
    skills: ['Alimentation', 'Digestion', 'Corps humain', 'Nutrition'],
    questions: [
      {
        id: 'q1',
        question: 'Combien de familles d\'aliments y a-t-il ?',
        type: 'multiple-choice',
        options: ['3', '5', '7', '10'],
        correctAnswer: '7',
        explanation: 'Il y a 7 familles d\'aliments : les produits laitiers, les viandes-poissons-œufs, les féculents, les fruits et légumes, les matières grasses, les produits sucrés et les boissons.',
        hints: ['C\'est plus que 5', 'Pense aux produits laitiers, viandes, fruits...', 'La réponse est 7']
      },
      {
        id: 'q2',
        question: 'Vrai ou Faux : Les fruits et légumes sont bons pour la santé.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les fruits et légumes contiennent des vitamines et des fibres qui sont très importantes pour rester en bonne santé.',
        hints: ['Ils contiennent des vitamines', 'Les médecins conseillent d\'en manger', 'C\'est vrai !']
      },
      {
        id: 'q3',
        question: 'Quel organe commence la digestion dans ta bouche ?',
        type: 'multiple-choice',
        options: ['Les dents', 'La langue', 'Les lèvres', 'Le nez'],
        correctAnswer: 'Les dents',
        explanation: 'Les dents coupent et broient les aliments pour faciliter la digestion. C\'est la première étape !',
        hints: ['Elles servent à mâcher', 'Elles coupent les aliments', 'Ce sont les dents']
      },
      {
        id: 'q4',
        question: 'Complète : Après la bouche, les aliments passent dans l\'...',
        type: 'fill-blank',
        correctAnswer: 'estomac',
        explanation: 'Bravo ! Après avoir été mâchés, les aliments descendent par l\'œsophage jusqu\'à l\'estomac où ils sont brassés et digérés.',
        hints: ['C\'est un organe du ventre', 'Il brasse les aliments', 'Le mot est "estomac"']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Il faut manger équilibré en variant les aliments.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Manger équilibré signifie manger un peu de chaque famille d\'aliments pour apporter à ton corps tout ce dont il a besoin.',
        hints: ['Ton corps a besoin de tous les nutriments', 'Il ne faut pas manger que des bonbons', 'C\'est vrai !']
      },
      {
        id: 'q6',
        question: 'Quelle famille d\'aliments donne de l\'énergie pour bouger ?',
        type: 'multiple-choice',
        options: ['Les fruits', 'Les féculents', 'Les produits laitiers', 'Les boissons'],
        correctAnswer: 'Les féculents',
        explanation: 'Les féculents (pain, pâtes, riz, pommes de terre) donnent beaucoup d\'énergie à ton corps pour courir, jouer et bouger !',
        hints: ['Pense au pain, aux pâtes, au riz', 'Ils donnent de l\'énergie', 'Ce sont les féculents']
      },
      {
        id: 'q7',
        question: 'Complète : Les aliments passent dans les intestins qui mesurent environ... mètres.',
        type: 'fill-blank',
        correctAnswer: 'sept',
        explanation: 'Incroyable mais vrai ! Tes intestins mesurent environ 7 mètres de long ! Ils sont repliés dans ton ventre.',
        hints: ['C\'est un chiffre entre 5 et 10', 'Ils sont très longs', 'Le nombre est "sept"']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : Le lait et le fromage font partie de la même famille d\'aliments.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le lait et le fromage appartiennent à la famille des produits laitiers. Ils sont riches en calcium, bon pour les os.',
        hints: ['Les deux viennent du lait', 'C\'est la famille des produits laitiers', 'C\'est vrai !']
      },
      {
        id: 'q9',
        question: 'Pourquoi doit-on bien mâcher les aliments ?',
        type: 'multiple-choice',
        options: ['Pour faire plaisir aux dents', 'Pour faciliter la digestion', 'Pour manger lentement', 'Pour avoir bon goût'],
        correctAnswer: 'Pour faciliter la digestion',
        explanation: 'On doit bien mâcher pour réduire les aliments en petits morceaux et faciliter le travail de l\'estomac et des intestins.',
        hints: ['Cela aide l\'estomac', 'Les petits morceaux se digèrent mieux', 'C\'est pour faciliter la digestion']
      },
      {
        id: 'q10',
        question: 'Complète : Les aliments que le corps n\'utilise pas sont éliminés sous forme de...',
        type: 'fill-blank',
        correctAnswer: 'déchets',
        explanation: 'Parfait ! Ce que ton corps ne peut pas utiliser est transformé en déchets et éliminé quand tu vas aux toilettes.',
        hints: ['C\'est ce qui sort aux toilettes', 'Le corps ne garde que ce qui est utile', 'Le mot est "déchets"']
      }
    ]
  },

  // ==================== CE2 - ANGLAIS ====================

  {
    id: 'anglais-ce2-001',
    title: 'Les couleurs et les nombres',
    subject: 'anglais',
    level: 'CE2',
    difficulty: 2,
    description: 'Apprends les couleurs et les nombres de 1 à 20 en anglais',
    estimatedTime: 15,
    skills: ['Vocabulaire des couleurs', 'Nombres 1-20', 'Compréhension écrite'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "rouge" en anglais ?',
        type: 'multiple-choice',
        options: ['Blue', 'Red', 'Green', 'Yellow'],
        correctAnswer: 'Red',
        explanation: 'Le mot "rouge" se dit "Red" en anglais. C\'est une couleur primaire très importante.',
        hints: ['C\'est la couleur du sang', 'Cette couleur commence par la lettre R']
      },
      {
        id: 'q2',
        question: 'Quel nombre correspond à "fifteen" ?',
        type: 'multiple-choice',
        options: ['5', '15', '50', '14'],
        correctAnswer: '15',
        explanation: 'Fifteen signifie 15 en français. Les nombres de 13 à 19 se terminent par "-teen".',
        hints: ['Le nombre se termine par "-teen"', 'C\'est entre 14 et 16']
      },
      {
        id: 'q3',
        question: '"Yellow" signifie "jaune" en français.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! Yellow est le mot anglais pour la couleur jaune, comme le soleil.',
        hints: ['Pense à la couleur du soleil', 'C\'est une couleur primaire']
      },
      {
        id: 'q4',
        question: 'Complète : "I have ___ apples" (10 pommes)',
        type: 'fill-blank',
        correctAnswer: 'ten',
        explanation: 'Ten signifie 10 en anglais. C\'est un nombre très utilisé car nous avons dix doigts !',
        hints: ['C\'est le nombre de nos doigts', 'Le mot commence par T']
      },
      {
        id: 'q5',
        question: 'Quelle est la couleur de l\'herbe en anglais ?',
        type: 'multiple-choice',
        options: ['Green', 'Brown', 'Red', 'Blue'],
        correctAnswer: 'Green',
        explanation: 'Green signifie "vert" en anglais. L\'herbe et les feuilles des arbres sont vertes.',
        hints: ['L\'herbe est de cette couleur', 'Les feuilles des arbres aussi']
      },
      {
        id: 'q6',
        question: '"Twenty" est le nombre 12 en anglais.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Twenty signifie 20, pas 12. Le nombre 12 se dit "twelve" en anglais.',
        hints: ['Twenty ressemble à "vingt" en français', '12 se dit "twelve"']
      },
      {
        id: 'q7',
        question: 'Complète : "The sky is ___" (bleu)',
        type: 'fill-blank',
        correctAnswer: 'blue',
        explanation: 'Blue signifie "bleu" en anglais. Le ciel est bleu pendant la journée.',
        hints: ['C\'est la couleur du ciel', 'Le mot ressemble à "bleu"']
      },
      {
        id: 'q8',
        question: 'Comment dit-on le nombre 7 en anglais ?',
        type: 'multiple-choice',
        options: ['Six', 'Seven', 'Eight', 'Nine'],
        correctAnswer: 'Seven',
        explanation: 'Seven signifie 7 en anglais. Il y a 7 jours dans une semaine !',
        hints: ['Il y a ce nombre de jours dans une semaine', 'Le mot commence par S']
      },
      {
        id: 'q9',
        question: '"Orange" en anglais signifie à la fois la couleur orange et le fruit orange.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! En anglais, "orange" désigne la couleur orange ET le fruit. C\'est le même mot pour les deux.',
        hints: ['Le fruit et la couleur ont le même nom', 'C\'est comme en français']
      },
      {
        id: 'q10',
        question: 'Complète : "I am ___ years old" (huit ans)',
        type: 'fill-blank',
        correctAnswer: 'eight',
        explanation: 'Eight signifie 8 en anglais. C\'est l\'âge de beaucoup d\'élèves de CE2 !',
        hints: ['C\'est l\'âge typique d\'un élève de CE2', 'Le mot commence par E']
      }
    ]
  },

  {
    id: 'anglais-ce2-002',
    title: 'Les animaux en anglais',
    subject: 'anglais',
    level: 'CE2',
    difficulty: 2,
    description: 'Découvre le vocabulaire des animaux domestiques et de la ferme en anglais',
    estimatedTime: 15,
    skills: ['Vocabulaire des animaux', 'Animaux domestiques', 'Animaux de la ferme'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "chat" en anglais ?',
        type: 'multiple-choice',
        options: ['Dog', 'Cat', 'Mouse', 'Bird'],
        correctAnswer: 'Cat',
        explanation: 'Cat signifie "chat" en anglais. Le chat fait "meow" en anglais, comme "miaou" en français.',
        hints: ['Cet animal fait "meow"', 'C\'est un animal domestique qui ronronne']
      },
      {
        id: 'q2',
        question: '"Horse" signifie "cheval" en français.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! Horse est le mot anglais pour cheval. C\'est un animal de la ferme qui peut nous transporter.',
        hints: ['On peut monter sur cet animal', 'Il vit souvent à la ferme']
      },
      {
        id: 'q3',
        question: 'Complète : "The ___ says moo" (la vache)',
        type: 'fill-blank',
        correctAnswer: 'cow',
        explanation: 'Cow signifie "vache" en anglais. La vache fait "moo" en anglais, comme "meuh" en français.',
        hints: ['Cet animal donne du lait', 'Elle fait "meuh" en français']
      },
      {
        id: 'q4',
        question: 'Quel animal en anglais est "dog" ?',
        type: 'multiple-choice',
        options: ['Chat', 'Chien', 'Lapin', 'Oiseau'],
        correctAnswer: 'Chien',
        explanation: 'Dog signifie "chien" en anglais. Le chien est le meilleur ami de l\'homme et fait "woof woof" !',
        hints: ['C\'est le meilleur ami de l\'homme', 'Cet animal aboie']
      },
      {
        id: 'q5',
        question: 'Le mot "rabbit" désigne un lapin en anglais.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! Rabbit signifie "lapin" en anglais. Les lapins ont de longues oreilles et sautent.',
        hints: ['Cet animal a de longues oreilles', 'Il aime les carottes']
      },
      {
        id: 'q6',
        question: 'Complète : "The ___ lays eggs" (la poule)',
        type: 'fill-blank',
        correctAnswer: 'hen',
        explanation: 'Hen signifie "poule" en anglais. La poule pond des oeufs que nous mangeons au petit-déjeuner.',
        hints: ['Cet animal pond des oeufs', 'Elle vit dans le poulailler']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "cochon" en anglais ?',
        type: 'multiple-choice',
        options: ['Sheep', 'Pig', 'Duck', 'Goat'],
        correctAnswer: 'Pig',
        explanation: 'Pig signifie "cochon" en anglais. Le cochon fait "oink oink" et vit dans une porcherie.',
        hints: ['Cet animal fait "oink oink"', 'Il adore se rouler dans la boue']
      },
      {
        id: 'q8',
        question: '"Fish" en anglais peut désigner un poisson ou plusieurs poissons.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! En anglais, "fish" peut être singulier ou pluriel. Un poisson = a fish, plusieurs poissons = fish.',
        hints: ['C\'est une particularité de ce mot', 'Le mot ne change pas au pluriel']
      },
      {
        id: 'q9',
        question: 'Complète : "The ___ flies in the sky" (l\'oiseau)',
        type: 'fill-blank',
        correctAnswer: 'bird',
        explanation: 'Bird signifie "oiseau" en anglais. Les oiseaux ont des plumes et volent dans le ciel.',
        hints: ['Cet animal vole', 'Il a des plumes et des ailes']
      },
      {
        id: 'q10',
        question: 'Quel animal anglais "sheep" représente-t-il ?',
        type: 'multiple-choice',
        options: ['Mouton', 'Chèvre', 'Vache', 'Cheval'],
        correctAnswer: 'Mouton',
        explanation: 'Sheep signifie "mouton" en anglais. Le mouton a de la laine et fait "baa" (bêê en français).',
        hints: ['Cet animal nous donne de la laine', 'Il fait "bêê"']
      }
    ]
  },

  // ==================== CE2 - HISTOIRE-GÉOGRAPHIE ====================

  {
    id: 'histoire-geo-ce2-001',
    title: 'La France et ses régions',
    subject: 'histoire-geo',
    level: 'CE2',
    difficulty: 2,
    description: 'Découvre les grandes villes, les fleuves et les montagnes de France',
    estimatedTime: 15,
    skills: ['Situer les grandes villes de France', 'Connaître les fleuves', 'Identifier les massifs montagneux'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle est la capitale de la France ?',
        type: 'multiple-choice',
        options: ['Lyon', 'Paris', 'Marseille', 'Bordeaux'],
        correctAnswer: 'Paris',
        explanation: 'Paris est la capitale de la France. C\'est la plus grande ville du pays et elle se trouve au nord.',
        hints: ['C\'est la plus grande ville de France', 'On y trouve la Tour Eiffel']
      },
      {
        id: 'q2',
        question: 'La Seine est un fleuve français.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'La Seine est bien un fleuve français qui traverse Paris et se jette dans la Manche.',
        hints: ['Ce fleuve traverse Paris', 'Il se jette dans la mer']
      },
      {
        id: 'q3',
        question: 'Marseille se trouve au bord de la mer...',
        type: 'fill-blank',
        correctAnswer: 'Méditerranée',
        explanation: 'Marseille est une grande ville située au bord de la mer Méditerranée, dans le sud de la France.',
        hints: ['Cette mer se trouve au sud de la France', 'Son nom commence par M']
      },
      {
        id: 'q4',
        question: 'Quel est le plus long fleuve de France ?',
        type: 'multiple-choice',
        options: ['La Seine', 'La Loire', 'Le Rhône', 'La Garonne'],
        correctAnswer: 'La Loire',
        explanation: 'La Loire est le plus long fleuve de France avec environ 1000 kilomètres. Elle traverse le centre du pays.',
        hints: ['Il traverse le centre de la France', 'On y trouve de magnifiques châteaux']
      },
      {
        id: 'q5',
        question: 'Les Alpes sont des montagnes françaises.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Les Alpes sont une grande chaîne de montagnes située à l\'est de la France. Le Mont-Blanc, le plus haut sommet, s\'y trouve.',
        hints: ['On peut y faire du ski', 'Le Mont-Blanc s\'y trouve']
      },
      {
        id: 'q6',
        question: 'Le Mont-Blanc est le plus haut sommet de France. Il mesure environ... mètres.',
        type: 'fill-blank',
        correctAnswer: '4800',
        explanation: 'Le Mont-Blanc culmine à 4808 mètres d\'altitude. C\'est le plus haut sommet de France et d\'Europe occidentale.',
        hints: ['C\'est presque 5000 mètres', 'Le nombre commence par 4']
      },
      {
        id: 'q7',
        question: 'Quelle grande ville se trouve dans le sud-ouest de la France ?',
        type: 'multiple-choice',
        options: ['Lille', 'Strasbourg', 'Toulouse', 'Nantes'],
        correctAnswer: 'Toulouse',
        explanation: 'Toulouse est une grande ville du sud-ouest de la France, surnommée la "ville rose" à cause de ses briques roses.',
        hints: ['On l\'appelle la "ville rose"', 'Elle est célèbre pour les avions']
      },
      {
        id: 'q8',
        question: 'La France a la forme d\'un hexagone.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'On dit souvent que la France a la forme d\'un hexagone (6 côtés) quand on regarde sa carte.',
        hints: ['Un hexagone a 6 côtés', 'Regarde la forme de la France sur une carte']
      },
      {
        id: 'q9',
        question: 'Les... sont des montagnes situées entre la France et l\'Espagne.',
        type: 'fill-blank',
        correctAnswer: 'Pyrénées',
        explanation: 'Les Pyrénées forment une frontière naturelle entre la France et l\'Espagne, au sud du pays.',
        hints: ['Ces montagnes sont au sud', 'Le mot commence par P']
      },
      {
        id: 'q10',
        question: 'Quelle ville se trouve au bord de l\'océan Atlantique ?',
        type: 'multiple-choice',
        options: ['Nice', 'Bordeaux', 'Strasbourg', 'Grenoble'],
        correctAnswer: 'Bordeaux',
        explanation: 'Bordeaux est une grande ville située dans le sud-ouest de la France, près de l\'océan Atlantique.',
        hints: ['Cette ville est célèbre pour le vin', 'Elle est à l\'ouest de la France']
      }
    ]
  },

  {
    id: 'histoire-geo-ce2-002',
    title: 'Les paysages de France',
    subject: 'histoire-geo',
    level: 'CE2',
    difficulty: 2,
    description: 'Explore les différents paysages français : mer, montagne, campagne et ville',
    estimatedTime: 15,
    skills: ['Identifier les types de paysages', 'Comprendre les caractéristiques des milieux', 'Reconnaître les activités humaines'],
    questions: [
      {
        id: 'q1',
        question: 'Quel paysage trouve-t-on au bord de la mer ?',
        type: 'multiple-choice',
        options: ['Une plaine', 'Une plage', 'Une forêt', 'Un champ'],
        correctAnswer: 'Une plage',
        explanation: 'Au bord de la mer, on trouve des plages de sable ou de galets. C\'est le paysage littoral.',
        hints: ['On peut y construire des châteaux de sable', 'Les vagues viennent s\'y déposer']
      },
      {
        id: 'q2',
        question: 'À la campagne, on trouve beaucoup de champs et de fermes.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'La campagne est caractérisée par les champs cultivés, les prairies, les fermes et les animaux d\'élevage.',
        hints: ['Les agriculteurs y travaillent', 'On y cultive du blé, du maïs...']
      },
      {
        id: 'q3',
        question: 'En montagne, les sommets les plus hauts sont recouverts de...',
        type: 'fill-blank',
        correctAnswer: 'neige',
        explanation: 'Les hauts sommets des montagnes sont recouverts de neige toute l\'année car il y fait très froid.',
        hints: ['C\'est blanc et froid', 'On peut y faire du ski']
      },
      {
        id: 'q4',
        question: 'Que trouve-t-on en grande quantité dans les villes ?',
        type: 'multiple-choice',
        options: ['Des vaches', 'Des immeubles', 'Des champs', 'Des forêts'],
        correctAnswer: 'Des immeubles',
        explanation: 'Les villes sont caractérisées par de nombreux bâtiments, immeubles, magasins et beaucoup d\'habitants.',
        hints: ['Beaucoup de gens y habitent', 'Ce sont des bâtiments hauts']
      },
      {
        id: 'q5',
        question: 'Les pêcheurs travaillent dans les paysages de montagne.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Les pêcheurs travaillent au bord de la mer ou des lacs, pas en montagne. En montagne, on trouve plutôt des bergers.',
        hints: ['Où trouve-t-on beaucoup de poissons ?', 'Les pêcheurs ont besoin d\'eau']
      },
      {
        id: 'q6',
        question: 'À la campagne, les agriculteurs cultivent les... pour produire de la nourriture.',
        type: 'fill-blank',
        correctAnswer: 'champs',
        explanation: 'Les agriculteurs cultivent les champs où ils font pousser du blé, du maïs, des légumes et d\'autres plantes.',
        hints: ['Ce sont de grandes surfaces de terre', 'On y plante des céréales']
      },
      {
        id: 'q7',
        question: 'Quel moyen de transport est très utilisé en ville ?',
        type: 'multiple-choice',
        options: ['Le tracteur', 'Le métro', 'Le bateau de pêche', 'Le télésiège'],
        correctAnswer: 'Le métro',
        explanation: 'En ville, on utilise beaucoup le métro, les bus et les tramways pour se déplacer car il y a beaucoup de monde.',
        hints: ['Il circule sous terre', 'Il transporte beaucoup de personnes']
      },
      {
        id: 'q8',
        question: 'On peut voir des marmottes dans les paysages de montagne.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Les marmottes sont des animaux qui vivent dans les montagnes. On les trouve dans les Alpes et les Pyrénées.',
        hints: ['C\'est un petit animal qui siffle', 'Il dort tout l\'hiver']
      },
      {
        id: 'q9',
        question: 'Les... sont des bateaux qui partent pêcher en mer.',
        type: 'fill-blank',
        correctAnswer: 'chalutiers',
        explanation: 'Les chalutiers sont de gros bateaux de pêche qui partent en mer pour attraper des poissons.',
        hints: ['Ce sont de gros bateaux', 'Le mot commence par C']
      },
      {
        id: 'q10',
        question: 'Quel paysage est caractérisé par beaucoup d\'arbres très proches les uns des autres ?',
        type: 'multiple-choice',
        options: ['La plage', 'La forêt', 'Le désert', 'La ville'],
        correctAnswer: 'La forêt',
        explanation: 'Une forêt est un paysage avec beaucoup d\'arbres rapprochés. On y trouve aussi des animaux comme les cerfs, les sangliers...',
        hints: ['Les arbres y sont nombreux', 'On peut s\'y promener sur des sentiers']
      }
    ]
  },

  {
    id: 'histoire-geo-ce2-003',
    title: 'Le temps qui passe - La frise chronologique',
    subject: 'histoire-geo',
    level: 'CE2',
    difficulty: 2,
    description: 'Apprends à te repérer dans le temps : siècles, dates importantes et frise chronologique',
    estimatedTime: 15,
    skills: ['Comprendre la notion de siècle', 'Se repérer sur une frise chronologique', 'Différencier passé, présent et futur'],
    questions: [
      {
        id: 'q1',
        question: 'Combien d\'années y a-t-il dans un siècle ?',
        type: 'multiple-choice',
        options: ['10 ans', '50 ans', '100 ans', '1000 ans'],
        correctAnswer: '100 ans',
        explanation: 'Un siècle dure 100 ans. Par exemple, le 20ème siècle va de 1901 à 2000.',
        hints: ['C\'est un nombre rond', 'C\'est plus qu\'une vie humaine']
      },
      {
        id: 'q2',
        question: 'Nous vivons actuellement au 21ème siècle.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Nous sommes au 21ème siècle qui a commencé en 2001 et se terminera en 2100.',
        hints: ['Nous sommes en 2025', 'Le siècle a commencé en 2001']
      },
      {
        id: 'q3',
        question: 'La Révolution française a eu lieu en...',
        type: 'fill-blank',
        correctAnswer: '1789',
        explanation: 'La Révolution française a commencé en 1789. C\'est un événement très important de l\'histoire de France.',
        hints: ['C\'est au 18ème siècle', 'Le nombre commence par 17']
      },
      {
        id: 'q4',
        question: 'Qu\'est-ce qui s\'est passé AVANT la naissance de tes grands-parents ?',
        type: 'multiple-choice',
        options: ['L\'invention de l\'ordinateur', 'La Première Guerre mondiale', 'L\'invention du téléphone portable', 'Ton entrée à l\'école'],
        correctAnswer: 'La Première Guerre mondiale',
        explanation: 'La Première Guerre mondiale s\'est déroulée de 1914 à 1918, bien avant la naissance de tes grands-parents.',
        hints: ['C\'est l\'événement le plus ancien', 'C\'était il y a plus de 100 ans']
      },
      {
        id: 'q5',
        question: 'Le passé, c\'est ce qui va arriver demain.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Non, le passé c\'est ce qui s\'est déjà passé, hier ou il y a longtemps. Ce qui va arriver, c\'est le futur.',
        hints: ['Le passé, c\'est avant aujourd\'hui', 'Demain, c\'est le futur']
      },
      {
        id: 'q6',
        question: 'Sur une frise chronologique, on place les événements de gauche à droite, du plus... au plus récent.',
        type: 'fill-blank',
        correctAnswer: 'ancien',
        explanation: 'Sur une frise chronologique, le temps avance de gauche à droite : à gauche le passé lointain, à droite le présent.',
        hints: ['C\'est le contraire de récent', 'C\'est ce qui s\'est passé il y a longtemps']
      },
      {
        id: 'q7',
        question: 'En quelle année Christophe Colomb a-t-il découvert l\'Amérique ?',
        type: 'multiple-choice',
        options: ['1492', '1789', '1914', '2000'],
        correctAnswer: '1492',
        explanation: 'Christophe Colomb a découvert l\'Amérique en 1492. C\'était il y a plus de 500 ans.',
        hints: ['C\'est la date la plus ancienne', 'C\'était au 15ème siècle']
      },
      {
        id: 'q8',
        question: 'Tes arrière-grands-parents sont nés avant tes grands-parents.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui, les arrière-grands-parents sont les parents de tes grands-parents, ils sont donc nés avant eux.',
        hints: ['Qui est le plus âgé ?', 'Les arrière-grands-parents sont plus vieux']
      },
      {
        id: 'q9',
        question: 'La Première Guerre mondiale s\'est terminée en...',
        type: 'fill-blank',
        correctAnswer: '1918',
        explanation: 'La Première Guerre mondiale s\'est terminée le 11 novembre 1918. On célèbre cette date chaque année.',
        hints: ['C\'est au début du 20ème siècle', 'On commémore cette date le 11 novembre']
      },
      {
        id: 'q10',
        question: 'Quel est l\'ordre chronologique correct (du plus ancien au plus récent) ?',
        type: 'multiple-choice',
        options: ['Préhistoire - Moyen Âge - Époque contemporaine', 'Moyen Âge - Préhistoire - Époque contemporaine', 'Époque contemporaine - Moyen Âge - Préhistoire', 'Moyen Âge - Époque contemporaine - Préhistoire'],
        correctAnswer: 'Préhistoire - Moyen Âge - Époque contemporaine',
        explanation: 'L\'ordre correct est : Préhistoire (très ancien), Moyen Âge (châteaux forts, chevaliers), puis Époque contemporaine (aujourd\'hui).',
        hints: ['La Préhistoire est la période la plus ancienne', 'Nous vivons à l\'Époque contemporaine']
      }
    ]
  },

  // ==================== CM1 - SCIENCES ====================

  {
    id: 'sciences-cm1-001',
    title: 'Le système solaire',
    subject: 'sciences',
    level: 'CM1',
    difficulty: 3,
    description: 'Découvrir et comprendre le système solaire : les planètes, le Soleil, la Lune et leurs mouvements dans l\'espace.',
    estimatedTime: 15,
    skills: ['Connaître les planètes du système solaire', 'Comprendre le mouvement de rotation et de révolution', 'Identifier les caractéristiques du Soleil et de la Lune'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle est l\'étoile au centre de notre système solaire ?',
        type: 'multiple-choice',
        options: ['La Lune', 'Le Soleil', 'Mars', 'Jupiter'],
        correctAnswer: 'Le Soleil',
        explanation: 'Le Soleil est l\'étoile au centre de notre système solaire. C\'est une boule de gaz très chaude qui produit de la lumière et de la chaleur. Toutes les planètes tournent autour du Soleil.',
        hints: ['C\'est une étoile qui brille et donne de la chaleur', 'Toutes les planètes tournent autour de cet astre']
      },
      {
        id: 'q2',
        question: 'Combien y a-t-il de planètes dans notre système solaire ?',
        type: 'multiple-choice',
        options: ['6 planètes', '8 planètes', '10 planètes', '12 planètes'],
        correctAnswer: '8 planètes',
        explanation: 'Notre système solaire compte 8 planètes : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Pluton n\'est plus considérée comme une planète depuis 2006.',
        hints: ['Il y en a moins de 10', 'Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus et Neptune']
      },
      {
        id: 'q3',
        question: 'La Terre tourne autour du Soleil.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! La Terre effectue un mouvement de révolution autour du Soleil. Elle met 365 jours (une année) pour faire un tour complet autour du Soleil.',
        hints: ['Ce mouvement s\'appelle la révolution', 'Cela prend une année complète']
      },
      {
        id: 'q4',
        question: 'Quelle planète est la plus proche du Soleil ?',
        type: 'multiple-choice',
        options: ['Vénus', 'Mercure', 'Mars', 'Terre'],
        correctAnswer: 'Mercure',
        explanation: 'Mercure est la planète la plus proche du Soleil. C\'est aussi la plus petite planète du système solaire. Elle est très chaude du côté exposé au Soleil.',
        hints: ['C\'est la première planète du système solaire', 'Son nom commence par la lettre M']
      },
      {
        id: 'q5',
        question: 'La Lune est une planète.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Faux',
        explanation: 'Faux ! La Lune n\'est pas une planète, c\'est un satellite naturel de la Terre. Elle tourne autour de notre planète et met environ 28 jours pour faire un tour complet.',
        hints: ['Elle tourne autour de la Terre', 'C\'est un satellite naturel']
      },
      {
        id: 'q6',
        question: 'Quelle est la plus grosse planète du système solaire ?',
        type: 'multiple-choice',
        options: ['Saturne', 'Neptune', 'Jupiter', 'Uranus'],
        correctAnswer: 'Jupiter',
        explanation: 'Jupiter est la plus grosse planète de notre système solaire. Elle est tellement grande qu\'on pourrait y mettre 1300 fois la Terre ! C\'est une planète gazeuse avec une grande tache rouge.',
        hints: ['Son nom commence par la lettre J', 'C\'est une planète gazeuse géante']
      },
      {
        id: 'q7',
        question: 'Quel mouvement de la Terre provoque le jour et la nuit ? Écris le mot en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'rotation',
        explanation: 'La rotation est le mouvement de la Terre sur elle-même. Elle tourne comme une toupie en 24 heures. Quand notre partie de la Terre est face au Soleil, c\'est le jour. Quand elle est à l\'opposé, c\'est la nuit.',
        hints: ['C\'est un mouvement sur elle-même', 'Cela prend 24 heures']
      },
      {
        id: 'q8',
        question: 'Quelle planète est surnommée la "planète rouge" ?',
        type: 'multiple-choice',
        options: ['Vénus', 'Jupiter', 'Mars', 'Saturne'],
        correctAnswer: 'Mars',
        explanation: 'Mars est surnommée la "planète rouge" à cause de la couleur de son sol qui contient beaucoup d\'oxyde de fer (rouille). C\'est la quatrième planète en partant du Soleil.',
        hints: ['Sa couleur est rougeâtre', 'C\'est la 4ème planète depuis le Soleil']
      },
      {
        id: 'q9',
        question: 'Les planètes produisent leur propre lumière.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Faux',
        explanation: 'Faux ! Les planètes ne produisent pas leur propre lumière. Elles réfléchissent la lumière du Soleil, c\'est pourquoi nous pouvons les voir briller dans le ciel nocturne. Seules les étoiles comme le Soleil produisent leur propre lumière.',
        hints: ['Elles réfléchissent la lumière du Soleil', 'Seules les étoiles produisent leur lumière']
      },
      {
        id: 'q10',
        question: 'Comment s\'appelle le mouvement de la Terre autour du Soleil ? Écris le mot en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'révolution',
        explanation: 'Le mouvement de révolution est le mouvement de la Terre autour du Soleil. Ce mouvement dure 365 jours, soit une année. C\'est grâce à ce mouvement et à l\'inclinaison de la Terre que nous avons les saisons.',
        hints: ['Ce mouvement dure une année', 'Il ne faut pas le confondre avec la rotation']
      }
    ]
  },

  {
    id: 'sciences-cm1-002',
    title: 'Les chaînes alimentaires',
    subject: 'sciences',
    level: 'CM1',
    difficulty: 3,
    description: 'Comprendre les relations alimentaires entre les êtres vivants : producteurs, consommateurs et décomposeurs dans un écosystème.',
    estimatedTime: 15,
    skills: ['Identifier les différents maillons d\'une chaîne alimentaire', 'Reconnaître les producteurs, consommateurs et décomposeurs', 'Comprendre les relations entre les êtres vivants'],
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce qu\'une chaîne alimentaire ?',
        type: 'multiple-choice',
        options: ['Une liste de courses', 'La succession des êtres vivants qui se nourrissent les uns des autres', 'Un collier fait avec de la nourriture', 'Un magasin d\'alimentation'],
        correctAnswer: 'La succession des êtres vivants qui se nourrissent les uns des autres',
        explanation: 'Une chaîne alimentaire représente les relations de nourriture entre les êtres vivants. Elle montre qui mange qui dans un écosystème. Par exemple : herbe → lapin → renard.',
        hints: ['Cela concerne les animaux et les plantes', 'C\'est un schéma montrant "qui mange qui"']
      },
      {
        id: 'q2',
        question: 'Comment appelle-t-on les êtres vivants qui fabriquent leur propre nourriture grâce au soleil ?',
        type: 'multiple-choice',
        options: ['Les consommateurs', 'Les producteurs', 'Les décomposeurs', 'Les prédateurs'],
        correctAnswer: 'Les producteurs',
        explanation: 'Les producteurs sont des êtres vivants, principalement des végétaux (plantes, arbres, algues), qui fabriquent leur propre nourriture grâce à la photosynthèse. Ils utilisent l\'énergie du soleil, l\'eau et le CO2.',
        hints: ['Ce sont surtout des végétaux', 'Ils utilisent la photosynthèse']
      },
      {
        id: 'q3',
        question: 'Les plantes sont toujours au début d\'une chaîne alimentaire.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les plantes sont des producteurs et se trouvent toujours au début d\'une chaîne alimentaire. Elles captent l\'énergie du soleil pour fabriquer leur nourriture. Tous les autres êtres vivants dépendent directement ou indirectement des plantes.',
        hints: ['Ce sont des producteurs', 'Elles utilisent l\'énergie du soleil']
      },
      {
        id: 'q4',
        question: 'Un animal qui mange uniquement des plantes est appelé :',
        type: 'multiple-choice',
        options: ['Un carnivore', 'Un herbivore', 'Un omnivore', 'Un décomposeur'],
        correctAnswer: 'Un herbivore',
        explanation: 'Un herbivore est un animal qui se nourrit uniquement de végétaux (herbe, feuilles, fruits, graines). Exemples : le lapin, la vache, le mouton, le cerf. Les herbivores sont des consommateurs primaires.',
        hints: ['Le mot contient "herbe"', 'La vache et le lapin en sont des exemples']
      },
      {
        id: 'q5',
        question: 'Quel est le rôle des décomposeurs dans la nature ?',
        type: 'multiple-choice',
        options: ['Fabriquer la nourriture', 'Transformer les déchets et matières mortes en éléments nutritifs', 'Chasser les autres animaux', 'Protéger les plantes'],
        correctAnswer: 'Transformer les déchets et matières mortes en éléments nutritifs',
        explanation: 'Les décomposeurs (champignons, bactéries, vers de terre) transforment les déchets et les êtres vivants morts en éléments nutritifs. Ces éléments retournent dans le sol et nourrissent les plantes. Ils recyclent la matière.',
        hints: ['Ils recyclent la matière', 'Les champignons et les vers de terre en font partie']
      },
      {
        id: 'q6',
        question: 'Un renard qui mange un lapin est un consommateur.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le renard est un consommateur car il se nourrit d\'autres êtres vivants. Plus précisément, c\'est un consommateur secondaire (ou de 2ème ordre) car il mange des herbivores. C\'est aussi un carnivore.',
        hints: ['Il ne fabrique pas sa nourriture', 'Il mange d\'autres animaux']
      },
      {
        id: 'q7',
        question: 'Comment appelle-t-on un animal qui mange à la fois des plantes et de la viande ? Écris le mot en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'omnivore',
        explanation: 'Un omnivore est un animal qui se nourrit à la fois de végétaux et d\'animaux. Exemples : l\'ours, le sanglier, l\'être humain. Les omnivores ont un régime alimentaire varié et peuvent s\'adapter à différents milieux.',
        hints: ['Le mot commence par la lettre "o"', 'L\'être humain en est un exemple']
      },
      {
        id: 'q8',
        question: 'Dans la chaîne alimentaire suivante, qui est le prédateur ? Herbe → Souris → Hibou',
        type: 'multiple-choice',
        options: ['L\'herbe', 'La souris', 'Le hibou', 'Il n\'y a pas de prédateur'],
        correctAnswer: 'Le hibou',
        explanation: 'Le hibou est le prédateur dans cette chaîne alimentaire. Un prédateur est un animal qui chasse d\'autres animaux pour se nourrir. Le hibou est au sommet de cette chaîne : c\'est un consommateur tertiaire (de 3ème ordre).',
        hints: ['C\'est celui qui est au bout de la chaîne', 'C\'est celui qui chasse']
      },
      {
        id: 'q9',
        question: 'Si les plantes disparaissaient, tous les animaux mourraient.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Si les plantes disparaissaient, tous les animaux finiraient par mourir. Les herbivores n\'auraient plus rien à manger et mourraient. Ensuite, les carnivores qui mangent les herbivores mourraient aussi. Les plantes sont indispensables à toute vie sur Terre.',
        hints: ['Les plantes sont à la base de toute chaîne alimentaire', 'Tous les animaux dépendent des plantes']
      },
      {
        id: 'q10',
        question: 'Quel mot désigne un animal qui chasse d\'autres animaux ? Écris le mot en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'prédateur',
        explanation: 'Un prédateur est un animal qui chasse et capture d\'autres animaux (appelés proies) pour se nourrir. Exemples de prédateurs : le lion, l\'aigle, le requin, le renard. Les prédateurs ont souvent des sens développés et des armes naturelles (griffes, dents).',
        hints: ['C\'est le contraire de "proie"', 'Le lion en est un exemple']
      }
    ]
  },

  {
    id: 'sciences-cm1-003',
    title: 'L\'électricité',
    subject: 'sciences',
    level: 'CM1',
    difficulty: 3,
    description: 'Découvrir le fonctionnement de l\'électricité : circuits électriques simples, conducteurs, isolants et composants électriques.',
    estimatedTime: 15,
    skills: ['Construire un circuit électrique simple', 'Distinguer conducteurs et isolants', 'Comprendre le fonctionnement d\'un circuit en série'],
    questions: [
      {
        id: 'q1',
        question: 'De quoi a-t-on besoin pour allumer une ampoule électrique ?',
        type: 'multiple-choice',
        options: ['Seulement une ampoule', 'Une pile, une ampoule et des fils électriques', 'Seulement une pile', 'De l\'eau et du soleil'],
        correctAnswer: 'Une pile, une ampoule et des fils électriques',
        explanation: 'Pour allumer une ampoule, il faut créer un circuit électrique fermé. On a besoin d\'une source d\'énergie (la pile), d\'un récepteur (l\'ampoule) et de conducteurs (les fils) pour relier les éléments.',
        hints: ['Il faut plusieurs éléments', 'Il faut une source d\'énergie et des fils pour la relier']
      },
      {
        id: 'q2',
        question: 'Qu\'est-ce qu\'un circuit électrique fermé ?',
        type: 'multiple-choice',
        options: ['Un circuit dans une boîte', 'Un circuit où le courant peut circuler sans interruption', 'Un circuit avec un interrupteur ouvert', 'Un circuit dangereux'],
        correctAnswer: 'Un circuit où le courant peut circuler sans interruption',
        explanation: 'Un circuit électrique fermé est un circuit où tous les éléments sont reliés sans interruption, formant une boucle. Le courant électrique peut circuler de la borne + de la pile jusqu\'à la borne -, et l\'ampoule s\'allume.',
        hints: ['Le courant peut circuler', 'Il forme une boucle complète']
      },
      {
        id: 'q3',
        question: 'Un interrupteur ouvert laisse passer le courant électrique.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Faux',
        explanation: 'Faux ! Quand un interrupteur est ouvert, le circuit est coupé et le courant ne peut plus circuler. L\'ampoule s\'éteint. Quand l\'interrupteur est fermé, le circuit est fermé et le courant peut circuler : l\'ampoule s\'allume.',
        hints: ['Ouvert = circuit coupé', 'L\'ampoule ne peut pas s\'allumer']
      },
      {
        id: 'q4',
        question: 'Qu\'est-ce qu\'un matériau conducteur ?',
        type: 'multiple-choice',
        options: ['Un matériau qui bloque l\'électricité', 'Un matériau qui laisse passer l\'électricité', 'Un matériau qui produit de l\'électricité', 'Un matériau qui stocke l\'électricité'],
        correctAnswer: 'Un matériau qui laisse passer l\'électricité',
        explanation: 'Un matériau conducteur est un matériau qui laisse passer le courant électrique. Les métaux (cuivre, fer, aluminium, or) sont de bons conducteurs. C\'est pourquoi les fils électriques sont en cuivre.',
        hints: ['Le courant peut y circuler', 'Les métaux en sont des exemples']
      },
      {
        id: 'q5',
        question: 'Lequel de ces matériaux est un conducteur électrique ?',
        type: 'multiple-choice',
        options: ['Le plastique', 'Le bois', 'Le cuivre', 'Le caoutchouc'],
        correctAnswer: 'Le cuivre',
        explanation: 'Le cuivre est un excellent conducteur électrique. C\'est un métal utilisé dans les fils électriques. Le plastique, le bois et le caoutchouc sont des isolants : ils ne laissent pas passer l\'électricité.',
        hints: ['C\'est un métal', 'On l\'utilise dans les fils électriques']
      },
      {
        id: 'q6',
        question: 'Le bois est un matériau isolant.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le bois est un matériau isolant : il ne laisse pas passer le courant électrique. C\'est pourquoi on peut toucher un manche en bois sans danger. Les autres isolants sont le plastique, le verre, le caoutchouc, le papier.',
        hints: ['Il ne conduit pas l\'électricité', 'C\'est le contraire d\'un conducteur']
      },
      {
        id: 'q7',
        question: 'Comment appelle-t-on un matériau qui ne laisse pas passer l\'électricité ? Écris le mot en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'isolant',
        explanation: 'Un isolant est un matériau qui ne laisse pas passer le courant électrique. Les isolants protègent du courant électrique. Exemples : le plastique, le bois, le verre, le caoutchouc. Les fils électriques sont recouverts de plastique isolant.',
        hints: ['C\'est le contraire de "conducteur"', 'Le plastique en est un exemple']
      },
      {
        id: 'q8',
        question: 'Que se passe-t-il si on enlève une ampoule dans un circuit en série avec deux ampoules ?',
        type: 'multiple-choice',
        options: ['L\'autre ampoule brille plus fort', 'L\'autre ampoule s\'éteint aussi', 'L\'autre ampoule continue de briller normalement', 'La pile se décharge'],
        correctAnswer: 'L\'autre ampoule s\'éteint aussi',
        explanation: 'Dans un circuit en série, tous les éléments sont reliés les uns après les autres. Si on enlève une ampoule, le circuit est ouvert et le courant ne peut plus circuler. L\'autre ampoule s\'éteint donc aussi.',
        hints: ['Le circuit est interrompu', 'C\'est comme un interrupteur ouvert']
      },
      {
        id: 'q9',
        question: 'Une pile possède deux bornes : une borne + et une borne -.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Une pile possède deux bornes (pôles) : une borne positive (+) et une borne négative (-). Le courant électrique circule de la borne + vers la borne - à l\'extérieur de la pile. Il faut relier ces deux bornes avec un circuit pour que le courant circule.',
        hints: ['Il y a un pôle positif et un pôle négatif', 'Le courant va du + vers le -']
      },
      {
        id: 'q10',
        question: 'Quel composant permet d\'ouvrir ou de fermer un circuit électrique ? Écris le mot en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'interrupteur',
        explanation: 'L\'interrupteur est un composant qui permet d\'ouvrir ou de fermer un circuit électrique. Quand on appuie dessus, il ferme le circuit et le courant passe (l\'ampoule s\'allume). Quand on rappuie, il ouvre le circuit et le courant s\'arrête (l\'ampoule s\'éteint).',
        hints: ['On en trouve sur les murs pour allumer la lumière', 'Il permet de contrôler le circuit']
      }
    ]
  },

  // ==================== CM1 - ANGLAIS ====================

  {
    id: 'anglais-cm1-001',
    title: 'Le corps humain en anglais',
    subject: 'anglais',
    level: 'CM1',
    difficulty: 3,
    description: 'Apprends à nommer les différentes parties du corps humain en anglais : tête, bras, jambes, mains, pieds et visage.',
    estimatedTime: 15,
    skills: ['Vocabulaire du corps humain', 'Compréhension écrite', 'Mémorisation lexicale'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "la tête" en anglais ?',
        type: 'multiple-choice',
        options: ['hand', 'head', 'leg', 'foot'],
        correctAnswer: 'head',
        explanation: 'En anglais, "la tête" se dit "head". C\'est un mot très important car c\'est la partie du corps qui contient le cerveau !',
        hints: ['Cela commence par la lettre H', 'C\'est un mot de 4 lettres']
      },
      {
        id: 'q2',
        question: 'Le mot "arm" désigne quelle partie du corps ?',
        type: 'multiple-choice',
        options: ['la jambe', 'le bras', 'le pied', 'la main'],
        correctAnswer: 'le bras',
        explanation: '"Arm" signifie "le bras" en français. On utilise nos bras pour porter des objets et faire des gestes.',
        hints: ['C\'est entre l\'épaule et la main', 'On en a deux']
      },
      {
        id: 'q3',
        question: '"Eye" et "ear" désignent tous les deux des parties du visage.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! "Eye" signifie "œil" et "ear" signifie "oreille". Ce sont deux organes sensoriels du visage.',
        hints: ['Pense aux 5 sens', 'L\'un sert à voir, l\'autre à entendre']
      },
      {
        id: 'q4',
        question: 'Complète : "I have two ___ to walk." (J\'ai deux ___ pour marcher.) Écris le mot en anglais.',
        type: 'fill-blank',
        correctAnswer: 'legs',
        explanation: '"Legs" signifie "jambes" en français. On utilise nos jambes pour marcher, courir et sauter.',
        hints: ['Cela commence par L', 'C\'est le pluriel']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "la bouche" en anglais ?',
        type: 'multiple-choice',
        options: ['mouth', 'nose', 'ear', 'eye'],
        correctAnswer: 'mouth',
        explanation: '"Mouth" signifie "la bouche". C\'est avec la bouche qu\'on parle et qu\'on mange.',
        hints: ['Cela commence par M', 'On l\'utilise pour parler']
      },
      {
        id: 'q6',
        question: 'Le mot "foot" est au singulier et "feet" est au pluriel.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! "Foot" signifie "pied" (un seul) et "feet" signifie "pieds" (plusieurs). C\'est un pluriel irrégulier en anglais.',
        hints: ['Pense à "one foot, two feet"', 'C\'est comme tooth/teeth']
      },
      {
        id: 'q7',
        question: 'Quelle partie du corps désigne "hand" ?',
        type: 'multiple-choice',
        options: ['le nez', 'la main', 'le pied', 'l\'oreille'],
        correctAnswer: 'la main',
        explanation: '"Hand" signifie "la main" en français. On utilise nos mains pour écrire, attraper des objets et toucher.',
        hints: ['C\'est au bout du bras', 'On a 5 doigts sur chaque']
      },
      {
        id: 'q8',
        question: 'Complète : "I smell with my ___." (Je sens avec mon ___.) Écris le mot en anglais.',
        type: 'fill-blank',
        correctAnswer: 'nose',
        explanation: '"Nose" signifie "nez" en français. Le nez nous permet de sentir les odeurs.',
        hints: ['Cela commence par N', 'C\'est au milieu du visage']
      },
      {
        id: 'q9',
        question: '"Ear" se prononce comme le mot français "aire".',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! "Ear" (oreille) se prononce [ir] en anglais, ce qui ressemble au mot français "aire".',
        hints: ['Écoute bien la prononciation', 'Le son est proche']
      },
      {
        id: 'q10',
        question: 'Combien y a-t-il de lettres dans le mot "eye" (œil) ?',
        type: 'multiple-choice',
        options: ['2 lettres', '3 lettres', '4 lettres', '5 lettres'],
        correctAnswer: '3 lettres',
        explanation: '"Eye" s\'écrit avec 3 lettres : E-Y-E. C\'est un mot court mais important !',
        hints: ['Compte bien les lettres : e-y-e', 'C\'est moins de 4']
      }
    ]
  },

  {
    id: 'anglais-cm1-002',
    title: 'Les vêtements en anglais',
    subject: 'anglais',
    level: 'CM1',
    difficulty: 3,
    description: 'Découvre le vocabulaire des vêtements en anglais : chemise, pantalon, robe, chaussures, chapeau, manteau et chaussettes.',
    estimatedTime: 15,
    skills: ['Vocabulaire des vêtements', 'Description vestimentaire', 'Compréhension écrite'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "une chemise" en anglais ?',
        type: 'multiple-choice',
        options: ['shirt', 'shoes', 'socks', 'shorts'],
        correctAnswer: 'shirt',
        explanation: '"Shirt" signifie "chemise" en anglais. C\'est un vêtement qu\'on porte sur le haut du corps.',
        hints: ['Cela commence par SH', 'C\'est pour le haut du corps']
      },
      {
        id: 'q2',
        question: 'Le mot "trousers" désigne quel vêtement ?',
        type: 'multiple-choice',
        options: ['le chapeau', 'les chaussettes', 'le pantalon', 'le manteau'],
        correctAnswer: 'le pantalon',
        explanation: '"Trousers" signifie "pantalon" en anglais. Attention, ce mot est toujours au pluriel en anglais !',
        hints: ['C\'est pour les jambes', 'C\'est toujours au pluriel']
      },
      {
        id: 'q3',
        question: '"Shoes" et "socks" sont tous les deux des vêtements pour les pieds.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! "Shoes" signifie "chaussures" et "socks" signifie "chaussettes". Les deux se portent aux pieds.',
        hints: ['Pense à ce qu\'on met aux pieds', 'L\'un se porte dans l\'autre']
      },
      {
        id: 'q4',
        question: 'Complète : "She is wearing a beautiful ___." (Elle porte une belle robe.) Écris le mot en anglais.',
        type: 'fill-blank',
        correctAnswer: 'dress',
        explanation: '"Dress" signifie "robe" en anglais. C\'est un vêtement d\'une seule pièce pour tout le corps.',
        hints: ['Cela commence par D', 'C\'est un vêtement féminin en une pièce']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "un chapeau" en anglais ?',
        type: 'multiple-choice',
        options: ['hat', 'hand', 'head', 'heart'],
        correctAnswer: 'hat',
        explanation: '"Hat" signifie "chapeau" en anglais. On le porte sur la tête pour se protéger du soleil ou du froid.',
        hints: ['Cela commence par H', 'C\'est un mot de 3 lettres']
      },
      {
        id: 'q6',
        question: 'Le mot "coat" désigne un vêtement qu\'on porte quand il fait chaud.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Faux',
        explanation: 'C\'est faux ! "Coat" signifie "manteau", un vêtement qu\'on porte quand il fait froid, pas chaud.',
        hints: ['Pense à l\'hiver', 'Un manteau protège du froid']
      },
      {
        id: 'q7',
        question: 'Quel vêtement désigne "shoes" ?',
        type: 'multiple-choice',
        options: ['les chaussettes', 'les chaussures', 'le short', 'la chemise'],
        correctAnswer: 'les chaussures',
        explanation: '"Shoes" signifie "chaussures" en anglais. On les porte pour protéger nos pieds quand on marche.',
        hints: ['C\'est pour les pieds', 'C\'est toujours au pluriel']
      },
      {
        id: 'q8',
        question: 'Complète : "Put on your ___ before your shoes." (Mets tes chaussettes avant tes chaussures.) Écris le mot en anglais.',
        type: 'fill-blank',
        correctAnswer: 'socks',
        explanation: '"Socks" signifie "chaussettes" en anglais. On les porte avant les chaussures pour protéger nos pieds.',
        hints: ['Cela commence par S', 'C\'est le pluriel, on en met deux']
      },
      {
        id: 'q9',
        question: '"Dress" et "trousers" sont tous les deux toujours au pluriel en anglais.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Faux',
        explanation: 'C\'est faux ! "Dress" est au singulier (une robe), mais "trousers" est toujours au pluriel en anglais (un pantalon).',
        hints: ['Un seul des deux est au pluriel', '"Trousers" a un S à la fin']
      },
      {
        id: 'q10',
        question: 'Quel vêtement porte-t-on pour se protéger du froid ?',
        type: 'multiple-choice',
        options: ['shirt', 'dress', 'coat', 'socks'],
        correctAnswer: 'coat',
        explanation: '"Coat" (manteau) est le vêtement principal pour se protéger du froid en hiver. C\'est un vêtement chaud qu\'on porte par-dessus les autres.',
        hints: ['C\'est un vêtement d\'hiver', 'On le porte par-dessus']
      }
    ]
  },

  {
    id: 'anglais-cm1-003',
    title: 'L\'heure en anglais',
    subject: 'anglais',
    level: 'CM1',
    difficulty: 3,
    description: 'Apprends à dire et comprendre l\'heure en anglais : demander l\'heure, les heures pile, les demi-heures et les quarts d\'heure.',
    estimatedTime: 15,
    skills: ['Dire l\'heure en anglais', 'Expression du temps', 'Compréhension orale'],
    questions: [
      {
        id: 'q1',
        question: 'Comment demande-t-on l\'heure en anglais ?',
        type: 'multiple-choice',
        options: ['What time is it?', 'How time is it?', 'When time is it?', 'Which time is it?'],
        correctAnswer: 'What time is it?',
        explanation: 'On demande l\'heure en disant "What time is it?" qui signifie littéralement "Quelle heure est-il ?"',
        hints: ['Cela commence par "What"', 'C\'est une question avec "time"']
      },
      {
        id: 'q2',
        question: 'Que signifie "o\'clock" en français ?',
        type: 'multiple-choice',
        options: ['et quart', 'et demie', 'heure(s) pile', 'moins le quart'],
        correctAnswer: 'heure(s) pile',
        explanation: '"O\'clock" s\'utilise pour les heures exactes, pile. Par exemple : "It\'s three o\'clock" = "Il est trois heures pile".',
        hints: ['C\'est pour les heures rondes', 'Sans minutes']
      },
      {
        id: 'q3',
        question: '"Half past three" signifie "trois heures et demie".',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! "Half past" signifie "et demie". Donc "half past three" = "trois heures et demie" (3h30).',
        hints: ['"Half" veut dire "moitié"', '"Past" veut dire "passé"']
      },
      {
        id: 'q4',
        question: 'Complète : "It\'s five ___." (Il est cinq heures pile.) Écris le mot en anglais.',
        type: 'fill-blank',
        correctAnswer: 'o\'clock',
        explanation: 'Pour dire une heure pile, on ajoute "o\'clock" après le chiffre. "It\'s five o\'clock" = "Il est cinq heures pile".',
        hints: ['C\'est pour les heures exactes', 'Cela contient "clock"']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "Il est sept heures et demie" en anglais ?',
        type: 'multiple-choice',
        options: ['It\'s half past seven', 'It\'s seven half', 'It\'s quarter past seven', 'It\'s seven o\'clock'],
        correctAnswer: 'It\'s half past seven',
        explanation: 'On dit "It\'s half past seven" pour dire "Il est sept heures et demie". "Half past" = "et demie".',
        hints: ['"Half" pour la demie', '"Past" après "half"']
      },
      {
        id: 'q6',
        question: '"Quarter past" signifie "et quart" en français.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! "Quarter past" signifie "et quart". Par exemple : "quarter past two" = "deux heures et quart" (2h15).',
        hints: ['"Quarter" veut dire "quart"', 'C\'est 15 minutes après l\'heure']
      },
      {
        id: 'q7',
        question: 'Quelle heure est-il ? "It\'s nine o\'clock"',
        type: 'multiple-choice',
        options: ['Il est neuf heures pile', 'Il est neuf heures et quart', 'Il est neuf heures et demie', 'Il est huit heures'],
        correctAnswer: 'Il est neuf heures pile',
        explanation: '"It\'s nine o\'clock" signifie "Il est neuf heures pile" (9h00 exactement).',
        hints: ['"O\'clock" = heure pile', 'Nine = neuf']
      },
      {
        id: 'q8',
        question: 'Complète : "It\'s ___ past ten." (Il est dix heures et quart.) Écris le mot en anglais.',
        type: 'fill-blank',
        correctAnswer: 'quarter',
        explanation: '"Quarter past" signifie "et quart". Donc "It\'s quarter past ten" = "Il est dix heures et quart" (10h15).',
        hints: ['Cela commence par Q', 'C\'est 15 minutes']
      },
      {
        id: 'q9',
        question: 'En anglais, on dit "It\'s half past twelve" pour dire "Il est midi et demi".',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! "Twelve" peut signifier midi (12h00). Donc "half past twelve" = "midi et demi" (12h30).',
        hints: ['Twelve = 12', 'Half past = et demie']
      },
      {
        id: 'q10',
        question: 'Que signifie "It\'s quarter past four" ?',
        type: 'multiple-choice',
        options: ['Il est quatre heures moins le quart', 'Il est quatre heures et quart', 'Il est quatre heures et demie', 'Il est cinq heures et quart'],
        correctAnswer: 'Il est quatre heures et quart',
        explanation: '"Quarter past four" signifie "quatre heures et quart" (4h15). "Quarter past" = "et quart".',
        hints: ['"Past" indique après l\'heure', 'Four = quatre']
      }
    ]
  },

  // ==================== CM1 - HISTOIRE-GÉO ====================

  {
    id: 'histoire-geo-cm1-001',
    title: 'La Préhistoire',
    subject: 'histoire-geo',
    level: 'CM1',
    difficulty: 3,
    description: 'Découvre la Préhistoire : les premiers hommes, leurs outils, leur mode de vie et les grandes découvertes comme le feu et l\'agriculture.',
    estimatedTime: 15,
    skills: ['Connaître les grandes périodes de la Préhistoire', 'Comprendre l\'évolution de l\'homme', 'Identifier les découvertes majeures'],
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce que la Préhistoire ?',
        type: 'multiple-choice',
        options: ['L\'époque des dinosaures', 'La période avant l\'invention de l\'écriture', 'L\'époque des châteaux forts', 'La période après Jésus-Christ'],
        correctAnswer: 'La période avant l\'invention de l\'écriture',
        explanation: 'La Préhistoire est la très longue période qui commence avec l\'apparition des premiers hommes et se termine avec l\'invention de l\'écriture (vers -3300 avant J.-C.).',
        hints: ['C\'est avant l\'Histoire proprement dite', 'L\'écriture n\'existait pas encore']
      },
      {
        id: 'q2',
        question: 'Comment appelle-t-on les premiers hommes qui vivaient dans des grottes ?',
        type: 'multiple-choice',
        options: ['Les Gaulois', 'Les hommes préhistoriques', 'Les chevaliers', 'Les Romains'],
        correctAnswer: 'Les hommes préhistoriques',
        explanation: 'Les hommes préhistoriques sont les premiers humains. Ils vivaient souvent dans des grottes ou des abris sous roche pour se protéger du froid et des animaux sauvages.',
        hints: ['Ils vivaient pendant la Préhistoire', 'Ils s\'abritaient dans des grottes']
      },
      {
        id: 'q3',
        question: 'Les premiers outils des hommes préhistoriques étaient en pierre.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les premiers outils étaient fabriqués en pierre taillée. C\'est pourquoi on appelle cette période "l\'âge de la pierre" (Paléolithique). Plus tard, ils ont aussi utilisé l\'os et le bois.',
        hints: ['On parle de "l\'âge de la pierre"', 'Ils taillaient des silex']
      },
      {
        id: 'q4',
        question: 'Quelle grande découverte a permis aux hommes préhistoriques de se chauffer, s\'éclairer et cuire leur nourriture ?',
        type: 'multiple-choice',
        options: ['L\'électricité', 'Le feu', 'La roue', 'L\'écriture'],
        correctAnswer: 'Le feu',
        explanation: 'La maîtrise du feu est une découverte majeure de la Préhistoire. Le feu permettait de se chauffer, s\'éclairer la nuit, cuire les aliments et éloigner les animaux sauvages.',
        hints: ['C\'est quelque chose de chaud et lumineux', 'Il produit de la chaleur et de la lumière']
      },
      {
        id: 'q5',
        question: 'Les hommes préhistoriques ont peint des animaux sur les parois des grottes.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'art pariétal (peintures sur les parois des grottes) est célèbre. La grotte de Lascaux en France contient de magnifiques peintures d\'animaux (chevaux, bisons, cerfs) réalisées il y a environ 17 000 ans.',
        hints: ['La grotte de Lascaux est très connue', 'Ils dessinaient des animaux']
      },
      {
        id: 'q6',
        question: 'Quel animal n\'existait PAS à l\'époque préhistorique ?',
        type: 'multiple-choice',
        options: ['Le mammouth', 'Le dinosaure', 'Le bison', 'Le cheval sauvage'],
        correctAnswer: 'Le dinosaure',
        explanation: 'Les dinosaures ont disparu il y a 66 millions d\'années, bien avant l\'apparition des premiers hommes (il y a environ 3 millions d\'années). Les mammouths, bisons et chevaux vivaient avec les hommes préhistoriques.',
        hints: ['Les dinosaures ont disparu bien avant', 'Les premiers hommes n\'ont jamais vu de dinosaures']
      },
      {
        id: 'q7',
        question: 'Comment s\'appelle la période où les hommes ont commencé à cultiver des plantes et élever des animaux ? Écris le mot en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'néolithique',
        explanation: 'Le Néolithique (nouvel âge de la pierre) est la période où l\'homme devient agriculteur et éleveur au lieu d\'être uniquement chasseur-cueilleur. Cette révolution a commencé il y a environ 10 000 ans.',
        hints: ['C\'est le "nouvel âge de la pierre"', 'Cela commence par "néo" (nouveau)']
      },
      {
        id: 'q8',
        question: 'Que chassaient principalement les hommes préhistoriques ?',
        type: 'multiple-choice',
        options: ['Des poissons uniquement', 'De grands animaux comme le mammouth et le bison', 'Des insectes', 'Des oiseaux uniquement'],
        correctAnswer: 'De grands animaux comme le mammouth et le bison',
        explanation: 'Les hommes préhistoriques chassaient de grands animaux comme le mammouth, le bison, le renne et le cerf. La viande leur fournissait de la nourriture, et les peaux servaient à fabriquer des vêtements et des abris.',
        hints: ['Ce sont de grands animaux', 'Le mammouth était très chassé']
      },
      {
        id: 'q9',
        question: 'Les premiers hommes savaient déjà écrire.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Faux',
        explanation: 'Faux ! L\'écriture n\'a été inventée qu\'à la fin de la Préhistoire, vers -3300 avant J.-C. Avant cela, les hommes préhistoriques communiquaient par la parole et laissaient des dessins et des symboles.',
        hints: ['La Préhistoire se termine avec l\'invention de l\'écriture', 'Pas d\'écriture = Préhistoire']
      },
      {
        id: 'q10',
        question: 'Quel métier n\'existait PAS pendant la Préhistoire ?',
        type: 'multiple-choice',
        options: ['Chasseur', 'Cueilleur', 'Tailleur de pierre', 'Boulanger'],
        correctAnswer: 'Boulanger',
        explanation: 'Le métier de boulanger n\'existait pas car il n\'y avait pas de villages ni de commerces organisés. Les hommes préhistoriques étaient chasseurs (ils chassaient le gibier), cueilleurs (ils ramassaient des fruits et plantes) et taillaient leurs outils en pierre.',
        hints: ['Pense aux métiers liés aux villes et au commerce', 'Le pain nécessite une organisation complexe']
      }
    ]
  },

  {
    id: 'histoire-geo-cm1-002',
    title: 'Les Gaulois et les Romains',
    subject: 'histoire-geo',
    level: 'CM1',
    difficulty: 3,
    description: 'Découvre la vie des Gaulois, la conquête romaine de la Gaule et les transformations apportées par la civilisation gallo-romaine.',
    estimatedTime: 15,
    skills: ['Connaître la civilisation gauloise', 'Comprendre la conquête romaine', 'Identifier l\'héritage gallo-romain'],
    questions: [
      {
        id: 'q1',
        question: 'Comment s\'appelait la France à l\'époque des Gaulois ?',
        type: 'multiple-choice',
        options: ['La Bretagne', 'La Gaule', 'La Germanie', 'L\'Hispanie'],
        correctAnswer: 'La Gaule',
        explanation: 'La France s\'appelait la Gaule à l\'époque des Gaulois. Ce territoire s\'étendait de la Méditerranée jusqu\'au Rhin et à l\'océan Atlantique.',
        hints: ['C\'est un mot qui ressemble à "Gaulois"', 'Cela commence par G']
      },
      {
        id: 'q2',
        question: 'Les Gaulois vivaient dans des villages fortifiés appelés :',
        type: 'multiple-choice',
        options: ['des châteaux', 'des oppidums', 'des pyramides', 'des temples'],
        correctAnswer: 'des oppidums',
        explanation: 'Les oppidums étaient des villages gaulois fortifiés, souvent construits sur des hauteurs et entourés de remparts. Le plus célèbre est Alésia, où Vercingétorix a été vaincu par César.',
        hints: ['C\'est un mot latin', 'C\'était des villages fortifiés']
      },
      {
        id: 'q3',
        question: 'Les Gaulois étaient d\'excellents artisans, notamment en travail du métal.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les Gaulois étaient réputés pour leur travail du fer et du bronze. Ils fabriquaient des armes, des bijoux, des outils et même des tonneaux (qu\'ils ont inventés !).',
        hints: ['Ils travaillaient le fer et le bronze', 'Ils ont inventé le tonneau']
      },
      {
        id: 'q4',
        question: 'Quel général romain a conquis la Gaule ?',
        type: 'multiple-choice',
        options: ['Napoléon', 'Jules César', 'Charlemagne', 'Louis XIV'],
        correctAnswer: 'Jules César',
        explanation: 'Jules César a conquis la Gaule entre 58 et 52 avant J.-C. Cette conquête est racontée dans son livre "La Guerre des Gaules". Il a vaincu le chef gaulois Vercingétorix à Alésia.',
        hints: ['C\'est un célèbre général et homme politique romain', 'Il a écrit "La Guerre des Gaules"']
      },
      {
        id: 'q5',
        question: 'Qui était le chef gaulois qui a résisté à l\'invasion romaine ?',
        type: 'multiple-choice',
        options: ['Astérix', 'Vercingétorix', 'Clovis', 'Charlemagne'],
        correctAnswer: 'Vercingétorix',
        explanation: 'Vercingétorix était le chef arverne qui a uni les tribus gauloises pour résister à Jules César. Il a été vaincu à Alésia en 52 avant J.-C. après un long siège.',
        hints: ['C\'est un vrai personnage historique', 'Il a été vaincu à Alésia']
      },
      {
        id: 'q6',
        question: 'Après la conquête romaine, la Gaule est devenue "gallo-romaine".',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Après la conquête, la culture gauloise s\'est mélangée avec la culture romaine, créant une nouvelle civilisation appelée "gallo-romaine". Les Gaulois ont adopté la langue latine, les routes, les aqueducs et les thermes romains.',
        hints: ['Gallo = Gaulois, Romain = des Romains', 'C\'est un mélange des deux cultures']
      },
      {
        id: 'q7',
        question: 'Quel monument les Romains ont-ils construit pour transporter l\'eau dans les villes ?',
        type: 'fill-blank',
        correctAnswer: 'aqueduc',
        explanation: 'Les aqueducs étaient des constructions permettant de transporter l\'eau des sources jusqu\'aux villes. Le plus célèbre en France est le pont du Gard, près de Nîmes. Ces constructions montrent le génie des ingénieurs romains.',
        hints: ['Le mot contient "aqua" qui signifie "eau" en latin', 'Le pont du Gard en est un exemple']
      },
      {
        id: 'q8',
        question: 'Qu\'est-ce que les Romains ont construit pour faciliter les déplacements ?',
        type: 'multiple-choice',
        options: ['Des avions', 'Des routes pavées', 'Des trains', 'Des bateaux à moteur'],
        correctAnswer: 'Des routes pavées',
        explanation: 'Les Romains ont construit un immense réseau de routes pavées très solides. Ces voies romaines permettaient de déplacer rapidement les armées et de faire du commerce. Beaucoup de nos routes actuelles suivent encore leur tracé !',
        hints: ['Ces voies existent encore aujourd\'hui', 'Elles étaient faites de pierres']
      },
      {
        id: 'q9',
        question: 'Les thermes romains étaient des établissements de bains publics.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les thermes étaient des bains publics où les Romains venaient se laver, se détendre, faire du sport et discuter. C\'étaient des lieux de rencontre très importants dans la vie quotidienne romaine.',
        hints: ['C\'était un lieu de bain et de détente', 'On y allait pour se laver']
      },
      {
        id: 'q10',
        question: 'Quelle langue parlaient les Romains, qui a donné naissance au français ?',
        type: 'multiple-choice',
        options: ['Le grec', 'Le latin', 'L\'anglais', 'L\'allemand'],
        correctAnswer: 'Le latin',
        explanation: 'Les Romains parlaient le latin. Cette langue s\'est répandue dans tout l\'Empire romain et a évolué pour donner naissance au français, à l\'espagnol, à l\'italien, au portugais et au roumain.',
        hints: ['C\'est une langue ancienne', 'Le français en descend']
      }
    ]
  },

  {
    id: 'histoire-geo-cm1-003',
    title: 'Les continents et les océans',
    subject: 'histoire-geo',
    level: 'CM1',
    difficulty: 3,
    description: 'Apprends à reconnaître et situer les 6 continents et les 5 océans sur un planisphère.',
    estimatedTime: 15,
    skills: ['Connaître les 6 continents', 'Connaître les 5 océans', 'Savoir situer les continents et océans'],
    questions: [
      {
        id: 'q1',
        question: 'Combien y a-t-il de continents sur Terre ?',
        type: 'multiple-choice',
        options: ['4 continents', '5 continents', '6 continents', '7 continents'],
        correctAnswer: '6 continents',
        explanation: 'Il y a 6 continents sur Terre : l\'Europe, l\'Asie, l\'Afrique, l\'Amérique (Nord et Sud), l\'Océanie et l\'Antarctique. Certains comptent l\'Amérique du Nord et l\'Amérique du Sud séparément (7 continents).',
        hints: ['Compte : Europe, Asie, Afrique, Amérique, Océanie, Antarctique', 'C\'est plus de 5']
      },
      {
        id: 'q2',
        question: 'Sur quel continent se trouve la France ?',
        type: 'multiple-choice',
        options: ['L\'Asie', 'L\'Afrique', 'L\'Europe', 'L\'Amérique'],
        correctAnswer: 'L\'Europe',
        explanation: 'La France se trouve sur le continent européen. L\'Europe est un continent situé à l\'ouest de l\'Asie, bordé par l\'océan Atlantique à l\'ouest et la mer Méditerranée au sud.',
        hints: ['C\'est le continent où nous habitons', 'Paris est la capitale']
      },
      {
        id: 'q3',
        question: 'L\'océan Atlantique sépare l\'Europe de l\'Amérique.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'océan Atlantique est situé entre l\'Europe et l\'Afrique à l\'est, et l\'Amérique à l\'ouest. C\'est le deuxième plus grand océan du monde après l\'océan Pacifique.',
        hints: ['C\'est un grand océan entre deux continents', 'Christophe Colomb l\'a traversé']
      },
      {
        id: 'q4',
        question: 'Quel est le plus grand continent du monde ?',
        type: 'multiple-choice',
        options: ['L\'Afrique', 'L\'Amérique', 'L\'Asie', 'L\'Europe'],
        correctAnswer: 'L\'Asie',
        explanation: 'L\'Asie est le plus grand continent du monde. Il couvre environ 30% des terres émergées et abrite plus de 4 milliards d\'habitants. On y trouve des pays comme la Chine, l\'Inde, le Japon et la Russie (en partie).',
        hints: ['C\'est le continent le plus peuplé', 'La Chine et l\'Inde s\'y trouvent']
      },
      {
        id: 'q5',
        question: 'Combien y a-t-il d\'océans sur Terre ?',
        type: 'multiple-choice',
        options: ['3 océans', '4 océans', '5 océans', '6 océans'],
        correctAnswer: '5 océans',
        explanation: 'Il y a 5 océans sur Terre : l\'océan Pacifique (le plus grand), l\'océan Atlantique, l\'océan Indien, l\'océan Arctique (au nord) et l\'océan Antarctique (au sud).',
        hints: ['Pacifique, Atlantique, Indien, Arctique, Antarctique', 'C\'est un chiffre impair']
      },
      {
        id: 'q6',
        question: 'L\'Antarctique est un continent recouvert de glace au pôle Sud.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'Antarctique est le continent le plus froid et le plus sec de la Terre. Il est situé au pôle Sud et presque entièrement recouvert de glace. Seuls des scientifiques y vivent temporairement.',
        hints: ['C\'est le continent du pôle Sud', 'Il fait très froid là-bas']
      },
      {
        id: 'q7',
        question: 'Quel est le plus grand océan du monde ? Écris son nom en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'pacifique',
        explanation: 'L\'océan Pacifique est le plus grand et le plus profond océan du monde. Il couvre environ un tiers de la surface de la Terre. Son nom signifie "paisible" car le navigateur Magellan l\'a trouvé calme lors de sa traversée.',
        hints: ['Son nom signifie "paisible"', 'Il sépare l\'Asie de l\'Amérique']
      },
      {
        id: 'q8',
        question: 'Sur quel continent se trouvent les pyramides d\'Égypte ?',
        type: 'multiple-choice',
        options: ['L\'Asie', 'L\'Europe', 'L\'Afrique', 'L\'Amérique'],
        correctAnswer: 'L\'Afrique',
        explanation: 'Les pyramides d\'Égypte se trouvent en Afrique, dans le nord-est du continent. L\'Afrique est le deuxième plus grand continent du monde et abrite de nombreuses merveilles, dont les pyramides et le désert du Sahara.',
        hints: ['L\'Égypte est un pays africain', 'C\'est le continent au sud de l\'Europe']
      },
      {
        id: 'q9',
        question: 'L\'Océanie comprend l\'Australie et des milliers d\'îles du Pacifique.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'Océanie est un continent composé de l\'Australie (le plus grand pays), de la Nouvelle-Zélande et de milliers d\'îles dispersées dans l\'océan Pacifique, comme Tahiti et la Nouvelle-Calédonie.',
        hints: ['L\'Australie en fait partie', 'Il y a beaucoup d\'îles']
      },
      {
        id: 'q10',
        question: 'Comment s\'appelle l\'océan situé entre l\'Afrique et l\'Australie ?',
        type: 'multiple-choice',
        options: ['L\'océan Atlantique', 'L\'océan Pacifique', 'L\'océan Indien', 'L\'océan Arctique'],
        correctAnswer: 'L\'océan Indien',
        explanation: 'L\'océan Indien est situé entre l\'Afrique à l\'ouest, l\'Asie au nord et l\'Australie à l\'est. Il tire son nom de l\'Inde, le grand pays qui borde ses côtes au nord.',
        hints: ['Il porte le nom d\'un grand pays d\'Asie', 'L\'Inde borde cet océan']
      }
    ]
  },

  // ==================== CM1 - MATHÉMATIQUES ====================

  {
    id: 'math-cm1-001',
    title: 'Les nombres décimaux',
    subject: 'maths',
    level: 'CM1',
    difficulty: 3,
    description: 'Apprends à lire, écrire et comparer les nombres décimaux. Tu vas découvrir la partie entière et la partie décimale des nombres.',
    estimatedTime: 15,
    skills: ['Nombres décimaux', 'Comparaison', 'Lecture et écriture des nombres'],
    questions: [
      {
        id: 'q1',
        question: 'Comment lit-on le nombre 12,5 ?',
        type: 'multiple-choice',
        options: ['Douze virgule cinq', 'Douze et cinq dixièmes', 'Douze et demi', 'Toutes ces réponses sont correctes'],
        correctAnswer: 'Toutes ces réponses sont correctes',
        explanation: 'Le nombre 12,5 peut se lire de plusieurs façons : "douze virgule cinq", "douze et cinq dixièmes" ou "douze et demi". Toutes ces lectures sont correctes !',
        hints: ['Pense aux différentes façons de dire un nombre avec une virgule', 'Le 5 après la virgule représente 5 dixièmes']
      },
      {
        id: 'q2',
        question: 'Dans le nombre 45,87, quel est le chiffre des dixièmes ?',
        type: 'multiple-choice',
        options: ['4', '5', '8', '7'],
        correctAnswer: '8',
        explanation: 'Dans 45,87, le 4 est le chiffre des dizaines, le 5 celui des unités, le 8 celui des dixièmes et le 7 celui des centièmes. Le premier chiffre après la virgule est toujours le chiffre des dixièmes.',
        hints: ['Le chiffre des dixièmes est le premier chiffre après la virgule', 'Regarde juste après la virgule']
      },
      {
        id: 'q3',
        question: 'Quel nombre est le plus grand : 7,8 ou 7,12 ?',
        type: 'multiple-choice',
        options: ['7,8', '7,12', 'Ils sont égaux', 'On ne peut pas comparer'],
        correctAnswer: '7,8',
        explanation: '7,8 est plus grand que 7,12. Pour comparer des nombres décimaux, on compare d\'abord les parties entières (7 = 7), puis les dixièmes : 8 dixièmes est plus grand que 1 dixième. On peut aussi voir que 7,8 = 7,80 et 80 centièmes > 12 centièmes.',
        hints: ['Compare d\'abord les parties entières, puis les dixièmes', '7,8 c\'est comme 7,80']
      },
      {
        id: 'q4',
        question: 'Le nombre 3,25 est égal à 325 centièmes.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! 3,25 = 3 unités + 2 dixièmes + 5 centièmes = 3 unités + 25 centièmes = 300 centièmes + 25 centièmes = 325 centièmes.',
        hints: ['Transforme tout en centièmes', '3 unités = 300 centièmes']
      },
      {
        id: 'q5',
        question: 'Combien y a-t-il de dixièmes dans 2 unités ? Écris le nombre sans espace.',
        type: 'fill-blank',
        correctAnswer: '20',
        explanation: '1 unité = 10 dixièmes, donc 2 unités = 2 × 10 = 20 dixièmes. C\'est comme découper 2 gâteaux en 10 parts chacun : tu obtiens 20 parts !',
        hints: ['1 unité = 10 dixièmes', 'Multiplie par 10']
      },
      {
        id: 'q6',
        question: 'Range ces nombres du plus petit au plus grand : 5,3 / 5,03 / 5,33',
        type: 'multiple-choice',
        options: ['5,03 < 5,3 < 5,33', '5,3 < 5,03 < 5,33', '5,03 < 5,33 < 5,3', '5,33 < 5,3 < 5,03'],
        correctAnswer: '5,03 < 5,3 < 5,33',
        explanation: 'Pour comparer : 5,03 a 0 dixièmes (3 centièmes), 5,3 a 3 dixièmes (30 centièmes), 5,33 a 3 dixièmes et 3 centièmes (33 centièmes). Donc 5,03 < 5,30 < 5,33.',
        hints: ['Compare les dixièmes en premier', '5,3 c\'est comme 5,30']
      },
      {
        id: 'q7',
        question: 'Sur une droite graduée, 4,5 se trouve exactement au milieu entre 4 et 5.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! 4,5 = 4 + 0,5 = 4 + 5/10 = 4 + 1/2. C\'est donc exactement la moitié du chemin entre 4 et 5.',
        hints: ['0,5 c\'est un demi', 'Pense à la moitié']
      },
      {
        id: 'q8',
        question: 'Quel nombre est égal à 6 unités et 4 centièmes ?',
        type: 'multiple-choice',
        options: ['6,4', '6,04', '6,40', '64'],
        correctAnswer: '6,04',
        explanation: '6 unités et 4 centièmes s\'écrit 6,04. Attention : il y a 0 dixième et 4 centièmes. 6,4 serait 6 unités et 4 dixièmes (40 centièmes).',
        hints: ['Le chiffre des centièmes est en deuxième position après la virgule', 'Il n\'y a pas de dixièmes']
      },
      {
        id: 'q9',
        question: 'Léa a 8,75 € et Tom a 8,8 €. Qui a le plus d\'argent ?',
        type: 'multiple-choice',
        options: ['Léa', 'Tom', 'Ils ont la même somme', 'On ne peut pas savoir'],
        correctAnswer: 'Tom',
        explanation: 'Tom a plus d\'argent. 8,8 € = 8,80 € et 8,80 € > 8,75 €. En comparant les centièmes : 80 centièmes > 75 centièmes, donc Tom a 5 centimes de plus que Léa.',
        hints: ['8,8 c\'est comme 8,80', 'Compare les centièmes : 80 et 75']
      },
      {
        id: 'q10',
        question: 'Un nombre décimal a toujours une virgule.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Faux',
        explanation: 'C\'est faux ! Les nombres entiers comme 5, 12 ou 100 sont aussi des nombres décimaux. On pourrait les écrire 5,0 ou 12,00 mais on ne met pas la virgule quand il n\'y a que des zéros après.',
        hints: ['Pense aux nombres entiers', '5 est aussi un nombre décimal']
      }
    ]
  },

  {
    id: 'math-cm1-multiplication',
    title: 'La multiplication posée',
    subject: 'maths',
    level: 'CM1',
    difficulty: 3,
    description: 'Maîtrise la technique de la multiplication posée avec des nombres à 2 et 3 chiffres. Tu vas apprendre à poser correctement les opérations et à résoudre des problèmes.',
    estimatedTime: 15,
    skills: ['Multiplication', 'Technique opératoire', 'Résolution de problèmes'],
    questions: [
      {
        id: 'q1',
        question: 'Calcule : 25 × 4. Écris ta réponse en chiffres.',
        type: 'fill-blank',
        correctAnswer: '100',
        explanation: '25 × 4 = 100. On peut calculer : 4 × 5 = 20 (on pose 0 et on retient 2), puis 4 × 2 = 8, plus la retenue 2 = 10. Résultat : 100. On peut aussi penser que 25 × 4 = 25 + 25 + 25 + 25.',
        hints: ['Commence par multiplier 4 × 5', 'Pense aux retenues']
      },
      {
        id: 'q2',
        question: 'Dans la multiplication 37 × 6, par quel chiffre commence-t-on ?',
        type: 'multiple-choice',
        options: ['Par le 3', 'Par le 7', 'Par le 6', 'Peu importe'],
        correctAnswer: 'Par le 7',
        explanation: 'On commence toujours par multiplier le chiffre des unités du premier nombre (7) par le multiplicateur (6). Donc 6 × 7 = 42, on pose 2 et on retient 4. Ensuite 6 × 3 = 18, plus la retenue 4 = 22.',
        hints: ['On commence par les unités', 'Regarde le chiffre le plus à droite']
      },
      {
        id: 'q3',
        question: 'Quand on multiplie un nombre par 10, on ajoute toujours un zéro à droite.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! Multiplier par 10, c\'est décaler tous les chiffres d\'un rang vers la gauche, ce qui revient à ajouter un zéro à droite. Par exemple : 23 × 10 = 230, 145 × 10 = 1450.',
        hints: ['Pense à 5 × 10', 'Les chiffres se décalent vers la gauche']
      },
      {
        id: 'q4',
        question: 'Calcule : 123 × 3. Écris ta réponse en chiffres.',
        type: 'fill-blank',
        correctAnswer: '369',
        explanation: '123 × 3 = 369. Étapes : 3 × 3 = 9 (on pose 9), 3 × 2 = 6 (on pose 6), 3 × 1 = 3 (on pose 3). Résultat : 369.',
        hints: ['Multiplie chaque chiffre par 3 en commençant par la droite', 'Il n\'y a pas de retenue dans ce calcul']
      },
      {
        id: 'q5',
        question: 'Une boîte contient 24 chocolats. Combien y a-t-il de chocolats dans 5 boîtes ?',
        type: 'multiple-choice',
        options: ['100 chocolats', '110 chocolats', '120 chocolats', '125 chocolats'],
        correctAnswer: '120 chocolats',
        explanation: 'Il faut calculer 24 × 5 = 120. On fait : 5 × 4 = 20 (on pose 0, retenue 2), puis 5 × 2 = 10, plus la retenue 2 = 12. Il y a donc 120 chocolats dans 5 boîtes.',
        hints: ['Calcule 24 × 5', 'N\'oublie pas les retenues']
      },
      {
        id: 'q6',
        question: 'Le résultat d\'une multiplication s\'appelle le produit.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! Dans une multiplication, les nombres qu\'on multiplie s\'appellent les facteurs et le résultat s\'appelle le produit. Par exemple, dans 5 × 7 = 35, le produit est 35.',
        hints: ['Pense au vocabulaire mathématique', 'Le résultat d\'une addition est une somme']
      },
      {
        id: 'q7',
        question: 'Quel est le résultat de 45 × 20 ?',
        type: 'multiple-choice',
        options: ['90', '450', '900', '9000'],
        correctAnswer: '900',
        explanation: '45 × 20 = 900. On peut calculer 45 × 2 = 90, puis multiplier par 10 en ajoutant un zéro : 90 × 10 = 900. Ou bien faire 45 × 20 directement : on pose un 0, puis on multiplie 45 × 2 = 90.',
        hints: ['45 × 2 = 90, puis multiplie par 10', 'Quand on multiplie par 20, on multiplie par 2 puis par 10']
      },
      {
        id: 'q8',
        question: 'Dans une multiplication, si on change l\'ordre des facteurs, le résultat change.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Faux',
        explanation: 'C\'est faux ! Dans une multiplication, on peut changer l\'ordre des facteurs sans changer le résultat. Par exemple : 7 × 5 = 35 et 5 × 7 = 35. C\'est la propriété de commutativité.',
        hints: ['Essaie avec 3 × 4 et 4 × 3', 'C\'est la commutativité']
      },
      {
        id: 'q9',
        question: 'Un livre coûte 18 €. Madame Dupont achète 6 livres identiques. Combien dépense-t-elle ?',
        type: 'multiple-choice',
        options: ['98 €', '102 €', '108 €', '118 €'],
        correctAnswer: '108 €',
        explanation: 'Elle dépense 18 € × 6 = 108 €. Calcul : 6 × 8 = 48 (on pose 8, retenue 4), puis 6 × 1 = 6, plus la retenue 4 = 10. Résultat : 108 €.',
        hints: ['Calcule 18 × 6', 'Attention à la retenue de 4']
      },
      {
        id: 'q10',
        question: 'Calcule : 52 × 7. Écris ta réponse en chiffres.',
        type: 'fill-blank',
        correctAnswer: '364',
        explanation: '52 × 7 = 364. Étapes : 7 × 2 = 14 (on pose 4 et on retient 1), puis 7 × 5 = 35, plus la retenue 1 = 36. On pose 36. Résultat : 364.',
        hints: ['Commence par 7 × 2', 'N\'oublie pas d\'ajouter la retenue à 7 × 5']
      }
    ]
  },

  {
    id: 'math-cm1-mesures',
    title: 'Les mesures de longueur et conversions',
    subject: 'maths',
    level: 'CM1',
    difficulty: 3,
    description: 'Découvre les unités de mesure de longueur (km, m, cm, mm) et apprends à convertir d\'une unité à l\'autre. Tu vas aussi résoudre des problèmes concrets.',
    estimatedTime: 15,
    skills: ['Mesures de longueur', 'Conversions', 'Unités de mesure'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle est l\'unité la plus adaptée pour mesurer la longueur d\'un crayon ?',
        type: 'multiple-choice',
        options: ['Le kilomètre (km)', 'Le mètre (m)', 'Le centimètre (cm)', 'Le millimètre (mm)'],
        correctAnswer: 'Le centimètre (cm)',
        explanation: 'Le centimètre est l\'unité la plus adaptée pour mesurer un crayon (environ 17 cm). Le kilomètre est pour les grandes distances, le mètre pour des objets plus grands, et le millimètre serait trop petit comme unité principale.',
        hints: ['Un crayon mesure environ 17...', 'Pense à la taille d\'un crayon']
      },
      {
        id: 'q2',
        question: 'Combien y a-t-il de centimètres dans 1 mètre ? Écris le nombre sans espace.',
        type: 'fill-blank',
        correctAnswer: '100',
        explanation: '1 mètre = 100 centimètres. Le préfixe "centi" signifie centième, donc 1 cm = 1/100 de mètre, et il faut 100 cm pour faire 1 m.',
        hints: ['Le préfixe "centi" signifie centième', 'Pense à 1 euro = 100 centimes']
      },
      {
        id: 'q3',
        question: '1 km = 1000 m.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est vrai ! 1 kilomètre = 1000 mètres. Le préfixe "kilo" signifie mille. Par exemple, la distance entre deux villes se mesure en kilomètres.',
        hints: ['Le préfixe "kilo" signifie mille', 'Pense à 1 kg = 1000 g']
      },
      {
        id: 'q4',
        question: 'Convertis 3 m en cm. Écris ta réponse en chiffres.',
        type: 'fill-blank',
        correctAnswer: '300',
        explanation: '3 m = 300 cm. Pour convertir des mètres en centimètres, on multiplie par 100 : 3 × 100 = 300 cm.',
        hints: ['1 m = 100 cm', 'Multiplie 3 par 100']
      },
      {
        id: 'q5',
        question: 'Quelle distance est la plus longue ?',
        type: 'multiple-choice',
        options: ['500 cm', '5 m', '50 dm', 'Elles sont toutes égales'],
        correctAnswer: 'Elles sont toutes égales',
        explanation: 'Ces trois mesures sont égales ! 500 cm = 5 m = 50 dm. En effet : 5 m = 5 × 100 = 500 cm, et 5 m = 5 × 10 = 50 dm (1 m = 10 dm).',
        hints: ['Convertis tout en mètres ou en centimètres', '1 m = 100 cm et 1 m = 10 dm']
      },
      {
        id: 'q6',
        question: 'Combien y a-t-il de millimètres dans 1 centimètre ?',
        type: 'multiple-choice',
        options: ['5 mm', '10 mm', '100 mm', '1000 mm'],
        correctAnswer: '10 mm',
        explanation: '1 centimètre = 10 millimètres. C\'est facile à voir sur une règle graduée : entre chaque centimètre, il y a 10 petites graduations qui représentent les millimètres.',
        hints: ['Regarde ta règle graduée', 'Compte les petites graduations entre deux centimètres']
      },
      {
        id: 'q7',
        question: 'Pour convertir des kilomètres en mètres, on divise par 1000.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Faux',
        explanation: 'C\'est faux ! Pour convertir des kilomètres en mètres, on multiplie par 1000 (car 1 km = 1000 m). Par exemple : 2 km = 2 × 1000 = 2000 m. On diviserait par 1000 pour passer des mètres aux kilomètres.',
        hints: ['1 km = 1000 m, donc 2 km = ?', 'On va vers une unité plus petite, donc le nombre augmente']
      },
      {
        id: 'q8',
        question: 'Lucas mesure 1 m 35 cm. Quelle est sa taille en centimètres ?',
        type: 'multiple-choice',
        options: ['135 cm', '136 cm', '145 cm', '235 cm'],
        correctAnswer: '135 cm',
        explanation: 'Lucas mesure 135 cm. Il faut additionner : 1 m = 100 cm, plus 35 cm = 100 + 35 = 135 cm.',
        hints: ['1 m = 100 cm', 'Additionne 100 cm + 35 cm']
      },
      {
        id: 'q9',
        question: 'Une fourmi mesure 5 mm. Quelle est sa longueur en cm ?',
        type: 'multiple-choice',
        options: ['0,5 cm', '5 cm', '50 cm', '500 cm'],
        correctAnswer: '0,5 cm',
        explanation: '5 mm = 0,5 cm. Pour convertir des millimètres en centimètres, on divise par 10 (car 1 cm = 10 mm). Donc 5 ÷ 10 = 0,5 cm.',
        hints: ['1 cm = 10 mm', 'Divise 5 par 10']
      },
      {
        id: 'q10',
        question: 'Un terrain de foot mesure environ 100 m de long. Pour faire le tour complet du terrain (longueur et largeur de 50 m), un joueur parcourt environ quelle distance ?',
        type: 'multiple-choice',
        options: ['150 m', '200 m', '300 m', '500 m'],
        correctAnswer: '300 m',
        explanation: 'Pour faire le tour du terrain, il faut calculer le périmètre : 100 m + 50 m + 100 m + 50 m = 300 m. On additionne les 4 côtés du rectangle.',
        hints: ['Il faut parcourir 2 longueurs et 2 largeurs', 'Calcule : 100 + 50 + 100 + 50']
      }
    ]
  },

  {
    id: 'math-cm1-002',
    title: 'Les fractions simples',
    subject: 'maths',
    level: 'CM1',
    difficulty: 3,
    description: 'Comprendre 1/2, 1/3, 1/4...',
    estimatedTime: 18,
    skills: ['Fractions', 'Partage'],
    questions: [
      {
        id: 'q1',
        question: 'Si tu partages une pizza en 4 parts égales, quelle fraction représente 1 part ?',
        type: 'multiple-choice',
        options: ['1/2', '1/3', '1/4', '4/1'],
        correctAnswer: '1/4',
        explanation: '1 part sur 4 = 1/4 (un quart)',
        hints: ['On divise en 4 parts', '1 sur 4', 'C\'est 1/4']
      },
      {
        id: 'q2',
        question: 'Quelle fraction est plus grande : 1/2 ou 1/3 ?',
        type: 'multiple-choice',
        options: ['1/2', '1/3', 'Elles sont égales', 'On ne peut pas comparer'],
        correctAnswer: '1/2',
        explanation: '1/2 (la moitié) est plus grand que 1/3 (un tiers). Plus le dénominateur est grand, plus la part est petite !',
        hints: ['Imagine une pizza coupée en 2, puis en 3', 'La moitié est plus grosse qu\'un tiers']
      },
      {
        id: 'q3',
        question: 'Dans la fraction 3/4, le nombre du bas (4) s\'appelle :',
        type: 'multiple-choice',
        options: ['Le numérateur', 'Le dénominateur', 'Le diviseur', 'Le quotient'],
        correctAnswer: 'Le dénominateur',
        explanation: 'Le nombre du bas est le dénominateur. Le nombre du haut est le numérateur.',
        hints: ['En bas = dénominateur', 'En haut = numérateur']
      },
      {
        id: 'q4',
        question: 'Combien font 2/4 d\'une tarte de 8 parts ?',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: '2/4 de 8 = (8 ÷ 4) × 2 = 2 × 2 = 4 parts',
        hints: ['Divise 8 en 4', 'Puis prends 2 fois ce résultat', 'C\'est 4']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : 1/2 = 2/4',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 1/2 = 2/4 (un demi = deux quarts). Ce sont des fractions équivalentes.',
        hints: ['Simplifie 2/4', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'Si tu manges 3/8 d\'un gâteau, quelle fraction reste-t-il ?',
        type: 'fill-blank',
        correctAnswer: '5/8',
        explanation: '8/8 - 3/8 = 5/8. Il reste 5 parts sur 8.',
        hints: ['Le gâteau entier = 8/8', '8/8 - 3/8', 'C\'est 5/8']
      },
      {
        id: 'q7',
        question: 'Quelle fraction représente la moitié ?',
        type: 'multiple-choice',
        options: ['1/3', '1/2', '2/3', '1/4'],
        correctAnswer: '1/2',
        explanation: 'La moitié = 1/2 (une part sur deux)',
        hints: ['Moitié = diviser en 2', 'C\'est 1/2']
      },
      {
        id: 'q8',
        question: 'Dans une classe de 20 élèves, 1/4 sont absents. Combien sont absents ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: '1/4 de 20 = 20 ÷ 4 = 5 élèves absents',
        hints: ['Divise 20 par 4', '20 ÷ 4', 'C\'est 5']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : 3/3 = 1',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 3/3 = 1 entier (toutes les parts)',
        hints: ['Toutes les parts = l\'entier', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Quelle fraction est la plus petite : 1/5 ou 1/10 ?',
        type: 'multiple-choice',
        options: ['1/5', '1/10', 'Elles sont égales'],
        correctAnswer: '1/10',
        explanation: '1/10 est plus petit que 1/5. Plus le dénominateur est grand, plus la fraction est petite.',
        hints: ['Plus de parts = parts plus petites', 'C\'est 1/10']
      }
    ]
  },

  {
    id: 'math-cm1-003',
    title: 'Les nombres décimaux',
    subject: 'maths',
    level: 'CM1',
    difficulty: 3,
    description: 'Découvre les nombres à virgule',
    estimatedTime: 18,
    skills: ['Décimaux', 'Virgule'],
    questions: [
      {
        id: 'q1',
        question: 'Dans le nombre 12,5 que représente le 5 ?',
        type: 'multiple-choice',
        options: ['5 unités', '5 dixièmes', '5 centièmes', '5 dizaines'],
        correctAnswer: '5 dixièmes',
        explanation: 'Après la virgule, le premier chiffre représente les dixièmes. 12,5 = 12 + 5/10',
        hints: ['C\'est après la virgule', 'Les dixièmes', '5 dixièmes']
      },
      {
        id: 'q2',
        question: 'Écris en chiffres : treize unités et quatre dixièmes',
        type: 'fill-blank',
        correctAnswer: '13.4',
        explanation: '13 unités et 4 dixièmes = 13,4',
        hints: ['13 virgule 4', 'C\'est 13,4']
      },
      {
        id: 'q3',
        question: 'Dans le nombre 25,38 que représente le 8 ?',
        type: 'multiple-choice',
        options: ['8 unités', '8 dixièmes', '8 centièmes', '8 dizaines'],
        correctAnswer: '8 centièmes',
        explanation: 'Le deuxième chiffre après la virgule représente les centièmes',
        hints: ['Après la virgule : dixièmes puis centièmes', 'C\'est 8 centièmes']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : 5,2 = 5 + 0,2',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 5,2 = 5 + 0,2 = 5 + 2/10',
        hints: ['Décompose le nombre', 'C\'est vrai']
      },
      {
        id: 'q5',
        question: 'Quel nombre est le plus grand : 7,8 ou 7,5 ?',
        type: 'multiple-choice',
        options: ['7,8', '7,5', 'Ils sont égaux'],
        correctAnswer: '7,8',
        explanation: '7,8 > 7,5 car 8 dixièmes > 5 dixièmes',
        hints: ['Compare les dixièmes', '8 > 5', 'C\'est 7,8']
      },
      {
        id: 'q6',
        question: 'Combien de dixièmes dans 1 unité ?',
        type: 'fill-blank',
        correctAnswer: '10',
        explanation: '1 unité = 10 dixièmes (1 = 10/10)',
        hints: ['Divise 1 en 10 parts', 'C\'est 10']
      },
      {
        id: 'q7',
        question: 'Écris 3/10 sous forme décimale',
        type: 'fill-blank',
        correctAnswer: '0.3',
        explanation: '3/10 = 0,3 (trois dixièmes)',
        hints: ['3 dixièmes', 'Zéro virgule 3', 'C\'est 0,3']
      },
      {
        id: 'q8',
        question: 'Range du plus petit au plus grand : 4,5  4,2  4,9. Quel est le plus petit ?',
        type: 'multiple-choice',
        options: ['4,5', '4,2', '4,9'],
        correctAnswer: '4,2',
        explanation: '4,2 < 4,5 < 4,9. Le plus petit est 4,2',
        hints: ['Compare les dixièmes', '2 < 5 < 9']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : 0,5 = 1/2',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 0,5 = 5/10 = 1/2 (la moitié)',
        hints: ['5 dixièmes = la moitié', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Dans le nombre 18,76, combien y a-t-il d\'unités ?',
        type: 'fill-blank',
        correctAnswer: '18',
        explanation: 'Avant la virgule, c\'est la partie entière : 18 unités',
        hints: ['Avant la virgule', 'C\'est 18']
      }
    ]
  },

  {
    id: 'math-cm1-004',
    title: 'Aires et périmètres',
    subject: 'maths',
    level: 'CM1',
    difficulty: 4,
    description: 'Calcule l\'aire et le périmètre de figures',
    estimatedTime: 20,
    skills: ['Géométrie', 'Aire', 'Périmètre'],
    questions: [
      {
        id: 'q1',
        question: 'Un carré a des côtés de 5 cm. Quel est son périmètre ?',
        type: 'fill-blank',
        correctAnswer: '20',
        explanation: 'Périmètre = 4 × côté = 4 × 5 = 20 cm',
        hints: ['Le périmètre = la somme des côtés', 'Un carré a 4 côtés égaux', '4 × 5']
      },
      {
        id: 'q2',
        question: 'Quelle est l\'aire d\'un carré de 6 cm de côté ?',
        type: 'fill-blank',
        correctAnswer: '36',
        explanation: 'Aire = côté × côté = 6 × 6 = 36 cm²',
        hints: ['Aire carré = côté × côté', '6 × 6', 'C\'est 36']
      },
      {
        id: 'q3',
        question: 'Un rectangle mesure 8 cm de long et 3 cm de large. Quel est son périmètre ?',
        type: 'multiple-choice',
        options: ['16 cm', '20 cm', '22 cm', '24 cm'],
        correctAnswer: '22 cm',
        explanation: 'Périmètre = 2 × (longueur + largeur) = 2 × (8 + 3) = 2 × 11 = 22 cm',
        hints: ['Additionne tous les côtés', '8 + 3 + 8 + 3', 'C\'est 22']
      },
      {
        id: 'q4',
        question: 'Quelle est l\'aire d\'un rectangle de 10 cm × 4 cm ?',
        type: 'fill-blank',
        correctAnswer: '40',
        explanation: 'Aire rectangle = longueur × largeur = 10 × 4 = 40 cm²',
        hints: ['Aire = L × l', '10 × 4', 'C\'est 40']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Le périmètre se mesure en cm²',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Le périmètre se mesure en cm (longueur). L\'aire se mesure en cm² (surface).',
        hints: ['Périmètre = longueur du contour', 'C\'est faux']
      },
      {
        id: 'q6',
        question: 'Un jardin carré a un périmètre de 40 m. Quelle est la longueur d\'un côté ?',
        type: 'fill-blank',
        correctAnswer: '10',
        explanation: 'Périmètre = 4 × côté, donc côté = 40 ÷ 4 = 10 m',
        hints: ['Divise par 4', '40 ÷ 4', 'C\'est 10']
      },
      {
        id: 'q7',
        question: 'Quelle figure a la plus grande aire : un carré de 5 cm de côté ou un rectangle de 6 cm × 4 cm ?',
        type: 'multiple-choice',
        options: ['Le carré', 'Le rectangle', 'Elles sont égales'],
        correctAnswer: 'Le carré',
        explanation: 'Carré : 5 × 5 = 25 cm². Rectangle : 6 × 4 = 24 cm². Le carré a une plus grande aire.',
        hints: ['Calcule les deux aires', '25 > 24']
      },
      {
        id: 'q8',
        question: 'Le périmètre d\'un rectangle est 30 cm. Sa longueur est 10 cm. Quelle est sa largeur ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: 'Périmètre = 2×(L+l) → 30 = 2×(10+l) → 15 = 10+l → l = 5 cm',
        hints: ['30 = 2 × (10 + largeur)', '15 = 10 + largeur', 'C\'est 5']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : Deux figures peuvent avoir le même périmètre mais des aires différentes',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Par exemple : carré 4×4 (périmètre 16, aire 16) et rectangle 6×2 (périmètre 16, aire 12)',
        hints: ['Teste avec un carré et un rectangle', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Un carré a une aire de 49 cm². Quel est son périmètre ?',
        type: 'fill-blank',
        correctAnswer: '28',
        explanation: 'Aire = 49 → côté = 7 cm (car 7×7=49). Périmètre = 4 × 7 = 28 cm',
        hints: ['Trouve d\'abord le côté', '7 × 7 = 49', 'Périmètre = 4 × 7']
      }
    ]
  },

  // ==================== CM2 - MATHÉMATIQUES ====================

  {
    id: 'math-cm2-001',
    title: 'Proportionnalité',
    subject: 'maths',
    level: 'CM2',
    difficulty: 4,
    description: 'Résous des problèmes de proportionnalité',
    estimatedTime: 20,
    skills: ['Proportionnalité', 'Tableaux'],
    questions: [
      {
        id: 'q1',
        question: 'Si 3 croissants coûtent 4,50€, combien coûtent 5 croissants ?',
        type: 'fill-blank',
        correctAnswer: '7.5',
        explanation: '1 croissant = 4,50 ÷ 3 = 1,50€. Donc 5 croissants = 5 × 1,50 = 7,50€',
        hints: ['Trouve d\'abord le prix d\'un croissant', '4,50 ÷ 3', 'Puis multiplie par 5']
      },
      {
        id: 'q2',
        question: 'Une voiture roule à 60 km/h. Quelle distance parcourt-elle en 3 heures ?',
        type: 'fill-blank',
        correctAnswer: '180',
        explanation: 'Distance = vitesse × temps = 60 × 3 = 180 km',
        hints: ['Multiplie la vitesse par le temps', '60 × 3', 'C\'est 180']
      },
      {
        id: 'q3',
        question: 'Pour 4 personnes, il faut 200g de farine. Combien en faut-il pour 6 personnes ?',
        type: 'multiple-choice',
        options: ['250g', '300g', '350g', '400g'],
        correctAnswer: '300g',
        explanation: '1 personne = 200 ÷ 4 = 50g. Pour 6 personnes : 50 × 6 = 300g',
        hints: ['Trouve pour 1 personne', 'Puis multiplie par 6']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : Dans un tableau de proportionnalité, on multiplie toujours par le même nombre',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! C\'est le coefficient de proportionnalité qui reste constant',
        hints: ['C\'est la définition de la proportionnalité', 'C\'est vrai']
      },
      {
        id: 'q5',
        question: 'Si 2 kg de pommes coûtent 5€, combien coûte 1 kg ?',
        type: 'fill-blank',
        correctAnswer: '2.5',
        explanation: '1 kg = 5 ÷ 2 = 2,50€',
        hints: ['Divise par 2', '5 ÷ 2', 'C\'est 2,50']
      },
      {
        id: 'q6',
        question: 'Un robinet remplit 15 litres en 5 minutes. Combien de litres en 8 minutes ?',
        type: 'fill-blank',
        correctAnswer: '24',
        explanation: '1 minute = 15 ÷ 5 = 3 litres. En 8 minutes : 3 × 8 = 24 litres',
        hints: ['Trouve le débit par minute', '15 ÷ 5 = 3', 'Puis 3 × 8']
      },
      {
        id: 'q7',
        question: '5 cahiers coûtent 12,50€. Combien coûtent 3 cahiers ?',
        type: 'multiple-choice',
        options: ['6€', '6,50€', '7€', '7,50€'],
        correctAnswer: '7,50€',
        explanation: '1 cahier = 12,50 ÷ 5 = 2,50€. 3 cahiers = 2,50 × 3 = 7,50€',
        hints: ['Prix d\'un cahier d\'abord', '12,50 ÷ 5', 'Puis × 3']
      },
      {
        id: 'q8',
        question: 'En 4 jours, un ouvrier gagne 360€. Combien gagne-t-il en 10 jours ?',
        type: 'fill-blank',
        correctAnswer: '900',
        explanation: '1 jour = 360 ÷ 4 = 90€. En 10 jours : 90 × 10 = 900€',
        hints: ['Salaire par jour', '360 ÷ 4', 'Puis × 10']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : Si on double une quantité, le prix double aussi (proportionnalité)',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! C\'est une propriété de la proportionnalité',
        hints: ['2 fois plus = 2 fois le prix', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Pour faire 12 crêpes, il faut 3 œufs. Combien d\'œufs pour 20 crêpes ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: '12 crêpes = 3 œufs, donc 4 crêpes = 1 œuf. Pour 20 crêpes : 20 ÷ 4 = 5 œufs',
        hints: ['4 crêpes = 1 œuf', '20 ÷ 4', 'C\'est 5']
      }
    ]
  },

  {
    id: 'math-cm2-002',
    title: 'Pourcentages',
    subject: 'maths',
    level: 'CM2',
    difficulty: 4,
    description: 'Calcule des pourcentages simples',
    estimatedTime: 18,
    skills: ['Pourcentages', 'Calcul'],
    questions: [
      {
        id: 'q1',
        question: 'Combien font 50% de 80 ?',
        type: 'multiple-choice',
        options: ['20', '40', '60', '160'],
        correctAnswer: '40',
        explanation: '50% = la moitié. 50% de 80 = 80 ÷ 2 = 40',
        hints: ['50% = la moitié', 'Divise par 2', 'C\'est 40']
      },
      {
        id: 'q2',
        question: 'Combien font 25% de 100 ?',
        type: 'fill-blank',
        correctAnswer: '25',
        explanation: '25% de 100 = 100 × 25/100 = 25',
        hints: ['25% = un quart', 'Divise par 4', 'C\'est 25']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : 10% de 200 = 20',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 10% de 200 = 200 ÷ 10 = 20',
        hints: ['10% = divise par 10', 'C\'est vrai']
      },
      {
        id: 'q4',
        question: 'Dans une classe de 20 élèves, 75% ont réussi. Combien ont réussi ?',
        type: 'fill-blank',
        correctAnswer: '15',
        explanation: '75% de 20 = (20 × 75) ÷ 100 = 1500 ÷ 100 = 15 élèves',
        hints: ['75% = 3/4', '20 × 3/4', 'C\'est 15']
      },
      {
        id: 'q5',
        question: 'Combien font 20% de 50 ?',
        type: 'multiple-choice',
        options: ['5', '10', '15', '20'],
        correctAnswer: '10',
        explanation: '20% de 50 = 50 × 20/100 = 1000/100 = 10',
        hints: ['20% = 1/5', '50 ÷ 5', 'C\'est 10']
      },
      {
        id: 'q6',
        question: 'Un article à 60€ a une réduction de 10%. Quel est le nouveau prix ?',
        type: 'fill-blank',
        correctAnswer: '54',
        explanation: '10% de 60 = 6€. Prix final : 60 - 6 = 54€',
        hints: ['10% de 60 = 6', 'Soustrais la réduction', 'C\'est 54']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : 100% = le tout',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 100% représente la totalité, l\'entier',
        hints: ['100% = tout', 'C\'est vrai']
      },
      {
        id: 'q8',
        question: 'Combien font 5% de 200 ?',
        type: 'fill-blank',
        correctAnswer: '10',
        explanation: '5% de 200 = 200 × 5/100 = 1000/100 = 10',
        hints: ['5% = divise par 20', '200 ÷ 20', 'C\'est 10']
      },
      {
        id: 'q9',
        question: 'Dans un panier de 40 fruits, 30% sont des pommes. Combien de pommes ?',
        type: 'multiple-choice',
        options: ['8', '10', '12', '14'],
        correctAnswer: '12',
        explanation: '30% de 40 = (40 × 30) ÷ 100 = 1200 ÷ 100 = 12 pommes',
        hints: ['30% = 3/10', '40 × 3/10', 'C\'est 12']
      },
      {
        id: 'q10',
        question: 'Un prix de 80€ augmente de 25%. Quel est le nouveau prix ?',
        type: 'fill-blank',
        correctAnswer: '100',
        explanation: '25% de 80 = 20€. Prix final : 80 + 20 = 100€',
        hints: ['25% de 80 = 20', 'Ajoute l\'augmentation', 'C\'est 100']
      }
    ]
  },

  {
    id: 'math-cm2-003',
    title: 'Nombres premiers',
    subject: 'maths',
    level: 'CM2',
    difficulty: 4,
    description: 'Découvre les nombres premiers',
    estimatedTime: 18,
    skills: ['Nombres premiers', 'Divisibilité'],
    questions: [
      {
        id: 'q1',
        question: 'Parmi ces nombres, lequel est premier ?',
        type: 'multiple-choice',
        options: ['9', '11', '15', '21'],
        correctAnswer: '11',
        explanation: '11 est premier car il n\'est divisible que par 1 et par lui-même. 9 = 3×3, 15 = 3×5, 21 = 3×7',
        hints: ['Un nombre premier n\'a que 2 diviseurs', 'Teste les divisions', 'C\'est 11']
      },
      {
        id: 'q2',
        question: 'Vrai ou Faux : 2 est un nombre premier',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 2 est le seul nombre premier pair. Il n\'est divisible que par 1 et 2.',
        hints: ['Le seul pair premier', 'C\'est vrai']
      },
      {
        id: 'q3',
        question: 'Combien de diviseurs a un nombre premier ?',
        type: 'multiple-choice',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        explanation: 'Un nombre premier a exactement 2 diviseurs : 1 et lui-même',
        hints: ['C\'est la définition', 'C\'est 2']
      },
      {
        id: 'q4',
        question: 'Le nombre 1 est-il premier ?',
        type: 'multiple-choice',
        options: ['Oui', 'Non', 'Parfois', 'On ne sait pas'],
        correctAnswer: 'Non',
        explanation: 'Non, 1 n\'est pas premier. Un nombre premier doit avoir exactement 2 diviseurs, mais 1 n\'en a qu\'un seul.',
        hints: ['Il faut 2 diviseurs', '1 n\'en a qu\'un', 'Non']
      },
      {
        id: 'q5',
        question: 'Lequel de ces nombres est premier ?',
        type: 'multiple-choice',
        options: ['12', '14', '17', '18'],
        correctAnswer: '17',
        explanation: '17 est premier. 12 = 2×6, 14 = 2×7, 18 = 2×9',
        hints: ['Teste la divisibilité', 'C\'est 17']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : Tous les nombres impairs sont premiers',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Par exemple 9 est impair mais pas premier (9 = 3×3). 15 aussi (15 = 3×5).',
        hints: ['9 est impair mais pas premier', 'C\'est faux']
      },
      {
        id: 'q7',
        question: 'Quel est le plus petit nombre premier ?',
        type: 'fill-blank',
        correctAnswer: '2',
        explanation: 'Le plus petit nombre premier est 2',
        hints: ['C\'est un nombre pair', 'C\'est 2']
      },
      {
        id: 'q8',
        question: 'Parmi 7, 13, 19, 23, combien sont premiers ?',
        type: 'multiple-choice',
        options: ['1', '2', '3', '4'],
        correctAnswer: '4',
        explanation: 'Tous ces nombres sont premiers ! 7, 13, 19 et 23 ne sont divisibles que par 1 et eux-mêmes.',
        hints: ['Teste chacun', 'Tous le sont', 'C\'est 4']
      },
      {
        id: 'q9',
        question: 'Le nombre 25 est-il premier ?',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! 25 = 5 × 5, il n\'est pas premier',
        hints: ['25 = 5 × 5', 'C\'est faux']
      },
      {
        id: 'q10',
        question: 'Quel est le premier nombre premier après 10 ?',
        type: 'fill-blank',
        correctAnswer: '11',
        explanation: 'Après 10, le premier nombre premier est 11',
        hints: ['Juste après 10', 'C\'est 11']
      }
    ]
  },

  // ==================== 6ÈME - MATHÉMATIQUES ====================

  {
    id: 'math-6eme-001',
    title: 'Les fractions',
    subject: 'maths',
    level: '6ème',
    difficulty: 4,
    description: 'Maîtrise les fractions : simplification, comparaison, addition et soustraction de fractions.',
    estimatedTime: 20,
    skills: ['Fractions', 'Simplification', 'Calcul'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle fraction est équivalente à 2/4 ?',
        type: 'multiple-choice',
        options: ['1/2', '1/3', '2/3', '3/4'],
        correctAnswer: '1/2',
        explanation: '2/4 = 1/2 car on divise le numérateur et le dénominateur par 2.',
        hints: ['Cherche le diviseur commun', 'Divise 2 et 4 par 2']
      },
      {
        id: 'q2',
        question: 'Simplifie la fraction 12/18.',
        type: 'fill-blank',
        correctAnswer: '2/3',
        explanation: '12/18 = 2/3 car on divise 12 et 18 par 6 (leur PGCD).',
        hints: ['Cherche le plus grand diviseur commun', '12÷6=2, 18÷6=3']
      },
      {
        id: 'q3',
        question: 'Calcule : 1/4 + 2/4 = ?',
        type: 'multiple-choice',
        options: ['3/8', '3/4', '1/2', '2/4'],
        correctAnswer: '3/4',
        explanation: 'Même dénominateur : on additionne les numérateurs. 1/4 + 2/4 = 3/4.',
        hints: ['Même dénominateur', 'Additionne les numérateurs']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : 3/5 > 2/5',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Même dénominateur, on compare les numérateurs : 3 > 2.',
        hints: ['Compare les numérateurs', 'C\'est vrai']
      },
      {
        id: 'q5',
        question: 'Quelle est la fraction irréductible de 15/25 ?',
        type: 'fill-blank',
        correctAnswer: '3/5',
        explanation: '15/25 = 3/5 (on divise par 5). Une fraction irréductible ne peut plus être simplifiée.',
        hints: ['Divise par 5', '15÷5=3, 25÷5=5']
      },
      {
        id: 'q6',
        question: 'Calcule : 5/6 - 2/6 = ?',
        type: 'multiple-choice',
        options: ['3/6', '3/0', '7/6', '2/6'],
        correctAnswer: '3/6',
        explanation: '5/6 - 2/6 = 3/6 = 1/2 (simplifié).',
        hints: ['Même dénominateur', '5-2=3']
      },
      {
        id: 'q7',
        question: 'Pour additionner 1/3 et 1/4, quel dénominateur commun utiliser ?',
        type: 'multiple-choice',
        options: ['7', '12', '1', '3'],
        correctAnswer: '12',
        explanation: 'Le plus petit dénominateur commun de 3 et 4 est 12.',
        hints: ['PPCM de 3 et 4', '3×4=12']
      },
      {
        id: 'q8',
        question: 'Calcule : 1/3 + 1/4 = ?',
        type: 'fill-blank',
        correctAnswer: '7/12',
        explanation: '1/3 = 4/12 et 1/4 = 3/12. Donc 4/12 + 3/12 = 7/12.',
        hints: ['Dénominateur commun : 12', '4/12 + 3/12']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : 4/8 = 1/2',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 4/8 = 1/2 (on divise par 4).',
        hints: ['Simplifie', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Quelle fraction est la plus grande : 2/3 ou 3/4 ?',
        type: 'multiple-choice',
        options: ['2/3', '3/4', 'Elles sont égales', 'On ne peut pas comparer'],
        correctAnswer: '3/4',
        explanation: '2/3 = 8/12 et 3/4 = 9/12. Donc 3/4 > 2/3.',
        hints: ['Mets au même dénominateur', '9/12 > 8/12']
      }
    ]
  },

  {
    id: 'math-6eme-002',
    title: 'Les nombres relatifs',
    subject: 'maths',
    level: '6ème',
    difficulty: 4,
    description: 'Découvre les nombres positifs et négatifs : repérage, comparaison et opérations simples.',
    estimatedTime: 18,
    skills: ['Nombres relatifs', 'Positifs', 'Négatifs'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est l\'opposé de +5 ?',
        type: 'fill-blank',
        correctAnswer: '-5',
        explanation: 'L\'opposé d\'un nombre a le signe contraire. L\'opposé de +5 est -5.',
        hints: ['Change le signe', 'C\'est -5']
      },
      {
        id: 'q2',
        question: 'Quel nombre est le plus grand : -3 ou -7 ?',
        type: 'multiple-choice',
        options: ['-3', '-7', 'Ils sont égaux', '0'],
        correctAnswer: '-3',
        explanation: '-3 > -7 car -3 est plus proche de 0. Sur une droite graduée, -3 est à droite de -7.',
        hints: ['Plus proche de 0', '-3 est à droite de -7']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : -2 < 0',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Tous les nombres négatifs sont inférieurs à 0.',
        hints: ['Les négatifs sont sous zéro', 'C\'est vrai']
      },
      {
        id: 'q4',
        question: 'Calcule : (+3) + (-5) = ?',
        type: 'fill-blank',
        correctAnswer: '-2',
        explanation: '(+3) + (-5) = 3 - 5 = -2.',
        hints: ['3 - 5', 'C\'est -2']
      },
      {
        id: 'q5',
        question: 'Quel est le signe du résultat de (-4) × (-2) ?',
        type: 'multiple-choice',
        options: ['Positif (+)', 'Négatif (-)', 'Zéro', 'Ça dépend'],
        correctAnswer: 'Positif (+)',
        explanation: 'Moins × moins = plus. (-4) × (-2) = +8.',
        hints: ['Règle des signes', '- × - = +']
      },
      {
        id: 'q6',
        question: 'Range du plus petit au plus grand : -5, 2, -1, 0',
        type: 'multiple-choice',
        options: ['-5 < -1 < 0 < 2', '0 < -1 < -5 < 2', '-1 < -5 < 0 < 2', '2 < 0 < -1 < -5'],
        correctAnswer: '-5 < -1 < 0 < 2',
        explanation: 'Du plus petit au plus grand : -5, puis -1, puis 0, puis 2.',
        hints: ['Les négatifs sont avant 0', '-5 est le plus petit']
      },
      {
        id: 'q7',
        question: 'Calcule : (-8) + (+8) = ?',
        type: 'fill-blank',
        correctAnswer: '0',
        explanation: 'Un nombre et son opposé s\'annulent : (-8) + (+8) = 0.',
        hints: ['Opposés', 'Ils s\'annulent']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : (+3) × (-4) = -12',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Plus × moins = moins. 3 × 4 = 12, donc +3 × -4 = -12.',
        hints: ['+ × - = -', 'C\'est vrai']
      },
      {
        id: 'q9',
        question: 'Quelle est l\'abscisse du point situé à 4 unités à gauche de 0 ?',
        type: 'fill-blank',
        correctAnswer: '-4',
        explanation: 'À gauche de 0, les nombres sont négatifs. 4 unités à gauche = -4.',
        hints: ['À gauche = négatif', 'C\'est -4']
      },
      {
        id: 'q10',
        question: 'Calcule : (-6) - (-2) = ?',
        type: 'multiple-choice',
        options: ['-8', '-4', '+4', '+8'],
        correctAnswer: '-4',
        explanation: '(-6) - (-2) = -6 + 2 = -4. Soustraire un négatif = ajouter un positif.',
        hints: ['- (-2) = +2', '-6 + 2 = -4']
      }
    ]
  },

  {
    id: 'math-6eme-003',
    title: 'Périmètres et aires',
    subject: 'maths',
    level: '6ème',
    difficulty: 4,
    description: 'Calcule les périmètres et aires des figures planes : carré, rectangle, triangle et cercle.',
    estimatedTime: 20,
    skills: ['Géométrie', 'Périmètre', 'Aire'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle est la formule du périmètre d\'un rectangle ?',
        type: 'multiple-choice',
        options: ['P = L × l', 'P = 2 × (L + l)', 'P = L + l', 'P = 4 × côté'],
        correctAnswer: 'P = 2 × (L + l)',
        explanation: 'Le périmètre d\'un rectangle = 2 × (Longueur + largeur).',
        hints: ['On fait le tour', '2 longueurs + 2 largeurs']
      },
      {
        id: 'q2',
        question: 'Un carré a un côté de 5 cm. Quel est son aire ?',
        type: 'fill-blank',
        correctAnswer: '25',
        explanation: 'Aire du carré = côté² = 5² = 25 cm².',
        hints: ['côté × côté', '5 × 5']
      },
      {
        id: 'q3',
        question: 'Quelle est l\'aire d\'un rectangle de 8 cm sur 4 cm ?',
        type: 'multiple-choice',
        options: ['12 cm²', '24 cm²', '32 cm²', '64 cm²'],
        correctAnswer: '32 cm²',
        explanation: 'Aire = Longueur × largeur = 8 × 4 = 32 cm².',
        hints: ['L × l', '8 × 4']
      },
      {
        id: 'q4',
        question: 'Quelle est la formule de l\'aire d\'un triangle ?',
        type: 'multiple-choice',
        options: ['A = base × hauteur', 'A = (base × hauteur) / 2', 'A = 3 × côté', 'A = base + hauteur'],
        correctAnswer: 'A = (base × hauteur) / 2',
        explanation: 'L\'aire d\'un triangle = (base × hauteur) / 2.',
        hints: ['C\'est la moitié d\'un rectangle', 'On divise par 2']
      },
      {
        id: 'q5',
        question: 'Un triangle a une base de 10 cm et une hauteur de 6 cm. Quelle est son aire ?',
        type: 'fill-blank',
        correctAnswer: '30',
        explanation: 'Aire = (10 × 6) / 2 = 60 / 2 = 30 cm².',
        hints: ['(base × hauteur) / 2', '60 / 2']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : Le périmètre d\'un cercle s\'appelle la circonférence.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! La circonférence est le périmètre du cercle : C = 2 × π × r.',
        hints: ['Le tour du cercle', 'C\'est vrai']
      },
      {
        id: 'q7',
        question: 'Quelle est la formule de l\'aire d\'un disque ?',
        type: 'multiple-choice',
        options: ['A = 2 × π × r', 'A = π × r²', 'A = π × d', 'A = r²'],
        correctAnswer: 'A = π × r²',
        explanation: 'L\'aire d\'un disque = π × rayon².',
        hints: ['Avec π et le rayon', 'π × r²']
      },
      {
        id: 'q8',
        question: 'Un cercle a un rayon de 3 cm. Quelle est sa circonférence ? (utilise π ≈ 3,14)',
        type: 'fill-blank',
        correctAnswer: '18.84',
        explanation: 'C = 2 × π × r = 2 × 3,14 × 3 = 18,84 cm.',
        hints: ['2 × π × r', '2 × 3,14 × 3']
      },
      {
        id: 'q9',
        question: 'Quel est le périmètre d\'un carré de côté 7 cm ?',
        type: 'multiple-choice',
        options: ['14 cm', '28 cm', '49 cm', '7 cm'],
        correctAnswer: '28 cm',
        explanation: 'Périmètre = 4 × côté = 4 × 7 = 28 cm.',
        hints: ['4 côtés égaux', '4 × 7']
      },
      {
        id: 'q10',
        question: 'Quelle unité utilise-t-on pour mesurer une aire ?',
        type: 'multiple-choice',
        options: ['cm', 'cm²', 'cm³', 'm'],
        correctAnswer: 'cm²',
        explanation: 'L\'aire se mesure en unités carrées : cm², m², km²...',
        hints: ['C\'est une surface', 'Avec un ²']
      }
    ]
  },

  // ==================== CP - FRANÇAIS ====================

  {
    id: 'fr-cp-002',
    title: 'Les syllabes',
    subject: 'francais',
    level: 'CP',
    difficulty: 1,
    description: 'Découpe les mots en syllabes',
    estimatedTime: 16,
    skills: ['Syllabes', 'Phonologie'],
    questions: [
      {
        id: 'q1',
        question: 'Combien y a-t-il de syllabes dans le mot "CHOCOLAT" ?',
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        explanation: 'CHO-CO-LAT = 3 syllabes. Tape dans tes mains en disant le mot !',
        hints: ['Tape dans tes mains pour chaque syllabe', 'CHO-CO-LAT', 'C\'est 3']
      },
      {
        id: 'q2',
        question: 'Combien de syllabes dans "CHAT" ?',
        type: 'fill-blank',
        correctAnswer: '1',
        explanation: 'CHAT = 1 syllabe',
        hints: ['Dis le mot lentement', 'C\'est 1']
      },
      {
        id: 'q3',
        question: 'Combien de syllabes dans "Papa" ?',
        type: 'multiple-choice',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        explanation: 'PA-PA = 2 syllabes',
        hints: ['Tape dans tes mains', 'PA-PA', 'C\'est 2']
      },
      {
        id: 'q4',
        question: 'Combien de syllabes dans "BANANE" ?',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: 'BA-NA-NE = 3 syllabes',
        hints: ['BA-NA-NE', 'Compte bien', 'C\'est 3']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : "VÉLO" a 2 syllabes',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! VÉ-LO = 2 syllabes',
        hints: ['VÉ-LO', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'Quel mot a 2 syllabes ?',
        type: 'multiple-choice',
        options: ['CHAT', 'MAISON', 'CHOCOLAT', 'RUE'],
        correctAnswer: 'MAISON',
        explanation: 'MAI-SON = 2 syllabes. CHAT = 1, CHOCOLAT = 3, RUE = 1',
        hints: ['MAI-SON', 'Compte les syllabes']
      },
      {
        id: 'q7',
        question: 'Combien de syllabes dans "TOMATE" ?',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: 'TO-MA-TE = 3 syllabes',
        hints: ['TO-MA-TE', 'Tape dans tes mains', 'C\'est 3']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : "ÉCOLE" a 3 syllabes',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! É-COLE = 2 syllabes',
        hints: ['É-COLE', 'C\'est faux']
      },
      {
        id: 'q9',
        question: 'Combien de syllabes dans "ORDINATEUR" ?',
        type: 'multiple-choice',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        explanation: 'OR-DI-NA-TEUR = 4 syllabes. (Note : peut varier selon la prononciation, acceptons 4 aussi)',
        hints: ['OR-DI-NA-TEUR', 'Compte bien']
      },
      {
        id: 'q10',
        question: 'Quel mot a 1 seule syllabe ?',
        type: 'multiple-choice',
        options: ['PAIN', 'BÉBÉ', 'MOTO', 'PULL'],
        correctAnswer: 'PAIN',
        explanation: 'PAIN = 1 syllabe. BÉBÉ = 2, MOTO = 2, PULL = 1 (aussi acceptable)',
        hints: ['Le plus court', 'PAIN']
      }
    ]
  },

  {
    id: 'fr-cp-003',
    title: 'Les mots outils',
    subject: 'francais',
    level: 'CP',
    difficulty: 1,
    description: 'Apprends les petits mots : le, la, un, une...',
    estimatedTime: 16,
    skills: ['Mots outils', 'Lecture'],
    questions: [
      {
        id: 'q1',
        question: 'Quel mot complète : "Je vais ___ école" ?',
        type: 'multiple-choice',
        options: ['le', 'la', 'à l\'', 'au'],
        correctAnswer: 'à l\'',
        explanation: 'On dit "à l\'école" car "école" commence par une voyelle',
        hints: ['École commence par une voyelle', 'On dit "à l\'"']
      },
      {
        id: 'q2',
        question: 'Complète : "___ chat est noir"',
        type: 'multiple-choice',
        options: ['Le', 'La', 'Les', 'Un'],
        correctAnswer: 'Le',
        explanation: 'Le chat (masculin singulier)',
        hints: ['Chat est masculin', 'C\'est LE']
      },
      {
        id: 'q3',
        question: 'Complète : "J\'ai ___ pomme"',
        type: 'multiple-choice',
        options: ['un', 'une', 'des', 'le'],
        correctAnswer: 'une',
        explanation: 'Une pomme (féminin singulier)',
        hints: ['Pomme est féminin', 'C\'est UNE']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : On dit "le maison"',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! On dit "LA maison" (féminin)',
        hints: ['Maison est féminin', 'C\'est faux']
      },
      {
        id: 'q5',
        question: 'Complète : "___ chiens jouent"',
        type: 'multiple-choice',
        options: ['Le', 'La', 'Les', 'Un'],
        correctAnswer: 'Les',
        explanation: 'Les chiens (pluriel)',
        hints: ['Il y en a plusieurs', 'C\'est LES']
      },
      {
        id: 'q6',
        question: 'Complète : "Je vais ___ parc"',
        type: 'multiple-choice',
        options: ['à le', 'au', 'à la', 'aux'],
        correctAnswer: 'au',
        explanation: 'Au parc (à + le = au)',
        hints: ['à + le = au', 'C\'est AU']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : "des" est un mot outil',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "des" est un déterminant (mot outil)',
        hints: ['C\'est vrai']
      },
      {
        id: 'q8',
        question: 'Complète : "C\'est ___ livre"',
        type: 'multiple-choice',
        options: ['un', 'une', 'des', 'le'],
        correctAnswer: 'un',
        explanation: 'Un livre (masculin singulier)',
        hints: ['Livre est masculin', 'C\'est UN']
      },
      {
        id: 'q9',
        question: 'Complète : "Je mange ___ bonbons"',
        type: 'multiple-choice',
        options: ['le', 'la', 'un', 'des'],
        correctAnswer: 'des',
        explanation: 'Des bonbons (pluriel)',
        hints: ['Plusieurs bonbons', 'C\'est DES']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : On écrit "le arbre"',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! On dit "L\'arbre" car arbre commence par une voyelle',
        hints: ['Voyelle après', 'C\'est faux']
      }
    ]
  },

  {
    id: 'math-cp-006',
    title: 'Additions jusqu\'à 10',
    subject: 'maths',
    level: 'CP',
    difficulty: 1,
    description: 'Apprends à additionner jusqu\'à 10',
    estimatedTime: 18,
    skills: ['Addition', 'Calcul mental'],
    questions: [
      {
        id: 'q1',
        question: 'Combien font 3 + 2 ?',
        type: 'multiple-choice',
        options: ['4', '5', '6', '3'],
        correctAnswer: '5',
        explanation: 'Pour additionner 3 + 2, tu peux compter sur tes doigts : tu montres 3 doigts, puis tu ajoutes 2 doigts de plus. En tout, cela fait 5 doigts.',
        hints: ['Commence par compter jusqu\'à 3', 'Maintenant ajoute 2 de plus', '3, 4, 5 ! La réponse est 5']
      },
      {
        id: 'q2',
        question: 'Calcule : 4 + 3 = ?',
        type: 'fill-blank',
        correctAnswer: '7',
        explanation: '4 + 3 = 7. Tu pars de 4 et tu ajoutes 3 : quatre, cinq, six, sept !',
        hints: ['Pars du nombre 4', 'Ajoute 3 en comptant : 5, 6, 7', 'La réponse est 7']
      },
      {
        id: 'q3',
        question: 'Paul a 2 billes. Sa sœur lui en donne 5. Combien Paul a-t-il de billes maintenant ?',
        type: 'multiple-choice',
        options: ['5', '6', '7', '8'],
        correctAnswer: '7',
        explanation: 'Paul avait 2 billes et en reçoit 5 de plus. On fait l\'addition : 2 + 5 = 7 billes.',
        hints: ['Quelle opération dois-tu faire ?', 'Il faut additionner 2 + 5', '2 + 5 = 7 billes']
      },
      {
        id: 'q4',
        question: 'Complète : 5 + ___ = 8',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: 'Il manque 3 car 5 + 3 = 8. Pour trouver le nombre manquant, on cherche combien il faut ajouter à 5 pour arriver à 8.',
        hints: ['Compte de 5 jusqu\'à 8', '5, 6, 7, 8... Combien de nombres as-tu ajoutés ?', 'Tu as ajouté 3 nombres']
      },
      {
        id: 'q5',
        question: 'Combien font 2 + 1 ?',
        type: 'multiple-choice',
        options: ['1', '2', '3', '4'],
        correctAnswer: '3',
        explanation: '2 + 1 = 3. Si tu as 2 pommes et qu\'on t\'en donne 1, tu as 3 pommes en tout.',
        hints: ['Compte sur tes doigts : montre 2 doigts', 'Ajoute 1 doigt de plus', 'Combien de doigts en tout ?']
      },
      {
        id: 'q6',
        question: 'Calcule : 6 + 4 = ?',
        type: 'fill-blank',
        correctAnswer: '10',
        explanation: '6 + 4 = 10. C\'est un complément à 10 important à retenir : 6 et 4 font 10 !',
        hints: ['Combien manque-t-il à 6 pour faire 10 ?', '6 + 4 font une dizaine complète', 'La réponse est 10']
      },
      {
        id: 'q7',
        question: 'Dans un panier, il y a 3 pommes rouges et 4 pommes vertes. Combien y a-t-il de pommes en tout ?',
        type: 'multiple-choice',
        options: ['5', '6', '7', '8'],
        correctAnswer: '7',
        explanation: 'On additionne les pommes rouges et les pommes vertes : 3 + 4 = 7 pommes.',
        hints: ['Combien de pommes rouges ? 3', 'Combien de pommes vertes ? 4', 'Pour trouver le total : 3 + 4 = 7']
      },
      {
        id: 'q8',
        question: 'Combien font 5 + 5 ?',
        type: 'fill-blank',
        correctAnswer: '10',
        explanation: '5 + 5 = 10. C\'est un double ! Quand on additionne deux fois le même nombre, on appelle ça un double.',
        hints: ['C\'est le double de 5', '5 et encore 5, ça fait combien ?', 'La réponse est 10']
      },
      {
        id: 'q9',
        question: 'Combien font 6 + 0 ?',
        type: 'multiple-choice',
        options: ['0', '5', '6', '7'],
        correctAnswer: '6',
        explanation: '6 + 0 = 6. Quand on ajoute zéro à un nombre, le nombre ne change pas !',
        hints: ['Que se passe-t-il quand on ajoute zéro ?', 'Si tu as 6 bonbons et qu\'on ne t\'en donne aucun', 'La réponse est 6']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : 3 + 4 donne le même résultat que 4 + 3',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Dans une addition, on peut changer l\'ordre des nombres et le résultat reste le même. 3 + 4 = 7 et 4 + 3 = 7 aussi !',
        hints: ['Calcule 3 + 4', 'Maintenant calcule 4 + 3', 'Les deux résultats sont pareils !']
      }
    ]
  },

  {
    id: 'fr-cp-004',
    title: 'L\'alphabet et les voyelles',
    subject: 'francais',
    level: 'CP',
    difficulty: 1,
    description: 'Découvre les voyelles : A, E, I, O, U, Y',
    estimatedTime: 15,
    skills: ['Alphabet', 'Voyelles'],
    questions: [
      {
        id: 'q1',
        question: 'Quelles sont les voyelles dans l\'alphabet français ?',
        type: 'multiple-choice',
        options: ['A, E, I, O, U, Y', 'B, C, D, F, G', 'A, B, C, D, E', 'X, Y, Z'],
        correctAnswer: 'A, E, I, O, U, Y',
        explanation: 'Les voyelles de l\'alphabet français sont : A, E, I, O, U et Y. Toutes les autres lettres sont des consonnes.',
        hints: ['Les voyelles sont les lettres qu\'on peut chanter longtemps', 'Il y a 6 voyelles en français', 'Ce sont : A, E, I, O, U, Y']
      },
      {
        id: 'q2',
        question: 'Combien y a-t-il de voyelles dans l\'alphabet français ?',
        type: 'multiple-choice',
        options: ['4', '5', '6', '7'],
        correctAnswer: '6',
        explanation: 'Il y a 6 voyelles : A, E, I, O, U et Y.',
        hints: ['Compte : A, E, I, O, U...', 'N\'oublie pas le Y !', 'Il y en a 6 en tout']
      },
      {
        id: 'q3',
        question: 'La lettre A est-elle une voyelle ?',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui ! A est une voyelle. On peut la chanter : Aaaaaaa !',
        hints: ['Peux-tu chanter cette lettre longtemps ?', 'A fait partie des 6 voyelles', 'C\'est vrai']
      },
      {
        id: 'q4',
        question: 'Dans le mot CHAT, quelle est la voyelle ?',
        type: 'multiple-choice',
        options: ['C', 'H', 'A', 'T'],
        correctAnswer: 'A',
        explanation: 'Dans CHAT, la voyelle est A. Les lettres C, H et T sont des consonnes.',
        hints: ['Cherche parmi A, E, I, O, U, Y', 'Regarde bien les lettres : C-H-A-T', 'C\'est la lettre A !']
      },
      {
        id: 'q5',
        question: 'Quelle lettre vient juste après A dans l\'alphabet ?',
        type: 'multiple-choice',
        options: ['C', 'B', 'D', 'E'],
        correctAnswer: 'B',
        explanation: 'Dans l\'alphabet, B vient juste après A : A, B, C...',
        hints: ['Récite l\'alphabet : A, ..., C', 'Quelle lettre est entre A et C ?', 'C\'est la lettre B']
      },
      {
        id: 'q6',
        question: 'La lettre B est-elle une voyelle ?',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Non, B n\'est pas une voyelle, c\'est une consonne. Les voyelles sont : A, E, I, O, U, Y.',
        hints: ['B fait-elle partie de : A, E, I, O, U, Y ?', 'Non, donc B n\'est pas une voyelle', 'C\'est faux']
      },
      {
        id: 'q7',
        question: 'Combien y a-t-il de voyelles dans le mot TOMATE ?',
        type: 'multiple-choice',
        options: ['1', '2', '3', '4'],
        correctAnswer: '3',
        explanation: 'Dans TOMATE, il y a 3 voyelles : O, A et E. Les lettres T et M sont des consonnes.',
        hints: ['Cherche les lettres A, E, I, O, U, Y', 'Tu trouves : O, A, E', 'Ça fait 3 voyelles']
      },
      {
        id: 'q8',
        question: 'Quelle est la première lettre de l\'alphabet ?',
        type: 'multiple-choice',
        options: ['A', 'B', 'C', 'Z'],
        correctAnswer: 'A',
        explanation: 'La première lettre de l\'alphabet est A. L\'alphabet commence par A, B, C...',
        hints: ['Récite le début de l\'alphabet', 'C\'est la toute première lettre', 'C\'est la lettre A']
      },
      {
        id: 'q9',
        question: 'Dans le prénom LÉO, quelles sont les voyelles ?',
        type: 'multiple-choice',
        options: ['L seulement', 'É et O', 'L et O', 'Aucune'],
        correctAnswer: 'É et O',
        explanation: 'Dans LÉO, les voyelles sont É et O. La lettre L est une consonne.',
        hints: ['Cherche les voyelles : A, E, I, O, U, Y', 'É est une voyelle avec un accent', 'Les voyelles sont É et O']
      },
      {
        id: 'q10',
        question: 'Quelle est la dernière lettre de l\'alphabet ?',
        type: 'multiple-choice',
        options: ['X', 'Y', 'Z', 'W'],
        correctAnswer: 'Z',
        explanation: 'La dernière lettre de l\'alphabet est Z. L\'alphabet se termine par ...X, Y, Z.',
        hints: ['Récite la fin de l\'alphabet', 'Après Y, quelle est la dernière lettre ?', 'C\'est la lettre Z']
      }
    ]
  },

  {
    id: 'fr-cp-005',
    title: 'Les sons simples',
    subject: 'francais',
    level: 'CP',
    difficulty: 2,
    description: 'Reconnais les sons : [a], [i], [o], [u], [e]',
    estimatedTime: 20,
    skills: ['Phonologie', 'Sons'],
    questions: [
      {
        id: 'q1',
        question: 'Entends-tu le son [a] dans le mot CHAT ?',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui ! Dans CHAT, on entend le son [a] : CH-A-T.',
        hints: ['Dis le mot lentement : CH-A-T', 'Écoute bien au milieu du mot', 'On entend [a] !']
      },
      {
        id: 'q2',
        question: 'Dans quel mot entends-tu le son [i] ?',
        type: 'multiple-choice',
        options: ['CHAT', 'RIZ', 'BOL', 'MUR'],
        correctAnswer: 'RIZ',
        explanation: 'On entend le son [i] dans RIZ. Les autres mots n\'ont pas ce son.',
        hints: ['Prononce chaque mot à voix haute', 'Cherche où tu entends \'iii\'', 'C\'est dans le mot RIZ : R-I-Z']
      },
      {
        id: 'q3',
        question: 'Combien de fois entends-tu le son [o] dans MOTO ?',
        type: 'multiple-choice',
        options: ['0 fois', '1 fois', '2 fois', '3 fois'],
        correctAnswer: '2 fois',
        explanation: 'Dans MOTO, on entend le son [o] deux fois : M-O-T-O. Une fois dans chaque syllabe !',
        hints: ['Découpe le mot en syllabes : MO-TO', 'Compte les [o] : M-O... T-O', 'Il y en a 2 !']
      },
      {
        id: 'q4',
        question: 'Entends-tu le son [u] dans le mot LUNE ?',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui ! Dans LUNE, on entend le son [u] : L-U-NE.',
        hints: ['Prononce le mot : LU-NE', 'Écoute bien la première syllabe', 'On entend [u] !']
      },
      {
        id: 'q5',
        question: 'Dans quel mot entends-tu le son [e] ?',
        type: 'multiple-choice',
        options: ['SAC', 'NID', 'NÉ', 'RIZ'],
        correctAnswer: 'NÉ',
        explanation: 'On entend le son [e] dans NÉ. Le é se prononce [e] comme dans \'bébé\'.',
        hints: ['Cherche le son \'ééé\'', 'Le é (avec accent) fait le son [e]', 'C\'est dans NÉ']
      },
      {
        id: 'q6',
        question: 'Dans le mot SALADE, à quelle syllabe entends-tu le son [a] pour la première fois ?',
        type: 'multiple-choice',
        options: ['1ère syllabe', '2ème syllabe', '3ème syllabe', 'On ne l\'entend pas'],
        correctAnswer: '1ère syllabe',
        explanation: 'Dans SALADE (SA-LA-DE), on entend [a] dès la première syllabe : SA.',
        hints: ['Découpe le mot : SA-LA-DE', 'Cherche [a] dans la première syllabe', 'C\'est dans SA']
      },
      {
        id: 'q7',
        question: 'Entends-tu le son [i] dans le mot POMME ?',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Non, on n\'entend pas le son [i] dans POMME. On entend [o] et [e] : PO-MME.',
        hints: ['Prononce le mot : PO-MME', 'Cherches-tu le son \'iii\' ?', 'Non, il n\'y en a pas']
      },
      {
        id: 'q8',
        question: 'Quel son entends-tu au début du mot UNE ?',
        type: 'multiple-choice',
        options: ['[a]', '[i]', '[u]', '[o]'],
        correctAnswer: '[u]',
        explanation: 'Au début du mot UNE, on entend le son [u] : U-NE.',
        hints: ['Écoute la première lettre du mot', 'U-NE commence par...', 'C\'est le son [u] !']
      },
      {
        id: 'q9',
        question: 'Dans le mot ANIMAL, quels sons de voyelles entends-tu ?',
        type: 'multiple-choice',
        options: ['[a] seulement', '[i] seulement', '[a] et [i]', '[o] et [u]'],
        correctAnswer: '[a] et [i]',
        explanation: 'Dans ANIMAL (A-NI-MAL), on entend [a] au début, puis [i] au milieu, et encore [a] à la fin.',
        hints: ['Découpe : A-NI-MAL', 'Première syllabe : A = [a]', 'Deuxième syllabe : NI = [i]']
      },
      {
        id: 'q10',
        question: 'Quel son entends-tu dans le mot VÉLO ?',
        type: 'multiple-choice',
        options: ['[a]', '[i]', '[o]', '[u]'],
        correctAnswer: '[o]',
        explanation: 'Dans VÉLO (VÉ-LO), on entend le son [o] à la fin : L-O.',
        hints: ['Écoute la dernière syllabe : LO', 'Quel son fait la lettre O ?', 'C\'est le son [o] !']
      }
    ]
  },

  {
    id: 'math-cp-007',
    title: 'Compter de 0 à 20',
    subject: 'maths',
    level: 'CP',
    difficulty: 1,
    description: 'Apprends à compter et à écrire les nombres jusqu\'à 20',
    estimatedTime: 18,
    skills: ['Numération', 'Nombres'],
    questions: [
      {
        id: 'q1',
        question: 'Combien vaut le nombre TREIZE en chiffres ?',
        type: 'multiple-choice',
        options: ['3', '13', '30', '31'],
        correctAnswer: '13',
        explanation: 'TREIZE s\'écrit 13 en chiffres. C\'est le nombre qui vient après 12.',
        hints: ['TREIZE, c\'est 10 et encore 3', 'Ça s\'écrit avec un 1 et un 3', 'La réponse est 13']
      },
      {
        id: 'q2',
        question: 'Quel nombre vient juste après 8 ?',
        type: 'multiple-choice',
        options: ['7', '8', '9', '10'],
        correctAnswer: '9',
        explanation: 'Après 8 vient 9. Pour compter : 8, 9, 10...',
        hints: ['Continue à compter : 8, ..., 10', 'Quel nombre est entre 8 et 10 ?', 'C\'est 9 !']
      },
      {
        id: 'q3',
        question: 'Quel nombre vient juste avant 15 ?',
        type: 'fill-blank',
        correctAnswer: '14',
        explanation: 'Avant 15 vient 14. Pour compter à l\'envers : 15, 14, 13...',
        hints: ['Compte à l\'envers à partir de 15', '15, ..., 13', 'C\'est 14 !']
      },
      {
        id: 'q4',
        question: 'Quel est le plus grand nombre : 12 ou 17 ?',
        type: 'multiple-choice',
        options: ['12', '17', 'Ils sont égaux'],
        correctAnswer: '17',
        explanation: '17 est plus grand que 12. Quand on compte, 17 vient après 12.',
        hints: ['Lequel vient après quand tu comptes ?', '12, 13, 14, 15, 16, 17...', '17 est plus grand !']
      },
      {
        id: 'q5',
        question: 'Comment écrit-on le nombre 7 en lettres ?',
        type: 'multiple-choice',
        options: ['six', 'sept', 'huit', 'neuf'],
        correctAnswer: 'sept',
        explanation: 'Le nombre 7 s\'écrit SEPT en lettres.',
        hints: ['C\'est le nombre qui vient après 6 (six)', 'Ça commence par la lettre S', 'C\'est SEPT']
      },
      {
        id: 'q6',
        question: 'Tu as 10 doigts sur tes deux mains. Combien de doigts as-tu sur une seule main ?',
        type: 'multiple-choice',
        options: ['3', '5', '10', '20'],
        correctAnswer: '5',
        explanation: 'Sur une main, il y a 5 doigts. Sur deux mains, ça fait 10 doigts (5 + 5).',
        hints: ['Compte les doigts d\'une de tes mains', 'Le pouce, l\'index, le majeur, l\'annulaire, l\'auriculaire', 'Ça fait 5 doigts']
      },
      {
        id: 'q7',
        question: 'Range ces nombres du plus petit au plus grand : 9, 5, 12',
        type: 'multiple-choice',
        options: ['5, 9, 12', '12, 9, 5', '9, 5, 12', '5, 12, 9'],
        correctAnswer: '5, 9, 12',
        explanation: 'Dans l\'ordre croissant (du plus petit au plus grand) : 5, puis 9, puis 12.',
        hints: ['Quel est le plus petit ?', 'Ensuite vient 9', 'Le plus grand est 12']
      },
      {
        id: 'q8',
        question: 'Quel nombre se trouve entre 10 et 12 ?',
        type: 'fill-blank',
        correctAnswer: '11',
        explanation: 'Entre 10 et 12 se trouve 11. On compte : 10, 11, 12.',
        hints: ['Compte : 10, ..., 12', 'Quel nombre vient juste après 10 ?', 'C\'est 11 !']
      },
      {
        id: 'q9',
        question: 'Le nombre 15, c\'est 10 et combien ?',
        type: 'multiple-choice',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        explanation: '15 = 10 + 5. On décompose 15 en une dizaine (10) et 5 unités.',
        hints: ['10 + ? = 15', 'Combien faut-il ajouter à 10 pour faire 15 ?', 'Il faut ajouter 5']
      },
      {
        id: 'q10',
        question: 'Le nombre 8 est-il plus petit que 10 ?',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Oui, 8 est plus petit que 10. Quand on compte, 8 vient avant 10.',
        hints: ['Compte : 8, 9, 10', '8 vient avant 10', 'C\'est vrai !']
      },
      {
        id: 'q11',
        question: 'Comment écrit-on VINGT en chiffres ?',
        type: 'multiple-choice',
        options: ['2', '12', '20', '200'],
        correctAnswer: '20',
        explanation: 'VINGT s\'écrit 20 en chiffres. C\'est 2 dizaines, ou 10 + 10.',
        hints: ['VINGT = deux dizaines', 'Deux dizaines = 2 fois 10 = 20', 'La réponse est 20']
      },
      {
        id: 'q12',
        question: 'Combien y a-t-il d\'unités dans une dizaine ?',
        type: 'multiple-choice',
        options: ['1', '5', '10', '20'],
        correctAnswer: '10',
        explanation: 'Une dizaine = 10 unités. C\'est comme avoir 10 objets ensemble.',
        hints: ['Une dizaine, c\'est un groupe de combien ?', 'Compte tes 10 doigts', 'Une dizaine = 10']
      }
    ]
  },

  // ==================== CE1 - FRANÇAIS ====================

  {
    id: 'fr-ce1-002',
    title: 'Le pluriel des noms',
    subject: 'francais',
    level: 'CE1',
    difficulty: 2,
    description: 'Mets les mots au pluriel',
    estimatedTime: 18,
    skills: ['Pluriel', 'Orthographe'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est le pluriel de "cheval" ?',
        type: 'multiple-choice',
        options: ['chevals', 'cheveaux', 'chevaux', 'chevales'],
        correctAnswer: 'chevaux',
        explanation: 'Le pluriel de cheval est CHEVAUX (les mots en -al font -aux)',
        hints: ['Les mots en -al font -aux', 'Comme journal → journaux']
      },
      {
        id: 'q2',
        question: 'Comment écrit-on le pluriel de "jeu" ?',
        type: 'fill-blank',
        correctAnswer: 'jeux',
        explanation: 'JEU → JEUX au pluriel (les mots en -eu prennent un X)',
        hints: ['Les mots en -eu prennent un X', 'C\'est JEUX']
      },
      {
        id: 'q3',
        question: 'Quel est le pluriel de "chat" ?',
        type: 'fill-blank',
        correctAnswer: 'chats',
        explanation: 'CHAT → CHATS (on ajoute un S)',
        hints: ['Ajoute un S', 'C\'est CHATS']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : Le pluriel de "nez" est "nezs"',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! NEZ ne change pas au pluriel (les mots en -z restent identiques)',
        hints: ['Les mots en -z ne changent pas', 'C\'est faux']
      },
      {
        id: 'q5',
        question: 'Quel est le pluriel de "bateau" ?',
        type: 'multiple-choice',
        options: ['bateaus', 'bateaux', 'bateauxs', 'bateau'],
        correctAnswer: 'bateaux',
        explanation: 'BATEAU → BATEAUX (les mots en -eau prennent un X)',
        hints: ['Les mots en -eau prennent un X', 'C\'est BATEAUX']
      },
      {
        id: 'q6',
        question: 'Le pluriel de "hibou" est :',
        type: 'fill-blank',
        correctAnswer: 'hiboux',
        explanation: 'HIBOU → HIBOUX (exception, prend un X)',
        hints: ['Exception', 'Prend un X', 'C\'est HIBOUX']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : "maisons" est le pluriel de "maison"',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! MAISON → MAISONS (on ajoute un S)',
        hints: ['On ajoute un S', 'C\'est vrai']
      },
      {
        id: 'q8',
        question: 'Quel est le pluriel de "chou" ?',
        type: 'multiple-choice',
        options: ['chous', 'choux', 'chouxs', 'chou'],
        correctAnswer: 'choux',
        explanation: 'CHOU → CHOUX (exception, prend un X)',
        hints: ['Exception comme hibou', 'C\'est CHOUX']
      },
      {
        id: 'q9',
        question: 'Le pluriel de "journal" est :',
        type: 'fill-blank',
        correctAnswer: 'journaux',
        explanation: 'JOURNAL → JOURNAUX (les mots en -al font -aux)',
        hints: ['Les mots en -al font -aux', 'C\'est JOURNAUX']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : Le pluriel de "prix" est "prixs"',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! PRIX ne change pas au pluriel (les mots en -x restent identiques)',
        hints: ['Les mots en -x ne changent pas', 'C\'est faux']
      }
    ]
  },

  {
    id: 'fr-ce1-007',
    title: 'Les accents',
    subject: 'francais',
    level: 'CE1',
    difficulty: 2,
    description: 'É, È, Ê : les différents accents',
    estimatedTime: 12,
    skills: ['Accents', 'Orthographe'],
    questions: [
      {
        id: 'q1',
        question: 'Quel accent dans le mot "école" ?',
        type: 'multiple-choice',
        options: ['Accent aigu (é)', 'Accent grave (è)', 'Accent circonflexe (ê)', 'Pas d\'accent'],
        correctAnswer: 'Accent aigu (é)',
        explanation: 'École s\'écrit avec un accent aigu : É',
        hints: ['L\'accent monte vers la droite', 'C\'est é']
      },
      {
        id: 'q2',
        question: 'Quel accent dans le mot "fête" ?',
        type: 'multiple-choice',
        options: ['Accent aigu (é)', 'Accent grave (è)', 'Accent circonflexe (ê)', 'Pas d\'accent'],
        correctAnswer: 'Accent circonflexe (ê)',
        explanation: 'Fête s\'écrit avec un accent circonflexe : ê (comme un petit chapeau)',
        hints: ['C\'est comme un petit chapeau', 'C\'est ê']
      },
      {
        id: 'q3',
        question: 'Quel accent dans le mot "père" ?',
        type: 'multiple-choice',
        options: ['Accent aigu (é)', 'Accent grave (è)', 'Accent circonflexe (ê)', 'Pas d\'accent'],
        correctAnswer: 'Accent grave (è)',
        explanation: 'Père s\'écrit avec un accent grave : è',
        hints: ['L\'accent descend vers la gauche', 'C\'est è']
      },
      {
        id: 'q4',
        question: 'Comment s\'écrit le mot ? "un el_ve"',
        type: 'multiple-choice',
        options: ['éleve', 'elève', 'élève', 'eleve'],
        correctAnswer: 'élève',
        explanation: 'Élève s\'écrit avec é au début et è avant le v',
        hints: ['Il y a deux accents différents', 'é puis è']
      },
      {
        id: 'q5',
        question: 'Quel mot est bien écrit ?',
        type: 'multiple-choice',
        options: ['une étoile', 'une ètoile', 'une êtoile', 'une etoile'],
        correctAnswer: 'une étoile',
        explanation: 'Étoile s\'écrit avec un accent aigu : é',
        hints: ['Le son "é" au début', 'Accent aigu']
      },
      {
        id: 'q6',
        question: 'Quel accent dans le mot "forêt" ?',
        type: 'multiple-choice',
        options: ['Accent aigu (é)', 'Accent grave (è)', 'Accent circonflexe (ê)', 'Pas d\'accent'],
        correctAnswer: 'Accent circonflexe (ê)',
        explanation: 'Forêt s\'écrit avec un accent circonflexe : ê',
        hints: ['Comme un petit chapeau', 'C\'est ê']
      },
      {
        id: 'q7',
        question: 'Comment s\'écrit le mot ? "la t_te"',
        type: 'multiple-choice',
        options: ['téte', 'tète', 'tête', 'tete'],
        correctAnswer: 'tête',
        explanation: 'Tête s\'écrit avec un accent circonflexe : ê',
        hints: ['Accent comme un chapeau', 'C\'est tête']
      },
      {
        id: 'q8',
        question: 'Quel mot est bien écrit ?',
        type: 'multiple-choice',
        options: ['la mére', 'la mère', 'la mêre', 'la mere'],
        correctAnswer: 'la mère',
        explanation: 'Mère s\'écrit avec un accent grave : è',
        hints: ['Accent qui descend', 'C\'est mère']
      },
      {
        id: 'q9',
        question: 'L\'accent aigu (é) fait quel son ?',
        type: 'multiple-choice',
        options: ['Le son "é" comme dans café', 'Le son "è" comme dans après', 'Le son "e" comme dans le', 'Aucun son'],
        correctAnswer: 'Le son "é" comme dans café',
        explanation: 'L\'accent aigu (é) fait le son "é" fermé, comme dans café ou été',
        hints: ['Comme dans "été"', 'Bouche presque fermée']
      },
      {
        id: 'q10',
        question: 'Comment s\'écrit le mot ? "un b_b_"',
        type: 'multiple-choice',
        options: ['bébé', 'bèbè', 'bêbê', 'bebe'],
        correctAnswer: 'bébé',
        explanation: 'Bébé s\'écrit avec deux accents aigus : é',
        hints: ['Deux fois le même accent', 'Accent aigu']
      }
    ]
  },

  // ==================== CE2 - FRANÇAIS ====================

  {
    id: 'fr-ce2-007',
    title: 'Les homophones : a/à',
    subject: 'francais',
    level: 'CE2',
    difficulty: 3,
    description: 'Différencie "a" (verbe avoir) et "à" (préposition)',
    estimatedTime: 12,
    skills: ['Homophones', 'Orthographe'],
    questions: [
      {
        id: 'q1',
        question: 'Complète : "Il ___ un chien"',
        type: 'multiple-choice',
        options: ['a', 'à'],
        correctAnswer: 'a',
        explanation: '"Il a" = verbe avoir. Astuce : tu peux remplacer par "avait"',
        hints: ['C\'est le verbe avoir', 'Tu peux dire "il avait"']
      },
      {
        id: 'q2',
        question: 'Complète : "Je vais ___ Paris"',
        type: 'multiple-choice',
        options: ['a', 'à'],
        correctAnswer: 'à',
        explanation: '"à" avec accent indique un lieu (préposition). On ne peut pas dire "je vais avait Paris"',
        hints: ['C\'est une préposition de lieu', 'On ne peut pas dire "avait"']
      },
      {
        id: 'q3',
        question: 'Complète : "Marie ___ mangé une pomme"',
        type: 'multiple-choice',
        options: ['a', 'à'],
        correctAnswer: 'a',
        explanation: '"a mangé" = passé composé avec avoir. Tu peux dire "Marie avait mangé"',
        hints: ['Verbe avoir au passé composé', 'Remplace par "avait"']
      },
      {
        id: 'q4',
        question: 'Complète : "Il habite ___ côté de chez moi"',
        type: 'multiple-choice',
        options: ['a', 'à'],
        correctAnswer: 'à',
        explanation: '"à côté" est une expression avec la préposition "à"',
        hints: ['C\'est une expression de lieu', 'On ne peut pas dire "avait côté"']
      },
      {
        id: 'q5',
        question: 'Complète : "Papa ___ une voiture rouge"',
        type: 'multiple-choice',
        options: ['a', 'à'],
        correctAnswer: 'a',
        explanation: '"Papa a" = verbe avoir. Tu peux dire "Papa avait une voiture"',
        hints: ['Il possède une voiture', 'Remplace par "avait"']
      },
      {
        id: 'q6',
        question: 'Complète : "Je joue ___ la balle"',
        type: 'multiple-choice',
        options: ['a', 'à'],
        correctAnswer: 'à',
        explanation: '"jouer à" utilise la préposition "à". On ne peut pas dire "je joue avait la balle"',
        hints: ['Jouer à quelque chose', 'On ne peut pas dire "avait"']
      },
      {
        id: 'q7',
        question: 'Complète : "Le chat ___ attrapé une souris"',
        type: 'multiple-choice',
        options: ['a', 'à'],
        correctAnswer: 'a',
        explanation: '"a attrapé" = passé composé avec avoir',
        hints: ['Passé composé', 'Remplace par "avait attrapé"']
      },
      {
        id: 'q8',
        question: 'Complète : "C\'est ___ toi de jouer"',
        type: 'multiple-choice',
        options: ['a', 'à'],
        correctAnswer: 'à',
        explanation: '"à toi" = préposition. On ne peut pas dire "c\'est avait toi"',
        hints: ['C\'est ton tour', 'On ne peut pas dire "avait"']
      },
      {
        id: 'q9',
        question: 'Complète : "Elle ___ trois frères"',
        type: 'multiple-choice',
        options: ['a', 'à'],
        correctAnswer: 'a',
        explanation: '"Elle a" = verbe avoir. Tu peux dire "Elle avait trois frères"',
        hints: ['Elle possède des frères', 'Remplace par "avait"']
      },
      {
        id: 'q10',
        question: 'Comment choisir entre "a" et "à" ?',
        type: 'multiple-choice',
        options: ['On regarde si le mot suivant commence par une voyelle', 'On remplace par "avait" : si ça marche c\'est "a"', 'On met toujours un accent', 'On ne met jamais d\'accent'],
        correctAnswer: 'On remplace par "avait" : si ça marche c\'est "a"',
        explanation: 'L\'astuce : remplace par "avait". Si la phrase a du sens, c\'est "a" sans accent (verbe avoir). Sinon, c\'est "à" avec accent.',
        hints: ['L\'astuce du "avait"', 'Si "avait" marche = pas d\'accent']
      }
    ]
  },

  {
    id: 'fr-ce2-002',
    title: 'La ponctuation',
    subject: 'francais',
    level: 'CE2',
    difficulty: 2,
    description: 'Utilise correctement les signes de ponctuation',
    estimatedTime: 15,
    skills: ['Ponctuation', 'Grammaire'],
    questions: [
      {
        id: 'q1',
        question: 'Quel signe de ponctuation termine une question ?',
        type: 'multiple-choice',
        options: ['.', '!', '?', ','],
        correctAnswer: '?',
        explanation: 'Une question se termine toujours par un point d\'interrogation (?)',
        hints: ['C\'est le signe des questions', 'Il ressemble à un crochet']
      },
      {
        id: 'q2',
        question: 'Quel signe de ponctuation termine une phrase déclarative ?',
        type: 'multiple-choice',
        options: ['?', '!', '.', ':'],
        correctAnswer: '.',
        explanation: 'Une phrase déclarative (qui raconte quelque chose) se termine par un point (.)',
        hints: ['Le signe le plus courant', 'Un petit rond']
      },
      {
        id: 'q3',
        question: 'Quel signe utilise-t-on pour exprimer une forte émotion (joie, colère, surprise) ?',
        type: 'multiple-choice',
        options: ['.', '?', '!', ';'],
        correctAnswer: '!',
        explanation: 'Le point d\'exclamation (!) exprime une émotion forte',
        hints: ['C\'est le signe de l\'exclamation', 'Quand on crie ou qu\'on est surpris']
      },
      {
        id: 'q4',
        question: 'Quel signe utilise-t-on pour faire une pause courte dans une phrase ?',
        type: 'multiple-choice',
        options: ['.', ',', '!', '?'],
        correctAnswer: ',',
        explanation: 'La virgule (,) marque une pause courte dans la phrase',
        hints: ['Pause courte, pas la fin', 'Comme quand on respire']
      },
      {
        id: 'q5',
        question: 'Choisis la bonne ponctuation : "Quel beau soleil___"',
        type: 'multiple-choice',
        options: ['.', '?', '!', ','],
        correctAnswer: '!',
        explanation: 'On utilise le point d\'exclamation car on exprime l\'admiration',
        hints: ['On admire le soleil', 'C\'est une émotion']
      },
      {
        id: 'q6',
        question: 'Choisis la bonne ponctuation : "Comment t\'appelles-tu___"',
        type: 'multiple-choice',
        options: ['.', '?', '!', ':'],
        correctAnswer: '?',
        explanation: 'On utilise le point d\'interrogation car on pose une question',
        hints: ['On demande le prénom', 'C\'est une question']
      },
      {
        id: 'q7',
        question: 'Choisis la bonne ponctuation : "Le chat dort sur le canapé___"',
        type: 'multiple-choice',
        options: ['?', '!', '.', ','],
        correctAnswer: '.',
        explanation: 'On utilise un point car c\'est une phrase qui raconte quelque chose',
        hints: ['On raconte, on ne pose pas de question', 'Phrase déclarative']
      },
      {
        id: 'q8',
        question: 'Quel signe utilise-t-on avant une liste ou une explication ?',
        type: 'multiple-choice',
        options: [',', '.', ':', ';'],
        correctAnswer: ':',
        explanation: 'Les deux-points (:) introduisent une liste ou une explication',
        hints: ['Deux petits points', 'Avant une énumération']
      },
      {
        id: 'q9',
        question: 'Choisis la bonne ponctuation : "Attention___ tu vas tomber___"',
        type: 'multiple-choice',
        options: ['. .', '! !', ', .', '? !'],
        correctAnswer: '! !',
        explanation: 'On utilise deux points d\'exclamation car on avertit avec émotion',
        hints: ['C\'est un avertissement', 'On s\'inquiète']
      },
      {
        id: 'q10',
        question: 'Dans une phrase, la virgule sert à :',
        type: 'multiple-choice',
        options: ['Terminer la phrase', 'Poser une question', 'Faire une courte pause', 'Exprimer la joie'],
        correctAnswer: 'Faire une courte pause',
        explanation: 'La virgule permet de faire une pause dans la phrase, comme quand on respire',
        hints: ['Ce n\'est pas pour finir', 'Une petite pause pour respirer']
      }
    ]
  },

  // ==================== CM1 - FRANÇAIS ====================

  {
    id: 'francais-cm1-001',
    title: 'Le passé composé : auxiliaires et accords',
    subject: 'francais',
    level: 'CM1',
    difficulty: 3,
    description: 'Maîtrise la conjugaison au passé composé avec les auxiliaires être et avoir, et apprends à accorder correctement le participe passé.',
    estimatedTime: 15,
    skills: ['Conjugaison', 'Accord du participe passé', 'Choix de l\'auxiliaire'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle phrase est correctement conjuguée au passé composé ?',
        type: 'multiple-choice',
        options: [
          'Les enfants a joué dans le jardin.',
          'Les enfants ont joué dans le jardin.',
          'Les enfants ont jouer dans le jardin.',
          'Les enfants avons joué dans le jardin.'
        ],
        correctAnswer: 'Les enfants ont joué dans le jardin.',
        explanation: 'Au passé composé, on utilise l\'auxiliaire AVOIR conjugué (ont) + le participe passé (joué). "Les enfants" est la 3e personne du pluriel, donc on utilise "ont".',
        hints: ['Quel est l\'auxiliaire du verbe "jouer" ?', 'À quelle personne est conjugué "les enfants" ?']
      },
      {
        id: 'q2',
        question: 'Marie est allée à l\'école. Le participe passé "allée" s\'accorde avec le sujet.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Avec l\'auxiliaire ÊTRE, le participe passé s\'accorde toujours avec le sujet. Marie est féminin singulier, donc "allée" prend un "e".',
        hints: ['Quel est l\'auxiliaire utilisé ici ?', 'Le sujet est-il masculin ou féminin ?']
      },
      {
        id: 'q3',
        question: 'Quel est le participe passé du verbe "venir" ?',
        type: 'multiple-choice',
        options: ['venu', 'veni', 'venir', 'venait'],
        correctAnswer: 'venu',
        explanation: 'Le participe passé de "venir" est "venu". On dit : il est venu, elle est venue, ils sont venus.',
        hints: ['Le participe passé se termine souvent par -u, -i ou -é', 'Pense à : il est... à l\'école']
      },
      {
        id: 'q4',
        question: 'Mes sœurs sont __________ au cinéma hier. Complète avec le participe passé de "aller" correctement accordé. Écris le mot en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'allées',
        explanation: 'Le participe passé de "aller" est "allé". Avec l\'auxiliaire ÊTRE et un sujet féminin pluriel (mes sœurs), on ajoute "es" : allées.',
        hints: ['L\'auxiliaire est "être", donc il faut accorder', '"Mes sœurs" est féminin pluriel']
      },
      {
        id: 'q5',
        question: 'Quel auxiliaire utilise-t-on pour conjuguer le verbe "tomber" au passé composé ?',
        type: 'multiple-choice',
        options: ['avoir', 'être', 'avoir ou être selon le sens', 'aucun auxiliaire'],
        correctAnswer: 'être',
        explanation: 'Le verbe "tomber" se conjugue avec l\'auxiliaire ÊTRE au passé composé. On dit : je suis tombé(e), tu es tombé(e), il/elle est tombé(e).',
        hints: ['Les verbes de mouvement utilisent souvent...', 'On dit "je suis..." ou "j\'ai..." tombé ?']
      },
      {
        id: 'q6',
        question: 'Paul et Léa ont mangé des pommes. Le participe passé "mangé" doit s\'accorder avec le sujet.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Faux',
        explanation: 'Avec l\'auxiliaire AVOIR, le participe passé ne s\'accorde PAS avec le sujet. "Mangé" reste invariable car on utilise l\'auxiliaire "avoir".',
        hints: ['Quel est l\'auxiliaire utilisé ?', 'Avec "avoir", y a-t-il un accord avec le sujet ?']
      },
      {
        id: 'q7',
        question: 'Quelle phrase contient une erreur d\'accord du participe passé ?',
        type: 'multiple-choice',
        options: [
          'Les filles sont arrivées en retard.',
          'Nous sommes partis en vacances.',
          'Elles ont tombées dans le jardin.',
          'Tu es venu me voir hier.'
        ],
        correctAnswer: 'Elles ont tombées dans le jardin.',
        explanation: 'L\'erreur est "ont tombées". Le verbe "tomber" se conjugue avec ÊTRE, pas AVOIR. On doit dire : "Elles sont tombées".',
        hints: ['Vérifie quel auxiliaire doit être utilisé avec "tomber"', 'Un verbe de mouvement utilise quel auxiliaire ?']
      },
      {
        id: 'q8',
        question: 'Les verbes conjugués avec l\'auxiliaire "être" accordent toujours leur participe passé avec le sujet.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est une règle fondamentale : avec ÊTRE, le participe passé s\'accorde TOUJOURS en genre et en nombre avec le sujet.',
        hints: ['Pense à "elle est allée" ou "ils sont partis"', 'C\'est une règle générale du passé composé']
      },
      {
        id: 'q9',
        question: 'J\'ai __________ mon livre sur la table. Complète avec le participe passé de "poser". Écris le mot en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'posé',
        explanation: 'Le participe passé de "poser" est "posé". Avec l\'auxiliaire AVOIR et sans COD placé avant, le participe passé reste invariable.',
        hints: ['Le verbe "poser" se termine par -er', 'L\'auxiliaire est "avoir", pas d\'accord avec le sujet']
      },
      {
        id: 'q10',
        question: 'Quels verbes se conjuguent toujours avec l\'auxiliaire ÊTRE au passé composé ?',
        type: 'multiple-choice',
        options: [
          'Les verbes du 1er groupe',
          'Les verbes de mouvement et les verbes pronominaux',
          'Tous les verbes du 3e groupe',
          'Seulement les verbes en -ir'
        ],
        correctAnswer: 'Les verbes de mouvement et les verbes pronominaux',
        explanation: 'Les verbes de mouvement (aller, venir, partir, arriver, tomber, etc.) et les verbes pronominaux (se laver, se lever, etc.) se conjuguent toujours avec ÊTRE.',
        hints: ['Pense à "aller", "venir", "partir"...', 'Quels types de verbes décrivent un déplacement ?']
      }
    ]
  },

  {
    id: 'francais-cm1-002',
    title: 'Les homophones grammaticaux',
    subject: 'francais',
    level: 'CM1',
    difficulty: 3,
    description: 'Apprends à distinguer et à utiliser correctement les homophones grammaticaux : a/à, et/est, son/sont, on/ont, ce/se, c\'est/s\'est.',
    estimatedTime: 15,
    skills: ['Orthographe', 'Homophones', 'Nature des mots'],
    questions: [
      {
        id: 'q1',
        question: 'Complète la phrase : Il ___ mal à la tête.',
        type: 'multiple-choice',
        options: ['a', 'à', 'as', 'ah'],
        correctAnswer: 'a',
        explanation: '"A" sans accent est le verbe AVOIR conjugué à la 3e personne du singulier. On peut le remplacer par "avait" : Il avait mal à la tête.',
        hints: ['Peux-tu remplacer par "avait" ?', 'C\'est le verbe "avoir" conjugué']
      },
      {
        id: 'q2',
        question: 'Dans la phrase "Ils vont à la piscine", on utilise "à" avec accent car c\'est une préposition.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Exactement ! "À" avec accent est une préposition qui indique un lieu, une direction. On ne peut pas le remplacer par "avait".',
        hints: ['Peux-tu dire "Ils vont avait la piscine" ?', 'C\'est un petit mot invariable']
      },
      {
        id: 'q3',
        question: 'Quelle phrase est correctement orthographiée ?',
        type: 'multiple-choice',
        options: [
          'Mon frère à un vélo neuf.',
          'Mon frère a un vélo neuf.',
          'Mon frère ah un vélo neuf.',
          'Mon frère as un vélo neuf.'
        ],
        correctAnswer: 'Mon frère a un vélo neuf.',
        explanation: 'On utilise "a" sans accent car c\'est le verbe AVOIR (il a = il avait). "À" avec accent serait une préposition.',
        hints: ['Remplace par "avait" pour vérifier', 'Le sujet est "mon frère" (3e personne)']
      },
      {
        id: 'q4',
        question: 'Complète : Elle _____ gentille _____ intelligente. Écris les deux mots séparés par un espace, en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'est et',
        explanation: '"Est" (verbe être) car on peut dire "elle était". "Et" (conjonction) car on ne peut pas dire "elle gentille était intelligente".',
        hints: ['Pour le premier mot : remplace par "était"', 'Pour le second mot : il relie deux adjectifs']
      },
      {
        id: 'q5',
        question: 'Quelle phrase contient une erreur d\'homophone ?',
        type: 'multiple-choice',
        options: [
          'Ils sont partis en vacances.',
          'On a fini nos devoirs.',
          'Ils sont contents et heureux.',
          'Son frère et sa sœur sont à l\'école.'
        ],
        correctAnswer: 'Son frère et sa sœur sont à l\'école.',
        explanation: 'Attention ! Cette phrase est en fait correcte. "Son" (déterminant possessif) et "sont" (verbe être) sont bien utilisés.',
        hints: ['Vérifie chaque homophone', 'Remplace "sont" par "étaient" et "son" par "mon"']
      },
      {
        id: 'q6',
        question: 'Dans "Ils ont joué toute la journée", on peut remplacer "ont" par "avaient".',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Oui ! "Ont" est le verbe AVOIR au présent. On peut toujours le remplacer par "avaient" à l\'imparfait : Ils avaient joué.',
        hints: ['C\'est le verbe "avoir" conjugué', 'Essaie de mettre la phrase à l\'imparfait']
      },
      {
        id: 'q7',
        question: 'Complète : _____ cahier est sur la table. Écris le mot en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'son',
        explanation: '"Son" (sans t) est un déterminant possessif qui signifie "le cahier de lui/elle". On peut le remplacer par "mon" ou "ton".',
        hints: ['Peux-tu dire "mon cahier" ?', 'C\'est un déterminant possessif']
      },
      {
        id: 'q8',
        question: 'Quelle est la bonne orthographe : "_____ mon anniversaire aujourd\'hui" ?',
        type: 'multiple-choice',
        options: ['C\'est', 'S\'est', 'Ses', 'Ces'],
        correctAnswer: 'C\'est',
        explanation: '"C\'est" signifie "cela est". On peut le remplacer par "cela est" : Cela est mon anniversaire. "S\'est" est utilisé avec un verbe pronominal.',
        hints: ['Remplace par "cela est"', 'Il n\'y a pas de verbe pronominal ici']
      },
      {
        id: 'q9',
        question: 'Dans la phrase "Paul se réveille tôt", on utilise "se" car c\'est un verbe pronominal.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Exact ! "Se" est un pronom réfléchi utilisé avec les verbes pronominaux (se réveiller, se laver, se lever...).',
        hints: ['Le verbe est "se réveiller"', 'C\'est une action que Paul fait sur lui-même']
      },
      {
        id: 'q10',
        question: 'Quelle phrase contient le bon homophone ?',
        type: 'multiple-choice',
        options: [
          'On prend le bus et ont arrive à l\'heure.',
          'Ont prend le bus et on arrive à l\'heure.',
          'On prend le bus et on arrive à l\'heure.',
          'Ont prend le bus et ont arrive à l\'heure.'
        ],
        correctAnswer: 'On prend le bus et on arrive à l\'heure.',
        explanation: '"On" (pronom personnel = nous) car on ne peut pas dire "avaient prend". "Ont" serait le verbe avoir (ils ont = ils avaient).',
        hints: ['Essaie de remplacer par "avaient"', '"On" peut se remplacer par "nous"']
      }
    ]
  },

  {
    id: 'francais-cm1-003',
    title: 'Les compléments du verbe',
    subject: 'francais',
    level: 'CM1',
    difficulty: 3,
    description: 'Identifie et distingue les différents compléments : COD (complément d\'objet direct), COI (complément d\'objet indirect) et compléments circonstanciels (lieu, temps, manière).',
    estimatedTime: 15,
    skills: ['Grammaire', 'Analyse de phrase', 'Compléments du verbe'],
    questions: [
      {
        id: 'q1',
        question: 'Dans la phrase "Marie mange une pomme", quel est le COD ?',
        type: 'multiple-choice',
        options: ['Marie', 'mange', 'une pomme', 'Il n\'y a pas de COD'],
        correctAnswer: 'une pomme',
        explanation: 'Le COD (Complément d\'Objet Direct) répond à la question "Quoi ?" ou "Qui ?". Marie mange quoi ? Une pomme. Le COD se place directement après le verbe.',
        hints: ['Pose la question "Marie mange quoi ?"', 'Le COD se place juste après le verbe']
      },
      {
        id: 'q2',
        question: 'Le COD peut être supprimé de la phrase sans que celle-ci perde son sens.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Faux',
        explanation: 'Faux ! Le COD est un complément essentiel du verbe. Si on supprime "une pomme" dans "Marie mange une pomme", la phrase perd son sens complet.',
        hints: ['Essaie d\'enlever le COD de la phrase', 'Le COD est-il essentiel ou facultatif ?']
      },
      {
        id: 'q3',
        question: 'Dans "Paul parle à son ami", quelle est la nature du complément "à son ami" ?',
        type: 'multiple-choice',
        options: [
          'COD (Complément d\'Objet Direct)',
          'COI (Complément d\'Objet Indirect)',
          'Complément circonstanciel de lieu',
          'Complément circonstanciel de temps'
        ],
        correctAnswer: 'COI (Complément d\'Objet Indirect)',
        explanation: 'C\'est un COI car il est introduit par une préposition (à) et répond à la question "à qui ?". Paul parle à qui ? À son ami.',
        hints: ['Y a-t-il une préposition (à, de, pour...) ?', 'Pose la question "Paul parle à qui ?"']
      },
      {
        id: 'q4',
        question: 'Les enfants jouent dans le jardin. Identifie le type de complément "dans le jardin". Écris en minuscules : lieu, temps ou manière.',
        type: 'fill-blank',
        correctAnswer: 'lieu',
        explanation: '"Dans le jardin" est un complément circonstanciel de lieu. Il répond à la question "Où ?" : Les enfants jouent où ? Dans le jardin.',
        hints: ['Pose la question "Où ?"', 'Ce complément indique un endroit']
      },
      {
        id: 'q5',
        question: 'Quelle phrase contient un complément circonstanciel de temps ?',
        type: 'multiple-choice',
        options: [
          'Sophie lit un livre passionnant.',
          'Nous partons demain matin.',
          'Le chat dort sous la table.',
          'Pierre écrit avec soin.'
        ],
        correctAnswer: 'Nous partons demain matin.',
        explanation: '"Demain matin" est un complément circonstanciel de temps. Il répond à la question "Quand ?". On peut le supprimer ou le déplacer.',
        hints: ['Cherche le complément qui répond à "Quand ?"', 'Quel complément indique un moment ?']
      },
      {
        id: 'q6',
        question: 'Un complément circonstanciel peut généralement être déplacé ou supprimé dans la phrase.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Contrairement au COD et au COI, les compléments circonstanciels sont déplaçables et supprimables. Exemple : "Hier, Paul a joué" = "Paul a joué hier" = "Paul a joué".',
        hints: ['Essaie de déplacer le complément en début de phrase', 'Le complément circonstanciel est-il essentiel ?']
      },
      {
        id: 'q7',
        question: 'Dans "Julie regarde la télévision avec attention", quel est le complément circonstanciel ?',
        type: 'multiple-choice',
        options: ['Julie', 'la télévision', 'avec attention', 'Il n\'y en a pas'],
        correctAnswer: 'avec attention',
        explanation: '"Avec attention" est un complément circonstanciel de manière. Il répond à la question "Comment ?". "La télévision" est le COD.',
        hints: ['Pose la question "Comment ?"', 'Quel complément peut être supprimé ?']
      },
      {
        id: 'q8',
        question: 'Complète : "Thomas pense _____ ses vacances." Écris le petit mot manquant en minuscules.',
        type: 'fill-blank',
        correctAnswer: 'à',
        explanation: 'Le verbe "penser" se construit avec la préposition "à" pour introduire un COI. On dit "penser à quelque chose" ou "penser à quelqu\'un".',
        hints: ['Quelle préposition utilise-t-on avec "penser" ?', 'On dit "penser..." quoi ?']
      },
      {
        id: 'q9',
        question: 'Pour trouver le COD, on pose la question "qui ?" ou "quoi ?" après le verbe.',
        type: 'true-false',
        options: ['Vrai', 'Faux'],
        correctAnswer: 'Vrai',
        explanation: 'C\'est exact ! Pour identifier le COD, on pose la question "Qui ?" (pour une personne) ou "Quoi ?" (pour une chose) après le verbe.',
        hints: ['C\'est la méthode pour trouver le COD', 'Pense à "Je mange quoi ?"']
      },
      {
        id: 'q10',
        question: 'Quelle phrase contient un COI ?',
        type: 'multiple-choice',
        options: [
          'Léa dessine un beau paysage.',
          'Les oiseaux chantent le matin.',
          'Marc téléphone à sa grand-mère.',
          'Nous courons dans la cour.'
        ],
        correctAnswer: 'Marc téléphone à sa grand-mère.',
        explanation: '"À sa grand-mère" est un COI car il est introduit par la préposition "à" et répond à "Marc téléphone à qui ?". Les autres sont des COD ou des compléments circonstanciels.',
        hints: ['Cherche une préposition (à, de, pour...)', 'Quel verbe se construit avec "à" ?']
      }
    ]
  },

  // ==================== CM2 - FRANÇAIS ====================

  {
    id: 'fr-cm2-001',
    title: 'Conjugaison : L\'imparfait et le passé simple',
    subject: 'francais',
    level: 'CM2',
    difficulty: 4,
    description: 'Maîtrise les temps du passé : imparfait pour les descriptions et actions longues, passé simple pour les actions brèves et ponctuelles.',
    estimatedTime: 18,
    skills: ['Conjugaison', 'Imparfait', 'Passé simple', 'Temps du passé'],
    questions: [
      {
        id: 'q1',
        question: 'Conjugue "manger" à l\'imparfait, 1ère personne du singulier (je)',
        type: 'fill-blank',
        correctAnswer: 'mangeais',
        explanation: 'Je mangeais. À l\'imparfait, les terminaisons sont : -ais, -ais, -ait, -ions, -iez, -aient.',
        hints: ['L\'imparfait en -ais', 'manger → mange + ais']
      },
      {
        id: 'q2',
        question: 'Quelle est la terminaison de l\'imparfait pour "nous" ?',
        type: 'multiple-choice',
        options: ['-ions', '-ons', '-aient', '-iez'],
        correctAnswer: '-ions',
        explanation: 'À l\'imparfait, "nous" prend la terminaison -ions. Ex : nous mangions, nous finissions.',
        hints: ['C\'est proche du présent', 'Il y a un i']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : L\'imparfait sert à décrire des actions habituelles dans le passé.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'imparfait exprime des habitudes ou des descriptions dans le passé. Ex : "Tous les jours, je jouais au foot."',
        hints: ['Pense aux actions répétées', 'C\'est vrai']
      },
      {
        id: 'q4',
        question: 'Conjugue "finir" au passé simple, 3ème personne du singulier (il/elle)',
        type: 'fill-blank',
        correctAnswer: 'finit',
        explanation: 'Il/Elle finit. Au passé simple, les verbes du 2ème groupe ont : -is, -is, -it, -îmes, -îtes, -irent.',
        hints: ['Verbe du 2ème groupe', 'C\'est comme "il finit" mais au passé']
      },
      {
        id: 'q5',
        question: 'Le passé simple est utilisé principalement :',
        type: 'multiple-choice',
        options: ['À l\'oral', 'Dans les contes et récits écrits', 'Pour les descriptions', 'Pour les actions habituelles'],
        correctAnswer: 'Dans les contes et récits écrits',
        explanation: 'Le passé simple est un temps littéraire, principalement utilisé à l\'écrit dans les récits et les contes.',
        hints: ['C\'est un temps de l\'écrit', 'On le trouve dans les livres']
      },
      {
        id: 'q6',
        question: 'Conjugue "être" à l\'imparfait, 2ème personne du pluriel (vous)',
        type: 'fill-blank',
        correctAnswer: 'étiez',
        explanation: 'Vous étiez. Le verbe "être" est irrégulier mais garde les terminaisons classiques de l\'imparfait.',
        hints: ['Radical : ét-', 'ét + iez']
      },
      {
        id: 'q7',
        question: 'Dans la phrase "Il marchait quand soudain il tomba", quel temps décrit l\'action longue ?',
        type: 'multiple-choice',
        options: ['Le passé simple', 'L\'imparfait', 'Le présent', 'Le futur'],
        correctAnswer: 'L\'imparfait',
        explanation: 'L\'imparfait (marchait) décrit l\'action longue ou le décor. Le passé simple (tomba) décrit l\'action brève.',
        hints: ['L\'action qui dure', 'marchait']
      },
      {
        id: 'q8',
        question: 'Conjugue "avoir" au passé simple, 1ère personne du singulier (j\')',
        type: 'fill-blank',
        correctAnswer: 'eus',
        explanation: 'J\'eus. "Avoir" au passé simple : j\'eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent.',
        hints: ['C\'est irrégulier', 'eu + s']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : "Ils chantèrent" est conjugué au passé simple.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Chantèrent" est la 3ème personne du pluriel du passé simple du verbe "chanter".',
        hints: ['La terminaison -èrent', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Complète avec l\'imparfait : "Quand j\'___ petit, je jouais dans le jardin." (être)',
        type: 'fill-blank',
        correctAnswer: 'étais',
        explanation: 'Quand j\'étais petit. L\'imparfait est parfait pour décrire un état passé qui durait.',
        hints: ['Verbe être', 'j\' + étais']
      }
    ]
  },

  {
    id: 'fr-cm2-002',
    title: 'Les propositions subordonnées',
    subject: 'francais',
    level: 'CM2',
    difficulty: 4,
    description: 'Apprends à identifier et analyser les propositions principales et subordonnées dans une phrase complexe.',
    estimatedTime: 20,
    skills: ['Propositions', 'Grammaire', 'Analyse de phrase'],
    questions: [
      {
        id: 'q1',
        question: 'Combien de propositions dans : "Je pense que tu as raison" ?',
        type: 'multiple-choice',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        explanation: '2 propositions : "Je pense" (principale) et "que tu as raison" (subordonnée conjonctive).',
        hints: ['Cherche les verbes conjugués', 'Il y a 2 verbes']
      },
      {
        id: 'q2',
        question: 'Comment appelle-t-on la proposition qui peut fonctionner seule ?',
        type: 'multiple-choice',
        options: ['Proposition subordonnée', 'Proposition principale', 'Proposition relative', 'Proposition infinitive'],
        correctAnswer: 'Proposition principale',
        explanation: 'La proposition principale est autonome, elle peut fonctionner seule. La subordonnée dépend d\'elle.',
        hints: ['Elle est indépendante', 'C\'est la principale']
      },
      {
        id: 'q3',
        question: 'Dans "Le chat que j\'ai adopté est mignon", quelle est la subordonnée ?',
        type: 'fill-blank',
        correctAnswer: 'que j\'ai adopté',
        explanation: '"Que j\'ai adopté" est une proposition subordonnée relative introduite par "que".',
        hints: ['Elle commence par "que"', 'Elle donne une information sur le chat']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : Une proposition subordonnée peut exister seule.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Une proposition subordonnée dépend toujours d\'une proposition principale.',
        hints: ['Elle est dépendante', 'Elle ne peut pas être seule']
      },
      {
        id: 'q5',
        question: 'Quel mot introduit la proposition subordonnée dans : "Je viendrai quand tu seras prêt" ?',
        type: 'multiple-choice',
        options: ['Je', 'viendrai', 'quand', 'prêt'],
        correctAnswer: 'quand',
        explanation: '"Quand" est une conjonction de subordination qui introduit la subordonnée circonstancielle de temps.',
        hints: ['C\'est un mot de liaison', 'Il indique le temps']
      },
      {
        id: 'q6',
        question: 'Dans "L\'élève qui travaille réussira", la subordonnée relative complète quel mot ?',
        type: 'multiple-choice',
        options: ['réussira', 'travaille', 'L\'élève', 'qui'],
        correctAnswer: 'L\'élève',
        explanation: 'La subordonnée relative "qui travaille" complète le nom "élève", c\'est son antécédent.',
        hints: ['Elle donne des infos sur qui ?', 'C\'est un nom']
      },
      {
        id: 'q7',
        question: 'Combien de propositions dans : "Je mange parce que j\'ai faim" ?',
        type: 'fill-blank',
        correctAnswer: '2',
        explanation: '2 propositions : "Je mange" (principale) et "parce que j\'ai faim" (subordonnée de cause).',
        hints: ['Compte les verbes conjugués', 'mange, ai']
      },
      {
        id: 'q8',
        question: 'Quel type de subordonnée est introduit par "si" ?',
        type: 'multiple-choice',
        options: ['Relative', 'De temps', 'De condition', 'De cause'],
        correctAnswer: 'De condition',
        explanation: '"Si" introduit une subordonnée circonstancielle de condition. Ex : Si tu viens, je serai content.',
        hints: ['Elle exprime une hypothèse', 'Si... alors...']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : "Que", "qui", "dont", "où" introduisent des propositions relatives.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Ce sont les pronoms relatifs qui introduisent les propositions subordonnées relatives.',
        hints: ['Ce sont des pronoms relatifs', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Identifie la proposition principale : "Bien qu\'il pleuve, je sors."',
        type: 'multiple-choice',
        options: ['Bien qu\'il pleuve', 'je sors', 'qu\'il pleuve', 'il pleuve'],
        correctAnswer: 'je sors',
        explanation: '"Je sors" est la proposition principale. "Bien qu\'il pleuve" est une subordonnée concessive.',
        hints: ['C\'est celle qui peut être seule', 'L\'action principale']
      }
    ]
  },

  {
    id: 'fr-cm2-003',
    title: 'Les figures de style',
    subject: 'francais',
    level: 'CM2',
    difficulty: 4,
    description: 'Découvre les principales figures de style : comparaison, métaphore, personnification, énumération et hyperbole.',
    estimatedTime: 18,
    skills: ['Figures de style', 'Littérature', 'Expression écrite'],
    questions: [
      {
        id: 'q1',
        question: '"Ses yeux sont des étoiles" : quelle figure de style ?',
        type: 'multiple-choice',
        options: ['Comparaison', 'Métaphore', 'Répétition', 'Énumération'],
        correctAnswer: 'Métaphore',
        explanation: 'C\'est une métaphore : on compare sans utiliser "comme" ou "tel que".',
        hints: ['Pas de mot de comparaison', 'C\'est direct']
      },
      {
        id: 'q2',
        question: 'Quelle est la différence entre comparaison et métaphore ?',
        type: 'multiple-choice',
        options: ['La comparaison utilise "comme"', 'La métaphore utilise "comme"', 'Elles sont identiques', 'La comparaison est plus longue'],
        correctAnswer: 'La comparaison utilise "comme"',
        explanation: 'La comparaison utilise un outil de comparaison (comme, tel, pareil à). La métaphore n\'en utilise pas.',
        hints: ['Le mot clé est "comme"', 'Dans la comparaison']
      },
      {
        id: 'q3',
        question: '"Le vent hurle dans les arbres" : quelle figure de style ?',
        type: 'multiple-choice',
        options: ['Métaphore', 'Comparaison', 'Personnification', 'Hyperbole'],
        correctAnswer: 'Personnification',
        explanation: 'C\'est une personnification : on attribue une action humaine (hurler) au vent.',
        hints: ['Le vent fait une action humaine', 'Comme une personne']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : "Il est fort comme un lion" est une métaphore.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! C\'est une comparaison car on utilise le mot "comme".',
        hints: ['Il y a le mot "comme"', 'C\'est une comparaison']
      },
      {
        id: 'q5',
        question: '"J\'ai mille choses à faire" utilise quelle figure de style ?',
        type: 'multiple-choice',
        options: ['Personnification', 'Énumération', 'Hyperbole', 'Métaphore'],
        correctAnswer: 'Hyperbole',
        explanation: 'C\'est une hyperbole : on exagère pour impressionner. On n\'a pas vraiment mille choses à faire !',
        hints: ['C\'est une exagération', 'Mille = beaucoup trop']
      },
      {
        id: 'q6',
        question: 'Identifie la figure de style : "Il acheta des pommes, des poires, des bananes et des oranges."',
        type: 'multiple-choice',
        options: ['Comparaison', 'Énumération', 'Métaphore', 'Personnification'],
        correctAnswer: 'Énumération',
        explanation: 'C\'est une énumération : on liste plusieurs éléments de même nature.',
        hints: ['C\'est une liste', 'Plusieurs fruits alignés']
      },
      {
        id: 'q7',
        question: 'Complète avec une comparaison : "Elle est rapide ___ un guépard."',
        type: 'fill-blank',
        correctAnswer: 'comme',
        explanation: '"Comme" est l\'outil de comparaison le plus courant. Elle est rapide comme un guépard.',
        hints: ['C\'est le mot de la comparaison', 'Ça rime avec "homme"']
      },
      {
        id: 'q8',
        question: '"La mer en colère grondait" utilise quelle figure ?',
        type: 'multiple-choice',
        options: ['Hyperbole', 'Personnification', 'Énumération', 'Comparaison'],
        correctAnswer: 'Personnification',
        explanation: 'C\'est une personnification : la mer est décrite avec des sentiments et actions humains (colère, gronder).',
        hints: ['La mer a des émotions humaines', 'Comme une personne en colère']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : "Ce garçon est un vrai lion" est une métaphore.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Il n\'y a pas de mot comparatif (comme), donc c\'est une métaphore. On dit qu\'il EST un lion.',
        hints: ['Pas de "comme"', 'C\'est direct']
      },
      {
        id: 'q10',
        question: 'Quelle figure de style répète volontairement des mots ?',
        type: 'multiple-choice',
        options: ['Métaphore', 'Répétition/Anaphore', 'Hyperbole', 'Énumération'],
        correctAnswer: 'Répétition/Anaphore',
        explanation: 'La répétition (ou anaphore) consiste à répéter un mot ou un groupe de mots pour créer un effet de style.',
        hints: ['On dit plusieurs fois la même chose', 'Pour insister']
      }
    ]
  },

  // ==================== 6ÈME - FRANÇAIS ====================

  {
    id: 'fr-6eme-001',
    title: 'Les classes grammaticales',
    subject: 'francais',
    level: '6ème',
    difficulty: 4,
    description: 'Maîtrise les différentes classes grammaticales : nom, verbe, adjectif, adverbe, pronom, déterminant, préposition et conjonction.',
    estimatedTime: 18,
    skills: ['Grammaire', 'Classes grammaticales', 'Analyse'],
    questions: [
      {
        id: 'q1',
        question: 'À quelle classe grammaticale appartient le mot "rapidement" ?',
        type: 'multiple-choice',
        options: ['Adjectif', 'Adverbe', 'Nom', 'Verbe'],
        correctAnswer: 'Adverbe',
        explanation: '"Rapidement" est un adverbe. Les adverbes modifient un verbe, un adjectif ou un autre adverbe. Ils sont souvent en "-ment".',
        hints: ['Il modifie un verbe', 'Il finit en -ment']
      },
      {
        id: 'q2',
        question: 'Quel mot est un déterminant dans : "Le chat mange sa nourriture" ?',
        type: 'multiple-choice',
        options: ['chat', 'mange', 'Le', 'nourriture'],
        correctAnswer: 'Le',
        explanation: '"Le" est un déterminant (article défini). Il accompagne le nom "chat".',
        hints: ['Il est devant le nom', 'C\'est un article']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : Un pronom remplace un nom.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le pronom remplace un nom pour éviter les répétitions. Ex : Marie est là. Elle travaille.',
        hints: ['Pro = à la place de', 'C\'est vrai']
      },
      {
        id: 'q4',
        question: 'Quelle est la classe grammaticale de "belle" dans "une belle fleur" ?',
        type: 'fill-blank',
        correctAnswer: 'adjectif',
        explanation: '"Belle" est un adjectif qualificatif. Il qualifie le nom "fleur".',
        hints: ['Il décrit la fleur', 'C\'est un adjectif']
      },
      {
        id: 'q5',
        question: 'Quel mot est une préposition ?',
        type: 'multiple-choice',
        options: ['manger', 'dans', 'beau', 'il'],
        correctAnswer: 'dans',
        explanation: '"Dans" est une préposition. Les prépositions introduisent un complément (à, de, pour, avec, dans, sur...).',
        hints: ['Elle introduit un lieu', 'à, de, pour, dans...']
      },
      {
        id: 'q6',
        question: 'Dans "Marie et Pierre jouent", quel est le mot de liaison ?',
        type: 'fill-blank',
        correctAnswer: 'et',
        explanation: '"Et" est une conjonction de coordination. Elle relie deux éléments de même nature.',
        hints: ['Il relie Marie et Pierre', 'C\'est "et"']
      },
      {
        id: 'q7',
        question: 'À quelle classe appartient "nous" ?',
        type: 'multiple-choice',
        options: ['Nom', 'Verbe', 'Pronom', 'Adverbe'],
        correctAnswer: 'Pronom',
        explanation: '"Nous" est un pronom personnel sujet (1ère personne du pluriel).',
        hints: ['Il remplace des personnes', 'Pronom personnel']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : Les adjectifs s\'accordent en genre et en nombre avec le nom.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'adjectif s\'accorde avec le nom qu\'il qualifie. Ex : une belle maison / de beaux jardins.',
        hints: ['Masculin/féminin, singulier/pluriel', 'C\'est vrai']
      },
      {
        id: 'q9',
        question: 'Quelle est la classe de "courir" ?',
        type: 'fill-blank',
        correctAnswer: 'verbe',
        explanation: '"Courir" est un verbe à l\'infinitif (3ème groupe).',
        hints: ['Une action', 'C\'est un verbe']
      },
      {
        id: 'q10',
        question: 'Quel est le déterminant possessif dans "mon livre" ?',
        type: 'multiple-choice',
        options: ['livre', 'mon', 'le', 'un'],
        correctAnswer: 'mon',
        explanation: '"Mon" est un déterminant possessif. Il indique à qui appartient le livre.',
        hints: ['Il indique la possession', 'mon, ton, son...']
      }
    ]
  },

  {
    id: 'fr-6eme-002',
    title: 'La conjugaison : temps simples et composés',
    subject: 'francais',
    level: '6ème',
    difficulty: 4,
    description: 'Révise les temps de l\'indicatif : présent, imparfait, passé simple, futur et temps composés.',
    estimatedTime: 20,
    skills: ['Conjugaison', 'Temps', 'Indicatif'],
    questions: [
      {
        id: 'q1',
        question: 'Conjugue "finir" au présent, 3ème personne du pluriel (ils/elles)',
        type: 'fill-blank',
        correctAnswer: 'finissent',
        explanation: 'Ils/Elles finissent. Les verbes du 2ème groupe ont -issons, -issez, -issent au pluriel.',
        hints: ['2ème groupe en -ir', '-issent']
      },
      {
        id: 'q2',
        question: 'À quel temps est "nous mangions" ?',
        type: 'multiple-choice',
        options: ['Présent', 'Imparfait', 'Passé simple', 'Futur'],
        correctAnswer: 'Imparfait',
        explanation: '"Mangions" est à l\'imparfait (terminaison -ions pour nous).',
        hints: ['-ions = imparfait', 'Action dans le passé qui dure']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : Le passé composé est formé de l\'auxiliaire + participe passé.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Passé composé = avoir ou être au présent + participe passé. Ex : j\'ai mangé, je suis parti.',
        hints: ['Auxiliaire + participe', 'C\'est vrai']
      },
      {
        id: 'q4',
        question: 'Conjugue "être" au futur simple, 1ère personne du singulier (je)',
        type: 'fill-blank',
        correctAnswer: 'serai',
        explanation: 'Je serai. Le verbe "être" au futur : serai, seras, sera, serons, serez, seront.',
        hints: ['Irrégulier', 'ser- + -ai']
      },
      {
        id: 'q5',
        question: 'À quel temps est "il chanta" ?',
        type: 'multiple-choice',
        options: ['Imparfait', 'Passé simple', 'Passé composé', 'Plus-que-parfait'],
        correctAnswer: 'Passé simple',
        explanation: '"Chanta" est au passé simple (temps du récit écrit).',
        hints: ['Temps littéraire', '-a pour il/elle (1er groupe)']
      },
      {
        id: 'q6',
        question: 'Quel auxiliaire utilise-t-on avec "partir" au passé composé ?',
        type: 'multiple-choice',
        options: ['Avoir', 'Être', 'Les deux', 'Aucun'],
        correctAnswer: 'Être',
        explanation: '"Partir" se conjugue avec être : je suis parti(e). Les verbes de mouvement utilisent souvent être.',
        hints: ['Verbe de déplacement', 'Je suis parti']
      },
      {
        id: 'q7',
        question: 'Conjugue "avoir" à l\'imparfait, 2ème personne du singulier (tu)',
        type: 'fill-blank',
        correctAnswer: 'avais',
        explanation: 'Tu avais. Imparfait de "avoir" : avais, avais, avait, avions, aviez, avaient.',
        hints: ['av- + terminaison imparfait', '-ais pour tu']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : "Nous aurons" est au futur simple.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Aurons" est le futur simple de "avoir" pour nous.',
        hints: ['aur- = radical futur', 'C\'est vrai']
      },
      {
        id: 'q9',
        question: 'Quel est le participe passé de "prendre" ?',
        type: 'fill-blank',
        correctAnswer: 'pris',
        explanation: 'Le participe passé de "prendre" est "pris" (irrégulier).',
        hints: ['Irrégulier', 'J\'ai pris']
      },
      {
        id: 'q10',
        question: 'À quel temps est "j\'avais mangé" ?',
        type: 'multiple-choice',
        options: ['Passé composé', 'Plus-que-parfait', 'Passé simple', 'Imparfait'],
        correctAnswer: 'Plus-que-parfait',
        explanation: '"J\'avais mangé" est au plus-que-parfait (auxiliaire à l\'imparfait + participe passé).',
        hints: ['Auxiliaire à l\'imparfait', 'Action avant une autre au passé']
      }
    ]
  },

  {
    id: 'fr-6eme-003',
    title: 'Le récit et ses caractéristiques',
    subject: 'francais',
    level: '6ème',
    difficulty: 4,
    description: 'Comprends la structure du récit : situation initiale, élément perturbateur, péripéties, résolution et situation finale.',
    estimatedTime: 18,
    skills: ['Récit', 'Narration', 'Schéma narratif'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle est la première étape du schéma narratif ?',
        type: 'multiple-choice',
        options: ['L\'élément perturbateur', 'La situation initiale', 'Les péripéties', 'La résolution'],
        correctAnswer: 'La situation initiale',
        explanation: 'La situation initiale présente les personnages, le lieu et l\'époque au début de l\'histoire.',
        hints: ['Le début', 'On présente la situation de départ']
      },
      {
        id: 'q2',
        question: 'Comment appelle-t-on l\'événement qui déclenche l\'action ?',
        type: 'fill-blank',
        correctAnswer: 'élément perturbateur',
        explanation: 'L\'élément perturbateur (ou déclencheur) est l\'événement qui bouleverse la situation initiale et lance l\'histoire.',
        hints: ['Il perturbe', 'Il déclenche l\'action']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : Les péripéties sont les aventures et obstacles du personnage.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les péripéties sont les différentes actions, obstacles et aventures que vit le personnage.',
        hints: ['Les rebondissements', 'C\'est vrai']
      },
      {
        id: 'q4',
        question: 'Quel temps est souvent utilisé pour les descriptions dans un récit ?',
        type: 'multiple-choice',
        options: ['Passé simple', 'Imparfait', 'Présent', 'Futur'],
        correctAnswer: 'Imparfait',
        explanation: 'L\'imparfait est utilisé pour les descriptions et les actions de second plan (décor, états...).',
        hints: ['Pour décrire le décor', 'Imparfait']
      },
      {
        id: 'q5',
        question: 'Comment appelle-t-on la personne qui raconte l\'histoire ?',
        type: 'fill-blank',
        correctAnswer: 'narrateur',
        explanation: 'Le narrateur est celui qui raconte l\'histoire. Il peut être un personnage ou extérieur à l\'histoire.',
        hints: ['Il narre', 'Le narrateur']
      },
      {
        id: 'q6',
        question: 'Qu\'est-ce que la "résolution" dans un récit ?',
        type: 'multiple-choice',
        options: ['Le début', 'Le problème', 'La solution au problème', 'La description'],
        correctAnswer: 'La solution au problème',
        explanation: 'La résolution (ou dénouement) est le moment où le problème principal est résolu.',
        hints: ['Résoudre le problème', 'Avant la fin']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : La situation finale montre l\'état des personnages après l\'aventure.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! La situation finale présente l\'état des personnages après la résolution du problème.',
        hints: ['La fin de l\'histoire', 'C\'est vrai']
      },
      {
        id: 'q8',
        question: 'Quel temps est souvent utilisé pour les actions principales dans un conte ?',
        type: 'multiple-choice',
        options: ['Imparfait', 'Passé composé', 'Passé simple', 'Présent'],
        correctAnswer: 'Passé simple',
        explanation: 'Le passé simple est le temps des actions principales, brèves et successives dans un récit écrit.',
        hints: ['Temps du récit écrit', 'Actions ponctuelles']
      },
      {
        id: 'q9',
        question: 'Si le narrateur est un personnage de l\'histoire, à quelle personne raconte-t-il ?',
        type: 'fill-blank',
        correctAnswer: 'première',
        explanation: 'Un narrateur-personnage raconte à la 1ère personne (je). On parle de récit à la première personne.',
        hints: ['Il dit "je"', '1ère personne']
      },
      {
        id: 'q10',
        question: 'Combien y a-t-il d\'étapes dans le schéma narratif classique ?',
        type: 'multiple-choice',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        explanation: '5 étapes : situation initiale, élément perturbateur, péripéties, résolution, situation finale.',
        hints: ['Plus de 3', 'C\'est 5']
      }
    ]
  },

  // ==================== SCIENCES - Tous niveaux ====================

  {
    id: 'sci-ce1-001',
    title: 'Les dents',
    subject: 'sciences',
    level: 'CE1',
    difficulty: 2,
    description: 'Connais-tu tes dents ?',
    estimatedTime: 10,
    skills: ['Corps humain', 'Dents'],
    questions: [
      {
        id: 'q1',
        question: 'Combien as-tu de dents de lait ?',
        type: 'multiple-choice',
        options: ['10', '20', '28', '32'],
        correctAnswer: '20',
        explanation: 'Les enfants ont 20 dents de lait, remplacées par 32 dents adultes',
        hints: ['Moins que les adultes', 'C\'est 20']
      }
    ]
  },

  {
    id: 'sciences-ce2-001',
    title: 'Les états de la matière',
    subject: 'sciences',
    level: 'CE2',
    difficulty: 2,
    description: 'Découvre les trois états de la matière : solide, liquide et gaz',
    estimatedTime: 15,
    skills: ['États de la matière', 'Eau', 'Transformations'],
    questions: [
      {
        id: 'q1',
        question: 'Combien d\'états de la matière existe-t-il ?',
        type: 'multiple-choice',
        options: ['2', '3', '4', '5'],
        correctAnswer: '3',
        explanation: 'Il existe trois états de la matière : solide, liquide et gaz. Par exemple, l\'eau peut être de la glace (solide), de l\'eau liquide, ou de la vapeur (gaz).',
        hints: ['Pense à l\'eau : glace, eau, vapeur', 'C\'est moins que 4', 'La réponse est 3']
      },
      {
        id: 'q2',
        question: 'Vrai ou Faux : La glace est de l\'eau à l\'état solide.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Quand l\'eau gèle dans le congélateur, elle devient solide et se transforme en glace.',
        hints: ['La glace est dure', 'Elle se forme quand il fait froid', 'C\'est vrai !']
      },
      {
        id: 'q3',
        question: 'Quel est l\'état de l\'air que tu respires ?',
        type: 'multiple-choice',
        options: ['Solide', 'Liquide', 'Gaz', 'Plasma'],
        correctAnswer: 'Gaz',
        explanation: 'L\'air est un gaz ! Tu ne peux pas le voir ni le toucher, mais il est partout autour de toi.',
        hints: ['Tu ne peux pas le voir', 'Ce n\'est ni solide ni liquide', 'C\'est un gaz']
      },
      {
        id: 'q4',
        question: 'Quand l\'eau bout dans une casserole, elle se transforme en...',
        type: 'fill-blank',
        correctAnswer: 'vapeur',
        explanation: 'Bravo ! Quand l\'eau bout, elle se transforme en vapeur d\'eau, qui est de l\'eau à l\'état gazeux.',
        hints: ['C\'est de l\'eau à l\'état gazeux', 'Tu vois des bulles et de la fumée blanche', 'Le mot est "vapeur"']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Un glaçon peut fondre et devenir liquide.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Quand tu sors un glaçon du congélateur, il fond avec la chaleur et redevient de l\'eau liquide.',
        hints: ['Que se passe-t-il quand tu laisses un glaçon dehors ?', 'Il devient liquide', 'C\'est vrai !']
      },
      {
        id: 'q6',
        question: 'Quel est l\'état d\'une pierre ?',
        type: 'multiple-choice',
        options: ['Solide', 'Liquide', 'Gaz', 'Les trois'],
        correctAnswer: 'Solide',
        explanation: 'Une pierre est solide ! Elle a une forme fixe et on ne peut pas la verser comme un liquide.',
        hints: ['Elle est dure', 'Elle garde sa forme', 'C\'est solide']
      },
      {
        id: 'q7',
        question: 'Complète : Le jus d\'orange est à l\'état...',
        type: 'fill-blank',
        correctAnswer: 'liquide',
        explanation: 'Le jus d\'orange est liquide ! On peut le verser dans un verre, il prend la forme du récipient.',
        hints: ['On peut le verser', 'Ce n\'est pas solide', 'Le mot est "liquide"']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : L\'eau peut exister sous les trois états.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'eau peut être solide (glace), liquide (eau) ou gazeuse (vapeur). C\'est une matière extraordinaire !',
        hints: ['Pense à la glace, l\'eau et la vapeur', 'L\'eau change d\'état facilement', 'C\'est vrai !']
      },
      {
        id: 'q9',
        question: 'Que faut-il pour transformer de l\'eau liquide en glace ?',
        type: 'multiple-choice',
        options: ['De la chaleur', 'Du froid', 'Du sel', 'Du sucre'],
        correctAnswer: 'Du froid',
        explanation: 'Il faut du froid ! Dans le congélateur, la température descend en dessous de 0°C et l\'eau gèle pour devenir de la glace.',
        hints: ['On met l\'eau au congélateur', 'Il faut une température basse', 'C\'est le froid']
      },
      {
        id: 'q10',
        question: 'Complète : Quand un liquide se transforme en gaz, on dit qu\'il s\'...',
        type: 'fill-blank',
        correctAnswer: 'évapore',
        explanation: 'Excellent ! Quand un liquide se transforme en gaz, on dit qu\'il s\'évapore. Par exemple, une flaque d\'eau s\'évapore au soleil.',
        hints: ['Cela commence par "é"', 'Une flaque disparaît au soleil', 'Le mot est "évapore"']
      }
    ]
  },

  {
    id: 'sciences-ce2-002',
    title: 'L\'alimentation et la digestion',
    subject: 'sciences',
    level: 'CE2',
    difficulty: 2,
    description: 'Découvre les familles d\'aliments et comment fonctionne la digestion',
    estimatedTime: 15,
    skills: ['Alimentation', 'Digestion', 'Corps humain', 'Nutrition'],
    questions: [
      {
        id: 'q1',
        question: 'Combien de familles d\'aliments y a-t-il ?',
        type: 'multiple-choice',
        options: ['3', '5', '7', '10'],
        correctAnswer: '7',
        explanation: 'Il y a 7 familles d\'aliments : les produits laitiers, les viandes-poissons-œufs, les féculents, les fruits et légumes, les matières grasses, les produits sucrés et les boissons.',
        hints: ['C\'est plus que 5', 'Pense aux produits laitiers, viandes, fruits...', 'La réponse est 7']
      },
      {
        id: 'q2',
        question: 'Vrai ou Faux : Les fruits et légumes sont bons pour la santé.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les fruits et légumes contiennent des vitamines et des fibres qui sont très importantes pour rester en bonne santé.',
        hints: ['Ils contiennent des vitamines', 'Les médecins conseillent d\'en manger', 'C\'est vrai !']
      },
      {
        id: 'q3',
        question: 'Quel organe commence la digestion dans ta bouche ?',
        type: 'multiple-choice',
        options: ['Les dents', 'La langue', 'Les lèvres', 'Le nez'],
        correctAnswer: 'Les dents',
        explanation: 'Les dents coupent et broient les aliments pour faciliter la digestion. C\'est la première étape !',
        hints: ['Elles servent à mâcher', 'Elles coupent les aliments', 'Ce sont les dents']
      },
      {
        id: 'q4',
        question: 'Complète : Après la bouche, les aliments passent dans l\'...',
        type: 'fill-blank',
        correctAnswer: 'estomac',
        explanation: 'Bravo ! Après avoir été mâchés, les aliments descendent par l\'œsophage jusqu\'à l\'estomac où ils sont brassés et digérés.',
        hints: ['C\'est un organe du ventre', 'Il brasse les aliments', 'Le mot est "estomac"']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Il faut manger équilibré en variant les aliments.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Manger équilibré signifie manger un peu de chaque famille d\'aliments pour apporter à ton corps tout ce dont il a besoin.',
        hints: ['Ton corps a besoin de tous les nutriments', 'Il ne faut pas manger que des bonbons', 'C\'est vrai !']
      },
      {
        id: 'q6',
        question: 'Quelle famille d\'aliments donne de l\'énergie pour bouger ?',
        type: 'multiple-choice',
        options: ['Les fruits', 'Les féculents', 'Les produits laitiers', 'Les boissons'],
        correctAnswer: 'Les féculents',
        explanation: 'Les féculents (pain, pâtes, riz, pommes de terre) donnent beaucoup d\'énergie à ton corps pour courir, jouer et bouger !',
        hints: ['Pense au pain, aux pâtes, au riz', 'Ils donnent de l\'énergie', 'Ce sont les féculents']
      },
      {
        id: 'q7',
        question: 'Complète : Les aliments passent dans les intestins qui mesurent environ... mètres.',
        type: 'fill-blank',
        correctAnswer: 'sept',
        explanation: 'Incroyable mais vrai ! Tes intestins mesurent environ 7 mètres de long ! Ils sont repliés dans ton ventre.',
        hints: ['C\'est un chiffre entre 5 et 10', 'Ils sont très longs', 'Le nombre est "sept"']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : Le lait et le fromage font partie de la même famille d\'aliments.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le lait et le fromage appartiennent à la famille des produits laitiers. Ils sont riches en calcium, bon pour les os.',
        hints: ['Les deux viennent du lait', 'C\'est la famille des produits laitiers', 'C\'est vrai !']
      },
      {
        id: 'q9',
        question: 'Pourquoi doit-on bien mâcher les aliments ?',
        type: 'multiple-choice',
        options: ['Pour faire plaisir aux dents', 'Pour faciliter la digestion', 'Pour manger lentement', 'Pour avoir bon goût'],
        correctAnswer: 'Pour faciliter la digestion',
        explanation: 'On doit bien mâcher pour réduire les aliments en petits morceaux et faciliter le travail de l\'estomac et des intestins.',
        hints: ['Cela aide l\'estomac', 'Les petits morceaux se digèrent mieux', 'C\'est pour faciliter la digestion']
      },
      {
        id: 'q10',
        question: 'Complète : Les aliments que le corps n\'utilise pas sont éliminés sous forme de...',
        type: 'fill-blank',
        correctAnswer: 'déchets',
        explanation: 'Parfait ! Ce que ton corps ne peut pas utiliser est transformé en déchets et éliminé quand tu vas aux toilettes.',
        hints: ['C\'est ce qui sort aux toilettes', 'Le corps ne garde que ce qui est utile', 'Le mot est "déchets"']
      }
    ]
  },

  {
    id: 'sci-cm2-001',
    title: 'Les énergies renouvelables',
    subject: 'sciences',
    level: 'CM2',
    difficulty: 4,
    description: 'Découvre les différentes sources d\'énergie renouvelables : solaire, éolienne, hydraulique, géothermique et biomasse.',
    estimatedTime: 18,
    skills: ['Énergie', 'Environnement', 'Développement durable'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle énergie utilise la force du vent ?',
        type: 'multiple-choice',
        options: ['Solaire', 'Éolienne', 'Hydraulique', 'Géothermique'],
        correctAnswer: 'Éolienne',
        explanation: 'L\'énergie éolienne utilise la force du vent pour faire tourner des hélices qui produisent de l\'électricité.',
        hints: ['Pense aux grandes hélices', 'Éole est le dieu du vent']
      },
      {
        id: 'q2',
        question: 'Vrai ou Faux : Les énergies renouvelables sont inépuisables.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les énergies renouvelables se régénèrent naturellement : le soleil brille, le vent souffle, l\'eau coule... Elles ne s\'épuisent pas comme le pétrole.',
        hints: ['Elles se renouvellent', 'C\'est vrai']
      },
      {
        id: 'q3',
        question: 'Comment s\'appelle l\'énergie produite par le soleil ?',
        type: 'fill-blank',
        correctAnswer: 'solaire',
        explanation: 'L\'énergie solaire est captée par des panneaux photovoltaïques qui transforment la lumière du soleil en électricité.',
        hints: ['Le mot vient de "soleil"', 'C\'est l\'énergie solaire']
      },
      {
        id: 'q4',
        question: 'Quelle énergie utilise la force de l\'eau ?',
        type: 'multiple-choice',
        options: ['Éolienne', 'Géothermique', 'Hydraulique', 'Biomasse'],
        correctAnswer: 'Hydraulique',
        explanation: 'L\'énergie hydraulique utilise la force de l\'eau (rivières, barrages) pour produire de l\'électricité.',
        hints: ['Hydro = eau', 'Les barrages utilisent cette énergie']
      },
      {
        id: 'q5',
        question: 'Le pétrole est une énergie renouvelable.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Le pétrole est une énergie fossile qui met des millions d\'années à se former. Une fois épuisé, il n\'y en aura plus.',
        hints: ['Il met très longtemps à se former', 'C\'est faux']
      },
      {
        id: 'q6',
        question: 'Quelle énergie utilise la chaleur de la Terre ?',
        type: 'multiple-choice',
        options: ['Solaire', 'Éolienne', 'Géothermique', 'Biomasse'],
        correctAnswer: 'Géothermique',
        explanation: 'L\'énergie géothermique utilise la chaleur naturelle de la Terre (géo = terre, thermie = chaleur).',
        hints: ['Géo = Terre', 'La chaleur vient du sol']
      },
      {
        id: 'q7',
        question: 'Les panneaux solaires transforment la lumière du soleil en :',
        type: 'multiple-choice',
        options: ['Eau chaude uniquement', 'Électricité', 'Pétrole', 'Gaz'],
        correctAnswer: 'Électricité',
        explanation: 'Les panneaux solaires photovoltaïques transforment la lumière du soleil directement en électricité.',
        hints: ['C\'est de l\'énergie électrique', 'Pour alimenter les appareils']
      },
      {
        id: 'q8',
        question: 'La biomasse utilise des matières d\'origine :',
        type: 'multiple-choice',
        options: ['Minérale', 'Végétale et animale', 'Chimique', 'Nucléaire'],
        correctAnswer: 'Végétale et animale',
        explanation: 'La biomasse utilise des matières organiques (bois, déchets végétaux, déjections animales) pour produire de l\'énergie.',
        hints: ['Bio = vivant', 'Bois, plantes, déchets organiques']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : Les énergies renouvelables polluent moins que les énergies fossiles.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les énergies renouvelables produisent peu ou pas de gaz à effet de serre, contrairement au pétrole, au charbon et au gaz naturel.',
        hints: ['Elles sont plus propres', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Où trouve-t-on souvent des éoliennes ?',
        type: 'multiple-choice',
        options: ['En ville', 'Dans les endroits ventés', 'Sous terre', 'Au fond de l\'océan'],
        correctAnswer: 'Dans les endroits ventés',
        explanation: 'Les éoliennes sont installées dans des zones venteuses (collines, bord de mer) pour capter un maximum de vent.',
        hints: ['Il faut du vent', 'En hauteur ou au bord de la mer']
      }
    ]
  },

  {
    id: 'sci-cm2-002',
    title: 'Le corps humain : circulation et respiration',
    subject: 'sciences',
    level: 'CM2',
    difficulty: 4,
    description: 'Comprends le fonctionnement du système circulatoire et respiratoire : cœur, poumons, sang et échanges gazeux.',
    estimatedTime: 20,
    skills: ['Corps humain', 'Circulation sanguine', 'Respiration'],
    questions: [
      {
        id: 'q1',
        question: 'Quel organe fait circuler le sang dans tout le corps ?',
        type: 'multiple-choice',
        options: ['Les poumons', 'Le cerveau', 'Le cœur', 'L\'estomac'],
        correctAnswer: 'Le cœur',
        explanation: 'Le cœur est un muscle qui pompe le sang et le fait circuler dans tout le corps, sans jamais s\'arrêter.',
        hints: ['C\'est une pompe', 'Il bat dans ta poitrine']
      },
      {
        id: 'q2',
        question: 'Combien de fois par minute le cœur bat-il environ au repos ?',
        type: 'multiple-choice',
        options: ['10 fois', '70 fois', '200 fois', '500 fois'],
        correctAnswer: '70 fois',
        explanation: 'Au repos, le cœur bat environ 70 fois par minute. Pendant l\'effort, il peut battre beaucoup plus vite.',
        hints: ['C\'est entre 60 et 100', 'Environ 70']
      },
      {
        id: 'q3',
        question: 'Comment s\'appellent les vaisseaux qui transportent le sang du cœur vers les organes ?',
        type: 'fill-blank',
        correctAnswer: 'artères',
        explanation: 'Les artères transportent le sang riche en oxygène du cœur vers tous les organes du corps.',
        hints: ['Elles partent du cœur', 'Ça commence par A']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : Les poumons servent à respirer et à échanger les gaz.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les poumons permettent d\'absorber l\'oxygène de l\'air et de rejeter le dioxyde de carbone.',
        hints: ['Inspire, expire', 'C\'est vrai']
      },
      {
        id: 'q5',
        question: 'Quel gaz le sang apporte-t-il aux organes ?',
        type: 'multiple-choice',
        options: ['Le dioxyde de carbone', 'L\'azote', 'L\'oxygène', 'L\'hélium'],
        correctAnswer: 'L\'oxygène',
        explanation: 'Le sang transporte l\'oxygène des poumons vers tous les organes du corps qui en ont besoin pour fonctionner.',
        hints: ['C\'est le gaz vital', 'On le respire dans l\'air']
      },
      {
        id: 'q6',
        question: 'Comment s\'appellent les vaisseaux qui ramènent le sang vers le cœur ?',
        type: 'fill-blank',
        correctAnswer: 'veines',
        explanation: 'Les veines ramènent le sang chargé de déchets des organes vers le cœur, puis vers les poumons.',
        hints: ['Elles reviennent au cœur', 'Ça commence par V']
      },
      {
        id: 'q7',
        question: 'Le sang rouge (artériel) est riche en :',
        type: 'multiple-choice',
        options: ['Dioxyde de carbone', 'Oxygène', 'Azote', 'Sucre'],
        correctAnswer: 'Oxygène',
        explanation: 'Le sang artériel est rouge vif car il est riche en oxygène. Le sang veineux est plus sombre car il contient du CO2.',
        hints: ['C\'est le gaz de la vie', 'Il vient des poumons']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : Le sang circule toujours dans le même sens.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le sang circule toujours dans le même sens grâce aux valves du cœur et des veines qui empêchent le reflux.',
        hints: ['C\'est un circuit fermé', 'C\'est vrai']
      },
      {
        id: 'q9',
        question: 'Quel déchet gazeux est rejeté par les poumons ?',
        type: 'fill-blank',
        correctAnswer: 'dioxyde de carbone',
        explanation: 'Le dioxyde de carbone (CO2) est un déchet produit par les cellules. Les poumons l\'expulsent quand tu expires.',
        hints: ['C\'est du CO2', 'On le rejette en expirant']
      },
      {
        id: 'q10',
        question: 'Combien de litres de sang circulent dans le corps d\'un adulte ?',
        type: 'multiple-choice',
        options: ['1 litre', '3 litres', '5 litres', '10 litres'],
        correctAnswer: '5 litres',
        explanation: 'Un adulte a environ 5 litres de sang qui circulent en permanence dans son corps.',
        hints: ['C\'est entre 4 et 6', 'Environ 5 litres']
      }
    ]
  },

  {
    id: 'sci-cm2-003',
    title: 'Les mouvements de la Terre et les saisons',
    subject: 'sciences',
    level: 'CM2',
    difficulty: 4,
    description: 'Comprends comment les mouvements de la Terre (rotation et révolution) créent le jour, la nuit et les saisons.',
    estimatedTime: 18,
    skills: ['Astronomie', 'Saisons', 'Jour et nuit'],
    questions: [
      {
        id: 'q1',
        question: 'Comment s\'appelle le mouvement de la Terre sur elle-même ?',
        type: 'multiple-choice',
        options: ['Révolution', 'Rotation', 'Translation', 'Oscillation'],
        correctAnswer: 'Rotation',
        explanation: 'La rotation est le mouvement de la Terre sur elle-même, comme une toupie. Elle dure 24 heures.',
        hints: ['Comme une toupie', 'Elle tourne sur son axe']
      },
      {
        id: 'q2',
        question: 'Combien de temps dure une rotation complète de la Terre ?',
        type: 'fill-blank',
        correctAnswer: '24',
        explanation: 'La Terre fait un tour complet sur elle-même en 24 heures, ce qui crée l\'alternance jour/nuit.',
        hints: ['C\'est un jour', 'En heures']
      },
      {
        id: 'q3',
        question: 'Qu\'est-ce qui provoque l\'alternance du jour et de la nuit ?',
        type: 'multiple-choice',
        options: ['La révolution de la Terre', 'La rotation de la Terre', 'Le mouvement du Soleil', 'Les nuages'],
        correctAnswer: 'La rotation de la Terre',
        explanation: 'C\'est la rotation de la Terre qui crée le jour et la nuit : quand ta partie de la Terre fait face au Soleil, c\'est le jour.',
        hints: ['La Terre tourne', 'Sur elle-même']
      },
      {
        id: 'q4',
        question: 'Comment s\'appelle le mouvement de la Terre autour du Soleil ?',
        type: 'fill-blank',
        correctAnswer: 'révolution',
        explanation: 'La révolution est le mouvement de la Terre autour du Soleil. Elle dure 365 jours, soit une année.',
        hints: ['Autour du Soleil', 'Dure un an']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : L\'axe de la Terre est incliné.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'axe de la Terre est incliné d\'environ 23°. C\'est cette inclinaison qui cause les saisons.',
        hints: ['Elle penche un peu', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'En été en France, l\'hémisphère Nord est :',
        type: 'multiple-choice',
        options: ['Plus proche du Soleil', 'Incliné vers le Soleil', 'Dans l\'ombre', 'Plus loin du Soleil'],
        correctAnswer: 'Incliné vers le Soleil',
        explanation: 'En été, l\'hémisphère Nord est incliné vers le Soleil, donc il reçoit plus de lumière et de chaleur.',
        hints: ['Il fait plus chaud', 'Plus de soleil']
      },
      {
        id: 'q7',
        question: 'Quand c\'est l\'été en France, quelle saison est-ce en Australie ?',
        type: 'multiple-choice',
        options: ['Été aussi', 'Hiver', 'Printemps', 'Automne'],
        correctAnswer: 'Hiver',
        explanation: 'L\'Australie est dans l\'hémisphère Sud, donc les saisons sont inversées par rapport à la France.',
        hints: ['Les saisons sont inversées', 'Hémisphère Sud = opposé']
      },
      {
        id: 'q8',
        question: 'Combien de temps met la Terre pour faire le tour du Soleil ?',
        type: 'multiple-choice',
        options: ['24 heures', '1 mois', '1 an', '10 ans'],
        correctAnswer: '1 an',
        explanation: 'La Terre met un an (365 jours et 6 heures) pour faire une révolution complète autour du Soleil.',
        hints: ['C\'est une année', '365 jours']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : Le jour le plus long de l\'année s\'appelle le solstice d\'été.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le solstice d\'été (vers le 21 juin) est le jour le plus long de l\'année dans l\'hémisphère Nord.',
        hints: ['C\'est en juin', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Pourquoi fait-il plus chaud en été qu\'en hiver ?',
        type: 'multiple-choice',
        options: ['La Terre est plus proche du Soleil', 'Les rayons du Soleil arrivent plus droits', 'Le Soleil brille plus fort', 'Il y a moins de nuages'],
        correctAnswer: 'Les rayons du Soleil arrivent plus droits',
        explanation: 'En été, les rayons du Soleil arrivent plus perpendiculairement, donc ils chauffent plus efficacement.',
        hints: ['C\'est l\'angle des rayons', 'Plus droits = plus de chaleur']
      }
    ]
  },

  // ==================== 6ÈME - SCIENCES ====================

  {
    id: 'sci-6eme-001',
    title: 'La cellule, unité du vivant',
    subject: 'sciences',
    level: '6ème',
    difficulty: 4,
    description: 'Découvre la cellule : structure, organites et différences entre cellules animales et végétales.',
    estimatedTime: 20,
    skills: ['Biologie', 'Cellule', 'Microscopie'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle est l\'unité de base de tous les êtres vivants ?',
        type: 'multiple-choice',
        options: ['L\'atome', 'La cellule', 'L\'organe', 'Le tissu'],
        correctAnswer: 'La cellule',
        explanation: 'La cellule est l\'unité de base de tous les êtres vivants. Tous les organismes sont constitués d\'une ou plusieurs cellules.',
        hints: ['C\'est microscopique', 'Tous les êtres vivants en sont composés']
      },
      {
        id: 'q2',
        question: 'Quel instrument permet d\'observer les cellules ?',
        type: 'fill-blank',
        correctAnswer: 'microscope',
        explanation: 'Le microscope permet d\'observer les cellules car elles sont trop petites pour être vues à l\'œil nu.',
        hints: ['Pour voir ce qui est très petit', 'Ça commence par "micro"']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : Toutes les cellules possèdent un noyau.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Les bactéries (procaryotes) n\'ont pas de vrai noyau. Seules les cellules eucaryotes ont un noyau délimité par une membrane.',
        hints: ['Les bactéries sont différentes', 'C\'est faux']
      },
      {
        id: 'q4',
        question: 'Comment s\'appelle l\'enveloppe qui entoure la cellule ?',
        type: 'multiple-choice',
        options: ['Le noyau', 'La membrane plasmique', 'Le cytoplasme', 'La paroi'],
        correctAnswer: 'La membrane plasmique',
        explanation: 'La membrane plasmique est l\'enveloppe qui délimite la cellule et contrôle les échanges avec l\'extérieur.',
        hints: ['C\'est une membrane', 'Elle entoure toute la cellule']
      },
      {
        id: 'q5',
        question: 'Quel élément contient l\'information génétique (ADN) ?',
        type: 'fill-blank',
        correctAnswer: 'noyau',
        explanation: 'Le noyau contient l\'ADN, qui porte l\'information génétique de la cellule.',
        hints: ['C\'est au centre de la cellule', 'Il contient l\'ADN']
      },
      {
        id: 'q6',
        question: 'Qu\'est-ce qui différencie une cellule végétale d\'une cellule animale ?',
        type: 'multiple-choice',
        options: ['Le noyau', 'La paroi cellulaire et les chloroplastes', 'La membrane', 'Le cytoplasme'],
        correctAnswer: 'La paroi cellulaire et les chloroplastes',
        explanation: 'Les cellules végétales ont une paroi rigide et des chloroplastes (pour la photosynthèse) que les cellules animales n\'ont pas.',
        hints: ['Les plantes font la photosynthèse', 'Elles ont une paroi rigide']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : Un être unicellulaire est composé d\'une seule cellule.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Uni" signifie "un". Les bactéries et certains protistes sont des organismes unicellulaires.',
        hints: ['Uni = un', 'C\'est vrai']
      },
      {
        id: 'q8',
        question: 'Comment s\'appelle le liquide qui remplit la cellule ?',
        type: 'multiple-choice',
        options: ['Le plasma', 'Le cytoplasme', 'Le sérum', 'L\'eau'],
        correctAnswer: 'Le cytoplasme',
        explanation: 'Le cytoplasme est le liquide gélatineux qui remplit la cellule et dans lequel baignent les organites.',
        hints: ['Il remplit l\'intérieur', 'Cyto = cellule']
      },
      {
        id: 'q9',
        question: 'Quel organite permet aux cellules végétales de faire la photosynthèse ?',
        type: 'fill-blank',
        correctAnswer: 'chloroplaste',
        explanation: 'Les chloroplastes contiennent la chlorophylle et permettent la photosynthèse (transformation de lumière en énergie).',
        hints: ['Ils sont verts', 'Chloro = vert']
      },
      {
        id: 'q10',
        question: 'Quel est l\'ordre de grandeur de la taille d\'une cellule animale ?',
        type: 'multiple-choice',
        options: ['1 mètre', '1 centimètre', '10-100 micromètres', '1 nanomètre'],
        correctAnswer: '10-100 micromètres',
        explanation: 'Les cellules animales mesurent généralement entre 10 et 100 micromètres (µm). Un micromètre = 0,001 mm.',
        hints: ['C\'est très petit', 'On utilise des micromètres']
      }
    ]
  },

  {
    id: 'sci-6eme-002',
    title: 'La classification du vivant',
    subject: 'sciences',
    level: '6ème',
    difficulty: 4,
    description: 'Apprends à classer les êtres vivants : règnes, espèces et critères de classification.',
    estimatedTime: 18,
    skills: ['Classification', 'Biodiversité', 'Espèces'],
    questions: [
      {
        id: 'q1',
        question: 'Comment appelle-t-on un groupe d\'êtres vivants qui peuvent se reproduire entre eux ?',
        type: 'multiple-choice',
        options: ['Une famille', 'Une espèce', 'Un règne', 'Un genre'],
        correctAnswer: 'Une espèce',
        explanation: 'Une espèce regroupe des êtres vivants qui peuvent se reproduire entre eux et avoir des descendants fertiles.',
        hints: ['Ils peuvent avoir des petits ensemble', 'C\'est une espèce']
      },
      {
        id: 'q2',
        question: 'Quel critère utilise-t-on pour classer les vertébrés ?',
        type: 'multiple-choice',
        options: ['Leur couleur', 'La présence d\'une colonne vertébrale', 'Leur taille', 'Leur nourriture'],
        correctAnswer: 'La présence d\'une colonne vertébrale',
        explanation: 'Les vertébrés sont les animaux qui possèdent une colonne vertébrale (squelette interne avec des vertèbres).',
        hints: ['Vertébré = vertèbres', 'La colonne vertébrale']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : Les insectes sont des vertébrés.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Les insectes sont des invertébrés (pas de colonne vertébrale). Ce sont des arthropodes avec un exosquelette.',
        hints: ['Ils n\'ont pas de squelette interne', 'C\'est faux']
      },
      {
        id: 'q4',
        question: 'Dans quel groupe classe-t-on les animaux qui allaitent leurs petits ?',
        type: 'fill-blank',
        correctAnswer: 'mammifères',
        explanation: 'Les mammifères allaitent leurs petits grâce à leurs glandes mammaires. Exemples : chien, chat, baleine, humain.',
        hints: ['Mamma = mamelle', 'Ils produisent du lait']
      },
      {
        id: 'q5',
        question: 'Quel groupe d\'animaux possède des plumes ?',
        type: 'multiple-choice',
        options: ['Les mammifères', 'Les reptiles', 'Les oiseaux', 'Les amphibiens'],
        correctAnswer: 'Les oiseaux',
        explanation: 'Les oiseaux sont les seuls animaux à posséder des plumes. C\'est un critère de classification important.',
        hints: ['Ils peuvent voler', 'Ils ont des plumes']
      },
      {
        id: 'q6',
        question: 'Comment appelle-t-on les animaux qui vivent dans l\'eau ET sur terre ?',
        type: 'fill-blank',
        correctAnswer: 'amphibiens',
        explanation: 'Les amphibiens (grenouilles, salamandres) vivent dans l\'eau quand ils sont jeunes (têtards) puis sur terre à l\'âge adulte.',
        hints: ['Amphi = des deux côtés', 'Grenouilles, crapauds...']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : Les champignons sont des plantes.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Les champignons forment un règne à part. Ils ne font pas de photosynthèse et se nourrissent de matière organique.',
        hints: ['Ils n\'ont pas de chlorophylle', 'C\'est faux']
      },
      {
        id: 'q8',
        question: 'Quel groupe d\'animaux a le corps recouvert d\'écailles et respire avec des poumons ?',
        type: 'multiple-choice',
        options: ['Les poissons', 'Les reptiles', 'Les amphibiens', 'Les crustacés'],
        correctAnswer: 'Les reptiles',
        explanation: 'Les reptiles (serpents, lézards, tortues) ont des écailles et respirent avec des poumons, même les tortues aquatiques.',
        hints: ['Serpents, lézards, tortues', 'Écailles + poumons']
      },
      {
        id: 'q9',
        question: 'Comment appelle-t-on les animaux sans colonne vertébrale ?',
        type: 'fill-blank',
        correctAnswer: 'invertébrés',
        explanation: 'Les invertébrés n\'ont pas de colonne vertébrale. Ils représentent 97% des espèces animales (insectes, mollusques, vers...).',
        hints: ['In = sans', 'Sans vertèbres']
      },
      {
        id: 'q10',
        question: 'Les bactéries appartiennent à quel type d\'organismes ?',
        type: 'multiple-choice',
        options: ['Eucaryotes', 'Procaryotes', 'Végétaux', 'Champignons'],
        correctAnswer: 'Procaryotes',
        explanation: 'Les bactéries sont des procaryotes : elles n\'ont pas de vrai noyau délimité par une membrane.',
        hints: ['Elles n\'ont pas de noyau', 'Pro = avant (avant le noyau)']
      }
    ]
  },

  {
    id: 'sci-6eme-003',
    title: 'L\'environnement et les écosystèmes',
    subject: 'sciences',
    level: '6ème',
    difficulty: 4,
    description: 'Comprends les interactions entre les êtres vivants et leur milieu : écosystèmes, biodiversité et équilibre naturel.',
    estimatedTime: 18,
    skills: ['Écologie', 'Écosystèmes', 'Environnement'],
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce qu\'un écosystème ?',
        type: 'multiple-choice',
        options: ['Un seul animal', 'Un milieu de vie avec ses êtres vivants et leurs interactions', 'Une espèce', 'Un continent'],
        correctAnswer: 'Un milieu de vie avec ses êtres vivants et leurs interactions',
        explanation: 'Un écosystème comprend un milieu (biotope) et les êtres vivants qui y habitent (biocénose), ainsi que leurs interactions.',
        hints: ['Milieu + êtres vivants', 'Tout est lié']
      },
      {
        id: 'q2',
        question: 'Comment appelle-t-on l\'ensemble des espèces vivantes sur Terre ?',
        type: 'fill-blank',
        correctAnswer: 'biodiversité',
        explanation: 'La biodiversité représente la diversité du vivant : toutes les espèces animales, végétales et autres organismes.',
        hints: ['Bio = vie, diversité = variété', 'La diversité du vivant']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : Un prédateur mange d\'autres animaux.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Un prédateur est un animal qui chasse et mange d\'autres animaux appelés proies.',
        hints: ['Il chasse pour manger', 'C\'est vrai']
      },
      {
        id: 'q4',
        question: 'Quel élément est au début de toute chaîne alimentaire ?',
        type: 'multiple-choice',
        options: ['Un prédateur', 'Un herbivore', 'Un producteur (plante)', 'Un décomposeur'],
        correctAnswer: 'Un producteur (plante)',
        explanation: 'Les producteurs (plantes) sont à la base des chaînes alimentaires car ils fabriquent leur nourriture grâce à la photosynthèse.',
        hints: ['Ils utilisent le soleil', 'Les plantes']
      },
      {
        id: 'q5',
        question: 'Comment appelle-t-on les organismes qui décomposent la matière morte ?',
        type: 'fill-blank',
        correctAnswer: 'décomposeurs',
        explanation: 'Les décomposeurs (champignons, bactéries) transforment la matière morte en éléments minéraux réutilisables par les plantes.',
        hints: ['Ils recyclent la matière', 'Champignons, bactéries']
      },
      {
        id: 'q6',
        question: 'Que se passe-t-il si on élimine tous les prédateurs d\'un écosystème ?',
        type: 'multiple-choice',
        options: ['Rien ne change', 'Les proies prolifèrent et déséquilibrent l\'écosystème', 'Les plantes meurent', 'L\'eau disparaît'],
        correctAnswer: 'Les proies prolifèrent et déséquilibrent l\'écosystème',
        explanation: 'Sans prédateurs, les proies se multiplient trop, mangent toute la végétation et l\'écosystème est déséquilibré.',
        hints: ['Plus de régulation', 'Les herbivores se multiplient']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : La forêt amazonienne est un écosystème.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! La forêt amazonienne est un écosystème avec son climat, son sol et une immense biodiversité.',
        hints: ['C\'est un milieu avec ses êtres vivants', 'C\'est vrai']
      },
      {
        id: 'q8',
        question: 'Qu\'est-ce que le réchauffement climatique menace principalement ?',
        type: 'multiple-choice',
        options: ['Les roches', 'La biodiversité et les écosystèmes', 'Les étoiles', 'Les volcans'],
        correctAnswer: 'La biodiversité et les écosystèmes',
        explanation: 'Le réchauffement climatique menace la biodiversité : extinction d\'espèces, destruction d\'habitats, déséquilibre des écosystèmes.',
        hints: ['Les êtres vivants sont menacés', 'La biodiversité']
      },
      {
        id: 'q9',
        question: 'Comment appelle-t-on un animal qui ne mange que des plantes ?',
        type: 'fill-blank',
        correctAnswer: 'herbivore',
        explanation: 'Un herbivore se nourrit exclusivement de végétaux (herbe, feuilles, fruits). Exemples : vache, lapin, éléphant.',
        hints: ['Herbe + vore (manger)', 'Il mange des plantes']
      },
      {
        id: 'q10',
        question: 'Pourquoi dit-on que les écosystèmes sont fragiles ?',
        type: 'multiple-choice',
        options: ['Parce qu\'ils sont petits', 'Parce que tout est interconnecté et un changement peut tout déséquilibrer', 'Parce qu\'ils n\'existent pas vraiment', 'Parce qu\'ils sont artificiels'],
        correctAnswer: 'Parce que tout est interconnecté et un changement peut tout déséquilibrer',
        explanation: 'Dans un écosystème, tout est lié. La disparition d\'une espèce peut avoir des conséquences en cascade sur toutes les autres.',
        hints: ['Tout est connecté', 'Un changement affecte tout']
      }
    ]
  },

  // ==================== ANGLAIS - Tous niveaux ====================

  {
    id: 'en-ce1-001',
    title: 'Les nombres en anglais',
    subject: 'anglais',
    level: 'CE1',
    difficulty: 1,
    description: 'Compte de 1 à 20',
    estimatedTime: 10,
    skills: ['Numbers', 'Vocabulary'],
    questions: [
      {
        id: 'q1',
        question: 'How do you say "5" in English?',
        type: 'multiple-choice',
        options: ['Four', 'Five', 'Six', 'Seven'],
        correctAnswer: 'Five',
        explanation: '5 = Five en anglais',
        hints: ['Ça commence par F', 'C\'est Five']
      }
    ]
  },

  {
    id: 'en-cm1-001',
    title: 'Les animaux en anglais',
    subject: 'anglais',
    level: 'CM1',
    difficulty: 2,
    description: 'Apprends le vocabulaire des animaux',
    estimatedTime: 12,
    skills: ['Animals', 'Vocabulary'],
    questions: [
      {
        id: 'q1',
        question: 'What is "un chat" in English?',
        type: 'multiple-choice',
        options: ['Dog', 'Cat', 'Bird', 'Fish'],
        correctAnswer: 'Cat',
        explanation: 'Chat = Cat',
        hints: ['Ça commence par C', 'Cat']
      },
      {
        id: 'q2',
        question: 'What is "un chien" in English?',
        type: 'fill-blank',
        correctAnswer: 'dog',
        explanation: 'Chien = Dog',
        hints: ['3 lettres', 'Dog']
      }
    ]
  },

  // ==================== CM2 - ANGLAIS ====================

  {
    id: 'en-cm2-001',
    title: 'Le présent simple en anglais',
    subject: 'anglais',
    level: 'CM2',
    difficulty: 4,
    description: 'Apprends à conjuguer les verbes au présent simple en anglais : règles, formes affirmative, négative et interrogative.',
    estimatedTime: 18,
    skills: ['Grammaire anglaise', 'Présent simple', 'Conjugaison'],
    questions: [
      {
        id: 'q1',
        question: 'Complète : He _____ to school every day. (go)',
        type: 'fill-blank',
        correctAnswer: 'goes',
        explanation: 'À la 3ème personne du singulier (he/she/it), on ajoute -s ou -es au verbe. Go devient goes.',
        hints: ['3ème personne = +s', 'go → goes']
      },
      {
        id: 'q2',
        question: 'Que doit-on ajouter au verbe à la 3ème personne du singulier au présent simple ?',
        type: 'multiple-choice',
        options: ['-ing', '-ed', '-s ou -es', 'rien'],
        correctAnswer: '-s ou -es',
        explanation: 'Au présent simple, on ajoute -s ou -es au verbe pour he/she/it. Ex: She plays, He watches.',
        hints: ['Pour he, she, it', 'C\'est -s ou -es']
      },
      {
        id: 'q3',
        question: 'Complète la forme négative : She _____ like pizza.',
        type: 'fill-blank',
        correctAnswer: 'doesn\'t',
        explanation: 'Pour la forme négative avec he/she/it, on utilise "doesn\'t" (does not) + verbe à l\'infinitif.',
        hints: ['Does + not', 'doesn\'t']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : "I plays football" est correct.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Avec "I", on ne met pas de -s au verbe. La forme correcte est "I play football".',
        hints: ['Le -s est pour he/she/it', 'C\'est faux']
      },
      {
        id: 'q5',
        question: 'Complète la question : _____ she speak English?',
        type: 'multiple-choice',
        options: ['Do', 'Does', 'Is', 'Are'],
        correctAnswer: 'Does',
        explanation: 'Pour poser une question avec he/she/it au présent simple, on utilise "Does".',
        hints: ['Pour she, c\'est...', 'Does']
      },
      {
        id: 'q6',
        question: 'Complète : They _____ football on Saturdays. (play)',
        type: 'fill-blank',
        correctAnswer: 'play',
        explanation: 'Avec "they", on n\'ajoute pas de -s au verbe. They play football.',
        hints: ['They = pas de -s', 'play']
      },
      {
        id: 'q7',
        question: 'Comment forme-t-on la négation avec "I" ou "you" au présent simple ?',
        type: 'multiple-choice',
        options: ['doesn\'t + verbe', 'don\'t + verbe', 'not + verbe', 'verbe + not'],
        correctAnswer: 'don\'t + verbe',
        explanation: 'Avec I/you/we/they, on utilise "don\'t" (do not) + verbe à l\'infinitif.',
        hints: ['Do + not', 'don\'t']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : "Does he likes music?" est correct.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Après "does", le verbe reste à l\'infinitif (sans -s). C\'est "Does he like music?"',
        hints: ['Après does, pas de -s', 'C\'est faux']
      },
      {
        id: 'q9',
        question: 'Complète : My cat _____ fish. (eat)',
        type: 'fill-blank',
        correctAnswer: 'eats',
        explanation: '"My cat" = it (3ème personne). On ajoute -s au verbe : eats.',
        hints: ['My cat = it', 'eat → eats']
      },
      {
        id: 'q10',
        question: 'Quelle phrase est correcte ?',
        type: 'multiple-choice',
        options: ['She don\'t like cheese', 'She doesn\'t like cheese', 'She not like cheese', 'She doesn\'t likes cheese'],
        correctAnswer: 'She doesn\'t like cheese',
        explanation: 'Avec she, la forme négative est : She doesn\'t + verbe (sans -s).',
        hints: ['She = doesn\'t', 'Le verbe reste "like"']
      }
    ]
  },

  {
    id: 'en-cm2-002',
    title: 'Poser des questions en anglais',
    subject: 'anglais',
    level: 'CM2',
    difficulty: 4,
    description: 'Apprends à poser des questions en anglais avec les mots interrogatifs : What, Where, When, Who, Why, How.',
    estimatedTime: 18,
    skills: ['Questions', 'Mots interrogatifs', 'Communication'],
    questions: [
      {
        id: 'q1',
        question: 'Quel mot interrogatif signifie "Où" en anglais ?',
        type: 'multiple-choice',
        options: ['What', 'Where', 'When', 'Who'],
        correctAnswer: 'Where',
        explanation: '"Where" signifie "où" en anglais. Ex: Where do you live? = Où habites-tu ?',
        hints: ['Ça concerne un lieu', 'Where']
      },
      {
        id: 'q2',
        question: 'Complète : _____ is your name?',
        type: 'fill-blank',
        correctAnswer: 'What',
        explanation: '"What" signifie "Quel/Quelle" ou "Qu\'est-ce que". What is your name? = Quel est ton nom ?',
        hints: ['Pour demander quelque chose', 'What']
      },
      {
        id: 'q3',
        question: 'Que signifie "When" en français ?',
        type: 'multiple-choice',
        options: ['Où', 'Quand', 'Pourquoi', 'Comment'],
        correctAnswer: 'Quand',
        explanation: '"When" signifie "quand". Ex: When is your birthday? = Quand est ton anniversaire ?',
        hints: ['Ça concerne le temps', 'Quand']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : "Who" sert à demander l\'identité d\'une personne.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Who" signifie "qui". Ex: Who is your teacher? = Qui est ton professeur ?',
        hints: ['Pour parler de personnes', 'C\'est vrai']
      },
      {
        id: 'q5',
        question: 'Complète : _____ are you late? - Because I missed the bus.',
        type: 'fill-blank',
        correctAnswer: 'Why',
        explanation: '"Why" signifie "pourquoi". On répond souvent avec "because" (parce que).',
        hints: ['La réponse est "because"', 'Why']
      },
      {
        id: 'q6',
        question: 'Quel mot interrogatif signifie "Comment" ?',
        type: 'multiple-choice',
        options: ['What', 'Why', 'How', 'Who'],
        correctAnswer: 'How',
        explanation: '"How" signifie "comment". Ex: How are you? = Comment vas-tu ?',
        hints: ['Pour la manière', 'How']
      },
      {
        id: 'q7',
        question: 'Complète : _____ old are you?',
        type: 'multiple-choice',
        options: ['What', 'Where', 'How', 'Who'],
        correctAnswer: 'How',
        explanation: '"How old" signifie "quel âge". How old are you? = Quel âge as-tu ?',
        hints: ['Pour demander l\'âge', 'How + old']
      },
      {
        id: 'q8',
        question: 'Traduis : "Qu\'est-ce que tu manges ?"',
        type: 'multiple-choice',
        options: ['Where do you eat?', 'What do you eat?', 'When do you eat?', 'Who do you eat?'],
        correctAnswer: 'What do you eat?',
        explanation: '"What do you eat?" = Qu\'est-ce que tu manges ? "What" pour demander "quoi".',
        hints: ['What = quoi', 'What do you eat?']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : "How many" sert à demander une quantité.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "How many" = combien (pour les choses dénombrables). Ex: How many brothers do you have?',
        hints: ['Pour compter', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Complète : _____ do you live? - In Paris.',
        type: 'fill-blank',
        correctAnswer: 'Where',
        explanation: '"Where" pour demander un lieu. Where do you live? = Où habites-tu ?',
        hints: ['La réponse est un lieu', 'Where']
      }
    ]
  },

  {
    id: 'en-cm2-003',
    title: 'Le vocabulaire de la maison en anglais',
    subject: 'anglais',
    level: 'CM2',
    difficulty: 3,
    description: 'Apprends le vocabulaire des pièces de la maison et des meubles en anglais : bedroom, kitchen, bathroom, furniture...',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Maison', 'Pièces', 'Meubles'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "la cuisine" en anglais ?',
        type: 'multiple-choice',
        options: ['bathroom', 'bedroom', 'kitchen', 'living room'],
        correctAnswer: 'kitchen',
        explanation: '"Kitchen" signifie "cuisine". C\'est la pièce où on prépare les repas.',
        hints: ['Là où on cuisine', 'Kitchen']
      },
      {
        id: 'q2',
        question: 'Que signifie "bedroom" en français ?',
        type: 'fill-blank',
        correctAnswer: 'chambre',
        explanation: '"Bedroom" = chambre (à coucher). "Bed" signifie lit, donc "bedroom" = la pièce du lit.',
        hints: ['Là où on dort', 'Bed = lit']
      },
      {
        id: 'q3',
        question: 'Comment s\'appelle la salle de bains en anglais ?',
        type: 'multiple-choice',
        options: ['bathroom', 'bedroom', 'kitchen', 'garden'],
        correctAnswer: 'bathroom',
        explanation: '"Bathroom" = salle de bains. "Bath" signifie bain.',
        hints: ['Bath = bain', 'Bathroom']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : "Living room" signifie "salle à manger".',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! "Living room" signifie "salon" ou "salle de séjour". La salle à manger est "dining room".',
        hints: ['Living = vivre', 'C\'est le salon']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "un canapé" en anglais ?',
        type: 'multiple-choice',
        options: ['chair', 'table', 'sofa', 'bed'],
        correctAnswer: 'sofa',
        explanation: '"Sofa" (ou "couch") signifie "canapé". C\'est un siège long où on peut s\'asseoir à plusieurs.',
        hints: ['C\'est dans le salon', 'Sofa']
      },
      {
        id: 'q6',
        question: 'Que signifie "window" ?',
        type: 'fill-blank',
        correctAnswer: 'fenêtre',
        explanation: '"Window" signifie "fenêtre". C\'est par où entre la lumière.',
        hints: ['Pour voir dehors', 'La lumière entre par là']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "le jardin" en anglais ?',
        type: 'multiple-choice',
        options: ['garage', 'garden', 'kitchen', 'roof'],
        correctAnswer: 'garden',
        explanation: '"Garden" signifie "jardin". C\'est l\'espace vert à l\'extérieur de la maison.',
        hints: ['Dehors, avec des plantes', 'Garden']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : "Door" signifie "porte" en anglais.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Door" = porte. On l\'ouvre pour entrer ou sortir d\'une pièce.',
        hints: ['On l\'ouvre pour entrer', 'C\'est vrai']
      },
      {
        id: 'q9',
        question: 'Comment dit-on "le toit" en anglais ?',
        type: 'multiple-choice',
        options: ['floor', 'roof', 'wall', 'ceiling'],
        correctAnswer: 'roof',
        explanation: '"Roof" signifie "toit". C\'est la partie supérieure de la maison qui protège de la pluie.',
        hints: ['Tout en haut de la maison', 'Roof']
      },
      {
        id: 'q10',
        question: 'Que signifie "stairs" ?',
        type: 'fill-blank',
        correctAnswer: 'escalier',
        explanation: '"Stairs" (ou "staircase") signifie "escalier". C\'est ce qu\'on monte pour aller à l\'étage.',
        hints: ['Pour monter', 'On les monte marche par marche']
      }
    ]
  },

  {
    id: 'en-6eme-001',
    title: 'Present Continuous',
    subject: 'anglais',
    level: '6ème',
    difficulty: 3,
    description: 'Maîtrise le présent continu en anglais (BE + -ING) pour décrire des actions en cours.',
    estimatedTime: 18,
    skills: ['Grammar', 'Present Continuous', 'Conjugaison anglaise'],
    questions: [
      {
        id: 'q1',
        question: 'She _____ TV now. (watch)',
        type: 'fill-blank',
        correctAnswer: 'is watching',
        explanation: 'Present continuous = BE + verbe-ING. She → is. Watch → watching. Donc "She is watching".',
        hints: ['Utilise le verbe BE conjugué + ING', 'She IS...']
      },
      {
        id: 'q2',
        question: 'They _____ football in the park. (play)',
        type: 'fill-blank',
        correctAnswer: 'are playing',
        explanation: 'They (ils/elles) utilise "are" au présent de BE. Play + ING = playing.',
        hints: ['They → are', 'Play devient playing']
      },
      {
        id: 'q3',
        question: 'I _____ a book right now. (read)',
        type: 'fill-blank',
        correctAnswer: 'am reading',
        explanation: 'I (je) utilise "am" au présent de BE. Read + ING = reading.',
        hints: ['I → am', 'Read devient reading']
      },
      {
        id: 'q4',
        question: 'Quelle phrase est au present continuous ?',
        type: 'multiple-choice',
        options: ['She plays tennis.', 'She is playing tennis.', 'She played tennis.', 'She will play tennis.'],
        correctAnswer: 'She is playing tennis.',
        explanation: 'Le present continuous se forme avec BE + verbe-ING. "She is playing" est la seule forme correcte.',
        hints: ['Cherche BE + ING', 'is + playing']
      },
      {
        id: 'q5',
        question: 'He _____ his homework at the moment. (do)',
        type: 'fill-blank',
        correctAnswer: 'is doing',
        explanation: 'He → is. Do + ING = doing. "He is doing his homework."',
        hints: ['He → is', 'Do devient doing']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : On utilise le present continuous pour une action en cours.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le present continuous décrit une action qui se passe maintenant, en ce moment.',
        hints: ['Pense à "maintenant"', 'Action en cours = continuous']
      },
      {
        id: 'q7',
        question: 'The cat _____ on the sofa. (sleep)',
        type: 'fill-blank',
        correctAnswer: 'is sleeping',
        explanation: 'The cat (il/elle) → is. Sleep + ING = sleeping.',
        hints: ['Un chat = it/he/she → is', 'Sleep + ING']
      },
      {
        id: 'q8',
        question: 'We _____ to music. (listen)',
        type: 'fill-blank',
        correctAnswer: 'are listening',
        explanation: 'We (nous) → are. Listen + ING = listening.',
        hints: ['We → are', 'Listen devient listening']
      },
      {
        id: 'q9',
        question: 'Quel mot-clé indique souvent le present continuous ?',
        type: 'multiple-choice',
        options: ['Yesterday', 'Tomorrow', 'Now / Right now', 'Last week'],
        correctAnswer: 'Now / Right now',
        explanation: '"Now" et "right now" (maintenant) indiquent une action en cours, donc le present continuous.',
        hints: ['C\'est un mot qui signifie "maintenant"', 'Now !']
      },
      {
        id: 'q10',
        question: 'The students _____ in the classroom. (write)',
        type: 'fill-blank',
        correctAnswer: 'are writing',
        explanation: 'The students (pluriel) → are. Write + ING = writing (on double pas le e final, on le supprime).',
        hints: ['Students = they → are', 'Write perd le e avant ING']
      }
    ]
  },

  {
    id: 'en-6eme-002',
    title: 'Simple Past - Verbes réguliers',
    subject: 'anglais',
    level: '6ème',
    difficulty: 3,
    description: 'Apprends à conjuguer les verbes réguliers au passé simple en anglais (terminaison -ED).',
    estimatedTime: 18,
    skills: ['Grammar', 'Simple Past', 'Verbes réguliers'],
    questions: [
      {
        id: 'q1',
        question: 'Yesterday, I _____ my room. (clean)',
        type: 'fill-blank',
        correctAnswer: 'cleaned',
        explanation: 'Au simple past, les verbes réguliers prennent -ED. Clean → cleaned.',
        hints: ['Ajoute -ED', 'Clean + ED']
      },
      {
        id: 'q2',
        question: 'She _____ her grandmother last week. (visit)',
        type: 'fill-blank',
        correctAnswer: 'visited',
        explanation: 'Visit → visited. On ajoute -ED aux verbes réguliers.',
        hints: ['Verbe régulier + ED', 'Visit + ED']
      },
      {
        id: 'q3',
        question: 'They _____ basketball yesterday. (play)',
        type: 'fill-blank',
        correctAnswer: 'played',
        explanation: 'Play → played. Quand le verbe finit par une consonne + Y, on garde le Y et on ajoute -ED.',
        hints: ['Play + ED', 'Le Y reste']
      },
      {
        id: 'q4',
        question: 'Comment forme-t-on le simple past des verbes réguliers ?',
        type: 'multiple-choice',
        options: ['On ajoute -ING', 'On ajoute -ED', 'On ajoute -S', 'On ne change rien'],
        correctAnswer: 'On ajoute -ED',
        explanation: 'Les verbes réguliers au simple past prennent la terminaison -ED.',
        hints: ['C\'est une terminaison du passé', '-ED']
      },
      {
        id: 'q5',
        question: 'We _____ TV last night. (watch)',
        type: 'fill-blank',
        correctAnswer: 'watched',
        explanation: 'Watch → watched. Simple past régulier avec -ED.',
        hints: ['Watch + ED', 'Passé = -ED']
      },
      {
        id: 'q6',
        question: 'He _____ to school by bus. (travel)',
        type: 'fill-blank',
        correctAnswer: 'travelled',
        explanation: 'Travel → travelled. Quand un verbe finit par consonne-voyelle-consonne, on double la dernière consonne avant -ED.',
        hints: ['On double le L', 'Travel + L + ED']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : "Yesterday" est un indicateur du simple past.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Yesterday" (hier), "last week", "last year" indiquent le passé → simple past.',
        hints: ['Yesterday = hier', 'C\'est du passé']
      },
      {
        id: 'q8',
        question: 'I _____ my homework before dinner. (finish)',
        type: 'fill-blank',
        correctAnswer: 'finished',
        explanation: 'Finish → finished. On ajoute -ED.',
        hints: ['Finish + ED', 'Verbe régulier']
      },
      {
        id: 'q9',
        question: 'The movie _____ at 8 pm. (start)',
        type: 'fill-blank',
        correctAnswer: 'started',
        explanation: 'Start → started. Simple past régulier avec -ED.',
        hints: ['Start + ED', 'Action passée']
      },
      {
        id: 'q10',
        question: 'She _____ hard for the exam. (study)',
        type: 'fill-blank',
        correctAnswer: 'studied',
        explanation: 'Study → studied. Quand le verbe finit par consonne + Y, on change Y en I et on ajoute -ED.',
        hints: ['Y devient I', 'Study → studi + ED']
      }
    ]
  },

  {
    id: 'en-6eme-003',
    title: 'Vocabulary - Daily Routine',
    subject: 'anglais',
    level: '6ème',
    difficulty: 2,
    description: 'Apprends le vocabulaire de la routine quotidienne en anglais.',
    estimatedTime: 15,
    skills: ['Vocabulary', 'Daily life', 'Routine'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "se réveiller" en anglais ?',
        type: 'multiple-choice',
        options: ['Wake up', 'Get up', 'Sleep', 'Go to bed'],
        correctAnswer: 'Wake up',
        explanation: '"Wake up" signifie se réveiller. "Get up" signifie se lever.',
        hints: ['Wake = s\'éveiller', 'Wake up']
      },
      {
        id: 'q2',
        question: 'Que signifie "have breakfast" ?',
        type: 'multiple-choice',
        options: ['Faire ses devoirs', 'Prendre le petit-déjeuner', 'Aller se coucher', 'Prendre une douche'],
        correctAnswer: 'Prendre le petit-déjeuner',
        explanation: '"Have breakfast" = prendre le petit-déjeuner. Breakfast est le repas du matin.',
        hints: ['Breakfast = petit-déjeuner', 'Have = prendre/avoir']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "se brosser les dents" ?',
        type: 'fill-blank',
        correctAnswer: 'brush my teeth',
        explanation: '"Brush my teeth" = se brosser les dents. Brush = brosser, teeth = dents.',
        hints: ['Brush = brosser', 'Teeth = dents']
      },
      {
        id: 'q4',
        question: 'Que signifie "take a shower" ?',
        type: 'multiple-choice',
        options: ['Prendre un bain', 'Prendre une douche', 'Se maquiller', 'Se coiffer'],
        correctAnswer: 'Prendre une douche',
        explanation: '"Take a shower" = prendre une douche. Shower = douche.',
        hints: ['Shower = douche', 'Take = prendre']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "s\'habiller" en anglais ?',
        type: 'fill-blank',
        correctAnswer: 'get dressed',
        explanation: '"Get dressed" signifie s\'habiller. Dressed vient de dress = vêtement.',
        hints: ['Get + dressed', 'Dressed = habillé']
      },
      {
        id: 'q6',
        question: 'Que signifie "go to school" ?',
        type: 'multiple-choice',
        options: ['Aller au lit', 'Aller à l\'école', 'Rentrer à la maison', 'Faire du sport'],
        correctAnswer: 'Aller à l\'école',
        explanation: '"Go to school" = aller à l\'école. School = école.',
        hints: ['School = école', 'Go to = aller à']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : "Have lunch" signifie déjeuner.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Have lunch" = déjeuner (repas du midi). Lunch = déjeuner.',
        hints: ['Lunch = repas du midi', 'Have = prendre']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "faire ses devoirs" ?',
        type: 'fill-blank',
        correctAnswer: 'do homework',
        explanation: '"Do homework" = faire ses devoirs. Homework = devoirs (à la maison).',
        hints: ['Do = faire', 'Homework = devoirs']
      },
      {
        id: 'q9',
        question: 'Que signifie "go to bed" ?',
        type: 'multiple-choice',
        options: ['Se lever', 'Aller se coucher', 'Prendre un bain', 'Dîner'],
        correctAnswer: 'Aller se coucher',
        explanation: '"Go to bed" = aller se coucher. Bed = lit.',
        hints: ['Bed = lit', 'Go to = aller à']
      },
      {
        id: 'q10',
        question: 'Mets ces actions dans l\'ordre du matin : get dressed, wake up, have breakfast',
        type: 'multiple-choice',
        options: ['get dressed, wake up, have breakfast', 'wake up, have breakfast, get dressed', 'wake up, get dressed, have breakfast', 'have breakfast, wake up, get dressed'],
        correctAnswer: 'wake up, get dressed, have breakfast',
        explanation: 'L\'ordre logique est : se réveiller (wake up), s\'habiller (get dressed), puis petit-déjeuner (have breakfast).',
        hints: ['D\'abord on se réveille', 'Ensuite on s\'habille', 'Puis on mange']
      }
    ]
  },

  // ==================== HISTOIRE-GÉO ====================

  {
    id: 'hist-cm1-001',
    title: 'La Préhistoire',
    subject: 'histoire-geo',
    level: 'CM1',
    difficulty: 3,
    description: 'Les hommes préhistoriques',
    estimatedTime: 15,
    skills: ['Préhistoire', 'Histoire'],
    questions: [
      {
        id: 'q1',
        question: 'Comment s\'appelle le premier homme qui a domestiqué le feu ?',
        type: 'multiple-choice',
        options: ['Homo sapiens', 'Homo erectus', 'Cro-Magnon', 'Néandertal'],
        correctAnswer: 'Homo erectus',
        explanation: 'Homo erectus a été le premier à maîtriser le feu',
        hints: ['C\'est un homme ancien', 'Homo erectus']
      }
    ]
  },

  {
    id: 'geo-cm2-001',
    title: 'Les continents et les océans',
    subject: 'histoire-geo',
    level: 'CM2',
    difficulty: 3,
    description: 'Découvre et situe les 7 continents et les 5 océans sur la planète Terre.',
    estimatedTime: 18,
    skills: ['Géographie', 'Continents', 'Océans', 'Planisphère'],
    questions: [
      {
        id: 'q1',
        question: 'Combien y a-t-il de continents sur Terre ?',
        type: 'multiple-choice',
        options: ['5', '6', '7', '8'],
        correctAnswer: '7',
        explanation: 'Il y a 7 continents : Afrique, Amérique du Nord, Amérique du Sud, Antarctique, Asie, Europe et Océanie.',
        hints: ['Plus que 5', 'C\'est 7']
      },
      {
        id: 'q2',
        question: 'Quel est le plus grand continent du monde ?',
        type: 'multiple-choice',
        options: ['L\'Afrique', 'L\'Europe', 'L\'Asie', 'L\'Amérique du Nord'],
        correctAnswer: 'L\'Asie',
        explanation: 'L\'Asie est le plus grand continent. Elle couvre environ 30% des terres émergées et abrite plus de la moitié de la population mondiale.',
        hints: ['C\'est là où se trouvent la Chine et l\'Inde', 'Le plus peuplé aussi']
      },
      {
        id: 'q3',
        question: 'Combien d\'océans y a-t-il sur Terre ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: 'Il y a 5 océans : Pacifique, Atlantique, Indien, Arctique et Antarctique (ou Austral).',
        hints: ['C\'est un chiffre entre 4 et 6', 'Pacifique, Atlantique, Indien...']
      },
      {
        id: 'q4',
        question: 'Quel océan est le plus grand du monde ?',
        type: 'multiple-choice',
        options: ['L\'Atlantique', 'L\'Indien', 'Le Pacifique', 'L\'Arctique'],
        correctAnswer: 'Le Pacifique',
        explanation: 'Le Pacifique est le plus grand océan. Il couvre environ un tiers de la surface de la Terre !',
        hints: ['Il est entre l\'Asie et l\'Amérique', 'Son nom évoque le calme']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : L\'Europe et l\'Asie forment ensemble l\'Eurasie.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'Europe et l\'Asie sont sur la même masse continentale, souvent appelée Eurasie.',
        hints: ['Elles sont attachées', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'Sur quel continent se trouve la France ?',
        type: 'multiple-choice',
        options: ['L\'Afrique', 'L\'Europe', 'L\'Asie', 'L\'Amérique du Nord'],
        correctAnswer: 'L\'Europe',
        explanation: 'La France se trouve en Europe, dans sa partie occidentale.',
        hints: ['C\'est un continent proche', 'À l\'ouest']
      },
      {
        id: 'q7',
        question: 'Quel continent est situé au Pôle Sud ?',
        type: 'fill-blank',
        correctAnswer: 'Antarctique',
        explanation: 'L\'Antarctique est le continent situé au Pôle Sud. C\'est le plus froid et le moins peuplé de la planète.',
        hints: ['C\'est le continent le plus froid', 'Au sud, tout au sud']
      },
      {
        id: 'q8',
        question: 'Quel océan borde la côte ouest de l\'Afrique ?',
        type: 'multiple-choice',
        options: ['Le Pacifique', 'L\'Atlantique', 'L\'Indien', 'L\'Arctique'],
        correctAnswer: 'L\'Atlantique',
        explanation: 'L\'océan Atlantique borde la côte ouest de l\'Afrique et la côte est de l\'Amérique.',
        hints: ['Il sépare l\'Afrique de l\'Amérique', 'C\'est l\'Atlantique']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : L\'Australie fait partie du continent Océanie.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'Australie est le plus grand pays de l\'Océanie, qui comprend aussi de nombreuses îles du Pacifique.',
        hints: ['L\'Océanie = Australie + îles', 'C\'est vrai']
      },
      {
        id: 'q10',
        question: 'Quel continent est traversé par l\'équateur ?',
        type: 'multiple-choice',
        options: ['L\'Europe', 'L\'Antarctique', 'L\'Afrique', 'L\'Arctique'],
        correctAnswer: 'L\'Afrique',
        explanation: 'L\'équateur traverse l\'Afrique en son milieu, passant par des pays comme le Kenya, le Congo et le Gabon.',
        hints: ['C\'est un continent chaud', 'L\'équateur passe au milieu']
      }
    ]
  },

  {
    id: 'hist-cm2-001',
    title: 'Le Moyen Âge',
    subject: 'histoire-geo',
    level: 'CM2',
    difficulty: 4,
    description: 'Découvre la période du Moyen Âge : les seigneurs, les châteaux forts, les chevaliers et la vie quotidienne.',
    estimatedTime: 20,
    skills: ['Histoire', 'Moyen Âge', 'Société médiévale'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle période de l\'Histoire appelle-t-on le Moyen Âge ?',
        type: 'multiple-choice',
        options: ['De -3000 à 0', 'De 476 à 1492', 'De 1789 à 1900', 'De 1900 à 2000'],
        correctAnswer: 'De 476 à 1492',
        explanation: 'Le Moyen Âge s\'étend de 476 (chute de l\'Empire romain) à 1492 (découverte de l\'Amérique par Christophe Colomb).',
        hints: ['Entre l\'Antiquité et les Temps modernes', 'Environ 1000 ans']
      },
      {
        id: 'q2',
        question: 'Comment s\'appelle le chef d\'un domaine au Moyen Âge ?',
        type: 'fill-blank',
        correctAnswer: 'seigneur',
        explanation: 'Le seigneur est le maître d\'un domaine (la seigneurie). Il possède les terres et protège les paysans en échange de leur travail.',
        hints: ['Il habite dans un château', 'C\'est le maître des terres']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : Les châteaux forts servaient de protection contre les attaques.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les châteaux forts étaient des forteresses avec des murailles épaisses, des tours et des douves pour protéger le seigneur et ses sujets.',
        hints: ['Murailles, tours, douves...', 'C\'est vrai']
      },
      {
        id: 'q4',
        question: 'Comment s\'appelaient les guerriers à cheval au Moyen Âge ?',
        type: 'multiple-choice',
        options: ['Les soldats', 'Les chevaliers', 'Les gladiateurs', 'Les centurions'],
        correctAnswer: 'Les chevaliers',
        explanation: 'Les chevaliers étaient des guerriers nobles qui combattaient à cheval. Ils portaient une armure et suivaient un code d\'honneur.',
        hints: ['Ils portent une armure', 'Leur nom vient de "cheval"']
      },
      {
        id: 'q5',
        question: 'Comment s\'appelaient les paysans qui travaillaient les terres du seigneur ?',
        type: 'fill-blank',
        correctAnswer: 'serfs',
        explanation: 'Les serfs étaient des paysans attachés à la terre du seigneur. Ils n\'étaient pas libres de partir et devaient travailler pour lui.',
        hints: ['Ils n\'étaient pas libres', 'Ça commence par S']
      },
      {
        id: 'q6',
        question: 'Quel roi de France a été appelé "Saint Louis" ?',
        type: 'multiple-choice',
        options: ['Louis XIV', 'Louis IX', 'Charlemagne', 'Philippe Auguste'],
        correctAnswer: 'Louis IX',
        explanation: 'Louis IX (1214-1270) a été canonisé (déclaré saint) par l\'Église. Il était connu pour sa piété et sa justice.',
        hints: ['C\'est un Louis', 'Il a été déclaré saint']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : Charlemagne a créé des écoles pour instruire le peuple.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Charlemagne (742-814) a favorisé l\'éducation en créant des écoles dans les monastères et les cathédrales.',
        hints: ['Il voulait un peuple instruit', 'C\'est vrai']
      },
      {
        id: 'q8',
        question: 'Comment s\'appelle le fossé rempli d\'eau qui entoure un château fort ?',
        type: 'multiple-choice',
        options: ['Le rempart', 'La douve', 'Le donjon', 'La tour'],
        correctAnswer: 'La douve',
        explanation: 'Les douves sont des fossés remplis d\'eau qui entourent le château pour empêcher les ennemis d\'approcher.',
        hints: ['C\'est rempli d\'eau', 'Ça entoure le château']
      },
      {
        id: 'q9',
        question: 'Quel événement marque traditionnellement la fin du Moyen Âge ?',
        type: 'multiple-choice',
        options: ['La mort de Charlemagne', 'La découverte de l\'Amérique en 1492', 'La Révolution française', 'La construction de Notre-Dame'],
        correctAnswer: 'La découverte de l\'Amérique en 1492',
        explanation: 'La découverte de l\'Amérique par Christophe Colomb en 1492 marque conventionnellement la fin du Moyen Âge et le début des Temps modernes.',
        hints: ['C\'est en 1492', 'Christophe Colomb']
      },
      {
        id: 'q10',
        question: 'Quelle grande épidémie a frappé l\'Europe au Moyen Âge ?',
        type: 'fill-blank',
        correctAnswer: 'peste',
        explanation: 'La peste noire a ravagé l\'Europe au XIVe siècle (1347-1352), tuant environ un tiers de la population européenne.',
        hints: ['Une terrible maladie', 'On l\'appelle la ___ noire']
      }
    ]
  },

  {
    id: 'hist-cm2-002',
    title: 'Les Grandes Découvertes',
    subject: 'histoire-geo',
    level: 'CM2',
    difficulty: 4,
    description: 'Explore l\'époque des grandes explorations maritimes : Christophe Colomb, Magellan et la découverte de nouveaux continents.',
    estimatedTime: 18,
    skills: ['Histoire', 'Grandes découvertes', 'Explorateurs'],
    questions: [
      {
        id: 'q1',
        question: 'Qui a découvert l\'Amérique en 1492 ?',
        type: 'multiple-choice',
        options: ['Vasco de Gama', 'Christophe Colomb', 'Marco Polo', 'Magellan'],
        correctAnswer: 'Christophe Colomb',
        explanation: 'Christophe Colomb, navigateur génois au service de l\'Espagne, a atteint l\'Amérique le 12 octobre 1492.',
        hints: ['Il travaillait pour l\'Espagne', 'Il cherchait les Indes']
      },
      {
        id: 'q2',
        question: 'Que cherchait Christophe Colomb en partant vers l\'ouest ?',
        type: 'multiple-choice',
        options: ['L\'Afrique', 'L\'Australie', 'Les Indes', 'Le Pôle Nord'],
        correctAnswer: 'Les Indes',
        explanation: 'Colomb voulait atteindre les Indes en passant par l\'ouest. Il pensait que la Terre était ronde (et il avait raison !).',
        hints: ['Il voulait trouver des épices', 'Il a appelé les habitants "Indiens"']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : Magellan a réalisé le premier tour du monde.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'expédition de Magellan (1519-1522) a été la première à faire le tour du monde, prouvant que la Terre est ronde.',
        hints: ['Son expédition a fait le tour complet', 'C\'est vrai']
      },
      {
        id: 'q4',
        question: 'Comment s\'appelaient les trois bateaux de Christophe Colomb ?',
        type: 'multiple-choice',
        options: ['Le Titanic, le France, le Normandie', 'La Niña, la Pinta, la Santa María', 'Le Victory, le Neptune, le Bounty', 'Le Mayflower, le Beagle, le Endeavour'],
        correctAnswer: 'La Niña, la Pinta, la Santa María',
        explanation: 'Colomb est parti avec trois caravelles : la Niña, la Pinta et la Santa María.',
        hints: ['Des noms espagnols', 'Trois bateaux']
      },
      {
        id: 'q5',
        question: 'Quel navigateur portugais a trouvé la route des Indes par l\'est ?',
        type: 'fill-blank',
        correctAnswer: 'Vasco de Gama',
        explanation: 'Vasco de Gama a contourné l\'Afrique et atteint les Indes en 1498, ouvrant une route maritime vers l\'Asie.',
        hints: ['Un Portugais', 'Il a contourné l\'Afrique']
      },
      {
        id: 'q6',
        question: 'Pourquoi les Européens voulaient-ils atteindre les Indes ?',
        type: 'multiple-choice',
        options: ['Pour trouver de l\'or uniquement', 'Pour les épices et le commerce', 'Pour les vacances', 'Pour fuir l\'Europe'],
        correctAnswer: 'Pour les épices et le commerce',
        explanation: 'Les épices (poivre, cannelle, muscade) valaient très cher en Europe. Les Européens voulaient commercer directement avec l\'Asie.',
        hints: ['Les épices coûtaient cher', 'C\'était pour le commerce']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : Amerigo Vespucci a donné son nom à l\'Amérique.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le continent a été nommé "America" en l\'honneur du navigateur florentin Amerigo Vespucci, qui a compris que c\'était un nouveau continent.',
        hints: ['Son prénom ressemble à "Amérique"', 'C\'est vrai']
      },
      {
        id: 'q8',
        question: 'Quel pays a financé le voyage de Christophe Colomb ?',
        type: 'multiple-choice',
        options: ['Le Portugal', 'L\'Angleterre', 'L\'Espagne', 'La France'],
        correctAnswer: 'L\'Espagne',
        explanation: 'La reine Isabelle de Castille et le roi Ferdinand d\'Aragon ont financé l\'expédition de Colomb.',
        hints: ['Les rois catholiques', 'C\'est un pays ibérique']
      },
      {
        id: 'q9',
        question: 'Comment s\'appelle le détroit découvert par Magellan au sud de l\'Amérique ?',
        type: 'fill-blank',
        correctAnswer: 'Magellan',
        explanation: 'Le détroit de Magellan, au sud du Chili, permet de passer de l\'Atlantique au Pacifique.',
        hints: ['Il porte son nom', 'C\'est le détroit de ___']
      },
      {
        id: 'q10',
        question: 'Quelle conséquence négative les Grandes Découvertes ont-elles eue sur les peuples autochtones ?',
        type: 'multiple-choice',
        options: ['Ils sont devenus très riches', 'Maladies, esclavage et colonisation', 'Ils ont tous émigré en Europe', 'Aucune conséquence'],
        correctAnswer: 'Maladies, esclavage et colonisation',
        explanation: 'Les Grandes Découvertes ont eu des conséquences dramatiques : maladies européennes, esclavage et colonisation ont décimé les populations autochtones.',
        hints: ['Ce n\'était pas positif pour eux', 'Maladies et exploitation']
      }
    ]
  },

  {
    id: 'hist-6eme-001',
    title: 'L\'Égypte antique',
    subject: 'histoire-geo',
    level: '6ème',
    difficulty: 3,
    description: 'Découvre la civilisation égyptienne : pharaons, pyramides, hiéroglyphes et croyances.',
    estimatedTime: 20,
    skills: ['Antiquité', 'Égypte', 'Civilisations'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle civilisation a construit les pyramides de Gizeh ?',
        type: 'multiple-choice',
        options: ['Les Grecs', 'Les Romains', 'Les Égyptiens', 'Les Mésopotamiens'],
        correctAnswer: 'Les Égyptiens',
        explanation: 'Les pyramides de Gizeh ont été construites par les Égyptiens anciens, il y a environ 4500 ans.',
        hints: ['C\'est en Afrique', 'Sur les bords du Nil']
      },
      {
        id: 'q2',
        question: 'Comment s\'appelle le roi d\'Égypte ?',
        type: 'fill-blank',
        correctAnswer: 'pharaon',
        explanation: 'Le pharaon était le roi d\'Égypte. Il était considéré comme un dieu vivant.',
        hints: ['Ça commence par P', 'Pharaon']
      },
      {
        id: 'q3',
        question: 'Quel fleuve traverse l\'Égypte ?',
        type: 'multiple-choice',
        options: ['Le Tigre', 'L\'Euphrate', 'Le Nil', 'Le Congo'],
        correctAnswer: 'Le Nil',
        explanation: 'Le Nil est le plus long fleuve d\'Afrique. Il a permis à la civilisation égyptienne de prospérer.',
        hints: ['C\'est un fleuve africain', 'Le Nil']
      },
      {
        id: 'q4',
        question: 'Comment s\'appelle l\'écriture égyptienne ?',
        type: 'multiple-choice',
        options: ['L\'alphabet', 'Les cunéiformes', 'Les hiéroglyphes', 'Les idéogrammes'],
        correctAnswer: 'Les hiéroglyphes',
        explanation: 'Les hiéroglyphes sont l\'écriture sacrée des Égyptiens, composée de dessins et de symboles.',
        hints: ['Ce sont des dessins', 'Hiéro = sacré']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Les Égyptiens croyaient en la vie après la mort.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les Égyptiens momifiaient leurs morts et plaçaient des objets dans les tombes pour la vie dans l\'au-delà.',
        hints: ['Pense aux momies', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'Quel est le nom du dieu du soleil chez les Égyptiens ?',
        type: 'multiple-choice',
        options: ['Osiris', 'Anubis', 'Rê (ou Ra)', 'Isis'],
        correctAnswer: 'Rê (ou Ra)',
        explanation: 'Rê (ou Ra) est le dieu du soleil, l\'un des dieux les plus importants de l\'Égypte ancienne.',
        hints: ['C\'est le dieu soleil', 'Rê ou Ra']
      },
      {
        id: 'q7',
        question: 'Qu\'est-ce qu\'une momie ?',
        type: 'multiple-choice',
        options: ['Un pharaon vivant', 'Un corps conservé après la mort', 'Un temple égyptien', 'Un bateau du Nil'],
        correctAnswer: 'Un corps conservé après la mort',
        explanation: 'Une momie est un corps préservé par un processus d\'embaumement pour la vie après la mort.',
        hints: ['C\'est lié aux morts', 'Le corps est conservé']
      },
      {
        id: 'q8',
        question: 'Comment s\'appelle le monument mi-homme mi-lion de Gizeh ?',
        type: 'fill-blank',
        correctAnswer: 'sphinx',
        explanation: 'Le Sphinx de Gizeh a un corps de lion et une tête humaine. Il garde les pyramides.',
        hints: ['Corps de lion, tête humaine', 'Le Sphinx']
      },
      {
        id: 'q9',
        question: 'Quel pharaon est célèbre pour son tombeau découvert intact en 1922 ?',
        type: 'multiple-choice',
        options: ['Ramsès II', 'Khéops', 'Toutânkhamon', 'Cléopâtre'],
        correctAnswer: 'Toutânkhamon',
        explanation: 'Le tombeau de Toutânkhamon a été découvert par Howard Carter en 1922. Il contenait des trésors fabuleux.',
        hints: ['Un jeune pharaon', 'Toutânkhamon']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : Cléopâtre était une reine égyptienne.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Cléopâtre VII fut la dernière reine d\'Égypte avant que le pays ne devienne romain.',
        hints: ['Elle a régné sur l\'Égypte', 'C\'est vrai']
      }
    ]
  },

  {
    id: 'hist-6eme-002',
    title: 'La Grèce antique',
    subject: 'histoire-geo',
    level: '6ème',
    difficulty: 3,
    description: 'Découvre la civilisation grecque : cités, démocratie, mythologie et héritage culturel.',
    estimatedTime: 20,
    skills: ['Antiquité', 'Grèce', 'Démocratie'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle cité grecque est considérée comme le berceau de la démocratie ?',
        type: 'multiple-choice',
        options: ['Sparte', 'Athènes', 'Thèbes', 'Corinthe'],
        correctAnswer: 'Athènes',
        explanation: 'Athènes est le berceau de la démocratie. Les citoyens y votaient les lois et élisaient leurs dirigeants.',
        hints: ['C\'est la capitale actuelle', 'Athènes']
      },
      {
        id: 'q2',
        question: 'Quel est le roi des dieux grecs ?',
        type: 'fill-blank',
        correctAnswer: 'Zeus',
        explanation: 'Zeus est le roi des dieux de l\'Olympe. Il est le dieu du ciel et de la foudre.',
        hints: ['Il lance la foudre', 'Zeus']
      },
      {
        id: 'q3',
        question: 'Comment s\'appelle le temple dédié à Athéna sur l\'Acropole ?',
        type: 'multiple-choice',
        options: ['Le Colisée', 'Le Parthénon', 'Le Panthéon', 'L\'Agora'],
        correctAnswer: 'Le Parthénon',
        explanation: 'Le Parthénon est un temple dédié à la déesse Athéna, protectrice de la cité d\'Athènes.',
        hints: ['Sur l\'Acropole', 'Le Parthénon']
      },
      {
        id: 'q4',
        question: 'Quels jeux sportifs ont été inventés par les Grecs ?',
        type: 'multiple-choice',
        options: ['Les Jeux du Commonwealth', 'Les Jeux Olympiques', 'La Coupe du Monde', 'Les Jeux Panaméricains'],
        correctAnswer: 'Les Jeux Olympiques',
        explanation: 'Les Jeux Olympiques ont été créés à Olympie en 776 av. J.-C. en l\'honneur de Zeus.',
        hints: ['Ils ont lieu tous les 4 ans', 'Olympiques']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : À Sparte, les garçons étaient formés dès 7 ans pour devenir soldats.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Sparte était une cité guerrière où les garçons recevaient une formation militaire très stricte.',
        hints: ['Sparte = guerriers', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'Comment s\'appelle le héros grec qui a accompli 12 travaux ?',
        type: 'fill-blank',
        correctAnswer: 'Héraclès',
        explanation: 'Héraclès (ou Hercule chez les Romains) a accompli 12 travaux pour expier un crime.',
        hints: ['Il était très fort', 'Héraclès']
      },
      {
        id: 'q7',
        question: 'Quelle était la fonction de l\'Agora dans une cité grecque ?',
        type: 'multiple-choice',
        options: ['Un temple religieux', 'Une place publique pour le commerce et les débats', 'Une forteresse militaire', 'Un théâtre'],
        correctAnswer: 'Une place publique pour le commerce et les débats',
        explanation: 'L\'Agora était le cœur de la cité : on y faisait du commerce et on y discutait politique.',
        hints: ['C\'est une place publique', 'Commerce et débats']
      },
      {
        id: 'q8',
        question: 'Quel philosophe grec a été le maître d\'Alexandre le Grand ?',
        type: 'multiple-choice',
        options: ['Socrate', 'Platon', 'Aristote', 'Pythagore'],
        correctAnswer: 'Aristote',
        explanation: 'Aristote a été le précepteur d\'Alexandre le Grand. Il fut l\'un des plus grands philosophes grecs.',
        hints: ['Il a fondé le Lycée', 'Aristote']
      },
      {
        id: 'q9',
        question: 'Comment s\'appelle la guerre entre Athènes et Sparte ?',
        type: 'multiple-choice',
        options: ['Les guerres médiques', 'La guerre du Péloponnèse', 'La guerre de Troie', 'Les guerres puniques'],
        correctAnswer: 'La guerre du Péloponnèse',
        explanation: 'La guerre du Péloponnèse (431-404 av. J.-C.) opposa Athènes à Sparte pour la domination de la Grèce.',
        hints: ['Entre deux cités grecques', 'Péloponnèse']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : Les femmes athéniennes avaient le droit de vote.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Seuls les citoyens hommes libres pouvaient voter. Les femmes, les esclaves et les étrangers étaient exclus.',
        hints: ['La démocratie était limitée', 'C\'est faux']
      }
    ]
  },

  {
    id: 'geo-6eme-001',
    title: 'Se repérer sur la Terre',
    subject: 'histoire-geo',
    level: '6ème',
    difficulty: 3,
    description: 'Apprends à te repérer sur la Terre : continents, océans, lignes imaginaires et coordonnées.',
    estimatedTime: 18,
    skills: ['Géographie', 'Repères', 'Coordonnées'],
    questions: [
      {
        id: 'q1',
        question: 'Combien y a-t-il de continents sur Terre ?',
        type: 'multiple-choice',
        options: ['5', '6', '7', '8'],
        correctAnswer: '7',
        explanation: 'Il y a 7 continents : Afrique, Amérique du Nord, Amérique du Sud, Antarctique, Asie, Europe et Océanie.',
        hints: ['Plus que 5', 'C\'est 7']
      },
      {
        id: 'q2',
        question: 'Comment s\'appelle la ligne imaginaire qui sépare la Terre en deux hémisphères ?',
        type: 'fill-blank',
        correctAnswer: 'équateur',
        explanation: 'L\'équateur est la ligne imaginaire qui divise la Terre en hémisphère Nord et hémisphère Sud.',
        hints: ['Elle est au milieu', 'L\'équateur']
      },
      {
        id: 'q3',
        question: 'Quel est le plus grand océan du monde ?',
        type: 'multiple-choice',
        options: ['L\'Atlantique', 'L\'Indien', 'Le Pacifique', 'L\'Arctique'],
        correctAnswer: 'Le Pacifique',
        explanation: 'Le Pacifique est le plus grand et le plus profond des océans. Il couvre un tiers de la surface de la Terre.',
        hints: ['Entre l\'Asie et l\'Amérique', 'Le Pacifique']
      },
      {
        id: 'q4',
        question: 'Qu\'est-ce que la latitude ?',
        type: 'multiple-choice',
        options: ['La distance par rapport à l\'équateur (Nord-Sud)', 'La distance par rapport au méridien de Greenwich (Est-Ouest)', 'L\'altitude d\'un lieu', 'La température d\'un lieu'],
        correctAnswer: 'La distance par rapport à l\'équateur (Nord-Sud)',
        explanation: 'La latitude mesure la position Nord ou Sud par rapport à l\'équateur, de 0° à 90°.',
        hints: ['Nord-Sud', 'Par rapport à l\'équateur']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Le méridien de Greenwich passe par Londres.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le méridien de Greenwich (longitude 0°) passe par l\'observatoire de Greenwich à Londres.',
        hints: ['C\'est en Angleterre', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'Quel continent est situé au pôle Sud ?',
        type: 'fill-blank',
        correctAnswer: 'Antarctique',
        explanation: 'L\'Antarctique est le continent situé au pôle Sud. C\'est le plus froid et le plus désert.',
        hints: ['Au pôle Sud', 'C\'est gelé']
      },
      {
        id: 'q7',
        question: 'Combien y a-t-il d\'océans sur Terre ?',
        type: 'multiple-choice',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        explanation: 'Il y a 5 océans : Pacifique, Atlantique, Indien, Arctique et Antarctique (ou Austral).',
        hints: ['Plus que 4', 'C\'est 5']
      },
      {
        id: 'q8',
        question: 'Quel est le plus petit continent ?',
        type: 'multiple-choice',
        options: ['L\'Europe', 'L\'Océanie', 'L\'Antarctique', 'L\'Amérique du Sud'],
        correctAnswer: 'L\'Océanie',
        explanation: 'L\'Océanie est le plus petit continent. Elle comprend l\'Australie et de nombreuses îles du Pacifique.',
        hints: ['Avec l\'Australie', 'L\'Océanie']
      },
      {
        id: 'q9',
        question: 'Qu\'est-ce que la longitude ?',
        type: 'multiple-choice',
        options: ['La distance par rapport à l\'équateur', 'La distance par rapport au méridien de Greenwich (Est-Ouest)', 'La hauteur d\'un relief', 'La profondeur de l\'océan'],
        correctAnswer: 'La distance par rapport au méridien de Greenwich (Est-Ouest)',
        explanation: 'La longitude mesure la position Est ou Ouest par rapport au méridien de Greenwich, de 0° à 180°.',
        hints: ['Est-Ouest', 'Par rapport à Greenwich']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : L\'Asie est le plus grand continent du monde.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'Asie est le plus grand continent (30% des terres) et le plus peuplé (60% de la population mondiale).',
        hints: ['C\'est immense', 'C\'est vrai']
      }
    ]
  },

  // ==================== 5ÈME - MATHÉMATIQUES ====================

  {
    id: 'math-5eme-001',
    title: 'Les nombres relatifs - Opérations',
    subject: 'maths',
    level: '5ème',
    difficulty: 3,
    description: 'Maîtrise les additions et soustractions de nombres relatifs.',
    estimatedTime: 20,
    skills: ['Nombres relatifs', 'Calcul', 'Opérations'],
    questions: [
      {
        id: 'q1',
        question: 'Calcule : (-5) + (+3) = ?',
        type: 'fill-blank',
        correctAnswer: '-2',
        explanation: '(-5) + (+3) = -5 + 3 = -2. On ajoute 3 à -5, donc on "remonte" de 3 sur la droite graduée.',
        hints: ['Pense à la droite graduée', 'De -5, avance de 3']
      },
      {
        id: 'q2',
        question: 'Calcule : (+7) + (-10) = ?',
        type: 'fill-blank',
        correctAnswer: '-3',
        explanation: '(+7) + (-10) = 7 - 10 = -3. On recule de 10 depuis 7.',
        hints: ['7 - 10 = ?', 'Le résultat est négatif']
      },
      {
        id: 'q3',
        question: 'Calcule : (-8) - (-3) = ?',
        type: 'fill-blank',
        correctAnswer: '-5',
        explanation: '(-8) - (-3) = -8 + 3 = -5. Soustraire un négatif revient à ajouter son opposé.',
        hints: ['Moins fois moins = plus', '-8 + 3 = ?']
      },
      {
        id: 'q4',
        question: 'Quel est l\'opposé de -7 ?',
        type: 'multiple-choice',
        options: ['-7', '7', '0', '1/7'],
        correctAnswer: '7',
        explanation: 'L\'opposé de -7 est +7. Deux nombres opposés ont la même valeur absolue mais des signes contraires.',
        hints: ['L\'opposé a le signe contraire', 'C\'est positif']
      },
      {
        id: 'q5',
        question: 'Calcule : (-4) + (-6) = ?',
        type: 'fill-blank',
        correctAnswer: '-10',
        explanation: '(-4) + (-6) = -10. Quand on additionne deux négatifs, on additionne les valeurs et on garde le signe moins.',
        hints: ['Deux négatifs', '4 + 6 = 10, avec le signe -']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : (-3) × (-2) = +6',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le produit de deux nombres négatifs est positif. (-3) × (-2) = +6.',
        hints: ['Moins fois moins = ?', 'C\'est positif']
      },
      {
        id: 'q7',
        question: 'Calcule : (+5) - (+9) = ?',
        type: 'fill-blank',
        correctAnswer: '-4',
        explanation: '(+5) - (+9) = 5 - 9 = -4. On soustrait 9 de 5.',
        hints: ['5 - 9 = ?', 'Le résultat est négatif']
      },
      {
        id: 'q8',
        question: 'Range ces nombres du plus petit au plus grand : -3, 5, -7, 0',
        type: 'multiple-choice',
        options: ['-7, -3, 0, 5', '-3, -7, 0, 5', '5, 0, -3, -7', '0, -3, -7, 5'],
        correctAnswer: '-7, -3, 0, 5',
        explanation: 'Sur la droite graduée : -7 < -3 < 0 < 5. Plus un nombre négatif est "grand" en valeur absolue, plus il est petit.',
        hints: ['Les négatifs sont à gauche de 0', '-7 est plus petit que -3']
      },
      {
        id: 'q9',
        question: 'Calcule : (-2) × (+5) = ?',
        type: 'fill-blank',
        correctAnswer: '-10',
        explanation: '(-2) × (+5) = -10. Le produit d\'un négatif et d\'un positif est négatif.',
        hints: ['Moins fois plus = moins', '2 × 5 = 10 avec le signe -']
      },
      {
        id: 'q10',
        question: 'Calcule : (+12) ÷ (-4) = ?',
        type: 'fill-blank',
        correctAnswer: '-3',
        explanation: '(+12) ÷ (-4) = -3. Un positif divisé par un négatif donne un négatif.',
        hints: ['12 ÷ 4 = 3', 'Plus divisé par moins = moins']
      }
    ]
  },

  {
    id: 'math-5eme-002',
    title: 'Les fractions - Comparaison et opérations',
    subject: 'maths',
    level: '5ème',
    difficulty: 3,
    description: 'Apprends à comparer, additionner et soustraire des fractions.',
    estimatedTime: 20,
    skills: ['Fractions', 'Calcul', 'Comparaison'],
    questions: [
      {
        id: 'q1',
        question: 'Calcule : 1/4 + 2/4 = ?',
        type: 'multiple-choice',
        options: ['3/4', '3/8', '2/4', '1/2'],
        correctAnswer: '3/4',
        explanation: 'Quand les dénominateurs sont identiques, on additionne les numérateurs : 1/4 + 2/4 = 3/4.',
        hints: ['Même dénominateur', '1 + 2 = 3']
      },
      {
        id: 'q2',
        question: 'Quelle fraction est équivalente à 2/3 ?',
        type: 'multiple-choice',
        options: ['4/6', '3/4', '2/6', '4/9'],
        correctAnswer: '4/6',
        explanation: '2/3 = 4/6. On multiplie numérateur et dénominateur par 2 : (2×2)/(3×2) = 4/6.',
        hints: ['Multiplie par 2', '2×2 = 4, 3×2 = 6']
      },
      {
        id: 'q3',
        question: 'Calcule : 1/2 + 1/3 = ?',
        type: 'multiple-choice',
        options: ['2/5', '5/6', '2/6', '1/5'],
        correctAnswer: '5/6',
        explanation: 'On met au même dénominateur (6) : 1/2 = 3/6 et 1/3 = 2/6. Donc 3/6 + 2/6 = 5/6.',
        hints: ['Trouve un dénominateur commun', '6 est divisible par 2 et 3']
      },
      {
        id: 'q4',
        question: 'Compare : 3/5 et 2/3. Laquelle est la plus grande ?',
        type: 'multiple-choice',
        options: ['3/5', '2/3', 'Elles sont égales', 'On ne peut pas comparer'],
        correctAnswer: '2/3',
        explanation: 'Même dénominateur (15) : 3/5 = 9/15 et 2/3 = 10/15. Donc 2/3 > 3/5.',
        hints: ['Mets au même dénominateur', '15 est le PPCM de 5 et 3']
      },
      {
        id: 'q5',
        question: 'Calcule : 5/6 - 1/3 = ?',
        type: 'multiple-choice',
        options: ['4/3', '1/2', '2/3', '4/6'],
        correctAnswer: '1/2',
        explanation: '1/3 = 2/6. Donc 5/6 - 2/6 = 3/6 = 1/2 (simplifié).',
        hints: ['Convertis 1/3 en sixièmes', '3/6 se simplifie']
      },
      {
        id: 'q6',
        question: 'Simplifie la fraction 12/18.',
        type: 'multiple-choice',
        options: ['6/9', '4/6', '2/3', '3/4'],
        correctAnswer: '2/3',
        explanation: '12/18 = 12÷6 / 18÷6 = 2/3. On divise par le PGCD (6).',
        hints: ['Trouve le PGCD de 12 et 18', 'C\'est 6']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : 3/4 > 5/8',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 3/4 = 6/8 et 6/8 > 5/8.',
        hints: ['Convertis en huitièmes', '3/4 = 6/8']
      },
      {
        id: 'q8',
        question: 'Calcule : 2/5 × 3 = ?',
        type: 'multiple-choice',
        options: ['6/5', '5/5', '2/15', '6/15'],
        correctAnswer: '6/5',
        explanation: '2/5 × 3 = (2×3)/5 = 6/5. On multiplie le numérateur par 3.',
        hints: ['Multiplie le numérateur', '2 × 3 = 6']
      },
      {
        id: 'q9',
        question: 'Quelle est la forme irréductible de 8/12 ?',
        type: 'fill-blank',
        correctAnswer: '2/3',
        explanation: '8/12 = 8÷4 / 12÷4 = 2/3. Le PGCD de 8 et 12 est 4.',
        hints: ['Divise par 4', '8÷4 = 2, 12÷4 = 3']
      },
      {
        id: 'q10',
        question: 'Calcule : 3/4 + 1/6 = ?',
        type: 'multiple-choice',
        options: ['4/10', '11/12', '7/12', '5/6'],
        correctAnswer: '11/12',
        explanation: 'Dénominateur commun 12 : 3/4 = 9/12, 1/6 = 2/12. Donc 9/12 + 2/12 = 11/12.',
        hints: ['PPCM de 4 et 6 = 12', '9 + 2 = 11']
      }
    ]
  },

  {
    id: 'math-5eme-003',
    title: 'Proportionnalité et pourcentages',
    subject: 'maths',
    level: '5ème',
    difficulty: 3,
    description: 'Comprends la proportionnalité et calcule des pourcentages.',
    estimatedTime: 20,
    skills: ['Proportionnalité', 'Pourcentages', 'Calcul'],
    questions: [
      {
        id: 'q1',
        question: 'Un article coûte 80€. Il est soldé à -25%. Quel est le prix soldé ?',
        type: 'fill-blank',
        correctAnswer: '60',
        explanation: '25% de 80 = 80 × 0,25 = 20€. Prix soldé = 80 - 20 = 60€.',
        hints: ['Calcule 25% de 80', '80 - 20 = ?']
      },
      {
        id: 'q2',
        question: 'Si 3 croissants coûtent 2,70€, combien coûtent 5 croissants ?',
        type: 'fill-blank',
        correctAnswer: '4,50',
        explanation: 'Prix unitaire : 2,70 ÷ 3 = 0,90€. Pour 5 : 0,90 × 5 = 4,50€.',
        hints: ['Calcule le prix d\'un croissant', '0,90 × 5 = ?']
      },
      {
        id: 'q3',
        question: 'Que représente 50% ?',
        type: 'multiple-choice',
        options: ['Un quart', 'Un tiers', 'La moitié', 'Les trois quarts'],
        correctAnswer: 'La moitié',
        explanation: '50% = 50/100 = 1/2 = la moitié.',
        hints: ['50 sur 100', 'C\'est la moitié']
      },
      {
        id: 'q4',
        question: 'Calcule 20% de 150.',
        type: 'fill-blank',
        correctAnswer: '30',
        explanation: '20% de 150 = 150 × 20/100 = 150 × 0,2 = 30.',
        hints: ['20/100 = 0,2', '150 × 0,2 = ?']
      },
      {
        id: 'q5',
        question: 'Une recette pour 4 personnes demande 200g de farine. Quelle quantité pour 6 personnes ?',
        type: 'fill-blank',
        correctAnswer: '300',
        explanation: 'Pour 1 personne : 200 ÷ 4 = 50g. Pour 6 : 50 × 6 = 300g.',
        hints: ['Calcule pour 1 personne', '50 × 6 = ?']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : Ce tableau est proportionnel : x = 2, 4, 6 et y = 6, 12, 18',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le coefficient est constant : 6/2 = 12/4 = 18/6 = 3.',
        hints: ['Vérifie si y/x est constant', '6÷2 = 12÷4 = 18÷6 = 3']
      },
      {
        id: 'q7',
        question: 'Un prix passe de 40€ à 50€. Quel est le pourcentage d\'augmentation ?',
        type: 'multiple-choice',
        options: ['10%', '20%', '25%', '50%'],
        correctAnswer: '25%',
        explanation: 'Augmentation : 50 - 40 = 10€. Pourcentage : 10/40 × 100 = 25%.',
        hints: ['L\'augmentation est de 10€', '10/40 = 0,25 = 25%']
      },
      {
        id: 'q8',
        question: 'Calcule 75% de 200.',
        type: 'fill-blank',
        correctAnswer: '150',
        explanation: '75% de 200 = 200 × 0,75 = 150. Ou : 200 × 3/4 = 150.',
        hints: ['75% = 3/4', '200 × 3 ÷ 4 = ?']
      },
      {
        id: 'q9',
        question: 'Dans une classe de 25 élèves, 60% sont des filles. Combien y a-t-il de filles ?',
        type: 'fill-blank',
        correctAnswer: '15',
        explanation: '60% de 25 = 25 × 0,6 = 15 filles.',
        hints: ['60% = 0,6', '25 × 0,6 = ?']
      },
      {
        id: 'q10',
        question: 'Si 8 stylos coûtent 12€, combien coûtent 12 stylos ?',
        type: 'fill-blank',
        correctAnswer: '18',
        explanation: 'Coefficient : 12/8 = 1,5€ par stylo. Pour 12 : 12 × 1,5 = 18€.',
        hints: ['Calcule le prix d\'un stylo', '1,5 × 12 = ?']
      }
    ]
  },

  // ==================== 5ÈME - SCIENCES ====================

  {
    id: 'sci-5eme-001',
    title: 'La digestion',
    subject: 'sciences',
    level: '5ème',
    difficulty: 3,
    description: 'Comprends le fonctionnement de l\'appareil digestif et la transformation des aliments.',
    estimatedTime: 18,
    skills: ['Biologie', 'Digestion', 'Corps humain'],
    questions: [
      {
        id: 'q1',
        question: 'Par quel organe commence la digestion ?',
        type: 'multiple-choice',
        options: ['L\'estomac', 'La bouche', 'L\'intestin grêle', 'Le foie'],
        correctAnswer: 'La bouche',
        explanation: 'La digestion commence dans la bouche avec la mastication et la salive qui contient des enzymes.',
        hints: ['C\'est là qu\'on mâche', 'La bouche']
      },
      {
        id: 'q2',
        question: 'Quel est le rôle de l\'estomac dans la digestion ?',
        type: 'multiple-choice',
        options: ['Absorber les nutriments', 'Broyer et mélanger les aliments avec les sucs gastriques', 'Produire la bile', 'Éliminer les déchets'],
        correctAnswer: 'Broyer et mélanger les aliments avec les sucs gastriques',
        explanation: 'L\'estomac brasse les aliments et les mélange aux sucs gastriques acides pour les transformer en bouillie (chyme).',
        hints: ['C\'est une poche musclée', 'Il produit de l\'acide']
      },
      {
        id: 'q3',
        question: 'Où se fait principalement l\'absorption des nutriments ?',
        type: 'multiple-choice',
        options: ['Dans l\'estomac', 'Dans la bouche', 'Dans l\'intestin grêle', 'Dans le gros intestin'],
        correctAnswer: 'Dans l\'intestin grêle',
        explanation: 'L\'intestin grêle, avec ses villosités, absorbe la majorité des nutriments vers le sang.',
        hints: ['C\'est un long tube de 6-7 mètres', 'Intestin grêle']
      },
      {
        id: 'q4',
        question: 'Quel organe produit la bile ?',
        type: 'fill-blank',
        correctAnswer: 'foie',
        explanation: 'Le foie produit la bile, stockée dans la vésicule biliaire, qui aide à digérer les graisses.',
        hints: ['C\'est le plus gros organe interne', 'Le foie']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : La salive contient des enzymes qui commencent à digérer les glucides.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! La salive contient l\'amylase salivaire qui commence à décomposer l\'amidon en sucres.',
        hints: ['Pense au pain qui devient sucré quand on le mâche', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'Comment s\'appelle le tube qui relie la bouche à l\'estomac ?',
        type: 'fill-blank',
        correctAnswer: 'œsophage',
        explanation: 'L\'œsophage est le tube musculaire qui conduit les aliments de la bouche à l\'estomac par des contractions.',
        hints: ['Ça commence par O', 'L\'œsophage']
      },
      {
        id: 'q7',
        question: 'Quel est le rôle du gros intestin ?',
        type: 'multiple-choice',
        options: ['Digérer les protéines', 'Absorber l\'eau et former les selles', 'Produire des enzymes', 'Stocker la bile'],
        correctAnswer: 'Absorber l\'eau et former les selles',
        explanation: 'Le gros intestin (côlon) absorbe l\'eau restante et transforme les déchets en selles.',
        hints: ['Il vient après l\'intestin grêle', 'Il forme les excréments']
      },
      {
        id: 'q8',
        question: 'Quel organe produit l\'insuline pour réguler le sucre dans le sang ?',
        type: 'multiple-choice',
        options: ['Le foie', 'L\'estomac', 'Le pancréas', 'La rate'],
        correctAnswer: 'Le pancréas',
        explanation: 'Le pancréas produit l\'insuline et des enzymes digestives. Il a un double rôle.',
        hints: ['C\'est une glande près de l\'estomac', 'Le pancréas']
      },
      {
        id: 'q9',
        question: 'Qu\'est-ce qu\'une enzyme digestive ?',
        type: 'multiple-choice',
        options: ['Un nutriment', 'Une substance qui accélère la digestion chimique', 'Un déchet', 'Un muscle'],
        correctAnswer: 'Une substance qui accélère la digestion chimique',
        explanation: 'Les enzymes sont des protéines qui accélèrent les réactions chimiques, ici la décomposition des aliments.',
        hints: ['C\'est comme un catalyseur', 'Elle accélère les réactions']
      },
      {
        id: 'q10',
        question: 'Combien de temps environ met un aliment pour traverser tout le tube digestif ?',
        type: 'multiple-choice',
        options: ['1 à 2 heures', '6 à 8 heures', '24 à 72 heures', '1 semaine'],
        correctAnswer: '24 à 72 heures',
        explanation: 'La digestion complète prend 24 à 72 heures selon les aliments. L\'estomac se vide en 4-6h, mais le gros intestin prend plus de temps.',
        hints: ['C\'est plus d\'une journée', '1 à 3 jours']
      }
    ]
  },

  {
    id: 'sci-5eme-002',
    title: 'La respiration et les échanges gazeux',
    subject: 'sciences',
    level: '5ème',
    difficulty: 3,
    description: 'Comprends le fonctionnement de l\'appareil respiratoire et les échanges gazeux.',
    estimatedTime: 18,
    skills: ['Biologie', 'Respiration', 'Corps humain'],
    questions: [
      {
        id: 'q1',
        question: 'Quel gaz inspirons-nous principalement pour vivre ?',
        type: 'fill-blank',
        correctAnswer: 'oxygène',
        explanation: 'Nous inspirons de l\'oxygène (O2) qui est nécessaire pour produire de l\'énergie dans nos cellules.',
        hints: ['C\'est O2', 'L\'oxygène']
      },
      {
        id: 'q2',
        question: 'Quel gaz rejetons-nous en expirant ?',
        type: 'multiple-choice',
        options: ['L\'oxygène', 'L\'azote', 'Le dioxyde de carbone', 'L\'hydrogène'],
        correctAnswer: 'Le dioxyde de carbone',
        explanation: 'Nous expirons du dioxyde de carbone (CO2), déchet de la respiration cellulaire.',
        hints: ['C\'est CO2', 'Un déchet de la respiration']
      },
      {
        id: 'q3',
        question: 'Où se font les échanges gazeux dans les poumons ?',
        type: 'multiple-choice',
        options: ['Dans les bronches', 'Dans la trachée', 'Dans les alvéoles pulmonaires', 'Dans le larynx'],
        correctAnswer: 'Dans les alvéoles pulmonaires',
        explanation: 'Les alvéoles sont de petits sacs où l\'O2 passe dans le sang et le CO2 est évacué.',
        hints: ['Ce sont de petits sacs', 'Les alvéoles']
      },
      {
        id: 'q4',
        question: 'Quel muscle principal permet la respiration ?',
        type: 'fill-blank',
        correctAnswer: 'diaphragme',
        explanation: 'Le diaphragme est le muscle en forme de dôme sous les poumons. Sa contraction permet l\'inspiration.',
        hints: ['C\'est sous les poumons', 'Le diaphragme']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Les poumons peuvent se gonfler seuls comme des ballons.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Les poumons sont passifs. C\'est le diaphragme et les muscles intercostaux qui créent le mouvement.',
        hints: ['Les poumons n\'ont pas de muscles propres', 'C\'est faux']
      },
      {
        id: 'q6',
        question: 'Comment s\'appelle le tube qui relie la bouche aux bronches ?',
        type: 'multiple-choice',
        options: ['L\'œsophage', 'La trachée', 'Le larynx', 'Le pharynx'],
        correctAnswer: 'La trachée',
        explanation: 'La trachée est le tube rigide (avec des anneaux de cartilage) qui conduit l\'air vers les bronches.',
        hints: ['C\'est un tube rigide', 'La trachée']
      },
      {
        id: 'q7',
        question: 'Combien de poumons avons-nous ?',
        type: 'fill-blank',
        correctAnswer: '2',
        explanation: 'Nous avons 2 poumons : le droit (3 lobes) et le gauche (2 lobes, plus petit pour laisser place au cœur).',
        hints: ['Un de chaque côté', 'C\'est 2']
      },
      {
        id: 'q8',
        question: 'Qu\'est-ce qui transporte l\'oxygène dans le sang ?',
        type: 'multiple-choice',
        options: ['Les globules blancs', 'Les globules rouges', 'Les plaquettes', 'Le plasma'],
        correctAnswer: 'Les globules rouges',
        explanation: 'Les globules rouges contiennent l\'hémoglobine qui fixe l\'oxygène et le transporte.',
        hints: ['Ils sont rouges grâce au fer', 'Les globules rouges']
      },
      {
        id: 'q9',
        question: 'Quelle est la fréquence respiratoire normale au repos chez un adulte ?',
        type: 'multiple-choice',
        options: ['5 à 8 respirations/min', '12 à 20 respirations/min', '30 à 40 respirations/min', '50 à 60 respirations/min'],
        correctAnswer: '12 à 20 respirations/min',
        explanation: 'Au repos, un adulte respire environ 12 à 20 fois par minute. Ce rythme augmente à l\'effort.',
        hints: ['C\'est modéré au repos', 'Entre 12 et 20']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : Fumer endommage les alvéoles pulmonaires.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le tabac détruit les alvéoles, réduit les échanges gazeux et peut causer des maladies graves.',
        hints: ['Le tabac est très nocif', 'C\'est vrai']
      }
    ]
  },

  {
    id: 'sci-5eme-003',
    title: 'L\'énergie et ses transformations',
    subject: 'sciences',
    level: '5ème',
    difficulty: 3,
    description: 'Découvre les différentes formes d\'énergie et leurs transformations.',
    estimatedTime: 18,
    skills: ['Physique', 'Énergie', 'Transformations'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle forme d\'énergie possède un objet en mouvement ?',
        type: 'multiple-choice',
        options: ['Énergie potentielle', 'Énergie cinétique', 'Énergie thermique', 'Énergie lumineuse'],
        correctAnswer: 'Énergie cinétique',
        explanation: 'L\'énergie cinétique est l\'énergie liée au mouvement d\'un objet.',
        hints: ['Cinétique = mouvement', 'Énergie cinétique']
      },
      {
        id: 'q2',
        question: 'Quelle forme d\'énergie possède un objet en hauteur ?',
        type: 'multiple-choice',
        options: ['Énergie cinétique', 'Énergie potentielle de pesanteur', 'Énergie chimique', 'Énergie électrique'],
        correctAnswer: 'Énergie potentielle de pesanteur',
        explanation: 'Un objet en hauteur possède de l\'énergie potentielle qui peut se transformer en énergie cinétique s\'il tombe.',
        hints: ['Potentielle = stockée', 'Elle dépend de la hauteur']
      },
      {
        id: 'q3',
        question: 'Quelle transformation d\'énergie se produit dans une ampoule électrique ?',
        type: 'multiple-choice',
        options: ['Chimique → Électrique', 'Électrique → Lumineuse et thermique', 'Mécanique → Électrique', 'Lumineuse → Chimique'],
        correctAnswer: 'Électrique → Lumineuse et thermique',
        explanation: 'Une ampoule transforme l\'énergie électrique en lumière et en chaleur (une partie est perdue).',
        hints: ['Elle reçoit de l\'électricité', 'Elle produit lumière et chaleur']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : L\'énergie peut être créée à partir de rien.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! L\'énergie ne peut être ni créée ni détruite, seulement transformée (conservation de l\'énergie).',
        hints: ['Pense à la conservation', 'C\'est faux']
      },
      {
        id: 'q5',
        question: 'Quelle est la source d\'énergie d\'une pile ?',
        type: 'multiple-choice',
        options: ['Énergie nucléaire', 'Énergie mécanique', 'Énergie chimique', 'Énergie solaire'],
        correctAnswer: 'Énergie chimique',
        explanation: 'Une pile stocke de l\'énergie chimique qui se transforme en énergie électrique.',
        hints: ['Il y a des réactions chimiques', 'Énergie chimique']
      },
      {
        id: 'q6',
        question: 'Quelle énergie produit le Soleil ?',
        type: 'multiple-choice',
        options: ['Énergie chimique', 'Énergie nucléaire', 'Énergie électrique', 'Énergie mécanique'],
        correctAnswer: 'Énergie nucléaire',
        explanation: 'Le Soleil produit de l\'énergie par fusion nucléaire de l\'hydrogène en hélium.',
        hints: ['C\'est de la fusion', 'Énergie nucléaire']
      },
      {
        id: 'q7',
        question: 'Comment appelle-t-on l\'énergie perdue sous forme de chaleur ?',
        type: 'fill-blank',
        correctAnswer: 'thermique',
        explanation: 'L\'énergie thermique est souvent de l\'énergie "perdue" lors des transformations (frottements, chaleur).',
        hints: ['C\'est de la chaleur', 'Thermique']
      },
      {
        id: 'q8',
        question: 'Quelle transformation se produit dans un barrage hydroélectrique ?',
        type: 'multiple-choice',
        options: ['Chimique → Électrique', 'Nucléaire → Électrique', 'Mécanique → Électrique', 'Thermique → Mécanique'],
        correctAnswer: 'Mécanique → Électrique',
        explanation: 'L\'eau en mouvement fait tourner des turbines qui produisent de l\'électricité.',
        hints: ['L\'eau fait tourner des turbines', 'Mécanique vers électrique']
      },
      {
        id: 'q9',
        question: 'Dans quelle unité mesure-t-on l\'énergie ?',
        type: 'multiple-choice',
        options: ['Le Watt (W)', 'Le Joule (J)', 'L\'Ampère (A)', 'Le Volt (V)'],
        correctAnswer: 'Le Joule (J)',
        explanation: 'Le Joule (J) est l\'unité d\'énergie. Le Watt est l\'unité de puissance (énergie par seconde).',
        hints: ['Ce n\'est pas le Watt', 'Le Joule']
      },
      {
        id: 'q10',
        question: 'Quelle est la source d\'énergie des muscles ?',
        type: 'multiple-choice',
        options: ['Énergie électrique', 'Énergie solaire', 'Énergie chimique (glucose)', 'Énergie nucléaire'],
        correctAnswer: 'Énergie chimique (glucose)',
        explanation: 'Les muscles utilisent le glucose pour produire de l\'énergie mécanique (mouvement).',
        hints: ['On mange pour avoir de l\'énergie', 'Le glucose']
      }
    ]
  },

  // ==================== 5ÈME - FRANÇAIS ====================

  {
    id: 'fr-5eme-001',
    title: 'Les temps du récit : passé simple et imparfait',
    subject: 'francais',
    level: '5ème',
    difficulty: 3,
    description: 'Maîtrise l\'emploi du passé simple et de l\'imparfait dans un récit.',
    estimatedTime: 18,
    skills: ['Conjugaison', 'Grammaire', 'Récit'],
    questions: [
      {
        id: 'q1',
        question: 'Le passé simple exprime une action...',
        type: 'multiple-choice',
        options: ['Habituelle dans le passé', 'Ponctuelle et achevée', 'Qui dure encore', 'Future'],
        correctAnswer: 'Ponctuelle et achevée',
        explanation: 'Le passé simple exprime une action précise, terminée, qui fait avancer le récit.',
        hints: ['Action de premier plan', 'Ponctuelle']
      },
      {
        id: 'q2',
        question: 'L\'imparfait exprime une action...',
        type: 'multiple-choice',
        options: ['Ponctuelle', 'Qui dure ou se répète', 'Future', 'Immédiate'],
        correctAnswer: 'Qui dure ou se répète',
        explanation: 'L\'imparfait exprime une action en cours, une description ou une habitude dans le passé.',
        hints: ['Action d\'arrière-plan', 'Durée ou répétition']
      },
      {
        id: 'q3',
        question: 'Conjugue "chanter" au passé simple (il) :',
        type: 'fill-blank',
        correctAnswer: 'chanta',
        explanation: 'Il chanta. Les verbes en -er font -a, -as, -a, -âmes, -âtes, -èrent au passé simple.',
        hints: ['Verbe en -er', 'Il chanta']
      },
      {
        id: 'q4',
        question: 'Conjugue "finir" à l\'imparfait (nous) :',
        type: 'fill-blank',
        correctAnswer: 'finissions',
        explanation: 'Nous finissions. L\'imparfait : radical + -ais, -ais, -ait, -ions, -iez, -aient.',
        hints: ['Terminaison -ions', 'Nous finissions']
      },
      {
        id: 'q5',
        question: 'Quelle phrase utilise correctement les temps du récit ?',
        type: 'multiple-choice',
        options: ['Il faisait nuit quand le loup apparut.', 'Il fit nuit quand le loup apparaissait.', 'Il faisait nuit quand le loup apparaissait.', 'Il fit nuit quand le loup apparut.'],
        correctAnswer: 'Il faisait nuit quand le loup apparut.',
        explanation: '"Il faisait nuit" (description, imparfait) + "le loup apparut" (action soudaine, passé simple).',
        hints: ['Description = imparfait', 'Action soudaine = passé simple']
      },
      {
        id: 'q6',
        question: 'Conjugue "prendre" au passé simple (ils) :',
        type: 'fill-blank',
        correctAnswer: 'prirent',
        explanation: 'Ils prirent. "Prendre" a un passé simple irrégulier : je pris, tu pris, il prit, nous prîmes, vous prîtes, ils prirent.',
        hints: ['Verbe irrégulier', 'Ils prirent']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : Dans un récit au passé, les descriptions sont généralement à l\'imparfait.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les descriptions et l\'arrière-plan sont à l\'imparfait, les actions principales au passé simple.',
        hints: ['Les descriptions = contexte', 'C\'est vrai']
      },
      {
        id: 'q8',
        question: 'Conjugue "être" à l\'imparfait (elle) :',
        type: 'fill-blank',
        correctAnswer: 'était',
        explanation: 'Elle était. "Être" à l\'imparfait : j\'étais, tu étais, il/elle était, nous étions, vous étiez, ils étaient.',
        hints: ['Du verbe être', 'Elle était']
      },
      {
        id: 'q9',
        question: 'Conjugue "venir" au passé simple (je) :',
        type: 'fill-blank',
        correctAnswer: 'vins',
        explanation: 'Je vins. "Venir" au passé simple : je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent.',
        hints: ['Verbe irrégulier', 'Je vins']
      },
      {
        id: 'q10',
        question: 'Dans la phrase "Pendant qu\'il dormait, le téléphone sonna", quel temps exprime l\'action principale ?',
        type: 'multiple-choice',
        options: ['L\'imparfait (dormait)', 'Le passé simple (sonna)', 'Les deux également', 'Aucun des deux'],
        correctAnswer: 'Le passé simple (sonna)',
        explanation: '"Sonna" (passé simple) est l\'action principale qui interrompt "dormait" (imparfait, action en cours).',
        hints: ['L\'action qui surgit', 'Le passé simple']
      }
    ]
  },

  {
    id: 'fr-5eme-002',
    title: 'Les propositions subordonnées',
    subject: 'francais',
    level: '5ème',
    difficulty: 4,
    description: 'Identifie et analyse les différentes propositions subordonnées.',
    estimatedTime: 20,
    skills: ['Grammaire', 'Syntaxe', 'Analyse'],
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce qu\'une proposition subordonnée ?',
        type: 'multiple-choice',
        options: ['Une phrase complète', 'Une proposition qui dépend d\'une autre', 'Un mot de liaison', 'Un complément du nom'],
        correctAnswer: 'Une proposition qui dépend d\'une autre',
        explanation: 'Une subordonnée dépend d\'une proposition principale. Elle ne peut pas exister seule.',
        hints: ['Elle est "sous" la principale', 'Elle dépend d\'une autre']
      },
      {
        id: 'q2',
        question: 'Dans "Je pense qu\'il viendra", quelle est la subordonnée ?',
        type: 'multiple-choice',
        options: ['Je pense', 'qu\'il viendra', 'Je pense qu\'', 'il viendra'],
        correctAnswer: 'qu\'il viendra',
        explanation: '"Qu\'il viendra" est une subordonnée conjonctive introduite par "que", complément de "pense".',
        hints: ['Elle commence par "que"', 'qu\'il viendra']
      },
      {
        id: 'q3',
        question: 'Comment appelle-t-on une subordonnée introduite par "qui", "que", "dont" ?',
        type: 'multiple-choice',
        options: ['Subordonnée conjonctive', 'Subordonnée relative', 'Subordonnée interrogative', 'Subordonnée infinitive'],
        correctAnswer: 'Subordonnée relative',
        explanation: 'Les propositions relatives sont introduites par des pronoms relatifs (qui, que, dont, où, lequel...).',
        hints: ['Pronom relatif', 'Subordonnée relative']
      },
      {
        id: 'q4',
        question: 'Dans "L\'homme qui parle est mon père", que complète la subordonnée ?',
        type: 'multiple-choice',
        options: ['Le verbe "est"', 'Le nom "homme"', 'Le sujet "je"', 'Le verbe "parle"'],
        correctAnswer: 'Le nom "homme"',
        explanation: '"Qui parle" est une relative qui complète le nom "homme" (son antécédent).',
        hints: ['Elle précise quel homme', 'Elle complète le nom']
      },
      {
        id: 'q5',
        question: 'Quelle est la fonction de "dont" dans "Le livre dont je parle" ?',
        type: 'multiple-choice',
        options: ['Sujet', 'COD', 'COI', 'Complément du nom'],
        correctAnswer: 'COI',
        explanation: '"Dont" remplace "du livre" → je parle du livre. C\'est un COI (parler de quelque chose).',
        hints: ['Je parle DE quoi ?', 'Complément indirect']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Quand" peut introduire une subordonnée de temps.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Quand", "lorsque", "pendant que", "dès que" introduisent des subordonnées circonstancielles de temps.',
        hints: ['C\'est un indicateur de temps', 'C\'est vrai']
      },
      {
        id: 'q7',
        question: 'Dans "Si tu viens, je serai content", quelle est la subordonnée ?',
        type: 'fill-blank',
        correctAnswer: 'Si tu viens',
        explanation: '"Si tu viens" est une subordonnée circonstancielle de condition (ou hypothèse).',
        hints: ['Elle exprime une condition', 'Si tu viens']
      },
      {
        id: 'q8',
        question: 'Quel type de subordonnée exprime la cause ?',
        type: 'multiple-choice',
        options: ['Subordonnée relative', 'Subordonnée conjonctive de cause', 'Subordonnée interrogative', 'Subordonnée infinitive'],
        correctAnswer: 'Subordonnée conjonctive de cause',
        explanation: 'Les subordonnées de cause sont introduites par "parce que", "puisque", "comme", etc.',
        hints: ['Elle répond à "pourquoi ?"', 'De cause']
      },
      {
        id: 'q9',
        question: 'Dans "Je me demande où il est", la subordonnée est...',
        type: 'multiple-choice',
        options: ['Relative', 'Conjonctive', 'Interrogative indirecte', 'De temps'],
        correctAnswer: 'Interrogative indirecte',
        explanation: '"Où il est" est une interrogative indirecte (question rapportée), COD de "demande".',
        hints: ['C\'est une question indirecte', 'Interrogative']
      },
      {
        id: 'q10',
        question: 'Quelle conjonction introduit une subordonnée de but ?',
        type: 'multiple-choice',
        options: ['Parce que', 'Pour que', 'Quand', 'Si'],
        correctAnswer: 'Pour que',
        explanation: '"Pour que", "afin que" introduisent des subordonnées de but (objectif).',
        hints: ['Elle exprime un objectif', 'Pour que']
      }
    ]
  },

  {
    id: 'fr-5eme-003',
    title: 'Le vocabulaire : synonymes, antonymes et familles de mots',
    subject: 'francais',
    level: '5ème',
    difficulty: 2,
    description: 'Enrichis ton vocabulaire avec les relations entre les mots.',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Lexique', 'Langue'],
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce qu\'un synonyme ?',
        type: 'multiple-choice',
        options: ['Un mot de sens contraire', 'Un mot de sens proche', 'Un mot de la même famille', 'Un mot homonyme'],
        correctAnswer: 'Un mot de sens proche',
        explanation: 'Un synonyme est un mot qui a un sens proche ou identique (beau/joli, rapide/vite).',
        hints: ['Même sens', 'Sens proche']
      },
      {
        id: 'q2',
        question: 'Quel est le synonyme de "content" ?',
        type: 'multiple-choice',
        options: ['Triste', 'Heureux', 'Fâché', 'Fatigué'],
        correctAnswer: 'Heureux',
        explanation: '"Heureux" est synonyme de "content". Les deux expriment la joie.',
        hints: ['C\'est positif', 'Heureux']
      },
      {
        id: 'q3',
        question: 'Qu\'est-ce qu\'un antonyme ?',
        type: 'multiple-choice',
        options: ['Un mot de sens proche', 'Un mot de sens contraire', 'Un mot homonyme', 'Un mot de la même famille'],
        correctAnswer: 'Un mot de sens contraire',
        explanation: 'Un antonyme est un mot de sens opposé (grand/petit, beau/laid).',
        hints: ['Sens opposé', 'Contraire']
      },
      {
        id: 'q4',
        question: 'Quel est l\'antonyme de "ancien" ?',
        type: 'fill-blank',
        correctAnswer: 'nouveau',
        explanation: '"Nouveau" (ou "récent", "moderne") est l\'antonyme de "ancien".',
        hints: ['Le contraire de vieux', 'Nouveau']
      },
      {
        id: 'q5',
        question: 'Quels mots appartiennent à la même famille que "terre" ?',
        type: 'multiple-choice',
        options: ['Terrible, terreur', 'Terrain, terrasse, enterrer', 'Terne, terminé', 'Terrier, territoire, terrible'],
        correctAnswer: 'Terrain, terrasse, enterrer',
        explanation: 'Ces mots ont le même radical "terr-" lié à la terre. "Terrible" vient de "terreur".',
        hints: ['Même radical terr-', 'Terrain, terrasse']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Rapidement" et "vite" sont des synonymes.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les deux mots expriment la même idée de vitesse, même si leur nature grammaticale diffère.',
        hints: ['Ils expriment la vitesse', 'C\'est vrai']
      },
      {
        id: 'q7',
        question: 'Quel préfixe permet de former l\'antonyme de "possible" ?',
        type: 'multiple-choice',
        options: ['in-', 'im-', 'dé-', 're-'],
        correctAnswer: 'im-',
        explanation: 'Impossible = im- + possible. Devant p, b, m, le préfixe "in-" devient "im-".',
        hints: ['Devant p, in devient im', 'im-possible']
      },
      {
        id: 'q8',
        question: 'Quel est le radical commun à "lire", "lecteur", "lecture" ?',
        type: 'multiple-choice',
        options: ['lir-', 'lect-', 'li-', 'le-'],
        correctAnswer: 'lect-',
        explanation: 'Le radical latin est "lect-" (du latin legere). "Lire" a subi des transformations.',
        hints: ['Pense à lecteur', 'lect-']
      },
      {
        id: 'q9',
        question: 'Trouve un synonyme de "fatigué" :',
        type: 'fill-blank',
        correctAnswer: 'épuisé',
        explanation: '"Épuisé", "las", "exténué" sont des synonymes de "fatigué".',
        hints: ['Très fatigué', 'Épuisé']
      },
      {
        id: 'q10',
        question: 'Quel mot de la famille de "voir" signifie "qui ne peut pas voir" ?',
        type: 'fill-blank',
        correctAnswer: 'aveugle',
        explanation: '"Aveugle" vient du latin ab (sans) + oculus (œil). Famille de voir : vision, visible, invisible...',
        hints: ['Sans vision', 'Aveugle']
      }
    ]
  },

  // ==================== 5ÈME - HISTOIRE-GÉO ====================

  {
    id: 'hist-5eme-001',
    title: 'L\'Islam et le monde musulman médiéval',
    subject: 'histoire-geo',
    level: '5ème',
    difficulty: 3,
    description: 'Découvre la naissance de l\'Islam et la civilisation musulmane au Moyen Âge.',
    estimatedTime: 20,
    skills: ['Histoire', 'Islam', 'Moyen Âge'],
    questions: [
      {
        id: 'q1',
        question: 'Qui est le prophète fondateur de l\'Islam ?',
        type: 'fill-blank',
        correctAnswer: 'Mahomet',
        explanation: 'Mahomet (ou Muhammad) est le prophète de l\'Islam. Il a reçu la révélation du Coran.',
        hints: ['Le prophète de l\'Islam', 'Mahomet']
      },
      {
        id: 'q2',
        question: 'En quelle année a eu lieu l\'Hégire (départ de La Mecque vers Médine) ?',
        type: 'multiple-choice',
        options: ['570', '622', '632', '711'],
        correctAnswer: '622',
        explanation: 'L\'Hégire (622) marque le début du calendrier musulman. Mahomet fuit La Mecque pour Médine.',
        hints: ['C\'est le début du calendrier musulman', '622']
      },
      {
        id: 'q3',
        question: 'Comment s\'appelle le livre sacré des musulmans ?',
        type: 'fill-blank',
        correctAnswer: 'Coran',
        explanation: 'Le Coran est le livre sacré de l\'Islam, considéré comme la parole de Dieu (Allah) révélée à Mahomet.',
        hints: ['Le livre sacré', 'Le Coran']
      },
      {
        id: 'q4',
        question: 'Quels sont les "cinq piliers de l\'Islam" ?',
        type: 'multiple-choice',
        options: ['Les 5 prières quotidiennes', 'Profession de foi, prière, aumône, jeûne, pèlerinage', 'Les 5 livres du Coran', 'Les 5 prophètes'],
        correctAnswer: 'Profession de foi, prière, aumône, jeûne, pèlerinage',
        explanation: 'Les 5 piliers : shahada (foi), salat (prière), zakat (aumône), sawm (jeûne du Ramadan), hajj (pèlerinage).',
        hints: ['Ce sont les devoirs du musulman', 'Foi, prière, aumône...']
      },
      {
        id: 'q5',
        question: 'Quelle ville est la plus sacrée pour les musulmans ?',
        type: 'multiple-choice',
        options: ['Médine', 'Jérusalem', 'La Mecque', 'Bagdad'],
        correctAnswer: 'La Mecque',
        explanation: 'La Mecque (Arabie saoudite) abrite la Kaaba. Tout musulman doit y faire un pèlerinage si possible.',
        hints: ['En Arabie saoudite', 'La Mecque']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : Les musulmans prient 5 fois par jour.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! La prière (salat) est faite 5 fois par jour, tournée vers La Mecque.',
        hints: ['C\'est un des piliers', 'C\'est vrai']
      },
      {
        id: 'q7',
        question: 'Quelle grande ville fut la capitale du califat abbasside ?',
        type: 'multiple-choice',
        options: ['Damas', 'Cordoue', 'Bagdad', 'Le Caire'],
        correctAnswer: 'Bagdad',
        explanation: 'Bagdad (Irak actuel) fut la capitale des Abbassides et un grand centre culturel au Moyen Âge.',
        hints: ['En Irak actuel', 'Bagdad']
      },
      {
        id: 'q8',
        question: 'Comment s\'appelle le lieu de culte musulman ?',
        type: 'fill-blank',
        correctAnswer: 'mosquée',
        explanation: 'La mosquée est le lieu de prière des musulmans. Elle possède souvent un minaret.',
        hints: ['Lieu de prière', 'La mosquée']
      },
      {
        id: 'q9',
        question: 'Quelle science les savants arabes ont-ils particulièrement développée ?',
        type: 'multiple-choice',
        options: ['L\'informatique', 'L\'algèbre et l\'astronomie', 'La physique nucléaire', 'La génétique'],
        correctAnswer: 'L\'algèbre et l\'astronomie',
        explanation: 'Les savants arabes ont excellé en mathématiques (algèbre, chiffres arabes), astronomie et médecine.',
        hints: ['Le mot algèbre vient de l\'arabe', 'Algèbre et astronomie']
      },
      {
        id: 'q10',
        question: 'En quelle année les musulmans sont-ils arrivés en Espagne ?',
        type: 'multiple-choice',
        options: ['622', '711', '800', '1000'],
        correctAnswer: '711',
        explanation: 'En 711, les musulmans traversent Gibraltar et conquièrent l\'Espagne (Al-Andalus).',
        hints: ['Au 8ème siècle', '711']
      }
    ]
  },

  {
    id: 'hist-5eme-002',
    title: 'Seigneurs et paysans au Moyen Âge',
    subject: 'histoire-geo',
    level: '5ème',
    difficulty: 3,
    description: 'Découvre la société féodale et la vie des seigneurs et des paysans.',
    estimatedTime: 20,
    skills: ['Histoire', 'Moyen Âge', 'Féodalité'],
    questions: [
      {
        id: 'q1',
        question: 'Comment appelle-t-on le système politique et social du Moyen Âge basé sur les liens de vassalité ?',
        type: 'fill-blank',
        correctAnswer: 'féodalité',
        explanation: 'La féodalité est le système où le seigneur accorde une terre (fief) à un vassal en échange de services.',
        hints: ['Fief → féodal', 'La féodalité']
      },
      {
        id: 'q2',
        question: 'Qu\'est-ce qu\'un serf au Moyen Âge ?',
        type: 'multiple-choice',
        options: ['Un noble guerrier', 'Un paysan attaché à la terre du seigneur', 'Un moine', 'Un marchand'],
        correctAnswer: 'Un paysan attaché à la terre du seigneur',
        explanation: 'Le serf est un paysan non libre, attaché à la terre. Il ne peut pas quitter la seigneurie.',
        hints: ['C\'est un paysan', 'Il n\'est pas libre']
      },
      {
        id: 'q3',
        question: 'Comment s\'appelle la terre que le seigneur donne à son vassal ?',
        type: 'fill-blank',
        correctAnswer: 'fief',
        explanation: 'Le fief est la terre accordée par le seigneur au vassal en échange de sa fidélité et de services.',
        hints: ['Ça donne féodalité', 'Le fief']
      },
      {
        id: 'q4',
        question: 'Quel impôt le paysan doit-il payer au seigneur pour utiliser le moulin ?',
        type: 'multiple-choice',
        options: ['La dîme', 'Le cens', 'La banalité', 'La taille'],
        correctAnswer: 'La banalité',
        explanation: 'Les banalités sont des taxes pour utiliser le moulin, le four ou le pressoir du seigneur.',
        hints: ['Pour les équipements banaux', 'La banalité']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Les paysans libres pouvaient quitter la seigneurie.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Contrairement aux serfs, les paysans libres (vilains) pouvaient partir.',
        hints: ['Ils ne sont pas attachés à la terre', 'C\'est vrai']
      },
      {
        id: 'q6',
        question: 'Quel est le rôle principal du seigneur envers ses paysans ?',
        type: 'multiple-choice',
        options: ['Les éduquer', 'Les protéger', 'Les convertir', 'Les divertir'],
        correctAnswer: 'Les protéger',
        explanation: 'Le seigneur doit protection à ses paysans (ban). En échange, ceux-ci travaillent pour lui.',
        hints: ['C\'est un devoir militaire', 'Les protéger']
      },
      {
        id: 'q7',
        question: 'Comment s\'appellent les terres que les paysans cultivent pour le seigneur ?',
        type: 'multiple-choice',
        options: ['La réserve', 'Les tenures', 'Les commons', 'Les fiefs'],
        correctAnswer: 'La réserve',
        explanation: 'La réserve est la partie du domaine cultivée directement pour le seigneur. Les tenures sont louées aux paysans.',
        hints: ['C\'est pour le seigneur', 'La réserve']
      },
      {
        id: 'q8',
        question: 'Quel impôt le paysan doit-il payer à l\'Église ?',
        type: 'fill-blank',
        correctAnswer: 'dîme',
        explanation: 'La dîme est un impôt de 1/10 des récoltes versé à l\'Église.',
        hints: ['1/10 des récoltes', 'La dîme']
      },
      {
        id: 'q9',
        question: 'Où vit généralement le seigneur ?',
        type: 'multiple-choice',
        options: ['Dans une ferme', 'Dans un château fort', 'Dans un monastère', 'Dans un village'],
        correctAnswer: 'Dans un château fort',
        explanation: 'Le château fort est la résidence du seigneur. Il sert aussi de refuge en cas d\'attaque.',
        hints: ['C\'est une forteresse', 'Le château fort']
      },
      {
        id: 'q10',
        question: 'Comment appelle-t-on la cérémonie où le vassal jure fidélité à son seigneur ?',
        type: 'multiple-choice',
        options: ['Le sacre', 'L\'adoubement', 'L\'hommage', 'Le baptême'],
        correctAnswer: 'L\'hommage',
        explanation: 'L\'hommage est la cérémonie où le vassal met ses mains dans celles du seigneur et lui jure fidélité.',
        hints: ['C\'est un serment de fidélité', 'L\'hommage']
      }
    ]
  },

  {
    id: 'geo-5eme-001',
    title: 'Le développement durable',
    subject: 'histoire-geo',
    level: '5ème',
    difficulty: 3,
    description: 'Comprends les enjeux du développement durable et ses trois piliers.',
    estimatedTime: 18,
    skills: ['Géographie', 'Développement durable', 'Environnement'],
    questions: [
      {
        id: 'q1',
        question: 'Quels sont les trois piliers du développement durable ?',
        type: 'multiple-choice',
        options: ['Air, eau, terre', 'Économique, social, environnemental', 'Passé, présent, futur', 'Local, national, mondial'],
        correctAnswer: 'Économique, social, environnemental',
        explanation: 'Le développement durable repose sur 3 piliers : économie, social et environnement.',
        hints: ['3 dimensions', 'Économie, social, environnement']
      },
      {
        id: 'q2',
        question: 'Que signifie "développement durable" ?',
        type: 'multiple-choice',
        options: ['Un développement rapide', 'Un développement qui répond aux besoins actuels sans compromettre ceux des générations futures', 'Un développement uniquement économique', 'Un développement sans changement'],
        correctAnswer: 'Un développement qui répond aux besoins actuels sans compromettre ceux des générations futures',
        explanation: 'Le développement durable vise à satisfaire nos besoins tout en préservant la planète pour nos enfants.',
        hints: ['Penser aux générations futures', 'Ne pas compromettre l\'avenir']
      },
      {
        id: 'q3',
        question: 'En quelle année a eu lieu le Sommet de la Terre de Rio ?',
        type: 'multiple-choice',
        options: ['1972', '1992', '2002', '2015'],
        correctAnswer: '1992',
        explanation: 'Le Sommet de Rio (1992) a popularisé le concept de développement durable et lancé l\'Agenda 21.',
        hints: ['Dans les années 90', '1992']
      },
      {
        id: 'q4',
        question: 'Qu\'est-ce qu\'une énergie renouvelable ?',
        type: 'multiple-choice',
        options: ['Une énergie qui s\'épuise', 'Une énergie qui se régénère naturellement', 'Une énergie nucléaire', 'Une énergie fossile'],
        correctAnswer: 'Une énergie qui se régénère naturellement',
        explanation: 'Les énergies renouvelables (solaire, éolien, hydraulique) se renouvellent naturellement.',
        hints: ['Elle ne s\'épuise pas', 'Se régénère']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Le pétrole est une énergie renouvelable.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Le pétrole est une énergie fossile qui met des millions d\'années à se former.',
        hints: ['C\'est une énergie fossile', 'C\'est faux']
      },
      {
        id: 'q6',
        question: 'Que signifie le sigle ODD ?',
        type: 'multiple-choice',
        options: ['Organisation du Développement Durable', 'Objectifs de Développement Durable', 'Office du Développement Durable', 'Options de Développement Durable'],
        correctAnswer: 'Objectifs de Développement Durable',
        explanation: 'Les 17 ODD ont été adoptés par l\'ONU en 2015 pour 2030 (faim, pauvreté, climat, etc.).',
        hints: ['17 objectifs de l\'ONU', 'Objectifs de Développement Durable']
      },
      {
        id: 'q7',
        question: 'Qu\'est-ce que l\'empreinte écologique ?',
        type: 'multiple-choice',
        options: ['La trace d\'un animal', 'La surface nécessaire pour produire ce qu\'on consomme et absorber nos déchets', 'La pollution d\'une usine', 'Le nombre d\'arbres plantés'],
        correctAnswer: 'La surface nécessaire pour produire ce qu\'on consomme et absorber nos déchets',
        explanation: 'L\'empreinte écologique mesure notre impact sur la planète en termes de surface nécessaire.',
        hints: ['Mesure notre impact', 'Surface nécessaire']
      },
      {
        id: 'q8',
        question: 'Quel est le principal gaz à effet de serre émis par les activités humaines ?',
        type: 'fill-blank',
        correctAnswer: 'CO2',
        explanation: 'Le CO2 (dioxyde de carbone) est le principal gaz à effet de serre d\'origine humaine.',
        hints: ['Dioxyde de carbone', 'CO2']
      },
      {
        id: 'q9',
        question: 'Que sont les "3R" du développement durable ?',
        type: 'multiple-choice',
        options: ['Ranger, Réparer, Revendre', 'Réduire, Réutiliser, Recycler', 'Rénover, Refaire, Replanter', 'Rien, Rarement, Rapidement'],
        correctAnswer: 'Réduire, Réutiliser, Recycler',
        explanation: 'Les 3R : Réduire nos déchets, Réutiliser les objets, Recycler les matériaux.',
        hints: ['Pour les déchets', 'Réduire, Réutiliser, Recycler']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : Le développement durable concerne uniquement l\'environnement.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Il concerne aussi l\'économie (emplois, commerce équitable) et le social (éducation, santé).',
        hints: ['Il y a 3 piliers', 'C\'est faux']
      }
    ]
  },

  // ==================== 5ÈME - ANGLAIS ====================

  {
    id: 'en-5eme-001',
    title: 'Past Simple - Irregular Verbs',
    subject: 'anglais',
    level: '5ème',
    difficulty: 3,
    description: 'Maîtrise le passé simple des verbes irréguliers anglais.',
    estimatedTime: 18,
    skills: ['Grammar', 'Past Simple', 'Irregular Verbs'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est le past simple de "go" ?',
        type: 'fill-blank',
        correctAnswer: 'went',
        explanation: 'Go → went → gone. C\'est un verbe irrégulier très courant.',
        hints: ['Très irrégulier', 'Went']
      },
      {
        id: 'q2',
        question: 'Yesterday, she _____ (eat) pizza for dinner.',
        type: 'fill-blank',
        correctAnswer: 'ate',
        explanation: 'Eat → ate → eaten. "She ate pizza yesterday."',
        hints: ['Verbe irrégulier', 'Ate']
      },
      {
        id: 'q3',
        question: 'Quel est le past simple de "see" ?',
        type: 'multiple-choice',
        options: ['Seed', 'Saw', 'Seen', 'Sew'],
        correctAnswer: 'Saw',
        explanation: 'See → saw → seen. "I saw a movie yesterday."',
        hints: ['Verbe irrégulier', 'Saw']
      },
      {
        id: 'q4',
        question: 'They _____ (buy) a new car last month.',
        type: 'fill-blank',
        correctAnswer: 'bought',
        explanation: 'Buy → bought → bought. "They bought a new car."',
        hints: ['Acheté', 'Bought']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Le past simple de "have" est "haved".',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Have → had → had. C\'est un verbe irrégulier.',
        hints: ['Have est irrégulier', 'C\'est faux']
      },
      {
        id: 'q6',
        question: 'He _____ (take) the bus to school.',
        type: 'fill-blank',
        correctAnswer: 'took',
        explanation: 'Take → took → taken. "He took the bus."',
        hints: ['Verbe irrégulier', 'Took']
      },
      {
        id: 'q7',
        question: 'Quel est le past simple de "write" ?',
        type: 'multiple-choice',
        options: ['Writed', 'Wrote', 'Written', 'Writ'],
        correctAnswer: 'Wrote',
        explanation: 'Write → wrote → written. "She wrote a letter."',
        hints: ['Verbe irrégulier', 'Wrote']
      },
      {
        id: 'q8',
        question: 'I _____ (think) it was a good idea.',
        type: 'fill-blank',
        correctAnswer: 'thought',
        explanation: 'Think → thought → thought. "I thought it was good."',
        hints: ['Penser au passé', 'Thought']
      },
      {
        id: 'q9',
        question: 'Quel est le past simple de "come" ?',
        type: 'fill-blank',
        correctAnswer: 'came',
        explanation: 'Come → came → come. "She came to the party."',
        hints: ['Venir au passé', 'Came']
      },
      {
        id: 'q10',
        question: 'We _____ (know) the answer.',
        type: 'fill-blank',
        correctAnswer: 'knew',
        explanation: 'Know → knew → known. "We knew the answer."',
        hints: ['Savoir au passé', 'Knew']
      }
    ]
  },

  {
    id: 'en-5eme-002',
    title: 'Comparatives and Superlatives',
    subject: 'anglais',
    level: '5ème',
    difficulty: 3,
    description: 'Apprends à comparer en anglais avec les comparatifs et superlatifs.',
    estimatedTime: 18,
    skills: ['Grammar', 'Comparatives', 'Superlatives'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est le comparatif de "big" ?',
        type: 'multiple-choice',
        options: ['More big', 'Biger', 'Bigger', 'Most big'],
        correctAnswer: 'Bigger',
        explanation: 'Adjectifs courts : on double la consonne finale + -er. Big → bigger.',
        hints: ['Adjectif court', 'On double le g']
      },
      {
        id: 'q2',
        question: 'She is _____ (tall) than her brother.',
        type: 'fill-blank',
        correctAnswer: 'taller',
        explanation: 'Tall → taller. Adjectif court + -er pour le comparatif.',
        hints: ['Adjectif court + er', 'Taller']
      },
      {
        id: 'q3',
        question: 'Quel est le superlatif de "beautiful" ?',
        type: 'multiple-choice',
        options: ['Most beautiful', 'Beautifulest', 'More beautiful', 'Beautifuller'],
        correctAnswer: 'Most beautiful',
        explanation: 'Adjectifs longs (3+ syllabes) : most + adjectif. The most beautiful.',
        hints: ['Adjectif long', 'Most + adjectif']
      },
      {
        id: 'q4',
        question: 'This is the _____ (good) pizza I\'ve ever eaten.',
        type: 'fill-blank',
        correctAnswer: 'best',
        explanation: 'Good → better → best. C\'est un adjectif irrégulier.',
        hints: ['Irrégulier', 'Best']
      },
      {
        id: 'q5',
        question: 'My bag is _____ (heavy) than yours.',
        type: 'fill-blank',
        correctAnswer: 'heavier',
        explanation: 'Heavy → heavier. Y devient I + -er.',
        hints: ['Y → ier', 'Heavier']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : Le superlatif de "bad" est "worst".',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Bad → worse → worst. C\'est irrégulier.',
        hints: ['Bad est irrégulier', 'C\'est vrai']
      },
      {
        id: 'q7',
        question: 'This film is _____ (interesting) than that one.',
        type: 'fill-blank',
        correctAnswer: 'more interesting',
        explanation: 'Interesting est long (4 syllabes) : more + adjectif.',
        hints: ['Adjectif long', 'More + adjectif']
      },
      {
        id: 'q8',
        question: 'She is the _____ (young) in the family.',
        type: 'fill-blank',
        correctAnswer: 'youngest',
        explanation: 'Young → younger → youngest. The youngest = le/la plus jeune.',
        hints: ['Superlatif', 'Youngest']
      },
      {
        id: 'q9',
        question: 'Quel est le comparatif de "far" ?',
        type: 'multiple-choice',
        options: ['Farer', 'More far', 'Farther/Further', 'Farrest'],
        correctAnswer: 'Farther/Further',
        explanation: 'Far → farther/further → farthest/furthest. C\'est irrégulier.',
        hints: ['Irrégulier', 'Farther ou further']
      },
      {
        id: 'q10',
        question: 'This is the _____ (expensive) phone in the shop.',
        type: 'fill-blank',
        correctAnswer: 'most expensive',
        explanation: 'Expensive est long : the most expensive = le plus cher.',
        hints: ['Adjectif long', 'Most expensive']
      }
    ]
  },

  {
    id: 'en-5eme-003',
    title: 'Vocabulary - School and Education',
    subject: 'anglais',
    level: '5ème',
    difficulty: 2,
    description: 'Apprends le vocabulaire de l\'école et de l\'éducation en anglais.',
    estimatedTime: 15,
    skills: ['Vocabulary', 'School', 'Education'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "emploi du temps" en anglais ?',
        type: 'multiple-choice',
        options: ['Homework', 'Timetable', 'Notebook', 'Blackboard'],
        correctAnswer: 'Timetable',
        explanation: '"Timetable" ou "schedule" = emploi du temps.',
        hints: ['Time = temps', 'Timetable']
      },
      {
        id: 'q2',
        question: 'Que signifie "homework" ?',
        type: 'multiple-choice',
        options: ['Le travail de groupe', 'Les devoirs à la maison', 'Le cours', 'L\'examen'],
        correctAnswer: 'Les devoirs à la maison',
        explanation: '"Homework" = devoirs. Home = maison, work = travail.',
        hints: ['À faire à la maison', 'Devoirs']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "la récréation" ?',
        type: 'fill-blank',
        correctAnswer: 'break',
        explanation: '"Break" ou "recess" (US) = la récréation, la pause.',
        hints: ['Une pause', 'Break']
      },
      {
        id: 'q4',
        question: 'Que signifie "PE" (Physical Education) ?',
        type: 'multiple-choice',
        options: ['Physique-chimie', 'Éducation physique (EPS)', 'Premier emploi', 'Philosophie'],
        correctAnswer: 'Éducation physique (EPS)',
        explanation: '"PE" = Physical Education = EPS (sport).',
        hints: ['C\'est du sport', 'Éducation physique']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "un élève" ?',
        type: 'multiple-choice',
        options: ['Teacher', 'Student / Pupil', 'Principal', 'Parent'],
        correctAnswer: 'Student / Pupil',
        explanation: '"Student" (collège/lycée) ou "pupil" (primaire) = élève.',
        hints: ['Celui qui apprend', 'Student ou pupil']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Library" signifie "librairie".',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! "Library" = bibliothèque. "Bookshop" = librairie.',
        hints: ['C\'est un faux ami', 'C\'est faux']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "un cours" (une leçon) ?',
        type: 'fill-blank',
        correctAnswer: 'lesson',
        explanation: '"Lesson" ou "class" = un cours.',
        hints: ['Une leçon', 'Lesson']
      },
      {
        id: 'q8',
        question: 'Que signifie "to pass an exam" ?',
        type: 'multiple-choice',
        options: ['Passer un examen', 'Réussir un examen', 'Rater un examen', 'Réviser un examen'],
        correctAnswer: 'Réussir un examen',
        explanation: '"To pass" = réussir. "To take an exam" = passer un examen.',
        hints: ['Attention au faux ami', 'Réussir']
      },
      {
        id: 'q9',
        question: 'Comment dit-on "un cahier" ?',
        type: 'multiple-choice',
        options: ['Book', 'Notebook / Exercise book', 'Textbook', 'Copybook'],
        correctAnswer: 'Notebook / Exercise book',
        explanation: '"Notebook" ou "exercise book" = cahier. "Textbook" = manuel.',
        hints: ['Pour écrire', 'Notebook']
      },
      {
        id: 'q10',
        question: 'Que signifie "headmaster" ou "principal" ?',
        type: 'fill-blank',
        correctAnswer: 'directeur',
        explanation: '"Headmaster" (UK) ou "principal" (US) = directeur/directrice d\'école.',
        hints: ['Le chef de l\'établissement', 'Directeur']
      }
    ]
  },

  // ==================== 4ÈME - MATHÉMATIQUES ====================

  {
    id: 'math-4eme-001',
    title: 'Le théorème de Pythagore',
    subject: 'maths',
    level: '4ème',
    difficulty: 4,
    description: 'Apprends à utiliser le théorème de Pythagore dans un triangle rectangle.',
    estimatedTime: 20,
    skills: ['Géométrie', 'Pythagore', 'Calcul'],
    questions: [
      {
        id: 'q1',
        question: 'Dans un triangle rectangle, comment s\'appelle le côté opposé à l\'angle droit ?',
        type: 'fill-blank',
        correctAnswer: 'hypoténuse',
        explanation: 'L\'hypoténuse est le plus grand côté du triangle rectangle, opposé à l\'angle droit.',
        hints: ['C\'est le plus grand côté', 'Hypoténuse']
      },
      {
        id: 'q2',
        question: 'Énonce le théorème de Pythagore.',
        type: 'multiple-choice',
        options: ['a + b = c', 'a² + b² = c²', 'a × b = c', '2a + 2b = c'],
        correctAnswer: 'a² + b² = c²',
        explanation: 'Dans un triangle rectangle, le carré de l\'hypoténuse égale la somme des carrés des deux autres côtés.',
        hints: ['Il y a des carrés', 'a² + b² = c²']
      },
      {
        id: 'q3',
        question: 'Un triangle rectangle a des côtés de 3 cm et 4 cm. Quelle est l\'hypoténuse ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: '3² + 4² = 9 + 16 = 25 = 5². L\'hypoténuse mesure 5 cm.',
        hints: ['3² + 4² = ?', '9 + 16 = 25 = 5²']
      },
      {
        id: 'q4',
        question: 'L\'hypoténuse mesure 13 cm, un côté mesure 5 cm. Quel est l\'autre côté ?',
        type: 'fill-blank',
        correctAnswer: '12',
        explanation: '5² + x² = 13² → 25 + x² = 169 → x² = 144 → x = 12 cm.',
        hints: ['13² - 5² = x²', '169 - 25 = 144']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Le théorème de Pythagore ne fonctionne que dans les triangles rectangles.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le théorème de Pythagore s\'applique uniquement aux triangles rectangles.',
        hints: ['C\'est une condition nécessaire', 'Vrai']
      },
      {
        id: 'q6',
        question: 'Un triangle a des côtés de 6, 8 et 10 cm. Est-il rectangle ?',
        type: 'multiple-choice',
        options: ['Oui', 'Non', 'On ne peut pas savoir', 'Seulement si l\'angle est marqué'],
        correctAnswer: 'Oui',
        explanation: '6² + 8² = 36 + 64 = 100 = 10². L\'égalité est vérifiée, donc le triangle est rectangle.',
        hints: ['Vérifie si a² + b² = c²', '36 + 64 = 100 ✓']
      },
      {
        id: 'q7',
        question: 'Calcule √144.',
        type: 'fill-blank',
        correctAnswer: '12',
        explanation: '√144 = 12 car 12² = 144.',
        hints: ['Quel nombre au carré donne 144 ?', '12 × 12 = 144']
      },
      {
        id: 'q8',
        question: 'Dans un triangle ABC rectangle en A, que vaut BC² ?',
        type: 'multiple-choice',
        options: ['AB² + AC²', 'AB² - AC²', 'AB × AC', '2 × AB × AC'],
        correctAnswer: 'AB² + AC²',
        explanation: 'BC est l\'hypoténuse (opposée à l\'angle droit A), donc BC² = AB² + AC².',
        hints: ['BC est l\'hypoténuse', 'Somme des carrés des autres côtés']
      },
      {
        id: 'q9',
        question: 'Un rectangle a pour dimensions 6 cm × 8 cm. Quelle est sa diagonale ?',
        type: 'fill-blank',
        correctAnswer: '10',
        explanation: 'La diagonale forme un triangle rectangle : d² = 6² + 8² = 36 + 64 = 100, donc d = 10 cm.',
        hints: ['Utilise Pythagore', '6² + 8² = 100']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : (5, 12, 13) est un triplet pythagoricien.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 5² + 12² = 25 + 144 = 169 = 13².',
        hints: ['Vérifie 5² + 12² = 13²', '25 + 144 = 169 ✓']
      }
    ]
  },

  {
    id: 'math-4eme-002',
    title: 'Les puissances',
    subject: 'maths',
    level: '4ème',
    difficulty: 3,
    description: 'Maîtrise les règles de calcul avec les puissances.',
    estimatedTime: 18,
    skills: ['Calcul', 'Puissances', 'Notation scientifique'],
    questions: [
      {
        id: 'q1',
        question: 'Calcule 2³.',
        type: 'fill-blank',
        correctAnswer: '8',
        explanation: '2³ = 2 × 2 × 2 = 8.',
        hints: ['2 multiplié 3 fois', '2 × 2 × 2']
      },
      {
        id: 'q2',
        question: 'Simplifie : 10⁴ × 10².',
        type: 'multiple-choice',
        options: ['10⁶', '10⁸', '10²', '20⁶'],
        correctAnswer: '10⁶',
        explanation: 'Même base : on additionne les exposants. 10⁴ × 10² = 10⁴⁺² = 10⁶.',
        hints: ['Même base → on additionne les exposants', '4 + 2 = 6']
      },
      {
        id: 'q3',
        question: 'Que vaut 5⁰ ?',
        type: 'fill-blank',
        correctAnswer: '1',
        explanation: 'Tout nombre (sauf 0) à la puissance 0 égale 1. 5⁰ = 1.',
        hints: ['Règle spéciale', 'Exposant 0 = 1']
      },
      {
        id: 'q4',
        question: 'Simplifie : 3⁵ ÷ 3².',
        type: 'multiple-choice',
        options: ['3³', '3⁷', '3¹⁰', '1³'],
        correctAnswer: '3³',
        explanation: 'Même base : on soustrait les exposants. 3⁵ ÷ 3² = 3⁵⁻² = 3³.',
        hints: ['Division → soustraction des exposants', '5 - 2 = 3']
      },
      {
        id: 'q5',
        question: 'Calcule 10⁻².',
        type: 'multiple-choice',
        options: ['-100', '0.01', '100', '-0.01'],
        correctAnswer: '0.01',
        explanation: '10⁻² = 1/10² = 1/100 = 0.01. Exposant négatif = inverse.',
        hints: ['Exposant négatif = fraction', '1 divisé par 10²']
      },
      {
        id: 'q6',
        question: 'Simplifie : (2³)².',
        type: 'fill-blank',
        correctAnswer: '64',
        explanation: '(2³)² = 2³ˣ² = 2⁶ = 64. Puissance de puissance : on multiplie les exposants.',
        hints: ['Multiplie les exposants', '2⁶ = 64']
      },
      {
        id: 'q7',
        question: 'Écris 3 500 000 en notation scientifique.',
        type: 'multiple-choice',
        options: ['3.5 × 10⁶', '35 × 10⁵', '3.5 × 10⁷', '0.35 × 10⁷'],
        correctAnswer: '3.5 × 10⁶',
        explanation: '3 500 000 = 3.5 × 10⁶. On déplace la virgule de 6 rangs vers la gauche.',
        hints: ['Un chiffre avant la virgule', '3.5 × 10⁶']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : 2⁴ × 3⁴ = 6⁴.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Même exposant : (a × b)ⁿ = aⁿ × bⁿ, donc 2⁴ × 3⁴ = (2×3)⁴ = 6⁴.',
        hints: ['Même exposant, bases différentes', 'C\'est vrai']
      },
      {
        id: 'q9',
        question: 'Calcule 4² × 4³.',
        type: 'fill-blank',
        correctAnswer: '1024',
        explanation: '4² × 4³ = 4⁵ = 1024.',
        hints: ['4⁵ = ?', '4 × 4 × 4 × 4 × 4']
      },
      {
        id: 'q10',
        question: 'Écris 0.00045 en notation scientifique.',
        type: 'multiple-choice',
        options: ['4.5 × 10⁻⁴', '45 × 10⁻⁵', '4.5 × 10⁻³', '0.45 × 10⁻³'],
        correctAnswer: '4.5 × 10⁻⁴',
        explanation: '0.00045 = 4.5 × 10⁻⁴. On déplace la virgule de 4 rangs vers la droite.',
        hints: ['Nombre entre 1 et 10', 'Exposant négatif car < 1']
      }
    ]
  },

  {
    id: 'math-4eme-003',
    title: 'Les équations du premier degré',
    subject: 'maths',
    level: '4ème',
    difficulty: 4,
    description: 'Apprends à résoudre des équations du premier degré à une inconnue.',
    estimatedTime: 20,
    skills: ['Algèbre', 'Équations', 'Calcul littéral'],
    questions: [
      {
        id: 'q1',
        question: 'Résous : x + 5 = 12. Que vaut x ?',
        type: 'fill-blank',
        correctAnswer: '7',
        explanation: 'x + 5 = 12 → x = 12 - 5 = 7.',
        hints: ['Isole x', '12 - 5 = ?']
      },
      {
        id: 'q2',
        question: 'Résous : 3x = 15. Que vaut x ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: '3x = 15 → x = 15 ÷ 3 = 5.',
        hints: ['Divise par 3', '15 ÷ 3 = ?']
      },
      {
        id: 'q3',
        question: 'Résous : 2x + 3 = 11. Que vaut x ?',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: '2x + 3 = 11 → 2x = 8 → x = 4.',
        hints: ['D\'abord enlève 3', 'Puis divise par 2']
      },
      {
        id: 'q4',
        question: 'Résous : 5x - 7 = 18. Que vaut x ?',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: '5x - 7 = 18 → 5x = 25 → x = 5.',
        hints: ['Ajoute 7 des deux côtés', '25 ÷ 5 = ?']
      },
      {
        id: 'q5',
        question: 'Résous : x/4 = 3. Que vaut x ?',
        type: 'fill-blank',
        correctAnswer: '12',
        explanation: 'x/4 = 3 → x = 3 × 4 = 12.',
        hints: ['Multiplie par 4', '3 × 4 = ?']
      },
      {
        id: 'q6',
        question: 'Résous : 4x + 2 = 2x + 10. Que vaut x ?',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: '4x + 2 = 2x + 10 → 4x - 2x = 10 - 2 → 2x = 8 → x = 4.',
        hints: ['Regroupe les x d\'un côté', '2x = 8']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : Dans l\'équation 3x - 6 = 0, x = 2.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 3x = 6 → x = 2. Vérifions : 3(2) - 6 = 6 - 6 = 0 ✓',
        hints: ['3x = 6', 'x = 6 ÷ 3']
      },
      {
        id: 'q8',
        question: 'Résous : -2x + 5 = 1. Que vaut x ?',
        type: 'fill-blank',
        correctAnswer: '2',
        explanation: '-2x + 5 = 1 → -2x = -4 → x = 2.',
        hints: ['Enlève 5', '-4 ÷ (-2) = 2']
      },
      {
        id: 'q9',
        question: 'Résous : 3(x + 2) = 15. Que vaut x ?',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: '3(x + 2) = 15 → x + 2 = 5 → x = 3. Ou : 3x + 6 = 15 → 3x = 9 → x = 3.',
        hints: ['Divise par 3 d\'abord', 'x + 2 = 5']
      },
      {
        id: 'q10',
        question: 'Résous : 7 - x = 3. Que vaut x ?',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: '7 - x = 3 → -x = -4 → x = 4.',
        hints: ['Enlève 7', '7 - 3 = 4']
      }
    ]
  },

  // ==================== 4ÈME - SCIENCES (Physique-Chimie) ====================

  {
    id: 'sci-4eme-001',
    title: 'L\'atome et les molécules',
    subject: 'sciences',
    level: '4ème',
    difficulty: 4,
    description: 'Découvre la structure de la matière : atomes, molécules et modèle moléculaire.',
    estimatedTime: 20,
    skills: ['Chimie', 'Atomes', 'Molécules'],
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce qu\'un atome ?',
        type: 'multiple-choice',
        options: ['La plus grande particule de matière', 'La plus petite particule de matière conservant les propriétés chimiques', 'Un assemblage de molécules', 'Une particule chargée'],
        correctAnswer: 'La plus petite particule de matière conservant les propriétés chimiques',
        explanation: 'L\'atome est la plus petite particule d\'un élément chimique.',
        hints: ['C\'est très petit', 'Particule de base']
      },
      {
        id: 'q2',
        question: 'Quel symbole représente l\'atome d\'oxygène ?',
        type: 'fill-blank',
        correctAnswer: 'O',
        explanation: 'L\'oxygène a pour symbole O (du latin Oxygenium).',
        hints: ['Une seule lettre', 'O']
      },
      {
        id: 'q3',
        question: 'Quelle est la formule chimique de l\'eau ?',
        type: 'fill-blank',
        correctAnswer: 'H2O',
        explanation: 'L\'eau est composée de 2 atomes d\'hydrogène (H) et 1 atome d\'oxygène (O) : H₂O.',
        hints: ['2 hydrogènes, 1 oxygène', 'H2O']
      },
      {
        id: 'q4',
        question: 'Qu\'est-ce qu\'une molécule ?',
        type: 'multiple-choice',
        options: ['Un atome seul', 'Un assemblage d\'atomes liés entre eux', 'Un électron', 'Un noyau atomique'],
        correctAnswer: 'Un assemblage d\'atomes liés entre eux',
        explanation: 'Une molécule est un groupe d\'atomes liés par des liaisons chimiques.',
        hints: ['Plusieurs atomes ensemble', 'Assemblage d\'atomes']
      },
      {
        id: 'q5',
        question: 'Quel est le symbole du carbone ?',
        type: 'fill-blank',
        correctAnswer: 'C',
        explanation: 'Le carbone a pour symbole C (du latin Carboneum).',
        hints: ['Une seule lettre', 'C']
      },
      {
        id: 'q6',
        question: 'Combien d\'atomes contient la molécule CO₂ ?',
        type: 'multiple-choice',
        options: ['2', '3', '4', '12'],
        correctAnswer: '3',
        explanation: 'CO₂ = 1 atome de carbone + 2 atomes d\'oxygène = 3 atomes.',
        hints: ['C = 1, O₂ = 2', '1 + 2 = 3']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : L\'air est un corps pur.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! L\'air est un mélange de plusieurs gaz (azote, oxygène, CO₂, etc.).',
        hints: ['L\'air contient plusieurs gaz', 'C\'est faux']
      },
      {
        id: 'q8',
        question: 'Quelle est la formule du méthane ?',
        type: 'multiple-choice',
        options: ['CH₄', 'CO₂', 'H₂O', 'O₂'],
        correctAnswer: 'CH₄',
        explanation: 'Le méthane CH₄ est composé d\'1 carbone et 4 hydrogènes.',
        hints: ['Gaz naturel', 'CH₄']
      },
      {
        id: 'q9',
        question: 'Quel gaz représente environ 78% de l\'air ?',
        type: 'multiple-choice',
        options: ['L\'oxygène', 'Le dioxyde de carbone', 'L\'azote', 'L\'hydrogène'],
        correctAnswer: 'L\'azote',
        explanation: 'L\'air contient environ 78% d\'azote (N₂) et 21% d\'oxygène (O₂).',
        hints: ['Ce n\'est pas l\'oxygène', 'L\'azote N₂']
      },
      {
        id: 'q10',
        question: 'Quel est le symbole de l\'atome de fer ?',
        type: 'fill-blank',
        correctAnswer: 'Fe',
        explanation: 'Le fer a pour symbole Fe (du latin Ferrum).',
        hints: ['Du latin Ferrum', 'Fe']
      }
    ]
  },

  {
    id: 'sci-4eme-002',
    title: 'L\'électricité : tension et intensité',
    subject: 'sciences',
    level: '4ème',
    difficulty: 4,
    description: 'Comprends les grandeurs électriques : tension, intensité et loi d\'Ohm.',
    estimatedTime: 20,
    skills: ['Physique', 'Électricité', 'Mesures'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle est l\'unité de la tension électrique ?',
        type: 'fill-blank',
        correctAnswer: 'volt',
        explanation: 'La tension se mesure en Volts (V), du nom d\'Alessandro Volta.',
        hints: ['Du nom d\'un scientifique italien', 'Volt']
      },
      {
        id: 'q2',
        question: 'Quelle est l\'unité de l\'intensité du courant ?',
        type: 'fill-blank',
        correctAnswer: 'ampère',
        explanation: 'L\'intensité se mesure en Ampères (A), du nom d\'André-Marie Ampère.',
        hints: ['Scientifique français', 'Ampère']
      },
      {
        id: 'q3',
        question: 'Quel appareil mesure la tension ?',
        type: 'multiple-choice',
        options: ['Ampèremètre', 'Voltmètre', 'Ohmmètre', 'Wattmètre'],
        correctAnswer: 'Voltmètre',
        explanation: 'Le voltmètre mesure la tension. Il se branche en dérivation (parallèle).',
        hints: ['Volt → Voltmètre', 'Voltmètre']
      },
      {
        id: 'q4',
        question: 'Comment branche-t-on un ampèremètre ?',
        type: 'multiple-choice',
        options: ['En dérivation', 'En série', 'N\'importe comment', 'Hors du circuit'],
        correctAnswer: 'En série',
        explanation: 'L\'ampèremètre se branche en série (dans le circuit) pour mesurer l\'intensité.',
        hints: ['Le courant doit traverser l\'appareil', 'En série']
      },
      {
        id: 'q5',
        question: 'Quelle est la formule de la loi d\'Ohm ?',
        type: 'multiple-choice',
        options: ['U = R × I', 'U = R + I', 'U = R / I', 'U = R - I'],
        correctAnswer: 'U = R × I',
        explanation: 'Loi d\'Ohm : U = R × I (Tension = Résistance × Intensité).',
        hints: ['C\'est une multiplication', 'U = R × I']
      },
      {
        id: 'q6',
        question: 'Une résistance de 10 Ω est traversée par un courant de 2 A. Quelle est la tension ?',
        type: 'fill-blank',
        correctAnswer: '20',
        explanation: 'U = R × I = 10 × 2 = 20 V.',
        hints: ['U = R × I', '10 × 2 = ?']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : Dans un circuit en série, l\'intensité est la même partout.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! En série, le courant n\'a qu\'un seul chemin, donc I est constante.',
        hints: ['Un seul chemin pour le courant', 'Vrai']
      },
      {
        id: 'q8',
        question: 'Quelle est l\'unité de la résistance ?',
        type: 'fill-blank',
        correctAnswer: 'ohm',
        explanation: 'La résistance se mesure en Ohms (Ω), du nom de Georg Ohm.',
        hints: ['Symbole Ω', 'Ohm']
      },
      {
        id: 'q9',
        question: 'Une lampe fonctionne sous 6 V avec une intensité de 0.5 A. Quelle est sa résistance ?',
        type: 'fill-blank',
        correctAnswer: '12',
        explanation: 'R = U / I = 6 / 0.5 = 12 Ω.',
        hints: ['R = U / I', '6 ÷ 0.5 = ?']
      },
      {
        id: 'q10',
        question: 'Dans un circuit en dérivation, qu\'est-ce qui est identique pour chaque branche ?',
        type: 'multiple-choice',
        options: ['L\'intensité', 'La tension', 'La résistance', 'La puissance'],
        correctAnswer: 'La tension',
        explanation: 'En dérivation, chaque branche est soumise à la même tension.',
        hints: ['Chaque branche est reliée aux mêmes points', 'La tension']
      }
    ]
  },

  {
    id: 'sci-4eme-003',
    title: 'La lumière et les couleurs',
    subject: 'sciences',
    level: '4ème',
    difficulty: 3,
    description: 'Découvre la nature de la lumière, sa décomposition et la synthèse des couleurs.',
    estimatedTime: 18,
    skills: ['Physique', 'Optique', 'Lumière'],
    questions: [
      {
        id: 'q1',
        question: 'Quelles sont les trois couleurs primaires de la lumière ?',
        type: 'multiple-choice',
        options: ['Rouge, Jaune, Bleu', 'Rouge, Vert, Bleu', 'Cyan, Magenta, Jaune', 'Blanc, Noir, Gris'],
        correctAnswer: 'Rouge, Vert, Bleu',
        explanation: 'En synthèse additive (lumière), les primaires sont Rouge, Vert, Bleu (RVB ou RGB).',
        hints: ['Pense aux écrans', 'RGB']
      },
      {
        id: 'q2',
        question: 'Comment s\'appelle l\'arc coloré formé par la décomposition de la lumière blanche ?',
        type: 'fill-blank',
        correctAnswer: 'spectre',
        explanation: 'Le spectre est l\'ensemble des couleurs obtenues par décomposition de la lumière blanche.',
        hints: ['Arc-en-ciel', 'Spectre']
      },
      {
        id: 'q3',
        question: 'Quel objet permet de décomposer la lumière blanche ?',
        type: 'multiple-choice',
        options: ['Un miroir', 'Un prisme', 'Une loupe', 'Un filtre'],
        correctAnswer: 'Un prisme',
        explanation: 'Le prisme décompose la lumière blanche en ses différentes couleurs.',
        hints: ['Objet triangulaire en verre', 'Prisme']
      },
      {
        id: 'q4',
        question: 'Quelle couleur obtient-on en mélangeant lumière rouge + lumière verte ?',
        type: 'fill-blank',
        correctAnswer: 'jaune',
        explanation: 'Rouge + Vert = Jaune (synthèse additive).',
        hints: ['Synthèse additive', 'Jaune']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : La lumière blanche est composée de plusieurs couleurs.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! La lumière blanche contient toutes les couleurs du spectre visible.',
        hints: ['Pense au prisme', 'Vrai']
      },
      {
        id: 'q6',
        question: 'Quelle couleur obtient-on en mélangeant les 3 couleurs primaires (RVB) ?',
        type: 'fill-blank',
        correctAnswer: 'blanc',
        explanation: 'Rouge + Vert + Bleu = Blanc (synthèse additive complète).',
        hints: ['Toutes les couleurs ensemble', 'Blanc']
      },
      {
        id: 'q7',
        question: 'Un objet rouge éclairé en lumière blanche apparaît rouge. Pourquoi ?',
        type: 'multiple-choice',
        options: ['Il émet de la lumière rouge', 'Il absorbe le rouge et diffuse les autres', 'Il diffuse le rouge et absorbe les autres', 'Il transforme la lumière en rouge'],
        correctAnswer: 'Il diffuse le rouge et absorbe les autres',
        explanation: 'L\'objet absorbe toutes les couleurs sauf le rouge qu\'il diffuse vers nos yeux.',
        hints: ['Il renvoie le rouge', 'Absorbe les autres']
      },
      {
        id: 'q8',
        question: 'Un objet blanc éclairé en lumière rouge apparaît de quelle couleur ?',
        type: 'fill-blank',
        correctAnswer: 'rouge',
        explanation: 'Un objet blanc diffuse toutes les couleurs qu\'il reçoit. En lumière rouge, il apparaît rouge.',
        hints: ['Il diffuse ce qu\'il reçoit', 'Rouge']
      },
      {
        id: 'q9',
        question: 'Quelle couleur obtient-on en mélangeant lumière rouge + lumière bleue ?',
        type: 'multiple-choice',
        options: ['Violet', 'Magenta', 'Cyan', 'Orange'],
        correctAnswer: 'Magenta',
        explanation: 'Rouge + Bleu = Magenta (synthèse additive).',
        hints: ['Un rose foncé', 'Magenta']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : La couleur d\'un objet dépend de la lumière qui l\'éclaire.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Un objet ne peut diffuser que les couleurs présentes dans la lumière incidente.',
        hints: ['Pense à l\'objet rouge en lumière bleue', 'Vrai']
      }
    ]
  },

  // ==================== 4ÈME - FRANÇAIS ====================

  {
    id: 'fr-4eme-010',
    title: 'Les valeurs des temps : présent et futur',
    subject: 'francais',
    level: '4ème',
    difficulty: 3,
    description: 'Comprends les différentes valeurs du présent et du futur de l\'indicatif.',
    estimatedTime: 18,
    skills: ['Conjugaison', 'Grammaire', 'Valeurs des temps'],
    questions: [
      {
        id: 'q1',
        question: 'Dans "Le soleil se lève à l\'est", quelle est la valeur du présent ?',
        type: 'multiple-choice',
        options: ['Présent d\'énonciation', 'Présent de vérité générale', 'Présent de narration', 'Présent d\'habitude'],
        correctAnswer: 'Présent de vérité générale',
        explanation: 'Le présent de vérité générale exprime un fait toujours vrai.',
        hints: ['C\'est toujours vrai', 'Vérité générale']
      },
      {
        id: 'q2',
        question: 'Dans "Je travaille en ce moment", quelle est la valeur du présent ?',
        type: 'multiple-choice',
        options: ['Présent de vérité générale', 'Présent d\'énonciation', 'Présent de narration', 'Présent d\'habitude'],
        correctAnswer: 'Présent d\'énonciation',
        explanation: 'Le présent d\'énonciation indique que l\'action se passe au moment où l\'on parle.',
        hints: ['Maintenant, en ce moment', 'Énonciation']
      },
      {
        id: 'q3',
        question: 'Dans "Tous les matins, je prends le bus", quelle est la valeur du présent ?',
        type: 'multiple-choice',
        options: ['Présent d\'énonciation', 'Présent de vérité générale', 'Présent de narration', 'Présent d\'habitude'],
        correctAnswer: 'Présent d\'habitude',
        explanation: 'Le présent d\'habitude exprime une action qui se répète régulièrement.',
        hints: ['Tous les matins = répétition', 'Habitude']
      },
      {
        id: 'q4',
        question: 'Dans "Napoléon entre dans Moscou en 1812", quelle est la valeur du présent ?',
        type: 'multiple-choice',
        options: ['Présent d\'énonciation', 'Présent de narration', 'Présent de vérité générale', 'Présent d\'habitude'],
        correctAnswer: 'Présent de narration',
        explanation: 'Le présent de narration (ou historique) rend vivant un événement passé.',
        hints: ['Fait passé raconté au présent', 'Narration']
      },
      {
        id: 'q5',
        question: 'Quelle est la valeur du futur dans "Tu rangeras ta chambre" ?',
        type: 'multiple-choice',
        options: ['Futur de certitude', 'Futur d\'ordre', 'Futur de supposition', 'Futur historique'],
        correctAnswer: 'Futur d\'ordre',
        explanation: 'Le futur peut exprimer un ordre atténué, moins direct que l\'impératif.',
        hints: ['C\'est un ordre déguisé', 'Futur d\'ordre']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : Le présent peut être utilisé pour exprimer un futur proche.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Exemple : "Je pars demain" (présent à valeur de futur proche).',
        hints: ['Je pars demain = futur proche', 'Vrai']
      },
      {
        id: 'q7',
        question: 'Dans "Si tu viens, nous irons au cinéma", pourquoi utilise-t-on le présent après "si" ?',
        type: 'multiple-choice',
        options: ['C\'est une erreur', 'Le présent exprime une condition', 'Le futur est interdit après si', 'C\'est du présent de narration'],
        correctAnswer: 'Le présent exprime une condition',
        explanation: 'Après "si" de condition, on utilise le présent (pas le futur) pour exprimer l\'hypothèse.',
        hints: ['Règle : si + présent', 'Condition']
      },
      {
        id: 'q8',
        question: 'Quelle est la valeur du futur dans "Il aura oublié ses clés" ?',
        type: 'multiple-choice',
        options: ['Futur de certitude', 'Futur d\'ordre', 'Futur de supposition', 'Futur proche'],
        correctAnswer: 'Futur de supposition',
        explanation: 'Le futur antérieur peut exprimer une supposition, une probabilité.',
        hints: ['C\'est une hypothèse', 'Supposition']
      },
      {
        id: 'q9',
        question: 'Conjugue "finir" au futur simple (nous) :',
        type: 'fill-blank',
        correctAnswer: 'finirons',
        explanation: 'Nous finirons. Futur : infinitif + -ons pour nous.',
        hints: ['Infinitif + terminaison', 'Finirons']
      },
      {
        id: 'q10',
        question: 'Dans "L\'eau bout à 100°C", quelle valeur a le présent ?',
        type: 'multiple-choice',
        options: ['Présent d\'habitude', 'Présent de narration', 'Présent de vérité générale', 'Présent d\'énonciation'],
        correctAnswer: 'Présent de vérité générale',
        explanation: 'C\'est un fait scientifique toujours vrai : présent de vérité générale.',
        hints: ['Fait scientifique permanent', 'Vérité générale']
      }
    ]
  },

  {
    id: 'fr-4eme-002',
    title: 'Le discours direct et indirect',
    subject: 'francais',
    level: '4ème',
    difficulty: 4,
    description: 'Maîtrise le passage du discours direct au discours indirect.',
    estimatedTime: 20,
    skills: ['Grammaire', 'Discours rapporté', 'Conjugaison'],
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce que le discours direct ?',
        type: 'multiple-choice',
        options: ['Les paroles sont rapportées telles quelles', 'Les paroles sont modifiées', 'Les paroles sont supprimées', 'Les paroles sont résumées'],
        correctAnswer: 'Les paroles sont rapportées telles quelles',
        explanation: 'Le discours direct rapporte les paroles exactes, avec guillemets.',
        hints: ['Avec guillemets', 'Paroles exactes']
      },
      {
        id: 'q2',
        question: 'Transforme en discours indirect : Il dit : "Je suis fatigué."',
        type: 'multiple-choice',
        options: ['Il dit qu\'il est fatigué.', 'Il dit qu\'il était fatigué.', 'Il dit : il est fatigué.', 'Il dit je suis fatigué.'],
        correctAnswer: 'Il dit qu\'il est fatigué.',
        explanation: 'Discours indirect : que + changement de pronom (je → il). Le présent reste au présent si le verbe introducteur est au présent.',
        hints: ['Il dit que...', 'Je devient il']
      },
      {
        id: 'q3',
        question: 'Transforme : Elle a demandé : "Viens-tu demain ?"',
        type: 'multiple-choice',
        options: ['Elle a demandé si tu venais le lendemain.', 'Elle a demandé que tu viens demain.', 'Elle a demandé : tu viens demain ?', 'Elle a demandé si tu viens demain.'],
        correctAnswer: 'Elle a demandé si tu venais le lendemain.',
        explanation: 'Question → si. Verbe au passé → concordance des temps (viens → venais). Demain → le lendemain.',
        hints: ['Question = si', 'Demain → le lendemain']
      },
      {
        id: 'q4',
        question: 'Quel changement de temps se produit quand le verbe introducteur est au passé ?',
        type: 'multiple-choice',
        options: ['Présent → Imparfait', 'Présent → Passé simple', 'Présent → Futur', 'Aucun changement'],
        correctAnswer: 'Présent → Imparfait',
        explanation: 'Concordance des temps : si le verbe introducteur est au passé, le présent devient imparfait.',
        hints: ['Concordance des temps', 'Présent → Imparfait']
      },
      {
        id: 'q5',
        question: '"Ici" devient quoi au discours indirect ?',
        type: 'fill-blank',
        correctAnswer: 'là',
        explanation: 'Ici → là (changement de repère spatial).',
        hints: ['Changement de lieu', 'Là']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : Au discours indirect, on garde les guillemets.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Les guillemets disparaissent au discours indirect.',
        hints: ['Les guillemets sont pour le discours direct', 'Faux']
      },
      {
        id: 'q7',
        question: 'Transforme : Il m\'a dit : "Je viendrai demain."',
        type: 'multiple-choice',
        options: ['Il m\'a dit qu\'il viendrait le lendemain.', 'Il m\'a dit qu\'il viendra demain.', 'Il m\'a dit il viendra demain.', 'Il m\'a dit que je viendrai demain.'],
        correctAnswer: 'Il m\'a dit qu\'il viendrait le lendemain.',
        explanation: 'Futur → conditionnel présent. Demain → le lendemain. Je → il.',
        hints: ['Futur → Conditionnel', 'Demain → le lendemain']
      },
      {
        id: 'q8',
        question: '"Hier" devient quoi au discours indirect (verbe au passé) ?',
        type: 'fill-blank',
        correctAnswer: 'la veille',
        explanation: 'Hier → la veille (changement de repère temporel).',
        hints: ['Le jour d\'avant', 'La veille']
      },
      {
        id: 'q9',
        question: 'Comment introduit-on une question au discours indirect ?',
        type: 'multiple-choice',
        options: ['Avec "que"', 'Avec "si" ou un mot interrogatif', 'Avec des guillemets', 'Avec "car"'],
        correctAnswer: 'Avec "si" ou un mot interrogatif',
        explanation: 'Question fermée → si. Question ouverte → mot interrogatif (qui, que, où, comment...).',
        hints: ['Pas de guillemets', 'Si ou mot interrogatif']
      },
      {
        id: 'q10',
        question: 'Transforme : "Où vas-tu ?" demanda-t-elle.',
        type: 'multiple-choice',
        options: ['Elle demanda où il allait.', 'Elle demanda si il va.', 'Elle demanda que où vas-tu.', 'Elle demanda où tu vas.'],
        correctAnswer: 'Elle demanda où il allait.',
        explanation: 'Mot interrogatif conservé (où). Tu → il. Vas → allait (concordance).',
        hints: ['Garde le mot interrogatif', 'Concordance des temps']
      }
    ]
  },

  {
    id: 'fr-4eme-003',
    title: 'Les figures de style',
    subject: 'francais',
    level: '4ème',
    difficulty: 4,
    description: 'Identifie et comprends les principales figures de style.',
    estimatedTime: 18,
    skills: ['Littérature', 'Figures de style', 'Analyse'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle figure de style compare deux éléments avec "comme" ou "tel" ?',
        type: 'fill-blank',
        correctAnswer: 'comparaison',
        explanation: 'La comparaison utilise un outil de comparaison (comme, tel, semblable à...).',
        hints: ['Avec un outil de comparaison', 'Comparaison']
      },
      {
        id: 'q2',
        question: '"Cet homme est un lion" est une...',
        type: 'multiple-choice',
        options: ['Comparaison', 'Métaphore', 'Personnification', 'Hyperbole'],
        correctAnswer: 'Métaphore',
        explanation: 'La métaphore compare sans outil de comparaison. L\'homme EST un lion (pas "comme").',
        hints: ['Pas de mot de comparaison', 'Métaphore']
      },
      {
        id: 'q3',
        question: '"Le vent hurle dans les arbres" est une...',
        type: 'multiple-choice',
        options: ['Métaphore', 'Comparaison', 'Personnification', 'Antithèse'],
        correctAnswer: 'Personnification',
        explanation: 'La personnification attribue des caractéristiques humaines à un objet ou animal.',
        hints: ['Le vent agit comme un humain', 'Personnification']
      },
      {
        id: 'q4',
        question: '"Je meurs de faim" est une...',
        type: 'fill-blank',
        correctAnswer: 'hyperbole',
        explanation: 'L\'hyperbole est une exagération volontaire pour créer un effet.',
        hints: ['Exagération', 'Hyperbole']
      },
      {
        id: 'q5',
        question: '"Il est parti pour un monde meilleur" (= il est mort) est un...',
        type: 'multiple-choice',
        options: ['Euphémisme', 'Hyperbole', 'Oxymore', 'Pléonasme'],
        correctAnswer: 'Euphémisme',
        explanation: 'L\'euphémisme atténue une réalité brutale ou désagréable.',
        hints: ['Atténuation', 'Euphémisme']
      },
      {
        id: 'q6',
        question: '"Un silence assourdissant" est un...',
        type: 'fill-blank',
        correctAnswer: 'oxymore',
        explanation: 'L\'oxymore associe deux termes contradictoires.',
        hints: ['Silence + assourdissant = contradiction', 'Oxymore']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : L\'anaphore est la répétition d\'un mot en début de phrase.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'anaphore répète un mot ou groupe de mots en début de vers ou phrases successives.',
        hints: ['Répétition en début', 'Vrai']
      },
      {
        id: 'q8',
        question: '"Paris a froid, Paris a faim" est une...',
        type: 'multiple-choice',
        options: ['Métaphore', 'Anaphore', 'Antithèse', 'Euphémisme'],
        correctAnswer: 'Anaphore',
        explanation: 'Paris est répété en début de chaque proposition : c\'est une anaphore.',
        hints: ['Répétition de Paris', 'Anaphore']
      },
      {
        id: 'q9',
        question: '"La guerre et la paix" oppose deux termes contraires. C\'est une...',
        type: 'fill-blank',
        correctAnswer: 'antithèse',
        explanation: 'L\'antithèse oppose deux idées, deux termes contraires.',
        hints: ['Opposition', 'Antithèse']
      },
      {
        id: 'q10',
        question: '"J\'ai lu tout Molière" (= toutes ses œuvres) est une...',
        type: 'multiple-choice',
        options: ['Métonymie', 'Litote', 'Périphrase', 'Hyperbole'],
        correctAnswer: 'Métonymie',
        explanation: 'La métonymie désigne quelque chose par un élément lié (l\'auteur pour ses œuvres).',
        hints: ['L\'auteur pour ses œuvres', 'Métonymie']
      }
    ]
  },

  // ==================== 4ÈME - HISTOIRE-GÉO ====================

  {
    id: 'hist-4eme-001',
    title: 'La Révolution française',
    subject: 'histoire-geo',
    level: '4ème',
    difficulty: 4,
    description: 'Découvre les causes, événements et conséquences de la Révolution française.',
    estimatedTime: 20,
    skills: ['Histoire', 'Révolution', 'XVIIIe siècle'],
    questions: [
      {
        id: 'q1',
        question: 'En quelle année a eu lieu la prise de la Bastille ?',
        type: 'fill-blank',
        correctAnswer: '1789',
        explanation: 'Le 14 juillet 1789, le peuple de Paris prend la Bastille, symbole du pouvoir royal.',
        hints: ['14 juillet...', '1789']
      },
      {
        id: 'q2',
        question: 'Comment appelle-t-on les trois groupes de la société sous l\'Ancien Régime ?',
        type: 'multiple-choice',
        options: ['Les castes', 'Les ordres', 'Les classes', 'Les rangs'],
        correctAnswer: 'Les ordres',
        explanation: 'Les trois ordres : le clergé, la noblesse et le tiers état.',
        hints: ['Clergé, Noblesse, Tiers état', 'Les ordres']
      },
      {
        id: 'q3',
        question: 'Qu\'est-ce que la Déclaration des droits de l\'homme et du citoyen proclame ?',
        type: 'multiple-choice',
        options: ['La monarchie absolue', 'Les droits et libertés fondamentaux', 'La guerre aux autres pays', 'Le retour à l\'Ancien Régime'],
        correctAnswer: 'Les droits et libertés fondamentaux',
        explanation: 'Adoptée le 26 août 1789, elle proclame les droits naturels : liberté, égalité, propriété.',
        hints: ['Liberté, égalité', 'Droits fondamentaux']
      },
      {
        id: 'q4',
        question: 'Qui était roi de France en 1789 ?',
        type: 'fill-blank',
        correctAnswer: 'Louis XVI',
        explanation: 'Louis XVI régnait depuis 1774. Il sera guillotiné en 1793.',
        hints: ['Un Louis', 'Louis XVI']
      },
      {
        id: 'q5',
        question: 'Qu\'est-ce que le tiers état ?',
        type: 'multiple-choice',
        options: ['Le clergé', 'La noblesse', 'Le reste de la population (98%)', 'Les soldats'],
        correctAnswer: 'Le reste de la population (98%)',
        explanation: 'Le tiers état représentait 98% de la population : bourgeois, paysans, artisans...',
        hints: ['Ni clergé, ni noblesse', 'Le peuple']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : La devise "Liberté, Égalité, Fraternité" date de la Révolution.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Cette devise est née pendant la Révolution française.',
        hints: ['C\'est la devise de la République', 'Vrai']
      },
      {
        id: 'q7',
        question: 'Comment appelle-t-on la période de terreur (1793-1794) ?',
        type: 'fill-blank',
        correctAnswer: 'Terreur',
        explanation: 'La Terreur (1793-1794) est une période de répression violente menée par Robespierre.',
        hints: ['Période sanglante', 'La Terreur']
      },
      {
        id: 'q8',
        question: 'Quel événement marque la fin de la monarchie absolue en France ?',
        type: 'multiple-choice',
        options: ['La prise de la Bastille', 'L\'exécution de Louis XVI', 'La fuite à Varennes', 'Le serment du Jeu de paume'],
        correctAnswer: 'L\'exécution de Louis XVI',
        explanation: 'Louis XVI est guillotiné le 21 janvier 1793, mettant fin à la monarchie.',
        hints: ['En 1793', 'Guillotine']
      },
      {
        id: 'q9',
        question: 'Qu\'est-ce que les États généraux ?',
        type: 'multiple-choice',
        options: ['Une assemblée des trois ordres', 'Une armée', 'Un tribunal', 'Un impôt'],
        correctAnswer: 'Une assemblée des trois ordres',
        explanation: 'Les États généraux réunissaient les représentants des trois ordres. Convoqués en 1789.',
        hints: ['Assemblée convoquée par le roi', 'Trois ordres']
      },
      {
        id: 'q10',
        question: 'Qui dirigeait le Comité de salut public pendant la Terreur ?',
        type: 'fill-blank',
        correctAnswer: 'Robespierre',
        explanation: 'Maximilien de Robespierre dirigea la Terreur avant d\'être lui-même guillotiné en 1794.',
        hints: ['L\'Incorruptible', 'Robespierre']
      }
    ]
  },

  {
    id: 'hist-4eme-002',
    title: 'L\'Europe et la révolution industrielle',
    subject: 'histoire-geo',
    level: '4ème',
    difficulty: 3,
    description: 'Comprends les transformations économiques et sociales du XIXe siècle.',
    estimatedTime: 18,
    skills: ['Histoire', 'Révolution industrielle', 'XIXe siècle'],
    questions: [
      {
        id: 'q1',
        question: 'Dans quel pays a commencé la révolution industrielle ?',
        type: 'fill-blank',
        correctAnswer: 'Angleterre',
        explanation: 'La révolution industrielle a débuté en Angleterre vers 1750-1780.',
        hints: ['Une île européenne', 'Angleterre']
      },
      {
        id: 'q2',
        question: 'Quelle invention a lancé la révolution industrielle ?',
        type: 'multiple-choice',
        options: ['L\'électricité', 'La machine à vapeur', 'L\'ordinateur', 'L\'automobile'],
        correctAnswer: 'La machine à vapeur',
        explanation: 'La machine à vapeur de James Watt (1769) a révolutionné l\'industrie et les transports.',
        hints: ['Utilise le charbon', 'Machine à vapeur']
      },
      {
        id: 'q3',
        question: 'Quelle source d\'énergie était la plus utilisée au XIXe siècle ?',
        type: 'fill-blank',
        correctAnswer: 'charbon',
        explanation: 'Le charbon était la principale source d\'énergie de la révolution industrielle.',
        hints: ['Combustible fossile noir', 'Charbon']
      },
      {
        id: 'q4',
        question: 'Comment appelle-t-on le déplacement des paysans vers les villes ?',
        type: 'multiple-choice',
        options: ['L\'immigration', 'L\'exode rural', 'L\'émigration', 'La colonisation'],
        correctAnswer: 'L\'exode rural',
        explanation: 'L\'exode rural désigne le départ massif des campagnes vers les villes industrielles.',
        hints: ['Rural = campagne', 'Exode rural']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Les conditions de travail des ouvriers au XIXe siècle étaient excellentes.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Les ouvriers travaillaient 12-16h/jour, y compris les enfants, dans des conditions difficiles.',
        hints: ['Travail des enfants, journées très longues', 'Faux']
      },
      {
        id: 'q6',
        question: 'Quel moyen de transport a été révolutionné par la machine à vapeur ?',
        type: 'multiple-choice',
        options: ['L\'avion', 'Le train', 'La voiture', 'Le vélo'],
        correctAnswer: 'Le train',
        explanation: 'Le chemin de fer s\'est développé grâce à la locomotive à vapeur (Stephenson, 1825).',
        hints: ['Sur des rails', 'Le train']
      },
      {
        id: 'q7',
        question: 'Comment appelle-t-on les propriétaires des usines et des capitaux ?',
        type: 'fill-blank',
        correctAnswer: 'bourgeoisie',
        explanation: 'La bourgeoisie industrielle possédait les moyens de production (usines, capitaux).',
        hints: ['Classe sociale riche', 'Bourgeoisie']
      },
      {
        id: 'q8',
        question: 'Quel penseur a critiqué l\'exploitation des ouvriers et proposé le communisme ?',
        type: 'multiple-choice',
        options: ['Napoléon', 'Karl Marx', 'Louis XIV', 'Victor Hugo'],
        correctAnswer: 'Karl Marx',
        explanation: 'Karl Marx (Le Capital, 1867) a analysé le capitalisme et proposé le communisme.',
        hints: ['Auteur du Capital', 'Karl Marx']
      },
      {
        id: 'q9',
        question: 'Comment appelle-t-on la classe sociale des travailleurs d\'usine ?',
        type: 'fill-blank',
        correctAnswer: 'prolétariat',
        explanation: 'Le prolétariat désigne la classe ouvrière qui ne possède que sa force de travail.',
        hints: ['Les ouvriers', 'Prolétariat']
      },
      {
        id: 'q10',
        question: 'Quelle invention a permis de produire de l\'acier en grande quantité ?',
        type: 'multiple-choice',
        options: ['Le procédé Bessemer', 'La machine à coudre', 'Le métier à tisser', 'La dynamo'],
        correctAnswer: 'Le procédé Bessemer',
        explanation: 'Le procédé Bessemer (1856) a révolutionné la production d\'acier.',
        hints: ['Pour faire de l\'acier', 'Bessemer']
      }
    ]
  },

  {
    id: 'geo-4eme-001',
    title: 'La mondialisation',
    subject: 'histoire-geo',
    level: '4ème',
    difficulty: 3,
    description: 'Comprends les flux, acteurs et enjeux de la mondialisation.',
    estimatedTime: 18,
    skills: ['Géographie', 'Mondialisation', 'Économie'],
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce que la mondialisation ?',
        type: 'multiple-choice',
        options: ['L\'isolation des pays', 'L\'intégration des économies et sociétés à l\'échelle mondiale', 'La fin du commerce', 'La disparition des frontières physiques'],
        correctAnswer: 'L\'intégration des économies et sociétés à l\'échelle mondiale',
        explanation: 'La mondialisation est le processus d\'intégration des marchés et des sociétés à l\'échelle planétaire.',
        hints: ['Échanges mondiaux', 'Intégration planétaire']
      },
      {
        id: 'q2',
        question: 'Que signifie le sigle FMN ?',
        type: 'multiple-choice',
        options: ['Fonds Monétaire National', 'Firme MultiNationale', 'Fédération Mondiale du Nord', 'Finance et Monnaie Nationale'],
        correctAnswer: 'Firme MultiNationale',
        explanation: 'Une FMN (ou multinationale) est une entreprise présente dans plusieurs pays.',
        hints: ['Grande entreprise internationale', 'Multinationale']
      },
      {
        id: 'q3',
        question: 'Quel type de flux circule le plus grâce à Internet ?',
        type: 'multiple-choice',
        options: ['Flux de marchandises', 'Flux d\'informations', 'Flux de personnes', 'Flux de pétrole'],
        correctAnswer: 'Flux d\'informations',
        explanation: 'Internet permet la circulation instantanée d\'informations à travers le monde.',
        hints: ['Données numériques', 'Informations']
      },
      {
        id: 'q4',
        question: 'Comment appelle-t-on les pays riches et développés ?',
        type: 'multiple-choice',
        options: ['Pays du Sud', 'Pays en développement', 'Pays du Nord', 'Pays émergents'],
        correctAnswer: 'Pays du Nord',
        explanation: 'Les "pays du Nord" désignent les pays développés (Europe, USA, Japon...).',
        hints: ['Pays riches', 'Pays du Nord']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : La mondialisation a réduit les inégalités entre tous les pays.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! La mondialisation a creusé certaines inégalités, même si des pays émergents ont progressé.',
        hints: ['Les inégalités persistent', 'Faux']
      },
      {
        id: 'q6',
        question: 'Quel est le premier port de conteneurs au monde ?',
        type: 'multiple-choice',
        options: ['Rotterdam', 'New York', 'Shanghai', 'Le Havre'],
        correctAnswer: 'Shanghai',
        explanation: 'Shanghai (Chine) est le premier port mondial en trafic de conteneurs.',
        hints: ['En Asie', 'Shanghai']
      },
      {
        id: 'q7',
        question: 'Comment appelle-t-on le déplacement d\'usines vers des pays à main-d\'œuvre moins chère ?',
        type: 'fill-blank',
        correctAnswer: 'délocalisation',
        explanation: 'La délocalisation consiste à transférer la production vers des pays où les coûts sont plus bas.',
        hints: ['Déplacer la production', 'Délocalisation']
      },
      {
        id: 'q8',
        question: 'Que sont le Brésil, la Russie, l\'Inde et la Chine (BRIC) ?',
        type: 'multiple-choice',
        options: ['Des pays pauvres', 'Des pays émergents', 'Des pays du Nord', 'Des pays isolés'],
        correctAnswer: 'Des pays émergents',
        explanation: 'Les BRICS sont des pays émergents à forte croissance économique.',
        hints: ['En développement rapide', 'Émergents']
      },
      {
        id: 'q9',
        question: 'Quel moyen de transport assure 90% du commerce mondial de marchandises ?',
        type: 'fill-blank',
        correctAnswer: 'bateau',
        explanation: 'Le transport maritime assure environ 90% du commerce mondial en volume.',
        hints: ['Par mer', 'Bateau/navire']
      },
      {
        id: 'q10',
        question: 'Qu\'est-ce qu\'une zone franche ?',
        type: 'multiple-choice',
        options: ['Une zone de guerre', 'Une zone sans impôts ni taxes douanières', 'Une zone interdite', 'Une zone agricole'],
        correctAnswer: 'Une zone sans impôts ni taxes douanières',
        explanation: 'Les zones franches attirent les entreprises avec des avantages fiscaux.',
        hints: ['Avantages fiscaux', 'Sans taxes']
      }
    ]
  },

  // ==================== 4ÈME - ANGLAIS ====================

  {
    id: 'en-4eme-001',
    title: 'Present Perfect',
    subject: 'anglais',
    level: '4ème',
    difficulty: 4,
    description: 'Maîtrise le present perfect et ses emplois.',
    estimatedTime: 20,
    skills: ['Grammar', 'Present Perfect', 'Tenses'],
    questions: [
      {
        id: 'q1',
        question: 'Comment forme-t-on le present perfect ?',
        type: 'multiple-choice',
        options: ['BE + verb-ING', 'HAVE + past participle', 'DID + verb', 'WILL + verb'],
        correctAnswer: 'HAVE + past participle',
        explanation: 'Present perfect = HAVE/HAS + participe passé (ex: I have eaten).',
        hints: ['Have ou Has', 'Have + participe passé']
      },
      {
        id: 'q2',
        question: 'I _____ (visit) London twice.',
        type: 'fill-blank',
        correctAnswer: 'have visited',
        explanation: 'I have visited London twice. Expérience passée avec résultat présent.',
        hints: ['Have + participe passé', 'Have visited']
      },
      {
        id: 'q3',
        question: 'She _____ (never/eat) sushi.',
        type: 'fill-blank',
        correctAnswer: 'has never eaten',
        explanation: 'She has never eaten sushi. "Never" se place entre HAVE et le participe.',
        hints: ['She = has', 'Has never eaten']
      },
      {
        id: 'q4',
        question: 'Quel mot-clé accompagne souvent le present perfect ?',
        type: 'multiple-choice',
        options: ['Yesterday', 'Last week', 'Already / Yet / Ever', 'Tomorrow'],
        correctAnswer: 'Already / Yet / Ever',
        explanation: 'Already, yet, ever, never, just, since, for accompagnent le present perfect.',
        hints: ['Pas de temps passé précis', 'Already, yet, ever']
      },
      {
        id: 'q5',
        question: 'They _____ (just/arrive).',
        type: 'fill-blank',
        correctAnswer: 'have just arrived',
        explanation: 'They have just arrived. "Just" = il y a très peu de temps.',
        hints: ['Just entre have et participe', 'Have just arrived']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : On utilise le present perfect avec "yesterday".',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! "Yesterday" (temps passé précis) → simple past. Present perfect = pas de moment précis.',
        hints: ['Yesterday = passé précis', 'Faux']
      },
      {
        id: 'q7',
        question: 'Have you _____ (finish) your homework?',
        type: 'fill-blank',
        correctAnswer: 'finished',
        explanation: 'Have you finished your homework? Question au present perfect.',
        hints: ['Participe passé', 'Finished']
      },
      {
        id: 'q8',
        question: 'Quelle est la différence entre "since" et "for" ?',
        type: 'multiple-choice',
        options: ['Aucune différence', 'Since = durée, For = point de départ', 'Since = point de départ, For = durée', 'Since = futur, For = passé'],
        correctAnswer: 'Since = point de départ, For = durée',
        explanation: 'Since 2020 (point de départ). For 3 years (durée).',
        hints: ['Since = date/moment', 'For = période']
      },
      {
        id: 'q9',
        question: 'I have lived here _____ 5 years.',
        type: 'fill-blank',
        correctAnswer: 'for',
        explanation: 'For 5 years = pendant 5 ans (durée).',
        hints: ['5 years = durée', 'For']
      },
      {
        id: 'q10',
        question: 'She has been a teacher _____ 2015.',
        type: 'fill-blank',
        correctAnswer: 'since',
        explanation: 'Since 2015 = depuis 2015 (point de départ).',
        hints: ['2015 = date précise', 'Since']
      }
    ]
  },

  {
    id: 'en-4eme-002',
    title: 'Les modaux : can, must, should',
    subject: 'anglais',
    level: '4ème',
    difficulty: 3,
    description: 'Apprends à utiliser les auxiliaires modaux en anglais.',
    estimatedTime: 18,
    skills: ['Grammar', 'Modals', 'Auxiliaries'],
    questions: [
      {
        id: 'q1',
        question: 'Que signifie "can" ?',
        type: 'multiple-choice',
        options: ['Devoir', 'Pouvoir / Savoir faire', 'Vouloir', 'Falloir'],
        correctAnswer: 'Pouvoir / Savoir faire',
        explanation: '"Can" exprime la capacité, la possibilité ou la permission.',
        hints: ['Capacité', 'Pouvoir']
      },
      {
        id: 'q2',
        question: 'She _____ speak three languages.',
        type: 'fill-blank',
        correctAnswer: 'can',
        explanation: 'She can speak three languages. (Elle sait parler trois langues.)',
        hints: ['Capacité', 'Can']
      },
      {
        id: 'q3',
        question: 'Que signifie "must" ?',
        type: 'multiple-choice',
        options: ['Pouvoir', 'Devoir (obligation)', 'Vouloir', 'Aimer'],
        correctAnswer: 'Devoir (obligation)',
        explanation: '"Must" exprime une obligation forte ou une certitude.',
        hints: ['Obligation', 'Devoir']
      },
      {
        id: 'q4',
        question: 'You _____ wear a seatbelt. (obligation)',
        type: 'fill-blank',
        correctAnswer: 'must',
        explanation: 'You must wear a seatbelt. (Tu dois porter la ceinture.)',
        hints: ['Obligation', 'Must']
      },
      {
        id: 'q5',
        question: 'Que signifie "should" ?',
        type: 'multiple-choice',
        options: ['Devoir absolument', 'Pouvoir', 'Devrais (conseil)', 'Vouloir'],
        correctAnswer: 'Devrais (conseil)',
        explanation: '"Should" exprime un conseil, une recommandation.',
        hints: ['Conseil', 'Devrais']
      },
      {
        id: 'q6',
        question: 'You _____ see a doctor. (conseil)',
        type: 'fill-blank',
        correctAnswer: 'should',
        explanation: 'You should see a doctor. (Tu devrais voir un médecin.)',
        hints: ['Conseil', 'Should']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : Après un modal, on utilise l\'infinitif SANS "to".',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Can go (pas "can to go"), must eat (pas "must to eat").',
        hints: ['Base verbale sans to', 'Vrai']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "Tu ne dois pas fumer ici" ?',
        type: 'multiple-choice',
        options: ['You mustn\'t smoke here.', 'You don\'t must smoke here.', 'You can\'t must smoke here.', 'You shouldn\'t must smoke here.'],
        correctAnswer: 'You mustn\'t smoke here.',
        explanation: 'Mustn\'t = interdiction. "You mustn\'t smoke here."',
        hints: ['Interdiction = must not', 'Mustn\'t']
      },
      {
        id: 'q9',
        question: 'Quelle est la forme passée de "can" ?',
        type: 'fill-blank',
        correctAnswer: 'could',
        explanation: 'Can → could. "I could swim when I was 5."',
        hints: ['Can au passé', 'Could']
      },
      {
        id: 'q10',
        question: '_____ I borrow your pen? (demande polie)',
        type: 'multiple-choice',
        options: ['Must', 'Should', 'Can / Could', 'Will'],
        correctAnswer: 'Can / Could',
        explanation: '"Can I...?" ou "Could I...?" pour demander poliment la permission.',
        hints: ['Demande de permission', 'Can ou Could']
      }
    ]
  },

  {
    id: 'en-4eme-003',
    title: 'Vocabulary - Environment and Ecology',
    subject: 'anglais',
    level: '4ème',
    difficulty: 3,
    description: 'Apprends le vocabulaire de l\'environnement et de l\'écologie.',
    estimatedTime: 15,
    skills: ['Vocabulary', 'Environment', 'Ecology'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "réchauffement climatique" ?',
        type: 'fill-blank',
        correctAnswer: 'global warming',
        explanation: '"Global warming" = réchauffement climatique.',
        hints: ['Global = mondial', 'Global warming']
      },
      {
        id: 'q2',
        question: 'Que signifie "pollution" ?',
        type: 'multiple-choice',
        options: ['Solution', 'Pollution', 'Population', 'Position'],
        correctAnswer: 'Pollution',
        explanation: '"Pollution" se dit de la même façon en anglais et en français.',
        hints: ['Même mot', 'Pollution']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "recycler" ?',
        type: 'fill-blank',
        correctAnswer: 'recycle',
        explanation: '"Recycle" = recycler. To recycle plastic, paper...',
        hints: ['Presque pareil', 'Recycle']
      },
      {
        id: 'q4',
        question: 'Que signifie "endangered species" ?',
        type: 'multiple-choice',
        options: ['Espèces dangereuses', 'Espèces en voie de disparition', 'Espèces communes', 'Espèces marines'],
        correctAnswer: 'Espèces en voie de disparition',
        explanation: '"Endangered species" = espèces menacées, en danger d\'extinction.',
        hints: ['Endangered = en danger', 'Menacées']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "énergie renouvelable" ?',
        type: 'fill-blank',
        correctAnswer: 'renewable energy',
        explanation: '"Renewable energy" = énergie renouvelable (solar, wind...).',
        hints: ['Renewable = renouvelable', 'Renewable energy']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Deforestation" signifie "déforestation".',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Deforestation = déforestation (destruction des forêts).',
        hints: ['Même mot', 'Vrai']
      },
      {
        id: 'q7',
        question: 'Que signifie "to save" dans le contexte environnemental ?',
        type: 'multiple-choice',
        options: ['Sauver / Économiser', 'Détruire', 'Polluer', 'Acheter'],
        correctAnswer: 'Sauver / Économiser',
        explanation: 'Save the planet = sauver la planète. Save water = économiser l\'eau.',
        hints: ['Sauver ou économiser', 'Save']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "effet de serre" ?',
        type: 'fill-blank',
        correctAnswer: 'greenhouse effect',
        explanation: '"Greenhouse effect" = effet de serre. Greenhouse = serre.',
        hints: ['Green + house', 'Greenhouse effect']
      },
      {
        id: 'q9',
        question: 'Que signifie "waste" ?',
        type: 'multiple-choice',
        options: ['Eau', 'Déchets', 'Nourriture', 'Énergie'],
        correctAnswer: 'Déchets',
        explanation: '"Waste" = déchets. Waste management = gestion des déchets.',
        hints: ['Ce qu\'on jette', 'Déchets']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "empreinte carbone" ?',
        type: 'fill-blank',
        correctAnswer: 'carbon footprint',
        explanation: '"Carbon footprint" = empreinte carbone.',
        hints: ['Carbon + empreinte de pied', 'Carbon footprint']
      }
    ]
  },

  // ========================================
  // EXERCICES 3ÈME (TROISIÈME)
  // ========================================

  // --- MATHÉMATIQUES 3ÈME ---
  {
    id: 'math-3eme-001',
    title: 'Fonctions linéaires et affines',
    subject: 'maths',
    level: '3ème',
    difficulty: 3,
    description: 'Reconnaître et utiliser les fonctions linéaires et affines',
    estimatedTime: 20,
    skills: ['Fonctions', 'Calcul algébrique', 'Représentation graphique'],
    questions: [
      {
        id: 'q1',
        question: 'Une fonction linéaire est de la forme f(x) = ?',
        type: 'multiple-choice',
        options: ['f(x) = ax', 'f(x) = ax + b', 'f(x) = x²', 'f(x) = a/x'],
        correctAnswer: 'f(x) = ax',
        explanation: 'Une fonction linéaire est de la forme f(x) = ax où a est le coefficient.',
        hints: ['Passe par l\'origine', 'Forme simple']
      },
      {
        id: 'q2',
        question: 'Soit f(x) = 3x. Calculer f(5).',
        type: 'fill-blank',
        correctAnswer: '15',
        explanation: 'f(5) = 3 × 5 = 15',
        hints: ['Remplace x par 5', '3 × 5']
      },
      {
        id: 'q3',
        question: 'La fonction g(x) = 2x + 3 est une fonction :',
        type: 'multiple-choice',
        options: ['Linéaire', 'Affine', 'Carrée', 'Constante'],
        correctAnswer: 'Affine',
        explanation: 'g(x) = 2x + 3 est affine car de la forme ax + b avec b ≠ 0.',
        hints: ['Il y a une constante +3', 'ax + b']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : Toute fonction linéaire est aussi affine.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! f(x) = ax est un cas particulier de ax + b avec b = 0.',
        hints: ['b peut valoir 0', 'Cas particulier']
      },
      {
        id: 'q5',
        question: 'Quel est le coefficient directeur de f(x) = -4x + 7 ?',
        type: 'fill-blank',
        correctAnswer: '-4',
        explanation: 'Dans f(x) = ax + b, le coefficient directeur est a = -4.',
        hints: ['Le nombre devant x', 'a = ?']
      },
      {
        id: 'q6',
        question: 'L\'ordonnée à l\'origine de f(x) = 2x - 5 est :',
        type: 'multiple-choice',
        options: ['2', '-5', '5', '0'],
        correctAnswer: '-5',
        explanation: 'L\'ordonnée à l\'origine est b = -5 (valeur quand x = 0).',
        hints: ['La constante', 'f(0) = ?']
      },
      {
        id: 'q7',
        question: 'Si f(x) = 5x, calculer l\'antécédent de 20.',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: 'On cherche x tel que 5x = 20, donc x = 20/5 = 4.',
        hints: ['5x = 20', 'Diviser par 5']
      },
      {
        id: 'q8',
        question: 'Une fonction affine a une représentation graphique qui est :',
        type: 'multiple-choice',
        options: ['Une droite', 'Une parabole', 'Une hyperbole', 'Un cercle'],
        correctAnswer: 'Une droite',
        explanation: 'Les fonctions affines sont représentées par des droites.',
        hints: ['Forme simple', 'Ligne droite']
      },
      {
        id: 'q9',
        question: 'Déterminer f(2) si f(x) = -3x + 10.',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: 'f(2) = -3 × 2 + 10 = -6 + 10 = 4',
        hints: ['-3 × 2 + 10', '-6 + 10']
      },
      {
        id: 'q10',
        question: 'Vrai ou Faux : Si a < 0, la fonction affine est décroissante.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Si le coefficient directeur a est négatif, la fonction décroît.',
        hints: ['Pente négative', 'La droite descend']
      }
    ]
  },
  {
    id: 'math-3eme-002',
    title: 'Équations et inéquations',
    subject: 'maths',
    level: '3ème',
    difficulty: 3,
    description: 'Résoudre des équations et inéquations du premier degré',
    estimatedTime: 20,
    skills: ['Équations', 'Inéquations', 'Algèbre'],
    questions: [
      {
        id: 'q1',
        question: 'Résoudre : 3x + 5 = 20',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: '3x = 20 - 5 = 15, donc x = 15/3 = 5',
        hints: ['Isoler x', '3x = 15']
      },
      {
        id: 'q2',
        question: 'Résoudre : 2x - 7 = x + 3',
        type: 'fill-blank',
        correctAnswer: '10',
        explanation: '2x - x = 3 + 7, donc x = 10',
        hints: ['Regrouper les x', 'x = 3 + 7']
      },
      {
        id: 'q3',
        question: 'Si 5x > 15, alors :',
        type: 'multiple-choice',
        options: ['x > 3', 'x < 3', 'x > 15', 'x < 15'],
        correctAnswer: 'x > 3',
        explanation: 'On divise par 5 (positif, donc le sens est conservé) : x > 3',
        hints: ['Diviser par 5', '15/5 = 3']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : En multipliant par un nombre négatif, le sens de l\'inéquation change.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Ex: -x > 2 devient x < -2 après multiplication par -1.',
        hints: ['Règle importante', 'Le signe s\'inverse']
      },
      {
        id: 'q5',
        question: 'Résoudre : 4(x - 2) = 12',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: '4x - 8 = 12, donc 4x = 20, donc x = 5',
        hints: ['Développer d\'abord', '4x = 20']
      },
      {
        id: 'q6',
        question: 'L\'ensemble des solutions de x ≥ -2 sur la droite graduée est :',
        type: 'multiple-choice',
        options: ['[-2 ; +∞[', ']-∞ ; -2]', '[-2 ; 2]', ']-2 ; +∞['],
        correctAnswer: '[-2 ; +∞[',
        explanation: 'x ≥ -2 signifie tous les nombres à partir de -2 inclus.',
        hints: ['-2 est inclus', 'Crochet fermé']
      },
      {
        id: 'q7',
        question: 'Résoudre : -2x + 6 < 0',
        type: 'multiple-choice',
        options: ['x > 3', 'x < 3', 'x > -3', 'x < -3'],
        correctAnswer: 'x > 3',
        explanation: '-2x < -6, on divise par -2 (signe change) : x > 3',
        hints: ['Attention au signe !', 'Division par négatif']
      },
      {
        id: 'q8',
        question: 'Résoudre : (x + 1)/2 = 4',
        type: 'fill-blank',
        correctAnswer: '7',
        explanation: 'x + 1 = 8, donc x = 7',
        hints: ['Multiplier par 2', 'x + 1 = 8']
      },
      {
        id: 'q9',
        question: 'Combien de solutions a l\'équation 0x = 5 ?',
        type: 'multiple-choice',
        options: ['Aucune', 'Une seule', 'Deux', 'Infinité'],
        correctAnswer: 'Aucune',
        explanation: '0 = 5 est impossible, donc aucune solution.',
        hints: ['0 ne peut pas égaler 5', 'Impossible']
      },
      {
        id: 'q10',
        question: 'Résoudre : 3x - 2 = 3x + 1',
        type: 'multiple-choice',
        options: ['x = 0', 'x = 1', 'x = -1', 'Pas de solution'],
        correctAnswer: 'Pas de solution',
        explanation: '3x - 3x = 1 + 2, donc 0 = 3, impossible !',
        hints: ['Simplifier', '0 = 3 ?']
      }
    ]
  },
  {
    id: 'math-3eme-003',
    title: 'Probabilités',
    subject: 'maths',
    level: '3ème',
    difficulty: 3,
    description: 'Calculer des probabilités simples et composées',
    estimatedTime: 20,
    skills: ['Probabilités', 'Statistiques', 'Calcul'],
    questions: [
      {
        id: 'q1',
        question: 'On lance un dé équilibré. Quelle est la probabilité d\'obtenir un 6 ?',
        type: 'multiple-choice',
        options: ['1/6', '1/3', '1/2', '6'],
        correctAnswer: '1/6',
        explanation: 'Un dé a 6 faces, une seule est le 6, donc P = 1/6.',
        hints: ['6 faces possibles', '1 cas favorable']
      },
      {
        id: 'q2',
        question: 'Dans une urne avec 3 boules rouges et 7 bleues, quelle est la probabilité de tirer une rouge ?',
        type: 'fill-blank',
        correctAnswer: '3/10',
        explanation: 'P = 3/(3+7) = 3/10',
        hints: ['Total de 10 boules', '3 rouges sur 10']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : La probabilité d\'un événement est toujours comprise entre 0 et 1.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! 0 ≤ P ≤ 1. P=0 impossible, P=1 certain.',
        hints: ['Jamais négatif', 'Jamais supérieur à 1']
      },
      {
        id: 'q4',
        question: 'On lance une pièce 2 fois. Quelle est la probabilité d\'obtenir 2 faces ?',
        type: 'multiple-choice',
        options: ['1/4', '1/2', '1/3', '2/4'],
        correctAnswer: '1/4',
        explanation: 'P = 1/2 × 1/2 = 1/4 (événements indépendants)',
        hints: ['Multiplier les probas', '1/2 × 1/2']
      },
      {
        id: 'q5',
        question: 'Si P(A) = 0.3, que vaut P(contraire de A) ?',
        type: 'fill-blank',
        correctAnswer: '0.7',
        explanation: 'P(Ā) = 1 - P(A) = 1 - 0.3 = 0.7',
        hints: ['Somme = 1', '1 - 0.3']
      },
      {
        id: 'q6',
        question: 'On tire une carte dans un jeu de 52 cartes. Probabilité d\'avoir un as ?',
        type: 'multiple-choice',
        options: ['4/52 = 1/13', '1/52', '13/52', '4/13'],
        correctAnswer: '4/52 = 1/13',
        explanation: 'Il y a 4 as sur 52 cartes, donc P = 4/52 = 1/13.',
        hints: ['4 as dans le jeu', 'Simplifier']
      },
      {
        id: 'q7',
        question: 'Un événement de probabilité 1 est dit :',
        type: 'multiple-choice',
        options: ['Certain', 'Impossible', 'Probable', 'Rare'],
        correctAnswer: 'Certain',
        explanation: 'P = 1 signifie que l\'événement se produit toujours.',
        hints: ['100% de chances', 'Sûr']
      },
      {
        id: 'q8',
        question: 'On lance un dé. Quelle est la probabilité d\'obtenir un nombre pair ?',
        type: 'fill-blank',
        correctAnswer: '1/2',
        explanation: 'Nombres pairs : 2, 4, 6 soit 3 sur 6 = 1/2',
        hints: ['3 nombres pairs', '3/6 simplifié']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : Deux événements sont incompatibles s\'ils ne peuvent pas se produire en même temps.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Ex: obtenir pile ET face au même lancer est impossible.',
        hints: ['Mutuellement exclusifs', 'L\'un ou l\'autre']
      },
      {
        id: 'q10',
        question: 'Si A et B sont incompatibles, P(A ou B) = ?',
        type: 'multiple-choice',
        options: ['P(A) + P(B)', 'P(A) × P(B)', 'P(A) - P(B)', 'P(A) / P(B)'],
        correctAnswer: 'P(A) + P(B)',
        explanation: 'Pour des événements incompatibles, on additionne les probabilités.',
        hints: ['Addition', 'Pas de chevauchement']
      }
    ]
  },

  // --- SCIENCES 3ÈME ---
  {
    id: 'sci-3eme-001',
    title: 'La génétique et l\'ADN',
    subject: 'sciences',
    level: '3ème',
    difficulty: 3,
    description: 'Comprendre les bases de la génétique et le rôle de l\'ADN',
    estimatedTime: 20,
    skills: ['Génétique', 'Biologie', 'Hérédité'],
    questions: [
      {
        id: 'q1',
        question: 'Que signifie ADN ?',
        type: 'multiple-choice',
        options: ['Acide DésoxyriboNucléique', 'Atome De Nitrogène', 'Acide DiNitrique', 'Aucune réponse'],
        correctAnswer: 'Acide DésoxyriboNucléique',
        explanation: 'ADN = Acide DésoxyriboNucléique, molécule porteuse de l\'information génétique.',
        hints: ['Molécule génétique', 'Acide...']
      },
      {
        id: 'q2',
        question: 'Où se trouve l\'ADN dans une cellule ?',
        type: 'multiple-choice',
        options: ['Dans le noyau', 'Dans la membrane', 'Dans le cytoplasme uniquement', 'À l\'extérieur'],
        correctAnswer: 'Dans le noyau',
        explanation: 'L\'ADN est principalement localisé dans le noyau des cellules.',
        hints: ['Centre de la cellule', 'Noyau']
      },
      {
        id: 'q3',
        question: 'Combien de chromosomes possède une cellule humaine normale ?',
        type: 'fill-blank',
        correctAnswer: '46',
        explanation: 'Les cellules humaines contiennent 46 chromosomes (23 paires).',
        hints: ['23 paires', '23 × 2']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : Un gène est une portion d\'ADN codant pour une protéine.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les gènes portent l\'information pour fabriquer des protéines.',
        hints: ['Unité d\'information', 'Code génétique']
      },
      {
        id: 'q5',
        question: 'Les 4 bases azotées de l\'ADN sont A, T, G et :',
        type: 'fill-blank',
        correctAnswer: 'C',
        explanation: 'Les 4 bases : Adénine (A), Thymine (T), Guanine (G), Cytosine (C).',
        hints: ['Cytosine', 'Commence par C']
      },
      {
        id: 'q6',
        question: 'Avec quelle base l\'Adénine (A) s\'apparie-t-elle ?',
        type: 'multiple-choice',
        options: ['Thymine (T)', 'Guanine (G)', 'Cytosine (C)', 'Adénine (A)'],
        correctAnswer: 'Thymine (T)',
        explanation: 'A s\'apparie avec T, et G s\'apparie avec C.',
        hints: ['A-T', 'Complémentarité']
      },
      {
        id: 'q7',
        question: 'Comment appelle-t-on une modification de l\'ADN ?',
        type: 'multiple-choice',
        options: ['Une mutation', 'Une division', 'Une fusion', 'Une réplication'],
        correctAnswer: 'Une mutation',
        explanation: 'Une mutation est un changement dans la séquence d\'ADN.',
        hints: ['Changement génétique', 'Mutation']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : Tous les êtres vivants possèdent de l\'ADN.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'ADN est universel chez tous les êtres vivants.',
        hints: ['Universel', 'Même molécule']
      },
      {
        id: 'q9',
        question: 'Quel est le nom du processus de copie de l\'ADN ?',
        type: 'fill-blank',
        correctAnswer: 'réplication',
        explanation: 'La réplication permet de copier l\'ADN avant la division cellulaire.',
        hints: ['Copie identique', 'Réplication']
      },
      {
        id: 'q10',
        question: 'La structure de l\'ADN ressemble à :',
        type: 'multiple-choice',
        options: ['Une double hélice', 'Un cercle', 'Un carré', 'Un triangle'],
        correctAnswer: 'Une double hélice',
        explanation: 'L\'ADN a une structure en double hélice (découverte par Watson et Crick).',
        hints: ['Forme en spirale', 'Double']
      }
    ]
  },
  {
    id: 'sci-3eme-002',
    title: 'L\'énergie et ses transformations',
    subject: 'sciences',
    level: '3ème',
    difficulty: 3,
    description: 'Comprendre les différentes formes d\'énergie et leurs conversions',
    estimatedTime: 20,
    skills: ['Énergie', 'Physique', 'Transformations'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle est l\'unité de l\'énergie dans le système international ?',
        type: 'multiple-choice',
        options: ['Le Joule (J)', 'Le Watt (W)', 'Le Newton (N)', 'Le Volt (V)'],
        correctAnswer: 'Le Joule (J)',
        explanation: 'L\'énergie se mesure en Joules (J).',
        hints: ['J', 'Joule']
      },
      {
        id: 'q2',
        question: 'Vrai ou Faux : L\'énergie peut être créée à partir de rien.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! L\'énergie se conserve, elle ne peut être ni créée ni détruite.',
        hints: ['Conservation', 'Transformation']
      },
      {
        id: 'q3',
        question: 'Quelle forme d\'énergie possède un objet en mouvement ?',
        type: 'multiple-choice',
        options: ['Énergie cinétique', 'Énergie potentielle', 'Énergie thermique', 'Énergie chimique'],
        correctAnswer: 'Énergie cinétique',
        explanation: 'L\'énergie cinétique est l\'énergie du mouvement : Ec = ½mv²',
        hints: ['Mouvement', 'Cinétique']
      },
      {
        id: 'q4',
        question: 'La formule de l\'énergie cinétique est Ec = ½m...',
        type: 'fill-blank',
        correctAnswer: 'v²',
        explanation: 'Ec = ½mv² où m est la masse et v la vitesse.',
        hints: ['Vitesse au carré', 'v²']
      },
      {
        id: 'q5',
        question: 'Un objet en hauteur possède de l\'énergie :',
        type: 'multiple-choice',
        options: ['Potentielle de pesanteur', 'Cinétique', 'Électrique', 'Sonore'],
        correctAnswer: 'Potentielle de pesanteur',
        explanation: 'En hauteur, un objet a une énergie potentielle : Ep = mgh',
        hints: ['Position en hauteur', 'Potentielle']
      },
      {
        id: 'q6',
        question: 'Quel appareil transforme l\'énergie électrique en énergie lumineuse ?',
        type: 'fill-blank',
        correctAnswer: 'lampe',
        explanation: 'Une lampe (ou ampoule) convertit l\'électricité en lumière.',
        hints: ['Éclairage', 'Ampoule']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : Une pile convertit l\'énergie chimique en énergie électrique.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les réactions chimiques dans la pile produisent de l\'électricité.',
        hints: ['Réaction chimique', 'Produit du courant']
      },
      {
        id: 'q8',
        question: 'La puissance électrique se mesure en :',
        type: 'multiple-choice',
        options: ['Watts (W)', 'Joules (J)', 'Ampères (A)', 'Volts (V)'],
        correctAnswer: 'Watts (W)',
        explanation: 'La puissance se mesure en Watts. P = E/t',
        hints: ['W', 'Watt']
      },
      {
        id: 'q9',
        question: 'Un moteur transforme l\'énergie électrique en énergie :',
        type: 'fill-blank',
        correctAnswer: 'mécanique',
        explanation: 'Un moteur électrique produit du mouvement (énergie mécanique).',
        hints: ['Mouvement', 'Mécanique']
      },
      {
        id: 'q10',
        question: 'Le rendement d\'une machine est toujours :',
        type: 'multiple-choice',
        options: ['Inférieur à 100%', 'Égal à 100%', 'Supérieur à 100%', 'Négatif'],
        correctAnswer: 'Inférieur à 100%',
        explanation: 'Il y a toujours des pertes (chaleur, frottements), donc η < 100%.',
        hints: ['Pertes inévitables', 'Moins de 100%']
      }
    ]
  },
  {
    id: 'sci-3eme-003',
    title: 'Le système nerveux',
    subject: 'sciences',
    level: '3ème',
    difficulty: 3,
    description: 'Comprendre le fonctionnement du système nerveux',
    estimatedTime: 20,
    skills: ['Biologie', 'Système nerveux', 'Corps humain'],
    questions: [
      {
        id: 'q1',
        question: 'Quel organe est le centre de commande du système nerveux ?',
        type: 'multiple-choice',
        options: ['Le cerveau', 'Le cœur', 'Les poumons', 'Le foie'],
        correctAnswer: 'Le cerveau',
        explanation: 'Le cerveau coordonne toutes les fonctions du corps.',
        hints: ['Dans la tête', 'Centre de contrôle']
      },
      {
        id: 'q2',
        question: 'Comment s\'appelle la cellule spécialisée du système nerveux ?',
        type: 'fill-blank',
        correctAnswer: 'neurone',
        explanation: 'Le neurone est la cellule nerveuse qui transmet l\'information.',
        hints: ['Cellule nerveuse', 'Neurone']
      },
      {
        id: 'q3',
        question: 'Le message nerveux se propage sous forme :',
        type: 'multiple-choice',
        options: ['Électrique', 'Mécanique', 'Thermique', 'Lumineuse'],
        correctAnswer: 'Électrique',
        explanation: 'Le message nerveux est un signal électrique (influx nerveux).',
        hints: ['Influx', 'Signal électrique']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : La moelle épinière fait partie du système nerveux central.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le SNC = cerveau + moelle épinière.',
        hints: ['Protégée par la colonne', 'Centrale']
      },
      {
        id: 'q5',
        question: 'L\'espace entre deux neurones s\'appelle :',
        type: 'fill-blank',
        correctAnswer: 'synapse',
        explanation: 'La synapse est la zone de communication entre deux neurones.',
        hints: ['Zone de jonction', 'Synapse']
      },
      {
        id: 'q6',
        question: 'Qu\'est-ce qu\'un réflexe ?',
        type: 'multiple-choice',
        options: ['Une réponse automatique et rapide', 'Une réponse volontaire', 'Une maladie', 'Un muscle'],
        correctAnswer: 'Une réponse automatique et rapide',
        explanation: 'Un réflexe est une réponse involontaire à un stimulus.',
        hints: ['Automatique', 'Rapide']
      },
      {
        id: 'q7',
        question: 'Les neurotransmetteurs permettent la communication :',
        type: 'multiple-choice',
        options: ['Entre neurones au niveau des synapses', 'Entre muscles', 'Entre os', 'Entre cellules sanguines'],
        correctAnswer: 'Entre neurones au niveau des synapses',
        explanation: 'Les neurotransmetteurs sont des messagers chimiques libérés dans la synapse.',
        hints: ['Messagers chimiques', 'Synapse']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : Les récepteurs sensoriels captent les stimuli de l\'environnement.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les récepteurs (yeux, oreilles, peau...) détectent les stimuli.',
        hints: ['Capteurs', 'Sens']
      },
      {
        id: 'q9',
        question: 'Quelle substance peut perturber le fonctionnement du système nerveux ?',
        type: 'multiple-choice',
        options: ['L\'alcool', 'L\'eau', 'L\'oxygène', 'Le glucose'],
        correctAnswer: 'L\'alcool',
        explanation: 'L\'alcool et les drogues perturbent la transmission nerveuse.',
        hints: ['Substance nocive', 'Drogue']
      },
      {
        id: 'q10',
        question: 'Le prolongement long du neurone qui transmet le message s\'appelle :',
        type: 'fill-blank',
        correctAnswer: 'axone',
        explanation: 'L\'axone est le prolongement qui conduit l\'influx nerveux.',
        hints: ['Long prolongement', 'Axone']
      }
    ]
  },

  // --- FRANÇAIS 3ÈME ---
  {
    id: 'fr-3eme-001',
    title: 'L\'argumentation',
    subject: 'francais',
    level: '3ème',
    difficulty: 3,
    description: 'Maîtriser les techniques de l\'argumentation',
    estimatedTime: 20,
    skills: ['Argumentation', 'Analyse', 'Expression écrite'],
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce qu\'une thèse dans un texte argumentatif ?',
        type: 'multiple-choice',
        options: ['L\'opinion défendue par l\'auteur', 'Un exemple', 'Une question', 'Un résumé'],
        correctAnswer: 'L\'opinion défendue par l\'auteur',
        explanation: 'La thèse est l\'idée principale que l\'auteur veut démontrer.',
        hints: ['Point de vue', 'Idée défendue']
      },
      {
        id: 'q2',
        question: 'Un argument est :',
        type: 'multiple-choice',
        options: ['Une raison qui justifie la thèse', 'Un fait divers', 'Un personnage', 'Un titre'],
        correctAnswer: 'Une raison qui justifie la thèse',
        explanation: 'L\'argument est une idée qui soutient et justifie la thèse.',
        hints: ['Justification', 'Raison']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : Un exemple illustre un argument.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'exemple rend l\'argument concret et plus convaincant.',
        hints: ['Illustration', 'Concret']
      },
      {
        id: 'q4',
        question: 'Quel connecteur introduit une opposition ?',
        type: 'multiple-choice',
        options: ['Cependant', 'Donc', 'De plus', 'Ainsi'],
        correctAnswer: 'Cependant',
        explanation: 'Cependant, mais, néanmoins, toutefois marquent l\'opposition.',
        hints: ['Opposition', 'Contraste']
      },
      {
        id: 'q5',
        question: 'Le connecteur "par conséquent" introduit :',
        type: 'fill-blank',
        correctAnswer: 'conséquence',
        explanation: '"Par conséquent" introduit une conséquence ou conclusion.',
        hints: ['Résultat', 'Conséquence']
      },
      {
        id: 'q6',
        question: 'Un contre-argument sert à :',
        type: 'multiple-choice',
        options: ['Réfuter l\'opinion adverse', 'Confirmer sa thèse', 'Raconter une histoire', 'Décrire un lieu'],
        correctAnswer: 'Réfuter l\'opinion adverse',
        explanation: 'Le contre-argument anticipe et réfute les objections possibles.',
        hints: ['Réfutation', 'Opinion contraire']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : La concession admet une partie de l\'argument adverse avant de réfuter.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Certes... mais..." est une concession.',
        hints: ['Certes... mais', 'Admettre puis réfuter']
      },
      {
        id: 'q8',
        question: 'Quel type de texte vise à convaincre le lecteur ?',
        type: 'fill-blank',
        correctAnswer: 'argumentatif',
        explanation: 'Le texte argumentatif cherche à persuader ou convaincre.',
        hints: ['Arguments', 'Convaincre']
      },
      {
        id: 'q9',
        question: '"De plus", "en outre", "par ailleurs" sont des connecteurs :',
        type: 'multiple-choice',
        options: ['D\'addition', 'D\'opposition', 'De cause', 'De temps'],
        correctAnswer: 'D\'addition',
        explanation: 'Ces connecteurs ajoutent un argument supplémentaire.',
        hints: ['Ajouter', 'En plus']
      },
      {
        id: 'q10',
        question: 'La conclusion d\'un texte argumentatif doit :',
        type: 'multiple-choice',
        options: ['Reformuler la thèse et ouvrir le débat', 'Ajouter de nouveaux arguments', 'Raconter une anecdote', 'Poser des questions sans réponse'],
        correctAnswer: 'Reformuler la thèse et ouvrir le débat',
        explanation: 'La conclusion synthétise et peut élargir la réflexion.',
        hints: ['Synthèse', 'Ouverture']
      }
    ]
  },
  {
    id: 'fr-3eme-002',
    title: 'Les registres de langue',
    subject: 'francais',
    level: '3ème',
    difficulty: 3,
    description: 'Identifier et utiliser les différents registres de langue',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Registres', 'Expression'],
    questions: [
      {
        id: 'q1',
        question: 'Combien y a-t-il de registres de langue principaux ?',
        type: 'multiple-choice',
        options: ['Trois', 'Deux', 'Quatre', 'Cinq'],
        correctAnswer: 'Trois',
        explanation: 'Familier, courant et soutenu sont les trois registres principaux.',
        hints: ['Familier, courant...', 'Trois niveaux']
      },
      {
        id: 'q2',
        question: '"Bouquin" appartient au registre :',
        type: 'fill-blank',
        correctAnswer: 'familier',
        explanation: '"Bouquin" est familier, "livre" est courant, "ouvrage" est soutenu.',
        hints: ['Langage oral', 'Familier']
      },
      {
        id: 'q3',
        question: 'Quel est l\'équivalent soutenu de "manger" ?',
        type: 'multiple-choice',
        options: ['Se restaurer', 'Bouffer', 'Manger', 'Grailler'],
        correctAnswer: 'Se restaurer',
        explanation: '"Se restaurer" est soutenu, "bouffer/grailler" sont familiers.',
        hints: ['Langage élégant', 'Formel']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : Le registre courant est utilisé dans les situations quotidiennes neutres.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le registre courant est le plus utilisé au quotidien.',
        hints: ['Standard', 'Quotidien']
      },
      {
        id: 'q5',
        question: '"Véhicule automobile" appartient au registre :',
        type: 'fill-blank',
        correctAnswer: 'soutenu',
        explanation: '"Bagnole" = familier, "voiture" = courant, "véhicule automobile" = soutenu.',
        hints: ['Très formel', 'Soutenu']
      },
      {
        id: 'q6',
        question: 'Dans quel contexte utilise-t-on le registre soutenu ?',
        type: 'multiple-choice',
        options: ['Discours officiel, littérature', 'Entre amis', 'Messages SMS', 'Argot de rue'],
        correctAnswer: 'Discours officiel, littérature',
        explanation: 'Le registre soutenu est réservé aux contextes formels et littéraires.',
        hints: ['Formel', 'Officiel']
      },
      {
        id: 'q7',
        question: '"Chouette" au sens de "bien" est du registre :',
        type: 'multiple-choice',
        options: ['Familier', 'Courant', 'Soutenu', 'Argotique'],
        correctAnswer: 'Familier',
        explanation: '"Chouette" = familier, "agréable" = courant, "délectable" = soutenu.',
        hints: ['Langage décontracté', 'Oral']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : L\'argot est un niveau de langue encore plus familier.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! L\'argot est un langage codé, très informel.',
        hints: ['Très informel', 'Populaire']
      },
      {
        id: 'q9',
        question: 'Quel est l\'équivalent courant de "demeurer" ?',
        type: 'fill-blank',
        correctAnswer: 'habiter',
        explanation: '"Crécher" = familier, "habiter" = courant, "demeurer" = soutenu.',
        hints: ['Vivre quelque part', 'Standard']
      },
      {
        id: 'q10',
        question: 'Pour un CV ou une lettre de motivation, quel registre utiliser ?',
        type: 'multiple-choice',
        options: ['Soutenu ou courant soigné', 'Familier', 'Argotique', 'SMS'],
        correctAnswer: 'Soutenu ou courant soigné',
        explanation: 'Les documents officiels exigent un langage formel et soigné.',
        hints: ['Professionnel', 'Formel']
      }
    ]
  },
  {
    id: 'fr-3eme-003',
    title: 'Les propositions subordonnées',
    subject: 'francais',
    level: '3ème',
    difficulty: 3,
    description: 'Identifier et analyser les propositions subordonnées',
    estimatedTime: 20,
    skills: ['Grammaire', 'Analyse de phrase', 'Syntaxe'],
    questions: [
      {
        id: 'q1',
        question: 'Une proposition subordonnée dépend :',
        type: 'multiple-choice',
        options: ['D\'une proposition principale', 'D\'une autre subordonnée', 'De rien', 'Du titre'],
        correctAnswer: 'D\'une proposition principale',
        explanation: 'La subordonnée ne peut exister seule, elle dépend de la principale.',
        hints: ['Dépendance', 'Principale']
      },
      {
        id: 'q2',
        question: 'Par quel mot commence souvent une subordonnée relative ?',
        type: 'multiple-choice',
        options: ['Qui, que, dont, où', 'Et, ou, ni', 'Car, parce que', 'Si, quand'],
        correctAnswer: 'Qui, que, dont, où',
        explanation: 'Les pronoms relatifs introduisent les subordonnées relatives.',
        hints: ['Pronom relatif', 'Qui, que...']
      },
      {
        id: 'q3',
        question: 'Dans "Je pense qu\'il viendra", la subordonnée est :',
        type: 'fill-blank',
        correctAnswer: 'qu\'il viendra',
        explanation: '"Qu\'il viendra" est une proposition subordonnée complétive.',
        hints: ['Après "que"', 'Complétive']
      },
      {
        id: 'q4',
        question: 'Une subordonnée circonstancielle de temps répond à la question :',
        type: 'multiple-choice',
        options: ['Quand ?', 'Pourquoi ?', 'Comment ?', 'Combien ?'],
        correctAnswer: 'Quand ?',
        explanation: 'La subordonnée de temps indique le moment de l\'action.',
        hints: ['Temporelle', 'Moment']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : "Parce que" introduit une subordonnée de cause.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Parce que", "puisque", "comme" introduisent la cause.',
        hints: ['Pourquoi ?', 'Cause']
      },
      {
        id: 'q6',
        question: '"Bien que" introduit une subordonnée :',
        type: 'multiple-choice',
        options: ['De concession', 'De cause', 'De but', 'De temps'],
        correctAnswer: 'De concession',
        explanation: '"Bien que", "quoique" introduisent une opposition/concession.',
        hints: ['Opposition', 'Malgré']
      },
      {
        id: 'q7',
        question: 'Dans "L\'homme qui parle est mon père", quelle est la fonction de "qui parle" ?',
        type: 'fill-blank',
        correctAnswer: 'complément de l\'antécédent',
        explanation: 'La relative "qui parle" complète "l\'homme" (antécédent).',
        hints: ['Relative', 'Complète le nom']
      },
      {
        id: 'q8',
        question: '"Pour que" introduit une subordonnée de :',
        type: 'multiple-choice',
        options: ['But', 'Cause', 'Temps', 'Condition'],
        correctAnswer: 'But',
        explanation: '"Pour que", "afin que" expriment le but (objectif).',
        hints: ['Objectif', 'Finalité']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : "Si tu viens, je serai content" contient une subordonnée de condition.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Si" introduit une condition (hypothèse).',
        hints: ['Si...', 'Hypothèse']
      },
      {
        id: 'q10',
        question: 'Après "bien que", on utilise quel mode verbal ?',
        type: 'multiple-choice',
        options: ['Le subjonctif', 'L\'indicatif', 'L\'impératif', 'Le conditionnel'],
        correctAnswer: 'Le subjonctif',
        explanation: '"Bien que" est toujours suivi du subjonctif.',
        hints: ['Mode du doute', 'Subjonctif']
      }
    ]
  },

  // --- HISTOIRE-GÉO 3ÈME ---
  {
    id: 'hist-3eme-001',
    title: 'La Première Guerre mondiale',
    subject: 'histoire-geo',
    level: '3ème',
    difficulty: 3,
    description: 'Connaître les causes, le déroulement et les conséquences de la Première Guerre mondiale',
    estimatedTime: 20,
    skills: ['Histoire', 'Chronologie', 'Analyse'],
    questions: [
      {
        id: 'q1',
        question: 'En quelle année a commencé la Première Guerre mondiale ?',
        type: 'fill-blank',
        correctAnswer: '1914',
        explanation: 'La Première Guerre mondiale a débuté en 1914 et s\'est terminée en 1918.',
        hints: ['19...', 'Avant 1918']
      },
      {
        id: 'q2',
        question: 'Quel événement a déclenché la guerre ?',
        type: 'multiple-choice',
        options: ['L\'assassinat de l\'archiduc François-Ferdinand', 'L\'invasion de la Pologne', 'La révolution russe', 'Le traité de Versailles'],
        correctAnswer: 'L\'assassinat de l\'archiduc François-Ferdinand',
        explanation: 'L\'assassinat à Sarajevo le 28 juin 1914 a déclenché le conflit.',
        hints: ['À Sarajevo', 'Archiduc autrichien']
      },
      {
        id: 'q3',
        question: 'La bataille de Verdun a eu lieu en :',
        type: 'fill-blank',
        correctAnswer: '1916',
        explanation: 'Verdun (février-décembre 1916) fut une bataille très meurtrière.',
        hints: ['Milieu de la guerre', '19...']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : La guerre des tranchées caractérise le front occidental.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les soldats vivaient dans des tranchées face à face.',
        hints: ['Front statique', 'Vie dans les tranchées']
      },
      {
        id: 'q5',
        question: 'Comment appelle-t-on les soldats français de 14-18 ?',
        type: 'fill-blank',
        correctAnswer: 'poilus',
        explanation: 'Les "poilus" étaient les soldats français de la Grande Guerre.',
        hints: ['Surnom affectueux', 'Poilus']
      },
      {
        id: 'q6',
        question: 'Quel pays a rejoint la guerre aux côtés des Alliés en 1917 ?',
        type: 'multiple-choice',
        options: ['Les États-Unis', 'Le Japon', 'La Chine', 'Le Brésil'],
        correctAnswer: 'Les États-Unis',
        explanation: 'Les USA sont entrés en guerre en avril 1917.',
        hints: ['Puissance américaine', 'Wilson']
      },
      {
        id: 'q7',
        question: 'L\'armistice a été signé le :',
        type: 'multiple-choice',
        options: ['11 novembre 1918', '8 mai 1945', '14 juillet 1914', '28 juin 1919'],
        correctAnswer: '11 novembre 1918',
        explanation: 'L\'armistice du 11 novembre 1918 a mis fin aux combats.',
        hints: ['Jour férié', 'Novembre']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : Le génocide arménien a eu lieu pendant la Première Guerre mondiale.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Le génocide arménien (1915-1916) par l\'Empire ottoman.',
        hints: ['Empire ottoman', '1915']
      },
      {
        id: 'q9',
        question: 'Combien de morts a fait la Première Guerre mondiale (environ) ?',
        type: 'multiple-choice',
        options: ['10 millions', '1 million', '50 millions', '100 millions'],
        correctAnswer: '10 millions',
        explanation: 'Environ 10 millions de morts militaires, plus les civils.',
        hints: ['Des millions', 'Dizaine de millions']
      },
      {
        id: 'q10',
        question: 'Quel traité a officiellement mis fin à la guerre avec l\'Allemagne ?',
        type: 'fill-blank',
        correctAnswer: 'Versailles',
        explanation: 'Le traité de Versailles fut signé le 28 juin 1919.',
        hints: ['Château français', 'Traité de...']
      }
    ]
  },
  {
    id: 'hist-3eme-002',
    title: 'La Seconde Guerre mondiale',
    subject: 'histoire-geo',
    level: '3ème',
    difficulty: 3,
    description: 'Connaître les grandes étapes de la Seconde Guerre mondiale',
    estimatedTime: 20,
    skills: ['Histoire', 'Géopolitique', 'Mémoire'],
    questions: [
      {
        id: 'q1',
        question: 'La Seconde Guerre mondiale a commencé en :',
        type: 'fill-blank',
        correctAnswer: '1939',
        explanation: 'Le 1er septembre 1939, l\'Allemagne envahit la Pologne.',
        hints: ['Fin des années 30', '19..']
      },
      {
        id: 'q2',
        question: 'Quel régime politique dirigeait l\'Allemagne nazie ?',
        type: 'multiple-choice',
        options: ['Le nazisme (totalitarisme)', 'La démocratie', 'La monarchie', 'L\'anarchie'],
        correctAnswer: 'Le nazisme (totalitarisme)',
        explanation: 'Hitler dirigeait un régime totalitaire nazi.',
        hints: ['Hitler', 'Totalitaire']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : La France a été occupée par l\'Allemagne de 1940 à 1944.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Après la défaite de juin 1940, la France fut occupée.',
        hints: ['Occupation', '4 ans']
      },
      {
        id: 'q4',
        question: 'Comment s\'appelle l\'extermination des Juifs par les nazis ?',
        type: 'fill-blank',
        correctAnswer: 'Shoah',
        explanation: 'La Shoah (ou Holocauste) désigne le génocide des Juifs.',
        hints: ['Génocide juif', 'Holocauste']
      },
      {
        id: 'q5',
        question: 'Le débarquement en Normandie a eu lieu le :',
        type: 'multiple-choice',
        options: ['6 juin 1944', '8 mai 1945', '11 novembre 1918', '1er septembre 1939'],
        correctAnswer: '6 juin 1944',
        explanation: 'Le D-Day, 6 juin 1944, marque le début de la libération.',
        hints: ['D-Day', 'Juin 1944']
      },
      {
        id: 'q6',
        question: 'Qui dirigeait la France libre depuis Londres ?',
        type: 'fill-blank',
        correctAnswer: 'de Gaulle',
        explanation: 'Le général de Gaulle a lancé l\'appel du 18 juin 1940.',
        hints: ['Général français', 'Appel du 18 juin']
      },
      {
        id: 'q7',
        question: 'Vrai ou Faux : Hiroshima et Nagasaki ont été bombardées à la bombe atomique.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les USA ont largué des bombes atomiques en août 1945.',
        hints: ['Japon', 'Août 1945']
      },
      {
        id: 'q8',
        question: 'La guerre s\'est terminée en Europe le :',
        type: 'multiple-choice',
        options: ['8 mai 1945', '6 juin 1944', '11 novembre 1918', '2 septembre 1945'],
        correctAnswer: '8 mai 1945',
        explanation: 'Le 8 mai 1945 marque la capitulation de l\'Allemagne.',
        hints: ['Mai 1945', 'Victoire en Europe']
      },
      {
        id: 'q9',
        question: 'Combien de victimes a fait la Seconde Guerre mondiale (environ) ?',
        type: 'multiple-choice',
        options: ['60 millions', '10 millions', '100 millions', '5 millions'],
        correctAnswer: '60 millions',
        explanation: 'Environ 60 millions de morts, dont beaucoup de civils.',
        hints: ['Beaucoup plus que la 1ère', 'Dizaines de millions']
      },
      {
        id: 'q10',
        question: 'Quel régime français a collaboré avec l\'Allemagne ?',
        type: 'fill-blank',
        correctAnswer: 'Vichy',
        explanation: 'Le régime de Vichy (1940-1944) dirigé par Pétain a collaboré.',
        hints: ['Pétain', 'État français']
      }
    ]
  },
  {
    id: 'geo-3eme-001',
    title: 'L\'Union européenne',
    subject: 'histoire-geo',
    level: '3ème',
    difficulty: 3,
    description: 'Connaître l\'organisation et le fonctionnement de l\'Union européenne',
    estimatedTime: 20,
    skills: ['Géographie', 'Institutions', 'Europe'],
    questions: [
      {
        id: 'q1',
        question: 'Combien de pays membres compte l\'UE actuellement (après Brexit) ?',
        type: 'fill-blank',
        correctAnswer: '27',
        explanation: 'Après le départ du Royaume-Uni, l\'UE compte 27 membres.',
        hints: ['Moins de 30', 'Après le Brexit']
      },
      {
        id: 'q2',
        question: 'En quelle année le traité de Rome a-t-il été signé ?',
        type: 'multiple-choice',
        options: ['1957', '1992', '2007', '1945'],
        correctAnswer: '1957',
        explanation: 'Le traité de Rome (1957) a créé la CEE à 6 pays.',
        hints: ['Années 50', 'Début de la construction']
      },
      {
        id: 'q3',
        question: 'Quels sont les 6 pays fondateurs de la CEE ?',
        type: 'multiple-choice',
        options: ['France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg', 'France, UK, Espagne, Portugal, Italie, Grèce', 'Allemagne, Pologne, Tchéquie, Autriche, Suisse, France', 'France, UK, USA, Canada, Belgique, Pays-Bas'],
        correctAnswer: 'France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg',
        explanation: 'Les 6 fondateurs en 1957 : France, RFA, Italie, Benelux.',
        hints: ['Benelux inclus', 'Pas le UK']
      },
      {
        id: 'q4',
        question: 'Comment s\'appelle la monnaie commune européenne ?',
        type: 'fill-blank',
        correctAnswer: 'euro',
        explanation: 'L\'euro est la monnaie unique depuis 2002 (en circulation).',
        hints: ['€', 'Monnaie unique']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Tous les pays de l\'UE utilisent l\'euro.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Certains pays gardent leur monnaie (Pologne, Suède...).',
        hints: ['Exceptions', 'Zone euro ≠ UE']
      },
      {
        id: 'q6',
        question: 'Où se trouve le Parlement européen ?',
        type: 'multiple-choice',
        options: ['Strasbourg (et Bruxelles)', 'Paris', 'Berlin', 'Rome'],
        correctAnswer: 'Strasbourg (et Bruxelles)',
        explanation: 'Le Parlement siège à Strasbourg et travaille aussi à Bruxelles.',
        hints: ['France', 'Alsace']
      },
      {
        id: 'q7',
        question: 'Quel espace permet la libre circulation des personnes ?',
        type: 'fill-blank',
        correctAnswer: 'Schengen',
        explanation: 'L\'espace Schengen permet de circuler sans contrôle aux frontières.',
        hints: ['Pas de frontières', 'Schengen']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : Le Brexit désigne la sortie du Royaume-Uni de l\'UE.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Brexit = Britain + Exit. Effectif le 31 janvier 2020.',
        hints: ['Britain + Exit', 'Sortie UK']
      },
      {
        id: 'q9',
        question: 'Quelle institution européenne propose les lois ?',
        type: 'multiple-choice',
        options: ['La Commission européenne', 'Le Parlement européen', 'Le Conseil de l\'Europe', 'La Cour de justice'],
        correctAnswer: 'La Commission européenne',
        explanation: 'La Commission propose les lois, le Parlement et le Conseil les votent.',
        hints: ['Initiative législative', 'Commission']
      },
      {
        id: 'q10',
        question: 'Combien d\'étoiles figurent sur le drapeau européen ?',
        type: 'fill-blank',
        correctAnswer: '12',
        explanation: '12 étoiles symbolisent l\'unité (pas le nombre de pays).',
        hints: ['Cercle d\'étoiles', 'Symbolique']
      }
    ]
  },

  // --- ANGLAIS 3ÈME ---
  {
    id: 'en-3eme-001',
    title: 'Past Perfect',
    subject: 'anglais',
    level: '3ème',
    difficulty: 3,
    description: 'Maîtriser le Past Perfect (plus-que-parfait anglais)',
    estimatedTime: 15,
    skills: ['Grammaire', 'Conjugaison', 'Temps du passé'],
    questions: [
      {
        id: 'q1',
        question: 'Comment forme-t-on le Past Perfect ?',
        type: 'multiple-choice',
        options: ['Had + participe passé', 'Have + participe passé', 'Was/Were + -ing', 'Did + base verbale'],
        correctAnswer: 'Had + participe passé',
        explanation: 'Past Perfect = HAD + participe passé (pour tous les sujets).',
        hints: ['Had pour tous', 'Comme le Present Perfect mais au passé']
      },
      {
        id: 'q2',
        question: 'Complète : She ___ (already/leave) when I arrived.',
        type: 'fill-blank',
        correctAnswer: 'had already left',
        explanation: '"Had already left" = elle était déjà partie (action antérieure).',
        hints: ['Action avant "arrived"', 'Had + left']
      },
      {
        id: 'q3',
        question: 'Le Past Perfect exprime une action :',
        type: 'multiple-choice',
        options: ['Antérieure à une autre action passée', 'Future', 'Présente', 'Habituelle'],
        correctAnswer: 'Antérieure à une autre action passée',
        explanation: 'Le Past Perfect = "passé du passé", avant une autre action passée.',
        hints: ['Avant quelque chose', 'Passé du passé']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : "Had" est le même pour toutes les personnes.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! I/You/He/She/It/We/They HAD + participe passé.',
        hints: ['Invariable', 'Toujours had']
      },
      {
        id: 'q5',
        question: 'Complète : By the time we arrived, the film ___ (start).',
        type: 'fill-blank',
        correctAnswer: 'had started',
        explanation: 'Le film avait commencé AVANT notre arrivée.',
        hints: ['Action antérieure', 'Had started']
      },
      {
        id: 'q6',
        question: 'Quelle phrase est correcte ?',
        type: 'multiple-choice',
        options: ['I had never seen such a thing before.', 'I never had seen such a thing before.', 'I had seen never such a thing before.', 'I have had never seen such a thing.'],
        correctAnswer: 'I had never seen such a thing before.',
        explanation: 'HAD + adverbe + participe passé (had never seen).',
        hints: ['Had + never + seen', 'Ordre correct']
      },
      {
        id: 'q7',
        question: 'Forme négative de "had eaten" :',
        type: 'fill-blank',
        correctAnswer: 'had not eaten',
        explanation: 'Forme négative : had not (hadn\'t) + participe passé.',
        hints: ['Had + not', 'Hadn\'t eaten']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : "After" est souvent utilisé avec le Past Perfect.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! After/before/when/by the time + Past Perfect.',
        hints: ['Marqueurs temporels', 'After, before...']
      },
      {
        id: 'q9',
        question: 'Complète : They ___ (not/finish) their homework when mum came home.',
        type: 'fill-blank',
        correctAnswer: 'had not finished',
        explanation: 'Hadn\'t finished = ils n\'avaient pas fini (avant l\'arrivée de maman).',
        hints: ['Négatif', 'Had not + finished']
      },
      {
        id: 'q10',
        question: 'La forme interrogative est :',
        type: 'multiple-choice',
        options: ['Had + sujet + participe passé ?', 'Did + sujet + had + participe passé ?', 'Have + sujet + had ?', 'Was + sujet + had ?'],
        correctAnswer: 'Had + sujet + participe passé ?',
        explanation: 'Question : Had you eaten? Had she finished?',
        hints: ['Had en premier', 'Had + sujet + PP']
      }
    ]
  },
  {
    id: 'en-3eme-002',
    title: 'Les conditionnels (If clauses)',
    subject: 'anglais',
    level: '3ème',
    difficulty: 3,
    description: 'Maîtriser les structures conditionnelles en anglais',
    estimatedTime: 20,
    skills: ['Grammaire', 'Conditionnels', 'Expression'],
    questions: [
      {
        id: 'q1',
        question: 'Le conditionnel de type 1 (réel) utilise quelle structure ?',
        type: 'multiple-choice',
        options: ['If + present, will + base verbale', 'If + past, would + base verbale', 'If + past perfect, would have + PP', 'If + will, present'],
        correctAnswer: 'If + present, will + base verbale',
        explanation: 'Type 1 : If it rains, I will stay home. (situation probable)',
        hints: ['Réel, probable', 'Present + will']
      },
      {
        id: 'q2',
        question: 'Complète : If I ___ (be) you, I would study more.',
        type: 'fill-blank',
        correctAnswer: 'were',
        explanation: 'Type 2 (irréel présent) : If I were you... (même avec I/he/she).',
        hints: ['Irréel', 'Were pour tous']
      },
      {
        id: 'q3',
        question: 'Le conditionnel de type 2 exprime :',
        type: 'multiple-choice',
        options: ['Une situation hypothétique présente/future', 'Un fait certain', 'Une action passée', 'Un ordre'],
        correctAnswer: 'Une situation hypothétique présente/future',
        explanation: 'Type 2 = hypothèse irréelle : If I won the lottery, I would travel.',
        hints: ['Imaginaire', 'Hypothétique']
      },
      {
        id: 'q4',
        question: 'Complète : If she studies hard, she ___ (pass) the exam.',
        type: 'fill-blank',
        correctAnswer: 'will pass',
        explanation: 'Type 1 (réel) : If + present, WILL + verbe.',
        hints: ['Probable', 'Will + verbe']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Dans le type 2, on utilise "would" dans la proposition principale.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! If + past, WOULD + base verbale.',
        hints: ['Would dans la principale', 'If... would...']
      },
      {
        id: 'q6',
        question: 'Quelle phrase est un conditionnel de type 0 (vérité générale) ?',
        type: 'multiple-choice',
        options: ['If you heat water, it boils.', 'If I won, I would buy a car.', 'If it rains, I will stay home.', 'If I had known, I would have come.'],
        correctAnswer: 'If you heat water, it boils.',
        explanation: 'Type 0 = vérité scientifique : If + present, present.',
        hints: ['Fait scientifique', 'Toujours vrai']
      },
      {
        id: 'q7',
        question: 'Complète : If I had known, I ___ (come).',
        type: 'fill-blank',
        correctAnswer: 'would have come',
        explanation: 'Type 3 (irréel passé) : would have + participe passé.',
        hints: ['Regret du passé', 'Would have + PP']
      },
      {
        id: 'q8',
        question: 'Le type 3 exprime :',
        type: 'multiple-choice',
        options: ['Un regret sur le passé', 'Une certitude', 'Un fait présent', 'Un ordre'],
        correctAnswer: 'Un regret sur le passé',
        explanation: 'Type 3 = situation passée qui ne s\'est pas réalisée.',
        hints: ['Passé irréel', 'Regret']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : On peut mettre "will" après "if".',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Jamais de "will" après "if" (sauf cas très rares).',
        hints: ['Règle importante', 'Pas de will après if']
      },
      {
        id: 'q10',
        question: 'Complète : If I ___ (have) more time, I would learn Chinese.',
        type: 'fill-blank',
        correctAnswer: 'had',
        explanation: 'Type 2 : If + PAST (had), would + verbe.',
        hints: ['Hypothétique présent', 'Past simple']
      }
    ]
  },
  {
    id: 'en-3eme-003',
    title: 'Le discours rapporté (Reported Speech)',
    subject: 'anglais',
    level: '3ème',
    difficulty: 3,
    description: 'Transformer le discours direct en discours indirect',
    estimatedTime: 20,
    skills: ['Grammaire', 'Transformation', 'Expression'],
    questions: [
      {
        id: 'q1',
        question: 'Dans le discours rapporté, le Present Simple devient :',
        type: 'multiple-choice',
        options: ['Past Simple', 'Present Perfect', 'Future', 'Present Continuous'],
        correctAnswer: 'Past Simple',
        explanation: '"I like" → He said he liked (recul d\'un temps).',
        hints: ['Recul d\'un cran', 'Present → Past']
      },
      {
        id: 'q2',
        question: 'Transforme : He said, "I am tired."',
        type: 'fill-blank',
        correctAnswer: 'He said he was tired',
        explanation: '"I am" devient "he was" (changement de pronom et de temps).',
        hints: ['I → he, am → was', 'Recul du temps']
      },
      {
        id: 'q3',
        question: '"Will" devient quoi en discours rapporté ?',
        type: 'fill-blank',
        correctAnswer: 'would',
        explanation: '"I will come" → She said she would come.',
        hints: ['Will → Would', 'Futur → Conditionnel']
      },
      {
        id: 'q4',
        question: 'Vrai ou Faux : "Today" devient "that day" en discours rapporté.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! today → that day, tomorrow → the next day, etc.',
        hints: ['Changement des marqueurs', 'That day']
      },
      {
        id: 'q5',
        question: 'Transforme : She said, "I can swim."',
        type: 'multiple-choice',
        options: ['She said she could swim.', 'She said she can swim.', 'She said she swam.', 'She said she will swim.'],
        correctAnswer: 'She said she could swim.',
        explanation: 'Can → could en discours rapporté.',
        hints: ['Can → could', 'Recul du modal']
      },
      {
        id: 'q6',
        question: '"Here" devient :',
        type: 'fill-blank',
        correctAnswer: 'there',
        explanation: 'here → there, this → that, these → those.',
        hints: ['Ici → là-bas', 'There']
      },
      {
        id: 'q7',
        question: 'Pour rapporter une question, on utilise :',
        type: 'multiple-choice',
        options: ['If/whether ou mot interrogatif + ordre affirmatif', 'Point d\'interrogation', 'Do/does', 'Will you'],
        correctAnswer: 'If/whether ou mot interrogatif + ordre affirmatif',
        explanation: '"Are you happy?" → He asked if I was happy.',
        hints: ['If/whether', 'Pas de point d\'interrogation']
      },
      {
        id: 'q8',
        question: 'Transforme : "Where do you live?" he asked.',
        type: 'fill-blank',
        correctAnswer: 'He asked where I lived',
        explanation: 'Question avec mot interrogatif : He asked where + ordre affirmatif.',
        hints: ['Where + sujet + verbe', 'Pas d\'inversion']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : "Must" peut rester "must" ou devenir "had to".',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Must peut rester must ou devenir had to.',
        hints: ['Deux possibilités', 'Must ou had to']
      },
      {
        id: 'q10',
        question: 'Pour rapporter un ordre, on utilise :',
        type: 'multiple-choice',
        options: ['Told + infinitif avec to', 'Said + that', 'Asked + if', 'Said + to'],
        correctAnswer: 'Told + infinitif avec to',
        explanation: '"Close the door!" → He told me to close the door.',
        hints: ['Told + to + verbe', 'Infinitif']
      }
    ]
  },

  // ========================================
  // ESPAGNOL - TOUS NIVEAUX COLLÈGE
  // ========================================

  // --- ESPAGNOL 6ÈME ---
  {
    id: 'es-6eme-001',
    title: 'Se présenter en espagnol',
    subject: 'espagnol',
    level: '6ème',
    difficulty: 1,
    description: 'Apprendre à se présenter et saluer en espagnol',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Présentation', 'Salutations'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "Bonjour" en espagnol ?',
        type: 'multiple-choice',
        options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
        correctAnswer: 'Hola',
        explanation: '"Hola" signifie "Bonjour" ou "Salut" en espagnol.',
        hints: ['Salutation très courante', 'Commence par H']
      },
      {
        id: 'q2',
        question: 'Comment dit-on "Je m\'appelle" ?',
        type: 'fill-blank',
        correctAnswer: 'Me llamo',
        explanation: '"Me llamo" = Je m\'appelle. Ex: Me llamo María.',
        hints: ['Llamo vient de llamar', 'Me llamo']
      },
      {
        id: 'q3',
        question: 'Que signifie "¿Cómo te llamas?" ?',
        type: 'multiple-choice',
        options: ['Comment t\'appelles-tu ?', 'Comment vas-tu ?', 'Où habites-tu ?', 'Quel âge as-tu ?'],
        correctAnswer: 'Comment t\'appelles-tu ?',
        explanation: '"¿Cómo te llamas?" = Comment t\'appelles-tu ?',
        hints: ['Llamas = tu t\'appelles', 'Question sur le prénom']
      },
      {
        id: 'q4',
        question: 'Comment dit-on "Au revoir" ?',
        type: 'fill-blank',
        correctAnswer: 'Adiós',
        explanation: '"Adiós" = Au revoir en espagnol.',
        hints: ['Commence par A', 'Adiós']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : "Buenos días" signifie "Bonne nuit".',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! "Buenos días" = Bonjour (le matin). "Buenas noches" = Bonne nuit.',
        hints: ['Días = jours', 'C\'est le matin']
      },
      {
        id: 'q6',
        question: 'Comment dit-on "Merci" ?',
        type: 'multiple-choice',
        options: ['Gracias', 'Por favor', 'De nada', 'Perdón'],
        correctAnswer: 'Gracias',
        explanation: '"Gracias" = Merci. "De nada" = De rien.',
        hints: ['Très utilisé', 'Gracias']
      },
      {
        id: 'q7',
        question: 'Que signifie "Tengo diez años" ?',
        type: 'multiple-choice',
        options: ['J\'ai dix ans', 'J\'ai dix euros', 'Il est dix heures', 'J\'habite au numéro 10'],
        correctAnswer: 'J\'ai dix ans',
        explanation: '"Tengo diez años" = J\'ai dix ans. Años = ans.',
        hints: ['Años = années/ans', 'Âge']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "S\'il te plaît" ?',
        type: 'fill-blank',
        correctAnswer: 'Por favor',
        explanation: '"Por favor" = S\'il te plaît / S\'il vous plaît.',
        hints: ['Formule de politesse', 'Por favor']
      },
      {
        id: 'q9',
        question: '"Buenas tardes" se dit :',
        type: 'multiple-choice',
        options: ['L\'après-midi', 'Le matin', 'La nuit', 'À minuit'],
        correctAnswer: 'L\'après-midi',
        explanation: '"Buenas tardes" = Bonjour/Bonsoir (l\'après-midi).',
        hints: ['Tardes = après-midi', 'Entre midi et le soir']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "Je suis français(e)" ?',
        type: 'fill-blank',
        correctAnswer: 'Soy francés',
        explanation: '"Soy francés" (masculin) ou "Soy francesa" (féminin).',
        hints: ['Soy = je suis', 'Soy francés/francesa']
      }
    ]
  },
  {
    id: 'es-6eme-002',
    title: 'Les nombres de 1 à 20',
    subject: 'espagnol',
    level: '6ème',
    difficulty: 1,
    description: 'Apprendre à compter de 1 à 20 en espagnol',
    estimatedTime: 15,
    skills: ['Nombres', 'Vocabulaire', 'Prononciation'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "un" en espagnol ?',
        type: 'fill-blank',
        correctAnswer: 'uno',
        explanation: '"Uno" = 1 en espagnol.',
        hints: ['Comme en italien', 'Uno']
      },
      {
        id: 'q2',
        question: 'Que signifie "cinco" ?',
        type: 'multiple-choice',
        options: ['5', '4', '6', '15'],
        correctAnswer: '5',
        explanation: '"Cinco" = 5 en espagnol.',
        hints: ['Pense à "cinq"', 'Ressemble au français']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "10" ?',
        type: 'fill-blank',
        correctAnswer: 'diez',
        explanation: '"Diez" = 10. Attention à la prononciation : "diéss".',
        hints: ['Comme "dix"', 'Diez']
      },
      {
        id: 'q4',
        question: '"Quince" signifie :',
        type: 'multiple-choice',
        options: ['15', '5', '50', '14'],
        correctAnswer: '15',
        explanation: '"Quince" = 15. Comme "quinze" en français !',
        hints: ['Ressemble à quinze', '15']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "20" ?',
        type: 'fill-blank',
        correctAnswer: 'veinte',
        explanation: '"Veinte" = 20 en espagnol.',
        hints: ['Commence par V', 'Veinte']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Siete" signifie "six".',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! "Siete" = 7. "Seis" = 6.',
        hints: ['Siete ressemble à sept', 'C\'est 7']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "12" ?',
        type: 'multiple-choice',
        options: ['Doce', 'Dos', 'Diez', 'Dieciséis'],
        correctAnswer: 'Doce',
        explanation: '"Doce" = 12. "Dos" = 2.',
        hints: ['Comme "douze"', 'Doce']
      },
      {
        id: 'q8',
        question: '"Ocho" signifie :',
        type: 'fill-blank',
        correctAnswer: '8',
        explanation: '"Ocho" = 8 en espagnol.',
        hints: ['Ressemble à "huit" en italien', '8']
      },
      {
        id: 'q9',
        question: 'Comment dit-on "3" ?',
        type: 'multiple-choice',
        options: ['Tres', 'Trece', 'Treinta', 'Cuatro'],
        correctAnswer: 'Tres',
        explanation: '"Tres" = 3. "Trece" = 13.',
        hints: ['Comme "trois"', 'Tres']
      },
      {
        id: 'q10',
        question: 'Quel nombre est "diecisiete" ?',
        type: 'fill-blank',
        correctAnswer: '17',
        explanation: '"Diecisiete" = 17 (diez + siete = 10 + 7).',
        hints: ['Diez + siete', '10 + 7']
      }
    ]
  },
  {
    id: 'es-6eme-003',
    title: 'Les couleurs en espagnol',
    subject: 'espagnol',
    level: '6ème',
    difficulty: 1,
    description: 'Apprendre les couleurs en espagnol',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Couleurs', 'Adjectifs'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "rouge" ?',
        type: 'fill-blank',
        correctAnswer: 'rojo',
        explanation: '"Rojo" = rouge en espagnol.',
        hints: ['Commence par R', 'Rojo']
      },
      {
        id: 'q2',
        question: 'Que signifie "azul" ?',
        type: 'multiple-choice',
        options: ['Bleu', 'Vert', 'Jaune', 'Blanc'],
        correctAnswer: 'Bleu',
        explanation: '"Azul" = bleu. Comme "azur" en français !',
        hints: ['Pense à azur', 'Bleu']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "blanc" ?',
        type: 'fill-blank',
        correctAnswer: 'blanco',
        explanation: '"Blanco" = blanc en espagnol.',
        hints: ['Ressemble à "blanc"', 'Blanco']
      },
      {
        id: 'q4',
        question: '"Negro" signifie :',
        type: 'multiple-choice',
        options: ['Noir', 'Gris', 'Marron', 'Bleu foncé'],
        correctAnswer: 'Noir',
        explanation: '"Negro" = noir en espagnol.',
        hints: ['Couleur sombre', 'Noir']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "vert" ?',
        type: 'fill-blank',
        correctAnswer: 'verde',
        explanation: '"Verde" = vert. Comme dans "Cap-Vert" !',
        hints: ['Couleur de la nature', 'Verde']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Amarillo" signifie "orange".',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! "Amarillo" = jaune. "Naranja" = orange.',
        hints: ['Amarillo = couleur du soleil', 'Jaune']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "rose" ?',
        type: 'multiple-choice',
        options: ['Rosa', 'Rojo', 'Morado', 'Naranja'],
        correctAnswer: 'Rosa',
        explanation: '"Rosa" = rose en espagnol.',
        hints: ['Comme la fleur', 'Rosa']
      },
      {
        id: 'q8',
        question: '"Gris" en espagnol se dit :',
        type: 'fill-blank',
        correctAnswer: 'gris',
        explanation: '"Gris" = gris. C\'est le même mot !',
        hints: ['Identique au français', 'Gris']
      },
      {
        id: 'q9',
        question: 'Comment dit-on "marron" ?',
        type: 'multiple-choice',
        options: ['Marrón', 'Negro', 'Naranja', 'Rojo'],
        correctAnswer: 'Marrón',
        explanation: '"Marrón" = marron en espagnol.',
        hints: ['Très proche du français', 'Marrón']
      },
      {
        id: 'q10',
        question: 'Que signifie "morado" ?',
        type: 'multiple-choice',
        options: ['Violet', 'Marron', 'Doré', 'Argenté'],
        correctAnswer: 'Violet',
        explanation: '"Morado" = violet en espagnol.',
        hints: ['Couleur de l\'aubergine', 'Violet']
      }
    ]
  },

  // --- ESPAGNOL 5ÈME ---
  {
    id: 'es-5eme-001',
    title: 'Le présent de l\'indicatif (verbes réguliers)',
    subject: 'espagnol',
    level: '5ème',
    difficulty: 2,
    description: 'Conjuguer les verbes réguliers au présent en espagnol',
    estimatedTime: 18,
    skills: ['Conjugaison', 'Verbes réguliers', 'Présent'],
    questions: [
      {
        id: 'q1',
        question: 'Quelles sont les 3 terminaisons des verbes espagnols à l\'infinitif ?',
        type: 'multiple-choice',
        options: ['-AR, -ER, -IR', '-ER, -IR, -RE', '-AR, -OR, -IR', '-AR, -ER, -UR'],
        correctAnswer: '-AR, -ER, -IR',
        explanation: 'Les 3 groupes : hablar (-AR), comer (-ER), vivir (-IR).',
        hints: ['Trois terminaisons', '-AR, -ER, -IR']
      },
      {
        id: 'q2',
        question: 'Conjugue "hablar" (parler) à la 1ère personne du singulier :',
        type: 'fill-blank',
        correctAnswer: 'hablo',
        explanation: 'Yo hablo = Je parle. On enlève -AR et on ajoute -O.',
        hints: ['Yo...', 'Hablo']
      },
      {
        id: 'q3',
        question: '"Él come" signifie :',
        type: 'multiple-choice',
        options: ['Il mange', 'Il court', 'Il dort', 'Il parle'],
        correctAnswer: 'Il mange',
        explanation: 'Comer = manger. Él come = Il mange.',
        hints: ['Comer = manger', 'Il mange']
      },
      {
        id: 'q4',
        question: 'Conjugue "vivir" (vivre) à la 2ème personne du singulier (tú) :',
        type: 'fill-blank',
        correctAnswer: 'vives',
        explanation: 'Tú vives = Tu vis. Terminaison -ES pour les verbes en -IR.',
        hints: ['Tú...', 'Vives']
      },
      {
        id: 'q5',
        question: 'Quelle est la terminaison de "nosotros" pour les verbes en -AR ?',
        type: 'multiple-choice',
        options: ['-amos', '-emos', '-imos', '-an'],
        correctAnswer: '-amos',
        explanation: 'Nosotros hablamos = Nous parlons. -AMOS pour les -AR.',
        hints: ['Nous...', '-amos']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Ellos hablan" signifie "Ils parlent".',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Ellos/Ellas hablan = Ils/Elles parlent.',
        hints: ['Ellos = ils', 'Hablan = parlent']
      },
      {
        id: 'q7',
        question: 'Conjugue "comer" à la 3ème personne du pluriel :',
        type: 'fill-blank',
        correctAnswer: 'comen',
        explanation: 'Ellos comen = Ils mangent. Terminaison -EN pour les -ER.',
        hints: ['Ellos...', 'Comen']
      },
      {
        id: 'q8',
        question: '"Vosotros cantáis" se traduit par :',
        type: 'multiple-choice',
        options: ['Vous chantez', 'Ils chantent', 'Nous chantons', 'Tu chantes'],
        correctAnswer: 'Vous chantez',
        explanation: 'Vosotros = vous (pluriel familier en Espagne).',
        hints: ['Vosotros = vous', 'Vous chantez']
      },
      {
        id: 'q9',
        question: 'Conjugue "escribir" (écrire) : Yo ___',
        type: 'fill-blank',
        correctAnswer: 'escribo',
        explanation: 'Yo escribo = J\'écris. -O pour la 1ère personne.',
        hints: ['J\'écris', 'Escribo']
      },
      {
        id: 'q10',
        question: 'Quelle est la terminaison de "tú" pour les verbes en -ER ?',
        type: 'multiple-choice',
        options: ['-es', '-as', '-is', '-e'],
        correctAnswer: '-es',
        explanation: 'Tú comes = Tu manges. -ES pour tú avec les verbes en -ER.',
        hints: ['Même que -IR', '-es']
      }
    ]
  },
  {
    id: 'es-5eme-002',
    title: 'La famille et la maison',
    subject: 'espagnol',
    level: '5ème',
    difficulty: 2,
    description: 'Vocabulaire de la famille et de la maison',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Famille', 'Maison'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "mère" en espagnol ?',
        type: 'fill-blank',
        correctAnswer: 'madre',
        explanation: '"Madre" = mère. "Mamá" = maman.',
        hints: ['Comme en français', 'Madre']
      },
      {
        id: 'q2',
        question: 'Que signifie "hermano" ?',
        type: 'multiple-choice',
        options: ['Frère', 'Sœur', 'Cousin', 'Oncle'],
        correctAnswer: 'Frère',
        explanation: '"Hermano" = frère. "Hermana" = sœur.',
        hints: ['Masculin', 'Frère']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "grands-parents" ?',
        type: 'fill-blank',
        correctAnswer: 'abuelos',
        explanation: '"Abuelos" = grands-parents. "Abuelo" = grand-père, "abuela" = grand-mère.',
        hints: ['Abuelo + abuela', 'Abuelos']
      },
      {
        id: 'q4',
        question: '"La cocina" signifie :',
        type: 'multiple-choice',
        options: ['La cuisine', 'La chambre', 'Le salon', 'La salle de bain'],
        correctAnswer: 'La cuisine',
        explanation: '"La cocina" = la cuisine.',
        hints: ['Où on cuisine', 'Cocina']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "chambre" ?',
        type: 'fill-blank',
        correctAnswer: 'habitación',
        explanation: '"Habitación" ou "dormitorio" = chambre.',
        hints: ['Pour dormir', 'Habitación']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Tío" signifie "cousin".',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! "Tío" = oncle. "Primo" = cousin.',
        hints: ['Tío = le frère du père/mère', 'Oncle']
      },
      {
        id: 'q7',
        question: '"El cuarto de baño" est :',
        type: 'multiple-choice',
        options: ['La salle de bain', 'La chambre', 'Le salon', 'La cuisine'],
        correctAnswer: 'La salle de bain',
        explanation: '"El cuarto de baño" = la salle de bain.',
        hints: ['Baño = bain', 'Salle de bain']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "salon" ?',
        type: 'fill-blank',
        correctAnswer: 'salón',
        explanation: '"El salón" ou "la sala de estar" = le salon.',
        hints: ['Comme en français', 'Salón']
      },
      {
        id: 'q9',
        question: '"Los padres" signifie :',
        type: 'multiple-choice',
        options: ['Les parents', 'Les pères', 'Les frères', 'Les fils'],
        correctAnswer: 'Les parents',
        explanation: '"Los padres" = les parents (père et mère).',
        hints: ['Padre + madre', 'Les parents']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "jardin" ?',
        type: 'fill-blank',
        correctAnswer: 'jardín',
        explanation: '"El jardín" = le jardin.',
        hints: ['Presque identique', 'Jardín']
      }
    ]
  },
  {
    id: 'es-5eme-003',
    title: 'Les verbes SER et ESTAR',
    subject: 'espagnol',
    level: '5ème',
    difficulty: 2,
    description: 'Différencier et conjuguer SER et ESTAR (être)',
    estimatedTime: 20,
    skills: ['Conjugaison', 'Verbes irréguliers', 'Grammaire'],
    questions: [
      {
        id: 'q1',
        question: 'SER s\'utilise pour exprimer :',
        type: 'multiple-choice',
        options: ['Une caractéristique permanente', 'Un état temporaire', 'Une localisation', 'Une action'],
        correctAnswer: 'Une caractéristique permanente',
        explanation: 'SER = caractéristiques permanentes (nationalité, profession, caractère...).',
        hints: ['Permanent', 'Identité']
      },
      {
        id: 'q2',
        question: 'Conjugue SER : Yo ___',
        type: 'fill-blank',
        correctAnswer: 'soy',
        explanation: 'Yo soy = Je suis (caractéristique permanente).',
        hints: ['Je suis', 'Soy']
      },
      {
        id: 'q3',
        question: 'ESTAR s\'utilise pour :',
        type: 'multiple-choice',
        options: ['Un état temporaire ou une localisation', 'La nationalité', 'La profession', 'L\'heure'],
        correctAnswer: 'Un état temporaire ou une localisation',
        explanation: 'ESTAR = état temporaire (humeur, santé) ou localisation.',
        hints: ['Temporaire', 'Où on est']
      },
      {
        id: 'q4',
        question: 'Conjugue ESTAR : Tú ___',
        type: 'fill-blank',
        correctAnswer: 'estás',
        explanation: 'Tú estás = Tu es (état ou position).',
        hints: ['Tu es', 'Estás']
      },
      {
        id: 'q5',
        question: '"María es profesora" - Pourquoi SER ?',
        type: 'multiple-choice',
        options: ['C\'est une profession (permanent)', 'Elle est fatiguée', 'Elle est à l\'école', 'Elle mange'],
        correctAnswer: 'C\'est une profession (permanent)',
        explanation: 'La profession est une caractéristique stable → SER.',
        hints: ['Profession', 'Permanent']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Estoy cansado" signifie "Je suis fatigué".',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! État temporaire → ESTAR. Estoy cansado = Je suis fatigué.',
        hints: ['Fatigue = temporaire', 'ESTAR']
      },
      {
        id: 'q7',
        question: 'Conjugue SER : Nosotros ___',
        type: 'fill-blank',
        correctAnswer: 'somos',
        explanation: 'Nosotros somos = Nous sommes.',
        hints: ['Nous sommes', 'Somos']
      },
      {
        id: 'q8',
        question: '"El libro está en la mesa" utilise ESTAR car :',
        type: 'multiple-choice',
        options: ['C\'est une localisation', 'C\'est une profession', 'C\'est une nationalité', 'C\'est une caractéristique'],
        correctAnswer: 'C\'est une localisation',
        explanation: 'Position/localisation → toujours ESTAR.',
        hints: ['Où est le livre ?', 'Localisation']
      },
      {
        id: 'q9',
        question: 'Conjugue ESTAR : Ellos ___',
        type: 'fill-blank',
        correctAnswer: 'están',
        explanation: 'Ellos están = Ils sont (état ou position).',
        hints: ['Ils sont', 'Están']
      },
      {
        id: 'q10',
        question: 'Choisis : "Mi padre ___ médico" (SER ou ESTAR ?)',
        type: 'fill-blank',
        correctAnswer: 'es',
        explanation: 'Mon père EST médecin → profession → SER → es.',
        hints: ['Profession', 'SER → es']
      }
    ]
  },

  // --- ESPAGNOL 4ÈME ---
  {
    id: 'es-4eme-001',
    title: 'Le passé simple (pretérito indefinido)',
    subject: 'espagnol',
    level: '4ème',
    difficulty: 3,
    description: 'Conjuguer les verbes réguliers au passé simple',
    estimatedTime: 20,
    skills: ['Conjugaison', 'Passé simple', 'Verbes réguliers'],
    questions: [
      {
        id: 'q1',
        question: 'Le pretérito indefinido s\'utilise pour :',
        type: 'multiple-choice',
        options: ['Une action passée terminée', 'Une action habituelle', 'Une action future', 'Une description'],
        correctAnswer: 'Une action passée terminée',
        explanation: 'Le pretérito indefinido = action passée, achevée, datée.',
        hints: ['Passé', 'Action terminée']
      },
      {
        id: 'q2',
        question: 'Conjugue "hablar" au passé simple : Yo ___',
        type: 'fill-blank',
        correctAnswer: 'hablé',
        explanation: 'Yo hablé = Je parlai / J\'ai parlé.',
        hints: ['Accent sur le -é', 'Hablé']
      },
      {
        id: 'q3',
        question: 'Quelle est la terminaison de "él" pour les verbes en -AR au passé ?',
        type: 'multiple-choice',
        options: ['-ó', '-ió', '-é', '-aba'],
        correctAnswer: '-ó',
        explanation: 'Él habló = Il parla. Terminaison -Ó pour él/ella/usted.',
        hints: ['Accent', '-ó']
      },
      {
        id: 'q4',
        question: 'Conjugue "comer" au passé : Tú ___',
        type: 'fill-blank',
        correctAnswer: 'comiste',
        explanation: 'Tú comiste = Tu mangeas / Tu as mangé.',
        hints: ['-iste', 'Comiste']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : "Vivieron" signifie "Ils vécurent".',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Ellos vivieron = Ils vécurent / Ils ont vécu.',
        hints: ['-ieron', 'Ils vécurent']
      },
      {
        id: 'q6',
        question: 'Conjugue "estudiar" : Nosotros ___',
        type: 'fill-blank',
        correctAnswer: 'estudiamos',
        explanation: 'Nosotros estudiamos = Nous étudiâmes. (Même forme qu\'au présent !)',
        hints: ['-amos', 'Estudiamos']
      },
      {
        id: 'q7',
        question: '"Ayer comí paella" signifie :',
        type: 'multiple-choice',
        options: ['Hier j\'ai mangé de la paella', 'Demain je mangerai de la paella', 'Je mange de la paella', 'Je mangeais de la paella'],
        correctAnswer: 'Hier j\'ai mangé de la paella',
        explanation: 'Ayer = hier. Comí = j\'ai mangé (passé simple).',
        hints: ['Ayer = hier', 'Passé']
      },
      {
        id: 'q8',
        question: 'Conjugue "escribir" : Ella ___',
        type: 'fill-blank',
        correctAnswer: 'escribió',
        explanation: 'Ella escribió = Elle écrivit.',
        hints: ['-ió', 'Escribió']
      },
      {
        id: 'q9',
        question: 'Quelle terminaison pour "vosotros" avec les verbes en -ER/-IR ?',
        type: 'multiple-choice',
        options: ['-isteis', '-asteis', '-ieron', '-imos'],
        correctAnswer: '-isteis',
        explanation: 'Vosotros comisteis = Vous mangeâtes.',
        hints: ['-isteis', 'Vosotros']
      },
      {
        id: 'q10',
        question: 'Conjugue "bailar" (danser) : Ellos ___',
        type: 'fill-blank',
        correctAnswer: 'bailaron',
        explanation: 'Ellos bailaron = Ils dansèrent.',
        hints: ['-aron', 'Bailaron']
      }
    ]
  },
  {
    id: 'es-4eme-002',
    title: 'Les verbes irréguliers courants',
    subject: 'espagnol',
    level: '4ème',
    difficulty: 3,
    description: 'Conjuguer les verbes irréguliers fréquents',
    estimatedTime: 20,
    skills: ['Conjugaison', 'Verbes irréguliers', 'Vocabulaire'],
    questions: [
      {
        id: 'q1',
        question: 'Conjugue "ir" (aller) au présent : Yo ___',
        type: 'fill-blank',
        correctAnswer: 'voy',
        explanation: 'Yo voy = Je vais. IR est très irrégulier.',
        hints: ['Complètement irrégulier', 'Voy']
      },
      {
        id: 'q2',
        question: '"Tener" (avoir) au présent : Él ___',
        type: 'fill-blank',
        correctAnswer: 'tiene',
        explanation: 'Él tiene = Il a. Changement E → IE.',
        hints: ['E devient IE', 'Tiene']
      },
      {
        id: 'q3',
        question: 'Vrai ou Faux : "Hago" est la 1ère personne de "hacer" (faire).',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Yo hago = Je fais.',
        hints: ['Hacer → hago', 'Je fais']
      },
      {
        id: 'q4',
        question: 'Conjugue "poder" (pouvoir) : Nosotros ___',
        type: 'fill-blank',
        correctAnswer: 'podemos',
        explanation: 'Nosotros podemos = Nous pouvons.',
        hints: ['O → UE sauf nous/vous', 'Podemos']
      },
      {
        id: 'q5',
        question: '"Quiero" vient du verbe :',
        type: 'multiple-choice',
        options: ['Querer (vouloir)', 'Quedar (rester)', 'Quemar (brûler)', 'Quitar (enlever)'],
        correctAnswer: 'Querer (vouloir)',
        explanation: 'Yo quiero = Je veux. Querer = vouloir.',
        hints: ['E → IE', 'Vouloir']
      },
      {
        id: 'q6',
        question: 'Conjugue "venir" : Tú ___',
        type: 'fill-blank',
        correctAnswer: 'vienes',
        explanation: 'Tú vienes = Tu viens. E → IE.',
        hints: ['E → IE', 'Vienes']
      },
      {
        id: 'q7',
        question: '"Sé" et "soy" viennent de quel(s) verbe(s) ?',
        type: 'multiple-choice',
        options: ['Saber et ser', 'Ser et ser', 'Saber et saber', 'Salir et ser'],
        correctAnswer: 'Saber et ser',
        explanation: 'Yo sé = Je sais (saber). Yo soy = Je suis (ser).',
        hints: ['Deux verbes différents', 'Savoir et être']
      },
      {
        id: 'q8',
        question: 'Conjugue "decir" (dire) : Yo ___',
        type: 'fill-blank',
        correctAnswer: 'digo',
        explanation: 'Yo digo = Je dis. Très irrégulier.',
        hints: ['G apparaît', 'Digo']
      },
      {
        id: 'q9',
        question: '"Pueden" signifie :',
        type: 'multiple-choice',
        options: ['Ils peuvent', 'Ils veulent', 'Ils viennent', 'Ils savent'],
        correctAnswer: 'Ils peuvent',
        explanation: 'Ellos pueden = Ils peuvent (poder).',
        hints: ['Poder', 'Peuvent']
      },
      {
        id: 'q10',
        question: 'Conjugue "salir" (sortir) : Yo ___',
        type: 'fill-blank',
        correctAnswer: 'salgo',
        explanation: 'Yo salgo = Je sors. G à la 1ère personne.',
        hints: ['-GO à la 1ère personne', 'Salgo']
      }
    ]
  },
  {
    id: 'es-4eme-003',
    title: 'Les pronoms compléments',
    subject: 'espagnol',
    level: '4ème',
    difficulty: 3,
    description: 'Utiliser les pronoms COD et COI en espagnol',
    estimatedTime: 18,
    skills: ['Grammaire', 'Pronoms', 'Syntaxe'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est le pronom COD pour "le" (masculin singulier) ?',
        type: 'multiple-choice',
        options: ['Lo', 'Le', 'La', 'Los'],
        correctAnswer: 'Lo',
        explanation: 'Lo = le (COD masculin singulier). Lo veo = Je le vois.',
        hints: ['Masculin', 'Lo']
      },
      {
        id: 'q2',
        question: 'Traduis "Je la vois" :',
        type: 'fill-blank',
        correctAnswer: 'La veo',
        explanation: 'La = la (COD féminin). La veo = Je la vois.',
        hints: ['La + verbe', 'La veo']
      },
      {
        id: 'q3',
        question: 'Où se place généralement le pronom complément ?',
        type: 'multiple-choice',
        options: ['Avant le verbe conjugué', 'Après le verbe', 'Entre les deux verbes', 'En fin de phrase'],
        correctAnswer: 'Avant le verbe conjugué',
        explanation: 'Le pronom se place AVANT le verbe conjugué. Lo como = Je le mange.',
        hints: ['Avant', 'Devant le verbe']
      },
      {
        id: 'q4',
        question: '"Les" (pluriel) se dit :',
        type: 'fill-blank',
        correctAnswer: 'los',
        explanation: 'Los = les (masculin pluriel). Las = les (féminin pluriel).',
        hints: ['Pluriel de "lo"', 'Los']
      },
      {
        id: 'q5',
        question: 'Quel pronom COI pour "lui" (à lui/à elle) ?',
        type: 'multiple-choice',
        options: ['Le', 'Lo', 'La', 'Se'],
        correctAnswer: 'Le',
        explanation: 'Le = lui (COI). Le doy el libro = Je lui donne le livre.',
        hints: ['COI', 'Le']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : Avec un infinitif, le pronom peut être attaché au verbe.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! "Quiero verlo" ou "Lo quiero ver" = Je veux le voir.',
        hints: ['Deux positions possibles', 'Attaché ou devant']
      },
      {
        id: 'q7',
        question: 'Traduis "Je leur parle" :',
        type: 'fill-blank',
        correctAnswer: 'Les hablo',
        explanation: 'Les = leur (COI pluriel). Les hablo = Je leur parle.',
        hints: ['Les + verbe', 'Les hablo']
      },
      {
        id: 'q8',
        question: '"Me" signifie :',
        type: 'multiple-choice',
        options: ['Me (COD et COI)', 'Toi', 'Lui', 'Nous'],
        correctAnswer: 'Me (COD et COI)',
        explanation: 'Me = me/moi. Me llama = Il m\'appelle. Me da = Il me donne.',
        hints: ['1ère personne', 'Me']
      },
      {
        id: 'q9',
        question: 'Quand on a COI + COD ensemble, le COI "le/les" devient :',
        type: 'fill-blank',
        correctAnswer: 'se',
        explanation: 'Le/les + lo/la/los/las → SE lo/la... Ex: Se lo doy = Je le lui donne.',
        hints: ['Transformation', 'Se']
      },
      {
        id: 'q10',
        question: '"Te quiero" signifie :',
        type: 'multiple-choice',
        options: ['Je t\'aime', 'Tu m\'aimes', 'Je te veux', 'Tu me veux'],
        correctAnswer: 'Je t\'aime',
        explanation: 'Te = te. Quiero = je veux/j\'aime. Te quiero = Je t\'aime.',
        hints: ['Te = toi', 'Je t\'aime']
      }
    ]
  },

  // --- ESPAGNOL 3ÈME ---
  {
    id: 'es-3eme-001',
    title: 'Le subjonctif présent',
    subject: 'espagnol',
    level: '3ème',
    difficulty: 3,
    description: 'Former et utiliser le subjonctif présent',
    estimatedTime: 20,
    skills: ['Conjugaison', 'Subjonctif', 'Expression'],
    questions: [
      {
        id: 'q1',
        question: 'Le subjonctif s\'utilise après les verbes exprimant :',
        type: 'multiple-choice',
        options: ['Souhait, doute, émotion', 'Certitude', 'Description', 'Action habituelle'],
        correctAnswer: 'Souhait, doute, émotion',
        explanation: 'Subjonctif = souhait, doute, émotion, ordre, conseil...',
        hints: ['Incertitude', 'Sentiments']
      },
      {
        id: 'q2',
        question: 'Pour former le subjonctif des verbes en -AR, on utilise les terminaisons en :',
        type: 'multiple-choice',
        options: ['-E', '-A', '-I', '-O'],
        correctAnswer: '-E',
        explanation: 'Verbes en -AR → terminaisons en -E : hable, hables, hable...',
        hints: ['Inverse', '-E pour les -AR']
      },
      {
        id: 'q3',
        question: 'Conjugue "hablar" au subjonctif : Que yo ___',
        type: 'fill-blank',
        correctAnswer: 'hable',
        explanation: 'Que yo hable = Que je parle.',
        hints: ['-E', 'Hable']
      },
      {
        id: 'q4',
        question: '"Espero que vengas" signifie :',
        type: 'multiple-choice',
        options: ['J\'espère que tu viennes', 'J\'espère que tu viens', 'J\'attends ta venue', 'Je veux venir'],
        correctAnswer: 'J\'espère que tu viennes',
        explanation: 'Esperar que + subjonctif. Vengas = que tu viennes.',
        hints: ['Espero que', 'Subjonctif']
      },
      {
        id: 'q5',
        question: 'Conjugue "comer" au subjonctif : Que él ___',
        type: 'fill-blank',
        correctAnswer: 'coma',
        explanation: 'Que él coma = Qu\'il mange. -ER/-IR → terminaisons en -A.',
        hints: ['-A', 'Coma']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Ojalá" est toujours suivi du subjonctif.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Ojalá (pourvu que) + subjonctif toujours.',
        hints: ['Souhait', 'Toujours subjonctif']
      },
      {
        id: 'q7',
        question: 'Conjugue "vivir" au subjonctif : Que nosotros ___',
        type: 'fill-blank',
        correctAnswer: 'vivamos',
        explanation: 'Que nosotros vivamos = Que nous vivions.',
        hints: ['-amos', 'Vivamos']
      },
      {
        id: 'q8',
        question: '"Quiero que estudies" se traduit par :',
        type: 'multiple-choice',
        options: ['Je veux que tu études', 'Je veux étudier', 'Tu veux que j\'étudie', 'Nous voulons étudier'],
        correctAnswer: 'Je veux que tu études',
        explanation: 'Querer que + subjonctif = vouloir que + subjonctif.',
        hints: ['Quiero que', 'Je veux que']
      },
      {
        id: 'q9',
        question: 'Subjonctif de "ser" : Que yo ___',
        type: 'fill-blank',
        correctAnswer: 'sea',
        explanation: 'Que yo sea = Que je sois. Ser est irrégulier.',
        hints: ['Irrégulier', 'Sea']
      },
      {
        id: 'q10',
        question: '"Es importante que" est suivi de :',
        type: 'multiple-choice',
        options: ['Subjonctif', 'Indicatif', 'Infinitif', 'Conditionnel'],
        correctAnswer: 'Subjonctif',
        explanation: 'Les expressions impersonnelles (es importante, es necesario...) + que + subjonctif.',
        hints: ['Expression impersonnelle', 'Subjonctif']
      }
    ]
  },
  {
    id: 'es-3eme-002',
    title: 'Le futur simple',
    subject: 'espagnol',
    level: '3ème',
    difficulty: 3,
    description: 'Conjuguer les verbes au futur simple',
    estimatedTime: 18,
    skills: ['Conjugaison', 'Futur', 'Expression du temps'],
    questions: [
      {
        id: 'q1',
        question: 'Comment forme-t-on le futur simple en espagnol ?',
        type: 'multiple-choice',
        options: ['Infinitif + terminaisons', 'Radical + terminaisons', 'Auxiliaire + participe', 'Ir a + infinitif'],
        correctAnswer: 'Infinitif + terminaisons',
        explanation: 'Futur = infinitif entier + terminaisons (-é, -ás, -á, -emos, -éis, -án).',
        hints: ['Infinitif complet', 'Infinitif + terminaisons']
      },
      {
        id: 'q2',
        question: 'Conjugue "hablar" au futur : Yo ___',
        type: 'fill-blank',
        correctAnswer: 'hablaré',
        explanation: 'Yo hablaré = Je parlerai. Hablar + é.',
        hints: ['Infinitif + é', 'Hablaré']
      },
      {
        id: 'q3',
        question: 'Quelle est la terminaison du futur pour "nosotros" ?',
        type: 'multiple-choice',
        options: ['-emos', '-amos', '-imos', '-eremos'],
        correctAnswer: '-emos',
        explanation: 'Nosotros hablaremos, comeremos, viviremos.',
        hints: ['-emos', 'Nous']
      },
      {
        id: 'q4',
        question: 'Conjugue "comer" au futur : Ellos ___',
        type: 'fill-blank',
        correctAnswer: 'comerán',
        explanation: 'Ellos comerán = Ils mangeront. Comer + án.',
        hints: ['-án', 'Comerán']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : "Tener" a un futur régulier.',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! Tener → tendr-. Yo tendré = J\'aurai.',
        hints: ['Irrégulier', 'Tendr-']
      },
      {
        id: 'q6',
        question: 'Quel est le radical irrégulier de "poder" au futur ?',
        type: 'fill-blank',
        correctAnswer: 'podr',
        explanation: 'Poder → podr-. Yo podré = Je pourrai.',
        hints: ['Perd le -e-', 'Podr-']
      },
      {
        id: 'q7',
        question: '"Haré" vient du verbe :',
        type: 'multiple-choice',
        options: ['Hacer', 'Haber', 'Hablar', 'Hallar'],
        correctAnswer: 'Hacer',
        explanation: 'Hacer → har-. Yo haré = Je ferai.',
        hints: ['Faire', 'Hacer']
      },
      {
        id: 'q8',
        question: 'Conjugue "salir" au futur : Tú ___',
        type: 'fill-blank',
        correctAnswer: 'saldrás',
        explanation: 'Salir → saldr-. Tú saldrás = Tu sortiras.',
        hints: ['Saldr-', 'Saldrás']
      },
      {
        id: 'q9',
        question: '"Mañana iré al cine" signifie :',
        type: 'multiple-choice',
        options: ['Demain j\'irai au cinéma', 'Hier je suis allé au cinéma', 'Je vais au cinéma', 'J\'allais au cinéma'],
        correctAnswer: 'Demain j\'irai au cinéma',
        explanation: 'Mañana = demain. Iré = j\'irai (futur de ir).',
        hints: ['Mañana = demain', 'Futur']
      },
      {
        id: 'q10',
        question: 'Conjugue "venir" au futur : Ella ___',
        type: 'fill-blank',
        correctAnswer: 'vendrá',
        explanation: 'Venir → vendr-. Ella vendrá = Elle viendra.',
        hints: ['Vendr-', 'Vendrá']
      }
    ]
  },
  {
    id: 'es-3eme-003',
    title: 'L\'imparfait de l\'indicatif',
    subject: 'espagnol',
    level: '3ème',
    difficulty: 3,
    description: 'Conjuguer et utiliser l\'imparfait en espagnol',
    estimatedTime: 18,
    skills: ['Conjugaison', 'Imparfait', 'Récit'],
    questions: [
      {
        id: 'q1',
        question: 'L\'imparfait s\'utilise pour :',
        type: 'multiple-choice',
        options: ['Des descriptions et actions habituelles au passé', 'Des actions ponctuelles', 'Des actions futures', 'Des ordres'],
        correctAnswer: 'Des descriptions et actions habituelles au passé',
        explanation: 'Imparfait = descriptions, habitudes, actions en cours dans le passé.',
        hints: ['Description', 'Habitudes']
      },
      {
        id: 'q2',
        question: 'Terminaisons de l\'imparfait pour les verbes en -AR :',
        type: 'multiple-choice',
        options: ['-aba, -abas, -aba, -ábamos, -abais, -aban', '-ía, -ías, -ía, -íamos, -íais, -ían', '-é, -aste, -ó, -amos, -asteis, -aron', '-o, -as, -a, -amos, -áis, -an'],
        correctAnswer: '-aba, -abas, -aba, -ábamos, -abais, -aban',
        explanation: 'Verbes en -AR : hablaba, hablabas, hablaba...',
        hints: ['-ABA', 'Verbes -AR']
      },
      {
        id: 'q3',
        question: 'Conjugue "hablar" à l\'imparfait : Yo ___',
        type: 'fill-blank',
        correctAnswer: 'hablaba',
        explanation: 'Yo hablaba = Je parlais.',
        hints: ['-aba', 'Hablaba']
      },
      {
        id: 'q4',
        question: 'Terminaisons de l\'imparfait pour -ER et -IR :',
        type: 'multiple-choice',
        options: ['-ía, -ías, -ía, -íamos, -íais, -ían', '-aba, -abas...', '-é, -iste...', '-o, -es...'],
        correctAnswer: '-ía, -ías, -ía, -íamos, -íais, -ían',
        explanation: 'Verbes en -ER/-IR : comía, vivía, etc.',
        hints: ['-ÍA', 'Mêmes pour -ER et -IR']
      },
      {
        id: 'q5',
        question: 'Conjugue "comer" à l\'imparfait : Nosotros ___',
        type: 'fill-blank',
        correctAnswer: 'comíamos',
        explanation: 'Nosotros comíamos = Nous mangions.',
        hints: ['-íamos', 'Comíamos']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : Il n\'y a que 3 verbes irréguliers à l\'imparfait.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Ser (era), ir (iba), ver (veía) sont les seuls irréguliers.',
        hints: ['Très peu', 'Ser, ir, ver']
      },
      {
        id: 'q7',
        question: 'Conjugue "ser" à l\'imparfait : Él ___',
        type: 'fill-blank',
        correctAnswer: 'era',
        explanation: 'Él era = Il était. Ser est irrégulier.',
        hints: ['Irrégulier', 'Era']
      },
      {
        id: 'q8',
        question: '"Cuando era niño, jugaba mucho" signifie :',
        type: 'multiple-choice',
        options: ['Quand j\'étais enfant, je jouais beaucoup', 'Quand je serai enfant, je jouerai', 'Hier j\'ai joué', 'Je joue comme un enfant'],
        correctAnswer: 'Quand j\'étais enfant, je jouais beaucoup',
        explanation: 'Era = j\'étais, jugaba = je jouais (imparfait = habitude passée).',
        hints: ['Imparfait', 'Habitude passée']
      },
      {
        id: 'q9',
        question: 'Conjugue "ir" à l\'imparfait : Ellos ___',
        type: 'fill-blank',
        correctAnswer: 'iban',
        explanation: 'Ellos iban = Ils allaient. Ir est irrégulier.',
        hints: ['Ib-', 'Iban']
      },
      {
        id: 'q10',
        question: '"Hacía sol" signifie :',
        type: 'multiple-choice',
        options: ['Il faisait soleil', 'Il fera soleil', 'Il fait soleil', 'Fais du soleil'],
        correctAnswer: 'Il faisait soleil',
        explanation: 'Hacía = il faisait (hacer à l\'imparfait, description météo).',
        hints: ['Imparfait', 'Description']
      }
    ]
  },

  // ========================================
  // ALLEMAND - TOUS NIVEAUX COLLÈGE
  // ========================================

  // --- ALLEMAND 6ÈME ---
  {
    id: 'de-6eme-001',
    title: 'Se présenter en allemand',
    subject: 'allemand',
    level: '6ème',
    difficulty: 1,
    description: 'Apprendre à se présenter et saluer en allemand',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Présentation', 'Salutations'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "Bonjour" en allemand (formel) ?',
        type: 'multiple-choice',
        options: ['Guten Tag', 'Auf Wiedersehen', 'Danke', 'Bitte'],
        correctAnswer: 'Guten Tag',
        explanation: '"Guten Tag" = Bonjour (formel). "Hallo" = Salut (informel).',
        hints: ['Formel', 'Guten Tag']
      },
      {
        id: 'q2',
        question: 'Comment dit-on "Je m\'appelle" ?',
        type: 'fill-blank',
        correctAnswer: 'Ich heiße',
        explanation: '"Ich heiße..." = Je m\'appelle... Ex: Ich heiße Anna.',
        hints: ['Ich = je', 'Ich heiße']
      },
      {
        id: 'q3',
        question: 'Que signifie "Wie heißt du?" ?',
        type: 'multiple-choice',
        options: ['Comment t\'appelles-tu ?', 'Comment vas-tu ?', 'Où habites-tu ?', 'Quel âge as-tu ?'],
        correctAnswer: 'Comment t\'appelles-tu ?',
        explanation: '"Wie heißt du?" = Comment t\'appelles-tu ?',
        hints: ['Heißen = s\'appeler', 'Prénom']
      },
      {
        id: 'q4',
        question: 'Comment dit-on "Au revoir" ?',
        type: 'fill-blank',
        correctAnswer: 'Auf Wiedersehen',
        explanation: '"Auf Wiedersehen" = Au revoir (formel). "Tschüss" = Salut (informel).',
        hints: ['Formel', 'Auf Wiedersehen']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : "Guten Morgen" signifie "Bonne nuit".',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! "Guten Morgen" = Bonjour (le matin). "Gute Nacht" = Bonne nuit.',
        hints: ['Morgen = matin', 'Le matin']
      },
      {
        id: 'q6',
        question: 'Comment dit-on "Merci" ?',
        type: 'multiple-choice',
        options: ['Danke', 'Bitte', 'Entschuldigung', 'Ja'],
        correctAnswer: 'Danke',
        explanation: '"Danke" = Merci. "Danke schön" = Merci beaucoup.',
        hints: ['Très courant', 'Danke']
      },
      {
        id: 'q7',
        question: 'Que signifie "Ich bin zwölf Jahre alt" ?',
        type: 'multiple-choice',
        options: ['J\'ai douze ans', 'J\'ai deux ans', 'Il est midi', 'J\'habite au numéro 12'],
        correctAnswer: 'J\'ai douze ans',
        explanation: '"Ich bin zwölf Jahre alt" = J\'ai douze ans. Jahre = ans.',
        hints: ['Jahre = années', 'Âge']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "S\'il te plaît" ?',
        type: 'fill-blank',
        correctAnswer: 'Bitte',
        explanation: '"Bitte" = S\'il te plaît / De rien.',
        hints: ['Politesse', 'Bitte']
      },
      {
        id: 'q9',
        question: '"Guten Abend" se dit :',
        type: 'multiple-choice',
        options: ['Le soir', 'Le matin', 'La nuit', 'L\'après-midi'],
        correctAnswer: 'Le soir',
        explanation: '"Guten Abend" = Bonsoir (le soir).',
        hints: ['Abend = soir', 'Le soir']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "Je viens de France" ?',
        type: 'fill-blank',
        correctAnswer: 'Ich komme aus Frankreich',
        explanation: '"Ich komme aus Frankreich" = Je viens de France.',
        hints: ['Aus = de', 'Frankreich = France']
      }
    ]
  },
  {
    id: 'de-6eme-002',
    title: 'Les nombres de 1 à 20',
    subject: 'allemand',
    level: '6ème',
    difficulty: 1,
    description: 'Apprendre à compter de 1 à 20 en allemand',
    estimatedTime: 15,
    skills: ['Nombres', 'Vocabulaire', 'Prononciation'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "un" en allemand ?',
        type: 'fill-blank',
        correctAnswer: 'eins',
        explanation: '"Eins" = 1 en allemand.',
        hints: ['Commence par E', 'Eins']
      },
      {
        id: 'q2',
        question: 'Que signifie "fünf" ?',
        type: 'multiple-choice',
        options: ['5', '4', '6', '15'],
        correctAnswer: '5',
        explanation: '"Fünf" = 5 en allemand.',
        hints: ['Comme "five" en anglais', '5']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "10" ?',
        type: 'fill-blank',
        correctAnswer: 'zehn',
        explanation: '"Zehn" = 10 en allemand.',
        hints: ['Comme "ten" en anglais', 'Zehn']
      },
      {
        id: 'q4',
        question: '"Fünfzehn" signifie :',
        type: 'multiple-choice',
        options: ['15', '5', '50', '14'],
        correctAnswer: '15',
        explanation: '"Fünfzehn" = 15 (fünf + zehn = 5 + 10).',
        hints: ['Fünf + zehn', '15']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "20" ?',
        type: 'fill-blank',
        correctAnswer: 'zwanzig',
        explanation: '"Zwanzig" = 20 en allemand.',
        hints: ['Commence par Z', 'Zwanzig']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Sieben" signifie "six".',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! "Sieben" = 7. "Sechs" = 6.',
        hints: ['Sieben ressemble à seven', 'C\'est 7']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "12" ?',
        type: 'multiple-choice',
        options: ['Zwölf', 'Zwei', 'Zehn', 'Sechzehn'],
        correctAnswer: 'Zwölf',
        explanation: '"Zwölf" = 12. "Zwei" = 2.',
        hints: ['Comme "twelve"', 'Zwölf']
      },
      {
        id: 'q8',
        question: '"Acht" signifie :',
        type: 'fill-blank',
        correctAnswer: '8',
        explanation: '"Acht" = 8 en allemand.',
        hints: ['Comme "eight"', '8']
      },
      {
        id: 'q9',
        question: 'Comment dit-on "3" ?',
        type: 'multiple-choice',
        options: ['Drei', 'Dreizehn', 'Dreißig', 'Vier'],
        correctAnswer: 'Drei',
        explanation: '"Drei" = 3. "Dreizehn" = 13.',
        hints: ['Comme "three"', 'Drei']
      },
      {
        id: 'q10',
        question: 'Quel nombre est "siebzehn" ?',
        type: 'fill-blank',
        correctAnswer: '17',
        explanation: '"Siebzehn" = 17 (sieben + zehn, mais sieben perd le "en").',
        hints: ['7 + 10', '17']
      }
    ]
  },
  {
    id: 'de-6eme-003',
    title: 'Les articles et le genre',
    subject: 'allemand',
    level: '6ème',
    difficulty: 1,
    description: 'Comprendre les articles der, die, das en allemand',
    estimatedTime: 15,
    skills: ['Grammaire', 'Articles', 'Genre'],
    questions: [
      {
        id: 'q1',
        question: 'Combien de genres grammaticaux y a-t-il en allemand ?',
        type: 'multiple-choice',
        options: ['Trois (masculin, féminin, neutre)', 'Deux (masculin, féminin)', 'Un seul', 'Quatre'],
        correctAnswer: 'Trois (masculin, féminin, neutre)',
        explanation: 'L\'allemand a 3 genres : masculin (der), féminin (die), neutre (das).',
        hints: ['Plus que le français', 'Trois']
      },
      {
        id: 'q2',
        question: 'Quel est l\'article défini masculin ?',
        type: 'fill-blank',
        correctAnswer: 'der',
        explanation: '"Der" = le (masculin). Ex: der Mann = l\'homme.',
        hints: ['Masculin', 'Der']
      },
      {
        id: 'q3',
        question: '"Die Frau" signifie :',
        type: 'multiple-choice',
        options: ['La femme', 'L\'homme', 'L\'enfant', 'La maison'],
        correctAnswer: 'La femme',
        explanation: '"Die Frau" = la femme. "Die" = article féminin.',
        hints: ['Frau = femme', 'Féminin']
      },
      {
        id: 'q4',
        question: 'Quel est l\'article défini neutre ?',
        type: 'fill-blank',
        correctAnswer: 'das',
        explanation: '"Das" = le/la (neutre). Ex: das Kind = l\'enfant.',
        hints: ['Neutre', 'Das']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : "Das Mädchen" (la fille) est neutre.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Les mots en -chen sont toujours neutres en allemand.',
        hints: ['-chen = neutre', 'Das']
      },
      {
        id: 'q6',
        question: 'Quel article pour "der Tisch" (la table) ?',
        type: 'multiple-choice',
        options: ['Masculin (der)', 'Féminin (die)', 'Neutre (das)', 'Pluriel'],
        correctAnswer: 'Masculin (der)',
        explanation: '"Der Tisch" = la table est masculin en allemand !',
        hints: ['Der = masculin', 'Masculin']
      },
      {
        id: 'q7',
        question: 'Quel est l\'article indéfini masculin (un) ?',
        type: 'fill-blank',
        correctAnswer: 'ein',
        explanation: '"Ein" = un (masculin/neutre). "Eine" = une (féminin).',
        hints: ['Un', 'Ein']
      },
      {
        id: 'q8',
        question: '"Die Bücher" signifie :',
        type: 'multiple-choice',
        options: ['Les livres', 'Le livre', 'La bibliothèque', 'Un livre'],
        correctAnswer: 'Les livres',
        explanation: '"Die" au pluriel = les. Bücher = livres.',
        hints: ['Pluriel', 'Les livres']
      },
      {
        id: 'q9',
        question: 'Vrai ou Faux : Au pluriel, l\'article est toujours "die".',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Quel que soit le genre au singulier, le pluriel prend "die".',
        hints: ['Pluriel = die', 'Toujours']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "une femme" ?',
        type: 'fill-blank',
        correctAnswer: 'eine Frau',
        explanation: '"Eine Frau" = une femme. "Eine" = article indéfini féminin.',
        hints: ['Féminin indéfini', 'Eine']
      }
    ]
  },

  // --- ALLEMAND 5ÈME ---
  {
    id: 'de-5eme-001',
    title: 'Le présent de l\'indicatif',
    subject: 'allemand',
    level: '5ème',
    difficulty: 2,
    description: 'Conjuguer les verbes réguliers au présent en allemand',
    estimatedTime: 18,
    skills: ['Conjugaison', 'Verbes', 'Présent'],
    questions: [
      {
        id: 'q1',
        question: 'Quelles sont les terminaisons du présent pour "ich" et "du" ?',
        type: 'multiple-choice',
        options: ['-e et -st', '-e et -t', '-st et -e', '-en et -t'],
        correctAnswer: '-e et -st',
        explanation: 'Ich spiele, du spielst. Terminaisons : -e (ich), -st (du).',
        hints: ['Ich = -e', 'Du = -st']
      },
      {
        id: 'q2',
        question: 'Conjugue "spielen" (jouer) : Ich ___',
        type: 'fill-blank',
        correctAnswer: 'spiele',
        explanation: 'Ich spiele = Je joue. Radical + e.',
        hints: ['-e', 'Spiele']
      },
      {
        id: 'q3',
        question: '"Er spricht" signifie :',
        type: 'multiple-choice',
        options: ['Il parle', 'Il joue', 'Il mange', 'Il dort'],
        correctAnswer: 'Il parle',
        explanation: 'Sprechen = parler. Er spricht = Il parle (verbe fort).',
        hints: ['Sprechen', 'Il parle']
      },
      {
        id: 'q4',
        question: 'Conjugue "wohnen" (habiter) : Du ___',
        type: 'fill-blank',
        correctAnswer: 'wohnst',
        explanation: 'Du wohnst = Tu habites. Radical + st.',
        hints: ['-st', 'Wohnst']
      },
      {
        id: 'q5',
        question: 'Quelle est la terminaison de "er/sie/es" ?',
        type: 'multiple-choice',
        options: ['-t', '-st', '-e', '-en'],
        correctAnswer: '-t',
        explanation: 'Er/sie/es spielt = Il/elle joue. Terminaison -t.',
        hints: ['3ème personne', '-t']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Wir" et "sie" (pluriel) ont la même terminaison que l\'infinitif.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Wir spielen, sie spielen = terminaison -en comme l\'infinitif.',
        hints: ['-en', 'Comme l\'infinitif']
      },
      {
        id: 'q7',
        question: 'Conjugue "lernen" (apprendre) : Wir ___',
        type: 'fill-blank',
        correctAnswer: 'lernen',
        explanation: 'Wir lernen = Nous apprenons. Même forme que l\'infinitif.',
        hints: ['-en', 'Lernen']
      },
      {
        id: 'q8',
        question: '"Ihr spielt" se traduit par :',
        type: 'multiple-choice',
        options: ['Vous jouez', 'Ils jouent', 'Nous jouons', 'Tu joues'],
        correctAnswer: 'Vous jouez',
        explanation: 'Ihr = vous (pluriel familier). Ihr spielt = Vous jouez.',
        hints: ['Ihr = vous', 'Vous jouez']
      },
      {
        id: 'q9',
        question: 'Conjugue "machen" (faire) : Er ___',
        type: 'fill-blank',
        correctAnswer: 'macht',
        explanation: 'Er macht = Il fait. Terminaison -t.',
        hints: ['-t', 'Macht']
      },
      {
        id: 'q10',
        question: 'Quelle est la terminaison de "ihr" ?',
        type: 'multiple-choice',
        options: ['-t', '-st', '-en', '-e'],
        correctAnswer: '-t',
        explanation: 'Ihr spielt, ihr macht. Terminaison -t pour "ihr".',
        hints: ['Vous pluriel', '-t']
      }
    ]
  },
  {
    id: 'de-5eme-002',
    title: 'La famille et la maison',
    subject: 'allemand',
    level: '5ème',
    difficulty: 2,
    description: 'Vocabulaire de la famille et de la maison',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Famille', 'Maison'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "mère" en allemand ?',
        type: 'fill-blank',
        correctAnswer: 'Mutter',
        explanation: '"Die Mutter" = la mère. "Mutti" = maman.',
        hints: ['Comme "mother"', 'Mutter']
      },
      {
        id: 'q2',
        question: 'Que signifie "der Bruder" ?',
        type: 'multiple-choice',
        options: ['Le frère', 'La sœur', 'Le cousin', 'L\'oncle'],
        correctAnswer: 'Le frère',
        explanation: '"Der Bruder" = le frère. Comme "brother".',
        hints: ['Masculin', 'Brother']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "grands-parents" ?',
        type: 'fill-blank',
        correctAnswer: 'Großeltern',
        explanation: '"Die Großeltern" = les grands-parents. Groß = grand.',
        hints: ['Groß + Eltern', 'Großeltern']
      },
      {
        id: 'q4',
        question: '"Die Küche" signifie :',
        type: 'multiple-choice',
        options: ['La cuisine', 'La chambre', 'Le salon', 'La salle de bain'],
        correctAnswer: 'La cuisine',
        explanation: '"Die Küche" = la cuisine.',
        hints: ['Où on cuisine', 'Kitchen']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "chambre" ?',
        type: 'fill-blank',
        correctAnswer: 'Zimmer',
        explanation: '"Das Zimmer" = la chambre/pièce. "Schlafzimmer" = chambre à coucher.',
        hints: ['Neutre', 'Zimmer']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "Der Onkel" signifie "le cousin".',
        type: 'true-false',
        correctAnswer: 'Faux',
        explanation: 'Faux ! "Der Onkel" = l\'oncle. "Der Cousin" = le cousin.',
        hints: ['Onkel = uncle', 'Oncle']
      },
      {
        id: 'q7',
        question: '"Das Badezimmer" est :',
        type: 'multiple-choice',
        options: ['La salle de bain', 'La chambre', 'Le salon', 'La cuisine'],
        correctAnswer: 'La salle de bain',
        explanation: '"Das Badezimmer" = la salle de bain. Bad = bain.',
        hints: ['Bad = bath', 'Salle de bain']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "salon" ?',
        type: 'fill-blank',
        correctAnswer: 'Wohnzimmer',
        explanation: '"Das Wohnzimmer" = le salon. Wohnen = habiter.',
        hints: ['Wohn + Zimmer', 'Wohnzimmer']
      },
      {
        id: 'q9',
        question: '"Die Eltern" signifie :',
        type: 'multiple-choice',
        options: ['Les parents', 'Les pères', 'Les frères', 'Les enfants'],
        correctAnswer: 'Les parents',
        explanation: '"Die Eltern" = les parents.',
        hints: ['Vater + Mutter', 'Parents']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "jardin" ?',
        type: 'fill-blank',
        correctAnswer: 'Garten',
        explanation: '"Der Garten" = le jardin. Comme "garden".',
        hints: ['Comme garden', 'Garten']
      }
    ]
  },
  {
    id: 'de-5eme-003',
    title: 'Les verbes de modalité',
    subject: 'allemand',
    level: '5ème',
    difficulty: 2,
    description: 'Utiliser können, müssen, wollen, dürfen',
    estimatedTime: 18,
    skills: ['Conjugaison', 'Modaux', 'Grammaire'],
    questions: [
      {
        id: 'q1',
        question: '"Können" signifie :',
        type: 'multiple-choice',
        options: ['Pouvoir (capacité)', 'Devoir', 'Vouloir', 'Aimer'],
        correctAnswer: 'Pouvoir (capacité)',
        explanation: '"Können" = pouvoir, être capable de. Ich kann = Je peux.',
        hints: ['Capacité', 'Can']
      },
      {
        id: 'q2',
        question: 'Conjugue "können" : Ich ___',
        type: 'fill-blank',
        correctAnswer: 'kann',
        explanation: 'Ich kann = Je peux. Les modaux changent de voyelle.',
        hints: ['Pas de terminaison -e', 'Kann']
      },
      {
        id: 'q3',
        question: '"Müssen" signifie :',
        type: 'multiple-choice',
        options: ['Devoir (obligation)', 'Pouvoir', 'Vouloir', 'Aimer'],
        correctAnswer: 'Devoir (obligation)',
        explanation: '"Müssen" = devoir (obligation). Ich muss = Je dois.',
        hints: ['Obligation', 'Must']
      },
      {
        id: 'q4',
        question: 'Conjugue "wollen" (vouloir) : Er ___',
        type: 'fill-blank',
        correctAnswer: 'will',
        explanation: 'Er will = Il veut. Pas de -t à la 3ème personne !',
        hints: ['Pas de terminaison', 'Will']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Avec un modal, le verbe principal est à l\'infinitif en fin de phrase.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Ich kann schwimmen = Je sais nager (schwimmen en fin).',
        hints: ['Infinitif à la fin', 'Structure allemande']
      },
      {
        id: 'q6',
        question: '"Dürfen" exprime :',
        type: 'multiple-choice',
        options: ['La permission', 'L\'obligation', 'La capacité', 'Le souhait'],
        correctAnswer: 'La permission',
        explanation: '"Dürfen" = avoir le droit de. Ich darf = J\'ai le droit.',
        hints: ['Permission', 'Autorisé']
      },
      {
        id: 'q7',
        question: 'Conjugue "müssen" : Wir ___',
        type: 'fill-blank',
        correctAnswer: 'müssen',
        explanation: 'Wir müssen = Nous devons. Même forme que l\'infinitif.',
        hints: ['Pluriel = infinitif', 'Müssen']
      },
      {
        id: 'q8',
        question: '"Du kannst gut singen" signifie :',
        type: 'multiple-choice',
        options: ['Tu sais bien chanter', 'Tu dois chanter', 'Tu veux chanter', 'Tu chantes bien'],
        correctAnswer: 'Tu sais bien chanter',
        explanation: 'Können = savoir/pouvoir. Du kannst singen = Tu sais chanter.',
        hints: ['Kannst = tu peux/sais', 'Capacité']
      },
      {
        id: 'q9',
        question: 'Conjugue "dürfen" : Ich ___',
        type: 'fill-blank',
        correctAnswer: 'darf',
        explanation: 'Ich darf = J\'ai le droit. Changement de voyelle.',
        hints: ['ü → a', 'Darf']
      },
      {
        id: 'q10',
        question: 'Traduis "Je veux manger" :',
        type: 'fill-blank',
        correctAnswer: 'Ich will essen',
        explanation: '"Ich will essen" = Je veux manger. Essen en fin de phrase.',
        hints: ['Will + infinitif', 'Ich will essen']
      }
    ]
  },

  // --- ALLEMAND 4ÈME ---
  {
    id: 'de-4eme-001',
    title: 'Le parfait (Perfekt)',
    subject: 'allemand',
    level: '4ème',
    difficulty: 3,
    description: 'Former et utiliser le parfait en allemand',
    estimatedTime: 20,
    skills: ['Conjugaison', 'Passé', 'Participe'],
    questions: [
      {
        id: 'q1',
        question: 'Le Perfekt se forme avec :',
        type: 'multiple-choice',
        options: ['Haben/sein + participe passé', 'Werden + infinitif', 'Sein + infinitif', 'Haben + infinitif'],
        correctAnswer: 'Haben/sein + participe passé',
        explanation: 'Perfekt = haben ou sein + participe passé en fin de phrase.',
        hints: ['Auxiliaire + participe', 'Haben/sein']
      },
      {
        id: 'q2',
        question: 'Comment forme-t-on le participe passé des verbes réguliers ?',
        type: 'multiple-choice',
        options: ['ge- + radical + -t', 'ge- + radical + -en', 'radical + -t', 'ge- + infinitif'],
        correctAnswer: 'ge- + radical + -t',
        explanation: 'Verbes réguliers : ge- + radical + -t. Ex: spielen → gespielt.',
        hints: ['ge...t', 'Réguliers']
      },
      {
        id: 'q3',
        question: 'Conjugue au parfait : "Ich ___ gespielt" (jouer)',
        type: 'fill-blank',
        correctAnswer: 'habe',
        explanation: 'Ich habe gespielt = J\'ai joué. Haben pour la plupart des verbes.',
        hints: ['Auxiliaire haben', 'Habe']
      },
      {
        id: 'q4',
        question: 'Quel auxiliaire utilise-t-on avec "gehen" (aller) ?',
        type: 'multiple-choice',
        options: ['Sein', 'Haben', 'Werden', 'Les deux'],
        correctAnswer: 'Sein',
        explanation: 'Les verbes de mouvement/changement d\'état prennent "sein".',
        hints: ['Mouvement', 'Sein']
      },
      {
        id: 'q5',
        question: 'Conjugue : "Er ___ nach Berlin gefahren" (voyager)',
        type: 'fill-blank',
        correctAnswer: 'ist',
        explanation: 'Er ist gefahren = Il est allé (en voiture). Fahren → sein.',
        hints: ['Mouvement', 'Ist']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : Le participe passé se place à la fin de la phrase.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Ich habe gestern Fußball gespielt (gespielt à la fin).',
        hints: ['Fin de phrase', 'Participe à la fin']
      },
      {
        id: 'q7',
        question: 'Participe passé de "sehen" (voir) :',
        type: 'fill-blank',
        correctAnswer: 'gesehen',
        explanation: 'Sehen → gesehen (verbe fort : ge- + radical modifié + -en).',
        hints: ['Verbe fort', 'ge...en']
      },
      {
        id: 'q8',
        question: '"Wir sind gekommen" signifie :',
        type: 'multiple-choice',
        options: ['Nous sommes venus', 'Nous avons couru', 'Nous sommes partis', 'Nous avons mangé'],
        correctAnswer: 'Nous sommes venus',
        explanation: 'Kommen = venir. Wir sind gekommen = Nous sommes venus.',
        hints: ['Kommen = venir', 'Mouvement → sein']
      },
      {
        id: 'q9',
        question: 'Participe passé de "machen" (faire) :',
        type: 'fill-blank',
        correctAnswer: 'gemacht',
        explanation: 'Machen → gemacht (régulier : ge- + mach + -t).',
        hints: ['Régulier', 'ge...t']
      },
      {
        id: 'q10',
        question: 'Complète : "Ich ___ das Buch gelesen" (lire)',
        type: 'fill-blank',
        correctAnswer: 'habe',
        explanation: 'Ich habe gelesen = J\'ai lu. Lesen prend haben.',
        hints: ['Pas de mouvement', 'Haben']
      }
    ]
  },
  {
    id: 'de-4eme-002',
    title: 'Les prépositions et les cas',
    subject: 'allemand',
    level: '4ème',
    difficulty: 3,
    description: 'Utiliser les prépositions avec l\'accusatif et le datif',
    estimatedTime: 20,
    skills: ['Grammaire', 'Prépositions', 'Déclinaisons'],
    questions: [
      {
        id: 'q1',
        question: 'Quels sont les 4 cas en allemand ?',
        type: 'multiple-choice',
        options: ['Nominatif, accusatif, datif, génitif', 'Nominatif, accusatif, datif', 'Masculin, féminin, neutre', 'Singulier, pluriel, neutre'],
        correctAnswer: 'Nominatif, accusatif, datif, génitif',
        explanation: 'L\'allemand a 4 cas qui modifient les articles et pronoms.',
        hints: ['4 cas', 'NADG']
      },
      {
        id: 'q2',
        question: '"Für" est suivi de quel cas ?',
        type: 'fill-blank',
        correctAnswer: 'accusatif',
        explanation: 'Für + accusatif. Ex: für den Mann = pour l\'homme.',
        hints: ['Für = pour', 'Accusatif']
      },
      {
        id: 'q3',
        question: 'L\'accusatif masculin de "der" devient :',
        type: 'multiple-choice',
        options: ['Den', 'Der', 'Dem', 'Des'],
        correctAnswer: 'Den',
        explanation: 'Der → den à l\'accusatif masculin. Ich sehe den Mann.',
        hints: ['Masculin accusatif', 'Den']
      },
      {
        id: 'q4',
        question: '"Mit" (avec) est suivi de quel cas ?',
        type: 'fill-blank',
        correctAnswer: 'datif',
        explanation: 'Mit + datif. Ex: mit dem Mann = avec l\'homme.',
        hints: ['Mit = avec', 'Datif']
      },
      {
        id: 'q5',
        question: 'Le datif masculin de "der" devient :',
        type: 'multiple-choice',
        options: ['Dem', 'Den', 'Der', 'Des'],
        correctAnswer: 'Dem',
        explanation: 'Der → dem au datif masculin. Mit dem Mann.',
        hints: ['Datif masculin', 'Dem']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : "In" peut être suivi de l\'accusatif OU du datif.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! In + accusatif (mouvement), in + datif (position).',
        hints: ['Préposition mixte', 'Mouvement ou position']
      },
      {
        id: 'q7',
        question: '"Ich gehe in die Schule" - Pourquoi "die" ?',
        type: 'multiple-choice',
        options: ['Accusatif (mouvement vers)', 'Datif (position)', 'Nominatif', 'Génitif'],
        correctAnswer: 'Accusatif (mouvement vers)',
        explanation: 'Mouvement vers un lieu → accusatif. Die reste die (féminin).',
        hints: ['Mouvement', 'Accusatif']
      },
      {
        id: 'q8',
        question: 'Le datif féminin de "die" devient :',
        type: 'fill-blank',
        correctAnswer: 'der',
        explanation: 'Die → der au datif féminin. Mit der Frau = avec la femme.',
        hints: ['Féminin datif', 'Der']
      },
      {
        id: 'q9',
        question: '"Durch" (à travers) est suivi de :',
        type: 'multiple-choice',
        options: ['L\'accusatif', 'Le datif', 'Le nominatif', 'Le génitif'],
        correctAnswer: 'L\'accusatif',
        explanation: 'Durch + accusatif toujours. Durch den Park.',
        hints: ['Toujours accusatif', 'Accusatif']
      },
      {
        id: 'q10',
        question: '"Aus" (de/hors de) est suivi de :',
        type: 'fill-blank',
        correctAnswer: 'datif',
        explanation: 'Aus + datif toujours. Aus dem Haus = de la maison.',
        hints: ['Origine', 'Datif']
      }
    ]
  },
  {
    id: 'de-4eme-003',
    title: 'La phrase subordonnée',
    subject: 'allemand',
    level: '4ème',
    difficulty: 3,
    description: 'Construire des subordonnées avec dass, weil, wenn',
    estimatedTime: 18,
    skills: ['Grammaire', 'Syntaxe', 'Subordonnées'],
    questions: [
      {
        id: 'q1',
        question: 'Dans une subordonnée allemande, le verbe conjugué se place :',
        type: 'multiple-choice',
        options: ['À la fin', 'Au début', 'En deuxième position', 'Avant le sujet'],
        correctAnswer: 'À la fin',
        explanation: 'Subordonnée : le verbe conjugué va à la FIN !',
        hints: ['Fin de phrase', 'Règle importante']
      },
      {
        id: 'q2',
        question: '"Dass" signifie :',
        type: 'multiple-choice',
        options: ['Que', 'Parce que', 'Quand', 'Si'],
        correctAnswer: 'Que',
        explanation: '"Dass" = que (conjonction). Ich weiß, dass er kommt.',
        hints: ['That en anglais', 'Que']
      },
      {
        id: 'q3',
        question: 'Complète : "Ich weiß, dass er nach Hause ___" (gehen)',
        type: 'fill-blank',
        correctAnswer: 'geht',
        explanation: '"...dass er nach Hause geht" - verbe à la fin !',
        hints: ['Verbe à la fin', 'Geht']
      },
      {
        id: 'q4',
        question: '"Weil" signifie :',
        type: 'fill-blank',
        correctAnswer: 'parce que',
        explanation: '"Weil" = parce que. Ich bleibe, weil es regnet.',
        hints: ['Cause', 'Because']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Après "weil", le verbe va aussi à la fin.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Toutes les conjonctions de subordination → verbe à la fin.',
        hints: ['Subordonnée', 'Verbe à la fin']
      },
      {
        id: 'q6',
        question: '"Wenn" peut signifier :',
        type: 'multiple-choice',
        options: ['Quand / Si', 'Parce que', 'Que', 'Mais'],
        correctAnswer: 'Quand / Si',
        explanation: '"Wenn" = quand (répétition) ou si (condition).',
        hints: ['When / If', 'Quand ou si']
      },
      {
        id: 'q7',
        question: 'Complète : "Ich esse, weil ich Hunger ___" (haben)',
        type: 'fill-blank',
        correctAnswer: 'habe',
        explanation: '"...weil ich Hunger habe" = parce que j\'ai faim.',
        hints: ['Verbe à la fin', 'Habe']
      },
      {
        id: 'q8',
        question: '"Obwohl" signifie :',
        type: 'multiple-choice',
        options: ['Bien que', 'Parce que', 'Quand', 'Si'],
        correctAnswer: 'Bien que',
        explanation: '"Obwohl" = bien que (concession). Verbe à la fin.',
        hints: ['Concession', 'Although']
      },
      {
        id: 'q9',
        question: 'Traduis "Je pense qu\'il vient" :',
        type: 'fill-blank',
        correctAnswer: 'Ich denke, dass er kommt',
        explanation: '"Dass er kommt" = qu\'il vient. Kommt à la fin.',
        hints: ['Dass + verbe à la fin', 'Kommt à la fin']
      },
      {
        id: 'q10',
        question: 'Dans une subordonnée avec Perfekt, quel élément va à la fin ?',
        type: 'multiple-choice',
        options: ['L\'auxiliaire conjugué', 'Le participe passé', 'Les deux à la fin', 'L\'infinitif'],
        correctAnswer: 'L\'auxiliaire conjugué',
        explanation: '...dass er nach Hause gegangen IST. Auxiliaire en dernier.',
        hints: ['Auxiliaire à la fin', 'Conjugué = fin']
      }
    ]
  },

  // --- ALLEMAND 3ÈME ---
  {
    id: 'de-3eme-001',
    title: 'Le prétérit (Präteritum)',
    subject: 'allemand',
    level: '3ème',
    difficulty: 3,
    description: 'Former et utiliser le prétérit en allemand',
    estimatedTime: 20,
    skills: ['Conjugaison', 'Passé', 'Récit'],
    questions: [
      {
        id: 'q1',
        question: 'Le prétérit s\'utilise principalement :',
        type: 'multiple-choice',
        options: ['À l\'écrit et dans les récits', 'À l\'oral uniquement', 'Pour le futur', 'Jamais'],
        correctAnswer: 'À l\'écrit et dans les récits',
        explanation: 'Le prétérit est le temps du récit écrit (contes, romans...).',
        hints: ['Écrit', 'Récit']
      },
      {
        id: 'q2',
        question: 'Prétérit de "sein" : Ich ___',
        type: 'fill-blank',
        correctAnswer: 'war',
        explanation: 'Ich war = J\'étais. Sein est irrégulier.',
        hints: ['Irrégulier', 'War']
      },
      {
        id: 'q3',
        question: 'Prétérit de "haben" : Er ___',
        type: 'fill-blank',
        correctAnswer: 'hatte',
        explanation: 'Er hatte = Il avait. Haben → hatte.',
        hints: ['Avait', 'Hatte']
      },
      {
        id: 'q4',
        question: 'Comment forme-t-on le prétérit des verbes réguliers ?',
        type: 'multiple-choice',
        options: ['Radical + -te + terminaisons', 'ge- + radical + -t', 'Radical + -en', 'Werden + infinitif'],
        correctAnswer: 'Radical + -te + terminaisons',
        explanation: 'Réguliers : spielen → ich spielte, du spieltest...',
        hints: ['-te-', 'Réguliers']
      },
      {
        id: 'q5',
        question: 'Prétérit de "gehen" : Er ___',
        type: 'fill-blank',
        correctAnswer: 'ging',
        explanation: 'Gehen → ging (verbe fort, changement de voyelle).',
        hints: ['Verbe fort', 'Ging']
      },
      {
        id: 'q6',
        question: 'Vrai ou Faux : Au prétérit, "ich" et "er/sie/es" ont la même forme.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Ich war, er war / ich spielte, er spielte.',
        hints: ['Pas de terminaison', 'Identiques']
      },
      {
        id: 'q7',
        question: 'Prétérit de "kommen" : Sie (elle) ___',
        type: 'fill-blank',
        correctAnswer: 'kam',
        explanation: 'Kommen → kam. Verbe fort.',
        hints: ['Verbe fort', 'Kam']
      },
      {
        id: 'q8',
        question: '"Es war einmal..." signifie :',
        type: 'multiple-choice',
        options: ['Il était une fois...', 'Il sera une fois...', 'C\'est une fois...', 'Il y a une fois...'],
        correctAnswer: 'Il était une fois...',
        explanation: 'Formule typique des contes. War = était (prétérit).',
        hints: ['Contes', 'Il était une fois']
      },
      {
        id: 'q9',
        question: 'Prétérit de "sehen" : Wir ___',
        type: 'fill-blank',
        correctAnswer: 'sahen',
        explanation: 'Sehen → sahen (nous vîmes/voyions).',
        hints: ['Verbe fort', 'Sahen']
      },
      {
        id: 'q10',
        question: 'Prétérit de "können" : Ich ___',
        type: 'fill-blank',
        correctAnswer: 'konnte',
        explanation: 'Können → konnte (je pouvais). Modaux au prétérit.',
        hints: ['Modal', 'Konnte']
      }
    ]
  },
  {
    id: 'de-3eme-002',
    title: 'Le futur et le conditionnel',
    subject: 'allemand',
    level: '3ème',
    difficulty: 3,
    description: 'Exprimer le futur et les hypothèses',
    estimatedTime: 18,
    skills: ['Conjugaison', 'Futur', 'Conditionnel'],
    questions: [
      {
        id: 'q1',
        question: 'Le futur allemand se forme avec :',
        type: 'multiple-choice',
        options: ['Werden + infinitif', 'Haben + infinitif', 'Sein + participe', 'Werden + participe'],
        correctAnswer: 'Werden + infinitif',
        explanation: 'Futur = werden (conjugué) + infinitif en fin de phrase.',
        hints: ['Werden', 'Infinitif à la fin']
      },
      {
        id: 'q2',
        question: 'Conjugue "werden" au présent : Ich ___',
        type: 'fill-blank',
        correctAnswer: 'werde',
        explanation: 'Ich werde = Je vais (futur). Ich werde spielen = Je jouerai.',
        hints: ['Werde', '1ère personne']
      },
      {
        id: 'q3',
        question: '"Er wird kommen" signifie :',
        type: 'multiple-choice',
        options: ['Il viendra', 'Il est venu', 'Il vient', 'Il venait'],
        correctAnswer: 'Il viendra',
        explanation: 'Wird + infinitif = futur. Er wird kommen = Il viendra.',
        hints: ['Futur', 'Viendra']
      },
      {
        id: 'q4',
        question: 'Conjugue "werden" : Du ___',
        type: 'fill-blank',
        correctAnswer: 'wirst',
        explanation: 'Du wirst = Tu vas (futur). Du wirst sehen = Tu verras.',
        hints: ['2ème personne', 'Wirst']
      },
      {
        id: 'q5',
        question: 'Le conditionnel (Konjunktiv II) de "sein" : Ich ___',
        type: 'fill-blank',
        correctAnswer: 'wäre',
        explanation: 'Ich wäre = Je serais. Konjunktiv II de sein.',
        hints: ['Conditionnel', 'Wäre']
      },
      {
        id: 'q6',
        question: 'Le conditionnel de "haben" : Ich ___',
        type: 'fill-blank',
        correctAnswer: 'hätte',
        explanation: 'Ich hätte = J\'aurais. Konjunktiv II de haben.',
        hints: ['Conditionnel', 'Hätte']
      },
      {
        id: 'q7',
        question: '"Würde" + infinitif exprime :',
        type: 'multiple-choice',
        options: ['Le conditionnel (forme périphrastique)', 'Le futur', 'Le passé', 'L\'impératif'],
        correctAnswer: 'Le conditionnel (forme périphrastique)',
        explanation: 'Ich würde spielen = Je jouerais. Forme courante du conditionnel.',
        hints: ['Conditionnel', 'Je ferais']
      },
      {
        id: 'q8',
        question: 'Vrai ou Faux : "Wenn ich reich wäre" = Si j\'étais riche.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Wenn + Konjunktiv II = condition irréelle.',
        hints: ['Wenn = si', 'Hypothèse']
      },
      {
        id: 'q9',
        question: '"Ich würde gern nach Deutschland fahren" signifie :',
        type: 'multiple-choice',
        options: ['J\'aimerais aller en Allemagne', 'Je vais en Allemagne', 'J\'allais en Allemagne', 'Je suis allé en Allemagne'],
        correctAnswer: 'J\'aimerais aller en Allemagne',
        explanation: 'Würde + infinitif = conditionnel. Gern = volontiers.',
        hints: ['Würde = conditionnel', 'J\'aimerais']
      },
      {
        id: 'q10',
        question: 'Conjugue "werden" au futur : Wir ___ morgen kommen',
        type: 'fill-blank',
        correctAnswer: 'werden',
        explanation: 'Wir werden kommen = Nous viendrons. Werden pour wir.',
        hints: ['Nous', 'Werden']
      }
    ]
  },
  {
    id: 'de-3eme-003',
    title: 'Les pronoms relatifs',
    subject: 'allemand',
    level: '3ème',
    difficulty: 3,
    description: 'Utiliser les pronoms relatifs der, die, das',
    estimatedTime: 18,
    skills: ['Grammaire', 'Pronoms', 'Subordonnées'],
    questions: [
      {
        id: 'q1',
        question: 'Le pronom relatif s\'accorde avec :',
        type: 'multiple-choice',
        options: ['L\'antécédent en genre et nombre', 'Le verbe', 'Le sujet de la principale', 'Rien'],
        correctAnswer: 'L\'antécédent en genre et nombre',
        explanation: 'Der Mann, DER kommt = l\'homme QUI vient (masculin).',
        hints: ['Genre et nombre', 'Antécédent']
      },
      {
        id: 'q2',
        question: 'Pronom relatif nominatif masculin :',
        type: 'fill-blank',
        correctAnswer: 'der',
        explanation: 'Der Mann, der kommt... (qui = sujet → nominatif).',
        hints: ['Nominatif', 'Der']
      },
      {
        id: 'q3',
        question: '"Die Frau, die ich sehe" - "die" est à quel cas ?',
        type: 'multiple-choice',
        options: ['Accusatif', 'Nominatif', 'Datif', 'Génitif'],
        correctAnswer: 'Accusatif',
        explanation: 'Die ich sehe = que je vois. "Die" est COD → accusatif.',
        hints: ['Que = COD', 'Accusatif']
      },
      {
        id: 'q4',
        question: 'Pronom relatif datif masculin :',
        type: 'fill-blank',
        correctAnswer: 'dem',
        explanation: 'Der Mann, dem ich helfe = l\'homme à qui j\'aide.',
        hints: ['Datif', 'Dem']
      },
      {
        id: 'q5',
        question: 'Vrai ou Faux : Dans une relative, le verbe va à la fin.',
        type: 'true-false',
        correctAnswer: 'Vrai',
        explanation: 'Vrai ! Comme toutes les subordonnées. Der Mann, der hier wohnt.',
        hints: ['Subordonnée', 'Verbe à la fin']
      },
      {
        id: 'q6',
        question: '"Das Buch, das ich lese" - Traduis :',
        type: 'multiple-choice',
        options: ['Le livre que je lis', 'Le livre qui lit', 'Le livre dont je parle', 'Le livre où je lis'],
        correctAnswer: 'Le livre que je lis',
        explanation: 'Das ich lese = que je lis. Das = COD (accusatif neutre).',
        hints: ['Que = COD', 'Le livre que je lis']
      },
      {
        id: 'q7',
        question: 'Pronom relatif accusatif masculin :',
        type: 'fill-blank',
        correctAnswer: 'den',
        explanation: 'Der Mann, den ich sehe = l\'homme que je vois.',
        hints: ['Accusatif masculin', 'Den']
      },
      {
        id: 'q8',
        question: '"Die Kinder, die spielen" - "die" est :',
        type: 'multiple-choice',
        options: ['Nominatif pluriel', 'Accusatif pluriel', 'Datif pluriel', 'Génitif pluriel'],
        correctAnswer: 'Nominatif pluriel',
        explanation: 'Die spielen = qui jouent. Sujet → nominatif. Pluriel → die.',
        hints: ['Sujet', 'Nominatif pluriel']
      },
      {
        id: 'q9',
        question: 'Pronom relatif datif féminin :',
        type: 'fill-blank',
        correctAnswer: 'der',
        explanation: 'Die Frau, der ich helfe = la femme à qui j\'aide.',
        hints: ['Datif féminin', 'Der']
      },
      {
        id: 'q10',
        question: 'Complète : "Das ist der Film, ___ ich gesehen habe"',
        type: 'fill-blank',
        correctAnswer: 'den',
        explanation: 'Den ich gesehen habe = que j\'ai vu. Film = masculin, COD = accusatif.',
        hints: ['Masculin accusatif', 'Den']
      }
    ]
  },

  // ========================================
  // ITALIEN - 6ème à 3ème (12 exercices)
  // ========================================

  // Italien 6ème - Exercice 1: Se présenter
  {
    id: 'it-6eme-001',
    title: 'Se présenter en italien',
    subject: 'italien',
    level: '6ème',
    difficulty: 1,
    description: 'Apprendre à se présenter et saluer en italien',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Présentation', 'Salutations'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "Bonjour" en italien (formel) ?',
        type: 'multiple-choice',
        options: ['Buongiorno', 'Arrivederci', 'Grazie', 'Prego'],
        correctAnswer: 'Buongiorno',
        explanation: '"Buongiorno" = Bonjour. "Ciao" est informel.',
        hints: ['Formel', 'Bon + jour']
      },
      {
        id: 'q2',
        question: 'Traduis : "Je m\'appelle Marco"',
        type: 'multiple-choice',
        options: ['Mi chiamo Marco', 'Io sono Marco', 'Mi piace Marco', 'Io ho Marco'],
        correctAnswer: 'Mi chiamo Marco',
        explanation: '"Mi chiamo" = Je m\'appelle (littéralement : je me nomme).',
        hints: ['Chiamare = appeler', 'Mi chiamo']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "Au revoir" en italien (formel) ?',
        type: 'multiple-choice',
        options: ['Arrivederci', 'Ciao', 'Buonanotte', 'Salve'],
        correctAnswer: 'Arrivederci',
        explanation: '"Arrivederci" = Au revoir (formel). "Ciao" peut être informel.',
        hints: ['Formel', 'Arrivederci']
      },
      {
        id: 'q4',
        question: 'Que signifie "Piacere" ?',
        type: 'multiple-choice',
        options: ['Enchanté', 'Merci', 'S\'il vous plaît', 'De rien'],
        correctAnswer: 'Enchanté',
        explanation: '"Piacere" = Enchanté (plaisir de vous rencontrer).',
        hints: ['Rencontre', 'Plaisir']
      },
      {
        id: 'q5',
        question: 'Comment demande-t-on "Comment t\'appelles-tu ?" en italien ?',
        type: 'multiple-choice',
        options: ['Come ti chiami?', 'Dove abiti?', 'Quanti anni hai?', 'Come stai?'],
        correctAnswer: 'Come ti chiami?',
        explanation: '"Come ti chiami?" = Comment t\'appelles-tu ?',
        hints: ['Come = comment', 'Ti chiami']
      },
      {
        id: 'q6',
        question: 'Traduis : "J\'ai 12 ans"',
        type: 'multiple-choice',
        options: ['Ho dodici anni', 'Sono dodici anni', 'Hai dodici anni', 'Ha dodici anni'],
        correctAnswer: 'Ho dodici anni',
        explanation: 'En italien on dit "j\'ai X ans" avec le verbe avere (avoir).',
        hints: ['Ho = j\'ai', 'Anni = ans']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "Bonsoir" en italien ?',
        type: 'fill-blank',
        correctAnswer: 'Buonasera',
        explanation: '"Buonasera" = Bonsoir (Buona + sera = bonne soirée).',
        hints: ['Buona + sera', 'Buonasera']
      },
      {
        id: 'q8',
        question: 'Que signifie "Come stai?" ?',
        type: 'multiple-choice',
        options: ['Comment vas-tu ?', 'Où habites-tu ?', 'Quel âge as-tu ?', 'Comment t\'appelles-tu ?'],
        correctAnswer: 'Comment vas-tu ?',
        explanation: '"Come stai?" = Comment vas-tu ? (informel). "Come sta?" = formel.',
        hints: ['Stai = tu vas', 'Santé']
      },
      {
        id: 'q9',
        question: '"Sto bene" signifie :',
        type: 'multiple-choice',
        options: ['Je vais bien', 'Je suis fatigué', 'J\'ai faim', 'Je suis content'],
        correctAnswer: 'Je vais bien',
        explanation: '"Sto bene" = Je vais bien. "Sto male" = Je vais mal.',
        hints: ['Bene = bien', 'Réponse à "Come stai?"']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "Bonne nuit" en italien ?',
        type: 'fill-blank',
        correctAnswer: 'Buonanotte',
        explanation: '"Buonanotte" = Bonne nuit (Buona + notte).',
        hints: ['Buona + notte', 'Avant de dormir']
      }
    ]
  },

  // Italien 6ème - Exercice 2: Les nombres
  {
    id: 'it-6eme-002',
    title: 'Les nombres de 1 à 20 en italien',
    subject: 'italien',
    level: '6ème',
    difficulty: 1,
    description: 'Apprendre les nombres de 1 à 20 en italien',
    estimatedTime: 15,
    skills: ['Nombres', 'Vocabulaire', 'Compter'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "un" en italien ?',
        type: 'multiple-choice',
        options: ['Uno', 'Due', 'Tre', 'Zero'],
        correctAnswer: 'Uno',
        explanation: '"Uno" = 1 en italien.',
        hints: ['Premier nombre', 'Uno']
      },
      {
        id: 'q2',
        question: 'Comment dit-on "cinq" en italien ?',
        type: 'fill-blank',
        correctAnswer: 'Cinque',
        explanation: '"Cinque" = 5 en italien.',
        hints: ['Comme "cinq" en français', 'Cinque']
      },
      {
        id: 'q3',
        question: 'Quel nombre est "dieci" ?',
        type: 'multiple-choice',
        options: ['10', '12', '15', '20'],
        correctAnswer: '10',
        explanation: '"Dieci" = 10 en italien.',
        hints: ['Décimal', 'Dix']
      },
      {
        id: 'q4',
        question: 'Comment dit-on "sept" en italien ?',
        type: 'multiple-choice',
        options: ['Sette', 'Sei', 'Otto', 'Nove'],
        correctAnswer: 'Sette',
        explanation: '"Sette" = 7. "Sei" = 6, "Otto" = 8, "Nove" = 9.',
        hints: ['Sept', 'Sette']
      },
      {
        id: 'q5',
        question: 'Que signifie "quindici" ?',
        type: 'multiple-choice',
        options: ['15', '14', '16', '13'],
        correctAnswer: '15',
        explanation: '"Quindici" = 15 (cinque + dieci modifié).',
        hints: ['10 + 5', 'Quinze']
      },
      {
        id: 'q6',
        question: 'Comment dit-on "trois" en italien ?',
        type: 'fill-blank',
        correctAnswer: 'Tre',
        explanation: '"Tre" = 3 en italien.',
        hints: ['Trois', 'Tre']
      },
      {
        id: 'q7',
        question: 'Quel nombre est "venti" ?',
        type: 'multiple-choice',
        options: ['20', '21', '12', '2'],
        correctAnswer: '20',
        explanation: '"Venti" = 20 en italien.',
        hints: ['Vingt', 'Venti']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "huit" en italien ?',
        type: 'multiple-choice',
        options: ['Otto', 'Nove', 'Sette', 'Sei'],
        correctAnswer: 'Otto',
        explanation: '"Otto" = 8 en italien.',
        hints: ['Huit', 'Octogone']
      },
      {
        id: 'q9',
        question: 'Que signifie "dodici" ?',
        type: 'multiple-choice',
        options: ['12', '10', '11', '2'],
        correctAnswer: '12',
        explanation: '"Dodici" = 12 (due + dieci modifié = douze).',
        hints: ['10 + 2', 'Douze']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "quatre" en italien ?',
        type: 'fill-blank',
        correctAnswer: 'Quattro',
        explanation: '"Quattro" = 4 en italien.',
        hints: ['Quatre', 'Quattro']
      }
    ]
  },

  // Italien 6ème - Exercice 3: Articles et genre
  {
    id: 'it-6eme-003',
    title: 'Les articles en italien',
    subject: 'italien',
    level: '6ème',
    difficulty: 1,
    description: 'Découvrir les articles définis et indéfinis en italien',
    estimatedTime: 15,
    skills: ['Grammaire', 'Articles', 'Genre'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est l\'article défini masculin singulier devant consonne en italien ?',
        type: 'multiple-choice',
        options: ['Il', 'Lo', 'La', 'I'],
        correctAnswer: 'Il',
        explanation: '"Il" = le (devant consonne). "Lo" devant s+consonne, z, gn, ps.',
        hints: ['Masculin', 'Consonne simple']
      },
      {
        id: 'q2',
        question: 'Quel article utilise-t-on devant "ragazza" (fille) ?',
        type: 'multiple-choice',
        options: ['La', 'Il', 'Lo', 'L\''],
        correctAnswer: 'La',
        explanation: '"La ragazza" = la fille. "Ragazza" est féminin.',
        hints: ['Féminin', 'La']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "les garçons" en italien ?',
        type: 'multiple-choice',
        options: ['I ragazzi', 'Il ragazzi', 'Gli ragazzi', 'Lo ragazzi'],
        correctAnswer: 'I ragazzi',
        explanation: '"I" est l\'article défini masculin pluriel devant consonne.',
        hints: ['Masculin pluriel', 'I']
      },
      {
        id: 'q4',
        question: 'Quel article défini utilise-t-on devant "studente" ?',
        type: 'multiple-choice',
        options: ['Lo', 'Il', 'La', 'L\''],
        correctAnswer: 'Lo',
        explanation: '"Lo studente" - on utilise "lo" devant s + consonne.',
        hints: ['S + consonne', 'Lo']
      },
      {
        id: 'q5',
        question: '"Un libro" signifie :',
        type: 'multiple-choice',
        options: ['Un livre', 'Le livre', 'Les livres', 'Des livres'],
        correctAnswer: 'Un livre',
        explanation: '"Un" est l\'article indéfini masculin singulier.',
        hints: ['Indéfini', 'Un seul']
      },
      {
        id: 'q6',
        question: 'Quel article utilise-t-on devant "amica" (amie) ?',
        type: 'multiple-choice',
        options: ['Un\'', 'Una', 'Un', 'La'],
        correctAnswer: 'Un\'',
        explanation: '"Un\'amica" - apostrophe devant voyelle au féminin indéfini.',
        hints: ['Féminin', 'Voyelle']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "les filles" en italien ?',
        type: 'fill-blank',
        correctAnswer: 'Le ragazze',
        explanation: '"Le" est l\'article défini féminin pluriel.',
        hints: ['Féminin pluriel', 'Le ragazze']
      },
      {
        id: 'q8',
        question: 'Quel article utilise-t-on devant "amico" (ami, masc.) commençant par voyelle ?',
        type: 'multiple-choice',
        options: ['L\'', 'Il', 'Lo', 'Un'],
        correctAnswer: 'L\'',
        explanation: '"L\'amico" - élision devant voyelle pour le défini.',
        hints: ['Voyelle', 'Élision']
      },
      {
        id: 'q9',
        question: '"Gli studenti" signifie :',
        type: 'multiple-choice',
        options: ['Les étudiants', 'L\'étudiant', 'Un étudiant', 'Des étudiants'],
        correctAnswer: 'Les étudiants',
        explanation: '"Gli" = article défini masculin pluriel devant voyelle ou s+cons.',
        hints: ['Pluriel', 'Défini']
      },
      {
        id: 'q10',
        question: 'Complète : "___ casa" (la maison)',
        type: 'fill-blank',
        correctAnswer: 'La',
        explanation: '"La casa" = la maison. Casa est féminin.',
        hints: ['Féminin singulier', 'La']
      }
    ]
  },

  // Italien 5ème - Exercice 1: Présent de l'indicatif
  {
    id: 'it-5eme-001',
    title: 'Le présent de l\'indicatif en italien',
    subject: 'italien',
    level: '5ème',
    difficulty: 2,
    description: 'Conjuguer les verbes réguliers au présent de l\'indicatif',
    estimatedTime: 20,
    skills: ['Conjugaison', 'Présent', 'Verbes réguliers'],
    questions: [
      {
        id: 'q1',
        question: 'Conjugue "parlare" (parler) à la 1ère personne du singulier :',
        type: 'fill-blank',
        correctAnswer: 'parlo',
        explanation: 'Verbes en -are : io parlo, tu parli, lui/lei parla...',
        hints: ['Io', '-o pour je']
      },
      {
        id: 'q2',
        question: 'Comment dit-on "tu manges" avec "mangiare" ?',
        type: 'multiple-choice',
        options: ['Tu mangi', 'Tu mangia', 'Tu mangio', 'Tu mangiamo'],
        correctAnswer: 'Tu mangi',
        explanation: 'Verbes en -are : tu = -i. "Tu mangi" = tu manges.',
        hints: ['Tu = -i', 'Mangi']
      },
      {
        id: 'q3',
        question: 'Conjugue "leggere" (lire) à la 3ème personne du singulier :',
        type: 'fill-blank',
        correctAnswer: 'legge',
        explanation: 'Verbes en -ere : lui/lei legge.',
        hints: ['Lui/lei', '-e']
      },
      {
        id: 'q4',
        question: '"Noi parliamo" signifie :',
        type: 'multiple-choice',
        options: ['Nous parlons', 'Ils parlent', 'Vous parlez', 'Je parle'],
        correctAnswer: 'Nous parlons',
        explanation: '"Noi" = nous, "-iamo" = terminaison de la 1ère personne du pluriel.',
        hints: ['Noi = nous', '-iamo']
      },
      {
        id: 'q5',
        question: 'Conjugue "dormire" (dormir) à la 2ème personne du pluriel :',
        type: 'multiple-choice',
        options: ['Voi dormite', 'Voi dormono', 'Voi dormiamo', 'Voi dormi'],
        correctAnswer: 'Voi dormite',
        explanation: 'Verbes en -ire : voi = -ite. "Voi dormite" = vous dormez.',
        hints: ['Voi = vous', '-ite']
      },
      {
        id: 'q6',
        question: 'Comment dit-on "ils parlent" ?',
        type: 'fill-blank',
        correctAnswer: 'parlano',
        explanation: '"Loro parlano" = ils/elles parlent. -ano pour verbes en -are.',
        hints: ['Loro', '-ano']
      },
      {
        id: 'q7',
        question: 'Conjugue "scrivere" (écrire) à la 1ère personne du singulier :',
        type: 'multiple-choice',
        options: ['Scrivo', 'Scrive', 'Scrivi', 'Scrivono'],
        correctAnswer: 'Scrivo',
        explanation: 'Verbes en -ere : io = -o. "Io scrivo" = j\'écris.',
        hints: ['Io = je', '-o']
      },
      {
        id: 'q8',
        question: '"Capisco" vient du verbe "capire". Quelle particularité a-t-il ?',
        type: 'multiple-choice',
        options: ['Ajout de -isc-', 'Irrégulier total', 'Double consonne', 'Accent tonique'],
        correctAnswer: 'Ajout de -isc-',
        explanation: 'Certains verbes en -ire ajoutent -isc- : capisco, capisci, capisce, capiamo, capite, capiscono.',
        hints: ['Verbes en -ire', '-isc-']
      },
      {
        id: 'q9',
        question: 'Conjugue "abitare" (habiter) à "lui/lei" :',
        type: 'fill-blank',
        correctAnswer: 'abita',
        explanation: 'Verbes en -are : lui/lei = -a. "Lui abita" = il habite.',
        hints: ['3ème personne', '-a']
      },
      {
        id: 'q10',
        question: '"Leggono" signifie :',
        type: 'multiple-choice',
        options: ['Ils lisent', 'Il lit', 'Nous lisons', 'Vous lisez'],
        correctAnswer: 'Ils lisent',
        explanation: '"Loro leggono" = ils/elles lisent. -ono pour verbes en -ere.',
        hints: ['Loro', '-ono']
      }
    ]
  },

  // Italien 5ème - Exercice 2: La famille et la maison
  {
    id: 'it-5eme-002',
    title: 'La famille et la maison en italien',
    subject: 'italien',
    level: '5ème',
    difficulty: 2,
    description: 'Vocabulaire de la famille et de la maison',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Famille', 'Maison'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "mère" en italien ?',
        type: 'multiple-choice',
        options: ['Madre', 'Padre', 'Fratello', 'Sorella'],
        correctAnswer: 'Madre',
        explanation: '"Madre" = mère. "Mamma" est plus affectueux.',
        hints: ['Maternel', 'Madre']
      },
      {
        id: 'q2',
        question: 'Comment dit-on "frère" en italien ?',
        type: 'fill-blank',
        correctAnswer: 'Fratello',
        explanation: '"Fratello" = frère. "Fratelli" = frères.',
        hints: ['Fraternel', 'Fratello']
      },
      {
        id: 'q3',
        question: '"La sorella" signifie :',
        type: 'multiple-choice',
        options: ['La sœur', 'La mère', 'La grand-mère', 'La tante'],
        correctAnswer: 'La sœur',
        explanation: '"Sorella" = sœur. "Sorelle" = sœurs.',
        hints: ['Féminin de fratello', 'Sœur']
      },
      {
        id: 'q4',
        question: 'Comment dit-on "grands-parents" en italien ?',
        type: 'multiple-choice',
        options: ['I nonni', 'I genitori', 'I zii', 'I cugini'],
        correctAnswer: 'I nonni',
        explanation: '"I nonni" = les grands-parents. Nonno = grand-père, Nonna = grand-mère.',
        hints: ['Non-', 'Nonni']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "cuisine" en italien ?',
        type: 'fill-blank',
        correctAnswer: 'Cucina',
        explanation: '"La cucina" = la cuisine.',
        hints: ['Cuisine', 'Cucina']
      },
      {
        id: 'q6',
        question: '"Il bagno" signifie :',
        type: 'multiple-choice',
        options: ['La salle de bain', 'La chambre', 'Le salon', 'Le jardin'],
        correctAnswer: 'La salle de bain',
        explanation: '"Il bagno" = la salle de bain (le bain).',
        hints: ['Bain', 'Bagno']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "chambre" en italien ?',
        type: 'multiple-choice',
        options: ['Camera', 'Cucina', 'Sala', 'Bagno'],
        correctAnswer: 'Camera',
        explanation: '"La camera" = la chambre. "Camera da letto" = chambre à coucher.',
        hints: ['Chambre', 'Camera']
      },
      {
        id: 'q8',
        question: '"I genitori" signifie :',
        type: 'multiple-choice',
        options: ['Les parents', 'Les grands-parents', 'Les enfants', 'Les oncles'],
        correctAnswer: 'Les parents',
        explanation: '"I genitori" = les parents (père et mère).',
        hints: ['Géniteurs', 'Parents']
      },
      {
        id: 'q9',
        question: 'Comment dit-on "jardin" en italien ?',
        type: 'fill-blank',
        correctAnswer: 'Giardino',
        explanation: '"Il giardino" = le jardin.',
        hints: ['Jardin', 'Giardino']
      },
      {
        id: 'q10',
        question: '"Lo zio" signifie :',
        type: 'multiple-choice',
        options: ['L\'oncle', 'Le cousin', 'Le neveu', 'Le beau-père'],
        correctAnswer: 'L\'oncle',
        explanation: '"Lo zio" = l\'oncle. "La zia" = la tante.',
        hints: ['Oncle', 'Zio']
      }
    ]
  },

  // Italien 5ème - Exercice 3: Verbes essere et avere
  {
    id: 'it-5eme-003',
    title: 'Les verbes essere et avere',
    subject: 'italien',
    level: '5ème',
    difficulty: 2,
    description: 'Maîtriser les deux verbes auxiliaires fondamentaux',
    estimatedTime: 20,
    skills: ['Conjugaison', 'Auxiliaires', 'Essere', 'Avere'],
    questions: [
      {
        id: 'q1',
        question: 'Conjugue "essere" (être) à la 1ère personne du singulier :',
        type: 'fill-blank',
        correctAnswer: 'sono',
        explanation: '"Io sono" = je suis. Essere est irrégulier.',
        hints: ['Je suis', 'Sono']
      },
      {
        id: 'q2',
        question: 'Comment dit-on "tu as" avec "avere" ?',
        type: 'multiple-choice',
        options: ['Tu hai', 'Tu ho', 'Tu ha', 'Tu hanno'],
        correctAnswer: 'Tu hai',
        explanation: '"Tu hai" = tu as. Avere : ho, hai, ha, abbiamo, avete, hanno.',
        hints: ['Tu', 'Hai']
      },
      {
        id: 'q3',
        question: '"Lei è italiana" signifie :',
        type: 'multiple-choice',
        options: ['Elle est italienne', 'Elle a Italien', 'Ils sont italiens', 'Tu es italien'],
        correctAnswer: 'Elle est italienne',
        explanation: '"Lei è" = elle est. "È" = 3ème personne de essere.',
        hints: ['Lei = elle', 'È = est']
      },
      {
        id: 'q4',
        question: 'Conjugue "avere" à "noi" :',
        type: 'fill-blank',
        correctAnswer: 'abbiamo',
        explanation: '"Noi abbiamo" = nous avons.',
        hints: ['Nous avons', 'Abbiamo']
      },
      {
        id: 'q5',
        question: '"Siete stanchi" signifie :',
        type: 'multiple-choice',
        options: ['Vous êtes fatigués', 'Ils sont fatigués', 'Nous sommes fatigués', 'Tu es fatigué'],
        correctAnswer: 'Vous êtes fatigués',
        explanation: '"Siete" = vous êtes (2ème personne pluriel de essere).',
        hints: ['Voi siete', 'Vous êtes']
      },
      {
        id: 'q6',
        question: 'Conjugue "essere" à "loro" :',
        type: 'multiple-choice',
        options: ['Sono', 'Siamo', 'Siete', 'È'],
        correctAnswer: 'Sono',
        explanation: '"Loro sono" = ils/elles sont. Même forme que "io sono".',
        hints: ['Ils sont', 'Sono']
      },
      {
        id: 'q7',
        question: '"Ho fame" signifie :',
        type: 'multiple-choice',
        options: ['J\'ai faim', 'Je suis affamé', 'Il a faim', 'J\'ai soif'],
        correctAnswer: 'J\'ai faim',
        explanation: 'En italien on dit "avoir faim" comme en français. "Ho" = j\'ai.',
        hints: ['Ho = j\'ai', 'Fame = faim']
      },
      {
        id: 'q8',
        question: 'Conjugue "essere" à "tu" :',
        type: 'fill-blank',
        correctAnswer: 'sei',
        explanation: '"Tu sei" = tu es.',
        hints: ['Tu es', 'Sei']
      },
      {
        id: 'q9',
        question: '"Hanno una macchina" signifie :',
        type: 'multiple-choice',
        options: ['Ils ont une voiture', 'Il a une voiture', 'Nous avons une voiture', 'Vous avez une voiture'],
        correctAnswer: 'Ils ont une voiture',
        explanation: '"Hanno" = ils/elles ont. "Macchina" = voiture.',
        hints: ['Hanno = ils ont', 'Pluriel']
      },
      {
        id: 'q10',
        question: 'Complète : "Noi ___ italiani" (nous sommes italiens)',
        type: 'fill-blank',
        correctAnswer: 'siamo',
        explanation: '"Noi siamo" = nous sommes.',
        hints: ['Nous sommes', 'Siamo']
      }
    ]
  },

  // Italien 4ème - Exercice 1: Le passé composé (Passato prossimo)
  {
    id: 'it-4eme-001',
    title: 'Le passé composé (Passato prossimo)',
    subject: 'italien',
    level: '4ème',
    difficulty: 3,
    description: 'Conjuguer les verbes au passé composé en italien',
    estimatedTime: 20,
    skills: ['Conjugaison', 'Passé composé', 'Participe passé'],
    questions: [
      {
        id: 'q1',
        question: 'Comment forme-t-on le passé composé en italien ?',
        type: 'multiple-choice',
        options: ['Essere/avere + participe passé', 'Verbe + terminaison -ato', 'Avere seul + infinitif', 'Essere seul'],
        correctAnswer: 'Essere/avere + participe passé',
        explanation: 'Le passato prossimo = auxiliaire (essere ou avere) + participe passé.',
        hints: ['Auxiliaire', 'Participe']
      },
      {
        id: 'q2',
        question: 'Conjugue "parlare" au passé composé (io) :',
        type: 'fill-blank',
        correctAnswer: 'ho parlato',
        explanation: '"Ho parlato" = j\'ai parlé. Verbes en -are → -ato.',
        hints: ['Avere', '-ato']
      },
      {
        id: 'q3',
        question: 'Quel auxiliaire utilise-t-on avec "andare" (aller) ?',
        type: 'multiple-choice',
        options: ['Essere', 'Avere', 'Les deux', 'Aucun'],
        correctAnswer: 'Essere',
        explanation: 'Les verbes de mouvement utilisent essere. "Sono andato/a".',
        hints: ['Mouvement', 'Essere']
      },
      {
        id: 'q4',
        question: '"Lei è partita" signifie :',
        type: 'multiple-choice',
        options: ['Elle est partie', 'Elle a participé', 'Il est parti', 'Elles sont parties'],
        correctAnswer: 'Elle est partie',
        explanation: 'Avec essere, le participe s\'accorde. "Partita" = féminin singulier.',
        hints: ['Féminin', 'Accord']
      },
      {
        id: 'q5',
        question: 'Quel est le participe passé de "scrivere" (écrire) ?',
        type: 'fill-blank',
        correctAnswer: 'scritto',
        explanation: '"Scritto" est irrégulier. "Ho scritto" = j\'ai écrit.',
        hints: ['Irrégulier', 'Scritto']
      },
      {
        id: 'q6',
        question: '"Abbiamo mangiato" signifie :',
        type: 'multiple-choice',
        options: ['Nous avons mangé', 'Ils ont mangé', 'Vous avez mangé', 'J\'ai mangé'],
        correctAnswer: 'Nous avons mangé',
        explanation: '"Abbiamo" = nous avons. "Mangiato" = mangé.',
        hints: ['Abbiamo = nous avons', 'Noi']
      },
      {
        id: 'q7',
        question: 'Conjugue "venire" (venir) au passé composé (tu) :',
        type: 'multiple-choice',
        options: ['Sei venuto/a', 'Hai venuto', 'Sei venire', 'Hai venire'],
        correctAnswer: 'Sei venuto/a',
        explanation: '"Venire" utilise essere. "Venuto" = venu (accord au féminin : venuta).',
        hints: ['Essere', 'Accord']
      },
      {
        id: 'q8',
        question: 'Quel est le participe passé de "leggere" (lire) ?',
        type: 'fill-blank',
        correctAnswer: 'letto',
        explanation: '"Letto" est irrégulier. "Ho letto" = j\'ai lu.',
        hints: ['Irrégulier', 'Letto']
      },
      {
        id: 'q9',
        question: '"Sono rimasti a casa" signifie :',
        type: 'multiple-choice',
        options: ['Ils sont restés à la maison', 'Je suis resté à la maison', 'Nous sommes restés', 'Tu es resté'],
        correctAnswer: 'Ils sont restés à la maison',
        explanation: '"Sono rimasti" = ils sont restés. Accord masculin pluriel.',
        hints: ['Sono = ils sont', 'Rimasti = restés']
      },
      {
        id: 'q10',
        question: 'Conjugue "fare" (faire) au passé composé (io) :',
        type: 'fill-blank',
        correctAnswer: 'ho fatto',
        explanation: '"Fatto" est le participe irrégulier de "fare".',
        hints: ['Avere', 'Irrégulier']
      }
    ]
  },

  // Italien 4ème - Exercice 2: Les prépositions articulées
  {
    id: 'it-4eme-002',
    title: 'Les prépositions articulées',
    subject: 'italien',
    level: '4ème',
    difficulty: 3,
    description: 'Maîtriser les prépositions contractées avec les articles',
    estimatedTime: 20,
    skills: ['Grammaire', 'Prépositions', 'Articles'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "à la" (a + la) en italien ?',
        type: 'multiple-choice',
        options: ['Alla', 'Nella', 'Della', 'Sulla'],
        correctAnswer: 'Alla',
        explanation: 'A + la = alla. Ex: "Vado alla stazione" = Je vais à la gare.',
        hints: ['A + la', 'Alla']
      },
      {
        id: 'q2',
        question: 'Comment dit-on "du" (di + il) en italien ?',
        type: 'fill-blank',
        correctAnswer: 'del',
        explanation: 'Di + il = del. Ex: "Il libro del ragazzo" = le livre du garçon.',
        hints: ['Di + il', 'Del']
      },
      {
        id: 'q3',
        question: '"Nel giardino" signifie :',
        type: 'multiple-choice',
        options: ['Dans le jardin', 'Sur le jardin', 'Du jardin', 'Au jardin'],
        correctAnswer: 'Dans le jardin',
        explanation: 'In + il = nel. "Nel" = dans le.',
        hints: ['In + il', 'Dans']
      },
      {
        id: 'q4',
        question: 'Comment dit-on "sur la" (su + la) ?',
        type: 'fill-blank',
        correctAnswer: 'sulla',
        explanation: 'Su + la = sulla. Ex: "Sulla tavola" = sur la table.',
        hints: ['Su + la', 'Sulla']
      },
      {
        id: 'q5',
        question: '"Dai nonni" signifie :',
        type: 'multiple-choice',
        options: ['Chez les grands-parents', 'Des grands-parents', 'Aux grands-parents', 'Pour les grands-parents'],
        correctAnswer: 'Chez les grands-parents',
        explanation: 'Da + i = dai. "Da" peut signifier "chez".',
        hints: ['Da + i', 'Chez']
      },
      {
        id: 'q6',
        question: 'Comment dit-on "des" (di + le, féminin pluriel) ?',
        type: 'multiple-choice',
        options: ['Delle', 'Dei', 'Degli', 'Del'],
        correctAnswer: 'Delle',
        explanation: 'Di + le = delle. Ex: "Le case delle amiche" = les maisons des amies.',
        hints: ['Di + le', 'Féminin pluriel']
      },
      {
        id: 'q7',
        question: '"Agli studenti" signifie :',
        type: 'multiple-choice',
        options: ['Aux étudiants', 'Des étudiants', 'Chez les étudiants', 'Pour les étudiants'],
        correctAnswer: 'Aux étudiants',
        explanation: 'A + gli = agli. "Gli" est utilisé devant voyelle ou s+cons.',
        hints: ['A + gli', 'Aux']
      },
      {
        id: 'q8',
        question: 'Complète : "Parlo ___ professore" (je parle au professeur)',
        type: 'fill-blank',
        correctAnswer: 'al',
        explanation: 'A + il = al. "Al professore" = au professeur.',
        hints: ['A + il', 'Al']
      },
      {
        id: 'q9',
        question: '"Negli occhi" signifie :',
        type: 'multiple-choice',
        options: ['Dans les yeux', 'Des yeux', 'Aux yeux', 'Sur les yeux'],
        correctAnswer: 'Dans les yeux',
        explanation: 'In + gli = negli. "Negli occhi" = dans les yeux.',
        hints: ['In + gli', 'Dans']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "des" (di + i, masculin pluriel) ?',
        type: 'fill-blank',
        correctAnswer: 'dei',
        explanation: 'Di + i = dei. Ex: "I libri dei ragazzi" = les livres des garçons.',
        hints: ['Di + i', 'Masculin pluriel']
      }
    ]
  },

  // Italien 4ème - Exercice 3: Les pronoms compléments
  {
    id: 'it-4eme-003',
    title: 'Les pronoms compléments',
    subject: 'italien',
    level: '4ème',
    difficulty: 3,
    description: 'Utiliser les pronoms COD et COI en italien',
    estimatedTime: 20,
    skills: ['Grammaire', 'Pronoms', 'COD', 'COI'],
    questions: [
      {
        id: 'q1',
        question: 'Quel pronom COD utilise-t-on pour "le" (masculin singulier) ?',
        type: 'multiple-choice',
        options: ['Lo', 'La', 'Li', 'Le'],
        correctAnswer: 'Lo',
        explanation: '"Lo" = le (COD masc. sing.). "Lo vedo" = je le vois.',
        hints: ['Masculin', 'Lo']
      },
      {
        id: 'q2',
        question: '"Ti chiamo domani" signifie :',
        type: 'multiple-choice',
        options: ['Je t\'appelle demain', 'Il t\'appelle demain', 'Tu m\'appelles demain', 'Je l\'appelle demain'],
        correctAnswer: 'Je t\'appelle demain',
        explanation: '"Ti" = te. "Ti chiamo" = je t\'appelle.',
        hints: ['Ti = te', 'COD']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "les" (féminin pluriel) comme COD ?',
        type: 'fill-blank',
        correctAnswer: 'le',
        explanation: '"Le" = les (COD fém. plur.). "Le vedo" = je les vois (elles).',
        hints: ['Féminin pluriel', 'Le']
      },
      {
        id: 'q4',
        question: '"Gli parlo" signifie :',
        type: 'multiple-choice',
        options: ['Je lui parle (à lui)', 'Je leur parle', 'Il me parle', 'Je les vois'],
        correctAnswer: 'Je lui parle (à lui)',
        explanation: '"Gli" = lui (COI masculin). "Gli parlo" = je lui parle.',
        hints: ['COI masculin', 'Lui']
      },
      {
        id: 'q5',
        question: 'Quel pronom COI utilise-t-on pour "leur" ?',
        type: 'multiple-choice',
        options: ['Gli (loro)', 'Li', 'Le', 'Vi'],
        correctAnswer: 'Gli (loro)',
        explanation: '"Gli" ou "loro" = leur. "Gli parlo" = je leur parle.',
        hints: ['Pluriel COI', 'Gli/loro']
      },
      {
        id: 'q6',
        question: '"Mi piace la pizza" signifie :',
        type: 'multiple-choice',
        options: ['La pizza me plaît', 'J\'aime la pizza', 'Je mange la pizza', 'Je veux la pizza'],
        correctAnswer: 'La pizza me plaît',
        explanation: '"Mi" = me (COI). "Mi piace" = ça me plaît.',
        hints: ['Mi = me', 'Plaire']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "les" (masculin pluriel) comme COD ?',
        type: 'fill-blank',
        correctAnswer: 'li',
        explanation: '"Li" = les (COD masc. plur.). "Li vedo" = je les vois (eux).',
        hints: ['Masculin pluriel', 'Li']
      },
      {
        id: 'q8',
        question: '"Le scrivo una lettera" signifie :',
        type: 'multiple-choice',
        options: ['Je lui écris une lettre (à elle)', 'Je leur écris une lettre', 'Je les écris', 'Elle m\'écrit'],
        correctAnswer: 'Je lui écris une lettre (à elle)',
        explanation: '"Le" = lui (COI féminin). "Le scrivo" = je lui écris (à elle).',
        hints: ['COI féminin', 'Lui (à elle)']
      },
      {
        id: 'q9',
        question: 'Où se place généralement le pronom complément en italien ?',
        type: 'multiple-choice',
        options: ['Avant le verbe', 'Après le verbe', 'Entre auxiliaire et participe', 'À la fin de la phrase'],
        correctAnswer: 'Avant le verbe',
        explanation: 'En italien, le pronom se place avant le verbe conjugué : "Lo vedo".',
        hints: ['Avant', 'Comme en français']
      },
      {
        id: 'q10',
        question: '"Ci vediamo domani" signifie :',
        type: 'multiple-choice',
        options: ['On se voit demain', 'Je vous vois demain', 'Il nous voit demain', 'Nous les voyons demain'],
        correctAnswer: 'On se voit demain',
        explanation: '"Ci" peut être réfléchi (nous). "Ci vediamo" = on se voit.',
        hints: ['Ci = nous/se', 'Réciproque']
      }
    ]
  },

  // Italien 3ème - Exercice 1: Le subjonctif présent
  {
    id: 'it-3eme-001',
    title: 'Le subjonctif présent (Congiuntivo presente)',
    subject: 'italien',
    level: '3ème',
    difficulty: 4,
    description: 'Conjuguer et utiliser le subjonctif présent',
    estimatedTime: 25,
    skills: ['Conjugaison', 'Subjonctif', 'Modes'],
    questions: [
      {
        id: 'q1',
        question: 'Quand utilise-t-on le subjonctif en italien ?',
        type: 'multiple-choice',
        options: ['Après des verbes d\'opinion/souhait', 'Pour le passé', 'Pour le futur', 'Pour le conditionnel'],
        correctAnswer: 'Après des verbes d\'opinion/souhait',
        explanation: 'Le subjonctif s\'utilise après pensare, credere, volere, sperare...',
        hints: ['Opinion', 'Souhait']
      },
      {
        id: 'q2',
        question: 'Conjugue "parlare" au subjonctif présent (che io) :',
        type: 'fill-blank',
        correctAnswer: 'parli',
        explanation: 'Verbes en -are : che io parli, che tu parli, che lui parli...',
        hints: ['Che io', '-i']
      },
      {
        id: 'q3',
        question: '"Penso che tu abbia ragione" signifie :',
        type: 'multiple-choice',
        options: ['Je pense que tu as raison', 'Je pensais que tu avais raison', 'Tu penses avoir raison', 'Il pense que j\'ai raison'],
        correctAnswer: 'Je pense que tu as raison',
        explanation: '"Abbia" = subjonctif de avere. Après "penso che" → subjonctif.',
        hints: ['Penso che', 'Subjonctif']
      },
      {
        id: 'q4',
        question: 'Conjugue "essere" au subjonctif présent (che lui) :',
        type: 'multiple-choice',
        options: ['Sia', 'È', 'Sono', 'Siamo'],
        correctAnswer: 'Sia',
        explanation: '"Che lui sia" = qu\'il soit. Essere est irrégulier au subjonctif.',
        hints: ['Irrégulier', 'Sia']
      },
      {
        id: 'q5',
        question: '"Voglio che tu venga" signifie :',
        type: 'multiple-choice',
        options: ['Je veux que tu viennes', 'Je voulais que tu viennes', 'Tu veux que je vienne', 'Il veut venir'],
        correctAnswer: 'Je veux que tu viennes',
        explanation: 'Après "volere che" → subjonctif. "Venga" = subj. de venire.',
        hints: ['Voglio che', 'Subjonctif']
      },
      {
        id: 'q6',
        question: 'Conjugue "finire" au subjonctif présent (che noi) :',
        type: 'fill-blank',
        correctAnswer: 'finiamo',
        explanation: '"Che noi finiamo" = que nous finissions. -iamo comme à l\'indicatif.',
        hints: ['Che noi', '-iamo']
      },
      {
        id: 'q7',
        question: '"Spero che faccia bel tempo" signifie :',
        type: 'multiple-choice',
        options: ['J\'espère qu\'il fait beau', 'Je savais qu\'il faisait beau', 'Il fait beau', 'S\'il fait beau'],
        correctAnswer: 'J\'espère qu\'il fait beau',
        explanation: '"Faccia" = subjonctif de fare. Après "spero che" → subjonctif.',
        hints: ['Spero che', 'Espérer']
      },
      {
        id: 'q8',
        question: 'Conjugue "avere" au subjonctif présent (che voi) :',
        type: 'fill-blank',
        correctAnswer: 'abbiate',
        explanation: '"Che voi abbiate" = que vous ayez.',
        hints: ['Che voi', 'Abbiate']
      },
      {
        id: 'q9',
        question: '"Credo che siano partiti" signifie :',
        type: 'multiple-choice',
        options: ['Je crois qu\'ils sont partis', 'Je croyais qu\'ils partaient', 'Ils croient partir', 'Je suis parti'],
        correctAnswer: 'Je crois qu\'ils sont partis',
        explanation: '"Siano" = subjonctif de essere. Utilisé au passé composé du subjonctif.',
        hints: ['Credo che', 'Subjonctif passé']
      },
      {
        id: 'q10',
        question: 'Quel mot introduit généralement une proposition au subjonctif ?',
        type: 'multiple-choice',
        options: ['Che', 'Quando', 'Perché', 'Come'],
        correctAnswer: 'Che',
        explanation: '"Che" (que) introduit la subordonnée au subjonctif après certains verbes.',
        hints: ['Que', 'Che']
      }
    ]
  },

  // Italien 3ème - Exercice 2: Le conditionnel
  {
    id: 'it-3eme-002',
    title: 'Le conditionnel (Condizionale)',
    subject: 'italien',
    level: '3ème',
    difficulty: 4,
    description: 'Conjuguer et utiliser le conditionnel présent et passé',
    estimatedTime: 25,
    skills: ['Conjugaison', 'Conditionnel', 'Hypothèse'],
    questions: [
      {
        id: 'q1',
        question: 'Comment forme-t-on le conditionnel présent en italien ?',
        type: 'multiple-choice',
        options: ['Radical du futur + terminaisons', 'Infinitif + terminaisons', 'Radical du présent + terminaisons', 'Participe + auxiliaire'],
        correctAnswer: 'Radical du futur + terminaisons',
        explanation: 'Le conditionnel utilise le même radical que le futur.',
        hints: ['Futur', 'Radical']
      },
      {
        id: 'q2',
        question: 'Conjugue "parlare" au conditionnel (io) :',
        type: 'fill-blank',
        correctAnswer: 'parlerei',
        explanation: '"Parlerei" = je parlerais. Terminaison : -ei, -esti, -ebbe...',
        hints: ['Parler-', '-ei']
      },
      {
        id: 'q3',
        question: '"Vorrei un caffè" signifie :',
        type: 'multiple-choice',
        options: ['Je voudrais un café', 'Je veux un café', 'J\'ai voulu un café', 'Je voudrai un café'],
        correctAnswer: 'Je voudrais un café',
        explanation: '"Vorrei" = je voudrais (conditionnel de volere).',
        hints: ['Politesse', 'Conditionnel']
      },
      {
        id: 'q4',
        question: 'Conjugue "avere" au conditionnel (tu) :',
        type: 'multiple-choice',
        options: ['Avresti', 'Avrei', 'Avrebbe', 'Avremmo'],
        correctAnswer: 'Avresti',
        explanation: '"Tu avresti" = tu aurais. Avere → avr- au futur/conditionnel.',
        hints: ['Tu', '-esti']
      },
      {
        id: 'q5',
        question: '"Potrebbe aiutarmi?" signifie :',
        type: 'multiple-choice',
        options: ['Pourriez-vous m\'aider ?', 'Pouvez-vous m\'aider ?', 'Puis-je vous aider ?', 'Il pourrait m\'aider'],
        correctAnswer: 'Pourriez-vous m\'aider ?',
        explanation: '"Potrebbe" = pourrait (politesse formelle avec Lei).',
        hints: ['Potere', 'Politesse']
      },
      {
        id: 'q6',
        question: 'Conjugue "essere" au conditionnel (noi) :',
        type: 'fill-blank',
        correctAnswer: 'saremmo',
        explanation: '"Noi saremmo" = nous serions. Essere → sar- au futur/cond.',
        hints: ['Essere', 'Sar-']
      },
      {
        id: 'q7',
        question: '"Se avessi soldi, comprerei una macchina" - quelle structure est-ce ?',
        type: 'multiple-choice',
        options: ['Hypothèse irréelle', 'Hypothèse réelle', 'Souhait', 'Ordre'],
        correctAnswer: 'Hypothèse irréelle',
        explanation: 'Se + imparfait du subjonctif + conditionnel = hypothèse irréelle.',
        hints: ['Se + subjonctif', 'Irréel']
      },
      {
        id: 'q8',
        question: 'Conjugue "fare" au conditionnel (loro) :',
        type: 'multiple-choice',
        options: ['Farebbero', 'Farei', 'Farebbe', 'Faremmo'],
        correctAnswer: 'Farebbero',
        explanation: '"Loro farebbero" = ils feraient. Fare → far- au futur/cond.',
        hints: ['Loro', '-ebbero']
      },
      {
        id: 'q9',
        question: '"Avrei dovuto studiare" signifie :',
        type: 'multiple-choice',
        options: ['J\'aurais dû étudier', 'Je devrais étudier', 'Je dois étudier', 'J\'ai dû étudier'],
        correctAnswer: 'J\'aurais dû étudier',
        explanation: 'Conditionnel passé = conditionnel de avere/essere + participe passé.',
        hints: ['Passé', 'Regret']
      },
      {
        id: 'q10',
        question: 'Conjugue "andare" au conditionnel (io) :',
        type: 'fill-blank',
        correctAnswer: 'andrei',
        explanation: '"Andrei" = j\'irais. Andare → andr- au futur/conditionnel.',
        hints: ['Andare', 'Andr-']
      }
    ]
  },

  // Italien 3ème - Exercice 3: L'imparfait (Imperfetto)
  {
    id: 'it-3eme-003',
    title: 'L\'imparfait (Imperfetto)',
    subject: 'italien',
    level: '3ème',
    difficulty: 4,
    description: 'Conjuguer et utiliser l\'imparfait en italien',
    estimatedTime: 25,
    skills: ['Conjugaison', 'Imparfait', 'Description passé'],
    questions: [
      {
        id: 'q1',
        question: 'Quand utilise-t-on l\'imparfait en italien ?',
        type: 'multiple-choice',
        options: ['Actions habituelles/descriptions au passé', 'Actions ponctuelles au passé', 'Actions futures', 'Ordres'],
        correctAnswer: 'Actions habituelles/descriptions au passé',
        explanation: 'L\'imperfetto décrit des habitudes, états, descriptions passées.',
        hints: ['Habitude', 'Description']
      },
      {
        id: 'q2',
        question: 'Conjugue "parlare" à l\'imparfait (io) :',
        type: 'fill-blank',
        correctAnswer: 'parlavo',
        explanation: '"Parlavo" = je parlais. Verbes en -are : -avo, -avi, -ava...',
        hints: ['Io', '-avo']
      },
      {
        id: 'q3',
        question: '"Quando ero bambino, giocavo molto" signifie :',
        type: 'multiple-choice',
        options: ['Quand j\'étais enfant, je jouais beaucoup', 'Quand je suis enfant, je joue', 'Quand j\'ai été enfant', 'Si j\'étais enfant'],
        correctAnswer: 'Quand j\'étais enfant, je jouais beaucoup',
        explanation: 'Imparfait pour décrire une époque passée et une habitude.',
        hints: ['Passé', 'Habitude']
      },
      {
        id: 'q4',
        question: 'Conjugue "avere" à l\'imparfait (tu) :',
        type: 'multiple-choice',
        options: ['Avevi', 'Avevo', 'Aveva', 'Avevamo'],
        correctAnswer: 'Avevi',
        explanation: '"Tu avevi" = tu avais.',
        hints: ['Tu', '-evi']
      },
      {
        id: 'q5',
        question: '"Faceva freddo" signifie :',
        type: 'multiple-choice',
        options: ['Il faisait froid', 'Il fait froid', 'Il a fait froid', 'Il fera froid'],
        correctAnswer: 'Il faisait froid',
        explanation: '"Faceva" = il faisait (imparfait de fare). Météo/description.',
        hints: ['Description', 'Imparfait']
      },
      {
        id: 'q6',
        question: 'Conjugue "essere" à l\'imparfait (noi) :',
        type: 'fill-blank',
        correctAnswer: 'eravamo',
        explanation: '"Noi eravamo" = nous étions. Essere est légèrement irrégulier.',
        hints: ['Essere', 'Er-']
      },
      {
        id: 'q7',
        question: '"Mentre dormivo, ha suonato il telefono" - quels temps sont utilisés ?',
        type: 'multiple-choice',
        options: ['Imparfait + passé composé', 'Passé composé + passé composé', 'Imparfait + imparfait', 'Présent + passé'],
        correctAnswer: 'Imparfait + passé composé',
        explanation: 'Action en cours (imparfait) interrompue par action ponctuelle (passé composé).',
        hints: ['Dormivo', 'Ha suonato']
      },
      {
        id: 'q8',
        question: 'Conjugue "leggere" à l\'imparfait (loro) :',
        type: 'fill-blank',
        correctAnswer: 'leggevano',
        explanation: '"Loro leggevano" = ils lisaient. Verbes en -ere : -evo...',
        hints: ['Loro', '-evano']
      },
      {
        id: 'q9',
        question: '"C\'erano molte persone" signifie :',
        type: 'multiple-choice',
        options: ['Il y avait beaucoup de gens', 'Il y a beaucoup de gens', 'Il y aura beaucoup de gens', 'Il y aurait beaucoup de gens'],
        correctAnswer: 'Il y avait beaucoup de gens',
        explanation: '"C\'erano" = il y avait (pluriel). "C\'era" au singulier.',
        hints: ['Esserci', 'Imparfait']
      },
      {
        id: 'q10',
        question: 'Conjugue "dire" à l\'imparfait (io) :',
        type: 'multiple-choice',
        options: ['Dicevo', 'Divo', 'Dicevo', 'Dissi'],
        correctAnswer: 'Dicevo',
        explanation: '"Dicevo" = je disais. Dire garde son radical dic- à l\'imparfait.',
        hints: ['Dire', 'Dic-']
      }
    ]
  },

  // ========================================
  // LATIN - 6ème à 3ème (12 exercices)
  // ========================================

  // Latin 6ème - Exercice 1: L'alphabet et la prononciation
  {
    id: 'lat-6eme-001',
    title: 'L\'alphabet et la prononciation latine',
    subject: 'latin',
    level: '6ème',
    difficulty: 1,
    description: 'Découvrir l\'alphabet latin et les règles de prononciation',
    estimatedTime: 15,
    skills: ['Alphabet', 'Prononciation', 'Lecture'],
    questions: [
      {
        id: 'q1',
        question: 'Combien de lettres compte l\'alphabet latin classique ?',
        type: 'multiple-choice',
        options: ['23 lettres', '26 lettres', '21 lettres', '24 lettres'],
        correctAnswer: '23 lettres',
        explanation: 'L\'alphabet latin classique compte 23 lettres (pas de J, U, W).',
        hints: ['Pas de J, U, W', '23']
      },
      {
        id: 'q2',
        question: 'Comment se prononce "C" en latin classique ?',
        type: 'multiple-choice',
        options: ['Toujours [k]', 'Comme en français', '[s] devant e/i', '[ch]'],
        correctAnswer: 'Toujours [k]',
        explanation: 'En latin classique, C se prononce toujours [k] : Caesar = [kaesar].',
        hints: ['Dur', '[k]']
      },
      {
        id: 'q3',
        question: 'Comment se prononce "V" en latin ?',
        type: 'multiple-choice',
        options: ['[w] ou [ou]', '[v] comme en français', '[f]', '[b]'],
        correctAnswer: '[w] ou [ou]',
        explanation: 'V se prononce [w] en latin : Veni = [weni].',
        hints: ['Comme "w" anglais', '[w]']
      },
      {
        id: 'q4',
        question: 'Que signifie "SPQR" ?',
        type: 'multiple-choice',
        options: ['Senatus Populusque Romanus', 'Salus Populi Romani', 'Sic Placet Quaestor Rex', 'Sum Pater Quintus Rex'],
        correctAnswer: 'Senatus Populusque Romanus',
        explanation: '"Le Sénat et le Peuple romain" - devise de la République romaine.',
        hints: ['Sénat', 'Peuple romain']
      },
      {
        id: 'q5',
        question: 'Comment se prononce "AE" en latin ?',
        type: 'multiple-choice',
        options: ['[aé] ou [è]', '[a]', '[é]', '[i]'],
        correctAnswer: '[aé] ou [è]',
        explanation: 'La diphtongue AE se prononce [aé] ou [è] : Caesaris = [kaisaris] ou [késaris].',
        hints: ['Diphtongue', '[aé]']
      },
      {
        id: 'q6',
        question: 'Quelle lettre latine a donné naissance au "J" français ?',
        type: 'fill-blank',
        correctAnswer: 'I',
        explanation: 'Le I latin devant voyelle a évolué en J : Iulius → Julius.',
        hints: ['Voyelle', 'I']
      },
      {
        id: 'q7',
        question: 'Comment se prononce "G" en latin classique ?',
        type: 'multiple-choice',
        options: ['Toujours [g] dur', '[j] devant e/i', 'Comme en français', '[gn]'],
        correctAnswer: 'Toujours [g] dur',
        explanation: 'G se prononce toujours [g] dur : gens = [guèns].',
        hints: ['Dur', '[g]']
      },
      {
        id: 'q8',
        question: 'Les Romains écrivaient-ils en majuscules ou minuscules ?',
        type: 'multiple-choice',
        options: ['Majuscules uniquement', 'Minuscules uniquement', 'Les deux', 'Ni l\'un ni l\'autre'],
        correctAnswer: 'Majuscules uniquement',
        explanation: 'Les Romains n\'utilisaient que les capitales. Les minuscules sont apparues au Moyen Âge.',
        hints: ['Capitales', 'Majuscules']
      },
      {
        id: 'q9',
        question: 'Que signifie "etc." (et cetera) ?',
        type: 'fill-blank',
        correctAnswer: 'et les autres choses',
        explanation: '"Et cetera" = et les autres choses, et le reste.',
        hints: ['Et', 'Les autres']
      },
      {
        id: 'q10',
        question: 'Comment s\'écrit le nombre 10 en chiffres romains ?',
        type: 'fill-blank',
        correctAnswer: 'X',
        explanation: 'X = 10 en chiffres romains.',
        hints: ['Une lettre', 'X']
      }
    ]
  },

  // Latin 6ème - Exercice 2: Les déclinaisons - 1ère déclinaison
  {
    id: 'lat-6eme-002',
    title: 'La 1ère déclinaison',
    subject: 'latin',
    level: '6ème',
    difficulty: 1,
    description: 'Découvrir la 1ère déclinaison (noms féminins en -a)',
    estimatedTime: 20,
    skills: ['Déclinaisons', 'Grammaire', 'Cas'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est le genre dominant de la 1ère déclinaison ?',
        type: 'multiple-choice',
        options: ['Féminin', 'Masculin', 'Neutre', 'Tous les genres'],
        correctAnswer: 'Féminin',
        explanation: 'La 1ère déclinaison contient principalement des noms féminins en -a.',
        hints: ['Rosa', 'Féminin']
      },
      {
        id: 'q2',
        question: 'Quel cas utilise-t-on pour le sujet en latin ?',
        type: 'multiple-choice',
        options: ['Nominatif', 'Accusatif', 'Génitif', 'Datif'],
        correctAnswer: 'Nominatif',
        explanation: 'Le nominatif est le cas du sujet et de l\'attribut du sujet.',
        hints: ['Sujet', 'Nominatif']
      },
      {
        id: 'q3',
        question: 'Quelle est la terminaison du nominatif singulier de la 1ère déclinaison ?',
        type: 'fill-blank',
        correctAnswer: '-a',
        explanation: 'Rosa, puella, terra... tous en -a au nominatif singulier.',
        hints: ['Rosa', '-a']
      },
      {
        id: 'q4',
        question: 'Quel cas utilise-t-on pour le COD ?',
        type: 'multiple-choice',
        options: ['Accusatif', 'Nominatif', 'Génitif', 'Ablatif'],
        correctAnswer: 'Accusatif',
        explanation: 'L\'accusatif est le cas du complément d\'objet direct.',
        hints: ['COD', 'Accusatif']
      },
      {
        id: 'q5',
        question: 'Quelle est la terminaison de l\'accusatif singulier de la 1ère déclinaison ?',
        type: 'fill-blank',
        correctAnswer: '-am',
        explanation: 'Rosam, puellam, terram... tous en -am à l\'accusatif singulier.',
        hints: ['Rosam', '-am']
      },
      {
        id: 'q6',
        question: 'Combien de cas existe-t-il en latin ?',
        type: 'multiple-choice',
        options: ['6 cas', '4 cas', '5 cas', '7 cas'],
        correctAnswer: '6 cas',
        explanation: 'Nominatif, vocatif, accusatif, génitif, datif, ablatif.',
        hints: ['Six', '6']
      },
      {
        id: 'q7',
        question: 'Quel cas exprime le complément du nom (possession) ?',
        type: 'multiple-choice',
        options: ['Génitif', 'Datif', 'Ablatif', 'Accusatif'],
        correctAnswer: 'Génitif',
        explanation: 'Le génitif exprime la possession : "la rose de la fille" = rosa puellae.',
        hints: ['Possession', 'Génitif']
      },
      {
        id: 'q8',
        question: 'Quelle est la terminaison du génitif singulier de la 1ère déclinaison ?',
        type: 'fill-blank',
        correctAnswer: '-ae',
        explanation: 'Rosae, puellae, terrae... tous en -ae au génitif singulier.',
        hints: ['Rosae', '-ae']
      },
      {
        id: 'q9',
        question: '"Puella rosam amat" signifie :',
        type: 'multiple-choice',
        options: ['La fille aime la rose', 'La rose aime la fille', 'Les filles aiment les roses', 'La fille est aimée'],
        correctAnswer: 'La fille aime la rose',
        explanation: 'Puella (nominatif) = sujet, rosam (accusatif) = COD.',
        hints: ['Puella = sujet', 'Rosam = COD']
      },
      {
        id: 'q10',
        question: 'Quelle est la terminaison du nominatif pluriel de la 1ère déclinaison ?',
        type: 'fill-blank',
        correctAnswer: '-ae',
        explanation: 'Rosae, puellae au nominatif pluriel (même forme que le génitif singulier).',
        hints: ['Pluriel', '-ae']
      }
    ]
  },

  // Latin 6ème - Exercice 3: Vocabulaire de base
  {
    id: 'lat-6eme-003',
    title: 'Vocabulaire latin de base',
    subject: 'latin',
    level: '6ème',
    difficulty: 1,
    description: 'Apprendre les premiers mots latins essentiels',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Étymologie', 'Traduction'],
    questions: [
      {
        id: 'q1',
        question: 'Que signifie "aqua" ?',
        type: 'multiple-choice',
        options: ['Eau', 'Air', 'Feu', 'Terre'],
        correctAnswer: 'Eau',
        explanation: '"Aqua" = eau. A donné aquarium, aquatique...',
        hints: ['Aquatique', 'Eau']
      },
      {
        id: 'q2',
        question: 'Que signifie "terra" ?',
        type: 'fill-blank',
        correctAnswer: 'terre',
        explanation: '"Terra" = terre. A donné terrain, terrestre, territoire...',
        hints: ['Terrestre', 'Terre']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "rose" en latin ?',
        type: 'multiple-choice',
        options: ['Rosa', 'Flora', 'Silva', 'Via'],
        correctAnswer: 'Rosa',
        explanation: '"Rosa" = rose. C\'est le mot type de la 1ère déclinaison.',
        hints: ['Rosacée', 'Rosa']
      },
      {
        id: 'q4',
        question: 'Que signifie "puella" ?',
        type: 'multiple-choice',
        options: ['Fille/jeune fille', 'Femme', 'Mère', 'Sœur'],
        correctAnswer: 'Fille/jeune fille',
        explanation: '"Puella" = jeune fille. "Puer" = garçon.',
        hints: ['Jeune', 'Fille']
      },
      {
        id: 'q5',
        question: 'Que signifie "amare" ?',
        type: 'fill-blank',
        correctAnswer: 'aimer',
        explanation: '"Amare" = aimer. A donné amour, amateur, amical...',
        hints: ['Amour', 'Aimer']
      },
      {
        id: 'q6',
        question: 'Comment dit-on "vie" en latin ?',
        type: 'multiple-choice',
        options: ['Vita', 'Via', 'Villa', 'Vinum'],
        correctAnswer: 'Vita',
        explanation: '"Vita" = vie. A donné vital, vitalité, vitamine...',
        hints: ['Vital', 'Vita']
      },
      {
        id: 'q7',
        question: 'Que signifie "schola" ?',
        type: 'multiple-choice',
        options: ['École', 'Salle', 'Maison', 'Ville'],
        correctAnswer: 'École',
        explanation: '"Schola" (du grec) = école. A donné scolaire, scolarité...',
        hints: ['Scolaire', 'École']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "ami" en latin (masculin) ?',
        type: 'fill-blank',
        correctAnswer: 'amicus',
        explanation: '"Amicus" = ami (masc.), "amica" = amie (fém.).',
        hints: ['Amical', 'Amicus']
      },
      {
        id: 'q9',
        question: 'Que signifie "video" en latin ?',
        type: 'multiple-choice',
        options: ['Je vois', 'Je viens', 'Je vais', 'Je veux'],
        correctAnswer: 'Je vois',
        explanation: '"Video" = je vois. A donné vidéo, vision, évident...',
        hints: ['Vision', 'Voir']
      },
      {
        id: 'q10',
        question: 'Que signifie "audio" en latin ?',
        type: 'fill-blank',
        correctAnswer: 'j\'entends',
        explanation: '"Audio" = j\'entends. A donné audio, audition, auditoire...',
        hints: ['Audition', 'Entendre']
      }
    ]
  },

  // Latin 5ème - Exercice 1: La 2ème déclinaison
  {
    id: 'lat-5eme-001',
    title: 'La 2ème déclinaison',
    subject: 'latin',
    level: '5ème',
    difficulty: 2,
    description: 'Maîtriser la 2ème déclinaison (masculins en -us et neutres en -um)',
    estimatedTime: 20,
    skills: ['Déclinaisons', 'Grammaire', 'Neutre'],
    questions: [
      {
        id: 'q1',
        question: 'Quels genres trouve-t-on dans la 2ème déclinaison ?',
        type: 'multiple-choice',
        options: ['Masculin et neutre', 'Féminin uniquement', 'Masculin uniquement', 'Les trois genres'],
        correctAnswer: 'Masculin et neutre',
        explanation: 'La 2ème déclinaison : masculins en -us (dominus) et neutres en -um (templum).',
        hints: ['Dominus', 'Templum']
      },
      {
        id: 'q2',
        question: 'Quelle est la terminaison du nominatif singulier masculin de la 2ème déclinaison ?',
        type: 'fill-blank',
        correctAnswer: '-us',
        explanation: 'Dominus, servus, amicus... tous en -us.',
        hints: ['Dominus', '-us']
      },
      {
        id: 'q3',
        question: 'Quelle est la particularité des neutres pour nominatif, vocatif et accusatif ?',
        type: 'multiple-choice',
        options: ['Ils ont la même forme', 'Ils sont différents', 'Ils n\'existent pas', 'Ils sont irréguliers'],
        correctAnswer: 'Ils ont la même forme',
        explanation: 'Au neutre, nominatif = vocatif = accusatif. Ex: templum (sing.), templa (plur.).',
        hints: ['Identiques', 'Même forme']
      },
      {
        id: 'q4',
        question: 'Quelle est la terminaison de l\'accusatif singulier masculin de la 2ème déclinaison ?',
        type: 'fill-blank',
        correctAnswer: '-um',
        explanation: 'Dominum, servum, amicum... tous en -um à l\'accusatif singulier.',
        hints: ['Dominum', '-um']
      },
      {
        id: 'q5',
        question: 'Que signifie "dominus" ?',
        type: 'multiple-choice',
        options: ['Maître/seigneur', 'Esclave', 'Soldat', 'Ami'],
        correctAnswer: 'Maître/seigneur',
        explanation: '"Dominus" = maître, seigneur. A donné dominer, domination...',
        hints: ['Dominer', 'Maître']
      },
      {
        id: 'q6',
        question: 'Quelle est la terminaison du génitif singulier de la 2ème déclinaison ?',
        type: 'fill-blank',
        correctAnswer: '-i',
        explanation: 'Domini, servi, amici, templi... tous en -i au génitif singulier.',
        hints: ['Domini', '-i']
      },
      {
        id: 'q7',
        question: '"Servus dominum videt" signifie :',
        type: 'multiple-choice',
        options: ['L\'esclave voit le maître', 'Le maître voit l\'esclave', 'Les esclaves voient', 'Le maître est vu'],
        correctAnswer: 'L\'esclave voit le maître',
        explanation: 'Servus (nominatif) = sujet, dominum (accusatif) = COD.',
        hints: ['Servus = sujet', 'Dominum = COD']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "des dieux" (génitif pluriel) avec "deus" ?',
        type: 'multiple-choice',
        options: ['Deorum', 'Deis', 'Deos', 'Dei'],
        correctAnswer: 'Deorum',
        explanation: 'Le génitif pluriel de la 2ème déclinaison est en -orum.',
        hints: ['Génitif pluriel', '-orum']
      },
      {
        id: 'q9',
        question: 'Que signifie "bellum" ?',
        type: 'fill-blank',
        correctAnswer: 'guerre',
        explanation: '"Bellum" = guerre (neutre). A donné belliqueux, belligérant...',
        hints: ['Belliqueux', 'Guerre']
      },
      {
        id: 'q10',
        question: 'Quelle est la terminaison du nominatif/accusatif pluriel neutre ?',
        type: 'fill-blank',
        correctAnswer: '-a',
        explanation: 'Templa, bella, dona... Le pluriel neutre en -a.',
        hints: ['Templa', '-a']
      }
    ]
  },

  // Latin 5ème - Exercice 2: Le présent de l'indicatif
  {
    id: 'lat-5eme-002',
    title: 'Le présent de l\'indicatif latin',
    subject: 'latin',
    level: '5ème',
    difficulty: 2,
    description: 'Conjuguer les verbes latins au présent de l\'indicatif',
    estimatedTime: 20,
    skills: ['Conjugaison', 'Présent', 'Verbes'],
    questions: [
      {
        id: 'q1',
        question: 'Combien de conjugaisons existe-t-il en latin ?',
        type: 'multiple-choice',
        options: ['5 conjugaisons', '3 conjugaisons', '4 conjugaisons', '2 conjugaisons'],
        correctAnswer: '5 conjugaisons',
        explanation: '5 conjugaisons : 1ère (-are), 2ème (-ere long), 3ème (-ere bref), 3ème mixte (-ere/-io), 4ème (-ire).',
        hints: ['Cinq', '5']
      },
      {
        id: 'q2',
        question: 'Quelle est la terminaison de la 1ère personne du singulier au présent ?',
        type: 'fill-blank',
        correctAnswer: '-o',
        explanation: 'Amo, video, lego, audio... Toutes les conjugaisons ont -o à la 1ère pers. sing.',
        hints: ['Amo', '-o']
      },
      {
        id: 'q3',
        question: 'Conjugue "amare" (aimer) à la 2ème personne du singulier :',
        type: 'fill-blank',
        correctAnswer: 'amas',
        explanation: '1ère conjugaison : amo, amas, amat, amamus, amatis, amant.',
        hints: ['Tu aimes', 'Amas']
      },
      {
        id: 'q4',
        question: '"Legimus" signifie :',
        type: 'multiple-choice',
        options: ['Nous lisons', 'Ils lisent', 'Vous lisez', 'Je lis'],
        correctAnswer: 'Nous lisons',
        explanation: '-mus est la terminaison de la 1ère personne du pluriel.',
        hints: ['-mus', 'Nous']
      },
      {
        id: 'q5',
        question: 'Quelle est la terminaison de la 3ème personne du pluriel au présent ?',
        type: 'multiple-choice',
        options: ['-nt', '-mus', '-tis', '-t'],
        correctAnswer: '-nt',
        explanation: 'Amant, vident, legunt, audiunt... -nt pour "ils/elles".',
        hints: ['Ils', '-nt']
      },
      {
        id: 'q6',
        question: 'Conjugue "videre" (voir) à la 3ème personne du singulier :',
        type: 'fill-blank',
        correctAnswer: 'videt',
        explanation: '2ème conjugaison : video, vides, videt, videmus, videtis, vident.',
        hints: ['Il voit', 'Videt']
      },
      {
        id: 'q7',
        question: '"Audiunt" signifie :',
        type: 'multiple-choice',
        options: ['Ils entendent', 'Il entend', 'Nous entendons', 'Vous entendez'],
        correctAnswer: 'Ils entendent',
        explanation: '"Audiunt" = ils entendent. 4ème conjugaison, 3ème pers. pluriel.',
        hints: ['-unt', 'Ils']
      },
      {
        id: 'q8',
        question: 'Comment se conjugue "esse" (être) à la 1ère personne du singulier ?',
        type: 'fill-blank',
        correctAnswer: 'sum',
        explanation: '"Sum" = je suis. Esse est irrégulier : sum, es, est, sumus, estis, sunt.',
        hints: ['Je suis', 'Sum']
      },
      {
        id: 'q9',
        question: '"Sunt" signifie :',
        type: 'multiple-choice',
        options: ['Ils sont', 'Il est', 'Nous sommes', 'Tu es'],
        correctAnswer: 'Ils sont',
        explanation: '"Sunt" = ils/elles sont. 3ème personne du pluriel de esse.',
        hints: ['Esse', 'Ils sont']
      },
      {
        id: 'q10',
        question: 'Conjugue "amare" à la 2ème personne du pluriel :',
        type: 'fill-blank',
        correctAnswer: 'amatis',
        explanation: '-tis est la terminaison de la 2ème personne du pluriel.',
        hints: ['Vous aimez', '-tis']
      }
    ]
  },

  // Latin 5ème - Exercice 3: La mythologie romaine
  {
    id: 'lat-5eme-003',
    title: 'Les dieux romains',
    subject: 'latin',
    level: '5ème',
    difficulty: 2,
    description: 'Connaître les principaux dieux de la mythologie romaine',
    estimatedTime: 15,
    skills: ['Mythologie', 'Culture', 'Vocabulaire'],
    questions: [
      {
        id: 'q1',
        question: 'Qui est le roi des dieux romains ?',
        type: 'multiple-choice',
        options: ['Jupiter', 'Mars', 'Neptune', 'Apollon'],
        correctAnswer: 'Jupiter',
        explanation: 'Jupiter (Zeus chez les Grecs) est le roi des dieux, dieu du ciel et de la foudre.',
        hints: ['Zeus', 'Roi']
      },
      {
        id: 'q2',
        question: 'Quelle déesse est l\'épouse de Jupiter ?',
        type: 'fill-blank',
        correctAnswer: 'Junon',
        explanation: 'Junon (Héra chez les Grecs) est la déesse du mariage et de la famille.',
        hints: ['Héra', 'Épouse']
      },
      {
        id: 'q3',
        question: 'Mars est le dieu de :',
        type: 'multiple-choice',
        options: ['La guerre', 'La mer', 'Le feu', 'L\'amour'],
        correctAnswer: 'La guerre',
        explanation: 'Mars (Arès) est le dieu de la guerre. Le mois de mars porte son nom.',
        hints: ['Martial', 'Guerre']
      },
      {
        id: 'q4',
        question: 'Qui est la déesse de l\'amour ?',
        type: 'multiple-choice',
        options: ['Vénus', 'Diane', 'Minerve', 'Cérès'],
        correctAnswer: 'Vénus',
        explanation: 'Vénus (Aphrodite) est la déesse de l\'amour et de la beauté.',
        hints: ['Aphrodite', 'Beauté']
      },
      {
        id: 'q5',
        question: 'Neptune est le dieu de :',
        type: 'fill-blank',
        correctAnswer: 'la mer',
        explanation: 'Neptune (Poséidon) est le dieu de la mer et des océans.',
        hints: ['Poséidon', 'Océan']
      },
      {
        id: 'q6',
        question: 'Qui est le dieu des Enfers ?',
        type: 'multiple-choice',
        options: ['Pluton', 'Vulcain', 'Mercure', 'Saturne'],
        correctAnswer: 'Pluton',
        explanation: 'Pluton (Hadès) règne sur les Enfers, le royaume des morts.',
        hints: ['Hadès', 'Morts']
      },
      {
        id: 'q7',
        question: 'Minerve est la déesse de :',
        type: 'multiple-choice',
        options: ['La sagesse et des arts', 'La chasse', 'L\'agriculture', 'La lune'],
        correctAnswer: 'La sagesse et des arts',
        explanation: 'Minerve (Athéna) est la déesse de la sagesse, des arts et de la guerre stratégique.',
        hints: ['Athéna', 'Sagesse']
      },
      {
        id: 'q8',
        question: 'Qui est le messager des dieux ?',
        type: 'fill-blank',
        correctAnswer: 'Mercure',
        explanation: 'Mercure (Hermès) est le messager des dieux, dieu du commerce et des voyageurs.',
        hints: ['Hermès', 'Messager']
      },
      {
        id: 'q9',
        question: 'Diane est la déesse de :',
        type: 'multiple-choice',
        options: ['La chasse et de la lune', 'L\'amour', 'La mer', 'La terre'],
        correctAnswer: 'La chasse et de la lune',
        explanation: 'Diane (Artémis) est la déesse de la chasse et de la lune.',
        hints: ['Artémis', 'Chasse']
      },
      {
        id: 'q10',
        question: 'Vulcain est le dieu de :',
        type: 'multiple-choice',
        options: ['Le feu et la forge', 'La guerre', 'Le vin', 'La mer'],
        correctAnswer: 'Le feu et la forge',
        explanation: 'Vulcain (Héphaïstos) est le dieu du feu et de la forge. A donné "volcan".',
        hints: ['Héphaïstos', 'Forge']
      }
    ]
  },

  // Latin 4ème - Exercice 1: La 3ème déclinaison
  {
    id: 'lat-4eme-001',
    title: 'La 3ème déclinaison',
    subject: 'latin',
    level: '4ème',
    difficulty: 3,
    description: 'Maîtriser la 3ème déclinaison (la plus variée)',
    estimatedTime: 25,
    skills: ['Déclinaisons', 'Grammaire', 'Thèmes consonantiques'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle est la particularité de la 3ème déclinaison ?',
        type: 'multiple-choice',
        options: ['Elle contient les 3 genres', 'Elle est uniquement féminine', 'Elle n\'a pas de neutre', 'Elle est régulière'],
        correctAnswer: 'Elle contient les 3 genres',
        explanation: 'La 3ème déclinaison contient masculin, féminin et neutre.',
        hints: ['Trois genres', 'Variée']
      },
      {
        id: 'q2',
        question: 'Comment trouve-t-on le radical d\'un nom de la 3ème déclinaison ?',
        type: 'multiple-choice',
        options: ['Au génitif singulier', 'Au nominatif', 'À l\'accusatif', 'Au datif'],
        correctAnswer: 'Au génitif singulier',
        explanation: 'Le radical se trouve en enlevant la terminaison -is du génitif singulier.',
        hints: ['Génitif', 'Radical']
      },
      {
        id: 'q3',
        question: 'Quelle est la terminaison du génitif singulier de la 3ème déclinaison ?',
        type: 'fill-blank',
        correctAnswer: '-is',
        explanation: 'Regis, consulis, temporis... tous en -is au génitif singulier.',
        hints: ['Regis', '-is']
      },
      {
        id: 'q4',
        question: '"Rex, regis" signifie :',
        type: 'multiple-choice',
        options: ['Roi', 'Loi', 'Droit', 'Chef'],
        correctAnswer: 'Roi',
        explanation: '"Rex, regis" (m.) = roi. A donné régal, régner, royal...',
        hints: ['Royal', 'Roi']
      },
      {
        id: 'q5',
        question: 'Quelle est la terminaison de l\'accusatif singulier des masculins/féminins de la 3ème déclinaison ?',
        type: 'fill-blank',
        correctAnswer: '-em',
        explanation: 'Regem, legem, consulem... -em à l\'accusatif singulier.',
        hints: ['Regem', '-em']
      },
      {
        id: 'q6',
        question: '"Tempus, temporis" signifie :',
        type: 'multiple-choice',
        options: ['Temps', 'Temple', 'Tête', 'Terre'],
        correctAnswer: 'Temps',
        explanation: '"Tempus, temporis" (n.) = temps. A donné temporel, temporaire...',
        hints: ['Temporel', 'Temps']
      },
      {
        id: 'q7',
        question: 'Quelle est la terminaison du nominatif/accusatif pluriel neutre de la 3ème déclinaison ?',
        type: 'fill-blank',
        correctAnswer: '-a',
        explanation: 'Tempora, corpora, nomina... -a au pluriel neutre.',
        hints: ['Tempora', '-a']
      },
      {
        id: 'q8',
        question: '"Consul regem videt" signifie :',
        type: 'multiple-choice',
        options: ['Le consul voit le roi', 'Le roi voit le consul', 'Les consuls voient', 'Le roi est consul'],
        correctAnswer: 'Le consul voit le roi',
        explanation: 'Consul (nominatif) = sujet, regem (accusatif) = COD.',
        hints: ['Consul = sujet', 'Regem = COD']
      },
      {
        id: 'q9',
        question: '"Lex, legis" signifie :',
        type: 'fill-blank',
        correctAnswer: 'loi',
        explanation: '"Lex, legis" (f.) = loi. A donné légal, législation, légitime...',
        hints: ['Légal', 'Loi']
      },
      {
        id: 'q10',
        question: 'Quelle est la terminaison du génitif pluriel de la 3ème déclinaison ?',
        type: 'multiple-choice',
        options: ['-um', '-orum', '-arum', '-ibus'],
        correctAnswer: '-um',
        explanation: 'Regum, legum, temporum... -um au génitif pluriel.',
        hints: ['Regum', '-um']
      }
    ]
  },

  // Latin 4ème - Exercice 2: L'imparfait et le parfait
  {
    id: 'lat-4eme-002',
    title: 'L\'imparfait et le parfait',
    subject: 'latin',
    level: '4ème',
    difficulty: 3,
    description: 'Conjuguer les verbes à l\'imparfait et au parfait de l\'indicatif',
    estimatedTime: 25,
    skills: ['Conjugaison', 'Temps du passé', 'Parfait'],
    questions: [
      {
        id: 'q1',
        question: 'Quel suffixe caractérise l\'imparfait en latin ?',
        type: 'multiple-choice',
        options: ['-ba-', '-bi-', '-bo-', '-be-'],
        correctAnswer: '-ba-',
        explanation: 'L\'imparfait se forme avec le suffixe -ba- : amabam, videbam...',
        hints: ['Amabam', '-ba-']
      },
      {
        id: 'q2',
        question: 'Conjugue "amare" à l\'imparfait (1ère pers. sing.) :',
        type: 'fill-blank',
        correctAnswer: 'amabam',
        explanation: '"Amabam" = j\'aimais. Radical + ba + m.',
        hints: ['J\'aimais', 'Amabam']
      },
      {
        id: 'q3',
        question: '"Videbamus" signifie :',
        type: 'multiple-choice',
        options: ['Nous voyions', 'Ils voyaient', 'Vous voyiez', 'Je voyais'],
        correctAnswer: 'Nous voyions',
        explanation: '-mus = 1ère personne du pluriel. "Videbamus" = nous voyions.',
        hints: ['-mus', 'Nous']
      },
      {
        id: 'q4',
        question: 'Comment forme-t-on le parfait en latin ?',
        type: 'multiple-choice',
        options: ['Radical du parfait + terminaisons', 'Présent + -ba-', 'Auxiliaire + participe', 'Infinitif + terminaisons'],
        correctAnswer: 'Radical du parfait + terminaisons',
        explanation: 'Le parfait a son propre radical : amav- (amare), vid- (videre)...',
        hints: ['Radical spécial', 'Parfait']
      },
      {
        id: 'q5',
        question: 'Conjugue "amare" au parfait (1ère pers. sing.) :',
        type: 'fill-blank',
        correctAnswer: 'amavi',
        explanation: '"Amavi" = j\'ai aimé / j\'aimai. Radical amav- + i.',
        hints: ['J\'ai aimé', 'Amavi']
      },
      {
        id: 'q6',
        question: 'Quelles sont les terminaisons du parfait ?',
        type: 'multiple-choice',
        options: ['-i, -isti, -it, -imus, -istis, -erunt', '-o, -s, -t, -mus, -tis, -nt', '-m, -s, -t, -mus, -tis, -nt', '-am, -as, -at, -amus, -atis, -ant'],
        correctAnswer: '-i, -isti, -it, -imus, -istis, -erunt',
        explanation: 'Le parfait a des terminaisons propres : -i, -isti, -it, -imus, -istis, -erunt.',
        hints: ['-i, -isti', 'Terminaisons']
      },
      {
        id: 'q7',
        question: '"Viderunt" signifie :',
        type: 'multiple-choice',
        options: ['Ils ont vu', 'Nous avons vu', 'Vous avez vu', 'J\'ai vu'],
        correctAnswer: 'Ils ont vu',
        explanation: '-erunt = 3ème personne du pluriel du parfait.',
        hints: ['-erunt', 'Ils']
      },
      {
        id: 'q8',
        question: 'Quel est le parfait de "esse" (être) à la 3ème pers. sing. ?',
        type: 'fill-blank',
        correctAnswer: 'fuit',
        explanation: '"Fuit" = il fut / il a été. Esse → fui, fuisti, fuit...',
        hints: ['Il fut', 'Fuit']
      },
      {
        id: 'q9',
        question: '"Dixerunt" vient du verbe :',
        type: 'multiple-choice',
        options: ['Dicere (dire)', 'Ducere (conduire)', 'Dare (donner)', 'Docere (enseigner)'],
        correctAnswer: 'Dicere (dire)',
        explanation: 'Dicere → parfait dix- : dixi, dixisti, dixit, diximus, dixistis, dixerunt.',
        hints: ['Dire', 'Dix-']
      },
      {
        id: 'q10',
        question: 'Conjugue "videre" à l\'imparfait (3ème pers. plur.) :',
        type: 'fill-blank',
        correctAnswer: 'videbant',
        explanation: '"Videbant" = ils voyaient. Radical + eba + nt.',
        hints: ['Ils voyaient', '-bant']
      }
    ]
  },

  // Latin 4ème - Exercice 3: L'histoire de Rome
  {
    id: 'lat-4eme-003',
    title: 'L\'histoire de Rome',
    subject: 'latin',
    level: '4ème',
    difficulty: 3,
    description: 'Connaître les grandes périodes et personnages de l\'histoire romaine',
    estimatedTime: 20,
    skills: ['Histoire', 'Culture', 'Chronologie'],
    questions: [
      {
        id: 'q1',
        question: 'Selon la légende, qui a fondé Rome en 753 av. J.-C. ?',
        type: 'multiple-choice',
        options: ['Romulus', 'Rémus', 'Énée', 'César'],
        correctAnswer: 'Romulus',
        explanation: 'Romulus, après avoir tué son frère Rémus, fonde Rome sur le Palatin.',
        hints: ['Frère de Rémus', 'Fondateur']
      },
      {
        id: 'q2',
        question: 'Comment s\'appelait le dernier roi de Rome ?',
        type: 'fill-blank',
        correctAnswer: 'Tarquin le Superbe',
        explanation: 'Tarquin le Superbe fut chassé en 509 av. J.-C., fin de la royauté.',
        hints: ['Tarquin', 'Superbe']
      },
      {
        id: 'q3',
        question: 'Quelles sont les trois périodes de l\'histoire romaine ?',
        type: 'multiple-choice',
        options: ['Royauté, République, Empire', 'Antiquité, Moyen Âge, Renaissance', 'Fondation, Expansion, Déclin', 'Monarchie, Démocratie, Dictature'],
        correctAnswer: 'Royauté, République, Empire',
        explanation: 'Royauté (753-509), République (509-27), Empire (27 av. J.-C. - 476 ap. J.-C.).',
        hints: ['Trois', 'Royauté']
      },
      {
        id: 'q4',
        question: 'Qui a franchi le Rubicon en 49 av. J.-C. ?',
        type: 'multiple-choice',
        options: ['Jules César', 'Auguste', 'Pompée', 'Cicéron'],
        correctAnswer: 'Jules César',
        explanation: 'César franchit le Rubicon avec son armée, déclenchant la guerre civile.',
        hints: ['Alea jacta est', 'César']
      },
      {
        id: 'q5',
        question: 'Qui fut le premier empereur romain ?',
        type: 'fill-blank',
        correctAnswer: 'Auguste',
        explanation: 'Auguste (Octave) devint le premier empereur en 27 av. J.-C.',
        hints: ['Octave', 'Premier']
      },
      {
        id: 'q6',
        question: 'En quelle année Rome a-t-elle été saccagée par les Wisigoths ?',
        type: 'multiple-choice',
        options: ['410 ap. J.-C.', '476 ap. J.-C.', '395 ap. J.-C.', '455 ap. J.-C.'],
        correctAnswer: '410 ap. J.-C.',
        explanation: 'Alaric Ier et les Wisigoths saccagent Rome en 410.',
        hints: ['Ve siècle', '410']
      },
      {
        id: 'q7',
        question: 'Que signifie "Veni, vidi, vici" ?',
        type: 'multiple-choice',
        options: ['Je suis venu, j\'ai vu, j\'ai vaincu', 'Je vis, je vois, je vaincs', 'Venir, voir, vaincre', 'Il vint, il vit, il vainquit'],
        correctAnswer: 'Je suis venu, j\'ai vu, j\'ai vaincu',
        explanation: 'Phrase célèbre de César après sa victoire rapide à Zéla (47 av. J.-C.).',
        hints: ['César', 'Victoire']
      },
      {
        id: 'q8',
        question: 'Comment s\'appelait le général carthaginois qui a traversé les Alpes ?',
        type: 'fill-blank',
        correctAnswer: 'Hannibal',
        explanation: 'Hannibal Barca traversa les Alpes avec ses éléphants pendant la 2e guerre punique.',
        hints: ['Carthage', 'Éléphants']
      },
      {
        id: 'q9',
        question: 'Qu\'est-ce que le "limes" ?',
        type: 'multiple-choice',
        options: ['La frontière fortifiée de l\'Empire', 'Une monnaie romaine', 'Un grade militaire', 'Un type de route'],
        correctAnswer: 'La frontière fortifiée de l\'Empire',
        explanation: 'Le limes était la ligne de fortifications marquant les frontières de l\'Empire.',
        hints: ['Limite', 'Frontière']
      },
      {
        id: 'q10',
        question: 'En quelle année chute l\'Empire romain d\'Occident ?',
        type: 'multiple-choice',
        options: ['476 ap. J.-C.', '410 ap. J.-C.', '395 ap. J.-C.', '500 ap. J.-C.'],
        correctAnswer: '476 ap. J.-C.',
        explanation: 'Le dernier empereur Romulus Augustule est déposé par Odoacre en 476.',
        hints: ['Ve siècle', 'Fin']
      }
    ]
  },

  // Latin 3ème - Exercice 1: Le subjonctif
  {
    id: 'lat-3eme-001',
    title: 'Le subjonctif latin',
    subject: 'latin',
    level: '3ème',
    difficulty: 4,
    description: 'Conjuguer et utiliser le subjonctif présent et imparfait',
    estimatedTime: 25,
    skills: ['Conjugaison', 'Subjonctif', 'Modes'],
    questions: [
      {
        id: 'q1',
        question: 'Quel suffixe caractérise le subjonctif présent de la 1ère conjugaison ?',
        type: 'multiple-choice',
        options: ['-e-', '-a-', '-i-', '-u-'],
        correctAnswer: '-e-',
        explanation: 'La 1ère conjugaison utilise -e- au subjonctif présent : amem, ames, amet...',
        hints: ['Amem', '-e-']
      },
      {
        id: 'q2',
        question: 'Conjugue "amare" au subjonctif présent (1ère pers. sing.) :',
        type: 'fill-blank',
        correctAnswer: 'amem',
        explanation: '"Amem" = que j\'aime. 1ère conj. : radical + e + terminaisons.',
        hints: ['Que j\'aime', 'Amem']
      },
      {
        id: 'q3',
        question: 'Quel suffixe caractérise le subjonctif présent des 2e, 3e, 4e conjugaisons ?',
        type: 'multiple-choice',
        options: ['-a-', '-e-', '-i-', '-o-'],
        correctAnswer: '-a-',
        explanation: 'Les autres conjugaisons utilisent -a- : videam, legam, audiam...',
        hints: ['Videam', '-a-']
      },
      {
        id: 'q4',
        question: '"Ut veniat" signifie :',
        type: 'multiple-choice',
        options: ['Pour qu\'il vienne', 'Il vient', 'Qu\'il vienne', 'S\'il venait'],
        correctAnswer: 'Pour qu\'il vienne',
        explanation: '"Ut" + subjonctif exprime le but. "Ut veniat" = pour qu\'il vienne.',
        hints: ['Ut', 'But']
      },
      {
        id: 'q5',
        question: 'Quel suffixe caractérise le subjonctif imparfait ?',
        type: 'multiple-choice',
        options: ['-re-', '-ba-', '-bi-', '-se-'],
        correctAnswer: '-re-',
        explanation: 'Le subjonctif imparfait = infinitif présent + terminaisons : amarem, viderem...',
        hints: ['Amarem', 'Infinitif']
      },
      {
        id: 'q6',
        question: 'Conjugue "videre" au subjonctif imparfait (1ère pers. sing.) :',
        type: 'fill-blank',
        correctAnswer: 'viderem',
        explanation: '"Viderem" = que je visse. Infinitif videre + m.',
        hints: ['Que je visse', 'Viderem']
      },
      {
        id: 'q7',
        question: '"Cum venisset" signifie :',
        type: 'multiple-choice',
        options: ['Comme il était venu', 'Quand il viendra', 'S\'il venait', 'Pour qu\'il vienne'],
        correctAnswer: 'Comme il était venu',
        explanation: '"Cum" + subjonctif plus-que-parfait = circonstance passée.',
        hints: ['Cum', 'Plus-que-parfait']
      },
      {
        id: 'q8',
        question: 'Le subjonctif latin peut exprimer :',
        type: 'multiple-choice',
        options: ['Le souhait, le but, l\'ordre', 'Uniquement le souhait', 'Uniquement le but', 'Uniquement l\'ordre'],
        correctAnswer: 'Le souhait, le but, l\'ordre',
        explanation: 'Le subjonctif latin a de nombreux emplois : souhait, but, ordre, concession...',
        hints: ['Multiple', 'Plusieurs emplois']
      },
      {
        id: 'q9',
        question: '"Utinam veniat!" signifie :',
        type: 'multiple-choice',
        options: ['Pourvu qu\'il vienne !', 'Il vient !', 'Qu\'il vienne !', 'S\'il venait !'],
        correctAnswer: 'Pourvu qu\'il vienne !',
        explanation: '"Utinam" + subjonctif exprime le souhait.',
        hints: ['Utinam', 'Souhait']
      },
      {
        id: 'q10',
        question: 'Conjugue "esse" au subjonctif présent (3ème pers. sing.) :',
        type: 'fill-blank',
        correctAnswer: 'sit',
        explanation: '"Sit" = qu\'il soit. Esse au subj. prés. : sim, sis, sit, simus, sitis, sint.',
        hints: ['Qu\'il soit', 'Sit']
      }
    ]
  },

  // Latin 3ème - Exercice 2: Les propositions subordonnées
  {
    id: 'lat-3eme-002',
    title: 'Les propositions subordonnées latines',
    subject: 'latin',
    level: '3ème',
    difficulty: 4,
    description: 'Analyser et traduire les différentes propositions subordonnées',
    estimatedTime: 25,
    skills: ['Syntaxe', 'Subordonnées', 'Traduction'],
    questions: [
      {
        id: 'q1',
        question: 'Quel mot introduit une proposition finale (but) ?',
        type: 'multiple-choice',
        options: ['Ut', 'Quod', 'Si', 'Cum'],
        correctAnswer: 'Ut',
        explanation: '"Ut" + subjonctif introduit une proposition de but : "Venit ut videat" = Il vient pour voir.',
        hints: ['But', 'Ut']
      },
      {
        id: 'q2',
        question: '"Dico te venire" signifie :',
        type: 'multiple-choice',
        options: ['Je dis que tu viens', 'Je te dis de venir', 'Tu dis que je viens', 'Dis-moi que tu viens'],
        correctAnswer: 'Je dis que tu viens',
        explanation: 'Proposition infinitive : accusatif sujet (te) + infinitif (venire).',
        hints: ['Infinitive', 'Accusatif + infinitif']
      },
      {
        id: 'q3',
        question: 'Comment traduit-on "cum" + indicatif ?',
        type: 'multiple-choice',
        options: ['Quand/lorsque', 'Bien que', 'Pour que', 'Si'],
        correctAnswer: 'Quand/lorsque',
        explanation: '"Cum" + indicatif = quand (temps). "Cum" + subjonctif = comme, alors que.',
        hints: ['Temps', 'Quand']
      },
      {
        id: 'q4',
        question: '"Si veniat, laetus ero" est une proposition :',
        type: 'multiple-choice',
        options: ['Conditionnelle (potentiel)', 'Finale', 'Causale', 'Concessive'],
        correctAnswer: 'Conditionnelle (potentiel)',
        explanation: 'Si + subjonctif présent = condition possible (potentiel).',
        hints: ['Si', 'Condition']
      },
      {
        id: 'q5',
        question: 'Quel est le mode de la proposition infinitive en latin ?',
        type: 'fill-blank',
        correctAnswer: 'infinitif',
        explanation: 'La proposition infinitive a son verbe à l\'infinitif et son sujet à l\'accusatif.',
        hints: ['Accusatif + infinitif', 'Infinitif']
      },
      {
        id: 'q6',
        question: '"Quod" + indicatif introduit une proposition :',
        type: 'multiple-choice',
        options: ['Causale', 'Finale', 'Conditionnelle', 'Concessive'],
        correctAnswer: 'Causale',
        explanation: '"Quod" + indicatif = parce que (cause réelle).',
        hints: ['Cause', 'Parce que']
      },
      {
        id: 'q7',
        question: '"Timeo ne veniat" signifie :',
        type: 'multiple-choice',
        options: ['Je crains qu\'il ne vienne', 'Je crains qu\'il ne vienne pas', 'J\'espère qu\'il vient', 'Je sais qu\'il vient'],
        correctAnswer: 'Je crains qu\'il ne vienne',
        explanation: 'Après verbes de crainte, "ne" = que (craint), "ne non" = que ne pas.',
        hints: ['Crainte', 'Ne']
      },
      {
        id: 'q8',
        question: 'Comment s\'appelle la construction accusatif + infinitif ?',
        type: 'fill-blank',
        correctAnswer: 'proposition infinitive',
        explanation: 'La proposition infinitive est caractéristique du latin.',
        hints: ['Infinitive', 'Accusatif']
      },
      {
        id: 'q9',
        question: '"Quamquam" introduit une proposition :',
        type: 'multiple-choice',
        options: ['Concessive', 'Causale', 'Finale', 'Conditionnelle'],
        correctAnswer: 'Concessive',
        explanation: '"Quamquam" + indicatif = bien que, quoique (concession).',
        hints: ['Bien que', 'Concession']
      },
      {
        id: 'q10',
        question: '"Ubi venit, laetus fui" signifie :',
        type: 'multiple-choice',
        options: ['Quand il vint, je fus heureux', 'Où il vient, je suis heureux', 'S\'il venait, je serais heureux', 'Pour qu\'il vienne'],
        correctAnswer: 'Quand il vint, je fus heureux',
        explanation: '"Ubi" + indicatif parfait = quand (temps ponctuel passé).',
        hints: ['Ubi', 'Quand']
      }
    ]
  },

  // Latin 3ème - Exercice 3: Textes et auteurs latins
  {
    id: 'lat-3eme-003',
    title: 'Les grands auteurs latins',
    subject: 'latin',
    level: '3ème',
    difficulty: 4,
    description: 'Connaître les principaux auteurs et œuvres de la littérature latine',
    estimatedTime: 20,
    skills: ['Littérature', 'Culture', 'Auteurs'],
    questions: [
      {
        id: 'q1',
        question: 'Qui a écrit l\'Énéide ?',
        type: 'multiple-choice',
        options: ['Virgile', 'Homère', 'Ovide', 'Horace'],
        correctAnswer: 'Virgile',
        explanation: 'Virgile (70-19 av. J.-C.) a écrit l\'Énéide, épopée fondatrice de Rome.',
        hints: ['Épopée', 'Énée']
      },
      {
        id: 'q2',
        question: 'Qui a écrit "De Bello Gallico" (La Guerre des Gaules) ?',
        type: 'fill-blank',
        correctAnswer: 'César',
        explanation: 'Jules César a écrit ses Commentaires sur la Guerre des Gaules.',
        hints: ['Gaules', 'Général']
      },
      {
        id: 'q3',
        question: 'Les "Métamorphoses" ont été écrites par :',
        type: 'multiple-choice',
        options: ['Ovide', 'Virgile', 'Tite-Live', 'Cicéron'],
        correctAnswer: 'Ovide',
        explanation: 'Ovide (43 av. J.-C. - 17 ap. J.-C.) a écrit les Métamorphoses, recueil de mythes.',
        hints: ['Mythologie', 'Transformations']
      },
      {
        id: 'q4',
        question: 'Qui est le plus célèbre orateur romain ?',
        type: 'multiple-choice',
        options: ['Cicéron', 'César', 'Sénèque', 'Pline'],
        correctAnswer: 'Cicéron',
        explanation: 'Cicéron (106-43 av. J.-C.) est le maître de l\'éloquence latine.',
        hints: ['Orateur', 'Éloquence']
      },
      {
        id: 'q5',
        question: 'Qui a écrit des tragédies et des lettres philosophiques ?',
        type: 'fill-blank',
        correctAnswer: 'Sénèque',
        explanation: 'Sénèque (4 av. J.-C. - 65 ap. J.-C.), philosophe stoïcien et précepteur de Néron.',
        hints: ['Stoïcien', 'Néron']
      },
      {
        id: 'q6',
        question: '"Ab Urbe Condita" est l\'œuvre de :',
        type: 'multiple-choice',
        options: ['Tite-Live', 'Tacite', 'Suétone', 'Salluste'],
        correctAnswer: 'Tite-Live',
        explanation: 'Tite-Live a écrit "Depuis la fondation de la Ville", histoire de Rome.',
        hints: ['Histoire', 'Rome']
      },
      {
        id: 'q7',
        question: 'Qui a écrit "Les Annales" et "Les Histoires" ?',
        type: 'multiple-choice',
        options: ['Tacite', 'Tite-Live', 'Suétone', 'Cicéron'],
        correctAnswer: 'Tacite',
        explanation: 'Tacite (55-120 ap. J.-C.) est l\'historien des premiers empereurs.',
        hints: ['Empereurs', 'Historien']
      },
      {
        id: 'q8',
        question: 'Quel poète a écrit les "Odes" et les "Satires" ?',
        type: 'fill-blank',
        correctAnswer: 'Horace',
        explanation: 'Horace (65-8 av. J.-C.), poète ami de Virgile et protégé de Mécène.',
        hints: ['Mécène', 'Odes']
      },
      {
        id: 'q9',
        question: 'Qui a écrit "Vie des douze Césars" ?',
        type: 'multiple-choice',
        options: ['Suétone', 'Tacite', 'Tite-Live', 'Pline'],
        correctAnswer: 'Suétone',
        explanation: 'Suétone (70-122 ap. J.-C.) a écrit les biographies des premiers empereurs.',
        hints: ['Césars', 'Biographies']
      },
      {
        id: 'q10',
        question: '"Carpe diem" (cueille le jour) est une expression de :',
        type: 'multiple-choice',
        options: ['Horace', 'Virgile', 'Ovide', 'Cicéron'],
        correctAnswer: 'Horace',
        explanation: '"Carpe diem" vient des Odes d\'Horace : profite du moment présent.',
        hints: ['Odes', 'Moment présent']
      }
    ]
  },

  // ========================================
  // ARABE - 6ème à 3ème (12 exercices)
  // ========================================

  // Arabe 6ème - Exercice 1: L'alphabet arabe
  {
    id: 'ar-6eme-001',
    title: 'L\'alphabet arabe',
    subject: 'arabe',
    level: '6ème',
    difficulty: 1,
    description: 'Découvrir les lettres de l\'alphabet arabe',
    estimatedTime: 20,
    skills: ['Alphabet', 'Écriture', 'Lecture'],
    questions: [
      {
        id: 'q1',
        question: 'Combien de lettres compte l\'alphabet arabe ?',
        type: 'multiple-choice',
        options: ['28 lettres', '26 lettres', '30 lettres', '24 lettres'],
        correctAnswer: '28 lettres',
        explanation: 'L\'alphabet arabe compte 28 lettres, toutes des consonnes.',
        hints: ['Plus que le français', '28']
      },
      {
        id: 'q2',
        question: 'Dans quel sens s\'écrit l\'arabe ?',
        type: 'multiple-choice',
        options: ['De droite à gauche', 'De gauche à droite', 'De haut en bas', 'De bas en haut'],
        correctAnswer: 'De droite à gauche',
        explanation: 'L\'arabe s\'écrit et se lit de droite à gauche.',
        hints: ['Contraire du français', 'Droite à gauche']
      },
      {
        id: 'q3',
        question: 'Quelle est la première lettre de l\'alphabet arabe ?',
        type: 'multiple-choice',
        options: ['Alif (ا)', 'Ba (ب)', 'Ta (ت)', 'Jim (ج)'],
        correctAnswer: 'Alif (ا)',
        explanation: 'Alif (ا) est la première lettre, équivalent de notre A.',
        hints: ['Première', 'A']
      },
      {
        id: 'q4',
        question: 'Comment s\'appellent les signes qui indiquent les voyelles courtes ?',
        type: 'multiple-choice',
        options: ['Les tashkil/voyelles', 'Les hamza', 'Les points', 'Les barres'],
        correctAnswer: 'Les tashkil/voyelles',
        explanation: 'Les tashkil (harakât) sont les signes diacritiques pour les voyelles courtes.',
        hints: ['Voyelles', 'Tashkil']
      },
      {
        id: 'q5',
        question: 'Combien de positions différentes peut avoir une lettre arabe dans un mot ?',
        type: 'multiple-choice',
        options: ['4 positions', '2 positions', '3 positions', '1 position'],
        correctAnswer: '4 positions',
        explanation: 'Isolée, initiale, médiane, finale - la lettre change de forme selon sa position.',
        hints: ['Plusieurs formes', '4']
      },
      {
        id: 'q6',
        question: 'Quelle voyelle courte correspond au son "a" ?',
        type: 'multiple-choice',
        options: ['Fatha (ـَ)', 'Kasra (ـِ)', 'Damma (ـُ)', 'Sukun (ـْ)'],
        correctAnswer: 'Fatha (ـَ)',
        explanation: 'La fatha est un petit trait au-dessus de la lettre qui donne le son "a".',
        hints: ['Son "a"', 'Trait au-dessus']
      },
      {
        id: 'q7',
        question: 'Les lettres arabes sont-elles en majuscules ou minuscules ?',
        type: 'multiple-choice',
        options: ['Il n\'y a pas de distinction', 'Majuscules uniquement', 'Minuscules uniquement', 'Les deux existent'],
        correctAnswer: 'Il n\'y a pas de distinction',
        explanation: 'L\'arabe ne fait pas de distinction majuscule/minuscule.',
        hints: ['Pas de différence', 'Une seule forme']
      },
      {
        id: 'q8',
        question: 'Quelle lettre représente le son "B" ?',
        type: 'multiple-choice',
        options: ['Ba (ب)', 'Ta (ت)', 'Tha (ث)', 'Nun (ن)'],
        correctAnswer: 'Ba (ب)',
        explanation: 'Ba (ب) est la deuxième lettre, avec un point en dessous.',
        hints: ['Deuxième lettre', 'Un point en bas']
      },
      {
        id: 'q9',
        question: 'Que signifie le sukun (ـْ) sur une lettre ?',
        type: 'multiple-choice',
        options: ['Pas de voyelle', 'Voyelle "a"', 'Voyelle "i"', 'Voyelle "ou"'],
        correctAnswer: 'Pas de voyelle',
        explanation: 'Le sukun (petit cercle) indique l\'absence de voyelle après la consonne.',
        hints: ['Silence', 'Pas de voyelle']
      },
      {
        id: 'q10',
        question: 'Les chiffres arabes s\'écrivent-ils aussi de droite à gauche ?',
        type: 'multiple-choice',
        options: ['Non, de gauche à droite', 'Oui, de droite à gauche', 'De haut en bas', 'Dans les deux sens'],
        correctAnswer: 'Non, de gauche à droite',
        explanation: 'Les chiffres s\'écrivent de gauche à droite, même en arabe.',
        hints: ['Nombres', 'Gauche à droite']
      }
    ]
  },

  // Arabe 6ème - Exercice 2: Salutations et présentations
  {
    id: 'ar-6eme-002',
    title: 'Salutations et présentations',
    subject: 'arabe',
    level: '6ème',
    difficulty: 1,
    description: 'Apprendre à saluer et se présenter en arabe',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Salutations', 'Présentation'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "Bonjour" (salutation musulmane) en arabe ?',
        type: 'multiple-choice',
        options: ['As-salamu alaykum', 'Marhaba', 'Sabah al-khayr', 'Masa\' al-khayr'],
        correctAnswer: 'As-salamu alaykum',
        explanation: '"السلام عليكم" (As-salamu alaykum) = Que la paix soit sur vous.',
        hints: ['Paix', 'Salutation islamique']
      },
      {
        id: 'q2',
        question: 'Quelle est la réponse à "As-salamu alaykum" ?',
        type: 'multiple-choice',
        options: ['Wa alaykum as-salam', 'Shukran', 'Marhaba', 'Afwan'],
        correctAnswer: 'Wa alaykum as-salam',
        explanation: '"وعليكم السلام" = Et que la paix soit sur vous aussi.',
        hints: ['Et sur vous', 'Réponse']
      },
      {
        id: 'q3',
        question: 'Comment dit-on "Bonjour" (matin) ?',
        type: 'multiple-choice',
        options: ['Sabah al-khayr', 'Masa\' al-khayr', 'Marhaba', 'Ahlan'],
        correctAnswer: 'Sabah al-khayr',
        explanation: '"صباح الخير" (Sabah al-khayr) = Bonjour (le matin).',
        hints: ['Matin', 'Sabah']
      },
      {
        id: 'q4',
        question: 'Comment dit-on "Je m\'appelle..." en arabe ?',
        type: 'multiple-choice',
        options: ['Ismi...', 'Ana...', 'Huwa...', 'Anta...'],
        correctAnswer: 'Ismi...',
        explanation: '"اسمي" (Ismi) = Mon nom est...',
        hints: ['Nom', 'Ismi']
      },
      {
        id: 'q5',
        question: 'Que signifie "Shukran" ?',
        type: 'multiple-choice',
        options: ['Merci', 'S\'il vous plaît', 'De rien', 'Au revoir'],
        correctAnswer: 'Merci',
        explanation: '"شكراً" (Shukran) = Merci.',
        hints: ['Gratitude', 'Shukran']
      },
      {
        id: 'q6',
        question: 'Comment dit-on "Bonsoir" en arabe ?',
        type: 'multiple-choice',
        options: ['Masa\' al-khayr', 'Sabah al-khayr', 'Layla sa\'ida', 'Marhaba'],
        correctAnswer: 'Masa\' al-khayr',
        explanation: '"مساء الخير" (Masa\' al-khayr) = Bonsoir.',
        hints: ['Soir', 'Masa']
      },
      {
        id: 'q7',
        question: 'Que signifie "Afwan" ?',
        type: 'multiple-choice',
        options: ['De rien / Pardon', 'Merci', 'Bonjour', 'Au revoir'],
        correctAnswer: 'De rien / Pardon',
        explanation: '"عفواً" (Afwan) = De rien / Excuse-moi.',
        hints: ['Réponse à shukran', 'Pardon']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "Comment vas-tu ?" (à un homme) ?',
        type: 'multiple-choice',
        options: ['Kayfa haluka?', 'Kayfa haluki?', 'Ma ismuka?', 'Min ayna anta?'],
        correctAnswer: 'Kayfa haluka?',
        explanation: '"كيف حالك؟" (Kayfa haluka?) au masculin.',
        hints: ['Masculin', 'Haluka']
      },
      {
        id: 'q9',
        question: 'Comment dit-on "Au revoir" en arabe ?',
        type: 'multiple-choice',
        options: ['Ma\'a as-salama', 'As-salamu alaykum', 'Shukran', 'Marhaba'],
        correctAnswer: 'Ma\'a as-salama',
        explanation: '"مع السلامة" (Ma\'a as-salama) = Avec la paix / Au revoir.',
        hints: ['Départ', 'Salama']
      },
      {
        id: 'q10',
        question: 'Que signifie "Ana bikhayr" ?',
        type: 'multiple-choice',
        options: ['Je vais bien', 'Je suis fatigué', 'J\'ai faim', 'Je suis content'],
        correctAnswer: 'Je vais bien',
        explanation: '"أنا بخير" (Ana bikhayr) = Je vais bien (réponse à Kayfa haluk).',
        hints: ['Bien', 'Réponse']
      }
    ]
  },

  // Arabe 6ème - Exercice 3: Les nombres de 1 à 10
  {
    id: 'ar-6eme-003',
    title: 'Les nombres de 1 à 10',
    subject: 'arabe',
    level: '6ème',
    difficulty: 1,
    description: 'Apprendre les nombres de 1 à 10 en arabe',
    estimatedTime: 15,
    skills: ['Nombres', 'Vocabulaire', 'Compter'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "un" (1) en arabe ?',
        type: 'multiple-choice',
        options: ['Wahid', 'Ithnan', 'Thalatha', 'Sifr'],
        correctAnswer: 'Wahid',
        explanation: '"واحد" (Wahid) = 1.',
        hints: ['Premier', 'Wahid']
      },
      {
        id: 'q2',
        question: 'Comment dit-on "deux" (2) en arabe ?',
        type: 'multiple-choice',
        options: ['Ithnan', 'Wahid', 'Thalatha', 'Arba\'a'],
        correctAnswer: 'Ithnan',
        explanation: '"اثنان" (Ithnan) = 2.',
        hints: ['Deuxième', 'Ithnan']
      },
      {
        id: 'q3',
        question: 'Quel nombre est "khamsa" ?',
        type: 'multiple-choice',
        options: ['5', '4', '6', '7'],
        correctAnswer: '5',
        explanation: '"خمسة" (Khamsa) = 5.',
        hints: ['Main', 'Cinq doigts']
      },
      {
        id: 'q4',
        question: 'Comment dit-on "dix" (10) en arabe ?',
        type: 'multiple-choice',
        options: ['\'Ashara', 'Tis\'a', 'Thamaniya', 'Sab\'a'],
        correctAnswer: '\'Ashara',
        explanation: '"عشرة" (\'Ashara) = 10.',
        hints: ['Dizaine', '\'Ashara']
      },
      {
        id: 'q5',
        question: 'Quel nombre est "sab\'a" ?',
        type: 'multiple-choice',
        options: ['7', '6', '8', '9'],
        correctAnswer: '7',
        explanation: '"سبعة" (Sab\'a) = 7.',
        hints: ['Sept', 'Sab\'a']
      },
      {
        id: 'q6',
        question: 'Comment dit-on "trois" (3) en arabe ?',
        type: 'multiple-choice',
        options: ['Thalatha', 'Ithnan', 'Arba\'a', 'Wahid'],
        correctAnswer: 'Thalatha',
        explanation: '"ثلاثة" (Thalatha) = 3.',
        hints: ['Trois', 'Thalatha']
      },
      {
        id: 'q7',
        question: 'Quel nombre est "sitta" ?',
        type: 'multiple-choice',
        options: ['6', '5', '7', '4'],
        correctAnswer: '6',
        explanation: '"ستة" (Sitta) = 6.',
        hints: ['Six', 'Sitta']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "zéro" en arabe ?',
        type: 'multiple-choice',
        options: ['Sifr', 'Wahid', 'Null', 'Zero'],
        correctAnswer: 'Sifr',
        explanation: '"صفر" (Sifr) = 0. Ce mot a donné "chiffre" en français !',
        hints: ['Rien', 'Origine du mot chiffre']
      },
      {
        id: 'q9',
        question: 'Quel nombre est "tis\'a" ?',
        type: 'multiple-choice',
        options: ['9', '8', '10', '7'],
        correctAnswer: '9',
        explanation: '"تسعة" (Tis\'a) = 9.',
        hints: ['Neuf', 'Avant dix']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "quatre" (4) en arabe ?',
        type: 'multiple-choice',
        options: ['Arba\'a', 'Thalatha', 'Khamsa', 'Sitta'],
        correctAnswer: 'Arba\'a',
        explanation: '"أربعة" (Arba\'a) = 4.',
        hints: ['Quatre', 'Arba\'a']
      }
    ]
  },

  // Arabe 5ème - Exercice 1: Les pronoms personnels
  {
    id: 'ar-5eme-001',
    title: 'Les pronoms personnels',
    subject: 'arabe',
    level: '5ème',
    difficulty: 2,
    description: 'Maîtriser les pronoms personnels en arabe',
    estimatedTime: 20,
    skills: ['Grammaire', 'Pronoms', 'Genre'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "je" en arabe ?',
        type: 'multiple-choice',
        options: ['Ana', 'Anta', 'Huwa', 'Nahnu'],
        correctAnswer: 'Ana',
        explanation: '"أنا" (Ana) = Je.',
        hints: ['Première personne', 'Ana']
      },
      {
        id: 'q2',
        question: 'Comment dit-on "tu" (masculin) en arabe ?',
        type: 'multiple-choice',
        options: ['Anta', 'Anti', 'Ana', 'Huwa'],
        correctAnswer: 'Anta',
        explanation: '"أنتَ" (Anta) = Tu (masculin).',
        hints: ['Masculin', 'Anta']
      },
      {
        id: 'q3',
        question: 'Quelle est la différence entre "anta" et "anti" ?',
        type: 'multiple-choice',
        options: ['Masculin vs féminin', 'Singulier vs pluriel', 'Formel vs informel', 'Aucune différence'],
        correctAnswer: 'Masculin vs féminin',
        explanation: '"Anta" = tu (masc.), "Anti" = tu (fém.). L\'arabe distingue le genre.',
        hints: ['Genre', 'Masculin/féminin']
      },
      {
        id: 'q4',
        question: 'Comment dit-on "il" en arabe ?',
        type: 'multiple-choice',
        options: ['Huwa', 'Hiya', 'Anta', 'Ana'],
        correctAnswer: 'Huwa',
        explanation: '"هو" (Huwa) = Il.',
        hints: ['3e personne masculin', 'Huwa']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "elle" en arabe ?',
        type: 'multiple-choice',
        options: ['Hiya', 'Huwa', 'Anti', 'Ana'],
        correctAnswer: 'Hiya',
        explanation: '"هي" (Hiya) = Elle.',
        hints: ['3e personne féminin', 'Hiya']
      },
      {
        id: 'q6',
        question: 'Comment dit-on "nous" en arabe ?',
        type: 'multiple-choice',
        options: ['Nahnu', 'Hum', 'Antum', 'Ana'],
        correctAnswer: 'Nahnu',
        explanation: '"نحن" (Nahnu) = Nous.',
        hints: ['1re personne pluriel', 'Nahnu']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "vous" (pluriel masculin) en arabe ?',
        type: 'multiple-choice',
        options: ['Antum', 'Antunna', 'Nahnu', 'Hum'],
        correctAnswer: 'Antum',
        explanation: '"أنتم" (Antum) = Vous (masculin pluriel ou mixte).',
        hints: ['Pluriel masculin', 'Antum']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "ils" en arabe ?',
        type: 'multiple-choice',
        options: ['Hum', 'Hunna', 'Huwa', 'Nahnu'],
        correctAnswer: 'Hum',
        explanation: '"هم" (Hum) = Ils.',
        hints: ['3e personne masculin pluriel', 'Hum']
      },
      {
        id: 'q9',
        question: 'Que signifie "Hunna" ?',
        type: 'multiple-choice',
        options: ['Elles', 'Ils', 'Vous (fém.)', 'Nous'],
        correctAnswer: 'Elles',
        explanation: '"هن" (Hunna) = Elles (féminin pluriel).',
        hints: ['Féminin pluriel', 'Elles']
      },
      {
        id: 'q10',
        question: 'L\'arabe a-t-il une forme de duel (2 personnes) ?',
        type: 'multiple-choice',
        options: ['Oui', 'Non', 'Seulement pour les objets', 'Seulement à l\'écrit'],
        correctAnswer: 'Oui',
        explanation: 'L\'arabe a un duel pour 2 personnes/choses : "huma" (eux deux), "antuma" (vous deux).',
        hints: ['Deux', 'Duel']
      }
    ]
  },

  // Arabe 5ème - Exercice 2: La famille
  {
    id: 'ar-5eme-002',
    title: 'Le vocabulaire de la famille',
    subject: 'arabe',
    level: '5ème',
    difficulty: 2,
    description: 'Apprendre le vocabulaire de la famille en arabe',
    estimatedTime: 15,
    skills: ['Vocabulaire', 'Famille', 'Quotidien'],
    questions: [
      {
        id: 'q1',
        question: 'Comment dit-on "père" en arabe ?',
        type: 'multiple-choice',
        options: ['Ab', 'Umm', 'Akh', 'Ibn'],
        correctAnswer: 'Ab',
        explanation: '"أب" (Ab) = Père.',
        hints: ['Papa', 'Ab']
      },
      {
        id: 'q2',
        question: 'Comment dit-on "mère" en arabe ?',
        type: 'multiple-choice',
        options: ['Umm', 'Ab', 'Ukht', 'Bint'],
        correctAnswer: 'Umm',
        explanation: '"أم" (Umm) = Mère.',
        hints: ['Maman', 'Umm']
      },
      {
        id: 'q3',
        question: 'Que signifie "akh" ?',
        type: 'multiple-choice',
        options: ['Frère', 'Sœur', 'Oncle', 'Cousin'],
        correctAnswer: 'Frère',
        explanation: '"أخ" (Akh) = Frère.',
        hints: ['Masculin', 'Frère']
      },
      {
        id: 'q4',
        question: 'Comment dit-on "sœur" en arabe ?',
        type: 'multiple-choice',
        options: ['Ukht', 'Akh', 'Bint', 'Umm'],
        correctAnswer: 'Ukht',
        explanation: '"أخت" (Ukht) = Sœur.',
        hints: ['Féminin de akh', 'Ukht']
      },
      {
        id: 'q5',
        question: 'Que signifie "ibn" ?',
        type: 'multiple-choice',
        options: ['Fils', 'Fille', 'Frère', 'Père'],
        correctAnswer: 'Fils',
        explanation: '"ابن" (Ibn) = Fils. Très courant dans les noms arabes.',
        hints: ['Masculin', 'Fils']
      },
      {
        id: 'q6',
        question: 'Comment dit-on "fille" en arabe ?',
        type: 'multiple-choice',
        options: ['Bint', 'Ibn', 'Ukht', 'Umm'],
        correctAnswer: 'Bint',
        explanation: '"بنت" (Bint) = Fille.',
        hints: ['Féminin de ibn', 'Bint']
      },
      {
        id: 'q7',
        question: 'Que signifie "jadd" ?',
        type: 'multiple-choice',
        options: ['Grand-père', 'Grand-mère', 'Oncle', 'Cousin'],
        correctAnswer: 'Grand-père',
        explanation: '"جد" (Jadd) = Grand-père.',
        hints: ['Masculin', 'Aîné']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "grand-mère" en arabe ?',
        type: 'multiple-choice',
        options: ['Jadda', 'Jadd', 'Umm', 'Khala'],
        correctAnswer: 'Jadda',
        explanation: '"جدة" (Jadda) = Grand-mère.',
        hints: ['Féminin de jadd', 'Jadda']
      },
      {
        id: 'q9',
        question: 'Que signifie "\'amm" ?',
        type: 'multiple-choice',
        options: ['Oncle paternel', 'Oncle maternel', 'Cousin', 'Neveu'],
        correctAnswer: 'Oncle paternel',
        explanation: '"عم" (\'Amm) = Oncle paternel (frère du père).',
        hints: ['Côté père', 'Oncle']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "famille" en arabe ?',
        type: 'multiple-choice',
        options: ['Usra / A\'ila', 'Bayt', 'Nas', 'Qawm'],
        correctAnswer: 'Usra / A\'ila',
        explanation: '"أسرة" (Usra) ou "عائلة" (A\'ila) = Famille.',
        hints: ['Groupe familial', 'Usra']
      }
    ]
  },

  // Arabe 5ème - Exercice 3: Les articles et le genre
  {
    id: 'ar-5eme-003',
    title: 'Les articles et le genre',
    subject: 'arabe',
    level: '5ème',
    difficulty: 2,
    description: 'Comprendre les articles et le genre des noms en arabe',
    estimatedTime: 20,
    skills: ['Grammaire', 'Articles', 'Genre'],
    questions: [
      {
        id: 'q1',
        question: 'Quel est l\'article défini en arabe ?',
        type: 'multiple-choice',
        options: ['Al- (ال)', 'Un (أن)', 'La (لا)', 'Wa (و)'],
        correctAnswer: 'Al- (ال)',
        explanation: '"ال" (Al-) est l\'article défini unique en arabe.',
        hints: ['Le/la/les', 'Al']
      },
      {
        id: 'q2',
        question: 'Existe-t-il un article indéfini en arabe ?',
        type: 'multiple-choice',
        options: ['Non, absence d\'article = indéfini', 'Oui, c\'est "un"', 'Oui, c\'est "wa"', 'Oui, c\'est "bi"'],
        correctAnswer: 'Non, absence d\'article = indéfini',
        explanation: 'L\'arabe n\'a pas d\'article indéfini. Un nom sans "al" est indéfini.',
        hints: ['Pas d\'article', 'Indéfini']
      },
      {
        id: 'q3',
        question: '"Kitab" signifie "livre". Comment dit-on "le livre" ?',
        type: 'multiple-choice',
        options: ['Al-kitab', 'Kitab al', 'Al kitab al', 'Kitabun'],
        correctAnswer: 'Al-kitab',
        explanation: 'On ajoute "al-" devant le nom : "الكتاب" (al-kitab) = le livre.',
        hints: ['Al + nom', 'Al-kitab']
      },
      {
        id: 'q4',
        question: 'Comment reconnaît-on généralement un nom féminin en arabe ?',
        type: 'multiple-choice',
        options: ['Il se termine par "a" (ة)', 'Il se termine par "un"', 'Il commence par "al"', 'Il n\'y a pas de règle'],
        correctAnswer: 'Il se termine par "a" (ة)',
        explanation: 'La marque du féminin est souvent "ة" (ta marbuta) qui se prononce "a".',
        hints: ['Ta marbuta', 'ة']
      },
      {
        id: 'q5',
        question: '"Mudarris" = professeur (masc.). Comment dit-on "professeure" (fém.) ?',
        type: 'multiple-choice',
        options: ['Mudarrisa', 'Mudarrisun', 'Al-mudarris', 'Mudarrisat'],
        correctAnswer: 'Mudarrisa',
        explanation: 'On ajoute "a" (ة) pour le féminin : "مدرسة" (mudarrisa).',
        hints: ['Ajout de a', 'Féminin']
      },
      {
        id: 'q6',
        question: 'L\'arabe a-t-il un genre neutre ?',
        type: 'multiple-choice',
        options: ['Non, seulement masculin et féminin', 'Oui', 'Seulement pour les objets', 'Parfois'],
        correctAnswer: 'Non, seulement masculin et féminin',
        explanation: 'L\'arabe n\'a que deux genres : masculin et féminin.',
        hints: ['Deux genres', 'Pas de neutre']
      },
      {
        id: 'q7',
        question: 'Que se passe-t-il quand "al" rencontre une "lettre solaire" ?',
        type: 'multiple-choice',
        options: ['Le "l" s\'assimile', 'On double le "al"', 'On supprime le "al"', 'Rien ne change'],
        correctAnswer: 'Le "l" s\'assimile',
        explanation: 'Devant les lettres solaires (t, d, n, r...), le "l" de "al" se prononce comme cette lettre.',
        hints: ['Assimilation', 'Lettre solaire']
      },
      {
        id: 'q8',
        question: '"Shams" (soleil) avec l\'article se prononce :',
        type: 'multiple-choice',
        options: ['Ash-shams', 'Al-shams', 'A-shams', 'Alsh-shams'],
        correctAnswer: 'Ash-shams',
        explanation: '"ش" (shin) est une lettre solaire, donc "الشمس" se prononce "ash-shams".',
        hints: ['Lettre solaire', 'Assimilation']
      },
      {
        id: 'q9',
        question: '"Qamar" (lune) avec l\'article se prononce :',
        type: 'multiple-choice',
        options: ['Al-qamar', 'Aq-qamar', 'A-qamar', 'Alq-qamar'],
        correctAnswer: 'Al-qamar',
        explanation: '"ق" (qaf) est une lettre lunaire, donc "القمر" se prononce "al-qamar".',
        hints: ['Lettre lunaire', 'Pas d\'assimilation']
      },
      {
        id: 'q10',
        question: 'Comment dit-on "les livres" (pluriel) ?',
        type: 'multiple-choice',
        options: ['Al-kutub', 'Al-kitaban', 'Kitabat', 'Kutubun'],
        correctAnswer: 'Al-kutub',
        explanation: '"الكتب" (al-kutub) = les livres. Le pluriel en arabe est souvent irrégulier.',
        hints: ['Pluriel brisé', 'Kutub']
      }
    ]
  },

  // Arabe 4ème - Exercice 1: Le verbe au présent
  {
    id: 'ar-4eme-001',
    title: 'Le verbe au présent (inaccompli)',
    subject: 'arabe',
    level: '4ème',
    difficulty: 3,
    description: 'Conjuguer les verbes arabes au présent (mudari\')',
    estimatedTime: 25,
    skills: ['Conjugaison', 'Présent', 'Verbes'],
    questions: [
      {
        id: 'q1',
        question: 'Comment appelle-t-on le présent en grammaire arabe ?',
        type: 'multiple-choice',
        options: ['Al-mudari\'', 'Al-madi', 'Al-amr', 'Al-masdar'],
        correctAnswer: 'Al-mudari\'',
        explanation: '"المضارع" (al-mudari\') = le présent/inaccompli.',
        hints: ['Inaccompli', 'Mudari\'']
      },
      {
        id: 'q2',
        question: 'Quel préfixe utilise-t-on pour "je" au présent ?',
        type: 'multiple-choice',
        options: ['أ (a-)', 'ي (ya-)', 'ت (ta-)', 'ن (na-)'],
        correctAnswer: 'أ (a-)',
        explanation: 'Pour "ana" (je), on utilise le préfixe "أ" : أكتب (aktub) = j\'écris.',
        hints: ['Ana', 'Alif']
      },
      {
        id: 'q3',
        question: 'Le verbe "kataba" (il a écrit) au présent "il écrit" devient :',
        type: 'multiple-choice',
        options: ['Yaktub', 'Aktub', 'Taktub', 'Naktub'],
        correctAnswer: 'Yaktub',
        explanation: '"يكتب" (yaktub) = il écrit. Préfixe "ي" pour huwa.',
        hints: ['Ya-', 'Il']
      },
      {
        id: 'q4',
        question: 'Quel préfixe utilise-t-on pour "tu" (masc.) au présent ?',
        type: 'multiple-choice',
        options: ['ت (ta-)', 'أ (a-)', 'ي (ya-)', 'ن (na-)'],
        correctAnswer: 'ت (ta-)',
        explanation: 'Pour "anta", préfixe "ت" : تكتب (taktub) = tu écris (masc.).',
        hints: ['Anta', 'Ta']
      },
      {
        id: 'q5',
        question: '"Naktub" signifie :',
        type: 'multiple-choice',
        options: ['Nous écrivons', 'Ils écrivent', 'Tu écris', 'J\'écris'],
        correctAnswer: 'Nous écrivons',
        explanation: '"نكتب" (naktub) = nous écrivons. Préfixe "ن" pour nahnu.',
        hints: ['Na-', 'Nous']
      },
      {
        id: 'q6',
        question: 'La racine de "kataba" (écrire) est :',
        type: 'multiple-choice',
        options: ['K-T-B', 'K-A-T', 'T-A-B', 'K-T-A'],
        correctAnswer: 'K-T-B',
        explanation: 'La racine trilittère est ك-ت-ب (K-T-B), liée à l\'écriture.',
        hints: ['Trois consonnes', 'K-T-B']
      },
      {
        id: 'q7',
        question: 'Comment dit-on "elle écrit" ?',
        type: 'multiple-choice',
        options: ['Taktub', 'Yaktub', 'Aktub', 'Naktub'],
        correctAnswer: 'Taktub',
        explanation: '"تكتب" (taktub) = elle écrit. Même préfixe que "tu" mais contexte différent.',
        hints: ['Ta-', 'Elle aussi']
      },
      {
        id: 'q8',
        question: '"Yaqra\'" signifie :',
        type: 'multiple-choice',
        options: ['Il lit', 'Il écrit', 'Il parle', 'Il mange'],
        correctAnswer: 'Il lit',
        explanation: '"يقرأ" (yaqra\') = il lit. Racine Q-R-\' (lecture, Coran).',
        hints: ['Qur\'an', 'Lecture']
      },
      {
        id: 'q9',
        question: 'Comment dit-on "ils écrivent" ?',
        type: 'multiple-choice',
        options: ['Yaktubun', 'Taktubun', 'Yaktub', 'Naktub'],
        correctAnswer: 'Yaktubun',
        explanation: '"يكتبون" (yaktubun) = ils écrivent. Préfixe "ي" + suffixe "-un".',
        hints: ['Ya- + -un', 'Pluriel']
      },
      {
        id: 'q10',
        question: 'En arabe, le verbe s\'accorde en :',
        type: 'multiple-choice',
        options: ['Genre et nombre', 'Nombre seulement', 'Genre seulement', 'Rien'],
        correctAnswer: 'Genre et nombre',
        explanation: 'Le verbe arabe s\'accorde en genre (masc./fém.) et en nombre (sing./duel/plur.).',
        hints: ['Deux critères', 'Genre et nombre']
      }
    ]
  },

  // Arabe 4ème - Exercice 2: Le verbe au passé
  {
    id: 'ar-4eme-002',
    title: 'Le verbe au passé (accompli)',
    subject: 'arabe',
    level: '4ème',
    difficulty: 3,
    description: 'Conjuguer les verbes arabes au passé (madi)',
    estimatedTime: 25,
    skills: ['Conjugaison', 'Passé', 'Accompli'],
    questions: [
      {
        id: 'q1',
        question: 'Comment appelle-t-on le passé en grammaire arabe ?',
        type: 'multiple-choice',
        options: ['Al-madi', 'Al-mudari\'', 'Al-amr', 'Al-masdar'],
        correctAnswer: 'Al-madi',
        explanation: '"الماضي" (al-madi) = le passé/accompli.',
        hints: ['Accompli', 'Madi']
      },
      {
        id: 'q2',
        question: '"Kataba" signifie :',
        type: 'multiple-choice',
        options: ['Il a écrit', 'Il écrit', 'Écris !', 'Écrire'],
        correctAnswer: 'Il a écrit',
        explanation: '"كتب" (kataba) = il a écrit. Forme de base du verbe arabe.',
        hints: ['Passé', '3e pers. masc.']
      },
      {
        id: 'q3',
        question: 'Au passé, les terminaisons sont-elles des préfixes ou des suffixes ?',
        type: 'multiple-choice',
        options: ['Des suffixes', 'Des préfixes', 'Les deux', 'Aucun'],
        correctAnswer: 'Des suffixes',
        explanation: 'Au passé (madi), on ajoute des suffixes : katabtu (j\'ai écrit), katabta (tu as écrit)...',
        hints: ['Fin du mot', 'Suffixes']
      },
      {
        id: 'q4',
        question: 'Comment dit-on "j\'ai écrit" ?',
        type: 'multiple-choice',
        options: ['Katabtu', 'Kataba', 'Katabta', 'Katabna'],
        correctAnswer: 'Katabtu',
        explanation: '"كتبت" (katabtu) = j\'ai écrit. Suffixe "-tu" pour ana.',
        hints: ['-tu', 'Je']
      },
      {
        id: 'q5',
        question: 'Comment dit-on "tu as écrit" (masculin) ?',
        type: 'multiple-choice',
        options: ['Katabta', 'Katabti', 'Katabtu', 'Kataba'],
        correctAnswer: 'Katabta',
        explanation: '"كتبتَ" (katabta) = tu as écrit (masc.). Suffixe "-ta".',
        hints: ['-ta', 'Masculin']
      },
      {
        id: 'q6',
        question: 'Quelle est la différence entre "katabta" et "katabti" ?',
        type: 'multiple-choice',
        options: ['Masculin vs féminin', 'Singulier vs pluriel', 'Passé vs présent', 'Aucune'],
        correctAnswer: 'Masculin vs féminin',
        explanation: 'Katabta = tu as écrit (masc.), Katabti = tu as écrit (fém.).',
        hints: ['Genre', 'Tu (masc./fém.)']
      },
      {
        id: 'q7',
        question: '"Katabna" signifie :',
        type: 'multiple-choice',
        options: ['Nous avons écrit', 'Ils ont écrit', 'Elles ont écrit', 'Vous avez écrit'],
        correctAnswer: 'Nous avons écrit',
        explanation: '"كتبنا" (katabna) = nous avons écrit. Suffixe "-na".',
        hints: ['-na', 'Nous']
      },
      {
        id: 'q8',
        question: 'Comment dit-on "elle a écrit" ?',
        type: 'multiple-choice',
        options: ['Katabat', 'Kataba', 'Katabta', 'Katabti'],
        correctAnswer: 'Katabat',
        explanation: '"كتبت" (katabat) = elle a écrit. Suffixe "-at" pour hiya.',
        hints: ['-at', 'Elle']
      },
      {
        id: 'q9',
        question: '"Katabu" signifie :',
        type: 'multiple-choice',
        options: ['Ils ont écrit', 'Elles ont écrit', 'Nous avons écrit', 'Vous avez écrit'],
        correctAnswer: 'Ils ont écrit',
        explanation: '"كتبوا" (katabu) = ils ont écrit. Suffixe "-u" pour hum.',
        hints: ['-u', 'Ils']
      },
      {
        id: 'q10',
        question: 'La forme "kataba" sert de référence dans le dictionnaire car :',
        type: 'multiple-choice',
        options: ['C\'est la forme la plus simple', 'C\'est la plus utilisée', 'Elle est alphabétique', 'Elle est neutre'],
        correctAnswer: 'C\'est la forme la plus simple',
        explanation: 'La 3e personne masculin singulier du passé est la forme de base, sans affixes.',
        hints: ['Base', 'Simple']
      }
    ]
  },

  // Arabe 4ème - Exercice 3: La phrase nominale
  {
    id: 'ar-4eme-003',
    title: 'La phrase nominale',
    subject: 'arabe',
    level: '4ème',
    difficulty: 3,
    description: 'Comprendre la structure de la phrase nominale en arabe',
    estimatedTime: 20,
    skills: ['Grammaire', 'Syntaxe', 'Phrase nominale'],
    questions: [
      {
        id: 'q1',
        question: 'Par quoi commence une phrase nominale en arabe ?',
        type: 'multiple-choice',
        options: ['Un nom ou pronom', 'Un verbe', 'Une préposition', 'Un adverbe'],
        correctAnswer: 'Un nom ou pronom',
        explanation: 'La phrase nominale (jumla ismiyya) commence par un nom ou pronom.',
        hints: ['Ismiyya', 'Nom']
      },
      {
        id: 'q2',
        question: 'Comment appelle-t-on le sujet d\'une phrase nominale ?',
        type: 'multiple-choice',
        options: ['Mubtada\'', 'Khabar', 'Fa\'il', 'Maf\'ul'],
        correctAnswer: 'Mubtada\'',
        explanation: '"مبتدأ" (mubtada\') = le sujet/thème de la phrase nominale.',
        hints: ['Début', 'Sujet']
      },
      {
        id: 'q3',
        question: 'Comment appelle-t-on le prédicat d\'une phrase nominale ?',
        type: 'multiple-choice',
        options: ['Khabar', 'Mubtada\'', 'Fa\'il', 'Sifa'],
        correctAnswer: 'Khabar',
        explanation: '"خبر" (khabar) = le prédicat/information sur le sujet.',
        hints: ['Information', 'Prédicat']
      },
      {
        id: 'q4',
        question: '"Al-bayt kabirun" signifie :',
        type: 'multiple-choice',
        options: ['La maison est grande', 'La grande maison', 'Une maison grande', 'Dans la maison'],
        correctAnswer: 'La maison est grande',
        explanation: 'Phrase nominale : al-bayt (mubtada\') + kabirun (khabar) = La maison [est] grande.',
        hints: ['Sujet + attribut', 'Sans verbe être']
      },
      {
        id: 'q5',
        question: 'Le verbe "être" au présent est-il nécessaire en arabe ?',
        type: 'multiple-choice',
        options: ['Non, il est sous-entendu', 'Oui, toujours', 'Seulement à l\'écrit', 'Seulement au pluriel'],
        correctAnswer: 'Non, il est sous-entendu',
        explanation: 'En arabe, le verbe "être" au présent est généralement omis.',
        hints: ['Pas de "est"', 'Sous-entendu']
      },
      {
        id: 'q6',
        question: '"Ana talib" signifie :',
        type: 'multiple-choice',
        options: ['Je suis étudiant', 'L\'étudiant', 'Un étudiant', 'Mon étudiant'],
        correctAnswer: 'Je suis étudiant',
        explanation: 'Ana (je) + talib (étudiant) = Je [suis] étudiant.',
        hints: ['Ana = je', 'Phrase nominale']
      },
      {
        id: 'q7',
        question: 'Dans "al-kitab jadid", quel est le mubtada\' ?',
        type: 'multiple-choice',
        options: ['Al-kitab', 'Jadid', 'Al', 'Kitab'],
        correctAnswer: 'Al-kitab',
        explanation: '"Al-kitab" (le livre) est le sujet, "jadid" (nouveau) est le prédicat.',
        hints: ['Le livre', 'Sujet']
      },
      {
        id: 'q8',
        question: 'Le khabar s\'accorde-t-il avec le mubtada\' ?',
        type: 'multiple-choice',
        options: ['Oui, en genre et nombre', 'Non', 'Seulement en genre', 'Seulement en nombre'],
        correctAnswer: 'Oui, en genre et nombre',
        explanation: 'Le khabar s\'accorde avec le mubtada\' : al-bint jamila (la fille est belle).',
        hints: ['Accord', 'Genre et nombre']
      },
      {
        id: 'q9',
        question: '"Hiya taaliba" signifie :',
        type: 'multiple-choice',
        options: ['Elle est étudiante', 'L\'étudiante', 'Une étudiante', 'Il est étudiant'],
        correctAnswer: 'Elle est étudiante',
        explanation: 'Hiya (elle) + taaliba (étudiante) = Elle [est] étudiante.',
        hints: ['Hiya = elle', 'Féminin']
      },
      {
        id: 'q10',
        question: 'Quelle est la différence entre phrase nominale et phrase verbale ?',
        type: 'multiple-choice',
        options: ['Nominale commence par un nom, verbale par un verbe', 'Aucune différence', 'Nominale est au présent', 'Verbale est plus formelle'],
        correctAnswer: 'Nominale commence par un nom, verbale par un verbe',
        explanation: 'Phrase nominale : nom/pronom en premier. Phrase verbale : verbe en premier.',
        hints: ['Premier mot', 'Nom vs verbe']
      }
    ]
  },

  // Arabe 3ème - Exercice 1: Les formes dérivées du verbe
  {
    id: 'ar-3eme-001',
    title: 'Les formes dérivées du verbe',
    subject: 'arabe',
    level: '3ème',
    difficulty: 4,
    description: 'Découvrir les différentes formes (wazn) du verbe arabe',
    estimatedTime: 25,
    skills: ['Conjugaison', 'Formes verbales', 'Morphologie'],
    questions: [
      {
        id: 'q1',
        question: 'Combien de formes dérivées principales existe-t-il en arabe ?',
        type: 'multiple-choice',
        options: ['10 formes', '5 formes', '3 formes', '15 formes'],
        correctAnswer: '10 formes',
        explanation: 'Il y a 10 formes principales (I à X), chacune avec un sens particulier.',
        hints: ['Dix', '10']
      },
      {
        id: 'q2',
        question: 'La forme I (fa\'ala) est :',
        type: 'multiple-choice',
        options: ['La forme de base', 'Une forme intensive', 'Une forme passive', 'Une forme réciproque'],
        correctAnswer: 'La forme de base',
        explanation: 'La forme I est la forme simple, de base, du verbe.',
        hints: ['Simple', 'Base']
      },
      {
        id: 'q3',
        question: 'La forme II (fa\'\'ala) avec doublement exprime souvent :',
        type: 'multiple-choice',
        options: ['L\'intensif ou le causatif', 'Le réciproque', 'Le passif', 'Le réfléchi'],
        correctAnswer: 'L\'intensif ou le causatif',
        explanation: 'La forme II (doublement) : intensif ou causatif. Ex: \'allama (enseigner) de \'alima (savoir).',
        hints: ['Doublement', 'Intensif']
      },
      {
        id: 'q4',
        question: 'Si "\'alima" (forme I) = savoir, que signifie "\'allama" (forme II) ?',
        type: 'multiple-choice',
        options: ['Enseigner (faire savoir)', 'Apprendre', 'Savoir beaucoup', 'Ne pas savoir'],
        correctAnswer: 'Enseigner (faire savoir)',
        explanation: 'Forme II causative : faire faire l\'action. \'Alima (savoir) → \'Allama (faire savoir = enseigner).',
        hints: ['Causatif', 'Faire savoir']
      },
      {
        id: 'q5',
        question: 'La forme III (fa\'ala) exprime souvent :',
        type: 'multiple-choice',
        options: ['La réciprocité ou l\'effort', 'L\'intensif', 'Le passif', 'Le réfléchi'],
        correctAnswer: 'La réciprocité ou l\'effort',
        explanation: 'Forme III : action réciproque ou tentative. Ex: kataba (écrire) → kataba (correspondre).',
        hints: ['Réciprocité', 'Avec quelqu\'un']
      },
      {
        id: 'q6',
        question: 'La forme V (tafa\'\'ala) exprime souvent :',
        type: 'multiple-choice',
        options: ['Le réfléchi de la forme II', 'Le passif', 'L\'intensif', 'Le causatif'],
        correctAnswer: 'Le réfléchi de la forme II',
        explanation: 'Forme V : réfléchi de II. Ex: \'allama (enseigner) → ta\'allama (apprendre/s\'enseigner).',
        hints: ['Ta- + forme II', 'Réfléchi']
      },
      {
        id: 'q7',
        question: 'La forme VII (infa\'ala) exprime souvent :',
        type: 'multiple-choice',
        options: ['Le passif ou le réfléchi', 'Le causatif', 'L\'intensif', 'Le réciproque'],
        correctAnswer: 'Le passif ou le réfléchi',
        explanation: 'Forme VII : passif ou réfléchi. Ex: kasara (casser) → inkasara (se casser).',
        hints: ['In-', 'Passif']
      },
      {
        id: 'q8',
        question: 'La forme VIII (ifta\'ala) exprime souvent :',
        type: 'multiple-choice',
        options: ['Le réfléchi de la forme I', 'Le causatif', 'L\'intensif', 'Le passif'],
        correctAnswer: 'Le réfléchi de la forme I',
        explanation: 'Forme VIII : réfléchi de I. Ex: jama\'a (rassembler) → ijtama\'a (se rassembler).',
        hints: ['-t- infixe', 'Réfléchi']
      },
      {
        id: 'q9',
        question: 'La forme X (istaf\'ala) exprime souvent :',
        type: 'multiple-choice',
        options: ['La demande ou la considération', 'Le passif', 'L\'intensif', 'Le réciproque'],
        correctAnswer: 'La demande ou la considération',
        explanation: 'Forme X : demander/considérer. Ex: \'alima (savoir) → ista\'lama (demander des informations).',
        hints: ['Ista-', 'Demander']
      },
      {
        id: 'q10',
        question: 'Quel est l\'intérêt de connaître les formes dérivées ?',
        type: 'multiple-choice',
        options: ['Comprendre et créer des mots à partir d\'une racine', 'Seulement pour la grammaire', 'Pour l\'orthographe', 'Aucun intérêt pratique'],
        correctAnswer: 'Comprendre et créer des mots à partir d\'une racine',
        explanation: 'Les formes permettent de deviner le sens de mots inconnus et d\'enrichir son vocabulaire.',
        hints: ['Productivité', 'Création de mots']
      }
    ]
  },

  // Arabe 3ème - Exercice 2: La phrase verbale
  {
    id: 'ar-3eme-002',
    title: 'La phrase verbale',
    subject: 'arabe',
    level: '3ème',
    difficulty: 4,
    description: 'Maîtriser la structure de la phrase verbale en arabe',
    estimatedTime: 25,
    skills: ['Grammaire', 'Syntaxe', 'Phrase verbale'],
    questions: [
      {
        id: 'q1',
        question: 'Par quoi commence une phrase verbale (jumla fi\'liyya) ?',
        type: 'multiple-choice',
        options: ['Un verbe', 'Un nom', 'Une préposition', 'Un adverbe'],
        correctAnswer: 'Un verbe',
        explanation: 'La phrase verbale commence toujours par le verbe.',
        hints: ['Fi\'l', 'Verbe']
      },
      {
        id: 'q2',
        question: 'Comment appelle-t-on le sujet dans une phrase verbale ?',
        type: 'multiple-choice',
        options: ['Fa\'il', 'Mubtada\'', 'Khabar', 'Maf\'ul bih'],
        correctAnswer: 'Fa\'il',
        explanation: '"فاعل" (fa\'il) = le sujet/agent dans une phrase verbale.',
        hints: ['Agent', 'Celui qui fait']
      },
      {
        id: 'q3',
        question: 'Comment appelle-t-on le COD en arabe ?',
        type: 'multiple-choice',
        options: ['Maf\'ul bih', 'Fa\'il', 'Khabar', 'Sifa'],
        correctAnswer: 'Maf\'ul bih',
        explanation: '"مفعول به" (maf\'ul bih) = complément d\'objet direct.',
        hints: ['Objet', 'Ce qui subit']
      },
      {
        id: 'q4',
        question: 'Quel est l\'ordre typique de la phrase verbale arabe ?',
        type: 'multiple-choice',
        options: ['Verbe - Sujet - Complément', 'Sujet - Verbe - Complément', 'Complément - Verbe - Sujet', 'Sujet - Complément - Verbe'],
        correctAnswer: 'Verbe - Sujet - Complément',
        explanation: 'L\'ordre classique est VSO : Verbe + Sujet + Objet (complément).',
        hints: ['VSO', 'Verbe en premier']
      },
      {
        id: 'q5',
        question: '"Kataba at-tilmidhu ad-darsa" - quel est le sujet ?',
        type: 'multiple-choice',
        options: ['At-tilmidhu (l\'élève)', 'Kataba (a écrit)', 'Ad-darsa (la leçon)', 'Aucun'],
        correctAnswer: 'At-tilmidhu (l\'élève)',
        explanation: 'Kataba (V) + at-tilmidhu (S) + ad-darsa (COD) = L\'élève a écrit la leçon.',
        hints: ['Après le verbe', 'Qui fait l\'action']
      },
      {
        id: 'q6',
        question: 'Quand le sujet est un nom, le verbe s\'accorde-t-il toujours pleinement ?',
        type: 'multiple-choice',
        options: ['Non, il reste au singulier devant un sujet pluriel', 'Oui, toujours', 'Seulement en genre', 'Jamais'],
        correctAnswer: 'Non, il reste au singulier devant un sujet pluriel',
        explanation: 'Quand le verbe précède un sujet pluriel, il reste au singulier : "Ja\'a at-tullaabu" (les étudiants sont venus).',
        hints: ['Verbe singulier', 'Sujet pluriel']
      },
      {
        id: 'q7',
        question: '"Akala al-waladu at-tuffaha" signifie :',
        type: 'multiple-choice',
        options: ['Le garçon a mangé la pomme', 'La pomme a mangé le garçon', 'Mange la pomme, garçon', 'Le garçon mange'],
        correctAnswer: 'Le garçon a mangé la pomme',
        explanation: 'Akala (a mangé) + al-waladu (le garçon) + at-tuffaha (la pomme).',
        hints: ['VSO', 'Le garçon mange']
      },
      {
        id: 'q8',
        question: 'Le fa\'il (sujet) est à quel cas grammatical ?',
        type: 'multiple-choice',
        options: ['Nominatif (marfu\')', 'Accusatif (mansub)', 'Génitif (majrur)', 'Aucun cas'],
        correctAnswer: 'Nominatif (marfu\')',
        explanation: 'Le fa\'il est au cas nominatif (marfu\'), marqué par -u.',
        hints: ['Marfu\'', '-u']
      },
      {
        id: 'q9',
        question: 'Le maf\'ul bih (COD) est à quel cas grammatical ?',
        type: 'multiple-choice',
        options: ['Accusatif (mansub)', 'Nominatif (marfu\')', 'Génitif (majrur)', 'Aucun cas'],
        correctAnswer: 'Accusatif (mansub)',
        explanation: 'Le maf\'ul bih est au cas accusatif (mansub), marqué par -a.',
        hints: ['Mansub', '-a']
      },
      {
        id: 'q10',
        question: 'Peut-on omettre le sujet en arabe ?',
        type: 'multiple-choice',
        options: ['Oui, s\'il est contenu dans le verbe', 'Non, jamais', 'Seulement au passé', 'Seulement au présent'],
        correctAnswer: 'Oui, s\'il est contenu dans le verbe',
        explanation: 'Le sujet peut être implicite, contenu dans la conjugaison : "katabtu" = j\'ai écrit (pas besoin de "ana").',
        hints: ['Pronom implicite', 'Dans le verbe']
      }
    ]
  },

  // Arabe 3ème - Exercice 3: Culture et civilisation arabo-musulmane
  {
    id: 'ar-3eme-003',
    title: 'Culture et civilisation arabo-musulmane',
    subject: 'arabe',
    level: '3ème',
    difficulty: 4,
    description: 'Découvrir les grandes figures et réalisations de la civilisation arabo-musulmane',
    estimatedTime: 20,
    skills: ['Culture', 'Histoire', 'Civilisation'],
    questions: [
      {
        id: 'q1',
        question: 'Quel savant a donné son nom à l\'algorithme ?',
        type: 'multiple-choice',
        options: ['Al-Khwarizmi', 'Ibn Sina', 'Al-Biruni', 'Ibn Rushd'],
        correctAnswer: 'Al-Khwarizmi',
        explanation: 'Al-Khwarizmi (IXe s.) a donné "algorithme" et "algèbre" (al-jabr).',
        hints: ['Mathématiques', 'Algorithme']
      },
      {
        id: 'q2',
        question: 'Qui est connu en Occident sous le nom d\'Avicenne ?',
        type: 'multiple-choice',
        options: ['Ibn Sina', 'Ibn Rushd', 'Al-Razi', 'Ibn Khaldun'],
        correctAnswer: 'Ibn Sina',
        explanation: 'Ibn Sina (Avicenne, 980-1037) était médecin et philosophe persan.',
        hints: ['Médecin', 'Canon de la médecine']
      },
      {
        id: 'q3',
        question: 'Le livre sacré de l\'islam s\'appelle :',
        type: 'multiple-choice',
        options: ['Le Coran', 'La Sunna', 'Les Hadiths', 'La Sira'],
        correctAnswer: 'Le Coran',
        explanation: '"القرآن" (al-Qur\'an) signifie "la récitation", livre révélé au prophète Muhammad.',
        hints: ['Livre saint', 'Récitation']
      },
      {
        id: 'q4',
        question: 'Quelle ville est connue pour sa grande bibliothèque médiévale ?',
        type: 'multiple-choice',
        options: ['Bagdad (Maison de la Sagesse)', 'Le Caire', 'Damas', 'Cordoue'],
        correctAnswer: 'Bagdad (Maison de la Sagesse)',
        explanation: 'La Maison de la Sagesse (Bayt al-Hikma) à Bagdad était un centre de traduction et de savoir.',
        hints: ['Abbassides', 'IXe siècle']
      },
      {
        id: 'q5',
        question: 'Ibn Khaldun (XIVe s.) est considéré comme le père de :',
        type: 'multiple-choice',
        options: ['La sociologie/historiographie moderne', 'L\'algèbre', 'La médecine', 'L\'astronomie'],
        correctAnswer: 'La sociologie/historiographie moderne',
        explanation: 'Ibn Khaldun a écrit la Muqaddima, fondement de la sociologie et de l\'histoire scientifique.',
        hints: ['Histoire', 'Société']
      },
      {
        id: 'q6',
        question: 'Al-Alhambra est un célèbre palais arabe situé à :',
        type: 'multiple-choice',
        options: ['Grenade (Espagne)', 'Bagdad (Irak)', 'Le Caire (Égypte)', 'Damas (Syrie)'],
        correctAnswer: 'Grenade (Espagne)',
        explanation: 'L\'Alhambra à Grenade est un chef-d\'œuvre de l\'architecture arabo-andalouse.',
        hints: ['Andalousie', 'Espagne']
      },
      {
        id: 'q7',
        question: 'Les chiffres que nous utilisons (1, 2, 3...) sont appelés :',
        type: 'multiple-choice',
        options: ['Chiffres arabes', 'Chiffres romains', 'Chiffres hindous', 'Chiffres grecs'],
        correctAnswer: 'Chiffres arabes',
        explanation: 'Nos chiffres sont appelés "arabes" car transmis par les Arabes, qui les avaient adoptés des Indiens.',
        hints: ['Notre système', '0-9']
      },
      {
        id: 'q8',
        question: 'Averroès (Ibn Rushd) était célèbre pour ses commentaires sur :',
        type: 'multiple-choice',
        options: ['Aristote', 'Platon', 'Hippocrate', 'Euclide'],
        correctAnswer: 'Aristote',
        explanation: 'Ibn Rushd (Averroès, XIIe s.) de Cordoue a commenté toute l\'œuvre d\'Aristote.',
        hints: ['Philosophie', 'Cordoue']
      },
      {
        id: 'q9',
        question: 'Quelle invention arabe a révolutionné la navigation ?',
        type: 'multiple-choice',
        options: ['L\'astrolabe perfectionné', 'Le gouvernail', 'La boussole', 'Le sextant'],
        correctAnswer: 'L\'astrolabe perfectionné',
        explanation: 'Les Arabes ont perfectionné l\'astrolabe grec pour la navigation et l\'astronomie.',
        hints: ['Navigation', 'Étoiles']
      },
      {
        id: 'q10',
        question: 'Les "Mille et Une Nuits" sont :',
        type: 'multiple-choice',
        options: ['Un recueil de contes arabes', 'Un traité de médecine', 'Un livre de mathématiques', 'Un texte religieux'],
        correctAnswer: 'Un recueil de contes arabes',
        explanation: '"Alf Layla wa Layla" (Mille et Une Nuits) est un recueil de contes traditionnels arabes.',
        hints: ['Shéhérazade', 'Contes']
      }
    ]
  },

  // ========================================
  // EMC (Enseignement Moral et Civique) - 6ème à 3ème (12 exercices)
  // ========================================

  // EMC 6ème - Exercice 1: Les valeurs de la République
  {
    id: 'emc-6eme-001',
    title: 'Les valeurs de la République française',
    subject: 'emc',
    level: '6ème',
    difficulty: 1,
    description: 'Découvrir les valeurs fondamentales de la République française',
    estimatedTime: 15,
    skills: ['Citoyenneté', 'Valeurs républicaines', 'Symboles'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle est la devise de la République française ?',
        type: 'multiple-choice',
        options: ['Liberté, Égalité, Fraternité', 'Unité, Force, Travail', 'Paix, Justice, Progrès', 'Honneur, Patrie, Valeur'],
        correctAnswer: 'Liberté, Égalité, Fraternité',
        explanation: 'La devise "Liberté, Égalité, Fraternité" date de la Révolution française.',
        hints: ['Trois mots', 'Révolution française']
      },
      {
        id: 'q2',
        question: 'De quelles couleurs est composé le drapeau français ?',
        type: 'multiple-choice',
        options: ['Bleu, blanc, rouge', 'Bleu, jaune, rouge', 'Vert, blanc, rouge', 'Noir, rouge, or'],
        correctAnswer: 'Bleu, blanc, rouge',
        explanation: 'Le drapeau tricolore bleu-blanc-rouge est né pendant la Révolution française.',
        hints: ['Tricolore', 'Trois bandes verticales']
      },
      {
        id: 'q3',
        question: 'Quel est l\'hymne national français ?',
        type: 'multiple-choice',
        options: ['La Marseillaise', 'Le Chant du Départ', 'L\'Internationale', 'La Parisienne'],
        correctAnswer: 'La Marseillaise',
        explanation: 'La Marseillaise, composée en 1792 par Rouget de Lisle, est l\'hymne national.',
        hints: ['1792', 'Rouget de Lisle']
      },
      {
        id: 'q4',
        question: 'Que représente Marianne ?',
        type: 'multiple-choice',
        options: ['La République française', 'Une reine de France', 'Une sainte', 'Une héroïne de guerre'],
        correctAnswer: 'La République française',
        explanation: 'Marianne est l\'allégorie de la République et de ses valeurs.',
        hints: ['Allégorie', 'Bonnet phrygien']
      },
      {
        id: 'q5',
        question: 'Quel est le jour de la fête nationale française ?',
        type: 'multiple-choice',
        options: ['14 juillet', '11 novembre', '8 mai', '1er mai'],
        correctAnswer: '14 juillet',
        explanation: 'Le 14 juillet commémore la prise de la Bastille (1789) et la Fête de la Fédération (1790).',
        hints: ['Prise de la Bastille', 'Été']
      },
      {
        id: 'q6',
        question: 'Que signifie le principe de laïcité ?',
        type: 'multiple-choice',
        options: ['Séparation des religions et de l\'État', 'Interdiction des religions', 'Religion obligatoire', 'Une seule religion autorisée'],
        correctAnswer: 'Séparation des religions et de l\'État',
        explanation: 'La laïcité garantit la liberté de croire ou de ne pas croire, et la neutralité de l\'État.',
        hints: ['Séparation', 'Neutralité']
      },
      {
        id: 'q7',
        question: 'Que garantit l\'égalité en droit ?',
        type: 'multiple-choice',
        options: ['Les mêmes droits pour tous', 'Les mêmes revenus pour tous', 'Le même travail pour tous', 'La même opinion pour tous'],
        correctAnswer: 'Les mêmes droits pour tous',
        explanation: 'L\'égalité en droit signifie que tous les citoyens ont les mêmes droits devant la loi.',
        hints: ['Droits', 'Devant la loi']
      },
      {
        id: 'q8',
        question: 'La fraternité, c\'est :',
        type: 'multiple-choice',
        options: ['La solidarité entre les citoyens', 'Les liens entre frères', 'L\'amitié internationale', 'La paix mondiale'],
        correctAnswer: 'La solidarité entre les citoyens',
        explanation: 'La fraternité désigne le lien de solidarité qui unit les citoyens.',
        hints: ['Solidarité', 'Entraide']
      },
      {
        id: 'q9',
        question: 'La liberté d\'expression permet de :',
        type: 'multiple-choice',
        options: ['Exprimer ses opinions dans le respect de la loi', 'Dire tout ce qu\'on veut sans limite', 'Insulter librement', 'Mentir sans conséquence'],
        correctAnswer: 'Exprimer ses opinions dans le respect de la loi',
        explanation: 'La liberté d\'expression a des limites : pas de diffamation, d\'incitation à la haine, etc.',
        hints: ['Opinions', 'Limites légales']
      },
      {
        id: 'q10',
        question: 'Où trouve-t-on la devise "Liberté, Égalité, Fraternité" ?',
        type: 'multiple-choice',
        options: ['Sur les bâtiments publics', 'Sur les billets de banque uniquement', 'Sur les voitures', 'Nulle part officiellement'],
        correctAnswer: 'Sur les bâtiments publics',
        explanation: 'La devise est inscrite sur les frontons des mairies, écoles et bâtiments publics.',
        hints: ['Mairies', 'Écoles']
      }
    ]
  },

  // EMC 6ème - Exercice 2: Les droits de l'enfant
  {
    id: 'emc-6eme-002',
    title: 'Les droits de l\'enfant',
    subject: 'emc',
    level: '6ème',
    difficulty: 1,
    description: 'Connaître les droits fondamentaux des enfants',
    estimatedTime: 15,
    skills: ['Droits', 'Protection', 'CIDE'],
    questions: [
      {
        id: 'q1',
        question: 'En quelle année a été adoptée la Convention Internationale des Droits de l\'Enfant (CIDE) ?',
        type: 'multiple-choice',
        options: ['1989', '1948', '1968', '2000'],
        correctAnswer: '1989',
        explanation: 'La CIDE a été adoptée par l\'ONU le 20 novembre 1989.',
        hints: ['ONU', 'Fin des années 80']
      },
      {
        id: 'q2',
        question: 'Jusqu\'à quel âge est-on considéré comme un enfant selon la CIDE ?',
        type: 'multiple-choice',
        options: ['18 ans', '16 ans', '21 ans', '15 ans'],
        correctAnswer: '18 ans',
        explanation: 'La CIDE définit l\'enfant comme tout être humain de moins de 18 ans.',
        hints: ['Majorité', '18']
      },
      {
        id: 'q3',
        question: 'Tout enfant a droit à :',
        type: 'multiple-choice',
        options: ['Une identité (nom, nationalité)', 'Un téléphone', 'De l\'argent de poche', 'Des vacances à l\'étranger'],
        correctAnswer: 'Une identité (nom, nationalité)',
        explanation: 'Chaque enfant a droit à un nom, une nationalité et à connaître ses parents.',
        hints: ['Nom', 'Nationalité']
      },
      {
        id: 'q4',
        question: 'Le droit à l\'éducation signifie que :',
        type: 'multiple-choice',
        options: ['L\'école est obligatoire et gratuite', 'L\'école est facultative', 'Seuls les riches vont à l\'école', 'L\'éducation coûte cher'],
        correctAnswer: 'L\'école est obligatoire et gratuite',
        explanation: 'En France, l\'instruction est obligatoire de 3 à 16 ans et l\'école publique est gratuite.',
        hints: ['Obligatoire', 'Gratuit']
      },
      {
        id: 'q5',
        question: 'Le travail des enfants est :',
        type: 'multiple-choice',
        options: ['Interdit avant 16 ans (sauf exceptions)', 'Autorisé sans limite', 'Autorisé dès 10 ans', 'Encouragé'],
        correctAnswer: 'Interdit avant 16 ans (sauf exceptions)',
        explanation: 'Le travail est interdit avant 16 ans, avec quelques exceptions encadrées.',
        hints: ['Protection', '16 ans']
      },
      {
        id: 'q6',
        question: 'Que signifie le droit à la protection ?',
        type: 'multiple-choice',
        options: ['Être protégé contre les violences et l\'exploitation', 'Avoir un garde du corps', 'Ne jamais sortir de chez soi', 'Porter une armure'],
        correctAnswer: 'Être protégé contre les violences et l\'exploitation',
        explanation: 'Les enfants doivent être protégés contre toute forme de violence, maltraitance et exploitation.',
        hints: ['Violences', 'Maltraitance']
      },
      {
        id: 'q7',
        question: 'Tout enfant a droit à :',
        type: 'multiple-choice',
        options: ['Des soins médicaux', 'Un smartphone', 'Une voiture', 'Des bonbons'],
        correctAnswer: 'Des soins médicaux',
        explanation: 'Le droit à la santé est un droit fondamental de l\'enfant.',
        hints: ['Santé', 'Médecin']
      },
      {
        id: 'q8',
        question: 'Le droit à l\'expression permet à l\'enfant de :',
        type: 'multiple-choice',
        options: ['Donner son avis sur ce qui le concerne', 'Décider de tout seul', 'Désobéir aux adultes', 'Faire ce qu\'il veut'],
        correctAnswer: 'Donner son avis sur ce qui le concerne',
        explanation: 'L\'enfant a le droit d\'être entendu dans les décisions qui le concernent.',
        hints: ['Avis', 'Être entendu']
      },
      {
        id: 'q9',
        question: 'Quel organisme veille au respect des droits de l\'enfant en France ?',
        type: 'multiple-choice',
        options: ['Le Défenseur des droits', 'La police', 'Les pompiers', 'L\'armée'],
        correctAnswer: 'Le Défenseur des droits',
        explanation: 'Le Défenseur des droits, avec le Défenseur des enfants, veille au respect de ces droits.',
        hints: ['Institution', 'Défenseur']
      },
      {
        id: 'q10',
        question: 'Le 20 novembre est :',
        type: 'multiple-choice',
        options: ['La Journée internationale des droits de l\'enfant', 'La fête des mères', 'La journée du sport', 'Un jour férié'],
        correctAnswer: 'La Journée internationale des droits de l\'enfant',
        explanation: 'Le 20 novembre commémore l\'adoption de la CIDE en 1989.',
        hints: ['CIDE', 'Novembre']
      }
    ]
  },

  // EMC 6ème - Exercice 3: Vivre ensemble au collège
  {
    id: 'emc-6eme-003',
    title: 'Vivre ensemble au collège',
    subject: 'emc',
    level: '6ème',
    difficulty: 1,
    description: 'Comprendre les règles du vivre ensemble au collège',
    estimatedTime: 15,
    skills: ['Règlement', 'Respect', 'Vie scolaire'],
    questions: [
      {
        id: 'q1',
        question: 'Le règlement intérieur du collège sert à :',
        type: 'multiple-choice',
        options: ['Organiser la vie collective et garantir les droits de chacun', 'Punir les élèves', 'Favoriser certains élèves', 'Interdire tout'],
        correctAnswer: 'Organiser la vie collective et garantir les droits de chacun',
        explanation: 'Le règlement intérieur fixe les droits et les devoirs de chacun pour bien vivre ensemble.',
        hints: ['Droits', 'Devoirs']
      },
      {
        id: 'q2',
        question: 'Les délégués de classe sont :',
        type: 'multiple-choice',
        options: ['Élus par les élèves', 'Désignés par le principal', 'Choisis par les parents', 'Tirés au sort'],
        correctAnswer: 'Élus par les élèves',
        explanation: 'Les délégués sont élus au scrutin par les élèves de leur classe.',
        hints: ['Vote', 'Élection']
      },
      {
        id: 'q3',
        question: 'Le harcèlement scolaire est :',
        type: 'multiple-choice',
        options: ['Interdit et puni par la loi', 'Une simple dispute', 'Normal entre élèves', 'Autorisé dans la cour'],
        correctAnswer: 'Interdit et puni par la loi',
        explanation: 'Le harcèlement scolaire est un délit. Les victimes doivent en parler et être aidées.',
        hints: ['Délit', 'Interdit']
      },
      {
        id: 'q4',
        question: 'La discrimination, c\'est :',
        type: 'multiple-choice',
        options: ['Traiter différemment quelqu\'un à cause de son origine, sexe, religion...', 'Être gentil avec tout le monde', 'Choisir ses amis', 'Avoir des préférences'],
        correctAnswer: 'Traiter différemment quelqu\'un à cause de son origine, sexe, religion...',
        explanation: 'La discrimination est interdite par la loi. Elle porte atteinte à l\'égalité.',
        hints: ['Inégalité', 'Origine']
      },
      {
        id: 'q5',
        question: 'Au collège, le téléphone portable :',
        type: 'multiple-choice',
        options: ['Est interdit d\'utilisation (sauf cas particuliers)', 'Est autorisé partout', 'Doit être utilisé en classe', 'Est obligatoire'],
        correctAnswer: 'Est interdit d\'utilisation (sauf cas particuliers)',
        explanation: 'La loi interdit l\'usage du téléphone dans les écoles et collèges depuis 2018.',
        hints: ['Loi 2018', 'Interdit']
      },
      {
        id: 'q6',
        question: 'Que faire si on est témoin de harcèlement ?',
        type: 'multiple-choice',
        options: ['En parler à un adulte de confiance', 'Participer au harcèlement', 'Ne rien faire', 'Filmer la scène'],
        correctAnswer: 'En parler à un adulte de confiance',
        explanation: 'Il faut alerter un adulte (parent, CPE, professeur, infirmier...) ou appeler le 3020.',
        hints: ['Adulte', '3020']
      },
      {
        id: 'q7',
        question: 'Le respect des autres inclut :',
        type: 'multiple-choice',
        options: ['La politesse et l\'écoute', 'L\'indifférence', 'Les moqueries', 'L\'isolement'],
        correctAnswer: 'La politesse et l\'écoute',
        explanation: 'Respecter les autres, c\'est être poli, écouter, ne pas se moquer.',
        hints: ['Politesse', 'Écoute']
      },
      {
        id: 'q8',
        question: 'La laïcité au collège signifie que :',
        type: 'multiple-choice',
        options: ['Les signes religieux ostensibles sont interdits pour les élèves', 'La religion est enseignée', 'Les prières sont obligatoires', 'Seuls les athées sont admis'],
        correctAnswer: 'Les signes religieux ostensibles sont interdits pour les élèves',
        explanation: 'Les élèves ne peuvent pas porter de signes religieux ostensibles (loi de 2004).',
        hints: ['Signes ostensibles', 'Neutralité']
      },
      {
        id: 'q9',
        question: 'Le conseil de classe réunit :',
        type: 'multiple-choice',
        options: ['Les professeurs, les délégués et des représentants des parents', 'Uniquement le principal', 'Les surveillants', 'Les agents d\'entretien'],
        correctAnswer: 'Les professeurs, les délégués et des représentants des parents',
        explanation: 'Le conseil de classe examine les résultats et le comportement des élèves.',
        hints: ['Professeurs', 'Délégués']
      },
      {
        id: 'q10',
        question: 'L\'assiduité scolaire signifie :',
        type: 'multiple-choice',
        options: ['Être présent à tous les cours', 'Venir quand on veut', 'Être bon élève', 'Travailler beaucoup'],
        correctAnswer: 'Être présent à tous les cours',
        explanation: 'L\'assiduité est une obligation légale : l\'élève doit assister à tous les cours.',
        hints: ['Présence', 'Obligation']
      }
    ]
  },

  // EMC 5ème - Exercice 1: L'égalité et les discriminations
  {
    id: 'emc-5eme-001',
    title: 'L\'égalité et la lutte contre les discriminations',
    subject: 'emc',
    level: '5ème',
    difficulty: 2,
    description: 'Comprendre le principe d\'égalité et les formes de discrimination',
    estimatedTime: 20,
    skills: ['Égalité', 'Discriminations', 'Droit'],
    questions: [
      {
        id: 'q1',
        question: 'Combien de critères de discrimination sont reconnus par la loi française ?',
        type: 'multiple-choice',
        options: ['Plus de 25', '5', '10', '3'],
        correctAnswer: 'Plus de 25',
        explanation: 'La loi française reconnaît plus de 25 critères de discrimination interdits.',
        hints: ['Nombreux', 'Plus de 20']
      },
      {
        id: 'q2',
        question: 'Lequel de ces critères N\'EST PAS un critère de discrimination ?',
        type: 'multiple-choice',
        options: ['La couleur des yeux', 'L\'origine', 'Le sexe', 'L\'orientation sexuelle'],
        correctAnswer: 'La couleur des yeux',
        explanation: 'L\'origine, le sexe, l\'orientation sexuelle sont des critères légaux, pas la couleur des yeux.',
        hints: ['Critères légaux', 'Caractéristique protégée']
      },
      {
        id: 'q3',
        question: 'L\'égalité femmes-hommes signifie :',
        type: 'multiple-choice',
        options: ['Les mêmes droits et opportunités', 'Être identiques', 'Les femmes ont plus de droits', 'Les hommes décident pour tous'],
        correctAnswer: 'Les mêmes droits et opportunités',
        explanation: 'L\'égalité signifie avoir les mêmes droits, pas être identiques.',
        hints: ['Droits', 'Opportunités']
      },
      {
        id: 'q4',
        question: 'Le racisme est une discrimination basée sur :',
        type: 'multiple-choice',
        options: ['L\'origine ou la couleur de peau', 'L\'âge', 'Le métier', 'Le lieu d\'habitation'],
        correctAnswer: 'L\'origine ou la couleur de peau',
        explanation: 'Le racisme est la discrimination fondée sur l\'origine ethnique ou la couleur de peau.',
        hints: ['Origine', 'Ethnie']
      },
      {
        id: 'q5',
        question: 'L\'homophobie est :',
        type: 'multiple-choice',
        options: ['La discrimination envers les personnes homosexuelles', 'La peur des humains', 'L\'amour de soi', 'Une maladie'],
        correctAnswer: 'La discrimination envers les personnes homosexuelles',
        explanation: 'L\'homophobie désigne le rejet ou la haine des personnes homosexuelles.',
        hints: ['Orientation sexuelle', 'Homosexualité']
      },
      {
        id: 'q6',
        question: 'En France, les femmes ont obtenu le droit de vote en :',
        type: 'multiple-choice',
        options: ['1944', '1789', '1900', '1968'],
        correctAnswer: '1944',
        explanation: 'Les femmes françaises ont obtenu le droit de vote le 21 avril 1944.',
        hints: ['Seconde Guerre mondiale', '1944']
      },
      {
        id: 'q7',
        question: 'Le handicap est-il un critère de discrimination ?',
        type: 'multiple-choice',
        options: ['Oui, c\'est interdit par la loi', 'Non', 'Seulement au travail', 'Seulement à l\'école'],
        correctAnswer: 'Oui, c\'est interdit par la loi',
        explanation: 'Discriminer quelqu\'un en raison de son handicap est interdit par la loi.',
        hints: ['Critère légal', 'Interdit']
      },
      {
        id: 'q8',
        question: 'Que peut faire une victime de discrimination ?',
        type: 'multiple-choice',
        options: ['Porter plainte et saisir le Défenseur des droits', 'Rien', 'Discriminer en retour', 'Déménager'],
        correctAnswer: 'Porter plainte et saisir le Défenseur des droits',
        explanation: 'Les victimes peuvent porter plainte, saisir le Défenseur des droits ou les associations.',
        hints: ['Plainte', 'Défenseur des droits']
      },
      {
        id: 'q9',
        question: 'L\'antisémitisme est la discrimination contre :',
        type: 'multiple-choice',
        options: ['Les personnes juives', 'Les personnes âgées', 'Les personnes handicapées', 'Les femmes'],
        correctAnswer: 'Les personnes juives',
        explanation: 'L\'antisémitisme désigne la haine ou le rejet des personnes juives.',
        hints: ['Religion', 'Peuple juif']
      },
      {
        id: 'q10',
        question: 'La discrimination à l\'embauche, c\'est :',
        type: 'multiple-choice',
        options: ['Refuser un emploi pour des critères discriminatoires', 'Choisir le meilleur candidat', 'Demander un CV', 'Faire un entretien'],
        correctAnswer: 'Refuser un emploi pour des critères discriminatoires',
        explanation: 'Refuser un emploi à cause de l\'origine, du sexe, de l\'âge... est illégal.',
        hints: ['Travail', 'Critères illégaux']
      }
    ]
  },

  // EMC 5ème - Exercice 2: La solidarité
  {
    id: 'emc-5eme-002',
    title: 'La solidarité nationale et internationale',
    subject: 'emc',
    level: '5ème',
    difficulty: 2,
    description: 'Comprendre les différentes formes de solidarité',
    estimatedTime: 15,
    skills: ['Solidarité', 'Entraide', 'Associations'],
    questions: [
      {
        id: 'q1',
        question: 'La solidarité, c\'est :',
        type: 'multiple-choice',
        options: ['S\'entraider et partager avec les autres', 'Chacun pour soi', 'Ignorer les autres', 'Être égoïste'],
        correctAnswer: 'S\'entraider et partager avec les autres',
        explanation: 'La solidarité est le lien d\'entraide entre les membres d\'une communauté.',
        hints: ['Entraide', 'Partage']
      },
      {
        id: 'q2',
        question: 'La Sécurité sociale est un exemple de :',
        type: 'multiple-choice',
        options: ['Solidarité nationale', 'Charité individuelle', 'Aide internationale', 'Assurance privée'],
        correctAnswer: 'Solidarité nationale',
        explanation: 'La Sécurité sociale mutualise les risques : les bien-portants aident les malades.',
        hints: ['Mutualisation', 'France']
      },
      {
        id: 'q3',
        question: 'Les Restos du Cœur sont :',
        type: 'multiple-choice',
        options: ['Une association d\'aide alimentaire', 'Un restaurant gastronomique', 'Une chaîne de fast-food', 'Un ministère'],
        correctAnswer: 'Une association d\'aide alimentaire',
        explanation: 'Les Restos du Cœur, fondés par Coluche, distribuent des repas aux plus démunis.',
        hints: ['Coluche', 'Aide alimentaire']
      },
      {
        id: 'q4',
        question: 'Le bénévolat consiste à :',
        type: 'multiple-choice',
        options: ['Aider gratuitement, sans être payé', 'Travailler pour un salaire', 'Être obligé d\'aider', 'Recevoir de l\'aide'],
        correctAnswer: 'Aider gratuitement, sans être payé',
        explanation: 'Le bénévole donne de son temps gratuitement pour une cause ou une association.',
        hints: ['Gratuit', 'Volontaire']
      },
      {
        id: 'q5',
        question: 'L\'aide humanitaire internationale aide :',
        type: 'multiple-choice',
        options: ['Les populations victimes de catastrophes ou de guerres', 'Les entreprises', 'Les touristes', 'Les gouvernements riches'],
        correctAnswer: 'Les populations victimes de catastrophes ou de guerres',
        explanation: 'L\'aide humanitaire secourt les victimes de crises (guerres, famines, catastrophes).',
        hints: ['Urgence', 'Catastrophes']
      },
      {
        id: 'q6',
        question: 'Médecins Sans Frontières (MSF) est :',
        type: 'multiple-choice',
        options: ['Une ONG médicale internationale', 'Un hôpital français', 'Un syndicat de médecins', 'Une assurance santé'],
        correctAnswer: 'Une ONG médicale internationale',
        explanation: 'MSF est une ONG qui apporte une aide médicale dans les pays en crise.',
        hints: ['ONG', 'Soins médicaux']
      },
      {
        id: 'q7',
        question: 'Le don du sang est un acte de :',
        type: 'multiple-choice',
        options: ['Solidarité', 'Commerce', 'Obligation', 'Punition'],
        correctAnswer: 'Solidarité',
        explanation: 'Le don du sang est gratuit et volontaire, il permet de sauver des vies.',
        hints: ['Gratuit', 'Sauver des vies']
      },
      {
        id: 'q8',
        question: 'Le Téléthon collecte des fonds pour :',
        type: 'multiple-choice',
        options: ['La recherche contre les maladies génétiques', 'La construction de routes', 'Les vacances des enfants', 'Le sport professionnel'],
        correctAnswer: 'La recherche contre les maladies génétiques',
        explanation: 'Le Téléthon finance la recherche contre les myopathies et maladies génétiques rares.',
        hints: ['Maladies rares', 'Recherche']
      },
      {
        id: 'q9',
        question: 'Le RSA (Revenu de Solidarité Active) est :',
        type: 'multiple-choice',
        options: ['Une aide pour les personnes sans ressources', 'Un salaire', 'Une prime de travail', 'Un impôt'],
        correctAnswer: 'Une aide pour les personnes sans ressources',
        explanation: 'Le RSA assure un revenu minimum aux personnes sans ressources suffisantes.',
        hints: ['Minimum', 'Sans emploi']
      },
      {
        id: 'q10',
        question: 'La solidarité intergénérationnelle, c\'est :',
        type: 'multiple-choice',
        options: ['L\'entraide entre générations (jeunes et vieux)', 'L\'aide entre pays', 'L\'aide entre voisins', 'L\'aide entre entreprises'],
        correctAnswer: 'L\'entraide entre générations (jeunes et vieux)',
        explanation: 'Les actifs cotisent pour les retraités, les grands-parents aident les petits-enfants...',
        hints: ['Générations', 'Jeunes/vieux']
      }
    ]
  },

  // EMC 5ème - Exercice 3: L'engagement citoyen
  {
    id: 'emc-5eme-003',
    title: 'L\'engagement citoyen',
    subject: 'emc',
    level: '5ème',
    difficulty: 2,
    description: 'Découvrir les différentes formes d\'engagement citoyen',
    estimatedTime: 15,
    skills: ['Engagement', 'Citoyenneté', 'Participation'],
    questions: [
      {
        id: 'q1',
        question: 'Voter est :',
        type: 'multiple-choice',
        options: ['Un droit et un devoir civique', 'Une obligation sanctionnée', 'Réservé aux riches', 'Interdit aux jeunes'],
        correctAnswer: 'Un droit et un devoir civique',
        explanation: 'Voter est un droit fondamental et un devoir moral du citoyen.',
        hints: ['Droit', 'Devoir']
      },
      {
        id: 'q2',
        question: 'À partir de quel âge peut-on voter en France ?',
        type: 'multiple-choice',
        options: ['18 ans', '16 ans', '21 ans', '25 ans'],
        correctAnswer: '18 ans',
        explanation: 'En France, le droit de vote est acquis à 18 ans, âge de la majorité.',
        hints: ['Majorité', '18']
      },
      {
        id: 'q3',
        question: 'S\'engager dans une association permet de :',
        type: 'multiple-choice',
        options: ['Agir pour une cause qui nous tient à cœur', 'Gagner beaucoup d\'argent', 'Éviter les impôts', 'Ne rien faire'],
        correctAnswer: 'Agir pour une cause qui nous tient à cœur',
        explanation: 'Les associations permettent de s\'engager pour l\'environnement, la solidarité, le sport...',
        hints: ['Cause', 'Action']
      },
      {
        id: 'q4',
        question: 'Le Service National Universel (SNU) est :',
        type: 'multiple-choice',
        options: ['Un engagement citoyen pour les jeunes de 15-17 ans', 'Le service militaire obligatoire', 'Un travail rémunéré', 'Un diplôme scolaire'],
        correctAnswer: 'Un engagement citoyen pour les jeunes de 15-17 ans',
        explanation: 'Le SNU propose un séjour de cohésion et une mission d\'intérêt général.',
        hints: ['Jeunes', '15-17 ans']
      },
      {
        id: 'q5',
        question: 'Une pétition sert à :',
        type: 'multiple-choice',
        options: ['Demander collectivement une action aux autorités', 'Gagner un procès', 'Obtenir de l\'argent', 'Créer une loi'],
        correctAnswer: 'Demander collectivement une action aux autorités',
        explanation: 'La pétition est un moyen de mobilisation citoyenne pour faire entendre une cause.',
        hints: ['Signatures', 'Demande collective']
      },
      {
        id: 'q6',
        question: 'Manifester pacifiquement est :',
        type: 'multiple-choice',
        options: ['Un droit constitutionnel', 'Interdit en France', 'Réservé aux syndicats', 'Puni par la loi'],
        correctAnswer: 'Un droit constitutionnel',
        explanation: 'La liberté de manifestation est un droit fondamental, mais il faut déclarer la manifestation.',
        hints: ['Droit', 'Déclaration']
      },
      {
        id: 'q7',
        question: 'Être éco-citoyen, c\'est :',
        type: 'multiple-choice',
        options: ['Agir pour protéger l\'environnement au quotidien', 'Vivre dans la nature', 'Refuser la technologie', 'Être végétarien'],
        correctAnswer: 'Agir pour protéger l\'environnement au quotidien',
        explanation: 'L\'éco-citoyen adopte des gestes écologiques : trier, économiser l\'eau et l\'énergie...',
        hints: ['Environnement', 'Gestes quotidiens']
      },
      {
        id: 'q8',
        question: 'Le service civique est :',
        type: 'multiple-choice',
        options: ['Un engagement volontaire de 6 à 12 mois pour les 16-25 ans', 'Un travail obligatoire', 'Un stage scolaire', 'Une punition'],
        correctAnswer: 'Un engagement volontaire de 6 à 12 mois pour les 16-25 ans',
        explanation: 'Le service civique permet de s\'engager dans une mission d\'intérêt général.',
        hints: ['Volontaire', '16-25 ans']
      },
      {
        id: 'q9',
        question: 'Un citoyen responsable :',
        type: 'multiple-choice',
        options: ['Respecte les lois et participe à la vie collective', 'Fait ce qu\'il veut', 'Ignore les autres', 'Ne vote jamais'],
        correctAnswer: 'Respecte les lois et participe à la vie collective',
        explanation: 'Être citoyen implique des droits mais aussi des responsabilités.',
        hints: ['Lois', 'Participation']
      },
      {
        id: 'q10',
        question: 'Le boycott est :',
        type: 'multiple-choice',
        options: ['Refuser d\'acheter certains produits pour protester', 'Acheter beaucoup', 'Voler des produits', 'Une marque'],
        correctAnswer: 'Refuser d\'acheter certains produits pour protester',
        explanation: 'Le boycott est une forme d\'engagement : refuser d\'acheter pour faire pression.',
        hints: ['Refus', 'Protestation']
      }
    ]
  },

  // EMC 4ème - Exercice 1: La justice en France
  {
    id: 'emc-4eme-001',
    title: 'La justice en France',
    subject: 'emc',
    level: '4ème',
    difficulty: 3,
    description: 'Comprendre le fonctionnement de la justice française',
    estimatedTime: 20,
    skills: ['Justice', 'Tribunaux', 'Droits'],
    questions: [
      {
        id: 'q1',
        question: 'La justice en France est rendue au nom de :',
        type: 'multiple-choice',
        options: ['Du peuple français', 'Du Président', 'Des juges', 'De l\'Union européenne'],
        correctAnswer: 'Du peuple français',
        explanation: 'Les décisions de justice sont rendues "au nom du peuple français".',
        hints: ['Peuple', 'Souveraineté']
      },
      {
        id: 'q2',
        question: 'Le principe de présomption d\'innocence signifie :',
        type: 'multiple-choice',
        options: ['On est innocent jusqu\'à preuve du contraire', 'On est coupable jusqu\'à preuve du contraire', 'Le juge décide seul', 'La police a toujours raison'],
        correctAnswer: 'On est innocent jusqu\'à preuve du contraire',
        explanation: 'Toute personne est présumée innocente tant que sa culpabilité n\'est pas prouvée.',
        hints: ['Innocent', 'Preuve']
      },
      {
        id: 'q3',
        question: 'Le tribunal correctionnel juge :',
        type: 'multiple-choice',
        options: ['Les délits', 'Les crimes', 'Les contraventions', 'Les divorces'],
        correctAnswer: 'Les délits',
        explanation: 'Le tribunal correctionnel juge les délits (vol, escroquerie, coups et blessures...).',
        hints: ['Délits', 'Correctionnel']
      },
      {
        id: 'q4',
        question: 'La cour d\'assises juge :',
        type: 'multiple-choice',
        options: ['Les crimes', 'Les délits', 'Les contraventions', 'Les litiges civils'],
        correctAnswer: 'Les crimes',
        explanation: 'La cour d\'assises, avec un jury populaire, juge les crimes (meurtre, viol...).',
        hints: ['Crimes', 'Jury']
      },
      {
        id: 'q5',
        question: 'Les jurés sont :',
        type: 'multiple-choice',
        options: ['Des citoyens tirés au sort', 'Des juges professionnels', 'Des policiers', 'Des avocats'],
        correctAnswer: 'Des citoyens tirés au sort',
        explanation: 'Les jurés sont des citoyens ordinaires tirés au sort sur les listes électorales.',
        hints: ['Citoyens', 'Tirage au sort']
      },
      {
        id: 'q6',
        question: 'Le droit à un avocat est :',
        type: 'multiple-choice',
        options: ['Un droit fondamental pour tous', 'Réservé aux riches', 'Facultatif', 'Interdit'],
        correctAnswer: 'Un droit fondamental pour tous',
        explanation: 'Toute personne a droit à un avocat. L\'aide juridictionnelle existe pour les plus modestes.',
        hints: ['Droit', 'Aide juridictionnelle']
      },
      {
        id: 'q7',
        question: 'Faire appel signifie :',
        type: 'multiple-choice',
        options: ['Contester une décision de justice', 'Accepter le jugement', 'Appeler son avocat', 'Téléphoner au tribunal'],
        correctAnswer: 'Contester une décision de justice',
        explanation: 'L\'appel permet de faire rejuger l\'affaire par une juridiction supérieure.',
        hints: ['Contester', 'Second jugement']
      },
      {
        id: 'q8',
        question: 'La justice des mineurs est :',
        type: 'multiple-choice',
        options: ['Adaptée et à visée éducative', 'Identique à celle des adultes', 'Plus sévère', 'Inexistante'],
        correctAnswer: 'Adaptée et à visée éducative',
        explanation: 'La justice des mineurs privilégie l\'éducation et la réinsertion.',
        hints: ['Éducative', 'Mineurs']
      },
      {
        id: 'q9',
        question: 'La séparation des pouvoirs signifie que :',
        type: 'multiple-choice',
        options: ['La justice est indépendante du gouvernement', 'Le Président contrôle la justice', 'Les juges font les lois', 'La police juge les criminels'],
        correctAnswer: 'La justice est indépendante du gouvernement',
        explanation: 'La séparation des pouvoirs garantit l\'indépendance de la justice.',
        hints: ['Indépendance', 'Trois pouvoirs']
      },
      {
        id: 'q10',
        question: 'Une contravention est jugée par :',
        type: 'multiple-choice',
        options: ['Le tribunal de police', 'La cour d\'assises', 'Le tribunal correctionnel', 'La Cour de cassation'],
        correctAnswer: 'Le tribunal de police',
        explanation: 'Le tribunal de police juge les contraventions (infractions mineures).',
        hints: ['Infractions mineures', 'Police']
      }
    ]
  },

  // EMC 4ème - Exercice 2: Les libertés fondamentales
  {
    id: 'emc-4eme-002',
    title: 'Les libertés fondamentales',
    subject: 'emc',
    level: '4ème',
    difficulty: 3,
    description: 'Connaître et comprendre les libertés fondamentales',
    estimatedTime: 20,
    skills: ['Libertés', 'Droits', 'Constitution'],
    questions: [
      {
        id: 'q1',
        question: 'La Déclaration des Droits de l\'Homme et du Citoyen date de :',
        type: 'multiple-choice',
        options: ['1789', '1848', '1958', '1945'],
        correctAnswer: '1789',
        explanation: 'La DDHC a été adoptée le 26 août 1789, pendant la Révolution française.',
        hints: ['Révolution', '1789']
      },
      {
        id: 'q2',
        question: 'La liberté d\'aller et venir permet de :',
        type: 'multiple-choice',
        options: ['Circuler librement sur le territoire', 'Entrer dans toutes les propriétés', 'Voyager sans passeport à l\'étranger', 'Conduire sans permis'],
        correctAnswer: 'Circuler librement sur le territoire',
        explanation: 'La liberté de circulation permet de se déplacer librement en France.',
        hints: ['Circuler', 'Territoire']
      },
      {
        id: 'q3',
        question: 'La liberté de la presse signifie :',
        type: 'multiple-choice',
        options: ['Les médias peuvent informer librement', 'Les journaux sont gratuits', 'Tout le monde peut créer un journal', 'La presse dit toujours la vérité'],
        correctAnswer: 'Les médias peuvent informer librement',
        explanation: 'La liberté de la presse garantit l\'indépendance des médias vis-à-vis du pouvoir.',
        hints: ['Médias', 'Information']
      },
      {
        id: 'q4',
        question: 'Le droit à la vie privée protège :',
        type: 'multiple-choice',
        options: ['L\'intimité et les données personnelles', 'Le droit de se cacher', 'Le secret des affaires', 'Les crimes'],
        correctAnswer: 'L\'intimité et les données personnelles',
        explanation: 'La vie privée inclut l\'image, la correspondance, les données personnelles...',
        hints: ['Intimité', 'Données']
      },
      {
        id: 'q5',
        question: 'La liberté de conscience permet de :',
        type: 'multiple-choice',
        options: ['Croire ou ne pas croire librement', 'Imposer sa religion', 'Interdire les religions', 'Critiquer sans limite'],
        correctAnswer: 'Croire ou ne pas croire librement',
        explanation: 'Chacun est libre d\'avoir les croyances ou convictions de son choix.',
        hints: ['Croyances', 'Liberté']
      },
      {
        id: 'q6',
        question: 'Le droit de grève est :',
        type: 'multiple-choice',
        options: ['Un droit constitutionnel des travailleurs', 'Interdit en France', 'Réservé aux fonctionnaires', 'Une obligation'],
        correctAnswer: 'Un droit constitutionnel des travailleurs',
        explanation: 'Le droit de grève est reconnu par la Constitution de 1946.',
        hints: ['Travailleurs', 'Constitution']
      },
      {
        id: 'q7',
        question: 'La liberté d\'association permet de :',
        type: 'multiple-choice',
        options: ['Créer ou rejoindre une association librement', 'Adhérer obligatoirement à un parti', 'Créer une entreprise', 'Avoir des amis'],
        correctAnswer: 'Créer ou rejoindre une association librement',
        explanation: 'La loi de 1901 garantit la liberté de créer des associations.',
        hints: ['Associations', 'Loi 1901']
      },
      {
        id: 'q8',
        question: 'Les libertés peuvent être limitées pour :',
        type: 'multiple-choice',
        options: ['Protéger l\'ordre public et les droits d\'autrui', 'N\'importe quelle raison', 'Plaire au gouvernement', 'Aucune raison'],
        correctAnswer: 'Protéger l\'ordre public et les droits d\'autrui',
        explanation: 'Les libertés ont des limites : ne pas nuire aux autres ni à l\'ordre public.',
        hints: ['Limites', 'Ordre public']
      },
      {
        id: 'q9',
        question: 'Le droit à l\'image signifie :',
        type: 'multiple-choice',
        options: ['On ne peut pas utiliser ma photo sans mon accord', 'J\'ai droit à un portrait', 'Je peux photographier tout le monde', 'Les photos sont interdites'],
        correctAnswer: 'On ne peut pas utiliser ma photo sans mon accord',
        explanation: 'Publier la photo de quelqu\'un nécessite généralement son autorisation.',
        hints: ['Photo', 'Autorisation']
      },
      {
        id: 'q10',
        question: 'L\'habeas corpus protège contre :',
        type: 'multiple-choice',
        options: ['Les arrestations arbitraires', 'Les maladies', 'Les impôts', 'Le chômage'],
        correctAnswer: 'Les arrestations arbitraires',
        explanation: 'L\'habeas corpus garantit qu\'on ne peut être détenu sans jugement.',
        hints: ['Arrestation', 'Détention']
      }
    ]
  },

  // EMC 4ème - Exercice 3: Les médias et l'information
  {
    id: 'emc-4eme-003',
    title: 'Les médias et l\'information',
    subject: 'emc',
    level: '4ème',
    difficulty: 3,
    description: 'Comprendre le rôle des médias et développer son esprit critique',
    estimatedTime: 20,
    skills: ['Médias', 'Information', 'Esprit critique'],
    questions: [
      {
        id: 'q1',
        question: 'Une "fake news" est :',
        type: 'multiple-choice',
        options: ['Une fausse information diffusée volontairement', 'Une information vérifiée', 'Un article de journal', 'Une publicité'],
        correctAnswer: 'Une fausse information diffusée volontairement',
        explanation: 'Les fake news sont des informations fausses créées pour tromper ou manipuler.',
        hints: ['Faux', 'Manipulation']
      },
      {
        id: 'q2',
        question: 'Vérifier une information avant de la partager, c\'est :',
        type: 'multiple-choice',
        options: ['Faire preuve d\'esprit critique', 'Perdre son temps', 'Être méfiant', 'Être naïf'],
        correctAnswer: 'Faire preuve d\'esprit critique',
        explanation: 'L\'esprit critique consiste à vérifier les sources avant de croire ou partager.',
        hints: ['Vérifier', 'Sources']
      },
      {
        id: 'q3',
        question: 'Une source fiable d\'information est généralement :',
        type: 'multiple-choice',
        options: ['Un média reconnu qui cite ses sources', 'Un post anonyme sur les réseaux', 'Une rumeur entendue', 'Un message WhatsApp'],
        correctAnswer: 'Un média reconnu qui cite ses sources',
        explanation: 'Les médias sérieux citent leurs sources et vérifient les informations.',
        hints: ['Sources', 'Vérification']
      },
      {
        id: 'q4',
        question: 'Le pluralisme des médias signifie :',
        type: 'multiple-choice',
        options: ['L\'existence de médias d\'opinions différentes', 'Un seul média officiel', 'Tous les médias disent la même chose', 'Les médias sont interdits'],
        correctAnswer: 'L\'existence de médias d\'opinions différentes',
        explanation: 'Le pluralisme garantit la diversité des points de vue dans les médias.',
        hints: ['Diversité', 'Opinions']
      },
      {
        id: 'q5',
        question: 'Le CSA (devenu Arcom) régule :',
        type: 'multiple-choice',
        options: ['L\'audiovisuel et le numérique', 'La presse écrite uniquement', 'Les livres', 'Les jeux vidéo'],
        correctAnswer: 'L\'audiovisuel et le numérique',
        explanation: 'L\'Arcom régule la radio, la télévision et les plateformes numériques.',
        hints: ['Radio', 'Télévision']
      },
      {
        id: 'q6',
        question: 'La publicité doit être :',
        type: 'multiple-choice',
        options: ['Identifiable comme telle', 'Cachée dans les articles', 'Mensongère', 'Absente des médias'],
        correctAnswer: 'Identifiable comme telle',
        explanation: 'La publicité doit être clairement identifiée pour ne pas tromper le public.',
        hints: ['Identification', 'Transparence']
      },
      {
        id: 'q7',
        question: 'Un algorithme sur les réseaux sociaux peut :',
        type: 'multiple-choice',
        options: ['Créer une bulle de filtre qui limite notre vision', 'Nous montrer toutes les opinions', 'Vérifier les fake news', 'Nous protéger des manipulations'],
        correctAnswer: 'Créer une bulle de filtre qui limite notre vision',
        explanation: 'Les algorithmes nous montrent surtout ce qui nous plaît, limitant notre vision.',
        hints: ['Bulle de filtre', 'Personnalisation']
      },
      {
        id: 'q8',
        question: 'Le droit de réponse permet à :',
        type: 'multiple-choice',
        options: ['Une personne mise en cause de s\'exprimer', 'N\'importe qui d\'écrire dans un journal', 'Un journaliste de se défendre', 'Critiquer un article'],
        correctAnswer: 'Une personne mise en cause de s\'exprimer',
        explanation: 'Le droit de réponse permet de répondre à une information personnellement préjudiciable.',
        hints: ['Réponse', 'Mis en cause']
      },
      {
        id: 'q9',
        question: 'La théorie du complot se caractérise par :',
        type: 'multiple-choice',
        options: ['L\'explication de tout par des forces cachées', 'Une analyse scientifique', 'Des preuves vérifiables', 'Un journalisme d\'investigation'],
        correctAnswer: 'L\'explication de tout par des forces cachées',
        explanation: 'Les théories du complot attribuent les événements à des complots secrets sans preuves.',
        hints: ['Complot', 'Forces cachées']
      },
      {
        id: 'q10',
        question: 'Pour vérifier une image, on peut :',
        type: 'multiple-choice',
        options: ['Faire une recherche d\'image inversée', 'La regarder attentivement', 'Demander à un ami', 'Rien, les images ne mentent pas'],
        correctAnswer: 'Faire une recherche d\'image inversée',
        explanation: 'La recherche d\'image inversée permet de trouver l\'origine d\'une photo.',
        hints: ['Recherche inversée', 'Origine']
      }
    ]
  },

  // EMC 3ème - Exercice 1: Les institutions de la Ve République
  {
    id: 'emc-3eme-001',
    title: 'Les institutions de la Ve République',
    subject: 'emc',
    level: '3ème',
    difficulty: 4,
    description: 'Connaître le fonctionnement des institutions françaises',
    estimatedTime: 25,
    skills: ['Institutions', 'République', 'Démocratie'],
    questions: [
      {
        id: 'q1',
        question: 'La Ve République a été fondée en :',
        type: 'multiple-choice',
        options: ['1958', '1946', '1789', '1968'],
        correctAnswer: '1958',
        explanation: 'La Ve République a été instaurée par la Constitution du 4 octobre 1958.',
        hints: ['De Gaulle', '1958']
      },
      {
        id: 'q2',
        question: 'Le Président de la République est élu pour :',
        type: 'multiple-choice',
        options: ['5 ans', '7 ans', '4 ans', '6 ans'],
        correctAnswer: '5 ans',
        explanation: 'Depuis 2000, le mandat présidentiel est de 5 ans (quinquennat).',
        hints: ['Quinquennat', '5']
      },
      {
        id: 'q3',
        question: 'L\'Assemblée nationale est composée de :',
        type: 'multiple-choice',
        options: ['577 députés', '348 sénateurs', '100 députés', '500 sénateurs'],
        correctAnswer: '577 députés',
        explanation: 'L\'Assemblée nationale compte 577 députés élus au suffrage universel direct.',
        hints: ['Députés', '577']
      },
      {
        id: 'q4',
        question: 'Qui nomme le Premier ministre ?',
        type: 'multiple-choice',
        options: ['Le Président de la République', 'L\'Assemblée nationale', 'Le Sénat', 'Le peuple'],
        correctAnswer: 'Le Président de la République',
        explanation: 'Le Président nomme le Premier ministre, généralement issu de la majorité parlementaire.',
        hints: ['Président', 'Nomination']
      },
      {
        id: 'q5',
        question: 'Le pouvoir législatif appartient à :',
        type: 'multiple-choice',
        options: ['Le Parlement (Assemblée nationale et Sénat)', 'Le Président', 'Le gouvernement', 'Les juges'],
        correctAnswer: 'Le Parlement (Assemblée nationale et Sénat)',
        explanation: 'Le Parlement vote les lois. Il est composé de l\'Assemblée nationale et du Sénat.',
        hints: ['Lois', 'Parlement']
      },
      {
        id: 'q6',
        question: 'Le Conseil constitutionnel vérifie :',
        type: 'multiple-choice',
        options: ['La conformité des lois à la Constitution', 'Les comptes de l\'État', 'Les élections locales', 'Les impôts'],
        correctAnswer: 'La conformité des lois à la Constitution',
        explanation: 'Le Conseil constitutionnel peut censurer une loi contraire à la Constitution.',
        hints: ['Constitution', 'Conformité']
      },
      {
        id: 'q7',
        question: 'Les sénateurs sont élus par :',
        type: 'multiple-choice',
        options: ['Les grands électeurs (élus locaux)', 'Le peuple directement', 'Le Président', 'L\'Assemblée nationale'],
        correctAnswer: 'Les grands électeurs (élus locaux)',
        explanation: 'Les sénateurs sont élus au suffrage universel indirect par les grands électeurs.',
        hints: ['Indirect', 'Grands électeurs']
      },
      {
        id: 'q8',
        question: 'Une motion de censure permet de :',
        type: 'multiple-choice',
        options: ['Renverser le gouvernement', 'Destituer le Président', 'Dissoudre l\'Assemblée', 'Annuler une loi'],
        correctAnswer: 'Renverser le gouvernement',
        explanation: 'Si votée par la majorité des députés, la motion de censure oblige le gouvernement à démissionner.',
        hints: ['Gouvernement', 'Démission']
      },
      {
        id: 'q9',
        question: 'Le Président peut dissoudre :',
        type: 'multiple-choice',
        options: ['L\'Assemblée nationale', 'Le Sénat', 'Le Conseil constitutionnel', 'Le gouvernement'],
        correctAnswer: 'L\'Assemblée nationale',
        explanation: 'Le Président peut dissoudre l\'Assemblée nationale, provoquant de nouvelles élections.',
        hints: ['Dissolution', 'Assemblée']
      },
      {
        id: 'q10',
        question: 'Le référendum permet au peuple de :',
        type: 'multiple-choice',
        options: ['Voter directement sur une question', 'Élire le Président', 'Choisir les ministres', 'Juger les criminels'],
        correctAnswer: 'Voter directement sur une question',
        explanation: 'Le référendum est un vote direct du peuple sur une question précise.',
        hints: ['Vote direct', 'Question']
      }
    ]
  },

  // EMC 3ème - Exercice 2: La défense et la sécurité nationale
  {
    id: 'emc-3eme-002',
    title: 'La défense et la sécurité nationale',
    subject: 'emc',
    level: '3ème',
    difficulty: 4,
    description: 'Comprendre les enjeux de la défense nationale',
    estimatedTime: 20,
    skills: ['Défense', 'Sécurité', 'Armée'],
    questions: [
      {
        id: 'q1',
        question: 'Le chef des armées en France est :',
        type: 'multiple-choice',
        options: ['Le Président de la République', 'Le Premier ministre', 'Le ministre de la Défense', 'Un général'],
        correctAnswer: 'Le Président de la République',
        explanation: 'La Constitution fait du Président le chef des armées.',
        hints: ['Constitution', 'Chef']
      },
      {
        id: 'q2',
        question: 'La France possède-t-elle l\'arme nucléaire ?',
        type: 'multiple-choice',
        options: ['Oui, c\'est une puissance nucléaire', 'Non', 'Seulement pour la recherche', 'Elle l\'a abandonnée'],
        correctAnswer: 'Oui, c\'est une puissance nucléaire',
        explanation: 'La France est une des puissances nucléaires mondiales (dissuasion nucléaire).',
        hints: ['Dissuasion', 'Nucléaire']
      },
      {
        id: 'q3',
        question: 'La JDC (Journée Défense et Citoyenneté) est :',
        type: 'multiple-choice',
        options: ['Obligatoire pour tous les jeunes Français', 'Facultative', 'Réservée aux volontaires', 'Uniquement pour les garçons'],
        correctAnswer: 'Obligatoire pour tous les jeunes Français',
        explanation: 'La JDC est obligatoire pour tous les Français entre 16 et 25 ans.',
        hints: ['Obligatoire', '16-25 ans']
      },
      {
        id: 'q4',
        question: 'L\'OTAN est :',
        type: 'multiple-choice',
        options: ['Une alliance militaire dont la France fait partie', 'Une ONG humanitaire', 'Une organisation européenne', 'Un pays'],
        correctAnswer: 'Une alliance militaire dont la France fait partie',
        explanation: 'L\'OTAN (Organisation du Traité de l\'Atlantique Nord) est une alliance de défense.',
        hints: ['Alliance', 'Atlantique']
      },
      {
        id: 'q5',
        question: 'Le plan Vigipirate concerne :',
        type: 'multiple-choice',
        options: ['La lutte contre le terrorisme', 'La défense des frontières', 'Les catastrophes naturelles', 'La cybersécurité'],
        correctAnswer: 'La lutte contre le terrorisme',
        explanation: 'Vigipirate est le plan national de vigilance et de prévention du terrorisme.',
        hints: ['Terrorisme', 'Vigilance']
      },
      {
        id: 'q6',
        question: 'Le service militaire obligatoire a été suspendu en :',
        type: 'multiple-choice',
        options: ['1997', '1970', '2000', '2010'],
        correctAnswer: '1997',
        explanation: 'La conscription a été suspendue en 1997 sous Jacques Chirac.',
        hints: ['Chirac', 'Suspension']
      },
      {
        id: 'q7',
        question: 'Les opérations extérieures (OPEX) sont :',
        type: 'multiple-choice',
        options: ['Des missions militaires à l\'étranger', 'Des exercices en France', 'Des parades militaires', 'Des formations'],
        correctAnswer: 'Des missions militaires à l\'étranger',
        explanation: 'Les OPEX sont des interventions de l\'armée française à l\'étranger.',
        hints: ['Étranger', 'Missions']
      },
      {
        id: 'q8',
        question: 'La cyberdéfense protège :',
        type: 'multiple-choice',
        options: ['Les systèmes informatiques contre les attaques', 'Les frontières terrestres', 'L\'espace aérien', 'Les mers'],
        correctAnswer: 'Les systèmes informatiques contre les attaques',
        explanation: 'La cyberdéfense protège les infrastructures numériques contre les cyberattaques.',
        hints: ['Informatique', 'Cyberattaques']
      },
      {
        id: 'q9',
        question: 'La gendarmerie nationale dépend :',
        type: 'multiple-choice',
        options: ['Du ministère de l\'Intérieur et des Armées', 'Uniquement de la Défense', 'Uniquement de l\'Intérieur', 'De la Justice'],
        correctAnswer: 'Du ministère de l\'Intérieur et des Armées',
        explanation: 'La gendarmerie a une double tutelle : Intérieur et Armées.',
        hints: ['Double tutelle', 'Militaire']
      },
      {
        id: 'q10',
        question: 'Le renseignement (DGSE, DGSI) sert à :',
        type: 'multiple-choice',
        options: ['Protéger la sécurité nationale', 'Espionner les citoyens français', 'Contrôler Internet', 'Surveiller les élections'],
        correctAnswer: 'Protéger la sécurité nationale',
        explanation: 'Les services de renseignement protègent la France contre les menaces extérieures et intérieures.',
        hints: ['Sécurité', 'Renseignement']
      }
    ]
  },

  // EMC 3ème - Exercice 3: L'Union européenne et la citoyenneté européenne
  {
    id: 'emc-3eme-003',
    title: 'L\'Union européenne et la citoyenneté européenne',
    subject: 'emc',
    level: '3ème',
    difficulty: 4,
    description: 'Comprendre les institutions européennes et la citoyenneté européenne',
    estimatedTime: 20,
    skills: ['Union européenne', 'Citoyenneté', 'Institutions'],
    questions: [
      {
        id: 'q1',
        question: 'Combien de pays composent l\'Union européenne en 2024 ?',
        type: 'multiple-choice',
        options: ['27 pays', '28 pays', '25 pays', '30 pays'],
        correctAnswer: '27 pays',
        explanation: 'Depuis le Brexit (2020), l\'UE compte 27 États membres.',
        hints: ['Brexit', '27']
      },
      {
        id: 'q2',
        question: 'Tout citoyen d\'un pays de l\'UE est automatiquement :',
        type: 'multiple-choice',
        options: ['Citoyen européen', 'Citoyen français', 'Apatride', 'Résident permanent'],
        correctAnswer: 'Citoyen européen',
        explanation: 'La citoyenneté européenne s\'ajoute à la citoyenneté nationale.',
        hints: ['Double citoyenneté', 'Automatique']
      },
      {
        id: 'q3',
        question: 'Le Parlement européen est élu :',
        type: 'multiple-choice',
        options: ['Au suffrage universel direct par les citoyens', 'Par les gouvernements', 'Par la Commission', 'Par le Conseil'],
        correctAnswer: 'Au suffrage universel direct par les citoyens',
        explanation: 'Les citoyens européens élisent directement les eurodéputés tous les 5 ans.',
        hints: ['Vote direct', '5 ans']
      },
      {
        id: 'q4',
        question: 'La Commission européenne :',
        type: 'multiple-choice',
        options: ['Propose les lois européennes', 'Vote les lois', 'Juge les affaires', 'Élit le président'],
        correctAnswer: 'Propose les lois européennes',
        explanation: 'La Commission propose les textes de loi et veille à leur application.',
        hints: ['Proposer', 'Initiative']
      },
      {
        id: 'q5',
        question: 'La libre circulation dans l\'UE permet de :',
        type: 'multiple-choice',
        options: ['Voyager, travailler et s\'installer dans un autre pays de l\'UE', 'Voyager seulement', 'Travailler seulement', 'Rien de spécial'],
        correctAnswer: 'Voyager, travailler et s\'installer dans un autre pays de l\'UE',
        explanation: 'Les citoyens européens peuvent circuler, travailler et résider librement dans l\'UE.',
        hints: ['Liberté', 'Circulation']
      },
      {
        id: 'q6',
        question: 'L\'espace Schengen permet :',
        type: 'multiple-choice',
        options: ['De voyager sans contrôle aux frontières', 'D\'avoir la même monnaie', 'De voter aux élections', 'D\'avoir le même droit du travail'],
        correctAnswer: 'De voyager sans contrôle aux frontières',
        explanation: 'L\'espace Schengen a supprimé les contrôles aux frontières intérieures.',
        hints: ['Frontières', 'Sans contrôle']
      },
      {
        id: 'q7',
        question: 'La zone euro comprend les pays qui :',
        type: 'multiple-choice',
        options: ['Utilisent l\'euro comme monnaie', 'Sont dans l\'UE', 'Sont dans Schengen', 'Ont signé le traité de Rome'],
        correctAnswer: 'Utilisent l\'euro comme monnaie',
        explanation: 'Tous les pays de l\'UE n\'utilisent pas l\'euro (ex: Pologne, Suède).',
        hints: ['Monnaie', 'Euro']
      },
      {
        id: 'q8',
        question: 'Un citoyen européen peut voter aux élections :',
        type: 'multiple-choice',
        options: ['Municipales et européennes dans son pays de résidence', 'Présidentielles partout', 'Législatives partout', 'À toutes les élections'],
        correctAnswer: 'Municipales et européennes dans son pays de résidence',
        explanation: 'Un Européen résidant en France peut voter aux municipales et européennes.',
        hints: ['Municipales', 'Européennes']
      },
      {
        id: 'q9',
        question: 'Le Conseil de l\'Union européenne réunit :',
        type: 'multiple-choice',
        options: ['Les ministres des États membres', 'Les eurodéputés', 'Les commissaires', 'Les citoyens'],
        correctAnswer: 'Les ministres des États membres',
        explanation: 'Le Conseil réunit les ministres selon les sujets traités (agriculture, économie...).',
        hints: ['Ministres', 'États']
      },
      {
        id: 'q10',
        question: 'Le programme Erasmus+ permet aux étudiants de :',
        type: 'multiple-choice',
        options: ['Étudier dans un autre pays européen', 'Obtenir un diplôme européen', 'Travailler gratuitement', 'Devenir fonctionnaire européen'],
        correctAnswer: 'Étudier dans un autre pays européen',
        explanation: 'Erasmus+ finance des échanges d\'étudiants entre universités européennes.',
        hints: ['Étudiants', 'Échange']
      }
    ]
  },

  // ========== TECHNOLOGIE 5ème-3ème ==========

  // Technologie 5ème - Exercice 1
  {
    id: 'tech-5eme-001',
    title: 'Les objets techniques et leurs fonctions',
    subject: 'technologie',
    level: '5ème',
    difficulty: 2,
    description: 'Comprendre les fonctions des objets techniques et leur évolution',
    estimatedTime: 15,
    skills: ['Analyse fonctionnelle', 'Objets techniques', 'Besoins'],
    questions: [
      {
        id: 'q1',
        question: 'Qu\'est-ce qu\'un objet technique ?',
        type: 'multiple-choice',
        options: ['Un objet fabriqué par l\'homme pour répondre à un besoin', 'Un objet naturel', 'Un objet ancien', 'Un objet compliqué'],
        correctAnswer: 'Un objet fabriqué par l\'homme pour répondre à un besoin',
        explanation: 'Un objet technique est créé par l\'homme pour satisfaire un besoin.',
        hints: ['Fabriqué', 'Besoin']
      },
      {
        id: 'q2',
        question: 'La fonction d\'usage d\'un objet technique répond à la question :',
        type: 'multiple-choice',
        options: ['À quoi sert-il ?', 'Comment fonctionne-t-il ?', 'De quoi est-il fait ?', 'Qui l\'a inventé ?'],
        correctAnswer: 'À quoi sert-il ?',
        explanation: 'La fonction d\'usage définit le service rendu par l\'objet.',
        hints: ['Service rendu', 'Utilité']
      },
      {
        id: 'q3',
        question: 'La fonction d\'estime concerne :',
        type: 'multiple-choice',
        options: ['L\'apparence et l\'attrait de l\'objet', 'Son prix', 'Sa solidité', 'Sa taille'],
        correctAnswer: 'L\'apparence et l\'attrait de l\'objet',
        explanation: 'La fonction d\'estime est liée au design, à la marque, à l\'esthétique.',
        hints: ['Apparence', 'Design']
      },
      {
        id: 'q4',
        question: 'Le cahier des charges d\'un objet technique contient :',
        type: 'multiple-choice',
        options: ['Les contraintes et besoins à respecter', 'Les étapes de fabrication', 'Le prix de vente', 'Le nom du fabricant'],
        correctAnswer: 'Les contraintes et besoins à respecter',
        explanation: 'Le cahier des charges liste toutes les exigences du produit.',
        hints: ['Contraintes', 'Exigences']
      },
      {
        id: 'q5',
        question: 'Un vélo est un objet technique dont la fonction d\'usage est de :',
        type: 'multiple-choice',
        options: ['Se déplacer', 'Faire du sport', 'S\'amuser', 'Transporter des marchandises'],
        correctAnswer: 'Se déplacer',
        explanation: 'La fonction principale du vélo est le déplacement d\'une personne.',
        hints: ['Déplacement', 'Transport']
      },
      {
        id: 'q6',
        question: 'Quelle est la contrainte environnementale d\'un objet ?',
        type: 'multiple-choice',
        options: ['Son impact sur la nature', 'Son poids', 'Sa couleur', 'Son prix'],
        correctAnswer: 'Son impact sur la nature',
        explanation: 'Les contraintes environnementales concernent l\'écologie et le développement durable.',
        hints: ['Écologie', 'Nature']
      },
      {
        id: 'q7',
        question: 'L\'évolution d\'un objet technique au fil du temps est due à :',
        type: 'multiple-choice',
        options: ['Les progrès technologiques et les nouveaux besoins', 'Le hasard', 'La mode uniquement', 'Les lois'],
        correctAnswer: 'Les progrès technologiques et les nouveaux besoins',
        explanation: 'Les objets évoluent grâce aux innovations et aux nouveaux usages.',
        hints: ['Progrès', 'Innovation']
      },
      {
        id: 'q8',
        question: 'Une contrainte de sécurité pour un objet technique signifie qu\'il doit :',
        type: 'multiple-choice',
        options: ['Ne pas être dangereux pour l\'utilisateur', 'Être solide', 'Être cher', 'Être beau'],
        correctAnswer: 'Ne pas être dangereux pour l\'utilisateur',
        explanation: 'La sécurité de l\'utilisateur est une contrainte prioritaire.',
        hints: ['Danger', 'Utilisateur']
      },
      {
        id: 'q9',
        question: 'Un smartphone répond à plusieurs besoins. Lequel n\'en fait PAS partie ?',
        type: 'multiple-choice',
        options: ['Chauffer une maison', 'Communiquer', 'Se divertir', 'S\'informer'],
        correctAnswer: 'Chauffer une maison',
        explanation: 'Le smartphone permet de communiquer, se divertir et s\'informer, mais pas de chauffer.',
        hints: ['Chauffage', 'Téléphone']
      },
      {
        id: 'q10',
        question: 'Le diagramme "bête à cornes" permet de :',
        type: 'multiple-choice',
        options: ['Définir le besoin auquel répond l\'objet', 'Dessiner l\'objet', 'Calculer son prix', 'Lister ses matériaux'],
        correctAnswer: 'Définir le besoin auquel répond l\'objet',
        explanation: 'Ce diagramme identifie à qui rend service l\'objet et sur quoi il agit.',
        hints: ['Besoin', 'Service']
      }
    ]
  },

  // Technologie 5ème - Exercice 2
  {
    id: 'tech-5eme-002',
    title: 'Les matériaux et leurs propriétés',
    subject: 'technologie',
    level: '5ème',
    difficulty: 2,
    description: 'Identifier les différents matériaux et leurs caractéristiques',
    estimatedTime: 15,
    skills: ['Matériaux', 'Propriétés', 'Classification'],
    questions: [
      {
        id: 'q1',
        question: 'Quelle famille de matériaux comprend le fer, l\'aluminium et le cuivre ?',
        type: 'multiple-choice',
        options: ['Les métaux', 'Les plastiques', 'Les céramiques', 'Les composites'],
        correctAnswer: 'Les métaux',
        explanation: 'Le fer, l\'aluminium et le cuivre sont des métaux.',
        hints: ['Conducteurs', 'Brillants']
      },
      {
        id: 'q2',
        question: 'Le bois est un matériau d\'origine :',
        type: 'multiple-choice',
        options: ['Végétale', 'Animale', 'Minérale', 'Synthétique'],
        correctAnswer: 'Végétale',
        explanation: 'Le bois provient des arbres, c\'est donc un matériau d\'origine végétale.',
        hints: ['Arbres', 'Plantes']
      },
      {
        id: 'q3',
        question: 'Un matériau conducteur électrique laisse passer :',
        type: 'multiple-choice',
        options: ['Le courant électrique', 'La lumière', 'L\'eau', 'Le son'],
        correctAnswer: 'Le courant électrique',
        explanation: 'Les métaux sont de bons conducteurs électriques.',
        hints: ['Électricité', 'Courant']
      },
      {
        id: 'q4',
        question: 'Les plastiques sont généralement fabriqués à partir de :',
        type: 'multiple-choice',
        options: ['Pétrole', 'Bois', 'Fer', 'Sable'],
        correctAnswer: 'Pétrole',
        explanation: 'La plupart des plastiques sont issus de la pétrochimie.',
        hints: ['Hydrocarbures', 'Industrie chimique']
      },
      {
        id: 'q5',
        question: 'Un matériau recyclable est un matériau qui peut être :',
        type: 'multiple-choice',
        options: ['Réutilisé après transformation', 'Jeté sans problème', 'Utilisé une seule fois', 'Brûlé facilement'],
        correctAnswer: 'Réutilisé après transformation',
        explanation: 'Le recyclage permet de créer de nouveaux objets à partir de matériaux usagés.',
        hints: ['Réutilisation', 'Transformation']
      },
      {
        id: 'q6',
        question: 'La résistance mécanique d\'un matériau mesure sa capacité à :',
        type: 'multiple-choice',
        options: ['Supporter des efforts sans se casser', 'Conduire l\'électricité', 'Flotter sur l\'eau', 'Changer de couleur'],
        correctAnswer: 'Supporter des efforts sans se casser',
        explanation: 'La résistance mécanique indique la solidité du matériau.',
        hints: ['Solidité', 'Efforts']
      },
      {
        id: 'q7',
        question: 'Le verre est un matériau qui appartient à la famille des :',
        type: 'multiple-choice',
        options: ['Céramiques', 'Métaux', 'Plastiques', 'Composites'],
        correctAnswer: 'Céramiques',
        explanation: 'Le verre est fabriqué à partir de sable, comme les céramiques.',
        hints: ['Sable', 'Minéral']
      },
      {
        id: 'q8',
        question: 'Un matériau composite est constitué de :',
        type: 'multiple-choice',
        options: ['Plusieurs matériaux différents associés', 'Un seul matériau pur', 'Du bois uniquement', 'Du plastique recyclé'],
        correctAnswer: 'Plusieurs matériaux différents associés',
        explanation: 'Les composites combinent les propriétés de plusieurs matériaux (ex: fibre de carbone).',
        hints: ['Association', 'Plusieurs']
      },
      {
        id: 'q9',
        question: 'La biodégradabilité d\'un matériau signifie qu\'il peut :',
        type: 'multiple-choice',
        options: ['Se décomposer naturellement', 'Résister à l\'eau', 'Conduire la chaleur', 'Être très solide'],
        correctAnswer: 'Se décomposer naturellement',
        explanation: 'Un matériau biodégradable est dégradé par les micro-organismes.',
        hints: ['Nature', 'Décomposition']
      },
      {
        id: 'q10',
        question: 'Quel matériau est le meilleur conducteur de chaleur ?',
        type: 'multiple-choice',
        options: ['Le cuivre', 'Le bois', 'Le plastique', 'Le caoutchouc'],
        correctAnswer: 'Le cuivre',
        explanation: 'Le cuivre est un excellent conducteur thermique, utilisé dans les casseroles.',
        hints: ['Métal', 'Casseroles']
      }
    ]
  },

  // Technologie 5ème - Exercice 3
  {
    id: 'tech-5eme-003',
    title: 'L\'énergie et ses sources',
    subject: 'technologie',
    level: '5ème',
    difficulty: 2,
    description: 'Comprendre les différentes formes et sources d\'énergie',
    estimatedTime: 15,
    skills: ['Énergie', 'Sources d\'énergie', 'Développement durable'],
    questions: [
      {
        id: 'q1',
        question: 'Une énergie renouvelable est une énergie :',
        type: 'multiple-choice',
        options: ['Qui se reconstitue naturellement', 'Qui coûte cher', 'Qui pollue beaucoup', 'Qui est rare'],
        correctAnswer: 'Qui se reconstitue naturellement',
        explanation: 'Les énergies renouvelables se régénèrent naturellement (soleil, vent, eau).',
        hints: ['Inépuisable', 'Nature']
      },
      {
        id: 'q2',
        question: 'Quelle est l\'énergie produite par le soleil ?',
        type: 'multiple-choice',
        options: ['L\'énergie solaire', 'L\'énergie éolienne', 'L\'énergie hydraulique', 'L\'énergie nucléaire'],
        correctAnswer: 'L\'énergie solaire',
        explanation: 'Le soleil produit de l\'énergie lumineuse et thermique.',
        hints: ['Lumière', 'Chaleur']
      },
      {
        id: 'q3',
        question: 'L\'énergie éolienne provient de :',
        type: 'multiple-choice',
        options: ['Du vent', 'De l\'eau', 'Du soleil', 'Du pétrole'],
        correctAnswer: 'Du vent',
        explanation: 'Les éoliennes transforment l\'énergie du vent en électricité.',
        hints: ['Éoliennes', 'Air']
      },
      {
        id: 'q4',
        question: 'Le pétrole, le charbon et le gaz naturel sont des énergies :',
        type: 'multiple-choice',
        options: ['Fossiles', 'Renouvelables', 'Nucléaires', 'Hydrauliques'],
        correctAnswer: 'Fossiles',
        explanation: 'Ces énergies proviennent de la décomposition d\'organismes sur des millions d\'années.',
        hints: ['Anciennes', 'Millions d\'années']
      },
      {
        id: 'q5',
        question: 'Quelle est la forme d\'énergie produite par un barrage hydroélectrique ?',
        type: 'multiple-choice',
        options: ['L\'énergie électrique', 'L\'énergie chimique', 'L\'énergie nucléaire', 'L\'énergie thermique'],
        correctAnswer: 'L\'énergie électrique',
        explanation: 'Les barrages transforment l\'énergie de l\'eau en électricité.',
        hints: ['Électricité', 'Eau']
      },
      {
        id: 'q6',
        question: 'La chaîne d\'énergie d\'un objet décrit :',
        type: 'multiple-choice',
        options: ['Le parcours de l\'énergie de la source à l\'action', 'Le prix de l\'énergie', 'La couleur de l\'objet', 'Le poids de l\'objet'],
        correctAnswer: 'Le parcours de l\'énergie de la source à l\'action',
        explanation: 'La chaîne d\'énergie montre comment l\'énergie est transformée et transmise.',
        hints: ['Parcours', 'Transformation']
      },
      {
        id: 'q7',
        question: 'Un panneau photovoltaïque transforme :',
        type: 'multiple-choice',
        options: ['La lumière en électricité', 'Le vent en électricité', 'L\'eau en électricité', 'La chaleur en froid'],
        correctAnswer: 'La lumière en électricité',
        explanation: 'Les cellules photovoltaïques convertissent la lumière solaire en courant électrique.',
        hints: ['Soleil', 'Cellules']
      },
      {
        id: 'q8',
        question: 'L\'unité de mesure de l\'énergie est le :',
        type: 'multiple-choice',
        options: ['Joule', 'Mètre', 'Kilogramme', 'Litre'],
        correctAnswer: 'Joule',
        explanation: 'L\'énergie se mesure en joules (J) ou en kilowattheures (kWh).',
        hints: ['J', 'kWh']
      },
      {
        id: 'q9',
        question: 'La biomasse est une énergie produite à partir de :',
        type: 'multiple-choice',
        options: ['Matière organique (bois, déchets végétaux)', 'Du pétrole', 'De l\'uranium', 'Du vent'],
        correctAnswer: 'Matière organique (bois, déchets végétaux)',
        explanation: 'La biomasse utilise des matières organiques pour produire de l\'énergie.',
        hints: ['Végétaux', 'Organique']
      },
      {
        id: 'q10',
        question: 'Économiser l\'énergie permet de :',
        type: 'multiple-choice',
        options: ['Protéger l\'environnement et réduire les coûts', 'Augmenter la pollution', 'Gaspiller les ressources', 'Utiliser plus de pétrole'],
        correctAnswer: 'Protéger l\'environnement et réduire les coûts',
        explanation: 'Les économies d\'énergie réduisent les émissions de CO2 et les factures.',
        hints: ['Environnement', 'Économies']
      }
    ]
  },

  // Technologie 4ème - Exercice 1
  {
    id: 'tech-4eme-001',
    title: 'La programmation et les algorithmes',
    subject: 'technologie',
    level: '4ème',
    difficulty: 3,
    description: 'Comprendre les bases de la programmation et de l\'algorithmique',
    estimatedTime: 18,
    skills: ['Programmation', 'Algorithmes', 'Scratch'],
    questions: [
      {
        id: 'q1',
        question: 'Un algorithme est :',
        type: 'multiple-choice',
        options: ['Une suite d\'instructions pour résoudre un problème', 'Un type d\'ordinateur', 'Un langage de programmation', 'Un composant électronique'],
        correctAnswer: 'Une suite d\'instructions pour résoudre un problème',
        explanation: 'Un algorithme décrit les étapes à suivre pour atteindre un objectif.',
        hints: ['Instructions', 'Étapes']
      },
      {
        id: 'q2',
        question: 'Dans Scratch, pour répéter une action 10 fois, on utilise :',
        type: 'multiple-choice',
        options: ['Une boucle "répéter 10 fois"', 'Un bloc "si... alors"', 'Un bloc "attendre"', 'Un bloc "dire"'],
        correctAnswer: 'Une boucle "répéter 10 fois"',
        explanation: 'Les boucles permettent de répéter des instructions un certain nombre de fois.',
        hints: ['Boucle', 'Répétition']
      },
      {
        id: 'q3',
        question: 'Une variable en programmation permet de :',
        type: 'multiple-choice',
        options: ['Stocker une valeur qui peut changer', 'Dessiner un sprite', 'Jouer un son', 'Arrêter le programme'],
        correctAnswer: 'Stocker une valeur qui peut changer',
        explanation: 'Une variable est comme une boîte qui contient une valeur (nombre, texte...).',
        hints: ['Stockage', 'Valeur']
      },
      {
        id: 'q4',
        question: 'Une condition "Si... Alors" permet de :',
        type: 'multiple-choice',
        options: ['Exécuter du code seulement si une condition est vraie', 'Répéter du code', 'Créer un personnage', 'Jouer de la musique'],
        correctAnswer: 'Exécuter du code seulement si une condition est vraie',
        explanation: 'Les conditions permettent au programme de prendre des décisions.',
        hints: ['Test', 'Décision']
      },
      {
        id: 'q5',
        question: 'Un bug en programmation est :',
        type: 'multiple-choice',
        options: ['Une erreur dans le programme', 'Un nouveau personnage', 'Un effet spécial', 'Un raccourci clavier'],
        correctAnswer: 'Une erreur dans le programme',
        explanation: 'Un bug est un dysfonctionnement causé par une erreur dans le code.',
        hints: ['Erreur', 'Problème']
      },
      {
        id: 'q6',
        question: 'Que fait l\'instruction "x = x + 1" ?',
        type: 'multiple-choice',
        options: ['Elle augmente la valeur de x de 1', 'Elle met x à zéro', 'Elle supprime x', 'Elle crée une boucle'],
        correctAnswer: 'Elle augmente la valeur de x de 1',
        explanation: 'Cette instruction ajoute 1 à la valeur actuelle de x.',
        hints: ['Incrémentation', 'Ajouter 1']
      },
      {
        id: 'q7',
        question: 'Une boucle "répéter indéfiniment" s\'arrête quand :',
        type: 'multiple-choice',
        options: ['On arrête le programme', 'Elle a fait 100 répétitions', 'Le personnage touche le bord', 'La variable vaut 0'],
        correctAnswer: 'On arrête le programme',
        explanation: 'Une boucle infinie continue jusqu\'à ce qu\'on stoppe le programme.',
        hints: ['Infini', 'Stop']
      },
      {
        id: 'q8',
        question: 'Le terme "débugger" signifie :',
        type: 'multiple-choice',
        options: ['Corriger les erreurs d\'un programme', 'Créer un nouveau programme', 'Supprimer un fichier', 'Installer un logiciel'],
        correctAnswer: 'Corriger les erreurs d\'un programme',
        explanation: 'Débugger consiste à trouver et corriger les bugs.',
        hints: ['Corriger', 'Erreurs']
      },
      {
        id: 'q9',
        question: 'Un sprite dans Scratch est :',
        type: 'multiple-choice',
        options: ['Un personnage ou objet qu\'on peut programmer', 'Un fichier musical', 'Un type de variable', 'Un outil de dessin'],
        correctAnswer: 'Un personnage ou objet qu\'on peut programmer',
        explanation: 'Les sprites sont les éléments visuels qu\'on anime dans Scratch.',
        hints: ['Personnage', 'Image']
      },
      {
        id: 'q10',
        question: 'L\'opérateur "ET" dans une condition signifie que :',
        type: 'multiple-choice',
        options: ['Les deux conditions doivent être vraies', 'Une seule condition suffit', 'Aucune condition n\'est nécessaire', 'Les conditions sont inversées'],
        correctAnswer: 'Les deux conditions doivent être vraies',
        explanation: 'L\'opérateur ET exige que toutes les conditions soient satisfaites.',
        hints: ['Deux', 'Toutes vraies']
      }
    ]
  },

  // Technologie 4ème - Exercice 2
  {
    id: 'tech-4eme-002',
    title: 'Les réseaux informatiques',
    subject: 'technologie',
    level: '4ème',
    difficulty: 3,
    description: 'Comprendre le fonctionnement des réseaux et d\'Internet',
    estimatedTime: 18,
    skills: ['Réseaux', 'Internet', 'Protocoles'],
    questions: [
      {
        id: 'q1',
        question: 'Internet est :',
        type: 'multiple-choice',
        options: ['Un réseau mondial d\'ordinateurs interconnectés', 'Un logiciel', 'Un moteur de recherche', 'Un navigateur web'],
        correctAnswer: 'Un réseau mondial d\'ordinateurs interconnectés',
        explanation: 'Internet relie des millions d\'ordinateurs dans le monde entier.',
        hints: ['Mondial', 'Connexion']
      },
      {
        id: 'q2',
        question: 'Une adresse IP permet d\'identifier :',
        type: 'multiple-choice',
        options: ['Un appareil sur le réseau', 'Un site web', 'Un mot de passe', 'Un fichier'],
        correctAnswer: 'Un appareil sur le réseau',
        explanation: 'Chaque appareil connecté possède une adresse IP unique.',
        hints: ['Identifiant', 'Appareil']
      },
      {
        id: 'q3',
        question: 'Le protocole HTTP est utilisé pour :',
        type: 'multiple-choice',
        options: ['Afficher des pages web', 'Envoyer des emails', 'Télécharger des fichiers', 'Jouer en ligne'],
        correctAnswer: 'Afficher des pages web',
        explanation: 'HTTP (HyperText Transfer Protocol) transfère les pages web.',
        hints: ['Web', 'Pages']
      },
      {
        id: 'q4',
        question: 'Un routeur sert à :',
        type: 'multiple-choice',
        options: ['Diriger les données entre réseaux', 'Stocker des fichiers', 'Afficher des images', 'Imprimer des documents'],
        correctAnswer: 'Diriger les données entre réseaux',
        explanation: 'Le routeur achemine les données vers leur destination.',
        hints: ['Direction', 'Données']
      },
      {
        id: 'q5',
        question: 'Le Wi-Fi permet de se connecter à un réseau :',
        type: 'multiple-choice',
        options: ['Sans fil', 'Par câble uniquement', 'Par satellite', 'Par téléphone'],
        correctAnswer: 'Sans fil',
        explanation: 'Wi-Fi signifie Wireless Fidelity, connexion sans fil.',
        hints: ['Sans câble', 'Ondes']
      },
      {
        id: 'q6',
        question: 'Un serveur est un ordinateur qui :',
        type: 'multiple-choice',
        options: ['Fournit des services aux autres ordinateurs', 'Sert uniquement à jouer', 'N\'a pas de connexion Internet', 'Est toujours éteint'],
        correctAnswer: 'Fournit des services aux autres ordinateurs',
        explanation: 'Les serveurs hébergent des sites web, stockent des données, etc.',
        hints: ['Services', 'Hébergement']
      },
      {
        id: 'q7',
        question: 'Le protocole HTTPS est plus sécurisé que HTTP car :',
        type: 'multiple-choice',
        options: ['Les données sont chiffrées', 'Il est plus rapide', 'Il est gratuit', 'Il utilise moins de données'],
        correctAnswer: 'Les données sont chiffrées',
        explanation: 'Le S de HTTPS signifie Secure, les données sont cryptées.',
        hints: ['Sécurité', 'Chiffrement']
      },
      {
        id: 'q8',
        question: 'Un nom de domaine (ex: google.com) est :',
        type: 'multiple-choice',
        options: ['L\'adresse textuelle d\'un site web', 'Un mot de passe', 'Un type de fichier', 'Un logiciel'],
        correctAnswer: 'L\'adresse textuelle d\'un site web',
        explanation: 'Le nom de domaine est plus facile à retenir qu\'une adresse IP.',
        hints: ['Adresse', 'Site']
      },
      {
        id: 'q9',
        question: 'Le cloud computing permet de :',
        type: 'multiple-choice',
        options: ['Stocker des données sur des serveurs distants', 'Créer des nuages', 'Programmer la météo', 'Réparer son ordinateur'],
        correctAnswer: 'Stocker des données sur des serveurs distants',
        explanation: 'Le cloud (nuage) désigne des services hébergés sur Internet.',
        hints: ['Distant', 'En ligne']
      },
      {
        id: 'q10',
        question: 'La bande passante mesure :',
        type: 'multiple-choice',
        options: ['La quantité de données transmises par seconde', 'La taille de l\'écran', 'Le poids de l\'ordinateur', 'Le prix de la connexion'],
        correctAnswer: 'La quantité de données transmises par seconde',
        explanation: 'La bande passante s\'exprime en Mbit/s ou Gbit/s.',
        hints: ['Débit', 'Vitesse']
      }
    ]
  },

  // Technologie 4ème - Exercice 3
  {
    id: 'tech-4eme-003',
    title: 'La conception et la modélisation 3D',
    subject: 'technologie',
    level: '4ème',
    difficulty: 3,
    description: 'Comprendre les principes de la conception assistée par ordinateur',
    estimatedTime: 18,
    skills: ['CAO', 'Modélisation 3D', 'Conception'],
    questions: [
      {
        id: 'q1',
        question: 'CAO signifie :',
        type: 'multiple-choice',
        options: ['Conception Assistée par Ordinateur', 'Construction Automatique d\'Objets', 'Création Artistique Originale', 'Calcul Avancé Optimisé'],
        correctAnswer: 'Conception Assistée par Ordinateur',
        explanation: 'La CAO utilise des logiciels pour dessiner et concevoir des objets.',
        hints: ['Conception', 'Ordinateur']
      },
      {
        id: 'q2',
        question: 'Un modèle 3D représente un objet en :',
        type: 'multiple-choice',
        options: ['Trois dimensions (largeur, hauteur, profondeur)', 'Deux dimensions', 'Une seule dimension', 'Quatre dimensions'],
        correctAnswer: 'Trois dimensions (largeur, hauteur, profondeur)',
        explanation: 'Le 3D ajoute la profondeur aux dimensions largeur et hauteur.',
        hints: ['Volume', 'Espace']
      },
      {
        id: 'q3',
        question: 'Une imprimante 3D permet de :',
        type: 'multiple-choice',
        options: ['Fabriquer des objets en 3D couche par couche', 'Imprimer des photos', 'Scanner des documents', 'Envoyer des fax'],
        correctAnswer: 'Fabriquer des objets en 3D couche par couche',
        explanation: 'L\'impression 3D dépose de la matière couche par couche.',
        hints: ['Fabrication', 'Couches']
      },
      {
        id: 'q4',
        question: 'Le format de fichier STL est utilisé pour :',
        type: 'multiple-choice',
        options: ['L\'impression 3D', 'La musique', 'Les vidéos', 'Les textes'],
        correctAnswer: 'L\'impression 3D',
        explanation: 'STL (STereoLithography) est le format standard pour l\'impression 3D.',
        hints: ['3D', 'Impression']
      },
      {
        id: 'q5',
        question: 'Une vue en coupe d\'un objet permet de voir :',
        type: 'multiple-choice',
        options: ['L\'intérieur de l\'objet', 'L\'objet de face', 'L\'objet de dessus', 'L\'objet de côté'],
        correctAnswer: 'L\'intérieur de l\'objet',
        explanation: 'La vue en coupe montre l\'objet comme s\'il était coupé.',
        hints: ['Intérieur', 'Coupé']
      },
      {
        id: 'q6',
        question: 'Dans un logiciel de CAO, l\'extrusion permet de :',
        type: 'multiple-choice',
        options: ['Donner du volume à une forme 2D', 'Changer la couleur', 'Supprimer un objet', 'Copier un fichier'],
        correctAnswer: 'Donner du volume à une forme 2D',
        explanation: 'L\'extrusion "tire" une forme plate pour créer un volume.',
        hints: ['Volume', 'Épaisseur']
      },
      {
        id: 'q7',
        question: 'Un prototype est :',
        type: 'multiple-choice',
        options: ['Un premier modèle pour tester un produit', 'Le produit final', 'Un emballage', 'Une publicité'],
        correctAnswer: 'Un premier modèle pour tester un produit',
        explanation: 'Le prototype permet de valider la conception avant la production.',
        hints: ['Premier', 'Test']
      },
      {
        id: 'q8',
        question: 'La cotation sur un plan technique indique :',
        type: 'multiple-choice',
        options: ['Les dimensions de l\'objet', 'Le prix de l\'objet', 'Le nom du créateur', 'La date de création'],
        correctAnswer: 'Les dimensions de l\'objet',
        explanation: 'Les cotes donnent les mesures précises en millimètres ou centimètres.',
        hints: ['Dimensions', 'Mesures']
      },
      {
        id: 'q9',
        question: 'Le matériau le plus utilisé en impression 3D grand public est :',
        type: 'multiple-choice',
        options: ['Le PLA (plastique biodégradable)', 'Le métal', 'Le verre', 'Le bois'],
        correctAnswer: 'Le PLA (plastique biodégradable)',
        explanation: 'Le PLA est un plastique facile à imprimer et écologique.',
        hints: ['Plastique', 'Biodégradable']
      },
      {
        id: 'q10',
        question: 'Une maquette numérique permet de :',
        type: 'multiple-choice',
        options: ['Visualiser et tester un projet avant fabrication', 'Imprimer des photos', 'Naviguer sur Internet', 'Jouer à des jeux vidéo'],
        correctAnswer: 'Visualiser et tester un projet avant fabrication',
        explanation: 'La maquette numérique évite les erreurs coûteuses.',
        hints: ['Visualisation', 'Simulation']
      }
    ]
  },

  // Technologie 3ème - Exercice 1
  {
    id: 'tech-3eme-001',
    title: 'Les systèmes automatisés et la robotique',
    subject: 'technologie',
    level: '3ème',
    difficulty: 4,
    description: 'Comprendre le fonctionnement des systèmes automatisés et des robots',
    estimatedTime: 20,
    skills: ['Automatismes', 'Robotique', 'Capteurs', 'Actionneurs'],
    questions: [
      {
        id: 'q1',
        question: 'Un système automatisé est composé de trois parties principales :',
        type: 'multiple-choice',
        options: ['Partie commande, partie opérative, partie relation', 'Écran, clavier, souris', 'Moteur, roue, batterie', 'Capteur, fil, prise'],
        correctAnswer: 'Partie commande, partie opérative, partie relation',
        explanation: 'Ces trois parties permettent au système de fonctionner de façon autonome.',
        hints: ['Commande', 'Opérative']
      },
      {
        id: 'q2',
        question: 'Un capteur permet de :',
        type: 'multiple-choice',
        options: ['Mesurer une grandeur physique (température, lumière...)', 'Faire bouger un objet', 'Stocker des données', 'Afficher des images'],
        correctAnswer: 'Mesurer une grandeur physique (température, lumière...)',
        explanation: 'Les capteurs transforment une grandeur physique en signal électrique.',
        hints: ['Mesure', 'Information']
      },
      {
        id: 'q3',
        question: 'Un actionneur permet de :',
        type: 'multiple-choice',
        options: ['Produire un mouvement ou une action', 'Mesurer la température', 'Enregistrer des données', 'Lire des codes-barres'],
        correctAnswer: 'Produire un mouvement ou une action',
        explanation: 'Les actionneurs convertissent l\'énergie en mouvement (moteur, vérin).',
        hints: ['Mouvement', 'Action']
      },
      {
        id: 'q4',
        question: 'Un microcontrôleur (comme Arduino) est :',
        type: 'multiple-choice',
        options: ['Un petit ordinateur programmable', 'Un type de batterie', 'Un écran tactile', 'Un câble de connexion'],
        correctAnswer: 'Un petit ordinateur programmable',
        explanation: 'Le microcontrôleur exécute le programme qui pilote le système.',
        hints: ['Programme', 'Cerveau']
      },
      {
        id: 'q5',
        question: 'La boucle de rétroaction (feedback) permet au système de :',
        type: 'multiple-choice',
        options: ['S\'adapter en fonction des informations reçues', 'S\'éteindre automatiquement', 'Changer de couleur', 'Augmenter sa vitesse'],
        correctAnswer: 'S\'adapter en fonction des informations reçues',
        explanation: 'Le feedback permet de corriger le fonctionnement en temps réel.',
        hints: ['Adaptation', 'Correction']
      },
      {
        id: 'q6',
        question: 'Un servomoteur est un actionneur qui permet :',
        type: 'multiple-choice',
        options: ['Un positionnement angulaire précis', 'De mesurer la lumière', 'D\'afficher du texte', 'De produire du son'],
        correctAnswer: 'Un positionnement angulaire précis',
        explanation: 'Les servomoteurs peuvent tourner à un angle précis (0° à 180°).',
        hints: ['Angle', 'Position']
      },
      {
        id: 'q7',
        question: 'Un capteur ultrason mesure :',
        type: 'multiple-choice',
        options: ['La distance par rapport à un obstacle', 'La température', 'L\'humidité', 'La pression'],
        correctAnswer: 'La distance par rapport à un obstacle',
        explanation: 'Il émet des ultrasons et calcule la distance avec le temps de retour.',
        hints: ['Distance', 'Obstacle']
      },
      {
        id: 'q8',
        question: 'L\'intelligence artificielle permet aux robots de :',
        type: 'multiple-choice',
        options: ['Apprendre et s\'adapter de façon autonome', 'Devenir humains', 'Voler sans moteur', 'Fonctionner sans énergie'],
        correctAnswer: 'Apprendre et s\'adapter de façon autonome',
        explanation: 'L\'IA permet aux machines d\'améliorer leurs performances par l\'apprentissage.',
        hints: ['Apprentissage', 'Autonomie']
      },
      {
        id: 'q9',
        question: 'Un algorithme de suivi de ligne utilise principalement :',
        type: 'multiple-choice',
        options: ['Des capteurs infrarouges', 'Des capteurs de température', 'Des capteurs de son', 'Des capteurs de pression'],
        correctAnswer: 'Des capteurs infrarouges',
        explanation: 'Les capteurs IR détectent le contraste entre la ligne et le sol.',
        hints: ['Infrarouge', 'Contraste']
      },
      {
        id: 'q10',
        question: 'La domotique est l\'automatisation :',
        type: 'multiple-choice',
        options: ['De la maison', 'Des voitures', 'Des usines', 'Des hôpitaux'],
        correctAnswer: 'De la maison',
        explanation: 'La domotique rend les habitations "intelligentes" (éclairage, chauffage...).',
        hints: ['Maison', 'Habitat']
      }
    ]
  },

  // Technologie 3ème - Exercice 2
  {
    id: 'tech-3eme-002',
    title: 'Le développement durable et l\'éco-conception',
    subject: 'technologie',
    level: '3ème',
    difficulty: 4,
    description: 'Comprendre les enjeux du développement durable dans la conception des objets',
    estimatedTime: 20,
    skills: ['Développement durable', 'Éco-conception', 'Cycle de vie'],
    questions: [
      {
        id: 'q1',
        question: 'Le développement durable repose sur trois piliers :',
        type: 'multiple-choice',
        options: ['Économique, social et environnemental', 'Terre, eau et air', 'Passé, présent et futur', 'Local, national et mondial'],
        correctAnswer: 'Économique, social et environnemental',
        explanation: 'Ces trois dimensions doivent être équilibrées pour un développement durable.',
        hints: ['Trois piliers', 'Équilibre']
      },
      {
        id: 'q2',
        question: 'L\'éco-conception consiste à :',
        type: 'multiple-choice',
        options: ['Intégrer l\'environnement dès la conception d\'un produit', 'Fabriquer des produits plus chers', 'Utiliser uniquement du plastique', 'Ignorer le recyclage'],
        correctAnswer: 'Intégrer l\'environnement dès la conception d\'un produit',
        explanation: 'L\'éco-conception minimise l\'impact environnemental sur tout le cycle de vie.',
        hints: ['Environnement', 'Conception']
      },
      {
        id: 'q3',
        question: 'Le cycle de vie d\'un produit comprend :',
        type: 'multiple-choice',
        options: ['Extraction, fabrication, utilisation, fin de vie', 'Achat et vente uniquement', 'Publicité et marketing', 'Emballage et transport'],
        correctAnswer: 'Extraction, fabrication, utilisation, fin de vie',
        explanation: 'Chaque étape du cycle de vie a un impact environnemental.',
        hints: ['Étapes', 'De la naissance à la mort']
      },
      {
        id: 'q4',
        question: 'L\'empreinte carbone mesure :',
        type: 'multiple-choice',
        options: ['Les émissions de gaz à effet de serre', 'Le poids d\'un objet', 'La taille d\'un écran', 'La vitesse de fabrication'],
        correctAnswer: 'Les émissions de gaz à effet de serre',
        explanation: 'L\'empreinte carbone s\'exprime en kg équivalent CO2.',
        hints: ['CO2', 'Gaz à effet de serre']
      },
      {
        id: 'q5',
        question: 'L\'obsolescence programmée est :',
        type: 'multiple-choice',
        options: ['La réduction volontaire de la durée de vie d\'un produit', 'L\'amélioration d\'un produit', 'La réparation d\'un produit', 'Le recyclage d\'un produit'],
        correctAnswer: 'La réduction volontaire de la durée de vie d\'un produit',
        explanation: 'Cette pratique pousse les consommateurs à racheter plus souvent.',
        hints: ['Durée de vie', 'Remplacement']
      },
      {
        id: 'q6',
        question: 'L\'économie circulaire vise à :',
        type: 'multiple-choice',
        options: ['Réduire les déchets en réutilisant les ressources', 'Augmenter la production', 'Jeter plus facilement', 'Consommer davantage'],
        correctAnswer: 'Réduire les déchets en réutilisant les ressources',
        explanation: 'L\'économie circulaire s\'oppose au modèle linéaire "extraire-fabriquer-jeter".',
        hints: ['Réutilisation', 'Pas de déchets']
      },
      {
        id: 'q7',
        question: 'Un éco-label sur un produit indique :',
        type: 'multiple-choice',
        options: ['Qu\'il respecte des critères environnementaux', 'Qu\'il est moins cher', 'Qu\'il est fabriqué en France', 'Qu\'il est de couleur verte'],
        correctAnswer: 'Qu\'il respecte des critères environnementaux',
        explanation: 'Les éco-labels certifient le respect de normes écologiques.',
        hints: ['Certification', 'Environnement']
      },
      {
        id: 'q8',
        question: 'L\'ACV (Analyse du Cycle de Vie) permet d\'évaluer :',
        type: 'multiple-choice',
        options: ['L\'impact environnemental d\'un produit sur toute sa vie', 'Le prix de vente', 'La date de fabrication', 'Le nombre de ventes'],
        correctAnswer: 'L\'impact environnemental d\'un produit sur toute sa vie',
        explanation: 'L\'ACV quantifie tous les impacts (eau, énergie, pollution...).',
        hints: ['Impact', 'Toute la vie']
      },
      {
        id: 'q9',
        question: 'Le terme "upcycling" désigne :',
        type: 'multiple-choice',
        options: ['La transformation de déchets en produits de valeur supérieure', 'Le tri des déchets', 'L\'incinération des déchets', 'L\'enfouissement des déchets'],
        correctAnswer: 'La transformation de déchets en produits de valeur supérieure',
        explanation: 'L\'upcycling donne une seconde vie plus noble aux objets.',
        hints: ['Valorisation', 'Transformation']
      },
      {
        id: 'q10',
        question: 'Les 3R du développement durable sont :',
        type: 'multiple-choice',
        options: ['Réduire, Réutiliser, Recycler', 'Rouge, Rose, Roux', 'Rapide, Rentable, Robuste', 'Riche, Rare, Recherché'],
        correctAnswer: 'Réduire, Réutiliser, Recycler',
        explanation: 'Ces trois actions, dans cet ordre, minimisent notre impact.',
        hints: ['Trois actions', 'Hiérarchie']
      }
    ]
  },

  // Technologie 3ème - Exercice 3
  {
    id: 'tech-3eme-003',
    title: 'La communication et les objets connectés',
    subject: 'technologie',
    level: '3ème',
    difficulty: 4,
    description: 'Comprendre l\'Internet des objets et les technologies de communication',
    estimatedTime: 20,
    skills: ['IoT', 'Communication', 'Objets connectés'],
    questions: [
      {
        id: 'q1',
        question: 'L\'IoT (Internet of Things) désigne :',
        type: 'multiple-choice',
        options: ['L\'Internet des objets connectés', 'Un nouveau réseau social', 'Un type de smartphone', 'Un langage de programmation'],
        correctAnswer: 'L\'Internet des objets connectés',
        explanation: 'L\'IoT relie des objets du quotidien à Internet.',
        hints: ['Objets', 'Connectés']
      },
      {
        id: 'q2',
        question: 'Le Bluetooth est une technologie de communication :',
        type: 'multiple-choice',
        options: ['Sans fil à courte portée', 'Par câble', 'Par satellite', 'Par fibre optique'],
        correctAnswer: 'Sans fil à courte portée',
        explanation: 'Le Bluetooth fonctionne sur quelques mètres (10-100m).',
        hints: ['Sans fil', 'Courte distance']
      },
      {
        id: 'q3',
        question: 'Un objet connecté typique comprend :',
        type: 'multiple-choice',
        options: ['Capteurs, processeur et module de communication', 'Uniquement un écran', 'Seulement une batterie', 'Un clavier mécanique'],
        correctAnswer: 'Capteurs, processeur et module de communication',
        explanation: 'Ces composants permettent de collecter et transmettre des données.',
        hints: ['Capteurs', 'Communication']
      },
      {
        id: 'q4',
        question: 'La 5G est :',
        type: 'multiple-choice',
        options: ['La 5ème génération de réseaux mobiles', 'Un type de Wi-Fi', 'Un satellite', 'Une marque de téléphone'],
        correctAnswer: 'La 5ème génération de réseaux mobiles',
        explanation: 'La 5G offre des débits très élevés et une faible latence.',
        hints: ['Mobile', 'Génération']
      },
      {
        id: 'q5',
        question: 'Le protocole RFID permet :',
        type: 'multiple-choice',
        options: ['L\'identification par radiofréquence', 'La connexion Wi-Fi', 'Le transfert de vidéos', 'La recharge sans fil'],
        correctAnswer: 'L\'identification par radiofréquence',
        explanation: 'Les puces RFID identifient des objets sans contact (badges, antivol...).',
        hints: ['Radio', 'Identification']
      },
      {
        id: 'q6',
        question: 'Un assistant vocal (Alexa, Google Home) utilise :',
        type: 'multiple-choice',
        options: ['La reconnaissance vocale et l\'IA', 'Uniquement le Bluetooth', 'La 2G', 'Le code Morse'],
        correctAnswer: 'La reconnaissance vocale et l\'IA',
        explanation: 'Ces assistants comprennent la parole grâce à l\'intelligence artificielle.',
        hints: ['Voix', 'IA']
      },
      {
        id: 'q7',
        question: 'Le NFC (Near Field Communication) fonctionne à une distance de :',
        type: 'multiple-choice',
        options: ['Quelques centimètres', 'Plusieurs kilomètres', '100 mètres', '1 mètre'],
        correctAnswer: 'Quelques centimètres',
        explanation: 'Le NFC nécessite un contact très proche (paiement sans contact).',
        hints: ['Très proche', 'Contact']
      },
      {
        id: 'q8',
        question: 'Les données collectées par les objets connectés posent des questions de :',
        type: 'multiple-choice',
        options: ['Vie privée et sécurité', 'Couleur et design', 'Prix et poids', 'Taille et forme'],
        correctAnswer: 'Vie privée et sécurité',
        explanation: 'Les données personnelles peuvent être piratées ou mal utilisées.',
        hints: ['Données personnelles', 'Piratage']
      },
      {
        id: 'q9',
        question: 'Une maison connectée permet de :',
        type: 'multiple-choice',
        options: ['Contrôler les équipements à distance', 'Construire plus vite', 'Réduire la taille du logement', 'Supprimer l\'électricité'],
        correctAnswer: 'Contrôler les équipements à distance',
        explanation: 'Chauffage, éclairage, volets peuvent être pilotés par smartphone.',
        hints: ['Contrôle', 'À distance']
      },
      {
        id: 'q10',
        question: 'Le terme "wearable" désigne :',
        type: 'multiple-choice',
        options: ['Un objet connecté qu\'on porte sur soi', 'Un ordinateur de bureau', 'Un téléviseur', 'Un réfrigérateur'],
        correctAnswer: 'Un objet connecté qu\'on porte sur soi',
        explanation: 'Montres, bracelets et lunettes connectés sont des wearables.',
        hints: ['Porter', 'Sur soi']
      }
    ]
  },

  // ========== ARTS PLASTIQUES 6ème-3ème ==========

  // Arts plastiques 6ème - Exercice 1
  {
    id: 'arts-6eme-001',
    title: 'Les couleurs et le cercle chromatique',
    subject: 'arts-plastiques',
    level: '6ème',
    difficulty: 1,
    description: 'Découvrir les couleurs primaires, secondaires et le cercle chromatique',
    estimatedTime: 12,
    skills: ['Couleurs', 'Cercle chromatique', 'Mélanges'],
    questions: [
      {
        id: 'q1',
        question: 'Quelles sont les trois couleurs primaires en peinture ?',
        type: 'multiple-choice',
        options: ['Rouge, jaune, bleu', 'Vert, orange, violet', 'Noir, blanc, gris', 'Rose, turquoise, marron'],
        correctAnswer: 'Rouge, jaune, bleu',
        explanation: 'Les couleurs primaires ne peuvent pas être obtenues par mélange.',
        hints: ['Magenta/cyan/jaune en imprimerie', 'Base de tous les mélanges']
      },
      {
        id: 'q2',
        question: 'Quelle couleur obtient-on en mélangeant du bleu et du jaune ?',
        type: 'multiple-choice',
        options: ['Vert', 'Orange', 'Violet', 'Marron'],
        correctAnswer: 'Vert',
        explanation: 'Le vert est une couleur secondaire issue du mélange bleu + jaune.',
        hints: ['Couleur de la nature', 'Herbe, feuilles']
      },
      {
        id: 'q3',
        question: 'Une couleur complémentaire est :',
        type: 'multiple-choice',
        options: ['La couleur opposée sur le cercle chromatique', 'Une couleur plus claire', 'Une couleur primaire', 'Une couleur neutre'],
        correctAnswer: 'La couleur opposée sur le cercle chromatique',
        explanation: 'Rouge/vert, bleu/orange, jaune/violet sont des paires complémentaires.',
        hints: ['Opposée', 'Contraste maximum']
      },
      {
        id: 'q4',
        question: 'Les couleurs chaudes sont :',
        type: 'multiple-choice',
        options: ['Rouge, orange, jaune', 'Bleu, vert, violet', 'Noir, blanc, gris', 'Toutes les couleurs'],
        correctAnswer: 'Rouge, orange, jaune',
        explanation: 'Les couleurs chaudes évoquent le feu, le soleil, la chaleur.',
        hints: ['Feu', 'Soleil']
      },
      {
        id: 'q5',
        question: 'Quelle couleur secondaire obtient-on en mélangeant rouge et bleu ?',
        type: 'multiple-choice',
        options: ['Violet', 'Vert', 'Orange', 'Marron'],
        correctAnswer: 'Violet',
        explanation: 'Le violet (ou pourpre) est le mélange du rouge et du bleu.',
        hints: ['Couleur royale', 'Améthyste']
      },
      {
        id: 'q6',
        question: 'Ajouter du blanc à une couleur permet de créer :',
        type: 'multiple-choice',
        options: ['Une teinte plus claire (ton pastel)', 'Une teinte plus foncée', 'Une couleur complémentaire', 'Une couleur primaire'],
        correctAnswer: 'Une teinte plus claire (ton pastel)',
        explanation: 'On obtient des tons pastels en ajoutant du blanc.',
        hints: ['Plus clair', 'Pastel']
      },
      {
        id: 'q7',
        question: 'Le noir, le blanc et le gris sont appelés :',
        type: 'multiple-choice',
        options: ['Couleurs neutres ou achromatiques', 'Couleurs primaires', 'Couleurs chaudes', 'Couleurs froides'],
        correctAnswer: 'Couleurs neutres ou achromatiques',
        explanation: 'Ces couleurs n\'ont pas de teinte propre, elles sont sans couleur.',
        hints: ['Neutres', 'Sans teinte']
      },
      {
        id: 'q8',
        question: 'Un camaïeu est :',
        type: 'multiple-choice',
        options: ['Une harmonie de différentes nuances d\'une même couleur', 'Un mélange de toutes les couleurs', 'Un contraste fort', 'Une couleur primaire'],
        correctAnswer: 'Une harmonie de différentes nuances d\'une même couleur',
        explanation: 'Un camaïeu de bleus utilise différentes nuances de bleu.',
        hints: ['Une seule couleur', 'Variations']
      },
      {
        id: 'q9',
        question: 'Quelle couleur obtient-on en mélangeant rouge et jaune ?',
        type: 'multiple-choice',
        options: ['Orange', 'Vert', 'Violet', 'Rose'],
        correctAnswer: 'Orange',
        explanation: 'L\'orange est une couleur secondaire chaude.',
        hints: ['Fruit', 'Coucher de soleil']
      },
      {
        id: 'q10',
        question: 'Dans le cercle chromatique, les couleurs qui se touchent sont dites :',
        type: 'multiple-choice',
        options: ['Analogues ou voisines', 'Complémentaires', 'Opposées', 'Neutres'],
        correctAnswer: 'Analogues ou voisines',
        explanation: 'Les couleurs analogues créent des harmonies douces.',
        hints: ['Voisines', 'Proches']
      }
    ]
  },

  // Arts plastiques 6ème - Exercice 2
  {
    id: 'arts-6eme-002',
    title: 'Les outils et techniques de base',
    subject: 'arts-plastiques',
    level: '6ème',
    difficulty: 1,
    description: 'Connaître les outils et techniques fondamentaux en arts plastiques',
    estimatedTime: 12,
    skills: ['Outils', 'Techniques', 'Matériaux'],
    questions: [
      {
        id: 'q1',
        question: 'La gouache est une peinture :',
        type: 'multiple-choice',
        options: ['À l\'eau, opaque et couvrante', 'À l\'huile, brillante', 'Qui ne sèche jamais', 'Transparente uniquement'],
        correctAnswer: 'À l\'eau, opaque et couvrante',
        explanation: 'La gouache se dilue à l\'eau et peut couvrir complètement le support.',
        hints: ['Eau', 'Opaque']
      },
      {
        id: 'q2',
        question: 'Le fusain est utilisé pour :',
        type: 'multiple-choice',
        options: ['Dessiner en noir avec des dégradés', 'Peindre en couleurs', 'Coller du papier', 'Sculpter'],
        correctAnswer: 'Dessiner en noir avec des dégradés',
        explanation: 'Le fusain est un bâton de charbon de bois pour le dessin.',
        hints: ['Charbon', 'Noir']
      },
      {
        id: 'q3',
        question: 'Le collage est une technique qui consiste à :',
        type: 'multiple-choice',
        options: ['Assembler des éléments sur un support', 'Peindre avec les doigts', 'Sculpter l\'argile', 'Dessiner au crayon'],
        correctAnswer: 'Assembler des éléments sur un support',
        explanation: 'On colle papiers, images, objets pour créer une composition.',
        hints: ['Coller', 'Assembler']
      },
      {
        id: 'q4',
        question: 'Un aplat de couleur est :',
        type: 'multiple-choice',
        options: ['Une surface de couleur uniforme, sans dégradé', 'Un dégradé de couleur', 'Un mélange de couleurs', 'Une tache aléatoire'],
        correctAnswer: 'Une surface de couleur uniforme, sans dégradé',
        explanation: 'L\'aplat est une couleur plate, sans variation.',
        hints: ['Uniforme', 'Plat']
      },
      {
        id: 'q5',
        question: 'L\'aquarelle se caractérise par :',
        type: 'multiple-choice',
        options: ['Sa transparence et ses effets de légèreté', 'Son épaisseur et son opacité', 'Sa brillance comme le vernis', 'Sa texture granuleuse'],
        correctAnswer: 'Sa transparence et ses effets de légèreté',
        explanation: 'L\'aquarelle est une peinture transparente à l\'eau.',
        hints: ['Transparent', 'Léger']
      },
      {
        id: 'q6',
        question: 'Pour étaler la peinture uniformément, on utilise :',
        type: 'multiple-choice',
        options: ['Un pinceau plat ou une brosse', 'Un crayon de papier', 'Des ciseaux', 'Une règle'],
        correctAnswer: 'Un pinceau plat ou une brosse',
        explanation: 'Les pinceaux plats permettent des aplats réguliers.',
        hints: ['Pinceau', 'Brosse']
      },
      {
        id: 'q7',
        question: 'Le pastel sec est :',
        type: 'multiple-choice',
        options: ['Un bâtonnet de pigment coloré qu\'on peut estomper', 'Une peinture liquide', 'Un type de colle', 'Un outil de découpe'],
        correctAnswer: 'Un bâtonnet de pigment coloré qu\'on peut estomper',
        explanation: 'Le pastel se travaille au doigt ou à l\'estompe.',
        hints: ['Pigment', 'Estomper']
      },
      {
        id: 'q8',
        question: 'Le grattage (sgraffite) consiste à :',
        type: 'multiple-choice',
        options: ['Gratter une couche pour révéler celle en dessous', 'Ajouter de la peinture', 'Coller des éléments', 'Découper du papier'],
        correctAnswer: 'Gratter une couche pour révéler celle en dessous',
        explanation: 'On superpose des couches puis on gratte pour créer des motifs.',
        hints: ['Gratter', 'Révéler']
      },
      {
        id: 'q9',
        question: 'Le support d\'une œuvre est :',
        type: 'multiple-choice',
        options: ['La surface sur laquelle on travaille (papier, toile...)', 'L\'outil utilisé', 'Le cadre', 'La couleur de fond'],
        correctAnswer: 'La surface sur laquelle on travaille (papier, toile...)',
        explanation: 'Papier, carton, toile, bois sont des supports différents.',
        hints: ['Surface', 'Base']
      },
      {
        id: 'q10',
        question: 'L\'empreinte est une technique qui utilise :',
        type: 'multiple-choice',
        options: ['Un objet encré qu\'on presse sur le support', 'Uniquement des pinceaux', 'La sculpture', 'Le découpage'],
        correctAnswer: 'Un objet encré qu\'on presse sur le support',
        explanation: 'On peut faire des empreintes avec des feuilles, des mains, des objets...',
        hints: ['Presser', 'Trace']
      }
    ]
  },

  // Arts plastiques 6ème - Exercice 3
  {
    id: 'arts-6eme-003',
    title: 'Les formes et la composition',
    subject: 'arts-plastiques',
    level: '6ème',
    difficulty: 1,
    description: 'Comprendre les notions de formes, de composition et d\'organisation de l\'espace',
    estimatedTime: 12,
    skills: ['Formes', 'Composition', 'Espace'],
    questions: [
      {
        id: 'q1',
        question: 'Une forme géométrique est :',
        type: 'multiple-choice',
        options: ['Une forme régulière (cercle, carré, triangle...)', 'Une forme irrégulière', 'Une tache de couleur', 'Un trait au hasard'],
        correctAnswer: 'Une forme régulière (cercle, carré, triangle...)',
        explanation: 'Les formes géométriques ont des contours définis et réguliers.',
        hints: ['Régulière', 'Mathématique']
      },
      {
        id: 'q2',
        question: 'La symétrie signifie que :',
        type: 'multiple-choice',
        options: ['Les deux côtés d\'une image sont identiques par rapport à un axe', 'L\'image est très colorée', 'Il y a beaucoup de détails', 'Les formes sont rondes'],
        correctAnswer: 'Les deux côtés d\'une image sont identiques par rapport à un axe',
        explanation: 'La symétrie crée un effet miroir de chaque côté de l\'axe.',
        hints: ['Miroir', 'Identique']
      },
      {
        id: 'q3',
        question: 'Le premier plan dans une image est :',
        type: 'multiple-choice',
        options: ['Ce qui apparaît le plus proche du spectateur', 'Ce qui est au fond', 'Le cadre de l\'image', 'Le titre de l\'œuvre'],
        correctAnswer: 'Ce qui apparaît le plus proche du spectateur',
        explanation: 'Le premier plan est devant, l\'arrière-plan est au fond.',
        hints: ['Devant', 'Proche']
      },
      {
        id: 'q4',
        question: 'Une forme organique est :',
        type: 'multiple-choice',
        options: ['Une forme irrégulière inspirée de la nature', 'Un carré parfait', 'Une ligne droite', 'Un cercle'],
        correctAnswer: 'Une forme irrégulière inspirée de la nature',
        explanation: 'Les formes organiques rappellent les végétaux, le corps, la nature.',
        hints: ['Nature', 'Irrégulière']
      },
      {
        id: 'q5',
        question: 'Cadrer une image signifie :',
        type: 'multiple-choice',
        options: ['Choisir ce qu\'on montre et ce qu\'on exclut', 'Ajouter un cadre en bois', 'Peindre le fond', 'Signer l\'œuvre'],
        correctAnswer: 'Choisir ce qu\'on montre et ce qu\'on exclut',
        explanation: 'Le cadrage détermine les limites de l\'image.',
        hints: ['Choisir', 'Limite']
      },
      {
        id: 'q6',
        question: 'Le contraste en arts plastiques peut être :',
        type: 'multiple-choice',
        options: ['Une opposition forte (clair/foncé, grand/petit...)', 'Une harmonie douce', 'Une seule couleur', 'Un fond blanc'],
        correctAnswer: 'Une opposition forte (clair/foncé, grand/petit...)',
        explanation: 'Le contraste crée des oppositions visuelles marquées.',
        hints: ['Opposition', 'Différence']
      },
      {
        id: 'q7',
        question: 'L\'équilibre dans une composition signifie que :',
        type: 'multiple-choice',
        options: ['Les éléments sont répartis de façon harmonieuse', 'Tout est au centre', 'Il n\'y a qu\'une seule forme', 'Les couleurs sont identiques'],
        correctAnswer: 'Les éléments sont répartis de façon harmonieuse',
        explanation: 'L\'équilibre peut être symétrique ou asymétrique.',
        hints: ['Harmonie', 'Répartition']
      },
      {
        id: 'q8',
        question: 'Un motif en arts plastiques est :',
        type: 'multiple-choice',
        options: ['Un élément qui se répète', 'Une seule grande forme', 'Un outil de dessin', 'Le titre de l\'œuvre'],
        correctAnswer: 'Un élément qui se répète',
        explanation: 'Les motifs créent des rythmes par leur répétition.',
        hints: ['Répétition', 'Pattern']
      },
      {
        id: 'q9',
        question: 'La ligne d\'horizon sépare :',
        type: 'multiple-choice',
        options: ['Le ciel et la terre dans un paysage', 'Le premier plan du second plan', 'Le haut et le bas du cadre', 'Les couleurs chaudes et froides'],
        correctAnswer: 'Le ciel et la terre dans un paysage',
        explanation: 'La ligne d\'horizon est là où le ciel semble toucher la terre.',
        hints: ['Ciel', 'Terre']
      },
      {
        id: 'q10',
        question: 'Le format d\'une œuvre peut être :',
        type: 'multiple-choice',
        options: ['Portrait (vertical), paysage (horizontal) ou carré', 'Uniquement rectangulaire', 'Toujours le même', 'Déterminé par la couleur'],
        correctAnswer: 'Portrait (vertical), paysage (horizontal) ou carré',
        explanation: 'Le choix du format influence la composition de l\'œuvre.',
        hints: ['Vertical', 'Horizontal']
      }
    ]
  },

  // Arts plastiques 5ème - Exercice 1
  {
    id: 'arts-5eme-001',
    title: 'La perspective et la profondeur',
    subject: 'arts-plastiques',
    level: '5ème',
    difficulty: 2,
    description: 'Comprendre les techniques pour représenter la profondeur et l\'espace',
    estimatedTime: 15,
    skills: ['Perspective', 'Profondeur', 'Espace'],
    questions: [
      {
        id: 'q1',
        question: 'La perspective permet de représenter :',
        type: 'multiple-choice',
        options: ['La profondeur et l\'espace en 3D sur une surface 2D', 'Uniquement des formes plates', 'Les couleurs primaires', 'Le mouvement'],
        correctAnswer: 'La profondeur et l\'espace en 3D sur une surface 2D',
        explanation: 'La perspective crée l\'illusion de la troisième dimension.',
        hints: ['3D', 'Illusion']
      },
      {
        id: 'q2',
        question: 'Le point de fuite est :',
        type: 'multiple-choice',
        options: ['Le point vers lequel les lignes parallèles semblent converger', 'Le centre exact de l\'image', 'La signature de l\'artiste', 'La couleur dominante'],
        correctAnswer: 'Le point vers lequel les lignes parallèles semblent converger',
        explanation: 'Le point de fuite est généralement situé sur la ligne d\'horizon.',
        hints: ['Convergence', 'Horizon']
      },
      {
        id: 'q3',
        question: 'En perspective, les objets éloignés paraissent :',
        type: 'multiple-choice',
        options: ['Plus petits', 'Plus grands', 'Plus colorés', 'Plus détaillés'],
        correctAnswer: 'Plus petits',
        explanation: 'La diminution de taille avec la distance crée la profondeur.',
        hints: ['Diminution', 'Distance']
      },
      {
        id: 'q4',
        question: 'La perspective atmosphérique utilise :',
        type: 'multiple-choice',
        options: ['L\'estompage des couleurs et détails au loin', 'Des lignes droites uniquement', 'Un seul point de fuite', 'Uniquement du noir et blanc'],
        correctAnswer: 'L\'estompage des couleurs et détails au loin',
        explanation: 'Les objets lointains sont plus pâles et moins nets.',
        hints: ['Flou', 'Pâle']
      },
      {
        id: 'q5',
        question: 'Dans une perspective à un point de fuite, toutes les lignes de fuite :',
        type: 'multiple-choice',
        options: ['Convergent vers un seul point', 'Sont parallèles entre elles', 'Sont verticales', 'Sont courbes'],
        correctAnswer: 'Convergent vers un seul point',
        explanation: 'C\'est la perspective frontale, vue de face.',
        hints: ['Un seul point', 'Convergent']
      },
      {
        id: 'q6',
        question: 'Le raccourci en dessin permet de montrer :',
        type: 'multiple-choice',
        options: ['Un objet vu en perspective qui semble venir vers nous', 'Un objet de profil', 'Un objet de dos', 'Un objet très loin'],
        correctAnswer: 'Un objet vu en perspective qui semble venir vers nous',
        explanation: 'Le raccourci déforme les proportions pour créer la profondeur.',
        hints: ['Déformation', 'Vers nous']
      },
      {
        id: 'q7',
        question: 'La perspective cavalière représente les objets :',
        type: 'multiple-choice',
        options: ['Avec des lignes obliques sans point de fuite', 'Uniquement de face', 'De dessus', 'En miroir'],
        correctAnswer: 'Avec des lignes obliques sans point de fuite',
        explanation: 'C\'est une perspective simplifiée sans déformation de taille.',
        hints: ['Oblique', 'Sans fuite']
      },
      {
        id: 'q8',
        question: 'Pour créer de la profondeur, on peut utiliser :',
        type: 'multiple-choice',
        options: ['La superposition (un objet devant un autre)', 'Uniquement la couleur rouge', 'Des formes identiques', 'Un fond blanc'],
        correctAnswer: 'La superposition (un objet devant un autre)',
        explanation: 'Un objet qui en cache partiellement un autre paraît devant.',
        hints: ['Superposition', 'Cacher']
      },
      {
        id: 'q9',
        question: 'La ligne d\'horizon en perspective est située :',
        type: 'multiple-choice',
        options: ['Au niveau des yeux de l\'observateur', 'Toujours en haut', 'Toujours en bas', 'Au centre exact'],
        correctAnswer: 'Au niveau des yeux de l\'observateur',
        explanation: 'La ligne d\'horizon change selon le point de vue (plongée, contre-plongée).',
        hints: ['Yeux', 'Observateur']
      },
      {
        id: 'q10',
        question: 'Une vue en plongée montre le sujet :',
        type: 'multiple-choice',
        options: ['D\'en haut, comme si on regardait vers le bas', 'D\'en bas, comme si on levait la tête', 'De face', 'De dos'],
        correctAnswer: 'D\'en haut, comme si on regardait vers le bas',
        explanation: 'La plongée place le spectateur au-dessus du sujet.',
        hints: ['D\'en haut', 'Regarder vers le bas']
      }
    ]
  },

  // Arts plastiques 5ème - Exercice 2
  {
    id: 'arts-5eme-002',
    title: 'La lumière et les ombres',
    subject: 'arts-plastiques',
    level: '5ème',
    difficulty: 2,
    description: 'Comprendre le rôle de la lumière et des ombres dans la représentation',
    estimatedTime: 15,
    skills: ['Lumière', 'Ombres', 'Volume'],
    questions: [
      {
        id: 'q1',
        question: 'Le clair-obscur est une technique qui joue sur :',
        type: 'multiple-choice',
        options: ['Les contrastes forts entre lumière et ombre', 'Les couleurs vives', 'Les lignes droites', 'Les formes géométriques'],
        correctAnswer: 'Les contrastes forts entre lumière et ombre',
        explanation: 'Le clair-obscur crée du volume et du drame par les contrastes.',
        hints: ['Contraste', 'Lumière/ombre']
      },
      {
        id: 'q2',
        question: 'L\'ombre propre d\'un objet est :',
        type: 'multiple-choice',
        options: ['La partie de l\'objet non éclairée', 'L\'ombre projetée sur le sol', 'La couleur de l\'objet', 'Le reflet de la lumière'],
        correctAnswer: 'La partie de l\'objet non éclairée',
        explanation: 'L\'ombre propre est sur l\'objet lui-même, du côté opposé à la lumière.',
        hints: ['Sur l\'objet', 'Non éclairée']
      },
      {
        id: 'q3',
        question: 'L\'ombre portée est :',
        type: 'multiple-choice',
        options: ['L\'ombre projetée par l\'objet sur une surface', 'La partie sombre de l\'objet', 'Une technique de dessin', 'Un type de pinceau'],
        correctAnswer: 'L\'ombre projetée par l\'objet sur une surface',
        explanation: 'L\'ombre portée apparaît sur le sol ou sur d\'autres objets.',
        hints: ['Projetée', 'Sol']
      },
      {
        id: 'q4',
        question: 'Le dégradé permet de montrer :',
        type: 'multiple-choice',
        options: ['Une transition progressive entre deux tons', 'Une limite nette', 'Une seule couleur', 'Un motif répétitif'],
        correctAnswer: 'Une transition progressive entre deux tons',
        explanation: 'Les dégradés créent des transitions douces, donnant du volume.',
        hints: ['Transition', 'Progressif']
      },
      {
        id: 'q5',
        question: 'La source lumineuse dans un dessin détermine :',
        type: 'multiple-choice',
        options: ['L\'emplacement des zones claires et sombres', 'La couleur du fond', 'Le format de l\'image', 'Le titre de l\'œuvre'],
        correctAnswer: 'L\'emplacement des zones claires et sombres',
        explanation: 'La position de la lumière crée les ombres et reflets.',
        hints: ['Direction', 'Éclairage']
      },
      {
        id: 'q6',
        question: 'Un reflet sur un objet brillant est :',
        type: 'multiple-choice',
        options: ['Une zone très claire qui capte la lumière', 'Une zone sombre', 'Une couleur ajoutée', 'Une ombre portée'],
        correctAnswer: 'Une zone très claire qui capte la lumière',
        explanation: 'Les reflets indiquent les surfaces brillantes ou lisses.',
        hints: ['Brillant', 'Clair']
      },
      {
        id: 'q7',
        question: 'Les hachures permettent de :',
        type: 'multiple-choice',
        options: ['Créer des ombres par des traits parallèles', 'Coller des éléments', 'Découper du papier', 'Mélanger les couleurs'],
        correctAnswer: 'Créer des ombres par des traits parallèles',
        explanation: 'Plus les hachures sont serrées, plus la zone paraît sombre.',
        hints: ['Traits', 'Parallèles']
      },
      {
        id: 'q8',
        question: 'Le modelé en dessin consiste à :',
        type: 'multiple-choice',
        options: ['Donner du volume par les variations de valeurs', 'Dessiner des modèles vivants', 'Créer un moule', 'Utiliser de l\'argile'],
        correctAnswer: 'Donner du volume par les variations de valeurs',
        explanation: 'Le modelé utilise les dégradés pour suggérer le relief.',
        hints: ['Volume', 'Valeurs']
      },
      {
        id: 'q9',
        question: 'Une valeur en arts plastiques désigne :',
        type: 'multiple-choice',
        options: ['Le degré de clarté ou d\'obscurité d\'une couleur', 'Le prix d\'une œuvre', 'La taille d\'un dessin', 'Le nom de l\'artiste'],
        correctAnswer: 'Le degré de clarté ou d\'obscurité d\'une couleur',
        explanation: 'Les valeurs vont du blanc (clair) au noir (sombre).',
        hints: ['Clair', 'Sombre']
      },
      {
        id: 'q10',
        question: 'Un éclairage de face aplatit les formes car :',
        type: 'multiple-choice',
        options: ['Il réduit les ombres', 'Il crée beaucoup d\'ombres', 'Il change les couleurs', 'Il déforme les objets'],
        correctAnswer: 'Il réduit les ombres',
        explanation: 'Un éclairage latéral crée plus d\'ombres et donc plus de volume.',
        hints: ['Peu d\'ombres', 'Aplati']
      }
    ]
  },

  // Arts plastiques 5ème - Exercice 3
  {
    id: 'arts-5eme-003',
    title: 'Le mouvement et le rythme',
    subject: 'arts-plastiques',
    level: '5ème',
    difficulty: 2,
    description: 'Représenter le mouvement et créer des rythmes visuels',
    estimatedTime: 15,
    skills: ['Mouvement', 'Rythme', 'Dynamisme'],
    questions: [
      {
        id: 'q1',
        question: 'Les lignes diagonales dans une composition suggèrent :',
        type: 'multiple-choice',
        options: ['Le mouvement et le dynamisme', 'Le calme et la stabilité', 'La tristesse', 'L\'absence de forme'],
        correctAnswer: 'Le mouvement et le dynamisme',
        explanation: 'Les diagonales créent une tension et une impression de mouvement.',
        hints: ['Dynamique', 'Tension']
      },
      {
        id: 'q2',
        question: 'La chronophotographie est une technique qui montre :',
        type: 'multiple-choice',
        options: ['Les phases successives d\'un mouvement', 'Une seule image fixe', 'Uniquement des paysages', 'Des couleurs vives'],
        correctAnswer: 'Les phases successives d\'un mouvement',
        explanation: 'Elle décompose le mouvement en plusieurs images.',
        hints: ['Phases', 'Successives']
      },
      {
        id: 'q3',
        question: 'Le rythme visuel est créé par :',
        type: 'multiple-choice',
        options: ['La répétition d\'éléments avec ou sans variations', 'Une seule forme isolée', 'L\'absence de couleur', 'Un fond uniforme'],
        correctAnswer: 'La répétition d\'éléments avec ou sans variations',
        explanation: 'Le rythme peut être régulier ou irrégulier comme en musique.',
        hints: ['Répétition', 'Régularité']
      },
      {
        id: 'q4',
        question: 'Les lignes de vitesse (traits de mouvement) permettent de :',
        type: 'multiple-choice',
        options: ['Suggérer le déplacement rapide d\'un objet', 'Encadrer une image', 'Séparer les couleurs', 'Créer un fond'],
        correctAnswer: 'Suggérer le déplacement rapide d\'un objet',
        explanation: 'Ces lignes sont très utilisées dans la bande dessinée.',
        hints: ['Vitesse', 'Déplacement']
      },
      {
        id: 'q5',
        question: 'Le flou de mouvement en photographie montre :',
        type: 'multiple-choice',
        options: ['Un sujet en mouvement avec un effet de traînée', 'Une image parfaitement nette', 'Un paysage fixe', 'Un gros plan'],
        correctAnswer: 'Un sujet en mouvement avec un effet de traînée',
        explanation: 'Le flou capture le déplacement pendant le temps d\'exposition.',
        hints: ['Flou', 'Traînée']
      },
      {
        id: 'q6',
        question: 'L\'alternance en arts plastiques est :',
        type: 'multiple-choice',
        options: ['La succession régulière de deux éléments différents', 'L\'utilisation d\'une seule couleur', 'Une technique de peinture', 'Un type de cadre'],
        correctAnswer: 'La succession régulière de deux éléments différents',
        explanation: 'L\'alternance crée un rythme (ex: noir-blanc-noir-blanc).',
        hints: ['Succession', 'Deux éléments']
      },
      {
        id: 'q7',
        question: 'La décomposition du mouvement a été étudiée par :',
        type: 'multiple-choice',
        options: ['Eadweard Muybridge et Étienne-Jules Marey', 'Léonard de Vinci uniquement', 'Les impressionnistes', 'Les sculpteurs grecs'],
        correctAnswer: 'Eadweard Muybridge et Étienne-Jules Marey',
        explanation: 'Ces pionniers ont photographié le mouvement au XIXe siècle.',
        hints: ['Photographie', 'XIXe siècle']
      },
      {
        id: 'q8',
        question: 'Une spirale dans une composition crée :',
        type: 'multiple-choice',
        options: ['Un mouvement continu et enveloppant', 'Une impression de calme absolu', 'Des angles droits', 'Une symétrie parfaite'],
        correctAnswer: 'Un mouvement continu et enveloppant',
        explanation: 'La spirale guide le regard dans un mouvement rotatif.',
        hints: ['Rotation', 'Continu']
      },
      {
        id: 'q9',
        question: 'Le futurisme est un mouvement artistique qui célèbre :',
        type: 'multiple-choice',
        options: ['La vitesse, le mouvement et la modernité', 'La nature et le calme', 'Les portraits classiques', 'Les paysages ruraux'],
        correctAnswer: 'La vitesse, le mouvement et la modernité',
        explanation: 'Les futuristes italiens voulaient représenter le dynamisme moderne.',
        hints: ['Vitesse', 'Modernité']
      },
      {
        id: 'q10',
        question: 'Pour suggérer le mouvement d\'une figure humaine, on peut :',
        type: 'multiple-choice',
        options: ['Déséquilibrer sa posture et incliner son corps', 'La dessiner parfaitement droite', 'L\'entourer d\'un cadre', 'Utiliser uniquement du noir'],
        correctAnswer: 'Déséquilibrer sa posture et incliner son corps',
        explanation: 'Un corps en déséquilibre suggère l\'action et le mouvement.',
        hints: ['Déséquilibre', 'Inclinaison']
      }
    ]
  },

  // Arts plastiques 4ème - Exercice 1
  {
    id: 'arts-4eme-001',
    title: 'L\'histoire de l\'art : les grands mouvements',
    subject: 'arts-plastiques',
    level: '4ème',
    difficulty: 3,
    description: 'Connaître les principaux mouvements artistiques et leurs caractéristiques',
    estimatedTime: 18,
    skills: ['Histoire de l\'art', 'Mouvements artistiques', 'Culture'],
    questions: [
      {
        id: 'q1',
        question: 'L\'impressionnisme se caractérise par :',
        type: 'multiple-choice',
        options: ['Des touches de couleur visibles et la capture de la lumière', 'Des lignes noires épaisses', 'Des formes géométriques', 'Des sujets religieux'],
        correctAnswer: 'Des touches de couleur visibles et la capture de la lumière',
        explanation: 'Les impressionnistes peignaient en plein air pour capter la lumière.',
        hints: ['Lumière', 'Touches']
      },
      {
        id: 'q2',
        question: 'Quel artiste est associé au cubisme ?',
        type: 'multiple-choice',
        options: ['Pablo Picasso', 'Claude Monet', 'Vincent van Gogh', 'Michel-Ange'],
        correctAnswer: 'Pablo Picasso',
        explanation: 'Picasso et Braque ont fondé le cubisme au début du XXe siècle.',
        hints: ['Formes géométriques', 'Espagnol']
      },
      {
        id: 'q3',
        question: 'Le surréalisme explore :',
        type: 'multiple-choice',
        options: ['Le rêve, l\'inconscient et l\'imaginaire', 'La réalité photographique', 'Les paysages de campagne', 'L\'architecture classique'],
        correctAnswer: 'Le rêve, l\'inconscient et l\'imaginaire',
        explanation: 'Les surréalistes comme Dalí créaient des images oniriques.',
        hints: ['Rêve', 'Imaginaire']
      },
      {
        id: 'q4',
        question: 'Le Pop Art utilise des images issues de :',
        type: 'multiple-choice',
        options: ['La culture populaire et la publicité', 'La mythologie grecque', 'La nature morte', 'L\'art religieux'],
        correctAnswer: 'La culture populaire et la publicité',
        explanation: 'Andy Warhol représentait des produits de consommation et des célébrités.',
        hints: ['Publicité', 'Populaire']
      },
      {
        id: 'q5',
        question: 'La Renaissance est une période caractérisée par :',
        type: 'multiple-choice',
        options: ['Le retour à l\'Antiquité et la perspective', 'L\'abstraction totale', 'Les collages', 'L\'art numérique'],
        correctAnswer: 'Le retour à l\'Antiquité et la perspective',
        explanation: 'La Renaissance a redécouvert l\'art grec et romain.',
        hints: ['Antiquité', 'Perspective']
      },
      {
        id: 'q6',
        question: 'L\'expressionnisme met l\'accent sur :',
        type: 'multiple-choice',
        options: ['Les émotions intenses et la déformation expressive', 'La copie exacte de la réalité', 'Les formes géométriques parfaites', 'Les couleurs pastels'],
        correctAnswer: 'Les émotions intenses et la déformation expressive',
        explanation: 'Les expressionnistes déformaient les formes pour exprimer leurs émotions.',
        hints: ['Émotions', 'Déformation']
      },
      {
        id: 'q7',
        question: 'L\'art abstrait se distingue par :',
        type: 'multiple-choice',
        options: ['L\'absence de représentation du réel', 'Des portraits très réalistes', 'Des paysages détaillés', 'Des scènes historiques'],
        correctAnswer: 'L\'absence de représentation du réel',
        explanation: 'L\'art abstrait utilise formes, couleurs et lignes sans figuration.',
        hints: ['Non figuratif', 'Formes']
      },
      {
        id: 'q8',
        question: 'Qui a peint "La Nuit étoilée" ?',
        type: 'multiple-choice',
        options: ['Vincent van Gogh', 'Claude Monet', 'Pablo Picasso', 'Leonardo da Vinci'],
        correctAnswer: 'Vincent van Gogh',
        explanation: 'Van Gogh a peint cette œuvre en 1889, en proie à la maladie.',
        hints: ['Post-impressionnisme', 'Néerlandais']
      },
      {
        id: 'q9',
        question: 'Le Street Art se caractérise par :',
        type: 'multiple-choice',
        options: ['Des œuvres réalisées dans l\'espace public', 'Des peintures sur toile uniquement', 'Des sculptures en marbre', 'Des œuvres cachées dans les musées'],
        correctAnswer: 'Des œuvres réalisées dans l\'espace public',
        explanation: 'Le Street Art investit les murs et l\'espace urbain.',
        hints: ['Rue', 'Public']
      },
      {
        id: 'q10',
        question: 'Le minimalisme recherche :',
        type: 'multiple-choice',
        options: ['La simplicité et la réduction des formes', 'La complexité maximale', 'Les ornements nombreux', 'Les détails réalistes'],
        correctAnswer: 'La simplicité et la réduction des formes',
        explanation: '"Less is more" : moins c\'est plus.',
        hints: ['Simple', 'Réduction']
      }
    ]
  },

  // Arts plastiques 4ème - Exercice 2
  {
    id: 'arts-4eme-002',
    title: 'L\'image et ses codes',
    subject: 'arts-plastiques',
    level: '4ème',
    difficulty: 3,
    description: 'Analyser et comprendre les différents types d\'images',
    estimatedTime: 18,
    skills: ['Analyse d\'image', 'Codes visuels', 'Communication'],
    questions: [
      {
        id: 'q1',
        question: 'Le cadrage serré (gros plan) sur un visage exprime :',
        type: 'multiple-choice',
        options: ['L\'émotion et l\'intimité', 'L\'espace et le lieu', 'L\'action générale', 'Le contexte historique'],
        correctAnswer: 'L\'émotion et l\'intimité',
        explanation: 'Le gros plan révèle les détails et les émotions.',
        hints: ['Émotion', 'Détail']
      },
      {
        id: 'q2',
        question: 'Un plan d\'ensemble montre :',
        type: 'multiple-choice',
        options: ['Le décor et le contexte général', 'Uniquement les yeux', 'Un détail précis', 'Le noir complet'],
        correctAnswer: 'Le décor et le contexte général',
        explanation: 'Le plan d\'ensemble situe l\'action dans son environnement.',
        hints: ['Général', 'Contexte']
      },
      {
        id: 'q3',
        question: 'La contre-plongée (vue d\'en bas) donne une impression de :',
        type: 'multiple-choice',
        options: ['Puissance et domination', 'Faiblesse et vulnérabilité', 'Neutralité', 'Mouvement latéral'],
        correctAnswer: 'Puissance et domination',
        explanation: 'Regarder de bas en haut grandit le sujet.',
        hints: ['Puissance', 'Grand']
      },
      {
        id: 'q4',
        question: 'La règle des tiers consiste à :',
        type: 'multiple-choice',
        options: ['Placer les éléments importants sur des lignes divisant l\'image en 9', 'Utiliser trois couleurs', 'Diviser l\'image en trois parties égales verticales', 'Faire trois croquis'],
        correctAnswer: 'Placer les éléments importants sur des lignes divisant l\'image en 9',
        explanation: 'Les points d\'intersection attirent le regard.',
        hints: ['Composition', '9 zones']
      },
      {
        id: 'q5',
        question: 'Une image dénotée montre :',
        type: 'multiple-choice',
        options: ['Ce qu\'on voit objectivement', 'Ce qu\'elle suggère ou symbolise', 'L\'opinion de l\'artiste', 'Un message caché'],
        correctAnswer: 'Ce qu\'on voit objectivement',
        explanation: 'La dénotation est la description factuelle de l\'image.',
        hints: ['Objectif', 'Factuel']
      },
      {
        id: 'q6',
        question: 'Une image connotée suggère :',
        type: 'multiple-choice',
        options: ['Des significations symboliques ou émotionnelles', 'Uniquement des formes géométriques', 'Des informations techniques', 'La date de création'],
        correctAnswer: 'Des significations symboliques ou émotionnelles',
        explanation: 'La connotation est l\'interprétation au-delà de ce qui est montré.',
        hints: ['Symbolique', 'Interprétation']
      },
      {
        id: 'q7',
        question: 'Le hors-champ désigne :',
        type: 'multiple-choice',
        options: ['Ce qui est suggéré mais non visible dans l\'image', 'Le centre de l\'image', 'Le cadre de l\'image', 'La couleur dominante'],
        correctAnswer: 'Ce qui est suggéré mais non visible dans l\'image',
        explanation: 'Le hors-champ stimule l\'imagination du spectateur.',
        hints: ['Invisible', 'Suggéré']
      },
      {
        id: 'q8',
        question: 'Un photomontage est :',
        type: 'multiple-choice',
        options: ['L\'assemblage de plusieurs images en une seule', 'Une photo unique non modifiée', 'Un dessin au crayon', 'Une sculpture'],
        correctAnswer: 'L\'assemblage de plusieurs images en une seule',
        explanation: 'Le photomontage crée des images nouvelles par assemblage.',
        hints: ['Assemblage', 'Plusieurs']
      },
      {
        id: 'q9',
        question: 'En publicité, l\'image vise souvent à :',
        type: 'multiple-choice',
        options: ['Séduire et persuader le spectateur', 'Informer de façon neutre', 'Documenter la réalité', 'Critiquer les produits'],
        correctAnswer: 'Séduire et persuader le spectateur',
        explanation: 'La publicité utilise les codes visuels pour vendre.',
        hints: ['Séduire', 'Vendre']
      },
      {
        id: 'q10',
        question: 'L\'image de propagande a pour but de :',
        type: 'multiple-choice',
        options: ['Influencer l\'opinion et diffuser une idéologie', 'Décorer les intérieurs', 'Documenter la nature', 'Amuser le public'],
        correctAnswer: 'Influencer l\'opinion et diffuser une idéologie',
        explanation: 'La propagande manipule les images à des fins politiques.',
        hints: ['Influence', 'Politique']
      }
    ]
  },

  // Arts plastiques 4ème - Exercice 3
  {
    id: 'arts-4eme-003',
    title: 'Les techniques mixtes et l\'expérimentation',
    subject: 'arts-plastiques',
    level: '4ème',
    difficulty: 3,
    description: 'Explorer les techniques mixtes et les démarches expérimentales',
    estimatedTime: 18,
    skills: ['Techniques mixtes', 'Expérimentation', 'Créativité'],
    questions: [
      {
        id: 'q1',
        question: 'Une technique mixte associe :',
        type: 'multiple-choice',
        options: ['Plusieurs techniques ou matériaux différents', 'Une seule technique', 'Uniquement de la peinture', 'Du dessin au crayon'],
        correctAnswer: 'Plusieurs techniques ou matériaux différents',
        explanation: 'On peut mélanger peinture, collage, dessin, photo...',
        hints: ['Plusieurs', 'Mélange']
      },
      {
        id: 'q2',
        question: 'Le détournement en art consiste à :',
        type: 'multiple-choice',
        options: ['Utiliser un objet ou une image en changeant son sens', 'Copier exactement une œuvre', 'Peindre un paysage', 'Dessiner un portrait'],
        correctAnswer: 'Utiliser un objet ou une image en changeant son sens',
        explanation: 'Détourner donne un nouveau sens à l\'existant.',
        hints: ['Changer le sens', 'Transformer']
      },
      {
        id: 'q3',
        question: 'L\'assemblage en sculpture utilise :',
        type: 'multiple-choice',
        options: ['Des objets et matériaux récupérés assemblés entre eux', 'Un seul bloc de pierre', 'Uniquement de l\'argile', 'Du dessin'],
        correctAnswer: 'Des objets et matériaux récupérés assemblés entre eux',
        explanation: 'L\'assemblage combine des éléments divers en 3D.',
        hints: ['Récupération', 'Combiner']
      },
      {
        id: 'q4',
        question: 'L\'installation artistique est :',
        type: 'multiple-choice',
        options: ['Une œuvre qui occupe et transforme un espace', 'Un tableau accroché au mur', 'Un dessin sur papier', 'Une photo encadrée'],
        correctAnswer: 'Une œuvre qui occupe et transforme un espace',
        explanation: 'L\'installation invite le spectateur à entrer dans l\'œuvre.',
        hints: ['Espace', 'Immersion']
      },
      {
        id: 'q5',
        question: 'Le ready-made, inventé par Marcel Duchamp, est :',
        type: 'multiple-choice',
        options: ['Un objet du quotidien présenté comme œuvre d\'art', 'Une peinture traditionnelle', 'Une sculpture en marbre', 'Un dessin académique'],
        correctAnswer: 'Un objet du quotidien présenté comme œuvre d\'art',
        explanation: 'Duchamp a exposé un urinoir ("Fontaine") comme œuvre d\'art.',
        hints: ['Objet courant', 'Duchamp']
      },
      {
        id: 'q6',
        question: 'Le frottage (ou "frottis") consiste à :',
        type: 'multiple-choice',
        options: ['Frotter un crayon sur une feuille posée sur une texture', 'Peindre avec les doigts', 'Découper des formes', 'Sculpter l\'argile'],
        correctAnswer: 'Frotter un crayon sur une feuille posée sur une texture',
        explanation: 'Le frottage révèle la texture de la surface en dessous.',
        hints: ['Texture', 'Crayon']
      },
      {
        id: 'q7',
        question: 'Le dripping est une technique qui consiste à :',
        type: 'multiple-choice',
        options: ['Laisser couler ou projeter la peinture sur la toile', 'Dessiner au crayon', 'Découper du papier', 'Sculpter la pierre'],
        correctAnswer: 'Laisser couler ou projeter la peinture sur la toile',
        explanation: 'Jackson Pollock est célèbre pour ses drippings.',
        hints: ['Couler', 'Projeter']
      },
      {
        id: 'q8',
        question: 'L\'art numérique utilise :',
        type: 'multiple-choice',
        options: ['L\'ordinateur et les technologies numériques', 'Uniquement des pinceaux traditionnels', 'De l\'argile', 'De la pierre'],
        correctAnswer: 'L\'ordinateur et les technologies numériques',
        explanation: 'L\'art numérique inclut images de synthèse, art génératif, etc.',
        hints: ['Ordinateur', 'Technologie']
      },
      {
        id: 'q9',
        question: 'Le hasard contrôlé en art permet de :',
        type: 'multiple-choice',
        options: ['Intégrer des effets aléatoires dans une création maîtrisée', 'Copier exactement un modèle', 'Suivre des règles strictes', 'Éviter toute expérimentation'],
        correctAnswer: 'Intégrer des effets aléatoires dans une création maîtrisée',
        explanation: 'L\'artiste guide le hasard sans tout contrôler.',
        hints: ['Aléatoire', 'Inattendu']
      },
      {
        id: 'q10',
        question: 'La performance artistique est :',
        type: 'multiple-choice',
        options: ['Une action réalisée par l\'artiste devant un public', 'Un tableau peint', 'Une sculpture en bronze', 'Un dessin au fusain'],
        correctAnswer: 'Une action réalisée par l\'artiste devant un public',
        explanation: 'La performance est éphémère et implique le corps de l\'artiste.',
        hints: ['Action', 'Public']
      }
    ]
  },

  // Arts plastiques 3ème - Exercice 1
  {
    id: 'arts-3eme-001',
    title: 'L\'art engagé et le message',
    subject: 'arts-plastiques',
    level: '3ème',
    difficulty: 4,
    description: 'Comprendre comment l\'art peut porter un message et s\'engager',
    estimatedTime: 20,
    skills: ['Art engagé', 'Message', 'Société'],
    questions: [
      {
        id: 'q1',
        question: 'L\'art engagé a pour objectif de :',
        type: 'multiple-choice',
        options: ['Défendre une cause ou dénoncer une injustice', 'Décorer uniquement', 'Copier la réalité', 'Vendre des produits'],
        correctAnswer: 'Défendre une cause ou dénoncer une injustice',
        explanation: 'L\'art engagé prend position sur des questions sociales ou politiques.',
        hints: ['Cause', 'Dénoncer']
      },
      {
        id: 'q2',
        question: '"Guernica" de Picasso dénonce :',
        type: 'multiple-choice',
        options: ['Les horreurs de la guerre et le bombardement de la ville', 'La beauté de la nature', 'Les joies de la fête', 'La mode parisienne'],
        correctAnswer: 'Les horreurs de la guerre et le bombardement de la ville',
        explanation: 'Picasso a peint cette œuvre après le bombardement de Guernica en 1937.',
        hints: ['Guerre', 'Bombardement']
      },
      {
        id: 'q3',
        question: 'Banksy est un artiste connu pour :',
        type: 'multiple-choice',
        options: ['Son street art engagé et satirique', 'Ses portraits classiques', 'Ses natures mortes', 'Ses paysages romantiques'],
        correctAnswer: 'Son street art engagé et satirique',
        explanation: 'Banksy critique la société à travers ses pochoirs dans l\'espace public.',
        hints: ['Street art', 'Satirique']
      },
      {
        id: 'q4',
        question: 'L\'art peut sensibiliser à :',
        type: 'multiple-choice',
        options: ['L\'écologie, les droits humains, la paix...', 'Uniquement la technique', 'Les prix des œuvres', 'La décoration intérieure'],
        correctAnswer: 'L\'écologie, les droits humains, la paix...',
        explanation: 'L\'art peut toucher les consciences sur des sujets importants.',
        hints: ['Sensibiliser', 'Conscience']
      },
      {
        id: 'q5',
        question: 'La caricature utilise :',
        type: 'multiple-choice',
        options: ['L\'exagération et la déformation pour critiquer', 'La copie exacte', 'Des couleurs pastels', 'Des formes géométriques'],
        correctAnswer: 'L\'exagération et la déformation pour critiquer',
        explanation: 'La caricature déforme les traits pour faire passer un message.',
        hints: ['Exagération', 'Critique']
      },
      {
        id: 'q6',
        question: 'L\'art de mémoire sert à :',
        type: 'multiple-choice',
        options: ['Commémorer des événements ou des victimes', 'Oublier le passé', 'Vendre des souvenirs', 'Décorer les magasins'],
        correctAnswer: 'Commémorer des événements ou des victimes',
        explanation: 'Les mémoriaux utilisent l\'art pour ne pas oublier.',
        hints: ['Mémoire', 'Commémorer']
      },
      {
        id: 'q7',
        question: 'L\'affiche de propagande cherche à :',
        type: 'multiple-choice',
        options: ['Influencer et manipuler l\'opinion', 'Informer objectivement', 'Divertir', 'Documenter la nature'],
        correctAnswer: 'Influencer et manipuler l\'opinion',
        explanation: 'La propagande utilise des techniques visuelles pour convaincre.',
        hints: ['Influence', 'Manipulation']
      },
      {
        id: 'q8',
        question: 'L\'art peut être censuré quand :',
        type: 'multiple-choice',
        options: ['Il dérange le pouvoir ou choque la société', 'Il est trop beau', 'Il utilise trop de couleurs', 'Il est trop petit'],
        correctAnswer: 'Il dérange le pouvoir ou choque la société',
        explanation: 'La censure vise à faire taire les messages dérangeants.',
        hints: ['Dérange', 'Pouvoir']
      },
      {
        id: 'q9',
        question: 'L\'artiste Ai Weiwei est connu pour :',
        type: 'multiple-choice',
        options: ['Son engagement pour les droits humains en Chine', 'Ses paysages impressionnistes', 'Ses portraits royaux', 'Ses natures mortes'],
        correctAnswer: 'Son engagement pour les droits humains en Chine',
        explanation: 'Ai Weiwei critique le gouvernement chinois à travers son art.',
        hints: ['Chine', 'Droits humains']
      },
      {
        id: 'q10',
        question: 'L\'art participatif implique :',
        type: 'multiple-choice',
        options: ['La participation active du public dans l\'œuvre', 'La contemplation passive', 'L\'achat de l\'œuvre', 'La destruction de l\'œuvre'],
        correctAnswer: 'La participation active du public dans l\'œuvre',
        explanation: 'Le public devient acteur et co-créateur.',
        hints: ['Participation', 'Public']
      }
    ]
  },

  // Arts plastiques 3ème - Exercice 2
  {
    id: 'arts-3eme-002',
    title: 'L\'œuvre d\'art et son contexte',
    subject: 'arts-plastiques',
    level: '3ème',
    difficulty: 4,
    description: 'Analyser une œuvre dans son contexte historique et artistique',
    estimatedTime: 20,
    skills: ['Analyse', 'Contexte', 'Interprétation'],
    questions: [
      {
        id: 'q1',
        question: 'Analyser une œuvre d\'art implique de :',
        type: 'multiple-choice',
        options: ['Décrire, interpréter et contextualiser', 'Donner uniquement son avis', 'Calculer son prix', 'Copier l\'œuvre'],
        correctAnswer: 'Décrire, interpréter et contextualiser',
        explanation: 'L\'analyse combine observation, interprétation et connaissances.',
        hints: ['Description', 'Interprétation']
      },
      {
        id: 'q2',
        question: 'Le contexte historique d\'une œuvre inclut :',
        type: 'multiple-choice',
        options: ['L\'époque, les événements et la société de l\'artiste', 'Uniquement le prix de vente', 'La taille du cadre', 'Le nombre de couleurs'],
        correctAnswer: 'L\'époque, les événements et la société de l\'artiste',
        explanation: 'Une œuvre reflète son temps et son environnement.',
        hints: ['Époque', 'Société']
      },
      {
        id: 'q3',
        question: 'L\'intention de l\'artiste désigne :',
        type: 'multiple-choice',
        options: ['Ce que l\'artiste voulait exprimer ou provoquer', 'Le prix demandé', 'Le lieu d\'exposition', 'La taille de l\'œuvre'],
        correctAnswer: 'Ce que l\'artiste voulait exprimer ou provoquer',
        explanation: 'Comprendre l\'intention aide à interpréter l\'œuvre.',
        hints: ['Exprimer', 'But']
      },
      {
        id: 'q4',
        question: 'La réception d\'une œuvre peut varier selon :',
        type: 'multiple-choice',
        options: ['L\'époque et le public qui la regarde', 'Sa taille uniquement', 'Son poids', 'Sa date de vente'],
        correctAnswer: 'L\'époque et le public qui la regarde',
        explanation: 'Une même œuvre peut être perçue différemment au fil du temps.',
        hints: ['Public', 'Perception']
      },
      {
        id: 'q5',
        question: 'Un cartel de musée indique :',
        type: 'multiple-choice',
        options: ['Le titre, l\'artiste, la date et la technique de l\'œuvre', 'Le prix de l\'œuvre', 'L\'opinion du conservateur', 'Le menu du restaurant'],
        correctAnswer: 'Le titre, l\'artiste, la date et la technique de l\'œuvre',
        explanation: 'Le cartel donne les informations essentielles sur l\'œuvre.',
        hints: ['Informations', 'Titre']
      },
      {
        id: 'q6',
        question: 'Une commande artistique signifie que l\'œuvre a été :',
        type: 'multiple-choice',
        options: ['Demandée par un mécène ou une institution', 'Créée spontanément', 'Trouvée dans la nature', 'Volée'],
        correctAnswer: 'Demandée par un mécène ou une institution',
        explanation: 'Beaucoup d\'œuvres classiques étaient des commandes.',
        hints: ['Mécène', 'Demandée']
      },
      {
        id: 'q7',
        question: 'Le lieu d\'exposition influence :',
        type: 'multiple-choice',
        options: ['La perception et le sens de l\'œuvre', 'Uniquement le prix', 'La technique utilisée', 'Les couleurs'],
        correctAnswer: 'La perception et le sens de l\'œuvre',
        explanation: 'Un même objet peut changer de sens selon où il est exposé.',
        hints: ['Perception', 'Contexte']
      },
      {
        id: 'q8',
        question: 'La citation ou référence en art consiste à :',
        type: 'multiple-choice',
        options: ['Faire allusion à une autre œuvre ou un autre artiste', 'Copier sans autorisation', 'Signer l\'œuvre', 'Vendre l\'œuvre'],
        correctAnswer: 'Faire allusion à une autre œuvre ou un autre artiste',
        explanation: 'Les artistes dialoguent avec l\'histoire de l\'art par des références.',
        hints: ['Allusion', 'Dialogue']
      },
      {
        id: 'q9',
        question: 'L\'aura d\'une œuvre originale vient de :',
        type: 'multiple-choice',
        options: ['Son unicité et son authenticité', 'Sa reproduction en série', 'Son petit format', 'Sa couleur'],
        correctAnswer: 'Son unicité et son authenticité',
        explanation: 'Walter Benjamin a théorisé l\'aura de l\'œuvre d\'art.',
        hints: ['Unique', 'Authentique']
      },
      {
        id: 'q10',
        question: 'Le parcours d\'une œuvre (provenance) retrace :',
        type: 'multiple-choice',
        options: ['Son histoire depuis sa création jusqu\'à aujourd\'hui', 'Son poids et ses dimensions', 'Ses couleurs', 'Le nombre de visiteurs'],
        correctAnswer: 'Son histoire depuis sa création jusqu\'à aujourd\'hui',
        explanation: 'La provenance documente les propriétaires successifs.',
        hints: ['Histoire', 'Propriétaires']
      }
    ]
  },

  // Arts plastiques 3ème - Exercice 3
  {
    id: 'arts-3eme-003',
    title: 'L\'art contemporain et ses enjeux',
    subject: 'arts-plastiques',
    level: '3ème',
    difficulty: 4,
    description: 'Comprendre les enjeux et les formes de l\'art contemporain',
    estimatedTime: 20,
    skills: ['Art contemporain', 'Démarche artistique', 'Questionnement'],
    questions: [
      {
        id: 'q1',
        question: 'L\'art contemporain désigne généralement :',
        type: 'multiple-choice',
        options: ['L\'art produit de 1945 à nos jours', 'L\'art de la Renaissance', 'L\'art préhistorique', 'L\'art égyptien'],
        correctAnswer: 'L\'art produit de 1945 à nos jours',
        explanation: 'L\'art contemporain commence après la Seconde Guerre mondiale.',
        hints: ['1945', 'Aujourd\'hui']
      },
      {
        id: 'q2',
        question: 'L\'art conceptuel privilégie :',
        type: 'multiple-choice',
        options: ['L\'idée sur la réalisation matérielle', 'La technique traditionnelle', 'La beauté classique', 'La copie du réel'],
        correctAnswer: 'L\'idée sur la réalisation matérielle',
        explanation: 'Dans l\'art conceptuel, le concept prime sur l\'objet.',
        hints: ['Idée', 'Concept']
      },
      {
        id: 'q3',
        question: 'Une œuvre éphémère est :',
        type: 'multiple-choice',
        options: ['Une œuvre temporaire qui n\'est pas destinée à durer', 'Une œuvre en bronze', 'Une peinture à l\'huile', 'Un monument en pierre'],
        correctAnswer: 'Une œuvre temporaire qui n\'est pas destinée à durer',
        explanation: 'L\'art éphémère questionne la notion de permanence.',
        hints: ['Temporaire', 'Disparaît']
      },
      {
        id: 'q4',
        question: 'Le Land Art utilise :',
        type: 'multiple-choice',
        options: ['La nature comme matériau et lieu d\'exposition', 'Uniquement les musées', 'La peinture à l\'huile', 'La sculpture en marbre'],
        correctAnswer: 'La nature comme matériau et lieu d\'exposition',
        explanation: 'Les artistes du Land Art travaillent dans et avec la nature.',
        hints: ['Nature', 'Paysage']
      },
      {
        id: 'q5',
        question: 'La démarche artistique d\'un artiste contemporain inclut :',
        type: 'multiple-choice',
        options: ['Ses intentions, questionnements et processus de création', 'Uniquement le prix de vente', 'Seulement la technique', 'Le nombre d\'œuvres'],
        correctAnswer: 'Ses intentions, questionnements et processus de création',
        explanation: 'La démarche explique le "pourquoi" et le "comment" de la création.',
        hints: ['Intentions', 'Processus']
      },
      {
        id: 'q6',
        question: 'L\'art in situ est :',
        type: 'multiple-choice',
        options: ['Une œuvre créée spécifiquement pour un lieu', 'Une œuvre transportable partout', 'Un tableau de chevalet', 'Une photo encadrée'],
        correctAnswer: 'Une œuvre créée spécifiquement pour un lieu',
        explanation: 'L\'œuvre in situ dialogue avec l\'espace où elle est installée.',
        hints: ['Lieu', 'Spécifique']
      },
      {
        id: 'q7',
        question: 'L\'art interactif implique :',
        type: 'multiple-choice',
        options: ['Une interaction entre l\'œuvre et le spectateur', 'Une contemplation passive', 'Une distance avec le public', 'L\'achat obligatoire'],
        correctAnswer: 'Une interaction entre l\'œuvre et le spectateur',
        explanation: 'Le spectateur active ou modifie l\'œuvre par sa présence.',
        hints: ['Interaction', 'Spectateur']
      },
      {
        id: 'q8',
        question: 'La série en art contemporain est :',
        type: 'multiple-choice',
        options: ['Un ensemble d\'œuvres liées par un thème ou un processus', 'Une seule œuvre unique', 'Un accident de création', 'Une technique de peinture'],
        correctAnswer: 'Un ensemble d\'œuvres liées par un thème ou un processus',
        explanation: 'La série permet d\'explorer des variations sur un thème.',
        hints: ['Ensemble', 'Variations']
      },
      {
        id: 'q9',
        question: 'L\'appropriation en art consiste à :',
        type: 'multiple-choice',
        options: ['Réutiliser des images ou objets existants', 'Créer ex nihilo', 'Copier sans modifier', 'Vendre des œuvres'],
        correctAnswer: 'Réutiliser des images ou objets existants',
        explanation: 'L\'appropriation transforme et recontextualise l\'existant.',
        hints: ['Réutiliser', 'Transformer']
      },
      {
        id: 'q10',
        question: 'L\'art contemporain questionne souvent :',
        type: 'multiple-choice',
        options: ['La définition même de l\'art et ses frontières', 'Uniquement la technique de peinture', 'Les règles académiques traditionnelles', 'La copie des maîtres'],
        correctAnswer: 'La définition même de l\'art et ses frontières',
        explanation: 'L\'art contemporain repousse les limites et interroge ce qu\'est l\'art.',
        hints: ['Questionner', 'Définition']
      }
    ]
  },

  // Fusion avec les exercices collège
  ...COLLEGE_EXERCISES
]
