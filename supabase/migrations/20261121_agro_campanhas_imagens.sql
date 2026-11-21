CREATE TABLE public.agro_campanhas_imagens (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    campanha_id uuid NOT NULL
        REFERENCES public.agro_campanhas(id)
        ON DELETE CASCADE,
    url text NOT NULL,
    caminho_storage text NOT NULL,
    legenda text,
    ordem integer NOT NULL DEFAULT 1,
    criado_em timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_agro_campanhas_imagens_campanha_ordem
    ON public.agro_campanhas_imagens (campanha_id, ordem);