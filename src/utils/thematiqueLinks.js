import { thematiques } from '../data/thematiques';

/**
 * Mots-clés et expressions qui ont une page thématique associée.
 * slug = URL de la page (titre complet normalisé, ex. destruction-nid-de-guepes).
 * Ordre : expressions longues d'abord pour matcher "chenilles processionnaires" avant "chenilles".
 */
function getSlugByName(name) {
  const t = thematiques.find((x) => x.name === name);
  return t ? t.slug : null;
}

const THEMATIQUE_PATTERNS = [
  { slug: getSlugByName('Chenilles processionnaires'), patterns: ['chenilles processionnaires', 'chenille processionnaire'] },
  { slug: getSlugByName('Punaises de lit'), patterns: ['punaises de lit', 'punaise de lit'] },
  { slug: getSlugByName('Rats et souris'), patterns: ['rongeurs', 'rats', 'rat', 'souris'] },
  { slug: getSlugByName('Guêpes'), patterns: ['guêpes', 'guêpe'] },
  { slug: getSlugByName('Frelons'), patterns: ['frelons', 'frelon'] },
  { slug: getSlugByName('Cafards et blattes'), patterns: ['cafards', 'cafard', 'blattes', 'blatte'] },
  { slug: getSlugByName('Fourmis'), patterns: ['fourmis', 'fourmi'] },
].filter((p) => p.slug);

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Construit une regex pour un mot/phrase avec frontières (pas au milieu d'un mot). */
function makeWordRegex(pattern) {
  const escaped = escapeRegex(pattern).replace(/\s+/g, '\\s+');
  return new RegExp(`(?:^|[\\s,.;:!?()'"—-])(${escaped})(?=[\\s,.;:!?()'"—-]|$)`, 'gi');
}

/** Flatten avec slug pour chaque pattern, trié par longueur décroissante. */
const FLAT_PATTERNS = THEMATIQUE_PATTERNS.flatMap(({ slug, patterns }) =>
  patterns.map((p) => ({ slug, pattern: p, re: makeWordRegex(p) }))
).sort((a, b) => b.pattern.length - a.pattern.length);

/**
 * Trouve la première occurrence d'un mot-clé thématique dans text.
 * @returns {{ index: number, slug: string, match: string } | null}
 */
function findFirstMatch(text) {
  let best = null;
  for (const { slug, re } of FLAT_PATTERNS) {
    re.lastIndex = 0;
    const m = re.exec(text);
    if (!m) continue;
    const start = m.index + (m[0].length - m[1].length);
    if (best === null || start < best.start || (start === best.start && m[1].length > best.match.length)) {
      best = { start, end: start + m[1].length, slug, match: m[1] };
    }
  }
  return best;
}

/**
 * Découpe le texte en segments : texte brut ou { type: 'link', slug, value }.
 * @param {string} text
 * @returns {Array<{ type: 'text', value: string } | { type: 'link', slug: string, value: string }>}
 */
export function linkifyToSegments(text) {
  if (!text || typeof text !== 'string') return [{ type: 'text', value: String(text ?? '') }];
  const segments = [];
  let remaining = text;
  while (remaining.length > 0) {
    const found = findFirstMatch(remaining);
    if (!found) {
      segments.push({ type: 'text', value: remaining });
      break;
    }
    const before = remaining.slice(0, found.start);
    segments.push({ type: 'text', value: before });
    segments.push({ type: 'link', slug: found.slug, value: found.match });
    remaining = remaining.slice(found.end);
  }
  return segments;
}

export { THEMATIQUE_PATTERNS };
