"use client";

import { useMemo, useState } from "react";

type Fonte = { nome: string; url: string };
type Tema = {
  id: string;
  titulo: string;
  categoria: string;
  resumo: string;
  imagem: string;
  credito: string;
  destaque: string;
  descricao: string;
  importancia: string[];
  cuidados: string[];
  fonte: Fonte[];
};

const FONTES = {
  minagrif: "https://minagrif.gov.ao/web/noticias/campanha-florestal-2026-foi-aberta-no-uige",
  transformacao: "https://minagrif.gov.ao/web/noticias/secretario-de-estado-para-as-florestas-reafirma-aposta-na-trasnformacao-da-madeira-local",
  mussivi: "https://minagrif.gov.ao/web/noticias/madeira-mussivi-apreendida-revertida-a-favor-do-estado-comecou-a-ser-entregue-a-industria-nacional",
  inbac: "https://inbac.gov.ao/Site/areasConservacao/parque",
  maiombe: "https://inbac.gov.ao/Site/areasConservacao/parque/10",
  quicama: "https://inbac.gov.ao/Site/areasConservacao/parque/18",
  iona: "https://inbac.gov.ao/Site/areasConservacao/parque/7",
  bicuar: "https://www.inbac.gov.ao/Site/areasConservacao/parque/14",
  cameia: "https://inbac.gov.ao/Site/areasConservacao/parque",
  cangandala: "https://inbac.gov.ao/Site/areasConservacao/parque/20",
  mupa: "https://inbac.gov.ao/Site/areasConservacao/parque",
  mavinga: "https://inbac.gov.ao/Site/areasConservacao/parque/13",
  luengue: "https://inbac.gov.ao/Site/areasConservacao/parque/19",
  flora: "https://governo.gov.ao/angola/flora",
  minambMaiombe: "https://minamb.gov.ao/web/noticias/conheca-o-parque-nacional-do-mayombe.",
  documentos: "https://minagrif.gov.ao/web/documentos?type=Relat%C3%B3rios++Estat%C3%ADsticos",
  ine: "https://www.ine.gov.ao/",
  onu: "https://angola.un.org/pt/175536-%E2%80%9Cinspirar-para-o-futuro%E2%80%9D-%E2%80%93-crian%C3%A7as-e-escolas-proteger-florestas-de-angola",
  undp: "https://www.undp.org/pt/angola/stories/beneficios-inclusivos-para-comunidades-rurais-de-angola",
};

const IMG = {
  maiombe: "https://medicareclub.ao/image/cache/catalog/guia/cabinda/floresta%20maiombe/mayombe-1240x827.jpg",
  toros: "https://angola24horas.com/media/k2/items/cache/7bebd3c4ae52261f600461f949b4e4e5_L.jpg",
  corte: "https://www.verangola.net/va/images/cms-image-000022453.jpg",
  plantacao: "https://www.radiomais.ao/wp-content/uploads/2025/11/37.webp",
  miombo: "https://www.undp.org/sites/g/files/zskgke326/files/2023-09/undp_ao_theforest-and-trees-1.2.jpg",
  queimada: "https://www.wwf.fr/sites/default/files/styles/default_large/public/2018-03/BIOS-1097250-min.jpg?h=dbfb23f9&itok=fDlm737Z",
  comunidade: "https://angola.un.org/sites/default/files/styles/featured_image/public/2022-03/Foto_2%20PNUD.jpg?itok=yUbviQV-",
};

const temas: Tema[] = [
  {
    id: "maiombe",
    titulo: "Floresta do Maiombe",
    categoria: "Ecossistemas",
    resumo: "Floresta húmida tropical de Cabinda, com elevada importância ecológica e social.",
    imagem: IMG.maiombe,
    credito: "Imagem publicada num guia turístico de Cabinda; confirmar autorização de reutilização.",
    destaque: "Cabinda · Floresta húmida",
    descricao: "O Maiombe situa-se na província de Cabinda e integra o domínio florestal húmido da Bacia do Congo. A ficha do INBAC descreve uma floresta de vegetação densa, árvores de grande porte e elevada biodiversidade. Para uma análise académica, importa distinguir a área do Parque Nacional do Maiombe da extensão regional do ecossistema, que atravessa fronteiras nacionais. A conservação exige articulação entre protecção de habitats, fiscalização, investigação e meios de subsistência das comunidades.",
    importancia: ["Conservar habitats e diversidade genética.", "Contribuir para o ciclo da água, protecção do solo e armazenamento de carbono.", "Apoiar inventários botânicos, investigação de fauna e educação ambiental.", "Promover actividades económicas compatíveis com a conservação."],
    cuidados: ["Combater a exploração ilegal de madeira e a caça furtiva.", "Evitar incêndios e abertura descontrolada de áreas.", "Registar a origem e a autorização de qualquer imagem ou amostra científica.", "Envolver as comunidades locais na gestão e na monitorização."],
    fonte: [{ nome: "INBAC — Parque Nacional do Maiombe", url: FONTES.maiombe }, { nome: "MINAMB — Parque Nacional do Maiombe", url: FONTES.minambMaiombe }],
  },
  {
    id: "miombo",
    titulo: "Miombo e florestas abertas",
    categoria: "Ecossistemas",
    resumo: "Formações de floresta aberta e savana arborizada que ocupam grandes extensões de Angola.",
    imagem: IMG.miombo,
    credito: "PNUD Angola — artigo sobre florestas e árvores; confirmar local exacto da fotografia.",
    destaque: "Floresta aberta · Savana arborizada",
    descricao: "O Miombo é uma formação de floresta aberta importante na África Austral e muito representativa de Angola. A estrutura e a composição variam com precipitação, solos, altitude, regime de fogo e uso humano. O Governo de Angola descreve a floresta aberta como uma formação extensa e identifica o Miombo como uma das suas designações mais conhecidas. A análise académica deve considerar que queimadas tradicionais e incêndios descontrolados não são fenómenos equivalentes: o efeito depende da época, intensidade, frequência e condições locais.",
    importancia: ["Fornecer habitats para fauna e flora.", "Contribuir para a fertilidade do solo e o ciclo de nutrientes.", "Disponibilizar produtos florestais madeireiros e não madeireiros.", "Sustentar actividades e conhecimentos tradicionais das comunidades."],
    cuidados: ["Evitar queimadas tardias, intensas e repetidas sem planeamento.", "Proteger árvores-semente e áreas de regeneração.", "Monitorizar a composição das espécies e a recuperação após o fogo.", "Planear a recolha de lenha e outros produtos dentro dos limites sustentáveis."],
    fonte: [{ nome: "Governo de Angola — Flora", url: FONTES.flora }, { nome: "PNUD Angola — Comunidades rurais", url: FONTES.undp }],
  },
  {
    id: "parques",
    titulo: "Parques nacionais e conservação",
    categoria: "Conservação",
    resumo: "Áreas protegidas que conservam habitats, espécies, paisagens e património natural.",
    imagem: IMG.maiombe,
    credito: "Fotografia do Maiombe; não representa todos os parques nacionais.",
    destaque: "Biodiversidade · Gestão de áreas protegidas",
    descricao: "Os parques nacionais fazem parte do sistema de conservação da natureza. A gestão deve conciliar conservação da biodiversidade, investigação, educação ambiental, fiscalização e participação das comunidades. Os ecossistemas angolanos são diversos: a floresta húmida de Cabinda não deve ser confundida com as paisagens áridas do Iona ou as savanas arborizadas do interior. Cada ficha técnica deve ser consultada para confirmar limites, estatuto e características.",
    importancia: ["Proteger espécies e habitats.", "Manter conectividade ecológica e processos naturais.", "Apoiar investigação e educação ambiental.", "Desenvolver turismo responsável, quando permitido pelo plano de gestão."],
    cuidados: ["Não caçar nem recolher espécies sem autorização.", "Respeitar os limites e as regras da área protegida.", "Não deixar resíduos nem provocar incêndios.", "Usar dados e fotografias com local e fonte identificados."],
    fonte: [{ nome: "INBAC — Parques nacionais", url: FONTES.inbac }],
  },
  {
    id: "madeira",
    titulo: "Madeira em toro e espécies comerciais",
    categoria: "Madeira e indústria",
    resumo: "Da árvore abatida legalmente ao toro classificado, transporte e transformação industrial.",
    imagem: IMG.toros,
    credito: "Imagem de madeira mussivi divulgada pela imprensa angolana; notícia relacionada com madeira apreendida.",
    destaque: "Toros · Rastreabilidade · Legalidade",
    descricao: "A madeira em toro é a secção do tronco preparada para transporte ou transformação. A avaliação técnica regista espécie, comprimento, diâmetros, defeitos, estado fitossanitário e origem. O mussivi é referido em notícias sobre madeira apreendida e encaminhada para a indústria nacional. Em inventários e relatórios, é essencial não confundir quotas aprovadas, volume licenciado, madeira apreendida, volume efectivamente extraído e produção vendida: são indicadores distintos.",
    importancia: ["Apoiar a classificação e a valorização da matéria-prima.", "Reduzir desperdício na serragem e transformação.", "Criar emprego na indústria e em serviços associados.", "Melhorar a rastreabilidade da origem até ao produto final."],
    cuidados: ["Exigir documentos e licenças aplicáveis.", "Registar espécie, dimensões, volume, origem e destino.", "Não confundir quotas ou licenças com produção efectivamente realizada.", "Dar prioridade à transformação local e à regeneração florestal."],
    fonte: [{ nome: "MINAGRIF — Madeira mussivi e indústria nacional", url: FONTES.mussivi }, { nome: "MINAGRIF — Campanha Florestal 2026", url: FONTES.minagrif }],
  },
  {
    id: "transformacao",
    titulo: "Madeira serrada, carpintaria e mobiliário",
    categoria: "Madeira e indústria",
    resumo: "Transformação local da madeira em pranchas, peças, mobiliário e outros produtos.",
    imagem: IMG.corte,
    credito: "Fotografia publicada por Ver Angola sobre operações florestais em Angola; consultar o artigo de origem.",
    destaque: "Serragem · Secagem · Produtos finais",
    descricao: "A transformação da madeira inclui serragem, secagem, classificação, armazenamento e fabrico de produtos. A qualidade depende da espécie, do teor de humidade, da orientação do corte, dos defeitos e das condições de armazenamento. A política de transformação local pode aumentar o valor acrescentado e criar empregos, mas precisa de matéria-prima legal, segurança ocupacional, gestão de resíduos e planeamento de abastecimento.",
    importancia: ["Aumentar o valor acrescentado dentro do país.", "Criar oportunidades para serrarias, carpintarias e fabricantes de mobiliário.", "Melhorar a utilização integral da matéria-prima.", "Desenvolver competências técnicas e industriais."],
    cuidados: ["Usar equipamentos de protecção e procedimentos seguros.", "Controlar a humidade para reduzir empenos e fendas.", "Separar espécies e classes de qualidade.", "Garantir origem legal e gestão adequada de serradura e resíduos."],
    fonte: [{ nome: "MINAGRIF — Transformação da madeira local", url: FONTES.transformacao }, { nome: "MINAGRIF — Campanha Florestal 2026", url: FONTES.minagrif }],
  },
  {
    id: "plantacoes",
    titulo: "Plantações florestais: eucaliptos e pinheiros",
    categoria: "Produção florestal",
    resumo: "Povoamentos plantados para abastecimento de madeira, sujeitos a planeamento e monitorização.",
    imagem: IMG.plantacao,
    credito: "Radio Mais Angola — reportagem sobre investimento florestal; confirmar o local exacto na reportagem.",
    destaque: "Plantação · Maneio · Colheita",
    descricao: "As plantações florestais podem fornecer matéria-prima de forma planeada, mas os resultados dependem da espécie, da proveniência, do solo, do clima, da água, da densidade e do maneio. O MINAGRIF informou, na abertura da Campanha Florestal de 2026, a existência estimada de cerca de 20.000 hectares plantados no país, com destaque para eucaliptos e pinheiros. Este valor é uma estimativa publicada e não deve ser apresentado como medição cadastral exacta sem consultar a fonte e a metodologia.",
    importancia: ["Fornecer matéria-prima para a indústria.", "Permitir planeamento do abastecimento e da colheita.", "Criar emprego em viveiros, plantações, transporte e transformação.", "Reduzir pressão sobre florestas naturais apenas quando o planeamento e a fiscalização são eficazes."],
    cuidados: ["Escolher espécies adequadas ao local e à finalidade.", "Avaliar consumo de água, risco de incêndio e impactos na biodiversidade.", "Prevenir pragas, doenças e expansão fora da área plantada.", "Replantar ou assegurar regeneração segundo o plano de maneio."],
    fonte: [{ nome: "MINAGRIF — Campanha Florestal 2026", url: FONTES.minagrif }],
  },
  {
    id: "queimadas",
    titulo: "Queimadas, incêndios e prevenção",
    categoria: "Protecção",
    resumo: "Prevenção de incêndios que ameaçam povoamentos, fauna, solos, habitações e pessoas.",
    imagem: IMG.queimada,
    credito: "WWF France — imagem ilustrativa de fogo em Miombo na África Austral; não confirmada como fotografia de Angola.",
    destaque: "Prevenção · Vigilância · Resposta",
    descricao: "O fogo interage com muitos ecossistemas de savana e floresta aberta, mas o seu efeito depende da época, intensidade, frequência e condições meteorológicas. Incêndios fora de controlo podem destruir regeneração, matar fauna, degradar o solo e ameaçar comunidades. A imagem apresentada é regional e ilustrativa, não um registo confirmado de um incêndio em Angola. Relatórios técnicos devem distinguir queimadas planeadas e legalmente autorizadas de incêndios acidentais ou descontrolados.",
    importancia: ["Proteger vidas, aldeias, explorações e infraestruturas.", "Reduzir mortalidade de árvores e fauna.", "Evitar perda de matéria orgânica e erosão do solo.", "Diminuir fumo e danos económicos."],
    cuidados: ["Não iniciar queimadas em condições de vento forte ou risco elevado.", "Nunca deixar fogo sem vigilância.", "Criar faixas de protecção apenas com orientação técnica e autorização aplicável.", "Alertar os serviços locais e não enfrentar sozinho um incêndio fora de controlo."],
    fonte: [{ nome: "Governo de Angola — Flora e formações vegetais", url: FONTES.flora }, { nome: "MINAGRIF — Campanha Florestal 2026", url: FONTES.minagrif }],
  },
  {
    id: "comunidades",
    titulo: "Produção familiar, empresas e comunidades",
    categoria: "Economia e comunidades",
    resumo: "Diferenciar os meios de vida familiares das operações empresariais e das concessões florestais.",
    imagem: IMG.comunidade,
    credito: "Nações Unidas em Angola — reportagem sobre escolas, comunidades e protecção ambiental; não é uma imagem de produção madeireira.",
    destaque: "Famílias · Cooperativas · Empresas",
    descricao: "A produção familiar está frequentemente ligada a meios de subsistência diversificados, recolha de produtos não madeireiros, agricultura, criação de animais e uso local de lenha, variando por região. As empresas florestais podem operar em plantações, concessões, transporte, serragem e comercialização sob licenças e regras aplicáveis. Não se deve tratar toda a actividade familiar como exploração comercial, nem presumir que todas as empresas têm a mesma escala. A análise deve identificar o tipo de operador, a actividade, o período, a unidade de medida e a fonte dos dados.",
    importancia: ["Reconhecer o papel das comunidades na gestão dos recursos.", "Promover alternativas de rendimento compatíveis com a conservação.", "Distinguir produção familiar, actividade cooperativa e exploração empresarial.", "Melhorar formação, segurança, acesso a mercados e rastreabilidade."],
    cuidados: ["Não inventar números de produtores familiares ou empresas.", "Separar dados por província, actividade, período e unidade.", "Consultar estatísticas oficiais antes de publicar totais.", "Garantir participação comunitária e respeito pelos direitos locais."],
    fonte: [{ nome: "MINAGRIF — Campanha Florestal 2026", url: FONTES.minagrif }, { nome: "Nações Unidas em Angola — Protecção das florestas", url: FONTES.onu }, { nome: "INE Angola", url: FONTES.ine }],
  },
  {
    id: "reflorestacao",
    titulo: "Viveiros, reflorestação e regeneração natural",
    categoria: "Protecção",
    resumo: "Produção de mudas e recuperação de áreas degradadas com espécies apropriadas.",
    imagem: IMG.plantacao,
    credito: "Radio Mais Angola — reportagem florestal; imagem de plantação, não necessariamente de reflorestação ecológica.",
    destaque: "Mudas · Regeneração · Monitorização",
    descricao: "A recuperação florestal pode combinar regeneração natural assistida, protecção de árvores-semente, controlo da erosão e plantação de espécies nativas apropriadas ao ecossistema. Plantar árvores não garante, por si só, a recuperação de uma floresta: é necessário escolher o local e as espécies, manter as mudas e acompanhar a sobrevivência e a composição da vegetação ao longo dos anos.",
    importancia: ["Recuperar coberto vegetal e reduzir erosão.", "Apoiar habitats e conectividade ecológica.", "Criar trabalho em viveiros, recolha de sementes e manutenção.", "Proteger bacias hidrográficas quando a intervenção é bem planeada."],
    cuidados: ["Dar prioridade a espécies nativas adequadas ao ecossistema.", "Registar a origem das sementes e a taxa de sobrevivência.", "Evitar substituir habitats naturais por monoculturas inadequadas.", "Monitorizar a área durante vários anos."],
    fonte: [{ nome: "MINAGRIF — Campanha Florestal 2026", url: FONTES.minagrif }, { nome: "Governo de Angola — Flora", url: FONTES.flora }],
  },
  {
    id: "dendrologia",
    titulo: "Dendrologia: identificação das árvores",
    categoria: "Ciência florestal",
    resumo: "Identificação de árvores por folhas, casca, flores, frutos, sementes e forma de crescimento.",
    imagem: IMG.miombo,
    credito: "PNUD Angola — artigo sobre florestas; local exacto da imagem a confirmar.",
    destaque: "Identificação botânica",
    descricao: "A dendrologia estuda e identifica árvores e arbustos lenhosos. A identificação fiável combina caracteres morfológicos, distribuição, habitat e, quando necessário, análise especializada. Uma fotografia isolada pode não ser suficiente para distinguir espécies semelhantes. Registos de campo devem incluir data, localização, nome comum, nome científico quando confirmado e a pessoa ou instituição responsável pela identificação.",
    importancia: ["Distinguir espécies nativas, introduzidas e potencialmente invasoras.", "Apoiar inventários e planos de recuperação.", "Relacionar características da madeira com os usos possíveis.", "Reconhecer espécies raras ou protegidas."],
    cuidados: ["Fotografar folhas, casca, flores e frutos sem danificar a planta.", "Não publicar identificações incertas como definitivas.", "Não recolher amostras em áreas protegidas sem autorização.", "Consultar herbários e especialistas quando necessário."],
    fonte: [{ nome: "Governo de Angola — Flora", url: FONTES.flora }, { nome: "INBAC", url: FONTES.inbac }],
  },
  {
    id: "dendrometria",
    titulo: "Dendrometria e inventário florestal",
    categoria: "Ciência florestal",
    resumo: "Medição do diâmetro, altura, área basal, volume e crescimento das árvores.",
    imagem: IMG.corte,
    credito: "Ver Angola — imagem relacionada com operações de corte em Angola.",
    destaque: "Medição · Amostragem · Planeamento",
    descricao: "A dendrometria mede dimensões de árvores e povoamentos. Um inventário pode registar diâmetro à altura do peito (DAP), altura total e comercial, espécie, estado fitossanitário, localização e data. A estimativa de volume exige métodos e equações adequados às espécies e condições locais. Resultados devem indicar desenho amostral, unidades, período e incerteza, evitando apresentar estimativas como contagens completas.",
    importancia: ["Estimar volumes e acompanhar o crescimento.", "Comparar povoamentos ao longo do tempo.", "Planear intervenções silvícolas com base em dados.", "Monitorizar regeneração, mortalidade e alterações do coberto."],
    cuidados: ["Registar método, unidade, data, local e espécie.", "Medir o DAP segundo protocolo técnico consistente.", "Distinguir volume em pé, volume em toro e madeira serrada.", "Explicitar a incerteza e os limites do inventário."],
    fonte: [{ nome: "MINAGRIF — Relatórios estatísticos", url: FONTES.documentos }],
  },
  {
    id: "produtos",
    titulo: "Produtos florestais não madeireiros",
    categoria: "Economia e comunidades",
    resumo: "Mel, cera, frutos, sementes, fibras e outros produtos cuja recolha depende da espécie e do local.",
    imagem: IMG.comunidade,
    credito: "Nações Unidas em Angola — imagem de actividade educativa em ambiente rural; não representa todos os produtos.",
    destaque: "Diversificação de rendimento",
    descricao: "Os produtos florestais não madeireiros podem incluir mel, cera, frutos, sementes, fibras, folhas e plantas utilizadas tradicionalmente. A disponibilidade, o valor e a forma de colheita dependem da espécie, da região, da estação e das regras de acesso. A recolha sustentável exige identificação correcta, higiene e segurança alimentar quando aplicável, respeito pela regeneração e documentação da origem.",
    importancia: ["Diversificar fontes de rendimento das famílias.", "Apoiar cadeias de valor e transformação local.", "Preservar conhecimentos tradicionais.", "Reduzir a dependência exclusiva da venda de madeira."],
    cuidados: ["Confirmar a espécie e o uso antes de recomendar consumo.", "Evitar colheita excessiva e destruição de plantas.", "Registar origem e práticas de recolha.", "Cumprir requisitos sanitários e comerciais aplicáveis."],
    fonte: [{ nome: "MINAGRIF — Campanha Florestal 2026", url: FONTES.minagrif }, { nome: "Governo de Angola — Flora", url: FONTES.flora }],
  },
];

const categorias = [
  "Todas",
  "Conservação",
  "Ecossistemas",
  "Protecção",
  "Ciência florestal",
  "Madeira e indústria",
  "Produção florestal",
  "Economia e comunidades",
];

const indicadores = [
  { valor: "211.765 m³", titulo: "Quota de madeira em toro — floresta natural", detalhe: "Campanha Florestal 2026; quota aprovada, não produção realizada." },
  { valor: "350.000 m³", titulo: "Quota de madeira em toro — floresta plantada", detalhe: "Campanha Florestal 2026; quota aprovada, não produção realizada." },
  { valor: "45", titulo: "Concessões florestais", detalhe: "MINAGRIF: 15 em florestas naturais e 30 em florestas plantadas." },
  { valor: "≈ 20.000 ha", titulo: "Plantações florestais estimadas", detalhe: "Estimativa nacional referida pelo MINAGRIF em Maio de 2026." },
];

const parques = [
  { nome: "Parque Nacional do Maiombe", local: "Cabinda", url: FONTES.maiombe, imagem: IMG.maiombe, credito: "Fotografia identificada como Floresta do Maiombe no guia de Cabinda.", texto: "Floresta húmida tropical de elevada importância ecológica." },
  { nome: "Parque Nacional da Quiçama", local: "Luanda", url: FONTES.quicama, imagem: IMG.miombo, credito: "Imagem de floresta/árvores de Angola; não é identificada como Quiçama.", texto: "Consulte a ficha oficial para informação sobre habitats e gestão." },
  { nome: "Parque Nacional do Iona", local: "Namibe", url: FONTES.iona, imagem: IMG.miombo, credito: "Imagem ilustrativa de vegetação; não identificada como Iona.", texto: "Consulte a ficha oficial para conhecer a paisagem árida e os habitats." },
  { nome: "Parque Nacional do Bicuar", local: "Huíla", url: FONTES.bicuar, imagem: IMG.miombo, credito: "Imagem de formação arborizada; local exacto não confirmado.", texto: "Área de conservação com paisagens de bosque, savana e zonas húmidas." },
  { nome: "Parque Nacional da Cameia", local: "Moxico", url: FONTES.cameia, imagem: IMG.miombo, credito: "Imagem ilustrativa; não identificada como Cameia.", texto: "Consulte o INBAC para a ficha e os dados actualizados." },
  { nome: "Parque Nacional de Cangandala", local: "Malanje", url: FONTES.cangandala, imagem: IMG.miombo, credito: "Imagem ilustrativa; não identificada como Cangandala.", texto: "Área importante para a conservação da palanca-negra-gigante." },
  { nome: "Parque Nacional da Mupa", local: "Cunene", url: FONTES.mupa, imagem: IMG.miombo, credito: "Imagem ilustrativa; não identificada como Mupa.", texto: "Consulte a ficha oficial para dados e estatuto da área." },
  { nome: "Parque Nacional da Mavinga", local: "Sudeste de Angola", url: FONTES.mavinga, imagem: IMG.miombo, credito: "Imagem ilustrativa; não identificada como Mavinga.", texto: "Área de conservação com extensas paisagens naturais." },
  { nome: "Parque Nacional do Luengue-Luiana", local: "Sudeste de Angola", url: FONTES.luengue, imagem: IMG.miombo, credito: "Imagem ilustrativa; não identificada como Luengue-Luiana.", texto: "Consulte a ficha oficial para conhecer a área e os seus habitats." },
];

export default function FlorestasPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [modal, setModal] = useState<Tema | null>(null);

  const filtrados = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt-PT");
    return temas.filter((tema) => {
      const correspondeCategoria = categoria === "Todas" || tema.categoria === categoria;
      const texto = [tema.titulo, tema.resumo, tema.categoria, tema.descricao, ...tema.importancia, ...tema.cuidados]
        .join(" ").toLocaleLowerCase("pt-PT");
      return correspondeCategoria && (!termo || texto.includes(termo));
    });
  }, [pesquisa, categoria]);

  return (
    <main className="min-h-screen bg-[#f4f7f2] text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#102f24] text-white">
        <img src={IMG.maiombe} alt="Floresta do Maiombe, Cabinda" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a2118]/95 via-[#103b2b]/85 to-[#123d2c]/55" />
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100">
            <span>AGROINOVA ANGOLA</span><span className="text-emerald-300">/</span><span>Conhecimento florestal</span>
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">Recursos naturais · Ciência · Desenvolvimento</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">Florestas de Angola<span className="block text-emerald-300">proteger, conhecer e valorizar</span></h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 md:text-xl">Biblioteca de conhecimento sobre ecossistemas, parques nacionais, produção familiar e empresarial, madeira, transformação industrial, incêndios, reflorestação e gestão sustentável.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#explorar" className="rounded-xl bg-emerald-400 px-6 py-3 font-bold text-[#102f24] transition hover:bg-emerald-300">Explorar conteúdos</a>
            <a href="#indicadores" className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10">Ver indicadores</a>
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-emerald-100/85">As fotografias têm créditos e notas de proveniência. Quando o local exacto não está confirmado, a imagem é identificada como ilustrativa e não como fotografia de um parque específico.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-800">O património florestal</p>
            <h2 className="text-3xl font-black leading-tight md:text-4xl">A floresta é ecossistema, recurso e meio de vida</h2>
            <p className="mt-5 leading-8 text-slate-600">Angola reúne formações vegetais distintas, desde a floresta húmida do Maiombe, em Cabinda, até às florestas abertas de Miombo, savanas arborizadas e ecossistemas áridos. A gestão florestal deve integrar conservação, uso sustentável, conhecimento científico e participação das comunidades.</p>
            <a href={FONTES.flora} target="_blank" rel="noreferrer" className="mt-5 inline-flex font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4">Consultar a flora de Angola ↗</a>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-800">Objectivos académicos</p>
            <ul className="mt-5 space-y-4 text-slate-700">
              {["Descrever os principais ecossistemas florestais de Angola.", "Distinguir exploração, licenciamento, quota e produção realizada.", "Explicar inventário, dendrologia e transformação da madeira.", "Analisar os papéis das famílias, comunidades, cooperativas e empresas.", "Promover prevenção de incêndios e recuperação ecológica."].map((item) => <li key={item} className="flex gap-3"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-black text-emerald-800">✓</span><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="indicadores" className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div><p className="text-sm font-bold uppercase tracking-widest text-emerald-800">Campanha Florestal 2026</p><h2 className="mt-2 text-3xl font-black">Indicadores publicados pelo MINAGRIF</h2></div>
            <a href={FONTES.minagrif} target="_blank" rel="noreferrer" className="text-sm font-bold text-emerald-800 underline underline-offset-4">Consultar publicação original ↗</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {indicadores.map((n) => <article key={n.titulo} className="rounded-2xl border border-slate-200 bg-[#f8faf7] p-6"><p className="text-3xl font-black tracking-tight text-emerald-900">{n.valor}</p><h3 className="mt-3 font-bold">{n.titulo}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{n.detalhe}</p></article>)}
          </div>
          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>Nota metodológica:</strong> os valores são os publicados pelo MINAGRIF para a Campanha Florestal 2026. Quotas, licenças, concessões, exportações e produção efectiva são conceitos diferentes e não devem ser somados ou tratados como equivalentes.</div>
        </div>
      </section>

      <section id="explorar" className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-widest text-emerald-800">Biblioteca florestal</p><h2 className="mt-2 text-3xl font-black md:text-4xl">Temas com informação académica</h2><p className="mt-4 leading-7 text-slate-600">Pesquise por tema ou categoria. Abra cada cartão para ler a descrição, a importância, os cuidados técnicos e as fontes para aprofundamento.</p></div>
        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_260px]">
          <label className="block"><span className="mb-2 block text-sm font-bold text-slate-700">Pesquisar conteúdos</span><input value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="Ex.: Maiombe, madeira, produção familiar, queimadas..." className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100" /></label>
          <label className="block"><span className="mb-2 block text-sm font-bold text-slate-700">Categoria</span><select value={categoria} onChange={(e) => setCategoria(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100">{categorias.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
        </div>
        <div className="mb-5 mt-6 flex items-center justify-between"><p className="text-sm text-slate-500">{filtrados.length} tema(s) encontrado(s)</p>{(pesquisa || categoria !== "Todas") && <button type="button" onClick={() => { setPesquisa(""); setCategoria("Todas"); }} className="text-sm font-bold text-emerald-800 underline underline-offset-4">Limpar filtros</button>}</div>
        {filtrados.length > 0 ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{filtrados.map((tema) => <article key={tema.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <div className="relative h-52 overflow-hidden bg-emerald-950"><img src={tema.imagem} alt={tema.titulo} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" /><span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-xs font-bold text-white">{tema.categoria}</span></div>
          <div className="p-5"><p className="text-xs font-bold uppercase tracking-wider text-emerald-800">{tema.destaque}</p><h3 className="mt-2 text-xl font-black">{tema.titulo}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">{tema.resumo}</p><p className="mt-3 text-xs leading-5 text-slate-500">Crédito: {tema.credito}</p><button type="button" onClick={() => setModal(tema)} className="mt-5 flex w-full items-center justify-between rounded-xl bg-emerald-900 px-4 py-3 text-left font-bold text-white transition hover:bg-emerald-800"><span>Ver informação académica</span><span aria-hidden="true">↗</span></button></div>
        </article>)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><h3 className="text-xl font-bold">Nenhum tema encontrado</h3><p className="mt-2 text-slate-500">Tente outra palavra ou seleccione “Todas”.</p></div>}
      </section>

      <section className="bg-[#e8efe8] py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-800">Património natural</p><h2 className="mt-2 text-3xl font-black md:text-4xl">Parques nacionais e áreas de conservação</h2><p className="mt-4 max-w-3xl leading-7 text-slate-700">As fotografias abaixo não são todas fotografias confirmadas dos parques indicados. A legenda informa quando a localização exacta da imagem não está confirmada. Abra a ficha do INBAC para consultar a informação institucional.</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{parques.map((p) => <article key={p.nome} className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm"><div className="h-48 overflow-hidden bg-emerald-950"><img src={p.imagem} alt={p.nome} loading="lazy" className="h-full w-full object-cover" /></div><div className="p-5"><p className="text-sm font-bold text-emerald-800">{p.local}</p><h3 className="mt-2 text-xl font-black">{p.nome}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{p.texto}</p><p className="mt-3 text-xs leading-5 text-slate-500">Imagem: {p.credito}</p><a href={p.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-between rounded-xl bg-emerald-900 px-4 py-3 font-bold text-white transition hover:bg-emerald-800"><span>Consultar ficha oficial</span><span>↗</span></a></div></article>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-[#103b2b] text-white"><img src={IMG.toros} alt="Toros de madeira transportados em Angola" className="h-64 w-full object-cover" loading="lazy" /><div className="p-7 md:p-9"><p className="text-sm font-bold uppercase tracking-widest text-emerald-300">Cadeia de valor</p><h2 className="mt-3 text-3xl font-black">Da floresta à madeira transformada</h2><p className="mt-4 leading-7 text-emerald-50">A cadeia de valor pode incluir inventário, exploração autorizada, transporte, serragem, secagem, carpintaria, mobiliário e comercialização. A transformação local aumenta o valor acrescentado quando a matéria-prima tem origem legal e a gestão dos recursos é sustentável.</p><div className="mt-6 flex flex-wrap gap-2">{["Madeira em toro", "Madeira serrada", "Mobiliário", "Postes", "Carvão vegetal", "Lenha", "Mel e cera"].map((x) => <span key={x} className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm">{x}</span>)}</div><a href={FONTES.transformacao} target="_blank" rel="noreferrer" className="mt-6 inline-block font-bold text-emerald-200 underline underline-offset-4">Ler sobre transformação local da madeira ↗</a></div></div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9"><p className="text-sm font-bold uppercase tracking-widest text-emerald-800">Famílias e empresas</p><h2 className="mt-3 text-3xl font-black">Produção familiar e actividade empresarial</h2><p className="mt-4 leading-7 text-slate-600">A produção familiar, as cooperativas e as empresas têm escalas, objectivos e formas de organização diferentes. Na actividade florestal, os dados devem indicar se descrevem recolha de produtos não madeireiros, produção de mudas, plantação, exploração licenciada, concessões, transformação ou comercialização. Não existem neste painel números separados para produção familiar e empresarial porque não foram confirmados numa tabela oficial comparável.</p><div className="mt-5 space-y-3 text-sm leading-6 text-slate-700"><p>• <strong>Familiar:</strong> meios de subsistência, recolha local, agricultura e actividades complementares, variáveis por região.</p><p>• <strong>Cooperativa:</strong> organização colectiva para produção, transformação, compra de insumos ou comercialização.</p><p>• <strong>Empresarial:</strong> viveiros, plantações, concessões, transporte, serragem e comercialização sujeitas às regras aplicáveis.</p></div><a href={FONTES.minagrif} target="_blank" rel="noreferrer" className="mt-5 inline-block font-bold text-emerald-800 underline underline-offset-4">Consultar dados oficiais do MINAGRIF ↗</a></div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-12"><div className="mx-auto max-w-7xl px-5 md:px-8"><h2 className="text-2xl font-black">Fontes institucionais e leitura complementar</h2><p className="mt-3 max-w-3xl leading-7 text-slate-600">Utilize as fontes para verificar estatísticas, legislação, localização dos parques e informação técnica. Confirme sempre o ano de publicação e a unidade dos dados.</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[{ nome: "MINAGRIF — Campanha Florestal 2026", url: FONTES.minagrif }, { nome: "MINAGRIF — Transformação local da madeira", url: FONTES.transformacao }, { nome: "MINAGRIF — Madeira mussivi", url: FONTES.mussivi }, { nome: "INBAC — Parques nacionais", url: FONTES.inbac }, { nome: "Governo de Angola — Flora", url: FONTES.flora }, { nome: "MINAGRIF — Relatórios estatísticos", url: FONTES.documentos }, { nome: "INE Angola", url: FONTES.ine }, { nome: "MINAMB — Parque Nacional do Maiombe", url: FONTES.minambMaiombe }, { nome: "Nações Unidas em Angola — Florestas", url: FONTES.onu }].map((f) => <a key={f.nome} href={f.url} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 p-4 font-semibold text-emerald-900 transition hover:border-emerald-400 hover:bg-emerald-50">{f.nome}<span className="ml-2 text-emerald-700">↗</span></a>)}</div></div></section>

      {modal && <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/75 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={(e) => { if (e.target === e.currentTarget) setModal(null); }} role="presentation">
        <section role="dialog" aria-modal="true" aria-labelledby="modal-titulo" className="max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
          <div className="relative h-56 bg-emerald-950 sm:h-80"><img src={modal.imagem} alt={modal.titulo} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" /><button type="button" onClick={() => setModal(null)} aria-label="Fechar janela" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80">×</button><div className="absolute bottom-5 left-5 right-5 text-white sm:left-8"><span className="text-xs font-bold uppercase tracking-widest text-emerald-200">{modal.categoria}</span><h2 id="modal-titulo" className="mt-2 text-2xl font-black sm:text-4xl">{modal.titulo}</h2><p className="mt-2 text-sm text-white/85">{modal.destaque}</p></div></div>
          <div className="space-y-8 p-5 sm:p-8">
            <div><h3 className="text-xl font-black">Enquadramento técnico e académico</h3><p className="mt-3 whitespace-pre-line leading-8 text-slate-700">{modal.descricao}</p><p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600"><strong>Nota sobre a imagem:</strong> {modal.credito}</p></div>
            <div className="grid gap-6 md:grid-cols-2"><div className="rounded-2xl bg-emerald-50 p-5"><h3 className="text-lg font-black text-emerald-950">Importância e aplicações</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">{modal.importancia.map((item) => <li key={item} className="flex gap-3"><span className="font-black text-emerald-800">✓</span><span>{item}</span></li>)}</ul></div><div className="rounded-2xl bg-amber-50 p-5"><h3 className="text-lg font-black text-amber-950">Cuidados e boas práticas</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">{modal.cuidados.map((item) => <li key={item} className="flex gap-3"><span className="font-black text-amber-800">•</span><span>{item}</span></li>)}</ul></div></div>
            <div><h3 className="text-xl font-black">Fontes para consulta e investigação</h3><div className="mt-4 flex flex-wrap gap-3">{modal.fonte.map((f) => <a key={f.url} href={f.url} target="_blank" rel="noreferrer" className="rounded-xl border border-emerald-200 px-4 py-3 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50">{f.nome} ↗</a>)}</div></div>
            <div className="flex justify-end border-t border-slate-200 pt-5"><button type="button" onClick={() => setModal(null)} className="rounded-xl bg-emerald-900 px-6 py-3 font-bold text-white transition hover:bg-emerald-800">Fechar conteúdo</button></div>
          </div>
        </section>
      </div>}

      <footer className="bg-[#0a2118] px-5 py-7 text-center text-sm text-emerald-100/80">AGROINOVA ANGOLA · Conhecimento, tecnologia e inovação ao serviço do campo angolano.</footer>
    </main>
  );
}
