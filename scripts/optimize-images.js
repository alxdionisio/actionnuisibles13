/**
 * Génère des versions WebP redimensionnées des images de public/
 * pour améliorer le PageSpeed (taille et format moderne).
 * Prend en charge : PNG, JPEG, AVIF (les AVIF sont convertis en .webp).
 *
 * Usage : npm run optimize-images
 * Dépendance : sharp (devDependency)
 *
 * Les .webp sont créés à côté des originaux. Le site utilise <picture>
 * pour servir le WebP aux navigateurs compatibles (voir composant OptimizedImage).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

/** Règles : maxWidth, maxHeight, optionnel quality (défaut 82). */
const RULES = [
  // Logos (affichés 140×140, 2x pour écrans densité 2)
  { pattern: /action-nuisibles-13-(noir|blanc)\.png$/i, maxWidth: 280, maxHeight: 280 },
  // Grandes images de cartes / hero (affichées 630×420 → 1x)
  { pattern: /nuisibles-solution-pro\.png$/i, maxWidth: 630, maxHeight: 420 },
  { pattern: /nid-abeilles\.png$/i, maxWidth: 630, maxHeight: 420 },
  { pattern: /invasion-cafards\.png$/i, maxWidth: 630, maxHeight: 420 },
  { pattern: /invasion-insectes-interieur\.png$/i, maxWidth: 630, maxHeight: 420 },
  { pattern: /fourmis\.png$/i, maxWidth: 630, maxHeight: 420 },
  { pattern: /chenilles-processionnaires\.jpg$/i, maxWidth: 630, maxHeight: 420 },
  { pattern: /invasion-rat\.(avif|webp)$/i, maxWidth: 630, maxHeight: 420 },
  { pattern: /punaises-de-lit\.(avif|webp)$/i, maxWidth: 630, maxHeight: 420 },
  { pattern: /nettoyage-maison\.(avif|webp)$/i, maxWidth: 630, maxHeight: 420 },
  // Bande nuisibles (158×158, qualité plus basse pour réduire la taille)
  { pattern: /nuisibles[/\\][^/\\]+\.png$/i, maxWidth: 158, maxHeight: 158, quality: 75 },
  // Par défaut : largeur max 1200
  { pattern: /.*/, maxWidth: 1200, maxHeight: null },
];

function getRule(filename, relativePath) {
  const pathForMatch = relativePath.replace(/\\/g, '/');
  for (const rule of RULES) {
    if (rule.pattern.test(pathForMatch) || rule.pattern.test(filename)) {
      return {
        maxWidth: rule.maxWidth,
        maxHeight: rule.maxHeight,
        quality: rule.quality ?? 82,
      };
    }
  }
  return { maxWidth: 1200, maxHeight: null, quality: 82 };
}

function* walkDir(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) {
      yield* walkDir(path.join(dir, e.name), rel);
    } else if (e.isFile() && /\.(png|jpe?g|avif)$/i.test(e.name)) {
      yield { fullPath: path.join(dir, e.name), relativePath: rel, name: e.name };
    }
  }
}

async function main() {
  const sharp = (await import('sharp')).default;

  let count = 0;
  for (const { fullPath, relativePath, name } of walkDir(publicDir)) {
    const { maxWidth, maxHeight, quality } = getRule(name, relativePath);
    const outPath = fullPath.replace(/\.(png|jpe?g|avif)$/i, '.webp');
    if (outPath === fullPath) continue;

    try {
      const meta = await sharp(fullPath).metadata();
      const w = meta.width || 0;
      const h = meta.height || 0;
      if (!w || !h) {
        console.warn(`  Skip (no size): ${relativePath}`);
        continue;
      }

      await sharp(fullPath)
        .resize(maxWidth || undefined, maxHeight || undefined, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality })
        .toFile(outPath);

      const afterMeta = await sharp(outPath).metadata();
      const targetWidth = afterMeta.width || w;
      const targetHeight = afterMeta.height || h;

      const before = fs.statSync(fullPath).size;
      const after = fs.statSync(outPath).size;
      const pct = before ? Math.round((1 - after / before) * 100) : 0;
      console.log(`  ${relativePath} → ${path.basename(outPath)} (${targetWidth}×${targetHeight}) -${pct}%`);
      count++;
    } catch (err) {
      console.error(`  Erreur ${relativePath}:`, err.message);
    }
  }

  console.log(`\n${count} image(s) WebP générée(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
