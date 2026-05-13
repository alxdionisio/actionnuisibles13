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
    image: images.nettoyageMaison,
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
    image: images.invasionRat,
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
    readMinutes: 5,
    image: images.nidAbeilles,
    content: {
      introHeading: 'Nid de guêpes ou de frelons : comprendre pour mieux intervenir',
      introParagraph: "En France, guêpes et frelons construisent chaque année des dizaines de milliers de nids. En PACA, la saison d'activité s'étend de mars à novembre, avec un pic entre juillet et septembre. Une colonie de guêpes communes peut compter jusqu'à 15 000 ouvrières en fin d'été, contre 100 à 700 pour le frelon européen. Savoir identifier l'espèce, évaluer le risque et choisir le bon moment d'intervention fait la différence entre une intervention simple et une crise sanitaire.",
      numberedItems: [
        {
          title: "Identifier l'espèce : guêpe commune, frelon européen ou frelon asiatique",
          text: "La guêpe commune (Vespula vulgaris) construit ses nids en papier mâché dans les combles, sous-sols, murs creux ou cavités. Le frelon européen (Vespa crabro), plus gros et brun-jaune, préfère les arbres et les hangars. Le frelon asiatique (Vespa velutina), espèce invasive classée nuisible en France depuis 2012, est reconnaissable à son thorax noir et ses pattes jaunes ; il bâtit de gros nids sphériques en hauteur dans les arbres ou sur les façades. Chaque espèce demande un protocole différent.",
        },
        {
          title: "Le risque réel des piqûres multiples",
          text: "Selon l'Anses, 5 à 8 % de la population française est allergique aux venins d'hyménoptères. Une piqûre unique peut provoquer un choc anaphylactique chez les personnes sensibilisées. Face à un nid actif, un mouvement brusque ou une tentative de destruction sans protection peut déclencher une attaque coordonnée de centaines d'ouvrières. Les piqûres multiples (au-delà de 20-30) sont toxiques même pour les personnes non allergiques.",
        },
        {
          title: "Ne jamais intervenir seul sur un nid actif",
          text: "L'équipement de protection individuelle d'un professionnel (combinaison intégrale, gants épais, masque facial) n'est pas négociable. Tenter de boucher un nid, de le brûler ou de le pulvériser avec un aérosol grand public expose à un risque de piqûres massives. Les frelons, en particulier, attaquent en groupe lorsque leur nid est menacé et peuvent poursuivre un intrus sur plusieurs dizaines de mètres.",
        },
        {
          title: "Intervenir tôt : la taille du nid change tout",
          text: "Un nid détecté en mai (taille d'une balle de tennis, 50 à 200 ouvrières) est infiniment plus simple à traiter qu'un nid de septembre (taille d'un ballon de football, 10 000 à 15 000 ouvrières chez la guêpe commune). Plus la colonie est grande, plus le traitement requiert d'expérience, de matériel adapté et de temps. Dès les premiers signes d'aller-retour d'insectes à un même point, contactez un professionnel.",
        },
        {
          title: "Le cas particulier du frelon asiatique",
          text: "Le frelon asiatique chasse en stationnant devant les ruches (menace majeure pour l'apiculture) et peut attaquer en groupe si son nid est dérangé. En PACA, sa présence est désormais généralisée. La destruction des nids de frelon asiatique est encadrée par l'arrêté du 26 décembre 2012 et le frelon asiatique est inscrit sur la liste des espèces exotiques envahissantes. Tout nid identifié doit être signalé en mairie ou à l'OFB et traité par un professionnel.",
        },
        {
          title: "Le traitement nocturne : pourquoi et comment",
          text: "L'intervention sur un nid actif se fait idéalement après 20h ou à l'aube, lorsque toutes les ouvrières sont rentrées et que leur activité est minimale. Le professionnel pulvérise un insecticide adapté (à base de perméthrine ou de cyperméthrine) à l'entrée du nid, attend la neutralisation puis retire le nid ou le condamne pour éviter qu'il ne soit recolonisé l'année suivante.",
        },
        {
          title: "Prévention : éviter l'installation",
          text: "Pour limiter l'installation de nids près de votre habitation : inspectez les combles, volets, bords de toit et abris de jardin au début du printemps (mars-avril) quand les reines fondatrices cherchent un site. Rebouchez les anfractuosités dans les murs, posez des grilles fines sur les ouvertures de ventilation, évitez de laisser des fruits tombés ou des denrées sucrées accessibles à l'extérieur en été. Une détection précoce reste le meilleur outil de gestion.",
        },
      ],
      conclusionParagraph: "Un nid de guêpes ou de frelons proche de votre habitation ne doit jamais être traité sans équipement professionnel : le risque humain est trop élevé. Nos techniciens interviennent en urgence dans les Bouches-du-Rhône pour la neutralisation et la destruction des nids, avec le matériel et les produits adaptés à chaque espèce. Plus l'intervention est rapide, plus elle est sûre et économique.",
    },
  },
  {
    id: 5,
    slug: 'deratisation-particuliers-professionnels',
    title: 'Dératisation : particuliers et professionnels',
    date: '28 Nov. 2025',
    category: 'Dératisation',
    readMinutes: 6,
    image: images.invasionInsectesInterieur,
    content: {
      introHeading: 'Dératisation : méthodes et enjeux pour particuliers et professionnels',
      introParagraph: "Le rat surmulot (Rattus norvegicus) est le principal vecteur de nuisibles en milieu urbain et péri-urbain en France. Un couple de rats peut engendrer jusqu'à 1 000 descendants en une année dans des conditions favorables. Au-delà des dégâts matériels, les rongeurs sont vecteurs de pathogènes graves : leptospirose, salmonellose, hantavirus. Une dératisation maîtrisée repose sur un diagnostic précis, un protocole adapté et un suivi rigoureux.",
      numberedItems: [
        {
          title: "Identifier l'espèce : rat surmulot, rat noir ou souris domestique",
          text: "Le rat surmulot (300-500 g, brun-gris, museau court) vit au ras du sol, dans les égouts, caves et zones humides. Le rat noir (Rattus rattus, 150-250 g, plus élancé, queue longue) est meilleur grimpeur et privilégie les combles et toitures. La souris domestique (Mus musculus, 15-25 g) niche en intérieur près des sources de nourriture. Les crottes les distinguent : cylindre de 12 mm pointu pour le rat, grain de riz de 6 mm pour la souris.",
        },
        {
          title: "Risques sanitaires : pourquoi ne pas attendre",
          text: "Selon Santé publique France, la leptospirose touche 200 à 600 personnes par an en France, principalement transmise par l'urine de rongeurs contaminant l'eau ou les denrées. Les rongeurs peuvent également véhiculer la salmonellose, la peste (encore présente dans certaines zones du monde), le hantavirus et des parasites externes (puces, tiques). La présence de rongeurs dans un local alimentaire est une cause directe de fermeture administrative.",
        },
        {
          title: "Dégâts matériels et risque d'incendie",
          text: "Les rongeurs rongent en permanence pour user leurs incisives à croissance continue. Câbles électriques, gaines, isolants, conduites en plastique : aucun matériau n'est épargné. Les assureurs rapportent qu'environ 25 % des sinistres incendie d'origine électrique inexpliquée seraient liés à des câbles rongés. Dans les entrepôts, les pertes sur les stocks peuvent représenter plusieurs milliers d'euros par an.",
        },
        {
          title: "Le protocole professionnel de dératisation",
          text: "Une dératisation efficace suit quatre étapes : inspection complète des lieux et cartographie des points d'entrée, des passages et des nids, mise en place d'appâts anticoagulants dans des postes sécurisés (inaccessibles aux enfants et aux animaux non cibles), pose de pièges mécaniques en complément dans les zones à risque, colmatage systématique des accès supérieurs à 1 cm. Les produits utilisés (bromadiolone, difénacoum, brodifacoum) sont homologués et tracés.",
        },
        {
          title: "Le suivi : la phase souvent négligée",
          text: "Une dératisation sans suivi est rarement définitive. Le professionnel revient à J+15 et J+30 pour contrôler la consommation des appâts, retirer les cadavres et ajuster le dispositif. Pour les particuliers, deux passages suffisent généralement. Pour les professionnels (restauration, alimentaire, collectivités), un contrat d'entretien trimestriel ou mensuel est indispensable.",
        },
        {
          title: "Contexte professionnel HACCP et obligations légales",
          text: "Les établissements soumis au paquet hygiène européen (CE 852/2004) doivent disposer d'un plan de lutte contre les nuisibles documenté, avec rapports d'intervention conservés pendant minimum 3 ans. Lors d'un audit DDPP ou d'un audit interne d'une enseigne (HACCP, IFS, BRC), l'absence de ce plan ou la présence visible de rongeurs entraînent des non-conformités majeures voire une fermeture immédiate.",
        },
        {
          title: "Prévention : couper l'accès et la nourriture",
          text: "Toute dératisation durable repose sur trois piliers : colmater toute ouverture supérieure à 1 cm (un rat peut passer par un trou de la taille d'une pièce de 2 €), poser des grilles fines sur les gaines et les bouches d'aération, gérer rigoureusement les déchets et stocker les denrées en contenants hermétiques. Sans ces mesures, les nouveaux rongeurs reviendront aussitôt les appâts retirés.",
        },
      ],
      conclusionParagraph: "Une dératisation réalisée par un professionnel garantit un résultat durable, des produits tracés et la conformité réglementaire pour les professionnels. N'attendez pas l'infestation visible (déjà tardive) : aux premiers signes (crottes, traces, bruits nocturnes), un diagnostic permet de traiter rapidement et à moindre coût. Nous intervenons dans les Bouches-du-Rhône pour les particuliers, les copropriétés et les professionnels soumis aux normes HACCP.",
    },
  },
  {
    id: 6,
    slug: 'punaises-de-lit-protocole-traitement',
    title: 'Punaises de lit : protocole de traitement',
    date: '5 Déc. 2025',
    category: 'Punaises de lit',
    readMinutes: 6,
    image: images.punaisesDeLit,
    content: {
      introHeading: "Punaises de lit : cycle de vie, détection et protocole professionnel",
      introParagraph: "La punaise de lit (Cimex lectularius) est un insecte hématophage nocturne attiré par le CO2 et la chaleur corporelle. Une femelle pond 1 à 7 œufs par jour, soit 200 à 500 sur sa vie. Le cycle œuf-adulte dure 5 à 7 semaines selon la température et l'adulte vit 12 à 18 mois en se nourrissant tous les 5 à 10 jours. En France, une résistance aux pyréthrinoïdes (insecticides courants) est documentée dans plus de 80 % des populations urbaines. Le traitement amateur est donc presque toujours voué à l'échec.",
      numberedItems: [
        {
          title: "Reconnaître une infestation : les six signes clés",
          text: "Piqûres alignées ou groupées par trois (parfois appelées « petit-déjeuner-déjeuner-dîner ») apparaissant au réveil sur les zones découvertes (bras, jambes, épaules). Petites taches de sang sur les draps. Déjections noires (la taille de points de stylo) dans les coutures du matelas, derrière la tête de lit ou sur les murs. Exuvies (peaux mues). Œufs blancs translucides de 1 mm dans les anfractuosités. Odeur douceâtre caractéristique en cas d'infestation importante.",
        },
        {
          title: "Où se cachent les punaises : les zones à inspecter",
          text: "Coutures et plis du matelas (en priorité), sommier (cadre en bois en particulier), tête de lit, plinthes proches du lit, prises et interrupteurs, sous les cadres, dans les livres et les piles de journaux, derrière les papiers peints décollés. À chaque inspection, démonter la literie et examiner chaque couture à la lampe torche. Une infestation peut rester invisible pendant des semaines avant les premières piqûres.",
        },
        {
          title: "Pourquoi l'autotraitement échoue presque toujours",
          text: "Les insecticides en aérosol vendus en grande surface contiennent presque tous des pyréthrinoïdes auxquels les punaises urbaines sont massivement résistantes (étude IRD/Inserm 2018). Pire, ces produits dispersent les punaises dans tout le logement, étendant l'infestation aux pièces voisines. La fumigation maison (« bombe insecticide ») est inefficace car les punaises se réfugient dans les fissures. Seul un traitement professionnel ciblé et complet peut éliminer une infestation.",
        },
        {
          title: "Le traitement insecticide professionnel : deux passages minimum",
          text: "Le protocole standard comprend deux passages espacés de 14 jours. Le premier passage cible les adultes et les nymphes avec des insecticides à base d'imidaclopride, d'acétamipride ou de lambda-cyhalothrine (avec synergistes pour contourner les résistances). Le second passage, 14 jours plus tard, traite les œufs ayant éclos entre temps (les œufs sont peu sensibles aux insecticides). Sans ce second passage, l'infestation rebondit en 3 à 4 semaines.",
        },
        {
          title: "Alternative chaleur sèche (56 °C) : sans résistance possible",
          text: "Le traitement par chaleur (méthode « thermique ») consiste à chauffer la pièce ou le mobilier à 56 °C pendant plusieurs heures. Toutes les punaises (œufs, nymphes, adultes) meurent en quelques minutes à cette température. Avantage : aucune résistance possible, traitement en une séance. Inconvénients : coût plus élevé, nécessité d'évacuer plantes, électroniques et aliments. Méthode souvent réservée aux hôtels et établissements à fort enjeu sanitaire.",
        },
        {
          title: "Préparation obligatoire avant le traitement",
          text: "Sans préparation, le traitement perd jusqu'à 60 % de son efficacité. À faire avant le passage : laver tout le linge et la literie à 60 °C minimum (ou les congeler 72 h à -18 °C), passer l'aspirateur partout puis jeter immédiatement le sac dans un sac plastique fermé, dégager les plinthes et les meubles des murs, ne pas appliquer d'insecticide soi-même au préalable (cela perturbe le traitement professionnel).",
        },
        {
          title: "Suivi post-traitement et prévention",
          text: "Un contrôle à J+30 permet de vérifier l'absence de nouvelles piqûres et de traces. Pour limiter le retour : utilisez une housse anti-punaises certifiée sur le matelas, inspectez systématiquement les bagages au retour de voyage (en particulier des pays à forte prévalence), évitez de récupérer du mobilier d'occasion sans inspection minutieuse. En copropriété, un cas non traité contamine rapidement les appartements voisins.",
        },
      ],
      conclusionParagraph: "Un protocole multi-passages réalisé par un professionnel reste indispensable face aux punaises de lit, sauf à recourir au traitement thermique. Le délai de réintégration des lieux après application est de 2 à 4 heures. Nous proposons une garantie de réintervention en cas de réinfestation dans le délai convenu. Pour un diagnostic dans les Bouches-du-Rhône, contactez-nous dès l'apparition des premiers signes : plus l'intervention est rapide, plus elle est efficace et économique.",
    },
  },
  {
    id: 7,
    slug: 'chenilles-processionnaires-risques-traitement',
    title: 'Chenilles processionnaires : risques et traitement',
    date: '14 Jan. 2026',
    category: 'Chenilles processionnaires',
    readMinutes: 5,
    image: images.chenillesProcessionnaires,
    content: {
      introHeading: 'Chenilles processionnaires : cycle annuel, dangers et solutions',
      introParagraph: "La processionnaire du pin (Thaumetopoea pityocampa) et la processionnaire du chêne (Thaumetopoea processionea) sont classées en France comme nuisibles à la santé humaine depuis le décret du 25 avril 2022. Chaque chenille porte jusqu'à 700 000 poils urticants microscopiques qui peuvent persister dans l'environnement plusieurs mois après le passage des chenilles. La région PACA est l'une des plus touchées de France, avec une expansion continue liée au réchauffement climatique.",
      numberedItems: [
        {
          title: "Le cycle annuel : huit mois sous nos yeux",
          text: "Les papillons adultes émergent en juin-août et pondent leurs œufs en manchons sur les aiguilles de pin. Les chenilles éclosent à l'automne et se développent dans des nids cotonneux blancs visibles de novembre à mars dans les fourches des branches. Entre janvier et avril selon la météo, les chenilles descendent en procession (file indienne tête-bêche) pour s'enterrer et s'y transformer en chrysalide. Le risque pour l'homme et les animaux est maximal pendant cette phase de procession.",
        },
        {
          title: "Dangers pour les humains : urticaire à anaphylaxie",
          text: "Les poils urticants en harpon se fichent dans la peau, les muqueuses et les yeux, libérant la thaumétopoéine, une protéine très allergisante. Symptômes : urticaire intense, démangeaisons sévères pendant 1 à 2 semaines, conjonctivite, rhinite, parfois œdème de Quincke. En cas d'inhalation, gêne respiratoire et toux. Une exposition importante peut provoquer un choc anaphylactique chez les personnes sensibilisées. Consultation médicale immédiate recommandée.",
        },
        {
          title: "Dangers vitaux pour les chiens et les chats",
          text: "L'ingestion ou le simple contact avec la langue est une urgence vétérinaire vitale. Les poils urticants provoquent une glossite ulcérative (nécrose de la langue) qui peut entraîner une perte partielle ou totale de la langue, voire la mort de l'animal en quelques heures. Signes d'alerte : salivation excessive, gonflement de la langue, prostration, refus de boire. Rincer immédiatement la bouche à grande eau (sans frotter) et consulter un vétérinaire en urgence.",
        },
        {
          title: "Reconnaître les nids et les processions",
          text: "Les nids de processionnaire du pin sont des amas cotonneux blancs de 15 à 25 cm, accrochés aux extrémités ensoleillées des branches de pins (notamment le pin d'Alep en PACA). Les processions au sol forment une file indienne pouvant compter jusqu'à 300 chenilles tête-bêche. Approche, photo, ramassage : tout contact est à proscrire absolument, y compris avec des chenilles mortes (les poils restent urticants pendant des mois).",
        },
        {
          title: "Traitement biologique Bt en novembre-décembre",
          text: "La pulvérisation de Bacillus thuringiensis var. kurstaki (Bt), insecticide biologique homologué, est la méthode la plus respectueuse de l'environnement et la plus efficace en début de cycle (jeunes chenilles). Le traitement vise les chenilles avant qu'elles ne tissent leurs nids définitifs. Le Bt agit uniquement sur les chenilles de lépidoptères et ne touche ni les abeilles, ni les oiseaux, ni les mammifères. Fenêtre de traitement : début novembre à mi-décembre.",
        },
        {
          title: "Destruction mécanique des nids en janvier-mars",
          text: "Lorsque les nids définitifs sont en place, l'échenillage (ablation mécanique avec perche télescopique ou échenilloir) reste la méthode la plus sûre. L'opération nécessite un équipement de protection intégral : combinaison étanche, lunettes hermétiques, masque FFP3, gants. Les nids sont mis en sacs hermétiques puis incinérés. Pose possible d'écopièges (collerettes ceinturant le tronc) pour intercepter les chenilles lors de la descente.",
        },
      ],
      conclusionParagraph: "La meilleure protection contre les chenilles processionnaires combine un traitement Bt préventif en novembre-décembre et un échenillage en hiver si des nids sont détectés. Ne tentez jamais de détruire un nid vous-même : même un brûlage à distance disperse les poils urticants dans l'air. Pour les pins et chênes de votre propriété dans les Bouches-du-Rhône, contactez-nous pour un diagnostic et un protocole adapté à votre situation.",
    },
  },
  {
    id: 8,
    slug: 'cafards-blattes-desinsectisation',
    title: 'Cafards et blattes : désinsectisation efficace',
    date: '28 Jan. 2026',
    category: 'Désinsectisation',
    readMinutes: 5,
    image: images.invasionCafards,
    content: {
      introHeading: 'Cafards et blattes : identification, risques et désinsectisation durable',
      introParagraph: "La blatte germanique (Blattella germanica) est l'espèce la plus répandue en France, capable de produire 4 à 6 générations par an. Une femelle porte une oothèque contenant 30 à 48 œufs, et l'on estime qu'un couple peut générer plus de 100 000 descendants en un an. L'Organisation mondiale de la santé classe la blatte comme vecteur potentiel de 33 espèces bactériennes pathogènes dont Salmonella, E. coli et Staphylococcus aureus. Des résistances aux pyréthrinoïdes sont désormais documentées dans la majorité des populations urbaines françaises.",
      numberedItems: [
        {
          title: "Identifier l'espèce : trois blattes principales en France",
          text: "Blatte germanique (Blattella germanica, 12-15 mm, brun clair, deux bandes longitudinales noires sur le pronotum) : la plus fréquente, cuisines, restaurants, milieux chauffés. Blatte orientale (Blatta orientalis, 20-25 mm, noir brillant) : caves, locaux à déchets, milieux humides et frais. Blatte américaine (Periplaneta americana, 30-40 mm, brun-rouge) : canalisations, sous-sols, parkings de grandes villes. L'identification conditionne le choix du traitement.",
        },
        {
          title: "Comportement nocturne et capacité de reproduction explosive",
          text: "Les blattes sont thigmotactiques (recherchent le contact avec une surface), nocturnes, et lucifuges (fuient la lumière). Voir une blatte en plein jour ou en grand nombre la nuit signale déjà une infestation avancée. La blatte germanique atteint la maturité sexuelle en 6 à 8 semaines, et une femelle peut produire 4 à 8 oothèques sur sa vie. Une infestation non traitée double sa population tous les 30 à 60 jours.",
        },
        {
          title: "Risques sanitaires : ce que l'OMS recommande",
          text: "Les blattes contaminent les denrées par leurs déjections, leur salive et leurs régurgitations. Elles véhiculent mécaniquement Salmonella, Shigella, Listeria, E. coli et Staphylococcus aureus. Les déjections et exuvies contiennent des allergènes (Bla g 1, Bla g 2) responsables d'aggravation de l'asthme : entre 60 et 80 % des enfants asthmatiques en milieu urbain sont sensibilisés aux allergènes de blattes (étude NIEHS).",
        },
        {
          title: "Conditions qui favorisent l'infestation",
          text: "Chaleur (température optimale 25-30 °C), humidité, accès permanent à de la nourriture et de l'eau, anfractuosités pour se cacher (cuisines, joints abîmés, derrière les électroménagers chauds, dans les gaines techniques). La blatte germanique se transmet souvent via des cartons d'emballage, des appareils électroménagers d'occasion ou par les conduites communes en copropriété.",
        },
        {
          title: "Traitement gel appâts : la méthode de référence",
          text: "Le gel insecticide à base d'indoxacarbe, de fipronil ou d'imidaclopride est la méthode la plus efficace en milieu sensible (cuisines, restaurants, hôpitaux). Les blattes consomment l'appât, retournent dans leur abri et y meurent. L'effet trophallaxique (contamination entre blattes via les déjections et les régurgitations) propage le produit à toute la colonie. Application en gouttelettes ciblées sur les zones de passage, sans pulvérisation aérienne. Sans danger pour l'utilisateur après séchage.",
        },
        {
          title: "Insecticide résiduel et IGR en complément",
          text: "Pour les infestations importantes ou les surfaces étendues, un insecticide résiduel (à base de perméthrine, deltaméthrine ou bendiocarbe) est pulvérisé sur les zones de passage. Effet 4 à 8 semaines. Combiné aux régulateurs de croissance d'insectes (IGR : hydroprène, méthoprène) qui empêchent les nymphes de devenir adultes, le protocole brise le cycle de reproduction et évite les phénomènes de rebond.",
        },
        {
          title: "Mesures d'hygiène : indispensables au succès durable",
          text: "Sans modification de l'environnement, toute désinsectisation finit par échouer. Réparer les fuites (les blattes peuvent survivre plusieurs semaines sans nourriture mais pas sans eau), colmater les joints abîmés, sceller les fentes derrière les plinthes et les électroménagers, stocker les denrées en contenants hermétiques, sortir les déchets quotidiennement, nettoyer les graisses et résidus alimentaires sur les plans de travail et derrière les meubles.",
        },
      ],
      conclusionParagraph: "Une désinsectisation efficace contre les cafards et blattes combine gel appâts, insecticide résiduel, IGR et modification de l'environnement. Un traitement de rappel à 3 semaines est recommandé pour casser les éclosions d'œufs. Pour les restaurants et collectivités, un contrat d'entretien trimestriel garantit l'absence de rebond et la conformité HACCP. Contactez-nous pour un diagnostic dans les Bouches-du-Rhône.",
    },
  },
  {
    id: 9,
    slug: 'fourmis-invasion-prevention',
    title: 'Fourmis : en finir avec les invasions',
    date: '4 Fév. 2026',
    category: 'Désinsectisation',
    readMinutes: 4,
    image: images.fourmis,
    content: {
      introHeading: "Fourmis dans la maison : espèces, comportements et traitements efficaces",
      introParagraph: "La fourmi noire des jardins (Lasius niger) forme des colonies de 5 000 à 15 000 ouvrières, la fourmi pharaon (Monomorium pharaonis) atteint 300 000 ouvrières avec de multiples reines, et la fourmi d'Argentine (Linepithema humile), invasive en PACA et classée parmi les 100 pires envahisseurs mondiaux par l'UICN, forme des super-colonies continues sur plusieurs kilomètres. Identifier l'espèce est la condition n°1 d'un traitement efficace.",
      numberedItems: [
        {
          title: "Identifier l'espèce : quatre fourmis fréquentes en PACA",
          text: "Fourmi noire des jardins (3-5 mm, noir mat, nid au sol) : la plus courante, pénètre dans les maisons en été pour chercher du sucre. Fourmi pharaon (1,5-2 mm, jaune-beige translucide) : niche dans les cloisons chauffées, problème majeur dans les hôpitaux et collectivités. Fourmi charpentière (Camponotus, 6-12 mm, noire) : creuse le bois humide ou en décomposition. Fourmi d'Argentine (Linepithema humile, 2-3 mm, brune) : envahit le pourtour méditerranéen, super-colonies invasives.",
        },
        {
          title: "Le vol nuptial : signal d'une colonie mature",
          text: "Entre juillet et septembre, par temps chaud et humide après une averse, les fourmis ailées (futures reines et mâles) effectuent leur vol nuptial. L'apparition soudaine de dizaines de fourmis ailées dans une habitation signale qu'une colonie mature s'est établie à proximité immédiate (jardin, mur, sous-sol). Ces fourmis volantes ne piquent pas mais leur essaimage est l'occasion de localiser et de traiter la colonie source.",
        },
        {
          title: "Dégâts et risques : variables selon l'espèce",
          text: "La fourmi charpentière peut compromettre la solidité d'une charpente ou de boiseries humides en y creusant ses galeries (à ne pas confondre avec les termites : la charpentière ne mange pas le bois mais le creuse). La fourmi pharaon, en milieu hospitalier, peut véhiculer mécaniquement Staphylococcus, Pseudomonas et autres pathogènes nosocomiaux. La fourmi d'Argentine perturbe l'écosystème local en exterminant les insectes natifs et les autres espèces de fourmis.",
        },
        {
          title: "Gel appâts : la méthode de référence",
          text: "Le gel à base d'imidaclopride, de fipronil ou de spinosad est appliqué en gouttelettes sur les pistes visibles. Les ouvrières le consomment, le rapportent à la colonie via trophallaxie (régurgitation entre individus) et l'effet se propage jusqu'à la reine. Patience indispensable : l'éradication complète prend 1 à 3 semaines. Erreur fréquente : pulvériser un insecticide de contact en parallèle. Cela tue les ouvrières avant qu'elles ne rapportent l'appât et la colonie survit intacte.",
        },
        {
          title: "Traitement périmétrique extérieur",
          text: "Pour les fourmis qui entrent depuis l'extérieur (cas le plus fréquent en pavillon), un traitement insecticide est appliqué en barrière autour des fondations, des plinthes extérieures et des points d'entrée. Effet résiduel 4 à 8 semaines selon les produits (perméthrine, deltaméthrine, bifenthrine). Pour la fourmi d'Argentine en PACA, un traitement annuel au printemps est souvent nécessaire en raison de la pression continue des super-colonies environnantes.",
        },
        {
          title: "Prévention : couper l'accès et les sources",
          text: "Colmater toutes les fissures au niveau du sol et des huisseries avec un mastic silicone, joints de cuisine et de salle de bain entiers, suppression des sources d'humidité (fuites, infiltrations, condensation), plans de travail propres après chaque repas, sucre, miel et confitures dans des contenants étanches, gamelles d'animaux relevées entre les repas, bois de chauffage stocké à distance des murs (les fourmis charpentières y nichent puis migrent vers la charpente).",
        },
      ],
      conclusionParagraph: "Pour les fourmis classiques de jardin, un gel appâts associé à un colmatage des accès suffit généralement. Pour la fourmi pharaon (en milieu collectif ou hospitalier) et la fourmi d'Argentine (en PACA), seul un traitement professionnel ciblé sur les colonies sources est efficace. Contactez-nous pour un diagnostic et un plan d'action adapté à votre situation dans les Bouches-du-Rhône.",
    },
  },
  {
    id: 10,
    slug: 'moustique-tigre-prevention-printemps-2026',
    title: 'Moustique tigre : prévention et nouveaux enjeux pour le printemps 2026',
    date: '3 Avr. 2026',
    category: 'Moustiques',
    readMinutes: 5,
    image: images.moustiqueTigre2026,
    content: {
      introHeading: 'Le moustique tigre : un envahisseur discret mais préoccupant',
      introParagraph: "Originaire d'Asie du Sud-Est, le moustique tigre (Aedes albopictus) s'est désormais bien implanté en France. Plus petit que le moustique commun, il se distingue par ses rayures noires et blanches et son vol silencieux à basse altitude. Il est très sédentaire : cet insecte diurne ne se déplace que de moins de 200 mètres autour de son lieu de naissance. Autrement dit, si vous en avez chez vous, c'est qu'il est né chez vous ou chez vos voisins immédiats ! Voici comment limiter sa présence et s'en protéger dès le début du printemps.",
      numberedItems: [
        { title: 'Adopter la lutte préventive (suppression des gîtes larvaires)', text: "La femelle pond jusqu'à 200 œufs dans des eaux stagnantes. Même une infime quantité (bouchon en plastique, coupelle sous un pot de fleur) suffit. Videz régulièrement les soucoupes, seaux, pneus, et nettoyez vos gouttières. Couvrez hermétiquement les récupérateurs d'eau de pluie pour empêcher toute ponte." },
        { title: 'Prudence avec la lutte chimique et les méthodes alternatives', text: "L'utilisation anarchique d'insecticides est néfaste pour la biodiversité, tuant également les prédateurs naturels du moustique. De même, les plantes dites 'anti-moustiques', les ultrasons ou certaines plantes carnivores se révèlent inefficaces à grande échelle. La prévention mécanique reste indispensable." },
        { title: 'Favoriser les prédateurs naturels', text: "Les prédateurs comme les oiseaux insectivores (les hirondelles et martinets), les chauves-souris, ou encore certaines araignées consomment des moustiques. Bien que leur action réductrice soit limitée en période d'infestation urbaine, les accueillir aide à l'équilibre général du jardin." },
        { title: 'Solutions matérielles ciblées de nouvelle génération', text: "L'année 2026 met en avant les pièges pondoirs écologiques de nouvelle génération qui ciblent les femelles en quête de ponte, et l'équipement classique (moustiquaires aux fenêtres), qui reste l'un des rares barrages individuels vraiment efficaces pour garantir des nuits sans nuisible." }
      ],
      conclusionParagraph: "La lutte contre le moustique tigre repose d'abord sur une action préventive collective à l'échelle du voisinage. Ce nuisible étant un vecteur avéré d'infections (Dengue, Zika, Chikungunya), une infestation installée peut néanmoins nécessiter le diagnostic ou le renfort professionnel, notamment pour diagnostiquer et assainir les gîtes larvaires complexes avec des traitements bio-contrôlés.",
      contactButtonText: 'Contactez-nous pour un diagnostic de votre extérieur'
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
