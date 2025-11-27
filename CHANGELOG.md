# Changelog

Toutes les modifications notables de Cap'taine seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.8.0] - 2025-01-27

### 🎉 Ajouté
- **13+ Mini-jeux éducatifs** avec système de gamification complet
  - 🏎️ Course de Calcul (CP-6ème)
  - 🍕 Pizza des Fractions (CE2-CM2)
  - ⚔️ Bataille des Tables (CE1-CM2)
  - 🔍 Explorateur de Mots (CP-CM2)
  - 📝 Quête Grammaticale (CE1-6ème)
  - 🪐 Explorateur des Planètes (CM1-CM2)
  - 🦁 Quiz des Animaux (CP-CM2)
  - 🃏 Memory des Calculs (CP-CM2)
  - 🎵 Simon Says (logique)
  - 📖 Attrape-Mots (CE1-CM2)
  - Et plus encore...

- **Système de badges avancé** : 55 badges déblocables
  - Badges de progression (🌟 Premier pas, 🏆 Champion)
  - Badges de maîtrise (⭐ Génie des maths, 📚 Rat de bibliothèque)
  - Badges de série (🔥 Série de 7, ⚡ Éclair)
  - Badges spéciaux (🎓 Premier de la classe, 🌍 Explorateur)

- **Arbre de progression visuel** : 🌱→🌿→🌳→🌴 (10 étapes)
- **Système XP équilibré** :
  - 1 exercice = 15-30 XP
  - 1 mini-jeu = 15-30 XP (récompense à la fin uniquement)
- **Dashboard amélioré** avec tracking complet
  - Statistiques détaillées par matière
  - Analyse ML des forces/faiblesses
  - Suivi des priorités d'apprentissage
  - Historique de progression

- **Extension des matières** :
  - Langues étrangères : anglais, espagnol, allemand, italien
  - Plus de 2000 exercices couvrant CP à 3ème
  - Exercices de sciences (SVT, physique-chimie)
  - Histoire-Géographie complète

### 🔧 Modifié
- **Système d'XP des mini-jeux corrigé** : L'XP est maintenant donné uniquement à la fin du jeu, pas à chaque bonne réponse
- **Logique du Dashboard** : Les mini-jeux ne faussent plus les statistiques d'exercices réussis
- **Version mise à jour** : 1.0.0 → 1.8.0
- **Description produit** : "CP au CM2" → "CP à la 3ème" (cohérence sur tout le site)
- **Site web** :
  - Section Dashboard & Gamification ajoutée (détails des 55 badges, arbre, stats)
  - FAQ mise à jour (clarification adaptation niveau, langues étrangères)
  - Mentions légales et CGV harmonisées

### 🐛 Corrigé
- **Bug XP mini-jeux** : Les joueurs ne gagnaient plus 50-100+ XP par mini-jeu (maintenant 15-30 XP comme les exercices)
- **MemoryCalculGame** : Donnait 110 XP au lieu de 30 (10 XP par paire + 50 XP final)
- **Incohérences de niveau** : Tous les fichiers utilisent maintenant "CP à la 3ème" (au lieu de "CP au CM2" ou "CP à la 6ème")
- **Sauvegarde locale** : Clarification dans la FAQ que les données persistent (localStorage + IndexedDB)

### 📦 Infrastructure
- **GitHub Actions** : CI/CD complet avec builds multi-plateformes (Windows, macOS, Linux)
- **Tests Jest** : 16 tests automatisés (gamification, mini-jeux, exercices, dashboard)
- **Icônes application** : Icône ⛵ Cap'taine SVG pour Windows (.ico), macOS (.icns), Linux (.png)
- **Configuration electron-builder** : Support Windows (NSIS), macOS (DMG + ZIP), Linux (AppImage + DEB)
- **Documentation automatisée** : TypeDoc génère la doc API en HTML (skipErrorChecking pour Mode Enseignement incomplet)
- **Workflow optimisé** : timeout 30min, fail-fast:false pour builds parallèles robustes

### 🎨 Design
- Nouvelle icône officielle Cap'taine (voilier ⛵ sur fond bleu océan)
- Icônes desktop pour tous les OS

---

## [1.0.0] - 2025-01-01

### 🎉 Version initiale
- Application desktop multi-plateforme (Windows, macOS, Linux)
- Mode Chatbot IA avec providers multiples (Ollama, OpenAI, Anthropic, Mistral, Groq)
- Banque d'exercices (2000+ exercices pré-enregistrés)
- Mode VS Cap'taine (défi contre l'IA)
- Système de profils (Famille + Enseignement)
- Gamification de base (XP, niveaux, badges)
- Tracking local avec IndexedDB
- Algorithme SM-2 pour révisions espacées
- Support français et mathématiques (CP-CM2)
- Interface adaptative avec Zustand
- Thème sombre/clair

---

## Types de changements
- `Ajouté` pour les nouvelles fonctionnalités
- `Modifié` pour les changements aux fonctionnalités existantes
- `Obsolète` pour les fonctionnalités bientôt supprimées
- `Supprimé` pour les fonctionnalités supprimées
- `Corrigé` pour les corrections de bugs
- `Sécurité` pour les vulnérabilités corrigées
