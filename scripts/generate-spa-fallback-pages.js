/**
 * Génère un index.html UNIQUE pour chaque route SPA dans dist/, avec :
 *   - title, meta description, canonical et og:* spécifiques à la route
 *   - JSON-LD schema embarqué dans le HTML statique (Article, Place, Service, FAQPage, Organization, BreadcrumbList)
 * Cela résout le problème majeur de SPA invisible aux crawlers IA (GPTBot, ClaudeBot, PerplexityBot)
 * qui n'exécutent pas JavaScript.
 *
 * À lancer après le build, avant le déploiement (intégré dans `npm run build`).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'dist');

const CANONICAL_BASE = 'https://www.actionnuisibles13.com';
const SITE_NAME = 'Action Nuisibles 13';
const DEFAULT_DESCRIPTION =
  "Dératisation, désinsectisation et lutte anti-nuisibles dans les Bouches-du-Rhône. Solutions efficaces et écologiques pour particuliers et professionnels.";
const ORG_LOGO = `${CANONICAL_BASE}/action-nuisibles-13-noir.png`;
const ORGANIZATION_ID = `${CANONICAL_BASE}/#organization`;
const WEBSITE_ID = `${CANONICAL_BASE}/#website`;

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

function readFile(relPath) {
  const full = path.join(root, relPath);
  return fs.existsSync(full) ? fs.readFileSync(full, 'utf-8') : '';
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function jsonLdInline(obj) {
  // Échappe </script> dans la valeur JSON pour éviter de casser le HTML.
  // Marqueur data-seo-jsonld="1" : Seo.jsx supprime ces scripts à l'hydratation
  // pour éviter les doublons d'entités (sinon Google fusionne par @id et lève
  // "L'avis contient plusieurs notes cumulées" sur l'AggregateRating).
  const json = JSON.stringify(obj).replace(/<\/script/gi, '<\\/script');
  return `<script type="application/ld+json" data-seo-jsonld="1">${json}</script>`;
}

function absoluteUrl(pathname) {
  if (!pathname || pathname === '/') return `${CANONICAL_BASE}/`;
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${CANONICAL_BASE}${normalized.endsWith('/') ? normalized : `${normalized}/`}`;
}

// ============================================================
// Parsing des sources de données
// ============================================================

function parseArticles() {
  const src = readFile('src/data/articles.js');
  const articles = [];
  // Capture chaque bloc { id: N, ... }, puis extrait les champs individuellement (plus robuste face aux apostrophes).
  const blockRe = /\{\s*id:\s*\d+,[\s\S]*?\n  \},/g;
  let block;
  while ((block = blockRe.exec(src)) !== null) {
    const text = block[0];
    const slug = text.match(/slug:\s*(['"`])([\s\S]*?)\1/);
    const title = text.match(/title:\s*(['"`])([\s\S]*?)\1/);
    const date = text.match(/date:\s*(['"`])([\s\S]*?)\1/);
    const category = text.match(/category:\s*(['"`])([\s\S]*?)\1/);
    const introHeading = text.match(/introHeading:\s*(['"`])([\s\S]*?)\1,/);
    const intro = text.match(/introParagraph:\s*(['"`])([\s\S]*?)\1,/);
    const conclusion = text.match(/conclusionParagraph:\s*(['"`])([\s\S]*?)\1,/);
    if (!slug || !title) continue;

    // Extraction des numberedItems
    const items = [];
    const numberedSection = text.match(/numberedItems:\s*\[([\s\S]*?)\],\s*(?:bulletSection|conclusionTitle|conclusionParagraph|contactButtonText|\})/);
    if (numberedSection) {
      const itemRe = /\{\s*title:\s*(['"`])([\s\S]*?)\1,\s*text:\s*(['"`])([\s\S]*?)\3,?\s*\}/g;
      let it;
      while ((it = itemRe.exec(numberedSection[1])) !== null) {
        items.push({
          title: it[2].replace(/\\'/g, "'").trim(),
          text: it[4].replace(/\\n/g, ' ').replace(/\\'/g, "'").replace(/\s+/g, ' ').trim(),
        });
      }
    }

    articles.push({
      slug: slug[2],
      title: title[2],
      date: date ? date[2] : '',
      category: category ? category[2] : '',
      introHeading: introHeading ? introHeading[2].replace(/\\'/g, "'").trim() : '',
      introParagraph: intro ? intro[2].replace(/\\n/g, ' ').replace(/\\'/g, "'").replace(/\s+/g, ' ').trim() : '',
      conclusionParagraph: conclusion ? conclusion[2].replace(/\\n/g, ' ').replace(/\\'/g, "'").replace(/\s+/g, ' ').trim() : '',
      numberedItems: items,
    });
  }
  return articles;
}

function parseVilles() {
  const src = readFile('src/data/villes.js');
  const villes = [];
  const re = /\{\s*name:\s*['"]([^'"]+)['"],\s*slug:\s*['"]([^'"]+)['"],(?:\s*lat:\s*([\d.]+),\s*lng:\s*([\d.]+),)?(?:\s*context:\s*['"`]([\s\S]*?)['"`],)?\s*\}/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    villes.push({
      name: m[1],
      slug: m[2],
      lat: m[3] ? Number(m[3]) : null,
      lng: m[4] ? Number(m[4]) : null,
      context: m[5] || '',
    });
  }
  return villes;
}

function parseServices() {
  const src = readFile('src/data/services.js');
  const services = [];
  const re = /slug:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"],\s*description:\s*\n?\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    services.push({ slug: m[1], title: m[2], description: m[3] });
  }
  return services;
}

function parseThematiques() {
  const src = readFile('src/data/thematiques.js');
  const themes = [];
  const re = /slug:\s*titleToSlug\s*\(\s*['"]([^'"]+)['"]\s*\),\s*name:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"],\s*description:\s*\n?\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    themes.push({
      slug: slugify(m[1]),
      name: m[2],
      title: m[3],
      description: m[4],
    });
  }
  return themes;
}

function parseFaqItems() {
  const src = readFile('src/data/faq.js');
  const items = [];
  const re = /question:\s*(['"`])([\s\S]*?)\1,\s*answer:\s*\n?\s*(['"`])([\s\S]*?)\3,\s*\}/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    items.push({
      question: m[2].replace(/\\'/g, "'").trim(),
      answer: m[4].replace(/\\'/g, "'").replace(/\s+/g, ' ').trim(),
    });
  }
  return items;
}

// ============================================================
// Schemas Schema.org
// ============================================================

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'PestControlService'],
  '@id': ORGANIZATION_ID,
  name: SITE_NAME,
  alternateName: 'Action Nuisibles Bouches-du-Rhône',
  description: DEFAULT_DESCRIPTION,
  url: `${CANONICAL_BASE}/`,
  telephone: '+33759697355',
  email: 'contact@actionnuisibles13.com',
  image: ORG_LOGO,
  logo: { '@type': 'ImageObject', url: ORG_LOGO, width: 300, height: 100 },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Bouches-du-Rhône',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 43.3, longitude: 5.2 },
  areaServed: [
    { '@type': 'City', name: 'Marseille' },
    { '@type': 'City', name: 'Martigues' },
    { '@type': 'City', name: 'Vitrolles' },
    { '@type': 'City', name: 'Aix-en-Provence' },
    { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
  ],
  serviceType: [
    'Dératisation', 'Désinsectisation', 'Destruction nid de guêpes',
    'Destruction nid de frelons', 'Traitement chenilles processionnaires',
    'Élimination punaises de lit', 'Traitement cafards', 'Traitement fourmis',
  ],
  priceRange: '€€',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
  ],
  // aggregateRating retiré : Google n'accepte plus les notes self-serving sur
  // LocalBusiness depuis 2019. Voir src/utils/siteConfig.js pour le détail.
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${CANONICAL_BASE}/`,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  inLanguage: 'fr-FR',
  publisher: { '@id': ORGANIZATION_ID },
};

function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

function articleSchema({ title, slug, date, category, introParagraph }) {
  const iso = parseFrenchDateToIso(date) || date;
  const url = absoluteUrl(`/articles/${slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: introParagraph.slice(0, 160),
    datePublished: iso,
    dateModified: iso,
    image: { '@type': 'ImageObject', url: ORG_LOGO, width: 800, height: 420 },
    author: { '@type': 'Organization', '@id': ORGANIZATION_ID, name: SITE_NAME, url: CANONICAL_BASE },
    publisher: {
      '@type': 'Organization', '@id': ORGANIZATION_ID, name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: ORG_LOGO },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: category,
    inLanguage: 'fr-FR',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-content-intro-heading', '.article-content-intro-p'],
    },
  };
}

function placeSchema(ville) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: ville.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: ville.name,
      addressRegion: 'Bouches-du-Rhône',
      addressCountry: 'FR',
    },
  };
  if (ville.lat && ville.lng) {
    schema.geo = { '@type': 'GeoCoordinates', latitude: ville.lat, longitude: ville.lng };
  }
  return schema;
}

function villeServiceSchema(ville) {
  const url = absoluteUrl(`/intervention/${ville.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Dératisation et désinsectisation à ${ville.name}`,
    description: `Action Nuisibles 13 intervient à ${ville.name} et alentours : dératisation, désinsectisation, nids de guêpes et frelons, chenilles processionnaires.`,
    url,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: {
      '@type': 'City',
      name: ville.name,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
    },
  };
}

function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { '@id': ORGANIZATION_ID },
    areaServed: { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
  };
}

function thematiqueServiceSchema(theme) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: theme.title,
    description: theme.description,
    serviceType: theme.name,
    url: absoluteUrl(`/thematique/${theme.slug}`),
    provider: { '@id': ORGANIZATION_ID },
    areaServed: { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
  };
}

function faqPageSchema(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  };
}

// ============================================================
// Construction du HTML
// ============================================================

function renderHead({ title, description, canonical, ogImage, schemas, type = 'website' }) {
  const ogImageUrl = ogImage || ORG_LOGO;
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const schemaTags = schemas.map(jsonLdInline).join('\n    ');
  return `<title>${escapeHtml(fullTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
    <meta property="og:type" content="${type}" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(fullTitle)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${ogImageUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${ogImageUrl}" />
    ${schemaTags}`;
}

function renderArticleBody(a) {
  const items = a.numberedItems
    .map((it) => `<li><strong>${escapeHtml(it.title)}</strong> — ${escapeHtml(it.text)}</li>`)
    .join('\n        ');
  return `<article>
      <h1>${escapeHtml(a.title)}</h1>
      <p><em>Publié le ${escapeHtml(a.date)} — Catégorie : ${escapeHtml(a.category)}</em></p>
      <h2>${escapeHtml(a.introHeading)}</h2>
      <p>${escapeHtml(a.introParagraph)}</p>
      <ol>
        ${items}
      </ol>
      ${a.conclusionParagraph ? `<p>${escapeHtml(a.conclusionParagraph)}</p>` : ''}
    </article>`;
}

function renderVilleBody(v) {
  return `<article>
      <h1>Dératisation et désinsectisation à ${escapeHtml(v.name)}</h1>
      <p>Action Nuisibles 13 intervient à ${escapeHtml(v.name)} et dans les Bouches-du-Rhône : dératisation, désinsectisation, destruction de nids de guêpes et frelons, traitement des chenilles processionnaires, élimination des punaises de lit.</p>
      ${v.context ? `<p>${escapeHtml(v.context)}</p>` : ''}
      <p>Téléphone : +33 7 59 69 73 55 — Email : contact@actionnuisibles13.com — Devis gratuit.</p>
    </article>`;
}

function renderFaqBody(items) {
  const qa = items
    .map((it) => `<section><h2>${escapeHtml(it.question)}</h2><p>${escapeHtml(it.answer)}</p></section>`)
    .join('\n      ');
  return `<article>
      <h1>Foire aux questions — Lutte anti-nuisibles dans les Bouches-du-Rhône</h1>
      ${qa}
    </article>`;
}

function renderThematiqueBody(t) {
  return `<article>
      <h1>${escapeHtml(t.title)}</h1>
      <p>${escapeHtml(t.description)}</p>
      <p>Action Nuisibles 13 intervient dans les Bouches-du-Rhône pour ${escapeHtml(t.name.toLowerCase())}. Téléphone : +33 7 59 69 73 55.</p>
    </article>`;
}

function renderServiceBody(s) {
  return `<article>
      <h1>${escapeHtml(s.title)}</h1>
      <p>${escapeHtml(s.description)}</p>
      <p>Service proposé par Action Nuisibles 13 dans les Bouches-du-Rhône. Contact : +33 7 59 69 73 55 — contact@actionnuisibles13.com.</p>
    </article>`;
}

function injectBody(html, bodyContent) {
  // Injecte le contenu dans le <body>, AVANT <div id="root"></div>.
  // Le contenu est dans un <div> avec aria-hidden et display:none pour ne pas perturber l'hydratation React,
  // mais reste lisible par les crawlers IA qui n'exécutent pas JS.
  if (!bodyContent) return html;
  const marker = '<div id="root">';
  const idx = html.indexOf(marker);
  if (idx === -1) return html;
  const before = html.slice(0, idx);
  const after = html.slice(idx);
  return `${before}<div id="prerender-content" aria-hidden="true" style="display:none">${bodyContent}</div>\n    ${after}`;
}

function injectHead(indexHtml, headContent) {
  // Remplace tout ce qui est entre le <title> existant et </head>
  // ou injecte avant </head> si pas de title trouvé.
  const titleStart = indexHtml.indexOf('<title>');
  const headEnd = indexHtml.indexOf('</head>');
  if (titleStart === -1 || headEnd === -1) {
    return indexHtml.replace('</head>', `    ${headContent}\n  </head>`);
  }
  // Cherche la fin du <title>...</title> et tous les meta description / canonical qui suivent
  const headStart = indexHtml.indexOf('<head>') + '<head>'.length;
  const beforeHead = indexHtml.slice(0, headStart);
  const afterHead = indexHtml.slice(headEnd);
  // Conserve les preconnect, preload, fonts, viewport, charset, icon, scripts module Vite du <head> d'origine
  const originalHead = indexHtml.slice(headStart, headEnd);
  const preservedTags = originalHead
    .split('\n')
    .filter((line) => {
      const l = line.trim();
      return (
        l.startsWith('<meta charset') ||
        l.startsWith('<link rel="preconnect"') ||
        l.startsWith('<link rel="preload"') ||
        l.startsWith('<link href="https://fonts.googleapis.com') ||
        l.startsWith('<noscript>') ||
        l.startsWith('<link rel="icon"') ||
        l.startsWith('<meta name="viewport"') ||
        // Bundle Vite : obligatoire sinon écran blanc (React ne se charge jamais)
        l.startsWith('<script')
      );
    })
    .join('\n    ');

  return `${beforeHead}
    ${preservedTags}
    ${headContent}
  ${afterHead}`;
}

// ============================================================
// Génération des pages
// ============================================================

const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html introuvable. Lancez vite build avant ce script.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexPath, 'utf-8');

const articles = parseArticles();
const villes = parseVilles();
const services = parseServices();
const thematiques = parseThematiques();
const faqItems = parseFaqItems();

console.log(`Données chargées : ${articles.length} articles, ${villes.length} villes, ${services.length} services, ${thematiques.length} thématiques, ${faqItems.length} FAQ.`);

const pages = [];

// Pages statiques
pages.push({
  pathname: '',
  title: 'Action Nuisibles 13 - Dératisation & désinsectisation Bouches-du-Rhône',
  description: DEFAULT_DESCRIPTION,
  schemas: [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA],
});
pages.push({
  pathname: 'a-propos',
  title: 'À propos',
  description: "Action Nuisibles 13 : entreprise de lutte anti-nuisibles dans les Bouches-du-Rhône. Techniciens certifiés, intervention rapide, devis gratuit.",
  schemas: [ORGANIZATION_SCHEMA, breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'À propos', path: '/a-propos' }])],
});
pages.push({
  pathname: 'services',
  title: 'Nos services anti-nuisibles',
  description: "Lutte anti-nuisibles pour particuliers, professionnels et urgences dans les Bouches-du-Rhône. Dératisation, désinsectisation, destruction de nids.",
  schemas: [ORGANIZATION_SCHEMA, breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Services', path: '/services' }])],
});
pages.push({
  pathname: 'articles',
  title: 'Articles et conseils anti-nuisibles',
  description: "Articles ludiques et pédagogiques sur les nuisibles : apprendre à les reconnaître, comprendre leurs comportements et adopter les bons réflexes.",
  schemas: [ORGANIZATION_SCHEMA, breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Articles', path: '/articles' }])],
});
pages.push({
  pathname: 'contact',
  title: 'Contact et devis gratuit',
  description: "Demandez un devis gratuit pour une dératisation, désinsectisation ou destruction de nid dans les Bouches-du-Rhône. Réponse rapide, intervention sous 2h en urgence.",
  schemas: [ORGANIZATION_SCHEMA, breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Contact', path: '/contact' }])],
});
pages.push({
  pathname: 'faq',
  title: 'FAQ — Foire aux questions anti-nuisibles',
  description: "Réponses aux questions fréquentes sur la dératisation, la désinsectisation, les délais d'intervention, la sécurité des traitements et les garanties.",
  schemas: [ORGANIZATION_SCHEMA, faqPageSchema(faqItems), breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'FAQ', path: '/faq' }])],
});
pages.push({
  pathname: 'mentions-legales',
  title: 'Mentions légales',
  description: "Mentions légales du site Action Nuisibles 13 : éditeur, hébergeur, propriété intellectuelle.",
  schemas: [ORGANIZATION_SCHEMA, breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Mentions légales', path: '/mentions-legales' }])],
});
pages.push({
  pathname: 'politique-confidentialite',
  title: 'Politique de confidentialité',
  description: "Politique de confidentialité et gestion des données personnelles du site Action Nuisibles 13.",
  schemas: [ORGANIZATION_SCHEMA, breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Politique de confidentialité', path: '/politique-confidentialite' }])],
});

// Articles
for (const a of articles) {
  pages.push({
    pathname: `articles/${a.slug}`,
    title: a.title,
    description: a.introParagraph.slice(0, 160),
    type: 'article',
    body: renderArticleBody(a),
    schemas: [
      ORGANIZATION_SCHEMA,
      articleSchema(a),
      breadcrumbSchema([
        { name: 'Accueil', path: '/' },
        { name: 'Articles', path: '/articles' },
        { name: a.title, path: `/articles/${a.slug}` },
      ]),
    ],
  });
}

// Villes
for (const v of villes) {
  pages.push({
    pathname: `intervention/${v.slug}`,
    title: `Dératisation et désinsectisation à ${v.name}`,
    description: `Action Nuisibles 13 intervient à ${v.name} et alentours : dératisation, désinsectisation, nids de guêpes et frelons, chenilles processionnaires. Lutte anti-nuisibles pour particuliers et professionnels. Devis gratuit, intervention rapide.`,
    body: renderVilleBody(v),
    schemas: [
      ORGANIZATION_SCHEMA,
      placeSchema(v),
      villeServiceSchema(v),
      breadcrumbSchema([
        { name: 'Accueil', path: '/' },
        { name: "Lieux d'intervention", path: '/#lieux-intervention' },
        { name: v.name, path: `/intervention/${v.slug}` },
      ]),
    ],
  });
}

// Services
for (const s of services) {
  pages.push({
    pathname: `services/${s.slug}`,
    title: s.title,
    description: s.description,
    body: renderServiceBody(s),
    schemas: [
      ORGANIZATION_SCHEMA,
      serviceSchema(s),
      breadcrumbSchema([
        { name: 'Accueil', path: '/' },
        { name: 'Services', path: '/services' },
        { name: s.title, path: `/services/${s.slug}` },
      ]),
    ],
  });
}

// Thématiques
for (const t of thematiques) {
  pages.push({
    pathname: `thematique/${t.slug}`,
    title: t.title,
    description: t.description,
    body: renderThematiqueBody(t),
    schemas: [
      ORGANIZATION_SCHEMA,
      thematiqueServiceSchema(t),
      breadcrumbSchema([
        { name: 'Accueil', path: '/' },
        { name: 'Thématiques', path: '/' },
        { name: t.name, path: `/thematique/${t.slug}` },
      ]),
    ],
  });
}

// Ajoute le body FAQ
const faqPage = pages.find((p) => p.pathname === 'faq');
if (faqPage) faqPage.body = renderFaqBody(faqItems);

let written = 0;
for (const p of pages) {
  const canonical = absoluteUrl(p.pathname);
  const headContent = renderHead({
    title: p.title,
    description: p.description,
    canonical,
    schemas: p.schemas,
    type: p.type || 'website',
  });
  let html = injectHead(indexHtml, headContent);
  if (p.body) html = injectBody(html, p.body);
  const targetDir = p.pathname === '' ? distDir : path.join(distDir, p.pathname);
  const outFile = path.join(targetDir, 'index.html');
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(outFile, html, 'utf-8');
  written++;
}

console.log(`Prerender : ${written} pages générées dans dist/ avec meta tags + JSON-LD uniques.`);
