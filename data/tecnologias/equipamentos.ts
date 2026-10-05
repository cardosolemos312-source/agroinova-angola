export interface EquipamentoTecnologico {
  id: string;
  slug: string;
  nome: string;
  categoria: string;
  fabricante?: string;
  marca?: string;
  fornecedor: string;
  provinciaFornecedor?: string;
  descricao: string;
  problemaResolvido: string[];
  aplicacoes: string[];
  especificacoes: string[];
  imagens: {
    url: string;
    legenda: string;
    fonte: string;
  }[];
  urlFornecedor: string;
  urlFonte: string;
  fonte: string;
  verificadoEm: string;
}

export const equipamentosTecnologicos: EquipamentoTecnologico[] = [
  {
    id: "drone-agricola-epemar",
    slug: "drone-agricola-epemar",
    nome: "Drone agrícola",
    categoria: "Drones agrícolas",
    fornecedor: "EPEMAR Trading",
    provinciaFornecedor: "Luanda",
    descricao:
      "Drone agrícola apresentado pela EPEMAR Trading para aplicações de agricultura digital, incluindo monitorização, pulverização, mapeamento e gestão de áreas produtivas.",
    problemaResolvido: [
      "Necessidade de monitorizar grandes áreas agrícolas",
      "Dificuldade de identificar problemas nas culturas",
      "Necessidade de mapeamento de áreas produtivas",
      "Aplicação localizada de produtos agrícolas",
    ],
    aplicacoes: [
      "Mapeamento agrícola",
      "Monitorização das culturas",
      "Pulverização",
      "Identificação de pragas",
      "Gestão de áreas produtivas",
    ],
    especificacoes: [
      "Aplicações de agricultura digital",
      "Mapeamento de áreas",
      "Monitorização de culturas",
      "Pulverização agrícola",
      "Identificação de pragas",
    ],
    imagens: [
      {
        url: "https://epemartrading.ao/wp-content/uploads/2021/10/EPEMAR-DRONE-PULVERIZADOR.jpg",
        legenda: "Drone agrícola para pulverização",
        fonte: "EPEMAR Trading",
      },
    ],
    urlFornecedor: "https://www.epemartrading.ao/",
    urlFonte: "https://www.epemartrading.ao/loja",
    fonte: "EPEMAR Trading — catálogo oficial",
    verificadoEm: "2026-10-05",
  },

  {
    id: "trator-powertrac-90cv",
    slug: "trator-powertrac-90cv",
    nome: "Trator Powertrac 90 CV",
    categoria: "Mecanização agrícola",
    marca: "POWERTRAC",
    fornecedor: "TECNAGRI, LDA.",
    provinciaFornecedor: "Cuanza Norte",
    descricao:
      "Trator agrícola Powertrac apresentado pela TECNAGRI no seu material institucional. A empresa comercializa tratores e outras máquinas agrícolas em Angola.",
    problemaResolvido: [
      "Baixa mecanização agrícola",
      "Necessidade de preparação mecanizada do terreno",
      "Necessidade de transporte e operação de alfaias",
    ],
    aplicacoes: [
      "Preparação do solo",
      "Operações com alfaias",
      "Transporte agrícola",
      "Mecanização de explorações",
    ],
    especificacoes: [
      "Potência apresentada: 90 CV",
      "Marca: POWERTRAC",
      "Trator agrícola",
    ],
    imagens: [
      {
        url: "https://i0.wp.com/tecnagri.co.ao/wp-content/uploads/2025/02/Trator-Powertrac-90CV-V1.jpg?resize=1024%2C474",
        legenda: "Trator Powertrac 90 CV",
        fonte: "TECNAGRI",
      },
    ],
    urlFornecedor: "https://tecnagri.co.ao/",
    urlFonte: "https://tecnagri.co.ao/apresentacao/",
    fonte: "TECNAGRI — apresentação institucional",
    verificadoEm: "2026-10-05",
  },

  {
    id: "pivo-hidraulico-tl",
    slug: "pivo-hidraulico-tl",
    nome: "Pivô hidráulico T-L",
    categoria: "Irrigação",
    marca: "T-L Irrigation",
    fornecedor: "TECNAGRI, LDA.",
    provinciaFornecedor: "Cuanza Norte",
    descricao:
      "Sistema de irrigação por pivô hidráulico T-L apresentado pela TECNAGRI. A empresa informa que fornece e monta sistemas de irrigação e representa a T-L para Angola.",
    problemaResolvido: [
      "Falta de água para irrigação",
      "Necessidade de irrigar áreas agrícolas extensas",
      "Distribuição irregular da água",
    ],
    aplicacoes: [
      "Irrigação de culturas",
      "Irrigação de grandes áreas",
      "Sistemas de rega agrícola",
      "Projectos de irrigação",
    ],
    especificacoes: [
      "Sistema de irrigação por pivô",
      "Marca: T-L Irrigation",
      "Sistema hidráulico",
      "Fornecimento e montagem pela TECNAGRI",
    ],
    imagens: [
      {
        url: "https://i0.wp.com/tecnagri.co.ao/wp-content/uploads/2017/05/pivots-1080x500.jpg?resize=1080%2C500",
        legenda: "Pivô hidráulico T-L em operação",
        fonte: "TECNAGRI",
      },
    ],
    urlFornecedor: "https://tecnagri.co.ao/",
    urlFonte: "https://tecnagri.co.ao/apresentacao/",
    fonte: "TECNAGRI — apresentação e produtos",
    verificadoEm: "2026-10-05",
  },

  {
    id: "pivo-central-agrico-g4",
    slug: "pivo-central-agrico-g4",
    nome: "Pivô central Agrico G4",
    categoria: "Irrigação",
    fabricante: "Agrico",
    marca: "Agrico",
    fornecedor: "Agrico",
    provinciaFornecedor: "Angola — várias áreas",
    descricao:
      "Sistema de irrigação por pivô central Agrico G4. A Agrico apresenta o G4 como um sistema de quarta geração para irrigação agrícola, com recursos de controlo e aplicação de água.",
    problemaResolvido: [
      "Necessidade de irrigação de áreas extensas",
      "Gestão da aplicação de água",
      "Necessidade de automatização da irrigação",
      "Redução de mão de obra na operação do sistema",
    ],
    aplicacoes: [
      "Irrigação agrícola",
      "Aplicação uniforme de água",
      "Fertirrigação",
      "Automação de sistemas de irrigação",
      "Controlo remoto",
    ],
    especificacoes: [
      "Modelo: G4",
      "Pivô central de quarta geração",
      "Compatível com Agrico Web Control",
      "Compatível com LEPA",
      "Sistema concebido para condições africanas",
    ],
    imagens: [
      {
        url: "https://agri.ao/wp-content/uploads/2022/04/drawing-centre-pivot-1024x341.jpg",
        legenda: "Sistema de pivô central Agrico",
        fonte: "Agrico",
      },
    ],
    urlFornecedor: "https://agri.ao/",
    urlFonte: "https://agri.ao/pivo-central/",
    fonte: "Agrico — página oficial do pivô central",
    verificadoEm: "2026-10-05",
  },
];

export function obterEquipamentoPorSlug(
  slug: string
): EquipamentoTecnologico | undefined {
  return equipamentosTecnologicos.find(
    (equipamento) => equipamento.slug === slug
  );
}

export function obterEquipamentosPorCategoria(
  categoria: string
): EquipamentoTecnologico[] {
  return equipamentosTecnologicos.filter(
    (equipamento) => equipamento.categoria === categoria
  );
}