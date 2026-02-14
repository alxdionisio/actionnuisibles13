import { images } from '../utils/publicAssets';

/**
 * Données des services : liste pour cartes (home, /services) et contenu des pages détail.
 * Chaque service a un slug utilisé dans l’URL : /services/:slug
 */
export const services = [
  {
    id: 1,
    slug: 'lutte-anti-nuisibles-pour-particuliers',
    title: 'Lutte anti-nuisibles complète pour les particuliers',
    description:
      'Protégez votre maison des nuisibles grâce à nos services sur mesure qui ciblent et éliminent efficacement les indésirables.',
    image: images.nidAbeilles,
    heroImage: images.nidAbeilles,
    heroSubtitle:
      'Des solutions efficaces et respectueuses de l’environnement pour protéger votre foyer des nuisibles dans les Bouches-du-Rhône.',
    content: {
      intro:
        'Votre maison est un refuge pour vous et votre famille. Nous vous aidons à le garder sain et sûr en éliminant les nuisibles de manière durable et en mettant en place des mesures préventives adaptées.',
      whyTitle: 'Pourquoi Action Nuisibles 13 pour votre maison ?',
      whyItems: [
        {
          title: 'Techniciens experts',
          text: 'Notre équipe est hautement qualifiée et formée aux dernières techniques de lutte anti-nuisibles, pour un résultat optimal et durable.',
        },
        {
          title: 'Traitements sûrs et écologiques',
          text: 'Nous accordons la priorité à la sécurité de votre famille et de vos animaux. Nos produits et méthodes respectent l’environnement tout en restant très efficaces.',
        },
        {
          title: 'Mesures préventives',
          text: 'En plus de traiter les infestations existantes, nous mettons en place des actions préventives pour limiter les risques de retour des nuisibles.',
        },
      ],
      processTitle: 'Notre processus d’intervention',
      processSteps: [
        {
          title: 'Inspection',
          text: 'Nos professionnels commencent par une inspection complète de votre habitation pour identifier les nuisibles, les zones à risque et les points d’entrée.',
        },
        {
          title: 'Plan de traitement personnalisé',
          text: 'Sur la base de nos observations, nous définissons un plan de traitement adapté à votre situation et à vos contraintes.',
        },
        {
          title: 'Suivi et maintenance confirmés',
          text: 'Après le traitement initial, nous assurons un suivi et des conseils de maintenance pour garantir une protection durable.',
        },
      ],
      pestsTitle: 'Nuisibles courants que nous traitons',
      pestsIntro: 'Nous intervenons sur l’ensemble des nuisibles les plus fréquents en habitat individuel.',
      pestsItems: [
        {
          title: 'Rongeurs',
          text: 'Souris, rats et autres rongeurs peuvent endommager vos biens et transmettre des maladies. Nous mettons en place des solutions de dératisation efficaces et propres.',
        },
        {
          title: 'Insectes',
          text: 'Fourmis, termites, cafards et araignées peuvent proliférer rapidement. Nos traitements ciblés permettent de les éliminer et de limiter les réinfestations.',
        },
        {
          title: 'Guêpes et frelons',
          text: 'Nids de guêpes ou de frelons à proximité de votre habitation ? Nous intervenons pour retirer ou neutraliser les nids en toute sécurité et vous permettre de profiter de votre extérieur en toute sérénité.',
        },
        {
          title: 'Chenilles processionnaires',
          text: 'Les chenilles processionnaires du pin ou du chêne représentent un risque pour les humains et les animaux. Nous proposons des interventions de destruction des nids et des traitements préventifs adaptés.',
        },
        {
          title: 'Punaises de lit',
          text: 'Problème croissant dans les foyers, les punaises de lit nécessitent une intervention méthodique. Nous utilisons des protocoles éprouvés pour vous en débarrasser.',
        },
      ],
      advantagesTitle: 'Avantages de notre service anti-nuisibles pour particuliers',
      advantagesItems: [
        {
          title: 'Tranquillité d’esprit',
          text: 'Profitez de votre maison sans vous soucier des nuisibles. Nous prenons en charge l’ensemble du processus, de l’inspection au suivi.',
        },
        {
          title: 'Solutions sûres et fiables',
          text: 'Nos traitements sont conçus pour être efficaces tout en préservant la santé des occupants et des animaux de compagnie.',
        },
        {
          title: 'Tarifs abordables et formules flexibles',
          text: 'Nous proposons des prix transparents et des formules adaptées à vos besoins, y compris des interventions ponctuelles ou des contrats d’entretien.',
        },
      ],
      ctaText: 'Contactez-nous pour planifier une intervention ou obtenir un devis personnalisé.',
    },
  },
  {
    id: 2,
    slug: 'solutions-anti-nuisibles-entreprises',
    title: 'Solutions anti-nuisibles pour les entreprises',
    description:
      'Protégez votre activité avec nos services anti-nuisibles spécialisés, pour éviter toute perturbation et garantir un environnement sûr et sain.',
    image: images.nuisiblesSolutionPro,
    heroImage: images.nuisiblesSolutionPro,
    heroSubtitle:
      'Protégez votre activité avec nos services anti-nuisibles spécialisés, pour éviter toute perturbation et garantir un environnement sain et sûr.',
    content: {
      intro:
        'Protégez votre entreprise grâce à nos services spécialisés de lutte anti-nuisibles. Action Nuisibles 13 accompagne les professionnels des Bouches-du-Rhône avec une expertise reconnue et des interventions conformes aux normes sanitaires. Que vous soyez dans la restauration, le commerce ou les établissements de santé, nous mettons en place des solutions sur mesure pour préserver la sécurité de vos locaux et de vos équipes.',
      whyTitle: 'Pourquoi Action Nuisibles 13 est votre partenaire de confiance ?',
      whyItems: [
        {
          title: 'Solutions anti-nuisibles complètes',
          text: 'De l’inspection à la prévention, nous couvrons l’ensemble des besoins des professionnels : rongeurs, insectes, guêpes et frelons, chenilles processionnaires, et nuisibles occasionnels.',
        },
        {
          title: 'Perturbations minimales',
          text: 'Nous intervenons en dehors des heures d’ouverture si besoin et utilisons des méthodes qui limitent la gêne pour votre activité.',
        },
        {
          title: 'Conformité aux normes sanitaires',
          text: 'Nos interventions respectent la réglementation en vigueur. Nous fournissons les documents et rapports nécessaires pour vos contrôles et audits.',
        },
      ],
      processTitle: 'Notre processus d’intervention pour les professionnels',
      processSteps: [
        {
          title: 'Inspection initiale',
          text: 'Nous commençons par une inspection approfondie de vos locaux pour identifier les risques potentiels et les infestations actives.',
        },
        {
          title: 'Plan de traitement personnalisé',
          text: 'Nous élaborons un plan de traitement adapté à votre type d’activité, que ce soit un restaurant, un bureau ou un commerce, en utilisant des méthodes de lutte anti-nuisibles sûres et efficaces.',
        },
        {
          title: 'Suivi continu et rapports',
          text: 'Notre service inclut un suivi régulier pour détecter tout nouveau problème, ainsi que des rapports détaillés pour vous tenir informé de l’état sanitaire de vos locaux.',
        },
      ],
      pestsTitle: 'Secteurs d’activité que nous accompagnons',
      pestsIntro: 'Nos services anti-nuisibles s’adressent à divers secteurs, notamment :',
      pestsItems: [
        {
          title: 'Restaurants et restauration',
          text: 'Hygiène alimentaire et conformité HACCP : nous luttons contre les nuisibles (rongeurs, insectes, volants) qui menacent vos cuisines et vos stocks.',
        },
        {
          title: 'Commerces',
          text: 'Magasins, entrepôts et locaux de vente : nous protégeons vos marchandises et l’image de votre enseigne grâce à des interventions discrètes et efficaces.',
        },
        {
          title: 'Établissements de santé',
          text: 'Hôpitaux, cliniques, EHPAD : nous appliquons des protocoles stricts et des produits adaptés aux environnements sensibles.',
        },
      ],
      advantagesTitle: 'Avantages clés pour votre entreprise',
      advantagesItems: [
        {
          title: 'Protection de votre réputation',
          text: 'Une infestation peut nuire durablement à l’image de votre entreprise. Nos interventions rapides et discrètes préservent la confiance de vos clients et partenaires.',
        },
        {
          title: 'Conformité sanitaire et sécuritaire',
          text: 'Nous vous aidons à respecter vos obligations réglementaires et à maintenir un environnement sain pour vos employés et le public.',
        },
        {
          title: 'Service fiable',
          text: 'Planning respecté, rapports détaillés et réactivité en cas d’urgence : nous nous engageons à être un partenaire de confiance sur la durée.',
        },
      ],
      ctaText: 'Contactez Action Nuisibles 13 dès aujourd’hui pour une consultation ou un devis adapté à votre activité.',
    },
  },
  {
    id: 3,
    slug: 'intervention-rapide-urgences',
    title: 'Intervention anti nuisibles rapide pour les situations urgentes',
    description:
      "Obtenez une intervention immédiate en cas d'infestation avec notre service d'urgence, pour assurer la sécurisation rapide de votre habitation ou de vos locaux.",
    image: images.invasionCafards,
    heroImage: images.invasionCafards,
    heroSubtitle:
      "Obtenez une intervention immédiate en cas d'infestation, avec notre service d'urgence, pour assurer la résolution rapide de votre habitation ou de vos locaux.",
    content: {
      intro:
        "Une intervention rapide limite les dégâts et rétablit la sérénité. Que vous soyez confronté à un nid de guêpes ou de frelons, à une infestation de rongeurs ou d'insectes, ou à des chenilles processionnaires, notre équipe peut se déplacer dans les meilleurs délais pour sécuriser les lieux et engager un traitement adapté.",
      whyTitle: 'Pourquoi choisir Action Nuisibles 13 pour les urgences ?',
      whyItems: [
        {
          title: 'Délai d’intervention rapide',
          text: 'Nous nous efforçons d’intervenir sous 2h ou dans la journée selon la gravité. Nous intervenons dans les Bouches-du-Rhône.',
        },
        {
          title: 'Solutions d’urgence complètes',
          text: 'Des rongeurs aux insectes, en passant par les guêpes et frelons ou les chenilles processionnaires : nous disposons du matériel et des protocoles pour agir sur tous les types de nuisibles.',
        },
        {
          title: 'Techniciens expérimentés',
          text: 'Nos techniciens sont formés aux interventions d’urgence et disposent des équipements de protection et des produits nécessaires pour intervenir en toute sécurité.',
        },
      ],
      processTitle: 'Notre processus d’intervention d’urgence',
      processSteps: [
        {
          title: 'Évaluation immédiate',
          text: 'Lors de votre appel, nous évaluons la situation (type de nuisible, localisation, accès) pour préparer l’intervention et vous indiquer un délai réaliste.',
        },
        {
          title: 'Traitement à action rapide',
          text: 'Notre technicien se rend sur place avec le matériel adapté et utilise des traitements à action rapide pour neutraliser le nuisible (nid, infestation, foyer de chenilles, etc.).',
        },
        {
          title: 'Suivi et prévention',
          text: 'À l’issue de l’intervention, nous vous donnons les consignes à respecter et, si besoin, planifions une visite de contrôle ou un traitement préventif pour éviter une récidive.',
        },
      ],
      pestsTitle: 'Situations d’urgence courantes que nous traitons',
      pestsIntro: 'Nous intervenons en urgence sur les cas les plus courants nécessitant une action rapide.',
      pestsItems: [
        {
          title: 'Guêpes et frelons',
          text: 'Nid dans un mur, sous un toit, dans un arbre ou à proximité d’une entrée… Nous intervenons pour retirer ou neutraliser le nid en toute sécurité et vous permettre de retrouver l’usage de vos espaces.',
        },
        {
          title: 'Chenilles processionnaires',
          text: 'Nids de chenilles processionnaires du pin ou du chêne : risque pour les humains et les animaux. Nous réalisons des interventions de destruction des nids et des traitements adaptés en urgence si nécessaire.',
        },
        {
          title: 'Infestations de rongeurs',
          text: 'Découverte récente de rats ou souris en nombre. Nous réalisons une intervention choc et vous conseillons pour limiter les points d’entrée et les réinfestations.',
        },
        {
          title: 'Dégâts causés par les termites',
          text: 'En cas de suspicion ou de dégâts visibles, nous pouvons réaliser un diagnostic et proposer un traitement adapté pour protéger votre bâti.',
        },
        {
          title: 'Infestations de cafards et de fourmis',
          text: 'Prolifération soudaine dans une cuisine, un local ou un logement : nous intervenons avec des traitements ciblés et des conseils d’hygiène pour en venir à bout.',
        },
      ],
      advantagesTitle: 'Pourquoi une intervention rapide est essentielle',
      advantagesItems: [
        {
          title: 'Limiter les dégâts matériels',
          text: 'Plus une infestation est traitée tôt, moins elle s’étend. Nous agissons vite pour préserver vos biens et limiter les coûts de réparation.',
        },
        {
          title: 'Santé et sécurité',
          text: 'Guêpes, frelons, chenilles processionnaires ou nuisibles vecteurs de maladies : une intervention rapide réduit les risques pour les occupants et les animaux.',
        },
        {
          title: 'Tranquillité d’esprit',
          text: 'Retrouvez la sérénité chez vous ou dans vos locaux grâce à une prise en charge réactive et un traitement efficace.',
        },
      ],
      ctaText: "Si vous faites face à un problème urgent de nuisibles, n'attendez pas ! Contactez Action Nuisibles 13 maintenant pour un service d'urgence rapide et fiable. Demandez une intervention dès aujourd'hui.",
    },
  },
];

/**
 * Retourne le service dont le slug correspond, ou undefined.
 */
export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
