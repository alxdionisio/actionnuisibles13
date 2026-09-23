import React from 'react';
import { Link } from '../components/AppLink';
import Seo from '../components/Seo';
import Contact from '../components/Contact';
import { villes } from '../data/villes';
import { ADRESSE_LIGNE, MAPS_URL, SITE_NAME } from '../data/entreprise';
import { useCookieConsent } from '../context/CookieConsent';
import { track } from '../utils/tracking';
import { SITE_URL } from '../utils/siteConfig';
import { pageBreadcrumb } from '../utils/structuredData';

function ContactPage() {
  const { consent } = useCookieConsent();

  return (
    <>
      <Seo
        title="Contact"
        description="Contactez Action Nuisibles 13 pour une intervention anti-nuisibles dans les Bouches-du-Rhône. Devis gratuit."
        canonicalPath="/contact"
        structuredData={pageBreadcrumb('Contact', '/contact', SITE_URL)}
      />
      <main>
        <section className="page-hero page-hero--dark page-hero--minimal">
          <div className="container">
            <h1 className="page-hero-title">Contactez-nous</h1>
            <p className="page-hero-paragraph">
              Une question, un devis ou une urgence ? Notre équipe vous répond sous 24h.
            </p>
          </div>
        </section>
        <Contact />

        {/* Localisation */}
        <section className="section contact-map-section">
          <div className="container">
            <p className="contact-section-label contact-section-label--light">Localisation</p>
            <h2 className="contact-map-title">Où nous trouver ?</h2>
            <p className="contact-map-address">{`${ADRESSE_LIGNE}, France`}</p>
            {/* La carte Google dépose des traceurs tiers : elle n'est chargée
                qu'avec le consentement complet. Sans choix exprimé ou avec le
                strict nécessaire, on sert un lien — aucune requête vers Google. */}
            {consent === 'full' ? (
              <div className="map-wrapper">
                {/* L'ancienne URL d'embed était forgée (coordonnées 5.2/43.3,
                    4v1234567890) : elle ne désignait aucun lieu. La forme
                    ?q=…&output=embed résout l'adresse sans clé API. */}
                <iframe
                  title={`Carte : ${SITE_NAME}, ${ADRESSE_LIGNE}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${ADRESSE_LIGNE}, France`)}&output=embed&hl=fr`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <div className="map-consent-fallback">
                <p className="map-consent-text">
                  L’affichage de la carte nécessite des cookies Google. Vous pouvez ouvrir
                  l’itinéraire directement sur Google Maps.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  onClick={() => track('map_click', { from: 'contact_page' })}
                >
                  Voir sur Google Maps
                </a>
              </div>
            )}
            <div className="contact-villes-block">
              <h3 className="contact-villes-title">Villes et communes desservies</h3>
              <nav className="contact-villes-list" aria-label="Villes d'intervention">
                {villes.map((ville) => (
                  <Link
                    key={ville.slug}
                    to={`/intervention/${ville.slug}`}
                    className="contact-villes-link"
                  >
                    {ville.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default ContactPage;
