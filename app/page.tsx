
"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type Area = {
  nome: string;
  descricao: string;
  href: string;
  imagem: string;
};

type ResultadoPesquisa = {
  titulo: string;
  descricao: string;
  href: string;
  categoria: string;
  palavras?: string[];
};

type Mensagem = {
  role: "user" | "assistant";
  content: string;
};

const BANDEIRA_ANGOLA =
  "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg";

const areas: Area[] = [
  {
    nome: "Agricultura",
    descricao:
      "Culturas, solos, irrigação, pragas, doenças, produção e boas práticas agrícolas.",
    href: "/agricultura",
    imagem:
      "https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    nome: "Pecuária",
    descricao:
      "Bovinos, caprinos, ovinos, suínos, aves, instalações, alimentação, reprodução e sanidade.",
    href: "/pecuaria",
    imagem:
      "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    nome: "Pesca",
    descricao:
      "Espécies, pesca marítima e continental, aquacultura, técnicas, recursos e produção.",
    href: "/pesca",
    imagem:
      "https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    nome: "Floresta",
    descricao:
      "Recursos florestais, biodiversidade, conservação, silvicultura e uso sustentável.",
    href: "/floresta",
    imagem:
      "https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
];

const resultados: ResultadoPesquisa[] = [
  /* ÁREAS PRINCIPAIS */
  {
    titulo: "Agricultura",
    descricao:
      "Culturas, produção vegetal, solos, irrigação, pragas, doenças e boas práticas.",
    href: "/agricultura",
    categoria: "Agricultura",
    palavras: [
      "agricultura",
      "culturas",
      "produção vegetal",
      "campo",
      "lavoura",
    ],
  },
  {
    titulo: "Pecuária",
    descricao:
      "Conhecimento técnico sobre produção animal, alimentação, instalações, reprodução e sanidade.",
    href: "/pecuaria",
    categoria: "Pecuária",
    palavras: [
      "pecuária",
      "animais",
      "gado",
      "produção animal",
      "criação",
    ],
  },
  {
    titulo: "Pesca",
    descricao:
      "Espécies aquáticas, pesca, aquacultura, conservação e produção.",
    href: "/pesca",
    categoria: "Pesca",
    palavras: [
      "pesca",
      "peixes",
      "aquacultura",
      "mar",
      "pescado",
    ],
  },
  {
    titulo: "Floresta",
    descricao:
      "Florestas, biodiversidade, conservação, recursos naturais e produção florestal.",
    href: "/floresta",
    categoria: "Floresta",
    palavras: [
      "floresta",
      "florestas",
      "silvicultura",
      "árvores",
      "biodiversidade",
      "madeira",
    ],
  },
  {
    titulo: "Investigação",
    descricao:
      "Áreas de investigação, estudos, pesquisas, artigos e conhecimento científico.",
    href: "/investigacao",
    categoria: "Investigação",
    palavras: [
      "investigação",
      "pesquisa",
      "estudo",
      "ciência",
      "artigos",
    ],
  },
  {
    titulo: "Biblioteca Digital",
    descricao:
      "Livros, artigos, teses, dissertações, relatórios e documentos técnicos.",
    href: "/biblioteca",
    categoria: "Conhecimento",
    palavras: [
      "biblioteca",
      "livros",
      "artigos",
      "teses",
      "dissertações",
      "relatórios",
    ],
  },
  {
    titulo: "Dados",
    descricao:
      "Indicadores agrícolas, pecuários, informação territorial e estatísticas oficiais.",
    href: "/dados",
    categoria: "Dados",
    palavras: [
      "dados",
      "estatísticas",
      "indicadores",
      "INE",
      "produção",
    ],
  },
  {
    titulo: "Clima",
    descricao:
      "Informação climática, precipitação, temperatura, previsões e relação com a agricultura.",
    href: "/clima",
    categoria: "Clima",
    palavras: [
      "clima",
      "chuva",
      "precipitação",
      "temperatura",
      "previsão",
      "seca",
    ],
  },
  {
    titulo: "Solos",
    descricao:
      "Informação sobre solos, propriedades, culturas, uso agrícola e conservação.",
    href: "/solos",
    categoria: "Solos",
    palavras: [
      "solo",
      "solos",
      "fertilidade",
      "erosão",
      "argila",
      "areia",
    ],
  },
  {
    titulo: "Tecnologias",
    descricao:
      "Agricultura digital, mecanização, inteligência artificial, equipamentos e inovação.",
    href: "/tecnologias",
    categoria: "Tecnologia",
    palavras: [
      "tecnologia",
      "tecnologias",
      "drone",
      "máquinas",
      "mecanização",
      "inteligência artificial",
      "IA",
    ],
  },
  {
    titulo: "Mapa",
    descricao:
      "Informação territorial e visualização geográfica relacionada com Angola.",
    href: "/mapa",
    categoria: "Território",
    palavras: [
      "mapa",
      "províncias",
      "território",
      "geografia",
      "localização",
    ],
  },
  {
    titulo: "Notícias",
    descricao:
      "Notícias, iniciativas, acontecimentos e informação do sector agropecuário.",
    href: "/noticias",
    categoria: "Informação",
    palavras: [
      "notícias",
      "noticia",
      "acontecimentos",
      "actualidade",
    ],
  },

  /* CULTURAS */
  {
    titulo: "Milho",
    descricao:
      "Informação sobre a cultura do milho, produção, manejo, solos e práticas agrícolas.",
    href: "/agricultura",
    categoria: "Cultura",
    palavras: [
      "milho",
      "milho amarelo",
      "milho branco",
      "cereal",
      "cereais",
    ],
  },
  {
    titulo: "Mandioca",
    descricao:
      "Informação sobre produção de mandioca, implantação, manejo e utilização.",
    href: "/agricultura",
    categoria: "Cultura",
    palavras: [
      "mandioca",
      "cassava",
      "raiz",
      "raízes",
    ],
  },
  {
    titulo: "Feijão",
    descricao:
      "Informação sobre produção de feijão, manejo da cultura e principais cuidados.",
    href: "/agricultura",
    categoria: "Cultura",
    palavras: [
      "feijão",
      "feijao",
      "leguminosa",
      "leguminosas",
    ],
  },
  {
    titulo: "Soja",
    descricao:
      "Informação sobre produção de soja, manejo, fertilidade e práticas agrícolas.",
    href: "/agricultura",
    categoria: "Cultura",
    palavras: [
      "soja",
      "leguminosa",
      "oleaginosa",
    ],
  },
  {
    titulo: "Arroz",
    descricao:
      "Informação sobre produção de arroz, água, solo, manejo e colheita.",
    href: "/agricultura",
    categoria: "Cultura",
    palavras: [
      "arroz",
      "cereal",
      "irrigação",
    ],
  },
  {
    titulo: "Trigo",
    descricao:
      "Informação sobre a cultura do trigo e os principais aspectos do seu manejo.",
    href: "/agricultura",
    categoria: "Cultura",
    palavras: [
      "trigo",
      "cereal",
    ],
  },
  {
    titulo: "Batata",
    descricao:
      "Informação sobre produção de batata, implantação, manejo e colheita.",
    href: "/agricultura",
    categoria: "Cultura",
    palavras: [
      "batata",
      "tubérculo",
      "tubérculos",
    ],
  },
  {
    titulo: "Batata-doce",
    descricao:
      "Informação sobre produção de batata-doce e práticas de manejo.",
    href: "/agricultura",
    categoria: "Cultura",
    palavras: [
      "batata-doce",
      "batata doce",
      "tubérculo",
    ],
  },
  {
    titulo: "Tomate",
    descricao:
      "Informação sobre produção de tomate, irrigação, nutrição e proteção da cultura.",
    href: "/agricultura",
    categoria: "Hortícola",
    palavras: [
      "tomate",
      "hortaliça",
      "hortaliças",
    ],
  },
  {
    titulo: "Cebola",
    descricao:
      "Informação sobre produção de cebola, manejo, irrigação e conservação.",
    href: "/agricultura",
    categoria: "Hortícola",
    palavras: [
      "cebola",
      "hortaliça",
    ],
  },
  {
    titulo: "Alface",
    descricao:
      "Informação sobre produção de alface e práticas de manejo hortícola.",
    href: "/agricultura",
    categoria: "Hortícola",
    palavras: [
      "alface",
      "hortaliça",
    ],
  },
  {
    titulo: "Café",
    descricao:
      "Informação sobre produção de café, implantação, manejo e conservação.",
    href: "/agricultura",
    categoria: "Cultura",
    palavras: [
      "café",
      "cafe",
      "cafeeiro",
    ],
  },
  {
    titulo: "Algodão",
    descricao:
      "Informação sobre produção de algodão e principais práticas de manejo.",
    href: "/agricultura",
    categoria: "Cultura",
    palavras: [
      "algodão",
      "algodao",
      "fibra",
    ],
  },
  {
    titulo: "Amendoim",
    descricao:
      "Informação sobre produção de amendoim e manejo da cultura.",
    href: "/agricultura",
    categoria: "Cultura",
    palavras: [
      "amendoim",
      "oleaginosa",
    ],
  },
  {
    titulo: "Banana",
    descricao:
      "Informação sobre produção de banana, implantação, nutrição e manejo.",
    href: "/agricultura",
    categoria: "Fruticultura",
    palavras: [
      "banana",
      "bananeira",
      "fruta",
      "fruticultura",
    ],
  },
  {
    titulo: "Manga",
    descricao:
      "Informação sobre produção de manga e práticas de manejo de pomares.",
    href: "/agricultura",
    categoria: "Fruticultura",
    palavras: [
      "manga",
      "mangueira",
      "fruta",
      "fruticultura",
    ],
  },
  {
    titulo: "Abacaxi",
    descricao:
      "Informação sobre produção de abacaxi e manejo da cultura.",
    href: "/agricultura",
    categoria: "Fruticultura",
    palavras: [
      "abacaxi",
      "fruta",
      "fruticultura",
    ],
  },
  {
    titulo: "Mamão",
    descricao:
      "Informação sobre produção de mamão e manejo de pomares.",
    href: "/agricultura",
    categoria: "Fruticultura",
    palavras: [
      "mamão",
      "mamao",
      "mamoeiro",
      "fruta",
    ],
  },
  {
    titulo: "Abacate",
    descricao:
      "Informação sobre produção de abacate e práticas de manejo.",
    href: "/agricultura",
    categoria: "Fruticultura",
    palavras: [
      "abacate",
      "abacateiro",
      "fruta",
    ],
  },

  /* PECUÁRIA */
  {
    titulo: "Bovinos",
    descricao:
      "Orientações sobre produção, alimentação, reprodução, instalações e sanidade de bovinos.",
    href: "/pecuaria/bovinos/orientacoes",
    categoria: "Pecuária",
    palavras: [
      "bovino",
      "bovinos",
      "gado",
      "vaca",
      "vacas",
      "boi",
      "bois",
      "novilho",
    ],
  },
  {
    titulo: "Caprinos",
    descricao:
      "Informação técnica sobre criação de caprinos, alimentação, instalações e sanidade.",
    href: "/pecuaria/caprinos/orientacoes/racas",
    categoria: "Pecuária",
    palavras: [
      "caprino",
      "caprinos",
      "cabra",
      "cabras",
      "cabrito",
      "cabritos",
    ],
  },
  {
    titulo: "Ovinos",
    descricao:
      "Informação técnica sobre criação de ovinos, abrigo, alimentação, reprodução e sanidade.",
    href: "/pecuaria/ovinos/orientacoes/abrigo",
    categoria: "Pecuária",
    palavras: [
      "ovino",
      "ovinos",
      "ovelha",
      "ovelhas",
      "cordeiro",
      "cordeiros",
    ],
  },
  {
    titulo: "Suínos",
    descricao:
      "Informação sobre produção de suínos, alimentação, instalações, raças e sanidade.",
    href: "/pecuaria/suinos/orientacoes/alimentacao",
    categoria: "Pecuária",
    palavras: [
      "suíno",
      "suinos",
      "suínos",
      "porco",
      "porcos",
      "leitão",
      "leitões",
    ],
  },
  {
    titulo: "Galinhas",
    descricao:
      "Orientações sobre criação de galinhas, corte, poedeiras, alimentação, instalações e biossegurança.",
    href: "/pecuaria/galinhas/orientacoes",
    categoria: "Avicultura",
    palavras: [
      "galinha",
      "galinhas",
      "frango",
      "frangos",
      "avicultura",
      "poedeira",
      "poedeiras",
    ],
  },
  {
    titulo: "Patos",
    descricao:
      "Orientações sobre criação de patos, água, alimentação, instalações, reprodução e sanidade.",
    href: "/pecuaria/patos/orientacoes/agua",
    categoria: "Avicultura",
    palavras: [
      "pato",
      "patos",
      "patos domésticos",
      "avicultura",
    ],
  },
  {
    titulo: "Perus",
    descricao:
      "Informação sobre criação de perus, crescimento, instalações, reprodução e sanidade.",
    href: "/pecuaria/perus/orientacoes/alimentacao",
    categoria: "Avicultura",
    palavras: [
      "peru",
      "perus",
      "avicultura",
    ],
  },
];

const navegacao = [
  { nome: "Início", href: "/" },
  { nome: "Agricultura", href: "/agricultura" },
  { nome: "Pecuária", href: "/pecuaria" },
  { nome: "Pesca", href: "/pesca" },
  { nome: "Floresta", href: "/floresta" },
  { nome: "Investigação", href: "/investigacao" },
  { nome: "Tecnologias", href: "/tecnologias" },
  { nome: "Dados", href: "/dados" },
  { nome: "Notícias", href: "/noticias" },
];

export default function Home() {
  const [pesquisa, setPesquisa] = useState("");
  const [pesquisaAberta, setPesquisaAberta] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  const [chatAberto, setChatAberto] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    {
      role: "assistant",
      content:
        "Olá. Sou o AGROIA, assistente da AGROINOVA ANGOLA. Posso ajudar com agricultura, pecuária, pesca, floresta, clima, solos, investigação, tecnologias e dados.",
    },
  ]);
  const [aResponder, setAResponder] = useState(false);

  const resultadosFiltrados = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    if (!termo) {
      return [];
    }

    const encontrados = resultados.filter((item) => {
      const textoPesquisa = [
        item.titulo,
        item.descricao,
        item.categoria,
        ...(item.palavras || []),
      ]
        .join(" ")
        .toLowerCase();

      return textoPesquisa.includes(termo);
    });

    return encontrados.slice(0, 10);
  }, [pesquisa]);

  function pesquisar(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const termo = pesquisa.trim();

    if (!termo) {
      setPesquisaAberta(false);
      return;
    }

    setPesquisaAberta(true);

    window.setTimeout(() => {
      document
        .getElementById("resultados-pesquisa")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  }

  function escolherPesquisa(item: ResultadoPesquisa) {
    setPesquisa(item.titulo);
    setPesquisaAberta(true);

    window.setTimeout(() => {
      document
        .getElementById("resultados-pesquisa")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  }

  async function enviarMensagem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const texto = mensagem.trim();

    if (!texto || aResponder) {
      return;
    }

    const historico = [
      ...mensagens,
      {
        role: "user" as const,
        content: texto,
      },
    ];

    setMensagens(historico);
    setMensagem("");
    setAResponder(true);

    try {
      const resposta = await fetch("/api/grok", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: historico.slice(-12),
        }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          dados?.error ||
            "Não foi possível obter resposta do AGROIA.",
        );
      }

      setMensagens((estadoAtual) => [
        ...estadoAtual,
        {
          role: "assistant",
          content: dados.answer,
        },
      ]);
    } catch (error) {
      setMensagens((estadoAtual) => [
        ...estadoAtual,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "O AGROIA não conseguiu responder neste momento.",
        },
      ]);
    } finally {
      setAResponder(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAVEGAÇÃO */}
      <header className="absolute left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/25 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="shrink-0">
            <div className="leading-none">
              <div className="text-2xl font-black tracking-tight">
                AGROINOVA
              </div>

              <div className="mt-1 text-[10px] font-semibold tracking-[0.35em] text-emerald-300">
                ANGOLA
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {navegacao.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/90 transition hover:text-emerald-300"
              >
                {item.nome}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("pesquisa")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });

                window.setTimeout(() => {
                  document
                    .getElementById("campo-pesquisa")
                    ?.focus();
                }, 300);
              }}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Pesquisar
            </button>

            <button
              type="button"
              onClick={() => setChatAberto(true)}
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              AGROIA
            </button>
          </div>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
            onClick={() =>
              setMenuAberto((estado) => !estado)
            }
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-bold lg:hidden"
          >
            Menu
          </button>
        </div>

        {menuAberto && (
          <div className="border-t border-white/10 bg-slate-950/95 px-5 py-5 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1">
              {navegacao.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuAberto(false)}
                  className="rounded-lg px-4 py-3 font-medium text-white hover:bg-white/10"
                >
                  {item.nome}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => {
                  setMenuAberto(false);

                  document
                    .getElementById("pesquisa")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="mt-2 rounded-lg bg-white px-4 py-3 text-left font-bold text-green-900"
              >
                Pesquisar na plataforma
              </button>

              <button
                type="button"
                onClick={() => {
                  setMenuAberto(false);
                  setChatAberto(true);
                }}
                className="rounded-lg bg-emerald-500 px-4 py-3 text-left font-bold text-white"
              >
                Abrir AGROIA
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden bg-slate-950 text-white">
        {/* FOTOGRAFIA */}
        <img
          src="https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg?auto=compress&cs=tinysrgb&w=2200"
          alt="Paisagem agrícola de Angola"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* BANDEIRA DE ANGOLA AO FUNDO */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${BANDEIRA_ANGOLA}")`,
            backgroundSize: "cover",
            opacity: 0.28,
            mixBlendMode: "screen",
          }}
          aria-hidden="true"
        />

        {/* SOBREPOSIÇÕES */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-green-950/78 to-green-950/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-green-950/95 via-transparent to-slate-950/55" />

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-20 pt-36 lg:px-8 lg:pb-24">
          <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.65fr] lg:items-end">
            <div>
              <div className="flex items-center gap-4">
                <div className="h-1 w-16 bg-red-600" />
                <div className="h-1 w-16 bg-yellow-400" />
                <div className="h-1 w-16 bg-black shadow-sm" />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
                Plataforma Nacional de Investigação, Conhecimento e Inovação
                Agropecuária de Angola
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Conhecimento, Tecnologia e Inovação ao Serviço do{" "}
                <span className="text-emerald-400">
                  Campo Angolano.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
                A AGROINOVA ANGOLA reúne conhecimento científico,
                investigação, tecnologias, dados e informação para aproximar
                produtores, técnicos, investigadores, estudantes, empresas e
                instituições.
              </p>

              {/* PESQUISA */}
              <form
                id="pesquisa"
                onSubmit={pesquisar}
                className="relative mt-9 max-w-3xl"
              >
                <div className="flex overflow-hidden rounded-2xl border border-white/20 bg-white p-1.5 shadow-2xl">
                  <input
                    id="campo-pesquisa"
                    value={pesquisa}
                    onChange={(event) => {
                      const valor = event.target.value;

                      setPesquisa(valor);
                      setPesquisaAberta(
                        valor.trim().length > 0,
                      );
                    }}
                    type="search"
                    autoComplete="off"
                    placeholder="Pesquisar culturas, espécies, estudos, tecnologias..."
                    className="min-w-0 flex-1 bg-transparent px-5 py-4 text-slate-900 outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="submit"
                    className="rounded-xl bg-green-700 px-7 py-3 font-bold text-white transition hover:bg-green-800"
                  >
                    Pesquisar
                  </button>
                </div>

                {/* SUGESTÕES EM TEMPO REAL */}
                {pesquisa.trim() &&
                  resultadosFiltrados.length > 0 && (
                    <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                      <div className="max-h-[420px] overflow-y-auto p-2">
                        {resultadosFiltrados.map((resultado) => (
                          <Link
                            key={`${resultado.titulo}-${resultado.href}`}
                            href={resultado.href}
                            onClick={() =>
                              escolherPesquisa(resultado)
                            }
                            className="block rounded-xl px-4 py-3 text-left transition hover:bg-green-50"
                          >
                            <div className="flex items-center justify-between gap-4">
                              <div className="min-w-0">
                                <p className="font-bold text-slate-900">
                                  {resultado.titulo}
                                </p>

                                <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-500">
                                  {resultado.descricao}
                                </p>
                              </div>

                              <span className="shrink-0 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                                {resultado.categoria}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Milho",
                    "Mandioca",
                    "Feijão",
                    "Bovinos",
                    "Pesca",
                    "Floresta",
                    "Clima",
                    "Solos",
                  ].map((termo) => (
                    <button
                      key={termo}
                      type="button"
                      onClick={() => {
                        setPesquisa(termo);
                        setPesquisaAberta(true);

                        window.setTimeout(() => {
                          document
                            .getElementById(
                              "resultados-pesquisa",
                            )
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }, 50);
                      }}
                      className="rounded-full border border-white/30 bg-black/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-emerald-300 hover:bg-emerald-500/20"
                    >
                      {termo}
                    </button>
                  ))}
                </div>
              </form>
            </div>

            {/* AGROIA */}
            <div className="rounded-3xl border border-white/15 bg-slate-950/60 p-7 shadow-2xl backdrop-blur-xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                AGROIA
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight">
                Um assistente inteligente para o campo angolano.
              </h2>

              <p className="mt-4 leading-7 text-white/75">
                Converse com a inteligência artificial da plataforma para
                encontrar orientação, conhecimento e caminhos para continuar
                a sua pesquisa.
              </p>

              <button
                type="button"
                onClick={() => setChatAberto(true)}
                className="mt-7 rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:bg-emerald-400"
              >
                Conversar com o AGROIA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      {pesquisaAberta && (
        <section
          id="resultados-pesquisa"
          className="border-b bg-slate-50 py-14"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                  Pesquisa AGROINOVA
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  Resultados para &ldquo;{pesquisa}&rdquo;
                </h2>
              </div>

              <button
                type="button"
                onClick={() => {
                  setPesquisa("");
                  setPesquisaAberta(false);
                }}
                className="font-semibold text-green-700 hover:text-green-900"
              >
                Limpar pesquisa
              </button>
            </div>

            {resultadosFiltrados.length > 0 ? (
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resultadosFiltrados.map((resultado) => (
                  <Link
                    key={`${resultado.titulo}-${resultado.href}`}
                    href={resultado.href}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                      {resultado.categoria}
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      {resultado.titulo}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {resultado.descricao}
                    </p>

                    <span className="mt-5 inline-block font-bold text-green-700">
                      Explorar área
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8">
                <h3 className="text-xl font-bold">
                  Não encontramos uma correspondência.
                </h3>

                <p className="mt-2 text-slate-600">
                  Experimente escrever o nome de uma cultura, espécie,
                  tecnologia, área de conhecimento ou outro termo agrícola.
                </p>

                <button
                  type="button"
                  onClick={() => setChatAberto(true)}
                  className="mt-5 rounded-lg bg-green-700 px-5 py-3 font-bold text-white hover:bg-green-800"
                >
                  Perguntar ao AGROIA
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ÁREAS PRINCIPAIS */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Áreas principais
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Explore o conhecimento agropecuário de Angola
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Encontre conteúdos especializados e informação organizada
                para compreender, produzir, investigar e inovar.
              </p>
            </div>

            <Link
              href="/agricultura"
              className="font-bold text-green-700 hover:text-green-900"
            >
              Ver todas as áreas
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group relative min-h-[390px] overflow-hidden rounded-3xl bg-slate-950 shadow-sm"
              >
                <img
                  src={area.imagem}
                  alt={area.nome}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-7 text-white">
                  <h3 className="text-3xl font-black">
                    {area.nome}
                  </h3>

                  <p className="mt-3 leading-7 text-white/80">
                    {area.descricao}
                  </p>

                  <span className="mt-6 inline-flex w-fit rounded-full bg-white px-5 py-2.5 font-bold text-slate-900 transition group-hover:bg-emerald-400">
                    Explorar
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CENTRO DE CONHECIMENTO */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Centro de conhecimento
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Uma plataforma para todo o sector
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Agricultura, pecuária, pesca e floresta integradas com
                investigação, tecnologia, dados, clima e conhecimento.
              </p>

              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("areas-conhecimento")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="mt-7 rounded-xl bg-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-800"
              >
                Conheça a plataforma
              </button>
            </div>

            <div
              id="areas-conhecimento"
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  titulo: "Conhecimento",
                  texto:
                    "Artigos, estudos, guias e boas práticas.",
                  href: "/biblioteca",
                },
                {
                  titulo: "Investigação",
                  texto:
                    "Projetos, pesquisas e resultados científicos.",
                  href: "/investigacao",
                },
                {
                  titulo: "Tecnologia",
                  texto:
                    "Inovação, equipamentos e soluções digitais.",
                  href: "/tecnologias",
                },
                {
                  titulo: "Dados",
                  texto:
                    "Estatísticas, indicadores e informação territorial.",
                  href: "/dados",
                },
                {
                  titulo: "Clima",
                  texto:
                    "Informação climática para produção e território.",
                  href: "/clima",
                },
                {
                  titulo: "AGROIA",
                  texto:
                    "Assistente de inteligência artificial para o sector.",
                  href: "#agroia",
                },
              ].map((item) =>
                item.href.startsWith("#") ? (
                  <button
                    key={item.titulo}
                    type="button"
                    onClick={() => setChatAberto(true)}
                    className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-bold">
                      {item.titulo}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.texto}
                    </p>
                  </button>
                ) : (
                  <Link
                    key={item.titulo}
                    href={item.href}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-bold">
                      {item.titulo}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.texto}
                    </p>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* VISÃO NACIONAL */}
      <section className="relative overflow-hidden bg-green-950 py-20 text-white lg:py-24">
        <img
          src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=2200"
          alt="Paisagem natural"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-green-950/80" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Visão nacional
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Um espaço digital pensado para Angola
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Agricultura, pecuária, pesca e floresta fazem parte de um mesmo
              sistema de recursos, territórios, pessoas, conhecimento e
              inovação.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/mapa"
              className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur transition hover:bg-white/15"
            >
              <h3 className="text-xl font-bold">
                Território
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                Mapas e informação territorial para compreender Angola.
              </p>
            </Link>

            <Link
              href="/clima"
              className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur transition hover:bg-white/15"
            >
              <h3 className="text-xl font-bold">
                Clima
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                Informação climática relacionada com produção e território.
              </p>
            </Link>

            <Link
              href="/solos"
              className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur transition hover:bg-white/15"
            >
              <h3 className="text-xl font-bold">
                Solos
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                Conhecimento sobre solos, culturas e conservação.
              </p>
            </Link>

            <button
              type="button"
              onClick={() => setChatAberto(true)}
              className="rounded-2xl border border-emerald-300/30 bg-emerald-500/15 p-7 text-left backdrop-blur transition hover:bg-emerald-500/25"
            >
              <h3 className="text-xl font-bold">
                AGROIA
              </h3>

              <p className="mt-3 leading-7 text-white/70">
                Apoio inteligente para explorar o conhecimento da plataforma.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <img
          src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=2200"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Juntos pelo futuro
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Conhecimento para transformar o campo angolano.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              Explore investigação, consulte conhecimento, descubra
              tecnologias e utilize os dados disponíveis na plataforma.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/biblioteca"
              className="rounded-full bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-emerald-300"
            >
              Explorar Biblioteca
            </Link>

            <Link
              href="/tecnologias"
              className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-slate-900"
            >
              Conhecer Tecnologias
            </Link>

            <Link
              href="/dados"
              className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-slate-900"
            >
              Consultar Dados
            </Link>
          </div>
        </div>
      </section>
      {/* BOTÃO AGROIA */}
      <button
        id="agroia"
        type="button"
        onClick={() => setChatAberto(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-green-700 px-6 py-4 font-bold text-white shadow-2xl transition hover:bg-green-800"
      >
        AGROIA
      </button>

      {/* CHAT AGROIA */}
      {chatAberto && (
        <div className="fixed inset-0 z-[100] bg-slate-950/50 p-4 backdrop-blur-sm">
          <div className="absolute bottom-4 right-4 flex h-[min(720px,calc(100vh-2rem))] w-[min(460px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="bg-green-900 p-6 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                    AGROIA
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    Assistente AGROINOVA
                  </h2>

                  <p className="mt-1 text-sm text-white/70">
                    Alimentado por Grok
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setChatAberto(false)}
                  className="rounded-lg border border-white/20 px-3 py-2 text-sm font-bold hover:bg-white/10"
                >
                  Fechar
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-5">
              {mensagens.map((item, index) => (
                <div
                  key={`${item.role}-${index}`}
                  className={
                    item.role === "user"
                      ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-green-700 p-4 text-white"
                      : "mr-auto max-w-[90%] rounded-2xl rounded-bl-md border border-slate-200 bg-white p-4 text-slate-700"
                  }
                >
                  <p className="whitespace-pre-wrap text-sm leading-6">
                    {item.content}
                  </p>
                </div>
              ))}

              {aResponder && (
                <div className="mr-auto max-w-[90%] rounded-2xl rounded-bl-md border border-slate-200 bg-white p-4 text-sm text-slate-500">
                  O AGROIA está a preparar a resposta...
                </div>
              )}
            </div>

            <form
              onSubmit={enviarMensagem}
              className="border-t bg-white p-4"
            >
              <div className="flex gap-2">
                <textarea
                  value={mensagem}
                  onChange={(event) =>
                    setMensagem(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" &&
                      !event.shiftKey
                    ) {
                      event.preventDefault();
                      event.currentTarget.form?.requestSubmit();
                    }
                  }}
                  rows={2}
                  placeholder="Pergunte sobre agricultura, pecuária, pesca, floresta..."
                  className="min-w-0 flex-1 resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-green-600"
                />

                <button
                  type="submit"
                  disabled={
                    aResponder || !mensagem.trim()
                  }
                  className="rounded-xl bg-green-700 px-5 font-bold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Enviar
                </button>
              </div>

              <p className="mt-2 text-[11px] leading-5 text-slate-400">
                O AGROIA é um assistente de apoio ao conhecimento. Para
                decisões técnicas de alto risco, confirme a informação em
                fontes oficiais e com profissionais qualificados.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

