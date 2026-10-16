
"use client";

import { useEffect, useMemo, useState } from "react";

type Publicacao = {
  id: number;
  titulo: string;
  area: string;
  tipo: string;
  resumo: string;
  imagem: string;
  objectivo: string;
  conteudos: string[];
  recomendacoes: string[];
  fonte: string;
  url?: string;
  origem: "AGROINOVA" | "Externa";
};

const imagens = {
  milho:
    "https://images.unsplash.com/photo-1601593768792-4d5c1b3e9b6d?auto=format&fit=crop&w=1400&q=85",
  campo:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
  horta:
    "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1000&q=85",
  solo:
    "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1000&q=85",
  pecuaria:
    "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=85",
  floresta:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85",
  pesca:
    "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=1000&q=85",
  cafe:
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=85",
  mandioca:
    "https://www.finagro.com.co/sites/default/files/2023-08/MicrosoftTeams-image%20%288%29.png",
  avicultura:
    "https://dancyu.jp/images/9801b.jpg",
  apicultura:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Western_Honey_Bees_and_Honeycomb_Closeup.JPG?width=1200",
  bovinos:
    "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=85",
};

const publicacoes: Publicacao[] = [
  {
    id: 1,
    titulo: "Manual introdutório de produção de milho",
    area: "Agricultura",
    tipo: "Manual técnico",
    resumo:
      "Princípios de instalação, condução e acompanhamento de uma cultura fundamental para a segurança alimentar.",
    imagem: imagens.milho,
    objectivo:
      "Apresentar uma sequência de trabalho para o planeamento da cultura do milho, desde a escolha da parcela até à colheita e conservação.",
    conteudos: [
      "Selecção da parcela e avaliação das condições do solo",
      "Preparação do terreno e planeamento da sementeira",
      "Escolha de sementes adaptadas às condições locais",
      "Gestão da água e das infestantes",
      "Observação de pragas e doenças",
      "Colheita, secagem, armazenamento e registo da produção",
    ],
    recomendacoes: [
      "Registar a data de sementeira, a variedade e a área cultivada.",
      "Confirmar a época agrícola e as condições de humidade da região.",
      "Consultar os serviços agrários locais sobre variedades e práticas recomendadas.",
    ],
    fonte: "Conteúdo técnico introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 2,
    titulo: "Produção e conservação da mandioca",
    area: "Agricultura",
    tipo: "Ficha técnica",
    resumo:
      "Orientações sobre material de plantação, condução da cultura, colheita e aproveitamento da mandioca.",
    imagem: imagens.mandioca,
    objectivo:
      "Reunir conhecimentos introdutórios para apoiar produtores e estudantes na compreensão do ciclo produtivo da mandioca.",
    conteudos: [
      "Selecção de manivas e material de plantação",
      "Preparação do terreno e instalação da cultura",
      "Controlo de infestantes e acompanhamento do desenvolvimento",
      "Reconhecimento de sintomas que exigem avaliação fitossanitária",
      "Determinação do momento de colheita",
      "Transformação, conservação e redução de perdas",
    ],
    recomendacoes: [
      "Utilizar material de plantação saudável e de origem conhecida.",
      "Evitar transportar material suspeito de estar contaminado.",
      "Adaptar as operações ao clima, ao solo e ao destino da produção.",
    ],
    fonte: "Conteúdo técnico introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 3,
    titulo: "Hortícolas: instalação e gestão da horta",
    area: "Agricultura",
    tipo: "Guia prático",
    resumo:
      "Organização da horta, planeamento das culturas, gestão da água e colheita de produtos hortícolas.",
    imagem: imagens.horta,
    objectivo:
      "Apoiar o planeamento de pequenas e médias hortas, valorizando a eficiência dos recursos e a qualidade dos produtos.",
    conteudos: [
      "Escolha do local e organização dos canteiros",
      "Planeamento das culturas e rotação",
      "Produção ou aquisição de mudas",
      "Rega, drenagem e cobertura do solo",
      "Monitorização de pragas e doenças",
      "Higiene, colheita e acondicionamento",
    ],
    recomendacoes: [
      "Planear as culturas de acordo com a procura e a disponibilidade de água.",
      "Manter registos de rega, tratamentos e colheitas.",
      "Respeitar as instruções técnicas dos produtos fitossanitários autorizados.",
    ],
    fonte: "Conteúdo técnico introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 4,
    titulo: "Princípios de fertilidade e conservação dos solos",
    area: "Solos",
    tipo: "Guia técnico",
    resumo:
      "Propriedades do solo, matéria orgânica, erosão e práticas de conservação aplicáveis à produção agropecuária.",
    imagem: imagens.solo,
    objectivo:
      "Explicar como a observação e a análise do solo podem apoiar decisões de fertilização e conservação.",
    conteudos: [
      "Textura, estrutura e profundidade efectiva",
      "Matéria orgânica e actividade biológica",
      "pH e disponibilidade de nutrientes",
      "Amostragem representativa para análise laboratorial",
      "Erosão hídrica e eólica",
      "Cobertura vegetal, compostagem e práticas conservacionistas",
    ],
    recomendacoes: [
      "Solicitar análise laboratorial antes de definir correcções específicas.",
      "Não aplicar doses de fertilizantes sem considerar cultura, solo e objectivo produtivo.",
      "Proteger o solo exposto e reduzir o escoamento superficial.",
    ],
    fonte: "Conteúdo técnico introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 5,
    titulo: "Gestão sanitária básica na produção animal",
    area: "Pecuária",
    tipo: "Manual introdutório",
    resumo:
      "Biossegurança, observação dos animais, registos sanitários e importância da assistência veterinária.",
    imagem: imagens.pecuaria,
    objectivo:
      "Apresentar princípios preventivos para melhorar a organização sanitária das explorações pecuárias.",
    conteudos: [
      "Observação diária do comportamento e do consumo",
      "Limpeza das instalações e dos equipamentos",
      "Água de qualidade e alimentação adequada",
      "Registo de entradas, saídas, partos e mortalidade",
      "Separação preventiva de animais suspeitos",
      "Intervenção dos serviços veterinários",
    ],
    recomendacoes: [
      "Contactar um médico veterinário perante sinais de doença ou mortalidade anormal.",
      "Não administrar medicamentos sem orientação profissional.",
      "Manter registos actualizados e cumprir as orientações sanitárias aplicáveis.",
    ],
    fonte: "Conteúdo técnico introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 6,
    titulo: "Manejo de bovinos em sistemas de produção",
    area: "Pecuária",
    tipo: "Ficha técnica",
    resumo:
      "Aspectos fundamentais da alimentação, instalações, reprodução, bem-estar e acompanhamento do efectivo bovino.",
    imagem: imagens.bovinos,
    objectivo:
      "Organizar os principais factores que influenciam a gestão de bovinos em diferentes sistemas de produção.",
    conteudos: [
      "Caracterização do sistema de produção",
      "Pastagens, disponibilidade de água e suplementação",
      "Instalações e maneio seguro",
      "Reprodução e acompanhamento dos vitelos",
      "Identificação individual e registos produtivos",
      "Prevenção sanitária com assistência veterinária",
    ],
    recomendacoes: [
      "Adequar a carga animal à disponibilidade real de pastagem.",
      "Garantir sombra e água apropriadas.",
      "Ajustar as decisões de alimentação e sanidade com apoio técnico.",
    ],
    fonte: "Conteúdo técnico introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 7,
    titulo: "Florestas, recursos naturais e gestão sustentável",
    area: "Florestas",
    tipo: "Caderno temático",
    resumo:
      "Importância dos ecossistemas florestais, conservação da biodiversidade, prevenção de incêndios e recuperação da vegetação.",
    imagem: imagens.floresta,
    objectivo:
      "Introduzir conceitos de gestão sustentável e valorização dos recursos florestais de Angola.",
    conteudos: [
      "Funções ecológicas e económicas das florestas",
      "Ecossistemas de miombo e floresta do Maiombe",
      "Pressões sobre os recursos florestais",
      "Prevenção e registo de incêndios",
      "Recuperação de áreas degradadas",
      "Importância da informação territorial e da monitorização",
    ],
    recomendacoes: [
      "Distinguir dados observados de estimativas e projecções.",
      "Consultar fontes oficiais antes de citar estatísticas de cobertura florestal.",
      "Considerar a legislação e os planos de gestão aplicáveis.",
    ],
    fonte: "Conteúdo introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 8,
    titulo: "Pesca, aquacultura e qualidade do pescado",
    area: "Pesca e aquacultura",
    tipo: "Guia introdutório",
    resumo:
      "Fundamentos de produção aquícola, qualidade da água, alimentação dos peixes e conservação do pescado.",
    imagem: imagens.pesca,
    objectivo:
      "Apresentar conceitos básicos para compreender a produção aquícola e a importância da higiene na cadeia do pescado.",
    conteudos: [
      "Diferenças entre pesca extractiva e aquacultura",
      "Selecção do local e características da água",
      "Alimentação e acompanhamento do crescimento",
      "Densidade de povoamento e bem-estar dos peixes",
      "Biossegurança e mortalidade",
      "Higiene, conservação e transporte do pescado",
    ],
    recomendacoes: [
      "Avaliar a qualidade da água e a adequação da espécie ao sistema.",
      "Evitar descargas que prejudiquem os ecossistemas aquáticos.",
      "Procurar apoio técnico para o dimensionamento da unidade de produção.",
    ],
    fonte: "Conteúdo introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 9,
    titulo: "Café: produção, qualidade e valorização",
    area: "Culturas permanentes",
    tipo: "Caderno técnico",
    resumo:
      "Aspectos da instalação do cafezal, manutenção das plantas, colheita e valorização da qualidade do café.",
    imagem: imagens.cafe,
    objectivo:
      "Reunir tópicos de estudo para compreender a cadeia do café e a importância da assistência técnica.",
    conteudos: [
      "Condições de cultivo e selecção do local",
      "Mudas e instalação da plantação",
      "Gestão do solo e da cobertura vegetal",
      "Poda e acompanhamento fitossanitário",
      "Colheita e selecção dos frutos",
      "Pós-colheita, secagem e armazenamento",
    ],
    recomendacoes: [
      "Considerar as condições específicas de cada zona produtora.",
      "Evitar misturar lotes com qualidade e níveis de humidade diferentes.",
      "Consultar os serviços técnicos especializados do sector do café.",
    ],
    fonte: "Conteúdo introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 10,
    titulo: "Rega eficiente e gestão da água na agricultura",
    area: "Água e irrigação",
    tipo: "Guia prático",
    resumo:
      "Planeamento da rega, necessidades das culturas, perdas de água e manutenção dos sistemas de irrigação.",
    imagem: imagens.horta,
    objectivo:
      "Introduzir práticas para uma utilização mais criteriosa da água na produção agrícola.",
    conteudos: [
      "Necessidades hídricas das culturas",
      "Características do solo e infiltração",
      "Rega localizada e outros sistemas",
      "Identificação de perdas e fugas",
      "Drenagem e risco de salinização",
      "Registos de rega e avaliação dos resultados",
    ],
    recomendacoes: [
      "Ajustar a rega à cultura, à fase de desenvolvimento e às condições meteorológicas.",
      "Verificar fugas e o funcionamento dos equipamentos.",
      "Procurar orientação local para definir tempos e volumes de rega.",
    ],
    fonte: "Conteúdo técnico introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 11,
    titulo: "Compostagem e valorização de resíduos orgânicos",
    area: "Solos",
    tipo: "Ficha prática",
    resumo:
      "Princípios de compostagem, materiais orgânicos, humidade, arejamento e maturação do composto.",
    imagem: imagens.solo,
    objectivo:
      "Explicar os fundamentos da transformação de resíduos orgânicos num material que pode contribuir para a gestão do solo.",
    conteudos: [
      "Selecção e separação dos materiais",
      "Equilíbrio entre materiais ricos em carbono e azoto",
      "Humidade e arejamento",
      "Acompanhamento da decomposição",
      "Maturação e armazenamento",
      "Aplicação adequada ao solo e à cultura",
    ],
    recomendacoes: [
      "Não incorporar materiais contaminados ou de origem desconhecida.",
      "Evitar o excesso de humidade e a falta de arejamento.",
      "Avaliar a maturidade e a qualidade do composto antes da aplicação.",
    ],
    fonte: "Conteúdo técnico introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 12,
    titulo: "Manejo integrado de pragas e doenças",
    area: "Protecção vegetal",
    tipo: "Guia técnico",
    resumo:
      "Observação sistemática das culturas, identificação correcta de problemas e combinação de medidas preventivas.",
    imagem: imagens.horta,
    objectivo:
      "Promover decisões de protecção vegetal baseadas na identificação do problema e na avaliação técnica.",
    conteudos: [
      "Inspecção regular da parcela",
      "Registo da distribuição e intensidade dos sintomas",
      "Distinção entre pragas, doenças e factores ambientais",
      "Medidas culturais e prevenção",
      "Importância dos inimigos naturais",
      "Utilização responsável de produtos autorizados",
    ],
    recomendacoes: [
      "Não aplicar um produto sem identificar o problema.",
      "Respeitar o rótulo, os equipamentos de protecção e os intervalos de segurança.",
      "Procurar confirmação técnica quando os sintomas forem desconhecidos.",
    ],
    fonte: "Conteúdo técnico introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 13,
    titulo: "Estatísticas oficiais da agricultura em Angola",
    area: "Dados e investigação",
    tipo: "Publicação estatística",
    resumo:
      "Referência para consultar indicadores agrícolas e compreender o período e a cobertura dos dados publicados.",
    imagem: imagens.campo,
    objectivo:
      "Apoiar estudantes e investigadores na localização e interpretação de estatísticas oficiais do sector agrícola.",
    conteudos: [
      "Produção agrícola e campanhas de referência",
      "Explorações agrícolas e características da produção",
      "Indicadores pecuários e florestais quando publicados",
      "Unidades de medida e âmbito territorial",
      "Limitações de comparação entre períodos",
      "Citação e rastreabilidade das fontes",
    ],
    recomendacoes: [
      "Indicar sempre a fonte, o ano, a unidade e o âmbito territorial.",
      "Não apresentar dados de campanhas anteriores como se fossem dados actuais.",
      "Consultar a publicação original para confirmar tabelas e notas metodológicas.",
    ],
    fonte: "Instituto Nacional de Estatística de Angola",
    url: "https://www.ine.gov.ao/",
    origem: "Externa",
  },
  {
    id: 14,
    titulo: "Sistema de produção de mandioca no Semiárido",
    area: "Agricultura",
    tipo: "Publicação técnica",
    resumo:
      "Publicação técnica da Embrapa sobre sistemas de produção de mandioca, útil para consulta e comparação de práticas.",
    imagem: imagens.mandioca,
    objectivo:
      "Disponibilizar uma referência externa para estudo, com a ressalva de que as recomendações devem ser avaliadas antes de serem aplicadas em Angola.",
    conteudos: [
      "Sistema de produção e organização da cultura",
      "Práticas agronómicas descritas na publicação",
      "Colheita e aspectos de pós-colheita",
      "Contexto de produção e limitações de transferência",
    ],
    recomendacoes: [
      "Ler o documento original e confirmar a região a que se destinam as recomendações.",
      "Não transferir automaticamente doses ou calendários de outro país para Angola.",
    ],
    fonte: "Embrapa — Infoteca-e",
    url: "https://www.infoteca.cnptia.embrapa.br/infoteca/handle/doc/1131107",
    origem: "Externa",
  },
  {
    id: 15,
    titulo: "Boas práticas agrícolas e segurança alimentar",
    area: "Segurança alimentar",
    tipo: "Caderno de estudo",
    resumo:
      "Higiene, qualidade da água, manuseamento dos produtos e registos como componentes da segurança alimentar.",
    imagem: imagens.horta,
    objectivo:
      "Apresentar princípios gerais que ajudam a prevenir contaminações e perdas ao longo da produção e do manuseamento.",
    conteudos: [
      "Higiene pessoal e das instalações",
      "Qualidade da água utilizada",
      "Manuseamento de fertilizantes e produtos fitossanitários",
      "Colheita e acondicionamento",
      "Transporte e armazenamento",
      "Rastreabilidade e registos",
    ],
    recomendacoes: [
      "Separar produtos químicos dos alimentos e das embalagens.",
      "Manter as áreas de armazenamento limpas e organizadas.",
      "Consultar os requisitos legais aplicáveis à actividade.",
    ],
    fonte: "Conteúdo introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 16,
    titulo: "Investigação agropecuária: como estruturar um estudo",
    area: "Investigação",
    tipo: "Guia académico",
    resumo:
      "Pergunta de investigação, objectivos, revisão da literatura, metodologia, análise e comunicação dos resultados.",
    imagem: imagens.solo,
    objectivo:
      "Ajudar estudantes a organizar um projecto de investigação agropecuária com rigor metodológico.",
    conteudos: [
      "Delimitação do problema e da pergunta de investigação",
      "Formulação de objectivos gerais e específicos",
      "Pesquisa bibliográfica e avaliação das fontes",
      "Desenho metodológico e amostragem",
      "Organização, análise e apresentação dos dados",
      "Discussão, limitações e referências bibliográficas",
    ],
    recomendacoes: [
      "Não inventar dados, referências bibliográficas ou resultados.",
      "Descrever os métodos de forma suficientemente clara para permitir avaliação.",
      "Respeitar as normas académicas da instituição e a integridade científica.",
    ],
    fonte: "Conteúdo académico introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 17,
    titulo: "Avicultura: organização e biossegurança",
    area: "Pecuária",
    tipo: "Ficha técnica",
    resumo:
      "Organização do aviário, água, alimentação, higiene, registos e prevenção sanitária na produção de aves.",
    imagem: imagens.avicultura,
    objectivo:
      "Apresentar os principais elementos de gestão de uma unidade avícola, sem substituir a assistência veterinária.",
    conteudos: [
      "Preparação das instalações",
      "Ventilação e conforto térmico",
      "Disponibilidade de água e alimentação",
      "Limpeza, desinfecção e controlo de acessos",
      "Registo da mortalidade e do desempenho",
      "Plano sanitário definido por profissional habilitado",
    ],
    recomendacoes: [
      "Seguir o plano sanitário e as orientações do médico veterinário.",
      "Investigar aumentos inesperados de mortalidade.",
      "Controlar a entrada de pessoas, animais e equipamentos.",
    ],
    fonte: "Conteúdo técnico introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
  {
    id: 18,
    titulo: "Apicultura e valorização do mel",
    area: "Pecuária",
    tipo: "Guia introdutório",
    resumo:
      "Fundamentos da instalação de apiários, segurança, acompanhamento das colónias e boas práticas de colheita.",
    imagem: imagens.apicultura,
    objectivo:
      "Introduzir aspectos essenciais da apicultura e da qualidade do mel.",
    conteudos: [
      "Selecção e avaliação do local",
      "Segurança na instalação e manutenção do apiário",
      "Observação do estado das colónias",
      "Disponibilidade de recursos florais",
      "Colheita e higiene",
      "Acondicionamento e armazenamento do mel",
    ],
    recomendacoes: [
      "Usar equipamento de protecção apropriado.",
      "Evitar a colheita que comprometa a sobrevivência das colónias.",
      "Cumprir os requisitos aplicáveis à higiene e comercialização.",
    ],
    fonte: "Conteúdo técnico introdutório AGROINOVA",
    origem: "AGROINOVA",
  },
];

const instituicoes = [
  {
    sigla: "MINAGRIF",
    logo: "https://c2a.portais.gov.ao/uploads/thumbnail_mina_c733003daf.jpg",
    nome: "Ministério da Agricultura e Florestas",
    descricao: "Políticas públicas, informação sectorial, programas e orientações institucionais para o desenvolvimento agrícola e florestal.",
    url: "https://minagrif.gov.ao/",
    tipo: "Órgão ministerial",
    cor: "#14532d",
  },
  {
    sigla: "IIA",
    logo: "https://minagrif.gov.ao/favicon.ico",
    nome: "Instituto de Investigação Agronómica",
    descricao: "Investigação agronómica, melhoramento de culturas, sistemas de produção, solos e soluções técnicas para a agricultura.",
    url: "https://minagrif.gov.ao/",
    tipo: "Investigação",
    cor: "#166534",
  },
  {
    sigla: "IDA",
    logo: "https://ida.gov.ao/favicon.ico",
    nome: "Instituto de Desenvolvimento Agrário",
    descricao: "Extensão rural, apoio às explorações familiares, divulgação de boas práticas e ligação entre conhecimento técnico e produtores.",
    url: "https://minagrif.gov.ao/",
    tipo: "Extensão agrária",
    cor: "#28784a",
  },
  {
    sigla: "IDF",
    logo: "https://minagrif.gov.ao/favicon.ico",
    nome: "Instituto de Desenvolvimento Florestal",
    descricao: "Gestão e desenvolvimento florestal, conservação dos recursos e informação sobre o património florestal.",
    url: "https://minagrif.gov.ao/",
    tipo: "Recursos florestais",
    cor: "#315d3b",
  },
  {
    sigla: "INCA",
    logo: "https://minagrif.gov.ao/favicon.ico",
    nome: "Instituto Nacional do Café",
    descricao: "Conhecimento, valorização e desenvolvimento da cadeia do café, incluindo produção, qualidade e organização sectorial.",
    url: "https://minagrif.gov.ao/",
    tipo: "Culturas permanentes",
    cor: "#6b4b2a",
  },
  {
    sigla: "MOSAP III",
    logo: "https://minagrif.gov.ao/favicon.ico",
    nome: "Projecto de Agricultura Familiar e Comercialização",
    descricao: "Iniciativas de apoio à agricultura familiar, escolas de campo, resiliência climática, nutrição e acesso aos mercados.",
    url: "https://minagrif.gov.ao/",
    tipo: "Projecto de desenvolvimento",
    cor: "#39764a",
  },
  {
    sigla: "PDAC",
    logo: "https://pdac.ao/wp-content/uploads/2020/07/Logotipo-do-PDAC.pdf",
    nome: "Projecto de Desenvolvimento da Agricultura Comercial",
    descricao: "Apoio ao desenvolvimento de cadeias de valor, investimento agrícola e participação de produtores e empresas.",
    url: "https://pdac.ao/",
    tipo: "Projecto agrícola",
    cor: "#1d6b42",
  },
  {
    sigla: "INE",
    logo: "https://www.ine.gov.ao/favicon.ico",
    nome: "Instituto Nacional de Estatística",
    descricao: "Estatísticas oficiais para fundamentar estudos, diagnósticos, planeamento e análise do sector agropecuário.",
    url: "https://www.ine.gov.ao/",
    tipo: "Estatística oficial",
    cor: "#244f38",
  },
];

const destaques = [
  {
    etiqueta: "PRODUÇÃO VEGETAL",
    titulo: "Conhecimento técnico para fortalecer a agricultura angolana",
    descricao:
      "Explore conteúdos sobre culturas, solos, água, protecção vegetal e boas práticas de produção.",
    imagem: imagens.campo,
    area: "Agricultura",
  },
  {
    etiqueta: "CONHECIMENTO CIENTÍFICO",
    titulo: "Da pergunta de investigação à produção de conhecimento",
    descricao:
      "Apoio à leitura científica, à metodologia de investigação e à organização de trabalhos académicos.",
    imagem: imagens.solo,
    area: "Investigação",
  },
  {
    etiqueta: "PRODUÇÃO ANIMAL",
    titulo: "Gestão pecuária, biossegurança e assistência técnica",
    descricao:
      "Consulte materiais introdutórios sobre alimentação, registos, prevenção e bem-estar animal.",
    imagem: imagens.pecuaria,
    area: "Pecuária",
  },
  {
    etiqueta: "RECURSOS NATURAIS",
    titulo: "Solos, florestas e água: recursos para o futuro",
    descricao:
      "Conheça princípios de conservação dos recursos naturais e de utilização sustentável do território.",
    imagem: imagens.floresta,
    area: "Florestas",
  },
];

const categorias = [
  {
    nome: "Agricultura",
    descricao: "Culturas, sementes, produção e pós-colheita.",
    imagem: imagens.milho,
  },
  {
    nome: "Pecuária",
    descricao: "Produção animal, alimentação e biossegurança.",
    imagem: imagens.pecuaria,
  },
  {
    nome: "Solos",
    descricao: "Fertilidade, conservação e gestão da água.",
    imagem: imagens.solo,
  },
  {
    nome: "Florestas",
    descricao: "Ecossistemas, conservação e recursos florestais.",
    imagem: imagens.floresta,
  },
  {
    nome: "Pesca e aquacultura",
    descricao: "Recursos aquáticos, produção e qualidade.",
    imagem: imagens.pesca,
  },
  {
    nome: "Investigação",
    descricao: "Metodologia, leitura científica e escrita académica.",
    imagem: imagens.cafe,
  },
];

export default function BibliotecaPage() {
  const [slide, setSlide] = useState(0);
  const [pesquisa, setPesquisa] = useState("");
  const [areaActiva, setAreaActiva] = useState("Todas");
  const [tipoActivo, setTipoActivo] = useState("Todos");
  const [origemActiva, setOrigemActiva] = useState("Todas");
  const [seleccionada, setSeleccionada] = useState<Publicacao | null>(null);
  const [menuMobile, setMenuMobile] = useState(false);

  useEffect(() => {
    const temporizador = window.setInterval(() => {
      setSlide((actual) => (actual + 1) % destaques.length);
    }, 6500);

    return () => window.clearInterval(temporizador);
  }, []);

  useEffect(() => {
    if (!seleccionada) return;

    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function fecharComEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setSeleccionada(null);
    }

    window.addEventListener("keydown", fecharComEscape);

    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener("keydown", fecharComEscape);
    };
  }, [seleccionada]);

  const areas = useMemo(
    () => ["Todas", ...Array.from(new Set(publicacoes.map((p) => p.area)))],
    []
  );

  const tipos = useMemo(
    () => ["Todos", ...Array.from(new Set(publicacoes.map((p) => p.tipo)))],
    []
  );

  const filtradas = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt-PT");

    return publicacoes.filter((p) => {
      const correspondePesquisa =
        !termo ||
        [
          p.titulo,
          p.area,
          p.tipo,
          p.resumo,
          p.objectivo,
          p.fonte,
          ...p.conteudos,
        ]
          .join(" ")
          .toLocaleLowerCase("pt-PT")
          .includes(termo);

      const correspondeArea =
        areaActiva === "Todas" || p.area === areaActiva;

      const correspondeTipo =
        tipoActivo === "Todos" || p.tipo === tipoActivo;

      const correspondeOrigem =
        origemActiva === "Todas" || p.origem === origemActiva;

      return (
        correspondePesquisa &&
        correspondeArea &&
        correspondeTipo &&
        correspondeOrigem
      );
    });
  }, [pesquisa, areaActiva, tipoActivo, origemActiva]);

  function seleccionarArea(area: string) {
    setAreaActiva(area);
    setTipoActivo("Todos");
    setOrigemActiva("Todas");
    document.getElementById("acervo")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="biblioteca-page">
      <style jsx global>{`
        .biblioteca-page {
          position: relative;
          --b-verde: #14532d;
          --b-verde-2: #166534;
          --b-claro: #f0fdf4;
          --b-texto: #17221b;
          --b-cinza: #64748b;
          color: var(--b-texto);
          background: linear-gradient(180deg, #e6f0e7 0%, #f1f6ef 34%, #e7f0e6 100%);
          min-height: 100vh;
          overflow: hidden;
        }

        .biblioteca-page:before,
        .biblioteca-page:after {
          content: "";
          position: absolute;
          z-index: 0;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(1px);
          opacity: .48;
          animation: b-float-orb 10s ease-in-out infinite;
        }
        .biblioteca-page:before { width: 190px; height: 190px; top: 760px; left: -82px; background: radial-gradient(circle, #8bcf91 0%, #b8dfb7 46%, transparent 72%); }
        .biblioteca-page:after { width: 230px; height: 230px; top: 1680px; right: -110px; background: radial-gradient(circle, #6ebd80 0%, #b8dfb7 45%, transparent 72%); animation-delay: -4s; }
        @keyframes b-float-orb { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(18px,-28px,0) scale(1.08); } }
        @keyframes b-gentle-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        .b-primary, .b-secondary { animation: b-gentle-float 5s ease-in-out infinite; }
        .b-publication { transition: transform .35s ease, box-shadow .35s ease; }
        .b-publication:hover { transform: translateY(-7px); box-shadow: 0 22px 45px #12392320; }
        .b-institution-card:nth-child(3n + 1) .b-institution-logo { animation: b-gentle-float 6s ease-in-out infinite; }
        .b-institution-card:nth-child(3n + 2) .b-institution-logo { animation: b-gentle-float 6s ease-in-out -2s infinite; }
        @media (prefers-reduced-motion: reduce) {
          .biblioteca-page:before, .biblioteca-page:after, .b-primary, .b-secondary, .b-institution-logo { animation: none !important; }
          *, *:before, *:after { scroll-behavior: auto !important; transition-duration: .01ms !important; }
        }

        .biblioteca-page .b-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: radial-gradient(circle at 82% 18%, rgba(134,239,172,.24), transparent 26%), linear-gradient(135deg, #d9ead9 0%, #eef5e9 48%, #c9e3cd 100%);
        }
        .biblioteca-page .b-hero::before,
        .biblioteca-page .b-hero::after {
          content: "";
          position: absolute;
          z-index: -1;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(1px);
        }
        .biblioteca-page .b-hero::before {
          width: 230px; height: 230px; right: 4%; top: 8%;
          background: rgba(34,197,94,.12);
          animation: b-float 8s ease-in-out infinite;
        }
        .biblioteca-page .b-hero::after {
          width: 130px; height: 130px; right: 35%; bottom: 4%;
          background: rgba(20,83,45,.08);
          animation: b-float 10s ease-in-out infinite reverse;
        }
        .biblioteca-page .b-carousel { animation: b-soft-rise .9s both; }
        .biblioteca-page .b-slide img { transition: transform 1.2s cubic-bezier(.2,.7,.2,1); }
        .biblioteca-page .b-slide.active img { animation: b-image-drift 12s ease-in-out infinite alternate; }
        .biblioteca-page .b-card,
        .biblioteca-page .b-publication,
        .biblioteca-page .b-category-card,
        .biblioteca-page .b-institution-card {
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
          will-change: transform;
        }
        .biblioteca-page .b-card:hover,
        .biblioteca-page .b-publication:hover,
        .biblioteca-page .b-category-card:hover,
        .biblioteca-page .b-institution-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 42px rgba(20,83,45,.14);
          border-color: rgba(34,197,94,.5);
        }
        .biblioteca-page .b-eyebrow,
        .biblioteca-page .b-live-dot { animation: b-pulse-soft 3s ease-in-out infinite; }
        .biblioteca-page .b-primary:hover,
        .biblioteca-page .b-secondary:hover { transform: translateY(-2px); }
        .biblioteca-page .b-primary,
        .biblioteca-page .b-secondary { transition: transform .25s ease, box-shadow .25s ease; }
        @keyframes b-float {
          0%,100% { transform: translate3d(0,0,0) rotate(0deg); }
          50% { transform: translate3d(-18px,22px,0) rotate(8deg); }
        }
        @keyframes b-soft-rise {
          from { opacity: 0; transform: translateY(24px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes b-image-drift {
          from { transform: scale(1.02) translateX(0); }
          to { transform: scale(1.09) translateX(-1.2%); }
        }
        @keyframes b-pulse-soft {
          0%,100% { filter: drop-shadow(0 0 0 rgba(34,197,94,0)); }
          50% { filter: drop-shadow(0 4px 12px rgba(34,197,94,.22)); }
        }

        .biblioteca-page * {
          box-sizing: border-box;
        }

        .biblioteca-page button,
        .biblioteca-page input,
        .biblioteca-page select {
          font: inherit;
        }

        .biblioteca-page button {
          cursor: pointer;
        }

        .b-container {
          width: min(1200px, calc(100% - 40px));
          margin-inline: auto;
        }

        .b-topline {
          height: 5px;
          background: linear-gradient(90deg, #14532d, #22c55e, #bbf7d0);
        }

        .b-nav {
          min-height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border-bottom: 1px solid #e5eee7;
          background: #fff;
        }

        .b-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #14532d;
          text-decoration: none;
          font-weight: 900;
          letter-spacing: -0.04em;
          font-size: 21px;
        }

        .b-brand-mark {
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          border-radius: 13px;
          background: #14532d;
          color: white;
          font-size: 13px;
          letter-spacing: 0;
          box-shadow: 0 7px 20px #14532d25;
        }

        .b-nav-links {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .b-nav-links a {
          color: #475569;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: color .2s ease;
        }

        .b-nav-links a:hover {
          color: #15803d;
        }

        .b-nav-cta,
        .b-primary {
          border: 0;
          border-radius: 9px;
          background: #166534;
          color: white;
          padding: 12px 18px;
          font-weight: 800;
          font-size: 13px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
        }

        .b-nav-cta:hover,
        .b-primary:hover {
          background: #14532d;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px #14532d24;
        }

        .b-mobile-toggle {
          display: none;
          border: 1px solid #dce8de;
          background: white;
          color: #14532d;
          padding: 10px 13px;
          border-radius: 9px;
          font-weight: 800;
        }

        .b-hero {
          padding: 42px 0 64px;
          background:
            radial-gradient(ellipse at 10% 0%, #dcfce7 0, transparent 35%),
            linear-gradient(180deg, #f7fcf8 0%, #fff 100%);
        }

        .b-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.04fr;
          align-items: center;
          gap: 46px;
        }

        .b-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 10px;
          font-weight: 900;
          color: #15803d;
        }

        .b-eyebrow:before {
          content: "";
          width: 24px;
          height: 2px;
          background: #22c55e;
        }

        .b-hero h1 {
          margin: 19px 0 20px;
          max-width: 630px;
          font-size: clamp(38px, 5vw, 65px);
          line-height: 1.04;
          letter-spacing: -.055em;
          color: #123923;
          font-weight: 900;
        }

        .b-hero h1 span {
          color: #16a34a;
        }

        .b-hero-copy {
          max-width: 550px;
          color: #526458;
          line-height: 1.9;
          font-size: 15px;
        }

        .b-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 27px;
        }

        .b-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 9px;
          border: 1px solid #cbded0;
          background: #fff;
          color: #14532d;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: .2s ease;
        }

        .b-secondary:hover {
          background: #f0fdf4;
          border-color: #86c99a;
          transform: translateY(-2px);
        }

        .b-hero-note {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 25px;
          color: #64748b;
          font-size: 11px;
          line-height: 1.7;
        }

        .b-live-dot {
          width: 8px;
          height: 8px;
          flex: 0 0 auto;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 0 5px #dcfce7;
        }

        .b-carousel {
          min-height: 445px;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          border-radius: 24px;
          background: #14532d;
          box-shadow: 0 24px 70px #12392325;
        }

        .b-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          visibility: hidden;
          transform: scale(1.035);
          transition: opacity .8s ease, transform 6.5s ease, visibility .8s;
        }

        .b-slide.active {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
        }

        .b-slide img {
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          object-fit: cover;
        }

        .b-slide:after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, #061d10e8 0%, #061d1040 55%, #061d1005 100%);
        }

        .b-slide-content {
          position: absolute;
          z-index: 2;
          left: 28px;
          right: 28px;
          bottom: 34px;
          color: #fff;
          transform: translateY(18px);
          opacity: 0;
          transition: opacity .6s ease .2s, transform .6s ease .2s;
        }

        .b-slide.active .b-slide-content {
          opacity: 1;
          transform: translateY(0);
        }

        .b-slide-tag {
          display: inline-block;
          background: #ffffff20;
          border: 1px solid #ffffff60;
          border-radius: 5px;
          padding: 7px 10px;
          font-size: 9px;
          letter-spacing: .13em;
          font-weight: 900;
          margin-bottom: 13px;
          backdrop-filter: blur(8px);
        }

        .b-slide-content h2 {
          max-width: 460px;
          margin: 0 0 10px;
          font-size: clamp(25px, 3vw, 35px);
          line-height: 1.12;
          letter-spacing: -.035em;
        }

        .b-slide-content p {
          max-width: 470px;
          color: #e4f3e8;
          font-size: 12px;
          line-height: 1.8;
          margin: 0;
        }

        .b-carousel-controls {
          position: absolute;
          z-index: 4;
          right: 22px;
          top: 22px;
          display: flex;
          gap: 8px;
        }

        .b-carousel-controls button {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border: 1px solid #ffffff70;
          background: #102e1b66;
          color: white;
          border-radius: 50%;
          font-size: 18px;
          transition: background .2s ease, transform .2s ease;
          backdrop-filter: blur(8px);
        }

        .b-carousel-controls button:hover {
          background: #166534;
          transform: scale(1.08);
        }

        .b-carousel-dots {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 19px;
        }

        .b-carousel-dots button {
          width: 7px;
          height: 7px;
          border: 0;
          border-radius: 99px;
          padding: 0;
          background: #b6c9bb;
          transition: width .3s ease, background .3s ease;
        }

        .b-carousel-dots button.active {
          width: 27px;
          background: #15803d;
        }

        .b-stats {
          position: relative;
          z-index: 5;
          margin-top: -1px;
          border-block: 1px solid #e5eee7;
          background: white;
        }

        .b-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .b-stat {
          padding: 25px 24px;
          border-right: 1px solid #e5eee7;
        }

        .b-stat:first-child {
          border-left: 1px solid #e5eee7;
        }

        .b-stat strong {
          display: block;
          font-size: 29px;
          line-height: 1.1;
          color: #14532d;
          letter-spacing: -.04em;
        }

        .b-stat span {
          display: block;
          margin-top: 8px;
          font-size: 11px;
          color: #64748b;
        }

        .b-section {
          padding: 58px 0;
        }

        .b-section-soft {
          background: linear-gradient(135deg, #e4efe3 0%, #dcebdd 50%, #edf4e9 100%);
          border-top: 1px solid #d1e3d1;
          border-bottom: 1px solid #d1e3d1;
        }

        .b-section:not(.b-section-soft) {
          background: linear-gradient(180deg, #f0f6ed 0%, #e5f0e4 100%);
        }

        .b-section { padding: 66px 0; }

        .b-section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 30px;
        }

        .b-section-heading h2 {
          color: #123923;
          margin: 10px 0 0;
          font-size: clamp(28px, 3vw, 39px);
          line-height: 1.15;
          letter-spacing: -.045em;
        }

        .b-section-heading p {
          max-width: 540px;
          margin: 12px 0 0;
          font-size: 13px;
          color: #64748b;
          line-height: 1.85;
        }

        .b-text-link {
          border: 0;
          background: transparent;
          color: #166534;
          font-size: 12px;
          font-weight: 900;
          white-space: nowrap;
          text-decoration: none;
        }

        .b-text-link:hover {
          color: #22a052;
        }

        .b-category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .b-category-card {
          position: relative;
          min-height: 250px;
          overflow: hidden;
          isolation: isolate;
          border-radius: 15px;
          background: #14532d;
          text-align: left;
          border: 0;
          padding: 0;
          box-shadow: 0 5px 22px #0f3c1b0b;
          transition: transform .35s ease, box-shadow .35s ease;
        }

        .b-category-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 35px #0f3c1b20;
        }

        .b-category-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .7s ease;
        }

        .b-category-card:hover img {
          transform: scale(1.08);
        }

        .b-category-card:after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, #071d10e8 0%, #071d1050 55%, #071d100a);
        }

        .b-category-copy {
          position: absolute;
          z-index: 2;
          left: 21px;
          right: 21px;
          bottom: 21px;
          color: white;
        }

        .b-category-copy small {
          display: block;
          font-size: 10px;
          color: #bbf7d0;
          margin-bottom: 8px;
          font-weight: 800;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .b-category-copy strong {
          display: block;
          font-size: 22px;
          letter-spacing: -.03em;
          margin-bottom: 7px;
        }

        .b-category-copy span {
          display: block;
          color: #e4f3e8;
          font-size: 12px;
          line-height: 1.7;
        }

        .b-search-panel {
          background: linear-gradient(145deg, #ffffff 0%, #f0f7ed 100%);
          border: 1px solid #cbdcc9;
          border-radius: 16px;
          padding: 21px;
          margin-bottom: 25px;
          box-shadow: 0 8px 30px #0f3c1b08;
        }

        .b-search-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 10px;
        }

        .b-search-input {
          width: 100%;
          min-width: 0;
          border: 1px solid #dbe5dd;
          border-radius: 9px;
          background: #fbfdfb;
          padding: 14px 16px;
          outline: none;
          color: #17221b;
          font-size: 13px !important;
          transition: border .2s ease, box-shadow .2s ease;
        }

        .b-search-input:focus {
          border-color: #4ade80;
          box-shadow: 0 0 0 4px #dcfce7;
        }

        .b-filter-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 14px;
        }

        .b-filter-grid label {
          display: block;
          color: #64748b;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .06em;
          text-transform: uppercase;
        }

        .b-filter-grid select {
          width: 100%;
          margin-top: 7px;
          padding: 11px;
          border: 1px solid #dbe5dd;
          border-radius: 8px;
          background: #fff;
          color: #334155;
          font-size: 12px;
          outline: none;
        }

        .b-filter-grid select:focus {
          border-color: #4ade80;
        }

        .b-results-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin: 0 0 18px;
          color: #64748b;
          font-size: 12px;
        }

        .b-results-line strong {
          color: #14532d;
        }

        .b-publication-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .b-publication {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: white;
          border: 1px solid #e3ebe5;
          border-radius: 14px;
          min-width: 0;
          box-shadow: 0 5px 20px #0f3c1b07;
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
          animation: b-card-in .55s both;
        }

        .b-publication:hover {
          transform: translateY(-6px);
          box-shadow: 0 17px 38px #0f3c1b13;
          border-color: #b6d8be;
        }

        .b-publication-image {
          position: relative;
          height: 190px;
          overflow: hidden;
          background: #e5f2e8;
        }

        .b-publication-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s ease;
        }

        .b-publication:hover .b-publication-image img {
          transform: scale(1.055);
        }

        .b-publication-origin {
          position: absolute;
          top: 13px;
          left: 13px;
          border-radius: 5px;
          background: #fff;
          color: #14532d;
          padding: 7px 9px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .05em;
          box-shadow: 0 4px 14px #00000010;
        }

        .b-publication-body {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 20px;
        }

        .b-publication-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 12px;
        }

        .b-pill {
          border-radius: 5px;
          background: #f0fdf4;
          color: #166534;
          padding: 6px 8px;
          font-size: 9px;
          font-weight: 900;
        }

        .b-publication h3 {
          margin: 0;
          color: #173b25;
          font-size: 18px;
          line-height: 1.4;
          letter-spacing: -.025em;
        }

        .b-publication p {
          margin: 11px 0 19px;
          color: #64748b;
          font-size: 12px;
          line-height: 1.85;
        }

        .b-publication-footer {
          margin-top: auto;
          padding-top: 15px;
          border-top: 1px solid #edf2ee;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .b-publication-footer small {
          color: #94a3b8;
          font-size: 10px;
        }

        .b-open-link {
          border: 0;
          background: transparent;
          color: #166534;
          font-size: 12px;
          font-weight: 900;
          white-space: nowrap;
          transition: color .2s ease;
        }

        .b-open-link:hover {
          color: #22a052;
        }

        .b-empty {
          padding: 55px 20px;
          text-align: center;
          border: 1px dashed #cbded0;
          border-radius: 14px;
          color: #64748b;
          background: #fbfdfb;
          grid-column: 1 / -1;
        }

        .b-empty h3 {
          margin: 0 0 8px;
          color: #14532d;
          font-size: 19px;
        }

        .b-empty p {
          font-size: 13px;
          line-height: 1.7;
        }

        .b-empty button {
          margin-top: 10px;
        }

        .b-institutions-intro {
          max-width: 780px;
          margin: 0 0 30px;
          color: #64748b;
          font-size: 13px;
          line-height: 1.9;
        }

        .b-institution-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .b-institution-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: 20px;
          border: 1px solid #e0e9e2;
          border-radius: 14px;
          background: linear-gradient(145deg, #ffffff 0%, #eaf4e8 100%);
          box-shadow: 0 10px 28px #12392312;
          transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
          animation: b-card-in .6s both;
        }

        .b-institution-card:hover {
          transform: translateY(-5px);
          border-color: #a8d5b3;
          box-shadow: 0 16px 35px #12392313;
        }

        .b-institution-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 104px;
          margin: -6px -6px 17px;
          padding: 12px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f7fbf5, #dcebd9);
          border: 1px solid #d7e6d4;
          overflow: hidden;
          text-decoration: none;
          transition: transform .3s ease, background .3s ease;
        }

        .b-institution-logo:hover { transform: translateY(-3px); background: #d6ead4; }
        .b-institution-logo img { display: block; max-width: 100%; max-height: 80px; width: auto; height: auto; object-fit: contain; }
        .b-institution-pdf-logo { width: 100%; height: 88px; border: 0; background: transparent; }
        .b-institution-fallback {
          width: 100%; min-height: 78px; align-items: center; justify-content: center;
          border-radius: 8px; color: #fff; font-size: 18px; font-weight: 900; letter-spacing: -.03em;
        }

        .b-institution-type {
          color: #15803d;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .b-institution-card h3 {
          margin: 8px 0 9px;
          color: #173b25;
          font-size: 15px;
          line-height: 1.45;
        }

        .b-institution-card p {
          flex: 1;
          margin: 0 0 17px;
          color: #64748b;
          font-size: 11px;
          line-height: 1.8;
        }

        .b-institution-link {
          align-self: flex-start;
          color: #166534;
          font-size: 11px;
          font-weight: 900;
          text-decoration: none;
        }

        .b-institution-note {
          margin-top: 20px;
          padding: 15px 17px;
          border-left: 3px solid #22c55e;
          background: #f0fdf4;
          color: #46604d;
          font-size: 11px;
          line-height: 1.8;
        }

        .b-research {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 45px;
          border-radius: 20px;
          background: #123923;
          color: white;
          padding: 43px;
          overflow: hidden;
          position: relative;
          isolation: isolate;
        }

        .b-research:after {
          content: "";
          position: absolute;
          z-index: -1;
          width: 300px;
          height: 300px;
          right: -100px;
          top: -130px;
          border-radius: 50%;
          border: 1px solid #ffffff22;
          box-shadow: 0 0 0 35px #ffffff08, 0 0 0 70px #ffffff05;
        }

        .b-research h2 {
          margin: 12px 0;
          font-size: clamp(27px, 3vw, 38px);
          line-height: 1.2;
          letter-spacing: -.04em;
        }

        .b-research p {
          color: #d2e6d7;
          font-size: 13px;
          line-height: 1.9;
        }

        .b-research .b-eyebrow {
          color: #86efac;
        }

        .b-research .b-primary {
          background: #bbf7d0;
          color: #14532d;
        }

        .b-research-list {
          display: grid;
          gap: 11px;
        }

        .b-research-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 17px;
          border: 1px solid #ffffff20;
          background: #ffffff0a;
          border-radius: 11px;
          transition: background .25s ease, transform .25s ease;
        }

        .b-research-item:hover {
          background: #ffffff13;
          transform: translateX(4px);
        }

        .b-research-number {
          color: #86efac;
          font-size: 12px;
          font-weight: 900;
        }

        .b-research-item strong {
          display: block;
          font-size: 13px;
          margin-bottom: 5px;
        }

        .b-research-item span {
          display: block;
          color: #c4d9ca;
          font-size: 11px;
          line-height: 1.7;
        }

        .b-bottom-cta {
          text-align: center;
          padding: 57px 20px;
          border-radius: 18px;
          background:
            radial-gradient(ellipse at 50% 0%, #dcfce7 0, transparent 65%),
            #f7fcf8;
          border: 1px solid #e0eee3;
        }

        .b-bottom-cta h2 {
          max-width: 650px;
          margin: 13px auto;
          font-size: clamp(26px, 3vw, 38px);
          line-height: 1.2;
          letter-spacing: -.04em;
          color: #123923;
        }

        .b-bottom-cta p {
          max-width: 620px;
          margin: 0 auto 23px;
          color: #64748b;
          font-size: 13px;
          line-height: 1.9;
        }

        .b-footer {
          margin-top: 75px;
          padding: 35px 0;
          border-top: 1px solid #e5eee7;
          background: #fbfdfb;
        }

        .b-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .b-footer p {
          color: #64748b;
          font-size: 11px;
          line-height: 1.8;
          margin: 7px 0 0;
        }

        .b-footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }

        .b-footer-links a {
          color: #64748b;
          font-size: 11px;
          text-decoration: none;
        }

        .b-footer-links a:hover {
          color: #166534;
        }

        .b-modal-backdrop {
          position: fixed;
          z-index: 1000;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
          background: #071d10a8;
          backdrop-filter: blur(7px);
          animation: b-fade .2s ease both;
        }

        .b-modal {
          width: min(850px, 100%);
          max-height: min(88vh, 900px);
          overflow-y: auto;
          background: white;
          border-radius: 18px;
          box-shadow: 0 35px 100px #00000040;
          animation: b-modal-in .3s cubic-bezier(.2,.8,.2,1) both;
        }

        .b-modal-image {
          position: relative;
          height: 245px;
          background: #14532d;
        }

        .b-modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .b-modal-image:after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, #071d1080, transparent 75%);
        }

        .b-modal-close {
          position: absolute;
          z-index: 2;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border: 1px solid #ffffff80;
          border-radius: 50%;
          background: #0f2c1b9c;
          color: white;
          font-size: 23px;
          transition: transform .2s ease, background .2s ease;
        }

        .b-modal-close:hover {
          transform: rotate(90deg);
          background: #166534;
        }

        .b-modal-title {
          position: absolute;
          z-index: 2;
          bottom: 23px;
          left: 28px;
          right: 28px;
          color: white;
        }

        .b-modal-title span {
          display: inline-block;
          padding: 6px 8px;
          margin-bottom: 9px;
          background: #ffffff24;
          border: 1px solid #ffffff70;
          border-radius: 4px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .1em;
        }

        .b-modal-title h2 {
          margin: 0;
          font-size: clamp(24px, 4vw, 35px);
          line-height: 1.2;
          letter-spacing: -.04em;
        }

        .b-modal-content {
          padding: 28px;
        }

        .b-modal-lead {
          color: #475569;
          font-size: 14px;
          line-height: 1.9;
          padding-bottom: 23px;
          border-bottom: 1px solid #e5eee7;
        }

        .b-modal-content h3 {
          color: #14532d;
          margin: 23px 0 10px;
          font-size: 15px;
        }

        .b-modal-content p,
        .b-modal-content li {
          color: #526458;
          font-size: 12px;
          line-height: 1.9;
        }

        .b-modal-content ul {
          padding-left: 20px;
          margin: 8px 0;
        }

        .b-modal-content li {
          padding: 3px 0;
        }

        .b-modal-source {
          margin-top: 24px;
          padding: 16px;
          border-radius: 9px;
          background: #f0fdf4;
          border: 1px solid #d5efdc;
          color: #14532d;
          font-size: 11px;
          line-height: 1.8;
        }

        .b-modal-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .b-modal-actions a {
          text-decoration: none;
        }

        .b-modal-actions button {
          border: 1px solid #d5e4d8;
          background: white;
          color: #14532d;
          padding: 11px 15px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 800;
        }

        .b-modal-actions button:hover {
          background: #f0fdf4;
        }

        .b-reveal {
          animation: b-card-in .7s both;
        }

        .b-delay-1 { animation-delay: .08s; }
        .b-delay-2 { animation-delay: .16s; }
        .b-delay-3 { animation-delay: .24s; }

        @keyframes b-card-in {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes b-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes b-modal-in {
          from { opacity: 0; transform: translateY(18px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .biblioteca-page *,
          .biblioteca-page *:before,
          .biblioteca-page *:after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }

        @media (max-width: 900px) {
          .b-hero-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .b-carousel {
            min-height: 400px;
          }

          .b-category-grid,
          .b-publication-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .b-research {
            grid-template-columns: 1fr;
            padding: 30px;
            gap: 20px;
          }

          .b-nav-links {
            gap: 14px;
          }

          .b-nav-links a {
            font-size: 11px;
          }
        }

        @media (max-width: 640px) {
          .b-container {
            width: min(100% - 28px, 1200px);
          }

          .b-nav {
            min-height: 68px;
            flex-wrap: wrap;
            padding: 12px 0;
          }

          .b-brand {
            font-size: 18px;
          }

          .b-brand-mark {
            width: 38px;
            height: 38px;
          }

          .b-mobile-toggle {
            display: inline-flex;
          }

          .b-nav-links {
            display: none;
            width: 100%;
            align-items: stretch;
            flex-direction: column;
            gap: 0;
            padding: 7px 0;
          }

          .b-nav-links.open {
            display: flex;
            animation: b-card-in .2s ease both;
          }

          .b-nav-links a {
            padding: 12px 5px;
            border-top: 1px solid #edf2ee;
            font-size: 13px;
          }

          .b-nav-cta {
            width: 100%;
          }

          .b-hero {
            padding: 30px 0 42px;
          }

          .b-hero h1 {
            font-size: 42px;
          }

          .b-hero-copy {
            font-size: 13px;
          }

          .b-carousel {
            min-height: 380px;
            border-radius: 16px;
          }

          .b-slide-content {
            left: 20px;
            right: 20px;
            bottom: 25px;
          }

          .b-slide-content h2 {
            font-size: 27px;
          }

          .b-slide-content p {
            font-size: 11px;
          }

          .b-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .b-stat {
            padding: 19px 15px;
            border-bottom: 1px solid #e5eee7;
          }

          .b-stat strong {
            font-size: 26px;
          }

          .b-section {
            padding: 50px 0;
          }

          .b-section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 13px;
          }

          .b-category-grid,
          .b-publication-grid {
            grid-template-columns: 1fr;
          }

          .b-institution-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .b-category-card {
            min-height: 230px;
          }

          .b-publication-image {
            height: 215px;
          }

          .b-search-panel {
            padding: 14px;
          }

          .b-search-row {
            grid-template-columns: 1fr;
          }

          .b-search-row .b-primary {
            width: 100%;
          }

          .b-filter-grid {
            grid-template-columns: 1fr;
          }

          .b-results-line {
            align-items: flex-start;
            flex-direction: column;
          }

          .b-research {
            padding: 24px 19px;
          }

          .b-bottom-cta {
            padding: 37px 17px;
          }

          .b-footer-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .b-modal-backdrop {
            padding: 10px;
          }

          .b-modal {
            max-height: 94vh;
            border-radius: 13px;
          }

          .b-modal-image {
            height: 210px;
          }

          .b-modal-title {
            left: 18px;
            right: 18px;
            bottom: 18px;
          }

          .b-modal-content {
            padding: 20px;
          }
        }
      `}</style>

      <div className="b-topline" />


      <section className="b-hero">
        <div className="b-container b-hero-grid">
          <div className="b-reveal">
            <span className="b-eyebrow">Conhecimento ao serviço do campo</span>
            <h1>
              Uma biblioteca para transformar <span>conhecimento</span> em produção.
            </h1>
            <p className="b-hero-copy">
              Um espaço de consulta e aprendizagem dedicado à agricultura,
              pecuária, recursos naturais e investigação científica. Explore
              conteúdos técnicos, descubra publicações e aprofunde os seus
              conhecimentos sobre os desafios e oportunidades do sector
              agropecuário.
            </p>

            <div className="b-hero-actions">
              <a href="#acervo" className="b-primary">Explorar o acervo <span>↗</span></a>
              <a href="#categorias" className="b-secondary">Conhecer as áreas <span>↓</span></a>
            </div>

            <div className="b-hero-note">
              <span className="b-live-dot" />
              <span>
                Conhecimento técnico, materiais de estudo e referências para
                estudantes, investigadores, técnicos e produtores.
              </span>
            </div>
          </div>

          <div>
            <div className="b-carousel" aria-label="Carrossel de destaques">
              {destaques.map((item, index) => (
                <div
                  key={item.titulo}
                  className={`b-slide ${slide === index ? "active" : ""}`}
                  aria-hidden={slide !== index}
                >
                  <img src={item.imagem} alt="" />
                  <div className="b-slide-content">
                    <span className="b-slide-tag">{item.etiqueta}</span>
                    <h2>{item.titulo}</h2>
                    <p>{item.descricao}</p>
                    <div style={{ marginTop: 18 }}>
                      <button
                        className="b-primary"
                        onClick={() => seleccionarArea(item.area)}
                      >
                        Explorar conteúdos <span>↗</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="b-carousel-controls">
                <button
                  aria-label="Destaque anterior"
                  onClick={() => setSlide((slide - 1 + destaques.length) % destaques.length)}
                >
                  ‹
                </button>
                <button
                  aria-label="Próximo destaque"
                  onClick={() => setSlide((slide + 1) % destaques.length)}
                >
                  ›
                </button>
              </div>
            </div>

            <div className="b-carousel-dots" aria-label="Seleccionar destaque">
              {destaques.map((item, index) => (
                <button
                  key={item.titulo}
                  className={slide === index ? "active" : ""}
                  aria-label={`Mostrar destaque ${index + 1}`}
                  aria-pressed={slide === index}
                  onClick={() => setSlide(index)}
                />
              ))}
              <span style={{ marginLeft: "auto", fontSize: 10, color: "#64748b" }}>
                {String(slide + 1).padStart(2, "0")} / {String(destaques.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="b-stats" aria-label="Indicadores do acervo">
        <div className="b-container b-stats-grid">
          <div className="b-stat">
            <strong>{publicacoes.length.toString().padStart(2, "0")}</strong>
            <span>Materiais disponíveis nesta página</span>
          </div>
          <div className="b-stat">
            <strong>{categorias.length.toString().padStart(2, "0")}</strong>
            <span>Áreas de conhecimento em destaque</span>
          </div>
          <div className="b-stat">
            <strong>{publicacoes.filter((p) => p.origem === "AGROINOVA").length.toString().padStart(2, "0")}</strong>
            <span>Conteúdos introdutórios AGROINOVA</span>
          </div>
          <div className="b-stat">
            <strong>{publicacoes.filter((p) => p.origem === "Externa").length.toString().padStart(2, "0")}</strong>
            <span>Referências externas incluídas</span>
          </div>
        </div>
      </section>

      <section className="b-section" id="categorias">
        <div className="b-container">
          <div className="b-section-heading">
            <div>
              <span className="b-eyebrow">Explore por área</span>
              <h2>Conhecimento organizado por especialidade</h2>
              <p>
                Encontre materiais relacionados com a sua área de estudo ou
                actividade. Cada área reúne conteúdos introdutórios e
                referências para aprofundar a pesquisa.
              </p>
            </div>
            <button className="b-text-link" onClick={() => seleccionarArea("Todas")}>
              Ver todo o acervo ↗
            </button>
          </div>

          <div className="b-category-grid">
            {categorias.map((categoria, index) => (
              <button
                key={categoria.nome}
                className={`b-category-card b-reveal b-delay-${(index % 3) + 1}`}
                onClick={() => seleccionarArea(categoria.nome)}
              >
                <img src={categoria.imagem} alt="" loading="lazy" />
                <span className="b-category-copy">
                  <small>Área de conhecimento</small>
                  <strong>{categoria.nome}</strong>
                  <span>{categoria.descricao}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="b-section b-section-soft" id="acervo">
        <div className="b-container">
          <div className="b-section-heading">
            <div>
              <span className="b-eyebrow">Repositório de conhecimento</span>
              <h2>Explore o acervo digital</h2>
              <p>
                Pesquise por tema, área, tipo de material ou origem. Abra cada
                publicação para consultar a descrição, os objectivos, os
                conteúdos abordados e as recomendações de leitura.
              </p>
            </div>
          </div>

          <div className="b-search-panel">
            <div className="b-search-row">
              <input
                className="b-search-input"
                value={pesquisa}
                onChange={(event) => setPesquisa(event.target.value)}
                placeholder="Pesquisar por cultura, tema, palavra-chave ou título..."
                aria-label="Pesquisar publicações"
              />
              <button className="b-primary" onClick={() => document.getElementById("resultados")?.scrollIntoView({ behavior: "smooth" })}>
                Pesquisar <span>⌕</span>
              </button>
            </div>

            <div className="b-filter-grid">
              <label>
                Área temática
                <select value={areaActiva} onChange={(event) => setAreaActiva(event.target.value)}>
                  {areas.map((area) => <option key={area}>{area}</option>)}
                </select>
              </label>
              <label>
                Tipo de publicação
                <select value={tipoActivo} onChange={(event) => setTipoActivo(event.target.value)}>
                  {tipos.map((tipo) => <option key={tipo}>{tipo}</option>)}
                </select>
              </label>
              <label>
                Origem do conteúdo
                <select value={origemActiva} onChange={(event) => setOrigemActiva(event.target.value)}>
                  <option>Todas</option>
                  <option>AGROINOVA</option>
                  <option>Externa</option>
                </select>
              </label>
            </div>
          </div>

          <div id="resultados" className="b-results-line">
            <span>
              Foram encontrados <strong>{filtradas.length}</strong> materiais
            </span>
            <button
              className="b-text-link"
              onClick={() => {
                setPesquisa("");
                setAreaActiva("Todas");
                setTipoActivo("Todos");
                setOrigemActiva("Todas");
              }}
            >
              Limpar pesquisa e filtros ↺
            </button>
          </div>

          <div className="b-publication-grid">
            {filtradas.map((p, index) => (
              <article
                key={p.id}
                className="b-publication"
                style={{ animationDelay: `${Math.min(index % 6, 5) * 60}ms` }}
              >
                <div className="b-publication-image">
                  <img src={p.imagem} alt="" loading="lazy" />
                  <span className="b-publication-origin">
                    {p.origem === "AGROINOVA" ? "ACERVO AGROINOVA" : "FONTE EXTERNA"}
                  </span>
                </div>

                <div className="b-publication-body">
                  <div className="b-publication-meta">
                    <span className="b-pill">{p.area}</span>
                    <span className="b-pill">{p.tipo}</span>
                  </div>
                  <h3>{p.titulo}</h3>
                  <p>{p.resumo}</p>

                  <div className="b-publication-footer">
                    <small>{p.fonte}</small>
                    <button className="b-open-link" onClick={() => setSeleccionada(p)}>
                      Consultar ↗
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {filtradas.length === 0 && (
              <div className="b-empty">
                <h3>Não encontrámos publicações para esta pesquisa.</h3>
                <p>
                  Experimente outra palavra-chave ou remova alguns filtros
                  para consultar mais conteúdos.
                </p>
                <button
                  className="b-primary"
                  onClick={() => {
                    setPesquisa("");
                    setAreaActiva("Todas");
                    setTipoActivo("Todos");
                    setOrigemActiva("Todas");
                  }}
                >
                  Mostrar todo o acervo
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="b-section b-section-soft" id="instituicoes">
        <div className="b-container">
          <div className="b-section-heading">
            <div>
              <span className="b-eyebrow">Rede de conhecimento nacional</span>
              <h2>Instituições e projectos do sector agropecuário</h2>
              <p>
                Um ponto de partida para encontrar entidades públicas, serviços técnicos
                e projectos que produzem ou divulgam informação relevante para a agricultura,
                a investigação, a extensão rural e os recursos naturais de Angola.
              </p>
            </div>
          </div>
          <p className="b-institutions-intro">
            Aceda aos portais oficiais para consultar programas, documentos, dados, serviços e contactos.
            Os logótipos são carregados a partir de recursos institucionais disponíveis; quando um portal
            não disponibiliza um ficheiro gráfico directo, a ligação leva à própria entidade para confirmação.
          </p>
          <div className="b-institution-grid">
            {instituicoes.map((instituicao, index) => (
              <article
                className="b-institution-card"
                key={instituicao.sigla}
                style={{ animationDelay: `${Math.min(index, 7) * 55}ms` }}
              >
                <a className="b-institution-logo" href={instituicao.url} target="_blank" rel="noreferrer" aria-label={`Abrir o portal de ${instituicao.nome}`}>
                  {instituicao.sigla === "PDAC" ? (
                    <iframe
                      className="b-institution-pdf-logo"
                      src={`${instituicao.logo}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      title="Logótipo oficial do PDAC"
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={instituicao.logo}
                      alt={`Marca institucional de ${instituicao.nome}`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        const fallback = event.currentTarget.nextElementSibling as HTMLElement | null;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                  )}
                  <span className="b-institution-fallback" style={{ background: instituicao.cor, display: "none" }}>{instituicao.sigla}</span>
                </a>
                <span className="b-institution-type">{instituicao.tipo}</span>
                <h3>{instituicao.nome}</h3>
                <p>{instituicao.descricao}</p>
                <a className="b-institution-link" href={instituicao.url} target="_blank" rel="noreferrer">
                  Visitar página institucional ↗
                </a>
              </article>
            ))}
          </div>
          <div className="b-institution-note">
            <strong>Nota de rigor:</strong> esta área é um directório de consulta e não declara
            parceria, patrocínio ou validação institucional pela AGROINOVA. Confirme sempre a
            entidade responsável, a data e a versão dos documentos antes de os citar num trabalho académico.
          </div>
        </div>
      </section>

      <section className="b-section">
        <div className="b-container">
          <div className="b-research">
            <div>
              <span className="b-eyebrow">Conhecimento científico</span>
              <h2>Investigar, documentar e partilhar conhecimento.</h2>
              <p>
                A biblioteca pode tornar-se um espaço de valorização da
                investigação agropecuária angolana, incluindo trabalhos
                académicos, relatórios técnicos, estudos de campo e experiências
                de produtores e investigadores.
              </p>
                            <a className="b-primary" href="/investigacao">
                Explorar investigação <span>↗</span>
              </a>

              <a
                className="b-primary"
                href="/publicar"
                style={{ marginTop: "12px", display: "inline-flex" }}
              >
                Publicar trabalho académico <span>↗</span>
              </a>
            </div>

            <div className="b-research-list">
              <div className="b-research-item">
                <span className="b-research-number">01</span>
                <div>
                  <strong>Trabalhos académicos</strong>
                  <span>Monografias, dissertações, teses e relatórios científicos sujeitos a validação.</span>
                </div>
              </div>
              <div className="b-research-item">
                <span className="b-research-number">02</span>
                <div>
                  <strong>Estudos agropecuários</strong>
                  <span>Ensaios, estudos de caso e documentos técnicos com autoria e metodologia identificadas.</span>
                </div>
              </div>
              <div className="b-research-item">
                <span className="b-research-number">03</span>
                <div>
                  <strong>Conhecimento angolano</strong>
                  <span>Experiências locais que merecem documentação, avaliação e divulgação responsável.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="b-section b-section-soft">
        <div className="b-container">
          <div className="b-bottom-cta">
            <span className="b-eyebrow">Uma biblioteca em crescimento</span>
            <h2>O conhecimento agropecuário merece ser encontrado, estudado e partilhado.</h2>
            <p>
              Explore os conteúdos disponíveis, consulte as fontes originais
              e acompanhe o desenvolvimento de um acervo dedicado à investigação
              e à inovação agropecuária.
            </p>
            <a href="#acervo" className="b-primary">Voltar ao acervo <span>↑</span></a>
          </div>
        </div>
      </section>



      {seleccionada && (
        <div
          className="b-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSeleccionada(null);
          }}
          role="presentation"
        >
          <section
            className="b-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="b-modal-heading"
          >
            <div className="b-modal-image">
              <img src={seleccionada.imagem} alt="" />
              <button
                className="b-modal-close"
                aria-label="Fechar publicação"
                onClick={() => setSeleccionada(null)}
              >
                ×
              </button>
              <div className="b-modal-title">
                <span>{seleccionada.area} · {seleccionada.tipo}</span>
                <h2 id="b-modal-heading">{seleccionada.titulo}</h2>
              </div>
            </div>

            <div className="b-modal-content">
              <p className="b-modal-lead">{seleccionada.resumo}</p>

              <h3>Objectivo do material</h3>
              <p>{seleccionada.objectivo}</p>

              <h3>Conteúdos abordados</h3>
              <ul>
                {seleccionada.conteudos.map((conteudo) => (
                  <li key={conteudo}>{conteudo}</li>
                ))}
              </ul>

              <h3>Recomendações de consulta</h3>
              <ul>
                {seleccionada.recomendacoes.map((recomendacao) => (
                  <li key={recomendacao}>{recomendacao}</li>
                ))}
              </ul>

              <h3>Como aproveitar este material num estudo</h3>
              <p>
                Comece por delimitar a questão que pretende compreender e relacione cada tópico
                com o contexto da sua província, município, sistema de produção ou instituição.
                Registe os conceitos principais, as dúvidas que permanecem e as evidências que
                precisam de confirmação em fontes primárias. Quando utilizar este conteúdo num
                relatório, artigo, dissertação ou tese, distinga claramente a síntese de leitura
                dos dados que recolheu e das conclusões que formulou.
              </p>

              <h3>Perguntas para aprofundamento</h3>
              <ul>
                <li>Que condições locais podem alterar a aplicação destas orientações?</li>
                <li>Que dados, observações de campo ou fontes oficiais seriam necessários para avaliar os resultados?</li>
                <li>Que limitações técnicas, económicas, ambientais ou sociais devem ser consideradas?</li>
                <li>Como documentar o procedimento para que outro estudante ou técnico consiga compreender e avaliar a análise?</li>
              </ul>

              <h3>Limites e validação técnica</h3>
              <p>
                Os materiais identificados como introdutórios servem de apoio inicial ao estudo.
                Não substituem ensaios científicos, legislação, protocolos oficiais, análise laboratorial
                nem aconselhamento de profissionais habilitados. Antes de aplicar recomendações no campo,
                confirme a adequação à cultura, à região agroecológica, à época agrícola e às condições
                reais da exploração.
              </p>

              <div className="b-modal-source">
                <strong>Origem:</strong> {seleccionada.fonte}
                <br />
                <strong>Classificação:</strong>{" "}
                {seleccionada.origem === "AGROINOVA"
                  ? "Conteúdo introdutório desenvolvido para o acervo AGROINOVA. Não substitui publicações científicas nem assistência técnica especializada."
                  : "Referência externa. Consulte o documento original para confirmar autoria, data, metodologia e recomendações."}
              </div>

              <div className="b-modal-actions">
                {seleccionada.url && (
                  <a href={seleccionada.url} target="_blank" rel="noreferrer">
                    <button>Consultar fonte original ↗</button>
                  </a>
                )}
                <button onClick={() => setSeleccionada(null)}>
                  Fechar consulta
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
