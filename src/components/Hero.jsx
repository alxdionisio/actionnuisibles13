import React from 'react';
import { Link } from './AppLink';
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
              <a
                className="hero-ratings hero-ratings--link"
                href="https://share.google/KoJ2aX73JmkZ0x0en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir nos avis Google (note moyenne 5 sur 5)"
                onClick={() => track('reviews_click', { from: 'hero', destination: 'google_business_profile' })}
              >
                <span className="hero-ratings-google" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 48 48" focusable="false">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                  </svg>
                </span>
                <IconStars count={5} size={18} className="hero-stars" />
                <span className="hero-ratings-text">
                  <strong>5/5</strong> note moyenne des avis Google
                </span>
              </a>
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
