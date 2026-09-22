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
/**
 * Sources d'images qui ne doivent PAS être déployées : Vite copie public/
 * intégralement, et ces originaux (AVIF haute qualité) ne sont jamais servis —
 * seuls les .webp qu'on en dérive le sont. Les garder ici préserve la
 * possibilité de régénérer sans alourdir la production.
 */
const sourceDir = path.join(__dirname, '..', 'assets-source');

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
    } else if (
      e.isFile() &&
      /\.(png|jpe?g|avif)$/i.test(e.name) &&
      // Sorties de generateSocialAssets : déjà aux bonnes dimensions, et leur
      // jumeau WebP ne servirait à rien (l'og:image doit rester PNG pour
      // LinkedIn, le favicon est référencé en dur dans index.html).
      !/^(favicon|og-image)\./i.test(e.name)
    ) {
      yield { fullPath: path.join(dir, e.name), relativePath: rel, name: e.name };
    }
  }
}

/**
 * Réduit la source PNG/JPEG à ses dimensions d'affichage, en place.
 * Ces fichiers ne sont servis qu'en repli de <picture> aux navigateurs sans
 * WebP, mais ils étaient déployés en pleine résolution : 6000×4000 pour une
 * vignette de 630×420. N'écrit que si le résultat est plus petit, donc
 * l'exécution est idempotente. Les originaux restent dans l'historique git.
 */
async function shrinkSource(sharp, fullPath, maxWidth, maxHeight, quality) {
  const isJpeg = /\.jpe?g$/i.test(fullPath);
  const before = fs.statSync(fullPath).size;
  const input = fs.readFileSync(fullPath);

  const pipeline = sharp(input).resize(maxWidth || undefined, maxHeight || undefined, {
    fit: 'inside',
    withoutEnlargement: true,
  });
  const output = await (isJpeg
    ? pipeline.jpeg({ quality, mozjpeg: true }).toBuffer()
    : pipeline.png({ compressionLevel: 9 }).toBuffer());

  if (output.length >= before) return null;
  fs.writeFileSync(fullPath, output);
  return { before, after: output.length };
}

/**
 * Génère l'image de partage social et le favicon.
 * Le logo source fait 1024×1024 : le servir tel quel comme favicon imposait
 * 1,3 Mo à chaque visiteur, et comme og:image à chaque crawler social.
 */
async function generateSocialAssets(sharp) {
  const logo = path.join(publicDir, 'action-nuisibles-13-noir.png');
  if (!fs.existsSync(logo)) {
    console.warn('  Logo introuvable, og:image et favicon non générés.');
    return;
  }

  // og:image — 1200×630, le format attendu par les réseaux sociaux.
  // Le logo est carré : on le pose centré sur fond blanc plutôt que de
  // l'étirer. PNG et non WebP : le support reste inégal côté LinkedIn.
  const ogPath = path.join(publicDir, 'og-image.png');
  const logoForOg = await sharp(fs.readFileSync(logo))
    .resize(520, 520, { fit: 'inside', withoutEnlargement: true })
    .toBuffer();
  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: '#ffffff' },
  })
    .composite([{ input: logoForOg, gravity: 'centre' }])
    .png({ compressionLevel: 9 })
    .toFile(ogPath);
  console.log(`  og-image.png (1200×630) ${(fs.statSync(ogPath).size / 1024).toFixed(0)} Ko`);

  // Favicon — 180×180 couvre aussi bien l'onglet que l'icône iOS.
  const faviconPath = path.join(publicDir, 'favicon.png');
  await sharp(fs.readFileSync(logo))
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(faviconPath);
  console.log(`  favicon.png (180×180) ${(fs.statSync(faviconPath).size / 1024).toFixed(0)} Ko`);
}

async function main() {
  const sharp = (await import('sharp')).default;

  let count = 0;
  let saved = 0;

  // Les sources non déployées produisent leur .webp dans public/, puis on
  // reprend le parcours normal de public/.
  if (fs.existsSync(sourceDir)) {
    for (const { fullPath, name } of walkDir(sourceDir)) {
      const { maxWidth, maxHeight, quality } = getRule(name, name);
      const outPath = path.join(publicDir, name.replace(/\.(png|jpe?g|avif)$/i, '.webp'));
      try {
        await sharp(fs.readFileSync(fullPath))
          .resize(maxWidth || undefined, maxHeight || undefined, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality })
          .toFile(outPath);
        console.log(`  assets-source/${name} → public/${path.basename(outPath)}`);
        count++;
      } catch (err) {
        console.error(`  Erreur ${name}:`, err.message);
      }
    }
  }
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

      // Le repli PNG/JPEG suit les mêmes dimensions que le WebP : sans cela il
      // partait en production en pleine résolution.
      if (/\.(png|jpe?g)$/i.test(fullPath)) {
        const shrunk = await shrinkSource(sharp, fullPath, maxWidth, maxHeight, quality);
        if (shrunk) {
          saved += shrunk.before - shrunk.after;
          console.log(
            `      source ${(shrunk.before / 1048576).toFixed(2)} Mo → ${(shrunk.after / 1024).toFixed(0)} Ko`
          );
        }
      }
    } catch (err) {
      console.error(`  Erreur ${relativePath}:`, err.message);
    }
  }

  await generateSocialAssets(sharp);

  console.log(`\n${count} image(s) WebP générée(s).`);
  if (saved) console.log(`${(saved / 1048576).toFixed(1)} Mo retirés des sources déployées.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
