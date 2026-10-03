export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-700 text-white">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">

          <div>

            <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-green-100">
              🇦🇴 Plataforma Nacional de Agricultura
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-green-50">
              A AGROINOVA ANGOLA é uma plataforma nacional dedicada à
              investigação, conhecimento, inovação, tecnologia e informação
              agropecuária de Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/agricultura"
                className="rounded-lg bg-white px-6 py-3 font-bold text-green-900 hover:bg-gray-100"
              >
                Explorar Agricultura
              </a>

              <a
                href="/investigacao"
                className="rounded-lg border border-white px-6 py-3 font-bold text-white hover:bg-white hover:text-green-900"
              >
                Conhecer Investigação
              </a>

            </div>

          </div>


          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">

            <div className="text-6xl">
              🌾
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              Uma plataforma para o futuro da agricultura angolana
            </h2>

            <p className="mt-4 leading-7 text-green-50">
              Informação, investigação, tecnologias, dados e conhecimento
              reunidos num único espaço para aproximar produtores,
              investigadores, estudantes, técnicos, empresas e instituições.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-bold">01</p>
                <p className="mt-1 text-sm text-green-100">
                  Conhecimento
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-bold">02</p>
                <p className="mt-1 text-sm text-green-100">
                  Investigação
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-bold">03</p>
                <p className="mt-1 text-sm text-green-100">
                  Tecnologia
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-bold">04</p>
                <p className="mt-1 text-sm text-green-100">
                  Inovação
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PESQUISA */}
      <section className="border-b bg-gray-50 py-12">

        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Centro de conhecimento
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Pesquisar na AGROINOVA ANGOLA
            </h2>

            <p className="mt-3 text-gray-600">
              Encontre conteúdos sobre agricultura, investigação,
              tecnologias, dados e inovação.
            </p>

          </div>


          <div className="mt-7 flex overflow-hidden rounded-xl border bg-white shadow-sm">

            <input
              type="text"
              placeholder="Pesquisar culturas, artigos, estudos, tecnologias..."
              className="min-w-0 flex-1 px-5 py-4 outline-none"
            />

            <button
              type="button"
              className="bg-green-700 px-7 font-bold text-white hover:bg-green-800"
            >
              Pesquisar
            </button>

          </div>

          <p className="mt-3 text-center text-sm text-gray-500">
            Pesquisa avançada será integrada numa próxima fase.
          </p>

        </div>

      </section>


      {/* MÓDULOS PRINCIPAIS */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Estrutura da plataforma
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Um ecossistema digital para o sector agropecuário
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              A AGROINOVA ANGOLA está a ser estruturada para reunir
              conhecimento, investigação, tecnologia, dados e informação
              num único ambiente digital.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* AGRICULTURA */}
            <a
              href="/agricultura"
              className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">🌾</div>

              <h3 className="mt-5 text-xl font-bold group-hover:text-green-700">
                Agricultura
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Culturas, produção, solos, irrigação, pragas, doenças,
                mecanização e boas práticas agrícolas.
              </p>

              <span className="mt-5 inline-block font-semibold text-green-700">
                Explorar agricultura →
              </span>
            </a>


            {/* INVESTIGAÇÃO */}
            <a
              href="/investigacao"
              className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">🔬</div>

              <h3 className="mt-5 text-xl font-bold group-hover:text-green-700">
                Investigação
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Estudos, pesquisas, artigos científicos, relatórios e
                conhecimento produzido sobre o sector agropecuário.
              </p>

              <span className="mt-5 inline-block font-semibold text-green-700">
                Explorar investigação →
              </span>
            </a>


            {/* TECNOLOGIAS */}
            <a
              href="/tecnologias"
              className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">💻</div>

              <h3 className="mt-5 text-xl font-bold group-hover:text-green-700">
                Tecnologias
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Inteligência artificial, agricultura digital,
                sensoriamento remoto, mecanização e inovação.
              </p>

              <span className="mt-5 inline-block font-semibold text-green-700">
                Explorar tecnologias →
              </span>
            </a>


            {/* BIBLIOTECA */}
            <a
              href="/biblioteca"
              className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">📚</div>

              <h3 className="mt-5 text-xl font-bold group-hover:text-green-700">
                Biblioteca Digital
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Livros, artigos, teses, dissertações, relatórios e
                materiais técnicos relacionados com agricultura.
              </p>

              <span className="mt-5 inline-block font-semibold text-green-700">
                Aceder à biblioteca →
              </span>
            </a>


            {/* DADOS */}
            <a
              href="/dados"
              className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">📊</div>

              <h3 className="mt-5 text-xl font-bold group-hover:text-green-700">
                Dados Agrícolas
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Estatísticas, indicadores, informação territorial e
                dados para apoiar estudos e decisões.
              </p>

              <span className="mt-5 inline-block font-semibold text-green-700">
                Explorar dados →
              </span>
            </a>


            {/* NOTÍCIAS */}
            <a
              href="/noticias"
              className="group rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">📰</div>

              <h3 className="mt-5 text-xl font-bold group-hover:text-green-700">
                Notícias
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Informação, acontecimentos, iniciativas e novidades
                relacionadas com o sector agropecuário.
              </p>

              <span className="mt-5 inline-block font-semibold text-green-700">
                Ver notícias →
              </span>
            </a>

          </div>

        </div>

      </section>


      {/* VISÃO NACIONAL */}
      <section className="bg-green-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                Visão nacional
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Conhecimento agrícola organizado para Angola
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                A AGROINOVA ANGOLA pretende contribuir para aproximar
                conhecimento científico, investigação, tecnologia e
                actividade agropecuária.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                A plataforma poderá reunir informação sobre diferentes
                regiões, culturas, sistemas de produção, tecnologias,
                instituições e projectos ligados à agricultura angolana.
              </p>

              <a
                href="/dados"
                className="mt-7 inline-block rounded-lg bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800"
              >
                Explorar dados agrícolas
              </a>

            </div>


            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="text-4xl">🗺️</div>

                <h3 className="mt-4 font-bold">
                  Mapa agrícola
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Futuro espaço para visualização territorial da
                  actividade agropecuária.
                </p>
              </div>


              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="text-4xl">🌦️</div>

                <h3 className="mt-4 font-bold">
                  Clima
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Informação climática relacionada com a agricultura.
                </p>
              </div>


              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="text-4xl">🪨</div>

                <h3 className="mt-4 font-bold">
                  Solos
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Informação sobre solos e potencial agrícola.
                </p>
              </div>


              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <div className="text-4xl">🤖</div>

                <h3 className="mt-4 font-bold">
                  AGROIA
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Futuro assistente de inteligência artificial para
                  apoio ao conhecimento agrícola.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* QUEM PODE UTILIZAR */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Comunidade AGROINOVA
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Para quem é a plataforma?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              A plataforma pretende servir diferentes actores ligados
              ao sector agropecuário angolano.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border bg-white p-7 text-center shadow-sm">
              <div className="text-5xl">👨🏾‍🌾</div>

              <h3 className="mt-5 font-bold">
                Produtores
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Acesso a conhecimento e soluções para a actividade agrícola.
              </p>
            </div>


            <div className="rounded-2xl border bg-white p-7 text-center shadow-sm">
              <div className="text-5xl">👩🏾‍🔬</div>

              <h3 className="mt-5 font-bold">
                Investigadores
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Informação, estudos, dados e conhecimento científico.
              </p>
            </div>


            <div className="rounded-2xl border bg-white p-7 text-center shadow-sm">
              <div className="text-5xl">🎓</div>

              <h3 className="mt-5 font-bold">
                Estudantes
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Recursos para aprendizagem, pesquisa e formação.
              </p>
            </div>


            <div className="rounded-2xl border bg-white p-7 text-center shadow-sm">
              <div className="text-5xl">🏛️</div>

              <h3 className="mt-5 font-bold">
                Instituições
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Informação e conhecimento para projectos e decisões.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* FUTURO DA PLATAFORMA */}
      <section className="bg-gray-900 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-400">
              Próximas fases
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Uma plataforma em evolução
            </h2>

            <p className="mt-5 leading-8 text-gray-300">
              A AGROINOVA ANGOLA será desenvolvida progressivamente,
              acrescentando novas ferramentas e serviços à medida que
              a plataforma crescer.
            </p>

          </div>


          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-gray-700 p-6">
              <div className="text-3xl">🗺️</div>
              <h3 className="mt-4 font-bold">
                Mapa Agrícola
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Informação geográfica sobre agricultura e território.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-700 p-6">
              <div className="text-3xl">🌦️</div>
              <h3 className="mt-4 font-bold">
                Clima
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Dados e informação climática para o sector.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-700 p-6">
              <div className="text-3xl">🎓</div>
              <h3 className="mt-4 font-bold">
                AgroAcademia
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Formação e aprendizagem sobre agricultura.
              </p>
            </div>


            <div className="rounded-2xl border border-gray-700 p-6">
              <div className="text-3xl">🤖</div>
              <h3 className="mt-4 font-bold">
                AGROIA
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Assistente de inteligência artificial para agricultura.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-green-700 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Conhecimento para transformar o campo angolano
          </h2>

          <p className="mt-5 leading-7 text-green-100">
            Explore a investigação, consulte a biblioteca, conheça
            tecnologias e descubra os dados agrícolas disponíveis.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/biblioteca"
              className="rounded-lg bg-white px-7 py-3 font-bold text-green-800 hover:bg-gray-100"
            >
              Explorar Biblioteca
            </a>

            <a
              href="/tecnologias"
              className="rounded-lg border border-white px-7 py-3 font-bold text-white hover:bg-white hover:text-green-800"
            >
              Conhecer Tecnologias
            </a>

            <a
              href="/dados"
              className="rounded-lg border border-white px-7 py-3 font-bold text-white hover:bg-white hover:text-green-800"
            >
              Consultar Dados
            </a>

          </div>

        </div>

      </section>


      {/* CONTACTO */}
      <section id="contacto" className="py-16">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h2 className="text-3xl font-bold">
            Contacte a AGROINOVA ANGOLA
          </h2>

          <p className="mt-4 text-gray-600">
            Plataforma Nacional de Investigação, Conhecimento e
            Inovação Agropecuária de Angola.
          </p>

          <div className="mt-7">

            <a
              href="mailto:contacto@agroinova.ao"
              className="inline-block rounded-lg border px-6 py-3 font-semibold hover:border-green-700 hover:text-green-700"
            >
              ✉ contacto@agroinova.ao
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}