/* ---------------------------------------------------------------------------
   Tout le contenu éditable du site est ici. Benjamin peut modifier ce fichier
   sans toucher aux composants.
--------------------------------------------------------------------------- */

export const entreprise = {
  nom: "Bourges Guêpes",
  metier: "Destruction de nids de guêpes & frelons",
  ville: "Bourges",
  zone: "Bourges et tout le Cher",
  departement: "Cher (18)",

  telephone: "06 38 05 46 33",
  telephoneLien: "tel:+33638054633",

  /* Relevés sur la fiche Google de l'entreprise le 23/07/2026 — à faire
     confirmer par le client. L'adresse n'est volontairement affichée nulle
     part sur le site : c'est un métier où c'est l'artisan qui se déplace, et
     la fiche Google est une fiche « zone desservie ». Elle est gardée ici pour
     mémoire (et pour la future passe SEO / données structurées). */
  adresse: "8 rue Franklin, 18000 Bourges",

  /* Si ces deux valeurs passent à null, la section Avis remplace d'elle-même
     la pastille de notation par un simple lien vers la fiche Google. */
  noteGoogle: "5,0" as string | null,
  nombreAvisGoogle: 14 as number | null,

  // Lien « ouvrir dans Google Maps » (fiche de l'entreprise).
  mapsLien:
    "https://www.google.com/maps/place/BOURGES+GUEPES/@47.1004989,2.3954649,15z/data=!4m6!3m5!1s0x47fa97a369794851:0x94d0a98c7ca2865e!8m2!3d47.1004989!4d2.3954649!16s%2Fg%2F11p3c4f1bv",

  // Carte intégrée : le mode `output=embed` ne demande aucune clé d'API.
  mapsEmbed:
    "https://www.google.com/maps?q=BOURGES+GUEPES,+Bourges&ll=47.1004989,2.3954649&z=10&output=embed",
};

/* --- Formulaire de contact ---------------------------------------------
   Clé Web3Forms : à générer gratuitement sur https://web3forms.com avec
   l'adresse e-mail du client (c'est là que les demandes arriveront), puis à
   coller ci-dessous. Tant que la valeur est `null`, le formulaire s'affiche
   mais n'envoie rien : il invite à appeler à la place.
------------------------------------------------------------------------- */
export const web3formsKey: string | null = null;

// 7 j/7, 8h–21h — relevé sur la fiche Google le 23/07/2026.
export const horaires = [
  { jour: "Lundi", heures: "08:00 – 21:00" },
  { jour: "Mardi", heures: "08:00 – 21:00" },
  { jour: "Mercredi", heures: "08:00 – 21:00" },
  { jour: "Jeudi", heures: "08:00 – 21:00" },
  { jour: "Vendredi", heures: "08:00 – 21:00" },
  { jour: "Samedi", heures: "08:00 – 21:00" },
  { jour: "Dimanche", heures: "08:00 – 21:00" },
];

// Sert à la fois aux pastilles de la section « À propos », à la liste du pied
// de page et au menu déroulant du formulaire de contact.
export const nuisibles = [
  "Guêpes",
  "Frelons européens",
  "Frelons asiatiques",
  "Guêpes maçonnes",
  "Nids en hauteur",
  "Nids difficiles d'accès",
];

/* --- Réalisations ------------------------------------------------------- */
export type Realisation = {
  id: string;
  image: string;
  titre: string;
  lieu: string;
  chapo: string;
  texte: string;
};

export const realisations: Realisation[] = [
  {
    id: "volet",
    image: "volet",
    titre: "Nid de guêpes dans un coffre de volet roulant",
    lieu: "Maison · Bourges",
    chapo: "Intervention le jour même",
    texte:
      "Appel en fin de matinée : des guêpes entraient et sortaient par le caisson du volet d'une chambre d'enfant, et le volet ne pouvait plus être manœuvré sans en faire tomber à l'intérieur. Le nid était logé dans le coffre, invisible de l'extérieur. Injection d'un insecticide en poudre homologué directement dans l'orifice d'entrée : les ouvrières rentrantes rapportent le produit au cœur du nid et contaminent la colonie entière, reine comprise. Activité nulle le lendemain, coffre ouvert et nid retiré dans la foulée.",
  },
  {
    id: "arbre",
    image: "arbre",
    titre: "Nid de frelons asiatiques à onze mètres",
    lieu: "Jardin · Saint-Doulchard",
    chapo: "Traitement à la perche",
    texte:
      "Nid de la taille d'un ballon de basket, repéré en haut d'un tilleul après la chute des feuilles, au-dessus d'une aire de jeux. Aucune nacelle possible dans le jardin. Traitement depuis le sol à la perche télescopique, en fin de journée : c'est le moment où la quasi-totalité de la colonie est rentrée, donc celui où le traitement en attrape le plus. Nid décroché le surlendemain, une fois toute activité éteinte, et brûlé (un nid abandonné laissé en place attire d'autres nuisibles).",
  },
  {
    id: "charpente",
    image: "charpente",
    titre: "Nid sous la charpente d'un corps de ferme",
    lieu: "Bâtiment agricole · Sud du Cher",
    chapo: "Nid retiré intégralement",
    texte:
      "Colonie installée contre une panne de charpente, dans un hangar encore utilisé quotidiennement. Le nid faisait plus de trente centimètres et la circulation des insectes passait juste au-dessus du passage des engins. Intervention en combinaison intégrale, traitement à l'entrée du nid puis dépose complète du gâteau une fois la colonie éteinte. Les points d'appui ont été nettoyés : les reines reviennent volontiers là où un nid a déjà tenu.",
  },
];

/* --- Protocole ---------------------------------------------------------- */
export const processus = [
  {
    quand: "Au téléphone",
    titre: "Identifier avant de se déplacer",
    accroche: "Le tarif est annoncé avant le départ",
    texte:
      "Deux ou trois questions suffisent : la forme du nid, sa hauteur, la façon dont les insectes entrent. On sait alors s'il s'agit de guêpes, de frelons européens ou de frelons asiatiques ; ce n'est ni le même danger, ni le même matériel. Le prix est annoncé à ce moment-là, pas une fois le camion garé devant chez vous.",
  },
  {
    quand: "Sur place",
    titre: "Traiter le nid, pas les insectes",
    accroche: "La colonie entière, reine comprise",
    texte:
      "Un insecticide en poudre homologué est injecté directement à l'entrée du nid. Les ouvrières qui rentrent le rapportent au cœur de la colonie : c'est ce qui atteint la reine et le couvain, là où une bombe du commerce ne fait que tuer ce qui vole autour. Perche télescopique jusqu'à douze mètres pour les nids en hauteur, combinaison intégrale pour les accès directs.",
  },
  {
    quand: "Après",
    titre: "Retirer et vérifier",
    accroche: "Un nid vide attire d'autres nuisibles",
    texte:
      "Une fois l'activité éteinte, le nid est déposé quand il est accessible, et le point d'ancrage nettoyé : les reines fondatrices reviennent volontiers là où un nid a déjà tenu. Si de l'activité reprend dans les jours qui suivent, on revient. C'est compris.",
  },
];

export const processusZones = [
  "Sous les tuiles",
  "Coffres de volets roulants",
  "Charpentes et greniers",
  "Conduits de cheminée",
  "Abris de jardin",
  "Haies et arbres",
];

/* --- Avis ---------------------------------------------------------------
   ⚠️ AVIS DE MAQUETTE — À REMPLACER AVANT TOUTE MISE EN LIGNE.
   Ces témoignages sont des exemples rédigés pour caler la mise en page ; ce ne
   sont PAS de vrais avis clients. Les remplacer par les avis Google réels (ou
   supprimer la section) avant la livraison. Mettre `avisReels` à true une fois
   les vrais avis en place.
------------------------------------------------------------------------- */
export const avisReels = false;

export const avis = [
  { nom: "Sylvie R.", texte: "Nid de guêpes dans le coffre du volet de la chambre de ma fille. Appelé à 11h, il était là à 15h. Prix annoncé au téléphone, prix payé. Plus rien depuis." },
  { nom: "Pascal M.", texte: "Frelons asiatiques en haut d'un tilleul, personne ne voulait monter. Il l'a fait à la perche depuis le sol, en fin de journée. Nid décroché deux jours après. Impeccable." },
  { nom: "Émilie F.", texte: "Un dimanche matin, avec des guêpes qui rentraient dans la cuisine. Il a décroché, il est passé. Le 7j/7 n'est pas juste écrit sur la fiche, c'est vrai." },
  { nom: "Jean-Luc B.", texte: "Exploitation agricole, nid énorme sous la charpente du hangar. Travail sérieux, il a tout retiré et nettoyé les appuis. On le rappellera." },
  { nom: "Nathalie C.", texte: "J'avais essayé une bombe du commerce, résultat elles étaient encore plus agressives. Lui a traité l'entrée du nid, terminé en deux jours. J'aurais dû appeler tout de suite." },
  { nom: "Thierry D.", texte: "Gîte à louer, nid de frelons au-dessus de la porte d'entrée à trois jours de l'arrivée des clients. Réglé le lendemain. Très pro et très clair sur ce qu'il faisait." },
];
