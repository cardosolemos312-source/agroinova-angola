import { NextRequest, NextResponse } from "next/server";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function erroJson(mensagem: string, status = 400) {
  return NextResponse.json({ erro: mensagem }, { status });
}

function texto(valor: unknown, limite = 10000): string | null {
  if (valor === null || valor === undefined) return null;
  if (typeof valor !== "string") return null;
  return valor.trim().slice(0, limite) || null;
}

function urlValida(valor: unknown): string | null {
  const url = texto(valor, 2000);
  if (!url) return null;

  try {
    const analisada = new URL(url);
    if (analisada.protocol !== "http:" && analisada.protocol !== "https:") {
      return null;
    }
    return url;
  } catch {
    return null;
  }
}

function dadosInvalidos(body: unknown): boolean {
  return (
    !body ||
    typeof body !== "object" ||
    Array.isArray(body)
  );
}

const CAMPOS_TEXTO = [
  "legenda",
  "descricao",
  "provincia",
  "municipio",
] as const;

function prepararCampos(body: Record<string, unknown>) {
  const dados: Record<string, unknown> = {};

  for (const campo of CAMPOS_TEXTO) {
    if (campo in body) {
      const valor = body[campo];
      if (valor !== null && typeof valor !== "string") {
        throw new Error(`O campo ${campo} deve ser texto.`);
      }
      dados[campo] = texto(valor);
    }
  }

  if ("indicador_id" in body) {
    if (
      typeof body.indicador_id !== "string" ||
      !UUID.test(body.indicador_id)
    ) {
      throw new Error("O indicador associado é inválido.");
    }
    dados.indicador_id = body.indicador_id;
  }

  if ("url" in body) {
    const url = urlValida(body.url);
    if (!url) throw new Error("Introduza uma URL válida (HTTP ou HTTPS).");
    dados.url = url;
  }

  if ("data_registo" in body) {
    const data = body.data_registo;
    if (
      data !== null &&
      data !== "" &&
      (typeof data !== "string" ||
        !/^\d{4}-\d{2}-\d{2}$/.test(data))
    ) {
      throw new Error("A data do registo é inválida.");
    }
    dados.data_registo = data || null;
  }

  if ("ordem" in body) {
    const ordem = Number(body.ordem);
    if (!Number.isInteger(ordem) || ordem < 1) {
      throw new Error("A ordem de apresentação deve ser um número inteiro igual ou superior a 1.");
    }
    dados.ordem = ordem;
  }

  return dados;
}

function tratarErroSupabase(erro: { code?: string; message?: string }) {
  console.error("Erro Supabase — imagens dos indicadores:", erro);

  if (erro.code === "23503") {
    return erroJson("O indicador seleccionado não existe.", 400);
  }

  if (erro.code === "23505") {
    return erroJson("Já existe um registo com estes dados.", 409);
  }

  return erroJson("Não foi possível concluir a operação na base de dados.", 500);
}

export async function GET(request: NextRequest) {
  if (!(await administradorAutenticado())) {
    return erroJson("Acesso não autorizado.", 401);
  }

  try {
    const indicadorId = request.nextUrl.searchParams.get("indicador_id");
    const supabase = obterSupabaseAdmin();

    let consulta = supabase
      .from("agro_indicadores_imagens")
      .select("*")
      .order("ordem", { ascending: true })
      .order("criado_em", { ascending: false });

    if (indicadorId) {
      if (!UUID.test(indicadorId)) {
        return erroJson("O identificador do indicador é inválido.");
      }
      consulta = consulta.eq("indicador_id", indicadorId);
    }

    const { data, error } = await consulta;

    if (error) return tratarErroSupabase(error);

    return NextResponse.json({ dados: data ?? [] });
  } catch (erro) {
    console.error("Erro ao consultar imagens dos indicadores:", erro);
    return erroJson("Não foi possível consultar as imagens.", 500);
  }
}

export async function POST(request: NextRequest) {
  if (!(await administradorAutenticado())) {
    return erroJson("Acesso não autorizado.", 401);
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (dadosInvalidos(body)) {
      return erroJson("Os dados enviados são inválidos.");
    }

    if (
      typeof body.indicador_id !== "string" ||
      !UUID.test(body.indicador_id)
    ) {
      return erroJson("Seleccione um indicador válido.");
    }

    const dados = prepararCampos(body);

    if (!dados.url) {
      return erroJson("A URL da imagem é obrigatória.");
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_indicadores_imagens")
      .insert(dados)
      .select("*")
      .single();

    if (error) return tratarErroSupabase(error);

    return NextResponse.json(
      { mensagem: "Imagem do indicador criada com sucesso.", dados: data },
      { status: 201 }
    );
  } catch (erro) {
    if (erro instanceof Error && erro.message.startsWith("O campo ")) {
      return erroJson(erro.message);
    }
    if (erro instanceof Error && (
      erro.message.includes("URL") ||
      erro.message.includes("ordem") ||
      erro.message.includes("data") ||
      erro.message.includes("indicador")
    )) {
      return erroJson(erro.message);
    }

    console.error("Erro ao criar imagem do indicador:", erro);
    return erroJson("Não foi possível criar a imagem.", 500);
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await administradorAutenticado())) {
    return erroJson("Acesso não autorizado.", 401);
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (dadosInvalidos(body)) {
      return erroJson("Os dados enviados são inválidos.");
    }

    if (typeof body.id !== "string" || !UUID.test(body.id)) {
      return erroJson("O identificador da imagem é inválido.");
    }

    const dados = prepararCampos(body);
    delete dados.id;

    if (Object.keys(dados).length === 0) {
      return erroJson("Não foram enviados campos para actualizar.");
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_indicadores_imagens")
      .update(dados)
      .eq("id", body.id)
      .select("*")
      .maybeSingle();

    if (error) return tratarErroSupabase(error);
    if (!data) return erroJson("Imagem não encontrada.", 404);

    return NextResponse.json({
      mensagem: "Imagem do indicador actualizada com sucesso.",
      dados: data,
    });
  } catch (erro) {
    if (erro instanceof Error && (
      erro.message.includes("campo") ||
      erro.message.includes("URL") ||
      erro.message.includes("ordem") ||
      erro.message.includes("data") ||
      erro.message.includes("indicador")
    )) {
      return erroJson(erro.message);
    }

    console.error("Erro ao actualizar imagem do indicador:", erro);
    return erroJson("Não foi possível actualizar a imagem.", 500);
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await administradorAutenticado())) {
    return erroJson("Acesso não autorizado.", 401);
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (dadosInvalidos(body)) {
      return erroJson("Os dados enviados são inválidos.");
    }

    if (typeof body.id !== "string" || !UUID.test(body.id)) {
      return erroJson("O identificador da imagem é inválido.");
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_indicadores_imagens")
      .delete()
      .eq("id", body.id)
      .select("id")
      .maybeSingle();

    if (error) return tratarErroSupabase(error);
    if (!data) return erroJson("Imagem não encontrada.", 404);

    return NextResponse.json({
      mensagem: "Imagem do indicador eliminada com sucesso.",
    });
  } catch (erro) {
    console.error("Erro ao eliminar imagem do indicador:", erro);
    return erroJson("Não foi possível eliminar a imagem.", 500);
  }
}