export interface DadoPesca {
  id: string;
  indicador: string;
  valor: number;
  unidade: string;
  ano: string;
  categoria: string;
  ambiente?: string;
  especie?: string;
  provincia?: string;
  fonte: string;
  instituicao: string;
  documento: string;
  referencia: string;
  urlFonte: string;
}

export interface FontePesca {
  id: string;
  instituicao: string;
  titulo: string;
  ano: string;
  tipo: string;
  descricao: string;
  url: string;
}

export const fontesPesca: FontePesca[] = [
  {
    id: "ine-icapp-2024-2025",
    instituicao: "Instituto Nacional de Estatística",
    titulo:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    ano: "2026",
    tipo: "Estatística oficial",
    descricao:
      "Publicação estatística sobre a estrutura e actividade agro-pecuária e piscatória em Angola.",
    url: "https://www.ine.gov.ao/",
  },
  {
    id: "minpermar-anuario-2022-2023",
    instituicao:
      "Ministério das Pescas e Recursos Marinhos / ODINE",
    titulo:
      "Anuário Estatístico das Pescas de Angola 2022–2023",
    ano: "2025",
    tipo: "Anuário estatístico",
    descricao:
      "Publicação estatística oficial sobre produção pesqueira e salineira.",
    url:
      "https://www.ine.gov.ao/publicacoes/detalhes/NDIzNzU%3D",
  },
];

export const dadosPesca: DadoPesca[] = [
  {
    id: "exploradores-piscatorios",
    indicador: "Exploradores da actividade piscatória",
    valor: 212469,
    unidade: "exploradores",
    ano: "2024/2025",
    categoria: "Actividade piscatória",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },

  {
    id: "producao-total",
    indicador: "Produção total de pescado",
    valor: 1148589,
    unidade: "toneladas",
    ano: "2024/2025",
    categoria: "Produção",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },

  {
    id: "producao-comercializada",
    indicador: "Produção comercializada",
    valor: 898822,
    unidade: "toneladas",
    ano: "2024/2025",
    categoria: "Comercialização",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },

  {
    id: "pescadores-continentais",
    indicador: "Pescadores em águas continentais",
    valor: 161894,
    unidade: "pescadores",
    ano: "2024/2025",
    categoria: "Pescadores",
    ambiente: "Águas continentais",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },

  {
    id: "producao-continental",
    indicador: "Produção em águas continentais",
    valor: 562590,
    unidade: "toneladas",
    ano: "2024/2025",
    categoria: "Produção",
    ambiente: "Águas continentais",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },

  {
    id: "pescadores-maritimos",
    indicador: "Pescadores em águas marítimas",
    valor: 57011,
    unidade: "pescadores",
    ano: "2024/2025",
    categoria: "Pescadores",
    ambiente: "Águas marítimas",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },

  {
    id: "producao-maritima",
    indicador: "Produção em águas marítimas",
    valor: 585999,
    unidade: "toneladas",
    ano: "2024/2025",
    categoria: "Produção",
    ambiente: "Águas marítimas",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },

  {
    id: "cacusso",
    indicador: "Produção de cacusso",
    valor: 281773,
    unidade: "toneladas",
    ano: "2024/2025",
    categoria: "Espécies",
    ambiente: "Águas continentais",
    especie: "Cacusso",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },

  {
    id: "bagre",
    indicador: "Produção de bagre",
    valor: 280817,
    unidade: "toneladas",
    ano: "2024/2025",
    categoria: "Espécies",
    ambiente: "Águas continentais",
    especie: "Bagre",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },

  {
    id: "sardinha",
    indicador: "Produção de sardinha",
    valor: 158571,
    unidade: "toneladas",
    ano: "2024/2025",
    categoria: "Espécies",
    ambiente: "Águas marítimas",
    especie: "Sardinha",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },

  {
    id: "cachucho",
    indicador: "Produção de cachucho",
    valor: 130870,
    unidade: "toneladas",
    ano: "2024/2025",
    categoria: "Espécies",
    ambiente: "Águas marítimas",
    especie: "Cachucho",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },

  {
    id: "carapau",
    indicador: "Produção de carapau",
    valor: 118086,
    unidade: "toneladas",
    ano: "2024/2025",
    categoria: "Espécies",
    ambiente: "Águas marítimas",
    especie: "Carapau",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },

  {
    id: "corvina",
    indicador: "Produção de corvina",
    valor: 98330,
    unidade: "toneladas",
    ano: "2024/2025",
    categoria: "Espécies",
    ambiente: "Águas marítimas",
    especie: "Corvina",
    fonte: "ICAPP 2024/2025",
    instituicao: "Instituto Nacional de Estatística",
    documento:
      "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    referencia:
      "Instituto Nacional de Estatística. (2026). Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025.",
    urlFonte: "https://www.ine.gov.ao/",
  },
];