import React from 'react';
import Seo from '../components/Seo';

const SITE_NAME = 'Action Nuisibles 13';

export default function MentionsLegalesPage() {
  return (
    <>
      <Seo
        title="Mentions légales"
        description="Mentions légales du site Action Nuisibles 13 - Éditeur, hébergement et informations juridiques."
        canonicalPath="/mentions-legales"
      />
      <main>
        <section className="section legal-page-section">
          <div className="container legal-page-container">
            <h1 className="page-hero-title legal-page-title">Mentions légales</h1>
            <p className="legal-page-updated">Dernière mise à jour : février 2026</p>

            <div className="legal-page-content">
              <h2>1. Éditeur du site</h2>
              <p>
                Le site <strong>{SITE_NAME}</strong> est édité par Action Nuisibles 13.
              </p>
              <p>Siège : Bouches-du-Rhône, France</p>
              <p>Email : contact@actionnuisibles13.com</p>
              <p>Téléphone : <a href="tel:+33759697355">+33 7 59 69 73 55</a></p>

              <h2>2. Hébergement</h2>
              <p>
                L’hébergement du site est assuré par <strong>GitHub Pages</strong> (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis — <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">pages.github.com</a>).
              </p>
              <p>
                Le nom de domaine est géré par <strong>OVH</strong> (OVH SAS, 2 rue Kellermann, 59100 Roubaix, France — <a href="https://www.ovh.com/" target="_blank" rel="noopener noreferrer">www.ovh.com</a>).
              </p>

              <h2>3. Propriété intellectuelle</h2>
              <p>
                L’ensemble du contenu de ce site (textes, images, graphismes, structure) est protégé par le droit d’auteur et le droit des marques. Toute reproduction ou représentation non autorisée est interdite.
              </p>

              <h2>4. Limitation de responsabilité</h2>
              <p>
                Les informations diffusées sur ce site le sont à titre indicatif. Action Nuisibles 13 s’efforce d’en assurer l’exactitude mais ne peut en garantir l’exhaustivité. L’utilisation des informations se fait sous la responsabilité de l’internaute.
              </p>

              <h2>5. Liens</h2>
              <p>
                Les liens vers des sites externes ne engagent pas la responsabilité d’Action Nuisibles 13 quant au contenu de ces sites. La création de liens vers ce site est soumise à notre accord préalable.
              </p>

              <h2>6. Droit applicable</h2>
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
