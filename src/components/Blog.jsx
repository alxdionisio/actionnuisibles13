import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import { CtaArrowIcon } from './CtaArrowIcon';
import { articles } from '../data/articles';
import { track } from '../utils/tracking';

function Blog() {

  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <div className="blog-header-grid">
          <div className="blog-header-left">
            <p className="blog-label">Articles</p>
            <h2 className="blog-heading">
              Nos derniers articles et conseils d'experts
            </h2>
          </div>
          <div className="blog-header-right">
            <Link to="/articles" className="blog-cta-link cta-yellow-arrow-btn">
              <span>Tous nos articles</span>
              <CtaArrowIcon />
            </Link>
          </div>
        </div>

        <div className="blog-grid">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}`}
              className="blog-card"
              onClick={() => track('article_click', { article_title: article.title, from: 'home' })}
            >
              <div className="blog-image">
                <OptimizedImage src={article.image} alt={article.title} width={630} height={420} loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-meta-date">{article.date}</span>
                  <span className="blog-meta-dot" aria-hidden="true" />
                  <span className="blog-meta-read">
                    {article.readMinutes} min de lecture
                  </span>
                </div>
                <h3 className="blog-title">{article.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
