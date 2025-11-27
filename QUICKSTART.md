# 🚀 Démarrage ultra-rapide

## En 3 minutes chrono

### 1. Installe Ollama (IA locale gratuite)

**Windows**
- Télécharge : https://ollama.ai/download
- Double-clique sur l'installeur
- Ouvre un terminal et tape :
```bash
ollama pull llama3.1:8b
```

**macOS / Linux**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
ollama pull llama3.1:8b
```

### 2. Lance Ollama

Dans un terminal :
```bash
ollama serve
```

> Laisse ce terminal ouvert en arrière-plan

### 3. Lance Cap'taine

Dans un **nouveau** terminal :
```bash
npm run dev
```

L'app Electron s'ouvre automatiquement ! 🎉

---

## Premier test

1. **Configure ton profil**
   - Clique sur ⚙️ Réglages
   - Entre ton prénom : "Alice"
   - Entre ton âge : 10
   - Clique "Enregistrer"

2. **Choisis le mode prof**
   - Dans la sidebar, clique sur "💙 Gentil" ou "💪 Exigeant"

3. **Pose une question**
   - Retourne au Chat
   - Tape : "Peux-tu m'expliquer c'est quoi une fraction ?"
   - Cap'taine va te poser des questions au lieu de répondre directement ! 😊

4. **Teste avec un fichier**
   - Clique sur l'icône 📁
   - Drag & drop une image ou un PDF
   - Tape : "Aide-moi avec ce document"

---

## Problèmes fréquents

**"Impossible de se connecter à Ollama"**
- ✅ Vérifie qu'Ollama tourne : `ollama serve`
- ✅ Vérifie que le modèle est téléchargé : `ollama list`

**"L'app ne démarre pas"**
- ✅ Node.js installé ? Tape `node -v` (doit afficher v18+)
- ✅ Dépendances installées ? `npm install`

**"Erreur TypeScript"**
- ✅ Lance `npm run dev` à nouveau

---

## Commandes utiles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance en mode développement |
| `npm run build` | Build pour production |
| `ollama list` | Liste les modèles installés |
| `ollama pull llama3.1:8b` | Télécharge un modèle (rapide) |
| `ollama pull llama3.1:70b` | Télécharge un modèle (puissant mais lourd) |

---

## Mode hors ligne

Cap'taine fonctionne **100% hors ligne** avec Ollama !

- Pas de connexion internet requise
- Zéro donnée envoyée ailleurs
- Totalement gratuit
- Privé et sécurisé

---

**Besoin d'aide ?** Ouvre une issue sur GitHub ou contacte-nous à support@captaine.app

⛵ Bon voyage avec Cap'taine !
