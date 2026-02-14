import React from 'react';
import { Link } from 'react-router-dom';
import { villes } from '../data/villes';

function LieuxIntervention() {
  return (
    <section id="lieux-intervention" className="section lieux-intervention-section">
      <div className="container">
        <p className="section-label">Couverture</p>
        <h2 className="section-title">Lieux d'intervention</h2>
        <p className="lieux-intervention-desc">
          Action Nuisibles 13 intervient dans toute la région PACA, de Carro à Marseille et alentours.
          Dératisation, désinsectisation, destruction de nids de guêpes et de frelons, traitement des chenilles
          processionnaires et lutte contre les nuisibles : nous nous déplaçons chez les particuliers et les
          professionnels pour des interventions rapides et efficaces dans les Bouches-du-Rhône.
        </p>
        <nav className="lieux-intervention-grid" aria-label="Villes et villages desservis">
          {villes.map((ville) => (
            <Link
              key={ville.slug}
              to={`/intervention/${ville.slug}`}
              className="lieux-intervention-link"
            >
              {ville.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default LieuxIntervention;
