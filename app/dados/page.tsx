export default function DadosPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">

          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Dados agrícolas de Angola
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Dados para compreender, planear e transformar a agricultura angolana.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-100">
            A AGROINOVA ANGOLA pretende reunir, organizar e disponibilizar
            informação agrícola relevante para produtores, investigadores,
            estudantes, instituições públicas, empresas e outros
            profissionais do sector agropecuário.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#indicadores"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-green-900 hover:bg-gray-100"
            >
              Explorar dados
            </a>

            <a
              href="/investigacao"
              className="rounded-lg border border-green-300 px-6 py-3 font-semibold text-white hover:bg-green-800"
            >
              Ver investigação
            </a>

          </div>

        </div>
      </section>


      {/* INTRODUÇÃO */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                Informação estratégica
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Conhecimento baseado em dados
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                O desenvolvimento do sector agropecuário depende de
                informação organizada, acessível e útil para apoiar
                decisões. A AGROINOVA ANGOLA pretende criar uma estrutura
                digital onde diferentes tipos de informação agrícola possam
                ser consultados e analisados.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                A plataforma poderá integrar dados provenientes de fontes
                oficiais, instituições de investigação, universidades,
                organizações do sector e outros sistemas de informação,
                sempre com indicação da respectiva fonte.
              </p>

            </div>


            <div className="rounded-2xl bg-green-50 p-8">

              <div className="text-5xl">📊</div>

              <h3 className="mt-5 text-2xl font-bold">
                Centro de Dados Agropecuários
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Um espaço destinado à organização de estatísticas,
                indicadores, séries históricas, mapas, gráficos e outras
                informações relevantes para o sector agropecuário de Angola.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* INDICADORES */}
      <section id="indicadores" className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Painel de dados
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Indicadores agrícolas
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Esta área será preparada para apresentar indicadores
              agrícolas e pecuários de Angola de forma simples,
              organizada e visual.
            </p>

          </div>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">🌾</div>

              <p className="mt-5 text-sm font-semibold text-gray-500">
                PRODUÇÃO VEGETAL
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Dados agrícolas
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Produção, culturas, áreas cultivadas e produtividade.
              </p>
            </div>


            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">🐄</div>

              <p className="mt-5 text-sm font-semibold text-gray-500">
                PRODUÇÃO ANIMAL
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Pecuária
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Informação sobre efectivos, produção animal e
                actividade pecuária.
              </p>
            </div>


            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">🌍</div>

              <p className="mt-5 text-sm font-semibold text-gray-500">
                TERRITÓRIO
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Dados por província
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Organização dos dados agrícolas segundo a distribuição
                territorial.
              </p>
            </div>


            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <div className="text-4xl">📈</div>

              <p className="mt-5 text-sm font-semibold text-gray-500">
                INDICADORES
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Análise do sector
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Indicadores destinados a apoiar estudos, análises e
                tomada de decisões.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ÁREAS DE DADOS */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Base de conhecimento
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Áreas de informação
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              A estrutura da plataforma poderá reunir diferentes
              dimensões da realidade agropecuária angolana.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* PRODUÇÃO */}
            <div className="rounded-2xl border bg-gray-50 p-7">
              <div className="text-4xl">🌱</div>

              <h3 className="mt-5 text-xl font-bold">
                Produção agrícola
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Dados sobre culturas, produção, áreas cultivadas,
                produtividade e outros indicadores.
              </p>
            </div>


            {/* PECUÁRIA */}
            <div className="rounded-2xl border bg-gray-50 p-7">
              <div className="text-4xl">🐂</div>

              <h3 className="mt-5 text-xl font-bold">
                Pecuária
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Informação relacionada com produção animal,
                efectivos e actividade pecuária.
              </p>
            </div>


            {/* SOLOS */}
            <div className="rounded-2xl border bg-gray-50 p-7">
              <div className="text-4xl">🪨</div>

              <h3 className="mt-5 text-xl font-bold">
                Solos e território
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Informação sobre solos, território e características
                relevantes para a actividade agrícola.
              </p>
            </div>


            {/* CLIMA */}
            <div className="rounded-2xl border bg-gray-50 p-7">
              <div className="text-4xl">🌦️</div>

              <h3 className="mt-5 text-xl font-bold">
                Clima e agricultura
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Dados climáticos e informação relacionada com a
                actividade agropecuária.
              </p>
            </div>


            {/* MERCADOS */}
            <div className="rounded-2xl border bg-gray-50 p-7">
              <div className="text-4xl">🏪</div>

              <h3 className="mt-5 text-xl font-bold">
                Mercados agrícolas
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Estrutura preparada para futura integração de
                informação sobre mercados e preços agrícolas.
              </p>
            </div>


            {/* INVESTIGAÇÃO */}
            <div className="rounded-2xl border bg-gray-50 p-7">
              <div className="text-4xl">🔬</div>

              <h3 className="mt-5 text-xl font-bold">
                Investigação
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Dados e informações resultantes de estudos e
                investigação agropecuária.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* EXPLORADOR DE DADOS */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-3xl border bg-white p-8 shadow-sm md:p-12">

            <div className="max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                Futuro sistema de dados
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Explorador de dados agrícolas
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Futuramente, os utilizadores poderão seleccionar uma
                província, cultura, período ou indicador e consultar os
                respectivos dados através de tabelas, gráficos e mapas.
              </p>

            </div>


            <div className="mt-10 grid gap-4 md:grid-cols-4">

              <div className="rounded-xl bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-500">
                  PROVÍNCIA
                </p>
                <p className="mt-2 font-bold">
                  Todas
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-500">
                  CATEGORIA
                </p>
                <p className="mt-2 font-bold">
                  Agricultura
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-500">
                  PERÍODO
                </p>
                <p className="mt-2 font-bold">
                  Todos
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <p className="text-sm font-semibold text-gray-500">
                  INDICADOR
                </p>
                <p className="mt-2 font-bold">
                  Seleccionar
                </p>
              </div>

            </div>


            <div className="mt-8 rounded-2xl bg-gray-100 p-10 text-center">

              <div className="text-5xl">📊</div>

              <h3 className="mt-5 text-xl font-bold">
                Área preparada para gráficos e tabelas
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                Nesta etapa do projecto, os dados reais ainda não estão
                ligados à plataforma. A estrutura será posteriormente
                conectada a uma base de dados e a fontes oficiais.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FONTES */}
      <section className="bg-green-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Transparência
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Fontes dos dados
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              A AGROINOVA ANGOLA deverá identificar claramente a origem
              dos dados apresentados, indicando a instituição, publicação,
              período e, quando aplicável, a metodologia utilizada.
            </p>

          </div>


          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border bg-white p-7">
              <div className="text-4xl">🏛️</div>

              <h3 className="mt-4 font-bold">
                Fontes institucionais
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Dados provenientes de instituições públicas e organismos
                oficiais.
              </p>
            </div>


            <div className="rounded-2xl border bg-white p-7">
              <div className="text-4xl">🎓</div>

              <h3 className="mt-4 font-bold">
                Investigação científica
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Estudos, pesquisas, universidades e centros de investigação.
              </p>
            </div>


            <div className="rounded-2xl border bg-white p-7">
              <div className="text-4xl">🌐</div>

              <h3 className="mt-4 font-bold">
                Fontes complementares
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Organizações nacionais e internacionais com informação
                relevante para o sector.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-green-700 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Dados, investigação e conhecimento para Angola
          </h2>

          <p className="mt-5 leading-7 text-green-100">
            A AGROINOVA ANGOLA pretende aproximar informação,
            investigação, tecnologia e actividade agropecuária.
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