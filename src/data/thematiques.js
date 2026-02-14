/**
 * Pages thématiques par type de nuisible (SEO).
 * URL : /thematique/:slug (slug = titre complet normalisé, ex. /thematique/destruction-nid-de-guepes)
 */
function titleToSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export const thematiques = [
  {
    slug: titleToSlug('Dératisation rats et souris'),
    name: 'Rats et souris',
    title: 'Dératisation rats et souris',
    description:
      'Dératisation professionnelle contre les rats et souris dans les Bouches-du-Rhône. Intervention, prévention et suivi. Devis gratuit. Action Nuisibles 13.',
    keywords: 'dératisation, rats, souris, rongeurs, infestation, Bouches-du-Rhône',
    content: {
      intro:
        'Action Nuisibles 13 assure la dératisation contre les rats et souris dans les Bouches-du-Rhône. Les rongeurs peuvent transmettre des maladies, endommager câbles et denrées et proliférer rapidement. Notre équipe réalise un diagnostic, met en place un plan de dératisation adapté et assure un suivi pour éviter les réinfestations.',
      pourquoi:
        'Faire appel à un professionnel de la dératisation garantit une identification fiable des espèces (rat noir, rat surmulot, souris), la pose d\'appâts et de pièges sécurisés, le colmatage des points d\'entrée et une prévention durable. Les traitements en libre-service sont souvent insuffisants et peuvent exposer les occupants et les animaux.',
      comment:
        'Signes d\'une infestation de rats ou souris : crottes, traces de passage, bruits dans les cloisons ou les combles, câbles rongés, denrées abîmées, nids ou matériaux rongés. Une détection précoce permet un traitement plus simple et économique.',
      reflexe:
        'En cas de présence de rongeurs, évitez les produits en grande surface : mauvaise efficacité et risques pour la santé. Contactez un professionnel pour un diagnostic et un devis gratuit. Nous intervenons chez les particuliers, en entreprise et en établissement recevant du public.',
    },
  },
  {
    slug: titleToSlug('Destruction nid de guêpes'),
    name: 'Guêpes',
    title: 'Destruction nid de guêpes',
    description:
      'Destruction et neutralisation des nids de guêpes dans les Bouches-du-Rhône. Intervention sécurisée, particuliers et professionnels. Devis gratuit.',
    keywords: 'guêpes, nid de guêpes, destruction nid, piqûres, Bouches-du-Rhône',
    content: {
      intro:
        'Un nid de guêpes à proximité de votre habitation ou de votre lieu de travail représente un risque de piqûres, notamment pour les enfants et les personnes allergiques. Action Nuisibles 13 intervient dans les Bouches-du-Rhône pour détruire ou neutraliser les nids de guêpes en toute sécurité.',
      pourquoi:
        'Ne tentez jamais de détruire un nid de guêpes vous-même : le risque de piqûres multiples est réel et peut être grave en cas d\'allergie. Un professionnel équipé identifie le nid, choisit le bon moment d\'intervention et utilise les produits adaptés pour une neutralisation durable.',
      comment:
        'Les nids de guêpes se trouvent souvent sous les toits, dans les combles, les haies, les arbres ou les murs. Vous pouvez repérer des allées et venues régulières d\'insectes. En fin de saison, les nids sont plus volumineux et les guêpes plus agressives.',
      reflexe:
        'En cas de nid de guêpes, gardez vos distances et évitez les gestes brusques. Contactez-nous pour une intervention sécurisée. Nous proposons des créneaux rapides et un devis gratuit pour la destruction du nid.',
    },
  },
  {
    slug: titleToSlug('Destruction nid de frelons et frelon asiatique'),
    name: 'Frelons',
    title: 'Destruction nid de frelons et frelon asiatique',
    description:
      'Destruction des nids de frelons et frelon asiatique dans les Bouches-du-Rhône. Intervention rapide et sécurisée. Devis gratuit. Action Nuisibles 13.',
    keywords: 'frelons, frelon asiatique, nid de frelons, destruction nid, Bouches-du-Rhône',
    content: {
      intro:
        'Les frelons, et en particulier le frelon asiatique, peuvent constituer un danger pour les personnes et les abeilles. Action Nuisibles 13 intervient dans les Bouches-du-Rhône pour la destruction des nids de frelons et de frelons asiatiques, avec un équipement adapté et des protocoles sécurisés.',
      pourquoi:
        'La destruction d\'un nid de frelons doit être confiée à un professionnel : piqûres douloureuses, risque allergique et comportement agressif en cas de perturbation. Le frelon asiatique fait l\'objet de mesures de lutte encadrées ; notre équipe applique les bonnes pratiques pour une neutralisation efficace.',
      comment:
        'Les nids de frelons peuvent être aériens (arbres, haies) ou dans des cavités (murs, trous). Le frelon asiatique construit souvent des nids volumineux et sphériques. Une activité intense d\'insectes autour d\'un point fixe indique généralement la présence d\'un nid à proximité.',
      reflexe:
        'Ne pas approcher un nid de frelons ni tenter de le détruire soi-même. Signalez-le et faites intervenir un professionnel. Nous nous déplaçons dans tout le département pour une destruction sécurisée et un devis gratuit.',
    },
  },
  {
    slug: titleToSlug('Traitement chenilles processionnaires'),
    name: 'Chenilles processionnaires',
    title: 'Traitement chenilles processionnaires',
    description:
      'Destruction des nids et traitement des chenilles processionnaires du pin et du chêne dans les Bouches-du-Rhône. Risque urticant. Devis gratuit.',
    keywords: 'chenilles processionnaires, pin, chêne, urticant, nid, Bouches-du-Rhône',
    content: {
      intro:
        'Les chenilles processionnaires du pin et du chêne sont urticantes et représentent un risque pour les humains et les animaux (chiens, chats). Action Nuisibles 13 propose dans les Bouches-du-Rhône la destruction des nids et des traitements préventifs pour protéger vos espaces verts et votre habitat.',
      pourquoi:
        'Les poils urticants des chenilles processionnaires peuvent provoquer des réactions cutanées et des troubles respiratoires. Les animaux qui les touchent ou les lèchent peuvent être gravement affectés. Un professionnel identifie les nids, les élimine en sécurité et peut mettre en place un traitement préventif pour limiter les pontes.',
      comment:
        'Les nids blancs et soyeux dans les pins sont typiques de la chenille processionnaire du pin. Les processions au sol (file de chenilles) sont un autre signe. Pour le chêne, les nids sont fixés sur les branches. En cas de doute, faites identifier par un professionnel.',
      reflexe:
        'Évitez tout contact avec les chenilles et les nids. Ne pas laisser les animaux s\'approcher des zones infestées. Contactez-nous pour un diagnostic et un plan d\'intervention (destruction des nids, traitement préventif). Devis gratuit dans les Bouches-du-Rhône.',
    },
  },
  {
    slug: titleToSlug('Élimination punaises de lit'),
    name: 'Punaises de lit',
    title: 'Élimination punaises de lit',
    description:
      'Traitement professionnel contre les punaises de lit dans les Bouches-du-Rhône. Désinsectisation et protocole adapté. Devis gratuit. Action Nuisibles 13.',
    keywords: 'punaises de lit, désinsectisation, traitement, literie, Bouches-du-Rhône',
    content: {
      intro:
        'Les punaises de lit sont un fléau croissant dans les foyers et les hébergements. Elles se cachent dans les literies, canapés et recoins et piquent la nuit. Action Nuisibles 13 applique dans les Bouches-du-Rhône des protocoles de désinsectisation éprouvés pour vous en débarrasser durablement.',
      pourquoi:
        'Une infestation de punaises de lit nécessite un traitement méthodique : identification des foyers, traitement des zones de repos et des abords, et souvent plusieurs passages. Les solutions en libre-service sont généralement insuffisantes et peuvent disperser les punaises. Un professionnel garantit un protocole adapté et un suivi.',
      comment:
        'Signes évocateurs : piqûres alignées ou groupées au réveil, traces de sang sur les draps, déjections noires, œufs et exuvies, odeur caractéristique en cas d\'infestation importante. Les punaises se cachent dans les coutures du matelas, le sommier, les fentes et derrière les plinthes.',
      reflexe:
        'En cas de suspicion, évitez de déplacer literie et meubles sans précaution pour ne pas étendre l\'infestation. Contactez un professionnel pour un diagnostic et un devis. Nous intervenons chez les particuliers et les professionnels (hôtels, résidences) dans les Bouches-du-Rhône.',
    },
  },
  {
    slug: titleToSlug('Désinsectisation cafards et blattes'),
    name: 'Cafards et blattes',
    title: 'Désinsectisation cafards et blattes',
    description:
      'Élimination des cafards et blattes dans les Bouches-du-Rhône. Désinsectisation professionnelle pour particuliers et professionnels. Devis gratuit.',
    keywords: 'cafards, blattes, désinsectisation, insectes, Bouches-du-Rhône',
    content: {
      intro:
        'Les cafards et blattes prolifèrent dans les cuisines, les gaines et les endroits chauds et humides. Ils peuvent contaminer les denrées et transmettre des pathogènes. Action Nuisibles 13 assure la désinsectisation contre les cafards et blattes dans les Bouches-du-Rhône pour particuliers et professionnels.',
      pourquoi:
        'Une infestation de cafards nécessite un traitement ciblé (gel, appâts, pulvérisation selon les cas) et des mesures d\'hygiène et d\'étanchéité. Un professionnel identifie les espèces, repère les zones de passage et les nids, et applique un protocole durable pour limiter les réinfestations.',
      comment:
        'Présence d\'insectes marron/noirs à carapace, souvent la nuit ; œufs (oothèques), exuvies et déjections dans les recoins ; odeur désagréable en cas de forte infestation. Les blattes germaniques et orientales sont les plus courantes en habitat.',
      reflexe:
        'Ne vous contentez pas d\'insecticides en spray : ils dispersent souvent les cafards sans éliminer les nids. Faites appel à un professionnel pour un diagnostic et un plan de désinsectisation. Devis gratuit pour particuliers et professionnels dans les Bouches-du-Rhône.',
    },
  },
  {
    slug: titleToSlug('Traitement contre les fourmis'),
    name: 'Fourmis',
    title: 'Traitement contre les fourmis',
    description:
      'Lutte contre les fourmis et désinsectisation dans les Bouches-du-Rhône. Traitement ciblé pour particuliers et professionnels. Devis gratuit.',
    keywords: 'fourmis, désinsectisation, invasion, traitement, Bouches-du-Rhône',
    content: {
      intro:
        'Une invasion de fourmis dans la maison ou en entreprise peut devenir très gênante et contaminer les denrées. Action Nuisibles 13 propose dans les Bouches-du-Rhône des traitements ciblés contre les fourmis : identification des colonies, traitement des points d\'entrée et des pistes, et conseils pour limiter les retours.',
      pourquoi:
        'Les fourmis forment des colonies organisées ; traiter uniquement les individus visibles est rarement suffisant. Un professionnel cible les nids et les pistes avec des produits adaptés (gel, appâts) pour une efficacité durable et une réduction des réinfestations.',
      comment:
        'Pistes de fourmis régulières, fourmis dans la cuisine ou près des fenêtres, amas de terre ou de débris (nid en extérieur). En période chaude, les fourmis entrent surtout pour chercher nourriture et eau.',
      reflexe:
        'Colmater les petites fissures et garder les plans de travail et les denrées propres peut limiter les entrées. Pour une invasion installée, un traitement professionnel est plus efficace. Contactez-nous pour un devis gratuit dans les Bouches-du-Rhône.',
    },
  },
];

export function getThematiqueBySlug(slug) {
  return thematiques.find((t) => t.slug === slug);
}
