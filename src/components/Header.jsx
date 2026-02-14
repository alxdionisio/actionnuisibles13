import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconPhone } from './Icons';
import { logos } from '../utils/publicAssets';
import { getThematiqueBySlug } from '../data/thematiques';
import { SITE_NAME } from '../utils/siteConfig';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const thematiqueMatch = location.pathname.match(/^\/thematique\/([^/]+)$/);
  const thematique = thematiqueMatch ? getThematiqueBySlug(thematiqueMatch[1]) : null;

  return (
    <div className="header-wrapper">
      {/* Titre de la page thématique (titre complet, pas seulement le nom du nuisible) */}
      {thematique && (
        <div className="header-page-title">
          <div className="container">
            <Link to="/services" className="header-page-title-back">Services</Link>
            <span className="header-page-title-sep">/</span>
            <span className="header-page-title-text">{thematique.title} | {SITE_NAME}</span>
          </div>
        </div>
      )}
      {/* Niveau 1 : bande jaune avec numéro de téléphone (home uniquement) */}
      {isHome && (
        <div className="header-top">
          <div className="container">
            <div className="header-top-right">
              <a href="tel:+33759697355">
                <IconPhone size={18} />
                <span>+33 7 59 69 73 55</span>
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Niveau 2 : logo à gauche, menu à droite */}
      <header className="header">
        <div className="container">
          <nav className="nav-container">
            <Link to="/" className="logo">
              <img
                src={logos.header}
                alt=""
                className="header-logo-img"
              />
              <span className="header-logo-text">Action Nuisibles 13</span>
            </Link>
            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'nav-link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Accueil</Link></li>
              <li><Link to="/a-propos" className={`nav-link ${location.pathname === '/a-propos' ? 'nav-link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>À propos</Link></li>
              <li><Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'nav-link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
              <li><Link to="/articles" className={`nav-link ${location.pathname === '/articles' ? 'nav-link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Articles</Link></li>
              <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'nav-link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
              <li>
                <Link to="/contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
                  Devis gratuit
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
