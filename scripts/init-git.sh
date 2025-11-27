#!/bin/bash

# Script d'initialisation Git pour Cap'taine v1.8.0

echo "🚀 Initialisation du repository Git pour Cap'taine v1.8.0"
echo ""

# Vérifier si Git est installé
if ! command -v git &> /dev/null; then
    echo "❌ Git n'est pas installé. Installez Git avant de continuer."
    exit 1
fi

echo "✅ Git détecté"

# Init Git si pas déjà fait
if [ ! -d ".git" ]; then
    echo "📦 Initialisation du repository..."
    git init
    echo "✅ Repository initialisé"
else
    echo "✅ Repository Git déjà existant"
fi

# Configurer le remote
echo ""
echo "🔗 Configuration du remote GitHub..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/riisalthkraa/Captain-DEV.git
echo "✅ Remote configuré: https://github.com/riisalthkraa/Captain-DEV.git"

# Créer la branche main si nécessaire
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo ""
    echo "🌿 Création de la branche main..."
    git checkout -b main 2>/dev/null || git checkout main
fi

# Afficher le statut
echo ""
echo "📊 Statut actuel:"
git status --short

echo ""
echo "✅ Initialisation terminée!"
echo ""
echo "📌 Prochaines étapes:"
echo "   1. Vérifier les fichiers à committer: git status"
echo "   2. Ajouter les fichiers: git add ."
echo "   3. Créer le commit: git commit -m 'Release v1.8.0'"
echo "   4. Tag la version: git tag v1.8.0"
echo "   5. Push vers GitHub: git push -u origin main"
echo "   6. Push le tag: git push origin v1.8.0"
echo ""
echo "⚠️  N'oubliez pas de créer le repository sur GitHub d'abord!"
