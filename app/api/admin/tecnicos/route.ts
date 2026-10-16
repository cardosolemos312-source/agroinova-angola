import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TABELA = "agroinova_tecnicos";
const BUCKET = "agroinova-arquivos";

const ESTADOS = ["rascunho", "publicado", "arquivado"] as const;

type EstadoTecnico = (typeof ESTADOS)[number];

type DadosTecnico = {
  id?: string;
  nome: string;
  titulo_profissional: string | null;
  formacao_academica: string | null;
  especialidade: string | null;
  instituicao: string | null;
  provincia: string | null;
  biografia: string | null;
  telefone: string | null;
  email: string | null;
  website: string | null;
  fotografia_url: string | null;
  livro_titulo: string | null;
  livro_descricao: string | null;
  livro_capa_url: string | null;
  livro_pdf_url: string | null;
  estado: EstadoTecnico;
  destaque: boolean;
};

type FicheirosTecnico = {
  fotografia: File | null;
  livro_capa: File | null;
  livro_pdf: File | null;
};

type PedidoTecnico = {
  dados: DadosTecnico;
  ficheiros: FicheirosTecnico;
};

function erroJson(mensagem: string, status: number) {
  return NextResponse.json(
    {
      sucesso: false,
      erro: mensagem,
    },
    { status },
  );
}

function texto(valor: unknown): string | null {
  if (typeof valor !== "string") {
    return null;
  }

  const resultado = valor.trim();

  return resultado.length > 0 ? resultado : null;
}

function booleano(valor: unknown): boolean {
  if (typeof valor === "boolean") {
    return valor;
  }

  if (typeof valor === "string") {
    return ["true", "1", "sim", "on"].includes(
      valor.trim().toLowerCase(),
    );
  }

  return false;
}

function validarUrl(
  valor: string | null,
  campo: string,
  protocolos: string[] = ["http:", "https:"],
): string | null {
  if (!valor) {
    return null;
  }

  try {
    const url = new URL(valor);

    if (!protocolos.includes(url.protocol)) {
      return `${campo} deve utilizar um endereço válido.`;
    }

    return null;
  } catch {
    return `${campo} não contém um endereço válido.`;
  }
}

function validarDados(
  entrada: Record<string, unknown>,
):
  | { valido: true; dados: DadosTecnico }
  | { valido: false; erro: string } {
  const nome = texto(entrada.nome);

  if (!nome) {
    return {
      valido: false,
      erro: "O nome do técnico é obrigatório.",
    };
  }

  if (nome.length > 200) {
    return {
      valido: false,
      erro: "O nome não pode ultrapassar 200 caracteres.",
    };
  }

  const estadoRecebido = texto(entrada.estado) ?? "rascunho";

  if (!ESTADOS.includes(estadoRecebido as EstadoTecnico)) {
    return {
      valido: false,
      erro: "O estado selecionado não é válido.",
    };
  }

  const dados: DadosTecnico = {
    nome,
    titulo_profissional: texto(entrada.titulo_profissional),
    formacao_academica: texto(entrada.formacao_academica),
    especialidade: texto(entrada.especialidade),
    instituicao: texto(entrada.instituicao),
    provincia: texto(entrada.provincia),
    biografia: texto(entrada.biografia),
    telefone: texto(entrada.telefone),
    email: texto(entrada.email),
    website: texto(entrada.website),
    fotografia_url: texto(entrada.fotografia_url),
    livro_titulo: texto(entrada.livro_titulo),
    livro_descricao: texto(entrada.livro_descricao),
    livro_capa_url: texto(entrada.livro_capa_url),
    livro_pdf_url: texto(entrada.livro_pdf_url),
    estado: estadoRecebido as EstadoTecnico,
    destaque: booleano(entrada.destaque),
  };

  const camposTexto: Array<[string, string | null]> = [
    ["Título profissional", dados.titulo_profissional],
    ["Formação académica", dados.formacao_academica],
    ["Especialidade", dados.especialidade],
    ["Instituição", dados.instituicao],
    ["Província", dados.provincia],
    ["Biografia", dados.biografia],
    ["Telefone", dados.telefone],
    ["Email", dados.email],
    ["Website", dados.website],
    ["Título do livro", dados.livro_titulo],
    ["Descrição do livro", dados.livro_descricao],
    ["Fotografia", dados.fotografia_url],
    ["Capa do livro", dados.livro_capa_url],
    ["PDF do livro", dados.livro_pdf_url],
  ];

  for (const [campo, valor] of camposTexto) {
    if (valor && valor.length > 10000) {
      return {
        valido: false,
        erro: `${campo} não pode ultrapassar 10.000 caracteres.`,
      };
    }
  }

  if (
    dados.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email)
  ) {
    return {
      valido: false,
      erro: "O endereço de email não é válido.",
    };
  }

  const urls: Array<[string, string | null]> = [
    ["Fotografia", dados.fotografia_url],
    ["Capa do livro", dados.livro_capa_url],
    ["PDF do livro", dados.livro_pdf_url],
  ];

  for (const [campo, valor] of urls) {
    const erro = validarUrl(valor, campo);

    if (erro) {
      return {
        valido: false,
        erro,
      };
    }
  }

  const erroWebsite = validarUrl(dados.website, "Website");

  if (erroWebsite) {
    return {
      valido: false,
      erro: erroWebsite,
    };
  }

  return {
    valido: true,
    dados,
  };
}

function obterFicheiro(
  valor: FormDataEntryValue | null,
): File | null {
  if (
    valor &&
    typeof valor !== "string" &&
    typeof valor.arrayBuffer === "function" &&
    valor.size > 0
  ) {
    return valor;
  }

  return null;
}

const CAMPOS_TECNICO = [
  "nome",
  "titulo_profissional",
  "formacao_academica",
  "especialidade",
  "instituicao",
  "provincia",
  "biografia",
  "telefone",
  "email",
  "website",
  "fotografia_url",
  "livro_titulo",
  "livro_descricao",
  "livro_capa_url",
  "livro_pdf_url",
  "estado",
  "destaque",
] as const;

async function lerPedido(request: Request): Promise<PedidoTecnico> {
  const contentType = request.headers.get("content-type") ?? "";

  const ficheiros: FicheirosTecnico = {
    fotografia: null,
    livro_capa: null,
    livro_pdf: null,
  };

  let entrada: Record<string, unknown>;

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();

    entrada = {};

    for (const campo of CAMPOS_TECNICO) {
      entrada[campo] = formData.get(campo);
    }

    ficheiros.fotografia = obterFicheiro(
      formData.get("fotografia"),
    );

    ficheiros.livro_capa = obterFicheiro(
      formData.get("livro_capa"),
    );

    ficheiros.livro_pdf = obterFicheiro(
      formData.get("livro_pdf"),
    );
  } else {
    const corpo: unknown = await request.json();

    if (
      !corpo ||
      typeof corpo !== "object" ||
      Array.isArray(corpo)
    ) {
      throw new Error("O corpo do pedido não é válido.");
    }

    entrada = corpo as Record<string, unknown>;
  }

  const validacao = validarDados(entrada);

  if (!validacao.valido) {
    throw new Error(validacao.erro);
  }

  return {
    dados: validacao.dados,
    ficheiros,
  };
}

function mensagemErro(erro: unknown): string {
  if (erro instanceof Error) {
    const causa = erro.cause;

    if (causa instanceof Error) {
      return `${erro.message} | Causa: ${causa.message}`;
    }

    if (causa) {
      return `${erro.message} | Causa: ${String(causa)}`;
    }

    return `${erro.name}: ${erro.message}`;
  }

  return String(erro);
}

async function verificarAdministrador() {
  try {
    const autenticado = await administradorAutenticado();

    if (!autenticado) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    return null;
  } catch (erro) {
    console.error("Erro ao verificar administrador:", mensagemErro(erro));

    return erroJson(
      "Não foi possível verificar a sessão administrativa.",
      401,
    );
  }
}

async function carregarFicheiro(
  supabase: ReturnType<typeof obterSupabaseAdmin>,
  ficheiro: File | null,
  tipo: "fotografia" | "livro_capa" | "livro_pdf",
  id: string,
): Promise<string | null> {
  if (!ficheiro) {
    return null;
  }

  const ePdf = tipo === "livro_pdf";
  const limite = ePdf
    ? 20 * 1024 * 1024
    : 5 * 1024 * 1024;

  if (ficheiro.size > limite) {
    throw new Error(
      ePdf
        ? "O PDF não pode ultrapassar 20 MB."
        : "As imagens não podem ultrapassar 5 MB.",
    );
  }

  const tiposPermitidos = ePdf
    ? ["application/pdf"]
    : ["image/jpeg", "image/png", "image/webp"];

  if (!tiposPermitidos.includes(ficheiro.type)) {
    throw new Error(
      ePdf
        ? "O documento deve estar no formato PDF."
        : "A imagem deve estar no formato JPEG, PNG ou WEBP.",
    );
  }

  const extensaoPorTipo: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "application/pdf": "pdf",
  };

  const extensao = extensaoPorTipo[ficheiro.type];

  if (!extensao) {
    throw new Error("O formato do ficheiro não é suportado.");
  }

  const pasta =
    tipo === "fotografia"
      ? `tecnicos/${id}/fotografia`
      : tipo === "livro_capa"
        ? `tecnicos/${id}/livros/capas`
        : `tecnicos/${id}/livros/documentos`;

  const caminho = `${pasta}/${randomUUID()}.${extensao}`;

  try {
    const bytes = new Uint8Array(await ficheiro.arrayBuffer());

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(caminho, bytes, {
        contentType: ficheiro.type,
        upsert: false,
      });

    if (error) {
      console.error("Erro do Supabase Storage:", {
        tipo,
        mensagem: error.message,
        nome: error.name,
      });

      throw new Error(
        `O Supabase recusou o ficheiro (${tipo}): ${error.message}`,
      );
    }
  } catch (erro) {
    const detalhe = mensagemErro(erro);

    console.error("Falha no carregamento do ficheiro:", {
      tipo,
      tamanho: ficheiro.size,
      contentType: ficheiro.type,
      bucket: BUCKET,
      detalhe,
    });

    throw new Error(
      `Não foi possível carregar o ficheiro (${tipo}): ${detalhe}`,
    );
  }

  const { data } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(caminho);

  if (!data.publicUrl) {
    throw new Error(
      "O ficheiro foi carregado, mas não foi possível obter o endereço público.",
    );
  }

  return data.publicUrl;
}

async function prepararDados(
  supabase: ReturnType<typeof obterSupabaseAdmin>,
  pedido: PedidoTecnico,
  id: string,
): Promise<DadosTecnico> {
  const dados: DadosTecnico = { ...pedido.dados };

  const fotografiaUrl = await carregarFicheiro(
    supabase,
    pedido.ficheiros.fotografia,
    "fotografia",
    id,
  );

  const capaUrl = await carregarFicheiro(
    supabase,
    pedido.ficheiros.livro_capa,
    "livro_capa",
    id,
  );

  const pdfUrl = await carregarFicheiro(
    supabase,
    pedido.ficheiros.livro_pdf,
    "livro_pdf",
    id,
  );

  if (fotografiaUrl) {
    dados.fotografia_url = fotografiaUrl;
  }

  if (capaUrl) {
    dados.livro_capa_url = capaUrl;
  }

  if (pdfUrl) {
    dados.livro_pdf_url = pdfUrl;
  }

  return dados;
}

// GET — listar técnicos no painel administrativo
export async function GET() {
  const respostaAuth = await verificarAdministrador();

  if (respostaAuth) {
    return respostaAuth;
  }

  try {
    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from(TABELA)
      .select("*")
      .order("criado_em", { ascending: false });

    if (error) {
      console.error("Erro ao listar técnicos no Supabase:", {
        tabela: TABELA,
        codigo: error.code,
        mensagem: error.message,
        detalhes: error.details,
        sugestao: error.hint,
      });

      return NextResponse.json(
        {
          sucesso: false,
          erro: "Não foi possível carregar os técnicos.",
          detalhe: error.message,
          codigo: error.code,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      sucesso: true,
      tecnicos: data ?? [],
    });
  } catch (erro) {
    const detalhe = mensagemErro(erro);

    console.error("Erro inesperado ao consultar técnicos:", detalhe);

    return NextResponse.json(
      {
        sucesso: false,
        erro: "Ocorreu um erro ao carregar os técnicos.",
        detalhe,
      },
      { status: 500 },
    );
  }
}

// POST — registar técnico
export async function POST(request: Request) {
  const respostaAuth = await verificarAdministrador();

  if (respostaAuth) {
    return respostaAuth;
  }

  try {
    const pedido = await lerPedido(request);
    const supabase = obterSupabaseAdmin();
    const id = randomUUID();

    const dados = await prepararDados(supabase, pedido, id);
    const agora = new Date().toISOString();

    const registo = {
      id,
      ...dados,
      publicado_em:
        dados.estado === "publicado" ? agora : null,
      criado_em: agora,
      actualizado_em: agora,
    };

    const { data, error } = await supabase
      .from(TABELA)
      .insert(registo)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao registar técnico no Supabase:", {
        tabela: TABELA,
        codigo: error.code,
        mensagem: error.message,
        detalhes: error.details,
        sugestao: error.hint,
      });

      return NextResponse.json(
        {
          sucesso: false,
          erro: "Não foi possível registar o técnico.",
          detalhe: error.message,
          codigo: error.code,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        sucesso: true,
        mensagem: "Técnico registado com sucesso.",
        tecnico: data,
      },
      { status: 201 },
    );
  } catch (erro) {
    const mensagem = mensagemErro(erro);

    console.error("Erro no registo de técnico:", mensagem);

    const status = mensagem.includes(
      "Não foi possível carregar o ficheiro",
    )
      ? 502
      : 400;

    return erroJson(mensagem, status);
  }
}

// PATCH — atualizar técnico
export async function PATCH(request: Request) {
  const respostaAuth = await verificarAdministrador();

  if (respostaAuth) {
    return respostaAuth;
  }

  try {
    const contentType = request.headers.get("content-type") ?? "";
    const multipart = contentType.includes("multipart/form-data");

    let id: string | null = null;
    let dadosRecebidos: DadosTecnico;

    let ficheiros: FicheirosTecnico = {
      fotografia: null,
      livro_capa: null,
      livro_pdf: null,
    };

    if (multipart) {
      const formData = await request.formData();

      id = texto(formData.get("id"));

      const entrada: Record<string, unknown> = {};

      for (const campo of CAMPOS_TECNICO) {
        entrada[campo] = formData.get(campo);
      }

      ficheiros = {
        fotografia: obterFicheiro(formData.get("fotografia")),
        livro_capa: obterFicheiro(formData.get("livro_capa")),
        livro_pdf: obterFicheiro(formData.get("livro_pdf")),
      };

      const validacao = validarDados(entrada);

      if (!validacao.valido) {
        return erroJson(validacao.erro, 400);
      }

      dadosRecebidos = validacao.dados;
    } else {
      const corpo: unknown = await request.json();

      if (
        !corpo ||
        typeof corpo !== "object" ||
        Array.isArray(corpo)
      ) {
        return erroJson("O corpo do pedido não é válido.", 400);
      }

      const objeto = corpo as Record<string, unknown>;

      id = texto(objeto.id);

      const validacao = validarDados(objeto);

      if (!validacao.valido) {
        return erroJson(validacao.erro, 400);
      }

      dadosRecebidos = validacao.dados;
    }

    if (!id) {
      return erroJson(
        "O identificador do técnico é obrigatório.",
        400,
      );
    }

    const supabase = obterSupabaseAdmin();

    const { data: existente, error: erroExistente } = await supabase
      .from(TABELA)
      .select(
        "id, publicado_em, fotografia_url, livro_capa_url, livro_pdf_url",
      )
      .eq("id", id)
      .maybeSingle();

    if (erroExistente) {
      console.error("Erro ao procurar técnico no Supabase:", {
        tabela: TABELA,
        codigo: erroExistente.code,
        mensagem: erroExistente.message,
        detalhes: erroExistente.details,
        sugestao: erroExistente.hint,
      });

      return NextResponse.json(
        {
          sucesso: false,
          erro: "Não foi possível consultar o técnico.",
          detalhe: erroExistente.message,
          codigo: erroExistente.code,
        },
        { status: 500 },
      );
    }

    if (!existente) {
      return erroJson("Técnico não encontrado.", 404);
    }

    const dadosParaPreparar: DadosTecnico = {
      ...dadosRecebidos,
      fotografia_url:
        dadosRecebidos.fotografia_url ||
        existente.fotografia_url ||
        null,
      livro_capa_url:
        dadosRecebidos.livro_capa_url ||
        existente.livro_capa_url ||
        null,
      livro_pdf_url:
        dadosRecebidos.livro_pdf_url ||
        existente.livro_pdf_url ||
        null,
    };

    const dados = await prepararDados(
      supabase,
      {
        dados: dadosParaPreparar,
        ficheiros,
      },
      id,
    );

    const agora = new Date().toISOString();

    const publicadoEm =
      dados.estado === "publicado"
        ? existente.publicado_em ?? agora
        : null;

    const { data, error } = await supabase
      .from(TABELA)
      .update({
        ...dados,
        publicado_em: publicadoEm,
        actualizado_em: agora,
      })
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao atualizar técnico no Supabase:", {
        tabela: TABELA,
        codigo: error.code,
        mensagem: error.message,
        detalhes: error.details,
        sugestao: error.hint,
      });

      return NextResponse.json(
        {
          sucesso: false,
          erro: "Não foi possível atualizar o técnico.",
          detalhe: error.message,
          codigo: error.code,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      sucesso: true,
      mensagem: "Técnico atualizado com sucesso.",
      tecnico: data,
    });
  } catch (erro) {
    const mensagem = mensagemErro(erro);

    console.error("Erro ao atualizar técnico:", mensagem);

    const status = mensagem.includes(
      "Não foi possível carregar o ficheiro",
    )
      ? 502
      : 400;

    return erroJson(mensagem, status);
  }
}

// DELETE — eliminar técnico
export async function DELETE(request: Request) {
  const respostaAuth = await verificarAdministrador();

  if (respostaAuth) {
    return respostaAuth;
  }

  try {
    const url = new URL(request.url);
    const id = texto(url.searchParams.get("id"));

    if (!id) {
      return erroJson(
        "O identificador do técnico é obrigatório.",
        400,
      );
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from(TABELA)
      .delete()
      .eq("id", id)
      .select("id")
      .maybeSingle();

    if (error) {
      console.error("Erro ao eliminar técnico no Supabase:", {
        tabela: TABELA,
        codigo: error.code,
        mensagem: error.message,
        detalhes: error.details,
        sugestao: error.hint,
      });

      return NextResponse.json(
        {
          sucesso: false,
          erro: "Não foi possível eliminar o técnico.",
          detalhe: error.message,
          codigo: error.code,
        },
        { status: 500 },
      );
    }

    if (!data) {
      return erroJson("Técnico não encontrado.", 404);
    }

    return NextResponse.json({
      sucesso: true,
      mensagem: "Técnico eliminado com sucesso.",
    });
  } catch (erro) {
    const detalhe = mensagemErro(erro);

    console.error("Erro inesperado ao eliminar técnico:", detalhe);

    return NextResponse.json(
      {
        sucesso: false,
        erro: "Ocorreu um erro ao eliminar o técnico.",
        detalhe,
      },
      { status: 500 },
    );
  }
}