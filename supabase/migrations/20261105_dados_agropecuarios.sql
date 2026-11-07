
-- =========================================================
-- AGROINOVA ANGOLA
-- Módulo Nacional de Dados Agropecuários e Investigação
-- Migração: 20261105_dados_agropecuarios.sql
-- =========================================================

-- 1. FONTES DE INFORMAÇÃO
CREATE TABLE IF NOT EXISTS public.agro_fontes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo TEXT NOT NULL,
    entidade TEXT,
    tipo TEXT NOT NULL DEFAULT 'bibliografica'
        CHECK (tipo IN (
            'oficial',
            'cientifica',
            'bibliografica',
            'institucional',
            'campo',
            'outra'
        )),
    autor TEXT,
    ano INTEGER CHECK (ano IS NULL OR ano BETWEEN 1900 AND 2200),
    url TEXT,
    referencia TEXT,
    observacoes TEXT,
    criada_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. CONJUNTOS DE DADOS
CREATE TABLE IF NOT EXISTS public.agro_datasets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo TEXT NOT NULL,
    descricao TEXT,
    categoria TEXT NOT NULL,
    subcategoria TEXT,
    periodo_inicio DATE,
    periodo_fim DATE,
    escala TEXT NOT NULL DEFAULT 'nacional'
        CHECK (escala IN (
            'nacional',
            'provincial',
            'municipal',
            'comunal',
            'exploracao',
            'experimental'
        )),
    natureza TEXT NOT NULL DEFAULT 'estatistica_oficial'
        CHECK (natureza IN (
            'estatistica_oficial',
            'investigacao',
            'observacao_campo',
            'estimativa',
            'administrativa'
        )),
    estado TEXT NOT NULL DEFAULT 'rascunho'
        CHECK (estado IN ('rascunho', 'publicado', 'arquivado')),
    responsavel TEXT,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    actualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CHECK (
        periodo_inicio IS NULL
        OR periodo_fim IS NULL
        OR periodo_fim >= periodo_inicio
    )
);

-- 3. INDICADORES
CREATE TABLE IF NOT EXISTS public.agro_indicadores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    dataset_id UUID REFERENCES public.agro_datasets(id)
        ON DELETE SET NULL,
    codigo TEXT UNIQUE,
    nome TEXT NOT NULL,
    descricao TEXT,
    categoria TEXT NOT NULL,
    subcategoria TEXT,
    unidade TEXT NOT NULL,
    formula TEXT,
    periodicidade TEXT,
    natureza TEXT NOT NULL DEFAULT 'estatistica_oficial'
        CHECK (natureza IN (
            'estatistica_oficial',
            'investigacao',
            'observacao_campo',
            'estimativa',
            'administrativa'
        )),
    estado TEXT NOT NULL DEFAULT 'rascunho'
        CHECK (estado IN ('rascunho', 'publicado', 'arquivado')),
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    actualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. OBSERVAÇÕES E VALORES
CREATE TABLE IF NOT EXISTS public.agro_observacoes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    indicador_id UUID NOT NULL
        REFERENCES public.agro_indicadores(id) ON DELETE CASCADE,
    dataset_id UUID REFERENCES public.agro_datasets(id)
        ON DELETE SET NULL,
    provincia TEXT,
    municipio TEXT,
    comuna TEXT,
    localidade TEXT,
    entidade TEXT,
    exploracao TEXT,
    periodo_inicio DATE,
    periodo_fim DATE,
    data_referencia DATE,
    valor NUMERIC(24, 6) NOT NULL,
    unidade TEXT NOT NULL,
    tamanho_amostra INTEGER CHECK (
        tamanho_amostra IS NULL OR tamanho_amostra >= 0
    ),
    margem_erro NUMERIC(12, 6),
    nivel_confianca NUMERIC(5, 2) CHECK (
        nivel_confianca IS NULL
        OR nivel_confianca BETWEEN 0 AND 100
    ),
    metodologia TEXT,
    natureza TEXT NOT NULL DEFAULT 'estatistica_oficial'
        CHECK (natureza IN (
            'estatistica_oficial',
            'investigacao',
            'observacao_campo',
            'estimativa',
            'administrativa'
        )),
    estado TEXT NOT NULL DEFAULT 'rascunho'
        CHECK (estado IN ('rascunho', 'validado', 'publicado', 'rejeitado')),
    observacoes TEXT,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    actualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CHECK (
        periodo_inicio IS NULL
        OR periodo_fim IS NULL
        OR periodo_fim >= periodo_inicio
    )
);

-- 5. ESTUDOS E INVESTIGAÇÃO
CREATE TABLE IF NOT EXISTS public.agro_estudos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo TEXT NOT NULL,
    resumo TEXT,
    objectivo TEXT,
    categoria TEXT NOT NULL,
    subcategoria TEXT,
    autores TEXT,
    instituicao TEXT,
    provincia TEXT,
    municipio TEXT,
    comuna TEXT,
    localidade TEXT,
    data_inicio DATE,
    data_fim DATE,
    metodologia TEXT,
    materiais_metodos TEXT,
    resultados TEXT,
    discussao TEXT,
    conclusoes TEXT,
    recomendacoes TEXT,
    limitacoes TEXT,
    palavras_chave TEXT[],
    documento_url TEXT,
    natureza TEXT NOT NULL DEFAULT 'investigacao'
        CHECK (natureza IN (
            'investigacao',
            'ensaio_campo',
            'estudo_caso',
            'relatorio_tecnico',
            'observacao'
        )),
    estado TEXT NOT NULL DEFAULT 'rascunho'
        CHECK (estado IN ('rascunho', 'em_validacao', 'publicado', 'arquivado')),
    destaque BOOLEAN NOT NULL DEFAULT FALSE,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    actualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CHECK (
        data_inicio IS NULL
        OR data_fim IS NULL
        OR data_fim >= data_inicio
    )
);

-- 6. IMAGENS DOS ESTUDOS
CREATE TABLE IF NOT EXISTS public.agro_estudos_imagens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    estudo_id UUID NOT NULL
        REFERENCES public.agro_estudos(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    legenda TEXT,
    descricao TEXT,
    provincia TEXT,
    municipio TEXT,
    data_registo DATE,
    ordem INTEGER NOT NULL DEFAULT 0,
    criada_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. RELAÇÃO ENTRE ESTUDOS E FONTES
CREATE TABLE IF NOT EXISTS public.agro_estudos_fontes (
    estudo_id UUID NOT NULL
        REFERENCES public.agro_estudos(id) ON DELETE CASCADE,
    fonte_id UUID NOT NULL
        REFERENCES public.agro_fontes(id) ON DELETE CASCADE,
    citacao TEXT,
    PRIMARY KEY (estudo_id, fonte_id)
);

-- 8. RELAÇÃO ENTRE CONJUNTOS DE DADOS E FONTES
CREATE TABLE IF NOT EXISTS public.agro_datasets_fontes (
    dataset_id UUID NOT NULL
        REFERENCES public.agro_datasets(id) ON DELETE CASCADE,
    fonte_id UUID NOT NULL
        REFERENCES public.agro_fontes(id) ON DELETE CASCADE,
    citacao TEXT,
    PRIMARY KEY (dataset_id, fonte_id)
);

-- =========================================================
-- ÍNDICES
-- =========================================================

CREATE INDEX IF NOT EXISTS idx_agro_datasets_categoria
ON public.agro_datasets(categoria);

CREATE INDEX IF NOT EXISTS idx_agro_datasets_estado
ON public.agro_datasets(estado);

CREATE INDEX IF NOT EXISTS idx_agro_indicadores_categoria
ON public.agro_indicadores(categoria);

CREATE INDEX IF NOT EXISTS idx_agro_indicadores_dataset
ON public.agro_indicadores(dataset_id);

CREATE INDEX IF NOT EXISTS idx_agro_observacoes_indicador
ON public.agro_observacoes(indicador_id);

CREATE INDEX IF NOT EXISTS idx_agro_observacoes_provincia
ON public.agro_observacoes(provincia);

CREATE INDEX IF NOT EXISTS idx_agro_observacoes_periodo
ON public.agro_observacoes(data_referencia);

CREATE INDEX IF NOT EXISTS idx_agro_observacoes_estado
ON public.agro_observacoes(estado);

CREATE INDEX IF NOT EXISTS idx_agro_estudos_categoria
ON public.agro_estudos(categoria);

CREATE INDEX IF NOT EXISTS idx_agro_estudos_provincia
ON public.agro_estudos(provincia);

CREATE INDEX IF NOT EXISTS idx_agro_estudos_estado
ON public.agro_estudos(estado);

CREATE INDEX IF NOT EXISTS idx_agro_estudos_imagens_estudo
ON public.agro_estudos_imagens(estudo_id);

-- =========================================================
-- SEGURANÇA: ROW LEVEL SECURITY
-- =========================================================

ALTER TABLE public.agro_fontes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agro_datasets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agro_indicadores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agro_observacoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agro_estudos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agro_estudos_imagens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agro_estudos_fontes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agro_datasets_fontes ENABLE ROW LEVEL SECURITY;

-- Sem políticas públicas.
-- A leitura pública será disponibilizada por API controlada.
-- As operações administrativas serão feitas no servidor,
-- através de administradorAutenticado() e obterSupabaseAdmin().

-- =========================================================
-- FIM DA MIGRAÇÃO
-- =========================================================
