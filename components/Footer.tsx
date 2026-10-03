import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="container">

        <div className="footer-grid">

          <div>
            <h3>AGROINOVA ANGOLA</h3>

            <p>
              Plataforma Nacional de Investigação, Conhecimento
              e Inovação Agropecuária de Angola.
            </p>

            <p>
              Conhecimento, Tecnologia e Inovação ao Serviço
              do Campo Angolano.
            </p>
          </div>

          <div>
            <h3>Plataforma</h3>

            <div className="footer-links">
              <Link href="/agricultura">Agricultura</Link>
              <Link href="/investigacao">Investigação</Link>
              <Link href="/tecnologias">Tecnologias</Link>
              <Link href="/biblioteca">Biblioteca</Link>
            </div>
          </div>

          <div>
            <h3>Recursos</h3>

            <div className="footer-links">
              <Link href="/dados">Dados agrícolas</Link>
              <Link href="/noticias">Notícias</Link>
              <Link href="/biblioteca">Publicações</Link>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} AGROINOVA ANGOLA. Todos os direitos reservados.
        </div>

      </div>

    </footer>
  );
}