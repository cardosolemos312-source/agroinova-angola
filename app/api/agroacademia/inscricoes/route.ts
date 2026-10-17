import { NextResponse } from "next/server";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const MAX_CORPO_BYTES = 12_000;

function texto(valor: unknown, maximo: number): string {
  if (typeof valor !== "string") return "";
  return valor.trim().slice(0, maximo);
}

export async function POST(request: Request) {
  try {
    const tamanho = Number(request.headers.get("content-length") ?? "0");

    if (tamanho > MAX_CORPO_BYTES) {
      return NextResponse.json(
        { erro: "Os dados enviados são demasiado grandes." },
        { status: 413 }
      );
    }

    const corpoTexto = await request.text();

    if (new TextEncoder().encode(corpoTexto).length > MAX_CORPO_BYTES) {
      return NextResponse.json(
        { erro: "Os dados enviados são demasiado grandes." },
        { status: 413 }
      );
    }

    let corpo: unknown;

    try {
      corpo = JSON.parse(corpoTexto);
    } catch {
      return NextResponse.json(
        { erro: "O pedido contém dados inválidos." },
        { status: 400 }
      );
    }

    if (!corpo || typeof corpo !== "object" || Array.isArray(corpo)) {
      return NextResponse.json(
        { erro: "Os dados da inscrição são inválidos." },
        { status: 400 }
      );
    }

    const dados = corpo as Record<string, unknown>;
    const eventoId = Number(dados.evento_id);
    const nome = texto(dados.nome, 150);
    const email = texto(dados.email, 254).toLowerCase();
    const telefone = texto(dados.telefone, 40);
    const provincia = texto(dados.provincia, 100);
    const perfil = texto(dados.perfil, 80);
    const horario = texto(dados.horario_preferido, 100);
    const plataforma = texto(dados.plataforma, 50);
    const observacoes = texto(dados.observacoes, 2000);

    if (!Number.isSafeInteger(eventoId) || eventoId <= 0) {
      return NextResponse.json(
        { erro: "Selecciona um evento válido." },
        { status: 400 }
      );
    }

    if (nome.length < 2) {
      return NextResponse.json(
        { erro: "Indica o nome completo." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { erro: "Indica um endereço de e-mail válido." },
        { status: 400 }
      );
    }

    const perfisPermitidos = [
      "Estudante",
      "Agricultor / produtor",
      "T\u00e9cnico agropecu\u00e1rio",
      "Docente / investigador",
      "Empres\u00e1rio",
      "Outros",
    ];

    if (!perfisPermitidos.includes(perfil)) {
      return NextResponse.json(
        { erro: "Selecciona um perfil válido." },
        { status: 400 }
      );
    }

    const plataformasPermitidas = [
      "YouTube",
      "WhatsApp",
      "Zoom",
      "Presencial",
      "Microsoft Teams",
      "Google Meet",
      "Outra",
    ];

    if (!plataformasPermitidas.includes(plataforma)) {
      return NextResponse.json(
        { erro: "Selecciona uma plataforma válida." },
        { status: 400 }
      );
    }

    const supabase = obterSupabaseAdmin();

    const { data: evento, error: erroEvento } = await supabase
      .from("agroinova_agroacademia_eventos")
      .select("id, modalidade")
      .eq("id", eventoId)
      .eq("estado", "publicado")
      .maybeSingle();

    if (erroEvento) {
      console.error("Erro ao verificar evento:", erroEvento.message);

      return NextResponse.json(
        { erro: "Não foi possível validar o evento." },
        { status: 500 }
      );
    }

    if (!evento) {
      return NextResponse.json(
        { erro: "Este evento não existe ou não está disponível para inscrição." },
        { status: 404 }
      );
    }

    const { data: inscricao, error: erroInscricao } = await supabase
      .from("agroinova_agroacademia_inscricoes")
      .insert({
        evento_id: eventoId,
        nome,
        email,
        telefone,
        provincia,
        perfil,
        horario_preferido: horario,
        plataforma,
        observacoes,
        estado: "pendente",
      })
      .select("id, estado, criado_em")
      .single();

    if (erroInscricao || !inscricao) {
      console.error("Erro ao guardar inscrição:", erroInscricao?.message);

      return NextResponse.json(
        { erro: "Não foi possível guardar a inscrição. Tenta novamente." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        mensagem: "Inscrição recebida com sucesso.",
        inscricao,
      },
      { status: 201 }
    );
  } catch (erro) {
    console.error("Erro na API de inscrições:", erro);

    return NextResponse.json(
      { erro: "Ocorreu um erro ao processar a inscrição." },
      { status: 500 }
    );
  }
}