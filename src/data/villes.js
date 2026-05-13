/**
 * Villes et villages de la zone d'intervention (PACA, Carro à Marseille et environs).
 * Slug utilisé dans l'URL : /intervention/:slug
 * lat/lng : coordonnées à 5 décimales utilisées dans le schéma Place.geo
 * context : phrase contextuelle locale unique (anti-doorway pages, signal GEO/SEO local)
 */
export const villes = [
  {
    name: 'Carro',
    slug: 'carro',
    lat: 43.32450,
    lng: 5.04230,
    context: "Village de pêcheurs au bord de la Méditerranée, Carro présente une forte humidité littorale favorisant les rongeurs dans les caves et les zones de stockage, ainsi que les guêpes dans les cabanons et jardins.",
  },
  {
    name: 'Martigues',
    slug: 'martigues',
    lat: 43.40650,
    lng: 5.05100,
    context: "Ville portuaire et industrielle traversée par des canaux, Martigues présente un risque élevé d'infestation de rongeurs dans les zones riveraines, les entrepôts portuaires et les copropriétés anciennes du centre-ville.",
  },
  {
    name: 'Sausset-les-Pins',
    slug: 'sausset-les-pins',
    lat: 43.33070,
    lng: 5.10570,
    context: "Commune littorale bordée de pinèdes, Sausset-les-Pins est particulièrement exposée aux chenilles processionnaires du pin et aux nids de guêpes en période estivale dans les jardins et combles.",
  },
  {
    name: 'Carry-le-Rouet',
    slug: 'carry-le-rouet',
    lat: 43.32770,
    lng: 5.14620,
    context: "Station balnéaire entourée de calanques et de pinèdes, Carry-le-Rouet est concernée chaque été par les chenilles processionnaires et les nids de guêpes dans les résidences secondaires et les jardins de villas.",
  },
  {
    name: 'Ensuès-la-Redonne',
    slug: 'ensues-la-redonne',
    lat: 43.34480,
    lng: 5.16630,
    context: "Village littoral aux nombreuses calanques et zones naturelles, Ensuès-la-Redonne voit régulièrement des nids de guêpes et de frelons asiatiques dans les garrigues et jardins privatifs.",
  },
  {
    name: 'Le Rove',
    slug: 'le-rove',
    lat: 43.36630,
    lng: 5.22850,
    context: "Commune rurale entre massifs et zones péri-urbaines, Le Rove est confronté à des infestations de rongeurs dans les hangars agricoles et les habitations isolées, ainsi qu'aux processionnaires dans les pins.",
  },
  {
    name: 'Châteauneuf-les-Martigues',
    slug: 'chateauneuf-les-martigues',
    lat: 43.38880,
    lng: 5.16970,
    context: "Commune en expansion à la périphérie de Martigues, Châteauneuf-les-Martigues est exposée aux nuisibles typiques des zones pavillonnaires : fourmis, guêpes en sous-toiture et rongeurs en sous-sols.",
  },
  {
    name: 'Marignane',
    slug: 'marignane',
    lat: 43.41540,
    lng: 5.21550,
    context: "Ville aéroportuaire et commerciale, Marignane est particulièrement concernée par les rongeurs dans les entrepôts et zones logistiques proches de l'aéroport Marseille-Provence et par les fourmis dans les lotissements.",
  },
  {
    name: 'Gignac-la-Nerthe',
    slug: 'gignac-la-nerthe',
    lat: 43.39500,
    lng: 5.23580,
    context: "Commune résidentielle entre Martigues et Marseille, Gignac-la-Nerthe voit fréquemment des invasions de fourmis et de cafards dans les lotissements récents et les copropriétés.",
  },
  {
    name: 'Les Pennes-Mirabeau',
    slug: 'les-pennes-mirabeau',
    lat: 43.41760,
    lng: 5.30940,
    context: "Zone mixte résidentielle et industrielle, Les Pennes-Mirabeau est exposée aux rongeurs dans ses entrepôts et parcs d'activités, et aux guêpes dans ses espaces verts et jardins de pavillons en été.",
  },
  {
    name: 'Vitrolles',
    slug: 'vitrolles',
    lat: 43.46230,
    lng: 5.24770,
    context: "Ville industrielle et commerciale à l'étang de Berre, Vitrolles concentre un fort risque de dératisation dans ses zones d'activité et ses entrepôts, et de désinsectisation dans ses logements collectifs.",
  },
  {
    name: 'Septèmes-les-Vallons',
    slug: 'septemes-les-vallons',
    lat: 43.38340,
    lng: 5.34800,
    context: "Commune de la vallée de l'Huveaune nord, Septèmes-les-Vallons présente des problèmes récurrents de cafards et de rongeurs dans ses immeubles anciens et de chenilles processionnaires dans les zones pavillonnaires.",
  },
  {
    name: 'Plan-de-Cuques',
    slug: 'plan-de-cuques',
    lat: 43.34150,
    lng: 5.44510,
    context: "Commune résidentielle au nord-est de Marseille, Plan-de-Cuques est régulièrement touchée par les fourmis, les cafards et les punaises de lit dans les copropriétés et les pavillons individuels.",
  },
  {
    name: 'Marseille',
    slug: 'marseille',
    lat: 43.29650,
    lng: 5.38180,
    context: "Premier port de France et deuxième ville française, Marseille présente une densité élevée de rongeurs dans ses canalisations, ses marchés et ses immeubles anciens, ainsi que des problèmes récurrents de punaises de lit liés aux flux touristiques.",
  },
  {
    name: 'Saint-Victoret',
    slug: 'saint-victoret',
    lat: 43.42020,
    lng: 5.23530,
    context: "Commune résidentielle calme à proximité de l'aéroport, Saint-Victoret est principalement concernée par les guêpes et frelons dans les jardins et par les rongeurs dans les combles et sous-sols.",
  },
  {
    name: 'Cabriès',
    slug: 'cabries',
    lat: 43.44590,
    lng: 5.37060,
    context: "Commune verdoyante entre Aix et Marseille, Cabriès est exposée aux chenilles processionnaires dans ses pins et aux nids de frelons asiatiques dans ses jardins arborés et ses zones boisées.",
  },
  {
    name: 'Bouc-Bel-Air',
    slug: 'bouc-bel-air',
    lat: 43.45730,
    lng: 5.40710,
    context: "Commune résidentielle bordée de forêts de pins, Bouc-Bel-Air est particulièrement concernée par les chenilles processionnaires et les nids de guêpes en sous-toiture des villas et propriétés.",
  },
  {
    name: 'Mimet',
    slug: 'mimet',
    lat: 43.46770,
    lng: 5.47300,
    context: "Village perché dans le massif de l'Étoile, Mimet est exposé aux rongeurs dans ses restanques et aux chenilles processionnaires dans ses pinèdes en altitude, ainsi qu'aux frelons asiatiques.",
  },
  {
    name: 'Simiane-Collongue',
    slug: 'simiane-collongue',
    lat: 43.43130,
    lng: 5.46490,
    context: "Commune rurale entre pinèdes et zones péri-urbaines, Simiane-Collongue est touchée par les processionnaires dans les quartiers résidentiels arborés et les rongeurs dans les exploitations agricoles.",
  },
  {
    name: 'Port-de-Bouc',
    slug: 'port-de-bouc',
    lat: 43.40590,
    lng: 4.98980,
    context: "Ville industrielle et portuaire à l'entrée du golfe de Fos, Port-de-Bouc est confrontée à un fort risque de dératisation dans ses zones portuaires, ses entrepôts et ses logements collectifs anciens.",
  },
  {
    name: 'Saint-Mitre-les-Remparts',
    slug: 'saint-mitre-les-remparts',
    lat: 43.45460,
    lng: 5.02710,
    context: "Commune médiévale entre étang de Berre et plaine de la Crau, Saint-Mitre-les-Remparts est exposée aux rongeurs dans ses zones humides et aux guêpes dans ses jardins, espaces verts et bâti ancien.",
  },
  {
    name: 'Fos-sur-Mer',
    slug: 'fos-sur-mer',
    lat: 43.43680,
    lng: 4.94790,
    context: "Commune industrielle abritant l'un des plus grands complexes portuaires de Méditerranée, Fos-sur-Mer présente un risque élevé de dératisation dans ses zones industrielles, ses entrepôts logistiques et ses zones d'activité.",
  },
  {
    name: 'La Couronne',
    slug: 'la-couronne',
    lat: 43.31300,
    lng: 5.03980,
    context: "Station balnéaire de la commune de Martigues, La Couronne est confrontée aux guêpes et frelons dans ses calanques et aux rongeurs dans ses zones humides littorales et ses cabanons.",
  },
  {
    name: 'Miramas',
    slug: 'miramas',
    lat: 43.58320,
    lng: 5.00220,
    context: "Commune industrielle et résidentielle de la plaine de la Crau, Miramas est touchée par les rongeurs dans ses zones agricoles et ses entrepôts logistiques, et par les fourmis dans ses lotissements récents.",
  },
  {
    name: 'Salon-de-Provence',
    slug: 'salon-de-provence',
    lat: 43.64060,
    lng: 5.09690,
    context: "Sous-préfecture des Bouches-du-Rhône au cœur de la Crau, Salon-de-Provence est concernée par les rongeurs dans ses centres anciens et ses espaces verts, et par les frelons asiatiques en progression dans la région.",
  },
  {
    name: 'Sainte-Croix / Saint-Pierre-les-Martigues',
    slug: 'sainte-croix-saint-pierre-les-martigues',
    lat: 43.38200,
    lng: 5.07600,
    context: "Secteur résidentiel et littoral de Martigues, ce quartier est exposé aux guêpes dans ses jardins, aux rongeurs dans ses zones humides et aux fourmis dans ses habitations récentes.",
  },
];

export function getVilleBySlug(slug) {
  return villes.find((v) => v.slug === slug);
}
