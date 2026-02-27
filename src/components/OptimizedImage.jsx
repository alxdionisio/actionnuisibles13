import React from 'react';

/**
 * Affiche une image en utilisant le WebP si disponible (même chemin avec .webp),
 * pour réduire la taille tout en gardant le PNG/JPG en secours.
 * Passe toutes les props standard d'<img> (alt, width, height, className, loading, etc.).
 */
function OptimizedImage({ src, ...imgProps }) {
  const isLocal = typeof src === 'string' && (src.startsWith('/') || src.startsWith('./'));
  const webpSrc = isLocal && /\.(png|jpe?g)$/i.test(src)
    ? src.replace(/\.(png|jpe?g)$/i, '.webp')
    : null;

  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img src={src} decoding="async" {...imgProps} alt={imgProps.alt ?? ''} />
      </picture>
    );
  }

  return <img src={src} decoding="async" {...imgProps} alt={imgProps.alt ?? ''} />;
}

export default OptimizedImage;
