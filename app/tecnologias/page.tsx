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
  empresas: { nome: string; tipo: string; descricao: string; url: string; local: boolean }[];
  fontes: { nome: string; url: string }[];
};

const tecnologias: Tecnologia[] = [
  {
    id: "drones", titulo: "Drones para agricultura de precisão", categoria: "Agricultura de precisão",
    subtitulo: "Ver o campo de cima para tomar decisões melhores.",
    resumo: "Mapeamento aéreo, acompanhamento das culturas e aplicação localizada quando tecnicamente adequada.",
    imagem: "https://img.youtube.com/vi/pH0Gy47NkpI/hqdefault.jpg",
    imagemAlt: "Drone agrícola DJI Agras preparado para pulverização de precisão",
    impacto: "Elevado em explorações médias e grandes", investimento: "Médio a elevado; pode começar por contratação do serviço", maturidade: "Disponível para pilotos e operações especializadas",
    porque: "Em talhões extensos, irregulares ou de acesso difícil, percorrer tudo a pé consome tempo e pode deixar problemas por identificar. Um drone equipado com câmara RGB ou sensor multiespectral pode produzir mapas do terreno e revelar diferenças de vigor, falhas de plantação, zonas encharcadas ou áreas sob stress. O drone não substitui a visita do agrónomo: ajuda a escolher onde observar, recolher amostras e intervir.",
    funcionamento: ["Define-se a parcela e o objectivo: contagem de plantas, vigor, drenagem, danos ou levantamento topográfico.", "O operador planeia o voo, respeitando a legislação aeronáutica, a segurança de pessoas e as condições meteorológicas.", "As imagens são processadas em mapas; os resultados são cruzados com observações no campo.", "O técnico transforma o mapa em tarefas: inspeccionar uma zona, corrigir a rega ou confirmar uma suspeita de praga."],
    beneficios: ["Identificar problemas antes de se tornarem visíveis em toda a parcela.", "Mapear áreas extensas em menos tempo do que uma inspecção exclusivamente manual.", "Documentar a evolução de uma cultura ao longo da campanha.", "Apoiar o cálculo de áreas, a drenagem e o planeamento de intervenções.", "Quando existe equipamento apropriado e operador habilitado, avaliar aplicação localizada com menor exposição de trabalhadores."],
    aplicacoes: ["Milho, soja, arroz, trigo e outras culturas extensivas.", "Pomares, cafezais, perímetros irrigados e explorações com relevo irregular.", "Inventário de parcelas, erosão, queimadas e acompanhamento de projectos florestais."],
    implementacao: ["Começar com uma parcela-piloto e uma pergunta agronómica concreta.", "Contratar operador com experiência, seguro e documentação operacional adequada.", "Comparar os mapas com visitas de campo e registar o que foi realmente detectado.", "Avaliar custo por hectare, tempo poupado e decisões melhoradas antes de ampliar."],
    cuidados: ["Imagem aérea não diagnostica sozinha doenças, deficiência nutricional ou necessidade de fertilizante.", "O vento, a chuva, a autonomia da bateria, a resolução do sensor e a formação do operador condicionam o resultado.", "Aplicações de produtos fitofarmacêuticos exigem avaliação técnica, equipamento próprio e cumprimento das regras aplicáveis."],
    empresas: [{ nome: "EPDRONES", tipo: "Prestador de serviços em Angola", descricao: "Divulga serviços de agricultura de precisão, mapeamento e operação com drones. Solicitar proposta para a cultura, área e finalidade específicas.", url: "https://www.epdrones.com/", local: true }, { nome: "DJI Agriculture", tipo: "Fabricante internacional", descricao: "Fabricante de plataformas de mapeamento e aplicação agrícola; confirmar representante, assistência e peças disponíveis em Angola.", url: "https://ag.dji.com/", local: false }],
    fontes: [{ nome: "MINAGRIF — cooperação tecnológica e sensoriamento remoto com drones", url: "https://minagrif.gov.ao/web/noticias/angola-e-emirados-arabes-unidos-avancam-na-cooperacao-tecnologica-para-modernizar-o-sector-agricola" }, { nome: "EPDRONES — serviços de drones em Angola", url: "https://www.epdrones.com/" }]
  },
  {
    id: "irrigacao", titulo: "Rega inteligente e sensores de humidade", categoria: "Água e clima",
    subtitulo: "Aplicar água quando a cultura precisa, e não apenas por rotina.",
    resumo: "Sensores, programação e controlo de rega para reduzir desperdício e estabilizar a produção.",
    imagem: "https://img.youtube.com/vi/kFDrIdT5ZiM/hqdefault.jpg",
    imagemAlt: "Sistema de irrigação por pivô central em funcionamento numa exploração agrícola",
    impacto: "Muito elevado em zonas com água limitada", investimento: "Baixo a elevado, conforme automação e área", maturidade: "Tecnologia consolidada",
    porque: "A rega feita apenas por calendário pode aplicar água em excesso ou tarde demais. Sensores instalados na zona radicular ajudam a perceber se o solo está seco ou suficientemente húmido. Associados a filtros, válvulas, gota-a-gota ou pivôs, permitem ajustar a frequência e a duração da rega à cultura, ao solo e à fase de desenvolvimento.",
    funcionamento: ["Mede-se a humidade em pontos representativos e, se possível, em mais de uma profundidade.", "O técnico define limites de decisão específicos para a cultura e o tipo de solo.", "O sistema avisa o produtor ou comanda válvulas e bombas, se tiver automação.", "Os registos de rega são comparados com chuva, estado das plantas e produção."],
    beneficios: ["Reduzir rega desnecessária e custos de bombagem.", "Diminuir stress hídrico e irregularidade de crescimento.", "Apoiar fertirrigação mais controlada quando o sistema e a recomendação técnica o permitem.", "Detectar avarias, fugas ou diferenças de distribuição."],
    aplicacoes: ["Hortícolas, viveiros, fruteiras, café, milho e produção protegida.", "Explorações com poços, reservatórios, pivôs ou sistemas gota-a-gota.", "Projectos em regiões com estação seca marcada e disponibilidade de água variável."],
    implementacao: ["Auditar a fonte de água, o caudal, a qualidade da água e o sistema actual.", "Escolher sensores compatíveis com o solo e instalar correctamente.", "Treinar o produtor para interpretar as leituras e manter filtros e emissores.", "Comparar consumo de água, energia e rendimento por campanha."],
    cuidados: ["Um sensor mal instalado pode representar apenas um pequeno ponto da parcela.", "Gota-a-gota exige filtragem, manutenção e dimensionamento hidráulico correctos.", "A automação não corrige falta de água na fonte nem substitui o planeamento agronómico."],
    empresas: [{ nome: "Quiminha / estruturas de regadio", tipo: "Referência de produção em Angola", descricao: "O Pólo da Quiminha é documentado como exploração com pivôs e produção irrigada. É uma referência de contexto, não uma oferta comercial garantida de sensores.", url: "https://www.opais.ao/economia/producao-agricola-da-quiminha-abastece-grandes-superficies-comerciais/", local: true }, { nome: "Netafim", tipo: "Fornecedor internacional", descricao: "Soluções de rega gota-a-gota e fertirrigação. Confirmar representante, instalação e assistência técnica para Angola.", url: "https://www.netafim.com/", local: false }],
    fontes: [{ nome: "O País — produção irrigada na Quiminha", url: "https://www.opais.ao/economia/producao-agricola-da-quiminha-abastece-grandes-superficies-comerciais/" }, { nome: "MINAGRIF — projectos de modernização agrícola", url: "https://minagrif.gov.ao/" }]
  },
  {
    id: "estufas", titulo: "Estufas inteligentes e hidroponia", categoria: "Produção protegida",
    subtitulo: "Produzir hortícolas com maior controlo do ambiente.",
    resumo: "Estruturas protegidas, ventilação, fertirrigação e cultivo sem solo para produções de maior valor.",
    imagem: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Cultivo de plantas em ambiente de viveiro e produção protegida",
    impacto: "Elevado para hortícolas de mercado", investimento: "Médio a elevado", maturidade: "Disponível; exige operação técnica consistente",
    porque: "A estufa protege parcialmente a cultura da chuva, vento, algumas pragas e variações ambientais. Quando combinada com ventilação, sombreamento, monitorização e fertirrigação, permite gerir melhor o ambiente. A hidroponia cultiva plantas numa solução nutritiva ou substrato inerte; não significa automaticamente menos custos, pois exige água de qualidade, energia, controlo e mão-de-obra treinada.",
    funcionamento: ["Escolhem-se cultura, mercado, dimensão, tipo de cobertura e nível de controlo climático.", "Instalam-se irrigação, drenagem, ventilação e, se necessário, sensores de temperatura e humidade.", "A solução nutritiva é preparada e monitorizada segundo a cultura e a qualidade da água.", "Registam-se produção comercial, rejeições, consumo de água, energia e mão-de-obra."],
    beneficios: ["Maior regularidade de produção e qualidade em condições bem geridas.", "Possibilidade de produzir hortícolas fora da época mais favorável em campo aberto.", "Melhor controlo da água e dos nutrientes, quando o sistema é correctamente dimensionado.", "Aproveitamento intensivo de áreas próximas de mercados consumidores."],
    aplicacoes: ["Tomate, pimento, pepino, alface, ervas aromáticas e viveiros.", "Projectos próximos de Luanda, Benguela, Huambo e outros mercados com procura estável.", "Produção comercial, demonstração técnica e formação de jovens agricultores."],
    implementacao: ["Fazer estudo de mercado e plano de custos antes de comprar a estrutura.", "Analisar água e escolher cultura compatível com clima, mercado e capacidade técnica.", "Instalar primeiro uma unidade-piloto, com assistência de agrónomo.", "Definir rotina de limpeza, monitorização, controlo integrado de pragas e registo de custos."],
    cuidados: ["Calor excessivo sem ventilação pode reduzir a produção e danificar culturas.", "Hidroponia mal gerida pode provocar desequilíbrios nutricionais e perdas rápidas.", "Não usar estimativas promocionais de produtividade ou poupança sem ensaios locais independentes."],
    empresas: [{ nome: "Horta Verde Angola", tipo: "Produtor angolano", descricao: "Apresenta produção hortícola, estufas, hidroponia e gestão de água no seu próprio projecto. Contactar para conhecer a solução efectivamente fornecida a terceiros.", url: "https://hortaverde-ao.com/", local: true }, { nome: "UPIDA", tipo: "Projecto tecnológico angolano", descricao: "Divulga uma proposta de estufas inteligentes fabricadas em Angola e um piloto em Benguela; confirmar estado, referências e condições comerciais antes de contratar.", url: "https://v0-upida-institutional-website.vercel.app/", local: true }],
    fontes: [{ nome: "Horta Verde Angola — produção protegida e hidroponia", url: "https://hortaverde-ao.com/" }, { nome: "PDAC — contratação de estufas, irrigação e viveiros", url: "https://pdac.ao/solicitacao-de-propostas-pequenas-obras/" }]
  },
  {
    id: "ia", titulo: "Inteligência artificial e assistência agronómica digital", categoria: "Dados e inteligência artificial",
    subtitulo: "Transformar informação local em recomendações úteis.",
    resumo: "Ferramentas digitais para consultar práticas, organizar registos e apoiar a triagem de problemas no campo.",
    imagem: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Profissional a utilizar tecnologia digital para apoiar decisões técnicas",
    impacto: "Elevado quando há conteúdo fiável", investimento: "Baixo a médio para começar", maturidade: "Disponível; qualidade depende dos dados e da validação",
    porque: "Um assistente digital pode ajudar o produtor a encontrar orientações, registar ocorrências, organizar despesas e formular perguntas para um técnico. A inteligência artificial pode resumir informação e apoiar a identificação preliminar de sintomas, mas pode errar. Para Angola, a prioridade é incorporar recomendações validadas para culturas, pragas, épocas, solos e condições locais, com linguagem acessível e funcionamento adequado a ligações de internet limitadas.",
    funcionamento: ["O utilizador descreve a cultura, província, fase de crescimento e sinais observados.", "A ferramenta consulta uma base de conhecimento identificada e apresenta orientações com fonte e data.", "Casos de maior risco são encaminhados para técnico, laboratório ou serviço de extensão.", "As perguntas recorrentes ajudam a identificar lacunas de formação, sem expor dados pessoais desnecessários."],
    beneficios: ["Acesso rápido a informação organizada em português e, quando disponível, línguas locais.", "Registo de operações, custos, sintomas e histórico da parcela.", "Apoio à extensão rural e à formação contínua.", "Melhor organização dos dados que podem orientar investigação e políticas agrícolas."],
    aplicacoes: ["Triagem inicial de pragas e doenças, sem substituir diagnóstico técnico.", "Calendários de produção, registos de campo, gestão de stock e custos.", "Perguntas frequentes sobre sementes, conservação, alimentação animal e boas práticas."],
    implementacao: ["Começar com uma cultura e um conjunto pequeno de recomendações verificadas.", "Identificar autores, instituição responsável, data e referências de cada conteúdo.", "Testar as respostas com agrónomos e produtores de diferentes províncias.", "Criar um canal de correcção e encaminhamento para casos que a ferramenta não consegue resolver."],
    cuidados: ["Não tomar decisões sobre pesticidas, doses ou tratamentos veterinários apenas com uma resposta automática.", "Proteger dados dos produtores e pedir consentimento para recolher localização ou fotografias.", "A ferramenta deve declarar incerteza e mostrar fontes, não inventar referências."],
    empresas: [{ nome: "AgroKuia", tipo: "Plataforma digital angolana", descricao: "Apresenta-se como solução AgriTech angolana com assistência e informação para o sector. Avaliar funcionalidades, cobertura de culturas e condições de uso.", url: "https://www.agrokuia.com/", local: true }, { nome: "AGROINOVA ANGOLA", tipo: "Plataforma de conhecimento", descricao: "Pode integrar conteúdos técnicos, dados verificados e encaminhamento para especialistas como serviço de conhecimento agropecuário; funcionalidades futuras devem ser distinguidas das já disponíveis.", url: "/", local: true }],
    fontes: [{ nome: "AgroKuia — plataforma digital agropecuária", url: "https://www.agrokuia.com/" }, { nome: "MINAGRIF — modernização e tecnologia agrícola", url: "https://minagrif.gov.ao/" }]
  },
  {
    id: "solos", titulo: "Mapeamento digital de solos e GPS", categoria: "Agricultura de precisão",
    subtitulo: "Conhecer a variabilidade do terreno antes de investir.",
    resumo: "GPS, amostragem georreferenciada e mapas para orientar análise de solo, fertilização e planeamento.",
    imagem: "https://img.youtube.com/vi/_2q-PHofSyk/hqdefault.jpg",
    imagemAlt: "Trator agrícola a preparar o solo com alfaias no campo",
    impacto: "Elevado para planeamento e uso eficiente de insumos", investimento: "Baixo a médio; depende da densidade de amostragem", maturidade: "Consolidada",
    porque: "Uma mesma parcela pode conter zonas com textura, profundidade, acidez, drenagem e fertilidade diferentes. Um mapa digital bem feito liga cada amostra de solo a uma localização, permitindo interpretar a variabilidade e evitar recomendações uniformes onde elas não se justificam. O mapa não substitui a análise laboratorial nem uma carta de solos validada; organiza melhor a recolha e a interpretação dos dados.",
    funcionamento: ["Delimita-se a parcela com GPS e define-se um plano de amostragem.", "Recolhem-se amostras representativas com profundidade e identificação consistentes.", "O laboratório determina os parâmetros adequados ao objectivo de produção.", "Os resultados são associados às coordenadas e apresentados em mapa para apoiar a recomendação agronómica."],
    beneficios: ["Melhorar a qualidade e rastreabilidade das amostras.", "Localizar zonas com limitações e priorizar correcções.", "Evitar aplicar uma recomendação única a áreas com diferenças relevantes.", "Construir histórico de fertilidade e acompanhar mudanças ao longo das campanhas."],
    aplicacoes: ["Preparação de novas explorações e expansão de áreas agrícolas.", "Calagem, fertilização, conservação do solo e controlo da erosão.", "Planeamento de drenagem, localização de viveiros e escolha de culturas."],
    implementacao: ["Definir o objectivo: fertilidade, salinidade, drenagem, erosão ou aptidão agrícola.", "Escolher laboratório e protocolo de amostragem com orientação técnica.", "Registar coordenadas, profundidade, data, uso anterior e método de recolha.", "Interpretar resultados com agrónomo e guardar o mapa e relatório para comparação futura."],
    cuidados: ["A cor do solo numa fotografia não permite concluir, sozinha, fertilidade ou aptidão.", "Amostras mal identificadas ou misturadas podem invalidar o mapa.", "Não extrapolar resultados de uma província para outra sem evidência pedológica."],
    empresas: [{ nome: "Laboratórios e serviços de análise de solos em Angola", tipo: "Contratação técnica a verificar", descricao: "Solicitar ao IIA, universidades ou laboratórios identificados a confirmação de análises disponíveis, método, prazo e acreditação. A lista de prestadores deve ser validada antes de publicação como directório comercial.", url: "https://minagrif.gov.ao/", local: true }, { nome: "QGIS", tipo: "Software geográfico gratuito", descricao: "Ferramenta de código aberto para organizar coordenadas, produzir mapas e cruzar dados de solos, relevo e parcelas.", url: "https://qgis.org/", local: false }],
    fontes: [{ nome: "MINAGRIF — instituições e serviços técnicos", url: "https://minagrif.gov.ao/" }, { nome: "QGIS — sistema de informação geográfica", url: "https://qgis.org/" }]
  },
  {
    id: "energia", titulo: "Bombagem solar e energia para explorações", categoria: "Energia e infra-estruturas",
    subtitulo: "Levar energia ao campo com um sistema dimensionado para a operação.",
    resumo: "Bombas solares, armazenamento e energia de apoio para rega, abeberamento e pequenas unidades de transformação.",
    imagem: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Painéis solares que podem alimentar sistemas de bombagem agrícola",
    impacto: "Elevado em locais sem rede fiável", investimento: "Médio a elevado", maturidade: "Consolidada; dimensionamento é decisivo",
    porque: "O custo de bombagem e as falhas de energia podem limitar a irrigação, o abeberamento animal, a conservação e o processamento. A energia solar pode reduzir dependência de combustível em locais adequados, mas o sistema precisa de ser dimensionado para a altura de elevação, caudal, horas de funcionamento e variação sazonal da água. A bateria nem sempre é necessária para bombagem diurna; a decisão depende do perfil de uso.",
    funcionamento: ["Mede-se a necessidade diária de água e a altura total de bombagem.", "Avaliam-se fonte hídrica, época seca, qualidade da água e localização dos painéis.", "Dimensionam-se bomba, painéis, controlador, cabos e eventual armazenamento.", "Instalam-se protecções, medição e um plano de manutenção preventiva."],
    beneficios: ["Reduzir consumo de combustível em sistemas correctamente dimensionados.", "Aumentar a autonomia energética em locais remotos.", "Apoiar rega, abeberamento e pequenas operações de pós-colheita.", "Planear custos de operação com maior previsibilidade."],
    aplicacoes: ["Bombagem para reservatórios e sistemas de rega.", "Água para animais em explorações afastadas da rede.", "Frio, iluminação e equipamentos de baixa potência quando o sistema foi dimensionado para isso."],
    implementacao: ["Fazer levantamento hidráulico e energético antes de pedir orçamento.", "Comparar propostas pelo custo total, garantias, disponibilidade de peças e assistência.", "Proteger o sistema contra funcionamento a seco, sobretensão e acesso indevido.", "Registar caudal, horas de operação e manutenção para medir o desempenho."],
    cuidados: ["Painéis não resolvem uma fonte de água insuficiente ou sazonal.", "Bombas subdimensionadas podem não satisfazer a procura no período crítico.", "Confirmar garantias, protecção contra roubo, manutenção e disponibilidade de componentes."],
    empresas: [{ nome: "Empresas de energia solar com operação em Angola", tipo: "Categoria de fornecedores", descricao: "Pedir referências de instalações agrícolas em funcionamento, cálculo hidráulico assinado, garantias e assistência na província. A AGROINOVA não declara parceria comercial com fornecedores nesta lista.", url: "https://minagrif.gov.ao/", local: true }, { nome: "FAO — energia e agricultura", tipo: "Referência técnica", descricao: "Material técnico para enquadrar energia, água e sistemas agroalimentares sustentáveis.", url: "https://www.fao.org/energy/", local: false }],
    fontes: [{ nome: "FAO — energia e sistemas agroalimentares", url: "https://www.fao.org/energy/" }, { nome: "MINAGRIF — projectos agrícolas em Angola", url: "https://minagrif.gov.ao/" }]
  },
  {
    id: "pecuaria", titulo: "Pecuária de precisão e identificação animal", categoria: "Pecuária inteligente",
    subtitulo: "Registar cada animal para gerir melhor saúde, reprodução e alimentação.",
    resumo: "Identificação individual, registos digitais, balanças e sensores adequados ao sistema de criação.",
    imagem: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Aves numa exploração pecuária, exemplo de produção animal que exige gestão alimentar",
    impacto: "Elevado em explorações com efectivos médios e grandes", investimento: "Baixo a elevado, conforme sensores e escala", maturidade: "Tecnologias disponíveis",
    porque: "Sem registos consistentes, é difícil saber quais animais ganharam peso, foram tratados, estão gestantes ou têm histórico de doença. Brincos identificadores, leitores, balanças e aplicações de registo ajudam a acompanhar cada animal. Sensores de actividade ou ruminação podem acrescentar alertas, mas precisam de validação e não substituem observação clínica por médico veterinário.",
    funcionamento: ["Atribui-se um identificador único e cria-se a ficha individual do animal.", "Registam-se pesagens, vacinação, tratamentos, reprodução, origem e movimentações.", "Os dados são analisados para detectar atrasos de crescimento, falhas reprodutivas ou custos elevados.", "O responsável confirma alertas e decide com o técnico veterinário ou zootécnico."],
    beneficios: ["Melhorar rastreabilidade e controlo sanitário.", "Acompanhar ganho de peso, reprodução e desempenho por lote.", "Reduzir perdas de informação e duplicação de tratamentos.", "Apoiar decisões sobre alimentação, descarte e selecção de animais."],
    aplicacoes: ["Bovinos de carne e leite, caprinos, ovinos e suínos.", "Explorações com reprodução planeada ou venda por peso.", "Programas de sanidade, melhoramento genético e movimentação animal."],
    implementacao: ["Começar com identificação e registos essenciais, mesmo sem sensores caros.", "Definir quem regista cada evento e como os dados são verificados.", "Escolher equipamento que funcione nas condições de poeira, calor e conectividade locais.", "Rever indicadores mensalmente com técnico responsável."],
    cuidados: ["Sensores e aplicações precisam de calibração, bateria e manutenção.", "Dados incompletos podem induzir decisões erradas.", "Diagnósticos, vacinação e tratamentos devem ser orientados por profissionais habilitados."],
    empresas: [{ nome: "Fornecedores de identificação e balanças pecuárias", tipo: "Compra técnica a especificar", descricao: "Solicitar modelos de brincos, leitores, balanças e software compatíveis entre si, com assistência e consumíveis disponíveis em Angola.", url: "https://minagrif.gov.ao/", local: true }, { nome: "FAO — saúde e produção animal", tipo: "Referência técnica", descricao: "Recursos para enquadrar biossegurança, produção sustentável e gestão pecuária.", url: "https://www.fao.org/animal-health/", local: false }],
    fontes: [{ nome: "FAO — saúde animal", url: "https://www.fao.org/animal-health/" }, { nome: "Portal da Ganda — contexto pecuário angolano", url: "https://siteganda.azurewebsites.net/" }]
  },
  {
    id: "alimentacao", titulo: "Formulação de rações e gestão alimentar", categoria: "Pecuária inteligente",
    subtitulo: "Alimentar de acordo com a espécie, a fase e os ingredientes disponíveis.",
    resumo: "Formulação técnica, pesagem de ingredientes e registo do consumo para reduzir desperdícios.",
    imagem: "https://siteganda.azurewebsites.net/images/Ganda/IMG_9753.jpg",
    imagemAlt: "Bovinos numa exploração pecuária da Ganda, província de Benguela, Angola",
    impacto: "Muito elevado, pois a alimentação é um custo central", investimento: "Baixo para gestão; médio para equipamentos", maturidade: "Consolidada",
    porque: "Uma ração adequada depende da espécie, idade, peso, finalidade, disponibilidade de ingredientes e qualidade das matérias-primas. Formulação por tentativa pode causar baixo desempenho, desperdício e problemas de saúde. Ferramentas de cálculo e balanças melhoram a consistência, mas as fórmulas devem ser verificadas por nutricionista animal ou técnico habilitado e ajustadas aos ingredientes realmente disponíveis.",
    funcionamento: ["Identificam-se espécie, categoria, objectivo produtivo e consumo actual.", "Analisam-se ingredientes, composição, humidade, armazenamento e risco de contaminação.", "Calcula-se a fórmula e pesa-se cada ingrediente com equipamento adequado.", "Acompanha-se consumo, crescimento, produção, saúde e custo por unidade produzida."],
    beneficios: ["Reduzir variações entre lotes de ração.", "Usar ingredientes locais quando forem nutricionalmente adequados e seguros.", "Medir custo por quilograma de ganho de peso, litro de leite ou ovo produzido.", "Melhorar armazenamento e controlo de perdas."],
    aplicacoes: ["Aves, suínos, bovinos, caprinos, ovinos e aquacultura.", "Unidades de mistura, cooperativas e explorações familiares em crescimento.", "Gestão de silagem, forragens, concentrados e subprodutos agroindustriais."],
    implementacao: ["Fazer inventário dos ingredientes e verificar a sua qualidade.", "Solicitar formulação a técnico de nutrição animal com dados de preços locais.", "Usar balanças calibradas e registar os lotes produzidos.", "Comparar consumo e desempenho antes de alterar a fórmula."],
    cuidados: ["Não copiar fórmulas da internet sem verificar espécie, fase e composição dos ingredientes.", "Micotoxinas, humidade e armazenamento inadequado podem comprometer a segurança.", "Mudanças bruscas de dieta podem afectar a saúde dos animais."],
    empresas: [{ nome: "Unidades de fabrico e assistência pecuária em Angola", tipo: "Fornecedores a validar", descricao: "Comparar composição garantida, análises laboratoriais, rastreabilidade, assistência técnica e entrega na província. A AGROINOVA não certifica marcas ou fábricas por esta referência.", url: "https://minagrif.gov.ao/", local: true }, { nome: "FAO — alimentação e produção animal", tipo: "Referência técnica", descricao: "Consultar recomendações técnicas e materiais de produção pecuária sustentável.", url: "https://www.fao.org/animal-production/", local: false }],
    fontes: [{ nome: "FAO — produção animal", url: "https://www.fao.org/animal-production/" }, { nome: "MINAGRIF — sector agropecuário", url: "https://minagrif.gov.ao/" }]
  },
  {
    id: "poscolheita", titulo: "Frio, armazenamento e rastreabilidade", categoria: "Pós-colheita e mercado",
    subtitulo: "Proteger o valor da produção entre a colheita e o consumidor.",
    resumo: "Câmaras frigoríficas, secagem, embalamento e registo de lotes para reduzir perdas pós-colheita.",
    imagem: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Armazenamento e logística de produtos para a cadeia pós-colheita",
    impacto: "Elevado para produtos perecíveis", investimento: "Variável: de armazenamento ventilado a frio controlado", maturidade: "Consolidada",
    porque: "Colher não é o fim da produção. Calor, humidade, danos mecânicos, atrasos no transporte e falta de embalagem podem reduzir qualidade e preço. A solução depende do produto: secagem adequada para grãos, ventilação para alguns produtos, frio para hortícolas e frutas, e cadeia de frio rigorosa para produtos de origem animal. Rastrear lotes ajuda a saber origem, data, condições de armazenamento e destino.",
    funcionamento: ["Classifica-se o produto por sensibilidade, volume, tempo de armazenamento e destino.", "Define-se o método: secagem, ventilação, embalagem, pré-arrefecimento ou refrigeração.", "Registam-se temperatura, humidade, entrada, saída e identificação dos lotes.", "A operação mede perdas, rejeições, tempo de conservação e custo logístico."],
    beneficios: ["Reduzir perdas e deterioração quando a solução é adequada ao produto.", "Melhorar regularidade e qualidade entregue ao mercado.", "Aumentar a capacidade de negociar vendas e planear transporte.", "Facilitar rastreabilidade e resposta a reclamações."],
    aplicacoes: ["Tomate, hortícolas, frutas, leite, carne, peixe e produtos transformados.", "Cooperativas, centros de recolha, mercados grossistas e agro-indústrias.", "Pequenos produtores que agrupam volume para vender a compradores formais."],
    implementacao: ["Medir perdas actuais por produto e identificar onde ocorrem.", "Calcular volume diário, autonomia energética, isolamento e custos de manutenção.", "Formar operadores em higiene, temperatura e rotação de stock.", "Negociar transporte e compradores antes de investir numa câmara de grande dimensão."],
    cuidados: ["Frio mal controlado pode danificar certos produtos e não corrige colheita ou higiene deficientes.", "Câmaras dependem de energia, manutenção e técnicos.", "Separar produtos incompatíveis e cumprir regras de segurança alimentar."],
    empresas: [{ nome: "Prestadores de frio comercial e agro-industrial em Angola", tipo: "Categoria de fornecedores", descricao: "Solicitar dimensionamento térmico, consumo energético, assistência, peças e referências em operações semelhantes; validar a empresa e a instalação antes de contratar.", url: "https://minagrif.gov.ao/", local: true }, { nome: "FAO — perdas e desperdício alimentar", tipo: "Referência técnica", descricao: "Materiais para planeamento de sistemas pós-colheita e redução de perdas.", url: "https://www.fao.org/platform-food-loss-waste/", local: false }],
    fontes: [{ nome: "FAO — perdas e desperdício alimentar", url: "https://www.fao.org/platform-food-loss-waste/" }, { nome: "MINAGRIF — desenvolvimento agro-industrial", url: "https://minagrif.gov.ao/" }]
  },
  {
    id: "viveiros", titulo: "Sementes de qualidade, viveiros e biotecnologia vegetal", categoria: "Material de plantação",
    subtitulo: "Começar a campanha com material vegetal saudável e adaptado.",
    resumo: "Viveiros organizados, sementes certificadas quando disponíveis e multiplicação controlada de plantas.",
    imagem: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=85",
    imagemAlt: "Plantas jovens em ambiente de viveiro para produção de mudas",
    impacto: "Muito elevado no estabelecimento da cultura", investimento: "Baixo a elevado, conforme escala e laboratório", maturidade: "Viveiros consolidados; biotecnologia requer capacidade especializada",
    porque: "A qualidade da semente ou muda influencia germinação, uniformidade, sanidade e produtividade. Viveiros com identificação de variedades, higiene, água adequada e registos ajudam a reduzir a distribuição de plantas fracas ou contaminadas. A cultura de tecidos pode multiplicar determinadas espécies em condições laboratoriais, mas requer instalações, protocolo validado e aclimatação antes de levar as plantas ao campo.",
    funcionamento: ["Escolhe-se variedade ou material de plantação adequado à região, época e mercado.", "Verificam-se origem, pureza, germinação, sanidade e documentação disponível.", "O viveiro regista lotes, tratamentos, datas de sementeira e destino das mudas.", "As plantas são aclimatadas e avaliadas antes da distribuição aos produtores."],
    beneficios: ["Melhorar uniformidade de emergência e estabelecimento da cultura.", "Reduzir riscos associados a mudas sem origem conhecida.", "Organizar oferta de plantas para campanhas e projectos de reflorestação.", "Apoiar conservação e multiplicação de materiais vegetais seleccionados."],
    aplicacoes: ["Milho, feijão, hortícolas, fruteiras, café, mandioca e espécies florestais.", "Cooperativas, escolas agrárias, viveiros comerciais e programas públicos.", "Multiplicação de plantas em laboratório quando há protocolo e procura justificados."],
    implementacao: ["Confirmar variedades recomendadas e fornecedores com instituições técnicas.", "Definir calendário de produção de mudas e procura real.", "Criar registos de lotes e procedimentos de higiene.", "Avaliar taxa de germinação, sobrevivência após transplantação e desempenho no campo."],
    cuidados: ["Não confundir semente comercial com semente certificada sem documentação.", "Material vegetal de origem desconhecida pode disseminar pragas e doenças.", "A cultura de tecidos não garante por si só melhor produtividade em qualquer ambiente."],
    empresas: [{ nome: "Instituto de Investigação Agronómica (IIA)", tipo: "Instituição técnica angolana", descricao: "Ponto de partida para consultar investigação, materiais vegetais e recomendações disponíveis. Confirmar serviços, variedades e disponibilidade directamente com a instituição.", url: "https://minagrif.gov.ao/", local: true }, { nome: "FAO — sementes e recursos fitogenéticos", tipo: "Referência técnica", descricao: "Informação de enquadramento sobre sistemas de sementes e recursos fitogenéticos.", url: "https://www.fao.org/seeds/", local: false }],
    fontes: [{ nome: "MINAGRIF — investigação e instituições agrárias", url: "https://minagrif.gov.ao/" }, { nome: "FAO — sementes", url: "https://www.fao.org/seeds/", }]
  },
  {
    id: "tratores", titulo: "Tractores, charruas e preparação mecanizada do solo", categoria: "Máquinas agrícolas",
    subtitulo: "Preparar, mobilizar e semear com máquinas ajustadas à exploração.",
    resumo: "Tractores com alfaias, charruas, grades, subsoladores e semeadoras para mecanizar operações de campo.",
    imagem: "https://img.youtube.com/vi/_2q-PHofSyk/hqdefault.jpg",
    imagemAlt: "Demonstração de tractores agrícolas a lavrar, semear e trabalhar o solo",
    impacto: "Elevado em áreas adequadas à mecanização", investimento: "Elevado; considerar aluguer ou prestação de serviços", maturidade: "Tecnologia consolidada com opções de agricultura de precisão",
    porque: "A mecanização permite preparar o solo, abrir sulcos, incorporar resíduos, semear e executar operações em áreas maiores dentro de janelas de tempo curtas. A escolha não deve começar apenas pela potência do tractor: é necessário relacionar a potência e o peso com o tipo de solo, a área, a inclinação, a alfaias, a disponibilidade de combustível, o operador e a manutenção. Em alguns sistemas, mobilização reduzida ou sementeira directa podem conservar melhor a estrutura do solo do que lavouras repetidas.",
    funcionamento: ["Caracteriza-se o terreno, a textura, a humidade, o declive e o sistema de produção.", "Calcula-se a potência e a capacidade de tracção necessárias para cada alfaia.", "Escolhem-se charrua, grade, subsolador, semeadora ou plantadora de acordo com a operação e a cultura.", "Regulam-se profundidade, velocidade, espaçamento e calibração; regista-se consumo e área trabalhada.", "Executa-se manutenção preventiva e avalia-se o resultado agronómico, não apenas a velocidade de trabalho."],
    beneficios: ["Aumentar a capacidade de trabalho durante períodos críticos da campanha.", "Melhorar a regularidade de operações como preparação do solo e sementeira, quando o equipamento está bem regulado.", "Reduzir esforço físico e dependência de operações exclusivamente manuais.", "Acoplar sistemas de orientação por GPS, controlo de secções e taxa variável em explorações que justifiquem o investimento."],
    aplicacoes: ["Milho, soja, trigo, arroz e outras culturas extensivas em áreas mecanizáveis.", "Preparação de terrenos, sementeira, plantação, transporte interno e manutenção de caminhos agrícolas.", "Prestadores de serviços que trabalham para vários produtores e cooperativas."],
    implementacao: ["Fazer inventário da área, operações anuais e calendário agrícola.", "Comparar compra, aluguer, cooperativa de máquinas e contratação de serviços por hectare.", "Verificar disponibilidade local de peças, oficina, pneus, filtros e formação de operadores.", "Testar a combinação tractor-alfaia numa área-piloto e registar custo por hectare, consumo e qualidade da operação."],
    cuidados: ["Tractores sobredimensionados aumentam custos de combustível e compactação do solo.", "Trabalhar solo demasiado húmido pode provocar compactação e degradar a estrutura.", "A operação exige formação, protecções, manutenção e cumprimento das regras de segurança.", "A lavoura intensiva nem sempre é a melhor opção; avaliar conservação do solo, cobertura vegetal e rotação de culturas."],
    empresas: [{ nome: "John Deere", tipo: "Fabricante internacional", descricao: "Tractores, alfaias e tecnologias de agricultura de precisão. Confirmar revendedor, garantia, peças e assistência efectivamente disponíveis em Angola.", url: "https://www.deere.com/", local: false }, { nome: "AGCO", tipo: "Fabricante internacional", descricao: "Equipamentos agrícolas e soluções de mecanização através de marcas do grupo. Solicitar proposta técnica adequada à dimensão da exploração.", url: "https://www.agcocorp.com/", local: false }],
    fontes: [{ nome: "Vídeo demonstrativo — tractores, lavoura e sementeira", url: "https://www.youtube.com/watch?v=_2q-PHofSyk" }, { nome: "FAO — mecanização agrícola sustentável", url: "https://www.fao.org/sustainable-agricultural-mechanization/en/" }]
  }
];

const categorias = ["Todas", ...Array.from(new Set(tecnologias.map((t) => t.categoria)))];

export default function InvestigacaoPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [modal, setModal] = useState<Tecnologia | null>(null);
  const [slide, setSlide] = useState(0);
  const [favoritas, setFavoritas] = useState<string[]>([]);

  const filtradas = useMemo(() => tecnologias.filter((t) => {
    const texto = `${t.titulo} ${t.categoria} ${t.resumo} ${t.subtitulo}`.toLocaleLowerCase("pt");
    return (categoria === "Todas" || t.categoria === categoria) && texto.includes(pesquisa.toLocaleLowerCase("pt").trim());
  }), [pesquisa, categoria]);

  const destaques = [tecnologias[0], tecnologias[10], tecnologias[1], tecnologias[2], tecnologias[3]];
  const destaque = destaques[slide];

  function mudarSlide(direcao: number) {
    setSlide((actual) => (actual + direcao + destaques.length) % destaques.length);
  }

  function alternarFavorita(id: string) {
    setFavoritas((actual) => actual.includes(id) ? actual.filter((item) => item !== id) : [...actual, id]);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f8f5] text-[#173326]">
      <style jsx global>{`
        @keyframes agroFadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes agroSoftZoom { from { transform: scale(1.04); opacity: .72; } to { transform: scale(1); opacity: 1; } }
        @keyframes agroModalIn { from { opacity: 0; transform: translateY(16px) scale(.985); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .agro-reveal { animation: agroFadeUp .65s ease both; }
        .agro-hero-image { animation: agroSoftZoom .75s ease both; }
        .agro-modal { animation: agroModalIn .24s ease-out both; }
        .agro-card { transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease; }
        .agro-card:hover { transform: translateY(-6px); box-shadow: 0 22px 48px rgba(20,83,45,.13); border-color: #86c99c; }
        @media (prefers-reduced-motion: reduce) { .agro-reveal, .agro-hero-image, .agro-modal { animation: none !important; } .agro-card { transition: none !important; } }
      `}</style>

      <section className="relative isolate min-h-[590px] overflow-hidden bg-green-950 text-white lg:min-h-[650px]">
        <div key={destaque.id} className="agro-hero-image absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: `url("${destaque.imagem}")` }} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#052e1b] via-[#052e1b]/90 to-[#052e1b]/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#052e1b]/80 via-transparent to-black/10" />
        <div className="mx-auto flex min-h-[590px] max-w-[1440px] items-center px-5 py-16 lg:min-h-[650px] lg:px-10">
          <div className="agro-reveal max-w-4xl">
            <span className="inline-flex rounded-full border border-emerald-300/40 bg-emerald-900/55 px-4 py-2 text-xs font-bold uppercase tracking-[.19em] text-emerald-100">AGROINOVA · Tecnologias para Angola</span>
            <p className="mt-7 text-sm font-bold uppercase tracking-[.2em] text-emerald-300">Conhecimento que chega ao campo</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black leading-[1.06] tracking-tight sm:text-5xl lg:text-7xl">Tecnologia prática para transformar a produção agropecuária.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50/90 sm:text-lg">Descubra como funcionam as tecnologias modernas, que problemas ajudam a resolver, quando fazem sentido para uma exploração angolana e que fornecedores ou instituições pode consultar antes de investir.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#catalogo" className="rounded-xl bg-emerald-400 px-6 py-4 font-extrabold text-green-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-300">Explorar tecnologias <span aria-hidden="true">↓</span></a>
              <button onClick={() => setModal(tecnologias[0])} className="rounded-xl border border-white/35 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20">Ver exemplo: drones</button>
            </div>
            <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[{ n: String(tecnologias.length).padStart(2, "0"), t: "tecnologias explicadas" }, { n: String(categorias.length - 1).padStart(2, "0"), t: "áreas tecnológicas" }, { n: "01", t: "foco: realidade angolana" }, { n: "360°", t: "da escolha à implementação" }].map((item) => <div key={item.t} className="rounded-2xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm"><strong className="block text-2xl font-black text-emerald-300">{item.n}</strong><span className="mt-1 block text-xs leading-5 text-green-50/90">{item.t}</span></div>)}
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-5 flex items-center gap-2 sm:right-10">
          <span className="mr-2 text-xs font-semibold text-white/80">Destaque {slide + 1} / {destaques.length}</span>
          <button aria-label="Destaque anterior" onClick={() => mudarSlide(-1)} className="h-11 w-11 rounded-full border border-white/40 bg-black/25 text-xl transition hover:bg-white hover:text-green-950">‹</button>
          <button aria-label="Próximo destaque" onClick={() => mudarSlide(1)} className="h-11 w-11 rounded-full border border-white/40 bg-black/25 text-xl transition hover:bg-white hover:text-green-950">›</button>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="agro-reveal">
            <span className="text-xs font-black uppercase tracking-[.18em] text-green-700">A missão da plataforma</span>
            <h2 className="mt-3 text-3xl font-black leading-tight text-green-950 sm:text-4xl">Não basta mostrar uma tecnologia. É preciso explicar como ela resolve um problema.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[{ n: "01", t: "Compreender", d: "O que é, como funciona e que problema real pode resolver." }, { n: "02", t: "Avaliar", d: "Benefícios, limites, custos relativos e condições necessárias." }, { n: "03", t: "Implementar", d: "Passos para testar, medir resultados e escolher fornecedores." }].map((item, i) => <article key={item.n} style={{ animationDelay: `${i * 90}ms` }} className="agro-reveal rounded-2xl border border-green-100 bg-white p-5 shadow-sm"><span className="text-sm font-black text-emerald-600">{item.n}</span><h3 className="mt-3 text-lg font-extrabold text-green-950">{item.t}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.d}</p></article>)}
          </div>
        </div>
      </section>

      <section id="catalogo" className="scroll-mt-8 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl"><span className="text-xs font-black uppercase tracking-[.18em] text-green-700">Biblioteca de tecnologias</span><h2 className="mt-3 text-3xl font-black text-green-950 sm:text-4xl">Explore soluções para o campo</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">Abra cada ficha para ler a explicação completa, conhecer as aplicações, os cuidados, o plano de implementação e entidades que pode contactar para pedir informação.</p></div>
            <div className="grid gap-3 sm:grid-cols-[minmax(230px,1fr)_minmax(220px,.8fr)] lg:w-[530px]">
              <label className="block"><span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">Pesquisar</span><input value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="Ex.: drone, água, pecuária..." className="w-full rounded-xl border border-slate-200 bg-[#f8fbf9] px-4 py-3 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100" /></label>
              <label className="block"><span className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">Área tecnológica</span><select value={categoria} onChange={(e) => setCategoria(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-[#f8fbf9] px-4 py-3 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100">{categorias.map((c) => <option key={c} value={c}>{c}</option>)}</select></label>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4"><p className="text-sm text-slate-600"><strong className="text-green-950">{filtradas.length}</strong> soluções encontradas</p><p className="text-xs text-slate-500">Seleccione um cartão para abrir o guia técnico.</p></div>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtradas.map((t, i) => <article key={t.id} style={{ animationDelay: `${Math.min(i, 8) * 55}ms` }} className="agro-card agro-reveal group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <button onClick={() => setModal(t)} className="block w-full text-left" aria-label={`Abrir detalhes: ${t.titulo}`}>
                <div className="relative h-56 overflow-hidden bg-green-100"><img src={t.imagem} alt={t.imagemAlt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-green-950/75 via-transparent to-transparent" /><span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-green-950/65 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">{t.categoria}</span><span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-extrabold text-green-900">Ver tecnologia ↗</span></div>
                <div className="p-6"><h3 className="text-xl font-black leading-snug text-green-950">{t.titulo}</h3><p className="mt-2 text-sm font-semibold text-green-700">{t.subtitulo}</p><p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-600">{t.resumo}</p><div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><span className="text-xs font-bold text-slate-500">Impacto: <span className="text-green-800">{t.impacto}</span></span><span className="text-xl font-bold text-green-700 transition group-hover:translate-x-1">→</span></div></div>
              </button>
              <div className="flex items-center justify-between border-t border-slate-100 bg-[#fbfdfb] px-6 py-3"><button onClick={() => alternarFavorita(t.id)} className="text-xs font-bold text-slate-600 transition hover:text-green-800">{favoritas.includes(t.id) ? "Guardada para consultar ✓" : "Guardar para consultar +"}</button><button onClick={() => setModal(t)} className="text-xs font-extrabold text-green-800 hover:underline">Guia completo</button></div>
            </article>)}
          </div>
          {filtradas.length === 0 && <div className="mt-8 rounded-2xl border border-dashed border-green-200 bg-green-50 p-10 text-center"><h3 className="text-xl font-black text-green-950">Nenhuma tecnologia encontrada</h3><p className="mt-2 text-slate-600">Experimente outro termo ou limpe os filtros.</p><button onClick={() => { setPesquisa(""); setCategoria("Todas"); }} className="mt-5 rounded-xl bg-green-800 px-5 py-3 font-bold text-white transition hover:bg-green-700">Limpar filtros</button></div>}
        </div>
      </section>

      <section id="videos-tecnologia" className="bg-[#092f1d] py-14 text-white lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl"><span className="text-xs font-black uppercase tracking-[.18em] text-emerald-300">Tecnologia em funcionamento</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Veja as máquinas a trabalhar no campo</h2><p className="mt-4 leading-7 text-green-50/80">Vídeos demonstrativos sobre drones de pulverização, tractores e sistemas de rega por pivô. Os vídeos são publicados pelos respectivos canais no YouTube; a AGROINOVA não é proprietária destes conteúdos.</p></div>
            <a href="https://www.youtube.com/results?search_query=maquinaria+agricola+tecnologia+agropecuaria" target="_blank" rel="noreferrer" className="inline-flex w-fit rounded-xl border border-white/25 px-5 py-3 text-sm font-bold transition hover:bg-white/10">Explorar mais vídeos ↗</a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              { titulo: "Drone agrícola de pulverização", descricao: "Veja uma demonstração do DJI Agras T70P e das operações de pulverização e distribuição", id: "pH0Gy47NkpI", url: "https://www.youtube.com/watch?v=pH0Gy47NkpI", tipo: "Agricultura de precisão" },
              { titulo: "Tractores: lavoura, sementeira e colheita", descricao: "Demonstração de tractores e diferentes operações mecanizadas no campo", id: "_2q-PHofSyk", url: "https://www.youtube.com/watch?v=_2q-PHofSyk", tipo: "Mecanização agrícola" },
              { titulo: "Pivô central de irrigação", descricao: "Como um sistema de pivô se desloca e distribui água sobre uma área cultivada", id: "kFDrIdT5ZiM", url: "https://www.youtube.com/watch?v=kFDrIdT5ZiM", tipo: "Gestão da água" }
            ].map((video) => <article key={video.id} className="agro-card overflow-hidden rounded-3xl border border-white/15 bg-white/[.06] shadow-xl">
              <div className="aspect-video overflow-hidden bg-black"><iframe src={`https://www.youtube-nocookie.com/embed/${video.id}`} title={video.titulo} className="h-full w-full" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
              <div className="p-5"><span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-emerald-200">{video.tipo}</span><h3 className="mt-3 text-xl font-black text-white">{video.titulo}</h3><p className="mt-2 min-h-[48px] text-sm leading-6 text-green-50/75">{video.descricao}</p><a href={video.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-extrabold text-green-950 transition hover:bg-emerald-300">Abrir no YouTube ↗</a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-3xl bg-green-950 p-7 text-white shadow-xl sm:p-10"><span className="text-xs font-black uppercase tracking-[.18em] text-emerald-300">Como escolher bem</span><h2 className="mt-4 text-3xl font-black leading-tight">A melhor tecnologia é a que resolve um problema mensurável.</h2><p className="mt-4 leading-7 text-green-50/85">Antes de comprar equipamentos, compare o custo total de operação, a disponibilidade de assistência técnica, as peças, a formação necessária e o resultado que pretende alcançar. Uma solução simples bem utilizada pode ser mais útil do que um equipamento avançado sem manutenção.</p><a href="https://minagrif.gov.ao/" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-xl bg-emerald-400 px-5 py-3 font-extrabold text-green-950 transition hover:bg-emerald-300">Consultar MINAGRIF ↗</a></div>
          <div className="space-y-4">{[{ t: "Comece com um problema", d: "Ex.: falta de água, perdas pós-colheita, dificuldade em localizar pragas ou custos elevados de alimentação." }, { t: "Faça um piloto", d: "Teste numa parcela, num lote de animais ou numa unidade pequena antes de investir em escala." }, { t: "Meça antes e depois", d: "Registe água, energia, horas de trabalho, perdas, produção e custos por unidade." }, { t: "Confirme quem presta assistência", d: "Peça referências verificáveis, garantias por escrito, formação e disponibilidade de peças em Angola." }].map((item, i) => <div key={item.t} className="flex gap-4 rounded-2xl border border-green-100 bg-white p-5 shadow-sm"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 font-black text-green-900">0{i + 1}</span><div><h3 className="font-extrabold text-green-950">{item.t}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{item.d}</p></div></div>)}</div>
        </div>
      </section>

      <section className="border-y border-green-100 bg-[#eaf5ed] py-14 lg:py-16"><div className="mx-auto grid max-w-[1440px] gap-6 px-5 md:grid-cols-3 lg:px-10">{[{ t: "Conteúdo técnico, não publicidade", d: "As recomendações explicam usos, limites e condições de implementação. A inclusão de uma entidade não significa parceria ou certificação pela AGROINOVA." }, { t: "Fontes e validação", d: "Consulte os links originais e confirme a informação técnica, a disponibilidade do serviço e as regras aplicáveis antes de tomar decisões." }, { t: "Realidade angolana", d: "A tecnologia deve considerar clima, solos, energia, água, logística, conectividade, dimensão da exploração e capacidade de assistência local." }].map((item) => <article key={item.t} className="rounded-2xl border border-green-200/80 bg-white/80 p-6"><h3 className="text-lg font-black text-green-950">{item.t}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.d}</p></article>)}</div></section>

      {modal && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) setModal(null); }}>
        <section role="dialog" aria-modal="true" aria-labelledby="modal-titulo" className="agro-modal flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="relative shrink-0 bg-green-950 text-white"><div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url("${modal.imagem}")` }} /><div className="relative flex items-start justify-between gap-4 px-5 py-6 sm:px-8"><div><span className="text-xs font-black uppercase tracking-[.18em] text-emerald-300">Guia tecnológico AGROINOVA</span><h2 id="modal-titulo" className="mt-2 max-w-3xl text-2xl font-black leading-tight sm:text-3xl">{modal.titulo}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-green-50/90">{modal.subtitulo}</p></div><button onClick={() => setModal(null)} aria-label="Fechar modal" className="shrink-0 rounded-xl border border-white/30 px-4 py-2 text-sm font-bold transition hover:bg-white/15">Fechar ✕</button></div></div>
          <div className="overflow-y-auto">
            <div className="grid gap-0 lg:grid-cols-[.82fr_1.18fr]"><div className="bg-[#f3f8f5] p-5 sm:p-7"><img src={modal.imagem} alt={modal.imagemAlt} className="h-56 w-full rounded-2xl object-cover shadow-md sm:h-64" /><p className="mt-4 text-xs leading-5 text-slate-500">Imagem demonstrativa da tecnologia. A fotografia não representa necessariamente uma exploração angolana; confirme a origem e a legenda antes de a reutilizar fora desta página.</p><div className="mt-5 space-y-3"><div className="rounded-xl border border-green-100 bg-white p-4"><span className="text-xs font-bold uppercase tracking-wide text-slate-500">Impacto esperado</span><p className="mt-1 font-extrabold text-green-950">{modal.impacto}</p></div><div className="rounded-xl border border-green-100 bg-white p-4"><span className="text-xs font-bold uppercase tracking-wide text-slate-500">Investimento relativo</span><p className="mt-1 font-extrabold text-green-950">{modal.investimento}</p></div><div className="rounded-xl border border-green-100 bg-white p-4"><span className="text-xs font-bold uppercase tracking-wide text-slate-500">Maturidade</span><p className="mt-1 font-extrabold text-green-950">{modal.maturidade}</p></div></div><button onClick={() => alternarFavorita(modal.id)} className="mt-4 w-full rounded-xl border border-green-700 px-4 py-3 text-sm font-extrabold text-green-800 transition hover:bg-green-50">{favoritas.includes(modal.id) ? "Remover dos guardados" : "Guardar esta tecnologia"}</button></div>
              <div className="p-5 sm:p-8"><section><h3 className="text-xl font-black text-green-950">Porque vale a pena considerar?</h3><p className="mt-3 text-sm leading-7 text-slate-700">{modal.porque}</p></section>
                <section className="mt-7"><h3 className="text-lg font-black text-green-950">Como funciona, passo a passo</h3><ol className="mt-3 space-y-3">{modal.funcionamento.map((item, i) => <li key={item} className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-green-100 text-xs font-black text-green-900">{i + 1}</span><p className="text-sm leading-6 text-slate-700">{item}</p></li>)}</ol></section>
                <section className="mt-7"><h3 className="text-lg font-black text-green-950">Benefícios possíveis</h3><ul className="mt-3 space-y-2">{modal.beneficios.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" /><span>{item}</span></li>)}</ul></section>
                <section className="mt-7"><h3 className="text-lg font-black text-green-950">Onde pode ser aplicada em Angola</h3><ul className="mt-3 space-y-2">{modal.aplicacoes.map((item) => <li key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">{item}</li>)}</ul></section>
                <section className="mt-7"><h3 className="text-lg font-black text-green-950">Plano recomendado de implementação</h3><ol className="mt-3 space-y-3">{modal.implementacao.map((item, i) => <li key={item} className="flex gap-3"><span className="font-black text-green-700">0{i + 1}</span><p className="text-sm leading-6 text-slate-700">{item}</p></li>)}</ol></section>
                <section className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5"><h3 className="font-black text-amber-950">Limites e cuidados</h3><ul className="mt-3 space-y-2">{modal.cuidados.map((item) => <li key={item} className="text-sm leading-6 text-amber-950/85">• {item}</li>)}</ul></section>
              </div></div>
            <div className="border-t border-slate-200 bg-white p-5 sm:p-8"><div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><span className="text-xs font-black uppercase tracking-[.16em] text-green-700">Directório para consulta</span><h3 className="mt-2 text-2xl font-black text-green-950">Empresas e entidades a contactar</h3></div><p className="max-w-xl text-xs leading-5 text-slate-500">Lista indicativa. Confirme serviços, disponibilidade em Angola, referências, preços e assistência. A AGROINOVA não declara parceria comercial.</p></div><div className="mt-5 grid gap-4 md:grid-cols-2">{modal.empresas.map((empresa) => <article key={empresa.nome} className="rounded-2xl border border-slate-200 p-5 transition hover:border-green-300 hover:shadow-md"><div className="flex items-start justify-between gap-3"><div><span className="text-xs font-bold uppercase tracking-wide text-green-700">{empresa.tipo}</span><h4 className="mt-2 text-lg font-black text-green-950">{empresa.nome}</h4></div><span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-black uppercase ${empresa.local ? "bg-green-100 text-green-800" : "bg-slate-100 text-slate-600"}`}>{empresa.local ? "Angola" : "Internacional"}</span></div><p className="mt-3 text-sm leading-6 text-slate-600">{empresa.descricao}</p><a href={empresa.url} target={empresa.url.startsWith("/") ? undefined : "_blank"} rel={empresa.url.startsWith("/") ? undefined : "noreferrer"} className="mt-4 inline-flex rounded-lg bg-green-800 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-green-700">Consultar entidade ↗</a></article>)}</div><div className="mt-7 rounded-2xl bg-[#f4f8f5] p-5"><h3 className="font-black text-green-950">Fontes para aprofundar</h3><div className="mt-3 flex flex-wrap gap-2">{modal.fontes.map((fonte) => <a key={fonte.url} href={fonte.url} target="_blank" rel="noreferrer" className="rounded-xl border border-green-200 bg-white px-4 py-3 text-sm font-semibold text-green-900 transition hover:border-green-500 hover:bg-green-50">{fonte.nome} ↗</a>)}</div></div></div>
          </div>
          <div className="flex shrink-0 items-center justify-between border-t border-slate-200 bg-white px-5 py-3 sm:px-8"><span className="text-xs text-slate-500">AGROINOVA ANGOLA · Conhecimento, tecnologia e inovação ao serviço do campo.</span><button onClick={() => setModal(null)} className="rounded-xl bg-green-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-800">Concluir leitura</button></div>
        </section>
      </div>}
    </main>
  );
}
