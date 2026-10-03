
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="site-header">
      <div className="container header-content">

        <Link
          href="/"
          className="logo"
          onClick={fecharMenu}
        >
          <div className="logo-icon">🌱</div>

          <div className="logo-text">
            <span className="logo-title">
              AGROINOVA ANGOLA
            </span>

            <span className="logo-subtitle">
              Conhecimento • Tecnologia • Inovação
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          {menuAberto ? "✕" : "☰"}
        </button>

        <nav
          className={`main-nav ${
            menuAberto ? "mobile-menu-open" : ""
          }`}
        >
          <Link href="/" onClick={fecharMenu}>
            Início
          </Link>

          <Link href="/agricultura" onClick={fecharMenu}>
            Agricultura
          </Link>

          <Link href="/investigacao" onClick={fecharMenu}>
            Investigação
          </Link>

          <Link href="/tecnologias" onClick={fecharMenu}>
            Tecnologias
          </Link>

          <Link href="/biblioteca" onClick={fecharMenu}>
            Biblioteca
          </Link>

          <Link href="/dados" onClick={fecharMenu}>
            Dados
          </Link>

          <Link href="/mapa" onClick={fecharMenu}>
            Mapa Agrícola
          </Link>

          <Link href="/noticias" onClick={fecharMenu}>
            Notícias
          </Link>
        </nav>

      </div>
    </header>
  );
}
