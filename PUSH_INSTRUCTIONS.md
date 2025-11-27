# 📦 Instructions de Push - Cap'taine v1.8.0

## ✅ Prérequis

Tout est prêt! Voici ce qui a été créé:

### 📁 Structure complète

```
Captain-DEV/
├── .github/workflows/
│   └── release.yml                    ✅ CI/CD GitHub Actions
├── src/                               ✅ Code source complet
├── electron/                          ✅ Code Electron
├── build/
│   └── icon.svg                       ✅ Icône de l'app
├── scripts/
│   ├── generate-icons.js              ✅ Génération icônes
│   ├── generate-test-report.js        ✅ Rapports de tests
│   ├── generate-website-content.js    ✅ Génération docs + tests
│   ├── init-git.sh                    ✅ Init Git
│   └── prepare-release.sh             ✅ Prépare tout
├── website/                           ❌ EXCLU du push (dans .gitignore)
│   ├── test-results/index.html        ✅ Généré (pour publication séparée)
│   ├── docs/                          📝 À générer avec TypeDoc
│   └── (reste du site HTML...)        ❌ Ne sera PAS pushé
├── .gitignore                         ✅ Configure (exclut website/)
├── package.json                       ✅ v1.8.0 + config electron-builder
├── typedoc.json                       ✅ Génère dans website/docs/
├── README.md                          ✅ Documentation complète
├── CHANGELOG.md                       ✅ Historique v1.8.0
└── RELEASE.md                         ✅ Guide de release
```

## 🚀 Commandes de Push

### Option 1: Rapide (Windows PowerShell ou Git Bash)

```bash
# 1. Init Git et configuration
git init
git remote add origin https://github.com/riisalthkraa/Captain-DEV.git
git checkout -b main

# 2. Ajouter tous les fichiers (website/ sera automatiquement exclu)
git add .

# 3. Vérifier ce qui sera commit
git status

# 4. Commit
git commit -m "Release v1.8.0

- Fix: Mini-games XP system (XP only at game end)
- Add: 13+ educational mini-games
- Add: 55 badges + tree progression
- Add: 4 foreign languages support
- Add: Complete CI/CD pipeline
- Fix: Website content consistency"

# 5. Tag
git tag -a v1.8.0 -m "Cap'taine v1.8.0 - Mini-games & Gamification Update"

# 6. Push
git push -u origin main
git push origin v1.8.0
```

### Option 2: Avec les scripts (Linux/macOS/Git Bash)

```bash
# Tout préparer
bash scripts/prepare-release.sh

# Init Git
bash scripts/init-git.sh

# Ajouter, commit, tag, push (commandes affichées par le script)
```

## ⚙️ Ce qui va se passer après le push

### 1. GitHub Actions détecte le tag `v1.8.0`
   - Lance le workflow `.github/workflows/release.yml`

### 2. Job "test"
   - Installe les dépendances
   - Lance les tests (actuellement simulés)
   - Génère les rapports

### 3. Job "build" (parallèle sur 3 OS)
   - **Windows** → `Captaine-Setup-1.8.0.exe` + portable
   - **macOS** → `Captaine-1.8.0-x64.dmg` + `arm64.dmg`
   - **Linux** → `Captaine-1.8.0-x64.AppImage` + `.deb`

### 4. Job "release"
   - Crée la release GitHub v1.8.0
   - Upload tous les fichiers buildés
   - Génère les release notes automatiques

### 5. Job "publish-docs"
   - Génère la documentation TypeDoc
   - La publie sur GitHub Pages (si configuré)

## 📦 Fichiers buildés attendus

Après ~15-30 min, la release contiendra:

- `Captaine-Setup-1.8.0.exe` (Installateur Windows)
- `Captaine 1.8.0.exe` (Portable Windows)
- `Captaine-1.8.0-x64.dmg` (macOS Intel)
- `Captaine-1.8.0-arm64.dmg` (macOS Apple Silicon)
- `Captaine-1.8.0-x64.zip` (macOS archives)
- `Captaine-1.8.0-x64.AppImage` (Linux universel)
- `Captaine-1.8.0-x64.deb` (Debian/Ubuntu)

## 🌐 Publication du website (étape suivante)

Le dossier `website/` contient:
- Le site vitrine HTML/CSS/JS complet
- `website/test-results/` - Rapports de tests générés
- `website/docs/` - Documentation API (à générer)

**Important**: Ce contenu n'est PAS dans le repo GitHub (exclu par .gitignore)

Pour le publier, tu me donneras l'adresse du site et on configurera:
- Hébergement (Netlify, Vercel, GitHub Pages séparé, etc.)
- Les liens de téléchargement vers les releases GitHub

## 🔍 Vérifications avant push

- [ ] `package.json` version = `1.8.0`
- [ ] `build/icon.svg` existe
- [ ] `CHANGELOG.md` à jour
- [ ] `README.md` complet
- [ ] `.gitignore` exclut `website/`
- [ ] Website généré (`website/test-results/index.html` existe)
- [ ] Repository GitHub créé: https://github.com/riisalthkraa/Captain-DEV

## 📞 Après le push

1. Aller sur https://github.com/riisalthkraa/Captain-DEV/actions
2. Surveiller le workflow "Build and Release"
3. Attendre que tous les jobs soient verts ✅
4. Aller sur https://github.com/riisalthkraa/Captain-DEV/releases
5. Vérifier la release v1.8.0 et télécharger un build pour tester

## 🐛 En cas d'erreur

### "Repository not found"
→ Créer le repository sur GitHub d'abord

### "Icon files missing"
→ Pour Windows/macOS, il faut générer `.ico` et `.icns` depuis le SVG
→ Le CI/CD peut continuer sans eux (juste warning)

### "Build failed"
→ Consulter les logs dans Actions
→ Généralement: dépendances manquantes ou erreur TypeScript

---

**Prêt à pusher?** Copie les commandes de la section "Option 1" et lance-les! 🚀
