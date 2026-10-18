
"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";

type EstadoTecnico = "rascunho" | "publicado" | "arquivado";

type Tecnico = {
  id: string;
  nome: string;
  titulo_profissional: string | null;
  formacao_academica: string | null;
  especialidade: string | null;
  instituicao: string | null;
  provincia: string | null;
  biografia: string | null;
  telefone: string | null;
  email: string | null;
  website: string | null;
  fotografia_url: string | null;
  livro_titulo: string | null;
  livro_descricao: string | null;
  livro_capa_url: string | null;
  livro_pdf_url: string | null;
  estado: EstadoTecnico;
  destaque: boolean;
  criado_em?: string | null;
  publicado_em?: string | null;
  actualizado_em?: string | null;
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
  fotografia: File | null;
  livro_titulo: string;
  livro_descricao: string;
  livro_capa: File | null;
  livro_pdf: File | null;
  estado: EstadoTecnico;
  destaque: boolean;
};

type FicheirosExistentes = {
  fotografia: string;
  livro_capa: string;
  livro_pdf: string;
};

const FORMULARIO_VAZIO: FormularioTecnico = {
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
  fotografia: null,
  livro_titulo: "",
  livro_descricao: "",
  livro_capa: null,
  livro_pdf: null,
  estado: "rascunho",
  destaque: false,
};

const FICHEIROS_VAZIOS: FicheirosExistentes = {
  fotografia: "",
  livro_capa: "",
  livro_pdf: "",
};

const PROVINCIAS = [
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando Cubango",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
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

const ESTADOS: { valor: EstadoTecnico; texto: string }[] = [
  { valor: "rascunho", texto: "Rascunho" },
  { valor: "publicado", texto: "Publicado" },
  { valor: "arquivado", texto: "Arquivado" },
];

const ESTILO: Record<string, CSSProperties> = {
  pagina: {
    width: "100%",
    color: "#17221b",
    fontFamily: "Arial, sans-serif",
  },
  cabecalho: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    marginBottom: 24,
  },
  titulo: {
    margin: 0,
    fontSize: 27,
    fontWeight: 800,
    letterSpacing: "-0.6px",
  },
  subtitulo: {
    margin: "8px 0 0",
    color: "#64748b",
    lineHeight: 1.6,
  },
  botaoPrincipal: {
    border: 0,
    borderRadius: 10,
    background: "#166534",
    color: "#fff",
    padding: "12px 17px",
    fontWeight: 700,
    cursor: "pointer",
  },
  estatisticas: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 14,
    marginBottom: 22,
  },
  estatistica: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 14,
    padding: 18,
    boxShadow: "0 3px 12px rgba(15, 23, 42, 0.04)",
  },
  numero: {
    display: "block",
    fontSize: 27,
    fontWeight: 800,
    marginTop: 8,
  },
  rotulo: {
    color: "#64748b",
    fontSize: 13,
    fontWeight: 600,
  },
  painel: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
  },
  filtros: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 12,
    marginBottom: 20,
  },
  campo: {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #cbd5e1",
    borderRadius: 9,
    padding: "11px 12px",
    background: "#fff",
    color: "#17221b",
    font: "inherit",
  },
  lista: {
    display: "grid",
    gap: 13,
  },
  cartao: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    alignItems: "flex-start",
    padding: 16,
    border: "1px solid #e2e8f0",
    borderRadius: 13,
    background: "#fff",
  },
  fotografia: {
    width: 86,
    height: 86,
    borderRadius: 12,
    objectFit: "cover",
    background: "#f0fdf4",
    border: "1px solid #e2e8f0",
    flexShrink: 0,
  },
  conteudo: {
    flex: "1 1 230px",
    minWidth: 0,
  },
  nome: {
    margin: "0 0 6px",
    fontSize: 17,
    fontWeight: 800,
    overflowWrap: "anywhere",
  },
  detalhe: {
    margin: "4px 0",
    fontSize: 13,
    color: "#64748b",
    lineHeight: 1.5,
    overflowWrap: "anywhere",
  },
  acoes: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },
  botaoSecundario: {
    border: "1px solid #cbd5e1",
    borderRadius: 8,
    background: "#fff",
    color: "#17221b",
    padding: "8px 11px",
    fontWeight: 700,
    cursor: "pointer",
  },
  estado: {
    display: "inline-block",
    borderRadius: 999,
    padding: "5px 9px",
    fontSize: 11,
    fontWeight: 800,
    background: "#f1f5f9",
    color: "#475569",
  },
  mensagem: {
    padding: 13,
    borderRadius: 10,
    background: "#f0fdf4",
    color: "#166534",
    marginBottom: 16,
    lineHeight: 1.5,
  },
  erro: {
    padding: 13,
    borderRadius: 10,
    background: "#fef2f2",
    color: "#b91c1c",
    marginBottom: 16,
    lineHeight: 1.5,
  },
  sobreposicao: {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    background: "rgba(15, 23, 42, 0.65)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  modal: {
    background: "#fff",
    borderRadius: 16,
    width: "100%",
    maxWidth: 850,
    maxHeight: "92vh",
    overflowY: "auto",
    padding: 22,
    boxSizing: "border-box",
    boxShadow: "0 20px 70px rgba(0,0,0,0.2)",
  },
  grelhaFormulario: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
  },
  rotuloCampo: {
    display: "block",
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 6,
  },
  campoGrupo: {
    minWidth: 0,
  },
  campoLargo: {
    gridColumn: "1 / -1",
  },
  separador: {
    gridColumn: "1 / -1",
    margin: "12px 0 0",
    paddingBottom: 9,
    borderBottom: "1px solid #e2e8f0",
    color: "#166534",
    fontSize: 16,
    fontWeight: 800,
  },
  areaFicheiro: {
    border: "1px dashed #86b99a",
    borderRadius: 12,
    background: "#f8fdf9",
    padding: 13,
  },
  preVisualizacao: {
    display: "block",
    width: 110,
    height: 110,
    objectFit: "cover",
    borderRadius: 10,
    border: "1px solid #e2e8f0",
    marginTop: 12,
  },
  rodapeModal: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 22,
    paddingTop: 16,
    borderTop: "1px solid #e2e8f0",
  },
};

function estadoTexto(estado: EstadoTecnico) {
  return ESTADOS.find((item) => item.valor === estado)?.texto ?? estado;
}

function dataTexto(data?: string | null) {
  if (!data) return "Ainda não publicado";

  const valor = new Date(data);

  if (Number.isNaN(valor.getTime())) return "Data indisponível";

  return valor.toLocaleDateString("pt-PT");
}

function tamanhoFicheiro(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default function GestaoTecnicos() {
  const [tecnicos, setTecnicos] = useState<Tecnico[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [pesquisa, setPesquisa] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [filtroProvincia, setFiltroProvincia] = useState("todas");
  const [modalAberto, setModalAberto] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [idEdicao, setIdEdicao] = useState<string | null>(null);
  const [formulario, setFormulario] =
    useState<FormularioTecnico>(FORMULARIO_VAZIO);
  const [ficheirosExistentes, setFicheirosExistentes] =
    useState<FicheirosExistentes>(FICHEIROS_VAZIOS);
  const [fotografiaPreview, setFotografiaPreview] = useState("");
  const [capaPreview, setCapaPreview] = useState("");

  useEffect(() => {
    if (!formulario.fotografia) {
      setFotografiaPreview("");
      return;
    }

    const url = URL.createObjectURL(formulario.fotografia);
    setFotografiaPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [formulario.fotografia]);

  useEffect(() => {
    if (!formulario.livro_capa) {
      setCapaPreview("");
      return;
    }

    const url = URL.createObjectURL(formulario.livro_capa);
    setCapaPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [formulario.livro_capa]);

  const carregarTecnicos = useCallback(async () => {
    setCarregando(true);
    setErro("");

    try {
      const resposta = await fetch("/api/admin/tecnicos", {
        method: "GET",
        cache: "no-store",
      });

      const dados = await resposta.json();

      if (!resposta.ok || dados.sucesso !== true) {
        throw new Error(
          dados.erro || "Não foi possível carregar os técnicos."
        );
      }

      setTecnicos(Array.isArray(dados.tecnicos) ? dados.tecnicos : []);
    } catch (erroAtual) {
      setErro(
        erroAtual instanceof Error
          ? erroAtual.message
          : "Ocorreu um erro ao carregar os técnicos."
      );
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    void carregarTecnicos();
  }, [carregarTecnicos]);

  const filtrados = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt-PT");

    return tecnicos.filter((tecnico) => {
      const correspondePesquisa =
        !termo ||
        [
          tecnico.nome,
          tecnico.titulo_profissional,
          tecnico.formacao_academica,
          tecnico.especialidade,
          tecnico.instituicao,
          tecnico.provincia,
          tecnico.email,
          tecnico.livro_titulo,
        ]
          .filter(Boolean)
          .some((valor) =>
            String(valor).toLocaleLowerCase("pt-PT").includes(termo)
          );

      const correspondeEstado =
        filtroEstado === "todos" || tecnico.estado === filtroEstado;

      const correspondeProvincia =
        filtroProvincia === "todas" ||
        tecnico.provincia === filtroProvincia;

      return (
        correspondePesquisa &&
        correspondeEstado &&
        correspondeProvincia
      );
    });
  }, [tecnicos, pesquisa, filtroEstado, filtroProvincia]);

  const totalPublicados = tecnicos.filter(
    (tecnico) => tecnico.estado === "publicado"
  ).length;

  const totalRascunhos = tecnicos.filter(
    (tecnico) => tecnico.estado === "rascunho"
  ).length;

  const totalDestaques = tecnicos.filter(
    (tecnico) => tecnico.destaque
  ).length;

  function abrirNovo() {
    setIdEdicao(null);
    setFormulario({ ...FORMULARIO_VAZIO });
    setFicheirosExistentes({ ...FICHEIROS_VAZIOS });
    setErro("");
    setMensagem("");
    setModalAberto(true);
  }

  function abrirEdicao(tecnico: Tecnico) {
    setIdEdicao(tecnico.id);

    setFormulario({
      nome: tecnico.nome ?? "",
      titulo_profissional: tecnico.titulo_profissional ?? "",
      formacao_academica: tecnico.formacao_academica ?? "",
      especialidade: tecnico.especialidade ?? "",
      instituicao: tecnico.instituicao ?? "",
      provincia: tecnico.provincia ?? "",
      biografia: tecnico.biografia ?? "",
      telefone: tecnico.telefone ?? "",
      email: tecnico.email ?? "",
      website: tecnico.website ?? "",
      fotografia: null,
      livro_titulo: tecnico.livro_titulo ?? "",
      livro_descricao: tecnico.livro_descricao ?? "",
      livro_capa: null,
      livro_pdf: null,
      estado: tecnico.estado ?? "rascunho",
      destaque: tecnico.destaque === true,
    });

    setFicheirosExistentes({
      fotografia: tecnico.fotografia_url ?? "",
      livro_capa: tecnico.livro_capa_url ?? "",
      livro_pdf: tecnico.livro_pdf_url ?? "",
    });

    setErro("");
    setMensagem("");
    setModalAberto(true);
  }

  function alterarCampo<K extends keyof FormularioTecnico>(
    campo: K,
    valor: FormularioTecnico[K]
  ) {
    setFormulario((anterior) => ({
      ...anterior,
      [campo]: valor,
    }));
  }

  function validarFicheiros(): string | null {
    const fotografia = formulario.fotografia;
    const capa = formulario.livro_capa;
    const pdf = formulario.livro_pdf;

    const tiposImagem = ["image/jpeg", "image/png", "image/webp"];

    if (fotografia && !tiposImagem.includes(fotografia.type)) {
      return "A fotografia deve ser uma imagem JPG, PNG ou WEBP.";
    }

    if (fotografia && fotografia.size > 5 * 1024 * 1024) {
      return "A fotografia não pode ultrapassar 5 MB.";
    }

    if (capa && !tiposImagem.includes(capa.type)) {
      return "A capa deve ser uma imagem JPG, PNG ou WEBP.";
    }

    if (capa && capa.size > 5 * 1024 * 1024) {
      return "A capa do livro não pode ultrapassar 5 MB.";
    }

    if (pdf && pdf.type !== "application/pdf") {
      return "O documento do livro deve estar em formato PDF.";
    }

    if (pdf && pdf.size > 25 * 1024 * 1024) {
      return "O PDF não pode ultrapassar 25 MB.";
    }

    return null;
  }

  async function guardarTecnico(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    setErro("");
    setMensagem("");

    const erroFicheiros = validarFicheiros();

    if (erroFicheiros) {
      setErro(erroFicheiros);
      return;
    }

    setGuardando(true);

    try {
      const dadosFormulario = new FormData();

      dadosFormulario.append("nome", formulario.nome.trim());
      dadosFormulario.append(
        "titulo_profissional",
        formulario.titulo_profissional
      );
      dadosFormulario.append(
        "formacao_academica",
        formulario.formacao_academica
      );
      dadosFormulario.append("especialidade", formulario.especialidade);
      dadosFormulario.append("instituicao", formulario.instituicao);
      dadosFormulario.append("provincia", formulario.provincia);
      dadosFormulario.append("biografia", formulario.biografia);
      dadosFormulario.append("telefone", formulario.telefone);
      dadosFormulario.append("email", formulario.email);
      dadosFormulario.append("website", formulario.website);
      dadosFormulario.append("livro_titulo", formulario.livro_titulo);
      dadosFormulario.append("livro_descricao", formulario.livro_descricao);
      dadosFormulario.append("estado", formulario.estado);
      dadosFormulario.append("destaque", String(formulario.destaque));

      if (idEdicao) {
        dadosFormulario.append("id", idEdicao);
      }

      if (formulario.fotografia) {
        dadosFormulario.append("fotografia", formulario.fotografia);
      }

      if (formulario.livro_capa) {
        dadosFormulario.append("livro_capa", formulario.livro_capa);
      }

      if (formulario.livro_pdf) {
        dadosFormulario.append("livro_pdf", formulario.livro_pdf);
      }

      const resposta = await fetch("/api/admin/tecnicos", {
        method: idEdicao ? "PATCH" : "POST",
        body: dadosFormulario,
      });

const textoResposta = await resposta.text();

let dados: {
  sucesso?: boolean;
  erro?: string;
  detalhe?: string;
} = {};

try {
  dados = textoResposta ? JSON.parse(textoResposta) : {};
} catch {
  throw new Error(
    `Resposta inválida do servidor (HTTP ${resposta.status}): ${
      textoResposta.slice(0, 250) || "Resposta vazia."
    }`
  );
}

if (!resposta.ok || dados.sucesso !== true) {
  throw new Error(
    dados.erro || dados.detalhe || "Não foi possível guardar o técnico."
  );
}
      setModalAberto(false);
      setMensagem(
        idEdicao
          ? "Os dados do técnico foram actualizados com sucesso."
          : "O técnico foi registado com sucesso."
      );

      await carregarTecnicos();
    } catch (erroAtual) {
      setErro(
        erroAtual instanceof Error
          ? erroAtual.message
          : "Não foi possível guardar os dados."
      );
    } finally {
      setGuardando(false);
    }
  }

  async function eliminarTecnico(tecnico: Tecnico) {
    const confirmar = window.confirm(
      `Tens a certeza de que pretendes eliminar "${tecnico.nome}"? Esta acção não pode ser anulada.`
    );

    if (!confirmar) return;

    setErro("");
    setMensagem("");

    try {
      const resposta = await fetch(
        `/api/admin/tecnicos?id=${encodeURIComponent(tecnico.id)}`,
        { method: "DELETE" }
      );

      const dados = await resposta.json();

      if (!resposta.ok || dados.sucesso !== true) {
        throw new Error(
          dados.erro || "Não foi possível eliminar o técnico."
        );
      }

      setMensagem("Técnico eliminado com sucesso.");
      await carregarTecnicos();
    } catch (erroAtual) {
      setErro(
        erroAtual instanceof Error
          ? erroAtual.message
          : "Não foi possível eliminar o técnico."
      );
    }
  }

  return (
    <section style={ESTILO.pagina}>
      <header style={ESTILO.cabecalho}>
        <div>
          <h1 style={ESTILO.titulo}>Técnicos e investigadores</h1>
          <p style={ESTILO.subtitulo}>
            Gere o directório de especialistas da plataforma AGROINOVA ANGOLA.
          </p>
        </div>

        <button
          type="button"
          style={ESTILO.botaoPrincipal}
          onClick={abrirNovo}
        >
          + Registar técnico
        </button>
      </header>

      {mensagem && <div style={ESTILO.mensagem}>{mensagem}</div>}
      {erro && <div style={ESTILO.erro}>{erro}</div>}

      <div style={ESTILO.estatisticas}>
        <div style={ESTILO.estatistica}>
          <span style={ESTILO.rotulo}>Total de técnicos</span>
          <strong style={ESTILO.numero}>{tecnicos.length}</strong>
        </div>

        <div style={ESTILO.estatistica}>
          <span style={ESTILO.rotulo}>Publicados</span>
          <strong style={ESTILO.numero}>{totalPublicados}</strong>
        </div>

        <div style={ESTILO.estatistica}>
          <span style={ESTILO.rotulo}>Rascunhos</span>
          <strong style={ESTILO.numero}>{totalRascunhos}</strong>
        </div>

        <div style={ESTILO.estatistica}>
          <span style={ESTILO.rotulo}>Em destaque</span>
          <strong style={ESTILO.numero}>{totalDestaques}</strong>
        </div>
      </div>

      <div style={ESTILO.painel}>
        <div style={ESTILO.filtros}>
          <input
            style={ESTILO.campo}
            value={pesquisa}
            onChange={(evento) => setPesquisa(evento.target.value)}
            placeholder="Pesquisar por nome, especialidade..."
            aria-label="Pesquisar técnicos"
          />

          <select
            style={ESTILO.campo}
            value={filtroEstado}
            onChange={(evento) => setFiltroEstado(evento.target.value)}
            aria-label="Filtrar por estado"
          >
            <option value="todos">Todos os estados</option>
            {ESTADOS.map((estado) => (
              <option key={estado.valor} value={estado.valor}>
                {estado.texto}
              </option>
            ))}
          </select>

          <select
            style={ESTILO.campo}
            value={filtroProvincia}
            onChange={(evento) => setFiltroProvincia(evento.target.value)}
            aria-label="Filtrar por província"
          >
            <option value="todas">Todas as províncias</option>
            {PROVINCIAS.map((provincia) => (
              <option key={provincia} value={provincia}>
                {provincia}
              </option>
            ))}
          </select>

          <button
            type="button"
            style={ESTILO.botaoSecundario}
            onClick={() => {
              setPesquisa("");
              setFiltroEstado("todos");
              setFiltroProvincia("todas");
            }}
          >
            Limpar filtros
          </button>
        </div>

        {carregando ? (
          <p>A carregar os técnicos e investigadores...</p>
        ) : filtrados.length === 0 ? (
          <div style={{ padding: "30px 10px", textAlign: "center" }}>
            <h3>Não foram encontrados técnicos</h3>
            <p style={ESTILO.subtitulo}>
              Altera os filtros ou regista um novo especialista.
            </p>
          </div>
        ) : (
          <div style={ESTILO.lista}>
            {filtrados.map((tecnico) => (
              <article key={tecnico.id} style={ESTILO.cartao}>
                {tecnico.fotografia_url ? (
                  <img
                    src={tecnico.fotografia_url}
                    alt={`Fotografia de ${tecnico.nome}`}
                    style={ESTILO.fotografia}
                    onError={(evento) => {
                      evento.currentTarget.style.visibility = "hidden";
                    }}
                  />
                ) : (
                  <div
                    style={{
                      ...ESTILO.fotografia,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#166534",
                      fontSize: 28,
                      fontWeight: 800,
                    }}
                    aria-label="Sem fotografia"
                  >
                    {tecnico.nome?.trim().charAt(0).toUpperCase() || "T"}
                  </div>
                )}

                <div style={ESTILO.conteudo}>
                  <h2 style={ESTILO.nome}>{tecnico.nome}</h2>

                  {tecnico.titulo_profissional && (
                    <p style={ESTILO.detalhe}>
                      {tecnico.titulo_profissional}
                    </p>
                  )}

                  <p style={ESTILO.detalhe}>
                    <strong>Especialidade:</strong>{" "}
                    {tecnico.especialidade || "Não indicada"}
                  </p>

                  <p style={ESTILO.detalhe}>
                    <strong>Formação:</strong>{" "}
                    {tecnico.formacao_academica || "Não indicada"}
                  </p>

                  <p style={ESTILO.detalhe}>
                    <strong>Instituição:</strong>{" "}
                    {tecnico.instituicao || "Não indicada"}
                  </p>

                  <p style={ESTILO.detalhe}>
                    <strong>Província:</strong>{" "}
                    {tecnico.provincia || "Não indicada"}
                  </p>

                  <p style={ESTILO.detalhe}>
                    <strong>E-mail:</strong>{" "}
                    {tecnico.email || "Não indicado"}
                  </p>

                  {tecnico.telefone && (
                    <p style={ESTILO.detalhe}>
                      <strong>Telefone:</strong> {tecnico.telefone}
                    </p>
                  )}

                  {tecnico.website && (
                    <p style={ESTILO.detalhe}>
                      <strong>Website:</strong>{" "}
                      <a
                        href={tecnico.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Abrir website
                      </a>
                    </p>
                  )}

                  {tecnico.livro_titulo && (
                    <p style={ESTILO.detalhe}>
                      <strong>Publicação:</strong> {tecnico.livro_titulo}
                    </p>
                  )}

                  {tecnico.livro_pdf_url && (
                    <p style={ESTILO.detalhe}>
                      <a
                        href={tecnico.livro_pdf_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Consultar PDF da publicação
                      </a>
                    </p>
                  )}

                  <p style={ESTILO.detalhe}>
                    <strong>Estado:</strong>{" "}
                    <span style={ESTILO.estado}>
                      {estadoTexto(tecnico.estado)}
                    </span>
                    {tecnico.destaque ? " · Em destaque" : ""}
                  </p>

                  <p style={ESTILO.detalhe}>
                    <strong>Publicado em:</strong>{" "}
                    {dataTexto(tecnico.publicado_em)}
                  </p>

                  <div style={ESTILO.acoes}>
                    <button
                      type="button"
                      style={ESTILO.botaoSecundario}
                      onClick={() => abrirEdicao(tecnico)}
                    >
                      Editar
                    </button>

                    <button
                      type="button"
                      style={ESTILO.botaoSecundario}
                      onClick={() => {
                        abrirEdicao(tecnico);
                        setFormulario((anterior) => ({
                          ...anterior,
                          estado:
                            tecnico.estado === "publicado"
                              ? "rascunho"
                              : "publicado",
                        }));
                      }}
                    >
                      {tecnico.estado === "publicado"
                        ? "Retirar publicação"
                        : "Publicar"}
                    </button>

                    <button
                      type="button"
                      style={{
                        ...ESTILO.botaoSecundario,
                        borderColor: "#fecaca",
                        color: "#b91c1c",
                      }}
                      onClick={() => void eliminarTecnico(tecnico)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!carregando && (
          <p style={ESTILO.detalhe}>
            A mostrar {filtrados.length} de {tecnicos.length} registos.
          </p>
        )}

        <button
          type="button"
          style={ESTILO.botaoSecundario}
          onClick={() => void carregarTecnicos()}
          disabled={carregando}
        >
          {carregando ? "A actualizar..." : "Actualizar lista"}
        </button>
      </div>

      {modalAberto && (
        <div
          style={ESTILO.sobreposicao}
          onMouseDown={(evento) => {
            if (
              evento.target === evento.currentTarget &&
              !guardando
            ) {
              setModalAberto(false);
            }
          }}
        >
          <div
            style={ESTILO.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-tecnico"
          >
            <h2
              id="titulo-modal-tecnico"
              style={{ marginTop: 0, fontSize: 23 }}
            >
              {idEdicao ? "Editar técnico" : "Registar técnico"}
            </h2>

            <p style={ESTILO.subtitulo}>
              Preenche os dados do especialista e selecciona os ficheiros
              directamente do teu computador. O nome é obrigatório.
            </p>

            {erro && <div style={ESTILO.erro}>{erro}</div>}

            <form onSubmit={guardarTecnico}>
              <div style={ESTILO.grelhaFormulario}>
                <div style={ESTILO.campoGrupo}>
                  <label style={ESTILO.rotuloCampo} htmlFor="tec-nome">
                    Nome completo *
                  </label>
                  <input
                    id="tec-nome"
                    style={ESTILO.campo}
                    value={formulario.nome}
                    onChange={(evento) =>
                      alterarCampo("nome", evento.target.value)
                    }
                    maxLength={200}
                    required
                  />
                </div>

                <div style={ESTILO.campoGrupo}>
                  <label style={ESTILO.rotuloCampo} htmlFor="tec-titulo">
                    Título profissional
                  </label>
                  <input
                    id="tec-titulo"
                    style={ESTILO.campo}
                    value={formulario.titulo_profissional}
                    onChange={(evento) =>
                      alterarCampo("titulo_profissional", evento.target.value)
                    }
                  />
                </div>

                <div style={ESTILO.campoGrupo}>
                  <label style={ESTILO.rotuloCampo} htmlFor="tec-formacao">
                    Formação académica
                  </label>
                  <input
                    id="tec-formacao"
                    style={ESTILO.campo}
                    value={formulario.formacao_academica}
                    onChange={(evento) =>
                      alterarCampo("formacao_academica", evento.target.value)
                    }
                  />
                </div>

                <div style={ESTILO.campoGrupo}>
                  <label
                    style={ESTILO.rotuloCampo}
                    htmlFor="tec-especialidade"
                  >
                    Especialidade
                  </label>
                  <input
                    id="tec-especialidade"
                    style={ESTILO.campo}
                    value={formulario.especialidade}
                    onChange={(evento) =>
                      alterarCampo("especialidade", evento.target.value)
                    }
                  />
                </div>

                <div style={ESTILO.campoGrupo}>
                  <label
                    style={ESTILO.rotuloCampo}
                    htmlFor="tec-instituicao"
                  >
                    Instituição
                  </label>
                  <input
                    id="tec-instituicao"
                    style={ESTILO.campo}
                    value={formulario.instituicao}
                    onChange={(evento) =>
                      alterarCampo("instituicao", evento.target.value)
                    }
                  />
                </div>

                <div style={ESTILO.campoGrupo}>
                  <label
                    style={ESTILO.rotuloCampo}
                    htmlFor="tec-provincia"
                  >
                    Província
                  </label>
                  <select
                    id="tec-provincia"
                    style={ESTILO.campo}
                    value={formulario.provincia}
                    onChange={(evento) =>
                      alterarCampo("provincia", evento.target.value)
                    }
                  >
                    <option value="">Seleccionar província</option>
                    {PROVINCIAS.map((provincia) => (
                      <option key={provincia} value={provincia}>
                        {provincia}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={ESTILO.campoGrupo}>
                  <label style={ESTILO.rotuloCampo} htmlFor="tec-telefone">
                    Telefone
                  </label>
                  <input
                    id="tec-telefone"
                    style={ESTILO.campo}
                    type="tel"
                    value={formulario.telefone}
                    onChange={(evento) =>
                      alterarCampo("telefone", evento.target.value)
                    }
                  />
                </div>

                <div style={ESTILO.campoGrupo}>
                  <label style={ESTILO.rotuloCampo} htmlFor="tec-email">
                    E-mail
                  </label>
                  <input
                    id="tec-email"
                    style={ESTILO.campo}
                    type="email"
                    value={formulario.email}
                    onChange={(evento) =>
                      alterarCampo("email", evento.target.value)
                    }
                  />
                </div>

                <div style={ESTILO.campoGrupo}>
                  <label style={ESTILO.rotuloCampo} htmlFor="tec-website">
                    Website institucional ou profissional
                  </label>
                  <input
                    id="tec-website"
                    style={ESTILO.campo}
                    type="url"
                    placeholder="https://..."
                    value={formulario.website}
                    onChange={(evento) =>
                      alterarCampo("website", evento.target.value)
                    }
                  />
                </div>

                <h3 style={ESTILO.separador}>Fotografia do técnico</h3>

                <div
                  style={{
                    ...ESTILO.campoGrupo,
                    ...ESTILO.campoLargo,
                  }}
                >
                  <div style={ESTILO.areaFicheiro}>
                    <label
                      style={ESTILO.rotuloCampo}
                      htmlFor="tec-fotografia"
                    >
                      Seleccionar fotografia (JPG, PNG ou WEBP)
                    </label>
                    <input
                      id="tec-fotografia"
                      style={ESTILO.campo}
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={(evento) =>
                        alterarCampo(
                          "fotografia",
                          evento.target.files?.[0] ?? null
                        )
                      }
                    />
                    <p style={ESTILO.detalhe}>
                      Tamanho máximo: 5 MB. Se estiveres a editar e não
                      escolheres outra fotografia, a actual será mantida.
                    </p>

                    {(fotografiaPreview || ficheirosExistentes.fotografia) && (
                      <img
                        src={
                          fotografiaPreview ||
                          ficheirosExistentes.fotografia
                        }
                        alt="Pré-visualização da fotografia seleccionada"
                        style={ESTILO.preVisualizacao}
                      />
                    )}

                    {formulario.fotografia && (
                      <p style={ESTILO.detalhe}>
                        Ficheiro seleccionado: {formulario.fotografia.name} (
                        {tamanhoFicheiro(formulario.fotografia.size)})
                      </p>
                    )}
                  </div>
                </div>

                <h3 style={ESTILO.separador}>
                  Publicação ou livro do técnico
                </h3>

                <div style={ESTILO.campoGrupo}>
                  <label
                    style={ESTILO.rotuloCampo}
                    htmlFor="tec-livro-titulo"
                  >
                    Título do livro ou publicação
                  </label>
                  <input
                    id="tec-livro-titulo"
                    style={ESTILO.campo}
                    value={formulario.livro_titulo}
                    onChange={(evento) =>
                      alterarCampo("livro_titulo", evento.target.value)
                    }
                    maxLength={300}
                    placeholder="Título da publicação"
                  />
                </div>

                <div
                  style={{
                    ...ESTILO.campoGrupo,
                    ...ESTILO.campoLargo,
                  }}
                >
                  <label
                    style={ESTILO.rotuloCampo}
                    htmlFor="tec-livro-descricao"
                  >
                    Descrição da publicação
                  </label>
                  <textarea
                    id="tec-livro-descricao"
                    style={{
                      ...ESTILO.campo,
                      minHeight: 90,
                      resize: "vertical",
                    }}
                    value={formulario.livro_descricao}
                    onChange={(evento) =>
                      alterarCampo("livro_descricao", evento.target.value)
                    }
                    maxLength={5000}
                    placeholder="Resumo, ano, editora ou outras informações relevantes..."
                  />
                </div>

                <div style={ESTILO.campoGrupo}>
                  <div style={ESTILO.areaFicheiro}>
                    <label
                      style={ESTILO.rotuloCampo}
                      htmlFor="tec-livro-capa"
                    >
                      Capa do livro (JPG, PNG ou WEBP)
                    </label>
                    <input
                      id="tec-livro-capa"
                      style={ESTILO.campo}
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={(evento) =>
                        alterarCampo(
                          "livro_capa",
                          evento.target.files?.[0] ?? null
                        )
                      }
                    />
                    <p style={ESTILO.detalhe}>
                      Tamanho máximo: 5 MB.
                    </p>

                    {(capaPreview || ficheirosExistentes.livro_capa) && (
                      <img
                        src={capaPreview || ficheirosExistentes.livro_capa}
                        alt="Pré-visualização da capa do livro"
                        style={ESTILO.preVisualizacao}
                      />
                    )}

                    {formulario.livro_capa && (
                      <p style={ESTILO.detalhe}>
                        {formulario.livro_capa.name} (
                        {tamanhoFicheiro(formulario.livro_capa.size)})
                      </p>
                    )}
                  </div>
                </div>

                <div style={ESTILO.campoGrupo}>
                  <div style={ESTILO.areaFicheiro}>
                    <label
                      style={ESTILO.rotuloCampo}
                      htmlFor="tec-livro-pdf"
                    >
                      Documento do livro (PDF)
                    </label>
                    <input
                      id="tec-livro-pdf"
                      style={ESTILO.campo}
                      type="file"
                      accept="application/pdf,.pdf"
                      onChange={(evento) =>
                        alterarCampo(
                          "livro_pdf",
                          evento.target.files?.[0] ?? null
                        )
                      }
                    />
                    <p style={ESTILO.detalhe}>
                      Tamanho máximo: 25 MB.
                    </p>

                    {formulario.livro_pdf && (
                      <p style={ESTILO.detalhe}>
                        PDF seleccionado: {formulario.livro_pdf.name} (
                        {tamanhoFicheiro(formulario.livro_pdf.size)})
                      </p>
                    )}

                    {!formulario.livro_pdf &&
                      ficheirosExistentes.livro_pdf && (
                        <p style={ESTILO.detalhe}>
                          Já existe um PDF associado. Se não seleccionares
                          outro, o documento actual será mantido.
                        </p>
                      )}

                    {ficheirosExistentes.livro_pdf && (
                      <p style={ESTILO.detalhe}>
                        <a
                          href={ficheirosExistentes.livro_pdf}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Abrir PDF actual
                        </a>
                      </p>
                    )}
                  </div>
                </div>

                <h3 style={ESTILO.separador}>Publicação do perfil</h3>

                <div style={ESTILO.campoGrupo}>
                  <label style={ESTILO.rotuloCampo} htmlFor="tec-estado">
                    Estado de publicação
                  </label>
                  <select
                    id="tec-estado"
                    style={ESTILO.campo}
                    value={formulario.estado}
                    onChange={(evento) =>
                      alterarCampo(
                        "estado",
                        evento.target.value as EstadoTecnico
                      )
                    }
                  >
                    {ESTADOS.map((estado) => (
                      <option key={estado.valor} value={estado.valor}>
                        {estado.texto}
                      </option>
                    ))}
                  </select>
                </div>

                <div
                  style={{
                    ...ESTILO.campoGrupo,
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    paddingTop: 24,
                  }}
                >
                  <input
                    id="tec-destaque"
                    type="checkbox"
                    checked={formulario.destaque}
                    onChange={(evento) =>
                      alterarCampo("destaque", evento.target.checked)
                    }
                  />
                  <label htmlFor="tec-destaque" style={ESTILO.rotuloCampo}>
                    Colocar em destaque
                  </label>
                </div>

                <div
                  style={{
                    ...ESTILO.campoGrupo,
                    ...ESTILO.campoLargo,
                  }}
                >
                  <label
                    style={ESTILO.rotuloCampo}
                    htmlFor="tec-biografia"
                  >
                    Biografia
                  </label>
                  <textarea
                    id="tec-biografia"
                    style={{
                      ...ESTILO.campo,
                      minHeight: 130,
                      resize: "vertical",
                    }}
                    value={formulario.biografia}
                    onChange={(evento) =>
                      alterarCampo("biografia", evento.target.value)
                    }
                    maxLength={10000}
                    placeholder="Percurso profissional, investigação e contributos..."
                  />
                </div>
              </div>

              <div style={ESTILO.rodapeModal}>
                <button
                  type="button"
                  style={ESTILO.botaoSecundario}
                  onClick={() => setModalAberto(false)}
                  disabled={guardando}
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  style={{
                    ...ESTILO.botaoPrincipal,
                    opacity: guardando ? 0.65 : 1,
                  }}
                  disabled={guardando}
                >
                  {guardando
                    ? "A guardar ficheiros..."
                    : idEdicao
                      ? "Guardar alterações"
                      : "Registar técnico"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
