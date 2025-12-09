/**
 * BIBLIOTHÈQUE D'EXERCICES COLLÈGE
 * Collection complète d'exercices pour les niveaux collège (6ème à 3ème)
 *
 * Contient des exercices variés pour toutes les matières principales :
 * - Mathématiques (fractions, décimaux, géométrie, algèbre)
 * - Français (grammaire, conjugaison, orthographe)
 * - Sciences (SVT, physique-chimie)
 * - Histoire-Géographie
 * - Anglais
 *
 * Chaque exercice comprend :
 * - Un identifiant unique
 * - Un titre et une description pédagogique
 * - Des questions avec indices et explications
 * - Un niveau de difficulté progressif (1-5)
 * - Un temps estimé de réalisation
 *
 * @module data/exercisesCollege
 */

import type { Exercise } from '@/services/exerciseLibrary'

/**
 * Collection d'exercices pour le collège (6ème, 5ème, 4ème, 3ème)
 * Exercices organisés par niveau et par matière
 */
export const COLLEGE_EXERCISES: Exercise[] = [
  // ==================== 6ÈME - MATHÉMATIQUES ====================

  {
    id: 'math-6eme-002',
    title: 'Opérations sur les fractions',
    subject: 'maths',
    level: '6ème',
    difficulty: 4,
    description: 'Addition et soustraction de fractions',
    estimatedTime: 25,
    skills: ['Fractions', 'Opérations'],
    questions: [
      {
        id: 'q1',
        question: 'Calcule : 3/4 + 1/4 = ?',
        type: 'fill-blank',
        correctAnswer: '1',
        explanation: '3/4 + 1/4 = 4/4 = 1 (même dénominateur, on additionne les numérateurs)',
        hints: ['Même dénominateur', '3+1 = 4', '4/4 = 1']
      },
      {
        id: 'q2',
        question: 'Calcule : 5/6 - 2/6 = ?',
        type: 'fill-blank',
        correctAnswer: '3/6',
        explanation: '5/6 - 2/6 = 3/6 (on peut simplifier en 1/2)',
        hints: ['Soustrais les numérateurs', '5 - 2 = 3', 'La réponse est : 3/6']
      },
      {
        id: 'q3',
        question: 'Pour additionner 1/3 + 1/4, il faut d\'abord :',
        type: 'multiple-choice',
        options: [
          'Additionner les numérateurs',
          'Mettre au même dénominateur',
          'Multiplier les deux fractions',
          'Diviser par 2'
        ],
        correctAnswer: 'Mettre au même dénominateur',
        explanation: 'Pour additionner des fractions de dénominateurs différents, il faut d\'abord les mettre au même dénominateur',
        hints: ['Dénominateurs différents ?', 'Il faut les rendre égaux', 'La réponse est : Mettre au même dénominateur']
      }
    ]
  },

  {
    id: 'math-6eme-003',
    title: 'Les nombres décimaux',
    subject: 'maths',
    level: '6ème',
    difficulty: 3,
    description: 'Opérations sur les décimaux',
    estimatedTime: 20,
    skills: ['Décimaux', 'Calcul'],
    questions: [
      {
        id: 'q1',
        question: '12,5 + 3,25 = ?',
        type: 'fill-blank',
        correctAnswer: '15.75',
        explanation: '12,50 + 3,25 = 15,75 (aligne les virgules)',
        hints: ['Aligne les virgules', '12,50 + 3,25', 'C\'est 15,75']
      },
      {
        id: 'q2',
        question: '10 - 2,3 = ?',
        type: 'fill-blank',
        correctAnswer: '7.7',
        explanation: '10,0 - 2,3 = 7,7',
        hints: ['10 = 10,0', '10,0 - 2,3', 'La réponse est : 7.7']
      }
    ]
  },

  {
    id: 'math-6eme-004',
    title: 'Aire du rectangle et du triangle',
    subject: 'maths',
    level: '6ème',
    difficulty: 3,
    description: 'Calcule les aires de figures géométriques',
    estimatedTime: 20,
    skills: ['Géométrie', 'Aires'],
    questions: [
      {
        id: 'q1',
        question: 'Un rectangle mesure 8 cm de long et 5 cm de large. Quelle est son aire ?',
        type: 'fill-blank',
        correctAnswer: '40',
        explanation: 'Aire rectangle = Longueur × largeur = 8 × 5 = 40 cm²',
        hints: ['Aire = L × l', '8 × 5', 'La réponse est : 40']
      },
      {
        id: 'q2',
        question: 'Quelle est la formule de l\'aire d\'un triangle ?',
        type: 'multiple-choice',
        options: ['(base × hauteur) / 2', 'base × hauteur', 'côté × côté', 'π × rayon²'],
        correctAnswer: '(base × hauteur) / 2',
        explanation: 'Aire triangle = (base × hauteur) ÷ 2',
        hints: ['Divise par 2', 'La moitié du rectangle', 'La réponse est : (base × hauteur) / 2']
      }
    ]
  },

  // ==================== 5ÈME - MATHÉMATIQUES ====================

  {
    id: 'math-5eme-relatifs-001',
    title: 'Nombres relatifs',
    subject: 'maths',
    level: '5ème',
    difficulty: 4,
    description: 'Addition et soustraction de nombres relatifs',
    estimatedTime: 25,
    skills: ['Nombres relatifs', 'Opérations'],
    questions: [
      {
        id: 'q1',
        question: '(-5) + (+3) = ?',
        type: 'fill-blank',
        correctAnswer: '-2',
        explanation: '(-5) + (+3) = -2 (on soustrait : 5 - 3 = 2, avec le signe du plus grand)',
        hints: ['Signes différents = soustraction', '5 - 3 = 2', 'Signe de 5 → négatif']
      },
      {
        id: 'q2',
        question: '(-3) - (-7) = ?',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: '(-3) - (-7) = (-3) + (+7) = +4',
        hints: ['Moins fois moins = plus', '(-3) + (+7)', 'La réponse est : 4']
      },
      {
        id: 'q3',
        question: '(+8) + (+5) = ?',
        type: 'fill-blank',
        correctAnswer: '13',
        explanation: '(+8) + (+5) = +13 (même signe, on additionne)',
        hints: ['Même signe positif', '8 + 5 = 13', 'La réponse est : 13']
      }
    ]
  },

  {
    id: 'math-5eme-priorites-001',
    title: 'Priorités opératoires',
    subject: 'maths',
    level: '5ème',
    difficulty: 4,
    description: 'Respecte l\'ordre des opérations',
    estimatedTime: 20,
    skills: ['Calcul', 'Priorités'],
    questions: [
      {
        id: 'q1',
        question: '3 + 4 × 2 = ?',
        type: 'fill-blank',
        correctAnswer: '11',
        explanation: 'On fait d\'abord la multiplication : 4 × 2 = 8, puis 3 + 8 = 11',
        hints: ['Multiplication d\'abord !', '4 × 2 = 8', 'Puis + 3']
      },
      {
        id: 'q2',
        question: '(5 + 3) × 2 = ?',
        type: 'fill-blank',
        correctAnswer: '16',
        explanation: 'Les parenthèses d\'abord : (5 + 3) = 8, puis 8 × 2 = 16',
        hints: ['Parenthèses en premier', '5 + 3 = 8', '8 × 2 = 16']
      }
    ]
  },

  {
    id: 'math-5eme-angles-001',
    title: 'Angles et triangles',
    subject: 'maths',
    level: '5ème',
    difficulty: 4,
    description: 'Propriétés des triangles',
    estimatedTime: 20,
    skills: ['Géométrie', 'Triangles', 'Angles'],
    questions: [
      {
        id: 'q1',
        question: 'La somme des angles d\'un triangle vaut toujours :',
        type: 'multiple-choice',
        options: ['90°', '180°', '270°', '360°'],
        correctAnswer: '180°',
        explanation: 'Dans tout triangle, la somme des 3 angles fait toujours 180°',
        hints: ['C\'est une propriété fondamentale', 'C\'est 180°', 'La réponse est : 180°']
      },
      {
        id: 'q2',
        question: 'Un triangle a deux angles de 60° et 70°. Quel est le troisième angle ?',
        type: 'fill-blank',
        correctAnswer: '50',
        explanation: '180° - 60° - 70° = 50°',
        hints: ['Somme = 180°', '60 + 70 = 130', '180 - 130 = 50']
      }
    ]
  },

  // ==================== 4ÈME - MATHÉMATIQUES ====================

  {
    id: 'math-4eme-001',
    title: 'Théorème de Pythagore',
    subject: 'maths',
    level: '4ème',
    difficulty: 5,
    description: 'Utilise le théorème de Pythagore',
    estimatedTime: 30,
    skills: ['Pythagore', 'Triangles rectangles'],
    questions: [
      {
        id: 'q1',
        question: 'Dans un triangle rectangle, si l\'hypoténuse fait 5 cm et un côté fait 3 cm, que vaut l\'autre côté ?',
        type: 'fill-blank',
        correctAnswer: '4',
        explanation: 'Pythagore : a² + b² = c² → 3² + b² = 5² → 9 + b² = 25 → b² = 16 → b = 4',
        hints: ['Pythagore : a² + b² = c²', '3² + b² = 5²', 'La réponse est : 4']
      },
      {
        id: 'q2',
        question: 'Le théorème de Pythagore s\'applique uniquement aux :',
        type: 'multiple-choice',
        options: ['Triangles équilatéraux', 'Triangles rectangles', 'Tous les triangles', 'Carrés'],
        correctAnswer: 'Triangles rectangles',
        explanation: 'Pythagore ne fonctionne que pour les triangles rectangles',
        hints: ['Triangle avec un angle droit', 'Rectangle !', 'La réponse est : Triangles rectangles']
      }
    ]
  },

  {
    id: 'math-4eme-002',
    title: 'Proportionnalité et pourcentages',
    subject: 'maths',
    level: '4ème',
    difficulty: 4,
    description: 'Calculs de pourcentages et proportionnalité',
    estimatedTime: 25,
    skills: ['Pourcentages', 'Proportionnalité'],
    questions: [
      {
        id: 'q1',
        question: 'Un article à 50€ est soldé -20%. Quel est son nouveau prix ?',
        type: 'fill-blank',
        correctAnswer: '40',
        explanation: '20% de 50 = 10€. Nouveau prix : 50 - 10 = 40€',
        hints: ['20% de 50 = 50 × 0,20', 'Soustrais ensuite', 'La réponse est : 40']
      },
      {
        id: 'q2',
        question: 'Augmenter un prix de 50€ de 10% donne :',
        type: 'fill-blank',
        correctAnswer: '55',
        explanation: '10% de 50 = 5€. Prix final : 50 + 5 = 55€',
        hints: ['10% = divise par 10', '50 ÷ 10 = 5', 'La réponse est : 55']
      }
    ]
  },

  {
    id: 'math-4eme-003',
    title: 'Équations du premier degré',
    subject: 'maths',
    level: '4ème',
    difficulty: 5,
    description: 'Résous des équations simples',
    estimatedTime: 25,
    skills: ['Équations', 'Algèbre'],
    questions: [
      {
        id: 'q1',
        question: 'Résous : x + 5 = 12',
        type: 'fill-blank',
        correctAnswer: '7',
        explanation: 'x + 5 = 12 → x = 12 - 5 → x = 7',
        hints: ['Isole x', 'Soustrais 5 des deux côtés', 'La réponse est : 7']
      },
      {
        id: 'q2',
        question: 'Résous : 2x = 10',
        type: 'fill-blank',
        correctAnswer: '5',
        explanation: '2x = 10 → x = 10 ÷ 2 → x = 5',
        hints: ['Divise par 2', 'x = 5', 'La réponse est : 5']
      },
      {
        id: 'q3',
        question: 'Résous : 3x + 4 = 13',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: '3x + 4 = 13 → 3x = 9 → x = 3',
        hints: ['Soustrais 4 d\'abord', '3x = 9', 'La réponse est : 3']
      }
    ]
  },

  // ==================== 3ÈME - MATHÉMATIQUES ====================

  {
    id: 'math-3eme-001',
    title: 'Calcul littéral et développement',
    subject: 'maths',
    level: '3ème',
    difficulty: 5,
    description: 'Développe et factorise',
    estimatedTime: 30,
    skills: ['Calcul littéral', 'Développement', 'Factorisation'],
    questions: [
      {
        id: 'q1',
        question: 'Développe : 3(x + 2)',
        type: 'fill-blank',
        correctAnswer: '3x+6',
        explanation: '3(x + 2) = 3×x + 3×2 = 3x + 6',
        hints: ['Distributivité', '3×x + 3×2', 'La réponse est : 3x+6']
      },
      {
        id: 'q2',
        question: 'Factorise : 5x + 10',
        type: 'fill-blank',
        correctAnswer: '5(x+2)',
        explanation: '5x + 10 = 5(x + 2) car 5 est le facteur commun',
        hints: ['Facteur commun ?', 'C\'est 5', 'La réponse est : 5(x+2)']
      },
      {
        id: 'q3',
        question: 'Développe : (x + 3)(x + 2)',
        type: 'fill-blank',
        correctAnswer: 'x²+5x+6',
        explanation: '(x+3)(x+2) = x² + 2x + 3x + 6 = x² + 5x + 6',
        hints: ['Double distributivité', 'x×x + x×2 + 3×x + 3×2', 'La réponse est : x²+5x+6']
      }
    ]
  },

  {
    id: 'math-3eme-002',
    title: 'Fonctions affines',
    subject: 'maths',
    level: '3ème',
    difficulty: 5,
    description: 'Comprends les fonctions du type f(x) = ax + b',
    estimatedTime: 30,
    skills: ['Fonctions', 'Affines'],
    questions: [
      {
        id: 'q1',
        question: 'Si f(x) = 2x + 3, que vaut f(5) ?',
        type: 'fill-blank',
        correctAnswer: '13',
        explanation: 'f(5) = 2×5 + 3 = 10 + 3 = 13',
        hints: ['Remplace x par 5', '2×5 + 3', 'La réponse est : 13']
      },
      {
        id: 'q2',
        question: 'Dans la fonction f(x) = 3x - 1, quel est le coefficient directeur ?',
        type: 'fill-blank',
        correctAnswer: '3',
        explanation: 'Le coefficient directeur (a) est 3 dans f(x) = 3x - 1',
        hints: ['C\'est le nombre devant x', 'a = 3', 'La réponse est : 3']
      }
    ]
  },

  {
    id: 'math-3eme-003',
    title: 'Trigonométrie',
    subject: 'maths',
    level: '3ème',
    difficulty: 5,
    description: 'Sinus, cosinus, tangente',
    estimatedTime: 35,
    skills: ['Trigonométrie', 'Triangles rectangles'],
    questions: [
      {
        id: 'q1',
        question: 'Dans un triangle rectangle, sin(angle) = ?',
        type: 'multiple-choice',
        options: [
          'Adjacent / Hypoténuse',
          'Opposé / Hypoténuse',
          'Opposé / Adjacent',
          'Hypoténuse / Opposé'
        ],
        correctAnswer: 'Opposé / Hypoténuse',
        explanation: 'sin(angle) = Côté opposé / Hypoténuse',
        hints: ['SOH CAH TOA', 'Sin = Opposé / Hypoténuse', 'La réponse est : Opposé / Hypoténuse']
      },
      {
        id: 'q2',
        question: 'cos(angle) = ?',
        type: 'multiple-choice',
        options: [
          'Opposé / Hypoténuse',
          'Adjacent / Hypoténuse',
          'Opposé / Adjacent',
          'Hypoténuse / Adjacent'
        ],
        correctAnswer: 'Adjacent / Hypoténuse',
        explanation: 'cos(angle) = Côté adjacent / Hypoténuse',
        hints: ['SOH CAH TOA', 'Cos = Adjacent / Hypoténuse', 'La réponse est : Adjacent / Hypoténuse']
      }
    ]
  },

  // ==================== FRANÇAIS COLLÈGE ====================

  {
    id: 'fr-6eme-001',
    title: 'Les classes grammaticales',
    subject: 'francais',
    level: '6ème',
    difficulty: 3,
    description: 'Nom, verbe, adjectif, adverbe...',
    estimatedTime: 20,
    skills: ['Grammaire', 'Classes grammaticales'],
    questions: [
      {
        id: 'q1',
        question: 'Dans "Le chat noir dort", quelle est la classe de "noir" ?',
        type: 'multiple-choice',
        options: ['Nom', 'Verbe', 'Adjectif', 'Adverbe'],
        correctAnswer: 'Adjectif',
        explanation: '"noir" qualifie le nom "chat", c\'est un adjectif qualificatif',
        hints: ['Il qualifie "chat"', 'C\'est un adjectif', 'La réponse est : Adjectif']
      },
      {
        id: 'q2',
        question: 'Quelle est la classe de "rapidement" ?',
        type: 'multiple-choice',
        options: ['Nom', 'Verbe', 'Adjectif', 'Adverbe'],
        correctAnswer: 'Adverbe',
        explanation: '"rapidement" modifie un verbe, c\'est un adverbe (souvent en -ment)',
        hints: ['Termine en -ment', 'Modifie un verbe', 'La réponse est : Adverbe']
      }
    ]
  },

  {
    id: 'fr-5eme-001',
    title: 'Les temps composés',
    subject: 'francais',
    level: '5ème',
    difficulty: 4,
    description: 'Passé composé, plus-que-parfait',
    estimatedTime: 25,
    skills: ['Conjugaison', 'Temps composés'],
    questions: [
      {
        id: 'q1',
        question: 'Conjugue "manger" au passé composé, 1ère personne :',
        type: 'fill-blank',
        correctAnswer: 'j\'ai mangé',
        explanation: 'Passé composé = auxiliaire avoir/être + participe passé. J\'ai mangé.',
        hints: ['Avoir au présent + participe passé', 'j\'ai + participe passé de manger', 'La réponse est : j\'ai mangé']
      },
      {
        id: 'q2',
        question: 'Le plus-que-parfait se forme avec :',
        type: 'multiple-choice',
        options: [
          'Avoir/être au présent + participe passé',
          'Avoir/être à l\'imparfait + participe passé',
          'Avoir/être au futur + participe passé',
          'Le verbe seul'
        ],
        correctAnswer: 'Avoir/être à l\'imparfait + participe passé',
        explanation: 'Plus-que-parfait = auxiliaire à l\'imparfait + participe passé',
        hints: ['Imparfait de l\'auxiliaire', 'j\'avais mangé', 'La réponse est : Avoir/être à l\'imparfait + participe passé']
      }
    ]
  },

  {
    id: 'fr-4eme-001',
    title: 'Les propositions subordonnées',
    subject: 'francais',
    level: '4ème',
    difficulty: 5,
    description: 'Identifier et analyser les propositions subordonnées relatives et conjonctives',
    estimatedTime: 25,
    skills: ['Grammaire', 'Propositions', 'Analyse de phrase'],
    questions: [
      {
        id: 'q1',
        question: 'Dans "Le livre que je lis est passionnant", quelle est la proposition subordonnée ?',
        type: 'multiple-choice',
        options: ['"Le livre"', '"que je lis"', '"est passionnant"', 'Il n\'y en a pas'],
        correctAnswer: '"que je lis"',
        explanation: '"que je lis" est une proposition subordonnée relative introduite par "que".',
        hints: ['Introduite par "que"', 'C\'est la relative', 'La réponse est : "que je lis"']
      },
      {
        id: 'q2',
        question: 'Une proposition subordonnée relative est introduite par :',
        type: 'multiple-choice',
        options: ['Un pronom relatif (qui, que, dont, où...)', 'Une conjonction de subordination', 'Une préposition', 'Un adverbe'],
        correctAnswer: 'Un pronom relatif (qui, que, dont, où...)',
        explanation: 'Les pronoms relatifs (qui, que, quoi, dont, où, lequel...) introduisent les relatives.',
        hints: ['Qui, que, dont, où', 'Pronom relatif', 'La réponse est : Un pronom relatif (qui, que, dont, où...)']
      },
      {
        id: 'q3',
        question: 'Dans "Je pense que tu as raison", quelle est la nature de "que tu as raison" ?',
        type: 'multiple-choice',
        options: ['Proposition subordonnée conjonctive', 'Proposition subordonnée relative', 'Proposition principale', 'Proposition indépendante'],
        correctAnswer: 'Proposition subordonnée conjonctive',
        explanation: '"que" est ici une conjonction de subordination, pas un pronom relatif.',
        hints: ['Introduite par "que" conjonction', 'Complète le verbe "pense"', 'La réponse est : Proposition subordonnée conjonctive']
      },
      {
        id: 'q4',
        question: 'Dans "L\'homme dont je parle est mon voisin", quel est l\'antécédent de "dont" ?',
        type: 'multiple-choice',
        options: ['L\'homme', 'Je', 'Mon voisin', 'Il n\'y a pas d\'antécédent'],
        correctAnswer: 'L\'homme',
        explanation: 'L\'antécédent est le nom que le pronom relatif représente dans la subordonnée.',
        hints: ['De qui parle-t-on ?', 'Le nom avant "dont"', 'La réponse est : L\'homme']
      },
      {
        id: 'q5',
        question: 'La proposition subordonnée relative a une fonction par rapport à :',
        type: 'multiple-choice',
        options: ['Son antécédent', 'Le verbe principal', 'Le sujet', 'Le COD'],
        correctAnswer: 'Son antécédent',
        explanation: 'La relative complète un nom ou pronom appelé antécédent.',
        hints: ['Elle complète un nom', 'L\'antécédent', 'La réponse est : Son antécédent']
      },
      {
        id: 'q6',
        question: 'Dans "Quand il pleut, je reste chez moi", "Quand il pleut" est :',
        type: 'multiple-choice',
        options: ['Une subordonnée circonstancielle de temps', 'Une subordonnée relative', 'Une proposition principale', 'Une subordonnée conjonctive COD'],
        correctAnswer: 'Une subordonnée circonstancielle de temps',
        explanation: '"Quand" introduit une circonstancielle de temps.',
        hints: ['Quand = temps', 'Circonstancielle', 'La réponse est : Une subordonnée circonstancielle de temps']
      },
      {
        id: 'q7',
        question: 'Dans "La ville où je suis né est belle", "où" est :',
        type: 'multiple-choice',
        options: ['Un pronom relatif', 'Un adverbe interrogatif', 'Une conjonction', 'Une préposition'],
        correctAnswer: 'Un pronom relatif',
        explanation: '"Où" est un pronom relatif qui remplace un complément de lieu.',
        hints: ['Il a un antécédent (la ville)', 'Pronom relatif de lieu', 'La réponse est : Un pronom relatif']
      },
      {
        id: 'q8',
        question: 'Une proposition subordonnée conjonctive peut avoir la fonction de :',
        type: 'multiple-choice',
        options: ['COD du verbe principal', 'Épithète du nom', 'Attribut du COD', 'Apposition'],
        correctAnswer: 'COD du verbe principal',
        explanation: 'Ex : "Je sais que tu viendras" → "que tu viendras" = COD de "sais".',
        hints: ['Je sais QUOI ?', 'Complément du verbe', 'La réponse est : COD du verbe principal']
      },
      {
        id: 'q9',
        question: 'Identifie la subordonnée : "Si tu viens, nous irons au cinéma."',
        type: 'multiple-choice',
        options: ['"Si tu viens"', '"nous irons au cinéma"', 'Toute la phrase', 'Il n\'y en a pas'],
        correctAnswer: '"Si tu viens"',
        explanation: '"Si tu viens" est une subordonnée circonstancielle de condition.',
        hints: ['Introduite par "si"', 'Condition', 'La réponse est : "Si tu viens"']
      },
      {
        id: 'q10',
        question: 'Dans "C\'est l\'endroit que je préfère", la fonction de "que" dans la subordonnée est :',
        type: 'multiple-choice',
        options: ['COD', 'Sujet', 'COI', 'Complément circonstanciel'],
        correctAnswer: 'COD',
        explanation: '"que" = "l\'endroit", COD de "préfère" (je préfère QUOI ? → l\'endroit/que).',
        hints: ['Je préfère QUOI ?', '"que" remplace "l\'endroit"', 'La réponse est : COD']
      }
    ]
  },

  {
    id: 'fr-3eme-001',
    title: 'L\'argumentation',
    subject: 'francais',
    level: '3ème',
    difficulty: 5,
    description: 'Thèse, arguments, exemples',
    estimatedTime: 30,
    skills: ['Argumentation', 'Rédaction'],
    questions: [
      {
        id: 'q1',
        question: 'Dans un texte argumentatif, la thèse est :',
        type: 'multiple-choice',
        options: [
          'Un exemple',
          'L\'idée défendue',
          'Une conclusion',
          'Un argument'
        ],
        correctAnswer: 'L\'idée défendue',
        explanation: 'La thèse est l\'idée principale que l\'auteur défend',
        hints: ['C\'est l\'idée principale', 'Ce qu\'on défend', 'La réponse est : L\'idée défendue']
      }
    ]
  },

  // ==================== ANGLAIS COLLÈGE ====================

  {
    id: 'en-6eme-002',
    title: 'Past Simple (Prétérit)',
    subject: 'anglais',
    level: '6ème',
    difficulty: 4,
    description: 'Le passé simple en anglais',
    estimatedTime: 20,
    skills: ['Grammar', 'Past Simple'],
    questions: [
      {
        id: 'q1',
        question: 'Yesterday, I _____ to the cinema. (go)',
        type: 'fill-blank',
        correctAnswer: 'went',
        explanation: 'Go → went (verbe irrégulier au prétérit)',
        hints: ['Verbe irrégulier', 'went', 'La réponse est : went']
      },
      {
        id: 'q2',
        question: 'She _____ her homework last night. (do)',
        type: 'fill-blank',
        correctAnswer: 'did',
        explanation: 'Do → did (verbe irrégulier)',
        hints: ['Verbe irrégulier', 'did', 'La réponse est : did']
      }
    ]
  },

  {
    id: 'en-5eme-001',
    title: 'Present Perfect',
    subject: 'anglais',
    level: '5ème',
    difficulty: 4,
    description: 'Le present perfect : have/has + participe passé',
    estimatedTime: 25,
    skills: ['Grammar', 'Present Perfect'],
    questions: [
      {
        id: 'q1',
        question: 'I _____ Paris twice. (visit)',
        type: 'fill-blank',
        correctAnswer: 'have visited',
        explanation: 'Present perfect : have + visited',
        hints: ['have + participe passé', 'have visited', 'La réponse est : have visited']
      }
    ]
  },

  {
    id: 'en-4eme-001',
    title: 'Modaux anglais',
    subject: 'anglais',
    level: '4ème',
    difficulty: 5,
    description: 'Can, must, should, may...',
    estimatedTime: 25,
    skills: ['Grammar', 'Modals'],
    questions: [
      {
        id: 'q1',
        question: 'You _____ wear a seatbelt. (obligation)',
        type: 'multiple-choice',
        options: ['can', 'must', 'may', 'would'],
        correctAnswer: 'must',
        explanation: 'Must exprime l\'obligation forte',
        hints: ['Obligation', 'must', 'La réponse est : must']
      }
    ]
  },

  {
    id: 'en-3eme-001',
    title: 'Conditionnel anglais',
    subject: 'anglais',
    level: '3ème',
    difficulty: 5,
    description: 'If clauses - conditionnel',
    estimatedTime: 30,
    skills: ['Grammar', 'Conditionals'],
    questions: [
      {
        id: 'q1',
        question: 'If I _____ rich, I would travel. (be)',
        type: 'fill-blank',
        correctAnswer: 'were',
        explanation: 'Conditionnel type 2 : If + prétérit, would + base verbale. "were" pour toutes les personnes',
        hints: ['Prétérit de be', 'were (conditionnel)', 'La réponse est : were']
      }
    ]
  },

  // ==================== SCIENCES COLLÈGE ====================

  {
    id: 'sci-6eme-002',
    title: 'Les mélanges et solutions',
    subject: 'sciences',
    level: '6ème',
    difficulty: 3,
    description: 'Mélanges homogènes et hétérogènes',
    estimatedTime: 20,
    skills: ['Chimie', 'Mélanges'],
    questions: [
      {
        id: 'q1',
        question: 'Un mélange où on ne distingue pas les composants est :',
        type: 'multiple-choice',
        options: ['Hétérogène', 'Homogène', 'Solide', 'Gazeux'],
        correctAnswer: 'Homogène',
        explanation: 'Un mélange homogène est uniforme (ex: eau salée)',
        hints: ['Uniforme', 'Homogène', 'La réponse est : Homogène']
      }
    ]
  },

  {
    id: 'sci-5eme-001',
    title: 'Les circuits électriques',
    subject: 'sciences',
    level: '5ème',
    difficulty: 4,
    description: 'Circuits en série et en dérivation',
    estimatedTime: 25,
    skills: ['Physique', 'Électricité'],
    questions: [
      {
        id: 'q1',
        question: 'Dans un circuit en série, si une lampe grille :',
        type: 'multiple-choice',
        options: [
          'Les autres continuent de fonctionner',
          'Toutes les lampes s\'éteignent',
          'Rien ne se passe',
          'Elles brillent plus fort'
        ],
        correctAnswer: 'Toutes les lampes s\'éteignent',
        explanation: 'En série, il n\'y a qu\'un seul chemin pour le courant',
        hints: ['Un seul chemin', 'Tout s\'éteint', 'La réponse est : Toutes les lampes s\'éteignent']
      }
    ]
  },

  {
    id: 'sci-4eme-001',
    title: 'Les atomes et molécules',
    subject: 'sciences',
    level: '4ème',
    difficulty: 5,
    description: 'Structure de la matière',
    estimatedTime: 25,
    skills: ['Chimie', 'Atomes'],
    questions: [
      {
        id: 'q1',
        question: 'La formule de l\'eau est :',
        type: 'multiple-choice',
        options: ['H2O', 'O2', 'CO2', 'H2O2'],
        correctAnswer: 'H2O',
        explanation: 'L\'eau = H2O (2 atomes d\'hydrogène, 1 atome d\'oxygène)',
        hints: ['Hydrogène + Oxygène', 'H2O', 'La réponse est : H2O']
      }
    ]
  },

  {
    id: 'sci-3eme-001',
    title: 'L\'énergie et sa conservation',
    subject: 'sciences',
    level: '3ème',
    difficulty: 5,
    description: 'Transformations d\'énergie',
    estimatedTime: 30,
    skills: ['Physique', 'Énergie'],
    questions: [
      {
        id: 'q1',
        question: 'Dans une centrale hydraulique, l\'énergie se transforme :',
        type: 'multiple-choice',
        options: [
          'Chimique → Électrique',
          'Mécanique → Électrique',
          'Nucléaire → Électrique',
          'Thermique → Électrique'
        ],
        correctAnswer: 'Mécanique → Électrique',
        explanation: 'L\'eau en mouvement (énergie mécanique) fait tourner une turbine qui produit de l\'électricité',
        hints: ['Mouvement de l\'eau', 'Mécanique', 'La réponse est : Mécanique → Électrique']
      }
    ]
  }
]
