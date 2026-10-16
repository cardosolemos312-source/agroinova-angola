
"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

type Tecnico = {
  id: string;
  nome: string;
  titulo_profissional?: string | null;
  formacao_academica?: string | null;
  especialidade?: string | null;
  instituicao?: string | null;
  provincia?: string | null;
  biografia?: string | null;
  telefone?: string | null;
  email?: string | null;
  website?: string | null;
  fotografia_url?: string | null;
  livro_titulo?: string | null;
  livro_descricao?: string | null;
  livro_capa_url?: string | null;
  livro_pdf_url?: string | null;
  estado: string;
  destaque?: boolean;
  criado_em?: string;
};

type FormularioTecnico = {
  nome: string;
  titulo_profissional: string;
  formacao_academica: string;
  especialidade: string;
  instituicao: string;
  provincia: string;
  biografia: string;
  telefone: string;
  email: string;
  website: string;
  fotografia_url: string;
  livro_titulo: string;
  livro_descricao: string;
  livro_capa_url: string;
  livro_pdf_url: string;
  estado: string;
  destaque: boolean;
};

const formularioInicial: FormularioTecnico = {
  nome: "",
  titulo_profissional: "",
  formacao_academica: "",
  especialidade: "",
  instituicao: "",
  provincia: "",
  biografia: "",
  telefone: "",
  email: "",
  website: "",
  fotografia_url: "",
  livro_titulo: "",
  livro_descricao: "",
  livro_capa_url: "",
  livro_pdf_url: "",
  estado: "rascunho",
  destaque: false,
};

const provincias = [
  "Bengo", "Benguela", "Bié", "Cabinda", "Cuando", "Cubango",
  "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla",
  "Icolo e Bengo", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje",
  "Moxico", "Moxico Leste", "Namibe", "Uíge", "Zaire",
];

const TIPOS_IMAGEM = ["image/jpeg", "image/png", "image/webp"];
const MAX_IMAGEM = 5 * 1024 * 1024;
const MAX_PDF = 20 * 1024 * 1024;

function extrairTecnicos(dados: unknown): Tecnico[] {
  if (Array.isArray(dados)) return dados as Tecnico[];

  if (dados && typeof dados === "object") {
    const objeto = dados as Record<string, unknown>;
    for (const chave of ["tecnicos", "dados", "data", "items"]) {
      if (Array.isArray(objeto[chave])) return objeto[chave] as Tecnico[];
    }
  }

  return [];
}

function mensagemDaResposta(dados: unknown, padrao: string): string {
  if (dados && typeof dados === "object") {
    const objeto = dados as Record<string, unknown>;
    if (typeof objeto.erro === "string") return objeto.erro;
    if (typeof objeto.mensagem === "string") return objeto.mensagem;
  }
  return padrao;
}

function validarImagem(ficheiro: File): string | null {
  if (!TIPOS_IMAGEM.includes(ficheiro.type)) {
    return "Selecciona uma imagem JPG, PNG ou WEBP.";
  }
  if (ficheiro.size === 0) return "O ficheiro seleccionado está vazio.";
  if (ficheiro.size > MAX_IMAGEM) return "A imagem não pode ultrapassar 5 MB.";
  return null;
}

export default function PainelTecnicos() {
  const [tecnicos, setTecnicos] = useState<Tecnico[]>([]);
  const [formulario, setFormulario] =
    useState<FormularioTecnico>(formularioInicial);

  const [ficheiroFotografia, setFicheiroFotografia] = useState<File | null>(null);
  const [ficheiroCapa, setFicheiroCapa] = useState<File | null>(null);
  const [ficheiroPdf, setFicheiroPdf] = useState<File | null>(null);

  const [previsualizacaoFotografia, setPrevisualizacaoFotografia] = useState("");
  const [previsualizacaoCapa, setPrevisualizacaoCapa] = useState("");

  const [pesquisa, setPesquisa] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [filtroProvincia, setFiltroProvincia] = useState("todas");
  const [formularioAberto, setFormularioAberto] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const [aGuardar, setAGuardar] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    return () => {
      if (previsualizacaoFotografia) URL.revokeObjectURL(previsualizacaoFotografia);
    };
  }, [previsualizacaoFotografia]);

  useEffect(() => {
    return () => {
      if (previsualizacaoCapa) URL.revokeObjectURL(previsualizacaoCapa);
    };
  }, [previsualizacaoCapa]);

  const carregarTecnicos = useCallback(async () => {
    setCarregando(true);
    setErro("");

    try {
      const resposta = await fetch("/api/admin/tecnicos", {
        method: "GET",
        cache: "no-store",
      });

      const dados: unknown = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          mensagemDaResposta(dados, "Não foi possível carregar os técnicos."),
        );
      }

      setTecnicos(extrairTecnicos(dados));
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao carregar os técnicos.");
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    void carregarTecnicos();
  }, [carregarTecnicos]);

  const tecnicosFiltrados = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt-PT");

    return tecnicos.filter((tecnico) => {
      const correspondePesquisa =
        !termo ||
        [
          tecnico.nome,
          tecnico.especialidade,
          tecnico.instituicao,
          tecnico.formacao_academica,
          tecnico.provincia,
        ]
          .filter(Boolean)
          .some((valor) =>
            String(valor).toLocaleLowerCase("pt-PT").includes(termo),
          );

      return (
        correspondePesquisa &&
        (filtroEstado === "todos" || tecnico.estado === filtroEstado) &&
        (filtroProvincia === "todas" || tecnico.provincia === filtroProvincia)
      );
    });
  }, [tecnicos, pesquisa, filtroEstado, filtroProvincia]);

  function actualizarCampo<K extends keyof FormularioTecnico>(
    campo: K,
    valor: FormularioTecnico[K],
  ) {
    setFormulario((atual) => ({ ...atual, [campo]: valor }));
  }

  function seleccionarImagem(
    evento: ChangeEvent<HTMLInputElement>,
    tipo: "fotografia" | "capa",
  ) {
    const ficheiro = evento.target.files?.[0] ?? null;

    if (!ficheiro) return;

    const erroImagem = validarImagem(ficheiro);
    if (erroImagem) {
      setErro(erroImagem);
      evento.target.value = "";
      return;
    }

    setErro("");
    const url = URL.createObjectURL(ficheiro);

    if (tipo === "fotografia") {
      setPrevisualizacaoFotografia((anterior) => {
        if (anterior) URL.revokeObjectURL(anterior);
        return url;
      });
      setFicheiroFotografia(ficheiro);
    } else {
      setPrevisualizacaoCapa((anterior) => {
        if (anterior) URL.revokeObjectURL(anterior);
        return url;
      });
      setFicheiroCapa(ficheiro);
    }
  }

  function limparFicheiros() {
    setFicheiroFotografia(null);
    setFicheiroCapa(null);
    setFicheiroPdf(null);
    setPrevisualizacaoFotografia((anterior) => {
      if (anterior) URL.revokeObjectURL(anterior);
      return "";
    });
    setPrevisualizacaoCapa((anterior) => {
      if (anterior) URL.revokeObjectURL(anterior);
      return "";
    });

    ["fotografia-tecnico", "capa-livro", "pdf-livro"].forEach((id) => {
      const input = document.getElementById(id) as HTMLInputElement | null;
      if (input) input.value = "";
    });
  }

  async function submeterTecnico(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (aGuardar) return;

    setAGuardar(true);
    setErro("");
    setMensagem("");

    try {
      const dados = new FormData();

      Object.entries(formulario).forEach(([campo, valor]) => {
        dados.append(campo, String(valor));
      });

      if (ficheiroFotografia) dados.append("fotografia", ficheiroFotografia);
      if (ficheiroCapa) dados.append("livro_capa", ficheiroCapa);
      if (ficheiroPdf) dados.append("livro_pdf", ficheiroPdf);

      const resposta = await fetch("/api/admin/tecnicos", {
        method: "POST",
        body: dados,
      });

      const resultado: unknown = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          mensagemDaResposta(resultado, "Não foi possível guardar o técnico."),
        );
      }

      setMensagem("Técnico registado com sucesso.");
      setFormulario(formularioInicial);
      limparFicheiros();
      setFormularioAberto(false);
      await carregarTecnicos();
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao guardar o registo.");
    } finally {
      setAGuardar(false);
    }
  }

  const totalPublicados = tecnicos.filter((t) => t.estado === "publicado").length;
  const totalRascunhos = tecnicos.filter((t) => t.estado === "rascunho").length;

  const classeInput =
    "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100";

  const classeFicheiro =
    "mt-3 block w-full rounded-xl border border-gray-300 bg-white p-3 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-green-100 file:px-4 file:py-2 file:font-bold file:text-green-900 hover:file:bg-green-200";

  return (
    <section
      id="painel-tecnicos"
      className="my-16 scroll-mt-24 overflow-hidden rounded-3xl border border-green-200 bg-white shadow-xl"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 px-6 py-10 text-white sm:px-10">
        <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border-[28px] border-white/10" />
        <div className="absolute -bottom-20 right-40 h-48 w-48 rounded-full bg-lime-300/10 blur-2xl" />

        <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
              Rede de conhecimento
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Técnicos e Especialistas
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-green-50 sm:text-base">
              Conheça os profissionais ligados à investigação agropecuária,
              às instituições científicas e à transferência de conhecimento
              para o sector agrário angolano.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setFormularioAberto((aberto) => !aberto);
              setErro("");
              setMensagem("");
            }}
            className="shrink-0 rounded-xl bg-white px-5 py-3 font-bold text-green-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
          >
            {formularioAberto ? "Fechar formulário" : "+ Registar técnico"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px bg-green-100 sm:grid-cols-3">
        <div className="bg-green-50 p-5 text-center">
          <p className="text-3xl font-black text-green-900">{tecnicos.length}</p>
          <p className="mt-1 text-sm text-gray-600">Registos disponíveis</p>
        </div>
        <div className="bg-white p-5 text-center">
          <p className="text-3xl font-black text-emerald-700">{totalPublicados}</p>
          <p className="mt-1 text-sm text-gray-600">Publicados</p>
        </div>
        <div className="bg-white p-5 text-center">
          <p className="text-3xl font-black text-amber-600">{totalRascunhos}</p>
          <p className="mt-1 text-sm text-gray-600">Em rascunho</p>
        </div>
      </div>

      {mensagem && (
        <div role="status" className="mx-6 mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800 sm:mx-8">
          {mensagem}
        </div>
      )}
      {erro && (
        <div role="alert" className="mx-6 mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 sm:mx-8">
          {erro}
        </div>
      )}

      {formularioAberto && (
        <form onSubmit={submeterTecnico} className="m-5 rounded-2xl border border-green-200 bg-green-50/70 p-5 sm:m-8 sm:p-7">
          <h3 className="text-xl font-extrabold text-green-950">Registar especialista</h3>
          <p className="mb-6 mt-2 text-sm leading-6 text-gray-600">
            Preencha os dados profissionais. Os campos assinalados com * são obrigatórios.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Campo rotulo="Nome completo *" valor={formulario.nome} obrigatorio onChange={(v) => actualizarCampo("nome", v)} placeholder="Nome do técnico" />
            <Campo rotulo="Título profissional" valor={formulario.titulo_profissional} onChange={(v) => actualizarCampo("titulo_profissional", v)} placeholder="Ex.: Investigador agrário" />
            <Campo rotulo="Formação académica" valor={formulario.formacao_academica} onChange={(v) => actualizarCampo("formacao_academica", v)} placeholder="Ex.: Engenheiro agrónomo" />
            <Campo rotulo="Especialidade" valor={formulario.especialidade} onChange={(v) => actualizarCampo("especialidade", v)} placeholder="Ex.: Ciência do solo" />
            <Campo rotulo="Instituição" valor={formulario.instituicao} onChange={(v) => actualizarCampo("instituicao", v)} placeholder="Instituição de investigação" />

            <label className="block text-sm font-semibold text-gray-700">
              Província
              <select value={formulario.provincia} onChange={(e) => actualizarCampo("provincia", e.target.value)} className={classeInput}>
                <option value="">Seleccionar província</option>
                {provincias.map((provincia) => <option key={provincia} value={provincia}>{provincia}</option>)}
              </select>
            </label>

            <Campo rotulo="E-mail" valor={formulario.email} tipo="email" onChange={(v) => actualizarCampo("email", v)} placeholder="nome@instituicao.ao" />
            <Campo rotulo="Telefone" valor={formulario.telefone} onChange={(v) => actualizarCampo("telefone", v)} placeholder="Contacto profissional" />
            <Campo rotulo="Website" valor={formulario.website} tipo="url" onChange={(v) => actualizarCampo("website", v)} placeholder="https://..." />

            <label className="block text-sm font-semibold text-gray-700 md:col-span-2">
              Fotografia do técnico
              <span className="mt-1 block text-xs font-normal text-gray-500">JPG, PNG ou WEBP. Tamanho máximo: 5 MB.</span>
              <input id="fotografia-tecnico" type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => seleccionarImagem(e, "fotografia")} className={classeFicheiro} />
              {previsualizacaoFotografia && (
                <span className="mt-4 flex items-center gap-4 rounded-xl border border-green-200 bg-white p-3">
                  <img src={previsualizacaoFotografia} alt="Pré-visualização da fotografia" className="h-20 w-20 shrink-0 rounded-xl object-cover" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-green-900">Fotografia seleccionada</span>
                    <span className="mt-1 block break-all text-xs font-normal text-gray-500">{ficheiroFotografia?.name}</span>
                    <button type="button" onClick={() => {
                      setFicheiroFotografia(null);
                      setPrevisualizacaoFotografia((anterior) => {
                        if (anterior) URL.revokeObjectURL(anterior);
                        return "";
                      });
                      const input = document.getElementById("fotografia-tecnico") as HTMLInputElement | null;
                      if (input) input.value = "";
                    }} className="mt-2 text-xs font-bold text-red-700 hover:underline">Remover fotografia</button>
                  </span>
                </span>
              )}
            </label>

            <label className="block text-sm font-semibold text-gray-700">
              Estado do registo
              <select value={formulario.estado} onChange={(e) => actualizarCampo("estado", e.target.value)} className={classeInput}>
                <option value="rascunho">Rascunho</option>
                <option value="publicado">Publicado</option>
              </select>
            </label>

            <label className="flex items-center gap-3 rounded-xl border border-green-200 bg-white p-4 text-sm font-semibold text-gray-700">
              <input type="checkbox" checked={formulario.destaque} onChange={(e) => actualizarCampo("destaque", e.target.checked)} className="h-5 w-5 accent-green-700" />
              Destacar este especialista
            </label>

            <label className="block text-sm font-semibold text-gray-700 md:col-span-2">
              Biografia profissional
              <textarea value={formulario.biografia} onChange={(e) => actualizarCampo("biografia", e.target.value)} rows={4} placeholder="Descreva a experiência, investigação e principais áreas de trabalho..." className={classeInput} />
            </label>
          </div>

          <div className="mt-7 rounded-2xl border border-green-200 bg-white p-5">
            <h4 className="text-lg font-extrabold text-green-950">Livro ou publicação do especialista</h4>
            <p className="mt-1 text-sm text-gray-500">Opcional. Associe uma publicação ao perfil deste técnico.</p>

            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <Campo rotulo="Título do livro ou publicação" valor={formulario.livro_titulo} onChange={(v) => actualizarCampo("livro_titulo", v)} placeholder="Título da publicação" />

              <label className="block text-sm font-semibold text-gray-700 md:col-span-2">
                Descrição da publicação
                <textarea value={formulario.livro_descricao} onChange={(e) => actualizarCampo("livro_descricao", e.target.value)} rows={3} placeholder="Breve descrição do livro ou documento..." className={classeInput} />
              </label>

              <label className="block text-sm font-semibold text-gray-700">
                Capa do livro
                <span className="mt-1 block text-xs font-normal text-gray-500">JPG, PNG ou WEBP. Máximo de 5 MB.</span>
                <input id="capa-livro" type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => seleccionarImagem(e, "capa")} className={classeFicheiro} />
                {previsualizacaoCapa && (
                  <span className="mt-3 flex items-center gap-3 rounded-xl border border-green-200 p-3">
                    <img src={previsualizacaoCapa} alt="Pré-visualização da capa" className="h-24 w-16 rounded-lg object-cover" />
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-green-900">Capa seleccionada</span>
                      <span className="block break-all text-xs font-normal text-gray-500">{ficheiroCapa?.name}</span>
                      <button type="button" onClick={() => {
                        setFicheiroCapa(null);
                        setPrevisualizacaoCapa((anterior) => {
                          if (anterior) URL.revokeObjectURL(anterior);
                          return "";
                        });
                        const input = document.getElementById("capa-livro") as HTMLInputElement | null;
                        if (input) input.value = "";
                      }} className="mt-2 text-xs font-bold text-red-700 hover:underline">Remover capa</button>
                    </span>
                  </span>
                )}
              </label>

              <label className="block text-sm font-semibold text-gray-700">
                Documento PDF
                <span className="mt-1 block text-xs font-normal text-gray-500">PDF. Tamanho máximo: 20 MB.</span>
                <input id="pdf-livro" type="file" accept="application/pdf,.pdf" onChange={(e) => {
                  const ficheiro = e.target.files?.[0] ?? null;
                  if (!ficheiro) {
                    setFicheiroPdf(null);
                    return;
                  }
                  if (!ficheiro.name.toLowerCase().endsWith(".pdf")) {
                    setErro("Selecciona um documento PDF.");
                    e.target.value = "";
                    setFicheiroPdf(null);
                    return;
                  }
                  if (ficheiro.size === 0 || ficheiro.size > MAX_PDF) {
                    setErro("O PDF deve ter conteúdo e não pode ultrapassar 20 MB.");
                    e.target.value = "";
                    setFicheiroPdf(null);
                    return;
                  }
                  setErro("");
                  setFicheiroPdf(ficheiro);
                }} className={classeFicheiro} />
                {ficheiroPdf && (
                  <span className="mt-3 block rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-900">
                    PDF seleccionado: <span className="break-all font-bold">{ficheiroPdf.name}</span>
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" disabled={aGuardar} className="rounded-xl bg-green-800 px-6 py-3 font-bold text-white transition hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-60">
              {aGuardar ? "A guardar..." : "Guardar técnico"}
            </button>
            <button type="button" onClick={() => {
              setFormularioAberto(false);
              setErro("");
              limparFicheiros();
            }} disabled={aGuardar} className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 disabled:opacity-50">
              Cancelar
            </button>
          </div>
        </form>
      )}

      <div className="space-y-5 p-5 sm:p-8">
        <div>
          <h3 className="text-xl font-extrabold text-gray-900">Directório de especialistas</h3>
          <p className="mt-1 text-sm text-gray-500">Pesquise por nome, especialidade, formação, instituição ou província.</p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <input type="search" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="Pesquisar especialista..." className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" />
          <select value={filtroProvincia} onChange={(e) => setFiltroProvincia(e.target.value)} className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600">
            <option value="todas">Todas as províncias</option>
            {provincias.map((provincia) => <option key={provincia} value={provincia}>{provincia}</option>)}
          </select>
          <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)} className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600">
            <option value="todos">Todos os estados</option>
            <option value="publicado">Publicados</option>
            <option value="rascunho">Rascunhos</option>
            <option value="arquivado">Arquivados</option>
          </select>
        </div>

        {carregando ? (
          <div className="rounded-2xl bg-gray-50 px-5 py-12 text-center">
            <div className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-green-200 border-t-green-700" />
            <p className="mt-4 text-sm text-gray-600">A carregar os especialistas...</p>
          </div>
        ) : tecnicosFiltrados.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-green-200 bg-green-50/50 px-5 py-12 text-center">
            <h4 className="font-bold text-gray-900">
              {tecnicos.length === 0 ? "Ainda não existem técnicos registados" : "Nenhum resultado encontrado"}
            </h4>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-600">
              {tecnicos.length === 0
                ? "Quando existirem registos na base de dados, os especialistas serão apresentados aqui."
                : "Experimente alterar os termos de pesquisa ou os filtros seleccionados."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {tecnicosFiltrados.map((tecnico) => (
              <article key={tecnico.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg">
                <div className="h-1.5 bg-gradient-to-r from-green-800 via-green-500 to-lime-400" />
                <div className="flex gap-4 p-5">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-green-100">
                    {tecnico.fotografia_url ? (
                      <img src={tecnico.fotografia_url} alt={`Fotografia de ${tecnico.nome}`} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-2xl font-black text-green-800">
                        {tecnico.nome.trim().split(/\s+/).slice(0, 2).map((p) => p.charAt(0).toUpperCase()).join("")}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="text-lg font-extrabold leading-snug text-gray-900">{tecnico.nome}</h4>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${tecnico.estado === "publicado" ? "bg-green-100 text-green-800" : tecnico.estado === "arquivado" ? "bg-gray-100 text-gray-600" : "bg-amber-100 text-amber-800"}`}>
                        {tecnico.estado === "publicado" ? "Publicado" : tecnico.estado === "arquivado" ? "Arquivado" : "Rascunho"}
                      </span>
                    </div>
                    {tecnico.titulo_profissional && <p className="mt-1 text-sm font-medium text-green-800">{tecnico.titulo_profissional}</p>}
                    {tecnico.especialidade && <p className="mt-2 text-sm text-gray-700"><span className="font-semibold">Especialidade:</span> {tecnico.especialidade}</p>}
                    {tecnico.formacao_academica && <p className="mt-1 text-sm text-gray-600">{tecnico.formacao_academica}</p>}
                  </div>
                </div>

                {(tecnico.instituicao || tecnico.provincia || tecnico.biografia) && (
                  <div className="space-y-2 border-t border-gray-100 px-5 py-4">
                    {tecnico.instituicao && <p className="text-sm text-gray-700"><span className="font-semibold">Instituição:</span> {tecnico.instituicao}</p>}
                    {tecnico.provincia && <p className="text-sm text-gray-700"><span className="font-semibold">Província:</span> {tecnico.provincia}</p>}
                    {tecnico.biografia && <p className="line-clamp-4 text-sm leading-6 text-gray-600">{tecnico.biografia}</p>}
                  </div>
                )}

                {tecnico.livro_titulo && (
                  <div className="border-t border-gray-100 px-5 py-4">
                    <div className="flex gap-4">
                      {tecnico.livro_capa_url && <img src={tecnico.livro_capa_url} alt={`Capa de ${tecnico.livro_titulo}`} className="h-24 w-16 rounded-lg object-cover" loading="lazy" />}
                      <div>
                        <p className="font-bold text-gray-900">{tecnico.livro_titulo}</p>
                        {tecnico.livro_descricao && <p className="mt-1 text-sm text-gray-600">{tecnico.livro_descricao}</p>}
                        {tecnico.livro_pdf_url && <a href={tecnico.livro_pdf_url} target="_blank" rel="noreferrer" className="mt-2 inline-block font-semibold text-green-800 hover:underline">Abrir documento PDF</a>}
                      </div>
                    </div>
                  </div>
                )}

                {(tecnico.email || tecnico.telefone || tecnico.website) && (
                  <div className="flex flex-wrap gap-3 border-t border-gray-100 bg-gray-50 px-5 py-4 text-sm">
                    {tecnico.email && <a href={`mailto:${tecnico.email}`} className="font-semibold text-green-800 hover:underline">Contactar por e-mail</a>}
                    {tecnico.telefone && <a href={`tel:${tecnico.telefone}`} className="font-semibold text-green-800 hover:underline">Telefone</a>}
                    {tecnico.website && <a href={tecnico.website} target="_blank" rel="noreferrer" className="font-semibold text-green-800 hover:underline">Website</a>}
                  </div>
                )}
                {tecnico.destaque && <div className="border-t border-green-100 bg-green-50 px-5 py-2 text-xs font-bold uppercase tracking-wide text-green-800">Especialista em destaque</div>}
              </article>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-5">
          <p className="text-sm text-gray-500">A apresentar {tecnicosFiltrados.length} de {tecnicos.length} registo(s).</p>
          <button type="button" onClick={() => void carregarTecnicos()} disabled={carregando} className="rounded-lg border border-green-200 px-4 py-2 text-sm font-bold text-green-800 transition hover:bg-green-50 disabled:opacity-50">Actualizar lista</button>
        </div>
      </div>
    </section>
  );
}

type CampoProps = {
  rotulo: string;
  valor: string;
  onChange: (valor: string) => void;
  placeholder?: string;
  tipo?: string;
  obrigatorio?: boolean;
};

function Campo({
  rotulo,
  valor,
  onChange,
  placeholder,
  tipo = "text",
  obrigatorio = false,
}: CampoProps) {
  return (
    <label className="block text-sm font-semibold text-gray-700">
      {rotulo}
      <input
        type={tipo}
        value={valor}
        required={obrigatorio}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
      />
    </label>
  );
}
