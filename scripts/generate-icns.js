const png2icons = require('png2icons');
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const pngPath = path.join(buildDir, 'icon.png');
const icnsPath = path.join(buildDir, 'icon.icns');

console.log('🍎 Génération icon.icns pour macOS...');

try {
  const input = fs.readFileSync(pngPath);
  const output = png2icons.createICNS(input, png2icons.BILINEAR, 0);
  fs.writeFileSync(icnsPath, output);
  console.log('✅ icon.icns créé avec succès!');
  console.log('');
  console.log('📦 Toutes les icônes sont prêtes:');
  console.log('   ✅ build/icon.svg (source)');
  console.log('   ✅ build/icon.png (Linux - 512x512)');
  console.log('   ✅ build/icon.ico (Windows - multi-tailles)');
  console.log('   ✅ build/icon.icns (macOS)');
} catch (error) {
  console.error('❌ Erreur:', error.message);
  process.exit(1);
}
