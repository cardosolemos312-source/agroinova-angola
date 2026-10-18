
import { NextResponse } from "next/server";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RegistoTecnico = Record<string, unknown>;

function obterTexto(
  registo: RegistoTecnico,
  ...campos: string[]
): string | null {
  for (const campo of campos) {
    const valor = registo[campo];

    if (typeof valor === "string" && valor.trim()) {
      return valor.trim();
    }
  }

  return null;
}

export async function GET() {
  try {
    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agroinova_tecnicos")
      .select("*")
      .eq("estado", "publicado");

    if (error) {
      console.error("[API TECNICOS] Erro do Supabase:", {
        mensagem: error.message,
        codigo: error.code,
        detalhes: error.details,
        sugestao: error.hint,
      });

      return NextResponse.json(
        {
          sucesso: false,
          erro: "Não foi possível consultar os investigadores.",
          detalhe:
            process.env.NODE_ENV === "development"
              ? error.message
              : undefined,
        },
        { status: 500 },
      );
    }

    const tecnicos = ((data ?? []) as RegistoTecnico[]).map(
      (registo) => ({
        id: registo.id ?? null,
        nome: obterTexto(registo, "nome"),
        titulo_profissional: obterTexto(
          registo,
          "titulo_profissional",
        ),
        cargo: obterTexto(registo, "cargo"),
        formacao_academica: obterTexto(
          registo,
          "formacao_academica",
        ),
        especialidade: obterTexto(
          registo,
          "especialidade",
        ),
        area: obterTexto(registo, "area"),
        instituicao: obterTexto(registo, "instituicao"),
        provincia: obterTexto(registo, "provincia"),
        biografia: obterTexto(registo, "biografia"),
        descricao: obterTexto(registo, "descricao"),

        fotografia_url: obterTexto(
          registo,
          "fotografia_url",
          "imagem_url",
          "foto_url",
        ),

        estado: obterTexto(registo, "estado"),
        destaque: registo.destaque === true,

        livro_titulo: obterTexto(
          registo,
          "livro_titulo",
          "titulo_livro",
          "publicacao_titulo",
        ),

        livro_descricao: obterTexto(
          registo,
          "livro_descricao",
          "descricao_livro",
          "publicacao_descricao",
        ),

        livro_capa_url: obterTexto(
          registo,
          "livro_capa_url",
          "livro_capa",
          "capa_url",
        ),

        livro_pdf_url: obterTexto(
          registo,
          "livro_pdf_url",
          "livro_pdf",
          "pdf_url",
        ),
      }),
    );

    tecnicos.sort((a, b) =>
      (a.nome ?? "").localeCompare(b.nome ?? "", "pt"),
    );

    return NextResponse.json(
      {
        sucesso: true,
        tecnicos,
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      },
    );
  } catch (erro) {
    console.error(
      "[API TECNICOS] Erro inesperado:",
      erro,
    );

    return NextResponse.json(
      {
        sucesso: false,
        erro: "O servidor não conseguiu carregar os investigadores.",
        detalhe:
          process.env.NODE_ENV === "development" &&
          erro instanceof Error
            ? erro.message
            : undefined,
      },
      { status: 500 },
    );
  }
}
