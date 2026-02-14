import React from 'react';
import { nuisiblesStrip } from '../utils/publicAssets';

function NuisiblesStrip() {
  return (
    <section className="nuisibles-strip" aria-label="Nuisibles traités">
      <div className="nuisibles-strip-inner">
        <div className="nuisibles-strip-track">
          {nuisiblesStrip.map((item) => (
            <div key={item.src} className="nuisibles-strip-item">
              <img
                src={item.src}
                alt={item.label}
                className="nuisibles-strip-img"
                loading="lazy"
              />
              <span className="nuisibles-strip-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NuisiblesStrip;
