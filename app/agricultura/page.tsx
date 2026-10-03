
export default function AgriculturaPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="bg-green-800 text-white">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-300">
              Agricultura em Angola
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Conhecimento para produzir,
              <span className="block text-green-300">
                inovar e transformar.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-green-50">
              Encontre informações sobre culturas agrícolas, técnicas
              de produção, boas práticas, inovação e desenvolvimento
              sustentável do sector agrícola angolano.
            </p>

          </div>

        </div>

      </section>


      {/* PESQUISA */}
      <section className="bg-white py-10">

        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-2xl border bg-gray-50 p-5">

            <label className="mb-3 block text-sm font-semibold">
              Pesquisar informação agrícola
            </label>

            <div className="flex flex-col gap-3 md:flex-row">

              <input
                type="text"
                placeholder="Ex.: milho, mandioca, soja, café..."
                className="flex-1 rounded-lg border border-gray-200 bg-white px-5 py-3 outline-none focus:border-green-600"
              />

              <button className="rounded-lg bg-green-700 px-7 py-3 font-semibold text-white hover:bg-green-800">
                Pesquisar
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* CULTURAS */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Culturas agrícolas
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Principais culturas
            </h2>

            <p className="mt-4 text-gray-600">
              Explore informações básicas sobre diferentes culturas
              agrícolas importantes para Angola.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* MILHO */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-5xl">
                🌽
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Milho
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Informação sobre produção, variedades, manejo,
                pragas e boas práticas.
              </p>

              <button className="mt-5 font-semibold text-green-700">
                Ver cultura →
              </button>

            </div>


            {/* MANDIOCA */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-5xl">
                🌿
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Mandioca
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Características, produção, processamento e
                aproveitamento da mandioca.
              </p>

              <button className="mt-5 font-semibold text-green-700">
                Ver cultura →
              </button>

            </div>


            {/* FEIJÃO */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-5xl">
                🫘
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Feijão
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Técnicas de cultivo, variedades, manejo e
                conservação da produção.
              </p>

              <button className="mt-5 font-semibold text-green-700">
                Ver cultura →
              </button>

            </div>


            {/* SOJA */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-5xl">
                🌱
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Soja
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Informação sobre cultivo, produtividade,
                manejo e tecnologias.
              </p>

              <button className="mt-5 font-semibold text-green-700">
                Ver cultura →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ÁREAS DE CONHECIMENTO */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Conhecimento agrícola
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Encontre informação por área
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-green-50 p-7">

              <div className="text-4xl">
                🌱
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Produção agrícola
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Técnicas de preparação do solo, plantio, manejo,
                colheita e pós-colheita.
              </p>

            </div>


            <div className="rounded-2xl bg-green-50 p-7">

              <div className="text-4xl">
                🐛
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Pragas e doenças
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Informação para identificação e gestão de problemas
                que afectam as culturas.
              </p>

            </div>


            <div className="rounded-2xl bg-green-50 p-7">

              <div className="text-4xl">
                💧
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Irrigação
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Conhecimentos sobre gestão da água e sistemas de
                irrigação agrícola.
              </p>

            </div>


            <div className="rounded-2xl bg-green-50 p-7">

              <div className="text-4xl">
                🌍
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Solos
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Informações sobre características, conservação e
                fertilidade dos solos.
              </p>

            </div>


            <div className="rounded-2xl bg-green-50 p-7">

              <div className="text-4xl">
                ☀️
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Clima
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Informação climática relevante para o planeamento
                das actividades agrícolas.
              </p>

            </div>


            <div className="rounded-2xl bg-green-50 p-7">

              <div className="text-4xl">
                🚜
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Mecanização
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Tecnologias e equipamentos utilizados na produção
                agrícola moderna.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-green-700 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            O conhecimento começa com o acesso à informação.
          </h2>

          <p className="mt-5 leading-7 text-green-100">
            A AGROINOVA ANGOLA pretende reunir conhecimento agrícola
            num único espaço digital.
          </p>

          <button className="mt-8 rounded-lg bg-white px-7 py-3 font-semibold text-green-800 hover:bg-gray-100">
            Explorar conhecimento
          </button>

        </div>

      </section>

    </main>
  );
}
