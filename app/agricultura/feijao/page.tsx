"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Provincia = {
  nome: string;
  regiao: string;
  contexto: string;
  planeamento: string;
  solo: string;
  agua: string;
  atencao: string;
  evidencia: string;
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    regiao: "Norte litoral",
    contexto: "A produção deve ser planeada por município e parcela. A proximidade de zonas costeiras e vales agrícolas não significa que todas as áreas tenham as mesmas condições.",
    planeamento: "Definir a sementeira de acordo com o início efectivo das chuvas ou com a disponibilidade segura de irrigação; evitar escolher uma data fixa para toda a província.",
    solo: "Verificar drenagem, profundidade, acidez e fertilidade antes da instalação. Em áreas baixas, confirmar que a água não permanece junto às raízes.",
    agua: "Se houver irrigação, dimensioná-la conforme a fonte disponível e a fase da cultura; evitar encharcamento.",
    atencao: "Monitorizar doenças favorecidas por humidade elevada e confirmar a adaptação do material de feijão antes de ampliar a área.",
    evidencia: "Orientação agronómica geral adaptada ao contexto regional; não constitui um mapa oficial de aptidão nem uma recomendação varietal específica."
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste litoral",
    contexto: "A disponibilidade de água varia muito entre zonas costeiras, vales e áreas do interior. A escolha da parcela é determinante para a viabilidade da cultura.",
    planeamento: "Antes da sementeira, confirmar a duração provável da estação húmida ou garantir água para todo o ciclo. Não assumir que a chuva é suficiente em todos os municípios.",
    solo: "Analisar salinidade quando a parcela ou a água de rega possam apresentar esse risco; avaliar fertilidade, textura e drenagem.",
    agua: "Dar prioridade à eficiência de rega e à disponibilidade real de água. Evitar iniciar uma área cuja água não cubra as fases críticas da cultura.",
    atencao: "Em zonas secas, o stress hídrico pode limitar a produção; usar apenas materiais e calendários validados para o local.",
    evidencia: "Orientação agronómica geral; confirmar dados de solo, água e calendário com serviços técnicos locais."
  },
  {
    nome: "Bié",
    regiao: "Planalto central",
    contexto: "A agricultura de sequeiro pode ser considerada onde a chuva e o solo o permitam. A altitude, o relevo e a variação local criam diferenças entre explorações.",
    planeamento: "Acompanhar o início das chuvas e o tempo necessário para a maturação do material escolhido; evitar sementeira em solo ainda demasiado seco ou saturado.",
    solo: "Verificar acidez, fósforo, matéria orgânica e drenagem. Em declives, reduzir erosão através de mobilização adequada e conservação do solo.",
    agua: "Proteger a humidade do solo e assegurar drenagem durante períodos de chuva intensa.",
    atencao: "Registar a cultivar, a data de sementeira e o resultado de cada campanha para comparar materiais localmente.",
    evidencia: "Contexto regional e práticas agronómicas gerais. Não são atribuídos rendimentos nem cultivares recomendadas sem ensaios locais."
  },
  {
    nome: "Cabinda",
    regiao: "Norte litoral",
    contexto: "Condições quentes e húmidas podem aumentar a importância da drenagem, da ventilação do coberto e da vigilância fitossanitária.",
    planeamento: "Escolher uma janela de cultivo que reduza a exposição prolongada das plantas e vagens à humidade; confirmar a época local com técnicos agrícolas.",
    solo: "Evitar parcelas encharcadas; verificar drenagem, acidez e fertilidade antes da sementeira.",
    agua: "A necessidade pode ser menos relacionada com falta de chuva e mais com drenagem e distribuição da água. Não irrigar sem avaliar a humidade do solo.",
    atencao: "Inspeccionar regularmente folhas, caules e vagens; utilizar semente sã e evitar guardar semente de lotes com sintomas suspeitos.",
    evidencia: "Orientação geral baseada em princípios agronómicos para ambientes húmidos; a validação deve ser feita por município e parcela."
  },
  {
    nome: "Cuando",
    regiao: "Sudeste",
    contexto: "A recomendação deve considerar a distância aos mercados e fornecedores, a disponibilidade de sementes e as condições concretas da exploração.",
    planeamento: "Ajustar a sementeira ao início e ao fim das chuvas observadas localmente e ao ciclo do material escolhido.",
    solo: "Avaliar textura, acidez, fertilidade e drenagem; não inferir as propriedades da parcela apenas pelo nome da província.",
    agua: "Planear a cultura de acordo com a chuva efectiva e a capacidade de reserva ou rega disponível.",
    atencao: "Testar primeiro em área limitada materiais de origem conhecida e registar emergência, sanidade e colheita antes de expandir.",
    evidencia: "Orientação técnica geral; não há aqui dados provinciais validados de rendimento, calendário ou cultivar."
  },
  {
    nome: "Cubango",
    regiao: "Sudeste",
    contexto: "A produção depende das condições locais de chuva, solo, acesso a insumos e distância aos pontos de comercialização.",
    planeamento: "Usar observações locais de chuva e duração do ciclo para definir a sementeira; evitar datas fixas sem validação municipal.",
    solo: "Analisar fertilidade e acidez e confirmar que a parcela tem drenagem adequada, sobretudo em áreas baixas.",
    agua: "Evitar stress hídrico nas fases de floração e enchimento das vagens; planear a água antes de aumentar a área.",
    atencao: "Guardar registos por campanha e comparar os resultados por material, parcela e método de maneio.",
    evidencia: "Orientação agronómica geral, sem alegação de aptidão uniforme para toda a província."
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte interior",
    contexto: "A escolha da parcela deve considerar a distribuição da chuva, o relevo e a facilidade de acesso a sementes e assistência técnica.",
    planeamento: "Acompanhar o início das chuvas e evitar semear em solo saturado; adequar o ciclo do material à janela de cultivo disponível.",
    solo: "Verificar drenagem, acidez e nutrientes; em terrenos inclinados, adoptar práticas que reduzam a erosão.",
    agua: "Proteger o solo contra escorrimento e encharcamento e assegurar água suficiente durante a fase reprodutiva.",
    atencao: "Monitorizar doenças e validar localmente qualquer recomendação de cultivar, fertilização ou densidade.",
    evidencia: "Recomendação de boas práticas, não substitui análise de solo nem ensaios regionais."
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-Oeste",
    contexto: "A diversidade de relevo e condições de água exige decisões ao nível da exploração, e não uma única recomendação para toda a província.",
    planeamento: "Definir a janela de sementeira a partir da chuva local ou da disponibilidade de irrigação e do ciclo do material escolhido.",
    solo: "Analisar fertilidade, acidez e drenagem. Ajustar a preparação ao tipo de solo e evitar mobilização excessiva em áreas vulneráveis à erosão.",
    agua: "Em parcelas irrigadas, acompanhar a humidade do solo e evitar excesso de água; em sequeiro, planear com base na chuva observada.",
    atencao: "Comparar materiais em parcelas de demonstração antes de os recomendar em larga escala.",
    evidencia: "Orientação geral; calendários e cultivares devem ser confirmados com dados locais."
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    contexto: "A limitação de água é um factor importante a avaliar, mas o risco varia com a localização, a fonte de água e o sistema de produção.",
    planeamento: "Só estabelecer a cultura quando a chuva efectiva ou a irrigação prevista puderem sustentar o ciclo; considerar a duração do material seleccionado.",
    solo: "Verificar salinidade, acidez, textura e drenagem, especialmente quando se usa água de rega.",
    agua: "Dar prioridade à gestão eficiente da água e proteger as fases de floração e formação das vagens contra stress hídrico.",
    atencao: "Não recomendar produção de sequeiro sem avaliar o risco climático local; confirmar a qualidade da água de rega.",
    evidencia: "Orientação geral para planeamento em ambientes com risco de défice hídrico; não é uma previsão climática nem garantia de produção."
  },
  {
    nome: "Huambo",
    regiao: "Planalto central",
    contexto: "Existem referências de produção de feijão e investigação local. Em 2026, foi divulgado um estudo experimental sobre Catarina e Manteiga em Mbave, Chicala-Choloanga; os resultados são específicos desse ensaio.",
    planeamento: "Ajustar a sementeira ao início das chuvas, ao ciclo do material e às condições da parcela. Registar datas e resultados por município.",
    solo: "A acidez e a fertilidade devem ser avaliadas por análise. A correcção do solo e a adubação devem seguir resultados analíticos e aconselhamento técnico.",
    agua: "Evitar tanto o défice hídrico nas fases críticas como o encharcamento; usar drenagem e conservação da humidade adequadas à parcela.",
    atencao: "Catarina e Manteiga aparecem em investigação local, mas um ensaio não prova superioridade em todos os ambientes nem substitui semente de qualidade.",
    evidencia: "Fontes listadas nesta página: workshop técnico MINAGRIF/PDAC de 2026 e estudo da Revista Científica da Universidade José Eduardo dos Santos sobre Catarina e Manteiga."
  },
  {
    nome: "Huíla",
    regiao: "Sul / planalto e zonas de altitude",
    contexto: "A altitude, a temperatura, o relevo e a disponibilidade de água podem diferir substancialmente entre municípios e explorações.",
    planeamento: "Escolher a época com base na chuva local, temperatura e duração do ciclo; não extrapolar o calendário de um município para toda a província.",
    solo: "Avaliar acidez, fertilidade, profundidade e drenagem. Em declives, reduzir erosão e conservar matéria orgânica.",
    agua: "Planear água para floração e enchimento das vagens e evitar encharcamento em parcelas com drenagem deficiente.",
    atencao: "Confirmar adaptação varietal e risco de doenças com técnicos locais antes de adoptar recomendações de outras regiões.",
    evidencia: "Orientação geral; requer validação agroclimática e agronómica local."
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte / zona centro-norte",
    contexto: "A produção deve ser planeada considerando o acesso à água, a pressão urbana sobre a terra e as condições particulares de cada parcela.",
    planeamento: "Definir a sementeira segundo a chuva local ou uma fonte de irrigação fiável; avaliar custos de insumos e acesso ao mercado.",
    solo: "Verificar fertilidade, compactação, salinidade e drenagem conforme o histórico da parcela e a qualidade da água utilizada.",
    agua: "Garantir água de qualidade e gestão de rega; evitar uso de fontes cuja qualidade não tenha sido avaliada.",
    atencao: "A proximidade de mercados não elimina a necessidade de validar custos, sanidade, água e adaptação do material.",
    evidencia: "Orientação geral; não representa um levantamento cartográfico da aptidão agrícola de Icolo e Bengo."
  },
  {
    nome: "Luanda",
    regiao: "Norte litoral / área metropolitana",
    contexto: "A produção comercial deve considerar a disponibilidade e o custo da água, a qualidade do solo, o uso do espaço e a logística de comercialização.",
    planeamento: "Avaliar previamente a viabilidade económica, a origem da água e o ciclo do material; em produção irrigada, programar a sementeira conforme os recursos disponíveis.",
    solo: "Analisar salinidade, contaminação potencial, fertilidade e drenagem, sobretudo em parcelas próximas de áreas urbanas.",
    agua: "Confirmar qualidade e regularidade da água antes de a utilizar para rega; ajustar a aplicação à necessidade real da cultura.",
    atencao: "Não assumir que uma parcela urbana ou periurbana é segura para produção alimentar sem avaliação de solo e água.",
    evidencia: "Orientação geral para produção; é necessária avaliação específica da parcela e da qualidade da água."
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    contexto: "A escolha da área deve considerar o regime de chuvas, o relevo, a drenagem e a disponibilidade de semente e assistência técnica.",
    planeamento: "Acompanhar a chuva observada e seleccionar material cujo ciclo caiba na janela de cultivo; evitar sementeira em solo encharcado.",
    solo: "Verificar drenagem e fertilidade; proteger a estrutura do solo e evitar erosão em terrenos inclinados.",
    agua: "Gerir o excesso de água durante períodos chuvosos e prevenir stress hídrico caso ocorram pausas de chuva.",
    atencao: "A humidade não confirma, por si só, que a parcela é adequada; vigiar doenças e usar semente sadia.",
    evidencia: "Orientação agronómica geral, sem dados específicos de rendimento ou recomendação varietal provincial."
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    contexto: "As decisões de produção devem basear-se na parcela, no calendário real das chuvas e nos recursos disponíveis para maneio.",
    planeamento: "Adequar a época à chuva local e ao ciclo da cultivar; guardar registos de sementeira, emergência, floração e colheita.",
    solo: "Analisar acidez, fertilidade e drenagem. Usar práticas de conservação do solo onde exista risco de erosão.",
    agua: "Evitar encharcamento e observar períodos sem chuva, sobretudo durante floração e enchimento das vagens.",
    atencao: "Confirmar materiais e práticas com serviços técnicos; não usar resultados de outras províncias como recomendação automática.",
    evidencia: "Orientação geral sujeita a validação local."
  },
  {
    nome: "Malanje",
    regiao: "Norte interior",
    contexto: "A escolha do local e da época deve considerar a chuva, o relevo, a fertilidade e a facilidade de acesso a semente de qualidade.",
    planeamento: "Programar a sementeira a partir das condições observadas no campo e do ciclo do material, não apenas pelo mês do calendário.",
    solo: "Analisar pH, fósforo, potássio e matéria orgânica; assegurar drenagem e conservar o solo em áreas inclinadas.",
    agua: "Manter humidade suficiente nas fases críticas sem saturar a zona radicular.",
    atencao: "Validar cultivares, densidade e adubação em condições locais antes de recomendar a outros produtores.",
    evidencia: "Orientação agronómica geral; dados de rendimento e calendários provinciais não são apresentados sem fonte verificada."
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    contexto: "A produção deve acompanhar as condições de chuva e as características da parcela; o acesso a insumos e mercados também influencia a decisão.",
    planeamento: "Observar o estabelecimento efectivo das chuvas e garantir que o ciclo escolhido termine dentro da janela disponível.",
    solo: "Verificar fertilidade, acidez e drenagem e adoptar práticas de conservação quando o relevo e a chuva favoreçam erosão.",
    agua: "Planejar para pausas de chuva e evitar excesso de água em solos com drenagem insuficiente.",
    atencao: "Registar o desempenho de cada material e não assumir adaptação com base apenas na origem geográfica.",
    evidencia: "Orientação geral; necessita de dados locais para calendário, variedade e rendimento."
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    contexto: "Como noutras zonas do leste, a recomendação deve ser feita com base em condições locais observadas e não apenas na divisão administrativa.",
    planeamento: "Confirmar o início das chuvas, a duração da estação e o ciclo da semente disponível com assistência técnica local.",
    solo: "Analisar acidez, nutrientes e drenagem antes de decidir sobre calagem e fertilização.",
    agua: "Ajustar o maneio à chuva efectiva; assegurar drenagem e acompanhar a humidade nas fases reprodutivas.",
    atencao: "Promover ensaios de campo e registos de produtividade antes de publicar recomendações varietais para a província.",
    evidencia: "Orientação agronómica geral; não foram atribuídos valores de produtividade ou cultivares específicas sem evidência provincial."
  },
  {
    nome: "Namibe",
    regiao: "Sul litoral / zona árida",
    contexto: "A disponibilidade de água e a sua qualidade devem ser avaliadas antes de iniciar a cultura, sobretudo em sistemas irrigados.",
    planeamento: "Confirmar fonte de água, custo da rega e duração do ciclo antes de semear; a produção de sequeiro não deve ser presumida viável.",
    solo: "Avaliar salinidade, textura, fertilidade e drenagem; analisar também a qualidade da água de irrigação.",
    agua: "Aplicar rega eficiente e monitorizar a humidade do solo. Evitar acumulação de sais e défice hídrico nas fases críticas.",
    atencao: "A viabilidade deve ser calculada por exploração, considerando água, energia, mão-de-obra e mercado.",
    evidencia: "Orientação geral para ambiente árido; requer dados locais de água e solo antes de recomendar produção."
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    contexto: "A selecção da parcela deve considerar a distribuição das chuvas, o relevo, a drenagem e a disponibilidade de semente de qualidade.",
    planeamento: "Ajustar a sementeira à chuva observada e ao ciclo do material; evitar períodos em que a humidade favoreça problemas fitossanitários.",
    solo: "Verificar drenagem, acidez e fertilidade; conservar matéria orgânica e reduzir erosão em terrenos inclinados.",
    agua: "Evitar encharcamento e acompanhar a humidade ao longo do ciclo, especialmente na floração e formação das vagens.",
    atencao: "Inspeccionar regularmente a cultura e validar a escolha varietal com ensaios e assistência técnica local.",
    evidencia: "Orientação geral; não constitui recomendação oficial de cultivar ou calendário para todo o Uíge."
  },
  {
    nome: "Zaire",
    regiao: "Norte litoral",
    contexto: "O planeamento deve considerar humidade, drenagem, distribuição das chuvas e condições específicas da exploração.",
    planeamento: "Escolher a janela de cultivo com base na chuva local e na duração do ciclo; evitar sementeira em solo saturado.",
    solo: "Avaliar drenagem, acidez, fertilidade e risco de erosão; a análise da parcela deve preceder decisões de correcção.",
    agua: "Dar prioridade à drenagem em áreas sujeitas a excesso de água e ajustar rega apenas quando necessária.",
    atencao: "Usar semente sã e monitorizar doenças; confirmar recomendações por município antes de as generalizar.",
    evidencia: "Orientação agronómica geral, sem alegação de aptidão uniforme nem dados provinciais de rendimento."
  },
];

type Material = {
  nome: string;
  categoria: string;
  origem: string;
  evidencia: string;
  observacao: string;
};

const materiais: Material[] = [
  {
    nome: "Catarina",
    categoria: "Material documentado em Angola",
    origem: "Angola; também estudada experimentalmente no Huambo",
    evidencia:
      "Foi avaliada em Chicala-Choloanga, Huambo, num estudo publicado em 2026.",
    observacao:
      "Não deve ser apresentada como recomendação nacional automática; o desempenho depende do ambiente e do sistema de produção.",
  },
  {
    nome: "Manteiga",
    categoria: "Material documentado em Angola",
    origem: "Angola",
    evidencia:
      "É mencionada em fontes angolanas e foi comparada com Catarina no ensaio realizado em Chicala-Choloanga.",
    observacao:
      "O nome comercial ou local não substitui a identificação genética e a certificação da semente.",
  },
  {
    nome: "Catarino",
    categoria: "Material registado em inquéritos nacionais",
    origem: "Angola",
    evidencia:
      "O catálogo do INE/IDREA regista ocorrências de feijão Catarino.",
    observacao:
      "A ocorrência no inquérito não significa, por si só, que seja uma variedade oficialmente recomendada.",
  },
  {
    nome: "Ervilha",
    categoria: "Material de germoplasma",
    origem: "Huambo, Angola",
    evidencia:
      "Foi documentado como landrace num painel de germoplasma de feijão-comum.",
    observacao:
      "É um material de interesse para conservação e investigação; não deve ser confundido com a espécie ervilha.",
  },
  {
    nome: "Cebo",
    categoria: "Material de germoplasma",
    origem: "Cela, Angola",
    evidencia:
      "Foi documentado como material local de Phaseolus vulgaris.",
    observacao:
      "A informação disponível sustenta a conservação e caracterização, mas não uma recomendação agronómica nacional.",
  },
  {
    nome: "Mantega Blanca",
    categoria: "Material de germoplasma",
    origem: "Kibala, Angola",
    evidencia:
      "Foi documentado como landrace num painel de germoplasma.",
    observacao:
      "Necessita de caracterização agronómica e genética adicional antes de qualquer recomendação ampla.",
  },
  {
    nome: "Canario",
    categoria: "Material de germoplasma",
    origem: "Huambo, Angola",
    evidencia:
      "Foi documentado como landrace de Phaseolus vulgaris proveniente do Huambo.",
    observacao:
      "O registo é relevante para conservação da diversidade genética do feijão em Angola.",
  },
];

const imagens = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/40/Freshly_harvested_legumes_in_Bi%C3%A9_province.jpg",
    alt: "Feijão colhido na província do Bié, Angola",
    legenda:
      "Leguminosas recém-colhidas numa escola agrícola da província do Bié.",
    fonte: "Wikimedia Commons — fotografia realizada no Bié, Angola, 2021.",
    href: "https://commons.wikimedia.org/wiki/File:Freshly_harvested_legumes_in_Bi%C3%A9_province.jpg",
  },
  {
    src: "https://cdn.prod.website-files.com/5a8e71e3c7881c000130ff13/5ea29a20a6d93b5ea20ccf58_PHOTO-2019-03-27-14-55-23.jpg",
    alt: "Campo de feijão no Bailundo",
    legenda:
      "Campo de produção de feijão no município do Bailundo, província do Huambo.",
    fonte: "ADRA Angola — Cooperativa Sementes do Planalto.",
    href: "https://www.adra-angola.org/artigos/cooperativa-sementes-do-planalto-no-municipio-do-bailundo-aposta-na-producao-do-feijao",
  },
  {
    src: "https://www.opais.ao/wp-content/uploads/2024/05/camponeses-3.webp",
    alt: "Feijão armazenado em sacos",
    legenda:
      "Grãos de feijão preparados para comercialização e armazenamento.",
    fonte: "O País — reportagem sobre a cadeia de comercialização do feijão em Angola.",
    href: "https://www.opais.ao/economia/camponeses-querem-envolvimento-da-carrinho-agri-para-evitar-saida-de-feijao-de-angola/",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Phaseolus%20vulgaris%20-%201001.jpg?width=1600",
    alt: "Vagens de Phaseolus vulgaris",
    legenda:
      "Vagens de Phaseolus vulgaris em fase de desenvolvimento.",
    fonte: "Wikimedia Commons.",
    href: "https://commons.wikimedia.org/wiki/File:Phaseolus_vulgaris_-_1001.jpg",
  },
];

const fases = [
  {
    fase: "01",
    titulo: "Selecção da área",
    texto:
      "Escolher uma área com boa drenagem, sem encharcamento prolongado e com histórico fitossanitário conhecido. A análise do solo é recomendável antes da instalação.",
  },
  {
    fase: "02",
    titulo: "Preparação do solo",
    texto:
      "Realizar mobilização compatível com o sistema de produção, controlar plantas infestantes e preservar a estrutura e a matéria orgânica do solo.",
  },
  {
    fase: "03",
    titulo: "Semente",
    texto:
      "Utilizar semente identificada, limpa, com boa germinação e origem conhecida. Para produção comercial, deve-se dar preferência a semente de qualidade e legalmente comercializada.",
  },
  {
    fase: "04",
    titulo: "Sementeira",
    texto:
      "A população de plantas deve ser definida de acordo com porte, hábito de crescimento, fertilidade do solo, disponibilidade hídrica e objetivo de produção.",
  },
  {
    fase: "05",
    titulo: "Nutrição",
    texto:
      "A adubação deve ser baseada, sempre que possível, na análise do solo. Fósforo, potássio, cálcio, magnésio e micronutrientes podem ser importantes conforme a fertilidade.",
  },
  {
    fase: "06",
    titulo: "Maneio de infestantes",
    texto:
      "O feijoeiro apresenta elevada sensibilidade à competição durante as fases iniciais. O controlo precoce reduz a competição por água, luz e nutrientes.",
  },
  {
    fase: "07",
    titulo: "Monitorização",
    texto:
      "Inspecionar regularmente folhas, caules, raízes, flores e vagens para detectar pragas, sintomas de doenças, deficiência nutricional ou stress hídrico.",
  },
  {
    fase: "08",
    titulo: "Colheita",
    texto:
      "Para feijão seco, a colheita deve ocorrer quando a maior parte das vagens estiver madura e os grãos tiverem atingido a maturidade fisiológica apropriada.",
  },
];

const pragas = [
  {
    nome: "Gorgulho do feijão",
    nomeCientifico: "Acanthoscelides obtectus",
    dano:
      "Ataca principalmente os grãos armazenados, formando galerias e reduzindo a qualidade comercial e a capacidade germinativa.",
    maneio:
      "Secagem adequada, limpeza dos armazéns, armazenamento protegido e monitorização dos lotes são componentes importantes do maneio.",
  },
  {
    nome: "Mosca-minadora",
    nomeCientifico: "Liriomyza spp.",
    dano:
      "As larvas formam galerias no tecido foliar, reduzindo a área fotossintética quando a infestação é elevada.",
    maneio:
      "Monitorização das folhas, conservação de inimigos naturais e utilização criteriosa de medidas de controlo quando economicamente justificadas.",
  },
  {
    nome: "Pulgões",
    nomeCientifico: "Aphididae",
    dano:
      "Sugam a seiva e podem provocar deformações, redução do vigor e transmissão de alguns vírus.",
    maneio:
      "Monitorizar colónias, observar inimigos naturais e evitar aplicações indiscriminadas de insecticidas.",
  },
  {
    nome: "Ácaros",
    nomeCientifico: "Tetranychidae",
    dano:
      "Podem provocar pontuações, bronzeamento e perda de vigor das folhas, sobretudo em condições quentes e secas.",
    maneio:
      "Monitorizar a face inferior das folhas e evitar condições de stress hídrico sempre que possível.",
  },
];

const doencas = [
  {
    nome: "Antracnose",
    agente: "Colletotrichum lindemuthianum",
    sintomas:
      "Lesões escuras em nervuras, pecíolos, caules e vagens. Pode causar perdas graves quando ocorre em condições favoráveis.",
    prevencao:
      "Utilizar semente sadia, reduzir a disseminação de restos contaminados e escolher materiais com resistência quando disponíveis e comprovados para o ambiente.",
  },
  {
    nome: "Ferrugem",
    agente: "Uromyces appendiculatus",
    sintomas:
      "Pequenas pústulas, geralmente de coloração castanha, nas folhas e outros órgãos verdes.",
    prevencao:
      "Monitorização do campo, maneio integrado e utilização de materiais resistentes quando essa característica estiver documentada.",
  },
  {
    nome: "Podridões radiculares",
    agente: "Complexo de patógenos do solo",
    sintomas:
      "Redução do vigor, escurecimento das raízes, falhas no estabelecimento e murcha.",
    prevencao:
      "Rotação de culturas, drenagem adequada, semente de qualidade e redução do stress da cultura.",
  },
  {
    nome: "Viroses",
    agente: "Diversos vírus",
    sintomas:
      "Mosaicos, cloroses, deformações foliares e redução do crescimento.",
    prevencao:
      "Utilizar semente de qualidade, controlar vectores quando necessário e eliminar plantas severamente afectadas conforme orientação técnica.",
  },
];

const fontes = [
  {
    titulo:
      "MINAGRIF / PDAC — Workshop Técnico sobre Produção de Batata e Feijão Comum",
    descricao:
      "Regista a realização, em Junho de 2026, de um workshop no Huambo sobre feijão comum, novas variedades melhoradas, tecnologias de produção e disponibilidade de semente de qualidade.",
    href: "https://pdac.ao/pdac-apoia-workshop-tecnico-sobre-producao-de-batata-e-feijao-comum-no-huambo/",
  },
  {
    titulo:
      "Revista Científica da Universidade José Eduardo dos Santos — Catarina e Manteiga",
    descricao:
      "Estudo de 2026 realizado em Mbave, Chicala-Choloanga, Huambo, avaliando Catarina e Manteiga sob diferentes tratamentos, incluindo Rhizobium HCC23.",
    href: "https://www.reciujes.com/index.php/reciujes/article/view/299",
  },
  {
    titulo: "INE / IDREA — Registos de culturas em Angola",
    descricao:
      "Os dados do INE/IDREA apresentam diferentes denominações de feijão utilizadas nos agregados inquiridos, incluindo Catarina, Catarino, Manteiga e outras designações locais.",
    href: "https://andine.ine.gov.ao/nada/index.php/catalog/6/variable/F18/V1017?name=S15B01__3",
  },
  {
    titulo:
      "Germoplasma de feijão amarelo — materiais provenientes de Angola",
    descricao:
      "Estudo que documenta materiais de Phaseolus vulgaris provenientes de Huambo, Cela e Kibala, entre outros materiais utilizados em investigação genética.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6266362/",
  },
  {
    titulo:
      "FAO AGRIS — Práticas agronómicas para aumento do rendimento do feijão",
    descricao:
      "Revisão sistemática sobre fertilização, irrigação, densidade, rizóbios, doenças, pragas e maneio da cultura.",
    href: "https://agris.fao.org/search/en/providers/122535/records/65df7d010f3e94b9e5d9164a",
  },
];

export default function FeijaoPage() {
  const [provincia, setProvincia] = useState("Huambo");
  const [pesquisa, setPesquisa] = useState("");

  const materiaisFiltrados = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    if (!termo) return materiais;

    return materiais.filter((item) =>
      `${item.nome} ${item.categoria} ${item.origem} ${item.evidencia}`
        .toLowerCase()
        .includes(termo)
    );
  }, [pesquisa]);

  const provinciaAtual =
    provincias.find((item) => item.nome === provincia) ?? provincias[0];

  // A consulta é automática, mas separa evidência local de materiais que ainda
  // precisam de validação. Não transforma ocorrência em recomendação oficial.
  const orientacaoCultivar =
    provinciaAtual.nome === "Huambo"
      ? {
          nivel: "Evidência local disponível",
          titulo: "Materiais para comparar primeiro",
          materiais: ["Catarina", "Manteiga"],
          motivo:
            "Os dois materiais foram avaliados num ensaio em Mbave, município de Chicala-Choloanga, no Huambo. O resultado desse ensaio não garante superioridade noutras parcelas ou municípios.",
          acao:
            "Confirmar a identidade e a qualidade da semente e comparar os materiais numa parcela-piloto, registando emergência, sanidade, ciclo e rendimento.",
        }
      : provinciaAtual.nome === "Bié"
        ? {
            nivel: "Evidência de produção regional; validação varietal necessária",
            titulo: "Materiais para ensaio local",
            materiais: ["Manteiga", "Catarino", "Catarina"],
            motivo:
              "O feijão é produzido no Planalto Central e há registos nacionais de diferentes tipos de feijão. A informação disponível nesta página não confirma uma cultivar oficialmente recomendada especificamente para toda a província do Bié.",
            acao:
              "Consultar os serviços agrários locais e comparar apenas sementes de origem identificada em ensaios pequenos antes de ampliar a área.",
          }
        : {
            nivel: "Triagem inicial — sem recomendação provincial confirmada",
            titulo: "Materiais documentados para avaliar na província",
            materiais: ["Manteiga", "Catarino", "Catarina"],
            motivo:
              "Estes nomes aparecem em fontes angolanas, mas a página não dispõe de ensaios varietais validados para esta província. A lista é uma base para consulta e ensaio, não uma recomendação automática de plantio.",
            acao:
              "Antes de escolher, confirmar com os serviços agrários do município a adaptação à chuva, temperatura, solo, doenças, duração do ciclo e disponibilidade de semente certificada ou de origem conhecida.",
          };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              AGROINOVA ANGOLA · AGRICULTURA
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Feijão-comum
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 sm:text-xl">
              Conhecimento técnico sobre Phaseolus vulgaris L., com atenção
              para materiais documentados em Angola, qualidade da semente,
              fertilidade do solo, fixação biológica de nitrogénio, maneio,
              fitossanidade, colheita e conservação.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-emerald-700 bg-emerald-900/60 px-4 py-2 text-sm">
                Phaseolus vulgaris L.
              </span>
              <span className="rounded-full border border-emerald-700 bg-emerald-900/60 px-4 py-2 text-sm">
                Leguminosa
              </span>
              <span className="rounded-full border border-emerald-700 bg-emerald-900/60 px-4 py-2 text-sm">
                Segurança alimentar
              </span>
              <span className="rounded-full border border-emerald-700 bg-emerald-900/60 px-4 py-2 text-sm">
                Investigação em Angola
              </span>
            </div>
          </div>
        </div>
      </section>

      <nav className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 py-4 lg:px-8">
          <Link
            href="/agricultura"
            className="text-sm font-medium text-emerald-700 hover:text-emerald-900"
          >
            Agricultura
          </Link>

          <span className="text-stone-400">/</span>

          <span className="text-sm text-stone-600">Feijão</span>

          <Link
            href="/agricultura/milho"
            className="ml-auto text-sm text-stone-600 hover:text-emerald-700"
          >
            Milho
          </Link>

          <Link
            href="/agricultura/soja"
            className="text-sm text-stone-600 hover:text-emerald-700"
          >
            Soja
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              01 · Visão geral
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Uma cultura estratégica para a agricultura angolana
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-stone-700">
              <p>
                O feijão-comum pertence à espécie{" "}
                <em>Phaseolus vulgaris</em> L. e é uma das principais
                leguminosas de grão utilizadas na alimentação humana. O grão
                fornece proteína, carboidratos, fibras, minerais e vitaminas,
                além de possuir importância económica para agricultores
                familiares e comerciais.
              </p>

              <p>
                Em Angola, a cultura possui importância particular em zonas
                produtoras do centro do país. Uma comunicação do Governo
                Provincial do Huambo, publicada em 2026, destaca a relevância
                do feijão para segurança alimentar, nutrição e geração de
                rendimento rural, mencionando materiais como Manteiga,
                Catarina, Calopato, Dondé Yombwa e Catiolo.
              </p>

              <p>
                A AGROINOVA ANGOLA diferencia, nesta página, três categorias:
                materiais documentados na produção ou nos inquéritos
                nacionais, materiais de germoplasma e variedades melhoradas
                cuja recomendação depende de ensaios e certificação. Esta
                distinção evita transformar qualquer nome local encontrado em
                uma recomendação nacional.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <a
              href={imagens[0].href}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagens[0].src}
                alt={imagens[0].alt}
                className="h-80 w-full object-cover"
              />
            </a>

            <div className="p-5">
              <p className="font-semibold text-stone-900">
                Feijão em Angola
              </p>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                {imagens[0].legenda}
              </p>

              <a
                href={imagens[0].href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:underline"
              >
                Ver fotografia e fonte →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            02 · Caracterização agronómica
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Botânica e fisiologia da cultura
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-bold">Família</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Fabaceae, família que inclui diversas leguminosas agrícolas.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-bold">Espécie</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                <em>Phaseolus vulgaris</em> L.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-bold">Produto principal</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Grão seco para alimentação, comercialização e conservação de
                semente.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-bold">Crescimento</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Existem diferentes hábitos de crescimento, desde plantas
                determinadas até materiais de crescimento mais indeterminado.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              03 · Materiais e variedades
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Materiais documentados em Angola
            </h2>

            <p className="mt-3 max-w-3xl text-stone-600">
              A base abaixo reúne materiais que aparecem em fontes angolanas
              ou em estudos de germoplasma. A presença de um nome na base não
              significa que o material esteja oficialmente recomendado para
              todas as províncias.
            </p>
          </div>

          <input
            value={pesquisa}
            onChange={(event) => setPesquisa(event.target.value)}
            placeholder="Pesquisar material..."
            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none ring-emerald-600 focus:ring-2 md:max-w-xs"
          />
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-stone-100 text-stone-700">
                <tr>
                  <th className="px-5 py-4 font-semibold">Material</th>
                  <th className="px-5 py-4 font-semibold">Categoria</th>
                  <th className="px-5 py-4 font-semibold">Origem</th>
                  <th className="px-5 py-4 font-semibold">Evidência</th>
                  <th className="px-5 py-4 font-semibold">Nota técnica</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-stone-200">
                {materiaisFiltrados.map((item) => (
                  <tr key={item.nome} className="align-top">
                    <td className="px-5 py-5 font-bold text-emerald-800">
                      {item.nome}
                    </td>
                    <td className="px-5 py-5 text-stone-700">
                      {item.categoria}
                    </td>
                    <td className="px-5 py-5 text-stone-700">
                      {item.origem}
                    </td>
                    <td className="px-5 py-5 text-stone-700">
                      {item.evidencia}
                    </td>
                    <td className="px-5 py-5 text-stone-600">
                      {item.observacao}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
          <strong>Nota de integridade científica:</strong> nomes como
          Catarina, Manteiga e Catarino são documentados em fontes angolanas,
          mas a AGROINOVA não os apresenta automaticamente como cultivares
          oficialmente recomendadas para todas as 21 províncias. A
          recomendação deve considerar resultados de ensaios, ambiente,
          semente disponível e enquadramento oficial.
        </div>
      </section>

      <section className="bg-stone-100 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            04 · Solos
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Escolha e preparação do solo
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-stone-200 bg-white p-7">
              <h3 className="text-xl font-bold">Drenagem</h3>
              <p className="mt-4 leading-7 text-stone-600">
                O feijoeiro é sensível ao excesso de água. Solos bem drenados
                favorecem o desenvolvimento radicular e reduzem problemas
                associados a patógenos do solo.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-7">
              <h3 className="text-xl font-bold">Fertilidade</h3>
              <p className="mt-4 leading-7 text-stone-600">
                A análise do solo deve orientar a correcção da acidez e o
                fornecimento de fósforo, potássio e outros nutrientes. A
                necessidade de azoto deve ser analisada em conjunto com a
                capacidade de fixação biológica.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-7">
              <h3 className="text-xl font-bold">Matéria orgânica</h3>
              <p className="mt-4 leading-7 text-stone-600">
                A manutenção da matéria orgânica ajuda a melhorar estrutura,
                retenção de água e actividade biológica do solo, devendo ser
                integrada com rotação e conservação do solo.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
            <h3 className="text-xl font-bold text-emerald-950">
              Não existe um único “solo do feijão” para Angola
            </h3>

            <p className="mt-3 max-w-4xl leading-7 text-emerald-900">
              A aptidão depende das propriedades físicas e químicas do solo,
              clima, relevo, disponibilidade de água, histórico da área e
              material genético. Por isso, a AGROINOVA deve evitar afirmar que
              uma província inteira possui um determinado solo adequado sem
              base cartográfica ou análise específica.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
          05 · Semente
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Qualidade da semente
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Pureza",
              "A semente deve apresentar boa pureza física e reduzida presença de sementes de outras espécies.",
            ],
            [
              "Germinação",
              "Lotes com elevada capacidade germinativa favorecem estabelecimento uniforme.",
            ],
            [
              "Sanidade",
              "Sementes contaminadas podem introduzir agentes patogénicos na área de produção.",
            ],
            [
              "Identidade",
              "O produtor deve conhecer a cultivar ou material, origem do lote e finalidade de utilização.",
            ],
          ].map(([titulo, texto]) => (
            <article
              key={titulo}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-bold">{titulo}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {texto}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-stone-200 bg-stone-50 p-7">
          <h3 className="text-xl font-bold">
            Certificação e comercialização
          </h3>

          <p className="mt-3 max-w-4xl leading-7 text-stone-700">
            Para produção comercial, a utilização de semente de qualidade deve
            estar associada às normas nacionais aplicáveis à produção e
            comercialização de sementes. O objectivo é garantir identidade,
            qualidade física, germinação e sanidade compatíveis com a categoria
            da semente.
          </p>
        </div>
      </section>

      <section className="bg-emerald-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
            06 · Fixação biológica de nitrogénio
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Rhizobium e inoculação
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="leading-8 text-emerald-50">
                O feijoeiro pode estabelecer associação simbiótica com bactérias
                do grupo dos rizóbios, formando nódulos nas raízes onde ocorre
                fixação biológica de nitrogénio. A eficiência desta associação
                depende do genótipo, da estirpe bacteriana, do solo, do fósforo,
                da acidez, da disponibilidade de água e de outros factores.
              </p>

              <p className="mt-5 leading-8 text-emerald-50">
                Em Angola, esta área está a receber investigação. Um estudo
                publicado em 2026 avaliou as variedades Catarina e Manteiga em
                Mbave, Chicala-Choloanga, utilizando a estirpe HCC23 de
                Rhizobium. A investigação encontrou maior nodulação em Catarina
                sob inoculação com HCC23, mas os resultados devem ser
                interpretados como resultados experimentais locais, e não como
                uma recomendação universal para Angola.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-800 bg-emerald-900 p-7">
              <h3 className="text-xl font-bold">Boas práticas</h3>

              <ul className="mt-5 space-y-4 text-sm leading-7 text-emerald-50">
                <li>
                  Avaliar a necessidade de inoculação em função do histórico da
                  área.
                </li>
                <li>
                  Utilizar inoculante compatível com a cultura e com estirpe
                  comprovadamente eficiente.
                </li>
                <li>
                  Evitar exposição do inoculante a calor excessivo e radiação
                  solar directa.
                </li>
                <li>
                  Respeitar as instruções técnicas do produto utilizado.
                </li>
                <li>
                  Avaliar a nodulação e o desenvolvimento da cultura após a
                  emergência.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
          07 · Maneio
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Sistema de produção
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {fases.map((item) => (
            <article
              key={item.fase}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-5">
                <div className="shrink-0 text-3xl font-bold text-emerald-700">
                  {item.fase}
                </div>

                <div>
                  <h3 className="text-lg font-bold">{item.titulo}</h3>
                  <p className="mt-3 leading-7 text-stone-600">
                    {item.texto}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            08 · Pragas
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Principais grupos a monitorizar
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {pragas.map((praga) => (
              <article
                key={praga.nome}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-7"
              >
                <h3 className="text-xl font-bold">{praga.nome}</h3>

                <p className="mt-1 text-sm italic text-emerald-700">
                  {praga.nomeCientifico}
                </p>

                <div className="mt-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                    Danos
                  </p>

                  <p className="mt-2 leading-7 text-stone-700">
                    {praga.dano}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                    Maneio
                  </p>

                  <p className="mt-2 leading-7 text-stone-700">
                    {praga.maneio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            09 · Doenças
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Fitossanidade do feijoeiro
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-left">
                <thead className="bg-stone-900 text-white">
                  <tr>
                    <th className="px-5 py-4">Doença</th>
                    <th className="px-5 py-4">Agente</th>
                    <th className="px-5 py-4">Sintomas</th>
                    <th className="px-5 py-4">Prevenção e maneio</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-stone-200">
                  {doencas.map((doenca) => (
                    <tr key={doenca.nome} className="align-top">
                      <td className="px-5 py-5 font-bold">
                        {doenca.nome}
                      </td>

                      <td className="px-5 py-5 text-sm italic text-stone-600">
                        {doenca.agente}
                      </td>

                      <td className="px-5 py-5 text-sm leading-6 text-stone-700">
                        {doenca.sintomas}
                      </td>

                      <td className="px-5 py-5 text-sm leading-6 text-stone-700">
                        {doenca.prevencao}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              10 · Colheita
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Colheita e pós-colheita
            </h2>

            <div className="mt-6 space-y-5 text-stone-700">
              <p className="leading-7">
                Para feijão destinado a grão seco, a colheita deve considerar
                a maturação das vagens e o teor de humidade dos grãos. A
                colheita demasiado precoce aumenta o custo e pode resultar em
                grãos imaturos; demasiado tardia pode aumentar perdas por
                debulha natural, chuva ou ataque de pragas.
              </p>

              <p className="leading-7">
                Depois da colheita, o feijão deve ser limpo, seco e armazenado
                em condições que reduzam humidade, infestação por insectos e
                contaminação. O controlo do gorgulho é especialmente importante
                na conservação de grãos.
              </p>

              <p className="leading-7">
                O armazenamento deve proteger o produto da humidade e permitir
                monitorização periódica. Grãos destinados a semente exigem
                cuidados adicionais para preservar germinação e identidade do
                lote.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold">
              Indicadores para avaliar um lote
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Humidade adequada para armazenamento",
                "Ausência de insectos vivos",
                "Baixa presença de grãos partidos",
                "Ausência de sinais visíveis de fungos",
                "Cor e aspecto compatíveis com o material",
                "Boa qualidade física",
                "Identificação da origem do lote",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-stone-100 pb-4 text-sm text-stone-700 last:border-0"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
            11 · Galeria
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Feijão e agricultura angolana
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {imagens.map((imagem) => (
              <article
                key={imagem.src}
                className="overflow-hidden rounded-2xl border border-stone-700 bg-stone-800"
              >
                <a
                  href={imagem.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-72 w-full object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </a>

                <div className="p-5">
                  <p className="font-semibold">{imagem.legenda}</p>

                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    {imagem.fonte}
                  </p>

                  <a
                    href={imagem.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-emerald-300 hover:underline"
                  >
                    Abrir fonte da fotografia →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
          12 · Consulta por província
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Plano agronómico do feijão por província
        </h2>

        <p className="mt-4 max-w-4xl leading-7 text-stone-600">
          Seleccione uma das 21 províncias para consultar orientações específicas
          de planeamento e consultar automaticamente materiais de feijão
          documentados para avaliação. A indicação distingue evidência local
          de triagem preliminar e não declara uma recomendação oficial sem fonte
          provincial verificável. Confirme a escolha com os serviços agrários
          e com as condições reais da parcela.
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
              Consulta automática
            </span>
            <span className="text-sm font-semibold text-stone-600">
              {orientacaoCultivar.nivel}
            </span>
          </div>
          <h3 className="mt-3 text-xl font-bold text-emerald-950">
            {orientacaoCultivar.titulo} · {provinciaAtual.nome}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {orientacaoCultivar.materiais.map((nome) => (
              <span
                key={nome}
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900"
              >
                {nome}
              </span>
            ))}
          </div>
          <p className="mt-4 leading-7 text-stone-700">
            {orientacaoCultivar.motivo}
          </p>
          <div className="mt-4 rounded-xl bg-stone-50 p-4">
            <p className="text-sm font-bold text-stone-800">Próxima acção recomendada</p>
            <p className="mt-1 text-sm leading-6 text-stone-600">
              {orientacaoCultivar.acao}
            </p>
          </div>
          <p className="mt-4 text-xs leading-5 text-stone-500">
            Importante: a selecção muda automaticamente com a província, mas não substitui uma recomendação oficial do IIA/MINAGRIF nem um ensaio local. Os nomes podem designar tipos comerciais ou materiais locais; confirmar a identidade da semente antes da compra.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr]">
          <div>
            <label
              htmlFor="provincia"
              className="text-sm font-semibold text-stone-700"
            >
              Seleccionar província
            </label>

            <select
              id="provincia"
              value={provincia}
              onChange={(event) => setProvincia(event.target.value)}
              className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
            >
              {provincias.map((item) => (
                <option key={item.nome} value={item.nome}>
                  {item.nome}
                </option>
              ))}
            </select>

            <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-5">
              <p className="text-sm font-semibold text-stone-800">
                Como usar esta informação
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-stone-600">
                <li>Confirmar as condições da parcela e a origem da semente.</li>
                <li>Registar a data de sementeira, chuva, maneio e colheita.</li>
                <li>Comparar resultados de campo antes de recomendar um material.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              {provinciaAtual.regiao}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-emerald-950">
              Feijão em {provinciaAtual.nome}
            </h3>

            <p className="mt-4 leading-7 text-emerald-950">
              {provinciaAtual.contexto}
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-100 bg-white p-5">
                <h4 className="font-bold text-emerald-900">Época e planeamento</h4>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  {provinciaAtual.planeamento}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-white p-5">
                <h4 className="font-bold text-emerald-900">Solo e fertilidade</h4>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  {provinciaAtual.solo}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-white p-5">
                <h4 className="font-bold text-emerald-900">Gestão da água</h4>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  {provinciaAtual.agua}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-white p-5">
                <h4 className="font-bold text-emerald-900">Prioridade técnica</h4>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  {provinciaAtual.atencao}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-100/70 p-5">
              <h4 className="font-bold text-emerald-950">Base e nível de evidência</h4>
              <p className="mt-2 text-sm leading-7 text-emerald-950">
                {provinciaAtual.evidencia}
              </p>
            </div>

            <p className="mt-5 text-sm leading-6 text-emerald-900">
              Nota: esta consulta não classifica automaticamente a província
              como “apta” ou “não apta”. A aptidão deve ser determinada à escala
              da parcela com informação edafoclimática e agronómica adequada.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            13 · Investigação
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            O que a investigação angolana está a estudar
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-bold">
                Variedades melhoradas
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                O workshop realizado pelo IIA e PDAC no Huambo em 2026 destacou
                novas variedades melhoradas e tecnologias de produção do
                feijão comum.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-bold">
                Fixação biológica
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                O estudo realizado em Chicala-Choloanga demonstra o interesse
                científico em estirpes de Rhizobium adaptadas ou avaliadas em
                condições locais.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-bold">
                Semente de qualidade
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                A disponibilidade e distribuição de semente de qualidade são
                questões centrais para elevar a produtividade e a
                competitividade da cadeia do feijão.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
          14 · Fontes
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Fontes técnicas e científicas
        </h2>

        <div className="mt-8 space-y-4">
          {fontes.map((fonte) => (
            <a
              key={fonte.titulo}
              href={fonte.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-emerald-400 hover:shadow-sm"
            >
              <h3 className="font-bold text-emerald-800">
                {fonte.titulo}
              </h3>

              <p className="mt-2 max-w-4xl text-sm leading-7 text-stone-600">
                {fonte.descricao}
              </p>

              <span className="mt-3 inline-block text-sm font-medium text-emerald-700">
                Abrir fonte →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-stone-500">
                Navegação da agricultura
              </p>

              <p className="mt-1 font-bold">
                Continuar a biblioteca de culturas da AGROINOVA ANGOLA
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/agricultura"
                className="rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold hover:border-emerald-500"
              >
                Todas as culturas
              </Link>

              <Link
                href="/agricultura/soja"
                className="rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
              >
                Próxima: Soja
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 text-emerald-100">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm leading-7 lg:px-8">
          <strong className="text-white">Nota de integridade da AGROINOVA:</strong>{" "}
          os conteúdos apresentados distinguem informação oficial, resultados
          de investigação, materiais de germoplasma e referências agronómicas
          internacionais. Dados experimentais obtidos numa província ou país
          não são automaticamente transformados em recomendações para todo o
          território angolano.
        </div>
      </section>
    </main>
  );
}