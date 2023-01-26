export const menuPrincipal = [
  {
    label: "HAPPYQUUS",
    directLink: false,
    link: "menuHQ",
  },
  {
    label: "EQUUSYMBIOSE",
    directLink: false,
    link: "menuEQS",
  },
  {
    label: "PARCOURS",
    directLink: true,
    link: "/parcours",
  },
];

export const menuHQ = [
  {
    label: "Les Vies de Figue",
    link: [
      {
        label: "Les Vies de Figue",
        link: "/figue",
      },
      {
        label: "Film et article de presse",
        link: "/figuemedias",
      },
    ],
  },
  {
    label: "Santé & Bien-être",
    link: [
      {
        label: "Analyse Biorésonance",
        link: "/bioresonance",
      },
      {
        label: "Soutien de santé & Prévention par les plantes",
        link: "/sante",
      },
    ],
  },
];

export const menuEQS = [
  {
    label: "Bodywork & Relaxation",
    link: [
      {
        label: "Bodywork musculo-squelettique",
        link: "/bodywork",
      },
      {
        label: "Libération Myofasciale & Cranio-Sacrale",
        link: "/liberation",
      },
      {
        label: "Décompression Cranienne",
        link: "/decompression",
      },
      {
        label: "Massage & Thermo",
        link: "/massage",
      },
    ],
  },
  {
    label: "Equilibrage & Kinésio",
    link: [
      {
        label: "Equilibrage par champs de fréquence",
        link: "/equilibrage",
      },
      {
        label: "AmpliVet®",
        link: "/electrotherapie",
      },
      {
        label: "Lecture du Vivant©",
        link: "/lecture",
      },
    ],
  },
  {
    label: "Thermographie Equine",
    link: [
      {
        label: "Outil de diagnostic",
        link: "/thermographieoutil",
      },
      {
        label: "Pathologies",
        link: "/thermographiepathologies",
      },
    ],
  },
];
