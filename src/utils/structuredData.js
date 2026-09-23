const FRENCH_MONTHS = {
  janv: '01',
  jan: '01',
  'févr': '02',
  fevr: '02',
  fev: '02',
  mars: '03',
  avr: '04',
  mai: '05',
  juin: '06',
  juil: '07',
  'août': '08',
  aout: '08',
  sept: '09',
  oct: '10',
  nov: '11',
  'déc': '12',
  dec: '12',
};

export function absoluteUrl(siteUrl, pathname = '/') {
  const base = siteUrl.replace(/\/$/, '');
  if (!pathname || pathname === '/') return `${base}/`;
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  // Le slash final ne s'ajoute qu'au chemin : le coller après un fragment ou une
  // query produisait des URL invalides du type ".../#lieux-intervention/".
  const coupe = path.search(/[#?]/);
  const chemin = coupe === -1 ? path : path.slice(0, coupe);
  const suffixe = coupe === -1 ? '' : path.slice(coupe);
  if (!chemin || chemin === '/') return `${base}/${suffixe}`;
  return `${base}${chemin.endsWith('/') ? chemin : `${chemin}/`}${suffixe}`;
}

const ACCUEIL = { name: 'Accueil', path: '/' };

/**
 * Schéma Service d'une page ciblée : croisé nuisible × commune, ou page
 * situationnelle. Défini ici, et non dans chaque consommateur : une première
 * version vivait en double dans CroisePage.jsx et dans le script de prerender,
 * et la correction d'un seul des deux a publié une `City` sans nom.
 */
export function buildServiceSchema(page, organizationId) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    description: page.description,
    serviceType: page.nuisible,
    provider: { '@id': organizationId },
    areaServed: page.ville
      ? {
          '@type': 'City',
          name: page.ville,
          containedInPlace: { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
        }
      : { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
  };
}

/**
 * Chemins de fil d'Ariane, définis ICI et nulle part ailleurs.
 *
 * Ils l'étaient en double — dans chaque page React et dans le script de
 * prerender — et ils ont fini par diverger : les pages thématiques déclaraient
 * « Accueil > Services » au runtime et « Accueil > Thématiques (/) » en
 * statique, ce second fil pointant deux fois vers la page d'accueil. Le défaut
 * a vécu des mois dans du JSON-LD que personne ne regarde.
 *
 * Google recommande un chemin de navigation plausible plutôt qu'un décalque de
 * l'arborescence d'URL : c'est pourquoi un croisé publié à la racine
 * (/punaises-de-lit-istres/) déclare sa commune comme parent, et pourquoi une
 * thématique déclare /services, qui les liste réellement.
 */
export const trails = {
  thematique: (t) => [ACCUEIL, { name: 'Services', path: '/services' }, { name: t.name, path: `/thematique/${t.slug}` }],
  service: (s) => [ACCUEIL, { name: 'Services', path: '/services' }, { name: s.title, path: `/services/${s.slug}` }],
  article: (a) => [ACCUEIL, { name: 'Articles', path: '/articles' }, { name: a.title, path: `/articles/${a.slug}` }],
  // Pas de page de listing des communes : la section vit sur l'accueil, et
  // l'ancre le dit honnêtement plutôt que d'inventer une page intermédiaire.
  ville: (v) => [ACCUEIL, { name: "Lieux d'intervention", path: '/#lieux-intervention' }, { name: v.name, path: `/intervention/${v.slug}` }],
  croise: (c) =>
    c.ville
      ? [ACCUEIL, { name: c.ville, path: `/intervention/${c.villeSlug}` }, { name: c.nuisible, path: `/${c.slug}` }]
      // Page situationnelle : pas de commune, le parent est la thématique.
      // Libellé de feuille tronqué avant le deux-points, un fil d'Ariane
      // n'ayant pas à reprendre le titre complet de la page.
      : [ACCUEIL, { name: c.nuisible, path: `/thematique/${c.thematiqueSlug}` }, { name: c.title.split(' : ')[0], path: `/${c.slug}` }],
};

/**
 * Fil d'Ariane à deux niveaux (Accueil → page), pour les pages statiques.
 * Seo.jsx supprime le JSON-LD prérendu à l'hydratation : une page qui ne
 * réémet pas son BreadcrumbList le perd définitivement pour Googlebot, qui
 * exécute le JS. Les libellés doivent rester identiques à ceux déclarés dans
 * scripts/generate-spa-fallback-pages.js.
 */
export function pageBreadcrumb(name, path, siteUrl) {
  return buildBreadcrumbList([{ name: 'Accueil', path: '/' }, { name, path }], siteUrl);
}

export function buildBreadcrumbList(items, siteUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(siteUrl, item.path),
    })),
  };
}

export function parseFrenchDateToIso(dateLabel) {
  if (!dateLabel) return undefined;
  const trimmed = dateLabel.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;

  const match = trimmed.match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ.]+)\s+(\d{4})$/);
  if (!match) return undefined;

  const day = match[1].padStart(2, '0');
  const monthKey = match[2].toLowerCase().replace(/\./g, '');
  const month = FRENCH_MONTHS[monthKey] || FRENCH_MONTHS[monthKey.slice(0, 4)];
  if (!month) return undefined;

  return `${match[3]}-${month}-${day}`;
}

export function toPlainText(input) {
  return String(input ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
