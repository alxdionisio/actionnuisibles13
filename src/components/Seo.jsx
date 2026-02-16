import React, { useEffect } from 'react';
import { SITE_URL, SITE_NAME, DEFAULT_TITLE, DEFAULT_DESCRIPTION, ORGANIZATION } from '../utils/siteConfig';

/**
 * Gère titre, meta description, canonical, Open Graph et données structurées (JSON-LD).
 */
function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath,
  noindex = false,
  image,
  type = 'website',
  structuredData,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  // URL canonique absolue (sans slash final) : recommandation Google pour l'indexation.
  const baseUrl = SITE_URL.replace(/\/$/, '');
  const path = canonicalPath ? (canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`).replace(/\/$/, '') || '/' : '';
  const canonicalUrl = baseUrl + (path === '/' ? '' : path);
  const imageUrl = image && (image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`);

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr, key, value) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        if (attr === 'name') el.setAttribute('name', key);
        else el.setAttribute('property', key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:locale', 'fr_FR');
    if (imageUrl) setMeta('property', 'og:image', imageUrl);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    if (noindex) {
      setMeta('name', 'robots', 'noindex,nofollow');
    }
  }, [fullTitle, description, canonicalUrl, noindex, imageUrl, type]);

  useEffect(() => {
    const scripts = document.querySelectorAll('script[data-seo-jsonld]');
    scripts.forEach((s) => s.remove());

    const dataToEmit = [ORGANIZATION];

    if (structuredData) {
      const list = Array.isArray(structuredData) ? structuredData : [structuredData];
      list.forEach((d) => dataToEmit.push(d));
    }

    dataToEmit.forEach((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', '1');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach((s) => s.remove());
    };
  }, [structuredData]);

  return null;
}

export default Seo;
