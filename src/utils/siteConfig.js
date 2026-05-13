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
  '@type': ['LocalBusiness', 'PestControlService'],
  '@id': ORGANIZATION_ID,
  name: SITE_NAME,
  alternateName: 'Action Nuisibles Bouches-du-Rhône',
  description: DEFAULT_DESCRIPTION,
  slogan: 'Dératisation, désinsectisation et destruction de nids dans les Bouches-du-Rhône',
  url: `${CANONICAL_BASE}/`,
  telephone: '+33759697355',
  email: 'contact@actionnuisibles13.com',
  image: DEFAULT_OG_IMAGE,
  logo: {
    '@type': 'ImageObject',
    url: DEFAULT_OG_IMAGE,
    width: 300,
    height: 100,
  },
  address: {
    '@type': 'PostalAddress',
    // TODO: renseigner streetAddress, addressLocality, postalCode pour les rich results Google
    addressRegion: 'Bouches-du-Rhône',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    // TODO: remplacer par les coordonnées précises (5 décimales) de votre adresse principale
    latitude: 43.3,
    longitude: 5.2,
  },
  areaServed: [
    { '@type': 'City', name: 'Marseille' },
    { '@type': 'City', name: 'Martigues' },
    { '@type': 'City', name: 'Aix-en-Provence' },
    { '@type': 'City', name: 'Vitrolles' },
    { '@type': 'City', name: 'Marignane' },
    { '@type': 'City', name: 'Salon-de-Provence' },
    { '@type': 'City', name: 'Fos-sur-Mer' },
    { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
  ],
  serviceType: [
    'Dératisation',
    'Désinsectisation',
    'Destruction de nid de guêpes',
    'Destruction de nid de frelons',
    'Traitement chenilles processionnaires',
    'Élimination punaises de lit',
    'Traitement cafards et blattes',
    'Traitement contre les fourmis',
  ],
  knowsAbout: [
    'Lutte anti-nuisibles',
    'Certibiocide',
    'Hygiène HACCP',
    'Frelon asiatique',
    'Punaises de lit',
    'Rongeurs',
  ],
  priceRange: '€€',
  paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
  currenciesAccepted: 'EUR',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '52',
    bestRating: '5',
    worstRating: '1',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33759697355',
    contactType: 'customer service',
    availableLanguage: 'French',
    areaServed: 'FR',
  },
  // TODO: ajouter sameAs avec les URLs de vos profils : GBP, PagesJaunes, Facebook, LinkedIn
  // sameAs: [
  //   'https://www.google.com/maps/place/...',
  //   'https://www.pagesjaunes.fr/pros/...',
  //   'https://www.facebook.com/actionnuisibles13',
  // ],
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
