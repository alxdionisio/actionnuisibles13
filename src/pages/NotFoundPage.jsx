import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { CtaArrowIcon } from '../components/CtaArrowIcon';

function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page introuvable"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Retour à l'accueil Action Nuisibles 13."
        canonicalPath="/404"
        noindex
      />
      <main>
        <section className="page-hero page-hero--dark page-hero--minimal">
          <div className="container">
            <p className="page-hero-label">Erreur 404</p>
            <h1 className="page-hero-title">Page introuvable</h1>
            <p className="page-hero-paragraph">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <div className="not-found-actions">
              <Link to="/" className="page-hero-btn page-hero-btn--yellow cta-yellow-arrow-btn">
                <span>Retour à l'accueil</span>
                <CtaArrowIcon />
              </Link>
              <Link to="/contact" className="not-found-link">
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default NotFoundPage;
