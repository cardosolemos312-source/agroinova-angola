"use client";

import GaleriaEquipamentos from "./GaleriaEquipamentos";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FornecedorTecnologia,
  ProblemaTecnologico,
  Tecnologia,
  TipoTecnologia,
  fornecedoresTecnologia,
  problemasTecnologicos,
  procurarFornecedores,
  procurarTecnologias,
  tecnologias,
} from "@/data/tecnologias/dados";

const provincias = [
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
  "Cubango",
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

const culturas = [
  "Milho",
  "Feijão",
  "Soja",
  "Arroz",
  "Hortícolas",
  "Fruticultura",
  "Mandioca",
  "Batata",
  "Batata-doce",
  "Café",
  "Algodão",
  "Cana-de-açúcar",
  "Pecuária",
  "Pesca e aquicultura",
  "Outra",
];

const actividades = [
  "Agricultura",
  "Irrigação",
  "Mecanização",
  "Pecuária",
  "Pesca e aquicultura",
  "Agroindústria",
  "Armazenamento",
  "Comercialização",
  "Outra",
];

const categorias: TipoTecnologia[] = [
  "Inteligência Artificial",
  "Agricultura de precisão",
  "Drones agrícolas",
  "Irrigação",
  "Energia solar",
  "Tecnologia do solo",
  "Tecnologia climática",
  "Mecanização agrícola",
  "Tecnologia pecuária",
  "Tecnologia pesqueira e aquícola",
  "Agroindústria",
  "Armazenamento",
  "Sensores e IoT",
  "Serviços tecnológicos",
];

function normalizar(valor: string) {
  return valor
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default function TecnologiasPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<string>("Todas");

  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState<string>("Todas");

  const [problemaSelecionado, setProblemaSelecionado] = useState("");

  const [tecnologiaSelecionada, setTecnologiaSelecionada] =
    useState<Tecnologia | null>(null);

  const [fornecedorSelecionado, setFornecedorSelecionado] =
    useState<FornecedorTecnologia | null>(null);

  const [foto, setFoto] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState("");

  const [descricaoProblema, setDescricaoProblema] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [cultura, setCultura] = useState("");
  const [actividade, setActividade] = useState("");

  const [resultadoIA, setResultadoIA] = useState("");
  const [analisandoIA, setAnalisandoIA] = useState(false);
  const [erroIA, setErroIA] = useState("");

  const [mostrarTodosProblemas, setMostrarTodosProblemas] =
    useState(false);

  const [mostrarTodosFornecedores, setMostrarTodosFornecedores] =
    useState(false);

  const [mostrarTodosTecnologias, setMostrarTodosTecnologias] =
    useState(false);

  const diagnosticoRef = useRef<HTMLDivElement>(null);
  const tecnologiasRef = useRef<HTMLDivElement>(null);
  const fornecedoresRef = useRef<HTMLDivElement>(null);
  const problemasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (fotoPreview) {
        URL.revokeObjectURL(fotoPreview);
      }
    };
  }, [fotoPreview]);

  function irPara(ref: React.RefObject<HTMLDivElement | null>) {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function irParaEquipamentos() {
    document
      .getElementById("galeria-equipamentos")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  function selecionarProblema(problema: ProblemaTecnologico) {
    setProblemaSelecionado(problema.id);

    if (!descricaoProblema) {
      setDescricaoProblema(problema.problema);
    }

    if (problema.atividades.length > 0) {
      const actividadeEncontrada = actividades.find((item) =>
        problema.atividades.some(
          (atividade) =>
            normalizar(atividade) === normalizar(item)
        )
      );

      if (actividadeEncontrada) {
        setActividade(actividadeEncontrada);
      }
    }

    irPara(diagnosticoRef);
  }

  function selecionarTecnologia(tecnologia: Tecnologia) {
    setTecnologiaSelecionada(tecnologia);

    window.setTimeout(() => {
      document
        .getElementById("detalhe-tecnologia")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 50);
  }

  function selecionarFornecedor(
    fornecedor: FornecedorTecnologia
  ) {
    setFornecedorSelecionado(fornecedor);

    window.setTimeout(() => {
      document
        .getElementById("detalhe-fornecedor")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 50);
  }

  function handleFoto(event: ChangeEvent<HTMLInputElement>) {
    const arquivo = event.target.files?.[0];

    if (!arquivo) {
      return;
    }

    if (!arquivo.type.startsWith("image/")) {
      setErroIA("Seleccione uma imagem válida.");
      return;
    }

    setErroIA("");
    setFoto(arquivo);

    if (fotoPreview) {
      URL.revokeObjectURL(fotoPreview);
    }

    const novaPreview = URL.createObjectURL(arquivo);
    setFotoPreview(novaPreview);
  }

  function removerFoto() {
    if (fotoPreview) {
      URL.revokeObjectURL(fotoPreview);
    }

    setFoto(null);
    setFotoPreview("");
  }

  async function analisarComIA(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!descricaoProblema.trim() && !foto) {
      setErroIA(
        "Adicione uma descrição do problema ou envie uma fotografia."
      );
      return;
    }

    setAnalisandoIA(true);
    setErroIA("");
    setResultadoIA("");

    try {
      const formData = new FormData();

      formData.append(
        "descricao",
        descricaoProblema.trim()
      );

      formData.append(
        "provincia",
        provinciaSelecionada === "Todas"
          ? ""
          : provinciaSelecionada
      );

      formData.append("municipio", municipio);
      formData.append("cultura", cultura);
      formData.append("actividade", actividade);

      const problema = problemasTecnologicos.find(
        (item) => item.id === problemaSelecionado
      );

      if (problema) {
        formData.append(
          "problema",
          problema.problema
        );
      }

      if (foto) {
        formData.append("imagem", foto);
      }

      const resposta = await fetch("/api/agroia", {
        method: "POST",
        body: formData,
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          dados?.error ||
            dados?.message ||
            "Não foi possível realizar a análise."
        );
      }

      const texto =
        dados?.resposta ||
        dados?.resultado ||
        dados?.analysis ||
        dados?.message ||
        dados?.output ||
        "";

      if (!texto) {
        throw new Error(
          "A AGROINOVA IA não devolveu uma resposta válida."
        );
      }

      setResultadoIA(texto);
    } catch (error) {
      setErroIA(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao comunicar com a AGROINOVA IA."
      );
    } finally {
      setAnalisandoIA(false);
    }
  }

  const tecnologiasFiltradas = useMemo(() => {
    let resultado = tecnologias;

    if (pesquisa.trim()) {
      resultado = procurarTecnologias(pesquisa);
    }

    if (categoriaSelecionada !== "Todas") {
      resultado = resultado.filter(
        (item) =>
          item.categoria === categoriaSelecionada
      );
    }

    if (provinciaSelecionada !== "Todas") {
      resultado = resultado.filter((item) => {
        const provincia = normalizar(
          item.provincia
        );

        const selecionada = normalizar(
          provinciaSelecionada
        );

        return (
          provincia === selecionada ||
          normalizar(item.cobertura).includes(
            selecionada
          )
        );
      });
    }

    return resultado;
  }, [
    pesquisa,
    categoriaSelecionada,
    provinciaSelecionada,
  ]);

  const fornecedoresFiltrados = useMemo(() => {
    if (!pesquisa.trim()) {
      return fornecedoresTecnologia.filter((item) => {
        if (provinciaSelecionada === "Todas") {
          return true;
        }

        const provincia = normalizar(
          item.provincia
        );

        const selecionada = normalizar(
          provinciaSelecionada
        );

        return (
          provincia === selecionada ||
          normalizar(item.cobertura || "").includes(
            selecionada
          )
        );
      });
    }

    let resultado = procurarFornecedores(pesquisa);

    if (provinciaSelecionada !== "Todas") {
      resultado = resultado.filter((item) => {
        const provincia = normalizar(
          item.provincia
        );

        const selecionada = normalizar(
          provinciaSelecionada
        );

        return (
          provincia === selecionada ||
          normalizar(item.cobertura || "").includes(
            selecionada
          )
        );
      });
    }

    return resultado;
  }, [pesquisa, provinciaSelecionada]);

  const problemasFiltrados = useMemo(() => {
    const termo = normalizar(pesquisa);

    if (!termo) {
      return problemasTecnologicos;
    }

    return problemasTecnologicos.filter((item) => {
      return (
        normalizar(item.problema).includes(termo) ||
        normalizar(item.descricao).includes(termo) ||
        item.atividades.some((atividade) =>
          normalizar(atividade).includes(termo)
        ) ||
        item.culturas.some((culturaItem) =>
          normalizar(culturaItem).includes(termo)
        )
      );
    });
  }, [pesquisa]);

  const tecnologiasVisiveis = mostrarTodosTecnologias
    ? tecnologiasFiltradas
    : tecnologiasFiltradas.slice(0, 6);

  const fornecedoresVisiveis = mostrarTodosFornecedores
    ? fornecedoresFiltrados
    : fornecedoresFiltrados.slice(0, 6);

  const problemasVisiveis = mostrarTodosProblemas
    ? problemasFiltrados
    : problemasFiltrados.slice(0, 6);

  const problemaActual = problemasTecnologicos.find(
    (item) => item.id === problemaSelecionado
  );

  const tecnologiasDoProblema = problemaActual
    ? tecnologias.filter((tecnologia) =>
        problemaActual.tecnologiasRelacionadas.includes(
          tecnologia.id
        )
      )
    : [];

  function limparFiltros() {
    setPesquisa("");
    setCategoriaSelecionada("Todas");
    setProvinciaSelecionada("Todas");
  }

  function usarProblemaNaPesquisa(
    problema: ProblemaTecnologico
  ) {
    setPesquisa(problema.problema);
    setMostrarTodosTecnologias(true);
    irPara(tecnologiasRef);
  }

  return (
    <main className="min-h-screen bg-gray-50 text-[var(--texto)]">

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-4xl">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Centro de Tecnologia Agrícola
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Tecnologia para resolver
              problemas reais do campo
              angolano.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50">
              Encontre tecnologias, equipamentos,
              fornecedores e serviços para agricultura,
              pecuária, pesca e agroindústria em Angola.
              Use a AGROINOVA IA para analisar problemas
              agrícolas e orientar possíveis soluções.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button
                type="button"
                onClick={() => irPara(diagnosticoRef)}
                className="rounded-xl bg-white px-6 py-3 font-bold text-green-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                Resolver um problema
              </button>

              <button
                type="button"
                onClick={() => irPara(tecnologiasRef)}
                className="rounded-xl border border-green-300 px-6 py-3 font-bold text-white transition hover:bg-green-800"
              >
                Explorar tecnologias
              </button>

              <button
                type="button"
                onClick={() => irPara(fornecedoresRef)}
                className="rounded-xl border border-green-300 px-6 py-3 font-bold text-white transition hover:bg-green-800"
              >
                Encontrar fornecedores
              </button>

            </div>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-green-700 bg-green-800/60 p-5">
              <p className="text-3xl font-black">
                {tecnologias.length}
              </p>
              <p className="mt-1 text-sm text-green-100">
                tecnologias registadas
              </p>
            </div>

            <div className="rounded-2xl border border-green-700 bg-green-800/60 p-5">
              <p className="text-3xl font-black">
                {fornecedoresTecnologia.length}
              </p>
              <p className="mt-1 text-sm text-green-100">
                fornecedores registados
              </p>
            </div>

            <div className="rounded-2xl border border-green-700 bg-green-800/60 p-5">
              <p className="text-3xl font-black">
                {problemasTecnologicos.length}
              </p>
              <p className="mt-1 text-sm text-green-100">
                problemas com soluções relacionadas
              </p>
            </div>

            <div className="rounded-2xl border border-green-700 bg-green-800/60 p-5">
              <p className="text-3xl font-black">
                {categorias.length}
              </p>
              <p className="mt-1 text-sm text-green-100">
                categorias tecnológicas
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* FLUXO */}
      {/* ========================================================= */}

      <section className="border-b border-[var(--borda)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <div className="grid gap-4 md:grid-cols-5">

            {[
              ["01", "Problema", "Identifique o problema."],
              ["02", "Dados", "Informe localização e actividade."],
              ["03", "Tecnologia", "Encontre uma solução tecnológica."],
              ["04", "Fornecedor", "Encontre quem fornece."],
              ["05", "Resultado", "Passe à solução prática."],
            ].map(([numero, titulo, texto]) => (
              <div
                key={numero}
                className="rounded-2xl border border-[var(--borda)] bg-[var(--cinza)] p-5"
              >
                <span className="text-sm font-black text-green-700">
                  {numero}
                </span>

                <h2 className="mt-2 text-lg font-extrabold">
                  {titulo}
                </h2>

                <p className="mt-1 text-sm text-[var(--cinza-texto)]">
                  {texto}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* DIAGNÓSTICO */}
      {/* ========================================================= */}

      <section
        ref={diagnosticoRef}
        className="scroll-mt-24 bg-[var(--cinza)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              AGROINOVA IA
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Analise um problema agrícola
            </h2>

            <p className="mt-4 text-[var(--cinza-texto)]">
              Envie uma fotografia ou descreva o problema.
              Quanto mais informações fornecer, melhor será
              a orientação preliminar.
            </p>

          </div>

          <form
            onSubmit={analisarComIA}
            className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]"
          >

            <div className="rounded-3xl border border-[var(--borda)] bg-white p-6 shadow-sm md:p-8">

              <div className="grid gap-6 md:grid-cols-2">

                <div className="md:col-span-2">

                  <label className="text-sm font-bold">
                    Problema agrícola
                  </label>

                  <select
                    value={problemaSelecionado}
                    onChange={(event) => {
                      const id = event.target.value;

                      setProblemaSelecionado(id);

                      const problema =
                        problemasTecnologicos.find(
                          (item) => item.id === id
                        );

                      if (problema) {
                        setDescricaoProblema(
                          problema.problema
                        );
                      }
                    }}
                    className="mt-2 w-full rounded-xl border border-[var(--borda)] bg-white px-4 py-3 outline-none transition focus:border-green-600"
                  >
                    <option value="">
                      Seleccione um problema conhecido
                    </option>

                    {problemasTecnologicos.map(
                      (problema) => (
                        <option
                          key={problema.id}
                          value={problema.id}
                        >
                          {problema.problema}
                        </option>
                      )
                    )}
                  </select>

                </div>

                <div className="md:col-span-2">

                  <label className="text-sm font-bold">
                    Descrição do problema
                  </label>

                  <textarea
                    value={descricaoProblema}
                    onChange={(event) =>
                      setDescricaoProblema(
                        event.target.value
                      )
                    }
                    rows={6}
                    placeholder="Descreva o que está a acontecer na exploração..."
                    className="mt-2 w-full resize-y rounded-xl border border-[var(--borda)] px-4 py-3 outline-none transition focus:border-green-600"
                  />

                </div>

                <div>

                  <label className="text-sm font-bold">
                    Província
                  </label>

                  <select
                    value={provinciaSelecionada}
                    onChange={(event) =>
                      setProvinciaSelecionada(
                        event.target.value
                      )
                    }
                    className="mt-2 w-full rounded-xl border border-[var(--borda)] bg-white px-4 py-3 outline-none focus:border-green-600"
                  >
                    <option value="Todas">
                      Seleccione a província
                    </option>

                    {provincias.map((provincia) => (
                      <option
                        key={provincia}
                        value={provincia}
                      >
                        {provincia}
                      </option>
                    ))}
                  </select>

                </div>

                <div>

                  <label className="text-sm font-bold">
                    Município
                  </label>

                  <input
                    value={municipio}
                    onChange={(event) =>
                      setMunicipio(event.target.value)
                    }
                    placeholder="Ex.: Huambo"
                    className="mt-2 w-full rounded-xl border border-[var(--borda)] px-4 py-3 outline-none focus:border-green-600"
                  />

                </div>

                <div>

                  <label className="text-sm font-bold">
                    Cultura / actividade produtiva
                  </label>

                  <select
                    value={cultura}
                    onChange={(event) =>
                      setCultura(event.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-[var(--borda)] bg-white px-4 py-3 outline-none focus:border-green-600"
                  >
                    <option value="">
                      Seleccione
                    </option>

                    {culturas.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                </div>

                <div>

                  <label className="text-sm font-bold">
                    Actividade
                  </label>

                  <select
                    value={actividade}
                    onChange={(event) =>
                      setActividade(event.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-[var(--borda)] bg-white px-4 py-3 outline-none focus:border-green-600"
                  >
                    <option value="">
                      Seleccione
                    </option>

                    {actividades.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                </div>

              </div>

              {/* FOTOGRAFIA */}

              <div className="mt-8 rounded-2xl border-2 border-dashed border-green-200 bg-green-50 p-6">

                <label className="block cursor-pointer text-center">

                  <span className="block font-bold text-green-900">
                    Enviar fotografia do problema
                  </span>

                  <span className="mt-1 block text-sm text-[var(--cinza-texto)]">
                    JPG, PNG ou outra imagem compatível
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFoto}
                    className="mt-4 block w-full text-sm"
                  />

                </label>

                {fotoPreview && (
                  <div className="relative mt-5 overflow-hidden rounded-2xl border border-[var(--borda)] bg-white">

                    <img
                      src={fotoPreview}
                      alt="Fotografia do problema agrícola"
                      className="max-h-[360px] w-full object-contain"
                    />

                    <button
                      type="button"
                      onClick={removerFoto}
                      className="absolute right-3 top-3 rounded-lg bg-white px-3 py-2 text-sm font-bold shadow"
                    >
                      Remover
                    </button>

                  </div>
                )}

              </div>

              {erroIA && (
                <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                  {erroIA}
                </div>
              )}

              <button
                type="submit"
                disabled={analisandoIA}
                className="mt-8 w-full rounded-xl bg-green-700 px-6 py-4 font-black text-white shadow-lg transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {analisandoIA
                  ? "A AGROINOVA IA está a analisar..."
                  : "Analisar com AGROINOVA IA"}
              </button>

            </div>

            <aside className="space-y-5">

              <div className="rounded-3xl border border-[var(--borda)] bg-white p-6">

                <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                  Como funciona
                </p>

                <div className="mt-5 space-y-5">

                  {[
                    [
                      "1",
                      "Descreva",
                      "Explique o problema observado.",
                    ],
                    [
                      "2",
                      "Localize",
                      "Informe província e município.",
                    ],
                    [
                      "3",
                      "Contextualize",
                      "Indique cultura e actividade.",
                    ],
                    [
                      "4",
                      "Analise",
                      "A AGROINOVA IA produz uma orientação preliminar.",
                    ],
                  ].map(([numero, titulo, texto]) => (
                    <div
                      key={numero}
                      className="flex gap-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-black text-green-800">
                        {numero}
                      </div>

                      <div>
                        <h3 className="font-bold">
                          {titulo}
                        </h3>

                        <p className="text-sm text-[var(--cinza-texto)]">
                          {texto}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>

              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">

                <p className="font-black text-amber-900">
                  Importante
                </p>

                <p className="mt-2 text-sm leading-6 text-amber-800">
                  A análise da IA é uma orientação
                  preliminar. Problemas de campo que
                  envolvam risco económico, fitossanitário,
                  animal ou ambiental devem ser avaliados
                  por um técnico habilitado.
                </p>

              </div>

            </aside>

          </form>

          {resultadoIA && (
            <div className="mt-8 rounded-3xl border border-green-200 bg-white p-6 shadow-sm md:p-8">

              <div className="flex flex-col gap-4 border-b border-[var(--borda)] pb-5 md:flex-row md:items-center md:justify-between">

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                    Resultado da análise
                  </p>

                  <h2 className="mt-1 text-2xl font-black">
                    Orientação da AGROINOVA IA
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setResultadoIA("")
                  }
                  className="rounded-lg border border-[var(--borda)] px-4 py-2 text-sm font-bold hover:bg-gray-50"
                >
                  Fechar resultado
                </button>

              </div>

              <div className="mt-6 whitespace-pre-wrap leading-8 text-gray-700">
                {resultadoIA}
              </div>

              {tecnologiasDoProblema.length > 0 && (
                <div className="mt-8 border-t border-[var(--borda)] pt-8">

                  <h3 className="text-xl font-black">
                    Tecnologias relacionadas
                  </h3>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">

                    {tecnologiasDoProblema.map(
                      (tecnologia) => (
                        <button
                          type="button"
                          key={tecnologia.id}
                          onClick={() =>
                            selecionarTecnologia(
                              tecnologia
                            )
                          }
                          className="rounded-2xl border border-[var(--borda)] bg-gray-50 p-5 text-left transition hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50"
                        >
                          <p className="text-sm font-bold text-green-700">
                            {tecnologia.categoria}
                          </p>

                          <h4 className="mt-1 font-black">
                            {tecnologia.nome}
                          </h4>

                          <p className="mt-2 text-sm text-[var(--cinza-texto)]">
                            {tecnologia.descricao}
                          </p>
                        </button>
                      )
                    )}

                  </div>

                </div>
              )}

            </div>
          )}

        </div>
      </section>

      {/* ========================================================= */}
      {/* PROBLEMAS */}
      {/* ========================================================= */}

      <section
        ref={problemasRef}
        className="scroll-mt-24 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div className="max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                Problemas agrícolas
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Comece pelo problema
              </h2>

              <p className="mt-3 text-[var(--cinza-texto)]">
                Seleccione um problema para ver as
                tecnologias relacionadas ou levá-lo
                directamente para o diagnóstico.
              </p>

            </div>

            <button
              type="button"
              onClick={() =>
                setMostrarTodosProblemas(
                  !mostrarTodosProblemas
                )
              }
              className="rounded-xl border border-[var(--borda)] px-5 py-3 font-bold hover:bg-gray-50"
            >
              {mostrarTodosProblemas
                ? "Mostrar menos"
                : "Ver todos os problemas"}
            </button>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {problemasVisiveis.map((problema) => (
              <article
                key={problema.id}
                className="flex flex-col rounded-2xl border border-[var(--borda)] bg-[var(--cinza)] p-6 transition hover:-translate-y-1 hover:border-green-300 hover:bg-white hover:shadow-md"
              >

                <p className="text-xs font-black uppercase tracking-wider text-green-700">
                  Problema agrícola
                </p>

                <h3 className="mt-3 text-xl font-black">
                  {problema.problema}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--cinza-texto)]">
                  {problema.descricao}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {problema.atividades
                    .slice(0, 3)
                    .map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800"
                      >
                        {item}
                      </span>
                    ))}

                </div>

                <div className="mt-6 flex flex-wrap gap-2">

                  <button
                    type="button"
                    onClick={() =>
                      selecionarProblema(problema)
                    }
                    className="rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-green-800"
                  >
                    Resolver problema
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      usarProblemaNaPesquisa(problema)
                    }
                    className="rounded-lg border border-[var(--borda)] bg-white px-4 py-2 text-sm font-bold hover:bg-gray-50"
                  >
                    Ver tecnologias
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* PESQUISA E TECNOLOGIAS */}
      {/* ========================================================= */}

      <section
        ref={tecnologiasRef}
        className="scroll-mt-24 bg-[var(--cinza)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Tecnologias
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Encontre a tecnologia certa
            </h2>

            <p className="mt-3 text-[var(--cinza-texto)]">
              Pesquise por tecnologia, equipamento,
              fornecedor, problema ou aplicação.
            </p>

          </div>

          <div className="mt-8 rounded-3xl border border-[var(--borda)] bg-white p-6">

            <div className="grid gap-4 lg:grid-cols-[1fr_220px_220px_auto]">

              <input
                value={pesquisa}
                onChange={(event) =>
                  setPesquisa(event.target.value)
                }
                placeholder="Pesquisar tecnologia, problema, equipamento..."
                className="rounded-xl border border-[var(--borda)] px-4 py-3 outline-none focus:border-green-600"
              />

              <select
                value={categoriaSelecionada}
                onChange={(event) =>
                  setCategoriaSelecionada(
                    event.target.value
                  )
                }
                className="rounded-xl border border-[var(--borda)] bg-white px-4 py-3 outline-none focus:border-green-600"
              >
                <option value="Todas">
                  Todas as categorias
                </option>

                {categorias.map((categoria) => (
                  <option
                    key={categoria}
                    value={categoria}
                  >
                    {categoria}
                  </option>
                ))}
              </select>

              <select
                value={provinciaSelecionada}
                onChange={(event) =>
                  setProvinciaSelecionada(
                    event.target.value
                  )
                }
                className="rounded-xl border border-[var(--borda)] bg-white px-4 py-3 outline-none focus:border-green-600"
              >
                <option value="Todas">
                  Todas as províncias
                </option>

                {provincias.map((provincia) => (
                  <option
                    key={provincia}
                    value={provincia}
                  >
                    {provincia}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={limparFiltros}
                className="rounded-xl border border-[var(--borda)] px-5 py-3 font-bold hover:bg-gray-50"
              >
                Limpar
              </button>

            </div>

            <div className="mt-4 text-sm text-[var(--cinza-texto)]">
              {tecnologiasFiltradas.length} tecnologia(s)
              encontrada(s)
            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {tecnologiasVisiveis.map((tecnologia) => (
              <article
                key={tecnologia.id}
                className="flex flex-col rounded-2xl border border-[var(--borda)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
              >

                <div className="flex items-start justify-between gap-4">

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                    {tecnologia.categoria}
                  </span>

                  <span className="text-xs font-bold text-gray-500">
                    {tecnologia.provincia}
                  </span>

                </div>

                <h3 className="mt-5 text-xl font-black">
                  {tecnologia.nome}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--cinza-texto)]">
                  {tecnologia.descricao}
                </p>

                <div className="mt-5">

                  <p className="text-xs font-black uppercase tracking-wider text-gray-500">
                    Resolve
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">

                    {tecnologia.problemaResolvido
                      .slice(0, 3)
                      .map((problema) => (
                        <span
                          key={problema}
                          className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs text-gray-700"
                        >
                          {problema}
                        </span>
                      ))}

                  </div>

                </div>

                <div className="mt-6 flex flex-wrap gap-2">

                  <button
                    type="button"
                    onClick={() =>
                      selecionarTecnologia(
                        tecnologia
                      )
                    }
                    className="rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-green-800"
                  >
                    Ver solução
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const fornecedor =
                        fornecedoresTecnologia.find(
                          (item) =>
                            item.id ===
                              tecnologia.fornecedor ||
                            item.nome ===
                              tecnologia.fornecedor
                        );

                      if (fornecedor) {
                        selecionarFornecedor(
                          fornecedor
                        );
                      } else {
                        setPesquisa(
                          tecnologia.fornecedor
                        );
                        irPara(fornecedoresRef);
                      }
                    }}
                    className="rounded-lg border border-[var(--borda)] px-4 py-2 text-sm font-bold hover:bg-gray-50"
                  >
                    Fornecedor
                  </button>

                </div>

              </article>
            ))}

          </div>

          {tecnologiasFiltradas.length === 0 && (
            <div className="mt-8 rounded-2xl border border-[var(--borda)] bg-white p-10 text-center">

              <h3 className="text-xl font-black">
                Nenhuma tecnologia encontrada
              </h3>

              <p className="mt-2 text-sm text-[var(--cinza-texto)]">
                Tente alterar a pesquisa, categoria ou
                província.
              </p>

              <button
                type="button"
                onClick={limparFiltros}
                className="mt-5 rounded-xl bg-green-700 px-5 py-3 font-bold text-white hover:bg-green-800"
              >
                Limpar filtros
              </button>

            </div>
          )}

          {tecnologiasFiltradas.length > 6 && (
            <div className="mt-8 text-center">

              <button
                type="button"
                onClick={() =>
                  setMostrarTodosTecnologias(
                    !mostrarTodosTecnologias
                  )
                }
                className="rounded-xl border border-green-700 px-6 py-3 font-bold text-green-800 hover:bg-green-50"
              >
                {mostrarTodosTecnologias
                  ? "Mostrar menos"
                  : `Ver todas (${tecnologiasFiltradas.length})`}
              </button>

            </div>
          )}

        </div>
      </section>

      {/* ========================================================= */}
      {/* GALERIA DE EQUIPAMENTOS */}
      {/* ========================================================= */}

      <GaleriaEquipamentos />

      {/* ========================================================= */}
      {/* DETALHE DA TECNOLOGIA */}
      {/* ========================================================= */}

      {tecnologiaSelecionada && (
        <section
          id="detalhe-tecnologia"
          className="bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

            <div className="rounded-3xl border border-green-200 bg-green-50 p-6 md:p-8">

              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                <div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                    {tecnologiaSelecionada.categoria}
                  </span>

                  <h2 className="mt-4 text-3xl font-black">
                    {tecnologiaSelecionada.nome}
                  </h2>

                  <p className="mt-3 max-w-3xl text-gray-700">
                    {tecnologiaSelecionada.descricao}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setTecnologiaSelecionada(null)
                  }
                  className="rounded-lg border border-[var(--borda)] bg-white px-4 py-2 text-sm font-bold"
                >
                  Fechar
                </button>

              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-xs font-bold uppercase text-gray-500">
                    Fornecedor
                  </p>

                  <p className="mt-2 font-black">
                    {tecnologiaSelecionada.fornecedor}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-xs font-bold uppercase text-gray-500">
                    Localização
                  </p>

                  <p className="mt-2 font-black">
                    {tecnologiaSelecionada.provincia}
                    {tecnologiaSelecionada.municipio
                      ? ` — ${tecnologiaSelecionada.municipio}`
                      : ""}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-xs font-bold uppercase text-gray-500">
                    Cobertura
                  </p>

                  <p className="mt-2 font-black">
                    {tecnologiaSelecionada.cobertura}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-xs font-bold uppercase text-gray-500">
                    Verificação
                  </p>

                  <p className="mt-2 font-black">
                    {tecnologiaSelecionada.verificacao}
                  </p>
                </div>

              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">

                <div>
                  <h3 className="font-black">
                    Problemas resolvidos
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm">
                    {tecnologiaSelecionada.problemaResolvido.map(
                      (item) => (
                        <li
                          key={item}
                          className="rounded-lg bg-white p-3"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="font-black">
                    Aplicações
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm">
                    {tecnologiaSelecionada.aplicacoes.map(
                      (item) => (
                        <li
                          key={item}
                          className="rounded-lg bg-white p-3"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="font-black">
                    Equipamentos
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm">
                    {(tecnologiaSelecionada.equipamentos ||
                      []
                    ).map((item) => (
                      <li
                        key={item}
                        className="rounded-lg bg-white p-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                <button
                  type="button"
                  onClick={() => {
                    const fornecedor =
                      fornecedoresTecnologia.find(
                        (item) =>
                          item.id ===
                            tecnologiaSelecionada.fornecedor ||
                          item.nome ===
                            tecnologiaSelecionada.fornecedor
                      );

                    if (fornecedor) {
                      selecionarFornecedor(
                        fornecedor
                      );
                    } else {
                      setPesquisa(
                        tecnologiaSelecionada.fornecedor
                      );
                      irPara(fornecedoresRef);
                    }
                  }}
                  className="rounded-xl bg-green-700 px-5 py-3 font-bold text-white hover:bg-green-800"
                >
                  Ver fornecedor
                </button>

                {tecnologiaSelecionada.website && (
                  <a
                    href={tecnologiaSelecionada.website}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-[var(--borda)] bg-white px-5 py-3 font-bold hover:bg-gray-50"
                  >
                    Website
                  </a>
                )}

                <a
                  href={tecnologiaSelecionada.urlFonte}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[var(--borda)] bg-white px-5 py-3 font-bold hover:bg-gray-50"
                >
                  Fonte
                </a>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* FORNECEDORES */}
      {/* ========================================================= */}

      <section
        ref={fornecedoresRef}
        className="scroll-mt-24 bg-[var(--cinza)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div className="max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                Mercado tecnológico
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Fornecedores e serviços
              </h2>

              <p className="mt-3 text-[var(--cinza-texto)]">
                Empresas e prestadores registados na base
                tecnológica da AGROINOVA.
              </p>

            </div>

            <button
              type="button"
              onClick={() =>
                setMostrarTodosFornecedores(
                  !mostrarTodosFornecedores
                )
              }
              className="rounded-xl border border-[var(--borda)] bg-white px-5 py-3 font-bold hover:bg-gray-50"
            >
              {mostrarTodosFornecedores
                ? "Mostrar menos"
                : "Ver todos"}
            </button>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {fornecedoresVisiveis.map((fornecedor) => (
              <article
                key={fornecedor.id}
                className="rounded-2xl border border-[var(--borda)] bg-white p-6 shadow-sm"
              >

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                  {fornecedor.tipo}
                </span>

                <h3 className="mt-4 text-xl font-black">
                  {fornecedor.nome}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {fornecedor.provincia}
                  {fornecedor.municipio
                    ? ` — ${fornecedor.municipio}`
                    : ""}
                </p>

                <p className="mt-4 text-sm leading-6 text-[var(--cinza-texto)]">
                  {fornecedor.descricao}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {fornecedor.categorias
                    .slice(0, 4)
                    .map((categoria) => (
                      <span
                        key={categoria}
                        className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-bold"
                      >
                        {categoria}
                      </span>
                    ))}

                </div>

                <div className="mt-6 flex flex-wrap gap-2">

                  <button
                    type="button"
                    onClick={() =>
                      selecionarFornecedor(
                        fornecedor
                      )
                    }
                    className="rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-green-800"
                  >
                    Ver fornecedor
                  </button>

                  {fornecedor.website && (
                    <a
                      href={fornecedor.website}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-[var(--borda)] px-4 py-2 text-sm font-bold hover:bg-gray-50"
                    >
                      Website
                    </a>
                  )}

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* DETALHE FORNECEDOR */}
      {/* ========================================================= */}

      {fornecedorSelecionado && (
        <section
          id="detalhe-fornecedor"
          className="bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

            <div className="rounded-3xl border border-[var(--borda)] bg-white p-6 shadow-sm md:p-8">

              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                <div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                    {fornecedorSelecionado.tipo}
                  </span>

                  <h2 className="mt-4 text-3xl font-black">
                    {fornecedorSelecionado.nome}
                  </h2>

                  <p className="mt-2 text-gray-500">
                    {fornecedorSelecionado.provincia}
                    {fornecedorSelecionado.municipio
                      ? ` — ${fornecedorSelecionado.municipio}`
                      : ""}
                  </p>

                  <p className="mt-4 max-w-3xl text-gray-700">
                    {fornecedorSelecionado.descricao}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setFornecedorSelecionado(null)
                  }
                  className="rounded-lg border border-[var(--borda)] px-4 py-2 text-sm font-bold"
                >
                  Fechar
                </button>

              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                <div className="rounded-2xl bg-[var(--cinza)] p-5">

                  <h3 className="font-black">
                    Serviços
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm">
                    {fornecedorSelecionado.servicos.map(
                      (servico) => (
                        <li key={servico}>
                          {servico}
                        </li>
                      )
                    )}
                  </ul>

                </div>

                <div className="rounded-2xl bg-[var(--cinza)] p-5">

                  <h3 className="font-black">
                    Equipamentos
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm">
                    {fornecedorSelecionado.equipamentos.map(
                      (equipamento) => (
                        <li key={equipamento}>
                          {equipamento}
                        </li>
                      )
                    )}
                  </ul>

                </div>

                <div className="rounded-2xl bg-[var(--cinza)] p-5">

                  <h3 className="font-black">
                    Marcas
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm">
                    {fornecedorSelecionado.marcas.map(
                      (marca) => (
                        <li key={marca}>
                          {marca}
                        </li>
                      )
                    )}
                  </ul>

                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                {fornecedorSelecionado.telefone && (
                  <a
                    href={`tel:${fornecedorSelecionado.telefone.replace(
                      /\s+/g,
                      ""
                    )}`}
                    className="rounded-xl bg-green-700 px-5 py-3 font-bold text-white hover:bg-green-800"
                  >
                    {fornecedorSelecionado.telefone}
                  </a>
                )}

                {fornecedorSelecionado.email && (
                  <a
                    href={`mailto:${fornecedorSelecionado.email}`}
                    className="rounded-xl border border-[var(--borda)] px-5 py-3 font-bold hover:bg-gray-50"
                  >
                    Enviar email
                  </a>
                )}

                {fornecedorSelecionado.website && (
                  <a
                    href={fornecedorSelecionado.website}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-[var(--borda)] px-5 py-3 font-bold hover:bg-gray-50"
                  >
                    Website
                  </a>
                )}

                <a
                  href={fornecedorSelecionado.urlFonte}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[var(--borda)] px-5 py-3 font-bold hover:bg-gray-50"
                >
                  Fonte da informação
                </a>

              </div>

              <p className="mt-6 text-xs text-gray-500">
                Informação verificada em{" "}
                {fornecedorSelecionado.dataVerificacao}.
              </p>

            </div>

          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* ECOSSISTEMA TECNOLÓGICO */}
      {/* ========================================================= */}

      <section className="bg-green-900 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-300">
              Ecossistema tecnológico
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Tecnologia agrícola em Angola
            </h2>

            <p className="mt-4 leading-7 text-green-50">
              A área Tecnologia deverá evoluir para uma rede
              nacional que ligue problemas agrícolas,
              tecnologias, equipamentos, fornecedores,
              técnicos, explorações e serviços.
            </p>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "Mapa tecnológico",
                "Localização de tecnologias e serviços.",
              ],
              [
                "Equipamentos",
                "Máquinas, sistemas e ferramentas.",
              ],
              [
                "Técnicos",
                "Ligação futura a especialistas.",
              ],
              [
                "Loja agrícola",
                "Fornecedores e soluções disponíveis.",
              ],
            ].map(([titulo, texto]) => (

              <button
                key={titulo}
                type="button"
                onClick={() => {

                  if (titulo === "Loja agrícola") {
                    irPara(fornecedoresRef);
                    return;
                  }

                  if (titulo === "Equipamentos") {
                    irParaEquipamentos();
                    return;
                  }

                  if (titulo === "Mapa tecnológico") {
                    window.location.href = "/mapa";
                    return;
                  }

                  if (titulo === "Técnicos") {
                    window.location.href =
                      "/tecnologias/tecnicos";
                  }

                }}
                className="rounded-2xl border border-green-700 bg-green-800 p-6 text-left transition hover:-translate-y-1 hover:bg-green-700"
              >

                <h3 className="font-black">
                  {titulo}
                </h3>

                <p className="mt-2 text-sm text-green-100">
                  {texto}
                </p>

                <span className="mt-5 inline-block text-sm font-bold text-white">
                  Explorar →
                </span>

              </button>

            ))}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FONTES */}
      {/* ========================================================= */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

          <div className="rounded-2xl border border-[var(--borda)] bg-[var(--cinza)] p-6">

            <h2 className="font-black">
              Transparência das informações
            </h2>

            <p className="mt-2 text-sm leading-6 text-[var(--cinza-texto)]">
              A AGROINOVA procura apresentar tecnologias
              e fornecedores com identificação da fonte,
              instituição, referência e data de verificação.
              Informações comerciais devem ser confirmadas
              directamente junto do fornecedor antes de
              qualquer aquisição ou contratação.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}