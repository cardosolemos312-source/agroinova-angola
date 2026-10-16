
"use client";

import { useMemo, useState } from "react";

type Flor = {
  nome: string;
  nomeCientifico: string;
  grupo: string;
  imagem: string;
  descricao: string;
  condicoes: string;
  utilizacao: string;
};

const flores: Flor[] = [
  {
    nome: "Rosa",
    nomeCientifico: "Rosa × hybrida",
    grupo: "Flores de corte",
    imagem:
      "https://www.agroberichtenbuitenland.nl/_next/image?q=70&url=https%3A%2F%2Fwww.agroberichtenbuitenland.nl%2Fsite%2Fbinaries%2Fcontent%2Fgallery%2Fsite-content%2Fcontent-afbeeldingen%2Fs%2Fservie%2F2023_nieuws%2Frose-farm-serbia.jpg&w=2560",
    descricao:
      "A roseira apresenta elevada diversidade de cultivares, cores, formas e comprimentos de haste. A produção comercial exige seleção varietal, poda, nutrição equilibrada e controlo fitossanitário.",
    condicoes:
      "Exige boa luminosidade, solo ou substrato bem drenado e disponibilidade regular de água. A temperatura influencia o desenvolvimento, a qualidade da haste e a formação dos botões.",
    utilizacao: "Ramos, floristas, decoração e eventos.",
  },
  {
    nome: "Crisântemo",
    nomeCientifico: "Chrysanthemum × morifolium",
    grupo: "Flores de corte",
    imagem:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1000&q=85",
    descricao:
      "Espécie ornamental com numerosas cultivares, incluindo flores simples, decorativas e do tipo pompom. A resposta ao fotoperíodo é importante no planeamento da floração.",
    condicoes:
      "Requer boa luminosidade, drenagem adequada e gestão da duração do dia conforme a cultivar e o sistema de produção.",
    utilizacao: "Ramos, decoração e venda em vasos.",
  },
  {
    nome: "Gerbera",
    nomeCientifico: "Gerbera jamesonii e híbridos",
    grupo: "Flores de corte",
    imagem:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1000&q=85",
    descricao:
      "A gerbera distingue-se pelas inflorescências vistosas e pela diversidade cromática. A qualidade comercial depende da firmeza das hastes e do estado sanitário das plantas.",
    condicoes:
      "Prefere substrato arejado, drenagem eficiente, rega controlada e condições que reduzam a ocorrência de doenças na zona radicular.",
    utilizacao: "Ramos, decoração e floricultura comercial.",
  },
  {
    nome: "Cravo",
    nomeCientifico: "Dianthus caryophyllus",
    grupo: "Flores de corte",
    imagem:
      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=1000&q=85",
    descricao:
      "O cravo apresenta flores de diferentes cores e formas. A propagação por estacas permite manter características desejáveis de cultivares selecionadas.",
    condicoes:
      "Necessita de boa luminosidade, ventilação, solo drenado e controlo de doenças e pragas.",
    utilizacao: "Ramos, cerimónias, floristas e decoração.",
  },
  {
    nome: "Gladíolo",
    nomeCientifico: "Gladiolus spp.",
    grupo: "Flores de corte",
    imagem:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85",
    descricao:
      "Planta ornamental cultivada a partir de estruturas subterrâneas designadas cormos. Produz hastes florais alongadas, adequadas à comercialização em corte.",
    condicoes:
      "Precisa de solo bem drenado, luminosidade suficiente e calendarização de plantio compatível com o clima local.",
    utilizacao: "Hastes de corte, decoração e eventos.",
  },
  {
    nome: "Lírio",
    nomeCientifico: "Lilium spp.",
    grupo: "Flores de corte",
    imagem:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1000&q=85",
    descricao:
      "O género Lilium inclui espécies e híbridos com diferentes cores, dimensões e aromas. A escolha dos híbridos determina parte importante das necessidades de cultivo.",
    condicoes:
      "Exige escolha criteriosa da cultivar, substrato drenado, água de qualidade e condições térmicas adequadas ao material vegetal.",
    utilizacao: "Ramos, decoração e floricultura especializada.",
  },
  {
    nome: "Orquídeas",
    nomeCientifico: "Orchidaceae",
    grupo: "Plantas ornamentais",
    imagem:
      "https://images.unsplash.com/photo-1566907225472-514a4b9e5bf4?auto=format&fit=crop&w=1000&q=85",
    descricao:
      "A família Orchidaceae reúne plantas terrestres e epífitas. As exigências de luz, humidade e substrato variam consideravelmente entre géneros e espécies.",
    condicoes:
      "O substrato deve ser selecionado segundo a espécie. Muitas orquídeas epífitas necessitam de elevada aeração radicular e rega ajustada à secagem do substrato.",
    utilizacao: "Vasos, colecionismo e decoração.",
  },
  {
    nome: "Antúrio",
    nomeCientifico: "Anthurium andraeanum e híbridos",
    grupo: "Plantas ornamentais",
    imagem:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=1000&q=85",
    descricao:
      "O antúrio é valorizado pelas inflorescências ornamentais e pela possibilidade de produção em vaso ou para corte, conforme a cultivar e o sistema adotado.",
    condicoes:
      "Em muitos sistemas comerciais, beneficia de luz filtrada, humidade adequada, substrato arejado e proteção contra condições extremas.",
    utilizacao: "Interiores, vasos e flores de corte.",
  },
  {
    nome: "Petúnia",
    nomeCientifico: "Petunia × hybrida",
    grupo: "Plantas ornamentais",
    imagem:
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=1000&q=85",
    descricao:
      "Planta ornamental utilizada em canteiros, vasos e cestos suspensos. A seleção de cultivares deve considerar a resposta ao calor, à chuva e ao regime de manutenção.",
    condicoes:
      "Em geral, necessita de boa luminosidade, substrato drenado, nutrição equilibrada e remoção de flores deterioradas quando apropriado.",
    utilizacao: "Jardins, varandas, parques e viveiros.",
  },
  {
    nome: "Tagetes",
    nomeCientifico: "Tagetes spp.",
    grupo: "Plantas ornamentais",
    imagem:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1000&q=85",
    descricao:
      "O género Tagetes inclui espécies anuais com flores amarelas e alaranjadas, utilizadas em jardins e canteiros ornamentais.",
    condicoes:
      "A adaptação depende da espécie e cultivar. São importantes a drenagem, a luminosidade e a gestão de pragas.",
    utilizacao: "Canteiros, jardins e ornamentação paisagística.",
  },
  {
    nome: "Hortênsia",
    nomeCientifico: "Hydrangea macrophylla",
    grupo: "Plantas ornamentais",
    imagem:
      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=1000&q=85",
    descricao:
      "Arbusto ornamental de inflorescências volumosas. Em determinadas cultivares, a cor pode responder à disponibilidade de alumínio e à reação química do substrato.",
    condicoes:
      "A escolha do local deve considerar temperatura, humidade, proteção solar e necessidades específicas da cultivar.",
    utilizacao: "Jardins, vasos e arranjos florais.",
  },
  {
    nome: "Girassol ornamental",
    nomeCientifico: "Helianthus annuus",
    grupo: "Flores de corte",
    imagem:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85",
    descricao:
      "Existem cultivares selecionadas para fins ornamentais, incluindo plantas de diferentes alturas e inflorescências. O ciclo e o porte dependem do material genético e do ambiente.",
    condicoes:
      "Necessita de luminosidade, espaço radicular, drenagem e água suficiente durante as fases críticas de crescimento.",
    utilizacao: "Hastes de corte, decoração e jardins.",
  },
];

const regioes = [
  {
    nome: "Huambo e Bié",
    perfil: "Planalto e zonas de altitude",
    texto:
      "As condições térmicas locais, a disponibilidade de água, a exposição solar e a ocorrência de geadas ou frio em determinados locais devem ser avaliadas antes da seleção de cultivares. Viveiros-piloto podem ajudar a comparar espécies e épocas de produção.",
    potencial: "Avaliação de flores de corte e viveiros",
  },
  {
    nome: "Huíla",
    perfil: "Planalto e diversidade de ambientes",
    texto:
      "A diversidade de altitude e de condições locais pode justificar ensaios com espécies ornamentais. A sazonalidade da precipitação e a disponibilidade de água para rega são critérios centrais na seleção dos locais.",
    potencial: "Ensaios de adaptação e produção ornamental",
  },
  {
    nome: "Benguela",
    perfil: "Litoral e ambientes costeiros",
    texto:
      "Em zonas costeiras, a temperatura, a humidade, o vento, a salinidade da água e a evapotranspiração devem ser considerados. A produção protegida e a irrigação eficiente podem ser relevantes, dependendo do local.",
    potencial: "Viveiros, plantas ornamentais e mercado urbano",
  },
  {
    nome: "Cuanza-Sul",
    perfil: "Diversidade de altitude e precipitação",
    texto:
      "A variação entre zonas costeiras e interiores exige avaliação local. A escolha das espécies deve ter em conta o microclima, a drenagem, as doenças favorecidas pela humidade e o acesso aos mercados.",
    potencial: "Produção diversificada e viveiros",
  },
  {
    nome: "Luanda e principais centros urbanos",
    perfil: "Mercado, distribuição e consumo",
    texto:
      "A concentração de consumidores, floristas, empresas e eventos pode representar uma oportunidade comercial. A produção local depende, contudo, da disponibilidade de terreno, água de qualidade, energia e sistemas de cultivo apropriados.",
    potencial: "Viveiros comerciais e distribuição",
  },
  {
    nome: "Outras províncias",
    perfil: "Seleção baseada em condições locais",
    texto:
      "Em qualquer província, a viabilidade deve ser determinada através de análises de solo e água, registos climáticos, ensaios com cultivares e estudo do mercado. Não se deve inferir produção comercial apenas a partir da aptidão agroecológica.",
    potencial: "Ensaios-piloto e identificação de oportunidades",
  },
];

const solos = [
  {
    nome: "Solo arenoso",
    perfil: "Drenagem geralmente rápida",
    texto:
      "Apresenta elevada proporção de partículas grosseiras. Pode perder água e nutrientes por lixiviação, exigindo gestão cuidadosa da rega, fertilização fracionada e incorporação criteriosa de matéria orgânica.",
    uso: "Pode ser usado com manejo de água e nutrientes adequado.",
  },
  {
    nome: "Solo franco-arenoso",
    perfil: "Textura relativamente leve",
    texto:
      "Combina areia com proporções de silte e argila. Pode facilitar a drenagem e a exploração radicular, mas a capacidade de retenção de água varia com a composição e a estrutura.",
    uso: "Frequentemente útil para canteiros e viveiros bem manejados.",
  },
  {
    nome: "Solo franco",
    perfil: "Equilíbrio relativo entre partículas",
    texto:
      "A textura franca pode combinar retenção de água, aeração e facilidade de mobilização. A estrutura, a matéria orgânica, a profundidade e a drenagem continuam a determinar a qualidade agronómica.",
    uso: "Pode ser favorável a muitas culturas ornamentais.",
  },
  {
    nome: "Solo franco-argiloso",
    perfil: "Maior retenção de água",
    texto:
      "A proporção mais elevada de argila tende a aumentar a retenção de água e nutrientes, mas pode limitar a aeração e a drenagem quando a estrutura é deficiente.",
    uso: "Exige avaliação de drenagem e estrutura antes do plantio.",
  },
  {
    nome: "Solo argiloso",
    perfil: "Partículas finas e maior coesão",
    texto:
      "Pode reter água e nutrientes, mas também ficar encharcado ou compactado. A preparação de canteiros elevados ou a utilização de substratos específicos pode ser necessária para espécies sensíveis.",
    uso: "A adequação depende da estrutura, drenagem e espécie.",
  },
  {
    nome: "Substratos de viveiro",
    perfil: "Misturas formuladas para recipientes",
    texto:
      "Podem combinar materiais orgânicos estabilizados e componentes minerais para equilibrar a retenção de água, a aeração, a estabilidade e a disponibilidade de nutrientes. A composição deve ser adequada à espécie.",
    uso: "Vasos, bandejas de propagação e produção protegida.",
  },
];

const etapas = [
  {
    titulo: "1. Seleção do local",
    texto:
      "Avaliar clima, luminosidade, disponibilidade e qualidade da água, acesso a vias de transporte, energia e proximidade dos mercados.",
  },
  {
    titulo: "2. Análise de solo e água",
    texto:
      "Solicitar análise laboratorial de textura, pH, salinidade e nutrientes, além da qualidade da água de rega. Não existe um valor único ideal para todas as espécies.",
  },
  {
    titulo: "3. Propagação e material vegetal",
    texto:
      "Selecionar sementes, estacas, mudas ou estruturas vegetativas de origem conhecida e com estado fitossanitário adequado.",
  },
  {
    titulo: "4. Maneio da cultura",
    texto:
      "Ajustar rega, fertilização, poda, tutoragem, densidade e controlo integrado de pragas às necessidades da espécie e da cultivar.",
  },
  {
    titulo: "5. Colheita e pós-colheita",
    texto:
      "Definir o estádio de colheita, reduzir danos mecânicos, higienizar recipientes e assegurar condições adequadas de conservação e transporte.",
  },
];

const mercadoMundial = [
  { pais: "Países Baixos", valor: "4,94 mil milhões USD" },
  { pais: "Colômbia", valor: "2,33 mil milhões USD" },
  { pais: "Equador", valor: "931 milhões USD" },
  { pais: "Quénia", valor: "720 milhões USD" },
];

const imagemSolo =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85";

export default function FloriculturaPage() {
  const [termo, setTermo] = useState("");
  const [grupo, setGrupo] = useState("Todas");
  const [florSelecionada, setFlorSelecionada] = useState<Flor | null>(null);
  const [secaoAtiva, setSecaoAtiva] = useState("variedades");

  const grupos = ["Todas", "Flores de corte", "Plantas ornamentais"];

  const floresFiltradas = useMemo(() => {
    const pesquisa = termo
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("pt");

    return flores.filter((flor) => {
      const texto = `${flor.nome} ${flor.nomeCientifico} ${flor.grupo} ${flor.descricao}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase("pt");

      return (
        (grupo === "Todas" || flor.grupo === grupo) &&
        (!pesquisa || texto.includes(pesquisa))
      );
    });
  }, [termo, grupo]);

  function navegarPara(id: string) {
    setSecaoAtiva(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="flori-page">
      <style jsx global>{`
        .flori-page,
        .flori-page * {
          box-sizing: border-box;
        }

        .flori-page {
          --fl-verde: #166534;
          --fl-escuro: #14532d;
          --fl-lima: #22c55e;
          --fl-fundo: #f0fdf4;
          --fl-texto: #17221b;
          --fl-cinza: #64748b;
          background: #fff;
          color: var(--fl-texto);
          font-family: Arial, Helvetica, sans-serif;
        }

        .flori-page img {
          display: block;
          width: 100%;
          object-fit: cover;
        }

        .flori-hero {
          position: relative;
          isolation: isolate;
          min-height: 490px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #123d27;
        }

        .flori-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -2;
        }

        .flori-hero-bg img {
          height: 100%;
          min-height: 490px;
          object-position: center 48%;
        }

        .flori-hero::after {
          position: absolute;
          inset: 0;
          z-index: -1;
          content: "";
          background: linear-gradient(
            90deg,
            rgba(8, 43, 25, 0.94) 0%,
            rgba(8, 43, 25, 0.78) 48%,
            rgba(8, 43, 25, 0.16) 100%
          );
        }

        .flori-hero-inner {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          padding: 75px 0;
        }

        .flori-kicker {
          display: inline-block;
          padding: 8px 13px;
          border: 1px solid rgba(187, 247, 208, 0.45);
          border-radius: 30px;
          background: rgba(22, 101, 52, 0.5);
          color: #dcfce7;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .flori-hero h1 {
          max-width: 790px;
          margin: 23px 0 17px;
          color: #fff;
          font-size: clamp(37px, 6vw, 67px);
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 1.04;
        }

        .flori-hero p {
          max-width: 720px;
          margin: 0;
          color: #e5f4e8;
          font-size: 17px;
          line-height: 1.9;
        }

        .flori-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 27px;
        }

        .flori-btn {
          min-height: 46px;
          padding: 13px 18px;
          border: 1px solid transparent;
          border-radius: 10px;
          background: #22c55e;
          color: #103d23;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s;
        }

        .flori-btn:hover {
          transform: translateY(-2px);
          background: #86efac;
        }

        .flori-btn-outline {
          border-color: rgba(255, 255, 255, 0.65);
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }

        .flori-btn-outline:hover {
          background: rgba(255, 255, 255, 0.18);
        }

        .flori-subnav {
          position: sticky;
          top: 0;
          z-index: 30;
          display: flex;
          gap: 5px;
          overflow-x: auto;
          padding: 10px max(20px, calc((100vw - 1180px) / 2));
          border-bottom: 1px solid #e2e8f0;
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 5px 18px rgba(15, 23, 42, 0.035);
          backdrop-filter: blur(12px);
        }

        .flori-subnav button {
          flex-shrink: 0;
          padding: 11px 14px;
          border: 0;
          border-radius: 9px;
          background: transparent;
          color: #52665a;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .flori-subnav button:hover,
        .flori-subnav button.active {
          background: #dcfce7;
          color: #14532d;
        }

        .flori-section {
          scroll-margin-top: 75px;
          padding: 68px 24px;
        }

        .flori-section.soft {
          background: linear-gradient(180deg, #f0fdf4, #fff);
        }

        .flori-container {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .flori-section-head {
          max-width: 850px;
          margin-bottom: 30px;
        }

        .flori-label {
          display: block;
          margin-bottom: 10px;
          color: #15803d;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .flori-section h2 {
          margin: 0 0 14px;
          color: #14532d;
          font-size: clamp(27px, 4vw, 39px);
          font-weight: 900;
          letter-spacing: -1px;
          line-height: 1.16;
        }

        .flori-section-head > p {
          margin: 0;
          color: #64748b;
          font-size: 15px;
          line-height: 1.9;
        }

        .flori-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
          margin-top: -28px;
          position: relative;
          z-index: 5;
        }

        .flori-stat {
          padding: 23px;
          border: 1px solid #dcece0;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 10px 30px rgba(22, 101, 52, 0.07);
        }

        .flori-stat strong {
          display: block;
          margin-bottom: 8px;
          color: #166534;
          font-size: 23px;
          font-weight: 900;
        }

        .flori-stat span {
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
        }

        .flori-filterbar {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 25px;
        }

        .flori-filterbar input,
        .flori-filterbar select {
          min-height: 47px;
          padding: 12px 15px;
          border: 1px solid #d8e6dc;
          border-radius: 11px;
          background: #fff;
          color: #17221b;
          font: inherit;
          font-size: 14px;
          outline-color: #22c55e;
        }

        .flori-filterbar input {
          flex: 1 1 260px;
          min-width: 0;
        }

        .flori-filterbar select {
          flex: 0 1 220px;
        }

        .flori-gallery {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 21px;
        }

        .flori-card {
          overflow: hidden;
          border: 1px solid #e2e8e3;
          border-radius: 17px;
          background: #fff;
          box-shadow: 0 5px 20px rgba(15, 23, 42, 0.04);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .flori-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 32px rgba(22, 101, 52, 0.12);
        }

        .flori-card-image {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #e5f4e8;
        }

        .flori-card-image img {
          height: 100%;
          transition: transform 0.4s;
        }

        .flori-card:hover .flori-card-image img {
          transform: scale(1.045);
        }

        .flori-card-body {
          padding: 21px;
        }

        .flori-chip {
          display: inline-block;
          margin-bottom: 12px;
          padding: 6px 9px;
          border-radius: 30px;
          background: #dcfce7;
          color: #166534;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .flori-card h3 {
          margin: 0 0 7px;
          color: #14532d;
          font-size: 20px;
          font-weight: 900;
        }

        .flori-latin {
          display: block;
          margin-bottom: 13px;
          color: #758579;
          font-size: 12px;
          font-style: italic;
        }

        .flori-card p {
          margin: 0 0 17px;
          color: #64748b;
          font-size: 13px;
          line-height: 1.8;
        }

        .flori-link {
          padding: 0;
          border: 0;
          background: none;
          color: #15803d;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
        }

        .flori-empty {
          grid-column: 1 / -1;
          padding: 30px;
          border: 1px dashed #bbd7c2;
          border-radius: 14px;
          color: #64748b;
          text-align: center;
        }

        .flori-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: start;
          gap: 25px;
        }

        .flori-editorial {
          padding: 26px;
          border: 1px solid #e1ebe3;
          border-radius: 17px;
          background: #fff;
        }

        .flori-editorial h3 {
          margin: 0 0 13px;
          color: #14532d;
          font-size: 20px;
          line-height: 1.4;
        }

        .flori-editorial p {
          margin: 0 0 13px;
          color: #52665a;
          font-size: 14px;
          line-height: 1.95;
          text-align: justify;
        }

        .flori-editorial p:last-child {
          margin-bottom: 0;
        }

        .flori-regions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .flori-region {
          padding: 24px;
          border: 1px solid #e0ebe2;
          border-radius: 15px;
          background: #fff;
        }

        .flori-region h3 {
          margin: 0 0 8px;
          color: #14532d;
          font-size: 20px;
        }

        .flori-region small {
          display: inline-block;
          margin-bottom: 14px;
          color: #15803d;
          font-size: 12px;
          font-weight: 800;
        }

        .flori-region p {
          margin: 0 0 15px;
          color: #64748b;
          font-size: 13px;
          line-height: 1.85;
          text-align: justify;
        }

        .flori-region strong {
          display: block;
          padding-top: 13px;
          border-top: 1px solid #e2e8e3;
          color: #166534;
          font-size: 12px;
          line-height: 1.7;
        }

        .flori-soil-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .flori-soil {
          padding: 24px;
          border: 1px solid #e0e9e1;
          border-radius: 15px;
          background: #fff;
        }

        .flori-soil h3 {
          margin: 0 0 10px;
          color: #14532d;
          font-size: 19px;
        }

        .flori-soil .profile {
          display: block;
          margin-bottom: 13px;
          color: #15803d;
          font-size: 12px;
          font-weight: 800;
        }

        .flori-soil p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.85;
          text-align: justify;
        }

        .flori-soil strong {
          display: block;
          margin-top: 14px;
          color: #166534;
          font-size: 12px;
          line-height: 1.7;
        }

        .flori-table-wrap {
          overflow-x: auto;
          border: 1px solid #e1ebe3;
          border-radius: 14px;
          background: #fff;
        }

        .flori-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .flori-table th,
        .flori-table td {
          padding: 17px;
          border-bottom: 1px solid #e8eee9;
          font-size: 13px;
          line-height: 1.65;
        }

        .flori-table th {
          background: #166534;
          color: #fff;
          font-weight: 800;
        }

        .flori-table td:first-child {
          color: #14532d;
          font-weight: 800;
        }

        .flori-table tr:last-child td {
          border-bottom: 0;
        }

        .flori-note {
          margin-top: 22px;
          padding: 20px 22px;
          border-left: 4px solid #22c55e;
          border-radius: 0 12px 12px 0;
          background: #f0fdf4;
          color: #52665a;
          font-size: 13px;
          line-height: 1.85;
        }

        .flori-steps {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }

        .flori-step {
          padding: 21px;
          border-top: 3px solid #22c55e;
          border-radius: 12px;
          background: #f0fdf4;
        }

        .flori-step h3 {
          margin: 0 0 12px;
          color: #14532d;
          font-size: 15px;
          line-height: 1.5;
        }

        .flori-step p {
          margin: 0;
          color: #52665a;
          font-size: 12px;
          line-height: 1.85;
        }

        .flori-sources {
          padding-left: 20px;
          color: #52665a;
          font-size: 13px;
          line-height: 2;
        }

        .flori-sources a {
          color: #166534;
          overflow-wrap: anywhere;
        }

        .flori-footer-note {
          padding: 35px 24px;
          background: #14532d;
          color: #e5f4e8;
          font-size: 13px;
          line-height: 1.9;
        }

        .flori-footer-note > div {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .flori-modal-bg {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: grid;
          place-items: center;
          overflow-y: auto;
          padding: 20px;
          background: rgba(9, 32, 18, 0.75);
          backdrop-filter: blur(5px);
        }

        .flori-modal {
          position: relative;
          width: min(760px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 19px;
          background: #fff;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
        }

        .flori-modal img {
          height: 270px;
        }

        .flori-modal-body {
          padding: 28px;
        }

        .flori-modal h2 {
          margin: 0 0 6px;
          color: #14532d;
          font-size: 29px;
        }

        .flori-modal p {
          color: #52665a;
          font-size: 14px;
          line-height: 1.9;
          text-align: justify;
        }

        .flori-modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 42px;
          height: 42px;
          border: 0;
          border-radius: 50%;
          background: #fff;
          color: #14532d;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 950px) {
          .flori-gallery {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .flori-soil-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .flori-steps {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .flori-hero,
          .flori-hero-bg img {
            min-height: 450px;
          }

          .flori-hero::after {
            background: rgba(8, 43, 25, 0.76);
          }

          .flori-hero-inner {
            width: calc(100% - 36px);
            padding: 54px 0;
          }

          .flori-hero h1 {
            letter-spacing: -1px;
          }

          .flori-stats,
          .flori-gallery,
          .flori-two-col,
          .flori-regions,
          .flori-soil-grid,
          .flori-steps {
            grid-template-columns: 1fr;
          }

          .flori-section {
            padding: 46px 18px;
          }

          .flori-card-image {
            height: 235px;
          }

          .flori-subnav {
            padding-right: 12px;
            padding-left: 12px;
          }

          .flori-filterbar select {
            flex: 1 1 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .flori-page *,
          .flori-page *::before,
          .flori-page *::after {
            scroll-behavior: auto !important;
            transition: none !important;
          }
        }
      `}</style>

      <section className="flori-hero">
        <div className="flori-hero-bg">
          <img
            src="https://img.botachoku.com/column-images/rose-flower-monthly-cost/hero-1778965598626.jpg"
            alt="Cultivo de roseiras em estufa"
          />
        </div>

        <div className="flori-hero-inner">
          <span className="flori-kicker">
            Plataforma de conhecimento agropecuário
          </span>

          <h1>
            Floricultura: ciência, produção e oportunidades em Angola
          </h1>

          <p>
            Uma abordagem técnico-científica sobre espécies ornamentais,
            condições agroecológicas, solos, viveiros, práticas de cultivo
            e cadeias de comercialização. Conhecimento para apoiar decisões
            fundamentadas e promover o desenvolvimento da produção nacional.
          </p>

          <div className="flori-hero-buttons">
            <button
              className="flori-btn"
              onClick={() => navegarPara("variedades")}
            >
              Explorar variedades
            </button>
            <button
              className="flori-btn flori-btn-outline"
              onClick={() => navegarPara("angola")}
            >
              Produção em Angola
            </button>
          </div>
        </div>
      </section>

      <nav className="flori-subnav" aria-label="Secções de floricultura">
        {[
          ["variedades", "Variedades"],
          ["angola", "Angola"],
          ["mundo", "Mundo"],
          ["solos", "Solos"],
          ["tecnica", "Produção técnica"],
          ["fontes", "Fontes"],
        ].map(([id, label]) => (
          <button
            key={id}
            className={secaoAtiva === id ? "active" : ""}
            onClick={() => navegarPara(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="flori-container">
        <div className="flori-stats">
          <article className="flori-stat">
            <strong>12 grupos e espécies</strong>
            <span>
              Uma seleção inicial de flores de corte e plantas ornamentais,
              com possibilidade de ampliar o catálogo.
            </span>
          </article>
          <article className="flori-stat">
            <strong>6 perfis regionais</strong>
            <span>
              Regiões e contextos de Angola para avaliação de oportunidades,
              sem presumir produção comercial comprovada.
            </span>
          </article>
          <article className="flori-stat">
            <strong>6 perfis de solo</strong>
            <span>
              Referências de textura e substratos para orientar a avaliação
              agronómica do local de cultivo.
            </span>
          </article>
        </div>
      </div>

      <section className="flori-section" id="variedades">
        <div className="flori-container">
          <header className="flori-section-head">
            <span className="flori-label">Diversidade botânica</span>
            <h2>Variedades de flores e plantas ornamentais</h2>
            <p>
              A seleção da espécie e da cultivar é uma decisão agronómica
              e comercial. Devem considerar-se a adaptação climática, a
              duração do ciclo, a procura do mercado, a conservação
              pós-colheita e os custos de produção.
            </p>
          </header>

          <div className="flori-filterbar">
            <input
              value={termo}
              onChange={(event) => setTermo(event.target.value)}
              placeholder="Pesquisar espécie ou nome científico..."
              aria-label="Pesquisar variedades"
            />
            <select
              value={grupo}
              onChange={(event) => setGrupo(event.target.value)}
              aria-label="Filtrar grupo de flores"
            >
              {grupos.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flori-gallery">
            {floresFiltradas.length ? (
              floresFiltradas.map((flor) => (
                <article className="flori-card" key={flor.nome}>
                  <div className="flori-card-image">
                    <img
                      src={flor.imagem}
                      alt={`${flor.nome} — ${flor.nomeCientifico}`}
                      loading="lazy"
                    />
                  </div>

                  <div className="flori-card-body">
                    <span className="flori-chip">{flor.grupo}</span>
                    <h3>{flor.nome}</h3>
                    <span className="flori-latin">
                      {flor.nomeCientifico}
                    </span>
                    <p>{flor.descricao}</p>
                    <button
                      className="flori-link"
                      onClick={() => setFlorSelecionada(flor)}
                    >
                      Consultar ficha técnica →
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="flori-empty">
                Não foram encontradas espécies com esses critérios.
                Experimenta outra palavra-chave.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="flori-section soft" id="angola">
        <div className="flori-container">
          <header className="flori-section-head">
            <span className="flori-label">Contexto nacional</span>
            <h2>Floricultura em Angola: produção e potencial regional</h2>
            <p>
              Angola apresenta diversidade de altitude, temperatura,
              precipitação e condições de mercado. Essa diversidade
              justifica a avaliação de sistemas de floricultura adaptados
              a diferentes locais. A aptidão potencial, porém, não equivale
              à existência de explorações comerciais ou a volumes de
              produção comprovados.
            </p>
          </header>

          <div className="flori-two-col">
            <article className="flori-editorial">
              <h3>Estado da informação e oportunidades</h3>
              <p>
                A análise do sector deve distinguir a produção de flores
                de corte, a produção de plantas ornamentais em vasos, os
                viveiros, a jardinagem e o comércio de flores importadas.
                Estes segmentos apresentam necessidades técnicas e
                estruturas de custos diferentes.
              </p>
              <p>
                Para estabelecer uma linha de base nacional, é necessário
                identificar produtores, áreas cultivadas, espécies,
                quantidades produzidas, emprego, canais de comercialização
                e dependência de material vegetal importado. Os dados
                aduaneiros, isoladamente, não permitem calcular a produção
                total nacional.
              </p>
              <p>
                As oportunidades devem ser verificadas através de
                inquéritos aos produtores, ensaios de adaptação, análises
                de solo e água e estudos da procura de floristas,
                hotéis, organizadores de eventos e consumidores.
              </p>
            </article>

            <article className="flori-editorial">
              <h3>Critérios para selecionar uma região produtora</h3>
              <p>
                A escolha do local deve considerar temperaturas diurnas
                e noturnas, amplitude térmica, humidade relativa, regime
                de chuvas, vento, luminosidade, risco de doenças e
                disponibilidade de água para rega.
              </p>
              <p>
                A proximidade dos centros de consumo e das vias de
                transporte é especialmente relevante para flores de
                corte, cuja qualidade comercial pode diminuir durante
                o armazenamento e a distribuição inadequados.
              </p>
              <p>
                A instalação de projectos-piloto permite testar cultivares,
                comparar épocas de plantio, estimar custos e medir
                produtividade antes de investir em áreas maiores.
              </p>
            </article>
          </div>

          <div style={{ height: 25 }} />

          <div className="flori-regions">
            {regioes.map((regiao) => (
              <article className="flori-region" key={regiao.nome}>
                <h3>{regiao.nome}</h3>
                <small>{regiao.perfil}</small>
                <p>{regiao.texto}</p>
                <strong>
                  Linha de avaliação: {regiao.potencial}
                </strong>
              </article>
            ))}
          </div>

          <div className="flori-note">
            <strong>Nota metodológica:</strong> os perfis acima são
            hipóteses de avaliação agroecológica e comercial, não um
            ranking de produção provincial. A confirmação exige dados
            climáticos locais, análises laboratoriais e levantamento
            directo de explorações.
          </div>
        </div>
      </section>

      <section className="flori-section" id="mundo">
        <div className="flori-container">
          <header className="flori-section-head">
            <span className="flori-label">Panorama internacional</span>
            <h2>Produção e comércio mundial de flores</h2>
            <p>
              O comércio internacional de flores cortadas é influenciado
              pelo clima, pela especialização produtiva, pela logística
              de cadeia de frio, pela qualidade e pela proximidade dos
              mercados consumidores.
            </p>
          </header>

          <div className="flori-two-col">
            <article className="flori-editorial">
              <h3>Principais exportadores em 2024</h3>
              <p>
                Segundo a base WITS, com dados de comércio internacional
                para flores cortadas e botões frescos (código HS 060310),
                os Países Baixos, a Colômbia, o Equador e o Quénia
                figuraram entre os principais exportadores em valor
                durante 2024.
              </p>
              <p>
                Os Países Baixos desempenham um papel relevante na
                distribuição internacional, enquanto a Colômbia e o
                Equador possuem cadeias exportadoras especializadas.
                O Quénia também se destaca no comércio de flores de corte.
              </p>
              <p>
                Estes valores representam comércio de exportação,
                não necessariamente o valor da produção agrícola
                doméstica, e não devem ser confundidos com uma
                classificação universal de todos os segmentos da
                floricultura.
              </p>
            </article>

            <article className="flori-editorial">
              <h3>Enquadramento comercial de Angola</h3>
              <p>
                Para a categoria mais ampla de flores cortadas e botões
                ornamentais, a base WITS/UN Comtrade reportou exportações
                de Angola de cerca de 2,66 mil dólares e 243 kg em 2024.
                O registo corresponde ao comércio externo classificado
                nessa categoria, não à totalidade das flores produzidas
                ou comercializadas internamente.
              </p>
              <p>
                Na mesma base, o Quénia e a África do Sul figuraram entre
                os fornecedores de flores para Angola em 2024. Isto
                demonstra a relevância de analisar conjuntamente
                importações, produção local, distribuição e procura
                interna.
              </p>
              <p>
                Uma estratégia de desenvolvimento nacional deverá
                começar pela caracterização do mercado, pela avaliação
                dos custos de produção e pela identificação de espécies
                competitivas nas condições angolanas.
              </p>
            </article>
          </div>

          <div style={{ height: 25 }} />

          <div className="flori-table-wrap">
            <table className="flori-table">
              <thead>
                <tr>
                  <th>País ou indicador</th>
                  <th>Valor comercial</th>
                  <th>Interpretação</th>
                </tr>
              </thead>
              <tbody>
                {mercadoMundial.map((item) => (
                  <tr key={item.pais}>
                    <td>{item.pais}</td>
                    <td>{item.valor}</td>
                    <td>
                      Exportações de flores cortadas e botões frescos,
                      código HS 060310, em 2024.
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>Angola — exportações</td>
                  <td>2,66 mil USD; 243 kg</td>
                  <td>
                    Categoria mais ampla de flores cortadas e botões
                    ornamentais, código HS 0603, em 2024.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flori-note">
            <strong>Comparabilidade:</strong> a linha de Angola utiliza
            o código HS 0603, mais amplo, enquanto os quatro valores
            internacionais apresentados utilizam o código HS 060310.
            Por isso, não se deve interpretar a tabela como uma
            comparação perfeitamente homogénea entre países.
            Valores comerciais não são estimativas da produção total.
          </div>
        </div>
      </section>

      <section className="flori-section soft" id="solos">
        <div className="flori-container">
          <header className="flori-section-head">
            <span className="flori-label">Ciência do solo</span>
            <h2>Tipos de solos e substratos para floricultura</h2>
            <p>
              A textura resulta das proporções relativas de areia,
              silte e argila. A estrutura, a matéria orgânica, o pH,
              a salinidade, a profundidade e a drenagem também
              influenciam a disponibilidade de água, nutrientes e
              oxigénio para as raízes.
            </p>
          </header>

          <div
            style={{
              marginBottom: 25,
              overflow: "hidden",
              borderRadius: 17,
              background: "#e5f4e8",
            }}
          >
            <img
              src={imagemSolo}
              alt="Campo agrícola e superfície do solo"
              loading="lazy"
              style={{ height: 260 }}
            />
          </div>

          <div className="flori-soil-grid">
            {solos.map((solo) => (
              <article className="flori-soil" key={solo.nome}>
                <h3>{solo.nome}</h3>
                <span className="profile">{solo.perfil}</span>
                <p>{solo.texto}</p>
                <strong>{solo.uso}</strong>
              </article>
            ))}
          </div>

          <div className="flori-note">
            <strong>Recomendação agronómica:</strong> não se deve escolher
            um solo apenas pela sua aparência ou cor. A textura deve ser
            determinada por métodos adequados e, sempre que possível,
            complementada por análises de pH, condutividade elétrica,
            matéria orgânica e nutrientes. A aptidão final depende da
            espécie e das condições de produção.
          </div>
        </div>
      </section>

      <section className="flori-section" id="tecnica">
        <div className="flori-container">
          <header className="flori-section-head">
            <span className="flori-label">Manual técnico</span>
            <h2>Fundamentos científicos da produção floral</h2>
            <p>
              A floricultura integra conhecimentos de fisiologia vegetal,
              propagação, fertilidade do solo, fitossanidade, gestão da
              água, pós-colheita e economia agrícola.
            </p>
          </header>

          <div className="flori-steps">
            {etapas.map((etapa) => (
              <article className="flori-step" key={etapa.titulo}>
                <h3>{etapa.titulo}</h3>
                <p>{etapa.texto}</p>
              </article>
            ))}
          </div>

          <div style={{ height: 25 }} />

          <div className="flori-two-col">
            <article className="flori-editorial">
              <h3>Fisiologia floral e fotoperíodo</h3>
              <p>
                A transição entre crescimento vegetativo e floração
                depende da interação entre genótipo, temperatura,
                luminosidade, fotoperíodo e estado fisiológico da planta.
                A resposta não é igual em todas as espécies ou cultivares.
              </p>
              <p>
                Em espécies sensíveis à duração do dia, o planeamento
                do calendário de produção deve basear-se na resposta
                varietal. A escolha do material vegetal e o registo
                das datas de plantio e floração permitem avaliar a
                adaptação a cada região.
              </p>
            </article>

            <article className="flori-editorial">
              <h3>Nutrição, irrigação e fitossanidade</h3>
              <p>
                A fertilização deve ser ajustada à análise do solo ou
                substrato, à qualidade da água, à fase de crescimento
                e às exigências da espécie. O excesso de nutrientes
                pode prejudicar as raízes e aumentar perdas para o ambiente.
              </p>
              <p>
                A irrigação deve considerar a procura hídrica, a
                capacidade de retenção do substrato, a drenagem e
                as condições meteorológicas. A monitorização regular
                permite reduzir stress hídrico e problemas radiculares.
              </p>
              <p>
                O maneio integrado de pragas combina monitorização,
                prevenção, higiene, controlo cultural e, quando
                necessário, métodos de controlo autorizados e adequados.
              </p>
            </article>

            <article className="flori-editorial">
              <h3>Colheita, conservação e qualidade</h3>
              <p>
                O estádio de colheita varia entre espécies e mercados.
                O corte deve minimizar lesões, contaminação e perda
                de água. A utilização de recipientes limpos e a
                gestão da temperatura são componentes importantes
                da conservação pós-colheita.
              </p>
              <p>
                O acondicionamento e o transporte devem ser ajustados
                às exigências do produto e ao tempo previsto até à venda.
                O registo de perdas, rejeições e duração de conservação
                permite avaliar a eficiência da cadeia comercial.
              </p>
            </article>

            <article className="flori-editorial">
              <h3>Economia e sustentabilidade</h3>
              <p>
                A viabilidade económica deve incluir material vegetal,
                mão de obra, água, energia, fertilizantes, embalagens,
                transporte, perdas e custos de manutenção das
                infraestruturas.
              </p>
              <p>
                O uso eficiente da água, a redução de desperdícios,
                a gestão responsável de fertilizantes e a proteção
                dos trabalhadores são dimensões importantes de
                um sistema produtivo sustentável.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="flori-section soft" id="fontes">
        <div className="flori-container">
          <header className="flori-section-head">
            <span className="flori-label">Bibliografia e dados</span>
            <h2>Fontes para consulta e aprofundamento</h2>
            <p>
              As seguintes fontes permitem aprofundar a ciência do solo,
              a produção de flores e o enquadramento do comércio
              internacional. Os indicadores comerciais devem ser citados
              com o ano e a classificação de produto utilizados.
            </p>
          </header>

          <ol className="flori-sources">
            <li>
              <a
                href="https://www.fao.org/soils-portal/data-hub/soil-properties/physical-properties/en/"
                target="_blank"
                rel="noreferrer"
              >
                FAO — Physical properties of soils
              </a>
              {" "}— textura, estrutura, profundidade e propriedades físicas.
            </li>
            <li>
              <a
                href="https://www.fao.org/4/a0541e/a0541e.pdf"
                target="_blank"
                rel="noreferrer"
              >
                FAO — Guidelines for soil description
              </a>
              {" "}— referência para descrição e classificação de solos.
            </li>
            <li>
              <a
                href="https://www.fao.org/4/ba0028e/ba0028e00.htm"
                target="_blank"
                rel="noreferrer"
              >
                FAO — Report of the expert consultation on floriculture development in Asia
              </a>
              {" "}— enquadramento técnico e económico da floricultura.
            </li>
            <li>
              <a
                href="https://wits.worldbank.org/trade/comtrade/en/country/ALL/year/2024/tradeflow/Exports/partner/WLD/product/060310"
                target="_blank"
                rel="noreferrer"
              >
                WITS / UN Comtrade — Exportações mundiais de flores cortadas frescas, 2024
              </a>
              {" "}— valores e quantidades do código HS 060310.
            </li>
            <li>
              <a
                href="https://wits.worldbank.org/trade/comtrade/en/country/AGO/year/2024/tradeflow/Exports/partner/ALL/product/0603"
                target="_blank"
                rel="noreferrer"
              >
                WITS / UN Comtrade — Exportações de flores de Angola, 2024
              </a>
              {" "}— comércio externo registado no código HS 0603.
            </li>
            <li>
              <a
                href="https://wits.worldbank.org/trade/comtrade/en/country/All/year/2024/tradeflow/Exports/partner/AGO/product/0603"
                target="_blank"
                rel="noreferrer"
              >
                WITS / UN Comtrade — Fornecedores internacionais de flores para Angola, 2024
              </a>
              {" "}— dados de exportação dos parceiros comerciais.
            </li>
          </ol>

          <div className="flori-note">
            <strong>Nota editorial:</strong> esta página constitui uma
            base técnico-educativa para a AGROINOVA ANGOLA. As imagens
            ilustram espécies e sistemas de cultivo, mas não comprovam
            a existência de explorações nas regiões angolanas mencionadas.
            Antes de uma publicação institucional, recomenda-se rever
            as fontes, a data dos dados, os direitos de utilização
            das imagens e a nomenclatura botânica.
          </div>
        </div>
      </section>

      <footer className="flori-footer-note">
        <div>
          <strong>AGROINOVA ANGOLA — Floricultura</strong>
          <br />
          Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
          <br />
          Conteúdo técnico-educativo para apoio à investigação, à formação
          e à avaliação de oportunidades de produção ornamental.
        </div>
      </footer>

      {florSelecionada && (
        <div
          className="flori-modal-bg"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setFlorSelecionada(null);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setFlorSelecionada(null);
            }
          }}
        >
          <article
            className="flori-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="flori-modal-titulo"
          >
            <button
              type="button"
              className="flori-modal-close"
              aria-label="Fechar ficha técnica"
              onClick={() => setFlorSelecionada(null)}
            >
              ×
            </button>

            <img
              src={florSelecionada.imagem}
              alt={florSelecionada.nome}
            />

            <div className="flori-modal-body">
              <span className="flori-chip">
                {florSelecionada.grupo}
              </span>
              <h2 id="flori-modal-titulo">
                {florSelecionada.nome}
              </h2>
              <span className="flori-latin">
                {florSelecionada.nomeCientifico}
              </span>

              <p>{florSelecionada.descricao}</p>

              <h3>Condições de cultivo</h3>
              <p>{florSelecionada.condicoes}</p>

              <h3>Utilização</h3>
              <p>{florSelecionada.utilizacao}</p>

              <button
                type="button"
                className="flori-btn"
                onClick={() => setFlorSelecionada(null)}
              >
                Fechar ficha
              </button>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
