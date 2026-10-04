export interface ProvinciaAngola {
  slug: string;
  nome: string;

  /**
   * Indica se os dados provinciais do ICAPP 2024/2025
   * podem ser associados directamente à actual DPA de 21 províncias.
   */
  dadosICAPP2024_2025: boolean;

  observacao?: string;
}

export const provinciasAngola: ProvinciaAngola[] = [

  {
    slug: "bengo",
    nome: "Bengo",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "benguela",
    nome: "Benguela",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "bie",
    nome: "Bié",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "cabinda",
    nome: "Cabinda",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "cuando",
    nome: "Cuando",
    dadosICAPP2024_2025: false,
    observacao:
      "O ICAPP 2024/2025 apresenta os dados na antiga província do Cuando Cubango.",
  },

  {
    slug: "cuanza-norte",
    nome: "Cuanza Norte",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "cuanza-sul",
    nome: "Cuanza Sul",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "cubango",
    nome: "Cubango",
    dadosICAPP2024_2025: false,
    observacao:
      "O ICAPP 2024/2025 apresenta os dados na antiga província do Cuando Cubango.",
  },

  {
    slug: "cunene",
    nome: "Cunene",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "huambo",
    nome: "Huambo",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "huila",
    nome: "Huíla",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "icolo-e-bengo",
    nome: "Icolo e Bengo",
    dadosICAPP2024_2025: false,
    observacao:
      "A DPA actual separou Icolo e Bengo da antiga configuração de Luanda.",
  },

  {
    slug: "luanda",
    nome: "Luanda",
    dadosICAPP2024_2025: false,
    observacao:
      "Os dados do ICAPP 2024/2025 correspondem à antiga configuração territorial de Luanda.",
  },

  {
    slug: "lunda-norte",
    nome: "Lunda Norte",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "lunda-sul",
    nome: "Lunda Sul",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "malanje",
    nome: "Malanje",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "moxico",
    nome: "Moxico",
    dadosICAPP2024_2025: false,
    observacao:
      "O ICAPP 2024/2025 apresenta os dados na antiga província do Moxico.",
  },

  {
    slug: "moxico-leste",
    nome: "Moxico Leste",
    dadosICAPP2024_2025: false,
    observacao:
      "O ICAPP 2024/2025 apresenta os dados na antiga província do Moxico.",
  },

  {
    slug: "namibe",
    nome: "Namibe",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "uige",
    nome: "Uíge",
    dadosICAPP2024_2025: true,
  },

  {
    slug: "zaire",
    nome: "Zaire",
    dadosICAPP2024_2025: true,
  },
];