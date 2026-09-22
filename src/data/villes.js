/**
 * Villes et villages de la zone d'intervention (PACA, Carro à Marseille et environs).
 * Slug utilisé dans l'URL : /intervention/:slug
 * lat/lng : coordonnées à 5 décimales utilisées dans le schéma Place.geo
 * context : phrase contextuelle locale unique (anti-doorway pages, signal GEO/SEO local)
 * sections : champ optionnel [{ title, body }] — contenu rédactionnel propre à la commune
 *   (quartiers, typologie du bâti, saisonnalité). Aucune phrase interchangeable entre villes.
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
    sections: [
      {
        title: "L'Île, ses canaux et le Miroir aux oiseaux",
        body: "Le quartier de L'Île occupe un îlot entre le canal Saint-Sébastien et le canal Galliffet, là où les façades plongent directement dans l'eau. Cette configuration a une conséquence pratique : murs de quai, ouvrages maçonnés et anciens exutoires débouchant sur les canaux offrent au rat surmulot un abri permanent, depuis lequel il rejoint sans difficulté les rez-de-chaussée et les locaux commerciaux. Tout dispositif posé en extérieur doit y être lesté et fixé, pour qu'aucun appât ne finisse dans l'eau. Le stationnement, quasi impossible autour du Miroir aux oiseaux, impose par ailleurs d'acheminer le matériel à pied depuis les quais voisins.",
      },
      {
        title: 'Jonquières, Ferrières et le franchissement du chenal',
        body: "Séparés de L'Île par le chenal, Jonquières et Ferrières rassemblent les commerces, le marché et les immeubles de rapport élevés aux XIXe et XXe siècles. Cafés, boulangeries et restaurants y alignent réserves et locaux à déchets sur des arrière-cours étroites, point de départ le plus fréquent des signalements de blattes. La traversée du chenal pèse enfin sur l'organisation : selon l'heure et les manœuvres du pont levant, rejoindre une adresse de l'autre rive peut imposer un détour notable, ce dont il faut tenir compte lorsque plusieurs bâtiments d'un même syndic doivent être traités dans la journée.",
      },
      {
        title: 'Lavéra, Ponteau et les sites industriels',
        body: "Au sud-ouest, Lavéra réunit raffinerie, unités pétrochimiques et terminal maritime, que prolongent vers le nord les installations de Ponteau et les zones d'activité voisines. Ces emprises appliquent leurs propres règles d'accès et de sécurité, distinctes de celles d'un site tertiaire. Le rongeur y chemine par les racks, les caniveaux techniques et les voies ferrées de desserte plutôt que par le bâti. Restauration du personnel et bases-vie des entreprises sous-traitantes concentrent, de leur côté, l'essentiel des signalements d'insectes rampants.",
      },
      {
        title: "Les rives de l'étang de Berre et le chenal de Caronte",
        body: "Au nord-est, les rives de l'étang de Berre alternent plages aménagées, roselières et terrains en friche, jusqu'aux zones humides qui bordent le chenal de Caronte. Sur ce littoral intérieur, la principale difficulté n'est pas technique mais foncière : entre parcelle privée, domaine communal et emprises portuaires, les limites se lisent mal sur le terrain, et un dispositif ne peut être posé que là où le demandeur a qualité pour l'autoriser ; le reste relève d'un signalement au gestionnaire concerné. S'y ajoute une particularité locale : coques, remorques et tas de bois hivernés le long des rives servent d'abri temporaire et méritent d'être inspectés avant toute conclusion sur l'origine d'une infestation.",
      },
    ],
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
    sections: [
      {
        title: 'Les cités et les immeubles collectifs',
        body: "Une large part du parc de logements relève de collectifs élevés entre les années cinquante et soixante-dix, dans les secteurs des Aigues-Douces, de La Lèque ou des Comtes. Leur organisation verticale modifie la nature du problème : colonnes de vide-ordures, gaines de plomberie et conduits techniques relient tous les niveaux d'une même cage d'escalier, si bien qu'une population de blattes germaniques se répartit sur plusieurs étages avant le premier signalement. Le résultat dépend alors moins du produit employé que du taux de logements réellement ouverts le jour prévu, ce qui suppose une information des occupants préparée en amont avec le bailleur.",
      },
      {
        title: 'Le port de commerce et la réparation navale',
        body: "Le port associe trafic commercial, activités de réparation navale et ateliers hérités des anciens chantiers. Les navires à quai constituent une voie d'introduction spécifique : amarres, passerelles et tuyauteries de liaison permettent le passage de rongeurs entre le bord et le terre-plein, dans les deux sens. Les protections d'aussière et l'éclairage des postes d'accostage réduisent ce risque sans le supprimer. À terre, hangars de stockage, aires de décapage et locaux sociaux des entreprises intervenantes relèvent d'une logique différente de celle des quais.",
      },
      {
        title: 'Le canal, le fort de Bouc et les terrains non bâtis',
        body: "Le canal venu d'Arles aboutit ici, au pied du fort qui garde l'entrée du chenal. Ses berges, les darses secondaires et les terrains vagues qui les bordent abritent des rats vivant dehors toute l'année, indépendants des immeubles voisins mais qui les alimentent en continu. Jardins familiaux, locaux associatifs et points de dépôt d'encombrants proches sont les premiers exposés. Sur ce type de secteur, une campagne isolée reste sans effet durable : la réduction de population s'obtient par des passages rapprochés sur quelques semaines, relayés ensuite par un contrôle plus espacé.",
      },
      {
        title: 'Le front de mer et la saison estivale',
        body: "La façade maritime, ses plages aménagées et ses espaces verts littoraux concentrent la fréquentation pendant toute la saison balnéaire. Corbeilles, points de restauration temporaires et sanitaires publics y créent une ressource alimentaire saisonnière qui attire guêpes et rongeurs sur une bande étroite. Les résidences bordant la promenade signalent des nids sous les balcons et dans les coffres techniques, découverts tardivement lorsque les logements ne sont occupés que par intermittence. Le traitement est d'autant plus contraint que les abords restent fréquentés : il se programme tôt le matin ou après la fermeture des équipements. Les gestionnaires d'établissements ouverts au public gagnent à faire contrôler balcons, auvents et locaux de rangement avant la montée en charge, tant que les nids restent accessibles et de faible volume.",
      },
    ],
  },
  {
    name: 'Saint-Mitre-les-Remparts',
    slug: 'saint-mitre-les-remparts',
    lat: 43.45460,
    lng: 5.02710,
    context: "Commune médiévale entre étang de Berre et plaine de la Crau, Saint-Mitre-les-Remparts est exposée aux rongeurs dans ses zones humides et aux guêpes dans ses jardins, espaces verts et bâti ancien.",
    sections: [
      {
        title: 'Le vieux village intra-muros',
        body: "Saint-Mitre doit son nom à son enceinte : le vieux village s'atteint par des portes fortifiées et des ruelles où les façades se touchent. Cette continuité du bâti est le principal facteur d'aggravation d'une infestation. Une colonie de souris ou de blattes installée dans un immeuble se propage par les murs mitoyens, les combles communicants et les anciens conduits, sans qu'il soit possible d'isoler un seul logement. L'accès des véhicules est lui aussi contraint : le matériel doit souvent être porté jusqu'au point d'intervention. Le diagnostic porte donc autant sur le voisinage immédiat que sur le logement à traiter.",
      },
      {
        title: "Les abords des étangs de Citis, d'Engrenier et du Pourra",
        body: "La commune est entourée de plans d'eau saumâtres et de zones humides. Roselières, fossés et friches offrent aux rongeurs un habitat extérieur permanent, et donc un réservoir qui se reconstitue rapidement après un traitement. Les maisons et cabanons situés en limite de ces secteurs subissent des intrusions répétées plutôt que des infestations continues, avec un pic à l'automne lorsque la végétation est fauchée et que les températures baissent. Pour ces adresses, l'efficacité tient surtout à la protection périphérique du bâtiment — grilles d'aération, bas de portes, passages de réseaux — davantage qu'au traitement intérieur.",
      },
      {
        title: 'Saint-Blaise, la garrigue et les pins',
        body: "Le plateau de Saint-Blaise et les collines boisées qui entourent le village associent pins d'Alep, chênes kermès et garrigue. Les pins situés en limite de parcelle sont régulièrement colonisés par la chenille processionnaire, dont les nids soyeux se détachent nettement en hiver. Les propriétaires concernés ont intérêt à faire coïncider l'échenillage avec les travaux de débroussaillement réglementaire, qui portent sur les mêmes parcelles et se heurtent aux mêmes contraintes d'accès. La garrigue abrite également des nids de frelons, parfois en cavité au sol, que seule l'activité des insectes autour d'un point fixe permet de localiser.",
      },
      {
        title: "Les lotissements récents et les zones d'activité",
        body: "L'extension pavillonnaire des dernières décennies, entre le village et la route de Martigues, a produit un habitat récent, mieux isolé mais dense en réseaux techniques. Gaines de ventilation, passages de climatisation et vides de plancher y servent de voies de circulation aux souris et aux fourmis, qui pénètrent par des ouvertures de quelques millimètres. Les punaises de lit, elles, ne dépendent pas de l'ancienneté du bâti : elles arrivent par les bagages et le mobilier d'occasion, y compris dans les constructions neuves. Les zones d'activité de la commune, de taille modeste, relèvent d'un suivi annuel plutôt que d'un contrat renforcé.",
      },
    ],
  },
  {
    name: 'Fos-sur-Mer',
    slug: 'fos-sur-mer',
    lat: 43.43680,
    lng: 4.94790,
    context: "Commune industrielle abritant l'un des plus grands complexes portuaires de Méditerranée, Fos-sur-Mer présente un risque élevé de dératisation dans ses zones industrielles, ses entrepôts logistiques et ses zones d'activité.",
    sections: [
      {
        title: "Le village haut et le bâti ancien de l'Hauture",
        body: "Le cœur historique de Fos s'accroche à l'éperon rocheux de l'Hauture, autour des vestiges du château et de l'église Saint-Sauveur. Ruelles étroites, maisons mitoyennes en pierre, caves semi-enterrées et toitures difficiles d'accès y compliquent les interventions : le camion-nacelle passe rarement et la destruction d'un nid de guêpes sous génoise se fait le plus souvent à la perche télescopique. Ce bâti ancien, avec ses gaines techniques partagées et ses vides sanitaires, favorise aussi la propagation des blattes germaniques d'un logement à l'autre : traiter un seul appartement suffit rarement dans ces immeubles.",
      },
      {
        title: 'La zone industrialo-portuaire et les plateformes logistiques',
        body: "Avec ses darses, ses terminaux et ses entrepôts, la zone industrialo-portuaire impose une logique très différente de celle de l'habitat. Quais, réseaux enterrés, canaux et abords ferroviaires forment des corridors continus pour le rat surmulot, qui progresse vers les stocks alimentaires et les zones de conditionnement. Sur ces sites, une intervention ponctuelle a peu de valeur : les exploitants attendent un plan de masse, des postes d'appâtage numérotés et sécurisés, des relevés datés et une traçabilité exploitable lors des audits d'hygiène. Les plateformes logistiques du secteur de Distriport relèvent du même cadre, avec une pression particulière sur les zones de réception de palettes.",
      },
      {
        title: 'Les quartiers résidentiels des Carabins et de Saint-Gervais',
        body: "À distance du complexe portuaire, les secteurs résidentiels des Carabins et de Saint-Gervais présentent un profil de lotissements méditerranéens : pavillons des années 1980 à 2000, jardins arborés, piscines et vérandas. Les guêpes s'y installent sous les débords de toiture et dans les abris de jardin au cœur de l'été, au moment où les extérieurs sont les plus fréquentés. Les sols sableux du secteur facilitent par ailleurs l'installation de colonies de fourmis sous les terrasses et les margelles. Autour du port de plaisance, les passages de rongeurs sont surtout liés aux locaux à ordures et aux abords enherbés.",
      },
      {
        title: 'Marais, canal et arrière-plages du Cavaou',
        body: "La commune conserve de vastes zones humides : marais, roselières et abords du canal d'Arles à Bouc, jusqu'aux arrière-plages du Cavaou. Ces milieux entretiennent une population de rongeurs installée en extérieur, qui investit les cabanons, les locaux techniques et les installations saisonnières plutôt que les logements permanents. Guêpes et frelons y trouvent des sites de nidification dans les cannes de Provence et les haies denses. Pour les propriétaires de cabanons comme pour les gestionnaires d'équipements de plage, la fenêtre utile d'intervention se situe avant l'ouverture de la saison estivale, quand les nids sont encore de petite taille.",
      },
    ],
  },
  {
    name: 'Istres',
    slug: 'istres',
    lat: 43.51310,
    lng: 4.98750,
    context: "Ville installée entre l'étang de l'Olivier et l'étang de Berre, voisine de la base aérienne 125, Istres associe un centre ancien propice aux rongeurs, des zones pavillonnaires exposées aux guêpes et des pinèdes à chenilles processionnaires.",
    sections: [
      {
        title: "Le centre ancien et les berges de l'étang de l'Olivier",
        body: "Le noyau villageois d'Istres, organisé autour de la colline et des ruelles qui montent vers Notre-Dame-de-Beauvoir, réunit maisons mitoyennes anciennes, caves voûtées et réseaux d'assainissement parfois vétustes. Cette configuration facilite la circulation des rats surmulots entre immeubles, commerces de bouche et locaux à poubelles. En contrebas, les berges de l'étang de l'Olivier et les espaces verts qui les bordent offrent une végétation dense et un point d'eau permanent : les populations s'y maintiennent toute l'année et regagnent les habitations dès les premières pluies d'automne. Dans ce secteur, le traitement repose d'abord sur le repérage des passages en sous-sol et le colmatage des accès.",
      },
      {
        title: 'Les quartiers pavillonnaires : Le Prépaou, Les Heures Claires, Trigance',
        body: "Les lotissements construits entre les années 1970 et 2000 occupent une grande partie de la commune. Villas individuelles, jardins clos, abris de jardin et sous-toitures en tuiles canal multiplient les cavités favorables aux nids de guêpes, généralement repérés de juin à septembre sous les avant-toits, dans les coffres de volets roulants ou derrière les climatiseurs. En fin de saison, les haies taillées peuvent aussi porter un nid de frelons asiatiques. Les fourmis exploitent les joints de dallage pendant les périodes sèches, tandis que les souris investissent garages et celliers dès les premiers froids.",
      },
      {
        title: 'Entressen et la plaine de la Crau',
        body: "Rattaché à Istres et distant d'une dizaine de kilomètres du centre-ville, Entressen fonctionne comme un village agricole : habitat de plain-pied, hangars à foin, écuries et exploitations ouvertes sur la plaine de la Crau. Les stocks de fourrage et de céréales y entretiennent des populations de rongeurs stables, qui se rapprochent des habitations au moment des récoltes et des labours. Le secteur de l'ancienne décharge, fermée depuis 2010, reste un point de vigilance pour les riverains. Les interventions y prennent plutôt la forme d'un plan de dératisation suivi dans la durée que d'un passage unique.",
      },
      {
        title: "Pinèdes, base aérienne et zones d'activité",
        body: "Les pins d'Alep qui ceinturent la commune abritent chaque hiver des nids de chenilles processionnaires : les cocons blancs deviennent visibles de novembre à février, et les processions au sol interviennent généralement entre février et avril, période où les chiens sont les plus exposés. En parallèle, les zones d'activité proches de la base aérienne 125 et de l'aérodrome du Tubé concentrent entrepôts, ateliers et restauration collective, pour lesquels un plan de lutte contre les nuisibles documenté est attendu lors des contrôles d'hygiène. Ces deux problématiques ne relèvent ni du même calendrier ni du même protocole.",
      },
    ],
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
    sections: [
      {
        title: 'Le triage ferroviaire et les emprises des voies',
        body: "Miramas accueille l'un des plus vastes faisceaux de triage du sud de la France, doublé d'installations de maintenance et de voies de garage. Ces emprises forment un couloir continu de ballast, de talus enherbés et de locaux techniques dans lequel les rongeurs se déplacent à couvert, hors d'atteinte des traitements menés parcelle par parcelle. Les riverains des voies constatent des intrusions groupées au moment des fauchages et des travaux d'entretien, qui déplacent brutalement les populations. Pour ces adresses, l'action porte sur les clôtures, les regards et les points bas du terrain, faute de pouvoir intervenir sur l'emprise elle-même.",
      },
      {
        title: 'Les réserves des commerces et des plateformes de distribution',
        body: "Entre la zone commerciale, le village de marques et les entrepôts de Clésud, la commune reçoit chaque jour un volume considérable de palettes et de cartons. C'est le premier mode d'arrivée des blattes dans les locaux professionnels : un lot de cageots, un carton de reprise ou un appareil livré suffit à introduire quelques individus dans une réserve chauffée. Les enseignes de restauration de ces ensembles cumulent chaleur, humidité et déchets organiques, trois conditions qui transforment une arrivée isolée en foyer établi. L'inspection débute donc par les quais de réception et les stocks tampons, avant les surfaces ouvertes au public.",
      },
      {
        title: 'Miramas-le-Vieux et les collines de Sulauze',
        body: "Perché sur son éperon à quelques kilomètres de la ville basse, Miramas-le-Vieux a gardé un bâti de pierre, des toitures basses et des venelles fermées à la circulation. Combles et remises y logent régulièrement des guêpes, dont l'enlèvement suppose du matériel porté à la main et un passage en dehors des heures de fréquentation touristique. Alentour, les pinèdes de Sulauze et les boisements qui dominent la commune sont colonisés en hiver par la processionnaire du pin. Les propriétés en lisière sont exposées les premières, les chenilles gagnant ensuite les jardins et les chemins de promenade.",
      },
      {
        title: 'Les lotissements neufs et la bordure de la Crau',
        body: "L'extension résidentielle s'est faite par tranches successives sur d'anciennes terres agricoles, en limite des coussouls de la Crau. Les chantiers y jouent un rôle sous-estimé : terrassements, création de voirie et raccordement des réseaux chassent les rongeurs déjà présents dans les parcelles voisines, qui se reportent sur les maisons livrées les premières. Une construction récente et bien isolée n'est donc pas à l'abri dès sa première année d'occupation. Les fourmis, de leur côté, profitent des remblais encore meubles et des joints de terrasse fraîchement réalisés pour s'établir sous les aménagements extérieurs.",
      },
    ],
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
