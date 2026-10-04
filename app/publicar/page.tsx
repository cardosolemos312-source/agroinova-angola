"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function PublicarPage() {
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState("");
  const [erro, setErro] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setEnviando(true);
    setSucesso("");
    setErro("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const resposta = await fetch("/api/submissoes", {
        method: "POST",
        body: formData,
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          resultado?.erro || "Não foi possível enviar o trabalho."
        );
      }

      setSucesso(
        `Trabalho submetido com sucesso. Número da submissão: ${resultado.id}`
      );

      form.reset();
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao enviar o trabalho."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="publicar-page">

      {/* HERO */}
      <section className="publicar-hero">
        <div className="publicar-container">
          <span className="publicar-kicker">
            REPOSITÓRIO AGROINOVA
          </span>

          <h1>
            Partilhe o seu trabalho com a comunidade agropecuária.
          </h1>

          <p>
            Submeta artigos científicos, teses, dissertações,
            monografias e relatórios técnicos para análise e
            possível publicação no Repositório AGROINOVA ANGOLA.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="publicar-info">
        <div className="publicar-container">

          <div className="publicar-heading">
            <span className="publicar-label">
              COMO FUNCIONA
            </span>

            <h2>
              Antes de submeter o seu trabalho
            </h2>

            <p>
              O processo de submissão foi pensado para organizar,
              identificar e dar visibilidade à produção científica
              e técnica relacionada com o sector agropecuário.
            </p>
          </div>

          <div className="publicar-passos">

            <div className="publicar-passo">
              <span>01</span>

              <div>
                <h3>Preencha os dados</h3>

                <p>
                  Informe o título, autor, instituição, área,
                  palavras-chave e outras informações sobre o trabalho.
                </p>
              </div>
            </div>

            <div className="publicar-passo">
              <span>02</span>

              <div>
                <h3>Envie o documento</h3>

                <p>
                  Anexe o ficheiro do trabalho em formato PDF para
                  análise documental.
                </p>
              </div>
            </div>

            <div className="publicar-passo">
              <span>03</span>

              <div>
                <h3>Análise</h3>

                <p>
                  A equipa responsável verifica os dados e a
                  conformidade documental da submissão.
                </p>
              </div>
            </div>

            <div className="publicar-passo">
              <span>04</span>

              <div>
                <h3>Publicação</h3>

                <p>
                  Os trabalhos aprovados são disponibilizados no
                  Repositório AGROINOVA.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="publicar-form-section">
        <div className="publicar-container">

          <div className="publicar-form-box">

            <div className="publicar-form-header">
              <span className="publicar-label">
                SUBMISSÃO DE TRABALHO
              </span>

              <h2>
                Dados do trabalho
              </h2>

              <p>
                Preencha os campos abaixo. Os campos marcados com *
                são obrigatórios.
              </p>
            </div>

            {/* MENSAGEM DE SUCESSO */}
            {sucesso && (
              <div className="publicar-mensagem publicar-sucesso">
                <strong>
                  Submissão recebida.
                </strong>

                <span>
                  {sucesso}
                </span>

                <span>
                  O trabalho ficará em análise antes de qualquer publicação.
                </span>
              </div>
            )}

            {/* MENSAGEM DE ERRO */}
            {erro && (
              <div className="publicar-mensagem publicar-erro">
                <strong>
                  Não foi possível enviar.
                </strong>

                <span>
                  {erro}
                </span>
              </div>
            )}

            <form
              className="publicar-form"
              onSubmit={handleSubmit}
            >

              {/* TIPO */}
              <div className="publicar-field">
                <label htmlFor="tipo">
                  Tipo de trabalho *
                </label>

                <select
                  id="tipo"
                  name="tipo"
                  required
                >
                  <option value="">
                    Seleccione o tipo de trabalho
                  </option>

                  <option value="artigo">
                    Artigo científico
                  </option>

                  <option value="tese">
                    Tese
                  </option>

                  <option value="dissertacao">
                    Dissertação
                  </option>

                  <option value="monografia">
                    Monografia
                  </option>

                  <option value="relatorio">
                    Relatório técnico
                  </option>

                  <option value="outro">
                    Outro
                  </option>
                </select>
              </div>

              {/* TÍTULO */}
              <div className="publicar-field">
                <label htmlFor="titulo">
                  Título do trabalho *
                </label>

                <input
                  id="titulo"
                  name="titulo"
                  type="text"
                  placeholder="Digite o título completo do trabalho"
                  required
                />
              </div>

              {/* AUTOR / INSTITUIÇÃO */}
              <div className="publicar-grid-2">

                <div className="publicar-field">
                  <label htmlFor="autor">
                    Autor principal *
                  </label>

                  <input
                    id="autor"
                    name="autor"
                    type="text"
                    placeholder="Nome completo"
                    required
                  />
                </div>

                <div className="publicar-field">
                  <label htmlFor="instituicao">
                    Instituição
                  </label>

                  <input
                    id="instituicao"
                    name="instituicao"
                    type="text"
                    placeholder="Universidade, instituto ou organização"
                  />
                </div>

              </div>

              {/* EMAIL / ORCID */}
              <div className="publicar-grid-2">

                <div className="publicar-field">
                  <label htmlFor="email">
                    E-mail *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    required
                  />
                </div>

                <div className="publicar-field">
                  <label htmlFor="orcid">
                    ORCID
                  </label>

                  <input
                    id="orcid"
                    name="orcid"
                    type="text"
                    placeholder="Opcional"
                  />
                </div>

              </div>

              {/* ÁREA / PROVÍNCIA */}
              <div className="publicar-grid-2">

                <div className="publicar-field">
                  <label htmlFor="area">
                    Área do conhecimento *
                  </label>

                  <select
                    id="area"
                    name="area"
                    required
                  >
                    <option value="">
                      Seleccione uma área
                    </option>

                    <option value="agricultura">
                      Agricultura
                    </option>

                    <option value="pecuaria">
                      Pecuária
                    </option>

                    <option value="solos">
                      Solos
                    </option>

                    <option value="irrigacao">
                      Irrigação
                    </option>

                    <option value="clima">
                      Clima
                    </option>

                    <option value="mecanizacao">
                      Mecanização agrícola
                    </option>

                    <option value="agroindustria">
                      Agroindústria
                    </option>

                    <option value="economia">
                      Economia agrícola
                    </option>

                    <option value="desenvolvimento-rural">
                      Desenvolvimento rural
                    </option>

                    <option value="ambiente">
                      Ambiente
                    </option>
                  </select>
                </div>

                <div className="publicar-field">
                  <label htmlFor="provincia">
                    Província
                  </label>

                  <select
                    id="provincia"
                    name="provincia"
                  >
                    <option value="">
                      Seleccione uma província
                    </option>

                    <option value="bengo">
                      Bengo
                    </option>

                    <option value="benguela">
                      Benguela
                    </option>

                    <option value="bie">
                      Bié
                    </option>

                    <option value="cabinda">
                      Cabinda
                    </option>

                    <option value="cuando">
                      Cuando
                    </option>

                    <option value="cubango">
                      Cubango
                    </option>

                    <option value="cuanza-norte">
                      Cuanza Norte
                    </option>

                    <option value="cuanza-sul">
                      Cuanza Sul
                    </option>

                    <option value="cunenen">
                      Cunene
                    </option>

                    <option value="huambo">
                      Huambo
                    </option>

                    <option value="huila">
                      Huíla
                    </option>

                    <option value="icolo-e-bengo">
                      Icolo e Bengo
                    </option>

                    <option value="luanda">
                      Luanda
                    </option>

                    <option value="lunda-norte">
                      Lunda Norte
                    </option>

                    <option value="lunda-sul">
                      Lunda Sul
                    </option>

                    <option value="malanje">
                      Malanje
                    </option>

                    <option value="moxico">
                      Moxico
                    </option>

                    <option value="moxico-leste">
                      Moxico Leste
                    </option>

                    <option value="namibe">
                      Namibe
                    </option>

                    <option value="uige">
                      Uíge
                    </option>

                    <option value="zaire">
                      Zaire
                    </option>
                  </select>
                </div>

              </div>

              {/* ANO */}
              <div className="publicar-field">
                <label htmlFor="ano">
                  Ano de publicação *
                </label>

                <input
                  id="ano"
                  name="ano"
                  type="number"
                  min="1900"
                  max="2100"
                  placeholder="Ex.: 2026"
                  required
                />
              </div>

              {/* PALAVRAS-CHAVE */}
              <div className="publicar-field">
                <label htmlFor="palavras-chave">
                  Palavras-chave
                </label>

                <input
                  id="palavras-chave"
                  name="palavras-chave"
                  type="text"
                  placeholder="Ex.: milho, agricultura familiar, produtividade"
                />

                <small>
                  Separe as palavras-chave por vírgulas.
                </small>
              </div>

              {/* RESUMO */}
              <div className="publicar-field">
                <label htmlFor="resumo">
                  Resumo *
                </label>

                <textarea
                  id="resumo"
                  name="resumo"
                  rows={7}
                  placeholder="Apresente brevemente o conteúdo, objectivos e principais resultados do trabalho."
                  required
                />
              </div>

              {/* FICHEIRO */}
              <div className="publicar-field">
                <label htmlFor="ficheiro">
                  Documento PDF *
                </label>

                <div className="publicar-upload">

                  <input
                    id="ficheiro"
                    name="ficheiro"
                    type="file"
                    accept=".pdf,application/pdf"
                    required
                  />

                  <p>
                    Formato aceite: PDF.
                    Tamanho máximo: 20 MB.
                  </p>

                </div>
              </div>

              {/* DECLARAÇÃO */}
              <div className="publicar-declaracao">

                <label>

                  <input
                    type="checkbox"
                    name="declaracao"
                    required
                  />

                  <span>
                    Declaro que sou autor ou estou autorizado a
                    submeter este trabalho e que as informações
                    fornecidas são verdadeiras.
                  </span>

                </label>

              </div>

              {/* BOTÃO */}
              <div className="publicar-submit">

                <button
                  type="submit"
                  disabled={enviando}
                >
                  {enviando
                    ? "A enviar trabalho..."
                    : "Submeter trabalho"}
                </button>

                <p>
                  A submissão não significa publicação automática.
                  O trabalho será analisado antes de ser disponibilizado.
                </p>

              </div>

            </form>

          </div>
        </div>
      </section>

      {/* AVISO */}
      <section className="publicar-aviso">
        <div className="publicar-container">

          <div className="publicar-aviso-box">

            <div>

              <span className="publicar-label">
                IMPORTANTE
              </span>

              <h2>
                Submissão e análise documental
              </h2>

              <p>
                O Repositório AGROINOVA tem como objectivo organizar
                e dar visibilidade à produção científica, técnica e
                académica relacionada com o sector agropecuário.
                A publicação de um documento dependerá da análise
                da submissão e do cumprimento dos requisitos definidos
                pela plataforma.
              </p>

            </div>

            <Link
              href="/biblioteca"
              className="publicar-voltar"
            >
              Voltar à Biblioteca →
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}