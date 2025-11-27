# Documentation Cap'taine

## Génération de la documentation API

Cap'taine utilise [TypeDoc](https://typedoc.org/) pour générer automatiquement la documentation API à partir des commentaires JSDoc dans le code source.

### Prérequis

TypeDoc est déjà installé en tant que dépendance de développement. Si ce n'est pas le cas, installez-le avec :

```bash
npm install --save-dev typedoc
```

### Générer la documentation

Pour générer la documentation complète de l'API :

```bash
npm run docs
```

Cette commande va :
1. Analyser tous les fichiers TypeScript du projet
2. Extraire les commentaires JSDoc et les annotations de type
3. Générer une documentation HTML dans le dossier `docs/`

### Consulter la documentation

Une fois générée, ouvrez le fichier `docs/index.html` dans votre navigateur pour consulter la documentation complète.

### Configuration

La configuration de TypeDoc se trouve dans le fichier `typedoc.json` à la racine du projet. Vous pouvez y personnaliser :

- Les dossiers à inclure/exclure
- Les catégories d'organisation
- Le nom du projet
- Les options d'affichage

### Structure de la documentation

La documentation est organisée par modules :

#### **Services** (`src/services/`)
- **aiProviders.ts** : Gestion multi-provider IA (OpenAI, Anthropic, Google, Ollama)
- **auth.ts** : Authentification (Teacher/Student/Guest)
- **database.ts** & **databaseV2.ts** : Stockage local avec Dexie
- **documentProcessor.ts** : Analyse de documents PDF
- **exerciseLibrary.ts** : Bibliothèque d'exercices
- **weaknessAnalyzer.ts** : Détection des difficultés d'apprentissage
- **speech.ts** : Synthèse vocale (TTS/STT)

#### **Store** (`src/store/`)
- **useAuthStore.ts** : État d'authentification
- **useAppStore.ts** : État global de l'application
- **useClassroomStore.ts** : Gestion des classes (enseignants)
- **useGamificationStore.ts** : Système de gamification (XP, badges)
- **useGuestProfileStore.ts** : Profils invités

#### **Components** (`src/components/`)
- Composants React de l'interface utilisateur
- Composants UI réutilisables (`src/components/ui/`)

#### **Utils** (`src/lib/`, `src/utils/`)
- Fonctions utilitaires (dates, niveaux scolaires, classes CSS)
- Helpers et outils divers

#### **Data** (`src/data/`)
- Bibliothèques d'exercices par niveau
- Données statiques

### Bonnes pratiques de documentation

Pour maintenir une documentation de qualité :

1. **Commentez les fonctions publiques** avec JSDoc :
```typescript
/**
 * Description de la fonction
 *
 * @param param1 - Description du paramètre
 * @param param2 - Description du paramètre
 * @returns Description du retour
 *
 * @example
 * ```ts
 * const result = maFonction(arg1, arg2)
 * ```
 */
export function maFonction(param1: string, param2: number): boolean {
  // ...
}
```

2. **Documentez les interfaces et types** :
```typescript
/**
 * Interface pour les props du composant
 */
export interface MyComponentProps {
  /** Description de la prop */
  title: string
  /** Description de la prop avec valeur par défaut */
  size?: 'sm' | 'md' | 'lg'
}
```

3. **Ajoutez des exemples d'utilisation** quand c'est pertinent

4. **Utilisez des tags JSDoc appropriés** :
   - `@module` pour les modules
   - `@param` pour les paramètres
   - `@returns` pour les valeurs de retour
   - `@example` pour les exemples
   - `@throws` pour les erreurs possibles
   - `@deprecated` pour les éléments obsolètes

### Ressources

- [Documentation TypeDoc](https://typedoc.org/)
- [Guide JSDoc](https://jsdoc.app/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Note** : La documentation est générée à partir du code source. Assurez-vous que vos commentaires sont à jour avant de générer la documentation.
