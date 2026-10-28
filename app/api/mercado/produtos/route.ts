
import { NextResponse } from "next/server";
import { verificarPoliticaMercado } from "@/lib/mercado/moderacao";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type ProdutoMercado = {
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
  created_at: string;
};

type VendedorMercado = {
  id: string;
  nome: string | null;
  tipo: string | null;
  telefone: string | null;
  whatsapp: string | null;
  provincia: string | null;
  municipio: string | null;
  descricao: string | null;
};

function respostaErro(erro: string, status: number) {
  return NextResponse.json({ erro }, { status });
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const supabase = obterSupabaseAdmin();

    let consulta = supabase
      .from("mercado_produtos")
      .select(
        "id,vendedor_id,nome,descricao,categoria,preco,preco_negociavel,quantidade,unidade,provincia,municipio,imagens,created_at",
      )
      .eq("estado", "aprovado")
      .order("created_at", { ascending: false })
      .limit(100);

    if (id) {
      consulta = consulta.eq("id", id);
    }

    const { data, error } = await consulta;

    if (error) {
      console.error("Erro ao consultar o Mercado:", error.message);
      return respostaErro(
        "Não foi possível carregar os anúncios.",
        500,
      );
    }

    const registos = (data ?? []) as unknown as ProdutoMercado[];

    const idsVendedores = [
      ...new Set(
        registos
          .map((produto) => produto.vendedor_id)
          .filter(Boolean),
      ),
    ];

    const vendedoresPorId = new Map<string, VendedorMercado>();

    if (idsVendedores.length > 0) {
      const { data: vendedores, error: erroVendedores } =
        await supabase
          .from("mercado_vendedores")
          .select(
            "id,nome,tipo,telefone,whatsapp,provincia,municipio,descricao",
          )
          .in("id", idsVendedores)
          .eq("estado", "ativo");

      if (erroVendedores) {
        console.error(
          "Erro ao consultar os vendedores:",
          erroVendedores.message,
        );

        return respostaErro(
          "Não foi possível carregar os dados dos vendedores.",
          500,
        );
      }

      for (const registo of vendedores ?? []) {
        const vendedor = registo as unknown as VendedorMercado;
        vendedoresPorId.set(vendedor.id, vendedor);
      }
    }

    const produtos = registos.map((produto) => {
      const vendedor = vendedoresPorId.get(produto.vendedor_id);

      const imagens = Array.isArray(produto.imagens)
        ? produto.imagens.filter(
            (imagem): imagem is string =>
              typeof imagem === "string" && imagem.length > 0,
          )
        : [];

      return {
        id: produto.id,
        nome: produto.nome,
        descricao: produto.descricao,
        categoria: produto.categoria,
        preco:
          produto.preco === null ? null : Number(produto.preco),
        negociavel: produto.preco_negociavel,
        quantidade: Number(produto.quantidade),
        unidade: produto.unidade,
        provincia: produto.provincia,
        municipio: produto.municipio ?? "",
        imagem: imagens[0] ?? "",
        imagens,
        vendedor: vendedor
          ? {
              nome: vendedor.nome ?? "",
              tipo: vendedor.tipo ?? "",
              telefone: vendedor.telefone ?? "",
              whatsapp: vendedor.whatsapp ?? "",
              provincia: vendedor.provincia ?? "",
              municipio: vendedor.municipio ?? "",
              descricao: vendedor.descricao ?? "",
            }
          : null,
        demonstracao: false,
        dataPublicacao: produto.created_at,
      };
    });

    return NextResponse.json(
      { produtos },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      },
    );
  } catch (error) {
    console.error("Erro inesperado no Mercado:", error);

    return respostaErro(
      "Ocorreu um erro ao consultar o Mercado.",
      500,
    );
  }
}

export async function POST(request: Request) {
  try {
    let corpo: Record<string, unknown>;

    try {
      const json: unknown = await request.json();

      if (
        typeof json !== "object" ||
        json === null ||
        Array.isArray(json)
      ) {
        return respostaErro(
          "Os dados enviados são inválidos.",
          400,
        );
      }

      corpo = json as Record<string, unknown>;
    } catch {
      return respostaErro(
        "O conteúdo enviado não é um JSON válido.",
        400,
      );
    }

    const nome =
      typeof corpo.nome === "string" ? corpo.nome.trim() : "";

    const descricao =
      typeof corpo.descricao === "string"
        ? corpo.descricao.trim()
        : "";

    const categoria =
      typeof corpo.categoria === "string"
        ? corpo.categoria.trim()
        : "";

    const provincia =
      typeof corpo.provincia === "string"
        ? corpo.provincia.trim()
        : "";

    const municipio =
      typeof corpo.municipio === "string"
        ? corpo.municipio.trim()
        : "";

    const unidade =
      typeof corpo.unidade === "string"
        ? corpo.unidade.trim()
        : "";

    const quantidade = Number(corpo.quantidade);

    const negociavel =
      corpo.negociavel === true ||
      corpo.preco_negociavel === true;

    const precoInformado =
      corpo.preco !== null &&
      corpo.preco !== undefined &&
      corpo.preco !== "";

    const preco = precoInformado ? Number(corpo.preco) : null;

    const categoriasPermitidas = [
      "Cereais",
      "Hortícolas",
      "Frutas",
      "Tubérculos",
      "Leguminosas",
      "Pecuária",
      "Sementes",
      "Equipamentos",
      "Outros",
    ];

    const unidadesPermitidas = [
      "kg",
      "tonelada",
      "saco",
      "unidade",
      "litro",
      "caixa",
      "dúzia",
      "cabeça",
      "fardo",
      "outro",
    ];

    const provinciasPermitidas = [
      "Bengo",
      "Benguela",
      "Bié",
      "Cabinda",
      "Cubango",
      "Cuando",
      "Cuanza Norte",
      "Cuanza Sul",
      "Cunene",
      "Huambo",
      "Huíla",
      "Icolo e Bengo",
      "Luanda",
      "Lunda Norte",
      "Lunda Sul",
      "Malanje",
      "Moxico",
      "Moxico Leste",
      "Namibe",
      "Uíge",
      "Zaire",
    ];

    if (nome.length < 3 || nome.length > 120) {
      return respostaErro(
        "O nome deve ter entre 3 e 120 caracteres.",
        400,
      );
    }

    if (descricao.length < 10 || descricao.length > 3000) {
      return respostaErro(
        "A descrição deve ter entre 10 e 3000 caracteres.",
        400,
      );
    }

    if (!categoriasPermitidas.includes(categoria)) {
      return respostaErro(
        "Seleciona uma categoria válida.",
        400,
      );
    }

    if (!provinciasPermitidas.includes(provincia)) {
      return respostaErro(
        "Seleciona uma província válida.",
        400,
      );
    }

    if (!unidadesPermitidas.includes(unidade)) {
      return respostaErro(
        "Seleciona uma unidade válida.",
        400,
      );
    }

    if (
      !Number.isFinite(quantidade) ||
      quantidade <= 0 ||
      quantidade > 1_000_000_000
    ) {
      return respostaErro(
        "Indica uma quantidade válida.",
        400,
      );
    }

    if (
      precoInformado &&
      (!Number.isFinite(preco) ||
        preco === null ||
        preco < 0 ||
        preco > 1_000_000_000_000)
    ) {
      return respostaErro(
        "Indica um preço válido.",
        400,
      );
    }

    if (preco === null && !negociavel) {
      return respostaErro(
        "Indica um preço ou seleciona preço sob consulta.",
        400,
      );
    }

    const supabase = await createClient();

    const {
      data: { user },
      error: erroAutenticacao,
    } = await supabase.auth.getUser();

    if (erroAutenticacao || !user) {
      return respostaErro(
        "Inicia sessão para publicar um produto.",
        401,
      );
    }

    const { data: vendedor, error: erroVendedor } =
      await supabase
        .from("mercado_vendedores")
        .select("id,estado")
        .eq("user_id", user.id)
        .maybeSingle();

    if (erroVendedor) {
      console.error(
        "Erro ao consultar o vendedor:",
        erroVendedor.message,
      );

      return respostaErro(
        "Não foi possível verificar o perfil do vendedor.",
        500,
      );
    }

    if (!vendedor || vendedor.estado !== "ativo") {
      return respostaErro(
        "É necessário ter um perfil de vendedor ativo para publicar.",
        403,
      );
    }

    const imagensRecebidas: string[] = Array.isArray(corpo.imagens)
      ? corpo.imagens.filter(
          (imagem: unknown): imagem is string =>
            typeof imagem === "string",
        )
      : [];

    const baseSupabase =
      process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/+$/, "");

    if (
      corpo.imagens !== undefined &&
      (!baseSupabase ||
        !Array.isArray(corpo.imagens) ||
        corpo.imagens.length > 5 ||
        imagensRecebidas.length !== corpo.imagens.length)
    ) {
      return respostaErro(
        "A lista de fotografias é inválida.",
        400,
      );
    }

    const prefixoImagens = baseSupabase
      ? `${baseSupabase}/storage/v1/object/public/mercado-produtos/${user.id}/`
      : "";

    if (
      imagensRecebidas.some(
        (imagem) =>
          !prefixoImagens ||
          !imagem.startsWith(prefixoImagens) ||
          imagem.length > 2048,
      )
    ) {
      return respostaErro(
        "As fotografias devem pertencer à tua pasta de vendedor.",
        400,
      );
    }

    // Moderar depois de validar os dados e confirmar o vendedor.
    const resultadoModeracao = verificarPoliticaMercado(
      nome,
      categoria,
      descricao,
    );

    if (!resultadoModeracao.permitido) {
      const motivo =
        resultadoModeracao.regra ??
        "Violação das políticas do Mercado";

      // O bloqueio continua ativo mesmo se a auditoria falhar.
      try {
        const supabaseAdmin = obterSupabaseAdmin();

        const { error: erroAuditoria } = await supabaseAdmin
          .from("mercado_moderacao_auditoria")
          .insert({
            produto_id: null,
            acao: "bloqueio_automatico",
            origem: "automatica",
            motivo,
            nome_produto: nome,
            responsavel: "sistema",
          });

        if (erroAuditoria) {
          console.error(
            "Falha ao registar bloqueio automático:",
            erroAuditoria.message,
          );
        }
      } catch (erroAuditoria) {
        console.error(
          "Não foi possível guardar a auditoria do bloqueio:",
          erroAuditoria,
        );
      }

      return respostaErro(
        "Anúncio bloqueado automaticamente pelas políticas do Mercado: " +
          motivo,
        422,
      );
    }

    const { data: produto, error: erroInsercao } = await supabase
      .from("mercado_produtos")
      .insert({
        vendedor_id: vendedor.id,
        nome,
        descricao,
        categoria,
        preco,
        preco_negociavel: negociavel,
        quantidade,
        unidade,
        provincia,
        municipio: municipio || null,
        imagens: imagensRecebidas,
        estado: "pendente",
      })
      .select(
        "id,nome,descricao,categoria,preco,preco_negociavel,quantidade,unidade,provincia,municipio,imagens,created_at",
      )
      .single();

    if (erroInsercao) {
      console.error(
        "Erro ao publicar produto:",
        erroInsercao.message,
      );

      return respostaErro(
        "Não foi possível publicar o produto. Verifica as permissões da base de dados.",
        500,
      );
    }

    return NextResponse.json(
      {
        mensagem:
          "Anúncio enviado para aprovação. Ficará visível no Mercado após ser aprovado.",
        produto: {
          ...produto,
          preco:
            produto.preco === null ? null : Number(produto.preco),
          negociavel: produto.preco_negociavel,
          quantidade: Number(produto.quantidade),
          municipio: produto.municipio ?? "",
          imagem: produto.imagens?.[0] ?? "",
          imagens: produto.imagens ?? [],
          demonstracao: false,
          dataPublicacao: produto.created_at,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(
      "Erro inesperado ao publicar produto:",
      error,
    );

    return respostaErro(
      "Ocorreu um erro inesperado ao publicar o produto.",
      500,
    );
  }
}
