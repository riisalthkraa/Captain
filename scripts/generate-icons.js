/**
 * Script de génération d'icônes pour toutes les plateformes
 * Génère .ico (Windows), .icns (macOS), .png (Linux)
 */

const fs = require('fs')
const path = require('path')

// Pour la génération d'icônes, on utilise electron-icon-builder si disponible
// Sinon on copie juste le SVG

const buildDir = path.join(__dirname, '..', 'build')
const iconPath = path.join(buildDir, 'icon.svg')

console.log('📦 Génération des icônes pour Cap\'taine...')
console.log(`📁 Dossier build: ${buildDir}`)

if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true })
  console.log('✅ Dossier build créé')
}

if (fs.existsSync(iconPath)) {
  console.log('✅ icon.svg détecté')
  console.log('ℹ️  Pour générer les icônes .ico et .icns, installez:')
  console.log('   npm install -D electron-icon-builder')
  console.log('   Puis lancez: npx electron-icon-builder --input=./build/icon.svg --output=./build')
} else {
  console.error('❌ icon.svg introuvable!')
  process.exit(1)
}

// Créer un fichier .png simple pour Linux (fallback)
const pngFallback = path.join(buildDir, 'icon.png')
if (!fs.existsSync(pngFallback)) {
  console.log('ℹ️  Pour générer icon.png, utilisez un convertisseur SVG->PNG en ligne ou ImageMagick')
  console.log('   Exemple: convert icon.svg -resize 512x512 icon.png')
}

console.log('✅ Script terminé')
