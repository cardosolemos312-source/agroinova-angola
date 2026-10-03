import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">

        <Link href="/" className="logo">
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

        <nav className="main-nav">

          <Link href="/">Início</Link>

          <Link href="/agricultura">
            Agricultura
          </Link>

          <Link href="/investigacao">
            Investigação
          </Link>

          <Link href="/tecnologias">
            Tecnologias
          </Link>

          <Link href="/biblioteca">
            Biblioteca
          </Link>

          <Link href="/dados">
            Dados
          </Link>

          <Link href="/mapa">
            Mapa Agrícola
          </Link>

          <Link href="/noticias">
            Notícias
          </Link>

        </nav>

      </div>
    </header>
  );
}