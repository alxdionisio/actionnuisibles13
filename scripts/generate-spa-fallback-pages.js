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
// Source unique de l'identité : le même objet que celui servi par le runtime React.
// siteConfig.js n'est PAS importable ici (il utilise import.meta.env, undefined sous Node).
import {
  CANONICAL_BASE,
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  LOGO_IMAGE,
  ORGANIZATION_ID,
  ORGANIZATION as ORGANIZATION_SCHEMA,
  WEBSITE as WEBSITE_SCHEMA,
  ENTREPRISE,
  ADRESSE_LIGNE,
} from '../src/data/entreprise.js';
import { villes as villesData } from '../src/data/villes.js';
import { croises } from '../src/data/croises.js';
import { thematiques as thematiquesData } from '../src/data/thematiques.js';
import {
  absoluteUrl as urlAbsolue,
  buildBreadcrumbList,
  trails,
  parseFrenchDateToIso,
} from '../src/utils/structuredData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'dist');

const ORG_LOGO = DEFAULT_OG_IMAGE;

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
  return urlAbsolue(CANONICAL_BASE, pathname);
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

// villes.js est un module ESM pur : Node l'importe directement. L'ancienne regex
// exigeait une accolade fermante juste après `context` et devenait imprévisible
// dès qu'une ville portait un champ supplémentaire (sections).
function parseVilles() {
  return villesData;
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

// thematiques.js est un module ESM pur : Node l'importe directement. La regex
// précédente n'extrayait que slug, name, title et description — le champ
// `content` restait invisible, si bien que le corps prérendu des pages
// thématiques ne portait que ~50 mots au lieu des ~170 disponibles.
function parseThematiques() {
  return thematiquesData;
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

// ORGANIZATION_SCHEMA et WEBSITE_SCHEMA sont importés depuis src/data/entreprise.js :
// le HTML statique et le JSON-LD réinjecté par Seo.jsx décrivent ainsi le même @id
// avec exactement le même objet. Toute divergence future signifierait qu'une copie
// a été recréée quelque part.

function breadcrumbSchema(items) {
  return buildBreadcrumbList(items, CANONICAL_BASE);
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
    image: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE, width: 1200, height: 630 },
    author: { '@type': 'Organization', '@id': ORGANIZATION_ID, name: SITE_NAME, url: CANONICAL_BASE },
    publisher: {
      '@type': 'Organization', '@id': ORGANIZATION_ID, name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: LOGO_IMAGE.url, width: LOGO_IMAGE.width, height: LOGO_IMAGE.height },
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
      ${(() => {
        const liens = croises.filter((c) => c.villeSlug === v.slug);
        return liens.length
          ? `<p>Sujets traités en détail sur ${escapeHtml(v.name)} : ${liens
              .map((c) => `<a href="/${escapeHtml(c.slug)}/">${escapeHtml(c.nuisible.toLowerCase())}</a>`)
              .join(', ')}.</p>`
          : '';
      })()}
      ${(v.sections || [])
        .map((s) => `<section><h2>${escapeHtml(s.title)}</h2><p>${escapeHtml(s.body)}</p></section>`)
        .join('\n      ')}
      <p>${escapeHtml(SITE_NAME)} — ${escapeHtml(ADRESSE_LIGNE)}. Téléphone : ${escapeHtml(ENTREPRISE.telephoneAffiche)} — Email : ${escapeHtml(ENTREPRISE.email)} — Devis gratuit.</p>
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
  // Le corps n'exposait que le titre et la description : ~50 mots servis à un
  // crawler sans JS, alors que thematiques.js en porte environ 170. Ces pages
  // ressortent « explorées, actuellement non indexées » dans Search Console ;
  // leur donner au moins le contenu qui existe déjà est le minimum.
  const c = t.content || {};
  const blocs = [
    [`Lutte contre les ${t.name.toLowerCase()} dans les Bouches-du-Rhône`, c.intro],
    ['Pourquoi faire appel à un professionnel', c.pourquoi],
    ['Comment se déroule le traitement', c.comment],
    ["Quel réflexe adopter en cas d'invasion", c.reflexe],
  ]
    .filter(([, texte]) => typeof texte === 'string' && texte.trim())
    .map(([titre, texte]) => `<section><h2>${escapeHtml(titre)}</h2><p>${escapeHtml(texte)}</p></section>`)
    .join('\n      ');

  const sections = (t.sections || [])
    .map((s) => `<section><h2>${escapeHtml(s.title)}</h2><p>${escapeHtml(s.body)}</p></section>`)
    .join('\n      ');

  return `<article>
      <h1>${escapeHtml(t.title)}</h1>
      <p>${escapeHtml(t.description)}</p>
      ${blocs}
      ${sections}
      <p>${escapeHtml(SITE_NAME)} intervient dans les Bouches-du-Rhône pour ${escapeHtml(t.name.toLowerCase())}. ${escapeHtml(ADRESSE_LIGNE)} — Téléphone : ${escapeHtml(ENTREPRISE.telephoneAffiche)}.</p>
    </article>`;
}

function renderServiceBody(s) {
  return `<article>
      <h1>${escapeHtml(s.title)}</h1>
      <p>${escapeHtml(s.description)}</p>
      <p>Service proposé par ${escapeHtml(SITE_NAME)} dans les Bouches-du-Rhône. ${escapeHtml(ADRESSE_LIGNE)} — Contact : ${escapeHtml(ENTREPRISE.telephoneAffiche)} — ${escapeHtml(ENTREPRISE.email)}.</p>
    </article>`;
}

/**
 * Corps statique des mentions légales. C'est la page qu'un moteur consulte pour
 * rattacher le site à une entreprise réelle : sans JS elle était entièrement vide.
 * Même discipline qu'ailleurs — un champ non renseigné ne produit aucune ligne.
 */
function renderMentionsLegalesBody() {
  const e = ENTREPRISE;
  const lignes = [
    ["Nom de l'éditeur", e.raisonSociale || SITE_NAME],
    ['Nom commercial', e.raisonSociale && e.raisonSociale !== SITE_NAME ? SITE_NAME : ''],
    ['Forme juridique', [e.formeJuridique, e.capitalSocial && `au capital de ${e.capitalSocial}`].filter(Boolean).join(' ')],
    ['Siège social', `${ADRESSE_LIGNE}, France`],
    ['SIRET', e.siret],
    ['RCS', e.rcsVille ? `RCS ${e.rcsVille}` : ''],
    ['TVA', e.tvaIntracom || (e.tvaFranchiseEnBase ? 'TVA non applicable, article 293 B du CGI' : '')],
    ['Directeur de la publication', e.directeurPublication],
    ['Agrément Certibiocide', e.certibiocide],
    ['Téléphone', e.telephoneAffiche],
    ['Email', e.email],
  ]
    .filter(([, valeur]) => valeur)
    .map(([label, valeur]) => `<p><strong>${escapeHtml(label)} :</strong> ${escapeHtml(valeur)}</p>`)
    .join('\n      ');

  return `<article>
      <h1>Mentions légales</h1>
      <h2>Éditeur du site</h2>
      ${lignes}
      <h2>Hébergement</h2>
      <p>GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis). Nom de domaine géré par OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.</p>
    </article>`;
}

function renderCroiseBody(c) {
  const sections = (c.sections || [])
    .map((s) => `<section><h2>${escapeHtml(s.title)}</h2><p>${escapeHtml(s.body)}</p></section>`)
    .join('\n      ');
  return `<article>
      <h1>${escapeHtml(c.title)}</h1>
      <p>${escapeHtml(c.description)}</p>
      ${sections}
      <p>Voir aussi <a href="/thematique/${escapeHtml(c.thematiqueSlug)}/">${escapeHtml(c.nuisible)}</a>
      et <a href="/intervention/${escapeHtml(c.villeSlug)}/">dératisation et désinsectisation à ${escapeHtml(c.ville)}</a>.</p>
      <p>${escapeHtml(SITE_NAME)} — ${escapeHtml(ADRESSE_LIGNE)}. Téléphone : ${escapeHtml(ENTREPRISE.telephoneAffiche)}.</p>
    </article>`;
}

function injectBody(html, bodyContent) {
  // Injecte le contenu dans le <body>, AVANT <div id="root"></div>.
  // Le contenu est dans un <noscript> : présent dans les octets servis aux crawlers IA
  // qui n'exécutent pas JS, réellement affiché aux visiteurs sans JS, et neutre pour
  // l'hydratation React. L'ancienne forme (div aria-hidden + display:none) portait la
  // signature d'un texte caché aux moteurs, sur du contenu pourtant légitime.
  if (!bodyContent) return html;
  const marker = '<div id="root">';
  const idx = html.indexOf(marker);
  if (idx === -1) return html;
  const before = html.slice(0, idx);
  const after = html.slice(idx);
  return `${before}<noscript>${bodyContent}</noscript>\n    ${after}`;
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
  // Doit rester identique au title passé par src/pages/HomePage.jsx : renderHead
  // ajoute « | SITE_NAME », ce qui dédoublait la marque quand on reprenait
  // DEFAULT_TITLE (qui la contient déjà) ici.
  title: 'Dératiseur & désinsectisation Bouches-du-Rhône (13)',
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
  description: "Mentions légales d'Action Nuisibles 13 : éditeur, siège social à Istres, identifiants d'entreprise, hébergeur.",
  schemas: [ORGANIZATION_SCHEMA, breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Mentions légales', path: '/mentions-legales' }])],
  body: renderMentionsLegalesBody(),
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
      breadcrumbSchema(trails.article(a)),
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
      breadcrumbSchema(trails.ville(v)),
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
      breadcrumbSchema(trails.service(s)),
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
      breadcrumbSchema(trails.thematique(t)),
    ],
  });
}

// Croisés nuisible × ville
for (const c of croises) {
  pages.push({
    pathname: c.slug,
    title: c.title,
    description: c.description,
    body: renderCroiseBody(c),
    schemas: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: c.title,
        description: c.description,
        serviceType: c.nuisible,
        provider: { '@id': ORGANIZATION_ID },
        areaServed: {
          '@type': 'City',
          name: c.ville,
          containedInPlace: { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
        },
      },
      breadcrumbSchema(trails.croise(c)),
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
