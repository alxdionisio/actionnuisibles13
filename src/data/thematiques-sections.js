/**
 * Contenu long par thématique, séparé de thematiques.js sur le modèle de
 * villes-sections.js : le registre garde slug, titres, meta et les quatre blocs
 * courts (intro, pourquoi, comment, reflexe), ce fichier porte la prose.
 *
 * Clé = slug de la thématique.
 *
 * PARTAGE DES RÔLES — c'est la règle qui empêche ces pages de se cannibaliser :
 *   - page thématique : LE NUISIBLE lui-même. Identification, biologie utile,
 *     risque sanitaire ou matériel, méthodes, prévention, réglementation.
 *     Valable partout, indépendant de la commune.
 *   - page croisée    : ce nuisible DANS une commune donnée (voir croises.js).
 *   - page ville      : une commune, tous nuisibles confondus.
 * Une section qui parlerait d'une commune n'a rien à faire ici ; une section
 * qui redirait la biologie du nuisible n'a rien à faire dans un croisé.
 *
 * RÈGLE : ces sections n'existent que si elles apportent autre chose que les
 * quatre blocs courts de thematiques.js. Répéter n'aide pas à être indexé —
 * c'est même ce qui a valu à ces pages un « exploré, actuellement non indexé ».
 *
 * AUCUNE AFFIRMATION DE CAPACITÉ : ces sections décrivent ce que la situation
 * exige, jamais ce que l'entreprise promet. Pas d'habilitation, de délai, de
 * taux de réussite ni de garantie. Les points réglementaires sont datés et
 * relèvent d'une relecture par le client avant toute modification.
 */
export const thematiquesSections = {
  'deratisation-rats-et-souris': [
    {
      title: 'Trois espèces, trois façons de lire les indices',
      body:
        "Le surmulot, le rat noir et la souris grise ne laissent pas la même signature. Les crottes du surmulot sont trapues et regroupées près d'une ressource ; celles du rat noir, plus fines et fuselées, se répartissent le long des trajets ; celles de la souris, de la taille d'un grain de riz, se comptent par dizaines partout où l'animal circule. La hauteur renseigne tout autant : le surmulot creuse, longe le sol et fréquente les niveaux enterrés, quand le rat noir grimpe volontiers et se tient sous les toitures, dans les faux plafonds et les palmiers. Un bruit de plafond nocturne n'oriente donc pas la recherche au même endroit qu'une galerie ouverte contre une fondation. Le grignotage se lit aussi : une souris entame beaucoup d'emballages sans en vider aucun, un rat en éventre un seul.",
    },
    {
      title: 'Pourquoi rien ne se passe la première semaine',
      body:
        "Le surmulot se méfie de tout objet apparu dans un environnement qu'il connaît : poste, piège ou denrée inhabituelle sont contournés plusieurs jours avant d'être approchés. Cette prudence explique qu'une pose demeure sans effet apparent au début, et qu'un dispositif déplacé au bout de deux jours, par impatience, ramène tout au point de départ. La souris répond à l'inverse, explorant chaque nouveauté, mais elle mange un peu partout et très peu à la fois : la quantité qu'elle absorbe dépend d'abord du nombre de points proposés. Deux animaux, deux logiques de pose. S'ajoute une précaution sans exception : un rongeur affaibli ou mort devient une proie facile pour un chat, un chien ou un rapace, d'où des postes refermés et le ramassage des cadavres.",
    },
    {
      title: "Ce qui ferme une ouverture, et ce qui n'y change rien",
      body:
        "Un jeune rongeur franchit un jour bien plus mince qu'on ne l'imagine : dès lors que la tête passe, le corps suit. D'où l'inventaire préalable des entrées : seuils, grilles descellées, traversées de câbles et de canalisations, jonctions de bardage, chatières de couverture. Le matériau décide du reste. Mousse expansive, silicone, laine de verre et bois tendre sont percés en quelques nuits ; une tôle, un grillage à maille serrée scellé au mortier ou une plaque métallique résistent. Côté dissuasion, les émetteurs à ultrasons vendus au grand public n'ont jamais démontré d'effet durable : l'animal s'accoutume, et un bâtiment chauffé et approvisionné demeure attirant malgré le bruit. Huiles essentielles et naphtaline relèvent de la même illusion.",
    },
  ],
  'destruction-nid-de-guepes': [
    {
      title: "Guêpe, abeille, bourdon : l'insecte décide de la suite",
      body:
        "Une identification erronée conduit à détruire ce qu'il aurait fallu faire récupérer. L'abeille domestique est velue, brun-roux et mate, et transporte du pollen sur ses pattes arrière ; la guêpe est glabre, luisante, jaune vif rayée de noir, avec une taille très marquée. Le comportement tranche mieux encore que l'aspect : l'abeille visite les fleurs, la guêpe s'intéresse à la viande, au poisson et aux boissons sucrées, et tourne autour des tables. Une grappe compacte suspendue à une branche au printemps n'est pas un nid mais un essaim d'abeilles en transit, qui se récupère et se déplace : cela relève d'un apiculteur, non d'une neutralisation. Le bourdon, gros et poilu, occupe une petite colonie au sol et s'éteint de lui-même à l'automne.",
    },
    {
      title: "La piqûre : ce qui est banal et ce qui ne l'est pas",
      body:
        "Une atteinte isolée provoque douleur, rougeur et gonflement localisé pendant quelques heures à deux jours ; le froid soulage. Trois situations sortent de ce cadre. Une réaction qui s'étend bien au-delà du point touché et s'aggrave après plusieurs heures ; des signes généraux (plaques à distance, visage enflé, gêne respiratoire, vertiges, vomissements) qui imposent d'appeler les secours sans attendre ; enfin une atteinte de la bouche ou de la gorge, après ingestion d'une boisson où l'insecte s'était posé, dont l'œdème peut fermer les voies aériennes. La guêpe, au dard lisse, frappe plusieurs fois sans se détacher ; l'abeille abandonne son dard et sa glande, qu'on retire en raclant plutôt qu'en pinçant.",
    },
    {
      title: "Après la neutralisation : les retardataires et l'emplacement",
      body:
        "Les ouvrières parties en quête reviennent au fil des heures suivantes et retrouvent occupé un point de repère qu'elles connaissent par cœur. Leur va-et-vient décroît sur un à deux jours, sans que cela signe un échec. C'est également pourquoi l'orifice n'est pas rebouché dans la foulée : obturer trop tôt enferme une fraction de la colonie, qui cherche alors une autre issue, parfois vers l'intérieur du bâtiment. Un nid délaissé n'est jamais réoccupé l'année d'après, chaque fondatrice bâtissant le sien ; le lieu, en revanche, est retenu, et le même recoin abrité, orienté au même soleil, sera choisi saison après saison. Enlever le nid vide relève donc de la propreté, pas de la prévention.",
    },
  ],
  'destruction-nid-de-frelons-et-frelon-asiatique': [
    {
      title: "Deux frelons qu'on confond en permanence",
      body:
        "Le frelon européen est le plus grand des deux : abdomen jaune barré de brun-roux, tête claire, pattes entièrement sombres. Il vole après la tombée du jour et vient heurter les fenêtres éclairées, ce qu'aucun autre ne fait. Le frelon asiatique est un peu plus petit, presque entièrement noir, avec un large anneau orangé en bout d'abdomen, une face orange et le bout des pattes franchement jaune. Il cesse toute activité la nuit venue. Cette différence de livrée n'est pas une subtilité d'entomologiste : l'européen est un prédateur indigène peu enclin à s'éloigner pour attaquer, et le supprimer systématiquement ne se justifie pas lorsque son nid se trouve à l'écart des passages.",
    },
    {
      title: 'Nid primaire, nid secondaire, et la question du moment',
      body:
        "Le frelon asiatique change d'adresse en cours de saison. Au printemps, la fondatrice élève seule une petite sphère qui n'excède guère le volume d'une orange, sous une avancée de toit, dans un abri de jardin ou un coffret de compteur. Lorsque l'effectif grossit, la colonie délaisse ce premier ouvrage pour en édifier un second, fréquemment très haut dans un arbre, où elle culmine en fin d'été. Cette boule volumineuse apparaît aux yeux de tous à la chute des feuilles, en novembre et décembre : précisément quand elle est vide et que les futures fondatrices se sont déjà dispersées pour hiverner. Agir à ce stade ne modifie en rien l'année suivante : seul un nid encore actif compte.",
    },
    {
      title: "Statut de l'espèce et pression sur les ruchers",
      body:
        "Le frelon asiatique figure sur la liste européenne des espèces exotiques envahissantes et compte parmi les dangers sanitaires reconnus pour l'abeille domestique. Aucun texte n'impose à un particulier de faire détruire un nid sur son terrain, mais des collectivités et des structures apicoles organisent un signalement, parfois assorti d'une prise en charge : interroger la mairie en amont fait partie des réflexes utiles. Devant une ruche, le frelon se tient en vol stationnaire et prélève les butineuses au retour ; la ruche finit par restreindre ses sorties, et son stock de réserves s'en ressent à l'approche de l'hiver. Le piégeage printanier des fondatrices reste discuté : les modèles peu sélectifs capturent massivement d'autres insectes pour un bénéfice qui n'est pas établi.",
    },
  ],
  'traitement-chenilles-processionnaires': [
    {
      title: 'Celle du pin et celle du chêne ne suivent pas le même calendrier',
      body:
        "Les deux espèces portent le même nom d'usage et n'occupent pas la même période. La processionnaire du pin traverse l'hiver dans une poche de soie épaisse, blanche, bien visible en bout de rameau, puis descend en file au sortir de la saison froide pour s'enfouir. Celle du chêne ne bâtit rien de comparable : ses chenilles se rassemblent en plaques sombres et feutrées appliquées contre le tronc ou une grosse branche, se repèrent beaucoup moins bien, et leur période à risque tombe au printemps et au début de l'été, quand les pins sont déjà redevenus tranquilles. Chercher une poche blanche dans un chêne ne mène nulle part, et conclure à l'absence de danger parce que les pins voisins sont indemnes conduit à la même impasse.",
    },
    {
      title: "Le papillon, le manchon d'œufs et la diapause",
      body:
        "Ce qui se remarque en hiver s'est joué l'été précédent. Un papillon nocturne, discret et de vie brève, dépose en juillet ou en août un manchon d'œufs enroulé autour d'une aiguille ou d'un rameau ; les larves en sortent quelques semaines plus tard et passent par cinq stades avant la descente. Les poils irritants n'apparaissent qu'à partir du troisième, d'où une fenêtre pendant laquelle la colonie est installée sans être encore redoutable. Une fois enfouies, les chrysalides peuvent patienter sous terre plusieurs années avant d'émerger : un secteur calme deux hivers d'affilée n'est pas assaini pour autant, et la pression change beaucoup d'un hiver au suivant sans que l'entretien des arbres y soit pour quelque chose.",
    },
    {
      title: "Ce que les méthodes préventives font, et ce qu'elles ne font pas",
      body:
        "Trois approches circulent, de portées inégales. Les pièges à phéromone attirent les mâles durant le vol estival : ils renseignent sur l'intensité et sur les dates, sans réduire sensiblement la ponte. Les traitements biologiques appliqués à l'automne reposent sur une bactérie qui n'agit que sur de jeunes larves l'ayant ingérée, ce qui suppose une application précoce, atteignant le houppier, et par temps calme : trois conditions rarement réunies sur un grand sujet isolé. Les nichoirs à mésanges relèvent d'une régulation lente et partielle, utile en accompagnement, sans prise sur une infestation déclarée. Aucune de ces voies ne dispense de s'occuper des poches déjà formées lorsque l'arbre borde un lieu fréquenté.",
    },
  ],
  'elimination-punaises-de-lit': [
    {
      title: 'Punaise, puce, moustique : la lésion ne suffit pas à trancher',
      body:
        "Les marques se ressemblent trop d'une espèce à l'autre pour fonder un diagnostic. La puce concentre ses atteintes sur les chevilles et le bas des jambes, et suppose presque toujours un animal ou une habitation restée close. Le moustique s'en prend aux parties découvertes, dedans comme dehors, et démange immédiatement. La punaise touche les zones en contact avec le drap (épaules, dos, bras) et la réaction peut n'apparaître que le lendemain, voire bien plus tard, ce qui brouille toute chronologie. S'ajoutent des causes étrangères à tout insecte : intolérance à un textile, à une lessive, affection de la peau. Une preuve matérielle est seule décisive : l'insecte, une mue translucide, un point sombre qui s'étale au frottement.",
    },
    {
      title: "La résistance aux insecticides, et ce qu'elle disqualifie",
      body:
        "Les populations actuelles sont, en grande partie, peu sensibles aux familles d'insecticides les plus répandues dans le commerce : cuticule épaissie, enzymes de détoxication, mutation de la cible nerveuse. Un aérosol pris en rayon a donc toutes les chances de supprimer quelques individus directement atteints et de laisser intacte la population dissimulée. Diffuseurs et fumigènes font pire : le brouillard ne gagne pas les fentes où l'insecte se tient, et son caractère irritant pousse les survivants à se répandre vers les pièces et les logements voisins. De là le poids, dans les protocoles actuels, de ce qui ne relève pas de la chimie : action de la chaleur, vapeur, aspiration, mise sous housse des couchages.",
    },
    {
      title: 'Location et hébergement : le cadre juridique',
      body:
        "Depuis 2018, un logement proposé à la location doit être exempt de toute infestation d'espèces nuisibles et de parasites pour être tenu pour décent, et la punaise de lit entre dans ce champ. Le partage des charges se décide ensuite sur l'origine : au bailleur d'agir lorsque la présence précède l'entrée dans les lieux ou concerne l'immeuble, à l'occupant d'assumer ce qui découle de son propre usage, le juge tranchant en cas de désaccord. Une facture d'intervention, des constats datés et des échanges écrits pèsent alors davantage qu'un accord verbal. Du côté de l'hébergement touristique, aucun texte dédié n'impose de dispositif, mais l'obligation générale de sécurité et la responsabilité contractuelle continuent de s'appliquer.",
    },
  ],
  'desinsectisation-cafards-et-blattes': [
    {
      title: "L'insecte entré par la fenêtre n'est pas celui qui s'installe",
      body:
        "Toutes les blattes trouvées dans une pièce ne colonisent pas les habitations. L'été, des blattes forestières venues des jardins et des haies pénètrent par les ouvertures éclairées, se retrouvent au plafond ou sur un mur, et ne se reproduisent pas à l'intérieur : elles meurent sur place en quelques jours et le phénomène s'arrête avec la saison. L'espèce qui s'établit réellement en cuisine est plus petite, brun clair, marquée de deux bandes foncées parallèles sur la plaque qui recouvre sa tête, et ne se montre qu'à l'obscurité. Un juvénile, presque noir et dépourvu d'ailes développées, n'a pas du tout l'allure de l'adulte, ce qui fait conclure à tort à la cohabitation de deux espèces.",
    },
    {
      title: "L'oothèque, et pourquoi le deuxième passage n'est pas facultatif",
      body:
        "Les œufs sont réunis dans une capsule rigide que la femelle traîne accrochée à son abdomen jusqu'à l'éclosion, ou dissimule quelque part selon l'espèce. Cette enveloppe met son contenu à l'abri de ce qui atteint les adultes : une population décimée un jour donné se reconstitue depuis les capsules déjà déposées. D'où le principe d'un contrôle différé, calé sur le délai d'éclosion. Un appât avalé présente ici un avantage propre : ces insectes consomment déjections et cadavres de leurs congénères, si bien que la matière active gagne de proche en proche les individus restés cachés, jeunes compris, qui ne quittent pas encore l'abri. Aucune application de surface ne déclenche pareil enchaînement.",
    },
    {
      title: 'Ce que la blatte laisse derrière elle',
      body:
        "Le risque ne se limite pas au passage de l'insecte sur les denrées. Mues, fragments de cuticule et déjections s'accumulent en poussière fine dans les rangements, sous les appareils et derrière les plinthes décollées ; ils comptent parmi les allergènes domestiques les mieux documentés, liés à des manifestations respiratoires chez l'enfant en habitat dense. Cette poussière demeure active après la disparition des insectes : une opération qui s'arrête à la mortalité laisse en place ce qui déclenche les symptômes. Le nettoyage qui suit (aspiration des recoins avec un filtrage adapté, dépose des baguettes décollées, lavage des surfaces de rangement) appartient donc au traitement, et non à la remise en ordre.",
    },
  ],
  'traitement-contre-les-fourmis': [
    {
      title: "Identifier l'espèce avant de fixer un objectif",
      body:
        "Trois cas reviennent, et la conduite à tenir diffère à chaque fois. La fourmi d'Argentine, minuscule et brune, très implantée sur le pourtour méditerranéen, forme des réseaux de nids qui ne se combattent pas entre eux et couvrent des quartiers entiers : sur le périmètre d'une seule maison, on gère une pression permanente plutôt qu'on n'élimine une colonie. La fourmi pharaon, jaunâtre et à peine visible, vit dans les bâtiments chauffés et quitte rarement les gaines et les cloisons. La fourmi charpentière, grande et sombre, ne se nourrit pas de bois mais y creuse ses galeries, et trahit par la sciure qu'elle rejette une charpente ou une poutre restée humide : le dommage matériel est là, pas sur le plan de travail.",
    },
    {
      title: 'Pourquoi le produit qui tue vite échoue',
      body:
        "Ce qui circule sur une paillasse représente une fraction infime de l'effectif ; tout le reste, œufs, larves et reines compris, se tient hors de vue. Un insecticide de contact supprime les fourrageuses du moment et épargne la colonie, qui rétablit son approvisionnement quelques jours plus tard par un autre itinéraire. Pire, les formulations répulsives et les nettoyants parfumés passés sur les pistes fragmentent le réseau : plusieurs espèces réagissent en scindant leurs nids, et un foyer en devient deux. L'appât procède à l'inverse, en misant sur la lenteur : la fourrageuse doit avoir le temps de rentrer et de partager sa prise par régurgitation, de bouche en bouche, jusqu'aux individus qui ne sortent jamais. Effacer les pistes ou pulvériser à côté ruine ce mécanisme.",
    },
    {
      title: 'Saison, essaimage et ressources extérieures',
      body:
        "Les besoins d'une colonie évoluent au fil de l'année : élevage du couvain au printemps, avec une demande en protéines et en matières grasses ; recherche de sucres le reste du temps. Un appât délaissé n'est donc pas forcément mauvais, c'est parfois le mauvais moment. L'apparition soudaine d'individus ailés à l'intérieur ne signale pas une arrivée venue du dehors mais un nid déjà établi dans un mur, un vide de plancher ou un encadrement, qui libère ses sexués ; l'épisode dure quelques heures et le renseignement, lui, vaut pour longtemps. Dehors enfin, les pucerons fixés sur un rosier ou un arbuste sécrètent un miellat que les fourmis exploitent et défendent : traiter la plante réduit la ressource, et éloigner les branches du mur supprime la passerelle.",
    },
  ],
  'demoustication-moustique-tigre': [
    {
      title: "Un insecte qui ne vient pas de loin",
      body:
        "Contrairement au moustique commun des zones humides, le tigre effectue toute sa vie dans un rayon très réduit, de l'ordre de cent à quelques centaines de mètres autour de son lieu de naissance. Cette particularité change tout : les femelles qui piquent sur une terrasse sont presque toujours nées dans le jardin, chez le voisin immédiat ou dans la copropriété. Il devient alors inutile d'incriminer un marais lointain ou un cours d'eau, la source est à portée de regard. Le revers de cette sédentarité, c'est qu'un seul récipient négligé à deux pas entretient la nuisance de tout un ensemble de maisons, et qu'une parcelle traitée seule reste exposée tant que la mitoyenne ne l'est pas. La discussion entre riverains fait donc partie du travail, au même titre que l'inspection.",
    },
    {
      title: 'Quelques centimètres cubes suffisent à la ponte',
      body:
        "Le tigre ne pond pas dans les étendues d'eau : il lui faut un volume minuscule, parfois quelques centimètres cubes, à l'abri et souvent sombre. La liste des contenants concernés surprend par sa banalité. Soucoupes de pots, seaux, arrosoirs, bâches repliées, pneus entreposés, jouets d'enfants, pieds de parasol creux, gouttières encombrées de feuilles, regards d'évacuation, siphons de terrasse peu utilisés, réserves d'eau de pluie non couvertes, vases de cimetière. Les œufs sont déposés au-dessus du niveau, contre la paroi, et attendent la prochaine mise en eau, y compris après plusieurs mois de sécheresse : vider un récipient sans en frotter les bords laisse donc la ponte intacte. Une averse, un arrosage, et le cycle reprend en une semaine à peine sous la chaleur estivale.",
    },
    {
      title: "Jusqu'où va une opération privée, et où commence la collectivité",
      body:
        "Une opération menée sur un terrain privé porte sur ce terrain. Les applications dirigées vers la végétation où les adultes se reposent perdent leur effet au bout de quelques jours, et n'empêchent pas l'arrivée de femelles voisines ; elles touchent par ailleurs d'autres insectes présents sur le feuillage, ce qui justifie de les réserver aux situations où la gêne est réelle et les gîtes déjà supprimés. Les pièges pondoirs et les bornes à CO2 relèvent de la même logique de réduction partielle. Au-delà de la clôture, la compétence appartient aux acteurs publics : la surveillance du moustique tigre et les traitements sur l'espace collectif sont organisés à l'échelle départementale, avec un signalement des habitants via les dispositifs prévus par les communes et l'agence régionale de santé. Un particulier gêné par un foyer situé sur un terrain communal ou une voie publique a donc intérêt à le signaler plutôt qu'à traiter chez lui.",
    },
  ],
  'traitement-des-termites': [
    {
      title: "Le bois est consommé par l'intérieur",
      body:
        "Les ouvriers évitent la lumière et l'air sec. Ils consomment la partie tendre du bois en respectant une mince pellicule extérieure, qui conserve l'aspect d'une pièce intacte : un montant de porte peut être évidé sur toute sa longueur sans qu'aucune ouverture n'apparaisse. Le diagnostic repose donc sur des indices indirects. Un poinçon enfoncé sans résistance, un son mat sous le maillet, un léger affaissement de surface valent davantage qu'un examen visuel. À l'intérieur, les galeries suivent le fil du bois et sont tapissées d'un enduit terreux mêlé d'excréments, détail qui les distingue des cavités propres laissées par d'autres ravageurs. Papier, carton et isolants tendres sont attaqués au passage, ce qui explique des archives ou des plinthes rongées loin de toute charpente. Une colonie reste par ailleurs active plusieurs années au même endroit tant que l'humidité qui l'a attirée subsiste.",
    },
    {
      title: 'Capricorne, vrillette, termite : trois traces à ne pas confondre',
      body:
        "Trois ravageurs du bois sont couramment confondus, et leurs traces ne se lisent pas de la même façon. Le capricorne des maisons s'attaque aux résineux : sa larve creuse des galeries larges, et l'adulte sort par un orifice ovale de quelques millimètres, laissant une vermoulure grossière ; on entend parfois un grignotement régulier dans une charpente silencieuse. La petite et la grosse vrillette percent au contraire des trous parfaitement ronds, d'un à trois millimètres, accompagnés d'une poudre fine qui coule sur le sol. Le termite, lui, ne perce aucun trou de sortie et ne rejette pas de sciure : rien ne tombe, rien ne s'entend. Sa signature est extérieure, ces cordonnets de terre agglomérée larges comme un crayon qui franchissent une maçonnerie pour relier le sol au bois.",
    },
    {
      title: 'Déclaration en mairie et zones délimitées par arrêté',
      body:
        "Le code de la construction et de l'habitation encadre la lutte contre les termites. Lorsqu'un immeuble bâti ou non bâti est contaminé, l'occupant, ou à défaut le propriétaire, en fait la déclaration à la mairie ; la démarche incombe au détenteur du bien, et non à l'intervenant technique. Le préfet peut par ailleurs délimiter par arrêté des zones contaminées ou susceptibles de l'être à court terme. Dans ces périmètres, la vente d'un immeuble bâti s'accompagne d'un état relatif à la présence de termites, établi par un diagnostiqueur certifié et joint au dossier de diagnostic technique, et une démolition peut être soumise à une obligation d'incinération ou de traitement des bois sur place. La liste des communes concernées évolue : elle se vérifie auprès de la préfecture ou de la mairie avant toute transaction.",
    },
  ],
  'depigeonnage-et-protection-anti-pigeons': [
    {
      title: "Pourquoi on écarte l'oiseau au lieu de le supprimer",
      body:
        "Le pigeon biset et sa forme citadine appartiennent à la faune sauvage, et à ce titre la destruction, la capture et le transport d'oiseaux ne sont pas laissés à l'initiative d'un occupant. Les opérations éventuelles de régulation relèvent de décisions administratives encadrées, prises au niveau départemental, et le nourrissage est interdit par de nombreux règlements sanitaires communaux. Il faut donc retenir la logique inverse de celle appliquée aux insectes ou aux rongeurs : on modifie le bâtiment pour qu'il cesse d'offrir un appui, une cavité ou une ressource, et la colonie se reporte ailleurs d'elle-même. Effaroucheurs sonores, leurres de rapace et gels répulsifs relèvent du même principe, avec une limite connue : l'oiseau s'y habitue vite lorsque le site reste confortable.",
    },
    {
      title: 'Ce que les fientes abîment, et les précautions de nettoyage',
      body:
        "Les déjections sont acides et chargées en sels : déposées en couche, elles ternissent la pierre, piquent le zinc et l'acier peint, décollent les revêtements d'étanchéité et finissent par obstruer chéneaux et descentes, avec des infiltrations à la clé. Le volume accumulé sous un dortoir surcharge en outre les rives et les plafonds rapportés. Le versant sanitaire impose ses propres précautions : une fiente sèche se réduit en poussière au moindre balayage, et c'est cette poussière inhalée qui pose problème, tout comme les acariens, puces et autres parasites qui quittent un nid abandonné pour gagner l'intérieur. Le nettoyage se fait donc humidifié, avec protection respiratoire, gants et vêtements dédiés, avant désinfection puis pose des dispositifs, jamais l'inverse.",
    },
    {
      title: 'Filet, pointes, câble tendu : à quoi tient le choix',
      body:
        "Aucun dispositif ne convient partout, et un choix mal ajusté se voit en quelques semaines. Le filet ferme un volume entier, loggia, cour intérieure, sous-face de charpente ou verrière ; il exige un maillage adapté à l'espèce, une tension régulière et des points d'ancrage sains, faute de quoi un oiseau se glisse derrière et s'y trouve piégé. Les pointes conviennent aux surfaces étroites, appuis de fenêtre, corniches, enseignes, à condition de couvrir toute la profondeur : une bande posée trop en retrait laisse un rebord libre où les oiseaux se réinstallent aussitôt. Les câbles tendus sur ressorts, plus discrets, rendent un perchoir instable sans masquer la façade, argument décisif sur un bâtiment vu depuis la rue ou soumis à l'avis d'un architecte. Dans tous les cas, la durabilité tient à la préparation du support : un scellement sur une pierre farineuse ou sur un enduit gonflé par les infiltrations ne tiendra pas une saison.",
    },
  ],
  'traitement-contre-les-mouches': [
    {
      title: 'Trois mouches, trois adresses différentes',
      body:
        "La mouche domestique, grise et rayée sur le thorax, se développe sur les matières organiques humides : fond de poubelle, litière, fumier, compost trop azoté. Une présence continue désigne un gisement voisin, et non des visiteuses venues d'ailleurs. Les minuscules mouches noires qui décollent quand on arrose une plante verte sont des sciarides : leurs larves consomment le terreau maintenu détrempé, et le problème se règle en laissant sécher le substrat, jamais avec un insecticide d'ambiance. La mouche à viande, plus grosse, bleue ou verte et métallique, suit une autre logique : elle pond sur un cadavre, et une apparition brutale de gros individus lourds dans une pièce fermée fait d'abord penser à un rongeur mort dans une cloison, un conduit ou sous un plancher.",
    },
    {
      title: "Chercher le support de ponte, pas les adultes",
      body:
        "Un adulte vit quelques semaines et une femelle dépose plusieurs centaines d'œufs ; le passage de l'œuf à la mouche volante demande une poignée de jours par temps chaud. Toute action qui ne vise que les individus en vol travaille donc sur la partie la plus renouvelable de la population, et la pièce se garnit de nouveau dès le lendemain. La recherche du support de ponte prime sur tout le reste : examiner le dessous et les charnières des conteneurs, les siphons et avaloirs où stagne un dépôt gras, les regards, les caillebotis, les interstices sous un équipement fixe. Un point d'ombre, de tiédeur et d'humidité suffit. Le nettoyage mécanique de ce support, brossage compris, retire le milieu de développement ; c'est lui qui fait la différence, pas la pulvérisation.",
    },
    {
      title: 'Cuisine collective et local à déchets',
      body:
        "En restauration collective et en commerce alimentaire, la question dépasse la gêne. L'insecte se pose alternativement sur un déchet et sur une denrée, régurgite pour dissoudre ce qu'il consomme, et transporte sur ses pattes ce qu'il a piétiné : c'est un vecteur reconnu de contaminations digestives, et sa présence au-dessus d'un poste de travail est relevée en contrôle d'hygiène. Les leviers sont d'abord matériels. Conteneurs à couvercle ferme et lavés au jet, local à déchets ventilé, siphonné et refroidi si possible, sortie des bacs calée sur l'horaire de collecte, rideaux à lanières ou sas sur les portes maintenues ouvertes, moustiquaires en bon état sur les ouvrants de cuisine. Les pièges lumineux à plaque adhésive complètent ce dispositif à l'intérieur, à distance des zones de préparation, mais ils comptent les mouches plus qu'ils ne les suppriment.",
    },
  ],
};
