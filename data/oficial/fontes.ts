export interface FonteOficial {
  instituicao: string;
  publicacao: string;
  periodo: string;
  descricao: string;
}

export const fontesOficiais: Record<string, FonteOficial> = {
  icapp2024_2025: {
    instituicao: "Instituto Nacional de Estatística (INE)",
    publicacao:
      "Principais Resultados do Inquérito Contínuo Agro-Pecuário e Pescas (ICAPP)",
    periodo: "2024/2025",
    descricao:
      "Dados oficiais sobre agricultura, pecuária, pescas e apicultura.",
  },

  censo2024: {
    instituicao: "Instituto Nacional de Estatística (INE)",
    publicacao:
      "Resultados Definitivos do Recenseamento Geral da População e Habitação",
    periodo: "2024",
    descricao:
      "Dados oficiais da população e características demográficas das províncias de Angola.",
  },
};
