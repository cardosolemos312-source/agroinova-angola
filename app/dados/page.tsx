"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const MapaDados = dynamic(() => import("./MapaDados"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[420px] items-center justify-center rounded-2xl bg-slate-50 text-sm font-semibold text-slate-500">
      A carregar mapa de Angola...
    </div>
  ),
});
type Categoria =
  | "Todos"
  | "Agricultura"
  | "Pecuária"
  | "Florestas"
  | "Apicultura"
  | "Café"
  | "Huambo";

type Aba =
  | "Visão geral"
  | "Agricultura"
  | "Pecuária"
  | "Café & Apicultura"
  | "Florestas"
  | "Huambo"
  | "2025/26"
  | "Projecções";

type Classificacao =
  | "Oficial"
  | "Investigação"
  | "Observação de campo"
  | "Estimativa"
  | "Administrativa"
  | "Cálculo"
  | "Projecção";

type Indicador = {
  id: string;
  titulo: string;
  valor: string;
  unidade: string;
  variacao?: string;
  descricao: string;
  oQueMede: string;
  significado: string;
  analise: string;
  comparacao: string;
  contexto: string;
  importancia: string;
  implicacoes: string;
  metodologia: string;
  limitacoes: string;
  categoria: Categoria;
  periodo: string;
  fonte: string;
  url: string;
  imagem: string;
  classificacao: Classificacao;

  // Identificação e dados completos provenientes da base de dados.
  indicadorId?: string;
  codigo?: string | null;
  subcategoria?: string | null;
  formula?: string | null;
  periodicidade?: string | null;
  natureza?: string | null;
  estado?: string | null;
  datasetId?: string | null;

  // Informação da observação associada ao cartão.
  provincia?: string | null;
  municipio?: string | null;
  comuna?: string | null;
  localidade?: string | null;
  entidade?: string | null;
  tamanhoAmostra?: number | null;
  margemErro?: number | null;
  nivelConfianca?: number | null;
  observacoesRegisto?: string | null;
  dataReferencia?: string | null;

  // Imagens associadas exclusivamente ao indicador.
  imagens?: {
    id?: string;
    url?: string;
    legenda?: string | null;
    descricao?: string | null;
    provincia?: string | null;
    municipio?: string | null;
    ordem?: number | null;
  }[];

  // Fontes bibliográficas associadas.
  fontesDetalhadas?: {
    titulo: string;
    entidade: string | null;
    ano: number | null;
    url: string | null;
    citacao: string | null;
  }[];
};

const FONTES = {
  anuario:
    "https://www.ine.gov.ao/publicacoes/detalhes/NDY0MDE%3D",

  icapp2324:
    "https://www.ine.gov.ao/publicacoes/detalhes/NTM0NzQ%3D",

  icapp2425:
    "https://www.ine.gov.ao/publicacoes/detalhes/NTM0NzU%3D",

  perfil2324:
    "https://www.ine.gov.ao/publicacoes/detalhes/NTM0Nzc%3D",

  perfil2425:
    "https://www.ine.gov.ao/publicacoes/detalhes/NTM0Nzg%3D",

  boletim2025:
    "https://www.ine.gov.ao/publicacoes/detalhes/NTA0MjE%3D",

  ine:
    "https://www.ine.gov.ao/",

  minagrifResultados:
    "https://minagrif.gov.ao/web/noticias/angola-apresenta-resultados-historicos-no-sector-agrario-e-florestal-durante-forum-com-a-uniao-europeia",

  minagrifEconomia:
    "https://minagrif.gov.ao/web/noticias/agricultura-ultrapassa-petroleo-e-lidera-economia-angolana",

  trigo2526:
    "https://minagrif.gov.ao/web/noticias/instituto-de-desenvolvimento-agrario-apoia-6.228-familias-na-producao-de-trigo-em-todo-o-pais",

  campanha2526:
    "https://minagrif.gov.ao/web/noticias/ministro-da-coordenacao-economica-enaltece-crescimento-do-sector-agricola",

  governo2026:
    "https://www.governo.gov.ao/noticias/3216/governo/estado-da-nacao-2026/integra-da-mensagem-do-presidente-da-republica",
};

const IMAGENS = {
  agricultura:
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=85",

  milho:
    "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=1800&q=85",

  bovinos:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cattle%20in%20Angola.jpg?width=1600",

  aves:
    "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1600&q=85",

  leite:
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1600&q=85",

  cafe:
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=85",

  mel:
    "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1600&q=85",

  floresta:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85",

  madeira:
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=85",

  trigo:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85",

  huambo:
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=85",

  sementes:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=85",
};

/* =========================================================
   INDICADORES HISTÓRICOS E ACTUAIS
========================================================= */


/* =========================================================
   DADOS AUXILIARES
========================================================= */

const categorias: Categoria[] = [
  "Todos",
  "Agricultura",
  "Pecuária",
  "Florestas",
  "Apicultura",
  "Café",
  "Huambo",
];

const abas: { id: Aba; label: string }[] = [
  { id: "Visão geral", label: "Visão geral" },
  { id: "Agricultura", label: "Agricultura" },
  { id: "Pecuária", label: "Pecuária" },
  { id: "Café & Apicultura", label: "Café & Apicultura" },
  { id: "Florestas", label: "Florestas" },
  { id: "Huambo", label: "Huambo" },
  { id: "2025/26", label: "Campanha 2025/26" },
  { id: "Projecções", label: "Projecções" },
];

const crescimento202425 = [
  {
    nome: "Cereais",
    valor: "+6,5%",
    descricao: "Evolução positiva da produção cerealífera.",
  },
  {
    nome: "Raízes e tubérculos",
    valor: "+10,6%",
    descricao: "Uma das maiores taxas entre os grandes grupos.",
  },
  {
    nome: "Leguminosas e oleaginosas",
    valor: "+5,9%",
    descricao: "Crescimento moderado da fileira.",
  },
  {
    nome: "Horticultura",
    valor: "+8,2%",
    descricao: "Recuperação importante da produção.",
  },
  {
    nome: "Frutas",
    valor: "+5,5%",
    descricao: "Crescimento positivo.",
  },
  {
    nome: "Carnes",
    valor: "+7,3%",
    descricao: "Recuperação da produção pecuária.",
  },
  {
    nome: "Ovos",
    valor: "+5%",
    descricao: "Recuperação da produção de ovos.",
  },
  {
    nome: "Café comercial",
    valor: "+40%",
    descricao: "Uma das maiores taxas de crescimento reportadas.",
  },
];

const carnes = [
  {
    nome: "Caprina",
    atual: 153136,
    anterior: 170151,
    variacao: "-10,0%",
  },
  {
    nome: "Bovina",
    atual: 110104,
    anterior: 105968,
    variacao: "+3,9%",
  },
  {
    nome: "Aves",
    atual: 57631,
    anterior: 53309,
    variacao: "+8,1%",
  },
  {
    nome: "Suína",
    atual: 11781,
    anterior: 11996,
    variacao: "-1,8%",
  },
  {
    nome: "Ovina",
    atual: 586,
    anterior: 608,
    variacao: "-3,7%",
  },
];

const provinciasCarnes = [
  {
    nome: "Luanda",
    valor: 107936,
    percentual: 32.4,
  },
  {
    nome: "Huíla",
    valor: 28418,
    percentual: 8.5,
  },
  {
    nome: "Cuanza Sul",
    valor: 26258,
    percentual: 7.9,
  },
  {
    nome: "Huambo",
    valor: 23639,
    percentual: 7.1,
  },
  {
    nome: "Malanje",
    valor: 15206,
    percentual: 4.6,
  },
  {
    nome: "Uíge",
    valor: 10215,
    percentual: 3.1,
  },
];

function formatarNumero(valor: number) {
  return new Intl.NumberFormat("pt-PT").format(valor);
}

function sinalVariacao(valor: string) {
  if (valor.startsWith("-")) return "negative";
  if (valor.startsWith("+")) return "positive";
  return "neutral";
}

function BadgeVariacao({ valor }: { valor: string }) {
  const tipo = sinalVariacao(valor);

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${
        tipo === "negative"
          ? "bg-red-50 text-red-700"
          : tipo === "positive"
          ? "bg-emerald-50 text-emerald-700"
          : "bg-slate-100 text-slate-600"
      }`}
    >
      {valor}
    </span>
  );
}

function BadgeClassificacao({
  tipo,
}: {
  tipo: Classificacao;
}) {
  const classes =
    tipo === "Oficial"
      ? "bg-blue-50 text-blue-700 border-blue-100"
      : tipo === "Investigação"
      ? "bg-purple-50 text-purple-700 border-purple-100"
      : tipo === "Observação de campo"
      ? "bg-green-50 text-green-700 border-green-100"
      : tipo === "Estimativa"
      ? "bg-amber-50 text-amber-700 border-amber-100"
      : tipo === "Administrativa"
      ? "bg-slate-100 text-slate-700 border-slate-200"
      : tipo === "Cálculo"
      ? "bg-orange-50 text-orange-700 border-orange-100"
      : "bg-indigo-50 text-indigo-700 border-indigo-100";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-black ${classes}`}
    >
      {tipo}
    </span>
  );
}

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

export default function DadosPage() {
  const [categoria, setCategoria] =
    useState<Categoria>("Todos");

  const [pesquisa, setPesquisa] = useState("");

  const [periodo, setPeriodo] = useState("Todos");

  const [modal, setModal] =
    useState<Indicador | null>(null);

  const [aba, setAba] =
    useState<Aba>("Visão geral");

  const [cenario, setCenario] =
    useState<"Conservador" | "Base" | "Acelerado">("Base");
      const [indicadoresPublicados, setIndicadoresPublicados] =
    useState<Indicador[]>([]);

  useEffect(() => {
    async function carregarIndicadores() {
      try {
        const resposta = await fetch(
          "/api/dados-agropecuarios/indicadores",
          { cache: "no-store" }
        );

        const dados = await resposta.json();

        if (!resposta.ok || !dados.sucesso) {
          throw new Error("Não foi possível carregar os indicadores.");
        }

        type FontePublicada = {
          titulo: string;
          entidade: string | null;
          ano: number | null;
          url: string | null;
        };

        type RelacaoFonte = {
          citacao: string | null;
          fonte: FontePublicada | FontePublicada[] | null;
        };

        const novosIndicadores: Indicador[] =
          dados.indicadores.flatMap(
            (item: any) => {
              const normalizarTexto = (texto: string) =>
                texto
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase();

              const categoriaTexto = normalizarTexto(
                item.categoria ?? ""
              );

              const categoriaItem: Categoria =
                categoriaTexto.includes("pecuaria") ? "Pecuária" :
                categoriaTexto.includes("floresta") ? "Florestas" :
                categoriaTexto.includes("apicultura") ? "Apicultura" :
                categoriaTexto.includes("cafe") ? "Café" :
                "Agricultura";

              const observacoes = item.observacoes?.length
                ? item.observacoes
                : [null];

              return observacoes.map((observacao: any, index: number) => {
                const inicioPeriodo = observacao?.periodo_inicio;
                const fimPeriodo = observacao?.periodo_fim;
                const referencia = observacao?.data_referencia;

                const periodoItem =
                  inicioPeriodo && fimPeriodo
                    ? `${inicioPeriodo.slice(0, 4)}/${fimPeriodo.slice(0, 4)}`
                    : inicioPeriodo
                    ? inicioPeriodo.slice(0, 4)
                    : referencia
                    ? referencia.slice(0, 4)
                    : "Sem período";

                const natureza =
                  observacao?.natureza ?? item.natureza;

                const classificacao: Classificacao =
                  natureza === "estatistica_oficial"
                    ? "Oficial"
                    : natureza === "investigacao"
                    ? "Investigação"
                    : natureza === "observacao_campo"
                    ? "Observação de campo"
                    : natureza === "estimativa"
                    ? "Estimativa"
                    : natureza === "administrativa"
                    ? "Administrativa"
                    : "Cálculo";

                const relacoesFonte =
                  observacao?.fontes?.length
                    ? observacao.fontes
                    : item.fontes ?? [];

                const fontes = relacoesFonte.flatMap((relacao: any) => {
                  const lista = Array.isArray(relacao.fonte)
                    ? relacao.fonte
                    : relacao.fonte
                    ? [relacao.fonte]
                    : [];

                  return lista.map((fonte: any) => ({
                    titulo: fonte.titulo,
                    entidade: fonte.entidade,
                    ano: fonte.ano,
                    url: fonte.url,
                    citacao: relacao.citacao,
                  }));
                });

                const fontePrincipal = fontes[0];

                const textoFontes = fontes
                  .map((fonte: any) =>
                    [
                      fonte.entidade,
                      fonte.titulo,
                      fonte.ano ? String(fonte.ano) : null,
                      fonte.citacao,
                    ]
                      .filter(Boolean)
                      .join(" — ")
                  )
                  .filter(Boolean)
                  .join("; ");

                const localizacao = [
                  observacao?.localidade,
                  observacao?.comuna,
                  observacao?.municipio,
                  observacao?.provincia,
                ]
                  .filter(Boolean)
                  .join(", ");

                return {
                  id: `supabase-${item.id}-${observacao?.id ?? index}`,
                  indicadorId: item.id,
                  codigo: item.codigo ?? null,
                  datasetId: item.dataset_id ?? null,
                  titulo: item.nome,
                  valor:
                    observacao && Number.isFinite(Number(observacao.valor))
                      ? new Intl.NumberFormat("pt-PT").format(
                          Number(observacao.valor)
                        )
                      : "Sem observação",
                  unidade: observacao?.unidade ?? item.unidade ?? "",
                  descricao: item.descricao ?? "",
                  oQueMede: item.nome ?? "",
                  significado: item.descricao ?? "",
                  analise: observacao?.observacoes ?? "",
                  comparacao: "",
                  contexto: localizacao,
                  importancia: "",
                  implicacoes: "",
                  metodologia: observacao?.metodologia ?? "",
                  limitacoes: "",
                  categoria: categoriaItem,
                  subcategoria: item.subcategoria ?? null,
                  formula: item.formula ?? null,
                  periodicidade: item.periodicidade ?? null,
                  natureza: natureza ?? null,
                  estado: item.estado ?? null,
                  periodo: periodoItem,
                  fonte: textoFontes,
                  url: fontePrincipal?.url ?? "",
                  imagem: item.imagens?.find(
                    (imagem: any) => imagem?.url
                  )?.url ?? "",
                  classificacao,

                  provincia: observacao?.provincia ?? null,
                  municipio: observacao?.municipio ?? null,
                  comuna: observacao?.comuna ?? null,
                  localidade: observacao?.localidade ?? null,
                  entidade: observacao?.entidade ?? null,

                  tamanhoAmostra:
                    observacao?.tamanho_amostra != null &&
                    Number.isFinite(Number(observacao.tamanho_amostra))
                      ? Number(observacao.tamanho_amostra)
                      : null,

                  margemErro:
                    observacao?.margem_erro != null &&
                    Number.isFinite(Number(observacao.margem_erro))
                      ? Number(observacao.margem_erro)
                      : null,

                  nivelConfianca:
                    observacao?.nivel_confianca != null &&
                    Number.isFinite(Number(observacao.nivel_confianca))
                      ? Number(observacao.nivel_confianca)
                      : null,

                  observacoesRegisto: observacao?.observacoes ?? null,
                  dataReferencia: observacao?.data_referencia ?? null,

                  imagens: item.imagens ?? [],
                  fontesDetalhadas: fontes,
                };
              });
            }
          );
        setIndicadoresPublicados(novosIndicadores);
      } catch (erro) {
        console.error("Erro ao carregar dados publicados:", erro);
      }
    }

    carregarIndicadores();
  }, []);

  const resultados = useMemo(() => {
    const termo = pesquisa
      .trim()
      .toLocaleLowerCase("pt-PT");

    return indicadoresPublicados.filter((item) => {
      const pertenceCategoria =
        categoria === "Todos" ||
        item.categoria === categoria;

      const pertencePeriodo =
        periodo === "Todos" ||
        item.periodo.includes(periodo);

      const pertenceAba =
        aba === "Visão geral" ||
        aba === "Projecções" ||
        aba === "2025/26" ||
        (aba === "Café & Apicultura"
          ? item.categoria === "Café" ||
            item.categoria === "Apicultura"
          : item.categoria === aba);

      const correspondePesquisa =
        !termo ||
        [
          item.titulo,
          item.valor,
          item.unidade,
          item.descricao,
          item.oQueMede,
          item.significado,
          item.analise,
          item.comparacao,
          item.contexto,
          item.importancia,
          item.implicacoes,
          item.categoria,
          item.periodo,
          item.fonte,
        ]
          .join(" ")
          .toLocaleLowerCase("pt-PT")
          .includes(termo);

      return (
        pertenceCategoria &&
        pertencePeriodo &&
        pertenceAba &&
        correspondePesquisa
      );
    });
}, [
  categoria,
  pesquisa,
  periodo,
  aba,
  indicadoresPublicados,
]);
  // Distribuição experimental dos registos publicados.
// Os valores representam quantidades de registos, não produção.
  const dadosGraficos = useMemo(() => {
    const contar = (valores: (string | null | undefined)[]) => {
      const contagem = new Map<string, number>();

      valores.forEach((valor) => {
        const nome = valor?.trim() || "Sem classificação";
        contagem.set(nome, (contagem.get(nome) ?? 0) + 1);
      });

      return Array.from(contagem, ([nome, total]) => ({
        nome,
        total,
      })).sort((a, b) => b.total - a.total);
    };

    const categorias = contar(
      indicadoresPublicados.map((item) => item.categoria)
    );

    const provincias = contar(
      indicadoresPublicados.map((item) => item.provincia)
    ).filter((item) => item.nome !== "Sem classificação");

    const periodos = contar(
      indicadoresPublicados.map((item) => item.periodo)
    ).sort((a, b) => {
      const anoA = Number(a.nome.match(/\d{4}/)?.[0] ?? "9999");
      const anoB = Number(b.nome.match(/\d{4}/)?.[0] ?? "9999");

      return anoA - anoB || a.nome.localeCompare(b.nome, "pt");
    });

    return {
      categorias,
      provincias,
      periodos,
    };
  }, [indicadoresPublicados]);
  const taxasCenario = {
    Conservador: 0.02,
    Base: 0.05,
    Acelerado: 0.08,
  };

  const taxa =
    taxasCenario[cenario];

  const baseProjecao = 30.4;

  const projecoes = Array.from(
    { length: 5 },
    (_, index) => {
      const ano = 2025 + index;

      const valor =
        baseProjecao *
        Math.pow(1 + taxa, index + 1);

      return {
        ano: `${ano}/${String(ano + 1).slice(-2)}`,
        valor,
      };
    }
  );

  return (
    <main className="min-h-screen bg-[#f4f7f4] text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#062c1d] text-white">

        <div className="absolute inset-0">
          <img
            src={IMAGENS.agricultura}
            alt="Imagem ilustrativa de agricultura"
            className="h-full w-full object-cover opacity-25"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#031b12] via-[#063522]/95 to-[#063522]/65" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">

          <div className="max-w-6xl">

            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
              <span>AGROINOVA ANGOLA</span>
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              <span>Observatório Agropecuário</span>
            </div>

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">

              Angola

              <span className="block text-emerald-300">
                em dados agropecuários
              </span>

            </h1>

            <p className="mt-6 max-w-5xl text-base leading-8 text-emerald-50/85 md:text-lg">

              Centro de informação estatística para acompanhar a agricultura,
              pecuária, café, apicultura, florestas e o desempenho territorial
              do sector agropecuário de Angola.

            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

                <p className="text-xs font-bold uppercase tracking-wide text-emerald-200">
                  Histórico
                </p>

                <p className="mt-2 text-xl font-black">
                  2023/24
                </p>

                <p className="mt-1 text-xs text-emerald-100/60">
                  Série detalhada
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

                <p className="text-xs font-bold uppercase tracking-wide text-emerald-200">
                  Campanha
                </p>

                <p className="mt-2 text-xl font-black">
                  2024/25
                </p>

                <p className="mt-1 text-xs text-emerald-100/60">
                  Resultados mais recentes
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

                <p className="text-xs font-bold uppercase tracking-wide text-emerald-200">
                  Execução
                </p>

                <p className="mt-2 text-xl font-black">
                  2025/26
                </p>

                <p className="mt-1 text-xs text-emerald-100/60">
                  Campanha em desenvolvimento
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

                <p className="text-xs font-bold uppercase tracking-wide text-emerald-200">
                  Cenários
                </p>

                <p className="mt-2 text-xl font-black">
                  2026+
                </p>

                <p className="mt-1 text-xs text-emerald-100/60">
                  Projecções AGROINOVA
                </p>

              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={FONTES.icapp2425}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-5 py-3 font-black text-[#073621] transition hover:bg-emerald-50"
              >
                ICAPP 2024/25
              </a>

              <a
                href={FONTES.anuario}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/25 px-5 py-3 font-black text-white transition hover:bg-white/10"
              >
                Anuário Estatístico
              </a>

              <a
                href={FONTES.minagrifResultados}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/25 px-5 py-3 font-black text-white transition hover:bg-white/10"
              >
                Resultados MINAGRIF
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          ESTADO DOS DADOS
      ===================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">

          <div className="grid gap-3 md:grid-cols-4">

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">

              <div className="flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />

                <p className="text-xs font-black uppercase tracking-wide text-blue-800">
                  Oficial
                </p>

              </div>

              <p className="mt-2 text-sm font-bold text-blue-900">
                Estatística publicada
              </p>

              <p className="mt-1 text-xs leading-5 text-blue-700">
                Valores provenientes de INE, MINAGRIF ou Governo.
              </p>

            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">

              <div className="flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />

                <p className="text-xs font-black uppercase tracking-wide text-amber-800">
                  Cálculo
                </p>

              </div>

              <p className="mt-2 text-sm font-bold text-amber-900">
                Derivado dos dados
              </p>

              <p className="mt-1 text-xs leading-5 text-amber-700">
                Calculado matematicamente a partir de fontes oficiais.
              </p>

            </div>

            <div className="rounded-2xl border border-purple-100 bg-purple-50 p-4">

              <div className="flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-purple-600" />

                <p className="text-xs font-black uppercase tracking-wide text-purple-800">
                  Projecção
                </p>

              </div>

              <p className="mt-2 text-sm font-bold text-purple-900">
                Cenário AGROINOVA
              </p>

              <p className="mt-1 text-xs leading-5 text-purple-700">
                Não representa previsão oficial do Estado.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

              <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                Última actualização
              </p>

              <p className="mt-2 text-sm font-black text-slate-900">
                Maio de 2026
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Inclui ICAPP 2024/25 e resultados sectoriais recentes.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          KPI PRINCIPAIS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              titulo: "Produção agrícola 2024/25",
              valor: ">30,4 M",
              unidade: "toneladas",
              detalhe: "+8,5%",
              positivo: true,
            },
            {
              titulo: "Peso agropecuário no PIB",
              valor: "25,43%",
              unidade: "em 2025",
              detalhe: "13,66% em 2015",
              positivo: true,
            },
            {
              titulo: "Café comercial",
              valor: "+40%",
              unidade: "crescimento 2024/25",
              detalhe: "cadeia prioritária",
              positivo: true,
            },
            {
              titulo: "Sementes certificadas",
              valor: "6 930",
              unidade: "toneladas em 2025",
              detalhe: "+143,2% vs 2023",
              positivo: true,
            },
          ].map((item) => (

            <article
              key={item.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >

              <p className="text-sm font-bold text-slate-500">
                {item.titulo}
              </p>

              <p className="mt-3 text-3xl font-black text-[#0b4b30]">
                {item.valor}
              </p>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">

                <span className="text-xs text-slate-500">
                  {item.unidade}
                </span>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-black ${
                    item.positivo
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {item.detalhe}
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          NAVEGAÇÃO
      ===================================================== */}

      <section className="sticky top-0 z-40 border-y border-slate-200 bg-white/95 backdrop-blur">

        <div className="mx-auto max-w-7xl px-5 py-3 md:px-8">

          <div className="flex gap-2 overflow-x-auto">

            {abas.map(({ id, label }) => (

              <button
                key={id}
                onClick={() => setAba(id)}
                className={`shrink-0 rounded-xl px-4 py-3 text-sm font-black transition ${
                  aba === id
                    ? "bg-[#0d4a30] text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {label}
              </button>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          VISÃO GERAL
      ===================================================== */}

      {aba === "Visão geral" && (

        <>

          <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

            <div className="mb-8">

              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Leitura nacional
              </p>

              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                O que está a acontecer no sector?
              </h2>

              <p className="mt-3 max-w-5xl leading-8 text-slate-600">

                Os dados mais recentes mostram uma trajectória global positiva
                da produção agropecuária, mas com diferenças importantes entre
                cadeias. A produção agrícola 2024/25 ultrapassou 30,4 milhões
                de toneladas, enquanto várias fileiras registaram taxas de
                crescimento distintas. O café apresentou uma evolução
                particularmente forte.

              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-3">

              <article className="rounded-3xl border border-slate-200 bg-white p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                  🌱
                </div>

                <h3 className="mt-5 text-xl font-black">
                  Crescimento agrícola
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">

                  A produção agrícola 2024/25 cresceu 8,5%, ultrapassando
                  30,4 milhões de toneladas. O desafio é transformar esse
                  crescimento físico em maior produtividade, rendimento e
                  capacidade de processamento.

                </p>

              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl">
                  🐄
                </div>

                <h3 className="mt-5 text-xl font-black">
                  Recuperação pecuária
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">

                  A produção de carne cresceu 7,3% em 2024/25 e a produção
                  de ovos cresceu 5%, depois de indicadores negativos
                  observados em 2023/24.

                </p>

              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                  ☕
                </div>

                <h3 className="mt-5 text-xl font-black">
                  Cadeias comerciais
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">

                  O café comercial cresceu 40% em 2024/25, reforçando a
                  importância das culturas comerciais na diversificação
                  económica.

                </p>

              </article>

            </div>

          </section>

          {/* LINHA DO TEMPO */}

          <section className="bg-white">

            <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">

              <div className="mb-9">

                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                  Linha temporal
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  2023/24 → 2024/25 → 2025 → 2025/26
                </h2>

                <p className="mt-3 max-w-4xl leading-7 text-slate-600">
                  A página separa campanhas agrícolas, resultados económicos
                  e programas em execução para evitar misturar períodos
                  estatísticos diferentes.
                </p>

              </div>

              <div className="grid gap-5 md:grid-cols-4">

                {[
                  {
                    ano: "2023/24",
                    titulo: "Base histórica",
                    texto:
                      "Produção detalhada de agricultura, pecuária, café, mel, cera e florestas.",
                  },
                  {
                    ano: "2024/25",
                    titulo: "Nova campanha",
                    texto:
                      "Produção agrícola superior a 30,4 milhões de toneladas e crescimento das principais cadeias.",
                  },
                  {
                    ano: "2025",
                    titulo: "Peso económico",
                    texto:
                      "Sector agropecuário reportado com 25,43% do PIB e aumento da disponibilidade de sementes certificadas.",
                  },
                  {
                    ano: "2025/26",
                    titulo: "Execução",
                    texto:
                      "Programas como trigo encontram-se em execução e ainda devem gerar resultados finais.",
                  },
                ].map((item, index) => (

                  <article
                    key={item.ano}
                    className="relative rounded-3xl border border-slate-200 bg-[#f8faf8] p-6"
                  >

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d4a30] text-sm font-black text-white">
                      {index + 1}
                    </span>

                    <p className="mt-5 text-xs font-black uppercase tracking-widest text-emerald-700">
                      {item.ano}
                    </p>

                    <h3 className="mt-2 text-xl font-black">
                      {item.titulo}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.texto}
                    </p>

                  </article>

                ))}

              </div>

            </div>

          </section>

          {/* CRESCIMENTO 2024/25 */}

          <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

            <div className="mb-8">

              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Campanha 2024/25
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Como evoluíram as principais cadeias?
              </h2>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {crescimento202425.map((item) => (

                <article
                  key={item.nome}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >

                  <div className="flex items-start justify-between gap-3">

                    <p className="font-black">
                      {item.nome}
                    </p>

                    <BadgeVariacao valor={item.valor} />

                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item.descricao}
                  </p>

                </article>

              ))}

            </div>

          </section>

          {/* ANÁLISE */}

          <section className="bg-[#073522] text-white">

            <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">

              <div className="grid gap-8 lg:grid-cols-3">

                <div>

                  <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
                    01
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    Mais produção
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-emerald-50/70">
                    O crescimento de 2024/25 mostra aumento da oferta
                    agrícola nacional.
                  </p>

                </div>

                <div>

                  <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
                    02
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    Mais transformação
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-emerald-50/70">
                    A próxima etapa é transformar maior produção em produtos
                    processados, emprego e valor acrescentado.
                  </p>

                </div>

                <div>

                  <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
                    03
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    Mais informação
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-emerald-50/70">
                    Quanto melhor a informação provincial e municipal, melhor
                    será a capacidade de planear investimentos.
                  </p>

                </div>

              </div>

            </div>

          </section>

        </>

      )}
      {/* ANÁLISE EXPERIMENTAL DOS REGISTOS DA BASE DE DADOS */}
      <section className="mt-12 space-y-8 rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm md:p-8">

        <div>
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
            Dados da plataforma
          </p>

          <h2 className="mt-2 text-2xl font-black text-slate-900 md:text-3xl">
            Análise dos registos agropecuários
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Distribuição territorial, sectorial e temporal dos indicadores
            publicados na base de dados da AGROINOVA ANGOLA.
          </p>

          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            <strong>Dados experimentais:</strong> os registos actualmente
            disponíveis são dados de teste. Não representam estatísticas
            oficiais nem resultados reais de produção. Todos os gráficos
            apresentam quantidades de registos, não volumes de produção.
          </div>
        </div>

        {indicadoresPublicados.length === 0 ? (
          <div className="rounded-2xl bg-slate-50 p-10 text-center">
            <p className="font-bold text-slate-700">
              Ainda não existem registos publicados para apresentar.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Os gráficos e o mapa serão actualizados automaticamente
              quando existirem registos disponíveis.
            </p>
          </div>
        ) : (
          <>
            {/* EVOLUÇÃO TEMPORAL */}
            <div className="rounded-2xl border border-slate-200 p-4 md:p-6">
              <div className="mb-5">
                <h3 className="text-lg font-black text-slate-900">
                  Evolução dos registos por período
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Quantidade de observações registadas em cada período.
                </p>
              </div>

              {dadosGraficos.periodos.length === 0 ? (
                <p className="py-10 text-center text-sm text-slate-500">
                  Sem períodos disponíveis.
                </p>
              ) : (
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={dadosGraficos.periodos}
                      margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis
                        dataKey="nome"
                        tick={{ fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        allowDecimals={false}
                        tick={{ fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="total"
                        name="Registos"
                        stroke="#15803d"
                        strokeWidth={3}
                        activeDot={{ r: 7 }}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">

              {/* DISTRIBUIÇÃO POR CATEGORIA */}
              <div className="rounded-2xl border border-slate-200 p-4 md:p-6">
                <h3 className="text-lg font-black text-slate-900">
                  Registos por categoria
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Distribuição percentual dos registos publicados.
                </p>

                {dadosGraficos.categorias.length === 0 ? (
                  <p className="py-10 text-center text-sm text-slate-500">
                    Sem categorias disponíveis.
                  </p>
                ) : (
                  <div className="h-[310px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={dadosGraficos.categorias}
                          dataKey="total"
                          nameKey="nome"
                          cx="50%"
                          cy="48%"
                          outerRadius={105}
                          innerRadius={55}
                          paddingAngle={3}
                          label={({ percent }) =>
                            `${((percent ?? 0) * 100).toFixed(0)}%`
                          }
                        >
                          {dadosGraficos.categorias.map((item, index) => (
                            <Cell
                              key={item.nome}
                              fill={[
                                "#166534",
                                "#16a34a",
                                "#65a30d",
                                "#0f766e",
                                "#0891b2",
                                "#84cc16",
                                "#64748b",
                              ][index % 7]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>

              {/* DISTRIBUIÇÃO POR PROVÍNCIA */}
              <div className="rounded-2xl border border-slate-200 p-4 md:p-6">
                <h3 className="text-lg font-black text-slate-900">
                  Registos por província
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Comparação da quantidade de registos por localização.
                </p>

                {dadosGraficos.provincias.length === 0 ? (
                  <p className="py-10 text-center text-sm text-slate-500">
                    Não existem registos associados a províncias.
                  </p>
                ) : (
                  <div
                    className="mt-4 w-full overflow-y-auto"
                    style={{ maxHeight: "360px" }}
                  >
                    <div
                      style={{
                        height: Math.max(
                          300,
                          dadosGraficos.provincias.length * 42
                        ),
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={dadosGraficos.provincias}
                          layout="vertical"
                          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                          <XAxis
                            type="number"
                            allowDecimals={false}
                            tick={{ fontSize: 11 }}
                          />
                          <YAxis
                            type="category"
                            dataKey="nome"
                            width={105}
                            tick={{ fontSize: 11 }}
                          />
                          <Tooltip />
                          <Bar
                            dataKey="total"
                            name="Registos"
                            fill="#15803d"
                            radius={[0, 6, 6, 0]}
                            barSize={20}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* MAPA COROPLÉTICO */}
            <div className="rounded-2xl border border-slate-200 p-4 md:p-6">
              <div className="mb-5">
                <h3 className="text-lg font-black text-slate-900">
                  Distribuição territorial dos registos
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Mapa de Angola com a distribuição dos registos por província.
                  Seleccione uma província para consultar os seus dados.
                </p>
              </div>

              <MapaDados dados={dadosGraficos.provincias} />
            </div>
          </>
        )}
      </section>
{/* =====================================================
          AGRICULTURA
      ===================================================== */}

      {aba === "Agricultura" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="mb-10">

            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
              Dossiê sectorial
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Agricultura
            </h2>

            <p className="mt-4 max-w-5xl leading-8 text-slate-600">

              A agricultura deve ser analisada através de uma cadeia de
              indicadores: área semeada, área colhida, produção, produtividade,
              disponibilidade de insumos, transformação e comercialização.
              Uma única variável não explica o desempenho do sector.

            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">

              <img
                src={IMAGENS.agricultura}
                alt="Imagem ilustrativa de agricultura"
                className="h-52 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-xs font-black uppercase text-emerald-700">
                  2023/24
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  6,18 M ha
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Área semeada.
                </p>

              </div>

            </article>

            <article className="rounded-3xl bg-white p-6 shadow-sm">

              <p className="text-xs font-black uppercase text-emerald-700">
                2023/24
              </p>

              <h3 className="mt-3 text-3xl font-black">
                5,52 M ha
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Área colhida na campanha.
              </p>

              <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-100">

                <div
                  className="h-full rounded-full bg-[#0d4a30]"
                  style={{ width: "89.3%" }}
                />

              </div>

              <p className="mt-2 text-xs text-slate-500">
                Aproveitamento aproximado: 89,3%
              </p>

            </article>

            <article className="rounded-3xl bg-[#0d4a30] p-6 text-white">

              <p className="text-xs font-black uppercase text-emerald-200">
                2024/25
              </p>

              <h3 className="mt-3 text-3xl font-black">
                &gt;30,4 M t
              </h3>

              <p className="mt-3 text-sm leading-7 text-emerald-50/80">
                Produção agrícola total reportada, com crescimento de 8,5%.
              </p>

            </article>

          </div>

          <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm md:p-8">

            <h3 className="text-2xl font-black">
              A principal mudança entre 2023/24 e 2024/25
            </h3>

            <p className="mt-3 max-w-4xl leading-8 text-slate-600">

              Em 2023/24, a análise detalhada mostra uma combinação de
              crescimento da área e comportamentos diferentes entre fileiras.
              Em 2024/25, o resultado agregado mostra uma produção agrícola
              superior a 30,4 milhões de toneladas, com crescimento de 8,5%.
              Isto sugere uma evolução positiva do sector, mas não elimina a
              necessidade de analisar produtividade e eficiência.

            </p>

          </div>

          <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">

            <div className="border-b border-slate-200 p-6 md:p-8">

              <h3 className="text-2xl font-black">
                Crescimento por grupo — 2024/25
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Taxas comunicadas pelo MINAGRIF.
              </p>

            </div>

            <div className="divide-y divide-slate-100">

              {crescimento202425
                .filter((item) =>
                  [
                    "Cereais",
                    "Raízes e tubérculos",
                    "Leguminosas e oleaginosas",
                    "Horticultura",
                    "Frutas",
                  ].includes(item.nome)
                )
                .map((item) => (

                  <div
                    key={item.nome}
                    className="grid gap-4 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-7"
                  >

                    <div>

                      <p className="font-black">
                        {item.nome}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.descricao}
                      </p>

                    </div>

                    <BadgeVariacao valor={item.valor} />

                  </div>

                ))}

            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <article className="rounded-3xl border border-slate-200 bg-white p-6">

              <p className="text-xs font-black uppercase text-emerald-700">
                Prioridade
              </p>

              <h3 className="mt-3 text-xl font-black">
                Produtividade
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Produzir mais sem depender exclusivamente da expansão da área
                deve ser um dos principais objectivos.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6">

              <p className="text-xs font-black uppercase text-emerald-700">
                Prioridade
              </p>

              <h3 className="mt-3 text-xl font-black">
                Armazenamento
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Maior produção precisa de estruturas capazes de reduzir
                perdas pós-colheita.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6">

              <p className="text-xs font-black uppercase text-emerald-700">
                Prioridade
              </p>

              <h3 className="mt-3 text-xl font-black">
                Transformação
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Processar localmente pode aumentar o valor económico da
                produção.
              </p>

            </article>

          </div>

        </section>

      )}

      {/* =====================================================
          PECUÁRIA
      ===================================================== */}

      {aba === "Pecuária" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <img
                src={IMAGENS.bovinos}
                alt="Gado em Angola"
                className="h-[430px] w-full rounded-3xl object-cover"
              />

              <div className="mt-4 rounded-3xl bg-[#0d4a30] p-6 text-white">

                <p className="text-xs font-black uppercase text-emerald-200">
                  2023/24
                </p>

                <p className="mt-3 text-4xl font-black">
                  333 238 t
                </p>

                <p className="mt-2 text-sm text-emerald-100/70">
                  produção total de carnes
                </p>

                <div className="mt-5">
                  <BadgeVariacao valor="-2,5%" />
                </div>

              </div>

            </div>

            <div>

              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Estrutura pecuária
              </p>

              <h2 className="mt-2 text-4xl font-black">
                A queda de 2023/24 não conta toda a história
              </h2>

              <p className="mt-4 max-w-4xl leading-8 text-slate-600">

                A produção agregada de carnes caiu 2,5% em 2023/24, mas
                algumas espécies cresceram. Em 2024/25, o MINAGRIF reportou
                crescimento agregado de 7,3% na produção de carne.

              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {carnes.map((carne) => (

                  <article
                    key={carne.nome}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >

                    <p className="text-sm font-bold text-slate-500">
                      Carne {carne.nome}
                    </p>

                    <p className="mt-2 text-2xl font-black text-[#0d4a30]">
                      {formatarNumero(carne.atual)} t
                    </p>

                    <div className="mt-3">
                      <BadgeVariacao valor={carne.variacao} />
                    </div>

                    <p className="mt-4 text-xs leading-5 text-slate-500">
                      Campanha anterior:{" "}
                      {formatarNumero(carne.anterior)} toneladas.
                    </p>

                  </article>

                ))}

              </div>

              <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">

                <h3 className="text-xl font-black text-[#0d4a30]">
                  Leitura principal
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-700">

                  A carne caprina continua a representar a maior parcela
                  entre as espécies apresentadas, mas foi precisamente esta
                  cadeia que sofreu uma das maiores quedas. A carne bovina e
                  a carne de aves cresceram. Em 2024/25, o resultado agregado
                  passou a ser positivo.

                </p>

              </div>

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          CAFÉ + APICULTURA
      ===================================================== */}

      {aba === "Café & Apicultura" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="mb-10">

            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
              Cadeias de alto potencial
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Café e apicultura
            </h2>

            <p className="mt-4 max-w-5xl leading-8 text-slate-600">

              Estas cadeias possuem características diferentes, mas partilham
              uma oportunidade: transformar produção primária em maior valor
              através de qualidade, processamento, certificação, embalagem,
              comercialização e exportação.

            </p>

          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">

              <img
                src={IMAGENS.cafe}
                alt="Imagem ilustrativa de café"
                className="h-64 w-full object-cover"
              />

              <div className="p-7">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
                      Café
                    </p>

                    <h3 className="mt-2 text-4xl font-black">
                      7 584 t
                    </h3>

                  </div>

                  <BadgeVariacao valor="+21,7%" />

                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">

                  Em 2023/24, a produção comercial de café cresceu 21,7%.
                  Para 2024/25, o MINAGRIF reportou crescimento de 40%.

                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-emerald-50 p-4">

                    <p className="text-xs text-slate-500">
                      2023/24
                    </p>

                    <p className="mt-1 text-xl font-black text-[#0d4a30]">
                      +21,7%
                    </p>

                  </div>

                  <div className="rounded-2xl bg-emerald-50 p-4">

                    <p className="text-xs text-slate-500">
                      2024/25
                    </p>

                    <p className="mt-1 text-xl font-black text-[#0d4a30]">
                      +40%
                    </p>

                  </div>

                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">

                  <p className="text-sm leading-7 text-slate-600">

                    A prioridade deve ser consolidar produtividade, qualidade,
                    processamento e ligação aos mercados.

                  </p>

                </div>

              </div>

            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">

              <img
                src={IMAGENS.mel}
                alt="Produção de mel"
                className="h-64 w-full object-cover"
              />

              <div className="p-7">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-xs font-black uppercase tracking-widest text-amber-700">
                      Apicultura
                    </p>

                    <h3 className="mt-2 text-4xl font-black">
                      6 084 t
                    </h3>

                  </div>

                  <BadgeVariacao valor="+16%" />

                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">

                  Em 2023/24, a produção nacional de mel registou crescimento
                  de aproximadamente 16%. O Governo também apresentou dados
                  recentes para o período 2023–2025, que devem ser tratados
                  separadamente por terem período e enquadramento diferentes.

                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl bg-amber-50 p-4">

                    <p className="text-xs text-slate-500">
                      Mel 2023/24
                    </p>

                    <p className="mt-1 text-xl font-black text-amber-800">
                      6 084 t
                    </p>

                  </div>

                  <div className="rounded-2xl bg-amber-50 p-4">

                    <p className="text-xs text-slate-500">
                      Cera 2023/24
                    </p>

                    <p className="mt-1 text-xl font-black text-amber-800">
                      379 t
                    </p>

                  </div>

                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">

                  <p className="text-sm leading-7 text-slate-600">

                    A cadeia apícola deve ser acompanhada não apenas pelo
                    volume de mel, mas também por produtividade por colmeia,
                    qualidade, cera, comercialização e serviços de polinização.

                  </p>

                </div>

              </div>

            </article>

          </div>

          <div className="mt-8 rounded-3xl bg-[#073522] p-7 text-white md:p-10">

            <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
              Estratégia de valor
            </p>

            <h3 className="mt-3 text-3xl font-black">
              Produzir é apenas a primeira etapa
            </h3>

            <div className="mt-7 grid gap-4 md:grid-cols-4">

              {[
                "Produção",
                "Qualidade",
                "Transformação",
                "Mercado",
              ].map((item, index) => (

                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >

                  <span className="text-sm font-black text-emerald-300">
                    0{index + 1}
                  </span>

                  <p className="mt-3 font-black">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          FLORESTAS
      ===================================================== */}

      {aba === "Florestas" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Recursos florestais
              </p>

              <h2 className="mt-2 text-4xl font-black">
                Florestas, madeira e transformação
              </h2>

              <p className="mt-4 max-w-5xl leading-8 text-slate-600">

                A análise florestal precisa de combinar produção de matéria
                prima, transformação industrial, exportação e sustentabilidade.
                O aumento da produção não deve ser analisado isoladamente.

              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">

                <article className="rounded-3xl bg-white p-6 shadow-sm">

                  <p className="text-xs font-black uppercase text-emerald-700">
                    2023/24
                  </p>

                  <p className="mt-3 text-3xl font-black">
                    238,69 mil
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    m³ de madeira em toro
                  </p>

                </article>

                <article className="rounded-3xl bg-white p-6 shadow-sm">

                  <p className="text-xs font-black uppercase text-emerald-700">
                    2023/24
                  </p>

                  <p className="mt-3 text-3xl font-black">
                    179,67 mil
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    m³ de madeira serrada
                  </p>

                </article>

                <article className="rounded-3xl bg-white p-6 shadow-sm">

                  <p className="text-xs font-black uppercase text-emerald-700">
                    2023/24
                  </p>

                  <p className="mt-3 text-3xl font-black">
                    78,1 mil
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    m³ exportados
                  </p>

                </article>

              </div>

              <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm">

                <h3 className="text-2xl font-black">
                  Evolução recente
                </h3>

                <p className="mt-3 leading-8 text-slate-600">

                  Para o período 2023–2025, o Governo reportou 483 267 m³ de
                  madeira em toro, com crescimento de 44,9%, e 326 270 m³ de
                  madeira serrada. Estes valores devem ser lidos como
                  indicadores do período reportado e não como produção anual
                  exclusiva de 2025.

                </p>

              </div>

            </div>

            <div className="overflow-hidden rounded-3xl bg-[#0d4a30] text-white">

              <img
                src={IMAGENS.floresta}
                alt="Floresta"
                className="h-80 w-full object-cover"
              />

              <div className="p-7">

                <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
                  Cadeia florestal
                </p>

                <p className="mt-4 text-2xl font-black">
                  Matéria-prima → transformação → produto
                </p>

                <p className="mt-4 text-sm leading-7 text-emerald-50/75">

                  O objectivo económico não deve ser apenas aumentar a
                  extracção, mas também ampliar transformação local, emprego,
                  rastreabilidade e sustentabilidade.

                </p>

                <div className="mt-7 border-t border-white/10 pt-6">

                  <p className="text-sm font-bold text-emerald-200">
                    Huambo
                  </p>

                  <p className="mt-2 text-sm leading-6 text-emerald-50/65">
                    O Cachiungo foi identificado pelo MINAGRIF entre os locais
                    de projectos de transformação industrial de madeira.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          HUAMBO
      ===================================================== */}

      {aba === "Huambo" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="overflow-hidden rounded-3xl bg-[#073522] text-white">

            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

              <div className="min-h-[470px]">

                <img
                  src={IMAGENS.huambo}
                  alt="Imagem ilustrativa de actividade agrícola"
                  className="h-full min-h-[470px] w-full object-cover"
                />

              </div>

              <div className="p-7 md:p-10">

                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
                  Foco provincial
                </p>

                <h2 className="mt-3 text-5xl font-black">
                  Huambo
                </h2>

                <p className="mt-4 max-w-3xl leading-8 text-emerald-50/75">

                  O Huambo possui uma posição relevante na produção pecuária
                  nacional. Os dados disponíveis permitem observar a
                  contribuição da província na produção de carnes e carne
                  bovina.

                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5">

                    <p className="text-xs uppercase text-emerald-200">
                      Carnes
                    </p>

                    <p className="mt-2 text-3xl font-black">
                      23 639 t
                    </p>

                    <p className="mt-2 text-xs text-emerald-100/60">
                      7,1% do total nacional
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5">

                    <p className="text-xs uppercase text-emerald-200">
                      Carne bovina
                    </p>

                    <p className="mt-2 text-3xl font-black">
                      7 514 t
                    </p>

                    <p className="mt-2 text-xs text-emerald-100/60">
                      6,8% do total nacional
                    </p>

                  </div>

                </div>

                <div className="mt-9">

                  <h3 className="text-xl font-black">
                    Produção de carnes por província
                  </h3>

                  <div className="mt-5 space-y-4">

                    {provinciasCarnes.map(
                      (provincia, index) => (

                        <div key={provincia.nome}>

                          <div className="mb-2 flex items-center justify-between">

                            <div className="flex items-center gap-3">

                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400 text-xs font-black text-[#073522]">
                                {index + 1}
                              </span>

                              <span className="font-bold">
                                {provincia.nome}
                              </span>

                            </div>

                            <span className="font-black text-emerald-300">
                              {formatarNumero(
                                provincia.valor
                              )}{" "}
                              t
                            </span>

                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-white/10">

                            <div
                              className="h-full rounded-full bg-emerald-400"
                              style={{
                                width: `${Math.min(
                                  provincia.percentual * 2.7,
                                  100
                                )}%`,
                              }}
                            />

                          </div>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <article className="rounded-3xl bg-white p-6 shadow-sm">

              <p className="text-xs font-black uppercase text-emerald-700">
                Posição
              </p>

              <p className="mt-3 text-3xl font-black">
                4.º
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Entre as províncias individualizadas no quadro nacional
                apresentado.
              </p>

            </article>

            <article className="rounded-3xl bg-white p-6 shadow-sm">

              <p className="text-xs font-black uppercase text-emerald-700">
                Participação
              </p>

              <p className="mt-3 text-3xl font-black">
                7,1%
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Participação do Huambo no total nacional de carnes.
              </p>

            </article>

            <article className="rounded-3xl bg-white p-6 shadow-sm">

              <p className="text-xs font-black uppercase text-emerald-700">
                Oportunidade
              </p>

              <p className="mt-3 text-3xl font-black">
                Cadeia integrada
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Agricultura + alimentação animal + pecuária + transformação.
              </p>

            </article>

          </div>

          <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50 p-7 md:p-9">

            <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
              Leitura territorial
            </p>

            <h3 className="mt-3 text-2xl font-black text-[#0d4a30]">
              O próximo passo deve ser descer ao nível municipal
            </h3>

            <p className="mt-3 max-w-4xl leading-8 text-slate-700">

              Para o AGROINOVA Angola, uma evolução natural deste observatório
              é apresentar os dados do Huambo por município, cultura,
              produção animal, área, produtividade, preços, mercados,
              cooperativas e infra-estruturas. Isso permitirá transformar a
              estatística provincial em ferramenta de decisão local.

            </p>

          </div>

        </section>

      )}

      {/* =====================================================
          CAMPANHA 2025/26
      ===================================================== */}

      {aba === "2025/26" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="mb-10">

            <div className="inline-flex rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-black text-purple-700">
              CAMPANHA EM EXECUÇÃO
            </div>

            <h2 className="mt-4 text-4xl font-black">
              2025/2026
            </h2>

            <p className="mt-4 max-w-5xl leading-8 text-slate-600">

              Os indicadores desta secção não devem ser tratados como
              resultados finais da campanha. São dados de execução de
              programas e iniciativas que ainda precisam de ser acompanhados
              até à conclusão.

            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">

              <img
                src={IMAGENS.trigo}
                alt="Imagem ilustrativa de trigo"
                className="h-52 w-full object-cover"
              />

              <div className="p-6">

                <p className="text-xs font-black uppercase text-purple-700">
                  Famílias apoiadas
                </p>

                <p className="mt-2 text-4xl font-black">
                  6 228
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Famílias apoiadas na produção de trigo.
                </p>

              </div>

            </article>

            <article className="rounded-3xl bg-white p-6 shadow-sm">

              <p className="text-xs font-black uppercase text-purple-700">
                Semente
              </p>

              <p className="mt-3 text-4xl font-black">
                260 t
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Semente de trigo disponibilizada no programa.
              </p>

            </article>

            <article className="rounded-3xl bg-[#0d4a30] p-6 text-white">

              <p className="text-xs font-black uppercase text-emerald-200">
                Área preparada
              </p>

              <p className="mt-3 text-4xl font-black">
                1 557 ha
              </p>

              <p className="mt-3 text-sm leading-7 text-emerald-50/75">
                Área preparada no âmbito do programa de trigo.
              </p>

            </article>

          </div>

          <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm md:p-9">

            <h3 className="text-2xl font-black">
              Exemplo de execução local
            </h3>

            <p className="mt-3 max-w-4xl leading-8 text-slate-600">

              Em Sili, no Bié, foi reportada uma área mecanizada de 24
              hectares, envolvendo 61 famílias e uma expectativa de cerca de
              30 toneladas de trigo. Este valor é uma previsão local e não
              deve ser extrapolado para Angola inteira.

            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-xs text-slate-500">
                  Área
                </p>

                <p className="mt-2 text-2xl font-black">
                  24 ha
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-xs text-slate-500">
                  Famílias
                </p>

                <p className="mt-2 text-2xl font-black">
                  61
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <p className="text-xs text-slate-500">
                  Expectativa
                </p>

                <p className="mt-2 text-2xl font-black">
                  ≈30 t
                </p>

              </div>

            </div>

          </div>

          <div className="mt-8 rounded-3xl border border-purple-100 bg-purple-50 p-7 md:p-9">

            <h3 className="text-2xl font-black text-purple-900">
              O que deve ser actualizado quando a campanha terminar?
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              {[
                "Área efectivamente semeada",
                "Área efectivamente colhida",
                "Produção real em toneladas",
                "Produtividade por hectare",
                "Custos de produção",
                "Preço médio recebido pelo produtor",
                "Número de produtores efectivamente activos",
                "Volume transformado localmente",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl border border-purple-100 bg-white p-4"
                >

                  <p className="font-bold text-slate-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

      )}

      {/* =====================================================
          PROJECÇÕES
      ===================================================== */}

      {aba === "Projecções" && (

        <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="mb-10">

            <div className="inline-flex rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-black text-purple-700">
              MODELO AGROINOVA
            </div>

            <h2 className="mt-4 text-4xl font-black">
              Projecção da produção agrícola
            </h2>

            <p className="mt-4 max-w-5xl leading-8 text-slate-600">

              Esta projecção é um exercício matemático de cenário. Não é uma
              previsão oficial do Governo de Angola, do INE ou do MINAGRIF.
              Utiliza como base aproximadamente 30,4 milhões de toneladas,
              reportadas para 2024/25, e aplica uma taxa constante seleccionada
              pelo utilizador.

            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {[
              {
                nome: "Conservador",
                taxa: "2% ao ano",
                descricao:
                  "Cenário de crescimento baixo, com limitações de produtividade e investimento.",
              },
              {
                nome: "Base",
                taxa: "5% ao ano",
                descricao:
                  "Cenário intermédio para análise estratégica.",
              },
              {
                nome: "Acelerado",
                taxa: "8% ao ano",
                descricao:
                  "Cenário de expansão mais forte, associado a maior produtividade e investimento.",
              },
            ].map((item) => (

              <button
                key={item.nome}
                onClick={() =>
                  setCenario(
                    item.nome as
                      | "Conservador"
                      | "Base"
                      | "Acelerado"
                  )
                }
                className={`rounded-3xl border p-6 text-left transition ${
                  cenario === item.nome
                    ? "border-[#0d4a30] bg-emerald-50 ring-2 ring-emerald-100"
                    : "border-slate-200 bg-white hover:border-emerald-300"
                }`}
              >

                <div className="flex items-center justify-between gap-3">

                  <h3 className="text-xl font-black">
                    {item.nome}
                  </h3>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black">
                    {item.taxa}
                  </span>

                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.descricao}
                </p>

              </button>

            ))}

          </div>

          <div className="mt-8 overflow-hidden rounded-3xl bg-[#061f15] text-white">

            <div className="p-7 md:p-9">

              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                <div>

                  <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
                    Cenário seleccionado
                  </p>

                  <h3 className="mt-2 text-3xl font-black">
                    {cenario}
                  </h3>

                  <p className="mt-2 text-sm text-emerald-50/65">
                    Crescimento matemático de{" "}
                    {(taxa * 100).toFixed(0)}% ao ano.
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 px-5 py-4">

                  <p className="text-xs uppercase text-emerald-200">
                    Base
                  </p>

                  <p className="mt-1 text-2xl font-black">
                    30,4 M t
                  </p>

                  <p className="text-xs text-emerald-100/50">
                    2024/25
                  </p>

                </div>

              </div>

              <div className="mt-9 grid gap-4 md:grid-cols-5">

                {projecoes.map((item, index) => (

                  <div
                    key={item.ano}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >

                    <p className="text-xs font-black text-emerald-300">
                      {item.ano}
                    </p>

                    <p className="mt-3 text-2xl font-black">
                      {item.valor.toLocaleString(
                        "pt-PT",
                        {
                          maximumFractionDigits: 2,
                        }
                      )}{" "}
                      M
                    </p>

                    <p className="mt-1 text-xs text-emerald-50/45">
                      toneladas
                    </p>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

                      <div
                        className="h-full rounded-full bg-emerald-400"
                        style={{
                          width: `${Math.min(
                            (item.valor / 50) * 100,
                            100
                          )}%`,
                        }}
                      />

                    </div>

                    <p className="mt-2 text-[11px] text-emerald-50/45">
                      Ano {index + 1} do cenário
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <article className="rounded-3xl border border-purple-100 bg-purple-50 p-6">

              <p className="text-xs font-black uppercase text-purple-700">
                Atenção
              </p>

              <h3 className="mt-3 text-xl font-black text-purple-900">
                Não é previsão oficial
              </h3>

              <p className="mt-3 text-sm leading-7 text-purple-800/75">
                O resultado real dependerá de clima, produtividade,
                investimento, preços, políticas públicas, infra-estruturas e
                condições de mercado.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6">

              <p className="text-xs font-black uppercase text-slate-500">
                Hipótese
              </p>

              <h3 className="mt-3 text-xl font-black">
                Crescimento constante
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                O modelo assume a mesma taxa todos os anos apenas para criar
                um cenário comparável.
              </p>

            </article>

            <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">

              <p className="text-xs font-black uppercase text-emerald-700">
                Actualização
              </p>

              <h3 className="mt-3 text-xl font-black text-[#0d4a30]">
                Substituir por dados reais
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Quando forem publicados novos resultados oficiais, a
                projecção deve ser comparada com o valor observado.
              </p>

            </article>

          </div>

        </section>

      )}

      {/* =====================================================
          BASE DE DADOS
      ===================================================== */}

      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">

          <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Base estatística
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Explorar indicadores
              </h2>

              <p className="mt-2 text-slate-600">
                Cada indicador possui explicação, análise, comparação,
                contexto, metodologia e fonte.
              </p>

            </div>

            <input
              value={pesquisa}
              onChange={(event) =>
                setPesquisa(event.target.value)
              }
              placeholder="Pesquisar indicador, cultura, ano..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-700 lg:w-96"
            />

          </div>

          <div className="mb-5 flex flex-wrap gap-2">

            {[
              "Todos",
              ...Array.from(
                new Set(
                  indicadoresPublicados
                    .map((indicador) => indicador.periodo)
                    .filter(
                      (periodo) =>
                        periodo &&
                        periodo !== "Sem período"
                    )
                )
              ).sort((a, b) =>
                b.localeCompare(a, "pt-PT", { numeric: true })
              ),
            ].map((item) => (

              <button
                key={item}
                onClick={() => setPeriodo(item)}
                className={`rounded-xl px-4 py-2 text-sm font-black transition ${
                  periodo === item
                    ? "bg-[#0d4a30] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          <div className="mb-5 flex gap-2 overflow-x-auto pb-1">

            {categorias.map((item) => (

              <button
                key={item}
                onClick={() => setCategoria(item)}
                className={`shrink-0 rounded-xl px-4 py-2 text-sm font-black transition ${
                  categoria === item
                    ? "bg-[#0d4a30] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-sm text-slate-600">
                Resultados encontrados
              </p>

              <p className="text-lg font-black text-[#0d4a30]">
                {resultados.length}
              </p>

            </div>

          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">

            <div className="grid min-w-[1650px] grid-cols-[250px_120px_130px_130px_100px_120px_120px_120px_120px_140px_200px] gap-4 bg-slate-50 px-5 py-4 text-xs font-black uppercase tracking-wide text-slate-500">

              <span>Indicador</span>
              <span>Valor</span>
              <span>Categoria</span>
              <span>Subcategoria</span>
              <span>Unidade</span>
              <span>Período</span>
              <span>Periodicidade</span>
              <span>Província</span>
              <span>Município</span>
              <span>Natureza</span>
              <span>Fonte</span>

            </div>

            <div className="divide-y divide-slate-100">

              {resultados.map((item) => (

                <button
                  key={item.id}
                  onClick={() => setModal(item)}
                  className="grid min-w-[1650px] w-full grid-cols-[250px_120px_130px_130px_100px_120px_120px_120px_120px_140px_200px] gap-4 px-5 py-5 text-left transition hover:bg-emerald-50 items-center"
                >

                  <div className="min-w-0">
                    <p className="font-black">{item.titulo}</p>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                      {item.descricao || "Não informado"}
                    </p>
                  </div>

                  <span className="font-black text-[#0d4a30]">
                    {item.valor || "Não informado"}
                  </span>

                  <span className="text-sm font-bold text-slate-600">
                    {item.categoria || "Não informado"}
                  </span>

                  <span className="text-sm text-slate-600">
                    {item.subcategoria || "Não informado"}
                  </span>

                  <span className="text-sm text-slate-600">
                    {item.unidade || "Não informado"}
                  </span>

                  <span className="text-sm text-slate-600">
                    {item.periodo || "Não informado"}
                  </span>

                  <span className="text-sm text-slate-600">
                    {item.periodicidade || "Não informado"}
                  </span>

                  <span className="text-sm text-slate-600">
                    {item.provincia || "Não informado"}
                  </span>

                  <span className="text-sm text-slate-600">
                    {item.municipio || "Não informado"}
                  </span>

                  <div>
                    <BadgeClassificacao tipo={item.classificacao} />
                  </div>

                  <span
                    title={item.fonte || "Não informado"}
                    className="line-clamp-2 text-xs leading-5 text-slate-600"
                  >
                    {item.fonte || "Não informado"}
                  </span>

                </button>

              ))}

              {resultados.length === 0 && (

                <div className="p-12 text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
                    🔎
                  </div>

                  <p className="mt-4 font-black">
                    Nenhum indicador encontrado.
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Experimente outra pesquisa, período ou categoria.
                  </p>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FONTES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">

        <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                Transparência estatística
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Fontes e metodologia
              </h2>

              <p className="mt-4 max-w-4xl leading-8 text-slate-600">

                O AGROINOVA distingue dados oficiais, cálculos derivados e
                projecções. Os dados históricos detalhados são baseados
                principalmente em publicações do INE/MINAGRIF. Os resultados
                mais recentes de 2024/25 e indicadores de 2025/26 são
                apresentados com o respectivo período para evitar misturar
                campanhas diferentes.

              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <a
                href={FONTES.icapp2425}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#0d4a30] px-5 py-3 font-black text-white"
              >
                ICAPP 2024/25
              </a>

              <a
                href={FONTES.anuario}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-300 px-5 py-3 font-black text-slate-700"
              >
                Anuário 2024
              </a>

              <a
                href={FONTES.minagrifResultados}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-300 px-5 py-3 font-black text-slate-700"
              >
                MINAGRIF
              </a>

              <a
                href={FONTES.ine}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-300 px-5 py-3 font-black text-slate-700"
              >
                Portal INE
              </a>

            </div>

          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl bg-blue-50 p-5">

              <p className="font-black text-blue-900">
                Dados oficiais
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-800/70">
                Valores publicados por instituições oficiais.
              </p>

            </div>

            <div className="rounded-2xl bg-amber-50 p-5">

              <p className="font-black text-amber-900">
                Cálculos
              </p>

              <p className="mt-2 text-sm leading-6 text-amber-800/70">
                Operações matemáticas realizadas a partir de dados oficiais.
              </p>

            </div>

            <div className="rounded-2xl bg-purple-50 p-5">

              <p className="font-black text-purple-900">
                Projecções
              </p>

              <p className="mt-2 text-sm leading-6 text-purple-800/70">
                Cenários analíticos do AGROINOVA, não previsões governamentais.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          MODAL COMPLETO
      ===================================================== */}

      {modal && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
          onClick={() => setModal(null)}
        >

          <div
            className="max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* IMAGEM */}

            <div className="relative h-64 md:h-80">
              {modal.imagem && (
  <img
    src={modal.imagem}
    alt={modal.titulo}
    className="h-full w-full object-cover"
  />
)}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <button
                onClick={() => setModal(null)}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-2xl font-black text-white backdrop-blur transition hover:bg-black/70"
              >
                ×
              </button>

              <div className="absolute bottom-6 left-6 right-6">

                <div className="flex flex-wrap gap-2">

                  <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-[#062c1d]">
                    {modal.categoria}
                  </span>

                  <BadgeClassificacao
                    tipo={modal.classificacao}
                  />

                </div>

                <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
                  {modal.titulo}
                </h2>

              </div>

            </div>

            <div className="p-6 md:p-9">

              {/* RESUMO */}

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-emerald-50 p-5">

                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Valor
                  </p>

                  <p className="mt-2 text-3xl font-black text-[#0b4b30]">
                    {modal.valor}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {modal.unidade}
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Período
                  </p>

                  <p className="mt-3 text-xl font-black">
                    {modal.periodo}
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Variação
                  </p>

                  <div className="mt-3">

                    {modal.variacao ? (
                      <BadgeVariacao
                        valor={modal.variacao}
                      />
                    ) : (
                      <span className="text-sm font-bold text-slate-500">
                        Não disponível
                      </span>
                    )}

                  </div>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                    Categoria
                  </p>

                  <p className="mt-3 text-lg font-black">
                    {modal.categoria}
                  </p>

                </div>

              </div>

              {/* DADOS COMPLETOS DO INDICADOR */}
              {(modal.codigo ||
                modal.subcategoria ||
                modal.formula ||
                modal.periodicidade ||
                modal.natureza ||
                modal.indicadorId ||
                modal.datasetId) && (
                <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-emerald-700">
                    Identificação do indicador
                  </h3>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {modal.codigo && (
                      <div>
                        <p className="text-xs font-bold text-slate-500">Código</p>
                        <p className="mt-1 font-semibold text-slate-800">{modal.codigo}</p>
                      </div>
                    )}
                    {modal.subcategoria && (
                      <div>
                        <p className="text-xs font-bold text-slate-500">Subcategoria</p>
                        <p className="mt-1 font-semibold text-slate-800">{modal.subcategoria}</p>
                      </div>
                    )}
                    {modal.natureza && (
                      <div>
                        <p className="text-xs font-bold text-slate-500">Natureza</p>
                        <p className="mt-1 font-semibold text-slate-800">{modal.natureza}</p>
                      </div>
                    )}
                    {modal.periodicidade && (
                      <div>
                        <p className="text-xs font-bold text-slate-500">Periodicidade</p>
                        <p className="mt-1 font-semibold text-slate-800">{modal.periodicidade}</p>
                      </div>
                    )}
                    {modal.formula && (
                      <div className="sm:col-span-2">
                        <p className="text-xs font-bold text-slate-500">Fórmula de cálculo</p>
                        <p className="mt-1 whitespace-pre-wrap text-slate-800">{modal.formula}</p>
                      </div>
                    )}
                    {modal.indicadorId && (
                      <div>
                        <p className="text-xs font-bold text-slate-500">Identificador</p>
                        <p className="mt-1 break-all text-sm text-slate-700">{modal.indicadorId}</p>
                      </div>
                    )}
                    {modal.datasetId && (
                      <div>
                        <p className="text-xs font-bold text-slate-500">Conjunto de dados</p>
                        <p className="mt-1 break-all text-sm text-slate-700">{modal.datasetId}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* LOCALIZAÇÃO E REFERÊNCIA */}
              {(modal.provincia ||
                modal.municipio ||
                modal.comuna ||
                modal.localidade ||
                modal.entidade ||
                modal.dataReferencia) && (
                <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-emerald-800">
                    Localização e referência territorial
                  </h3>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {modal.provincia && (
                      <div>
                        <p className="text-xs font-bold text-slate-500">Província</p>
                        <p className="mt-1 font-semibold text-slate-800">{modal.provincia}</p>
                      </div>
                    )}
                    {modal.municipio && (
                      <div>
                        <p className="text-xs font-bold text-slate-500">Município</p>
                        <p className="mt-1 font-semibold text-slate-800">{modal.municipio}</p>
                      </div>
                    )}
                    {modal.comuna && (
                      <div>
                        <p className="text-xs font-bold text-slate-500">Comuna</p>
                        <p className="mt-1 font-semibold text-slate-800">{modal.comuna}</p>
                      </div>
                    )}
                    {modal.localidade && (
                      <div>
                        <p className="text-xs font-bold text-slate-500">Localidade</p>
                        <p className="mt-1 font-semibold text-slate-800">{modal.localidade}</p>
                      </div>
                    )}
                    {modal.entidade && (
                      <div>
                        <p className="text-xs font-bold text-slate-500">Entidade responsável</p>
                        <p className="mt-1 font-semibold text-slate-800">{modal.entidade}</p>
                      </div>
                    )}
                    {modal.dataReferencia && (
                      <div>
                        <p className="text-xs font-bold text-slate-500">Data de referência</p>
                        <p className="mt-1 font-semibold text-slate-800">{modal.dataReferencia}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* QUALIDADE E DIMENSÃO DA OBSERVAÇÃO */}
              {(modal.tamanhoAmostra != null ||
                modal.margemErro != null ||
                modal.nivelConfianca != null) && (
                <div className="mt-8 rounded-3xl border border-slate-200 p-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-600">
                    Qualidade e dimensão estatística
                  </h3>

                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {modal.tamanhoAmostra != null && (
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-bold text-slate-500">Tamanho da amostra</p>
                        <p className="mt-2 text-xl font-black text-slate-800">
                          {new Intl.NumberFormat("pt-PT").format(modal.tamanhoAmostra)}
                        </p>
                      </div>
                    )}
                    {modal.margemErro != null && (
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-bold text-slate-500">Margem de erro</p>
                        <p className="mt-2 text-xl font-black text-slate-800">
                          {modal.margemErro}%
                        </p>
                      </div>
                    )}
                    {modal.nivelConfianca != null && (
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-bold text-slate-500">Nível de confiança</p>
                        <p className="mt-2 text-xl font-black text-slate-800">
                          {modal.nivelConfianca}%
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* OBSERVAÇÕES DO REGISTO */}
              {modal.observacoesRegisto && (
                <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-amber-800">
                    Observações do registo
                  </h3>
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-amber-950">
                    {modal.observacoesRegisto}
                  </p>
                </div>
              )}

              {/* IMAGENS ASSOCIADAS AO INDICADOR */}
              {modal.imagens?.length ? (
                <div className="mt-8">
                  <h3 className="text-xs font-black uppercase tracking-widest text-emerald-700">
                    Imagens e documentação visual
                  </h3>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    {modal.imagens.map((imagem, indice) => (
                      imagem.url ? (
                        <figure
                          key={imagem.id ?? `${modal.indicadorId}-imagem-${indice}`}
                          className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                        >
                          <img
                            src={imagem.url}
                            alt={imagem.legenda || imagem.descricao || `Imagem ${indice + 1} do indicador`}
                            className="h-56 w-full object-cover"
                            loading="lazy"
                          />
                          {(imagem.legenda || imagem.descricao || imagem.provincia || imagem.municipio) && (
                            <figcaption className="space-y-1 p-4">
                              {imagem.legenda && (
                                <p className="font-bold text-slate-800">{imagem.legenda}</p>
                              )}
                              {imagem.descricao && (
                                <p className="text-sm leading-6 text-slate-600">{imagem.descricao}</p>
                              )}
                              {(imagem.provincia || imagem.municipio) && (
                                <p className="text-xs text-slate-500">
                                  {[imagem.municipio, imagem.provincia].filter(Boolean).join(" — ")}
                                </p>
                              )}
                            </figcaption>
                          )}
                        </figure>
                      ) : null
                    ))}
                  </div>
                </div>
              ) : null}

              {/* FONTES BIBLIOGRÁFICAS DETALHADAS */}
              {modal.fontesDetalhadas?.length ? (
                <div className="mt-8 rounded-3xl border border-slate-200 p-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-emerald-700">
                    Fontes bibliográficas e documentais
                  </h3>

                  <div className="mt-5 space-y-4">
                    {modal.fontesDetalhadas.map((fonte, indice) => (
                      <div
                        key={`${modal.indicadorId}-fonte-${indice}`}
                        className="rounded-2xl bg-slate-50 p-4"
                      >
                        <p className="font-bold text-slate-800">{fonte.titulo}</p>
                        {(fonte.entidade || fonte.ano != null) && (
                          <p className="mt-1 text-sm text-slate-500">
                            {[fonte.entidade, fonte.ano].filter(Boolean).join(" — ")}
                          </p>
                        )}
                        {fonte.citacao && (
                          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                            {fonte.citacao}
                          </p>
                        )}
                        {fonte.url && (
                          <a
                            href={fonte.url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 inline-flex text-sm font-bold text-emerald-700 underline"
                          >
                            Consultar fonte original
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              {/* O QUE MEDE */}

              <div className="mt-9">

                <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
                  O que mede?
                </p>

                <p className="mt-3 text-base leading-8 text-slate-700">
                  {modal.oQueMede}
                </p>

              </div>

              {/* SIGNIFICADO */}

              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">

                <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                  O que significa?
                </p>

                <p className="mt-3 text-base leading-8 text-slate-700">
                  {modal.significado}
                </p>

              </div>

              {/* ANALISE */}

              <div className="mt-8">

                <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
                  Análise
                </p>

                <p className="mt-3 text-base leading-8 text-slate-700">
                  {modal.analise}
                </p>

              </div>

              {/* COMPARACAO */}

              <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">

                <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
                  Comparação e contexto
                </p>

                <p className="mt-3 text-base leading-8 text-slate-700">
                  {modal.comparacao}
                </p>

              </div>

              {/* CONTEXTO */}

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div>

                  <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                    Contexto territorial e económico
                  </p>

                  <p className="mt-3 text-base leading-8 text-slate-700">
                    {modal.contexto}
                  </p>

                </div>

                <div>

                  <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                    Porque é importante?
                  </p>

                  <p className="mt-3 text-base leading-8 text-slate-700">
                    {modal.importancia}
                  </p>

                </div>

              </div>

              {/* IMPLICAÇÕES */}

              <div className="mt-8 rounded-3xl bg-[#073522] p-6 text-white">

                <p className="text-xs font-black uppercase tracking-widest text-emerald-300">
                  Implicações para o sector
                </p>

                <p className="mt-3 text-base leading-8 text-emerald-50/80">
                  {modal.implicacoes}
                </p>

              </div>

              {/* METODOLOGIA */}

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl border border-slate-200 p-5">

                  <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                    Metodologia
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {modal.metodologia}
                  </p>

                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">

                  <p className="text-xs font-black uppercase tracking-widest text-amber-700">
                    Limitações
                  </p>

                  <p className="mt-3 text-sm leading-7 text-amber-900/75">
                    {modal.limitacoes}
                  </p>

                </div>

              </div>

              {/* FONTE */}

              <div className="mt-8 border-t border-slate-200 pt-7">

                <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Fonte
                </p>

                <p className="mt-2 font-bold text-slate-700">
                  {modal.fonte}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">

                  <a
                    href={modal.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-xl bg-[#0d4a30] px-5 py-3 font-black text-white transition hover:bg-[#0a3b26]"
                  >
                    Consultar publicação original →
                  </a>

                  <button
                    onClick={() => setModal(null)}
                    className="inline-flex rounded-xl border border-slate-300 px-5 py-3 font-black text-slate-700"
                  >
                    Fechar
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}