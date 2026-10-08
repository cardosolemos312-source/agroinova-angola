"use client";

import { useMemo, useRef, useState } from "react";

type Categoria =
  | "Todos"
  | "Marinhos"
  | "Água doce"
  | "Estuarinos"
  | "Aquicultura";

type Especie = {
  id: string;
  nome: string;
  cientifico: string;
  categoria: Exclude<Categoria, "Todos">;
  grupo: string;
  ambiente: string;
  regiao: string;
  onde: string;
  resumo: string;
  importancia: string;
  producao: string;
  cuidados: string[];
  imagem: string;
  legenda: string;
};

type Zona = {
  nome: string;
  descricao: string;
  locais: string[];
  destaque: string;
  imagem: string;
};

const IMAGENS = {
  mar:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Trachurus%20capensis.jpg",

  mar2:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Sardina%20pilchardus.jpg",

  cacusso:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Oreochromis%20niloticus.jpg",

  cacusso2:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Oreochromis%20niloticus%20%2844653802502%29.jpg",

  bagre:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Clarias%20gariepinus.jpg",

  bagre2:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Catfish%20%28Clarias%20gariepinus%29.jpg",

  sardinha:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Sardina%20pilchardus.jpg",

  carapau:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Trachurus%20capensis.jpg",

  carapau2:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Trachurus%20trachurus.jpg",

  corvina:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Argyrosomus%20regius%20-%20Aquarium%20de%20Barcelona%202013%20%289247883738%29.jpg",

  corvina2:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Argyrosomus%20regius.jpg",
};

/* ============================================================
   ESPÉCIES
============================================================ */

const especies: Especie[] = [
  {
    id: "cacusso-angolano",
    nome: "Cacusso angolano",
    cientifico: "Oreochromis angolensis",
    categoria: "Água doce",
    grupo: "Ciclídeos",
    ambiente: "Rios, lagoas e águas interiores",
    regiao: "Centro e norte de Angola",
    onde:
      "Associado a sistemas fluviais de Angola, incluindo ambientes relacionados com as bacias do Cuanza e do Bengo.",
    resumo:
      "Espécie de água doce de grande interesse para o conhecimento da ictiofauna angolana e para estudos de produção aquícola.",
    importancia:
      "Tem interesse alimentar, ecológico e científico, especialmente por estar associado a sistemas de água doce angolanos.",
    producao:
      "Pode ser estudado para sistemas de produção de água doce, mas a escolha da espécie e da origem dos alevinos deve ser feita com orientação técnica.",
    cuidados: [
      "Garantir água de qualidade.",
      "Evitar excesso de densidade.",
      "Utilizar alevinos de origem conhecida.",
      "Controlar alimentação e crescimento.",
      "Evitar introduções indiscriminadas em rios e lagoas.",
    ],
    imagem: IMAGENS.cacusso,
    legenda: "Ciclídeo africano utilizado como referência visual para a piscicultura de água doce.",
  },

  {
    id: "bagre-africano",
    nome: "Bagre africano",
    cientifico: "Clarias gariepinus",
    categoria: "Aquicultura",
    grupo: "Clariidae",
    ambiente: "Rios, lagoas, pântanos e sistemas de produção",
    regiao: "Diversos sistemas de água doce",
    onde:
      "Ocorre em diferentes sistemas africanos de água doce e é uma das espécies de maior interesse para a piscicultura continental.",
    resumo:
      "Peixe resistente e importante para a produção de pescado em água doce.",
    importancia:
      "Possui elevado interesse aquícola devido à capacidade de adaptação e ao valor alimentar.",
    producao:
      "Adequado para sistemas de produção devidamente dimensionados, desde que sejam controladas água, alimentação, densidade e sanidade.",
    cuidados: [
      "Controlar a densidade dos peixes.",
      "Manter oxigenação adequada.",
      "Evitar excesso de matéria orgânica.",
      "Separar lotes quando houver grande diferença de tamanho.",
      "Monitorizar sinais de doença.",
    ],
    imagem: IMAGENS.bagre,
    legenda: "Clarias gariepinus, espécie africana de grande interesse para a piscicultura.",
  },

  {
    id: "sardinella-aurita",
    nome: "Sardinella",
    cientifico: "Sardinella aurita",
    categoria: "Marinhos",
    grupo: "Peixes pelágicos",
    ambiente: "Águas costeiras e oceânicas",
    regiao: "Costa angolana",
    onde:
      "Associada às águas costeiras de Angola, sendo particularmente importante para as pescarias de pequenos pelágicos.",
    resumo:
      "Peixe pelágico que forma cardumes e integra importantes cadeias alimentares marinhas.",
    importancia:
      "Tem importância alimentar e pesqueira e serve de alimento para predadores marinhos.",
    producao:
      "É principalmente recurso de pesca e não deve ser tratado como espécie aquícola de rotina.",
    cuidados: [
      "Respeitar medidas de gestão pesqueira.",
      "Evitar capturas de juvenis em excesso.",
      "Conservar correctamente o pescado.",
      "Reduzir desperdícios durante desembarque e transporte.",
    ],
    imagem: IMAGENS.sardinha,
    legenda: "Peixe pelágico utilizado como referência visual para pequenos pelágicos costeiros.",
  },

  {
    id: "sardinella-maderensis",
    nome: "Sardinella-maderensis",
    cientifico: "Sardinella maderensis",
    categoria: "Marinhos",
    grupo: "Peixes pelágicos",
    ambiente: "Zona costeira",
    regiao: "Costa centro-norte de Angola",
    onde:
      "Associada às águas costeiras e aos sistemas de pequenos pelágicos da costa angolana.",
    resumo:
      "Peixe pelágico de importância para as pescarias costeiras.",
    importancia:
      "Integra os recursos pesqueiros explorados por pescarias de pequenos pelágicos.",
    producao:
      "A principal utilização é através da pesca, não da produção em viveiros.",
    cuidados: [
      "Respeitar períodos e tamanhos regulamentados.",
      "Evitar desperdício no desembarque.",
      "Manter cadeia de frio quando aplicável.",
    ],
    imagem: IMAGENS.sardinha,
    legenda: "Representação visual de um pequeno peixe pelágico.",
  },

  {
    id: "carapau-trecae",
    nome: "Carapau",
    cientifico: "Trachurus trecae",
    categoria: "Marinhos",
    grupo: "Peixes pelágicos",
    ambiente: "Plataforma continental e águas costeiras",
    regiao: "Costa angolana, especialmente centro-sul",
    onde:
      "É associado aos recursos pelágicos da costa angolana e às águas influenciadas pelo sistema de Benguela.",
    resumo:
      "Um dos peixes pelágicos mais importantes para a pesca comercial e alimentar.",
    importancia:
      "Tem elevada importância económica e alimentar.",
    producao:
      "É um recurso pesqueiro. A gestão das capturas é essencial para evitar sobre-exploração.",
    cuidados: [
      "Respeitar regras de pesca.",
      "Evitar captura excessiva de juvenis.",
      "Manter boas condições de conservação.",
      "Reduzir perdas após a captura.",
    ],
    imagem: IMAGENS.carapau,
    legenda: "Trachurus capensis, espécie próxima utilizada como referência visual do grupo dos carapaus.",
  },

  {
    id: "carapau-capensis",
    nome: "Carapau-do-Cabo",
    cientifico: "Trachurus capensis",
    categoria: "Marinhos",
    grupo: "Peixes pelágicos",
    ambiente: "Águas costeiras e plataforma continental",
    regiao: "Centro-sul e sul de Angola",
    onde:
      "Associado sobretudo às águas influenciadas pela corrente de Benguela e aos ambientes costeiros do sul.",
    resumo:
      "Peixe pelágico associado às águas produtivas do sistema de Benguela.",
    importancia:
      "É relevante para as pescarias de pequenos pelágicos.",
    producao:
      "A sua exploração é feita principalmente através da pesca.",
    cuidados: [
      "Controlar esforço de pesca.",
      "Evitar desperdício.",
      "Conservar rapidamente após captura.",
    ],
    imagem: IMAGENS.carapau,
    legenda: "Trachurus capensis.",
  },

  {
    id: "sardinha-sardinops",
    nome: "Sardinha",
    cientifico: "Sardinops ocellatus",
    categoria: "Marinhos",
    grupo: "Peixes pelágicos",
    ambiente: "Águas costeiras",
    regiao: "Sul de Angola",
    onde:
      "Associada principalmente às águas mais frias e produtivas do sul de Angola.",
    resumo:
      "Pequeno pelágico associado ao sistema de Benguela.",
    importancia:
      "Importante para a cadeia alimentar marinha e para a actividade pesqueira.",
    producao:
      "Recurso de pesca, não espécie de aquicultura convencional.",
    cuidados: [
      "Gestão sustentável da captura.",
      "Conservação adequada.",
      "Evitar perdas durante transporte.",
    ],
    imagem: IMAGENS.sardinha,
    legenda: "Sardina pilchardus, usada como referência visual de sardinhas.",
  },

  {
    id: "anchova",
    nome: "Anchova",
    cientifico: "Engraulis encrasicolus",
    categoria: "Marinhos",
    grupo: "Peixes pelágicos",
    ambiente: "Águas costeiras",
    regiao: "Costa angolana",
    onde:
      "Pode estar associada a águas costeiras produtivas, especialmente em sistemas de pequenos pelágicos.",
    resumo:
      "Pequeno peixe pelágico que integra cadeias alimentares marinhas.",
    importancia:
      "É importante ecologicamente e pode ter interesse pesqueiro.",
    producao:
      "Principalmente recurso de pesca.",
    cuidados: [
      "Evitar pressão excessiva sobre cardumes.",
      "Conservar adequadamente o pescado.",
    ],
    imagem: IMAGENS.sardinha,
    legenda: "Referência visual para pequenos pelágicos.",
  },

  {
    id: "pescada-angola",
    nome: "Pescada-de-Angola",
    cientifico: "Merluccius polli",
    categoria: "Marinhos",
    grupo: "Peixes demersais",
    ambiente: "Plataforma e talude continental",
    regiao: "Centro e sul da costa angolana",
    onde:
      "Associada principalmente a fundos marinhos da plataforma e do talude continental.",
    resumo:
      "Peixe demersal de importância comercial.",
    importancia:
      "Tem valor alimentar e comercial.",
    producao:
      "É essencialmente explorada pela pesca.",
    cuidados: [
      "Gestão do esforço de pesca.",
      "Redução de capturas acidentais.",
      "Conservação adequada do pescado.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Imagem de referência de peixe demersal marinho.",
  },

  {
    id: "pescada-cabo",
    nome: "Pescada-do-Cabo",
    cientifico: "Merluccius capensis",
    categoria: "Marinhos",
    grupo: "Peixes demersais",
    ambiente: "Fundos marinhos",
    regiao: "Águas frias do sul",
    onde:
      "Associada às águas frias influenciadas pelo sistema de Benguela.",
    resumo:
      "Espécie demersal associada aos fundos marinhos produtivos do sul.",
    importancia:
      "Importante recurso alimentar e pesqueiro.",
    producao:
      "Recurso de pesca.",
    cuidados: [
      "Respeitar medidas de gestão.",
      "Evitar captura de juvenis.",
      "Reduzir desperdícios.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de peixe marinho demersal.",
  },

  {
    id: "cachucho",
    nome: "Cachucho",
    cientifico: "Dentex macrophthalmus",
    categoria: "Marinhos",
    grupo: "Sparidae",
    ambiente: "Plataforma continental",
    regiao: "Costa angolana",
    onde:
      "Associado a fundos da plataforma continental e águas costeiras.",
    resumo:
      "Peixe demersal de interesse comercial.",
    importancia:
      "Possui importância alimentar e pesqueira.",
    producao:
      "Principalmente capturado na pesca.",
    cuidados: [
      "Evitar sobrepesca.",
      "Controlar artes de pesca.",
      "Manter conservação adequada.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual para espécies demersais.",
  },

  {
    id: "dente-angolense",
    nome: "Dentão-angolano",
    cientifico: "Dentex angolensis",
    categoria: "Marinhos",
    grupo: "Sparidae",
    ambiente: "Plataforma continental",
    regiao: "Costa de Angola",
    onde:
      "Encontrado em ambientes costeiros e fundos da plataforma continental.",
    resumo:
      "Peixe demersal associado aos fundos marinhos angolanos.",
    importancia:
      "Tem importância para pescarias demersais.",
    producao:
      "Recurso de pesca.",
    cuidados: [
      "Respeitar tamanhos e regras de captura.",
      "Evitar destruição de habitats.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de peixe demersal.",
  },

  {
    id: "dentex-canariensis",
    nome: "Dentão",
    cientifico: "Dentex canariensis",
    categoria: "Marinhos",
    grupo: "Sparidae",
    ambiente: "Zona costeira e plataforma",
    regiao: "Costa angolana",
    onde:
      "Associado aos fundos costeiros e à plataforma continental.",
    resumo:
      "Peixe demersal pertencente à família Sparidae.",
    importancia:
      "Importante para pesca e consumo.",
    producao:
      "Principalmente pescado no ambiente natural.",
    cuidados: [
      "Gestão das capturas.",
      "Protecção dos habitats costeiros.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de Sparidae.",
  },

  {
    id: "dentex-congoensis",
    nome: "Dentão-do-Congo",
    cientifico: "Dentex congoensis",
    categoria: "Marinhos",
    grupo: "Sparidae",
    ambiente: "Águas costeiras",
    regiao: "Norte e centro",
    onde:
      "Associado à costa tropical africana e aos fundos costeiros.",
    resumo:
      "Espécie demersal da família dos dentões.",
    importancia:
      "Integra os recursos demersais costeiros.",
    producao:
      "Exploração através da pesca.",
    cuidados: [
      "Evitar captura excessiva.",
      "Proteger habitats de fundo.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de Sparidae.",
  },

  {
    id: "pargo",
    nome: "Pargo-ruço",
    cientifico: "Sparus caeruleostictus",
    categoria: "Marinhos",
    grupo: "Sparidae",
    ambiente: "Fundos costeiros",
    regiao: "Costa angolana",
    onde:
      "Associado a fundos costeiros, incluindo zonas rochosas e plataforma continental.",
    resumo:
      "Peixe costeiro de interesse comercial.",
    importancia:
      "Valorizado como pescado alimentar.",
    producao:
      "Principalmente recurso de pesca.",
    cuidados: [
      "Manter habitats costeiros.",
      "Evitar sobrepesca.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de peixe costeiro.",
  },

  {
    id: "pagellus-bellottii",
    nome: "Bica",
    cientifico: "Pagellus bellottii",
    categoria: "Marinhos",
    grupo: "Sparidae",
    ambiente: "Plataforma continental",
    regiao: "Costa angolana",
    onde:
      "Associada aos fundos costeiros e à plataforma continental.",
    resumo:
      "Peixe demersal de interesse alimentar.",
    importancia:
      "Integra pescarias costeiras.",
    producao:
      "Recurso de pesca.",
    cuidados: [
      "Controlar esforço de pesca.",
      "Conservar adequadamente após captura.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de Sparidae.",
  },

  {
    id: "corvina-aequidens",
    nome: "Corvina-de-boca-amarela",
    cientifico: "Atractoscion aequidens",
    categoria: "Marinhos",
    grupo: "Sciaenidae",
    ambiente: "Águas costeiras",
    regiao: "Centro e sul",
    onde:
      "Associada às águas costeiras e aos fundos marinhos de Angola.",
    resumo:
      "Corvina de importância comercial e alimentar.",
    importancia:
      "Tem valor para pescarias e consumo.",
    producao:
      "Principalmente capturada no ambiente natural.",
    cuidados: [
      "Evitar sobrepesca.",
      "Proteger áreas de reprodução.",
      "Manter cadeia de frio.",
    ],
    imagem: IMAGENS.corvina,
    legenda: "Argyrosomus regius como referência visual do grupo das corvinas.",
  },

  {
    id: "corvina-regius",
    nome: "Corvina",
    cientifico: "Argyrosomus regius",
    categoria: "Estuarinos",
    grupo: "Sciaenidae",
    ambiente: "Costeiro e estuarino",
    regiao: "Costa angolana",
    onde:
      "Pode utilizar ambientes costeiros e estuarinos, dependendo do ciclo de vida.",
    resumo:
      "Peixe de grande interesse alimentar e comercial.",
    importancia:
      "É valorizado pelo tamanho e pela qualidade da carne.",
    producao:
      "Pode apresentar interesse para aquicultura em sistemas adequados, mas a produção exige tecnologia e controlo rigoroso.",
    cuidados: [
      "Controlar qualidade da água.",
      "Evitar stress durante manejo.",
      "Utilizar alimentação adequada.",
      "Monitorizar sanidade.",
    ],
    imagem: IMAGENS.corvina2,
    legenda: "Argyrosomus regius.",
  },

  {
    id: "corvina-senegalensis",
    nome: "Corvina-branca",
    cientifico: "Pseudotolithus senegalensis",
    categoria: "Estuarinos",
    grupo: "Sciaenidae",
    ambiente: "Costeiro e estuarino",
    regiao: "Costa tropical de Angola",
    onde:
      "Associada a águas costeiras, fundos e ambientes próximos de estuários.",
    resumo:
      "Espécie demersal e costeira de interesse pesqueiro.",
    importancia:
      "Importante para pesca artesanal e consumo.",
    producao:
      "Principalmente recurso de pesca.",
    cuidados: [
      "Proteger zonas estuarinas.",
      "Evitar captura de juvenis.",
      "Controlar esforço de pesca.",
    ],
    imagem: IMAGENS.corvina,
    legenda: "Referência visual de corvina.",
  },

  {
    id: "garoupa-aeneus",
    nome: "Garoupa-branca",
    cientifico: "Epinephelus aeneus",
    categoria: "Marinhos",
    grupo: "Serranidae",
    ambiente: "Fundos costeiros",
    regiao: "Costa angolana",
    onde:
      "Associada a fundos costeiros e zonas rochosas.",
    resumo:
      "Peixe predador de grande valor comercial.",
    importancia:
      "Valorizado no mercado pelo tamanho e qualidade da carne.",
    producao:
      "A produção em cativeiro requer instalações e alimentação especializadas.",
    cuidados: [
      "Evitar pesca de reprodutores.",
      "Proteger fundos rochosos.",
      "Evitar captura indiscriminada.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de peixe marinho.",
  },

  {
    id: "garoupa-taeniops",
    nome: "Garoupa",
    cientifico: "Cephalopholis taeniops",
    categoria: "Marinhos",
    grupo: "Serranidae",
    ambiente: "Fundos rochosos",
    regiao: "Costa angolana",
    onde:
      "Associada principalmente a ambientes costeiros rochosos.",
    resumo:
      "Predador costeiro de interesse ecológico e alimentar.",
    importancia:
      "Tem valor alimentar e desempenha papel importante no equilíbrio dos ecossistemas.",
    producao:
      "Não deve ser considerada espécie aquícola básica para pequenos produtores.",
    cuidados: [
      "Proteger habitats rochosos.",
      "Evitar captura excessiva.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de peixe costeiro.",
  },

  {
    id: "carangideo-xareu",
    nome: "Xaréu",
    cientifico: "Caranx hippos",
    categoria: "Estuarinos",
    grupo: "Carangidae",
    ambiente: "Costeiro e estuarino",
    regiao: "Costa angolana",
    onde:
      "Pode ocorrer em águas costeiras e ambientes estuarinos.",
    resumo:
      "Predador costeiro de grande porte.",
    importancia:
      "Tem importância alimentar e pesqueira.",
    producao:
      "Recurso de pesca, não produção aquícola convencional.",
    cuidados: [
      "Evitar captura de juvenis.",
      "Proteger estuários e zonas de alimentação.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de peixe costeiro.",
  },

  {
    id: "chloroscombrus",
    nome: "Pampo",
    cientifico: "Chloroscombrus chrysurus",
    categoria: "Marinhos",
    grupo: "Carangidae",
    ambiente: "Águas costeiras",
    regiao: "Costa tropical",
    onde:
      "Associado às águas costeiras tropicais do Atlântico africano.",
    resumo:
      "Peixe pelágico costeiro de pequeno a médio porte.",
    importancia:
      "Integra comunidades de peixes costeiros.",
    producao:
      "Principalmente recurso pesqueiro.",
    cuidados: [
      "Reduzir captura de juvenis.",
      "Evitar desperdício no desembarque.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de Carangidae.",
  },

  {
    id: "scomberomorus",
    nome: "Serra",
    cientifico: "Scomberomorus tritor",
    categoria: "Marinhos",
    grupo: "Scombridae",
    ambiente: "Águas costeiras",
    regiao: "Costa angolana",
    onde:
      "Associada às águas costeiras e aos ambientes de peixes pelágicos predadores.",
    resumo:
      "Peixe predador de interesse alimentar.",
    importancia:
      "Importante para pesca artesanal e comercial.",
    producao:
      "Principalmente pesca.",
    cuidados: [
      "Controlar esforço pesqueiro.",
      "Evitar captura de indivíduos muito jovens.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de peixe pelágico.",
  },

  {
    id: "cavala",
    nome: "Cavala",
    cientifico: "Scomber japonicus",
    categoria: "Marinhos",
    grupo: "Scombridae",
    ambiente: "Águas costeiras e oceânicas",
    regiao: "Costa angolana",
    onde:
      "Associada a águas costeiras e oceânicas.",
    resumo:
      "Peixe pelágico de interesse alimentar.",
    importancia:
      "Importante para consumo e pescarias.",
    producao:
      "Recurso de pesca.",
    cuidados: [
      "Respeitar regras de pesca.",
      "Manter conservação do pescado.",
    ],
    imagem: IMAGENS.mar2,
    legenda: "Peixe pelágico marinho.",
  },

  {
    id: "trichiurus",
    nome: "Peixe-espada",
    cientifico: "Trichiurus lepturus",
    categoria: "Marinhos",
    grupo: "Trichiuridae",
    ambiente: "Águas costeiras",
    regiao: "Costa angolana",
    onde:
      "Associado às águas costeiras e à plataforma continental.",
    resumo:
      "Peixe alongado e predador de importância pesqueira.",
    importancia:
      "É utilizado como pescado alimentar.",
    producao:
      "Principalmente recurso de pesca.",
    cuidados: [
      "Evitar desperdícios.",
      "Conservar rapidamente após captura.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de peixe marinho.",
  },

  {
    id: "barbudo",
    nome: "Barbudo",
    cientifico: "Galeoides decadactylus",
    categoria: "Estuarinos",
    grupo: "Polynemidae",
    ambiente: "Costeiro e estuarino",
    regiao: "Costa tropical",
    onde:
      "Associado a fundos costeiros e ambientes influenciados por estuários.",
    resumo:
      "Peixe costeiro de interesse alimentar.",
    importancia:
      "Pode integrar pescarias artesanais.",
    producao:
      "Principalmente recurso de pesca.",
    cuidados: [
      "Proteger áreas costeiras e estuarinas.",
      "Evitar captura excessiva.",
    ],
    imagem: IMAGENS.mar,
    legenda: "Referência visual de peixe costeiro.",
  },

  {
    id: "ariidae",
    nome: "Peixe-gato-marinho",
    cientifico: "Arius heudeloti",
    categoria: "Estuarinos",
    grupo: "Ariidae",
    ambiente: "Costeiro, estuarino e águas salobras",
    regiao: "Costa norte e centro",
    onde:
      "Associado a ambientes costeiros e estuarinos da costa tropical africana.",
    resumo:
      "Peixe de fundo que tolera ambientes costeiros e salobros.",
    importancia:
      "Pode ter importância para a pesca artesanal.",
    producao:
      "Não é espécie de referência para piscicultura convencional de água doce.",
    cuidados: [
      "Proteger estuários.",
      "Evitar contaminação das águas.",
      "Controlar captura.",
    ],
    imagem: IMAGENS.bagre2,
    legenda: "Referência visual de peixe-gato.",
  },

  {
    id: "hydrocynus",
    nome: "Peixe-tigre africano",
    cientifico: "Hydrocynus vittatus",
    categoria: "Água doce",
    grupo: "Alestidae",
    ambiente: "Rios e grandes sistemas de água doce",
    regiao: "Sistemas interiores de Angola",
    onde:
      "Associado a grandes sistemas fluviais africanos, incluindo sistemas interiores relacionados com o Cubango e Zambeze.",
    resumo:
      "Predador de água doce conhecido pela importância ecológica.",
    importancia:
      "É importante para a estrutura das comunidades de peixes e para a pesca desportiva em alguns sistemas.",
    producao:
      "Não é uma espécie indicada como primeira opção para piscicultura familiar.",
    cuidados: [
      "Preservar rios e habitats naturais.",
      "Evitar introdução artificial.",
      "Proteger populações selvagens.",
    ],
    imagem: IMAGENS.bagre2,
    legenda: "Referência visual de peixe de água doce.",
  },

  {
    id: "alestes-ansorgii",
    nome: "Alestes",
    cientifico: "Alestes ansorgii",
    categoria: "Água doce",
    grupo: "Alestidae",
    ambiente: "Rios e águas interiores",
    regiao: "Bacias interiores",
    onde:
      "Associado a sistemas fluviais africanos, incluindo bacias presentes em Angola.",
    resumo:
      "Peixe de água doce pertencente à família Alestidae.",
    importancia:
      "Contribui para a biodiversidade e para as cadeias alimentares dos rios.",
    producao:
      "Não é uma espécie aquícola de referência para pequenos produtores.",
    cuidados: [
      "Proteger rios.",
      "Evitar poluição.",
      "Preservar vegetação ripícola.",
    ],
    imagem: IMAGENS.bagre2,
    legenda: "Referência visual de peixe de água doce.",
  },

  {
    id: "alestes-macrophthalmus",
    nome: "Alestes",
    cientifico: "Alestes macrophthalmus",
    categoria: "Água doce",
    grupo: "Alestidae",
    ambiente: "Rios e lagoas",
    regiao: "Sistemas continentais",
    onde:
      "Associado a sistemas africanos de água doce.",
    resumo:
      "Peixe de água doce integrante da diversidade continental.",
    importancia:
      "Tem interesse ecológico e alimentar local.",
    producao:
      "Não é uma das principais espécies recomendadas para iniciar uma exploração aquícola.",
    cuidados: [
      "Preservar habitats.",
      "Evitar captura indiscriminada.",
    ],
    imagem: IMAGENS.bagre2,
    legenda: "Referência visual de peixe continental.",
  },

  {
    id: "serranochromis-cuanza",
    nome: "Ciclídeo do Cuanza",
    cientifico: "Serranochromis cuanza",
    categoria: "Água doce",
    grupo: "Ciclídeos",
    ambiente: "Rio e águas interiores",
    regiao: "Sistema do rio Cuanza",
    onde:
      "Associado ao sistema do rio Cuanza e de elevado interesse para a biodiversidade piscícola angolana.",
    resumo:
      "Espécie especialmente interessante para o estudo da fauna aquática do Cuanza.",
    importancia:
      "Possui elevado interesse científico e de conservação.",
    producao:
      "Não deve ser capturada da natureza para iniciar piscicultura sem avaliação técnica e autorização aplicável.",
    cuidados: [
      "Proteger habitats naturais.",
      "Evitar translocações.",
      "Não libertar peixes de aquicultura no rio.",
      "Valorizar conservação genética.",
    ],
    imagem: IMAGENS.cacusso2,
    legenda: "Ciclídeo africano utilizado apenas como referência visual.",
  },

  {
    id: "oreochromis-spp",
    nome: "Tilápias",
    cientifico: "Oreochromis spp.",
    categoria: "Aquicultura",
    grupo: "Ciclídeos",
    ambiente: "Água doce",
    regiao: "Diversas regiões com condições adequadas",
    onde:
      "Espécies do género Oreochromis estão associadas a diferentes sistemas de água doce africanos.",
    resumo:
      "Grupo de grande importância para a piscicultura africana.",
    importancia:
      "As tilápias estão entre os peixes mais utilizados na aquicultura tropical.",
    producao:
      "Podem ser produzidas em tanques de terra, betão e outros sistemas apropriados.",
    cuidados: [
      "Escolher correctamente a espécie.",
      "Utilizar alevinos de boa qualidade.",
      "Controlar densidade.",
      "Monitorizar oxigénio e temperatura.",
      "Evitar fugas para ambientes naturais.",
    ],
    imagem: IMAGENS.cacusso2,
    legenda: "Oreochromis niloticus.",
  },

  {
    id: "labeobarbus",
    nome: "Barbos africanos",
    cientifico: "Labeobarbus spp.",
    categoria: "Água doce",
    grupo: "Cyprinidae",
    ambiente: "Rios e águas interiores",
    regiao: "Sistemas fluviais",
    onde:
      "Diversas espécies de barbos estão associadas aos sistemas continentais africanos.",
    resumo:
      "Grupo diversificado de peixes de água doce.",
    importancia:
      "Contribuem para a biodiversidade dos rios e podem ter importância alimentar local.",
    producao:
      "A produção depende da espécie e não deve ser generalizada.",
    cuidados: [
      "Proteger rios.",
      "Manter conectividade fluvial.",
      "Evitar introdução de espécies exóticas.",
    ],
    imagem: IMAGENS.bagre2,
    legenda: "Referência visual de peixe de água doce.",
  },

  {
    id: "mormyridae",
    nome: "Peixes-elefante",
    cientifico: "Mormyridae spp.",
    categoria: "Água doce",
    grupo: "Mormyridae",
    ambiente: "Rios e lagoas",
    regiao: "Bacias de água doce",
    onde:
      "Diversas espécies da família Mormyridae ocorrem em sistemas de água doce africanos.",
    resumo:
      "Grupo conhecido pelas características sensoriais e eléctricas particulares.",
    importancia:
      "Tem grande importância científica e ecológica.",
    producao:
      "Não é grupo prioritário para produção comercial convencional.",
    cuidados: [
      "Proteger habitats naturais.",
      "Evitar captura ornamental indiscriminada.",
    ],
    imagem: IMAGENS.bagre2,
    legenda: "Referência visual de fauna continental.",
  },

  {
    id: "xenomystus",
    nome: "Peixe-faca africano",
    cientifico: "Xenomystus nigri",
    categoria: "Água doce",
    grupo: "Notopteridae",
    ambiente: "Rios, lagoas e águas de pouca corrente",
    regiao: "Sistemas de água doce africanos",
    onde:
      "Associado a determinados sistemas de água doce africanos.",
    resumo:
      "Peixe nocturno de morfologia característica.",
    importancia:
      "Possui interesse ecológico e científico.",
    producao:
      "Não é uma espécie indicada para produção alimentar convencional.",
    cuidados: [
      "Evitar captura indiscriminada.",
      "Manter habitats naturais.",
    ],
    imagem: IMAGENS.bagre2,
    legenda: "Referência visual de fauna de água doce.",
  },

  {
    id: "ciclideos-angola",
    nome: "Ciclídeos de Angola",
    cientifico: "Cichlidae spp.",
    categoria: "Água doce",
    grupo: "Ciclídeos",
    ambiente: "Rios, lagoas e zonas húmidas",
    regiao: "Diversas bacias",
    onde:
      "Os sistemas de água doce angolanos possuem uma diversidade considerável de ciclídeos.",
    resumo:
      "Família extremamente diversificada em ambientes de água doce africanos.",
    importancia:
      "Inclui espécies alimentares, ecológicas, científicas e algumas de interesse aquícola.",
    producao:
      "A utilização aquícola depende da espécie. Não se deve tratar todos os ciclídeos como equivalentes.",
    cuidados: [
      "Identificar correctamente a espécie.",
      "Evitar introdução de espécies não nativas.",
      "Preservar diversidade genética.",
    ],
    imagem: IMAGENS.cacusso,
    legenda: "Oreochromis niloticus como exemplo de ciclídeo.",
  },

  {
    id: "peixes-cubango",
    nome: "Fauna piscícola do Cubango",
    cientifico: "Diversas espécies",
    categoria: "Água doce",
    grupo: "Comunidade de peixes",
    ambiente: "Rio e zonas húmidas",
    regiao: "Bacia do Cubango",
    onde:
      "Associada ao sistema do rio Cubango e aos ambientes aquáticos conectados à região do Okavango.",
    resumo:
      "Conjunto de espécies adaptadas a um dos grandes sistemas fluviais da África Austral.",
    importancia:
      "Possui elevado valor ecológico, alimentar e científico.",
    producao:
      "A produção deve privilegiar espécies adequadamente estudadas e sistemas controlados.",
    cuidados: [
      "Preservar zonas húmidas.",
      "Evitar poluição.",
      "Manter caudais e habitats.",
    ],
    imagem: IMAGENS.bagre2,
    legenda: "Referência visual de fauna de água doce.",
  },

  {
    id: "peixes-cunene",
    nome: "Fauna piscícola do Cunene",
    cientifico: "Diversas espécies",
    categoria: "Água doce",
    grupo: "Comunidade de peixes",
    ambiente: "Rio e zonas ribeirinhas",
    regiao: "Bacia do Cunene",
    onde:
      "Associada ao rio Cunene e aos seus ambientes de água doce.",
    resumo:
      "Conjunto de peixes associados ao sistema fluvial do sul de Angola.",
    importancia:
      "Tem importância ecológica e para as comunidades que dependem dos recursos aquáticos.",
    producao:
      "A aquicultura deve utilizar espécies adequadas e legalmente autorizadas, evitando retirar reprodutores dos rios sem controlo.",
    cuidados: [
      "Proteger margens.",
      "Evitar contaminação.",
      "Preservar habitats de reprodução.",
    ],
    imagem: IMAGENS.bagre2,
    legenda: "Referência visual de peixe continental.",
  },

  {
    id: "peixes-cuanza",
    nome: "Fauna piscícola do Cuanza",
    cientifico: "Diversas espécies",
    categoria: "Água doce",
    grupo: "Comunidade de peixes",
    ambiente: "Rio, lagoas e zonas ribeirinhas",
    regiao: "Bacia do Cuanza",
    onde:
      "Distribuída ao longo de diferentes sectores da bacia do rio Cuanza.",
    resumo:
      "Uma das comunidades piscícolas mais importantes para o estudo das águas interiores angolanas.",
    importancia:
      "Importante para biodiversidade, pesca continental e investigação.",
    producao:
      "A piscicultura deve ser feita em sistemas controlados e não através da simples captura de peixes selvagens.",
    cuidados: [
      "Proteger rios e afluentes.",
      "Evitar espécies invasoras.",
      "Controlar qualidade da água.",
    ],
    imagem: IMAGENS.cacusso2,
    legenda: "Ciclídeo africano como referência visual.",
  },

  {
    id: "fauna-bengo",
    nome: "Fauna piscícola do Bengo",
    cientifico: "Diversas espécies",
    categoria: "Água doce",
    grupo: "Comunidade de peixes",
    ambiente: "Rio, lagoas e zonas húmidas",
    regiao: "Bacia do Bengo",
    onde:
      "Associada ao rio Bengo, seus afluentes e ambientes aquáticos relacionados.",
    resumo:
      "Sistema de grande interesse para a pesca continental e para a aquicultura na região.",
    importancia:
      "Importante para comunidades locais e para estudos de produção de água doce.",
    producao:
      "A região pode apresentar interesse para piscicultura quando existem água, mercado e infra-estrutura adequados.",
    cuidados: [
      "Avaliar a qualidade da água antes da instalação.",
      "Evitar contaminação.",
      "Controlar efluentes.",
    ],
    imagem: IMAGENS.cacusso,
    legenda: "Referência visual de peixe de água doce.",
  },

  {
    id: "fauna-zambeze",
    nome: "Fauna do sistema do Zambeze",
    cientifico: "Diversas espécies",
    categoria: "Água doce",
    grupo: "Comunidade de peixes",
    ambiente: "Rios e zonas húmidas",
    regiao: "Leste e sudeste de Angola",
    onde:
      "Associada às áreas angolanas integradas nas bacias do sistema do Zambeze.",
    resumo:
      "Fauna continental relacionada com grandes sistemas fluviais da África Austral.",
    importancia:
      "Possui importância ecológica, científica e alimentar.",
    producao:
      "A produção aquícola deve utilizar espécies seleccionadas e sistemas controlados.",
    cuidados: [
      "Proteger rios.",
      "Evitar introduções não controladas.",
      "Preservar zonas de reprodução.",
    ],
    imagem: IMAGENS.bagre2,
    legenda: "Referência visual de fauna de água doce.",
  },
];

/* ============================================================
   ZONAS COSTEIRAS
============================================================ */

const zonas: Zona[] = [
  {
    nome: "Cabinda e costa norte",
    descricao:
      "A costa norte apresenta ambientes costeiros, estuarinos e marinhos associados à região tropical do Atlântico africano.",
    locais: ["Cabinda", "Soyo", "Nzeto", "Tomboco"],
    destaque:
      "Interesse para pequenos pelágicos, espécies costeiras, recursos demersais e pesca artesanal.",
    imagem: IMAGENS.mar2,
  },
  {
    nome: "Zaire e foz do Congo",
    descricao:
      "A influência do grande sistema fluvial do Congo cria uma zona costeira de elevada importância ecológica.",
    locais: ["Soyo", "Nzeto", "zonas estuarinas"],
    destaque:
      "Ambientes de transição entre água doce, água salobra e mar.",
    imagem: IMAGENS.mar,
  },
  {
    nome: "Bengo e Luanda",
    descricao:
      "A zona costeira de Luanda e Bengo combina praias, baías, ilhas, zonas estuarinas e áreas urbanizadas.",
    locais: ["Luanda", "Ilha de Luanda", "Mussulo", "Cacuaco", "Dande", "Ambriz"],
    destaque:
      "Grande importância para pesca artesanal, comércio de pescado e actividades costeiras.",
    imagem: IMAGENS.mar2,
  },
  {
    nome: "Cuanza-Sul",
    descricao:
      "A costa do Cuanza-Sul possui ambientes costeiros e estuarinos associados a importantes sistemas hidrográficos.",
    locais: ["Sumbe", "Porto Amboim", "Amboim"],
    destaque:
      "Pesca artesanal e exploração de recursos costeiros.",
    imagem: IMAGENS.mar,
  },
  {
    nome: "Benguela",
    descricao:
      "A costa de Benguela está fortemente relacionada com o sistema de Benguela, caracterizado por elevada produtividade marinha.",
    locais: ["Benguela", "Lobito", "Baía Farta", "Catumbela"],
    destaque:
      "Importância para pequenos pelágicos, recursos demersais e pesca comercial.",
    imagem: IMAGENS.carapau,
  },
  {
    nome: "Namibe",
    descricao:
      "A costa do Namibe está inserida no sector sul influenciado pelas águas frias e produtivas da corrente de Benguela.",
    locais: ["Namibe", "Tômbwa", "Baía dos Tigres"],
    destaque:
      "Grande importância ecológica e pesqueira.",
    imagem: IMAGENS.mar2,
  },
  {
    nome: "Cunene",
    descricao:
      "A região costeira do Cunene representa a transição entre os sistemas terrestres do sul e o Oceano Atlântico.",
    locais: ["Tombwa", "zona da foz do Cunene"],
    destaque:
      "Importância para ambientes costeiros, estuarinos e para a pesca.",
    imagem: IMAGENS.mar,
  },
];

/* ============================================================
   COMPONENTE DE IMAGEM
============================================================ */

function ImagemSegura({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full object-cover ${className}`}
      loading="lazy"
      onError={(event) => {
        const imagem = event.currentTarget;

        if (!imagem.dataset.fallback) {
          imagem.dataset.fallback = "true";
          imagem.src = IMAGENS.mar;
        }
      }}
    />
  );
}

/* ============================================================
   COMPONENTE PRINCIPAL
============================================================ */

export default function EspeciesPescaPage() {
  const [categoria, setCategoria] = useState<Categoria>("Todos");
  const [pesquisa, setPesquisa] = useState("");
  const [especieSelecionada, setEspecieSelecionada] =
    useState<Especie | null>(null);

  const detalheRef = useRef<HTMLDivElement | null>(null);
  const especiesRef = useRef<HTMLDivElement | null>(null);

  const especiesFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    return especies.filter((especie) => {
      const correspondeCategoria =
        categoria === "Todos" || especie.categoria === categoria;

      const correspondePesquisa =
        !termo ||
        especie.nome.toLowerCase().includes(termo) ||
        especie.cientifico.toLowerCase().includes(termo) ||
        especie.grupo.toLowerCase().includes(termo) ||
        especie.regiao.toLowerCase().includes(termo);

      return correspondeCategoria && correspondePesquisa;
    });
  }, [categoria, pesquisa]);

  function abrirEspecie(especie: Especie) {
    setEspecieSelecionada(especie);

    window.setTimeout(() => {
      detalheRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  }

  function fecharEspecie() {
    setEspecieSelecionada(null);

    window.setTimeout(() => {
      especiesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#075c3b]">
        <div className="absolute inset-0">
          <ImagemSegura
            src={IMAGENS.mar2}
            alt="Ambiente marinho da costa de Angola"
            className="h-full min-h-[560px] opacity-25"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-emerald-200">
              AGROINOVA ANGOLA · PESCA
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fauna aquática de Angola
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-emerald-50 sm:text-xl">
              Conheça os principais peixes marinhos e de água doce associados
              aos ambientes aquáticos de Angola, onde podem ser encontrados,
              qual a sua importância e quais os cuidados necessários para quem
              pretende trabalhar com pesca ou produção aquícola.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#especies"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-[#075c3b] transition hover:bg-emerald-50"
              >
                Explorar espécies
              </a>

              <a
                href="#produzir"
                className="rounded-xl border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Quero produzir peixe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          INTRODUÇÃO
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087f4f]">
              Conhecimento para Angola
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Uma costa, muitos ambientes e uma enorme diversidade aquática
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Angola possui uma extensa costa atlântica, sistemas estuarinos,
              rios, lagoas, zonas húmidas e grandes bacias hidrográficas. Essa
              diversidade cria condições para diferentes comunidades de peixes
              marinhos, costeiros e continentais.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A realidade da pesca angolana não pode ser explicada apenas pelo
              oceano. O Cuanza, o Bengo, o Cunene, o Cubango e outros sistemas
              fluviais também sustentam biodiversidade, pesca continental e
              oportunidades para a aquicultura.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nesta biblioteca, a informação é organizada para servir
              estudantes, técnicos, investigadores, pescadores, produtores,
              empreendedores e qualquer pessoa que queira compreender melhor os
              recursos aquáticos de Angola.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <ImagemSegura
              src={IMAGENS.cacusso2}
              alt="Peixe de água doce"
              className="h-[430px]"
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          NÚMEROS / CATEGORIAS
      ====================================================== */}

      <section className="border-y border-emerald-100 bg-emerald-50/60">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="border-b border-emerald-100 px-6 py-10 sm:border-r lg:border-b-0">
            <strong className="block text-4xl font-bold text-[#075c3b]">
              40+
            </strong>
            <span className="mt-2 block text-sm font-medium text-slate-600">
              espécies e grupos apresentados
            </span>
          </div>

          <div className="border-b border-emerald-100 px-6 py-10 lg:border-r lg:border-b-0">
            <strong className="block text-4xl font-bold text-[#075c3b]">
              Mar
            </strong>
            <span className="mt-2 block text-sm font-medium text-slate-600">
              ambientes costeiros e oceânicos
            </span>
          </div>

          <div className="border-b border-emerald-100 px-6 py-10 sm:border-r sm:border-b-0">
            <strong className="block text-4xl font-bold text-[#075c3b]">
              Rios
            </strong>
            <span className="mt-2 block text-sm font-medium text-slate-600">
              sistemas continentais e zonas húmidas
            </span>
          </div>

          <div className="px-6 py-10">
            <strong className="block text-4xl font-bold text-[#075c3b]">
              Produção
            </strong>
            <span className="mt-2 block text-sm font-medium text-slate-600">
              orientação para aquicultura
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================
          ESPÉCIES
      ====================================================== */}

      <section
        id="especies"
        ref={especiesRef}
        className="mx-auto max-w-7xl scroll-mt-8 px-6 py-20 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087f4f]">
            Biblioteca
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Espécies aquáticas de Angola
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore espécies marinhas, costeiras, estuarinas e de água doce.
            Seleccione uma espécie para consultar a ficha técnica completa na
            mesma página.
          </p>
        </div>

        {/* Pesquisa */}
        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto]">
          <input
            type="search"
            value={pesquisa}
            onChange={(event) => setPesquisa(event.target.value)}
            placeholder="Pesquisar espécie, nome científico, grupo ou região..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-[#087f4f] focus:ring-4 focus:ring-emerald-100"
          />

          <div className="flex flex-wrap gap-2">
            {(
              [
                "Todos",
                "Marinhos",
                "Água doce",
                "Estuarinos",
                "Aquicultura",
              ] as Categoria[]
            ).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategoria(item)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  categoria === item
                    ? "bg-[#075c3b] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-[#075c3b]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            {especiesFiltradas.length} resultados apresentados
          </p>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {especiesFiltradas.map((especie) => (
            <article
              key={especie.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <ImagemSegura
                  src={especie.imagem}
                  alt={especie.nome}
                  className="h-56 transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#075c3b] shadow">
                  {especie.categoria}
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#087f4f]">
                  {especie.grupo}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {especie.nome}
                </h3>

                <p className="mt-1 text-sm italic text-slate-500">
                  {especie.cientifico}
                </p>

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                  {especie.resumo}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Onde encontrar
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {especie.regiao}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => abrirEspecie(especie)}
                  className="mt-6 w-full rounded-xl bg-[#075c3b] px-5 py-3 font-semibold text-white transition hover:bg-[#064a30]"
                >
                  Ver informações completas
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ======================================================
          DETALHE DA ESPÉCIE
      ====================================================== */}

      {especieSelecionada && (
        <section
          ref={detalheRef}
          className="scroll-mt-8 border-y border-emerald-100 bg-emerald-50/40"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087f4f]">
                  Ficha da espécie
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                  {especieSelecionada.nome}
                </h2>

                <p className="mt-2 text-lg italic text-slate-500">
                  {especieSelecionada.cientifico}
                </p>
              </div>

              <button
                type="button"
                onClick={fecharEspecie}
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-[#087f4f] hover:text-[#075c3b]"
              >
                Voltar às espécies
              </button>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                  <ImagemSegura
                    src={especieSelecionada.imagem}
                    alt={especieSelecionada.nome}
                    className="h-[440px]"
                  />

                  <div className="p-5">
                    <p className="text-sm leading-6 text-slate-500">
                      {especieSelecionada.legenda}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl bg-[#075c3b] p-7 text-white">
                  <p className="text-sm font-bold uppercase tracking-widest text-emerald-200">
                    Ambiente
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    {especieSelecionada.ambiente}
                  </p>

                  <p className="mt-5 text-sm font-bold uppercase tracking-widest text-emerald-200">
                    Região
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    {especieSelecionada.regiao}
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087f4f]">
                    Onde encontrar em Angola
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    Distribuição e ambiente
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {especieSelecionada.onde}
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    Importância
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {especieSelecionada.importancia}
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    Produção e utilização
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {especieSelecionada.producao}
                  </p>
                </div>

                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7">
                  <h3 className="text-xl font-bold text-[#075c3b]">
                    Cuidados essenciais
                  </h3>

                  <div className="mt-4 space-y-3">
                    {especieSelecionada.cuidados.map((cuidado) => (
                      <div
                        key={cuidado}
                        className="border-l-4 border-[#087f4f] pl-4 text-sm leading-6 text-slate-700"
                      >
                        {cuidado}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ======================================================
          ZONAS COSTEIRAS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087f4f]">
            Costa angolana
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Onde encontramos os principais recursos pesqueiros?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A distribuição dos peixes não é uniforme ao longo da costa. As
            condições oceanográficas, profundidade, temperatura, alimento,
            correntes e características dos fundos influenciam a presença das
            diferentes espécies.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {zonas.map((zona) => (
            <article
              key={zona.nome}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <ImagemSegura
                src={zona.imagem}
                alt={zona.nome}
                className="h-52"
              />

              <div className="p-7">
                <h3 className="text-xl font-bold text-slate-900">
                  {zona.nome}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {zona.descricao}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#087f4f]">
                    Locais e referências
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {zona.locais.map((local) => (
                      <span
                        key={local}
                        className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-[#075c3b]"
                      >
                        {local}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {zona.destaque}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ======================================================
          RIOS
      ====================================================== */}

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Águas continentais
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Angola também é um país de rios e grandes bacias
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              A fauna piscícola angolana não termina na costa. Os rios e as
              zonas húmidas formam sistemas ecológicos fundamentais para a
              biodiversidade, para a alimentação e para as comunidades rurais.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                nome: "Rio Cuanza",
                texto:
                  "Um dos principais sistemas fluviais de Angola, com elevada importância ecológica e para a pesca continental.",
              },
              {
                nome: "Rio Bengo",
                texto:
                  "Sistema de água doce de importância para comunidades e para actividades aquícolas na região norte.",
              },
              {
                nome: "Rio Cunene",
                texto:
                  "Grande sistema fluvial do sul, associado a comunidades piscícolas e ambientes ribeirinhos.",
              },
              {
                nome: "Rio Cubango",
                texto:
                  "Sistema ligado às grandes zonas húmidas do interior da África Austral.",
              },
            ].map((rio) => (
              <article
                key={rio.nome}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-xl font-bold">{rio.nome}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {rio.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          QUEM QUER PRODUZIR
      ====================================================== */}

      <section
        id="produzir"
        className="scroll-mt-8 bg-emerald-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087f4f]">
              Aquicultura
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-5xl">
              Quer produzir peixe em Angola?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Produzir peixe não começa pela construção do tanque. Começa pela
              escolha correcta da espécie, da água, do local, do sistema de
              produção e do mercado.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titulo: "1. Escolha da espécie",
                texto:
                  "Escolha uma espécie compatível com o clima, água, sistema de produção, alimentação disponível e mercado.",
              },
              {
                titulo: "2. Avaliação da água",
                texto:
                  "Antes de construir, avalie origem, disponibilidade, temperatura, pH, oxigénio, turbidez e possíveis contaminantes.",
              },
              {
                titulo: "3. Escolha do local",
                texto:
                  "O terreno deve permitir abastecimento e drenagem adequados, acesso, segurança e possibilidade de expansão.",
              },
              {
                titulo: "4. Alevinos",
                texto:
                  "Utilize alevinos de origem conhecida, com bom estado sanitário, tamanho uniforme e características adequadas.",
              },
              {
                titulo: "5. Alimentação",
                texto:
                  "A alimentação representa uma das maiores despesas da piscicultura. Evite desperdícios e utilize rações adequadas.",
              },
              {
                titulo: "6. Densidade",
                texto:
                  "Mais peixes não significa automaticamente mais lucro. A densidade deve estar de acordo com o sistema e capacidade da água.",
              },
              {
                titulo: "7. Qualidade da água",
                texto:
                  "Monitorize temperatura, oxigénio dissolvido, pH, amónia, nitrito, transparência e matéria orgânica.",
              },
              {
                titulo: "8. Sanidade",
                texto:
                  "Observe comportamento, apetite, lesões, mortalidade e alterações na água. Problemas devem ser investigados rapidamente.",
              },
              {
                titulo: "9. Biossegurança",
                texto:
                  "Controle entrada de animais, equipamentos, água, pessoas e materiais que possam introduzir agentes infecciosos.",
              },
              {
                titulo: "10. Despesca",
                texto:
                  "Planeie o momento da colheita de acordo com tamanho, procura do mercado, preço e capacidade de conservação.",
              },
              {
                titulo: "11. Pós-colheita",
                texto:
                  "O peixe deve ser manuseado, higienizado, conservado e transportado de forma a preservar a qualidade.",
              },
              {
                titulo: "12. Mercado",
                texto:
                  "Antes de produzir, identifique quem vai comprar, quanto está disposto a pagar e como o pescado será transportado.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SISTEMAS DE PRODUÇÃO
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Tanques de terra
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              Podem ser adequados para propriedades com espaço, água suficiente
              e solo apropriado. O projecto deve considerar entrada e saída de
              água, drenagem, profundidade, segurança e manutenção.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Tanques de betão
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              Permitem maior controlo das condições de produção, mas exigem
              investimento em construção, abastecimento, drenagem e gestão da
              qualidade da água.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Sistemas intensivos
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              Podem aumentar a produção por área, mas exigem maior controlo
              técnico, alimentação, oxigenação, energia, monitorização e
              biossegurança.
            </p>
          </article>
        </div>
      </section>

      {/* ======================================================
          ERROS
      ====================================================== */}

      <section className="border-y border-red-100 bg-red-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">
              Atenção do produtor
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Erros que podem comprometer uma piscicultura
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Muitos problemas começam antes da entrada dos primeiros peixes.
              Um bom projecto precisa de preparação técnica e económica.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Construir o tanque antes de avaliar a água.",
              "Comprar alevinos sem conhecer a sua origem.",
              "Colocar peixes em densidade excessiva.",
              "Alimentar em excesso para tentar acelerar o crescimento.",
              "Não controlar a qualidade da água.",
              "Misturar lotes de origem desconhecida.",
              "Introduzir peixes selvagens sem avaliação sanitária.",
              "Utilizar medicamentos sem orientação técnica.",
              "Libertar espécies de produção nos rios.",
              "Produzir sem estudar previamente o mercado.",
              "Ignorar perdas durante transporte e conservação.",
              "Não manter registos de alimentação, mortalidade e crescimento.",
            ].map((erro) => (
              <div
                key={erro}
                className="rounded-2xl border border-red-100 bg-white px-6 py-5 text-sm font-medium leading-6 text-slate-700"
              >
                {erro}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CONSERVAÇÃO
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087f4f]">
              Conservação
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Produzir mais também significa proteger os recursos naturais
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A pesca e a aquicultura precisam caminhar juntamente com a
              conservação. Rios contaminados, destruição de habitats, pesca
              excessiva e introdução descontrolada de espécies podem prejudicar
              tanto a biodiversidade como a própria produção.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Uma exploração responsável deve controlar os seus efluentes,
              evitar fugas de espécies cultivadas, utilizar água de forma
              racional e respeitar as regras ambientais e pesqueiras aplicáveis.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <ImagemSegura
              src={IMAGENS.mar2}
              alt="Ecossistema marinho"
              className="h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          FONTES
      ====================================================== */}

      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087f4f]">
              Base técnica
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Informação científica e técnica
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A biblioteca deve ser continuamente actualizada com informação
              proveniente de organismos científicos e técnicos reconhecidos,
              incluindo FAO, FishBase, instituições de investigação pesqueira,
              universidades e fontes oficiais angolanas.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "FAO",
                "FishBase",
                "Instituições científicas angolanas",
                "Universidades e investigação",
              ].map((fonte) => (
                <div
                  key={fonte}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-700"
                >
                  {fonte}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          RODAPÉ DA PÁGINA
      ====================================================== */}

      <section className="bg-[#075c3b]">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Conhecimento, tecnologia e inovação ao serviço do campo angolano.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-emerald-100">
            A AGROINOVA ANGOLA reúne conhecimento técnico, científico e
            informação sobre os recursos agropecuários e pesqueiros do país.
          </p>
        </div>
      </section>
    </main>
  );
}