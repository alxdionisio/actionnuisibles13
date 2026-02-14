import React from 'react';
import Seo from '../components/Seo';

const SITE_NAME = 'Action Nuisibles 13';

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Seo
        title="Politique de confidentialité"
        description="Politique de confidentialité et utilisation des cookies d'Action Nuisibles 13 - Protection des données personnelles."
        canonicalPath="/politique-confidentialite"
      />
      <main>
        <section className="section legal-page-section">
          <div className="container legal-page-container">
            <h1 className="page-hero-title legal-page-title">Politique de confidentialité</h1>
            <p className="legal-page-updated">Dernière mise à jour : février 2026</p>

            <div className="legal-page-content">
              <h2>1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données personnelles collectées via le site <strong>{SITE_NAME}</strong> est Action Nuisibles 13 (Bouches-du-Rhône). Contact : contact@actionnuisibles13.com.
              </p>

              <h2>2. Données collectées</h2>
              <p>
                Nous pouvons collecter les données que vous communiquez volontairement (formulaire de contact : nom, email, téléphone, adresse, message) afin de répondre à vos demandes. Les données de navigation (cookies) sont traitées conformément à votre consentement.
              </p>

              <h2>3. Finalités et base légale</h2>
              <p>
                Les données sont utilisées pour : répondre à vos demandes de contact, gérer la relation client et, si vous y consentez, analyser l’audience du site (cookies analytiques). La base légale est votre consentement ou l’exécution de mesures précontractuelles à votre demande.
              </p>

              <h2>4. Cookies</h2>
              <p>
                Le site utilise des cookies pour le bon fonctionnement des services et, avec votre accord, pour la mesure d’audience. Vous pouvez à tout moment accepter ou refuser les cookies non essentiels via le bandeau affiché lors de votre première visite. Vous pouvez également gérer vos préférences via les paramètres de votre navigateur.
              </p>

              <h2>5. Durée de conservation</h2>
              <p>
                Les données de contact sont conservées le temps nécessaire au traitement de votre demande et, le cas échéant, pour la durée de la relation commerciale. Les données de cookies sont conservées conformément aux durées indiquées par les outils utilisés (souvent 13 à 14 mois pour les cookies analytiques).
              </p>

              <h2>6. Vos droits</h2>
              <p>
                Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation du traitement, de portabilité et d’opposition. Pour exercer ces droits, contactez-nous à contact@actionnuisibles13.com. Vous avez également le droit d’introduire une réclamation auprès de la CNIL (www.cnil.fr).
              </p>

              <h2>7. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, perte ou altération.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
