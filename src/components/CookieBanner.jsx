import React from 'react';
import { Link } from './AppLink';
import { useCookieConsent } from '../context/CookieConsent';

export default function CookieBanner() {
  const { consent, setConsent, bannerVisible, setBannerVisible } = useCookieConsent();

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
          {/* Croix affichée uniquement si un choix est déjà enregistré : elle
              referme la bannière rouverte depuis le pied de page sans toucher
              au consentement. Au premier passage elle n'apparaît pas, pour ne
              pas offrir une sortie sans décision, refuser devant rester aussi
              simple qu'accepter. */}
          {consent && (
            <button
              type="button"
              className="cookie-banner-close"
              onClick={() => setBannerVisible(false)}
              aria-label="Fermer sans modifier mes préférences"
            >
              <span aria-hidden="true">×</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
