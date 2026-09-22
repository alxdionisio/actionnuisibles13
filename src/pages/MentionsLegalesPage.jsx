import React from 'react';
import Seo from '../components/Seo';
import { ENTREPRISE, ADRESSE_LIGNE, SITE_NAME } from '../data/entreprise';

/**
 * Une ligne de mention légale. Un champ non renseigné dans src/data/entreprise.js
 * ne produit aucune ligne : jamais de « SIRET : à compléter » affiché au visiteur.
 * Les titres de section ne sont pas numérotés, pour que des sections conditionnelles
 * puissent apparaître ou disparaître sans fausser la numérotation.
 */
function Mention({ label, children }) {
  if (!children) return null;
  return (
    <p>
      <strong>{label} :</strong> {children}
    </p>
  );
}

export default function MentionsLegalesPage() {
  const { assuranceRcPro, certibiocide, mediateurConso } = ENTREPRISE;
  const formeEtCapital = ENTREPRISE.formeJuridique
    ? [ENTREPRISE.formeJuridique, ENTREPRISE.capitalSocial && `au capital de ${ENTREPRISE.capitalSocial}`]
        .filter(Boolean)
        .join(' ')
    : '';

  return (
    <>
      <Seo
        title="Mentions légales"
        description="Mentions légales du site Action Nuisibles 13 - Éditeur, siège social, hébergement et informations juridiques."
        canonicalPath="/mentions-legales"
      />
      <main>
        <section className="section legal-page-section">
          <div className="container legal-page-container">
            <h1 className="page-hero-title legal-page-title">Mentions légales</h1>
            <p className="legal-page-updated">Dernière mise à jour : septembre 2026</p>

            <div className="legal-page-content">
              <h2>Éditeur du site</h2>
              <p>
                Le site <strong>{SITE_NAME}</strong> est édité par&nbsp;:
              </p>
              {/* « Nom de l'éditeur » convient à une personne comme à une société :
                  un entrepreneur individuel n'a pas de dénomination sociale. */}
              <Mention label="Nom de l'éditeur">{ENTREPRISE.raisonSociale || SITE_NAME}</Mention>
              <Mention label="Nom commercial">
                {ENTREPRISE.raisonSociale && ENTREPRISE.raisonSociale !== SITE_NAME ? SITE_NAME : ''}
              </Mention>
              <Mention label="Forme juridique">{formeEtCapital}</Mention>
              <Mention label="Siège social">{`${ADRESSE_LIGNE}, France`}</Mention>
              <Mention label="SIRET">{ENTREPRISE.siret}</Mention>
              <Mention label="RCS">{ENTREPRISE.rcsVille ? `RCS ${ENTREPRISE.rcsVille}` : ''}</Mention>
              <Mention label="TVA">
                {ENTREPRISE.tvaIntracom ||
                  (ENTREPRISE.tvaFranchiseEnBase
                    ? 'TVA non applicable, article 293 B du CGI'
                    : '')}
              </Mention>
              <Mention label="Directeur de la publication">{ENTREPRISE.directeurPublication}</Mention>
              <Mention label="Téléphone">
                <a href={`tel:${ENTREPRISE.telephone}`}>{ENTREPRISE.telephoneAffiche}</a>
              </Mention>
              <Mention label="Email">
                <a href={`mailto:${ENTREPRISE.email}`}>{ENTREPRISE.email}</a>
              </Mention>

              {(certibiocide || assuranceRcPro.assureur) && (
                <>
                  <h2>Activité réglementée et assurance</h2>
                  <Mention label="Agrément Certibiocide">{certibiocide}</Mention>
                  <Mention label="Assurance responsabilité civile professionnelle">
                    {[assuranceRcPro.assureur, assuranceRcPro.police && `contrat n° ${assuranceRcPro.police}`]
                      .filter(Boolean)
                      .join(' — ')}
                  </Mention>
                  <Mention label="Couverture géographique">{assuranceRcPro.couverture}</Mention>
                </>
              )}

              <h2>Hébergement</h2>
              <p>
                L’hébergement du site est assuré par <strong>GitHub Pages</strong> (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis — <a href="https://support.github.com/" target="_blank" rel="noopener noreferrer">support.github.com</a>).
              </p>
              <p>
                Le nom de domaine est géré par <strong>OVH</strong> (OVH SAS, 2 rue Kellermann, 59100 Roubaix, France — <a href="https://www.ovh.com/" target="_blank" rel="noopener noreferrer">www.ovh.com</a>).
              </p>

              <h2>Propriété intellectuelle</h2>
              <p>
                L’ensemble du contenu de ce site (textes, images, graphismes, structure) est protégé par le droit d’auteur et le droit des marques. Toute reproduction ou représentation non autorisée est interdite.
              </p>

              <h2>Limitation de responsabilité</h2>
              <p>
                Les informations diffusées sur ce site le sont à titre indicatif. {SITE_NAME} s’efforce d’en assurer l’exactitude mais ne peut en garantir l’exhaustivité. L’utilisation des informations se fait sous la responsabilité de l’internaute.
              </p>

              <h2>Liens</h2>
              <p>
                Les liens vers des sites externes n’engagent pas la responsabilité d’{SITE_NAME} quant au contenu de ces sites. La création de liens vers ce site est soumise à notre accord préalable.
              </p>

              {mediateurConso.nom && (
                <>
                  <h2>Médiation de la consommation</h2>
                  <p>
                    Conformément à l’article L612-1 du code de la consommation, tout consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d’un litige&nbsp;:
                  </p>
                  <Mention label="Médiateur">{mediateurConso.nom}</Mention>
                  <Mention label="Site">
                    {mediateurConso.url ? (
                      <a href={mediateurConso.url} target="_blank" rel="noopener noreferrer">
                        {mediateurConso.url}
                      </a>
                    ) : (
                      ''
                    )}
                  </Mention>
                </>
              )}

              <h2>Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
