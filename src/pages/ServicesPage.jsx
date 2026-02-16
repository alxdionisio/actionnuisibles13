import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import OptimizedImage from '../components/OptimizedImage';
import { CtaArrowIcon } from '../components/CtaArrowIcon';
import Contact from '../components/Contact';
import { services } from '../data/services';
import { thematiques } from '../data/thematiques';
import { track } from '../utils/tracking';

function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Services de lutte anti-nuisibles : particuliers, entreprises et urgences dans les Bouches-du-Rhône. Dératisation, désinsectisation, guêpes, frelons, chenilles processionnaires."
        canonicalPath="/services"
      />
      <main>
        {/* Hero */}
        <section className="page-hero page-hero--dark">
          <div className="container">
            <div className="page-hero-inner page-hero-inner--with-btn">
              <div className="page-hero-content">
                <h1 className="page-hero-title">
                  Services complets de lutte anti-nuisibles adaptés à vos besoins
                </h1>
                <p className="page-hero-paragraph">
                  Découvrez notre gamme de services personnalisés, conçus pour protéger votre maison et votre entreprise des nuisibles grâce à des solutions efficaces et écologiques.
                </p>
              </div>
              <Link to="/contact" className="page-hero-btn page-hero-btn--yellow cta-yellow-arrow-btn">
                <span>Nous contacter</span>
                <CtaArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* Grille services */}
        <section className="section">
          <div className="container">
            <div className="services-grid">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="service-card"
                  onClick={() => track('service_click', { service_title: service.title })}
                >
                  <div className="service-image">
                    <OptimizedImage src={service.image} alt={service.title} width={630} height={420} loading="lazy" />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="service-link">
                      En savoir plus →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt thematiques-section">
          <div className="container">
            <h2 className="section-title">Par type de nuisible</h2>
            <p className="section-subtitle">
              Dératisation, destruction de nids (guêpes, frelons), chenilles processionnaires, punaises de lit,
              cafards, fourmis : consultez nos pages thématiques pour une intervention ciblée dans les
              Bouches-du-Rhône.
            </p>
            <nav className="thematiques-grid" aria-label="Pages par type de nuisible">
              {thematiques.map((t) => (
                <Link
                  key={t.slug}
                  to={`/thematique/${t.slug}`}
                  className="thematique-card"
                  onClick={() => track('thematique_click', { thematique: t.slug })}
                >
                  <span className="thematique-card-label">{t.name}</span>
                  <span className="thematique-card-arrow" aria-hidden>→</span>
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}

export default ServicesPage;
