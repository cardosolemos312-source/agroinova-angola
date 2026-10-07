"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type EspecieId =
  | "bovinos"
  | "suinos"
  | "caprinos"
  | "ovinos"
  | "galinhas"
  | "patos"
  | "perus"
  | "codornizes"
  | "equinos"
  | "asininos"
  | "bubalinos"
  | "coelhos"
  | "apicultura"
  | "aquacultura"
  | "helicicultura";

interface Secao {
  titulo: string;
  texto: string;
  pontos?: string[];
}

interface Tema {
  id: string;
  nome: string;
  icone: string;
}

interface Especie {
  id: EspecieId;
  nome: string;
  singular: string;
  icone: string;
  grupo: string;
  resumo: string;
  importancia: string;
  realidade: string;
  secoes: Secao[];
  temas: Tema[];
}

type StatusRota = "disponivel" | "em-preparacao";

interface RotaTema {
  href: string;
  status: StatusRota;
}

/* ============================================================
   ESPÉCIES
   ============================================================ */

const especies: Especie[] = [
  {
    id: "bovinos",
    nome: "Bovinos",
    singular: "Bovino",
    icone: "🐄",
    grupo: "Grandes ruminantes",
    resumo:
      "Orientações para produção de carne, leite, reprodução, tracção animal e gestão do efectivo bovino.",
    importancia:
      "Os bovinos podem participar em sistemas familiares, agropastoris, comerciais e mistos. A finalidade da exploração deve orientar a escolha dos animais, alimentação, reprodução, instalações e maneio.",
    realidade:
      "Em Angola, a orientação deve considerar diferenças entre regiões, disponibilidade de pastagem e água, dimensão da exploração, finalidade produtiva e capacidade de acompanhamento veterinário. Não existe um único modelo de criação adequado para todas as províncias.",
    temas: [
      { id: "racas", nome: "Raças", icone: "🧬" },
      { id: "alimentacao", nome: "Alimentação", icone: "🌾" },
      { id: "instalacoes", nome: "Instalações", icone: "🏠" },
      { id: "sanidade", nome: "Sanidade", icone: "🩺" },
      { id: "reproducao", nome: "Reprodução", icone: "🧬" },
      { id: "agua", nome: "Água", icone: "💧" },
    ],
    secoes: [
      {
        titulo: "Sistema de criação",
        texto:
          "Antes de escolher animais ou construir instalações, o produtor deve definir o sistema de criação. Pode existir criação baseada principalmente em pastagem, sistema misto com suplementação ou sistemas mais intensivos. A decisão deve considerar terra disponível, mão de obra, água, alimentação, mercado e assistência técnica.",
        pontos: [
          "Definir a finalidade principal da exploração.",
          "Avaliar disponibilidade de pastagem durante todo o ano.",
          "Planear fontes de água para a época seca.",
          "Separar animais por categoria quando necessário.",
        ],
      },
      {
        titulo: "Alimentação e pastagem",
        texto:
          "A alimentação dos bovinos deve fornecer energia, proteína, minerais e água em quantidade adequada. Nas explorações dependentes de pastagem, a qualidade e disponibilidade do pasto podem variar bastante entre a época chuvosa e a época seca. O produtor deve antecipar períodos de menor disponibilidade de alimento.",
        pontos: [
          "Avaliar regularmente a condição corporal dos animais.",
          "Evitar sobrepastoreio prolongado.",
          "Planear reservas de forragem quando tecnicamente possível.",
          "Usar suplementação de acordo com a categoria e finalidade.",
        ],
      },
      {
        titulo: "Água",
        texto:
          "A disponibilidade de água é um dos elementos essenciais da produção bovina. A água deve ser acessível, limpa e suficiente para o efectivo. Em zonas com maior irregularidade de disponibilidade hídrica, a exploração deve possuir um plano para períodos de menor disponibilidade.",
      },
      {
        titulo: "Sanidade",
        texto:
          "A prevenção sanitária deve integrar observação diária, higiene, controlo de movimentação dos animais, isolamento de animais doentes quando indicado e acompanhamento veterinário. Vacinação e tratamentos devem seguir o programa sanitário oficialmente aplicável e a orientação de profissionais habilitados.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução deve ser acompanhada através de registos de cobrições, partos, abortos, fertilidade e desempenho das fêmeas e reprodutores. A selecção deve considerar adaptação, saúde, conformação e finalidade produtiva, e não apenas aparência.",
      },
      {
        titulo: "Bezerros",
        texto:
          "Os primeiros períodos de vida exigem atenção especial. O produtor deve observar a ingestão adequada de colostro, higiene, comportamento, alimentação, crescimento e sinais de doença. Qualquer alteração importante deve ser avaliada por profissional habilitado.",
      },
      {
        titulo: "Época seca",
        texto:
          "Quando a produção depende de pastagem, a época seca pode reduzir a disponibilidade e qualidade do alimento. O produtor deve acompanhar a condição corporal e preparar previamente alimentação suplementar ou reservas de forragem quando estas forem viáveis.",
      },
      {
        titulo: "Época chuvosa",
        texto:
          "A época chuvosa exige atenção à drenagem, lama, higiene, conservação de alimentos e condições de abrigo. O excesso de humidade pode aumentar alguns riscos sanitários e favorecer problemas de instalações.",
      },
      {
        titulo: "Registos da exploração",
        texto:
          "Registos simples ajudam a transformar a criação numa actividade gerida. Devem ser anotados nascimentos, mortes, tratamentos, vacinações, reprodução, compras, vendas e alterações relevantes do efectivo.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "O RAPP 2019/2020 mostra a importância da pecuária nas explorações angolanas e permite estudar os sistemas de produção existentes. Esses dados devem ser usados com o respectivo período de referência, sem serem apresentados como estatísticas actuais de 2026.",
      },
    ],
  },

  {
    id: "suinos",
    nome: "Suínos",
    singular: "Suíno",
    icone: "🐖",
    grupo: "Monogástricos",
    resumo:
      "Conhecimento para criação familiar e comercial de suínos, com atenção à alimentação, higiene, reprodução e biossegurança.",
    importancia:
      "A suinicultura pode integrar pequenas explorações familiares e unidades comerciais. O controlo da alimentação, água, higiene e sanidade é fundamental para reduzir perdas.",
    realidade:
      "Em Angola, a escolha do sistema deve considerar custo e disponibilidade dos alimentos, água, instalações, mercado local, capacidade de limpeza e acesso a assistência veterinária.",
    
     temas: [
  { id: "racas", nome: "Raças e genética", icone: "🧬" },
  { id: "alimentacao", nome: "Alimentação", icone: "🌾" },
  { id: "instalacoes", nome: "Instalações", icone: "🏠" },
  { id: "sanidade", nome: "Sanidade", icone: "🩺" },
  { id: "agua", nome: "Água", icone: "💧" },
],
    secoes: [
      {
        titulo: "Escolha dos animais",
        texto:
          "A escolha dos reprodutores deve considerar saúde, origem conhecida, crescimento, conformação, capacidade reprodutiva e objectivo da exploração. Não é recomendável seleccionar animais apenas pelo tamanho ou aparência.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve ser equilibrada e adequada à fase de crescimento ou reprodução. O produtor deve evitar alterações bruscas da dieta e controlar o armazenamento dos alimentos para reduzir contaminação e desperdício.",
        pontos: [
          "Separar animais por fases quando a exploração permitir.",
          "Garantir acesso regular à água.",
          "Evitar alimentos deteriorados ou contaminados.",
          "Registar consumo e desempenho quando possível.",
        ],
      },
      {
        titulo: "Instalações",
        texto:
          "As instalações devem facilitar limpeza, drenagem, alimentação, acesso à água, observação dos animais e separação de grupos. O excesso de humidade e a acumulação de resíduos devem ser evitados.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução deve ser acompanhada com registos de cobrições, partos, tamanho das ninhadas, mortalidade e desempenho das porcas. O acompanhamento permite identificar animais com problemas reprodutivos.",
      },
      {
        titulo: "Biossegurança",
        texto:
          "A entrada de animais, pessoas, equipamentos e veículos pode representar risco sanitário. A exploração deve estabelecer procedimentos de limpeza, controlo de acesso, observação de novos animais e separação de animais doentes.",
      },
      {
        titulo: "Leitões",
        texto:
          "Os leitões precisam de ambiente limpo, seco e protegido, acesso adequado ao alimento e água conforme a fase e observação frequente. Alterações de comportamento, diarreia, dificuldade respiratória ou mortalidade devem ser comunicadas a um profissional.",
      },
      {
        titulo: "Sanidade",
        texto:
          "O calendário sanitário não deve ser inventado pela plataforma. Vacinação, desparasitação e tratamentos devem seguir o programa sanitário aplicável e indicação veterinária.",
      },
      {
        titulo: "Comercialização",
        texto:
          "O produtor deve conhecer previamente o mercado, peso ou categoria procurada, custos de alimentação, transporte e perdas. A venda deve ser registada para permitir avaliação económica.",
      },
      {
        titulo: "Época quente",
        texto:
          "Temperaturas elevadas podem afectar o consumo, comportamento e desempenho dos suínos. A ventilação, sombra, disponibilidade de água e conforto térmico devem ser avaliados.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A suinicultura pode assumir diferentes escalas em Angola. As recomendações devem ser adaptadas ao tipo de exploração, disponibilidade de insumos, água, mão de obra e mercado, sem presumir que todas as unidades possuem as mesmas condições.",
      },
    ],
  },

  {
    id: "caprinos",
    nome: "Caprinos",
    singular: "Caprino",
    icone: "🐐",
    grupo: "Pequenos ruminantes",
    resumo:
      "Orientações para criação de cabras em sistemas familiares, agropastoris e comerciais.",
    importancia:
      "Os caprinos podem integrar sistemas de pequena escala e aproveitamento de recursos forrageiros. O maneio deve proteger os animais contra fome, sede, doenças, predadores e condições ambientais adversas.",
    realidade:
      "A disponibilidade de vegetação, água e abrigo varia entre regiões de Angola. O produtor deve adaptar o sistema às condições locais em vez de copiar um modelo único.",
  temas: [
  { id: "racas", nome: "Raças e genética", icone: "🧬" },
  { id: "alimentacao", nome: "Alimentação", icone: "🌾" },
  { id: "instalacoes", nome: "Instalações", icone: "🏠" },
  { id: "sanidade", nome: "Sanidade", icone: "🩺" },
  { id: "cabritos", nome: "Cabritos", icone: "🐐" },
  { id: "pastoreio", nome: "Pastoreio", icone: "🌿" },
],


    secoes: [
      {
        titulo: "Sistema de criação",
        texto:
          "Os caprinos podem ser criados em pastoreio, sistema misto ou sistemas mais controlados. O modelo escolhido deve considerar terra, vegetação, água, mão de obra, segurança e finalidade.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve fornecer nutrientes suficientes para manutenção, crescimento, reprodução e produção. A disponibilidade de vegetação pode mudar significativamente ao longo do ano.",
      },
      {
        titulo: "Água",
        texto:
          "Os animais devem ter acesso a água adequada. Bebedouros devem ser mantidos limpos e instalados de forma a reduzir contaminação por fezes e lama.",
      },
      {
        titulo: "Abrigo",
        texto:
          "O abrigo deve proteger contra chuva, vento, excesso de calor e predadores. O piso deve permitir drenagem e limpeza.",
      },
      {
        titulo: "Parasitas",
        texto:
          "Parasitas internos e externos podem comprometer crescimento e condição corporal. O controlo deve ser baseado em avaliação dos animais e orientação veterinária, evitando tratamentos indiscriminados.",
      },
      {
        titulo: "Reprodução",
        texto:
          "É importante seleccionar reprodutores saudáveis e manter registos de cobrições, partos, abortos e desempenho das fêmeas.",
      },
      {
        titulo: "Cabritos",
        texto:
          "Os cabritos devem ser observados desde o nascimento, com atenção à ingestão de colostro, temperatura, higiene, alimentação e sinais de doença.",
      },
      {
        titulo: "Pastoreio",
        texto:
          "O uso contínuo da mesma área pode favorecer degradação da vegetação. Sempre que possível, o produtor deve organizar o acesso às áreas de pastagem e evitar pressão excessiva.",
      },
      {
        titulo: "Época seca",
        texto:
          "Durante períodos de menor disponibilidade de vegetação, a condição corporal deve ser acompanhada e deve existir um plano de alimentação complementar quando necessário.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "O RAPP 2019/2020 identificou os caprinos como uma das espécies importantes nas explorações angolanas. O número do recenseamento deve ser interpretado como dado daquele período e não como estimativa actual.",
      },
    ],
  },

  {
    id: "ovinos",
    nome: "Ovinos",
    singular: "Ovino",
    icone: "🐑",
    grupo: "Pequenos ruminantes",
    resumo:
      "Conhecimento para produção de ovinos com atenção à alimentação, pastoreio, reprodução e sanidade.",
    importancia:
      "Os ovinos podem ser integrados em sistemas de pastoreio e sistemas mistos. O desempenho depende da alimentação, saúde, reprodução e adaptação dos animais às condições da exploração.",
    realidade:
      "O sistema deve ser adaptado à disponibilidade de pastagem, água, abrigo e capacidade de assistência técnica existente na região.",
    temas: [
      { id: "alimentacao", nome: "Alimentação", icone: "🌿" },
      { id: "pastoreio", nome: "Pastoreio", icone: "🌱" },
      { id: "sanidade", nome: "Sanidade", icone: "🩺" },
      { id: "reproducao", nome: "Reprodução", icone: "🔄" },
      { id: "cordeiros", nome: "Cordeiros", icone: "🐑" },
      { id: "abrigo", nome: "Abrigo", icone: "🏠" },
    ],
    secoes: [
      {
        titulo: "Escolha do efectivo",
        texto:
          "Os animais devem ser seleccionados de acordo com a finalidade da exploração e capacidade de adaptação às condições existentes. Saúde e desempenho devem ter prioridade sobre critérios exclusivamente visuais.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A qualidade da pastagem e a disponibilidade de alimento variam durante o ano. A suplementação pode ser necessária em determinadas fases ou períodos, devendo ser planeada conforme os recursos disponíveis.",
      },
      {
        titulo: "Pastoreio",
        texto:
          "A gestão do pastoreio deve reduzir a pressão excessiva sobre as áreas disponíveis. O produtor deve observar a condição das pastagens e dos animais.",
      },
      {
        titulo: "Sanidade",
        texto:
          "A vigilância diária permite identificar alterações de apetite, comportamento, locomoção, condição corporal e sinais de doença. Programas sanitários devem ser definidos com profissionais habilitados.",
      },
      {
        titulo: "Reprodução",
        texto:
          "Registos reprodutivos ajudam a identificar fêmeas e machos com melhor desempenho e problemas de fertilidade.",
      },
      {
        titulo: "Cordeiros",
        texto:
          "Os cordeiros exigem atenção especial ao nascimento, colostro, higiene, alimentação e desenvolvimento. A mortalidade deve ser registada para identificar problemas recorrentes.",
      },
      {
        titulo: "Abrigo",
        texto:
          "Os abrigos devem manter os animais secos e protegidos, com boa ventilação e espaço suficiente para movimentação e descanso.",
      },
      {
        titulo: "Água",
        texto:
          "A água deve estar disponível em quantidade adequada e ser mantida limpa. A necessidade pode variar conforme ambiente, alimentação e categoria animal.",
      },
      {
        titulo: "Época seca",
        texto:
          "A redução de pastagem pode afectar condição corporal e reprodução. A preparação de reservas alimentares deve começar antes de a disponibilidade de alimento se tornar crítica.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "Os ovinos fazem parte da produção pecuária registada no RAPP 2019/2020. A utilização desses dados no portal deve manter sempre a referência temporal do recenseamento.",
      },
    ],
  },

  {
    id: "galinhas",
    nome: "Galinhas",
    singular: "Galinhas",
    icone: "🐔",
    grupo: "Avicultura",
    resumo:
      "Orientações para galinhas de corte, poedeiras e criação familiar.",
    importancia:
      "A avicultura pode ter ciclos produtivos relativamente curtos e pode existir em diferentes escalas. Alimentação, água, ambiente e biossegurança têm grande influência no desempenho.",
    realidade:
      "A produção deve considerar custo e disponibilidade de ração, energia, água, instalações, acesso a pintos, assistência veterinária e mercado.",
    temas: [
      { id: "corte", nome: "Frango de corte", icone: "🍗" },
      { id: "poedeiras", nome: "Poedeiras", icone: "🥚" },
      { id: "alimentacao", nome: "Alimentação", icone: "🌾" },
      { id: "sanidade", nome: "Sanidade", icone: "🩺" },
      { id: "instalacoes", nome: "Instalações", icone: "🏠" },
      { id: "biosseguranca", nome: "Biossegurança", icone: "🛡️" },
    ],
    secoes: [
      {
        titulo: "Definir a finalidade",
        texto:
          "Antes de iniciar uma exploração deve ficar definido se o objectivo é carne, ovos, reprodução ou criação familiar. Cada finalidade possui exigências diferentes.",
      },
      {
        titulo: "Pintos",
        texto:
          "Os primeiros dias são críticos. Temperatura adequada, água, alimento, higiene e observação frequente são fundamentais para reduzir perdas.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve acompanhar a fase produtiva. Rações e matérias-primas devem ser armazenadas em condições que reduzam humidade, contaminação e desperdício.",
      },
      {
        titulo: "Água",
        texto:
          "A água deve ser limpa e estar disponível continuamente. Bebedouros devem ser verificados e higienizados regularmente.",
      },
      {
        titulo: "Ventilação",
        texto:
          "A instalação precisa permitir renovação de ar sem criar correntes prejudiciais. O excesso de calor e gases provenientes das fezes pode afectar o desempenho e a saúde.",
      },
      {
        titulo: "Biossegurança",
        texto:
          "O controlo de visitantes, limpeza, desinfecção, entrada de aves e equipamentos e separação de lotes são componentes importantes da biossegurança.",
      },
      {
        titulo: "Sanidade",
        texto:
          "A vacinação e outras medidas sanitárias devem seguir o programa aplicável e orientação veterinária. A plataforma não deve inventar um calendário único para todas as explorações.",
      },
      {
        titulo: "Poedeiras",
        texto:
          "Nas poedeiras, deve-se acompanhar consumo, produção de ovos, qualidade da casca, mortalidade, condição corporal e condições ambientais.",
      },
      {
        titulo: "Frango de corte",
        texto:
          "Na produção de carne, o produtor deve acompanhar crescimento, consumo, mortalidade, uniformidade do lote e condições de cama e ventilação.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A avicultura possui grande relevância no país. O RAPP 2019/2020 registou mais de oito milhões de galinhas, mas esse valor pertence ao período do recenseamento e não deve ser apresentado como efectivo actual.",
      },
    ],
  },

  {
    id: "patos",
    nome: "Patos",
    singular: "Pato",
    icone: "🦆",
    grupo: "Avicultura",
    resumo:
      "Orientações para criação de patos em pequena escala e sistemas comerciais.",
    importancia:
      "Os patos podem ser criados para carne, ovos ou reprodução. O acesso à água deve ser gerido de forma adequada, sem confundir acesso à água de bebida com necessidade de grandes corpos de água.",
    realidade:
      "A viabilidade depende de alimentação, instalações, disponibilidade de água, higiene e procura no mercado local.",
    temas: [
      { id: "alimentacao", nome: "Alimentação", icone: "🌾" },
      { id: "agua", nome: "Água", icone: "💧" },
      { id: "instalacoes", nome: "Instalações", icone: "🏠" },
      { id: "sanidade", nome: "Sanidade", icone: "🩺" },
      { id: "reproducao", nome: "Reprodução", icone: "🥚" },
      { id: "maneio", nome: "Maneio", icone: "🐥" },
    ],
    secoes: [
      {
        titulo: "Finalidade",
        texto:
          "Defina se a produção será destinada a carne, ovos, reprodução ou consumo familiar antes de dimensionar a exploração.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A dieta deve ser adequada à idade e finalidade. Alimentos húmidos, mofados ou deteriorados devem ser evitados.",
      },
      {
        titulo: "Água",
        texto:
          "A água de bebida deve permanecer limpa. Quando houver acesso a água para banho, deve existir gestão da qualidade e drenagem para evitar excesso de humidade.",
      },
      {
        titulo: "Instalações",
        texto:
          "Os abrigos devem ser secos, ventilados e protegidos. A acumulação de humidade deve ser evitada.",
      },
      {
        titulo: "Sanidade",
        texto:
          "A observação diária, limpeza e controlo de entrada de novas aves são componentes importantes da prevenção sanitária.",
      },
      {
        titulo: "Reprodução",
        texto:
          "O controlo dos reprodutores, ninhos e ovos deve ser acompanhado através de registos simples.",
      },
      {
        titulo: "Patinhos",
        texto:
          "Os animais jovens exigem ambiente protegido, alimentação apropriada, água e higiene.",
      },
      {
        titulo: "Mortalidade",
        texto:
          "Qualquer aumento inesperado da mortalidade deve ser investigado rapidamente e comunicado ao responsável técnico.",
      },
      {
        titulo: "Comercialização",
        texto:
          "O produtor deve conhecer a procura local antes de aumentar significativamente o efectivo.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "O RAPP 2019/2020 incluiu patos entre as aves registadas no recenseamento. Os dados servem para caracterizar o período censitário, não para estimar automaticamente a situação actual.",
      },
    ],
  },

  {
    id: "perus",
    nome: "Perus",
    singular: "Peru",
    icone: "🦃",
    grupo: "Avicultura",
    resumo:
      "Informações de apoio para criação de perus e organização de pequenos lotes.",
    importancia:
      "A criação de perus exige planeamento de alimentação, espaço, higiene e mercado. Pode ser uma actividade complementar quando houver procura.",
    realidade:
      "A produção deve ser dimensionada conforme disponibilidade de alimento, instalações, água e mercado, evitando aumentar o efectivo sem capacidade de maneio.",
    temas: [
      { id: "alimentacao", nome: "Alimentação", icone: "🌾" },
      { id: "instalacoes", nome: "Instalações", icone: "🏠" },
      { id: "sanidade", nome: "Sanidade", icone: "🩺" },
      { id: "crescimento", nome: "Crescimento", icone: "📈" },
      { id: "reproducao", nome: "Reprodução", icone: "🥚" },
      { id: "mercado", nome: "Mercado", icone: "🛒" },
    ],
    secoes: [
      {
        titulo: "Planeamento",
        texto:
          "O produtor deve calcular capacidade de alojamento, alimentação, água e mercado antes de adquirir os animais.",
      },
      {
        titulo: "Alimentação",
        texto:
          "As necessidades mudam conforme a idade. Uma alimentação inadequada pode afectar crescimento e resistência.",
      },
      {
        titulo: "Instalações",
        texto:
          "O espaço deve ser seco, limpo, ventilado e protegido de predadores e condições ambientais adversas.",
      },
      {
        titulo: "Sanidade",
        texto:
          "A prevenção depende de higiene, biossegurança, observação e acompanhamento veterinário.",
      },
      {
        titulo: "Crescimento",
        texto:
          "Registos de peso ou indicadores de crescimento ajudam a perceber se a alimentação e o maneio estão a funcionar.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução exige selecção adequada dos reprodutores e registo dos resultados.",
      },
      {
        titulo: "Manejo dos jovens",
        texto:
          "As aves jovens precisam de atenção especial às condições ambientais e ao acesso ao alimento e água.",
      },
      {
        titulo: "Mercado",
        texto:
          "A produção deve ser alinhada com a procura local e com os custos de alimentação e transporte.",
      },
      {
        titulo: "Biossegurança",
        texto:
          "Evitar contacto desnecessário com aves de origem desconhecida ajuda a reduzir riscos sanitários.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A criação de perus existe no universo das aves consideradas pelo recenseamento, mas não deve ser tratada como equivalente à dimensão da avicultura de galinhas.",
      },
    ],
  },

  {
    id: "codornizes",
    nome: "Codornizes",
    singular: "Codorniz",
    icone: "🐦",
    grupo: "Avicultura",
    resumo:
      "Orientações para produção de ovos e carne de codorniz em pequenas unidades.",
    importancia:
      "A codornicultura pode ser desenvolvida em pequena escala quando existe mercado e capacidade para alimentação, instalações e maneio.",
    realidade:
      "Antes de investir, é importante verificar procura local e disponibilidade de alimentação e equipamentos adequados.",
    temas: [
      { id: "instalacoes", nome: "Instalações", icone: "🏠" },
      { id: "alimentacao", nome: "Alimentação", icone: "🌾" },
      { id: "ovos", nome: "Produção de ovos", icone: "🥚" },
      { id: "sanidade", nome: "Sanidade", icone: "🩺" },
      { id: "reproducao", nome: "Reprodução", icone: "🔄" },
      { id: "mercado", nome: "Mercado", icone: "🛒" },
    ],
    secoes: [
      {
        titulo: "Dimensionamento",
        texto:
          "A exploração deve começar com uma dimensão compatível com a capacidade de alimentação, limpeza e comercialização.",
      },
      {
        titulo: "Instalações",
        texto:
          "As instalações devem facilitar recolha de ovos, limpeza, alimentação e observação das aves.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve ser adequada à fase e finalidade produtiva. O armazenamento deve proteger a ração contra humidade e contaminação.",
      },
      {
        titulo: "Produção de ovos",
        texto:
          "Devem ser registados número de ovos, ovos partidos, consumo de alimento e mortalidade para avaliar desempenho.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Limpeza, controlo de acesso e observação diária são fundamentais para detectar alterações rapidamente.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução deve ser organizada para evitar perdas e manter lotes controlados.",
      },
      {
        titulo: "Temperatura",
        texto:
          "As condições ambientais devem ser acompanhadas, especialmente em instalações com elevada densidade.",
      },
      {
        titulo: "Higiene",
        texto:
          "A acumulação de fezes, poeira e humidade deve ser controlada através de limpeza e ventilação.",
      },
      {
        titulo: "Mercado",
        texto:
          "A produção só deve ser ampliada quando existir procura suficientemente previsível.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A codornicultura deve ser apresentada no portal como actividade de nicho, sem inventar uma dimensão nacional que não esteja sustentada por dados oficiais.",
      },
    ],
  },

  {
    id: "equinos",
    nome: "Equinos",
    singular: "Equino",
    icone: "🐎",
    grupo: "Animais de trabalho e produção",
    resumo:
      "Orientações para criação, maneio, alimentação, reprodução e utilização responsável de cavalos.",
    importancia:
      "Os equinos podem ser utilizados para trabalho, transporte, reprodução, lazer e outras actividades. O sistema deve priorizar saúde, alimentação, água e bem-estar.",
    realidade:
      "Em determinadas explorações, os animais de trabalho podem desempenhar papel importante nas actividades rurais. O maneio deve respeitar a capacidade física dos animais.",
    temas: [
      { id: "alimentacao", nome: "Alimentação", icone: "🌾" },
      { id: "agua", nome: "Água", icone: "💧" },
      { id: "casco", nome: "Cascos", icone: "🦶" },
      { id: "sanidade", nome: "Sanidade", icone: "🩺" },
      { id: "trabalho", nome: "Trabalho", icone: "🚜" },
      { id: "reproducao", nome: "Reprodução", icone: "🔄" },
    ],
    secoes: [
      {
        titulo: "Alimentação",
        texto:
          "A dieta deve ser adequada à actividade, condição corporal e disponibilidade de forragem. Mudanças alimentares devem ser feitas de forma controlada.",
      },
      {
        titulo: "Água",
        texto:
          "Água limpa deve estar disponível. Animais submetidos a trabalho precisam de atenção especial à hidratação.",
      },
      {
        titulo: "Cascos",
        texto:
          "Os cascos devem ser observados regularmente. Alterações de marcha ou dor devem ser avaliadas.",
      },
      {
        titulo: "Trabalho",
        texto:
          "A carga e duração do trabalho devem ser compatíveis com condição física, idade, ambiente e capacidade do animal.",
      },
      {
        titulo: "Descanso",
        texto:
          "Períodos adequados de descanso são essenciais para reduzir fadiga e lesões.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Exames, vacinação, controlo parasitário e outros procedimentos devem seguir orientação veterinária.",
      },
      {
        titulo: "Instalações",
        texto:
          "Abrigos devem proteger contra condições ambientais adversas e permitir repouso adequado.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução deve considerar saúde e características dos progenitores.",
      },
      {
        titulo: "Transporte",
        texto:
          "O transporte deve minimizar stress, lesões e sofrimento e cumprir as exigências aplicáveis.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "O RAPP 2019/2020 incluiu equinos entre os sistemas pecuários observados. O papel destes animais deve ser analisado conforme a actividade e a região da exploração.",
      },
    ],
  },

  {
    id: "asininos",
    nome: "Asininos",
    singular: "Asinino",
    icone: "🫏",
    grupo: "Animais de trabalho",
    resumo:
      "Conhecimento para maneio, alimentação, saúde e utilização responsável de asininos.",
    importancia:
      "Os asininos podem apoiar transporte e trabalho rural. A sua contribuição depende de alimentação, saúde, condição física e maneio adequado.",
    realidade:
      "O animal de trabalho deve ser considerado parte da capacidade produtiva da exploração e não apenas como equipamento.",
    temas: [
      { id: "alimentacao", nome: "Alimentação", icone: "🌾" },
      { id: "agua", nome: "Água", icone: "💧" },
      { id: "trabalho", nome: "Trabalho", icone: "🚜" },
      { id: "cascos", nome: "Cascos", icone: "🦶" },
      { id: "sanidade", nome: "Sanidade", icone: "🩺" },
      { id: "bem-estar", nome: "Bem-estar", icone: "❤️" },
    ],
    secoes: [
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve ser suficiente e adequada ao trabalho realizado. A condição corporal deve ser observada regularmente.",
      },
      {
        titulo: "Água",
        texto:
          "O acesso à água deve ser garantido, principalmente em períodos de trabalho e temperaturas elevadas.",
      },
      {
        titulo: "Carga de trabalho",
        texto:
          "O trabalho deve ser compatível com idade, condição física, ambiente e capacidade do animal.",
      },
      {
        titulo: "Cascos",
        texto:
          "Lesões nos cascos podem reduzir significativamente a capacidade de trabalho. A observação e manutenção adequada são importantes.",
      },
      {
        titulo: "Equipamento de trabalho",
        texto:
          "Arreios inadequados podem provocar ferimentos. O equipamento deve ser ajustado e verificado.",
      },
      {
        titulo: "Descanso",
        texto:
          "O animal precisa de períodos de recuperação suficientes.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Acompanhamento veterinário, controlo de parasitas e vacinação devem seguir orientação profissional.",
      },
      {
        titulo: "Bem-estar",
        texto:
          "Dor, ferimentos, desidratação e fadiga devem ser tratados como sinais de necessidade de intervenção.",
      },
      {
        titulo: "Reprodução",
        texto:
          "A reprodução deve ser planeada e considerar saúde dos animais.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "O RAPP 2019/2020 registou asininos em sistemas de criação do país. A utilização e importância económica variam conforme a exploração.",
      },
    ],
  },

  {
    id: "bubalinos",
    nome: "Bubalinos",
    singular: "Bubalino",
    icone: "🐃",
    grupo: "Grandes ruminantes",
    resumo:
      "Informação de base para produção e maneio de búfalos, apresentada com cautela devido à menor expressão documentada face a bovinos.",
    importancia:
      "Os bubalinos podem ter interesse para carne, leite e reprodução, mas a introdução ou expansão da actividade deve ser precedida por avaliação técnica e económica.",
    realidade:
      "Não se deve assumir que um modelo de bubalinocultura utilizado noutro país é automaticamente adequado a Angola. Disponibilidade de animais, alimentação, água, instalações, mercado e assistência devem ser avaliadas.",
    temas: [
      { id: "adaptacao", nome: "Adaptação", icone: "🌍" },
      { id: "alimentacao", nome: "Alimentação", icone: "🌾" },
      { id: "agua", nome: "Água", icone: "💧" },
      { id: "sanidade", nome: "Sanidade", icone: "🩺" },
      { id: "reproducao", nome: "Reprodução", icone: "🔄" },
      { id: "instalacoes", nome: "Instalações", icone: "🏠" },
    ],
    secoes: [
      {
        titulo: "Avaliação antes do investimento",
        texto:
          "A exploração deve avaliar a disponibilidade real de animais, alimento, água, assistência veterinária e mercado antes de investir numa unidade especializada.",
      },
      {
        titulo: "Alimentação",
        texto:
          "Como ruminantes, os bubalinos dependem de uma alimentação adequada em energia, proteína, minerais e fibra.",
      },
      {
        titulo: "Água e ambiente",
        texto:
          "A água deve estar disponível e ser mantida limpa. Condições ambientais de calor devem ser consideradas no desenho do sistema.",
      },
      {
        titulo: "Instalações",
        texto:
          "As instalações devem permitir manejo seguro, contenção, alimentação, acesso à água e observação.",
      },
      {
        titulo: "Sanidade",
        texto:
          "O programa sanitário deve ser definido com os serviços veterinários competentes.",
      },
      {
        titulo: "Reprodução",
        texto:
          "Registos de reprodução são necessários para avaliar fertilidade e desempenho.",
      },
      {
        titulo: "Leite",
        texto:
          "Quando o objectivo for leite, a higiene da ordenha, alimentação e qualidade do produto devem ser consideradas desde o início.",
      },
      {
        titulo: "Carne",
        texto:
          "Na produção de carne, o produtor deve acompanhar crescimento, condição corporal e eficiência alimentar.",
      },
      {
        titulo: "Mercado",
        texto:
          "Antes da expansão, é necessário avaliar compradores, processamento, transporte e custos.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A bubalinocultura não deve ser apresentada como uma cadeia pecuária de dimensão nacional equivalente à bovinocultura sem dados que sustentem essa afirmação.",
      },
    ],
  },

  {
    id: "coelhos",
    nome: "Coelhos",
    singular: "Coelho",
    icone: "🐇",
    grupo: "Pequenos animais",
    resumo:
      "Orientações para cunicultura de pequena escala e produção comercial.",
    importancia:
      "A criação de coelhos pode ser desenvolvida em espaços relativamente pequenos, desde que alimentação, higiene, ventilação e controlo sanitário sejam adequados.",
    realidade:
      "A actividade deve começar de acordo com o mercado disponível e a capacidade de produzir ou adquirir alimento de qualidade.",
    temas: [
      { id: "instalacoes", nome: "Instalações", icone: "🏠" },
      { id: "alimentacao", nome: "Alimentação", icone: "🌾" },
      { id: "reproducao", nome: "Reprodução", icone: "🔄" },
      { id: "sanidade", nome: "Sanidade", icone: "🩺" },
      { id: "crescimento", nome: "Crescimento", icone: "📈" },
      { id: "mercado", nome: "Mercado", icone: "🛒" },
    ],
    secoes: [
      {
        titulo: "Instalações",
        texto:
          "As instalações devem proteger contra calor excessivo, chuva, predadores e humidade. A limpeza deve ser fácil.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve fornecer fibra e nutrientes adequados. Alterações bruscas devem ser evitadas.",
      },
      {
        titulo: "Água",
        texto:
          "Água limpa deve estar disponível regularmente.",
      },
      {
        titulo: "Reprodução",
        texto:
          "O produtor deve manter registos das cobrições, partos, tamanho das ninhadas e mortalidade.",
      },
      {
        titulo: "Ninhadas",
        texto:
          "Os láparos devem ser observados quanto a alimentação, desenvolvimento, higiene e sinais de doença.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Higiene, ventilação e controlo de entrada de animais ajudam a reduzir riscos.",
      },
      {
        titulo: "Calor",
        texto:
          "As temperaturas elevadas podem afectar o desempenho reprodutivo e a saúde, sendo importante garantir ambiente adequado.",
      },
      {
        titulo: "Crescimento",
        texto:
          "O acompanhamento do peso ou de indicadores de crescimento ajuda a avaliar alimentação e maneio.",
      },
      {
        titulo: "Abate e comercialização",
        texto:
          "Os requisitos sanitários e legais aplicáveis à comercialização devem ser respeitados.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A cunicultura deve ser tratada como actividade que pode ser avaliada localmente, sem inventar uma dimensão nacional que não esteja demonstrada por estatísticas oficiais.",
      },
    ],
  },

  {
    id: "apicultura",
    nome: "Apicultura",
    singular: "Abelha",
    icone: "🐝",
    grupo: "Produção apícola",
    resumo:
      "Orientações para produção de mel e outros produtos apícolas, com foco em segurança, ambiente e maneio das colmeias.",
    importancia:
      "A apicultura depende da relação entre colónias, flora, clima, água, segurança e localização dos apiários.",
    realidade:
      "As condições de flora variam entre regiões e épocas do ano. O produtor deve conhecer o calendário de floração local e evitar colocar colmeias em locais de risco.",
    temas: [
      { id: "apiario", nome: "Apiário", icone: "🐝" },
      { id: "alimentacao", nome: "Recursos florais", icone: "🌸" },
      { id: "maneio", nome: "Maneio", icone: "🧑‍🌾" },
      { id: "sanidade", nome: "Sanidade", icone: "🩺" },
      { id: "mel", nome: "Mel", icone: "🍯" },
      { id: "seguranca", nome: "Segurança", icone: "🛡️" },
    ],
    secoes: [
      {
        titulo: "Escolha do local",
        texto:
          "O apiário deve ser instalado em local adequado, seguro e com acesso a recursos florais. A proximidade de habitações e locais de circulação deve ser avaliada.",
      },
      {
        titulo: "Flora",
        texto:
          "A produtividade está relacionada com a disponibilidade de plantas com recursos para as abelhas. O produtor deve observar a floração ao longo do ano.",
      },
      {
        titulo: "Água",
        texto:
          "A disponibilidade de água na área é importante para as colónias. Fontes de água devem ser avaliadas quanto à segurança e qualidade.",
      },
      {
        titulo: "Maneio",
        texto:
          "As colmeias devem ser inspeccionadas de forma adequada e com equipamento de protecção apropriado.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Doenças e pragas das abelhas devem ser identificadas e tratadas com orientação técnica adequada.",
      },
      {
        titulo: "Colheita",
        texto:
          "A colheita deve preservar a qualidade do mel e evitar contaminação.",
      },
      {
        titulo: "Higiene",
        texto:
          "Equipamentos, recipientes e superfícies utilizados no processamento devem ser mantidos limpos.",
      },
      {
        titulo: "Segurança",
        texto:
          "O produtor deve utilizar equipamento de protecção e organizar o trabalho para reduzir acidentes.",
      },
      {
        titulo: "Mercado",
        texto:
          "A comercialização deve considerar qualidade, embalagem, armazenamento, rotulagem e requisitos aplicáveis.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A apicultura pode beneficiar da diversidade de recursos florais existentes em Angola, mas a produtividade concreta depende do local e da época. A plataforma deve evitar generalizações sem dados locais.",
      },
    ],
  },

  {
    id: "aquacultura",
    nome: "Aquacultura",
    singular: "Peixe de aquacultura",
    icone: "🐟",
    grupo: "Produção aquícola",
    resumo:
      "Orientações de base para produção de organismos aquáticos em sistemas controlados.",
    importancia:
      "A aquacultura exige gestão de água, alimentação, densidade, qualidade ambiental, sanidade e comercialização.",
    realidade:
      "Em Angola, a escolha do sistema deve considerar disponibilidade e qualidade da água, clima, espécie criada, alimentação, energia, mercado e capacidade técnica.",
    temas: [
      { id: "agua", nome: "Qualidade da água", icone: "💧" },
      { id: "especies", nome: "Espécies", icone: "🐟" },
      { id: "alimentacao", nome: "Alimentação", icone: "🌾" },
      { id: "tanques", nome: "Tanques", icone: "🏞️" },
      { id: "sanidade", nome: "Sanidade", icone: "🩺" },
      { id: "colheita", nome: "Colheita", icone: "🎣" },
    ],
    secoes: [
      {
        titulo: "Escolha da espécie",
        texto:
          "A espécie deve ser escolhida de acordo com condições ambientais, disponibilidade de alevinos, alimentação, legislação, mercado e experiência técnica.",
      },
      {
        titulo: "Água",
        texto:
          "A qualidade da água é central para a produção. Alterações importantes devem ser detectadas através de monitorização adequada.",
      },
      {
        titulo: "Tanques",
        texto:
          "Os tanques devem ser projectados para facilitar abastecimento, drenagem, limpeza e controlo dos animais.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve ser ajustada à espécie e fase de crescimento. Excesso de alimento pode deteriorar a qualidade da água.",
      },
      {
        titulo: "Densidade",
        texto:
          "A densidade deve ser compatível com capacidade do sistema. A sobrelotação aumenta o risco de stress e problemas de qualidade da água.",
      },
      {
        titulo: "Sanidade",
        texto:
          "Peixes mortos ou com comportamento anormal devem ser investigados rapidamente.",
      },
      {
        titulo: "Alevinos",
        texto:
          "A qualidade dos alevinos influencia o desempenho do sistema. A origem deve ser conhecida e controlada.",
      },
      {
        titulo: "Energia e equipamentos",
        texto:
          "Sistemas que dependem de bombas ou arejamento devem possuir plano de contingência para falhas de energia quando necessário.",
      },
      {
        titulo: "Colheita",
        texto:
          "A colheita deve minimizar perdas e preservar a qualidade do produto.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A aquacultura foi abrangida pelo RAPP 2019/2020. O desenvolvimento da actividade deve ser analisado conforme recursos hídricos, espécies, infraestrutura e mercado de cada projecto.",
      },
    ],
  },

  {
    id: "helicicultura",
    nome: "Helicicultura",
    singular: "Caracol",
    icone: "🐌",
    grupo: "Actividade alternativa",
    resumo:
      "Informação introdutória sobre criação de caracóis, apresentada como actividade alternativa que requer validação técnica e de mercado em Angola.",
    importancia:
      "A criação de caracóis pode ser considerada uma actividade especializada, mas não deve ser apresentada como uma cadeia pecuária estabelecida em todo o país sem evidência.",
    realidade:
      "Antes de investir, é necessário confirmar espécies permitidas, condições ambientais, alimentação, biossegurança, mercado e requisitos legais aplicáveis.",
    temas: [
      { id: "ambiente", nome: "Ambiente", icone: "🌿" },
      { id: "alimentacao", nome: "Alimentação", icone: "🥬" },
      { id: "instalacoes", nome: "Instalações", icone: "🏠" },
      { id: "reproducao", nome: "Reprodução", icone: "🥚" },
      { id: "biosseguranca", nome: "Biossegurança", icone: "🛡️" },
      { id: "mercado", nome: "Mercado", icone: "🛒" },
    ],
    secoes: [
      {
        titulo: "Antes de iniciar",
        texto:
          "A primeira etapa deve ser avaliar se existe mercado e se a espécie pretendida pode ser criada legalmente nas condições do projecto.",
      },
      {
        titulo: "Ambiente",
        texto:
          "Humidade, temperatura, abrigo e qualidade do substrato devem ser controlados conforme as exigências da espécie.",
      },
      {
        titulo: "Alimentação",
        texto:
          "A alimentação deve ser adequada à espécie. Materiais contaminados ou de origem desconhecida devem ser evitados.",
      },
      {
        titulo: "Instalações",
        texto:
          "As instalações devem impedir fuga, entrada de predadores e contaminação.",
      },
      {
        titulo: "Reprodução",
        texto:
          "O produtor deve conhecer o ciclo da espécie antes de dimensionar a produção.",
      },
      {
        titulo: "Higiene",
        texto:
          "A limpeza e controlo do ambiente são importantes para reduzir mortalidade.",
      },
      {
        titulo: "Biossegurança",
        texto:
          "Não se deve libertar animais de criação no ambiente. A introdução de espécies deve ser avaliada de acordo com as regras aplicáveis.",
      },
      {
        titulo: "Mercado",
        texto:
          "Sem comprador definido, a expansão da produção representa um risco económico.",
      },
      {
        titulo: "Processamento",
        texto:
          "Qualquer processamento para alimentação humana deve respeitar os requisitos sanitários aplicáveis.",
      },
      {
        titulo: "Realidade angolana",
        texto:
          "A helicicultura deve ser apresentada no AGROINOVA como uma actividade alternativa ou especializada, e não como uma cadeia pecuária de grande expressão nacional sem dados que comprovem essa dimensão.",
      },
    ],
  },
];

/* ============================================================
   PROVÍNCIAS
   ============================================================ */

const provincias = [
  "Angola",
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
  "Cubango",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
  "Huambo",
  "Huíla",
  "Icolo e Bengo",
  "Luanda",
  "Lunda Norte",
  "Lunda Sul",
  "Malanje",
  "Moxico",
  "Moxico Leste",
  "Namibe",
  "Uíge",
  "Zaire",
];

/* ============================================================
   FINALIDADES
   ============================================================ */

const finalidades = [
  "Produção de carne",
  "Produção de leite",
  "Produção de ovos",
  "Reprodução",
  "Criação familiar",
  "Produção comercial",
  "Animal de trabalho",
  "Produção de mel",
  "Aquacultura",
];

/* ============================================================
   ROTAS TÉCNICAS
   ============================================================
   
   "disponivel":
   a página já existe e pode receber <Link>.

   "em-preparacao":
   a rota já foi planeada, mas a página ainda será construída.
   Não criamos <Link> para ela enquanto não existir page.tsx.

   Desta forma podemos preparar toda a arquitectura sem criar
   páginas 404.
   ============================================================ */

const rotasTemas: Partial<
  Record<EspecieId, Record<string, RotaTema>>
> = {
  /* ==========================================================
     BOVINOS
     ========================================================== */

  bovinos: {
    racas: {
      href: "/pecuaria/bovinos/orientacoes/racas",
      status: "disponivel",
    },

    alimentacao: {
      href: "/pecuaria/bovinos/orientacoes/alimentacao",
      status: "disponivel",
    },

    instalacoes: {
      href: "/pecuaria/bovinos/orientacoes/instalacoes",
      status: "disponivel",
    },

    sanidade: {
      href: "/pecuaria/bovinos/orientacoes/sanidade",
      status: "disponivel",
    },

    reproducao: {
      href: "/pecuaria/bovinos/orientacoes/reproducao",
      status: "disponivel",
    },

    agua: {
      href: "/pecuaria/bovinos/orientacoes/agua",
      status: "disponivel",
    },
  },

  /* ==========================================================
     SUÍNOS
     ========================================================== */

  suinos: {
  racas: {
    href: "/pecuaria/suinos/orientacoes/racas",
    status: "disponivel",
  },

  alimentacao: {
    href: "/pecuaria/suinos/orientacoes/alimentacao",
    status: "disponivel",
  },

  instalacoes: {
    href: "/pecuaria/suinos/orientacoes/instalacoes",
    status: "disponivel",
  },

  sanidade: {
    href: "/pecuaria/suinos/orientacoes/sanidade",
    status: "disponivel",
  },

 agua: {
  href: "/pecuaria/suinos/orientacoes/agua",
  status: "disponivel",
},
},
  /* ==========================================================
     CAPRINOS
     ========================================================== */

  caprinos: {
  racas: {
    href: "/pecuaria/caprinos/orientacoes/racas",
    status: "disponivel",
  },

  alimentacao: {
    href: "/pecuaria/caprinos/orientacoes/alimentacao",
    status: "disponivel",
  },

  instalacoes: {
    href: "/pecuaria/caprinos/orientacoes/instalacoes",
    status: "disponivel",
  },

  sanidade: {
    href: "/pecuaria/caprinos/orientacoes/sanidade",
    status: "disponivel",
  },

  cabritos: {
    href: "/pecuaria/caprinos/orientacoes/cabritos",
    status: "disponivel",
  },

  pastoreio: {
    href: "/pecuaria/caprinos/orientacoes/pastoreio",
    status: "disponivel",
  },
},

  /* ==========================================================
     OVINOS
     ========================================================== */

  ovinos: {
    alimentacao: {
      href: "/pecuaria/ovinos/orientacoes/alimentacao",
      status: "em-preparacao",
    },

    pastoreio: {
      href: "/pecuaria/ovinos/orientacoes/pastoreio",
      status: "em-preparacao",
    },

    sanidade: {
      href: "/pecuaria/ovinos/orientacoes/sanidade",
      status: "em-preparacao",
    },

    reproducao: {
      href: "/pecuaria/ovinos/orientacoes/reproducao",
      status: "em-preparacao",
    },

    cordeiros: {
      href: "/pecuaria/ovinos/orientacoes/cordeiros",
      status: "em-preparacao",
    },

    abrigo: {
      href: "/pecuaria/ovinos/orientacoes/abrigo",
      status: "em-preparacao",
    },
  },

  /* ==========================================================
     GALINHAS
     ========================================================== */

  galinhas: {
    corte: {
      href: "/pecuaria/galinhas/orientacoes/corte",
      status: "em-preparacao",
    },

    poedeiras: {
      href: "/pecuaria/galinhas/orientacoes/poedeiras",
      status: "em-preparacao",
    },

    alimentacao: {
      href: "/pecuaria/galinhas/orientacoes/alimentacao",
      status: "em-preparacao",
    },

    sanidade: {
      href: "/pecuaria/galinhas/orientacoes/sanidade",
      status: "em-preparacao",
    },

    instalacoes: {
      href: "/pecuaria/galinhas/orientacoes/instalacoes",
      status: "em-preparacao",
    },

    biosseguranca: {
      href: "/pecuaria/galinhas/orientacoes/biosseguranca",
      status: "em-preparacao",
    },
  },

  /* ==========================================================
     PATOS
     ========================================================== */

  patos: {
    alimentacao: {
      href: "/pecuaria/patos/orientacoes/alimentacao",
      status: "em-preparacao",
    },

    agua: {
      href: "/pecuaria/patos/orientacoes/agua",
      status: "em-preparacao",
    },

    instalacoes: {
      href: "/pecuaria/patos/orientacoes/instalacoes",
      status: "em-preparacao",
    },

    sanidade: {
      href: "/pecuaria/patos/orientacoes/sanidade",
      status: "em-preparacao",
    },

    reproducao: {
      href: "/pecuaria/patos/orientacoes/reproducao",
      status: "em-preparacao",
    },

    maneio: {
      href: "/pecuaria/patos/orientacoes/maneio",
      status: "em-preparacao",
    },
  },

  /* ==========================================================
     PERUS
     ========================================================== */

  perus: {
    alimentacao: {
      href: "/pecuaria/perus/orientacoes/alimentacao",
      status: "em-preparacao",
    },

    instalacoes: {
      href: "/pecuaria/perus/orientacoes/instalacoes",
      status: "em-preparacao",
    },

    sanidade: {
      href: "/pecuaria/perus/orientacoes/sanidade",
      status: "em-preparacao",
    },

    crescimento: {
      href: "/pecuaria/perus/orientacoes/crescimento",
      status: "em-preparacao",
    },

    reproducao: {
      href: "/pecuaria/perus/orientacoes/reproducao",
      status: "em-preparacao",
    },

    mercado: {
      href: "/pecuaria/perus/orientacoes/mercado",
      status: "em-preparacao",
    },
  },

  /* ==========================================================
     CODORNIZES
     ========================================================== */

  codornizes: {
    instalacoes: {
      href: "/pecuaria/codornizes/orientacoes/instalacoes",
      status: "em-preparacao",
    },

    alimentacao: {
      href: "/pecuaria/codornizes/orientacoes/alimentacao",
      status: "em-preparacao",
    },

    ovos: {
      href: "/pecuaria/codornizes/orientacoes/ovos",
      status: "em-preparacao",
    },

    sanidade: {
      href: "/pecuaria/codornizes/orientacoes/sanidade",
      status: "em-preparacao",
    },

    reproducao: {
      href: "/pecuaria/codornizes/orientacoes/reproducao",
      status: "em-preparacao",
    },

    mercado: {
      href: "/pecuaria/codornizes/orientacoes/mercado",
      status: "em-preparacao",
    },
  },

  /* ==========================================================
     EQUINOS
     ========================================================== */

  equinos: {
    alimentacao: {
      href: "/pecuaria/equinos/orientacoes/alimentacao",
      status: "em-preparacao",
    },

    agua: {
      href: "/pecuaria/equinos/orientacoes/agua",
      status: "em-preparacao",
    },

    casco: {
      href: "/pecuaria/equinos/orientacoes/casco",
      status: "em-preparacao",
    },

    sanidade: {
      href: "/pecuaria/equinos/orientacoes/sanidade",
      status: "em-preparacao",
    },

    trabalho: {
      href: "/pecuaria/equinos/orientacoes/trabalho",
      status: "em-preparacao",
    },

    reproducao: {
      href: "/pecuaria/equinos/orientacoes/reproducao",
      status: "em-preparacao",
    },
  },

  /* ==========================================================
     ASININOS
     ========================================================== */

  asininos: {
    alimentacao: {
      href: "/pecuaria/asininos/orientacoes/alimentacao",
      status: "em-preparacao",
    },

    agua: {
      href: "/pecuaria/asininos/orientacoes/agua",
      status: "em-preparacao",
    },

    trabalho: {
      href: "/pecuaria/asininos/orientacoes/trabalho",
      status: "em-preparacao",
    },

    cascos: {
      href: "/pecuaria/asininos/orientacoes/cascos",
      status: "em-preparacao",
    },

    sanidade: {
      href: "/pecuaria/asininos/orientacoes/sanidade",
      status: "em-preparacao",
    },

    "bem-estar": {
      href: "/pecuaria/asininos/orientacoes/bem-estar",
      status: "em-preparacao",
    },
  },

  /* ==========================================================
     BUBALINOS
     ========================================================== */

  bubalinos: {
    adaptacao: {
      href: "/pecuaria/bubalinos/orientacoes/adaptacao",
      status: "em-preparacao",
    },

    alimentacao: {
      href: "/pecuaria/bubalinos/orientacoes/alimentacao",
      status: "em-preparacao",
    },

    agua: {
      href: "/pecuaria/bubalinos/orientacoes/agua",
      status: "em-preparacao",
    },

    sanidade: {
      href: "/pecuaria/bubalinos/orientacoes/sanidade",
      status: "em-preparacao",
    },

    reproducao: {
      href: "/pecuaria/bubalinos/orientacoes/reproducao",
      status: "em-preparacao",
    },

    instalacoes: {
      href: "/pecuaria/bubalinos/orientacoes/instalacoes",
      status: "em-preparacao",
    },
  },

  /* ==========================================================
     COELHOS
     ========================================================== */

  coelhos: {
    instalacoes: {
      href: "/pecuaria/coelhos/orientacoes/instalacoes",
      status: "em-preparacao",
    },

    alimentacao: {
      href: "/pecuaria/coelhos/orientacoes/alimentacao",
      status: "em-preparacao",
    },

    reproducao: {
      href: "/pecuaria/coelhos/orientacoes/reproducao",
      status: "em-preparacao",
    },

    sanidade: {
      href: "/pecuaria/coelhos/orientacoes/sanidade",
      status: "em-preparacao",
    },

    crescimento: {
      href: "/pecuaria/coelhos/orientacoes/crescimento",
      status: "em-preparacao",
    },

    mercado: {
      href: "/pecuaria/coelhos/orientacoes/mercado",
      status: "em-preparacao",
    },
  },

  /* ==========================================================
     APICULTURA
     ========================================================== */

  apicultura: {
    apiario: {
      href: "/pecuaria/apicultura/orientacoes/apiario",
      status: "em-preparacao",
    },

    alimentacao: {
      href: "/pecuaria/apicultura/orientacoes/recursos-florais",
      status: "em-preparacao",
    },

    maneio: {
      href: "/pecuaria/apicultura/orientacoes/maneio",
      status: "em-preparacao",
    },

    sanidade: {
      href: "/pecuaria/apicultura/orientacoes/sanidade",
      status: "em-preparacao",
    },

    mel: {
      href: "/pecuaria/apicultura/orientacoes/mel",
      status: "em-preparacao",
    },

    seguranca: {
      href: "/pecuaria/apicultura/orientacoes/seguranca",
      status: "em-preparacao",
    },
  },

  /* ==========================================================
     AQUACULTURA
     ========================================================== */

  aquacultura: {
    agua: {
      href: "/pecuaria/aquacultura/orientacoes/agua",
      status: "em-preparacao",
    },

    especies: {
      href: "/pecuaria/aquacultura/orientacoes/especies",
      status: "em-preparacao",
    },

    alimentacao: {
      href: "/pecuaria/aquacultura/orientacoes/alimentacao",
      status: "em-preparacao",
    },

    tanques: {
      href: "/pecuaria/aquacultura/orientacoes/tanques",
      status: "em-preparacao",
    },

    sanidade: {
      href: "/pecuaria/aquacultura/orientacoes/sanidade",
      status: "em-preparacao",
    },

    colheita: {
      href: "/pecuaria/aquacultura/orientacoes/colheita",
      status: "em-preparacao",
    },
  },

  /* ==========================================================
     HELICICULTURA
     ========================================================== */

  helicicultura: {
    ambiente: {
      href: "/pecuaria/helicicultura/orientacoes/ambiente",
      status: "em-preparacao",
    },

    alimentacao: {
      href: "/pecuaria/helicicultura/orientacoes/alimentacao",
      status: "em-preparacao",
    },

    instalacoes: {
      href: "/pecuaria/helicicultura/orientacoes/instalacoes",
      status: "em-preparacao",
    },

    reproducao: {
      href: "/pecuaria/helicicultura/orientacoes/reproducao",
      status: "em-preparacao",
    },

    biosseguranca: {
      href: "/pecuaria/helicicultura/orientacoes/biosseguranca",
      status: "em-preparacao",
    },

    mercado: {
      href: "/pecuaria/helicicultura/orientacoes/mercado",
      status: "em-preparacao",
    },
  },
};

/* ============================================================
   CONSTRUIR LINK
   ============================================================ */

function construirLink(
  especieId: EspecieId,
  temaId: string,
  provincia: string,
  finalidade: string
) {
  const rota = rotasTemas[especieId]?.[temaId];

  if (!rota || rota.status !== "disponivel") {
    return null;
  }

  const parametros = new URLSearchParams();

  if (provincia && provincia !== "Angola") {
    parametros.set("provincia", provincia);
  }

  if (finalidade) {
    parametros.set("finalidade", finalidade);
  }

  const query = parametros.toString();

  return query ? `${rota.href}?${query}` : rota.href;
}

/* ============================================================
   VERIFICAR SE O TEMA ESTÁ EM PREPARAÇÃO
   ============================================================ */

function temaEmPreparacao(
  especieId: EspecieId,
  temaId: string
) {
  return (
    rotasTemas[especieId]?.[temaId]?.status ===
    "em-preparacao"
  );
}

/* ============================================================
   COMPONENTE
   ============================================================ */

export default function PecuariaPage() {
  const [especieSelecionada, setEspecieSelecionada] =
    useState<EspecieId>("bovinos");

  const [provincia, setProvincia] = useState("Angola");

  const [finalidade, setFinalidade] =
    useState("Produção de carne");

  const [secaoAberta, setSecaoAberta] = useState(0);

  const especie = useMemo(
    () =>
      especies.find(
        (item) => item.id === especieSelecionada
      ) ?? especies[0],
    [especieSelecionada]
  );

  function selecionarEspecie(id: EspecieId) {
    setEspecieSelecionada(id);
    setSecaoAberta(0);

    setTimeout(() => {
      document
        .getElementById("guia-especie")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-green-950 text-white">

        <div className="absolute inset-0 opacity-20">

          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-400 blur-3xl" />

          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-300 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-4xl">

            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
              AGROINOVA ANGOLA · PECUÁRIA
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Pecuária em Angola
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 sm:text-xl">
              Conhecimento técnico para produtores, técnicos,
              estudantes e investigadores, organizado de acordo
              com as diferentes espécies e com atenção às
              condições das explorações angolanas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="/dados"
                className="rounded-xl bg-white px-5 py-3 font-bold text-green-950 transition hover:bg-green-50"
              >
                📊 Consultar dados oficiais
              </Link>

              <Link
                href="/tecnologias"
                className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/20"
              >
                🤖 Resolver um problema
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTEXTO
      ===================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <div className="grid gap-6 md:grid-cols-3">

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <span className="text-3xl">🇦🇴</span>

              <h2 className="mt-4 text-xl font-bold">
                Realidade angolana
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                A informação deve considerar diferenças entre
                regiões, sistemas de produção, disponibilidade
                de água, alimentação, mão de obra, mercado e
                assistência técnica.
              </p>

            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <span className="text-3xl">📚</span>

              <h2 className="mt-4 text-xl font-bold">
                Conhecimento técnico
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                A plataforma diferencia orientação técnica geral,
                informação aplicável a Angola e informação oficial
                ou estatística.
              </p>

            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

              <span className="text-3xl">🔎</span>

              <h2 className="mt-4 text-xl font-bold">
                Informação verificável
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Números e informações oficiais devem manter a
                respectiva fonte e período. A plataforma não
                transforma dados antigos em estatísticas actuais.
              </p>

            </article>

          </div>

        </div>

      </section>

      {/* =====================================================
          ESPÉCIES
      ===================================================== */}

      <section className="bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

          <div className="max-w-3xl">

            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              01 · ESPÉCIES
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Escolha a espécie
            </h2>

            <p className="mt-4 text-slate-600">
              Seleccione uma espécie para consultar as suas
              informações específicas e, quando disponível,
              aprofundar os temas técnicos da espécie.
            </p>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {especies.map((item) => {

              const ativa =
                item.id === especieSelecionada;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    selecionarEspecie(item.id)
                  }
                  className={[
                    "group rounded-2xl border p-5 text-left transition",
                    ativa
                      ? "border-green-700 bg-green-700 text-white shadow-lg"
                      : "border-slate-200 bg-white hover:-translate-y-1 hover:border-green-300 hover:shadow-md",
                  ].join(" ")}
                >

                  <span className="text-4xl">
                    {item.icone}
                  </span>

                  <h3 className="mt-4 text-lg font-bold">
                    {item.nome}
                  </h3>

                  <p
                    className={[
                      "mt-2 text-sm leading-6",
                      ativa
                        ? "text-green-50"
                        : "text-slate-500",
                    ].join(" ")}
                  >
                    {item.grupo}
                  </p>

                  <span
                    className={[
                      "mt-4 inline-block text-sm font-bold",
                      ativa
                        ? "text-white"
                        : "text-green-700",
                    ].join(" ")}
                  >
                    Consultar →
                  </span>

                </button>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          GUIA DA ESPÉCIE
      ===================================================== */}

      <section
        id="guia-especie"
        className="scroll-mt-20 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

            {/* =================================================
                ÍNDICE
            ================================================= */}

            <aside className="lg:sticky lg:top-24 lg:h-fit">

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <div className="flex items-center gap-3">

                  <span className="text-4xl">
                    {especie.icone}
                  </span>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                      Espécie
                    </p>

                    <h2 className="font-bold">
                      {especie.nome}
                    </h2>

                  </div>

                </div>

                <div className="mt-6">

                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Índice
                  </p>

                  <nav className="space-y-1">

                    {especie.secoes.map(
                      (secao, index) => (

                        <button
                          key={secao.titulo}
                          type="button"
                          onClick={() => {

                            setSecaoAberta(index);

                            document
                              .getElementById(
                                `secao-${index}`
                              )
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                              });

                          }}
                          className={[
                            "w-full rounded-lg px-3 py-2 text-left text-sm transition",
                            secaoAberta === index
                              ? "bg-green-100 font-bold text-green-800"
                              : "text-slate-600 hover:bg-white hover:text-green-700",
                          ].join(" ")}
                        >
                          {index + 1}. {secao.titulo}
                        </button>

                      )
                    )}

                  </nav>

                </div>

              </div>

            </aside>

            {/* =================================================
                CONTEÚDO
            ================================================= */}

            <div>

              {/* CABEÇALHO DA ESPÉCIE */}

              <div className="rounded-3xl bg-green-950 p-7 text-white sm:p-10">

                <div className="flex flex-wrap items-start justify-between gap-6">

                  <div className="max-w-3xl">

                    <span className="text-sm font-bold uppercase tracking-widest text-green-300">
                      GUIA TÉCNICO
                    </span>

                    <div className="mt-4 flex items-center gap-4">

                      <span className="text-6xl">
                        {especie.icone}
                      </span>

                      <h2 className="text-3xl font-bold sm:text-4xl">
                        {especie.nome}
                      </h2>

                    </div>

                    <p className="mt-6 text-lg leading-8 text-green-50">
                      {especie.resumo}
                    </p>

                  </div>

                  <span className="rounded-full border border-green-700 bg-green-900 px-4 py-2 text-sm font-semibold text-green-100">
                    {especie.grupo}
                  </span>

                </div>

              </div>

              {/* =================================================
                  CONTEXTO DA EXPLORAÇÃO
              ================================================= */}

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">

                <div className="flex items-start gap-4">

                  <span className="text-3xl">
                    🇦🇴
                  </span>

                  <div className="flex-1">

                    <h3 className="text-xl font-bold">
                      Contexto da exploração
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Estes campos ajudam a enquadrar a consulta.
                      Não significam que exista uma recomendação
                      automática específica para cada província.
                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">

                      <div>

                        <label
                          htmlFor="provincia"
                          className="mb-2 block text-sm font-bold"
                        >
                          Província
                        </label>

                        <select
                          id="provincia"
                          value={provincia}
                          onChange={(event) =>
                            setProvincia(
                              event.target.value
                            )
                          }
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-600"
                        >

                          {provincias.map(
                            (item) => (
                              <option
                                key={item}
                                value={item}
                              >
                                {item}
                              </option>
                            )
                          )}

                        </select>

                      </div>

                      <div>

                        <label
                          htmlFor="finalidade"
                          className="mb-2 block text-sm font-bold"
                        >
                          Finalidade
                        </label>

                        <select
                          id="finalidade"
                          value={finalidade}
                          onChange={(event) =>
                            setFinalidade(
                              event.target.value
                            )
                          }
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-600"
                        >

                          {finalidades.map(
                            (item) => (
                              <option
                                key={item}
                                value={item}
                              >
                                {item}
                              </option>
                            )
                          )}

                        </select>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* =================================================
                  IMPORTÂNCIA
              ================================================= */}

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                  <span className="text-2xl">
                    📌
                  </span>

                  <h3 className="mt-4 text-xl font-bold">
                    Importância da espécie
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {especie.importancia}
                  </p>

                </article>

                <article className="rounded-2xl border border-green-200 bg-green-50 p-6">

                  <span className="text-2xl">
                    🇦🇴
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-green-950">
                    Aplicação em Angola
                  </h3>

                  <p className="mt-3 leading-7 text-green-900">
                    {especie.realidade}
                  </p>

                </article>

              </div>

              {/* =================================================
                  TEMAS
              ================================================= */}

              <div className="mt-10">

                <div className="mb-5">

                  <span className="text-xs font-bold uppercase tracking-widest text-green-700">
                    ÁREAS DE ORIENTAÇÃO
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
                    Principais temas
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    As páginas técnicas são disponibilizadas
                    progressivamente. Quando uma página já existe,
                    o cartão abre directamente a orientação. Os
                    restantes temas ficam identificados como
                    conteúdos em preparação.
                  </p>

                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                  {especie.temas.map((tema) => {

                    const link = construirLink(
                      especie.id,
                      tema.id,
                      provincia,
                      finalidade
                    );

                    const emPreparacao =
                      temaEmPreparacao(
                        especie.id,
                        tema.id
                      );

                    /*
                     * =================================================
                     * PÁGINA DISPONÍVEL
                     * =================================================
                     */

                    if (link) {

                      return (
                        <Link
                          key={tema.id}
                          href={link}
                          className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
                        >

                          <span className="text-2xl">
                            {tema.icone}
                          </span>

                          <h4 className="mt-3 font-bold">
                            {tema.nome}
                          </h4>

                          <span className="mt-2 block text-sm font-semibold text-green-700 group-hover:text-green-800">
                            Consultar orientação →
                          </span>

                        </Link>
                      );
                    }

                    /*
                     * =================================================
                     * PÁGINA EM PREPARAÇÃO
                     * =================================================
                     */

                    if (emPreparacao) {

                      return (
                        <div
                          key={tema.id}
                          className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                        >

                          <span className="text-2xl">
                            {tema.icone}
                          </span>

                          <h4 className="mt-3 font-bold text-slate-800">
                            {tema.nome}
                          </h4>

                          <div className="mt-3 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                            Conteúdo técnico em preparação
                          </div>

                          <p className="mt-3 text-xs leading-5 text-slate-500">
                            Esta área já está prevista na arquitectura
                            do AGROINOVA ANGOLA e será disponibilizada
                            com conteúdo técnico específico.
                          </p>

                        </div>
                      );
                    }

                    /*
                     * =================================================
                     * TEMA SEM ROTA ESPECÍFICA
                     * =================================================
                     */

                    const indiceSecao =
                      especie.secoes.findIndex(
                        (secao) =>
                          secao.titulo
                            .toLowerCase()
                            .includes(
                              tema.nome.toLowerCase()
                            )
                      );

                    return (
                      <a
                        key={tema.id}
                        href={
                          indiceSecao >= 0
                            ? `#secao-${indiceSecao}`
                            : "#guia-especie"
                        }
                        className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
                      >

                        <span className="text-2xl">
                          {tema.icone}
                        </span>

                        <h4 className="mt-3 font-bold">
                          {tema.nome}
                        </h4>

                        <span className="mt-2 block text-sm font-semibold text-green-700 group-hover:text-green-800">
                          Ver informação →
                        </span>

                      </a>
                    );
                  })}

                </div>

              </div>

              {/* =================================================
                  SEÇÕES DA ESPÉCIE
              ================================================= */}

              <div className="mt-10 space-y-4">

                {especie.secoes.map(
                  (secao, index) => {

                    const aberta =
                      secaoAberta === index;

                    return (
                      <article
                        id={`secao-${index}`}
                        key={secao.titulo}
                        className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white"
                      >

                        <button
                          type="button"
                          onClick={() =>
                            setSecaoAberta(
                              aberta ? -1 : index
                            )
                          }
                          className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                        >

                          <div className="flex items-center gap-4">

                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                              {index + 1}
                            </span>

                            <h3 className="text-lg font-bold">
                              {secao.titulo}
                            </h3>

                          </div>

                          <span className="text-xl text-green-700">
                            {aberta ? "−" : "+"}
                          </span>

                        </button>

                        {aberta && (
                          <div className="border-t border-slate-100 px-6 pb-6 pt-5">

                            <p className="leading-8 text-slate-600">
                              {secao.texto}
                            </p>

                            {secao.pontos &&
                              secao.pontos.length > 0 && (
                                <ul className="mt-5 space-y-2">

                                  {secao.pontos.map(
                                    (ponto) => (
                                      <li
                                        key={ponto}
                                        className="flex gap-3 text-sm text-slate-600"
                                      >

                                        <span className="font-bold text-green-700">
                                          ✓
                                        </span>

                                        <span>
                                          {ponto}
                                        </span>

                                      </li>
                                    )
                                  )}

                                </ul>
                              )}

                          </div>
                        )}

                      </article>
                    );
                  }
                )}

              </div>

              {/* =================================================
                  APROFUNDAR BOVINOS
              ================================================= */}

              {especie.id === "bovinos" && (
                <section className="mt-10 rounded-3xl border border-green-200 bg-green-50 p-7">

                  <span className="text-xs font-bold uppercase tracking-widest text-green-700">
                    APROFUNDAR
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-green-950">
                    Orientações específicas para bovinos
                  </h3>

                  <p className="mt-3 max-w-3xl leading-7 text-green-900">
                    Consulte a área dedicada exclusivamente aos
                    bovinos. Os temas são tratados separadamente,
                    permitindo aprofundar raças, alimentação,
                    instalações, sanidade, reprodução e água.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">

                    <Link
                      href={`/pecuaria/bovinos/orientacoes?provincia=${encodeURIComponent(
                        provincia
                      )}&finalidade=${encodeURIComponent(
                        finalidade
                      )}`}
                      className="rounded-xl bg-green-700 px-5 py-3 font-bold text-white transition hover:bg-green-800"
                    >
                      📖 Ver orientação completa
                    </Link>

                    <Link
                      href="/pecuaria/bovinos/orientacoes/racas"
                      className="rounded-xl border border-green-300 bg-white px-5 py-3 font-bold text-green-800 transition hover:bg-green-100"
                    >
                      🧬 Raças
                    </Link>

                    <Link
                      href="/pecuaria/bovinos/orientacoes/alimentacao"
                      className="rounded-xl border border-green-300 bg-white px-5 py-3 font-bold text-green-800 transition hover:bg-green-100"
                    >
                      🌾 Alimentação
                    </Link>

                    <Link
                      href="/pecuaria/bovinos/orientacoes/sanidade"
                      className="rounded-xl border border-green-300 bg-white px-5 py-3 font-bold text-green-800 transition hover:bg-green-100"
                    >
                      🩺 Sanidade
                    </Link>

                  </div>

                </section>
              )}

              {/* =================================================
                  APROFUNDAR SUÍNOS
              ================================================= */}

              {especie.id === "suinos" && (
                <section className="mt-10 rounded-3xl border border-pink-200 bg-pink-50 p-7">

                  <span className="text-xs font-bold uppercase tracking-widest text-pink-700">
                    AGROINOVA ANGOLA · SUÍNOS
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-slate-950">
                    Orientações específicas para suínos
                  </h3>

                  <p className="mt-3 max-w-3xl leading-7 text-slate-700">
                    A área dos suínos está a ser construída por
                    temas. Cada orientação possui conteúdo próprio
                    para a realidade da suinicultura, sem misturar
                    recomendações destinadas aos bovinos ou a outras
                    espécies.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">

                    <Link
                      href={`/pecuaria/suinos/orientacoes/racas?provincia=${encodeURIComponent(
                        provincia
                      )}&finalidade=${encodeURIComponent(
                        finalidade
                      )}`}
                      className="rounded-xl bg-pink-700 px-5 py-3 font-bold text-white transition hover:bg-pink-800"
                    >
                      🧬 Raças e genética
                    </Link>

                    <Link
                      href={`/pecuaria/suinos/orientacoes/alimentacao?provincia=${encodeURIComponent(
                        provincia
                      )}&finalidade=${encodeURIComponent(
                        finalidade
                      )}`}
                      className="rounded-xl border border-pink-300 bg-white px-5 py-3 font-bold text-pink-800 transition hover:bg-pink-100"
                    >
                      🌾 Alimentação
                    </Link>

                    <Link
                      href={`/pecuaria/suinos/orientacoes/instalacoes?provincia=${encodeURIComponent(
                        provincia
                      )}&finalidade=${encodeURIComponent(
                        finalidade
                      )}`}
                      className="rounded-xl border border-pink-300 bg-white px-5 py-3 font-bold text-pink-800 transition hover:bg-pink-100"
                    >
                      🏠 Instalações
                    </Link>

                    <div className="rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 font-semibold text-amber-800">
                      Sanidade — em preparação
                    </div>

                    <div className="rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 font-semibold text-amber-800">
                      Reprodução — em preparação
                    </div>

                    <div className="rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 font-semibold text-amber-800">
                      Biossegurança — em preparação
                    </div>

                  </div>

                </section>
              )}

              {/* =================================================
                  PRÓXIMOS PASSOS
              ================================================= */}

              <section className="mt-12">

                <div className="mb-6">

                  <span className="text-xs font-bold uppercase tracking-widest text-green-700">
                    02 · PRÓXIMOS PASSOS
                  </span>

                  <h3 className="mt-2 text-2xl font-bold">
                    Do conhecimento à decisão
                  </h3>

                  <p className="mt-3 max-w-3xl text-slate-600">
                    A página de pecuária é o ponto de partida.
                    Quando precisar de dados oficiais ou de ajuda
                    para resolver um problema concreto, continue
                    para as outras áreas do AGROINOVA.
                  </p>

                </div>

                <div className="grid gap-5 md:grid-cols-2">

                  {/* DADOS */}

                  <Link
                    href="/dados"
                    className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
                  >

                    <div className="flex items-start justify-between gap-5">

                      <span className="text-4xl">
                        📊
                      </span>

                      <span className="text-green-700 transition group-hover:translate-x-1">
                        →
                      </span>

                    </div>

                    <h4 className="mt-5 text-xl font-bold">
                      Consultar dados oficiais
                    </h4>

                    <p className="mt-3 leading-7 text-slate-600">
                      Consulte os dados estatísticos disponíveis
                      no AGROINOVA, com indicação de fonte,
                      período, unidade e âmbito territorial.
                    </p>

                    <span className="mt-5 inline-block font-bold text-green-700">
                      Ir para Dados →
                    </span>

                  </Link>

                  {/* TECNOLOGIAS */}

                  <Link
                    href="/tecnologias"
                    className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
                  >

                    <div className="flex items-start justify-between gap-5">

                      <span className="text-4xl">
                        🤖
                      </span>

                      <span className="text-green-700 transition group-hover:translate-x-1">
                        →
                      </span>

                    </div>

                    <h4 className="mt-5 text-xl font-bold">
                      Resolver um problema
                    </h4>

                    <p className="mt-3 leading-7 text-slate-600">
                      Envie um problema agrícola ou pecuário para
                      a área tecnológica, onde poderá existir
                      análise com AGROIA e procura de soluções.
                    </p>

                    <span className="mt-5 inline-block font-bold text-green-700">
                      Ir para Tecnologias →
                    </span>

                  </Link>

                </div>

              </section>

              {/* =================================================
                  ORIENTAÇÃO BOVINOS
              ================================================= */}

              {especie.id === "bovinos" && (
                <section className="mt-8 rounded-3xl bg-slate-900 p-7 text-white">

                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    <div className="max-w-2xl">

                      <span className="text-xs font-bold uppercase tracking-widest text-green-400">
                        AGROINOVA ANGOLA · BOVINOS
                      </span>

                      <h3 className="mt-3 text-2xl font-bold">
                        Quer consultar as opiniões e orientações?
                      </h3>

                      <p className="mt-3 leading-7 text-slate-300">
                        A área específica de orientação permite
                        seleccionar a província, finalidade e tema,
                        além de consultar a estrutura preparada
                        para conhecimento técnico e AGROIA.
                      </p>

                    </div>

                    <Link
                      href={`/pecuaria/bovinos/orientacoes?provincia=${encodeURIComponent(
                        provincia
                      )}&finalidade=${encodeURIComponent(
                        finalidade
                      )}`}
                      className="shrink-0 rounded-xl bg-green-500 px-6 py-3 text-center font-bold text-green-950 transition hover:bg-green-400"
                    >
                      Ver orientação de bovinos →
                    </Link>

                  </div>

                </section>
              )}

              {/* =================================================
                  FONTES
              ================================================= */}

              <section className="mt-12 border-t border-slate-200 pt-10">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                  <div className="max-w-3xl">

                    <span className="text-xs font-bold uppercase tracking-widest text-green-700">
                      TRANSPARÊNCIA
                    </span>

                    <h3 className="mt-2 text-2xl font-bold">
                      Fontes e referências
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      A informação estatística deve ser consultada
                      na fonte original e apresentada com o período
                      correspondente. Conteúdo técnico deve ser
                      diferenciado de dados oficiais.
                    </p>

                  </div>

                  <Link
                    href="/biblioteca"
                    className="shrink-0 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:border-green-400 hover:text-green-700"
                  >
                    📚 Explorar Biblioteca →
                  </Link>

                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                    <strong className="block">
                      INE / RAPP 2019–2020
                    </strong>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Base estatística do Recenseamento
                      Agro-Pecuário e Pescas de Angola.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                    <strong className="block">
                      FAO
                    </strong>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Documentação e divulgação internacional
                      dos dados censitários de Angola.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                    <strong className="block">
                      MINAGRIF
                    </strong>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Informação institucional sobre políticas,
                      programas e desenvolvimento da pecuária.
                    </p>

                  </div>

                </div>

              </section>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA FINAL
      ===================================================== */}

      <section className="bg-green-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <span className="text-sm font-bold uppercase tracking-widest text-green-300">
                AGROINOVA ANGOLA
              </span>

              <h2 className="mt-3 text-3xl font-bold">
                Conhecimento → Dados → Solução
              </h2>

              <p className="mt-4 leading-7 text-green-50">
                Consulte o conhecimento da espécie, confirme os
                dados disponíveis e, quando existir um problema
                concreto, avance para a área de tecnologias e
                AGROIA.
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <Link
                href="/dados"
                className="rounded-xl bg-white px-5 py-3 font-bold text-green-950"
              >
                📊 Dados
              </Link>

              <Link
                href="/tecnologias"
                className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-bold text-white"
              >
                🤖 Tecnologias
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}