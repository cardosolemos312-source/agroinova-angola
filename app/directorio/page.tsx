"use client";

import { useMemo, useState } from "react";

/* =========================================================
   TIPOS
========================================================= */

type NivelLocalizacao = "exacta" | "aproximada";

type Imagem = {
  url: string;
  legenda: string;
  fonte: string;
};

type Fazenda = {
  id: number;
  nome: string;
  provincia: string;
  municipio: string;
  local?: string;

  actividade: string[];
  culturas: string[];
  pecuaria: string[];

  estado:
    | "Operacional"
    | "Em desenvolvimento"
    | "Projecto"
    | "Referência pública"
    | "A confirmar";

  areaTotal?: number;
  areaCultivada?: number;
  areaNaoCultivada?: number;

  usoSolo:
    | "Verificado"
    | "Histórico"
    | "Projectado"
    | "Não disponível";

  potencial: number;

  descricao: string;
  especial: string[];

  lat: number;
  lng: number;

  nivelLocalizacao: NivelLocalizacao;

  coordenadasTexto?: string;

  imagens: Imagem[];

  fonte: string;
  urlFonte?: string;

  observacao?: string;
};

/* =========================================================
   COORDENADAS TERRITORIAIS
   ---------------------------------------------------------
   Estas posições são referências aproximadas de município/
   província quando não existe uma coordenada pública exacta
   da fazenda.
========================================================= */

const coordenadasMunicipios: Record<
  string,
  { lat: number; lng: number }
> = {
  Luanda: { lat: -8.8383, lng: 13.2344 },
  Viana: { lat: -8.9025, lng: 13.3711 },
  Cacuaco: { lat: -8.805, lng: 13.23 },
  Camama: { lat: -9.0, lng: 13.27 },
  Ramiros: { lat: -9.17, lng: 13.27 },
  Zango: { lat: -8.92, lng: 13.55 },

  Huambo: { lat: -12.7761, lng: 15.7392 },
  Bailundo: { lat: -12.05, lng: 15.85 },
  Ekunha: { lat: -12.35, lng: 15.93 },
  Cachiungo: { lat: -12.56, lng: 15.72 },

  "Cuanza Sul": { lat: -10.95, lng: 14.95 },
  "Cela": { lat: -11.45, lng: 15.12 },
  "Waku Kungo": { lat: -11.36, lng: 15.12 },
  Quibala: { lat: -10.73, lng: 14.98 },
  Mussende: { lat: -10.9, lng: 15.2 },
  "Porto Amboim": { lat: -10.72, lng: 13.76 },
  Ebo: { lat: -11.0, lng: 14.55 },
  Cassongue: { lat: -11.83, lng: 15.04 },
  Libolo: { lat: -10.12, lng: 14.95 },
  Kibala: { lat: -10.7, lng: 14.98 },

  Benguela: { lat: -12.5763, lng: 13.4055 },
  Catumbela: { lat: -12.43, lng: 13.55 },
  Cavaco: { lat: -12.56, lng: 13.42 },
  Bocoio: { lat: -12.47, lng: 14.18 },

  Malanje: { lat: -9.54, lng: 16.34 },
  Cacuso: { lat: -9.32, lng: 15.25 },

  Uíge: { lat: -7.61, lng: 15.06 },
  Negage: { lat: -7.77, lng: 15.27 },
  Buengas: { lat: -7.05, lng: 15.05 },
  Kangola: { lat: -7.28, lng: 15.18 },
  Puri: { lat: -7.6, lng: 15.15 },

  Bengo: { lat: -8.58, lng: 13.66 },
  Caxito: { lat: -8.58, lng: 13.66 },
  Dande: { lat: -8.57, lng: 13.66 },

  "Cuanza Norte": { lat: -9.3, lng: 14.91 },
  "N'dalatando": { lat: -9.3, lng: 14.91 },
  Lucala: { lat: -9.0, lng: 15.12 },
  Banga: { lat: -9.3, lng: 15.0 },

  Bié: { lat: -12.38, lng: 17.7 },
  Chinguar: { lat: -12.2, lng: 16.33 },
  Chinguar: { lat: -12.2, lng: 16.33 },

  Huíla: { lat: -14.92, lng: 13.49 },
  Lubango: { lat: -14.92, lng: 13.49 },
  Humpata: { lat: -15.0, lng: 13.37 },
  Chibia: { lat: -15.18, lng: 13.7 },

  Zaire: { lat: -6.27, lng: 14.24 },
  Nzeto: { lat: -7.23, lng: 12.87 },

  Moxico: { lat: -11.2, lng: 20.4 },
  Luena: { lat: -11.78, lng: 19.92 },

  Lunda: { lat: -7.0, lng: 20.0 },
  "Lunda Norte": { lat: -7.38, lng: 20.83 },
  Dundo: { lat: -7.38, lng: 20.83 },
  Tchitato: { lat: -7.38, lng: 20.83 },

  Saurimo: { lat: -9.66, lng: 20.39 },
  Cacolo: { lat: -10.15, lng: 19.3 },

  Cuando: { lat: -17.07, lng: 19.0 },
  Cunene: { lat: -17.07, lng: 15.73 },
};

/* =========================================================
   FUNÇÃO DE POSIÇÃO APROXIMADA
========================================================= */

function gerarPosicao(
  provincia: string,
  municipio: string,
  index: number
) {
  const base =
    coordenadasMunicipios[municipio] ||
    coordenadasMunicipios[provincia] ||
    { lat: -11.2, lng: 17.87 };

  /*
    Pequeno deslocamento determinístico para evitar que
    dezenas de fazendas fiquem exactamente sobre o mesmo
    ponto quando apenas a localidade é conhecida.
  */

  const angulo = (index * 137.5 * Math.PI) / 180;

  const distancia = 0.015 + (index % 7) * 0.004;

  return {
    lat: base.lat + Math.sin(angulo) * distancia,
    lng: base.lng + Math.cos(angulo) * distancia,
  };
}

/* =========================================================
   BASE DAS 79 FAZENDAS DO DIRECTÓRIO PÚBLICO
========================================================= */

const basePublica: Array<{
  nome: string;
  provincia: string;
  municipio: string;
  local?: string;
  actividade?: string[];
  culturas?: string[];
  pecuaria?: string[];
}> = [
  {
    nome: "ABMartins & Filhos - Quinta",
    provincia: "Luanda",
    municipio: "Viana",
    local: "Kikuxi",
    actividade: ["Agricultura"],
  },
  {
    nome:
      "Angolaves - Empreendimentos Avícolas e Agropecuários, Lda.",
    provincia: "Luanda",
    municipio: "Cacuaco",
    local: "Panguila",
    actividade: ["Pecuária", "Avicultura"],
    pecuaria: ["Aves"],
  },
  {
    nome: "Cofriang U.E.E.",
    provincia: "Luanda",
    municipio: "Luanda",
    actividade: ["Agricultura", "Pecuária"],
  },
  {
    nome: "Fazenda 27, Lda.",
    provincia: "Cuanza Sul",
    municipio: "Waku Kungo",
    actividade: ["Agro-indústria"],
  },
  {
    nome: "Fazenda Abóbora",
    provincia: "Luanda",
    municipio: "Luanda",
    actividade: ["Agricultura"],
    culturas: ["Café"],
  },
  {
    nome:
      "Fazenda Agrícola Sambundo de António Jeremias",
    provincia: "Benguela",
    municipio: "Catumbela",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Agrilminha",
    provincia: "Angola",
    municipio: "Angola",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Agro7",
    provincia: "Luanda",
    municipio: "Luanda",
    actividade: ["Agropecuária"],
  },
  {
    nome: "Fazenda Agropecuária",
    provincia: "Huíla",
    municipio: "Lubango",
    actividade: ["Agricultura", "Pecuária"],
    pecuaria: ["Animais"],
  },
  {
    nome: "Fazenda Ajomal",
    provincia: "Malanje",
    municipio: "Malanje",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Aldeia Nova",
    provincia: "Cuanza Sul",
    municipio: "Waku Kungo",
    actividade: ["Agricultura", "Pecuária", "Avicultura"],
    culturas: ["Milho"],
    pecuaria: ["Aves", "Bovinos"],
  },
  {
    nome: "Fazenda ALVAN",
    provincia: "Luanda",
    municipio: "Luanda",
    local: "Morro Bento",
    actividade: ["Agricultura", "Pecuária"],
  },
  {
    nome: "Fazenda Atapada, Lda.",
    provincia: "Huíla",
    municipio: "Chibia",
    local: "Mpapa",
    actividade: ["Agricultura", "Pecuária"],
  },
  {
    nome: "Fazenda Auria Machado",
    provincia: "Huambo",
    municipio: "Huambo",
    actividade: ["Pecuária"],
    pecuaria: ["Animais"],
  },
  {
    nome: "Fazenda Aurora",
    provincia: "Bengo",
    municipio: "Dande",
    actividade: ["Pecuária", "Agro-indústria"],
    culturas: ["Leite"],
    pecuaria: ["Bovinos"],
  },
  {
    nome: "Fazenda Avícola",
    provincia: "Luanda",
    municipio: "Luanda",
    actividade: ["Avicultura"],
    pecuaria: ["Aves"],
  },
  {
    nome: "Fazenda Avó Teté",
    provincia: "Bengo",
    municipio: "Caxito",
    actividade: ["Agricultura", "Pecuária"],
  },
  {
    nome: "Fazenda Barragem do Manso",
    provincia: "Uíge",
    municipio: "Negage",
    actividade: ["Agricultura", "Pecuária", "Avicultura"],
    culturas: ["Milho", "Soja", "Hortícolas"],
    pecuaria: ["Bovinos", "Aves"],
  },
  {
    nome: "Fazenda Boa Esperança",
    provincia: "Cuanza Sul",
    municipio: "Cuanza Sul",
    actividade: ["Agricultura"],
    culturas: ["Café"],
  },
  {
    nome: "Fazenda Boa Nova",
    provincia: "Luanda",
    municipio: "Ramiros",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Campos Belos",
    provincia: "Cuanza Norte",
    municipio: "Cuanza Norte",
    local: "Sambacaju",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda DGIL Agricultura",
    provincia: "Luanda",
    municipio: "Camama",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Divuidi Comércio, Lda.",
    provincia: "Uíge",
    municipio: "Uíge",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda do Futuro",
    provincia: "Angola",
    municipio: "Angola",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Durão",
    provincia: "Uíge",
    municipio: "Uíge",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Elavoco Construção, Lda.",
    provincia: "Uíge",
    municipio: "Buengas",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Essência do Campo",
    provincia: "Bengo",
    municipio: "Caxito",
    actividade: ["Agricultura"],
    culturas: ["Bambu"],
  },
  {
    nome: "Fazenda FILHOS DE MARITÓ",
    provincia: "Luanda",
    municipio: "Cacuaco",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Filomena",
    provincia: "Luanda",
    municipio: "Cacuaco",
    local: "Panguila",
    actividade: ["Avicultura", "Agricultura"],
    pecuaria: ["Aves"],
  },
  {
    nome: "Fazenda GIKISA & Filhos, Lda.",
    provincia: "Cuanza Sul",
    municipio: "Porto Amboim",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Girassol",
    provincia: "Zaire",
    municipio: "Nzeto",
    actividade: ["Agricultura", "Horticultura"],
    culturas: ["Banana", "Mamão", "Hortícolas"],
  },
  {
    nome: "Fazenda Hortangola",
    provincia: "Malanje",
    municipio: "Cacuso",
    actividade: ["Horticultura"],
    culturas: ["Hortícolas"],
  },
  {
    nome: "Fazenda J.W Catering",
    provincia: "Cuanza Norte",
    municipio: "Lucala",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Kambondo",
    provincia: "Cuanza Sul",
    municipio: "Quibala",
    actividade: ["Agricultura"],
    culturas: ["Sementes"],
  },
  {
    nome: "Fazenda Kibaxi",
    provincia: "Bengo",
    municipio: "Bengo",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Kumbira",
    provincia: "Luanda",
    municipio: "Luanda",
    actividade: ["Agricultura", "Avicultura"],
  },
  {
    nome: "Fazenda LN2, Lda.",
    provincia: "Cuanza Sul",
    municipio: "Cuanza Sul",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Lumana",
    provincia: "Benguela",
    municipio: "Cavaco",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda M. Umba",
    provincia: "Benguela",
    municipio: "Benguela",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Manquete",
    provincia: "Cunene",
    municipio: "Cunene",
    actividade: ["Agricultura", "Pecuária"],
  },
  {
    nome: "Fazenda Maria Emília",
    provincia: "Angola",
    municipio: "Angola",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Mati",
    provincia: "Cuanza Sul",
    municipio: "Waku Kungo",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Mudiaquelele",
    provincia: "Uíge",
    municipio: "Puri",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Nguendalica - Huambo",
    provincia: "Huambo",
    municipio: "Huambo",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda No 4, Lágrimas Chorona",
    provincia: "Luanda",
    municipio: "Luanda",
    local: "Rio Longa",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Nonail Humpata",
    provincia: "Huíla",
    municipio: "Humpata",
    actividade: ["Horticultura", "Pecuária"],
    culturas: ["Hortícolas"],
    pecuaria: ["Aves", "Suínos", "Bovinos"],
  },
  {
    nome: "Fazenda Oligario Cacambo",
    provincia: "Luanda",
    municipio: "Camama",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Pai Timóteo",
    provincia: "Bengo",
    municipio: "Bengo",
    actividade: ["Agricultura", "Ecoturismo"],
  },
  {
    nome: "Fazenda Palmarito Mussende",
    provincia: "Cuanza Sul",
    municipio: "Mussende",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Quifica Vunge (SU), Lda.",
    provincia: "Uíge",
    municipio: "Negage",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Quizenga",
    provincia: "Malanje",
    municipio: "Malanje",
    actividade: ["Agricultura"],
    culturas: ["Produção orgânica"],
  },
  {
    nome: "Fazenda Ramos de Milho",
    provincia: "Benguela",
    municipio: "Cavaco",
    actividade: ["Agricultura"],
    culturas: ["Milho"],
  },
  {
    nome: "Fazenda Real",
    provincia: "Huambo",
    municipio: "Bailundo",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Renascer",
    provincia: "Cuanza Sul",
    municipio: "Ebo",
    actividade: ["Agricultura"],
    culturas: ["Abacate", "Pimentos", "Batata rena"],
  },
  {
    nome: "Fazenda Robic",
    provincia: "Cuanza Sul",
    municipio: "Quibala",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Rolina Comercial, Lda.",
    provincia: "Cuanza Norte",
    municipio: "Banga",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Sabores do Huambo",
    provincia: "Huambo",
    municipio: "Huambo",
    local: "Bairro Cruzeiro",
    actividade: ["Agricultura"],
    culturas: ["Feijão"],
  },
  {
    nome: "Fazenda Santa Filomena",
    provincia: "Benguela",
    municipio: "Cavaco",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Santa Margarida",
    provincia: "Uíge",
    municipio: "Kangola",
    actividade: ["Horticultura"],
    culturas: [
      "Alho",
      "Cebola",
      "Tomate",
      "Cenoura",
      "Repolho"
    ],
  },
  {
    nome: "Fazenda SCRL TXISSOPA",
    provincia: "Angola",
    municipio: "Angola",
    actividade: ["Agricultura"],
  },
  {
    nome:
      "Fazenda Serdul de Sérgio Casimiro Alexandre, Lda.",
    provincia: "Cuanza Sul",
    municipio: "Cela",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Socamia",
    provincia: "Malanje",
    municipio: "Malanje",
    actividade: ["Agro-indústria"],
    culturas: ["Milho"],
  },
  {
    nome: "Fazenda Sociedade Starfih, Lda.",
    provincia: "Cuanza Sul",
    municipio: "Porto Amboim",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Sopemba",
    provincia: "Angola",
    municipio: "Angola",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Tchitogo",
    provincia: "Malanje",
    municipio: "Malanje",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Terra Arável e Agro - Pecuária, Lda.",
    provincia: "Cuanza Sul",
    municipio: "Libolo",
    local: "Munenga / Catanda",
    actividade: ["Agricultura", "Pecuária"],
  },
  {
    nome: "Fazenda Tia Jóia",
    provincia: "Benguela",
    municipio: "Bocoio",
    local: "Monte Belo",
    actividade: ["Agricultura"],
  },
  {
    nome:
      "Fazenda Ting - Inteligente Colectivo, Lda.",
    provincia: "Cuanza Sul",
    municipio: "Porto Amboim",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Token Locolisa",
    provincia: "Luanda",
    municipio: "Zango",
    actividade: ["Agricultura"],
    culturas: ["Produtos do campo"],
  },
  {
    nome: "Fazenda Tonilsan & Filhos",
    provincia: "Cuanza Sul",
    municipio: "Cassongue",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Vemser Incorporation, Lda.",
    provincia: "Lunda Sul",
    municipio: "Saurimo",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Vinevala",
    provincia: "Bié",
    municipio: "Chinguar",
    actividade: ["Agricultura"],
    culturas: ["Trigo"],
  },
  {
    nome: "Fazenda Vissolela",
    provincia: "Cuanza Sul",
    municipio: "Kibala",
    actividade: ["Agricultura"],
    culturas: ["Café"],
  },
  {
    nome: "Fazenda VT - HT & Filhos, Lda.",
    provincia: "Lunda Norte",
    municipio: "Tchitato",
    actividade: ["Agricultura"],
  },
  {
    nome: "Fazenda Yitumbo",
    provincia: "Cuanza Sul",
    municipio: "Cuanza Sul",
    actividade: ["Agricultura"],
  },
  {
    nome: "Quinta Calemene Mucuacuiza Uahiana",
    provincia: "Lunda Norte",
    municipio: "Dundo",
    local: "Camaquenzo II",
    actividade: ["Agricultura"],
  },
  {
    nome: "Quinta Carioca, Lda.",
    provincia: "Luanda",
    municipio: "Cacuaco",
    local: "Funda / Kilunda",
    actividade: ["Agricultura"],
  },
  {
    nome: "Quinta Maria do Carmo, Lda.",
    provincia: "Luanda",
    municipio: "Viana",
    actividade: ["Agricultura"],
  },
  {
    nome: "Turiagro - Turismo e Agro Pecuária, Lda.",
    provincia: "Bengo",
    municipio: "Caxito",
    actividade: ["Agricultura", "Pecuária"],
  }
];

/* =========================================================
   DADOS ENRIQUECIDOS
========================================================= */

const dadosEspeciais: Record<
  string,
  Partial<Fazenda>
> = {
  "Fazenda 7 Quintas": {
    estado: "Operacional",
    areaTotal: 1978.81,
    areaCultivada: 150,
    areaNaoCultivada: 1828.81,
    usoSolo: "Verificado",
    potencial: 91,
    culturas: ["Soja", "Milho", "Feijão"],
    pecuaria: ["Bovinos", "Pastagem"],
    lat: -11.3999416,
    lng: 15.1520282,
    nivelLocalizacao: "exacta",
    coordenadasTexto: "-11.3999416, 15.1520282",
    descricao:
      "Exploração agropecuária de grande dimensão localizada na Cela. A documentação pública apresenta aproximadamente 1.978,81 hectares de área total e 150 hectares de área agrícola documentada.",
    especial: [
      "Grande disponibilidade territorial",
      "Produção agrícola",
      "Produção pecuária",
      "Sistema de irrigação",
      "Pastagem",
      "Potencial de expansão"
    ],
    fonte:
      "PDAC — Plano de Gestão Ambiental e Social",
    urlFonte:
      "https://pdac.ao/wp-content/uploads/2020/07/PGAS-No-64-Fazenda-7-Quintas.pdf"
  },

  "Fazenda Girassol": {
    estado: "Operacional",
    areaCultivada: 238,
    usoSolo: "Histórico",
    potencial: 90,
    culturas: [
      "Banana",
      "Mamão",
      "Hortícolas"
    ],
    descricao:
      "Exploração agrícola localizada no Nzeto, com produção hortícola e frutícola, estruturas de cultivo protegido e sistemas de irrigação.",
    especial: [
      "Estufas",
      "Irrigação",
      "Banana",
      "Mamão",
      "Reservatórios de água"
    ],
    imagens: [
      {
        url:
          "https://cdn.prod.website-files.com/5b03c2c5f551b29f01058a3a/5f156fca3d0267f32f2b1377_Fazenda%20Girassol%20-%20Agricultura%20.jpeg",
        legenda:
          "Infraestrutura agrícola da Fazenda Girassol",
        fonte:
          "Economia & Mercado"
      }
    ],
    fonte:
      "Economia & Mercado"
  },

  "Fazenda Mungo": {
    estado: "Em desenvolvimento",
    areaTotal: 2500,
    usoSolo: "Histórico",
    potencial: 94,
    culturas: [
      "Abacate",
      "Café Arábica",
      "Macadâmia",
      "Ananás"
    ],
    lat: -11.735911,
    lng: 16.437011,
    nivelLocalizacao: "exacta",
    coordenadasTexto:
      "11°44'9.28\" S 16°26'13.24\" E",
    descricao:
      "Projecto agrícola de grande dimensão no planalto do Huambo. O abacate é uma das principais linhas de desenvolvimento, existindo ensaios com café arábica, macadâmia, ananás e plantas aromáticas.",
    especial: [
      "Produção de abacate",
      "Viveiro",
      "Café arábica",
      "Macadâmia",
      "Ananás",
      "Agricultura de altitude"
    ],
    fonte:
      "Fazenda Mungo",
    urlFonte:
      "https://fazendamungo.com/"
  },

  "Fazenda Yolele": {
    estado: "Operacional",
    areaTotal: 149.55,
    areaCultivada: 100,
    areaNaoCultivada: 49.55,
    usoSolo: "Verificado",
    potencial: 86,
    culturas: [
      "Milho",
      "Feijão",
      "Batata"
    ],
    descricao:
      "Exploração agrícola localizada no Bailundo. O projecto documentado pelo PDAC apresenta 149,55 hectares de área total e aproximadamente 100 hectares de área agrícola utilizada.",
    especial: [
      "Rio Colenle",
      "Agricultura irrigada",
      "Agricultura de sequeiro",
      "Milho",
      "Feijão",
      "Batata"
    ],
    fonte:
      "PDAC — Fazenda Yolele",
    urlFonte:
      "https://pdac.ao/wp-content/uploads/2020/07/PGAS-No-168-FAZENDA-Yoleli-A-Publicar.pdf"
  },

  "Fazenda Pedras Negras": {
    estado: "Referência pública",
    areaTotal: 10000,
    usoSolo: "Histórico",
    potencial: 96,
    culturas: [
      "Milho",
      "Soja",
      "Massambala",
      "Feijão"
    ],
    descricao:
      "Grande empreendimento agrícola associado ao pólo agro-industrial de Pungo Andongo. As fontes públicas apresentam valores de área diferentes conforme o período, sendo os números tratados como históricos.",
    especial: [
      "Grande escala agrícola",
      "Pungo Andongo",
      "Cereais",
      "Soja",
      "Agro-indústria"
    ],
    imagens: [
      {
        url:
          "https://media.licdn.com/dms/image/v2/D4D22AQFnSZeyVn7O6w/feedshare-shrink_800/B4DZX1YPiuGwAs-/0/1743579688324?e=2147483647&t=8_Si6VZz-vjC6NphaMRg6SOeKeETD_LTwDbDXkt50Q0&v=beta",
        legenda:
          "Vista publicada da Fazenda Pedras Negras",
        fonte:
          "Publicação pública"
      }
    ],
    fonte:
      "Fontes públicas e documentação de projecto"
  },

  "Fazenda Catito": {
    estado: "Referência pública",
    usoSolo: "Histórico",
    potencial: 95,
    culturas: [
      "Milho",
      "Feijão",
      "Soja",
      "Batata",
      "Mandioca",
      "Citrinos"
    ],
    pecuaria: ["Bovinos"],
    descricao:
      "Grande projecto agropecuário localizado no Bailundo, com referências públicas a produção agrícola diversificada, pecuária e aquicultura.",
    especial: [
      "Grande escala",
      "Milho",
      "Soja",
      "Batata",
      "Mandioca",
      "Pecuária",
      "Aquicultura"
    ],
    fonte:
      "Fontes públicas sobre o projecto"
  },

  "Nova Agrolider": {
    estado: "Operacional",
    potencial: 94,
    culturas: [
      "Hortícolas",
      "Café",
      "Abacate",
      "Tubérculos"
    ],
    descricao:
      "Exploração agro-industrial associada à produção de hortícolas, café, abacate e tubérculos, com sistemas de irrigação por pivô.",
    especial: [
      "Irrigação por pivô",
      "Café",
      "Abacate",
      "Hortícolas",
      "Tubérculos"
    ],
    imagens: [
      {
        url:
          "https://www.ispsn.org/sites/default/files/images/news/img_6062.jpeg",
        legenda:
          "Áreas agrícolas com irrigação por pivô",
        fonte: "ISPSN"
      }
    ],
    fonte: "ISPSN"
  },

  "Fazenda Quizenga": {
    estado: "Operacional",
    potencial: 88,
    culturas: ["Produção agrícola"],
    descricao:
      "Exploração agrícola localizada em Lutete, Malanje, associada a actividade agrícola e geração de emprego rural.",
    especial: [
      "Produção agrícola",
      "Emprego rural",
      "Cacuso",
      "Produção comercial"
    ],
    imagens: [
      {
        url:
          "https://plataformacipra.gov.ao/public/ficheiros/noticias/580709230941541694076114.jpeg",
        legenda:
          "Vista da Fazenda Quizenga",
        fonte: "CIPRA"
      }
    ],
    fonte:
      "CIPRA — Presidência da República de Angola"
  },

  "Fazenda Vinevala": {
    estado: "Operacional",
    potencial: 89,
    culturas: ["Trigo"],
    descricao:
      "Exploração agrícola localizada no Bié e associada a campanhas de produção de trigo.",
    especial: [
      "Produção de trigo",
      "Agricultura cerealífera",
      "Bié",
      "Produção comercial"
    ],
    imagens: [
      {
        url:
          "https://plataformacipra.gov.ao/public/ficheiros/noticias/551107240332001720708320.jpg",
        legenda:
          "Campanha de produção de trigo",
        fonte: "CIPRA"
      }
    ],
    fonte:
      "CIPRA — Presidência da República de Angola"
  },

  "Fazenda José João Neto": {
    areaTotal: 190,
    usoSolo: "Verificado",
    potencial: 78,
    descricao:
      "Exploração agrícola identificada em documentação pública do PDAC no município do Lucala.",
    especial: [
      "Área documentada",
      "Lucala",
      "Projecto agrícola",
      "Emprego rural"
    ],
    fonte: "PDAC"
  },

  "Fazenda JW&A": {
    estado: "Operacional",
    potencial: 79,
    culturas: ["Culturas agrícolas"],
    descricao:
      "Exploração agrícola localizada na região de Lucala, com actividade de produção agrícola documentada através de imagens públicas.",
    especial: [
      "Produção agrícola",
      "Lucala",
      "Produção rural",
      "Exploração empresarial"
    ],
    imagens: [
      {
        url:
          "https://fazendajwa.com/images/IMG-20250620-WA0013.jpg",
        legenda:
          "Área de produção da Fazenda JW&A",
        fonte: "Fazenda JW&A"
      }
    ],
    fonte: "Fazenda JW&A",
    urlFonte: "https://fazendajwa.com/"
  }
};

/* =========================================================
   CRIAÇÃO FINAL DAS 79 FAZENDAS
========================================================= */

const fazendas: Fazenda[] = basePublica.map(
  (base, index) => {
    const posicao = gerarPosicao(
      base.provincia,
      base.municipio,
      index
    );

    const extra =
      dadosEspeciais[base.nome] || {};

    const areaTotal =
      extra.areaTotal;

    const areaCultivada =
      extra.areaCultivada;

    const areaNaoCultivada =
      extra.areaNaoCultivada ??
      (areaTotal !== undefined &&
      areaCultivada !== undefined
        ? areaTotal - areaCultivada
        : undefined);

    return {
      id: index + 1,

      nome: base.nome,

      provincia: base.provincia,

      municipio: base.municipio,

      local: base.local,

      actividade:
        extra.actividade ||
        base.actividade ||
        ["Agricultura"],

      culturas:
        extra.culturas ||
        base.culturas ||
        [],

      pecuaria:
        extra.pecuaria ||
        base.pecuaria ||
        [],

      estado:
        extra.estado ||
        "Referência pública",

      areaTotal,

      areaCultivada,

      areaNaoCultivada,

      usoSolo:
        extra.usoSolo ||
        "Não disponível",

      potencial:
        extra.potencial ||
        70,

      descricao:
        extra.descricao ||
        `${base.nome} está identificada no directório público de explorações do agronegócio em Angola, com referência territorial em ${base.municipio}, ${base.provincia}.`,

      especial:
        extra.especial ||
        [
          base.provincia,
          base.municipio,
          ...(base.culturas || []),
          ...(base.pecuaria || [])
        ].slice(0, 6),

      lat:
        extra.lat ??
        posicao.lat,

      lng:
        extra.lng ??
        posicao.lng,

      nivelLocalizacao:
        extra.nivelLocalizacao ||
        "aproximada",

      coordenadasTexto:
        extra.coordenadasTexto,

      imagens:
        extra.imagens ||
        [],

      fonte:
        extra.fonte ||
        "AgroPortal — Directório público de Fazendas",

      urlFonte:
        extra.urlFonte ||
        "https://agroportal.ao/component/mtree/business/companies.html",

      observacao:
        extra.observacao ||
        "A localização apresentada no mapa é aproximada porque a fonte pública consultada fornece a localidade, município ou província, mas não uma coordenada exacta da propriedade."
    };
  }
);

/* =========================================================
   COMPONENTE
========================================================= */

export default function DirectorioFazendas() {
  const [pesquisa, setPesquisa] =
    useState("");

  const [provincia, setProvincia] =
    useState("Todas");

  const [actividade, setActividade] =
    useState("Todas");

  const [estado, setEstado] =
    useState("Todos");

  const [localizacao, setLocalizacao] =
    useState("Todas");

  const [selecionada, setSelecionada] =
    useState<Fazenda | null>(null);

  const [slide, setSlide] =
    useState(0);

  const [mostrarMapa, setMostrarMapa] =
    useState(false);

  const provincias = useMemo(
    () => [
      "Todas",
      ...Array.from(
        new Set(
          fazendas.map(
            (f) => f.provincia
          )
        )
      ).sort()
    ],
    []
  );

  const actividades = useMemo(
    () => [
      "Todas",
      ...Array.from(
        new Set(
          fazendas.flatMap(
            (f) => f.actividade
          )
        )
      ).sort()
    ],
    []
  );

  const resultados = useMemo(() => {
    const termo =
      pesquisa.toLowerCase().trim();

    return fazendas.filter((f) => {
      const texto =
        `${f.nome} ${f.provincia} ${f.municipio} ${
          f.local || ""
        } ${f.culturas.join(" ")} ${
          f.actividade.join(" ")
        }`.toLowerCase();

      const pesquisaOK =
        !termo ||
        texto.includes(termo);

      const provinciaOK =
        provincia === "Todas" ||
        f.provincia === provincia;

      const actividadeOK =
        actividade === "Todas" ||
        f.actividade.includes(
          actividade
        );

      const estadoOK =
        estado === "Todos" ||
        f.estado === estado;

      const localizacaoOK =
        localizacao === "Todas" ||
        f.nivelLocalizacao ===
          localizacao;

      return (
        pesquisaOK &&
        provinciaOK &&
        actividadeOK &&
        estadoOK &&
        localizacaoOK
      );
    });
  }, [
    pesquisa,
    provincia,
    actividade,
    estado,
    localizacao
  ]);

  const totalArea = fazendas.reduce(
    (total, f) =>
      total + (f.areaTotal || 0),
    0
  );

  const totalCultivada =
    fazendas.reduce(
      (total, f) =>
        total +
        (f.areaCultivada || 0),
      0
    );

  const localizacoesExactas =
    fazendas.filter(
      (f) =>
        f.nivelLocalizacao ===
        "exacta"
    ).length;

  const imagens =
    fazendas.filter(
      (f) => f.imagens.length > 0
    ).length;

  const provinciasComDados =
    new Set(
      fazendas.map(
        (f) => f.provincia
      )
    ).size;

  function abrirFazenda(
    fazenda: Fazenda
  ) {
    setSelecionada(fazenda);
    setSlide(0);
  }

  function fecharFazenda() {
    setSelecionada(null);
  }

  function proximoSlide() {
    if (
      !selecionada ||
      selecionada.imagens.length === 0
    ) {
      return;
    }

    setSlide(
      (actual) =>
        actual ===
        selecionada.imagens.length - 1
          ? 0
          : actual + 1
    );
  }

  function slideAnterior() {
    if (
      !selecionada ||
      selecionada.imagens.length === 0
    ) {
      return;
    }

    setSlide(
      (actual) =>
        actual === 0
          ? selecionada.imagens.length - 1
          : actual - 1
    );
  }

  function abrirMapa(
    fazenda: Fazenda
  ) {
    const url =
      `https://www.openstreetmap.org/?mlat=${fazenda.lat}&mlon=${fazenda.lng}#map=14/${fazenda.lat}/${fazenda.lng}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function mapaEmbed(
    fazenda: Fazenda
  ) {
    const delta =
      fazenda.nivelLocalizacao ===
      "exacta"
        ? 0.025
        : 0.06;

    const left =
      fazenda.lng - delta;

    const right =
      fazenda.lng + delta;

    const top =
      fazenda.lat + delta;

    const bottom =
      fazenda.lat - delta;

    return (
      `https://www.openstreetmap.org/export/embed.html?bbox=` +
      `${left}%2C${bottom}%2C${right}%2C${top}` +
      `&layer=mapnik&marker=${fazenda.lat}%2C${fazenda.lng}`
    );
  }

  return (
    <main className="pagina">

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="hero">

        <img
          className="heroImagem"
          src="https://www.ispsn.org/sites/default/files/images/news/img_6062.jpeg"
          alt="Paisagem agrícola de Angola"
        />

        <div className="heroEscuro" />

        <div className="heroConteudo">

          <div className="linha">

            <span>
              AGROINOVA ANGOLA
            </span>

            <span>
              DIRECTÓRIO AGRÍCOLA
            </span>

            <span>
              GIS TERRITORIAL
            </span>

          </div>

          <h1>
            Fazendas
            <br />
            de Angola
          </h1>

          <p>
            Directório territorial de explorações
            agrícolas e agropecuárias com localização,
            produção, área documentada e informação
            pública disponível.
          </p>

        </div>

      </section>

      {/* ===================================================
          ESTATÍSTICAS
      =================================================== */}

      <section className="estatisticas">

        <div>
          <strong>
            {fazendas.length}
          </strong>

          <span>
            Registos
          </span>
        </div>

        <div>
          <strong>
            {provinciasComDados}
          </strong>

          <span>
            Províncias
          </span>
        </div>

        <div>
          <strong>
            {localizacoesExactas}
          </strong>

          <span>
            Coordenadas exactas
          </span>
        </div>

        <div>
          <strong>
            {imagens}
          </strong>

          <span>
            Imagens públicas
          </span>
        </div>

        <div>
          <strong>
            {totalArea > 0
              ? totalArea.toLocaleString(
                  "pt-PT",
                  {
                    maximumFractionDigits: 1
                  }
                )
              : "N/D"}
          </strong>

          <span>
            ha documentados
          </span>
        </div>

      </section>

      {/* ===================================================
          CONTROLO
      =================================================== */}

      <section className="controle">

        <div className="cabecalho">

          <div>
            <span>
              DIRECTÓRIO NACIONAL
            </span>

            <h2>
              Explorar as fazendas
            </h2>

            <p>
              Consulte as explorações por província,
              actividade, localização e informação
              territorial disponível.
            </p>
          </div>

          <button
            className="botaoMapa"
            onClick={() =>
              setMostrarMapa(
                !mostrarMapa
              )
            }
          >
            {mostrarMapa
              ? "FECHAR MAPA"
              : "ABRIR MAPA GIS"}
          </button>

        </div>

        <div className="filtros">

          <div className="campo grande">

            <label>
              PESQUISAR
            </label>

            <input
              value={pesquisa}
              onChange={(e) =>
                setPesquisa(
                  e.target.value
                )
              }
              placeholder="Fazenda, município, cultura..."
            />

          </div>

          <div className="campo">

            <label>
              PROVÍNCIA
            </label>

            <select
              value={provincia}
              onChange={(e) =>
                setProvincia(
                  e.target.value
                )
              }
            >
              {provincias.map(
                (p) => (
                  <option
                    key={p}
                    value={p}
                  >
                    {p}
                  </option>
                )
              )}
            </select>

          </div>

          <div className="campo">

            <label>
              ACTIVIDADE
            </label>

            <select
              value={actividade}
              onChange={(e) =>
                setActividade(
                  e.target.value
                )
              }
            >
              {actividades.map(
                (a) => (
                  <option
                    key={a}
                    value={a}
                  >
                    {a}
                  </option>
                )
              )}
            </select>

          </div>

          <div className="campo">

            <label>
              LOCALIZAÇÃO
            </label>

            <select
              value={localizacao}
              onChange={(e) =>
                setLocalizacao(
                  e.target.value
                )
              }
            >

              <option value="Todas">
                Todas
              </option>

              <option value="exacta">
                Coordenada exacta
              </option>

              <option value="aproximada">
                Localização aproximada
              </option>

            </select>

          </div>

        </div>

        <div className="linhaFiltros">

          <select
            value={estado}
            onChange={(e) =>
              setEstado(
                e.target.value
              )
            }
          >
            <option value="Todos">
              Todos os estados
            </option>

            <option value="Operacional">
              Operacional
            </option>

            <option value="Em desenvolvimento">
              Em desenvolvimento
            </option>

            <option value="Projecto">
              Projecto
            </option>

            <option value="Referência pública">
              Referência pública
            </option>
          </select>

          <span>
            {resultados.length}
            {" "}
            fazendas encontradas
          </span>

        </div>

      </section>

      {/* ===================================================
          MAPA COMPACTO
      =================================================== */}

      {mostrarMapa && (

        <section className="mapaArea">

          <div className="mapaTopo">

            <div>

              <span>
                GIS AGROINOVA
              </span>

              <h2>
                Distribuição territorial
              </h2>

              <p>
                As 79 referências são representadas
                territorialmente. Os pontos aproximados
                correspondem à localidade pública conhecida;
                não representam o limite cadastral da fazenda.
              </p>

            </div>

            <div className="legenda">

              <div>
                <i className="verde" />
                Exacta
              </div>

              <div>
                <i className="amarelo" />
                Aproximada
              </div>

            </div>

          </div>

          <div className="mapaCompacto">

            <div className="mapaPaisagem">

              <div className="textoMapa">
                ANGOLA
              </div>

              {fazendas.map(
                (fazenda) => {

                  const x =
                    50 +
                    ((fazenda.lng - 17) /
                      10) *
                      50;

                  const y =
                    50 +
                    ((-11.5 -
                      fazenda.lat) /
                      12) *
                      45;

                  const left =
                    Math.max(
                      5,
                      Math.min(
                        95,
                        x
                      )
                    );

                  const top =
                    Math.max(
                      7,
                      Math.min(
                        90,
                        y
                      )
                    );

                  return (
                    <button
                      key={fazenda.id}
                      className={
                        fazenda.nivelLocalizacao ===
                        "exacta"
                          ? "ponto exacto"
                          : "ponto aproximado"
                      }
                      style={{
                        left: `${left}%`,
                        top: `${top}%`
                      }}
                      title={
                        fazenda.nome
                      }
                      onClick={() =>
                        abrirFazenda(
                          fazenda
                        )
                      }
                    >
                      <span />

                      <small>
                        {fazenda.nome}
                      </small>
                    </button>
                  );
                }
              )}

              <div className="linhaMapa l1" />
              <div className="linhaMapa l2" />
              <div className="linhaMapa l3" />

            </div>

            <div className="mapaInfo">

              <span>
                {fazendas.length} referências
              </span>

              <span>
                {localizacoesExactas} exactas
              </span>

              <span>
                {fazendas.length -
                  localizacoesExactas} aproximadas
              </span>

            </div>

          </div>

        </section>

      )}

      {/* ===================================================
          LISTAGEM
      =================================================== */}

      <section className="directorio">

        <div className="tituloDirectorio">

          <div>

            <span>
              EXPLORAÇÕES
            </span>

            <h2>
              Todas as fazendas
            </h2>

          </div>

          <p>
            A informação territorial é apresentada
            conforme os dados públicos encontrados.
          </p>

        </div>

        <div className="grid">

          {resultados.map(
            (fazenda) => (

              <article
                className="card"
                key={fazenda.id}
              >

                <div className="cardImagem">

                  {fazenda.imagens.length >
                  0 ? (

                    <img
                      src={
                        fazenda.imagens[0]
                          .url
                      }
                      alt={
                        fazenda.nome
                      }
                    />

                  ) : (

                    <div className="semFoto">

                      <span>
                        AGROINOVA
                      </span>

                      <strong>
                        {fazenda.nome}
                      </strong>

                      <small>
                        Fotografia pública
                        não localizada
                      </small>

                    </div>

                  )}

                  <span className="badge">
                    {fazenda.nivelLocalizacao ===
                    "exacta"
                      ? "LOCALIZAÇÃO EXACTA"
                      : "LOCALIZAÇÃO APROXIMADA"}
                  </span>

                </div>

                <div className="cardCorpo">

                  <div className="local">
                    {fazenda.provincia}
                    {" · "}
                    {fazenda.municipio}
                  </div>

                  <h3>
                    {fazenda.nome}
                  </h3>

                  <p>
                    {fazenda.descricao}
                  </p>

                  <div className="tags">

                    {fazenda.actividade
                      .slice(0, 3)
                      .map(
                        (item) => (
                          <span
                            key={item}
                          >
                            {item}
                          </span>
                        )
                      )}

                    {fazenda.culturas
                      .slice(0, 2)
                      .map(
                        (item) => (
                          <span
                            key={item}
                          >
                            {item}
                          </span>
                        )
                      )}

                  </div>

                  <div className="miniDados">

                    <div>
                      <small>
                        ÁREA
                      </small>

                      <strong>
                        {fazenda.areaTotal
                          ? `${fazenda.areaTotal.toLocaleString(
                              "pt-PT"
                            )} ha`
                          : "N/D"}
                      </strong>
                    </div>

                    <div>
                      <small>
                        CULTIVADA
                      </small>

                      <strong>
                        {fazenda.areaCultivada
                          ? `${fazenda.areaCultivada.toLocaleString(
                              "pt-PT"
                            )} ha`
                          : "N/D"}
                      </strong>
                    </div>

                    <div>
                      <small>
                        POTENCIAL
                      </small>

                      <strong>
                        {fazenda.potencial}%
                      </strong>
                    </div>

                  </div>

                  <button
                    className="abrir"
                    onClick={() =>
                      abrirFazenda(
                        fazenda
                      )
                    }
                  >
                    VER FICHA COMPLETA
                  </button>

                </div>

              </article>

            )
          )}

        </div>

      </section>

      {/* ===================================================
          MODAL
      =================================================== */}

      {selecionada && (

        <div
          className="modal"
          onClick={
            fecharFazenda
          }
        >

          <div
            className="janela"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="fechar"
              onClick={
                fecharFazenda
              }
            >
              FECHAR
            </button>

            {/* TOPO */}

            <header className="modalHeader">

              <div>

                <span>
                  {selecionada.provincia}
                  {" · "}
                  {selecionada.municipio}
                </span>

                <h2>
                  {selecionada.nome}
                </h2>

                <p>
                  {selecionada.estado}
                </p>

              </div>

              <div className="score">

                <strong>
                  {selecionada.potencial}%
                </strong>

                <span>
                  Índice AGROINOVA
                </span>

              </div>

            </header>

            {/* IMAGEM */}

            <section className="galeria">

              {selecionada.imagens.length >
              0 ? (

                <>

                  <img
                    src={
                      selecionada.imagens[
                        slide
                      ].url
                    }
                    alt={
                      selecionada.imagens[
                        slide
                      ].legenda
                    }
                  />

                  {selecionada.imagens.length >
                    1 && (

                    <>
                      <button
                        className="seta esquerda"
                        onClick={
                          slideAnterior
                        }
                      >
                        ‹
                      </button>

                      <button
                        className="seta direita"
                        onClick={
                          proximoSlide
                        }
                      >
                        ›
                      </button>
                    </>
                  )}

                  <div className="fonteFoto">
                    {
                      selecionada.imagens[
                        slide
                      ].fonte
                    }
                  </div>

                </>

              ) : (

                <div className="semImagemGrande">

                  <strong>
                    IMAGEM REAL NÃO DISPONÍVEL
                  </strong>

                  <p>
                    Esta ficha não utiliza
                    fotografias genéricas.
                  </p>

                </div>

              )}

            </section>

            {/* GRID */}

            <section className="informacao">

              <div>

                <span className="label">
                  IDENTIFICAÇÃO
                </span>

                <h3>
                  Localização
                </h3>

                <div className="lista">

                  <div>
                    <span>
                      Província
                    </span>

                    <strong>
                      {selecionada.provincia}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Município
                    </span>

                    <strong>
                      {selecionada.municipio}
                    </strong>
                  </div>

                  {selecionada.local && (
                    <div>
                      <span>
                        Local
                      </span>

                      <strong>
                        {selecionada.local}
                      </strong>
                    </div>
                  )}

                  <div>
                    <span>
                      Localização
                    </span>

                    <strong>
                      {selecionada.nivelLocalizacao ===
                      "exacta"
                        ? "Coordenada exacta"
                        : "Referência aproximada"}
                    </strong>
                  </div>

                </div>

              </div>

              <div>

                <span className="label">
                  PRODUÇÃO
                </span>

                <h3>
                  Actividades e culturas
                </h3>

                <div className="producao">

                  {selecionada.actividade.map(
                    (item) => (
                      <span
                        key={item}
                      >
                        {item}
                      </span>
                    )
                  )}

                  {selecionada.culturas.map(
                    (item) => (
                      <span
                        key={item}
                      >
                        {item}
                      </span>
                    )
                  )}

                  {selecionada.pecuaria.map(
                    (item) => (
                      <span
                        key={item}
                      >
                        {item}
                      </span>
                    )
                  )}

                </div>

              </div>

            </section>

            {/* TERRENO */}

            <section className="bloco">

              <span className="label">
                ESTRUTURA TERRITORIAL
              </span>

              <h3>
                Área da exploração
              </h3>

              <div className="areaGrid">

                <div>
                  <small>
                    ÁREA TOTAL
                  </small>

                  <strong>
                    {selecionada.areaTotal !==
                    undefined
                      ? `${selecionada.areaTotal.toLocaleString(
                          "pt-PT"
                        )} ha`
                      : "N/D"}
                  </strong>
                </div>

                <div>
                  <small>
                    ÁREA CULTIVADA
                  </small>

                  <strong>
                    {selecionada.areaCultivada !==
                    undefined
                      ? `${selecionada.areaCultivada.toLocaleString(
                          "pt-PT"
                        )} ha`
                      : "N/D"}
                  </strong>
                </div>

                <div>
                  <small>
                    NÃO CULTIVADA
                  </small>

                  <strong>
                    {selecionada.areaNaoCultivada !==
                    undefined
                      ? `${selecionada.areaNaoCultivada.toLocaleString(
                          "pt-PT"
                        )} ha`
                      : "N/D"}
                  </strong>
                </div>

                <div>
                  <small>
                    USO DO SOLO
                  </small>

                  <strong>
                    {selecionada.usoSolo}
                  </strong>
                </div>

              </div>

              {selecionada.areaTotal !==
                undefined &&
                selecionada.areaCultivada !==
                  undefined && (

                <div className="barra">

                  <div
                    style={{
                      width: `${Math.min(
                        100,
                        (selecionada.areaCultivada /
                          selecionada.areaTotal) *
                          100
                      )}%`
                    }}
                  />

                </div>

              )}

              <p className="nota">

                Quando a área total e a área cultivada
                estão documentadas, a área não cultivada
                é calculada automaticamente pela diferença.
                Quando a fonte não apresenta esses dados,
                a plataforma mantém “N/D” em vez de inventar
                valores.

              </p>

            </section>

            {/* MAPA */}

            <section className="bloco">

              <div className="mapaTituloModal">

                <div>

                  <span className="label">
                    GIS
                  </span>

                  <h3>
                    Localização geográfica
                  </h3>

                </div>

                <span
                  className={
                    selecionada.nivelLocalizacao ===
                    "exacta"
                      ? "tipoExacto"
                      : "tipoAproximado"
                  }
                >
                  {selecionada.nivelLocalizacao ===
                  "exacta"
                    ? "COORDENADA EXACTA"
                    : "LOCALIZAÇÃO APROXIMADA"}
                </span>

              </div>

              <div className="mapaFicha">

                <iframe
                  src={mapaEmbed(
                    selecionada
                  )}
                  title={
                    `Mapa ${selecionada.nome}`
                  }
                  loading="lazy"
                />

              </div>

              <div className="coordenadas">

                <span>
                  LAT:
                  {" "}
                  {selecionada.lat.toFixed(
                    6
                  )}
                </span>

                <span>
                  LNG:
                  {" "}
                  {selecionada.lng.toFixed(
                    6
                  )}
                </span>

                <button
                  onClick={() =>
                    abrirMapa(
                      selecionada
                    )
                  }
                >
                  ABRIR MAPA
                </button>

              </div>

              <p className="nota">

                {selecionada.nivelLocalizacao ===
                "exacta"
                  ? "Esta localização possui coordenadas geográficas públicas associadas à exploração."
                  : "Esta posição é uma referência aproximada da localidade/município. Não representa o limite da propriedade nem deve ser utilizada como coordenada cadastral."}

              </p>

            </section>

            {/* POTENCIAL */}

            <section className="bloco">

              <span className="label">
                ANÁLISE AGROINOVA
              </span>

              <h3>
                Potencial da exploração
              </h3>

              <div className="potencialLinha">

                <div className="potencialBarra">

                  <div
                    style={{
                      width:
                        `${selecionada.potencial}%`
                    }}
                  />

                </div>

                <strong>
                  {selecionada.potencial}%
                </strong>

              </div>

              <p className="nota">

                O Índice AGROINOVA é um indicador
                analítico da plataforma. Não constitui
                classificação oficial de uma entidade
                pública.

              </p>

            </section>

            {/* ESPECIAL */}

            <section className="bloco">

              <span className="label">
                INFORMAÇÃO ESPECIAL
              </span>

              <h3>
                Características
              </h3>

              <div className="especialGrid">

                {selecionada.especial.map(
                  (item) => (
                    <div key={item}>
                      {item}
                    </div>
                  )
                )}

              </div>

            </section>

            {/* FONTE */}

            <section className="fonte">

              <div>

                <span>
                  FONTE
                </span>

                <strong>
                  {selecionada.fonte}
                </strong>

              </div>

              {selecionada.urlFonte && (
                <a
                  href={
                    selecionada.urlFonte
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  CONSULTAR FONTE
                </a>
              )}

            </section>

            {/* OBSERVAÇÃO */}

            {selecionada.observacao && (

              <div className="observacao">

                <strong>
                  NOTA TERRITORIAL
                </strong>

                <p>
                  {selecionada.observacao}
                </p>

              </div>

            )}

          </div>

        </div>
      )}

      {/* ===================================================
          CSS
      =================================================== */}

      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        .pagina {
          min-height: 100vh;
          background: #f4f7f4;
          color: #18231c;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        /* HERO */

        .hero {
          height: 480px;
          position: relative;
          overflow: hidden;
          background: #102b1a;
        }

        .heroImagem {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .heroEscuro {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(3,20,10,.95),
              rgba(3,20,10,.68),
              rgba(3,20,10,.20)
            );
        }

        .heroConteudo {
          position: relative;
          max-width: 1300px;
          margin: auto;
          padding: 55px 30px;
          color: white;
        }

        .linha {
          display: flex;
          gap: 28px;
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 800;
          opacity: .82;
          margin-bottom: 90px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(
            50px,
            7vw,
            86px
          );
          line-height: .92;
          letter-spacing: -4px;
        }

        .hero p {
          max-width: 650px;
          margin-top: 25px;
          color: rgba(
            255,
            255,
            255,
            .78
          );
          line-height: 1.7;
          font-size: 16px;
        }

        /* ESTATÍSTICAS */

        .estatisticas {
          max-width: 1250px;
          margin: -35px auto 0;
          position: relative;
          z-index: 5;
          background: white;
          border-radius: 10px;
          display: grid;
          grid-template-columns:
            repeat(5, 1fr);
          overflow: hidden;
          box-shadow:
            0 15px 45px
            rgba(20,50,30,.11);
        }

        .estatisticas div {
          padding: 23px;
          border-right:
            1px solid #e4e9e4;
        }

        .estatisticas div:last-child {
          border: 0;
        }

        .estatisticas strong {
          display: block;
          font-size: 24px;
          color: #14733f;
        }

        .estatisticas span {
          display: block;
          margin-top: 6px;
          font-size: 9px;
          color: #78827b;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        /* CONTROLO */

        .controle,
        .directorio,
        .mapaArea {
          max-width: 1250px;
          margin: 85px auto;
          padding: 0 25px;
        }

        .cabecalho,
        .tituloDirectorio {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
        }

        .cabecalho span,
        .tituloDirectorio span,
        .mapaTopo span,
        .label {
          font-size: 10px;
          color: #168047;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .cabecalho h2,
        .tituloDirectorio h2,
        .mapaTopo h2 {
          margin: 8px 0;
          font-size: 35px;
          letter-spacing: -1.4px;
        }

        .cabecalho p,
        .tituloDirectorio p,
        .mapaTopo p {
          color: #707b73;
          line-height: 1.6;
          max-width: 600px;
        }

        .botaoMapa {
          height: 46px;
          border: 1px solid #176f3e;
          background: #176f3e;
          color: white;
          padding: 0 20px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
          cursor: pointer;
          border-radius: 4px;
        }

        .botaoMapa:hover {
          background: #10542e;
        }

        .filtros {
          margin-top: 30px;
          display: grid;
          grid-template-columns:
            2fr 1fr 1fr 1fr;
          gap: 12px;
        }

        .campo label {
          display: block;
          margin-bottom: 7px;
          font-size: 9px;
          font-weight: 900;
          color: #69746d;
          letter-spacing: 1px;
        }

        .campo input,
        .campo select,
        .linhaFiltros select {
          width: 100%;
          height: 47px;
          border: 1px solid #d9e0da;
          border-radius: 5px;
          background: white;
          padding: 0 13px;
          font-size: 13px;
          outline: none;
        }

        .campo input:focus,
        .campo select:focus,
        .linhaFiltros select:focus {
          border-color: #168047;
        }

        .linhaFiltros {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }

        .linhaFiltros select {
          width: 220px;
        }

        .linhaFiltros span {
          font-size: 11px;
          color: #778178;
        }

        /* MAPA */

        .mapaArea {
          margin-top: 40px;
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow:
            0 8px 30px
            rgba(30,60,35,.06);
        }

        .mapaTopo {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 20px;
        }

        .mapaTopo h2 {
          font-size: 27px;
        }

        .mapaTopo p {
          margin: 0;
          max-width: 700px;
          font-size: 12px;
        }

        .legenda {
          display: flex;
          gap: 18px;
          font-size: 10px;
          color: #69736c;
        }

        .legenda div {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .legenda i {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: block;
        }

        .verde {
          background: #11783e;
        }

        .amarelo {
          background: #d59b2c;
        }

        .mapaCompacto {
          height: 390px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #dce4dd;
          position: relative;
        }

        .mapaPaisagem {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              135deg,
              #e5eee3,
              #d3e3d2
            );
          overflow: hidden;
        }

        .textoMapa {
          position: absolute;
          left: 50%;
          top: 50%;
          transform:
            translate(-50%, -50%);
          font-size: 100px;
          font-weight: 900;
          color: rgba(
            30,
            75,
            40,
            .055
          );
          letter-spacing: 8px;
        }

        .linhaMapa {
          position: absolute;
          background:
            rgba(
              91,
              129,
              94,
              .13
            );
          height: 1px;
          width: 120%;
          left: -10%;
          transform: rotate(-18deg);
        }

        .l1 {
          top: 30%;
        }

        .l2 {
          top: 54%;
          transform:
            rotate(12deg);
        }

        .l3 {
          top: 76%;
          transform:
            rotate(-7deg);
        }

        .ponto {
          position: absolute;
          transform:
            translate(-50%, -50%);
          border: 0;
          background: transparent;
          z-index: 10;
          cursor: pointer;
        }

        .ponto span {
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow:
            0 2px 9px
            rgba(0,0,0,.25);
        }

        .ponto.exacto span {
          background: #11783e;
        }

        .ponto.aproximado span {
          background: #d59b2c;
        }

        .ponto small {
          display: none;
          position: absolute;
          top: 16px;
          left: 50%;
          transform:
            translateX(-50%);
          white-space: nowrap;
          background: white;
          padding: 6px 8px;
          border-radius: 3px;
          font-size: 9px;
          color: #26342b;
          box-shadow:
            0 4px 12px
            rgba(0,0,0,.13);
        }

        .ponto:hover {
          z-index: 30;
        }

        .ponto:hover small {
          display: block;
        }

        .mapaInfo {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(
            255,
            255,
            255,
            .94
          );
          display: flex;
          justify-content: flex-end;
          gap: 25px;
          padding: 11px 16px;
          font-size: 9px;
          color: #657168;
          letter-spacing: .6px;
        }

        /* DIRECTÓRIO */

        .tituloDirectorio {
          margin-bottom: 30px;
        }

        .tituloDirectorio p {
          max-width: 400px;
          margin: 0;
          font-size: 12px;
        }

        .grid {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 20px;
        }

        .card {
          background: white;
          border: 1px solid #e0e6e1;
          border-radius: 8px;
          overflow: hidden;
          transition: .2s ease;
        }

        .card:hover {
          transform:
            translateY(-4px);
          box-shadow:
            0 15px 35px
            rgba(30,60,35,.09);
        }

        .cardImagem {
          height: 205px;
          position: relative;
          overflow: hidden;
          background: #e3eae3;
        }

        .cardImagem img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .semFoto {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          padding: 20px;
          background:
            linear-gradient(
              135deg,
              #edf2ed,
              #dfe8df
            );
        }

        .semFoto span {
          font-size: 8px;
          color: #819087;
          letter-spacing: 2px;
          font-weight: 900;
        }

        .semFoto strong {
          margin-top: 10px;
          font-size: 17px;
          color: #3b4a40;
        }

        .semFoto small {
          margin-top: 7px;
          color: #7c877f;
          font-size: 10px;
        }

        .badge {
          position: absolute;
          right: 12px;
          top: 12px;
          background: white;
          padding: 6px 8px;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: .5px;
          border-radius: 3px;
        }

        .cardCorpo {
          padding: 19px;
        }

        .local {
          color: #168047;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .card h3 {
          margin: 7px 0;
          font-size: 19px;
        }

        .card p {
          color: #707b73;
          font-size: 12px;
          line-height: 1.6;
          min-height: 76px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin: 13px 0;
        }

        .tags span,
        .producao span {
          background: #edf5ee;
          color: #21683e;
          padding: 6px 8px;
          border-radius: 3px;
          font-size: 9px;
        }

        .miniDados {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          border-top:
            1px solid #e5eae5;
          border-bottom:
            1px solid #e5eae5;
          padding: 12px 0;
        }

        .miniDados div {
          border-right:
            1px solid #e5eae5;
          padding-left: 9px;
        }

        .miniDados div:first-child {
          padding-left: 0;
        }

        .miniDados div:last-child {
          border: 0;
        }

        .miniDados small {
          display: block;
          font-size: 7px;
          color: #879189;
          letter-spacing: .6px;
        }

        .miniDados strong {
          display: block;
          margin-top: 4px;
          font-size: 12px;
        }

        .abrir {
          width: 100%;
          height: 42px;
          margin-top: 15px;
          background: #176f3e;
          color: white;
          border: 0;
          border-radius: 4px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
          cursor: pointer;
        }

        .abrir:hover {
          background: #10552f;
        }

        /* MODAL */

        .modal {
          position: fixed;
          inset: 0;
          background:
            rgba(4,17,9,.78);
          z-index: 100;
          overflow-y: auto;
          padding: 25px;
        }

        .janela {
          max-width: 1050px;
          margin: auto;
          background: #f5f8f5;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }

        .fechar {
          position: absolute;
          right: 18px;
          top: 18px;
          z-index: 20;
          border: 0;
          background: white;
          padding: 9px 12px;
          font-size: 8px;
          font-weight: 900;
          cursor: pointer;
        }

        .modalHeader {
          background: white;
          padding: 38px;
          display: flex;
          justify-content: space-between;
          gap: 25px;
        }

        .modalHeader span {
          font-size: 9px;
          color: #168047;
          letter-spacing: 1.3px;
          font-weight: 900;
        }

        .modalHeader h2 {
          font-size: 34px;
          margin: 8px 0;
          letter-spacing: -1px;
        }

        .modalHeader p {
          color: #778178;
          font-size: 12px;
          margin: 0;
        }

        .score {
          text-align: right;
        }

        .score strong {
          display: block;
          color: #168047;
          font-size: 43px;
        }

        .score span {
          color: #778178;
          font-size: 8px;
        }

        .galeria {
          height: 400px;
          position: relative;
          background:
            #dfe7df;
        }

        .galeria > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .semImagemGrande {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: #6f7b72;
        }

        .semImagemGrande strong {
          font-size: 11px;
          letter-spacing: 2px;
        }

        .semImagemGrande p {
          font-size: 12px;
        }

        .fonteFoto {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background:
            rgba(0,0,0,.62);
          color: white;
          padding: 7px 9px;
          font-size: 8px;
        }

        .seta {
          position: absolute;
          top: 50%;
          transform:
            translateY(-50%);
          width: 40px;
          height: 40px;
          border: 0;
          border-radius: 50%;
          background: white;
          font-size: 25px;
          cursor: pointer;
        }

        .esquerda {
          left: 15px;
        }

        .direita {
          right: 15px;
        }

        .informacao {
          padding: 35px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          background: white;
        }

        .informacao h3,
        .bloco h3 {
          font-size: 22px;
          margin: 8px 0 20px;
        }

        .lista {
          border-top:
            1px solid #e2e8e2;
        }

        .lista div {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom:
            1px solid #e2e8e2;
        }

        .lista span {
          color: #7a857d;
          font-size: 11px;
        }

        .lista strong {
          font-size: 11px;
        }

        .producao {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .bloco {
          margin: 20px 35px;
          padding: 25px;
          background: white;
          border: 1px solid #e0e6e0;
        }

        .areaGrid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          border-top:
            1px solid #e4e9e4;
          border-bottom:
            1px solid #e4e9e4;
        }

        .areaGrid div {
          padding: 18px 10px;
          border-right:
            1px solid #e4e9e4;
        }

        .areaGrid div:last-child {
          border: 0;
        }

        .areaGrid small {
          display: block;
          font-size: 7px;
          color: #89938c;
          letter-spacing: .7px;
        }

        .areaGrid strong {
          display: block;
          margin-top: 7px;
          font-size: 15px;
        }

        .barra,
        .potencialBarra {
          height: 9px;
          background: #e2e8e2;
          border-radius: 10px;
          overflow: hidden;
          margin-top: 20px;
        }

        .barra div,
        .potencialBarra div {
          height: 100%;
          background: #168047;
        }

        .nota {
          color: #7a857d;
          font-size: 10px;
          line-height: 1.6;
        }

        .mapaTituloModal {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .tipoExacto,
        .tipoAproximado {
          font-size: 8px;
          font-weight: 900;
          padding: 7px 9px;
          border-radius: 3px;
        }

        .tipoExacto {
          color: #126d39;
          background: #e5f2e8;
        }

        .tipoAproximado {
          color: #8a6518;
          background: #f8efd9;
        }

        .mapaFicha {
          height: 330px;
          overflow: hidden;
          border: 1px solid #dbe2dc;
          border-radius: 5px;
        }

        .mapaFicha iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        .coordenadas {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 10px;
          font-family: monospace;
          font-size: 10px;
          color: #667169;
        }

        .coordenadas button {
          margin-left: auto;
          border: 0;
          background: #176f3e;
          color: white;
          padding: 9px 12px;
          font-size: 8px;
          font-weight: 900;
          cursor: pointer;
        }

        .potencialLinha {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .potencialBarra {
          flex: 1;
          margin-top: 0;
        }

        .potencialLinha strong {
          color: #168047;
          font-size: 20px;
        }

        .especialGrid {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 8px;
        }

        .especialGrid div {
          padding: 13px;
          background: #f1f5f1;
          border: 1px solid #e1e7e1;
          font-size: 10px;
          color: #526057;
        }

        .fonte {
          margin: 30px 35px;
          padding: 20px 0;
          border-top:
            1px solid #dce3dc;
          border-bottom:
            1px solid #dce3dc;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .fonte span {
          display: block;
          color: #168047;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .fonte strong {
          display: block;
          margin-top: 5px;
          font-size: 11px;
        }

        .fonte a {
          background: #176f3e;
          color: white;
          padding: 10px 13px;
          text-decoration: none;
          font-size: 8px;
          font-weight: 900;
        }

        .observacao {
          margin: 0 35px 35px;
          background: #edf3ed;
          border-left:
            3px solid #176f3e;
          padding: 18px;
        }

        .observacao strong {
          color: #176f3e;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .observacao p {
          color: #68736c;
          font-size: 11px;
          line-height: 1.6;
          margin-bottom: 0;
        }

        /* RESPONSIVO */

        @media(max-width: 1000px) {

          .estatisticas {
            grid-template-columns:
              repeat(3, 1fr);
            margin: 20px;
          }

          .filtros {
            grid-template-columns:
              1fr 1fr;
          }

          .grid {
            grid-template-columns:
              1fr 1fr;
          }

        }

        @media(max-width: 700px) {

          .hero {
            height: 570px;
          }

          .heroConteudo {
            padding: 35px 20px;
          }

          .linha {
            flex-wrap: wrap;
            margin-bottom: 70px;
          }

          .hero h1 {
            font-size: 48px;
            letter-spacing: -2px;
          }

          .estatisticas {
            grid-template-columns:
              1fr 1fr;
          }

          .filtros {
            grid-template-columns:
              1fr;
          }

          .cabecalho,
          .tituloDirectorio,
          .mapaTopo {
            display: block;
          }

          .botaoMapa {
            margin-top: 20px;
          }

          .linhaFiltros {
            display: block;
          }

          .linhaFiltros select {
            width: 100%;
          }

          .linhaFiltros span {
            display: block;
            margin-top: 10px;
          }

          .mapaArea {
            padding: 18px;
          }

          .mapaCompacto {
            height: 330px;
          }

          .grid {
            grid-template-columns:
              1fr;
          }

          .modal {
            padding: 0;
          }

          .janela {
            min-height: 100vh;
            border-radius: 0;
          }

          .modalHeader {
            padding: 30px 20px;
            display: block;
          }

          .score {
            text-align: left;
            margin-top: 15px;
          }

          .galeria {
            height: 300px;
          }

          .informacao {
            grid-template-columns:
              1fr;
            padding: 25px 20px;
          }

          .bloco {
            margin: 15px 20px;
            padding: 20px;
          }

          .areaGrid {
            grid-template-columns:
              1fr 1fr;
          }

          .areaGrid div:nth-child(2) {
            border-right: 0;
          }

          .especialGrid {
            grid-template-columns:
              1fr 1fr;
          }

          .fonte {
            margin: 25px 20px;
            display: block;
          }

          .fonte a {
            display: inline-block;
            margin-top: 12px;
          }

          .observacao {
            margin: 0 20px 25px;
          }

          .coordenadas {
            flex-wrap: wrap;
          }

          .coordenadas button {
            margin-left: 0;
          }

        }

      `}</style>

    </main>
  );
}