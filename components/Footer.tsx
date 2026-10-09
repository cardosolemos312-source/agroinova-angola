
import Link from "next/link";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <>
      <footer className="agro-footer">
        <div className="footer-horizontal">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              AGROINOVA<span>-ANGOLA</span>
            </Link>
            <p>Conhecimento, tecnologia e inovação para o sector agropecuário angolano.</p>
          </div>

          <div className="footer-column">
            <h3>Plataforma</h3>
            <div className="footer-links">
              <Link href="/">Início</Link>
              <Link href="/agricultura">Agricultura</Link>
              <Link href="/floresta">Floresta</Link>
              <Link href="/silvicultura">Silvicultura</Link>
              <Link href="/pecuaria">Pecuária</Link>
              <Link href="/pesca">Pesca</Link>
              <Link href="/solos">Solos</Link>
              <Link href="/clima">Clima</Link>
            </div>
          </div>

          <div className="footer-column">
            <h3>Recursos</h3>
            <div className="footer-links">
              <Link href="/investigacao">Investigação</Link>
              <Link href="/tecnologias">Tecnologias</Link>
              <Link href="/biblioteca">Biblioteca</Link>
              <Link href="/agroacademia">AgroAcademia</Link>
              <Link href="/dados">Dados agrícolas</Link>
              <Link href="/mapa">Mapa agrícola</Link>
              <Link href="/directorio">Directório</Link>
              <Link href="/agroia">AGROIA</Link>
              <Link href="/noticias">Notícias</Link>
            </div>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contactos</h3>
            <p>
              <a href="tel:+24493932919">+244 939 329 199</a>
            </p>
            <p>
              <a href="tel:+244953694214">+244 953 694 214</a>
            </p>
            <p>
              <a href="tel:+244933395847">+244 933 395 847</a>
            </p>
            <p>
              <a href="mailto:cardosolemos312@gmail.com">
                cardosolemos312@gmail.com
              </a>
            </p>
            <p>
              <a href="mailto:agroinovagola@ango.com">
                agroinovagola@ango.com
              </a>
            </p>
          </div>

          <div className="footer-column footer-developer">
            <h3>Desenvolvimento</h3>
            <h4>Cardoso Lemos</h4>
            <p>Programador e Desenvolvedor Web</p>
            <p className="footer-company">CJSL-SOLUÇÕES DIGITAIS</p>
            <p>CENFOTEP · ASUS-FILMES</p>
            <a
              className="footer-button"
              href="mailto:cardosolemos312@gmail.com"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="footer-social">
          <span>Acompanhe a AGROINOVA-ANGOLA:</span>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div className="footer-bottom">
          <span>© {ano} AGROINOVA-ANGOLA. Todos os direitos reservados.</span>
          <span>Desenvolvido por <strong>CJSL-SOLUÇÕES DIGITAIS</strong></span>
        </div>
      </footer>

      <style>{`
        .agro-footer,
        .agro-footer * {
          box-sizing: border-box;
        }

        .agro-footer {
          --green: #00bd86;
          --gold: #f7b928;
          width: 100%;
          background: #10251d;
          color: #fff;
          border-top: 4px solid var(--green);
          font-family: Arial, Helvetica, sans-serif;
        }

        .footer-horizontal {
          width: 96%;
          max-width: 1600px;
          margin: auto;
          padding: 35px 0;
          display: grid;
          grid-template-columns: 1.25fr 1fr 1fr 1.35fr 1.3fr;
          gap: 24px;
          align-items: start;
        }

        .footer-brand,
        .footer-column {
          min-width: 0;
        }

        .footer-logo {
          display: inline-block;
          margin-bottom: 12px;
          color: #fff;
          font-size: 21px;
          font-weight: 900;
          text-decoration: none;
        }

        .footer-logo span {
          color: var(--green);
        }

        .agro-footer p {
          margin: 7px 0;
          color: #c2d0c7;
          font-size: 12px;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .footer-column h3 {
          margin: 0 0 14px;
          padding-bottom: 9px;
          border-bottom: 2px solid var(--green);
          color: #fff;
          font-size: 14px;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 12px;
        }

        .footer-links a,
        .footer-contact a {
          color: #c2d0c7;
          font-size: 12px;
          line-height: 1.6;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .footer-links a:hover,
        .footer-contact a:hover,
        .footer-social a:hover {
          color: var(--green);
        }

        .footer-developer h4 {
          margin: 0 0 6px;
          color: var(--gold);
          font-size: 16px;
        }

        .footer-company {
          color: var(--green) !important;
          font-weight: 800;
        }

        .footer-button {
          display: inline-block;
          margin-top: 8px;
          padding: 8px 15px;
          border: 1px solid var(--green);
          border-radius: 20px;
          color: #fff;
          font-size: 12px;
          text-decoration: none;
        }

        .footer-button:hover {
          background: var(--green);
          color: #10251d;
        }

        .footer-social {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px 20px;
          padding: 16px 3%;
          border-top: 1px solid #31443a;
          border-bottom: 1px solid #31443a;
        }

        .footer-social span {
          color: #fff;
          font-size: 12px;
          font-weight: 700;
        }

        .footer-social a {
          color: #c2d0c7;
          font-size: 12px;
          text-decoration: none;
        }

        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px 20px;
          padding: 15px 3%;
          background: #0b1b14;
          color: #c2d0c7;
          font-size: 11px;
        }

        .footer-bottom strong {
          color: var(--green);
        }

        @media (max-width: 1100px) {
          .footer-horizontal {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .footer-horizontal {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px 16px;
            padding: 28px 0;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 380px) {
          .footer-horizontal {
            grid-template-columns: 1fr;
          }

          .footer-brand {
            grid-column: auto;
          }
        }
      `}</style>
    </>
  );
}
