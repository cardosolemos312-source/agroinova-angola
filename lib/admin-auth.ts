import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "agroinova_admin";
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET;

function gerarAssinatura(valor: string) {
  if (!SESSION_SECRET) {
    throw new Error("ADMIN_SESSION_SECRET não configurado.");
  }

  return crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(valor)
    .digest("hex");
}

export function criarSessaoAdmin() {
  const valor = "admin";
  const assinatura = gerarAssinatura(valor);

  return `${valor}.${assinatura}`;
}

export function verificarSessaoAdmin(token: string | undefined) {
  if (!token) return false;

  const partes = token.split(".");

  if (partes.length !== 2) return false;

  const [valor, assinatura] = partes;

  if (valor !== "admin") return false;

  try {
    const assinaturaEsperada = gerarAssinatura(valor);

    if (assinatura.length !== assinaturaEsperada.length) {
      return false;
    }

    return crypto.timingSafeEqual(
      Buffer.from(assinatura),
      Buffer.from(assinaturaEsperada)
    );
  } catch {
    return false;
  }
}

export async function administradorAutenticado() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  return verificarSessaoAdmin(token);
}

export { COOKIE_NAME };