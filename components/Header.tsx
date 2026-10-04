"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState<string | null>(null);

  function fecharMenu() {
    setMenuAberto(false);
    setDropdownAberto(null);
  }

  function alternarDropdown(nome: string) {
    setDropdownAberto(
      dropdownAberto === nome ? null : nome
    );
  }

  return (
    <header className="site-header">
      <div className="container header-content">

        {/* LOGÓTIPO */}
        <Link
          href="/"
          className="logo"
          onClick={fecharMenu}
        >
          <div className="logo-icon">
            🌱
          </div>

          <div className="logo-text">
            <span className="logo-title">
              AGROINOVA ANGOLA
            </span>

            <span className="logo-subtitle">
              Conhecimento • Tecnologia • Inovação
            </span>
          </div>
        </Link>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => {
            setMenuAberto(!menuAberto);
            setDropdownAberto(null);
          }}
          aria-label={
            menuAberto
              ? "Fechar menu"
              : "Abrir menu"
          }
          aria-expanded={menuAberto}
        >
          {menuAberto ? "✕" : "☰"}
        </button>

        {/* MENU */}
        <nav
          className={`main-nav ${
            menuAberto ? "mobile-menu-open" : ""
          }`}
        >

          {/* INÍCIO */}
          <Link
            href="/"
            onClick={fecharMenu}
          >
            Início
          </Link>

          {/* PRODUÇÃO */}
          <div className="nav-dropdown">

            <button
              type="button"
              className="nav-dropdown-button"
              onClick={() =>
                alternarDropdown("producao")
              }
            >
              Produção
              <span>▾</span>
            </button>

            <div
              className={`nav-dropdown-menu ${
                dropdownAberto === "producao"
                  ? "dropdown-aberto"
                  : ""
              }`}
            >
              <Link
                href="/agricultura"
                onClick={fecharMenu}
              >
                Agricultura
              </Link>

              <Link
                href="/pecuaria"
                onClick={fecharMenu}
              >
                Pecuária
              </Link>

              <Link
                href="/pesca"
                onClick={fecharMenu}
              >
                Pesca
              </Link>

              <Link
                href="/solos"
                onClick={fecharMenu}
              >
                Solos
              </Link>

              <Link
                href="/clima"
                onClick={fecharMenu}
              >
                Clima
              </Link>
            </div>
          </div>

          {/* CONHECIMENTO */}
          <div className="nav-dropdown">

            <button
              type="button"
              className="nav-dropdown-button"
              onClick={() =>
                alternarDropdown("conhecimento")
              }
            >
              Conhecimento
              <span>▾</span>
            </button>

            <div
              className={`nav-dropdown-menu ${
                dropdownAberto === "conhecimento"
                  ? "dropdown-aberto"
                  : ""
              }`}
            >
              <Link
                href="/investigacao"
                onClick={fecharMenu}
              >
                Investigação
              </Link>

              <Link
                href="/tecnologias"
                onClick={fecharMenu}
              >
                Tecnologias
              </Link>

              <Link
                href="/biblioteca"
                onClick={fecharMenu}
              >
                Biblioteca
              </Link>

              <Link
                href="/agroacademia"
                onClick={fecharMenu}
              >
                AgroAcademia
              </Link>
            </div>
          </div>

          {/* DADOS E MAPAS */}
          <div className="nav-dropdown">

            <button
              type="button"
              className="nav-dropdown-button"
              onClick={() =>
                alternarDropdown("dados")
              }
            >
              Dados & Mapas
              <span>▾</span>
            </button>

            <div
              className={`nav-dropdown-menu ${
                dropdownAberto === "dados"
                  ? "dropdown-aberto"
                  : ""
              }`}
            >
              <Link
                href="/dados"
                onClick={fecharMenu}
              >
                Dados
              </Link>

              <Link
                href="/mapa"
                onClick={fecharMenu}
              >
                Mapa Agrícola
              </Link>

              <Link
                href="/directorio"
                onClick={fecharMenu}
              >
                Directório
              </Link>

              <Link
                href="/agroia"
                onClick={fecharMenu}
              >
                AGROIA
              </Link>
            </div>
          </div>

          {/* NOTÍCIAS */}
          <Link
            href="/noticias"
            onClick={fecharMenu}
          >
            Notícias
          </Link>

        </nav>
      </div>
    </header>
  );
}