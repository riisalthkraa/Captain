// Exercices de Sciences pour CM1 - Niveau 9-10 ans
// 3 exercices complets avec 10 questions chacun

export const exercicesSciences = [
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
        question: 'Quel mouvement de la Terre provoque le jour et la nuit ?',
        type: 'fill-blank',
        options: [],
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
        question: 'Comment s\'appelle le mouvement de la Terre autour du Soleil ?',
        type: 'fill-blank',
        options: [],
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
        question: 'Comment appelle-t-on un animal qui mange à la fois des plantes et de la viande ?',
        type: 'fill-blank',
        options: [],
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
        question: 'Quel mot désigne un animal qui chasse d\'autres animaux ?',
        type: 'fill-blank',
        options: [],
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
        question: 'Comment appelle-t-on un matériau qui ne laisse pas passer l\'électricité ?',
        type: 'fill-blank',
        options: [],
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
        question: 'Quel composant permet d\'ouvrir ou de fermer un circuit électrique ?',
        type: 'fill-blank',
        options: [],
        correctAnswer: 'interrupteur',
        explanation: 'L\'interrupteur est un composant qui permet d\'ouvrir ou de fermer un circuit électrique. Quand on appuie dessus, il ferme le circuit et le courant passe (l\'ampoule s\'allume). Quand on rappuie, il ouvre le circuit et le courant s\'arrête (l\'ampoule s\'éteint).',
        hints: ['On en trouve sur les murs pour allumer la lumière', 'Il permet de contrôler le circuit']
      }
    ]
  }
];
