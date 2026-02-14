import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { linkifyThematiques } from '../components/LinkifyThematiques';
import { thematiques, getThematiqueBySlug } from '../data/thematiques';
import { villes } from '../data/villes';
import { SITE_URL, SITE_NAME } from '../utils/siteConfig';
import { CtaArrowIcon } from '../components/CtaArrowIcon';
import Contact from '../components/Contact';

function ThematiquePage() {
  const { slug } = useParams();
  const thematique = getThematiqueBySlug(slug);

  if (!thematique) {
    return (
      <main>
        <section className="section">
          <div className="container">
            <p>Thématique introuvable.</p>
            <Link to="/services">Voir nos services</Link>
            {' · '}
            <Link to="/#lieux-intervention">Lieux d'intervention</Link>
          </div>
        </section>
      </main>
    );
  }

  const { name, title, description, content } = thematique;
  const canonicalPath = `/thematique/${slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Bouches-du-Rhône',
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${title} | ${SITE_NAME}`,
    description: description,
    url: `${SITE_URL.replace(/\/$/, '')}${canonicalPath}`,
  };

  return (
    <>
      <Seo
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        structuredData={[serviceSchema, webPageSchema]}
      />
      <main>
        <section className="page-hero page-hero--dark">
          <div className="container">
            <div className="page-hero-inner page-hero-inner--with-btn">
              <div className="page-hero-content">
                <h1 className="page-hero-title">{title}</h1>
                <p className="page-hero-paragraph">
                  Intervention contre les {name.toLowerCase()} dans les Bouches-du-Rhône. Particuliers et
                  professionnels. Devis gratuit, intervention rapide.
                </p>
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
            <h2>Lutte contre les {name} dans les Bouches-du-Rhône</h2>
            <p>{linkifyThematiques(content.intro)}</p>

            <h2>Pourquoi faire appel à un professionnel ?</h2>
            <p>{linkifyThematiques(content.pourquoi)}</p>

            <h2>Comment reconnaître une infestation ?</h2>
            <p>{linkifyThematiques(content.comment)}</p>

            <h2>Quel réflexe adopter ?</h2>
            <p>{linkifyThematiques(content.reflexe)}</p>

            <h2>Autres nuisibles que nous traitons</h2>
            <p>
              Nous intervenons aussi contre les{' '}
              {thematiques
                .filter((t) => t.slug !== slug)
                .map((t, i, arr) => (
                  <React.Fragment key={t.slug}>
                    <Link to={`/thematique/${t.slug}`}>{t.name.toLowerCase()}</Link>
                    {i < arr.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}{' '}
              dans tout le département. Consultez nos{' '}
              <Link to="/services">services de lutte anti-nuisibles</Link> et nos{' '}
              <Link to="/#lieux-intervention">lieux d'intervention</Link> pour une intervention près de chez vous.
            </p>

            <p>
              <Link to="/contact" className="ville-cta-link cta-yellow-arrow-btn">
                <span>Demander un devis</span>
                <CtaArrowIcon />
              </Link>
            </p>

            <section className="thematique-autres-villes" aria-labelledby="thematique-autres-heading">
              <h2 id="thematique-autres-heading" className="thematique-autres-villes-title">
                Par type de nuisible
              </h2>
              <p className="thematique-autres-villes-desc">
                {linkifyThematiques('Consultez nos pages par thématique pour la dératisation, la désinsectisation et la destruction des nids (guêpes, frelons, chenilles processionnaires) dans les Bouches-du-Rhône.')}
              </p>
              <nav className="thematique-autres-villes-list" aria-label="Liste des thématiques">
                {thematiques.map((t) =>
                  t.slug === slug ? (
                    <span
                      key={t.slug}
                      className="thematique-autres-villes-item thematique-autres-villes-item--current"
                    >
                      {t.name}
                    </span>
                  ) : (
                    <Link
                      key={t.slug}
                      to={`/thematique/${t.slug}`}
                      className="thematique-autres-villes-item"
                    >
                      {t.name}
                    </Link>
                  )
                )}
              </nav>
            </section>

            <section className="thematique-villes-intervention" aria-labelledby="thematique-villes-heading">
              <h2 id="thematique-villes-heading" className="thematique-autres-villes-title">
                Villes d'intervention
              </h2>
              <p className="thematique-autres-villes-desc">
                Nous intervenons contre les {name.toLowerCase()} dans tout le département. Consultez nos pages par
                commune pour la dératisation, la désinsectisation et la lutte anti-nuisibles près de chez vous.
              </p>
              <nav className="thematique-autres-villes-list" aria-label="Liste des villes desservies">
                {villes.map((v) => (
                  <Link key={v.slug} to={`/intervention/${v.slug}`} className="thematique-autres-villes-item">
                    {v.name}
                  </Link>
                ))}
              </nav>
            </section>

            <p className="ville-back-link">
              <Link to="/services">← Tous nos services</Link>
              {' · '}
              <Link to="/#lieux-intervention">Lieux d'intervention</Link>
            </p>
          </div>
        </article>

        <Contact />
      </main>
    </>
  );
}

export default ThematiquePage;
