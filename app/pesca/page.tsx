"use client";

import Link from "next/link";
import { useRef, useState } from "react";

type CardItem = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  categoria: string;
};

type Conteudo = {
  titulo: string;
  categoria: string;
  introducao: string;
  imagem: string;
  legenda: string;
  secoes: {
    titulo: string;
    texto: string;
  }[];
  pontos: string[];
  aplicacao: string;
};

const imagemPrincipal =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Fishermen%20in%20Angola.JPG";

const imagens = {
  caboLedo:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Fishermen%20in%20Cabo%20Ledo%2C%20Angola.jpg",

  barcoCaboLedo:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Fishing%20boat%20in%20Cabo%20Ledo%2C%20Angola.jpg",

  restinga:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Fisher%20boats%20Restinga%20peninsula%2C%20Angola.jpg",

  pescadores:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pescadores%20Angola.JPG",

  caboLedoBarco:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Barco%20com%20pescadores%20em%20uma%20praia%20de%20Cabo%20Ledo%2C%20Angola.jpg",
};

/* ============================================================
   CONTEÚDOS
============================================================ */

const conteudos: Record<string, Conteudo> = {
  introducao: {
    titulo: "Introdução à pesca",
    categoria: "Fundamentos da pesca",
    imagem: imagens.caboLedo,
    legenda: "Atividade pesqueira e comunidades costeiras de Angola.",
    introducao:
      "A pesca é uma atividade de aproveitamento dos recursos biológicos aquáticos que envolve conhecimentos de biologia, ecologia, tecnologia, navegação, segurança, economia e conservação. Para compreender a pesca de forma adequada é necessário analisar não apenas a captura, mas todo o sistema que liga os recursos naturais aos pescadores, às comunidades, ao comércio, à transformação e ao consumidor.",
    secoes: [
      {
        titulo: "O que é a pesca?",
        texto:
          "A pesca compreende um conjunto de atividades destinadas à captura de organismos aquáticos em ambientes naturais. Esses organismos podem incluir peixes, crustáceos, moluscos e outros recursos aquáticos autorizados. A atividade pode ocorrer no mar, em estuários, rios, lagos, lagoas e outros ambientes interiores. A forma de pesca utilizada depende do ambiente, das espécies-alvo, da tecnologia disponível, da escala da operação e das regras estabelecidas para a utilização dos recursos.",
      },
      {
        titulo: "Pesca como sistema produtivo",
        texto:
          "Uma pescaria deve ser entendida como um sistema. Antes da captura existem decisões relacionadas com embarcação, combustível, equipamentos, localização dos cardumes, segurança e organização do trabalho. Depois da captura surgem outras etapas relacionadas com desembarque, seleção, conservação, transporte, processamento e comercialização. A eficiência de uma pescaria depende da articulação entre essas diferentes etapas.",
      },
      {
        titulo: "A pesca em Angola",
        texto:
          "Angola possui um litoral de aproximadamente 1.650 quilómetros e uma importante diversidade de ambientes costeiros e marinhos. A atividade pesqueira está ligada a comunidades costeiras, portos, mercados e cadeias de transformação e comercialização. A gestão do setor procura conciliar o aproveitamento económico dos recursos com a conservação dos ecossistemas e das populações aquáticas.",
      },
      {
        titulo: "Por que estudar pesca?",
        texto:
          "O conhecimento técnico permite compreender como as populações de peixes respondem à exploração, como escolher métodos de captura mais seletivos, como reduzir perdas após o desembarque e como melhorar a qualidade do pescado. Também permite compreender os efeitos da pesca sobre habitats, espécies e comunidades. Para estudantes, técnicos e produtores, essa base é fundamental para tomar decisões responsáveis.",
      },
    ],
    pontos: [
      "A pesca depende diretamente das condições ambientais e biológicas dos recursos.",
      "A identificação das espécies é essencial para uma gestão adequada.",
      "A qualidade do pescado começa no momento da captura.",
      "A segurança dos pescadores deve fazer parte de qualquer operação.",
      "A sustentabilidade exige equilíbrio entre exploração e conservação.",
    ],
    aplicacao:
      "Este conteúdo serve como ponto de partida para estudantes, pescadores, técnicos, investigadores e empreendedores que pretendam compreender a estrutura do setor pesqueiro angolano.",
  },

  maritima: {
    titulo: "Pesca marítima",
    categoria: "Fundamentos da pesca",
    imagem: imagens.barcoCaboLedo,
    legenda: "Embarcação e atividade pesqueira no litoral angolano.",
    introducao:
      "A pesca marítima ocorre em águas costeiras e oceânicas e constitui uma das principais formas de aproveitamento dos recursos aquáticos de Angola. A diversidade das condições ambientais ao longo do litoral influencia a distribuição das espécies, a produtividade das pescarias e os métodos utilizados pelos pescadores.",
    secoes: [
      {
        titulo: "Ambiente marinho",
        texto:
          "O ambiente marinho apresenta variações de profundidade, temperatura, salinidade, correntes, disponibilidade de alimento e características do fundo. Esses fatores influenciam diretamente a distribuição dos organismos aquáticos. Algumas espécies permanecem próximas da costa, enquanto outras ocupam águas mais profundas ou realizam movimentos associados à alimentação e reprodução.",
      },
      {
        titulo: "Litoral angolano",
        texto:
          "O litoral de Angola apresenta praias, baías, estuários, mangais, zonas rochosas, dunas e diferentes tipos de fundos marinhos. O país possui aproximadamente 1.650 km de costa. Entre as zonas costeiras encontram-se áreas associadas a Cabinda, Zaire, Bengo, Luanda, Cuanza-Sul, Benguela e Namibe.",
      },
      {
        titulo: "Espécies e pescarias",
        texto:
          "As pescarias marítimas podem dirigir-se a recursos pelágicos, demersais, crustáceos e moluscos. Espécies pelágicas vivem principalmente na coluna de água, enquanto espécies demersais estão associadas ao fundo. A escolha da arte de pesca deve considerar o comportamento da espécie e a necessidade de reduzir capturas indesejadas.",
      },
      {
        titulo: "Gestão",
        texto:
          "A pesca marítima precisa de regras relacionadas com licenciamento, períodos de pesca, tamanhos mínimos, artes permitidas, zonas de proteção e outras medidas de gestão. Essas medidas existem para reduzir a pressão excessiva sobre os recursos e permitir a recuperação das populações.",
      },
    ],
    pontos: [
      "Conhecer a zona de pesca antes da operação.",
      "Identificar corretamente as espécies capturadas.",
      "Utilizar artes compatíveis com a legislação.",
      "Evitar captura de juvenis e espécies protegidas.",
      "Garantir conservação adequada desde o desembarque.",
    ],
    aplicacao:
      "O conhecimento da pesca marítima é essencial para pescadores, técnicos de campo, investigadores, gestores e estudantes das ciências do mar.",
  },

  continental: {
    titulo: "Pesca continental",
    categoria: "Fundamentos da pesca",
    imagem: imagens.pescadores,
    legenda: "Pesca em ambientes de água doce.",
    introducao:
      "A pesca continental é realizada em ambientes de água doce, incluindo rios, lagos, lagoas, albufeiras e outros sistemas interiores. Esses ambientes apresentam características próprias e podem sustentar comunidades piscatórias importantes, sobretudo em regiões onde o pescado constitui fonte de alimentação e rendimento.",
    secoes: [
      {
        titulo: "Ambientes de água doce",
        texto:
          "Os sistemas continentais apresentam diferenças importantes relativamente ao ambiente marinho. A qualidade da água, o regime de cheias, a vegetação marginal, a profundidade, o oxigénio dissolvido e a disponibilidade de alimento influenciam a composição das comunidades de peixes.",
      },
      {
        titulo: "Importância para as comunidades",
        texto:
          "Em muitas regiões, a pesca continental pode contribuir para a alimentação familiar, geração de rendimento e circulação de produtos entre zonas produtoras e mercados. A atividade também conserva conhecimentos tradicionais sobre rios, épocas de pesca, espécies e locais de captura.",
      },
      {
        titulo: "Manejo dos recursos",
        texto:
          "A exploração de ambientes continentais deve considerar a capacidade de renovação das populações. A captura excessiva, a degradação das margens, a poluição, alterações do regime hidrológico e introdução inadequada de espécies podem modificar profundamente os ecossistemas.",
      },
      {
        titulo: "Ligação com a aquicultura",
        texto:
          "O conhecimento das espécies de água doce também é importante para a aquicultura. Características como crescimento, alimentação, tolerância ambiental e reprodução ajudam a determinar a adequação de uma espécie para cultivo.",
      },
    ],
    pontos: [
      "Rios, lagos e albufeiras possuem características ecológicas distintas.",
      "A qualidade da água influencia diretamente os peixes.",
      "A vegetação das margens funciona como habitat e proteção.",
      "A pesca deve respeitar períodos e regras aplicáveis.",
      "A degradação dos ambientes interiores reduz a produtividade pesqueira.",
    ],
    aplicacao:
      "Este conteúdo é especialmente útil para comunidades ribeirinhas, técnicos, estudantes e projetos de pesca continental e aquicultura.",
  },

  aquicultura: {
    titulo: "Aquicultura",
    categoria: "Fundamentos da pesca",
    imagem: imagens.restinga,
    legenda: "Sistemas de produção e aproveitamento de organismos aquáticos.",
    introducao:
      "A aquicultura é a produção controlada de organismos aquáticos, podendo envolver peixes, crustáceos, moluscos e outros organismos. Ao contrário da pesca extrativa, o produtor controla parte significativa das condições de criação, como alimentação, densidade, qualidade da água, sanidade e colheita.",
    secoes: [
      {
        titulo: "Planeamento da exploração",
        texto:
          "Uma unidade aquícola deve ser planeada antes da construção. É necessário avaliar disponibilidade e qualidade da água, características do solo, acesso, energia, mercado, disponibilidade de ração, segurança e possibilidade de escoamento da produção. Um projeto mal localizado pode aumentar custos e dificultar o controlo sanitário.",
      },
      {
        titulo: "Instalações",
        texto:
          "Os sistemas de produção podem utilizar viveiros escavados, tanques, estruturas de fluxo de água ou sistemas mais intensivos. A escolha depende da espécie, disponibilidade de água, capacidade de investimento, nível tecnológico e objetivo produtivo. As instalações devem permitir limpeza, controlo, alimentação, observação e colheita.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação é um dos componentes mais importantes dos custos de produção. O alimento deve ser adequado à espécie e ao estágio de crescimento. O fornecimento excessivo aumenta desperdícios, deteriora a qualidade da água e pode favorecer problemas sanitários.",
      },
      {
        titulo: "Qualidade da água",
        texto:
          "Temperatura, oxigénio dissolvido, pH, transparência e concentração de compostos nitrogenados são alguns dos parâmetros importantes. A monitorização regular permite identificar alterações antes que provoquem mortalidade ou redução do crescimento.",
      },
      {
        titulo: "Sanidade e biossegurança",
        texto:
          "A prevenção é mais importante do que tratar problemas depois de instalados. Deve-se evitar introdução de animais doentes, controlar equipamentos, observar diariamente os peixes, remover mortalidades e manter instalações limpas. A utilização de medicamentos deve ser orientada por profissionais competentes.",
      },
      {
        titulo: "Aquicultura em Angola",
        texto:
          "Angola apresenta condições favoráveis ao desenvolvimento da aquicultura continental e marinha. Documentos governamentais recentes destacam o potencial hídrico, o litoral e a necessidade de infraestrutura, formação, monitorização e melhoria das cadeias de fornecimento. A aquicultura é tratada como uma área importante para aumentar a produção de pescado e contribuir para segurança alimentar e emprego.",
      },
    ],
    pontos: [
      "Escolher corretamente o local antes de construir.",
      "Garantir água adequada durante todo o ciclo produtivo.",
      "Controlar densidade e alimentação.",
      "Registar mortalidade, crescimento e alimentação.",
      "Aplicar medidas de biossegurança.",
      "Planejar a venda antes da colheita.",
    ],
    aplicacao:
      "Este conteúdo serve como base para quem pretende iniciar ou melhorar uma exploração aquícola, mas um projeto comercial deve ser acompanhado por técnicos e respeitar o licenciamento e as normas aplicáveis.",
  },

  recursos: {
    titulo: "Recursos pesqueiros",
    categoria: "Fundamentos da pesca",
    imagem: imagens.caboLedoBarco,
    legenda: "Recursos biológicos utilizados pelas pescarias.",
    introducao:
      "Os recursos pesqueiros são constituídos pelos organismos aquáticos que podem ser explorados pelas pescarias dentro das regras estabelecidas. O conhecimento desses recursos é indispensável para evitar exploração excessiva e melhorar a eficiência da atividade.",
    secoes: [
      {
        titulo: "Diversidade dos recursos",
        texto:
          "Os recursos podem ser agrupados em diferentes categorias ecológicas e comerciais. Existem espécies pelágicas, demersais, costeiras, estuarinas e de água doce, além de crustáceos e moluscos. Cada grupo possui características biológicas que determinam a sua vulnerabilidade à pesca.",
      },
      {
        titulo: "Populações e renovação",
        texto:
          "Uma população de peixes possui indivíduos em diferentes fases de crescimento. A manutenção da pescaria depende da reprodução e do recrutamento de novos indivíduos. Quando a mortalidade causada pela pesca ultrapassa a capacidade de reposição da população, ocorre redução do recurso.",
      },
      {
        titulo: "Avaliação científica",
        texto:
          "A avaliação dos recursos utiliza informações sobre capturas, esforço de pesca, tamanhos dos indivíduos, idade, reprodução, distribuição e condições ambientais. Esses dados ajudam a definir medidas de gestão e períodos de proteção.",
      },
      {
        titulo: "Utilização sustentável",
        texto:
          "A sustentabilidade não significa deixar de pescar. Significa utilizar os recursos dentro de níveis que permitam a sua manutenção. Isso exige fiscalização, informação, participação dos pescadores e decisões baseadas em evidências.",
      },
    ],
    pontos: [
      "Conhecer o recurso antes de aumentar o esforço de pesca.",
      "Registar espécies, tamanhos e quantidades capturadas.",
      "Evitar captura de indivíduos muito pequenos.",
      "Respeitar períodos e zonas de proteção.",
      "Apoiar investigação científica.",
    ],
    aplicacao:
      "O estudo dos recursos pesqueiros é fundamental para a gestão pública, investigação, pesca comercial e conservação da biodiversidade.",
  },

  ecossistemas: {
    titulo: "Ecossistemas aquáticos",
    categoria: "Fundamentos da pesca",
    imagem: imagens.caboLedo,
    legenda: "Relações entre organismos e ambientes aquáticos.",
    introducao:
      "Um ecossistema aquático é formado pela interação entre organismos vivos e fatores físicos e químicos do ambiente. Peixes, crustáceos, plantas, algas, microrganismos, água, sedimentos, temperatura e luz fazem parte de uma rede complexa.",
    secoes: [
      {
        titulo: "Relações ecológicas",
        texto:
          "Os organismos aquáticos dependem uns dos outros através de relações alimentares e ecológicas. O fitoplâncton pode servir de base para cadeias alimentares que chegam até pequenos peixes e posteriormente a predadores maiores.",
      },
      {
        titulo: "Habitats",
        texto:
          "Mangais, estuários, praias, fundos rochosos, fundos arenosos, rios, lagoas e zonas profundas oferecem diferentes condições de abrigo e alimentação. A destruição desses habitats pode afetar espécies mesmo quando a captura direta não ocorre.",
      },
      {
        titulo: "Pressões humanas",
        texto:
          "Poluição, destruição de habitats, alterações climáticas, sobrepesca e alterações hidrológicas podem modificar a estrutura dos ecossistemas. A gestão pesqueira precisa, portanto, considerar o ambiente e não apenas as espécies capturadas.",
      },
      {
        titulo: "Conservação",
        texto:
          "Conservar ecossistemas significa proteger processos ecológicos, habitats críticos e biodiversidade. Em zonas costeiras, isso pode envolver proteção de mangais, estuários, áreas de reprodução e outros ambientes importantes.",
      },
    ],
    pontos: [
      "Nenhuma espécie existe isoladamente.",
      "A qualidade do habitat influencia a produtividade pesqueira.",
      "Estuários podem funcionar como áreas importantes para juvenis.",
      "Mangais oferecem abrigo e alimentação para vários organismos.",
      "A conservação deve considerar todo o ecossistema.",
    ],
    aplicacao:
      "O conhecimento ecológico ajuda pescadores, estudantes e gestores a compreender por que determinadas zonas devem ser protegidas.",
  },

  artesanal: {
    titulo: "Pesca artesanal",
    categoria: "Sistemas de pesca",
    imagem: imagens.caboLedoBarco,
    legenda: "Pesca artesanal e meios de vida das comunidades costeiras.",
    introducao:
      "A pesca artesanal caracteriza-se geralmente por operações de menor escala, forte ligação às comunidades e utilização de embarcações e artes adaptadas às condições locais. O setor possui importância económica, alimentar e social para numerosas famílias.",
    secoes: [
      {
        titulo: "Organização da atividade",
        texto:
          "A pesca artesanal envolve pescadores, proprietários de embarcações, comerciantes, transformadores e outros agentes. A cadeia de valor começa com a preparação da embarcação e termina com a venda ou transformação do pescado.",
      },
      {
        titulo: "Conhecimento local",
        texto:
          "Os pescadores acumulam conhecimento sobre correntes, ventos, marés, zonas de pesca e comportamento das espécies. Esse conhecimento possui valor para a gestão, mas deve ser combinado com dados científicos e regras oficiais.",
      },
      {
        titulo: "Segurança",
        texto:
          "A segurança deve ser prioridade. Equipamentos de comunicação, meios de flutuação, previsão meteorológica, manutenção das embarcações e planeamento da viagem reduzem riscos. A operação nunca deve depender exclusivamente da experiência individual.",
      },
      {
        titulo: "Desafios",
        texto:
          "Entre os desafios encontram-se acesso a equipamentos, conservação do pescado, combustível, mercados, infraestruturas de desembarque e sustentabilidade dos recursos. Melhorar a cadeia de frio pode reduzir perdas e aumentar o valor do pescado.",
      },
    ],
    pontos: [
      "Planeamento da saída para o mar.",
      "Manutenção regular da embarcação.",
      "Uso correto dos equipamentos de segurança.",
      "Conservação imediata do pescado.",
      "Respeito às regras de pesca.",
    ],
    aplicacao:
      "O conteúdo pode apoiar programas de capacitação de pescadores e iniciativas de desenvolvimento das comunidades piscatórias.",
  },

  semiindustrial: {
    titulo: "Pesca semi-industrial",
    categoria: "Sistemas de pesca",
    imagem: imagens.restinga,
    legenda: "Operações pesqueiras de maior capacidade.",
    introducao:
      "A pesca semi-industrial ocupa uma posição intermédia entre a pesca artesanal e as operações industriais. Envolve maior capacidade de embarcação, equipamentos e organização logística, exigindo planeamento operacional e controlo dos custos.",
    secoes: [
      {
        titulo: "Estrutura operacional",
        texto:
          "Uma operação semi-industrial depende de embarcação adequada, tripulação capacitada, equipamentos de navegação, comunicação, captura e conservação. A preparação da viagem deve incluir combustível, gelo, alimentos, segurança e manutenção.",
      },
      {
        titulo: "Eficiência",
        texto:
          "A eficiência não significa simplesmente aumentar a quantidade capturada. Uma operação eficiente deve reduzir custos, diminuir perdas, melhorar a qualidade do pescado e utilizar o recurso de maneira responsável.",
      },
      {
        titulo: "Conservação",
        texto:
          "A capacidade de conservar o pescado durante a viagem é determinante para o resultado económico. Temperatura, higiene, acondicionamento e tempo entre captura e conservação devem ser controlados.",
      },
      {
        titulo: "Gestão",
        texto:
          "A gestão deve combinar dados de captura, esforço, combustível, tripulação, manutenção e comercialização. Registos consistentes permitem comparar viagens e identificar pontos de melhoria.",
      },
    ],
    pontos: [
      "Planeamento da viagem.",
      "Manutenção preventiva.",
      "Controlo do esforço de pesca.",
      "Conservação adequada.",
      "Registo sistemático das operações.",
    ],
    aplicacao:
      "É uma base útil para estudantes, técnicos e gestores envolvidos em operações pesqueiras de maior escala.",
  },

  industrial: {
    titulo: "Pesca industrial",
    categoria: "Sistemas de pesca",
    imagem: imagens.barcoCaboLedo,
    legenda: "Operações pesqueiras de escala industrial.",
    introducao:
      "A pesca industrial utiliza embarcações, equipamentos e estruturas de elevada capacidade operacional. A atividade exige planeamento técnico, gestão de recursos, segurança, controlo da qualidade e cumprimento rigoroso das regras estabelecidas.",
    secoes: [
      {
        titulo: "Operação",
        texto:
          "As operações industriais envolvem planeamento das zonas de pesca, logística, combustível, manutenção, tripulação, equipamentos de captura e conservação. A produtividade precisa ser analisada juntamente com os custos e a sustentabilidade.",
      },
      {
        titulo: "Tecnologia",
        texto:
          "Equipamentos modernos podem melhorar localização de cardumes, navegação, comunicação e conservação. Entretanto, maior capacidade tecnológica também pode aumentar a pressão sobre os recursos quando não existe gestão adequada.",
      },
      {
        titulo: "Responsabilidade ambiental",
        texto:
          "A pesca industrial deve reduzir capturas acessórias, evitar artes proibidas e cumprir áreas, épocas e tamanhos estabelecidos. A sustentabilidade depende do equilíbrio entre capacidade de pesca e capacidade de renovação dos recursos.",
      },
      {
        titulo: "Cadeia de valor",
        texto:
          "O pescado pode seguir para processamento, conservação, mercado interno ou exportação. A qualidade desde a captura influencia diretamente o valor comercial obtido posteriormente.",
      },
    ],
    pontos: [
      "Planeamento técnico da frota.",
      "Manutenção preventiva.",
      "Monitorização da atividade.",
      "Redução de capturas acessórias.",
      "Cumprimento das medidas de gestão.",
    ],
    aplicacao:
      "O conteúdo serve como introdução para estudos sobre frota, tecnologia pesqueira, economia e gestão dos recursos.",
  },

  artes: {
    titulo: "Artes e técnicas de pesca",
    categoria: "Artes e técnicas",
    imagem: imagens.pescadores,
    legenda: "Equipamentos e técnicas utilizados na atividade pesqueira.",
    introducao:
      "As artes de pesca são os equipamentos utilizados para capturar organismos aquáticos. A escolha da arte deve considerar espécie-alvo, habitat, tamanho dos indivíduos, profundidade, condições ambientais e legislação.",
    secoes: [
      {
        titulo: "Seletividade",
        texto:
          "Uma boa arte de pesca deve permitir capturar principalmente os organismos pretendidos e reduzir capturas indesejadas. O tamanho da malha, o tipo de anzol, a profundidade e a forma de operação influenciam a seletividade.",
      },
      {
        titulo: "Redes de emalhar",
        texto:
          "As redes de emalhar capturam peixes quando estes ficam retidos na malha. O tamanho da malha deve ser compatível com as regras aplicáveis e com o objetivo de reduzir a captura de indivíduos juvenis.",
      },
      {
        titulo: "Linha e anzol",
        texto:
          "A pesca com linha e anzol pode apresentar elevada seletividade quando corretamente utilizada. O tipo de anzol e isco influencia as espécies capturadas e o tamanho dos indivíduos.",
      },
      {
        titulo: "Cerco e arrasto",
        texto:
          "Artes de cerco são utilizadas para concentrar e capturar cardumes. O arrasto utiliza redes rebocadas e pode apresentar impactos sobre o fundo e capturas acessórias, razão pela qual necessita de regras específicas de utilização.",
      },
      {
        titulo: "Artes tradicionais",
        texto:
          "As técnicas tradicionais representam conhecimento acumulado pelas comunidades. O seu estudo pode ajudar a compreender relações históricas entre população, ambiente e recursos, desde que a utilização atual respeite as regras de conservação.",
      },
    ],
    pontos: [
      "Escolher a arte de acordo com a espécie-alvo.",
      "Respeitar tamanho mínimo de malha.",
      "Evitar artes proibidas.",
      "Reduzir captura de juvenis.",
      "Reduzir capturas acessórias.",
    ],
    aplicacao:
      "Este conhecimento é importante para formação de pescadores, técnicos e estudantes de engenharia de pesca e ciências do mar.",
  },

  anatomia: {
    titulo: "Anatomia dos peixes",
    categoria: "Biologia e ecologia",
    imagem: imagens.caboLedo,
    legenda: "Conhecimento anatómico aplicado à identificação e manejo dos peixes.",
    introducao:
      "A anatomia dos peixes permite compreender a relação entre estrutura corporal, alimentação, locomoção, respiração e adaptação ao ambiente. Também é fundamental para identificação das espécies e avaliação do estado dos animais.",
    secoes: [
      {
        titulo: "Estrutura corporal",
        texto:
          "O corpo dos peixes apresenta adaptações relacionadas com o ambiente em que vivem. Forma corporal, posição das barbatanas, boca, dentes e escamas podem ajudar na identificação e na compreensão do modo de vida.",
      },
      {
        titulo: "Respiração",
        texto:
          "As brânquias permitem a troca gasosa entre o sangue e a água. A eficiência desse processo depende da qualidade da água, sobretudo da disponibilidade de oxigénio dissolvido.",
      },
      {
        titulo: "Sistema digestivo",
        texto:
          "A estrutura do aparelho digestivo está relacionada com o tipo de alimentação. Espécies predadoras, herbívoras e omnívoras apresentam adaptações diferentes.",
      },
      {
        titulo: "Importância para a produção",
        texto:
          "Conhecer a anatomia ajuda na identificação, alimentação, avaliação sanitária e escolha de técnicas de manejo. Alterações externas ou internas podem indicar problemas que exigem avaliação técnica.",
      },
    ],
    pontos: [
      "Observar corpo, boca, barbatanas e coloração.",
      "Usar características anatómicas na identificação.",
      "Relacionar anatomia com alimentação.",
      "Observar alterações anormais.",
      "Utilizar conhecimento anatómico no manejo.",
    ],
    aplicacao:
      "Conteúdo indicado para estudantes, técnicos de pesca, aquicultura, biologia e áreas relacionadas.",
  },

  reproducao: {
    titulo: "Reprodução dos peixes",
    categoria: "Biologia e ecologia",
    imagem: imagens.restinga,
    legenda: "Reprodução e renovação das populações aquáticas.",
    introducao:
      "A reprodução é um dos processos mais importantes para a manutenção das populações de peixes. Conhecer maturação sexual, desova, fecundidade, épocas reprodutivas e recrutamento é essencial para compreender a capacidade de renovação dos recursos.",
    secoes: [
      {
        titulo: "Maturação sexual",
        texto:
          "Os peixes atingem maturidade sexual em diferentes idades e tamanhos. Fatores ambientais, disponibilidade de alimento e características genéticas podem influenciar o processo.",
      },
      {
        titulo: "Desova",
        texto:
          "As estratégias reprodutivas variam entre espécies. Algumas libertam ovos e espermatozoides na água, enquanto outras apresentam estratégias diferentes. Temperatura, corrente, habitat e disponibilidade de alimento podem influenciar o sucesso reprodutivo.",
      },
      {
        titulo: "Pesca e reprodução",
        texto:
          "A captura intensa de adultos reprodutores ou de indivíduos antes da primeira maturação pode reduzir a capacidade de renovação das populações. Por isso, períodos de proteção e tamanhos mínimos podem ser ferramentas importantes de gestão.",
      },
      {
        titulo: "Aquicultura",
        texto:
          "Na aquicultura, o conhecimento da reprodução permite selecionar reprodutores, controlar condições de desova e produzir juvenis. A reprodução controlada exige instalações e acompanhamento técnico.",
      },
    ],
    pontos: [
      "Identificar épocas reprodutivas.",
      "Proteger áreas de reprodução.",
      "Evitar captura excessiva de reprodutores.",
      "Estudar tamanho da primeira maturação.",
      "Manter registos produtivos em aquicultura.",
    ],
    aplicacao:
      "Fundamental para investigação pesqueira, conservação, aquicultura e gestão dos recursos.",
  },

  alimentacao: {
    titulo: "Alimentação dos peixes",
    categoria: "Biologia e ecologia",
    imagem: imagens.barcoCaboLedo,
    legenda: "Alimentação e relações tróficas nos ambientes aquáticos.",
    introducao:
      "A alimentação influencia crescimento, reprodução, comportamento e sobrevivência dos peixes. O estudo dos hábitos alimentares permite compreender as cadeias alimentares naturais e melhorar a alimentação em sistemas de aquicultura.",
    secoes: [
      {
        titulo: "Hábitos alimentares",
        texto:
          "As espécies podem apresentar hábitos herbívoros, carnívoros, detritívoros ou omnívoros. Algumas especializam-se em determinados organismos, enquanto outras possuem dieta mais ampla.",
      },
      {
        titulo: "Cadeias alimentares",
        texto:
          "A matéria e energia circulam entre diferentes níveis tróficos. Alterações na abundância de uma espécie podem repercutir-se sobre outras, mostrando por que a gestão precisa considerar as relações ecológicas.",
      },
      {
        titulo: "Alimentação em aquicultura",
        texto:
          "Na produção aquícola, a alimentação deve ser adequada ao tamanho, espécie e fase de crescimento. O excesso de ração representa desperdício e pode deteriorar a água.",
      },
      {
        titulo: "Qualidade do alimento",
        texto:
          "Uma alimentação equilibrada deve fornecer nutrientes adequados e ser armazenada corretamente. Ração deteriorada pode reduzir o desempenho e aumentar riscos sanitários.",
      },
    ],
    pontos: [
      "Conhecer a dieta da espécie.",
      "Ajustar alimentação à fase de crescimento.",
      "Evitar excesso de ração.",
      "Armazenar alimentos em condições adequadas.",
      "Monitorizar crescimento.",
    ],
    aplicacao:
      "É especialmente importante para aquicultores, estudantes e técnicos responsáveis pela produção.",
  },

  sobrepesca: {
    titulo: "Sobrepesca",
    categoria: "Conservação e sustentabilidade",
    imagem: imagens.restinga,
    legenda: "A gestão sustentável procura evitar a exploração excessiva dos recursos.",
    introducao:
      "A sobrepesca ocorre quando a pressão de captura ultrapassa a capacidade de manutenção ou recuperação de uma população. O problema pode afetar o tamanho dos indivíduos, a abundância das populações, a estrutura das comunidades e a rentabilidade das próprias pescarias.",
    secoes: [
      {
        titulo: "Como ocorre?",
        texto:
          "A sobrepesca pode surgir quando aumenta excessivamente o número de embarcações, dias de pesca, eficiência das artes ou capacidade de captura sem que exista avaliação adequada da capacidade de renovação dos recursos.",
      },
      {
        titulo: "Consequências",
        texto:
          "Entre os efeitos possíveis estão redução da abundância, captura de indivíduos menores, alteração da estrutura etária e aumento do esforço necessário para obter a mesma quantidade de pescado.",
      },
      {
        titulo: "Como prevenir",
        texto:
          "A prevenção pode utilizar limites de esforço, tamanhos mínimos, períodos de defeso, áreas protegidas, controlo das artes e acompanhamento científico. A participação dos pescadores é essencial para que as medidas sejam compreendidas e aplicadas.",
      },
      {
        titulo: "Responsabilidade",
        texto:
          "A sustentabilidade depende da responsabilidade conjunta do Estado, pescadores, empresas, investigadores, comerciantes e consumidores. O cumprimento das regras protege o recurso e o futuro económico das comunidades.",
      },
    ],
    pontos: [
      "Controlar o esforço de pesca.",
      "Evitar captura de juvenis.",
      "Respeitar períodos de proteção.",
      "Utilizar artes permitidas.",
      "Apoiar monitorização científica.",
    ],
    aplicacao:
      "Tema essencial para formação ambiental, gestão pesqueira e educação das comunidades.",
  },

  pescado: {
    titulo: "Qualidade do pescado",
    categoria: "Qualidade e conservação",
    imagem: imagens.pescadores,
    legenda: "A qualidade do pescado começa imediatamente após a captura.",
    introducao:
      "O pescado é um alimento altamente perecível. A qualidade pode deteriorar-se rapidamente quando a temperatura, higiene e manipulação não são adequadamente controladas. Por isso, a conservação deve começar logo depois da captura.",
    secoes: [
      {
        titulo: "Após a captura",
        texto:
          "O pescado deve ser protegido contra exposição desnecessária ao calor, sol, sujidade e contacto com superfícies contaminadas. Quanto menor for o tempo entre captura e refrigeração, maior será a possibilidade de preservar qualidade.",
      },
      {
        titulo: "Uso do gelo",
        texto:
          "O gelo permite reduzir a temperatura do pescado e retardar processos microbiológicos e enzimáticos. Deve ser produzido com água adequada e armazenado de forma higiénica.",
      },
      {
        titulo: "Higiene",
        texto:
          "Caixas, mesas, facas, embarcações e equipamentos devem ser mantidos limpos. A água utilizada na manipulação deve apresentar qualidade apropriada para a finalidade.",
      },
      {
        titulo: "Transporte",
        texto:
          "Durante o transporte, deve-se manter a cadeia de frio e evitar exposição prolongada. O acondicionamento deve proteger o pescado contra contaminação física, química e microbiológica.",
      },
      {
        titulo: "Valor comercial",
        texto:
          "Pescado bem conservado apresenta maior qualidade e pode alcançar melhor valor comercial. Reduzir perdas pós-captura significa aumentar a eficiência de toda a cadeia.",
      },
    ],
    pontos: [
      "Reduzir rapidamente a temperatura.",
      "Evitar exposição direta ao sol.",
      "Manter equipamentos limpos.",
      "Utilizar gelo adequado.",
      "Evitar contacto com contaminantes.",
      "Manter a cadeia de frio.",
    ],
    aplicacao:
      "O conteúdo é útil para pescadores, comerciantes, transformadores, técnicos e todos os agentes envolvidos na cadeia do pescado.",
  },

  comunidades: {
    titulo: "Comunidades piscatórias",
    categoria: "Pesca e desenvolvimento",
    imagem: imagens.caboLedo,
    legenda: "Comunidades e famílias ligadas à atividade pesqueira.",
    introducao:
      "A pesca possui uma dimensão social que ultrapassa a atividade de captura. Em muitas comunidades, existem relações económicas entre pescadores, comerciantes, transformadores, transportadores e consumidores.",
    secoes: [
      {
        titulo: "Economia local",
        texto:
          "O pescado movimenta diferentes atividades económicas. A captura gera procura por embarcações, motores, equipamentos, combustível, gelo, transporte, processamento e comercialização.",
      },
      {
        titulo: "Segurança alimentar",
        texto:
          "O pescado pode contribuir para a disponibilidade de proteína e outros nutrientes. A proximidade entre zonas de produção e mercados pode ser determinante para garantir acesso regular ao alimento.",
      },
      {
        titulo: "Mulheres na cadeia",
        texto:
          "As mulheres podem desempenhar funções importantes na comercialização, transformação, secagem, fumagem, conservação e distribuição. O desenvolvimento do setor deve reconhecer toda a cadeia e não apenas a captura.",
      },
      {
        titulo: "Juventude",
        texto:
          "A modernização do setor cria oportunidades relacionadas com tecnologia, processamento, logística, investigação, aquicultura e comercialização digital. A formação técnica pode aumentar a participação dos jovens.",
      },
    ],
    pontos: [
      "Valorizar conhecimentos locais.",
      "Melhorar infraestruturas de desembarque.",
      "Reduzir perdas pós-captura.",
      "Promover formação técnica.",
      "Fortalecer a cadeia de valor.",
    ],
    aplicacao:
      "Tema importante para projetos comunitários, políticas públicas, desenvolvimento local e programas de capacitação.",
  },

  investigacao: {
    titulo: "Investigação e ciência pesqueira",
    categoria: "Investigação",
    imagem: imagens.barcoCaboLedo,
    legenda: "Ciência aplicada à compreensão dos recursos aquáticos.",
    introducao:
      "A investigação científica fornece informação necessária para compreender populações de peixes, ecossistemas, tecnologia, mudanças ambientais e impactos da exploração. Sem dados confiáveis, torna-se mais difícil tomar decisões adequadas sobre o uso dos recursos.",
    secoes: [
      {
        titulo: "Biologia pesqueira",
        texto:
          "A biologia pesqueira estuda crescimento, idade, reprodução, mortalidade, alimentação e dinâmica das populações. Esses dados ajudam a compreender a capacidade de renovação dos recursos.",
      },
      {
        titulo: "Ecologia",
        texto:
          "A investigação ecológica procura compreender relações entre espécies e ambiente. Pode avaliar habitats críticos, cadeias alimentares, alterações ambientais e impactos humanos.",
      },
      {
        titulo: "Oceanografia",
        texto:
          "Temperatura, correntes, salinidade, profundidade e produtividade influenciam a distribuição dos recursos. A oceanografia ajuda a explicar mudanças espaciais e temporais na disponibilidade de pescado.",
      },
      {
        titulo: "Tecnologia",
        texto:
          "A investigação também pode melhorar equipamentos de captura, conservação, processamento e aproveitamento do pescado. O objetivo deve ser aumentar eficiência sem comprometer sustentabilidade.",
      },
      {
        titulo: "Dados para decisão",
        texto:
          "Dados de qualidade devem ser organizados, documentados e analisados. A integração entre investigação, administração pública, comunidades e setor produtivo melhora a capacidade de resposta às mudanças.",
      },
    ],
    pontos: [
      "Recolher dados de forma padronizada.",
      "Identificar corretamente as espécies.",
      "Registar esforço e capturas.",
      "Relacionar pesca e ambiente.",
      "Transformar dados em informação útil para decisão.",
    ],
    aplicacao:
      "Conteúdo destinado a estudantes, investigadores, técnicos, gestores e instituições ligadas às ciências aquáticas.",
  },
};

/* ============================================================
   CARDS
============================================================ */

const fundamentos: CardItem[] = [
  {
    id: "introducao",
    titulo: "Introdução à pesca",
    descricao:
      "Conceitos fundamentais da atividade pesqueira, sistemas de produção e relação entre recursos naturais e sociedade.",
    imagem: imagens.caboLedo,
    categoria: "Fundamentos da pesca",
  },
  {
    id: "maritima",
    titulo: "Pesca marítima",
    descricao:
      "Ambientes marinhos, recursos explorados e características da pesca realizada ao longo da costa angolana.",
    imagem: imagens.barcoCaboLedo,
    categoria: "Fundamentos da pesca",
  },
  {
    id: "continental",
    titulo: "Pesca continental",
    descricao:
      "Pesca realizada em rios, lagos, lagoas e outros ambientes de água doce.",
    imagem: imagens.pescadores,
    categoria: "Fundamentos da pesca",
  },
  {
    id: "aquicultura",
    titulo: "Aquicultura",
    descricao:
      "Princípios da produção controlada de organismos aquáticos, instalações, alimentação, água e sanidade.",
    imagem: imagens.restinga,
    categoria: "Fundamentos da pesca",
  },
  {
    id: "recursos",
    titulo: "Recursos pesqueiros",
    descricao:
      "Organismos aquáticos utilizados de forma sustentável para alimentação, economia e desenvolvimento.",
    imagem: imagens.caboLedoBarco,
    categoria: "Fundamentos da pesca",
  },
  {
    id: "ecossistemas",
    titulo: "Ecossistemas aquáticos",
    descricao:
      "Relações entre organismos, água, habitat, clima e atividade humana.",
    imagem: imagens.caboLedo,
    categoria: "Fundamentos da pesca",
  },
];

const sistemas: CardItem[] = [
  {
    id: "artesanal",
    titulo: "Pesca artesanal",
    descricao:
      "Características das pescarias artesanais, equipamentos, comunidades e principais desafios.",
    imagem: imagens.caboLedoBarco,
    categoria: "Sistemas de pesca",
  },
  {
    id: "semiindustrial",
    titulo: "Pesca semi-industrial",
    descricao:
      "Sistemas que utilizam embarcações, equipamentos e estruturas de maior capacidade operacional.",
    imagem: imagens.restinga,
    categoria: "Sistemas de pesca",
  },
  {
    id: "industrial",
    titulo: "Pesca industrial",
    descricao:
      "Organização das operações, tecnologias, gestão da frota e utilização dos recursos.",
    imagem: imagens.barcoCaboLedo,
    categoria: "Sistemas de pesca",
  },
  {
    id: "continental",
    titulo: "Pesca continental",
    descricao:
      "Particularidades das pescarias realizadas em ambientes interiores.",
    imagem: imagens.pescadores,
    categoria: "Sistemas de pesca",
  },
];

const artes: CardItem[] = [
  {
    id: "artes",
    titulo: "Artes e técnicas de pesca",
    descricao:
      "Equipamentos, métodos de captura, seletividade e utilização responsável das artes.",
    imagem: imagens.pescadores,
    categoria: "Artes e técnicas",
  },
  {
    id: "artes",
    titulo: "Redes de emalhar",
    descricao:
      "Funcionamento e princípios de operação das redes de emalhar.",
    imagem: imagens.caboLedo,
    categoria: "Artes e técnicas",
  },
  {
    id: "artes",
    titulo: "Linha e anzol",
    descricao:
      "Equipamentos, técnicas, espécies-alvo e fundamentos da pesca com anzol.",
    imagem: imagens.restinga,
    categoria: "Artes e técnicas",
  },
];

const biologia: CardItem[] = [
  {
    id: "anatomia",
    titulo: "Anatomia dos peixes",
    descricao:
      "Estruturas anatómicas e relação com alimentação, locomoção, respiração e sobrevivência.",
    imagem: imagens.pescadores,
    categoria: "Biologia e ecologia",
  },
  {
    id: "reproducao",
    titulo: "Reprodução",
    descricao:
      "Maturação sexual, desova, fecundidade e renovação das populações.",
    imagem: imagens.caboLedo,
    categoria: "Biologia e ecologia",
  },
  {
    id: "alimentacao",
    titulo: "Alimentação",
    descricao:
      "Hábitos alimentares, relações tróficas e alimentação em aquicultura.",
    imagem: imagens.barcoCaboLedo,
    categoria: "Biologia e ecologia",
  },
];

const conservacao: CardItem[] = [
  {
    id: "sobrepesca",
    titulo: "Sobrepesca",
    descricao:
      "Pressão excessiva sobre os recursos e efeitos sobre populações e ecossistemas.",
    imagem: imagens.restinga,
    categoria: "Conservação",
  },
  {
    id: "sobrepesca",
    titulo: "Pesca ilegal",
    descricao:
      "Impactos da pesca ilegal, não declarada e não regulamentada.",
    imagem: imagens.barcoCaboLedo,
    categoria: "Conservação",
  },
  {
    id: "sobrepesca",
    titulo: "Defeso",
    descricao:
      "Importância dos períodos de proteção durante fases críticas do ciclo de vida.",
    imagem: imagens.pescadores,
    categoria: "Conservação",
  },
  {
    id: "ecossistemas",
    titulo: "Áreas protegidas",
    descricao:
      "Papel da proteção dos habitats na conservação dos recursos.",
    imagem: imagens.caboLedo,
    categoria: "Conservação",
  },
];

const pescado: CardItem[] = [
  {
    id: "pescado",
    titulo: "Qualidade do pescado",
    descricao:
      "Fatores que determinam a qualidade desde a captura até ao consumidor.",
    imagem: imagens.pescadores,
    categoria: "Qualidade do pescado",
  },
  {
    id: "pescado",
    titulo: "Higiene e manipulação",
    descricao:
      "Princípios de higiene para reduzir riscos e preservar qualidade.",
    imagem: imagens.caboLedo,
    categoria: "Qualidade do pescado",
  },
  {
    id: "pescado",
    titulo: "Conservação pelo frio",
    descricao:
      "Importância da temperatura na conservação e redução da deterioração.",
    imagem: imagens.restinga,
    categoria: "Qualidade do pescado",
  },
  {
    id: "pescado",
    titulo: "Uso do gelo",
    descricao:
      "Princípios de utilização do gelo após a captura.",
    imagem: imagens.barcoCaboLedo,
    categoria: "Qualidade do pescado",
  },
];

const comunidades: CardItem[] = [
  {
    id: "comunidades",
    titulo: "Comunidades piscatórias",
    descricao:
      "Organização social e económica das comunidades ligadas à pesca.",
    imagem: imagens.caboLedo,
    categoria: "Comunidades e desenvolvimento",
  },
  {
    id: "comunidades",
    titulo: "Segurança alimentar",
    descricao:
      "Importância do pescado como alimento e fonte de nutrientes.",
    imagem: imagens.pescadores,
    categoria: "Comunidades e desenvolvimento",
  },
  {
    id: "comunidades",
    titulo: "Emprego e rendimento",
    descricao:
      "Importância económica da pesca para diferentes agentes da cadeia.",
    imagem: imagens.restinga,
    categoria: "Comunidades e desenvolvimento",
  },
  {
    id: "comunidades",
    titulo: "Mulheres na cadeia do pescado",
    descricao:
      "Participação feminina na transformação, conservação e comercialização.",
    imagem: imagens.caboLedoBarco,
    categoria: "Comunidades e desenvolvimento",
  },
];

const investigacao: CardItem[] = [
  {
    id: "investigacao",
    titulo: "Biologia pesqueira",
    descricao:
      "Métodos científicos para estudar populações, crescimento, reprodução e mortalidade.",
    imagem: imagens.caboLedo,
    categoria: "Investigação",
  },
  {
    id: "investigacao",
    titulo: "Ecologia aquática",
    descricao:
      "Relações entre organismos, habitats, cadeias alimentares e ambiente.",
    imagem: imagens.pescadores,
    categoria: "Investigação",
  },
  {
    id: "investigacao",
    titulo: "Oceanografia",
    descricao:
      "Processos físicos, químicos e biológicos que influenciam os recursos.",
    imagem: imagens.restinga,
    categoria: "Investigação",
  },
  {
    id: "investigacao",
    titulo: "Tecnologia do pescado",
    descricao:
      "Conservação, processamento, qualidade e aproveitamento dos produtos.",
    imagem: imagens.caboLedoBarco,
    categoria: "Investigação",
  },
];

/* ============================================================
   CARD
============================================================ */

function Card({
  item,
  onOpen,
}: {
  item: CardItem;
  onOpen: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item.id)}
      className="group w-full overflow-hidden rounded-2xl border border-green-100 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.imagem}
          alt={item.titulo}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            {item.categoria}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-green-900 transition group-hover:text-green-700">
          {item.titulo}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {item.descricao}
        </p>

        <div className="mt-5 inline-flex rounded-lg bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 transition group-hover:bg-green-700 group-hover:text-white">
          Explorar conteúdo
        </div>
      </div>
    </button>
  );
}

/* ============================================================
   SECÇÃO DE CARDS
============================================================ */

function Section({
  titulo,
  descricao,
  items,
  onOpen,
}: {
  titulo: string;
  descricao: string;
  items: CardItem[];
  onOpen: (id: string) => void;
}) {
  return (
    <section className="border-t border-green-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 h-1 w-14 rounded-full bg-green-600" />

          <h2 className="text-3xl font-bold tracking-tight text-green-950 md:text-4xl">
            {titulo}
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
            {descricao}
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Card
              key={`${item.id}-${item.titulo}-${index}`}
              item={item}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTEÚDO ABERTO
============================================================ */

function ConteudoAberto({
  conteudo,
  onClose,
}: {
  conteudo: Conteudo;
  onClose: () => void;
}) {
  return (
    <section
      id="conteudo-pesca"
      className="scroll-mt-24 border-t-8 border-green-700 bg-white py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              {conteudo.categoria}
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-green-950 md:text-6xl">
              {conteudo.titulo}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-fit rounded-xl border border-green-200 px-5 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50"
          >
            Fechar conteúdo
          </button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-green-100 bg-green-50 shadow-xl">
          <img
            src={conteudo.imagem}
            alt={conteudo.titulo}
            className="h-[300px] w-full object-cover md:h-[460px]"
          />

          <div className="border-t border-green-100 bg-white px-6 py-3 text-sm text-slate-500">
            {conteudo.legenda}
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
          <article>
            <p className="text-xl font-medium leading-9 text-slate-700">
              {conteudo.introducao}
            </p>

            <div className="mt-12 space-y-12">
              {conteudo.secoes.map((secao) => (
                <section key={secao.titulo}>
                  <h3 className="text-2xl font-bold text-green-900 md:text-3xl">
                    {secao.titulo}
                  </h3>

                  <div className="mt-4 h-1 w-12 rounded-full bg-green-600" />

                  <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                    {secao.texto}
                  </p>
                </section>
              ))}
            </div>
          </article>

          <aside className="h-fit rounded-3xl border border-green-100 bg-green-50 p-7 lg:sticky lg:top-28">
            <h3 className="text-xl font-bold text-green-950">
              Pontos essenciais
            </h3>

            <div className="mt-5 space-y-4">
              {conteudo.pontos.map((ponto) => (
                <div
                  key={ponto}
                  className="border-b border-green-100 pb-4 text-sm leading-7 text-slate-700 last:border-0"
                >
                  {ponto}
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-14 rounded-3xl bg-green-950 p-8 text-white md:p-10">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
            Aplicação prática
          </span>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-green-50/90">
            {conteudo.aplicacao}
          </p>
        </div>

        <div className="mt-10 border-t border-green-100 pt-8">
          <p className="text-sm leading-7 text-slate-500">
            Conteúdo educativo da AGROINOVA ANGOLA. Para atividades comerciais,
            licenciamento, exploração dos recursos, aquicultura e utilização de
            artes de pesca devem ser consultadas as normas oficiais vigentes e
            orientação técnica competente.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/pesca/especies"
            className="rounded-xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Explorar espécies
          </Link>

          <Link
            href="/biblioteca"
            className="rounded-xl border border-green-200 px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50"
          >
            Consultar biblioteca
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Voltar aos conteúdos
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PÁGINA
============================================================ */

export default function PescaPage() {
  const [conteudoAberto, setConteudoAberto] = useState<string | null>(null);

  const conteudoRef = useRef<HTMLDivElement | null>(null);

  function abrirConteudo(id: string) {
    let idFinal = id;

    /*
      Alguns cards utilizam o mesmo conteúdo-base.
      Isto permite manter muitos cards sem criar dezenas
      de páginas físicas.
    */

    if (!conteudos[idFinal]) {
      if (
        [
          "redes",
          "linha",
          "cerco",
          "arrasto",
          "armadilhas",
        ].includes(idFinal)
      ) {
        idFinal = "artes";
      }

      if (
        [
          "defeso",
          "pesca-ilegal",
          "areas-protegidas",
          "habitats",
        ].includes(idFinal)
      ) {
        idFinal = "sobrepesca";
      }
    }

    if (!conteudos[idFinal]) {
      idFinal = "introducao";
    }

    setConteudoAberto(idFinal);

    setTimeout(() => {
      document
        .getElementById("conteudo-pesca")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 80);
  }

  function fecharConteudo() {
    setConteudoAberto(null);

    window.setTimeout(() => {
      document
        .getElementById("conhecimento")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  }

  const conteudoSelecionado = conteudoAberto
    ? conteudos[conteudoAberto]
    : null;

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[680px] overflow-hidden">
        <img
          src={imagemPrincipal}
          alt="Pescadores em Angola"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/75 to-green-950/25" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              Conhecimento e inovação para o setor pesqueiro angolano
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              Pesca e
              <br />
              Recursos Aquáticos
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              Conheça a pesca marítima e continental, a aquicultura, os
              recursos pesqueiros, os ecossistemas, as comunidades e os
              conhecimentos técnicos necessários para uma utilização sustentável
              dos recursos aquáticos de Angola.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#conhecimento"
                className="rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-green-500"
              >
                Explorar conhecimento
              </a>

              <Link
                href="/pesca/especies"
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explorar espécies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          INTRODUÇÃO
      ====================================================== */}

      <section
        id="conhecimento"
        className="bg-gradient-to-b from-green-50 to-white py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-4 h-1 w-14 rounded-full bg-green-600" />

            <h2 className="text-3xl font-bold text-green-950 md:text-5xl">
              Conhecer a pesca é compreender os ecossistemas e as pessoas
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A pesca não se limita à captura de peixes. É uma atividade
              relacionada com biologia, ecologia, oceanografia, tecnologia,
              alimentação, economia, cultura e conservação dos recursos
              naturais.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Nesta área da AGROINOVA ANGOLA, o conhecimento está organizado
              para apoiar estudantes, técnicos, investigadores, pescadores,
              produtores, empreendedores e comunidades.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Angola possui cerca de 1.650 km de costa e uma grande diversidade
              de ambientes marinhos e costeiros. A gestão destes recursos exige
              conhecimento científico, fiscalização, participação das
              comunidades e utilização responsável.
            </p>

            <div className="mt-8">
              <Link
                href="/biblioteca"
                className="inline-flex rounded-xl bg-green-800 px-6 py-3.5 font-semibold text-white transition hover:bg-green-700"
              >
                Consultar biblioteca
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={imagens.caboLedoBarco}
              alt="Barco de pesca em Cabo Ledo, Angola"
              className="h-[430px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          FUNDAMENTOS
      ====================================================== */}

      <Section
        titulo="Fundamentos da pesca"
        descricao="Comece pelos conceitos essenciais para compreender a atividade pesqueira, os ambientes aquáticos e os recursos explorados."
        items={fundamentos}
        onOpen={abrirConteudo}
      />

      {/* ======================================================
          SISTEMAS
      ====================================================== */}

      <section className="bg-green-50">
        <Section
          titulo="Sistemas de pesca"
          descricao="Conheça diferentes formas de organização da atividade pesqueira, desde sistemas artesanais até operações de maior escala."
          items={sistemas}
          onOpen={abrirConteudo}
        />
      </section>

      {/* ======================================================
          ARTES
      ====================================================== */}

      <Section
        titulo="Artes e técnicas de pesca"
        descricao="Explore equipamentos, métodos de captura, seletividade e princípios técnicos utilizados nas diferentes pescarias."
        items={artes}
        onOpen={abrirConteudo}
      />

      {/* ======================================================
          BIOLOGIA
      ====================================================== */}

      <section className="bg-green-50">
        <Section
          titulo="Biologia e ecologia dos recursos aquáticos"
          descricao="Compreenda como os organismos aquáticos vivem, crescem, reproduzem-se, alimentam-se e interagem com o ambiente."
          items={biologia}
          onOpen={abrirConteudo}
        />
      </section>

      {/* ======================================================
          CONSERVAÇÃO
      ====================================================== */}

      <Section
        titulo="Conservação e sustentabilidade"
        descricao="A utilização dos recursos pesqueiros exige conhecimento científico, responsabilidade ambiental e estratégias de gestão."
        items={conservacao}
        onOpen={abrirConteudo}
      />

      {/* ======================================================
          PESCADO
      ====================================================== */}

      <section className="bg-green-50">
        <Section
          titulo="Qualidade e conservação do pescado"
          descricao="Conheça os princípios que ajudam a preservar a qualidade dos produtos da pesca desde a captura até ao consumidor."
          items={pescado}
          onOpen={abrirConteudo}
        />
      </section>

      {/* ======================================================
          COMUNIDADES
      ====================================================== */}

      <Section
        titulo="Pesca, comunidades e desenvolvimento"
        descricao="A pesca representa trabalho, alimentação, rendimento, conhecimento tradicional e oportunidades de desenvolvimento."
        items={comunidades}
        onOpen={abrirConteudo}
      />

      {/* ======================================================
          INVESTIGAÇÃO
      ====================================================== */}

      <section className="bg-green-50">
        <Section
          titulo="Investigação e ciência"
          descricao="Uma base de conhecimento para apoiar estudos sobre recursos pesqueiros, ecossistemas, tecnologia, gestão e alterações ambientais."
          items={investigacao}
          onOpen={abrirConteudo}
        />
      </section>

      {/* ======================================================
          CONTEÚDO DINÂMICO
      ====================================================== */}

      {conteudoSelecionado && (
        <div ref={conteudoRef}>
          <ConteudoAberto
            conteudo={conteudoSelecionado}
            onClose={fecharConteudo}
          />
        </div>
      )}

      {/* ======================================================
          BLOCO FINAL
      ====================================================== */}

      <section className="bg-green-950 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-green-400" />

          <h2 className="text-3xl font-bold md:text-5xl">
            O conhecimento é a base de uma pesca sustentável
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-50/80">
            Explore as espécies, aprofunde os seus conhecimentos, consulte
            materiais científicos e acompanhe o desenvolvimento do setor
            pesqueiro e aquícola de Angola.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/pesca/especies"
              className="rounded-xl bg-white px-7 py-3.5 font-semibold text-green-900 transition hover:bg-green-50"
            >
              Espécies
            </Link>

            <Link
              href="/biblioteca"
              className="rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Biblioteca
            </Link>

            <Link
              href="/investigacao"
              className="rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Investigação
            </Link>

            <Link
              href="/dados"
              className="rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Dados oficiais
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}