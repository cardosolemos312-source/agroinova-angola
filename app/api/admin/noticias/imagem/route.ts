
import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TAMANHO_MAXIMO = 5 * 1024 * 1024;
const BUCKET = "noticias";

const TIPOS_PERMITIDOS: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export async function POST(request: Request) {
  try {
    if (!(await administradorAutenticado())) {
      return NextResponse.json(
        { sucesso: false, erro: "Sessão administrativa inválida." },
        { status: 401 }
      );
    }

    const formulario = await request.formData();
    const ficheiro = formulario.get("imagem");

    if (!(ficheiro instanceof File)) {
      return NextResponse.json(
        { sucesso: false, erro: "Seleccione uma imagem." },
        { status: 400 }
      );
    }

    if (!TIPOS_PERMITIDOS[ficheiro.type]) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: "Formato não permitido. Utilize JPG, PNG ou WebP.",
        },
        { status: 400 }
      );
    }

    if (ficheiro.size <= 0 || ficheiro.size > TAMANHO_MAXIMO) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: "A imagem deve ter um tamanho máximo de 5 MB.",
        },
        { status: 400 }
      );
    }

    const supabase = obterSupabaseAdmin();
    const extensao = TIPOS_PERMITIDOS[ficheiro.type];
    const caminho = `${new Date().toISOString().slice(0, 10)}/${randomUUID()}.${extensao}`;

    const bytes = Buffer.from(await ficheiro.arrayBuffer());

    const { error: erroUpload } = await supabase.storage
      .from(BUCKET)
      .upload(caminho, bytes, {
        contentType: ficheiro.type,
        cacheControl: "31536000",
        upsert: false,
      });

    if (erroUpload) {
      console.error("Erro ao carregar imagem:", erroUpload.message);

      return NextResponse.json(
        {
          sucesso: false,
          erro:
            "Não foi possível carregar a imagem. Confirme se o bucket noticias existe no Supabase.",
        },
        { status: 500 }
      );
    }

    const { data } = supabase.storage
      .from(BUCKET)
      .getPublicUrl(caminho);

    return NextResponse.json({
      sucesso: true,
      url: data.publicUrl,
      mensagem: "Imagem carregada com sucesso.",
    });
  } catch (erro) {
    console.error("Erro na API de imagens:", erro);

    return NextResponse.json(
      { sucesso: false, erro: "Não foi possível processar a imagem." },
      { status: 500 }
    );
  }
}
