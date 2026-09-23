import React from 'react';
import { Link } from './AppLink';
import { useCookieConsent } from '../context/CookieConsent';

export default function CookieBanner() {
  const { setConsent, bannerVisible } = useCookieConsent();

  // `bannerVisible` suffit : le fournisseur ne le met à true que si aucun choix
  // n'est enregistré, et setConsent le repasse à false. Le test `|| consent`
  // qui figurait ici était redondant, et empêchait de rouvrir la bannière
  // depuis le pied de page pour revenir sur un choix déjà fait.
  if (!bannerVisible) return null;

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
