
"use client";

import { useMemo, useState } from "react";

type Tecnologia = {
  id: string;
  titulo: string;
  categoria: string;
  subtitulo: string;
  resumo: string;
  imagem: string;
  imagemAlt: string;
  impacto: string;
  investimento: string;
  maturidade: string;
  porque: string;
  funcionamento: string[];
  beneficios: string[];
  aplicacoes: string[];
  implementacao: string[];
  cuidados: string[];
  fontes: { nome: string; url: string }[];
};

const tecnologias: Tecnologia[] = [
  {
    id: "tratores-compactos",
    titulo: "Tractores compactos de 20–50 cv",
    categoria: "Máquinas agrícolas",
    subtitulo: "Mecanização acessível para pequenas explorações.",
    resumo: "Tractores compactos para transporte, horticultura, pequenas alfaias e manutenção de explorações.",
    imagem: "https://www.nh-b.de/images/product_images/original_images/New-Holland-Boomer_25-at-work-3.jpg",
    imagemAlt: "Tractor agrícola compacto New Holland Boomer 25, de cerca de 25 cv, em trabalho no campo.",
    impacto: "Elevado para pequenas explorações",
    investimento: "Médio; considerar aluguer ou serviços partilhados",
    maturidade: "Tecnologia consolidada",
    porque: "A mecanização não precisa de começar com máquinas de grande dimensão. Um tractor compacto pode apoiar pequenas explorações, horticultura, viveiros, transporte interno e operações que não exijam elevada potência. A escolha deve considerar a área, o tipo de solo, as alfaias compatíveis, a assistência técnica e a disponibilidade de peças em Angola.",
    funcionamento: [
      "Identificar as tarefas anuais e as alfaias necessárias.",
      "Confirmar potência, transmissão, capacidade hidráulica e sistema de engate.",
      "Escolher pneus e configuração adequados ao solo e às culturas.",
      "Formar o operador e estabelecer um plano de manutenção."
    ],
    beneficios: [
      "Facilitar o transporte e as operações agrícolas.",
      "Apoiar pequenas explorações e produtores hortícolas.",
      "Permitir utilizar alfaias compatíveis com a potência disponível.",
      "Possibilitar a prestação de serviços a produtores vizinhos."
    ],
    aplicacoes: [
      "Hortícolas, viveiros e pequenas parcelas.",
      "Transporte de materiais e manutenção da exploração.",
      "Preparação ligeira do solo e corte de vegetação, conforme a alfaia.",
      "Explorações familiares em diferentes províncias de Angola."
    ],
    implementacao: [
      "Listar as tarefas que o tractor deverá executar.",
      "Pedir propostas que incluam alfaias, transporte, formação e garantia.",
      "Confirmar a existência de filtros, pneus, peças e oficina.",
      "Calcular o custo por hora e por hectare trabalhado."
    ],
    cuidados: [
      "Não utilizar alfaias que excedam a capacidade do tractor.",
      "Evitar trabalho em declives perigosos e terrenos excessivamente húmidos.",
      "Confirmar protecções, travões, estrutura de segurança e formação.",
      "Não comprar sem verificar a assistência pós-venda."
    ],
    fontes: [
      { nome: "FAO — mecanização agrícola sustentável", url: "https://www.fao.org/sustainable-agricultural-mechanization/en/" }
    ]
  },
  {
    id: "tratores-medios",
    titulo: "Tractores médios de 50–100 cv",
    categoria: "Máquinas agrícolas",
    subtitulo: "Uma solução versátil para mecanizar várias operações.",
    resumo: "Tractores para preparação do solo, sementeira, transporte e operações agrícolas de dimensão intermédia.",
    imagem: "https://cms.boerderij.nl/app/uploads/2025/09/25/262/001_rb-image-2664791.jpeg",
    imagemAlt: "Tractor agrícola de potência média Zetor Major 80 a trabalhar o solo.",
    impacto: "Muito elevado em explorações médias",
    investimento: "Médio a elevado",
    maturidade: "Tecnologia consolidada",
    porque: "Os tractores médios podem representar um equilíbrio entre potência, versatilidade e custo operacional. A potência necessária depende da alfaia, da profundidade de trabalho, da textura do solo e da velocidade pretendida. A gama de potência é indicativa: não constitui uma regra universal para todas as culturas ou solos.",
    funcionamento: [
      "Determinar as operações que serão mecanizadas.",
      "Calcular a potência exigida pelas alfaias mais pesadas.",
      "Verificar transmissão, tomada de força e sistema hidráulico.",
      "Testar a combinação tractor-alfaia e medir o consumo."
    ],
    beneficios: [
      "Executar várias operações com a mesma máquina.",
      "Aumentar a capacidade de trabalho durante a campanha.",
      "Apoiar a preparação do solo e a sementeira.",
      "Criar oportunidades de prestação de serviços de mecanização."
    ],
    aplicacoes: [
      "Milho, feijão, soja e outras culturas extensivas.",
      "Preparação do terreno e transporte de insumos.",
      "Cooperativas e empresas de serviços agrícolas.",
      "Explorações em expansão com áreas mecanizáveis."
    ],
    implementacao: [
      "Estimar hectares por campanha e número de operações.",
      "Comparar compra, aluguer e contratação por hectare.",
      "Confirmar assistência, peças e consumíveis em Angola.",
      "Definir um calendário de manutenção preventiva."
    ],
    cuidados: [
      "A potência indicada não garante compatibilidade com qualquer alfaia.",
      "O peso e os pneus podem provocar compactação do solo.",
      "Operadores precisam de formação prática e equipamentos de protecção.",
      "Combustível e manutenção devem entrar no cálculo do custo total."
    ],
    fontes: [
      { nome: "FAO — mecanização agrícola sustentável", url: "https://www.fao.org/sustainable-agricultural-mechanization/en/" }
    ]
  },
  {
    id: "tratores-pesados",
    titulo: "Tractores pesados de 100–250 cv ou mais",
    categoria: "Máquinas agrícolas",
    subtitulo: "Potência para grandes áreas e alfaias exigentes.",
    resumo: "Tractores de elevada potência para operações pesadas e sistemas agrícolas de grande escala.",
    imagem: "https://www.deere.si/assets/images/products/tractors/mid/6r-series/6r-series-new/r2g030221_lsc_large_large_5e5b6651a522998adc84e24efbbcc5b4215863af.jpg",
    imagemAlt: "Tractor agrícola de maior porte com charrua acoplada no campo.",
    impacto: "Muito elevado em grandes explorações",
    investimento: "Muito elevado",
    maturidade: "Tecnologia consolidada",
    porque: "Os tractores pesados são indicados quando a área, a janela de trabalho e a resistência do terreno justificam máquinas de maior potência. Podem operar com subsoladores, grades pesadas, semeadoras de grande largura e outros equipamentos compatíveis. Para Angola, devem ser avaliados sobretudo em explorações comerciais extensas e em empresas de prestação de serviços.",
    funcionamento: [
      "Calcular a capacidade de trabalho diária e anual necessária.",
      "Dimensionar a potência e a tracção para as alfaias seleccionadas.",
      "Verificar hidráulica, transmissão, pneus, lastro e electrónica.",
      "Planear abastecimento, transporte, oficina e manutenção."
    ],
    beneficios: [
      "Trabalhar áreas extensas em períodos curtos.",
      "Operar alfaias pesadas devidamente dimensionadas.",
      "Aumentar a capacidade de mecanização de grandes explorações.",
      "Apoiar operações agrícolas contratadas em escala comercial."
    ],
    aplicacoes: [
      "Grandes áreas de milho, soja, trigo e outras culturas mecanizáveis.",
      "Preparação pesada do solo quando agronomicamente necessária.",
      "Empresas agrícolas, cooperativas e prestadores de serviços.",
      "Operações de sementeira com equipamentos de grande largura."
    ],
    implementacao: [
      "Estudar a área, o calendário e o número de horas de utilização anual.",
      "Comparar custo de aquisição, financiamento e custo operacional.",
      "Confirmar oficina, peças, pneus e formação especializada.",
      "Avaliar se uma frota partilhada é mais económica do que a compra."
    ],
    cuidados: [
      "O investimento pode não compensar em explorações pequenas.",
      "Máquinas pesadas aumentam o risco de compactação.",
      "Transporte rodoviário e logística podem exigir planeamento especial.",
      "Potência excessiva não substitui uma boa gestão agronómica."
    ],
    fontes: [
      { nome: "FAO — mecanização agrícola sustentável", url: "https://www.fao.org/sustainable-agricultural-mechanization/en/" }
    ]
  },
  {
    id: "charruas",
    titulo: "Charruas agrícolas",
    categoria: "Alfaias e preparação do solo",
    subtitulo: "Mobilizar o solo quando a cultura e as condições o justificam.",
    resumo: "Charruas de aivecas ou discos para operações de lavoura e incorporação de resíduos.",
    imagem: "https://cdn.agriland.ie/uploads/2017/10/60A3171.jpg",
    imagemAlt: "Charrua agrícola acoplada a um tractor durante a lavoura.",
    impacto: "Elevado quando a lavoura é necessária",
    investimento: "Baixo a médio, conforme o modelo",
    maturidade: "Tecnologia consolidada",
    porque: "A charrua é uma alfaia de preparação do solo. A charrua de aivecas inverte a leiva; a de discos pode ser mais adequada a determinadas condições de solo e resíduos. A sua utilização deve ser decidida com base na cultura, no estado do solo e no sistema de conservação adoptado. Lavouras frequentes e profundas podem aumentar erosão e perda de matéria orgânica.",
    funcionamento: [
      "Avaliar textura, humidade, resíduos vegetais e compactação.",
      "Seleccionar a charrua compatível com o tractor.",
      "Regular profundidade, largura e alinhamento.",
      "Verificar o resultado e evitar mobilização desnecessária."
    ],
    beneficios: [
      "Preparar o terreno para determinadas culturas.",
      "Incorporar alguns resíduos e materiais orgânicos.",
      "Ajudar no controlo mecânico de vegetação em situações específicas.",
      "Facilitar operações subsequentes quando correctamente utilizada."
    ],
    aplicacoes: [
      "Preparação de parcelas para milho, feijão e outras culturas.",
      "Terrenos em que a lavoura seja agronomicamente justificada.",
      "Sistemas convencionais de preparação do solo."
    ],
    implementacao: [
      "Confirmar se a lavoura é necessária ou se existe alternativa conservacionista.",
      "Escolher o tipo e o número de corpos de acordo com o tractor.",
      "Regular a profundidade e testar numa pequena área.",
      "Registar consumo, tempo e qualidade do trabalho."
    ],
    cuidados: [
      "Não lavrar solo excessivamente húmido.",
      "Evitar lavoura em declives com elevado risco de erosão.",
      "Verificar desgaste, parafusos e protecções antes do trabalho.",
      "Considerar mobilização reduzida ou sementeira directa quando adequadas."
    ],
    fontes: [
      { nome: "FAO — conservação do solo e agricultura sustentável", url: "https://www.fao.org/conservation-agriculture/en/" }
    ]
  },
  {
    id: "grades-discos",
    titulo: "Grades de discos",
    categoria: "Alfaias e preparação do solo",
    subtitulo: "Fragmentar torrões e preparar a cama de sementeira.",
    resumo: "Grades de discos leves, médias ou pesadas para trabalhos secundários e operações específicas de mobilização.",
    imagem: "https://majevica.co.rs/assets/images/products/2.png",
    imagemAlt: "Grade de discos agrícola rebocada, com discos metálicos para mobilização superficial do solo.",
    impacto: "Elevado na preparação convencional",
    investimento: "Baixo a médio",
    maturidade: "Tecnologia consolidada",
    porque: "As grades de discos cortam e movimentam a camada superficial do solo. Podem ajudar a desfazer torrões e incorporar resíduos, mas o número de discos, o diâmetro, o peso e o ângulo de trabalho determinam a exigência de tracção. A regulação incorrecta pode pulverizar excessivamente o solo e favorecer a formação de crosta.",
    funcionamento: [
      "Identificar o objectivo da operação e a condição do solo.",
      "Escolher largura e configuração compatíveis com o tractor.",
      "Regular o ângulo dos conjuntos de discos e a profundidade.",
      "Verificar a uniformidade da superfície e o consumo."
    ],
    beneficios: [
      "Preparar a superfície para determinadas sementeiras.",
      "Fragmentar torrões em condições apropriadas.",
      "Trabalhar resíduos vegetais superficiais.",
      "Reduzir o esforço de algumas operações secundárias."
    ],
    aplicacoes: [
      "Preparação de áreas para cereais e leguminosas.",
      "Operações secundárias após lavoura, quando necessárias.",
      "Explorações que utilizam sistemas convencionais de mobilização."
    ],
    implementacao: [
      "Escolher uma grade de acordo com o solo e a potência disponível.",
      "Verificar rolamentos, discos, raspadores e pontos de lubrificação.",
      "Fazer um ensaio com diferentes regulações.",
      "Comparar qualidade da cama de sementeira e custo por hectare."
    ],
    cuidados: [
      "Não fazer passagens repetidas sem necessidade.",
      "Evitar trabalhar em solo demasiado seco ou húmido.",
      "Inspeccionar os discos e rolamentos regularmente.",
      "Preservar cobertura vegetal sempre que o sistema o permita."
    ],
    fontes: [
      { nome: "FAO — mecanização agrícola sustentável", url: "https://www.fao.org/sustainable-agricultural-mechanization/en/" }
    ]
  },
  {
    id: "subsoladores",
    titulo: "Subsoladores e escarificadores",
    categoria: "Alfaias e preparação do solo",
    subtitulo: "Tratar camadas compactadas sem mobilizar todo o perfil.",
    resumo: "Alfaias de hastes para romper camadas compactadas quando existe diagnóstico técnico.",
    imagem: "https://assets.revistacultivar.com.br/2f7bfb992fef8b18c8f71c9dac8bc262.JPG",
    imagemAlt: "Subsolador equipado com discos de corte para trabalhar em áreas com palhada densa.",
    impacto: "Elevado em solos com compactação confirmada",
    investimento: "Médio",
    maturidade: "Tecnologia consolidada",
    porque: "O subsolador trabalha a maior profundidade do que muitas alfaias superficiais e pode romper camadas compactadas. Não deve ser usado automaticamente em todos os campos: é necessário confirmar a existência, profundidade e extensão da compactação. O escarificador pode trabalhar a profundidades mais moderadas e ajudar a reduzir a mobilização invertida.",
    funcionamento: [
      "Avaliar o perfil do solo com observação técnica e, quando útil, penetrómetro.",
      "Identificar a profundidade da camada compactada.",
      "Escolher número de hastes, espaçamento e potência necessária.",
      "Trabalhar em condições de humidade adequadas e verificar o resultado."
    ],
    beneficios: [
      "Melhorar a infiltração em condições de compactação corrigível.",
      "Facilitar o desenvolvimento radicular quando existe uma camada limitante.",
      "Reduzir problemas de drenagem associados a determinadas camadas compactadas.",
      "Apoiar a recuperação de parcelas afectadas por tráfego intenso."
    ],
    aplicacoes: [
      "Campos com tráfego repetido de máquinas.",
      "Parcelas com diagnóstico de camada compactada.",
      "Preparação de terrenos para culturas extensivas, conforme avaliação."
    ],
    implementacao: [
      "Diagnosticar antes de comprar ou contratar o serviço.",
      "Definir profundidade de trabalho e espaçamento das hastes.",
      "Testar uma faixa e comparar infiltração e desenvolvimento radicular.",
      "Reduzir o tráfego e evitar que a compactação volte a ocorrer."
    ],
    cuidados: [
      "O subsolamento não resolve todas as causas de drenagem deficiente.",
      "Exige potência e combustível significativos.",
      "Trabalhar em condições inadequadas pode piorar a estrutura do solo.",
      "Evitar operações profundas sem necessidade comprovada."
    ],
    fontes: [
      { nome: "FAO — conservação do solo", url: "https://www.fao.org/conservation-agriculture/en/" }
    ]
  },
  {
    id: "cultivadores",
    titulo: "Cultivadores mecânicos e rotativos",
    categoria: "Alfaias e preparação do solo",
    subtitulo: "Controlar vegetação e preparar a camada superficial.",
    resumo: "Equipamentos para mobilização superficial, controlo mecânico de infestantes e manutenção entre linhas.",
    imagem: "https://www.noli.es/148-atmn_large/cultivador-modelo-cg-85.jpg",
    imagemAlt: "Cultivador mecânico de hastes e molas para mobilização e controlo mecânico de infestantes.",
    impacto: "Elevado em operações bem seleccionadas",
    investimento: "Baixo a médio",
    maturidade: "Tecnologia consolidada",
    porque: "Os cultivadores utilizam dentes, lâminas ou outros órgãos de trabalho para mobilizar o solo superficialmente. As enxadas rotativas usam elementos accionados pela tomada de força e podem preparar uma superfície fina, mas exigem potência e podem pulverizar o solo. A escolha deve considerar o sistema de produção, os resíduos e a necessidade de preservar a estrutura.",
    funcionamento: [
      "Determinar se o objectivo é controlar infestantes ou preparar o solo.",
      "Seleccionar o equipamento e a largura adequados.",
      "Regular profundidade, velocidade e espaçamento.",
      "Inspeccionar o resultado e ajustar a operação."
    ],
    beneficios: [
      "Facilitar o controlo mecânico de algumas infestantes.",
      "Preparar o solo superficial em operações específicas.",
      "Reduzir parte do trabalho manual entre linhas.",
      "Apoiar a manutenção de determinadas culturas."
    ],
    aplicacoes: [
      "Milho e outras culturas em linhas.",
      "Hortícolas e operações de viveiro com equipamento compatível.",
      "Controlo mecânico de vegetação em condições adequadas."
    ],
    implementacao: [
      "Confirmar o espaçamento das linhas e o estádio da cultura.",
      "Seleccionar dentes ou lâminas adequados.",
      "Regular a profundidade para evitar danificar raízes.",
      "Registar tempo, consumo e eficácia do controlo."
    ],
    cuidados: [
      "Trabalhar demasiado perto das plantas pode danificar raízes.",
      "A mobilização repetida pode aumentar erosão e perda de humidade.",
      "A enxada rotativa pode exigir elevada potência.",
      "Nem todas as infestantes são controladas por uma única passagem."
    ],
    fontes: [
      { nome: "FAO — mecanização agrícola sustentável", url: "https://www.fao.org/sustainable-agricultural-mechanization/en/" }
    ]
  },
  {
    id: "semeadoras",
    titulo: "Semeadoras de cereais",
    categoria: "Sementeira e plantação",
    subtitulo: "Distribuir sementes com profundidade e espaçamento regulares.",
    resumo: "Semeadoras mecânicas ou pneumáticas para melhorar a uniformidade de implantação das culturas.",
    imagem: "https://amazone.net/resource/image/54510/5x3/930/558/3195948241015918b4eac7917a8e3a32/2CA0F27903F6422FEFF042B26E54F433/d9.jpg",
    imagemAlt: "Semeadora mecânica de cereais AMAZONE D9 montada num tractor.",
    impacto: "Muito elevado na uniformidade da cultura",
    investimento: "Médio a elevado",
    maturidade: "Tecnologia consolidada",
    porque: "Uma semeadora bem regulada coloca as sementes a uma profundidade e distância apropriadas, reduzindo falhas e sobreposições. O modelo deve corresponder ao tamanho e formato da semente, ao tipo de solo e ao sistema de preparação. A qualidade da semente e a calibração são tão importantes como a máquina.",
    funcionamento: [
      "Escolher a cultura, a variedade e a densidade recomendada.",
      "Regular os mecanismos de dosagem e a profundidade de deposição.",
      "Calibrar a máquina antes de entrar no campo.",
      "Verificar a distribuição das sementes durante a operação."
    ],
    beneficios: [
      "Melhorar a uniformidade de emergência.",
      "Reduzir desperdício de sementes quando bem calibrada.",
      "Aumentar a área semeada dentro da janela agrícola.",
      "Facilitar a gestão da densidade e do espaçamento."
    ],
    aplicacoes: [
      "Milho, trigo, arroz de sequeiro, soja e leguminosas, conforme o modelo.",
      "Explorações comerciais e cooperativas.",
      "Serviços de sementeira para vários produtores."
    ],
    implementacao: [
      "Confirmar compatibilidade com a cultura e a semente.",
      "Calibrar a dose por hectare com a máquina parada e em segurança.",
      "Realizar uma faixa de teste e verificar profundidade e espaçamento.",
      "Limpar e guardar o equipamento após a campanha."
    ],
    cuidados: [
      "Uma semeadora de cereais não é automaticamente adequada para milho ou soja.",
      "A calibração deve ser revista após alterações de velocidade ou semente.",
      "Solo mal preparado pode comprometer a deposição.",
      "Evitar limpar ou ajustar mecanismos com a máquina em movimento."
    ],
    fontes: [
      { nome: "FAO — mecanização agrícola sustentável", url: "https://www.fao.org/sustainable-agricultural-mechanization/en/" }
    ]
  },
  {
    id: "plantadoras-precisao",
    titulo: "Plantadoras de precisão para milho e soja",
    categoria: "Sementeira e plantação",
    subtitulo: "Colocar cada semente com controlo de espaçamento.",
    resumo: "Plantadoras de precisão com unidades de linha e sistemas de dosagem adaptados à cultura.",
    imagem: "https://agromep.pl/media/products/6954a5b04961da684040102ac6f40911/images/thumbnail/big_seminatrici-precisione-MAGA-COVERLIST.jpg?lm=1748618834",
    imagemAlt: "Plantadora de precisão de várias linhas para milho e outras culturas em linhas.",
    impacto: "Muito elevado em culturas de linhas",
    investimento: "Médio a elevado",
    maturidade: "Tecnologia consolidada",
    porque: "As plantadoras de precisão doseiam sementes individualmente ou com elevada regularidade, conforme o sistema. O objectivo é obter a população de plantas prevista, com espaçamento e profundidade uniformes. Sistemas electrónicos podem monitorizar falhas e duplicações, mas precisam de calibração, manutenção e operadores formados.",
    funcionamento: [
      "Definir população de plantas, distância entre linhas e espaçamento na linha.",
      "Seleccionar discos, vácuo ou sistema de dosagem compatível com a semente.",
      "Regular pressão, profundidade e contacto da semente com o solo.",
      "Monitorizar falhas, duplicações e população estabelecida."
    ],
    beneficios: [
      "Melhorar uniformidade do estabelecimento.",
      "Reduzir falhas e sementes duplicadas quando correctamente regulada.",
      "Facilitar operações posteriores entre linhas.",
      "Permitir monitorização electrónica em modelos equipados."
    ],
    aplicacoes: [
      "Milho e soja.",
      "Algumas culturas de sementes de tamanho adequado ao equipamento.",
      "Explorações com áreas e retorno que justifiquem o investimento."
    ],
    implementacao: [
      "Confirmar cultura, calibre da semente e população pretendida.",
      "Testar cada unidade de linha antes da campanha.",
      "Verificar a deposição em várias zonas do campo.",
      "Comparar custo da semente, emergência e rendimento final."
    ],
    cuidados: [
      "O equipamento pode ser demasiado caro para utilização ocasional.",
      "Os sensores não corrigem sementes de má qualidade.",
      "A velocidade excessiva pode prejudicar a regularidade da deposição.",
      "Confirmar disponibilidade de peças e calibração."
    ],
    fontes: [
      { nome: "FAO — mecanização agrícola sustentável", url: "https://www.fao.org/sustainable-agricultural-mechanization/en/" }
    ]
  },
  {
    id: "plantadora-batata",
    titulo: "Plantadoras e arrancadoras de batata",
    categoria: "Sementeira e plantação",
    subtitulo: "Mecanizar a plantação e a colheita de tubérculos.",
    resumo: "Máquinas para colocar batata-semente, formar camalhões e levantar tubérculos com menor esforço manual.",
    imagem: "https://majevica.co.rs/assets/images/products/27.jpg",
    imagemAlt: "Plantadora de precisão com unidades individuais de plantação em linhas.",
    impacto: "Elevado em explorações especializadas",
    investimento: "Médio a elevado",
    maturidade: "Tecnologia consolidada",
    porque: "A batata exige plantação e colheita cuidadosas para reduzir danos aos tubérculos. Plantadoras podem regular espaçamento e profundidade, enquanto arrancadoras levantam os camalhões e separam parte do solo. A dimensão e o tipo de máquina devem corresponder ao tamanho das parcelas, ao solo e ao volume comercial.",
    funcionamento: [
      "Preparar o terreno e definir o espaçamento entre linhas.",
      "Regular a plantadora e a formação dos camalhões.",
      "Durante a colheita, ajustar profundidade e velocidade da arrancadora.",
      "Recolher, classificar e armazenar os tubérculos em condições adequadas."
    ],
    beneficios: [
      "Aumentar a capacidade de plantação e colheita.",
      "Melhorar a regularidade de espaçamento.",
      "Reduzir parte do trabalho manual.",
      "Ajudar a organizar a produção para comercialização."
    ],
    aplicacoes: [
      "Explorações de batata em zonas produtoras de Angola.",
      "Cooperativas e produtores especializados.",
      "Serviços de plantação e colheita partilhados."
    ],
    implementacao: [
      "Estimar área, calendário e volume a colher.",
      "Confirmar compatibilidade com o tractor e a largura entre linhas.",
      "Testar danos e perdas numa pequena área.",
      "Planear transporte, classificação e armazenamento."
    ],
    cuidados: [
      "Solo demasiado húmido pode aumentar aderência e danos.",
      "Regular mal a profundidade pode cortar ou deixar tubérculos no solo.",
      "A máquina deve ser compatível com o sistema de camalhões.",
      "O armazenamento inadequado pode anular os ganhos de mecanização."
    ],
    fontes: [
      { nome: "FAO — produção e pós-colheita", url: "https://www.fao.org/" }
    ]
  },
  {
    id: "colhedoras-cereais",
    titulo: "Colhedoras combinadas de cereais",
    categoria: "Colheita mecanizada",
    subtitulo: "Cortar, debulhar e separar grãos numa única operação.",
    resumo: "Colhedoras combinadas para culturas extensivas, com plataforma ajustada ao cereal e às condições do campo.",
    imagem: "https://img.agriexpo.online/pt/images_ag/photo-mg/170711-20159503.webp",
    imagemAlt: "Colhedora combinada de cereais.",
    impacto: "Muito elevado em grandes áreas",
    investimento: "Muito elevado; contratação do serviço pode ser preferível",
    maturidade: "Tecnologia consolidada",
    porque: "Uma colhedora combinada executa várias operações de colheita: corte, alimentação, debulha, separação e limpeza. A máquina deve ser configurada para a cultura, humidade do grão, volume de palha e condições do terreno. A aquisição só costuma fazer sentido quando a utilização anual, a escala e a logística justificam o custo.",
    funcionamento: [
      "Confirmar a maturação e a humidade da cultura.",
      "Seleccionar a plataforma e regular altura e velocidade de avanço.",
      "Ajustar debulha, ventilação e peneiras para a cultura.",
      "Monitorizar perdas de grão, impurezas e danos durante a operação."
    ],
    beneficios: [
      "Aumentar a capacidade de colheita em áreas extensas.",
      "Reduzir o tempo entre maturação e recolha.",
      "Integrar corte, debulha e limpeza inicial.",
      "Permitir prestar serviços de colheita a vários produtores."
    ],
    aplicacoes: [
      "Trigo, arroz, cevada e outros cereais compatíveis com a plataforma.",
      "Explorações comerciais de grande dimensão.",
      "Empresas de serviços de colheita e cooperativas."
    ],
    implementacao: [
      "Calcular hectares a colher por dia e por campanha.",
      "Comparar aquisição, aluguer e contratação por hectare.",
      "Planear transporte de grão, combustível, manutenção e operadores.",
      "Medir perdas antes de alterar as regulações."
    ],
    cuidados: [
      "Nem todas as plataformas são adequadas a todas as culturas.",
      "Humidade e regulação incorrectas podem causar perdas elevadas.",
      "A máquina exige manutenção e operador especializado.",
      "É necessário planear o transporte e a secagem do grão."
    ],
    fontes: [
      { nome: "FAO — mecanização agrícola sustentável", url: "https://www.fao.org/sustainable-agricultural-mechanization/en/" }
    ]
  },
  {
    id: "colhedoras-milho",
    titulo: "Colhedoras e plataformas para milho",
    categoria: "Colheita mecanizada",
    subtitulo: "Acelerar a colheita e reduzir perdas no campo.",
    resumo: "Equipamentos para colher espigas ou grão, conforme o sistema produtivo e a finalidade.",
    imagem: "https://majevica.co.rs/assets/images/products/42.png",
    imagemAlt: "Equipamento agrícola específico para colheita de culturas, em estrutura rebocada.",
    impacto: "Muito elevado em produção comercial",
    investimento: "Elevado a muito elevado",
    maturidade: "Tecnologia consolidada",
    porque: "A colheita mecanizada de milho pode usar plataformas específicas acopladas a colhedoras combinadas ou máquinas destinadas à recolha de espigas. A solução depende da escala, do destino do produto e da logística disponível. Para grão, secagem e armazenamento são partes fundamentais do sistema, não etapas opcionais.",
    funcionamento: [
      "Definir se o objectivo é colher grão, espigas ou forragem.",
      "Escolher a máquina e a plataforma compatíveis.",
      "Regular a altura de corte e os mecanismos de recolha.",
      "Avaliar grãos partidos, perdas no solo e humidade do produto."
    ],
    beneficios: [
      "Aumentar a velocidade da colheita.",
      "Reduzir dependência de trabalho manual em grandes áreas.",
      "Melhorar o planeamento da entrega à unidade de secagem.",
      "Permitir operações comerciais de maior escala."
    ],
    aplicacoes: [
      "Produção comercial de milho para alimentação humana e animal.",
      "Explorações com volume suficiente para justificar mecanização.",
      "Empresas que prestam serviços de colheita."
    ],
    implementacao: [
      "Estimar área, produtividade e janela de colheita.",
      "Confirmar disponibilidade de assistência e peças.",
      "Organizar transporte, secagem e armazenamento.",
      "Fazer ensaios para medir perdas e danos nos grãos."
    ],
    cuidados: [
      "A máquina deve ser configurada para o estado da cultura.",
      "A humidade elevada pode aumentar custos de secagem.",
      "Colheita inadequada pode provocar perdas e danos mecânicos.",
      "A aquisição pode não compensar em pequenas áreas."
    ],
    fontes: [
      { nome: "FAO — cereais e sistemas de produção", url: "https://www.fao.org/" }
    ]
  },
  {
    id: "enfardadeiras",
    titulo: "Enfardadeiras de feno e forragem",
    categoria: "Pecuária e forragens",
    subtitulo: "Conservar forragens para alimentar os animais ao longo do ano.",
    resumo: "Equipamentos que recolhem e comprimem feno ou resíduos vegetais em fardos para transporte e armazenamento.",
    imagem: "https://s7d9.scene7.com/is/image/agco/LB2200-1_Gallery-2",
    imagemAlt: "Enfardadeira agrícola de fardos de feno e forragem.",
    impacto: "Elevado para sistemas pecuários",
    investimento: "Médio a elevado",
    maturidade: "Tecnologia consolidada",
    porque: "A produção de feno e a conservação de forragens ajudam a reduzir a escassez alimentar durante períodos secos. A enfardadeira recolhe material já cortado e suficientemente seco, comprimindo-o em fardos redondos ou rectangulares. A qualidade final depende da espécie forrageira, do ponto de corte, da humidade e do armazenamento.",
    funcionamento: [
      "Cortar a forragem na fase adequada.",
      "Permitir secagem até uma humidade compatível com o armazenamento.",
      "Regular a enfardadeira para o formato e a densidade desejados.",
      "Armazenar os fardos num local protegido e ventilado."
    ],
    beneficios: [
      "Facilitar transporte e armazenamento de forragem.",
      "Criar reservas alimentares para a estação seca.",
      "Apoiar explorações de bovinos, caprinos e ovinos.",
      "Permitir comercialização de feno quando existe mercado."
    ],
    aplicacoes: [
      "Pastagens cultivadas e produção de feno.",
      "Explorações pecuárias com necessidade de reservas.",
      "Prestadores de serviços de corte e enfardamento."
    ],
    implementacao: [
      "Estimar a necessidade alimentar e a área de forragem.",
      "Escolher enfardadeira compatível com o tractor.",
      "Planear corte, secagem, recolha e armazenamento.",
      "Registar perdas, qualidade e custo por fardo."
    ],
    cuidados: [
      "Forragem demasiado húmida pode aquecer, mofar ou deteriorar-se.",
      "Armazenar os fardos protegidos da chuva e do contacto com o solo.",
      "Respeitar as protecções e procedimentos de segurança da máquina.",
      "A qualidade alimentar deve ser avaliada, não apenas a aparência."
    ],
    fontes: [
      { nome: "FAO — produção e alimentação animal", url: "https://www.fao.org/animal-production/" }
    ]
  },
  {
    id: "adubadoras",
    titulo: "Adubadoras centrífugas e de distribuição localizada",
    categoria: "Fertilização e protecção",
    subtitulo: "Distribuir fertilizantes com uniformidade e dose controlada.",
    resumo: "Equipamentos para espalhar fertilizantes granulados ou aplicar nutrientes de forma localizada.",
    imagem: "https://majevica.co.rs/assets/images/products/21.png",
    imagemAlt: "Distribuidor centrífugo de fertilizantes com tremonha e rodas.",
    impacto: "Muito elevado quando a aplicação é bem calibrada",
    investimento: "Baixo a elevado",
    maturidade: "Tecnologia consolidada",
    porque: "As adubadoras distribuem fertilizantes granulados por lançamento centrífugo, gravidade ou aplicação localizada. A dose correcta depende da análise de solo, da cultura e da recomendação técnica. A largura de trabalho, a velocidade e as características físicas do fertilizante influenciam a uniformidade da distribuição.",
    funcionamento: [
      "Definir o produto, a dose por hectare e a área de aplicação.",
      "Calibrar a máquina com o fertilizante que será realmente utilizado.",
      "Regular abertura, velocidade e largura efectiva de distribuição.",
      "Verificar sobreposições e uniformidade durante a operação."
    ],
    beneficios: [
      "Aumentar a capacidade de fertilização.",
      "Melhorar a regularidade da distribuição.",
      "Reduzir desperdício quando a dose e a calibração são correctas.",
      "Apoiar a gestão de nutrientes em explorações comerciais."
    ],
    aplicacoes: [
      "Milho, trigo, arroz e outras culturas extensivas.",
      "Pastagens e determinadas culturas perenes.",
      "Aplicações de fundo ou cobertura conforme a recomendação agronómica."
    ],
    implementacao: [
      "Obter recomendação de fertilização adequada à parcela.",
      "Calibrar a adubadora e verificar a largura real de trabalho.",
      "Formar o operador para ajustar dose e velocidade.",
      "Registar produto, lote, dose, data e área tratada."
    ],
    cuidados: [
      "A adubadora não determina por si só a dose correcta.",
      "Vento e humidade podem afectar a distribuição.",
      "Evitar contaminação de cursos de água e áreas sensíveis.",
      "Usar equipamento de protecção e respeitar as instruções do fertilizante."
    ],
    fontes: [
      { nome: "FAO — gestão sustentável dos solos", url: "https://www.fao.org/soils-portal/en/" }
    ]
  },
  {
    id: "fertilizacao-variavel",
    titulo: "Sistemas de fertilização de taxa variável",
    categoria: "Agricultura de precisão",
    subtitulo: "Aplicar doses diferentes de acordo com a variabilidade da parcela.",
    resumo: "Controladores, mapas e sensores que ajustam a aplicação de insumos por zonas ou em tempo real.",
    imagem: "https://assets.revistacultivar.com.br/2fd12-agricultura-de-precis--o.PNG",
    imagemAlt: "Sistema de agricultura de precisão para aplicação de fertilizantes em taxa variável.",
    impacto: "Elevado em parcelas com variabilidade comprovada",
    investimento: "Médio a elevado",
    maturidade: "Disponível; requer dados e calibração",
    porque: "A taxa variável permite alterar a dose aplicada ao longo da parcela, utilizando mapas de solo, rendimento ou sensores. Pode reduzir aplicações desnecessárias e melhorar a gestão de nutrientes, mas só é vantajosa quando existe informação suficientemente fiável e um sistema compatível. A tecnologia não substitui a análise laboratorial nem a recomendação agronómica.",
    funcionamento: [
      "Recolher análises e dados georreferenciados da parcela.",
      "Criar zonas de gestão e definir doses com orientação técnica.",
      "Carregar o mapa num controlador compatível ou configurar sensores.",
      "Verificar se a aplicação real corresponde ao plano."
    ],
    beneficios: [
      "Ajustar doses às diferenças relevantes dentro da parcela.",
      "Melhorar rastreabilidade da aplicação.",
      "Apoiar avaliações económicas por zona.",
      "Criar históricos para decisões futuras."
    ],
    aplicacoes: [
      "Explorações extensivas com dados georreferenciados.",
      "Parcelas onde análises confirmem diferenças de fertilidade.",
      "Projectos de agricultura de precisão e demonstração tecnológica."
    ],
    implementacao: [
      "Começar com análises de solo e delimitação da parcela.",
      "Confirmar compatibilidade entre mapas, controlador e máquina.",
      "Testar numa área-piloto e guardar os registos.",
      "Comparar custo, rendimento e consumo de fertilizante."
    ],
    cuidados: [
      "Mapas imprecisos podem gerar doses erradas.",
      "A compatibilidade entre formatos e equipamentos deve ser confirmada.",
      "O investimento pode não compensar em áreas pequenas.",
      "Não adoptar doses automáticas sem validação técnica."
    ],
    fontes: [
      { nome: "FAO — agricultura de precisão e mecanização", url: "https://www.fao.org/sustainable-agricultural-mechanization/en/" }
    ]
  },
  {
    id: "pulverizadores",
    titulo: "Pulverizadores agrícolas de barra",
    categoria: "Fertilização e protecção",
    subtitulo: "Aplicar produtos de protecção vegetal com distribuição uniforme.",
    resumo: "Pulverizadores montados, rebocados ou autopropelidos, com barras e bicos seleccionados para a aplicação.",
    imagem: "https://www.gengjiaagri.com/wp-content/uploads/2026/01/Gengjia-Agri-3GJW-Boom-Sprayer-blue-red-front-left-view-e1768799439882.webp",
    imagemAlt: "Pulverizador agrícola de barra montado em tractor.",
    impacto: "Elevado quando existe necessidade fitossanitária confirmada",
    investimento: "Baixo a muito elevado",
    maturidade: "Tecnologia consolidada",
    porque: "O pulverizador aplica líquidos sobre a cultura ou o solo. A qualidade depende do bico, pressão, velocidade, altura da barra, condições meteorológicas e produto autorizado. O objectivo é obter uma aplicação eficaz e reduzir deriva, exposição dos trabalhadores e contaminação ambiental. A identificação do problema e a escolha do produto devem ser orientadas tecnicamente.",
    funcionamento: [
      "Identificar o problema fitossanitário e confirmar se a intervenção é necessária.",
      "Escolher produto, bico e volume de aplicação segundo o rótulo e a orientação técnica.",
      "Calibrar pressão, velocidade, altura e débito dos bicos.",
      "Aplicar apenas em condições adequadas e registar a operação."
    ],
    beneficios: [
      "Cobrir áreas maiores em menos tempo.",
      "Melhorar a uniformidade da aplicação quando bem calibrado.",
      "Reduzir desperdício através da escolha correcta dos bicos.",
      "Permitir monitorização e controlo de secções em modelos equipados."
    ],
    aplicacoes: [
      "Culturas extensivas e algumas aplicações entre linhas.",
      "Explorações que necessitam de protecção vegetal mecanizada.",
      "Prestadores de serviços especializados."
    ],
    implementacao: [
      "Formar o operador em calibração e segurança.",
      "Verificar bicos, filtros, mangueiras, bomba e manómetro.",
      "Usar equipamento de protecção indicado no rótulo.",
      "Registar produto, dose, parcela, data e condições de aplicação."
    ],
    cuidados: [
      "Não aplicar produtos sem identificação e orientação adequadas.",
      "Evitar deriva para pessoas, animais, habitações e água.",
      "Respeitar rótulo, intervalos de segurança e regras aplicáveis.",
      "Lavar e guardar o equipamento de forma segura."
    ],
    fontes: [
      { nome: "FAO — gestão integrada de pragas", url: "https://www.fao.org/pest-and-pesticide-management/en/" }
    ]
  },
  {
    id: "drones",
    titulo: "Drones para agricultura de precisão",
    categoria: "Agricultura de precisão",
    subtitulo: "Observar o campo de cima para tomar melhores decisões.",
    resumo: "Mapeamento aéreo, acompanhamento de culturas e aplicações especializadas quando legalmente permitidas.",
    imagem: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Drone utilizado para observação e monitorização de campos agrícolas.",
    impacto: "Elevado em explorações médias e grandes",
    investimento: "Médio a elevado; pode começar pela contratação do serviço",
    maturidade: "Disponível para operações especializadas",
    porque: "Drones com câmaras RGB ou sensores adequados podem mapear parcelas, localizar falhas de plantação e ajudar a identificar zonas que merecem inspecção. O mapa não substitui a visita de campo nem diagnostica sozinho doenças ou deficiências nutricionais. Para Angola, pode ser mais económico contratar um operador especializado antes de comprar equipamento.",
    funcionamento: [
      "Definir a parcela e o objectivo do levantamento.",
      "Planear o voo, a segurança e os requisitos legais aplicáveis.",
      "Processar as imagens em mapas ou relatórios.",
      "Confirmar os resultados no campo com um técnico."
    ],
    beneficios: [
      "Mapear parcelas em menos tempo.",
      "Documentar a evolução das culturas.",
      "Localizar áreas com falhas, stress ou problemas de drenagem.",
      "Apoiar o planeamento de intervenções."
    ],
    aplicacoes: [
      "Milho, soja, arroz e outras culturas extensivas.",
      "Pomares, cafezais e perímetros irrigados.",
      "Levantamento de parcelas, erosão e projectos florestais."
    ],
    implementacao: [
      "Começar com uma parcela-piloto.",
      "Contratar operador com experiência e documentação adequada.",
      "Comparar o mapa com observações no campo.",
      "Avaliar o custo por hectare e a utilidade das decisões."
    ],
    cuidados: [
      "As imagens não substituem diagnóstico agronómico.",
      "Vento, chuva, bateria e sensores limitam os resultados.",
      "Operações de pulverização exigem equipamento próprio e conformidade legal.",
      "Confirmar regras aeronáuticas e de aplicação antes de operar."
    ],
    fontes: [
      { nome: "DJI Agriculture", url: "https://ag.dji.com/" },
      { nome: "FAO — agricultura digital", url: "https://www.fao.org/digital-agriculture/en/" }
    ]
  },
  {
    id: "irrigacao-pivo",
    titulo: "Sistemas de rega por pivô central",
    categoria: "Água e clima",
    subtitulo: "Distribuir água sobre grandes áreas de forma mecanizada.",
    resumo: "Sistemas de rega rotativos para culturas extensivas, com dimensionamento hidráulico adequado.",
    imagem: "https://armac.com.br/wordpress/wp-content/uploads/2023/07/armac-pivo-de-irrigacao-blog-1024x512.jpeg",
    imagemAlt: "Sistema de rega agrícola por pivô central.",
    impacto: "Muito elevado quando existe água suficiente",
    investimento: "Elevado a muito elevado",
    maturidade: "Tecnologia consolidada",
    porque: "O pivô central desloca-se sobre rodas e distribui água ao longo de uma estrutura rotativa. Pode ser adequado a áreas relativamente grandes e regulares. A escolha depende da disponibilidade de água, do caudal, da energia, do solo, da cultura e da drenagem. O investimento deve ser acompanhado por estudo hidráulico e agronómico.",
    funcionamento: [
      "Medir a disponibilidade de água e o caudal sustentável da fonte.",
      "Dimensionar bomba, tubagem, pressão e estrutura.",
      "Definir a lâmina de rega segundo solo, cultura e clima.",
      "Monitorizar uniformidade, consumo de energia e estado das plantas."
    ],
    beneficios: [
      "Mecanizar a rega de grandes áreas.",
      "Reduzir parte do trabalho manual de distribuição de água.",
      "Permitir programar operações com maior regularidade.",
      "Apoiar culturas comerciais quando a água é suficiente."
    ],
    aplicacoes: [
      "Milho, trigo, pastagens e outras culturas compatíveis.",
      "Explorações comerciais com parcelas adequadas.",
      "Perímetros irrigados com fonte de água sustentável."
    ],
    implementacao: [
      "Realizar estudo de água, solo, energia e topografia.",
      "Pedir projecto hidráulico e orçamento completo.",
      "Treinar operadores e definir manutenção.",
      "Medir água aplicada, energia e rendimento por campanha."
    ],
    cuidados: [
      "Um pivô não resolve a falta de água na fonte.",
      "A distribuição pode ser inadequada em terrenos muito irregulares.",
      "A drenagem deficiente pode provocar encharcamento.",
      "Considerar custos de energia, filtros, peças e manutenção."
    ],
    fontes: [
      { nome: "FAO — gestão da água na agricultura", url: "https://www.fao.org/land-water/water/water-management/en/" }
    ]
  },
  {
    id: "gota-a-gota",
    titulo: "Rega gota-a-gota e fertirrigação",
    categoria: "Água e clima",
    subtitulo: "Levar água e nutrientes à zona radicular.",
    resumo: "Tubagens, emissores, filtros e sistemas de injecção de fertilizantes para rega localizada.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWj6gDX7dXnqsD11ufdtJZgpIOmnUgTfZiMNC4jQ2PF3CIyHgIM9NBhTg&s=10",
    imagemAlt: "Sistema de rega gota-a-gota e fertirrigação.",
    impacto: "Muito elevado em culturas compatíveis",
    investimento: "Baixo a elevado conforme a área",
    maturidade: "Tecnologia consolidada",
    porque: "A rega gota-a-gota aplica água perto das raízes através de emissores. Pode melhorar o controlo da rega em hortícolas, pomares e outras culturas compatíveis. A fertirrigação introduz nutrientes na água, exigindo dimensionamento, filtragem e controlo técnico. A poupança depende do sistema anterior e da qualidade da instalação.",
    funcionamento: [
      "Avaliar a fonte de água e a sua qualidade.",
      "Dimensionar bomba, filtros, tubagem e emissores.",
      "Definir horários e volumes segundo a cultura e o solo.",
      "Inspeccionar fugas, entupimentos e uniformidade da rega."
    ],
    beneficios: [
      "Aplicar água de forma localizada.",
      "Facilitar o controlo de rega em culturas de maior valor.",
      "Permitir fertirrigação quando tecnicamente apropriada.",
      "Reduzir perdas por distribuição inadequada em sistemas bem geridos."
    ],
    aplicacoes: [
      "Hortícolas, pomares, viveiros e algumas culturas permanentes.",
      "Produção protegida e explorações comerciais.",
      "Zonas com disponibilidade de água limitada, após dimensionamento."
    ],
    implementacao: [
      "Analisar água e avaliar o caudal disponível.",
      "Dimensionar o sistema com apoio técnico.",
      "Formar o produtor em limpeza de filtros e manutenção.",
      "Comparar consumo de água, energia e produção."
    ],
    cuidados: [
      "Emissores podem entupir sem filtragem e manutenção.",
      "A qualidade da água condiciona a escolha do sistema.",
      "Fertirrigação exige compatibilidade química e orientação técnica.",
      "A instalação deve considerar pressão e diferenças de cota."
    ],
    fontes: [
      { nome: "Netafim — rega gota-a-gota", url: "https://www.netafim.com/" },
      { nome: "FAO — água e agricultura", url: "https://www.fao.org/land-water/water/en/" }
    ]
  },
  {
    id: "bombas-solares",
    titulo: "Bombas solares para rega e abeberamento",
    categoria: "Energia e infra-estruturas",
    subtitulo: "Bombear água com energia solar em locais adequados.",
    resumo: "Sistemas fotovoltaicos para abastecer reservatórios, rega e água para animais.",
    imagem: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Painéis solares usados para alimentar sistemas de bombagem de água.",
    impacto: "Elevado em locais sem energia fiável",
    investimento: "Médio a elevado",
    maturidade: "Tecnologia consolidada",
    porque: "A bombagem solar pode reduzir a dependência de combustível ou de uma rede eléctrica instável. O dimensionamento deve considerar a altura de elevação, o caudal diário, a fonte de água, a época seca e as horas de funcionamento. Painéis solares não aumentam a disponibilidade natural de água e não dispensam manutenção.",
    funcionamento: [
      "Medir a necessidade de água e a altura total de bombagem.",
      "Avaliar a fonte hídrica e a variação sazonal.",
      "Dimensionar bomba, painéis e controlador.",
      "Instalar protecções e monitorizar o caudal."
    ],
    beneficios: [
      "Reduzir consumo de combustível em sistemas adequados.",
      "Aumentar autonomia energética em locais remotos.",
      "Apoiar rega e abeberamento.",
      "Melhorar a previsibilidade dos custos operacionais."
    ],
    aplicacoes: [
      "Reservatórios e sistemas de rega.",
      "Água para bovinos, caprinos e outros animais.",
      "Explorações afastadas da rede eléctrica."
    ],
    implementacao: [
      "Fazer levantamento hidráulico antes de pedir orçamento.",
      "Comparar garantias, peças e assistência técnica.",
      "Instalar protecção contra funcionamento a seco.",
      "Registar caudal, horas de funcionamento e manutenção."
    ],
    cuidados: [
      "A fonte deve ter água suficiente durante o período crítico.",
      "Bombas subdimensionadas podem não satisfazer a procura.",
      "Proteger painéis e componentes contra danos e roubo.",
      "Confirmar a disponibilidade local de assistência."
    ],
    fontes: [
      { nome: "FAO — energia e agricultura", url: "https://www.fao.org/energy/" }
    ]
  },
  {
    id: "secadores-graos",
    titulo: "Secadores mecânicos de grãos",
    categoria: "Pós-colheita e armazenamento",
    subtitulo: "Reduzir a humidade antes de armazenar os cereais.",
    resumo: "Equipamentos de secagem controlada para grãos colhidos com humidade superior à adequada para armazenamento.",
    imagem: "https://corn-machines.com/wp-content/uploads/2025/08/corn-grain-dryer-and-its-finished-products.webp",
    imagemAlt: "Secador mecânico de grãos de milho.",
    impacto: "Muito elevado onde a humidade limita o armazenamento",
    investimento: "Médio a muito elevado",
    maturidade: "Tecnologia consolidada",
    porque: "Os secadores removem humidade de forma controlada para melhorar a conservação dos grãos. A capacidade deve corresponder ao volume diário colhido e à fonte de energia disponível. Temperatura e velocidade de secagem precisam de ser ajustadas à cultura e ao destino do produto para evitar danos na qualidade.",
    funcionamento: [
      "Medir a humidade dos grãos à entrada.",
      "Seleccionar o secador e definir a capacidade de processamento.",
      "Controlar temperatura, fluxo de ar e tempo de secagem.",
      "Verificar a humidade final e arrefecer antes do armazenamento, conforme o sistema."
    ],
    beneficios: [
      "Reduzir o risco de deterioração por excesso de humidade.",
      "Facilitar armazenamento e comercialização.",
      "Apoiar unidades de recolha e cooperativas.",
      "Permitir gerir a colheita quando o clima não garante secagem natural."
    ],
    aplicacoes: [
      "Milho, arroz e outros cereais compatíveis.",
      "Centros de recolha e unidades de processamento.",
      "Explorações comerciais e cooperativas."
    ],
    implementacao: [
      "Estimar o volume diário e a humidade de entrada.",
      "Comparar energia, capacidade e custo por tonelada.",
      "Planear manutenção e formação de operadores.",
      "Registar humidade, consumo e perdas por lote."
    ],
    cuidados: [
      "Secagem excessiva pode danificar o grão e aumentar custos.",
      "Armazenar grãos quentes ou húmidos pode provocar deterioração.",
      "A capacidade deve acompanhar o fluxo real da colheita.",
      "Cumprir regras de segurança contra incêndio e poeiras."
    ],
    fontes: [
      { nome: "FAO — perdas e desperdício alimentar", url: "https://www.fao.org/platform-food-loss-waste/" }
    ]
  },
  {
    id: "debulhadoras",
    titulo: "Debulhadoras e descascadoras",
    categoria: "Pós-colheita e armazenamento",
    subtitulo: "Separar grãos ou sementes da espiga, vagem ou estrutura colhida.",
    resumo: "Equipamentos para debulhar milho e outras culturas, com capacidade adequada ao volume produzido.",
    imagem: "https://majevica.co.rs/assets/images/products/10-1.png",
    imagemAlt: "Semeadora de cereais com tremonha e tubos distribuidores para linhas de sementeira.",
    impacto: "Muito elevado em operações pós-colheita",
    investimento: "Baixo a médio",
    maturidade: "Tecnologia consolidada",
    porque: "As debulhadoras separam os grãos da estrutura colhida, enquanto descascadoras removem determinadas coberturas. Podem reduzir trabalho manual e acelerar o processamento, desde que o equipamento seja apropriado à cultura e regulado para minimizar grãos partidos. A limpeza e a secagem continuam a ser necessárias conforme o produto.",
    funcionamento: [
      "Seleccionar equipamento específico para a cultura.",
      "Preparar o produto e regular a alimentação da máquina.",
      "Ajustar a debulha para reduzir perdas e danos.",
      "Limpar, classificar e encaminhar os grãos para secagem ou armazenamento."
    ],
    beneficios: [
      "Aumentar a capacidade de processamento.",
      "Reduzir trabalho manual repetitivo.",
      "Facilitar a preparação do produto para venda.",
      "Criar serviços partilhados de pós-colheita."
    ],
    aplicacoes: [
      "Milho e outras culturas para as quais exista máquina compatível.",
      "Cooperativas, centros de recolha e explorações familiares.",
      "Pequenas unidades agro-industriais."
    ],
    implementacao: [
      "Estimar o volume a processar por dia.",
      "Testar a máquina com o produto real.",
      "Medir perdas, impurezas e grãos partidos.",
      "Definir rotina de limpeza e manutenção."
    ],
    cuidados: [
      "Máquinas diferentes são necessárias para culturas diferentes.",
      "Regular mal a máquina aumenta perdas e danos.",
      "Controlar poeiras e proteger o operador.",
      "Não armazenar grãos sem avaliar a humidade."
    ],
    fontes: [
      { nome: "FAO — pós-colheita e perdas alimentares", url: "https://www.fao.org/platform-food-loss-waste/" }
    ]
  },
  {
    id: "limpeza-graos",
    titulo: "Máquinas de limpeza e classificação de grãos",
    categoria: "Pós-colheita e armazenamento",
    subtitulo: "Separar impurezas e uniformizar lotes para comercialização.",
    resumo: "Peneiros, aspiradores e classificadores para limpar grãos e melhorar a qualidade comercial.",
    imagem: "https://vjmaquinas.com.br/wp-content/uploads/2022/07/6-1.jpg",
    imagemAlt: "Máquina de limpeza e classificação de grãos.",
    impacto: "Elevado para comercialização formal",
    investimento: "Baixo a médio",
    maturidade: "Tecnologia consolidada",
    porque: "A limpeza remove palha, poeiras, pedras e outros materiais; a classificação separa lotes por tamanho ou outras características. O equipamento correcto depende do produto e dos padrões exigidos pelo comprador. Limpeza e classificação não substituem a secagem nem garantem, por si só, a segurança alimentar.",
    funcionamento: [
      "Definir os critérios de qualidade e o destino do lote.",
      "Seleccionar peneiros e sistemas de aspiração adequados.",
      "Regular o fluxo para evitar perdas de produto comercial.",
      "Inspeccionar o lote limpo e registar rejeições."
    ],
    beneficios: [
      "Melhorar a apresentação do produto.",
      "Reduzir impurezas antes do armazenamento.",
      "Facilitar a classificação por qualidade.",
      "Apoiar a comercialização em mercados mais exigentes."
    ],
    aplicacoes: [
      "Milho, feijão, soja, arroz e outras culturas compatíveis.",
      "Cooperativas e centros de recolha.",
      "Armazéns e unidades agro-industriais."
    ],
    implementacao: [
      "Confirmar requisitos do comprador.",
      "Dimensionar a capacidade de processamento.",
      "Testar o rendimento e a perda de grãos.",
      "Definir procedimentos de limpeza entre lotes."
    ],
    cuidados: [
      "A classificação depende das características do produto.",
      "Evitar contaminação cruzada entre lotes.",
      "A máquina não corrige danos causados por secagem inadequada.",
      "Manter protecções e sistemas de aspiração em boas condições."
    ],
    fontes: [
      { nome: "FAO — pós-colheita", url: "https://www.fao.org/platform-food-loss-waste/" }
    ]
  },
  {
    id: "silagem",
    titulo: "Picadoras de forragem e equipamentos de silagem",
    categoria: "Pecuária e forragens",
    subtitulo: "Conservar milho e outras forragens para alimentação animal.",
    resumo: "Picadoras, reboques e acessórios para preparar e transportar forragem destinada à ensilagem.",
    imagem: "https://img.interempresas.net/fotos/5136450.jpeg",
    imagemAlt: "Picadora de forragem para preparação de silagem.",
    impacto: "Muito elevado em sistemas pecuários com produção de forragem",
    investimento: "Médio a elevado",
    maturidade: "Tecnologia consolidada",
    porque: "A ensilagem conserva forragem através de fermentação controlada em condições adequadas. A picadora corta o material em partículas apropriadas ao sistema, e o transporte e a compactação devem ocorrer rapidamente. A qualidade depende da cultura, do teor de matéria seca, da vedação e da gestão do silo.",
    funcionamento: [
      "Escolher a cultura e o momento de corte.",
      "Regular o comprimento de corte conforme o sistema alimentar.",
      "Transportar e compactar a forragem rapidamente.",
      "Fechar o silo de forma hermética e acompanhar a conservação."
    ],
    beneficios: [
      "Criar reservas de alimento para a estação seca.",
      "Apoiar a regularidade da alimentação dos animais.",
      "Aproveitar culturas forrageiras planeadas.",
      "Reduzir a dependência de compra de alimento em determinadas épocas."
    ],
    aplicacoes: [
      "Milho forrageiro e outras culturas adequadas à ensilagem.",
      "Explorações de bovinos de leite e carne.",
      "Cooperativas e prestadores de serviços forrageiros."
    ],
    implementacao: [
      "Calcular a necessidade de forragem por animal e por período.",
      "Planear corte, transporte, compactação e armazenamento.",
      "Escolher equipamento adequado à escala da exploração.",
      "Formar operadores e avaliar a qualidade da silagem."
    ],
    cuidados: [
      "Material demasiado húmido ou seco pode comprometer a fermentação.",
      "O silo precisa de vedação adequada.",
      "A qualidade deve ser verificada antes da alimentação.",
      "Máquinas de corte exigem protecções e operadores treinados."
    ],
    fontes: [
      { nome: "FAO — produção animal", url: "https://www.fao.org/animal-production/" }
    ]
  },
  {
    id: "sensores-solo",
    titulo: "Sensores de humidade e estações meteorológicas",
    categoria: "Água e clima",
    subtitulo: "Tomar decisões com dados do solo e do tempo.",
    resumo: "Sensores de campo e estações meteorológicas para apoiar a programação da rega e o acompanhamento das culturas.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBg2AJDSFh0Y6qi8lxACVMr6CopzjHCCGs-eo6AtpgUS3cGZLH8w_0Hfh&s=10",
    imagemAlt: "Sensores de humidade do solo e estação meteorológica agrícola.",
    impacto: "Elevado em explorações que utilizam os dados",
    investimento: "Baixo a médio",
    maturidade: "Tecnologia disponível",
    porque: "Sensores de humidade ajudam a estimar a água disponível na zona radicular, enquanto estações meteorológicas medem variáveis como chuva, temperatura, vento e humidade do ar. Os dados podem apoiar a rega e o planeamento, mas precisam de instalação correcta, calibração e interpretação agronómica.",
    funcionamento: [
      "Seleccionar sensores de acordo com solo, cultura e objectivo.",
      "Instalar em locais representativos e nas profundidades adequadas.",
      "Registar leituras e compará-las com observações no campo.",
      "Ajustar rega ou operações com base em critérios técnicos."
    ],
    beneficios: [
      "Melhorar o conhecimento das condições do campo.",
      "Apoiar a programação da rega.",
      "Registar condições meteorológicas relevantes.",
      "Criar histórico para comparar campanhas."
    ],
    aplicacoes: [
      "Hortícolas, pomares, milho e culturas irrigadas.",
      "Explorações com estação seca marcada.",
      "Projectos de demonstração, investigação e extensão rural."
    ],
    implementacao: [
      "Definir a decisão que os dados irão apoiar.",
      "Escolher equipamentos resistentes às condições locais.",
      "Formar a equipa para ler e interpretar os dados.",
      "Avaliar se a informação melhorou decisões e custos."
    ],
    cuidados: [
      "Um sensor representa apenas o local onde está instalado.",
      "As leituras precisam de calibração e manutenção.",
      "Conectividade e bateria podem limitar a recolha remota.",
      "Os dados não substituem a observação directa da cultura."
    ],
    fontes: [
      { nome: "FAO — água e agricultura", url: "https://www.fao.org/land-water/water/en/" }
    ]
  },
  {
    id: "gps-autoguiamento",
    titulo: "GPS agrícola e autoguiamento",
    categoria: "Agricultura de precisão",
    subtitulo: "Reduzir sobreposições e melhorar a precisão das passagens.",
    resumo: "Sistemas de orientação por satélite para tractores e máquinas agrícolas.",
    imagem: "https://blog.agrointeli.com.br/blog/wp-content/uploads/2020/07/gps_agricola-500x300.jpg",
    imagemAlt: "Sistema GPS agrícola para orientação e autoguiamento.",
    impacto: "Elevado em operações repetitivas e grandes áreas",
    investimento: "Médio a elevado",
    maturidade: "Tecnologia disponível",
    porque: "Sistemas GPS agrícolas ajudam o operador a seguir linhas de passagem e a reduzir sobreposições. Soluções mais avançadas podem conduzir automaticamente a máquina, dependendo do equipamento e do sinal disponível. A precisão real depende do receptor, da correcção utilizada, do relevo e das condições de operação.",
    funcionamento: [
      "Mapear a parcela e definir as linhas de trabalho.",
      "Instalar e configurar o receptor e o monitor.",
      "Seleccionar o nível de precisão adequado à operação.",
      "Comparar sobreposições, falhas e tempo de trabalho."
    ],
    beneficios: [
      "Melhorar a repetibilidade das passagens.",
      "Reduzir sobreposições em determinadas operações.",
      "Facilitar trabalho nocturno apenas quando as condições de segurança o permitem.",
      "Apoiar mapas de aplicação e registos de campo."
    ],
    aplicacoes: [
      "Sementeira, fertilização e pulverização em grandes áreas.",
      "Operações repetitivas com tractores e máquinas compatíveis.",
      "Explorações que já utilizam dados georreferenciados."
    ],
    implementacao: [
      "Confirmar compatibilidade com tractor e alfaias.",
      "Avaliar o sinal e a precisão necessária.",
      "Formar o operador e testar numa parcela.",
      "Registar erros, sobreposições e tempo poupado."
    ],
    cuidados: [
      "Nem todos os sistemas GPS oferecem a mesma precisão.",
      "A electrónica exige alimentação, calibração e assistência.",
      "O autoguiamento não dispensa vigilância do operador.",
      "O investimento deve ser proporcional à área e à frequência de uso."
    ],
    fontes: [
      { nome: "FAO — mecanização agrícola sustentável", url: "https://www.fao.org/sustainable-agricultural-mechanization/en/" }
    ]
  },
  {
    id: "estufas",
    titulo: "Estufas inteligentes e hidroponia",
    categoria: "Produção protegida",
    subtitulo: "Produzir hortícolas com maior controlo do ambiente.",
    resumo: "Estruturas protegidas, ventilação, fertirrigação e cultivo sem solo.",
    imagem: "https://www.hydroponicschina.com/wp-content/uploads/2025/09/LP-Chili-and-Eggplant-Production-Base-in-Sri-Lanka.jpg",
    imagemAlt: "Produção de hortícolas em estufa e sistema hidropónico.",
    impacto: "Elevado para hortícolas de mercado",
    investimento: "Médio a elevado",
    maturidade: "Disponível; exige operação técnica consistente",
    porque: "A estufa protege parcialmente as culturas do vento, chuva e algumas pragas. A hidroponia utiliza solução nutritiva ou substrato inerte, exigindo água de qualidade, controlo nutricional, energia e mão-de-obra treinada. O investimento deve ser precedido de estudo de mercado e análise dos custos de operação.",
    funcionamento: [
      "Escolher cultura, estrutura e nível de controlo ambiental.",
      "Instalar rega, drenagem, ventilação e sensores necessários.",
      "Monitorizar água, nutrientes, temperatura e humidade.",
      "Registar produção, rejeições, energia e mão-de-obra."
    ],
    beneficios: [
      "Melhorar a regularidade da produção quando bem gerida.",
      "Permitir maior controlo da água e dos nutrientes.",
      "Aproveitar áreas próximas de mercados consumidores.",
      "Apoiar formação e demonstração tecnológica."
    ],
    aplicacoes: [
      "Tomate, pimento, pepino, alface e ervas aromáticas.",
      "Viveiros e produção de mudas.",
      "Projectos próximos de mercados com procura estável."
    ],
    implementacao: [
      "Estudar mercado e custos antes da construção.",
      "Analisar água e escolher culturas adequadas.",
      "Começar com uma unidade-piloto.",
      "Estabelecer rotinas de higiene e controlo integrado de pragas."
    ],
    cuidados: [
      "Calor excessivo sem ventilação prejudica as culturas.",
      "A hidroponia mal gerida pode causar perdas rápidas.",
      "Energia, água e consumíveis devem ser incluídos no orçamento.",
      "Não assumir produtividade elevada sem dados de ensaios locais."
    ],
    fontes: [
      { nome: "FAO — agricultura protegida e sistemas alimentares", url: "https://www.fao.org/" }
    ]
  },
  {
    id: "ia-agricola",
    titulo: "Inteligência artificial e assistência agronómica digital",
    categoria: "Dados e inteligência artificial",
    subtitulo: "Transformar informação local em orientações úteis.",
    resumo: "Ferramentas digitais para consultar práticas, organizar registos e apoiar a triagem de problemas.",
    imagem: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Tecnologia digital e equipamento de monitorização aplicado à produção.",
    impacto: "Elevado quando há conteúdo fiável",
    investimento: "Baixo a médio para começar",
    maturidade: "Disponível; a qualidade depende dos dados",
    porque: "A inteligência artificial pode ajudar a organizar registos, consultar orientações e formular perguntas para um técnico. Para Angola, a prioridade é utilizar conteúdos verificados e adaptados às culturas, províncias, solos e épocas. Uma resposta automática pode estar errada e não deve substituir diagnóstico agronómico ou veterinário.",
    funcionamento: [
      "Descrever cultura, província, fase de crescimento e problema observado.",
      "Consultar informação técnica identificada e datada.",
      "Mostrar fontes e reconhecer quando a resposta é incerta.",
      "Encaminhar casos de risco para profissionais habilitados."
    ],
    beneficios: [
      "Facilitar o acesso a informação organizada.",
      "Apoiar registos de operações, custos e sintomas.",
      "Melhorar formação e extensão rural.",
      "Identificar lacunas de conhecimento e investigação."
    ],
    aplicacoes: [
      "Calendários de produção e registos de campo.",
      "Triagem inicial de sintomas e pragas.",
      "Gestão de custos, stocks e operações agrícolas.",
      "Formação e consulta de conteúdos técnicos."
    ],
    implementacao: [
      "Começar com um conjunto de recomendações verificadas.",
      "Identificar autores, fontes e datas dos conteúdos.",
      "Testar respostas com agrónomos e produtores.",
      "Criar mecanismos de correcção e encaminhamento."
    ],
    cuidados: [
      "Não decidir tratamentos ou doses apenas com uma resposta automática.",
      "Proteger dados e fotografias dos produtores.",
      "Não apresentar referências inventadas.",
      "Declarar incerteza e recomendar validação profissional."
    ],
    fontes: [
      { nome: "FAO — agricultura digital", url: "https://www.fao.org/digital-agriculture/en/" }
    ]
  },
  {
    id: "pecuaria-precisao",
    titulo: "Pecuária de precisão e identificação animal",
    categoria: "Pecuária inteligente",
    subtitulo: "Registar cada animal para gerir saúde e produção.",
    resumo: "Identificação individual, balanças e registos digitais para acompanhar o efectivo.",
    imagem: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Animais numa exploração pecuária com tecnologias de gestão e monitorização.",
    impacto: "Elevado em efectivos médios e grandes",
    investimento: "Baixo a elevado",
    maturidade: "Tecnologias disponíveis",
    porque: "Brincos identificadores, balanças e registos digitais ajudam a acompanhar peso, reprodução, tratamentos e movimentações. Sensores avançados podem emitir alertas, mas precisam de validação e não substituem observação clínica por profissional habilitado.",
    funcionamento: [
      "Atribuir um identificador único a cada animal.",
      "Registar pesagens, reprodução, tratamentos e movimentações.",
      "Analisar indicadores por animal ou lote.",
      "Confirmar alertas com o técnico responsável."
    ],
    beneficios: [
      "Melhorar rastreabilidade e controlo sanitário.",
      "Acompanhar crescimento e reprodução.",
      "Reduzir perda de informação.",
      "Apoiar decisões sobre alimentação e selecção."
    ],
    aplicacoes: [
      "Bovinos de carne e leite, caprinos, ovinos e suínos.",
      "Explorações com reprodução planeada.",
      "Programas de sanidade e melhoramento genético."
    ],
    implementacao: [
      "Começar com identificação e registos essenciais.",
      "Definir responsáveis pela actualização dos dados.",
      "Escolher equipamentos adequados a poeira, calor e conectividade.",
      "Rever os indicadores periodicamente."
    ],
    cuidados: [
      "Dados incompletos podem levar a decisões erradas.",
      "Sensores precisam de calibração e manutenção.",
      "Diagnósticos e tratamentos devem ser orientados por profissionais.",
      "Proteger os registos e controlar quem lhes acede."
    ],
    fontes: [
      { nome: "FAO — produção animal", url: "https://www.fao.org/animal-production/" }
    ]
  },
  {
    id: "poscolheita-frio",
    titulo: "Câmaras frigoríficas e armazenamento",
    categoria: "Pós-colheita e armazenamento",
    subtitulo: "Proteger o valor da produção depois da colheita.",
    resumo: "Equipamentos de frio, ventilação e armazenamento adaptados ao produto.",
    imagem: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Armazenamento e logística de produtos agrícolas em ambiente controlado.",
    impacto: "Elevado para produtos perecíveis",
    investimento: "Variável, de armazenamento ventilado a frio controlado",
    maturidade: "Tecnologia consolidada",
    porque: "Calor, humidade, danos e atrasos de transporte podem reduzir a qualidade e o preço dos produtos. A solução depende do produto: grãos exigem secagem e armazenamento adequados; frutas e hortícolas podem necessitar de pré-arrefecimento ou frio; produtos animais exigem cadeia de frio apropriada.",
    funcionamento: [
      "Identificar o produto, o volume e o tempo de armazenamento.",
      "Seleccionar ventilação, secagem ou refrigeração adequada.",
      "Registar temperatura, humidade e movimentação dos lotes.",
      "Medir perdas, rejeições e custo logístico."
    ],
    beneficios: [
      "Reduzir deterioração quando a solução é adequada.",
      "Melhorar a regularidade de qualidade.",
      "Apoiar a negociação e o planeamento das vendas.",
      "Facilitar rastreabilidade."
    ],
    aplicacoes: [
      "Hortícolas, frutas, leite, carne e outros produtos perecíveis.",
      "Centros de recolha, cooperativas e mercados.",
      "Unidades agro-industriais."
    ],
    implementacao: [
      "Medir perdas actuais e identificar a sua origem.",
      "Calcular volume, energia, isolamento e manutenção.",
      "Formar operadores em higiene e controlo de temperatura.",
      "Organizar transporte e compradores antes de investir."
    ],
    cuidados: [
      "O frio inadequado pode danificar determinados produtos.",
      "A energia e a manutenção são custos permanentes.",
      "Separar produtos incompatíveis e respeitar normas de higiene.",
      "Armazenamento não corrige colheita ou manuseamento deficientes."
    ],
    fontes: [
      { nome: "FAO — perdas e desperdício alimentar", url: "https://www.fao.org/platform-food-loss-waste/" }
    ]
  }
];

const categorias = [
  "Todas",
  ...Array.from(new Set(tecnologias.map((t) => t.categoria)))
];

const destaques = [
  "colhedoras-cereais",
  "tratores-medios",
  "adubadoras",
  "plantadoras-precisao",
  "irrigacao-pivo",
  "drones"
];

export default function TecnologiasPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [modal, setModal] = useState<Tecnologia | null>(null);
  const [slide, setSlide] = useState(0);
  const [favoritas, setFavoritas] = useState<string[]>([]);

  const filtradas = useMemo(() => {
    const termo = pesquisa.toLocaleLowerCase("pt").trim();

    return tecnologias.filter((t) => {
      const texto = [
        t.titulo,
        t.categoria,
        t.resumo,
        t.subtitulo,
        t.porque,
        ...t.aplicacoes
      ].join(" ").toLocaleLowerCase("pt");

      return (
        (categoria === "Todas" || t.categoria === categoria) &&
        texto.includes(termo)
      );
    });
  }, [pesquisa, categoria]);

  const destaque = tecnologias.find(
    (t) => t.id === destaques[slide]
  ) ?? tecnologias[0];

  function mudarSlide(direcao: number) {
    setSlide((actual) =>
      (actual + direcao + destaques.length) % destaques.length
    );
  }

  function alternarFavorita(id: string) {
    setFavoritas((actual) =>
      actual.includes(id)
        ? actual.filter((item) => item !== id)
        : [...actual, id]
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f8f5] text-[#173326]">
      <style jsx global>{`
        @keyframes agroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes agroSoftZoom {
          from { transform: scale(1.04); opacity: .72; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes agroModalIn {
          from { opacity: 0; transform: translateY(16px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .agro-reveal { animation: agroFadeUp .65s ease both; }
        .agro-hero-image { animation: agroSoftZoom .75s ease both; }
        .agro-modal { animation: agroModalIn .24s ease-out both; }
        .agro-card {
          transition: transform .28s ease, box-shadow .28s ease,
          border-color .28s ease;
        }
        .agro-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 22px 48px rgba(20,83,45,.13);
          border-color: #86c99c;
        }
        @media (prefers-reduced-motion: reduce) {
          .agro-reveal, .agro-hero-image, .agro-modal {
            animation: none !important;
          }
          .agro-card { transition: none !important; }
        }
      `}</style>

      <section className="relative isolate min-h-[590px] overflow-hidden bg-green-950 text-white lg:min-h-[650px]">
        <div
          key={destaque.id}
          className="agro-hero-image absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url("${destaque.imagem}")` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#052e1b] via-[#052e1b]/90 to-[#052e1b]/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#052e1b]/80 via-transparent to-black/10" />

        <div className="mx-auto flex min-h-[590px] max-w-[1440px] items-center px-5 py-16 lg:min-h-[650px] lg:px-10">
          <div className="agro-reveal max-w-4xl">
            <span className="inline-flex rounded-full border border-emerald-300/40 bg-emerald-900/55 px-4 py-2 text-xs font-bold uppercase tracking-[.19em] text-emerald-100">
              AGROINOVA · Tecnologias para Angola
            </span>

            <p className="mt-7 text-sm font-bold uppercase tracking-[.2em] text-emerald-300">
              Máquinas, equipamentos e inovação
            </p>

            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-[1.06] tracking-tight sm:text-5xl lg:text-7xl">
              Tecnologia prática para transformar a produção agropecuária.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50/90 sm:text-lg">
              Conheça tractores, alfaias, semeadoras, colhedoras, adubadoras,
              sistemas de rega e outras tecnologias. Descubra como funcionam,
              onde podem ser utilizadas em Angola e o que avaliar antes de investir.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalogo"
                className="rounded-xl bg-emerald-400 px-6 py-4 font-extrabold text-green-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Explorar equipamentos ↓
              </a>
              <button
                onClick={() => setModal(tecnologias.find((t) => t.id === "colhedoras-cereais") ?? tecnologias[0])}
                className="rounded-xl border border-white/35 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ver colhedoras
              </button>
            </div>

            <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { n: String(tecnologias.length).padStart(2, "0"), t: "equipamentos e tecnologias" },
                { n: String(categorias.length - 1).padStart(2, "0"), t: "áreas tecnológicas" },
                { n: "AO", t: "aplicação à realidade angolana" },
                { n: "360°", t: "da escolha à implementação" }
              ].map((item) => (
                <div key={item.t} className="rounded-2xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm">
                  <strong className="block text-2xl font-black text-emerald-300">{item.n}</strong>
                  <span className="mt-1 block text-xs leading-5 text-green-50/90">{item.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 flex items-center gap-2 sm:right-10">
          <span className="mr-2 text-xs font-semibold text-white/80">
            Destaque {slide + 1} / {destaques.length}
          </span>
          <button
            aria-label="Destaque anterior"
            onClick={() => mudarSlide(-1)}
            className="h-11 w-11 rounded-full border border-white/40 bg-black/25 text-xl transition hover:bg-white hover:text-green-950"
          >
            ‹
          </button>
          <button
            aria-label="Próximo destaque"
            onClick={() => mudarSlide(1)}
            className="h-11 w-11 rounded-full border border-white/40 bg-black/25 text-xl transition hover:bg-white hover:text-green-950"
          >
            ›
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="agro-reveal">
            <span className="text-xs font-black uppercase tracking-[.18em] text-green-700">
              Mecanização adaptada a Angola
            </span>
            <h2 className="mt-3 text-3xl font-black leading-tight text-green-950 sm:text-4xl">
              A máquina certa depende da exploração, não apenas da potência.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              O tamanho da parcela, o solo, a cultura, a água, o combustível,
              a assistência técnica e a disponibilidade de peças devem orientar
              cada investimento.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { n: "01", t: "Conhecer", d: "Identificar o problema, a cultura e as operações necessárias." },
              { n: "02", t: "Comparar", d: "Avaliar potência, capacidade, manutenção e custo por hectare." },
              { n: "03", t: "Implementar", d: "Testar, formar operadores e medir os resultados." }
            ].map((item, i) => (
              <article key={item.n} style={{ animationDelay: `${i * 90}ms` }} className="agro-reveal rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                <span className="text-sm font-black text-emerald-600">{item.n}</span>
                <h3 className="mt-3 text-lg font-extrabold text-green-950">{item.t}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogo" className="scroll-mt-8 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[.18em] text-green-700">
                Biblioteca de tecnologias
              </span>
              <h2 className="mt-3 text-3xl font-black text-green-950 sm:text-4xl">
                Catálogo de máquinas e soluções agrícolas
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Abra cada ficha para consultar funcionamento, benefícios,
                aplicações, implementação e cuidados. As gamas de potência e
                os custos são indicativos; a escolha deve ser confirmada para
                cada exploração.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-[minmax(230px,1fr)_minmax(220px,.8fr)] lg:w-[530px]">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  Pesquisar
                </span>
                <input
                  value={pesquisa}
                  onChange={(e) => setPesquisa(e.target.value)}
                  placeholder="Ex.: colhedora, tractor, adubadora..."
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fbf9] px-4 py-3 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">
                  Área tecnológica
                </span>
                <select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fbf9] px-4 py-3 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
                >
                  {categorias.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <p className="text-sm text-slate-600">
              <strong className="text-green-950">{filtradas.length}</strong> soluções encontradas
            </p>
            <p className="text-xs text-slate-500">Seleccione um cartão para abrir a ficha técnica.</p>
          </div>

          <div className="mt-7 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtradas.map((t, i) => (
              <article
                key={t.id}
                style={{ animationDelay: `${Math.min(i, 8) * 55}ms` }}
                className="agro-card agro-reveal group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => setModal(t)}
                  className="block w-full text-left"
                  aria-label={`Abrir detalhes: ${t.titulo}`}
                >
                  <div className="relative h-56 overflow-hidden bg-green-100">
                    <img
                      src={t.imagem}
                      alt={t.imagemAlt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-950/75 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-green-950/65 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                      {t.categoria}
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-extrabold text-green-900">
                      Ver tecnologia ↗
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black leading-snug text-green-950">{t.titulo}</h3>
                    <p className="mt-2 text-sm font-semibold text-green-700">{t.subtitulo}</p>
                    <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-600">{t.resumo}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-bold text-slate-500">
                        Impacto: <span className="text-green-800">{t.impacto}</span>
                      </span>
                      <span className="text-xl font-bold text-green-700 transition group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </button>

                <div className="flex items-center justify-between border-t border-slate-100 bg-[#fbfdfb] px-6 py-3">
                  <button
                    onClick={() => alternarFavorita(t.id)}
                    className="text-xs font-bold text-slate-600 transition hover:text-green-800"
                  >
                    {favoritas.includes(t.id) ? "Guardada para consultar ✓" : "Guardar para consultar +"}
                  </button>
                  <button
                    onClick={() => setModal(t)}
                    className="text-xs font-extrabold text-green-800 hover:underline"
                  >
                    Guia completo
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filtradas.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-green-200 bg-green-50 p-10 text-center">
              <h3 className="text-xl font-black text-green-950">Nenhuma tecnologia encontrada</h3>
              <p className="mt-2 text-slate-600">Experimente outro termo ou limpe os filtros.</p>
              <button
                onClick={() => { setPesquisa(""); setCategoria("Todas"); }}
                className="mt-5 rounded-xl bg-green-800 px-5 py-3 font-bold text-white transition hover:bg-green-700"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#092f1d] py-14 text-white lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[.18em] text-emerald-300">
              Como investir com segurança
            </span>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Antes de comprar uma máquina, faça estas verificações.
            </h2>
            <p className="mt-4 leading-7 text-green-50/80">
              Uma máquina agrícola não é apenas o preço de compra. É necessário
              avaliar o custo de operação, a assistência, as peças, o transporte
              e o número de horas de utilização por campanha.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { t: "Compatibilidade", d: "Confirmar potência, hidráulica, engate, largura de trabalho e condições do terreno." },
              { t: "Assistência", d: "Pedir referências, garantia por escrito, peças e oficina acessíveis em Angola." },
              { t: "Custo total", d: "Calcular combustível, lubrificantes, manutenção, operador, transporte e paragens." },
              { t: "Retorno", d: "Comparar custo por hectare, tempo poupado, perdas e rendimento obtido." }
            ].map((item) => (
              <article key={item.t} className="rounded-2xl border border-white/15 bg-white/[.06] p-6">
                <h3 className="text-lg font-black text-emerald-200">{item.t}</h3>
                <p className="mt-3 text-sm leading-7 text-green-50/80">{item.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl bg-green-950 p-7 text-white shadow-xl sm:p-10">
            <span className="text-xs font-black uppercase tracking-[.18em] text-emerald-300">
              Mecanização para Angola
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight">
              Nem todos os produtores precisam de comprar todas as máquinas.
            </h2>
            <p className="mt-4 leading-7 text-green-50/85">
              Em muitos casos, cooperativas de máquinas, aluguer e prestadores
              de serviços por hectare podem tornar a mecanização mais acessível.
              A decisão deve considerar a dimensão da exploração e a época em
              que o equipamento será utilizado.
            </p>
            <a
              href="https://minagrif.gov.ao/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl bg-emerald-400 px-5 py-3 font-extrabold text-green-950 transition hover:bg-emerald-300"
            >
              Consultar MINAGRIF ↗
            </a>
          </div>

          <div className="space-y-4">
            {[
              { t: "Começar pelo problema", d: "Ex.: sementeira tardia, colheita lenta, falta de água ou perdas no armazenamento." },
              { t: "Testar antes de expandir", d: "Usar uma parcela-piloto ou contratar um serviço antes de comprar máquinas caras." },
              { t: "Formar operadores", d: "A formação reduz avarias, riscos de acidente e erros de regulação." },
              { t: "Registar os resultados", d: "Guardar dados de área, horas, combustível, manutenção, perdas e produção." }
            ].map((item, i) => (
              <div key={item.t} className="flex gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 font-black text-green-900">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-extrabold text-green-950">{item.t}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-green-100 bg-[#eaf5ed] py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-5 md:grid-cols-3 lg:px-10">
          {[
            {
              t: "Conteúdo técnico",
              d: "As fichas descrevem utilizações, benefícios e limitações. As gamas e recomendações devem ser confirmadas por profissionais para cada caso."
            },
            {
              t: "Fontes e fornecedores",
              d: "Os links apresentados são referências para aprofundamento técnico. A sua inclusão não significa parceria comercial, certificação ou garantia de assistência em Angola."
            },
            {
              t: "Realidade angolana",
              d: "A tecnologia deve considerar clima, solos, água, energia, logística, conectividade, dimensão da exploração e capacidade de manutenção."
            }
          ].map((item) => (
            <article key={item.t} className="rounded-2xl border border-green-200/80 bg-white/80 p-6">
              <h3 className="text-lg font-black text-green-950">{item.t}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      {modal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setModal(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
            className="agro-modal flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="relative shrink-0 bg-green-950 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{ backgroundImage: `url("${modal.imagem}")` }}
              />
              <div className="relative flex items-start justify-between gap-4 px-5 py-6 sm:px-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-[.18em] text-emerald-300">
                    Guia tecnológico AGROINOVA
                  </span>
                  <h2 id="modal-titulo" className="mt-2 max-w-3xl text-2xl font-black leading-tight sm:text-3xl">
                    {modal.titulo}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-green-50/90">
                    {modal.subtitulo}
                  </p>
                </div>
                <button
                  onClick={() => setModal(null)}
                  aria-label="Fechar janela"
                  className="shrink-0 rounded-xl border border-white/30 px-4 py-2 text-sm font-bold transition hover:bg-white/15"
                >
                  Fechar ✕
                </button>
              </div>
            </div>

            <div className="overflow-y-auto">
              <div className="grid gap-0 lg:grid-cols-[.82fr_1.18fr]">
                <div className="bg-[#f3f8f5] p-5 sm:p-7">
                  <img
                    src={modal.imagem}
                    alt={modal.imagemAlt}
                    className="h-56 w-full rounded-2xl object-cover shadow-md sm:h-64"
                  />
                  <p className="mt-4 text-xs leading-5 text-slate-500">
                    Imagem ilustrativa. A fotografia pode não representar uma
                    exploração angolana nem o modelo exacto do equipamento.
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-green-100 bg-white p-4">
                      <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Impacto esperado</span>
                      <p className="mt-1 font-extrabold text-green-950">{modal.impacto}</p>
                    </div>
                    <div className="rounded-xl border border-green-100 bg-white p-4">
                      <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Investimento relativo</span>
                      <p className="mt-1 font-extrabold text-green-950">{modal.investimento}</p>
                    </div>
                    <div className="rounded-xl border border-green-100 bg-white p-4">
                      <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Maturidade</span>
                      <p className="mt-1 font-extrabold text-green-950">{modal.maturidade}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => alternarFavorita(modal.id)}
                    className="mt-4 w-full rounded-xl border border-green-700 px-4 py-3 text-sm font-extrabold text-green-800 transition hover:bg-green-50"
                  >
                    {favoritas.includes(modal.id) ? "Remover dos guardados" : "Guardar esta tecnologia"}
                  </button>
                </div>

                <div className="p-5 sm:p-8">
                  <section>
                    <h3 className="text-xl font-black text-green-950">Porque vale a pena considerar?</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{modal.porque}</p>
                  </section>

                  <section className="mt-7">
                    <h3 className="text-lg font-black text-green-950">Como funciona, passo a passo</h3>
                    <ol className="mt-3 space-y-3">
                      {modal.funcionamento.map((item, i) => (
                        <li key={item} className="flex gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-green-100 text-xs font-black text-green-900">
                            {i + 1}
                          </span>
                          <p className="text-sm leading-6 text-slate-700">{item}</p>
                        </li>
                      ))}
                    </ol>
                  </section>

                  <section className="mt-7">
                    <h3 className="text-lg font-black text-green-950">Benefícios possíveis</h3>
                    <ul className="mt-3 space-y-2">
                      {modal.beneficios.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="mt-7">
                    <h3 className="text-lg font-black text-green-950">Aplicações em Angola</h3>
                    <ul className="mt-3 space-y-2">
                      {modal.aplicacoes.map((item) => (
                        <li key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="mt-7">
                    <h3 className="text-lg font-black text-green-950">Plano de implementação</h3>
                    <ol className="mt-3 space-y-3">
                      {modal.implementacao.map((item, i) => (
                        <li key={item} className="flex gap-3">
                          <span className="font-black text-green-700">0{i + 1}</span>
                          <p className="text-sm leading-6 text-slate-700">{item}</p>
                        </li>
                      ))}
                    </ol>
                  </section>

                  <section className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 className="font-black text-amber-950">Limites e cuidados</h3>
                    <ul className="mt-3 space-y-2">
                      {modal.cuidados.map((item) => (
                        <li key={item} className="text-sm leading-6 text-amber-950/85">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-white p-5 sm:p-8">
                <span className="text-xs font-black uppercase tracking-[.16em] text-green-700">
                  Fontes para consulta
                </span>
                <h3 className="mt-2 text-2xl font-black text-green-950">
                  Aprofundar o conhecimento
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Consulte as referências e confirme a adequação técnica,
                  a disponibilidade de equipamentos, as garantias e a assistência
                  antes de tomar decisões de compra.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {modal.fontes.map((fonte) => (
                    <a
                      key={fonte.url}
                      href={fonte.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-green-200 bg-white px-4 py-3 text-sm font-semibold text-green-900 transition hover:border-green-500 hover:bg-green-50"
                    >
                      {fonte.nome} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex shrink-0 items-center justify-between gap-3 border-t border-slate-200 bg-white px-5 py-3 sm:px-8">
              <span className="text-xs text-slate-500">
                AGROINOVA ANGOLA · Conhecimento, tecnologia e inovação ao serviço do campo.
              </span>
              <button
                onClick={() => setModal(null)}
                className="rounded-xl bg-green-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-800"
              >
                Concluir leitura
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
