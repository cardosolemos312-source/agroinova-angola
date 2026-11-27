CREATE TABLE IF NOT EXISTS public.pesquisa_culturas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome_cientifico TEXT NOT NULL UNIQUE,
    familia_botanica TEXT,
    genero TEXT,
    especie TEXT,
    subespecie TEXT,
    categoria TEXT NOT NULL,
    grupo_cultura TEXT,
    descricao TEXT,
    origem TEXT,
    distribuicao_geografica TEXT,
    ciclo_vida TEXT,
    clima TEXT,
    solo TEXT,
    necessidades_hidricas TEXT,
    plantio TEXT,
    colheita TEXT,
    fertilizacao TEXT,
    pragas_doencas TEXT,
    utilizacoes TEXT,
    produtividade TEXT,
    observacoes TEXT,
    estado TEXT NOT NULL DEFAULT 'rascunho'
        CHECK (estado IN ('rascunho', 'publicado', 'arquivado')),
    destaque BOOLEAN NOT NULL DEFAULT FALSE,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    actualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.pesquisa_culturas_nomes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cultura_id UUID NOT NULL
        REFERENCES public.pesquisa_culturas(id) ON DELETE CASCADE,
    nome TEXT NOT NULL,
    nome_normalizado TEXT GENERATED ALWAYS AS (LOWER(TRIM(nome))) STORED,
    idioma TEXT NOT NULL DEFAULT 'und',
    regiao TEXT,
    tipo TEXT NOT NULL DEFAULT 'comum'
        CHECK (tipo IN ('comum', 'regional', 'sinonimo', 'alternativo')),
    principal BOOLEAN NOT NULL DEFAULT FALSE,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (cultura_id, nome_normalizado, idioma, tipo)
);

CREATE TABLE IF NOT EXISTS public.pesquisa_culturas_variedades (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cultura_id UUID NOT NULL
        REFERENCES public.pesquisa_culturas(id) ON DELETE CASCADE,
    nome TEXT NOT NULL,
    nome_cientifico TEXT,
    origem TEXT,
    descricao TEXT,
    caracteristicas TEXT,
    ciclo_producao TEXT,
    estado TEXT NOT NULL DEFAULT 'rascunho'
        CHECK (estado IN ('rascunho', 'publicado', 'arquivado')),
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    actualizado_em TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (cultura_id, nome)
);

CREATE TABLE IF NOT EXISTS public.pesquisa_culturas_fontes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo TEXT NOT NULL,
    instituicao TEXT,
    autor TEXT,
    ano INTEGER,
    tipo TEXT,
    url TEXT,
    referencia_bibliografica TEXT,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.pesquisa_culturas_referencias (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cultura_id UUID NOT NULL
        REFERENCES public.pesquisa_culturas(id) ON DELETE CASCADE,
    fonte_id UUID NOT NULL
        REFERENCES public.pesquisa_culturas_fontes(id) ON DELETE CASCADE,
    citacao TEXT,
    UNIQUE (cultura_id, fonte_id)
);

CREATE INDEX IF NOT EXISTS idx_pesquisa_culturas_estado
    ON public.pesquisa_culturas(estado);

CREATE INDEX IF NOT EXISTS idx_pesquisa_culturas_categoria
    ON public.pesquisa_culturas(categoria);

CREATE INDEX IF NOT EXISTS idx_pesquisa_culturas_familia
    ON public.pesquisa_culturas(familia_botanica);

CREATE INDEX IF NOT EXISTS idx_pesquisa_culturas_nomes_normalizado
    ON public.pesquisa_culturas_nomes(nome_normalizado);

CREATE INDEX IF NOT EXISTS idx_pesquisa_culturas_nomes_cultura
    ON public.pesquisa_culturas_nomes(cultura_id);

CREATE INDEX IF NOT EXISTS idx_pesquisa_culturas_variedades_cultura
    ON public.pesquisa_culturas_variedades(cultura_id);

CREATE INDEX IF NOT EXISTS idx_pesquisa_culturas_referencias_cultura
    ON public.pesquisa_culturas_referencias(cultura_id);

ALTER TABLE public.pesquisa_culturas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pesquisa_culturas_nomes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pesquisa_culturas_variedades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pesquisa_culturas_fontes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pesquisa_culturas_referencias ENABLE ROW LEVEL SECURITY;