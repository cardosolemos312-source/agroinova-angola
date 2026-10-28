-- AGROINOVA-ANGOLA
-- Auditoria das decisoes de moderacao do Mercado.
-- Rever a estrutura existente antes de executar esta migracao.

CREATE TABLE IF NOT EXISTS public.mercado_moderacao_auditoria (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    produto_id UUID,
    acao TEXT NOT NULL CHECK (
        acao IN (
            'bloqueio_automatico',
            'aprovacao',
            'rejeicao',
            'remocao',
            'sinalizacao'
        )
    ),
    origem TEXT NOT NULL CHECK (
        origem IN ('automatica', 'administrador', 'sistema')
    ),
    motivo TEXT NOT NULL,
    nome_produto TEXT,
    responsavel TEXT,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS
    idx_mercado_moderacao_auditoria_produto
ON public.mercado_moderacao_auditoria (produto_id);

CREATE INDEX IF NOT EXISTS
    idx_mercado_moderacao_auditoria_data
ON public.mercado_moderacao_auditoria (criado_em DESC);

ALTER TABLE public.mercado_moderacao_auditoria
    ENABLE ROW LEVEL SECURITY;

-- Nao criar politicas de acesso publico.
-- As operacoes serao realizadas exclusivamente no servidor
-- atraves da API administrativa autenticada.