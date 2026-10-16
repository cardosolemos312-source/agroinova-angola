
"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";

import GestaoTecnicos from "@/components/admin/GestaoTecnicos";

type EstadoNoticia = "rascunho" | "publicada" | "arquivada";
type SecaoAdmin = "visao-geral" | "noticias" | "tecnicos";

type Noticia = {
  id: string;
  titulo: string;
  resumo: string | null;
  conteudo: string | null;
  categoria: string;
  imagem_url: string | null;
  pdf_url?: string | null;
  autor: string | null;
  estado: EstadoNoticia;
  destaque: boolean;
  criada_em?: string | null;
  criado_em?: string | null;
  publicada_em?: string | null;
  actualizada_em?: string | null;
};

type FormularioNoticia = {
  titulo: string;
  resumo: string;
  conteudo: string;
  categoria: string;
  imagem_url: string;
  pdf_url: string;
  autor: string;
  estado: EstadoNoticia;
  destaque: boolean;
};

type RespostaAPI = {
  sucesso?: boolean;
  erro?: string;
  noticias?: Noticia[];
  noticia?: Noticia;
  id?: string;
};

const CATEGORIAS = [
  "Agricultura",
  "Pecuária",
  "Florestas",
  "Pescas",
  "Solos",
  "Clima",
  "Investigação",
  "Tecnologia e inovação",
  "Institucional",
];

const FORMULARIO_VAZIO: FormularioNoticia = {
  titulo: "",
  resumo: "",
  conteudo: "",
  categoria: "Agricultura",
  imagem_url: "",
  pdf_url: "",
  autor: "Redacção AGROINOVA",
  estado: "rascunho",
  destaque: false,
};

const MAX_IMAGEM = 8 * 1024 * 1024;
const MAX_PDF = 20 * 1024 * 1024;

const cores = {
  verde: "#166534",
  verdeEscuro: "#14532d",
  verdeClaro: "#f0fdf4",
  fundo: "#f5f7f6",
  texto: "#17221b",
  secundario: "#64748b",
  borda: "#e2e8f0",
  branco: "#ffffff",
  vermelho: "#b91c1c",
};

const estilos: Record<string, CSSProperties> = {
  pagina: {
    minHeight: "100vh",
    background: cores.fundo,
    color: cores.texto,
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  layout: {
    display: "flex",
    minHeight: "100vh",
  },
  lateral: {
    width: 252,
    minWidth: 252,
    background: "#123d27",
    color: "#fff",
    padding: "25px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 26,
    boxSizing: "border-box",
  },
  marca: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "0 8px 22px",
    borderBottom: "1px solid rgba(255,255,255,.14)",
  },
  marcaIcone: {
    width: 44,
    height: 44,
    display: "grid",
    placeItems: "center",
    borderRadius: 14,
    background: "#d9f99d",
    color: "#14532d",
    fontSize: 23,
    fontWeight: 900,
  },
  marcaTitulo: {
    margin: 0,
    fontSize: 17,
    fontWeight: 800,
    letterSpacing: ".4px",
  },
  marcaSubtitulo: {
    margin: "5px 0 0",
    color: "#cbd5d0",
    fontSize: 11,
  },
  grupoMenu: {
    display: "grid",
    gap: 7,
  },
  legendaMenu: {
    margin: "0 10px 7px",
    color: "#a8c4b3",
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  },
  menuBotao: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    width: "100%",
    padding: "12px 13px",
    border: 0,
    borderRadius: 10,
    background: "transparent",
    color: "#e5eee8",
    textAlign: "left",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
  },
  menuAtivo: {
    background: "#23653e",
    color: "#ffffff",
    boxShadow: "inset 3px 0 #a3e635",
  },
  lateralRodape: {
    marginTop: "auto",
    borderTop: "1px solid rgba(255,255,255,.14)",
    padding: "18px 8px 0",
    color: "#cbd5d0",
    fontSize: 11,
    lineHeight: 1.7,
  },
  principal: {
    flex: 1,
    minWidth: 0,
    padding: "28px 32px 42px",
    boxSizing: "border-box",
  },
  topo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 28,
  },
  sobreTitulo: {
    margin: "0 0 7px",
    fontSize: 26,
    fontWeight: 800,
    letterSpacing: "-.7px",
  },
  subtitulo: {
    margin: 0,
    color: cores.secundario,
    fontSize: 13,
    lineHeight: 1.6,
  },
  botao: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "11px 16px",
    border: "1px solid transparent",
    borderRadius: 10,
    background: cores.verde,
    color: "#fff",
    fontWeight: 700,
    fontSize: 12,
    cursor: "pointer",
    textDecoration: "none",
  },
  botaoSecundario: {
    background: "#fff",
    color: cores.texto,
    borderColor: cores.borda,
  },
  cartao: {
    background: "#fff",
    border: `1px solid ${cores.borda}`,
    borderRadius: 16,
    boxShadow: "0 5px 18px rgba(15, 23, 42, .035)",
  },
  grelhaIndicadores: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 15,
    marginBottom: 25,
  },
  indicador: {
    padding: 20,
    minWidth: 0,
  },
  indicadorTopo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  indicadorIcone: {
    width: 39,
    height: 39,
    display: "grid",
    placeItems: "center",
    borderRadius: 12,
    background: cores.verdeClaro,
    color: cores.verde,
    fontSize: 19,
  },
  indicadorNumero: {
    margin: "17px 0 5px",
    fontSize: 30,
    fontWeight: 800,
    letterSpacing: "-1px",
  },
  indicadorLegenda: {
    margin: 0,
    color: cores.secundario,
    fontSize: 12,
  },
  painel: {
    padding: 22,
    marginBottom: 22,
  },
  painelCabecalho: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
    marginBottom: 18,
  },
  painelTitulo: {
    margin: "0 0 5px",
    fontSize: 17,
    fontWeight: 800,
  },
  painelDescricao: {
    margin: 0,
    color: cores.secundario,
    fontSize: 12,
  },
  filtros: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 17,
  },
  campoPesquisa: {
    flex: "1 1 220px",
    minWidth: 0,
    width: "100%",
    padding: "11px 13px",
    border: `1px solid ${cores.borda}`,
    borderRadius: 10,
    background: "#fff",
    color: cores.texto,
    fontSize: 12,
    outlineColor: "#86efac",
    boxSizing: "border-box",
  },
  select: {
    padding: "11px 13px",
    border: `1px solid ${cores.borda}`,
    borderRadius: 10,
    background: "#fff",
    color: cores.texto,
    fontSize: 12,
    outlineColor: "#86efac",
    maxWidth: "100%",
  },
  tabelaWrapper: {
    width: "100%",
    overflowX: "auto",
  },
  tabela: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
    fontSize: 12,
  },
  th: {
    padding: "13px 12px",
    background: "#f8faf9",
    color: cores.secundario,
    fontSize: 10,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: ".7px",
    borderBottom: `1px solid ${cores.borda}`,
    whiteSpace: "nowrap",
  },
  td: {
    padding: "14px 12px",
    borderBottom: "1px solid #edf1ed",
    verticalAlign: "middle",
  },
  miniatura: {
    width: 55,
    height: 48,
    borderRadius: 9,
    objectFit: "cover",
    background: "#e8f5e9",
    display: "block",
    flexShrink: 0,
  },
  etiqueta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "6px 9px",
    borderRadius: 30,
    fontSize: 10,
    fontWeight: 800,
    whiteSpace: "nowrap",
  },
  accoes: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
  },
  botaoPequeno: {
    padding: "7px 9px",
    borderRadius: 7,
    border: `1px solid ${cores.borda}`,
    background: "#fff",
    color: cores.texto,
    fontSize: 10,
    fontWeight: 700,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  modalFundo: {
    position: "fixed",
    inset: 0,
    zIndex: 100,
    background: "rgba(15, 23, 42, .62)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  modal: {
    width: "100%",
    maxWidth: 760,
    maxHeight: "92vh",
    overflowY: "auto",
    background: "#fff",
    borderRadius: 18,
    boxShadow: "0 25px 80px rgba(0,0,0,.25)",
  },
  modalTopo: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    background: "#fff",
    borderBottom: `1px solid ${cores.borda}`,
    padding: "20px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  modalCorpo: {
    padding: 24,
  },
  grelhaFormulario: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 17,
  },
  campoGrupo: {
    display: "grid",
    gap: 7,
    minWidth: 0,
  },
  label: {
    fontSize: 12,
    fontWeight: 700,
    color: "#334155",
  },
  input: {
    width: "100%",
    padding: "11px 12px",
    border: `1px solid ${cores.borda}`,
    borderRadius: 9,
    fontSize: 13,
    color: cores.texto,
    background: "#fff",
    boxSizing: "border-box",
    outlineColor: "#86efac",
  },
  textarea: {
    width: "100%",
    minHeight: 110,
    resize: "vertical",
    padding: "11px 12px",
    border: `1px solid ${cores.borda}`,
    borderRadius: 9,
    fontSize: 13,
    lineHeight: 1.6,
    color: cores.texto,
    background: "#fff",
    boxSizing: "border-box",
    outlineColor: "#86efac",
    fontFamily: "inherit",
  },
  modalRodape: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
    borderTop: `1px solid ${cores.borda}`,
    padding: "17px 24px",
    background: "#f8faf9",
    borderRadius: "0 0 18px 18px",
  },
  mensagem: {
    padding: "12px 15px",
    borderRadius: 10,
    marginBottom: 18,
    fontSize: 12,
    lineHeight: 1.5,
  },
  estadoVazio: {
    textAlign: "center",
    padding: "45px 15px",
    color: cores.secundario,
    fontSize: 13,
  },
};

function dataFormatada(valor?: string | null) {
  if (!valor) return "—";

  const data = new Date(valor);

  if (Number.isNaN(data.getTime())) return "—";

  return new Intl.DateTimeFormat("pt-PT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(data);
}

function nomeEstado(estado: EstadoNoticia) {
  if (estado === "publicada") return "Publicada";
  if (estado === "arquivada") return "Arquivada";
  return "Rascunho";
}

function estiloEstado(estado: EstadoNoticia): CSSProperties {
  if (estado === "publicada") {
    return { background: "#dcfce7", color: "#166534" };
  }

  if (estado === "arquivada") {
    return { background: "#f1f5f9", color: "#475569" };
  }

  return { background: "#fef3c7", color: "#92400e" };
}

function tamanhoFicheiro(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(0)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default function AdminPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [aGuardar, setAGuardar] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [pesquisa, setPesquisa] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("todas");
  const [filtroCategoria, setFiltroCategoria] = useState("todas");
  const [secao, setSecao] = useState<SecaoAdmin>("visao-geral");

  const [modalAberto, setModalAberto] = useState(false);
  const [noticiaEmEdicao, setNoticiaEmEdicao] =
    useState<Noticia | null>(null);
  const [formulario, setFormulario] =
    useState<FormularioNoticia>(FORMULARIO_VAZIO);

  const [imagemSelecionada, setImagemSelecionada] =
    useState<File | null>(null);
  const [pdfSelecionado, setPdfSelecionado] =
    useState<File | null>(null);
  const [previewImagem, setPreviewImagem] = useState("");
  const [previewImagemTemporaria, setPreviewImagemTemporaria] =
    useState("");

  useEffect(() => {
    return () => {
      if (previewImagemTemporaria) {
        URL.revokeObjectURL(previewImagemTemporaria);
      }
    };
  }, [previewImagemTemporaria]);

  const carregarNoticias = useCallback(async () => {
    setCarregando(true);
    setErro("");

    try {
      const resposta = await fetch("/api/admin/noticias", {
        method: "GET",
        cache: "no-store",
        credentials: "same-origin",
      });

      const dados = (await resposta.json()) as RespostaAPI;

      if (!resposta.ok || !dados.sucesso) {
        throw new Error(
          dados.erro || "Não foi possível carregar as notícias."
        );
      }

      setNoticias(Array.isArray(dados.noticias) ? dados.noticias : []);
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao carregar as notícias."
      );
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    void carregarNoticias();
  }, [carregarNoticias]);

  const estatisticas = useMemo(() => {
    const publicadas = noticias.filter(
      (item) => item.estado === "publicada"
    ).length;

    const rascunhos = noticias.filter(
      (item) => item.estado === "rascunho"
    ).length;

    const destaques = noticias.filter((item) => item.destaque).length;

    return {
      total: noticias.length,
      publicadas,
      rascunhos,
      destaques,
    };
  }, [noticias]);

  const noticiasFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt-PT");

    return noticias.filter((noticia) => {
      const correspondePesquisa =
        !termo ||
        [
          noticia.titulo,
          noticia.resumo,
          noticia.categoria,
          noticia.autor,
        ].some((valor) =>
          (valor || "").toLocaleLowerCase("pt-PT").includes(termo)
        );

      return (
        correspondePesquisa &&
        (filtroEstado === "todas" ||
          noticia.estado === filtroEstado) &&
        (filtroCategoria === "todas" ||
          noticia.categoria === filtroCategoria)
      );
    });
  }, [noticias, pesquisa, filtroEstado, filtroCategoria]);

  function limparFicheirosSelecionados() {
    setImagemSelecionada(null);
    setPdfSelecionado(null);
    setPreviewImagem("");
    setPreviewImagemTemporaria("");
  }

  function abrirNovaNoticia() {
    setNoticiaEmEdicao(null);
    setFormulario({ ...FORMULARIO_VAZIO });
    limparFicheirosSelecionados();
    setErro("");
    setSucesso("");
    setModalAberto(true);
  }

  function abrirEdicao(noticia: Noticia) {
    setNoticiaEmEdicao(noticia);

    setFormulario({
      titulo: noticia.titulo || "",
      resumo: noticia.resumo || "",
      conteudo: noticia.conteudo || "",
      categoria: noticia.categoria || "Agricultura",
      imagem_url: noticia.imagem_url || "",
      pdf_url: noticia.pdf_url || "",
      autor: noticia.autor || "Redacção AGROINOVA",
      estado: noticia.estado || "rascunho",
      destaque: Boolean(noticia.destaque),
    });

    limparFicheirosSelecionados();
    setPreviewImagem(noticia.imagem_url || "");
    setErro("");
    setSucesso("");
    setModalAberto(true);
  }

  function fecharModal() {
    if (aGuardar) return;

    setModalAberto(false);
    setNoticiaEmEdicao(null);
    limparFicheirosSelecionados();
  }

  function alterarCampo<K extends keyof FormularioNoticia>(
    campo: K,
    valor: FormularioNoticia[K]
  ) {
    setFormulario((anterior) => ({
      ...anterior,
      [campo]: valor,
    }));
  }

  function selecionarImagem(file: File | null) {
    setErro("");

    if (!file) {
      setImagemSelecionada(null);
      setPreviewImagemTemporaria("");
      setPreviewImagem(
        noticiaEmEdicao?.imagem_url || formulario.imagem_url || ""
      );
      return;
    }

    const tiposPermitidos = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ];

    if (!tiposPermitidos.includes(file.type)) {
      setErro("Escolha uma imagem JPG, PNG, WEBP ou GIF.");
      return;
    }

    if (file.size > MAX_IMAGEM) {
      setErro("A imagem não pode ultrapassar 8 MB.");
      return;
    }

    const urlTemporario = URL.createObjectURL(file);

    setImagemSelecionada(file);
    setPreviewImagemTemporaria(urlTemporario);
    setPreviewImagem(urlTemporario);
  }

  function selecionarPdf(file: File | null) {
    setErro("");

    if (!file) {
      setPdfSelecionado(null);
      return;
    }

    const terminaEmPdf = file.name.toLowerCase().endsWith(".pdf");

    if (file.type !== "application/pdf" && !terminaEmPdf) {
      setErro("Escolha um documento PDF.");
      return;
    }

    if (file.size > MAX_PDF) {
      setErro("O documento PDF não pode ultrapassar 20 MB.");
      return;
    }

    setPdfSelecionado(file);
  }

  async function guardarNoticia(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setErro("");
    setSucesso("");

    const submitter = (evento.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement | null;

    const estadoEscolhido = submitter?.value;

    const estadoFinal: EstadoNoticia =
      estadoEscolhido === "publicada"
        ? "publicada"
        : estadoEscolhido === "arquivada"
          ? "arquivada"
          : estadoEscolhido === "rascunho"
            ? "rascunho"
            : formulario.estado;

    const titulo = formulario.titulo.trim();
    const resumo = formulario.resumo.trim();
    const conteudo = formulario.conteudo.trim();

    if (!titulo) {
      setErro("Introduza o título da notícia.");
      return;
    }

    if (titulo.length > 200) {
      setErro("O título não pode exceder 200 caracteres.");
      return;
    }

    if (resumo.length > 1000) {
      setErro("O resumo não pode exceder 1.000 caracteres.");
      return;
    }

    if (conteudo.length > 100000) {
      setErro("O conteúdo excede o limite permitido.");
      return;
    }

    if (imagemSelecionada && imagemSelecionada.size > MAX_IMAGEM) {
      setErro("A imagem não pode ultrapassar 8 MB.");
      return;
    }

    if (pdfSelecionado && pdfSelecionado.size > MAX_PDF) {
      setErro("O PDF não pode ultrapassar 20 MB.");
      return;
    }

    const corpo = new FormData();

    corpo.set("titulo", titulo);
    corpo.set("resumo", resumo);
    corpo.set("conteudo", conteudo);
    corpo.set("categoria", formulario.categoria);
    corpo.set("autor", formulario.autor.trim() || "Redacção AGROINOVA");
    corpo.set("estado", estadoFinal);
    corpo.set("destaque", String(formulario.destaque));

    // Mantém os endereços existentes quando não há novos ficheiros.
    corpo.set("imagem_url", formulario.imagem_url);
    corpo.set("pdf_url", formulario.pdf_url);

    if (noticiaEmEdicao) {
      corpo.set("id", noticiaEmEdicao.id);
    }

    if (imagemSelecionada) {
      corpo.set("imagem", imagemSelecionada, imagemSelecionada.name);
    }

    if (pdfSelecionado) {
      corpo.set("pdf", pdfSelecionado, pdfSelecionado.name);
    }

    setAGuardar(true);

    try {
      const resposta = await fetch("/api/admin/noticias", {
        method: noticiaEmEdicao ? "PATCH" : "POST",
        credentials: "same-origin",
        // Não definir Content-Type manualmente:
        // o navegador adiciona o boundary do multipart/form-data.
        body: corpo,
      });

      const dados = (await resposta.json()) as RespostaAPI;

      if (!resposta.ok || !dados.sucesso || !dados.noticia) {
        throw new Error(
          dados.erro || "Não foi possível guardar a notícia."
        );
      }

      if (noticiaEmEdicao) {
        setNoticias((anteriores) =>
          anteriores.map((item) =>
            item.id === dados.noticia!.id ? dados.noticia! : item
          )
        );
      } else {
        setNoticias((anteriores) => [dados.noticia!, ...anteriores]);
      }

      setModalAberto(false);
      setNoticiaEmEdicao(null);
      setFormulario({ ...FORMULARIO_VAZIO });
      limparFicheirosSelecionados();

      setSucesso(
        noticiaEmEdicao
          ? "Notícia actualizada com sucesso."
          : estadoFinal === "publicada"
            ? "Notícia criada e publicada com sucesso."
            : "Notícia guardada com sucesso."
      );

      setSecao("noticias");
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao guardar a notícia."
      );
    } finally {
      setAGuardar(false);
    }
  }

  async function eliminarNoticia(noticia: Noticia) {
    const confirmar = window.confirm(
      `Tem a certeza de que pretende eliminar a notícia "${noticia.titulo}"? Esta operação não pode ser anulada.`
    );

    if (!confirmar) return;

    setErro("");
    setSucesso("");

    try {
      const resposta = await fetch(
        `/api/admin/noticias?id=${encodeURIComponent(noticia.id)}`,
        {
          method: "DELETE",
          credentials: "same-origin",
        }
      );

      const dados = (await resposta.json()) as RespostaAPI;

      if (!resposta.ok || !dados.sucesso) {
        throw new Error(
          dados.erro || "Não foi possível eliminar a notícia."
        );
      }

      setNoticias((anteriores) =>
        anteriores.filter((item) => item.id !== noticia.id)
      );

      setSucesso("Notícia eliminada com sucesso.");
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao eliminar a notícia."
      );
    }
  }

  async function alterarEstado(
    noticia: Noticia,
    novoEstado: EstadoNoticia
  ) {
    setErro("");
    setSucesso("");

    try {
      const resposta = await fetch("/api/admin/noticias", {
        method: "PATCH",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: noticia.id,
          titulo: noticia.titulo,
          resumo: noticia.resumo || "",
          conteudo: noticia.conteudo || "",
          categoria: noticia.categoria,
          imagem_url: noticia.imagem_url || "",
          pdf_url: noticia.pdf_url || "",
          autor: noticia.autor || "Redacção AGROINOVA",
          estado: novoEstado,
          destaque: noticia.destaque,
        }),
      });

      const dados = (await resposta.json()) as RespostaAPI;

      if (!resposta.ok || !dados.sucesso || !dados.noticia) {
        throw new Error(
          dados.erro || "Não foi possível alterar o estado da notícia."
        );
      }

      setNoticias((anteriores) =>
        anteriores.map((item) =>
          item.id === noticia.id ? dados.noticia! : item
        )
      );

      setSucesso(
        novoEstado === "publicada"
          ? "Notícia publicada com sucesso."
          : novoEstado === "arquivada"
            ? "Notícia arquivada com sucesso."
            : "Notícia movida para rascunhos."
      );
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao alterar o estado."
      );
    }
  }

  function navegar(secaoDestino: SecaoAdmin) {
    setSecao(secaoDestino);
    setErro("");
    setSucesso("");
  }

  return (
    <main style={estilos.pagina}>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        button,
        input,
        select,
        textarea {
          font-family: inherit;
        }

        button:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible,
        a:focus-visible {
          outline: 3px solid #86efac;
          outline-offset: 2px;
        }

        button:disabled {
          cursor: not-allowed !important;
          opacity: 0.6;
        }

        .agro-admin-linha:hover {
          background: #fbfefc;
        }

        .agro-admin-menu:hover {
          filter: brightness(1.08);
        }

        .agro-admin-ficheiro {
          display: block;
          width: 100%;
          padding: 14px;
          border: 1px dashed #86b99a;
          border-radius: 10px;
          background: #f8fcf9;
          color: #334155;
          font-size: 12px;
          cursor: pointer;
        }

        .agro-admin-ficheiro::file-selector-button {
          margin-right: 12px;
          padding: 9px 12px;
          border: 0;
          border-radius: 7px;
          background: #166534;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
        }

        @media (max-width: 1050px) {
          .agro-admin-layout {
            flex-direction: column !important;
          }

          .agro-admin-sidebar {
            width: 100% !important;
            min-width: 0 !important;
            padding: 16px !important;
            gap: 16px !important;
          }

          .agro-admin-sidebar .agro-admin-menu-list {
            display: flex;
            flex-wrap: wrap;
          }

          .agro-admin-sidebar .agro-admin-menu {
            width: auto !important;
          }

          .agro-admin-sidebar .agro-admin-rodape {
            display: none;
          }

          .agro-admin-principal {
            padding: 22px 18px 35px !important;
          }
        }

        @media (max-width: 760px) {
          .agro-admin-indicadores {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .agro-admin-grelha-form {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          .agro-admin-modal-topo,
          .agro-admin-modal-corpo,
          .agro-admin-modal-rodape {
            padding-left: 17px !important;
            padding-right: 17px !important;
          }

          .agro-admin-titulo {
            font-size: 22px !important;
          }
        }

        @media (max-width: 420px) {
          .agro-admin-indicadores {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          .agro-admin-principal {
            padding: 16px 12px 28px !important;
          }
        }
      `}</style>

      <div className="agro-admin-layout" style={estilos.layout}>
        <aside className="agro-admin-sidebar" style={estilos.lateral}>
          <div style={estilos.marca}>
            <div style={estilos.marcaIcone}>A</div>
            <div>
              <p style={estilos.marcaTitulo}>AGROINOVA</p>
              <p style={estilos.marcaSubtitulo}>
                ANGOLA · ADMINISTRAÇÃO
              </p>
            </div>
          </div>

          <div>
            <p style={estilos.legendaMenu}>Painel de controlo</p>

            <nav
              className="agro-admin-menu-list"
              style={estilos.grupoMenu}
            >
              <button
                type="button"
                className="agro-admin-menu"
                style={{
                  ...estilos.menuBotao,
                  ...(secao === "visao-geral" ? estilos.menuAtivo : {}),
                }}
                onClick={() => navegar("visao-geral")}
              >
                <span>▦</span> Visão geral
              </button>

              <button
                type="button"
                className="agro-admin-menu"
                style={{
                  ...estilos.menuBotao,
                  ...(secao === "noticias" ? estilos.menuAtivo : {}),
                }}
                onClick={() => navegar("noticias")}
              >
                <span>▤</span> Notícias
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 10,
                    color: "#d9f99d",
                  }}
                >
                  {estatisticas.total}
                </span>
              </button>

              <button
                type="button"
                className="agro-admin-menu"
                style={{
                  ...estilos.menuBotao,
                  ...(secao === "tecnicos" ? estilos.menuAtivo : {}),
                }}
                onClick={() => navegar("tecnicos")}
              >
                <span>♙</span> Técnicos e investigadores
              </button>

              <a
                href="/admin/submissoes"
                className="agro-admin-menu"
                style={estilos.menuBotao}
              >
                <span>▧</span> Submissões
                <span style={{ marginLeft: "auto", fontSize: 10 }}>
                  ↗
                </span>
              </a>
            </nav>
          </div>

          <div>
            <p style={estilos.legendaMenu}>Acesso rápido</p>
            <div style={estilos.grupoMenu}>
              <a
                href="/noticias"
                target="_blank"
                rel="noreferrer"
                className="agro-admin-menu"
                style={estilos.menuBotao}
              >
                <span>↗</span> Ver notícias públicas
              </a>
            </div>
          </div>

          <div
            className="agro-admin-rodape"
            style={estilos.lateralRodape}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#86efac",
                }}
              />
              <strong style={{ color: "#fff" }}>
                Área administrativa
              </strong>
            </div>
            Gestão de conteúdos da plataforma nacional de conhecimento e
            inovação agropecuária.
          </div>
        </aside>

        <section
          className="agro-admin-principal"
          style={estilos.principal}
        >
          <header style={estilos.topo}>
            <div>
              <p
                style={{
                  margin: "0 0 8px",
                  color: cores.verde,
                  fontSize: 10,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                }}
              >
                AGROINOVA ANGOLA / ADMINISTRAÇÃO
              </p>

              <h1
                className="agro-admin-titulo"
                style={estilos.sobreTitulo}
              >
                {secao === "visao-geral"
                  ? "Visão geral da plataforma"
                  : secao === "noticias"
                    ? "Gestão de notícias"
                    : "Técnicos e investigadores"}
              </h1>

              <p style={estilos.subtitulo}>
                {secao === "visao-geral"
                  ? "Acompanhe os conteúdos registados na plataforma."
                  : secao === "noticias"
                    ? "Crie, edite, publique e organize as notícias."
                    : "Gira o directório de especialistas da AGROINOVA ANGOLA."}
              </p>
            </div>

            {secao !== "tecnicos" && (
              <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
                <button
                  type="button"
                  style={{
                    ...estilos.botao,
                    ...estilos.botaoSecundario,
                  }}
                  onClick={() => void carregarNoticias()}
                  disabled={carregando}
                >
                  ↻ Atualizar
                </button>

                <button
                  type="button"
                  style={estilos.botao}
                  onClick={abrirNovaNoticia}
                >
                  <span style={{ fontSize: 17 }}>+</span> Nova notícia
                </button>
              </div>
            )}
          </header>

          {erro && !modalAberto && secao !== "tecnicos" && (
            <div
              role="alert"
              style={{
                ...estilos.mensagem,
                background: "#fef2f2",
                border: "1px solid #fecaca",
                color: "#991b1b",
              }}
            >
              <strong>Não foi possível concluir a operação.</strong>
              <div style={{ marginTop: 4 }}>{erro}</div>

              {erro.toLowerCase().includes("sessão") && (
                <div style={{ marginTop: 8 }}>
                  A sessão pode ter expirado.{" "}
                  <a
                    href="/login"
                    style={{ color: "#991b1b", fontWeight: 800 }}
                  >
                    Voltar ao login
                  </a>
                </div>
              )}
            </div>
          )}

          {sucesso && secao !== "tecnicos" && (
            <div
              role="status"
              style={{
                ...estilos.mensagem,
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                color: "#166534",
              }}
            >
              ✓ {sucesso}
              <button
                type="button"
                onClick={() => setSucesso("")}
                style={{
                  float: "right",
                  border: 0,
                  background: "transparent",
                  color: "inherit",
                  cursor: "pointer",
                }}
                aria-label="Fechar mensagem"
              >
                ×
              </button>
            </div>
          )}

          {secao !== "tecnicos" && (
            <div
              className="agro-admin-indicadores"
              style={estilos.grelhaIndicadores}
            >
              {[
                {
                  titulo: "Total de notícias",
                  numero: estatisticas.total,
                  icone: "▤",
                  detalhe: "Registos na base de dados",
                },
                {
                  titulo: "Publicadas",
                  numero: estatisticas.publicadas,
                  icone: "✓",
                  detalhe: "Disponíveis para publicação",
                },
                {
                  titulo: "Rascunhos",
                  numero: estatisticas.rascunhos,
                  icone: "✎",
                  detalhe: "Conteúdos em preparação",
                },
                {
                  titulo: "Em destaque",
                  numero: estatisticas.destaques,
                  icone: "☆",
                  detalhe: "Marcadas como destaque",
                },
              ].map((item) => (
                <article
                  key={item.titulo}
                  style={{ ...estilos.cartao, ...estilos.indicador }}
                >
                  <div style={estilos.indicadorTopo}>
                    <span
                      style={{
                        color: cores.secundario,
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {item.titulo}
                    </span>
                    <span style={estilos.indicadorIcone}>
                      {item.icone}
                    </span>
                  </div>

                  <p style={estilos.indicadorNumero}>
                    {carregando ? "—" : item.numero}
                  </p>
                  <p style={estilos.indicadorLegenda}>
                    {item.detalhe}
                  </p>
                </article>
              ))}
            </div>
          )}

          {secao === "visao-geral" && (
            <section style={{ ...estilos.cartao, ...estilos.painel }}>
              <div style={estilos.painelCabecalho}>
                <div>
                  <h2 style={estilos.painelTitulo}>
                    Atividade editorial
                  </h2>
                  <p style={estilos.painelDescricao}>
                    Distribuição das notícias por estado, baseada nos
                    registos carregados.
                  </p>
                </div>

                <button
                  type="button"
                  style={{
                    ...estilos.botao,
                    ...estilos.botaoSecundario,
                  }}
                  onClick={() => navegar("noticias")}
                >
                  Gerir notícias →
                </button>
              </div>

              {carregando ? (
                <div style={estilos.estadoVazio}>
                  A carregar dados da base de dados…
                </div>
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: 20,
                    alignItems: "center",
                  }}
                >
                  {[
                    {
                      nome: "Publicadas",
                      quantidade: estatisticas.publicadas,
                      cor: "#16a34a",
                    },
                    {
                      nome: "Rascunhos",
                      quantidade: estatisticas.rascunhos,
                      cor: "#d97706",
                    },
                    {
                      nome: "Arquivadas",
                      quantidade: noticias.filter(
                        (item) => item.estado === "arquivada"
                      ).length,
                      cor: "#64748b",
                    },
                  ].map((item) => {
                    const percentagem =
                      estatisticas.total > 0
                        ? (item.quantidade / estatisticas.total) * 100
                        : 0;

                    return (
                      <div key={item.nome}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 10,
                            marginBottom: 9,
                            fontSize: 12,
                          }}
                        >
                          <span style={{ color: cores.secundario }}>
                            {item.nome}
                          </span>
                          <strong>{item.quantidade}</strong>
                        </div>

                        <div
                          style={{
                            height: 8,
                            background: "#edf2ee",
                            borderRadius: 30,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${percentagem}%`,
                              height: "100%",
                              borderRadius: 30,
                              background: item.cor,
                              transition: "width .3s ease",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div
                style={{
                  marginTop: 26,
                  paddingTop: 20,
                  borderTop: `1px solid ${cores.borda}`,
                }}
              >
                <div style={estilos.painelCabecalho}>
                  <div>
                    <h3 style={estilos.painelTitulo}>
                      Notícias recentes
                    </h3>
                    <p style={estilos.painelDescricao}>
                      Os últimos registos recebidos do Supabase.
                    </p>
                  </div>

                  <button
                    type="button"
                    style={{
                      ...estilos.botao,
                      ...estilos.botaoSecundario,
                    }}
                    onClick={() => navegar("noticias")}
                  >
                    Ver todas
                  </button>
                </div>

                {carregando ? (
                  <div style={estilos.estadoVazio}>
                    A carregar notícias…
                  </div>
                ) : noticias.length === 0 ? (
                  <div style={estilos.estadoVazio}>
                    <div
                      style={{
                        fontSize: 30,
                        marginBottom: 10,
                        color: cores.verde,
                      }}
                    >
                      ▤
                    </div>
                    <strong style={{ color: cores.texto }}>
                      Ainda não existem notícias registadas.
                    </strong>
                    <p>
                      Crie a primeira notícia para começar a preencher a
                      área editorial.
                    </p>
                    <button
                      type="button"
                      style={estilos.botao}
                      onClick={abrirNovaNoticia}
                    >
                      + Criar primeira notícia
                    </button>
                  </div>
                ) : (
                  <div style={estilos.tabelaWrapper}>
                    <table style={estilos.tabela}>
                      <thead>
                        <tr>
                          <th style={estilos.th}>Notícia</th>
                          <th style={estilos.th}>Categoria</th>
                          <th style={estilos.th}>Estado</th>
                          <th style={estilos.th}>Data</th>
                          <th style={estilos.th}>Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {noticias.slice(0, 5).map((noticia) => (
                          <tr
                            key={noticia.id}
                            className="agro-admin-linha"
                          >
                            <td style={estilos.td}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 11,
                                  minWidth: 230,
                                }}
                              >
                                {noticia.imagem_url ? (
                                  <img
                                    src={noticia.imagem_url}
                                    alt=""
                                    style={estilos.miniatura}
                                    loading="lazy"
                                  />
                                ) : (
                                  <div
                                    style={{
                                      ...estilos.miniatura,
                                      display: "grid",
                                      placeItems: "center",
                                      color: cores.verde,
                                      fontSize: 19,
                                    }}
                                  >
                                    A
                                  </div>
                                )}
                                <div>
                                  <div
                                    style={{
                                      fontWeight: 800,
                                      lineHeight: 1.5,
                                      maxWidth: 280,
                                    }}
                                  >
                                    {noticia.titulo}
                                  </div>
                                  {noticia.destaque && (
                                    <div
                                      style={{
                                        color: "#b7791f",
                                        fontSize: 10,
                                        marginTop: 4,
                                      }}
                                    >
                                      ★ Em destaque
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td style={estilos.td}>{noticia.categoria}</td>
                            <td style={estilos.td}>
                              <span
                                style={{
                                  ...estilos.etiqueta,
                                  ...estiloEstado(noticia.estado),
                                }}
                              >
                                {nomeEstado(noticia.estado)}
                              </span>
                            </td>
                            <td style={estilos.td}>
                              {dataFormatada(
                                noticia.criada_em || noticia.criado_em
                              )}
                            </td>
                            <td style={estilos.td}>
                              <div style={estilos.accoes}>
                                <button
                                  type="button"
                                  style={estilos.botaoPequeno}
                                  onClick={() => abrirEdicao(noticia)}
                                >
                                  Editar
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </section>
          )}

          {secao === "noticias" && (
            <section style={{ ...estilos.cartao, ...estilos.painel }}>
              <div style={estilos.painelCabecalho}>
                <div>
                  <h2 style={estilos.painelTitulo}>
                    Todas as notícias
                  </h2>
                  <p style={estilos.painelDescricao}>
                    {noticiasFiltradas.length} registo(s) encontrados
                    nesta consulta.
                  </p>
                </div>
                <button
                  type="button"
                  style={estilos.botao}
                  onClick={abrirNovaNoticia}
                >
                  + Nova notícia
                </button>
              </div>

              <div style={estilos.filtros}>
                <input
                  type="search"
                  aria-label="Pesquisar notícias"
                  placeholder="Pesquisar título, resumo, autor…"
                  value={pesquisa}
                  onChange={(evento) => setPesquisa(evento.target.value)}
                  style={estilos.campoPesquisa}
                />

                <select
                  aria-label="Filtrar por estado"
                  value={filtroEstado}
                  onChange={(evento) => setFiltroEstado(evento.target.value)}
                  style={estilos.select}
                >
                  <option value="todas">Todos os estados</option>
                  <option value="publicada">Publicadas</option>
                  <option value="rascunho">Rascunhos</option>
                  <option value="arquivada">Arquivadas</option>
                </select>

                <select
                  aria-label="Filtrar por categoria"
                  value={filtroCategoria}
                  onChange={(evento) =>
                    setFiltroCategoria(evento.target.value)
                  }
                  style={estilos.select}
                >
                  <option value="todas">Todas as categorias</option>
                  {CATEGORIAS.map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
              </div>

              {carregando ? (
                <div style={estilos.estadoVazio}>
                  <div style={{ fontSize: 26, marginBottom: 10 }}>↻</div>
                  A carregar notícias da base de dados…
                </div>
              ) : noticiasFiltradas.length === 0 ? (
                <div style={estilos.estadoVazio}>
                  <div
                    style={{
                      fontSize: 30,
                      color: cores.verde,
                      marginBottom: 10,
                    }}
                  >
                    ▤
                  </div>
                  <strong style={{ color: cores.texto }}>
                    Não foram encontradas notícias.
                  </strong>
                  <p>
                    Experimente alterar os filtros ou crie uma nova notícia.
                  </p>
                  <button
                    type="button"
                    style={estilos.botao}
                    onClick={abrirNovaNoticia}
                  >
                    + Criar notícia
                  </button>
                </div>
              ) : (
                <div style={estilos.tabelaWrapper}>
                  <table style={estilos.tabela}>
                    <thead>
                      <tr>
                        <th style={estilos.th}>Notícia</th>
                        <th style={estilos.th}>Categoria</th>
                        <th style={estilos.th}>Estado</th>
                        <th style={estilos.th}>Data</th>
                        <th style={estilos.th}>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {noticiasFiltradas.map((noticia) => (
                        <tr
                          key={noticia.id}
                          className="agro-admin-linha"
                        >
                          <td style={estilos.td}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 11,
                                minWidth: 230,
                              }}
                            >
                              {noticia.imagem_url ? (
                                <img
                                  src={noticia.imagem_url}
                                  alt=""
                                  style={estilos.miniatura}
                                  loading="lazy"
                                />
                              ) : (
                                <div
                                  style={{
                                    ...estilos.miniatura,
                                    display: "grid",
                                    placeItems: "center",
                                    color: cores.verde,
                                    fontSize: 19,
                                  }}
                                >
                                  A
                                </div>
                              )}
                              <div style={{ minWidth: 0 }}>
                                <div
                                  style={{
                                    fontWeight: 800,
                                    lineHeight: 1.5,
                                    maxWidth: 300,
                                  }}
                                >
                                  {noticia.titulo}
                                </div>
                                <div
                                  style={{
                                    color: cores.secundario,
                                    fontSize: 10,
                                    marginTop: 4,
                                  }}
                                >
                                  {noticia.autor || "Redacção AGROINOVA"}
                                </div>
                                {noticia.destaque && (
                                  <div
                                    style={{
                                      color: "#b7791f",
                                      fontSize: 10,
                                      marginTop: 4,
                                    }}
                                  >
                                    ★ Em destaque
                                  </div>
                                )}
                                {noticia.pdf_url && (
                                  <a
                                    href={noticia.pdf_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                      display: "inline-block",
                                      marginTop: 6,
                                      color: cores.verde,
                                      fontWeight: 700,
                                      fontSize: 10,
                                    }}
                                  >
                                    Abrir PDF ↗
                                  </a>
                                )}
                              </div>
                            </div>
                          </td>
                          <td style={estilos.td}>{noticia.categoria}</td>
                          <td style={estilos.td}>
                            <span
                              style={{
                                ...estilos.etiqueta,
                                ...estiloEstado(noticia.estado),
                              }}
                            >
                              {nomeEstado(noticia.estado)}
                            </span>
                          </td>
                          <td style={estilos.td}>
                            {dataFormatada(
                              noticia.criada_em || noticia.criado_em
                            )}
                          </td>
                          <td style={estilos.td}>
                            <div style={estilos.accoes}>
                              <button
                                type="button"
                                style={estilos.botaoPequeno}
                                onClick={() => abrirEdicao(noticia)}
                              >
                                Editar
                              </button>

                              {noticia.estado !== "publicada" && (
                                <button
                                  type="button"
                                  style={{
                                    ...estilos.botaoPequeno,
                                    color: cores.verde,
                                    borderColor: "#bbf7d0",
                                  }}
                                  onClick={() =>
                                    void alterarEstado(noticia, "publicada")
                                  }
                                >
                                  Publicar
                                </button>
                              )}

                              {noticia.estado === "publicada" && (
                                <button
                                  type="button"
                                  style={estilos.botaoPequeno}
                                  onClick={() =>
                                    void alterarEstado(noticia, "rascunho")
                                  }
                                >
                                  Retirar
                                </button>
                              )}

                              {noticia.estado !== "arquivada" && (
                                <button
                                  type="button"
                                  style={estilos.botaoPequeno}
                                  onClick={() =>
                                    void alterarEstado(noticia, "arquivada")
                                  }
                                >
                                  Arquivar
                                </button>
                              )}

                              {noticia.estado === "arquivada" && (
                                <button
                                  type="button"
                                  style={estilos.botaoPequeno}
                                  onClick={() =>
                                    void alterarEstado(noticia, "rascunho")
                                  }
                                >
                                  Restaurar
                                </button>
                              )}

                              <button
                                type="button"
                                style={{
                                  ...estilos.botaoPequeno,
                                  color: cores.vermelho,
                                  borderColor: "#fecaca",
                                }}
                                onClick={() => void eliminarNoticia(noticia)}
                              >
                                Eliminar
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}

          {secao === "tecnicos" && <GestaoTecnicos />}

          <footer
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 10,
              padding: "14px 3px",
              color: cores.secundario,
              fontSize: 10,
            }}
          >
            <span>AGROINOVA ANGOLA · Área de administração</span>
            <span>
              Os indicadores são calculados a partir dos registos carregados.
            </span>
          </footer>
        </section>
      </div>

      {modalAberto && (
        <div
          style={estilos.modalFundo}
          onMouseDown={(evento) => {
            if (evento.target === evento.currentTarget) fecharModal();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-noticia"
            style={estilos.modal}
          >
            <form onSubmit={guardarNoticia}>
              <header
                className="agro-admin-modal-topo"
                style={estilos.modalTopo}
              >
                <div>
                  <h2
                    id="titulo-modal-noticia"
                    style={{
                      margin: "0 0 6px",
                      fontSize: 19,
                      fontWeight: 800,
                    }}
                  >
                    {noticiaEmEdicao
                      ? "Editar notícia"
                      : "Criar nova notícia"}
                  </h2>
                  <p style={estilos.painelDescricao}>
                    Seleccione os ficheiros no computador. Os ficheiros
                    serão enviados para o armazenamento da AGROINOVA.
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Fechar formulário"
                  disabled={aGuardar}
                  onClick={fecharModal}
                  style={{
                    border: `1px solid ${cores.borda}`,
                    borderRadius: 9,
                    background: "#fff",
                    width: 36,
                    height: 36,
                    cursor: "pointer",
                    fontSize: 20,
                    color: cores.secundario,
                  }}
                >
                  ×
                </button>
              </header>

              <div
                className="agro-admin-modal-corpo"
                style={estilos.modalCorpo}
              >
                {erro && (
                  <div
                    role="alert"
                    style={{
                      ...estilos.mensagem,
                      background: "#fef2f2",
                      border: "1px solid #fecaca",
                      color: "#991b1b",
                    }}
                  >
                    {erro}
                  </div>
                )}

                <div
                  className="agro-admin-grelha-form"
                  style={estilos.grelhaFormulario}
                >
                  <div
                    style={{
                      ...estilos.campoGrupo,
                      gridColumn: "1 / -1",
                    }}
                  >
                    <label style={estilos.label} htmlFor="noticia-titulo">
                      Título *
                    </label>
                    <input
                      id="noticia-titulo"
                      required
                      maxLength={200}
                      value={formulario.titulo}
                      onChange={(evento) =>
                        alterarCampo("titulo", evento.target.value)
                      }
                      placeholder="Título da notícia"
                      style={estilos.input}
                    />
                    <span
                      style={{
                        color: cores.secundario,
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    >
                      {formulario.titulo.length}/200
                    </span>
                  </div>

                  <div style={estilos.campoGrupo}>
                    <label style={estilos.label} htmlFor="noticia-categoria">
                      Categoria *
                    </label>
                    <select
                      id="noticia-categoria"
                      required
                      value={formulario.categoria}
                      onChange={(evento) =>
                        alterarCampo("categoria", evento.target.value)
                      }
                      style={estilos.input}
                    >
                      {CATEGORIAS.map((categoria) => (
                        <option key={categoria} value={categoria}>
                          {categoria}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={estilos.campoGrupo}>
                    <label style={estilos.label} htmlFor="noticia-autor">
                      Autor
                    </label>
                    <input
                      id="noticia-autor"
                      value={formulario.autor}
                      onChange={(evento) =>
                        alterarCampo("autor", evento.target.value)
                      }
                      placeholder="Redacção AGROINOVA"
                      style={estilos.input}
                    />
                  </div>

                  <div
                    style={{
                      ...estilos.campoGrupo,
                      gridColumn: "1 / -1",
                    }}
                  >
                    <label style={estilos.label} htmlFor="noticia-imagem">
                      Fotografia da notícia
                    </label>
                    <input
                      id="noticia-imagem"
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/gif"
                      className="agro-admin-ficheiro"
                      disabled={aGuardar}
                      onChange={(evento) =>
                        selecionarImagem(evento.target.files?.[0] ?? null)
                      }
                    />
                    <p
                      style={{
                        margin: 0,
                        fontSize: 11,
                        color: cores.secundario,
                        lineHeight: 1.6,
                      }}
                    >
                      Formatos: JPG, PNG, WEBP ou GIF. Tamanho máximo: 8 MB.
                      {noticiaEmEdicao?.imagem_url &&
                        !imagemSelecionada &&
                        " A fotografia actual será mantida se não escolher outra."}
                    </p>

                    {previewImagem && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 14,
                          flexWrap: "wrap",
                          marginTop: 5,
                          padding: 12,
                          border: `1px solid ${cores.borda}`,
                          borderRadius: 10,
                        }}
                      >
                        <img
                          src={previewImagem}
                          alt="Pré-visualização da fotografia"
                          style={{
                            width: 150,
                            height: 105,
                            objectFit: "cover",
                            borderRadius: 8,
                            background: cores.fundo,
                          }}
                        />
                        <div style={{ minWidth: 0 }}>
                          <strong style={{ fontSize: 12 }}>
                            {imagemSelecionada
                              ? imagemSelecionada.name
                              : "Fotografia actual"}
                          </strong>
                          {imagemSelecionada && (
                            <p
                              style={{
                                fontSize: 11,
                                color: cores.secundario,
                                margin: "5px 0",
                              }}
                            >
                              {tamanhoFicheiro(imagemSelecionada.size)}
                            </p>
                          )}
                          {imagemSelecionada && (
                            <button
                              type="button"
                              style={estilos.botaoPequeno}
                              onClick={() => {
                                setImagemSelecionada(null);
                                setPreviewImagemTemporaria("");
                                setPreviewImagem(
                                  noticiaEmEdicao?.imagem_url || ""
                                );
                                const input = document.getElementById(
                                  "noticia-imagem"
                                ) as HTMLInputElement | null;
                                if (input) input.value = "";
                              }}
                            >
                              Cancelar nova fotografia
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      ...estilos.campoGrupo,
                      gridColumn: "1 / -1",
                    }}
                  >
                    <label style={estilos.label} htmlFor="noticia-pdf">
                      Documento PDF (opcional)
                    </label>
                    <input
                      id="noticia-pdf"
                      type="file"
                      accept="application/pdf,.pdf"
                      className="agro-admin-ficheiro"
                      disabled={aGuardar}
                      onChange={(evento) =>
                        selecionarPdf(evento.target.files?.[0] ?? null)
                      }
                    />
                    <p
                      style={{
                        margin: 0,
                        fontSize: 11,
                        color: cores.secundario,
                        lineHeight: 1.6,
                      }}
                    >
                      Anexe relatórios, comunicados ou documentos de apoio.
                      Tamanho máximo: 20 MB.
                    </p>

                    {(pdfSelecionado ||
                      (noticiaEmEdicao && formulario.pdf_url)) && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          flexWrap: "wrap",
                          padding: 13,
                          background: "#f8faf9",
                          border: `1px solid ${cores.borda}`,
                          borderRadius: 10,
                        }}
                      >
                        <div
                          style={{
                            width: 42,
                            height: 48,
                            display: "grid",
                            placeItems: "center",
                            background: "#fee2e2",
                            color: "#b91c1c",
                            borderRadius: 8,
                            fontSize: 12,
                            fontWeight: 900,
                          }}
                        >
                          PDF
                        </div>

                        <div style={{ flex: 1, minWidth: 140 }}>
                          <strong
                            style={{
                              display: "block",
                              fontSize: 12,
                              overflowWrap: "anywhere",
                            }}
                          >
                            {pdfSelecionado
                              ? pdfSelecionado.name
                              : "Documento PDF actual"}
                          </strong>
                          <span
                            style={{
                              display: "block",
                              marginTop: 5,
                              color: cores.secundario,
                              fontSize: 11,
                            }}
                          >
                            {pdfSelecionado
                              ? tamanhoFicheiro(pdfSelecionado.size)
                              : "O documento guardado será mantido."}
                          </span>

                          {!pdfSelecionado && formulario.pdf_url && (
                            <a
                              href={formulario.pdf_url}
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                display: "inline-block",
                                marginTop: 7,
                                color: cores.verde,
                                fontSize: 11,
                                fontWeight: 800,
                              }}
                            >
                              Abrir PDF actual ↗
                            </a>
                          )}
                        </div>

                        {pdfSelecionado && (
                          <button
                            type="button"
                            style={estilos.botaoPequeno}
                            onClick={() => {
                              setPdfSelecionado(null);
                              const input = document.getElementById(
                                "noticia-pdf"
                              ) as HTMLInputElement | null;
                              if (input) input.value = "";
                            }}
                          >
                            Cancelar novo PDF
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      ...estilos.campoGrupo,
                      gridColumn: "1 / -1",
                    }}
                  >
                    <label style={estilos.label} htmlFor="noticia-resumo">
                      Resumo
                    </label>
                    <textarea
                      id="noticia-resumo"
                      maxLength={1000}
                      value={formulario.resumo}
                      onChange={(evento) =>
                        alterarCampo("resumo", evento.target.value)
                      }
                      placeholder="Escreva um resumo claro da notícia…"
                      style={{ ...estilos.textarea, minHeight: 85 }}
                    />
                    <span
                      style={{
                        color: cores.secundario,
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    >
                      {formulario.resumo.length}/1000
                    </span>
                  </div>

                  <div
                    style={{
                      ...estilos.campoGrupo,
                      gridColumn: "1 / -1",
                    }}
                  >
                    <label style={estilos.label} htmlFor="noticia-conteudo">
                      Conteúdo da notícia
                    </label>
                    <textarea
                      id="noticia-conteudo"
                      value={formulario.conteudo}
                      onChange={(evento) =>
                        alterarCampo("conteudo", evento.target.value)
                      }
                      placeholder="Escreva o conteúdo integral da notícia…"
                      style={{ ...estilos.textarea, minHeight: 210 }}
                    />
                    <span
                      style={{
                        color: cores.secundario,
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    >
                      {formulario.conteudo.length.toLocaleString("pt-PT")}{" "}
                      caracteres
                    </span>
                  </div>

                  <div
                    style={{
                      ...estilos.campoGrupo,
                      gridColumn: "1 / -1",
                      padding: 14,
                      background: "#f8faf9",
                      borderRadius: 10,
                      border: `1px solid ${cores.borda}`,
                    }}
                  >
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 12,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formulario.destaque}
                        onChange={(evento) =>
                          alterarCampo("destaque", evento.target.checked)
                        }
                        style={{
                          width: 16,
                          height: 16,
                          accentColor: cores.verde,
                        }}
                      />
                      Destacar esta notícia
                    </label>
                    <p
                      style={{
                        margin: "5px 0 0 26px",
                        fontSize: 11,
                        color: cores.secundario,
                        lineHeight: 1.5,
                      }}
                    >
                      A marcação é guardada no registo. A apresentação
                      pública depende de a página de notícias utilizar este
                      campo.
                    </p>
                  </div>
                </div>
              </div>

              <footer
                className="agro-admin-modal-rodape"
                style={estilos.modalRodape}
              >
                <button
                  type="button"
                  disabled={aGuardar}
                  style={{
                    ...estilos.botao,
                    ...estilos.botaoSecundario,
                  }}
                  onClick={fecharModal}
                >
                  Cancelar
                </button>

                <div
                  style={{
                    display: "flex",
                    gap: 9,
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    type="submit"
                    name="estado"
                    value="rascunho"
                    disabled={aGuardar}
                    style={{
                      ...estilos.botao,
                      ...estilos.botaoSecundario,
                    }}
                  >
                    {aGuardar ? "A guardar…" : "Guardar rascunho"}
                  </button>

                  <button
                    type="submit"
                    name="estado"
                    value="publicada"
                    disabled={aGuardar}
                    style={estilos.botao}
                  >
                    {aGuardar
                      ? "A guardar…"
                      : noticiaEmEdicao
                        ? "Guardar alterações"
                        : "Publicar notícia"}
                  </button>
                </div>
              </footer>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}
