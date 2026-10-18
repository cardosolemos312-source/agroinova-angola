"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { areasInvestigacao } from "@/data/investigacao/areas";

type AreaUI = {
  slug: string;
  titulo: string;
  resumo?: string;
  descricao?: string;
  introducao?: string;
  importancia?: string[];
  angola?: string[];
  linhasPesquisa?: string[];
  aplicacoes?: string[];
  perguntas?: string[];
  referencias?: {
    titulo: string;
    instituicao: string;
    ano?: string | number;
    url: string;
  }[];
};

type Especialista = {
  id: string;
  nome: string;
  cargo: string;
  area: string;
  descricao: string;
  imagem?: string;
  livroTitulo?: string;
  livroDescricao?: string;
  livroCapaUrl?: string;
  livroPdfUrl?: string;
};

type TecnicoAPI = {
  id?: string | number;
  nome?: string | null;
  titulo_profissional?: string | null;
  cargo?: string | null;
  formacao_academica?: string | null;
  especialidade?: string | null;
  area?: string | null;
  biografia?: string | null;
  descricao?: string | null;
  fotografia_url?: string | null;
  imagem_url?: string | null;
  foto_url?: string | null;
  estado?: string | null;
  destaque?: boolean | null;
  livro_titulo?: string | null;
  livro_descricao?: string | null;
  livro_capa_url?: string | null;
  livro_pdf_url?: string | null;
};

type Modal =
  | { tipo: "especialista"; especialista: Especialista }
  | { tipo: "area"; area: AreaUI }
  | { tipo: "instituicao"; titulo: string; texto: string }
  | { tipo: "projectos" | "biblioteca" | "tecnologias" | "agenda" }
  | null;

const areas = areasInvestigacao as unknown as AreaUI[];

const fotografias = {
  universidade:
    "https://www.giranoticias.com/_midias/jpg/2024/08/15/800x600/1_universidade_em_luanda-368209.jpg",
  campo:
    "https://static.africa-press.net/angola/sites/65/2022/02/img-6202973a962bc.jpg",
  cientista:
    "https://c2a.portais.gov.ao/uploads/INSTA_65fd3f0e3a.jpg",
  milho:
    "https://static.africa-press.net/angola/sites/65/2022/02/img-6202973a962bc.jpg",
  irrigacao:
    "https://cdn.prod.website-files.com/5b03c2c5f551b29f01058a3a/67e52f1818dfe2f0cbabc9e0_Agricultura3.jpg",
  pecuaria:
    "https://siteganda.azurewebsites.net/images/Ganda/IMG_9753.jpg",
  suinicultura:
    "https://quintadopinhao.com/fotos/leitoes-creche.jpg",
  avicultura:
    "https://static.africa-press.net/angola/sites/65/2024/11/sm_1731046998.147498.jpg",
  floresta:
    "https://medicareclub.ao/image/cache/catalog/guia/cabinda/floresta%20maiombe/mayombe-960x640.jpg",
  laboratorio:
    "https://c2a.portais.gov.ao/uploads/INSTA_65fd3f0e3a.jpg",
  cafe:
    "https://www.opais.ao/wp-content/uploads/2023/10/DM_CAFE-7-scaled-1.webp",
  solos:
    "https://cdn.prod.website-files.com/5b03c2c5f551b29f01058a3a/67e52f1818dfe2f0cbabc9e0_Agricultura3.jpg",
};

const acessos = [
  {
    titulo: "Instituições científicas",
    texto:
      "Universidades, organismos de investigação e unidades de formação técnica.",
    imagem: fotografias.universidade,
    modal: "instituicao" as const,
  },
  {
    titulo: "Projectos e ensaios",
    texto:
      "Estudos, experiências de campo, metodologias e resultados documentados.",
    imagem: fotografias.campo,
    modal: "projectos" as const,
  },
  {
    titulo: "Biblioteca científica",
    texto:
      "Artigos, teses, dissertações, relatórios e manuais técnicos.",
    imagem: fotografias.laboratorio,
    modal: "biblioteca" as const,
  },
  {
    titulo: "Tecnologias agropecuárias",
    texto:
      "Métodos de produção, variedades, equipamentos e soluções técnicas.",
    imagem: fotografias.milho,
    modal: "tecnologias" as const,
  },
  {
    titulo: "Agenda de investigação",
    texto:
      "Desafios científicos e propostas de investigação para Angola.",
    imagem: fotografias.irrigacao,
    modal: "agenda" as const,
  },
];

const destaques = [
  {
    titulo: "Produção vegetal",
    descricao:
      "Sementes, culturas alimentares, fertilidade e produtividade agrícola.",
    imagem: fotografias.milho,
    pesquisa: "Produção vegetal",
  },
  {
    titulo: "Água e irrigação",
    descricao:
      "Gestão da água, sistemas de rega e resiliência dos sistemas agrícolas.",
    imagem: fotografias.irrigacao,
    pesquisa: "Água e irrigação",
  },
  {
    titulo: "Produção animal",
    descricao:
      "Nutrição, reprodução, saúde animal e melhoria dos sistemas pecuários.",
    imagem: fotografias.pecuaria,
    pesquisa: "Produção animal",
  },
  {
    titulo: "Solos e recursos naturais",
    descricao:
      "Conservação, fertilidade dos solos, biodiversidade e gestão sustentável.",
    imagem: fotografias.floresta,
    pesquisa: "Solos",
  },
  {
    titulo: "Ciência e laboratório",
    descricao:
      "Métodos científicos, análises laboratoriais e validação de resultados.",
    imagem: fotografias.laboratorio,
    pesquisa: "Sanidade",
  },
  {
    titulo: "Cadeias de valor",
    descricao:
      "Produção, transformação, qualidade e valorização dos produtos agrícolas.",
    imagem: fotografias.cafe,
    pesquisa: "Café",
  },
];

const escolas = [
  {
    nome: "Instituto de Investigação Agronómica",
    sigla: "IIA",
    local: "Angola",
    texto:
      "Instituição de referência a considerar no levantamento nacional da investigação agronómica. A unidade, os contactos e os projectos específicos devem ser confirmados em fontes oficiais.",
    imagem: fotografias.campo,
  },
  {
    nome: "Universidade Agostinho Neto",
    sigla: "UAN",
    local: "Luanda",
    texto:
      "Instituição universitária angolana a considerar no mapeamento de competências académicas, cursos, investigadores e projectos relevantes para o sector.",
    imagem: fotografias.universidade,
  },
  {
    nome: "Instituto Médio Agrário de Malanje",
    sigla: "IMA",
    local: "Malanje",
    texto:
      "Referência para o levantamento do ensino técnico agrário, da formação prática e das ligações entre escolas, produtores e investigação.",
    imagem: fotografias.milho,
  },
  {
    nome: "Instituto Médio Agrário de Missombo",
    sigla: "IAM",
    local: "Cuando",
    texto:
      "Unidade a considerar no catálogo do ensino agrário. A designação oficial, a localização administrativa actual e as áreas de formação devem ser validadas antes da publicação definitiva.",
    imagem: fotografias.pecuaria,
  },
];

const prioridades = [
  {
    titulo: "Segurança alimentar",
    texto:
      "Investigação sobre produtividade, sementes adaptadas, conservação de alimentos e redução das perdas pós-colheita.",
  },
  {
    titulo: "Resiliência climática",
    texto:
      "Estudos sobre seca, precipitação, disponibilidade de água e práticas agrícolas adaptadas às condições locais.",
  },
  {
    titulo: "Solos e fertilidade",
    texto:
      "Caracterização dos solos, gestão de nutrientes, matéria orgânica, erosão e conservação dos recursos.",
  },
  {
    titulo: "Saúde e produção animal",
    texto:
      "Melhoria dos sistemas pecuários, alimentação, sanidade, reprodução e prevenção de doenças.",
  },
  {
    titulo: "Florestas e biodiversidade",
    texto:
      "Gestão sustentável das florestas, sistemas agroflorestais e conservação dos ecossistemas.",
  },
  {
    titulo: "Digitalização agrícola",
    texto:
      "Sistemas de informação geográfica, monitorização agrícola e ferramentas de apoio à decisão.",
  },
];

function lista(valor?: string[]) {
  return Array.isArray(valor) ? valor.filter(Boolean) : [];
}

export default function InvestigacaoPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [especialistas, setEspecialistas] = useState<Especialista[]>([]);
  const [aCarregarEspecialistas, setACarregarEspecialistas] =
    useState(true);
  const [indiceEspecialista, setIndiceEspecialista] = useState(0);
  const [indiceDestaque, setIndiceDestaque] = useState(0);
  const [modal, setModal] = useState<Modal>(null);

  useEffect(() => {
    let activo = true;

    async function carregarEspecialistas() {
      setACarregarEspecialistas(true);

      try {
        const resposta = await fetch("/api/tecnicos", {
          method: "GET",
          cache: "no-store",
        });

        if (!resposta.ok) {
          throw new Error(
            `Erro ao consultar investigadores: ${resposta.status}`,
          );
        }

        const resultado: unknown = await resposta.json();

        let registos: TecnicoAPI[] = [];

        if (Array.isArray(resultado)) {
          registos = resultado as TecnicoAPI[];
        } else if (resultado && typeof resultado === "object") {
          const dados = resultado as {
            tecnicos?: TecnicoAPI[];
            data?: TecnicoAPI[];
          };

          registos = Array.isArray(dados.tecnicos)
            ? dados.tecnicos
            : Array.isArray(dados.data)
              ? dados.data
              : [];
        }

        if (!activo) return;

        const convertidos = registos
          .filter((tecnico) => {
            if (
              tecnico.estado &&
              tecnico.estado !== "publicado"
            ) {
              return false;
            }

            return Boolean(tecnico.nome);
          })
          .map((tecnico, index): Especialista => ({
            id: String(tecnico.id ?? `${tecnico.nome}-${index}`),
            nome: tecnico.nome || "Especialista",
            cargo:
              tecnico.titulo_profissional ||
              tecnico.cargo ||
              tecnico.formacao_academica ||
              "Especialista",
            area:
              tecnico.especialidade ||
              tecnico.area ||
              "Investigação agropecuária",
            descricao:
              tecnico.biografia ||
              tecnico.descricao ||
              "Perfil profissional na área agropecuária.",
            imagem:
              tecnico.fotografia_url ||
              tecnico.imagem_url ||
              tecnico.foto_url ||
              fotografias.cientista,

            // PUBLICAÇÃO DO TÉCNICO
            livroTitulo: tecnico.livro_titulo || undefined,
            livroDescricao: tecnico.livro_descricao || undefined,
            livroCapaUrl: tecnico.livro_capa_url || undefined,
            livroPdfUrl: tecnico.livro_pdf_url || undefined,
          }));

        setEspecialistas(convertidos);
        setIndiceEspecialista(0);
      } catch (erro) {
        console.error("Erro ao carregar especialistas:", erro);

        if (activo) {
          setEspecialistas([]);
        }
      } finally {
        if (activo) {
          setACarregarEspecialistas(false);
        }
      }
    }

    void carregarEspecialistas();

    return () => {
      activo = false;
    };
  }, []);

  const areasFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt");

    if (!termo) return areas;

    return areas.filter((area) =>
      [
        area.titulo,
        area.resumo,
        area.descricao,
        area.introducao,
        ...lista(area.importancia),
        ...lista(area.angola),
        ...lista(area.linhasPesquisa),
        ...lista(area.aplicacoes),
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("pt")
        .includes(termo),
    );
  }, [pesquisa]);

  function mudarEspecialista(direcao: number) {
    if (especialistas.length === 0) return;

    setIndiceEspecialista(
      (indiceEspecialista + direcao + especialistas.length) %
        especialistas.length,
    );
  }

  function mudarDestaque(direcao: number) {
    setIndiceDestaque(
      (indiceDestaque + direcao + destaques.length) %
        destaques.length,
    );
  }

  function abrirAcesso(id: string) {
    if (id === "instituicao") {
      setModal({
        tipo: "instituicao",
        titulo: "Instituições de ensino e investigação",
        texto:
          "A AGROINOVA pretende reunir instituições de investigação, universidades e escolas agrárias de Angola. O catálogo deverá distinguir instituições identificadas, competências confirmadas, cursos, projectos e contactos oficiais. A inclusão neste catálogo não significa, por si só, que exista um projecto conjunto com a AGROINOVA.",
      });

      return;
    }

    if (
      id === "projectos" ||
      id === "biblioteca" ||
      id === "tecnologias" ||
      id === "agenda"
    ) {
      setModal({ tipo: id });
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f8f5] text-[#173326]">
      {/* CARROSSEL PRINCIPAL */}
      <section className="relative isolate min-h-[570px] overflow-hidden bg-green-950 text-white lg:min-h-[610px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: `url("${destaques[indiceDestaque].imagem}")`,
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-950 via-green-950/90 to-green-950/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-green-950/50 to-transparent" />

        <div className="mx-auto flex min-h-[570px] max-w-[1440px] items-center px-5 py-16 lg:min-h-[610px] lg:px-10">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-green-300/30 bg-green-900/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-green-200">
              Plataforma nacional de investigação agropecuária
            </p>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Ciência, inovação e desenvolvimento para Angola
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50/90 md:text-lg">
              Aproximamos investigadores, instituições, escolas
              agrárias, estudantes e profissionais para organizar
              conhecimento, promover a investigação e apoiar a
              transformação sustentável da agricultura e da
              pecuária angolanas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#areas"
                className="rounded-xl bg-emerald-500 px-6 py-4 font-black text-green-950 shadow-lg transition hover:bg-emerald-400"
              >
                Explorar investigação{" "}
                <span aria-hidden="true">→</span>
              </a>

              <button
                type="button"
                onClick={() =>
                  setModal({
                    tipo: "instituicao",
                    titulo: "Rede científica angolana",
                    texto:
                      "A rede pretende facilitar a identificação de universidades, instituições de investigação, escolas agrárias, especialistas e oportunidades de colaboração. A participação e as ligações institucionais devem ser confirmadas antes de serem anunciadas como parcerias.",
                  })
                }
                className="rounded-xl border border-white/60 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Conhecer a rede
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 border-t border-white/20 pt-6 text-sm text-green-50">
              <span>
                <strong className="text-xl text-white">
                  {areas.length}
                </strong>{" "}
                áreas científicas
              </span>

              <span>
                <strong className="text-xl text-white">21</strong>{" "}
                províncias no enquadramento territorial
              </span>

              <span>
                <strong className="text-xl text-white">
                  {especialistas.length}
                </strong>{" "}
                especialistas publicados
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-5 flex items-center gap-3 lg:right-10">
          <button
            type="button"
            aria-label="Imagem anterior"
            onClick={() => mudarDestaque(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/20 text-xl hover:bg-white/20"
          >
            ‹
          </button>

          <span className="text-sm font-bold text-white">
            {indiceDestaque + 1} / {destaques.length}
          </span>

          <button
            type="button"
            aria-label="Imagem seguinte"
            onClick={() => mudarDestaque(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/20 text-xl hover:bg-white/20"
          >
            ›
          </button>
        </div>
      </section>

      {/* ACESSOS EM CARDS */}
      <section className="relative z-10 mx-auto -mt-7 max-w-[1440px] px-5 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {acessos.map((item) => (
            <button
              type="button"
              key={item.titulo}
              onClick={() => abrirAcesso(item.modal)}
              className="group overflow-hidden rounded-2xl border border-green-100 bg-white text-left shadow-lg transition hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <div
                className="h-32 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url("${item.imagem}")` }}
              />

              <div className="p-5">
                <h2 className="text-base font-black text-green-950">
                  {item.titulo}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.texto}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-green-800">
                  Aceder <span aria-hidden="true">→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ESPECIALISTAS */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-green-950 p-6 text-white md:p-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url("${fotografias.floresta}")` }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/95 to-green-900/70" />

          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-300">
                Pessoas e conhecimento
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Especialistas em destaque
              </h2>

              <p className="mt-4 leading-7 text-green-50/85">
                Conheça os técnicos e investigadores publicados
                pela administração da AGROINOVA ANGOLA, as suas
                competências e áreas de especialização.
              </p>

              <button
                type="button"
                onClick={() =>
                  setModal({
                    tipo: "instituicao",
                    titulo: "Rede de especialistas",
                    texto:
                      "Esta secção apresenta os perfis disponibilizados pela administração. A formação, a instituição de vínculo, as publicações e os contactos devem corresponder aos dados confirmados e autorizados pelos próprios profissionais.",
                  })
                }
                className="mt-6 rounded-xl bg-emerald-500 px-5 py-3 font-bold text-green-950 hover:bg-emerald-400"
              >
                Conhecer a rede
              </button>
            </div>

            <div>
              {aCarregarEspecialistas ? (
                <div className="rounded-2xl border border-white/15 bg-white/10 p-8 text-center">
                  <p className="font-bold">A carregar especialistas...</p>
                </div>
              ) : especialistas.length > 0 ? (
                <>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {especialistas.map((pessoa, index) => (
                      <button
                        type="button"
                        key={pessoa.id}
                        onClick={() => {
                          setIndiceEspecialista(index);
                          setModal({
                            tipo: "especialista",
                            especialista: pessoa,
                          });
                        }}
                        className={`overflow-hidden rounded-2xl border text-left transition hover:-translate-y-1 hover:shadow-2xl ${
                          index === indiceEspecialista
                            ? "border-emerald-300 bg-white text-green-950 ring-2 ring-emerald-300/40"
                            : "border-white/20 bg-white/95 text-green-950"
                        }`}
                      >
                        <div className="relative h-36 overflow-hidden bg-green-900">
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                              backgroundImage: `url("${pessoa.imagem || fotografias.cientista}")`,
                            }}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 to-transparent" />

                          <span className="absolute bottom-3 left-3 max-w-[90%] truncate rounded-full bg-green-800 px-3 py-1 text-xs font-bold text-white">
                            {pessoa.cargo}
                          </span>
                        </div>

                        <div className="p-4">
                          <h3 className="text-sm font-black leading-5">
                            {pessoa.nome}
                          </h3>

                          <p className="mt-2 text-xs leading-5 text-slate-600">
                            {pessoa.area}
                          </p>

                          {pessoa.livroCapaUrl || pessoa.livroPdfUrl ? (
                            <p className="mt-3 rounded-lg bg-green-50 px-2 py-1.5 text-xs font-bold text-green-800">
                              Publicação disponível
                            </p>
                          ) : null}

                          <p className="mt-4 text-xs font-black text-green-800">
                            Consultar perfil →
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {especialistas.length > 1 && (
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => mudarEspecialista(-1)}
                        className="rounded-full border border-white/40 px-5 py-2 font-bold hover:bg-white/10"
                      >
                        Anterior
                      </button>

                      <div className="flex flex-wrap justify-center gap-2">
                        {especialistas.map((pessoa, index) => (
                          <button
                            key={pessoa.id}
                            type="button"
                            aria-label={`Ver ${pessoa.nome}`}
                            onClick={() => setIndiceEspecialista(index)}
                            className={`h-2.5 rounded-full transition ${
                              indiceEspecialista === index
                                ? "w-8 bg-emerald-400"
                                : "w-2.5 bg-white/50"
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => mudarEspecialista(1)}
                        className="rounded-full border border-white/40 px-5 py-2 font-bold hover:bg-white/10"
                      >
                        Seguinte
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="rounded-2xl border border-white/15 bg-white/10 p-8 text-center">
                  <h3 className="text-lg font-black">
                    Especialistas em breve
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-green-50/80">
                    Ainda não existem especialistas publicados
                    para esta secção. Os perfis aparecerão aqui
                    depois de serem publicados na administração.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE INVESTIGAÇÃO */}
      <section id="areas" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-green-700">
                Conhecimento científico
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Áreas de investigação em destaque
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Explore as áreas científicas, os seus temas de
                estudo e as aplicações potenciais para os sistemas
                de produção em Angola.
              </p>
            </div>

            <Link
              href="/investigacao/areas/producao-vegetal"
              className="rounded-xl border border-green-800 px-5 py-3 font-bold text-green-900 transition hover:bg-green-800 hover:text-white"
            >
              Explorar artigos <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f5f8f6] p-4 md:p-5">
            <label
              htmlFor="pesquisa"
              className="mb-2 block text-sm font-bold text-green-950"
            >
              Pesquisar áreas científicas
            </label>

            <input
              id="pesquisa"
              value={pesquisa}
              onChange={(event) => setPesquisa(event.target.value)}
              placeholder="Ex.: milho, solos, clima, água, pecuária..."
              type="search"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
            />
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {areasFiltradas.map((area) => {
              const textoArea =
                `${area.slug} ${area.titulo} ${area.resumo || ""} ${area.descricao || ""}`.toLocaleLowerCase("pt");

              const imagem =
                /cafe|café|cafeeir/.test(textoArea)
                  ? fotografias.cafe
                  : /solo|fertilidade|pedolog|eros[aã]o|terra/.test(textoArea)
                    ? fotografias.solos
                    : /su[ií]n|porco|porcina/.test(textoArea)
                      ? fotografias.suinicultura
                      : /avic|galinha|frango|ave/.test(textoArea)
                        ? fotografias.avicultura
                        : /bovin|gado|pecu[aá]ria|animal|veterin|caprin|ovin/.test(textoArea)
                          ? fotografias.pecuaria
                          : /florest|biodiversidade|maiombe|miombo/.test(textoArea)
                            ? fotografias.floresta
                            : /irrig|[aá]gua|rega/.test(textoArea)
                              ? fotografias.irrigacao
                              : /laborat[oó]rio|sanidade|fitossan|doen[cç]a|investiga[cç][aã]o/.test(textoArea)
                                ? fotografias.laboratorio
                                : /milho|cereal|gr[aã]o|produ[cç][aã]o vegetal|culturas/.test(textoArea)
                                  ? fotografias.milho
                                  : fotografias.campo;

              return (
                <article
                  key={area.slug}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
                >
                  <div
                    className="h-44 bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url("${imagem}")` }}
                  />

                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                      Área científica
                    </p>

                    <h3 className="mt-2 text-lg font-black text-green-950">
                      {area.titulo}
                    </h3>

                    <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600">
                      {area.resumo ||
                        area.descricao ||
                        area.introducao ||
                        "Conhecimento técnico e científico aplicado ao sector agropecuário."}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setModal({ tipo: "area", area })}
                        className="rounded-lg bg-green-800 px-4 py-2.5 text-sm font-bold text-white hover:bg-green-950"
                      >
                        Ver detalhes
                      </button>

                      <Link
                        href={`/investigacao/areas/${area.slug}`}
                        className="rounded-lg border border-green-800 px-4 py-2.5 text-sm font-bold text-green-900 hover:bg-green-50"
                      >
                        Artigo completo
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {areasFiltradas.length === 0 && (
            <p className="mt-6 rounded-xl bg-slate-50 p-6 text-slate-600">
              Não foram encontradas áreas para essa pesquisa.
              Tenta outro termo.
            </p>
          )}
        </div>
      </section>

      {/* INSTITUIÇÕES */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-green-700">
              Formação e investigação
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Universidades e escolas agrárias de Angola
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A ligação entre ensino superior, formação técnica e
              investigação aplicada é essencial para desenvolver
              competências, testar soluções e aproximar a ciência
              das necessidades dos produtores.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {escolas.map((escola) => (
              <article
                key={escola.nome}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url("${escola.imagem}")` }}
                />

                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                    {escola.local} · {escola.sigla}
                  </p>

                  <h3 className="mt-2 text-lg font-black">
                    {escola.nome}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {escola.texto}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setModal({
                        tipo: "instituicao",
                        titulo: escola.nome,
                        texto: escola.texto,
                      })
                    }
                    className="mt-5 font-bold text-green-800 underline underline-offset-4"
                  >
                    Consultar informação
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            As fotografias são ilustrativas e não constituem
            identificação visual confirmada dos edifícios destas
            instituições. Os dados institucionais serão ligados à
            administração numa próxima etapa.
          </p>
        </div>
      </section>

      {/* AGENDA CIENTÍFICA */}
      <section className="bg-green-950 py-20 text-white">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">
                Investigação orientada para resultados
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Que problemas científicos devemos resolver?
              </h2>

              <p className="mt-5 leading-8 text-green-50/85">
                A agenda da investigação deve responder a
                necessidades reais dos agricultores, criadores,
                técnicos e comunidades, tendo em conta os
                diferentes solos, climas, culturas e sistemas de
                produção do país.
              </p>

              <button
                type="button"
                onClick={() => setModal({ tipo: "agenda" })}
                className="mt-7 rounded-xl bg-emerald-500 px-5 py-3 font-black text-green-950 hover:bg-emerald-400"
              >
                Consultar prioridades
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {prioridades.map((item, index) => (
                <button
                  key={item.titulo}
                  type="button"
                  onClick={() => setModal({ tipo: "agenda" })}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 text-left transition hover:border-emerald-300/70 hover:bg-white/10"
                >
                  <span className="text-sm font-black text-emerald-300">
                    PRIORIDADE 0{index + 1}
                  </span>

                  <h3 className="mt-3 text-lg font-black">
                    {item.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-green-50/80">
                    {item.texto}
                  </p>

                  <span className="mt-4 inline-block text-sm font-bold text-emerald-300">
                    Explorar tema →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODAIS */}
      {modal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-3 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setModal(null);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 bg-green-950 px-5 py-5 text-white sm:px-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-green-300">
                  AGROINOVA ANGOLA
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  {modal.tipo === "especialista"
                    ? modal.especialista.nome
                    : modal.tipo === "area"
                      ? modal.area.titulo
                      : modal.tipo === "instituicao"
                        ? modal.titulo
                        : modal.tipo === "projectos"
                          ? "Projectos e ensaios"
                          : modal.tipo === "biblioteca"
                            ? "Biblioteca científica"
                            : modal.tipo === "tecnologias"
                              ? "Tecnologias agropecuárias"
                              : "Agenda de investigação"}
                </h2>

                {modal.tipo === "especialista" && (
                  <p className="mt-1 text-sm text-green-100">
                    {modal.especialista.cargo}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setModal(null)}
                aria-label="Fechar modal"
                className="rounded-lg border border-white/30 px-3 py-2 font-bold hover:bg-white/10"
              >
                Fechar
              </button>
            </div>

            <div className="overflow-y-auto p-5 sm:p-7">
              {modal.tipo === "especialista" && (
                <div>
                  {modal.especialista.imagem && (
                    <div
                      className="mb-5 h-56 rounded-xl bg-cover bg-center"
                      style={{
                        backgroundImage: `url("${modal.especialista.imagem}")`,
                      }}
                    />
                  )}

                  <div className="rounded-xl border border-green-100 bg-green-50 p-5">
                    <p className="text-sm font-bold uppercase tracking-wide text-green-800">
                      Área profissional
                    </p>

                    <p className="mt-2 text-lg font-black text-green-950">
                      {modal.especialista.area}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {modal.especialista.descricao}
                    </p>
                  </div>

                  <h3 className="mt-6 font-black text-green-950">
                    Perfil profissional
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Os dados deste perfil são apresentados a partir
                    do registo disponibilizado pela administração
                    da AGROINOVA ANGOLA.
                  </p>

                  {/* LIVRO, CAPA E PDF */}
                  {(modal.especialista.livroTitulo ||
                    modal.especialista.livroDescricao ||
                    modal.especialista.livroCapaUrl ||
                    modal.especialista.livroPdfUrl) && (
                    <section className="mt-7 overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-green-50 to-white p-5 sm:p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-800 text-white">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-6 w-6"
                            aria-hidden="true"
                          >
                            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z" />
                            <path d="M4 5.5V22" />
                            <path d="M8 7h8M8 11h8" />
                          </svg>
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                            Publicação científica
                          </p>

                          <h3 className="mt-1 break-words text-xl font-black text-green-950">
                            {modal.especialista.livroTitulo ||
                              "Livro ou documento técnico"}
                          </h3>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-5 sm:grid-cols-[180px_1fr]">
                        <div className="flex min-h-48 items-start justify-center">
                          {modal.especialista.livroCapaUrl ? (
                            <img
                              src={modal.especialista.livroCapaUrl}
                              alt={`Capa de ${modal.especialista.livroTitulo || "publicação científica"}`}
                              className="max-h-72 w-full max-w-[180px] rounded-xl border border-slate-200 bg-white object-contain shadow-md"
                              loading="lazy"
                            />
                          ) : (
                            <div className="flex min-h-48 w-full max-w-[180px] items-center justify-center rounded-xl border border-dashed border-green-300 bg-green-100 p-5 text-center text-sm font-bold text-green-800">
                              Capa não disponível
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col">
                          <h4 className="font-bold text-green-950">
                            Sobre a publicação
                          </h4>

                          <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-700">
                            {modal.especialista.livroDescricao ||
                              "Consulte o documento científico disponibilizado por este profissional."}
                          </p>

                          {modal.especialista.livroPdfUrl ? (
                            <div className="mt-5 flex flex-wrap gap-3">
                              <a
                                href={modal.especialista.livroPdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-xl bg-green-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-950"
                              >
                                Abrir PDF
                              </a>

                              <a
                                href={modal.especialista.livroPdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="inline-flex items-center justify-center rounded-xl border border-green-800 px-5 py-3 text-sm font-bold text-green-900 transition hover:bg-green-50"
                              >
                                Descarregar PDF
                              </a>
                            </div>
                          ) : (
                            <p className="mt-5 rounded-lg bg-amber-50 p-3 text-sm leading-6 text-amber-900">
                              O PDF ainda não foi disponibilizado
                              para consulta.
                            </p>
                          )}
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              )}

              {modal.tipo === "area" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-black text-green-950">
                      Enquadramento científico
                    </h3>

                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">
                      {modal.area.introducao ||
                        modal.area.resumo ||
                        modal.area.descricao ||
                        "Consulte o artigo completo para informação científica detalhada."}
                    </p>
                  </div>

                  {(
                    [
                      ["Importância científica", modal.area.importancia],
                      ["Contexto angolano", modal.area.angola],
                      ["Linhas de investigação", modal.area.linhasPesquisa],
                      ["Aplicações práticas", modal.area.aplicacoes],
                      ["Questões científicas", modal.area.perguntas],
                    ] as [string, string[] | undefined][]
                  ).map(([titulo, itens]) => {
                    const valores = lista(itens);

                    if (!valores.length) return null;

                    return (
                      <div key={titulo}>
                        <h3 className="font-black text-green-950">
                          {titulo}
                        </h3>

                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                          {valores.map((item, index) => (
                            <li key={`${index}-${item}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}

                  {!!modal.area.referencias?.length && (
                    <div>
                      <h3 className="font-black text-green-950">
                        Referências e fontes
                      </h3>

                      <div className="mt-3 space-y-3">
                        {modal.area.referencias.map((ref, index) => (
                          <article
                            key={`${index}-${ref.titulo}`}
                            className="rounded-xl border border-slate-200 p-4"
                          >
                            <p className="font-bold">{ref.titulo}</p>

                            <p className="mt-1 text-sm text-slate-600">
                              {ref.instituicao}
                              {ref.ano ? ` · ${ref.ano}` : ""}
                            </p>

                            {ref.url && (
                              <a
                                href={ref.url}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 inline-block break-all text-sm font-bold text-green-800 underline"
                              >
                                Consultar fonte original
                              </a>
                            )}
                          </article>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    href={`/investigacao/areas/${modal.area.slug}`}
                    className="inline-block rounded-xl bg-green-800 px-5 py-3 font-bold text-white hover:bg-green-950"
                  >
                    Abrir artigo completo →
                  </Link>
                </div>
              )}

              {modal.tipo === "instituicao" && (
                <div className="space-y-5">
                  <p className="text-sm leading-7 text-slate-700">
                    {modal.texto}
                  </p>

                  <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                    <h3 className="font-black text-green-950">
                      Informação a catalogar
                    </h3>

                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                      <li>Nome oficial e natureza institucional.</li>
                      <li>Localização e contactos institucionais.</li>
                      <li>
                        Cursos, áreas de competência e unidades de
                        investigação.
                      </li>
                      <li>
                        Projectos, publicações e investigadores
                        associados.
                      </li>
                      <li>Fontes oficiais para validar a informação.</li>
                    </ul>
                  </div>
                </div>
              )}

              {modal.tipo === "projectos" && (
                <div className="space-y-5">
                  <p className="text-sm leading-7 text-slate-700">
                    O catálogo de projectos deve documentar
                    investigação realizada, ensaios em curso e
                    propostas futuras em categorias separadas.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      [
                        "Identificação",
                        "Título, instituição, equipa e financiamento, quando confirmado.",
                      ],
                      [
                        "Território",
                        "Província, município, local de estudo e condições ambientais.",
                      ],
                      [
                        "Metodologia",
                        "Objectivos, desenho experimental, amostragem e período.",
                      ],
                      [
                        "Resultados",
                        "Dados, conclusões, limitações e publicação de referência.",
                      ],
                    ].map(([titulo, texto]) => (
                      <article
                        key={titulo}
                        className="rounded-xl border border-slate-200 p-4"
                      >
                        <h3 className="font-black text-green-900">
                          {titulo}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {texto}
                        </p>
                      </article>
                    ))}
                  </div>

                  <p className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                    Não são apresentados projectos concretos sem
                    documentação verificável.
                  </p>
                </div>
              )}

              {modal.tipo === "biblioteca" && (
                <div className="space-y-5">
                  <p className="text-sm leading-7 text-slate-700">
                    A biblioteca científica deve reunir artigos,
                    teses, dissertações, relatórios técnicos, manuais
                    e documentos estatísticos de interesse para o
                    desenvolvimento agropecuário angolano.
                  </p>

                  <div className="rounded-xl border border-slate-200 p-5">
                    <h3 className="font-black text-green-950">
                      Pesquisa documental
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Os registos devem incluir título, autoria,
                      ano, instituição, tipo de documento, resumo,
                      tema e ligação à fonte original.
                    </p>
                  </div>

                  <Link
                    href="/biblioteca"
                    className="inline-block rounded-xl bg-green-800 px-5 py-3 font-bold text-white hover:bg-green-950"
                  >
                    Abrir biblioteca →
                  </Link>
                </div>
              )}

              {modal.tipo === "tecnologias" && (
                <div className="space-y-5">
                  <p className="text-sm leading-7 text-slate-700">
                    O catálogo tecnológico pode abranger variedades,
                    técnicas de produção, conservação do solo,
                    irrigação, mecanização, sanidade animal e
                    ferramentas digitais.
                  </p>

                  <div className="rounded-xl bg-green-50 p-5">
                    <h3 className="font-black text-green-950">
                      Ficha técnica
                    </h3>

                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                      <li>
                        Descrição, finalidade e sector de aplicação.
                      </li>
                      <li>Condições de utilização e limitações.</li>
                      <li>
                        Resultados experimentais e evidência disponível.
                      </li>
                      <li>
                        Fonte técnica, instituição e data de publicação.
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {modal.tipo === "agenda" && (
                <div className="space-y-4">
                  <p className="text-sm leading-7 text-slate-700">
                    Estas são propostas de temas para investigação
                    futura. A sua prioridade deve ser validada com
                    instituições científicas, produtores e dados
                    territoriais.
                  </p>

                  {prioridades.map((item, index) => (
                    <article
                      key={item.titulo}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-wider text-green-700">
                        Tema {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-2 font-black text-green-950">
                        {item.titulo}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.texto}
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-right">
              <button
                type="button"
                onClick={() => setModal(null)}
                className="rounded-xl bg-green-800 px-5 py-3 font-bold text-white hover:bg-green-950"
              >
                Fechar
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}