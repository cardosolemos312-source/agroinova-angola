import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    if (!(await administradorAutenticado())) {
      return NextResponse.json({ erro: "Sessão de administrador inválida." }, { status: 401 });
    }

    const form = await request.formData();
    const ficheiro = form.get("imagem");
    const entidade = form.get("entidade");

    if (!(ficheiro instanceof File)) {
      return NextResponse.json({ erro: "Selecciona uma imagem." }, { status: 400 });
    }
    if (entidade !== "evento" && entidade !== "instituicao") {
      return NextResponse.json({ erro: "Tipo de registo inválido." }, { status: 400 });
    }
    if (!["image/jpeg", "image/png", "image/webp"].includes(ficheiro.type)) {
      return NextResponse.json({ erro: "Usa JPG, PNG ou WebP." }, { status: 400 });
    }
    if (ficheiro.size <= 0 || ficheiro.size > 5 * 1024 * 1024) {
      return NextResponse.json({ erro: "A imagem deve ter até 5 MB." }, { status: 400 });
    }

    const extensao = ficheiro.type === "image/jpeg" ? "jpg" :
      ficheiro.type === "image/png" ? "png" : "webp";
    const caminho = `agroacademia/${entidade}/${randomUUID()}.${extensao}`;
    const supabase = obterSupabaseAdmin();
    const { error } = await supabase.storage
      .from("agroinova-arquivos")
      .upload(caminho, Buffer.from(await ficheiro.arrayBuffer()), {
        contentType: ficheiro.type,
        upsert: false,
      });

    if (error) {
      return NextResponse.json({
        erro: `Supabase Storage: ${error.message}. Confirma se o bucket agroinova-arquivos existe.`,
      }, { status: 500 });
    }

    const { data } = supabase.storage.from("agroinova-arquivos").getPublicUrl(caminho);
    return NextResponse.json({ sucesso: true, url: data.publicUrl });
  } catch (error) {
    const mensagem = error instanceof Error ? error.message : "Erro ao carregar a imagem.";
    return NextResponse.json({ erro: mensagem }, { status: 500 });
  }
}