"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type EspecieId =
  | "bovinos"
  | "suinos"
  | "caprinos"
  | "ovinos"
  | "galinhas"
  | "patos"
  | "perus"
  | "codornizes"
  | "equinos"
  | "asininos"
  | "bubalinos"
  | "coelhos"
  | "apicultura"
  | "aquacultura"
  | "helicicultura";
  type Secao = {
  titulo: string;
  texto: string;
  pontos?: string[];
};

type Tema = {
  id: string;
  nome: string;
  descricao: string;
};

type Especie = {
  id: EspecieId;
  nome: string;
  singular: string;
  grupo: string;
  imagem: string;
  imagemFonte: string;
  resumo: string;
  importancia: string;
  realidade: string;
  secoes: Secao[];
  temas: Tema[];
};

type StatusRota = "disponivel" | "em-preparacao";

type RotaTema = {
  href: string;
  status: StatusRota;
};
/* ============================================================
   PROVÍNCIAS
============================================================ */

const provincias = [
  "Angola",
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
  "Cubango",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
  "Huambo",
  "Huíla",
  "Icolo e Bengo",
  "Luanda",
  "Lunda Norte",
  "Lunda Sul",
  "Malanje",
  "Moxico",
  "Moxico Leste",
  "Namibe",
  "Uíge",
  "Zaire",
];

/* ============================================================
   FINALIDADES
============================================================ */

const finalidades = [
  "Produção de carne",
  "Produção de leite",
  "Produção de ovos",
  "Reprodução",
  "Criação familiar",
  "Produção comercial",
  "Animal de trabalho",
  "Produção de mel",
  "Aquacultura",
];

/* ============================================================
   ESPÉCIES
============================================================ */

const especies: Especie[] = [
  {
    id: "bovinos",
    nome: "Bovinos",
    singular: "bovino",
    grupo: "Grandes ruminantes",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle%20in%20Angola.jpg",
    imagemFonte: "Wikimedia Commons — Cattle in Angola",
    resumo:
      "Os bovinos constituem um dos principais grupos de animais de interesse económico, alimentar e social nos sistemas pecuários de Angola.",
    importancia:
      "A produção bovina está relacionada com carne, leite, reprodução, tracção animal e conservação de recursos genéticos adaptados. A escolha dos animais deve considerar ambiente, alimentação, disponibilidade de Água, sanidade, finalidade produtiva e capacidade de maneio.",
    realidade:
      "Em Angola existem sistemas de criação muito distintos. Os recursos genéticos locais, incluindo populações associadas ao grupo Sanga, possuem interesse para adaptação e conservação. Estudos recentes têm analisado a diversidade genética de bovinos nativos no sul do país.",
    temas: [
      {
        id: "racas",
        nome: "Raças e genética",
        descricao: "Recursos genéticos, adaptação e selecção.",
      },
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Pastagens, forragens e suplementação.",
      },
      {
        id: "instalacoes",
        nome: "Instalações",
        descricao: "Abrigos, currais, sombra e maneio.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Prevenção, vigilância e controlo sanitário.",
      },
      {
        id: "reproducao",
        nome: "Reprodução",
        descricao: "Selecção, reprodução e maneio reprodutivo.",
      },
      {
        id: "agua",
        nome: "Água",
        descricao: "Disponibilidade e qualidade da Água.",
      },
    ],
    secoes: [
      {
        titulo: "Sistemas de produção",
        texto:
          "A produção bovina pode assumir diferentes formas, desde sistemas extensivos baseados em pastoreio até sistemas mais intensivos. A definição do sistema deve considerar disponibilidade de terra, Água, alimentação, mão de obra, mercado e objectivos produtivos.",
        pontos: [
          "Definir a finalidade económica antes da aquisição dos animais.",
          "Avaliar os recursos naturais disponíveis na exploração.",
          "Registar origem, reprodução, sanidade e desempenho dos animais.",
        ],
      },
      {
        titulo: "Alimentação e pastagem",
        texto:
          "A alimentação determina grande parte do desempenho produtivo e reprodutivo. A utilização racional de pastagens deve considerar disponibilidade sazonal de forragem, composição vegetal, carga animal e acesso é Água.",
        pontos: [
          "Avaliar a disponibilidade de pastagem ao longo do ano.",
          "Planear reservas de forragem para a época seca.",
          "Evitar sobrepastoreio e degradação da pastagem.",
        ],
      },
      {
        titulo: "Água",
        texto:
          "A Água deve estar disponível de forma regular e em condições adequadas de qualidade. A distância entre os animais e os pontos de abeberamento influencia o comportamento de pastoreio e a utilização das áreas da exploração.",
      },
      {
        titulo: "Sanidade",
        texto:
          "A saúde do efectivo depende de prevenção, observação diária, biossegurança, controlo de parasitas, vacinação quando indicada pelas autoridades e acompanhamento veterinário. Sinais clínicos devem ser avaliados por profissional habilitado.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A eficiência reprodutiva depende da condição corporal, nutrição, sanidade, idade, genética e maneio. O acompanhamento de cobrições, partos, abortos e intervalo entre partos permite melhorar a tomada de decisão.",
      },
      {
        titulo: "Bezerros",
        texto:
          "O período neonatal é decisivo para a sobrevivência e desenvolvimento futuro. O acompanhamento da ingestão de colostro, higiene do parto, umbigo, alimentação e crescimento deve fazer parte do maneio.",
      },
      {
        titulo: "época seca",
        texto:
          "A redução da disponibilidade de pastagem exige planeamento antecipado. A conservação de forragens, gestão da Água e selecção dos animais que permanecerão no efectivo são medidas importantes.",
      },
      {
        titulo: "época chuvosa",
        texto:
          "A época chuvosa altera a disponibilidade de pastagem e as condições ambientais. A maior disponibilidade de alimento não elimina a necessidade de vigilância sanitária, controlo de parasitas e gestão das instalações.",
      },
      {
        titulo: "Registos da exploração",
        texto:
          "Registos simples permitem transformar observações de campo em informação útil para gestão. Cada animal ou lote deve, quando possível, possuir identificação e histórico básico.",
        pontos: [
          "Nascimento.",
          "Origem.",
          "Reprodução.",
          "Tratamentos.",
          "Mortalidade.",
          "Peso ou indicadores de crescimento.",
          "Produção de leite quando aplicável.",
        ],
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A pecuária bovina angolana apresenta diversidade regional e diferentes níveis de tecnificação. Não é adequado aplicar uma única recomendação a todas as províncias. A orientação deve partir das condições reais da exploração.",
      },
    ],
  },

  {
    id: "suinos",
    nome: "Suínos",
    singular: "suíno",
    grupo: "Monogástricos",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pig.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "A suinicultura exige atenção integrada é genética, nutrição, instalações, reprodução, sanidade e biossegurança.",
    importancia:
      "Os suínos apresentam potencial para produção de carne em sistemas familiares e comerciais. A eficiência depende da alimentação equilibrada, Água, controlo térmico, higiene, prevenção de doenças e organização dos lotes.",
    realidade:
      "Em Angola, a suinicultura pode assumir diferentes escalas. A melhoria da biossegurança e do maneio é particularmente importante para reduzir perdas e proteger os investimentos dos produtores.",
    temas: [
      {
        id: "racas",
        nome: "Raças e genética",
        descricao: "Escolha genética e objectivo produtivo.",
      },
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Nutrição por fase de produção.",
      },
      {
        id: "instalacoes",
        nome: "Instalações",
        descricao: "Pisos, ventilação, higiene e conforto.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Prevenção e vigilância sanitária.",
      },
      {
        id: "agua",
        nome: "Água",
        descricao: "Acesso contínuo e qualidade.",
      },
    ],
    secoes: [
      {
        titulo: "Escolha dos animais",
        texto:
          "A selecção deve considerar saúde, conformação, origem, histórico produtivo e objectivo do sistema. A compra de animais sem informação sanitária aumenta o risco de introdução de doenças.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve acompanhar a fase fisiológica e produtiva. Crescimento, gestação, lactação e acabamento possuem necessidades distintas.",
      },
      {
        titulo: "Instalações",
        texto:
          "As instalações devem proporcionar ventilação, drenagem, higiene, espaço adequado e facilidade de limpeza. O excesso de calor pode afectar consumo, crescimento e reprodução.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução exige identificação das fêmeas, acompanhamento de cio, cobrição, gestação e parto. O histórico reprodutivo deve orientar a selecção dos animais.",
      },
      {
        titulo: "Biossegurança",
        texto:
          "A biossegurança reduz a probabilidade de entrada e disseminação de agentes infecciosos. Quarentena, higiene, controlo de visitantes e separação de lotes são componentes importantes.",
      },
      {
        titulo: "Leitões",
        texto:
          "Os leitões exigem atenção especial durante os primeiros dias de vida. Temperatura, colostro, higiene, alimentação e observação devem ser cuidadosamente acompanhados.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Programas sanitários devem ser definidos com profissionais veterinários e considerando as doenças relevantes na região.",
      },
      {
        titulo: "Comercialização",
        texto:
          "A produção deve estar ligada ao mercado. Custos de alimentação, mortalidade, crescimento, preço de venda e transporte devem entrar no planeamento económico.",
      },
      {
        titulo: "época quente",
        texto:
          "Temperaturas elevadas aumentam o risco de stress térmico. Ventilação, disponibilidade de Água e redução de factores de stress são fundamentais.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A suinicultura deve ser adaptada é escala da exploração, disponibilidade de alimentos e condições de mercado. Não existe um único modelo de produção adequado para todas as regiões.",
      },
    ],
  },

  {
    id: "caprinos",
    nome: "Caprinos",
    singular: "caprino",
    grupo: "Pequenos ruminantes",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Goat.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "Os caprinos apresentam importância para sistemas familiares e comerciais devido é capacidade de utilização de diferentes recursos alimentares.",
    importancia:
      "A criação caprina pode contribuir para carne, reprodução e rendimento familiar. A produtividade depende da alimentação, controlo de parasitas, Água, abrigo e selecção dos animais.",
    realidade:
      "As condições ambientais de Angola variam significativamente. Sistemas de criação devem considerar disponibilidade de pastagem, época seca, pressão parasitária e acesso aos mercados.",
    temas: [
      {
        id: "racas",
        nome: "Raças e genética",
        descricao: "Selecção e adaptação dos animais.",
      },
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Pastoreio, arbustos e suplementação.",
      },
      {
        id: "instalacoes",
        nome: "Instalações",
        descricao: "Abrigos, pisos e higiene.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Parasitas e prevenção.",
      },
      {
        id: "cabritos",
        nome: "Cabritos",
        descricao: "Cuidados com animais jovens.",
      },
      {
        id: "pastoreio",
        nome: "Pastoreio",
        descricao: "Gestão das áreas de alimentação.",
      },
    ],
    secoes: [
      {
        titulo: "Sistema de criação",
        texto:
          "A criação pode ser extensiva, semi-intensiva ou mais intensiva. A escolha depende dos recursos disponíveis e da finalidade produtiva.",
      },
      {
        titulo: "Alimentação",
        texto:
          "Caprinos utilizam uma diversidade de plantas, mas isso não significa que a alimentação possa ser deixada sem gestão. é necessário acompanhar disponibilidade e qualidade dos alimentos.",
      },
      {
        titulo: "Água",
        texto:
          "A Água deve estar disponível em quantidade e qualidade adequadas. Em períodos quentes e secos, a gestão da Água torna-se ainda mais importante.",
      },
      {
        titulo: "Abrigo",
        texto:
          "Abrigos devem proteger contra chuva, vento, radiação solar excessiva e humidade. O piso deve permitir drenagem e facilitar a higiene.",
      },
      {
        titulo: "Parasitas",
        texto:
          "Os parasitas internos e externos podem reduzir crescimento, reprodução e sobrevivência. O controlo deve basear-se em diagnóstico e orientação técnica, evitando uso indiscriminado de medicamentos.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A selecção de reprodutores, condição corporal e registo dos partos ajudam a melhorar progressivamente o efectivo.",
      },
      {
        titulo: "Cabritos",
        texto:
          "A sobrevivência dos cabritos depende do colostro, higiene, alimentação, abrigo e acompanhamento do crescimento.",
      },
      {
        titulo: "Pastoreio",
        texto:
          "A gestão do pastoreio reduz pressão sobre a vegetação e contribui para disponibilidade alimentar ao longo do ano.",
      },
      {
        titulo: "época seca",
        texto:
          "A preparação para a época seca deve começar enquanto ainda existe disponibilidade de recursos. Reservas alimentares e gestão do efectivo são fundamentais.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "Os caprinos possuem interesse particular em sistemas de menor escala, mas a produtividade não deve ser assumida como automática. O maneio determina grande parte dos resultados.",
      },
    ],
  },

  {
    id: "ovinos",
    nome: "Ovinos",
    singular: "ovino",
    grupo: "Pequenos ruminantes",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sheep.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "A ovinocultura combina produção de carne, reprodução e utilização de pastagens em diferentes sistemas.",
    importancia:
      "A produção ovina requer equilíbrio entre alimentação, reprodução, sanidade, pastoreio e instalações. O maneio adequado dos cordeiros é determinante para a produtividade.",
    realidade:
      "A adaptação do sistema às condições locais é essencial. O produtor deve observar disponibilidade de pastagem, qualidade do abrigo, Água e pressão de parasitas.",
    temas: [
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Pastagens, forragens e suplementos.",
      },
      {
        id: "pastoreio",
        nome: "Pastoreio",
        descricao: "Gestão do uso das áreas.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Prevenção e vigilância.",
      },
      {
        id: "reproducao",
        nome: "Reprodução",
        descricao: "Selecção e maneio reprodutivo.",
      },
      {
        id: "cordeiros",
        nome: "Cordeiros",
        descricao: "Maneio dos animais jovens.",
      },
      {
        id: "abrigo",
        nome: "Abrigo",
        descricao: "Protecção e higiene.",
      },
    ],
    secoes: [
      {
        titulo: "Escolha do efectivo",
        texto:
          "A selecção deve privilegiar animais saudáveis, adaptados ao sistema e com características produtivas compatíveis com o objectivo da exploração.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A qualidade da alimentação influencia crescimento, reprodução, produção e resistência a doenças.",
      },
      {
        titulo: "Pastoreio",
        texto:
          "A gestão da lotação e do tempo de utilização das áreas ajuda a conservar os recursos forrageiros.",
      },
      {
        titulo: "Sanidade",
        texto:
          "A prevenção sanitária deve incluir observação dos animais, higiene, controlo de parasitas e assistência veterinária.",
      },
      {
        titulo: "Reprodução",
        texto:
          "O acompanhamento dos reprodutores, condição corporal e partos permite seleccionar animais mais eficientes.",
      },
      {
        titulo: "Cordeiros",
        texto:
          "O nascimento exige atenção é ingestão de colostro, higiene, alimentação e protecção contra condições ambientais adversas.",
      },
      {
        titulo: "Abrigo",
        texto:
          "O abrigo deve ser seco, ventilado e protegido contra condições climáticas adversas.",
      },
      {
        titulo: "Água",
        texto:
          "O acesso regular é Água é essencial para o metabolismo, consumo alimentar e termorregulação.",
      },
      {
        titulo: "época seca",
        texto:
          "A produção deve ser planeada com reservas alimentares e controlo da carga animal.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A ovinocultura pode integrar sistemas familiares e comerciais, mas exige adaptação às condições ambientais e económicas de cada exploração.",
      },
    ],
  },

  {
    id: "galinhas",
    nome: "Galinhas",
    singular: "galinha",
    grupo: "Avicultura",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "A avicultura exige controlo rigoroso de alimentação, Água, ambiente, higiene e biossegurança.",
    importancia:
      "A criação de galinhas pode estar orientada para carne ou ovos. A eficiência depende da genética, qualidade da ração, Água, temperatura, ventilação, iluminação, densidade e prevenção sanitária.",
    realidade:
      "A avicultura angolana inclui diferentes escalas de produção. Sistemas comerciais necessitam de planeamento de custos e biossegurança, enquanto sistemas familiares requerem soluções ajustadas aos recursos locais.",
    temas: [
      {
        id: "corte",
        nome: "Frango de corte",
        descricao: "Maneio orientado para produção de carne.",
      },
      {
        id: "poedeiras",
        nome: "Poedeiras",
        descricao: "Produção e gestão de ovos.",
      },
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Nutrição por fase.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Prevenção e vigilância.",
      },
      {
        id: "instalacoes",
        nome: "Instalações",
        descricao: "Ambiente, ventilação e higiene.",
      },
      {
        id: "biosseguranca",
        nome: "Biossegurança",
        descricao: "Prevenção da entrada de doenças.",
      },
    ],
    secoes: [
      {
        titulo: "Finalidade produtiva",
        texto:
          "Antes de iniciar a produção é necessário definir se o objectivo é carne, ovos, reprodução ou criação familiar.",
      },
      {
        titulo: "Pintos",
        texto:
          "Os primeiros dias exigem atenção especial é temperatura, Água, alimentação, higiene e observação.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A ração deve corresponder é fase produtiva. Alterações bruscas e alimentação de qualidade inadequada podem afectar crescimento e produção.",
      },
      {
        titulo: "Água",
        texto:
          "A Água deve estar continuamente disponível, limpa e protegida de contaminação.",
      },
      {
        titulo: "Ventilação",
        texto:
          "A ventilação reduz humidade e acumulação de gases, contribuindo para o conforto e a saúde das aves.",
      },
      {
        titulo: "Biossegurança",
        texto:
          "A entrada de pessoas, equipamentos, animais e materiais deve ser controlada para reduzir riscos sanitários.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Programas de prevenção devem ser definidos com orientação veterinária e de acordo com as doenças relevantes.",
      },
      {
        titulo: "Poedeiras",
        texto:
          "A produção de ovos depende de genética, alimentação, Água, iluminação, idade e estado sanitário.",
      },
      {
        titulo: "Frango de corte",
        texto:
          "O crescimento deve ser acompanhado por indicadores de consumo, mortalidade e ganho de peso.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "Os custos de alimentação, energia, pintos, medicamentos, transporte e comercialização devem ser considerados no planeamento da actividade.",
      },
    ],
  },

  {
    id: "patos",
    nome: "Patos",
    singular: "pato",
    grupo: "Avicultura",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Duck.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "A criação de patos requer atenção é alimentação, Água, higiene, instalações e controlo sanitário.",
    importancia:
      "Os patos podem ser utilizados para carne, ovos e reprodução. O acesso é Água não significa necessariamente que todas as explorações precisem de grandes superfícies de Água.",
    realidade:
      "O sistema deve ser dimensionado de acordo com os recursos disponíveis, evitando excesso de humidade e contaminação.",
    temas: [
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Nutrição e crescimento.",
      },
      {
        id: "agua",
        nome: "Água",
        descricao: "Acesso e qualidade.",
      },
      {
        id: "instalacoes",
        nome: "Instalações",
        descricao: "Abrigos e higiene.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Prevenção de doenças.",
      },
      {
        id: "reproducao",
        nome: "Reprodução",
        descricao: "Matrizes e incubação.",
      },
      {
        id: "maneio",
        nome: "Maneio",
        descricao: "Gestão diária do efectivo.",
      },
    ],
    secoes: [
      {
        titulo: "Finalidade",
        texto:
          "Definir carne, ovos ou reprodução antes da escolha dos animais e do sistema.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A dieta deve fornecer energia, proteína, minerais e vitaminas adequadas é fase produtiva.",
      },
      {
        titulo: "Água",
        texto:
          "A Água é essencial, mas instalações permanentemente molhadas favorecem problemas sanitários.",
      },
      {
        titulo: "Instalações",
        texto:
          "O abrigo deve permitir drenagem, limpeza, protecção climática e acesso adequado aos equipamentos.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Higiene, controlo de visitantes, Água limpa e observação diária reduzem riscos.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A selecção das matrizes e o controlo dos ovos férteis são importantes para a produção de descendentes.",
      },
      {
        titulo: "Patinhos",
        texto:
          "Os animais jovens precisam de protecção térmica, alimentação adequada e Água limpa.",
      },
      {
        titulo: "Mortalidade",
        texto:
          "A mortalidade deve ser registada e investigada, sobretudo quando ocorre aumento inesperado.",
      },
      {
        titulo: "Comercialização",
        texto:
          "A actividade deve ser ligada a um mercado real e a custos de produção conhecidos.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A produção deve ser ajustada aos recursos hídricos, alimentação e mercado local.",
      },
    ],
  },

  {
    id: "perus",
    nome: "Perus",
    singular: "peru",
    grupo: "Avicultura",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "A criação de perus apresenta exigências específicas de crescimento, alimentação, ambiente e sanidade.",
    importancia:
      "A actividade pode constituir alternativa comercial, mas exige planeamento porque os perus apresentam necessidades diferentes das galinhas.",
    realidade:
      "Antes de investir é necessário avaliar mercado, disponibilidade de pintos, alimentação, instalações e assistência sanitária.",
    temas: [
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Nutrição por fase.",
      },
      {
        id: "instalacoes",
        nome: "Instalações",
        descricao: "Espaço, ventilação e higiene.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Prevenção e controlo.",
      },
      {
        id: "crescimento",
        nome: "Crescimento",
        descricao: "Acompanhamento do desempenho.",
      },
      {
        id: "reproducao",
        nome: "Reprodução",
        descricao: "Matrizes e incubação.",
      },
      {
        id: "mercado",
        nome: "Mercado",
        descricao: "Planeamento comercial.",
      },
    ],
    secoes: [
      {
        titulo: "Planeamento",
        texto:
          "A produção deve começar pela análise de mercado, disponibilidade de alimentação e capacidade de maneio.",
      },
      {
        titulo: "Alimentação",
        texto:
          "As exigências nutricionais variam ao longo do crescimento e devem ser acompanhadas por formulação adequada.",
      },
      {
        titulo: "Instalações",
        texto:
          "Espaço, ventilação, higiene e protecção climática são essenciais.",
      },
      {
        titulo: "Sanidade",
        texto:
          "A prevenção é mais eficiente do que responder apenas depois do aparecimento de doenças.",
      },
      {
        titulo: "Crescimento",
        texto:
          "Peso, consumo, mortalidade e uniformidade do lote devem ser acompanhados.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução requer selecção de matrizes e controlo dos ovos e incubação.",
      },
      {
        titulo: "Manejo dos jovens",
        texto:
          "A fase inicial exige controlo rigoroso de temperatura, Água e alimentação.",
      },
      {
        titulo: "Mercado",
        texto:
          "A produção deve ser sincronizada com a procura e capacidade de venda.",
      },
      {
        titulo: "Biossegurança",
        texto:
          "A separação entre lotes e controlo de entrada de pessoas e equipamentos reduz riscos.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A viabilidade deve ser avaliada localmente antes de expansão da actividade.",
      },
    ],
  },

  {
    id: "codornizes",
    nome: "Codornizes",
    singular: "codorniz",
    grupo: "Avicultura",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Common%20quail.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "A coturnicultura apresenta interesse para produção de ovos e carne em sistemas de pequena e média escala.",
    importancia:
      "As codornizes apresentam ciclo produtivo relativamente curto e podem ser criadas em espaços menores, mas continuam dependentes de alimentação, higiene, Água, ventilação e mercado.",
    realidade:
      "É necessário confirmar a disponibilidade de material genético, alimentação e mercado antes do investimento.",
    temas: [
      {
        id: "instalacoes",
        nome: "Instalações",
        descricao: "Gaiolas, ambiente e higiene.",
      },
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Necessidades nutricionais.",
      },
      {
        id: "ovos",
        nome: "Produção de ovos",
        descricao: "Maneio das poedeiras.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Prevenção e higiene.",
      },
      {
        id: "reproducao",
        nome: "Reprodução",
        descricao: "Matrizes e incubação.",
      },
      {
        id: "mercado",
        nome: "Mercado",
        descricao: "Venda e viabilidade económica.",
      },
    ],
    secoes: [
      {
        titulo: "Dimensionamento",
        texto:
          "A escala deve ser compatível com capacidade de alimentação, limpeza, mão de obra e venda.",
      },
      {
        titulo: "Instalações",
        texto:
          "As estruturas devem proteger as aves e permitir limpeza, ventilação e recolha dos ovos.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A qualidade da dieta influencia crescimento, produção de ovos e reprodução.",
      },
      {
        titulo: "Produção de ovos",
        texto:
          "A produção depende da genética, idade, nutrição, ambiente e estado sanitário.",
      },
      {
        titulo: "Sanidade",
        texto:
          "A higiene diária e o controlo de densidade reduzem problemas.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A produção de pintos exige ovos férteis, incubação adequada e selecção das matrizes.",
      },
      {
        titulo: "Temperatura",
        texto:
          "As aves jovens são particularmente sensíveis às condições térmicas.",
      },
      {
        titulo: "Higiene",
        texto:
          "A remoção de resíduos e limpeza dos equipamentos devem fazer parte da rotina.",
      },
      {
        titulo: "Mercado",
        texto:
          "A procura local deve ser estudada antes de aumentar a produção.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A actividade pode funcionar como alternativa de pequena escala quando existe mercado e capacidade de maneio.",
      },
    ],
  },

  {
    id: "equinos",
    nome: "Equinos",
    singular: "equino",
    grupo: "Animais de trabalho",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Horse.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "Os equinos podem desempenhar funções de trabalho, transporte, reprodução e actividades desportivas.",
    importancia:
      "A saúde locomotora, alimentação, Água, cascos, descanso e equipamento determinam a capacidade de trabalho e bem-estar.",
    realidade:
      "Em sistemas onde os equinos desempenham trabalho, o maneio deve equilibrar utilização e recuperação física.",
    temas: [
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Forragem, concentrados e condição corporal.",
      },
      {
        id: "agua",
        nome: "Água",
        descricao: "Hidratação e qualidade.",
      },
      {
        id: "casco",
        nome: "Cascos",
        descricao: "Manutenção e saúde locomotora.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Prevenção e acompanhamento.",
      },
      {
        id: "trabalho",
        nome: "Trabalho",
        descricao: "Carga, descanso e equipamento.",
      },
      {
        id: "reproducao",
        nome: "Reprodução",
        descricao: "Matrizes e garanhões.",
      },
    ],
    secoes: [
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve basear-se principalmente em forragens adequadas, complementadas quando necessário de acordo com o trabalho e condição corporal.",
      },
      {
        titulo: "Água",
        texto:
          "O acesso é Água é fundamental, especialmente após exercício ou trabalho em condições de calor.",
      },
      {
        titulo: "Cascos",
        texto:
          "A avaliação periódica dos cascos é fundamental para prevenir alterações locomotoras.",
      },
      {
        titulo: "Trabalho",
        texto:
          "A carga de trabalho deve considerar idade, condição corporal, treino, ambiente e estado de saúde.",
      },
      {
        titulo: "Descanso",
        texto:
          "O descanso é componente do maneio e reduz risco de fadiga e lesões.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Vacinação, desparasitação quando indicada, higiene e acompanhamento veterinário devem integrar o plano sanitário.",
      },
      {
        titulo: "Instalações",
        texto:
          "Os abrigos devem permitir descanso, protecção climática, ventilação e higiene.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução deve ser planeada considerando saúde, conformação, genética e objectivos.",
      },
      {
        titulo: "Transporte",
        texto:
          "O transporte deve reduzir risco de trauma, stress e desidratação.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "Quando utilizados para trabalho, os equinos devem ser tratados como activos produtivos que exigem manutenção sanitária e nutricional.",
      },
    ],
  },

  {
    id: "asininos",
    nome: "Asininos",
    singular: "asinino",
    grupo: "Animais de trabalho",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "Os asininos desempenham funções de transporte e trabalho em diferentes comunidades e sistemas rurais.",
    importancia:
      "A capacidade de trabalho depende de alimentação, Água, condição corporal, saúde dos cascos, equipamento e descanso.",
    realidade:
      "A utilização deve respeitar a capacidade física do animal e evitar sobrecarga ou jornadas excessivas.",
    temas: [
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Forragem e condição corporal.",
      },
      {
        id: "agua",
        nome: "Água",
        descricao: "Hidratação.",
      },
      {
        id: "trabalho",
        nome: "Trabalho",
        descricao: "Carga e descanso.",
      },
      {
        id: "cascos",
        nome: "Cascos",
        descricao: "Manutenção locomotora.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Prevenção e vigilância.",
      },
      {
        id: "bem-estar",
        nome: "Bem-estar",
        descricao: "Manejo responsável.",
      },
    ],
    secoes: [
      {
        titulo: "Alimentação",
        texto:
          "A dieta deve garantir manutenção corporal e capacidade de trabalho sem excessos ou deficiências nutricionais.",
      },
      {
        titulo: "Água",
        texto:
          "A Água deve estar disponível regularmente, sobretudo durante trabalho e períodos quentes.",
      },
      {
        titulo: "Carga de trabalho",
        texto:
          "A carga deve ser ajustada é condição corporal, idade, treino e terreno.",
      },
      {
        titulo: "Cascos",
        texto:
          "Os cascos devem ser observados regularmente para identificar lesões, crescimento anormal ou problemas locomotores.",
      },
      {
        titulo: "Equipamento",
        texto:
          "Cargas e arreios mal ajustados podem provocar ferimentos e reduzir o desempenho.",
      },
      {
        titulo: "Descanso",
        texto:
          "Períodos adequados de descanso são necessários para recuperação física.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Doenças, parasitas e lesões devem ser identificados e tratados com assistência adequada.",
      },
      {
        titulo: "Bem-estar",
        texto:
          "O animal deve ter acesso a alimentação, Água, abrigo, descanso e cuidados veterinários.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução deve considerar saúde, conformação e objectivo de criação.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "O valor económico do asinino deve ser acompanhado de práticas de utilização que protejam a saúde e o bem-estar do animal.",
      },
    ],
  },

  {
    id: "bubalinos",
    nome: "Bubalinos",
    singular: "bubalino",
    grupo: "Grandes ruminantes",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Water%20buffalo.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "Os búfalos domésticos possuem interesse potencial para sistemas específicos de carne e leite, mas a sua utilização deve ser avaliada localmente.",
    importancia:
      "A bubalinocultura não deve ser apresentada automaticamente como actividade de expressão nacional. A decisão de investimento depende de ambiente, Água, alimentação, genética, mercado e capacidade técnica.",
    realidade:
      "Em Angola, a expansão da actividade requer evidência sobre adaptação, disponibilidade de animais, mercado e condições de produção.",
    temas: [
      {
        id: "adaptacao",
        nome: "Adaptação",
        descricao: "Ambiente e recursos disponíveis.",
      },
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Pastagem e suplementação.",
      },
      {
        id: "agua",
        nome: "Água",
        descricao: "Disponibilidade e ambiente.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Prevenção sanitária.",
      },
      {
        id: "reproducao",
        nome: "Reprodução",
        descricao: "Gestão reprodutiva.",
      },
      {
        id: "instalacoes",
        nome: "Instalações",
        descricao: "Abrigos e maneio.",
      },
    ],
    secoes: [
      {
        titulo: "Avaliação antes do investimento",
        texto:
          "Antes de iniciar a actividade deve ser avaliada a disponibilidade de Água, alimento, animais, assistência técnica e mercado.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve ser ajustada é finalidade produtiva e às condições da exploração.",
      },
      {
        titulo: "Água e ambiente",
        texto:
          "A gestão da Água e do conforto térmico é importante em sistemas de criação de búfalos.",
      },
      {
        titulo: "Instalações",
        texto:
          "As instalações devem permitir manejo seguro, limpeza, drenagem e protecção climática.",
      },
      {
        titulo: "Sanidade",
        texto:
          "O plano sanitário deve ser adaptado às doenças existentes na região.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução requer selecção de animais saudáveis e acompanhamento de desempenho.",
      },
      {
        titulo: "Leite",
        texto:
          "A produção leiteira deve ser avaliada com base na genética, alimentação, higiene da ordenha e mercado.",
      },
      {
        titulo: "Carne",
        texto:
          "A produção de carne depende do crescimento, genética, alimentação e sistema de acabamento.",
      },
      {
        titulo: "Mercado",
        texto:
          "Sem mercado definido, a introdução de uma nova actividade apresenta risco económico elevado.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A plataforma apresenta os bubalinos como actividade que necessita de avaliação técnica e económica específica.",
      },
    ],
  },

  {
    id: "coelhos",
    nome: "Coelhos",
    singular: "coelho",
    grupo: "Pequenos animais",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rabbit.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "A cunicultura pode ser desenvolvida em pequena escala, mas exige rigor no maneio, alimentação, reprodução e higiene.",
    importancia:
      "O ciclo produtivo dos coelhos permite produção de carne em sistemas de pequena dimensão, desde que exista alimentação adequada, controlo sanitário e mercado.",
    realidade:
      "As altas temperaturas podem representar desafio importante, tornando ventilação, sombra e densidade factores críticos.",
    temas: [
      {
        id: "instalacoes",
        nome: "Instalações",
        descricao: "Gaiolas, ventilação e higiene.",
      },
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Forragem e ração.",
      },
      {
        id: "reproducao",
        nome: "Reprodução",
        descricao: "Matrizes e ninhadas.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Prevenção e higiene.",
      },
      {
        id: "crescimento",
        nome: "Crescimento",
        descricao: "Desempenho e acabamento.",
      },
      {
        id: "mercado",
        nome: "Mercado",
        descricao: "Venda e viabilidade.",
      },
    ],
    secoes: [
      {
        titulo: "Instalações",
        texto:
          "As instalações devem permitir ventilação, protecção climática, higiene e manejo seguro.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve fornecer fibra suficiente e nutrientes adequados ao crescimento e reprodução.",
      },
      {
        titulo: "Água",
        texto:
          "A Água limpa deve estar continuamente disponível.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução exige registos de cobrição, parto, tamanho das ninhadas e sobrevivência.",
      },
      {
        titulo: "Ninhadas",
        texto:
          "As crias necessitam de protecção contra frio, calor, humidade e competição excessiva.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Higiene e observação diária são importantes para detectar problemas rapidamente.",
      },
      {
        titulo: "Calor",
        texto:
          "O stress térmico pode afectar consumo, reprodução e sobrevivência.",
      },
      {
        titulo: "Crescimento",
        texto:
          "O acompanhamento do peso ajuda a avaliar alimentação e eficiência produtiva.",
      },
      {
        titulo: "Abate e comercialização",
        texto:
          "A produção deve ser organizada de acordo com requisitos sanitários e mercado disponível.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A cunicultura deve ser desenvolvida de forma gradual, começando com uma escala compatível com os recursos disponíveis.",
      },
    ],
  },

  {
    id: "apicultura",
    nome: "Apicultura",
    singular: "colmeia",
    grupo: "Produção apícola",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Honey%20bee%20on%20honeycomb.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "A apicultura depende da relação entre colónias de abelhas, recursos florais, ambiente, maneio e qualidade do produto.",
    importancia:
      "Além do mel, as abelhas contribuem para polinização e podem integrar sistemas rurais diversificados.",
    realidade:
      "A localização dos apiários deve considerar flora, Água, segurança, acesso e distância de fontes de contaminação.",
    temas: [
      {
        id: "apiario",
        nome: "Apiário",
        descricao: "Localização e organização.",
      },
      {
        id: "recursos-florais",
        nome: "Recursos florais",
        descricao: "Flora e calendário de floração.",
      },
      {
        id: "maneio",
        nome: "Maneio",
        descricao: "Inspecção e gestão das colónias.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Vigilância das colónias.",
      },
      {
        id: "mel",
        nome: "Mel",
        descricao: "Colheita, higiene e qualidade.",
      },
      {
        id: "seguranca",
        nome: "Segurança",
        descricao: "Protecção do apicultor e comunidade.",
      },
    ],
    secoes: [
      {
        titulo: "Escolha do local",
        texto:
          "O apiário deve ser instalado em local adequado é disponibilidade floral, segurança, acesso e protecção contra condições adversas.",
      },
      {
        titulo: "Flora",
        texto:
          "A produtividade depende da disponibilidade de recursos florais. O conhecimento do calendário de floração ajuda no planeamento.",
      },
      {
        titulo: "Água",
        texto:
          "A disponibilidade de Água nas proximidades pode ser relevante, devendo ser evitada a instalação em locais contaminados.",
      },
      {
        titulo: "Maneio",
        texto:
          "As colónias devem ser inspeccionadas de forma organizada, evitando intervenções desnecessárias.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Doenças e parasitas devem ser reconhecidos e tratados de acordo com orientação técnica.",
      },
      {
        titulo: "Colheita",
        texto:
          "A colheita deve respeitar a maturação do mel e procedimentos higiénicos.",
      },
      {
        titulo: "Higiene",
        texto:
          "Equipamentos e recipientes utilizados na extracção e armazenamento devem estar limpos e adequados para contacto alimentar.",
      },
      {
        titulo: "Segurança",
        texto:
          "O apiário deve ser organizado para reduzir riscos para trabalhadores, crianças e comunidades vizinhas.",
      },
      {
        titulo: "Mercado",
        texto:
          "A qualidade, apresentação e rastreabilidade podem aumentar o valor comercial dos produtos.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A apicultura pode beneficiar de recursos florais existentes em diferentes regiões, mas o potencial deve ser analisado localmente.",
      },
    ],
  },

  {
    id: "aquacultura",
    nome: "Aquacultura",
    singular: "peixe",
    grupo: "Produção aquícola",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tilapia.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "A aquacultura depende do controlo da Água, alimentação, densidade, sanidade, espécie e qualidade dos alevinos.",
    importancia:
      "A produção aquícola pode contribuir para disponibilidade de proteína animal e diversificação das actividades rurais, desde que tecnicamente e economicamente viável.",
    realidade:
      "A qualidade da Água e a disponibilidade de alimento são factores determinantes. Sistemas aquícolas devem ser planeados de acordo com recursos hídricos e mercado.",
    temas: [
      {
        id: "agua",
        nome: "Qualidade da Água",
        descricao: "Parâmetros e gestão.",
      },
      {
        id: "especies",
        nome: "Espécies",
        descricao: "Selecção do material biológico.",
      },
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Nutrição e conversão.",
      },
      {
        id: "tanques",
        nome: "Tanques",
        descricao: "Construção e gestão.",
      },
      {
        id: "sanidade",
        nome: "Sanidade",
        descricao: "Prevenção e vigilância.",
      },
      {
        id: "colheita",
        nome: "Colheita",
        descricao: "Despesca e comercialização.",
      },
    ],
    secoes: [
      {
        titulo: "Escolha da espécie",
        texto:
          "A espécie deve ser compatível com temperatura, qualidade da Água, sistema de produção, alimentação e mercado.",
      },
      {
        titulo: "Água",
        texto:
          "Parâmetros físicos e químicos da Água devem ser acompanhados de acordo com a espécie e sistema.",
      },
      {
        titulo: "Tanques",
        texto:
          "O desenho dos tanques deve permitir entrada e saída de Água, limpeza, alimentação e colheita.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação representa parte significativa dos custos e deve ser ajustada é biomassa e fase de crescimento.",
      },
      {
        titulo: "Densidade",
        texto:
          "Densidades excessivas podem comprometer crescimento, qualidade da Água e saúde.",
      },
      {
        titulo: "Sanidade",
        texto:
          "A prevenção deve começar pela qualidade da Água, origem dos alevinos e higiene dos equipamentos.",
      },
      {
        titulo: "Alevinos",
        texto:
          "A qualidade e origem do material de povoamento influenciam o desempenho futuro.",
      },
      {
        titulo: "Energia e equipamentos",
        texto:
          "Sistemas que dependem de bombagem, aeração ou circulação de Água necessitam de planeamento energético.",
      },
      {
        titulo: "Colheita",
        texto:
          "A despesca deve ser planeada considerando tamanho dos peixes, procura e capacidade de conservação.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A aquacultura deve ser planeada de acordo com recursos hídricos locais e viabilidade económica.",
      },
    ],
  },

  {
    id: "helicicultura",
    nome: "Helicicultura",
    singular: "caracol",
    grupo: "Actividade alternativa",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Helix%20pomatia.jpg",
    imagemFonte: "Wikimedia Commons",
    resumo:
      "A helicicultura é apresentada como actividade especializada que exige avaliação de ambiente, alimentação, instalações e mercado.",
    importancia:
      "Pode constituir actividade alternativa, mas não deve ser apresentada como cadeia pecuária nacional consolidada sem evidência suficiente.",
    realidade:
      "Antes de investir é indispensável avaliar procura, espécies permitidas, legislação aplicável, alimentação e capacidade técnica.",
    temas: [
      {
        id: "ambiente",
        nome: "Ambiente",
        descricao: "Temperatura e humidade.",
      },
      {
        id: "alimentacao",
        nome: "Alimentação",
        descricao: "Recursos alimentares.",
      },
      {
        id: "instalacoes",
        nome: "Instalações",
        descricao: "Estruturas de criação.",
      },
      {
        id: "reproducao",
        nome: "Reprodução",
        descricao: "Ciclo produtivo.",
      },
      {
        id: "biosseguranca",
        nome: "Biossegurança",
        descricao: "Higiene e controlo.",
      },
      {
        id: "mercado",
        nome: "Mercado",
        descricao: "Viabilidade comercial.",
      },
    ],
    secoes: [
      {
        titulo: "Antes de iniciar",
        texto:
          "A primeira etapa deve ser verificar legislação, espécies permitidas, mercado e disponibilidade de assistência técnica.",
      },
      {
        titulo: "Ambiente",
        texto:
          "Temperatura, humidade, ventilação e protecção contra extremos ambientais influenciam o desempenho.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve ser compatível com a espécie e fase de desenvolvimento.",
      },
      {
        titulo: "Instalações",
        texto:
          "As estruturas devem permitir controlo ambiental, higiene e protecção contra predadores.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução deve ser acompanhada através de registos e controlo das condições ambientais.",
      },
      {
        titulo: "Higiene",
        texto:
          "A limpeza reduz acumulação de resíduos e condições favoráveis a problemas sanitários.",
      },
      {
        titulo: "Biossegurança",
        texto:
          "A introdução de organismos e materiais deve ser controlada para evitar contaminações.",
      },
      {
        titulo: "Mercado",
        texto:
          "Não se deve iniciar produção comercial sem confirmar compradores e requisitos de comercialização.",
      },
      {
        titulo: "Processamento",
        texto:
          "Produtos destinados ao consumo devem obedecer aos requisitos sanitários e de segurança alimentar aplicáveis.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A helicicultura deve ser considerada uma actividade especializada e experimental até existir evidência suficiente sobre escala, mercado e cadeia de valor em Angola.",
      },
    ],
  },
];

/* ============================================================
   ROTAS DOS TEMAS
============================================================ */

const rotasTemas: Record<
  EspecieId,
  Record<string, RotaTema>
> = {
  bovinos: {
    racas: {
      href: "/pecuaria/bovinos/orientacoes/racas",
      status: "disponivel",
    },
    alimentacao: {
      href: "/pecuaria/bovinos/orientacoes/alimentacao",
      status: "disponivel",
    },
    instalacoes: {
      href: "/pecuaria/bovinos/orientacoes/instalacoes",
      status: "disponivel",
    },
    sanidade: {
      href: "/pecuaria/bovinos/orientacoes/sanidade",
      status: "disponivel",
    },
    reproducao: {
      href: "/pecuaria/bovinos/orientacoes/reproducao",
      status: "disponivel",
    },
    agua: {
      href: "/pecuaria/bovinos/orientacoes/agua",
      status: "disponivel",
    },
  },

  suinos: {
    racas: {
      href: "/pecuaria/suinos/orientacoes/racas",
      status: "disponivel",
    },
    alimentacao: {
      href: "/pecuaria/suinos/orientacoes/alimentacao",
      status: "disponivel",
    },
    instalacoes: {
      href: "/pecuaria/suinos/orientacoes/instalacoes",
      status: "disponivel",
    },
    sanidade: {
      href: "/pecuaria/suinos/orientacoes/sanidade",
      status: "disponivel",
    },
    reproducao: {
      href: "/pecuaria/suinos/orientacoes/reproducao",
      status: "em-preparacao",
    },
    agua: {
      href: "/pecuaria/suinos/orientacoes/agua",
      status: "disponivel",
    },
    biosseguranca: {
      href: "/pecuaria/suinos/orientacoes/biosseguranca",
      status: "em-preparacao",
    },
  },

  caprinos: {
    racas: {
      href: "/pecuaria/caprinos/orientacoes/racas",
      status: "disponivel",
    },
    alimentacao: {
      href: "/pecuaria/caprinos/orientacoes/alimentacao",
      status: "disponivel",
    },
    instalacoes: {
      href: "/pecuaria/caprinos/orientacoes/instalacoes",
      status: "disponivel",
    },
    sanidade: {
      href: "/pecuaria/caprinos/orientacoes/sanidade",
      status: "disponivel",
    },
    cabritos: {
      href: "/pecuaria/caprinos/orientacoes/cabritos",
      status: "disponivel",
    },
    pastoreio: {
      href: "/pecuaria/caprinos/orientacoes/pastoreio",
      status: "disponivel",
    },
  },

  ovinos: {
    alimentacao: {
      href: "/pecuaria/ovinos/orientacoes/alimentacao",
      status: "disponivel",
    },
    pastoreio: {
      href: "/pecuaria/ovinos/orientacoes/pastoreio",
      status: "disponivel",
    },
    sanidade: {
      href: "/pecuaria/ovinos/orientacoes/sanidade",
      status: "disponivel",
    },
    reproducao: {
      href: "/pecuaria/ovinos/orientacoes/reproducao",
      status: "disponivel",
    },
    cordeiros: {
      href: "/pecuaria/ovinos/orientacoes/cordeiros",
      status: "disponivel",
    },
    abrigo: {
      href: "/pecuaria/ovinos/orientacoes/abrigo",
      status: "disponivel",
    },
  },

  galinhas: {
    corte: {
      href: "/pecuaria/galinhas/orientacoes/corte",
      status: "disponivel",
    },
    poedeiras: {
      href: "/pecuaria/galinhas/orientacoes/poedeiras",
      status: "disponivel",
    },
    alimentacao: {
      href: "/pecuaria/galinhas/orientacoes/alimentacao",
      status: "disponivel",
    },
    sanidade: {
      href: "/pecuaria/galinhas/orientacoes/sanidade",
      status: "disponivel",
    },
    instalacoes: {
      href: "/pecuaria/galinhas/orientacoes/instalacoes",
      status: "disponivel",
    },
    biosseguranca: {
      href: "/pecuaria/galinhas/orientacoes/biosseguranca",
      status: "disponivel",
    },
  },

  patos: {
    alimentacao: {
      href: "/pecuaria/patos/orientacoes/alimentacao",
      status: "disponivel",
    },
    agua: {
      href: "/pecuaria/patos/orientacoes/agua",
      status: "disponivel",
    },
    instalacoes: {
      href: "/pecuaria/patos/orientacoes/instalacoes",
      status: "disponivel",
    },
    sanidade: {
      href: "/pecuaria/patos/orientacoes/sanidade",
      status: "disponivel",
    },
    reproducao: {
      href: "/pecuaria/patos/orientacoes/reproducao",
      status: "disponivel",
    },
    maneio: {
      href: "/pecuaria/patos/orientacoes/maneio",
      status: "disponivel",
    },
  },

  perus: {
    alimentacao: {
      href: "/pecuaria/perus/orientacoes/alimentacao",
      status: "disponivel",
    },
    instalacoes: {
      href: "/pecuaria/perus/orientacoes/instalacoes",
      status: "disponivel",
    },
    sanidade: {
      href: "/pecuaria/perus/orientacoes/sanidade",
      status: "disponivel",
    },
    crescimento: {
      href: "/pecuaria/perus/orientacoes/crescimento",
      status: "disponivel",
    },
    reproducao: {
      href: "/pecuaria/perus/orientacoes/reproducao",
      status: "disponivel",
    },
    mercado: {
      href: "/pecuaria/perus/orientacoes/mercado",
      status: "disponivel",
    },
  },

  codornizes: {
    instalacoes: {
      href: "/pecuaria/codornizes/orientacoes/instalacoes",
      status: "em-preparacao",
    },
    alimentacao: {
      href: "/pecuaria/codornizes/orientacoes/alimentacao",
      status: "em-preparacao",
    },
    ovos: {
      href: "/pecuaria/codornizes/orientacoes/ovos",
      status: "em-preparacao",
    },
    sanidade: {
      href: "/pecuaria/codornizes/orientacoes/sanidade",
      status: "em-preparacao",
    },
    reproducao: {
      href: "/pecuaria/codornizes/orientacoes/reproducao",
      status: "em-preparacao",
    },
    mercado: {
      href: "/pecuaria/codornizes/orientacoes/mercado",
      status: "em-preparacao",
    },
  },

  equinos: {
    alimentacao: {
      href: "/pecuaria/equinos/orientacoes/alimentacao",
      status: "em-preparacao",
    },
    agua: {
      href: "/pecuaria/equinos/orientacoes/agua",
      status: "em-preparacao",
    },
    casco: {
      href: "/pecuaria/equinos/orientacoes/casco",
      status: "em-preparacao",
    },
    sanidade: {
      href: "/pecuaria/equinos/orientacoes/sanidade",
      status: "em-preparacao",
    },
    trabalho: {
      href: "/pecuaria/equinos/orientacoes/trabalho",
      status: "em-preparacao",
    },
    reproducao: {
      href: "/pecuaria/equinos/orientacoes/reproducao",
      status: "em-preparacao",
    },
  },

  asininos: {
    alimentacao: {
      href: "/pecuaria/asininos/orientacoes/alimentacao",
      status: "em-preparacao",
    },
    agua: {
      href: "/pecuaria/asininos/orientacoes/agua",
      status: "em-preparacao",
    },
    trabalho: {
      href: "/pecuaria/asininos/orientacoes/trabalho",
      status: "em-preparacao",
    },
    cascos: {
      href: "/pecuaria/asininos/orientacoes/cascos",
      status: "em-preparacao",
    },
    sanidade: {
      href: "/pecuaria/asininos/orientacoes/sanidade",
      status: "em-preparacao",
    },
    "bem-estar": {
      href: "/pecuaria/asininos/orientacoes/bem-estar",
      status: "em-preparacao",
    },
  },

  bubalinos: {
    adaptacao: {
      href: "/pecuaria/bubalinos/orientacoes/adaptacao",
      status: "em-preparacao",
    },
    alimentacao: {
      href: "/pecuaria/bubalinos/orientacoes/alimentacao",
      status: "em-preparacao",
    },
    agua: {
      href: "/pecuaria/bubalinos/orientacoes/agua",
      status: "em-preparacao",
    },
    sanidade: {
      href: "/pecuaria/bubalinos/orientacoes/sanidade",
      status: "em-preparacao",
    },
    reproducao: {
      href: "/pecuaria/bubalinos/orientacoes/reproducao",
      status: "em-preparacao",
    },
    instalacoes: {
      href: "/pecuaria/bubalinos/orientacoes/instalacoes",
      status: "em-preparacao",
    },
  },

  coelhos: {
    instalacoes: {
      href: "/pecuaria/coelhos/orientacoes/instalacoes",
      status: "em-preparacao",
    },
    alimentacao: {
      href: "/pecuaria/coelhos/orientacoes/alimentacao",
      status: "em-preparacao",
    },
    reproducao: {
      href: "/pecuaria/coelhos/orientacoes/reproducao",
      status: "em-preparacao",
    },
    sanidade: {
      href: "/pecuaria/coelhos/orientacoes/sanidade",
      status: "em-preparacao",
    },
    crescimento: {
      href: "/pecuaria/coelhos/orientacoes/crescimento",
      status: "em-preparacao",
    },
    mercado: {
      href: "/pecuaria/coelhos/orientacoes/mercado",
      status: "em-preparacao",
    },
  },

  apicultura: {
    apiario: {
      href: "/pecuaria/apicultura/orientacoes/apiario",
      status: "em-preparacao",
    },
    "recursos-florais": {
      href: "/pecuaria/apicultura/orientacoes/recursos-florais",
      status: "em-preparacao",
    },
    maneio: {
      href: "/pecuaria/apicultura/orientacoes/maneio",
      status: "em-preparacao",
    },
    sanidade: {
      href: "/pecuaria/apicultura/orientacoes/sanidade",
      status: "em-preparacao",
    },
    mel: {
      href: "/pecuaria/apicultura/orientacoes/mel",
      status: "em-preparacao",
    },
    seguranca: {
      href: "/pecuaria/apicultura/orientacoes/seguranca",
      status: "em-preparacao",
    },
  },

  aquacultura: {
    agua: {
      href: "/pecuaria/aquacultura/orientacoes/agua",
      status: "em-preparacao",
    },
    especies: {
      href: "/pecuaria/aquacultura/orientacoes/especies",
      status: "em-preparacao",
    },
    alimentacao: {
      href: "/pecuaria/aquacultura/orientacoes/alimentacao",
      status: "em-preparacao",
    },
    tanques: {
      href: "/pecuaria/aquacultura/orientacoes/tanques",
      status: "em-preparacao",
    },
    sanidade: {
      href: "/pecuaria/aquacultura/orientacoes/sanidade",
      status: "em-preparacao",
    },
    colheita: {
      href: "/pecuaria/aquacultura/orientacoes/colheita",
      status: "em-preparacao",
    },
  },

  helicicultura: {
    ambiente: {
      href: "/pecuaria/helicicultura/orientacoes/ambiente",
      status: "em-preparacao",
    },
    alimentacao: {
      href: "/pecuaria/helicicultura/orientacoes/alimentacao",
      status: "em-preparacao",
    },
    instalacoes: {
      href: "/pecuaria/helicicultura/orientacoes/instalacoes",
      status: "em-preparacao",
    },
    reproducao: {
      href: "/pecuaria/helicicultura/orientacoes/reproducao",
      status: "em-preparacao",
    },
    biosseguranca: {
      href: "/pecuaria/helicicultura/orientacoes/biosseguranca",
      status: "em-preparacao",
    },
    mercado: {
      href: "/pecuaria/helicicultura/orientacoes/mercado",
      status: "em-preparacao",
    },
  },
};

/* ============================================================
   TEMAS GERAIS
============================================================ */

const fundamentos = [
  {
    titulo: "Genética e selecção",
    texto:
      "A escolha genética deve ser orientada pela finalidade produtiva, adaptação ambiental, disponibilidade de alimentos, sanidade, reprodução e capacidade de maneio.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle%20in%20Angola.jpg",
  },
  {
    titulo: "Nutrição animal",
    texto:
      "Alimentação adequada exige equilíbrio entre energia, proteína, minerais, vitaminas, fibra e Água, considerando espécie, idade, estado fisiológico e finalidade.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle%20in%20Angola.jpg",
  },
  {
    titulo: "Sanidade e biossegurança",
    texto:
      "A prevenção de doenças começa antes do aparecimento dos sinais clínicos e envolve higiene, vigilância, quarentena, vacinação quando indicada e assistência veterinária.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken.jpg",
  },
  {
    titulo: "Reprodução",
    texto:
      "A eficiência reprodutiva depende da condição corporal, idade, genética, nutrição, sanidade e organização dos registos da exploração.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle%20in%20Angola.jpg",
  },
  {
    titulo: "Bem-estar animal",
    texto:
      "O maneio deve reduzir dor, medo, stress, fome, sede e lesões, garantindo condições adequadas de alimentação, alojamento e descanso.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Horse.jpg",
  },
  {
    titulo: "Gestão da exploração",
    texto:
      "Uma exploração tecnicamente organizada precisa de registos, controlo de custos, planeamento alimentar, calendário sanitário e avaliação de resultados.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle%20in%20Angola.jpg",
  },
];

/* ============================================================
   CONSTRUIR LINK
============================================================ */

function construirLink(
  especieId: EspecieId,
  temaId: string,
  provincia: string,
  finalidade: string
) {
  const rota = rotasTemas[especieId]?.[temaId];

  if (!rota || rota.status !== "disponivel") {
    return null;
  }

  const parametros = new URLSearchParams();

  if (provincia && provincia !== "Angola") {
    parametros.set("provincia", provincia);
  }

  if (finalidade) {
    parametros.set("finalidade", finalidade);
  }

  const query = parametros.toString();

  return query ? `${rota.href}?${query}` : rota.href;
}

function temaEmPreparacao(
  especieId: EspecieId,
  temaId: string
) {
  return (
    rotasTemas[especieId]?.[temaId]?.status ===
    "em-preparacao"
  );
}

/* ============================================================
   COMPONENTE PRINCIPAL
============================================================ */

export default function PecuariaPage() {
  const [especieSelecionada, setEspecieSelecionada] =
    useState<EspecieId>("bovinos");

  const [provincia, setProvincia] =
    useState("Angola");

  const [finalidade, setFinalidade] =
    useState("Produção de carne");

  const [secaoAberta, setSecaoAberta] =
    useState(0);

  const especie = useMemo(
    () =>
      especies.find(
        (item) =>
          item.id === especieSelecionada
      ) ?? especies[0],
    [especieSelecionada]
  );

  function selecionarEspecie(
    id: EspecieId
  ) {
    setEspecieSelecionada(id);
    setSecaoAberta(0);

    setTimeout(() => {
      document
        .getElementById("guia-especie")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  }

  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[650px] overflow-hidden">

        <img
          src={especie.imagem}
          alt="Pecuária em Angola"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-green-950/30" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20 lg:px-8">

          <div className="max-w-4xl text-white">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-300">
              AGROINOVA ANGOLA é PECUÁRIA
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Conhecimento técnico
              <br />
              para a pecuária
              <br />
              angolana
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-green-50 sm:text-xl">
              Uma área dedicada ao estudo, produção,
              gestão e desenvolvimento dos sistemas
              pecuários de Angola, reunindo informação
              técnica, conhecimento científico e dados
              verificáveis.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("especies")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white transition hover:bg-green-500"
              >
                Explorar espécies
              </button>

              <Link
                href="/dados"
                className="rounded-xl border border-white/50 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Consultar dados oficiais
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRODUÇÃO
      ===================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

          <div className="grid gap-6 md:grid-cols-3">

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

              <div className="h-44 overflow-hidden">
                <img
                  src={especies[0].imagem}
                  alt="Bovinos"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">

                <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                  Contexto
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Realidade angolana
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Os sistemas pecuários diferem entre regiões
                  em ambiente, Água, alimentação, genética,
                  mão de obra, tecnologia e acesso ao mercado.
                </p>

              </div>

            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

              <div className="h-44 overflow-hidden">
                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/Horse.jpg"
                  alt="Animal de produção"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">

                <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                  Ciência
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Conhecimento técnico
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  As orientações combinam princípios de produção
                  animal, saúde, nutrição, genética, reprodução,
                  instalações e gestão da exploração.
                </p>

              </div>

            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

              <div className="h-44 overflow-hidden">
                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/Chicken.jpg"
                  alt="Avicultura"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">

                <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                  Integridade
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  Informação verificável
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Dados estatísticos devem manter fonte,
                  período, unidade e âmbito territorial.
                  Informação técnica não é apresentada como
                  estatística oficial.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* =====================================================
          ESPÉCIES
      ===================================================== */}

      <section
        id="especies"
        className="bg-stone-50"
      >

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                01 — ESPÉCIES DA PECUÁRIA
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Escolha a espécie
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Explore informação técnica organizada por
                espécie, com foco nas principais necessidades
                de produção, saúde, alimentação, reprodução,
                instalações e gestão.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="provincia"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500"
                >
                  Província
                </label>

                <select
                  id="provincia"
                  value={provincia}
                  onChange={(event) =>
                    setProvincia(event.target.value)
                  }
                  className="w-full min-w-[210px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >
                  {provincias.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>

              </div>

              <div>
                <label
                  htmlFor="finalidade"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500"
                >
                  Finalidade
                </label>

                <select
                  id="finalidade"
                  value={finalidade}
                  onChange={(event) =>
                    setFinalidade(event.target.value)
                  }
                  className="w-full min-w-[210px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >
                  {finalidades.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>

              </div>

            </div>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {especies.map((item) => {

              const ativa =
                item.id === especieSelecionada;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    selecionarEspecie(item.id)
                  }
                  className={[
                    "group overflow-hidden rounded-2xl border bg-white text-left transition duration-300",
                    ativa
                      ? "border-green-700 shadow-xl ring-2 ring-green-700/10"
                      : "border-slate-200 hover:-translate-y-1 hover:border-green-400 hover:shadow-xl",
                  ].join(" ")}
                >

                  <div className="relative h-40 overflow-hidden">

                    <img
                      src={item.imagem}
                      alt={item.nome}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-4 right-4">

                      <h3 className="text-lg font-bold text-white">
                        {item.nome}
                      </h3>

                    </div>

                  </div>

                  <div className="p-4">

                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {item.grupo}
                    </p>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                      {item.resumo}
                    </p>

                    <span
                      className={[
                        "mt-4 block text-sm font-bold",
                        ativa
                          ? "text-green-700"
                          : "text-slate-700 group-hover:text-green-700",
                      ].join(" ")}
                    >
                      Consultar espécie
                    </span>

                  </div>

                </button>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          GUIA DA ESPÉCIE
      ===================================================== */}

      <section
        id="guia-especie"
        className="scroll-mt-20 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

            {/* ÍNDICE */}

            <aside className="lg:sticky lg:top-24 lg:h-fit">

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                <div className="h-48 overflow-hidden">

                  <img
                    src={especie.imagem}
                    alt={especie.nome}
                    className="h-full w-full object-cover"
                  />

                </div>

                <div className="p-5">

                  <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                    Espécie seleccionada
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    {especie.nome}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {especie.grupo}
                  </p>

                  <div className="mt-6 border-t border-slate-200 pt-5">

                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                      índice técnico
                    </p>

                    <nav className="space-y-1">

                      {especie.secoes.map(
                        (secao, index) => (
                          <button
                            key={secao.titulo}
                            type="button"
                            onClick={() => {
                              setSecaoAberta(index);

                              document
                                .getElementById(
                                  `secao-${index}`
                                )
                                ?.scrollIntoView({
                                  behavior: "smooth",
                                  block: "center",
                                });
                            }}
                            className={[
                              "w-full rounded-lg px-3 py-2 text-left text-sm transition",
                              secaoAberta === index
                                ? "bg-green-50 font-bold text-green-800"
                                : "text-slate-600 hover:bg-slate-50 hover:text-green-700",
                            ].join(" ")}
                          >
                            {index + 1}.{" "}
                            {secao.titulo}
                          </button>
                        )
                      )}

                    </nav>

                  </div>

                </div>

              </div>

            </aside>

            {/* CONTEÚDO */}

            <div>

              <div className="relative overflow-hidden rounded-[2rem] bg-green-950 text-white">

                <img
                  src={especie.imagem}
                  alt={especie.nome}
                  className="absolute inset-0 h-full w-full object-cover opacity-30"
                />

                <div className="absolute inset-0 bg-green-950/80" />

                <div className="relative p-8 sm:p-12">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-300">
                    GUIA TÉCNICO é {especie.grupo}
                  </p>

                  <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                    {especie.nome}
                  </h2>

                  <p className="mt-6 max-w-4xl text-lg leading-8 text-green-50">
                    {especie.resumo}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">

                      <p className="text-xs font-bold uppercase tracking-wider text-green-300">
                        Província
                      </p>

                      <p className="mt-2 text-lg font-bold">
                        {provincia}
                      </p>

                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">

                      <p className="text-xs font-bold uppercase tracking-wider text-green-300">
                        Finalidade
                      </p>

                      <p className="mt-2 text-lg font-bold">
                        {finalidade}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* IMPORTÂNCIA */}

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

                  <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                    Fundamento produtivo
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    Importância da espécie
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {especie.importancia}
                  </p>

                </article>

                <article className="rounded-3xl border border-green-200 bg-green-50 p-7">

                  <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                    Angola
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-green-950">
                    Aplicação na realidade nacional
                  </h3>

                  <p className="mt-4 leading-8 text-green-900">
                    {especie.realidade}
                  </p>

                </article>

              </div>

              {/* TEMAS */}

              <div className="mt-12">

                <div className="max-w-3xl">

                  <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                    ÁREAS DE ORIENTAÇÃO
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    Principais temas técnicos
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    As áreas disponíveis são desenvolvidas
                    progressivamente. Os conteúdos marcados
                    como disponíveis conduzem directamente
                    para páginas técnicas específicas.
                  </p>

                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                  {especie.temas.map((tema) => {

                    const link =
                      construirLink(
                        especie.id,
                        tema.id,
                        provincia,
                        finalidade
                      );

                    const emPreparacao =
                      temaEmPreparacao(
                        especie.id,
                        tema.id
                      );

                    if (link) {
                      return (
                        <Link
                          key={tema.id}
                          href={link}
                          className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
                        >

                          <div className="flex items-start justify-between gap-4">

                            <div>

                              <h4 className="text-lg font-bold">
                                {tema.nome}
                              </h4>

                              <p className="mt-2 text-sm leading-6 text-slate-600">
                                {tema.descricao}
                              </p>

                            </div>

                            <span className="text-lg font-bold text-green-700 transition group-hover:translate-x-1">
                
                            </span>

                          </div>

                          <span className="mt-5 block text-sm font-bold text-green-700">
                            Consultar orientação
                          </span>

                        </Link>
                      );
                    }

                    if (emPreparacao) {
                      return (
                        <article
                          key={tema.id}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                        >

                          <h4 className="text-lg font-bold">
                            {tema.nome}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {tema.descricao}
                          </p>

                          <span className="mt-4 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                            Conteúdo em preparação
                          </span>

                        </article>
                      );
                    }

                    return null;
                  })}

                </div>

              </div>

              {/* SECÇÕES */}

              <div className="mt-12 space-y-4">

                {especie.secoes.map(
                  (secao, index) => {

                    const aberta =
                      secaoAberta === index;

                    return (
                      <article
                        id={`secao-${index}`}
                        key={secao.titulo}
                        className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white"
                      >

                        <button
                          type="button"
                          onClick={() =>
                            setSecaoAberta(
                              aberta
                                ? -1
                                : index
                            )
                          }
                          className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition hover:bg-slate-50"
                        >

                          <div className="flex items-center gap-4">

                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                              {String(
                                index + 1
                              ).padStart(2, "0")}
                            </span>

                            <h3 className="text-lg font-bold">
                              {secao.titulo}
                            </h3>

                          </div>

                          <span className="text-xl font-light text-green-700">
                            {aberta
                              ? "-"
                              : "+"}
                          </span>

                        </button>

                        {aberta && (
                          <div className="border-t border-slate-100 px-6 pb-7 pt-6">

                            <p className="max-w-4xl leading-8 text-slate-600">
                              {secao.texto}
                            </p>

                            {secao.pontos &&
                              secao.pontos.length >
                                0 && (
                                <ul className="mt-5 grid gap-3 sm:grid-cols-2">

                                  {secao.pontos.map(
                                    (ponto) => (
                                      <li
                                        key={ponto}
                                        className="rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                                      >
                                        {ponto}
                                      </li>
                                    )
                                  )}

                                </ul>
                              )}

                          </div>
                        )}

                      </article>
                    );
                  }
                )}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FUNDAMENTOS ACADÉMICOS
      ===================================================== */}

      <section className="bg-stone-100">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              02 — FUNDAMENTOS ACADÉMICOS
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Princípios que sustentam a produção animal
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A produção pecuária moderna deve ser analisada
              como um sistema. Genética, nutrição, sanidade,
              reprodução, ambiente, bem-estar e economia estão
              interligados.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {fundamentos.map((item) => (

              <article
                key={item.titulo}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="h-48 overflow-hidden">

                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.texto}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          METODOLOGIA
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                03 — ABORDAGEM
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Como interpretar a informação
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                A plataforma distingue conhecimento técnico,
                evidência científica, experiência de campo e
                estatística oficial. Essa separação é fundamental
                para evitar que uma recomendação técnica seja
                confundida com um dado estatístico.
              </p>

            </div>

            <div className="grid gap-4">

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

                <h3 className="text-lg font-bold">
                  Conhecimento técnico
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Explica princípios, práticas de maneio,
                  critérios de decisão e factores que influenciam
                  a produção.
                </p>

              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

                <h3 className="text-lg font-bold">
                  Evidência científica
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Estudos científicos ajudam a compreender
                  genética, doenças, alimentação, produtividade,
                  adaptação e outros fenómenos.
                </p>

              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

                <h3 className="text-lg font-bold">
                  Dados oficiais
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Estatísticas devem conservar fonte, período,
                  unidade de medida e âmbito territorial.
                </p>

              </article>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOVINOS EM DESTAQUE
      ===================================================== */}

      {especie.id === "bovinos" && (
        <section className="bg-green-950 text-white">

          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">

            <div className="relative min-h-[500px]">

              <img
                src={especie.imagem}
                alt="Bovinos em Angola"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 sm:p-12">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-300">
                  ESPÉCIE EM DESTAQUE
                </p>

                <h2 className="mt-3 text-4xl font-black">
                  Bovinos
                </h2>

                <p className="mt-3 max-w-xl leading-7 text-green-50">
                  Aprofunde os conhecimentos sobre genética,
                  alimentação, instalações, sanidade, reprodução
                  e Água.
                </p>

                <Link
                  href={`/pecuaria/bovinos/orientacoes?provincia=${encodeURIComponent(
                    provincia
                  )}&finalidade=${encodeURIComponent(
                    finalidade
                  )}`}
                  className="mt-6 inline-flex rounded-xl bg-green-500 px-5 py-3 font-bold text-green-950 transition hover:bg-green-400"
                >
                  Ver guia completo
                </Link>

              </div>

            </div>

            <div className="p-8 sm:p-12">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-300">
                TEMAS PRINCIPAIS
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Orientação especializada
              </h3>

              <div className="mt-8 space-y-3">

                {especie.temas.map((tema) => {

                  const link =
                    construirLink(
                      "bovinos",
                      tema.id,
                      provincia,
                      finalidade
                    );

                  return (
                    <Link
                      key={tema.id}
                      href={
                        link ??
                        "/pecuaria/bovinos/orientacoes"
                      }
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >

                      <div>

                        <h4 className="font-bold">
                          {tema.nome}
                        </h4>

                        <p className="mt-1 text-sm text-green-100/70">
                          {tema.descricao}
                        </p>

                      </div>

                      <span className="font-bold text-green-300 transition group-hover:translate-x-1">
                        ?
                      </span>

                    </Link>
                  );
                })}

              </div>

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          DADOS + TECNOLOGIA
      ===================================================== */}

      <section className="bg-stone-50">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-6 lg:grid-cols-2">

            <Link
              href="/dados"
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="h-56 overflow-hidden">

                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/Cattle%20in%20Angola.jpg"
                  alt="Dados e produção pecuária"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-8">

                <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                  DADOS
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Consultar dados oficiais
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Consulte os dados estatísticos disponíveis
                  no AGROINOVA com indicação de fonte,
                  período, unidade e âmbito territorial.
                </p>

                <span className="mt-5 inline-block font-bold text-green-700">
                  Ir para Dados ?
                </span>

              </div>

            </Link>

            <Link
              href="/tecnologias"
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="h-56 overflow-hidden">

                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/Tilapia.jpg"
                  alt="Tecnologia aplicada é produção"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-8">

                <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                  TECNOLOGIA
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Resolver um problema concreto
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Utilize a área tecnológica do AGROINOVA
                  para estruturar problemas agrícolas e
                  pecuários e procurar soluções.
                </p>

                <span className="mt-5 inline-block font-bold text-green-700">
                  Ir para Tecnologias ?
                </span>

              </div>

            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          FONTES
      ===================================================== */}

      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              04 — REFERÊNCIAS
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Fontes e instituições de referência
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A construção da área de pecuária deve privilegiar
              instituições científicas, estatísticas e técnicas
              reconhecidas, mantendo a distinção entre informação
              nacional, estudos científicos e orientação técnica.
            </p>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

              <h3 className="text-xl font-bold">
                Instituto Nacional de Estatística
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Fonte fundamental para estatísticas agropecuárias
                oficiais e informação censitária de Angola.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

              <h3 className="text-xl font-bold">
                FAO
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Organização internacional com documentação
                científica e técnica relacionada com agricultura,
                pecuária, recursos genéticos e segurança alimentar.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

              <h3 className="text-xl font-bold">
                MINAGRIF
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Referência institucional para políticas, programas
                e desenvolvimento do sector agropecuário angolano.
              </p>

            </article>

          </div>

          <div className="mt-8">

            <Link
              href="/biblioteca"
              className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 transition hover:border-green-500 hover:text-green-700"
            >
              Explorar Biblioteca do AGROINOVA
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          NOTA TÉCNICA
      ===================================================== */}

      <section className="bg-amber-50">

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

          <div className="max-w-4xl">

            <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
              NOTA TÉCNICA
            </p>

            <h2 className="mt-3 text-2xl font-black text-amber-950">
              Orientação não substitui assistência profissional
            </h2>

            <p className="mt-4 leading-8 text-amber-900">
              O conteúdo desta plataforma tem finalidade
              educativa, técnica e informativa. Diagnóstico de
              doenças, prescrição de medicamentos, procedimentos
              clínicos e decisões de elevado risco devem ser
              realizados por médicos veterinários ou outros
              profissionais legalmente habilitados.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA FINAL
      ===================================================== */}

      <section className="bg-green-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-300">
                AGROINOVA ANGOLA
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Conhecimento, Dados e Solução
              </h2>

              <p className="mt-5 leading-8 text-green-50">
                Estude a espécie, compreenda o sistema de produção,
                consulte os dados disponíveis e avance para as
                ferramentas tecnológicas quando existir um problema
                concreto.
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <Link
                href="/dados"
                className="rounded-xl bg-white px-6 py-3 font-bold text-green-950 transition hover:bg-green-50"
              >
                Dados oficiais
              </Link>

              <Link
                href="/tecnologias"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
              >
                Tecnologias
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          RODAPÉ
      ===================================================== */}

      <footer className="border-t border-white/10 bg-green-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <h3 className="text-xl font-black">
                AGROINOVA ANGOLA
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-green-100/70">
                Plataforma Nacional de Investigação,
                Conhecimento e Inovação Agropecuária de Angola.
              </p>

            </div>

            <div className="flex flex-wrap gap-5 text-sm text-green-100/70">

              <Link
                href="/"
                className="transition hover:text-white"
              >
                Início
              </Link>

              <Link
                href="/agricultura"
                className="transition hover:text-white"
              >
                Agricultura
              </Link>

              <Link
                href="/pecuaria"
                className="text-white"
              >
                Pecuária
              </Link>

              <Link
                href="/dados"
                className="transition hover:text-white"
              >
                Dados
              </Link>

              <Link
                href="/biblioteca"
                className="transition hover:text-white"
              >
                Biblioteca
              </Link>

            </div>

          </div>

          <div className="mt-8 border-t border-white/10 pt-6">

            <p className="text-sm text-green-100/60">
              Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}
