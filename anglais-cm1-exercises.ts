// Exercices d'Anglais pour CM1 (9-10 ans)
// 3 exercices complets avec 10 questions chacun

export const exercicesAnglaisCM1 = [
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
        question: 'Complète : "I have two ___ to walk." (J\'ai deux ___ pour marcher.)',
        type: 'fill-blank',
        options: ['legs'],
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
        question: 'Complète : "I smell with my ___." (Je sens avec mon ___.)',
        type: 'fill-blank',
        options: ['nose'],
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
        question: 'Complète : "She is wearing a beautiful ___." (Elle porte une belle robe.)',
        type: 'fill-blank',
        options: ['dress'],
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
        question: 'Complète : "Put on your ___ before your shoes." (Mets tes chaussettes avant tes chaussures.)',
        type: 'fill-blank',
        options: ['socks'],
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
        question: 'Complète : "It\'s five ___." (Il est cinq heures pile.)',
        type: 'fill-blank',
        options: ['o\'clock'],
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
        question: 'Complète : "It\'s ___ past ten." (Il est dix heures et quart.)',
        type: 'fill-blank',
        options: ['quarter'],
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
  }
];
