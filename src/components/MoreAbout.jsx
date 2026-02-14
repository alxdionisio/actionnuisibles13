import React from 'react';

function MoreAbout() {
  const trustNumbers = [
    { value: '99%', label: 'Taux de satisfaction client' },
    { value: '5,000+', label: 'Traitements réalisés' },
  ];

  return (
    <section className="more-about-section" aria-label="En savoir plus">
      <div className="container">
        <div className="more-about-inner">
          <div className="more-about-left">
            <h2 className="more-about-heading">
              Nuisibles éliminés, intervention efficace et clients satisfaits
            </h2>
          </div>
          <div className="more-about-right">
            <p className="more-about-paragraph">
              Chez Action Nuisibles 13, nous proposons des solutions personnalisées qui garantissent
              des résultats durables pour votre maison et votre entreprise, assurant une protection
              complète contre les nuisibles.
            </p>
            <div className="more-about-numbers">
              {trustNumbers.map((item) => (
                <div key={item.label} className="more-about-trust-item">
                  <p className="more-about-trust-value">{item.value}</p>
                  <p className="more-about-trust-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="more-about-line" aria-hidden="true" />
      </div>
    </section>
  );
}

export default MoreAbout;
