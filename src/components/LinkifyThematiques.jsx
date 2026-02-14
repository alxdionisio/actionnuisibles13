import React, { cloneElement, isValidElement } from 'react';
import { Link } from 'react-router-dom';
import { linkifyToSegments } from '../utils/thematiqueLinks';

/**
 * Rend un texte en transformant les mots-clés thématiques en liens vers /thematique/:slug.
 * Style : lien cliquable avec cursor pointer, pas d'effet hover (couleur/soulignement).
 */
export function linkifyThematiques(text) {
  if (text == null || text === '') return null;
  const str = String(text);
  const segments = linkifyToSegments(str);
  return segments.map((seg, i) => {
    if (seg.type === 'text') return <React.Fragment key={i}>{seg.value}</React.Fragment>;
    return (
      <Link key={i} to={`/thematique/${seg.slug}`} className="thematique-keyword-link">
        {seg.value}
      </Link>
    );
  });
}

/**
 * Traite récursivement les children : les chaînes sont linkifiées, on ne touche pas aux Link/a.
 */
function processChildren(children) {
  if (children == null) return null;
  if (typeof children === 'string') return linkifyThematiques(children);
  if (Array.isArray(children)) return children.map((child, i) => <React.Fragment key={i}>{processChildren(child)}</React.Fragment>);
  if (isValidElement(children) && (children.type === Link || children.type === 'a')) return children;
  if (isValidElement(children) && children.props && 'children' in children) {
    return cloneElement(children, {}, processChildren(children.props.children));
  }
  return children;
}

/**
 * Wrapper qui linkifie récursivement tout le texte à l'intérieur (sauf dans les liens existants).
 * À envelopper autour du contenu d'une section ou d'un article.
 */
export function LinkifyThematiques({ children }) {
  return <>{processChildren(children)}</>;
}
