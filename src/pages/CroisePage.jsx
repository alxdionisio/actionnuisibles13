import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from '../components/AppLink';
import Seo from '../components/Seo';
import { croises } from '../data/croises';
import { getVilleBySlug } from '../data/villes';
import { thematiques } from '../data/thematiques';
import { SITE_URL, SITE_NAME, ORGANIZATION_ID } from '../utils/siteConfig';
import { buildBreadcrumbList } from '../utils/structuredData';
import { CtaArrowIcon } from '../components/CtaArrowIcon';

/**
 * Page croisée nuisible × ville (/punaises-de-lit-istres, …).
 * Elle n'existe que pour les couples qu'aucun titre ne porte : la page ville
 * annonce « Dératisation et désinsectisation à X », la page thématique porte le
 * nuisible sans la commune. Le maillage renvoie vers les deux, pour que cette
 * page reste une entrée et non un cul-de-sac.
 */
function CroisePage() {
  const { slug } = useParams();
  const croise = croises.find((c) => c.slug === slug);

  if (!croise) {
    return (
      <>
        <Seo
          title="Page introuvable"
          description="Cette page n'existe pas ou n'est plus disponible."
          canonicalPath="/"
          noindex
        />
        <main>
          <section className="section">
            <div className="container">
              <p>Page introuvable.</p>
              <Link to="/#lieux-intervention">Voir nos lieux d'intervention</Link>
            </div>
          </section>
        </main>
      </>
    );
  }

  const { nuisible, ville, title, description, sections, thematiqueSlug, villeSlug } = croise;
  const canonicalPath = `/${croise.slug}`;
  const thematique = thematiques.find((t) => t.slug === thematiqueSlug);
  const villeData = getVilleBySlug(villeSlug);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    serviceType: nuisible,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: {
      '@type': 'City',
      name: ville,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
    },
  };

  const breadcrumbSchema = buildBreadcrumbList(
    [
      { name: 'Accueil', path: '/' },
      { name: ville, path: `/intervention/${villeSlug}` },
      { name: nuisible, path: canonicalPath },
    ],
    SITE_URL,
  );

  return (
    <>
      <Seo
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        structuredData={[serviceSchema, breadcrumbSchema]}
      />
      <main>
        <section className="page-hero page-hero--dark page-hero--minimal">
          <div className="container">
            <div className="page-hero-inner page-hero-inner--with-btn">
              <div className="page-hero-content">
                <h1 className="page-hero-title">{title}</h1>
                <p className="page-hero-paragraph">{description}</p>
              </div>
              <Link to="/contact" className="page-hero-btn page-hero-btn--yellow cta-yellow-arrow-btn">
                <span>Demander un devis</span>
                <CtaArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <article className="section ville-content-section">
          <div className="container ville-content-container">
            {sections.map((section) => (
              <section key={section.title} className="ville-section-locale">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}

            <h2>Aller plus loin</h2>
            <p>
              {thematique && (
                <>
                  Pour le détail des méthodes et des cas traités, voir{' '}
                  <Link to={`/thematique/${thematiqueSlug}`}>{thematique.title}</Link>.{' '}
                </>
              )}
              {villeData && (
                <>
                  Pour l'ensemble des nuisibles traités sur la commune, voir{' '}
                  <Link to={`/intervention/${villeSlug}`}>{`dératisation et désinsectisation à ${ville}`}</Link>.
                </>
              )}
            </p>

            <p>
              {SITE_NAME} intervient depuis Istres sur {ville} et les communes voisines.{' '}
              <Link to="/contact">Demander un devis gratuit</Link>.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}

export default CroisePage;
