import { images } from '../utils/publicAssets';

/**
 * Données des articles du blog. Chaque article a un slug pour l’URL : /articles/:slug
 */
export const articles = [
  {
    id: 1,
    slug: 'les-meilleures-solutions-anti-nuisibles-pour-votre-entreprise',
    title: 'Les meilleures solutions anti-nuisibles pour votre entreprise',
    date: '11 Déc. 2025',
    category: 'Anti-nuisibles pour entreprises',
    readMinutes: 5,
    image: images.nuisiblesSolutionPro,
    content: {
      introHeading: 'Pourquoi la lutte anti-nuisibles est essentielle pour votre entreprise',
      introParagraph:
        'Une infestation de nuisibles dans vos locaux professionnels peut nuire à la santé, à la réputation et à la pérennité de votre activité. Faire appel à des professionnels permet de prévenir les risques, de respecter la réglementation et de protéger vos employés et vos clients. Voici les points clés à retenir.',
      numberedItems: [
        {
          title: 'Risques sanitaires et sécuritaires',
          text: 'Rongeurs, insectes et autres nuisibles peuvent contaminer les denrées, transmettre des maladies ou provoquer des allergies. Dans un contexte professionnel, les conséquences peuvent être lourdes : fermeture administrative, perte de confiance des clients, absentéisme.',
        },
        {
          title: 'Protéger la réputation de votre entreprise',
          text: 'Une seule alerte ou un signalement peut suffire à entacher l’image de votre société. Une lutte anti-nuisibles proactive et documentée montre votre sérieux et rassure vos partenaires et vos clients.',
        },
        {
          title: 'Conformité réglementaire',
          text: 'Les établissements recevant du public, les métiers de l’alimentaire et de la santé sont soumis à des obligations en matière d’hygiène et de lutte contre les nuisibles. Des rapports et des interventions régulières sont souvent exigés.',
        },
        {
          title: 'Pertes financières',
          text: 'Dégâts sur les stocks, sur les équipements ou sur le bâti, arrêts d’activité, amendes : une infestation non maîtrisée peut coûter très cher. Investir dans la prévention et le traitement limite ces coûts.',
        },
        {
          title: 'Assurer la sécurité et le confort des employés',
          text: 'Un environnement sain et sans nuisibles améliore les conditions de travail et réduit le stress et les conflits liés aux infestations. Vos équipes peuvent se concentrer sur leur activité en toute sérénité.',
        },
        {
          title: 'Plans de lutte anti-nuisibles personnalisés',
          text: 'Chaque secteur et chaque site ont leurs spécificités. Un professionnel adapte les méthodes, les fréquences d’intervention et les produits à votre activité et à la configuration de vos locaux.',
        },
        {
          title: 'Suivi et maintenance continus',
          text: 'La lutte anti-nuisibles ne se limite pas à une intervention ponctuelle. Un suivi régulier et des rapports détaillés permettent de détecter rapidement tout problème et de prouver votre démarche en cas de contrôle.',
        },
        {
          title: 'Solutions écologiques',
          text: 'Il est possible de privilégier des méthodes et des produits respectueux de l’environnement et moins agressifs pour les occupants, tout en restant efficaces. De plus en plus d’entreprises font ce choix pour aligner activité et responsabilité.',
        },
      ],
      conclusionParagraph:
        'Faire appel à un expert en lutte anti-nuisibles pour votre entreprise, c’est protéger votre activité, vos équipes et vos clients. Un diagnostic et un plan d’action adaptés vous permettent d’agir en amont et de rester conforme. N’attendez pas une crise pour vous équiper.',
    },
  },
  {
    id: 2,
    slug: 'comment-garder-votre-maison-sans-nuisible-toute-lannee',
    title: "Comment garder votre maison sans nuisible toute l'année",
    date: '15 Jan. 2026',
    category: 'Conseils anti-nuisibles',
    readMinutes: 3,
    image: images.fourmis,
    content: {
      introHeading: "Garder votre maison sans nuisible : conseils essentiels",
      introParagraph:
        "Pour éviter les infestations, une approche régulière et quelques bonnes habitudes suffisent souvent à limiter les entrées et les sources de nourriture des nuisibles. Voici un processus simple à mettre en place tout au long de l'année.",
      numberedItems: [
        {
          title: "Colmatez les points d'entrée",
          text: "Fissures, joints abîmés, grilles de ventilation ou gaines : les nuisibles profitent des moindres accès. Inspectez régulièrement les pourtours de portes et fenêtres, les bas de murs et les zones humides, et rebouchez ou posez des grilles fines pour limiter les entrées.",
        },
        {
          title: 'Nettoyage régulier',
          text: "Crumbs, résidus alimentaires et eau stagnante attirent les insectes et les rongeurs. Un nettoyage régulier des plans de travail, des placards et des sols, ainsi qu’une poubelle bien fermée et vidée souvent, réduisent fortement les risques.",
        },
        {
          title: 'Gestion appropriée des déchets',
          text: "Poubelles avec couvercle, sacs bien fermés et bac à compost éloigné du bâti et couvert limitent les odeurs et l’accès à la nourriture. En extérieur, évitez d’entreposer des cartons ou des tas de bois contre les murs.",
        },
        {
          title: 'Utilisez des traitements préventifs',
          text: "En complément de l’hygiène, des traitements préventifs (barrières, appâts sécurisés en zone inaccessible aux enfants et aux animaux) peuvent être conseillés par un professionnel pour les zones à risque (combles, sous-sol, périphérie).",
        },
        {
          title: "Entretenez votre jardin",
          text: "Haies et végétation trop proches des murs, tas de feuilles ou de bois, et eau stagnante favorisent les nuisibles. En maintenant les abords dégagés et en évitant les réserves d’eau à ciel ouvert, vous réduisez les refuges et les points d’entrée.",
        },
        {
          title: 'Installez des moustiquaires aux fenêtres',
          text: "En période chaude, les moustiquaires empêchent les insectes volants d’entrer tout en laissant circuler l’air. Vérifiez qu’elles sont bien fixées et sans déchirure.",
        },
        {
          title: 'Surveillez les premiers signes',
          text: "Crottes, traces de rongement, bruits dans les cloisons ou les combles, nids ou essaims : en réagissant dès les premiers indices, vous limitez l’ampleur du problème et le coût de l’intervention. En cas de doute, faites appel à un professionnel pour un diagnostic.",
        },
      ],
      conclusionTitle: 'Conclusion',
      conclusionParagraph:
        "Une maison bien entretenue, des points d’entrée colmatés et une hygiène régulière constituent la base d’un environnement sans nuisible. En ajoutant quelques gestes préventifs et une vigilance sur les premiers signes, vous préservez le confort de votre foyer toute l’année. Pour un conseil personnalisé ou une intervention, n’hésitez pas à nous contacter.",
    },
  },
  {
    id: 3,
    slug: 'signes-dune-infestation-de-nuisibles-a-ne-pas-ignorer',
    title: "Signes d'une infestation de nuisibles à ne pas ignorer",
    date: '9 Fév. 2026',
    category: 'Services de lutte anti-nuisibles',
    readMinutes: 4,
    image: images.chenillesProcessionnaires,
    content: {
      introHeading: "Reconnaître les premiers signes d'une infestation de nuisibles",
      introParagraph:
        "Plus une infestation est détectée tôt, plus elle est facile et économique à traiter. Voici les signaux d’alerte les plus courants à surveiller chez vous ou dans vos locaux, et les bons réflexes à adopter.",
      numberedItems: [
        {
          title: 'Bruits inhabituels',
          text: "Grattements dans les murs, les plafonds ou les combles, surtout la nuit, peuvent indiquer la présence de rongeurs ou d’insectes dans les structures. Ne les mettez pas sur le compte du hasard.",
        },
        {
          title: 'Déjections',
          text: "Crottes de souris ou de rats (petits grains noirs ou cylindres), fientes d’insectes ou traces similaires près des denrées, des placards ou des zones de passage sont un indicateur fiable d’activité. Identifiez la forme et l’emplacement pour en parler à un professionnel.",
        },
        {
          title: 'Dégâts matériels',
          text: "Câbles rongés, emballages percés, cartons ou tissus abîmés, trous dans les plinthes ou les cloisons : les rongeurs et certains insectes laissent des traces visibles. Inspectez régulièrement les zones peu fréquentées (caves, greniers, arrière des meubles).",
        },
        {
          title: 'Traces ou rongeurs visibles',
          text: "Empreintes dans la poussière, traces de gras le long des murs (rododroms), ou observation directe d’un animal : dès que la présence est avérée, il est temps d’agir pour éviter la multiplication.",
        },
        {
          title: 'Odeurs étranges',
          text: "Une odeur musquée, ammoniaquée ou nauséabonde peut signaler une population importante de rongeurs ou d’insectes, ou la présence de cadavres. À ne pas ignorer, surtout si elle persiste ou s’accentue.",
        },
        {
          title: 'Allergies inexpliquées',
          text: "Acariens, blattes ou déjections de nuisibles peuvent aggraver les allergies et les problèmes respiratoires. Si les symptômes s’accentuent à la maison sans cause évidente, une infestation peut en être la cause.",
        },
        {
          title: 'Matériaux de nidification',
          text: "Papiers déchiquetés, tissus, isolant arraché ou amas de matériaux dans un coin sombre sont souvent utilisés par les rongeurs pour construire leur nid. Leur découverte justifie une inspection plus poussée.",
        },
        {
          title: 'Nourriture endommagée',
          text: "Sachets ou boîtes percés, graines ou denrées grignotées, traces de salive ou d’excréments dans les réserves : la cuisine et les réserves sont des cibles prioritaires. Vérifiez régulièrement et conservez les aliments dans des contenants fermés.",
        },
      ],
      bulletSection: {
        title: 'Que faire si vous repérez ces signes',
        items: [
          'Ne pas attendre : plus on tarde, plus l’infestation s’étend et plus le traitement sera lourd.',
          'Éviter de disperser soi-même des produits sans diagnostic : risque pour la santé et inefficacité si le nuisible ou les points d’entrée ne sont pas identifiés.',
          'Faire appel à un professionnel pour une inspection et un plan de traitement adapté.',
          'Suivre les conseils d’hygiène et de prévention donnés après l’intervention pour limiter les réinfestations.',
        ],
      },
      conclusionTitle: 'Conclusion',
      conclusionParagraph:
        "Les signes d’une infestation sont souvent discrets au début. En restant attentif aux bruits, aux déjections, aux dégâts et aux odeurs, vous pouvez réagir tôt et limiter les dégâts. Dès que vous avez un doute, contactez un expert pour un diagnostic et une intervention ciblée.",
    },
  },
  {
    id: 4,
    slug: 'destruction-nid-guepes-frelons-quand-intervenir',
    title: 'Destruction de nid de guêpes ou frelons : quand intervenir ?',
    date: '18 Nov. 2025',
    category: 'Guêpes et frelons',
    readMinutes: 3,
    image: images.nidAbeilles,
    content: {
      introHeading: 'Nid de guêpes ou de frelons : réagir au bon moment',
      introParagraph: "Un nid de guêpes ou de frelons à proximité de votre habitation peut représenter un risque. Savoir quand et comment intervenir permet de limiter les piqûres.",
      numberedItems: [
        { title: 'Identifier le type de nid', text: "Les guêpes et les frelons construisent des nids en papier. Faites identifier par un professionnel." },
        { title: 'Ne pas intervenir soi-même', text: "Tenter de détruire un nid sans équipement expose à des piqûres multiples. Faites appel à un professionnel." },
        { title: 'Intervenir tôt', text: "Plus le nid est petit, plus l'intervention est simple. Contactez un spécialiste dès que vous repérez un nid." },
      ],
      conclusionParagraph: "En cas de nid de guêpes ou de frelons, faites intervenir un professionnel pour une neutralisation en toute sécurité.",
    },
  },
  {
    id: 5,
    slug: 'deratisation-particuliers-professionnels',
    title: 'Dératisation : particuliers et professionnels',
    date: '28 Nov. 2025',
    category: 'Dératisation',
    readMinutes: 4,
    image: images.invasionInsectesInterieur,
    content: {
      introHeading: 'Dératisation : une nécessité pour tous',
      introParagraph: "Les rats et les souris peuvent s'inviter chez les particuliers comme dans les locaux professionnels. La dératisation repose sur un diagnostic et un suivi adaptés.",
      numberedItems: [
        { title: 'Diagnostic et identification', text: "Un professionnel identifie les espèces, repère les points d'entrée et choisit les bons appâts et pièges." },
        { title: 'Mise en place du traitement', text: "La dératisation combine appâts sécurisés, pièges et colmatage des accès. Les produits sont placés hors de portée des enfants et des animaux." },
        { title: 'Suivi et prévention', text: "Un suivi régulier permet d'éviter les réinfestations. Des conseils d'hygiène complètent l'intervention." },
      ],
      conclusionParagraph: "Une dératisation réalisée par un expert garantit un résultat durable. N'attendez pas une infestation importante pour agir.",
    },
  },
  {
    id: 6,
    slug: 'punaises-de-lit-protocole-traitement',
    title: 'Punaises de lit : protocole de traitement',
    date: '5 Déc. 2025',
    category: 'Punaises de lit',
    readMinutes: 4,
    image: images.invasionCafards,
    content: {
      introHeading: 'Éliminer les punaises de lit : méthode et rigueur',
      introParagraph: "Les punaises de lit nécessitent un traitement méthodique. Un protocole adapté, souvent en plusieurs passages, permet de s'en débarrasser durablement.",
      numberedItems: [
        { title: 'Diagnostic des foyers', text: "Le professionnel repère les zones infestées (literie, canapé, plinthes). Une inspection minutieuse permet de cibler tous les foyers." },
        { title: 'Traitement des zones de repos', text: "Le traitement vise les zones où les punaises se cachent et pondent. Les produits sont adaptés aux punaises de lit." },
        { title: 'Conseils post-traitement', text: "Laver le linge à haute température, suivre les conseils pour limiter les retours." },
      ],
      conclusionParagraph: "Une infestation de punaises de lit ne se règle pas avec des produits en libre-service. Un protocole professionnel est indispensable.",
    },
  },
  {
    id: 7,
    slug: 'chenilles-processionnaires-risques-traitement',
    title: 'Chenilles processionnaires : risques et traitement',
    date: '14 Jan. 2026',
    category: 'Chenilles processionnaires',
    readMinutes: 3,
    image: images.chenillesProcessionnaires,
    content: {
      introHeading: 'Chenilles processionnaires : un risque pour les humains et les animaux',
      introParagraph: "Les chenilles processionnaires du pin et du chêne sont urticantes. Leurs poils peuvent provoquer des réactions cutanées. Les animaux sont particulièrement exposés.",
      numberedItems: [
        { title: 'Reconnaître les nids', text: "Les nids blancs et soyeux dans les pins sont typiques. Les processions au sol sont un autre signe. Faites identifier par un professionnel." },
        { title: 'Destruction des nids', text: "Un professionnel peut détruire les nids en sécurité et proposer un traitement préventif." },
        { title: 'Protéger les animaux', text: "Évitez que chiens et chats s'approchent des zones infestées. En cas de contact, consultez un vétérinaire." },
      ],
      conclusionParagraph: "Une intervention professionnelle protège votre famille et vos animaux.",
    },
  },
  {
    id: 8,
    slug: 'cafards-blattes-desinsectisation',
    title: 'Cafards et blattes : désinsectisation efficace',
    date: '28 Jan. 2026',
    category: 'Désinsectisation',
    readMinutes: 3,
    image: images.invasionCafards,
    content: {
      introHeading: 'Éliminer les cafards et blattes durablement',
      introParagraph: "Les cafards et blattes prolifèrent dans les cuisines et les endroits humides. Une désinsectisation ciblée et des mesures d'hygiène permettent de s'en débarrasser.",
      numberedItems: [
        { title: 'Identifier espèces et zones', text: "L'identification permet d'adapter le traitement. Les zones de passage et les nids sont repérés." },
        { title: 'Traitement par gel ou appâts', text: "Les professionnels utilisent des gels ou des appâts que les blattes rapportent au nid." },
        { title: 'Hygiène et étanchéité', text: "Réduire les sources de nourriture, colmater les fentes limitent les réinfestations." },
      ],
      conclusionParagraph: "Faites appel à un expert pour un diagnostic et un plan d'action.",
    },
  },
  {
    id: 9,
    slug: 'fourmis-invasion-prevention',
    title: 'Fourmis : en finir avec les invasions',
    date: '4 Fév. 2026',
    category: 'Désinsectisation',
    readMinutes: 3,
    image: images.fourmis,
    content: {
      introHeading: 'Lutter contre les fourmis dans la maison',
      introParagraph: "Les fourmis peuvent devenir envahissantes en période chaude. Traiter les pistes et les points d'entrée permet de réduire les invasions.",
      numberedItems: [
        { title: 'Repérer les pistes et nids', text: "Les fourmis suivent des pistes régulières. En repérant ces pistes, on peut remonter vers les points d'entrée." },
        { title: 'Traitement ciblé', text: "Gels et appâts placés sur les pistes permettent aux fourmis de rapporter le produit au nid." },
        { title: 'Prévention', text: "Colmater les fissures, garder les plans de travail propres limite les entrées." },
      ],
      conclusionParagraph: "Un traitement ciblé et une bonne prévention permettent de limiter les invasions. Contactez un professionnel.",
    },
  },
];

export const ARTICLES_PER_PAGE = 6;

/**
 * Retourne l’article dont le slug correspond, ou undefined.
 */
export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

export function getTotalArticlesPages() {
  return Math.ceil(articles.length / ARTICLES_PER_PAGE);
}
