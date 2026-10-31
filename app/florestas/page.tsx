
"use client";

import { useMemo, useState } from "react";

type ImagemAula = {
  src: string;
  alt: string;
  legenda: string;
};

type Capitulo = {
  id: string;
  numero: string;
  titulo: string;
  resumo: string;
  conteudo: string[];
  pontos: string[];
  imagens: ImagemAula[];
};

const imagens = {
  floresta:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85",
  mudas:
    "https://images.openai.com/static-rsc-4/qHcUqkcFy-WdVC-9XbjZtb1QHPrYOyi2mBhqSmmsrwueFmqffCPDU3w3QOjhRRf2FrmdRXr6uYunkWDKIpOnY5X7yUojU8cjh1zAvxE5RMhLLDwdWDx_8sMuYqkyz58g9LqBOe1RKkd9LW1MnkIWyLpbcjm9iFi38d-f1nlAXZ-Ez7JSps64sL_19VDk-YHa?purpose=fullsize",
  viveiro:
    "https://images.openai.com/static-rsc-4/COH1J16EiLI_qpdC4UalA_SKhscOa2Bvit69_IRM7qM1UcN-2aHyy8rZR44D_P4R77mNNs7KwfHTTPDD59v7qJnJe8ulcsxH4PL0AkY4PUISrG_gVxHMFviJUb3lKIk6XxqlXd50xQu8xjeKVHcSfMdU2_RtKdEkNk4rCvLNJliQkehfuQX1nCcH2pqMCvhW?purpose=fullsize",
  plantacao:
    "https://images.openai.com/static-rsc-4/Bj5WToJobANml7YoGnLgnuo4uorkSId07Sl9608WXctxbuDTpeY2NTedmbiGZtOYhJE5sxfhducu-MNWcyG4lCYgl8vRWPHbnLy-H-g2DLaRrA7aXJytQB1yf1-pzFNqsbkaLBEQ7aT8PnbEiRC_QtLcR_SIVCXsYYWUAuz3tA4?purpose=inline",
  arvores:
    "https://images.openai.com/static-rsc-4/U1ctYLI6fF6B9I8Y3a0NSOOTLRrv6bCZGAsYx0H7-LDgvIlCuKg5T8j28QG2cgTvJLmVC3C06SfVfSS6JKcAvw3iW-jaU8P-lPhQWJ3pleIHs8vd-qb1dX2ID3A3HtcD-Wtsci6YIclUfU72IuahxWJU-1vDHQEXXkbMkv-XWLdw4-jAlZ35iLksl1PAoh95?purpose=fullsize",
  campo:
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=85",
  equipamento:
    "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1400&q=85",
  madeira:
    "https://images.unsplash.com/photo-1513467655676-561b7d489a88?auto=format&fit=crop&w=1400&q=85",
  solo:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
};

const capitulos: Capitulo[] = [
  {
    id: "ecossistemas",
    numero: "01",
    titulo: "Ecossistemas e tipos de florestas",
    resumo:
      "Conheça a estrutura, a distribuição, a composição e a importância dos ecossistemas florestais de Angola.",
    conteudo: [
      "Uma floresta é um ecossistema complexo. Não é constituída apenas por árvores: inclui arbustos, plantas herbáceas, animais, fungos, microrganismos, solo, água e atmosfera. Todos estes elementos interagem e contribuem para o equilíbrio ecológico.",
      "A distribuição das florestas depende de factores como precipitação, temperatura, altitude, relevo, tipo de solo, disponibilidade de água e ocorrência de fogo. A ação humana também influencia a estrutura e a capacidade de regeneração dos ecossistemas.",
      "Em Angola, o Maiombe constitui uma das formações de floresta tropical húmida mais conhecidas. Apresenta elevada diversidade biológica e presta serviços importantes, como proteção do solo, regulação hídrica e armazenamento de carbono.",
      "O Miombo ocupa extensas áreas do território angolano. É uma formação de savana arborizada associada, entre outros géneros, a Brachystegia, Julbernardia e Isoberlinia. Tem importância ecológica, económica, alimentar e cultural para muitas comunidades.",
      "Também existem florestas de galeria, vegetação ripícola, formações costeiras, mangais e povoamentos plantados. Cada formação possui características próprias e exige uma abordagem de gestão adequada.",
      "A gestão de uma floresta natural não deve ser confundida com a gestão de uma plantação comercial. Nas áreas naturais, a conservação da biodiversidade, a regeneração, os habitats e os serviços dos ecossistemas devem orientar as decisões.",
    ],
    pontos: [
      "Floresta tropical húmida.",
      "Miombo e savanas arborizadas.",
      "Florestas de galeria e vegetação ripícola.",
      "Mangais e ecossistemas costeiros.",
      "Florestas plantadas e povoamentos comerciais.",
      "Biodiversidade, serviços ecológicos e conservação.",
    ],
    imagens: [
      {
        src: "/imagens/agroacademia/floresta%20do%20maiombe.png",
        alt: "Floresta do Maiombe",
        legenda:
          "Maiombe: exemplo de floresta tropical húmida, com elevada diversidade de espécies.",
      },
      {
        src: "/imagens/agroacademia/floresta-miombo.jpg",
        alt: "Floresta de Miombo",
        legenda:
          "Miombo: formação florestal característica de grandes áreas de Angola.",
      },
      {
        src: imagens.floresta,
        alt: "Interior de uma floresta",
        legenda:
          "A estrutura florestal inclui árvores de diferentes dimensões, vegetação inferior e organismos associados.",
      },
    ],
  },
  {
    id: "sementes",
    numero: "02",
    titulo: "Sementes e material de propagação",
    resumo:
      "Aprenda a selecionar árvores-mãe, recolher sementes, avaliar a qualidade e preparar material de propagação.",
    conteudo: [
      "A produção de uma árvore começa muito antes da plantação. A origem e a qualidade do material de propagação influenciam a germinação, o vigor, a uniformidade, a adaptação e o desenvolvimento das futuras plantas.",
      "A seleção das árvores-mãe deve considerar a identificação correta da espécie, o estado sanitário, o desenvolvimento, a forma da copa, a qualidade do tronco e a adaptação às condições ambientais locais.",
      "Sempre que possível, a recolha deve abranger várias árvores-mãe adequadas, evitando depender de um único indivíduo. Isto ajuda a representar melhor a variabilidade genética disponível.",
      "A maturidade das sementes varia entre espécies. A recolha prematura pode resultar em sementes imaturas; a recolha tardia pode aumentar perdas por dispersão, deterioração ou ataque de insetos.",
      "Após a recolha, pode ser necessário limpar, separar, beneficiar, secar ou aplicar tratamentos específicos. Algumas espécies apresentam dormência e necessitam de tratamentos próprios, que devem ser definidos com base na informação técnica da espécie.",
      "A conservação também varia. Algumas sementes toleram secagem e armazenamento em condições controladas; outras perdem rapidamente a viabilidade e exigem sementeira pouco tempo depois da recolha.",
      "Cada lote deve possuir registo de espécie, origem, data, quantidade, método de beneficiamento, condições de conservação e resultados dos testes de germinação.",
    ],
    pontos: [
      "Identificação botânica.",
      "Seleção de árvores-mãe.",
      "Recolha na maturidade adequada.",
      "Limpeza e beneficiamento.",
      "Quebra de dormência quando necessária.",
      "Teste de germinação e viabilidade.",
      "Registo e armazenamento.",
    ],
    imagens: [
      {
        src: imagens.mudas,
        alt: "Plântulas em desenvolvimento",
        legenda:
          "O desenvolvimento das futuras árvores começa com a seleção de sementes e material vegetal de qualidade.",
      },
      {
        src: imagens.campo,
        alt: "Árvores em ambiente natural",
        legenda:
          "A seleção de árvores-mãe deve considerar a espécie, a adaptação e o estado sanitário.",
      },
    ],
  },
  {
    id: "viveiros",
    numero: "03",
    titulo: "Viveiros florestais e produção de mudas",
    resumo:
      "Estude a organização do viveiro, a preparação do substrato, a sementeira, a repicagem e a rustificação.",
    conteudo: [
      "Um viveiro florestal é uma estrutura destinada à produção, manutenção e desenvolvimento de mudas de árvores e outras espécies florestais até atingirem condições adequadas para serem transplantadas para o local definitivo.",
      "A escolha do local deve considerar a disponibilidade de água, a drenagem, a exposição solar, a proteção contra ventos fortes, o acesso, a facilidade de transporte e a segurança das instalações.",
      "A organização deve permitir separar áreas de receção de sementes, preparação de substratos, sementeira, germinação, crescimento, seleção e expedição das mudas.",
      "O substrato deve proporcionar suporte físico, retenção equilibrada de água, arejamento e drenagem. A composição depende da espécie e dos materiais disponíveis. Não se deve utilizar material contaminado, salino ou excessivamente compacto.",
      "A sementeira pode ser direta no recipiente ou realizada em canteiros para posterior repicagem. A profundidade deve respeitar o tamanho da semente e as exigências da espécie.",
      "A rega deve manter a humidade necessária sem provocar encharcamento. O excesso de água reduz a oxigenação das raízes e pode favorecer doenças. A falta de água provoca murchidão e compromete o desenvolvimento.",
      "A sombra deve ser ajustada à fase de crescimento e à espécie. A exposição progressiva às condições exteriores ajuda a preparar as mudas para o ambiente de plantação.",
      "Antes da expedição, as plantas devem passar por uma fase de rustificação. Uma muda adequada deve apresentar caule firme, raízes funcionais, boa sanidade e equilíbrio entre parte aérea e sistema radicular.",
    ],
    pontos: [
      "Localização e organização do viveiro.",
      "Recipientes e bancadas.",
      "Preparação do substrato.",
      "Sementeira e repicagem.",
      "Rega e gestão da sombra.",
      "Nutrição e controlo fitossanitário.",
      "Rustificação e seleção de mudas.",
    ],
    imagens: [
      {
        src: imagens.viveiro,
        alt: "Trabalho de viveiro e plantas",
        legenda:
          "Um viveiro organizado facilita as operações de produção, rega, seleção e acompanhamento das mudas.",
      },
      {
        src: imagens.mudas,
        alt: "Mudas jovens",
        legenda:
          "As mudas devem ser avaliadas pela qualidade do caule, das raízes e pelo estado sanitário, não apenas pela altura.",
      },
      {
        src: imagens.plantacao,
        alt: "Área de produção vegetal",
        legenda:
          "A preparação das mudas deve considerar o local onde serão posteriormente instaladas.",
      },
    ],
  },
  {
    id: "instalacao",
    numero: "04",
    titulo: "Instalação de povoamentos florestais",
    resumo:
      "Aprenda a planear a área, preparar o solo, definir o espaçamento e executar a plantação.",
    conteudo: [
      "A instalação de um povoamento começa com o diagnóstico da área. É necessário conhecer o solo, o declive, a precipitação, a disponibilidade de água, a vegetação existente, o histórico de fogo e a utilização atual do terreno.",
      "A escolha da espécie deve considerar a adaptação ecológica, a finalidade da produção, o mercado, a disponibilidade de sementes ou mudas e os impactos sobre a biodiversidade e os recursos hídricos.",
      "A preparação do terreno deve ser proporcional às necessidades. Em terrenos declivosos ou sensíveis, a mobilização indiscriminada pode aumentar a erosão e a perda de matéria orgânica.",
      "A marcação do compasso determina a distribuição das plantas. O espaçamento influencia a competição por luz, água e nutrientes, o crescimento em diâmetro, a forma do povoamento e a facilidade de mecanização.",
      "Na plantação, as raízes devem ficar corretamente posicionadas, sem dobras excessivas. O colo da planta deve ficar próximo do nível do solo, evitando enterramento exagerado ou exposição excessiva das raízes.",
      "Após a instalação, devem ser acompanhadas a sobrevivência, a reposição de falhas, a competição com vegetação espontânea, a disponibilidade de água e a proteção contra animais e incêndios.",
    ],
    pontos: [
      "Diagnóstico da área.",
      "Escolha da espécie e procedência.",
      "Preparação localizada do terreno.",
      "Marcação e definição do compasso.",
      "Plantação correta.",
      "Reposição de falhas e manutenção.",
    ],
    imagens: [
      {
        src: imagens.plantacao,
        alt: "Área de terreno agrícola e florestal",
        legenda:
          "A análise do terreno antecede a escolha da espécie e o desenho do povoamento.",
      },
      {
        src: imagens.mudas,
        alt: "Plantas jovens",
        legenda:
          "A qualidade das mudas e o manuseamento correto das raízes influenciam o estabelecimento.",
      },
      {
        src: imagens.arvores,
        alt: "Povoamento de árvores",
        legenda:
          "O espaçamento deve ser definido em função da espécie, do solo e do objetivo de produção.",
      },
    ],
  },
  {
    id: "maneio",
    numero: "05",
    titulo: "Condução e maneio dos povoamentos",
    resumo:
      "Compreenda o crescimento das árvores, a competição, os desbastes, a poda e a manutenção.",
    conteudo: [
      "A silvicultura reúne as técnicas utilizadas para estabelecer, conduzir, proteger e renovar povoamentos florestais. O maneio deve acompanhar o desenvolvimento das árvores e respeitar o objetivo de cada povoamento.",
      "Nos primeiros anos, pode ser necessário controlar a vegetação concorrente. A operação deve evitar a remoção indiscriminada da cobertura do solo, sobretudo em terrenos sujeitos à erosão.",
      "A competição entre árvores aumenta à medida que o povoamento cresce. Quando a densidade se torna excessiva, pode ser necessário realizar desbastes para regular a distribuição de espaço, luz, água e nutrientes.",
      "O desbaste é diferente da poda. O desbaste remove árvores inteiras do povoamento; a poda remove seletivamente ramos de uma árvore que permanece no povoamento.",
      "O acompanhamento deve incluir observações de crescimento, mortalidade, qualidade do fuste, estado sanitário, regeneração e ocorrência de danos.",
    ],
    pontos: [
      "Controlo da vegetação concorrente.",
      "Reposição de plantas mortas.",
      "Desbastes e regulação da densidade.",
      "Podas de formação e qualidade.",
      "Monitorização do crescimento.",
      "Proteção contra fogo e agentes nocivos.",
    ],
    imagens: [
      {
        src: imagens.arvores,
        alt: "Povoamento florestal",
        legenda:
          "A condução de povoamentos exige acompanhamento da densidade, competição e qualidade das árvores.",
      },
      {
        src: imagens.floresta,
        alt: "Estrutura de uma floresta",
        legenda:
          "A gestão deve considerar a estrutura vertical e horizontal da vegetação.",
      },
    ],
  },
  {
    id: "podas",
    numero: "06",
    titulo: "Poda florestal e poda por espécie",
    resumo:
      "Aprenda a identificar ramos, escolher a técnica, executar cortes e adaptar a poda à espécie e ao objetivo.",
    conteudo: [
      "A poda é a remoção seletiva de ramos de uma árvore. Pode ter objetivos de formação, sanidade, segurança, qualidade da madeira, manutenção da copa ou melhoria da produção de frutos.",
      "Antes de cortar, o técnico deve observar a espécie, a idade, o vigor, a arquitetura da copa, o estado sanitário, a época, as condições meteorológicas e a finalidade da árvore. Não existe uma técnica universal aplicável a todas as espécies.",
      "A poda de formação é aplicada sobretudo em árvores jovens. Procura orientar a arquitetura, evitar bifurcações indesejáveis e favorecer uma estrutura equilibrada. A decisão depende do hábito natural de crescimento da espécie.",
      "A poda de elevação, também chamada desrama, remove progressivamente ramos inferiores. Em povoamentos destinados à madeira serrada, pode contribuir para melhorar a qualidade do fuste e reduzir nós. Deve ser planeada para não retirar área foliar em excesso.",
      "A poda sanitária remove ramos mortos, partidos ou afetados por problemas fitossanitários. É importante identificar a causa do dano e avaliar se a ferramenta necessita de limpeza ou desinfeção entre árvores.",
      "A poda de frutificação procura equilibrar crescimento vegetativo, iluminação, ventilação e produção. A técnica depende do hábito de frutificação, da variedade e do sistema de condução.",
      "A poda de manutenção remove ramos cruzados, mal posicionados ou que comprometem a estrutura. Em árvores urbanas, a avaliação de segurança pode exigir profissionais especializados.",
      "O corte correto deve respeitar o colar do ramo. Cortar rente ao tronco pode danificar tecidos importantes; deixar um toco demasiado comprido também pode dificultar a resposta da árvore.",
      "Em ramos pesados, a técnica dos três cortes reduz o risco de rasgamento da casca: primeiro faz-se um corte inferior afastado do tronco; depois um corte superior um pouco mais afastado para remover o peso; por fim, remove-se o remanescente junto ao colar, sem o danificar.",
      "Não se deve retirar uma grande quantidade de copa viva numa única intervenção sem avaliação técnica. A intensidade depende da espécie, idade, vigor, estação e objetivo. Podas severas podem reduzir a fotossíntese, aumentar o stress e favorecer danos.",
    ],
    pontos: [
      "Poda de formação.",
      "Poda de elevação ou desrama.",
      "Poda sanitária.",
      "Poda de frutificação.",
      "Poda de manutenção e segurança.",
      "Colar do ramo e técnica dos três cortes.",
      "Ferramentas, higiene e proteção individual.",
    ],
    imagens: [
      {
        src: imagens.arvores,
        alt: "Árvores com diferentes estruturas de copa",
        legenda:
          "A observação da arquitetura da árvore é o primeiro passo para decidir se a poda é necessária.",
      },
      {
        src: imagens.viveiro,
        alt: "Plantas em crescimento",
        legenda:
          "A formação começa cedo: a condução de árvores jovens deve respeitar o hábito natural de crescimento.",
      },
      {
        src: imagens.floresta,
        alt: "Árvores numa formação florestal",
        legenda:
          "Em florestas naturais, a poda não deve ser aplicada de forma indiscriminada.",
      },
    ],
  },
  {
    id: "inventario",
    numero: "07",
    titulo: "Inventário, dendrologia e dendrometria",
    resumo:
      "Identifique espécies, meça árvores e avalie a composição e o potencial dos recursos florestais.",
    conteudo: [
      "A dendrologia estuda as árvores e apoia a sua identificação. A dendrometria trata da medição das dimensões das árvores e dos povoamentos. As duas áreas são fundamentais para o inventário florestal.",
      "A identificação deve observar folhas, casca, flores, frutos, sementes, forma da copa e outros caracteres. Sempre que possível, deve ser confirmada por material botânico e fontes taxonómicas fiáveis.",
      "O diâmetro à altura do peito é normalmente medido a 1,30 metros do solo, com adaptações quando existem deformações, bifurcações ou condições especiais.",
      "A altura total e a altura comercial podem ser estimadas com instrumentos apropriados. A medição deve seguir procedimentos padronizados para permitir comparação entre parcelas e campanhas.",
      "O inventário permite avaliar composição, densidade, distribuição de diâmetros, volume, biomassa, regeneração e estado de conservação. Os resultados apoiam o planeamento e a gestão.",
    ],
    pontos: [
      "Identificação botânica.",
      "Parcelas e desenho de amostragem.",
      "Medição do diâmetro.",
      "Medição de alturas.",
      "Estimativa de volume e biomassa.",
      "Registo e análise de dados.",
    ],
    imagens: [
      {
        src: imagens.arvores,
        alt: "Árvores para inventário",
        legenda:
          "A estrutura e a composição do povoamento são avaliadas através de observações e medições de campo.",
      },
      {
        src: imagens.floresta,
        alt: "Cobertura florestal",
        legenda:
          "O inventário pode ser complementado por cartografia e imagens de deteção remota.",
      },
    ],
  },
  {
    id: "protecao",
    numero: "08",
    titulo: "Proteção florestal: pragas, doenças e incêndios",
    resumo:
      "Aprenda a reconhecer sinais de risco e a prevenir danos nos povoamentos e ecossistemas.",
    conteudo: [
      "A proteção florestal envolve a prevenção, deteção e resposta a ameaças que afetam árvores e ecossistemas. Entre os riscos encontram-se insetos, fungos, doenças, espécies invasoras, seca, fogo e atividades humanas.",
      "A monitorização regular permite detetar alterações na copa, galerias, manchas, exsudados, secagem de ramos, mortalidade e outros sinais. A identificação correta do problema deve anteceder qualquer tratamento.",
      "A gestão integrada procura combinar prevenção, monitorização, medidas culturais, conservação dos inimigos naturais e intervenções específicas quando justificadas.",
      "A prevenção de incêndios inclui sensibilização comunitária, vigilância, gestão de combustível, planeamento de acessos e preparação de equipas. Os aceiros devem ser concebidos e mantidos de acordo com o contexto ecológico e operacional.",
      "Incêndios frequentes ou muito intensos podem degradar o solo, reduzir a regeneração e comprometer a biodiversidade. A resposta deve considerar a intensidade do fogo, o tipo de ecossistema e a capacidade de recuperação.",
    ],
    pontos: [
      "Inspeção fitossanitária.",
      "Identificação de pragas e doenças.",
      "Gestão integrada de riscos.",
      "Prevenção de incêndios.",
      "Monitorização de áreas afetadas.",
      "Recuperação de áreas degradadas.",
    ],
    imagens: [
      {
        src: imagens.floresta,
        alt: "Interior de uma floresta",
        legenda:
          "A vigilância regular permite identificar alterações na vegetação e sinais de degradação.",
      },
      {
        src: imagens.campo,
        alt: "Paisagem natural",
        legenda:
          "A prevenção deve considerar a paisagem, os acessos, a vegetação e a participação das comunidades.",
      },
    ],
  },
  {
    id: "exploracao",
    numero: "09",
    titulo: "Exploração florestal e corte de madeira",
    resumo:
      "Estude o planeamento da exploração, a seleção de árvores, o abate seguro e a redução de impactos.",
    conteudo: [
      "A exploração florestal é uma atividade que deve ser planeada e executada de acordo com a legislação aplicável, os instrumentos de gestão e as autorizações necessárias. A disponibilidade de árvores não significa que o corte esteja automaticamente autorizado.",
      "Antes de qualquer operação, devem ser confirmados o enquadramento da área, as espécies abrangidas, as árvores autorizadas, as condições de acesso e as medidas de proteção ambiental.",
      "O planeamento deve identificar zonas de trabalho, áreas de conservação, linhas de água, declives, acessos, pontos de carregamento e procedimentos de segurança.",
      "O abate com motosserra é uma atividade de risco elevado. Exige formação, equipamento adequado, manutenção, avaliação da direção provável de queda, zona de exclusão e procedimentos de emergência.",
      "A exploração de impacto reduzido procura minimizar danos nas árvores remanescentes, no solo, nos cursos de água e na regeneração. A organização dos caminhos de extração é essencial.",
      "Após a operação, deve avaliar-se a área, a regeneração, os danos, a erosão e a necessidade de medidas de recuperação.",
    ],
    pontos: [
      "Planeamento e autorização.",
      "Marcação e seleção de árvores.",
      "Avaliação de riscos e segurança.",
      "Abate e traçamento.",
      "Extração e carregamento.",
      "Transporte e registo da madeira.",
      "Tratamento da área após exploração.",
    ],
    imagens: [
      {
        src: imagens.equipamento,
        alt: "Equipamento de trabalho",
        legenda:
          "A escolha do equipamento deve considerar a operação, o terreno, a segurança e os impactos.",
      },
      {
        src: imagens.madeira,
        alt: "Material lenhoso",
        legenda:
          "A madeira deve ser identificada, classificada e documentada de acordo com as regras aplicáveis.",
      },
    ],
  },
  {
    id: "transformacao",
    numero: "10",
    titulo: "Extração, transporte e transformação da madeira",
    resumo:
      "Compreenda a cadeia de valor da madeira, desde a floresta até aos produtos transformados.",
    conteudo: [
      "Depois do abate autorizado, a madeira pode ser traçada em toros, classificada, carregada e transportada para unidades de transformação. A organização destas operações influencia os custos, o aproveitamento e a qualidade do produto.",
      "A transformação primária inclui operações como descasque, serragem e preparação de peças. A transformação secundária pode produzir mobiliário, portas, janelas, painéis, embalagens e outros artigos.",
      "A secagem reduz a humidade da madeira e melhora a estabilidade dimensional, de acordo com o destino do produto. O processo deve ser ajustado à espécie, espessura e utilização final.",
      "O armazenamento deve proteger a madeira contra humidade excessiva, fungos, insetos e deformações. A classificação permite separar produtos segundo dimensões, qualidade e finalidade.",
      "Os resíduos podem ser valorizados na produção de painéis, briquetes, biomassa ou outros produtos, desde que exista viabilidade técnica, económica e ambiental.",
    ],
    pontos: [
      "Classificação e medição dos toros.",
      "Carregamento e transporte.",
      "Serragem e transformação primária.",
      "Secagem e armazenamento.",
      "Transformação secundária.",
      "Aproveitamento de resíduos.",
    ],
    imagens: [
      {
        src: imagens.madeira,
        alt: "Madeira e produtos lenhosos",
        legenda:
          "A transformação acrescenta valor à matéria-prima e pode criar oportunidades industriais.",
      },
      {
        src: imagens.equipamento,
        alt: "Equipamentos industriais",
        legenda:
          "A mecanização deve ser selecionada de acordo com a escala e o produto pretendido.",
      },
    ],
  },
  {
    id: "restauracao",
    numero: "11",
    titulo: "Reflorestação e restauração ecológica",
    resumo:
      "Aprenda a recuperar áreas degradadas e a restabelecer funções ecológicas.",
    conteudo: [
      "A restauração ecológica procura recuperar a estrutura, a composição e as funções de ecossistemas degradados. Não significa simplesmente plantar árvores em qualquer terreno.",
      "O primeiro passo é compreender as causas da degradação: incêndios repetidos, erosão, exploração excessiva, mineração, agricultura inadequada, espécies invasoras ou outras pressões.",
      "Em determinadas áreas, a regeneração natural assistida pode ser mais adequada do que a plantação. Noutros locais, pode ser necessário plantar espécies nativas, controlar invasoras, proteger o solo e recuperar linhas de água.",
      "A escolha das espécies deve privilegiar a adequação ecológica e a origem apropriada do material vegetal. A plantação de espécies inadequadas pode criar novos problemas ambientais.",
      "A monitorização posterior é indispensável para avaliar sobrevivência, crescimento, regeneração, cobertura do solo e recuperação da biodiversidade.",
    ],
    pontos: [
      "Diagnóstico da degradação.",
      "Proteção do solo e da água.",
      "Regeneração natural assistida.",
      "Produção e plantação de espécies nativas.",
      "Controlo de espécies invasoras.",
      "Monitorização da recuperação.",
    ],
    imagens: [
      {
        src: imagens.mudas,
        alt: "Plantas jovens",
        legenda:
          "A produção de espécies adequadas é uma das ferramentas possíveis na recuperação de áreas degradadas.",
      },
      {
        src: imagens.floresta,
        alt: "Floresta",
        legenda:
          "A restauração deve procurar recuperar funções ecológicas, e não apenas aumentar o número de árvores.",
      },
    ],
  },
  {
    id: "tecnologia",
    numero: "12",
    titulo: "Tecnologias e mecanização florestal",
    resumo:
      "Conheça ferramentas digitais, sensores, máquinas e sistemas de informação aplicados à gestão florestal.",
    conteudo: [
      "A tecnologia florestal permite melhorar o planeamento, a monitorização, a segurança e a eficiência das operações. A escolha dos equipamentos deve considerar o tipo de floresta, a dimensão da operação, o relevo, o solo e a capacidade técnica disponível.",
      "Os Sistemas de Informação Geográfica permitem mapear povoamentos, acessos, áreas de conservação, riscos e parcelas de inventário. O GPS apoia a localização de árvores, parcelas e trajetos.",
      "Os drones podem apoiar a observação de copas, deteção de clareiras, avaliação de danos e monitorização de áreas. As imagens de satélite permitem acompanhar alterações da cobertura vegetal ao longo do tempo.",
      "Sensores de campo podem recolher dados de temperatura, humidade, precipitação e outras variáveis ambientais. A interpretação deve considerar a qualidade dos dados e a calibração dos equipamentos.",
      "A mecanização inclui equipamentos de viveiro, preparação do solo, plantação, corte, extração, carregamento e transformação. A máquina mais potente nem sempre é a mais adequada: a escolha deve reduzir custos e impactos ambientais.",
    ],
    pontos: [
      "GPS e cartografia digital.",
      "Sistemas de Informação Geográfica.",
      "Drones e fotogrametria.",
      "Imagens de satélite.",
      "Sensores e monitorização.",
      "Motosserras e equipamentos de corte.",
      "Tratores, guinchos e máquinas de extração.",
      "Harvester e forwarder.",
    ],
    imagens: [
      {
        src: imagens.equipamento,
        alt: "Equipamento tecnológico",
        legenda:
          "A mecanização deve ser escolhida em função da operação e das condições do terreno.",
      },
      {
        src: imagens.floresta,
        alt: "Cobertura florestal",
        legenda:
          "A observação remota pode complementar o trabalho de campo e o inventário florestal.",
      },
    ],
  },
];

const podaPorEspecie = [
  {
    especie: "Eucalipto",
    objetivo: "Qualidade do fuste e formação de madeira com menos nós.",
    tecnica:
      "Em povoamentos destinados à madeira serrada, pode aplicar-se desrama progressiva. A remoção deve ser planeada e compatível com a espécie, idade, vigor e destino da madeira. Não se deve retirar demasiada copa viva.",
  },
  {
    especie: "Pinheiro",
    objetivo: "Formação do tronco e melhoria da qualidade da madeira.",
    tecnica:
      "A poda de formação pode corrigir bifurcações em árvores jovens. A desrama deve ser gradual, preservando área foliar suficiente para manter o crescimento.",
  },
  {
    especie: "Mangueira",
    objetivo: "Equilíbrio da copa, ventilação, iluminação e produção.",
    tecnica:
      "A poda de formação procura estabelecer uma estrutura equilibrada. A manutenção remove ramos secos, doentes, cruzados ou mal posicionados. A abertura da copa deve ser moderada.",
  },
  {
    especie: "Cajueiro",
    objetivo: "Estrutura equilibrada, sanidade e facilidade de colheita.",
    tecnica:
      "A intervenção favorece uma copa bem distribuída. Removem-se ramos mortos, partidos, doentes ou prejudicialmente cruzados, respeitando a idade e o vigor.",
  },
  {
    especie: "Citrinos",
    objetivo: "Sanidade, iluminação e distribuição dos ramos produtivos.",
    tecnica:
      "A poda de limpeza remove ramos secos, doentes e danificados. A manutenção evita adensamento excessivo e respeita o hábito de frutificação da variedade.",
  },
  {
    especie: "Imbondeiro",
    objetivo: "Conservação da estrutura natural.",
    tecnica:
      "Deve evitar-se a poda severa ou ornamental sem justificação. A remoção de ramos deve limitar-se a situações de dano, risco ou necessidade sanitária, com avaliação técnica.",
  },
  {
    especie: "Espécies do Miombo",
    objetivo: "Conservação da regeneração e da biodiversidade.",
    tecnica:
      "Não se deve aplicar poda de produção de forma indiscriminada. A gestão deve privilegiar a conservação, a regeneração natural e o respeito pela ecologia das espécies.",
  },
];

const equipamentos = [
  {
    nome: "Tesoura de poda",
    fase: "Ramos finos",
    descricao:
      "Adequada a ramos de pequeno diâmetro, respeitando a capacidade da ferramenta.",
  },
  {
    nome: "Serrote de poda",
    fase: "Ramos de maior diâmetro",
    descricao:
      "Permite cortes controlados em ramos que excedem a capacidade da tesoura.",
  },
  {
    nome: "Podadora de altura",
    fase: "Ramos elevados",
    descricao:
      "Permite alcançar determinados ramos a partir do solo. Exige distância de segurança e avaliação do risco de queda.",
  },
  {
    nome: "Motosserra",
    fase: "Abate e traçamento",
    descricao:
      "Equipamento de risco elevado, reservado a operadores com formação, manutenção e proteção adequadas.",
  },
  {
    nome: "Trator florestal",
    fase: "Preparação e movimentação",
    descricao:
      "Pode apoiar operações de preparação, transporte e movimentação, conforme o implemento e as condições do terreno.",
  },
  {
    nome: "Forwarder",
    fase: "Extração",
    descricao:
      "Transporta madeira cortada em operações mecanizadas, de acordo com as condições de acesso e do solo.",
  },
];

const videos = [
  {
    titulo: "Produção de mudas florestais",
    descricao: "Sementeira, substratos, recipientes e cuidados de viveiro.",
    pesquisa: "produção de mudas florestais viveiro técnico",
  },
  {
    titulo: "Técnicas de poda de árvores",
    descricao: "Formação, desrama, poda sanitária e execução dos cortes.",
    pesquisa: "técnicas de poda de árvores colar do ramo três cortes",
  },
  {
    titulo: "Inventário florestal",
    descricao: "Medição de diâmetro, altura e avaliação de povoamentos.",
    pesquisa: "inventário florestal dendrometria medição árvores",
  },
  {
    titulo: "Exploração florestal segura",
    descricao: "Planeamento, equipamentos e segurança nas operações.",
    pesquisa: "exploração florestal corte madeira segurança formação",
  },
  {
    titulo: "Tecnologias florestais",
    descricao: "Cartografia, drones, GPS e monitorização.",
    pesquisa: "GIS SIG drones monitorização florestal QGIS",
  },
];

const fontes = [
  {
    nome: "Lei n.º 6/17, de 24 de Janeiro — Lei de Bases de Florestas e Fauna Selvagem",
    url: "https://lex.ao/docs/assembleia-nacional/2017/lei-n-o-6-17-de-24-de-janeiro/",
  },
  {
    nome: "Decreto Presidencial n.º 171/18, de 23 de Julho",
    url: "https://lex.ao/docs/presidente-da-republica/2018/decreto-presidencial-n-o-171-18-de-23-de-julho/",
  },
  {
    nome: "Ministério da Agricultura e Florestas",
    url: "https://minagrif.gov.ao/",
  },
  {
    nome: "Instituto Nacional da Biodiversidade e Áreas de Conservação",
    url: "https://inbac.gov.ao/",
  },
];

function DiagramaColar() {
  return (
    <svg viewBox="0 0 720 340" className="w-full" role="img" aria-label="Diagrama ilustrativo do colar do ramo e do corte correto">
      <rect width="720" height="340" rx="18" fill="#f0fdf4" />
      <rect x="300" y="55" width="110" height="245" rx="18" fill="#9a6a42" />
      <path d="M300 150 C230 125 185 110 105 80" stroke="#9a6a42" strokeWidth="48" strokeLinecap="round" fill="none" />
      <path d="M300 150 C230 125 185 110 105 80" stroke="#c58c5c" strokeWidth="5" strokeLinecap="round" fill="none" />
      <ellipse cx="300" cy="150" rx="38" ry="52" fill="#d9a36f" opacity=".8" />
      <path d="M340 108 L340 192" stroke="#166534" strokeWidth="7" strokeLinecap="round" />
      <path d="M350 110 L390 85" stroke="#166534" strokeWidth="3" />
      <text x="400" y="82" fill="#166534" fontSize="19" fontWeight="bold">Colar do ramo</text>
      <text x="400" y="108" fill="#334155" fontSize="15">Preservar esta zona</text>
      <path d="M130 92 L165 40" stroke="#b91c1c" strokeWidth="4" />
      <text x="35" y="28" fill="#991b1b" fontSize="18" fontWeight="bold">Ramo a remover</text>
      <text x="430" y="230" fill="#334155" fontSize="16">Corte fora do colar</text>
      <path d="M410 210 L360 175" stroke="#166534" strokeWidth="3" />
      <text x="430" y="260" fill="#64748b" fontSize="13">Ilustração didática, não à escala.</text>
    </svg>
  );
}

function DiagramaTresCortes() {
  return (
    <svg viewBox="0 0 900 310" className="w-full" role="img" aria-label="Sequência ilustrativa da técnica dos três cortes">
      <rect width="900" height="310" rx="18" fill="#f0fdf4" />
      {[0, 1, 2].map((n) => (
        <g key={n} transform={`translate(${n * 300 + 20},20)`}>
          <rect width="260" height="265" rx="14" fill="#ffffff" stroke="#bbd7c2" />
          <text x="18" y="32" fontSize="18" fontWeight="bold" fill="#166534">{`CORTE ${n + 1}`}</text>
          <rect x="28" y="95" width="28" height="135" rx="8" fill="#9a6a42" />
          <path d="M55 125 L220 55" stroke="#9a6a42" strokeWidth="25" strokeLinecap="round" />
          {n === 0 && <path d="M120 95 L120 140" stroke="#b91c1c" strokeWidth="7" />}
          {n === 1 && <path d="M170 72 L170 115" stroke="#b91c1c" strokeWidth="7" />}
          {n === 2 && <path d="M58 125 L58 160" stroke="#166534" strokeWidth="7" />}
          <text x="18" y="245" fontSize="12" fill="#334155">
            {["Corte inferior de segurança", "Corte superior para retirar o peso", "Corte final sem ferir o colar"][n]}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function FlorestasPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [capituloAtivo, setCapituloAtivo] = useState<Capitulo | null>(null);
  const [indiceAberto, setIndiceAberto] = useState(false);

  const capitulosFiltrados = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();
    if (!termo) return capitulos;

    return capitulos.filter((capitulo) =>
      [
        capitulo.titulo,
        capitulo.resumo,
        ...capitulo.conteudo,
        ...capitulo.pontos,
      ]
        .join(" ")
        .toLowerCase()
        .includes(termo)
    );
  }, [pesquisa]);

  function abrirCapitulo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIndiceAberto(false);
  }

  return (
    <main className="min-h-screen bg-[#f5f7f5] text-[#17221b]">
      <section className="relative overflow-hidden bg-[#102d1c] text-white">
        <img
          src="/imagens/agroacademia/floresta%20do%20maiombe.png"
          alt="Floresta do Maiombe"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2416] via-[#102d1c]/90 to-[#102d1c]/50" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-sm font-bold uppercase tracking-[.25em] text-green-300">
            AGROINOVA · Formação e conhecimento
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Academia Florestal
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
            Formação técnica e científica sobre ecossistemas, produção de
            mudas, silvicultura, podas, exploração, conservação e tecnologias
            florestais aplicadas à realidade de Angola.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => abrirCapitulo("ecossistemas")}
              className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-400"
            >
              Começar a aprender
            </button>
            <button
              onClick={() => abrirCapitulo("podas")}
              className="rounded-lg border border-white/60 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Aula de técnicas de poda
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Formação florestal
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Da semente à gestão sustentável da floresta
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              A formação florestal combina conhecimentos de biologia, ecologia,
              solos, clima, produção vegetal, engenharia, tecnologia e gestão.
              Esta academia organiza esses conhecimentos num percurso de
              aprendizagem com aplicação às condições de Angola.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              O conteúdo destina-se a estudantes, técnicos, engenheiros,
              investigadores, produtores, empresários e comunidades. Cada
              capítulo apresenta conceitos, procedimentos, imagens e exemplos
              que ajudam a relacionar a teoria com o trabalho de campo.
            </p>
          </div>
          <img
            src="/imagens/agroacademia/floresta-miombo.jpg"
            alt="Ecossistema de Miombo"
            className="h-[360px] w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">As florestas de Angola</h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            Os ecossistemas florestais angolanos apresentam diferentes
            estruturas, espécies, condições climáticas e funções ecológicas.
            A sua gestão exige conhecimento da realidade de cada região.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <img
                src="/imagens/agroacademia/floresta%20do%20maiombe.png"
                alt="Floresta do Maiombe"
                className="h-[340px] w-full rounded-xl object-cover"
              />
              <h3 className="mt-5 text-2xl font-bold">Floresta do Maiombe</h3>
              <p className="mt-3 leading-8 text-slate-700 text-justify">
                A Floresta do Maiombe, localizada na província de Cabinda, constitui um dos mais importantes ecossistemas florestais de Angola. Integrada no grande complexo de florestas tropicais húmidas da África Central, caracteriza-se pela vegetação densa, elevada diversidade de espécies 
                e presença de habitats essenciais para a conservação da vida selvagem.
                A sua importância vai muito além da cobertura vegetal. O Maiombe desempenha funções ecológicas
                fundamentais, contribuindo para a protecção dos solos contra a erosão, a regulação dos recursos hídricos, a manutenção dos ciclos naturais e o armazenamento de carbono. A floresta também oferece condições para a sobrevivência de numerosas espécies de plantas, animais, aves, insectos e outros organismos.
                Além do seu valor ambiental, representa um património natural, científico, económico 
                e social para Angola. Os seus recursos podem apoiar actividades de investigação, educação ambiental e aproveitamento sustentável de produtos florestais, desde que realizados de forma responsável e em conformidade com as normas de conservação.
              </p>
            </div>
            <div>
              <img
                src="/imagens/agroacademia/floresta-miombo.jpg"
                alt="Floresta de Miombo"
                className="h-[340px] w-full rounded-xl object-cover"
              />
              <h3 className="mt-5 text-2xl font-bold">Florestas de Miombo</h3>
              <p className="mt-3 leading-8 text-slate-700 text-justify">
                As florestas de Miombo constituem uma das formações florestais mais extensas 
                e representativas de Angola, desempenhando um papel determinante na estruturação das paisagens naturais, na conservação da biodiversidade e na sustentabilidade das comunidades rurais. Distribuem-se por vastas regiões do território nacional, sobretudo nas zonas de planalto e nas áreas de clima tropical com uma estação seca bem definida.
                Caracterizam-se pela predominância de árvores dos géneros Brachystegia,
                Julbernardia e Isoberlinia, pertencentes à família Fabaceae. Estas espécies 
                 apresentam adaptações às condições climáticas locais, incluindo períodos prolongados de menor 
               disponibilidade de água e ocorrência natural de queimadas.
              </p>
            </div>
          </div>
          <div className="mt-10 border-l-4 border-green-700 bg-green-50 p-6">
            <h3 className="font-bold text-green-950">Gestão responsável</h3>
            <p className="mt-2 leading-7 text-green-950">
              Uma plantação comercial não é equivalente a uma floresta natural.
              Nas formações naturais, a conservação da biodiversidade, da
              regeneração e dos serviços dos ecossistemas deve orientar as
              intervenções.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Programa académico
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Percurso de aprendizagem
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Escolha um capítulo para abrir a aula completa, consultar
              imagens, estudar procedimentos e aprofundar os conceitos.
            </p>
          </div>
          <div className="w-full md:max-w-sm">
            <label htmlFor="pesquisa-florestal" className="mb-2 block text-sm font-semibold">
              Pesquisar conteúdos
            </label>
            <input
              id="pesquisa-florestal"
              type="search"
              value={pesquisa}
              onChange={(event) => setPesquisa(event.target.value)}
              placeholder="Ex.: poda, sementes, viveiros..."
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-700"
            />
          </div>
        </div>

        <button
          onClick={() => setIndiceAberto(!indiceAberto)}
          className="mt-7 rounded-lg border border-green-800 px-5 py-3 font-semibold text-green-900 hover:bg-green-50"
        >
          {indiceAberto ? "Fechar índice" : "Consultar índice dos capítulos"}
        </button>

        {indiceAberto && (
          <nav className="mt-5 border-y border-slate-200 py-5">
            <div className="grid gap-x-10 gap-y-3 md:grid-cols-2">
              {capitulos.map((capitulo) => (
                <button
                  key={capitulo.id}
                  onClick={() => abrirCapitulo(capitulo.id)}
                  className="flex gap-4 py-2 text-left hover:text-green-800"
                >
                  <span className="font-bold text-green-700">{capitulo.numero}</span>
                  <span className="font-semibold">{capitulo.titulo}</span>
                </button>
              ))}
            </div>
          </nav>
        )}

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {capitulosFiltrados.map((capitulo) => (
            <article
              key={capitulo.id}
              id={capitulo.id}
              className="scroll-mt-24 py-7"
            >
              <div className="grid gap-5 md:grid-cols-[70px_1fr_auto] md:items-center">
                <span className="text-4xl font-light text-green-700">
                  {capitulo.numero}
                </span>
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">{capitulo.titulo}</h3>
                  <p className="mt-2 max-w-3xl leading-7 text-slate-600">
                    {capitulo.resumo}
                  </p>
                </div>
                <button
                  onClick={() => setCapituloAtivo(capitulo)}
                  className="rounded-lg bg-green-800 px-5 py-3 font-semibold text-white hover:bg-green-700"
                >
                  Estudar aula
                </button>
              </div>
            </article>
          ))}
          {capitulosFiltrados.length === 0 && (
            <p className="py-8 text-slate-600">
              Não foram encontrados conteúdos para essa pesquisa.
            </p>
          )}
        </div>
      </section>

      <section className="bg-[#eaf2eb] py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-green-800">
            Unidade técnica especial
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold md:text-5xl">
            Poda florestal: técnicas, importância e aplicação por espécie
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            A poda é uma operação que exige conhecimento da arquitetura da
            árvore, da fisiologia vegetal e do objetivo da intervenção. Cada
            corte deve ter uma justificação técnica.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Importância da poda</h3>
              <p className="mt-4 leading-8 text-slate-700">
                Uma poda corretamente planeada pode orientar o crescimento
                juvenil, melhorar a estrutura do tronco, remover ramos mortos
                ou doentes, favorecer a iluminação e a ventilação e, em
                determinados sistemas, melhorar a qualidade da madeira ou a
                produção de frutos.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                A poda também pode causar danos. Cortes mal posicionados,
                ferramentas inadequadas e remoção excessiva de copa viva podem
                reduzir a capacidade fotossintética, criar feridas extensas e
                aumentar a vulnerabilidade da árvore.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Tipos de poda</h3>
              <div className="mt-5 space-y-5">
                <div>
                  <h4 className="font-bold text-green-900">Poda de formação</h4>
                  <p className="mt-1 leading-7 text-slate-700">
                    Orienta a estrutura de árvores jovens, de acordo com o
                    hábito natural da espécie e o sistema de produção.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-900">Poda de elevação ou desrama</h4>
                  <p className="mt-1 leading-7 text-slate-700">
                    Remove progressivamente ramos inferiores, podendo melhorar
                    a qualidade do fuste em povoamentos destinados à madeira.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-900">Poda sanitária</h4>
                  <p className="mt-1 leading-7 text-slate-700">
                    Remove ramos mortos, partidos ou doentes, após avaliação
                    da causa e da necessidade da intervenção.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-900">Poda de frutificação</h4>
                  <p className="mt-1 leading-7 text-slate-700">
                    Equilibra crescimento vegetativo, iluminação e produção,
                    respeitando o hábito de frutificação da espécie.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-xl bg-white p-5 md:p-8">
            <h3 className="text-2xl font-bold">Onde realizar o corte: o colar do ramo</h3>
            <p className="mt-3 leading-8 text-slate-700">
              O colar do ramo é a zona de inserção do ramo no tronco. O corte
              deve preservar esta região. Cortar rente ao tronco pode danificar
              tecidos importantes; deixar um toco comprido também não é
              recomendado.
            </p>
            <div className="mt-6">
              <DiagramaColar />
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Diagrama didático produzido para explicar a posição do corte.
              A anatomia pode variar conforme a espécie e o ramo.
            </p>
          </div>

          <div className="mt-10 rounded-xl bg-white p-5 md:p-8">
            <h3 className="text-2xl font-bold">Técnica dos três cortes em ramos pesados</h3>
            <p className="mt-3 leading-8 text-slate-700">
              Em ramos pesados, um único corte pode provocar o rasgamento da
              casca devido ao peso do ramo. A técnica dos três cortes ajuda a
              controlar a remoção e a proteger a zona de inserção.
            </p>
            <div className="mt-6">
              <DiagramaTresCortes />
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Ilustração simplificada para formação. A execução real exige
              avaliação do peso, posição, altura e risco de queda do ramo.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold">Técnicas de poda por espécie</h3>
            <p className="mt-3 max-w-4xl leading-8 text-slate-700">
              Os princípios seguintes são orientações gerais. A época, a
              intensidade e a frequência devem ser definidas segundo a espécie,
              variedade, idade, estado sanitário, clima e finalidade.
            </p>
            <div className="mt-7 overflow-x-auto rounded-xl border border-slate-300 bg-white">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead className="bg-green-900 text-white">
                  <tr>
                    <th className="p-4">Espécie</th>
                    <th className="p-4">Objetivo</th>
                    <th className="p-4">Orientação técnica</th>
                  </tr>
                </thead>
                <tbody>
                  {podaPorEspecie.map((item) => (
                    <tr key={item.especie} className="border-t border-slate-200">
                      <td className="p-4 align-top font-bold">{item.especie}</td>
                      <td className="p-4 align-top text-slate-700">{item.objetivo}</td>
                      <td className="p-4 align-top leading-7 text-slate-700">{item.tecnica}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Ferramentas utilizadas</h3>
              <p className="mt-4 leading-8 text-slate-700">
                A tesoura é indicada para ramos finos dentro da capacidade da
                ferramenta. O serrote de poda permite cortes controlados em
                ramos de maior diâmetro. Podadoras de altura podem alcançar
                determinados ramos a partir do solo, mas exigem avaliação do
                risco de queda e distância de segurança.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                As ferramentas devem estar afiadas, limpas e em boas condições.
                Quando existe risco de transmissão de agentes patogénicos,
                devem ser aplicados procedimentos de higiene adequados.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Segurança na operação</h3>
              <p className="mt-4 leading-8 text-slate-700">
                O operador deve utilizar proteção adequada ao trabalho,
                incluindo proteção ocular, luvas, calçado de segurança e
                capacete quando aplicável. Trabalhos em altura, junto de
                linhas elétricas ou com motosserra exigem formação e
                procedimentos específicos.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                Nunca se deve trabalhar debaixo de ramos instáveis ou permitir
                a presença de pessoas na zona de queda. A segurança deve ser
                avaliada antes de iniciar cada intervenção.
              </p>
            </div>
          </div>

          <div className="mt-10 border-l-4 border-amber-600 bg-amber-50 p-6">
            <h3 className="font-bold text-amber-950">Erros a evitar</h3>
            <ul className="mt-3 list-inside list-disc space-y-2 leading-7 text-amber-950">
              <li>Cortar rente ao tronco e danificar o colar do ramo.</li>
              <li>Deixar tocos compridos.</li>
              <li>Retirar demasiada copa viva numa única intervenção.</li>
              <li>Aplicar a mesma técnica a todas as espécies.</li>
              <li>Utilizar ferramentas sem manutenção ou contaminadas.</li>
              <li>Realizar trabalhos em altura sem formação e proteção adequadas.</li>
              <li>Podar árvores debilitadas sem avaliar a causa do problema.</li>
            </ul>
          </div>

          <div className="mt-10 rounded-xl bg-white p-6">
            <h3 className="text-xl font-bold">Exercício de campo</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Escolha uma árvore e registe a espécie, idade aproximada,
              finalidade, condição sanitária e estrutura da copa. Identifique
              os ramos que necessitam de intervenção, justifique o tipo de poda
              e descreva as ferramentas e os cuidados de segurança.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-bold md:text-4xl">Equipamentos e maquinaria florestal</h2>
        <p className="mt-4 max-w-4xl leading-8 text-slate-700">
          A mecanização acompanha diferentes fases da atividade florestal.
          A escolha de cada equipamento deve considerar a operação, o relevo,
          o solo, a dimensão do trabalho, a segurança e os impactos ambientais.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[650px] border-collapse text-left">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4">Equipamento</th>
                <th className="p-4">Fase</th>
                <th className="p-4">Aplicação</th>
              </tr>
            </thead>
            <tbody>
              {equipamentos.map((item) => (
                <tr key={item.nome} className="border-t border-slate-200">
                  <td className="p-4 font-bold">{item.nome}</td>
                  <td className="p-4 text-slate-600">{item.fase}</td>
                  <td className="p-4 leading-7 text-slate-700">{item.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Vídeos e demonstrações técnicas</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            As ligações permitem localizar demonstrações audiovisuais para
            complementar as aulas. Antes de recomendar um vídeo como material
            oficial, a equipa editorial deve verificar a qualidade técnica,
            a autoria e a adequação à realidade angolana.
          </p>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {videos.map((video, index) => (
              <div key={video.titulo} className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="text-sm font-bold text-green-700">AULA AUDIOVISUAL 0{index + 1}</span>
                  <h3 className="mt-1 text-lg font-bold">{video.titulo}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{video.descricao}</p>
                </div>
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(video.pesquisa)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 font-semibold text-green-800 underline underline-offset-4"
                >
                  Consultar demonstrações
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-bold md:text-4xl">Legislação e exploração florestal em Angola</h2>
        <p className="mt-5 max-w-4xl leading-8 text-slate-700">
          A exploração de recursos florestais deve respeitar o quadro legal
          angolano e as autorizações aplicáveis à área, espécie, produto e
          atividade. A existência de madeira disponível não significa que o
          corte, transporte ou comercialização estejam automaticamente
          autorizados.
        </p>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold">Planeamento e autorização</h3>
            <p className="mt-2 leading-7 text-slate-700">
              Antes de iniciar uma operação, o interessado deve confirmar
              junto das autoridades competentes o enquadramento da área, o
              regime aplicável, os documentos exigidos, as espécies abrangidas
              e as condições de exploração.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Operações a enquadrar</h3>
            <p className="mt-2 leading-7 text-slate-700">
              O abate, a extração, o carregamento, o transporte, a transformação
              e a comercialização devem ser avaliados segundo as normas
              aplicáveis. A origem e a circulação dos produtos devem ser
              documentadas conforme as exigências em vigor.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Referências legais e institucionais</h3>
            <div className="mt-4 space-y-3">
              {fontes.map((fonte) => (
                <a
                  key={fonte.nome}
                  href={fonte.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block border-b border-slate-200 py-3 font-medium text-green-800 underline underline-offset-4"
                >
                  {fonte.nome}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-8 rounded-lg bg-slate-100 p-5 text-sm leading-7 text-slate-600">
          Nota académica: este conteúdo é introdutório e não substitui a
          consulta da legislação consolidada, dos regulamentos em vigor ou
          das orientações das autoridades competentes. Antes de qualquer
          exploração, confirme os requisitos legais e administrativos
          aplicáveis ao caso concreto.
        </p>
      </section>

      <section className="bg-[#102d1c] py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Glossário florestal</h2>
          <div className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-2">
            {[
              ["Silvicultura", "Ciência e prática de estabelecer, conduzir, proteger e renovar povoamentos florestais."],
              ["Dendrologia", "Estudo e identificação das árvores e das suas características."],
              ["Dendrometria", "Medição das dimensões das árvores e avaliação quantitativa dos povoamentos."],
              ["Desrama", "Remoção controlada de ramos, frequentemente inferiores, em árvores em crescimento."],
              ["Desbaste", "Remoção seletiva de árvores para regular a densidade e a competição no povoamento."],
              ["Fuste", "Parte principal do tronco, avaliada pela forma e pelo potencial de aproveitamento."],
              ["Regeneração natural", "Estabelecimento de novas plantas por processos naturais."],
              ["Povoamento", "Conjunto de árvores que ocupa uma determinada área e apresenta características relativamente comuns."],
              ["Colar do ramo", "Zona de inserção do ramo no tronco ou num ramo maior, que deve ser preservada durante o corte."],
              ["Rustificação", "Processo de adaptação gradual das mudas às condições exteriores antes da plantação."],
            ].map(([termo, definicao]) => (
              <div key={termo} className="border-b border-white/20 pb-4">
                <h3 className="font-bold text-green-300">{termo}</h3>
                <p className="mt-2 leading-7 text-green-50">{definicao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {capituloAtivo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 md:p-6"
          onClick={() => setCapituloAtivo(null)}
        >
          <div
            className="max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-5 border-b border-slate-200 bg-white/95 p-5 backdrop-blur md:p-7">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                  Academia Florestal · Capítulo {capituloAtivo.numero}
                </p>
                <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                  {capituloAtivo.titulo}
                </h2>
              </div>
              <button
                onClick={() => setCapituloAtivo(null)}
                aria-label="Fechar aula"
                className="rounded-lg border border-slate-300 px-4 py-2 text-xl hover:bg-slate-100"
              >
                ×
              </button>
            </div>

            <div className="p-5 md:p-9">
              <p className="border-l-4 border-green-700 bg-green-50 p-5 leading-8 text-green-950">
                {capituloAtivo.resumo}
              </p>

              
<div className="mt-8 space-y-7">
  {capituloAtivo.conteudo.map((paragrafo, index) => (
    <p
      key={index}
      className="text-base leading-8 text-slate-700 md:text-lg text-justify"
    >
      {paragrafo}
    </p>
  ))}
</div>

{capituloAtivo.imagens.length > 0 && (
  <section className="mt-10 border-t border-slate-200 pt-8">
    <h3 className="mb-5 text-xl font-bold text-slate-900">
      Registo visual e observações de campo
    </h3>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {capituloAtivo.imagens.map((imagem, index) => (
        <figure
          key={`${capituloAtivo.id}-${imagem.src}`}
          className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <img
            src={imagem.src}
            alt={imagem.alt}
            loading="lazy"
            className="h-40 w-full object-cover sm:h-44"
          />

          <figcaption className="p-3">
            <p className="text-sm font-semibold text-slate-800">
              {imagem.alt}
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {imagem.legenda}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
)}


              <div className="mt-8 space-y-6">
                {capituloAtivo.conteudo.map((paragrafo, index) => (
                  <div key={index}>
                    <p className="text-base leading-8 text-slate-700 md:text-lg">
                      {paragrafo}
                    </p>

                    {capituloAtivo.imagens[index + 1] && (
                      <figure className="mt-7">
                        <img
                          src={capituloAtivo.imagens[index + 1].src}
                          alt={capituloAtivo.imagens[index + 1].alt}
                          className="max-h-[420px] w-full rounded-xl object-cover"
                          loading="lazy"
                        />
                        <figcaption className="mt-3 text-sm leading-6 text-slate-500">
                          {capituloAtivo.imagens[index + 1].legenda}
                        </figcaption>
                      </figure>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-slate-200 pt-7">
                <h3 className="text-xl font-bold">O que deve aprender neste capítulo</h3>
                <ul className="mt-4 space-y-3">
                  {capituloAtivo.pontos.map((ponto) => (
                    <li key={ponto} className="flex gap-3 leading-7 text-slate-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-700" />
                      {ponto}
                    </li>
                  ))}
                </ul>
              </div>

              {capituloAtivo.id === "podas" && (
                <div className="mt-10 border-t border-slate-200 pt-8">
                  <h3 className="text-2xl font-bold">Demonstração visual: colar do ramo</h3>
                  <p className="mt-3 leading-8 text-slate-700">
                    O corte deve preservar a zona de inserção do ramo. A
                    ilustração seguinte ajuda a compreender a posição do corte.
                  </p>
                  <div className="mt-5">
                    <DiagramaColar />
                  </div>
                  <h3 className="mt-10 text-2xl font-bold">Demonstração visual: três cortes</h3>
                  <p className="mt-3 leading-8 text-slate-700">
                    Para ramos pesados, a sequência de três cortes reduz o
                    risco de rasgamento da casca. A operação deve ser executada
                    por pessoa capacitada e com controlo da zona de queda.
                  </p>
                  <div className="mt-5">
                    <DiagramaTresCortes />
                  </div>
                </div>
              )}

              <div className="mt-10 flex justify-end border-t border-slate-200 pt-6">
                <button
                  onClick={() => setCapituloAtivo(null)}
                  className="rounded-lg bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-700"
                >
                  Terminar aula
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-[#0b2114] px-5 py-8 text-center text-sm text-green-100">
        <p className="font-semibold">AGROINOVA-ANGOLA · Academia Florestal</p>
        <p className="mt-2">
          Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
        </p>
      </footer>
    </main>
  );
}
