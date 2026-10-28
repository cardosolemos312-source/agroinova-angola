import { NextResponse } from "next/server";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

type ProdutoPendente = {
  id: string;
  vendedor_id: string;
  nome: string;
  descricao: string;
  categoria: string;
  preco: number | string | null;
  preco_negociavel: boolean;
  quantidade: number | string;
  unidade: string;
  provincia: string;
  municipio: string | null;
  imagens: string[] | null;
  estado: string;
  motivo_rejeicao: string | null;
  created_at: string;
};

type Vendedor = {
  id: string;
  nome: string;
  telefone: string | null;
  whatsapp: string | null;
  provincia: string | null;
  municipio: string | null;
};

type ResultadoDecisao = {
  sucesso: boolean;
  id: string;
  nome: string;
  estado: string;
  acao: string;
};

function erroJson(erro: string, status: number) {
  return NextResponse.json({ sucesso: false, erro }, { status });
}

function uuidValido(id: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);
}

function interpretarErroSQL(mensagem: string) {
  const texto = mensagem.toLowerCase();

  if (
    texto.includes("nao encontrado") ||
    texto.includes("não encontrado") ||
    texto.includes("nao esta pendente") ||
    texto.includes("não está pendente")
  ) {
    return erroJson(
      "O anuncio nao existe ou ja foi analisado.",
      409,
    );
  }

  if (
    texto.includes("motivo de rejeicao") ||
    texto.includes("motivo de rejeição")
  ) {
    return erroJson(
      "Indique um motivo de rejeicao valido.",
      400,
    );
  }

  console.error("Erro na decisao administrativa do Mercado:", mensagem);
  return erroJson(
    "Nao foi possivel concluir a decisao administrativa.",
    500,
  );
}

export async function GET() {
  if (!(await administradorAutenticado())) {
    return erroJson("Acesso nao autorizado.", 401);
  }

  try {
    const supabase = obterSupabaseAdmin();
    const { data, error } = await supabase
  .from("mercado_produtos")
  .select("id,vendedor_id,nome,descricao,categoria,preco,preco_negociavel,quantidade,unidade,provincia,municipio,imagens,estado,motivo_rejeicao,created_at")
  .order("created_at", { ascending: false })
  .limit(200);

    if (error) {
      console.error("Erro ao carregar anuncios pendentes:", error.message);
      return erroJson("Nao foi possivel carregar os anuncios pendentes.", 500);
    }

    const produtos = (data ?? []) as unknown as ProdutoPendente[];
    const idsVendedores = [...new Set(produtos.map((p) => p.vendedor_id))];
    let vendedores: Vendedor[] = [];

    if (idsVendedores.length > 0) {
      const resultado = await supabase
        .from("mercado_vendedores")
        .select("id,nome,telefone,whatsapp,provincia,municipio")
        .in("id", idsVendedores);

      if (resultado.error) {
        console.error("Erro ao carregar vendedores:", resultado.error.message);
        return erroJson("Nao foi possivel carregar os dados dos vendedores.", 500);
      }

      vendedores = (resultado.data ?? []) as unknown as Vendedor[];
    }

    const vendedoresPorId = new Map(
      vendedores.map((vendedor) => [vendedor.id, vendedor]),
    );

    return NextResponse.json(
      {
        sucesso: true,
        produtos: produtos.map((produto) => ({
          ...produto,
          preco: produto.preco === null ? null : Number(produto.preco),
          quantidade: Number(produto.quantidade),
          imagens: produto.imagens ?? [],
          vendedor: vendedoresPorId.get(produto.vendedor_id) ?? null,
        })),
      },
      { headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  } catch (error) {
    console.error("Erro inesperado na gestao do Mercado:", error);
    return erroJson("Ocorreu um erro ao consultar os anuncios.", 500);
  }
}

export async function POST(request: Request) {
  if (!(await administradorAutenticado())) {
    return erroJson("Acesso nao autorizado.", 401);
  }

  let corpo: unknown;

  try {
    corpo = await request.json();
  } catch {
    return erroJson("O pedido nao contem JSON valido.", 400);
  }

  if (typeof corpo !== "object" || corpo === null || Array.isArray(corpo)) {
    return erroJson("Os dados enviados sao invalidos.", 400);
  }

  const dados = corpo as Record<string, unknown>;
  const id = typeof dados.id === "string" ? dados.id.trim() : "";
  const acao = dados.acao;
  const motivo = typeof dados.motivo === "string" ? dados.motivo.trim() : "";

  if (!uuidValido(id)) {
    return erroJson("O identificador do anuncio e invalido.", 400);
  }

  if (acao !== "aprovar" && acao !== "rejeitar") {
    return erroJson("A acao deve ser aprovar ou rejeitar.", 400);
  }

  if (acao === "rejeitar" && (!motivo || motivo.length > 1000)) {
    return erroJson(
      "Indique um motivo de rejeicao (ate 1000 caracteres).",
      400,
    );
  }

  try {
    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase.rpc(
      "admin_mercado_decidir_produto",
      {
        p_produto_id: id,
        p_acao: acao,
        p_motivo: acao === "rejeitar" ? motivo : null,
      },
    );

    if (error) {
      return interpretarErroSQL(error.message);
    }

    const resultado = data as unknown as ResultadoDecisao | null;

    if (!resultado?.sucesso) {
      return erroJson(
        "Nao foi possivel confirmar a decisao administrativa.",
        500,
      );
    }

    return NextResponse.json({
      sucesso: true,
      mensagem:
        acao === "aprovar"
          ? "Anuncio aprovado e decisao registada."
          : "Anuncio rejeitado e motivo registado.",
      produto: {
        id: resultado.id,
        estado: resultado.estado,
        motivo_rejeicao: acao === "rejeitar" ? motivo : null,
      },
    });
  } catch (error) {
    console.error("Erro inesperado ao analisar anuncio:", error);
    return erroJson("Ocorreu um erro ao analisar o anuncio.", 500);
  }
}

export async function DELETE(request: Request) {
  if (!(await administradorAutenticado())) {
    return erroJson("Acesso nao autorizado.", 401);
  }

  let corpo: unknown;

  try {
    corpo = await request.json();
  } catch {
    return erroJson("O pedido nao contem JSON valido.", 400);
  }

  if (typeof corpo !== "object" || corpo === null || Array.isArray(corpo)) {
    return erroJson("Os dados enviados sao invalidos.", 400);
  }

  const dados = corpo as Record<string, unknown>;
  const id = typeof dados.id === "string" ? dados.id.trim() : "";
  const confirmar = dados.confirmar === true;

  if (!uuidValido(id)) {
    return erroJson("O identificador do anuncio e invalido.", 400);
  }

  if (!confirmar) {
    return erroJson("Confirme a eliminacao do anuncio.", 400);
  }

  try {
    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase.rpc(
      "admin_mercado_decidir_produto",
      {
        p_produto_id: id,
        p_acao: "remover",
        p_motivo: null,
      },
    );

    if (error) {
      return interpretarErroSQL(error.message);
    }

    const resultado = data as unknown as ResultadoDecisao | null;

    if (!resultado?.sucesso) {
      return erroJson(
        "Nao foi possivel confirmar a remocao do anuncio.",
        500,
      );
    }

    return NextResponse.json({
      sucesso: true,
      mensagem: "Anuncio removido e decisao registada na auditoria.",
      produto: {
        id: resultado.id,
        nome: resultado.nome,
      },
    });
  } catch (error) {
    console.error("Erro inesperado ao eliminar anuncio:", error);
    return erroJson("Ocorreu um erro ao eliminar o anuncio.", 500);
  }
}