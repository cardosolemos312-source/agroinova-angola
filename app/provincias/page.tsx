"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Provincia = {
  nome: string;
  slug: string;
  cor: string;
  imagem: string;
  capital: string;
  regiao: string;
  area: string;
  municipios: number;
  descricao: string;
  perfil: string;
  agricultura: string;
  culturas: string[];
  pecuaria: string;
  especiesPecuarias: string[];
  pesca: string;
  florestas: string;
  clima: string;
  solos: string;
  agua: string;
  recursosNaturais: string;
  economia: string;
  infraestruturas: string;
  mercados: string;
  oportunidades: string[];
  desafios: string[];
  pesquisa: string;
  turismo: string;
  dados: string;
  fontes: string[];
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    slug: "bengo",
    cor: "from-emerald-950",
    imagem:
      "https://images.openai.com/static-rsc-4/mFdKHQsaY1NvF6s7k6WWeoMg9i-iYTraTK07b9g2FCUAsVhGb1-TKUtFYMkj4RikxCcgFyOJXqFbxyhXTXCBSi1kj2Bng3vdmcsXe__XuJJGXsp_d8RIgphzqQvWRKarh78g9DXsnNKpAqro9rC7Yn0N6YVp9l-sVvm3sLz4Ut21yBGachicZW5g0mbbwNPm?purpose=fullsize",
    capital: "Dande",
    regiao: "Norte de Angola",
    area: "31 371 km²",
    municipios: 12,
    descricao:
      "Província localizada na região norte de Angola, com forte relação territorial com Luanda e importante potencial agrícola, florestal, pesqueiro e turístico.",
    perfil:
      "O Bengo apresenta uma combinação de áreas agrícolas, zonas de floresta, cursos de água e território costeiro. A proximidade de Luanda constitui uma vantagem estratégica para abastecimento, comercialização e desenvolvimento de cadeias de valor.",
    agricultura:
      "A agricultura possui importância para a produção de alimentos e para o abastecimento dos grandes mercados da região de Luanda. Existem oportunidades para horticultura, fruticultura, produção de cereais, mandioca e outras culturas adaptadas às condições locais.",
    culturas: [
      "Mandioca",
      "Milho",
      "Feijão",
      "Hortícolas",
      "Fruticultura",
      "Banana",
      "Cana-de-açúcar",
    ],
    pecuaria:
      "A pecuária complementa as atividades agrícolas e apresenta oportunidades de desenvolvimento através da melhoria genética, alimentação animal, sanidade, processamento e comercialização.",
    especiesPecuarias: [
      "Bovinos",
      "Caprinos",
      "Suínos",
      "Aves",
      "Pequenos ruminantes",
    ],
    pesca:
      "As zonas costeiras e os recursos hídricos criam condições para atividades ligadas à pesca e ao aproveitamento sustentável dos recursos aquáticos.",
    florestas:
      "O território apresenta áreas com vegetação natural e recursos florestais que exigem gestão sustentável, recuperação ambiental e aproveitamento responsável.",
    clima:
      "O clima apresenta influência tropical, com diferenças entre as zonas costeiras e interiores. A distribuição das chuvas é importante para definir calendários agrícolas e necessidades de irrigação.",
    solos:
      "Os solos apresentam diferentes características segundo a localização. O conhecimento da fertilidade, textura, drenagem e capacidade de retenção de água é fundamental para o planeamento agrícola.",
    agua:
      "A presença de rios, cursos de água e zonas húmidas constitui um recurso importante para agricultura, pecuária, abastecimento e conservação dos ecossistemas.",
    recursosNaturais:
      "A província possui recursos naturais associados aos seus solos, florestas, águas, biodiversidade e território costeiro.",
    economia:
      "A economia provincial combina agricultura, comércio, pesca, pecuária, serviços e atividades associadas à proximidade da capital do país.",
    infraestruturas:
      "A proximidade com Luanda cria oportunidades logísticas importantes, embora o desenvolvimento rural dependa da melhoria contínua de estradas, armazenamento, energia e água.",
    mercados:
      "A proximidade de Luanda constitui uma vantagem para comercialização de produtos agrícolas, pecuários e pesqueiros.",
    oportunidades: [
      "Horticultura comercial",
      "Agroindústria",
      "Fruticultura",
      "Cadeias de frio",
      "Armazenamento agrícola",
      "Aquicultura",
      "Turismo ecológico",
      "Transformação de produtos agrícolas",
    ],
    desafios: [
      "Melhoria das estradas rurais",
      "Acesso à água",
      "Armazenamento",
      "Assistência técnica",
      "Comercialização",
      "Conservação dos recursos naturais",
    ],
    pesquisa:
      "Existe espaço para investigação sobre solos, produtividade agrícola, gestão da água, conservação florestal e adaptação às alterações climáticas.",
    turismo:
      "O território apresenta potencial para turismo de natureza, áreas costeiras, paisagens rurais e património cultural.",
    dados:
      "Os indicadores demográficos e socioeconómicos devem ser atualizados com os dados oficiais do INE e do Censo 2024.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Benguela",
    slug: "benguela",
    cor: "from-sky-950",
    imagem:
      "https://images.openai.com/static-rsc-4/5Gfj8QBOVCv8AJHIYYrqTXmi3O1Rg2aIr-VA8qDRQwRjXtvNTbrBwMfQVnRSGF6YNZiiRvHy9nY_PoS5N_fu4qXUl13XXrqjm4Rq4Waj6kmMVZpWpXkZ4tqtArQLNQPMLUB9BAi-VLGEkghszOu2rP508dUQmxO7P8S57ZrpQopubq5Rq26-OqK7FkPsYvzQ?purpose=fullsize",
    capital: "Benguela",
    regiao: "Litoral Centro",
    area: "39 827 km²",
    municipios: 23,
    descricao:
      "Província costeira com forte atividade económica, agrícola, pecuária, pesqueira e comercial.",
    perfil:
      "Benguela ocupa uma posição estratégica no litoral centro de Angola e possui ligação com importantes corredores económicos e logísticos.",
    agricultura:
      "A agricultura combina produção de sequeiro e agricultura irrigada, com importância para hortícolas, cereais, frutas e outras culturas.",
    culturas: [
      "Milho",
      "Feijão",
      "Hortícolas",
      "Banana",
      "Citrinos",
      "Fruticultura",
      "Cereais",
    ],
    pecuaria:
      "A pecuária possui expressão nas áreas rurais e semiáridas, podendo ser fortalecida através de alimentação animal, sanidade e melhoria dos sistemas de produção.",
    especiesPecuarias: [
      "Bovinos",
      "Caprinos",
      "Ovinos",
      "Suínos",
      "Aves",
    ],
    pesca:
      "A localização atlântica torna a pesca uma atividade económica estratégica, juntamente com a transformação, conservação e comercialização de pescado.",
    florestas:
      "As áreas interiores apresentam formações vegetais adaptadas às condições climáticas locais e devem ser geridas de forma sustentável.",
    clima:
      "O clima varia entre a faixa costeira e as áreas interiores, com zonas mais secas e necessidade de gestão eficiente da água.",
    solos:
      "Os solos apresentam diferentes aptidões agrícolas. A irrigação, fertilização adequada e conservação do solo são fundamentais em várias áreas.",
    agua:
      "A gestão dos recursos hídricos é estratégica para agricultura, abastecimento e pecuária.",
    recursosNaturais:
      "Destacam-se os recursos marinhos, terras agrícolas, recursos hídricos e paisagens naturais.",
    economia:
      "Benguela possui uma economia diversificada, com comércio, agricultura, pesca, indústria, serviços e logística.",
    infraestruturas:
      "A província possui importância logística e ligação a corredores rodoviários e ferroviários nacionais.",
    mercados:
      "Os centros urbanos e os corredores logísticos favorecem a comercialização e distribuição de produtos.",
    oportunidades: [
      "Pesca industrial e artesanal",
      "Aquicultura",
      "Agroindústria",
      "Horticultura irrigada",
      "Fruticultura",
      "Transformação de pescado",
      "Logística",
      "Turismo costeiro",
    ],
    desafios: [
      "Escassez de água em algumas áreas",
      "Gestão dos recursos pesqueiros",
      "Infraestruturas rurais",
      "Conservação do solo",
      "Comercialização agrícola",
    ],
    pesquisa:
      "Áreas prioritárias incluem agricultura irrigada, pesca sustentável, aquicultura, gestão da água e adaptação climática.",
    turismo:
      "A costa, as paisagens naturais e o património histórico conferem elevado potencial turístico.",
    dados:
      "Os dados populacionais e estatísticos devem ser atualizados através das publicações oficiais do INE.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Bié",
    slug: "bie",
    cor: "from-amber-950",
    imagem:
      "https://images.openai.com/static-rsc-4/XOye5DIe6udihXjJY1f-tTM4A6unrnMShNvng1xqrMgZNJf2Us8cQEtnC4zHH53yRFp0VTi3meIlFLBZmIKfmiSfRbffkRRsS_DS91vDDs0eoVOpPy01yU6aRiSnf21qaftfZZ1qojHaQ61_XbyrsImvAe8gjHspNmqjbYXNfEWyphINB9RcHxD_zW1g70LU?purpose=fullsize",
    capital: "Cuito",
    regiao: "Planalto Central",
    area: "70 314 km²",
    municipios: 19,
    descricao:
      "Província do Planalto Central com forte vocação agrícola e pecuária.",
    perfil:
      "O Bié integra uma das zonas agrícolas importantes do interior de Angola e apresenta condições favoráveis para cereais, leguminosas, tubérculos e criação de animais.",
    agricultura:
      "A agricultura constitui uma das principais bases económicas. O potencial está relacionado com cereais, leguminosas, tubérculos, hortícolas e transformação agroalimentar.",
    culturas: [
      "Milho",
      "Feijão",
      "Batata",
      "Mandioca",
      "Hortícolas",
      "Soja",
      "Cereais",
    ],
    pecuaria:
      "A pecuária apresenta potencial para sistemas familiares e comerciais, especialmente bovinos, suínos, caprinos e aves.",
    especiesPecuarias: [
      "Bovinos",
      "Suínos",
      "Caprinos",
      "Ovinos",
      "Aves",
    ],
    pesca:
      "Os recursos hídricos podem apoiar pesca continental e aquicultura em locais adequados.",
    florestas:
      "As formações vegetais do Planalto Central são relevantes para conservação do solo, água e biodiversidade.",
    clima:
      "O clima do Planalto Central apresenta estação chuvosa bem marcada, condição importante para agricultura de sequeiro.",
    solos:
      "A gestão da fertilidade, erosão e matéria orgânica é essencial para manter a produtividade agrícola.",
    agua:
      "Rios e nascentes são importantes para agricultura, abastecimento e conservação ambiental.",
    recursosNaturais:
      "Destacam-se solos agrícolas, recursos hídricos, vegetação natural e biodiversidade.",
    economia:
      "Agricultura, pecuária, comércio e serviços formam componentes importantes da economia provincial.",
    infraestruturas:
      "A posição geográfica favorece conexões com outras regiões do país, mas a infraestrutura rural continua fundamental para o escoamento.",
    mercados:
      "A melhoria da armazenagem e das ligações rodoviárias pode ampliar a integração dos produtores aos mercados.",
    oportunidades: [
      "Produção de cereais",
      "Agroindústria",
      "Armazenamento",
      "Pecuária comercial",
      "Produção de sementes",
      "Horticultura",
      "Transformação alimentar",
    ],
    desafios: [
      "Acesso a insumos",
      "Estradas rurais",
      "Armazenamento",
      "Assistência técnica",
      "Financiamento agrícola",
    ],
    pesquisa:
      "Investigação em fertilidade do solo, sementes, produtividade, mecanização e adaptação climática apresenta grande relevância.",
    turismo:
      "O Planalto Central apresenta paisagens naturais, rios e património cultural com potencial turístico.",
    dados:
      "Os dados estatísticos devem ser ligados às séries oficiais do INE.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Cabinda",
    slug: "cabinda",
    cor: "from-purple-950",
    imagem:
      "https://images.openai.com/static-rsc-4/KSK_NMjMerzxG_1q6Gjo2eaoFkWKS0IDKDKqVT2XP-7MCebF9XHvvb1UL8vcVsuyxP9qX1Ba2l6FZAx4412nukC_229jlhQeNiSW05Q867d53_EYfaC0tCDZqz04DT_lbWKYzNwMjIwwMoGwzBzWxaZTJrvrqw3_EdFiVm1bCaUHPAU2eRSWPKIDQTRxVxQz?purpose=fullsize",
    capital: "Cabinda",
    regiao: "Norte / Enclave de Cabinda",
    area: "7 283 km²",
    municipios: 10,
    descricao:
      "Província de elevada importância económica e ambiental, marcada por florestas tropicais, costa atlântica e recursos energéticos.",
    perfil:
      "Cabinda apresenta forte diversidade ambiental, incluindo áreas florestais, zonas costeiras e importantes recursos naturais.",
    agricultura:
      "A agricultura familiar e comercial pode beneficiar de condições favoráveis de humidade, solos e proximidade de mercados.",
    culturas: [
      "Mandioca",
      "Banana",
      "Cacau",
      "Café",
      "Fruticultura",
      "Hortícolas",
    ],
    pecuaria:
      "A produção pecuária pode ser integrada com sistemas agrícolas e aproveitamento de subprodutos.",
    especiesPecuarias: [
      "Aves",
      "Suínos",
      "Caprinos",
      "Bovinos",
    ],
    pesca:
      "A costa atlântica oferece recursos pesqueiros e potencial para aquicultura.",
    florestas:
      "As florestas tropicais são um dos principais patrimónios naturais da província e exigem conservação e gestão sustentável.",
    clima:
      "Predomina clima tropical húmido, com influência marítima e elevada importância das chuvas.",
    solos:
      "A diversidade de solos permite diferentes sistemas de produção, devendo ser considerados drenagem e fertilidade.",
    agua:
      "A disponibilidade de cursos de água favorece ecossistemas florestais e atividades produtivas.",
    recursosNaturais:
      "Florestas, biodiversidade, recursos marinhos e recursos energéticos têm grande importância.",
    economia:
      "A economia é fortemente influenciada pelo setor petrolífero, comércio, serviços e atividades produtivas.",
    infraestruturas:
      "A infraestrutura urbana, portuária e rodoviária tem papel estratégico para a economia provincial.",
    mercados:
      "O mercado urbano e as conexões com outros territórios criam oportunidades para produtos agrícolas e pesqueiros.",
    oportunidades: [
      "Agrofloresta",
      "Cacau",
      "Café",
      "Aquicultura",
      "Turismo ecológico",
      "Transformação alimentar",
      "Produtos florestais não madeireiros",
    ],
    desafios: [
      "Conservação florestal",
      "Diversificação económica",
      "Acesso rural",
      "Gestão ambiental",
      "Transformação local",
    ],
    pesquisa:
      "Biodiversidade, florestas tropicais, agricultura sustentável e recursos marinhos são áreas estratégicas.",
    turismo:
      "Florestas, costa, biodiversidade e património cultural oferecem oportunidades para turismo sustentável.",
    dados:
      "Indicadores estatísticos devem ser atualizados com dados do INE.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Cuando",
    slug: "cuando",
    cor: "from-orange-950",
    imagem:
      "https://images.openai.com/static-rsc-4/2BqUvLLMBn0bmo5Ypb0Rzh4F1owNXUa-A3Q5fFwACqmyar6hALvnOzMDHsaurJO5VQlJ9ixmu-ueC-MV_2YfAtBDbONuTA-gg93DWUyvawbc8rVRx53lh2YunPA8r6LY54q3nI7D1YBruhJ0lmhhPAeZ_OHJ_JylFe37JHXecMI_e_I0f0y7Z6bXT08uEni3?purpose=fullsize",
    capital: "Mavinga",
    regiao: "Sudeste de Angola",
    area: "199 049 km²",
    municipios: 9,
    descricao:
      "Uma das novas províncias resultantes da atual divisão político-administrativa, com grande extensão territorial e forte potencial natural.",
    perfil:
      "O Cuando possui extensas áreas naturais, savanas, recursos hídricos e potencial para agricultura, pecuária, conservação e turismo.",
    agricultura:
      "A agricultura apresenta potencial para cereais, mandioca, leguminosas e sistemas adaptados às condições locais.",
    culturas: [
      "Milho",
      "Mandioca",
      "Feijão",
      "Massango",
      "Massambala",
      "Hortícolas",
    ],
    pecuaria:
      "A grande extensão territorial favorece sistemas extensivos de pecuária, desde que acompanhados de gestão de pastagens e água.",
    especiesPecuarias: [
      "Bovinos",
      "Caprinos",
      "Ovinos",
      "Aves",
    ],
    pesca:
      "Os rios e outros corpos de água oferecem potencial para pesca continental e aquicultura.",
    florestas:
      "As áreas naturais possuem importância para conservação, biodiversidade e serviços dos ecossistemas.",
    clima:
      "O clima apresenta características tropicais do interior sudeste, com marcada sazonalidade das chuvas.",
    solos:
      "A utilização agrícola deve considerar fertilidade, matéria orgânica, erosão e disponibilidade de água.",
    agua:
      "Os recursos hídricos são estratégicos para população, agricultura, pecuária e conservação.",
    recursosNaturais:
      "Grandes áreas naturais, recursos hídricos, fauna, flora e potencial turístico.",
    economia:
      "A economia apresenta forte potencial de expansão agropecuária e de atividades associadas aos recursos naturais.",
    infraestruturas:
      "A grande extensão territorial torna estradas, energia, telecomunicações e água prioridades para integração económica.",
    mercados:
      "A melhoria das ligações permitirá aproximar a produção dos mercados regionais e nacionais.",
    oportunidades: [
      "Pecuária extensiva sustentável",
      "Agricultura",
      "Turismo de natureza",
      "Aquicultura",
      "Manejo florestal sustentável",
      "Agroindústria",
    ],
    desafios: [
      "Grandes distâncias",
      "Infraestruturas",
      "Acesso a mercados",
      "Energia",
      "Assistência técnica",
    ],
    pesquisa:
      "Conservação, biodiversidade, sistemas pecuários, solos e recursos hídricos constituem áreas importantes.",
    turismo:
      "A natureza e os grandes espaços naturais oferecem elevado potencial para turismo ecológico.",
    dados:
      "Por ser uma nova província, a atualização dos dados territoriais e estatísticos deve acompanhar as publicações oficiais.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Cubango",
    slug: "cubango",
    cor: "from-green-950",
    imagem:
      "https://images.openai.com/static-rsc-4/igI_M5DOZtrogVRzMUwFZbrqvZFpXl1xY5m1ACfvzpPlh33zqHpYl1lpcwHUHLV_C9M7bwGut0oVChcoPW2iwK6D1PzAP0BygDkf4BxPjyr4btqqtI6UVaUVe46En_CjvzRMU_SayQejEUMpiuuydajsQ6tBZ5PHDV61dQSHq9B02SL00Zvkt6uJboen_QnZ?purpose=fullsize",
    capital: "Menongue",
    regiao: "Sudeste de Angola",
    area: "199 049 km²",
    municipios: 11,
    descricao:
      "Província de grande dimensão territorial, marcada por rios, savanas, florestas e forte potencial agropecuário.",
    perfil:
      "O Cubango possui condições para desenvolvimento de agricultura, pecuária, conservação ambiental e aproveitamento sustentável dos recursos naturais.",
    agricultura:
      "A agricultura familiar e comercial pode ser expandida através de sementes melhoradas, mecanização, irrigação, armazenamento e assistência técnica.",
    culturas: [
      "Milho",
      "Mandioca",
      "Feijão",
      "Massango",
      "Massambala",
      "Hortícolas",
    ],
    pecuaria:
      "A pecuária possui potencial devido à disponibilidade territorial e de áreas de pastagem.",
    especiesPecuarias: [
      "Bovinos",
      "Caprinos",
      "Suínos",
      "Aves",
    ],
    pesca:
      "Os sistemas fluviais apresentam potencial para pesca continental e aquicultura.",
    florestas:
      "As formações naturais têm grande importância ecológica e económica quando utilizadas de forma sustentável.",
    clima:
      "Clima tropical interior, com forte sazonalidade entre período chuvoso e seco.",
    solos:
      "Os sistemas agrícolas devem ser adaptados às características dos solos e à disponibilidade sazonal de água.",
    agua:
      "Os recursos fluviais constituem um dos principais ativos territoriais.",
    recursosNaturais:
      "Florestas, rios, biodiversidade e grandes áreas naturais.",
    economia:
      "Agricultura, pecuária, comércio e serviços constituem importantes áreas de desenvolvimento.",
    infraestruturas:
      "A expansão da infraestrutura rodoviária e energética é essencial para integração do território.",
    mercados:
      "A criação de cadeias de armazenamento e transporte é essencial para aumentar a rentabilidade dos produtores.",
    oportunidades: [
      "Agricultura comercial",
      "Pecuária",
      "Aquicultura",
      "Agroindústria",
      "Turismo ecológico",
      "Manejo florestal",
    ],
    desafios: [
      "Infraestrutura",
      "Transporte",
      "Armazenamento",
      "Financiamento",
      "Assistência técnica",
    ],
    pesquisa:
      "A investigação sobre rios, solos, biodiversidade, pecuária e agricultura sustentável é prioritária.",
    turismo:
      "Rios, savanas, florestas e biodiversidade oferecem oportunidades para turismo de natureza.",
    dados:
      "A plataforma deve atualizar os indicadores utilizando as bases oficiais mais recentes.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Cuanza Norte",
    slug: "cuanza-norte",
    cor: "from-teal-950",
    imagem:
      "https://images.openai.com/static-rsc-4/NSQl8FrrF9oi2y0FsfuN-u6Uoy1Hq5yR2syuEG9y2p0eyWhEOs6xFKG4QIsAXdFpwzoUgWnpaWMOGWLEEKtqHJ_C3ZxfcuyttXDdZf69cJW2yNJVyYHU_71VrSPTLyRTZqy0J0hBFh6xJ2zEHZqeSJWeNNmhza28CE-dbyKB1lxh4BSIMynSSsiJtOcDNveP?purpose=fullsize",
    capital: "Cazengo",
    regiao: "Norte de Angola",
    area: "24 110 km²",
    municipios: 17,
    descricao:
      "Província do norte de Angola com recursos hídricos, agricultura diversificada e posição estratégica entre diferentes regiões do país.",
    perfil:
      "A província possui potencial agrícola e agroindustrial associado às condições climáticas e aos seus recursos naturais.",
    agricultura:
      "A agricultura inclui mandioca, milho, feijão, café, frutas e hortícolas.",
    culturas: [
      "Mandioca",
      "Milho",
      "Feijão",
      "Café",
      "Banana",
      "Fruticultura",
      "Hortícolas",
    ],
    pecuaria:
      "A criação de animais complementa a produção agrícola e pode ser fortalecida através de sistemas integrados.",
    especiesPecuarias: [
      "Bovinos",
      "Suínos",
      "Caprinos",
      "Aves",
    ],
    pesca:
      "Os recursos hídricos podem sustentar pesca continental e aquicultura.",
    florestas:
      "A vegetação natural desempenha papel importante na conservação do solo, água e biodiversidade.",
    clima:
      "Clima tropical com período chuvoso relevante para agricultura.",
    solos:
      "Solos diversificados podem suportar diferentes culturas mediante manejo adequado.",
    agua:
      "Os rios e cursos de água são importantes para agricultura, população e ecossistemas.",
    recursosNaturais:
      "Água, terras agrícolas, florestas e biodiversidade.",
    economia:
      "Agricultura, comércio, serviços e transformação de produtos constituem áreas relevantes.",
    infraestruturas:
      "A localização facilita ligações entre o norte e outras regiões, embora a infraestrutura rural continue importante.",
    mercados:
      "A proximidade de grandes mercados regionais cria oportunidades para comercialização.",
    oportunidades: [
      "Café",
      "Agroindústria",
      "Fruticultura",
      "Horticultura",
      "Aquicultura",
      "Transformação de mandioca",
    ],
    desafios: [
      "Infraestrutura rural",
      "Acesso a crédito",
      "Armazenamento",
      "Assistência técnica",
      "Comercialização",
    ],
    pesquisa:
      "Café, solos tropicais, agricultura familiar, recursos hídricos e agroindústria.",
    turismo:
      "Paisagens naturais, rios e património cultural constituem oportunidades para turismo.",
    dados:
      "Indicadores oficiais devem ser atualizados diretamente a partir das bases estatísticas nacionais.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Cuanza Sul",
    slug: "cuanza-sul",
    cor: "from-red-950",
    imagem:
      "https://images.openai.com/static-rsc-4/6jW-2rshXNBhMmoPbBPnO5YKMVdAK_OFZ1g0xeDVpCjNDVLpuT69BN4maxJbJkNxUuQC0Hc3e_fhGm05Kp7AuYFMuNk6XGpdREShrDPEV2OJOM9h9vke5LZvLfzvy0_KhV-eV2r0rUqkOQp8NIYV1IXngRXhCusJrZu9ntaKJT0OTY7Q2S-7rZa5NLnTKyHK?purpose=fullsize",
    capital: "Sumbe",
    regiao: "Litoral Centro",
    area: "55 660 km²",
    municipios: 24,
    descricao:
      "Província com litoral, áreas agrícolas, recursos hídricos e forte potencial para agricultura, pesca e pecuária.",
    perfil:
      "O território combina ambientes costeiros e interiores, permitindo diversificação das atividades produtivas.",
    agricultura:
      "A agricultura apresenta potencial em cereais, café, frutas, hortícolas e outras culturas.",
    culturas: [
      "Milho",
      "Feijão",
      "Café",
      "Banana",
      "Mandioca",
      "Hortícolas",
      "Fruticultura",
    ],
    pecuaria:
      "A pecuária é relevante nas áreas rurais e pode beneficiar de melhoria das pastagens, água e sanidade.",
    especiesPecuarias: [
      "Bovinos",
      "Caprinos",
      "Suínos",
      "Aves",
    ],
    pesca:
      "A costa proporciona oportunidades para pesca, transformação e comercialização de pescado.",
    florestas:
      "As formações vegetais interiores têm importância ambiental e para proteção dos solos.",
    clima:
      "O clima varia do litoral para o interior, condicionando sistemas agrícolas.",
    solos:
      "A aptidão agrícola varia espacialmente e deve ser avaliada através de estudos de solo.",
    agua:
      "Rios e outros recursos hídricos são essenciais para agricultura e abastecimento.",
    recursosNaturais:
      "Recursos marinhos, água, terras agrícolas, biodiversidade e recursos minerais.",
    economia:
      "Agricultura, pesca, comércio, pecuária, indústria e serviços formam a base económica.",
    infraestruturas:
      "A ligação litoral-interior é fundamental para circulação de pessoas e mercadorias.",
    mercados:
      "Centros urbanos e vias de comunicação favorecem a comercialização.",
    oportunidades: [
      "Café",
      "Pesca",
      "Aquicultura",
      "Agroindústria",
      "Fruticultura",
      "Pecuária",
      "Turismo costeiro",
    ],
    desafios: [
      "Acesso à água",
      "Estradas rurais",
      "Armazenamento",
      "Comercialização",
      "Conservação ambiental",
    ],
    pesquisa:
      "Agricultura tropical, café, pesca, aquicultura, solos e gestão da água.",
    turismo:
      "A costa e as paisagens interiores oferecem potencial turístico.",
    dados:
      "Os indicadores deverão ser atualizados com dados oficiais do INE.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Cunene",
    slug: "cunene",
    cor: "from-yellow-950",
    imagem:
      "https://images.openai.com/static-rsc-4/ueOm1iOqdq6NGva5QKsK0dGlYTjJU6hZyEvFkt-x4eV2JPOzkNt-1BdS1E4F1fcUY81mgnXdQ-2xJwrD3-hMAwBuLkpCFvkltO7AwAP0I7QwGu0M9TWZHEFXBMG2Q6z2z-RchKio4Zuy6bBqlVqCzCNnsGTW6uUK2pT-wmwooUb1bb5_IKOl1Z5DAsye0EZH?purpose=fullsize",
    capital: "Cuanhama",
    regiao: "Sul de Angola",
    area: "78 342 km²",
    municipios: 14,
    descricao:
      "Província caracterizada por condições semiáridas, forte tradição pecuária e importância dos recursos hídricos transfronteiriços.",
    perfil:
      "A atividade pecuária possui grande importância social e económica, enquanto a agricultura depende fortemente da disponibilidade de água.",
    agricultura:
      "A agricultura é condicionada pela irregularidade das chuvas, tornando a gestão da água, irrigação e culturas adaptadas fundamentais.",
    culturas: [
      "Massango",
      "Massambala",
      "Milho",
      "Feijão",
      "Hortícolas",
      "Mandioca",
    ],
    pecuaria:
      "A pecuária constitui uma das principais atividades produtivas e culturais da província.",
    especiesPecuarias: [
      "Bovinos",
      "Caprinos",
      "Ovinos",
      "Suínos",
    ],
    pesca:
      "Os recursos hídricos disponíveis podem sustentar pesca continental em áreas apropriadas.",
    florestas:
      "A vegetação apresenta adaptação às condições semiáridas, sendo importante evitar degradação e sobrepastoreio.",
    clima:
      "Predominam condições semiáridas, com irregularidade de precipitação e períodos secos significativos.",
    solos:
      "Os solos requerem manejo cuidadoso para evitar degradação, erosão e perda de produtividade.",
    agua:
      "A água é um dos recursos estratégicos para população, pecuária e agricultura.",
    recursosNaturais:
      "Pastagens, água, fauna, flora e recursos naturais adaptados ao ambiente semiárido.",
    economia:
      "Pecuária, agricultura, comércio e serviços são componentes fundamentais.",
    infraestruturas:
      "Sistemas de água, estradas e estruturas de apoio à pecuária são essenciais.",
    mercados:
      "A comercialização de gado e produtos agrícolas possui importância regional.",
    oportunidades: [
      "Pecuária sustentável",
      "Irrigação",
      "Horticultura",
      "Produção de forragem",
      "Transformação de carne",
      "Gestão de água",
    ],
    desafios: [
      "Secas",
      "Disponibilidade de água",
      "Degradação das pastagens",
      "Infraestrutura",
      "Vulnerabilidade climática",
    ],
    pesquisa:
      "Gestão de água, pecuária em clima semiárido, pastagens e adaptação climática.",
    turismo:
      "A cultura pastoril, paisagens e património natural apresentam potencial turístico.",
    dados:
      "Os indicadores devem ser atualizados com as publicações oficiais do INE.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Huambo",
    slug: "huambo",
    cor: "from-violet-950",
    imagem:
      "https://images.openai.com/static-rsc-4/E7OGgMcKiOxHDdPxoNs_K1ShoJoiBSaTMOO5QA2ZOLJRwT4vhSmbA_KUxUodY_3nPHERjf0LREjo0iBNtCjUEpGqalMn9wjWZ5fGeOxYfPiUeNpWiwaT1BXU5rHJThgqfNSSYRWgmyaw3Vj-fORshsMwXWCQfoJoTw4uJGQ7N2Is0qDUS_eOIdMQPtEwAKRS?purpose=fullsize",
    capital: "Huambo",
    regiao: "Planalto Central",
    area: "Consultar base territorial oficial atualizada",
    municipios: 17,
    descricao:
      "Província do Planalto Central com forte vocação agrícola, pecuária, comercial e de serviços.",
    perfil:
      "Huambo ocupa uma posição estratégica no centro de Angola e possui tradição agrícola, importante população rural e potencial para agroindústria.",
    agricultura:
      "A agricultura constitui uma das principais atividades económicas da província. O território apresenta potencial para cereais, tubérculos, leguminosas, hortícolas e produção de sementes.",
    culturas: [
      "Milho",
      "Feijão",
      "Batata",
      "Mandioca",
      "Hortícolas",
      "Soja",
      "Trigo",
      "Fruticultura",
    ],
    pecuaria:
      "A pecuária possui importância para pequenos produtores e para sistemas comerciais, com oportunidades em genética, alimentação, sanidade e transformação.",
    especiesPecuarias: [
      "Bovinos",
      "Suínos",
      "Caprinos",
      "Ovinos",
      "Aves",
    ],
    pesca:
      "Rios, barragens e outros corpos de água podem apoiar atividades de pesca continental e aquicultura.",
    florestas:
      "As formações vegetais e áreas arborizadas contribuem para proteção dos solos, biodiversidade e regulação dos recursos hídricos.",
    clima:
      "O clima de altitude do Planalto Central apresenta estação chuvosa e estação seca bem marcadas, com grande influência sobre a produção agrícola.",
    solos:
      "Os solos agrícolas necessitam de práticas de conservação, reposição de nutrientes, controle da erosão e uso adequado de fertilizantes.",
    agua:
      "Os recursos hídricos são importantes para agricultura, consumo humano, pecuária e ecossistemas.",
    recursosNaturais:
      "Solos agrícolas, recursos hídricos, vegetação natural, biodiversidade e potencial mineral.",
    economia:
      "Agricultura, pecuária, comércio, educação, serviços, indústria e transporte constituem importantes áreas da economia provincial.",
    infraestruturas:
      "A localização central favorece ligações rodoviárias e ferroviárias com outras regiões de Angola.",
    mercados:
      "A cidade do Huambo e outros centros urbanos funcionam como importantes mercados para produtos agrícolas e pecuários.",
    oportunidades: [
      "Agroindústria",
      "Produção de batata",
      "Produção de milho",
      "Sementes",
      "Horticultura",
      "Pecuária",
      "Armazenamento",
      "Transformação alimentar",
      "Agricultura mecanizada",
    ],
    desafios: [
      "Infraestrutura rural",
      "Armazenamento",
      "Acesso a financiamento",
      "Mecanização",
      "Comercialização",
      "Irrigação",
      "Assistência técnica",
    ],
    pesquisa:
      "O Huambo apresenta condições para investigação em sementes, solos, produtividade, mecanização, agricultura de precisão, clima e agroindústria.",
    turismo:
      "A província possui património histórico, paisagens do Planalto Central, áreas rurais e elementos culturais com potencial turístico.",
    dados:
      "O INE publicou dados específicos do Huambo no âmbito do Censo 2024 e de outras operações estatísticas. Os indicadores da plataforma devem ser ligados às fontes oficiais.",
    fontes: [
      "INE",
      "Censo 2024",
      "Governo de Angola",
      "MINAGRIF",
      "Administração Provincial",
    ],
  },

  {
    nome: "Huíla",
    slug: "huila",
    cor: "from-blue-950",
    imagem:
      "https://images.openai.com/static-rsc-4/mZ_rxM-4P0LSW8agxFh4GQL0Z1SHF8yY8woF24lmv5oQqjCoN-trqdmTam-vWc70SJtWQue9M_2AQgxMhyR1CzpUX-EiGSNxRClgO7Uwo5KsA8deUd1rVHmtkH2kfmA9OqZzqUpgfl9ebWSr9zPvCxB2ee4hYSlMHlyZBUgptNbKAiyMINpkK4yIbdHJGnRW?purpose=fullsize",
    capital: "Lubango",
    regiao: "Sul de Angola",
    area: "79 022 km²",
    municipios: 23,
    descricao:
      "Província do sul de Angola com diversidade de paisagens, agricultura, pecuária e importantes centros urbanos.",
    perfil:
      "A Huíla apresenta diversidade agroecológica, com áreas de produção agrícola e forte tradição pecuária.",
    agricultura:
      "A produção agrícola inclui cereais, hortícolas, frutas e outras culturas adaptadas às diferentes zonas.",
    culturas: [
      "Milho",
      "Feijão",
      "Batata",
      "Trigo",
      "Hortícolas",
      "Fruticultura",
    ],
    pecuaria:
      "A pecuária possui grande importância, particularmente nas zonas rurais e semiáridas.",
    especiesPecuarias: [
      "Bovinos",
      "Caprinos",
      "Ovinos",
      "Suínos",
      "Aves",
    ],
    pesca:
      "A pesca continental e a aquicultura podem complementar as atividades produtivas.",
    florestas:
      "A vegetação varia conforme altitude e condições climáticas, sendo importante a conservação das áreas naturais.",
    clima:
      "Apresenta grande diversidade climática devido ao relevo e altitude.",
    solos:
      "A diversidade dos solos exige planeamento específico para cada sistema agrícola.",
    agua:
      "A gestão da água é essencial para agricultura, pecuária e abastecimento.",
    recursosNaturais:
      "Recursos minerais, solos, água, biodiversidade e paisagens naturais.",
    economia:
      "Agricultura, pecuária, comércio, serviços, indústria e turismo.",
    infraestruturas:
      "Lubango funciona como importante centro urbano e logístico do sul.",
    mercados:
      "A estrutura urbana e comercial permite ligação entre produtores e consumidores.",
    oportunidades: [
      "Pecuária",
      "Horticultura",
      "Agroindústria",
      "Fruticultura",
      "Turismo",
      "Transformação de carne",
      "Irrigação",
    ],
    desafios: [
      "Secas",
      "Gestão da água",
      "Infraestruturas rurais",
      "Comercialização",
      "Degradação das pastagens",
    ],
    pesquisa:
      "Pecuária, agricultura de clima semiárido, irrigação, solos e conservação ambiental.",
    turismo:
      "A Serra da Leba, Tundavala e outras paisagens tornam a província relevante para turismo de natureza.",
    dados:
      "Os dados devem ser atualizados com as bases estatísticas oficiais.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Icolo e Bengo",
    slug: "icolo-e-bengo",
    cor: "from-lime-950",
    imagem:
      "https://images.openai.com/static-rsc-4/cODhoEA7YWEiUENXhCLP3pEhMzruehYw6cGil8DoUs21_1tL1O0OcCgQrQdsEo96lVYCdk7NGHCPXUPqD1olMMgVKPQcXJuot7dkchG3Dghj0IxgNmKxiMAXESKmDrEH0kON0PoS2NweiUTpVlCsLAtJ7RM_GkhCwcLUNTrfG13phTaDz0v8oqviTne-ImL2?purpose=fullsize",
    capital: "Catete",
    regiao: "Norte de Luanda",
    area: "3 059 km²",
    municipios: 7,
    descricao:
      "Nova província com forte ligação territorial e económica à área metropolitana de Luanda.",
    perfil:
      "A proximidade com um dos maiores mercados consumidores do país cria oportunidades para agricultura periurbana, logística e serviços.",
    agricultura:
      "A agricultura periurbana pode desempenhar papel importante no abastecimento de alimentos frescos.",
    culturas: [
      "Hortícolas",
      "Mandioca",
      "Milho",
      "Fruticultura",
      "Banana",
      "Feijão",
    ],
    pecuaria:
      "A pecuária periurbana pode fornecer carne, ovos e outros produtos para os mercados próximos.",
    especiesPecuarias: [
      "Aves",
      "Suínos",
      "Caprinos",
      "Bovinos",
    ],
    pesca:
      "A proximidade de recursos costeiros e hídricos cria oportunidades em atividades pesqueiras e aquícolas.",
    florestas:
      "A conservação da vegetação natural e das áreas de proteção ambiental é importante devido à pressão urbana.",
    clima:
      "Clima tropical com influência da proximidade da costa e do ambiente urbano-metropolitano.",
    solos:
      "O uso dos solos deve equilibrar produção agrícola, urbanização e proteção ambiental.",
    agua:
      "A água constitui um recurso essencial para agricultura periurbana e consumo.",
    recursosNaturais:
      "Terras agrícolas, água, biodiversidade e recursos costeiros.",
    economia:
      "Agricultura, comércio, serviços, logística e atividades ligadas à expansão metropolitana.",
    infraestruturas:
      "A proximidade de Luanda proporciona acesso a importantes infraestruturas e mercados.",
    mercados:
      "Luanda representa um dos principais mercados consumidores para produtos agrícolas frescos.",
    oportunidades: [
      "Agricultura periurbana",
      "Horticultura",
      "Cadeia de frio",
      "Logística",
      "Agroindústria",
      "Fruticultura",
      "Aquicultura",
    ],
    desafios: [
      "Pressão urbana",
      "Conflito de uso do solo",
      "Água",
      "Gestão ambiental",
      "Infraestruturas rurais",
    ],
    pesquisa:
      "Agricultura periurbana, segurança alimentar, uso do solo e gestão da água.",
    turismo:
      "Património histórico, cultura local e paisagens rurais podem ser integrados em roteiros turísticos.",
    dados:
      
    "O INE atualizou a distribuição territorial e populacional entre Luanda e Icolo e Bengo em função da nova divisão administrativa.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Luanda",
    slug: "luanda",
    cor: "from-cyan-950",
    imagem:
      "https://images.openai.com/static-rsc-4/ZMEcx861NvII0fkAlJJATHuk22FF5fgTfUZlJle5hBWAtHSINWw5BU1CHPVJXarDxH13nxo3wBTCYJxX0MWNJxwmsCGSfveKjeP8AJzWD-dRJDVvR2L0Rs31dVyTriENoKc_t7oSFEJ-4mKfJg1_h6lWadMhdrJH6yYdHkrPPOH5TrADQ2cDcXFLBS_RDNQm?purpose=fullsize",
    capital: "Ingombota",
    regiao: "Litoral Norte",
    area: "113 km²",
    municipios: 16,
    descricao:
      "Principal centro urbano e económico de Angola, com forte mercado consumidor e agricultura periurbana nas áreas disponíveis.",
    perfil:
      "Luanda concentra grande população, atividade económica, comércio, serviços e infraestruturas estratégicas.",
    agricultura:
      "A agricultura periurbana possui importância para produção de hortícolas e abastecimento dos mercados urbanos.",
    culturas: [
      "Hortícolas",
      "Mandioca",
      "Banana",
      "Fruticultura",
      "Milho",
    ],
    pecuaria:
      "A produção pecuária periurbana contribui para o fornecimento de carne, ovos e outros produtos.",
    especiesPecuarias: [
      "Aves",
      "Suínos",
      "Caprinos",
      "Bovinos",
    ],
    pesca:
      "A localização costeira torna a pesca e a comercialização de pescado importantes para a economia alimentar.",
    florestas:
      "As áreas verdes urbanas e periurbanas são importantes para qualidade ambiental.",
    clima:
      "Clima tropical costeiro, com estação seca e influência marítima.",
    solos:
      "A forte urbanização reduz a disponibilidade de áreas agrícolas, aumentando a importância do planeamento territorial.",
    agua:
      "O abastecimento e gestão da água são questões estratégicas para a população e produção periurbana.",
    recursosNaturais:
      "Recursos marinhos, território costeiro e áreas agrícolas periurbanas.",
    economia:
      "É o principal centro económico, comercial, financeiro e de serviços do país.",
    infraestruturas:
      "Concentra importantes infraestruturas rodoviárias, portuárias, aeroportuárias e de serviços.",
    mercados:
      "É o maior mercado consumidor do país e um destino fundamental para produtos agrícolas de várias províncias.",
    oportunidades: [
      "Agricultura periurbana",
      "Logística",
      "Cadeias de frio",
      "Pesca",
      "Aquicultura",
      "Distribuição alimentar",
      "Tecnologia agrícola",
    ],
    desafios: [
      "Pressão urbana",
      "Gestão de resíduos",
      "Água",
      "Segurança alimentar",
      "Ordenamento territorial",
    ],
pesquisa:
  "Segurança alimentar urbana, agricultura periurbana, logística alimentar e gestão ambiental.",
turismo:
  "A cidade, costa, património histórico e vida cultural apresentam grande potencial turístico.",
dados:
  "O INE publicou uma errata aos resultados do Censo 2024, corrigindo a distribuição de 150.787 habitantes entre Luanda e Icolo e Bengo. Após a correção, Luanda passou a registar 8.665.510 habitantes e Icolo e Bengo 1.523.457 habitantes.",
fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
},
  {
    nome: "Lunda Norte",
    slug: "lunda-norte",
    cor: "from-orange-950",
    imagem:
      "https://images.openai.com/static-rsc-4/8euZfPHHxasU9xWqUkJSFWFekqGG5cefOxDIo4w_p82gCycP39WJUk4YFRsaQ_vgz1MQJrVfxZQPHvu4jIZvwiLpDQA_AQm7tVhyrT-MUvbLAKMyc9MlYXUf6sprH45mQo_Wpx3kYl6gAKVxSntIO-u0tDOST2T1OdFfbXcGU5pB5BiDLmUXSdTBWP5Qv0t3?purpose=fullsize",
    capital: "Dundo",
    regiao: "Nordeste",
    area: "103 760 km²",
    municipios: 19,
    descricao:
      "Província do nordeste de Angola com recursos minerais, florestais e potencial agrícola.",
    perfil:
      "A Lunda Norte apresenta grande riqueza natural e diversidade cultural.",
    agricultura:
      "A agricultura familiar tem importância para segurança alimentar e economia rural.",
    culturas: [
      "Mandioca",
      "Milho",
      "Feijão",
      "Banana",
      "Amendoim",
      "Hortícolas",
    ],
    pecuaria:
      "A criação de pequenos animais e aves pode complementar os sistemas agrícolas.",
    especiesPecuarias: [
      "Caprinos",
      "Suínos",
      "Aves",
      "Bovinos",
    ],
    pesca:
      "Os rios apresentam potencial para pesca continental e aquicultura.",
    florestas:
      "As florestas são importantes para biodiversidade, conservação do solo e economia rural.",
    clima:
      "Clima tropical com estação chuvosa importante para produção agrícola.",
    solos:
      "A utilização agrícola deve considerar fertilidade e conservação.",
    agua:
      "Rios e cursos de água são recursos estratégicos.",
    recursosNaturais:
      "Diamantes, recursos hídricos, florestas e biodiversidade.",
    economia:
      "Mineração, agricultura, comércio e serviços são importantes setores.",
    infraestruturas:
      "A melhoria das ligações rodoviárias e logísticas é essencial para integração territorial.",
    mercados:
      "Os centros urbanos regionais funcionam como mercados para produção local.",
    oportunidades: [
      "Agroindústria",
      "Agricultura familiar",
      "Aquicultura",
      "Manejo florestal",
      "Transformação alimentar",
      "Turismo cultural",
    ],
    desafios: [
      "Infraestruturas",
      "Acesso a mercados",
      "Diversificação económica",
      "Conservação florestal",
    ],
    pesquisa:
      "Solos tropicais, florestas, biodiversidade e agricultura familiar.",
    turismo:
      "Património cultural, paisagens e biodiversidade apresentam potencial turístico.",
    dados:
      "Indicadores devem ser atualizados através das bases oficiais do INE.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Lunda Sul",
    slug: "lunda-sul",
    cor: "from-rose-950",
    imagem:
      "https://images.openai.com/static-rsc-4/4XsPTfNk-sRXdBMA5yoGNwaWKypa4Ge3QJJOdRO_ai-x9ioPPeY0M_00KJbs6bV8XIhoJiF15A7LmEm1zGfQmuqBDyUBLwSVRsx3xJeBG3OLlV72_ZgLZX_5mczurAySLnjyH5bcFlJhbYXE7VW6HbD5aLjLMBZq4Yt0ijD8ItOA6ZomhBRjiwqhb4hZxwfE?purpose=fullsize",
    capital: "Saurimo",
    regiao: "Nordeste",
    area: "77 636 km²",
    municipios: 14,
    descricao:
      "Província do nordeste com recursos naturais, agricultura, florestas e importante atividade mineira.",
    perfil:
      "A economia pode beneficiar de maior diversificação através da agricultura, transformação e serviços.",
    agricultura:
      "A agricultura familiar possui importância e apresenta oportunidades de modernização.",
    culturas: [
      "Mandioca",
      "Milho",
      "Feijão",
      "Banana",
      "Amendoim",
      "Hortícolas",
    ],
    pecuaria:
      "A produção animal pode complementar a agricultura familiar e comercial.",
    especiesPecuarias: [
      "Caprinos",
      "Suínos",
      "Aves",
      "Bovinos",
    ],
    pesca:
      "Os rios apresentam potencial para pesca continental.",
    florestas:
      "As florestas possuem importância ambiental e económica.",
    clima:
      "Clima tropical com estação chuvosa marcada.",
    solos:
      "Os solos devem ser manejados com práticas de conservação e reposição de nutrientes.",
    agua:
      "Os recursos hídricos são importantes para agricultura e ecossistemas.",
    recursosNaturais:
      "Recursos minerais, florestais, hídricos e biodiversidade.",
    economia:
      "Mineração, agricultura, comércio e serviços.",
    infraestruturas:
      "A melhoria de estradas e logística pode aumentar a integração económica.",
    mercados:
      "Saurimo e outros centros urbanos constituem mercados para produtos locais.",
    oportunidades: [
      "Agricultura",
      "Agroindústria",
      "Aquicultura",
      "Manejo florestal",
      "Turismo",
      "Transformação alimentar",
    ],
    desafios: [
      "Dependência mineira",
      "Infraestruturas",
      "Mercados",
      "Assistência técnica",
    ],
    pesquisa:
      "Agricultura sustentável, florestas, recursos hídricos e diversificação económica.",
    turismo:
      "Cultura, paisagens e biodiversidade oferecem potencial turístico.",
    dados:
      "A plataforma deve utilizar os indicadores oficiais do INE.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Malanje",
    slug: "malanje",
    cor: "from-fuchsia-950",
    imagem:
      "https://images.openai.com/static-rsc-4/-rmPkovjlHmTxVdQpLhI0a6sGqqrRLIWRuFmDdsiXfiC6zy1XZz8pJjYV3EroQmqIL5nbvJySn8r6dS9upBTmKUfoJjbvfQegRjFfw1c7ChZX3AEX2fXHv5bx6VDgdJ6LIUvjS__3fIqIJGE3vlUto3o23VigVsnsi2wuLoSpcjH0zvMKI5Pw1vv3fpJQGcn?purpose=fullsize",
    capital: "Malanje",
    regiao: "Norte/Centro",
    area: "Consultar base territorial oficial atualizada",
    municipios: 27,
    descricao:
      "Província com elevado potencial agrícola, diversidade de culturas e recursos naturais.",
    perfil:
      "Malanje possui tradição agrícola e potencial para transformação agroindustrial.",
    agricultura:
      "A produção inclui mandioca, milho, feijão, frutas e outras culturas tropicais.",
    culturas: [
      "Mandioca",
      "Milho",
      "Feijão",
      "Café",
      "Banana",
      "Fruticultura",
      "Hortícolas",
    ],
    pecuaria:
      "A pecuária pode ser integrada à agricultura para melhorar a produtividade dos sistemas familiares.",
    especiesPecuarias: [
      "Bovinos",
      "Suínos",
      "Caprinos",
      "Aves",
    ],
    pesca:
      "Os rios podem sustentar pesca continental e aquicultura.",
    florestas:
      "As áreas naturais têm importância para conservação e produção sustentável.",
    clima:
      "Clima tropical favorável a várias culturas agrícolas.",
    solos:
      "Os solos apresentam potencial agrícola, exigindo conservação e manejo adequado.",
    agua:
      "Os recursos hídricos apoiam agricultura, população e ecossistemas.",
    recursosNaturais:
      "Terras agrícolas, água, florestas e biodiversidade.",
    economia:
      "Agricultura, comércio, serviços e transformação agroalimentar.",
    infraestruturas:
      "A melhoria das ligações rurais e estruturas de armazenamento pode aumentar a produtividade.",
    mercados:
      "A proximidade de importantes mercados do norte e centro favorece a comercialização.",
    oportunidades: [
      "Mandioca",
      "Milho",
      "Café",
      "Fruticultura",
      "Agroindústria",
      "Pecuária",
      "Armazenamento",
    ],
    desafios: [
      "Infraestruturas rurais",
      "Transformação local",
      "Armazenamento",
      "Financiamento",
    ],
    pesquisa:
      "Cadeias de valor agrícolas, solos, sementes e agroindústria.",
    turismo:
      "As quedas de Kalandula e outros recursos naturais constituem importantes ativos turísticos.",
    dados:
      "Os dados devem ser atualizados a partir das fontes estatísticas oficiais.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Moxico",
    slug: "moxico",
    cor: "from-emerald-950",
    imagem:
      "https://images.openai.com/static-rsc-4/PuVs-dTYOe5IUcOma3c-mRNSWDbuvPQ_rVwCza7tw3QpxyOO8I3iGReFM01c1t4wOIJLsZCzyPpLln3FjfMKYtXfxKfr620InFKOywhZbz9jCm-LmcXxN3BSd1cHkFz-saIYLVDSU9ExASpm2Q9vncfVrykVyXYf-wPf9Lmho4LHd78qsjJRxgxak4M8swlf?purpose=fullsize",
    capital: "Luena",
    regiao: "Leste de Angola",
    area: "223 023 km²",
    municipios: 12,
    descricao:
      "Grande província do leste de Angola, com florestas, rios e elevado potencial agropecuário.",
    perfil:
      "O território possui grandes extensões naturais e oportunidades de desenvolvimento agrícola, pecuário e florestal.",
    agricultura:
      "A agricultura familiar é importante e pode ser modernizada através de sementes, mecanização e acesso a mercados.",
    culturas: [
      "Mandioca",
      "Milho",
      "Feijão",
      "Massango",
      "Massambala",
      "Hortícolas",
    ],
    pecuaria:
      "A grande disponibilidade territorial cria condições para expansão sustentável da pecuária.",
    especiesPecuarias: [
      "Bovinos",
      "Caprinos",
      "Suínos",
      "Aves",
    ],
    pesca:
      "Os rios e zonas húmidas permitem atividades de pesca continental.",
    florestas:
      "As florestas são um dos principais recursos naturais e devem ser protegidas contra exploração insustentável.",
    clima:
      "Clima tropical continental com estação chuvosa e seca.",
    solos:
      "A produção deve considerar fertilidade, erosão e conservação da matéria orgânica.",
    agua:
      "A abundância relativa de recursos hídricos é estratégica para desenvolvimento.",
    recursosNaturais:
      "Florestas, rios, biodiversidade, terras agrícolas e recursos minerais.",
    economia:
      "Agricultura, pecuária, comércio, serviços e exploração de recursos naturais.",
    infraestruturas:
      "A extensão territorial exige investimentos em transporte, energia e telecomunicações.",
    mercados:
      "O fortalecimento de cadeias logísticas pode aproximar produtores dos mercados.",
    oportunidades: [
      "Agroindústria",
      "Pecuária",
      "Manejo florestal sustentável",
      "Aquicultura",
      "Agricultura comercial",
      "Turismo de natureza",
    ],
    desafios: [
      "Grandes distâncias",
      "Infraestruturas",
      "Acesso a mercados",
      "Energia",
      "Conservação florestal",
    ],
    pesquisa:
      "Florestas, biodiversidade, solos, recursos hídricos e agricultura sustentável.",
    turismo:
      "Paisagens naturais, rios, florestas e património cultural apresentam grande potencial.",
    dados:
      "Os dados estatísticos devem ser atualizados de acordo com o novo enquadramento administrativo.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Moxico Leste",
    slug: "moxico-leste",
    cor: "from-teal-950",
    imagem:
      "https://images.openai.com/static-rsc-4/QsuW_iAjUZqAaimwt6syEima-wzx2gBtaTLq7fXmm2X-MuqfhUxeXuSfkHXwoVeQcK2bPhOBchFPB4ByIN1mtbf81GG2KPuMKoFwSXt5xt7Lmr2aeGLm4iVZWqJSpImHJo4emKwdiHtS-TfxvmepdavRl2a8gnpSx_gygy-KSQDD71Gb3nWtclChz45uBDHd?purpose=fullsize",
    capital: "Cazombo",
    regiao: "Leste de Angola",
    area: "Área a apresentar segundo a base territorial oficial atualizada",
    municipios: 9,
    descricao:
      "Nova província do leste de Angola com vasto território, recursos naturais e oportunidades de desenvolvimento.",
    perfil:
      "A província apresenta características rurais e grande potencial para agricultura, pecuária, recursos florestais e turismo de natureza.",
    agricultura:
      "A agricultura familiar possui papel central e apresenta oportunidades de modernização e integração em cadeias de valor.",
    culturas: [
      "Mandioca",
      "Milho",
      "Feijão",
      "Massango",
      "Massambala",
      "Hortícolas",
    ],
    pecuaria:
      "Existe potencial para pecuária adaptada às condições locais e sistemas de produção extensivos sustentáveis.",
    especiesPecuarias: [
      "Bovinos",
      "Caprinos",
      "Suínos",
      "Aves",
    ],
    pesca:
      "Os recursos fluviais podem apoiar pesca continental e aquicultura.",
    florestas:
      "A conservação das florestas é estratégica para biodiversidade, água e economia rural.",
    clima:
      "Clima tropical continental com marcada sazonalidade.",
    solos:
      "A utilização agrícola deve considerar as características locais dos solos.",
    agua:
      "Rios e recursos hídricos constituem ativos fundamentais.",
    recursosNaturais:
      "Florestas, rios, fauna, flora e terras agrícolas.",
    economia:
      "Agricultura, pecuária, comércio e atividades associadas aos recursos naturais.",
    infraestruturas:
      "A infraestrutura constitui uma das principais condições para integração da nova província.",
    mercados:
      "O desenvolvimento de estradas e centros de comercialização será fundamental.",
    oportunidades: [
      "Agricultura",
      "Pecuária",
      "Agroindústria",
      "Aquicultura",
      "Manejo florestal",
      "Turismo",
    ],
    desafios: [
      "Infraestrutura",
      "Transportes",
      "Energia",
      "Acesso a mercados",
      "Serviços rurais",
    ],
    pesquisa:
      "A investigação territorial deve priorizar solos, biodiversidade, agricultura e recursos hídricos.",
    turismo:
      "O património natural oferece oportunidades para turismo de natureza.",
    dados:
      "Os indicadores devem ser progressivamente atualizados à medida que forem disponibilizadas bases estatísticas específicas da nova província.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Namibe",
    slug: "namibe",
    cor: "from-amber-950",
    imagem:
      "https://images.openai.com/static-rsc-4/GAiNAc62dHu4CBHOanxYSGUx7vft-XMp6nbiciEKObqulKur_zHcKXMfuTSFi22-NQ78xKyq8pdOTPE1VfWJjIou6-xinlzRjWC-TpdQspCe4-0-yUFgaT14kvpGcQsH4dRV-q9L98S9tKUrvDLCoejE6T46IKhG0YbnmCZ2Tpeez6e7mUHFxoLHpRZo3eBZ?purpose=fullsize",
    capital: "Moçâmedes",
    regiao: "Sudoeste de Angola",
    area: "8 916 km²",
    municipios: 9,
    descricao:
      "Província costeira e desértica com forte potencial para pesca, agricultura irrigada, pecuária e turismo.",
    perfil:
      "O Namibe possui condições ambientais únicas, combinando oceano, deserto, áreas irrigadas e paisagens montanhosas.",
    agricultura:
      "A agricultura irrigada é especialmente importante devido às condições áridas e semiáridas.",
    culturas: [
      "Hortícolas",
      "Tomate",
      "Cebola",
      "Fruticultura",
      "Batata",
      "Culturas irrigadas",
    ],
    pecuaria:
      "A pecuária está adaptada às condições semiáridas e depende da disponibilidade de água e pastagens.",
    especiesPecuarias: [
      "Caprinos",
      "Ovinos",
      "Bovinos",
      "Camelídeos",
    ],
    pesca:
      "A pesca constitui uma atividade económica estratégica devido à localização atlântica.",
    florestas:
      "A vegetação é adaptada ao ambiente árido, incluindo espécies com elevado valor ecológico.",
    clima:
      "Predominam condições áridas e semiáridas, com baixa precipitação e forte influência marítima.",
    solos:
      "A produção agrícola depende fortemente de irrigação, fertilização e gestão da salinidade.",
    agua:
      "A água é um recurso crítico e estratégico para agricultura, população e pecuária.",
    recursosNaturais:
      "Oceano, recursos pesqueiros, paisagens desérticas, minerais e biodiversidade adaptada à aridez.",
    economia:
      "Pesca, agricultura irrigada, comércio, turismo, pecuária e serviços.",
    infraestruturas:
      "Porto, estradas e infraestrutura urbana possuem importância estratégica.",
    mercados:
      "A pesca e agricultura irrigada abastecem mercados regionais e nacionais.",
    oportunidades: [
      "Agricultura irrigada",
      "Pesca",
      "Aquicultura",
      "Turismo",
      "Pecuária",
      "Energias renováveis",
      "Agroindústria",
    ],
    desafios: [
      "Escassez de água",
      "Desertificação",
      "Salinização",
      "Secas",
      "Gestão costeira",
    ],
    pesquisa:
      "Agricultura em ambiente árido, irrigação, desertificação, pesca e energias renováveis.",
    turismo:
      "O deserto, litoral, Tômbwa, Serra da Leba e outras paisagens fazem do Namibe uma região de elevado interesse turístico.",
    dados:
      "Os indicadores devem ser ligados às publicações oficiais do INE.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Uíge",
    slug: "uige",
    cor: "from-sky-950",
    imagem:
      "https://images.openai.com/static-rsc-4/JiuKxnq0x0fzN1MpsNNNdWkXTHdp6TsBUWILedzUTRl9VBTrnEhg52LCcrVaJRXXm3a7puMj7YIPtc6PWmUWID5RM81hmN54V9hR4G5N107mwdbk_Lg4djyJ7kV54S527CnuoK94gaI7WRposfZ4RrsaEcr8Sn0dUD8as2ZvRP1nEBpT01Y9JNZ-9mfjCgGt?purpose=fullsize",
    capital: "Uíge",
    regiao: "Norte de Angola",
    area: "58 698 km²",
    municipios: 23,
    descricao:
      "Província do norte de Angola com forte tradição agrícola, florestal e cafeeira.",
    perfil:
      "Uíge apresenta condições favoráveis para culturas tropicais e possui tradição histórica na produção de café.",
    agricultura:
      "Mandioca, café, banana, milho e feijão fazem parte do potencial agrícola.",
    culturas: [
      "Café",
      "Mandioca",
      "Banana",
      "Milho",
      "Feijão",
      "Fruticultura",
      "Hortícolas",
    ],
    pecuaria:
      "A pecuária pode complementar a agricultura familiar e contribuir para diversificação das fontes de rendimento.",
    especiesPecuarias: [
      "Bovinos",
      "Caprinos",
      "Suínos",
      "Aves",
    ],
    pesca:
      "Os recursos hídricos oferecem possibilidades para pesca continental.",
    florestas:
      "As áreas florestais são importantes para biodiversidade, água e conservação do solo.",
    clima:
      "Clima tropical com condições favoráveis à produção de culturas perenes.",
    solos:
      "Os solos podem suportar sistemas agrícolas diversos mediante manejo adequado.",
    agua:
      "A disponibilidade de água favorece agricultura e ecossistemas.",
    recursosNaturais:
      "Florestas, água, solos agrícolas e biodiversidade.",
    economia:
      "Agricultura, comércio, serviços e transformação de produtos.",
    infraestruturas:
      "Estradas rurais e sistemas de armazenamento são fundamentais para desenvolvimento agrícola.",
    mercados:
      "A proximidade com mercados do norte e Luanda pode favorecer cadeias agrícolas.",
    oportunidades: [
      "Café",
      "Agroindústria",
      "Fruticultura",
      "Mandioca",
      "Aquicultura",
      "Manejo florestal",
    ],
    desafios: [
      "Infraestruturas",
      "Comercialização",
      "Financiamento",
      "Assistência técnica",
    ],
    pesquisa:
      "Café, solos tropicais, agrofloresta e agricultura familiar.",
    turismo:
      "Paisagens, cultura e património histórico apresentam potencial turístico.",
    dados:
      "A plataforma deverá atualizar os indicadores através do INE.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },

  {
    nome: "Zaire",
    slug: "zaire",
    cor: "from-red-950",
    imagem:
      "https://images.openai.com/static-rsc-4/SzCBHbOK4WrioscUsGqNCbMc_F_do_PPRukFFJilkviqQIBUjECVpcqEWt8wz0Y3bth0jZSZg3HORM_uA2EQNPltw1Fe22B7F_fm7uIdflFSHGJvqELCHAg0qisfFMBMkLUWMFyaYOpqw_p9_tp7UKgreXTXHFopDcoMJOXsDGKlUNPvpNZUXMdAXLHuL-rP?purpose=fullsize",
    capital: "Mbanza Kongo",
    regiao: "Noroeste de Angola",
    area: "40 130 km²",
    municipios: 11,
    descricao:
      "Província do noroeste com recursos agrícolas, pesqueiros, florestais e elevado valor histórico e cultural.",
    perfil:
      "O Zaire combina território costeiro, rios, agricultura tropical e património histórico.",
    agricultura:
      "A produção agrícola inclui mandioca, milho, feijão, banana e outras culturas tropicais.",
    culturas: [
      "Mandioca",
      "Milho",
      "Feijão",
      "Banana",
      "Fruticultura",
      "Hortícolas",
      "Café",
    ],
    pecuaria:
      "A criação de animais complementa os sistemas agrícolas familiares.",
    especiesPecuarias: [
      "Bovinos",
      "Caprinos",
      "Suínos",
      "Aves",
    ],
    pesca:
      "A costa e os rios proporcionam oportunidades para pesca e transformação de pescado.",
    florestas:
      "As formações naturais possuem importância ambiental e económica.",
    clima:
      "Clima tropical com influência costeira e forte sazonalidade das chuvas.",
    solos:
      "Solos adequados a diferentes culturas tropicais, dependendo das características locais.",
    agua:
      "Rios e recursos costeiros possuem grande importância.",
    recursosNaturais:
      "Recursos marinhos, florestais, hídricos e agrícolas.",
    economia:
      "Agricultura, pesca, comércio, energia, serviços e turismo.",
    infraestruturas:
      "As ligações rodoviárias e portuárias são importantes para desenvolvimento.",
    mercados:
      "Mercados urbanos e conexões regionais podem ampliar a comercialização.",
    oportunidades: [
      "Agroindústria",
      "Pesca",
      "Aquicultura",
      "Fruticultura",
      "Café",
      "Turismo cultural",
      "Transformação alimentar",
    ],
    desafios: [
      "Infraestruturas rurais",
      "Acesso a mercados",
      "Transformação local",
      "Conservação ambiental",
    ],
    pesquisa:
      "Agricultura tropical, pesca, recursos hídricos e património cultural.",
    turismo:
      "Mbanza Kongo, património histórico e paisagens naturais possuem elevado potencial turístico.",
    dados:
      "Os indicadores devem ser atualizados através das bases oficiais do INE.",
    fontes: ["INE", "Censo 2024", "Governo de Angola", "MINAGRIF"],
  },
];

export default function ProvinciasPage() {
  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState<Provincia | null>(null);

  const [pesquisa, setPesquisa] = useState("");

  const provinciasFiltradas = provincias.filter((provincia) =>
    provincia.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  useEffect(() => {
    document.body.style.overflow = provinciaSelecionada
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [provinciaSelecionada]);

  useEffect(() => {
    function fecharComEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProvinciaSelecionada(null);
      }
    }

    window.addEventListener("keydown", fecharComEsc);

    return () => {
      window.removeEventListener("keydown", fecharComEsc);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f1f5f1] text-[#17221b]">

      {/* ========================================================= */}
      {/* CABEÇALHO */}
      {/* ========================================================= */}

      <header className="relative overflow-hidden bg-gradient-to-r from-green-950 via-green-900 to-emerald-800 text-white">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border-[45px] border-green-300" />
          <div className="absolute -bottom-48 right-1/4 h-96 w-96 rounded-full border-[35px] border-lime-300" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-5">

          <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
          <p>Agroinova Angola, ajuda a encontrar tudo quanto precisas sobre as Províncias de Angola no ponto de vista agronómico</p>
          </nav>

          <div className="grid items-center gap-10 py-14 md:grid-cols-[1.15fr_0.85fr] md:py-20">

            <div>

              <span className="inline-flex rounded-full bg-lime-400/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-lime-200">
                Território • Conhecimento • Inovação
              </span>

              <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
                Províncias de{" "}
                <span className="text-lime-300">
                  Angola
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-green-50 md:text-lg">
                Explore informação territorial, agrícola,
                pecuária, climática, ambiental e económica das
                províncias de Angola através de uma plataforma
                integrada de conhecimento.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="#lista-provincias"
                  className="rounded-xl bg-lime-400 px-6 py-3 font-bold text-green-950 shadow-lg transition hover:bg-lime-300"
                >
                  Explorar províncias
                </a>

                <Link
                  href="/mapa"
                  className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Abrir mapa agrícola
                </Link>

              </div>

            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">

              <img
                src="https://images.openai.com/static-rsc-4/WH-K_92qscj6iw2iUJQBijxVKnmsZdnnqtmYpqmE8hj4Cj3VlGzE_g6rSaZAOkTd9kjSiemrbc9QufbIlFk8a3bJVNFSWtaNDSoSx6xq-dnGXdafHpr4_AoKhKB9GA9dALnYnR0q2_07uKqEdNhIA6mWeRMwWFtmdvv7r3JYkyhDwjwF9fhOa1bUY_I_a7YN?purpose=fullsize"
                alt="Paisagem agrícola de Angola"
                className="h-64 w-full rounded-2xl object-cover md:h-80"
              />

              <div className="flex items-center justify-between gap-3 px-3 py-4">

                <div>

                  <p className="text-lg font-bold">
                    Atlas Agroterritorial
                  </p>

                  <p className="mt-1 text-sm text-green-100">
                    Informação territorial e produtiva
                  </p>

                </div>

                <div className="rounded-xl bg-lime-400 px-4 py-3 text-center text-green-950">

                  <strong className="block text-2xl">
                    21
                  </strong>

                  <span className="text-xs font-bold">
                    Províncias
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </header>

      {/* ========================================================= */}
      {/* LISTA */}
      {/* ========================================================= */}

      <section
        id="lista-provincias"
        className="mx-auto max-w-7xl px-5 py-12 md:py-16"
      >

        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Atlas territorial
            </p>

            <h2 className="mt-2 text-3xl font-black text-green-950 md:text-4xl">
              Conheça cada província
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Selecione uma província para abrir o seu dossiê
              territorial e consultar informação sobre agricultura,
              pecuária, clima, solos, água, recursos naturais,
              economia, oportunidades, desafios e investigação.
            </p>

          </div>

          <div className="rounded-full border border-green-200 bg-white px-5 py-3 text-sm font-bold text-green-900 shadow-sm">
            21 províncias
          </div>

        </div>

        {/* PESQUISA */}

        <div className="mb-8">

          <input
            type="text"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder="Pesquisar província..."
            className="w-full rounded-2xl border border-green-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100 md:max-w-xl"
          />

        </div>

        {/* CARDS */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {provinciasFiltradas.map((provincia, indice) => (

            <article
              key={provincia.slug}
              className="group overflow-hidden rounded-2xl border border-white bg-white shadow-[0_8px_25px_rgba(15,60,30,0.09)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_38px_rgba(15,60,30,0.2)]"
            >

              <div className="relative h-52 overflow-hidden">

                <img
                  src={provincia.imagem}
                  alt={`Paisagem da província de ${provincia.nome}`}
                  loading={indice < 4 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${provincia.cor} via-black/25 to-transparent`}
                />

                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/25 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                  Província{" "}
                  {String(indice + 1).padStart(2, "0")}
                </span>

                <h3 className="absolute bottom-4 left-5 text-2xl font-black text-white drop-shadow-lg">
                  {provincia.nome}
                </h3>

              </div>

              <div className="p-5">

                <div className="mb-4 grid grid-cols-2 gap-2">

                  <div className="rounded-xl bg-green-50 p-3">

                    <p className="text-[10px] font-bold uppercase text-green-700">
                      Capital
                    </p>

                    <p className="mt-1 text-sm font-bold text-green-950">
                      {provincia.capital}
                    </p>

                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">

                    <p className="text-[10px] font-bold uppercase text-slate-500">
                      Municípios
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-900">
                      {provincia.municipios}
                    </p>

                  </div>

                </div>

                <p className="min-h-[105px] text-sm leading-6 text-slate-600">
                  {provincia.descricao}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setProvinciaSelecionada(provincia)
                  }
                  className="mt-5 flex w-full items-center justify-between rounded-xl bg-green-50 px-4 py-3 font-bold text-green-900 transition hover:bg-green-800 hover:text-white"
                >
                  <span>
                    Explorar província
                  </span>

                  <span>
                    →
                  </span>
                </button>

              </div>

            </article>

          ))}

        </div>

        {provinciasFiltradas.length === 0 && (

          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">

            <h3 className="text-2xl font-black text-green-950">
              Nenhuma província encontrada
            </h3>

            <p className="mt-3 text-slate-600">
              Tente pesquisar utilizando outro nome.
            </p>

          </div>

        )}

      </section>

      {/* ========================================================= */}
      {/* CHAMADA FINAL */}
      {/* ========================================================= */}

      <section className="mx-auto max-w-7xl px-5 pb-16">

        <div className="rounded-3xl bg-gradient-to-r from-green-900 to-emerald-800 p-8 text-white shadow-xl md:p-12">

          <h2 className="text-3xl font-black md:text-4xl">
            Angola através dos dados
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-green-100">
            O AGROINOVA ANGOLA pretende reunir informação
            territorial, agrícola, ambiental e produtiva para
            apoiar agricultores, estudantes, investigadores,
            empresas, instituições públicas e investidores.
          </p>

          <Link
            href="/mapa"
            className="mt-7 inline-flex rounded-xl bg-lime-400 px-6 py-3 font-bold text-green-950 transition hover:bg-lime-300"
          >
            Abrir mapa agrícola
          </Link>

        </div>

      </section>

      {/* ========================================================= */}
      {/* RODAPÉ */}
      {/* ========================================================= */}

      <footer className="bg-green-950 px-5 py-8 text-center text-sm text-green-100">

        <p className="font-bold tracking-wide">
          AGROINOVA ANGOLA
        </p>

        <p className="mt-2">
          Plataforma Nacional de Investigação, Conhecimento e
          Inovação Agropecuária de Angola.
        </p>

        <p className="mt-3 text-xs text-green-300">
          Dados sujeitos a atualização conforme novas publicações
          das fontes oficiais.
        </p>

      </footer>

      {/* ========================================================= */}
      {/* MODAL DA PROVÍNCIA */}
      {/* ========================================================= */}

      {provinciaSelecionada && (

        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/75 p-0 backdrop-blur-sm md:p-6"
          onMouseDown={(event) => {

            if (event.target === event.currentTarget) {
              setProvinciaSelecionada(null);
            }

          }}
        >

          <div className="mx-auto min-h-screen max-w-6xl overflow-hidden bg-[#f4f7f3] shadow-2xl md:min-h-0 md:rounded-3xl">

            {/* CABEÇALHO DO MODAL */}

            <div className="relative h-[420px] overflow-hidden">

              <img
                src={provinciaSelecionada.imagem}
                alt={provinciaSelecionada.nome}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-green-950/60 to-black/10" />

              <button
                type="button"
                onClick={() =>
                  setProvinciaSelecionada(null)
                }
                className="absolute right-5 top-5 z-10 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-green-950"
              >
                Fechar
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-12">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
                  Dossiê territorial
                </p>

                <h2 className="mt-3 text-4xl font-black md:text-6xl">
                  {provinciaSelecionada.nome}
                </h2>

                <p className="mt-3 text-lg text-green-100">
                  {provinciaSelecionada.regiao}
                </p>

                <p className="mt-5 max-w-4xl text-base leading-8 text-green-50 md:text-lg">
                  {provinciaSelecionada.descricao}
                </p>

              </div>

            </div>

            {/* CORPO DO MODAL */}

            <div className="p-5 md:p-10">

              {/* INDICADORES */}

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">

                  <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                    Capital
                  </p>

                  <p className="mt-2 text-xl font-black text-green-950">
                    {provinciaSelecionada.capital}
                  </p>

                </div>

                <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">

                  <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                    Área
                  </p>

                  <p className="mt-2 text-xl font-black text-green-950">
                    {provinciaSelecionada.area}
                  </p>

                </div>

                <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">

                  <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                    Municípios
                  </p>

                  <p className="mt-2 text-xl font-black text-green-950">
                    {provinciaSelecionada.municipios}
                  </p>

                </div>

                <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">

                  <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                    Região
                  </p>

                  <p className="mt-2 text-xl font-black text-green-950">
                    {provinciaSelecionada.regiao}
                  </p>

                </div>

              </div>

              {/* PERFIL */}

              <InfoBox
                titulo="Perfil territorial"
                texto={provinciaSelecionada.perfil}
              />

              {/* GRID PRINCIPAL */}

              <div className="mt-8 grid gap-7 lg:grid-cols-2">

                <InfoBox
                  titulo="Agricultura"
                  texto={provinciaSelecionada.agricultura}
                  lista={provinciaSelecionada.culturas}
                />

                <InfoBox
                  titulo="Pecuária"
                  texto={provinciaSelecionada.pecuaria}
                  lista={provinciaSelecionada.especiesPecuarias}
                />

                <InfoBox
                  titulo="Pesca e aquicultura"
                  texto={provinciaSelecionada.pesca}
                />

                <InfoBox
                  titulo="Florestas"
                  texto={provinciaSelecionada.florestas}
                />

                <InfoBox
                  titulo="Clima"
                  texto={provinciaSelecionada.clima}
                />

                <InfoBox
                  titulo="Solos"
                  texto={provinciaSelecionada.solos}
                />

                <InfoBox
                  titulo="Recursos hídricos"
                  texto={provinciaSelecionada.agua}
                />

                <InfoBox
                  titulo="Recursos naturais"
                  texto={provinciaSelecionada.recursosNaturais}
                />

                <InfoBox
                  titulo="Economia"
                  texto={provinciaSelecionada.economia}
                />

                <InfoBox
                  titulo="Infraestruturas"
                  texto={provinciaSelecionada.infraestruturas}
                />

                <InfoBox
                  titulo="Mercados e comercialização"
                  texto={provinciaSelecionada.mercados}
                />

                <InfoBox
                  titulo="Investigação e conhecimento"
                  texto={provinciaSelecionada.pesquisa}
                />

                <InfoBox
                  titulo="Turismo"
                  texto={provinciaSelecionada.turismo}
                />

              </div>

              {/* OPORTUNIDADES */}

              <div className="mt-8 rounded-3xl bg-green-950 p-7 text-white md:p-9">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
                  Desenvolvimento
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Oportunidades estratégicas
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-green-100">
                  Áreas que podem contribuir para a diversificação
                  económica, aumento da produtividade e criação de
                  cadeias de valor na província.
                </p>

                <div className="mt-7 grid gap-3 md:grid-cols-2">

                  {provinciaSelecionada.oportunidades.map(
                    (item) => (

                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/10 p-4 text-sm font-semibold"
                      >
                        {item}
                      </div>

                    )
                  )}

                </div>

              </div>

              {/* DESAFIOS */}

              <div className="mt-8 rounded-3xl border border-red-100 bg-red-50 p-7 md:p-9">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                  Planeamento
                </p>

                <h3 className="mt-2 text-3xl font-black text-red-950">
                  Principais desafios
                </h3>

                <div className="mt-7 grid gap-3 md:grid-cols-2">

                  {provinciaSelecionada.desafios.map(
                    (item) => (

                      <div
                        key={item}
                        className="rounded-xl border border-red-100 bg-white p-4 text-sm font-semibold text-red-950"
                      >
                        {item}
                      </div>

                    )
                  )}

                </div>

              </div>

              {/* DADOS */}

              <div className="mt-8 rounded-3xl border border-green-100 bg-white p-7 shadow-sm md:p-9">

                <h3 className="text-2xl font-black text-green-950">
                  Dados e indicadores
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {provinciaSelecionada.dados}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">

                  <div className="rounded-xl bg-green-50 p-5">

                    <p className="text-xs font-bold uppercase text-green-700">
                      Fonte demográfica
                    </p>

                    <p className="mt-2 font-bold text-green-950">
                      INE / Censo 2024
                    </p>

                  </div>

                  <div className="rounded-xl bg-green-50 p-5">

                    <p className="text-xs font-bold uppercase text-green-700">
                      Divisão administrativa
                    </p>

                    <p className="mt-2 font-bold text-green-950">
                      21 províncias / 326 municípios
                    </p>

                  </div>

                  <div className="rounded-xl bg-green-50 p-5">

                    <p className="text-xs font-bold uppercase text-green-700">
                      Atualização
                    </p>

                    <p className="mt-2 font-bold text-green-950">
                      Base oficial
                    </p>

                  </div>

                </div>

              </div>

              {/* FONTES */}

              <div className="mt-8 rounded-3xl bg-slate-900 p-7 text-white md:p-9">

                <h3 className="text-2xl font-black">
                  Fontes de informação
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  A AGROINOVA deve privilegiar fontes oficiais e
                  institucionais para os indicadores quantitativos.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  {provinciaSelecionada.fontes.map(
                    (fonte) => (

                      <span
                        key={fonte}
                        className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold"
                      >
                        {fonte}
                      </span>

                    )
                  )}

                </div>

              </div>

              {/* BOTÃO FINAL */}

              <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-slate-200 pt-7">

                <button
                  type="button"
                  onClick={() =>
                    setProvinciaSelecionada(null)
                  }
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 transition hover:bg-slate-100"
                >
                  Fechar dossiê
                </button>

                <Link
                  href={`/mapa/${provinciaSelecionada.slug}`}
                  className="rounded-xl bg-green-900 px-6 py-3 font-bold text-white transition hover:bg-green-800"
                >
                  Abrir mapa da província
                </Link>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

/* ============================================================= */
/* COMPONENTE DE INFORMAÇÃO */
/* ============================================================= */

function InfoBox({
  titulo,
  texto,
  lista,
}: {
  titulo: string;
  texto: string;
  lista?: string[];
}) {
  return (
    <section className="rounded-3xl border border-green-100 bg-white p-7 shadow-sm md:p-8">

      <h3 className="text-2xl font-black text-green-950">
        {titulo}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {texto}
      </p>

      {lista && lista.length > 0 && (

        <div className="mt-6 grid gap-2 sm:grid-cols-2">

          {lista.map((item) => (

            <div
              key={item}
              className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-950"
            >
              {item}
            </div>

          ))}

        </div>

      )}

    </section>
  );
}