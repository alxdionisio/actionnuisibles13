import React from 'react';
import { Link } from 'react-router-dom';
import { CtaArrowIcon } from './CtaArrowIcon';
import { IconStars, IconArrowRight, IconPhone } from './Icons';
import { track } from '../utils/tracking';

function Hero() {
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-main-content">
            <div className="hero-texts">
              <div className="hero-ratings">
                <IconStars count={5} size={18} className="hero-stars" />
                <span className="hero-ratings-text">4.8/5 - 52 avis</span>
              </div>
              <div className="hero-title-block">
                <h1 className="hero-title">Éradication de nuisibles dans les Bouches du Rhône</h1>
                <p className="hero-paragraph">
                  Nous proposons des solutions efficaces et respectueuses
                  de l'environnement pour protéger votre maison et votre entreprise des nuisibles
                  à Marseille, Istres et sur la Côte Bleue.
                </p>
              </div>
            </div>
            <div className="hero-buttons">
              <Link
                to="/contact"
                className="hero-btn hero-btn-main cta-yellow-arrow-btn"
                onClick={() => track('contact_click', { from: 'hero' })}
              >
                <span>Demandez un devis</span>
                <CtaArrowIcon />
              </Link>

              <a
                href="tel:+33759697355"
                className="hero-btn hero-btn-secondary"
                onClick={() => track('phone_click', { from: 'hero' })}
              >
                <IconPhone size={18} />
                <span>+33 7 59 69 73 55</span>
              </a>
            </div>
            <div className="hero-info-blocks">
              <div className="hero-info-block">
                <h3 className="hero-info-block-title">Experts certifiés</h3>
                <p className="hero-info-block-desc">Professionnels certifiés, avec une grande expérience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1591735115730-4bf3a351cfe8?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Invasion d'abeilles - Action Nuisibles 13, interventions anti-nuisibles dans les Bouches-du-Rhône, Marseille et côte bleue"
              width={630}
              height={420}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
