import Link from "next/link";

interface InstalacoesPageProps {
  searchParams: Promise<{
    provincia?: string;
    finalidade?: string;
  }>;
}

const provincias = [
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

const finalidades = [
  "Produção de carne",
  "Produção de leite",
  "Produção mista",
  "Reprodução",
];

const sistemas = [
  {
    titulo: "Criação extensiva",
    descricao:
      "Os animais permanecem grande parte do tempo em áreas de pastagem, com menor concentração de animais por unidade de área. É um sistema importante para explorações que dispõem de terras de pasto e depende fortemente da disponibilidade sazonal de forragem e água.",
    pontos: [
      "Disponibilidade suficiente de pastagem.",
      "Acesso seguro à água.",
      "Vedação ou controlo dos limites da área.",
      "Abrigo ou sombra disponível.",
      "Monitorização periódica dos animais.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_grazing.jpg?width=1400",
  },
  {
    titulo: "Criação semi-intensiva",
    descricao:
      "Combina o aproveitamento da pastagem com períodos de permanência em instalações onde os animais podem receber suplementação, água, minerais e cuidados de manejo.",
    pontos: [
      "Área de pastagem organizada.",
      "Curral para manejo.",
      "Comedouros e bebedouros.",
      "Zona de sombra.",
      "Local para armazenamento de alimentos.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_in_pasture.jpg?width=1400",
  },
  {
    titulo: "Criação intensiva",
    descricao:
      "Os animais passam uma parte significativa do tempo em instalações preparadas para alimentação, descanso e manejo. Exige maior controlo de alimentação, água, higiene, ventilação, densidade animal e gestão dos resíduos.",
    pontos: [
      "Instalações bem dimensionadas.",
      "Boa ventilação.",
      "Piso seguro e de fácil limpeza.",
      "Água disponível permanentemente.",
      "Manejo adequado dos dejetos.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_feedlot.jpg?width=1400",
  },
];

const estruturas = [
  {
    titulo: "Curral de manejo",
    descricao:
      "É uma das estruturas mais importantes da exploração. Deve permitir reunir, separar e conduzir os animais com segurança para vacinação, pesagem, identificação, tratamentos, reprodução e outras operações.",
    pontos: [
      "Piso firme e com boa drenagem.",
      "Vedação resistente.",
      "Portões funcionais.",
      "Corredores que facilitem a movimentação.",
      "Ausência de objetos cortantes ou pontiagudos.",
    ],
  },
  {
    titulo: "Área de descanso",
    descricao:
      "Os bovinos precisam de uma zona onde possam repousar sem excesso de lama, água acumulada, fezes ou obstáculos que provoquem ferimentos.",
    pontos: [
      "Área seca sempre que possível.",
      "Sombra suficiente.",
      "Boa drenagem.",
      "Superfície que reduza escorregamentos.",
      "Limpeza periódica.",
    ],
  },
  {
    titulo: "Comedouros",
    descricao:
      "Os comedouros devem permitir que os animais tenham acesso ao alimento sem excesso de competição e sem contaminar constantemente a ração com fezes ou urina.",
    pontos: [
      "Construção resistente.",
      "Fácil limpeza.",
      "Proteção contra chuva quando necessário.",
      "Altura adequada aos animais.",
      "Espaço suficiente para reduzir competição.",
    ],
  },
  {
    titulo: "Bebedouros",
    descricao:
      "O bebedouro deve fornecer água limpa e em quantidade suficiente. A localização deve facilitar o acesso dos animais e permitir limpeza frequente.",
    pontos: [
      "Água limpa.",
      "Reposição adequada.",
      "Limpeza frequente.",
      "Local de fácil acesso.",
      "Drenagem ao redor do bebedouro.",
    ],
  },
  {
    titulo: "Armazém de alimentos",
    descricao:
      "Rações, concentrados, minerais e outros insumos devem ser protegidos contra chuva, humidade, roedores, insetos e contaminação.",
    pontos: [
      "Local seco.",
      "Boa ventilação.",
      "Proteção contra roedores.",
      "Produtos afastados do chão.",
      "Separação entre alimentos e produtos veterinários.",
    ],
  },
  {
    titulo: "Área de isolamento",
    descricao:
      "É recomendável possuir uma área separada para animais doentes ou recém-chegados, reduzindo o risco de transmissão de agentes infecciosos ao restante do efetivo.",
    pontos: [
      "Separação física do restante rebanho.",
      "Equipamentos próprios quando possível.",
      "Limpeza e desinfeção.",
      "Acompanhamento dos animais.",
      "Registo de entrada e saída.",
    ],
  },
];

const erros = [
  "Construir o curral em terreno sujeito a alagamentos.",
  "Não prever drenagem adequada.",
  "Utilizar pisos excessivamente lisos.",
  "Manter arame, pregos ou peças metálicas expostas.",
  "Não disponibilizar sombra em áreas de concentração.",
  "Colocar comedouros em locais onde acumulam lama.",
  "Permitir que os bebedouros permaneçam sujos.",
  "Misturar animais doentes com animais saudáveis.",
  "Armazenar alimentos diretamente sobre o chão.",
  "Não criar uma zona segura para vacinação e tratamentos.",
];

const checklist = [
  "O curral está em local seguro?",
  "Existe drenagem adequada?",
  "Os animais encontram sombra?",
  "Os bebedouros estão limpos?",
  "Os comedouros estão em boas condições?",
  "As cercas e portões estão resistentes?",
  "Existe uma área para separar animais?",
  "O piso permite movimentação sem escorregamentos?",
  "Os alimentos estão protegidos da chuva e de pragas?",
  "Existe espaço adequado para realizar tratamentos?",
  "Os animais conseguem movimentar-se sem obstáculos perigosos?",
  "As instalações são limpas regularmente?",
];

export default async function InstalacoesPage({
  searchParams,
}: InstalacoesPageProps) {
  const params = await searchParams;

  const provincia = params.provincia || "";
  const finalidade = params.finalidade || "";

  const query = new URLSearchParams();

  if (provincia) {
    query.set("provincia", provincia);
  }

  if (finalidade) {
    query.set("finalidade", finalidade);
  }

  const queryString = query.toString();

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="border-b bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-6 text-sm text-green-100">
            <Link href="/" className="hover:text-white">
              Início
            </Link>{" "}
            /{" "}
            <Link href="/pecuaria" className="hover:text-white">
              Pecuária
            </Link>{" "}
            /{" "}
            <Link
              href="/pecuaria/bovinos/orientacoes"
              className="hover:text-white"
            >
              Bovinos
            </Link>{" "}
            / Instalações
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                AGROINOVA ANGOLA · BOVINOS
              </span>

              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Instalações
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
                Orientações para planeamento, construção e gestão de instalações
                destinadas à criação de bovinos, considerando segurança,
                conforto, higiene, ventilação, drenagem, acesso à água e
                facilidade de manejo.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  Manejo
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  Bem-estar
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  Higiene
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  Segurança
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl">
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_shed.jpg?width=1400"
                alt="Instalações para criação de bovinos"
                className="h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
          <form
            method="GET"
            className="grid gap-4 md:grid-cols-[1fr_1fr_auto]"
          >
            <div>
              <label
                htmlFor="provincia"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Província
              </label>

              <select
                id="provincia"
                name="provincia"
                defaultValue={provincia}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-700"
              >
                <option value="">Todas as províncias</option>

                {provincias.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="finalidade"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Finalidade da exploração
              </label>

              <select
                id="finalidade"
                name="finalidade"
                defaultValue={finalidade}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-700"
              >
                <option value="">Todas as finalidades</option>

                {finalidades.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full rounded-xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900 md:w-auto"
              >
                Aplicar
              </button>
            </div>
          </form>

          {(provincia || finalidade) && (
            <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
              <strong>Contexto selecionado:</strong>{" "}
              {provincia || "Todas as províncias"}
              {" · "}
              {finalidade || "Todas as finalidades"}
            </div>
          )}
        </div>
      </section>

      {/* NAVEGAÇÃO DOS TEMAS */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/pecuaria/bovinos/orientacoes/racas${
                queryString ? `?${queryString}` : ""
              }`}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-green-600 hover:text-green-800"
            >
              Raças
            </Link>

            <Link
              href={`/pecuaria/bovinos/orientacoes/alimentacao${
                queryString ? `?${queryString}` : ""
              }`}
              className="rounded-full border border-green-700 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800"
            >
              Alimentação
            </Link>

            <Link
              href={`/pecuaria/bovinos/orientacoes/instalacoes${
                queryString ? `?${queryString}` : ""
              }`}
              className="rounded-full border border-green-700 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800"
            >
              Instalações
            </Link>

            <Link
              href={`/pecuaria/bovinos/orientacoes/sanidade${
                queryString ? `?${queryString}` : ""
              }`}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-green-600 hover:text-green-800"
            >
              Sanidade
            </Link>

            <Link
              href={`/pecuaria/bovinos/orientacoes/reproducao${
                queryString ? `?${queryString}` : ""
              }`}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-green-600 hover:text-green-800"
            >
              Reprodução
            </Link>

            <Link
              href={`/pecuaria/bovinos/orientacoes/agua${
                queryString ? `?${queryString}` : ""
              }`}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-green-600 hover:text-green-800"
            >
              Água
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            01 · Fundamentos
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Uma boa instalação deve facilitar o trabalho e proteger os animais
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            As instalações não devem ser avaliadas apenas pela aparência ou
            pelo custo de construção. Uma estrutura adequada deve permitir que
            os animais tenham acesso à alimentação, água, sombra e áreas de
            descanso, ao mesmo tempo que facilita a limpeza, a observação do
            rebanho, a realização de tratamentos e a movimentação dos animais.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Em Angola, a escolha da instalação deve considerar as condições
            climáticas da região, o tipo de exploração, a disponibilidade de
            materiais, o tamanho do efetivo, a finalidade produtiva e a
            capacidade de manutenção do produtor. Uma instalação simples, mas
            bem localizada, ventilada, drenada e segura, pode ser mais útil do
            que uma construção cara que não responde às necessidades do
            rebanho.
          </p>
        </div>
      </section>

      {/* SISTEMAS */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              02 · Sistemas de alojamento
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              A instalação deve acompanhar o sistema de produção
            </h2>

            <p className="mt-4 text-slate-600">
              Não existe uma única estrutura adequada para todas as
              explorações. O desenho deve responder ao sistema de criação e ao
              nível de manejo disponível.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {sistemas.map((sistema) => (
              <article
                key={sistema.titulo}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={sistema.imagem}
                  alt={sistema.titulo}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {sistema.titulo}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {sistema.descricao}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {sistema.pontos.map((ponto) => (
                      <li
                        key={ponto}
                        className="flex gap-2 text-sm text-slate-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                        <span>{ponto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRUTURAS */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            03 · Estruturas essenciais
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            O que uma exploração bovina deve considerar
          </h2>

          <p className="mt-4 text-slate-600">
            A dimensão e o nível de construção podem variar, mas algumas
            funções são fundamentais para o manejo seguro do rebanho.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {estruturas.map((estrutura, index) => (
            <article
              key={estrutura.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 font-bold text-green-800">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {estrutura.titulo}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {estrutura.descricao}
              </p>

              <ul className="mt-5 space-y-2">
                {estrutura.pontos.map((ponto) => (
                  <li
                    key={ponto}
                    className="flex gap-2 text-sm text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                    <span>{ponto}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="bg-green-50 py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                04 · Localização
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Onde construir as instalações?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                A localização é uma decisão de produção e não apenas uma
                questão de construção. O terreno deve ser avaliado antes da
                implantação do curral, estábulo, sala de ordenha ou outras
                estruturas.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Deve-se evitar locais com acumulação frequente de água,
                dificuldade de acesso, risco elevado de erosão ou condições que
                dificultem a limpeza. A proximidade de água e alimento deve ser
                considerada sem comprometer a higiene ou a segurança dos
                animais.
              </p>
            </div>

            <div className="rounded-3xl border border-green-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Na escolha do terreno, verifique
              </h3>

              <ul className="mt-5 space-y-4">
                {[
                  "Drenagem natural do terreno.",
                  "Risco de inundação.",
                  "Acesso durante a época chuvosa.",
                  "Disponibilidade e qualidade da água.",
                  "Possibilidade de expansão futura.",
                  "Distância de zonas de risco sanitário.",
                  "Facilidade de transporte de alimentos e animais.",
                  "Proteção contra ventos e exposição excessiva ao sol.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VENTILAÇÃO E SOMBRA */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_shade.jpg?width=1200"
              alt="Bovinos protegidos por sombra"
              className="h-64 w-full object-cover"
            />

            <div className="p-7">
              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                Sombra
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Proteção contra calor e exposição solar
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Em regiões quentes, a disponibilidade de sombra pode ajudar a
                reduzir a exposição dos animais ao calor. A sombra pode ser
                natural, através de árvores adequadas e seguras, ou construída
                com estruturas apropriadas.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Áreas de sombra devem ser suficientemente seguras, não
                apresentar estruturas cortantes e não criar zonas permanentes
                de lama ou acumulação de dejetos.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Ventilação
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Ar e conforto dentro das instalações
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Instalações excessivamente fechadas podem dificultar a circulação
              de ar e aumentar a humidade. Em sistemas de alojamento, o projeto
              deve favorecer ventilação adequada sem criar condições perigosas
              para os animais.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Evitar construções completamente fechadas sem necessidade.",
                "Permitir circulação de ar.",
                "Reduzir acumulação de humidade.",
                "Manter as áreas de descanso secas.",
                "Observar sinais de desconforto térmico.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* HIGIENE */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              05 · Higiene
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Instalação limpa também é uma ferramenta de prevenção
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A higiene das instalações deve fazer parte da rotina de manejo.
              Fezes, urina, lama, restos de alimento e água contaminada podem
              criar condições desfavoráveis à saúde do rebanho. A limpeza deve
              ser acompanhada por boa drenagem e organização dos espaços.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Limpeza", "Remover regularmente fezes e restos de alimentos."],
              [
                "Drenagem",
                "Evitar água acumulada nas zonas de circulação.",
              ],
              [
                "Desinfeção",
                "Aplicar procedimentos apropriados quando indicados.",
              ],
              [
                "Resíduos",
                "Gerir corretamente esterco, águas residuais e outros resíduos.",
              ],
            ].map(([titulo, texto]) => (
              <article
                key={titulo}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-bold text-slate-900">{titulo}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REALIDADE ANGOLANA */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="rounded-3xl border border-green-200 bg-green-50 p-7 md:p-10">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            06 · Realidade angolana
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Construir de acordo com os recursos disponíveis
          </h2>

          <p className="mt-5 max-w-5xl leading-8 text-slate-700">
            Nas explorações familiares e de pequena escala, nem sempre é
            possível construir instalações sofisticadas. Isso não significa
            que o produtor tenha de abdicar de princípios básicos de segurança,
            higiene e bem-estar. O mais importante é priorizar as estruturas
            que resolvem os principais problemas da exploração.
          </p>

          <p className="mt-4 max-w-5xl leading-8 text-slate-700">
            Uma exploração que tenha recursos limitados pode começar por
            melhorar a vedação, garantir água limpa, criar uma zona de sombra,
            construir um curral funcional e proteger os alimentos. À medida que
            a produção aumenta, outras estruturas podem ser acrescentadas.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Segurança dos animais",
              "Água limpa",
              "Sombra",
              "Drenagem",
              "Manejo",
              "Higiene",
              "Armazenamento",
              "Assistência técnica",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-green-200 bg-white px-4 py-4 text-sm font-semibold text-green-900"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            07 · Erros frequentes
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Problemas que devem ser evitados
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {erros.map((erro, index) => (
              <div
                key={erro}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <span className="mr-3 font-bold text-green-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {erro}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              08 · Checklist
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Avaliação rápida da instalação
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Utilize esta lista como ferramenta de observação. Ela não
              substitui uma avaliação técnica ou veterinária.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {checklist.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="mr-3 font-bold text-green-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSISTÊNCIA */}
      <section className="bg-green-900 py-14 text-white">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-green-200">
            09 · Acompanhamento técnico
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Quando procurar assistência?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-green-50">
            A construção ou alteração de instalações deve considerar o sistema
            de produção, o número de animais, o terreno, o clima e as
            necessidades de manejo. Para projetos maiores, instalações de
            ordenha, contenção, quarentena ou alterações estruturais
            significativas, é recomendável procurar orientação de um técnico
            pecuário, médico veterinário ou profissional habilitado.
          </p>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Fontes técnicas de referência
        </h2>

        <div className="mt-5 space-y-3 text-sm text-slate-600">
          <p>
            • FAO — Livestock housing: princípios de planeamento, drenagem,
            alimentação, circulação e manejo de instalações para bovinos.
          </p>

          <p>
            • FAO AGRIS — estudos sobre sistemas de alojamento, sombra,
            ventilação, piso, espaço e bem-estar de bovinos.
          </p>

          <p>
            • FAO — Biosecurity in terrestrial animal value chains: princípios
            de higiene, segregação, gestão de resíduos e prevenção de riscos
            sanitários.
          </p>
        </div>
      </section>

      {/* NAVEGAÇÃO FINAL */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <Link
            href={`/pecuaria/bovinos/orientacoes${
              queryString ? `?${queryString}` : ""
            }`}
            className="font-semibold text-green-800 hover:text-green-950"
          >
            ← Voltar às orientações de bovinos
          </Link>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/pecuaria/bovinos/orientacoes/sanidade${
                queryString ? `?${queryString}` : ""
              }`}
              className="rounded-xl bg-green-800 px-5 py-3 font-semibold text-white hover:bg-green-900"
            >
              Próximo: Sanidade →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}