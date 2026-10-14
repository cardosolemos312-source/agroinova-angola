
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Tema = {
  id: string;
  numero: string;
  titulo: string;
  subtitulo: string;
  resumo: string;
  imagem: string;
  imagemAlt: string;
  etiqueta: string;
  introducao: string;
  secoes: {
    titulo: string;
    texto: string;
    pontos: string[];
  }[];
  conselho: string;
};

const temas: Tema[] = [
  {
    id: "instalacoes",
    numero: "01",
    titulo: "Instalações e equipamentos",
    subtitulo: "Prepare um espaço adequado para criar codornizes.",
    resumo:
      "Planeamento das instalações, ventilação, alojamento, iluminação, equipamentos e higiene da exploração.",
    imagem:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Paisagem rural e área agrícola para enquadramento do planeamento da exploração",
    etiqueta: "Estrutura da exploração",
    introducao:
      "As instalações são a base de uma exploração de codornizes bem organizada. Um espaço inadequado pode favorecer o stress, as lesões, a humidade excessiva, a acumulação de resíduos e o aparecimento de problemas sanitários. Antes de adquirir as aves, o produtor deve preparar o alojamento, os equipamentos e as rotinas de trabalho. A solução escolhida deve corresponder à dimensão da exploração, à finalidade produtiva e aos recursos disponíveis.",
    secoes: [
      {
        titulo: "1. Escolha e preparação do local",
        texto:
          "O local deve permitir a circulação de pessoas responsáveis pelo maneio, a limpeza das instalações e o acesso aos equipamentos. É importante evitar zonas sujeitas a inundações, acumulação de água, poeiras excessivas ou contacto frequente com animais estranhos à exploração.",
        pontos: [
          "Escolher uma área seca, drenada e protegida das intempéries.",
          "Reduzir a exposição a ruídos intensos e perturbações constantes.",
          "Garantir acesso regular a água e energia, quando necessárias.",
          "Organizar o armazenamento da ração separado das áreas sujas.",
        ],
      },
      {
        titulo: "2. Gaiolas, parques e densidade",
        texto:
          "O sistema de alojamento deve permitir que as aves acedam à água e à alimentação, se movimentem sem obstáculos e não sofram lesões. Não existe uma única dimensão de gaiola adequada a todos os sistemas: a lotação deve considerar a idade, o peso, a linhagem, o clima e as exigências de bem-estar aplicáveis.",
        pontos: [
          "Utilizar materiais resistentes, não tóxicos e fáceis de limpar.",
          "Evitar arestas cortantes, saliências e pisos que magoem as patas.",
          "Não alojar mais aves do que a capacidade efectiva das instalações.",
          "Verificar diariamente a distribuição das aves e a disponibilidade de comedouros.",
        ],
      },
      {
        titulo: "3. Ventilação, temperatura e iluminação",
        texto:
          "As codornizes necessitam de condições ambientais estáveis. Uma ventilação deficiente favorece a humidade e a concentração de gases; por outro lado, correntes de ar directas e alterações bruscas de temperatura podem causar desconforto. As aves recém-nascidas precisam de aquecimento controlado, ajustado à sua resposta comportamental.",
        pontos: [
          "Assegurar renovação de ar sem correntes directas sobre as aves.",
          "Monitorizar a temperatura na altura em que as aves permanecem.",
          "Observar se as aves se concentram junto à fonte de calor ou se afastam excessivamente.",
          "Estabelecer um programa de iluminação adequado à fase produtiva e à orientação técnica.",
        ],
      },
      {
        titulo: "4. Equipamentos e limpeza",
        texto:
          "Comedouros, bebedouros, recipientes de armazenamento e utensílios devem estar disponíveis antes da chegada do primeiro lote. A limpeza deve ser organizada para evitar que resíduos, fezes e água contaminada entrem em contacto com a ração ou com as aves.",
        pontos: [
          "Instalar equipamentos em locais acessíveis e seguros.",
          "Retirar resíduos e limpar os bebedouros com frequência.",
          "Desinfectar as instalações entre lotes, respeitando as instruções dos produtos.",
          "Controlar roedores e insectos e manter um registo das operações de higiene.",
        ],
      },
    ],
    conselho:
      "Prepare as instalações antes de comprar as aves. Faça uma avaliação do espaço com um técnico agropecuário e defina a lotação com base no sistema de alojamento e nas condições reais da exploração.",
  },
  {
    id: "alimentacao",
    numero: "02",
    titulo: "Alimentação e água",
    subtitulo: "Nutrição equilibrada para crescimento e produção.",
    resumo:
      "Conheça as necessidades nutricionais, a gestão da ração, o acesso à água e o controlo dos custos alimentares.",
    imagem:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Ambiente rural agrícola ilustrativo da produção e gestão de recursos alimentares",
    etiqueta: "Nutrição animal",
    introducao:
      "A alimentação influencia o crescimento, a uniformidade do lote, a produção de ovos, a reprodução e a rentabilidade da criação. As codornizes precisam de uma dieta formulada para a espécie e para a fase de desenvolvimento. Uma ração destinada a outras aves não deve ser considerada automaticamente equivalente, pois a composição nutricional e o tamanho das partículas podem não responder às necessidades das codornizes.",
    secoes: [
      {
        titulo: "1. Alimentação de acordo com a idade",
        texto:
          "As necessidades nutricionais mudam durante o ciclo produtivo. Os pintos necessitam de uma ração apropriada à fase inicial; as aves em crescimento precisam de nutrientes para desenvolver o organismo; e as poedeiras necessitam de uma dieta adequada à produção de ovos e à manutenção do esqueleto.",
        pontos: [
          "Escolher ração inicial, de crescimento ou de postura conforme a fase.",
          "Verificar no rótulo a espécie a que se destina e a composição nutricional.",
          "Garantir partículas adequadas ao tamanho do bico das aves jovens.",
          "Fazer transições alimentares de forma controlada, evitando mudanças abruptas.",
        ],
      },
      {
        titulo: "2. Proteínas, energia e minerais",
        texto:
          "A ração deve fornecer energia, aminoácidos, vitaminas e minerais em proporções equilibradas. Nas poedeiras, o cálcio é particularmente importante para a formação da casca dos ovos. Tanto as deficiências como os excessos nutricionais podem prejudicar a saúde e o desempenho produtivo.",
        pontos: [
          "Usar fórmulas desenvolvidas para a fase produtiva das codornizes.",
          "Garantir qualidade e conservação dos ingredientes.",
          "Não acrescentar cálcio, vitaminas ou medicamentos sem avaliar a necessidade.",
          "Solicitar apoio técnico antes de formular rações com ingredientes locais.",
        ],
      },
      {
        titulo: "3. Água limpa e permanente",
        texto:
          "A água é indispensável à digestão, à regulação da temperatura corporal e à produção. A falta de água, mesmo por períodos relativamente curtos, pode afectar o consumo de ração e o desempenho das aves. Os sistemas de abeberamento devem permitir o acesso de todas as aves sem provocar encharcamento.",
        pontos: [
          "Disponibilizar água limpa e fresca durante todo o dia.",
          "Verificar diariamente o funcionamento de todos os bebedouros.",
          "Lavar os recipientes e impedir a acumulação de biofilme.",
          "Investigar rapidamente alterações inesperadas no consumo de água.",
        ],
      },
      {
        titulo: "4. Conservação e controlo dos custos",
        texto:
          "A ração é um dos principais componentes do custo de produção. A compra deve considerar a qualidade, o prazo de validade, o transporte e as condições de armazenamento. Uma ração húmida, bolorenta ou contaminada pode comprometer a saúde do efectivo.",
        pontos: [
          "Guardar a ração em local seco, ventilado e protegido de pragas.",
          "Manter os sacos afastados do chão e de paredes húmidas.",
          "Registar as quantidades compradas, fornecidas e desperdiçadas.",
          "Comparar o custo da alimentação com os resultados de produção e as vendas.",
        ],
      },
    ],
    conselho:
      "Não utilize uma fórmula universal de ração para todas as idades. A composição e a quantidade devem ser definidas para a linhagem, a fase produtiva e o sistema de criação, com apoio técnico sempre que necessário.",
  },
  {
    id: "sanidade",
    numero: "03",
    titulo: "Sanidade e biossegurança",
    subtitulo: "Prevenir doenças e proteger o efectivo.",
    resumo:
      "Rotinas de higiene, observação das aves, prevenção de doenças e organização dos registos sanitários.",
    imagem:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Ambiente de trabalho técnico ilustrativo da prevenção e do acompanhamento sanitário",
    etiqueta: "Saúde e prevenção",
    introducao:
      "A sanidade começa antes da entrada das aves na exploração. A compra de animais de origem conhecida, a limpeza das instalações, o controlo de visitantes e a observação diária ajudam a reduzir o risco de introdução e disseminação de agentes infecciosos. Como as aves podem apresentar sinais discretos no início de uma doença, a regularidade do acompanhamento é essencial.",
    secoes: [
      {
        titulo: "1. Prevenção e biossegurança",
        texto:
          "A biossegurança reúne medidas destinadas a impedir a entrada e a propagação de agentes causadores de doenças. Cada exploração deve estabelecer regras simples, consistentes e adequadas à sua dimensão, aplicadas por todas as pessoas que trabalham no local.",
        pontos: [
          "Adquirir aves e ovos para incubação de fornecedores de confiança.",
          "Limitar o acesso de visitantes às áreas de criação.",
          "Limpar e desinfectar equipamentos e utensílios de uso partilhado.",
          "Evitar o contacto com aves selvagens e outros animais.",
          "Controlar roedores, insectos, resíduos e fontes de água contaminada.",
        ],
      },
      {
        titulo: "2. Observação diária do lote",
        texto:
          "A observação diária permite identificar alterações antes de se tornarem generalizadas. O produtor deve conhecer o comportamento habitual das aves e comparar o consumo de alimento, a actividade, a postura e a mortalidade com os registos anteriores.",
        pontos: [
          "Observar o apetite, a actividade e a distribuição das aves.",
          "Verificar dificuldades respiratórias, diarreia, ferimentos ou penas eriçadas.",
          "Acompanhar a produção de ovos e a qualidade das cascas.",
          "Registar mortalidade e alterações súbitas de comportamento.",
        ],
      },
      {
        titulo: "3. Isolamento e assistência veterinária",
        texto:
          "Quando surgem sinais de doença, deve reduzir-se o contacto entre aves suspeitas e aves aparentemente saudáveis. O diagnóstico não deve ser feito apenas pela aparência, porque diferentes problemas podem produzir sinais semelhantes. A assistência veterinária ajuda a determinar a causa e a estabelecer medidas apropriadas.",
        pontos: [
          "Separar aves doentes quando isso puder ser feito em segurança.",
          "Utilizar utensílios próprios para áreas de isolamento.",
          "Contactar um médico veterinário perante mortalidade anormal ou doença suspeita.",
          "Evitar antibióticos, antiparasitários e outros medicamentos sem indicação profissional.",
        ],
      },
      {
        titulo: "4. Limpeza, vacinação e registos",
        texto:
          "O plano sanitário deve considerar a origem das aves, o sistema de produção, os riscos locais e as recomendações veterinárias. A vacinação não é igual para todas as explorações e não substitui a higiene, a ventilação e o controlo de visitantes.",
        pontos: [
          "Definir procedimentos escritos para limpeza e desinfecção.",
          "Registar datas, produtos utilizados e responsáveis pelas operações.",
          "Manter registos de mortalidade, diagnósticos e tratamentos.",
          "Definir com o veterinário as medidas preventivas adequadas à região.",
        ],
      },
    ],
    conselho:
      "Perante mortalidade repentina, sinais respiratórios intensos ou doença que se espalhe rapidamente, procure assistência veterinária sem demora. Não venda nem transporte aves suspeitas sem orientação técnica.",
  },
  {
    id: "reproducao",
    numero: "04",
    titulo: "Reprodução e incubação",
    subtitulo: "Organize os reprodutores e acompanhe os nascimentos.",
    resumo:
      "Selecção de reprodutores, recolha de ovos férteis, incubação artificial e maneio das aves recém-nascidas.",
    imagem:
      "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Ambiente rural ilustrativo da organização de uma exploração de criação",
    etiqueta: "Continuidade do efectivo",
    introducao:
      "A reprodução permite produzir novos lotes e, quando existem condições técnicas e sanitárias adequadas, reduzir a dependência da compra de aves. Para obter bons resultados, é necessário seleccionar reprodutores saudáveis, recolher e conservar correctamente os ovos e controlar o processo de incubação. A qualidade dos resultados depende também da alimentação, da idade e do maneio das aves reprodutoras.",
    secoes: [
      {
        titulo: "1. Selecção e maneio dos reprodutores",
        texto:
          "Os reprodutores devem apresentar bom estado corporal, actividade normal e ausência de sinais evidentes de doença ou deformações. A selecção deve ter em conta a finalidade produtiva e a qualidade do lote, evitando a reprodução contínua de aves com problemas hereditários ou de saúde.",
        pontos: [
          "Seleccionar aves saudáveis e provenientes de origem conhecida.",
          "Evitar utilizar reprodutores com lesões ou problemas persistentes.",
          "Garantir espaço, alimentação e água adequados.",
          "Organizar os grupos reprodutores de acordo com a linhagem e as recomendações técnicas.",
        ],
      },
      {
        titulo: "2. Recolha e selecção dos ovos",
        texto:
          "Os ovos destinados à incubação devem ser recolhidos frequentemente e manuseados com cuidado. Ovos rachados, muito deformados ou excessivamente sujos devem ser separados. A conservação antes da incubação deve respeitar recomendações técnicas de tempo, temperatura e humidade para reduzir a perda de viabilidade.",
        pontos: [
          "Identificar os ovos destinados à incubação e separá-los dos ovos para consumo.",
          "Evitar pancadas, quedas e manuseamento desnecessário.",
          "Não incubar ovos rachados ou com defeitos importantes.",
          "Registar a data de recolha e o lote de origem.",
        ],
      },
      {
        titulo: "3. Incubação artificial",
        texto:
          "A incubadora deve manter condições estáveis de temperatura, humidade e ventilação. Os valores correctos dependem do equipamento, da medição utilizada e da fase do processo. Ovos de codorniz japonesa costumam eclodir por volta de 17 a 18 dias, mas o período pode variar com as condições de incubação.",
        pontos: [
          "Limpar e verificar a incubadora antes de cada ciclo.",
          "Usar instrumentos de medição fiáveis e confirmar a calibração.",
          "Cumprir as instruções do fabricante quanto à temperatura, humidade e viragem.",
          "Seguir o procedimento próprio do equipamento na fase final da eclosão.",
          "Registar ovos colocados, ovos não eclodidos e número de nascimentos.",
        ],
      },
      {
        titulo: "4. Cuidados após a eclosão",
        texto:
          "As aves recém-nascidas necessitam de um ambiente preparado, protegido e com aquecimento adequado. A distribuição das aves fornece pistas importantes: aglomeração intensa pode indicar frio, enquanto o afastamento excessivo da fonte de calor pode indicar calor demasiado elevado.",
        pontos: [
          "Preparar antecipadamente a área de recria e verificar o aquecimento.",
          "Disponibilizar água em bebedouros seguros para aves jovens.",
          "Fornecer ração inicial apropriada e facilmente acessível.",
          "Observar a actividade, a hidratação e a uniformidade do lote.",
          "Registar a mortalidade e as condições observadas durante a primeira semana.",
        ],
      },
    ],
    conselho:
      "Não confie apenas no número de ovos colocados na incubadora. Avalie a fertilidade, a taxa de eclosão, a sobrevivência dos pintos e a qualidade do maneio para identificar onde melhorar o processo.",
  },
  {
    id: "mercado",
    numero: "05",
    titulo: "Mercado e comercialização",
    subtitulo: "Transforme a produção numa actividade economicamente organizada.",
    resumo:
      "Pesquisa de compradores, definição de preços, controlo de custos, apresentação dos produtos e planeamento das vendas.",
    imagem:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Produtos alimentares apresentados num mercado, ilustrando a comercialização",
    etiqueta: "Gestão e negócio",
    introducao:
      "Uma exploração de codornizes deve ser planeada considerando não apenas a capacidade de produzir, mas também a possibilidade de vender regularmente. Antes de investir em equipamentos ou aumentar o número de aves, é importante avaliar a procura local, os concorrentes, os custos de alimentação, as condições de transporte e as exigências sanitárias. O mercado deve orientar o volume de produção, e não o contrário.",
    secoes: [
      {
        titulo: "1. Identificação dos clientes",
        texto:
          "Os potenciais compradores podem incluir famílias, restaurantes, lojas, mercados e comerciantes, consoante a procura existente na região. A aceitação dos ovos e da carne pode variar entre localidades, pelo que é importante conversar com potenciais clientes antes de produzir em grande escala.",
        pontos: [
          "Identificar compradores e perguntar quais os produtos mais procurados.",
          "Avaliar a frequência de compra e as quantidades pretendidas.",
          "Comparar formatos de embalagem e requisitos de entrega.",
          "Testar a procura com pequenos lotes antes de ampliar a exploração.",
        ],
      },
      {
        titulo: "2. Definição dos preços",
        texto:
          "O preço de venda deve cobrir os custos e permitir uma margem sustentável, sem ignorar os preços praticados no mercado. Uma estimativa baseada apenas no preço da ração ou no preço de venda do ovo pode deixar de fora despesas importantes, levando a uma avaliação incorrecta da rentabilidade.",
        pontos: [
          "Registar os custos de aves, ração, água, energia e mão-de-obra.",
          "Incluir embalagens, transporte, manutenção e perdas de produção.",
          "Calcular o custo por ovo vendável ou por unidade de produto comercializado.",
          "Comparar o preço necessário para cobrir os custos com o preço aceite pelos compradores.",
        ],
      },
      {
        titulo: "3. Qualidade, embalagem e conservação",
        texto:
          "A qualidade do produto influencia a confiança do cliente e a possibilidade de manter vendas regulares. Os ovos devem ser recolhidos e manuseados de forma higiénica; a carne exige abate, conservação e transporte de acordo com as regras aplicáveis à segurança alimentar.",
        pontos: [
          "Separar ovos rachados e produtos que não cumpram os critérios de qualidade.",
          "Utilizar embalagens limpas, adequadas e resistentes.",
          "Identificar os lotes e as datas necessárias à rastreabilidade.",
          "Respeitar as condições de conservação, transporte e comercialização.",
          "Confirmar as exigências legais e sanitárias aplicáveis em Angola.",
        ],
      },
      {
        titulo: "4. Registos e crescimento do negócio",
        texto:
          "Os registos permitem perceber se a exploração está a produzir com eficiência e se as vendas geram resultados positivos. O produtor deve comparar os resultados entre lotes e ajustar a dimensão da actividade à procura real, à disponibilidade de ração e à capacidade de trabalho.",
        pontos: [
          "Registar produção, mortalidade, despesas, vendas e quantidades em stock.",
          "Calcular receitas, custos totais e margem por período.",
          "Identificar clientes regulares e manter uma agenda de encomendas.",
          "Evitar aumentar o efectivo sem confirmar a capacidade de venda.",
          "Reservar recursos para manutenção, reposição de aves e imprevistos.",
        ],
      },
    ],
    conselho:
      "Antes de investir numa exploração comercial, faça um orçamento simples, consulte potenciais compradores e confirme os requisitos sanitários e legais. Não considere a rentabilidade garantida sem dados reais de custos e vendas.",
  },
];

const imagemCapa =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90";

export default function PaginaCodornizes() {
  const [temaActivo, setTemaActivo] = useState<Tema | null>(null);

  useEffect(() => {
    if (!temaActivo) return;

    const tecla = (event: KeyboardEvent) => {
      if (event.key === "Escape") setTemaActivo(null);
    };

    document.addEventListener("keydown", tecla);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", tecla);
      document.body.style.overflow = "";
    };
  }, [temaActivo]);

  return (
    <main className="min-h-screen bg-[#f4f8f3] text-[#17221b]">
      <section className="relative isolate overflow-hidden bg-[#103b25] text-white">
        <div className="absolute inset-0 -z-20">
          <img
            src={imagemCapa}
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#103b25] via-[#14532d]/95 to-[#14532d]/70" />
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border-[50px] border-white/5" />
        <div className="absolute -bottom-40 left-1/3 -z-10 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24">
          <Link
            href="/pecuaria"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            <span aria-hidden="true">←</span>
            Voltar à Pecuária
          </Link>

          <div className="grid items-center gap-12 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
            <div>
              <span className="inline-flex rounded-full border border-lime-200/30 bg-lime-200/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-100">
                Conhecimento agropecuário
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Criação de{" "}
                <span className="text-lime-300">codornizes</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                Um guia prático e técnico para organizar a criação de
                codornizes em Angola. Explore as instalações, a alimentação,
                a sanidade, a reprodução e as oportunidades de comercialização,
                com orientações para tomar decisões mais informadas.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#modulos"
                  className="rounded-xl bg-lime-300 px-6 py-3.5 font-bold text-green-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-lime-200"
                >
                  Explorar os módulos
                </a>
                <a
                  href="#planeamento"
                  className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Preparar a exploração
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
                <span>05 módulos técnicos</span>
                <span>Conteúdos explicativos</span>
                <span>Consulta em modal</span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
                <img
                  src={temas[3].imagem}
                  alt={temas[3].imagemAlt}
                  className="h-64 w-full rounded-[1.4rem] object-cover sm:h-80"
                />
                <div className="p-5 sm:p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-lime-300">
                    Produção organizada
                  </span>
                  <h2 className="mt-2 text-2xl font-black">
                    Da criação ao mercado
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    Conhecimento técnico, prevenção sanitária e gestão
                    responsável são fundamentais para uma exploração
                    sustentável.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 rounded-2xl border border-green-100 bg-white p-4 text-green-950 shadow-xl sm:-left-8">
                <p className="text-xs font-semibold text-slate-500">
                  Foco da produção
                </p>
                <p className="mt-1 font-black">Ovos e carne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <span className="text-sm font-bold uppercase tracking-wider text-green-700">
              01 · Preparação
            </span>
            <h2 className="mt-3 text-xl font-black">Estrutura adequada</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Organize o alojamento, a ventilação, a higiene e os equipamentos
              antes de receber as aves.
            </p>
          </article>

          <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <span className="text-sm font-bold uppercase tracking-wider text-green-700">
              02 · Maneio
            </span>
            <h2 className="mt-3 text-xl font-black">Produção responsável</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Acompanhe a alimentação, a água, a saúde e o desempenho de cada lote.
            </p>
          </article>

          <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <span className="text-sm font-bold uppercase tracking-wider text-green-700">
              03 · Gestão
            </span>
            <h2 className="mt-3 text-xl font-black">Mercado e resultados</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Conheça os compradores, calcule os custos e registe as vendas antes
              de expandir o efectivo.
            </p>
          </article>
        </div>
      </section>

      <section id="modulos" className="mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-8">
        <div className="mb-9 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Centro de aprendizagem
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Explore os módulos de criação
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Cada módulo abre uma janela própria com imagem, explicações
            técnicas e recomendações práticas. Seleccione o tema que pretende
            estudar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {temas.map((tema) => (
            <article
              key={tema.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden bg-green-100">
                <img
                  src={tema.imagem}
                  alt={tema.imagemAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-green-900 shadow">
                  Módulo {tema.numero}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-green-700">
                  {tema.etiqueta}
                </span>
                <h3 className="mt-3 text-xl font-black">{tema.titulo}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                  {tema.subtitulo}
                </p>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {tema.resumo}
                </p>

                <button
                  type="button"
                  onClick={() => setTemaActivo(tema)}
                  className="mt-6 flex w-full items-center justify-between rounded-xl bg-green-800 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                >
                  Consultar módulo
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="planeamento" className="border-y border-green-100 bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Antes de investir
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Planeie a sua exploração
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A criação de codornizes deve começar com objectivos claros.
              Defina se pretende produzir ovos para consumo, ovos férteis,
              aves para carne ou mais do que um produto. A escolha influencia
              as instalações, a alimentação, o maneio e o investimento.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Em Angola, avalie especialmente a disponibilidade e o custo da
              ração, o acesso à água, a ventilação durante os períodos quentes,
              a energia necessária aos equipamentos e a existência de compradores
              próximos. Começar numa escala controlada pode ajudar a identificar
              dificuldades antes de aumentar a produção.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f0f7ed] p-6 sm:p-8">
            <h3 className="text-xl font-black text-green-950">
              Lista de verificação
            </h3>
            <ul className="mt-5 space-y-4">
              {[
                "Definir o objectivo produtivo e a dimensão inicial.",
                "Preparar alojamento, ventilação, equipamentos e higiene.",
                "Garantir ração adequada e água limpa de forma permanente.",
                "Identificar um técnico agropecuário ou médico veterinário.",
                "Pesquisar compradores e requisitos de comercialização.",
                "Calcular os custos e organizar registos de produção e vendas.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-950 to-green-800 px-5 py-12 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-lime-300">
              AGROINOVA ANGOLA
            </p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Conhecimento ao serviço do produtor
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/75">
              Consulte os outros conteúdos de pecuária e continue a aprofundar
              os seus conhecimentos de produção animal.
            </p>
          </div>

          <Link
            href="/pecuaria"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-lime-300 px-5 py-3.5 font-bold text-green-950 transition hover:bg-lime-200"
          >
            Voltar à Pecuária
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {temaActivo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setTemaActivo(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-codornizes"
            className="flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 sm:px-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-700">
                  AGROINOVA ANGOLA · MÓDULO {temaActivo.numero}
                </p>
                <h2
                  id="titulo-modal-codornizes"
                  className="mt-1 text-xl font-black sm:text-2xl"
                >
                  {temaActivo.titulo}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setTemaActivo(null)}
                aria-label="Fechar modal"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-2xl text-slate-700 transition hover:bg-green-100 hover:text-green-900"
              >
                ×
              </button>
            </div>

            <div className="overflow-y-auto">
              <div className="relative h-52 bg-green-950 sm:h-72">
                <img
                  src={temaActivo.imagem}
                  alt={temaActivo.imagemAlt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8">
                  <span className="inline-flex rounded-full bg-lime-300 px-3 py-1.5 text-xs font-bold text-green-950">
                    {temaActivo.etiqueta}
                  </span>
                  <h3 className="mt-3 max-w-3xl text-2xl font-black sm:text-3xl">
                    {temaActivo.subtitulo}
                  </h3>
                </div>
              </div>

              <div className="p-5 sm:p-8 lg:p-10">
                <div className="rounded-2xl border border-green-100 bg-[#f4f8f3] p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-800">
                    Introdução técnica
                  </p>
                  <p className="mt-3 text-sm leading-8 text-slate-700 sm:text-base">
                    {temaActivo.introducao}
                  </p>
                </div>

                <div className="mt-8 space-y-8">
                  {temaActivo.secoes.map((secao, index) => (
                    <article
                      key={secao.titulo}
                      className="grid gap-4 sm:grid-cols-[56px_1fr] sm:gap-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-800 text-lg font-black text-white shadow-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-green-950">
                          {secao.titulo}
                        </h3>
                        <p className="mt-3 text-sm leading-8 text-slate-700 sm:text-base">
                          {secao.texto}
                        </p>

                        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-green-800">
                            Recomendações práticas
                          </p>
                          <ul className="mt-4 space-y-3">
                            {secao.pontos.map((ponto) => (
                              <li
                                key={ponto}
                                className="flex gap-3 text-sm leading-7 text-slate-700"
                              >
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                                <span>{ponto}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-9 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
                  <p className="font-bold text-amber-950">
                    Orientação importante
                  </p>
                  <p className="mt-2 text-sm leading-7 text-amber-950/90">
                    {temaActivo.conselho}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-6 text-slate-500">
                    Conteúdo educativo. Ajuste as práticas às condições locais
                    e às recomendações técnicas aplicáveis.
                  </p>
                  <button
                    type="button"
                    onClick={() => setTemaActivo(null)}
                    className="shrink-0 rounded-xl bg-green-800 px-7 py-3 font-bold text-white transition hover:bg-green-950"
                  >
                    Concluir leitura
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
