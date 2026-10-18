
"use client";

import {
  useCallback,
  useEffect,
  useState,
  type FormEvent,
  type CSSProperties,
  type ChangeEvent,
} from "react";

type Separador = "eventos" | "instituicoes" | "inscricoes";
type Entidade = "evento" | "instituicao" | "inscricao";

type Evento = {
  id: number | string;
  titulo: string;
  tipo: string;
  area?: string;
  modalidade?: string;
  duracao?: string;
  nivel?: string;
  resumo?: string;
  conteudo?: unknown[];
  imagem?: string;
  estado: string;
  destaque?: boolean;
  data_evento?: string | null;
  local_evento?: string | null;
  entidade_organizadora?: string | null;
};

type Instituicao = {
  id: number | string;
  nome: string;
  sigla?: string;
  provincia?: string;
  tipo?: string;
  foco?: string;
  url?: string;
  imagem?: string;
  estado: string;
};

type Inscricao = {
  id: number | string;
  evento_id: number | string;
  nome: string;
  email: string;
  telefone?: string;
  provincia?: string;
  perfil?: string;
  plataforma?: string;
  horario_preferido?: string;
  observacoes?: string;
  estado: string;
  criado_em?: string;
};

const NOVO_EVENTO = {
  titulo: "",
  tipo: "Curso",
  area: "Produção vegetal",
  modalidade: "Online",
  duracao: "",
  nivel: "Todos os níveis",
  resumo: "",
  imagem: "",
  estado: "rascunho",
  destaque: false,
  data_evento: "",
  local_evento: "",
  entidade_organizadora: "",
  conteudo: [] as unknown[],
};

const NOVA_INSTITUICAO = {
  nome: "",
  sigla: "",
  provincia: "",
  tipo: "Pública",
  foco: "",
  url: "",
  imagem: "",
  estado: "rascunho",
};

const ESTILO = {
  fundo: "#f0fdf4",
  verde: "#166534",
  escuro: "#14532d",
  texto: "#17221b",
  secundario: "#64748b",
  borda: "#e2e8f0",
};

const campo: CSSProperties = {
  width: "100%",
  minWidth: 0,
  padding: "11px 12px",
  border: `1px solid ${ESTILO.borda}`,
  borderRadius: 10,
  background: "#fff",
  color: ESTILO.texto,
  fontSize: 14,
  boxSizing: "border-box",
};

const rotulo: CSSProperties = {
  display: "block",
  marginBottom: 6,
  fontSize: 12,
  fontWeight: 700,
  color: ESTILO.escuro,
};

export default function GestaoAgroAcademia() {
  const [separador, setSeparador] = useState<Separador>("eventos");
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [instituicoes, setInstituicoes] = useState<Instituicao[]>([]);
  const [inscricoes, setInscricoes] = useState<Inscricao[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [aGuardar, setAGuardar] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [pesquisa, setPesquisa] = useState("");
  const [formAberto, setFormAberto] = useState(false);
  const [edicaoId, setEdicaoId] = useState<number | string | null>(null);
  const [eventoForm, setEventoForm] = useState({ ...NOVO_EVENTO });
  const [instituicaoForm, setInstituicaoForm] = useState({
    ...NOVA_INSTITUICAO,
  });

  const carregar = useCallback(async () => {
    setCarregando(true);
    setErro("");

    try {
      const resposta = await fetch("/api/admin/agroacademia", {
        method: "GET",
        cache: "no-store",
        credentials: "same-origin",
      });

      const dados = await resposta.json();

      if (!resposta.ok || dados.sucesso === false) {
        throw new Error(
          dados.erro || "Não foi possível carregar os registos.",
        );
      }

      setEventos(Array.isArray(dados.eventos) ? dados.eventos : []);
      setInstituicoes(
        Array.isArray(dados.instituicoes) ? dados.instituicoes : [],
      );
      setInscricoes(
        Array.isArray(dados.inscricoes) ? dados.inscricoes : [],
      );
    } catch (e) {
      setErro(
        e instanceof Error ? e.message : "Erro ao carregar os dados.",
      );
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    void carregar();
  }, [carregar]);

  function novoRegisto() {
    setErro("");
    setSucesso("");
    setEdicaoId(null);
    setEventoForm({ ...NOVO_EVENTO });
    setInstituicaoForm({ ...NOVA_INSTITUICAO });
    setFormAberto(true);
  }

  function editarEvento(item: Evento) {
    setEdicaoId(item.id);
    setEventoForm({
      ...NOVO_EVENTO,
      ...item,
      data_evento: item.data_evento ? item.data_evento.slice(0, 16) : "",
      local_evento: item.local_evento ?? "",
      entidade_organizadora: item.entidade_organizadora ?? "",
      conteudo: Array.isArray(item.conteudo) ? item.conteudo : [],
    });
    setErro("");
    setSucesso("");
    setFormAberto(true);
  }

  function editarInstituicao(item: Instituicao) {
    setEdicaoId(item.id);
    setInstituicaoForm({ ...NOVA_INSTITUICAO, ...item });
    setErro("");
    setSucesso("");
    setFormAberto(true);
  }

  async function guardar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAGuardar(true);
    setErro("");
    setSucesso("");

    const entidade: Entidade =
      separador === "instituicoes" ? "instituicao" : "evento";

    const dados =
      entidade === "evento"
        ? {
            ...eventoForm,
            data_evento: eventoForm.data_evento
              ? new Date(eventoForm.data_evento).toISOString()
              : null,
          }
        : instituicaoForm;

    try {
      const resposta = await fetch("/api/admin/agroacademia", {
        method: edicaoId !== null ? "PATCH" : "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          edicaoId !== null
            ? { entidade, id: edicaoId, dados }
            : { entidade, dados },
        ),
      });

      const resultado = await resposta.json();

      if (!resposta.ok || resultado.sucesso === false) {
        throw new Error(
          resultado.erro || "Não foi possível guardar o registo.",
        );
      }

      setFormAberto(false);
      setEdicaoId(null);
      setSucesso(
        resultado.mensagem ||
          (dados.estado === "rascunho"
            ? "Registo guardado como rascunho."
            : edicaoId !== null
              ? "Registo actualizado com sucesso."
              : "Registo criado com sucesso."),
      );

      await carregar();
    } catch (e) {
      setErro(
        e instanceof Error ? e.message : "Erro ao guardar o registo.",
      );
    } finally {
      setAGuardar(false);
    }
  }

  async function eliminar(entidade: Entidade, id: number | string) {
    const mensagem =
      entidade === "inscricao"
        ? "Tens a certeza de que queres eliminar definitivamente esta inscrição? Esta acção não pode ser anulada."
        : "Queres eliminar este registo? Se o evento tiver inscrições, será arquivado para preservar os dados dos participantes.";

    if (!window.confirm(mensagem)) return;

    setErro("");
    setSucesso("");

    try {
      const resposta = await fetch("/api/admin/agroacademia", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ entidade, id }),
      });

      const dados = await resposta.json().catch(() => ({}));

      if (!resposta.ok || dados.sucesso === false) {
        throw new Error(
          dados.erro ||
            `Não foi possível eliminar o registo. Código HTTP: ${resposta.status}.`,
        );
      }

      setSucesso(
        dados.arquivado
          ? "Evento arquivado. As inscrições foram preservadas."
          : entidade === "inscricao"
            ? "Inscrição eliminada com sucesso."
            : dados.mensagem || "Registo eliminado com sucesso.",
      );

      await carregar();
    } catch (e) {
      setErro(
        e instanceof Error
          ? e.message
          : "Ocorreu um erro ao eliminar o registo.",
      );
    }
  }

  async function arquivar(entidade: Entidade, id: number | string) {
    if (!window.confirm("Queres arquivar este registo?")) return;

    setErro("");
    setSucesso("");

    try {
      const resposta = await fetch("/api/admin/agroacademia", {
        method: "PATCH",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          entidade,
          id,
          dados: { estado: "arquivado" },
        }),
      });

      const dados = await resposta.json();

      if (!resposta.ok || dados.sucesso === false) {
        throw new Error(
          dados.erro || "Não foi possível arquivar o registo.",
        );
      }

      setSucesso(dados.mensagem || "Registo arquivado com sucesso.");
      await carregar();
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao arquivar.");
    }
  }

  async function alterarInscricao(item: Inscricao, estado: string) {
    setErro("");
    setSucesso("");

    try {
      const resposta = await fetch("/api/admin/agroacademia", {
        method: "PATCH",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          entidade: "inscricao",
          id: item.id,
          dados: { estado },
        }),
      });

      const dados = await resposta.json();

      if (!resposta.ok || dados.sucesso === false) {
        throw new Error(
          dados.erro || "Não foi possível actualizar a inscrição.",
        );
      }

      setSucesso("Estado da inscrição actualizado.");
      await carregar();
    } catch (e) {
      setErro(
        e instanceof Error ? e.message : "Erro ao actualizar inscrição.",
      );
    }
  }

  const filtro = (texto: string) =>
    texto
      .toLocaleLowerCase("pt-PT")
      .includes(pesquisa.trim().toLocaleLowerCase("pt-PT"));

  const eventosFiltrados = eventos.filter(
    (item) =>
      filtro(item.titulo) ||
      filtro(item.tipo) ||
      filtro(item.area || ""),
  );

  const instituicoesFiltradas = instituicoes.filter(
    (item) =>
      filtro(item.nome) ||
      filtro(item.sigla || "") ||
      filtro(item.provincia || ""),
  );

  const inscricoesFiltradas = inscricoes.filter(
    (item) =>
      filtro(item.nome) ||
      filtro(item.email) ||
      filtro(String(item.evento_id)),
  );

  const botao: CSSProperties = {
    border: `1px solid ${ESTILO.borda}`,
    borderRadius: 10,
    padding: "10px 14px",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    background: "#fff",
    color: ESTILO.escuro,
  };

  const botaoPrincipal: CSSProperties = {
    ...botao,
    background: ESTILO.verde,
    color: "#fff",
    borderColor: ESTILO.verde,
  };

  async function carregarImagem(
    e: ChangeEvent<HTMLInputElement>,
    entidade: "evento" | "instituicao",
  ) {
    const input = e.currentTarget;
    const ficheiro = input.files?.[0];

    if (!ficheiro) return;

    if (ficheiro.size > 5 * 1024 * 1024) {
      alert("O ficheiro não pode ultrapassar 5 MB.");
      input.value = "";
      return;
    }

    const extensoesValidas = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!extensoesValidas.includes(ficheiro.type)) {
      alert("Selecciona uma imagem JPG, PNG ou WebP.");
      input.value = "";
      return;
    }

    const formulario = new FormData();
    formulario.append("imagem", ficheiro);
    formulario.append("entidade", entidade);

    try {
      setErro("");
      setSucesso("");

      const resposta = await fetch("/api/admin/agroacademia/imagem", {
        method: "POST",
        credentials: "same-origin",
        body: formulario,
      });

      const resultado = await resposta.json();

      if (!resposta.ok || !resultado.url) {
        throw new Error(
          resultado.erro || "Falha no carregamento da imagem.",
        );
      }

      if (entidade === "evento") {
        setEventoForm((prev) => ({
          ...prev,
          imagem: resultado.url,
        }));
      } else {
        setInstituicaoForm((prev) => ({
          ...prev,
          imagem: resultado.url,
        }));
      }

      setSucesso("Imagem carregada com sucesso.");
    } catch (e) {
      setErro(
        e instanceof Error
          ? e.message
          : "Falha no carregamento da imagem.",
      );
    } finally {
      input.value = "";
    }
  }

  return (
    <section style={{ display: "grid", gap: 20, color: ESTILO.texto }}>
      <div
        style={{
          borderRadius: 18,
          padding: 24,
          background: "linear-gradient(120deg, #14532d, #166534, #15803d)",
          color: "#fff",
          boxShadow: "0 12px 30px rgba(20,83,45,.16)",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 2,
            opacity: 0.85,
          }}
        >
          AGROINOVA ANGOLA · FORMAÇÃO E CONHECIMENTO
        </div>

        <h2 style={{ fontSize: 25, fontWeight: 800, margin: "10px 0" }}>
          Gestão da AgroAcademia
        </h2>

        <p style={{ margin: 0, maxWidth: 680, lineHeight: 1.7, fontSize: 14 }}>
          Organize cursos, palestras, workshops, instituições parceiras e
          inscrições numa única área administrativa.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 12,
        }}
      >
        {[
          {
            titulo: "Eventos",
            total: eventos.length,
            detalhe: "Formações registadas",
          },
          {
            titulo: "Instituições",
            total: instituicoes.length,
            detalhe: "Entidades registadas",
          },
          {
            titulo: "Inscrições",
            total: inscricoes.length,
            detalhe: "Participantes registados",
          },
        ].map((item) => (
          <div
            key={item.titulo}
            style={{
              border: `1px solid ${ESTILO.borda}`,
              borderRadius: 14,
              padding: 18,
              background: "#fff",
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: ESTILO.secundario,
                fontWeight: 700,
              }}
            >
              {item.titulo}
            </div>

            <div
              style={{
                fontSize: 30,
                fontWeight: 800,
                color: ESTILO.verde,
                margin: "7px 0",
              }}
            >
              {item.total}
            </div>

            <div style={{ fontSize: 12, color: ESTILO.secundario }}>
              {item.detalhe}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {(
          [
            ["eventos", "Eventos"],
            ["instituicoes", "Instituições"],
            ["inscricoes", "Inscrições"],
          ] as [Separador, string][]
        ).map(([valor, titulo]) => (
          <button
            key={valor}
            type="button"
            onClick={() => {
              setSeparador(valor);
              setFormAberto(false);
              setEdicaoId(null);
              setErro("");
              setSucesso("");
            }}
            style={{
              ...botao,
              background: separador === valor ? ESTILO.verde : "#fff",
              color: separador === valor ? "#fff" : ESTILO.escuro,
              borderColor:
                separador === valor ? ESTILO.verde : ESTILO.borda,
            }}
          >
            {titulo}
          </button>
        ))}

        <button
          type="button"
          style={{ ...botao, marginLeft: "auto" }}
          onClick={() => void carregar()}
          disabled={carregando}
        >
          Actualizar dados
        </button>

        {separador !== "inscricoes" && (
          <button
            type="button"
            style={botaoPrincipal}
            onClick={novoRegisto}
          >
            + Novo registo
          </button>
        )}
      </div>

      {erro && (
        <div
          role="alert"
          style={{
            padding: 14,
            borderRadius: 10,
            background: "#fef2f2",
            color: "#991b1b",
            border: "1px solid #fecaca",
          }}
        >
          {erro}
        </div>
      )}

      {sucesso && (
        <div
          role="status"
          style={{
            padding: 14,
            borderRadius: 10,
            background: ESTILO.fundo,
            color: ESTILO.verde,
            border: "1px solid #bbf7d0",
          }}
        >
          {sucesso}
        </div>
      )}

      <input
        aria-label="Pesquisar registos"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="Pesquisar por título, nome, email ou província..."
        style={campo}
      />

      {formAberto && separador !== "inscricoes" && (
        <form
          onSubmit={guardar}
          style={{
            display: "grid",
            gap: 15,
            padding: 22,
            background: "#fff",
            border: `1px solid ${ESTILO.borda}`,
            borderRadius: 16,
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>
            {edicaoId !== null ? "Editar registo" : "Criar registo"}
          </h3>

          {separador === "eventos" ? (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 14,
                }}
              >
                <label>
                  <span style={rotulo}>Título *</span>
                  <input
                    required
                    maxLength={200}
                    style={campo}
                    value={eventoForm.titulo}
                    onChange={(e) =>
                      setEventoForm({
                        ...eventoForm,
                        titulo: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  <span style={rotulo}>Tipo *</span>
                  <select
                    style={campo}
                    value={eventoForm.tipo}
                    onChange={(e) =>
                      setEventoForm({
                        ...eventoForm,
                        tipo: e.target.value,
                      })
                    }
                  >
                    {[
                      "Curso",
                      "Palestra",
                      "Workshop",
                      "Fórum",
                      "Congresso",
                      "Dia de campo",
                      "Webinar",
                    ].map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </label>

                <label>
                  <span style={rotulo}>Área temática</span>
                  <input
                    style={campo}
                    value={eventoForm.area || ""}
                    onChange={(e) =>
                      setEventoForm({
                        ...eventoForm,
                        area: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  <span style={rotulo}>Modalidade</span>
                  <select
                    style={campo}
                    value={eventoForm.modalidade || "Online"}
                    onChange={(e) =>
                      setEventoForm({
                        ...eventoForm,
                        modalidade: e.target.value,
                      })
                    }
                  >
                    {["Online", "Presencial", "Híbrido"].map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </label>

                <label>
                  <span style={rotulo}>Data e hora</span>
                  <input
                    type="datetime-local"
                    style={campo}
                    value={eventoForm.data_evento || ""}
                    onChange={(e) =>
                      setEventoForm({
                        ...eventoForm,
                        data_evento: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  <span style={rotulo}>Duração</span>
                  <input
                    style={campo}
                    value={eventoForm.duracao || ""}
                    onChange={(e) =>
                      setEventoForm({
                        ...eventoForm,
                        duracao: e.target.value,
                      })
                    }
                    placeholder="Ex.: 2 dias ou 4 horas"
                  />
                </label>

                <label>
                  <span style={rotulo}>Nível</span>
                  <input
                    style={campo}
                    value={eventoForm.nivel || ""}
                    onChange={(e) =>
                      setEventoForm({
                        ...eventoForm,
                        nivel: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  <span style={rotulo}>Entidade organizadora</span>
                  <input
                    style={campo}
                    value={eventoForm.entidade_organizadora || ""}
                    onChange={(e) =>
                      setEventoForm({
                        ...eventoForm,
                        entidade_organizadora: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  <span style={rotulo}>Local ou ligação</span>
                  <input
                    style={campo}
                    value={eventoForm.local_evento || ""}
                    onChange={(e) =>
                      setEventoForm({
                        ...eventoForm,
                        local_evento: e.target.value,
                      })
                    }
                    placeholder="Local ou informação de acesso"
                  />
                </label>

                <label>
                  <span style={rotulo}>
                    Imagem do evento (seleccionar do PC)
                  </span>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    style={campo}
                    onChange={(e) => void carregarImagem(e, "evento")}
                  />

                  {eventoForm.imagem && (
                    <img
                      src={eventoForm.imagem}
                      alt="Imagem do evento"
                      style={{
                        width: "100%",
                        maxHeight: 160,
                        objectFit: "cover",
                        borderRadius: 10,
                        marginTop: 8,
                      }}
                    />
                  )}
                </label>

                <label>
                  <span style={rotulo}>Estado</span>
                  <select
                    style={campo}
                    value={eventoForm.estado}
                    onChange={(e) =>
                      setEventoForm({
                        ...eventoForm,
                        estado: e.target.value,
                      })
                    }
                  >
                    <option value="rascunho">Rascunho</option>
                    <option value="publicado">Publicado</option>
                  </select>
                </label>
              </div>

              <label>
                <span style={rotulo}>Resumo</span>
                <textarea
                  rows={3}
                  style={campo}
                  value={eventoForm.resumo || ""}
                  onChange={(e) =>
                    setEventoForm({
                      ...eventoForm,
                      resumo: e.target.value,
                    })
                  }
                />
              </label>

              <label
                style={{
                  display: "flex",
                  gap: 9,
                  alignItems: "center",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                <input
                  type="checkbox"
                  checked={Boolean(eventoForm.destaque)}
                  onChange={(e) =>
                    setEventoForm({
                      ...eventoForm,
                      destaque: e.target.checked,
                    })
                  }
                />
                Destacar este evento na página pública
              </label>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 14,
                }}
              >
                <label>
                  <span style={rotulo}>Nome da instituição *</span>
                  <input
                    required
                    maxLength={200}
                    style={campo}
                    value={instituicaoForm.nome}
                    onChange={(e) =>
                      setInstituicaoForm({
                        ...instituicaoForm,
                        nome: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  <span style={rotulo}>Sigla</span>
                  <input
                    style={campo}
                    value={instituicaoForm.sigla || ""}
                    onChange={(e) =>
                      setInstituicaoForm({
                        ...instituicaoForm,
                        sigla: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  <span style={rotulo}>Província</span>
                  <input
                    style={campo}
                    value={instituicaoForm.provincia || ""}
                    onChange={(e) =>
                      setInstituicaoForm({
                        ...instituicaoForm,
                        provincia: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  <span style={rotulo}>Tipo</span>
                  <select
                    style={campo}
                    value={instituicaoForm.tipo || "Pública"}
                    onChange={(e) =>
                      setInstituicaoForm({
                        ...instituicaoForm,
                        tipo: e.target.value,
                      })
                    }
                  >
                    {[
                      "Pública",
                      "Privada",
                      "Centro de investigação",
                      "Organização",
                      "Outra",
                    ].map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </label>

                <label>
                  <span style={rotulo}>URL oficial</span>
                  <input
                    type="url"
                    style={campo}
                    value={instituicaoForm.url || ""}
                    onChange={(e) =>
                      setInstituicaoForm({
                        ...instituicaoForm,
                        url: e.target.value,
                      })
                    }
                    placeholder="https://..."
                  />
                </label>

                <label>
                  <span style={rotulo}>
                    Imagem da instituição (seleccionar do PC)
                  </span>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    style={campo}
                    onChange={(e) =>
                      void carregarImagem(e, "instituicao")
                    }
                  />

                  {instituicaoForm.imagem && (
                    <img
                      src={instituicaoForm.imagem}
                      alt="Imagem da instituição"
                      style={{
                        width: "100%",
                        maxHeight: 160,
                        objectFit: "cover",
                        borderRadius: 10,
                        marginTop: 8,
                      }}
                    />
                  )}
                </label>

                <label>
                  <span style={rotulo}>Estado</span>
                  <select
                    style={campo}
                    value={instituicaoForm.estado}
                    onChange={(e) =>
                      setInstituicaoForm({
                        ...instituicaoForm,
                        estado: e.target.value,
                      })
                    }
                  >
                    <option value="rascunho">Rascunho</option>
                    <option value="publicado">Publicado</option>
                  </select>
                </label>
              </div>

              <label>
                <span style={rotulo}>Área de actuação ou foco</span>
                <textarea
                  rows={3}
                  style={campo}
                  value={instituicaoForm.foco || ""}
                  onChange={(e) =>
                    setInstituicaoForm({
                      ...instituicaoForm,
                      foco: e.target.value,
                    })
                  }
                />
              </label>
            </>
          )}

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              type="submit"
              disabled={aGuardar}
              style={{
                ...botaoPrincipal,
                opacity: aGuardar ? 0.6 : 1,
              }}
            >
              {aGuardar
                ? "A guardar..."
                : edicaoId !== null
                  ? "Guardar alterações"
                  : "Criar registo"}
            </button>

            <button
              type="button"
              style={botao}
              onClick={() => {
                setFormAberto(false);
                setEdicaoId(null);
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      {carregando ? (
        <div
          style={{
            padding: 30,
            textAlign: "center",
            color: ESTILO.secundario,
          }}
        >
          A carregar dados da base de dados...
        </div>
      ) : separador === "eventos" ? (
        <div style={{ display: "grid", gap: 12 }}>
          {eventosFiltrados.length === 0 ? (
            <div
              style={{
                padding: 28,
                textAlign: "center",
                background: "#fff",
                borderRadius: 14,
                border: `1px solid ${ESTILO.borda}`,
              }}
            >
              <strong>Não existem eventos para apresentar.</strong>
              <p style={{ color: ESTILO.secundario, fontSize: 13 }}>
                Cria um curso, workshop ou palestra para começar a preencher
                a AgroAcademia.
              </p>
            </div>
          ) : (
            eventosFiltrados.map((item) => (
              <article
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) auto",
                  gap: 16,
                  alignItems: "center",
                  background: "#fff",
                  padding: 18,
                  borderRadius: 14,
                  border: `1px solid ${ESTILO.borda}`,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      flexWrap: "wrap",
                      alignItems: "center",
                      marginBottom: 7,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        padding: "4px 8px",
                        borderRadius: 20,
                        background: ESTILO.fundo,
                        color: ESTILO.verde,
                        fontWeight: 800,
                      }}
                    >
                      {item.tipo}
                    </span>

                    <span
                      style={{
                        fontSize: 11,
                        color: ESTILO.secundario,
                      }}
                    >
                      {item.estado}
                    </span>

                    {item.destaque && (
                      <span
                        style={{
                          fontSize: 11,
                          color: "#92400e",
                          fontWeight: 800,
                        }}
                      >
                        Em destaque
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontWeight: 800,
                      fontSize: 16,
                      margin: "0 0 6px",
                    }}
                  >
                    {item.titulo}
                  </h3>

                  <p
                    style={{
                      color: ESTILO.secundario,
                      fontSize: 13,
                      margin: 0,
                    }}
                  >
                    {item.area || "Área geral"} ·{" "}
                    {item.modalidade || "Modalidade não indicada"}
                    {item.data_evento
                      ? ` · ${new Date(item.data_evento).toLocaleString("pt-PT")}`
                      : ""}
                  </p>

                  {item.resumo && (
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.6,
                        margin: "8px 0 0",
                      }}
                    >
                      {item.resumo}
                    </p>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 7,
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    type="button"
                    style={botao}
                    onClick={() => editarEvento(item)}
                  >
                    Editar
                  </button>

                  {item.estado !== "arquivado" && (
                    <button
                      type="button"
                      style={{ ...botao, color: "#b91c1c" }}
                      onClick={() => void arquivar("evento", item.id)}
                    >
                      Arquivar
                    </button>
                  )}

                  <button
                    type="button"
                    style={{
                      ...botao,
                      color: "#b91c1c",
                      borderColor: "#fecaca",
                    }}
                    onClick={() => void eliminar("evento", item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      ) : separador === "instituicoes" ? (
        <div style={{ display: "grid", gap: 12 }}>
          {instituicoesFiltradas.length === 0 ? (
            <div
              style={{
                padding: 28,
                textAlign: "center",
                background: "#fff",
                borderRadius: 14,
                border: `1px solid ${ESTILO.borda}`,
              }}
            >
              <strong>Não existem instituições para apresentar.</strong>
              <p style={{ color: ESTILO.secundario, fontSize: 13 }}>
                Adiciona universidades, centros de investigação e entidades
                formadoras.
              </p>
            </div>
          ) : (
            instituicoesFiltradas.map((item) => (
              <article
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) auto",
                  gap: 16,
                  alignItems: "center",
                  background: "#fff",
                  padding: 18,
                  borderRadius: 14,
                  border: `1px solid ${ESTILO.borda}`,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: ESTILO.verde,
                      fontWeight: 800,
                    }}
                  >
                    {item.sigla || item.tipo || "Instituição"}
                  </div>

                  <h3
                    style={{
                      fontWeight: 800,
                      fontSize: 16,
                      margin: "6px 0",
                    }}
                  >
                    {item.nome}
                  </h3>

                  <p
                    style={{
                      color: ESTILO.secundario,
                      fontSize: 13,
                      margin: 0,
                    }}
                  >
                    {item.provincia || "Província não indicada"} ·{" "}
                    {item.estado}
                  </p>

                  {item.foco && (
                    <p style={{ fontSize: 13, margin: "8px 0 0" }}>
                      {item.foco}
                    </p>
                  )}

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: 8,
                        color: ESTILO.verde,
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      Visitar site oficial ↗
                    </a>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 7,
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    type="button"
                    style={botao}
                    onClick={() => editarInstituicao(item)}
                  >
                    Editar
                  </button>

                  {item.estado !== "arquivado" && (
                    <button
                      type="button"
                      style={{ ...botao, color: "#b91c1c" }}
                      onClick={() =>
                        void arquivar("instituicao", item.id)
                      }
                    >
                      Arquivar
                    </button>
                  )}

                  <button
                    type="button"
                    style={{
                      ...botao,
                      color: "#b91c1c",
                      borderColor: "#fecaca",
                    }}
                    onClick={() =>
                      void eliminar("instituicao", item.id)
                    }
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      ) : (
        <div
          style={{
            overflowX: "auto",
            background: "#fff",
            border: `1px solid ${ESTILO.borda}`,
            borderRadius: 14,
          }}
        >
          {inscricoesFiltradas.length === 0 ? (
            <div style={{ padding: 28, textAlign: "center" }}>
              <strong>Não existem inscrições para apresentar.</strong>
              <p style={{ color: ESTILO.secundario, fontSize: 13 }}>
                As inscrições submetidas na página pública aparecerão aqui.
              </p>
            </div>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 13,
                minWidth: 750,
              }}
            >
              <thead>
                <tr style={{ background: ESTILO.fundo, textAlign: "left" }}>
                  {[
                    "Participante",
                    "Contacto",
                    "Evento (ID)",
                    "Perfil",
                    "Plataforma",
                    "Estado",
                    "Acção",
                  ].map((titulo) => (
                    <th
                      key={titulo}
                      style={{ padding: 13, color: ESTILO.escuro }}
                    >
                      {titulo}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {inscricoesFiltradas.map((item) => (
                  <tr
                    key={item.id}
                    style={{ borderTop: `1px solid ${ESTILO.borda}` }}
                  >
                    <td style={{ padding: 13 }}>
                      <strong>{item.nome}</strong>
                      <div
                        style={{
                          color: ESTILO.secundario,
                          fontSize: 11,
                        }}
                      >
                        {item.provincia || "Província não indicada"}
                      </div>
                    </td>

                    <td style={{ padding: 13 }}>
                      {item.email}
                      <div>{item.telefone || ""}</div>
                    </td>

                    <td style={{ padding: 13 }}>{item.evento_id}</td>
                    <td style={{ padding: 13 }}>{item.perfil || "—"}</td>
                    <td style={{ padding: 13 }}>{item.plataforma || "—"}</td>
                    <td style={{ padding: 13 }}>{item.estado}</td>

                    <td style={{ padding: 13 }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 8,
                          minWidth: 145,
                        }}
                      >
                        <select
                          aria-label={`Estado da inscrição de ${item.nome}`}
                          style={{ ...campo, minWidth: 130 }}
                          value={item.estado}
                          onChange={(e) =>
                            void alterarInscricao(item, e.target.value)
                          }
                        >
                          <option value="pendente">Pendente</option>
                          <option value="confirmada">Confirmada</option>
                          <option value="rejeitada">Rejeitada</option>
                        </select>

                        <button
                          type="button"
                          style={{
                            ...botao,
                            color: "#b91c1c",
                            borderColor: "#fecaca",
                            background: "#fff",
                          }}
                          onClick={() =>
                            void eliminar("inscricao", item.id)
                          }
                        >
                          Eliminar inscrição
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </section>
  );
}
