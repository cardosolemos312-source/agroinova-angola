
import { NextResponse } from "next/server";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

type Noticia = {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  timestamp: number;
  source: string;
  location: string;
  image: string;
  url: string;
};

type Fonte = {
  nome: string;
  url: string;
  dominio: string;
};

type Diagnostico = {
  fonte: string;
  linksEncontrados: number;
  artigosLidos: number;
  fotografiasEncontradas: number;
  erro?: string;
};

const FONTES: Fonte[] = [
  {
    nome: "Agroportal Angola",
    url: "https://www.agroportal.ao/pt/noticias/lista",
    dominio: "agroportal.ao",
  },
  {
    nome: "FADA",
    url: "https://www.fada.gov.ao/noticias/",
    dominio: "fada.gov.ao",
  },
  {
    nome: "Ministério da Agricultura e Florestas",
    url: "https://minagrif.gov.ao/web/noticias",
    dominio: "minagrif.gov.ao",
  },
  {
    nome: "Novo Jornal",
    url: "https://www.novojornal.co.ao/tag/agricultura.html",
    dominio: "novojornal.co.ao",
  },
];

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36";

const PALAVRAS_AGRICOLAS = [
  "agricultura",
  "agrícola",
  "agricola",
  "agronegócio",
  "agronegocio",
  "agropecuária",
  "agropecuaria",
  "produtor",
  "produção",
  "producao",
  "pecuária",
  "pecuaria",
  "gado",
  "bovino",
  "avicultura",
  "apicultura",
  "aquicultura",
  "aquacultura",
  "pesca",
  "pescador",
  "mandioca",
  "milho",
  "arroz",
  "café",
  "cafe",
  "cacau",
  "feijão",
  "feijao",
  "horticultura",
  "sementes",
  "fertilizantes",
  "irrigação",
  "irrigacao",
  "solos",
  "floresta",
  "madeira",
  "camponeses",
  "cooperativas",
  "fazenda",
  "rural",
  "alimentos",
  "segurança alimentar",
  "seguranca alimentar",
  "financiamento agrícola",
  "financiamento agricola",
  "mecanização",
  "mecanizacao",
  "cultivo",
  "colheita",
  "pastagem",
  "rebanho",
  "desenvolvimento rural",
  "agricultores",
  "fada",
];

function limparHTML(valor: string): string {
  return valor
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;|&#160;|&#xA0;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;|&#34;/gi, '"')
    .replace(/&#39;|&apos;|&#039;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&ndash;|&#8211;/gi, "–")
    .replace(/&mdash;|&#8212;/gi, "—")
    .replace(/&#(\d+);/g, (_, n: string) => {
      const code = Number(n);
      return code <= 0x10ffff && !(code >= 0xd800 && code <= 0xdfff)
        ? String.fromCodePoint(code)
        : "";
    })
    .replace(/&#x([0-9a-f]+);/gi, (_, n: string) => {
      const code = parseInt(n, 16);
      return code <= 0x10ffff && !(code >= 0xd800 && code <= 0xdfff)
        ? String.fromCodePoint(code)
        : "";
    })
    .replace(/&[a-z][a-z0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function atributo(html: string, nome: string): string {
  const nomeSeguro = nome.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(
    `\\b${nomeSeguro}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    "i",
  );
  const resultado = html.match(regex);

  return (
    resultado?.[1] ??
    resultado?.[2] ??
    resultado?.[3] ??
    ""
  ).trim();
}

function absoluto(url: string, base: string): string {
  try {
    const resultado = new URL(url, base);

    if (!["http:", "https:"].includes(resultado.protocol)) {
      return "";
    }

    resultado.hash = "";
    return resultado.href;
  } catch {
    return "";
  }
}

function urlValidaImagem(url: string): boolean {
  if (!url) return false;

  try {
    const parsed = new URL(url);

    return (
      ["https:", "http:"].includes(parsed.protocol) &&
      !/logo|avatar|favicon|placeholder|sprite|icon-\d|\/icons?\//i.test(
        parsed.pathname,
      )
    );
  } catch {
    return false;
  }
}

function relevante(texto: string): boolean {
  const normalizado = texto.toLocaleLowerCase("pt-PT");

  return PALAVRAS_AGRICOLAS.some((palavra) =>
    normalizado.includes(palavra.toLocaleLowerCase("pt-PT")),
  );
}

function categoriaDaNoticia(texto: string): string {
  const t = texto.toLocaleLowerCase("pt-PT");

  if (
    /pecuária|pecuaria|gado|bovino|caprino|ovino|veterinária|veterinaria|avicultura|apicultura/.test(
      t,
    )
  ) {
    return "Pecuária";
  }

  if (/pesca|pescas|aquicultura|aquacultura|peixe|pescador/.test(t)) {
    return "Pescas";
  }

  if (
    /floresta|madeira|desmatamento|silvicultura|reflorestação|reflorestacao/.test(
      t,
    )
  ) {
    return "Florestas";
  }

  if (
    /irrigação|irrigacao|água|agua|seca|chuva|clima|temperatura|meteorologia/.test(
      t,
    )
  ) {
    return "Água e clima";
  }

  if (/financiamento|crédito|credito|banco|investimento|fada/.test(t)) {
    return "Financiamento";
  }

  if (/formação|formacao|curso|capacitação|capacitacao|workshop/.test(t)) {
    return "Formação";
  }

  if (
    /tecnologia|inovação|inovacao|investigação|investigacao|mecanização|mecanizacao|drones/.test(
      t,
    )
  ) {
    return "Tecnologia e inovação";
  }

  return "Agricultura";
}

function tituloValido(titulo: string): boolean {
  const t = titulo.trim();

  if (t.length < 18 || t.length > 240) {
    return false;
  }

  return !/^(ler mais|saiba mais|ver mais|continuar|home|início|inicio|notícias|noticias|pesquisar|menu|publicidade)$/i.test(
    t,
  );
}

async function buscarHTML(url: string): Promise<string> {
  const resposta = await fetch(url, {
    headers: {
      "User-Agent": USER_AGENT,
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "pt-PT,pt;q=0.9,pt-AO;q=0.8,en;q=0.5",
    },
    signal: AbortSignal.timeout(9000),
    cache: "no-store",
    redirect: "follow",
  });

  if (!resposta.ok) {
    throw new Error(`HTTP ${resposta.status} ao consultar ${url}`);
  }

  return resposta.text();
}

function linkPareceNoticia(url: string, fonte: Fonte): boolean {
  try {
    const parsed = new URL(url);
    const dominio = parsed.hostname.toLowerCase().replace(/^www\./, "");

    if (dominio !== fonte.dominio.toLowerCase().replace(/^www\./, "")) {
      return false;
    }

    let caminho: string;

    try {
      caminho = decodeURIComponent(parsed.pathname).toLowerCase();
    } catch {
      caminho = parsed.pathname.toLowerCase();
    }

    if (
      caminho === "/" ||
      caminho === "/noticias" ||
      caminho === "/noticias/" ||
      caminho === "/pt/noticias/lista" ||
      caminho === "/tag/agricultura.html" ||
      caminho === "/web/noticias" ||
      /\/(categoria|category|author|page|tag)\//.test(caminho) ||
      /\.(jpg|jpeg|png|webp|gif|pdf|svg|css|js|xml|ico)$/i.test(caminho)
    ) {
      return false;
    }

    return caminho.length > 8;
  } catch {
    return false;
  }
}

function extrairData(texto: string): number {
  const iso = texto.match(
    /\b(20\d{2}-\d{2}-\d{2}(?:T[\d:.+-]+Z?)?)\b/,
  );

  if (iso) {
    const timestamp = Date.parse(iso[1]);

    if (!Number.isNaN(timestamp)) {
      return timestamp;
    }
  }

  const numerica = texto.match(
    /\b(\d{1,2})[/. -](\d{1,2})[/. -](20\d{2})\b/,
  );

  if (numerica) {
    const [, dia, mes, ano] = numerica;

    const timestamp = new Date(
      Number(ano),
      Number(mes) - 1,
      Number(dia),
      12,
    ).getTime();

    if (!Number.isNaN(timestamp)) {
      return timestamp;
    }
  }

  const meses: Record<string, number> = {
    janeiro: 0,
    fevereiro: 1,
    março: 2,
    marco: 2,
    abril: 3,
    maio: 4,
    junho: 5,
    julho: 6,
    agosto: 7,
    setembro: 8,
    outubro: 9,
    novembro: 10,
    dezembro: 11,
  };

  const extensa = texto.match(
    /\b(\d{1,2})\s+de\s+([a-zçã]+)\s+de\s+(20\d{2})\b/i,
  );

  if (extensa) {
    const [, dia, nomeMes, ano] = extensa;
    const mes = meses[nomeMes.toLowerCase()];

    if (mes !== undefined) {
      return new Date(Number(ano), mes, Number(dia), 12).getTime();
    }
  }

  return 0;
}

function imagemDoBloco(bloco: string, base: string): string {
  const imagens = bloco.match(/<img\b[^>]*>/gi) ?? [];

  for (const tag of imagens) {
    const srcset = atributo(tag, "data-srcset") || atributo(tag, "srcset");

    const primeiraSrcset = srcset
      .split(",")
      .map((parte) => parte.trim().split(/\s+/)[0])
      .find(Boolean);

    const src =
      atributo(tag, "data-src") ||
      atributo(tag, "data-lazy-src") ||
      atributo(tag, "data-original") ||
      atributo(tag, "data-original-src") ||
      atributo(tag, "src") ||
      primeiraSrcset ||
      "";

    const url = absoluto(src, base);

    if (urlValidaImagem(url)) {
      return url;
    }
  }

  return "";
}

function imagemDaPagina(html: string, base: string): string {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const prioridades = [
    "og:image",
    "og:image:url",
    "twitter:image",
    "twitter:image:src",
  ];

  for (const prioridade of prioridades) {
    for (const tag of tags) {
      const chave = (
        atributo(tag, "property") || atributo(tag, "name")
      ).toLowerCase();

      if (chave !== prioridade) {
        continue;
      }

      const url = absoluto(atributo(tag, "content"), base);

      if (urlValidaImagem(url)) {
        return url;
      }
    }
  }

  return "";
}

function metadado(html: string, nomes: string[]): string {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];

  for (const tag of tags) {
    const chave = (
      atributo(tag, "property") ||
      atributo(tag, "name") ||
      atributo(tag, "itemprop")
    ).toLowerCase();

    if (nomes.some((nome) => nome.toLowerCase() === chave)) {
      const conteudo = atributo(tag, "content");

      if (conteudo) {
        return limparHTML(conteudo);
      }
    }
  }

  return "";
}

function dataDaPagina(html: string): number {
  const dataMeta = metadado(html, [
    "article:published_time",
    "datePublished",
    "date",
    "pubdate",
  ]);

  if (dataMeta) {
    const timestamp = Date.parse(dataMeta);

    if (!Number.isNaN(timestamp)) {
      return timestamp;
    }

    const extraida = extrairData(dataMeta);

    if (extraida) {
      return extraida;
    }
  }

  const timeTags = html.match(/<time\b[^>]*>[\s\S]*?<\/time>/gi) ?? [];

  for (const tag of timeTags) {
    const datetime = atributo(tag, "datetime");
    const timestamp = datetime
      ? Date.parse(datetime)
      : extrairData(limparHTML(tag));

    if (timestamp && !Number.isNaN(timestamp)) {
      return timestamp;
    }
  }

  return extrairData(html.slice(0, 30000));
}

function extrairCandidatos(
  html: string,
  fonte: Fonte,
): Array<{
  title: string;
  url: string;
  image: string;
  summary: string;
  timestamp: number;
}> {
  const resultado: Array<{
    title: string;
    url: string;
    image: string;
    summary: string;
    timestamp: number;
  }> = [];

  const vistos = new Set<string>();
  const artigos = html.match(/<article\b[^>]*>[\s\S]*?<\/article>/gi) ?? [];
  const zonas = artigos.length ? artigos : [html];

  for (const zona of zonas) {
    const anchors = zona.match(/<a\b[^>]*>[\s\S]*?<\/a>/gi) ?? [];

    for (const anchor of anchors) {
      const href = atributo(anchor, "href");
      const url = absoluto(href, fonte.url);

      if (!href || !linkPareceNoticia(url, fonte)) {
        continue;
      }

      const textoImagem = anchor.match(/<img\b[^>]*>/i)?.[0] ?? "";

      const title =
        limparHTML(atributo(anchor, "aria-label")) ||
        limparHTML(atributo(anchor, "title")) ||
        limparHTML(atributo(textoImagem, "alt")) ||
        limparHTML(
          anchor.match(/<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/i)?.[1] ?? "",
        ) ||
        limparHTML(anchor);

      if (!tituloValido(title)) {
        continue;
      }

      if (!relevante(title) && fonte.dominio !== "agroportal.ao") {
        continue;
      }

      const chave = url.replace(/\/+$/, "").toLowerCase();

      if (vistos.has(chave)) {
        continue;
      }

      vistos.add(chave);

      const blocoImagem = artigos.length ? zona : anchor;
      const textoBloco = limparHTML(blocoImagem);

      const resumo = textoBloco
        .replace(title, "")
        .replace(/\b(ler mais|saiba mais|ver notícia completa)\b/gi, "")
        .trim()
        .slice(0, 450);

      resultado.push({
        title,
        url,
        image: imagemDoBloco(blocoImagem, fonte.url),
        summary: resumo,
        timestamp: extrairData(blocoImagem),
      });
    }
  }

  return resultado;
}

async function completarNoticia(
  candidato: {
    title: string;
    url: string;
    image: string;
    summary: string;
    timestamp: number;
  },
  fonte: Fonte,
): Promise<Noticia> {
  let title = candidato.title;
  let summary = candidato.summary;
  let image = candidato.image;
  let timestamp = candidato.timestamp;

  try {
    const html = await buscarHTML(candidato.url);

    title =
      metadado(html, ["og:title", "twitter:title"]) ||
      limparHTML(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "") ||
      title;

    summary =
      metadado(html, [
        "og:description",
        "description",
        "twitter:description",
      ]) || summary;

    if (!image) {
      image = imagemDaPagina(html, candidato.url);
    }

    if (!timestamp) {
      timestamp = dataDaPagina(html);
    }
  } catch (erro) {
    console.warn(
      `[Notícias] Falha ao consultar artigo: ${candidato.url}`,
      erro instanceof Error ? erro.message : "",
    );
  }

  const data = timestamp > 0 ? new Date(timestamp) : null;

  return {
    id: `${fonte.dominio}-${Buffer.from(candidato.url).toString("base64url").slice(0, 24)}`,
    category: categoriaDaNoticia(`${title} ${summary}`),
    title,
    summary: summary || "Consulta a publicação original para ler a notícia completa.",
    content: "",
    date: data
      ? data.toLocaleDateString("pt-PT", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "",
    timestamp,
    source: fonte.nome,
    location: "Angola",
    image: urlValidaImagem(image) ? image : "",
    url: candidato.url,
  };
}

async function lerFonte(
  fonte: Fonte,
): Promise<{ noticias: Noticia[]; diagnostico: Diagnostico }> {
  try {
    const html = await buscarHTML(fonte.url);
    const candidatos = extrairCandidatos(html, fonte);

    const noticias = await Promise.all(
      candidatos
        .slice(0, 6)
        .map((candidato) => completarNoticia(candidato, fonte)),
    );

    return {
      noticias,
      diagnostico: {
        fonte: fonte.nome,
        linksEncontrados: candidatos.length,
        artigosLidos: noticias.length,
        fotografiasEncontradas: noticias.filter((noticia) => noticia.image)
          .length,
      },
    };
  } catch (erro) {
    const mensagem =
      erro instanceof Error ? erro.message : "Erro desconhecido";

    console.error(
      `[Notícias] Fonte indisponível: ${fonte.nome}`,
      mensagem,
    );

    return {
      noticias: [],
      diagnostico: {
        fonte: fonte.nome,
        linksEncontrados: 0,
        artigosLidos: 0,
        fotografiasEncontradas: 0,
        erro: mensagem,
      },
    };
  }
}

export async function GET() {
  try {
    const supabase = obterSupabaseAdmin();

    const [resultadosExternos, resultadoSupabase] = await Promise.all([
      Promise.all(FONTES.map(lerFonte)),
      supabase
        .from("agroinova_noticias")
        .select(
          "id,titulo,resumo,conteudo,categoria,imagem_url,fonte,fonte_url,autor,estado,destaque,publicada_em,criada_em,actualizada_em,pdf_url",
        )
        .eq("estado", "publicada")
        .order("publicada_em", { ascending: false })
        .limit(40),
    ]);

    if (resultadoSupabase.error) {
      console.error(
        "[Notícias] Erro ao consultar publicações AGROINOVA:",
        JSON.stringify(
          {
            code: resultadoSupabase.error.code,
            message: resultadoSupabase.error.message,
            details: resultadoSupabase.error.details,
            hint: resultadoSupabase.error.hint,
          },
          null,
          2,
        ),
      );
    }

    const noticiasProprias: Noticia[] = (
      resultadoSupabase.data ?? []
    ).map((item: Record<string, unknown>) => {
      const dataOriginal = item.publicada_em ?? item.criada_em;

      const timestamp = dataOriginal
        ? new Date(String(dataOriginal)).getTime() || 0
        : 0;

      const data = timestamp > 0 ? new Date(timestamp) : null;

      return {
        id: `agroinova-${String(item.id)}`,
        category: String(item.categoria ?? "Institucional"),
        title: String(item.titulo ?? ""),
        summary: String(item.resumo ?? ""),
        content: String(item.conteudo ?? ""),
        date: data
          ? data.toLocaleDateString("pt-PT", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : "",
        timestamp,
        source: "AGROINOVA ANGOLA",
        location: "Angola",
        image:
          typeof item.imagem_url === "string" ? item.imagem_url : "",
        url: "",
      };
    });

    const externas = resultadosExternos.flatMap(
      (resultado) => resultado.noticias,
    );

    const unicas = new Map<string, Noticia>();

    for (const noticia of [...noticiasProprias, ...externas]) {
      const chave = noticia.id.startsWith("agroinova-")
        ? noticia.id
        : noticia.url.replace(/\/+$/, "").toLowerCase();

      if (!unicas.has(chave) && tituloValido(noticia.title)) {
        unicas.set(chave, noticia);
      }
    }

    const noticias = [...unicas.values()]
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 60);

    const diagnostico = resultadosExternos.map(
      (resultado) => resultado.diagnostico,
    );

    const fontes = diagnostico.map((item) => ({
      nome: item.fonte,
      total: item.artigosLidos,
      erro: item.erro ?? "",
    }));

    return NextResponse.json(
      {
        sucesso: noticias.length > 0,
        atualizadoEm: new Date().toISOString(),
        total: noticias.length,
        fontes,
        noticias,
        diagnostico,
        erroPublicacoesProprias: resultadoSupabase.error
          ? "Não foi possível consultar as publicações próprias."
          : undefined,
        mensagem:
          noticias.length === 0
            ? "Não foram encontradas notícias. Consulta o diagnóstico das fontes."
            : undefined,
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      },
    );
  } catch (erro) {
    console.error("[Notícias] Erro geral da API:", erro);

    return NextResponse.json(
      {
        sucesso: false,
        total: 0,
        noticias: [],
        fontes: [],
        diagnostico: [],
        mensagem: "Não foi possível carregar as notícias neste momento.",
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      },
    );
  }
}
