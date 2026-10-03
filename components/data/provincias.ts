export interface ProvinciaAgricola {
  nome: string;
  capital: string;
  descricao: string;

  producao: {
    estado: string;
    culturas: string[];
  };

  pecuaria: {
    estado: string;
    atividades: string[];
  };

  solos: {
    estado: string;
  };

  clima: {
    estado: string;
  };

  recursosHidricos: {
    estado: string;
  };

  investigacao: {
    estado: string;
  };

  tecnologias: {
    estado: string;
  };

  publicacoes: {
    estado: string;
  };
}

export const provincias: Record<string, ProvinciaAgricola> = {
  huambo: {
    nome: "Huambo",
    capital: "Huambo",

    descricao:
      "Província localizada na região central de Angola, com actividade agrícola e pecuária e potencial para investigação, inovação e desenvolvimento tecnológico no sector agropecuário.",

    producao: {
      estado: "Dados estatísticos em integração",
      culturas: [
        "Milho",
        "Feijão",
        "Batata",
        "Hortícolas",
      ],
    },

    pecuaria: {
      estado: "Dados estatísticos em integração",
      atividades: [
        "Criação de gado",
        "Avicultura",
        "Suinicultura",
        "Caprinicultura",
      ],
    },

    solos: {
      estado: "Informação técnica em integração",
    },

    clima: {
      estado: "Dados climáticos em integração",
    },

    recursosHidricos: {
      estado:
        "Informação sobre recursos hídricos em integração",
    },

    investigacao: {
      estado: "Projectos e estudos em integração",
    },

    tecnologias: {
      estado: "Informação tecnológica em integração",
    },

    publicacoes: {
      estado: "Publicações em integração",
    },
  },

  bie: {
    nome: "Bié",
    capital: "Kuito",

    descricao:
      "Província localizada no centro de Angola, com actividade agropecuária e potencial para desenvolvimento de soluções de inovação agrícola.",

    producao: {
      estado: "Dados estatísticos em integração",
      culturas: [],
    },

    pecuaria: {
      estado: "Dados estatísticos em integração",
      atividades: [],
    },

    solos: {
      estado: "Informação técnica em integração",
    },

    clima: {
      estado: "Dados climáticos em integração",
    },

    recursosHidricos: {
      estado:
        "Informação sobre recursos hídricos em integração",
    },

    investigacao: {
      estado: "Projectos e estudos em integração",
    },

    tecnologias: {
      estado: "Informação tecnológica em integração",
    },

    publicacoes: {
      estado: "Publicações em integração",
    },
  },
};