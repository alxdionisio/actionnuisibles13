/**
 * Configuration du site pour SEO et données structurées.
 * Une seule URL canonique : https://www.actionnuisibles13.com (sans slash final).
 * Sitemap et balises canonical n'utilisent que cette forme (jamais http ni apex).
 */
const CANONICAL_BASE = 'https://www.actionnuisibles13.com';

function getSiteUrl() {
  if (import.meta.env.VITE_SITE_URL) {
    let url = import.meta.env.VITE_SITE_URL.replace(/\/$/, '');
    if (url.startsWith('http://')) url = 'https' + url.slice(4);
    // Garantit la version canonique www pour ce domaine, même si l'env est mal renseignée.
    if (url.includes('actionnuisibles13.com') && !url.includes('www.')) return CANONICAL_BASE;
    return url;
  }
  if (typeof window === 'undefined') return CANONICAL_BASE;
  const host = window.location.hostname;
  if (host === 'actionnuisibles13.com' || host === 'www.actionnuisibles13.com') return CANONICAL_BASE;
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const origin = window.location.origin.startsWith('http://') ? 'https' + window.location.origin.slice(4) : window.location.origin;
  return origin + (base ? base : '');
}
export const SITE_URL = getSiteUrl();
export const SITE_NAME = 'Action Nuisibles 13';
export const DEFAULT_DESCRIPTION = 'Dératisation, désinsectisation et lutte anti-nuisibles dans les Bouches-du-Rhône. Solutions efficaces et écologiques pour particuliers et professionnels.';
export const DEFAULT_TITLE = 'Action Nuisibles 13 - Dératisation & désinsectisation Bouches-du-Rhône';
export const DEFAULT_OG_IMAGE = `${CANONICAL_BASE}/action-nuisibles-13-noir.png`;
export const ORGANIZATION_ID = `${CANONICAL_BASE}/#organization`;
export const WEBSITE_ID = `${CANONICAL_BASE}/#website`;

export const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': ORGANIZATION_ID,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: `${CANONICAL_BASE}/`,
  telephone: '+33 7 59 69 73 55',
  email: 'contact@actionnuisibles13.com',
  image: DEFAULT_OG_IMAGE,
  logo: DEFAULT_OG_IMAGE,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Bouches-du-Rhône',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.3,
    longitude: 5.2,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bouches-du-Rhône',
  },
};

export const WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${CANONICAL_BASE}/`,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  inLanguage: 'fr-FR',
  publisher: { '@id': ORGANIZATION_ID },
};
