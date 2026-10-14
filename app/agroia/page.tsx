
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type Tecnologia = {
  id: number;
  categoria: string;
  titulo: string;
  descricao: string;
  imagem: string;
  beneficios: string[];
};

type Mensagem = {
  tipo: "utilizador" | "assistente";
  texto: string;
};

const provincias = [
  "Bengo", "Benguela", "Bié", "Cabinda", "Cuando", "Cubango",
  "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huíla",
  "Icolo e Bengo", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje",
  "Moxico", "Moxico Leste", "Namibe", "Uíge", "Zaire",
];

const culturas = [
  "Milho", "Mandioca", "Feijão", "Massango", "Massambala",
  "Batata-doce", "Batata-rena", "Arroz", "Soja", "Café",
  "Banana", "Tomate", "Cebola", "Hortícolas", "Fruteiras",
  "Pecuária", "Aquacultura", "Apicultura", "Outra atividade",
];

const tecnologias: Tecnologia[] = [
  {
    id: 1,
    categoria: "Produção vegetal",
    titulo: "Diagnóstico de culturas",
    descricao: "Organiza os sintomas observados nas culturas e prepara uma consulta técnica mais informada.",
    imagem: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1000&q=85",
    beneficios: ["Registar os sintomas e a sua evolução.", "Identificar perguntas importantes para a avaliação.", "Organizar observações antes de procurar um técnico.", "Evitar tratamentos sem identificação adequada."],
  },
  {
    id: 2,
    categoria: "Solos",
    titulo: "Solos e fertilidade",
    descricao: "Conhece os princípios da conservação do solo, matéria orgânica e fertilização responsável.",
    imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    beneficios: ["Compreender a importância da análise do solo.", "Reconhecer sinais de erosão e problemas de drenagem.", "Conhecer práticas de cobertura e rotação.", "Planear a fertilização com apoio técnico."],
  },
  {
    id: 3,
    categoria: "Proteção vegetal",
    titulo: "Pragas e doenças",
    descricao: "Aprende a documentar ocorrências e a reconhecer quando é necessária uma avaliação especializada.",
    imagem: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85",
    beneficios: ["Registar manchas, danos e insetos observados.", "Acompanhar a evolução dos sintomas.", "Conhecer princípios de proteção integrada.", "Reduzir intervenções desnecessárias."],
  },
  {
    id: 4,
    categoria: "Produção animal",
    titulo: "Pecuária inteligente",
    descricao: "Organiza informação sobre alimentação, maneio, biossegurança e saúde animal.",
    imagem: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=85",
    beneficios: ["Registar os animais afetados e os sintomas.", "Organizar dados sobre alimentação e água.", "Conhecer princípios de biossegurança.", "Reconhecer situações que exigem assistência veterinária."],
  },
  {
    id: 5,
    categoria: "Gestão da água",
    titulo: "Água e irrigação",
    descricao: "Explora princípios de gestão da água e utilização eficiente dos recursos hídricos.",
    imagem: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=85",
    beneficios: ["Observar sinais de falta ou excesso de água.", "Conhecer sistemas de irrigação.", "Considerar o solo e a fase da cultura.", "Melhorar o planeamento da rega."],
  },
  {
    id: 6,
    categoria: "Gestão agrícola",
    titulo: "Planeamento da exploração",
    descricao: "Estrutura o calendário de produção, os recursos, os custos e as operações agrícolas.",
    imagem: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=85",
    beneficios: ["Organizar o calendário agrícola.", "Registar operações e custos.", "Planear sementes e outros recursos.", "Acompanhar os resultados da exploração."],
  },
];

const perguntasFrequentes = [
  {
    pergunta: "Como posso identificar um problema numa cultura?",
    resposta: "Regista a cultura, a idade das plantas, os sintomas, o momento em que começaram e a distribuição dos danos. As fotografias podem ajudar na avaliação, mas não garantem uma identificação conclusiva.",
  },
  {
    pergunta: "Como melhorar a fertilidade do solo?",
    resposta: "Sempre que possível, começa por uma análise do solo. A rotação de culturas, a cobertura, a gestão da matéria orgânica e a fertilização orientada por recomendações técnicas podem ajudar a conservar a fertilidade.",
  },
  {
    pergunta: "A AgroIA substitui um técnico?",
    resposta: "Não. A IA fornece orientação informativa inicial. A confirmação de doenças, a prescrição de tratamentos e decisões de risco devem ser avaliadas por técnicos agrícolas ou veterinários qualificados.",
  },
  {
    pergunta: "A IA analisa fotografias?",
    resposta: "Nesta versão, a fotografia pode ser selecionada e pré-visualizada no formulário, mas não é enviada nem analisada pelo modelo Ollama. A consulta textual funciona através da API local.",
  },
];

export default function AgroIAPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  const [tecnologiaSelecionada, setTecnologiaSelecionada] = useState<Tecnologia | null>(null);
  const [modalDiagnostico, setModalDiagnostico] = useState(false);
  const [provincia, setProvincia] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [cultura, setCultura] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState("");
  const [mensagemFormulario, setMensagemFormulario] = useState("");
  const [respostaFormulario, setRespostaFormulario] = useState("");
  const [carregandoFormulario, setCarregandoFormulario] = useState(false);
  const [pergunta, setPergunta] = useState("");
  const [carregandoChat, setCarregandoChat] = useState(false);
  const [conversa, setConversa] = useState<Mensagem[]>([
    {
      tipo: "assistente",
      texto: "Olá! Sou a AgroIA, assistente informativo da AGROINOVA ANGOLA. Podes perguntar sobre culturas, solos, irrigação, pragas, doenças ou pecuária. As respostas são geradas pelo modelo de IA local e devem ser confirmadas por um técnico quando envolvam decisões de risco.",
    },
  ]);
  const [faqAberta, setFaqAberta] = useState<number | null>(0);
  const [estadoIA, setEstadoIA] = useState<"a verificar" | "disponivel" | "indisponivel">("a verificar");
  const [modeloIA, setModeloIA] = useState("qwen2.5:0.5b");
  const chatRef = useRef<HTMLDivElement>(null);
  const fotoInputRef = useRef<HTMLInputElement>(null);

  const categorias = [
    "Todas", "Produção vegetal", "Solos", "Proteção vegetal",
    "Produção animal", "Gestão da água", "Gestão agrícola",
  ];

  const tecnologiasFiltradas = tecnologias.filter((item) => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt");
    const correspondeCategoria = categoriaAtiva === "Todas" || item.categoria === categoriaAtiva;
    const correspondePesquisa =
      !termo ||
      item.titulo.toLocaleLowerCase("pt").includes(termo) ||
      item.descricao.toLocaleLowerCase("pt").includes(termo) ||
      item.categoria.toLocaleLowerCase("pt").includes(termo);

    return correspondeCategoria && correspondePesquisa;
  });

  useEffect(() => {
    let ativo = true;

    async function verificarIA() {
      try {
        const resposta = await fetch("/api/agroia", { cache: "no-store" });
        const dados = await resposta.json();

        if (!ativo) return;

        if (resposta.ok && dados.sucesso) {
          setEstadoIA("disponivel");
          if (dados.modelo) setModeloIA(dados.modelo);
        } else {
          setEstadoIA("indisponivel");
        }
      } catch {
        if (ativo) setEstadoIA("indisponivel");
      }
    }

    void verificarIA();

    return () => {
      ativo = false;
    };
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [conversa, carregandoChat]);

  function abrirDiagnostico() {
    setTecnologiaSelecionada(null);
    setMensagemFormulario("");
    setRespostaFormulario("");
    setModalDiagnostico(true);
  }

  function fecharDiagnostico() {
    if (carregandoFormulario) return;
    setModalDiagnostico(false);
  }

  function selecionarFoto(event: React.ChangeEvent<HTMLInputElement>) {
    const ficheiro = event.target.files?.[0];
    if (!ficheiro) return;

    if (!ficheiro.type.startsWith("image/")) {
      setMensagemFormulario("Seleciona um ficheiro de imagem válido.");
      event.target.value = "";
      return;
    }

    if (ficheiro.size > 8 * 1024 * 1024) {
      setMensagemFormulario("A imagem não pode ultrapassar 8 MB.");
      event.target.value = "";
      return;
    }

    if (fotoPreview) URL.revokeObjectURL(fotoPreview);

    setFoto(ficheiro);
    setFotoPreview(URL.createObjectURL(ficheiro));
    setMensagemFormulario("");
  }

  function removerFoto() {
    if (fotoPreview) URL.revokeObjectURL(fotoPreview);
    setFoto(null);
    setFotoPreview("");
    if (fotoInputRef.current) fotoInputRef.current.value = "";
  }

  async function consultarIA(dados: {
    descricao: string;
    provincia?: string;
    municipio?: string;
    cultura?: string;
    atividade?: string;
  }) {
    const resposta = await fetch("/api/agroia", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
      cache: "no-store",
    });

    const resultado = await resposta.json().catch(() => null);

    if (!resposta.ok || !resultado?.sucesso || !resultado?.resposta) {
      throw new Error(
        resultado?.erro || "A IA não conseguiu responder. Verifica o Ollama e tenta novamente.",
      );
    }

    return String(resultado.resposta);
  }

  async function submeterDiagnostico(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMensagemFormulario("");
    setRespostaFormulario("");

    if (!provincia || !cultura || descricao.trim().length < 15) {
      setMensagemFormulario("Indica a província, a cultura ou atividade e descreve o problema com pelo menos 15 caracteres.");
      return;
    }

    setCarregandoFormulario(true);

    try {
      const resposta = await consultarIA({
        descricao: `Pedido de orientação técnica. Cultura ou atividade: ${cultura}. Província: ${provincia}. Município: ${municipio || "Não informado"}. Descrição: ${descricao.trim()}`,
        provincia,
        municipio,
        cultura,
        atividade: cultura,
      });

      setRespostaFormulario(resposta);
      setEstadoIA("disponivel");
    } catch (error) {
      setMensagemFormulario(
        error instanceof Error ? error.message : "Ocorreu um erro ao consultar a AgroIA.",
      );
    } finally {
      setCarregandoFormulario(false);
    }
  }

  async function enviarPergunta(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const texto = pergunta.trim();

    if (!texto || carregandoChat) return;

    setPergunta("");
    setConversa((anterior) => [...anterior, { tipo: "utilizador", texto }]);
    setCarregandoChat(true);

    try {
      const resposta = await consultarIA({ descricao: texto });
      setConversa((anterior) => [...anterior, { tipo: "assistente", texto: resposta }]);
      setEstadoIA("disponivel");
    } catch (error) {
      const erro = error instanceof Error ? error.message : "Não foi possível contactar a IA local.";
      setConversa((anterior) => [
        ...anterior,
        {
          tipo: "assistente",
          texto: `Não consegui concluir esta consulta.\n\n${erro}\n\nConfirma se o Ollama está activo no computador onde corre o servidor Next.js.`,
        },
      ]);
      setEstadoIA("indisponivel");
    } finally {
      setCarregandoChat(false);
    }
  }

  function perguntarSobre(tema: string) {
    setPergunta(`Preciso de orientação sobre ${tema.toLowerCase()}.`);
    document.getElementById("agroia-chat-input")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    window.setTimeout(() => document.getElementById("agroia-chat-input")?.focus(), 250);
  }

  return (
    <main className="agroia">
      <style jsx global>{`
        .agroia {
          --verde: #166534;
          --verde-escuro: #123d27;
          --verde-claro: #22c55e;
          --verde-suave: #f0fdf4;
          --texto: #17221b;
          --cinza: #64748b;
          --borda: #e2e8f0;
          color: var(--texto);
          background: #fff;
          min-height: 100vh;
          font-family: Arial, Helvetica, sans-serif;
        }
        .agroia * { box-sizing: border-box; }
        .agroia button, .agroia input, .agroia textarea, .agroia select { font: inherit; }
        .agroia button { cursor: pointer; }
        .agroia button:disabled { opacity: .6; cursor: not-allowed; }
        .agroia-container { width: min(1200px, calc(100% - 40px)); margin: auto; }
        .agroia-top { padding: 11px 0; color: #e6f4e9; background: var(--verde-escuro); font-size: 12px; }
        .agroia-top-inner { display: flex; justify-content: space-between; gap: 15px; flex-wrap: wrap; }
        .agroia-status { display: inline-flex; align-items: center; gap: 8px; }
        .agroia-dot { width: 8px; height: 8px; border-radius: 50%; background: #a3e6b2; display: inline-block; }
        .agroia-hero { min-height: 490px; display: flex; align-items: center; color: white; background: linear-gradient(90deg, rgba(8,38,20,.96), rgba(13,58,30,.78), rgba(13,58,30,.38)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=90") center/cover; }
        .agroia-hero-content { padding: 78px 0 90px; animation: agroia-up .65s ease both; }
        .agroia-kicker { color: #a7f3b9; font-size: 11px; letter-spacing: 2px; font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 18px; }
        .agroia-hero h1 { max-width: 760px; font-size: clamp(38px, 5.5vw, 65px); line-height: 1.06; letter-spacing: -2px; margin: 0 0 22px; }
        .agroia-hero h1 span { color: #a7f3b9; }
        .agroia-hero p { max-width: 650px; color: #e1eee4; font-size: 15px; line-height: 1.9; margin: 0 0 28px; }
        .agroia-actions { display: flex; flex-wrap: wrap; gap: 12px; }
        .agroia-btn { display: inline-flex; justify-content: center; align-items: center; gap: 10px; padding: 13px 19px; min-height: 46px; border: 1px solid transparent; border-radius: 7px; font-size: 13px; font-weight: 800; transition: .2s ease; }
        .agroia-btn:hover { transform: translateY(-2px); }
        .agroia-btn-primary { background: var(--verde-claro); color: #103b22; }
        .agroia-btn-primary:hover { background: #4ade80; }
        .agroia-btn-light { background: rgba(255,255,255,.1); color: #fff; border-color: rgba(255,255,255,.5); }
        .agroia-btn-outline { background: white; border-color: var(--borda); color: var(--verde); }
        .agroia-section { padding: 75px 0; }
        .agroia-soft { background: #f6faf6; }
        .agroia-heading { max-width: 750px; text-align: center; margin: 0 auto 35px; }
        .agroia-heading h2, .agroia-feature h2, .agroia-chat-copy h2, .agroia-faq-intro h2 { color: #183d28; font-size: clamp(28px, 3.5vw, 40px); line-height: 1.18; letter-spacing: -1px; margin: 0 0 15px; }
        .agroia-heading p, .agroia-feature-copy > p, .agroia-chat-copy > p, .agroia-faq-intro > p { color: var(--cinza); font-size: 14px; line-height: 1.9; margin: 0; }
        .agroia-metrics { margin-top: -32px; position: relative; }
        .agroia-metrics-grid { display: grid; grid-template-columns: repeat(4,1fr); background: white; border: 1px solid #e2ebe3; border-radius: 12px; overflow: hidden; box-shadow: 0 14px 38px #123d2712; }
        .agroia-metric { text-align: center; padding: 25px 12px; border-right: 1px solid #e8eee9; }
        .agroia-metric:last-child { border: 0; }
        .agroia-metric strong { display: block; color: var(--verde); font-size: 28px; margin-bottom: 7px; }
        .agroia-metric span { display: block; color: var(--cinza); font-size: 12px; line-height: 1.5; }
        .agroia-toolbar { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; }
        .agroia-search { display: flex; align-items: center; gap: 10px; width: min(100%, 390px); padding: 12px 14px; border: 1px solid var(--borda); border-radius: 7px; }
        .agroia-search input { border: 0; outline: 0; width: 100%; min-width: 0; font-size: 13px; }
        .agroia-count { color: var(--cinza); font-size: 12px; }
        .agroia-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 25px; }
        .agroia-filter { border: 1px solid #dce7de; background: white; border-radius: 30px; color: #526356; padding: 9px 13px; font-size: 11px; font-weight: 700; }
        .agroia-filter.active { background: var(--verde); border-color: var(--verde); color: white; }
        .agroia-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 22px; }
        .agroia-card { border: 1px solid #e3ebe4; border-radius: 11px; overflow: hidden; background: white; display: flex; flex-direction: column; min-width: 0; box-shadow: 0 6px 20px #123d2708; animation: agroia-up .45s ease both; transition: .25s ease; }
        .agroia-card:hover { transform: translateY(-5px); box-shadow: 0 17px 35px #123d2718; }
        .agroia-card-image { height: 205px; position: relative; background: #e7f1e8; }
        .agroia-card-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .agroia-tag { position: absolute; top: 13px; left: 13px; background: white; color: var(--verde); border-radius: 4px; padding: 7px 9px; font-size: 10px; font-weight: 800; }
        .agroia-card-body { padding: 21px; display: flex; flex-direction: column; flex: 1; }
        .agroia-card h3 { color: #193d28; font-size: 19px; line-height: 1.35; margin: 0 0 10px; }
        .agroia-card p { color: #667568; font-size: 13px; line-height: 1.8; margin: 0 0 20px; flex: 1; }
        .agroia-card-link { text-align: left; background: transparent; border: 0; border-top: 1px solid #edf1ed; padding: 15px 0 0; color: var(--verde); font-weight: 800; font-size: 12px; display: flex; justify-content: space-between; }
        .agroia-empty { grid-column: 1/-1; padding: 40px; text-align: center; color: var(--cinza); border: 1px dashed #c9d9cc; border-radius: 10px; }
        .agroia-feature { display: grid; grid-template-columns: 1fr 1fr; gap: 55px; align-items: center; }
        .agroia-feature-image { position: relative; }
        .agroia-feature-image > img { width: 100%; height: 410px; object-fit: cover; display: block; border-radius: 12px; }
        .agroia-image-note { position: absolute; right: -12px; bottom: 20px; max-width: 255px; padding: 17px; background: white; border-left: 4px solid #d6a84f; border-radius: 7px; box-shadow: 0 9px 28px #123d2718; }
        .agroia-image-note strong { display: block; color: var(--verde); margin-bottom: 6px; font-size: 13px; }
        .agroia-image-note p { color: var(--cinza); font-size: 11px; line-height: 1.7; margin: 0; }
        .agroia-benefits { padding: 0; margin: 24px 0; list-style: none; display: grid; gap: 13px; }
        .agroia-benefits li { display: flex; gap: 10px; color: #405445; font-size: 13px; line-height: 1.8; }
        .agroia-check { color: var(--verde); font-weight: 900; }
        .agroia-chat-section { background: radial-gradient(circle at 85% 20%, #22c55e12, transparent 30%), #f4f8f4; }
        .agroia-chat-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 45px; align-items: center; }
        .agroia-chat-copy > p { margin-bottom: 22px; }
        .agroia-chat-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .agroia-chat-tag { background: white; border: 1px solid #dce9de; border-radius: 5px; padding: 9px 11px; color: #46624c; font-size: 11px; font-weight: 700; }
        .agroia-chat-window { background: white; border: 1px solid #e0e9e1; border-radius: 12px; overflow: hidden; box-shadow: 0 17px 45px #133d260e; }
        .agroia-chat-header { padding: 17px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #edf1ed; }
        .agroia-avatar { width: 40px; height: 40px; border-radius: 8px; background: var(--verde); color: white; display: grid; place-items: center; font-weight: 900; }
        .agroia-chat-title { flex: 1; min-width: 0; }
        .agroia-chat-title strong { display: block; font-size: 13px; color: #1c3d29; margin-bottom: 4px; }
        .agroia-chat-title span { font-size: 10px; color: var(--cinza); }
        .agroia-chat-status { font-size: 10px; color: var(--verde); }
        .agroia-chat-messages { height: 330px; overflow-y: auto; display: flex; flex-direction: column; gap: 13px; padding: 18px; background: #fbfdfb; }
        .agroia-message { max-width: 90%; border-radius: 9px; padding: 12px 13px; font-size: 12px; line-height: 1.8; white-space: pre-wrap; overflow-wrap: anywhere; animation: agroia-up .2s ease both; }
        .agroia-message.assistente { align-self: flex-start; color: #435a48; background: white; border: 1px solid #e5ece6; border-top-left-radius: 2px; }
        .agroia-message.utilizador { align-self: flex-end; color: white; background: var(--verde); border-top-right-radius: 2px; }
        .agroia-chat-form { display: flex; gap: 9px; padding: 13px; border-top: 1px solid #edf1ed; }
        .agroia-chat-form input { flex: 1; min-width: 0; border: 1px solid #e1e9e2; border-radius: 6px; padding: 11px; font-size: 12px; }
        .agroia-chat-form button { border: 0; border-radius: 6px; background: var(--verde); color: white; padding: 0 18px; font-weight: 800; }
        .agroia-disclaimer { padding: 0 15px 14px; color: #8a978b; font-size: 10px; line-height: 1.7; }
        .agroia-faq-grid { display: grid; grid-template-columns: .75fr 1.25fr; gap: 45px; align-items: start; }
        .agroia-faq-intro > p { margin-bottom: 22px; }
        .agroia-faq-list { display: grid; gap: 10px; }
        .agroia-faq-item { border: 1px solid #e2eae3; border-radius: 8px; background: white; overflow: hidden; }
        .agroia-faq-question { display: flex; width: 100%; justify-content: space-between; gap: 12px; text-align: left; border: 0; background: white; padding: 17px; color: #25452e; font-size: 13px; font-weight: 700; }
        .agroia-faq-answer { padding: 0 17px 17px; color: var(--cinza); font-size: 12px; line-height: 1.9; }
        .agroia-cta { padding: 48px 0; color: white; background: var(--verde-escuro); }
        .agroia-cta-inner { display: flex; justify-content: space-between; align-items: center; gap: 25px; }
        .agroia-cta h2 { margin: 0 0 10px; font-size: clamp(25px,3vw,34px); }
        .agroia-cta p { margin: 0; color: #d0e2d3; font-size: 13px; line-height: 1.8; max-width: 650px; }
        .agroia-footer { background: #0d2c1a; color: #c3d5c8; padding: 22px 0; font-size: 11px; }
        .agroia-footer-inner { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
        .agroia-footer strong { color: white; }
        .agroia-modal-backdrop { position: fixed; inset: 0; z-index: 9999; padding: 20px; display: flex; justify-content: center; align-items: center; background: #081c10b8; backdrop-filter: blur(5px); animation: agroia-fade .2s ease both; }
        .agroia-modal { position: relative; width: min(740px,100%); max-height: 90vh; overflow-y: auto; border-radius: 13px; background: white; box-shadow: 0 25px 90px #0004; animation: agroia-up .25s ease both; }
        .agroia-close { position: absolute; z-index: 2; right: 12px; top: 12px; width: 38px; height: 38px; border: 1px solid #e0e9e1; border-radius: 50%; background: white; color: #25452e; font-size: 22px; }
        .agroia-modal-image { width: 100%; height: 210px; object-fit: cover; display: block; }
        .agroia-modal-content { padding: 25px; }
        .agroia-modal-content h2 { margin: 0 0 13px; color: #183d28; font-size: 26px; }
        .agroia-modal-content h3 { color: #23452f; font-size: 14px; margin: 23px 0 12px; }
        .agroia-modal-content p, .agroia-modal-content li { color: #627266; font-size: 13px; line-height: 1.9; }
        .agroia-modal-content ul { padding-left: 20px; }
        .agroia-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .agroia-field { display: flex; flex-direction: column; gap: 7px; min-width: 0; }
        .agroia-field.full { grid-column: 1/-1; }
        .agroia-field label { color: #2d4934; font-size: 12px; font-weight: 700; }
        .agroia-field input, .agroia-field select, .agroia-field textarea { width: 100%; min-width: 0; padding: 12px; border: 1px solid #dce6dd; border-radius: 6px; color: #263b2b; background: white; font-size: 12px; }
        .agroia-field textarea { min-height: 115px; resize: vertical; line-height: 1.8; }
        .agroia-upload { display: flex; gap: 14px; align-items: center; padding: 12px; border: 1px dashed #b9d5bf; border-radius: 8px; background: #f8fcf8; }
        .agroia-preview { width: 76px; height: 76px; flex: 0 0 76px; border-radius: 6px; overflow: hidden; display: grid; place-items: center; color: var(--cinza); background: #e5f3e8; font-size: 10px; }
        .agroia-preview img { width: 100%; height: 100%; object-fit: cover; }
        .agroia-upload p { color: var(--cinza); font-size: 11px; line-height: 1.7; }
        .agroia-form-message { margin-top: 17px; padding: 12px 14px; background: #fff8f6; border: 1px solid #f0c7bc; border-radius: 6px; color: #8d3524; font-size: 12px; line-height: 1.8; white-space: pre-wrap; overflow-wrap: anywhere; }
        .agroia-form-result { margin-top: 18px; padding: 18px; border: 1px solid #cfe6d4; border-radius: 8px; background: #f7fcf8; }
        .agroia-form-result h3 { color: var(--verde); margin: 0 0 12px; }
        .agroia-form-result p { color: #304b37; font-size: 13px; line-height: 1.9; white-space: pre-wrap; overflow-wrap: anywhere; }
        .agroia-form-note { color: #849084; font-size: 10px; line-height: 1.7; margin-top: 18px; }
        .agroia-form-actions { display: flex; justify-content: flex-end; gap: 10px; flex-wrap: wrap; margin-top: 20px; }
        @keyframes agroia-up { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes agroia-fade { from { opacity: 0; } to { opacity: 1; } }
        @media (max-width: 900px) {
          .agroia-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .agroia-feature, .agroia-chat-layout, .agroia-faq-grid { grid-template-columns: 1fr; gap: 30px; }
          .agroia-feature-image > img { height: 340px; }
        }
        @media (max-width: 600px) {
          .agroia-container { width: calc(100% - 30px); }
          .agroia-hero { min-height: auto; }
          .agroia-hero-content { padding: 60px 0 75px; }
          .agroia-hero h1 { font-size: 39px; letter-spacing: -1.4px; }
          .agroia-section { padding: 55px 0; }
          .agroia-metrics-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .agroia-metric:nth-child(2) { border-right: 0; }
          .agroia-metric:nth-child(-n+2) { border-bottom: 1px solid #e8eee9; }
          .agroia-grid { grid-template-columns: 1fr; }
          .agroia-card-image { height: 220px; }
          .agroia-cta-inner { align-items: flex-start; flex-direction: column; }
          .agroia-form-grid { grid-template-columns: 1fr; }
          .agroia-field.full { grid-column: auto; }
          .agroia-modal-backdrop { align-items: flex-end; padding: 0; }
          .agroia-modal { max-height: 93vh; border-radius: 14px 14px 0 0; }
          .agroia-modal-content { padding: 20px; }
          .agroia-chat-messages { height: 340px; }
          .agroia-chat-status { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .agroia *, .agroia *::before, .agroia *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
        }
      `}</style>

      <div className="agroia-top">
        <div className="agroia-container agroia-top-inner">
          <div>AGROINOVA ANGOLA · TECNOLOGIA E CONHECIMENTO AGROPECUÁRIO</div>
          <div className="agroia-status">
            <span className="agroia-dot" />
            {estadoIA === "a verificar" && "A verificar ligação à IA local..."}
            {estadoIA === "disponivel" && `IA local disponível · ${modeloIA}`}
            {estadoIA === "indisponivel" && "IA local sem ligação"}
          </div>
        </div>
      </div>

      <section className="agroia-hero">
        <div className="agroia-container agroia-hero-content">
          <span className="agroia-kicker">Inteligência aplicada ao campo</span>
          <h1>O futuro da agricultura começa com <span>conhecimento.</span></h1>
          <p>
            Consulta informação sobre culturas, solos, água e pecuária. Faz perguntas à
            AgroIA, organiza os sintomas observados e prepara decisões mais informadas
            para os desafios do campo angolano.
          </p>
          <div className="agroia-actions">
            <button type="button" className="agroia-btn agroia-btn-primary" onClick={abrirDiagnostico}>
              Consultar a inteligência artificial <span>→</span>
            </button>
            <button type="button" className="agroia-btn agroia-btn-light" onClick={() => document.getElementById("agroia-tecnologias")?.scrollIntoView({ behavior: "smooth" })}>
              Explorar tecnologias
            </button>
          </div>
        </div>
      </section>

      <div className="agroia-metrics">
        <div className="agroia-container agroia-metrics-grid">
          <div className="agroia-metric"><strong>06</strong><span>Áreas de conhecimento</span></div>
          <div className="agroia-metric"><strong>21</strong><span>Províncias selecionáveis</span></div>
          <div className="agroia-metric"><strong>IA</strong><span>Modelo local via Ollama</span></div>
          <div className="agroia-metric"><strong>24/7</strong><span>Página acessível enquanto o servidor estiver activo</span></div>
        </div>
      </div>

      <section id="agroia-tecnologias" className="agroia-section">
        <div className="agroia-container">
          <div className="agroia-heading">
            <span className="agroia-kicker" style={{ color: "#166534" }}>Centro de soluções agrícolas</span>
            <h2>Tecnologia ao serviço de quem trabalha no campo</h2>
            <p>Explora as áreas de conhecimento, consulta os detalhes e utiliza a IA local para organizar dúvidas e observações.</p>
          </div>
          <div className="agroia-toolbar">
            <label className="agroia-search">
              <span aria-hidden="true">⌕</span>
              <input value={pesquisa} onChange={(event) => setPesquisa(event.target.value)} placeholder="Pesquisar tecnologia ou tema..." aria-label="Pesquisar tecnologias" />
            </label>
            <span className="agroia-count">{tecnologiasFiltradas.length} tecnologia(s) encontrada(s)</span>
          </div>
          <div className="agroia-filters">
            {categorias.map((categoria) => (
              <button key={categoria} type="button" className={`agroia-filter ${categoriaAtiva === categoria ? "active" : ""}`} onClick={() => setCategoriaAtiva(categoria)}>
                {categoria}
              </button>
            ))}
          </div>
          <div className="agroia-grid">
            {tecnologiasFiltradas.map((item, indice) => (
              <article className="agroia-card" key={item.id} style={{ animationDelay: `${indice * 60}ms` }}>
                <div className="agroia-card-image">
                  <img src={item.imagem} alt={item.titulo} loading="lazy" />
                  <span className="agroia-tag">{item.categoria}</span>
                </div>
                <div className="agroia-card-body">
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                  <button type="button" className="agroia-card-link" onClick={() => setTecnologiaSelecionada(item)}>
                    <span>Consultar tecnologia</span><span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
            {tecnologiasFiltradas.length === 0 && <div className="agroia-empty">Não encontrámos tecnologias para essa pesquisa.</div>}
          </div>
        </div>
      </section>

      <section className="agroia-section agroia-soft">
        <div className="agroia-container agroia-feature">
          <div className="agroia-feature-image">
            <img src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1100&q=85" alt="Campo agrícola" loading="lazy" />
            <div className="agroia-image-note">
              <strong>Conhecimento aplicado</strong>
              <p>Uma consulta bem descrita ajuda a orientar os próximos passos.</p>
            </div>
          </div>
          <div className="agroia-feature-copy">
            <span className="agroia-kicker" style={{ color: "#166534" }}>Da observação à orientação</span>
            <h2>Compreender o problema é o primeiro passo.</h2>
            <p>A AgroIA utiliza um modelo de linguagem executado através do Ollama no computador que aloja a aplicação. A resposta depende do modelo instalado e não substitui uma avaliação técnica local.</p>
            <ul className="agroia-benefits">
              <li><span className="agroia-check">✓</span><span>Indica a província, o município e a cultura ou atividade.</span></li>
              <li><span className="agroia-check">✓</span><span>Descreve os sintomas, quando começaram e quantas plantas ou animais foram afetados.</span></li>
              <li><span className="agroia-check">✓</span><span>Recebe hipóteses e medidas iniciais prudentes, geradas pelo modelo.</span></li>
              <li><span className="agroia-check">✓</span><span>Procura um profissional para confirmar problemas graves ou tratamentos.</span></li>
            </ul>
            <button type="button" className="agroia-btn agroia-btn-primary" onClick={abrirDiagnostico}>Abrir formulário de consulta →</button>
          </div>
        </div>
      </section>

      <section className="agroia-section agroia-chat-section">
        <div className="agroia-container agroia-chat-layout">
          <div className="agroia-chat-copy">
            <span className="agroia-kicker" style={{ color: "#166534" }}>Assistente AgroIA</span>
            <h2>Uma dúvida no campo? Pergunta à IA.</h2>
            <p>Escreve uma pergunta. A aplicação envia-a à API local, que consulta o Ollama e devolve a resposta real do modelo, em vez de selecionar uma resposta predefinida.</p>
            <div className="agroia-chat-tags">
              {["Milho", "Solos", "Pragas e doenças", "Irrigação", "Pecuária"].map((tema) => (
                <button type="button" className="agroia-chat-tag" key={tema} onClick={() => perguntarSobre(tema)}>{tema}</button>
              ))}
            </div>
          </div>
          <div className="agroia-chat-window">
            <div className="agroia-chat-header">
              <div className="agroia-avatar">A</div>
              <div className="agroia-chat-title">
                <strong>AgroIA · Assistente local</strong>
                <span>{modeloIA} · Ollama</span>
              </div>
              <span className="agroia-chat-status">
                {estadoIA === "disponivel" ? "Ligado" : estadoIA === "indisponivel" ? "Sem ligação" : "A verificar"}
              </span>
            </div>
            <div className="agroia-chat-messages" ref={chatRef} aria-live="polite" aria-label="Conversa com a AgroIA">
              {conversa.map((mensagem, indice) => (
                <div key={`${indice}-${mensagem.tipo}`} className={`agroia-message ${mensagem.tipo}`}>
                  {mensagem.texto}
                </div>
              ))}
              {carregandoChat && <div className="agroia-message assistente">A IA está a preparar a resposta. O modelo local pode demorar alguns segundos...</div>}
            </div>
            <form className="agroia-chat-form" onSubmit={enviarPergunta}>
              <input id="agroia-chat-input" value={pergunta} onChange={(event) => setPergunta(event.target.value)} placeholder="Escreve a tua pergunta..." aria-label="Escrever pergunta" disabled={carregandoChat} />
              <button type="submit" disabled={carregandoChat || !pergunta.trim()} aria-label="Enviar pergunta">{carregandoChat ? "…" : "→"}</button>
            </form>
            <div className="agroia-disclaimer">A IA pode cometer erros. Não confirma doenças nem substitui assistência agronómica ou veterinária. Não introduzas dados pessoais sensíveis.</div>
          </div>
        </div>
      </section>

      <section className="agroia-section">
        <div className="agroia-container agroia-faq-grid">
          <div className="agroia-faq-intro">
            <span className="agroia-kicker" style={{ color: "#166534" }}>Centro de conhecimento</span>
            <h2>Informação útil para decisões mais seguras.</h2>
            <p>Consulta respostas iniciais sobre a utilização da plataforma e os cuidados a ter com as recomendações geradas por IA.</p>
            <button type="button" className="agroia-btn agroia-btn-primary" onClick={abrirDiagnostico}>Descrever um problema →</button>
          </div>
          <div className="agroia-faq-list">
            {perguntasFrequentes.map((item, indice) => {
              const aberta = faqAberta === indice;
              return (
                <div className="agroia-faq-item" key={item.pergunta}>
                  <button type="button" className="agroia-faq-question" aria-expanded={aberta} onClick={() => setFaqAberta(aberta ? null : indice)}>
                    <span>{item.pergunta}</span><span>{aberta ? "−" : "+"}</span>
                  </button>
                  {aberta && <div className="agroia-faq-answer">{item.resposta}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="agroia-cta">
        <div className="agroia-container agroia-cta-inner">
          <div>
            <h2>Leva mais informação para a tua exploração.</h2>
            <p>Descreve o desafio e recebe orientação inicial gerada pelo modelo de IA local.</p>
          </div>
          <button type="button" className="agroia-btn agroia-btn-primary" onClick={abrirDiagnostico}>Começar consulta →</button>
        </div>
      </section>

      <footer className="agroia-footer">
        <div className="agroia-container agroia-footer-inner">
          <div><strong>AGROINOVA ANGOLA</strong> · Conhecimento, tecnologia e inovação ao serviço do campo.</div>
          <div>AgroIA · Modelo local: {modeloIA}</div>
        </div>
      </footer>

      {tecnologiaSelecionada && (
        <div className="agroia-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setTecnologiaSelecionada(null); }} role="presentation">
          <section className="agroia-modal" role="dialog" aria-modal="true" aria-labelledby="agroia-tecnologia-titulo">
            <button type="button" className="agroia-close" onClick={() => setTecnologiaSelecionada(null)} aria-label="Fechar">×</button>
            <img className="agroia-modal-image" src={tecnologiaSelecionada.imagem} alt={tecnologiaSelecionada.titulo} />
            <div className="agroia-modal-content">
              <span className="agroia-kicker" style={{ color: "#166534" }}>{tecnologiaSelecionada.categoria}</span>
              <h2 id="agroia-tecnologia-titulo">{tecnologiaSelecionada.titulo}</h2>
              <p>{tecnologiaSelecionada.descricao}</p>
              <h3>O que podes explorar nesta área</h3>
              <ul>{tecnologiaSelecionada.beneficios.map((beneficio) => <li key={beneficio}>{beneficio}</li>)}</ul>
              <p>As recomendações específicas dependem das condições da exploração e podem exigir avaliação presencial.</p>
              <div className="agroia-form-actions">
                <button type="button" className="agroia-btn agroia-btn-outline" onClick={() => setTecnologiaSelecionada(null)}>Voltar</button>
                <button type="button" className="agroia-btn agroia-btn-primary" onClick={abrirDiagnostico}>Consultar a IA →</button>
              </div>
            </div>
          </section>
        </div>
      )}

      {modalDiagnostico && (
        <div className="agroia-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) fecharDiagnostico(); }} role="presentation">
          <section className="agroia-modal" role="dialog" aria-modal="true" aria-labelledby="agroia-form-titulo">
            <button type="button" className="agroia-close" onClick={fecharDiagnostico} disabled={carregandoFormulario} aria-label="Fechar formulário">×</button>
            <div className="agroia-modal-content">
              <span className="agroia-kicker" style={{ color: "#166534" }}>AgroIA · Consulta inicial</span>
              <h2 id="agroia-form-titulo">Descreve o desafio da tua exploração</h2>
              <p>Indica a localização e os sintomas para a IA compreender melhor o contexto. A fotografia é apenas pré-visualizada nesta versão.</p>
              <form onSubmit={submeterDiagnostico}>
                <div className="agroia-form-grid">
                  <div className="agroia-field">
                    <label htmlFor="agroia-provincia">Província *</label>
                    <select id="agroia-provincia" value={provincia} onChange={(event) => setProvincia(event.target.value)} required>
                      <option value="">Selecionar província</option>
                      {provincias.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div className="agroia-field">
                    <label htmlFor="agroia-municipio">Município</label>
                    <input id="agroia-municipio" value={municipio} onChange={(event) => setMunicipio(event.target.value)} placeholder="Indica o município" />
                  </div>
                  <div className="agroia-field full">
                    <label htmlFor="agroia-cultura">Cultura ou atividade *</label>
                    <select id="agroia-cultura" value={cultura} onChange={(event) => setCultura(event.target.value)} required>
                      <option value="">Selecionar cultura ou atividade</option>
                      {culturas.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  <div className="agroia-field full">
                    <label htmlFor="agroia-descricao">Descrição do problema *</label>
                    <textarea id="agroia-descricao" value={descricao} onChange={(event) => setDescricao(event.target.value)} minLength={15} required placeholder="O que observaste? Quando começou? Quantas plantas ou animais foram afetados? Que medidas já tomaste?" />
                  </div>
                  <div className="agroia-field full">
                    <label htmlFor="agroia-foto">Fotografia (opcional)</label>
                    <div className="agroia-upload">
                      <div className="agroia-preview">{fotoPreview ? <img src={fotoPreview} alt="Pré-visualização da fotografia" /> : "Sem imagem"}</div>
                      <div>
                        <p>{foto ? foto.name : "Seleciona uma imagem com tamanho máximo de 8 MB. A imagem não é enviada ao modelo nesta versão."}</p>
                        <input ref={fotoInputRef} id="agroia-foto" type="file" accept="image/*" onChange={selecionarFoto} />
                        {foto && <button type="button" className="agroia-btn agroia-btn-outline" onClick={removerFoto}>Remover imagem</button>}
                      </div>
                    </div>
                  </div>
                </div>
                {mensagemFormulario && <div className="agroia-form-message" role="alert">{mensagemFormulario}</div>}
                {respostaFormulario && <div className="agroia-form-result"><h3>Resposta da AgroIA</h3><p>{respostaFormulario}</p></div>}
                <div className="agroia-form-note">A resposta é gerada pelo modelo local e pode conter imprecisões. Não a uses como única base para tratamentos ou decisões de risco.</div>
                <div className="agroia-form-actions">
                  <button type="button" className="agroia-btn agroia-btn-outline" onClick={fecharDiagnostico} disabled={carregandoFormulario}>Fechar</button>
                  <button type="submit" className="agroia-btn agroia-btn-primary" disabled={carregandoFormulario}>
                    {carregandoFormulario ? "A aguardar resposta da IA..." : "Consultar a inteligência artificial →"}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
