import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from '@formspree/react';
import Seo from '../components/Seo';
import { LinkifyThematiques } from '../components/LinkifyThematiques';
import { CtaArrowIcon } from '../components/CtaArrowIcon';
import { getServiceBySlug } from '../data/services';
import { SITE_URL } from '../utils/siteConfig';
import { track } from '../utils/tracking';

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || 'mvzbkezg';

function ServiceDetailFormWithFormspree({ formId }) {
  const [state, handleSubmit] = useForm(formId);
  return (
    <div className="service-detail-form-card">
      <h2 className="service-detail-sidebar-title">Une question ?</h2>
      {state.succeeded ? (
        <p className="service-detail-form-success">
          Merci ! Votre message a bien été envoyé. Nous vous recontacterons rapidement.
        </p>
      ) : (
        <form className="service-detail-form" onSubmit={handleSubmit}>
          <label className="service-detail-form-label">
            <span className="service-detail-form-label-text">Nom</span>
            <input type="text" name="name" className="service-detail-form-input" placeholder="Prénom Nom" required disabled={state.submitting} />
          </label>
          <label className="service-detail-form-label">
            <span className="service-detail-form-label-text">Email</span>
            <input type="email" name="email" className="service-detail-form-input" placeholder="exemple@mail.com" required disabled={state.submitting} />
          </label>
          <label className="service-detail-form-label">
            <span className="service-detail-form-label-text">Message</span>
            <textarea name="message" className="service-detail-form-textarea" placeholder="Bonjour, je sollicite votre aide pour..." required disabled={state.submitting} />
          </label>
          {state.errors && (
            <p className="service-detail-form-error" role="alert">Une erreur est survenue. Veuillez réessayer ou nous contacter par email.</p>
          )}
          <button type="submit" className="service-detail-form-submit" disabled={state.submitting}>
            {state.submitting ? 'Envoi en cours…' : 'Envoyer'}
          </button>
        </form>
      )}
    </div>
  );
}

function ServiceDetailFormFallback() {
  const [succeeded, setSucceeded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const body = `Nom : ${form.name?.value || ''}\nEmail : ${form.email?.value || ''}\n\nMessage :\n${form.message?.value || ''}`;
    window.location.href = `mailto:contact@actionnuisibles13.com?subject=Question depuis le site&body=${encodeURIComponent(body)}`;
    setSucceeded(true);
    setSubmitting(false);
  };

  return (
    <div className="service-detail-form-card">
      <h2 className="service-detail-sidebar-title">Une question ?</h2>
      {succeeded ? (
        <p className="service-detail-form-success">
          Votre client mail va s'ouvrir. Envoyez le message pour nous contacter.
        </p>
      ) : (
        <form className="service-detail-form" onSubmit={handleSubmit}>
          <label className="service-detail-form-label">
            <span className="service-detail-form-label-text">Nom</span>
            <input type="text" name="name" className="service-detail-form-input" placeholder="Prénom Nom" required disabled={submitting} />
          </label>
          <label className="service-detail-form-label">
            <span className="service-detail-form-label-text">Email</span>
            <input type="email" name="email" className="service-detail-form-input" placeholder="exemple@mail.com" required disabled={submitting} />
          </label>
          <label className="service-detail-form-label">
            <span className="service-detail-form-label-text">Message</span>
            <textarea name="message" className="service-detail-form-textarea" placeholder="Bonjour, je sollicite votre aide pour..." required disabled={submitting} />
          </label>
          <button type="submit" className="service-detail-form-submit" disabled={submitting}>
            {submitting ? 'Envoi…' : 'Envoyer'}
          </button>
        </form>
      )}
    </div>
  );
}

function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main>
        <section className="section">
          <div className="container">
            <p>Service introuvable.</p>
            <Link to="/services">Retour aux services</Link>
          </div>
        </section>
      </main>
    );
  }

  const { title, heroSubtitle, heroImage, content } = service;
  const serviceUrl = `${SITE_URL.replace(/\/$/, '')}/services/${slug}`;
  const imageUrl = heroImage.startsWith('http') ? heroImage : `${SITE_URL.replace(/\/$/, '')}${heroImage.startsWith('/') ? heroImage : `/${heroImage}`}`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: heroSubtitle,
    url: serviceUrl,
    image: imageUrl,
    provider: { '@type': 'LocalBusiness', name: 'Action Nuisibles 13' },
  };

  return (
    <>
      <Seo
        title={title}
        description={heroSubtitle}
        canonicalPath={`/services/${slug}`}
        image={heroImage}
        structuredData={serviceSchema}
      />
      <main>
        {/* Hero détail service : fond sombre, titre + sous-titre + CTA à gauche, image à droite */}
        <section className="page-hero page-hero--dark service-detail-hero">
          <div className="container">
            <div className="page-hero-inner service-detail-hero-inner">
              <div className="page-hero-content">
                <h1 className="page-hero-title">{title}</h1>
                <p className="page-hero-paragraph">{heroSubtitle}</p>
                <Link
                  to="/contact"
                  className="page-hero-btn page-hero-btn--yellow cta-yellow-arrow-btn"
                  onClick={() => track('contact_click', { from: 'service_detail', service: title })}
                >
                  <span>Contactez-nous</span>
                  <CtaArrowIcon />
                </Link>
              </div>
              <div className="page-hero-image service-detail-hero-image">
                <img src={heroImage} alt={title} />
              </div>
            </div>
          </div>
        </section>

        {/* Contenu principal : colonne gauche (texte) + colonne droite (formulaire) */}
        <section className="section service-detail-content-section">
          <div className="container">
            <div className="service-detail-layout">
              <div className="service-detail-main">
                <LinkifyThematiques>
                <div className="service-detail-block">
                  <h2 className="service-detail-h2">{title}</h2>
                  <p className="service-detail-intro">{content.intro}</p>
                </div>

                <div className="service-detail-block">
                  <h2 className="service-detail-h2">{content.whyTitle}</h2>
                  <ul className="service-detail-list">
                    {content.whyItems.map((item, i) => (
                      <li key={i}>
                        <strong>{item.title}&nbsp;:</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-detail-block">
                  <h2 className="service-detail-h2">{content.processTitle}</h2>
                  <ol className="service-detail-list service-detail-list--numbered">
                    {content.processSteps.map((item, i) => (
                      <li key={i}>
                        <strong>{item.title}&nbsp;:</strong> {item.text}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="service-detail-block">
                  <h2 className="service-detail-h2">{content.pestsTitle}</h2>
                  <p className="service-detail-intro">{content.pestsIntro}</p>
                  <ul className="service-detail-list">
                    {content.pestsItems.map((item, i) => (
                      <li key={i}>
                        <strong>{item.title}&nbsp;:</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-detail-block">
                  <h2 className="service-detail-h2">{content.advantagesTitle}</h2>
                  <ul className="service-detail-list">
                    {content.advantagesItems.map((item, i) => (
                      <li key={i}>
                        <strong>{item.title}&nbsp;:</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="service-detail-cta-text">
                  <Link to="/contact" className="service-detail-cta-link">Contactez-nous</Link>
                  {' '}pour planifier une intervention ou obtenir un devis personnalisé.
                </p>
                </LinkifyThematiques>
              </div>

              <aside className="service-detail-sidebar">
                {FORMSPREE_FORM_ID ? (
                  <ServiceDetailFormWithFormspree formId={FORMSPREE_FORM_ID} />
                ) : (
                  <ServiceDetailFormFallback />
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ServiceDetailPage;
