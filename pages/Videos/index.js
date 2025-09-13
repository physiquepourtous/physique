import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Script from 'next/script';
import Breadcrumb from '../../components/common/Breadcrumb';

// Données pour les vidéos - Tronc Commun Semestre 1
const tcPhysiqueS1Videos = [
  {
    id: 1,
    title: "Chapitre 1 : La gravitation universelle",
    description: "Introduction à la loi de la gravitation universelle et ses applications dans notre système solaire.",
    videoId: "VIDEO_ID_1",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_1"
  },
  {
    id: 2,
    title: "Chapitre 2 : Actions mécaniques",
    description: "Introduction aux différentes actions mécaniques et leurs effets sur les objets.",
    videoId: "VIDEO_ID_2",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_2"
  },
  {
    id: 3,
    title: "Chapitre 3 : Le mouvement",
    description: "Différents types de mouvements et leurs caractéristiques principales.",
    videoId: "VIDEO_ID_3",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_3"
  },
  {
    id: 4,
    title: "Chapitre 4 : Le principe d'inertie",
    description: "Explication du principe d'inertie (première loi de Newton) et ses applications.",
    videoId: "VIDEO_ID_4",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_4"
  },
  {
    id: 5,
    title: "Chapitre 5 : Équilibre d'un corps (2 forces)",
    description: "Conditions d'équilibre d'un corps soumis à deux forces et applications.",
    videoId: "VIDEO_ID_5",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_5"
  },
  {
    id: 6,
    title: "Chapitre 6 : Équilibre d'un corps (3 forces)",
    description: "Équilibre d'un corps soumis à trois forces coplanaires et non parallèles.",
    videoId: "VIDEO_ID_6",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_6"
  },
  {
    id: 7,
    title: "Chapitre 7 : Équilibre d'un solide en rotation",
    description: "Conditions d'équilibre d'un solide en rotation autour d'un axe fixe.",
    videoId: "VIDEO_ID_7",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_7"
  }
];

const tcChimieS1Videos = [
  {
    id: 8,
    title: "Chapitre 1 : Les espèces chimiques",
    description: "Classification et propriétés des différentes espèces chimiques.",
    videoId: "VIDEO_ID_8",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_8"
  },
  {
    id: 9,
    title: "Chapitre 2 : Extraction et séparation",
    description: "Techniques de laboratoire pour extraire et séparer différentes espèces chimiques.",
    videoId: "VIDEO_ID_9",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_9"
  },
  {
    id: 10,
    title: "Chapitre 3 : Synthèse des espèces chimiques",
    description: "Méthodes de synthèse des composés chimiques et applications industrielles.",
    videoId: "VIDEO_ID_10",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_10"
  },
  {
    id: 11,
    title: "Chapitre 4 : Le modèle de l'atome",
    description: "Évolution des modèles atomiques et structure électronique de l'atome.",
    videoId: "VIDEO_ID_11",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_11"
  },
  {
    id: 12,
    title: "Chapitre 5 : La géométrie de quelques molécules",
    description: "Théorie VSEPR et prédiction de la géométrie des molécules simples.",
    videoId: "VIDEO_ID_12",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_12"
  }
];

// Données pour les vidéos - Tronc Commun Semestre 2
const tcPhysiqueS2Videos = [
  {
    id: 13,
    title: "Chapitre 8 : Le courant électrique continu",
    description: "Principes fondamentaux du courant électrique continu et ses applications.",
    videoId: "VIDEO_ID_13",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_13"
  },
  {
    id: 14,
    title: "Chapitre 9 : La tension électrique",
    description: "Définition et mesure de la tension électrique dans les circuits.",
    videoId: "VIDEO_ID_14",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_14"
  },
  {
    id: 15,
    title: "Chapitre 10 : Association des conducteurs ohmiques",
    description: "Calcul des résistances équivalentes dans différentes configurations de circuit.",
    videoId: "VIDEO_ID_15",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_15"
  },
  {
    id: 16,
    title: "Chapitre 11 : Caractéristiques de quelques dipôles passifs",
    description: "Étude des caractéristiques des principaux dipôles passifs (résistances, condensateurs...).",
    videoId: "VIDEO_ID_16",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_16"
  },
  {
    id: 17,
    title: "Chapitre 12 : Caractéristique d'un dipôle actif",
    description: "Caractéristiques des générateurs et autres dipôles actifs dans un circuit électrique.",
    videoId: "VIDEO_ID_17",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_17"
  },
  {
    id: 18,
    title: "Chapitre 13 : Le transistor",
    description: "Fonctionnement et applications du transistor en électronique.",
    videoId: "VIDEO_ID_18",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_18"
  },
  {
    id: 19,
    title: "Chapitre 14 : L'amplificateur opérationnel",
    description: "Fonctionnement et montages de base utilisant l'amplificateur opérationnel.",
    videoId: "VIDEO_ID_19",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_19"
  }
];

const tcChimieS2Videos = [
  {
    id: 20,
    title: "Chapitre 6 : Classification périodique des éléments",
    description: "Organisation et propriétés des éléments dans le tableau périodique.",
    videoId: "VIDEO_ID_20",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_20"
  },
  {
    id: 21,
    title: "Chapitre 7 : La mole, unité de quantité de matière",
    description: "Concept de mole et calculs stœchiométriques de base.",
    videoId: "VIDEO_ID_21",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_21"
  },
  {
    id: 22,
    title: "Chapitre 8 : La concentration molaire",
    description: "Calculs de concentration molaire et préparation de solutions.",
    videoId: "VIDEO_ID_22",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_22"
  },
  {
    id: 23,
    title: "Chapitre 9 : Modélisation des transformations chimiques",
    description: "Modélisation des réactions chimiques et calculs de bilans de matière.",
    videoId: "VIDEO_ID_23",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_23"
  }
];

// Données pour les vidéos - 1ère Bac Semestre 1
const bac1PhysiqueS1Videos = [
  {
    id: 1,
    title: "Chapitre 1 : Rotation d'un solide",
    description: "Étude du mouvement de rotation d'un solide indéformable autour d'un axe fixe.",
    videoId: "VIDEO_ID_1",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_1"
  },
  {
    id: 2,
    title: "Chapitre 2 : Travail et puissance",
    description: "Définitions et calculs du travail et de la puissance d'une force.",
    videoId: "VIDEO_ID_2",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_2"
  },
  {
    id: 3,
    title: "Chapitre 3 : Travail et énergie cinétique",
    description: "Relation entre le travail des forces et la variation de l'énergie cinétique.",
    videoId: "VIDEO_ID_3",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_3"
  },
  {
    id: 4,
    title: "Chapitre 4 : Énergie potentielle",
    description: "Travail et énergie potentielle de pesanteur - Énergie mécanique.",
    videoId: "VIDEO_ID_4",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_4"
  },
  {
    id: 5,
    title: "Chapitre 5 : Énergie interne",
    description: "Travail et énergie interne dans les systèmes thermodynamiques.",
    videoId: "VIDEO_ID_5",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_5"
  },
  {
    id: 6,
    title: "Chapitre 6 : Transfert thermique",
    description: "Énergie thermique et différents modes de transfert thermique.",
    videoId: "VIDEO_ID_6",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_6"
  },
  {
    id: 7,
    title: "Chapitre 7 : Champ électrostatique",
    description: "Concept de champ électrostatique et ses propriétés fondamentales.",
    videoId: "VIDEO_ID_7",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_7"
  }
];

const bac1ChimieS1Videos = [
  {
    id: 8,
    title: "Chapitre 1 : Importance de la mesure",
    description: "Importance et techniques de mesure précise en chimie.",
    videoId: "VIDEO_ID_8",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_8"
  },
  {
    id: 9,
    title: "Chapitre 2 : Quantité de matière",
    description: "Grandeurs physiques liées à la quantité de matière.",
    videoId: "VIDEO_ID_9",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_9"
  },
  {
    id: 10,
    title: "Chapitre 3 : Solutions électrolytiques",
    description: "La concentration et les solutions électrolytiques.",
    videoId: "VIDEO_ID_10",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_10"
  },
  {
    id: 11,
    title: "Chapitre 4 : Transformation chimique",
    description: "Suivi d'une transformation chimique et ses caractéristiques.",
    videoId: "VIDEO_ID_11",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_11"
  },
  {
    id: 12,
    title: "Chapitre 5 : Conductimétrie",
    description: "Mesure des quantités de matière en solution par conductimétrie.",
    videoId: "VIDEO_ID_12",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_12"
  },
  {
    id: 13,
    title: "Chapitre 6 : Réactions acido-basiques",
    description: "Théorie des acides et des bases, équilibres acido-basiques.",
    videoId: "VIDEO_ID_13",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_13"
  }
];

// Données pour les vidéos - 1ère Bac Semestre 2
const bac1PhysiqueS2Videos = [
  {
    id: 14,
    title: "Chapitre 8 : Énergie potentielle électrique",
    description: "Énergie potentielle d'une charge électrique dans un champ électrique uniforme.",
    videoId: "VIDEO_ID_14",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_14"
  },
  {
    id: 15,
    title: "Chapitre 9 : Transfert d'énergie électrique",
    description: "Transfert d'énergie dans un circuit électrique et comportement global.",
    videoId: "VIDEO_ID_15",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_15"
  },
  {
    id: 16,
    title: "Chapitre 10 : Le champ magnétique",
    description: "Notion de champ magnétique, spectre magnétique et effets sur les particules chargées.",
    videoId: "VIDEO_ID_16",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_16"
  },
  {
    id: 17,
    title: "Chapitre 11 : Champ magnétique et courant",
    description: "Le champ magnétique créé par un courant électrique.",
    videoId: "VIDEO_ID_17",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_17"
  },
  {
    id: 18,
    title: "Chapitre 12 : Forces électromagnétiques",
    description: "Les forces électromagnétiques - La loi de Laplace.",
    videoId: "VIDEO_ID_18",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_18"
  },
  {
    id: 19,
    title: "Chapitre 13 : Visibilité d'un objet",
    description: "Conditions de visibilité d'un objet, diffusion de la lumière.",
    videoId: "VIDEO_ID_19",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_19"
  },
  {
    id: 20,
    title: "Chapitre 14 : Miroir plan",
    description: "Les images formées par un miroir plan.",
    videoId: "VIDEO_ID_20",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_20"
  },
  {
    id: 21,
    title: "Chapitre 15 : Lentille convergente",
    description: "Les images formées par une lentille mince convergente.",
    videoId: "VIDEO_ID_21",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_21"
  }
];

const bac1ChimieS2Videos = [
  {
    id: 22,
    title: "Chapitre 7 : Les réactions d'oxydo-réduction",
    description: "Concepts d'oxydation et de réduction, couples redox.",
    videoId: "VIDEO_ID_22",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_22"
  },
  {
    id: 23,
    title: "Chapitre 8 : Les dosages directs",
    description: "Les dosages (ou titrages) directs et leur principe.",
    videoId: "VIDEO_ID_23",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_23"
  },
  {
    id: 24,
    title: "Chapitre 9 : Expansion de la chimie organique",
    description: "Introduction à la chimie organique et son histoire.",
    videoId: "VIDEO_ID_24",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_24"
  },
  {
    id: 25,
    title: "Chapitre 10 : Molécules organiques",
    description: "Les molécules organiques et les squelettes carbonés.",
    videoId: "VIDEO_ID_25",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_25"
  },
  {
    id: 26,
    title: "Chapitre 11 : Modification du squelette carboné",
    description: "Processus et réactions modifiant le squelette carboné.",
    videoId: "VIDEO_ID_26",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_26"
  },
  {
    id: 27,
    title: "Chapitre 12 : Groupes caractéristiques",
    description: "Les groupes caractéristiques en chimie organique - La réactivité des alcools.",
    videoId: "VIDEO_ID_27",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_27"
  }
];

// Données pour les vidéos - 2ème Bac Semestre 1
const bac2PhysiqueS1Videos = [
  {
    id: 30,
    title: "Chapitre 1 : Ondes mécaniques progressives",
    description: "Définition et propagation des ondes mécaniques progressives.",
    videoId: "PLwjBjMxdDDQUgVmHWuTn4jJwM3hH1jtKS",
    youtubeLink: "https://www.youtube.com/playlist?list=PLwjBjMxdDDQUgVmHWuTn4jJwM3hH1jtKS"
  },
  {
    id: 31,
    title: "Chapitre 2 : Ondes mécaniques périodiques",
    description: "Caractéristiques des ondes mécaniques progressives périodiques.",
    videoId: "PLwjBjMxdDDQWEejPPzX5GPbRjEAq_S42s",
    youtubeLink: "https://www.youtube.com/playlist?list=PLwjBjMxdDDQWEejPPzX5GPbRjEAq_S42s"
  },
  {
    id: 32,
    title: "Chapitre 3 : Propagation des ondes lumineuses",
    description: "Propriétés et comportement des ondes lumineuses.",
    videoId: "PLwjBjMxdDDQVTekrGKx5_vnbELHB9hguG",
    youtubeLink: "https://www.youtube.com/playlist?list=PLwjBjMxdDDQVTekrGKx5_vnbELHB9hguG"
  },
  {
    id: 33,
    title: "Chapitre 4 : Décroissance radioactive",
    description: "Phénomène de décroissance radioactive et lois associées.",
    videoId: "PLwjBjMxdDDQWi1OqIXzpehIHXvsTo6fu9",
    youtubeLink: "https://www.youtube.com/playlist?list=PLwjBjMxdDDQWi1OqIXzpehIHXvsTo6fu9"
  },
  {
    id: 34,
    title: "Chapitre 5 : Noyaux, masse et énergie",
    description: "Relation entre masse et énergie, applications aux noyaux.",
    videoId: "PLwjBjMxdDDQXQUjneWiCd76iAa1D81uhY",
    youtubeLink: "https://www.youtube.com/playlist?list=PLwjBjMxdDDQXQUjneWiCd76iAa1D81uhY"
  },
  {
    id: 35,
    title: "Chapitre 6 : Dipôle RC",
    description: "Étude du dipôle RC et comportement en régime transitoire.",
    videoId: "PLwjBjMxdDDQXHy4UJ1DORxCDQVK0Pa0JP",
    youtubeLink: "https://www.youtube.com/playlist?list=PLwjBjMxdDDQXHy4UJ1DORxCDQVK0Pa0JP"
  },
  {
    id: 36,
    title: "Chapitre 7 : Dipôle RL",
    description: "Étude du dipôle RL et comportement en régime transitoire.",
    videoId: "PLwjBjMxdDDQUbN3O3p1-Yb9RQKsINJHXZ",
    youtubeLink: "https://www.youtube.com/playlist?list=PLwjBjMxdDDQUbN3O3p1-Yb9RQKsINJHXZ"
  },
  {
    id: 37,
    title: "Chapitre 8 : Oscillations libres RLC",
    description: "Oscillations libres d'un circuit RLC série.",
    videoId: "PLwjBjMxdDDQU_NKRCJIXffOUAE_ghXR8b",
    youtubeLink: "https://www.youtube.com/playlist?list=PLwjBjMxdDDQU_NKRCJIXffOUAE_ghXR8b"
  },
  {
    id: 38,
    title: "Chapitre 9 : RLC en régime forcé",
    description: "Circuit RLC série en régime sinusoïdal forcé.",
    videoId: "VIDEO_ID_38",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_38"
  }
];

const bac2ChimieS1Videos = [
  {
    id: 39,
    title: "Chapitre 1 : Transformations lentes et rapides",
    description: "Caractéristiques des transformations chimiques selon leur vitesse.",
    videoId: "VIDEO_ID_39",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_39"
  },
  {
    id: 40,
    title: "Chapitre 2 : Vitesse de réaction",
    description: "Suivi temporel d'une transformation chimique et vitesse de réaction.",
    videoId: "VIDEO_ID_40",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_40"
  },
  {
    id: 41,
    title: "Chapitre 3 : Transformations dans les deux sens",
    description: "Transformations chimiques s'effectuant dans les deux sens.",
    videoId: "VIDEO_ID_41",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_41"
  },
  {
    id: 42,
    title: "Chapitre 4 : État d'équilibre chimique",
    description: "État d'équilibre d'un système chimique.",
    videoId: "VIDEO_ID_42",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_42"
  },
  {
    id: 43,
    title: "Chapitre 5 : Réactions acide-base",
    description: "Transformations liées à des réactions acide-base.",
    videoId: "VIDEO_ID_43",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_43"
  },
  {
    id: 44,
    title: "Chapitre 6 : Dosage acido-basique",
    description: "Méthodes et applications des dosages acido-basiques.",
    videoId: "VIDEO_ID_44",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_44"
  }
];

// Données pour les vidéos - 2ème Bac Semestre 2
const bac2PhysiqueS2Videos = [
  {
    id: 45,
    title: "Chapitre 10 : Ondes électromagnétiques",
    description: "Nature, caractéristiques et propagation des ondes électromagnétiques.",
    videoId: "VIDEO_ID_45",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_45"
  },
  {
    id: 46,
    title: "Chapitre 11 : Modulation d'amplitude",
    description: "Principe et applications de la modulation d'amplitude.",
    videoId: "VIDEO_ID_46",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_46"
  },
  {
    id: 47,
    title: "Chapitre 12 : Lois de Newton",
    description: "Les trois lois de Newton et leurs applications.",
    videoId: "VIDEO_ID_47",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_47"
  },
  {
    id: 48,
    title: "Chapitre 13 : Chute libre verticale",
    description: "Étude de la chute libre verticale d'un solide.",
    videoId: "VIDEO_ID_48",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_48"
  },
  {
    id: 49,
    title: "Chapitre 14 : Mouvements plans",
    description: "Étude des mouvements plans - cinématique et dynamique.",
    videoId: "VIDEO_ID_49",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_49"
  },
  {
    id: 50,
    title: "Chapitre 15 : Satellites et planètes",
    description: "Mouvement des satellites et des planètes - lois de Kepler.",
    videoId: "VIDEO_ID_50",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_50"
  },
  {
    id: 51,
    title: "Chapitre 16 : Rotation d'un solide",
    description: "Mouvement de rotation d'un solide autour d'un axe fixe.",
    videoId: "VIDEO_ID_51",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_51"
  },
  {
    id: 52,
    title: "Chapitre 17 : Systèmes mécaniques oscillants",
    description: "Étude des systèmes mécaniques oscillants.",
    videoId: "VIDEO_ID_52",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_52"
  },
  {
    id: 53,
    title: "Chapitre 18 : Énergie des oscillations",
    description: "Aspects énergétiques des oscillations mécaniques.",
    videoId: "VIDEO_ID_53",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_53"
  },
  {
    id: 54,
    title: "Chapitre 19 : Atome et mécanique",
    description: "Atome et mécanique de Newton - limites du modèle classique.",
    videoId: "VIDEO_ID_54",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_54"
  }
];

const bac2ChimieS2Videos = [
  {
    id: 55,
    title: "Chapitre 7 : Évolution spontanée",
    description: "Évolution spontanée d'un système chimique.",
    videoId: "VIDEO_ID_55",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_55"
  },
  {
    id: 56,
    title: "Chapitre 8 : Piles électrochimiques",
    description: "Transformations spontanées dans les piles et production d'énergie.",
    videoId: "VIDEO_ID_56",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_56"
  },
  {
    id: 57,
    title: "Chapitre 9 : Électrolyse",
    description: "Transformations forcées par électrolyse.",
    videoId: "VIDEO_ID_57",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_57"
  },
  {
    id: 58,
    title: "Chapitre 10 : Estérification et hydrolyse",
    description: "Réactions d'estérification et d'hydrolyse.",
    videoId: "VIDEO_ID_58",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_58"
  },
  {
    id: 59,
    title: "Chapitre 11 : Contrôle de l'évolution chimique",
    description: "Méthodes de contrôle de l'évolution d'un système chimique.",
    videoId: "VIDEO_ID_59",
    youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_59"
  }
];

// Composant pour une carte de vidéo
const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <div className="video-thumbnail">
        <iframe 
          src={`https://www.youtube.com/embed/${video.videoId}`} 
          title={video.title}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-details">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-description">{video.description}</p>
        <div className="video-link">
          <a href={video.youtubeLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> Voir sur YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Videos() {
  // États pour la gestion des onglets
  const [activeNiveau, setActiveNiveau] = useState('niveau-tc');
  const [activeTCSemestre, setActiveTCSemestre] = useState('tc-semestre-1');
  const [activeBac1Semestre, setActiveBac1Semestre] = useState('bac1-semestre-1');
  const [activeBac2Semestre, setActiveBac2Semestre] = useState('bac2-semestre-1');
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  useEffect(() => {
    // Restaurer les préférences de l'utilisateur depuis le localStorage
    if (typeof window === 'undefined') return;

    const savedNiveau = localStorage.getItem('activeNiveau');
    if (savedNiveau) {
      setActiveNiveau(savedNiveau);
    }

    const savedTCSemestre = localStorage.getItem('activeTCSemestre');
    if (savedTCSemestre) {
      setActiveTCSemestre(savedTCSemestre);
    }

    const savedBac1Semestre = localStorage.getItem('activeBac1Semestre');
    if (savedBac1Semestre) {
      setActiveBac1Semestre(savedBac1Semestre);
    }

    const savedBac2Semestre = localStorage.getItem('activeBac2Semestre');
    if (savedBac2Semestre) {
      setActiveBac2Semestre(savedBac2Semestre);
    }

    // Animation des cartes de vidéo
    const videoCards = document.querySelectorAll('.video-card');
    
    if (videoCards.length > 0) {
      // Fonction pour vérifier si un élément est visible dans la fenêtre
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      
      // Fonction pour animer les cartes lorsqu'elles deviennent visibles
      function animateCardsOnScroll() {
        videoCards.forEach(card => {
          if (isElementInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        });
      }
      
      // Initialiser les styles des cartes
      videoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      
      // Lancer l'animation initiale
      setTimeout(animateCardsOnScroll, 300);
      
      // Ajouter l'écouteur d'événement de défilement pour l'animation
      window.addEventListener('scroll', animateCardsOnScroll);
      
      // Gérer le bouton "Retour en haut"
      function toggleBackToTopButton() {
        if (window.pageYOffset > 300) {
          setIsBackToTopVisible(true);
        } else {
          setIsBackToTopVisible(false);
        }
      }
      
      window.addEventListener('scroll', toggleBackToTopButton);
      
      // Nettoyage lors du démontage du composant
      return () => {
        window.removeEventListener('scroll', animateCardsOnScroll);
        window.removeEventListener('scroll', toggleBackToTopButton);
      };
    }
  }, []);

  // Fonction pour changer de niveau (TC, 1Bac, 2Bac)
  const changeNiveau = (niveau) => {
    setActiveNiveau(niveau);
    localStorage.setItem('activeNiveau', niveau);
    // Faire défiler l'écran vers la section active
    setTimeout(() => {
      const targetSection = document.getElementById(niveau);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }, 10);
  };

  // Fonction pour changer de semestre dans TC
  const changeTCSemestre = (semestre) => {
    setActiveTCSemestre(semestre);
    localStorage.setItem('activeTCSemestre', semestre);
  };

  // Fonction pour changer de semestre dans 1Bac
  const changeBac1Semestre = (semestre) => {
    setActiveBac1Semestre(semestre);
    localStorage.setItem('activeBac1Semestre', semestre);
  };

  // Fonction pour changer de semestre dans 2Bac
  const changeBac2Semestre = (semestre) => {
    setActiveBac2Semestre(semestre);
    localStorage.setItem('activeBac2Semestre', semestre);
  };

  // Fonction pour remonter en haut de page
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <MainLayout title="Vidéos Éducatives - Physique et Chimie">
      <Head>
        <meta name="description" content="Apprenez et révisez la physique et la chimie avec nos vidéos explicatives. Ressources éducatives pour tous les niveaux du lycée." />
        <meta name="keywords" content="vidéos, physique, chimie, maroc, lycée, ressources éducatives, youtube" />
        <meta property="og:title" content="Vidéos Éducatives - Physique et Chimie" />
        <meta property="og:description" content="Apprenez et révisez la physique et la chimie avec nos vidéos explicatives." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://physiquetous.com/Videos" />
        <link rel="canonical" href="https://physiquetous.com/Videos" />
        <link href="/css/harvard-style.css" rel="stylesheet" />
        <link href="/css/footer-social.css" rel="stylesheet" />
        <link href="/css/videos-styles.css" rel="stylesheet" />
        <link href="/css/breadcrumb.css" rel="stylesheet" />
      </Head>
      
      <main className="container">
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Vidéos' }
          ]}
        />
        
        <section className="intro">
          <h2>Notre Collection de Vidéos Éducatives</h2>
          <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <img 
              src="/images/videos-bannerT.svg" 
              alt="Vidéos éducatives de physique et chimie" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '8px', 
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)' 
              }} 
            />
          </div>
          <p>Bienvenue dans notre bibliothèque de vidéos éducatives de physique et chimie. Ces ressources sont conçues pour compléter votre apprentissage et vous aider à mieux comprendre les concepts fondamentaux du programme scolaire marocain.</p>

          <div className="channel-info">
            <h3>Notre chaîne YouTube</h3>
            <p>Abonnez-vous à notre chaîne pour ne manquer aucune nouvelle vidéo !</p>
            <a href="https://www.youtube.com/channel/UCHlP9BOjuViAH01MmsuF-YA" target="_blank" rel="noopener noreferrer" className="subscribe-button">
              <i className="fab fa-youtube"></i> S'abonner
            </a>
          </div>
        </section>

        <div className="semestre-switcher">
          <button 
            className={`semestre-btn ${activeNiveau === 'niveau-tc' ? 'active' : ''}`} 
            data-target="niveau-tc" 
            onClick={() => changeNiveau('niveau-tc')}
          >
            Tronc Commun
          </button>
          <button 
            className={`semestre-btn ${activeNiveau === 'niveau-1bac' ? 'active' : ''}`} 
            data-target="niveau-1bac" 
            onClick={() => changeNiveau('niveau-1bac')}
          >
            1ère Bac
          </button>
          <button 
            className={`semestre-btn ${activeNiveau === 'niveau-2bac' ? 'active' : ''}`} 
            data-target="niveau-2bac" 
            onClick={() => changeNiveau('niveau-2bac')}
          >
            2ème Bac
          </button>
        </div>

        {/* Tronc Commun Videos */}
        <section className={`semestre-section ${activeNiveau === 'niveau-tc' ? 'active' : ''}`} id="niveau-tc">
          <h2 className="category-title">Tronc Commun - Physique et Chimie</h2>
          
          <div className="semestre-switcher" style={{ marginTop: 0 }}>
            <button 
              className={`semestre-btn tc-semestre ${activeTCSemestre === 'tc-semestre-1' ? 'active' : ''}`} 
              data-target="tc-semestre-1" 
              onClick={() => changeTCSemestre('tc-semestre-1')}
            >
              Semestre 1
            </button>
            <button 
              className={`semestre-btn tc-semestre ${activeTCSemestre === 'tc-semestre-2' ? 'active' : ''}`} 
              data-target="tc-semestre-2" 
              onClick={() => changeTCSemestre('tc-semestre-2')}
            >
              Semestre 2
            </button>
          </div>
          
          {/* TC Semestre 1 */}
          <div className={`semestre-section ${activeTCSemestre === 'tc-semestre-1' ? 'active' : ''}`} id="tc-semestre-1">
            <h3 className="subject-title">Physique - Semestre 1</h3>
            
            <div className="video-container">
              {tcPhysiqueS1Videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
            
            <h3 className="subject-title">Chimie - Semestre 1</h3>
            
            <div className="video-container">
              {tcChimieS1Videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
          
          {/* TC Semestre 2 */}
          <div className={`semestre-section ${activeTCSemestre === 'tc-semestre-2' ? 'active' : ''}`} id="tc-semestre-2">
            <h3 className="subject-title">Physique - Semestre 2</h3>
            
            <div className="video-container">
              {tcPhysiqueS2Videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
            
            <h3 className="subject-title">Chimie - Semestre 2</h3>
            
            <div className="video-container">
              {tcChimieS2Videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>

        {/* 1ère Bac Videos */}
        <section className={`semestre-section ${activeNiveau === 'niveau-1bac' ? 'active' : ''}`} id="niveau-1bac">
          <h2 className="category-title">1ère Bac - Physique et Chimie</h2>
          
          <div className="semestre-switcher" style={{ marginTop: 0 }}>
            <button 
              className={`semestre-btn bac1-semestre ${activeBac1Semestre === 'bac1-semestre-1' ? 'active' : ''}`} 
              data-target="bac1-semestre-1" 
              onClick={() => changeBac1Semestre('bac1-semestre-1')}
            >
              Semestre 1
            </button>
            <button 
              className={`semestre-btn bac1-semestre ${activeBac1Semestre === 'bac1-semestre-2' ? 'active' : ''}`} 
              data-target="bac1-semestre-2" 
              onClick={() => changeBac1Semestre('bac1-semestre-2')}
            >
              Semestre 2
            </button>
          </div>
          
          {/* 1Bac Semestre 1 */}
          <div className={`semestre-section ${activeBac1Semestre === 'bac1-semestre-1' ? 'active' : ''}`} id="bac1-semestre-1">
            <h3 className="subject-title">1ère Bac - Physique (Semestre 1)</h3>
            
            <div className="video-container">
              {bac1PhysiqueS1Videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
            
            <h3 className="subject-title">Chimie - Semestre 1</h3>
            
            <div className="video-container">
              {bac1ChimieS1Videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
          
          {/* 1Bac Semestre 2 */}
          <div className={`semestre-section ${activeBac1Semestre === 'bac1-semestre-2' ? 'active' : ''}`} id="bac1-semestre-2">
            <h3 className="subject-title">Physique - Semestre 2</h3>
            
            <div className="video-container">
              {bac1PhysiqueS2Videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
            
            <h3 className="subject-title">Chimie - Semestre 2</h3>
            
            <div className="video-container">
              {bac1ChimieS2Videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>

        {/* 2ème Bac Videos */}
        <section className={`semestre-section ${activeNiveau === 'niveau-2bac' ? 'active' : ''}`} id="niveau-2bac">
          <h2 className="category-title">2ème Bac - Physique et Chimie</h2>
          
          <div className="semestre-switcher" style={{ marginTop: 0 }}>
            <button 
              className={`semestre-btn bac2-semestre ${activeBac2Semestre === 'bac2-semestre-1' ? 'active' : ''}`} 
              data-target="bac2-semestre-1" 
              onClick={() => changeBac2Semestre('bac2-semestre-1')}
            >
              Semestre 1
            </button>
            <button 
              className={`semestre-btn bac2-semestre ${activeBac2Semestre === 'bac2-semestre-2' ? 'active' : ''}`} 
              data-target="bac2-semestre-2" 
              onClick={() => changeBac2Semestre('bac2-semestre-2')}
            >
              Semestre 2
            </button>
          </div>
          
          {/* 2Bac Semestre 1 */}
          <div className={`semestre-section ${activeBac2Semestre === 'bac2-semestre-1' ? 'active' : ''}`} id="bac2-semestre-1">
            <h3 className="subject-title">Physique - Semestre 1</h3>
            
            <div className="video-container">
              {bac2PhysiqueS1Videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
            
            <h3 className="subject-title">Chimie - Semestre 1</h3>
            
            <div className="video-container">
              {bac2ChimieS1Videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
          
          {/* 2Bac Semestre 2 */}
          <div className={`semestre-section ${activeBac2Semestre === 'bac2-semestre-2' ? 'active' : ''}`} id="bac2-semestre-2">
            <h3 className="subject-title">Physique - Semestre 2</h3>
            
            <div className="video-container">
              {bac2PhysiqueS2Videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
            
            <h3 className="subject-title">Chimie - Semestre 2</h3>
            
            <div className="video-container">
              {bac2ChimieS2Videos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <a 
        href="#" 
        className={`back-to-top ${isBackToTopVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </a>

      <Script id="video-page-scripts" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Animation des cartes de vidéo
            const videoCards = document.querySelectorAll('.video-card');
            
            // Fonction pour vérifier si un élément est visible dans la fenêtre
            function isElementInViewport(el) {
              const rect = el.getBoundingClientRect();
              return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
              );
            }
            
            // Fonction pour animer les cartes lorsqu'elles deviennent visibles
            function animateCardsOnScroll() {
              videoCards.forEach(card => {
                if (isElementInViewport(card)) {
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
                }
              });
            }
            
            // Initialiser les styles des cartes
            videoCards.forEach(card => {
              card.style.opacity = '0';
              card.style.transform = 'translateY(20px)';
              card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            // Lancer l'animation initiale
            setTimeout(animateCardsOnScroll, 300);
            
            // Ajouter l'écouteur d'événement de défilement pour l'animation
            window.addEventListener('scroll', animateCardsOnScroll);
          });
        `,
      }}
      />
    </MainLayout>
  );
}