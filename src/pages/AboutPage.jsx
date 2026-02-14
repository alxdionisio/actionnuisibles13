import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { images } from '../utils/publicAssets';
import { CtaArrowIcon } from '../components/CtaArrowIcon';
import { IconArrowRight, IconPlus, IconLeaf, IconClock, IconFileText } from '../components/Icons';
import { LinkifyThematiques } from '../components/LinkifyThematiques';

function AboutPage() {
  const whyUsCards = [
    {
      icon: IconPlus,
      title: "Techniciens experts avec des années d'expérience.",
      description: "Notre équipe qualifiée intervient avec professionnalisme pour des résultats durables et un suivi adapté à vos besoins.",
      link: '/contact',
    },
    {
      icon: IconLeaf,
      title: 'Solutions anti-nuisibles écologiques.',
      description: "Nous privilégions des méthodes respectueuses de l'environnement et de votre santé, sans compromis sur l'efficacité.",
      link: '/contact',
    },
    {
      icon: IconClock,
      title: 'Délais d\'intervention rapides et fiables.',
      description: 'Urgences sous 2h dans les Bouches-du-Rhône pour les situations qui ne peuvent pas attendre.',
      link: '/contact',
    },
    {
      icon: IconFileText,
      title: 'Plans de traitement personnalisés.',
      description: 'Chaque intervention est adaptée à votre situation, votre secteur et vos contraintes, avec un suivi et des rapports détaillés.',
      link: '/contact',
    },
  ];

  return (
    <>
      <Seo
        title="À propos"
        description="Découvrez Action Nuisibles 13 : équipe d'experts en lutte anti-nuisibles, solutions écologiques et interventions rapides dans les Bouches-du-Rhône pour particuliers et professionnels."
        canonicalPath="/a-propos"
      />
      <main>
        {/* Hero : fond sombre, titre + description à gauche, bouton à droite (sans image) */}
        <section className="page-hero page-hero--dark">
          <div className="container">
            <div className="page-hero-inner page-hero-inner--with-btn">
              <div className="page-hero-content">
                <h1 className="page-hero-title">
                  Découvrez Action Nuisibles 13 <br /> et notre engagement <br /> pour un service d'excellence
                </h1>
                <p className="page-hero-paragraph">
                  Nous nous engageons à offrir un service d'excellence adapté aux particuliers et aux professionnels. Notre équipe met son expertise et sa réactivité au service de votre sérénité, pour protéger votre habitat ou vos locaux des nuisibles avec des solutions efficaces et durables.
                </p>
              </div>
              <Link to="/contact" className="page-hero-btn page-hero-btn--yellow cta-yellow-arrow-btn">
                <span>Nous contacter</span>
                <CtaArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* Protéger ce qui compte le plus : image à gauche, texte à droite */}
        <section className="section about-page-section">
          <div className="container">
            <div className="about-content about-content--image-left">
              <div className="about-image about-page-image">
                <img
                  src={images.invasionInsectesInterieur}
                  alt="Lutte contre les insectes en intérieur - protection habitat particuliers Bouches-du-Rhône"
                />
              </div>
              <div className="about-text about-page-text">
                <LinkifyThematiques>
                <p className="about-page-label">Qui sommes nous ?</p>
                <h2 className="about-page-heading">Protéger ce qui compte le plus</h2>
                <p className="about-page-paragraph">
                  Action Nuisibles 13 propose des solutions de lutte anti-nuisibles efficaces et éco-responsables pour protéger votre maison, votre entreprise et votre famille. Notre expertise couvre l'ensemble des nuisibles les plus courants : rongeurs, insectes, guêpes et frelons, chenilles processionnaires, et bien d'autres.
                </p>
                <p className="about-page-paragraph">
                  Nous vous accompagnons avec un suivi complet et régulier pour maintenir un environnement sain et sans nuisible. En cas d'urgence, nous intervenons rapidement.
                </p>
                <Link to="/contact" className="about-page-cta-link">
                  Nous contacter
                  <IconArrowRight size={18} />
                </Link>
                </LinkifyThematiques>
              </div>
            </div>
          </div>
        </section>

        {/* Fiable et efficace : grille 2x2 de cartes */}
        <section className="section about-page-section about-page-section--white">
          <div className="container">
            <div className="about-page-why-header about-page-why-header--with-desc">
              <div className="about-page-why-header-left">
                <p className="about-page-label">Pourquoi nous choisir ?</p>
                <h2 className="about-page-heading">Fiable et efficace</h2>
              </div>
              <p className="about-page-why-desc">
                Nous savons qu'en matière de nuisibles, vous avez besoin de solutions rapides et efficaces. Notre équipe qualifiée vous garantit un service fiable, axé sur la sécurité, la qualité et l'efficacité.
              </p>
            </div>
            <div className="why-us-grid about-page-cards">
              {whyUsCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div key={card.title} className="why-us-card about-page-card">
                    <div className="about-page-card-icon">
                      <IconComponent size={22} />
                    </div>
                    <h3 className="about-page-card-title">{card.title}</h3>
                    <p className="about-page-card-desc">{card.description}</p>
                    <Link to={card.link} className="about-page-cta-link">
                      Nous contacter
                      <IconArrowRight size={18} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions professionnelles : image à gauche, bloc texte à droite chevauchant l'image */}
        <section className="section about-page-section about-approach-section">
          <div className="container">
            <div className="about-approach-layout">
              <div className="about-approach-image-wrap">
                <img
                  src={images.nuisiblesSolutionPro}
                  alt="Solutions anti-nuisibles pour les professionnels - entreprises et locaux Bouches-du-Rhône"
                />
              </div>
              <div className="about-approach-text-card">
                <div className="about-approach-content">
                  <div className="about-approach-title">
                    <p className="about-page-label about-approach-label">Sollicitez notre aide</p>
                    <h2 className="about-page-heading">Solutions professionnelles anti-nuisibles</h2>
                  </div>
                  <p className="about-page-paragraph about-approach-paragraph">
                    Spécialistes de l'éradication de nuisibles, nous proposons des solutions sûres et efficaces adaptées à vos besoins. Notre équipe certifiée assure des interventions fiables et éco-responsables pour les particuliers comme les professionnels, avec une protection garantie sur le long terme.
                  </p>
                  <Link to="/contact" className="about-page-cta-link about-approach-cta">
                    Nous contacter
                    <IconArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
