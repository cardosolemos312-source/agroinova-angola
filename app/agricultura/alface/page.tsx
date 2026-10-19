
"use client";

import { useEffect, useMemo, useState } from "react";

const temas = [
  {
    id: "botanica",
    numero: "01",
    titulo: "Botânica, identificação e variedades",
    resumo: "Taxonomia, morfologia, grupos comerciais e escolha varietal.",
    objetivo: "Compreender a cultura e selecionar materiais vegetais adequados ao ambiente e ao mercado.",
    detalhes: [
      "A alface, Lactuca sativa L., pertence à família Asteraceae. É cultivada principalmente pelas folhas, consumidas frescas, embora a sua morfologia e apresentação comercial variem significativamente entre grupos varietais.",
      "Entre os grupos comerciais encontram-se as alfaces lisas, crespas, romanas e as que formam cabeças compactas, como os tipos iceberg. A escolha deve considerar o mercado de destino, a preferência do consumidor, o transporte e a capacidade de conservação.",
      "A planta apresenta raízes relativamente superficiais, caule curto durante a fase vegetativa e folhas cuja forma, cor, textura e disposição dependem do genótipo e do ambiente. Na fase reprodutiva ocorre o alongamento do caule floral.",
      "O nome da cultivar, o fornecedor, o lote, a validade e as informações de germinação devem ser registados. Sementes de origem desconhecida dificultam a rastreabilidade e a interpretação dos resultados de campo.",
      "O desempenho varietal depende da interação entre genótipo, ambiente e maneio. Uma cultivar produtiva numa região pode apresentar resultados diferentes noutra região, mesmo quando as práticas culturais são semelhantes.",
      "O calor pode acelerar o desenvolvimento e favorecer o espigamento precoce em cultivares sensíveis. A escolha de materiais adaptados e a validação em ensaios locais são essenciais para reduzir esse risco.",
      "Na investigação, não basta comparar a aparência das plantas. Devem ser avaliados o rendimento comercial, a uniformidade, o ciclo observado, a qualidade, as perdas e a resposta às condições ambientais.",
    ],
    tarefas: [
      "Registar cultivar, fornecedor, lote e validade.",
      "Identificar o grupo comercial e o mercado de destino.",
      "Comparar rendimento e qualidade comercial.",
      "Avaliar a adaptação em mais de uma época, quando possível.",
    ],
  },
  {
    id: "clima",
    numero: "02",
    titulo: "Clima, altitude e calendário em Angola",
    resumo: "Planeamento da produção segundo as condições agroecológicas.",
    objetivo: "Reduzir riscos climáticos através de um calendário adaptado ao local.",
    detalhes: [
      "A alface tende a apresentar bom desempenho em condições relativamente amenas. A resposta depende da cultivar, das temperaturas diurnas e noturnas, da radiação, do fotoperíodo, do vento e da disponibilidade de água.",
      "Angola possui ambientes agrícolas distintos. As condições do Planalto Central, incluindo áreas do Huambo, não são equivalentes às de zonas costeiras mais quentes ou de outras regiões com regimes de precipitação diferentes.",
      "Não existe um calendário único que possa ser recomendado com rigor para todas as províncias. A decisão deve considerar a localização da exploração, a altitude, os registos meteorológicos, o acesso à irrigação e a época de maior procura.",
      "Temperaturas elevadas podem acelerar o desenvolvimento, aumentar a perda de água e favorecer o espigamento em materiais sensíveis. A resposta concreta deve ser observada no campo, em vez de presumida apenas com base na região.",
      "Durante períodos chuvosos, a drenagem, a circulação do ar e a duração da humidade nas folhas tornam-se particularmente importantes. A chuva também pode dificultar operações culturais, colheita e transporte.",
      "A produção em períodos mais quentes pode exigir cultivares apropriadas, gestão da irrigação, escolha criteriosa do local e estruturas de proteção tecnicamente justificadas. A proteção não deve reduzir excessivamente a ventilação ou a luz.",
      "Os registos de sementeira, transplante, início da colheita, temperaturas, precipitação e perdas permitem construir um calendário específico para cada exploração.",
    ],
    tarefas: [
      "Identificar a localização e as características do terreno.",
      "Consultar registos meteorológicos disponíveis.",
      "Anotar as datas de sementeira, transplante e colheita.",
      "Comparar o desempenho entre épocas de produção.",
    ],
  },
  {
    id: "solo",
    numero: "03",
    titulo: "Solo, pH e preparação dos canteiros",
    resumo: "Estrutura, drenagem, matéria orgânica e fertilidade.",
    objetivo: "Criar condições favoráveis ao enraizamento e ao crescimento regular.",
    detalhes: [
      "A alface beneficia de solos com estrutura favorável, boa drenagem, disponibilidade equilibrada de água e nutrientes e condições adequadas ao desenvolvimento radicular.",
      "A análise do solo deve ser realizada antes da instalação da cultura sempre que exista acesso a um laboratório ou serviço competente. Os resultados ajudam a orientar a correção do pH e a gestão dos nutrientes.",
      "Um solo compactado pode limitar o crescimento das raízes e a infiltração da água. A preparação deve melhorar a estrutura sem provocar pulverização excessiva ou erosão.",
      "Canteiros elevados podem ser úteis em terrenos com drenagem deficiente, desde que a sua construção seja compatível com o tipo de solo, a disponibilidade de água e o sistema de cultivo.",
      "O pH influencia a disponibilidade de nutrientes e a atividade biológica do solo. A necessidade de correção deve ser determinada com base na análise e em recomendações técnicas aplicáveis ao local.",
      "A matéria orgânica pode contribuir para a estrutura, a retenção de água e a atividade biológica. O composto utilizado deve estar devidamente maturado e ter origem conhecida.",
      "Não se recomenda a aplicação de estrume fresco junto de uma cultura consumida frequentemente crua, devido aos riscos de contaminação. A segurança depende da origem do material, do tratamento e das práticas de produção.",
      "A rotação com culturas de outras famílias botânicas pode ajudar a interromper alguns ciclos de organismos nocivos. A rotação deve considerar os problemas fitossanitários efetivamente identificados na exploração.",
    ],
    tarefas: [
      "Recolher amostras de solo representativas.",
      "Registar os resultados da análise e as correções efetuadas.",
      "Verificar a drenagem após chuva ou irrigação.",
      "Manter registos das culturas anteriores.",
    ],
  },
  {
    id: "viveiro",
    numero: "04",
    titulo: "Sementes, viveiro e transplante",
    resumo: "Produção de mudas uniformes e estabelecimento da cultura.",
    objetivo: "Reduzir falhas de plantação e melhorar a uniformidade do campo.",
    detalhes: [
      "A produção de mudas em tabuleiros facilita o controlo da germinação, da uniformidade e do estado sanitário. A sementeira direta pode ser adequada a determinados sistemas, desde que seja possível gerir a emergência e a densidade.",
      "Os tabuleiros e recipientes devem ter drenagem adequada. O substrato deve ser apropriado à produção de mudas e apresentar condições sanitárias compatíveis com a finalidade.",
      "A humidade deve ser suficiente para a germinação e o crescimento, mas o encharcamento prolongado deve ser evitado. A ventilação e a disponibilidade de luz também influenciam a qualidade das mudas.",
      "O excesso de calor, a falta de luz, a competição entre mudas e as regas inadequadas podem originar plantas alongadas, frágeis ou pouco uniformes.",
      "Antes do transplante, selecionar mudas vigorosas, bem enraizadas e sem sintomas suspeitos. O transplante deve minimizar os danos às raízes e o período de stress hídrico.",
      "A idade ideal de transplante depende da cultivar, do recipiente, da temperatura e do desenvolvimento efetivo da muda. Não se deve utilizar um número fixo de dias como único critério.",
      "A identificação de lotes permite relacionar problemas no campo com a origem das sementes, o substrato, as condições do viveiro e as operações realizadas.",
    ],
    tarefas: [
      "Identificar os lotes de sementes e mudas.",
      "Inspecionar a drenagem dos recipientes.",
      "Eliminar mudas claramente inadequadas.",
      "Registar a data de sementeira e transplante.",
    ],
  },
  {
    id: "espacamento",
    numero: "05",
    titulo: "Espaçamento, densidade e arquitetura do plantio",
    resumo: "Equilíbrio entre rendimento por área, ventilação e tamanho comercial.",
    objetivo: "Definir a população de plantas de acordo com a cultivar e o mercado.",
    detalhes: [
      "O espaçamento depende do grupo varietal, do tamanho comercial pretendido, da fertilidade do solo, da disponibilidade de água e da mecanização ou das ferramentas utilizadas.",
      "Uma densidade elevada pode aumentar a competição por luz, água e nutrientes, dificultar a circulação do ar e tornar algumas operações culturais mais complexas.",
      "Uma densidade reduzida pode produzir plantas maiores, mas diminuir o número de unidades comerciais por área. O efeito económico depende do preço, do calibre e da aceitação pelo comprador.",
      "As recomendações do fornecedor da cultivar ou de um técnico local constituem um ponto de partida. Ensaios em pequena escala podem ajudar a verificar o desempenho nas condições da exploração.",
      "A população teórica pode ser estimada dividindo a área plantada pela área ocupada por cada planta. As distâncias entre linhas e entre plantas devem utilizar a mesma unidade de medida.",
      "A população real pode ser inferior à teórica devido a corredores, falhas de germinação, plantas perdidas e áreas que não foram efetivamente plantadas.",
      "Em investigação, o espaçamento deve ser mantido constante entre tratamentos quando não for a variável em estudo. Se for investigado, deve ser definido como fator experimental e analisado de forma apropriada.",
    ],
    tarefas: [
      "Registar a distância entre linhas e entre plantas.",
      "Calcular a população instalada e a população efetiva.",
      "Quantificar falhas e mortalidade após o transplante.",
      "Relacionar densidade, calibre e rendimento comercial.",
    ],
  },
  {
    id: "rega",
    numero: "06",
    titulo: "Irrigação e qualidade da água",
    resumo: "Gestão hídrica, eficiência e segurança da produção.",
    objetivo: "Manter o crescimento regular e reduzir riscos associados à água.",
    detalhes: [
      "A alface apresenta um sistema radicular relativamente superficial e pode responder rapidamente à falta de água. O défice hídrico pode limitar a expansão foliar, reduzir a massa comercial e comprometer a qualidade.",
      "A frequência e o volume de rega dependem do solo, da fase da cultura, da temperatura, do vento, da precipitação e da capacidade do sistema de irrigação.",
      "A rega localizada pode permitir maior controlo da água aplicada quando o sistema está corretamente dimensionado, mantido e monitorizado. A sua eficiência real depende também da distribuição da água e das condições do solo.",
      "A aspersão pode molhar a folhagem e prolongar a humidade superficial. Em determinadas condições, isso pode favorecer doenças, embora o risco dependa do organismo, da temperatura e da duração da humidade.",
      "A programação da rega pode basear-se na observação da humidade do solo, em sensores, em dados meteorológicos ou num balanço hídrico. Cada método exige interpretação e, quando necessário, calibração.",
      "A água de rios, poços, nascentes e reservatórios pode apresentar riscos microbiológicos ou químicos. A aparência transparente não garante que seja segura.",
      "A fonte de água deve ser protegida contra animais, esgotos, resíduos e escorrências contaminadas. Sempre que possível, deve ser avaliada segundo os riscos e o uso pretendido.",
      "A água utilizada na lavagem do produto consumido cru exige especial atenção à potabilidade e à higiene. Água de irrigação e água de lavagem não devem ser consideradas equivalentes em termos de requisitos sanitários.",
    ],
    tarefas: [
      "Registar a origem da água e o método de irrigação.",
      "Inspecionar filtros, emissores e fugas.",
      "Evitar encharcamento e água estagnada.",
      "Medir o volume aplicado sempre que possível.",
    ],
  },
  {
    id: "nutricao",
    numero: "07",
    titulo: "Nutrição mineral e fertilização",
    resumo: "Gestão de nutrientes com base em diagnóstico e análise.",
    objetivo: "Aumentar a eficiência dos fertilizantes e reduzir desperdícios.",
    detalhes: [
      "O azoto participa na formação de proteínas, pigmentos e tecidos vegetativos. A disponibilidade insuficiente pode limitar o crescimento, enquanto o excesso pode causar desequilíbrios, desperdício económico e perdas ambientais.",
      "O fósforo, o potássio, o cálcio, o magnésio, o enxofre e os micronutrientes desempenham funções específicas no metabolismo vegetal. As necessidades dependem da cultivar, do solo, da água e do rendimento pretendido.",
      "A análise do solo é uma base importante para definir correções e adubação. Em determinados sistemas, pode ser complementada com análise da água, avaliação foliar e observação do campo.",
      "Não existe uma dose universal de fertilizante adequada a todos os solos e regiões de Angola. As doses devem considerar os resultados analíticos, as recomendações técnicas aplicáveis e a produtividade esperada.",
      "A fertirrigação pode facilitar o fracionamento das aplicações, mas exige controlo das concentrações, compatibilidade dos produtos e manutenção do equipamento.",
      "Sintomas como clorose, necrose marginal, deformação e crescimento reduzido podem ter várias causas. Não se deve diagnosticar uma carência mineral exclusivamente a partir de uma fotografia.",
      "O registo das aplicações deve identificar o produto, a composição, a dose, a área, a data, o método e a justificação técnica.",
      "A eficiência de uso dos nutrientes pode ser estudada relacionando a quantidade aplicada com a resposta produtiva, a qualidade e os custos. A interpretação exige um desenho experimental adequado.",
    ],
    tarefas: [
      "Obter análise do solo quando possível.",
      "Registar produtos, composição e quantidades aplicadas.",
      "Investigar sintomas antes de corrigir nutrientes.",
      "Avaliar rendimento e custo das aplicações.",
    ],
  },
  {
    id: "pragas",
    numero: "08",
    titulo: "Pragas, tripes e doenças",
    resumo: "Monitorização, diagnóstico diferencial e proteção integrada.",
    objetivo: "Reduzir perdas sem recorrer a tratamentos indiscriminados.",
    detalhes: [
      "Pulgões, tripes, lagartas, lesmas e outros organismos podem afetar a alface. A importância de cada organismo depende do ambiente, da época, das plantas hospedeiras e do sistema de produção.",
      "Os tripes são insetos pequenos e estreitos. Algumas espécies podem provocar cicatrizes, áreas prateadas ou deformações. Estes sinais também podem resultar de outras causas, pelo que é importante confirmar a presença do organismo.",
      "Os pulgões podem formar colónias nas folhas e nos tecidos jovens. A sua presença deve ser registada com a distribuição dos sintomas, a intensidade da infestação e a evolução ao longo do tempo.",
      "Manchas foliares, míldio, podridões e outros problemas sanitários exigem diagnóstico diferencial. A humidade, a drenagem, a ventilação, a qualidade das mudas e a higiene podem influenciar o desenvolvimento de doenças.",
      "A inspeção deve abranger o verso das folhas, o centro da roseta, as raízes e as plantas vizinhas. Armadilhas de monitorização e lupas podem ajudar, mas não substituem uma identificação especializada quando necessária.",
      "O manejo integrado inclui prevenção, monitorização, rotação quando apropriada, utilização de mudas sadias, gestão da humidade, higiene e proteção dos organismos benéficos.",
      "As fotografias de sintomas são úteis para documentar a evolução, mas não provam isoladamente a causa. A confirmação pode exigir amostras, observação ampliada ou diagnóstico laboratorial.",
      "Qualquer produto fitossanitário deve ser utilizado apenas para uma finalidade autorizada e segundo as instruções aplicáveis. É necessário respeitar o rótulo, o equipamento de proteção, o intervalo de segurança e as regras nacionais.",
    ],
    tarefas: [
      "Inspecionar plantas e registar a distribuição dos sintomas.",
      "Confirmar a identificação antes de intervir.",
      "Documentar as medidas tomadas e os seus resultados.",
      "Solicitar assistência técnica quando necessário.",
    ],
  },
  {
    id: "fisiologia",
    numero: "09",
    titulo: "Fisiologia e crescimento vegetal",
    resumo: "Fotossíntese, expansão foliar, água e desenvolvimento.",
    objetivo: "Relacionar os processos fisiológicos com o rendimento e a qualidade.",
    detalhes: [
      "A produção de biomassa resulta da interação entre a assimilação de carbono, a respiração, a disponibilidade de recursos e o desenvolvimento da planta. A área foliar influencia a interceção da radiação.",
      "A expansão foliar depende da divisão e expansão celular, do estado hídrico, da nutrição e das condições ambientais. A limitação de qualquer destes fatores pode reduzir o crescimento.",
      "A temperatura afeta a velocidade dos processos metabólicos e o desenvolvimento. O espigamento pode reduzir a qualidade comercial, especialmente quando o mercado exige uma roseta vegetativa compacta.",
      "O défice hídrico pode induzir o fecho estomático e limitar a fotossíntese. O excesso de água pode prejudicar a oxigenação das raízes e aumentar o risco de determinados problemas radiculares.",
      "A massa fresca é sensível ao estado hídrico no momento da medição. O horário de colheita e o tempo entre colheita e pesagem devem ser padronizados em ensaios comparativos.",
      "Indicadores possíveis incluem número de folhas, diâmetro da roseta, altura, área foliar, massa fresca, massa seca e proporção de produto comercializável.",
      "Os protocolos de investigação devem indicar o método de medição, os instrumentos, as unidades e os momentos de amostragem. A padronização é essencial para comparar resultados.",
    ],
    tarefas: [
      "Definir os indicadores antes do início do ensaio.",
      "Padronizar os horários e métodos de medição.",
      "Registar temperatura, rega e fase de desenvolvimento.",
      "Interpretar massa fresca em conjunto com o estado hídrico.",
    ],
  },
  {
    id: "genetica",
    numero: "10",
    titulo: "Genética e adaptação de cultivares",
    resumo: "Interação entre genótipo, ambiente e maneio.",
    objetivo: "Identificar materiais vegetais adaptados aos sistemas de produção locais.",
    detalhes: [
      "O desempenho de uma cultivar depende da interação entre genótipo, ambiente e práticas culturais. Uma classificação de desempenho só é válida para as condições e os indicadores efetivamente estudados.",
      "A avaliação pode incluir rendimento comercial, uniformidade, tolerância ao espigamento, qualidade foliar, ciclo observado, resposta à temperatura e suscetibilidade aos problemas fitossanitários encontrados.",
      "Os ensaios de adaptação devem utilizar material vegetal identificado e parcelas comparáveis. Uma testemunha adequada ajuda a contextualizar o desempenho dos materiais avaliados.",
      "A repetição do ensaio em diferentes épocas ou locais permite investigar a estabilidade do desempenho e a interação entre cultivar e ambiente.",
      "A tolerância a um fator de stress deve ser demonstrada por indicadores definidos e comparação apropriada. A observação de algumas plantas saudáveis não comprova resistência genética.",
      "A escolha comercial deve também considerar o preço das sementes, a disponibilidade de fornecimento, as preferências do mercado e as condições de armazenamento e transporte.",
    ],
    tarefas: [
      "Identificar todos os materiais genéticos utilizados.",
      "Definir uma testemunha apropriada.",
      "Comparar resultados em condições documentadas.",
      "Evitar generalizar resultados de um único ensaio.",
    ],
  },
  {
    id: "investigacao",
    numero: "11",
    titulo: "Metodologia de investigação agrária",
    resumo: "Perguntas científicas, delineamento e análise de resultados.",
    objetivo: "Produzir evidência agronómica reproduzível e útil para Angola.",
    detalhes: [
      "Uma investigação deve começar com um problema delimitado, uma pergunta verificável e uma hipótese coerente com o conhecimento disponível. A hipótese deve especificar a relação que se pretende testar.",
      "Exemplo de pergunta: como varia o rendimento comercial de diferentes cultivares entre duas épocas de produção num local definido de Angola? O protocolo deve especificar tratamentos, local, período e indicadores.",
      "A variável independente é o fator manipulado ou comparado, como cultivar ou regime de irrigação. As variáveis dependentes são as respostas medidas, como rendimento, qualidade ou consumo de água.",
      "As variáveis de controlo podem incluir densidade, preparação do solo, dimensão das parcelas e critérios de colheita. As condições que não podem ser controladas devem ser registadas.",
      "O delineamento deve corresponder à pergunta. Blocos casualizados podem ser úteis quando existe variação espacial no terreno, mas a escolha deve considerar os fatores estudados e as restrições reais.",
      "As repetições devem corresponder a unidades experimentais independentes. Medir muitas plantas numa única parcela não equivale automaticamente a dispor de muitas repetições independentes.",
      "O número de repetições e a dimensão amostral devem considerar a variabilidade esperada, a diferença agronómica relevante, os recursos disponíveis e, quando possível, a potência estatística.",
      "A randomização ajuda a reduzir o risco de associar sistematicamente um tratamento a uma posição favorável. O procedimento deve ser documentado.",
      "O protocolo deve identificar o local, as datas, a cultivar, os tratamentos, os métodos de medição, os critérios de exclusão e a análise estatística planeada.",
      "Os resultados devem apresentar estimativas e medidas de variabilidade. A significância estatística não significa necessariamente que uma diferença tenha importância agronómica ou económica.",
      "Resultados negativos, perdas experimentais, dados em falta e desvios ao protocolo devem ser documentados. Não se devem eliminar observações apenas porque contrariam a hipótese.",
    ],
    tarefas: [
      "Definir pergunta, hipótese e objetivos.",
      "Especificar unidade experimental e tratamentos.",
      "Preparar o plano de amostragem e análise.",
      "Documentar desvios, limitações e dados em falta.",
    ],
  },
  {
    id: "dados",
    numero: "12",
    titulo: "Indicadores, amostragem e gestão de dados",
    resumo: "Qualidade, rastreabilidade e comparabilidade dos dados.",
    objetivo: "Construir conjuntos de dados úteis para análise e investigação futura.",
    detalhes: [
      "Cada conjunto de dados deve ter um dicionário de variáveis que defina nomes, significados, unidades, códigos e métodos de medição.",
      "Indicadores possíveis incluem número de folhas, diâmetro da roseta, massa fresca, massa seca, rendimento total, rendimento comercial, perdas, incidência de sintomas e volume de água aplicado.",
      "O rendimento total e o rendimento comercial devem ser registados separadamente. O produto rejeitado, a causa da rejeição e a quantidade perdida ajudam a interpretar o resultado económico.",
      "A produtividade comercial pode ser calculada dividindo a massa comercial pela área efetivamente colhida. A unidade deve ser indicada, por exemplo kg/m² ou t/ha.",
      "A incidência corresponde à proporção de unidades avaliadas que apresentam uma condição definida. A severidade descreve a intensidade do dano e exige uma escala de avaliação previamente estabelecida.",
      "A amostragem deve seguir um método definido. Selecionar apenas as plantas mais saudáveis ou mais afetadas pode introduzir enviesamento nos resultados.",
      "Os dados digitais devem incluir identificador do ensaio, local, parcela, tratamento, repetição, data, observador e unidade de medida.",
      "A validação deve procurar duplicações, valores impossíveis, unidades inconsistentes, datas incorretas e campos em falta. As correções devem ser documentadas.",
      "Fotografias, folhas de campo, análises laboratoriais e ficheiros de dados devem possuir identificadores que permitam relacionar cada registo com a respetiva parcela.",
      "A partilha de dados deve respeitar a privacidade dos produtores e as regras institucionais. A documentação metodológica deve permitir compreender como os resultados foram obtidos.",
    ],
    tarefas: [
      "Criar um dicionário de variáveis.",
      "Uniformizar unidades e identificadores.",
      "Validar os dados antes da análise.",
      "Guardar cópias de segurança e documentação.",
    ],
  },
  {
    id: "agua-investigacao",
    numero: "13",
    titulo: "Eficiência hídrica e experimentação de rega",
    resumo: "Relação entre água aplicada, produtividade e qualidade.",
    objetivo: "Avaliar estratégias de irrigação com base em medições e indicadores.",
    detalhes: [
      "A necessidade de irrigação depende da procura atmosférica, do estado de desenvolvimento, das propriedades do solo e da profundidade efetiva das raízes.",
      "A evapotranspiração da cultura pode ser estimada relacionando a evapotranspiração de referência com um coeficiente cultural apropriado. Os coeficientes devem corresponder à fase e às condições do sistema.",
      "A programação da rega pode utilizar observações do solo, sensores, dados meteorológicos ou balanço hídrico. Os métodos exigem interpretação e calibração adequadas.",
      "Em ensaios comparativos, o volume aplicado deve ser medido ou estimado por um método documentado. A duração de funcionamento de uma bomba não substitui a medição do caudal real.",
      "A uniformidade de distribuição deve ser avaliada porque diferenças no fornecimento de água podem confundir os efeitos dos tratamentos.",
      "Os tratamentos devem ser definidos quantitativamente. Expressões como rega reduzida ou rega abundante são insuficientes sem critérios operacionais claros.",
      "A eficiência de uso da água pode relacionar rendimento comercial e água aplicada, desde que os limites do sistema e a definição utilizada sejam explicitados.",
      "A interpretação deve incluir qualidade, perdas, custos de energia, manutenção e disponibilidade real de água. Maximizar o rendimento não significa necessariamente maximizar a eficiência hídrica.",
    ],
    tarefas: [
      "Definir os regimes de irrigação de forma mensurável.",
      "Verificar a uniformidade do sistema.",
      "Registar precipitação e volume de água aplicado.",
      "Relacionar consumo, rendimento e custos.",
    ],
  },
  {
    id: "fitossanidade",
    numero: "14",
    titulo: "Diagnóstico fitossanitário e proteção integrada",
    resumo: "Distinguir danos bióticos de problemas fisiológicos e ambientais.",
    objetivo: "Apoiar decisões de proteção vegetal com melhor fundamentação.",
    detalhes: [
      "Os sintomas são respostas da planta e não identificam isoladamente a causa. Clorose, necrose, manchas, deformações e murchidão podem ter origem em organismos nocivos, desequilíbrios nutricionais, salinidade, água ou danos mecânicos.",
      "O diagnóstico deve considerar a distribuição dos sintomas, a idade dos tecidos afetados, a evolução temporal, o histórico da parcela e as condições meteorológicas.",
      "A inspeção deve incluir o verso das folhas, o centro da roseta, as raízes e as plantas vizinhas. Lupa, armadilhas e recolha de amostras podem melhorar a observação.",
      "Os protocolos científicos devem definir o método de seleção das plantas, o número de unidades examinadas e a escala utilizada para incidência ou severidade.",
      "A presença de um inseto não prova que seja responsável por todos os danos observados. A identificação do organismo e a associação com os sintomas exigem avaliação apropriada.",
      "A prevenção inclui mudas sadias, higiene de ferramentas, gestão da humidade, drenagem, monitorização e medidas culturais adaptadas ao problema identificado.",
      "Quando necessário, a confirmação laboratorial pode ser importante para distinguir agentes que produzem sintomas semelhantes.",
      "A utilização de produtos fitossanitários deve respeitar a autorização aplicável, as instruções do rótulo, a proteção dos trabalhadores e o intervalo de segurança.",
    ],
    tarefas: [
      "Registar sintomas e distribuição espacial.",
      "Documentar o método de amostragem.",
      "Confirmar a causa antes de recomendar intervenções.",
      "Avaliar a eficácia e os efeitos das medidas adotadas.",
    ],
  },
  {
    id: "economia",
    numero: "15",
    titulo: "Economia, custos e viabilidade",
    resumo: "Rentabilidade, perdas e decisões de investimento.",
    objetivo: "Avaliar a viabilidade técnica e económica dos sistemas de produção.",
    detalhes: [
      "A análise económica deve distinguir custos variáveis, custos fixos, receitas e perdas. Sementes, substrato, fertilizantes, água, energia, mão de obra, embalagens e transporte podem representar parcelas importantes do custo total.",
      "A receita bruta resulta da quantidade efetivamente vendida multiplicada pelo preço recebido. A quantidade colhida não deve ser confundida com a quantidade comercializada.",
      "A margem bruta corresponde à receita bruta menos os custos variáveis. Para avaliar a rentabilidade global, também é necessário considerar os custos fixos e o período de análise.",
      "O custo por quilograma comercial deve utilizar a quantidade comercializável como denominador. Perdas elevadas podem aumentar o custo unitário mesmo quando o custo total permanece estável.",
      "A análise de sensibilidade pode avaliar como alterações do preço, produtividade, custo dos insumos e transporte afetam o resultado económico.",
      "A comparação de tecnologias deve incluir investimento inicial, manutenção, vida útil, necessidade de formação e disponibilidade de peças ou assistência.",
      "Os preços e custos devem indicar a moeda, a unidade, a data e a origem. Valores observados num mercado ou numa época não devem ser generalizados para todo o país.",
      "A viabilidade depende da escala, da procura, da regularidade das vendas, da logística e da capacidade de reduzir perdas pós-colheita.",
    ],
    tarefas: [
      "Registar custos por operação e por lote.",
      "Calcular a quantidade comercializada.",
      "Determinar custos unitários e margem bruta.",
      "Comparar cenários com diferentes preços e perdas.",
    ],
  },
  {
    id: "poscolheita",
    numero: "16",
    titulo: "Pós-colheita, higiene e segurança alimentar",
    resumo: "Conservação, acondicionamento e qualidade comercial.",
    objetivo: "Reduzir perdas e melhorar a segurança do produto.",
    detalhes: [
      "A alface pode perder água e turgescência rapidamente quando exposta a temperaturas elevadas. O tempo entre a colheita, o acondicionamento e a venda é importante para a qualidade.",
      "A qualidade comercial pode incluir frescura, cor, uniformidade, integridade, tamanho e ausência de sujidade ou deterioração. Os critérios de classificação devem ser definidos previamente.",
      "A refrigeração próxima de 0–5 °C é uma referência técnica geral frequentemente utilizada para alface, mas as condições devem ser ajustadas ao produto, à duração de armazenamento e à cadeia de frio disponível.",
      "Quando não existe refrigeração, a organização da colheita, a sombra, a utilização de recipientes limpos e ventilados e a redução do tempo de transporte podem ajudar a limitar perdas. Não substituem uma cadeia de frio adequada.",
      "A água de lavagem e as superfícies que entram em contacto com o produto podem constituir fontes de contaminação. A higiene deve ser planeada e documentada.",
      "A lavagem não garante a eliminação de todos os perigos microbiológicos. A prevenção começa na água, no solo, nas práticas de produção e na higiene durante a colheita e o transporte.",
      "Os estudos pós-colheita devem registar as condições iniciais, a embalagem, a temperatura, a duração e os critérios utilizados para avaliar a deterioração.",
      "A perda pós-colheita deve ser calculada através de um método definido, distinguindo perda de massa, perda de unidades comerciais e rejeição por qualidade.",
    ],
    tarefas: [
      "Preparar caixas e ferramentas limpas.",
      "Registar o tempo entre colheita e venda.",
      "Monitorizar as condições de armazenamento.",
      "Quantificar perdas e rejeições.",
    ],
  },
  {
    id: "mercado",
    numero: "17",
    titulo: "Comercialização e cadeia de valor",
    resumo: "Planeamento da produção segundo a procura.",
    objetivo: "Aproximar a produção das necessidades do mercado.",
    detalhes: [
      "Antes de instalar uma cultura comercial, é importante identificar compradores potenciais, volumes pretendidos, frequência de entrega, apresentação exigida, preços e critérios de aceitação.",
      "Os mercados podem incluir vendedores, restaurantes, cantinas, hotéis, retalhistas e consumidores. Cada canal pode exigir volumes, embalagens e regularidade diferentes.",
      "A produção escalonada pode ajudar a distribuir a colheita ao longo do tempo, mas deve considerar a capacidade de mão de obra, a irrigação e a procura real.",
      "O preço de venda deve ser registado com a data, o mercado, a unidade e eventuais custos de transporte. O preço anunciado não é necessariamente o preço recebido pelo produtor.",
      "A qualidade, a uniformidade, a regularidade de fornecimento e a redução de perdas podem ser tão importantes como o volume total produzido.",
      "A avaliação da cadeia de valor pode identificar pontos críticos relacionados com transporte, embalagem, acesso à informação de mercado e disponibilidade de infraestrutura.",
    ],
    tarefas: [
      "Identificar compradores antes da colheita.",
      "Registar preço, quantidade e canal de venda.",
      "Calcular custos logísticos.",
      "Relacionar perdas com critérios de aceitação.",
    ],
  },
  {
    id: "clima-dados",
    numero: "18",
    titulo: "Monitorização ambiental e agricultura digital",
    resumo: "Integração de dados meteorológicos, sensores e observações.",
    objetivo: "Melhorar a tomada de decisão com dados verificáveis.",
    detalhes: [
      "A monitorização ambiental pode incluir temperatura, humidade relativa, precipitação, radiação, vento e humidade do solo. A seleção dos parâmetros deve corresponder à pergunta agronómica.",
      "Os sensores exigem instalação adequada, calibração, manutenção e verificação de valores anómalos. A existência de um sensor não garante, por si só, que os dados sejam corretos.",
      "Os dados meteorológicos de uma estação distante podem não representar plenamente as condições da parcela. A distância, a altitude, o relevo e a exposição devem ser considerados.",
      "A integração de observações de campo com séries meteorológicas pode ajudar a investigar relações entre ambiente, desenvolvimento, ocorrência de sintomas e rendimento.",
      "As fotografias devem ter data, local ou identificador da parcela e contexto de observação. Não se deve usar uma imagem sem origem conhecida como prova de uma ocorrência local.",
      "A análise digital pode ajudar a identificar padrões, mas os modelos devem ser validados com dados representativos antes de serem utilizados para recomendar intervenções.",
      "A partilha de informação na AGROINOVA deve preservar a origem dos dados, o método de recolha, a unidade, o período e as limitações conhecidas.",
    ],
    tarefas: [
      "Identificar as fontes de dados ambientais.",
      "Registar instrumentos, localização e calibração.",
      "Verificar valores anómalos e dados em falta.",
      "Documentar a origem e as limitações dos conjuntos de dados.",
    ],
  },
] as const;

type Tema = (typeof temas)[number];

const fotos = [
  {
    src: "/imagens/alface/alface-campo.jpg",
    titulo: "Alface em campo",
    legenda: "Observar a disposição das plantas, a uniformidade e o estado geral da cultura.",
    categoria: "Produção",
  },
  {
    src: "/imagens/alface/alface-plantacao.jpg",
    titulo: "Plantação comercial",
    legenda: "Avaliar o estabelecimento da cultura, a densidade e as condições dos canteiros.",
    categoria: "Maneio",
  },
  {
    src: "/imagens/alface/alface-estufa.jpg",
    titulo: "Produção protegida",
    legenda: "A produção protegida exige atenção à ventilação, temperatura, água e higiene.",
    categoria: "Tecnologia",
  },
  {
    src: "/imagens/alface/alface-danos-foliares.jpg",
    titulo: "Danos foliares",
    legenda: "Os sintomas devem ser registados e analisados antes de se atribuir uma causa.",
    categoria: "Fitossanidade",
  },
  {
    src: "/imagens/alface/alface-alteracoes-foliares.jpg",
    titulo: "Alterações nas folhas",
    legenda: "A avaliação deve considerar a idade das folhas, a distribuição dos sintomas e o ambiente.",
    categoria: "Diagnóstico",
  },
];

const perguntas = [
  {
    pergunta: "Qual é a melhor época para produzir alface em Angola?",
    resposta:
      "Depende da localização, altitude, temperatura, cultivar, água disponível e mercado. O calendário deve ser construído a partir de dados meteorológicos e registos locais, e não de uma data única nacional.",
  },
  {
    pergunta: "Quantas vezes devo regar?",
    resposta:
      "Não existe uma frequência universal. A decisão deve considerar o solo, a fase de crescimento, o clima e o método de irrigação. Verifique a humidade na zona radicular e evite tanto o défice como o encharcamento.",
  },
  {
    pergunta: "Como confirmar a presença de tripes?",
    resposta:
      "Observe o verso das folhas e o centro da planta, procurando insetos pequenos e estreitos. Cicatrizes e áreas prateadas podem ser compatíveis com danos de tripes, mas não confirmam sozinhas a causa. Utilize uma lupa ou procure apoio técnico.",
  },
  {
    pergunta: "As margens castanhas indicam falta de cálcio?",
    resposta:
      "Não necessariamente. Podem estar relacionadas com problemas fisiológicos, água, transporte de cálcio, salinidade, doenças ou outros fatores. É necessário avaliar os sintomas e as condições da cultura antes de intervir.",
  },
  {
    pergunta: "Posso utilizar água de um rio ou poço?",
    resposta:
      "A origem não garante segurança. Proteja a fonte contra contaminação e avalie a qualidade da água de acordo com o uso. A água usada na lavagem da alface consumida crua exige cuidados sanitários específicos.",
  },
  {
    pergunta: "Como calcular o rendimento comercial?",
    resposta:
      "Pese o produto que cumpre os critérios comerciais e divida essa massa pela área efetivamente colhida. Registe a unidade utilizada e mantenha separadas a produção total, a produção comercial e as rejeições.",
  },
  {
    pergunta: "Uma fotografia permite diagnosticar uma doença?",
    resposta:
      "Uma fotografia pode ajudar a documentar sintomas, mas nem sempre permite identificar o agente causador. A distribuição dos sintomas, o histórico, a observação ampliada e, quando necessário, a confirmação laboratorial são importantes.",
  },
  {
    pergunta: "Como saber se a cultura é rentável?",
    resposta:
      "Registe custos, produção comercial, rejeições, preço recebido e despesas de transporte. Calcule a receita e os custos e compare lotes e épocas. A produtividade, por si só, não demonstra rentabilidade.",
  },
];

const agenda = [
  {
    numero: "01",
    titulo: "Adaptação de cultivares",
    texto: "Comparar cultivares em locais e épocas diferentes, documentando rendimento, qualidade, espigamento e estabilidade do desempenho.",
    pergunta: "Que cultivares apresentam melhor rendimento comercial nas condições agroecológicas do local estudado?",
  },
  {
    numero: "02",
    titulo: "Gestão eficiente da água",
    texto: "Avaliar regimes de irrigação com medição da água aplicada, rendimento comercial, qualidade e custos operacionais.",
    pergunta: "Como varia a produtividade comercial em função do volume de água aplicado?",
  },
  {
    numero: "03",
    titulo: "Fertilidade e nutrição",
    texto: "Relacionar análises do solo, estratégias de fertilização, resposta produtiva e custo dos insumos.",
    pergunta: "Que estratégia de fertilização apresenta melhor equilíbrio entre produtividade e custo?",
  },
  {
    numero: "04",
    titulo: "Pragas e doenças",
    texto: "Registar organismos identificados, época de ocorrência, incidência, severidade e fatores ambientais associados.",
    pergunta: "Que problemas fitossanitários ocorrem com maior frequência durante cada época de produção?",
  },
  {
    numero: "05",
    titulo: "Pós-colheita e perdas",
    texto: "Medir perdas, qualidade e tempo entre colheita, acondicionamento, transporte e venda.",
    pergunta: "Quais são os principais fatores associados às perdas pós-colheita nas cadeias estudadas?",
  },
  {
    numero: "06",
    titulo: "Economia e mercado",
    texto: "Investigar custos, preços recebidos, logística, regularidade da procura e viabilidade de diferentes sistemas.",
    pergunta: "Que fatores explicam as diferenças de margem económica entre lotes e épocas?",
  },
];

export default function AlfacePage() {
  const [pesquisa, setPesquisa] = useState("");
  const [modal, setModal] = useState<Tema | null>(null);
  const [fotoAtiva, setFotoAtiva] = useState(0);
  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(0);
  const [fichas, setFichas] = useState<Record<string, boolean>>({});
  const [erroImagem, setErroImagem] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!modal) return;

    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function fecharComEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setModal(null);
    }

    window.addEventListener("keydown", fecharComEscape);

    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener("keydown", fecharComEscape);
    };
  }, [modal]);

  const temasFiltrados = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt-PT");
    if (!termo) return temas;

    return temas.filter((tema) =>
      [
        tema.titulo,
        tema.resumo,
        tema.objetivo,
        ...tema.detalhes,
        ...tema.tarefas,
      ]
        .join(" ")
        .toLocaleLowerCase("pt-PT")
        .includes(termo),
    );
  }, [pesquisa]);

  const tarefasConcluidas = Object.values(fichas).filter(Boolean).length;

  function mudarFoto(direcao: number) {
    setFotoAtiva((atual) => (atual + direcao + fotos.length) % fotos.length);
  }

  return (
    <main className="alf-page">
      <style>{`
        .alf-page {
          --alf-green: #166534;
          --alf-dark: #14532d;
          --alf-deep: #103b25;
          --alf-light: #f0fdf4;
          --alf-bg: #f4f7f4;
          --alf-border: #dfe8e0;
          --alf-text: #1b2b20;
          --alf-muted: #5c6b60;
          background: var(--alf-bg);
          color: var(--alf-text);
          min-height: 100vh;
          font-family: inherit;
          overflow-wrap: anywhere;
        }
        .alf-page *, .alf-page *::before, .alf-page *::after {
          box-sizing: border-box;
          font-family: inherit;
        }
        .alf-page button, .alf-page input { font: inherit; }
        .alf-wrap { width: min(1160px, 100%); margin: 0 auto; padding: 0 22px; }
        .alf-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .alf-two { display: grid; grid-template-columns: 1.1fr .9fr; gap: 28px; align-items: center; }
        .alf-card { background: #fff; border: 1px solid var(--alf-border); border-radius: 15px; overflow: hidden; min-width: 0; }
        .alf-btn { border: 0; cursor: pointer; font: inherit; }
        .alf-btn:focus-visible, .alf-page a:focus-visible, .alf-page input:focus-visible {
          outline: 3px solid #86efac; outline-offset: 3px;
        }
        .alf-topic { width: 100%; text-align: left; padding: 20px; background: #fff; color: var(--alf-text); display: flex; gap: 15px; align-items: flex-start; }
        .alf-topic:hover { background: #f0f8f1; }
        .alf-photo { display: block; width: 100%; height: 100%; object-fit: cover; }
        .alf-label { font-size: 11px; letter-spacing: 1.5px; font-weight: 900; color: var(--alf-green); }
        .alf-muted { color: var(--alf-muted); line-height: 1.85; }
        .alf-action { display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: var(--alf-green); color: #fff; border-radius: 9px; padding: 12px 17px; text-decoration: none; font-weight: 800; }
        .alf-action:hover { filter: brightness(1.08); }
        .alf-modal-bg { position: fixed; inset: 0; z-index: 1000; background: rgba(8,22,13,.76); display: flex; justify-content: center; align-items: center; padding: 18px; }
        .alf-modal { width: min(800px, 100%); max-height: 90vh; overflow-y: auto; background: #fff; border-radius: 17px; box-shadow: 0 24px 90px rgba(0,0,0,.3); }
        .alf-modal-head { position: sticky; top: 0; z-index: 2; background: #fff; border-bottom: 1px solid #e3eae4; padding: 22px 24px; display: flex; gap: 16px; align-items: flex-start; }
        .alf-modal-body { padding: 12px 24px 28px; }
        .alf-photo-card { text-align: left; padding: 0; color: var(--alf-text); transition: transform .18s ease, box-shadow .18s ease; }
        .alf-photo-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(20,83,45,.12); }
        .alf-search { width: 100%; max-width: 720px; padding: 15px 16px; border: 1px solid #cbd8cd; border-radius: 10px; background: #fff; color: var(--alf-text); }
        .alf-research-row { display: grid; grid-template-columns: 54px minmax(0,1fr); gap: 16px; padding: 22px; background: #fff; border: 1px solid var(--alf-border); border-radius: 14px; }
        .alf-number { display: flex; width: 44px; height: 44px; align-items: center; justify-content: center; border-radius: 12px; background: #e7f5e9; color: var(--alf-green); font-weight: 900; }
        .alf-check { display: flex; align-items: flex-start; gap: 10px; padding: 9px 0; line-height: 1.65; }
        .alf-check input { margin-top: 5px; accent-color: var(--alf-green); }
        .alf-tag { display: inline-flex; border: 1px solid #d5e7d8; background: #edf7ee; color: #14532d; border-radius: 999px; padding: 5px 10px; font-size: 12px; font-weight: 800; }
        .alf-table-wrap { width: 100%; overflow-x: auto; border: 1px solid var(--alf-border); border-radius: 12px; background: #fff; }
        .alf-table { border-collapse: collapse; width: 100%; min-width: 540px; text-align: left; }
        .alf-table th, .alf-table td { padding: 13px 15px; border-bottom: 1px solid #e6ece7; vertical-align: top; line-height: 1.65; }
        .alf-table th { background: #edf6ee; color: #14532d; }
        .alf-table tr:last-child td { border-bottom: 0; }
        @media (max-width: 760px) {
          .alf-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .alf-two { grid-template-columns: 1fr; }
          .alf-hero-title { font-size: 45px !important; }
          .alf-research-row { grid-template-columns: 42px minmax(0,1fr); gap: 12px; padding: 16px; }
        }
        @media (max-width: 480px) {
          .alf-grid { grid-template-columns: 1fr; }
          .alf-wrap { padding-left: 16px; padding-right: 16px; }
          .alf-hero-title { font-size: 36px !important; }
          .alf-modal-bg { padding: 8px; }
          .alf-modal-head { padding: 17px; }
          .alf-modal-body { padding: 8px 17px 22px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .alf-page *, .alf-page *::before, .alf-page *::after { scroll-behavior: auto !important; transition: none !important; }
        }
      `}</style>

      <section style={{ position: "relative", background: "#123d27", color: "#fff", overflow: "hidden" }}>
        {!erroImagem["hero"] && (
          <img
            src={fotos[0].src}
            alt=""
            aria-hidden="true"
            onError={() => setErroImagem((prev) => ({ ...prev, hero: true }))}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.34 }}
          />
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(7,35,19,.97) 0%, rgba(7,35,19,.82) 58%, rgba(7,35,19,.35) 100%)" }} />
        <div className="alf-wrap" style={{ position: "relative", paddingTop: 68, paddingBottom: 68 }}>
          <p style={{ color: "#bbf7d0", fontSize: 12, letterSpacing: 2, fontWeight: 900 }}>
            AGROINOVA-ANGOLA / CONHECIMENTO AGRÁRIO
          </p>
          <span className="alf-tag" style={{ background: "rgba(187,247,208,.13)", borderColor: "rgba(187,247,208,.4)", color: "#dcfce7" }}>
            Guia técnico-científico
          </span>
          <h1 className="alf-hero-title" style={{ fontSize: 62, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 850, margin: "20px 0" }}>
            Alface: ciência, produção e inovação
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.85, maxWidth: 790, color: "#e7f2e9" }}>
            Um dossiê técnico para produtores, estudantes, agrónomos e investigadores.
            Da botânica e fisiologia vegetal à gestão da cultura, investigação experimental,
            segurança alimentar e comercialização nas condições de Angola.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
            <a href="#guia" className="alf-action" style={{ background: "#bbf7d0", color: "#123d27" }}>Consultar o guia ↓</a>
            <a href="#investigacao-cientifica" className="alf-action" style={{ background: "transparent", border: "1px solid #b8d3bf" }}>Área de investigação</a>
            <a href="#referencias" className="alf-action" style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.35)" }}>Fontes técnicas</a>
          </div>
          <p style={{ color: "#d0e2d4", fontSize: 12, lineHeight: 1.8, marginTop: 24, maxWidth: 820 }}>
            Conhecimento científico e recomendações gerais. A aplicação prática deve
            considerar as condições locais, a análise do solo e da água e a orientação
            técnica aplicável em Angola.
          </p>
        </div>
      </section>

      <section className="alf-wrap" style={{ paddingTop: 24, paddingBottom: 20 }}>
        <div className="alf-grid">
          {[
            ["ESPÉCIE", "Lactuca sativa L."],
            ["FAMÍLIA", "Asteraceae"],
            ["PRODUTO", "Folhas frescas"],
          ].map(([titulo, valor]) => (
            <div key={titulo} className="alf-card" style={{ padding: 21 }}>
              <p className="alf-label" style={{ margin: 0 }}>{titulo}</p>
              <p style={{ margin: "9px 0 0", fontWeight: 850, fontSize: 18 }}>{valor}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="galeria" className="alf-wrap" style={{ paddingTop: 46, paddingBottom: 45 }}>
        <div style={{ marginBottom: 23 }}>
          <p className="alf-label">GALERIA TÉCNICA</p>
          <h2 style={{ fontSize: 32, lineHeight: 1.2, margin: "8px 0 12px" }}>A cultura e os sinais observáveis</h2>
          <p className="alf-muted" style={{ maxWidth: 800, margin: 0 }}>
            Fotografias de referência para observação e documentação. A identificação
            de pragas ou doenças exige confirmação adequada; a imagem, isoladamente,
            não demonstra a causa de um sintoma.
          </p>
        </div>

        <div className="alf-two">
          <div style={{ overflow: "hidden", borderRadius: 15, background: "#e4ece5", minHeight: 280 }}>
            {erroImagem[fotos[fotoAtiva].src] ? (
              <div style={{ minHeight: 320, padding: 28, display: "grid", placeItems: "center", textAlign: "center", color: "#5c6b60" }}>
                <div>
                  <strong>Imagem não encontrada</strong>
                  <p style={{ fontSize: 13, lineHeight: 1.7 }}>
                    Confirma o ficheiro <code>{fotos[fotoAtiva].src}</code> na pasta public.
                  </p>
                </div>
              </div>
            ) : (
              <img
                className="alf-photo"
                src={fotos[fotoAtiva].src}
                alt={fotos[fotoAtiva].titulo}
                onError={() => setErroImagem((prev) => ({ ...prev, [fotos[fotoAtiva].src]: true }))}
                style={{ height: 365 }}
              />
            )}
          </div>
          <div>
            <p className="alf-label">IMAGEM {String(fotoAtiva + 1).padStart(2, "0")} / {String(fotos.length).padStart(2, "0")}</p>
            <span className="alf-tag">{fotos[fotoAtiva].categoria}</span>
            <h3 style={{ fontSize: 27, lineHeight: 1.25, margin: "12px 0" }}>{fotos[fotoAtiva].titulo}</h3>
            <p className="alf-muted">{fotos[fotoAtiva].legenda}</p>
            <div style={{ display: "flex", gap: 9, flexWrap: "wrap", marginTop: 22 }}>
              <button className="alf-btn" onClick={() => mudarFoto(-1)} aria-label="Fotografia anterior" style={{ background: "#fff", border: "1px solid #d7e2d8", borderRadius: 9, padding: "10px 17px", color: "#166534" }}>← Anterior</button>
              <button className="alf-btn" onClick={() => mudarFoto(1)} aria-label="Fotografia seguinte" style={{ background: "#166534", borderRadius: 9, padding: "10px 17px", color: "#fff" }}>Seguinte →</button>
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.8, color: "#657267", marginTop: 20 }}>
              As legendas descrevem a finalidade de observação. Não se presume que
              as imagens tenham sido captadas em Angola ou que os sintomas tenham
              um diagnóstico confirmado.
            </p>
          </div>
        </div>

        <div className="alf-grid" style={{ marginTop: 19 }}>
          {fotos.map((foto, i) => (
            <button
              key={foto.src}
              className="alf-btn alf-card alf-photo-card"
              onClick={() => setFotoAtiva(i)}
              aria-pressed={i === fotoAtiva}
              style={{ outline: i === fotoAtiva ? "2px solid #166534" : "none" }}
            >
              {erroImagem[foto.src] ? (
                <div style={{ height: 145, display: "grid", placeItems: "center", padding: 15, background: "#edf4ee", color: "#526657", fontSize: 13 }}>Imagem indisponível</div>
              ) : (
                <img
                  src={foto.src}
                  alt={foto.titulo}
                  loading="lazy"
                  onError={() => setErroImagem((prev) => ({ ...prev, [foto.src]: true }))}
                  style={{ width: "100%", height: 150, objectFit: "cover", display: "block" }}
                />
              )}
              <span style={{ display: "block", padding: 14 }}>
                <span className="alf-label">{foto.categoria}</span>
                <strong style={{ display: "block", marginTop: 5 }}>{foto.titulo}</strong>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section id="guia" className="alf-wrap" style={{ paddingTop: 40, paddingBottom: 62 }}>
        <p className="alf-label">BIBLIOTECA DE CONHECIMENTO</p>
        <h2 style={{ fontSize: 36, lineHeight: 1.2, margin: "8px 0 12px" }}>Guia técnico de produção</h2>
        <p className="alf-muted" style={{ maxWidth: 850 }}>
          Consulta temas de produção, fisiologia, fitossanidade, investigação,
          gestão de dados e economia. Cada tema abre uma ficha detalhada com
          fundamentos e uma lista de verificação.
        </p>

        <div style={{ margin: "25px 0 20px" }}>
          <label htmlFor="pesquisa-alface" style={{ display: "block", fontWeight: 800, marginBottom: 9 }}>
            Pesquisar conteúdo técnico
          </label>
          <input
            id="pesquisa-alface"
            className="alf-search"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder="Ex.: tripes, fotossíntese, solo, investigação, dados..."
          />
          <p style={{ color: "#69776c", fontSize: 12, marginTop: 9 }}>
            {temasFiltrados.length} {temasFiltrados.length === 1 ? "tema encontrado" : "temas encontrados"} em {temas.length} temas técnicos.
          </p>
        </div>

        <div style={{ display: "grid", gap: 11 }}>
          {temasFiltrados.map((tema) => (
            <article className="alf-card" key={tema.id}>
              <button
                className="alf-btn alf-topic"
                onClick={() => setModal(tema)}
                aria-label={`Abrir orientações sobre ${tema.titulo}`}
              >
                <span style={{ color: "#166534", fontWeight: 900, fontSize: 13, minWidth: 28, paddingTop: 3 }}>{tema.numero}</span>
                <span style={{ flex: 1 }}>
                  <strong style={{ fontSize: 17, lineHeight: 1.4, display: "block" }}>{tema.titulo}</strong>
                  <span style={{ display: "block", color: "#68766b", fontSize: 13, lineHeight: 1.7, marginTop: 5 }}>{tema.resumo}</span>
                </span>
                <span aria-hidden="true" style={{ color: "#166534", fontSize: 22 }}>↗</span>
              </button>
            </article>
          ))}
          {temasFiltrados.length === 0 && (
            <div className="alf-card" style={{ padding: 24 }}>
              <strong>Não foram encontrados temas.</strong>
              <p className="alf-muted">Experimenta termos como “rega”, “cultivares”, “pragas”, “solo” ou “investigação”.</p>
              <button className="alf-btn" onClick={() => setPesquisa("")} style={{ background: "#166534", color: "#fff", borderRadius: 8, padding: "10px 14px" }}>Limpar pesquisa</button>
            </div>
          )}
        </div>
      </section>

      <section style={{ background: "#e9f1ea", padding: "48px 0" }}>
        <div className="alf-wrap">
          <p className="alf-label">OBSERVAÇÃO E DIAGNÓSTICO</p>
          <h2 style={{ fontSize: 32, lineHeight: 1.2, margin: "8px 0 12px" }}>Antes de tratar, investigar</h2>
          <p className="alf-muted" style={{ maxWidth: 830 }}>
            Manchas, perfurações, deformações e margens queimadas podem ter causas
            diferentes. A avaliação deve combinar observação, histórico da cultura,
            condições ambientais e, quando necessário, confirmação laboratorial.
          </p>
          <div className="alf-grid" style={{ marginTop: 25 }}>
            {[
              ["Observar", "Examinar folhas novas e velhas, verso das folhas, centro da planta, raízes e distribuição espacial dos sintomas."],
              ["Registar", "Anotar a data, o canteiro, a cultivar, a rega, o tempo, a evolução dos sintomas e a extensão dos danos."],
              ["Confirmar", "Consultar um técnico agrícola ou serviço competente antes de decidir sobre intervenções fitossanitárias."],
            ].map(([titulo, texto]) => (
              <div key={titulo} className="alf-card" style={{ padding: 23 }}>
                <h3 style={{ color: "#166534", marginTop: 0, fontSize: 21 }}>{titulo}</h3>
                <p className="alf-muted" style={{ marginBottom: 0 }}>{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="investigacao-cientifica" style={{ background: "#fff", padding: "54px 0" }}>
        <div className="alf-wrap">
          <p className="alf-label">CIÊNCIA, DADOS E INOVAÇÃO</p>
          <h2 style={{ fontSize: 34, lineHeight: 1.2, margin: "8px 0 16px" }}>
            Agenda de investigação da alface em Angola
          </h2>
          <p className="alf-muted" style={{ maxWidth: 850 }}>
            Propostas de investigação para universidades, institutos agrários,
            investigadores, serviços de extensão e produtores. Estas linhas
            constituem sugestões de estudo, não resultados experimentais já demonstrados.
          </p>

          <div style={{ display: "grid", gap: 13, marginTop: 28 }}>
            {agenda.map((linha) => (
              <article key={linha.numero} className="alf-research-row">
                <div className="alf-number">{linha.numero}</div>
                <div>
                  <h3 style={{ fontSize: 20, lineHeight: 1.35, margin: "0 0 8px" }}>{linha.titulo}</h3>
                  <p className="alf-muted" style={{ margin: "0 0 12px" }}>{linha.texto}</p>
                  <p style={{ margin: 0, padding: "12px 14px", background: "#f0f8f1", borderRadius: 9, lineHeight: 1.7 }}>
                    <strong style={{ color: "#166534" }}>Pergunta de investigação:</strong> {linha.pergunta}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 30, padding: 25, borderRadius: 15, background: "#edf6ee", border: "1px solid #d7e8da" }}>
            <p className="alf-label">MODELO DE PROTOCOLO CIENTÍFICO</p>
            <h3 style={{ margin: "8px 0 12px", fontSize: 24 }}>Elementos que cada ensaio deve documentar</h3>
            <ul style={{ lineHeight: 2, paddingLeft: 22, marginBottom: 0 }}>
              <li><strong>Identificação:</strong> código do ensaio, instituição, equipa e responsáveis.</li>
              <li><strong>Localização:</strong> província, município, local da exploração, coordenadas e altitude quando disponíveis.</li>
              <li><strong>Ambiente:</strong> datas, temperatura, precipitação, fonte de água e condições do solo.</li>
              <li><strong>Material vegetal:</strong> espécie, cultivar, fornecedor, lote e informações de germinação.</li>
              <li><strong>Desenho experimental:</strong> tratamentos, testemunha, unidade experimental, repetições e randomização.</li>
              <li><strong>Maneio:</strong> preparação do terreno, transplante, densidade, irrigação e operações culturais.</li>
              <li><strong>Indicadores:</strong> crescimento, rendimento total, rendimento comercial, qualidade, perdas e custos.</li>
              <li><strong>Análise:</strong> métodos estatísticos, critérios de validação, variabilidade e limitações.</li>
              <li><strong>Conclusão:</strong> resultados observados, condições de validade e questões que exigem novos estudos.</li>
            </ul>
          </div>

          <div style={{ marginTop: 28 }}>
            <h3 style={{ fontSize: 23 }}>Exemplo de pergunta científica</h3>
            <p className="alf-muted">
              Como varia o rendimento comercial e a eficiência de uso da água
              de diferentes cultivares de alface sob dois regimes de irrigação,
              nas condições agroecológicas do local de estudo?
            </p>
            <p className="alf-muted">
              Para executar o estudo, será necessário definir os tratamentos,
              a testemunha, as repetições, a dimensão das parcelas, os indicadores,
              o método estatístico e os recursos disponíveis. O protocolo deve
              ser ajustado às condições reais do local.
            </p>
          </div>

          <div style={{ marginTop: 28 }}>
            <h3 style={{ fontSize: 23 }}>Exemplo de matriz de indicadores</h3>
            <div className="alf-table-wrap">
              <table className="alf-table">
                <thead>
                  <tr>
                    <th>Indicador</th>
                    <th>Unidade possível</th>
                    <th>Finalidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Altura da planta</td><td>cm</td><td>Acompanhar o crescimento.</td></tr>
                  <tr><td>Número de folhas</td><td>folhas/planta</td><td>Caracterizar o desenvolvimento vegetativo.</td></tr>
                  <tr><td>Massa fresca comercial</td><td>g/planta ou kg/parcela</td><td>Quantificar o produto comercializável.</td></tr>
                  <tr><td>Rendimento comercial</td><td>kg/m² ou t/ha</td><td>Comparar a produtividade comercial.</td></tr>
                  <tr><td>Água aplicada</td><td>L/parcela ou m³/ha</td><td>Avaliar a utilização da água.</td></tr>
                  <tr><td>Incidência de sintomas</td><td>% das unidades avaliadas</td><td>Quantificar a ocorrência segundo uma definição prévia.</td></tr>
                  <tr><td>Perdas comerciais</td><td>kg ou %</td><td>Avaliar rejeições e perdas do lote.</td></tr>
                  <tr><td>Custo de produção</td><td>AOA/lote ou AOA/kg comercial</td><td>Estudar a viabilidade económica.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="alf-muted" style={{ fontSize: 12 }}>
              As unidades apresentadas são exemplos. Cada investigação deve definir
              as unidades, os métodos de medição e os critérios de cálculo antes
              de iniciar a recolha.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#f4f7f4", padding: "48px 0" }}>
        <div className="alf-wrap">
          <p className="alf-label">FERRAMENTA DE CAMPO</p>
          <h2 style={{ fontSize: 32, margin: "8px 0 12px" }}>Lista de verificação da exploração</h2>
          <p className="alf-muted">
            Assinala os pontos verificados durante a preparação ou avaliação
            da cultura. A lista serve de apoio à organização do trabalho.
          </p>
          <div className="alf-card" style={{ padding: 22, marginTop: 20 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
              <strong>Progresso da lista</strong>
              <span className="alf-tag">{tarefasConcluidas} itens assinalados</span>
            </div>
            <div style={{ height: 8, background: "#e2e8e3", borderRadius: 20, overflow: "hidden", marginTop: 13 }}>
              <div style={{ height: "100%", width: `${(tarefasConcluidas / 10) * 100}%`, background: "#166534", transition: "width .2s" }} />
            </div>
            {[
              "Identificar a parcela e o mercado de destino.",
              "Confirmar a origem das sementes e a cultivar.",
              "Avaliar a drenagem e a preparação do terreno.",
              "Verificar a disponibilidade e a qualidade da água.",
              "Definir o sistema de irrigação.",
              "Registar a densidade e o espaçamento.",
              "Preparar os registos de fertilização.",
              "Planear a monitorização fitossanitária.",
              "Preparar recipientes e ferramentas limpas para a colheita.",
              "Organizar os registos de produção, perdas, custos e vendas.",
            ].map((item, i) => (
              <label className="alf-check" key={item}>
                <input
                  type="checkbox"
                  checked={Boolean(fichas[`campo-${i}`])}
                  onChange={(e) => setFichas((prev) => ({ ...prev, [`campo-${i}`]: e.target.checked }))}
                />
                <span>{item}</span>
              </label>
            ))}
            <button
              className="alf-btn"
              onClick={() => setFichas({})}
              style={{ marginTop: 15, border: "1px solid #cbd8cd", background: "#fff", borderRadius: 8, padding: "10px 14px", color: "#166534", fontWeight: 800 }}
            >
              Reiniciar lista
            </button>
            <p style={{ fontSize: 12, color: "#68766b", lineHeight: 1.7, marginBottom: 0 }}>
              Esta lista funciona durante a sessão da página. As marcações não
              são guardadas numa base de dados nem sincronizadas entre dispositivos.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "52px 0" }}>
        <div className="alf-wrap">
          <p className="alf-label">DÚVIDAS FREQUENTES</p>
          <h2 style={{ fontSize: 32, lineHeight: 1.2, margin: "8px 0 22px" }}>Perguntas sobre a cultura</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {perguntas.map((item, i) => (
              <article key={item.pergunta} className="alf-card">
                <button
                  className="alf-btn"
                  onClick={() => setPerguntaAberta(perguntaAberta === i ? null : i)}
                  aria-expanded={perguntaAberta === i}
                  style={{ width: "100%", textAlign: "left", padding: 19, background: "#fff", color: "#1b2b20", display: "flex", gap: 14, alignItems: "center" }}
                >
                  <strong style={{ flex: 1, lineHeight: 1.6 }}>{item.pergunta}</strong>
                  <span style={{ color: "#166534", fontSize: 23 }}>{perguntaAberta === i ? "−" : "+"}</span>
                </button>
                {perguntaAberta === i && (
                  <p className="alf-muted" style={{ padding: "0 19px 19px", margin: 0 }}>{item.resposta}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="referencias" style={{ background: "#123d27", color: "#fff", padding: "44px 0" }}>
        <div className="alf-wrap">
          <p style={{ color: "#bbf7d0", fontWeight: 900, fontSize: 12, letterSpacing: 1.5 }}>BIBLIOGRAFIA E RECURSOS</p>
          <h2 style={{ fontSize: 30, lineHeight: 1.25, margin: "8px 0 16px" }}>Aprofundar o conhecimento científico</h2>
          <p style={{ color: "#e1ede3", lineHeight: 1.85, maxWidth: 850 }}>
            As publicações seguintes constituem pontos de partida para aprofundar
            as boas práticas agrícolas, a identificação de pragas e o manejo de
            problemas fitossanitários. A aplicação das recomendações deve considerar
            as condições locais e as normas em vigor em Angola.
          </p>
          <div style={{ display: "grid", gap: 17, marginTop: 25 }}>
            <div>
              <a href="https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1009227/1/DOC142.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "#bbf7d0", fontWeight: 850, lineHeight: 1.7 }}>
                Embrapa — Manual de boas práticas agrícolas na produção de alface
              </a>
              <p style={{ color: "#dcebe0", fontSize: 13, lineHeight: 1.7, margin: "5px 0 0" }}>
                Referência para higiene, água, prevenção da contaminação e boas práticas agrícolas.
              </p>
            </div>
            <div>
              <a href="https://www.infoteca.cnptia.embrapa.br/infoteca/handle/doc/1127374" target="_blank" rel="noopener noreferrer" style={{ color: "#bbf7d0", fontWeight: 850, lineHeight: 1.7 }}>
                Embrapa — Guia para identificação de pragas da alface
              </a>
              <p style={{ color: "#dcebe0", fontSize: 13, lineHeight: 1.7, margin: "5px 0 0" }}>
                Material de referência para identificação e monitorização de organismos associados à cultura.
              </p>
            </div>
            <div>
              <a href="https://www.infoteca.cnptia.embrapa.br/infoteca/handle/doc/1106839" target="_blank" rel="noopener noreferrer" style={{ color: "#bbf7d0", fontWeight: 850, lineHeight: 1.7 }}>
                Embrapa — Guia para o manejo de pulgões e viroses associadas na cultura da alface
              </a>
              <p style={{ color: "#dcebe0", fontSize: 13, lineHeight: 1.7, margin: "5px 0 0" }}>
                Recurso para aprofundar o estudo de pulgões e problemas fitossanitários associados.
              </p>
            </div>
            <div>
              <a href="https://www.fao.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#bbf7d0", fontWeight: 850, lineHeight: 1.7 }}>
                FAO — Organização das Nações Unidas para a Alimentação e a Agricultura
              </a>
              <p style={{ color: "#dcebe0", fontSize: 13, lineHeight: 1.7, margin: "5px 0 0" }}>
                Recursos internacionais sobre agricultura, segurança alimentar e sistemas de produção.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 27, padding: 17, border: "1px solid rgba(187,247,208,.28)", borderRadius: 12 }}>
            <strong style={{ color: "#bbf7d0" }}>Nota metodológica</strong>
            <p style={{ color: "#e1ede3", lineHeight: 1.8, fontSize: 13, marginBottom: 0 }}>
              Este guia é um recurso de apoio ao conhecimento e não substitui
              protocolos experimentais validados, análises laboratoriais, assistência
              técnica ou regulamentação fitossanitária aplicável em Angola. As
              linhas de investigação apresentadas são propostas de estudo, não
              resultados experimentais nacionais.
            </p>
          </div>
        </div>
      </section>

      <footer style={{ background: "#0d2e1d", color: "#dcebe0", padding: "25px 20px", textAlign: "center" }}>
        <strong>AGROINOVA-ANGOLA</strong>
        <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 0 }}>
          Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
        </p>
      </footer>

      {modal && (
        <div
          className="alf-modal-bg"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setModal(null);
          }}
        >
          <section
            className="alf-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="alface-modal-titulo"
          >
            <div className="alf-modal-head">
              <div style={{ flex: 1, minWidth: 0 }}>
                <p className="alf-label" style={{ margin: "0 0 7px" }}>FICHA TÉCNICA {modal.numero}</p>
                <h2 id="alface-modal-titulo" style={{ margin: 0, fontSize: 25, lineHeight: 1.3 }}>{modal.titulo}</h2>
                <p style={{ color: "#5c6b60", fontSize: 13, lineHeight: 1.7, marginBottom: 0 }}>{modal.resumo}</p>
              </div>
              <button
                className="alf-btn"
                onClick={() => setModal(null)}
                aria-label="Fechar janela"
                style={{ flexShrink: 0, borderRadius: 9, background: "#edf4ee", padding: "8px 13px", fontSize: 23, color: "#166534" }}
              >
                ×
              </button>
            </div>
            <div className="alf-modal-body">
              <div style={{ background: "#edf6ee", borderLeft: "4px solid #166534", borderRadius: 8, padding: 16, margin: "10px 0 22px" }}>
                <p className="alf-label" style={{ margin: "0 0 7px" }}>OBJECTIVO TÉCNICO</p>
                <p style={{ lineHeight: 1.8, margin: 0 }}>{modal.objetivo}</p>
              </div>

              <h3 style={{ fontSize: 20, margin: "22px 0 12px" }}>Fundamentos e orientações</h3>
              {modal.detalhes.map((texto, i) => (
                <p key={i} className="alf-muted" style={{ margin: "0 0 15px" }}>{texto}</p>
              ))}

              <div style={{ background: "#edf6ee", borderRadius: 12, padding: 18, marginTop: 25 }}>
                <h3 style={{ margin: "0 0 8px", color: "#166534", fontSize: 19 }}>Lista de verificação</h3>
                <p style={{ color: "#5c6b60", fontSize: 13, lineHeight: 1.7 }}>
                  Assinala os procedimentos concluídos para este tema.
                </p>
                {modal.tarefas.map((tarefa, i) => {
                  const chave = `${modal.id}-${i}`;
                  return (
                    <label key={chave} className="alf-check">
                      <input
                        type="checkbox"
                        checked={Boolean(fichas[chave])}
                        onChange={(e) => setFichas((prev) => ({ ...prev, [chave]: e.target.checked }))}
                      />
                      <span>{tarefa}</span>
                    </label>
                  );
                })}
              </div>

              <p style={{ color: "#6a776c", fontSize: 12, lineHeight: 1.8, marginTop: 21 }}>
                Orientação técnica geral. A decisão final deve considerar o local,
                os dados disponíveis, a cultivar, o sistema de produção e a
                assistência técnica apropriada. Os resultados experimentais devem
                ser documentados e interpretados segundo o método utilizado.
              </p>
              <button
                className="alf-btn"
                onClick={() => setModal(null)}
                style={{ marginTop: 8, background: "#166534", color: "#fff", borderRadius: 9, padding: "12px 18px", fontWeight: 850 }}
              >
                Fechar e voltar ao guia
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
