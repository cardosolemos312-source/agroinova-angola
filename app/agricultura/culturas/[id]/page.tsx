import Link from "next/link";
import { notFound } from "next/navigation";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

type Props = {
  params: Promise<{ id: string }>;
};

type Campo = {
  titulo: string;
  valor: string | null;
};

export default async function CulturaMundialPage({ params }: Props) {
  const { id } = await params;
  const supabase = obterSupabaseAdmin();

  const { data: registo, error } = await supabase
    .from("pesquisa_culturas")
    .select("*")
    .eq("id", id)
    .eq("estado", "publicado")
    .maybeSingle();

  if (error) {
    console.error("Erro ao carregar cultura mundial:", error);
    throw new Error("Não foi possível carregar os dados desta cultura.");
  }

  if (!registo) notFound();

  const cultura = registo as {
    id: string;
    nome_cientifico: string;
    familia_botanica: string | null;
    genero: string | null;
    especie: string | null;
    subespecie: string | null;
    categoria: string;
    grupo_cultura: string | null;
    descricao: string | null;
    origem: string | null;
    distribuicao_geografica: string | null;
    ciclo_vida: string | null;
    clima: string | null;
    solo: string | null;
    necessidades_hidricas: string | null;
    plantio: string | null;
    colheita: string | null;
    fertilizacao: string | null;
    pragas_doencas: string | null;
    utilizacoes: string | null;
    produtividade: string | null;
    observacoes: string | null;
  };

  const [
    { data: nomes },
    { data: variedades },
    { data: referencias },
  ] = await Promise.all([
    supabase
      .from("pesquisa_culturas_nomes")
      .select("nome, idioma, regiao, tipo, principal")
      .eq("cultura_id", id)
      .order("principal", { ascending: false }),
    supabase
      .from("pesquisa_culturas_variedades")
      .select("nome, nome_cientifico, origem, descricao, caracteristicas, ciclo_producao")
      .eq("cultura_id", id)
      .eq("estado", "publicado")
      .order("nome"),
    supabase
      .from("pesquisa_culturas_referencias")
      .select("fonte_id, citacao")
      .eq("cultura_id", id),
  ]);

  const [
    { data: conteudosCientificos },
    { data: ecologia },
    { data: maneio },
    { data: fitossanidade },
    { data: colheita },
    { data: composicao },
  ] = await Promise.all([
    supabase
      .from("pesquisa_culturas_conteudos")
      .select("id, categoria, titulo, conteudo, estado")
      .eq("cultura_id", id)
      .neq("estado", "rejeitado")
      .order("categoria")
      .order("titulo"),
    supabase
      .from("pesquisa_culturas_ecologia")
      .select("*")
      .eq("cultura_id", id)
      .neq("estado", "rejeitado"),
    supabase
      .from("pesquisa_culturas_maneio")
      .select("*")
      .eq("cultura_id", id)
      .neq("estado", "rejeitado"),
    supabase
      .from("pesquisa_culturas_fitossanidade")
      .select("*")
      .eq("cultura_id", id)
      .neq("estado", "rejeitado"),
    supabase
      .from("pesquisa_culturas_colheita")
      .select("*")
      .eq("cultura_id", id)
      .neq("estado", "rejeitado"),
    supabase
      .from("pesquisa_culturas_composicao")
      .select("*")
      .eq("cultura_id", id)
      .neq("estado", "rejeitado"),
  ]);

  const modulosCientificos: {
    titulo: string;
    dados: Record<string, unknown>[];
  }[] = [
    { titulo: "Ecologia e exigências ambientais", dados: (ecologia || []) as Record<string, unknown>[] },
    { titulo: "Maneio e produção agrícola", dados: (maneio || []) as Record<string, unknown>[] },
    { titulo: "Pragas e doenças", dados: (fitossanidade || []) as Record<string, unknown>[] },
    { titulo: "Colheita e pós-colheita", dados: (colheita || []) as Record<string, unknown>[] },
    { titulo: "Composição e valor nutricional", dados: (composicao || []) as Record<string, unknown>[] },
  ];
  const fonteIds = [...new Set(
    (referencias || []).map((referencia) => referencia.fonte_id).filter(Boolean)
  )];

  const { data: fontes } = fonteIds.length
    ? await supabase
        .from("pesquisa_culturas_fontes")
        .select("id, titulo, instituicao, autor, ano, tipo, url, referencia_bibliografica")
        .in("id", fonteIds)
    : { data: [] };

  const nomePrincipal =
    nomes?.find((nome) => nome.principal)?.nome || cultura.nome_cientifico;

  const grupos: { titulo: string; campos: Campo[] }[] = [
    {
      titulo: "Identificação botânica",
      campos: [
        { titulo: "Família botânica", valor: cultura.familia_botanica },
        { titulo: "Género", valor: cultura.genero },
        { titulo: "Espécie", valor: cultura.especie },
        { titulo: "Subespécie", valor: cultura.subespecie },
        { titulo: "Grupo de cultura", valor: cultura.grupo_cultura },
      ],
    },
    {
      titulo: "Origem e distribuição",
      campos: [
        { titulo: "Origem", valor: cultura.origem },
        { titulo: "Distribuição geográfica", valor: cultura.distribuicao_geografica },
        { titulo: "Ciclo de vida", valor: cultura.ciclo_vida },
      ],
    },
    {
      titulo: "Condições agroecológicas",
      campos: [
        { titulo: "Clima", valor: cultura.clima },
        { titulo: "Solo", valor: cultura.solo },
        { titulo: "Necessidades hídricas", valor: cultura.necessidades_hidricas },
      ],
    },
    {
      titulo: "Orientações de cultivo",
      campos: [
        { titulo: "Plantio", valor: cultura.plantio },
        { titulo: "Colheita", valor: cultura.colheita },
        { titulo: "Fertilização", valor: cultura.fertilizacao },
        { titulo: "Pragas e doenças", valor: cultura.pragas_doencas },
      ],
    },
    {
      titulo: "Produção e utilização",
      campos: [
        { titulo: "Utilizações", valor: cultura.utilizacoes },
        { titulo: "Produtividade", valor: cultura.produtividade },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <Link
            href="/agricultura"
            className="text-sm font-medium text-green-100 hover:text-white"
          >
            ← Agricultura
          </Link>

          <p className="mt-9 text-xs font-bold uppercase tracking-[0.2em] text-green-300">
            Catálogo mundial de culturas
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            {nomePrincipal}
          </h1>

          <p className="mt-3 text-lg italic text-green-100">
            {cultura.nome_cientifico}
          </p>

          {cultura.familia_botanica && (
            <p className="mt-2 text-sm text-green-200">
              Família: {cultura.familia_botanica}
            </p>
          )}

          <span className="mt-6 inline-block rounded-full border border-green-400/40 bg-green-800/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-green-100">
            {cultura.categoria}
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-8 px-5 py-10 md:px-8">
        {cultura.descricao && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Descrição geral</h2>
            <p className="mt-4 leading-8 text-slate-600">{cultura.descricao}</p>
          </section>
        )}

        {nomes && nomes.length > 0 && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Nomes comuns e sinónimos
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {nomes.map((nome, indice) => (
                <span
                  key={`${nome.nome}-${nome.idioma}-${indice}`}
                  className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-900"
                >
                  {nome.nome}
                  <span className="ml-2 text-xs text-green-700">
                    {nome.idioma}
                    {nome.regiao ? ` · ${nome.regiao}` : ""}
                    {nome.tipo ? ` · ${nome.tipo}` : ""}
                  </span>
                </span>
              ))}
            </div>
          </section>
        )}

        {grupos.map((grupo) => {
          const campos = grupo.campos.filter(
            (campo) => campo.valor && campo.valor.trim()
          );

          if (campos.length === 0) return null;

          return (
            <section
              key={grupo.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-slate-900">
                {grupo.titulo}
              </h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {campos.map((campo) => (
                  <div key={campo.titulo}>
                    <h3 className="text-sm font-bold text-green-800">
                      {campo.titulo}
                    </h3>
                    <p className="mt-2 whitespace-pre-line leading-7 text-slate-600">
                      {campo.valor}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {variedades && variedades.length > 0 && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Variedades e cultivares
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {variedades.map((variedade) => (
                <article
                  key={variedade.nome}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <h3 className="font-bold text-green-900">{variedade.nome}</h3>
                  {variedade.nome_cientifico && (
                    <p className="mt-1 text-sm italic text-slate-500">
                      {variedade.nome_cientifico}
                    </p>
                  )}
                  {variedade.origem && (
                    <p className="mt-3 text-sm text-slate-600">
                      Origem: {variedade.origem}
                    </p>
                  )}
                  {variedade.descricao && (
                    <p className="mt-3 leading-7 text-slate-600">
                      {variedade.descricao}
                    </p>
                  )}
                  {variedade.caracteristicas && (
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">
                      {variedade.caracteristicas}
                    </p>
                  )}
                  {variedade.ciclo_producao && (
                    <p className="mt-3 text-sm text-slate-600">
                      Ciclo de produção: {variedade.ciclo_producao}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {cultura.observacoes && (
          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Observações</h2>
            <p className="mt-3 whitespace-pre-line leading-7 text-slate-700">
              {cultura.observacoes}
            </p>
          </section>
        )}

        {conteudosCientificos && conteudosCientificos.length > 0 && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Monografia e conteúdos científicos
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Capítulos e documentação científica desta cultura
                </p>
              </div>
              <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-800">
                {conteudosCientificos.length} conteúdos
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {conteudosCientificos.map((capitulo) => (
                <article
                  key={capitulo.id}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-green-50 px-2 py-1 text-xs font-semibold text-green-800">
                      {capitulo.categoria}
                    </span>
                    {capitulo.estado === "em_revisao" && (
                      <span className="rounded-md bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-800">
                        Em revisão científica
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">
                    {capitulo.titulo}
                  </h3>
                  <div className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">
                    {capitulo.conteudo}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {modulosCientificos.some((modulo) => modulo.dados.length > 0) && (
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Informação técnica especializada
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Dados técnicos registados para esta cultura na base científica AGROINOVA ANGOLA.
              </p>
            </div>

            {modulosCientificos.map((modulo) => (
              modulo.dados.length > 0 && (
                <section
                  key={modulo.titulo}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-green-900">
                    {modulo.titulo}
                  </h3>

                  <div className="mt-5 space-y-5">
                    {modulo.dados.map((registo, indice) => (
                      <article
                        key={String(registo.id || indice)}
                        className="rounded-xl border border-slate-100 p-4"
                      >
                        {registo.estado === "em_revisao" && (
                          <span className="mb-3 inline-block rounded-md bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-800">
                            Em revisão científica
                          </span>
                        )}

                        <div className="grid gap-4 md:grid-cols-2">
                          {Object.entries(registo)
                            .filter(([campo, valor]) =>
                              ![
                                "id",
                                "cultura_id",
                                "fonte_id",
                                "estado",
                                "criado_em",
                                "actualizado_em",
                              ].includes(campo) &&
                              valor !== null &&
                              valor !== undefined &&
                              String(valor).trim() !== ""
                            )
                            .map(([campo, valor]) => (
                              <div key={campo}>
                                <h4 className="text-sm font-semibold text-green-800">
                                  {campo
                                    .replace(/_/g, " ")
                                    .replace(/\b\w/g, (letra) => letra.toUpperCase())}
                                </h4>
                                <p className="mt-1 whitespace-pre-line text-sm leading-7 text-slate-600">
                                  {String(valor)}
                                </p>
                              </div>
                            ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )
            ))}
          </section>
        )}
        {referencias && referencias.length > 0 && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Fontes e referências
            </h2>
            <div className="mt-5 space-y-4">
              {referencias.map((referencia) => {
                const fonte = fontes?.find(
                  (item) => item.id === referencia.fonte_id
                );

                if (!fonte) return null;

                return (
                  <article
                    key={referencia.fonte_id}
                    className="border-b border-slate-100 pb-4 last:border-0"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {fonte.titulo}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {[fonte.instituicao, fonte.autor, fonte.ano]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                    {referencia.citacao && (
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {referencia.citacao}
                      </p>
                    )}
                    {fonte.referencia_bibliografica && (
                      <p className="mt-2 text-sm text-slate-500">
                        {fonte.referencia_bibliografica}
                      </p>
                    )}
                    {fonte.url && (
                      <a
                        href={fonte.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm font-semibold text-green-700 hover:underline"
                      >
                        Consultar fonte
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {!cultura.descricao &&
          grupos.every((grupo) =>
            grupo.campos.every((campo) => !campo.valor?.trim())
          ) &&
          (!variedades || variedades.length === 0) && (
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="leading-7 text-slate-600">
                Este registo ainda não tem informação técnica detalhada.
                O catálogo mundial encontra-se em expansão.
              </p>
            </section>
          )}

        <div className="border-t border-slate-200 pt-6">
          <Link
            href="/agricultura"
            className="font-semibold text-green-800 hover:underline"
          >
            ← Voltar à área de agricultura
          </Link>
        </div>
      </div>
    </main>
  );
}