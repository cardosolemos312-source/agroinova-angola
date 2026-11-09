
"use client";

import { useCallback, useEffect, useState, type FormEvent, type CSSProperties } from "react";

type Registo = Record<string, unknown>;

type Modulo = {
  id: string;
  titulo: string;
  descricao: string;
  endpoint: string;
  chave: string;
};

type FormularioIndicador = {
  id: string;
  dataset_id: string;
  codigo: string;
  nome: string;
  descricao: string;
  categoria: string;
  subcategoria: string;
  unidade: string;
  formula: string;
  periodicidade: string;
  natureza: string;
  estado: string;
};

const FORMULARIO_VAZIO: FormularioIndicador = {
  id: "",
  dataset_id: "",
  codigo: "",
  nome: "",
  descricao: "",
  categoria: "",
  subcategoria: "",
  unidade: "",
  formula: "",
  periodicidade: "",
  natureza: "estatistica_oficial",
  estado: "rascunho",
};

const MODULOS: Modulo[] = [
  {
    id: "campanhas",
    titulo: "Campanhas agrícolas",
    descricao: "Gestão das campanhas agrícolas nacionais.",
    endpoint: "/api/admin/dados-agropecuarios/referencias",
    chave: "campanhas",
  },
  {
    id: "levantamentos",
    titulo: "Levantamentos provinciais",
    descricao: "Gestão dos levantamentos agrícolas por campanha, província e cultura.",
    endpoint: "/api/admin/dados-agropecuarios/levantamentos",
    chave: "levantamentos",
  },
  {
    id: "datasets",
    titulo: "Conjuntos de dados",
    descricao: "Criação e gestão de conjuntos de dados agropecuários.",
    endpoint: "/api/admin/dados-agropecuarios/datasets",
    chave: "datasets",
  },
  {
    id: "fontes",
    titulo: "Fontes bibliográficas",
    descricao: "Fontes oficiais, científicas e institucionais.",
    endpoint: "/api/admin/dados-agropecuarios/fontes",
    chave: "fontes",
  },
  {
    id: "datasets-fontes",
    titulo: "Fontes dos datasets",
    descricao: "Associação entre conjuntos de dados e respectivas fontes.",
    endpoint: "/api/admin/dados-agropecuarios/datasets/fontes",
    chave: "associacoes",
  },
  {
    id: "indicadores",
    titulo: "Indicadores",
    descricao: "Indicadores e estatísticas agropecuárias.",
    endpoint: "/api/admin/dados-agropecuarios/indicadores",
    chave: "indicadores",
  },
  {
    id: "observacoes",
    titulo: "Observações de campo",
    descricao: "Registos, medições e observações realizadas no terreno.",
    endpoint: "/api/admin/dados-agropecuarios/observacoes",
    chave: "observacoes",
  },
  {
    id: "estudos",
    titulo: "Estudos e investigações",
    descricao: "Investigação científica, ensaios e relatórios técnicos.",
    endpoint: "/api/admin/dados-agropecuarios/estudos",
    chave: "estudos",
  },
  {
    id: "estudos-fontes",
    titulo: "Fontes dos estudos",
    descricao: "Associação entre estudos e respectivas referências.",
    endpoint: "/api/admin/dados-agropecuarios/estudos/fontes",
    chave: "associacoes",
  },
  {
    id: "imagens",
    titulo: "Imagens dos estudos",
    descricao: "Fotografias, legendas e registos visuais dos estudos.",
    endpoint: "/api/admin/dados-agropecuarios/estudos/imagens",
    chave: "imagens",
  },
];

const CORES = {
  verde: "#166534",
  verdeEscuro: "#14532d",
  fundo: "#f5f7f6",
  texto: "#17221b",
  secundario: "#64748b",
  borda: "#e2e8f0",
};
type FormularioObservacao = {
  id: string;
  indicador_id: string;
  dataset_id: string;
  escala: string;
  campanha_id: string;
  levantamento_id: string;
  cultura_id: string;
  provincia_id: string;
  municipio_id: string;
  comuna_id: string;
  provincia: string;
  municipio: string;
  comuna: string;
  localidade: string;
  entidade: string;
  exploracao: string;
  periodo_inicio: string;
  periodo_fim: string;
  data_referencia: string;
  valor: string;
  unidade: string;
  tamanho_amostra: string;
  margem_erro: string;
  nivel_confianca: string;
  metodologia: string;
  natureza: string;
  estado: string;
  observacoes: string;
};

const FORMULARIO_OBSERVACAO_VAZIO: FormularioObservacao = {
  id: "",
  indicador_id: "",
  dataset_id: "",
  escala: "nacional",
  campanha_id: "",
  levantamento_id: "",
  cultura_id: "",
  provincia_id: "",
  municipio_id: "",
  comuna_id: "",
  provincia: "",
  municipio: "",
  comuna: "",
  localidade: "",
  entidade: "",
  exploracao: "",
  periodo_inicio: "",
  periodo_fim: "",
  data_referencia: "",
  valor: "",
  unidade: "",
  tamanho_amostra: "",
  margem_erro: "",
  nivel_confianca: "",
  metodologia: "",
  natureza: "observacao_campo",
  estado: "rascunho",
  observacoes: "",
};
type FormularioEstudo = {
  id: string;
  titulo: string;
  resumo: string;
  objectivo: string;
  categoria: string;
  subcategoria: string;
  autores: string;
  instituicao: string;
  provincia: string;
  municipio: string;
  comuna: string;
  localidade: string;
  data_inicio: string;
  data_fim: string;
  metodologia: string;
  materiais_metodos: string;
  resultados: string;
  discussao: string;
  conclusoes: string;
  recomendacoes: string;
  limitacoes: string;
  palavras_chave: string;
  natureza: string;
  estado: string;
  documento_url: string;
  destaque: boolean;
};

const ESTUDO_VAZIO: FormularioEstudo = {
  id: "",
  titulo: "",
  resumo: "",
  objectivo: "",
  categoria: "",
  subcategoria: "",
  autores: "",
  instituicao: "",
  provincia: "",
  municipio: "",
  comuna: "",
  localidade: "",
  data_inicio: "",
  data_fim: "",
  metodologia: "",
  materiais_metodos: "",
  resultados: "",
  discussao: "",
  conclusoes: "",
  recomendacoes: "",
  limitacoes: "",
  palavras_chave: "",
  natureza: "investigacao",
  estado: "rascunho",
  documento_url: "",
  destaque: false,
};

type FormularioImagem = {
  id: string;
  estudo_id: string;
  indicador_id: string;
  url: string;
  legenda: string;
  descricao: string;
  provincia: string;
  municipio: string;
  data_registo: string;
  ordem: string;
};

const IMAGEM_VAZIA: FormularioImagem = {
  id: "",
  estudo_id: "",
  indicador_id: "",
  url: "",
  legenda: "",
  descricao: "",
  provincia: "",
  municipio: "",
  data_registo: "",
  ordem: "1",
};

function extrairRegistos(
  resposta: Record<string, unknown>,
  chave: string
): Registo[] {
  if (Array.isArray(resposta[chave])) {
    return resposta[chave] as Registo[];
  }

  for (const valor of Object.values(resposta)) {
    if (Array.isArray(valor)) {
      return valor as Registo[];
    }
  }

  return [];
}

function valorTexto(valor: unknown): string {
  return typeof valor === "string" ? valor : "";
}

function campoDoRegisto(
  registo: Registo,
  campo: keyof FormularioIndicador
): string {
  return valorTexto(registo[campo]);
}

function Campo({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  maxLength,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (valor: string) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  type?: string;
}) {
  return (
    <label style={estiloCampo}>
      <span style={estiloLabel}>
        {label}{required ? " *" : ""}
      </span>
      <input
        type={type}
        step={type === "number" ? "any" : undefined}
        value={value}
        onChange={(evento) => onChange(evento.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        style={estiloInput}
      />
    </label>
  );
}

export default function DadosAgropecuariosAdmin() {
  const [moduloId, setModuloId] = useState("indicadores");
  const [registos, setRegistos] = useState<Registo[]>([]);
  const [json, setJson] = useState("{}");
  const [formulario, setFormulario] =
    useState<FormularioIndicador>(FORMULARIO_VAZIO);
  const [formularioDataset, setFormularioDataset] = useState({
    id: "",
    titulo: "",
    descricao: "",
    categoria: "",
    subcategoria: "",
    periodo_inicio: "",
    periodo_fim: "",
    escala: "nacional",
    natureza: "estatistica_oficial",
    estado: "rascunho",
  });
  const [formularioCampanha, setFormularioCampanha] = useState({
    id: "",
    codigo: "",
    nome: "",
    periodo_inicio: "",
    periodo_fim: "",
    estado: "activa",
    descricao: "",
  });

  const [formularioLevantamento, setFormularioLevantamento] = useState({
    id: "",
    campanha_id: "",
    provincia_id: "",
    cultura_id: "",
    periodo_inicio: "",
    periodo_fim: "",
    estado: "planeado",
    descricao: "",
  });
  const [formularioObservacao, setFormularioObservacao] = useState<FormularioObservacao>(FORMULARIO_OBSERVACAO_VAZIO);
  const [formularioEstudo, setFormularioEstudo] = useState<FormularioEstudo>(ESTUDO_VAZIO);
  const [formularioImagem, setFormularioImagem] = useState<FormularioImagem>(IMAGEM_VAZIA);
  const [estudosDisponiveis, setEstudosDisponiveis] = useState<Registo[]>([]);
  const [indicadoresDisponiveis, setIndicadoresDisponiveis] = useState<Registo[]>([]);
  const [imagensIndicador, setImagensIndicador] = useState<Registo[]>([]);
  const [carregandoImagensIndicador, setCarregandoImagensIndicador] = useState(false);
  const [guardandoImagemIndicador, setGuardandoImagemIndicador] = useState(false);
  const [datasetsDisponiveis, setDatasetsDisponiveis] = useState<Registo[]>([]);
  const [campanhasDisponiveis, setCampanhasDisponiveis] = useState<Registo[]>([]);
  const [levantamentosDisponiveis, setLevantamentosDisponiveis] = useState<Registo[]>([]);
const [culturasDisponiveis, setCulturasDisponiveis] = useState<Registo[]>([]);
const [provinciasDisponiveis, setProvinciasDisponiveis] = useState<Registo[]>([]);
const [municipiosDisponiveis, setMunicipiosDisponiveis] = useState<Registo[]>([]);
const [comunasDisponiveis, setComunasDisponiveis] = useState<Registo[]>([]);
  const [fontesDisponiveis, setFontesDisponiveis] = useState<Registo[]>([]);
    const [formularioDatasetFonte, setFormularioDatasetFonte] = useState({
    dataset_id: "",
    fonte_id: "",
    citacao: "",
  });

  const [formularioFonte, setFormularioFonte] = useState({
    titulo: "",
    entidade: "",
    tipo: "bibliografica",
    autor: "",
    ano: "",
    url: "",
    referencia: "",
    observacoes: "",
  });
  const [formularioEstudoFonte, setFormularioEstudoFonte] = useState({
    estudo_id: "",
    fonte_id: "",
    citacao: "",
  });
  const [carregando, setCarregando] = useState(false);
  const [aGuardar, setAGuardar] = useState(false);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [seleccionado, setSeleccionado] = useState<number | null>(null);

  const modulo =
    MODULOS.find((item) => item.id === moduloId) ?? MODULOS[0];
    const MODULOS_PRINCIPAIS = MODULOS.filter((item) =>
  ["datasets", "campanhas", "levantamentos", "fontes", "indicadores", "observacoes", "estudos"].includes(item.id)
);

  const carregar = useCallback(async () => {
    setCarregando(true);
    setErro("");
    setMensagem("");
    setSeleccionado(null);
    setJson("{}");
    setFormulario(FORMULARIO_VAZIO);
    setFormularioEstudoFonte({
      estudo_id: "",
      fonte_id: "",
      citacao: "",
    });

    try {
      const resposta = await fetch(modulo.endpoint, {
        method: "GET",
        cache: "no-store",
      });

      const dados = await resposta.json();

      if (!resposta.ok || dados.sucesso === false) {
        throw new Error(
          dados.erro || "Não foi possível carregar os registos."
        );
      }

      setRegistos(extrairRegistos(dados, modulo.chave));
    } catch (erroDesconhecido) {
      setErro(
        erroDesconhecido instanceof Error
          ? erroDesconhecido.message
          : "Erro ao comunicar com o servidor."
      );
      setRegistos([]);
    } finally {
      setCarregando(false);
    }
  }, [modulo]);


  useEffect(() => {
    async function carregarFontesBibliograficas() {
      try {
        const resposta = await fetch(
          "/api/admin/dados-agropecuarios/fontes",
          { cache: "no-store" }
        );
        const dados = await resposta.json();

        if (!resposta.ok || dados.sucesso === false) {
          throw new Error(dados.erro || "Não foi possível carregar as fontes.");
        }

        setFontesDisponiveis(
          Array.isArray(dados.fontes)
            ? dados.fontes
            : Array.isArray(dados.dados)
              ? dados.dados
              : []
        );
      } catch (erro) {
        console.error("Erro ao carregar fontes bibliográficas:", erro);
        setFontesDisponiveis([]);
      }
    }

    void carregarFontesBibliograficas();
  }, []);
  useEffect(() => {
    void carregar();
  }, [carregar]);

  useEffect(() => {
    async function carregarDatasets() {
      try {
        const resposta = await fetch(
          "/api/admin/dados-agropecuarios/datasets",
          { cache: "no-store" }
        );

        const dados = await resposta.json();

        if (!resposta.ok || dados.sucesso === false) {
          throw new Error(dados.erro || "Não foi possível carregar os conjuntos de dados.");
        }

        setDatasetsDisponiveis(
          Array.isArray(dados.datasets) ? dados.datasets : []
        );
      } catch (erro) {
        console.error("Erro ao carregar conjuntos de dados:", erro);
        setDatasetsDisponiveis([]);
      }
    }

    void carregarDatasets();
  }, []);

  useEffect(() => {
    async function carregarReferencias() {
      try {
        const resposta = await fetch(
          "/api/admin/dados-agropecuarios/referencias",
          { cache: "no-store" }
        );
        const dados = await resposta.json();

        if (!resposta.ok || dados.sucesso === false) {
          throw new Error(dados.erro || "NÃ£o foi possÃ­vel carregar as referÃªncias.");
        }

        setCampanhasDisponiveis(dados.campanhas ?? []);
        setLevantamentosDisponiveis(dados.levantamentos ?? []);
        setCulturasDisponiveis(dados.culturas ?? []);
        setProvinciasDisponiveis(dados.provincias ?? []);
        setMunicipiosDisponiveis(dados.municipios ?? []);
        setComunasDisponiveis(dados.comunas ?? []);
      } catch (erro) {
        console.error("Erro ao carregar referÃªncias agropecuÃ¡rias:", erro);
      }
    }

    void carregarReferencias();
  }, []);
  useEffect(() => {
    async function carregarIndicadores() {
      try {
        const resposta = await fetch(
          "/api/admin/dados-agropecuarios/indicadores",
          { cache: "no-store" }
        );

        const dados = await resposta.json();

        if (!resposta.ok || dados.sucesso === false) {
          throw new Error(
            dados.erro || "Não foi possível carregar os indicadores."
          );
        }

        setIndicadoresDisponiveis(
          Array.isArray(dados.indicadores) ? dados.indicadores : []
        );
      } catch (erro) {
        console.error("Erro ao carregar indicadores:", erro);
        setIndicadoresDisponiveis([]);
      }
    }

    void carregarIndicadores();
  }, []);
  useEffect(() => {
    async function carregarEstudosDisponiveis() {
      try {
        const resposta = await fetch(
          "/api/admin/dados-agropecuarios/estudos",
          { cache: "no-store" }
        );
        const dados = await resposta.json();

        if (!resposta.ok || dados.sucesso === false) {
          throw new Error(dados.erro || "Não foi possível carregar os estudos.");
        }

        setEstudosDisponiveis(
          Array.isArray(dados.dados) ? dados.dados :
          Array.isArray(dados.estudos) ? dados.estudos : []
        );
      } catch (erro) {
        console.error("Erro ao carregar estudos:", erro);
        setEstudosDisponiveis([]);
      }
    }

    void carregarEstudosDisponiveis();
  }, []);

  function alterarCampo(
    campo: keyof FormularioIndicador,
    valor: string
  ) {
    setFormulario((actual) => ({
      ...actual,
      [campo]: valor,
    }));
  }

  function alterarIndicadorObservacao(indicadorId: string) {
    const indicador = indicadoresDisponiveis.find(
      (item) => String(item.id) === indicadorId
    );

    setFormularioObservacao((anterior) => ({
      ...anterior,
      indicador_id: indicadorId,
      dataset_id: indicador?.dataset_id
        ? String(indicador.dataset_id)
        : anterior.dataset_id,
      unidade: indicador?.unidade
        ? String(indicador.unidade)
        : anterior.unidade,
    }));
  }
  function prepararEdicao(registo: Registo, indice: number) {
    setSeleccionado(indice);
    setMensagem("");
    setErro("");

    if (moduloId === "indicadores") {
      setFormulario({
        id: campoDoRegisto(registo, "id"),
        dataset_id: campoDoRegisto(registo, "dataset_id"),
        codigo: campoDoRegisto(registo, "codigo"),
        nome: campoDoRegisto(registo, "nome"),
        descricao: campoDoRegisto(registo, "descricao"),
        categoria: campoDoRegisto(registo, "categoria"),
        subcategoria: campoDoRegisto(registo, "subcategoria"),
        unidade: campoDoRegisto(registo, "unidade"),
        formula: campoDoRegisto(registo, "formula"),
        periodicidade: campoDoRegisto(registo, "periodicidade"),
        natureza: campoDoRegisto(registo, "natureza") || "estatistica_oficial",
        estado: campoDoRegisto(registo, "estado") || "rascunho",
      });
    } else if (moduloId === "datasets") {
      setFormularioDataset({
        id: String(registo.id ?? ""),
        titulo: String(registo.titulo ?? ""),
        descricao: String(registo.descricao ?? ""),
        categoria: String(registo.categoria ?? ""),
        subcategoria: String(registo.subcategoria ?? ""),
        periodo_inicio: String(registo.periodo_inicio ?? "").slice(0, 10),
        periodo_fim: String(registo.periodo_fim ?? "").slice(0, 10),
        escala: String(registo.escala ?? "nacional"),
        natureza: String(registo.natureza ?? "estatistica_oficial"),
        estado: String(registo.estado ?? "rascunho"),
      });
          } else if (moduloId === "levantamentos") {
      setFormularioLevantamento({
        id: String(registo.id ?? ""),
        campanha_id: String(registo.campanha_id ?? ""),
        provincia_id: String(registo.provincia_id ?? ""),
        cultura_id: String(registo.cultura_id ?? ""),
        periodo_inicio: String(registo.periodo_inicio ?? "").slice(0, 10),
        periodo_fim: String(registo.periodo_fim ?? "").slice(0, 10),
        estado: String(registo.estado ?? "planeado"),
        descricao: String(registo.descricao ?? ""),
      });
          } else if (moduloId === "campanhas") {
      setFormularioCampanha({
        id: String(registo.id ?? ""),
        codigo: String(registo.codigo ?? ""),
        nome: String(registo.nome ?? ""),
        periodo_inicio: String(registo.periodo_inicio ?? "").slice(0, 10),
        periodo_fim: String(registo.periodo_fim ?? "").slice(0, 10),
        estado: String(registo.estado ?? "activa"),
        descricao: String(registo.descricao ?? ""),
      });
    } else if (moduloId === "fontes") {
      setFormularioFonte({
        titulo: String(registo.titulo ?? ""),
        entidade: String(registo.entidade ?? ""),
        tipo: String(registo.tipo ?? "bibliografica"),
        autor: String(registo.autor ?? ""),
        ano: String(registo.ano ?? ""),
        url: String(registo.url ?? ""),
        referencia: String(registo.referencia ?? ""),
        observacoes: String(registo.observacoes ?? ""),
      });
    } else if (moduloId === "datasets-fontes") {
      setFormularioDatasetFonte({
        dataset_id: String(registo.dataset_id ?? ""),
        fonte_id: String(registo.fonte_id ?? ""),
        citacao: String(registo.citacao ?? ""),
      });
    } else if (moduloId === "estudos-fontes") {
      setFormularioEstudoFonte({
        estudo_id: String(registo.estudo_id ?? ""),
        fonte_id: String(registo.fonte_id ?? ""),
        citacao: String(registo.citacao ?? ""),
      });
    } else if (moduloId === "observacoes") {
      setFormularioObservacao({
        id: String(registo.id ?? ""),
        indicador_id: String(registo.indicador_id ?? ""),
        dataset_id: String(registo.dataset_id ?? ""),
        escala: String(registo.escala ?? "nacional"),
        campanha_id: String(registo.campanha_id ?? ""),
        levantamento_id: String(registo.levantamento_id ?? ""),
        cultura_id: String(registo.cultura_id ?? ""),
        provincia_id: String(registo.provincia_id ?? ""),
        municipio_id: String(registo.municipio_id ?? ""),
        comuna_id: String(registo.comuna_id ?? ""),
        provincia: String(registo.provincia ?? ""),
        municipio: String(registo.municipio ?? ""),
        comuna: String(registo.comuna ?? ""),
        localidade: String(registo.localidade ?? ""),
        entidade: String(registo.entidade ?? ""),
        exploracao: String(registo.exploracao ?? ""),
        periodo_inicio: String(registo.periodo_inicio ?? "").slice(0, 10),
        periodo_fim: String(registo.periodo_fim ?? "").slice(0, 10),
        data_referencia: String(registo.data_referencia ?? "").slice(0, 10),
        valor: String(registo.valor ?? ""),
        unidade: String(registo.unidade ?? ""),
        tamanho_amostra: String(registo.tamanho_amostra ?? ""),
        margem_erro: String(registo.margem_erro ?? ""),
        nivel_confianca: String(registo.nivel_confianca ?? ""),
        metodologia: String(registo.metodologia ?? ""),
        natureza: String(registo.natureza ?? "observacao_campo"),
        estado: String(registo.estado ?? "rascunho"),
        observacoes: String(registo.observacoes ?? ""),
      });
    } else if (moduloId === "estudos") {
      setFormularioEstudo({
        id: String(registo.id ?? ""),
        titulo: String(registo.titulo ?? ""),
        resumo: String(registo.resumo ?? ""),
        objectivo: String(registo.objectivo ?? ""),
        categoria: String(registo.categoria ?? ""),
        subcategoria: String(registo.subcategoria ?? ""),
        autores: String(registo.autores ?? ""),
        instituicao: String(registo.instituicao ?? ""),
        provincia: String(registo.provincia ?? ""),
        municipio: String(registo.municipio ?? ""),
        comuna: String(registo.comuna ?? ""),
        localidade: String(registo.localidade ?? ""),
        data_inicio: String(registo.data_inicio ?? "").slice(0, 10),
        data_fim: String(registo.data_fim ?? "").slice(0, 10),
        metodologia: String(registo.metodologia ?? ""),
        materiais_metodos: String(registo.materiais_metodos ?? ""),
        resultados: String(registo.resultados ?? ""),
        discussao: String(registo.discussao ?? ""),
        conclusoes: String(registo.conclusoes ?? ""),
        recomendacoes: String(registo.recomendacoes ?? ""),
        limitacoes: String(registo.limitacoes ?? ""),
        palavras_chave: Array.isArray(registo.palavras_chave)
          ? registo.palavras_chave.join(", ")
          : "",
        natureza: String(registo.natureza ?? "investigacao"),
        estado: String(registo.estado ?? "rascunho"),
        documento_url: String(registo.documento_url ?? ""),
        destaque: Boolean(registo.destaque),
      });
    } else if (moduloId === "imagens") {
      setFormularioImagem({
        id: String(registo.id ?? ""),
        estudo_id: String(registo.estudo_id ?? ""),
        indicador_id: String(registo.indicador_id ?? ""),
        url: String(registo.url ?? ""),
        legenda: String(registo.legenda ?? ""),
        descricao: String(registo.descricao ?? ""),
        provincia: String(registo.provincia ?? ""),
        municipio: String(registo.municipio ?? ""),
        data_registo: String(registo.data_registo ?? "").slice(0, 10),
        ordem: String(registo.ordem ?? "0"),
      });
    } else {
      setJson(JSON.stringify(registo, null, 2));
    }
  }
  async function eliminarCampanha(id: string) {
    if (!window.confirm("Tem a certeza de que pretende eliminar esta campanha?")) return;

    setErro("");
    setMensagem("");

    try {
      const resposta = await fetch("/api/admin/dados-agropecuarios/referencias", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const resultado = await resposta.json();

      if (!resposta.ok || resultado.sucesso === false) {
        throw new Error(resultado.erro || "Não foi possível eliminar a campanha.");
      }

      setMensagem("Campanha eliminada com sucesso.");
      await carregar();
    } catch (erroDesconhecido) {
      setErro(erroDesconhecido instanceof Error ? erroDesconhecido.message : "Erro ao eliminar a campanha.");
    }
  }
  async function eliminarDataset(id: string) {
    if (!window.confirm(
      "Tem a certeza de que pretende eliminar este conjunto de dados? As associações às fontes serão removidas, mas as fontes bibliográficas serão preservadas."
    )) return;

    setErro("");
    setMensagem("");

    try {
      const resposta = await fetch("/api/admin/dados-agropecuarios/datasets", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const resultado = await resposta.json();

      if (!resposta.ok || resultado.sucesso === false) {
        throw new Error(
          resultado.erro || "Não foi possível eliminar o conjunto de dados."
        );
      }

      setSeleccionado(null);
      setMensagem(resultado.mensagem || "Conjunto de dados eliminado com sucesso.");
      await carregar();
    } catch (erroDesconhecido) {
      setErro(
        erroDesconhecido instanceof Error
          ? erroDesconhecido.message
          : "Erro ao eliminar o conjunto de dados."
      );
    }
  }
  async function eliminarFonte(id: string) {
    if (!window.confirm("Tem a certeza de que pretende eliminar esta fonte bibliográfica? A eliminação será impedida se ainda existirem relações associadas.")) return;

    setErro("");
    setMensagem("");

    try {
      const resposta = await fetch("/api/admin/dados-agropecuarios/fontes", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.erro || "Não foi possível eliminar a fonte.");
      }

      setSeleccionado(null);
      setMensagem(resultado.mensagem || "Fonte eliminada com sucesso.");
      await carregar();
    } catch (erroDesconhecido) {
      setErro(
        erroDesconhecido instanceof Error
          ? erroDesconhecido.message
          : "Erro ao eliminar a fonte."
      );
    }
  }
  async function eliminarEstudo(id: string) {
    if (!window.confirm("Tem a certeza de que pretende eliminar este estudo ou investigação? Esta operação é permanente.")) return;

    setErro("");
    setMensagem("");

    try {
      const resposta = await fetch("/api/admin/dados-agropecuarios/estudos", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.erro || "Não foi possível eliminar o estudo.");
      }

      setSeleccionado(null);
      setMensagem(resultado.mensagem || "Estudo eliminado com sucesso.");
      await carregar();
    } catch (erroDesconhecido) {
      setErro(
        erroDesconhecido instanceof Error
          ? erroDesconhecido.message
          : "Erro ao eliminar o estudo."
      );
    }
  }
  async function eliminarRegistoAgro(id: string) {
    const tipo =
      moduloId === "indicadores"
        ? "indicador"
        : moduloId === "levantamentos"
          ? "levantamento"
          : "observação";

    const endpoint =
      moduloId === "indicadores"
        ? "/api/admin/dados-agropecuarios/indicadores"
        : moduloId === "levantamentos"
          ? "/api/admin/dados-agropecuarios/levantamentos"
          : "/api/admin/dados-agropecuarios/observacoes";

    if (!window.confirm(`Tem a certeza de que pretende eliminar este ${tipo}? Esta operação é permanente.`)) return;

    setErro("");
    setMensagem("");

    try {
      const resposta = await fetch(endpoint, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const resultado = await resposta.json();

      if (!resposta.ok || resultado.sucesso === false) {
        throw new Error(resultado.erro || `Não foi possível eliminar o ${tipo}.`);
      }

      setSeleccionado(null);
      setMensagem(resultado.mensagem || `${tipo} eliminado com sucesso.`);
      await carregar();
    } catch (erroDesconhecido) {
      setErro(
        erroDesconhecido instanceof Error
          ? erroDesconhecido.message
          : `Erro ao eliminar ${tipo}.`
      );
    }
  }
  function novoRegisto() {
    setFormularioObservacao(FORMULARIO_OBSERVACAO_VAZIO);
    setFormularioEstudo(ESTUDO_VAZIO);
    setFormularioImagem(IMAGEM_VAZIA);
    setFormularioCampanha({ id: "", codigo: "", nome: "", periodo_inicio: "", periodo_fim: "", estado: "activa", descricao: "" });
    setFormularioLevantamento({
      id: "",
      campanha_id: "",
      provincia_id: "",
      cultura_id: "",
      periodo_inicio: "",
      periodo_fim: "",
      estado: "planeado",
      descricao: "",
    });
        setFormularioFonte({
      titulo: "",
      entidade: "",
      tipo: "bibliografica",
      autor: "",
      ano: "",
      url: "",
      referencia: "",
      observacoes: "",
    });
    setFormularioDatasetFonte({
      dataset_id: "",
      fonte_id: "",
      citacao: "",
    });
    setFormularioDataset({
      id: "",
      titulo: "",
      descricao: "",
      categoria: "",
      subcategoria: "",
      periodo_inicio: "",
      periodo_fim: "",
      escala: "nacional",
      natureza: "estatistica_oficial",
      estado: "rascunho",
    });
    setSeleccionado(null);
    setMensagem("");
    setErro("");
    setFormulario(FORMULARIO_VAZIO);
    setFormularioEstudoFonte({
      estudo_id: "",
      fonte_id: "",
      citacao: "",
    });
    setJson("{}");
  }

  async function guardar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    setAGuardar(true);
    setErro("");
    setMensagem("");

    try {
      let dados: Record<string, unknown>;

      if (moduloId === "indicadores") {
        dados = {
          dataset_id: formulario.dataset_id || null,
          codigo: formulario.codigo.trim() || null,
          nome: formulario.nome.trim(),
          descricao: formulario.descricao.trim() || null,
          categoria: formulario.categoria.trim(),
          subcategoria: formulario.subcategoria.trim() || null,
          unidade: formulario.unidade.trim(),
          formula: formulario.formula.trim() || null,
          periodicidade: formulario.periodicidade.trim() || null,
          natureza: formulario.natureza,
          estado: formulario.estado,
        };

        if (seleccionado !== null) {
          dados.id = formulario.id;
        }
      } else if (moduloId === "datasets") {
        dados = {
          titulo: formularioDataset.titulo.trim(),
          descricao: formularioDataset.descricao.trim() || null,
          categoria: formularioDataset.categoria.trim(),
          subcategoria: formularioDataset.subcategoria.trim() || null,
          periodo_inicio: formularioDataset.periodo_inicio || null,
          periodo_fim: formularioDataset.periodo_fim || null,
          escala: formularioDataset.escala,
          natureza: formularioDataset.natureza,
          estado: formularioDataset.estado,
        };

        if (seleccionado !== null) {
          dados.id = formularioDataset.id;
        }
              } else if (moduloId === "levantamentos") {
        if (!formularioLevantamento.campanha_id) {
          throw new Error("Seleccione a campanha.");
        }

        if (!formularioLevantamento.provincia_id) {
          throw new Error("Seleccione a província.");
        }

        if (!formularioLevantamento.cultura_id) {
          throw new Error("Seleccione a cultura.");
        }

        if (
          formularioLevantamento.periodo_inicio &&
          formularioLevantamento.periodo_fim &&
          formularioLevantamento.periodo_fim < formularioLevantamento.periodo_inicio
        ) {
          throw new Error("A data final não pode ser anterior à data inicial.");
        }

        dados = {
          campanha_id: formularioLevantamento.campanha_id,
          provincia_id: formularioLevantamento.provincia_id,
          cultura_id: formularioLevantamento.cultura_id,
          periodo_inicio: formularioLevantamento.periodo_inicio || null,
          periodo_fim: formularioLevantamento.periodo_fim || null,
          estado: formularioLevantamento.estado.trim() || "planeado",
          descricao: formularioLevantamento.descricao.trim() || null,
        };

        if (seleccionado !== null) {
          dados.id = formularioLevantamento.id;
        }
      } else if (moduloId === "campanhas") {
        if (!formularioCampanha.codigo.trim()) {
          throw new Error("Indique o código da campanha.");
        }

        if (!formularioCampanha.nome.trim()) {
          throw new Error("Indique o nome da campanha.");
        }

        dados = {
          codigo: formularioCampanha.codigo.trim(),
          nome: formularioCampanha.nome.trim(),
          periodo_inicio: formularioCampanha.periodo_inicio || null,
          periodo_fim: formularioCampanha.periodo_fim || null,
          estado: formularioCampanha.estado,
          descricao: formularioCampanha.descricao.trim() || null,
        };

        if (seleccionado !== null) {
          dados.id = formularioCampanha.id;
        }
      } else if (moduloId === "fontes") {
        if (!formularioFonte.titulo.trim()) {
          throw new Error("Indique o título da fonte bibliográfica.");
        }

        const ano = formularioFonte.ano.trim()
          ? Number(formularioFonte.ano)
          : null;

        if (
          ano !== null &&
          (!Number.isInteger(ano) || ano < 1900 || ano > 2200)
        ) {
          throw new Error("Introduza um ano válido entre 1900 e 2200.");
        }

        const url = formularioFonte.url.trim();

        if (url && !/^https?:\/\/.+/i.test(url)) {
          throw new Error("O endereço da fonte deve começar por http:// ou https://.");
        }

        dados = {
          titulo: formularioFonte.titulo.trim(),
          entidade: formularioFonte.entidade.trim() || null,
          tipo: formularioFonte.tipo,
          autor: formularioFonte.autor.trim() || null,
          ano,
          url: url || null,
          referencia: formularioFonte.referencia.trim() || null,
          observacoes: formularioFonte.observacoes.trim() || null,
        };
      } else if (moduloId === "datasets-fontes") {
        if (!formularioDatasetFonte.dataset_id) {
          throw new Error("Seleccione o conjunto de dados.");
        }
        if (!formularioDatasetFonte.fonte_id) {
          throw new Error("Seleccione a fonte bibliográfica.");
        }
        dados = {
          dataset_id: formularioDatasetFonte.dataset_id,
          fonte_id: formularioDatasetFonte.fonte_id,
          citacao: formularioDatasetFonte.citacao.trim() || null,
        };
              } else if (moduloId === "estudos-fontes") {
        if (!formularioEstudoFonte.estudo_id) {
          throw new Error("Seleccione o estudo associado.");
        }

        if (!formularioEstudoFonte.fonte_id) {
          throw new Error("Seleccione a fonte bibliográfica.");
        }

        dados = {
          estudo_id: formularioEstudoFonte.estudo_id,
          fonte_id: formularioEstudoFonte.fonte_id,
          citacao: formularioEstudoFonte.citacao.trim() || null,
        };
      } else if (moduloId === "observacoes") {
        const valorNumerico = Number(
          formularioObservacao.valor.trim().replace(",", ".")
        );

        if (!formularioObservacao.indicador_id) {
          throw new Error("Seleccione o indicador associado à observação.");
        }

        if (
          formularioObservacao.valor.trim() === "" ||
          !Number.isFinite(valorNumerico)
        ) {
          throw new Error("Introduza um valor numérico válido.");
        }

        if (!formularioObservacao.unidade.trim()) {
          throw new Error("Indique a unidade de medida.");
        }

        const numeroOpcional = (valor: string) => {
          if (valor.trim() === "") return null;
          const numero = Number(valor);

          if (!Number.isFinite(numero)) {
            throw new Error("Verifique os campos numéricos opcionais.");
          }

          return numero;
        };

        dados = {
          indicador_id: formularioObservacao.indicador_id,
          dataset_id: formularioObservacao.dataset_id || null,
          campanha_id: formularioObservacao.campanha_id || null,
          levantamento_id: formularioObservacao.levantamento_id || null,
          cultura_id: formularioObservacao.cultura_id || null,
          escala: formularioObservacao.escala,
          provincia_id: formularioObservacao.provincia_id || null,
          municipio_id: formularioObservacao.municipio_id || null,
          comuna_id: formularioObservacao.comuna_id || null,
          provincia: formularioObservacao.provincia.trim() || null,
          municipio: formularioObservacao.municipio.trim() || null,
          comuna: formularioObservacao.comuna.trim() || null,
          localidade: formularioObservacao.localidade.trim() || null,
          entidade: formularioObservacao.entidade.trim() || null,
          exploracao: formularioObservacao.exploracao.trim() || null,
          periodo_inicio: formularioObservacao.periodo_inicio || null,
          periodo_fim: formularioObservacao.periodo_fim || null,
          data_referencia: formularioObservacao.data_referencia || null,
          valor: valorNumerico,
          unidade: formularioObservacao.unidade.trim(),
          tamanho_amostra: numeroOpcional(formularioObservacao.tamanho_amostra),
          margem_erro: numeroOpcional(formularioObservacao.margem_erro),
          nivel_confianca: numeroOpcional(formularioObservacao.nivel_confianca),
          metodologia: formularioObservacao.metodologia.trim() || null,
          natureza: formularioObservacao.natureza,
          estado: formularioObservacao.estado,
          observacoes: formularioObservacao.observacoes.trim() || null,
        };

        if (seleccionado !== null) {
          dados.id = formularioObservacao.id;
        }
      } else if (moduloId === "estudos") {
        if (!formularioEstudo.titulo.trim()) {
          throw new Error("Indique o título do estudo.");
        }
        if (!formularioEstudo.categoria.trim()) {
          throw new Error("Indique a categoria do estudo.");
        }

        dados = {
          titulo: formularioEstudo.titulo.trim(),
          resumo: formularioEstudo.resumo.trim() || null,
          objectivo: formularioEstudo.objectivo.trim() || null,
          categoria: formularioEstudo.categoria.trim(),
          subcategoria: formularioEstudo.subcategoria.trim() || null,
          autores: formularioEstudo.autores.trim() || null,
          instituicao: formularioEstudo.instituicao.trim() || null,
          provincia: formularioEstudo.provincia.trim() || null,
          municipio: formularioEstudo.municipio.trim() || null,
          comuna: formularioEstudo.comuna.trim() || null,
          localidade: formularioEstudo.localidade.trim() || null,
          data_inicio: formularioEstudo.data_inicio || null,
          data_fim: formularioEstudo.data_fim || null,
          metodologia: formularioEstudo.metodologia.trim() || null,
          materiais_metodos: formularioEstudo.materiais_metodos.trim() || null,
          resultados: formularioEstudo.resultados.trim() || null,
          discussao: formularioEstudo.discussao.trim() || null,
          conclusoes: formularioEstudo.conclusoes.trim() || null,
          recomendacoes: formularioEstudo.recomendacoes.trim() || null,
          limitacoes: formularioEstudo.limitacoes.trim() || null,
          palavras_chave: formularioEstudo.palavras_chave
            .split(",").map((item) => item.trim()).filter(Boolean),
          natureza: formularioEstudo.natureza,
          estado: formularioEstudo.estado,
          documento_url: formularioEstudo.documento_url.trim() || null,
          destaque: formularioEstudo.destaque,
        };

        if (seleccionado !== null) dados.id = formularioEstudo.id;
      } else if (moduloId === "imagens") {
        if (!formularioImagem.estudo_id) {
          throw new Error("Seleccione o estudo associado à imagem.");
        }
        if (!formularioImagem.url.trim()) {
          throw new Error("Indique o URL da imagem.");
        }

        dados = {
          estudo_id: formularioImagem.estudo_id,
          url: formularioImagem.url.trim(),
          legenda: formularioImagem.legenda.trim() || null,
          descricao: formularioImagem.descricao.trim() || null,
          provincia: formularioImagem.provincia.trim() || null,
          municipio: formularioImagem.municipio.trim() || null,
          data_registo: formularioImagem.data_registo || null,
          ordem: Number(formularioImagem.ordem || 0),
        };

        if (seleccionado !== null) dados.id = formularioImagem.id;
      } else {
        try {
          dados = JSON.parse(json);
        } catch {
          throw new Error(
            "JSON inválido. Verifique a estrutura e as vírgulas."
          );
        }

        if (
          dados === null ||
          typeof dados !== "object" ||
          Array.isArray(dados)
        ) {
          throw new Error("O conteúdo deve ser um objecto JSON.");
        }
      }

      const resposta = await fetch(modulo.endpoint, {
        method: seleccionado === null ? "POST" : "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      const resultado = await resposta.json();

      if (!resposta.ok || resultado.sucesso === false) {
        throw new Error(
          resultado.erro || "Não foi possível guardar o registo."
        );
      }

      setMensagem(
        seleccionado === null
          ? "Registo criado com sucesso."
          : "Registo actualizado com sucesso."
      );

      await carregar();
    } catch (erroDesconhecido) {
      setErro(
        erroDesconhecido instanceof Error
          ? erroDesconhecido.message
          : "Ocorreu um erro ao guardar."
      );
    } finally {
      setAGuardar(false);
    }
  }


  useEffect(() => {
    if (moduloId !== "indicadores" || !formulario.id) {
      setImagensIndicador([]);
      return;
    }

    let activo = true;

    async function carregarImagensIndicador() {
      setCarregandoImagensIndicador(true);

      try {
        const resposta = await fetch(
          `/api/admin/dados-agropecuarios/indicadores/imagens?indicador_id=${encodeURIComponent(formulario.id)}`,
          { cache: "no-store" }
        );

        const resultado = await resposta.json();

        if (!resposta.ok) {
          throw new Error(resultado.erro || "Não foi possível carregar as imagens.");
        }

        if (activo) {
          setImagensIndicador(Array.isArray(resultado.dados) ? resultado.dados : []);
        }
      } catch (erro) {
        if (activo) {
          setImagensIndicador([]);
          setErro(erro instanceof Error ? erro.message : "Erro ao carregar imagens.");
        }
      } finally {
        if (activo) setCarregandoImagensIndicador(false);
      }
    }

    carregarImagensIndicador();

    return () => {
      activo = false;
    };
  }, [moduloId, formulario.id]);
  async function guardarImagemIndicador() {
    if (!formulario.id) {
      setErro("Guarde primeiro o indicador e volte a abri-lo para associar imagens.");
      return;
    }

    if (!formularioImagem.url.trim()) {
      setErro("Indique o URL da imagem.");
      return;
    }

    setGuardandoImagemIndicador(true);
    setErro("");
    setMensagem("");

    try {
      const dados: Record<string, unknown> = {
        indicador_id: formulario.id,
        url: formularioImagem.url.trim(),
        legenda: formularioImagem.legenda.trim() || null,
        descricao: formularioImagem.descricao.trim() || null,
        provincia: formularioImagem.provincia.trim() || null,
        municipio: formularioImagem.municipio.trim() || null,
        data_registo: formularioImagem.data_registo || null,
        ordem: Number(formularioImagem.ordem || 1),
      };

      if (formularioImagem.id) {
        dados.id = formularioImagem.id;
      }

      const resposta = await fetch(
        "/api/admin/dados-agropecuarios/indicadores/imagens",
        {
          method: formularioImagem.id ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dados),
        }
      );

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.erro || "Não foi possível guardar a imagem.");
      }

      setFormularioImagem(IMAGEM_VAZIA);
    setFormularioCampanha({ id: "", codigo: "", nome: "", periodo_inicio: "", periodo_fim: "", estado: "activa", descricao: "" });
      setMensagem(formularioImagem.id
        ? "Imagem actualizada com sucesso."
        : "Imagem adicionada com sucesso.");

      const actualizacao = await fetch(
        `/api/admin/dados-agropecuarios/indicadores/imagens?indicador_id=${encodeURIComponent(formulario.id)}`,
        { cache: "no-store" }
      );

      const dadosActualizados = await actualizacao.json();

      if (!actualizacao.ok) {
        throw new Error(dadosActualizados.erro || "Imagem guardada, mas não foi possível actualizar a galeria.");
      }

      setImagensIndicador(Array.isArray(dadosActualizados.dados) ? dadosActualizados.dados : []);
    } catch (erro) {
      setErro(erro instanceof Error ? erro.message : "Erro ao guardar imagem.");
    } finally {
      setGuardandoImagemIndicador(false);
    }
  }

  async function eliminarImagemIndicador(id: string) {
    if (!window.confirm("Tem a certeza de que pretende eliminar esta imagem?")) {
      return;
    }

    try {
      const resposta = await fetch(
        "/api/admin/dados-agropecuarios/indicadores/imagens",
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        }
      );

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.erro || "Não foi possível eliminar a imagem.");
      }

      setImagensIndicador((anteriores) =>
        anteriores.filter((imagem) => String(imagem.id) !== id)
      );

      if (formularioImagem.id === id) {
        setFormularioImagem(IMAGEM_VAZIA);
    setFormularioCampanha({ id: "", codigo: "", nome: "", periodo_inicio: "", periodo_fim: "", estado: "activa", descricao: "" });
      }

      setMensagem("Imagem eliminada com sucesso.");
      setErro("");
    } catch (erro) {
      setErro(erro instanceof Error ? erro.message : "Erro ao eliminar imagem.");
    }
  }
  return (
    <main
      style={{
        minHeight: "100vh",
        background: CORES.fundo,
        padding: "28px 24px 50px",
        color: CORES.texto,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1450, margin: "0 auto" }}>
        <a
          href="/admin"
          style={{
            display: "inline-block",
            marginBottom: 20,
            color: CORES.verde,
            fontSize: 13,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          ← Voltar ao painel administrativo
        </a>

        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 15,
            marginBottom: 25,
          }}
        >
          <div>
            <p style={textoSuperior}>
              AGROINOVA ANGOLA / ADMINISTRAÇÃO
            </p>
            <h1 style={tituloPrincipal}>Dados Agropecuários</h1>
            <p style={descricaoPrincipal}>
              Gestão da informação estatística, científica e de campo.
            </p>
          </div>

          <button
            type="button"
            onClick={() => void carregar()}
            disabled={carregando}
            style={botaoSecundario}
          >
            {carregando ? "A actualizar..." : "Actualizar registos"}
          </button>
        </header>

        <section style={grelhaModulos}>
            {MODULOS_PRINCIPAIS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setModuloId(item.id);
                setSeleccionado(null);
                setErro("");
                setMensagem("");
              }}
              style={{
                ...cartaoModulo,
                borderColor:
                  moduloId === item.id ? CORES.verde : CORES.borda,
                background:
                  moduloId === item.id ? "#f0fdf4" : "#ffffff",
              }}
            >
              <strong
                style={{
                  display: "block",
                  fontSize: 13,
                  marginBottom: 7,
                  color:
                    moduloId === item.id
                      ? CORES.verdeEscuro
                      : CORES.texto,
                }}
              >
                {item.titulo}
              </strong>
              <span style={textoCartao}>
                {item.descricao}
              </span>
            </button>
          ))}
        </section>

        <div style={grelhaConteudo}>
          <section style={painel}>
            <div style={cabecalhoPainel}>
              <div>
                <h2 style={tituloPainel}>{modulo.titulo}</h2>
                <p style={descricaoPainel}>{modulo.descricao}</p>
              </div>
              <span style={contador}>
                {registos.length} registos
              </span>
                        </div>

            {(moduloId === "datasets" ||
              moduloId === "datasets-fontes" ||
              moduloId === "estudos" ||
              moduloId === "estudos-fontes" ||
              moduloId === "imagens") && (
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginBottom: 18,
              }}>
                {(moduloId === "datasets" ||
                  moduloId === "datasets-fontes") && (
                  <>
                    {moduloId === "datasets-fontes" && (
                      <button
                        type="button"
                        onClick={() => setModuloId("datasets")}
                        style={botaoSecundario}
                      >
                        Voltar aos conjuntos de dados
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setModuloId("datasets-fontes")}
                      style={botaoSecundario}
                    >
                      Fontes associadas aos datasets
                    </button>
                  </>
                )}

                {(moduloId === "estudos" ||
                  moduloId === "estudos-fontes" ||
                  moduloId === "imagens") && (
                  <>
                    {moduloId !== "estudos" && (
                      <button
                        type="button"
                        onClick={() => setModuloId("estudos")}
                        style={botaoSecundario}
                      >
                        Voltar aos estudos
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setModuloId("estudos-fontes")}
                      style={botaoSecundario}
                    >
                      Fontes dos estudos
                    </button>
                    <button
                      type="button"
                      onClick={() => setModuloId("imagens")}
                      style={botaoSecundario}
                    >
                      Imagens dos estudos
                    </button>
                  </>
                )}
              </div>
            )}

            {erro && (
              <div style={mensagemErro} role="alert">
                {erro}
              </div>
            )}

            {carregando ? (
              <p style={textoVazio}>A carregar dados...</p>
            ) : registos.length === 0 ? (
              <p style={textoVazio}>
                Ainda não existem registos nesta secção.
              </p>
            ) : (
              <div style={{ display: "grid", gap: 9 }}>
                {registos.map((registo, indice) => {
                  const indicador = registo.indicador;
                  const nomeCampanha = String(
                    campanhasDisponiveis.find(
                      (item) => String(item.id) === String(registo.campanha_id)
                    )?.nome ?? "Campanha não identificada"
                  );

                  const nomeProvincia = String(
                    provinciasDisponiveis.find(
                      (item) => String(item.id) === String(registo.provincia_id)
                    )?.nome ?? "Província não identificada"
                  );

                  const nomeCultura = String(
                    culturasDisponiveis.find(
                      (item) => String(item.id) === String(registo.cultura_id)
                    )?.nome ?? "Cultura não identificada"
                  );

                  const tituloLevantamento =
                    `Levantamento — ${nomeCampanha} — ${nomeProvincia} — ${nomeCultura}`;

                  const nomeIndicador =
                    indicador && typeof indicador === "object"
                      ? String(
                          (indicador as Record<string, unknown>).nome ??
                          (indicador as Record<string, unknown>).codigo ??
                          ""
                        )
                      : typeof indicador === "string"
                        ? indicador
                        : "";

                  const titulo =
                    typeof registo.titulo === "string"
                      ? registo.titulo
                      : typeof registo.nome === "string"
                        ? registo.nome
                        : moduloId === "levantamentos" ? tituloLevantamento
                        : moduloId === "estudos-fontes"
                          ? `${String((registo.estudo as Record<string, unknown> | null)?.titulo ?? "Estudo sem título")} — ${String((registo.fonte as Record<string, unknown> | null)?.titulo ?? "Fonte sem título")}`
                        : moduloId === "observacoes"
                          ? `Observação de campo${registo.valor !== undefined ? ` — ${String(registo.valor)} ${String(registo.unidade ?? "")}` : ""}`
                          : nomeIndicador ||
                            (typeof registo.citacao === "string"
                              ? registo.citacao
                              : `Registo ${indice + 1}`);
                  const id =
                    registo.id ?? registo.estudo_id ?? "";

                  return (
                    <div
                      key={`${String(id)}-${indice}`}
                      style={{ display: "flex", gap: 8, alignItems: "stretch" }}
                    >
                      <button
                        type="button"
                        onClick={() => prepararEdicao(registo, indice)}
                        style={{
                          ...itemRegisto,
                          flex: 1,
                          minWidth: 0,
                          borderColor: seleccionado === indice ? CORES.verde : CORES.borda,
                          background: seleccionado === indice ? "#f0fdf4" : "#ffffff",
                        }}
                      >
                        <strong style={tituloRegisto}>{String(titulo)}</strong>
                        <span style={subtituloRegisto}>
                          {String(registo.estado ?? "Registo")}
                          {id ? ` · ${String(id)}` : ""}
                        </span>
                      </button>

                      {(moduloId === "indicadores" || moduloId === "observacoes" || moduloId === "levantamentos" || moduloId === "datasets" || moduloId === "fontes" || moduloId === "estudos") && (
                        <button
                          type="button"
                          onClick={() => void (moduloId === "estudos" ? eliminarEstudo(String(registo.id)) : moduloId === "fontes" ? eliminarFonte(String(registo.id)) : moduloId === "datasets" ? eliminarDataset(String(registo.id)) : eliminarRegistoAgro(String(registo.id)))}
                          style={{
                            border: "1px solid #fecaca",
                            background: "#fff7f7",
                            color: "#b91c1c",
                            borderRadius: 9,
                            padding: "0 13px",
                            cursor: "pointer",
                            fontWeight: 700,
                          }}
                        >
                          Eliminar
                        </button>
                      )}
                      {moduloId === "campanhas" && (
                        <button
                          type="button"
                          onClick={() => void eliminarCampanha(String(registo.id))}
                          style={{
                            border: "1px solid #fecaca",
                            background: "#fff7f7",
                            color: "#b91c1c",
                            borderRadius: 9,
                            padding: "0 13px",
                            cursor: "pointer",
                            fontWeight: 700,
                          }}
                        >
                          Eliminar
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          <section style={painel}>
            <div style={cabecalhoPainel}>
              <div>
                <h2 style={tituloPainel}>
                  {seleccionado === null
                    ? "Novo registo"
                    : "Actualizar registo"}
                </h2>
                <p style={descricaoPainel}>
                  {moduloId === "indicadores"
                    ? "Preencha os campos do indicador agropecuário."
                    : "Introduza os dados do registo."}
                </p>
              </div>

              <button
                type="button"
                onClick={novoRegisto}
                style={botaoSecundario}
              >
                Novo
              </button>
            </div>

            <form onSubmit={guardar}>
              {moduloId === "indicadores" ? (
                <>
                <div style={{ display: "grid", gap: 15 }}>
                  <div style={grelhaCampos}>
                    <Campo
                      label="Código do indicador"
                      value={formulario.codigo}
                      onChange={(v) => alterarCampo("codigo", v)}
                      placeholder="Ex.: PROD-MILHO-001"
                      maxLength={80}
                    />
                    <Campo
                      label="Nome do indicador"
                      value={formulario.nome}
                      onChange={(v) => alterarCampo("nome", v)}
                      placeholder="Ex.: Produção nacional de milho"
                      required
                      maxLength={200}
                    />
                  </div>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Conjunto de dados associado</span>
                    <select
                      value={formulario.dataset_id}
                      onChange={(e) =>
                        alterarCampo("dataset_id", e.target.value)
                      }
                      style={estiloInput}
                    >
                      <option value="">Sem conjunto de dados associado</option>
                      {datasetsDisponiveis.map((dataset) => (
                        <option
                          key={String(dataset.id)}
                          value={String(dataset.id)}
                        >
                          {String(dataset.titulo ?? "Conjunto sem título")}
                          {" — "}
                          {String(dataset.estado ?? "rascunho")}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Descrição</span>
                    <textarea
                      value={formulario.descricao}
                      onChange={(e) =>
                        alterarCampo("descricao", e.target.value)
                      }
                      placeholder="Explique o que representa este indicador..."
                      maxLength={3000}
                      rows={4}
                      style={estiloTextarea}
                    />
                  </label>

                  <div style={grelhaCampos}>
                    <Campo
                      label="Categoria"
                      value={formulario.categoria}
                      onChange={(v) => alterarCampo("categoria", v)}
                      placeholder="Ex.: Agricultura"
                      required
                      maxLength={100}
                    />
                    <Campo
                      label="Subcategoria"
                      value={formulario.subcategoria}
                      onChange={(v) => alterarCampo("subcategoria", v)}
                      placeholder="Ex.: Culturas alimentares"
                      maxLength={100}
                    />
                  </div>

                  <div style={grelhaCampos}>
                    <Campo
                      label="Unidade de medida"
                      value={formulario.unidade}
                      onChange={(v) => alterarCampo("unidade", v)}
                      placeholder="Ex.: toneladas, hectares, litros"
                      required
                      maxLength={50}
                    />
                    <Campo
                      label="Periodicidade"
                      value={formulario.periodicidade}
                      onChange={(v) => alterarCampo("periodicidade", v)}
                      placeholder="Ex.: Anual, trimestral, mensal"
                      maxLength={100}
                    />
                  </div>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Fórmula de cálculo</span>
                    <textarea
                      value={formulario.formula}
                      onChange={(e) =>
                        alterarCampo("formula", e.target.value)
                      }
                      placeholder="Descreva a fórmula, se aplicável..."
                      maxLength={1000}
                      rows={3}
                      style={estiloTextarea}
                    />
                  </label>

                  <div style={grelhaCampos}>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Natureza do indicador</span>
                      <select
                        value={formulario.natureza}
                        onChange={(e) =>
                          alterarCampo("natureza", e.target.value)
                        }
                        style={estiloInput}
                      >
                        <option value="estatistica_oficial">
                          Estatística oficial
                        </option>
                        <option value="investigacao">
                          Investigação
                        </option>
                        <option value="observacao_campo">
                          Observação de campo
                        </option>
                        <option value="estimativa">Estimativa</option>
                        <option value="administrativa">
                          Administrativa
                        </option>
                      </select>
                    </label>

                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Estado do registo</span>
                      <select
                        value={formulario.estado}
                        onChange={(e) =>
                          alterarCampo("estado", e.target.value)
                        }
                        style={estiloInput}
                      >
                        <option value="rascunho">Rascunho</option>
                        <option value="publicado">Publicado</option>
                        <option value="arquivado">Arquivado</option>
                      </select>
                    </label>
                  </div>

                  <p style={notaFormulario}>
                    Os campos assinalados com * são obrigatórios.
                    Os indicadores publicados poderão ser disponibilizados
                    nas páginas públicas quando a integração estiver concluída.
                  </p>
                </div>
                  <section style={{
                    border: "1px solid #dce9df",
                    borderRadius: 14,
                    padding: 18,
                    background: "#f8fcf9",
                    display: "grid",
                    gap: 15
                  }}>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 800, color: "#14532d" }}>
                        Imagens do indicador
                      </h3>
                      <p style={{ fontSize: 12, color: "#64748b", marginTop: 5 }}>
                        Associe fotografias, gráficos, mapas e outras imagens a este indicador.
                      </p>
                    </div>

                    {!formulario.id ? (
                      <p style={notaFormulario}>
                        Guarde primeiro o indicador. Depois, abra-o para adicionar e gerir as imagens.
                      </p>
                    ) : (
                      <>
                        <div style={{ display: "grid", gap: 12 }}>
                          <Campo
                            label="URL da imagem"
                            value={formularioImagem.url}
                            onChange={(v) => setFormularioImagem((a) => ({ ...a, url: v }))}
                            placeholder="https://..."
                            required
                          />

                          <Campo
                            label="Legenda"
                            value={formularioImagem.legenda}
                            onChange={(v) => setFormularioImagem((a) => ({ ...a, legenda: v }))}
                            placeholder="Título ou identificação da imagem"
                          />

                          <label style={estiloCampo}>
                            <span style={estiloLabel}>Descrição</span>
                            <textarea
                              value={formularioImagem.descricao}
                              onChange={(e) => setFormularioImagem((a) => ({ ...a, descricao: e.target.value }))}
                              rows={3}
                              style={estiloTextarea}
                            />
                          </label>

                          <div style={grelhaCampos}>
                            <Campo
                              label="Província"
                              value={formularioImagem.provincia}
                              onChange={(v) => setFormularioImagem((a) => ({ ...a, provincia: v }))}
                            />
                            <Campo
                              label="Município"
                              value={formularioImagem.municipio}
                              onChange={(v) => setFormularioImagem((a) => ({ ...a, municipio: v }))}
                            />
                            <Campo
                              label="Data do registo"
                              type="date"
                              value={formularioImagem.data_registo}
                              onChange={(v) => setFormularioImagem((a) => ({ ...a, data_registo: v }))}
                            />
                            <Campo
                              label="Ordem de apresentação"
                              type="number"
                              value={formularioImagem.ordem}
                              onChange={(v) => setFormularioImagem((a) => ({ ...a, ordem: v }))}
                            />
                          </div>

                          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                            <button
                              type="button"
                              disabled={guardandoImagemIndicador}
                              onClick={guardarImagemIndicador}
                              style={{
                                border: 0,
                                borderRadius: 9,
                                padding: "11px 17px",
                                background: "#166534",
                                color: "#fff",
                                fontWeight: 700,
                                cursor: "pointer",
                                opacity: guardandoImagemIndicador ? 0.6 : 1
                              }}
                            >
                              {guardandoImagemIndicador
                                ? "A guardar..."
                                : formularioImagem.id
                                  ? "Actualizar imagem"
                                  : "Adicionar imagem"}
                            </button>

                            {formularioImagem.id && (
                              <button
                                type="button"
                                onClick={() => setFormularioImagem(IMAGEM_VAZIA)}
                                style={{
                                  border: "1px solid #cbd5e1",
                                  borderRadius: 9,
                                  padding: "11px 17px",
                                  background: "#fff",
                                  color: "#334155",
                                  cursor: "pointer"
                                }}
                              >
                                Cancelar edição
                              </button>
                            )}
                          </div>
                        </div>

                        <div style={{ borderTop: "1px solid #dce9df", paddingTop: 14 }}>
                          <h4 style={{ fontWeight: 800, fontSize: 14, marginBottom: 12 }}>
                            Galeria associada ({imagensIndicador.length})
                          </h4>

                          {carregandoImagensIndicador ? (
                            <p style={{ color: "#64748b", fontSize: 13 }}>A carregar imagens...</p>
                          ) : imagensIndicador.length === 0 ? (
                            <p style={{ color: "#64748b", fontSize: 13 }}>
                              Ainda não existem imagens associadas a este indicador.
                            </p>
                          ) : (
                            <div style={{
                              display: "grid",
                              gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
                              gap: 13
                            }}>
                              {imagensIndicador.map((imagem) => (
                                <article
                                  key={String(imagem.id)}
                                  style={{
                                    background: "#fff",
                                    border: "1px solid #e2e8f0",
                                    borderRadius: 11,
                                    overflow: "hidden"
                                  }}
                                >
                                  <img
                                    src={String(imagem.url ?? "")}
                                    alt={String(imagem.legenda ?? "Imagem do indicador")}
                                    style={{
                                      width: "100%",
                                      height: 135,
                                      objectFit: "cover",
                                      display: "block"
                                    }}
                                  />
                                  <div style={{ padding: 11, display: "grid", gap: 7 }}>
                                    <strong style={{ fontSize: 13 }}>
                                      {String(imagem.legenda || "Imagem sem legenda")}
                                    </strong>
                                    {Boolean(imagem.provincia) && (
                                      <span style={{ fontSize: 11, color: "#64748b" }}>
                                        {String(imagem.provincia)}
                                        {imagem.municipio ? ` · ${String(imagem.municipio)}` : ""}
                                      </span>
                                    )}
                                    <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                                      <button
                                        type="button"
                                        onClick={() => setFormularioImagem({
                                          id: String(imagem.id ?? ""),
                                          estudo_id: "",
                                          indicador_id: formulario.id,
                                          url: String(imagem.url ?? ""),
                                          legenda: String(imagem.legenda ?? ""),
                                          descricao: String(imagem.descricao ?? ""),
                                          provincia: String(imagem.provincia ?? ""),
                                          municipio: String(imagem.municipio ?? ""),
                                          data_registo: String(imagem.data_registo ?? "").slice(0, 10),
                                          ordem: String(imagem.ordem ?? 1)
                                        })}
                                        style={{
                                          border: "1px solid #bbf7d0",
                                          background: "#f0fdf4",
                                          color: "#166534",
                                          borderRadius: 7,
                                          padding: "6px 9px",
                                          cursor: "pointer",
                                          fontSize: 11,
                                          fontWeight: 700
                                        }}
                                      >
                                        Editar
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => eliminarImagemIndicador(String(imagem.id))}
                                        style={{
                                          border: "1px solid #fecaca",
                                          background: "#fff7f7",
                                          color: "#b91c1c",
                                          borderRadius: 7,
                                          padding: "6px 9px",
                                          cursor: "pointer",
                                          fontSize: 11,
                                          fontWeight: 700
                                        }}
                                      >
                                        Eliminar
                                      </button>
                                    </div>
                                  </div>
                                </article>
                              ))}
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </section>
                </>
              ) : moduloId === "levantamentos" ? (
                <div style={{ display: "grid", gap: 15 }}>
                  <div style={grelhaCampos}>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Campanha agrícola *</span>
                      <select
                        value={formularioLevantamento.campanha_id}
                        onChange={(e) => setFormularioLevantamento((a) => ({
                          ...a,
                          campanha_id: e.target.value,
                        }))}
                        required
                        style={estiloInput}
                      >
                        <option value="">Seleccione a campanha</option>
                        {campanhasDisponiveis.map((item) => (
                          <option key={String(item.id)} value={String(item.id)}>
                            {String(item.nome ?? item.codigo ?? item.id)}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Província *</span>
                      <select
                        value={formularioLevantamento.provincia_id}
                        onChange={(e) => setFormularioLevantamento((a) => ({
                          ...a,
                          provincia_id: e.target.value,
                        }))}
                        required
                        style={estiloInput}
                      >
                        <option value="">Seleccione a província</option>
                        {provinciasDisponiveis.map((item) => (
                          <option key={String(item.id)} value={String(item.id)}>
                            {String(item.nome ?? item.id)}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Cultura agrícola *</span>
                    <select
                      value={formularioLevantamento.cultura_id}
                      onChange={(e) => setFormularioLevantamento((a) => ({
                        ...a,
                        cultura_id: e.target.value,
                      }))}
                      required
                      style={estiloInput}
                    >
                      <option value="">Seleccione a cultura</option>
                      {culturasDisponiveis.map((item) => (
                        <option key={String(item.id)} value={String(item.id)}>
                          {String(item.nome ?? item.designacao ?? item.codigo ?? item.id)}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div style={grelhaCampos}>
                    <Campo
                      label="Data de início do levantamento"
                      type="date"
                      value={formularioLevantamento.periodo_inicio}
                      onChange={(v) => setFormularioLevantamento((a) => ({
                        ...a,
                        periodo_inicio: v,
                      }))}
                    />
                    <Campo
                      label="Data de fim do levantamento"
                      type="date"
                      value={formularioLevantamento.periodo_fim}
                      onChange={(v) => setFormularioLevantamento((a) => ({
                        ...a,
                        periodo_fim: v,
                      }))}
                    />
                  </div>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Estado do levantamento</span>
                    <select
                      value={formularioLevantamento.estado}
                      onChange={(e) => setFormularioLevantamento((a) => ({
                        ...a,
                        estado: e.target.value,
                      }))}
                      style={estiloInput}
                    >
                      <option value="planeado">Planeado</option>
                      <option value="em_curso">Em curso</option>
                      <option value="concluido">Concluído</option>
                      <option value="suspenso">Suspenso</option>
                    </select>
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Descrição e enquadramento</span>
                    <textarea
                      value={formularioLevantamento.descricao}
                      onChange={(e) => setFormularioLevantamento((a) => ({
                        ...a,
                        descricao: e.target.value,
                      }))}
                      rows={4}
                      maxLength={3000}
                      style={estiloTextarea}
                      placeholder="Descreva os objectivos, a metodologia e o âmbito do levantamento provincial."
                    />
                  </label>
                </div>
              ) : moduloId === "campanhas" ? (
                <div style={{ display: "grid", gap: 15 }}>
                  <div style={grelhaCampos}>
                    <Campo
                      label="Código da campanha"
                      value={formularioCampanha.codigo}
                      onChange={(v) => setFormularioCampanha((a) => ({ ...a, codigo: v }))}
                      placeholder="Ex.: CAM-2026-2027"
                      required
                      maxLength={80}
                    />
                    <Campo
                      label="Nome da campanha"
                      value={formularioCampanha.nome}
                      onChange={(v) => setFormularioCampanha((a) => ({ ...a, nome: v }))}
                      placeholder="Ex.: Campanha Agrícola 2026/2027"
                      required
                      maxLength={200}
                    />
                  </div>

                  <div style={grelhaCampos}>
                    <Campo
                      label="Data de início"
                      type="date"
                      value={formularioCampanha.periodo_inicio}
                      onChange={(v) => setFormularioCampanha((a) => ({ ...a, periodo_inicio: v }))}
                    />
                    <Campo
                      label="Data de fim"
                      type="date"
                      value={formularioCampanha.periodo_fim}
                      onChange={(v) => setFormularioCampanha((a) => ({ ...a, periodo_fim: v }))}
                    />
                  </div>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Estado da campanha</span>
                    <select
                      value={formularioCampanha.estado}
                      onChange={(e) => setFormularioCampanha((a) => ({ ...a, estado: e.target.value }))}
                      style={estiloInput}
                    >
                      <option value="activa">Activa</option>
                      <option value="encerrada">Encerrada</option>
                    </select>
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Descrição</span>
                    <textarea
                      value={formularioCampanha.descricao}
                      onChange={(e) => setFormularioCampanha((a) => ({ ...a, descricao: e.target.value }))}
                      rows={4}
                      style={estiloTextarea}
                      placeholder="Descrição e enquadramento da campanha agrícola."
                    />
                  </label>
                </div>
              ) : moduloId === "datasets" ? (
                <div style={{ display: "grid", gap: 15 }}>
                  <Campo
                    label="Título do conjunto de dados"
                    value={formularioDataset.titulo}
                    onChange={(v) =>
                      setFormularioDataset((anterior) => ({
                        ...anterior,
                        titulo: v,
                      }))
                    }
                    placeholder="Ex.: Produção agrícola nacional"
                    required
                    maxLength={250}
                  />

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Conjunto de dados associado</span>
                    <select
                      value={formulario.dataset_id}
                      onChange={(e) =>
                        alterarCampo("dataset_id", e.target.value)
                      }
                      style={estiloInput}
                    >
                      <option value="">Sem conjunto de dados associado</option>
                      {datasetsDisponiveis.map((dataset) => (
                        <option
                          key={String(dataset.id)}
                          value={String(dataset.id)}
                        >
                          {String(dataset.titulo ?? "Conjunto sem título")}
                          {" — "}
                          {String(dataset.estado ?? "rascunho")}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Descrição</span>
                    <textarea
                      value={formularioDataset.descricao}
                      onChange={(e) =>
                        setFormularioDataset((anterior) => ({
                          ...anterior,
                          descricao: e.target.value,
                        }))
                      }
                      placeholder="Descreva o conteúdo e a finalidade deste conjunto de dados..."
                      rows={4}
                      maxLength={3000}
                      style={estiloTextarea}
                    />
                  </label>

                  <div style={grelhaCampos}>
                    <Campo
                      label="Categoria"
                      value={formularioDataset.categoria}
                      onChange={(v) =>
                        setFormularioDataset((anterior) => ({
                          ...anterior,
                          categoria: v,
                        }))
                      }
                      placeholder="Ex.: Agricultura"
                      required
                      maxLength={100}
                    />
                    <Campo
                      label="Subcategoria"
                      value={formularioDataset.subcategoria}
                      onChange={(v) =>
                        setFormularioDataset((anterior) => ({
                          ...anterior,
                          subcategoria: v,
                        }))
                      }
                      placeholder="Ex.: Produção de cereais"
                      maxLength={100}
                    />
                  </div>

                  <div style={grelhaCampos}>
                    <Campo
                      label="Data inicial do período"
                      value={formularioDataset.periodo_inicio}
                      onChange={(v) =>
                        setFormularioDataset((anterior) => ({
                          ...anterior,
                          periodo_inicio: v,
                        }))
                      }
                      type="date"
                    />
                    <Campo
                      label="Data final do período"
                      value={formularioDataset.periodo_fim}
                      onChange={(v) =>
                        setFormularioDataset((anterior) => ({
                          ...anterior,
                          periodo_fim: v,
                        }))
                      }
                      type="date"
                    />
                  </div>

                  <div style={grelhaCampos}>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Escala geográfica</span>
                      <select
                        value={formularioDataset.escala}
                        onChange={(e) =>
                          setFormularioDataset((anterior) => ({
                            ...anterior,
                            escala: e.target.value,
                          }))
                        }
                        style={estiloInput}
                      >
                        <option value="nacional">Nacional</option>
                        <option value="provincial">Provincial</option>
                        <option value="municipal">Municipal</option>
                        <option value="comunal">Comunal</option>
                        <option value="local">Local</option>
                      </select>
                    </label>

                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Natureza dos dados</span>
                      <select
                        value={formularioDataset.natureza}
                        onChange={(e) =>
                          setFormularioDataset((anterior) => ({
                            ...anterior,
                            natureza: e.target.value,
                          }))
                        }
                        style={estiloInput}
                      >
                        <option value="estatistica_oficial">Estatística oficial</option>
                        <option value="investigacao">Investigação</option>
                        <option value="observacao_campo">Observação de campo</option>
                        <option value="estimativa">Estimativa</option>
                        <option value="administrativa">Administrativa</option>
                      </select>
                    </label>
                  </div>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Estado do conjunto de dados</span>
                    <select
                      value={formularioDataset.estado}
                      onChange={(e) =>
                        setFormularioDataset((anterior) => ({
                          ...anterior,
                          estado: e.target.value,
                        }))
                      }
                      style={estiloInput}
                    >
                      <option value="rascunho">Rascunho</option>
                      <option value="publicado">Publicado</option>
                      <option value="arquivado">Arquivado</option>
                    </select>
                  </label>

                  <p style={notaFormulario}>
                    Os conjuntos de dados organizam indicadores, observações e
                    respectivas fontes bibliográficas. A publicação deve respeitar
                    a natureza e a validação da informação.
                  </p>
                </div>
                              ) : moduloId === "fontes" ? (
                <div style={{ display: "grid", gap: 16 }}>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Título da fonte bibliográfica *</span>
                    <input
                      type="text"
                      value={formularioFonte.titulo}
                      onChange={(e) => setFormularioFonte((a) => ({
                        ...a, titulo: e.target.value,
                      }))}
                      required
                      maxLength={500}
                      style={estiloInput}
                      placeholder="Ex.: Relatório de Estatísticas Agropecuárias"
                    />
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Entidade responsável</span>
                    <input
                      type="text"
                      value={formularioFonte.entidade}
                      onChange={(e) => setFormularioFonte((a) => ({
                        ...a, entidade: e.target.value,
                      }))}
                      maxLength={300}
                      style={estiloInput}
                      placeholder="Ex.: INE, MINAGRIF, FAO, universidade..."
                    />
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Tipo de fonte *</span>
                    <select
                      value={formularioFonte.tipo}
                      onChange={(e) => setFormularioFonte((a) => ({
                        ...a, tipo: e.target.value,
                      }))}
                      required
                      style={estiloInput}
                    >
                      <option value="oficial">Oficial</option>
                      <option value="cientifica">Científica</option>
                      <option value="bibliografica">Bibliográfica</option>
                      <option value="institucional">Institucional</option>
                      <option value="campo">Trabalho de campo</option>
                      <option value="outra">Outra</option>
                    </select>
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Autor ou autores</span>
                    <input
                      type="text"
                      value={formularioFonte.autor}
                      onChange={(e) => setFormularioFonte((a) => ({
                        ...a, autor: e.target.value,
                      }))}
                      maxLength={500}
                      style={estiloInput}
                      placeholder="Nome do autor ou autores"
                    />
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Ano de publicação</span>
                    <input
                      type="number"
                      value={formularioFonte.ano}
                      onChange={(e) => setFormularioFonte((a) => ({
                        ...a, ano: e.target.value,
                      }))}
                      min={1900}
                      max={2200}
                      style={estiloInput}
                      placeholder="Ex.: 2025"
                    />
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Endereço electrónico (URL)</span>
                    <input
                      type="url"
                      value={formularioFonte.url}
                      onChange={(e) => setFormularioFonte((a) => ({
                        ...a, url: e.target.value,
                      }))}
                      maxLength={2000}
                      style={estiloInput}
                      placeholder="https://..."
                    />
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Referência bibliográfica</span>
                    <textarea
                      value={formularioFonte.referencia}
                      onChange={(e) => setFormularioFonte((a) => ({
                        ...a, referencia: e.target.value,
                      }))}
                      rows={4}
                      maxLength={10000}
                      style={estiloTextarea}
                      placeholder="Indique a referência bibliográfica completa..."
                    />
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Observações</span>
                    <textarea
                      value={formularioFonte.observacoes}
                      onChange={(e) => setFormularioFonte((a) => ({
                        ...a, observacoes: e.target.value,
                      }))}
                      rows={3}
                      maxLength={5000}
                      style={estiloTextarea}
                      placeholder="Notas adicionais sobre a fonte..."
                    />
                  </label>
                </div>
              ) : moduloId === "datasets-fontes" ? (
                <div style={{ display: "grid", gap: 16 }}>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Conjunto de dados *</span>
                    <select
                      value={formularioDatasetFonte.dataset_id}
                      onChange={(e) => setFormularioDatasetFonte((a) => ({
                        ...a, dataset_id: e.target.value,
                      }))}
                      required
                      disabled={seleccionado !== null}
                      style={estiloInput}
                    >
                      <option value="">Seleccione um conjunto de dados</option>
                      {datasetsDisponiveis.map((item) => (
                        <option key={String(item.id)} value={String(item.id)}>
                          {String(item.titulo ?? "Dataset sem título")}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Fonte bibliográfica *</span>
                    <select
                      value={formularioDatasetFonte.fonte_id}
                      onChange={(e) => setFormularioDatasetFonte((a) => ({
                        ...a, fonte_id: e.target.value,
                      }))}
                      required
                      disabled={seleccionado !== null}
                      style={estiloInput}
                    >
                      <option value="">Seleccione uma fonte bibliográfica</option>
                      {fontesDisponiveis.map((item) => (
                        <option key={String(item.id)} value={String(item.id)}>
                          {String(item.titulo ?? "Fonte sem título")}
                          {item.entidade ? ` — ${String(item.entidade)}` : ""}
                          {item.ano ? ` (${String(item.ano)})` : ""}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Citação ou referência específica</span>
                    <textarea
                      value={formularioDatasetFonte.citacao}
                      onChange={(e) => setFormularioDatasetFonte((a) => ({
                        ...a, citacao: e.target.value,
                      }))}
                      rows={4}
                      maxLength={10000}
                      placeholder="Indique a página, tabela, capítulo ou referência utilizada..."
                      style={estiloTextarea}
                    />
                  </label>

                  <p style={notaFormulario}>
                    Associe cada conjunto de dados às fontes que sustentam
                    a informação. Ao editar, apenas a citação poderá ser alterada.
                  </p>
                </div>
              ) : moduloId === "estudos-fontes" ? (
                <div style={{ display: "grid", gap: 16 }}>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Estudo associado *</span>
                    <select
                      value={formularioEstudoFonte.estudo_id}
                      onChange={(e) => setFormularioEstudoFonte((a) => ({
                        ...a,
                        estudo_id: e.target.value,
                      }))}
                      required
                      disabled={seleccionado !== null}
                      style={estiloInput}
                    >
                      <option value="">Seleccione um estudo</option>
                      {estudosDisponiveis.map((item) => (
                        <option key={String(item.id)} value={String(item.id)}>
                          {String(item.titulo ?? "Estudo sem título")}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Fonte bibliográfica *</span>
                    <select
                      value={formularioEstudoFonte.fonte_id}
                      onChange={(e) => setFormularioEstudoFonte((a) => ({
                        ...a,
                        fonte_id: e.target.value,
                      }))}
                      required
                      disabled={seleccionado !== null}
                      style={estiloInput}
                    >
                      <option value="">Seleccione uma fonte bibliográfica</option>
                      {fontesDisponiveis.map((item) => (
                        <option key={String(item.id)} value={String(item.id)}>
                          {String(item.titulo ?? "Fonte sem título")}
                          {item.entidade ? ` — ${String(item.entidade)}` : ""}
                          {item.ano ? ` (${String(item.ano)})` : ""}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Citação ou referência específica</span>
                    <textarea
                      value={formularioEstudoFonte.citacao}
                      onChange={(e) => setFormularioEstudoFonte((a) => ({
                        ...a,
                        citacao: e.target.value,
                      }))}
                      rows={4}
                      maxLength={10000}
                      placeholder="Indique a página, tabela, capítulo ou referência utilizada..."
                      style={estiloTextarea}
                    />
                  </label>

                  <p style={notaFormulario}>
                    Associe cada estudo às fontes bibliográficas que sustentam
                    a investigação. Ao editar, apenas a citação poderá ser alterada.
                  </p>
                </div>
              ) : moduloId === "estudos" ? (
                <div style={{ display: "grid", gap: 15 }}>
                  <Campo label="Título do estudo" value={formularioEstudo.titulo} onChange={(v) => setFormularioEstudo((a) => ({ ...a, titulo: v }))} required maxLength={250} />
                  <Campo label="Categoria" value={formularioEstudo.categoria} onChange={(v) => setFormularioEstudo((a) => ({ ...a, categoria: v }))} placeholder="Ex.: Agricultura, Pecuária, Solos" required />
                  <div style={grelhaCampos}>
                    <Campo label="Subcategoria" value={formularioEstudo.subcategoria} onChange={(v) => setFormularioEstudo((a) => ({ ...a, subcategoria: v }))} />
                    <Campo label="Autores" value={formularioEstudo.autores} onChange={(v) => setFormularioEstudo((a) => ({ ...a, autores: v }))} />
                  </div>
                  <Campo label="Instituição" value={formularioEstudo.instituicao} onChange={(v) => setFormularioEstudo((a) => ({ ...a, instituicao: v }))} />
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Resumo</span>
                    <textarea value={formularioEstudo.resumo} onChange={(e) => setFormularioEstudo((a) => ({ ...a, resumo: e.target.value }))} rows={3} style={estiloTextarea} />
                  </label>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Objectivo</span>
                    <textarea value={formularioEstudo.objectivo} onChange={(e) => setFormularioEstudo((a) => ({ ...a, objectivo: e.target.value }))} rows={3} style={estiloTextarea} />
                  </label>

                  <div style={grelhaCampos}>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Província</span>
                      <select value={formularioEstudo.provincia} onChange={(e) => setFormularioEstudo((a) => ({ ...a, provincia: e.target.value, municipio: "", comuna: "" }))} style={estiloInput}>
                        <option value="">Seleccione a província</option>
                        {provinciasDisponiveis.map((item) => <option key={String(item.id)} value={String(item.nome)}>{String(item.nome)}</option>)}
                      </select>
                    </label>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Município</span>
                      <select value={formularioEstudo.municipio} onChange={(e) => setFormularioEstudo((a) => ({ ...a, municipio: e.target.value, comuna: "" }))} disabled={!formularioEstudo.provincia} style={estiloInput}>
                        <option value="">Seleccione o município</option>
                        {municipiosDisponiveis.filter((item) => String(item.provincia_id) === String(provinciasDisponiveis.find((p) => String(p.nome) === formularioEstudo.provincia)?.id)).map((item) => <option key={String(item.id)} value={String(item.nome)}>{String(item.nome)}</option>)}
                      </select>
                    </label>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Comuna</span>
                      <select value={formularioEstudo.comuna} onChange={(e) => setFormularioEstudo((a) => ({ ...a, comuna: e.target.value }))} disabled={!formularioEstudo.municipio} style={estiloInput}>
                        <option value="">Seleccione a comuna</option>
                        {comunasDisponiveis.filter((item) => String(item.municipio_id) === String(municipiosDisponiveis.find((m) => String(m.nome) === formularioEstudo.municipio && String(m.provincia_id) === String(provinciasDisponiveis.find((p) => String(p.nome) === formularioEstudo.provincia)?.id))?.id)).map((item) => <option key={String(item.id)} value={String(item.nome)}>{String(item.nome)}</option>)}
                      </select>
                    </label>
                    <Campo label="Localidade" value={formularioEstudo.localidade} onChange={(v) => setFormularioEstudo((a) => ({ ...a, localidade: v }))} />
                  </div>

                  <div style={grelhaCampos}>
                    <Campo label="Data de início" type="date" value={formularioEstudo.data_inicio} onChange={(v) => setFormularioEstudo((a) => ({ ...a, data_inicio: v }))} />
                    <Campo label="Data de fim" type="date" value={formularioEstudo.data_fim} onChange={(v) => setFormularioEstudo((a) => ({ ...a, data_fim: v }))} />
                  </div>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Metodologia</span>
                    <textarea value={formularioEstudo.metodologia} onChange={(e) => setFormularioEstudo((a) => ({ ...a, metodologia: e.target.value }))} rows={3} style={estiloTextarea} />
                  </label>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Materiais e métodos</span>
                    <textarea value={formularioEstudo.materiais_metodos} onChange={(e) => setFormularioEstudo((a) => ({ ...a, materiais_metodos: e.target.value }))} rows={3} style={estiloTextarea} />
                  </label>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Resultados</span>
                    <textarea value={formularioEstudo.resultados} onChange={(e) => setFormularioEstudo((a) => ({ ...a, resultados: e.target.value }))} rows={4} style={estiloTextarea} />
                  </label>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Discussão</span>
                    <textarea value={formularioEstudo.discussao} onChange={(e) => setFormularioEstudo((a) => ({ ...a, discussao: e.target.value }))} rows={3} style={estiloTextarea} />
                  </label>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Conclusões</span>
                    <textarea value={formularioEstudo.conclusoes} onChange={(e) => setFormularioEstudo((a) => ({ ...a, conclusoes: e.target.value }))} rows={3} style={estiloTextarea} />
                  </label>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Recomendações</span>
                    <textarea value={formularioEstudo.recomendacoes} onChange={(e) => setFormularioEstudo((a) => ({ ...a, recomendacoes: e.target.value }))} rows={3} style={estiloTextarea} />
                  </label>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Limitações</span>
                    <textarea value={formularioEstudo.limitacoes} onChange={(e) => setFormularioEstudo((a) => ({ ...a, limitacoes: e.target.value }))} rows={2} style={estiloTextarea} />
                  </label>
                  <Campo label="Palavras-chave (separadas por vírgulas)" value={formularioEstudo.palavras_chave} onChange={(v) => setFormularioEstudo((a) => ({ ...a, palavras_chave: v }))} />
                  <Campo label="URL do documento" value={formularioEstudo.documento_url} onChange={(v) => setFormularioEstudo((a) => ({ ...a, documento_url: v }))} placeholder="https://..." />
                  <div style={grelhaCampos}>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Natureza</span>
                      <select value={formularioEstudo.natureza} onChange={(e) => setFormularioEstudo((a) => ({ ...a, natureza: e.target.value }))} style={estiloInput}>
                        <option value="investigacao">Investigação</option>
                        <option value="ensaio_campo">Ensaio de campo</option>
                        <option value="estudo_caso">Estudo de caso</option>
                        <option value="relatorio_tecnico">Relatório técnico</option>
                        <option value="observacao">Observação</option>
                      </select>
                    </label>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Estado</span>
                      <select value={formularioEstudo.estado} onChange={(e) => setFormularioEstudo((a) => ({ ...a, estado: e.target.value }))} style={estiloInput}>
                        <option value="rascunho">Rascunho</option>
                        <option value="em_validacao">Em validação</option>
                        <option value="publicado">Publicado</option>
                        <option value="arquivado">Arquivado</option>
                      </select>
                    </label>
                  </div>
                  <label style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <input type="checkbox" checked={formularioEstudo.destaque} onChange={(e) => setFormularioEstudo((a) => ({ ...a, destaque: e.target.checked }))} />
                    Destacar este estudo
                  </label>
                </div>
              ) : moduloId === "imagens" ? (
                <div style={{ display: "grid", gap: 15 }}>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Estudo associado *</span>
                    <select required value={formularioImagem.estudo_id} onChange={(e) => setFormularioImagem((a) => ({ ...a, estudo_id: e.target.value }))} style={estiloInput}>
                      <option value="">Seleccione um estudo</option>
                      {estudosDisponiveis.map((item) => (
                        <option key={String(item.id)} value={String(item.id)}>
                          {String(item.titulo ?? "Estudo sem título")}
                        </option>
                      ))}
                    </select>
                  </label>
                  <Campo label="URL da imagem" value={formularioImagem.url} onChange={(v) => setFormularioImagem((a) => ({ ...a, url: v }))} placeholder="https://..." required />
                  <Campo label="Legenda" value={formularioImagem.legenda} onChange={(v) => setFormularioImagem((a) => ({ ...a, legenda: v }))} />
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Descrição</span>
                    <textarea value={formularioImagem.descricao} onChange={(e) => setFormularioImagem((a) => ({ ...a, descricao: e.target.value }))} rows={3} style={estiloTextarea} />
                  </label>
                  <div style={grelhaCampos}>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Província</span>
                      <select value={formularioImagem.provincia} onChange={(e) => setFormularioImagem((a) => ({ ...a, provincia: e.target.value, municipio: "" }))} style={estiloInput}>
                        <option value="">Seleccione a província</option>
                        {provinciasDisponiveis.map((item) => <option key={String(item.id)} value={String(item.nome)}>{String(item.nome)}</option>)}
                      </select>
                    </label>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Município</span>
                      <select value={formularioImagem.municipio} onChange={(e) => setFormularioImagem((a) => ({ ...a, municipio: e.target.value }))} disabled={!formularioImagem.provincia} style={estiloInput}>
                        <option value="">Seleccione o município</option>
                        {municipiosDisponiveis.filter((item) => String(item.provincia_id) === String(provinciasDisponiveis.find((p) => String(p.nome) === formularioImagem.provincia)?.id)).map((item) => <option key={String(item.id)} value={String(item.nome)}>{String(item.nome)}</option>)}
                      </select>
                    </label>
                    <Campo label="Data do registo" type="date" value={formularioImagem.data_registo} onChange={(v) => setFormularioImagem((a) => ({ ...a, data_registo: v }))} />
                    <Campo label="Ordem de apresentação" type="number" value={formularioImagem.ordem} onChange={(v) => setFormularioImagem((a) => ({ ...a, ordem: v }))} />
                  </div>
                  <p style={notaFormulario}>
                    Nesta etapa, a imagem é registada através de um URL. O carregamento directo de ficheiros será ligado ao armazenamento do Supabase numa etapa própria.
                  </p>
                </div>) : moduloId === "observacoes" ? (
                <div style={{ display: "grid", gap: 15 }}>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Indicador associado *</span>
                    <select
                      value={formularioObservacao.indicador_id}
                      onChange={(e) =>
                        alterarIndicadorObservacao(e.target.value)
                      }
                      required
                      style={estiloInput}
                    >
                      <option value="">Seleccione um indicador</option>
                      {indicadoresDisponiveis.map((indicador) => (
                        <option
                          key={String(indicador.id)}
                          value={String(indicador.id)}
                        >
                          {String(indicador.nome ?? indicador.codigo ?? "Indicador")}
                          {" — "}
                          {String(indicador.unidade ?? "")}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Conjunto de dados associado</span>
                    <select
                      value={formularioObservacao.dataset_id}
                      onChange={(e) =>
                        setFormularioObservacao((anterior) => ({
                          ...anterior,
                          dataset_id: e.target.value,
                        }))
                      }
                      style={estiloInput}
                    >
                      <option value="">Sem conjunto de dados</option>
                      {datasetsDisponiveis.map((dataset) => (
                        <option
                          key={String(dataset.id)}
                          value={String(dataset.id)}
                        >
                          {String(dataset.titulo ?? "Conjunto de dados")}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div style={grelhaCampos}>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Escala territorial</span>
                      <select
                        value={formularioObservacao.escala}
                        onChange={(e) => setFormularioObservacao((a) => ({ ...a, escala: e.target.value }))}
                        style={estiloInput}
                      >
                        <option value="nacional">Nacional</option>
                        <option value="provincial">Provincial</option>
                        <option value="municipal">Municipal</option>
                        <option value="comunal">Comunal</option>
                        <option value="local">Localidade</option>
                      </select>
                    </label>

                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Campanha agrícola</span>
                      <select
                        value={formularioObservacao.campanha_id}
                        onChange={(e) => setFormularioObservacao((a) => ({ ...a, campanha_id: e.target.value, levantamento_id: "" }))}
                        style={estiloInput}
                      >
                        <option value="">Seleccione a campanha</option>
                        {campanhasDisponiveis.map((item) => (
                          <option key={String(item.id)} value={String(item.id)}>
                            {String(item.nome ?? item.codigo ?? item.id)}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Cultura agrícola</span>
                      <select
                        value={formularioObservacao.cultura_id}
                        onChange={(e) => setFormularioObservacao((a) => ({ ...a, cultura_id: e.target.value, levantamento_id: "" }))}
                        style={estiloInput}
                      >
                        <option value="">Seleccione a cultura</option>
                        {culturasDisponiveis.map((item) => (
                          <option key={String(item.id)} value={String(item.id)}>
                            {String(item.nome ?? item.designacao ?? item.codigo ?? item.id)}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div style={grelhaCampos}>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Província</span>
                      <select
                        value={formularioObservacao.provincia_id}
                        onChange={(e) => {
                          const provincia = provinciasDisponiveis.find(
                            (item) => String(item.id) === e.target.value
                          );
                          setFormularioObservacao((a) => ({
                            ...a,
                            provincia_id: e.target.value,
                            provincia: String(provincia?.nome ?? ""),
                            levantamento_id: "",
                            municipio_id: "",
                            municipio: "",
                            comuna_id: "",
                            comuna: "",
                          }));
                        }}
                        style={estiloInput}
                      >
                        <option value="">Seleccione a província</option>
                        {provinciasDisponiveis.map((item) => (
                          <option key={String(item.id)} value={String(item.id)}>
                            {String(item.nome)}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Levantamento provincial</span>
                      <select
                        value={formularioObservacao.levantamento_id}
                        disabled={
                          !formularioObservacao.campanha_id ||
                          !formularioObservacao.provincia_id ||
                          !formularioObservacao.cultura_id
                        }
                        onChange={(e) => {
                          const levantamento = levantamentosDisponiveis.find(
                            (item) => String(item.id) === e.target.value
                          );

                          setFormularioObservacao((a) => ({
                            ...a,
                            levantamento_id: e.target.value,
                            ...(levantamento
                              ? {
                                  campanha_id: String(levantamento.campanha_id),
                                  provincia_id: String(levantamento.provincia_id),
                                  cultura_id: String(levantamento.cultura_id),
                                }
                              : {}),
                          }));
                        }}
                        style={estiloInput}
                      >
                        <option value="">Seleccione o levantamento</option>
                        {levantamentosDisponiveis
                          .filter(
                            (item) =>
                              String(item.campanha_id) === formularioObservacao.campanha_id &&
                              String(item.provincia_id) === formularioObservacao.provincia_id &&
                              String(item.cultura_id) === formularioObservacao.cultura_id
                          )
                          .map((item) => (
                            <option key={String(item.id)} value={String(item.id)}>
                              {String(item.periodo_inicio ?? "Data não definida")} — {String(item.periodo_fim ?? "Data não definida")} ({String(item.estado ?? "sem estado")})
                            </option>
                          ))}
                      </select>
                    </label>

                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Município</span>
                      <select
                        value={formularioObservacao.municipio_id}
                        disabled={!formularioObservacao.provincia_id}
                        onChange={(e) => {
                          const municipio = municipiosDisponiveis.find(
                            (item) => String(item.id) === e.target.value
                          );
                          setFormularioObservacao((a) => ({
                            ...a,
                            municipio_id: e.target.value,
                            municipio: String(municipio?.nome ?? ""),
                            comuna_id: "",
                            comuna: "",
                          }));
                        }}
                        style={estiloInput}
                      >
                        <option value="">Seleccione o município</option>
                        {municipiosDisponiveis
                          .filter((item) => String(item.provincia_id) === formularioObservacao.provincia_id)
                          .map((item) => (
                            <option key={String(item.id)} value={String(item.id)}>
                              {String(item.nome)}
                            </option>
                          ))}
                      </select>
                    </label>
                  </div>

                  <div style={grelhaCampos}>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Comuna</span>
                      <select
                        value={formularioObservacao.comuna_id}
                        disabled={!formularioObservacao.municipio_id}
                        onChange={(e) => {
                          const comuna = comunasDisponiveis.find(
                            (item) => String(item.id) === e.target.value
                          );
                          setFormularioObservacao((a) => ({
                            ...a,
                            comuna_id: e.target.value,
                            comuna: String(comuna?.nome ?? ""),
                          }));
                        }}
                        style={estiloInput}
                      >
                        <option value="">Seleccione a comuna</option>
                        {comunasDisponiveis
                          .filter((item) => String(item.municipio_id) === formularioObservacao.municipio_id)
                          .map((item) => (
                            <option key={String(item.id)} value={String(item.id)}>
                              {String(item.nome)}
                            </option>
                          ))}
                      </select>
                    </label>

                    <Campo
                      label="Localidade"
                      value={formularioObservacao.localidade}
                      onChange={(v) => setFormularioObservacao((a) => ({ ...a, localidade: v }))}
                      maxLength={150}
                    />
                  </div>
                  <div style={grelhaCampos}>
                    <Campo
                      label="Entidade responsável"
                      value={formularioObservacao.entidade}
                      onChange={(v) =>
                        setFormularioObservacao((a) => ({ ...a, entidade: v }))
                      }
                      placeholder="Ex.: Instituto de Investigação Agronómica"
                      maxLength={200}
                    />
                    <Campo
                      label="Exploração agrícola"
                      value={formularioObservacao.exploracao}
                      onChange={(v) =>
                        setFormularioObservacao((a) => ({ ...a, exploracao: v }))
                      }
                      maxLength={200}
                    />
                  </div>

                  <div style={grelhaCampos}>
                    <Campo
                      label="Início do período"
                      type="date"
                      value={formularioObservacao.periodo_inicio}
                      onChange={(v) =>
                        setFormularioObservacao((a) => ({ ...a, periodo_inicio: v }))
                      }
                    />
                    <Campo
                      label="Fim do período"
                      type="date"
                      value={formularioObservacao.periodo_fim}
                      onChange={(v) =>
                        setFormularioObservacao((a) => ({ ...a, periodo_fim: v }))
                      }
                    />
                  </div>

                  <Campo
                    label="Data de referência"
                    type="date"
                    value={formularioObservacao.data_referencia}
                    onChange={(v) =>
                      setFormularioObservacao((a) => ({ ...a, data_referencia: v }))
                    }
                  />

                  <div style={grelhaCampos}>
                    <Campo
                      label="Valor observado *"
                      type="number"
                      value={formularioObservacao.valor}
                      onChange={(v) =>
                        setFormularioObservacao((a) => ({ ...a, valor: v }))
                      }
                      placeholder="Introduza o valor"
                      required
                    />
                    <Campo
                      label="Unidade de medida *"
                      value={formularioObservacao.unidade}
                      onChange={(v) =>
                        setFormularioObservacao((a) => ({ ...a, unidade: v }))
                      }
                      placeholder="Ex.: toneladas, hectares, kg"
                      required
                      maxLength={50}
                    />
                  </div>

                  <div style={grelhaCampos}>
                    <Campo
                      label="Tamanho da amostra"
                      type="number"
                      value={formularioObservacao.tamanho_amostra}
                      onChange={(v) =>
                        setFormularioObservacao((a) => ({ ...a, tamanho_amostra: v }))
                      }
                    />
                    <Campo
                      label="Margem de erro"
                      type="number"
                      value={formularioObservacao.margem_erro}
                      onChange={(v) =>
                        setFormularioObservacao((a) => ({ ...a, margem_erro: v }))
                      }
                    />
                  </div>

                  <Campo
                    label="Nível de confiança (%)"
                    type="number"
                    value={formularioObservacao.nivel_confianca}
                    onChange={(v) =>
                      setFormularioObservacao((a) => ({ ...a, nivel_confianca: v }))
                    }
                    placeholder="Ex.: 95"
                  />

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Metodologia</span>
                    <textarea
                      value={formularioObservacao.metodologia}
                      onChange={(e) =>
                        setFormularioObservacao((a) => ({
                          ...a,
                          metodologia: e.target.value,
                        }))
                      }
                      rows={4}
                      maxLength={5000}
                      placeholder="Descreva como os dados foram recolhidos ou calculados..."
                      style={estiloTextarea}
                    />
                  </label>

                  <div style={grelhaCampos}>
                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Natureza da informação</span>
                      <select
                        value={formularioObservacao.natureza}
                        onChange={(e) =>
                          setFormularioObservacao((a) => ({
                            ...a,
                            natureza: e.target.value,
                          }))
                        }
                        style={estiloInput}
                      >
                        <option value="estatistica_oficial">Estatística oficial</option>
                        <option value="investigacao">Investigação</option>
                        <option value="observacao_campo">Observação de campo</option>
                        <option value="estimativa">Estimativa</option>
                        <option value="administrativa">Administrativa</option>
                      </select>
                    </label>

                    <label style={estiloCampo}>
                      <span style={estiloLabel}>Estado da observação</span>
                      <select
                        value={formularioObservacao.estado}
                        onChange={(e) =>
                          setFormularioObservacao((a) => ({
                            ...a,
                            estado: e.target.value,
                          }))
                        }
                        style={estiloInput}
                      >
                        <option value="rascunho">Rascunho</option>
                        <option value="validado">Validado</option>
                        <option value="publicado">Publicado</option>
                        <option value="rejeitado">Rejeitado</option>
                      </select>
                    </label>
                  </div>

                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Observações adicionais</span>
                    <textarea
                      value={formularioObservacao.observacoes}
                      onChange={(e) =>
                        setFormularioObservacao((a) => ({
                          ...a,
                          observacoes: e.target.value,
                        }))
                      }
                      rows={3}
                      maxLength={5000}
                      style={estiloTextarea}
                    />
                  </label>

                  <p style={notaFormulario}>
                    Os registos começam em rascunho. Só publique informação
                    devidamente verificada e acompanhada da respectiva fonte.
                  </p>
                </div>
              ) : (
                <>
                  <label style={estiloCampo}>
                    <span style={estiloLabel}>Dados do registo (JSON)</span>
                    <textarea
                      value={json}
                      onChange={(evento) => setJson(evento.target.value)}
                      spellCheck={false}
                      required
                      rows={19}
                      style={estiloJson}
                    />
                  </label>
                  <p style={notaFormulario}>
                    Este editor mantém-se disponível para os restantes
                    módulos enquanto preparamos os respectivos formulários.
                  </p>
                </>
              )}

              {mensagem && (
                <div style={mensagemSucesso} role="status">
                  {mensagem}
                </div>
              )}

              {erro && (
                <div style={mensagemErro} role="alert">
                  {erro}
                </div>
              )}

              <button
                type="submit"
                disabled={aGuardar}
                style={{
                  ...botaoPrincipal,
                  opacity: aGuardar ? 0.65 : 1,
                  marginTop: 18,
                }}
              >
                {aGuardar
                  ? "A guardar..."
                  : seleccionado === null
                    ? "Criar registo"
                    : "Guardar alterações"}
              </button>
            </form>
          </section>
        </div>

        <footer style={rodape}>
          AGROINOVA ANGOLA · Plataforma Nacional de Investigação,
          Conhecimento e Inovação Agropecuária
        </footer>
      </div>
    </main>
  );
}

const painel: CSSProperties = {
  minWidth: 0,
  padding: 20,
  border: `1px solid ${CORES.borda}`,
  borderRadius: 15,
  background: "#ffffff",
  boxShadow: "0 5px 18px rgba(15,23,42,.035)",
};

const textoSuperior: CSSProperties = {
  margin: "0 0 7px",
  color: CORES.verde,
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: 1.3,
};

const tituloPrincipal: CSSProperties = {
  margin: "0 0 8px",
  fontSize: 27,
  fontWeight: 800,
};

const descricaoPrincipal: CSSProperties = {
  margin: 0,
  color: CORES.secundario,
  fontSize: 13,
};

const grelhaModulos: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
  gap: 12,
  marginBottom: 24,
};

const cartaoModulo: CSSProperties = {
  minWidth: 0,
  padding: 15,
  border: `1px solid ${CORES.borda}`,
  borderRadius: 12,
  textAlign: "left",
  cursor: "pointer",
};

const textoCartao: CSSProperties = {
  display: "block",
  color: CORES.secundario,
  fontSize: 11,
  lineHeight: 1.5,
};

const grelhaConteudo: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 390px), 1fr))",
  gap: 20,
  alignItems: "start",
};

const cabecalhoPainel: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
  flexWrap: "wrap",
  marginBottom: 17,
};

const tituloPainel: CSSProperties = {
  margin: "0 0 5px",
  fontSize: 16,
  fontWeight: 800,
};

const descricaoPainel: CSSProperties = {
  margin: 0,
  color: CORES.secundario,
  fontSize: 11,
  lineHeight: 1.6,
};

const contador: CSSProperties = {
  padding: "6px 10px",
  borderRadius: 20,
  background: "#f0fdf4",
  color: CORES.verde,
  fontSize: 11,
  fontWeight: 800,
};

const textoVazio: CSSProperties = {
  padding: "25px 10px",
  color: CORES.secundario,
  fontSize: 12,
  lineHeight: 1.7,
  textAlign: "center",
};

const itemRegisto: CSSProperties = {
  width: "100%",
  textAlign: "left",
  padding: 13,
  borderRadius: 10,
  border: `1px solid ${CORES.borda}`,
  cursor: "pointer",
};

const tituloRegisto: CSSProperties = {
  display: "block",
  fontSize: 12,
  overflowWrap: "anywhere",
};

const subtituloRegisto: CSSProperties = {
  display: "block",
  marginTop: 5,
  fontSize: 10,
  color: CORES.secundario,
};

const estiloCampo: CSSProperties = {
  display: "grid",
  gap: 7,
  minWidth: 0,
};

const estiloLabel: CSSProperties = {
  color: CORES.texto,
  fontSize: 12,
  fontWeight: 700,
};

const estiloInput: CSSProperties = {
  width: "100%",
  minWidth: 0,
  boxSizing: "border-box",
  padding: "11px 12px",
  border: `1px solid ${CORES.borda}`,
  borderRadius: 9,
  background: "#ffffff",
  color: CORES.texto,
  fontSize: 12,
  outlineColor: CORES.verde,
};

const estiloTextarea: CSSProperties = {
  ...estiloInput,
  resize: "vertical",
  lineHeight: 1.6,
};

const grelhaCampos: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))",
  gap: 13,
};

const notaFormulario: CSSProperties = {
  margin: "0",
  color: CORES.secundario,
  fontSize: 11,
  lineHeight: 1.7,
};

const estiloJson: CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: 14,
  border: `1px solid ${CORES.borda}`,
  borderRadius: 10,
  background: "#101b16",
  color: "#d9f99d",
  fontFamily: "Consolas, monospace",
  fontSize: 12,
  lineHeight: 1.7,
  resize: "vertical",
  outlineColor: CORES.verde,
};

const botaoPrincipal: CSSProperties = {
  width: "100%",
  padding: 13,
  border: 0,
  borderRadius: 9,
  background: CORES.verde,
  color: "#ffffff",
  fontSize: 12,
  fontWeight: 800,
  cursor: "pointer",
};

const botaoSecundario: CSSProperties = {
  padding: "9px 13px",
  border: `1px solid ${CORES.borda}`,
  borderRadius: 9,
  background: "#ffffff",
  color: CORES.texto,
  fontSize: 11,
  fontWeight: 700,
  cursor: "pointer",
};

const mensagemErro: CSSProperties = {
  marginBottom: 12,
  padding: 11,
  border: "1px solid #fecaca",
  borderRadius: 9,
  background: "#fef2f2",
  color: "#991b1b",
  fontSize: 11,
  lineHeight: 1.6,
};

const mensagemSucesso: CSSProperties = {
  marginTop: 14,
  padding: 11,
  border: "1px solid #bbf7d0",
  borderRadius: 9,
  background: "#f0fdf4",
  color: "#166534",
  fontSize: 11,
};

const rodape: CSSProperties = {
  marginTop: 25,
  padding: "15px 0",
  borderTop: `1px solid ${CORES.borda}`,
  color: CORES.secundario,
  fontSize: 11,
  textAlign: "center",
};