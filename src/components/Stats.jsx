import React from 'react';

function Stats() {
  const stats = [
    { number: '15+', label: "Années d'expérience" },
    { number: '500+', label: 'Clients satisfaits' },
    { number: '1k+', label: 'Interventions par an' },
    { number: '5k+', label: 'Diagnostics réalisés' },
  ];

  return (
    <section className="section stats-section numbers-section" aria-label="Chiffres clés">
      <div className="container numbers-container">
        <div className="stats-grid numbers-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item numbers-item">
              <p className="stat-number numbers-value">{stat.number}</p>
              <p className="stat-label numbers-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
