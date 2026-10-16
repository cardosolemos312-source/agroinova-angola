
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Resultado = {
  titulo: string;
  descricao: string;
  href: string;
  palavras: string;
};

const INDICE: Resultado[] = [
  { titulo: "Agricultura", descricao: "Culturas agrícolas e produção vegetal em Angola.", href: "/agricultura", palavras: "agricultura culturas lavoura milho mandioca café produção vegetal" },
  { titulo: "Floricultura", descricao: "Flores, variedades, solos e produção ornamental.", href: "/floricultura", palavras: "floricultura flores rosas orquídeas plantas ornamentais solos" },
  { titulo: "Pecuária", descricao: "Criação animal e sistemas de produção pecuária.", href: "/pecuaria", palavras: "pecuária gado bovinos caprinos suínos aves animais" },
  { titulo: "Pescas", descricao: "Recursos pesqueiros e aquicultura.", href: "/pesca", palavras: "pesca pescas peixes aquicultura mar rios" },
  { titulo: "Florestas", descricao: "Recursos florestais, espécies e conservação.", href: "/florestas", palavras: "florestas árvores madeira miombo maiombe conservação" },
  { titulo: "Solos", descricao: "Informação sobre solos e características pedológicas.", href: "/solos", palavras: "solos fertilidade argila areia nutrientes pedologia" },
  { titulo: "Clima", descricao: "Clima, precipitação e informação climática.", href: "/clima", palavras: "clima chuva temperatura precipitação seca meteorologia" },
  { titulo: "Investigação", descricao: "Áreas de investigação agropecuária.", href: "/investigacao", palavras: "investigação ciência estudos investigadores pesquisa" },
  { titulo: "Tecnologias", descricao: "Tecnologias e soluções para o sector agropecuário.", href: "/tecnologias", palavras: "tecnologias máquinas drones irrigação inovação" },
  { titulo: "Biblioteca", descricao: "Livros, documentos e publicações.", href: "/biblioteca", palavras: "biblioteca livros documentos pdf publicações leitura" },
  { titulo: "AgroAcademia", descricao: "Cursos, eventos, palestras e formação.", href: "/agroacademia", palavras: "agroacademia cursos formação palestras workshops eventos" },
  { titulo: "Dados", descricao: "Indicadores e estatísticas agropecuárias.", href: "/dados", palavras: "dados estatísticas indicadores números gráficos" },
  { titulo: "Mapa agrícola", descricao: "Mapa territorial e informação por província.", href: "/mapa", palavras: "mapa províncias território geografia localização" },
  { titulo: "Directório", descricao: "Instituições e entidades do sector.", href: "/directorio", palavras: "directório instituições contactos entidades organizações" },
  { titulo: "AGROIA", descricao: "Assistente de inteligência artificial agropecuária.", href: "/agroia", palavras: "agroia inteligência artificial assistente perguntas respostas" },
];

type Props = {
  aberto: boolean;
  aoFechar: () => void;
};

export default function PesquisaGlobal({ aberto, aoFechar }: Props) {
  const [consulta, setConsulta] = useState("");

  const resultados = useMemo(() => {
    const termos = consulta
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    if (!termos.length) return INDICE.slice(0, 6);

    return INDICE.map((item) => {
      const texto = `${item.titulo} ${item.descricao} ${item.palavras}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      const pontuacao = termos.reduce((total, termo) => {
        if (item.titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(termo)) return total + 4;
        if (texto.includes(termo)) return total + 1;
        return total;
      }, 0);

      return { ...item, pontuacao };
    })
      .filter((item) => item.pontuacao > 0)
      .sort((a, b) => b.pontuacao - a.pontuacao)
      .slice(0, 10);
  }, [consulta]);

  useEffect(() => {
    if (!aberto) return;

    const tratarTecla = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") aoFechar();
    };

    document.addEventListener("keydown", tratarTecla);
    return () => document.removeEventListener("keydown", tratarTecla);
  }, [aberto, aoFechar]);

  useEffect(() => {
    if (!aberto) setConsulta("");
  }, [aberto]);

  if (!aberto) return null;

  return (
    <div
      role="presentation"
      onMouseDown={(evento) => {
        if (evento.target === evento.currentTarget) aoFechar();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(10, 25, 15, 0.72)",
        backdropFilter: "blur(7px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "9vh 16px 24px",
        overflowY: "auto",
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label="Pesquisa global AGROINOVA ANGOLA"
        style={{
          width: "100%",
          maxWidth: 720,
          borderRadius: 22,
          background: "#ffffff",
          overflow: "hidden",
          boxShadow: "0 28px 90px rgba(0,0,0,.35)",
          border: "1px solid #dce8de",
        }}
      >
        <div style={{ background: "linear-gradient(135deg,#14532d,#166534,#22c55e)", padding: "24px 26px", color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2, opacity: .85 }}>AGROINOVA ANGOLA</div>
              <h2 style={{ fontSize: 25, fontWeight: 800, margin: "7px 0 4px" }}>Pesquisa global</h2>
              <p style={{ fontSize: 13, margin: 0, opacity: .9 }}>Encontre conteúdos e áreas da plataforma.</p>
            </div>
            <button
              type="button"
              onClick={aoFechar}
              aria-label="Fechar pesquisa"
              style={{ width: 40, height: 40, borderRadius: 12, border: "1px solid rgba(255,255,255,.4)", background: "rgba(255,255,255,.13)", color: "#fff", fontSize: 24, cursor: "pointer" }}
            >
              ×
            </button>
          </div>
          <div style={{ marginTop: 20, position: "relative" }}>
            <span style={{ position: "absolute", left: 15, top: 13, fontSize: 20 }}>⌕</span>
            <input
              autoFocus
              value={consulta}
              onChange={(evento) => setConsulta(evento.target.value)}
              placeholder="Pesquisar agricultura, flores, solos, clima..."
              aria-label="Pesquisar na plataforma"
              style={{ width: "100%", boxSizing: "border-box", padding: "15px 16px 15px 45px", borderRadius: 13, border: "2px solid rgba(255,255,255,.65)", outline: "none", background: "#fff", color: "#17221b", fontSize: 15 }}
            />
          </div>
        </div>

        <div style={{ padding: 22, maxHeight: "55vh", overflowY: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, gap: 10 }}>
            <strong style={{ color: "#14532d", fontSize: 14 }}>
              {consulta.trim() ? "Resultados encontrados" : "Áreas em destaque"}
            </strong>
            <span style={{ color: "#64748b", fontSize: 12 }}>{resultados.length} resultado(s)</span>
          </div>

          {resultados.length ? (
            <div style={{ display: "grid", gap: 9 }}>
              {resultados.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={aoFechar}
                  style={{ display: "block", textDecoration: "none", padding: "14px 15px", border: "1px solid #e2e8e0", borderRadius: 13, background: "#fbfdfb", color: "#17221b" }}
                >
                  <div style={{ fontWeight: 800, color: "#166534", marginBottom: 4 }}>{item.titulo} <span aria-hidden="true">↗</span></div>
                  <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.5 }}>{item.descricao}</div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ padding: "28px 14px", textAlign: "center", background: "#f8faf8", borderRadius: 14 }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>⌕</div>
              <strong style={{ color: "#14532d" }}>Não encontrámos resultados</strong>
              <p style={{ color: "#64748b", fontSize: 13 }}>Experimente outras palavras, como agricultura, flores, pecuária ou clima.</p>
            </div>
          )}

          <p style={{ margin: "16px 0 0", color: "#94a3b8", fontSize: 11, lineHeight: 1.5 }}>
            A pesquisa consulta o índice de áreas configurado neste componente. Os resultados dependem das rotas existentes na plataforma.
          </p>
        </div>
      </section>
    </div>
  );
}