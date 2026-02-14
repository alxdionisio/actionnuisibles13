import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { LinkifyThematiques } from '../components/LinkifyThematiques';
import { villes, getVilleBySlug } from '../data/villes';
import { thematiques } from '../data/thematiques';
import { SITE_URL, SITE_NAME } from '../utils/siteConfig';
import { CtaArrowIcon } from '../components/CtaArrowIcon';

function VillePage() {
  const { slug } = useParams();
  const ville = getVilleBySlug(slug);

  if (!ville) {
    return (
      <main>
        <section className="section">
          <div className="container">
            <p>Ville introuvable.</p>
            <Link to="/#lieux-intervention">Voir nos lieux d'intervention</Link>
          </div>
        </section>
      </main>
    );
  }

  const { name } = ville;
  const title = `Dératisation et désinsectisation à ${name}`;
  const description = `Action Nuisibles 13 intervient à ${name} et alentours : dératisation, désinsectisation, nids de guêpes et frelons, chenilles processionnaires. Lutte anti-nuisibles pour particuliers et professionnels. Devis gratuit, intervention rapide.`;
  const canonicalPath = `/intervention/${slug}`;

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: name,
      addressRegion: 'Bouches-du-Rhône',
      addressCountry: 'FR',
    },
  };

  const serviceAreaSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${SITE_NAME} - ${name}`,
    description: description,
    url: `${SITE_URL.replace(/\/$/, '')}${canonicalPath}`,
    areaServed: {
      '@type': 'City',
      name: name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Bouches-du-Rhône',
      },
    },
  };

  return (
    <>
      <Seo
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        structuredData={[placeSchema, serviceAreaSchema]}
      />
      <main>
        <section className="page-hero page-hero--dark">
          <div className="container">
            <div className="page-hero-inner page-hero-inner--with-btn">
              <div className="page-hero-content">
                <h1 className="page-hero-title">
                  Dératisation et désinsectisation à {name}
                </h1>
                <p className="page-hero-paragraph">
                  Intervention anti-nuisibles à {name} et dans les communes voisines : particuliers et professionnels.
                  Dératisation, désinsectisation, guêpes, frelons, chenilles processionnaires. Devis gratuit.
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
            <LinkifyThematiques>
            <h2>Intervention anti-nuisibles à {name} – Dératisation et désinsectisation</h2>
            <p>
              <strong>Action Nuisibles 13</strong> assure la <strong>dératisation</strong> et la{' '}
              <strong>désinsectisation</strong> à <strong>{name}</strong> et dans les Bouches-du-Rhône. Que vous soyez
              particulier ou professionnel, nous intervenons pour lutter contre les <strong>nuisibles</strong> :
              rongeurs, insectes, <strong>guêpes</strong>, <strong>frelons</strong>, <strong>chenilles
              processionnaires</strong>, <strong>punaises de lit</strong>, cafards et fourmis. Nos techniciens
              certifiés se déplacent à {name} pour des traitements efficaces et respectueux de l'environnement.
            </p>

            <h2>Dératisation à {name}</h2>
            <p>
              En cas de présence de <strong>rongeurs</strong> (souris, rats) à {name}, notre équipe réalise un
              diagnostic, met en place un plan de <strong>dératisation</strong> adapté et assure un suivi pour éviter
              les réinfestations. Nous intervenons dans les habitations, locaux professionnels et établissements
              recevant du public à {name} et alentours.
            </p>

            <h2>Désinsectisation à {name}</h2>
            <p>
              La <strong>désinsectisation</strong> à {name} couvre l'élimination des <strong>cafards</strong>,{' '}
              <strong>fourmis</strong>, punaises de lit et autres insectes nuisibles. Nous utilisons des méthodes
              ciblées et des produits adaptés pour un résultat durable. Particuliers et professionnels à {name} peuvent
              nous solliciter pour un devis gratuit.
            </p>

            <h2>Guêpes et frelons à {name}</h2>
            <p>
              Nid de <strong>guêpes</strong> ou de <strong>frelons</strong> à {name} ? Nous intervenons pour retirer ou
              neutraliser les nids en toute sécurité. Intervention rapide possible, y compris en urgence, sur {name} et
              les communes environnantes des Bouches-du-Rhône.
            </p>

            <h2>Chenilles processionnaires à {name}</h2>
            <p>
              Les <strong>chenilles processionnaires</strong> du pin et du chêne représentent un risque pour les
              personnes et les animaux. À {name}, nous proposons la destruction des nids et des traitements préventifs
              pour protéger vos espaces verts et votre habitat.
            </p>

            <h2>Pourquoi faire appel à un professionnel à {name} ?</h2>
            <p>
              Faire appel à un <strong>professionnel de la dératisation et de la désinsectisation</strong> à {name}
              garantit un diagnostic fiable, un traitement adapté et une prévention durable. Les nuisibles (rongeurs,
              insectes, guêpes, frelons, chenilles processionnaires) peuvent transmettre des maladies, endommager
              votre habitat ou nuire à votre activité. Un expert identifie les espèces, les points d'entrée et les
              nids, puis applique des protocoles sûrs et souvent nécessaires pour les <strong>punaises de lit</strong>{' '}
              ou le <strong>frelon asiatique</strong>. À {name}, particuliers et professionnels (restaurants,
              commerces, établissements de santé) ont tout intérêt à confier la <strong>lutte anti-nuisibles</strong> à
              une entreprise certifiée comme Action Nuisibles 13.
            </p>

            <h2>Comment reconnaître une invasion de nuisibles ?</h2>
            <p>
              Plus une <strong>invasion</strong> est détectée tôt, plus le traitement est simple et économique. À{' '}
              {name} comme ailleurs, soyez attentif à ces signes : <strong>crottes</strong> ou traces de passage
              (rongeurs), <strong>insectes</strong> vivants ou morts en nombre (cafards, fourmis, punaises de lit),
              bruits dans les cloisons ou les combles, nids de <strong>guêpes</strong> ou de <strong>frelons</strong> sous
              les toits ou dans les arbres, nids de <strong>chenilles processionnaires</strong> dans les pins, odeurs
              inhabituelles, dégâts sur les denrées ou les câbles. En cas de doute, un diagnostic par un professionnel
              à {name} permet de confirmer l'espèce et l'ampleur de l'infestation avant toute intervention.
            </p>

            <h2>Quel réflexe adopter en cas d'invasion ?</h2>
            <p>
              En cas d'<strong>invasion</strong> à {name}, évitez d'utiliser vous-même des produits en libre-service :
              mauvaise identification du nuisible, risque pour la santé et l'environnement, et inefficacité fréquente.
              Le bon réflexe : contacter un professionnel de la <strong>dératisation</strong> ou de la{' '}
              <strong>désinsectisation</strong> pour un diagnostic et un devis. Pour un nid de guêpes ou de frelons,
              ne tentez pas de le détruire seul : le risque de piqûres multiples est réel. Action Nuisibles 13
              intervient à {name} pour sécuriser les lieux, traiter l'infestation et vous conseiller en prévention
              (colmater les accès, gérer les déchets, contrôler la végétation).
            </p>

            <h2>Quels nuisibles traitons-nous à {name} ?</h2>
            <p>
              À {name}, nous intervenons contre les principaux <strong>nuisibles</strong> des Bouches-du-Rhône :{' '}
              <strong>rongeurs</strong> (souris, rats), <strong>insectes</strong> (cafards, blattes, fourmis, punaises
              de lit, puces), <strong>guêpes</strong> et <strong>frelons</strong> (y compris frelon asiatique),{' '}
              <strong>chenilles processionnaires</strong> du pin et du chêne. Nous assurons la destruction des nids,
              la dératisation des habitations et locaux professionnels, la désinsectisation ciblée et, si besoin, des
              traitements préventifs. Chaque situation à {name} est évaluée sur place pour un plan d'action adapté.
            </p>

            <h2>Entreprise de dératisation et désinsectisation à {name}</h2>
            <p>
              En tant qu'<strong>entreprise de dératisation et désinsectisation</strong> intervenant à {name}, nous
              mettons à votre service des techniciens formés, des produits homologués et des protocoles adaptés à
              chaque nuisible. Que vous cherchiez un <strong>exterminateur</strong> pour des rats, un traitement contre
              les <strong>punaises de lit</strong>, une <strong>destruction de nid de guêpes</strong> ou de frelons, ou
              un traitement des <strong>chenilles processionnaires</strong>, notre équipe se déplace à {name} et
              alentours. Nous travaillons pour les particuliers, les syndics, les restaurateurs, les commerces et les
              collectivités dans les Bouches-du-Rhône.
            </p>

            <h2>Dératisation et désinsectisation : méthodes et garanties</h2>
            <p>
              La <strong>dératisation</strong> à {name} repose sur l'inspection, la pose d'appâts ou de pièges
              sécurisés, le colmatage des accès et un suivi pour éviter les réinfestations. La{' '}
              <strong>désinsectisation</strong> combine selon les cas pulvérisation, gel, fumigation ou traitements
              des nids (guêpes, frelons). Pour les <strong>chenilles processionnaires</strong>, nous proposons
              l'élimination des nids et des traitements préventifs. Nos produits et méthodes sont choisis pour
              limiter l'impact sur l'environnement et la santé des occupants. Nous pouvons vous proposer une garantie
              de réintervention dans le cadre de nos contrats à {name}.
            </p>

            <h2>Combien coûte une intervention anti-nuisibles à {name} ?</h2>
            <p>
              Le coût d'une <strong>intervention</strong> de dératisation ou désinsectisation à {name} dépend du type
              de nuisible, de la surface à traiter et de la complexité (nid de frelons, infestation de punaises de
              lit, etc.). Nous établissons un <strong>devis gratuit</strong> après une visite ou un échange détaillé.
              Pas de mauvaises surprises : nos tarifs sont transparents pour les particuliers et les professionnels.
              Demandez votre devis pour une intervention à {name} ou dans une commune voisine des Bouches-du-Rhône.
            </p>

            <h2>Zone d'intervention : {name} et la région</h2>
            <p>
              Notre zone d'<strong>intervention</strong> couvre {name}, Marseille, la Côte Bleue, Martigues, Aubagne,
              Aix-en-Provence et l'ensemble des Bouches-du-Rhône. Nous nous déplaçons à {name} pour tous types de
              <strong> lutte anti-nuisibles</strong> : dératisation, désinsectisation, guêpes, frelons, chenilles
              processionnaires, punaises de lit, rongeurs. Contactez-nous pour un <strong>devis gratuit</strong> ou
              une intervention rapide.
            </p>

            <p>
              <Link to="/contact" className="ville-cta-link cta-yellow-arrow-btn">
                <span>Demander un devis à {name}</span>
                <CtaArrowIcon />
              </Link>
            </p>

            <section className="ville-autres-villes" aria-labelledby="ville-autres-villes-heading">
              <h2 id="ville-autres-villes-heading" className="ville-autres-villes-title">
                Dératisation et désinsectisation dans les autres communes
              </h2>
              <p className="ville-autres-villes-desc">
                Nous intervenons dans tout le département des Bouches-du-Rhône. Consultez nos pages par ville pour
                les informations détaillées sur la dératisation, la désinsectisation et la lutte anti-nuisibles
                près de chez vous.
              </p>
              <nav className="ville-autres-villes-list" aria-label="Liste des villes desservies">
                {villes.map((v) =>
                  v.slug === slug ? (
                    <span key={v.slug} className="ville-autres-villes-item ville-autres-villes-item--current">
                      {v.name}
                    </span>
                  ) : (
                    <Link
                      key={v.slug}
                      to={`/intervention/${v.slug}`}
                      className="ville-autres-villes-item"
                    >
                      {v.name}
                    </Link>
                  )
                )}
              </nav>
            </section>

            <section className="ville-thematiques" aria-labelledby="ville-thematiques-heading">
              <h2 id="ville-thematiques-heading" className="ville-autres-villes-title">
                Par type de nuisible
              </h2>
              <p className="ville-autres-villes-desc">
                Dératisation, destruction de nids (guêpes, frelons), chenilles processionnaires, punaises de lit,
                cafards, fourmis : consultez nos pages thématiques pour une intervention ciblée à {name} et dans
                les Bouches-du-Rhône.
              </p>
              <nav className="ville-autres-villes-list" aria-label="Pages par type de nuisible">
                {thematiques.map((t) => (
                  <Link
                    key={t.slug}
                    to={`/thematique/${t.slug}`}
                    className="ville-autres-villes-item"
                  >
                    {t.name}
                  </Link>
                ))}
              </nav>
            </section>

            <p className="ville-back-link">
              <Link to="/#lieux-intervention">← Tous nos lieux d'intervention</Link>
            </p>
            </LinkifyThematiques>
          </div>
        </article>
      </main>
    </>
  );
}

export default VillePage;
