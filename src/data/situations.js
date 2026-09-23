/**
 * Pages situationnelles : un nuisible dans une configuration précise.
 * URL à la racine, ex. /nid-de-guepes-sous-toiture/
 *
 * POURQUOI CET AXE.
 * Les pages thématiques traitent le nuisible, les croisés le nuisible dans une
 * commune. Restait découvert ce que tape réellement quelqu'un qui a le problème
 * sous les yeux : « nid de guêpes sous toiture », « nid dans la cheminée ».
 * L'intention y est plus précise et moins disputée qu'un terme générique.
 *
 * PAS DE CROISEMENT PAR COMMUNE. Un concurrent décline ces situations sur
 * 922 communes ; deux de ses pages mesurées partagent 94,5 % de leur texte, à
 * nombre de mots identique. C'est le profil d'une doorway page. Ici, une page
 * par situation, rédigée, valable partout.
 *
 * RÈGLE D'AJOUT : la page doit décrire une contrainte d'accès, de méthode ou de
 * risque que la page thématique ne détaille pas. Sinon elle la cannibalise.
 */
export const situations = [
  {
    slug: 'nid-de-guepes-sous-toiture',
    nuisible: 'Nid de guêpes',
    thematiqueSlug: 'destruction-nid-de-guepes',
    title: 'Nid de guêpes sous toiture : intervention et risques',
    description:
      "Nid de guêpes sous toiture, sous génoise ou dans les combles : repérage de l'accès, contraintes de hauteur, pourquoi ne pas traiter depuis l'intérieur. Intervention dans les Bouches-du-Rhône.",
    sections: [
      {
        title: "Trouver par où elles entrent, en restant au sol",
        body:
          "L'endroit où l'on croise les insectes n'est presque jamais celui par lequel ils pénètrent. Reculez de quelques mètres, placez-vous face au pan de toiture et regardez deux ou trois minutes sans bouger, aux heures chaudes : une véritable entrée se reconnaît à un trafic croisé, entrant et sortant, toujours au même défaut de couverture. Les candidats sont peu nombreux et se listent à l'œil nu ou au zoom d'un téléphone : une rive ouverte, un about de chevron dégarni, une tuile de ventilation, la jonction entre la gouttière et le mur, un about de génoise disjoint. Une photographie prise du sol renseigne mieux qu'une montée improvisée.",
      },
      {
        title: "Ce qui se passe quand on attaque par le comble",
        body:
          "La tentation est grande : la trappe est là, l'échelle escamotable aussi. Or le comble est un volume bas, encombré, sans recul et pourvu d'une seule issue, qu'il faut emprunter à reculons et en descendant. Le nid, lui, est adossé à la sous-face de la couverture, du côté extérieur de l'écran ou de l'isolant ; l'atteindre par-dedans suppose d'ouvrir ce que la façade offrait déjà. Surtout, une colonie inquiétée dans ce volume se répand du côté de la trappe, donc du côté des pièces occupées. La dégradation créée pour le passage reste, elle, à réparer ensuite.",
      },
      {
        title: "Les paramètres qui commandent le matériel",
        body:
          "Ce que vous pouvez relever sans toucher à rien détermine la façon d'opérer, et gagne à être dit dès l'appel : le nombre de niveaux sous le point repéré, l'orientation du pan, ce qui se trouve au pied du mur (dallage plat, talus, gravier, massif planté, bassin), la possibilité d'amener un véhicule à proximité, et la présence de fenêtres ou de terrasses voisines sur la même façade. Un pied instable ou un surplomb interdisent l'échelle et imposent une autre approche depuis le sol. Le vent, enfin, se vérifie le jour même : soutenu, il disperse et fait reporter.",
      },
    ],
  },
  {
    slug: 'nid-de-guepes-en-cheminee',
    nuisible: 'Nid de guêpes',
    thematiqueSlug: 'destruction-nid-de-guepes',
    title: 'Nid de guêpes dans une cheminée : que faire',
    description:
      "Bourdonnement dans le conduit, insectes qui sortent par l'âtre : pourquoi il ne faut ni allumer un feu ni obturer le conduit, et comment se déroule l'intervention. Bouches-du-Rhône.",
    sections: [
      {
        title: "Un bruit dans le mur, quelques insectes dans l'âtre",
        body:
          "Le signalement commence rarement par la vue du nid. Il commence par une rumeur sourde, perçue dans une pièce calme, qui paraît venir de la maçonnerie plutôt que d'une fenêtre, et qui monte en intensité l'après-midi. S'y ajoutent des individus isolés retrouvés sur le sol du foyer, derrière la trappe de ramonage ou contre la vitre de l'insert, souvent épuisés ou morts : ce sont des égarées, descendues par le conduit, et non le signe d'une invasion de la pièce. Un ou deux insectes par jour suffisent à orienter, à condition de vérifier qu'ils sortent bien de là et non d'une ouverture restée entrebâillée.",
      },
      {
        title: "Le feu et l'obturation aggravent la situation",
        body:
          "Deux réflexes reviennent, et ce sont les deux à écarter. Faire du feu part du principe que la fumée chassera la colonie par le haut ; mais une section partiellement occupée tire mal, l'ouvrage de fibres ligneuses brûle sans entretenir de flamme, et la colonie refoulée descend vers la seule sortie qu'elle connaît désormais, c'est-à-dire chez vous. Boucher la souche ou caler un obstacle dans le départ produit l'effet symétrique : l'unique débouché disparaît, et plusieurs centaines d'insectes cherchent une issue le long d'un ouvrage qui traverse les étages, près des trappes, des jonctions de plâtre et des passages de gaine.",
      },
      {
        title: "Un ouvrage fermé, que l'on doit aborder par ses extrémités",
        body:
          "La difficulté propre à cette configuration tient à ce que rien n'est visible : le nid est fixé quelque part sur un parcours vertical que ni le foyer ni le débouché de toiture ne laissent inspecter. Trois indications changent la marche à suivre et méritent d'être réunies à l'avance : le nombre de boisseaux réunis dans la même souche, la présence ou non d'une trappe de ramonage accessible, et le fait que l'appareil soit relié par un tubage. Un tubage rend le passage étanche, et la colonie s'est alors logée entre ce tube et la maçonnerie, hors du chemin des fumées. L'accès à la souche conditionne le reste.",
      },
    ],
  },
  {
    slug: 'nid-de-guepes-dans-un-mur',
    nuisible: 'Nid de guêpes',
    thematiqueSlug: 'destruction-nid-de-guepes',
    title: 'Nid de guêpes dans un mur ou un volet roulant',
    description:
      "Guêpes entrant par un joint, un coffre de volet roulant ou une aération : localiser la cavité sans ouvrir, et pourquoi reboucher l'orifice pousse la colonie vers l'intérieur du logement.",
    sections: [
      {
        title: "Une cavité qu'aucune ouverture ne révèle",
        body:
          "Le volume occupé n'a pas été creusé : il existait déjà. Caisson de volet roulant, joint de dilatation entre deux corps de bâtiment, grille d'aération de vide sanitaire, about de linteau creux, fourreau de gaine resté béant derrière un coffret : autant d'espaces secs, tièdes et jamais ouverts. Le passage utilisé mesure parfois quelques millimètres, et se repère mieux quand le soleil éclaire franchement la façade. De l'intérieur, deux indices sans risque : un froissement discret, comparable à du papier manipulé, audible le soir contre la paroi du caisson, et une chaleur anormale sous la main à cet endroit.",
      },
      {
        title: "Ne pas ouvrir le caisson, ne pas manœuvrer le tablier",
        body:
          "La trappe d'un coffre de volet roulant se dépose depuis la pièce : l'ouvrir revient à percer la paroi la plus mince entre la colonie et vous, du mauvais côté, sans rien pour reculer. Le même raisonnement vaut pour une plaque d'aération dévissée « juste pour voir ». Quant au tablier, le remonter ou le descendre écrase une partie de l'ouvrage et déclenche une réaction dans un volume qui communique avec la pièce par la fente de sortie du tablier. Laissez le volet dans la position où il se trouve et signalez laquelle : cela fait partie des éléments qui comptent.",
      },
      {
        title: "Le colmatage, avant toute chose, est le pire des gestes",
        body:
          "Du silicone, de la mousse expansive ou un chiffon enfoncé dans le passage ne privent la colonie ni de ses réserves ni de son volume : ils lui suppriment sa porte. Or ces insectes travaillent la matière : ils rongent le bois tendre, écartent un joint, élargissent une fente. Et la paroi extérieure est en pierre, en enduit ou en béton, tandis que la paroi intérieure se résume à une plaque de plâtre, un lambris, la fente du tablier ou un fourreau électrique. Cherchant une sortie, la colonie attaque le point le plus faible, et ce point donne dans le logement. Le passage doit rester libre jusqu'à l'intervention.",
      },
    ],
  },
  {
    slug: 'nid-de-frelons-asiatiques-en-hauteur',
    nuisible: 'Nid de frelons',
    thematiqueSlug: 'destruction-nid-de-frelons-et-frelon-asiatique',
    title: 'Nid de frelons asiatiques en hauteur : intervention à la perche',
    description:
      "Nid volumineux en cime d'arbre ou sous une toiture : distance de sécurité, matériel télescopique, et pourquoi un nid découvert en hiver ne justifie plus d'intervention.",
    sections: [
      {
        title: "Le périmètre à tenir dépasse l'emprise de l'arbre",
        body:
          "Une colonie établie très haut défend un espace qui déborde largement le houppier, et la vibration compte autant que la distance : une tondeuse autoportée, un taille-haie thermique, une tronçonneuse ou un coup porté au tronc se transmettent jusqu'à l'enveloppe et déclenchent une sortie groupée, alors même que l'opérateur se croyait hors d'atteinte. Tant que le nid n'a pas été traité, on cesse donc tout travail mécanique sur la parcelle, on écarte les enfants et les animaux du pied de l'arbre, et on renonce aux fenêtres ouvertes situées dans l'axe. Observer se fait de loin, jamais en levant la tête sous l'ouvrage.",
      },
      {
        title: "Opérer depuis le sol : ce que la perche autorise",
        body:
          "Le matériel télescopique permet d'agir à distance verticale depuis un appui stable, sans grimper ni nacelle. Il suppose cependant des conditions précises : une trouée franche entre le sol et l'enveloppe, car une branche traversante intercepte le tir ; un sol dégagé pour se placer ; un air calme, la dérive croissant avec la longueur déployée ; et une stabilité d'autant plus difficile que l'élément est long. L'opérateur se tient par ailleurs sous l'aplomb de l'ouvrage. Un nid noyé dans un feuillage serré, pris dans une fourche, plaqué derrière une couverture ou situé au-delà de la portée du matériel sort de ce cadre et relève d'un autre mode d'accès.",
      },
      {
        title: "Enveloppe repérée une fois l'arbre dénudé : vérifier d'abord",
        body:
          "Ces ouvrages haut placés se dérobent aux regards tant que le feuillage tient, si bien que la plupart sont signalés en début d'hiver, à un moment où la question n'est plus la même. La première chose à établir est donc s'il y a encore quelqu'un dedans : une dizaine de minutes d'observation par temps clair suffisent, un groupe en activité entretenant une circulation continue à l'ouverture. Une enveloppe grise, effilochée, percée et lavée par les pluies est délaissée, et le rester. Faire abattre ou couper une branche maîtresse pour l'en retirer expose à un risque et à un coût sans contrepartie.",
      },
    ],
  },
  {
    slug: 'essaim-abeilles-que-faire',
    nuisible: "Essaim d'abeilles",
    thematiqueSlug: 'destruction-nid-de-guepes',
    title: "Essaim d'abeilles : ne pas le détruire, le faire récupérer",
    description:
      "Une grappe compacte suspendue au printemps n'est pas un nid de guêpes mais un essaim d'abeilles en transit. Comment le reconnaître, et pourquoi il relève d'un apiculteur.",
    sections: [
      {
        title: "Une masse vivante, et aucune construction",
        body:
          "Ce que l'on découvre est un agglomérat serré, du volume d'un poing à celui d'un ballon, accroché à une branche basse, un tronc, un portail, un volet ou le dessous d'une table de jardin. Sa surface est brune et rousse, parcourue de mouvements lents ; un halo restreint tourne autour, et l'on entend un ronflement égal. Le détail qui tranche : il n'y a pas d'ouvrage. Ni coque, ni alvéoles apparentes, ni matière grise papyracée : l'amas est fait des insectes eux-mêmes. L'épisode a généralement été précédé, quelques minutes plus tôt, d'un nuage dense et bruyant qui s'est posé d'un coup.",
      },
      {
        title: "Une halte de quelques heures, pas une installation",
        body:
          "Cet arrêt n'est qu'une étape : le groupe patiente pendant que des exploratrices cherchent un logement, puis repart de lui-même, parfois le jour même, plus rarement après deux ou trois jours. Il ne protège à cet instant ni couvain ni réserves, ce qui explique sa placidité tant qu'on ne le frappe pas. Un essaim en transit ne se détruit pas : il ne s'agit pas d'un nuisible, et l'espèce est utile. La voie appropriée est la récupération, qui consiste à recueillir la grappe et à la reloger. Votre mairie, un rucher voisin ou un syndicat apicole local orientent vers la personne qui s'en charge.",
      },
      {
        title: "Ce qui aide, et ce qui envenime tout",
        body:
          "En attendant, dégagez les abords, fermez les ouvrants de ce côté de la maison, rentrez les animaux et tenez les enfants à l'écart : cela suffit dans l'immense majorité des cas. À l'inverse, arroser au jet, enfumer ou pulvériser un produit disperse l'amas, qui se reconstitue plus bas ou dans un endroit moins commode, et transforme un groupe paisible en groupe agité. Notez la hauteur, le support et la facilité d'approche depuis le sol : c'est là-dessus que se décide la récupération. Une réserve, enfin : si le groupe est entré dans une cavité et a commencé à bâtir, il ne s'agit plus d'une halte, et le retrait devient un chantier.",
      },
    ],
  },
];
