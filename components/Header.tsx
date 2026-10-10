
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState<string | null>(null);

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
      <style jsx global>{`
        .site-header,
        .site-header * {
          box-sizing: border-box;
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background: rgba(174, 180, 185, 0.98);
          border-bottom: 1px solid rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          font-family: Arial, Helvetica, sans-serif;
        }

        .header-content {
          width: min(96%, 1600px);
          min-height: 82px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        /* LOGÓTIPO */

        .logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          gap: 10px;
          color: inherit;
          text-decoration: none;
        }

        .logo-symbol {
          width: 57px;
          height: 57px;
          flex-shrink: 0;
          display: block;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2px;
        }

        .logo-title {
          color: #ffffff;
          font-size: 23px;
          font-weight: 900;
          letter-spacing: -0.8px;
          line-height: 1.05;
          white-space: nowrap;
        }

        .logo-subtitle {
          color: #00bd86;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 4px;
          line-height: 1.5;
        }

        .logo-slogan {
          color: rgba(255, 255, 255, 0.95);
          font-size: 10px;
          letter-spacing: 0.7px;
          white-space: nowrap;
        }

        /* MENU PRINCIPAL */

        .main-nav {
          display: flex;
          flex: 1;
          min-width: 0;
          align-items: center;
          justify-content: center;
          gap: clamp(10px, 1.2vw, 22px);
        }

        .main-nav > a,
        .nav-dropdown-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 28px 0;
          border: none;
          background: transparent;
          color: #ffffff;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.3;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .main-nav > a:hover,
        .nav-dropdown-button:hover {
          color: #00bd86;
        }

        .nav-dropdown {
          position: relative;
          display: flex;
          align-items: center;
        }

        .dropdown-arrow {
          font-size: 10px;
          transition: transform 0.2s ease;
        }

        .nav-dropdown-button[aria-expanded="true"] .dropdown-arrow {
          transform: rotate(180deg);
        }

        /* DROPDOWNS */

        .nav-dropdown-menu {
          position: absolute;
          top: 100%;
          left: -14px;
          z-index: 1001;
          display: none;
          flex-direction: column;
          min-width: 220px;
          padding: 8px;
          border: 1px solid #e5ebe7;
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.14);
        }

        .nav-dropdown-menu.dropdown-aberto {
          display: flex;
        }

        .nav-dropdown-menu a {
          display: block;
          padding: 12px 14px;
          border-radius: 6px;
          color: #283b32;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .nav-dropdown-menu a:hover {
          background: #e9f8f1;
          color: #009b6c;
        }

        /* PESQUISA E AGROIA */

        .header-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
          gap: 10px;
          margin-left: auto;
        }

        .search-button,
        .agroia-button {
          min-height: 43px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 30px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .search-button {
          padding: 0 18px;
          border: 1px solid rgba(255, 255, 255, 0.85);
          background: transparent;
          color: #ffffff;
        }

        .search-button:hover {
          background: rgba(255, 255, 255, 0.18);
          color: #ffffff;
        }

        .agroia-button {
          min-width: 95px;
          padding: 0 20px;
          background: #00bd86;
          color: #ffffff;
        }

        .agroia-button:hover {
          background: #009e70;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .mobile-menu-button,
        .mobile-actions {
          display: none;
        }

        /* ECRÃS MÉDIOS */

        @media (max-width: 1250px) {
          .header-content {
            width: 97%;
            gap: 12px;
          }

          .logo-symbol {
            width: 46px;
            height: 46px;
          }

          .logo {
            gap: 7px;
          }

          .logo-title {
            font-size: 18px;
          }

          .logo-subtitle {
            font-size: 9px;
            letter-spacing: 2px;
          }

          .logo-slogan {
            font-size: 9px;
          }

          .main-nav {
            gap: 10px;
          }

          .main-nav > a,
          .nav-dropdown-button {
            font-size: 12px;
          }

          .header-actions {
            gap: 7px;
          }

          .search-button {
            padding: 0 12px;
            font-size: 12px;
          }

          .agroia-button {
            min-width: 75px;
            padding: 0 12px;
            font-size: 12px;
          }
        }

        /* TABLETS E TELEMÓVEIS */

        @media (max-width: 950px) {
          .header-content {
            min-height: 76px;
          }

          .mobile-menu-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 42px;
            padding: 0 15px;
            border: 1px solid #ffffff;
            border-radius: 24px;
            background: transparent;
            color: #ffffff;
            font-family: inherit;
            font-size: 14px;
            cursor: pointer;
          }

          .mobile-menu-button:hover {
            background: rgba(255, 255, 255, 0.15);
          }

          .main-nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            display: none;
            align-items: stretch;
            flex-direction: column;
            gap: 0;
            max-height: calc(100vh - 76px);
            overflow-y: auto;
            padding: 12px 24px 20px;
            background: #aeb4b9;
            border-top: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 14px 25px rgba(0, 0, 0, 0.13);
          }

          .main-nav.mobile-menu-open {
            display: flex;
          }

          .main-nav > a,
          .nav-dropdown-button {
            width: 100%;
            justify-content: space-between;
            padding: 15px 5px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.28);
            color: #ffffff;
            font-size: 15px;
            text-align: left;
          }

          .main-nav > a:hover,
          .nav-dropdown-button:hover {
            color: #00bd86;
          }

          .nav-dropdown {
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }

          .nav-dropdown-menu {
            position: static;
            width: 100%;
            min-width: 0;
            margin-bottom: 8px;
            border-radius: 8px;
            box-shadow: none;
          }

          .nav-dropdown-menu a {
            padding: 13px 15px;
            font-size: 14px;
          }

          .header-actions {
            margin-left: auto;
          }

          .mobile-actions {
            display: flex;
            gap: 10px;
            padding-top: 16px;
          }

          .mobile-actions a {
            flex: 1;
            padding: 13px;
            border-radius: 25px;
            background: rgba(255, 255, 255, 0.15);
            color: #ffffff;
            font-size: 14px;
            text-align: center;
            text-decoration: none;
          }

          .mobile-actions a:last-child {
            background: #00bd86;
          }
        }

        /* TELEMÓVEIS PEQUENOS */

        @media (max-width: 560px) {
          .header-content {
            width: calc(100% - 24px);
            min-height: 72px;
            gap: 8px;
          }

          .logo {
            gap: 6px;
          }

          .logo-symbol {
            width: 39px;
            height: 39px;
          }

          .logo-title {
            font-size: 15px;
            letter-spacing: -0.5px;
          }

          .logo-subtitle {
            font-size: 8px;
            letter-spacing: 2px;
          }

          .logo-slogan {
            display: none;
          }

          .header-actions {
            display: none;
          }

          .mobile-menu-button {
            padding: 0 11px;
            font-size: 13px;
          }

          .main-nav {
            padding-right: 18px;
            padding-left: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-header *,
          .site-header *::before,
          .site-header *::after {
            transition: none !important;
          }
        }
      `}</style>

      <header ref={headerRef} className="site-header">
        <div className="container header-content">
          {/* LOGÓTIPO AGROINOVA-ANGOLA */}

          <Link
            href="/"
            className="logo"
            onClick={fecharMenu}
            aria-label="AGROINOVA-ANGOLA — Página inicial"
          >
            <svg
              className="logo-symbol"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Logótipo AGROINOVA"
            >
              <defs>
                <linearGradient
                  id="agroGreen"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#00d99b" />
                  <stop offset="100%" stopColor="#087b4b" />
                </linearGradient>
              </defs>

              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#f7b928"
                strokeWidth="5"
                strokeDasharray="210 75"
                transform="rotate(-45 50 50)"
              />

              <path
                d="M49 81 C48 62 49 43 59 23"
                fill="none"
                stroke="url(#agroGreen)"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <path
                d="M49 58 C28 58 18 44 18 29 C37 29 49 39 49 58Z"
                fill="url(#agroGreen)"
              />

              <path
                d="M51 45 C51 26 65 15 82 15 C82 34 69 45 51 45Z"
                fill="url(#agroGreen)"
              />

              <path
                d="M50 73 C30 73 19 64 13 51 C31 48 45 57 50 73Z"
                fill="#0c985d"
              />

              <path
                d="M51 83 C64 65 76 61 90 64 C83 79 68 85 51 83Z"
                fill="#087b4b"
              />

              <path
                d="M26 88 Q50 77 76 88"
                fill="none"
                stroke="#f7b928"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            <div className="logo-text">
              <span className="logo-title">AGROINOVA-ANGOLA</span>
              <span className="logo-subtitle">ANGOLA</span>
              <span className="logo-slogan">
                Conhecimento • Tecnologia • Inovação
              </span>
            </div>
          </Link>

          {/* BOTÃO DO MENU MOBILE */}

          <button
            type="button"
            className="mobile-menu-button"
            onClick={abrirMenu}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
          >
            {menuAberto ? "Fechar" : "Menu"}
          </button>

          {/* NAVEGAÇÃO PRINCIPAL */}

          <nav
            id="menu-principal"
            className={`main-nav ${menuAberto ? "mobile-menu-open" : ""}`}
            aria-label="Menu principal"
          >
            <Link href="/" onClick={fecharMenu}>
              Início
            </Link>

            {/* PRODUÇÃO */}

            <div className="nav-dropdown">
              <button
                type="button"
                className="nav-dropdown-button"
                onClick={() => alternarDropdown("producao")}
                aria-expanded={dropdownAberto === "producao"}
              >
                <span>Produção</span>
                <span className="dropdown-arrow">
                  {dropdownAberto === "producao" ? "▲" : "▼"}
                </span>
              </button>

              <div
                className={`nav-dropdown-menu ${
                  dropdownAberto === "producao" ? "dropdown-aberto" : ""
                }`}
              >
                <Link href="/agricultura" onClick={fecharMenu}>
                  Agricultura
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

            <div className="nav-dropdown">
              <button
                type="button"
                className="nav-dropdown-button"
                onClick={() => alternarDropdown("conhecimento")}
                aria-expanded={dropdownAberto === "conhecimento"}
              >
                <span>Conhecimento</span>
                <span className="dropdown-arrow">
                  {dropdownAberto === "conhecimento" ? "▲" : "▼"}
                </span>
              </button>

              <div
                className={`nav-dropdown-menu ${
                  dropdownAberto === "conhecimento" ? "dropdown-aberto" : ""
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

            <div className="nav-dropdown">
              <button
                type="button"
                className="nav-dropdown-button"
                onClick={() => alternarDropdown("dados")}
                aria-expanded={dropdownAberto === "dados"}
              >
                <span>Dados &amp; Mapas</span>
                <span className="dropdown-arrow">
                  {dropdownAberto === "dados" ? "▲" : "▼"}
                </span>
              </button>

              <div
                className={`nav-dropdown-menu ${
                  dropdownAberto === "dados" ? "dropdown-aberto" : ""
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

            {/* ACÇÕES NO MENU MOBILE */}

            <div className="mobile-actions">
              <Link href="/pesquisar" onClick={fecharMenu}>
                Pesquisar
              </Link>
              <Link href="/agroia" onClick={fecharMenu}>
                AGROIA
              </Link>
            </div>
          </nav>

          {/* ACÇÕES NO COMPUTADOR */}

          <div className="header-actions">
            <Link href="/pesquisar" className="search-button">
              Pesquisar
            </Link>

            <Link href="/agroia" className="agroia-button">
              AGROIA
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
