/**
 * public/llms.txt est écrit à la main, et c'est voulu : sa prose n'est pas
 * dérivable. Ce qui dérive, ce sont ses références — l'audit y a trouvé deux
 * slugs morts et une liste de communes qui annonçait des villes sans page.
 *
 * Ce contrôle ne remplace pas l'édition manuelle, il l'empêche de mentir :
 * toute URL citée doit exister au sitemap, et toute commune annoncée doit
 * avoir sa page.
 *
 * Exécution : node tests/llms-txt.test.js (après npm run build, qui régénère
 * le sitemap).
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { villes } from '../src/data/villes.js';

const llms = fs.readFileSync(new URL('../public/llms.txt', import.meta.url), 'utf-8');
const sitemap = fs.readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf-8');

const urlsSitemap = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
assert.ok(urlsSitemap.size > 0, 'sitemap vide — lancer npm run build avant');

// Toute URL du site citée dans llms.txt doit correspondre à une page réelle.
const citees = [...llms.matchAll(/https:\/\/www\.actionnuisibles13\.com\/[^\s)]*/g)].map((m) =>
  m[0].replace(/[.,;]$/, '')
);
const orphelines = [...new Set(citees)].filter((u) => !urlsSitemap.has(u));
assert.deepEqual(orphelines, [], `URL citée dans llms.txt sans page correspondante :\n  ${orphelines.join('\n  ')}`);

// Les communes annoncées doivent toutes avoir une entrée dans villes.js.
const bloc = llms.match(/Communes couvertes[^:]*:\s*([^\n]+)/);
assert.ok(bloc, 'bloc « Communes couvertes » introuvable dans llms.txt');
const connues = new Set(villes.map((v) => v.name));
const inventees = bloc[1]
  .split(',')
  .map((s) => s.trim().replace(/\.$/, ''))
  .filter(Boolean)
  .filter((nom) => !connues.has(nom));
assert.deepEqual(inventees, [], `commune annoncée sans page :\n  ${inventees.join('\n  ')}`);

console.log(`llms-txt.test.js : OK (${new Set(citees).size} URL, ${connues.size} communes)`);
