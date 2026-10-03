export default function InvestigacaoPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="max-w-4xl">

            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-green-300">
              Investigação agropecuária
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Ciência e conhecimento
              <span className="block text-green-300">
                ao serviço da agricultura.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
              Um espaço para reunir estudos, pesquisas, projectos,
              artigos científicos e conhecimento produzido sobre o
              sector agropecuário de Angola.
            </p>

          </div>

        </div>
      </section>

      {/* PESQUISA */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-2xl border bg-gray-50 p-5">

            <label className="mb-3 block text-sm font-semibold">
              Pesquisar investigação
            </label>

            <div className="flex flex-col gap-3 md:flex-row">

              <input
                type="text"
                placeholder="Ex.: milho, solos, irrigação, pecuária..."
                className="flex-1 rounded-lg border border-gray-200 bg-white px-5 py-3 outline-none focus:border-green-600"
              />

              <button className="rounded-lg bg-green-700 px-7 py-3 font-semibold text-white hover:bg-green-800">
                Pesquisar
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Áreas de investigação
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Conhecimento científico para o sector
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Organize e consulte conhecimentos científicos relacionados
              com os principais desafios da agricultura e pecuária.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* PRODUÇÃO VEGETAL */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">
                🌾
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Produção vegetal
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Pesquisas relacionadas com culturas, produtividade,
                sementes, fertilização e práticas agrícolas.
              </p>

            </div>

            {/* PRODUÇÃO ANIMAL */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">
                🐄
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Produção animal
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Estudos relacionados com pecuária, alimentação animal,
                reprodução e sanidade.
              </p>

            </div>

            {/* SOLOS */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">
                🌍
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Solos
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Investigação sobre fertilidade, conservação e utilização
                sustentável dos solos.
              </p>

            </div>

            {/* ÁGUA E IRRIGAÇÃO */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">
                💧
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Água e irrigação
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Estudos sobre gestão da água, irrigação e eficiência
                hídrica na produção agrícola.
              </p>

            </div>

            {/* CLIMA */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">
                🌦️
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Clima e agricultura
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Investigação sobre clima, produção agrícola e adaptação
                às alterações climáticas.
              </p>

            </div>

            {/* AGRICULTURA DIGITAL */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">
                🤖
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Agricultura digital
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Tecnologias digitais, inteligência artificial, dados
                e inovação aplicados à agricultura.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* PUBLICAÇÕES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                Conhecimento
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Publicações e estudos
              </h2>

              <p className="mt-3 max-w-2xl text-gray-600">
                Consulte estudos, artigos científicos e relatórios
                relacionados com o desenvolvimento agropecuário.
              </p>

            </div>

            <a
              href="/biblioteca"
              className="font-semibold text-green-700 hover:text-green-900"
            >
              Ver biblioteca →
            </a>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {/* PUBLICAÇÃO 1 */}
            <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <span className="text-xs font-semibold text-green-700">
                ARTIGO CIENTÍFICO
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Investigação e inovação agrícola em Angola
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Estudos e conhecimentos destinados a apoiar o
                desenvolvimento do sector agrícola.
              </p>

              <a
                href="/biblioteca"
                className="mt-5 inline-block font-semibold text-green-700 hover:text-green-900"
              >
                Ler publicação →
              </a>

            </article>

            {/* PUBLICAÇÃO 2 */}
            <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <span className="text-xs font-semibold text-green-700">
                ESTUDO
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Tecnologias para pequenos produtores
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Análise de soluções tecnológicas aplicáveis à
                agricultura familiar.
              </p>

              <a
                href="/biblioteca"
                className="mt-5 inline-block font-semibold text-green-700 hover:text-green-900"
              >
                Ler estudo →
              </a>

            </article>

            {/* PUBLICAÇÃO 3 */}
            <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <span className="text-xs font-semibold text-green-700">
                RELATÓRIO
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Dados e conhecimento agropecuário
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Informação organizada para investigadores, técnicos
                e profissionais do sector.
              </p>

              <a
                href="/biblioteca"
                className="mt-5 inline-block font-semibold text-green-700 hover:text-green-900"
              >
                Ler relatório →
              </a>

            </article>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            A investigação pode transformar a agricultura.
          </h2>

          <p className="mt-5 leading-7 text-green-100">
            A AGROINOVA ANGOLA pretende aproximar investigadores,
            instituições, técnicos e produtores através do conhecimento.
          </p>

          <a
            href="/biblioteca"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-green-800 hover:bg-gray-100"
          >
            Explorar investigação
          </a>

        </div>

      </section>

    </main>
  );
}