import React from 'react';
import { Link } from 'react-router-dom';
import { CtaArrowIcon } from './CtaArrowIcon';
import { IconStars } from './Icons';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Des souris dans le garage et la cuisine, je ne savais plus quoi faire. Leur traitement a été radical et ils m'ont donné de bons conseils pour éviter que ça revienne. Je recommande.",
      author: 'Patrick D.',
      role: 'Particulier - Martigues',
    },
    {
      id: 2,
      text: "Intervention rapide et efficace pour un problème de fourmis qui envahissaient mon jardin. Le technicien était professionnel et rassurant. Plus aucun problème depuis 3 mois !",
      author: 'Alex D.',
      role: 'Particulier - Sausset-les-Pins',
    },
    {
      id: 3,
      text: "En tant que syndic, nous gérons plusieurs copropriétés dans les Bouches-du-Rhône. Action Nuisibles 13 intervient toujours rapidement et avec transparence.",
      author: 'Christine D.',
      role: 'Gestionnaire de copropriété - Vitrolles',
    },
    {
      id: 4,
      text: "Intervention préventive tous les trimestres pour notre commerce alimentaire. Équipe ponctuelle, discrète et professionnelle. Aucun souci de nuisibles depuis qu'on travaille avec eux.",
      author: 'Jérôme F.',
      role: "Propriétaire d'une boulangerie - Marignane",
    },
    {
      id: 5,
      text: "Un nid de frelons asiatiques dans le jardin, ils sont intervenus en moins de 2 heures. Travail propre et prix honnête. Je recommande vivement.",
      author: 'Jean-Marc R.',
      role: 'Particulier - Istres',
    },
    {
      id: 6,
      text: "Nous avions des punaises de lit suite à un voyage. Action Nuisibles 13 a réglé le problème en une seule intervention. Enfin des nuits tranquilles !",
      author: 'Sophie B.',
      role: 'Particulier - Carry-le-Rouet',
    },
  ];

  return (
    <section className="testimonials-section" aria-label="Témoignages clients">
      <div className="testimonials-dark-container">
        <div className="container">
          <div className="testimonials-header">
            <p className="testimonials-label">Témoignages</p>
            <h2 className="testimonials-title">Ce que disent nos clients</h2>
          </div>

          <div className="testimonials-container">
            <div className="testimonials-track" aria-hidden="true">
              <div className="testimonials-slider">
                <div className="testimonials-cta-card">
                  <h2 className="testimonials-cta-heading">
                    Appelez-nous pour une intervention rapide dès aujourd'hui
                  </h2>
                  <Link to="/contact" className="testimonials-cta-btn cta-yellow-arrow-btn">
                    <span>Nous contacter</span>
                    <CtaArrowIcon />
                  </Link>
                </div>
                {testimonials.map((t) => (
                  <div key={t.id} className="testimonial-card">
                    <IconStars count={5} size={18} className="testimonial-stars" aria-hidden="true" />
                    <p className="testimonial-text">{t.text}</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar" aria-hidden="true" />
                      <div className="testimonial-details">
                        <p className="testimonial-name">{t.author}</p>
                        <p className="testimonial-role">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="testimonials-slider" aria-hidden="true">
                <div className="testimonials-cta-card">
                  <h2 className="testimonials-cta-heading">
                    Appelez-nous pour une intervention rapide dès aujourd'hui
                  </h2>
                  <Link to="/contact" className="testimonials-cta-btn cta-yellow-arrow-btn">
                    <span>Nous contacter</span>
                    <CtaArrowIcon />
                  </Link>
                </div>
                {testimonials.map((t) => (
                  <div key={`dup-${t.id}`} className="testimonial-card">
                    <IconStars count={5} size={18} className="testimonial-stars" aria-hidden="true" />
                    <p className="testimonial-text">{t.text}</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar" aria-hidden="true" />
                      <div className="testimonial-details">
                        <p className="testimonial-name">{t.author}</p>
                        <p className="testimonial-role">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
