#!/bin/bash

# Script de préparation de la release v1.8.0

echo "🚀 Préparation de la release Cap'taine v1.8.0"
echo "=" | head -c 60
echo ""

# 1. Générer le contenu website
echo "📦 Génération du contenu website (docs + tests)..."
npm run website:generate
echo ""

# 2. Vérifier que les icônes sont présentes
echo "🎨 Vérification des icônes..."
if [ ! -f "build/icon.svg" ]; then
    echo "❌ build/icon.svg manquant!"
    exit 1
fi
echo "✅ Icône SVG présente"
echo ""

# 3. Afficher un résumé de ce qui sera pushé
echo "📋 Résumé des fichiers pour GitHub:"
echo ""
echo "Configuration:"
echo "  ✅ .github/workflows/release.yml (CI/CD)"
echo "  ✅ package.json (v1.8.0)"
echo "  ✅ typedoc.json"
echo "  ✅ .gitignore (website/ exclu)"
echo ""
echo "Code source:"
echo "  ✅ src/ (tout le code TypeScript/React)"
echo "  ✅ electron/ (processus principal)"
echo ""
echo "Documentation:"
echo "  ✅ README.md"
echo "  ✅ CHANGELOG.md"
echo "  ✅ RELEASE.md"
echo ""
echo "Scripts:"
echo "  ✅ scripts/generate-icons.js"
echo "  ✅ scripts/generate-test-report.js"
echo "  ✅ scripts/generate-website-content.js"
echo ""
echo "Ressources:"
echo "  ✅ build/icon.svg"
echo ""
echo "❌ Exclus du push:"
echo "  - website/ (sera publié séparément)"
echo "  - node_modules/"
echo "  - dist/"
echo "  - Fichiers de build (.exe, .dmg, etc.)"
echo ""

# 4. Vérifier le statut Git
if [ -d ".git" ]; then
    echo "📊 Statut Git actuel:"
    git status --short | head -20
    echo ""

    MODIFIED_COUNT=$(git status --short | wc -l)
    echo "📌 $MODIFIED_COUNT fichier(s) modifié(s)"
else
    echo "ℹ️  Git n'est pas encore initialisé"
    echo "   Lancez: bash scripts/init-git.sh"
fi

echo ""
echo "=" | head -c 60
echo ""
echo "✅ Préparation terminée!"
echo ""
echo "📌 Prochaines étapes:"
echo ""
echo "1. Initialiser Git (si pas déjà fait):"
echo "   bash scripts/init-git.sh"
echo ""
echo "2. Ajouter les fichiers:"
echo "   git add ."
echo ""
echo "3. Créer le commit:"
echo "   git commit -m 'Release v1.8.0'"
echo ""
echo "4. Créer le tag:"
echo "   git tag -a v1.8.0 -m 'Cap''taine v1.8.0 - Mini-games & Gamification'"
echo ""
echo "5. Push vers GitHub:"
echo "   git push -u origin main"
echo "   git push origin v1.8.0"
echo ""
echo "6. Attendre que le CI/CD génère les builds (.exe, .dmg, .AppImage)"
echo ""
echo "7. Publier le website séparément (après que tu me donnes l'adresse)"
echo ""
