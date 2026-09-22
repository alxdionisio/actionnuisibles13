/**
 * URL canonique du site, seule partie de la configuration qui dépende de Vite.
 * Une seule forme canonique : https://www.actionnuisibles13.com (sans slash final).
 * Sitemap et balises canonical n'utilisent que cette forme (jamais http ni apex).
 *
 * Tout le reste (identité, NAP, ORGANIZATION, WEBSITE) vit dans
 * src/data/entreprise.js et n'est que ré-exporté ici, pour que les modules
 * existants gardent leurs imports inchangés.
 *
 * ⚠️ Ce fichier utilise import.meta.env : Node ne peut PAS l'importer.
 *    Le script de prerender doit importer src/data/entreprise.js directement.
 */
import { CANONICAL_BASE } from '../data/entreprise.js';

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

export {
  SITE_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  WEBSITE_ID,
  ORGANIZATION,
  WEBSITE,
  ENTREPRISE,
  HORAIRES,
  ADRESSE_LIGNE,
  MAPS_URL,
} from '../data/entreprise.js';
