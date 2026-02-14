import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '@formspree/react';
import { IconPin, IconMail, IconPhone } from './Icons';
import { track } from '../utils/tracking';
import { villes } from '../data/villes';

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || 'mvzbkezg';

function ContactFormWithFormspree({ formId }) {
  const [state, handleSubmit] = useForm(formId);

  useEffect(() => {
    if (state.succeeded) track('contact_form_submit', { status: 'success' });
  }, [state.succeeded]);

  return (
    <ContactFormLayout
      state={state}
      handleSubmit={handleSubmit}
    />
  );
}

function ContactFormFallback() {
  const [succeeded, setSucceeded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const name = form.name?.value || '';
    const email = form.email?.value || '';
    const phone = form.phone?.value || '';
    const message = form.message?.value || '';
    const body = `Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone}\n\nMessage :\n${message}`;
    const mailto = `mailto:contact@actionnuisibles13.com?subject=Contact depuis le site&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    track('contact_form_submit', { status: 'mailto_fallback' });
    setSucceeded(true);
    setSubmitting(false);
  };

  const state = { succeeded, submitting, errors: null };
  return <ContactFormLayout state={state} handleSubmit={handleSubmit} />;
}

function ContactFormLayout({ state, handleSubmit }) {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-dark-container">
        <div className="container">
          <div className="contact-content">
            <div className="contact-left">
              <div className="contact-title-block">
                <p className="contact-label">Contact</p>
                <h2 className="contact-heading">
                  Nous sommes là<br />pour vous aider<br />Contactez-nous
                </h2>
              </div>
              <div className="contact-line" aria-hidden="true" />
              <nav className="contact-links" aria-label="Coordonnées">
                <div className="contact-link-item">
                  <span className="contact-link-icon" aria-hidden="true">
                    <IconPin size={20} />
                  </span>
                  <div className="contact-link-text">
                    <p className="contact-location-label">Bouches-du-Rhône</p>
                    <nav className="contact-villes-list" aria-label="Villes d'intervention">
                      {villes.map((ville) => (
                        <Link
                          key={ville.slug}
                          to={`/intervention/${ville.slug}`}
                          className="contact-ville-link"
                        >
                          {ville.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="contact-link-item">
                  <span className="contact-link-icon" aria-hidden="true">
                    <IconMail size={20} />
                  </span>
                  <p className="contact-link-text">
                    <a
                      href="mailto:contact@actionnuisibles13.com"
                      onClick={() => track('email_click', { from: 'contact' })}
                    >
                      contact@actionnuisibles13.com
                    </a>
                  </p>
                </div>
                <div className="contact-link-item">
                  <span className="contact-link-icon" aria-hidden="true">
                    <IconPhone size={20} />
                  </span>
                  <p className="contact-link-text">
                    <a
                      href="tel:+33759697355"
                      onClick={() => track('phone_click', { from: 'contact' })}
                    >
                      +33 7 59 69 73 55
                    </a>
                  </p>
                </div>
              </nav>
            </div>

            <div className="contact-form-wrapper">
              {state.succeeded ? (
                <p className="contact-form-success">
                  Merci ! Votre message a bien été envoyé. Nous vous recontacterons rapidement.
                </p>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-inputs">
                    <div className="contact-form-row">
                      <label className="contact-form-label">
                        <span className="contact-form-label-text">Nom</span>
                        <input
                          type="text"
                          name="name"
                          className="contact-form-input"
                          placeholder="Prénom Nom"
                          required
                          disabled={state.submitting}
                        />
                      </label>
                      <label className="contact-form-label">
                        <span className="contact-form-label-text">Email</span>
                        <input
                          type="email"
                          name="email"
                          className="contact-form-input"
                          placeholder="exemple@mail.com"
                          required
                          disabled={state.submitting}
                        />
                      </label>
                    </div>
                    <label className="contact-form-label">
                      <span className="contact-form-label-text">Adresse</span>
                      <input
                        type="text"
                        name="address"
                        className="contact-form-input"
                        placeholder="Entrez votre adresse"
                        disabled={state.submitting}
                      />
                    </label>
                    <label className="contact-form-label">
                      <span className="contact-form-label-text">Téléphone</span>
                      <input
                        type="tel"
                        name="phone"
                        className="contact-form-input"
                        placeholder="+33 6 12 34 56 78"
                        disabled={state.submitting}
                      />
                    </label>
                    <label className="contact-form-label">
                      <span className="contact-form-label-text">Message</span>
                      <textarea
                        name="message"
                        className="contact-form-textarea"
                        placeholder="Bonjour, je sollicite votre aide pour..."
                        required
                        rows={4}
                        disabled={state.submitting}
                      />
                    </label>
                  </div>
                  {state.errors && (
                    <p className="contact-form-error" role="alert">
                      Une erreur est survenue. Veuillez réessayer ou nous contacter par email.
                    </p>
                  )}
                  <div className="contact-form-submit">
                    <button
                      type="submit"
                      className="contact-form-btn"
                      disabled={state.submitting}
                    >
                      {state.submitting ? 'Envoi en cours…' : 'Envoyer'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  if (FORMSPREE_FORM_ID) {
    return <ContactFormWithFormspree formId={FORMSPREE_FORM_ID} />;
  }
  return <ContactFormFallback />;
}

export default Contact;
