
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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
  nome: string;
  cargo: string;
  area: string;
  descricao: string;
  imagem?: string;
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
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85",
  campo:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85",
  cientista:
    "https://images.unsplash.com/photo-1581093458791-9d42e3c2c7a5?auto=format&fit=crop&w=1000&q=85",
  milho:
    "https://images.unsplash.com/photo-1601593768797-7b5b4f7e5c30?auto=format&fit=crop&w=900&q=85",
  irrigacao:
    "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=900&q=85",
  pecuaria:
    "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=900&q=85",
  floresta:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",
  laboratorio:
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85",
  cafe:
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85",
};

const especialistas: Especialista[] = [
  {
    nome: "Mestre Agrónomo Lucino Simões Lemos",
    cargo: "Mestre Agrónomo",
    area: "Agronomia e produção agrícola",
    descricao:
      "Perfil profissional dedicado à agronomia, aos sistemas de produção vegetal e à divulgação do conhecimento técnico aplicado à realidade agrícola angolana.",
  },
  {
    nome: "Bonifácio Vissetaca",
    cargo: "PhD · Investigador",
    area: "Investigação científica",
    descricao:
      "Perfil de investigação científica. A biografia académica, a instituição de vínculo, as linhas de investigação e as publicações deverão ser associadas mediante confirmação documental.",
  },
  {
    nome: "Messias Mengawako",
    cargo: "Engenheiro",
    area: "Engenharia e desenvolvimento",
    descricao:
      "Perfil profissional de engenharia orientado para a aplicação de conhecimentos técnicos, a inovação e o desenvolvimento de soluções para os desafios do sector agropecuário.",
  },
  {
    nome: "Ivo Casimiro",
    cargo: "Médico Veterinário",
    area: "Saúde e produção animal",
    descricao:
      "Perfil profissional na área veterinária, com enquadramento para conteúdos sobre saúde animal, prevenção sanitária, bem-estar e sistemas de produção pecuária.",
  },
];

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
  const [indiceEspecialista, setIndiceEspecialista] = useState(0);
  const [indiceDestaque, setIndiceDestaque] = useState(0);
  const [modal, setModal] = useState<Modal>(null);

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
    setIndiceEspecialista(
      (indiceEspecialista + direcao + especialistas.length) %
        especialistas.length,
    );
  }

  function mudarDestaque(direcao: number) {
    setIndiceDestaque(
      (indiceDestaque + direcao + destaques.length) % destaques.length,
    );
  }

  function abrirAcesso(id: string) {
    if (id === "instituicao") {
      setModal({
        tipo: "instituicao",
        titulo: "Instituições de ensino e investigação",
        texto:
          "A AGROINOVA pretende reunir instituições de investigação, universidades e escolas agrárias de Angola. O catálogo deve distinguir instituições identificadas, competências confirmadas, cursos, projectos e contactos oficiais. A inclusão neste catálogo não significa, por si só, que exista um projecto conjunto com a AGROINOVA.",
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
          style={{ backgroundImage: `url("${fotografias.universidade}")` }}
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
              Aproximamos investigadores, instituições, escolas agrárias,
              estudantes e profissionais para organizar conhecimento,
              promover a investigação e apoiar a transformação sustentável
              da agricultura e da pecuária angolanas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#areas"
                className="rounded-xl bg-emerald-500 px-6 py-4 font-black text-green-950 shadow-lg transition hover:bg-emerald-400"
              >
                Explorar investigação <span aria-hidden="true">→</span>
              </a>

              <button
                type="button"
                onClick={() => setModal({ tipo: "instituicao", titulo: "Rede científica angolana", texto: "A rede pretende facilitar a identificação de universidades, instituições de investigação, escolas agrárias, especialistas e oportunidades de colaboração. A participação e as ligações institucionais devem ser confirmadas antes de serem anunciadas como parcerias." })}
                className="rounded-xl border border-white/60 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Conhecer a rede
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 border-t border-white/20 pt-6 text-sm text-green-50">
              <span><strong className="text-xl text-white">{areas.length}</strong> áreas científicas</span>
              <span><strong className="text-xl text-white">21</strong> províncias no enquadramento territorial</span>
              <span><strong className="text-xl text-white">{especialistas.length}</strong> perfis em destaque</span>
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
                <h2 className="text-base font-black text-green-950">{item.titulo}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.texto}</p>
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
                Um espaço para apresentar os profissionais, as suas
                competências, os trabalhos científicos e os contributos
                para o desenvolvimento agropecuário.
              </p>

              <button
                type="button"
                onClick={() =>
                  setModal({
                    tipo: "instituicao",
                    titulo: "Rede de especialistas",
                    texto:
                      "A rede de especialistas deverá reunir perfis profissionais confirmados, formação académica, áreas de actuação, instituição de vínculo, publicações e formas de contacto autorizadas. Os perfis aqui apresentados são pontos de partida e podem ser enriquecidos com biografias aprovadas pelos próprios profissionais.",
                  })
                }
                className="mt-6 rounded-xl bg-emerald-500 px-5 py-3 font-bold text-green-950 hover:bg-emerald-400"
              >
                Ver rede de especialistas
              </button>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {especialistas.map((pessoa, index) => (
                  <button
                    type="button"
                    key={pessoa.nome}
                    onClick={() => setModal({ tipo: "especialista", especialista: pessoa })}
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
                          backgroundImage: `url("${index === 2 ? fotografias.campo : index === 3 ? fotografias.laboratorio : fotografias.universidade}")`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 to-transparent" />
                      <span className="absolute bottom-3 left-3 rounded-full bg-green-800 px-3 py-1 text-xs font-bold text-white">
                        {pessoa.cargo}
                      </span>
                    </div>

                    <div className="p-4">
                      <h3 className="text-sm font-black leading-5">{pessoa.nome}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-600">{pessoa.area}</p>
                      <p className="mt-4 text-xs font-black text-green-800">
                        Consultar perfil →
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => mudarEspecialista(-1)}
                  className="rounded-full border border-white/40 px-5 py-2 font-bold hover:bg-white/10"
                >
                  Anterior
                </button>
                <div className="flex gap-2">
                  {especialistas.map((pessoa, index) => (
                    <button
                      key={pessoa.nome}
                      type="button"
                      aria-label={`Ver ${pessoa.nome}`}
                      onClick={() => setIndiceEspecialista(index)}
                      className={`h-2.5 rounded-full transition ${
                        indiceEspecialista === index ? "w-8 bg-emerald-400" : "w-2.5 bg-white/50"
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
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS EM DESTAQUE */}
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
                Explore as áreas científicas, os seus temas de estudo e
                as aplicações potenciais para os sistemas de produção em Angola.
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
            <label htmlFor="pesquisa" className="mb-2 block text-sm font-bold text-green-950">
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
            {areasFiltradas.map((area, index) => {
              const imagem = [
                fotografias.milho,
                fotografias.irrigacao,
                fotografias.pecuaria,
                fotografias.floresta,
                fotografias.laboratorio,
                fotografias.cafe,
              ][index % 6];

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
                      {area.resumo || area.descricao || area.introducao || "Conhecimento técnico e científico aplicado ao sector agropecuário."}
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
              Não foram encontradas áreas para essa pesquisa. Tenta outro termo.
            </p>
          )}
        </div>
      </section>

      {/* UNIVERSIDADES E ENSINO AGRÁRIO */}
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
              A ligação entre ensino superior, formação técnica e investigação
              aplicada é essencial para desenvolver competências, testar
              soluções e aproximar a ciência das necessidades dos produtores.
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
                  <h3 className="mt-2 text-lg font-black">{escola.nome}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{escola.texto}</p>
                  <button
                    type="button"
                    onClick={() => setModal({ tipo: "instituicao", titulo: escola.nome, texto: escola.texto })}
                    className="mt-5 font-bold text-green-800 underline underline-offset-4"
                  >
                    Consultar informação
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            As fotografias desta versão são imagens ilustrativas e não
            constituem identificação visual confirmada dos edifícios destas
            instituições. Os dados institucionais devem ser validados junto
            das fontes oficiais antes da publicação definitiva.
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
                A agenda da investigação deve responder a necessidades reais
                dos agricultores, criadores, técnicos e comunidades, tendo
                em conta os diferentes solos, climas, culturas e sistemas
                de produção do país.
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
                  <h3 className="mt-3 text-lg font-black">{item.titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-green-50/80">{item.texto}</p>
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
            if (event.target === event.currentTarget) setModal(null);
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
                  <p className="mt-1 text-sm text-green-100">{modal.especialista.cargo}</p>
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
                  <h3 className="mt-6 font-black text-green-950">Perfil profissional</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Para completar este perfil, podem ser adicionados a biografia
                    validada, a formação académica, a instituição de vínculo,
                    as linhas de investigação, as publicações, os projectos e
                    os contactos autorizados pelo próprio profissional.
                  </p>
                  <p className="mt-4 text-xs leading-5 text-slate-500">
                    A apresentação deste perfil não implica confirmação de
                    vínculo institucional, publicação científica ou parceria.
                  </p>
                </div>
              )}

              {modal.tipo === "area" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-black text-green-950">Enquadramento científico</h3>
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">
                      {modal.area.introducao || modal.area.resumo || modal.area.descricao || "Consulte o artigo completo para informação científica detalhada."}
                    </p>
                  </div>

                  {[
                    ["Importância científica", modal.area.importancia],
                    ["Contexto angolano", modal.area.angola],
                    ["Linhas de investigação", modal.area.linhasPesquisa],
                    ["Aplicações práticas", modal.area.aplicacoes],
                    ["Questões científicas", modal.area.perguntas],
                  ].map(([titulo, itens]) => {
                    const valores = Array.isArray(itens) ? itens as string[] : [];
                    if (!valores.length) return null;

                    return (
                      <div key={titulo as string}>
                        <h3 className="font-black text-green-950">{titulo as string}</h3>
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
                      <h3 className="font-black text-green-950">Referências e fontes</h3>
                      <div className="mt-3 space-y-3">
                        {modal.area.referencias.map((ref, index) => (
                          <article key={`${index}-${ref.titulo}`} className="rounded-xl border border-slate-200 p-4">
                            <p className="font-bold">{ref.titulo}</p>
                            <p className="mt-1 text-sm text-slate-600">
                              {ref.instituicao}{ref.ano ? ` · ${ref.ano}` : ""}
                            </p>
                            {ref.url && (
                              <a href={ref.url} target="_blank" rel="noreferrer" className="mt-2 inline-block break-all text-sm font-bold text-green-800 underline">
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
                  <p className="text-sm leading-7 text-slate-700">{modal.texto}</p>
                  <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                    <h3 className="font-black text-green-950">Informação a catalogar</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                      <li>Nome oficial e natureza institucional.</li>
                      <li>Localização e contactos institucionais.</li>
                      <li>Cursos, áreas de competência e unidades de investigação.</li>
                      <li>Projectos, publicações e investigadores associados.</li>
                      <li>Fontes oficiais para validar a informação.</li>
                    </ul>
                  </div>
                </div>
              )}

              {modal.tipo === "projectos" && (
                <div className="space-y-5">
                  <p className="text-sm leading-7 text-slate-700">
                    O catálogo de projectos deve documentar investigação realizada,
                    ensaios em curso e propostas futuras em categorias separadas.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ["Identificação", "Título, instituição, equipa e financiamento, quando confirmado."],
                      ["Território", "Província, município, local de estudo e condições ambientais."],
                      ["Metodologia", "Objectivos, desenho experimental, amostragem e período."],
                      ["Resultados", "Dados, conclusões, limitações e publicação de referência."],
                    ].map(([titulo, texto]) => (
                      <article key={titulo} className="rounded-xl border border-slate-200 p-4">
                        <h3 className="font-black text-green-900">{titulo}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{texto}</p>
                      </article>
                    ))}
                  </div>
                  <p className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                    Não são apresentados projectos concretos sem documentação verificável.
                  </p>
                </div>
              )}

              {modal.tipo === "biblioteca" && (
                <div className="space-y-5">
                  <p className="text-sm leading-7 text-slate-700">
                    A biblioteca científica deve reunir artigos, teses, dissertações,
                    relatórios técnicos, manuais e documentos estatísticos de interesse
                    para o desenvolvimento agropecuário angolano.
                  </p>
                  <div className="rounded-xl border border-slate-200 p-5">
                    <h3 className="font-black text-green-950">Pesquisa documental</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Os registos devem incluir título, autoria, ano, instituição,
                      tipo de documento, resumo, tema e ligação à fonte original.
                    </p>
                  </div>
                  <Link href="/biblioteca" className="inline-block rounded-xl bg-green-800 px-5 py-3 font-bold text-white hover:bg-green-950">
                    Abrir biblioteca →
                  </Link>
                </div>
              )}

              {modal.tipo === "tecnologias" && (
                <div className="space-y-5">
                  <p className="text-sm leading-7 text-slate-700">
                    O catálogo tecnológico pode abranger variedades, técnicas de
                    produção, conservação do solo, irrigação, mecanização, sanidade
                    animal e ferramentas digitais.
                  </p>
                  <div className="rounded-xl bg-green-50 p-5">
                    <h3 className="font-black text-green-950">Ficha técnica</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                      <li>Descrição, finalidade e sector de aplicação.</li>
                      <li>Condições de utilização e limitações.</li>
                      <li>Resultados experimentais e evidência disponível.</li>
                      <li>Fonte técnica, instituição e data de publicação.</li>
                    </ul>
                  </div>
                </div>
              )}

              {modal.tipo === "agenda" && (
                <div className="space-y-4">
                  <p className="text-sm leading-7 text-slate-700">
                    Estas são propostas de temas para investigação futura. A sua
                    prioridade deve ser validada com instituições científicas,
                    produtores e dados territoriais.
                  </p>
                  {prioridades.map((item, index) => (
                    <article key={item.titulo} className="rounded-xl border border-slate-200 p-4">
                      <p className="text-xs font-black uppercase tracking-wider text-green-700">
                        Tema {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-black text-green-950">{item.titulo}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.texto}</p>
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