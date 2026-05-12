import React, { useEffect } from 'react';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  ORGANIZATION,
  WEBSITE,
} from '../utils/siteConfig';

/**
 * Gère titre, meta description, canonical, Open Graph, Twitter Cards et JSON-LD.
 */
function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath,
  noindex = false,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  structuredData,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const baseUrl = SITE_URL.replace(/\/$/, '');
  const path = canonicalPath
    ? (() => {
      const withLeadingSlash = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
      if (withLeadingSlash === '/') return '/';
      return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
    })()
    : '/';
  const canonicalUrl = `${baseUrl}${path}`;
  const imageUrl = image
    ? (image.startsWith('http') ? image : `${SITE_URL.replace(/\/$/, '')}${image.startsWith('/') ? image : `/${image}`}`)
    : DEFAULT_OG_IMAGE;

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
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:image', imageUrl);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl);

    if (type === 'article' && publishedTime) {
      setMeta('property', 'article:published_time', publishedTime);
    }
    if (type === 'article' && modifiedTime) {
      setMeta('property', 'article:modified_time', modifiedTime);
    }

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    setMeta('name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow');
  }, [fullTitle, description, canonicalUrl, noindex, imageUrl, type, publishedTime, modifiedTime]);

  useEffect(() => {
    const scripts = document.querySelectorAll('script[data-seo-jsonld]');
    scripts.forEach((s) => s.remove());

    const dataToEmit = [WEBSITE, ORGANIZATION];

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
