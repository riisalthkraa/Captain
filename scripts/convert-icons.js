const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const svgPath = path.join(buildDir, 'icon.svg');
const pngPath = path.join(buildDir, 'icon.png');
const icoPath = path.join(buildDir, 'icon.ico');

async function generateIcons() {
  console.log('🎨 Génération des icônes depuis SVG...');

  try {
    // 1. Générer PNG 512x512 pour Linux
    console.log('📦 Génération icon.png (512x512)...');
    await sharp(svgPath)
      .resize(512, 512)
      .png()
      .toFile(pngPath);
    console.log('✅ icon.png créé');

    // 2. Générer ICO pour Windows (multiples tailles)
    console.log('📦 Génération icon.ico (Windows)...');
    const png256 = await sharp(svgPath).resize(256, 256).png().toBuffer();
    const png128 = await sharp(svgPath).resize(128, 128).png().toBuffer();
    const png64 = await sharp(svgPath).resize(64, 64).png().toBuffer();
    const png32 = await sharp(svgPath).resize(32, 32).png().toBuffer();
    const png16 = await sharp(svgPath).resize(16, 16).png().toBuffer();
    const icoBuffer = await toIco([png16, png32, png64, png128, png256]);
    fs.writeFileSync(icoPath, icoBuffer);
    console.log('✅ icon.ico créé');

    // 3. Pour macOS .icns, on doit générer plusieurs tailles PNG d'abord
    console.log('📦 Génération des PNG pour macOS .icns...');
    const sizes = [16, 32, 64, 128, 256, 512, 1024];
    const icnsDir = path.join(buildDir, 'icons.iconset');

    if (!fs.existsSync(icnsDir)) {
      fs.mkdirSync(icnsDir, { recursive: true });
    }

    for (const size of sizes) {
      const fileName = size === 1024 ? 'icon_512x512@2x.png' : `icon_${size}x${size}.png`;
      await sharp(svgPath)
        .resize(size, size)
        .png()
        .toFile(path.join(icnsDir, fileName));
      console.log(`  ✓ ${fileName}`);
    }

    console.log('✅ PNG pour .icns générés dans build/icons.iconset/');
    console.log('');
    console.log('⚠️  Pour générer icon.icns (macOS), lancez sur macOS:');
    console.log('   iconutil -c icns build/icons.iconset -o build/icon.icns');
    console.log('');
    console.log('💡 Alternative: Le build macOS sur GitHub Actions générera automatiquement l\'icône');
    console.log('');
    console.log('✅ Icônes prêtes:');
    console.log('   - build/icon.png (Linux)');
    console.log('   - build/icon.ico (Windows)');
    console.log('   - build/icons.iconset/ (source pour macOS)');

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }
}

generateIcons();
