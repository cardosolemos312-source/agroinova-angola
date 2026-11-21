import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BUCKET = "agroinova-arquivos";
const LIMITE_IMAGEM = 5 * 1024 * 1024;
const LIMITE_IMAGENS = 10;

function erroJson(mensagem: string, status = 400) {
  return NextResponse.json(
    { sucesso: false, erro: mensagem },
    { status }
  );
}

export async function POST(request: Request) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const form = await request.formData();
    const campanhaId = String(form.get("campanha_id") || "").trim();
    const legenda = String(form.get("legenda") || "").trim() || null;
    const entradas = form.getAll("imagens");

    if (
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(campanhaId)
    ) {
      return erroJson("Identificador da campanha inválido.");
    }

    if (
      entradas.length === 0 ||
      !entradas.every((entrada): entrada is File => entrada instanceof File)
    ) {
      return erroJson("Selecciona pelo menos uma imagem.");
    }

    const ficheiros = entradas;

    if (ficheiros.length > LIMITE_IMAGENS) {
      return erroJson(`Podes carregar no máximo ${LIMITE_IMAGENS} imagens de cada vez.`);
    }

    for (const ficheiro of ficheiros) {
      if (!["image/jpeg", "image/png", "image/webp"].includes(ficheiro.type)) {
        return erroJson("Usa apenas imagens JPG, PNG ou WebP.");
      }

      if (ficheiro.size <= 0 || ficheiro.size > LIMITE_IMAGEM) {
        return erroJson("Cada imagem deve ter até 5 MB.");
      }
    }

    const supabase = obterSupabaseAdmin();

    const { data: campanha, error: erroCampanha } = await supabase
      .from("agro_campanhas")
      .select("id")
      .eq("id", campanhaId)
      .maybeSingle();

    if (erroCampanha) {
      console.error("Erro ao verificar campanha:", erroCampanha);
      return erroJson("Não foi possível verificar a campanha.", 500);
    }

    if (!campanha) {
      return erroJson("Campanha não encontrada.", 404);
    }

    const { data: ultimaImagem, error: erroOrdem } = await supabase
      .from("agro_campanhas_imagens")
      .select("ordem")
      .eq("campanha_id", campanhaId)
      .order("ordem", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (erroOrdem) {
      console.error("Erro ao consultar ordem das imagens:", erroOrdem);
      return erroJson("Não foi possível preparar a galeria.", 500);
    }

    let proximaOrdem = (ultimaImagem?.ordem ?? 0) + 1;
    const caminhos: string[] = [];
    const registos: {
      campanha_id: string;
      url: string;
      caminho_storage: string;
      legenda: string | null;
      ordem: number;
    }[] = [];

    try {
      for (const ficheiro of ficheiros) {
        const extensao =
          ficheiro.type === "image/jpeg"
            ? "jpg"
            : ficheiro.type === "image/png"
              ? "png"
              : "webp";

        const caminho =
          `agroinova/campanhas/${campanhaId}/${randomUUID()}.${extensao}`;

        const { error: erroUpload } = await supabase.storage
          .from(BUCKET)
          .upload(caminho, Buffer.from(await ficheiro.arrayBuffer()), {
            contentType: ficheiro.type,
            upsert: false,
          });

        if (erroUpload) {
          throw new Error(`Erro no Storage: ${erroUpload.message}`);
        }

        caminhos.push(caminho);

        const { data: urlPublica } = supabase.storage
          .from(BUCKET)
          .getPublicUrl(caminho);

        registos.push({
          campanha_id: campanhaId,
          url: urlPublica.publicUrl,
          caminho_storage: caminho,
          legenda,
          ordem: proximaOrdem++,
        });
      }

      const { data, error } = await supabase
        .from("agro_campanhas_imagens")
        .insert(registos)
        .select("*");

      if (error) {
        throw new Error(`Erro ao registar imagens: ${error.message}`);
      }

      return NextResponse.json({
        sucesso: true,
        mensagem: "Imagens carregadas com sucesso.",
        imagens: data,
      }, { status: 201 });
    } catch (erro) {
      if (caminhos.length > 0) {
        const { error: erroRemocao } = await supabase.storage
          .from(BUCKET)
          .remove(caminhos);

        if (erroRemocao) {
          console.error("Não foi possível limpar ficheiros após falha:", erroRemocao);
        }
      }

      throw erro;
    }
  } catch (erro) {
    console.error("Erro ao carregar imagens da campanha:", erro);

    const mensagem =
      erro instanceof Error
        ? erro.message
        : "Não foi possível carregar as imagens.";

    return erroJson(mensagem, 500);
  }
}