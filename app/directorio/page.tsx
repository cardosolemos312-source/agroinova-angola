"use client";

import { useEffect, useMemo, useState } from "react";

type Curso = {
  nome: string;
  grau: string;
  duracao: string;
  descricao: string;
  plano: { ano: string; disciplinas: string[] }[];
  saidas: string[];
};

type Instituicao = {
  id: string;
  nome: string;
  sigla: string;
  tipo: string;
  provincia: string;
  local: string;
  descricao: string;
  portal: string;
  imagem?: string;
  imagemFonte?: string;
  legendaImagem?: string;
  areas: string[];
  cursos: Curso[];
  contactos: string[];
  observacao?: string;
};

const instituicoes: Instituicao[] = [
  {
    id: "ujes-agronomia",
    nome: "Faculdade de Ciências Agrárias — Universidade José Eduardo dos Santos",
    sigla: "FCA-UJES",
    tipo: "Ensino superior",
    provincia: "Huambo",
    local: "Chianga, Huambo",
    descricao:
      "Unidade universitária dedicada ao ensino, à investigação e à formação de quadros nas ciências agrárias e florestais. A sua actividade enquadra-se na produção de conhecimento aplicado aos sistemas agrícolas, aos recursos naturais e ao desenvolvimento rural.",
    portal: "https://www.ujes.ao/unidade-de-ensino/faculdade-de-ciencias-agrarias",
    imagem:
      "https://www.ujes.ao/assets/uploads/instituicao/instituicao_16092023060929.jpeg",
    imagemFonte:
      "https://www.ujes.ao/unidade-de-ensino/faculdade-de-ciencias-agrarias",
    legendaImagem: "Fotografia publicada no portal oficial da Faculdade de Ciências Agrárias.",
    areas: ["Agronomia", "Ciências agrárias", "Florestas", "Investigação aplicada"],
    cursos: [
      {
        nome: "Formação em Ciências Agrárias",
        grau: "Oferta a confirmar no catálogo vigente",
        duracao: "Consultar o plano curricular oficial",
        descricao:
          "A página institucional apresenta a Faculdade como unidade de ensino e investigação agrária. Confirme junto da Faculdade os cursos, graus e planos curriculares actualmente em vigor antes de publicar uma lista definitiva.",
        plano: [
          {
            ano: "Plano curricular oficial",
            disciplinas: [
              "Solicitar à Faculdade o plano curricular vigente",
              "Confirmar disciplinas, carga horária e regime de avaliação",
            ],
          },
        ],
        saidas: [
          "Produção e assistência técnica agrícola, conforme a formação concluída",
          "Investigação e extensão rural, conforme requisitos da entidade empregadora",
          "Gestão de recursos naturais, conforme especialização",
        ],
      },
    ],
    contactos: [
      "Localização publicada: Chianga, Huambo",
      "Correio electrónico: fcaujes@gmail.com",
      "Correio electrónico institucional: contacto@ujes.ao",
      "Telefone publicado: +244 949 321 444",
    ],
    observacao:
      "Os dados de cursos e planos curriculares devem ser confirmados no portal ou directamente junto da instituição antes de serem considerados uma oferta académica actual.",
  },
  {
    id: "ujes-veterinaria",
    nome: "Faculdade de Medicina Veterinária — Universidade José Eduardo dos Santos",
    sigla: "FMV-UJES",
    tipo: "Ensino superior",
    provincia: "Huambo",
    local: "Huambo",
    descricao:
      "Unidade de ensino superior associada à formação veterinária. A página serve como ponto de entrada para estudantes interessados em saúde animal, produção pecuária, prevenção de doenças e apoio técnico aos sistemas de produção.",
    portal: "https://www.ujes.ao/",
    imagem:
      "https://www.ujes.ao/assets/uploads/notice/noticia_25092025080918.jpeg",
    imagemFonte:
      "https://www.ujes.ao/ujes-na-expo-huambo-2025-ciencia-inovacao-e-servico-a-comunidadei",
    legendaImagem:
      "Imagem de uma actividade institucional da UJES na Expo Huambo 2025; não é apresentada como fotografia da fachada da Faculdade.",
    areas: ["Medicina veterinária", "Saúde animal", "Produção pecuária", "Investigação"],
    cursos: [
      {
        nome: "Medicina Veterinária",
        grau: "Licenciatura — confirmar oferta e designação vigentes",
        duracao: "Consultar o plano curricular oficial",
        descricao:
          "Formação orientada para a saúde e o bem-estar animal, prevenção e diagnóstico de doenças, saúde pública veterinária e apoio à produção pecuária.",
        plano: [
          {
            ano: "Plano curricular oficial",
            disciplinas: [
              "Solicitar à Faculdade o plano curricular vigente",
              "Confirmar disciplinas, carga horária, estágios e requisitos de conclusão",
            ],
          },
        ],
        saidas: [
          "Clínica e assistência veterinária, nos termos legais aplicáveis",
          "Serviços veterinários e saúde pública",
          "Produção animal, investigação e extensão",
        ],
      },
    ],
    contactos: [
      "Portal geral da Universidade: https://www.ujes.ao/",
      "Consultar o portal oficial para contactos actualizados da Faculdade.",
    ],
    observacao:
      "A fotografia é de uma actividade institucional da UJES. Os cursos, planos e contactos específicos devem ser confirmados junto da Faculdade.",
  },
  {
    id: "umn-ondjiva",
    nome: "Instituto Politécnico de Ondjiva — Universidade Mandume ya Ndemufayo",
    sigla: "IPO-UMN",
    tipo: "Ensino superior",
    provincia: "Cunene",
    local: "Ondjiva, Cunene",
    descricao:
      "Unidade de ensino superior da Universidade Mandume ya Ndemufayo. O portal institucional disponibiliza informação académica, incluindo referência à formação em Engenharia Agronómica. Consulte sempre a publicação oficial mais recente para confirmar vagas e plano curricular.",
    portal: "https://www.umn.edu.ao/",
    imagem:
      "https://www.umn.edu.ao/umn/cache/f/3fc73aa20ecf71d99204fe43543e5cc0.jpg",
    imagemFonte:
      "https://www.umn.edu.ao/umn/index.php/uteis/noticias-e-eventos/1095-baptismo-de-caloiros-marca-encerramento-da-semana-do-verdinho",
    legendaImagem:
      "Fotografia de actividade académica publicada no portal da UMN; não é identificada como fachada do Instituto.",
    areas: ["Engenharia agronómica", "Produção vegetal", "Solos", "Desenvolvimento rural"],
    cursos: [
      {
        nome: "Engenharia Agronómica",
        grau: "Ensino superior — designação indicada no portal institucional",
        duracao: "Consultar o plano curricular oficial",
        descricao:
          "Formação ligada aos sistemas de produção vegetal, solos, água, tecnologias agrícolas e gestão da produção. A organização exacta das unidades curriculares deve ser consultada no plano oficial.",
        plano: [
          {
            ano: "Plano curricular oficial",
            disciplinas: [
              "Consultar o plano curricular publicado pela UMN",
              "Confirmar unidades curriculares por ano, carga horária e estágio",
            ],
          },
        ],
        saidas: [
          "Produção vegetal e assistência técnica",
          "Gestão de explorações agrícolas",
          "Projectos de desenvolvimento rural e investigação aplicada",
        ],
      },
    ],
    contactos: [
      "Portal institucional: https://www.umn.edu.ao/",
      "Consultar o portal da UMN para contactos e calendário académico actualizados.",
    ],
    observacao:
      "A fotografia é de uma actividade académica divulgada pela UMN. Não substitui uma fotografia identificada do campus.",
  },
  {
    id: "umn-huila",
    nome: "Instituto Politécnico da Huíla — Universidade Mandume ya Ndemufayo",
    sigla: "IPH-UMN",
    tipo: "Ensino superior",
    provincia: "Huíla",
    local: "Huíla",
    descricao:
      "Unidade da Universidade Mandume ya Ndemufayo com referência institucional às áreas de Agronomia e Zootecnia. A oferta efectiva, os requisitos de ingresso e os planos curriculares devem ser confirmados para o ano académico em causa.",
    portal: "https://www.umn.edu.ao/",
    areas: ["Agronomia", "Zootecnia", "Produção animal", "Produção vegetal"],
    cursos: [
      {
        nome: "Agronomia",
        grau: "Ensino superior — confirmar a oferta anual",
        duracao: "Consultar o plano curricular oficial",
        descricao:
          "Área de formação ligada à produção vegetal, aos solos, à água e à gestão de sistemas agrícolas.",
        plano: [
          {
            ano: "Plano curricular oficial",
            disciplinas: [
              "Solicitar o plano curricular vigente ao Instituto",
              "Confirmar unidades curriculares, carga horária e estágio",
            ],
          },
        ],
        saidas: ["Produção agrícola", "Assistência técnica", "Gestão de explorações e projectos rurais"],
      },
      {
        nome: "Zootecnia",
        grau: "Ensino superior — confirmar a oferta anual",
        duracao: "Consultar o plano curricular oficial",
        descricao:
          "Área de formação ligada à produção animal, alimentação, maneio, reprodução e gestão de sistemas pecuários.",
        plano: [
          {
            ano: "Plano curricular oficial",
            disciplinas: [
              "Solicitar o plano curricular vigente ao Instituto",
              "Confirmar unidades curriculares, carga horária e estágio",
            ],
          },
        ],
        saidas: ["Produção pecuária", "Assistência técnica", "Gestão de explorações animais"],
      },
    ],
    contactos: [
      "Portal institucional: https://www.umn.edu.ao/",
      "Consultar o portal da UMN para contactos actualizados.",
    ],
    observacao:
      "Não foi inserida fotografia específica do Instituto sem confirmação de que a imagem representa essa unidade.",
  },
];

const modelosTecnicos = [
  {
    id: "tecnico-1",
    titulo: "Instituto Médio Agrário",
    provincia: "Adicionar província",
    descricao: "",
    imagem: "",
    portal: "",
  },
  {
    id: "tecnico-2",
    titulo: "Instituto Médio de Veterinária",
    provincia: "Adicionar província",
    descricao: "",
    imagem: "",
    portal: "",
  },
  {
    id: "tecnico-3",
    titulo: "Escola Técnica de Produção Agropecuária",
    provincia: "Adicionar província",
    descricao: "",
    imagem: "",
    portal: "",
  },
  {
    id: "tecnico-4",
    titulo: "Instituto Técnico de Recursos Florestais",
    provincia: "Adicionar província",
    descricao: "",
    imagem: "",
    portal: "",
  },
];

type Separador = "Visão geral" | "Cursos" | "Planos curriculares" | "Saídas profissionais" | "Contactos";

export default function DirectorioAgropecuario() {
  const [pesquisa, setPesquisa] = useState("");
  const [filtroProvincia, setFiltroProvincia] = useState("Todas");
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [selecionada, setSelecionada] = useState<Instituicao | null>(null);
  const [separador, setSeparador] = useState<Separador>("Visão geral");
  const [cursoAtivo, setCursoAtivo] = useState(0);

  const lista = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt-PT");
    return instituicoes.filter((item) => {
      const correspondeTexto =
        !termo ||
        [item.nome, item.sigla, item.provincia, item.local, item.descricao, ...item.areas]
          .join(" ")
          .toLocaleLowerCase("pt-PT")
          .includes(termo);
      const correspondeProvincia = filtroProvincia === "Todas" || item.provincia === filtroProvincia;
      const correspondeTipo = filtroTipo === "Todos" || item.tipo === filtroTipo;
      return correspondeTexto && correspondeProvincia && correspondeTipo;
    });
  }, [pesquisa, filtroProvincia, filtroTipo]);

  useEffect(() => {
    if (!selecionada) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function fecharComEscape(evento: KeyboardEvent) {
      if (evento.key === "Escape") setSelecionada(null);
    }
    window.addEventListener("keydown", fecharComEscape);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener("keydown", fecharComEscape);
    };
  }, [selecionada]);

  function abrir(item: Instituicao) {
    setSelecionada(item);
    setSeparador("Visão geral");
    setCursoAtivo(0);
  }

  return (
    <main className="diretorio-page">
      <style jsx global>{`
        .diretorio-page{min-height:100vh;background:#f5f7f6;color:#17221b;font-family:Arial,sans-serif}
        .dir-hero{position:relative;overflow:hidden;background:linear-gradient(120deg,#052e25 0%,#14532d 58%,#166534 100%);color:#fff;padding:64px max(24px,calc((100vw - 1200px)/2)) 58px}
        .dir-hero:after{content:"";position:absolute;width:440px;height:440px;border:1px solid rgba(255,255,255,.14);border-radius:50%;right:-120px;top:-190px;box-shadow:0 0 0 42px rgba(255,255,255,.035),0 0 0 84px rgba(255,255,255,.025)}
        .dir-eyebrow{font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#bbf7d0;margin:0 0 15px}
        .dir-hero h1{font-size:clamp(30px,4vw,48px);line-height:1.1;max-width:850px;margin:0 0 18px;font-weight:800;letter-spacing:-1px}
        .dir-hero p{max-width:760px;color:#e5f5e9;line-height:1.75;font-size:16px;margin:0}
        .dir-container{max-width:1200px;margin:0 auto;padding:32px 24px 70px}
        .dir-stat-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:-22px;position:relative}
        .dir-stat{background:#fff;border:1px solid #e2e8f0;border-radius:15px;padding:20px;box-shadow:0 12px 28px rgba(15,23,42,.07)}
        .dir-stat strong{display:block;font-size:25px;color:#166534;margin-bottom:6px}
        .dir-stat span{font-size:13px;color:#64748b}
        .dir-filter{display:grid;grid-template-columns:minmax(0,1fr) 220px 220px;gap:12px;margin:30px 0 24px}
        .dir-filter input,.dir-filter select{width:100%;background:#fff;border:1px solid #d7e1da;border-radius:10px;padding:13px 14px;color:#17221b;outline:none}
        .dir-filter input:focus,.dir-filter select:focus{border-color:#166534;box-shadow:0 0 0 3px rgba(34,197,94,.13)}
        .dir-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
        .dir-card{background:#fff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 5px 18px rgba(15,23,42,.045);transition:transform .25s,box-shadow .25s;display:flex;flex-direction:column;min-width:0}
        .dir-card:hover{transform:translateY(-5px);box-shadow:0 18px 35px rgba(20,83,45,.13)}
        .dir-photo{height:205px;background:#e7f4e9;position:relative;overflow:hidden}
        .dir-photo img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
        .dir-card:hover .dir-photo img{transform:scale(1.045)}
        .dir-photo-empty{height:100%;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;color:#166534;font-size:13px;font-weight:700;background:linear-gradient(145deg,#f0fdf4,#dcefe0)}
        .dir-card-body{padding:20px;display:flex;flex-direction:column;gap:12px;flex:1}
        .dir-kicker{font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:700;color:#15803d}
        .dir-card h2{font-size:18px;line-height:1.35;margin:0;color:#14532d}
        .dir-card p{font-size:13px;line-height:1.7;color:#64748b;margin:0}
        .dir-location{font-size:12px;color:#475569}
        .dir-tags{display:flex;flex-wrap:wrap;gap:6px}
        .dir-tag{background:#f0fdf4;color:#166534;border:1px solid #dcfce7;border-radius:999px;padding:5px 8px;font-size:11px}
        .dir-action{margin-top:auto;border:0;border-radius:9px;background:#166534;color:#fff;padding:12px 15px;font-weight:700;cursor:pointer;transition:background .2s}
        .dir-action:hover{background:#14532d}
        .dir-section-title{margin:48px 0 10px;color:#14532d;font-size:25px;letter-spacing:-.4px}
        .dir-section-intro{max-width:850px;line-height:1.75;color:#64748b;margin:0 0 22px;font-size:14px}
        .dir-tech-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
        .dir-tech-card{background:#fff;border:1px dashed #9ebda5;border-radius:14px;overflow:hidden;min-width:0}
        .dir-tech-photo{height:145px;background:#f0fdf4;border-bottom:1px dashed #9ebda5;display:flex;align-items:center;justify-content:center;text-align:center;padding:18px;color:#166534;font-size:12px;font-weight:700}
        .dir-tech-body{padding:16px}
        .dir-tech-body h3{font-size:15px;color:#14532d;margin:0 0 9px}
        .dir-tech-body p{font-size:12px;color:#64748b;line-height:1.65;margin:0 0 10px}
        .dir-tech-placeholder{display:block;border-radius:7px;background:#f8fafc;border:1px solid #e2e8f0;padding:8px;font-size:11px;color:#64748b;margin-top:7px}
        .dir-empty{background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:30px;text-align:center;color:#64748b;grid-column:1/-1}
        .dir-modal-backdrop{position:fixed;inset:0;z-index:1000;background:rgba(3,20,12,.72);backdrop-filter:blur(7px);display:flex;align-items:center;justify-content:center;padding:22px;animation:dirFade .18s ease-out}
        .dir-modal{width:min(100%,1000px);max-height:min(92vh,900px);overflow:auto;background:#fff;border-radius:20px;box-shadow:0 28px 100px rgba(0,0,0,.35);animation:dirRise .28s cubic-bezier(.2,.75,.25,1)}
        .dir-modal-top{background:linear-gradient(120deg,#052e25,#166534);color:#fff;padding:27px 30px;position:relative}
        .dir-modal-top h2{font-size:clamp(21px,3vw,30px);line-height:1.25;margin:8px 45px 8px 0}
        .dir-modal-top p{font-size:13px;color:#d9fbe3;margin:0}
        .dir-modal-close{position:absolute;right:20px;top:18px;border:1px solid rgba(255,255,255,.45);background:rgba(255,255,255,.1);color:#fff;width:38px;height:38px;border-radius:50%;font-size:24px;cursor:pointer}
        .dir-modal-tabs{display:flex;gap:6px;overflow-x:auto;padding:12px 20px;border-bottom:1px solid #e2e8f0;background:#fff;position:sticky;top:0;z-index:2}
        .dir-tab{white-space:nowrap;border:1px solid transparent;background:transparent;border-radius:9px;padding:10px 13px;color:#64748b;font-weight:700;font-size:12px;cursor:pointer}
        .dir-tab.active{color:#166534;background:#f0fdf4;border-color:#bbf7d0}
        .dir-modal-content{padding:25px 30px 32px}
        .dir-modal-photo{width:100%;max-height:310px;object-fit:cover;border-radius:13px;border:1px solid #e2e8f0;margin-bottom:8px}
        .dir-caption{font-size:11px;line-height:1.5;color:#64748b;margin:0 0 20px}
        .dir-modal-content h3{font-size:19px;color:#14532d;margin:0 0 12px}
        .dir-modal-content p{font-size:14px;line-height:1.8;color:#475569}
        .dir-info-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:20px 0}
        .dir-info{background:#f8faf9;border:1px solid #e2e8f0;border-radius:12px;padding:15px}
        .dir-info small{display:block;color:#64748b;font-size:11px;margin-bottom:7px}
        .dir-info strong{font-size:13px;color:#14532d;line-height:1.5}
        .dir-course-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-bottom:18px}
        .dir-course-button{border:1px solid #dce7df;background:#fff;text-align:left;padding:14px;border-radius:10px;cursor:pointer;color:#14532d;font-weight:700}
        .dir-course-button.active{background:#f0fdf4;border-color:#22c55e}
        .dir-course-detail{border:1px solid #e2e8f0;border-radius:14px;padding:20px;background:#fbfdfb}
        .dir-course-detail ul{padding-left:20px;color:#475569;font-size:13px;line-height:1.9}
        .dir-source-link{color:#166534;text-decoration:underline;text-underline-offset:3px;overflow-wrap:anywhere}
        .dir-modal-footer{padding:16px 30px 24px;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}
        .dir-secondary{border:1px solid #cbd5e1;background:#fff;color:#334155;border-radius:9px;padding:11px 15px;font-weight:700;cursor:pointer}
        .dir-primary-link{display:inline-flex;align-items:center;justify-content:center;border-radius:9px;padding:11px 15px;background:#166534;color:#fff;text-decoration:none;font-size:13px;font-weight:700}
        @keyframes dirFade{from{opacity:0}to{opacity:1}}
        @keyframes dirRise{from{opacity:0;transform:translateY(18px) scale(.985)}to{opacity:1;transform:translateY(0) scale(1)}}
        @media(max-width:950px){.dir-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.dir-tech-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:680px){.dir-hero{padding:46px 22px}.dir-container{padding:25px 16px 50px}.dir-stat-grid{grid-template-columns:1fr;gap:10px;margin-top:18px}.dir-stat{padding:15px}.dir-filter{grid-template-columns:1fr}.dir-grid,.dir-tech-grid{grid-template-columns:1fr}.dir-modal-backdrop{padding:8px}.dir-modal{max-height:96vh;border-radius:14px}.dir-modal-top{padding:22px 20px}.dir-modal-content{padding:20px}.dir-modal-footer{padding:15px 20px}.dir-info-grid,.dir-course-list{grid-template-columns:1fr}.dir-modal-tabs{padding:9px}.dir-tab{padding:9px 10px}}
        @media(prefers-reduced-motion:reduce){.dir-card,.dir-photo img,.dir-modal-backdrop,.dir-modal{animation:none;transition:none}}
      `}</style>

      <header className="dir-hero">
        <p className="dir-eyebrow">AGROINOVA ANGOLA · ENSINO E INVESTIGAÇÃO</p>
        <h1>Directório Nacional de Formação Agropecuária</h1>
        <p>
          Encontre instituições de ensino superior ligadas à agricultura, pecuária e medicina veterinária.
          Consulte informação institucional, áreas de formação, planos curriculares e contactos oficiais.
        </p>
      </header>

      <div className="dir-container">
        <div className="dir-stat-grid">
          <div className="dir-stat"><strong>{instituicoes.length}</strong><span>Registos institucionais nesta página</span></div>
          <div className="dir-stat"><strong>21</strong><span>Províncias consideradas no filtro nacional</span></div>
          <div className="dir-stat"><strong>Ensino superior e técnico</strong><span>Áreas de formação representadas</span></div>
        </div>

        <div className="dir-filter">
          <input
            aria-label="Pesquisar instituições"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder="Pesquisar por instituição, curso, área ou província..."
          />
          <select aria-label="Filtrar por província" value={filtroProvincia} onChange={(e) => setFiltroProvincia(e.target.value)}>
            {["Todas", "Bengo", "Benguela", "Bié", "Cabinda", "Cuando", "Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla", "Icolo e Bengo", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Moxico Leste", "Namibe", "Uíge", "Zaire"].map((p) => <option key={p} value={p}>{p === "Todas" ? "Todas as províncias" : p}</option>)}
          </select>
          <select aria-label="Filtrar por tipo" value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
            {["Todos", "Ensino superior"].map((t) => <option key={t} value={t}>{t === "Todos" ? "Todos os níveis" : t}</option>)}
          </select>
        </div>

        <div className="dir-grid">
          {lista.map((item) => (
            <article className="dir-card" key={item.id}>
              <div className="dir-photo">
                {item.imagem ? (
                  <img src={item.imagem} alt={item.legendaImagem || item.nome} loading="lazy" />
                ) : (
                  <div className="dir-photo-empty">Fotografia institucional a inserir após confirmação da fonte oficial</div>
                )}
              </div>
              <div className="dir-card-body">
                <span className="dir-kicker">{item.tipo} · {item.sigla}</span>
                <h2>{item.nome}</h2>
                <span className="dir-location">{item.local} · {item.provincia}</span>
                <p>{item.descricao}</p>
                <div className="dir-tags">{item.areas.slice(0, 3).map((area) => <span className="dir-tag" key={area}>{area}</span>)}</div>
                <button className="dir-action" onClick={() => abrir(item)}>Ver instituição e cursos</button>
              </div>
            </article>
          ))}
          {lista.length === 0 && <div className="dir-empty">Não foram encontradas instituições com esses critérios. Altere a pesquisa ou os filtros.</div>}
        </div>

        <section>
          <h2 className="dir-section-title">Ensino médio e formação técnica agropecuária</h2>
          <p className="dir-section-intro">
            Estes cartões ficam preparados para completar manualmente com o nome oficial da escola, fotografia própria,
            província, descrição, cursos e ligação para o portal. Os títulos abaixo são modelos de preenchimento e não
            confirmam, por si só, a existência de instituições com essas designações exactas.
          </p>
          <div className="dir-tech-grid">
            {modelosTecnicos.map((item) => (
              <article className="dir-tech-card" key={item.id}>
                <div className="dir-tech-photo">Espaço reservado para fotografia da escola</div>
                <div className="dir-tech-body">
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao || "Adicionar aqui a descrição da instituição, os cursos técnicos e a informação de admissão."}</p>
                  <span className="dir-tech-placeholder">Província: {item.provincia}</span>
                  <span className="dir-tech-placeholder">Fotografia: inserir depois</span>
                  <span className="dir-tech-placeholder">Cursos: preencher depois</span>
                  <span className="dir-tech-placeholder">Portal/contacto: preencher depois</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <p style={{ marginTop: 28, fontSize: 12, lineHeight: 1.7, color: "#64748b" }}>
          Nota editorial: a presença de uma instituição neste directório não substitui a confirmação da oferta académica
          para o ano lectivo em curso. As imagens de actividades estão identificadas como tal. Use sempre o portal oficial
          para confirmar cursos, vagas, planos curriculares e contactos.
        </p>
      </div>

      {selecionada && (
        <div className="dir-modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelecionada(null); }}>
          <section className="dir-modal" role="dialog" aria-modal="true" aria-labelledby="dir-modal-title">
            <div className="dir-modal-top">
              <button className="dir-modal-close" onClick={() => setSelecionada(null)} aria-label="Fechar janela">×</button>
              <span className="dir-eyebrow">{selecionada.sigla} · {selecionada.tipo}</span>
              <h2 id="dir-modal-title">{selecionada.nome}</h2>
              <p>{selecionada.local} · {selecionada.provincia}</p>
            </div>
            <nav className="dir-modal-tabs" aria-label="Secções da instituição">
              {(["Visão geral", "Cursos", "Planos curriculares", "Saídas profissionais", "Contactos"] as Separador[]).map((tab) => (
                <button key={tab} className={`dir-tab ${separador === tab ? "active" : ""}`} onClick={() => setSeparador(tab)}>{tab}</button>
              ))}
            </nav>
            <div className="dir-modal-content">
              {separador === "Visão geral" && (
                <>
                  {selecionada.imagem && <img className="dir-modal-photo" src={selecionada.imagem} alt={selecionada.legendaImagem || selecionada.nome} />}
                  {selecionada.legendaImagem && <p className="dir-caption">{selecionada.legendaImagem}</p>}
                  <h3>Perfil institucional</h3>
                  <p>{selecionada.descricao}</p>
                  <div className="dir-info-grid">
                    <div className="dir-info"><small>Instituição</small><strong>{selecionada.sigla}</strong></div>
                    <div className="dir-info"><small>Localização</small><strong>{selecionada.local}</strong></div>
                    <div className="dir-info"><small>Áreas de interesse</small><strong>{selecionada.areas.join(" · ")}</strong></div>
                  </div>
                  {selecionada.observacao && <p><strong>Nota de confirmação:</strong> {selecionada.observacao}</p>}
                  <p><strong>Fonte institucional:</strong> <a className="dir-source-link" href={selecionada.portal} target="_blank" rel="noreferrer">{selecionada.portal}</a></p>
                  {selecionada.imagemFonte && <p><strong>Fonte da fotografia:</strong> <a className="dir-source-link" href={selecionada.imagemFonte} target="_blank" rel="noreferrer">{selecionada.imagemFonte}</a></p>}
                </>
              )}

              {separador === "Cursos" && (
                <>
                  <h3>Cursos e áreas de formação</h3>
                  <p>Seleccione um curso para consultar o resumo. Os detalhes assinalados para confirmação devem ser validados no plano oficial da instituição.</p>
                  <div className="dir-course-list">
                    {selecionada.cursos.map((curso, i) => (
                      <button key={curso.nome} className={`dir-course-button ${cursoAtivo === i ? "active" : ""}`} onClick={() => setCursoAtivo(i)}>
                        {curso.nome}<br /><span style={{ fontSize: 11, fontWeight: 400 }}>{curso.grau}</span>
                      </button>
                    ))}
                  </div>
                  {selecionada.cursos[cursoAtivo] && (
                    <div className="dir-course-detail">
                      <h3>{selecionada.cursos[cursoAtivo].nome}</h3>
                      <p>{selecionada.cursos[cursoAtivo].descricao}</p>
                      <div className="dir-info-grid">
                        <div className="dir-info"><small>Grau/designação</small><strong>{selecionada.cursos[cursoAtivo].grau}</strong></div>
                        <div className="dir-info"><small>Duração</small><strong>{selecionada.cursos[cursoAtivo].duracao}</strong></div>
                        <div className="dir-info"><small>Área</small><strong>{selecionada.areas.join(" · ")}</strong></div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {separador === "Planos curriculares" && (
                <>
                  <h3>Planos curriculares</h3>
                  <p>Para evitar publicar disciplinas não confirmadas, esta secção distingue os planos curriculares oficiais das descrições gerais. Consulte a instituição para obter a versão vigente.</p>
                  {selecionada.cursos.map((curso) => (
                    <div className="dir-course-detail" key={curso.nome} style={{ marginBottom: 14 }}>
                      <h3>{curso.nome}</h3>
                      {curso.plano.map((ano) => (
                        <div key={ano.ano}>
                          <strong>{ano.ano}</strong>
                          <ul>{ano.disciplinas.map((disciplina) => <li key={disciplina}>{disciplina}</li>)}</ul>
                        </div>
                      ))}
                    </div>
                  ))}
                  <p>Não foi inventada uma lista de cadeiras. Quando tiver o plano curricular oficial em PDF ou no portal, pode substituir os campos desta secção pelas disciplinas exactas e respectivas cargas horárias.</p>
                </>
              )}

              {separador === "Saídas profissionais" && (
                <>
                  <h3>Possíveis áreas profissionais</h3>
                  <p>As saídas dependem do grau obtido, da especialização, dos requisitos legais e das oportunidades de emprego. A lista abaixo é indicativa e não representa garantia de emprego.</p>
                  {selecionada.cursos.map((curso) => (
                    <div className="dir-course-detail" key={curso.nome} style={{ marginBottom: 14 }}>
                      <h3>{curso.nome}</h3>
                      <ul>{curso.saidas.map((saida) => <li key={saida}>{saida}</li>)}</ul>
                    </div>
                  ))}
                </>
              )}

              {separador === "Contactos" && (
                <>
                  <h3>Contactos e canais oficiais</h3>
                  <ul>{selecionada.contactos.map((contacto) => <li key={contacto} style={{ marginBottom: 10, color: "#475569", lineHeight: 1.7 }}>{contacto}</li>)}</ul>
                  <p>Para confirmar admissões, propinas, calendário académico e planos curriculares, utilize os canais publicados pela própria instituição.</p>
                  <a className="dir-primary-link" href={selecionada.portal} target="_blank" rel="noreferrer">Abrir portal institucional</a>
                </>
              )}
            </div>
            <div className="dir-modal-footer">
              <button className="dir-secondary" onClick={() => setSelecionada(null)}>Fechar</button>
              <a className="dir-primary-link" href={selecionada.portal} target="_blank" rel="noreferrer">Consultar portal oficial</a>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
