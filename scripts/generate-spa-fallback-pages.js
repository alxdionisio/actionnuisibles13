/**
 * Génère un index.html pour chaque route SPA dans dist/, afin que GitHub Pages
 * renvoie 200 (et non 404) quand on accède directement à /articles/xxx, /services/xxx, etc.
 * À lancer après le build, avant le déploiement.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'dist');

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function extractSlugsFromFile(filePath, pattern) {
  const fullPath = path.join(root, filePath);
  if (!fs.existsSync(fullPath)) return [];
  const content = fs.readFileSync(fullPath, 'utf-8');
  const slugs = [];
  let m;
  const re = new RegExp(pattern, 'g');
  while ((m = re.exec(content)) !== null) slugs.push(m[1]);
  return slugs;
}

const staticPaths = ['', 'a-propos', 'services', 'articles', 'contact', 'faq', 'mentions-legales', 'politique-confidentialite'];
const articleSlugs = extractSlugsFromFile('src/data/articles.js', /slug:\s*['"]([^'"]+)['"]/);
const serviceSlugs = extractSlugsFromFile('src/data/services.js', /slug:\s*['"]([^'"]+)['"]/);
const villeSlugs = extractSlugsFromFile('src/data/villes.js', /slug:\s*['"]([^'"]+)['"]/);
const thematiqueTitles = extractSlugsFromFile('src/data/thematiques.js', /titleToSlug\s*\(\s*['"]([^'"]+)['"]\s*\)/);
const thematiqueSlugs = thematiqueTitles.map((t) => slugify(t));

const paths = [
  ...staticPaths.filter(Boolean),
  ...articleSlugs.map((s) => `articles/${s}`),
  ...serviceSlugs.map((s) => `services/${s}`),
  ...villeSlugs.map((s) => `intervention/${s}`),
  ...thematiqueSlugs.map((s) => `thematique/${s}`),
];

const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html introuvable. Lancez npm run build avant ce script.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexPath, 'utf-8');
let count = 0;

for (const p of paths) {
  const dir = path.join(distDir, p);
  const outFile = path.join(dir, 'index.html');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(outFile, indexHtml, 'utf-8');
  count++;
}

console.log(`${count} pages SPA fallback générées dans dist/ (pour éviter 404 sur GitHub Pages).`);
