/**
 * Configuration du site pour SEO et données structurées.
 * Une seule URL canonique : https://www.actionnuisibles13.com (sans slash final).
 * Sitemap et balises canonical n'utilisent que cette forme (jamais http ni apex).
 */
const CANONICAL_BASE = 'https://www.actionnuisibles13.com';

function getSiteUrl() {
  if (import.meta.env.VITE_SITE_URL) {
    const url = import.meta.env.VITE_SITE_URL.replace(/\/$/, '');
    return url.startsWith('http://') ? 'https' + url.slice(4) : url;
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

export const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: '+33 7 59 69 73 55',
  email: 'contact@actionnuisibles13.com',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Bouches-du-Rhône',
    addressCountry: 'FR',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 43.3, longitude: 5.2 },
    geoRadius: '50000',
  },
};
