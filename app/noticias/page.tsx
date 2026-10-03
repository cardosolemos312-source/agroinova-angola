export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Notícias agropecuárias
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
            Informação sobre o sector agrícola.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-100">
            Acompanhe notícias, iniciativas, eventos, oportunidades
            e acontecimentos relacionados com agricultura e pecuária.
          </p>

        </div>
      </section>

      {/* NOTÍCIAS */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Actualidade
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Últimas notícias
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Acompanhe informações sobre agricultura, investigação,
              tecnologia, produtores e desenvolvimento agropecuário em Angola.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* NOTÍCIA 1 */}
            <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-48 items-center justify-center bg-green-100 text-7xl">
                🌾
              </div>

              <div className="p-6">

                <span className="text-xs font-bold uppercase text-green-700">
                  Agricultura
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Inovação e conhecimento no campo angolano
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Informação sobre iniciativas e soluções destinadas
                  ao desenvolvimento agrícola.
                </p>

                <button className="mt-5 font-semibold text-green-700 hover:text-green-900">
                  Ler notícia →
                </button>

              </div>

            </article>

            {/* NOTÍCIA 2 */}
            <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-48 items-center justify-center bg-green-100 text-7xl">
                🚜
              </div>

              <div className="p-6">

                <span className="text-xs font-bold uppercase text-green-700">
                  Tecnologia
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Novas tecnologias aplicadas à agricultura
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Conheça ferramentas digitais e soluções tecnológicas
                  para o sector agropecuário.
                </p>

                <button className="mt-5 font-semibold text-green-700 hover:text-green-900">
                  Ler notícia →
                </button>

              </div>

            </article>

            {/* NOTÍCIA 3 */}
            <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-48 items-center justify-center bg-green-100 text-7xl">
                🔬
              </div>

              <div className="p-6">

                <span className="text-xs font-bold uppercase text-green-700">
                  Investigação
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Ciência e investigação agropecuária
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Estudos, pesquisas e iniciativas científicas
                  relacionadas com agricultura.
                </p>

                <button className="mt-5 font-semibold text-green-700 hover:text-green-900">
                  Ler notícia →
                </button>

              </div>

            </article>

            {/* NOTÍCIA 4 */}
            <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-48 items-center justify-center bg-green-100 text-7xl">
                👨‍🌾
              </div>

              <div className="p-6">

                <span className="text-xs font-bold uppercase text-green-700">
                  Produtores
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Conhecimento para produtores
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Informação útil para apoiar produtores nas suas
                  actividades agrícolas.
                </p>

                <button className="mt-5 font-semibold text-green-700 hover:text-green-900">
                  Ler notícia →
                </button>

              </div>

            </article>

            {/* NOTÍCIA 5 */}
            <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-48 items-center justify-center bg-green-100 text-7xl">
                🎓
              </div>

              <div className="p-6">

                <span className="text-xs font-bold uppercase text-green-700">
                  Formação
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Formação e capacitação agrícola
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Cursos, capacitações e oportunidades para estudantes
                  e profissionais.
                </p>

                <button className="mt-5 font-semibold text-green-700 hover:text-green-900">
                  Ler notícia →
                </button>

              </div>

            </article>

            {/* NOTÍCIA 6 */}
            <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-48 items-center justify-center bg-green-100 text-7xl">
                🇦🇴
              </div>

              <div className="p-6">

                <span className="text-xs font-bold uppercase text-green-700">
                  Angola
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Desenvolvimento do sector agropecuário
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Acompanhe iniciativas e acontecimentos ligados
                  ao desenvolvimento agrícola nacional.
                </p>

                <button className="mt-5 font-semibold text-green-700 hover:text-green-900">
                  Ler notícia →
                </button>

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* CHAMADA PARA AÇÃO */}
      <section className="bg-green-700 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Informação para quem trabalha com agricultura.
          </h2>

          <p className="mt-5 leading-7 text-green-100">
            A AGROINOVA ANGOLA pretende reunir informação agrícola
            num espaço digital acessível e organizado.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/agricultura"
              className="rounded-lg bg-white px-7 py-3 font-semibold text-green-800 hover:bg-gray-100"
            >
              Explorar agricultura
            </a>

            <a
              href="/investigacao"
              className="rounded-lg border border-white px-7 py-3 font-semibold text-white hover:bg-white hover:text-green-800"
            >
              Ver investigação
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}