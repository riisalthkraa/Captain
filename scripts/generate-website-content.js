/**
 * Script de génération du contenu pour le website
 * - Documentation API (TypeDoc)
 * - Rapports de tests
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🚀 Génération du contenu website pour Cap\'taine v1.8.0')
console.log('=' .repeat(60))

// 1. Générer la documentation API
console.log('\n📚 Génération de la documentation API (TypeDoc)...')
try {
  execSync('npm run docs:generate', { stdio: 'inherit' })
  console.log('✅ Documentation API générée dans website/docs/')
} catch (error) {
  console.error('❌ Erreur lors de la génération de la documentation')
  console.error(error.message)
}

// 2. Générer les rapports de tests
console.log('\n🧪 Génération des rapports de tests...')
try {
  execSync('npm run test:report', { stdio: 'inherit' })
  console.log('✅ Rapports de tests générés dans website/test-results/')
} catch (error) {
  console.error('❌ Erreur lors de la génération des rapports')
  console.error(error.message)
}

// 3. Créer un fichier index pour le dossier website
const websiteIndexContent = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cap'taine - Documentation & Tests</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: system-ui, -apple-system, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            padding: 60px;
            max-width: 800px;
            text-align: center;
        }
        h1 {
            font-size: 3em;
            margin-bottom: 20px;
            color: #1e293b;
        }
        .emoji {
            font-size: 4em;
            margin-bottom: 20px;
        }
        p {
            color: #64748b;
            font-size: 1.2em;
            margin-bottom: 40px;
        }
        .links {
            display: grid;
            gap: 20px;
            margin-top: 40px;
        }
        .link-card {
            background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            text-decoration: none;
            display: block;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .link-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(14, 165, 233, 0.4);
        }
        .link-card h3 {
            font-size: 1.5em;
            margin-bottom: 10px;
        }
        .link-card p {
            color: rgba(255,255,255,0.9);
            font-size: 1em;
            margin: 0;
        }
        .version {
            margin-top: 40px;
            color: #94a3b8;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="emoji">⛵</div>
        <h1>Cap'taine</h1>
        <p>Documentation & Rapports de Tests</p>

        <div class="links">
            <a href="docs/index.html" class="link-card">
                <h3>📚 Documentation API</h3>
                <p>Documentation complète du code source (TypeDoc)</p>
            </a>

            <a href="test-results/index.html" class="link-card">
                <h3>🧪 Rapports de Tests</h3>
                <p>Résultats des tests automatisés</p>
            </a>

            <a href="https://github.com/riisalthkraa/Captain-DEV" class="link-card">
                <h3>🔗 GitHub Repository</h3>
                <p>Code source et releases</p>
            </a>
        </div>

        <p class="version">Version 1.8.0</p>
    </div>
</body>
</html>`

const websiteIndexPath = path.join(__dirname, '..', 'website', 'docs-index.html')
fs.writeFileSync(websiteIndexPath, websiteIndexContent, 'utf-8')
console.log('\n✅ Page d\'index créée: website/docs-index.html')

console.log('\n' + '='.repeat(60))
console.log('✅ Génération terminée!')
console.log('\n📁 Contenu généré dans:')
console.log('   - website/docs/ (Documentation API)')
console.log('   - website/test-results/ (Rapports de tests)')
console.log('   - website/docs-index.html (Page d\'index)')
console.log('\n📝 Le dossier website/ est prêt à être publié séparément')
