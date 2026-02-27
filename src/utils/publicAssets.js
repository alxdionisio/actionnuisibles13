/**
 * Chemins des assets statiques (fichiers dans public/).
 * BASE respecte le base path (ex. /repo-name pour GitHub Pages) pour que les images
 * se chargent correctement en production.
 */
const BASE = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL)
  ? import.meta.env.BASE_URL.replace(/\/$/, '')
  : '';

export const logos = {
  header: `${BASE}/action-nuisibles-13-noir.png`,
  footer: `${BASE}/action-nuisibles-13-blanc.png`,
};

export const images = {
  invasionInsectesInterieur: `${BASE}/invasion-insectes-interieur.png`,
  nuisiblesSolutionPro: `${BASE}/nuisibles-solution-pro.png`,
  nidAbeilles: `${BASE}/nid-abeilles.png`,
  invasionCafards: `${BASE}/invasion-cafards.png`,
  fourmis: `${BASE}/fourmis.png`,
  chenillesProcessionnaires: `${BASE}/chenilles-processionnaires.jpg`,
  invasionRat: `${BASE}/invasion-rat.webp`,
  punaisesDeLit: `${BASE}/punaises-de-lit.webp`,
  nettoyageMaison: `${BASE}/nettoyage-maison.webp`,
};

/** Images de la bande nuisibles (home, sous la hero). Dossier public/nuisibles/ */
export const nuisiblesStrip = [
  { src: `${BASE}/nuisibles/cafard.png`, label: 'Cafard' },
  { src: `${BASE}/nuisibles/chenille.png`, label: 'Chenille processionnaire' },
  { src: `${BASE}/nuisibles/fourmi.png`, label: 'Fourmi' },
  { src: `${BASE}/nuisibles/frelon.png`, label: 'Frelon' },
  { src: `${BASE}/nuisibles/guepe.png`, label: 'Guêpe' },
  { src: `${BASE}/nuisibles/punaise.png`, label: 'Punaise de lit' },
  { src: `${BASE}/nuisibles/rongeur.png`, label: 'Rongeur' },
];
