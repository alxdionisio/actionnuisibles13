import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

/**
 * Normalise un chemin interne vers sa forme canonique avec slash final
 * (ex. `/services` → `/services/`, `/thematique/x` → `/thematique/x/`).
 *
 * Pourquoi : le site est servi par GitHub Pages, qui répond en 301 sur les URL
 * de dossier sans slash final (`/x` → `/x/`). Linker directement vers la forme
 * canonique évite ce détour 301 — la navigation et le crawl Google atteignent
 * la page en 200, sans redirection ni gaspillage de budget d'exploration.
 *
 * Préserve : la home (`/`), les ancres (`/#section`), les query strings,
 * les liens externes (`https://`, `mailto:`, `tel:`) et les `to` non-string.
 *
 * @param {unknown} to
 * @returns {unknown}
 */
export function canonicalTo(to) {
  if (typeof to !== 'string' || !to || to === '/') return to;
  if (/^[a-z]+:/i.test(to)) return to; // http(s):, mailto:, tel:, etc.
  if (to.startsWith('#')) return to;

  const sepIndex = to.search(/[#?]/);
  const pathPart = sepIndex === -1 ? to : to.slice(0, sepIndex);
  const rest = sepIndex === -1 ? '' : to.slice(sepIndex);
  if (pathPart === '' || pathPart === '/') return to; // ex. `/#lieux-intervention`

  const withSlash = pathPart.endsWith('/') ? pathPart : `${pathPart}/`;
  return `${withSlash}${rest}`;
}

const Link = React.forwardRef(function Link({ to, ...props }, ref) {
  return <RouterLink ref={ref} to={canonicalTo(to)} {...props} />;
});

export default Link;
export { Link };
