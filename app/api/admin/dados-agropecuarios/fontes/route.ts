
import { NextRequest, NextResponse } from "next/server";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TIPOS = [
  "oficial",
  "cientifica",
  "bibliografica",
  "institucional",
  "campo",
  "outra",
] as const;

type DadosFonte = {
  titulo: string;
  entidade: string | null;
  tipo: (typeof TIPOS)[number];
  autor: string | null;
  ano: number | null;
  url: string | null;
  referencia: string | null;
  observacoes: string | null;
};

function erroJson(mensagem: string, status = 400) {
  return NextResponse.json({ erro: mensagem }, { status });
}

function texto(valor: unknown, limite = 5000): string | null {
  if (valor === null || valor === undefined || valor === "") {
    return null;
  }

  if (typeof valor !== "string") {
    return null;
  }

  const resultado = valor.trim();
  return resultado ? resultado.slice(0, limite) : null;
}

function uuidValido(valor: unknown): valor is string {
  return (
    typeof valor === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      valor
    )
  );
}

function validarDados(
  body: Record<string, unknown>
):
  | { valido: true; dados: DadosFonte }
  | { valido: false; erro: string } {
  const titulo = texto(body.titulo, 1000);

  if (!titulo) {
    return {
      valido: false,
      erro: "O título da fonte é obrigatório.",
    };
  }

  const tipo =
    body.tipo === undefined || body.tipo === ""
      ? "bibliografica"
      : body.tipo;

  if (
    typeof tipo !== "string" ||
    !TIPOS.includes(tipo as (typeof TIPOS)[number])
  ) {
    return {
      valido: false,
      erro: "O tipo de fonte indicado não é válido.",
    };
  }

  let ano: number | null = null;

  if (body.ano !== undefined && body.ano !== null && body.ano !== "") {
    if (
      typeof body.ano !== "number" ||
      !Number.isInteger(body.ano) ||
      body.ano < 1900 ||
      body.ano > 2200
    ) {
      return {
        valido: false,
        erro: "O ano deve ser um número inteiro entre 1900 e 2200.",
      };
    }

    ano = body.ano;
  }

  const url = texto(body.url, 2000);

  if (url) {
    try {
      const endereco = new URL(url);

      if (
        endereco.protocol !== "https:" &&
        endereco.protocol !== "http:"
      ) {
        return {
          valido: false,
          erro: "O endereço electrónico deve utilizar HTTP ou HTTPS.",
        };
      }
    } catch {
      return {
        valido: false,
        erro: "O endereço electrónico não é válido.",
      };
    }
  }

  return {
    valido: true,
    dados: {
      titulo,
      entidade: texto(body.entidade, 500),
      tipo: tipo as (typeof TIPOS)[number],
      autor: texto(body.autor, 1000),
      ano,
      url,
      referencia: texto(body.referencia, 10000),
      observacoes: texto(body.observacoes, 10000),
    },
  };
}

// GET — listar fontes
export async function GET() {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Acesso não autorizado.", 401);
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_fontes")
      .select("*")
      .order("criada_em", { ascending: false });

    if (error) {
      console.error("Erro ao listar fontes:", error);
      return erroJson("Não foi possível carregar as fontes.", 500);
    }

    return NextResponse.json({ dados: data ?? [] });
  } catch (error) {
    console.error("Erro inesperado ao listar fontes:", error);
    return erroJson("Erro interno ao carregar as fontes.", 500);
  }
}

// POST — registar fonte
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
      .from("agro_fontes")
      .insert(validacao.dados)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao registar fonte:", error);
      return erroJson("Não foi possível registar a fonte.", 500);
    }

    return NextResponse.json(
      {
        mensagem: "Fonte registada com sucesso.",
        dados: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro inesperado ao registar fonte:", error);
    return erroJson("Erro interno ao registar a fonte.", 500);
  }
}

// PATCH — actualizar fonte
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
      return erroJson("O identificador da fonte é inválido.");
    }

    const validacao = validarDados(registo);

    if (!validacao.valido) {
      return erroJson(validacao.erro);
    }

    const supabase = obterSupabaseAdmin();

    const { data: existente, error: erroBusca } = await supabase
      .from("agro_fontes")
      .select("id")
      .eq("id", registo.id)
      .maybeSingle();

    if (erroBusca) {
      console.error("Erro ao procurar fonte:", erroBusca);
      return erroJson("Não foi possível verificar a fonte.", 500);
    }

    if (!existente) {
      return erroJson("Fonte não encontrada.", 404);
    }

    const { data, error } = await supabase
      .from("agro_fontes")
      .update(validacao.dados)
      .eq("id", registo.id)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao actualizar fonte:", error);
      return erroJson("Não foi possível actualizar a fonte.", 500);
    }

    return NextResponse.json({
      mensagem: "Fonte actualizada com sucesso.",
      dados: data,
    });
  } catch (error) {
    console.error("Erro inesperado ao actualizar fonte:", error);
    return erroJson("Erro interno ao actualizar a fonte.", 500);
  }
}

// DELETE — eliminar fonte
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
      return erroJson("O identificador da fonte é inválido.");
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_fontes")
      .delete()
      .eq("id", id)
      .select("id")
      .maybeSingle();

    if (error) {
      console.error("Erro ao eliminar fonte:", error);
      return erroJson(
        "Não foi possível eliminar a fonte. Verifique se existem relações que a utilizam.",
        500
      );
    }

    if (!data) {
      return erroJson("Fonte não encontrada.", 404);
    }

    return NextResponse.json({
      mensagem: "Fonte eliminada com sucesso.",
    });
  } catch (error) {
    console.error("Erro inesperado ao eliminar fonte:", error);
    return erroJson("Erro interno ao eliminar a fonte.", 500);
  }
}
