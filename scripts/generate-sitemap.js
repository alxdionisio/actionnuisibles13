/**
 * Génère public/sitemap.xml à partir des routes et des données du site.
 * Une seule version canonique dans le sitemap : https://www.actionnuisibles13.com (jamais http ni apex).
 * À lancer avant le build : npm run generate-sitemap && npm run build
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const CANONICAL_BASE = 'https://www.actionnuisibles13.com';

function normalizeSitemapBase(url) {
  let base = (url || CANONICAL_BASE).replace(/\/$/, '');
  if (base.startsWith('http://')) base = 'https' + base.slice(4);
  if (base.includes('actionnuisibles13.com') && !base.includes('www.')) base = CANONICAL_BASE;
  return base;
}

const BASE_URL = normalizeSitemapBase(process.env.VITE_SITE_URL);
const TODAY = new Date().toISOString().slice(0, 10);

const FRENCH_MONTHS = {
  janv: '01', jan: '01', fevr: '02', fev: '02', 'févr': '02', mars: '03',
  avr: '04', mai: '05', juin: '06', juil: '07', aout: '08', 'août': '08',
  sept: '09', oct: '10', nov: '11', dec: '12', 'déc': '12',
};

function parseFrenchDateToIso(dateLabel) {
  if (!dateLabel) return undefined;
  const trimmed = String(dateLabel).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;
  const match = trimmed.match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ.]+)\s+(\d{4})$/);
  if (!match) return undefined;
  const day = match[1].padStart(2, '0');
  const monthKey = match[2].toLowerCase().replace(/\./g, '');
  const month = FRENCH_MONTHS[monthKey] || FRENCH_MONTHS[monthKey.slice(0, 4)];
  if (!month) return undefined;
  return `${match[3]}-${month}-${day}`;
}

function toCanonicalLoc(pathname) {
  if (!pathname || pathname === '/') return `${BASE_URL}/`;
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${BASE_URL}${normalized.endsWith('/') ? normalized : `${normalized}/`}`;
}

function extractArticleDates(filePath) {
  const fullPath = path.join(root, filePath);
  if (!fs.existsSync(fullPath)) return new Map();
  const content = fs.readFileSync(fullPath, 'utf-8');
  const dates = new Map();
  const re = /slug:\s*['"]([^'"]+)['"][\s\S]{0,300}?date:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const iso = parseFrenchDateToIso(m[2]);
    if (iso) dates.set(m[1], iso);
  }
  return dates;
}

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

const staticPaths = [
  '',
  '/a-propos',
  '/services',
  '/articles',
  '/contact',
  '/faq',
  '/mentions-legales',
  '/politique-confidentialite',
];

// Le sitemap ne liste QUE ce qui est réellement déployé, donc la même source que
// scripts/generate-spa-fallback-pages.js : src/data/*.js.
//
// Il lisait auparavant .data/cms.db en priorité. Or le site public est servi par
// GitHub Pages, qui n'expose aucune route /api : le fetch de DataContext y échoue
// et retombe systématiquement sur les fichiers source. Un contenu créé depuis le
// back-office entrait donc au sitemap sans page prérendue ni données au runtime,
// c'est-à-dire une URL annoncée aux moteurs qui répond 404.
const articleSlugs = extractSlugsFromFile('src/data/articles.js', /slug:\s*['"]([^'"]+)['"]/);
const articleDates = extractArticleDates('src/data/articles.js');
const serviceSlugs = extractSlugsFromFile('src/data/services.js', /slug:\s*['"]([^'"]+)['"]/);
const villeSlugs = extractSlugsFromFile('src/data/villes.js', /slug:\s*['"]([^'"]+)['"]/);
const thematiqueTitles = extractSlugsFromFile('src/data/thematiques.js', /titleToSlug\s*\(\s*['"]([^'"]+)['"]\s*\)/);
const thematiqueSlugs = thematiqueTitles.map((t) => slugify(t));

const urls = [
  ...staticPaths.map((p) => ({ loc: toCanonicalLoc(p), priority: p === '' ? '1.0' : '0.9', changefreq: 'weekly', lastmod: TODAY })),
  ...articleSlugs.map((slug) => ({
    loc: toCanonicalLoc(`/articles/${slug}`),
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: articleDates.get(slug) || TODAY,
  })),
  ...serviceSlugs.map((slug) => ({ loc: toCanonicalLoc(`/services/${slug}`), priority: '0.9', changefreq: 'monthly', lastmod: TODAY })),
  ...villeSlugs.map((slug) => ({ loc: toCanonicalLoc(`/intervention/${slug}`), priority: '0.7', changefreq: 'monthly', lastmod: TODAY })),
  ...thematiqueSlugs.map((slug) => ({ loc: toCanonicalLoc(`/thematique/${slug}`), priority: '0.8', changefreq: 'monthly', lastmod: TODAY })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outPath = path.join(root, 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf-8');
console.log(`Sitemap généré : ${outPath} (${urls.length} URLs)`);
