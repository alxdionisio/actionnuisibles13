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

const articleSlugs = extractSlugsFromFile('src/data/articles.js', /slug:\s*['"]([^'"]+)['"]/);
const serviceSlugs = extractSlugsFromFile('src/data/services.js', /slug:\s*['"]([^'"]+)['"]/);
const villeSlugs = extractSlugsFromFile('src/data/villes.js', /slug:\s*['"]([^'"]+)['"]/);
const thematiqueTitles = extractSlugsFromFile('src/data/thematiques.js', /titleToSlug\s*\(\s*['"]([^'"]+)['"]\s*\)/);
const thematiqueSlugs = thematiqueTitles.map((t) => slugify(t));

const urls = [
  ...staticPaths.map((p) => ({ loc: `${BASE_URL}${p}`, priority: p === '' ? '1.0' : '0.9', changefreq: 'weekly' })),
  ...articleSlugs.map((slug) => ({ loc: `${BASE_URL}/articles/${slug}`, priority: '0.8', changefreq: 'monthly' })),
  ...serviceSlugs.map((slug) => ({ loc: `${BASE_URL}/services/${slug}`, priority: '0.9', changefreq: 'monthly' })),
  ...villeSlugs.map((slug) => ({ loc: `${BASE_URL}/intervention/${slug}`, priority: '0.7', changefreq: 'monthly' })),
  ...thematiqueSlugs.map((slug) => ({ loc: `${BASE_URL}/thematique/${slug}`, priority: '0.8', changefreq: 'monthly' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
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
