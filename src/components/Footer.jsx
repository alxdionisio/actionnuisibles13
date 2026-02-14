import React from 'react';
import { Link } from 'react-router-dom';
import { CtaArrowIcon } from './CtaArrowIcon';
import { track } from '../utils/tracking';
import { logos } from '../utils/publicAssets';
import { thematiques } from '../data/thematiques';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-dark-container">
        <div className="container">
          {/* CTA */}
          <div className="footer-cta-block">
            <h2 className="footer-cta-heading">
              Faites-nous confiance pour <br /> éliminer vos problèmes de nuisibles
            </h2>
            <Link
            to="/contact"
            className="footer-cta-btn cta-yellow-arrow-btn"
            onClick={() => track('contact_click', { from: 'footer_cta' })}
          >
              <span>Nous contacter</span>
              <CtaArrowIcon />
            </Link>
          </div>

          <div className="footer-links-block">
            <div className="footer-main-grid">
              <div className="footer-brand-block">
                <Link to="/" className="footer-logo-row">
                  <img
                    src={logos.footer}
                    alt=""
                    className="footer-logo-img"
                  />
                  <span className="footer-logo-text">Action Nuisibles 13</span>
                </Link>
                <p className="footer-brand-desc">
                  Solutions efficaces et écologiques pour protéger votre famille,
                  votre maison et votre entreprise des nuisibles indésirables dans
                  les Bouches-du-Rhône.
                </p>
              </div>

              <div className="footer-column">
                <p className="footer-column-title">Pages</p>
                <nav className="footer-nav" aria-label="Pages">
                  <Link to="/">Accueil</Link>
                  <Link to="/a-propos">À propos</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/articles">Blog</Link>
                  <Link to="/faq">FAQ</Link>
                  <Link to="/contact">Contact</Link>
                </nav>
              </div>

              <div className="footer-column">
                <p className="footer-column-title">Par type de nuisible</p>
                <nav className="footer-nav" aria-label="Pages par thématique">
                  {thematiques.map((t) => (
                    <Link key={t.slug} to={`/thematique/${t.slug}`}>
                      {t.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="footer-column footer-column-contact">
                <p className="footer-column-title">Contact</p>
                <nav className="footer-contact" aria-label="Contact">
                  <div className="footer-contact-item">
                    <ContactIcon type="pin" />
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track('map_click', { from: 'footer' })}
                    >
                      Bouches-du-Rhône
                    </a>
                  </div>
                  <div className="footer-contact-item">
                    <ContactIcon type="mail" />
                    <a
                      href="mailto:contact@actionnuisibles13.com"
                      onClick={() => track('email_click', { from: 'footer' })}
                    >
                      contact@actionnuisibles13.com
                    </a>
                  </div>
                  <div className="footer-contact-item">
                    <ContactIcon type="phone" />
                    <a
                      href="tel:+33759697355"
                      onClick={() => track('phone_click', { from: 'footer' })}
                    >
                      +33 7 59 69 73 55
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="footer-about">
            <p className="footer-copyright">© 2026 Action Nuisibles 13</p>
            <nav className="footer-about-legal" aria-label="Mentions légales et confidentialité">
              <Link to="/mentions-legales">Mentions légales</Link>
              <Link to="/politique-confidentialite">Politique de confidentialité</Link>
            </nav>
            <p className="footer-credits">
              Créé par{' '}
              <a href="https://www.bymodule.com/" target="_blank" rel="noopener noreferrer">
                Module
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactIcon({ type }) {
  const className = 'footer-contact-icon';
  const props = { width: 16, height: 16, fill: 'currentColor', 'aria-hidden': true };
  switch (type) {
    case 'pin':
      return (
        <svg className={className} viewBox="0 0 16 16" {...props}>
          <path d="M8 0a5.33 5.33 0 015.33 5.33c0 4-5.33 10.67-5.33 10.67S2.67 9.33 2.67 5.33A5.33 5.33 0 018 0zm0 7.11a1.78 1.78 0 110-3.56 1.78 1.78 0 010 3.56z" />
        </svg>
      );
    case 'mail':
      return (
        <svg className={className} viewBox="0 0 16 16" {...props}>
          <path d="M14 2H2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm0 3.33l-6 3.75L2 5.33V4l6 3.75L14 4v1.33z" />
        </svg>
      );
    case 'phone':
      return (
        <svg className={className} viewBox="0 0 14 14" {...props}>
          <path d="M12.85 9.65l-2.5-1.08a.82.82 0 00-.95.15l-1.2 1.2a10.1 10.1 0 01-4.54-4.54l1.2-1.2a.82.82 0 00.15-.95L4.35 1.15A.82.82 0 003.2.8L1.15 1.05a.82.82 0 00-.7.8 10.5 10.5 0 0010.5 10.5.82.82 0 00.8-.7l.25-2.05a.82.82 0 00-.35-.95z" />
        </svg>
      );
    case 'clock':
      return (
        <svg className={className} viewBox="0 0 14 14" {...props}>
          <path d="M7 0a7 7 0 110 14A7 7 0 017 0zm0 12.25A5.25 5.25 0 107 1.75a5.25 5.25 0 000 10.5zm.88-5.25V7a.88.88 0 01-1.76 0V4.38a.88.88 0 011.76 0v2.62z" />
        </svg>
      );
    default:
      return null;
  }
}

export default Footer;
