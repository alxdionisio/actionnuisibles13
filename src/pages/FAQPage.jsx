import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { linkifyThematiques } from '../components/LinkifyThematiques';
import { faqItems } from '../data/faq';
import { CtaArrowIcon } from '../components/CtaArrowIcon';

function FAQPage() {
  const [openIndices, setOpenIndices] = useState(new Set());

  const toggleFAQ = (index) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const isOpen = (index) => openIndices.has(index);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const title = 'FAQ Dératisation et Désinsectisation';
  const description =
    "Toutes vos questions sur la dératisation, la désinsectisation, les nuisibles (guêpes, frelons, punaises de lit, chenilles processionnaires), les tarifs, garanties et interventions dans les Bouches-du-Rhône. Réponses d'experts Action Nuisibles 13.";

  return (
    <>
      <Seo
        title={title}
        description={description}
        canonicalPath="/faq"
        structuredData={faqSchema}
      />
      <main>
        <section className="page-hero page-hero--dark">
          <div className="container">
            <div className="page-hero-inner page-hero-inner--with-btn">
              <div className="page-hero-content">
                <h1 className="page-hero-title">
                  FAQ Dératisation & Désinsectisation
                </h1>
                <p className="page-hero-paragraph">
                  {linkifyThematiques('Retrouvez les réponses aux questions les plus fréquentes sur la lutte anti-nuisibles, la dératisation, la désinsectisation, les guêpes, frelons et chenilles processionnaires dans les Bouches-du-Rhône.')}
                </p>
              </div>
              <Link to="/contact" className="page-hero-btn page-hero-btn--yellow cta-yellow-arrow-btn">
                <span>Demander un devis</span>
                <CtaArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section className="section faq-page-section">
          <div className="container faq-page-container">
            <nav className="faq-page-nav" aria-label="Liens utiles">
              <p className="faq-page-nav-title">Sur le site :</p>
              <ul className="faq-page-nav-list">
                <li><Link to="/services">Nos services (particuliers, professionnels, urgences)</Link></li>
                <li><Link to="/a-propos">À propos d'Action Nuisibles 13</Link></li>
                <li><Link to="/#lieux-intervention">Lieux d'intervention (villes desservies)</Link></li>
                <li><Link to="/articles">Articles et conseils</Link></li>
                <li><Link to="/contact">Contact et devis gratuit</Link></li>
              </ul>
            </nav>

            <div className="faq-page-list">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${isOpen(index) ? 'active' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen(index)}
                    aria-controls={`faq-page-answer-${index}`}
                    id={`faq-page-question-${index}`}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen(index) ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={`faq-page-answer-${index}`}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={`faq-page-question-${index}`}
                  >
                    <p>{linkifyThematiques(item.answer)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="faq-page-cta">
              <p className="faq-page-cta-text">
                {linkifyThematiques("Vous n'avez pas trouvé la réponse à votre question ? Contactez-nous pour un diagnostic ou un devis gratuit en dératisation, désinsectisation ou destruction de nids.")}
              </p>
              <Link to="/contact" className="faq-page-cta-btn cta-yellow-arrow-btn">
                <span>Nous contacter</span>
                <CtaArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default FAQPage;
