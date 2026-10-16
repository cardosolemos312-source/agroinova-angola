
import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BUCKET = "agroinova-arquivos";
const PASTA = "noticias";

const MAX_IMAGEM_BYTES = 8 * 1024 * 1024;
const MAX_PDF_BYTES = 25 * 1024 * 1024;

const CATEGORIAS = [
  "Agricultura",
  "Pecuária",
  "Florestas",
  "Pescas",
  "Solos",
  "Clima",
  "Investigação",
  "Tecnologia e inovação",
  "Institucional",
];

const ESTADOS = ["rascunho", "publicada", "arquivada"] as const;

type EstadoNoticia = (typeof ESTADOS)[number];

type DadosNoticia = {
  id?: string;
  titulo?: string;
  resumo?: string;
  conteudo?: string;
  categoria?: string;
  imagem_url?: string | null;
  pdf_url?: string | null;
  autor?: string;
  estado?: EstadoNoticia;
  destaque?: boolean;
};

type DadosNoticiaValidados = {
  titulo: string;
  resumo: string;
  conteudo: string;
  categoria: string;
  imagem_url: string | null;
  pdf_url: string | null;
  autor: string;
  estado: EstadoNoticia;
  destaque: boolean;
};

type ResultadoValidacao =
  | { sucesso: false; erro: string }
  | { sucesso: true; dados: DadosNoticiaValidados };

type FicheirosFormulario = {
  imagem: File | null;
  pdf: File | null;
};

function erroJson(mensagem: string, status: number) {
  return NextResponse.json(
    { sucesso: false, erro: mensagem },
    { status }
  );
}

function texto(valor: FormDataEntryValue | null): string {
  return typeof valor === "string" ? valor : "";
}

function validarUrl(valor: string): boolean {
  if (!valor) return true;
  if (valor.length > 2000) return false;

  try {
    const url = new URL(valor);
    return (
      (url.protocol === "https:" || url.protocol === "http:") &&
      Boolean(url.hostname)
    );
  } catch {
    return false;
  }
}

function validarDados(body: DadosNoticia): ResultadoValidacao {
  const titulo = body.titulo?.trim() ?? "";
  const resumo = body.resumo?.trim() ?? "";
  const conteudo = body.conteudo?.trim() ?? "";
  const categoria = body.categoria?.trim() || "Agricultura";
  const imagem_url = body.imagem_url?.trim() || "";
  const pdf_url = body.pdf_url?.trim() || "";
  const autor = body.autor?.trim() || "Redacção AGROINOVA";
  const estado = body.estado ?? "rascunho";

  if (!titulo || titulo.length > 200) {
    return {
      sucesso: false,
      erro: "O título é obrigatório e deve ter até 200 caracteres.",
    };
  }

  if (resumo.length > 1000 || conteudo.length > 100000) {
    return {
      sucesso: false,
      erro: "O resumo ou o conteúdo excede o limite permitido.",
    };
  }

  if (!CATEGORIAS.includes(categoria)) {
    return { sucesso: false, erro: "Categoria inválida." };
  }

  if (!(ESTADOS as readonly string[]).includes(estado)) {
    return {
      sucesso: false,
      erro: "Estado de publicação inválido.",
    };
  }

  if (!validarUrl(imagem_url)) {
    return {
      sucesso: false,
      erro: "O endereço da imagem guardado é inválido.",
    };
  }

  if (!validarUrl(pdf_url)) {
    return {
      sucesso: false,
      erro: "O endereço do PDF guardado é inválido.",
    };
  }

  return {
    sucesso: true,
    dados: {
      titulo,
      resumo,
      conteudo,
      categoria,
      imagem_url: imagem_url || null,
      pdf_url: pdf_url || null,
      autor,
      estado,
      destaque: body.destaque === true,
    },
  };
}

async function lerPedido(request: Request): Promise<{
  dados: DadosNoticia;
  ficheiros: FicheirosFormulario;
}> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("multipart/form-data")) {
    const form = await request.formData();

    const imagemEntrada = form.get("imagem");
    const pdfEntrada = form.get("pdf");

    const imagem =
      imagemEntrada instanceof File && imagemEntrada.size > 0
        ? imagemEntrada
        : null;

    const pdf =
      pdfEntrada instanceof File && pdfEntrada.size > 0
        ? pdfEntrada
        : null;

    const destaqueValor = texto(form.get("destaque"));

    return {
      dados: {
        id: texto(form.get("id")) || undefined,
        titulo: texto(form.get("titulo")),
        resumo: texto(form.get("resumo")),
        conteudo: texto(form.get("conteudo")),
        categoria: texto(form.get("categoria")),
        imagem_url: texto(form.get("imagem_url")) || null,
        pdf_url: texto(form.get("pdf_url")) || null,
        autor: texto(form.get("autor")),
        estado: (texto(form.get("estado")) || "rascunho") as EstadoNoticia,
        destaque: destaqueValor === "true",
      },
      ficheiros: { imagem, pdf },
    };
  }

  const body = (await request.json()) as DadosNoticia;

  return {
    dados: body,
    ficheiros: { imagem: null, pdf: null },
  };
}

function extensaoImagem(file: File): string | null {
  const tipos: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
  };

  return tipos[file.type] ?? null;
}

function nomePdfValido(file: File): boolean {
  return (
    file.type === "application/pdf" ||
    file.name.toLowerCase().endsWith(".pdf")
  );
}

async function carregarFicheiro(
  file: File,
  tipo: "imagem" | "pdf"
): Promise<{ url: string; caminho: string }> {
  const supabase = obterSupabaseAdmin();

  let extensao: string;

  if (tipo === "imagem") {
    const extensaoEncontrada = extensaoImagem(file);

    if (!extensaoEncontrada) {
      throw new Error(
        "Formato de imagem não permitido. Utiliza JPG, PNG, WEBP ou GIF."
      );
    }

    if (file.size > MAX_IMAGEM_BYTES) {
      throw new Error("A imagem não pode ultrapassar 8 MB.");
    }

    extensao = extensaoEncontrada;
  } else {
    if (!nomePdfValido(file)) {
      throw new Error("O documento deve estar no formato PDF.");
    }

    if (file.size > MAX_PDF_BYTES) {
      throw new Error("O PDF não pode ultrapassar 25 MB.");
    }

    extensao = "pdf";
  }

  if (file.size <= 0) {
    throw new Error("O ficheiro seleccionado está vazio.");
  }

  const caminho = `${PASTA}/${randomUUID()}.${extensao}`;
  const bytes = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(caminho, bytes, {
      contentType:
        tipo === "pdf"
          ? "application/pdf"
          : file.type,
      upsert: false,
      cacheControl: "3600",
    });

  if (error) {
    console.error("Erro ao carregar ficheiro:", error.message);
    throw new Error(
      "Não foi possível carregar o ficheiro para o Supabase Storage. Verifica se o bucket existe e se a configuração está correcta."
    );
  }

  const { data } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(caminho);

  return { url: data.publicUrl, caminho };
}

async function removerFicheiros(caminhos: string[]) {
  if (caminhos.length === 0) return;

  try {
    const supabase = obterSupabaseAdmin();
    await supabase.storage.from(BUCKET).remove(caminhos);
  } catch (error) {
    console.error("Não foi possível remover ficheiros:", error);
  }
}

function caminhoDoUrl(url: string | null | undefined): string | null {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const marcador = `/storage/v1/object/public/${BUCKET}/`;
    const indice = parsed.pathname.indexOf(marcador);

    if (indice < 0) return null;

    return decodeURIComponent(
      parsed.pathname.slice(indice + marcador.length)
    );
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agroinova_noticias")
      .select("*")
      .order("criada_em", { ascending: false });

    if (error) {
      console.error("Erro Supabase ao listar notícias:", error.message);
      return erroJson("Não foi possível carregar as notícias.", 500);
    }

    return NextResponse.json({
      sucesso: true,
      noticias: data ?? [],
    });
  } catch (error) {
    console.error("Erro ao listar notícias:", error);
    return erroJson("Não foi possível carregar as notícias.", 500);
  }
}

export async function POST(request: Request) {
  let caminhosCarregados: string[] = [];

  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const { dados: body, ficheiros } = await lerPedido(request);
    const validacao = validarDados(body);

    if (!validacao.sucesso) {
      return erroJson(validacao.erro, 400);
    }

    const dados = { ...validacao.dados };

    if (ficheiros.imagem) {
      const carregado = await carregarFicheiro(ficheiros.imagem, "imagem");
      dados.imagem_url = carregado.url;
      caminhosCarregados.push(carregado.caminho);
    }

    if (ficheiros.pdf) {
      const carregado = await carregarFicheiro(ficheiros.pdf, "pdf");
      dados.pdf_url = carregado.url;
      caminhosCarregados.push(carregado.caminho);
    }

    const agora = new Date().toISOString();
    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agroinova_noticias")
      .insert({
        ...dados,
        publicada_em: dados.estado === "publicada" ? agora : null,
        actualizada_em: agora,
      })
      .select("*")
      .single();

    if (error) {
      console.error("Erro Supabase ao criar notícia:", error.message);
      await removerFicheiros(caminhosCarregados);
      return erroJson("Não foi possível guardar a notícia.", 500);
    }

    return NextResponse.json(
      { sucesso: true, noticia: data },
      { status: 201 }
    );
  } catch (error) {
    await removerFicheiros(caminhosCarregados);
    const mensagem =
      error instanceof Error
        ? error.message
        : "Não foi possível processar a notícia.";

    console.error("Erro ao criar notícia:", error);
    return erroJson(mensagem, 400);
  }
}

export async function PATCH(request: Request) {
  let caminhosCarregados: string[] = [];

  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const { dados: body, ficheiros } = await lerPedido(request);
    const id = body.id?.trim();

    if (!id) {
      return erroJson(
        "O identificador da notícia é obrigatório.",
        400
      );
    }

    const validacao = validarDados(body);

    if (!validacao.sucesso) {
      return erroJson(validacao.erro, 400);
    }

    const dados = { ...validacao.dados };
    const supabase = obterSupabaseAdmin();

    const { data: existente, error: erroLeitura } = await supabase
      .from("agroinova_noticias")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (erroLeitura) {
      console.error("Erro ao procurar notícia:", erroLeitura.message);
      return erroJson("Não foi possível procurar a notícia.", 500);
    }

    if (!existente) {
      return erroJson("A notícia não foi encontrada.", 404);
    }

    const imagemAnterior = existente.imagem_url as string | null;
    const pdfAnterior = (existente.pdf_url ?? null) as string | null;

    if (ficheiros.imagem) {
      const carregado = await carregarFicheiro(ficheiros.imagem, "imagem");
      dados.imagem_url = carregado.url;
      caminhosCarregados.push(carregado.caminho);
    }

    if (ficheiros.pdf) {
      const carregado = await carregarFicheiro(ficheiros.pdf, "pdf");
      dados.pdf_url = carregado.url;
      caminhosCarregados.push(carregado.caminho);
    }

    const agora = new Date().toISOString();
    const publicada_em =
      dados.estado === "publicada"
        ? existente.publicada_em ?? agora
        : null;

    const { data, error } = await supabase
      .from("agroinova_noticias")
      .update({
        ...dados,
        publicada_em,
        actualizada_em: agora,
      })
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao actualizar notícia:", error.message);
      await removerFicheiros(caminhosCarregados);
      return erroJson("Não foi possível actualizar a notícia.", 500);
    }

    const caminhosAntigos: string[] = [];

    if (ficheiros.imagem) {
      const caminho = caminhoDoUrl(imagemAnterior);
      if (caminho) caminhosAntigos.push(caminho);
    }

    if (ficheiros.pdf) {
      const caminho = caminhoDoUrl(pdfAnterior);
      if (caminho) caminhosAntigos.push(caminho);
    }

    await removerFicheiros(caminhosAntigos);

    return NextResponse.json({ sucesso: true, noticia: data });
  } catch (error) {
    await removerFicheiros(caminhosCarregados);

    const mensagem =
      error instanceof Error
        ? error.message
        : "Não foi possível processar a alteração.";

    console.error("Erro ao actualizar notícia:", error);
    return erroJson(mensagem, 400);
  }
}

export async function DELETE(request: Request) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const id = new URL(request.url).searchParams.get("id")?.trim();

    if (!id) {
      return erroJson(
        "O identificador da notícia é obrigatório.",
        400
      );
    }

    const supabase = obterSupabaseAdmin();

    const { data: existente, error: erroLeitura } = await supabase
      .from("agroinova_noticias")
      .select("id, imagem_url, pdf_url")
      .eq("id", id)
      .maybeSingle();

    if (erroLeitura) {
      console.error("Erro ao procurar notícia:", erroLeitura.message);
      return erroJson("Não foi possível procurar a notícia.", 500);
    }

    if (!existente) {
      return erroJson("A notícia não foi encontrada.", 404);
    }

    const { error } = await supabase
      .from("agroinova_noticias")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Erro ao eliminar notícia:", error.message);
      return erroJson("Não foi possível eliminar a notícia.", 500);
    }

    const caminhos = [
      caminhoDoUrl(existente.imagem_url),
      caminhoDoUrl(existente.pdf_url),
    ].filter((caminho): caminho is string => Boolean(caminho));

    await removerFicheiros(caminhos);

    return NextResponse.json({ sucesso: true, id });
  } catch (error) {
    console.error("Erro ao eliminar notícia:", error);
    return erroJson("Não foi possível processar a eliminação.", 500);
  }
}
