// data/tecnologias/dados.ts

export type TipoTecnologia =
  | "Inteligência Artificial"
  | "Agricultura de precisão"
  | "Drones agrícolas"
  | "Irrigação"
  | "Energia solar"
  | "Tecnologia do solo"
  | "Tecnologia climática"
  | "Mecanização agrícola"
  | "Tecnologia pecuária"
  | "Tecnologia pesqueira e aquícola"
  | "Agroindústria"
  | "Armazenamento"
  | "Sensores e IoT"
  | "Serviços tecnológicos";

export type TipoFornecedor =
  | "Fornecedor"
  | "Fabricante"
  | "Fabricante e fornecedor"
  | "Prestador de serviços"
  | "Fornecedor e prestador de serviços"
  | "Comércio e distribuição";

export interface Tecnologia {
  id: string;

  nome: string;
  categoria: TipoTecnologia;

  descricao: string;

  problemaResolvido: string[];

  aplicacoes: string[];

  equipamentos?: string[];

  marcas?: string[];

  fornecedor: string;
  tipoFornecedor: TipoFornecedor;

  provincia: string;
  municipio?: string;

  cobertura: string;

  telefone?: string;
  email?: string;
  website?: string;

  fonte: string;
  urlFonte: string;

  verificacao: string;
  dataVerificacao: string;
}

export interface FornecedorTecnologia {
  id: string;

  nome: string;

  tipo: TipoFornecedor;

  descricao: string;

  provincia: string;
  municipio?: string;
  cobertura?: string;

  categorias: TipoTecnologia[];

  servicos: string[];

  equipamentos: string[];

  marcas: string[];

  telefone?: string;
  email?: string;
  website?: string;

  fonte: string;
  urlFonte: string;

  verificacao: string;
  dataVerificacao: string;
}

/*
|--------------------------------------------------------------------------
| FORNECEDORES REAIS
|--------------------------------------------------------------------------
*/

export const fornecedoresTecnologia: FornecedorTecnologia[] = [
  {
    id: "tecnagri",

    nome: "TECNAGRI, LDA.",

    tipo: "Fornecedor e prestador de serviços",

    descricao:
      "Empresa de direito angolano fundada em 2009, com sede e instalações em N'Dalatando, Cuanza Norte. Atua em irrigação, máquinas agrícolas, equipamentos, obras agrícolas, barragens, sistemas de bombagem, topografia, peças e assistência.",

    provincia: "Cuanza Norte",
    municipio: "N'Dalatando",

    cobertura: "Angola",

    categorias: [
      "Irrigação",
      "Mecanização agrícola",
      "Serviços tecnológicos",
      "Tecnologia do solo",
    ],

    servicos: [
      "Estudos e projetos de irrigação",
      "Implementação de sistemas de irrigação",
      "Fornecimento e montagem de pivôs hidráulicos",
      "Sistemas de bombagem e condutas",
      "Desmatação de terrenos agrícolas",
      "Derruba e limpeza de terrenos",
      "Construção de barragens agrícolas",
      "Reabilitação de canais de rega",
      "Serviços de topografia",
      "Venda de peças e acessórios",
      "Assistência e manutenção de máquinas e equipamentos agrícolas",
    ],

    equipamentos: [
      "Pivôs hidráulicos",
      "Tratores agrícolas",
      "Ceifeiras debulhadoras",
      "Destroçadoras",
      "Trituradoras",
      "Semeadores",
      "Pulverizadores",
      "Alfaias agrícolas",
      "Bombas e sistemas de bombagem",
      "Condutas",
      "Peças para máquinas agrícolas",
    ],

    marcas: [
      "T-L Irrigation System",
      "POWERTRAC",
      "JOPER",
      "MASCHIO GASPARDO",
      "SERRAT",
      "TOMIX",
      "ISUZU",
    ],

    telefone: "+244 945 945 268",
    email: "geral@tecnagri.co.ao",

    website: "https://tecnagri.co.ao/",

    fonte: "Website oficial da TECNAGRI",

    urlFonte: "https://tecnagri.co.ao/apresentacao/",

    verificacao:
      "Informação confirmada no website oficial da TECNAGRI.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "epemar-trading",

    nome: "EPEMAR Trading",

    tipo: "Comércio e distribuição",

    descricao:
      "Firma de direito angolano fundada em 2020, sediada em Luanda, especializada na comercialização de equipamentos e produtos para agricultura, incluindo mecanização, equipamentos agrícolas, drones, armazenamento e consultoria agrícola.",

    provincia: "Luanda",
    municipio: "Ingombota",

    cobertura: "Angola",

    categorias: [
      "Mecanização agrícola",
      "Drones agrícolas",
      "Armazenamento",
      "Agroindústria",
      "Serviços tecnológicos",
    ],

    servicos: [
      "Comercialização de equipamentos agrícolas",
      "Fornecimento de tratores e alfaias",
      "Fornecimento de equipamentos agrícolas",
      "Fornecimento de drones agrícolas",
      "Soluções de armazenagem",
      "Construção de silos",
      "Câmaras frigoríficas",
      "Consultoria agrícola",
      "Fornecimento de fertilizantes",
      "Fornecimento de sementes e insumos",
    ],

    equipamentos: [
      "Tratores",
      "Alfaias",
      "Semeadoras",
      "Colhedoras",
      "Debulhadoras",
      "Drones agrícolas",
      "Silos",
      "Equipamentos de armazenagem",
      "Câmaras frigoríficas",
    ],

    marcas: [],

    telefone: "+244 943 919 909",
    email: "geral@epemartrading.ao",

    website: "https://www.epemartrading.ao/",

    fonte: "Website oficial da EPEMAR Trading",

    urlFonte: "https://www.epemartrading.ao/loja",

    verificacao:
      "Informação confirmada no website oficial da EPEMAR Trading.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "corposol",

    nome: "CORPOSOL LDA",

    tipo: "Fornecedor e prestador de serviços",

    descricao:
      "Empresa com atuação no agronegócio, disponibilizando soluções relacionadas com irrigação, solo, controlo de pragas e doenças, máquinas e equipamentos agrícolas.",

    provincia: "Luanda",

    cobertura: "Angola",

    categorias: [
      "Irrigação",
      "Tecnologia do solo",
      "Mecanização agrícola",
      "Serviços tecnológicos",
    ],

    servicos: [
      "Gestão de projetos",
      "Transferência de competências",
      "Formação",
      "Conceção de sistemas de irrigação",
      "Implementação de sistemas de irrigação",
      "Análise do solo",
      "Melhoria do solo",
      "Controlo de pragas e doenças",
      "Comércio e aquisição de mercadorias",
      "Fornecimento de máquinas agrícolas",
      "Fornecimento de equipamentos agrícolas",
    ],

    equipamentos: [
      "Sistemas de irrigação",
      "Máquinas agrícolas",
      "Equipamentos agrícolas",
    ],

    marcas: [],

    telefone: "+244 926 955 459",
    email: "geral@corposollda.com",

    website: "https://corposollda.com/",

    fonte: "Website oficial da CORPOSOL LDA",

    urlFonte: "https://corposollda.com/agro-negocio/",

    verificacao:
      "Informação confirmada no website oficial da CORPOSOL LDA.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "luamir-trading",

    nome: "LUAMIR TRADING",

    tipo: "Fornecedor e prestador de serviços",

    descricao:
      "Empresa sediada em Luanda que atua no fornecimento de máquinas e equipamentos, incluindo equipamentos agrícolas, através das suas atividades de trading e fornecimento.",

    provincia: "Luanda",
    municipio: "Maianga",

    cobertura: "Angola",

    categorias: [
      "Mecanização agrícola",
      "Serviços tecnológicos",
    ],

    servicos: [
      "Fornecimento de máquinas",
      "Fornecimento de equipamentos",
      "Trading",
      "Importação e exportação",
      "Coordenação de importação de equipamentos",
    ],

    equipamentos: [
      "Máquinas agrícolas",
      "Equipamentos agrícolas",
      "Ferramentas industriais",
      "Equipamentos industriais",
    ],

    marcas: [],

    telefone: "+244 926 012 315 / +244 958 355 657",
    email: "luamir@luamirtrading.com",

    website: "https://luamirtrading.com/",

    fonte: "Website oficial da LUAMIR TRADING",

    urlFonte:
      "https://luamirtrading.com/services/fornecimento-de-maquinas-e-equipamentos/",

    verificacao:
      "Informação confirmada no website oficial da LUAMIR TRADING.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "agrico-angola",

    nome: "Agrico",

    tipo: "Fabricante e fornecedor",

    descricao:
      "Fornecedor e fabricante de sistemas de irrigação, componentes, máquinas e implementos agrícolas com atuação em várias áreas de Angola.",

    provincia: "Angola",

    cobertura: "Várias áreas em Angola",

    categorias: [
      "Irrigação",
      "Mecanização agrícola",
      "Serviços tecnológicos",
    ],

    servicos: [
      "Projetos de irrigação",
      "Fornecimento de sistemas de irrigação",
      "Instalação de sistemas de irrigação",
      "Manutenção de sistemas de irrigação",
      "Reparação de bombas",
      "Reparação de pivôs centrais",
      "Manutenção de gotejadores",
      "Manutenção de microssistemas",
      "Fornecimento de peças de irrigação",
      "Suporte pós-venda",
    ],

    equipamentos: [
      "Pivôs centrais",
      "Sistemas de irrigação",
      "Bombas",
      "Motores",
      "Tubos",
      "Filtros",
      "Conexões",
      "Microjatos",
      "Válvulas elétricas",
      "Componentes de irrigação",
      "Máquinas agrícolas",
      "Implementos agrícolas",
    ],

    marcas: [
      "Azud",
      "KSB",
      "DAB",
      "Nelson",
      "Netafim",
      "Agriplas",
      "Wilo",
      "Franklin Motors",
    ],

    telefone: "+244 929 890 068",
    email: "info@agri.ao",

    website: "https://agri.ao/",

    fonte: "Website oficial da Agrico / Agri.ao",

    urlFonte: "https://agri.ao/implementacao/",

    verificacao:
      "Informação confirmada no website oficial da Agrico, que declara atuação em várias áreas de Angola.",

    dataVerificacao: "2026-10-05",
  },
];

/*
|--------------------------------------------------------------------------
| TECNOLOGIAS E SOLUÇÕES
|--------------------------------------------------------------------------
*/

export const tecnologias: Tecnologia[] = [
  {
    id: "irrigacao-pivot-tecnagri",

    nome: "Pivôs hidráulicos de irrigação",

    categoria: "Irrigação",

    descricao:
      "Sistema de irrigação por pivô hidráulico utilizado para fornecer água às culturas de forma mecanizada.",

    problemaResolvido: [
      "Necessidade de irrigação de áreas agrícolas",
      "Gestão da distribuição de água",
      "Redução da dependência exclusiva da chuva",
    ],

    aplicacoes: [
      "Produção agrícola em áreas irrigadas",
      "Culturas de campo",
      "Explorações agrícolas de maior dimensão",
    ],

    equipamentos: [
      "Pivô hidráulico",
      "Sistema de bombagem",
      "Condutas",
    ],

    marcas: ["T-L Irrigation System"],

    fornecedor: "TECNAGRI, LDA.",

    tipoFornecedor: "Fornecedor e prestador de serviços",

    provincia: "Cuanza Norte",
    municipio: "N'Dalatando",

    cobertura: "Angola",

    telefone: "+244 945 945 268",
    email: "geral@tecnagri.co.ao",

    website: "https://tecnagri.co.ao/",

    fonte: "TECNAGRI — Apresentação e serviços",

    urlFonte: "https://tecnagri.co.ao/apresentacao/",

    verificacao:
      "Tecnologia e fornecedor identificados em fonte oficial.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "irrigacao-agrico",

    nome: "Irrigação por pivô central",

    categoria: "Irrigação",

    descricao:
      "Sistema de irrigação por pivô central destinado à distribuição mecanizada de água em áreas agrícolas.",

    problemaResolvido: [
      "Irrigação de áreas agrícolas",
      "Gestão da aplicação de água",
      "Necessidade de maior controlo da irrigação",
    ],

    aplicacoes: [
      "Fruticultura",
      "Hortícolas",
      "Agricultura comercial",
      "Explorações agrícolas irrigadas",
    ],

    equipamentos: [
      "Pivô central",
      "Bombas",
      "Motores",
      "Tubagens",
      "Sistema de controlo",
    ],

    marcas: [],

    fornecedor: "Agrico",

    tipoFornecedor: "Fabricante e fornecedor",

    provincia: "Angola",

    cobertura: "Várias áreas em Angola",

    telefone: "+244 929 890 068",
    email: "info@agri.ao",

    website: "https://agri.ao/",

    fonte: "Agrico — Soluções de irrigação",

    urlFonte: "https://agri.ao/solucoes-irrigacao/",

    verificacao:
      "Atuação em Angola declarada no website oficial da Agrico.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "bombagem-condutas-tecnagri",

    nome: "Sistemas de bombagem e condutas",

    categoria: "Irrigação",

    descricao:
      "Sistemas destinados à captação, bombagem e condução de água para utilização agrícola.",

    problemaResolvido: [
      "Transporte de água para áreas agrícolas",
      "Abastecimento de sistemas de irrigação",
      "Gestão de água para produção agrícola",
    ],

    aplicacoes: [
      "Irrigação",
      "Abastecimento de explorações agrícolas",
      "Sistemas agrícolas com necessidade de bombagem",
    ],

    equipamentos: [
      "Bombas",
      "Condutas",
      "Sistemas de bombagem",
    ],

    marcas: [],

    fornecedor: "TECNAGRI, LDA.",

    tipoFornecedor: "Fornecedor e prestador de serviços",

    provincia: "Cuanza Norte",
    municipio: "N'Dalatando",

    cobertura: "Angola",

    telefone: "+244 945 945 268",
    email: "geral@tecnagri.co.ao",

    website: "https://tecnagri.co.ao/",

    fonte: "TECNAGRI — Serviços",

    urlFonte: "https://tecnagri.co.ao/servicos/",

    verificacao:
      "Serviço identificado em fonte oficial da empresa.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "drones-agricolas-epemar",

    nome: "Drones agrícolas",

    categoria: "Drones agrícolas",

    descricao:
      "Drones destinados a aplicações de agricultura digital, incluindo monitorização, pulverização, mapeamento e identificação de pragas.",

    problemaResolvido: [
      "Monitorização de áreas agrícolas",
      "Mapeamento de explorações",
      "Identificação de problemas nas culturas",
      "Aplicações agrícolas com drones",
    ],

    aplicacoes: [
      "Agricultura digital",
      "Monitorização de culturas",
      "Mapeamento",
      "Pulverização",
      "Identificação de pragas",
    ],

    equipamentos: [
      "Drone agrícola",
    ],

    marcas: [],

    fornecedor: "EPEMAR Trading",

    tipoFornecedor: "Comércio e distribuição",

    provincia: "Luanda",
    municipio: "Ingombota",

    cobertura: "Angola",

    telefone: "+244 943 919 909",
    email: "geral@epemartrading.ao",

    website: "https://www.epemartrading.ao/",

    fonte: "EPEMAR Trading — Loja",

    urlFonte: "https://www.epemartrading.ao/loja",

    verificacao:
      "Categoria de drone agrícola publicada no catálogo oficial da empresa.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "armazenagem-silos-epemar",

    nome: "Silos e sistemas de armazenagem",

    categoria: "Armazenamento",

    descricao:
      "Soluções destinadas à conservação e armazenamento de produtos agrícolas, incluindo construção, recuperação e manutenção de sistemas de armazenagem.",

    problemaResolvido: [
      "Perdas pós-colheita",
      "Necessidade de conservação de grãos",
      "Armazenamento de produtos agrícolas",
    ],

    aplicacoes: [
      "Armazenamento de grãos",
      "Unidades agrícolas",
      "Unidades agro-industriais",
    ],

    equipamentos: [
      "Silos",
      "Equipamentos de armazenagem",
    ],

    marcas: [],

    fornecedor: "EPEMAR Trading",

    tipoFornecedor: "Comércio e distribuição",

    provincia: "Luanda",
    municipio: "Ingombota",

    cobertura: "Angola",

    telefone: "+244 943 919 909",
    email: "geral@epemartrading.ao",

    website: "https://www.epemartrading.ao/",

    fonte: "EPEMAR Trading — Loja",

    urlFonte: "https://www.epemartrading.ao/loja",

    verificacao:
      "Soluções de silos e armazenagem publicadas pela empresa.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "analise-solo-corposol",

    nome: "Análise e melhoria do solo",

    categoria: "Tecnologia do solo",

    descricao:
      "Serviços técnicos relacionados com análise e melhoria do solo para apoiar decisões agrícolas.",

    problemaResolvido: [
      "Problemas de fertilidade do solo",
      "Necessidade de caracterização do solo",
      "Gestão da fertilidade agrícola",
    ],

    aplicacoes: [
      "Planeamento agrícola",
      "Gestão do solo",
      "Melhoria da produção",
    ],

    equipamentos: [
      "Equipamentos de análise de solo",
    ],

    marcas: [],

    fornecedor: "CORPOSOL LDA",

    tipoFornecedor: "Fornecedor e prestador de serviços",

    provincia: "Luanda",

    cobertura: "Angola",

    telefone: "+244 926 955 459",
    email: "geral@corposollda.com",

    website: "https://corposollda.com/",

    fonte: "CORPOSOL — Agro-negócio",

    urlFonte: "https://corposollda.com/agro-negocio/",

    verificacao:
      "Serviço de análise e melhoria do solo publicado pela empresa.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "controle-pragas-corposol",

    nome: "Controlo de pragas e doenças",

    categoria: "Serviços tecnológicos",

    descricao:
      "Serviço técnico relacionado com a identificação e controlo de pragas e doenças agrícolas.",

    problemaResolvido: [
      "Ataques de pragas",
      "Doenças agrícolas",
      "Problemas fitossanitários",
    ],

    aplicacoes: [
      "Produção vegetal",
      "Gestão fitossanitária",
      "Proteção das culturas",
    ],

    equipamentos: [],

    marcas: [],

    fornecedor: "CORPOSOL LDA",

    tipoFornecedor: "Fornecedor e prestador de serviços",

    provincia: "Luanda",

    cobertura: "Angola",

    telefone: "+244 926 955 459",
    email: "geral@corposollda.com",

    website: "https://corposollda.com/",

    fonte: "CORPOSOL — Agro-negócio",

    urlFonte: "https://corposollda.com/agro-negocio/",

    verificacao:
      "Serviço publicado no website oficial da empresa.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "tratores-powertrac",

    nome: "Tratores agrícolas",

    categoria: "Mecanização agrícola",

    descricao:
      "Tratores destinados à mecanização de operações agrícolas.",

    problemaResolvido: [
      "Baixa capacidade de mecanização",
      "Necessidade de preparação mecanizada do terreno",
      "Operações agrícolas de maior escala",
    ],

    aplicacoes: [
      "Preparação do solo",
      "Transporte agrícola",
      "Operações com alfaias",
      "Mecanização de explorações",
    ],

    equipamentos: [
      "Tratores agrícolas",
    ],

    marcas: ["POWERTRAC"],

    fornecedor: "TECNAGRI, LDA.",

    tipoFornecedor: "Fornecedor e prestador de serviços",

    provincia: "Cuanza Norte",
    municipio: "N'Dalatando",

    cobertura: "Angola",

    telefone: "+244 945 945 268",
    email: "geral@tecnagri.co.ao",

    website: "https://tecnagri.co.ao/",

    fonte: "TECNAGRI — Produtos",

    urlFonte: "https://tecnagri.co.ao/produtos/",

    verificacao:
      "Tratores Powertrac identificados no catálogo oficial da TECNAGRI.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "implementos-agricolas-tecnagri",

    nome: "Alfaias e implementos agrícolas",

    categoria: "Mecanização agrícola",

    descricao:
      "Implementos destinados a diferentes operações de mecanização agrícola.",

    problemaResolvido: [
      "Necessidade de mecanização",
      "Preparação do solo",
      "Operações de cultivo",
      "Pulverização e semeadura",
    ],

    aplicacoes: [
      "Preparo do solo",
      "Semeadura",
      "Pulverização",
      "Operações de cultivo",
    ],

    equipamentos: [
      "Alfaias agrícolas",
      "Semeadores",
      "Pulverizadores",
      "Destroçadoras",
      "Trituradoras",
    ],

    marcas: [
      "JOPER",
      "MASCHIO GASPARDO",
      "SERRAT",
    ],

    fornecedor: "TECNAGRI, LDA.",

    tipoFornecedor: "Fornecedor e prestador de serviços",

    provincia: "Cuanza Norte",
    municipio: "N'Dalatando",

    cobertura: "Angola",

    telefone: "+244 945 945 268",
    email: "geral@tecnagri.co.ao",

    website: "https://tecnagri.co.ao/",

    fonte: "TECNAGRI — Apresentação",

    urlFonte: "https://tecnagri.co.ao/apresentacao/",

    verificacao:
      "Equipamentos e marcas identificados no website oficial.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "maquinas-agricolas-epemar",

    nome: "Máquinas para mecanização agrícola",

    categoria: "Mecanização agrícola",

    descricao:
      "Linha de equipamentos para mecanização agrícola disponibilizada pela EPEMAR Trading.",

    problemaResolvido: [
      "Baixa mecanização",
      "Necessidade de aumentar a capacidade operacional",
      "Operações agrícolas mecanizadas",
    ],

    aplicacoes: [
      "Preparação",
      "Cultivo",
      "Colheita",
      "Debulha",
      "Transporte",
    ],

    equipamentos: [
      "Tratores",
      "Alfaias",
      "Semeadoras",
      "Colhedoras",
      "Debulhadoras",
    ],

    marcas: [],

    fornecedor: "EPEMAR Trading",

    tipoFornecedor: "Comércio e distribuição",

    provincia: "Luanda",
    municipio: "Ingombota",

    cobertura: "Angola",

    telefone: "+244 943 919 909",
    email: "geral@epemartrading.ao",

    website: "https://www.epemartrading.ao/",

    fonte: "EPEMAR Trading — Loja",

    urlFonte: "https://www.epemartrading.ao/loja",

    verificacao:
      "Equipamentos identificados no catálogo oficial da EPEMAR.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "fornecimento-maquinas-luamir",

    nome: "Fornecimento de máquinas e equipamentos agrícolas",

    categoria: "Mecanização agrícola",

    descricao:
      "Serviço de fornecimento de máquinas e equipamentos, incluindo equipamentos agrícolas, através de operações de trading e fornecimento.",

    problemaResolvido: [
      "Dificuldade de aquisição de máquinas",
      "Necessidade de equipamentos agrícolas",
      "Necessidade de fornecimento especializado",
    ],

    aplicacoes: [
      "Agricultura",
      "Mecanização",
      "Operações agrícolas",
    ],

    equipamentos: [
      "Máquinas agrícolas",
      "Equipamentos agrícolas",
      "Ferramentas",
    ],

    marcas: [],

    fornecedor: "LUAMIR TRADING",

    tipoFornecedor: "Fornecedor e prestador de serviços",

    provincia: "Luanda",
    municipio: "Maianga",

    cobertura: "Angola",

    telefone: "+244 926 012 315 / +244 958 355 657",
    email: "luamir@luamirtrading.com",

    website: "https://luamirtrading.com/",

    fonte:
      "LUAMIR TRADING — Fornecimento de máquinas e equipamentos",

    urlFonte:
      "https://luamirtrading.com/services/fornecimento-de-maquinas-e-equipamentos/",

    verificacao:
      "Serviço de fornecimento de equipamentos agrícolas publicado no website oficial.",

    dataVerificacao: "2026-10-05",
  },

  {
    id: "irrigacao-controlo-remoto-agrico",

    nome: "Irrigação com controlo e monitorização remota",

    categoria: "Irrigação",

    descricao:
      "Tecnologia de irrigação com controlo remoto e monitorização para apoiar uma gestão mais precisa da água.",

    problemaResolvido: [
      "Gestão da irrigação",
      "Controlo da aplicação de água",
      "Necessidade de monitorização remota",
    ],

    aplicacoes: [
      "Agricultura irrigada",
      "Explorações comerciais",
      "Gestão de sistemas de irrigação",
    ],

    equipamentos: [
      "Pivôs centrais",
      "Sistemas de controlo",
      "Equipamentos de irrigação",
    ],

    marcas: [],

    fornecedor: "Agrico",

    tipoFornecedor: "Fabricante e fornecedor",

    provincia: "Angola",

    cobertura: "Várias áreas em Angola",

    telefone: "+244 929 890 068",
    email: "info@agri.ao",

    website: "https://agri.ao/",

    fonte: "Agrico — Soluções de irrigação",

    urlFonte: "https://agri.ao/solucoes-irrigacao/",

    verificacao:
      "Tecnologia de controlo remoto de irrigação publicada pela Agrico.",

    dataVerificacao: "2026-10-05",
  },
];

/*
|--------------------------------------------------------------------------
| PROBLEMAS AGRÍCOLAS
|--------------------------------------------------------------------------
*/

export interface ProblemaTecnologico {
  id: string;

  problema: string;

  descricao: string;

  atividades: string[];

  culturas: string[];

  tecnologiasRelacionadas: string[];

  observacao: string;
}

export const problemasTecnologicos: ProblemaTecnologico[] = [
  {
    id: "falta-agua",

    problema: "Falta de água para irrigação",

    descricao:
      "Situações em que a exploração agrícola necessita de uma solução tecnológica para captação, bombagem, transporte ou distribuição de água.",

    atividades: ["Agricultura", "Irrigação"],

    culturas: [
      "Milho",
      "Feijão",
      "Hortícolas",
      "Fruticultura",
      "Arroz",
    ],

    tecnologiasRelacionadas: [
      "irrigacao-pivot-tecnagri",
      "irrigacao-agrico",
      "bombagem-condutas-tecnagri",
      "irrigacao-controlo-remoto-agrico",
    ],

    observacao:
      "A solução adequada depende da fonte de água, área, cultura, topografia, disponibilidade energética e características da exploração.",
  },

  {
    id: "baixa-mecanizacao",

    problema: "Baixa mecanização agrícola",

    descricao:
      "Dificuldade em realizar operações agrícolas devido à insuficiência de máquinas, tratores ou implementos.",

    atividades: ["Agricultura", "Mecanização agrícola"],

    culturas: [
      "Milho",
      "Soja",
      "Arroz",
      "Feijão",
      "Cereais",
      "Hortícolas",
    ],

    tecnologiasRelacionadas: [
      "tratores-powertrac",
      "implementos-agricolas-tecnagri",
      "maquinas-agricolas-epemar",
      "fornecimento-maquinas-luamir",
    ],

    observacao:
      "A escolha da máquina deve considerar área cultivada, tipo de solo, operação agrícola, potência necessária, disponibilidade de peças e assistência técnica.",
  },

  {
    id: "problemas-solo",

    problema: "Problemas relacionados com o solo",

    descricao:
      "Situações de baixa fertilidade ou necessidade de caracterização técnica do solo antes da tomada de decisões agrícolas.",

    atividades: ["Agricultura", "Tecnologia do solo"],

    culturas: [
      "Milho",
      "Mandioca",
      "Feijão",
      "Soja",
      "Hortícolas",
      "Fruticultura",
    ],

    tecnologiasRelacionadas: [
      "analise-solo-corposol",
    ],

    observacao:
      "A recomendação de correção ou fertilização deve ser baseada em análise adequada do solo e nas necessidades da cultura.",
  },

  {
    id: "pragas-doencas",

    problema: "Pragas e doenças agrícolas",

    descricao:
      "Presença ou suspeita de organismos ou doenças que podem comprometer o desenvolvimento das culturas.",

    atividades: ["Agricultura"],

    culturas: [
      "Milho",
      "Mandioca",
      "Feijão",
      "Soja",
      "Hortícolas",
      "Fruticultura",
    ],

    tecnologiasRelacionadas: [
      "controle-pragas-corposol",
      "drones-agricolas-epemar",
    ],

    observacao:
      "A identificação correta do problema deve preceder qualquer aplicação de produto fitossanitário.",
  },

  {
    id: "perdas-pos-colheita",

    problema: "Perdas pós-colheita e armazenamento",

    descricao:
      "Problemas relacionados com conservação, armazenamento e proteção da produção depois da colheita.",

    atividades: [
      "Agricultura",
      "Agroindústria",
      "Armazenamento",
    ],

    culturas: [
      "Milho",
      "Arroz",
      "Feijão",
      "Soja",
      "Cereais",
    ],

    tecnologiasRelacionadas: [
      "armazenagem-silos-epemar",
    ],

    observacao:
      "As condições de armazenamento devem ser definidas de acordo com o produto, humidade, temperatura, ventilação e capacidade da instalação.",
  },

  {
    id: "monitorizacao-campo",

    problema: "Necessidade de monitorização das culturas",

    descricao:
      "Necessidade de acompanhar grandes áreas agrícolas e identificar problemas de forma mais rápida.",

    atividades: [
      "Agricultura",
      "Agricultura de precisão",
    ],

    culturas: [
      "Milho",
      "Soja",
      "Arroz",
      "Feijão",
      "Hortícolas",
      "Fruticultura",
    ],

    tecnologiasRelacionadas: [
      "drones-agricolas-epemar",
    ],

    observacao:
      "A utilização de drones deve ser integrada com observações de campo e, quando necessário, análise técnica especializada.",
  },
];

/*
|--------------------------------------------------------------------------
| FUNÇÕES DE APOIO
|--------------------------------------------------------------------------
*/

export function procurarTecnologias(
  termo: string
): Tecnologia[] {
  const pesquisa = termo.trim().toLowerCase();

  if (!pesquisa) {
    return tecnologias;
  }

  return tecnologias.filter((item) => {
    const texto = [
      item.nome,
      item.categoria,
      item.descricao,
      item.fornecedor,
      item.provincia,
      item.municipio ?? "",
      item.cobertura,
      ...item.problemaResolvido,
      ...item.aplicacoes,
      ...(item.equipamentos ?? []),
      ...(item.marcas ?? []),
    ]
      .join(" ")
      .toLowerCase();

    return texto.includes(pesquisa);
  });
}

export function procurarFornecedores(
  termo: string
): FornecedorTecnologia[] {
  const pesquisa = termo.trim().toLowerCase();

  if (!pesquisa) {
    return fornecedoresTecnologia;
  }

  return fornecedoresTecnologia.filter((item) => {
    const texto = [
      item.nome,
      item.tipo,
      item.descricao,
      item.provincia,
      item.municipio ?? "",
      item.cobertura ?? "",
      ...item.categorias,
      ...item.servicos,
      ...item.equipamentos,
      ...item.marcas,
    ]
      .join(" ")
      .toLowerCase();

    return texto.includes(pesquisa);
  });
}

export function obterTecnologiasPorCategoria(
  categoria: TipoTecnologia
): Tecnologia[] {
  return tecnologias.filter(
    (item) => item.categoria === categoria
  );
}

export function obterTecnologiasPorProvincia(
  provincia: string
): Tecnologia[] {
  const pesquisa = provincia.trim().toLowerCase();

  if (!pesquisa) {
    return [];
  }

  return tecnologias.filter(
    (item) =>
      item.provincia.toLowerCase() === pesquisa ||
      item.cobertura.toLowerCase().includes(pesquisa)
  );
}

export function obterFornecedorPorId(
  id: string
): FornecedorTecnologia | undefined {
  return fornecedoresTecnologia.find(
    (item) => item.id === id
  );
}

export function obterTecnologiaPorId(
  id: string
): Tecnologia | undefined {
  return tecnologias.find(
    (item) => item.id === id
  );
}

export function obterProblemaPorId(
  id: string
): ProblemaTecnologico | undefined {
  return problemasTecnologicos.find(
    (item) => item.id === id
  );
}