export default function TecnologiasPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Tecnologia agrícola
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
            Tecnologia e inovação para uma agricultura mais inteligente.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-100">
            Conheça tecnologias, ferramentas e soluções digitais que
            podem apoiar produtores, investigadores e profissionais
            do sector agropecuário.
          </p>

        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Soluções
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Tecnologias agrícolas
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore tecnologias que podem contribuir para aumentar
              a produtividade, melhorar a gestão e apoiar a tomada
              de decisões no sector agropecuário.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* INTELIGÊNCIA ARTIFICIAL */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-5xl">
                🤖
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Inteligência Artificial
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Aplicação de inteligência artificial na análise de
                dados, apoio à decisão e identificação de problemas.
              </p>

            </div>

            {/* SENSORIAMENTO REMOTO */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-5xl">
                🛰️
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Sensoriamento remoto
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Utilização de imagens e dados geográficos para
                acompanhar áreas agrícolas.
              </p>

            </div>

            {/* AGRICULTURA DIGITAL */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-5xl">
                📱
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Agricultura digital
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Plataformas e aplicações digitais para produtores
                e profissionais do sector.
              </p>

            </div>

            {/* IRRIGAÇÃO INTELIGENTE */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-5xl">
                💧
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Irrigação inteligente
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Tecnologias para melhorar a utilização e gestão
                da água na produção agrícola.
              </p>

            </div>

            {/* MECANIZAÇÃO */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-5xl">
                🚜
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Mecanização
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Máquinas e equipamentos destinados a aumentar
                a eficiência das operações agrícolas.
              </p>

            </div>

            {/* DADOS AGRÍCOLAS */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-5xl">
                📊
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Dados agrícolas
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Ferramentas para recolha, organização e análise
                de dados agrícolas.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ÁREAS FUTURAS */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Futuro da plataforma
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Tecnologias que poderão integrar a AGROINOVA
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              A plataforma poderá evoluir para integrar ferramentas
              digitais destinadas à monitorização, análise e apoio
              à actividade agropecuária em Angola.
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border bg-gray-50 p-6">
              <div className="text-3xl">🌱</div>
              <h3 className="mt-4 font-bold">
                Monitorização de culturas
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Acompanhamento do desenvolvimento das culturas.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6">
              <div className="text-3xl">🧠</div>
              <h3 className="mt-4 font-bold">
                AGROIA
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Futuro assistente de inteligência artificial
                dedicado à agricultura.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6">
              <div className="text-3xl">🗺️</div>
              <h3 className="mt-4 font-bold">
                Mapa agrícola
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Informação geográfica sobre o sector agropecuário.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-6">
              <div className="text-3xl">🌦️</div>
              <h3 className="mt-4 font-bold">
                Clima e agricultura
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Dados climáticos para apoiar decisões agrícolas.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-green-700 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Inovação para o campo angolano
          </h2>

          <p className="mt-5 leading-7 text-green-100">
            A tecnologia pode aproximar conhecimento, produtores,
            investigadores e instituições.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/investigacao"
              className="rounded-lg bg-white px-7 py-3 font-semibold text-green-800 hover:bg-gray-100"
            >
              Explorar investigação
            </a>

            <a
              href="/biblioteca"
              className="rounded-lg border border-white px-7 py-3 font-semibold text-white hover:bg-white hover:text-green-800"
            >
              Consultar biblioteca
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}