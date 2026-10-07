"use client";

import Link from "next/link";

type Imagem = {
  src: string;
  href: string;
  alt: string;
  legenda: string;
  fonte: string;
};

const imagens: Record<string, Imagem> = {
  hero: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20shed.jpg?width=1600",
    href: "https://commons.wikimedia.org/wiki/Category:Goat_sheds",
    alt: "Instalação destinada à criação de caprinos",
    legenda:
      "As instalações devem proporcionar abrigo, ventilação, higiene, segurança e condições adequadas para o maneio dos animais.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },

  abrigo: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20house.jpg?width=1400",
    href: "https://commons.wikimedia.org/wiki/Category:Goat_houses",
    alt: "Abrigo para caprinos",
    legenda:
      "O abrigo protege os animais contra chuva, vento, excesso de radiação solar e outras condições ambientais adversas.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },

  africa: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goats%20in%20Africa.jpg?width=1400",
    href: "https://commons.wikimedia.org/wiki/Category:Goats_in_Africa",
    alt: "Caprinos em sistema de criação africano",
    legenda:
      "Os sistemas de alojamento devem ser adaptados aos recursos disponíveis, clima, escala da exploração e práticas locais de maneio.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },

  comedouro: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20feeding%20trough.jpg?width=1400",
    href: "https://commons.wikimedia.org/wiki/Category:Goat_feeding",
    alt: "Estrutura de alimentação para caprinos",
    legenda:
      "Comedouros bem dimensionados reduzem desperdícios e ajudam a manter os alimentos afastados do solo.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },

  cabritos: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20kids.jpg?width=1400",
    href: "https://commons.wikimedia.org/wiki/Category:Goat_kids",
    alt: "Cabritos em instalação de criação",
    legenda:
      "Cabritos necessitam de instalações protegidas, secas e fáceis de limpar.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },
};

const principios = [
  {
    titulo: "Proteção climática",
    texto:
      "A instalação deve proteger os animais contra chuva, vento, frio, calor excessivo e radiação solar intensa. A necessidade concreta varia conforme a região, altitude, época do ano e sistema de produção.",
  },
  {
    titulo: "Ventilação",
    texto:
      "Uma boa ventilação permite renovar o ar e reduzir a acumulação de humidade, odores e gases. O objetivo não é criar correntes de ar fortes diretamente sobre os animais, mas manter um ambiente adequadamente ventilado.",
  },
  {
    titulo: "Piso seco",
    texto:
      "A humidade permanente aumenta os problemas de higiene e pode favorecer lesões nos cascos e outras complicações sanitárias. A drenagem deve ser considerada desde a construção.",
  },
  {
    titulo: "Facilidade de limpeza",
    texto:
      "Instalações simples de limpar permitem retirar regularmente fezes, urina, restos de alimento e material contaminado. O desenho do abrigo deve facilitar o trabalho diário do produtor.",
  },
  {
    titulo: "Segurança",
    texto:
      "Portas, cercas e divisórias devem impedir fugas, reduzir ferimentos e dificultar a entrada de predadores ou animais estranhos ao efetivo.",
  },
  {
    titulo: "Adequação ao sistema",
    texto:
      "Uma exploração familiar não necessita necessariamente da mesma infraestrutura de uma unidade comercial. O investimento deve acompanhar o tamanho do efetivo, objetivo produtivo e capacidade de gestão.",
  },
];

const zonas = [
  {
    titulo: "Área de descanso",
    texto:
      "Deve ser seca, protegida e suficientemente espaçosa para permitir que os animais se deitem e levantem sem dificuldade.",
  },
  {
    titulo: "Área de alimentação",
    texto:
      "Os comedouros devem permitir acesso adequado aos animais e reduzir a contaminação dos alimentos por fezes, urina e solo.",
  },
  {
    titulo: "Área de água",
    texto:
      "Os bebedouros devem ser posicionados de modo a facilitar o acesso e a limpeza, evitando zonas onde a acumulação de lama possa tornar-se permanente.",
  },
  {
    titulo: "Área de maternidade",
    texto:
      "Quando possível, deve existir espaço limpo e protegido para fêmeas próximas do parto e para os primeiros cuidados com as crias.",
  },
  {
    titulo: "Área dos cabritos",
    texto:
      "Os animais jovens devem estar protegidos de frio, humidade, correntes de ar e pisoteio. O acesso aos alimentos e à água deve ser adequado ao seu tamanho.",
  },
  {
    titulo: "Quarentena",
    texto:
      "Uma área separada permite manter temporariamente animais recém-chegados ou suspeitos de doença afastados do restante efetivo.",
  },
];

const sistemas = [
  {
    titulo: "Sistema familiar",
    descricao:
      "Em pequenas explorações, a instalação pode ser simples, utilizando materiais disponíveis localmente, desde que proporcione proteção, segurança, ventilação e condições mínimas de higiene.",
    caracteristicas: [
      "Abrigo simples e funcional",
      "Materiais disponíveis localmente",
      "Boa proteção contra chuva",
      "Área seca para descanso",
      "Comedouro e bebedouro adequados",
    ],
  },
  {
    titulo: "Sistema semi-intensivo",
    descricao:
      "Exige maior organização das áreas de alojamento e alimentação, pois os animais alternam entre pastoreio e permanência nas instalações.",
    caracteristicas: [
      "Abrigo permanente",
      "Parques ou cercados",
      "Área de alimentação",
      "Separação de categorias",
      "Local para armazenamento de forragem",
    ],
  },
  {
    titulo: "Sistema comercial",
    descricao:
      "A maior dimensão do efetivo exige maior controlo de fluxo dos animais, higiene, alimentação, água, quarentena e gestão dos resíduos.",
    caracteristicas: [
      "Divisórias funcionais",
      "Área de quarentena",
      "Maternidade",
      "Armazenamento de alimentos",
      "Manejo de resíduos",
    ],
  },
];

const erros = [
  "Construir o abrigo numa área com drenagem deficiente.",
  "Manter o piso permanentemente húmido.",
  "Fechar completamente as paredes sem garantir ventilação.",
  "Utilizar materiais cortantes ou estruturas que possam ferir os animais.",
  "Colocar o comedouro diretamente no chão.",
  "Instalar o bebedouro em local onde os animais contaminem facilmente a água.",
  "Não separar animais doentes ou recém-chegados.",
  "Misturar cabritos muito jovens com animais adultos sem controlo.",
  "Construir instalações demasiado pequenas para o efetivo.",
  "Aumentar o número de animais sem ampliar a infraestrutura.",
  "Não retirar regularmente fezes e restos de alimento.",
  "Construir instalações sem considerar a direção predominante da chuva e do vento.",
];

function ImagemTecnica({
  imagem,
  grande = false,
}: {
  imagem: Imagem;
  grande?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <a
        href={imagem.href}
        target="_blank"
        rel="noopener noreferrer"
        title="Ver fonte da imagem"
      >
        <img
          src={imagem.src}
          alt={imagem.alt}
          className={`w-full object-cover transition duration-500 hover:scale-[1.02] ${
            grande ? "h-[450px]" : "h-[280px]"
          }`}
        />
      </a>

      <figcaption className="px-5 py-4">
        <p className="text-sm leading-6 text-slate-700">
          {imagem.legenda}
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          {imagem.fonte}
        </p>
      </figcaption>
    </figure>
  );
}

export default function InstalacoesCaprinosPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src={imagens.hero.src}
            alt={imagens.hero.alt}
            className="h-full w-full object-cover opacity-45"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/pecuaria"
            className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            ← Voltar para Pecuária
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            AGROINOVA ANGOLA · CAPRINOS
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Instalações para Caprinos
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            Princípios para projetar, construir e organizar instalações
            adequadas ao alojamento, alimentação, reprodução, higiene e
            segurança de caprinos em diferentes sistemas de produção.
          </p>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Fundamentos
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Uma boa instalação deve servir ao animal e ao produtor
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                As instalações constituem uma componente fundamental do maneio
                caprino. O abrigo não deve ser visto apenas como um local onde
                os animais passam a noite, mas como uma estrutura que interfere
                na alimentação, sanidade, reprodução, conforto, segurança e
                eficiência do trabalho diário.
              </p>

              <p>
                Uma instalação tecnicamente adequada não precisa ser
                necessariamente cara ou sofisticada. Em sistemas familiares,
                soluções simples construídas com materiais disponíveis
                localmente podem funcionar muito bem quando são corretamente
                dimensionadas e mantidas.
              </p>

              <p>
                O princípio fundamental é proporcionar aos animais um ambiente
                seco, seguro, ventilado e protegido das condições climáticas
                adversas, ao mesmo tempo que permite ao produtor realizar
                facilmente a alimentação, limpeza, observação e tratamento.
              </p>

              <p>
                Em Angola, o desenho da instalação deve considerar as condições
                específicas da região. Temperatura, precipitação, vento,
                disponibilidade de materiais, relevo, drenagem e sistema de
                produção podem alterar significativamente as necessidades do
                abrigo.
              </p>
            </div>
          </div>

          <ImagemTecnica imagem={imagens.abrigo} grande />
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Planeamento
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Princípios fundamentais das instalações
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principios.map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-4 leading-7 text-slate-700">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Localização
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Onde construir o abrigo?
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                A escolha do local deve ser feita antes da construção. Uma
                instalação construída numa zona sujeita a inundação, acumulação
                de água ou erosão pode apresentar problemas permanentes de
                higiene e conservação.
              </p>

              <p>
                Sempre que possível, deve-se escolher uma área elevada ou com
                boa drenagem natural. O acesso deve ser suficientemente fácil
                para permitir a entrada de pessoas, transporte de alimentos,
                retirada de resíduos e assistência veterinária.
              </p>

              <p>
                Também deve ser considerada a distância de fontes de
                contaminação, como águas residuais, depósitos de lixo ou locais
                onde sejam armazenados produtos químicos.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Antes de iniciar a construção
            </h3>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <li>• Observar o comportamento da água durante as chuvas.</li>
              <li>• Avaliar a drenagem natural do terreno.</li>
              <li>• Identificar a direção predominante dos ventos.</li>
              <li>• Considerar a exposição solar.</li>
              <li>• Garantir acesso para limpeza e alimentação.</li>
              <li>• Verificar a segurança contra predadores e furtos.</li>
              <li>• Planear futuras ampliações.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VENTILAÇÃO */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
                Ambiente interno
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Ventilação sem criar correntes de ar prejudiciais
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-300">
                <p>
                  A ventilação permite renovar o ar e retirar excesso de
                  humidade, calor e gases produzidos no ambiente do alojamento.
                  Uma instalação completamente fechada pode apresentar má
                  qualidade do ar, sobretudo quando existe elevada densidade de
                  animais.
                </p>

                <p>
                  Por outro lado, a abertura excessiva e mal posicionada pode
                  expor os animais a ventos fortes e chuva. O objetivo é
                  encontrar um equilíbrio entre proteção e renovação do ar.
                </p>

                <p>
                  A altura, posição das aberturas e orientação das paredes
                  devem ser adaptadas às condições locais. Em regiões quentes,
                  a circulação natural do ar assume particular importância.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-bold">
                Sinais de ventilação inadequada
              </h3>

              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <li>• Odor forte e persistente dentro do abrigo.</li>
                <li>• Condensação ou humidade excessiva.</li>
                <li>• Acumulação de calor.</li>
                <li>• Ar muito pesado.</li>
                <li>• Animais constantemente expostos a correntes fortes.</li>
                <li>• Aumento da sujidade das paredes e estruturas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PISO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Piso e drenagem
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            O piso influencia diretamente a higiene
          </h2>

          <p className="mt-6 leading-8 text-slate-700">
            O piso deve ser escolhido de acordo com o sistema de produção,
            disponibilidade de materiais, clima e capacidade de manutenção.
            Independentemente do material utilizado, o objetivo é evitar
            acumulação permanente de humidade, permitir limpeza e proporcionar
            segurança aos animais.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Piso de terra
            </h3>

            <p className="mt-4 leading-7 text-slate-700">
              Pode ser utilizado em sistemas familiares quando existe boa
              drenagem e manutenção adequada. Deve-se evitar acumulação de
              humidade e formação de lama.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Piso cimentado
            </h3>

            <p className="mt-4 leading-7 text-slate-700">
              Facilita determinadas operações de limpeza, mas necessita de
              acabamento adequado e drenagem. Superfícies excessivamente lisas
              podem aumentar o risco de escorregamento.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Piso elevado
            </h3>

            <p className="mt-4 leading-7 text-slate-700">
              Estruturas elevadas podem favorecer a separação entre animais e
              fezes, mas precisam ser corretamente projetadas para evitar
              ferimentos e garantir estabilidade.
            </p>
          </article>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Organização interna
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Dividir as funções da instalação
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              A organização das instalações deve permitir que as diferentes
              operações de maneio sejam realizadas com facilidade. A separação
              de determinadas categorias também reduz conflitos e facilita a
              observação dos animais.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {zonas.map((zona) => (
              <article
                key={zona.titulo}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {zona.titulo}
                </h3>

                <p className="mt-4 leading-7 text-slate-700">
                  {zona.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMEDOUROS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ImagemTecnica imagem={imagens.comedouro} />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Alimentação e água
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Comedouros e bebedouros devem ser pensados desde o início
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                A forma como o alimento é apresentado influencia desperdício,
                higiene e competição entre os animais. O comedouro deve manter a
                forragem afastada do solo e permitir que os animais tenham
                acesso sem necessidade de entrar dentro da estrutura.
              </p>

              <p>
                O bebedouro deve ser fácil de limpar e abastecer. A localização
                deve reduzir o risco de contaminação por fezes e lama.
              </p>

              <p>
                Em instalações maiores, a posição dos equipamentos deve permitir
                circulação dos animais e dos trabalhadores sem criar pontos de
                congestionamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CABRITOS */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
                Cabritos
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Os animais jovens precisam de proteção especial
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-700">
                <p>
                  Os cabritos são mais vulneráveis às condições ambientais,
                  principalmente quando são recém-nascidos. A área destinada às
                  crias deve ser seca, limpa e protegida contra chuva, frio,
                  correntes de ar e pisoteio.
                </p>

                <p>
                  A instalação deve também facilitar a observação da mãe e da
                  cria, especialmente durante e após o parto.
                </p>

                <p>
                  À medida que os cabritos crescem, o espaço deve ser adaptado
                  para evitar sobrelotação e competição excessiva por alimento e
                  água.
                </p>
              </div>
            </div>

            <ImagemTecnica imagem={imagens.cabritos} />
          </div>
        </div>
      </section>

      {/* MATERNIDADE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-pink-200 bg-pink-50 p-8 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-pink-700">
            Maternidade
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Preparar o espaço para o parto
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Características desejáveis
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>• Ambiente seco.</li>
                <li>• Boa higiene.</li>
                <li>• Proteção contra chuva e vento.</li>
                <li>• Fácil observação.</li>
                <li>• Acesso rápido para assistência.</li>
                <li>• Água disponível para a matriz.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Preparação
              </h3>

              <p className="mt-4 leading-7 text-slate-700">
                Antes do parto, a área deve ser limpa e preparada. Material
                húmido ou muito contaminado deve ser removido. A instalação
                deve permitir observar a matriz sem causar perturbação
                desnecessária.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUARENTENA */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Biossegurança
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Quarentena e isolamento devem fazer parte do planeamento
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-300">
              <p>
                Sempre que possível, uma exploração deve possuir uma área que
                permita separar temporariamente animais recém-adquiridos,
                animais doentes ou animais cuja condição sanitária seja
                desconhecida.
              </p>

              <p>
                A área de quarentena deve estar suficientemente afastada ou
                separada das zonas utilizadas pelo restante efetivo e deve
                permitir limpeza e desinfeção.
              </p>

              <p>
                Esta separação reduz o risco de introdução e disseminação de
                problemas sanitários e facilita a observação dos animais antes
                da sua integração no efetivo principal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SISTEMAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Sistemas de produção
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Instalações conforme a dimensão da exploração
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {sistemas.map((sistema) => (
            <article
              key={sistema.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {sistema.titulo}
              </h3>

              <p className="mt-4 max-w-4xl leading-8 text-slate-700">
                {sistema.descricao}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sistema.caracteristicas.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ÁFRICA E ANGOLA */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Contexto africano
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Instalações adaptadas aos recursos locais
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-700">
                <p>
                  Em muitas regiões africanas, os sistemas de criação de
                  pequenos ruminantes utilizam instalações relativamente simples.
                  O objetivo principal é garantir proteção e facilitar o maneio,
                  em vez de reproduzir modelos caros desenvolvidos para sistemas
                  industriais.
                </p>

                <p>
                  A utilização de materiais disponíveis localmente pode reduzir
                  custos, desde que sejam resistentes, seguros e adequados às
                  condições ambientais.
                </p>

                <p>
                  Para Angola, esta abordagem é particularmente importante.
                  Diferentes províncias apresentam condições ambientais,
                  disponibilidade de materiais e sistemas produtivos distintos.
                  Por isso, o modelo de instalação deve ser tecnicamente
                  adaptado à realidade local.
                </p>

                <p>
                  Em regiões de elevada precipitação, a drenagem e proteção
                  contra chuva assumem maior importância. Em regiões mais secas
                  e quentes, sombra e ventilação podem receber maior atenção.
                </p>
              </div>
            </div>

            <ImagemTecnica imagem={imagens.africa} />
          </div>
        </div>
      </section>

      {/* MATERIAIS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Materiais
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Materiais locais podem ser utilizados com critérios técnicos
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Madeira, blocos, tijolos, chapas, bambu e outros materiais podem
            participar na construção, dependendo da disponibilidade local e das
            condições ambientais. A prioridade deve ser a segurança estrutural,
            durabilidade, ventilação e facilidade de limpeza.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid bg-slate-100 text-sm font-bold text-slate-900 md:grid-cols-3">
            <div className="p-5">Elemento</div>
            <div className="p-5">Possíveis materiais</div>
            <div className="p-5">Principal preocupação</div>
          </div>

          <div className="divide-y divide-slate-200 text-sm">
            <div className="grid md:grid-cols-3">
              <div className="p-5 font-semibold">Estrutura</div>
              <div className="p-5 text-slate-700">
                Madeira, metal, alvenaria
              </div>
              <div className="p-5 text-slate-700">
                Resistência e estabilidade
              </div>
            </div>

            <div className="grid md:grid-cols-3">
              <div className="p-5 font-semibold">Cobertura</div>
              <div className="p-5 text-slate-700">
                Chapa, telha ou materiais locais adequados
              </div>
              <div className="p-5 text-slate-700">
                Proteção contra chuva e calor
              </div>
            </div>

            <div className="grid md:grid-cols-3">
              <div className="p-5 font-semibold">Cercas</div>
              <div className="p-5 text-slate-700">
                Madeira, postes, malha ou outros sistemas apropriados
              </div>
              <div className="p-5 text-slate-700">
                Evitar fugas e ferimentos
              </div>
            </div>

            <div className="grid md:grid-cols-3">
              <div className="p-5 font-semibold">Comedouros</div>
              <div className="p-5 text-slate-700">
                Madeira, metal, alvenaria ou recipientes adequados
              </div>
              <div className="p-5 text-slate-700">
                Higiene e redução do desperdício
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGIENE */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Higiene
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Uma boa instalação precisa de um bom programa de limpeza
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              O desenho da instalação deve facilitar a limpeza. A acumulação
              prolongada de fezes, urina, restos de alimentos e material
              húmido aumenta os desafios sanitários e prejudica o ambiente onde
              os animais permanecem.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Retirar regularmente fezes acumuladas.",
              "Remover alimentos deteriorados.",
              "Manter bebedouros limpos.",
              "Reparar imediatamente estruturas perigosas.",
            ].map((texto) => (
              <div
                key={texto}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-semibold leading-7 text-slate-800">
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GESTÃO DE RESÍDUOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-lime-200 bg-lime-50 p-8 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-lime-700">
            Gestão de resíduos
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            O estrume pode fazer parte da integração agricultura–pecuária
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-700">
            O estrume produzido nas instalações pode ser recolhido e utilizado
            como fonte de matéria orgânica na agricultura, desde que seja
            adequadamente manejado. A sua gestão reduz a acumulação dentro do
            abrigo e pode contribuir para a fertilidade do solo.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-bold">Recolha</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Retirar periodicamente o material acumulado.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-bold">Armazenamento</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Evitar que o material seja levado pela chuva para cursos de
                água.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-bold">Utilização agrícola</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Integrar o estrume no sistema agrícola de forma adequada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-red-200 bg-red-50 p-8 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">
            Erros frequentes
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Problemas que devem ser evitados
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {erros.map((erro) => (
              <div
                key={erro}
                className="rounded-xl border border-red-100 bg-white p-4 text-sm leading-6 text-slate-700"
              >
                {erro}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Orientação para Angola
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Construir de acordo com a realidade da exploração
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-emerald-50/80">
              <p>
                Em Angola, a construção de instalações para caprinos deve
                procurar um equilíbrio entre conhecimento técnico, condições
                ambientais e capacidade económica do produtor.
              </p>

              <p>
                Não é necessário reproduzir modelos estrangeiros de elevada
                complexidade quando uma solução local, mais simples e
                correctamente dimensionada, consegue proporcionar proteção,
                higiene e segurança.
              </p>

              <p>
                O técnico deve avaliar a localização da exploração, regime de
                chuvas, temperatura, disponibilidade de água, materiais
                disponíveis, número de animais e objetivo produtivo antes de
                recomendar uma solução.
              </p>

              <p>
                Em projetos de maior dimensão, o planeamento deve prever
                expansão futura. Construir exatamente para o número atual de
                animais pode tornar-se um problema quando o efetivo aumenta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOTA TÉCNICA */}
      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Nota técnica
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            As recomendações apresentadas são princípios gerais de construção e
            maneio. O dimensionamento final das instalações deve ser adaptado ao
            tamanho do efetivo, sistema de produção, clima, legislação,
            disponibilidade de materiais e condições específicas da exploração.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Para projetos comerciais ou estruturas de maior dimensão, recomenda-se
            avaliação técnica do terreno, estrutura, drenagem, instalações
            elétricas e hidráulicas, biossegurança e gestão dos resíduos antes da
            construção.
          </p>
        </div>
      </section>

      {/* REFERÊNCIAS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Referências técnicas
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Fontes de apoio
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
              <p>
                Food and Agriculture Organization of the United Nations (FAO).
                <strong>
                  {" "}
                  Small ruminant production and small ruminant genetic
                  resources in tropical Africa.
                </strong>
              </p>

              <p>
                Food and Agriculture Organization of the United Nations (FAO).
                <strong>
                  {" "}
                  Village goat production.
                </strong>
              </p>

              <p>
                Food and Agriculture Organization of the United Nations (FAO).
                <strong>
                  {" "}
                  Small ruminant production systems in developing countries.
                </strong>
              </p>

              <p>
                International Livestock Research Institute (ILRI). Materiais
                técnicos sobre pequenos ruminantes, sistemas de produção e
                maneio pecuário em África.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold text-emerald-300">
              CAPRINOS
            </p>

            <p className="mt-1 text-white">
              Biblioteca técnica de caprinicultura — AGROINOVA ANGOLA.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/pecuaria"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Pecuária
            </Link>

            <Link
              href="/pecuaria/caprinos/orientacoes/alimentacao"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Alimentação
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}