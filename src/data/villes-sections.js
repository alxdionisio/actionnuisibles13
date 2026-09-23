/**
 * Contenu local par commune, séparé du registre pour tenir sous la limite de
 * 500 lignes par fichier : src/data/villes.js reste l index (nom, slug, geo,
 * phrase de contexte), ce fichier porte la prose.
 *
 * Clé = slug de la commune. Une commune sans entrée ici affiche le seul
 * gabarit de VillePage : cest le cas par défaut, pas un oubli.
 *
 * ÉCART ASSUMÉ À LA LIMITE DE 500 LIGNES : avec les 27 communes rédigées, ce
 * fichier la dépasse. Il ne contient aucune logique, seulement de la prose
 * indexée par slug. Le scinder par zone obligerait à savoir dans quel fichier
 * vit une commune avant de la modifier — plus coûteux que l'écart lui-même.
 *
 * RÈGLE : ces sections nexistent que si elles disent quelque chose de vrai et
 * de propre à la commune. Mieux vaut 250 mots exacts que 420 mots étirés ;
 * du remplissage indistinguable dune page à lautre est précisément ce que
 * Google traite en doorway page.
 */
export const villesSections = {
  'martigues': [
    {
      title: "L'Île, ses canaux et le Miroir aux oiseaux",
      body:
        "Le quartier de L'Île occupe un îlot entre le canal Saint-Sébastien et le canal Galliffet, là où les façades plongent directement dans l'eau. Cette configuration a une conséquence pratique : murs de quai, ouvrages maçonnés et anciens exutoires débouchant sur les canaux offrent au rat surmulot un abri permanent, depuis lequel il rejoint sans difficulté les rez-de-chaussée et les locaux commerciaux. Tout dispositif posé en extérieur doit y être lesté et fixé, pour qu'aucun appât ne finisse dans l'eau. Le stationnement, quasi impossible autour du Miroir aux oiseaux, impose par ailleurs d'acheminer le matériel à pied depuis les quais voisins.",
    },
    {
      title: 'Jonquières, Ferrières et le franchissement du chenal',
      body:
        "Séparés de L'Île par le chenal, Jonquières et Ferrières rassemblent les commerces, le marché et les immeubles de rapport élevés aux XIXe et XXe siècles. Cafés, boulangeries et restaurants y alignent réserves et locaux à déchets sur des arrière-cours étroites, point de départ le plus fréquent des signalements de blattes. La traversée du chenal pèse enfin sur l'organisation : selon l'heure et les manœuvres du pont levant, rejoindre une adresse de l'autre rive peut imposer un détour notable, ce dont il faut tenir compte lorsque plusieurs bâtiments d'un même syndic doivent être traités dans la journée.",
    },
    {
      title: 'Lavéra, Ponteau et les sites industriels',
      body:
        "Au sud-ouest, Lavéra réunit raffinerie, unités pétrochimiques et terminal maritime, que prolongent vers le nord les installations de Ponteau et leurs abords industriels. Ces emprises appliquent leurs propres règles d'accès et de sécurité, distinctes de celles d'un site tertiaire. Le rongeur y chemine par les racks, les caniveaux techniques et les voies ferrées de desserte plutôt que par le bâti. Restauration du personnel et bases-vie des entreprises sous-traitantes concentrent, de leur côté, l'essentiel des signalements d'insectes rampants.",
    },
    {
      title: "Les rives de l'étang de Berre et le chenal de Caronte",
      body:
        "Au nord-est, les rives de l'étang de Berre alternent plages aménagées, roselières et terrains en friche, jusqu'aux zones humides qui bordent le chenal de Caronte. Sur ce littoral intérieur, la principale difficulté n'est pas technique mais foncière : entre parcelle privée, domaine communal et emprises portuaires, les limites se lisent mal sur le terrain, et un dispositif ne peut être posé que là où le demandeur a qualité pour l'autoriser ; le reste relève d'un signalement au gestionnaire concerné. S'y ajoute une particularité locale : coques, remorques et tas de bois hivernés le long des rives servent d'abri temporaire et méritent d'être inspectés avant toute conclusion sur l'origine d'une infestation.",
    },
  ],
  'port-de-bouc': [
    {
      title: 'Les cités et les immeubles collectifs',
      body:
        "Une large part du parc de logements relève de collectifs élevés entre les années cinquante et soixante-dix, dans les secteurs des Aigues-Douces, de La Lèque ou des Comtes. Leur organisation verticale modifie la nature du problème : colonnes de vide-ordures, gaines de plomberie et conduits techniques relient tous les niveaux d'une même cage d'escalier, si bien qu'une population de blattes germaniques se répartit sur plusieurs étages avant le premier signalement. Le résultat dépend alors moins du produit employé que du taux de logements réellement ouverts le jour prévu, ce qui suppose une information des occupants préparée en amont avec le bailleur.",
    },
    {
      title: 'Le port de commerce et la réparation navale',
      body:
        "Le port associe trafic commercial, activités de réparation navale et ateliers hérités des anciens chantiers. Les navires à quai constituent une voie d'introduction spécifique : amarres, passerelles et tuyauteries de liaison permettent le passage de rongeurs entre le bord et le terre-plein, dans les deux sens. Les protections d'aussière et l'éclairage des postes d'accostage réduisent ce risque sans le supprimer. À terre, hangars de stockage, aires de décapage et locaux sociaux des entreprises intervenantes relèvent d'une logique différente de celle des quais.",
    },
    {
      title: 'Le canal, le fort de Bouc et les terrains non bâtis',
      body:
        "Le canal venu d'Arles aboutit ici, au pied du fort qui garde l'entrée du chenal. Ses berges, les darses secondaires et les terrains vagues qui les bordent abritent des rats vivant dehors toute l'année, indépendants des immeubles voisins mais qui les alimentent en continu. Jardins familiaux, locaux associatifs et points de dépôt d'encombrants proches sont les premiers exposés. Sur ce type de secteur, une campagne isolée reste sans effet durable : la réduction de population s'obtient par des passages rapprochés sur quelques semaines, relayés ensuite par un contrôle plus espacé.",
    },
    {
      title: 'Le front de mer et la saison estivale',
      body:
        "La façade maritime, ses plages aménagées et ses espaces verts littoraux concentrent la fréquentation pendant toute la saison balnéaire. Corbeilles, points de restauration temporaires et sanitaires publics y créent une ressource alimentaire saisonnière qui attire guêpes et rongeurs sur une bande étroite. Les résidences bordant la promenade signalent des nids sous les balcons et dans les coffres techniques, découverts tardivement lorsque les logements ne sont occupés que par intermittence. Le traitement est d'autant plus contraint que les abords restent fréquentés : il se programme tôt le matin ou après la fermeture des équipements. Les gestionnaires d'établissements ouverts au public gagnent à faire contrôler balcons, auvents et locaux de rangement avant la montée en charge, tant que les nids restent accessibles et de faible volume.",
    },
  ],
  'saint-mitre-les-remparts': [
    {
      title: 'Le vieux village intra-muros',
      body:
        "Saint-Mitre doit son nom à son enceinte : le vieux village s'atteint par des portes fortifiées et des ruelles où les façades se touchent. Cette continuité du bâti est le principal facteur d'aggravation d'une infestation. Une colonie de souris ou de blattes installée dans un immeuble se propage par les murs mitoyens, les combles communicants et les anciens conduits, sans qu'il soit possible d'isoler un seul logement. L'accès des véhicules est lui aussi contraint : le matériel doit souvent être porté jusqu'au point d'intervention. Le diagnostic porte donc autant sur le voisinage immédiat que sur le logement à traiter.",
    },
    {
      title: "Les abords des étangs de Citis, d'Engrenier et du Pourra",
      body:
        "La commune est entourée de plans d'eau saumâtres et de zones humides. Roselières, fossés et friches offrent aux rongeurs un habitat extérieur permanent, et donc un réservoir qui se reconstitue rapidement après un traitement. Les maisons et cabanons situés en limite de ces secteurs subissent des intrusions répétées plutôt que des infestations continues, avec un pic à l'automne lorsque la végétation est fauchée et que les températures baissent. Pour ces adresses, l'efficacité tient surtout à la protection périphérique du bâtiment — grilles d'aération, bas de portes, passages de réseaux — davantage qu'au traitement intérieur.",
    },
    {
      title: 'Saint-Blaise, la garrigue et les pins',
      body:
        "Le plateau de Saint-Blaise et les collines boisées qui entourent le village associent pins d'Alep, chênes kermès et garrigue. Les pins situés en limite de parcelle sont régulièrement colonisés par la chenille processionnaire, dont les nids soyeux se détachent nettement en hiver. Les propriétaires concernés ont intérêt à faire coïncider l'échenillage avec les travaux de débroussaillement réglementaire, qui portent sur les mêmes parcelles et se heurtent aux mêmes contraintes d'accès. La garrigue abrite également des nids de frelons, parfois en cavité au sol, que seule l'activité des insectes autour d'un point fixe permet de localiser.",
    },
    {
      title: "Les lotissements récents et les zones d'activité",
      body:
        "L'extension pavillonnaire des dernières décennies, entre le village et la route de Martigues, a produit un habitat récent, mieux isolé mais dense en réseaux techniques. Gaines de ventilation, passages de climatisation et vides de plancher y servent de voies de circulation aux souris et aux fourmis, qui pénètrent par des ouvertures de quelques millimètres. Les punaises de lit, elles, ne dépendent pas de l'ancienneté du bâti : elles arrivent par les bagages et le mobilier d'occasion, y compris dans les constructions neuves. Les zones d'activité de la commune, de taille modeste, relèvent d'un suivi annuel plutôt que d'un contrat renforcé.",
    },
  ],
  'fos-sur-mer': [
    {
      title: "Le village haut et le bâti ancien de l'Hauture",
      body:
        "Le cœur historique de Fos s'accroche à l'éperon rocheux de l'Hauture, autour des vestiges du château et de l'église Saint-Sauveur. Ruelles étroites, maisons mitoyennes en pierre, caves semi-enterrées et toitures difficiles d'accès y compliquent les interventions : le camion-nacelle passe rarement et la destruction d'un nid de guêpes sous génoise se fait le plus souvent à la perche télescopique. Ce bâti ancien, avec ses gaines techniques partagées et ses vides sanitaires, favorise aussi la propagation des blattes germaniques d'un logement à l'autre : traiter un seul appartement suffit rarement dans ces immeubles.",
    },
    {
      title: 'La zone industrialo-portuaire et les plateformes logistiques',
      body:
        "Avec ses darses, ses terminaux et ses entrepôts, la zone industrialo-portuaire impose une logique très différente de celle de l'habitat. Quais, réseaux enterrés, canaux et abords ferroviaires forment des corridors continus pour le rat surmulot, qui progresse vers les stocks alimentaires et les zones de conditionnement. Sur ces sites, une intervention ponctuelle a peu de valeur : les exploitants attendent un plan de masse, des postes d'appâtage numérotés et sécurisés, des relevés datés et une traçabilité exploitable lors des audits d'hygiène. Les plateformes logistiques du secteur de Distriport relèvent du même cadre, avec une pression particulière sur les zones de réception de palettes.",
    },
    {
      title: 'Les quartiers résidentiels des Carabins et de Saint-Gervais',
      body:
        "À distance du complexe portuaire, les secteurs résidentiels des Carabins et de Saint-Gervais présentent un profil de lotissements méditerranéens : pavillons des années 1980 à 2000, jardins arborés, piscines et vérandas. Les guêpes s'y installent sous les débords de toiture et dans les abris de jardin au cœur de l'été, au moment où les extérieurs sont les plus fréquentés. Les sols sableux du secteur facilitent par ailleurs l'installation de colonies de fourmis sous les terrasses et les margelles. Autour du port de plaisance, les passages de rongeurs sont surtout liés aux locaux à ordures et aux abords enherbés.",
    },
    {
      title: 'Marais, canal et arrière-plages du Cavaou',
      body:
        "La commune conserve de vastes zones humides : marais, roselières et abords du canal d'Arles à Bouc, jusqu'aux arrière-plages du Cavaou. Ces milieux entretiennent une population de rongeurs installée en extérieur, qui investit les cabanons, les locaux techniques et les installations saisonnières plutôt que les logements permanents. Guêpes et frelons y trouvent des sites de nidification dans les cannes de Provence et les haies denses. Pour les propriétaires de cabanons comme pour les gestionnaires d'équipements de plage, la fenêtre utile d'intervention se situe avant l'ouverture de la saison estivale, quand les nids sont encore de petite taille.",
    },
  ],
  'istres': [
    {
      title: "Le centre ancien et les berges de l'étang de l'Olivier",
      body:
        "Le noyau villageois d'Istres, organisé autour de la colline et des ruelles qui montent vers Notre-Dame-de-Beauvoir, réunit maisons mitoyennes anciennes, caves voûtées et réseaux d'assainissement parfois vétustes. Cette configuration facilite la circulation des rats surmulots entre immeubles, commerces de bouche et locaux à poubelles. En contrebas, les berges de l'étang de l'Olivier et les espaces verts qui les bordent offrent une végétation dense et un point d'eau permanent : les populations s'y maintiennent toute l'année et regagnent les habitations dès les premières pluies d'automne. Dans ce secteur, le traitement repose d'abord sur le repérage des passages en sous-sol et le colmatage des accès.",
    },
    {
      title: 'Les quartiers pavillonnaires : Le Prépaou, Les Heures Claires, Trigance',
      body:
        'Les lotissements construits entre les années 1970 et 2000 occupent une grande partie de la commune. Villas individuelles, jardins clos, abris de jardin et sous-toitures en tuiles canal multiplient les cavités favorables aux nids de guêpes, généralement repérés de juin à septembre sous les avant-toits, dans les coffres de volets roulants ou derrière les climatiseurs. En fin de saison, les haies taillées peuvent aussi porter un nid de frelons asiatiques. Les fourmis exploitent les joints de dallage pendant les périodes sèches, tandis que les souris investissent garages et celliers dès les premiers froids.',
    },
    {
      title: 'Entressen et la plaine de la Crau',
      body:
        "Rattaché à Istres et distant d'une dizaine de kilomètres du centre-ville, Entressen fonctionne comme un village agricole : habitat de plain-pied, hangars à foin, écuries et exploitations ouvertes sur la plaine de la Crau. Les stocks de fourrage et de céréales y entretiennent des populations de rongeurs stables, qui se rapprochent des habitations au moment des récoltes et des labours. Le secteur de l'ancienne décharge, fermée depuis 2010, reste un point de vigilance pour les riverains. Les interventions y prennent plutôt la forme d'un plan de dératisation suivi dans la durée que d'un passage unique.",
    },
    {
      title: "Pinèdes, base aérienne et zones d'activité",
      body:
        "Les pins d'Alep qui ceinturent la commune abritent chaque hiver des nids de chenilles processionnaires : les cocons blancs deviennent visibles de novembre à février, et les processions au sol interviennent généralement entre février et avril, période où les chiens sont les plus exposés. En parallèle, les zones d'activité proches de la base aérienne 125 et de l'aérodrome du Tubé concentrent entrepôts, ateliers et restauration collective, pour lesquels un plan de lutte contre les nuisibles documenté est attendu lors des contrôles d'hygiène. Ces deux problématiques ne relèvent ni du même calendrier ni du même protocole.",
    },
  ],
  'miramas': [
    {
      title: 'Le triage ferroviaire et les emprises des voies',
      body:
        "Miramas accueille l'un des plus vastes faisceaux de triage du sud de la France, doublé d'installations de maintenance et de voies de garage. Ces emprises forment un couloir continu de ballast, de talus enherbés et de locaux techniques dans lequel les rongeurs se déplacent à couvert, hors d'atteinte des traitements menés parcelle par parcelle. Les riverains des voies constatent des intrusions groupées au moment des fauchages et des travaux d'entretien, qui déplacent brutalement les populations. Pour ces adresses, l'action porte sur les clôtures, les regards et les points bas du terrain, faute de pouvoir intervenir sur l'emprise elle-même.",
    },
    {
      title: 'Les réserves des commerces et des plateformes de distribution',
      body:
        "Entre la zone commerciale, le village de marques et les entrepôts de Clésud, la commune reçoit chaque jour un volume considérable de palettes et de cartons. C'est le premier mode d'arrivée des blattes dans les locaux professionnels : un lot de cageots, un carton de reprise ou un appareil livré suffit à introduire quelques individus dans une réserve chauffée. Les enseignes de restauration de ces ensembles cumulent chaleur, humidité et déchets organiques, trois conditions qui transforment une arrivée isolée en foyer établi. L'inspection débute donc par les quais de réception et les stocks tampons, avant les surfaces ouvertes au public.",
    },
    {
      title: 'Miramas-le-Vieux et les collines de Sulauze',
      body:
        "Perché sur son éperon à quelques kilomètres de la ville basse, Miramas-le-Vieux a gardé un bâti de pierre, des toitures basses et des venelles fermées à la circulation. Combles et remises y logent régulièrement des guêpes, dont l'enlèvement suppose du matériel porté à la main et un passage en dehors des heures de fréquentation touristique. Alentour, les pinèdes de Sulauze et les boisements qui dominent la commune sont colonisés en hiver par la processionnaire du pin. Les propriétés en lisière sont exposées les premières, les chenilles gagnant ensuite les jardins et les chemins de promenade.",
    },
    {
      title: 'Les lotissements neufs et la bordure de la Crau',
      body:
        "L'extension résidentielle s'est faite par tranches successives sur d'anciennes terres agricoles, en limite des coussouls de la Crau. Les chantiers y jouent un rôle sous-estimé : terrassements, création de voirie et raccordement des réseaux chassent les rongeurs déjà présents dans les parcelles voisines, qui se reportent sur les maisons livrées les premières. Une construction récente et bien isolée n'est donc pas à l'abri dès sa première année d'occupation. Les fourmis, de leur côté, profitent des remblais encore meubles et des joints de terrasse fraîchement réalisés pour s'établir sous les aménagements extérieurs.",
    },
  ],
  'carro': [
    {
      title: 'La vente de poisson à quai et ses rebuts',
      body:
        "Les bateaux de Carro rentrent le matin et écoulent leur pêche depuis le quai, devant des étals montés pour quelques heures. L'activité laisse derrière elle un volume modeste mais parfaitement régulier de déchets : écailles raclées, glace fondue, caisses rincées à grande eau. Cette régularité suffit à fixer une population de rongeurs dans les enrochements du môle et sous les dalles du terre-plein, où ils vivent à demeure sans dépendre du bâti. Ils n'entrent dans les locaux qu'à la nuit, ou lorsque les arrivages s'espacent. Les commerces alimentaires installés autour du bassin sont donc les premiers à constater des passages, alors même que leur propre tenue est sans reproche : le foyer se situe dehors, sur des emprises dont ils ne disposent pas. Traiter un seul local n'y change rien tant que le point de nourrissage extérieur subsiste.",
    },
    {
      title: 'Les remises à matériel de pêche',
      body:
        "Le pourtour du port compte quantité de constructions basses où sont entreposés filets, casiers, moteurs et bidons, et qui ne s'ouvrent que quelques jours par mois. Les filets roulés, les cordages et les textiles usagés y fournissent un matériau de nidification très recherché par les souris ; les résidus organiques restés sur les engins entretiennent de leur côté une odeur qui guide les rongeurs vers l'intérieur. L'encombrement propre à ces locaux rend le constat difficile, crottes et traces de rongement se confondant avec les débris de matériel. Une inspection qui ait du sens suppose donc d'en sortir une partie du contenu, plutôt que d'examiner l'endroit tel qu'il se présente.",
    },
    {
      title: "Le vent comme paramètre d'intervention",
      body:
        "Le plan d'eau de Carro est exposé plein ouest et reçoit le mistral sans obstacle, ce qui en fait un site de planche à voile fréquenté toute l'année. Cette exposition pèse directement sur les opérations menées dehors : au-delà d'une certaine force, une pulvérisation perd toute précision et dérive hors de la zone visée, et approcher un nid en hauteur depuis une échelle exposée devient déraisonnable. Sur cette portion de côte, le créneau se choisit en fonction de la météo autant que de la disponibilité des lieux, et un report pour cause de vent n'a rien d'exceptionnel.",
    },
  ],
  'la-couronne': [
    {
      title: 'Un hébergement de plein air qui se remplit puis se vide',
      body:
        "La Couronne dispose d'une capacité d'accueil touristique sans rapport avec sa population permanente, terrain de camping compris. Un tel ensemble se comporte comme un village dont l'occupation bascule deux fois par an. En pleine saison, sanitaires, laveries et points de collecte fonctionnent sans interruption et dispersent la ressource alimentaire sur toute la surface du terrain, ce qui prive un appâtage périphérique d'une bonne part de son intérêt tant que la fréquentation se maintient. À la fermeture, le mouvement s'inverse : hébergements légers et bungalows demeurent clos plusieurs mois, avec leurs coffrages, leurs vides techniques et leur literie remisée, conditions dans lesquelles souris et fourmis s'établissent sans être dérangées. C'est à la remise en service, et non en cours d'exploitation, que l'état réel du parc se découvre.",
    },
    {
      title: 'Les criques, les goélands et ce qu\'ils laissent',
      body:
        "Le littoral communal enchaîne les anses, entre dalles rocheuses et pelouses sèches, avec une fréquentation concentrée sur quelques heures d'après-midi. Le goéland leucophée y tient un rôle qu'on lui attribue rarement : il éventre les sacs déposés à côté des conteneurs et en répand le contenu sur plusieurs mètres. Ce qu'il abandonne alimente ensuite, la nuit venue, les rongeurs logés dans la végétation basse et les murets qui bordent les accès. Agir sur le rongeur sans remédier au dépôt des sacs revient à s'occuper du second maillon en laissant le premier intact.",
    },
    {
      title: 'Le plateau du Cap et les anciennes carrières',
      body:
        "Le plateau qui porte le phare est creusé de carrières de pierre dont l'exploitation remonte à l'Antiquité. Fronts de taille, blocs délaissés et murets montés à sec y multiplient les cavités sèches et abritées, que les guêpes colonisent en nombre. Un nid logé dans une fissure de roche ne se repère qu'au trajet répété des ouvrières vers un point fixe, et sa profondeur demeure inconnue tant que l'entrée n'a pas été approchée. Les propriétés bâties en lisière de ces terrains subissent le même phénomène dans leurs clôtures de pierre.",
    },
  ],
  'sausset-les-pins': [
    {
      title: "Une bande étroite entre la route et l'eau",
      body:
        "L'essentiel de l'activité de Sausset tient sur une seule bande : commerces, terrasses et port de plaisance s'alignent entre la voie littorale et le rivage. Cette compression produit des effets concrets. Les réserves des établissements sont reléguées en arrière-boutique aveugle ou en sous-sol, fréquemment chauffées et peu ventilées, et le local à déchets se partage entre plusieurs enseignes. Une arrivée de blattes germaniques par un lot de cartons devient alors, en quelques semaines, l'affaire de tout le groupe de commerces. L'été, la difficulté se double du public : les terrasses restent occupées de la mi-journée jusque tard le soir, et une opération ne peut se caler qu'en dehors de ces plages horaires.",
    },
    {
      title: 'Des pins mûrs au milieu des parcelles habitées',
      body:
        "Les sujets qui ont donné son nom à la commune sont pour beaucoup des arbres anciens et hauts, plantés à l'intérieur de terrains bâtis depuis. Quand la processionnaire s'y installe, la question posée n'est pas d'abord technique : l'arbre porteur du nid n'appartient presque jamais à celui qui en subit les retombées, les branches surplombant la propriété voisine, un accès commun ou une aire de stationnement. L'accord du propriétaire de l'arbre conditionne toute opération, et l'hiver s'y prête mieux que le printemps : les cocons se voient et se comptent encore, alors qu'après la descente des chenilles il ne reste plus rien à montrer.",
    },
    {
      title: 'Restanques, murs de soutènement et remblais',
      body:
        "Les quartiers situés au-dessus de la route s'étagent sur des pentes retenues par des ouvrages de soutènement et d'anciennes restanques. Derrière ces murs, le remblai n'est jamais compact : barbacanes, joints ouverts et vides de construction offrent aux rats un réseau de galeries protégé, invisible depuis la surface, dont les sorties débouchent au ras des terrasses. On y observe également des colonies de fourmis dans les joints de dallage exposés au sud. L'accès à ces parcelles emprunte souvent un escalier privé depuis la voie publique, ce qui écarte tout matériel roulant et détermine la façon dont la venue se prépare.",
    },
  ],
  'carry-le-rouet': [
    {
      title: "Un port dont l'activité s'arrête puis redémarre",
      body:
        "Les établissements qui bordent le bassin connaissent un écart d'activité considérable entre les mois creux et la haute saison. Une réserve laissée close après le dernier service de l'automne conserve des denrées sèches, des emballages et une chaleur résiduelle suffisante : la population de blattes ou de souris qui s'y développe pendant l'arrêt ne rencontre plus personne pour la constater. Elle se manifeste à la réouverture, au plus mauvais moment, quand la remise en route laisse peu de marge. La reprise des livraisons ajoute son propre risque, chaque palette de cartons constituant un vecteur d'introduction classique. Une manifestation hivernale consacrée à l'oursin ramène par ailleurs une forte affluence en février, au cœur de la période réputée calme.",
    },
    {
      title: 'Des villas bâties au-dessus des calanques',
      body:
        "Les constructions qui dominent les criques sont fréquemment adossées à la pente, avec terrasse en encorbellement, sous-face de balcon accessible seulement par l'intérieur et jardin réduit à quelques paliers. Les guêpes exploitent ces sous-faces et les caissons techniques, où le nid grossit loin des regards. La difficulté tient au recul : on opère depuis un balcon qui n'en offre aucun, au-dessus du vide, et l'emplacement commande le mode opératoire bien davantage que l'espèce en cause. La desserte de ces quartiers par des voies en lacets, sans possibilité de s'arrêter devant la plupart des portails, s'ajoute à la contrainte.",
    },
    {
      title: 'Les logements ouverts quelques semaines par an',
      body:
        "Une part notable du parc n'est occupée que par intermittence, volets clos le reste du temps. Deux conséquences reviennent constamment. Les siphons s'assèchent faute d'usage et laissent un passage direct depuis le réseau d'évacuation vers la pièce, ce qui explique des apparitions d'insectes dans des habitations pourtant vides et propres. Quant aux coffres de volets roulants maintenus baissés, ils forment un volume clos et tiède que les guêpes colonisent au printemps : la colonie se découvre des mois plus tard, à la première remontée du tablier. Un contrôle avant l'arrivée des occupants vaut mieux qu'un appel dans l'urgence le jour de leur installation.",
    },
    {
      title: 'À quelques mètres du milieu marin',
      body:
        "Certaines parcelles se trouvent à moins de dix mètres du rivage, sur une côte placée en zone de protection marine. Cette proximité contraint la pose de tout dispositif extérieur : un poste doit être fixé, fermé, tenu à l'écart des cheminements de ruissellement, et ne peut rester sur un replat rocheux que balaie le premier coup de mer. La réponse penche donc vers l'exclusion — grilles, bas de portes, obturation des fourreaux — plus que vers un équipement laissé dehors.",
    },
  ],
  'ensues-la-redonne': [
    {
      title: 'Des hameaux au fond des calanques',
      body:
        "La commune ne se résume pas à son village : une partie des habitations se répartit dans les calanques de La Redonne et de Méjean, desservies par des routes en lacets où deux véhicules se croisent difficilement. En bas, les places sont comptées et le dernier tronçon se parcourt couramment à pied, par des escaliers et des sentiers. Tout le reste en découle : l'équipement se limite à ce qui se porte, un échafaudage ou une nacelle sont hors de question, et enchaîner plusieurs adresses dans la même demi-journée relève de l'illusion. Le trajet se prépare, le point de rencontre se convient à l'avance, et l'afflux estival sur ces accès peut imposer une attente que rien ne permet d'anticiper.",
    },
    {
      title: 'La garrigue, le débroussaillement et les nids au sol',
      body:
        "Le bourg et les quartiers du plateau sont cernés de garrigue, ce qui place la plupart des propriétés sous obligation de débroussailler leurs abords. L'opération crée chaque année une situation dangereuse et sous-estimée : guêpes et frelons nichant en cavité au sol ou sous un tas de branches restent invisibles jusqu'au moment où la débroussailleuse atteint le nid, et la colonie sort d'un coup sur quelqu'un qui ne peut ni reculer ni se protéger. Parcourir le terrain au préalable, en observant le va-et-vient des insectes autour des points bas avant d'engager la machine, réduit sensiblement ce risque.",
    },
    {
      title: 'Bâti isolé, équipements autonomes et fin de journée',
      body:
        "Les constructions éloignées du bourg fonctionnent souvent avec leurs propres installations : assainissement non collectif, citerne, local de filtration de piscine, groupe de pompage. Ces ouvrages enterrés ou semi-enterrés sont tièdes, humides et rarement ouverts, donc favorables aux rongeurs, qui s'en servent de base avant de gagner la maison par les fourreaux de canalisation. Une contrainte d'horaire s'y ajoute : neutraliser un nid vaut mieux une fois les ouvrières rentrées, en fin de journée, mais ces voies d'accès ne sont pas éclairées et deviennent franchement mauvaises la nuit tombée. La fenêtre utile est donc courte.",
    },
  ],
  'sainte-croix-saint-pierre-les-martigues': [
    {
      title: 'Un hameau qui a gardé ses dépendances',
      body:
        "Saint-Pierre-les-Martigues aligne quelques dizaines de maisons basses autour de son église, au milieu de terres restées cultivées ou pâturées. Ce sont les annexes, davantage que les habitations, qui commandent la situation : remises, hangars ouverts, réserves de grain, et surtout les poulaillers familiaux. Un poulailler fournit à lui seul une nourriture disponible en permanence, de l'eau et un abri, ce qui suffit à installer durablement une colonie de rats à quelques mètres de la maison. C'est pourtant rarement l'élément signalé au moment de l'appel, alors qu'aucune action portant sur le logement ne tiendra dans la durée tant qu'il n'est pas repris : grillage enterré, mangeoire relevée, granulés en contenant rigide.",
    },
    {
      title: 'De grandes parcelles et un voisinage déterminant',
      body:
        "Les terrains sont vastes, séparés par des haies et des murets plutôt que par des clôtures étanches, et comportent presque toujours un tas de bois, un composteur ou un véhicule remisé. Sur ce genre de propriété, le rat n'a aucune raison d'entrer : il vit dehors toute l'année et n'utilise les bâtiments qu'en appoint, ce qui modifie la logique même du traitement. L'efficacité se joue alors à l'échelle de plusieurs parcelles contiguës, non d'une seule. Un terrain correctement assaini face à un voisin laissé en l'état voit sa population se reconstituer en une saison, et le sujet se règle plus facilement entre riverains avant que quiconque ne se sente mis en cause.",
    },
    {
      title: 'Une adresse qui se trouve mal',
      body:
        "Sainte-Croix et Saint-Pierre relèvent administrativement de Martigues, dont le centre se situe à plusieurs kilomètres. Les points d'adresse de ces écarts sont mal restitués par les applications de navigation : chemins privés dépourvus de nom, numérotation discontinue, lieux-dits que l'on retrouve ailleurs dans le département. Un rendez-vous convenu sur la seule adresse postale se solde régulièrement par un détour de vingt minutes. Mieux vaut s'entendre sur un repère visible depuis la voie — un portail, un croisement, un bâtiment identifiable — et préciser d'emblée si la fin du parcours emprunte une piste que tout véhicule ne peut pas prendre.",
    },
  ],
  'chateauneuf-les-martigues': [
    {
      title: 'Le marais de Bolmon et ses roubines',
      body:
        "La commune borde le Bolmon et le marais qui le prolonge, drainés par un lacis de roubines et de fossés entretenus de longue date. Ce maillage humide forme un couloir continu : le surmulot y progresse à couvert sur plusieurs centaines de mètres, franchissant des séparations qu'il ignore. Les habitations et les exploitations établies en bordure subissent ainsi une pression dont la source ne leur appartient pas. Ce qui se décide à cette lisière tient à peu de chose : un regard d'évacuation mal refermé, un fourreau laissé ouvert sous le portail, un sac d'aliment pour animaux entreposé dehors.",
    },
    {
      title: 'La Mède, entre la rade, la voie ferrée et le site industriel',
      body:
        "Le quartier de La Mède forme un village en soi, resserré entre le rivage, la ligne de chemin de fer et l'emprise industrielle qui lui a donné sa physionomie. Les logements y occupent une bande étroite, avec des courettes fermées, des remises et des garages bâtis au plus près de la voie. Pour celui qui habite là, la question utile ne porte pas sur ce qui se passe derrière la clôture de l'établissement voisin, sur quoi il n'a aucune prise, mais sur la manière dont sa propre parcelle se referme : seuils, ventilations basses, joints de dalle, rangement du bois et des conteneurs.",
    },
    {
      title: "Les vallons de la Nerthe et le ruissellement d'orage",
      body:
        "Derrière la commune, le versant de la chaîne descend par des vallons courts et pentus qui rassemblent l'eau en quelques minutes lors des épisodes d'automne. Ces pluies produisent un effet mécanique que l'on anticipe rarement : les collecteurs se mettent en charge, et ce qui logeait à l'intérieur est chassé vers le haut, par les avaloirs, les tampons et les cours situées en contrebas. Des apparitions soudaines et simultanées dans plusieurs maisons d'une même rue, au lendemain d'une forte pluie, n'ont donc rien d'une coïncidence. Ces journées-là sont aussi celles où les défauts d'étanchéité se repèrent le mieux.",
    },
    {
      title: 'Les fosses désaffectées des maisons raccordées',
      body:
        "L'urbanisation par tranches a laissé quantité de maisons autrefois pourvues d'un assainissement individuel, puis raccordées au tout-à-l'égout. Fosse, bac dégraisseur et conduites abandonnées demeurent le plus souvent en place, vides, non comblés, et reliés au bâtiment par un départ que plus personne ne sait localiser. Cela fait un volume tiède, couvert et invisible, à quelques mètres des pièces habitées : l'une des origines les plus tenaces d'une présence que rien, à l'intérieur, ne vient expliquer. Retrouver le plan de l'ancienne installation, ou à défaut sonder le sol le long de la façade, précède utilement toute autre démarche.",
    },
  ],
  'marignane': [
    {
      title: 'Les entrepôts, leurs palettiers et la question de la hauteur',
      body:
        "Les plateformes de stockage implantées autour de la commune se distinguent moins par leur surface au sol que par leur élévation : les marchandises y sont rangées dans des palettiers de plusieurs niveaux, desservis par des chariots à mât. Un rongeur parvenu au troisième ou au quatrième niveau y trouve un refuge calme et sec, hors d'atteinte de tout matériel disposé en partie basse ; les indices, eux, retombent en allée et se remarquent tard. L'examen d'un tel bâtiment suit donc les allées et les hauteurs plutôt que sa périphérie, et la présence d'un cariste détermine ce qu'il sera possible d'observer.",
    },
    {
      title: 'Des halls dont les ouvertures ne se referment jamais vraiment',
      body:
        "L'activité aéronautique locale suppose des bâtiments de très grande dimension, dont les portes se mesurent en dizaines de mètres et sont manœuvrées plusieurs fois par jour. Une fermeture de ce gabarit ne devient pas hermétique au sens où on l'entend pour une porte d'habitation : il subsiste toujours un jeu en partie basse, des rails et des tableaux latéraux ouverts. Dans un volume pareil, écarter l'animal par la seule fermeture n'a guère de sens ; le raisonnement se déplace vers les cheminements intérieurs et vers les annexes — vestiaires, salles de pause, magasins de pièces — qui concentrent l'eau et la nourriture.",
    },
    {
      title: "Le noyau villageois en pente vers la rive",
      body:
        "Le vieux Marignane s'organise autour de son église et du château, sur un terrain incliné vers l'eau. Les canalisations du secteur convergent donc toutes vers le bas, et les regards de point bas sont les premiers à porter des traces. Le bâti y est serré : immeubles remaniés, arrière-cours partagées, commerces alimentaires dont les réserves occupent d'anciens niveaux enterrés. Un signalement isolé dans l'une de ces boutiques renseigne mal sur l'origine. C'est l'ordre dans lequel les adresses d'une même rue ont commencé à signaler quelque chose, plutôt que la tenue du local visité, qui donne le sens de la progression.",
    },
    {
      title: 'Les cuisines collectives et leur fenêtre de nuit',
      body:
        "Les bassins d'emploi de la commune font vivre un nombre important de cuisines produisant pour des centaines de couverts : chambres froides, laverie, monte-charge, local de déconditionnement, en service du petit matin au début de l'après-midi. Le créneau exploitable se réduit alors à quelques heures nocturnes, entre le dernier nettoyage et la première mise en route. L'essentiel s'y joue avant l'arrivée : plans dégagés, denrées protégées, appareils écartés du mur, siphons atteignables. Une équipe prévenue la veille rend le passage productif ; un office laissé en l'état le ramène à un simple tour d'observation.",
    },
  ],
  'saint-victoret': [
    {
      title: 'Des logements calfeutrés et des façades percées',
      body:
        "Sous le cône de bruit des pistes, une grande partie du parc a reçu des menuiseries renforcées, une ventilation mécanique et, très souvent, une climatisation. Les fenêtres demeurent closes une bonne part de l'année, l'été compris. Deux effets en découlent. Chaque équipement ajouté a percé un mur — sortie de ventilation, liaison frigorifique, évacuation de condensats — et ces traversées, rarement rebouchées avec soin, offrent des points de passage aussi bien en haut qu'en bas de façade. Par ailleurs, un logement peu aéré garde ses odeurs et son humidité, ce qui retarde le moment où une présence se remarque.",
    },
    {
      title: 'Un parc pavillonnaire homogène, et ses combles isolés',
      body:
        "Les maisons ont été livrées par séries rapprochées, selon quelques modèles seulement : mêmes combles perdus, mêmes coffres de volets, même vide sanitaire ventilé par des grilles au ras du sol. Une conséquence pratique en découle. Lorsqu'une rue signale des rongeurs, le détail constructif par lequel ils entrent est presque toujours le même d'un pavillon à l'autre, et se vérifie chez le voisin en quelques minutes. Les combles réisolés par soufflage méritent une attention particulière : le matériau se prête au nid, masque les galeries, et la présence se manifeste par des bruits de plafond bien avant que des déjections soient découvertes.",
    },
    {
      title: 'La promiscuité comme contrainte de déroulement',
      body:
        "Sur des terrains de cette taille, une opération menée dans un jardin se déroule à trois ou quatre mètres de la terrasse d'à côté, parfois sous une fenêtre ouverte. Cela change la préparation plus que la technique : prévenir les riverains immédiats, s'assurer que les ouvrants donnant sur la zone sont fermés, rentrer les animaux, retirer le linge étendu et les jouets d'extérieur. Le voisin non averti qui sort au mauvais moment constitue le risque principal de la demi-heure qui suit. Ce repérage se fait au moment de convenir de l'horaire, pas une fois sur place.",
    },
  ],
  'gignac-la-nerthe': [
    {
      title: 'La tranchée ferroviaire et la tête du tunnel',
      body:
        "La ligne vers Marseille traverse le territoire communal avant de s'enfoncer sous la chaîne de la Nerthe par un ouvrage long de plusieurs kilomètres. Aux abords de l'entrée, la voie court en déblai, entre des talus raides et des murs de soutènement. Il en résulte une bande linéaire close, sans fréquentation, dont la végétation n'est reprise qu'à intervalles espacés : les rongeurs y vivent sans rapport avec les maisons voisines, dont les fonds de jardin donnent pourtant sur la clôture du domaine ferroviaire. Le riverain n'a aucun droit d'agir au-delà de celle-ci ; son travail porte sur sa propre bordure, qu'il gagne à traiter comme une ligne à tenir.",
    },
    {
      title: 'Les bastides rattrapées par la construction',
      body:
        "Avant les cinquante dernières années, le territoire se partageait entre mas et domaines agricoles. Plusieurs subsistent, cernés désormais de rues résidentielles, et ont gardé ce qui les accompagnait : hangars, écuries, aires de stockage, vergers, parfois quelques bêtes. Une propriété de cette nature fournit à elle seule le gîte et le couvert, et approvisionne sans interruption un quartier qui, lui, ne présente aucune faiblesse particulière. Les habitants cherchent alors la cause chez eux et ne la trouvent pas, puisqu'elle se tient sur une parcelle dont aucun d'eux n'est propriétaire.",
    },
    {
      title: 'Les résidences récentes et leurs espaces communs',
      body:
        "Une part des constructions neuves prend la forme d'ensembles clos, dont la voirie intérieure, les plantations, le bassin de rétention et le local à conteneurs relèvent de la collectivité des copropriétaires et non de l'un d'entre eux. Or c'est précisément là que la difficulté se loge : au pied du talus planté, dans le regard d'eaux pluviales, derrière le local à déchets. Le propriétaire qui fait traiter son logement agit sur une surface où rien ne niche, pendant que la bande commune demeure inchangée. Tant que la décision n'a pas été portée devant l'instance qui administre ces espaces, la situation se reproduit à l'identique.",
    },
  ],
  'vitrolles': [
    {
      title: 'Le vieux village adossé à la roche',
      body:
        "Les maisons du noyau ancien s'appuient contre la barre rocheuse que surmonte la chapelle, et leurs pièces arrière sont à demi enterrées, fraîches et humides en toute saison. Cette configuration n'attire pas la même espèce que les immeubles récents : on y rencontre surtout la blatte orientale, qui préfère les endroits frais et bas — caves, vides sanitaires, canalisations —, remonte par les évacuations et se déplace au sol plus qu'en hauteur. La confondre avec sa cousine germanique conduit à porter l'effort sur les cuisines, alors que la population se tient en dessous, dans les regards et les fourreaux de réseau.",
    },
    {
      title: "Un plateau bâti d'un seul tenant",
      body:
        "Les quartiers élevés sur le plateau dans les années soixante-dix ont été conçus en une seule opération, chauffage compris : une chaufferie dessert plusieurs bâtiments par des galeries enterrées, qui portent également l'eau et parfois les courants faibles. Ces ouvrages sont tièdes en toute saison, secs, jamais éclairés, ouverts une ou deux fois l'an tout au plus. Ils relient des immeubles que rien ne rapproche en surface, ce qui explique des signalements concomitants dans des entrées éloignées. Une action limitée aux niveaux habités laisse ce réseau intact, et le réseau réalimente ensuite ce qui a été traité.",
    },
    {
      title: "Les surfaces d'activité laissées vides entre deux baux",
      body:
        "Les ensembles commerciaux et tertiaires de la commune comportent des cellules inoccupées, parfois durablement. Une cellule vide ne signale rien, ne reçoit personne, et conserve pourtant ses réseaux, son faux plafond et quelquefois les reliquats de l'activité précédente. Elle sert de base arrière aux voisines, qui font le nécessaire chez elles et ne comprennent pas que cela recommence. L'unité pertinente devient alors le bâtiment entier, combles techniques et réservations de cloison compris, si bien que l'accord du propriétaire des murs compte autant que celui des exploitants en place.",
    },
    {
      title: "La coupure entre la ville et l'étang",
      body:
        "Entre les derniers quartiers et la rive, les emprises routières et ferroviaires isolent une bande qu'on ne traverse pas à pied. Peu regardée, elle accumule des broussailles hautes, des remblais et des dépôts laissés là par facilité. Ce couloir entretient une population indépendante de tout bâtiment, qui remonte vers les abords construits aux premiers froids, ou dès qu'un chantier la déloge. Pour les établissements implantés de ce côté, l'échéance est prévisible : elle se prépare à l'arrière-saison, et non le jour où des passages sont constatés à l'intérieur.",
    },
  ],
  'salon-de-provence': [
    {
      title: 'Un centre resserré, des livraisons contraintes',
      body:
        "La vieille ville tient dans un anneau de boulevards tracé sur l'emplacement des remparts, et l'on n'y accède que par quelques portes et des rues où deux véhicules ne se croisent pas. Restaurants et commerces de bouche y sont approvisionnés sur une plage horaire courte, ce qui amène à poser cartons, cageots et bacs sur le trottoir en attendant de les rentrer. Ce dépôt de quelques heures, répété chaque matin aux mêmes adresses, finit par fixer un itinéraire nocturne entre le caniveau, les grilles d'arbres et l'arrière des boutiques.",
    },
    {
      title: 'Les matinées de marché',
      body:
        "Le marché occupe deux fois par semaine des places qui redeviennent ensuite stationnement et lieu de passage. C'est au remballage que tout se décide : les déchets sont rassemblés vite, sur un sol accidenté de pavés disjoints, de grilles d'arbres et de bouches d'évacuation, dont une part échappe au balayage qui suit. S'y ajoutent les véhicules des marchands, caisses et bâches stationnant à proximité dès la veille au soir. Les boutiques installées en bordure observent alors des allées et venues que l'examen de leur propre réserve ne justifie pas, et qu'aucune mesure prise chez elles ne fera cesser.",
    },
    {
      title: "Le canal de Craponne et le calendrier de l'arrosage",
      body:
        "L'irrigation de la plaine repose sur un canal ancien et ses ramifications, dont certaines franchissent la ville à ciel ouvert avant de disparaître sous la chaussée. Deux moments de l'année pèsent. La remise en eau noie les berges et refoule vers le haut ce qui s'y était établi ; le chômage hivernal produit l'inverse, en découvrant un fond sec que les rongeurs occupent aussitôt, abrités et tout près des propriétés riveraines. Jardins et entreprises longeant une filiole dépendent donc d'un calendrier qui leur échappe, et qu'il vaut mieux connaître : une action engagée à la veille du retour de l'eau n'a pas la même portée qu'une autre conduite en pleine saison.",
    },
    {
      title: 'La campagne oléicole et les moulins',
      body:
        "De novembre à janvier, la récolte converge vers les moulins et les coopératives, et le rythme des lieux change entièrement : réception en vrac, caisses en attente, et surtout des sous-produits en quantité — grignons, margines, feuilles — entreposés le temps d'être évacués. Cette ressource surgit en quelques jours, se concentre sur un point précis, puis disparaît au printemps. Les rongeurs ne s'en vont pas avec elle : l'effectif monté pendant la campagne se reporte sur les bâtiments alentour. Le moment le plus utile pour regarder les abords et les aires de dépôt se situe donc avant l'ouverture, non pendant.",
    },
  ],
  'marseille': [
    {
      title: 'Ce que le trottoir remet en circulation',
      body:
        "Dans les arrondissements centraux, un sommier posé au pied d'un immeuble reste rarement seul longtemps : il est photographié, proposé, chargé dans un utilitaire ou emporté par quelqu'un du quartier, parfois le soir même. Ce réemploi de proche en proche explique une part des arrivées de punaises de lit dans des logements où rien ne s'était jamais produit : l'insecte voyage avec le meuble, pas avec l'habitant. Un couchage sorti d'un appartement atteint doit donc être rendu impropre à la récupération avant la descente — housse fermée, structure sciée ou marquée au feutre large. Et tout lot rapporté d'une brocante gagne à être ouvert dehors, coutures et rainures comprises.",
    },
    {
      title: 'Un commerce de bouche sous des appartements',
      body:
        "Beaucoup d'immeubles anciens superposent une boutique au rez-de-chaussée, des logements aux étages et une cave voûtée en dessous, laquelle se prolonge parfois sous l'adresse mitoyenne. Cet empilement ouvre une communication verticale qu'aucune des parties ne maîtrise seule : conduit d'extraction, percements réalisés au fil des installations, escalier de cave, anciennes fosses maçonnées. Les blattes suivent la chaleur et montent ; les occupants du premier étage alertent, le commerçant est désigné, et le foyer se tient pourtant dans le volume intermédiaire — plénum, gaine, vide de plancher — dont nul ne se considère responsable.",
    },
    {
      title: 'Des chambres louées une par une',
      body:
        "Une grande partie des appartements anciens du centre est partagée entre plusieurs occupants, chacun avec son contrat, ses affaires et ses dates. Chaque emménagement forme alors un point d'entrée autonome, avec ses cartons et sa literie ; la cuisine et la pièce d'eau, communes, ne sont sous la responsabilité effective de personne ; et un départ en cours d'année emporte le mobilier vers une autre adresse du quartier. Réunir une date où toutes les chambres sont ouvertes suppose de passer par le propriétaire ou l'intermédiaire qui gère le lot : un accord obtenu d'un seul résident ne vaut que pour sa porte.",
    },
    {
      title: "La cour, le conteneur et l'heure de sortie",
      body:
        "Nombre d'immeubles s'organisent autour d'une cour ou d'un puits de lumière qu'aucune voie ne dessert : on n'y parvient qu'en traversant le hall, quelquefois un appartement. Les bacs y stationnent la journée avant d'être roulés jusqu'à la chaussée, souvent dans une pente, pour un ramassage tardif. Le point faible n'est alors ni la cour ni la chaussée mais l'intervalle entre les deux : sacs laissés au sol le temps d'une manœuvre, dalle lavée mais non rincée, avaloir au bas de la descente.",
    },
  ],
  'le-rove': [
    {
      title: 'Bergeries, foin et sacs de granulés',
      body:
        "Le Rove demeure une commune d'élevage, avec des troupeaux qui pâturent les collines et des bâtiments où s'entreposent fourrage et aliments. Ce contexte déplace le problème. Une botte de foin, un sac entamé ou une réserve de céréales offrent une ressource que rien n'épuise, et les rongeurs s'établissent dans la masse même du stock plutôt qu'à sa périphérie : tant que les rangs n'ont pas été écartés, ce que l'on relève au sol ne dit rien de l'effectif. La présence continue d'animaux de rente, de chiens au travail et parfois d'un atelier de transformation commande ensuite où chaque chose peut être posée : hors de portée des bêtes, à distance des locaux de traite et de fabrication, en contenant fermé et repéré. S'y ajoute une pression que le rongeur masque souvent, celle des mouches, liée au fumier et aux fortes chaleurs davantage qu'à l'entretien des lieux.",
    },
    {
      title: "Ce que l'on garde en réserve quand le premier commerce est loin",
      body:
        "Les habitations réparties sur le territoire achètent en volume : sacs de croquettes, palettes de granulés de chauffage, congélateur au garage, bois pour la saison froide. Ces réserves finissent presque toujours dans une annexe non chauffée dont la porte s'ouvre une fois par semaine. Un sac papier percé par en dessous, quelques granulés répandus derrière une pile, et la souris dispose au même endroit de quoi manger et de quoi nicher, sans avoir à pénétrer dans la maison. Quand elle s'y décide, c'est le garage ou le cellier qu'il faut reprendre, pas la cuisine. Poser les sacs sur une étagère métallique et transvaser dans des bidons rigides met fin à davantage de situations qu'un traitement mené à l'intérieur des pièces de vie.",
    },
    {
      title: 'Les terrains de loisir dans les collines',
      body:
        "Une partie des parcelles n'est pas habitée au sens ordinaire : un cabanon monté par étapes, une citerne, quelques fruitiers, aucun raccordement, une venue tous les quinze jours. Ces terrains produisent des situations que l'on ne voit pas ailleurs. Un nid de guêpes y atteint le volume d'un ballon sans avoir dérangé qui que ce soit, et se révèle le jour où le propriétaire revient tailler. Le suivi, surtout, n'y a pas le même sens : une séquence de passages rapprochés suppose quelqu'un sur place pour ouvrir, observer et rendre compte dans l'intervalle. Là où l'on se rend deux fois par mois, mieux vaut viser une action tranchée le jour même que d'ouvrir une séquence dont personne ne suivra le cours.",
    },
  ],
  'les-pennes-mirabeau': [
    {
      title: "Des surfaces commerciales sans jour creux",
      body:
        "Les grands ensembles commerciaux du plateau tournent sans interruption hebdomadaire, une partie d'entre eux le dimanche compris. Cette continuité a une conséquence directe : il n'existe aucun moment où les surfaces de vente, les galeries et leurs arrières se trouvent simultanément libérées. Ce qui doit être fait se replie donc sur la nuit, entre le départ du dernier client et la première réception, avec ce que cela impose en matière d'éclairage, d'alarme et d'accompagnement par un responsable. Les extérieurs comptent autant que l'intérieur : comptoirs de restauration rapide, files de bacs rangées derrière les cellules et talus plantés qui séparent les parkings composent un ensemble continu où la nourriture ne manque jamais, et dont personne n'a la vue d'ensemble puisque chaque enseigne ne connaît que son propre arrière.",
    },
    {
      title: 'Les délaissés des grandes voies',
      body:
        "Les infrastructures routières qui traversent la commune laissent derrière elles des morceaux de terrain sans usage : triangles pris entre deux bretelles, bandes coincées entre un merlon antibruit et la clôture des premières maisons, talus que rien ne dessert. Ces espaces ne sont parcourus par personne et reçoivent ce dont on veut se débarrasser sans faire le détour — gravats, déchets verts, sacs jetés par-dessus. Le résultat est une réserve abritée du vent et du passage, à moins de cent mètres de jardins dont les occupants cherchent chez eux une explication qui ne s'y trouve pas. Signaler le dépôt au service qui a la charge de l'emprise change davantage la situation, à terme, que trois campagnes menées sur les parcelles riveraines.",
    },
    {
      title: 'Les cabines des poids lourds',
      body:
        "L'activité de transport installée ici amène chaque nuit des ensembles routiers à stationner sur les aires et dans les cours d'entreprise. Une cabine est un lieu de vie : couchette, textiles, provisions, appareils de chauffage ou de cuisson. On y retrouve donc les mêmes désordres que dans une chambre — blattes germaniques logées dans les rangements de la console, punaises de lit dans les coutures du matelas — avec deux écarts qui comptent. Le volume est minuscule, ce qui concentre la population et rend les indices visibles vite ; et le véhicule repart, ce qui interdit le déroulement habituel et ramène régulièrement une infestation contractée à plusieurs centaines de kilomètres. Pour une société qui exploite plusieurs ensembles, la question se pose à l'échelle du parc et de la salle de repos, non du seul camion qui a alerté.",
    },
  ],
  'septemes-les-vallons': [
    {
      title: 'Les conduits maçonnés hérités des fonderies',
      body:
        "L'industrie du plomb qui a occupé le site au XIXe siècle a laissé dans le relief des ouvrages sans équivalent alentour : cheminées bâties à flanc de colline et conduits enterrés qui les reliaient aux fourneaux. Ces galeries de faible section passent sous des terrains désormais construits ou plantés, et leur tracé n'est plus connu de personne. Elles constituent un réseau sec, couvert, stable sur la durée, dont les débouchés ressortent en propriété privée, au pied d'un mur ou sous un dallage. Lorsqu'une maison du secteur constate des passages réguliers qu'aucune faiblesse visible n'explique, chercher une bouche ancienne avant de mettre en cause l'assainissement est souvent ce qui fait avancer le diagnostic.",
    },
    {
      title: 'Les logements ouvriers et leur niveau de caves',
      body:
        "L'habitat bâti pour les usines a laissé des alignements de petits collectifs et des maisons en bande, sous lesquels un niveau de caves file d'une entrée à l'autre, ventilé par des soupiraux ouverts au ras de la chaussée. Ces caves servent de débarras : piles de cartons, meubles remisés, vêtements, parfois des provisions. Elles ne sont ni éclairées ni visitées, et surtout elles communiquent entre elles. Agir dans un appartement sans descendre à ce niveau ne fait que décaler l'échéance de quelques semaines. Ouvrir ces locaux demande l'accord de celui qui administre l'immeuble, et il faut compter avec les boxes dont la clé s'est perdue au fil des changements d'occupants : ce sont précisément ceux où la population a eu le temps de s'installer.",
    },
    {
      title: 'Un fond de vallon que tout emprunte',
      body:
        "La commune s'allonge au creux d'un vallon étroit qu'elle partage avec les grandes voies de circulation. Le sol y est compté : les fonds de jardin arrivent au contact direct des emprises, sans espace intermédiaire, et le bâti ancien longe une chaussée où l'arrêt d'un véhicule se discute avant de se décider. Deux effets concrets. Les chantiers menés de nuit sur ces réseaux — entretien, remplacement, reprise de la végétation — provoquent des reports soudains vers les habitations les plus proches, sans rapport avec la façon dont elles sont tenues. Et l'étroitesse interdit d'improviser : le déploiement d'une échelle, l'atteinte de l'arrière d'une maison mitoyenne ou le passage par une cour voisine se tranchent pendant l'appel, jamais une fois le véhicule à l'arrêt.",
    },
  ],
  'plan-de-cuques': [
    {
      title: "Les piscines et la soif du mois d'août",
      body:
        "Au plus fort de l'été, l'eau est dans ce secteur la ressource la plus rare, et les guêpes la cherchent là où elle est maintenue : margelle humide, local de filtration, robinet qui goutte, goutteurs d'arrosage, gamelle laissée dehors. D'où une situation courante et mal lue — une terrasse rendue impraticable par un défilé d'insectes alors qu'aucun nid ne se trouve sur le terrain. Séparer les deux cas évite une dépense sans objet : des ouvrières venues boire repartent toutes dans le même azimut et leur nombre varie fortement selon l'heure et la chaleur, tandis qu'une colonie établie sur place entretient un flux dans les deux sens vers un endroit précis, y compris à la tombée du jour. Dans le premier cas, le travail consiste à supprimer les prises d'eau accessibles, puis à chercher la colonie chez le voisin ou dans la lisière.",
    },
    {
      title: "Sous la toiture, ce n'est pas toujours une souris",
      body:
        "Les maisons appuyées au massif hébergent régulièrement, entre plafond et couverture, un animal que l'on prend pour un rongeur de maison : le lérot ou le loir, venus du boisement voisin passer la mauvaise saison dans un comble isolé. L'identification n'est pas un détail de vocabulaire. La taille, les bruits — des déplacements lourds et des objets qui roulent, plutôt que de fins grattements —, l'aspect des déjections et le mode d'entrée diffèrent, et la réponse avec eux : sur ces espèces, seule la fermeture des accès en toiture tient dans le temps, au niveau des rives, des chatières et des tuiles de ventilation. Un appât disposé avant d'avoir identifié l'occupant est au mieux sans effet, et prive au passage de l'information qui aurait orienté le travail.",
    },
    {
      title: "Les puces, au retour d'une maison restée fermée",
      body:
        "Une habitation en bordure de massif, avec un chat ou un chien qui sort, connaît des arrivées de puces qui ne doivent rien à sa propreté. Le phénomène se manifeste surtout à la rentrée : pendant les semaines d'absence, les cocons installés dans les tapis, les rainures de parquet et les couchages attendent, et l'éclosion se déclenche au passage et aux vibrations. Les occupants reviennent, sont piqués aux chevilles dès la première soirée et en concluent que quelque chose s'est produit pendant leur absence. La suite dépend d'un point que l'on néglige souvent : s'occuper du logement sans s'occuper de l'animal, ou l'inverse, laisse en place la moitié du cycle, tout comme un aspirateur passé sans que le sac soit sorti dans la foulée.",
    },
  ],
  'cabries': [
    {
      title: 'Le Réaltor, une eau qui ne tolère pas le ruissellement',
      body:
        "Le plan d'eau du Réaltor et ses abords posent une contrainte que l'on ne rencontre nulle part ailleurs sur la commune : cette eau est destinée à l'alimentation, et ce qui se dépose dans son bassin versant immédiat peut l'atteindre par ruissellement. Sur les terrains qui le bordent, cela écarte tout ce qui serait simplement laissé au sol dehors et conduit à des postes arrimés, clos, placés loin des fossés et des points bas. Les berges, avec leur ceinture végétale épaisse et leur eau en toute saison, hébergent par ailleurs des rongeurs qui n'ont besoin d'aucune construction pour vivre à l'année. Les propriétés qui font face en subissent la pression de façon continue, et l'essentiel de ce qu'elles peuvent faire se joue sur quelques mètres : clôture reprise, compost fermé, réserves extérieures mises hors d'atteinte.",
    },
    {
      title: 'Des jardins qui sont en réalité des bois',
      body:
        "Entre le vieux village et Calas, le parcellaire compte quantité de terrains de plusieurs milliers de mètres carrés couverts de pins et de chênes, avec une maison au milieu. Le propriétaire parle de son jardin ; pour ce qui nous occupe, c'est un boisement, et la nuance décide de ce qui peut raisonnablement être entrepris. Traiter un hectare de sous-bois n'a pas de sens : ce qui en a, c'est une couronne autour des constructions, où l'on reprend le contact entre le sol forestier et le bâti — bûcher écarté des murs, branches basses dégagées de la couverture, grilles d'aération et vide sanitaire remis en état, réserves extérieures closes. Le reste de la parcelle demeure ce qu'il est, avec la faune qui va avec, et ce n'est pas un demi-résultat.",
    },
    {
      title: "Le golf, l'arrosage nocturne et ce qui longe les limites",
      body:
        "Le parcours occupe une vaste surface irriguée au milieu de collines sèches, avec ses pièces d'eau, ses herbes hautes et ses bâtiments d'exploitation. Deux aspects intéressent ceux qui le bordent. L'arrosage de nuit maintient en pleine saison une humidité qui n'existe nulle part alentour, et cette humidité rassemble les insectes puis, derrière eux, ce qui s'en nourrit, sur une frange de quelques dizaines de mètres de part et d'autre des clôtures. Par ailleurs, les locaux d'exploitation — remise à tondeuses, stockage de produits et d'engrais, atelier, cuisine du club — ne s'examinent pas comme les zones de jeu : ce sont des espaces de stockage et de préparation, avec leurs propres exigences de contrôle et leurs propres horaires d'accès.",
    },
  ],
  'bouc-bel-air': [
    {
      title: 'Serres, tunnels et végétaux en conteneur',
      body:
        "La production horticole occupe de longue date une part du territoire, et une exploitation de ce type ne se raisonne pas comme un jardin d'agrément. Sous une serre ou un tunnel tenu hors gel, chaleur et arrosage reconduisent des conditions de belle saison alors qu'il gèle dehors : une population de rongeurs établie là ignore la pause hivernale et se multiplie quand celle des parcelles voisines ralentit. Les dommages ne se limitent pas aux plants, puisque lignes de goutte-à-goutte, gaines des automatismes et isolants d'armoire sont rongés au passage. Les aires où conteneurs et substrat demeurent serrés pendant des mois se regardent avant les planches de culture elles-mêmes.",
    },
    {
      title: 'Les véhicules et les engins qui ne bougent plus',
      body:
        "Le long de la départementale, concessions, loueurs de matériel, garages et jardineries entreposent sur leurs terre-pleins des voitures d'occasion, des remorques et des machines de tonte parfois immobiles plusieurs semaines. Un compartiment moteur refroidi garde sa tiédeur une partie de la nuit, se trouve couvert, et renferme tout le nécessaire pour bâtir : mousses d'insonorisation, filtres, faisceaux gainés. Le rongeur s'y loge, et le dégât se découvre à la remise en route sous la forme d'une panne électrique dont nul ne cherche l'origine à cet endroit. Déplacé, l'engin emmène en outre ses occupants vers le site suivant. Lever les capots pendant les contrôles périodiques apprend davantage qu'un tour de bâtiment.",
    },
    {
      title: 'Un parc que personne ne parcourt en entier',
      body:
        "Les propriétés closes de la commune ménagent volontiers un hectare ou plus entre le portail et la maison : allée plantée, bosquets, ancienne serre, remise, pièce d'eau d'agrément. Celui qui habite se tient au centre et n'approche des limites qu'exceptionnellement, tandis que l'entretien revient à une entreprise d'espaces verts passant à dates fixes. Il en résulte un retard de constat : terrier sous un muret, nid dans un tas de tailles, remise restée ouverte depuis des mois, rien de tout cela n'est vu de la saison. Lorsqu'un désordre remonte de l'intérieur, il a déjà son histoire au-dehors. Questionner celui qui tond et qui taille rapporte alors plus que l'examen du logement.",
    },
  ],
  'mimet': [
    {
      title: "L'altitude, et le décalage qu'elle impose au calendrier",
      body:
        "Perché sur le versant sud de la chaîne de l'Étoile, Mimet compte parmi les communes les plus élevées des Bouches-du-Rhône, et cette hauteur décale l'année de quelques semaines par rapport au littoral. Les nuits froides s'installent plus tôt : le repli des rongeurs vers les maisons, les garages et les bûchers se constate dès le début de l'automne, quand il attend parfois la fin novembre au bord de l'eau. Le mouvement inverse vaut au printemps, une fondatrice de guêpes lançant sa colonie plus tard, pour un nid dont le volume maximal survient d'autant plus tard. Les pins suivent la même règle, et la descente des processionnaires ne tombe pas à la date observée en plaine. Se régler sur un calendrier établi pour la côte, ici, c'est regarder au mauvais moment.",
    },
    {
      title: 'Un sous-sol exploité, un bâti qui a travaillé',
      body:
        "Le charbon a été extrait sous ce secteur du bassin, et les mouvements de terrain consécutifs à la fermeture ont marqué les constructions : fissures traversantes, seuils désaffleurés, dallages désolidarisés des maçonneries. Ces défauts ne relèvent pas que de l'esthétique. Quelques millimètres d'ouverture en pied de mur, un joint de dallage disjoint ou un creux apparu sous un seuil forment des entrées permanentes, basses, et dissimulées derrière une plinthe ou un revêtement. Les occupants y voient de la vétusté et les mentionnent rarement. Plutôt que d'incriminer d'emblée les canalisations, on gagne à longer la base des murs, dedans comme dehors, en soulevant le revêtement partout où c'est possible.",
    },
    {
      title: 'Les restanques plantées et ce qui reste au sol',
      body:
        "Les terrasses qui étagent les pentes du village ont été montées pour cultiver, et beaucoup portent encore oliviers et fruitiers dont nul ne fait plus la récolte. En octobre et novembre, ces parcelles laissent au sol une masse de fruits tombés qui achève d'y pourrir. Voilà une ressource abondante et datée, dont le moment coïncide exactement avec la recherche d'un abri pour la mauvaise saison, et les murs de pierre sèche qui retiennent les terrasses en offrent un à portée immédiate. Ramasser sous les arbres voisins des bâtiments, avant les premiers froids, supprime l'un des deux termes. Le mur, lui, ne se rebouche pas : c'est l'ouvrage qui tient la pente.",
    },
  ],
  'simiane-collongue': [
    {
      title: 'Une terre à tuiles, et des terriers qui tiennent',
      body:
        "L'argile tirée d'ici a fait vivre des tuileries, et c'est toujours elle qui compose une bonne part des sols communaux. Cette matière possède une propriété qui pèse sur la lutte contre les rongeurs : creusée en galerie, elle se tient. Là où un terrain sableux s'affaisse et contraint l'animal à recommencer ailleurs, l'argile garde un terrier ramifié, stable d'une année sur l'autre, dont les entrées se rouvrent en une nuit. Boucher un orifice avec la terre du tas d'à côté ne mène donc nulle part, le conduit demeurant intact en dessous. L'obturation ne prend son sens qu'avec un matériau impossible à reprendre — grillage à maille fine enterré, mortier, pierre calée — appliqué à l'entrée principale comme aux issues de secours, qui vont rarement par une seule.",
    },
    {
      title: 'Une limite communale qui ne se voit pas sur le terrain',
      body:
        "Au nord, les quartiers bâtis se poursuivent vers Gardanne sans rupture apparente : une seule rue, les mêmes haies, des fonds de jardin semblables, et pourtant deux communes. L'animal ignore cette frontière ; celui qui veut faire cesser une nuisance, lui, en dépend entièrement. Une friche, un dépôt sauvage ou un fossé délaissé situé à quelques mètres d'une maison peut ressortir d'un autre service technique, d'un autre gestionnaire de voirie, à l'occasion d'un autre bailleur. Adressée du mauvais côté, la demande se perd. Mieux vaut donc établir au cadastre, avant d'écrire, de quel côté tombe précisément la parcelle en cause et à qui elle appartient.",
    },
    {
      title: "Après la pluie, un terrain qu'on ne parcourt pas",
      body:
        "Ce même sol argileux ferme certains accès pendant plusieurs jours à la suite d'un épisode pluvieux : chemins de desserte, fonds de parcelle et abords de hangar tournent au gras et au collant, où un véhicule chargé s'enlise. Deux effets concrets en découlent. Le repérage au-dehors — suivre une coulée, relever des gueules de terrier, placer un dispositif au bon endroit — réclame un sol portant et se mène mal dans ces conditions ; reporter de quelques jours vaut mieux que de trancher sur un terrain où plus rien ne se lit. Quant à l'échelle, la perche ou le matériel lourd, ils exigent une assise ferme, absente tant que le sol n'a pas ressuyé. Autant l'annoncer en convenant de la date.",
    },
  ],
};
