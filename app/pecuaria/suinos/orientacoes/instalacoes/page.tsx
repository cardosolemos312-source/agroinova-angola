import Link from "next/link";

type Imagem = {
  titulo: string;
  descricao: string;
  url: string;
  fonte: string;
};

type Tema = {
  id: string;
  titulo: string;
  introducao: string;
  explicacao: string[];
  pontos: string[];
  imagem: Imagem;
};

const imagens = {
  pocilga:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Wiki_loves_Africa_Zimbabwe.._pigsty.jpg?width=1600",

  pocilgaCamaroes:
    "https://commons.wikimedia.org/wiki/Special:FilePath/A_pigsty.jpg?width=1600",

  pocilgaNigeria:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Pig_in_a_pen.jpg?width=1600",

  leitões:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Piglets_in_a_Shelter_at_a_Farm.jpg?width=1600",

  porcaLeitoes:
    "https://commons.wikimedia.org/wiki/Special:FilePath/A_sow_and_piglet_in_a_pigsty.jpg?width=1600",

  bebedouro:
    "https://commons.wikimedia.org/wiki/Special:FilePath/A_pig_in_the_drinkers.jpg?width=1600",

  pocilgaSalka:
    "https://commons.wikimedia.org/wiki/Special:FilePath/A_pig_pen_in_Salka%2C_Nigeria.jpg?width=1600",

  pocilgaRuanda:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ikiraro_cy%27ingurube.jpg?width=1600",

  alimentacao:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Feeding_pig.jpg?width=1600",
};

const temas: Tema[] = [
  {
    id: "localizacao",
    titulo: "Localização da exploração",
    introducao:
      "A escolha do local onde será construída a pocilga é uma decisão técnica que influencia diretamente a higiene, o conforto térmico, a drenagem, a biossegurança e os custos de funcionamento da exploração.",
    explicacao: [
      "Em Angola, a instalação não deve ser colocada simplesmente no espaço disponível. É necessário avaliar o relevo, o risco de inundação, a circulação de água durante a época chuvosa, a exposição solar, a direção predominante dos ventos, a proximidade de habitações e a facilidade de acesso.",
      "O terreno deve permitir o escoamento adequado das águas pluviais e das águas utilizadas na limpeza. Uma pocilga construída numa zona baixa ou sujeita a acumulação de água pode apresentar problemas persistentes de humidade, lama, odores, proliferação de insetos e contaminação.",
      "A FAO recomenda terreno bem drenado e uma localização que facilite o acesso e a manutenção da exploração. Em sistemas tropicais, a localização deve também aproveitar as condições naturais de ventilação e sombra.",
    ],
    pontos: [
      "Preferir terreno firme e bem drenado.",
      "Evitar zonas sujeitas a alagamentos.",
      "Avaliar o escoamento das águas da chuva.",
      "Facilitar o acesso para transporte de ração e animais.",
      "Manter distância adequada de habitações e outras atividades sensíveis.",
      "Evitar locais onde águas contaminadas possam atingir poços, rios ou outras fontes de água.",
      "Considerar a direção dos ventos e a exposição solar.",
    ],
    imagem: {
      titulo: "Pocilga em contexto africano",
      descricao:
        "Exemplo de instalação para criação de suínos fotografada no Zimbabwe.",
      url: imagens.pocilga,
      fonte: "Wikimedia Commons — Wiki Loves Africa / AndilePam — CC BY-SA 4.0",
    },
  },

  {
    id: "estrutura",
    titulo: "Estrutura da pocilga",
    introducao:
      "A pocilga deve ser concebida como uma estrutura funcional. O objetivo não é apenas proteger os animais da chuva, mas criar condições para alimentação, descanso, limpeza, reprodução, observação e controlo sanitário.",
    explicacao: [
      "Uma instalação adequada deve permitir que o produtor trabalhe com segurança e consiga observar os animais diariamente. A estrutura deve possuir cobertura, paredes ou divisórias adequadas, piso resistente, portas funcionais, sistema de drenagem e áreas organizadas de acordo com a categoria dos animais.",
      "Em pequenas explorações familiares, não é obrigatório construir instalações sofisticadas. É possível utilizar materiais disponíveis localmente, desde que apresentem resistência, facilidade de limpeza e segurança para os animais.",
      "A FAO apresenta sistemas simples de pocilgas como alternativas viáveis para pequenos produtores, desde que o projeto assegure ventilação, limpeza, drenagem e proteção dos animais.",
    ],
    pontos: [
      "Cobertura resistente à chuva e ao calor.",
      "Divisórias firmes e sem pontas perigosas.",
      "Piso resistente e lavável nas áreas de confinamento.",
      "Portas suficientemente largas para entrada e saída dos animais.",
      "Boa circulação para o tratador.",
      "Separação das diferentes categorias produtivas.",
      "Facilidade de limpeza e desinfecção.",
    ],
    imagem: {
      titulo: "Estrutura de pocilga",
      descricao:
        "Exemplo de instalação para suínos em contexto africano.",
      url: imagens.pocilgaCamaroes,
      fonte:
        "Wikimedia Commons — A pigsty, Camarões — WepngongMaureen",
    },
  },

  {
    id: "ventilacao",
    titulo: "Ventilação e conforto térmico",
    introducao:
      "A ventilação é uma das partes mais importantes da instalação de suínos, especialmente em regiões quentes. O objetivo é remover calor, humidade, poeiras e gases, mantendo condições adequadas para os animais.",
    explicacao: [
      "Os suínos são particularmente sensíveis ao ambiente térmico porque possuem capacidade limitada de dissipar calor através da transpiração. Por isso, instalações tropicais devem permitir circulação de ar e reduzir a acumulação de calor.",
      "A construção deve aproveitar a ventilação natural sempre que possível. Paredes excessivamente fechadas podem dificultar a circulação de ar. Por outro lado, aberturas mal posicionadas podem criar correntes de ar desconfortáveis, principalmente para leitões.",
      "Em Angola, esta questão assume importância diferente conforme a região. Explorações em zonas mais quentes devem dar atenção especial à sombra, altura da cobertura, orientação da instalação, circulação de ar e disponibilidade de água.",
    ],
    pontos: [
      "Priorizar ventilação natural.",
      "Evitar instalações completamente fechadas em regiões quentes.",
      "Utilizar cobertura com boa capacidade de proteção solar.",
      "Manter entradas e saídas de ar desobstruídas.",
      "Evitar acumulação de humidade.",
      "Proteger leitões contra correntes de ar excessivas.",
      "Observar sinais de stress térmico.",
    ],
    imagem: {
      titulo: "Pocilga aberta",
      descricao:
        "Instalação africana com estrutura aberta, permitindo circulação de ar.",
      url: imagens.pocilgaNigeria,
      fonte:
        "Wikimedia Commons — Pig in a pen, Nigéria — Andikan Efiok Eduok",
    },
  },

  {
    id: "cobertura",
    titulo: "Cobertura, sombra e proteção solar",
    introducao:
      "A cobertura deve proteger os animais da radiação solar direta e da chuva, sem impedir a ventilação.",
    explicacao: [
      "Em regiões tropicais, a cobertura tem uma função fundamental no controlo do ambiente interno. Uma cobertura inadequada pode transformar a pocilga num espaço excessivamente quente durante as horas de maior radiação solar.",
      "O projeto deve proporcionar sombra suficiente e, quando possível, utilizar beirais que reduzam a entrada direta de chuva. A altura e inclinação do telhado devem ser compatíveis com o material utilizado e com as condições climáticas locais.",
      "Materiais disponíveis localmente podem ser utilizados, desde que sejam resistentes, seguros e não provoquem riscos para os animais. Chapas metálicas podem aquecer bastante quando mal instaladas, sendo importante combinar cobertura adequada com ventilação.",
    ],
    pontos: [
      "Garantir sombra durante o período mais quente.",
      "Evitar exposição direta dos animais ao sol.",
      "Utilizar beirais para reduzir entrada de chuva.",
      "Manter circulação de ar abaixo da cobertura.",
      "Inspecionar regularmente fugas e danos no telhado.",
      "Adaptar o tipo de cobertura ao clima e aos recursos disponíveis.",
    ],
    imagem: {
      titulo: "Abrigo para suínos",
      descricao:
        "Exemplo de abrigo utilizado para proteger suínos em exploração rural.",
      url: imagens.leitões,
      fonte:
        "Wikimedia Commons — Piglets in a Shelter at a Farm, Nigéria — Andikan Efiok Eduok",
    },
  },

  {
    id: "piso",
    titulo: "Piso e drenagem",
    introducao:
      "O piso é uma das componentes estruturais que mais influencia a higiene da pocilga. Deve permitir limpeza, drenagem e segurança dos animais.",
    explicacao: [
      "A FAO recomenda que os pisos de instalações confinadas sejam resistentes e facilmente laváveis. Em sistemas com piso de betão, deve existir uma inclinação adequada para conduzir líquidos para a zona de drenagem.",
      "Um piso completamente plano favorece a permanência de água, urina e resíduos. Já um piso excessivamente inclinado pode dificultar a movimentação dos animais e aumentar o risco de escorregamento.",
      "Em explorações angolanas, especialmente onde a limpeza utiliza água em quantidade, o sistema de drenagem deve ser pensado antes da construção. A água contaminada não deve ser direcionada para fontes de consumo humano ou para cursos de água sem tratamento adequado.",
    ],
    pontos: [
      "Utilizar piso resistente e não cortante.",
      "Garantir inclinação suficiente para drenagem.",
      "Evitar acumulação permanente de água.",
      "Manter a superfície com boa aderência.",
      "Facilitar lavagem e remoção de matéria orgânica.",
      "Direcionar águas residuais para sistema apropriado.",
    ],
    imagem: {
      titulo: "Instalação para suínos",
      descricao:
        "Exemplo de recinto de criação de suínos em África.",
      url: imagens.pocilgaSalka,
      fonte:
        "Wikimedia Commons — Pig pen in Salka, Nigéria — Kambai Akau",
    },
  },

  {
    id: "parques",
    titulo: "Divisão dos parques",
    introducao:
      "A organização dos parques deve acompanhar o sistema de produção e as diferentes categorias de animais existentes na exploração.",
    explicacao: [
      "Não é recomendável manter todos os animais indiscriminadamente no mesmo espaço. Leitões, animais em crescimento, animais de engorda, porcas gestantes, porcas em lactação e reprodutores apresentam necessidades diferentes.",
      "A divisão dos parques facilita o maneio, a alimentação, a observação sanitária, a limpeza e o controlo da reprodução.",
      "Em pequenas explorações, a separação pode ser simples, mas deve existir pelo menos uma organização funcional que permita isolar animais doentes, fêmeas com crias e animais destinados à reprodução.",
    ],
    pontos: [
      "Parque para leitões.",
      "Parque para crescimento.",
      "Parque para engorda.",
      "Área para porcas gestantes.",
      "Área de maternidade.",
      "Área para reprodutores.",
      "Espaço separado para animais doentes ou em observação.",
    ],
    imagem: {
      titulo: "Parque de suínos",
      descricao:
        "Exemplo de animais mantidos em recinto organizado.",
      url: imagens.pocilgaRuanda,
      fonte:
        "Wikimedia Commons — Pig in a pigsty, Ruanda — Endikuemmy",
    },
  },

  {
    id: "maternidade",
    titulo: "Maternidade e área de leitões",
    introducao:
      "A maternidade exige atenção especial porque reúne uma porca e uma ninhada com necessidades térmicas e sanitárias diferentes.",
    explicacao: [
      "A área destinada à porca em lactação deve permitir alimentação, descanso, acesso à água e acompanhamento da ninhada. Ao mesmo tempo, os leitões precisam de uma zona protegida onde possam descansar e alimentar-se sem serem esmagados pela mãe.",
      "A criação de uma área específica para leitões, frequentemente designada creep area ou zona de abrigo dos leitões, é uma estratégia utilizada para proporcionar maior proteção aos animais jovens.",
      "A limpeza da maternidade deve ser rigorosa. A instalação deve permitir remoção de fezes, restos de alimento e material contaminado sem perturbar excessivamente a porca e os leitões.",
    ],
    pontos: [
      "Separar funcionalmente a área dos leitões.",
      "Proporcionar abrigo contra correntes de ar.",
      "Garantir água limpa para a porca.",
      "Facilitar observação diária da ninhada.",
      "Evitar pisos escorregadios.",
      "Limpar e preparar a maternidade antes da entrada da porca.",
      "Reduzir riscos de esmagamento dos leitões.",
    ],
    imagem: {
      titulo: "Porca e leitão",
      descricao:
        "Porca e leitão numa instalação de produção suína em África.",
      url: imagens.porcaLeitoes,
      fonte:
        "Wikimedia Commons — Pig farming, Camarões — Adesolive",
    },
  },

  {
    id: "alimentadores",
    titulo: "Comedouros",
    introducao:
      "O comedouro deve permitir que o alimento seja fornecido de forma limpa, controlada e acessível aos animais.",
    explicacao: [
      "O equipamento de alimentação deve ser resistente e estar dimensionado para o número e categoria dos animais. Um comedouro inadequado pode aumentar desperdícios, contaminação do alimento e competição entre animais.",
      "A posição do comedouro também deve ser considerada. Deve permanecer numa área que facilite a limpeza e que não seja constantemente inundada ou contaminada com fezes.",
      "Para pequenos produtores, soluções simples podem ser utilizadas, desde que sejam resistentes, estáveis e fáceis de lavar.",
    ],
    pontos: [
      "Utilizar materiais resistentes.",
      "Evitar recipientes que tombem facilmente.",
      "Facilitar a lavagem.",
      "Reduzir desperdício de ração.",
      "Separar alimentação de áreas de defecação.",
      "Dimensionar o equipamento conforme o número de animais.",
    ],
    imagem: {
      titulo: "Alimentação de suíno",
      descricao:
        "Suíno alimentando-se dentro da sua instalação.",
      url: imagens.alimentacao,
      fonte:
        "Wikimedia Commons — Feeding pig — Chimaroke2022, Nigéria",
    },
  },

  {
    id: "bebedouros",
    titulo: "Bebedouros e sistema de água",
    introducao:
      "A água deve ser considerada uma infraestrutura fundamental da pocilga e não apenas um complemento da alimentação.",
    explicacao: [
      "Os suínos precisam de acesso contínuo a água de qualidade adequada. A localização dos bebedouros deve permitir que os animais bebam sem dificuldade e que o equipamento possa ser limpo e inspecionado.",
      "A disponibilidade de água assume importância especial durante períodos de temperaturas elevadas. A restrição de água pode agravar o stress térmico e prejudicar o desempenho produtivo.",
      "Em Angola, o projeto deve considerar a segurança da fonte de água, a regularidade do abastecimento e a possibilidade de armazenamento. Quando existe dependência de furos, cisternas ou reservatórios, a manutenção da infraestrutura deve fazer parte da gestão da exploração.",
    ],
    pontos: [
      "Disponibilizar água limpa.",
      "Verificar diariamente os bebedouros.",
      "Evitar fugas que mantenham o piso permanentemente molhado.",
      "Proteger reservatórios contra contaminação.",
      "Garantir abastecimento mesmo durante períodos de interrupção.",
      "Ajustar a altura do equipamento à categoria animal.",
    ],
    imagem: {
      titulo: "Bebedouro de suínos",
      descricao:
        "Suíno junto a sistema de fornecimento de água.",
      url: imagens.bebedouro,
      fonte:
        "Wikimedia Commons — A pig in the drinkers — Beatrice Kaseke, Zimbabwe",
    },
  },

  {
    id: "limpeza",
    titulo: "Limpeza e higienização",
    introducao:
      "A instalação deve ser projetada para que a limpeza faça parte do funcionamento diário da exploração.",
    explicacao: [
      "Uma pocilga difícil de limpar tende a acumular matéria orgânica, humidade e odores. Além de prejudicar o conforto dos animais, a acumulação de resíduos pode aumentar os riscos sanitários.",
      "A limpeza deve envolver remoção de fezes e restos de alimento, lavagem das superfícies quando aplicável, manutenção dos bebedouros e comedouros e desinfecção de acordo com um programa sanitário definido.",
      "O desenho da instalação deve permitir acesso aos diferentes espaços. Cantos inacessíveis, superfícies excessivamente rugosas e fissuras dificultam a higienização.",
    ],
    pontos: [
      "Remover fezes regularmente.",
      "Retirar alimento deteriorado.",
      "Lavar equipamentos de alimentação e água.",
      "Manter os canais de drenagem desobstruídos.",
      "Desinfectar conforme orientação veterinária.",
      "Respeitar períodos de secagem quando aplicável.",
      "Manter equipamentos de limpeza separados da área de alimentação.",
    ],
    imagem: {
      titulo: "Pocilga rural",
      descricao:
        "Exemplo real de estrutura utilizada na criação de suínos.",
      url: imagens.pocilgaCamaroes,
      fonte:
        "Wikimedia Commons — A pigsty, Camarões — WepngongMaureen",
    },
  },

  {
    id: "dejetos",
    titulo: "Gestão de dejetos e águas residuais",
    introducao:
      "A gestão dos dejetos deve ser incorporada ao projeto da exploração desde o início. Não se trata apenas de higiene: envolve ambiente, saúde pública e possibilidade de aproveitamento agrícola.",
    explicacao: [
      "Fezes, urina, restos de água de lavagem e outros resíduos devem ser conduzidos de forma controlada. O lançamento indiscriminado pode contaminar solos e fontes de água e criar problemas de odor e insetos.",
      "Em explorações familiares ou de pequena escala, uma estratégia simples de recolha e armazenamento pode ser adotada, desde que impeça o contacto direto com pessoas, animais e fontes de água.",
      "Os resíduos orgânicos podem, quando tecnicamente apropriado e devidamente tratados, integrar sistemas de produção de composto ou outras formas de aproveitamento agrícola. O método deve considerar os riscos sanitários e ambientais.",
    ],
    pontos: [
      "Construir drenagem antes de iniciar a exploração.",
      "Evitar descarga direta em rios e valas.",
      "Manter dejetos afastados de fontes de água potável.",
      "Controlar odores e proliferação de moscas.",
      "Avaliar aproveitamento agrícola dos resíduos tratados.",
      "Evitar acumulação de lama junto à pocilga.",
    ],
    imagem: {
      titulo: "Instalação de criação suína",
      descricao:
        "Exemplo de sistema de criação que permite observar a organização do recinto.",
      url: imagens.pocilgaNigeria,
      fonte:
        "Wikimedia Commons — Pig in a pen, Nigéria — Andikan Efiok Eduok",
    },
  },

  {
    id: "biosseguranca",
    titulo: "Biossegurança da instalação",
    introducao:
      "A instalação também funciona como uma barreira sanitária. Quanto melhor organizada, mais fácil será reduzir a entrada e disseminação de agentes infecciosos.",
    explicacao: [
      "A biossegurança começa no desenho da exploração. O acesso de pessoas, veículos, animais externos e equipamentos deve ser controlado de acordo com o nível de risco.",
      "A entrada de novos animais deve ser cuidadosamente gerida. Sempre que possível, deve existir uma área separada para observação ou quarentena antes da introdução no grupo principal.",
      "Também é importante evitar o contacto dos suínos com animais errantes, roedores e outros potenciais vetores. A FAO inclui medidas como controlo de roedores, separação de espécies e organização dos grupos entre as práticas relevantes de biossegurança.",
    ],
    pontos: [
      "Controlar entrada de pessoas.",
      "Evitar entrada de animais estranhos.",
      "Controlar roedores.",
      "Separar animais novos antes da introdução.",
      "Manter equipamentos de limpeza organizados.",
      "Evitar partilha indiscriminada de equipamentos entre explorações.",
      "Separar animais doentes.",
      "Manter registos sanitários.",
    ],
    imagem: {
      titulo: "Instalação suína",
      descricao:
        "Recinto de criação de suínos utilizado em contexto africano.",
      url: imagens.pocilgaSalka,
      fonte:
        "Wikimedia Commons — Pig pen in Salka, Nigéria — Kambai Akau",
    },
  },
];

const sistemas = [
  {
    titulo: "Sistema familiar",
    texto:
      "Pode utilizar estruturas simples e materiais disponíveis localmente, desde que sejam resistentes, limpas, seguras e adequadas ao número de animais.",
  },
  {
    titulo: "Sistema semi-intensivo",
    texto:
      "Combina instalações de confinamento com áreas externas controladas. Exige atenção à vedação, higiene, drenagem, disponibilidade de água e controlo sanitário.",
  },
  {
    titulo: "Sistema comercial",
    texto:
      "Exige maior especialização da infraestrutura, divisão por fases produtivas, gestão de resíduos, biossegurança, controlo ambiental e registos técnicos.",
  },
];

const checklist = [
  "O terreno não fica sujeito a inundação?",
  "Existe drenagem adequada?",
  "A pocilga recebe sombra suficiente?",
  "Existe ventilação natural?",
  "O piso pode ser limpo facilmente?",
  "A água chega aos animais de forma contínua?",
  "Os comedouros estão protegidos da contaminação?",
  "Existe separação entre categorias de animais?",
  "Existe espaço específico para maternidade?",
  "Existe possibilidade de isolar animais doentes?",
  "Os resíduos são recolhidos de forma controlada?",
  "É possível limpar e desinfectar a instalação?",
  "A entrada de pessoas e animais pode ser controlada?",
  "A instalação permite expansão futura?",
];

function ImagemTecnica({ imagem }: { imagem: Imagem }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <a
        href={imagem.url}
        target="_blank"
        rel="noopener noreferrer"
        title="Abrir imagem em tamanho maior"
      >
        <img
          src={imagem.url}
          alt={imagem.titulo}
          className="h-72 w-full object-cover transition duration-500 hover:scale-105"
          loading="lazy"
        />
      </a>

      <figcaption className="border-t border-slate-100 bg-white px-5 py-4">
        <p className="font-semibold text-slate-800">{imagem.titulo}</p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          {imagem.descricao}
        </p>

        <p className="mt-3 text-xs leading-5 text-slate-500">
          Fonte da imagem: {imagem.fonte}
        </p>

        <a
          href={imagem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-bold text-green-700 hover:text-green-900"
        >
          Abrir imagem em tamanho maior →
        </a>
      </figcaption>
    </figure>
  );
}

export default function InstalacoesSuinosPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="border-b border-green-100 bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap gap-2 text-sm text-green-100">
              <Link href="/" className="hover:text-white">
                Início
              </Link>
              <span>›</span>
              <Link href="/pecuaria" className="hover:text-white">
                Pecuária
              </Link>
              <span>›</span>
              <Link
                href="/pecuaria/suinos/orientacoes/racas"
                className="hover:text-white"
              >
                Suínos
              </Link>
              <span>›</span>
              <strong>Instalações</strong>
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-green-200">
              AGROINOVA ANGOLA · SUINICULTURA
            </p>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Instalações para Suínos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">
              Princípios técnicos para planear, construir, organizar e manter
              instalações destinadas à criação de suínos, considerando clima,
              higiene, bem-estar, biossegurança e condições reais de produção
              em Angola.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-green-100 bg-white p-7 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Enquadramento técnico
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              A instalação faz parte do sistema de produção
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                A qualidade das instalações influencia diretamente o desempenho
                produtivo, a saúde, o bem-estar dos animais, a facilidade de
                maneio e os custos da exploração. Uma pocilga mal localizada,
                mal ventilada ou difícil de limpar pode transformar problemas
                aparentemente simples em perdas produtivas e sanitárias.
              </p>

              <p>
                Por essa razão, a construção deve ser pensada antes da compra
                dos animais. O produtor deve avaliar o número de animais, a
                finalidade da exploração, a disponibilidade de água, os
                materiais de construção, o clima da região, a capacidade de
                limpeza e o mercado.
              </p>

              <p>
                Para Angola, não existe uma única solução construtiva que possa
                ser aplicada de forma idêntica em todas as províncias. Uma
                instalação para uma pequena exploração familiar no Huambo pode
                exigir decisões diferentes de uma unidade situada numa zona
                muito quente ou húmida. O princípio deve ser adaptar a
                construção às condições locais sem comprometer os requisitos
                básicos de higiene, segurança e bem-estar.
              </p>
            </div>
          </div>

          <ImagemTecnica
            imagem={{
              titulo: "Pocilga em contexto africano",
              descricao:
                "Exemplo real de instalação para suínos fotografada no Zimbabwe.",
              url: imagens.pocilga,
              fonte:
                "Wikimedia Commons — Wiki Loves Africa / AndilePam — CC BY-SA 4.0",
            }}
          />
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Princípios fundamentais
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              O que uma boa instalação deve proporcionar
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A instalação deve ser avaliada pela sua capacidade de resolver
              problemas concretos da exploração, e não apenas pela aparência
              da construção.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Conforto térmico",
                "Reduzir calor excessivo, chuva e exposição solar direta.",
              ],
              [
                "Higiene",
                "Facilitar limpeza, lavagem, desinfecção e remoção de resíduos.",
              ],
              [
                "Drenagem",
                "Evitar acumulação de água, urina e lama.",
              ],
              [
                "Biossegurança",
                "Reduzir a entrada e circulação de agentes de doença.",
              ],
            ].map(([titulo, texto]) => (
              <div
                key={titulo}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="font-bold text-slate-900">{titulo}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMAS */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Guia técnico
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900">
            Componentes das instalações
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Cada tema abaixo apresenta explicação técnica, pontos de atenção,
            fotografia real e aplicação prática para a exploração suína.
          </p>
        </div>

        <div className="mt-10 space-y-12">
          {temas.map((tema, index) => (
            <article
              key={tema.id}
              id={tema.id}
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <ImagemTecnica imagem={tema.imagem} />

                <div>
                  <p className="text-sm font-bold text-green-700">
                    Tema {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-slate-900 md:text-3xl">
                    {tema.titulo}
                  </h3>

                  <p className="mt-5 text-base font-semibold leading-7 text-slate-700">
                    {tema.introducao}
                  </p>

                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                    {tema.explicacao.map((paragrafo) => (
                      <p key={paragrafo}>{paragrafo}</p>
                    ))}
                  </div>

                  <div className="mt-7 rounded-2xl bg-green-50 p-6">
                    <h4 className="font-bold text-green-950">
                      Pontos técnicos a verificar
                    </h4>

                    <ul className="mt-4 space-y-3 text-sm leading-6 text-green-950">
                      {tema.pontos.map((ponto) => (
                        <li key={ponto} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                          <span>{ponto}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SISTEMAS */}
      <section className="bg-green-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-300">
              Sistemas de produção
            </p>

            <h2 className="mt-3 text-3xl font-black">
              A instalação deve corresponder à escala da exploração
            </h2>

            <p className="mt-4 leading-7 text-green-100">
              Não se deve construir uma instalação maior ou mais complexa do
              que a capacidade de gestão da exploração. Ao mesmo tempo, uma
              instalação demasiado pequena pode provocar sobrelotação,
              problemas sanitários e dificuldade de maneio.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sistemas.map((sistema) => (
              <div
                key={sistema.titulo}
                className="rounded-3xl border border-green-800 bg-green-900/70 p-7"
              >
                <h3 className="text-xl font-bold">{sistema.titulo}</h3>

                <p className="mt-4 text-sm leading-7 text-green-100">
                  {sistema.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REALIDADE ANGOLANA */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="rounded-3xl border border-green-100 bg-green-50 p-7 md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Aplicação em Angola
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900">
            Construir de acordo com a realidade local
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              No contexto angolano, o dimensionamento das instalações deve
              considerar a disponibilidade e o custo dos materiais, a água, a
              mão de obra, o tipo de alimentação, o tamanho da exploração e as
              condições climáticas locais.
            </p>

            <p>
              Em pequenas explorações, materiais locais podem reduzir o
              investimento inicial, mas não devem ser utilizados de forma que
              comprometam a resistência, a higiene ou a segurança. Madeira,
              blocos, tijolos, betão e chapas podem ter diferentes aplicações,
              desde que o projeto seja tecnicamente adequado.
            </p>

            <p>
              Nas regiões mais quentes, a ventilação e a sombra devem receber
              atenção especial. Em regiões com períodos de chuva intensa, a
              drenagem e a localização em terreno elevado tornam-se ainda mais
              importantes.
            </p>

            <p>
              Para explorações que pretendem crescer, é aconselhável planear
              desde o início uma possibilidade de expansão. Uma estrutura
              modular permite acrescentar parques sem alterar completamente o
              funcionamento da unidade.
            </p>
          </div>
        </div>
      </section>

      {/* DIMENSIONAMENTO - SEM INVENTAR UMA REGRA UNIVERSAL */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                Dimensionamento
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-900">
                O espaço deve ser calculado por categoria e sistema
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Não é tecnicamente correto aplicar uma única área fixa a todos
                os suínos. As necessidades variam conforme peso, idade,
                finalidade, sistema de alojamento, clima, organização do grupo
                e objetivos produtivos.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Por isso, antes da construção definitiva, o produtor deve
                definir quantas porcas, reprodutores, leitões, animais de
                crescimento e animais de engorda pretende manter. O
                dimensionamento deve ser posteriormente confirmado com um
                técnico ou médico veterinário responsável pela exploração.
              </p>
            </div>

            <ImagemTecnica
              imagem={{
                titulo: "Instalação para criação de suínos",
                descricao:
                  "Exemplo de recinto destinado à criação de suínos.",
                url: imagens.pocilga,
                fonte:
                  "Wikimedia Commons — Wiki Loves Africa / AndilePam — CC BY-SA 4.0",
              }}
            />
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Checklist de campo
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900">
            Antes de construir ou ampliar uma pocilga
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Esta lista pode ser utilizada pelo produtor, estudante ou técnico
            durante uma visita à exploração.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {checklist.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <span className="mr-3 font-bold text-green-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="bg-red-50 py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-red-700">
              Atenção
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Erros frequentes nas instalações
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Construir em terreno sujeito a inundação.",
              "Fechar completamente as laterais numa região quente.",
              "Não criar sistema de drenagem.",
              "Manter o piso constantemente molhado.",
              "Colocar demasiados animais num espaço reduzido.",
              "Misturar animais de categorias muito diferentes.",
              "Não prever área para animais doentes.",
              "Instalar bebedouros que provocam desperdício de água.",
              "Construir sem considerar o acesso para limpeza.",
              "Deixar resíduos acumulados junto aos parques.",
              "Não controlar a entrada de pessoas e animais.",
              "Construir sem possibilidade de expansão.",
            ].map((erro) => (
              <div
                key={erro}
                className="rounded-2xl border border-red-100 bg-white p-5"
              >
                <p className="text-sm font-medium leading-6 text-slate-700">
                  {erro}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Referências técnicas
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900">
            Fontes para aprofundamento académico
          </h2>

          <div className="mt-7 space-y-5 text-sm leading-7 text-slate-600">
            <div>
              <p className="font-bold text-slate-900">
                Food and Agriculture Organization of the United Nations (FAO)
              </p>

              <p>
                Materiais técnicos sobre instalações, alojamento, ventilação,
                drenagem, bem-estar e produção de suínos.
              </p>
            </div>

            <div>
              <p className="font-bold text-slate-900">
                FAO — Pig and poultry housing and welfare
              </p>

              <p>
                Guia recente sobre desenho e manutenção de instalações,
                requisitos de espaço, ventilação, iluminação e biossegurança.
              </p>
            </div>

            <div>
              <p className="font-bold text-slate-900">
                FAO — Pigs for Prosperity
              </p>

              <p>
                Material sobre sistemas de pequena escala, seleção do local,
                instalações, alimentação, saúde, ambiente e bem-estar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="font-bold text-slate-900">
              Continuar orientação sobre Suínos
            </p>

            <p className="text-sm text-slate-600">
              Explore alimentação, raças e os próximos temas técnicos.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/pecuaria/suinos/orientacoes/racas"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:border-green-300 hover:text-green-700"
            >
              ← Raças
            </Link>

            <Link
              href="/pecuaria/suinos/orientacoes/alimentacao"
              className="rounded-xl bg-green-700 px-5 py-3 text-sm font-bold text-white hover:bg-green-800"
            >
              Alimentação →
            </Link>

            <Link
              href="/pecuaria"
              className="rounded-xl border border-green-200 bg-green-50 px-5 py-3 text-sm font-bold text-green-800 hover:bg-green-100"
            >
              Pecuária
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}