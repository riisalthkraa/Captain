# 🚀 Guide de Release v1.8.0

## 📋 Checklist avant release

### ✅ Code & Configuration
- [x] Version mise à jour dans `package.json` (1.8.0)
- [x] CHANGELOG.md à jour avec toutes les modifications
- [x] README.md complet et à jour
- [x] Icons créées (SVG + conversions pour .ico, .icns, .png)
- [x] Configuration electron-builder (.exe, .dmg, .AppImage, .deb)
- [x] GitHub Actions workflow configuré
- [x] TypeDoc configuration
- [x] .gitignore configuré
- [ ] Tests lancés et validés
- [ ] Linter passé sans erreurs

### 🔧 Build Local (Test)
```bash
# Tester les builds localement avant de push
npm install
npm run build
npm run package:win    # Test Windows
npm run package:mac    # Test macOS
npm run package:linux  # Test Linux
```

### 📦 Fichiers générés attendus
- Windows:
  - `dist/Captaine-Setup-1.8.0.exe` (installateur NSIS)
  - `dist/Captaine 1.8.0.exe` (portable)
- macOS:
  - `dist/Captaine-1.8.0-x64.dmg`
  - `dist/Captaine-1.8.0-arm64.dmg`
  - `dist/Captaine-1.8.0-x64.zip`
  - `dist/Captaine-1.8.0-arm64.zip`
- Linux:
  - `dist/Captaine-1.8.0-x64.AppImage`
  - `dist/Captaine-1.8.0-x64.deb`

## 🎯 Étapes de release

### 1. Préparer le code

```bash
# S'assurer d'être sur main
git checkout main

# Vérifier qu'il n'y a pas de modifications non commit
git status

# Pull les dernières modifications
git pull origin main
```

### 2. Créer le commit de release

```bash
# Ajouter tous les fichiers
git add .

# Commit avec message descriptif
git commit -m "Release v1.8.0

- Fix: Mini-games XP system (now gives XP only at game end)
- Add: 13+ educational mini-games with full gamification
- Add: 55 badges system with tree progression
- Add: 4 foreign languages (EN, ES, DE, IT)
- Add: Complete dashboard with ML analysis
- Fix: Website consistency (CP-3ème scope)
- Add: CI/CD pipeline with GitHub Actions
- Add: Multi-platform builds configuration"
```

### 3. Créer et pusher le tag

```bash
# Créer le tag v1.8.0
git tag -a v1.8.0 -m "Cap'taine v1.8.0 - Mini-games & Gamification Update"

# Push le code
git push origin main

# Push le tag (déclenche le CI/CD)
git push origin v1.8.0
```

### 4. Attendre le CI/CD

Le workflow GitHub Actions va automatiquement:
1. ✅ Lancer les tests
2. 🏗️ Builder pour Windows, macOS, Linux
3. 📦 Créer les packages (.exe, .dmg, .AppImage, .deb)
4. 🚀 Créer la release GitHub avec les artifacts
5. 📚 Générer et déployer la documentation API

Suivre la progression sur: https://github.com/riisalthkraa/Captain-DEV/actions

### 5. Vérifier la release

1. Aller sur https://github.com/riisalthkraa/Captain-DEV/releases
2. Vérifier que la release v1.8.0 est créée
3. Vérifier la présence de tous les fichiers
:
   - Captaine-Setup-1.8.0.exe (Windows)
   - Captaine-1.8.0-x64.dmg (macOS Intel)
   - Captaine-1.8.0-arm64.dmg (macOS Apple Silicon)
   - Captaine-1.8.0-x64.AppImage (Linux)
   - Captaine-1.8.0-x64.deb (Linux Debian/Ubuntu)

### 6. Tester les builds

#### Windows
1. Télécharger `Captaine-Setup-1.8.0.exe`
2. Lancer l'installateur
3. Vérifier l'icône dans le menu démarrage
4. Lancer l'app et tester les fonctionnalités clés

#### macOS
1. Télécharger le .dmg correspondant (x64 ou arm64)
2. Ouvrir le .dmg et glisser dans Applications
3. Lancer (accepter le warning "App from unidentified developer")
4. Tester les fonctionnalités

#### Linux
1. Télécharger le .AppImage
2. Rendre exécutable: `chmod +x Captaine-1.8.0-x64.AppImage`
3. Lancer: `./Captaine-1.8.0-x64.AppImage`
4. Tester les fonctionnalités

### 7. Mettre à jour le site web

1. Copier les pages de test-results vers le site:
```bash
cp -r test-results/index.html website/test-results/
```

2. Mettre à jour les liens de téléchargement dans `website/index.html`:
```html
<a href="https://github.com/riisalthkraa/Captain-DEV/releases/download/v1.8.0/Captaine-Setup-1.8.0.exe">
  Télécharger pour Windows
</a>
```

3. Publier le site web (hors scope, à faire séparément)

## 🐛 En cas de problème

### Build échoue sur GitHub Actions
1. Vérifier les logs dans Actions
2. Tester le build localement: `npm run package:all`
3. Corriger l'erreur
4. Créer un nouveau tag: `v1.8.1`

### Icônes manquantes
1. Vérifier que `build/icon.svg` existe
2. Générer les icônes manquantes:
```bash
# Windows: Utiliser un convertisseur online SVG -> ICO
# macOS: Utiliser iconutil (nécessite fichier .iconset)
# Linux: convert icon.svg -resize 512x512 icon.png
```

### App ne démarre pas
1. Vérifier les logs Electron
2. S'assurer que `dist-electron/main.js` existe
3. Vérifier la configuration dans package.json -> "build"

## 📝 Notes post-release

### Annoncer la release
- [ ] Twitter/X
- [ ] LinkedIn
- [ ] Site web
- [ ] README.md badge updated

### Suivi
- [ ] Monitor GitHub Issues pour les bugs
- [ ] Vérifier les téléchargements (Release insights)
- [ ] Collecter feedback utilisateurs

### Prochaine version (v1.9.0)
- Implémenter les vrais tests (Jest + Playwright)
- Ajouter plus de mini-jeux
- Améliorer l'IA adaptative
- Support multi-langues (UI)

---

## 🔗 Liens utiles

- Repository: https://github.com/riisalthkraa/Captain-DEV
- Releases: https://github.com/riisalthkraa/Captain-DEV/releases
- Issues: https://github.com/riisalthkraa/Captain-DEV/issues
- Actions: https://github.com/riisalthkraa/Captain-DEV/actions
- Documentation: https://riisalthkraa.github.io/Captain-DEV/
