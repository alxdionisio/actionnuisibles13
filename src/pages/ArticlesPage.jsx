import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { CtaArrowIcon } from '../components/CtaArrowIcon';
import { IconBullet } from '../components/Icons';
import { articles } from '../data/articles';
import { track } from '../utils/tracking';

function ArticlesPage() {
  return (
    <>
      <Seo
        title="Articles et conseils"
        description="Articles ludiques et pédagogiques sur les nuisibles : apprendre à les reconnaître, comprendre leurs comportements et adopter les bons réflexes. Conseils et astuces pour toute la famille dans les Bouches-du-Rhône."
        canonicalPath="/articles"
      />
      <main>
        {/* Hero */}
        <section className="page-hero page-hero--dark">
          <div className="container">
            <div className="page-hero-inner page-hero-inner--with-btn">
              <div className="page-hero-content">
                <h1 className="page-hero-title">
                  Apprendre et comprendre les nuisibles
                </h1>
                <p className="page-hero-paragraph">
                  Découvrez des articles ludiques et instructifs pour tout savoir sur les nuisibles, leurs comportements et les bons réflexes à adopter. Conseils, astuces et découvertes pour toute la famille.
                </p>
              </div>
              <Link to="/contact" className="page-hero-btn page-hero-btn--yellow cta-yellow-arrow-btn">
                <span>Nous contacter</span>
                <CtaArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* Grille articles */}
        <section className="section" style={{ background: 'var(--bg-white)' }}>
          <div className="container">
            <div className="blog-grid">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.slug}`}
                  className="blog-card"
                  onClick={() => track('article_click', { article_title: article.title })}
                >
                  <div className="blog-image">
                    <img src={article.image} alt={article.title} loading="lazy" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span>{article.date}</span>
                      <IconBullet size={4} className="blog-meta-bullet" />
                      <span>{article.readMinutes} min de lecture</span>
                    </div>
                    <h3 className="blog-title">{article.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ArticlesPage;
