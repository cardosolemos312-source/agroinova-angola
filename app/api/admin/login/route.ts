import { NextResponse } from "next/server";
import {
  criarSessaoAdmin,
  COOKIE_NAME,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = String(body.email || "").trim();
    const senha = String(body.senha || "");

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminSenha = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminSenha) {
      console.error(
        "ADMIN_EMAIL ou ADMIN_PASSWORD não configurados."
      );

      return NextResponse.json(
        {
          erro:
            "A configuração do administrador ainda não foi definida.",
        },
        { status: 500 }
      );
    }

    if (
      email !== adminEmail ||
      senha !== adminSenha
    ) {
      return NextResponse.json(
        {
          erro:
            "E-mail ou palavra-passe incorrectos.",
        },
        { status: 401 }
      );
    }

    const token = criarSessaoAdmin();

    const resposta = NextResponse.json({
      sucesso: true,
      mensagem: "Login efectuado com sucesso.",
    });

    resposta.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return resposta;
  } catch (error) {
    console.error(
      "Erro no login administrativo:",
      error
    );

    return NextResponse.json(
      {
        erro:
          "Não foi possível processar o login.",
      },
      { status: 500 }
    );
  }
}