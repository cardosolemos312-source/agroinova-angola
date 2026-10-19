import type { CSSProperties } from "react";

const fotos = {
  principal: "/imagens/cenoura/cenoura-colheita.jpg",
  campo: "/imagens/cenoura/cenoura-implantacao.jpg",
  rega: "/imagens/cenoura/agricultor-irrigacao.jpg",
  colheita: "/imagens/cenoura/cenoura-colheita.jpg",
};

const indice = [
  ["botanica", "Botânica"],
  ["clima-solo", "Clima e solo"],
  ["implantacao", "Implantação"],
  ["irrigacao", "Irrigação"],
  ["nutricao", "Nutrição"],
  ["sanidade", "Pragas e doenças"],
  ["colheita", "Colheita"],
  ["pos-colheita", "Pós-colheita"],
  ["economia", "Comercialização"],
  ["bibliografia", "Referências"],
];

const metricas = [
  { valor: "70–120 dias", titulo: "Ciclo indicativo", detalhe: "Depende da cultivar e das condições de cultivo." },
  { valor: "pH 5,5–7,0", titulo: "Solo preferencial", detalhe: "Confirmar o pH com análise do solo." },
  { valor: "Humidade regular", titulo: "Gestão da água", detalhe: "Evitar alternância entre secura e excesso de água." },
  { valor: "Raiz tuberosa", titulo: "Produto comercial", detalhe: "Raiz uniforme, firme e sem deformações." },
];

const sistemas = [
  {
    nome: "Rega gota a gota",
    etiqueta: "Eficiência hídrica",
    texto:
      "Aplica água perto da linha de plantas e permite controlar a frequência e a quantidade aplicada. Pode facilitar a fertirrigação, desde que exista filtragem e manutenção adequadas.",
    vantagens: ["Reduz molhamento da folhagem", "Permite aplicação localizada", "Facilita a gestão por setores"],
    imagem: fotos.rega,
  },
  {
    nome: "Rega por aspersão",
    etiqueta: "Estabelecimento da cultura",
    texto:
      "Pode ser útil para manter húmida a camada superficial durante a germinação. A uniformidade, o vento, a qualidade da água e o risco de doenças foliares devem ser considerados.",
    vantagens: ["Pode cobrir grandes áreas", "Ajuda na emergência uniforme", "Exige avaliação da distribuição"],
    imagem: fotos.campo,
  },
];

const etapas = [
  {
    numero: "01",
    titulo: "Analisar o terreno",
    texto: "Avaliar textura, drenagem, pH, salinidade e histórico da parcela. Recolher amostras de solo antes de definir a fertilização.",
  },
  {
    numero: "02",
    titulo: "Preparar o solo",
    texto: "Descompactar e destorroar sem criar uma camada endurecida. Formar canteiros ou camalhões quando a drenagem e o sistema de produção o justificarem.",
  },
  {
    numero: "03",
    titulo: "Semear no local definitivo",
    texto: "Distribuir sementes a pouca profundidade, em linhas regulares. A profundidade e o espaçamento devem seguir as recomendações da cultivar e o equipamento utilizado.",
  },
  {
    numero: "04",
    titulo: "Garantir emergência uniforme",
    texto: "Manter a camada superficial húmida, sem encharcar. Evitar que se forme uma crosta que impeça a emergência das plântulas.",
  },
  {
    numero: "05",
    titulo: "Ajustar o povoamento",
    texto: "Quando necessário, fazer o desbaste de modo a reduzir a competição e favorecer raízes com dimensão comercial uniforme.",
  },
  {
    numero: "06",
    titulo: "Monitorizar e colher",
    texto: "Registar rega, fertilização, ocorrências fitossanitárias e desenvolvimento das raízes. Colher quando o produto atingir o padrão comercial pretendido.",
  },
];

const problemas = [
  {
    nome: "Moscas e larvas da raiz",
    sinal: "Galerias, perfurações e raízes deterioradas.",
    gestao: "Monitorizar a parcela, usar rotação de culturas, remover resíduos infestados e procurar aconselhamento fitossanitário local.",
  },
  {
    nome: "Alternariose e outras manchas foliares",
    sinal: "Manchas escuras, amarelecimento e perda de área foliar.",
    gestao: "Usar semente de qualidade, melhorar a ventilação, evitar molhamento prolongado da folhagem e confirmar o agente causador.",
  },
  {
    nome: "Nemátodes",
    sinal: "Raízes deformadas, engrossamentos e crescimento irregular.",
    gestao: "Identificar o problema por diagnóstico, planear rotações adequadas e evitar transportar solo infestado entre parcelas.",
  },
  {
    nome: "Raízes bifurcadas ou deformadas",
    sinal: "Raízes divididas, tortas ou com formatos irregulares.",
    gestao: "Reduzir pedras e torrões, evitar compactação e estrume fresco junto da cultura, e corrigir problemas de humidade.",
  },
];

const referencias = [
  {
    nome: "FAO",
    titulo: "Organização das Nações Unidas para a Alimentação e a Agricultura",
    descricao: "Portal de referência para agricultura, solos, água e sistemas alimentares.",
    url: "https://www.fao.org/",
  },
  {
    nome: "FAO AGRIS",
    titulo: "Base internacional de literatura científica agrícola",
    descricao: "Pesquisar publicações sobre Daucus carota, produção hortícola e sistemas de irrigação.",
    url: "https://agris.fao.org/",
  },
  {
    nome: "CABI",
    titulo: "Compêndios de proteção de culturas",
    descricao: "Consultar informação técnica sobre pragas, doenças e gestão fitossanitária.",
    url: "https://www.cabi.org/",
  },
  {
    nome: "CGIAR",
    titulo: "Investigação agrícola e sistemas alimentares",
    descricao: "Recursos sobre agricultura sustentável, água, resiliência e inovação.",
    url: "https://www.cgiar.org/",
  },
];

const baseCard: CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: 22,
  padding: 24,
  boxShadow: "0 8px 30px rgba(15, 60, 35, 0.045)",
};

const tituloSecao: CSSProperties = {
  color: "#123b27",
  fontSize: "clamp(1.65rem, 3vw, 2.45rem)",
  fontWeight: 800,
  lineHeight: 1.15,
  letterSpacing: "-0.04em",
};

const subtitulo: CSSProperties = {
  color: "#64748b",
  fontSize: 16,
  lineHeight: 1.8,
  maxWidth: 760,
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        borderRadius: 999,
        background: "#dcfce7",
        color: "#166534",
        padding: "7px 12px",
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: ".04em",
      }}
    >
      {children}
    </span>
  );
}

function Secao({
  id,
  numero,
  titulo,
  descricao,
  children,
}: {
  id: string;
  numero: string;
  titulo: string;
  descricao: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ scrollMarginTop: 100, marginTop: 76 }}>
      <div style={{ display: "flex", gap: 15, alignItems: "flex-start", marginBottom: 26 }}>
        <div
          style={{
            minWidth: 44,
            height: 44,
            borderRadius: 14,
            display: "grid",
            placeItems: "center",
            background: "#166534",
            color: "white",
            fontWeight: 800,
          }}
        >
          {numero}
        </div>
        <div>
          <h2 style={tituloSecao}>{titulo}</h2>
          <p style={{ ...subtitulo, marginTop: 10 }}>{descricao}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export default function CenouraPage() {
  return (
    <main style={{ background: "#f5f8f5", color: "#17221b", minHeight: "100vh" }}>
      <div
        style={{
          background: "linear-gradient(120deg, #092f1d 0%, #14532d 52%, #237443 100%)",
          color: "white",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "24px 22px 70px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <a href="/agricultura" style={{ color: "white", textDecoration: "none", fontWeight: 800 }}>
              AGROINOVA-ANGOLA <span style={{ opacity: 0.65, fontWeight: 400 }}>/ Agricultura</span>
            </a>
            <span style={{ color: "#d1fae5", fontSize: 13 }}>GUIA TÉCNICO DE CULTURA</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
              gap: 40,
              alignItems: "center",
              marginTop: 48,
            }}
          >
            <div>
              <Tag>PRODUÇÃO HORTÍCOLA</Tag>
              <p style={{ color: "#bbf7d0", marginTop: 22, fontSize: 14, fontWeight: 700 }}>
                DOS FUNDAMENTOS À COMERCIALIZAÇÃO
              </p>
              <h1
                style={{
                  fontSize: "clamp(2.7rem, 6vw, 5.2rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.06em",
                  fontWeight: 900,
                  marginTop: 12,
                  maxWidth: 650,
                }}
              >
                Cenoura:
                <br />
                do campo<br />ao mercado.
              </h1>
              <p style={{ color: "#e2f4e8", fontSize: 17, lineHeight: 1.8, maxWidth: 610, marginTop: 24 }}>
                Um guia agronómico para compreender a planta, planear a produção,
                gerir a água, proteger a cultura e conservar raízes de qualidade.
              </p>
              <p style={{ color: "#d1fae5", fontSize: 14, marginTop: 15 }}>
                <i>Daucus carota</i> L. · Família Apiaceae
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }}>
                <a
                  href="#implantacao"
                  style={{
                    padding: "13px 20px",
                    borderRadius: 12,
                    background: "#ffffff",
                    color: "#14532d",
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  Explorar o guia
                </a>
                <a
                  href="#irrigacao"
                  style={{
                    padding: "13px 20px",
                    borderRadius: 12,
                    border: "1px solid #a7f3d0",
                    color: "white",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Sistemas de irrigação
                </a>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <img
                src={fotos.principal}
                alt="Imagem ilustrativa de produtos hortícolas para a apresentação do guia da cenoura"
                style={{
                  width: "100%",
                  height: 440,
                  objectFit: "cover",
                  borderRadius: 28,
                  border: "1px solid rgba(255,255,255,.25)",
                  boxShadow: "0 30px 70px rgba(0,0,0,.25)",
                }}
              />
              <div
                style={{
                  background: "rgba(255,255,255,.96)",
                  color: "#123b27",
                  borderRadius: 18,
                  padding: 18,
                  margin: "-35px 18px 0",
                  position: "relative",
                  boxShadow: "0 15px 40px rgba(0,0,0,.15)",
                }}
              >
                <strong style={{ display: "block", fontSize: 16 }}>Conhecimento para produzir melhor</strong>
                <span style={{ display: "block", marginTop: 6, color: "#64748b", lineHeight: 1.6, fontSize: 13 }}>
                  Conteúdo de orientação. Ajustar as decisões agronómicas à análise do solo,
                  à região, à cultivar e aos recursos disponíveis.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1240, padding: "0 22px 80px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: 15,
            marginTop: 28,
          }}
        >
          {metricas.map((item) => (
            <article key={item.titulo} style={baseCard}>
              <p style={{ color: "#166534", fontSize: 21, fontWeight: 900 }}>{item.valor}</p>
              <h2 style={{ marginTop: 8, fontWeight: 800, fontSize: 15 }}>{item.titulo}</h2>
              <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.65, marginTop: 8 }}>{item.detalhe}</p>
            </article>
          ))}
        </div>

        <nav aria-label="Índice do guia da cenoura" style={{ ...baseCard, marginTop: 24, padding: 22 }}>
          <p style={{ fontWeight: 800, color: "#123b27", marginBottom: 14 }}>Navegar pelo guia</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
            {indice.map(([id, nome]) => (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  textDecoration: "none",
                  color: "#166534",
                  border: "1px solid #bbf7d0",
                  background: "#f0fdf4",
                  borderRadius: 999,
                  padding: "9px 13px",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                {nome}
              </a>
            ))}
          </div>
        </nav>

        <Secao
          id="botanica"
          numero="01"
          titulo="Botânica e características da planta"
          descricao="Conhecer a estrutura da cenoura ajuda a compreender o desenvolvimento da raiz, as necessidades de cultivo e os critérios de qualidade."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))", gap: 18 }}>
            <article style={baseCard}>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: "#14532d" }}>Classificação botânica</h3>
              <dl style={{ marginTop: 16, display: "grid", gap: 12 }}>
                {[
                  ["Nome científico", "Daucus carota L."],
                  ["Família", "Apiaceae"],
                  ["Tipo de planta", "Herbácea"],
                  ["Ciclo biológico", "Bienal; cultivada normalmente como anual para produção de raiz"],
                  ["Parte comercial", "Raiz principal engrossada"],
                  ["Reprodução", "Sementes; floração geralmente no segundo ciclo"],
                ].map(([a, b]) => (
                  <div key={a} style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: 10 }}>
                    <dt style={{ color: "#64748b", fontSize: 12, fontWeight: 700 }}>{a}</dt>
                    <dd style={{ marginTop: 4, fontWeight: 650 }}>{b}</dd>
                  </div>
                ))}
              </dl>
            </article>
            <article style={baseCard}>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: "#14532d" }}>Partes e funções</h3>
              <div style={{ display: "grid", gap: 16, marginTop: 18 }}>
                {[
                  ["Raiz", "Armazena reservas e constitui a parte comercial. Forma e cor variam conforme a cultivar."],
                  ["Folhas", "Realizam fotossíntese e contribuem para o crescimento e enchimento da raiz."],
                  ["Caule", "Permanece muito curto durante a fase vegetativa; alonga-se na fase reprodutiva."],
                  ["Flores e sementes", "As flores surgem em inflorescências em umbela; as sementes permitem a propagação da cultura."],
                ].map(([a, b]) => (
                  <div key={a} style={{ borderLeft: "3px solid #22c55e", paddingLeft: 14 }}>
                    <h4 style={{ fontWeight: 800 }}>{a}</h4>
                    <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: 14, marginTop: 4 }}>{b}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <div style={{ ...baseCard, marginTop: 18, background: "#effaf1" }}>
            <strong style={{ color: "#14532d" }}>Nota agronómica</strong>
            <p style={{ lineHeight: 1.8, marginTop: 8 }}>
              A forma da raiz depende da genética, da profundidade do solo, da presença de pedras,
              da compactação, da distribuição da água e da nutrição. Raízes deformadas não indicam
              necessariamente uma doença.
            </p>
          </div>
        </Secao>

        <Secao
          id="clima-solo"
          numero="02"
          titulo="Clima, temperatura e solo"
          descricao="A seleção da parcela e a adaptação da cultivar são decisivas. Em Angola, as condições variam com a altitude, a estação, a disponibilidade de água e o tipo de solo."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 18 }}>
            <article style={baseCard}>
              <h3 style={{ fontSize: 19, fontWeight: 800 }}>Clima</h3>
              <ul style={{ color: "#475569", lineHeight: 1.9, paddingLeft: 20, marginTop: 14 }}>
                <li>Desenvolve-se geralmente melhor em condições frescas a moderadas.</li>
                <li>Temperaturas elevadas podem prejudicar a cor, o sabor e a qualidade das raízes.</li>
                <li>O calor e a falta de água durante a germinação reduzem a emergência uniforme.</li>
                <li>Confirmar a época adequada com os dados climáticos da localidade.</li>
              </ul>
            </article>
            <article style={baseCard}>
              <h3 style={{ fontSize: 19, fontWeight: 800 }}>Solo</h3>
              <ul style={{ color: "#475569", lineHeight: 1.9, paddingLeft: 20, marginTop: 14 }}>
                <li>Preferir solos profundos, soltos, bem drenados e sem pedras.</li>
                <li>Solos franco-arenosos podem facilitar o desenvolvimento de raízes direitas.</li>
                <li>Evitar compactação, encharcamento e camadas endurecidas.</li>
                <li>Usar análise de solo para definir correções e fertilizantes.</li>
              </ul>
            </article>
          </div>
          <div style={{ ...baseCard, marginTop: 18, padding: 0, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))" }}>
              <img src={fotos.campo} alt="Paisagem agrícola ilustrativa para contextualização da preparação do terreno" style={{ width: "100%", height: "100%", minHeight: 250, objectFit: "cover" }} />
              <div style={{ padding: 25 }}>
                <Tag>APLICAÇÃO EM ANGOLA</Tag>
                <h3 style={{ fontSize: 22, fontWeight: 850, marginTop: 15 }}>Escolher a parcela certa</h3>
                <p style={{ color: "#64748b", lineHeight: 1.8, marginTop: 10 }}>
                  Em zonas de maior altitude, como partes do Planalto Central, as condições
                  podem ser favoráveis em determinadas épocas. Isso não dispensa a avaliação
                  local da temperatura, do solo, da água e da cultivar.
                </p>
                <p style={{ color: "#64748b", lineHeight: 1.8, marginTop: 10 }}>
                  Antes de investir, registar a localização, a altitude aproximada, a época,
                  a fonte de água e os resultados da análise do solo.
                </p>
              </div>
            </div>
          </div>
        </Secao>

        <Secao
          id="implantacao"
          numero="03"
          titulo="Preparação, sementeira e instalação"
          descricao="A cenoura é normalmente semeada diretamente no terreno. A qualidade do leito de sementeira influencia fortemente a emergência e a uniformidade."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 15 }}>
            {etapas.map((etapa) => (
              <article key={etapa.numero} style={baseCard}>
                <span style={{ color: "#16a34a", fontWeight: 900, fontSize: 13 }}>{etapa.numero} / OPERAÇÃO</span>
                <h3 style={{ fontSize: 18, fontWeight: 850, marginTop: 10 }}>{etapa.titulo}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: 14, marginTop: 9 }}>{etapa.texto}</p>
              </article>
            ))}
          </div>
          <div style={{ ...baseCard, marginTop: 18 }}>
            <h3 style={{ fontSize: 20, fontWeight: 850 }}>Sementes e espaçamento</h3>
            <p style={{ color: "#64748b", lineHeight: 1.8, marginTop: 10 }}>
              Selecionar sementes certificadas ou de fornecedor confiável, adequadas à época e
              ao mercado pretendido. A profundidade, a distância entre linhas, a densidade e o
              desbaste devem seguir a embalagem da cultivar e as recomendações técnicas locais.
              Não existe um único espaçamento ideal para todas as variedades e sistemas.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 12, marginTop: 18 }}>
              {[
                ["Cultivar", "Forma, cor, ciclo e resistência adequados ao mercado."],
                ["Sementeira", "Distribuição uniforme e cobertura superficial apropriada."],
                ["Emergência", "Humidade constante, sem crosta nem encharcamento."],
                ["Registo", "Data, lote de sementes, área, densidade e observações."],
              ].map(([a, b]) => (
                <div key={a} style={{ background: "#f8fafc", borderRadius: 14, padding: 16 }}>
                  <strong>{a}</strong>
                  <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7, marginTop: 6 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </Secao>

        <Secao
          id="irrigacao"
          numero="04"
          titulo="Sistemas de irrigação"
          descricao="A água deve estar disponível ao longo do ciclo, com atenção especial à germinação e ao crescimento da raiz. O sistema deve ser escolhido de acordo com a fonte de água, o terreno, a energia e o orçamento."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 290px), 1fr))", gap: 18 }}>
            {sistemas.map((sistema) => (
              <article key={sistema.nome} style={{ ...baseCard, padding: 0, overflow: "hidden" }}>
                <img src={sistema.imagem} alt={`Imagem ilustrativa relacionada com ${sistema.nome.toLowerCase()}`} style={{ width: "100%", height: 225, objectFit: "cover" }} />
                <div style={{ padding: 23 }}>
                  <Tag>{sistema.etiqueta}</Tag>
                  <h3 style={{ fontSize: 21, fontWeight: 850, marginTop: 13 }}>{sistema.nome}</h3>
                  <p style={{ color: "#64748b", lineHeight: 1.8, marginTop: 10 }}>{sistema.texto}</p>
                  <ul style={{ paddingLeft: 19, marginTop: 12, lineHeight: 1.9, color: "#475569" }}>
                    {sistema.vantagens.map((vantagem) => <li key={vantagem}>{vantagem}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div style={{ ...baseCard, marginTop: 18, borderLeft: "5px solid #16a34a" }}>
            <h3 style={{ fontSize: 20, fontWeight: 850 }}>Como decidir quando regar?</h3>
            <p style={{ color: "#64748b", lineHeight: 1.8, marginTop: 10 }}>
              Avaliar a humidade do solo, a fase da cultura, o tipo de terreno, a evaporação,
              a chuva e a uniformidade do sistema. Sensores de humidade e medição do caudal
              podem melhorar as decisões. A quantidade de água não deve ser fixada sem conhecer
              a parcela e as condições meteorológicas.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))", gap: 12, marginTop: 17 }}>
              {[
                ["Fonte", "Poço, furo, reservatório ou outra fonte; avaliar disponibilidade e qualidade."],
                ["Bomba e filtro", "Dimensionar conforme caudal, pressão e sistema instalado."],
                ["Distribuição", "Verificar fugas, entupimentos e uniformidade."],
                ["Manutenção", "Limpar filtros e inspecionar tubos e emissores."],
              ].map(([a, b]) => (
                <div key={a} style={{ background: "#f0fdf4", padding: 15, borderRadius: 13 }}>
                  <strong style={{ color: "#14532d" }}>{a}</strong>
                  <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7, marginTop: 6 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </Secao>

        <Secao
          id="nutricao"
          numero="05"
          titulo="Fertilidade e nutrição"
          descricao="A fertilização deve ser baseada na análise do solo, na produtividade pretendida, na cultivar e na disponibilidade de água. O excesso de nutrientes também pode prejudicar a qualidade."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))", gap: 15 }}>
            {[
              ["Azoto (N)", "Necessário ao crescimento das folhas, mas em excesso pode favorecer a folhagem em detrimento da qualidade da raiz."],
              ["Fósforo (P)", "Participa no metabolismo e no desenvolvimento inicial; a disponibilidade depende também do pH."],
              ["Potássio (K)", "Importante para o equilíbrio hídrico e vários processos fisiológicos da planta."],
              ["Matéria orgânica", "Composto bem maturado pode melhorar a estrutura do solo; evitar incorporar estrume fresco próximo da cultura."],
            ].map(([a, b]) => (
              <article key={a} style={baseCard}>
                <h3 style={{ color: "#166534", fontSize: 18, fontWeight: 850 }}>{a}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: 14, marginTop: 10 }}>{b}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 17, color: "#64748b", lineHeight: 1.8, fontSize: 14 }}>
            Não aplicar doses universais de fertilizante sem diagnóstico. Registar os produtos,
            quantidades, datas e parcelas, e respeitar as instruções do fabricante e as regras
            de segurança aplicáveis.
          </p>
        </Secao>

        <Secao
          id="sanidade"
          numero="06"
          titulo="Pragas, doenças e problemas fisiológicos"
          descricao="A identificação correta vem antes de qualquer tratamento. Integrar prevenção, observação frequente e intervenção justificada."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 15 }}>
            {problemas.map((problema) => (
              <article key={problema.nome} style={baseCard}>
                <h3 style={{ fontSize: 18, fontWeight: 850, color: "#14532d" }}>{problema.nome}</h3>
                <p style={{ marginTop: 12, fontSize: 13, fontWeight: 800 }}>Sinais a observar</p>
                <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: 14, marginTop: 4 }}>{problema.sinal}</p>
                <p style={{ marginTop: 13, fontSize: 13, fontWeight: 800 }}>Gestão preventiva</p>
                <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: 14, marginTop: 4 }}>{problema.gestao}</p>
              </article>
            ))}
          </div>
          <div style={{ ...baseCard, marginTop: 18, background: "#fff7ed", borderColor: "#fed7aa" }}>
            <strong style={{ color: "#9a3412" }}>Segurança fitossanitária</strong>
            <p style={{ color: "#7c2d12", lineHeight: 1.8, marginTop: 8 }}>
              Não escolher pesticidas apenas pelo nome de uma praga. Confirmar o diagnóstico,
              verificar se o produto está autorizado para a cultura e para o problema identificado,
              e cumprir o rótulo, os equipamentos de proteção e o intervalo de segurança antes da colheita.
            </p>
          </div>
        </Secao>

        <Secao
          id="colheita"
          numero="07"
          titulo="Colheita manual e mecanizada"
          descricao="A colheita deve preservar a integridade da raiz e reduzir ferimentos, quebras e exposição desnecessária ao sol."
        >
          <div style={{ ...baseCard, padding: 0, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))" }}>
              <img src={fotos.colheita} alt="Imagem ilustrativa de raízes de cenoura colhidas" style={{ width: "100%", height: "100%", minHeight: 300, objectFit: "cover" }} />
              <div style={{ padding: 25 }}>
                <h3 style={{ fontSize: 22, fontWeight: 850 }}>Colheita manual</h3>
                <p style={{ color: "#64748b", lineHeight: 1.8, marginTop: 10 }}>
                  Adequada a pequenas parcelas e operações que exigem seleção cuidadosa.
                  O solo pode ser ligeiramente humedecido quando apropriado para facilitar a
                  extração. Evitar puxar de forma a partir as raízes e não lançar o produto.
                </p>
                <h3 style={{ fontSize: 22, fontWeight: 850, marginTop: 25 }}>Colheita mecanizada</h3>
                <p style={{ color: "#64748b", lineHeight: 1.8, marginTop: 10 }}>
                  Pode aumentar a capacidade de trabalho em áreas maiores. Exige equipamento
                  compatível com o tipo de canteiro, espaçamento, textura e humidade do solo.
                  A velocidade, a profundidade de trabalho e os pontos de transferência devem
                  ser ajustados para limitar danos.
                </p>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 14, marginTop: 16 }}>
            {[
              ["Indicador de maturidade", "Diâmetro e comprimento da raiz, cor, firmeza e padrão pedido pelo comprador."],
              ["Planeamento", "Preparar mão de obra, caixas, transporte e destino antes de iniciar."],
              ["Manuseamento", "Evitar quedas, compressão, cortes e exposição prolongada ao sol."],
            ].map(([a, b]) => (
              <article key={a} style={baseCard}>
                <h3 style={{ fontWeight: 850 }}>{a}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: 14, marginTop: 8 }}>{b}</p>
              </article>
            ))}
          </div>
        </Secao>

        <Secao
          id="pos-colheita"
          numero="08"
          titulo="Pós-colheita, armazenamento e transporte"
          descricao="O valor comercial depende também da higiene, da temperatura, da humidade, da ventilação e da rapidez com que o produto chega ao mercado."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 15 }}>
            {[
              ["Receção e seleção", "Separar raízes partidas, deterioradas, doentes ou fora do padrão comercial."],
              ["Limpeza", "Remover o solo com método adequado ao destino. Se houver lavagem, usar água de qualidade e condições higiénicas."],
              ["Pré-arrefecimento", "Quando existe infraestrutura, retirar rapidamente o calor do campo e reduzir a perda de água."],
              ["Armazenamento", "A cenoura costuma conservar-se melhor perto de 0 °C e com humidade relativa elevada, aproximadamente 98–100%, quando a cadeia de frio e o controlo sanitário são adequados."],
              ["Transporte", "Usar recipientes limpos, ventilação adequada e proteção contra sol, calor e esmagamento."],
              ["Rastreabilidade", "Registar lote, parcela, data de colheita, operações realizadas e destino comercial."],
            ].map(([a, b]) => (
              <article key={a} style={baseCard}>
                <h3 style={{ fontWeight: 850, color: "#14532d" }}>{a}</h3>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.8, marginTop: 9 }}>{b}</p>
              </article>
            ))}
          </div>
          <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.8, marginTop: 16 }}>
            A temperatura de conservação indicada exige equipamento e monitorização apropriados.
            Sem cadeia de frio, priorizar sombra, higiene, ventilação e venda rápida, sem assumir
            que estas medidas substituem a refrigeração.
          </p>
        </Secao>

        <Secao
          id="economia"
          numero="09"
          titulo="Comercialização e gestão económica"
          descricao="A rentabilidade deve ser calculada com dados reais da exploração, incluindo os custos de água, energia, sementes, mão de obra, fertilização, transporte e perdas."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: 15 }}>
            {[
              ["Antes de plantar", "Consultar compradores, preços locais, calibres exigidos, embalagens e procura sazonal."],
              ["Durante a produção", "Registar custos, horas de trabalho, consumo de água, aplicações e incidências."],
              ["Na venda", "Classificar o produto, negociar quantidades e condições de entrega, e conservar registos."],
              ["Após a campanha", "Calcular produção comercializável, perdas, custo por quilograma e margem obtida."],
            ].map(([a, b]) => (
              <article key={a} style={baseCard}>
                <h3 style={{ fontWeight: 850, fontSize: 17 }}>{a}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.8, marginTop: 9, fontSize: 14 }}>{b}</p>
              </article>
            ))}
          </div>
          <div style={{ ...baseCard, marginTop: 18, background: "#123b27", color: "white" }}>
            <h3 style={{ fontSize: 22, fontWeight: 850 }}>Modelo simples de cálculo</h3>
            <p style={{ color: "#d1fae5", lineHeight: 1.8, marginTop: 10 }}>
              Receita bruta = quilogramas vendidos × preço médio por quilograma.
              Margem operacional simplificada = receita bruta − custos registados.
            </p>
            <p style={{ color: "#bbf7d0", fontSize: 13, lineHeight: 1.8, marginTop: 10 }}>
              Incluir todos os custos relevantes e distinguir receita, margem e lucro líquido.
              Não usar preços ou rendimentos estimados como se fossem valores oficiais de Angola.
            </p>
          </div>
        </Secao>

        <Secao
          id="bibliografia"
          numero="10"
          titulo="Biblioteca técnica e referências"
          descricao="Consultar fontes institucionais e literatura científica para aprofundar as recomendações e validar a sua aplicação em Angola."
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: 15 }}>
            {referencias.map((ref) => (
              <article key={ref.nome} style={baseCard}>
                <p style={{ color: "#16a34a", fontSize: 12, fontWeight: 900 }}>{ref.nome}</p>
                <h3 style={{ fontWeight: 850, fontSize: 17, marginTop: 8 }}>{ref.titulo}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: 14, marginTop: 9 }}>{ref.descricao}</p>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-block", marginTop: 15, color: "#166534", fontWeight: 800, fontSize: 13 }}
                >
                  Consultar fonte externa →
                </a>
              </article>
            ))}
          </div>
          <div style={{ ...baseCard, marginTop: 18 }}>
            <h3 style={{ fontSize: 19, fontWeight: 850 }}>Pesquisa académica recomendada</h3>
            <p style={{ color: "#64748b", lineHeight: 1.8, marginTop: 8 }}>
              Para localizar estudos específicos, pesquisar nas bases académicas pelos termos
              <i> Daucus carota L.</i>, produção de cenoura, irrigação localizada, conservação
              pós-colheita e horticultura tropical. Registar autores, ano, título, revista e DOI
              sempre que disponíveis antes de citar um trabalho numa publicação científica.
            </p>
          </div>
        </Secao>

        <footer style={{ marginTop: 76, padding: "30px 0 10px", borderTop: "1px solid #dbe5dc" }}>
          <p style={{ fontWeight: 900, color: "#14532d" }}>AGROINOVA-ANGOLA</p>
          <p style={{ color: "#64748b", marginTop: 8, lineHeight: 1.8, fontSize: 13 }}>
            Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
          </p>
          <p style={{ color: "#64748b", marginTop: 8, lineHeight: 1.8, fontSize: 12 }}>
            Guia de orientação técnica. As recomendações devem ser adaptadas à região,
            à análise do solo, à cultivar e às condições da exploração. As imagens são
            ilustrativas e não devem ser interpretadas como registos documentais de Angola.
          </p>
          <a href="/agricultura" style={{ display: "inline-block", marginTop: 15, color: "#166534", fontWeight: 800 }}>
            ← Voltar ao catálogo de Agricultura
          </a>
        </footer>
      </div>
    </main>
  );
}