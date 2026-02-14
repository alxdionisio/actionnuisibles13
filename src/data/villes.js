/**
 * Villes et villages de la zone d'intervention (PACA, Carro à Marseille et environs).
 * Slug utilisé dans l'URL : /intervention/:slug
 */
export const villes = [
  { name: 'Carro', slug: 'carro' },
  { name: 'Martigues', slug: 'martigues' },
  { name: 'Sausset-les-Pins', slug: 'sausset-les-pins' },
  { name: 'Carry-le-Rouet', slug: 'carry-le-rouet' },
  { name: 'Ensuès-la-Redonne', slug: 'ensues-la-redonne' },
  { name: 'Le Rove', slug: 'le-rove' },
  { name: 'Châteauneuf-les-Martigues', slug: 'chateauneuf-les-martigues' },
  { name: 'Marignane', slug: 'marignane' },
  { name: 'Gignac-la-Nerthe', slug: 'gignac-la-nerthe' },
  { name: 'Les Pennes-Mirabeau', slug: 'les-pennes-mirabeau' },
  { name: 'Vitrolles', slug: 'vitrolles' },
  { name: 'Septèmes-les-Vallons', slug: 'septemes-les-vallons' },
  { name: 'Plan-de-Cuques', slug: 'plan-de-cuques' },
  { name: 'Marseille', slug: 'marseille' },
  { name: 'Saint-Victoret', slug: 'saint-victoret' },
  { name: 'Cabriès', slug: 'cabries' },
  { name: 'Bouc-Bel-Air', slug: 'bouc-bel-air' },
  { name: 'Mimet', slug: 'mimet' },
  { name: 'Simiane-Collongue', slug: 'simiane-collongue' },
  { name: 'Port-de-Bouc', slug: 'port-de-bouc' },
  { name: 'Saint-Mitre-les-Remparts', slug: 'saint-mitre-les-remparts' },
  { name: 'Fos-sur-Mer', slug: 'fos-sur-mer' },
  { name: 'La Couronne', slug: 'la-couronne' },
  { name: 'Miramas', slug: 'miramas' },
  { name: 'Salon-de-Provence', slug: 'salon-de-provence' },
  { name: 'Sainte-Croix / Saint-Pierre-les-Martigues', slug: 'sainte-croix-saint-pierre-les-martigues' },
];

export function getVilleBySlug(slug) {
  return villes.find((v) => v.slug === slug);
}
