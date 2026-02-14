import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { LinkifyThematiques, linkifyThematiques } from '../components/LinkifyThematiques';
import { CtaArrowIcon } from '../components/CtaArrowIcon';
import { articles, getArticleBySlug } from '../data/articles';
import { SITE_URL } from '../utils/siteConfig';

function ArticleDetailPage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <main>
        <section className="section">
          <div className="container">
            <p>Article introuvable.</p>
            <Link to="/articles">Retour aux articles</Link>
          </div>
        </section>
      </main>
    );
  }

  const { title, date, category, image, content } = article;
  const articleUrl = `${SITE_URL.replace(/\/$/, '')}/articles/${slug}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL.replace(/\/$/, '')}${image.startsWith('/') ? image : `/${image}`}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    image: imageUrl,
    author: { '@type': 'Organization', name: 'Action Nuisibles 13' },
    publisher: { '@type': 'Organization', name: 'Action Nuisibles 13' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
  };

  return (
    <>
      <Seo
        title={title}
        description={content.introParagraph?.slice(0, 160) || content.introHeading}
        canonicalPath={`/articles/${slug}`}
        type="article"
        image={image}
        structuredData={articleSchema}
      />
      <main>
        {/* Hero article : fond sombre, label, titre, méta, image */}
        <section className="article-hero page-hero--dark">
          <div className="container">
            <div className="article-hero-inner">
              <p className="article-hero-label">Article</p>
              <h1 className="article-hero-title">{title}</h1>
              <div className="article-hero-meta">
                <span className="article-hero-date">{date}</span>
                <span className="article-hero-sep" aria-hidden="true">•</span>
                <span className="article-hero-category">{category}</span>
              </div>
              <div className="article-hero-image-wrap">
                <img src={image} alt={title} className="article-hero-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Contenu article : fond blanc, intro, liste numérotée, optionnel bullets, conclusion */}
        <article className="section article-content-section">
          <div className="container">
            <div className="article-content">
              <LinkifyThematiques>
              <h2 className="article-content-intro-heading">{content.introHeading}</h2>
              <p className="article-content-intro-p">{content.introParagraph}</p>

              <ol className="article-content-list article-content-list--numbered">
                {content.numberedItems.map((item, i) => (
                  <li key={i}>
                    <strong>{item.title}</strong>
                    <span className="article-content-list-text">{linkifyThematiques(item.text)}</span>
                  </li>
                ))}
              </ol>

              {content.bulletSection && (
                <div className="article-content-block">
                  <h3 className="article-content-subheading">{content.bulletSection.title}</h3>
                  <ul className="article-content-list article-content-list--bulleted">
                    {content.bulletSection.items.map((item, i) => (
                      <li key={i}>{linkifyThematiques(item)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {(content.conclusionTitle || content.conclusionParagraph) && (
                <div className="article-content-block article-content-conclusion">
                  {content.conclusionTitle && (
                    <h3 className="article-content-subheading">{content.conclusionTitle}</h3>
                  )}
                  {content.conclusionParagraph && (
                    <p className="article-content-intro-p">{linkifyThematiques(content.conclusionParagraph)}</p>
                  )}
                </div>
              )}
              </LinkifyThematiques>
            </div>

            <section className="article-content-section article-others-section" aria-labelledby="article-others-heading">
              <h2 id="article-others-heading" className="article-content-subheading">Autres articles</h2>
              <p className="article-links-desc">
                Découvrez d'autres conseils et astuces pour mieux connaître les nuisibles et adopter les bons réflexes.
              </p>
              <nav className="article-others-grid" aria-label="Articles recommandés">
                {articles
                  .filter((a) => a.slug !== slug)
                  .slice(0, 3)
                  .map((a) => (
                    <Link key={a.id} to={`/articles/${a.slug}`} className="article-other-card">
                      <div className="article-other-image">
                        <img src={a.image} alt="" loading="lazy" />
                      </div>
                      <div className="article-other-content">
                        <span className="article-other-meta">{a.date} · {a.readMinutes} min</span>
                        <h3 className="article-other-title">{a.title}</h3>
                      </div>
                      <span className="article-other-arrow" aria-hidden>→</span>
                    </Link>
                  ))}
              </nav>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}

export default ArticleDetailPage;
