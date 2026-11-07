
import { NextRequest, NextResponse } from "next/server";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type DadosImagem = {
  estudo_id: string;
  url: string;
  legenda: string | null;
  descricao: string | null;
  provincia: string | null;
  municipio: string | null;
  data_registo: string | null;
  ordem: number;
};

function erroJson(mensagem: string, status = 400) {
  return NextResponse.json({ erro: mensagem }, { status });
}

function uuidValido(valor: unknown): valor is string {
  return (
    typeof valor === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      valor
    )
  );
}

function texto(
  valor: unknown,
  limite = 5000
): string | null {
  if (valor === null || valor === undefined || valor === "") {
    return null;
  }

  if (typeof valor !== "string") {
    return null;
  }

  const resultado = valor.trim();

  return resultado ? resultado.slice(0, limite) : null;
}

function dataValida(valor: unknown): string | null | undefined {
  if (valor === null || valor === undefined || valor === "") {
    return null;
  }

  if (
    typeof valor !== "string" ||
    !/^\d{4}-\d{2}-\d{2}$/.test(valor)
  ) {
    return undefined;
  }

  const data = new Date(`${valor}T00:00:00.000Z`);

  if (
    Number.isNaN(data.getTime()) ||
    data.toISOString().slice(0, 10) !== valor
  ) {
    return undefined;
  }

  return valor;
}

function validarDados(
  body: Record<string, unknown>
):
  | { valido: true; dados: DadosImagem }
  | { valido: false; erro: string } {
  if (!uuidValido(body.estudo_id)) {
    return {
      valido: false,
      erro: "O identificador do estudo é inválido.",
    };
  }

  const url = texto(body.url, 2000);

  if (!url) {
    return {
      valido: false,
      erro: "O endereço da imagem é obrigatório.",
    };
  }

  try {
    const endereco = new URL(url);

    if (
      endereco.protocol !== "https:" &&
      endereco.protocol !== "http:"
    ) {
      return {
        valido: false,
        erro: "O endereço da imagem deve utilizar HTTP ou HTTPS.",
      };
    }
  } catch {
    return {
      valido: false,
      erro: "O endereço da imagem não é válido.",
    };
  }

  const dataRegisto = dataValida(body.data_registo);

  if (dataRegisto === undefined) {
    return {
      valido: false,
      erro: "A data deve estar no formato AAAA-MM-DD.",
    };
  }

  const ordem =
    body.ordem === undefined || body.ordem === null
      ? 0
      : body.ordem;

  if (
    typeof ordem !== "number" ||
    !Number.isInteger(ordem)
  ) {
    return {
      valido: false,
      erro: "A ordem da imagem deve ser um número inteiro.",
    };
  }

  return {
    valido: true,
    dados: {
      estudo_id: body.estudo_id,
      url,
      legenda: texto(body.legenda, 500),
      descricao: texto(body.descricao, 5000),
      provincia: texto(body.provincia, 150),
      municipio: texto(body.municipio, 150),
      data_registo: dataRegisto,
      ordem,
    },
  };
}

// GET — listar imagens de um estudo ou todas as imagens
export async function GET(request: NextRequest) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Acesso não autorizado.", 401);
    }

    const estudoId = request.nextUrl.searchParams.get("estudo_id");

    if (estudoId && !uuidValido(estudoId)) {
      return erroJson("O identificador do estudo é inválido.");
    }

    const supabase = obterSupabaseAdmin();

    let consulta = supabase
      .from("agro_estudos_imagens")
      .select("*")
      .order("ordem", { ascending: true })
      .order("criada_em", { ascending: true });

    if (estudoId) {
      consulta = consulta.eq("estudo_id", estudoId);
    }

    const { data, error } = await consulta;

    if (error) {
      console.error("Erro ao listar imagens:", error);
      return erroJson("Não foi possível carregar as imagens.", 500);
    }

    return NextResponse.json({ dados: data ?? [] });
  } catch (error) {
    console.error("Erro inesperado ao listar imagens:", error);
    return erroJson("Erro interno ao carregar as imagens.", 500);
  }
}

// POST — registar imagem
export async function POST(request: NextRequest) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Acesso não autorizado.", 401);
    }

    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return erroJson("Os dados enviados são inválidos.");
    }

    const validacao = validarDados(body as Record<string, unknown>);

    if (!validacao.valido) {
      return erroJson(validacao.erro);
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_estudos_imagens")
      .insert(validacao.dados)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao registar imagem:", error);

      if (error.code === "23503") {
        return erroJson("O estudo indicado não foi encontrado.", 404);
      }

      return erroJson("Não foi possível registar a imagem.", 500);
    }

    return NextResponse.json(
      {
        mensagem: "Imagem registada com sucesso.",
        dados: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro inesperado ao registar imagem:", error);
    return erroJson("Erro interno ao registar a imagem.", 500);
  }
}

// PATCH — actualizar imagem
export async function PATCH(request: NextRequest) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Acesso não autorizado.", 401);
    }

    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return erroJson("Os dados enviados são inválidos.");
    }

    const registo = body as Record<string, unknown>;

    if (!uuidValido(registo.id)) {
      return erroJson("O identificador da imagem é inválido.");
    }

    const validacao = validarDados(registo);

    if (!validacao.valido) {
      return erroJson(validacao.erro);
    }

    const supabase = obterSupabaseAdmin();

    const { data: existente, error: erroBusca } = await supabase
      .from("agro_estudos_imagens")
      .select("id")
      .eq("id", registo.id)
      .maybeSingle();

    if (erroBusca) {
      console.error("Erro ao procurar imagem:", erroBusca);
      return erroJson("Não foi possível verificar a imagem.", 500);
    }

    if (!existente) {
      return erroJson("Imagem não encontrada.", 404);
    }

    const { data, error } = await supabase
      .from("agro_estudos_imagens")
      .update(validacao.dados)
      .eq("id", registo.id)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao actualizar imagem:", error);
      return erroJson("Não foi possível actualizar a imagem.", 500);
    }

    return NextResponse.json({
      mensagem: "Imagem actualizada com sucesso.",
      dados: data,
    });
  } catch (error) {
    console.error("Erro inesperado ao actualizar imagem:", error);
    return erroJson("Erro interno ao actualizar a imagem.", 500);
  }
}

// DELETE — eliminar registo da imagem
export async function DELETE(request: NextRequest) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Acesso não autorizado.", 401);
    }

    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return erroJson("Os dados enviados são inválidos.");
    }

    const id = (body as Record<string, unknown>).id;

    if (!uuidValido(id)) {
      return erroJson("O identificador da imagem é inválido.");
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_estudos_imagens")
      .delete()
      .eq("id", id)
      .select("id")
      .maybeSingle();

    if (error) {
      console.error("Erro ao eliminar imagem:", error);
      return erroJson("Não foi possível eliminar a imagem.", 500);
    }

    if (!data) {
      return erroJson("Imagem não encontrada.", 404);
    }

    return NextResponse.json({
      mensagem: "Registo da imagem eliminado com sucesso.",
    });
  } catch (error) {
    console.error("Erro inesperado ao eliminar imagem:", error);
    return erroJson("Erro interno ao eliminar a imagem.", 500);
  }
}
