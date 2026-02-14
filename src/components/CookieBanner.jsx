import React from 'react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../context/CookieConsent';

export default function CookieBanner() {
  const { consent, setConsent, bannerVisible } = useCookieConsent();

  if (!bannerVisible || consent) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Choix des cookies">
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. En cliquant sur « Tout accepter », vous acceptez leur utilisation. Vous pouvez modifier vos préférences à tout moment.
          {' '}
          <Link to="/politique-confidentialite" className="cookie-banner-link">
            Politique de confidentialité
          </Link>
        </p>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-banner-btn cookie-banner-btn--refuse"
            onClick={() => setConsent('essential')}
          >
            Refuser
          </button>
          <button
            type="button"
            className="cookie-banner-btn cookie-banner-btn--accept"
            onClick={() => setConsent('full')}
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
