import React from 'react';

/** Cercle blanc avec flèche noire, pour les CTA jaunes (spec Framer) */
export function CtaArrowIcon() {
  return (
    <span className="cta-arrow-circle" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12L10 8L6 4" />
      </svg>
    </span>
  );
}

export default CtaArrowIcon;
