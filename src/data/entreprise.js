/**
 * Identité légale et NAP (Name-Address-Phone) de l'entreprise.
 *
 * SOURCE UNIQUE : consommé à la fois par le runtime React (src/utils/siteConfig.js)
 * et par le script Node de prerender (scripts/generate-spa-fallback-pages.js).
 * Ne JAMAIS y mettre d'import React ni d'import.meta.env : Node doit pouvoir
 * importer ce module tel quel.
 *
 * CONVENTION : une chaîne vide '' (ou null) signifie « non renseigné ».
 * Le champ est alors omis du JSON-LD et masqué dans les pages — jamais affiché
 * comme un placeholder. Remplir au fur et à mesure, rien d'autre à modifier.
 */
export const CANONICAL_BASE = 'https://www.actionnuisibles13.com';
export const SITE_NAME = 'Action Nuisibles 13';
export const DEFAULT_DESCRIPTION = 'Dératisation, désinsectisation et lutte anti-nuisibles dans les Bouches-du-Rhône. Solutions efficaces et écologiques pour particuliers et professionnels.';
export const DEFAULT_TITLE = 'Action Nuisibles 13 - Dératisation & désinsectisation Bouches-du-Rhône';
/** Image de partage social : 1200×630, générée par npm run optimize-images. */
export const DEFAULT_OG_IMAGE = `${CANONICAL_BASE}/og-image.png`;
/** Logo carré pour le schema. Les dimensions déclarées doivent être les vraies. */
export const LOGO_IMAGE = { url: `${CANONICAL_BASE}/action-nuisibles-13-noir.png`, width: 280, height: 280 };
export const ORGANIZATION_ID = `${CANONICAL_BASE}/#organization`;
export const WEBSITE_ID = `${CANONICAL_BASE}/#website`;

export const ENTREPRISE = {
  nomCommercial: SITE_NAME,
  adresse: {
    rue: "19 Rue de l'Arbousier",
    codePostal: '13800',
    ville: 'Istres',
    region: 'Bouches-du-Rhône',
    pays: 'FR',
  },
  telephone: '+33759697355',
  telephoneAffiche: '+33 7 59 69 73 55',
  email: 'contact@actionnuisibles13.com',

  // Coordonnées du marqueur de la fiche Google (paramètres !3d / !4d de l'URL
  // Maps), et non le centre de la vue (@...). Elles doivent coïncider avec le pin
  // de la fiche : un écart est lu comme une incohérence par les moteurs.
  geo: { lat: 43.5032508, lng: 4.9748227 },

  // Fiche Google Business Profile. Alimente sameAs, hasMap et le lien du footer.
  // C'est ce lien qui permet à Google de réconcilier ce site avec la fiche, et
  // aux moteurs de réponse de recouper le nom de l'entreprise.
  //
  // Forme par CID (identifiant interne de la fiche) plutôt que l'URL
  // /maps/place/Nom/@lat,lng/... : le CID ne bouge pas si le nom, l'adresse ou
  // les coordonnées changent, et il ne transporte aucun paramètre de suivi.
  googleBusinessUrl: 'https://maps.google.com/?cid=2622645813082033829',

  // ————————————————————————————————————————————————————————————————
  // À RENSEIGNER — obligations LCEN art. 19 / C. com. art. R123-237.
  // Laisser '' tant que la valeur n'est pas connue.
  // ————————————————————————————————————————————————————————————————
  // Entrepreneur individuel : la dénomination légale est le nom et le prénom de
  // l'exploitant, « Action Nuisibles 13 » n'étant que le nom commercial.
  raisonSociale: 'Salim CHERIET',
  formeJuridique: 'Entrepreneur individuel (EI)',
  siret: '92972383100020',  // vérifié au répertoire Sirene : actif, Istres, APE 81.29A
  rcsVille: '',             // greffe d'immatriculation, si l'activité relève du RCS
  capitalSocial: '',        // sans objet pour une entreprise individuelle

  // Numéro de TVA intracommunautaire. Alimente `vatID` dans le JSON-LD : n'y
  // mettre QUE un vrai numéro. Sous franchise en base, laisser vide et passer
  // tvaFranchiseEnBase à true — publier "TVA non applicable" dans vatID
  // reviendrait à déclarer un identifiant fiscal qui n'existe pas.
  tvaIntracom: '',
  tvaFranchiseEnBase: true, // mention art. 293 B du CGI

  directeurPublication: 'Salim CHERIET',

  // Assurance responsabilité civile professionnelle (obligatoire pour l'activité).
  assuranceRcPro: { assureur: '', police: '', couverture: '' },

  // Agrément Certibiocide : la qualification qu'un moteur doit pouvoir vérifier
  // sur un applicateur de produits biocides.
  certibiocide: '',

  // Médiateur de la consommation : obligatoire pour toute activité B2C.
  mediateurConso: { nom: '', url: '' },
};

/**
 * Retire récursivement les valeurs vides ('', null, undefined, [], {}).
 * Émettre "vatID": "" dans le JSON-LD public serait pire que d'omettre le champ.
 * @param {unknown} value
 * @returns {unknown} une nouvelle valeur, sans mutation de l'entrée
 */
export function omitEmpty(value) {
  if (Array.isArray(value)) {
    const items = value.map(omitEmpty).filter((v) => v !== undefined);
    return items.length ? items : undefined;
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
      .map(([k, v]) => [k, omitEmpty(v)])
      .filter(([, v]) => v !== undefined);
    // Un objet réduit à son seul @type ne porte plus d'information.
    const meaningful = entries.filter(([k]) => k !== '@type');
    return meaningful.length ? Object.fromEntries(entries) : undefined;
  }
  if (value === '' || value === null || value === undefined) return undefined;
  return value;
}

/**
 * Champs Schema.org d'identité dérivés d'ENTREPRISE, déjà filtrés.
 * Partagé par le runtime React et le script de prerender pour qu'un seul et même
 * @id ne soit jamais décrit de deux façons différentes.
 * @returns {Record<string, unknown>}
 */
export function buildIdentitySchema() {
  const { adresse, geo, siret, tvaIntracom, certibiocide } = ENTREPRISE;

  return omitEmpty({
    legalName: ENTREPRISE.raisonSociale,
    telephone: ENTREPRISE.telephone,
    email: ENTREPRISE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: adresse.rue,
      postalCode: adresse.codePostal,
      addressLocality: adresse.ville,
      addressRegion: adresse.region,
      addressCountry: adresse.pays,
    },
    // Les deux axes vont ensemble : une latitude sans longitude produirait un
    // point géographique incomplet, plus trompeur pour un moteur qu'une absence.
    geo:
      geo.lat != null && geo.lng != null
        ? { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng }
        : '',
    identifier: siret
      ? { '@type': 'PropertyValue', propertyID: 'SIRET', value: siret }
      : '',
    vatID: tvaIntracom,
    taxID: siret,
    hasCredential: certibiocide
      ? {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Certibiocide',
          identifier: certibiocide,
        }
      : '',
    sameAs: [ENTREPRISE.googleBusinessUrl],
  }) || {};
}

/**
 * Horaires : source unique du JSON-LD ET de la ligne affichée dans le footer.
 * Google attend que le balisage reflète ce que le visiteur voit.
 */
export const HORAIRES = [
  {
    jours: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    ouvre: '08:00',
    ferme: '19:00',
    label: 'Lun – Ven : 8h – 19h',
  },
  { jours: ['Saturday'], ouvre: '09:00', ferme: '17:00', label: 'Samedi : 9h – 17h' },
];

/** Adresse sur une ligne, telle qu'affichée dans le footer, le contact et les mentions. */
export const ADRESSE_LIGNE = `${ENTREPRISE.adresse.rue}, ${ENTREPRISE.adresse.codePostal} ${ENTREPRISE.adresse.ville}`;

/**
 * Lien Maps. Tant que l'URL de la fiche Google n'est pas renseignée, on pointe
 * sur une recherche d'adresse (API documentée, sans clé) plutôt que sur
 * https://maps.google.com nu, qui ne désigne aucun lieu.
 */
export const MAPS_URL =
  ENTREPRISE.googleBusinessUrl ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ADRESSE_LIGNE}, France`)}`;

export const ORGANIZATION = omitEmpty({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'PestControlService'],
  '@id': ORGANIZATION_ID,
  name: SITE_NAME,
  alternateName: 'Action Nuisibles Bouches-du-Rhône',
  description: DEFAULT_DESCRIPTION,
  slogan: 'Dératisation, désinsectisation et destruction de nids dans les Bouches-du-Rhône',
  url: `${CANONICAL_BASE}/`,
  image: DEFAULT_OG_IMAGE,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_IMAGE.url,
    width: LOGO_IMAGE.width,
    height: LOGO_IMAGE.height,
  },
  // Identité légale et NAP. Les champs non renseignés dans ENTREPRISE sont omis.
  ...buildIdentitySchema(),
  hasMap: ENTREPRISE.googleBusinessUrl,
  // Ne déclarer ici que des communes ayant réellement une page /intervention/:slug :
  // un moteur qui vérifie une citation relève l'écart entre zone annoncée et
  // zone démontrable.
  areaServed: [
    { '@type': 'City', name: 'Istres' },
    { '@type': 'City', name: 'Fos-sur-Mer' },
    { '@type': 'City', name: 'Saint-Mitre-les-Remparts' },
    { '@type': 'City', name: 'Martigues' },
    { '@type': 'City', name: 'Marseille' },
    { '@type': 'City', name: 'Vitrolles' },
    { '@type': 'City', name: 'Marignane' },
    { '@type': 'City', name: 'Salon-de-Provence' },
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
    'Démoustication',
    'Traitement des termites',
    'Dépigeonnage',
    'Traitement des mouches',
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
  openingHoursSpecification: HORAIRES.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.jours,
    opens: h.ouvre,
    closes: h.ferme,
  })),
  // aggregateRating retiré : Google n'accepte plus les notes self-serving sur
  // LocalBusiness depuis 2019. À réintroduire seulement quand des objets Review
  // individuels (avec author + datePublished) seront visibles sur la page,
  // ou via sameAs vers Google Business Profile.
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: ENTREPRISE.telephone,
    contactType: 'customer service',
    availableLanguage: 'French',
    areaServed: 'FR',
  },
});

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
