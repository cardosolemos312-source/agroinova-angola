
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PesquisaGlobal from "@/components/PesquisaGlobal";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState<string | null>(null);
  const [pesquisaAberta, setPesquisaAberta] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);

  function fecharMenu() {
    setMenuAberto(false);
    setDropdownAberto(null);
  }

  function alternarDropdown(nome: string) {
    setDropdownAberto((atual) => (atual === nome ? null : nome));
  }

  function abrirMenu() {
    setMenuAberto((atual) => !atual);
    setDropdownAberto(null);
  }

  function abrirPesquisa() {
    fecharMenu();
    setPesquisaAberta(true);
  }

  useEffect(() => {
    function tratarCliqueFora(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        fecharMenu();
      }
    }

    function tratarTecla(event: KeyboardEvent) {
      if (event.key === "Escape") {
        fecharMenu();
        setPesquisaAberta(false);
      }
    }

    document.addEventListener("click", tratarCliqueFora);
    document.addEventListener("keydown", tratarTecla);

    return () => {
      document.removeEventListener("click", tratarCliqueFora);
      document.removeEventListener("keydown", tratarTecla);
    };
  }, []);

  return (
    <>
      <style>{`
        .agro-header,
        .agro-header *,
        .agro-header *::before,
        .agro-header *::after {
          box-sizing: border-box;
        }

        .agro-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background: #103f2b;
          border-bottom: 1px solid rgba(255,255,255,.15);
          box-shadow: 0 5px 22px rgba(8,39,24,.18);
          font-family: Arial, Helvetica, sans-serif;
        }

        .agro-header-inner {
          width: min(96%, 1600px);
          min-height: 82px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        /* LOGÓTIPO */

        .agro-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          gap: 10px;
          color: #ffffff !important;
          text-decoration: none;
        }

        .agro-logo-symbol {
          display: block;
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          transition: transform .25s ease;
        }

        .agro-logo:hover .agro-logo-symbol {
          transform: scale(1.04) rotate(-4deg);
        }

        .agro-logo-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .agro-logo-title {
          color: #ffffff !important;
          font-size: 20px;
          font-weight: 900;
          letter-spacing: -.6px;
          line-height: 1.1;
          white-space: nowrap;
        }

        .agro-logo-subtitle {
          color: #86efac !important;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 4px;
        }

        .agro-logo-slogan {
          color: #e2eee5 !important;
          font-size: 9px;
          white-space: nowrap;
        }

        /* NAVEGAÇÃO */

        .agro-main-nav {
          display: flex;
          flex: 1;
          min-width: 0;
          align-items: center;
          justify-content: center;
          gap: clamp(10px, 1.4vw, 23px);
        }

        .agro-main-nav > a,
        .agro-dropdown-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 30px 0;
          border: 0;
          background: transparent;
          color: #ffffff !important;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.3;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: color .2s ease;
        }

        .agro-main-nav > a::after,
        .agro-dropdown-button::after {
          position: absolute;
          right: 0;
          bottom: 21px;
          left: 0;
          height: 2px;
          border-radius: 5px;
          background: #4ade80;
          content: "";
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .2s ease;
        }

        .agro-main-nav > a:hover,
        .agro-dropdown-button:hover,
        .agro-dropdown-button[aria-expanded="true"] {
          color: #86efac !important;
        }

        .agro-main-nav > a:hover::after,
        .agro-dropdown-button:hover::after {
          transform: scaleX(1);
        }

        .agro-dropdown {
          position: relative;
          display: flex;
          align-items: center;
        }

        .agro-dropdown-arrow {
          font-size: 9px;
          color: inherit;
          transition: transform .2s ease;
        }

        .agro-dropdown-button[aria-expanded="true"] .agro-dropdown-arrow {
          transform: rotate(180deg);
        }

        /* MENUS SUSPENSOS: FUNDO BRANCO E TEXTO PRETO */

        .agro-dropdown-menu {
          position: absolute;
          top: calc(100% - 8px);
          left: -18px;
          z-index: 1001;
          display: none;
          flex-direction: column;
          min-width: 230px;
          padding: 9px;
          border: 1px solid #dbe7dd;
          border-radius: 13px;
          background: #ffffff;
          box-shadow: 0 18px 40px rgba(0,0,0,.2);
        }

        .agro-dropdown-menu.is-open {
          display: flex;
        }

        .agro-dropdown-menu a {
          display: block;
          padding: 12px 13px;
          border-radius: 8px;
          background: #ffffff;
          color: #111827 !important;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.4;
          text-decoration: none;
          transition: background .2s ease, color .2s ease,
            padding-left .2s ease;
        }

        .agro-dropdown-menu a:hover {
          padding-left: 17px;
          background: #e8f5ec;
          color: #14532d !important;
        }

        /* BOTÕES DE ACÇÃO */

        .agro-header-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
          gap: 9px;
        }

        .agro-search-button,
        .agro-ai-button {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 30px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: background .2s ease, border-color .2s ease,
            transform .2s ease;
        }

        .agro-search-button {
          padding: 0 15px;
          border: 1px solid rgba(255,255,255,.5);
          background: #174b34;
          color: #ffffff !important;
        }

        .agro-search-button:hover {
          border-color: #86efac;
          background: #205b3f;
          color: #ffffff !important;
        }

        .agro-search-icon {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        .agro-ai-button {
          min-width: 90px;
          padding: 0 17px;
          border: 1px solid #4ade80;
          background: #4ade80;
          color: #123522 !important;
        }

        .agro-ai-button:hover {
          transform: translateY(-1px);
          background: #86efac;
          color: #123522 !important;
        }

        .agro-mobile-toggle,
        .agro-mobile-actions {
          display: none;
        }

        /* TABLETS E ECRÃS MÉDIOS */

        @media (max-width: 1250px) {
          .agro-header-inner {
            width: 97%;
            gap: 12px;
          }

          .agro-logo {
            gap: 7px;
          }

          .agro-logo-symbol {
            width: 44px;
            height: 44px;
          }

          .agro-logo-title {
            font-size: 16px;
          }

          .agro-logo-subtitle {
            font-size: 8px;
            letter-spacing: 3px;
          }

          .agro-logo-slogan {
            font-size: 8px;
          }

          .agro-main-nav {
            gap: 10px;
          }

          .agro-main-nav > a,
          .agro-dropdown-button {
            font-size: 11px;
          }

          .agro-header-actions {
            gap: 6px;
          }

          .agro-search-button {
            padding: 0 10px;
            font-size: 11px;
          }

          .agro-ai-button {
            min-width: 70px;
            padding: 0 11px;
            font-size: 11px;
          }
        }

        /* MENU RESPONSIVO */

        @media (max-width: 950px) {
          .agro-header-inner {
            position: relative;
            min-height: 76px;
          }

          .agro-mobile-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            min-height: 41px;
            padding: 0 13px;
            border: 1px solid rgba(255,255,255,.45);
            border-radius: 25px;
            background: #174b34;
            color: #ffffff !important;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
          }

          .agro-mobile-toggle:hover {
            background: #205b3f;
          }

          .agro-mobile-icon {
            width: 17px;
            height: 17px;
          }

          .agro-main-nav {
            position: absolute;
            top: 100%;
            right: -1.55%;
            left: -1.55%;
            display: none;
            align-items: stretch;
            flex-direction: column;
            gap: 0;
            max-height: calc(100dvh - 76px);
            overflow-y: auto;
            padding: 12px 24px 22px;
            border-top: 1px solid rgba(255,255,255,.15);
            background: #103f2b;
            box-shadow: 0 16px 30px rgba(0,0,0,.22);
          }

          .agro-main-nav.is-mobile-open {
            display: flex;
          }

          .agro-main-nav > a,
          .agro-dropdown-button {
            width: 100%;
            justify-content: space-between;
            padding: 15px 5px;
            border-bottom: 1px solid rgba(255,255,255,.14);
            color: #ffffff !important;
            font-size: 14px;
            text-align: left;
          }

          .agro-main-nav > a::after,
          .agro-dropdown-button::after {
            display: none;
          }

          .agro-dropdown {
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }

          .agro-dropdown-menu {
            position: static;
            width: 100%;
            min-width: 0;
            margin: 5px 0 9px;
            border: 1px solid #dbe7dd;
            border-radius: 10px;
            background: #ffffff;
            box-shadow: none;
          }

          .agro-dropdown-menu a {
            padding: 13px 15px;
            color: #111827 !important;
            font-size: 13px;
          }

          .agro-header-actions {
            margin-left: auto;
          }

          .agro-mobile-actions {
            display: flex;
            gap: 10px;
            padding-top: 16px;
          }

          .agro-mobile-actions button,
          .agro-mobile-actions a {
            flex: 1;
            min-width: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 13px 10px;
            border: 1px solid rgba(255,255,255,.3);
            border-radius: 25px;
            background: #174b34;
            color: #ffffff !important;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13px;
            font-weight: 700;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
          }

          .agro-mobile-actions a:last-child {
            border-color: #4ade80;
            background: #4ade80;
            color: #123522 !important;
          }
        }

        /* TELEMÓVEIS */

        @media (max-width: 560px) {
          .agro-header-inner {
            width: calc(100% - 22px);
            min-height: 70px;
            gap: 8px;
          }

          .agro-logo {
            gap: 6px;
          }

          .agro-logo-symbol {
            width: 37px;
            height: 37px;
          }

          .agro-logo-title {
            font-size: 13px;
            letter-spacing: -.35px;
          }

          .agro-logo-subtitle {
            font-size: 8px;
            letter-spacing: 2px;
          }

          .agro-logo-slogan {
            display: none;
          }

          .agro-header-actions {
            display: none;
          }

          .agro-mobile-toggle {
            min-height: 38px;
            padding: 0 9px;
            font-size: 12px;
          }

          .agro-main-nav {
            right: -11px;
            left: -11px;
            padding-right: 17px;
            padding-left: 17px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .agro-header *,
          .agro-header *::before,
          .agro-header *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <header ref={headerRef} className="agro-header">
        <div className="agro-header-inner">
          {/* LOGÓTIPO */}

          <Link
            href="/"
            className="agro-logo"
            onClick={fecharMenu}
            aria-label="AGROINOVA-ANGOLA — Página inicial"
          >
            <svg
              className="agro-logo-symbol"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Logótipo AGROINOVA"
            >
              <defs>
                <linearGradient
                  id="agro-logo-gradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#087b4b" />
                </linearGradient>
              </defs>

              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#f7c948"
                strokeWidth="5"
                strokeDasharray="210 75"
                transform="rotate(-45 50 50)"
              />

              <path
                d="M49 81 C48 62 49 43 59 23"
                fill="none"
                stroke="url(#agro-logo-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M49 58 C28 58 18 44 18 29 C37 29 49 39 49 58Z"
                fill="url(#agro-logo-gradient)"
              />

              <path
                d="M51 45 C51 26 65 15 82 15 C82 34 69 45 51 45Z"
                fill="url(#agro-logo-gradient)"
              />

              <path
                d="M50 73 C30 73 19 64 13 51 C31 48 45 57 50 73Z"
                fill="#22a866"
              />

              <path
                d="M51 83 C64 65 76 61 90 64 C83 79 68 85 51 83Z"
                fill="#087b4b"
              />

              <path
                d="M26 88 Q50 77 76 88"
                fill="none"
                stroke="#f7c948"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            <span className="agro-logo-text">
              <span className="agro-logo-title">AGROINOVA-ANGOLA</span>
              <span className="agro-logo-subtitle">ANGOLA</span>
              <span className="agro-logo-slogan">
                Conhecimento · Tecnologia · Inovação
              </span>
            </span>
          </Link>

          {/* BOTÃO DO MENU MÓVEL */}

          <button
            type="button"
            className="agro-mobile-toggle"
            onClick={abrirMenu}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            aria-controls="agro-menu-principal"
          >
            <svg
              className="agro-mobile-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuAberto ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
            {menuAberto ? "Fechar" : "Menu"}
          </button>

          {/* MENU PRINCIPAL */}

          <nav
            id="agro-menu-principal"
            className={`agro-main-nav ${
              menuAberto ? "is-mobile-open" : ""
            }`}
            aria-label="Menu principal"
          >
            <Link href="/" onClick={fecharMenu}>
              Início
            </Link>

            {/* PRODUÇÃO */}

            <div className="agro-dropdown">
              <button
                type="button"
                className="agro-dropdown-button"
                onClick={() => alternarDropdown("producao")}
                aria-expanded={dropdownAberto === "producao"}
              >
                <span>Produção</span>
                <span className="agro-dropdown-arrow" aria-hidden="true">
                  {dropdownAberto === "producao" ? "▲" : "▼"}
                </span>
              </button>

              <div
                className={`agro-dropdown-menu ${
                  dropdownAberto === "producao" ? "is-open" : ""
                }`}
              >
                <Link href="/agricultura" onClick={fecharMenu}>
                  Agricultura
                </Link>
                <Link href="/floricultura" onClick={fecharMenu}>
                  Floricultura
                </Link>
                <Link href="/florestas" onClick={fecharMenu}>
                  Florestas
                </Link>
                <Link href="/pecuaria" onClick={fecharMenu}>
                  Pecuária
                </Link>
                <Link href="/pesca" onClick={fecharMenu}>
                  Pesca
                </Link>
                <Link href="/solos" onClick={fecharMenu}>
                  Solos
                </Link>
                <Link href="/clima" onClick={fecharMenu}>
                  Clima
                </Link>
              </div>
            </div>

            {/* CONHECIMENTO */}

            <div className="agro-dropdown">
              <button
                type="button"
                className="agro-dropdown-button"
                onClick={() => alternarDropdown("conhecimento")}
                aria-expanded={dropdownAberto === "conhecimento"}
              >
                <span>Conhecimento</span>
                <span className="agro-dropdown-arrow" aria-hidden="true">
                  {dropdownAberto === "conhecimento" ? "▲" : "▼"}
                </span>
              </button>

              <div
                className={`agro-dropdown-menu ${
                  dropdownAberto === "conhecimento" ? "is-open" : ""
                }`}
              >
                <Link href="/investigacao" onClick={fecharMenu}>
                  Investigação
                </Link>
                <Link href="/tecnologias" onClick={fecharMenu}>
                  Tecnologias
                </Link>
                <Link href="/biblioteca" onClick={fecharMenu}>
                  Biblioteca
                </Link>
                <Link href="/agroacademia" onClick={fecharMenu}>
                  AgroAcademia
                </Link>
              </div>
            </div>

            {/* DADOS E MAPAS */}

            <div className="agro-dropdown">
              <button
                type="button"
                className="agro-dropdown-button"
                onClick={() => alternarDropdown("dados")}
                aria-expanded={dropdownAberto === "dados"}
              >
                <span>Dados &amp; Mapas</span>
                <span className="agro-dropdown-arrow" aria-hidden="true">
                  {dropdownAberto === "dados" ? "▲" : "▼"}
                </span>
              </button>

              <div
                className={`agro-dropdown-menu ${
                  dropdownAberto === "dados" ? "is-open" : ""
                }`}
              >
                <Link href="/dados" onClick={fecharMenu}>
                  Dados
                </Link>
                <Link href="/mapa" onClick={fecharMenu}>
                  Mapa Agrícola
                </Link>
                <Link href="/directorio" onClick={fecharMenu}>
                  Directório
                </Link>
                <Link href="/agroia" onClick={fecharMenu}>
                  AGROIA
                </Link>
              </div>
            </div>

            <Link href="/noticias" onClick={fecharMenu}>
              Notícias
            </Link>

            {/* ACÇÕES PARA TELEMÓVEIS */}

            <div className="agro-mobile-actions">
              <button type="button" onClick={abrirPesquisa}>
                <svg
                  className="agro-search-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16 16 4 4" />
                </svg>
                Pesquisar
              </button>

              <Link href="/agroia" onClick={fecharMenu}>
                AGROIA
              </Link>
            </div>
          </nav>

          {/* ACÇÕES PARA COMPUTADOR */}

          <div className="agro-header-actions">
            <button
              type="button"
              className="agro-search-button"
              onClick={abrirPesquisa}
              aria-label="Abrir pesquisa global"
            >
              <svg
                className="agro-search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>
              Pesquisar
            </button>

            <Link href="/agroia" className="agro-ai-button">
              AGROIA <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </header>

      {/* PESQUISA GLOBAL */}

      <PesquisaGlobal
        aberto={pesquisaAberta}
        aoFechar={() => setPesquisaAberta(false)}
      />
    </>
  );
}
