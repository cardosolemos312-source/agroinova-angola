import Link from "next/link";

interface AlimentacaoBovinosPageProps {
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
  "Dupla aptidão",
  "Reprodução",
];

const fases = [
  {
    titulo: "Bezerros e bezerras",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Calf.jpg?width=1200",
    texto:
      "Os animais jovens apresentam necessidades nutricionais importantes para crescimento, desenvolvimento ósseo, formação muscular e preparação para a futura vida produtiva. A alimentação deve acompanhar a idade e o desenvolvimento do animal.",
    pontos: [
      "Garantir colostro adequado imediatamente após o nascimento.",
      "Introduzir progressivamente alimentos próprios para animais jovens.",
      "Disponibilizar água limpa.",
      "Evitar alimentos mofados ou deteriorados.",
      "Acompanhar crescimento e condição corporal.",
    ],
  },
  {
    titulo: "Animais em crescimento",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Young_cattle.jpg?width=1200",
    texto:
      "Na fase de crescimento, o objetivo é proporcionar desenvolvimento adequado sem provocar crescimento desequilibrado ou excesso de gordura. A qualidade das pastagens e das forragens tem grande importância nos sistemas extensivos.",
    pontos: [
      "Acompanhar a disponibilidade de pastagem.",
      "Fornecer suplementação quando a qualidade ou quantidade do pasto for insuficiente.",
      "Garantir água durante todo o dia.",
      "Evitar períodos prolongados de subalimentação.",
      "Observar peso, condição corporal e desenvolvimento.",
    ],
  },
  {
    titulo: "Bovinos de corte",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_in_pasture.jpg?width=1200",
    texto:
      "Nos sistemas de produção de carne, a alimentação deve permitir crescimento eficiente e manutenção de condição corporal adequada. Pastagem, forragens conservadas e suplementos podem ser utilizados de acordo com o sistema de produção.",
    pontos: [
      "Avaliar a disponibilidade e qualidade do pasto.",
      "Planejar períodos de escassez de forragem.",
      "Utilizar suplementação quando tecnicamente necessária.",
      "Garantir minerais adequados.",
      "Acompanhar ganho de peso e condição corporal.",
    ],
  },
  {
    titulo: "Vacas leiteiras",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Dairy_cows.jpg?width=1200",
    texto:
      "As vacas leiteiras possuem necessidades nutricionais elevadas, principalmente durante o período de produção de leite. A alimentação deve fornecer energia, proteína, minerais, vitaminas e água em quantidade adequada.",
    pontos: [
      "Garantir acesso permanente à água.",
      "Fornecer forragem de boa qualidade.",
      "Ajustar suplementação à produção de leite.",
      "Monitorizar a condição corporal.",
      "Observar alterações no consumo e na produção.",
    ],
  },
  {
    titulo: "Vacas gestantes",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cow_pregnant.jpg?width=1200",
    texto:
      "Durante a gestação, a alimentação deve manter a condição corporal da vaca e apoiar o desenvolvimento do feto. O manejo alimentar deve evitar tanto a subnutrição como o excesso de gordura.",
    pontos: [
      "Avaliar regularmente a condição corporal.",
      "Garantir pastagem ou forragem suficiente.",
      "Fornecer minerais adequados.",
      "Evitar longos períodos sem alimento.",
      "Aumentar a atenção nutricional no final da gestação.",
    ],
  },
  {
    titulo: "Touros reprodutores",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bull_in_pasture.jpg?width=1200",
    texto:
      "Os touros utilizados na reprodução precisam manter boa condição corporal, estrutura física adequada e capacidade de deslocação. A alimentação deve evitar tanto emagrecimento excessivo como obesidade.",
    pontos: [
      "Manter condição corporal adequada.",
      "Garantir água de qualidade.",
      "Disponibilizar pastagem ou forragem suficiente.",
      "Acompanhar peso e estado corporal.",
      "Evitar excesso de gordura antes da estação reprodutiva.",
    ],
  },
];

const principios = [
  {
    titulo: "Pastagem",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_grazing.jpg?width=1200",
    texto:
      "A pastagem constitui uma das principais fontes de alimentação nos sistemas bovinos. A qualidade depende da espécie forrageira, estágio de crescimento, fertilidade do solo, chuva, manejo e pressão de pastejo.",
  },
  {
    titulo: "Forragens",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hay_bales.jpg?width=1200",
    texto:
      "Forragens cortadas ou conservadas podem complementar a alimentação durante períodos de menor disponibilidade de pastagem. A conservação correta reduz perdas e ajuda a manter qualidade.",
  },
  {
    titulo: "Suplementação",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_feeding.jpg?width=1200",
    texto:
      "A suplementação pode ser utilizada quando a pastagem ou forragem não cobre as necessidades dos animais. Deve ser definida de acordo com a categoria animal e o objetivo produtivo.",
  },
  {
    titulo: "Minerais",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mineral_supplement_cattle.jpg?width=1200",
    texto:
      "Os minerais participam de funções importantes relacionadas com crescimento, reprodução, desenvolvimento ósseo e metabolismo. A utilização deve considerar a dieta e as condições locais.",
  },
];

const erros = [
  "Deixar os animais passar longos períodos sem alimento.",
  "Não garantir água suficiente.",
  "Utilizar pastagens excessivamente degradadas.",
  "Introduzir mudanças bruscas na alimentação.",
  "Fornecer alimentos mofados ou deteriorados.",
  "Não planear alimentação para a época seca.",
  "Não acompanhar a condição corporal dos animais.",
  "Utilizar suplementos sem conhecer a sua finalidade.",
  "Ignorar as necessidades diferentes entre categorias animais.",
  "Não procurar assistência técnica quando surgem problemas nutricionais.",
];

export default async function AlimentacaoBovinosPage({
  searchParams,
}: AlimentacaoBovinosPageProps) {
  const params = await searchParams;

  const provincia = params.provincia || "Huambo";
  const finalidade = params.finalidade || "Produção de carne";

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-green-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          {/* BREADCRUMB */}
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-green-700">
              Início
            </Link>

            <span>›</span>

            <Link href="/pecuaria" className="hover:text-green-700">
              Pecuária
            </Link>

            <span>›</span>

            <Link
              href="/pecuaria/bovinos/orientacoes"
              className="hover:text-green-700"
            >
              Bovinos
            </Link>

            <span>›</span>

            <span className="font-medium text-slate-700">
              Alimentação
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                AGROINOVA ANGOLA · BOVINOS
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Alimentação
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Orientações sobre alimentação, pastagem, forragens,
                suplementação, minerais, água e gestão dos recursos
                disponíveis para bovinos.
              </p>

              <div className="mt-7 rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                  Orientação aplicada à realidade angolana
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  A alimentação deve ser definida considerando a finalidade
                  produtiva, disponibilidade de pastagem, recursos
                  alimentares, água, clima, condição dos animais e sistema
                  de produção.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_grazing.jpg?width=1400"
                alt="Bovinos em pastagem"
                className="h-[360px] w-full object-cover"
              />

              <div className="border-t px-5 py-3">
                <p className="text-xs text-slate-500">
                  Imagem ilustrativa de bovinos em pastagem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <form
            method="GET"
            className="grid gap-5 md:grid-cols-3 md:items-end"
          >
            <div>
              <label
                htmlFor="provincia"
                className="mb-2 block text-sm font-bold text-slate-800"
              >
                Província
              </label>

              <select
                id="provincia"
                name="provincia"
                defaultValue={provincia}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-600"
              >
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
                className="mb-2 block text-sm font-bold text-slate-800"
              >
                Finalidade
              </label>

              <select
                id="finalidade"
                name="finalidade"
                defaultValue={finalidade}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-600"
              >
                {finalidades.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800"
            >
              Aplicar orientação
            </button>
          </form>

          <div className="mt-5 rounded-xl bg-green-50 px-5 py-4 text-sm text-green-900">
            <strong>Contexto selecionado:</strong>{" "}
            {provincia} · {finalidade}
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO DE TEMAS */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/pecuaria/bovinos/orientacoes/racas?provincia=${encodeURIComponent(
                provincia
              )}&finalidade=${encodeURIComponent(finalidade)}`}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:border-green-500 hover:text-green-700"
            >
              Raças e biotipos
            </Link>

            <Link
              href={`/pecuaria/bovinos/orientacoes/alimentacao?provincia=${encodeURIComponent(
                provincia
              )}&finalidade=${encodeURIComponent(finalidade)}`}
              className="rounded-xl bg-green-700 px-4 py-3 text-sm font-semibold text-white"
            >
              Alimentação
            </Link>

            <Link
              href={`/pecuaria/bovinos/orientacoes/instalacoes?provincia=${encodeURIComponent(
                provincia
              )}&finalidade=${encodeURIComponent(finalidade)}`}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:border-green-500 hover:text-green-700"
            >
              Instalações
            </Link>

            <Link
              href={`/pecuaria/bovinos/orientacoes/sanidade?provincia=${encodeURIComponent(
                provincia
              )}&finalidade=${encodeURIComponent(finalidade)}`}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:border-green-500 hover:text-green-700"
            >
              Sanidade
            </Link>

            <Link
              href={`/pecuaria/bovinos/orientacoes/reproducao?provincia=${encodeURIComponent(
                provincia
              )}&finalidade=${encodeURIComponent(finalidade)}`}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:border-green-500 hover:text-green-700"
            >
              Reprodução
            </Link>

            <Link
              href={`/pecuaria/bovinos/orientacoes/agua?provincia=${encodeURIComponent(
                provincia
              )}&finalidade=${encodeURIComponent(finalidade)}`}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:border-green-500 hover:text-green-700"
            >
              Água
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_.6fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Base da produção
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Por que a alimentação é fundamental?
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                A alimentação é um dos principais componentes do sistema de
                produção bovina. Ela influencia o crescimento, desenvolvimento,
                reprodução, condição corporal, produção de leite e desempenho
                dos animais destinados à produção de carne.
              </p>

              <p>
                Nos sistemas de criação baseados em pastagem, a disponibilidade
                e qualidade da vegetação são determinantes. Durante períodos de
                maior disponibilidade de forragem, os animais podem obter uma
                parte significativa das suas necessidades diretamente do
                pasto.
              </p>

              <p>
                Durante períodos de escassez, porém, a quantidade e qualidade
                da alimentação podem diminuir. Nessas situações, o produtor
                deve planear previamente alternativas como conservação de
                forragens, utilização de resíduos agrícolas apropriados ou
                suplementação.
              </p>

              <p>
                A alimentação também precisa acompanhar a categoria animal.
                Bezerros, animais em crescimento, vacas gestantes, vacas em
                lactação, bovinos de corte e touros reprodutores apresentam
                necessidades diferentes.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-green-100 bg-green-50 p-7">
            <h3 className="text-xl font-black text-green-900">
              Regra fundamental
            </h3>

            <p className="mt-4 leading-7 text-green-900/80">
              Não existe uma única alimentação adequada para todos os bovinos.
              A dieta deve acompanhar a idade, peso, estado fisiológico,
              finalidade produtiva e sistema de criação.
            </p>

            <div className="mt-6 rounded-2xl bg-white p-5">
              <p className="text-sm font-bold text-slate-900">
                Antes de alterar a alimentação:
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                observe a condição corporal, disponibilidade de pastagem,
                qualidade das forragens, acesso à água e comportamento dos
                animais.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FASES */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Maneio alimentar
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Alimentação por categoria animal
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              O programa alimentar deve acompanhar a fase de desenvolvimento e
              a finalidade produtiva dos bovinos.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {fases.map((fase) => (
              <article
                key={fase.titulo}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={fase.imagem}
                  alt={fase.titulo}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />

                <div className="p-7">
                  <h3 className="text-2xl font-black text-slate-900">
                    {fase.titulo}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {fase.texto}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {fase.pontos.map((ponto) => (
                      <li
                        key={ponto}
                        className="flex gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
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

      {/* PRINCÍPIOS */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Recursos alimentares
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Componentes importantes da alimentação
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Pastagem, forragem, suplementação e minerais devem ser analisados
            em conjunto com a água e as condições da exploração.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {principios.map((principio) => (
            <article
              key={principio.titulo}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={principio.imagem}
                alt={principio.titulo}
                className="h-48 w-full object-cover"
                loading="lazy"
              />

              <div className="p-6">
                <h3 className="text-xl font-black text-slate-900">
                  {principio.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principio.texto}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REALIDADE ANGOLANA */}
      <section className="border-y border-green-100 bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Angola
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Alimentação e realidade das explorações angolanas
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                As condições alimentares das explorações bovinas podem variar
                significativamente entre regiões e sistemas de criação. Por
                essa razão, não é adequado recomendar uma única dieta para
                todo o território nacional.
              </p>

              <p>
                Em sistemas predominantemente baseados em pastagem, o produtor
                deve acompanhar a disponibilidade de forragem ao longo do ano.
                A época seca pode exigir maior planeamento para evitar perda
                excessiva de condição corporal.
              </p>

              <p>
                A conservação de forragens, quando tecnicamente possível, pode
                ajudar a criar reservas para períodos de menor disponibilidade.
                O produtor deve avaliar previamente a quantidade necessária e
                a qualidade do material conservado.
              </p>

              <p>
                A utilização de subprodutos ou ingredientes locais também deve
                ser avaliada com cuidado. Um produto disponível localmente não
                deve ser utilizado como alimento principal sem considerar o seu
                valor nutricional e possíveis riscos de contaminação.
              </p>

              <p>
                Para explorações comerciais, a formulação das dietas e a
                definição de suplementos devem, sempre que possível, contar
                com assistência técnica especializada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Recurso essencial
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Água faz parte da alimentação
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                A água é essencial para os bovinos e deve estar disponível em
                quantidade adequada. A falta de água pode reduzir o consumo de
                alimentos e comprometer o desempenho dos animais.
              </p>

              <p>
                Os pontos de abeberamento devem ser mantidos limpos e
                acessíveis. O produtor deve verificar regularmente se os
                bebedouros ou fontes de água estão a funcionar.
              </p>

              <p>
                Em períodos de temperaturas elevadas, a disponibilidade de
                água torna-se ainda mais importante. Também deve ser considerada
                a qualidade da água utilizada pelos animais.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_drinking_water.jpg?width=1200"
              alt="Bovinos a beber água"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Evitar
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Erros frequentes na alimentação dos bovinos
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {erros.map((erro, index) => (
              <div
                key={erro}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-black text-red-600">
                  {index + 1}
                </span>

                <p className="text-sm leading-7 text-slate-600">
                  {erro}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-3xl border border-green-100 bg-green-50 p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Ferramenta prática
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Checklist diário do produtor
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Existe água limpa disponível?",
              "Os pontos de água estão a funcionar?",
              "Existe pastagem suficiente?",
              "A forragem apresenta boa qualidade?",
              "Há sinais de alimento mofado ou deteriorado?",
              "Os animais estão a consumir normalmente?",
              "Existem animais excessivamente magros?",
              "Existem animais com excesso de gordura?",
              "A condição corporal está adequada?",
              "Existe alimento suficiente para o período seco?",
              "Os suplementos estão armazenados corretamente?",
              "Os animais jovens estão a crescer adequadamente?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 text-sm leading-6 text-slate-700"
              >
                ☐ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSISTÊNCIA */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-300">
              Assistência técnica
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Quando procurar orientação profissional?
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-300">
              <p>
                A orientação técnica é especialmente importante quando o
                produtor pretende formular dietas, utilizar novos ingredientes,
                corrigir problemas de crescimento, preparar animais para
                reprodução ou recuperar animais com perda significativa de
                condição corporal.
              </p>

              <p>
                Problemas de alimentação também podem estar relacionados com
                doenças, parasitas, qualidade da água ou problemas de maneio.
                Por isso, uma alteração persistente no consumo ou no estado dos
                animais deve ser investigada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-7">
          <h2 className="text-2xl font-black text-slate-900">
            Fontes e aprofundamento
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            As orientações devem ser complementadas por literatura técnica,
            assistência veterinária e informações específicas das condições da
            exploração.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.fao.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-green-200 bg-green-50 px-5 py-3 text-sm font-bold text-green-800 hover:bg-green-100"
            >
              FAO
            </a>

            <Link
              href="/biblioteca"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              Biblioteca AGROINOVA
            </Link>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row lg:px-8">
          <Link
            href={`/pecuaria/bovinos/orientacoes/racas?provincia=${encodeURIComponent(
              provincia
            )}&finalidade=${encodeURIComponent(finalidade)}`}
            className="rounded-xl border border-slate-300 px-6 py-3 text-center text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            ← Raças e biotipos
          </Link>

          <Link
            href="/pecuaria/bovinos/orientacoes"
            className="rounded-xl bg-green-700 px-6 py-3 text-center text-sm font-bold text-white hover:bg-green-800"
          >
            Todas as orientações
          </Link>

          <Link
            href="/pecuaria"
            className="rounded-xl border border-slate-300 px-6 py-3 text-center text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Pecuária
          </Link>
        </div>
      </section>
    </main>
  );
}