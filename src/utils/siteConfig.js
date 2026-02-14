/**
 * Configuration du site pour SEO et données structurées.
 * SITE_URL : URL de base du site (origine + base path si déploiement sous un sous-chemin, ex. GitHub Pages).
 * Pour forcer une URL : définir VITE_SITE_URL (ex. https://www.actionnuisibles13.com).
 */
function getSiteUrl() {
  if (import.meta.env.VITE_SITE_URL) return import.meta.env.VITE_SITE_URL.replace(/\/$/, '');
  if (typeof window === 'undefined') return '';
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return window.location.origin + (base ? base : '');
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
