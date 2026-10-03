export default function BibliotecaPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Biblioteca digital
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
            Conhecimento agrícola num único espaço.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-100">
            Consulte livros, artigos, manuais, relatórios, teses e
            outros materiais relacionados com agricultura e pecuária.
          </p>

        </div>
      </section>

      {/* PESQUISA */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-5xl px-6">

          <div className="flex flex-col gap-3 md:flex-row">

            <input
              type="text"
              placeholder="Pesquisar na biblioteca..."
              className="flex-1 rounded-lg border border-gray-200 px-5 py-3 outline-none focus:border-green-600"
            />

            <button className="rounded-lg bg-green-700 px-8 py-3 font-semibold text-white hover:bg-green-800">
              Pesquisar
            </button>

          </div>

        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* LIVROS */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">
                📚
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Livros
              </h3>

              <p className="mt-2 text-gray-600">
                Obras relacionadas com agricultura e desenvolvimento rural.
              </p>

            </div>

            {/* ARTIGOS */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">
                📄
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Artigos
              </h3>

              <p className="mt-2 text-gray-600">
                Artigos científicos e publicações académicas.
              </p>

            </div>

            {/* TESES */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">
                🎓
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Teses
              </h3>

              <p className="mt-2 text-gray-600">
                Trabalhos académicos e pesquisas científicas.
              </p>

            </div>

            {/* RELATÓRIOS */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-4xl">
                📋
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Relatórios
              </h3>

              <p className="mt-2 text-gray-600">
                Relatórios técnicos e documentos institucionais.
              </p>

            </div>

          </div>

          {/* MATERIAIS EM DESTAQUE */}
          <div className="mt-16">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Biblioteca AGROINOVA
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Materiais em destaque
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Consulte materiais técnicos, científicos e informativos
              relacionados com o sector agropecuário.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              {/* MATERIAL 1 */}
              <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <span className="text-xs font-bold text-green-700">
                  MANUAL
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Boas práticas agrícolas
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Material de apoio para produtores e técnicos agrícolas.
                </p>

                <button className="mt-5 font-semibold text-green-700 hover:text-green-900">
                  Consultar →
                </button>

              </article>

              {/* MATERIAL 2 */}
              <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <span className="text-xs font-bold text-green-700">
                  ARTIGO
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Inovação no sector agrícola
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Conteúdo sobre inovação e novas tecnologias agrícolas.
                </p>

                <button className="mt-5 font-semibold text-green-700 hover:text-green-900">
                  Consultar →
                </button>

              </article>

              {/* MATERIAL 3 */}
              <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <span className="text-xs font-bold text-green-700">
                  RELATÓRIO
                </span>

                <h3 className="mt-3 text-xl font-bold">
                  Agricultura em Angola
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Informação e dados sobre o sector agropecuário.
                </p>

                <button className="mt-5 font-semibold text-green-700 hover:text-green-900">
                  Consultar →
                </button>

              </article>

            </div>

          </div>

        </div>
      </section>

      {/* CHAMADA PARA AÇÃO */}
      <section className="bg-green-800 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Conhecimento para apoiar quem trabalha no campo.
          </h2>

          <p className="mt-5 leading-7 text-green-100">
            A Biblioteca Digital da AGROINOVA ANGOLA pretende reunir
            conhecimento científico, técnico e académico num único espaço.
          </p>

          <a
            href="/investigacao"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-green-800 hover:bg-gray-100"
          >
            Ver investigação
          </a>

        </div>

      </section>

    </main>
  );
}