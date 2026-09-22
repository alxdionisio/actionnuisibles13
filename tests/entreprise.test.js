/**
 * Contrôle du contrat « champ vide = champ omis ».
 * Émettre "vatID": "" dans le JSON-LD public serait publier une donnée légale fausse.
 *
 * Exécution : node tests/entreprise.test.js
 */
import assert from 'node:assert/strict';
import { omitEmpty, ORGANIZATION, ENTREPRISE, buildIdentitySchema } from '../src/data/entreprise.js';

// Valeurs vides retirées, valeurs renseignées conservées.
assert.deepEqual(omitEmpty({ a: '', b: null, c: undefined, d: 'ok' }), { d: 'ok' });

// Récursion : un objet imbriqué vidé disparaît entièrement.
assert.equal(omitEmpty({ x: { y: '', z: null } }), undefined);
assert.deepEqual(omitEmpty({ x: { y: '', z: 'ok' } }), { x: { z: 'ok' } });

// Un objet réduit à son seul @type ne porte plus d'information : il doit disparaître,
// sinon le JSON-LD se remplit de {"@type":"PostalAddress"} vides.
assert.equal(omitEmpty({ '@type': 'GeoCoordinates', latitude: null, longitude: null }), undefined);
assert.deepEqual(omitEmpty({ '@type': 'PostalAddress', postalCode: '13800' }), {
  '@type': 'PostalAddress',
  postalCode: '13800',
});

// Tableaux : les trous sont compactés, un tableau vide disparaît.
assert.equal(omitEmpty(['']), undefined);
assert.deepEqual(omitEmpty(['', 'ok']), ['ok']);

// 0 et false sont des valeurs légitimes, pas des vides.
assert.deepEqual(omitEmpty({ n: 0, b: false }), { n: 0, b: false });

// Le schéma réellement publié ne contient aucune chaîne vide ni null.
const serialise = JSON.stringify(ORGANIZATION);
assert.equal(serialise.match(/"[a-zA-Z@]+":(""|null)/), null, 'champ vide publié dans le JSON-LD');

// L'adresse du siège est complète : c'est elle qui rend l'entreprise identifiable.
assert.equal(ORGANIZATION.address.addressLocality, 'Istres');
assert.equal(ORGANIZATION.address.postalCode, '13800');
assert.ok(ORGANIZATION.address.streetAddress);

// Tant que les champs légaux ne sont pas renseignés, ils restent absents du schéma.
if (!ENTREPRISE.siret) assert.equal(ORGANIZATION.identifier, undefined);
if (!ENTREPRISE.googleBusinessUrl) assert.equal(ORGANIZATION.sameAs, undefined);
if (ENTREPRISE.geo.lat === null) assert.equal(ORGANIZATION.geo, undefined);

// La franchise en base est une mention légale, pas un identifiant fiscal :
// elle ne doit jamais se retrouver dans vatID.
if (ENTREPRISE.tvaFranchiseEnBase && !ENTREPRISE.tvaIntracom) {
  assert.equal(ORGANIZATION.vatID, undefined, 'vatID publié sans numéro de TVA réel');
}

// Un seul axe renseigné ne doit JAMAIS produire un point géographique tronqué.
{
  const original = { ...ENTREPRISE.geo };
  ENTREPRISE.geo = { lat: 43.5131, lng: null };
  assert.equal(buildIdentitySchema().geo, undefined, 'geo partiel publié');
  ENTREPRISE.geo = { lat: null, lng: 4.9875 };
  assert.equal(buildIdentitySchema().geo, undefined, 'geo partiel publié');
  ENTREPRISE.geo = { lat: 43.5131, lng: 4.9875 };
  assert.deepEqual(buildIdentitySchema().geo, {
    '@type': 'GeoCoordinates',
    latitude: 43.5131,
    longitude: 4.9875,
  });
  ENTREPRISE.geo = original;
}

console.log('entreprise.test.js : OK');
