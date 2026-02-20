import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import { CtaArrowIcon } from './CtaArrowIcon';
import { IconArrowRight } from './Icons';
import { services } from '../data/services';
import { track } from '../utils/tracking';

function Services() {

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="services-header-grid">
          <div className="services-header-left">
            <p className="section-label">Solutions</p>
            <h2 className="section-title">Des solutions sur mesure pour chaque nuisible</h2>
          </div>
          <div className="services-header-right">
            <p className="services-header-description">
              Notre équipe d'experts propose des services personnalisés pour éliminer durablement
              les nuisibles de votre habitat ou local professionnel.
            </p>
            <Link to="/services" className="services-cta-link cta-yellow-arrow-btn">
              <span>Tous nos services</span>
              <CtaArrowIcon />
            </Link>
          </div>
        </div>

        <div className="services-slider-wrap" role="region" aria-label="Services, faites défiler pour voir plus">
          <div className="services-grid">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="service-card"
                onClick={() => track('service_click', { service_title: service.title, from: 'home' })}
              >
                <div className="service-image">
                  <OptimizedImage src={service.image} alt={service.title} width={630} height={420} loading="lazy" />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-link">
                    En savoir plus
                    <span className="service-link-arrow"><IconArrowRight size={16} /></span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="services-slider-fade" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default Services;
