"use client";

import { useMemo, useState } from "react";

type Categoria =
  | "Todos"
  | "Agricultura"
  | "Pecuária"
  | "Florestas"
  | "Apicultura"
  | "Café"
  | "Huambo";

type Aba =
  | "Visão geral"
  | "Agricultura"
  | "Pecuária"
  | "Café & Apicultura"
  | "Florestas"
  | "Huambo"
  | "2025/26"
  | "Projecções";

type Classificacao = "Oficial" | "Cálculo" | "Projecção";

type Indicador = {
  id: string;
  titulo: string;
  valor: string;
  unidade: string;
  variacao?: string;
  descricao: string;
  oQueMede: string;
  significado: string;
  analise: string;
  comparacao: string;
  contexto: string;
  importancia: string;
  implicacoes: string;
  metodologia: string;
  limitacoes: string;
  categoria: Categoria;
  periodo: string;
  fonte: string;
  url: string;
  imagem: string;
  classificacao: Classificacao;
};

const FONTES = {
  anuario:
    "https://www.ine.gov.ao/publicacoes/detalhes/NDY0MDE%3D",

  icapp2324:
    "https://www.ine.gov.ao/publicacoes/detalhes/NTM0NzQ%3D",

  icapp2425:
    "https://www.ine.gov.ao/publicacoes/detalhes/NTM0NzU%3D",

  perfil2324:
    "https://www.ine.gov.ao/publicacoes/detalhes/NTM0Nzc%3D",

  perfil2425:
    "https://www.ine.gov.ao/publicacoes/detalhes/NTM0Nzg%3D",

  boletim2025:
    "https://www.ine.gov.ao/publicacoes/detalhes/NTA0MjE%3D",

  ine:
    "https://www.ine.gov.ao/",

  minagrifResultados:
    "https://minagrif.gov.ao/web/noticias/angola-apresenta-resultados-historicos-no-sector-agrario-e-florestal-durante-forum-com-a-uniao-europeia",

  minagrifEconomia:
    "https://minagrif.gov.ao/web/noticias/agricultura-ultrapassa-petroleo-e-lidera-economia-angolana",

  trigo2526:
    "https://minagrif.gov.ao/web/noticias/instituto-de-desenvolvimento-agrario-apoia-6.228-familias-na-producao-de-trigo-em-todo-o-pais",

  campanha2526:
    "https://minagrif.gov.ao/web/noticias/ministro-da-coordenacao-economica-enaltece-crescimento-do-sector-agricola",

  governo2026:
    "https://www.governo.gov.ao/noticias/3216/governo/estado-da-nacao-2026/integra-da-mensagem-do-presidente-da-republica",
};

const IMAGENS = {
  agricultura:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=85",

  milho:
    "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=1800&q=85",

  bovinos:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cattle%20in%20Angola.jpg?width=1600",

  aves:
    "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1600&q=85",

  leite:
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1600&q=85",

  cafe:
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=85",

  mel:
    "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1600&q=85",

  floresta:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85",

  madeira:
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=85",

  trigo:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85",

  huambo:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=85",

  sementes:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=85",
};

/* =========================================================
   INDICADORES HISTÓRICOS E ACTUAIS
========================================================= */

const indicadores: Indicador[] = [
  {
    id: "area-semeada-2324",
    titulo: "Área semeada",
    valor: "6 178 135",
    unidade: "hectares",
    variacao: "+1,6%",
    descricao:
      "Na campanha agrícola 2023/2024 foram semeados 6 178 135 hectares nas principais fileiras de produção vegetal.",
    oQueMede:
      "Mede a extensão de terra efectivamente utilizada para a instalação das principais culturas agrícolas durante a campanha.",
    significado:
      "O indicador mostra a dimensão física da actividade agrícola, mas não mede sozinho a produtividade. Uma área maior pode gerar mais produção ou simplesmente representar expansão territorial sem aumento proporcional do rendimento por hectare.",
    analise:
      "A agricultura angolana possui uma forte componente familiar. Por isso, a evolução da área semeada deve ser analisada juntamente com acesso a sementes melhoradas, fertilizantes, mecanização, assistência técnica, crédito, água, estradas e mercados.",
    comparacao:
      "A área semeada cresceu aproximadamente 1,6% relativamente à campanha anterior. O crescimento foi positivo, mas inferior ao que seria necessário para explicar sozinho as mudanças observadas em todas as fileiras.",
    contexto:
      "A área agrícola encontra-se distribuída por diferentes regiões agroecológicas, com diferenças importantes de clima, solos, disponibilidade de água e especialização produtiva.",
    importancia:
      "É uma variável fundamental para planeamento agrícola, previsão de necessidades de sementes e fertilizantes e avaliação da expansão da actividade produtiva.",
    implicacoes:
      "O aumento da área deve ser acompanhado por ganhos de produtividade e melhor aproveitamento das parcelas, evitando que o crescimento dependa exclusivamente da expansão territorial.",
    metodologia:
      "O valor é baseado nas estatísticas agrícolas divulgadas pelo INE/MINAGRIF para a campanha 2023/2024.",
    limitacoes:
      "Área semeada não significa necessariamente área colhida. Também não permite, isoladamente, avaliar produtividade ou rentabilidade.",
    categoria: "Agricultura",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF — Anuário Estatístico da Agricultura 2024",
    url: FONTES.anuario,
    imagem: IMAGENS.agricultura,
    classificacao: "Oficial",
  },

  {
    id: "area-colhida-2324",
    titulo: "Área colhida",
    valor: "5 516 167",
    unidade: "hectares",
    variacao: "+1,1%",
    descricao:
      "Área efectivamente colhida na campanha agrícola 2023/2024.",
    oQueMede:
      "Mede a parte da área que chegou efectivamente à fase de colheita.",
    significado:
      "Permite comparar a área instalada com a área efectivamente aproveitada para a obtenção da produção.",
    analise:
      "A diferença entre área semeada e área colhida é uma variável importante para compreender o desempenho efectivo da campanha. Uma área semeada que não chega à colheita pode resultar de condições climáticas, pragas, doenças, dificuldades de acesso, abandono ou outros factores.",
    comparacao:
      "A área colhida cresceu cerca de 1,1%, enquanto a área semeada cresceu aproximadamente 1,6%.",
    contexto:
      "O indicador deve ser acompanhado por província e por cultura para perceber onde estão concentradas as maiores diferenças.",
    importancia:
      "É essencial para medir o aproveitamento real da área agrícola.",
    implicacoes:
      "Reduzir a diferença entre área semeada e área colhida pode aumentar a produção sem necessidade de expandir a área agrícola.",
    metodologia:
      "Indicador baseado na estatística agrícola oficial da campanha 2023/2024.",
    limitacoes:
      "A área colhida não informa, por si só, se a produtividade da parcela foi elevada ou baixa.",
    categoria: "Agricultura",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.agricultura,
    classificacao: "Oficial",
  },

  {
    id: "area-nao-colhida",
    titulo: "Área semeada não colhida",
    valor: "661 968",
    unidade: "hectares",
    descricao:
      "Diferença calculada entre a área semeada e a área colhida na campanha 2023/2024.",
    oQueMede:
      "Mede a diferença entre a superfície instalada com culturas e a superfície que chegou à colheita.",
    significado:
      "Não deve ser interpretada automaticamente como perda física de produção. É um indicador de diferença entre duas fases da actividade agrícola.",
    analise:
      "A existência de aproximadamente 661 968 hectares nesta diferença merece acompanhamento. Para compreender a causa são necessários dados complementares sobre clima, pragas, doenças, acesso, mão-de-obra, financiamento e abandono.",
    comparacao:
      "Representa aproximadamente 10,7% da área semeada.",
    contexto:
      "O valor agregado nacional pode esconder diferenças importantes entre províncias e culturas.",
    importancia:
      "Pode ajudar a identificar oportunidades para aumentar a produção através de melhor aproveitamento das áreas já instaladas.",
    implicacoes:
      "Programas de assistência técnica, irrigação, controlo fitossanitário, estradas rurais e acesso a insumos podem contribuir para reduzir a diferença quando estes forem os factores limitantes.",
    metodologia:
      "Cálculo AGROINOVA: 6 178 135 hectares semeados menos 5 516 167 hectares colhidos.",
    limitacoes:
      "É um cálculo derivado e não uma estatística independente publicada como tal.",
    categoria: "Agricultura",
    periodo: "2023/2024",
    fonte: "Cálculo AGROINOVA com base no INE/MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.milho,
    classificacao: "Cálculo",
  },

  {
    id: "cereais-2324",
    titulo: "Produção de cereais",
    valor: "3,52 milhões",
    unidade: "toneladas",
    variacao: "+4,9%",
    descricao:
      "Produção nacional de cereais registada na campanha 2023/2024.",
    oQueMede:
      "Mede o volume físico de cereais produzido no período agrícola.",
    significado:
      "Os cereais são uma das principais bases da produção agrícola e da segurança alimentar.",
    analise:
      "O crescimento de 4,9% demonstra uma evolução positiva. Para determinar se houve ganho de produtividade é necessário comparar o crescimento da produção com a evolução da área cultivada.",
    comparacao:
      "A produção de cereais aumentou aproximadamente 4,9% face à campanha anterior.",
    contexto:
      "A fileira inclui culturas de elevada importância alimentar e económica, com diferentes níveis de produtividade entre regiões.",
    importancia:
      "É um dos principais indicadores para acompanhar a disponibilidade de produtos agrícolas básicos.",
    implicacoes:
      "O crescimento sustentável exige melhoria de produtividade, armazenamento, transformação, logística e acesso ao mercado.",
    metodologia:
      "Estimativa estatística oficial do INE/MINAGRIF.",
    limitacoes:
      "O volume total não permite conhecer a distribuição por produtor, município ou exploração sem consultar os quadros detalhados.",
    categoria: "Agricultura",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.milho,
    classificacao: "Oficial",
  },

  {
    id: "frutas-2324",
    titulo: "Produção de frutas",
    valor: "6,90 milhões",
    unidade: "toneladas",
    descricao:
      "Produção nacional de frutas estimada para a campanha 2023/2024.",
    oQueMede:
      "Mede o volume físico de frutas produzido no período.",
    significado:
      "As frutas representam uma componente muito importante da produção vegetal nacional em termos de volume.",
    analise:
      "A produção de frutas supera o volume de cereais em toneladas. Esta comparação deve ser feita com cuidado, porque produtos diferentes possuem preços, custos e valores nutricionais diferentes.",
    comparacao:
      "O volume de frutas atingiu aproximadamente 6,90 milhões de toneladas.",
    contexto:
      "A banana e outras culturas frutícolas possuem peso significativo na produção nacional.",
    importancia:
      "A cadeia frutícola possui potencial para abastecimento interno, transformação, conservação e exportação.",
    implicacoes:
      "Investimentos em armazenamento, cadeia de frio, processamento e logística podem reduzir perdas pós-colheita.",
    metodologia:
      "Dados de produção vegetal divulgados pelo INE/MINAGRIF.",
    limitacoes:
      "Volume físico não equivale directamente a valor económico.",
    categoria: "Agricultura",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.agricultura,
    classificacao: "Oficial",
  },

  {
    id: "horticolas-2324",
    titulo: "Produção de hortícolas",
    valor: "2,36 milhões",
    unidade: "toneladas",
    variacao: "-28,7%",
    descricao:
      "Produção nacional de hortícolas na campanha 2023/2024.",
    oQueMede:
      "Mede o volume de produtos hortícolas produzido durante a campanha.",
    significado:
      "Hortícolas possuem ciclos relativamente curtos e respondem rapidamente à disponibilidade de água, sementes, fertilizantes, clima e condições de mercado.",
    analise:
      "A redução de 28,7% merece atenção porque é significativamente maior do que a variação da área agrícola total.",
    comparacao:
      "A produção caiu aproximadamente 28,7% relativamente à campanha anterior.",
    contexto:
      "A horticultura é particularmente importante para o abastecimento urbano e para a geração de rendimento de pequenos produtores.",
    importancia:
      "É uma cadeia importante para segurança alimentar, nutrição e rendimento rural.",
    implicacoes:
      "Irrigação, sementes, fertilização, assistência técnica, armazenamento e acesso a mercados podem ter impacto directo na cadeia.",
    metodologia:
      "Estatística agrícola oficial do INE/MINAGRIF.",
    limitacoes:
      "A variação agregada não explica as causas específicas da queda.",
    categoria: "Agricultura",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.agricultura,
    classificacao: "Oficial",
  },

  {
    id: "carnes-2324",
    titulo: "Produção total de carnes",
    valor: "333 238",
    unidade: "toneladas",
    variacao: "-2,5%",
    descricao:
      "Produção total de carne bovina, caprina, ovina, suína e de aves.",
    oQueMede:
      "Mede a produção agregada das principais categorias de carne.",
    significado:
      "Permite obter uma visão geral da oferta pecuária, mas pode esconder comportamentos muito diferentes entre espécies.",
    analise:
      "A queda agregada de 2,5% não significa que toda a pecuária tenha recuado. Carne bovina e aves cresceram, enquanto a carne caprina apresentou uma redução expressiva.",
    comparacao:
      "A produção total caiu 2,5%, mas a carne bovina cresceu 3,9% e a carne de aves 8,1%.",
    contexto:
      "A estrutura pecuária angolana é diversificada e apresenta diferentes sistemas de produção.",
    importancia:
      "É um indicador importante para segurança alimentar, abastecimento e políticas de produção animal.",
    implicacoes:
      "As políticas devem considerar cada cadeia individualmente, em vez de tratar toda a pecuária como um bloco homogéneo.",
    metodologia:
      "Agregação das principais categorias de carne reportadas pelo INE/MINAGRIF.",
    limitacoes:
      "Não inclui necessariamente todas as categorias pecuárias existentes.",
    categoria: "Pecuária",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.bovinos,
    classificacao: "Oficial",
  },

  {
    id: "caprina-2324",
    titulo: "Carne caprina",
    valor: "153 136",
    unidade: "toneladas",
    variacao: "-10,0%",
    descricao:
      "Produção nacional de carne caprina.",
    oQueMede:
      "Mede o volume de carne proveniente da caprinicultura.",
    significado:
      "A caprinicultura possui forte importância económica e alimentar em várias regiões do país.",
    analise:
      "A carne caprina representa aproximadamente 46% do total das carnes consideradas. A queda de 10% teve influência significativa no resultado agregado da pecuária.",
    comparacao:
      "A produção passou de aproximadamente 170 mil toneladas para 153 136 toneladas.",
    contexto:
      "A produção caprina está associada a sistemas familiares e diferentes condições agroecológicas.",
    importancia:
      "É uma cadeia relevante para rendimento rural e disponibilidade de proteína animal.",
    implicacoes:
      "Sanidade animal, alimentação, genética e acesso a mercados são áreas importantes para acompanhamento.",
    metodologia:
      "Dados oficiais de produção pecuária.",
    limitacoes:
      "O indicador não explica sozinho as causas da redução.",
    categoria: "Pecuária",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.bovinos,
    classificacao: "Oficial",
  },

  {
    id: "bovina-2324",
    titulo: "Carne bovina",
    valor: "110 104",
    unidade: "toneladas",
    variacao: "+3,9%",
    descricao:
      "Produção nacional de carne bovina.",
    oQueMede:
      "Mede o volume de carne proveniente da produção bovina.",
    significado:
      "A cadeia bovina é uma das principais componentes da pecuária nacional.",
    analise:
      "O crescimento de 3,9% ocorreu num contexto em que a produção total de carnes diminuiu. Isto demonstra que as diferentes cadeias tiveram desempenhos distintos.",
    comparacao:
      "A produção bovina cresceu aproximadamente 3,9% face à campanha anterior.",
    contexto:
      "A produção bovina possui forte presença em províncias com tradição pecuária.",
    importancia:
      "É relevante para abastecimento interno, rendimento rural e desenvolvimento da cadeia de carne.",
    implicacoes:
      "Melhoria genética, sanidade, pastagens, alimentação e infra-estruturas de comercialização podem elevar a produtividade.",
    metodologia:
      "Estatística oficial INE/MINAGRIF.",
    limitacoes:
      "Não permite inferir rentabilidade dos produtores.",
    categoria: "Pecuária",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.bovinos,
    classificacao: "Oficial",
  },

  {
    id: "aves-2324",
    titulo: "Carne de aves",
    valor: "57 631",
    unidade: "toneladas",
    variacao: "+8,1%",
    descricao:
      "Produção nacional de carne de aves.",
    oQueMede:
      "Mede o volume produzido pela cadeia avícola de carne.",
    significado:
      "A avicultura possui ciclos produtivos relativamente curtos e pode responder rapidamente a investimentos e condições de mercado.",
    analise:
      "O crescimento de 8,1% coloca a carne de aves entre as cadeias pecuárias de evolução mais positiva.",
    comparacao:
      "A produção de aves cresceu 8,1%, acima da evolução da carne bovina.",
    contexto:
      "A cadeia avícola depende fortemente de alimentação, energia, sanidade, pintos, logística e capacidade de processamento.",
    importancia:
      "É estratégica para aumentar a disponibilidade de proteína animal e reduzir dependência de importações.",
    implicacoes:
      "A disponibilidade e o preço dos alimentos para aves são factores críticos para o crescimento da cadeia.",
    metodologia:
      "Dados oficiais da produção pecuária.",
    limitacoes:
      "A produção física não mostra custos ou margens comerciais.",
    categoria: "Pecuária",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.aves,
    classificacao: "Oficial",
  },

  {
    id: "ovos-2324",
    titulo: "Produção de ovos",
    valor: "2,42 mil milhões",
    unidade: "unidades",
    variacao: "-12,3%",
    descricao:
      "Produção nacional de ovos na campanha 2023/2024.",
    oQueMede:
      "Mede o número de ovos produzidos pela actividade avícola.",
    significado:
      "É um indicador importante da oferta de proteína animal e da actividade da avicultura de postura.",
    analise:
      "A redução de 12,3% merece acompanhamento porque os custos de alimentação, energia, sanidade e logística podem afectar fortemente a produção.",
    comparacao:
      "A produção caiu 12,3% relativamente à campanha anterior.",
    contexto:
      "A cadeia pode reagir rapidamente às condições de mercado e aos custos dos factores de produção.",
    importancia:
      "Os ovos são uma fonte importante de proteína e têm grande circulação no mercado interno.",
    implicacoes:
      "A recuperação da cadeia depende da competitividade das explorações e da estabilidade dos factores de produção.",
    metodologia:
      "Estatística oficial INE/MINAGRIF.",
    limitacoes:
      "Não inclui análise de preços ao consumidor neste indicador.",
    categoria: "Pecuária",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.aves,
    classificacao: "Oficial",
  },

  {
    id: "leite-2324",
    titulo: "Produção de leite",
    valor: "5,51 milhões",
    unidade: "litros",
    variacao: "-12,6%",
    descricao:
      "Produção nacional de leite registada na campanha 2023/2024.",
    oQueMede:
      "Mede o volume de leite produzido.",
    significado:
      "A cadeia leiteira é sensível à alimentação animal, água, sanidade, genética e capacidade de conservação.",
    analise:
      "A queda de 12,6% deve ser analisada em conjunto com os sistemas de produção, disponibilidade de alimentação e condições de comercialização.",
    comparacao:
      "A produção caiu aproximadamente 12,6% face à campanha anterior.",
    contexto:
      "A produção leiteira apresenta desafios diferentes dos sistemas de produção de carne.",
    importancia:
      "O leite possui importância nutricional e potencial de transformação industrial.",
    implicacoes:
      "Refrigeração, recolha, alimentação e genética são pontos fundamentais para o desenvolvimento da cadeia.",
    metodologia:
      "Estatística pecuária oficial.",
    limitacoes:
      "Não mede o volume processado industrialmente.",
    categoria: "Pecuária",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.leite,
    classificacao: "Oficial",
  },

  {
    id: "cafe-2324",
    titulo: "Café comercial",
    valor: "7 584",
    unidade: "toneladas",
    variacao: "+21,7%",
    descricao:
      "Produção comercial de café na campanha 2023/2024.",
    oQueMede:
      "Mede a produção comercial de café reportada para a campanha.",
    significado:
      "O café é uma cadeia com potencial de geração de rendimento rural, transformação, exportação e valorização da produção nacional.",
    analise:
      "O crescimento de 21,7% destaca-se entre os indicadores analisados. A recuperação da produção comercial pode abrir espaço para maior processamento e exportação.",
    comparacao:
      "A produção passou de 6 229 toneladas para 7 584 toneladas.",
    contexto:
      "A cadeia cafeeira possui importância histórica e pode beneficiar de renovação de plantações, assistência técnica e melhoria da comercialização.",
    importancia:
      "É uma das culturas comerciais estratégicas de Angola.",
    implicacoes:
      "A continuidade do crescimento dependerá de produtividade, qualidade, processamento e acesso a mercados.",
    metodologia:
      "Dados oficiais de produção comercial de café.",
    limitacoes:
      "Uma campanha positiva não garante crescimento automático na campanha seguinte.",
    categoria: "Café",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.cafe,
    classificacao: "Oficial",
  },

  {
    id: "mel-2324",
    titulo: "Produção nacional de mel",
    valor: "6 084",
    unidade: "toneladas",
    variacao: "+16%",
    descricao:
      "Produção nacional de mel registada na campanha 2023/2024.",
    oQueMede:
      "Mede a quantidade de mel produzida pela actividade apícola.",
    significado:
      "O mel representa o principal produto comercial da apicultura, mas a actividade também gera cera e presta serviços ecológicos através da polinização.",
    analise:
      "A apicultura apresenta importância económica e ambiental. O crescimento de 16% indica uma evolução positiva da produção reportada, mas a cadeia ainda merece maior detalhe estatístico por província e por sistema produtivo.",
    comparacao:
      "A produção aumentou aproximadamente 16% face ao período anterior.",
    contexto:
      "A apicultura pode ser desenvolvida em diferentes regiões rurais e pode complementar outras actividades agrícolas.",
    importancia:
      "Além do rendimento directo, as abelhas contribuem para a polinização de culturas, tornando a actividade relevante para a agricultura como um todo.",
    implicacoes:
      "Melhor organização dos produtores, qualidade, embalagem, certificação, processamento e acesso a mercados podem aumentar o valor capturado pelos apicultores.",
    metodologia:
      "Estatística de produção apícola divulgada pelo INE/MINAGRIF.",
    limitacoes:
      "Os dados nacionais não permitem, nesta página, identificar todas as diferenças provinciais nem a produtividade por colmeia.",
    categoria: "Apicultura",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.mel,
    classificacao: "Oficial",
  },

  {
    id: "cera-2324",
    titulo: "Produção de cera",
    valor: "379",
    unidade: "toneladas",
    variacao: "+14%",
    descricao:
      "Produção nacional de cera de abelha.",
    oQueMede:
      "Mede a quantidade de cera obtida da actividade apícola.",
    significado:
      "A cera constitui um produto secundário importante e demonstra que a apicultura não depende exclusivamente da venda de mel.",
    analise:
      "A produção de cera cresceu aproximadamente 14%, acompanhando a tendência positiva observada no mel.",
    comparacao:
      "O crescimento foi ligeiramente inferior ao registado para o mel.",
    contexto:
      "A cera pode ser utilizada em diferentes actividades económicas e industriais.",
    importancia:
      "Diversificar a comercialização dos produtos apícolas pode melhorar o rendimento dos produtores.",
    implicacoes:
      "A organização da cadeia pode criar novos produtos e mercados.",
    metodologia:
      "Estatística oficial da produção apícola.",
    limitacoes:
      "Não apresenta nesta página o valor económico da cera comercializada.",
    categoria: "Apicultura",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.mel,
    classificacao: "Oficial",
  },

  {
    id: "madeira-toro-2324",
    titulo: "Madeira em toro",
    valor: "238 690",
    unidade: "m³",
    descricao:
      "Produção nacional de madeira em toro.",
    oQueMede:
      "Mede o volume de madeira em toro produzido.",
    significado:
      "Representa uma fase inicial da cadeia florestal, antes das etapas de transformação.",
    analise:
      "A comparação com madeira serrada permite avaliar, de forma simplificada, a escala das etapas de transformação existentes.",
    comparacao:
      "O volume de madeira em toro foi superior ao volume de madeira serrada.",
    contexto:
      "O sector florestal combina exploração, transformação, transporte e comércio.",
    importancia:
      "A cadeia pode gerar emprego e valor acrescentado, desde que seja acompanhada por gestão sustentável.",
    implicacoes:
      "A transformação local pode aumentar o valor económico retido no país.",
    metodologia:
      "Dados de produção florestal divulgados pelo INE/MINAGRIF.",
    limitacoes:
      "Volume de madeira não é equivalente a valor económico nem mede sustentabilidade florestal.",
    categoria: "Florestas",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.floresta,
    classificacao: "Oficial",
  },

  {
    id: "madeira-serrada-2324",
    titulo: "Madeira serrada",
    valor: "179 670",
    unidade: "m³",
    descricao:
      "Produção nacional de madeira serrada.",
    oQueMede:
      "Mede o volume de madeira que passou por uma etapa de transformação em madeira serrada.",
    significado:
      "É um indicador de transformação da matéria-prima florestal.",
    analise:
      "A capacidade de serragem e transformação local é importante para aumentar o valor acrescentado da cadeia florestal.",
    comparacao:
      "Foram registados aproximadamente 179,67 mil m³ de madeira serrada.",
    contexto:
      "A indústria florestal enfrenta desafios relacionados com infra-estruturas, transporte, equipamentos e sustentabilidade.",
    importancia:
      "Quanto maior a transformação local, maior pode ser o valor económico gerado antes da comercialização.",
    implicacoes:
      "Investimentos industriais podem aumentar a capacidade de processamento.",
    metodologia:
      "Estatística oficial da produção florestal.",
    limitacoes:
      "O indicador não mede eficiência industrial nem rentabilidade.",
    categoria: "Florestas",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.madeira,
    classificacao: "Oficial",
  },

  {
    id: "madeira-exportada-2324",
    titulo: "Madeira serrada exportada",
    valor: "78 100",
    unidade: "m³",
    descricao:
      "Volume de madeira serrada exportada.",
    oQueMede:
      "Mede o volume de madeira serrada que saiu do país através do comércio externo.",
    significado:
      "Demonstra a ligação da cadeia florestal nacional com mercados internacionais.",
    analise:
      "O comércio externo mostra que existe procura internacional. O desafio económico consiste em equilibrar exportação, transformação local e sustentabilidade.",
    comparacao:
      "O volume exportado representa uma parcela significativa da madeira serrada produzida.",
    contexto:
      "A cadeia florestal possui relações comerciais com vários mercados externos.",
    importancia:
      "As exportações podem gerar divisas e estimular investimentos.",
    implicacoes:
      "A transformação local antes da exportação pode aumentar o valor acrescentado nacional.",
    metodologia:
      "Dados estatísticos de comércio e produção florestal.",
    limitacoes:
      "Volume exportado não informa o valor financeiro das exportações.",
    categoria: "Florestas",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.madeira,
    classificacao: "Oficial",
  },

  {
    id: "huambo-carnes",
    titulo: "Carnes produzidas no Huambo",
    valor: "23 639",
    unidade: "toneladas",
    variacao: "7,1% do total nacional",
    descricao:
      "Produção total de carnes registada na província do Huambo.",
    oQueMede:
      "Mede a contribuição provincial do Huambo para a produção nacional de carnes.",
    significado:
      "Mostra a importância da província dentro da estrutura pecuária nacional.",
    analise:
      "O Huambo aparece entre as províncias com maior produção de carnes, com 23 639 toneladas.",
    comparacao:
      "Nos valores provinciais individualizados, o Huambo ficou atrás de Luanda, Huíla e Cuanza Sul e à frente de Malanje e Uíge.",
    contexto:
      "A actividade pecuária do Huambo está ligada à agricultura, disponibilidade de pastagens e tradição de produção animal.",
    importancia:
      "A posição provincial pode favorecer o desenvolvimento de cadeias de abate, transformação, comercialização e distribuição.",
    implicacoes:
      "A melhoria das infra-estruturas pecuárias pode aumentar o valor acrescentado gerado localmente.",
    metodologia:
      "Dados provinciais do Anuário Estatístico da Agricultura.",
    limitacoes:
      "O indicador não apresenta aqui a distribuição por município.",
    categoria: "Huambo",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.huambo,
    classificacao: "Oficial",
  },

  {
    id: "huambo-bovina",
    titulo: "Carne bovina no Huambo",
    valor: "7 514",
    unidade: "toneladas",
    variacao: "6,8% do total nacional",
    descricao:
      "Produção de carne bovina registada na província do Huambo.",
    oQueMede:
      "Mede a contribuição do Huambo para a produção nacional de carne bovina.",
    significado:
      "Permite avaliar a posição da província numa das principais cadeias pecuárias.",
    analise:
      "O Huambo contribuiu com aproximadamente 6,8% da produção nacional de carne bovina.",
    comparacao:
      "A produção provincial ficou abaixo de Luanda, Huíla e Cuanza Sul nos valores destacados.",
    contexto:
      "A integração entre agricultura e pecuária constitui uma oportunidade para produção de alimentação animal e aproveitamento de subprodutos.",
    importancia:
      "A cadeia bovina pode gerar oportunidades em criação, engorda, abate, transformação e comércio.",
    implicacoes:
      "Melhorias em sanidade, alimentação, genética, água e comercialização podem elevar a produtividade.",
    metodologia:
      "Estatística provincial oficial.",
    limitacoes:
      "Não mede o número de animais abatidos nem a produtividade média por animal.",
    categoria: "Huambo",
    periodo: "2023/2024",
    fonte: "INE / MINAGRIF",
    url: FONTES.anuario,
    imagem: IMAGENS.bovinos,
    classificacao: "Oficial",
  },

  /* ===================== 2024/25 ===================== */

  {
    id: "agricultura-total-2425",
    titulo: "Produção agrícola total",
    valor: ">30,4 milhões",
    unidade: "toneladas",
    variacao: "+8,5%",
    descricao:
      "Produção agrícola total reportada para a campanha 2024/2025.",
    oQueMede:
      "Representa o volume agregado de produção agrícola reportado para a campanha.",
    significado:
      "É um dos principais indicadores para acompanhar a dimensão física da produção agrícola nacional.",
    analise:
      "O resultado mostra uma aceleração importante relativamente à campanha anterior. O crescimento deve ser interpretado conjuntamente com a evolução das áreas, produtividade e estrutura das fileiras.",
    comparacao:
      "O MINAGRIF reportou crescimento de 8,5% em relação ao período anterior.",
    contexto:
      "O crescimento ocorre num contexto de reforço de cadeias prioritárias e de políticas de aumento da produção nacional.",
    importancia:
      "É um indicador central para segurança alimentar e substituição de importações.",
    implicacoes:
      "O desafio passa por transformar crescimento de volume em rendimento, processamento, emprego e maior oferta nacional.",
    metodologia:
      "Valor reportado pelo MINAGRIF para a campanha 2024/2025.",
    limitacoes:
      "O valor é apresentado como agregado; a decomposição completa por cultura deve ser consultada nas publicações oficiais.",
    categoria: "Agricultura",
    periodo: "2024/2025",
    fonte: "MINAGRIF — resultados da campanha 2024/2025",
    url: FONTES.minagrifEconomia,
    imagem: IMAGENS.agricultura,
    classificacao: "Oficial",
  },

  {
    id: "cereais-2425",
    titulo: "Cereais — campanha 2024/25",
    valor: "≈3,7 milhões",
    unidade: "toneladas",
    variacao: "+6,5%",
    descricao:
      "Produção de cereais reportada para a campanha 2024/2025.",
    oQueMede:
      "Mede a produção agregada das principais culturas cerealíferas.",
    significado:
      "Os cereais continuam a ocupar uma posição central na produção alimentar nacional.",
    analise:
      "O crescimento de 6,5% indica uma evolução positiva. O aumento absoluto da produção deve ser acompanhado pela produtividade por hectare.",
    comparacao:
      "A produção aproximou-se de 3,7 milhões de toneladas, com crescimento de 6,5%.",
    contexto:
      "Milho, arroz e outras culturas cerealíferas estão entre as fileiras estratégicas.",
    importancia:
      "A produção cerealífera é directamente relevante para segurança alimentar.",
    implicacoes:
      "Melhoria de sementes, fertilização, mecanização, armazenamento e comercialização é fundamental.",
    metodologia:
      "Resultados oficiais reportados pelo MINAGRIF.",
    limitacoes:
      "O valor arredondado não substitui os quadros detalhados do ICAPP.",
    categoria: "Agricultura",
    periodo: "2024/2025",
    fonte: "MINAGRIF / INE",
    url: FONTES.minagrifResultados,
    imagem: IMAGENS.milho,
    classificacao: "Oficial",
  },

  {
    id: "crescimento-raizes-2425",
    titulo: "Raízes e tubérculos",
    valor: "Crescimento",
    unidade: "variação anual",
    variacao: "+10,6%",
    descricao:
      "Crescimento reportado da produção de raízes e tubérculos na campanha 2024/2025.",
    oQueMede:
      "Mede a evolução percentual da produção da fileira.",
    significado:
      "Raízes e tubérculos possuem forte importância na alimentação e no rendimento rural.",
    analise:
      "O crescimento de 10,6% foi uma das maiores taxas entre os grandes grupos de produção agrícola destacados pelo MINAGRIF.",
    comparacao:
      "A evolução foi superior à dos cereais, que cresceram 6,5%.",
    contexto:
      "A fileira possui grande importância na agricultura familiar.",
    importancia:
      "É estratégica para segurança alimentar e diversificação produtiva.",
    implicacoes:
      "A melhoria de conservação e processamento pode reduzir perdas e criar valor.",
    metodologia:
      "Taxa de crescimento reportada pelo MINAGRIF.",
    limitacoes:
      "Sem o volume absoluto nesta ficha, a taxa não permite saber quantas toneladas foram acrescentadas.",
    categoria: "Agricultura",
    periodo: "2024/2025",
    fonte: "MINAGRIF — resultados da campanha 2024/2025",
    url: FONTES.minagrifResultados,
    imagem: IMAGENS.agricultura,
    classificacao: "Oficial",
  },

  {
    id: "leguminosas-2425",
    titulo: "Leguminosas e oleaginosas",
    valor: "Crescimento",
    unidade: "variação anual",
    variacao: "+5,9%",
    descricao:
      "Crescimento reportado da produção de leguminosas e oleaginosas.",
    oQueMede:
      "Mede a variação anual da produção agregada destas culturas.",
    significado:
      "São importantes para alimentação, proteína vegetal e fornecimento de matérias-primas.",
    analise:
      "O crescimento de 5,9% indica evolução positiva, embora inferior à taxa das raízes e tubérculos.",
    comparacao:
      "A taxa foi inferior aos 10,6% registados nas raízes e tubérculos.",
    contexto:
      "A soja e outras oleaginosas fazem parte das cadeias prioritárias de desenvolvimento.",
    importancia:
      "A expansão destas cadeias pode reduzir importações de matérias-primas.",
    implicacoes:
      "É necessário acompanhar processamento, armazenamento e ligação com a indústria.",
    metodologia:
      "Taxa de crescimento oficial.",
    limitacoes:
      "A taxa não apresenta nesta ficha o volume absoluto.",
    categoria: "Agricultura",
    periodo: "2024/2025",
    fonte: "MINAGRIF",
    url: FONTES.minagrifResultados,
    imagem: IMAGENS.agricultura,
    classificacao: "Oficial",
  },

  {
    id: "horticultura-2425",
    titulo: "Horticultura",
    valor: "Crescimento",
    unidade: "variação anual",
    variacao: "+8,2%",
    descricao:
      "Crescimento reportado da horticultura na campanha 2024/2025.",
    oQueMede:
      "Mede a evolução percentual da produção hortícola.",
    significado:
      "Representa uma recuperação importante quando comparada com a queda observada em 2023/2024.",
    analise:
      "A taxa de 8,2% mostra uma evolução positiva da cadeia na campanha seguinte.",
    comparacao:
      "A evolução contrasta com a queda de 28,7% registada nas hortícolas em 2023/2024.",
    contexto:
      "A horticultura possui elevada importância para mercados urbanos.",
    importancia:
      "Pode contribuir para abastecimento regular e rendimento de pequenos produtores.",
    implicacoes:
      "Irrigação e logística continuam a ser pontos críticos.",
    metodologia:
      "Taxa reportada pelo MINAGRIF.",
    limitacoes:
      "É uma taxa de crescimento e não um volume absoluto.",
    categoria: "Agricultura",
    periodo: "2024/2025",
    fonte: "MINAGRIF",
    url: FONTES.minagrifResultados,
    imagem: IMAGENS.agricultura,
    classificacao: "Oficial",
  },

  {
    id: "frutas-2425",
    titulo: "Frutas — campanha 2024/25",
    valor: "Crescimento",
    unidade: "variação anual",
    variacao: "+5,5%",
    descricao:
      "Crescimento reportado da produção de frutas.",
    oQueMede:
      "Mede a evolução anual da produção de frutas.",
    significado:
      "Indica continuidade de crescimento de uma das maiores fileiras físicas da produção vegetal.",
    analise:
      "A taxa de 5,5% demonstra crescimento positivo, embora moderado.",
    comparacao:
      "O crescimento foi inferior aos 8,2% da horticultura e aos 10,6% das raízes e tubérculos.",
    contexto:
      "A cadeia frutícola enfrenta desafios de conservação, transporte e transformação.",
    importancia:
      "Redução de perdas pós-colheita pode aumentar a disponibilidade efectiva.",
    implicacoes:
      "Cadeias de frio, processamento e armazenamento podem ampliar o valor económico.",
    metodologia:
      "Taxa oficial do MINAGRIF.",
    limitacoes:
      "Não apresenta nesta ficha o volume absoluto.",
    categoria: "Agricultura",
    periodo: "2024/2025",
    fonte: "MINAGRIF",
    url: FONTES.minagrifResultados,
    imagem: IMAGENS.agricultura,
    classificacao: "Oficial",
  },

  {
    id: "carne-2425",
    titulo: "Produção de carne — 2024/25",
    valor: "Crescimento",
    unidade: "variação anual",
    variacao: "+7,3%",
    descricao:
      "Crescimento da produção de carne reportado para a campanha 2024/2025.",
    oQueMede:
      "Mede a evolução anual da produção pecuária de carne.",
    significado:
      "Indica recuperação da produção de proteína animal.",
    analise:
      "O crescimento de 7,3% representa uma melhoria importante face à queda agregada observada em 2023/2024.",
    comparacao:
      "A taxa de crescimento de 2024/25 contrasta com a redução de 2,5% observada na produção total de carnes em 2023/24.",
    contexto:
      "A evolução ocorre num período de reforço das cadeias pecuárias.",
    importancia:
      "Aumentar a produção de carne é relevante para reduzir dependência de oferta externa.",
    implicacoes:
      "Sanidade, alimentação animal, genética, abate e cadeia de frio são fundamentais.",
    metodologia:
      "Taxa reportada pelo MINAGRIF.",
    limitacoes:
      "A taxa agregada não permite observar cada espécie individualmente.",
    categoria: "Pecuária",
    periodo: "2024/2025",
    fonte: "MINAGRIF",
    url: FONTES.minagrifResultados,
    imagem: IMAGENS.bovinos,
    classificacao: "Oficial",
  },

  {
    id: "ovos-2425",
    titulo: "Produção de ovos — 2024/25",
    valor: "Crescimento",
    unidade: "variação anual",
    variacao: "+5%",
    descricao:
      "Crescimento da produção de ovos reportado para 2024/2025.",
    oQueMede:
      "Mede a evolução da produção de ovos.",
    significado:
      "Representa recuperação da cadeia de postura.",
    analise:
      "O crescimento de 5% contrasta com a queda de 12,3% observada em 2023/2024.",
    comparacao:
      "A cadeia passou de uma evolução negativa para uma evolução positiva.",
    contexto:
      "A produção depende de custos de ração, energia, sanidade e eficiência das explorações.",
    importancia:
      "Os ovos constituem uma fonte importante de proteína e têm elevada procura interna.",
    implicacoes:
      "A estabilidade dos custos de produção é importante para manter o crescimento.",
    metodologia:
      "Taxa reportada pelo MINAGRIF.",
    limitacoes:
      "Não é apresentado nesta ficha o volume absoluto.",
    categoria: "Pecuária",
    periodo: "2024/2025",
    fonte: "MINAGRIF",
    url: FONTES.minagrifResultados,
    imagem: IMAGENS.aves,
    classificacao: "Oficial",
  },

  {
    id: "cafe-2425",
    titulo: "Café comercial — 2024/25",
    valor: "Crescimento",
    unidade: "variação anual",
    variacao: "+40%",
    descricao:
      "Crescimento reportado da produção comercial de café na campanha 2024/2025.",
    oQueMede:
      "Mede a evolução percentual da produção comercial de café.",
    significado:
      "É uma das maiores taxas de crescimento entre as cadeias destacadas pelo MINAGRIF.",
    analise:
      "O crescimento de 40% representa forte aceleração relativamente aos 21,7% registados em 2023/2024.",
    comparacao:
      "A cadeia cafeeira apresenta dois períodos consecutivos de crescimento expressivo.",
    contexto:
      "O café está entre as cadeias consideradas prioritárias para a diversificação económica.",
    importancia:
      "Pode gerar rendimento rural, emprego, exportações e oportunidades de processamento.",
    implicacoes:
      "É importante consolidar produtividade, qualidade, processamento e acesso a mercados.",
    metodologia:
      "Taxa oficial reportada pelo MINAGRIF.",
    limitacoes:
      "A taxa de crescimento não fornece nesta ficha a tonelagem absoluta de 2024/25.",
    categoria: "Café",
    periodo: "2024/2025",
    fonte: "MINAGRIF",
    url: FONTES.minagrifResultados,
    imagem: IMAGENS.cafe,
    classificacao: "Oficial",
  },

  /* ===================== 2025 ===================== */

  {
    id: "peso-agro-pib-2025",
    titulo: "Peso do sector agropecuário no PIB",
    valor: "25,43%",
    unidade: "do PIB",
    descricao:
      "Peso do sector agropecuário na estrutura económica de Angola em 2025, conforme dados reportados pelo MINAGRIF.",
    oQueMede:
      "Mede a participação do sector agropecuário no Produto Interno Bruto.",
    significado:
      "Mostra a relevância económica do sector para além da simples quantidade de alimentos produzidos.",
    analise:
      "Segundo o MINAGRIF, o peso do sector passou de 13,66% em 2015 para 25,43% em 2025.",
    comparacao:
      "A participação praticamente duplicou em dez anos, de acordo com os valores apresentados pelo Ministério.",
    contexto:
      "O crescimento reflecte o aumento da produção e a transformação da estrutura produtiva.",
    importancia:
      "É um indicador macroeconómico fundamental para avaliar a diversificação da economia.",
    implicacoes:
      "Maior peso económico aumenta a necessidade de investimento em produtividade, transformação e infra-estruturas.",
    metodologia:
      "Valores reportados pelo MINAGRIF em comunicação oficial sobre o desempenho económico do sector.",
    limitacoes:
      "O indicador não significa que agricultura seja responsável isoladamente por toda a actividade agroindustrial.",
    categoria: "Agricultura",
    periodo: "2025",
    fonte: "MINAGRIF — desempenho económico do sector",
    url: FONTES.minagrifEconomia,
    imagem: IMAGENS.agricultura,
    classificacao: "Oficial",
  },

  {
    id: "producao-202425",
    titulo: "Produção agrícola 2024/25",
    valor: ">30,4 milhões",
    unidade: "toneladas",
    variacao: "+8,5%",
    descricao:
      "Volume total de produção agrícola reportado para a campanha 2024/2025.",
    oQueMede:
      "Mede o volume agregado de produção agrícola.",
    significado:
      "É uma medida física da escala produtiva da agricultura.",
    analise:
      "O resultado demonstra uma aceleração significativa da produção nacional.",
    comparacao:
      "O crescimento foi de aproximadamente 8,5% em relação ao período anterior.",
    contexto:
      "O desempenho está associado ao crescimento de várias fileiras agrícolas.",
    importancia:
      "O aumento da oferta nacional pode contribuir para segurança alimentar e redução da dependência externa.",
    implicacoes:
      "O próximo desafio é garantir armazenamento, processamento e mercados capazes de absorver a produção.",
    metodologia:
      "Valor oficial comunicado pelo MINAGRIF.",
    limitacoes:
      "O valor arredondado deve ser complementado pelas tabelas estatísticas detalhadas.",
    categoria: "Agricultura",
    periodo: "2024/2025",
    fonte: "MINAGRIF",
    url: FONTES.minagrifEconomia,
    imagem: IMAGENS.agricultura,
    classificacao: "Oficial",
  },

  {
    id: "sementes-2025",
    titulo: "Disponibilidade de sementes certificadas",
    valor: "6 930",
    unidade: "toneladas",
    variacao: "+143,2%",
    descricao:
      "Disponibilidade de sementes certificadas reportada para 2025.",
    oQueMede:
      "Mede a quantidade de sementes certificadas disponibilizada ao sistema produtivo.",
    significado:
      "A disponibilidade de sementes certificadas é um dos factores fundamentais para melhorar a produtividade e qualidade das culturas.",
    analise:
      "O valor passou de 2 850 toneladas em 2023 para 6 930 toneladas em 2025.",
    comparacao:
      "O crescimento reportado foi de 143,2% no período.",
    contexto:
      "A expansão da oferta de sementes é relevante para a modernização da agricultura.",
    importancia:
      "Sementes de qualidade são um dos principais factores tecnológicos da produtividade.",
    implicacoes:
      "É necessário garantir também distribuição, preço acessível, assistência técnica e adaptação das variedades.",
    metodologia:
      "Dados apresentados na comunicação oficial do Estado da Nação.",
    limitacoes:
      "Disponibilidade não significa necessariamente que todo o volume tenha sido efectivamente utilizado pelos produtores.",
    categoria: "Agricultura",
    periodo: "2025",
    fonte: "Governo de Angola — Estado da Nação",
    url: FONTES.governo2026,
    imagem: IMAGENS.sementes,
    classificacao: "Oficial",
  },

  {
    id: "mel-2023-25",
    titulo: "Produção de mel — período 2023/2025",
    valor: "684",
    unidade: "toneladas",
    variacao: "+49,5%",
    descricao:
      "Produção de mel reportada pelo Governo para o período 2023–2025.",
    oQueMede:
      "Representa a produção de mel reportada para o período indicado na comunicação oficial.",
    significado:
      "Mostra a evolução recente da apicultura no quadro dos resultados agropecuários nacionais.",
    analise:
      "O Governo reportou 684 toneladas de mel e crescimento de 49,5% no período analisado.",
    comparacao:
      "O valor não deve ser comparado directamente com o indicador de 6 084 toneladas de 2023/2024 sem verificar as diferenças metodológicas e temporais entre as fontes.",
    contexto:
      "A apicultura é simultaneamente uma actividade produtiva e um componente importante da polinização.",
    importancia:
      "Pode gerar rendimento rural com relativamente baixa exigência de área agrícola directa.",
    implicacoes:
      "A profissionalização da cadeia pode aumentar qualidade, embalagem, certificação e acesso ao mercado.",
    metodologia:
      "Indicador apresentado na comunicação oficial do Governo sobre o período 2023–2025.",
    limitacoes:
      "Período e metodologia não são directamente equivalentes ao indicador anual do Anuário 2024.",
    categoria: "Apicultura",
    periodo: "2023–2025",
    fonte: "Governo de Angola — Estado da Nação",
    url: FONTES.governo2026,
    imagem: IMAGENS.mel,
    classificacao: "Oficial",
  },

  {
    id: "cera-2023-25",
    titulo: "Produção de cera — período 2023/2025",
    valor: "33",
    unidade: "toneladas",
    variacao: "+100%",
    descricao:
      "Produção de cera reportada pelo Governo para o período 2023–2025.",
    oQueMede:
      "Representa a produção de cera indicada na comunicação oficial para o período analisado.",
    significado:
      "Demonstra que a cadeia apícola possui produtos além do mel.",
    analise:
      "O Governo reportou 33 toneladas de cera e crescimento de 100% no período indicado.",
    comparacao:
      "A comparação directa com o valor anual de 379 toneladas de 2023/2024 exige cautela devido às diferenças de período e metodologia.",
    contexto:
      "A cera pode ser valorizada em diferentes cadeias económicas.",
    importancia:
      "A diversificação de produtos pode aumentar o rendimento dos apicultores.",
    implicacoes:
      "Processamento e comercialização especializada podem criar novos mercados.",
    metodologia:
      "Valor reportado pelo Governo na comunicação do Estado da Nação.",
    limitacoes:
      "Não é apresentado como uma série anual equivalente ao Anuário 2024.",
    categoria: "Apicultura",
    periodo: "2023–2025",
    fonte: "Governo de Angola — Estado da Nação",
    url: FONTES.governo2026,
    imagem: IMAGENS.mel,
    classificacao: "Oficial",
  },

  {
    id: "madeira-2023-25",
    titulo: "Madeira em toro — período 2023/2025",
    valor: "483 267",
    unidade: "m³",
    variacao: "+44,9%",
    descricao:
      "Volume de madeira em toro reportado para o período 2023–2025.",
    oQueMede:
      "Mede o volume de madeira em toro reportado no período.",
    significado:
      "É um indicador da actividade de exploração e fornecimento de matéria-prima florestal.",
    analise:
      "O Governo reportou crescimento de 44,9%, sinalizando expansão significativa do volume produzido no período.",
    comparacao:
      "O valor deve ser tratado como indicador do período 2023–2025 e não como produção exclusivamente de 2025.",
    contexto:
      "O crescimento ocorre juntamente com esforços para reforçar transformação florestal.",
    importancia:
      "A expansão deve ser acompanhada por sustentabilidade e capacidade de transformação.",
    implicacoes:
      "Maior produção sem aumento da transformação pode limitar o valor acrescentado interno.",
    metodologia:
      "Valor reportado pelo Governo de Angola.",
    limitacoes:
      "Não representa uma série anual isolada.",
    categoria: "Florestas",
    periodo: "2023–2025",
    fonte: "Governo de Angola — Estado da Nação",
    url: FONTES.governo2026,
    imagem: IMAGENS.floresta,
    classificacao: "Oficial",
  },

  {
    id: "madeira-serrada-2023-25",
    titulo: "Madeira serrada — período 2023/2025",
    valor: "326 270",
    unidade: "m³",
    descricao:
      "Volume de madeira serrada reportado para o período 2023–2025.",
    oQueMede:
      "Mede o volume de madeira transformada em madeira serrada no período indicado.",
    significado:
      "É uma medida de transformação da matéria-prima florestal.",
    analise:
      "O crescimento da transformação é importante para aumentar o valor acrescentado interno.",
    comparacao:
      "O indicador deve ser lido como valor relativo ao período 2023–2025.",
    contexto:
      "O Governo também anunciou projectos de parques de transformação de madeira, incluindo Cachiungo, no Huambo.",
    importancia:
      "A transformação local pode gerar emprego e maior valor económico.",
    implicacoes:
      "A expansão industrial deve ser acompanhada por sustentabilidade e rastreabilidade.",
    metodologia:
      "Dados reportados na comunicação oficial do Governo.",
    limitacoes:
      "Não é uma produção anual exclusivamente de 2025.",
    categoria: "Florestas",
    periodo: "2023–2025",
    fonte: "Governo de Angola — Estado da Nação",
    url: FONTES.governo2026,
    imagem: IMAGENS.madeira,
    classificacao: "Oficial",
  },

  {
    id: "carne-2023-25",
    titulo: "Produção de carne — período 2023/2025",
    valor: "1 032 849",
    unidade: "toneladas",
    variacao: "+4,6%",
    descricao:
      "Volume de carne reportado pelo Governo para o período 2023–2025.",
    oQueMede:
      "Mede o volume de produção de carne no período indicado.",
    significado:
      "Permite observar a evolução recente da produção animal numa janela temporal mais ampla.",
    analise:
      "O crescimento de 4,6% mostra evolução positiva no período, complementando os resultados específicos da campanha 2024/2025.",
    comparacao:
      "Não deve ser confundido com produção anual de 2025.",
    contexto:
      "O Governo destacou particularmente as cadeias de carne caprina e bovina.",
    importancia:
      "A expansão da produção animal é relevante para segurança alimentar e substituição de importações.",
    implicacoes:
      "A cadeia precisa de melhorias em sanidade, alimentação, abate, transformação e distribuição.",
    metodologia:
      "Valor comunicado pelo Governo no balanço do período 2023–2025.",
    limitacoes:
      "É um indicador agregado de período e não uma série anual.",
    categoria: "Pecuária",
    periodo: "2023–2025",
    fonte: "Governo de Angola — Estado da Nação",
    url: FONTES.governo2026,
    imagem: IMAGENS.bovinos,
    classificacao: "Oficial",
  },

  /* ===================== 2025/26 ===================== */

  {
    id: "trigo-familias-2526",
    titulo: "Famílias apoiadas na produção de trigo",
    valor: "6 228",
    unidade: "famílias",
    descricao:
      "Famílias apoiadas pelo Instituto de Desenvolvimento Agrário na campanha 2025/2026 para produção de trigo.",
    oQueMede:
      "Mede o número de famílias abrangidas pelo programa de apoio à produção de trigo.",
    significado:
      "Indica a dimensão social e produtiva do programa de expansão da cultura do trigo.",
    analise:
      "O programa combina apoio a sementes, preparação de terras, assistência técnica e correcção de solos.",
    comparacao:
      "É um indicador de execução de política agrícola e não uma estimativa da produção nacional total.",
    contexto:
      "A produção de trigo é considerada estratégica devido à elevada dependência externa deste cereal.",
    importancia:
      "A expansão nacional pode contribuir para reduzir a dependência de importações.",
    implicacoes:
      "Será necessário acompanhar produtividade, custos, qualidade e capacidade de processamento.",
    metodologia:
      "Dados de execução do programa 2025/2026 comunicados pelo MINAGRIF.",
    limitacoes:
      "O apoio às famílias não significa que toda a produção tenha sido realizada ou colhida.",
    categoria: "Agricultura",
    periodo: "2025/2026",
    fonte: "MINAGRIF — apoio à produção de trigo",
    url: FONTES.trigo2526,
    imagem: IMAGENS.trigo,
    classificacao: "Oficial",
  },

  {
    id: "trigo-semente-2526",
    titulo: "Semente de trigo disponibilizada",
    valor: "260",
    unidade: "toneladas",
    descricao:
      "Quantidade de semente disponibilizada no âmbito do programa de produção de trigo 2025/2026.",
    oQueMede:
      "Mede a quantidade de semente disponibilizada aos produtores apoiados.",
    significado:
      "A disponibilidade de semente é um dos primeiros requisitos para expansão da área cultivada.",
    analise:
      "O programa reportou 260 toneladas de semente para apoiar a campanha.",
    comparacao:
      "Este valor está associado ao programa específico de trigo e não deve ser confundido com a disponibilidade nacional total de sementes.",
    contexto:
      "O programa inclui famílias em diferentes regiões produtoras.",
    importancia:
      "A disponibilidade de semente adequada é essencial para estabelecer novas áreas.",
    implicacoes:
      "É necessário garantir distribuição atempada, qualidade e acompanhamento técnico.",
    metodologia:
      "Dados de execução divulgados pelo MINAGRIF.",
    limitacoes:
      "A quantidade de semente não permite calcular produção final sem informação sobre área, produtividade e perdas.",
    categoria: "Agricultura",
    periodo: "2025/2026",
    fonte: "MINAGRIF",
    url: FONTES.trigo2526,
    imagem: IMAGENS.trigo,
    classificacao: "Oficial",
  },

  {
    id: "trigo-area-2526",
    titulo: "Área preparada para trigo",
    valor: "1 557",
    unidade: "hectares",
    descricao:
      "Área preparada no âmbito do programa de produção de trigo 2025/2026.",
    oQueMede:
      "Mede a superfície preparada para instalação da cultura no programa apoiado.",
    significado:
      "É um indicador de execução física da campanha.",
    analise:
      "A área preparada demonstra a dimensão inicial do programa, mas não equivale necessariamente à área colhida.",
    comparacao:
      "O indicador deve ser acompanhado posteriormente com área semeada, área colhida e produtividade.",
    contexto:
      "A campanha 2025/2026 ainda deve ser tratada como processo em execução.",
    importancia:
      "Permite acompanhar o avanço da implementação do programa.",
    implicacoes:
      "A conclusão da campanha permitirá avaliar a produtividade efectiva.",
    metodologia:
      "Informação de execução comunicada pelo MINAGRIF.",
    limitacoes:
      "Não é produção nacional nem área nacional total de trigo.",
    categoria: "Agricultura",
    periodo: "2025/2026",
    fonte: "MINAGRIF",
    url: FONTES.trigo2526,
    imagem: IMAGENS.trigo,
    classificacao: "Oficial",
  },

  {
    id: "trigo-sili-2526",
    titulo: "Previsão local de trigo em Sili",
    valor: "≈30",
    unidade: "toneladas esperadas",
    descricao:
      "Produção esperada num projecto mecanizado de 24 hectares em Sili, Bié, com 61 famílias.",
    oQueMede:
      "É uma expectativa de produção de uma área específica, não uma estatística nacional.",
    significado:
      "Serve como exemplo de execução local de uma iniciativa de expansão do trigo.",
    analise:
      "A expectativa de aproximadamente 30 toneladas em 24 hectares corresponde a uma produtividade indicativa de cerca de 1,25 t/ha, caso a previsão se concretize.",
    comparacao:
      "O valor não deve ser extrapolado directamente para todo o país.",
    contexto:
      "O projecto envolve mecanização e apoio a famílias produtoras.",
    importancia:
      "Experiências locais podem fornecer informação para futuros programas de expansão.",
    implicacoes:
      "Os resultados reais permitirão avaliar a viabilidade técnica e económica do modelo.",
    metodologia:
      "Cálculo de produtividade indicativa feito a partir da previsão de 30 toneladas e área de 24 hectares.",
    limitacoes:
      "É uma previsão local e não um resultado final.",
    categoria: "Agricultura",
    periodo: "2025/2026",
    fonte: "MINAGRIF — programa de trigo",
    url: FONTES.trigo2526,
    imagem: IMAGENS.trigo,
    classificacao: "Cálculo",
  },
];

/* =========================================================
   DADOS AUXILIARES
========================================================= */

const categorias: Categoria[] = [
  "Todos",
  "Agricultura",
  "Pecuária",
  "Florestas",
  "Apicultura",
  "Café",
  "Huambo",
];

const abas: { id: Aba; label: string }[] = [
  { id: "Visão geral", label: "Visão geral" },
  { id: "Agricultura", label: "Agricultura" },
  { id: "Pecuária", label: "Pecuária" },
  { id: "Café & Apicultura", label: "Café & Apicultura" },
  { id: "Florestas", label: "Florestas" },
  { id: "Huambo", label: "Huambo" },
  { id: "2025/26", label: "Campanha 2025/26" },
  { id: "Projecções", label: "Projecções" },
];

const crescimento202425 = [
  {
    nome: "Cereais",
    valor: "+6,5%",
    descricao: "Evolução positiva da produção cerealífera.",
  },
  {
    nome: "Raízes e tubérculos",
    valor: "+10,6%",
    descricao: "Uma das maiores taxas entre os grandes grupos.",
  },
  {
    nome: "Leguminosas e oleaginosas",
    valor: "+5,9%",
    descricao: "Crescimento moderado da fileira.",
  },
  {
    nome: "Horticultura",
    valor: "+8,2%",
    descricao: "Recuperação importante da produção.",
  },
  {
    nome: "Frutas",
    valor: "+5,5%",
    descricao: "Crescimento positivo.",
  },
  {
    nome: "Carnes",
    valor: "+7,3%",
    descricao: "Recuperação da produção pecuária.",
  },
  {
    nome: "Ovos",
    valor: "+5%",
    descricao: "Recuperação da produção de ovos.",
  },
  {
    nome: "Café comercial",
    valor: "+40%",
    descricao: "Uma das maiores taxas de crescimento reportadas.",
  },
];

const carnes = [
  {
    nome: "Caprina",
    atual: 153136,
    anterior: 170151,
    variacao: "-10,0%",
  },
  {
    nome: "Bovina",
    atual: 110104,
    anterior: 105968,
    variacao: "+3,9%",
  },
  {
    nome: "Aves",
    atual: 57631,
    anterior: 53309,
    variacao: "+8,1%",
  },
  {
    nome: "Suína",
    atual: 11781,
    anterior: 11996,
    variacao: "-1,8%",
  },
  {
    nome: "Ovina",
    atual: 586,
    anterior: 608,
    variacao: "-3,7%",
  },
];

const provinciasCarnes = [
  {
    nome: "Luanda",
    valor: 107936,
    percentual: 32.4,
  },
  {
    nome: "Huíla",
    valor: 28418,
    percentual: 8.5,
  },
  {
    nome: "Cuanza Sul",
    valor: 26258,
    percentual: 7.9,
  },
  {
    nome: "Huambo",
    valor: 23639,
    percentual: 7.1,
  },
  {
    nome: "Malanje",
    valor: 15206,
    percentual: 4.6,
  },
  {
    nome: "Uíge",
    valor: 10215,
    percentual: 3.1,
  },
];

function formatarNumero(valor: number) {
  return new Intl.NumberFormat("pt-PT").format(valor);
}

function sinalVariacao(valor: string) {
  if (valor.startsWith("-")) return "negative";
  if (valor.startsWith("+")) return "positive";
  return "neutral";
}

function BadgeVariacao({ valor }: { valor: string }) {
  const tipo = sinalVariacao(valor);

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${
        tipo === "negative"
          ? "bg-red-50 text-red-700"
          : tipo === "positive"
          ? "bg-emerald-50 text-emerald-700"
          : "bg-slate-100 text-slate-600"
      }`}
    >
      {valor}
    </span>
  );
}

function BadgeClassificacao({
  tipo,
}: {
  tipo: Classificacao;
}) {
  const classes =
    tipo === "Oficial"
      ? "bg-blue-50 text-blue-700 border-blue-100"
      : tipo === "Cálculo"
      ? "bg-amber-50 text-amber-700 border-amber-100"
      : "bg-purple-50 text-purple-700 border-purple-100";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-black ${classes}`}
    >
      {tipo}
    </span>
  );
}

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

export default function DadosPage() {
  const [categoria, setCategoria] =
    useState<Categoria>("Todos");

  const [pesquisa, setPesquisa] = useState("");

  const [periodo, setPeriodo] = useState("Todos");

  const [modal, setModal] =
    useState<Indicador | null>(null);

  const [aba, setAba] =
    useState<Aba>("Visão geral");

  const [cenario, setCenario] =
    useState<"Conservador" | "Base" | "Acelerado">("Base");

  const resultados = useMemo(() => {
    const termo = pesquisa
      .trim()
      .toLocaleLowerCase("pt-PT");

    return indicadores.filter((item) => {
      const pertenceCategoria =
        categoria === "Todos" ||
        item.categoria === categoria;

      const pertencePeriodo =
        periodo === "Todos" ||
        item.periodo.includes(periodo);

      const pertenceAba =
        aba === "Visão geral" ||
        aba === "Projecções" ||
        aba === "2025/26" ||
        (aba === "Café & Apicultura"
          ? item.categoria === "Café" ||
            item.categoria === "Apicultura"
          : item.categoria === aba);

      const correspondePesquisa =
        !termo ||
        [
          item.titulo,
          item.valor,
          item.unidade,
          item.descricao,
          item.oQueMede,
          item.significado,
          item.analise,
          item.comparacao,
          item.contexto,
          item.importancia,
          item.implicacoes,
          item.categoria,
          item.periodo,
          item.fonte,
        ]
          .join(" ")
          .toLocaleLowerCase("pt-PT")
          .includes(termo);

      return (
        pertenceCategoria &&
        pertencePeriodo &&
        pertenceAba &&
        correspondePesquisa
      );
    });
  }, [
    categoria,
    pesquisa,
    periodo,
    aba,
  ]);

  const taxasCenario = {
    Conservador: 0.02,
    Base: 0.05,
    Acelerado: 0.08,
  };

  const taxa =
    taxasCenario[cenario];

  const baseProjecao = 30.4;

  const projecoes = Array.from(
    { length: 5 },
    (_, index) => {
      const ano = 2025 + index;

      const valor =
        baseProjecao *
        Math.pow(1 + taxa, index + 1);

      return {
        ano: `${ano}/${String(ano + 1).slice(-2)}`,
        valor,
      };
    }
  );

  return (
    <main className="min-h-screen bg-[#f4f7f4] text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#062c1d] text-white">

        <div className="absolute inset-0">
          <img
            src={IMAGENS.agricultura}
            alt="Imagem ilustrativa de agricultura"
            className="h-full w-full object-cover opacity-25"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#031b12] via-[#063522]/95 to-[#063522]/65" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">

          <div className="max-w-6xl">

            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
              <span>AGROINOVA ANGOLA</span>
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              <span>Observatório Agropecuário</span>
            </div>

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">

              Angola

              <span className="block text-emerald-300">
                em dados agropecuários
              </span>

            </h1>

            <p className="mt-6 max-w-5xl text-base leading-8 text-emerald-50/85 md:text-lg">

              Centro de informação estatística para acompanhar a agricultura,
              pecuária, café, apicultura, florestas e o desempenho territorial
              do sector agropecuário de Angola.

            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

                <p className="text-xs font-bold uppercase tracking-wide text-emerald-200">
                  Histórico
                </p>

                <p className="mt-2 text-xl font-black">
                  2023/24
                </p>

                <p className="mt-1 text-xs text-emerald-100/60">
                  Série detalhada
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

                <p className="text-xs font-bold uppercase tracking-wide text-emerald-200">
                  Campanha
                </p>

                <p className="mt-2 text-xl font-black">
                  2024/25
                </p>

                <p className="mt-1 text-xs text-emerald-100/60">
                  Resultados mais recentes
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

                <p className="text-xs font-bold uppercase tracking-wide text-emerald-200">
                  Execução
                </p>

                <p className="mt-2 text-xl font-black">
                  2025/26
                </p>

                <p className="mt-1 text-xs text-emerald-100/60">
                  Campanha em desenvolvimento
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

                <p className="text-xs font-bold uppercase tracking-wide text-emerald-200">
                  Cenários
                </p>

                <p className="mt-2 text-xl font-black">
                  2026+
                </p>

                <p className="mt-1 text-xs text-emerald-100/60">
                  Projecções AGROINOVA
                </p>

              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={FONTES.icapp2425}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-5 py-3 font-black text-[#073621] transition hover:bg-emerald-50"
              >
                ICAPP 2024/25
              </a>

              <a
                href={FONTES.anuario}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/25 px-5 py-3 font-black text-white transition hover:bg-white/10"
              >
                Anuário Estatístico
              </a>

              <a
                href={FONTES.minagrifResultados}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/25 px-5 py-3 font-black text-white transition hover:bg-white/10"
              >
                Resultados MINAGRIF
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ESTADO DOS DADOS
      ===================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">

          <div className="grid gap-3 md:grid-cols-4">

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">

              <div className="flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />

                <p className="text-xs font-black uppercase tracking-wide text-blue-800">
                  Oficial
                </p>

              </div>

              <p className="mt-2 text-sm font-bold text-blue-900">
                Estatística publicada
              </p>

              <p className="mt-1 text-xs leading-5 text-blue-700">
                Valores provenientes de INE, MINAGRIF ou Governo.
              </p>

            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">

              <div className="flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />

                <p className="text-xs font-black uppercase tracking-wide text-amber-800">
                  Cálculo
                </p>

              </div>

              <p className="mt-2 text-sm font-bold text-amber-900">
                Derivado dos dados
              </p>

              <p className="mt-1 text-xs leading-5 text-amber-700">
                Calculado matematicamente a partir de fontes oficiais.
              </p>

            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50 p-4">

              <div className="flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-purple-600" />

                <p className="text-xs font-black uppercase tracking-wide text-purple-800">
                  Projecção
                </p>

              </div>

              <p className="mt-2 text-sm font-bold text-purple-900">
                Cenário AGROINOVA
              </p>

              <p className="mt-1 text-xs leading-5 text-purple-700">
                Não representa previsão oficial do Estado.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

              <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                Última actualização
              </p>

              <p className="mt-2 text-sm font-black text-slate-900">
                Maio de 2026
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Inclui ICAPP 2024/25 e resultados sectoriais recentes.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          KPI PRINCIPAIS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              titulo: "Produção agrícola 2024/25",
              valor: ">30,4 M",
              unidade: "toneladas",
              detalhe: "+8,5%",
              positivo: true,
            },
            {
              titulo: "Peso agropecuário no PIB",
              valor: "25,43%",
              unidade: "em 2025",
              detalhe: "13,66% em 2015",
              positivo: true,
            },
            {
              titulo: "Café comercial",
              valor: "+40%",
              unidade: "crescimento 2024/25",
              detalhe: "cadeia prioritária",
              positivo: true,
            },
            {
              titulo: "Sementes certificadas",
              valor: "6 930",
              unidade: "toneladas em 2025",
              detalhe: "+143,2% vs 2023",
              positivo: true,
            },
          ].map((item) => (

            <article
              key={item.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >

              <p className="text-sm font-bold text-slate-500">
                {item.titulo}
              </p>

              <p className="mt-3 text-3xl font-black text-[#0b4b30]">
                {item.valor}
              </p>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">

                <span className="text-xs text-slate-500">
                  {item.unidade}
                </span>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-black ${
                    item.positivo
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {item.detalhe}
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          NAVEGAÇÃO
      ===================================================== */}

      <section className="sticky top-0 z-40 border-y border-slate-200 bg-white/95 backdrop-blur">

        <div className="mx-auto max-w-7xl px-5 py-3 md:px-8">

          <div className="flex gap-2 overflow-x-auto">

            {abas.map(({ id, label }) => (

              <button
                key={id}
                onClick={() => setAba(id)}
                className={`shrink-0 rounded-xl px-4 py-3 text-sm font-black transition ${
                  aba === id
                    ? "bg-[#0d4a30] text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {label}
              </button>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          VISÃO GERAL
      ===================================================== */}

      {aba === "Visão geral" && (

        <>

          <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

            <div className="mb-8">

              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Leitura nacional
              </p>

              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                O que está a acontecer no sector?
              </h2>

              <p className="mt-3 max-w-5xl leading-8 text-slate-600">

                Os dados mais recentes mostram uma trajectória global positiva
                da produção agropecuária, mas com diferenças importantes entre
                cadeias. A produção agrícola 2024/25 ultrapassou 30,4 milhões
                de toneladas, enquanto várias fileiras registaram taxas de
                crescimento distintas. O café apresentou uma evolução
                particularmente forte.

              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-3">

              <article className="rounded-3xl border border-slate-200 bg-white p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                  🌱
                </div>

                <h3 className="mt-5 text-xl font-black">
                  Crescimento agrícola
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">

                  A produção agrícola 2024/25 cresceu 8,5%, ultrapassando
                  30,4 milhões de toneladas. O desafio é transformar esse
                  crescimento físico em maior produtividade, rendimento e
                  capacidade de processamento.

                </p>

              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                  🐄
                </div>

                <h3 className="mt-5 text-xl font-black">
                  Recuperação pecuária
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">

                  A produção de carne cresceu 7,3% em 2024/25 e a produção
                  de ovos cresceu 5%, depois de indicadores negativos
                  observados em 2023/24.

                </p>

              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                  ☕
                </div>

                <h3 className="mt-5 text-xl font-black">
                  Cadeias comerciais
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">

                  O café comercial cresceu 40% em 2024/25, reforçando a
                  importância das culturas comerciais na diversificação
                  económica.

                </p>

              </article>

            </div>

          </section>

          {/* LINHA DO TEMPO */}

          <section className="bg-white">

            <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">

              <div className="mb-9">

                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                  Linha temporal
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  2023/24 → 2024/25 → 2025 → 2025/26
                </h2>

                <p className="mt-3 max-w-4xl leading-7 text-slate-600">
                  A página separa campanhas agrícolas, resultados económicos
                  e programas em execução para evitar misturar períodos
                  estatísticos diferentes.
                </p>

              </div>

              <div className="grid gap-5 md:grid-cols-4">

                {[
                  {
                    ano: "2023/24",
                    titulo: "Base histórica",
                    texto:
                      "Produção detalhada de agricultura, pecuária, café, mel, cera e florestas.",
                  },
                  {
                    ano: "2024/25",
                    titulo: "Nova campanha",
                    texto:
                      "Produção agrícola superior a 30,4 milhões de toneladas e crescimento das principais cadeias.",
                  },
                  {
                    ano: "2025",
                    titulo: "Peso económico",
                    texto:
                      "Sector agropecuário reportado com 25,43% do PIB e aumento da disponibilidade de sementes certificadas.",
                  },
                  {
                    ano: "2025/26",
                    titulo: "Execução",
                    texto:
                      "Programas como trigo encontram-se em execução e ainda devem gerar resultados finais.",
                  },
                ].map((item, index) => (

                  <article
                    key={item.ano}
                    className="relative rounded-3xl border border-slate-200 bg-[#f8faf8] p-6"
                  >

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d4a30] text-sm font-black text-white">
                      {index + 1}
                    </span>

                    <p className="mt-5 text-xs font-black uppercase tracking-widest text-emerald-700">
                      {item.ano}
                    </p>

                    <h3 className="mt-2 text-xl font-black">
                      {item.titulo}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.texto}
                    </p>

                  </article>

                ))}

              </div>

            </div>

          </section>

          {/* CRESCIMENTO 2024/25 */}

          <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

            <div className="mb-8">

              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Campanha 2024/25
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Como evoluíram as principais cadeias?
              </h2>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {crescimento202425.map((item) => (

                <article
                  key={item.nome}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >

                  <div className="flex items-start justify-between gap-3">

                    <p className="font-black">
                      {item.nome}
                    </p>

                    <BadgeVariacao valor={item.valor} />

                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item.descricao}
                  </p>

                </article>

              ))}

            </div>

          </section>

          {/* ANÁLISE */}

          <section className="bg-[#073522] text-white">

            <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">

              <div className="grid gap-8 lg:grid-cols-3">

                <div>

                  <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
                    01
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    Mais produção
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-emerald-50/70">
                    O crescimento de 2024/25 mostra aumento da oferta
                    agrícola nacional.
                  </p>

                </div>

                <div>

                  <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
                    02
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    Mais transformação
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-emerald-50/70">
                    A próxima etapa é transformar maior produção em produtos
                    processados, emprego e valor acrescentado.
                  </p>

                </div>

                <div>

                  <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
                    03
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    Mais informação
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-emerald-50/70">
                    Quanto melhor a informação provincial e municipal, melhor
                    será a capacidade de planear investimentos.
                  </p>

                </div>

              </div>

            </div>

          </section>

        </>

      )}

      {/* =====================================================
          AGRICULTURA
      ===================================================== */}

      {aba === "Agricultura" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="mb-10">

            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
              Dossiê sectorial
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Agricultura
            </h2>

            <p className="mt-4 max-w-5xl leading-8 text-slate-600">

              A agricultura deve ser analisada através de uma cadeia de
              indicadores: área semeada, área colhida, produção, produtividade,
              disponibilidade de insumos, transformação e comercialização.
              Uma única variável não explica o desempenho do sector.

            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">

              <img
                src={IMAGENS.agricultura}
                alt="Imagem ilustrativa de agricultura"
                className="h-52 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-xs font-black uppercase text-emerald-700">
                  2023/24
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  6,18 M ha
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Área semeada.
                </p>

              </div>

            </article>

            <article className="rounded-3xl bg-white p-6 shadow-sm">

              <p className="text-xs font-black uppercase text-emerald-700">
                2023/24
              </p>

              <h3 className="mt-3 text-3xl font-black">
                5,52 M ha
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Área colhida na campanha.
              </p>

              <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-100">

                <div
                  className="h-full rounded-full bg-[#0d4a30]"
                  style={{ width: "89.3%" }}
                />

              </div>

              <p className="mt-2 text-xs text-slate-500">
                Aproveitamento aproximado: 89,3%
              </p>

            </article>

            <article className="rounded-3xl bg-[#0d4a30] p-6 text-white">

              <p className="text-xs font-black uppercase text-emerald-200">
                2024/25
              </p>

              <h3 className="mt-3 text-3xl font-black">
                &gt;30,4 M t
              </h3>

              <p className="mt-3 text-sm leading-7 text-emerald-50/80">
                Produção agrícola total reportada, com crescimento de 8,5%.
              </p>

            </article>

          </div>

          <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm md:p-8">

            <h3 className="text-2xl font-black">
              A principal mudança entre 2023/24 e 2024/25
            </h3>

            <p className="mt-3 max-w-4xl leading-8 text-slate-600">

              Em 2023/24, a análise detalhada mostra uma combinação de
              crescimento da área e comportamentos diferentes entre fileiras.
              Em 2024/25, o resultado agregado mostra uma produção agrícola
              superior a 30,4 milhões de toneladas, com crescimento de 8,5%.
              Isto sugere uma evolução positiva do sector, mas não elimina a
              necessidade de analisar produtividade e eficiência.

            </p>

          </div>

          <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">

            <div className="border-b border-slate-200 p-6 md:p-8">

              <h3 className="text-2xl font-black">
                Crescimento por grupo — 2024/25
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Taxas comunicadas pelo MINAGRIF.
              </p>

            </div>

            <div className="divide-y divide-slate-100">

              {crescimento202425
                .filter((item) =>
                  [
                    "Cereais",
                    "Raízes e tubérculos",
                    "Leguminosas e oleaginosas",
                    "Horticultura",
                    "Frutas",
                  ].includes(item.nome)
                )
                .map((item) => (

                  <div
                    key={item.nome}
                    className="grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-7"
                  >

                    <div>

                      <p className="font-black">
                        {item.nome}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.descricao}
                      </p>

                    </div>

                    <BadgeVariacao valor={item.valor} />

                  </div>

                ))}

            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <article className="rounded-3xl border border-slate-200 bg-white p-6">

              <p className="text-xs font-black uppercase text-emerald-700">
                Prioridade
              </p>

              <h3 className="mt-3 text-xl font-black">
                Produtividade
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Produzir mais sem depender exclusivamente da expansão da área
                deve ser um dos principais objectivos.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6">

              <p className="text-xs font-black uppercase text-emerald-700">
                Prioridade
              </p>

              <h3 className="mt-3 text-xl font-black">
                Armazenamento
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Maior produção precisa de estruturas capazes de reduzir
                perdas pós-colheita.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6">

              <p className="text-xs font-black uppercase text-emerald-700">
                Prioridade
              </p>

              <h3 className="mt-3 text-xl font-black">
                Transformação
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Processar localmente pode aumentar o valor económico da
                produção.
              </p>

            </article>

          </div>

        </section>

      )}

      {/* =====================================================
          PECUÁRIA
      ===================================================== */}

      {aba === "Pecuária" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <img
                src={IMAGENS.bovinos}
                alt="Gado em Angola"
                className="h-[430px] w-full rounded-3xl object-cover"
              />

              <div className="mt-4 rounded-3xl bg-[#0d4a30] p-6 text-white">

                <p className="text-xs font-black uppercase text-emerald-200">
                  2023/24
                </p>

                <p className="mt-3 text-4xl font-black">
                  333 238 t
                </p>

                <p className="mt-2 text-sm text-emerald-100/70">
                  produção total de carnes
                </p>

                <div className="mt-5">
                  <BadgeVariacao valor="-2,5%" />
                </div>

              </div>

            </div>

            <div>

              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Estrutura pecuária
              </p>

              <h2 className="mt-2 text-4xl font-black">
                A queda de 2023/24 não conta toda a história
              </h2>

              <p className="mt-4 max-w-4xl leading-8 text-slate-600">

                A produção agregada de carnes caiu 2,5% em 2023/24, mas
                algumas espécies cresceram. Em 2024/25, o MINAGRIF reportou
                crescimento agregado de 7,3% na produção de carne.

              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {carnes.map((carne) => (

                  <article
                    key={carne.nome}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >

                    <p className="text-sm font-bold text-slate-500">
                      Carne {carne.nome}
                    </p>

                    <p className="mt-2 text-2xl font-black text-[#0d4a30]">
                      {formatarNumero(carne.atual)} t
                    </p>

                    <div className="mt-3">
                      <BadgeVariacao valor={carne.variacao} />
                    </div>

                    <p className="mt-4 text-xs leading-5 text-slate-500">
                      Campanha anterior:{" "}
                      {formatarNumero(carne.anterior)} toneladas.
                    </p>

                  </article>

                ))}

              </div>

              <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">

                <h3 className="text-xl font-black text-[#0d4a30]">
                  Leitura principal
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-700">

                  A carne caprina continua a representar a maior parcela
                  entre as espécies apresentadas, mas foi precisamente esta
                  cadeia que sofreu uma das maiores quedas. A carne bovina e
                  a carne de aves cresceram. Em 2024/25, o resultado agregado
                  passou a ser positivo.

                </p>

              </div>

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          CAFÉ + APICULTURA
      ===================================================== */}

      {aba === "Café & Apicultura" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="mb-10">

            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
              Cadeias de alto potencial
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Café e apicultura
            </h2>

            <p className="mt-4 max-w-5xl leading-8 text-slate-600">

              Estas cadeias possuem características diferentes, mas partilham
              uma oportunidade: transformar produção primária em maior valor
              através de qualidade, processamento, certificação, embalagem,
              comercialização e exportação.

            </p>

          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">

              <img
                src={IMAGENS.cafe}
                alt="Imagem ilustrativa de café"
                className="h-64 w-full object-cover"
              />

              <div className="p-7">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
                      Café
                    </p>

                    <h3 className="mt-2 text-4xl font-black">
                      7 584 t
                    </h3>

                  </div>

                  <BadgeVariacao valor="+21,7%" />

                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">

                  Em 2023/24, a produção comercial de café cresceu 21,7%.
                  Para 2024/25, o MINAGRIF reportou crescimento de 40%.

                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-emerald-50 p-4">

                    <p className="text-xs text-slate-500">
                      2023/24
                    </p>

                    <p className="mt-1 text-xl font-black text-[#0d4a30]">
                      +21,7%
                    </p>

                  </div>

                  <div className="rounded-2xl bg-emerald-50 p-4">

                    <p className="text-xs text-slate-500">
                      2024/25
                    </p>

                    <p className="mt-1 text-xl font-black text-[#0d4a30]">
                      +40%
                    </p>

                  </div>

                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">

                  <p className="text-sm leading-7 text-slate-600">

                    A prioridade deve ser consolidar produtividade, qualidade,
                    processamento e ligação aos mercados.

                  </p>

                </div>

              </div>

            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">

              <img
                src={IMAGENS.mel}
                alt="Produção de mel"
                className="h-64 w-full object-cover"
              />

              <div className="p-7">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-xs font-black uppercase tracking-widest text-amber-700">
                      Apicultura
                    </p>

                    <h3 className="mt-2 text-4xl font-black">
                      6 084 t
                    </h3>

                  </div>

                  <BadgeVariacao valor="+16%" />

                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">

                  Em 2023/24, a produção nacional de mel registou crescimento
                  de aproximadamente 16%. O Governo também apresentou dados
                  recentes para o período 2023–2025, que devem ser tratados
                  separadamente por terem período e enquadramento diferentes.

                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-amber-50 p-4">

                    <p className="text-xs text-slate-500">
                      Mel 2023/24
                    </p>

                    <p className="mt-1 text-xl font-black text-amber-800">
                      6 084 t
                    </p>

                  </div>

                  <div className="rounded-2xl bg-amber-50 p-4">

                    <p className="text-xs text-slate-500">
                      Cera 2023/24
                    </p>

                    <p className="mt-1 text-xl font-black text-amber-800">
                      379 t
                    </p>

                  </div>

                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">

                  <p className="text-sm leading-7 text-slate-600">

                    A cadeia apícola deve ser acompanhada não apenas pelo
                    volume de mel, mas também por produtividade por colmeia,
                    qualidade, cera, comercialização e serviços de polinização.

                  </p>

                </div>

              </div>

            </article>

          </div>

          <div className="mt-8 rounded-3xl bg-[#073522] p-7 text-white md:p-10">

            <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
              Estratégia de valor
            </p>

            <h3 className="mt-3 text-3xl font-black">
              Produzir é apenas a primeira etapa
            </h3>

            <div className="mt-7 grid gap-4 md:grid-cols-4">

              {[
                "Produção",
                "Qualidade",
                "Transformação",
                "Mercado",
              ].map((item, index) => (

                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >

                  <span className="text-sm font-black text-emerald-300">
                    0{index + 1}
                  </span>

                  <p className="mt-3 font-black">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          FLORESTAS
      ===================================================== */}

      {aba === "Florestas" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Recursos florestais
              </p>

              <h2 className="mt-2 text-4xl font-black">
                Florestas, madeira e transformação
              </h2>

              <p className="mt-4 max-w-5xl leading-8 text-slate-600">

                A análise florestal precisa de combinar produção de matéria
                prima, transformação industrial, exportação e sustentabilidade.
                O aumento da produção não deve ser analisado isoladamente.

              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">

                <article className="rounded-3xl bg-white p-6 shadow-sm">

                  <p className="text-xs font-black uppercase text-emerald-700">
                    2023/24
                  </p>

                  <p className="mt-3 text-3xl font-black">
                    238,69 mil
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    m³ de madeira em toro
                  </p>

                </article>

                <article className="rounded-3xl bg-white p-6 shadow-sm">

                  <p className="text-xs font-black uppercase text-emerald-700">
                    2023/24
                  </p>

                  <p className="mt-3 text-3xl font-black">
                    179,67 mil
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    m³ de madeira serrada
                  </p>

                </article>

                <article className="rounded-3xl bg-white p-6 shadow-sm">

                  <p className="text-xs font-black uppercase text-emerald-700">
                    2023/24
                  </p>

                  <p className="mt-3 text-3xl font-black">
                    78,1 mil
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    m³ exportados
                  </p>

                </article>

              </div>

              <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm">

                <h3 className="text-2xl font-black">
                  Evolução recente
                </h3>

                <p className="mt-3 leading-8 text-slate-600">

                  Para o período 2023–2025, o Governo reportou 483 267 m³ de
                  madeira em toro, com crescimento de 44,9%, e 326 270 m³ de
                  madeira serrada. Estes valores devem ser lidos como
                  indicadores do período reportado e não como produção anual
                  exclusiva de 2025.

                </p>

              </div>

            </div>

            <div className="overflow-hidden rounded-3xl bg-[#0d4a30] text-white">

              <img
                src={IMAGENS.floresta}
                alt="Floresta"
                className="h-80 w-full object-cover"
              />

              <div className="p-7">

                <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
                  Cadeia florestal
                </p>

                <p className="mt-4 text-2xl font-black">
                  Matéria-prima → transformação → produto
                </p>

                <p className="mt-4 text-sm leading-7 text-emerald-50/75">

                  O objectivo económico não deve ser apenas aumentar a
                  extracção, mas também ampliar transformação local, emprego,
                  rastreabilidade e sustentabilidade.

                </p>

                <div className="mt-7 border-t border-white/10 pt-6">

                  <p className="text-sm font-bold text-emerald-200">
                    Huambo
                  </p>

                  <p className="mt-2 text-sm leading-6 text-emerald-50/65">
                    O Cachiungo foi identificado pelo MINAGRIF entre os locais
                    de projectos de transformação industrial de madeira.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          HUAMBO
      ===================================================== */}

      {aba === "Huambo" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="overflow-hidden rounded-3xl bg-[#073522] text-white">

            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

              <div className="min-h-[470px]">

                <img
                  src={IMAGENS.huambo}
                  alt="Imagem ilustrativa de actividade agrícola"
                  className="h-full min-h-[470px] w-full object-cover"
                />

              </div>

              <div className="p-7 md:p-10">

                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
                  Foco provincial
                </p>

                <h2 className="mt-3 text-5xl font-black">
                  Huambo
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-emerald-50/75">

                  O Huambo possui uma posição relevante na produção pecuária
                  nacional. Os dados disponíveis permitem observar a
                  contribuição da província na produção de carnes e carne
                  bovina.

                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5">

                    <p className="text-xs uppercase text-emerald-200">
                      Carnes
                    </p>

                    <p className="mt-2 text-3xl font-black">
                      23 639 t
                    </p>

                    <p className="mt-2 text-xs text-emerald-100/60">
                      7,1% do total nacional
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5">

                    <p className="text-xs uppercase text-emerald-200">
                      Carne bovina
                    </p>

                    <p className="mt-2 text-3xl font-black">
                      7 514 t
                    </p>

                    <p className="mt-2 text-xs text-emerald-100/60">
                      6,8% do total nacional
                    </p>

                  </div>

                </div>

                <div className="mt-9">

                  <h3 className="text-xl font-black">
                    Produção de carnes por província
                  </h3>

                  <div className="mt-5 space-y-4">

                    {provinciasCarnes.map(
                      (provincia, index) => (

                        <div key={provincia.nome}>

                          <div className="mb-2 flex items-center justify-between">

                            <div className="flex items-center gap-3">

                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400 text-xs font-black text-[#073522]">
                                {index + 1}
                              </span>

                              <span className="font-bold">
                                {provincia.nome}
                              </span>

                            </div>

                            <span className="font-black text-emerald-300">
                              {formatarNumero(
                                provincia.valor
                              )}{" "}
                              t
                            </span>

                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-white/10">

                            <div
                              className="h-full rounded-full bg-emerald-400"
                              style={{
                                width: `${Math.min(
                                  provincia.percentual * 2.7,
                                  100
                                )}%`,
                              }}
                            />

                          </div>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <article className="rounded-3xl bg-white p-6 shadow-sm">

              <p className="text-xs font-black uppercase text-emerald-700">
                Posição
              </p>

              <p className="mt-3 text-3xl font-black">
                4.º
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Entre as províncias individualizadas no quadro nacional
                apresentado.
              </p>

            </article>

            <article className="rounded-3xl bg-white p-6 shadow-sm">

              <p className="text-xs font-black uppercase text-emerald-700">
                Participação
              </p>

              <p className="mt-3 text-3xl font-black">
                7,1%
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Participação do Huambo no total nacional de carnes.
              </p>

            </article>

            <article className="rounded-3xl bg-white p-6 shadow-sm">

              <p className="text-xs font-black uppercase text-emerald-700">
                Oportunidade
              </p>

              <p className="mt-3 text-3xl font-black">
                Cadeia integrada
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Agricultura + alimentação animal + pecuária + transformação.
              </p>

            </article>

          </div>

          <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50 p-7 md:p-9">

            <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
              Leitura territorial
            </p>

            <h3 className="mt-3 text-2xl font-black text-[#0d4a30]">
              O próximo passo deve ser descer ao nível municipal
            </h3>

            <p className="mt-3 max-w-4xl leading-8 text-slate-700">

              Para o AGROINOVA Angola, uma evolução natural deste observatório
              é apresentar os dados do Huambo por município, cultura,
              produção animal, área, produtividade, preços, mercados,
              cooperativas e infra-estruturas. Isso permitirá transformar a
              estatística provincial em ferramenta de decisão local.

            </p>

          </div>

        </section>

      )}

      {/* =====================================================
          CAMPANHA 2025/26
      ===================================================== */}

      {aba === "2025/26" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="mb-10">

            <div className="inline-flex rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-black text-purple-700">
              CAMPANHA EM EXECUÇÃO
            </div>

            <h2 className="mt-4 text-4xl font-black">
              2025/2026
            </h2>

            <p className="mt-4 max-w-5xl leading-8 text-slate-600">

              Os indicadores desta secção não devem ser tratados como
              resultados finais da campanha. São dados de execução de
              programas e iniciativas que ainda precisam de ser acompanhados
              até à conclusão.

            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">

              <img
                src={IMAGENS.trigo}
                alt="Imagem ilustrativa de trigo"
                className="h-52 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-xs font-black uppercase text-purple-700">
                  Famílias apoiadas
                </p>

                <p className="mt-2 text-4xl font-black">
                  6 228
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Famílias apoiadas na produção de trigo.
                </p>

              </div>

            </article>

            <article className="rounded-3xl bg-white p-6 shadow-sm">

              <p className="text-xs font-black uppercase text-purple-700">
                Semente
              </p>

              <p className="mt-3 text-4xl font-black">
                260 t
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Semente de trigo disponibilizada no programa.
              </p>

            </article>

            <article className="rounded-3xl bg-[#0d4a30] p-6 text-white">

              <p className="text-xs font-black uppercase text-emerald-200">
                Área preparada
              </p>

              <p className="mt-3 text-4xl font-black">
                1 557 ha
              </p>

              <p className="mt-3 text-sm leading-7 text-emerald-50/75">
                Área preparada no âmbito do programa de trigo.
              </p>

            </article>

          </div>

          <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm md:p-9">

            <h3 className="text-2xl font-black">
              Exemplo de execução local
            </h3>

            <p className="mt-3 max-w-4xl leading-8 text-slate-600">

              Em Sili, no Bié, foi reportada uma área mecanizada de 24
              hectares, envolvendo 61 famílias e uma expectativa de cerca de
              30 toneladas de trigo. Este valor é uma previsão local e não
              deve ser extrapolado para Angola inteira.

            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-xs text-slate-500">
                  Área
                </p>

                <p className="mt-2 text-2xl font-black">
                  24 ha
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-xs text-slate-500">
                  Famílias
                </p>

                <p className="mt-2 text-2xl font-black">
                  61
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-xs text-slate-500">
                  Expectativa
                </p>

                <p className="mt-2 text-2xl font-black">
                  ≈30 t
                </p>

              </div>

            </div>

          </div>

          <div className="mt-8 rounded-3xl border border-purple-100 bg-purple-50 p-7 md:p-9">

            <h3 className="text-2xl font-black text-purple-900">
              O que deve ser actualizado quando a campanha terminar?
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              {[
                "Área efectivamente semeada",
                "Área efectivamente colhida",
                "Produção real em toneladas",
                "Produtividade por hectare",
                "Custos de produção",
                "Preço médio recebido pelo produtor",
                "Número de produtores efectivamente activos",
                "Volume transformado localmente",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl border border-purple-100 bg-white p-4"
                >

                  <p className="font-bold text-slate-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          PROJECÇÕES
      ===================================================== */}

      {aba === "Projecções" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="mb-10">

            <div className="inline-flex rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-black text-purple-700">
              MODELO AGROINOVA
            </div>

            <h2 className="mt-4 text-4xl font-black">
              Projecção da produção agrícola
            </h2>

            <p className="mt-4 max-w-5xl leading-8 text-slate-600">

              Esta projecção é um exercício matemático de cenário. Não é uma
              previsão oficial do Governo de Angola, do INE ou do MINAGRIF.
              Utiliza como base aproximadamente 30,4 milhões de toneladas,
              reportadas para 2024/25, e aplica uma taxa constante seleccionada
              pelo utilizador.

            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {[
              {
                nome: "Conservador",
                taxa: "2% ao ano",
                descricao:
                  "Cenário de crescimento baixo, com limitações de produtividade e investimento.",
              },
              {
                nome: "Base",
                taxa: "5% ao ano",
                descricao:
                  "Cenário intermédio para análise estratégica.",
              },
              {
                nome: "Acelerado",
                taxa: "8% ao ano",
                descricao:
                  "Cenário de expansão mais forte, associado a maior produtividade e investimento.",
              },
            ].map((item) => (

              <button
                key={item.nome}
                onClick={() =>
                  setCenario(
                    item.nome as
                      | "Conservador"
                      | "Base"
                      | "Acelerado"
                  )
                }
                className={`rounded-3xl border p-6 text-left transition ${
                  cenario === item.nome
                    ? "border-[#0d4a30] bg-emerald-50 ring-2 ring-emerald-100"
                    : "border-slate-200 bg-white hover:border-emerald-300"
                }`}
              >

                <div className="flex items-center justify-between gap-3">

                  <h3 className="text-xl font-black">
                    {item.nome}
                  </h3>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black">
                    {item.taxa}
                  </span>

                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.descricao}
                </p>

              </button>

            ))}

          </div>

          <div className="mt-8 overflow-hidden rounded-3xl bg-[#061f15] text-white">

            <div className="p-7 md:p-9">

              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                <div>

                  <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
                    Cenário seleccionado
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    {cenario}
                  </h3>

                  <p className="mt-2 text-sm text-emerald-50/65">
                    Crescimento matemático de{" "}
                    {(taxa * 100).toFixed(0)}% ao ano.
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 px-5 py-4">

                  <p className="text-xs uppercase text-emerald-200">
                    Base
                  </p>

                  <p className="mt-1 text-2xl font-black">
                    30,4 M t
                  </p>

                  <p className="text-xs text-emerald-100/50">
                    2024/25
                  </p>

                </div>

              </div>

              <div className="mt-9 grid gap-4 md:grid-cols-5">

                {projecoes.map((item, index) => (

                  <div
                    key={item.ano}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >

                    <p className="text-xs font-black text-emerald-300">
                      {item.ano}
                    </p>

                    <p className="mt-3 text-2xl font-black">
                      {item.valor.toLocaleString(
                        "pt-PT",
                        {
                          maximumFractionDigits: 2,
                        }
                      )}{" "}
                      M
                    </p>

                    <p className="mt-1 text-xs text-emerald-50/45">
                      toneladas
                    </p>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

                      <div
                        className="h-full rounded-full bg-emerald-400"
                        style={{
                          width: `${Math.min(
                            (item.valor / 50) * 100,
                            100
                          )}%`,
                        }}
                      />

                    </div>

                    <p className="mt-2 text-[11px] text-emerald-50/45">
                      Ano {index + 1} do cenário
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <article className="rounded-3xl border border-purple-100 bg-purple-50 p-6">

              <p className="text-xs font-black uppercase text-purple-700">
                Atenção
              </p>

              <h3 className="mt-3 text-xl font-black text-purple-900">
                Não é previsão oficial
              </h3>

              <p className="mt-3 text-sm leading-7 text-purple-800/75">
                O resultado real dependerá de clima, produtividade,
                investimento, preços, políticas públicas, infra-estruturas e
                condições de mercado.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6">

              <p className="text-xs font-black uppercase text-slate-500">
                Hipótese
              </p>

              <h3 className="mt-3 text-xl font-black">
                Crescimento constante
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                O modelo assume a mesma taxa todos os anos apenas para criar
                um cenário comparável.
              </p>

            </article>

            <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">

              <p className="text-xs font-black uppercase text-emerald-700">
                Actualização
              </p>

              <h3 className="mt-3 text-xl font-black text-[#0d4a30]">
                Substituir por dados reais
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Quando forem publicados novos resultados oficiais, a
                projecção deve ser comparada com o valor observado.
              </p>

            </article>

          </div>

        </section>

      )}

      {/* =====================================================
          BASE DE DADOS
      ===================================================== */}

      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Base estatística
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Explorar indicadores
              </h2>

              <p className="mt-2 text-slate-600">
                Cada indicador possui explicação, análise, comparação,
                contexto, metodologia e fonte.
              </p>

            </div>

            <input
              value={pesquisa}
              onChange={(event) =>
                setPesquisa(event.target.value)
              }
              placeholder="Pesquisar indicador, cultura, ano..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-700 lg:w-96"
            />

          </div>

          <div className="mb-5 flex flex-wrap gap-2">

            {[
              "Todos",
              "2023/2024",
              "2024/2025",
              "2025",
              "2025/2026",
              "2023–2025",
            ].map((item) => (

              <button
                key={item}
                onClick={() => setPeriodo(item)}
                className={`rounded-xl px-4 py-2 text-sm font-black transition ${
                  periodo === item
                    ? "bg-[#0d4a30] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          <div className="mb-5 flex gap-2 overflow-x-auto pb-1">

            {categorias.map((item) => (

              <button
                key={item}
                onClick={() => setCategoria(item)}
                className={`shrink-0 rounded-xl px-4 py-2 text-sm font-black transition ${
                  categoria === item
                    ? "bg-[#0d4a30] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-sm text-slate-600">
                Resultados encontrados
              </p>

              <p className="text-lg font-black text-[#0d4a30]">
                {resultados.length}
              </p>

            </div>

          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">

            <div className="hidden grid-cols-[1.3fr_0.7fr_0.65fr_0.65fr_0.5fr_auto] gap-4 bg-slate-50 px-5 py-4 text-xs font-black uppercase tracking-wide text-slate-500 md:grid">

              <span>Indicador</span>
              <span>Valor</span>
              <span>Categoria</span>
              <span>Período</span>
              <span>Tipo</span>
              <span />

            </div>

            <div className="divide-y divide-slate-100">

              {resultados.map((item) => (

                <button
                  key={item.id}
                  onClick={() => setModal(item)}
                  className="grid w-full gap-4 px-5 py-5 text-left transition hover:bg-emerald-50 md:grid-cols-[1.3fr_0.7fr_0.65fr_0.65fr_0.5fr_auto] md:items-center"
                >

                  <div>

                    <p className="font-black">
                      {item.titulo}
                    </p>

                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                      {item.descricao}
                    </p>

                  </div>

                  <div>

                    <p className="font-black text-[#0d4a30]">
                      {item.valor}
                    </p>

                    <p className="text-xs text-slate-500">
                      {item.unidade}
                    </p>

                  </div>

                  <span className="text-sm font-bold text-slate-600">
                    {item.categoria}
                  </span>

                  <span className="text-sm text-slate-600">
                    {item.periodo}
                  </span>

                  <div>
                    <BadgeClassificacao
                      tipo={item.classificacao}
                    />
                  </div>

                  <span className="font-black text-emerald-700">
                    →
                  </span>

                </button>

              ))}

              {resultados.length === 0 && (

                <div className="p-12 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
                    🔎
                  </div>

                  <p className="mt-4 font-black">
                    Nenhum indicador encontrado.
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Experimente outra pesquisa, período ou categoria.
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FONTES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

        <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Transparência estatística
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Fontes e metodologia
              </h2>

              <p className="mt-4 max-w-4xl leading-8 text-slate-600">

                O AGROINOVA distingue dados oficiais, cálculos derivados e
                projecções. Os dados históricos detalhados são baseados
                principalmente em publicações do INE/MINAGRIF. Os resultados
                mais recentes de 2024/25 e indicadores de 2025/26 são
                apresentados com o respectivo período para evitar misturar
                campanhas diferentes.

              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <a
                href={FONTES.icapp2425}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#0d4a30] px-5 py-3 font-black text-white"
              >
                ICAPP 2024/25
              </a>

              <a
                href={FONTES.anuario}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-300 px-5 py-3 font-black text-slate-700"
              >
                Anuário 2024
              </a>

              <a
                href={FONTES.minagrifResultados}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-300 px-5 py-3 font-black text-slate-700"
              >
                MINAGRIF
              </a>

              <a
                href={FONTES.ine}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-300 px-5 py-3 font-black text-slate-700"
              >
                Portal INE
              </a>

            </div>

          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl bg-blue-50 p-5">

              <p className="font-black text-blue-900">
                Dados oficiais
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-800/70">
                Valores publicados por instituições oficiais.
              </p>

            </div>

            <div className="rounded-2xl bg-amber-50 p-5">

              <p className="font-black text-amber-900">
                Cálculos
              </p>

              <p className="mt-2 text-sm leading-6 text-amber-800/70">
                Operações matemáticas realizadas a partir de dados oficiais.
              </p>

            </div>

            <div className="rounded-2xl bg-purple-50 p-5">

              <p className="font-black text-purple-900">
                Projecções
              </p>

              <p className="mt-2 text-sm leading-6 text-purple-800/70">
                Cenários analíticos do AGROINOVA, não previsões governamentais.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MODAL COMPLETO
      ===================================================== */}

      {modal && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
          onClick={() => setModal(null)}
        >

          <div
            className="max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* IMAGEM */}

            <div className="relative h-64 md:h-80">

              <img
                src={modal.imagem}
                alt={modal.titulo}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <button
                onClick={() => setModal(null)}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-2xl font-black text-white backdrop-blur transition hover:bg-black/70"
              >
                ×
              </button>

              <div className="absolute bottom-6 left-6 right-6">

                <div className="flex flex-wrap gap-2">

                  <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-[#062c1d]">
                    {modal.categoria}
                  </span>

                  <BadgeClassificacao
                    tipo={modal.classificacao}
                  />

                </div>

                <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                  {modal.titulo}
                </h2>

              </div>

            </div>

            <div className="p-6 md:p-9">

              {/* RESUMO */}

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-emerald-50 p-5">

                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Valor
                  </p>

                  <p className="mt-2 text-3xl font-black text-[#0b4b30]">
                    {modal.valor}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {modal.unidade}
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Período
                  </p>

                  <p className="mt-3 text-xl font-black">
                    {modal.periodo}
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Variação
                  </p>

                  <div className="mt-3">

                    {modal.variacao ? (
                      <BadgeVariacao
                        valor={modal.variacao}
                      />
                    ) : (
                      <span className="text-sm font-bold text-slate-500">
                        Não disponível
                      </span>
                    )}

                  </div>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Categoria
                  </p>

                  <p className="mt-3 text-lg font-black">
                    {modal.categoria}
                  </p>

                </div>

              </div>

              {/* O QUE MEDE */}

              <div className="mt-9">

                <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
                  O que mede?
                </p>

                <p className="mt-3 text-base leading-8 text-slate-700">
                  {modal.oQueMede}
                </p>

              </div>

              {/* SIGNIFICADO */}

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">

                <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                  O que significa?
                </p>

                <p className="mt-3 text-base leading-8 text-slate-700">
                  {modal.significado}
                </p>

              </div>

              {/* ANALISE */}

              <div className="mt-8">

                <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
                  Análise
                </p>

                <p className="mt-3 text-base leading-8 text-slate-700">
                  {modal.analise}
                </p>

              </div>

              {/* COMPARACAO */}

              <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">

                <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
                  Comparação e contexto
                </p>

                <p className="mt-3 text-base leading-8 text-slate-700">
                  {modal.comparacao}
                </p>

              </div>

              {/* CONTEXTO */}

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div>

                  <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                    Contexto territorial e económico
                  </p>

                  <p className="mt-3 text-base leading-8 text-slate-700">
                    {modal.contexto}
                  </p>

                </div>

                <div>

                  <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                    Porque é importante?
                  </p>

                  <p className="mt-3 text-base leading-8 text-slate-700">
                    {modal.importancia}
                  </p>

                </div>

              </div>

              {/* IMPLICAÇÕES */}

              <div className="mt-8 rounded-3xl bg-[#073522] p-6 text-white">

                <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
                  Implicações para o sector
                </p>

                <p className="mt-3 text-base leading-8 text-emerald-50/80">
                  {modal.implicacoes}
                </p>

              </div>

              {/* METODOLOGIA */}

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-slate-200 p-5">

                  <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                    Metodologia
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {modal.metodologia}
                  </p>

                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">

                  <p className="text-xs font-black uppercase tracking-widest text-amber-700">
                    Limitações
                  </p>

                  <p className="mt-3 text-sm leading-7 text-amber-900/75">
                    {modal.limitacoes}
                  </p>

                </div>

              </div>

              {/* FONTE */}

              <div className="mt-8 border-t border-slate-200 pt-7">

                <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Fonte
                </p>

                <p className="mt-2 font-bold text-slate-700">
                  {modal.fonte}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">

                  <a
                    href={modal.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-xl bg-[#0d4a30] px-5 py-3 font-black text-white transition hover:bg-[#0a3b26]"
                  >
                    Consultar publicação original →
                  </a>

                  <button
                    onClick={() => setModal(null)}
                    className="inline-flex rounded-xl border border-slate-300 px-5 py-3 font-black text-slate-700"
                  >
                    Fechar
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}