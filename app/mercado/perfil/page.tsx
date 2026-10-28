
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Bell,
  Box,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Eye,
  Leaf,
  LoaderCircle,
  LogOut,
  MapPin,
  Package,
  Plus,
  RefreshCw,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Store,
  UserRound,
  Wallet,
  XCircle,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Vendedor = {
  id: string;
  user_id?: string;
  nome?: string | null;
  tipo?: string | null;
  telefone?: string | null;
  provincia?: string | null;
  municipio?: string | null;
  estado?: string | null;
};

type Produto = {
  id: string | number;
  nome: string;
  descricao?: string | null;
  categoria?: string | null;
  preco?: number | string | null;
  quantidade?: number | null;
  unidade?: string | null;
  provincia?: string | null;
  municipio?: string | null;
  imagens?: string[] | null;
  estado?: string | null;
  motivo_rejeicao?: string | null;
  created_at?: string | null;
};

const supabase = createClient();

function normalizarEstado(estado?: string | null) {
  return (estado || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function formatarPreco(preco?: number | string | null) {
  if (preco === null || preco === undefined || preco === "") {
    return "Preço não indicado";
  }

  const valor = Number(preco);

  if (!Number.isFinite(valor)) {
    return "Preço não indicado";
  }

  return `${new Intl.NumberFormat("pt-PT", {
    maximumFractionDigits: 2,
  }).format(valor)} Kz`;
}

function formatarData(data?: string | null) {
  if (!data) return "Data não disponível";

  const dataConvertida = new Date(data);

  if (Number.isNaN(dataConvertida.getTime())) {
    return "Data não disponível";
  }

  return dataConvertida.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function nomeEstado(estado?: string | null) {
  const estadoNormalizado = normalizarEstado(estado);

  const nomes: Record<string, string> = {
    pendente: "Em análise",
    aprovado: "Aprovado",
    rejeitado: "Rejeitado",
    recusado: "Rejeitado",
    arquivado: "Arquivado",
    ativo: "Activo",
    inativo: "Inactivo",
  };

  return nomes[estadoNormalizado] || estado || "Não definido";
}

function classeEstado(estado?: string | null) {
  const estadoNormalizado = normalizarEstado(estado);

  if (estadoNormalizado === "aprovado") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-600/20";
  }

  if (estadoNormalizado === "pendente") {
    return "bg-amber-50 text-amber-700 ring-amber-600/20";
  }

  if (
    estadoNormalizado === "rejeitado" ||
    estadoNormalizado === "recusado"
  ) {
    return "bg-red-50 text-red-700 ring-red-600/20";
  }

  return "bg-slate-100 text-slate-600 ring-slate-500/20";
}

function iniciais(nome?: string | null) {
  const palavras = (nome || "Vendedor")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return palavras
    .slice(0, 2)
    .map((palavra) => palavra[0].toUpperCase())
    .join("");
}

export default function PerfilVendedorPage() {
  const router = useRouter();

  const [vendedor, setVendedor] = useState<Vendedor | null>(null);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [aSair, setASair] = useState(false);

  const carregarDados = useCallback(async () => {
    setCarregando(true);
    setErro("");

    try {
      const {
        data: { user },
        error: erroAuth,
      } = await supabase.auth.getUser();

      if (erroAuth || !user) {
        router.replace("/mercado/entrar");
        return;
      }

      const { data: perfil, error: erroPerfil } = await supabase
        .from("mercado_vendedores")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (erroPerfil) {
        throw new Error(
          "Não foi possível carregar o perfil. Verifique a ligação ao Supabase."
        );
      }

      if (!perfil) {
        setVendedor(null);
        setProdutos([]);
        setErro(
          "Ainda não encontramos um perfil de vendedor associado a esta conta. Confirme o seu registo na área comercial."
        );
        return;
      }

      setVendedor(perfil as Vendedor);

      const { data: lista, error: erroProdutos } = await supabase
        .from("mercado_produtos")
        .select(
          "id, nome, descricao, categoria, preco, quantidade, unidade, provincia, municipio, imagens, estado, motivo_rejeicao, created_at"
        )
        .eq("vendedor_id", perfil.id)
        .order("created_at", { ascending: false });

      if (erroProdutos) {
        throw new Error(
          "O perfil foi carregado, mas não foi possível consultar os seus produtos."
        );
      }

      setProdutos((lista || []) as Produto[]);
    } catch (erroDesconhecido) {
      setErro(
        erroDesconhecido instanceof Error
          ? erroDesconhecido.message
          : "Ocorreu um erro ao carregar a área de gestão."
      );
    } finally {
      setCarregando(false);
    }
  }, [router]);

  useEffect(() => {
    void carregarDados();
  }, [carregarDados]);

  async function terminarSessao() {
    setASair(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      setErro("Não foi possível terminar a sessão. Tente novamente.");
      setASair(false);
      return;
    }

    router.replace("/mercado/entrar");
    router.refresh();
  }

  const contar = (estado: string) =>
    produtos.filter(
      (produto) => normalizarEstado(produto.estado) === estado
    ).length;

  const totalPendentes = contar("pendente");
  const totalAprovados = contar("aprovado");
  const totalArquivados = contar("arquivado");
  const totalRejeitados =
    contar("rejeitado") + contar("recusado");

  const produtosFiltrados = produtos.filter((produto) => {
    if (filtro === "todos") return true;

    if (filtro === "rejeitado") {
      const estado = normalizarEstado(produto.estado);
      return estado === "rejeitado" || estado === "recusado";
    }

    return normalizarEstado(produto.estado) === filtro;
  });

  const filtros = [
    { id: "todos", nome: "Todos", quantidade: produtos.length },
    { id: "aprovado", nome: "Aprovados", quantidade: totalAprovados },
    { id: "pendente", nome: "Em análise", quantidade: totalPendentes },
    { id: "rejeitado", nome: "Rejeitados", quantidade: totalRejeitados },
    { id: "arquivado", nome: "Arquivados", quantidade: totalArquivados },
  ];

  if (carregando) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50">
            <LoaderCircle className="h-7 w-7 animate-spin text-green-700" />
          </div>
          <h1 className="text-lg font-bold text-slate-900">
            A preparar a sua área comercial
          </h1>
          <p className="text-sm text-slate-500">
            Estamos a carregar os dados do seu perfil.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f7f5] text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/mercado" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-800 text-white shadow-sm">
              <Leaf className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-black tracking-tight text-green-900 sm:text-lg">
                AGROINOVA
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                Mercado agropecuário
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/mercado"
              className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 sm:flex"
            >
              <Store className="h-4 w-4" />
              Ver mercado
            </Link>

            <button
              type="button"
              onClick={() => void carregarDados()}
              title="Actualizar dados"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
            >
              <RefreshCw className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => void terminarSessao()}
              disabled={aSair}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 disabled:opacity-50"
            >
              {aSair ? (
                <LoaderCircle className="h-4 w-4 animate-spin" />
              ) : (
                <LogOut className="h-4 w-4" />
              )}
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {erro && (
          <div
            role="alert"
            className="mb-6 flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
              <p className="text-sm leading-6 text-amber-900">{erro}</p>
            </div>

            <button
              type="button"
              onClick={() => void carregarDados()}
              className="shrink-0 rounded-lg border border-amber-300 px-3 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100"
            >
              Tentar novamente
            </button>
          </div>
        )}

        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-green-950 via-green-900 to-green-800 p-6 text-white shadow-lg sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full border-[40px] border-white/5" />
          <div className="pointer-events-none absolute -bottom-28 right-1/4 -z-10 h-64 w-64 rounded-full bg-green-400/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-green-50">
                <ShieldCheck className="h-4 w-4" />
                CENTRO DE GESTÃO COMERCIAL
              </div>

              <p className="mb-2 text-sm text-green-100">
                Bem-vindo à sua área de gestão
              </p>

              <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {vendedor?.nome || "Perfil do vendedor"}
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-green-50/90 sm:text-base">
                Gira os seus anúncios, acompanhe a aprovação dos produtos e
                mantenha a sua actividade comercial organizada num único lugar.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/mercado/publicar"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-green-900 shadow-sm transition hover:bg-green-50"
                >
                  <Plus className="h-4 w-4" />
                  Publicar produto
                </Link>

                <Link
                  href="/mercado"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  <Eye className="h-4 w-4" />
                  Explorar mercado
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm lg:min-w-64 lg:flex-col lg:items-start lg:p-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-xl font-black text-white">
                {iniciais(vendedor?.nome)}
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-100">
                  A sua conta
                </p>
                <p className="mt-1 break-words text-lg font-bold">
                  {vendedor?.nome || "Vendedor"}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-white">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {nomeEstado(vendedor?.estado)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-7">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
                Visão geral
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Resumo actualizado dos seus anúncios.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <Activity className="h-4 w-4 text-green-700" />
              Dados da sua conta
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-500 sm:text-sm">
                  Total de produtos
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-800">
                  <Package className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-3xl font-black tracking-tight text-slate-900">
                {produtos.length}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Anúncios associados à conta
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-500 sm:text-sm">
                  Em análise
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <Clock3 className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-3xl font-black tracking-tight text-slate-900">
                {totalPendentes}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Aguardam decisão
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-500 sm:text-sm">
                  Aprovados
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <BadgeCheck className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-3xl font-black tracking-tight text-slate-900">
                {totalAprovados}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Aprovados para publicação
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-500 sm:text-sm">
                  Arquivados
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                  <Box className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-3xl font-black tracking-tight text-slate-900">
                {totalArquivados}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Fora da publicação activa
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.85fr)]">
          <div className="min-w-0 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-extrabold text-slate-900">
                  Gestão de produtos
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Consulte os anúncios e acompanhe o seu estado.
                </p>
              </div>

              <Link
                href="/mercado/publicar"
                className="inline-flex items-center gap-2 rounded-xl bg-green-800 px-3.5 py-2.5 text-sm font-bold text-white transition hover:bg-green-900"
              >
                <Plus className="h-4 w-4" />
                Novo produto
              </Link>
            </div>

            <div className="mt-5 flex gap-2 overflow-x-auto border-b border-slate-100 pb-3">
              {filtros.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFiltro(item.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                    filtro === item.id
                      ? "bg-green-800 text-white"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {item.nome}
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[10px] ${
                      filtro === item.id
                        ? "bg-white/15 text-white"
                        : "bg-white text-slate-500"
                    }`}
                  >
                    {item.quantidade}
                  </span>
                </button>
              ))}
            </div>

            {produtosFiltrados.length === 0 ? (
              <div className="flex flex-col items-center px-4 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">
                  {produtos.length === 0
                    ? "Comece a sua actividade comercial"
                    : "Nenhum produto nesta categoria"}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  {produtos.length === 0
                    ? "Publique o seu primeiro produto e acompanhe aqui o processo de aprovação."
                    : "Experimente outro filtro para consultar os seus anúncios."}
                </p>
                {produtos.length === 0 && (
                  <Link
                    href="/mercado/publicar"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-green-800 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-900"
                  >
                    <Plus className="h-4 w-4" />
                    Publicar primeiro produto
                  </Link>
                )}
              </div>
            ) : (
              <div className="mt-2 divide-y divide-slate-100">
                {produtosFiltrados.map((produto) => {
                  const imagem = produto.imagens?.find(Boolean);

                  return (
                    <article
                      key={produto.id}
                      className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center"
                    >
                      <div className="flex h-20 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100 sm:w-20">
                        {imagem ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={imagem}
                            alt={produto.nome}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <Package className="h-8 w-8 text-slate-400" />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="break-words font-bold text-slate-900">
                            {produto.nome}
                          </h3>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ring-inset ${classeEstado(
                              produto.estado
                            )}`}
                          >
                            {nomeEstado(produto.estado)}
                          </span>
                        </div>

                        <p className="mt-1 text-sm font-semibold text-green-800">
                          {formatarPreco(produto.preco)}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
                          <span>
                            Quantidade: {produto.quantidade ?? 1}{" "}
                            {produto.unidade || "unidade(s)"}
                          </span>
                          {(produto.provincia || produto.municipio) && (
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {[produto.municipio, produto.provincia]
                                .filter(Boolean)
                                .join(", ")}
                            </span>
                          )}
                          <span>{formatarData(produto.created_at)}</span>
                        </div>

                        {produto.motivo_rejeicao && (
                          <p className="mt-2 text-xs leading-5 text-red-700">
                            Motivo indicado: {produto.motivo_rejeicao}
                          </p>
                        )}
                      </div>

                      <Link
                        href={`/mercado/produto/${produto.id}`}
                        className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-green-300 hover:bg-green-50 hover:text-green-800 sm:self-center"
                      >
                        Consultar
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </article>
                  );
                })}
              </div>
            )}
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-800">
                  <UserRound className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-extrabold text-slate-900">
                    Dados comerciais
                  </h2>
                  <p className="text-xs text-slate-500">
                    Informações da sua conta
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Nome</p>
                    <p className="mt-1 break-words text-sm font-semibold text-slate-800">
                      {vendedor?.nome || "Não indicado"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                      Tipo de vendedor
                    </p>
                    <p className="mt-1 break-words text-sm font-semibold text-slate-800">
                      {vendedor?.tipo || "Não indicado"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Localização</p>
                    <p className="mt-1 break-words text-sm font-semibold text-slate-800">
                      {[vendedor?.municipio, vendedor?.provincia]
                        .filter(Boolean)
                        .join(", ") || "Não indicada"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Telefone</p>
                    <p className="mt-1 break-words text-sm font-semibold text-slate-800">
                      {vendedor?.telefone || "Não indicado"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-green-100 bg-green-50 p-3">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-800" />
                  <p className="text-xs leading-5 text-green-900">
                    Os dados apresentados pertencem ao perfil comercial
                    associado à sua sessão.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="font-extrabold text-slate-900">
                Atalhos de gestão
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Aceda rapidamente às principais áreas.
              </p>

              <div className="mt-4 space-y-2">
                <Link
                  href="/mercado/publicar"
                  className="group flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-green-200 hover:bg-green-50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-800">
                    <Plus className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-slate-800">
                      Publicar produto
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-500">
                      Criar um novo anúncio
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-green-800" />
                </Link>

                <Link
                  href="/mercado"
                  className="group flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-green-200 hover:bg-green-50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-800">
                    <Store className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-slate-800">
                      Mercado agropecuário
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-500">
                      Consultar ofertas publicadas
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-green-800" />
                </Link>

                <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <Settings2 className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-slate-800">
                      Gestão de conta
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-500">
                      Edição de dados a integrar numa próxima etapa
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-green-900 to-green-700 p-5 text-white shadow-sm">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-green-200" />
                <h2 className="font-bold">Acompanhe os seus anúncios</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-green-50">
                Consulte regularmente o estado dos produtos para saber quais
                aguardam aprovação e quais já estão disponíveis no mercado.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFiltro("pendente");
                  window.scrollTo({ top: 650, behavior: "smooth" });
                }}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                Ver pendentes
                <ArrowDownRight className="h-4 w-4" />
              </button>
            </div>
          </aside>
        </section>

        <footer className="mt-8 border-t border-slate-200 py-6">
          <div className="flex flex-col gap-2 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>
              © {new Date().getFullYear()} AGROINOVA-ANGOLA
            </p>
            <p>Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
