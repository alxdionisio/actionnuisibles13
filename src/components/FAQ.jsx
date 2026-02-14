import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CtaArrowIcon } from './CtaArrowIcon';
import { linkifyThematiques } from './LinkifyThematiques';
import { faqItems } from '../data/faq';

function FAQ() {
  const [openIndices, setOpenIndices] = useState(new Set());
  const faqs = faqItems.slice(0, 5);

  const toggleFAQ = (index) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const isOpen = (index) => openIndices.has(index);

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-left">
            <div className="faq-title-block">
              <p className="faq-label">FAQ</p>
              <h2 className="faq-heading">Tout ce que vous devez savoir sur nos interventions</h2>
            </div>
            <Link to="/faq" className="faq-cta-link cta-yellow-arrow-btn">
              <span>Toutes les questions</span>
              <CtaArrowIcon />
            </Link>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${isOpen(index) ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen(index)}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <h3 className="faq-question-text">{faq.question}</h3>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen(index) ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p>{linkifyThematiques(faq.answer)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
