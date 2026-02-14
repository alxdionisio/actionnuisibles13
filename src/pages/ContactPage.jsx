import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Contact from '../components/Contact';
import { villes } from '../data/villes';

function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contactez Action Nuisibles 13 pour une intervention anti-nuisibles dans les Bouches-du-Rhône. Devis gratuit."
        canonicalPath="/contact"
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
            <div className="map-wrapper">
              <iframe
                title="Carte Bouches-du-Rhône"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463126.218!2d5.2!3d43.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b9b6b6b6b6b6%3A0x0!2sBouches-du-Rh%C3%B4ne!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
