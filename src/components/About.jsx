import React from 'react';
import { Link } from 'react-router-dom';
import { CtaArrowIcon } from './CtaArrowIcon';

function About() {
  const benefits = [
    'Solutions écologiques',
    'Intervention rapide',
    'Tarifs compétitifs',
    'Protection durable',
    'Horaires flexibles',
    'Garantie satisfaction',
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-left">
            <div className="about-content-block">
              <div className="about-title-block">
                <p className="section-label">À propos</p>
                <h2 className="section-title">Éradiquez définitivement les nuisibles</h2>
              </div>
              <p className="about-paragraph">
                Nous proposons des services d'éradication efficaces et durables qui protègent
                votre maison, votre entreprise et votre famille dans tout le département des
                Bouches-du-Rhône.
              </p>
            </div>

            <div className="about-benefits-grid">
              {benefits.map((label) => (
                <div key={label} className="about-benefit">
                  <span className="about-benefit-icon" aria-hidden="true">✓</span>
                  <p className="about-benefit-text">{label}</p>
                </div>
              ))}
            </div>

            <Link to="/a-propos" className="about-cta-link cta-yellow-arrow-btn">
              <span>En savoir plus</span>
              <CtaArrowIcon />
            </Link>
          </div>

          <div className="about-image-container">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1540854114405-7f108634a897?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Technicien certifié en lutte anti-nuisibles - interventions et traitements professionnels"
                width={637}
                height={425}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
