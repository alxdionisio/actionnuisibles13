/**
 * Pages croisées nuisible × ville : /:slug (ex. /punaises-de-lit-istres).
 *
 * POURQUOI UN SOUS-ENSEMBLE, ET PAS 27 × 7.
 * Générer les 189 combinaisons au gabarit produirait des pages à ~3 % de contenu
 * unique : c'est la définition d'une doorway page, et le motif qui vaut une
 * action manuelle. Chaque entrée ici est rédigée à la main.
 *
 * POURQUOI CES COUPLES-LÀ.
 * Le titre d'une page ville est déjà « Dératisation et désinsectisation à X » :
 * un croisé sur la dératisation cannibaliserait /intervention/x. Ne sont donc
 * retenus que les nuisibles qu'aucun titre ne porte avec une ville — la page
 * ville les cite en H2, la page thématique porte le nuisible sans la commune.
 *
 * RÈGLE D'AJOUT : une entrée n'existe que si elle dit quelque chose que ni la
 * page ville ni la page thématique ne disent. Sinon, elle leur prend leur place.
 */
export const croises = [
  {
    slug: 'punaises-de-lit-istres',
    nuisible: 'Punaises de lit',
    ville: 'Istres',
    thematiqueSlug: 'elimination-punaises-de-lit',
    villeSlug: 'istres',
    title: 'Punaises de lit à Istres : traitement et protocole',
    description:
      "Traitement des punaises de lit à Istres : diagnostic des foyers, protocole multi-passages, préparation du logement. Intervention pour particuliers et hébergements.",
    sections: [
      {
        title: 'Pavillons, résidences et logements de passage',
        body: "L'habitat istréen mêle maisons individuelles avec chambres à l'étage, résidences collectives et un parc locatif meublé alimenté par les affectations et les missions temporaires. Ces trois situations ne posent pas le même problème. Dans un pavillon occupé par la même famille, le foyer reste souvent circonscrit à une seule pièce pendant des semaines, ce qui laisse la possibilité d'un traitement ciblé. Dans un logement reloué à intervalles courts, la rotation des occupants et de leurs bagages multiplie les points d'introduction, et l'insecte est parfois signalé longtemps après son arrivée. Le diagnostic commence donc par l'historique d'occupation, pas seulement par l'inspection du couchage.",
      },
      {
        title: 'Ce que la préparation du logement change',
        body: "Un traitement ne produit ses effets que sur un logement préparé. Cela suppose de retirer le linge et les textiles des zones de repos pour les passer en machine à température élevée puis au sèche-linge, de les enfermer ensuite dans des sacs hermétiques qui ne seront rouverts qu'après le dernier passage, et de dégager les plinthes, les têtes de lit et le pourtour des sommiers. À l'inverse, deux réflexes aggravent la situation : transporter un matelas ou un canapé vers une autre pièce, et déposer un meuble infesté sur le palier ou le trottoir, où quelqu'un le récupérera. Ces gestes déplacent l'infestation au lieu de la réduire.",
      },
      {
        title: "Pourquoi plusieurs passages, et ce qu'ils imposent",
        body: "Les œufs résistent mieux que les adultes et éclosent après la première intervention : c'est la raison technique pour laquelle le protocole comporte plusieurs passages espacés, calés sur ce délai d'éclosion. L'intervalle n'est pas une formalité. Entre deux passages, le logement doit rester occupé et meublé comme il l'est habituellement, un logement vidé ou déserté poussant les insectes vers les pièces voisines au lieu de les maintenir dans la zone traitée. Les occupants continuent de dormir à leur place habituelle. Des piqûres constatées après une première intervention font partie du déroulement attendu.",
      },
    ],
  },
  {
    slug: 'punaises-de-lit-martigues',
    nuisible: 'Punaises de lit',
    ville: 'Martigues',
    thematiqueSlug: 'elimination-punaises-de-lit',
    villeSlug: 'martigues',
    title: 'Punaises de lit à Martigues : traitement et protocole',
    description:
      "Traitement des punaises de lit à Martigues : logements mitoyens du centre ancien, protocole multi-passages, conseils de préparation. Particuliers et professionnels.",
    sections: [
      {
        title: "Un bâti ancien redécoupé, des cloisons qui ne séparent rien",
        body: "Dans les quartiers de L'Île, de Jonquières et de Ferrières, les immeubles ont été redivisés en petits logements au fil des décennies. Cloisons légères, planchers bois, conduits de cheminée condamnés et gaines percées après coup laissent des passages continus d'un appartement au suivant. La punaise de lit n'emprunte pas la porte palière : elle chemine le long des plinthes, des goulottes électriques et des trémies de réseaux. Un appartement correctement traité peut ainsi être recolonisé depuis le palier ou depuis le voisin mitoyen dans les semaines suivantes. C'est le premier facteur d'échec dans ce type d'immeuble, avant même la qualité du traitement.",
      },
      {
        title: "Mesurer l'étendue réelle avant d'agir",
        body: "Il faut savoir combien de logements sont concernés avant d'engager quoi que ce soit. Les indices se lisent ailleurs que sur le couchage : points noirs au dos des cadres, derrière les interrupteurs, dans les rainures d'un sommier à lattes, au revers d'un papier peint décollé. À l'échelle d'un immeuble, l'examen gagne à couvrir le logement qui signale, ses voisins de palier et ceux placés juste au-dessus et juste en dessous. Un occupant dont la peau ne réagit pas aux piqûres peut héberger une population installée sans rien remarquer : c'est fréquemment là que se trouve le point de départ.",
      },
      {
        title: "Ce que le voisinage et la copropriété ont à organiser",
        body: "Les parties privatives relèvent de chaque occupant, mais l'échelle du problème dépasse la porte d'entrée. Concrètement, il faut un interlocuteur unique — syndic, bailleur ou conseil syndical — pour recenser les logements à examiner, retenir une même fenêtre de passage pour les appartements contigus et transmettre les consignes de préparation avant la date arrêtée. Un traitement étalé sur plusieurs semaines, logement après logement, laisse aux punaises le temps de regagner les surfaces déjà traitées. Dans un immeuble sans syndic actif, l'accord amiable entre voisins reste la seule voie praticable, et il s'obtient plus facilement avant que le sujet ne devienne conflictuel.",
      },
    ],
  },
  {
    slug: 'nid-de-guepes-istres',
    nuisible: 'Nid de guêpes',
    ville: 'Istres',
    thematiqueSlug: 'destruction-nid-de-guepes',
    villeSlug: 'istres',
    title: 'Destruction de nid de guêpes à Istres',
    description:
      "Destruction de nid de guêpes et de frelons à Istres : repérage, neutralisation sécurisée, retrait du nid. Intervention rapide en période estivale.",
    sections: [
      {
        title: 'Les emplacements que personne ne pense à inspecter',
        body: "Sur les parcelles résidentielles istréennes, les nids les plus problématiques ne sont pas ceux que l'on découvre en levant la tête. La guêpe commune s'établit volontiers en cavité : sous une dalle de terrasse décollée, dans un muret creux, dans un composteur, ou dans le sol au pied d'une haie, où seul un trafic d'insectes à ras de terre trahit l'entrée. La poliste, elle, bâtit un petit nid nu et parfaitement visible sous une pergola ou une gouttière. Les deux cas n'appellent pas la même approche, et les confondre conduit à traiter au mauvais endroit.",
      },
      {
        title: 'Pinèdes, cabanons et bâtiments peu fréquentés',
        body: "Les parcelles bordées de pins et les terrains en lisière de boisement ajoutent une difficulté : le feuillage dense masque un nid jusqu'à ce qu'il ait pris du volume. Il en va de même de toute construction dont personne n'approche pendant des mois — cabanon de fond de jardin, local de pompe de piscine, remise à outils, combles non aménagés. Le nid s'y découvre au moment où l'on rouvre la porte, alors que la colonie est en pleine activité. Faire le tour de ces locaux au printemps, quand la fondatrice bâtit seule un nid de la taille d'une noix, évite cette découverte tardive.",
      },
      {
        title: "Le cycle de la colonie, et pourquoi ne pas s'en charger soi-même",
        body: "Une colonie de guêpes part d'une fondatrice unique au printemps, croît tout l'été et atteint son effectif maximal en fin de saison, quand les ouvrières défendent le nid le plus vivement et que les fruits tombés les rapprochent des terrasses. S'en occuper soi-même à ce stade cumule trois risques : la réaction de défense d'une colonie nombreuse, la position adoptée pour l'atteindre — échelle, pente de toiture, trappe de comble — et l'usage d'aérosols qui excitent les ouvrières sans atteindre le couvain au fond d'une cavité. Une personne allergique ne doit se trouver ni sur place, ni à proximité pendant l'opération.",
      },
    ],
  },
  {
    slug: 'nid-de-guepes-martigues',
    nuisible: 'Nid de guêpes',
    ville: 'Martigues',
    thematiqueSlug: 'destruction-nid-de-guepes',
    villeSlug: 'martigues',
    title: 'Destruction de nid de guêpes à Martigues',
    description:
      "Destruction de nid de guêpes et de frelons à Martigues : toitures du centre ancien, cabanons, jardins. Neutralisation sécurisée et retrait du nid.",
    sections: [
      {
        title: 'Génoises, tuiles et combles des maisons de ville',
        body: "Les maisons martégales couronnées d'une génoise offrent aux guêpes un volume d'installation remarquable : entre les rangs de tuiles creuses maçonnées et le mur, la cavité est abritée, sèche et invisible depuis la chaussée. Le nid ne se signale que par le trajet répété des insectes vers un point fixe de la corniche. Sous la couverture, l'entrée se fait par une tuile déplacée ou un about de chevron ouvert, et la colonie s'installe alors dans l'isolant ou contre une panne. Dans ces configurations, le nid n'est le plus souvent pas extractible d'un bloc : c'est l'accès qui est traité.",
      },
      {
        title: 'Travailler au bord des canaux et dans les venelles',
        body: "La contrainte n'est pas seulement technique. Sur une façade qui borde un quai, il n'existe pas toujours de sol stable pour caler un pied d'échelle, et l'approche doit se faire depuis l'intérieur du logement ou depuis un balcon. Dans les rues les plus étroites, la largeur disponible interdit tout déploiement encombrant. S'ajoute la question des tiers : terrasses de café, linge étendu, fenêtres ouvertes sur le même pan de mur. Ces éléments déterminent l'heure de passage autant que la disponibilité de l'occupant, et ils doivent être connus avant le déplacement.",
      },
      {
        title: 'Cabanons, bateaux remisés et locaux rouverts en saison',
        body: "Sur les secteurs littoraux et les rives, cabanons, coffres de quai et embarcations bâchées demeurent clos une grande partie de l'année. Une colonie peut s'y développer entièrement sans que personne la remarque, et n'apparaît qu'à la réouverture : bâche soulevée, porte débloquée, geste qui met d'un coup plusieurs centaines d'ouvrières en alerte dans un volume fermé. La circonstance est particulièrement défavorable, puisque rien n'a signalé la présence du nid au préalable, contrairement à une installation sous corniche que l'on observe depuis l'extérieur avant d'approcher.",
      },
    ],
  },
  {
    slug: 'chenilles-processionnaires-istres',
    nuisible: 'Chenilles processionnaires',
    ville: 'Istres',
    thematiqueSlug: 'traitement-chenilles-processionnaires',
    villeSlug: 'istres',
    title: 'Chenilles processionnaires à Istres : traitement des pins',
    description:
      "Traitement des chenilles processionnaires du pin à Istres : échenillage, pièges à collerette, calendrier d'intervention. Risque urticant pour enfants et animaux.",
    sections: [
      {
        title: 'Le danger tient au poil, pas à la chenille',
        body: "Ce qui provoque les réactions n'est pas une morsure mais un poil microscopique, libéré par milliers dès que l'insecte est dérangé. Ces poils se détachent, voyagent avec le vent et demeurent actifs bien après le départ de la colonie : un nid tombé, un tas de branches coupées ou la terre située sous un arbre colonisé restent irritants durant des mois. Chez l'enfant, le contact se produit en jouant au sol ou sur une pelouse. Chez le chien, il survient en flairant une file au sol, avec un risque de lésion de la langue qui impose une consultation vétérinaire sans attendre.",
      },
      {
        title: 'Des arbres plantés au contact des usages quotidiens',
        body: "À Istres, l'exposition vient rarement des massifs éloignés : elle vient des sujets isolés plantés à quelques mètres des maisons, des alignements de parking, des arbres qui bordent une aire de jeux, un terrain de sport ou un cheminement scolaire. La distance est le critère décisif. Un arbre colonisé au fond d'une parcelle boisée ne concerne personne ; le même arbre au-dessus d'une terrasse ou d'un enclos à chien pose un problème d'un autre ordre. Le recensement utile classe donc les pins selon leur proximité avec les espaces réellement fréquentés, avant de décider lesquels traiter.",
      },
      {
        title: 'Deux stades, deux méthodes distinctes',
        body: "L'intervention dépend de l'endroit où se trouvent les chenilles. Tant qu'elles sont regroupées dans leur nid d'hiver, ce nid peut être coupé et évacué : l'échenillage suppose d'atteindre la branche, une protection intégrale de l'opérateur et une élimination du nid, qui ne doit être ni brûlé au sol ni abandonné sur place. Lorsque les chenilles quittent l'arbre en fin d'hiver pour descendre s'enfouir, l'échenillage perd son objet : vient le temps du piège à collerette, un collier ceinturant le tronc qui dérive la file vers un sac. Posé trop tard, il n'intercepte plus rien.",
      },
    ],
  },
  {
    slug: 'cafards-port-de-bouc',
    nuisible: 'Cafards et blattes',
    ville: 'Port-de-Bouc',
    thematiqueSlug: 'desinsectisation-cafards-et-blattes',
    villeSlug: 'port-de-bouc',
    title: 'Cafards et blattes à Port-de-Bouc : désinsectisation',
    description:
      "Désinsectisation des cafards et blattes à Port-de-Bouc : immeubles collectifs, gaines techniques, traitement coordonné des logements contigus.",
    sections: [
      {
        title: "La colonne technique, et non l'appartement, est l'unité du problème",
        body: "Dans un immeuble, la blatte germanique ne se répartit pas par appartement mais par réseau. Les traversées de dalle situées autour des évacuations d'évier, de baignoire et de lave-linge relient verticalement des pièces d'eau superposées, et le coffrage qui les habille forme un espace chaud, sombre et jamais ouvert. La population se tient là ; les appartements n'en sont que les zones d'alimentation. Une cuisine impeccablement tenue au huitième étage peut donc recevoir des individus venus d'un logement placé plusieurs niveaux plus bas, sans qu'aucun manquement ne soit imputable à ses occupants.",
      },
      {
        title: "Ce qui se produit quand un seul appartement est traité",
        body: "Traiter un logement isolé donne un résultat perceptible pendant quelques semaines, puis la situation revient. Deux mécanismes l'expliquent. Les individus abrités dans la gaine au moment du passage n'ont pas été atteints et réinvestissent une surface redevenue libre. Par ailleurs, une application par pulvérisation peut provoquer une dispersion : les blattes fuient la zone traitée vers les appartements voisins et s'y établissent. Le signalement suivant vient alors d'à côté. Sur un bâtiment entier, cette succession d'interventions séparées peut se prolonger des années sans que la population globale diminue.",
      },
      {
        title: 'Ce que la coordination exige dans les faits',
        body: "Une opération à l'échelle d'une cage d'escalier repose sur des décisions qu'un occupant seul ne peut pas prendre. Le gestionnaire — bailleur social, syndic ou propriétaire unique — doit arrêter un périmètre englobant les parties communes, les locaux à déchets et les gaines accessibles, et pas uniquement les appartements ayant signalé le problème. Il faut ensuite une date commune par colonne, une consigne écrite remise assez tôt pour que chacun libère le dessous de son évier, et une réponse pour les logements vacants ou fermés, qui resteraient sinon des réservoirs. Le passage suivant se prépare dans les mêmes conditions.",
      },
    ],
  },
];
