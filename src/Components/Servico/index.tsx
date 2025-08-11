// src/components/Servicos.tsx
import React from "react";
import { ServicoCard } from "../ServicoCard";
import acrilico from "../../assets/images/acrilico.png";
import gel from "../../assets/images/gel.png";
import manutencao from "../../assets/images/manutencao.png";
import blindagem from "../../assets/images/blindagem.png";
import { ServicesContainer, Title, CardsContainer, Subtitle } from "./styles";

export const Servicos: React.FC = () => (
  <ServicesContainer id="servicos">
    <Title>Serviços</Title>
    <Subtitle className="subtitulo-servicos">Escolha a opção ideal para realçar sua beleza!</Subtitle>

    <CardsContainer >
      <ServicoCard
        imagem={acrilico}
        alt="Alongamento em acrílico"
        titulo="Alongamento em Acrílico"
        descricao="Alongamento com efeito natural, modelado de acordo com o seu estilo. Não necessita de UV."
        preco="R$ 100,00"
      />
      <ServicoCard
        imagem={gel}
        alt="Esmaltação em gel"
        titulo="Esmaltação em Gel"
        descricao="Esmaltação duradoura com acabamento impecável e brilho intenso."
        preco="R$ 50,00"
      />
      <ServicoCard
        imagem={manutencao}
        alt="Manutenção"
        titulo="Manutenção"
        descricao="Correção e renovação para alongamentos ou esmaltação, mantendo suas unhas impecáveis."
        preco="R$ 75,00"
      />
      <ServicoCard
        imagem={blindagem}
        alt="Blindagem em acrílico"
        titulo="Blindagem em Acrílico"
        descricao="Proteção da unha natural com camada acrílica, conferindo resistência e durabilidade."
        preco="R$ 75,00"
      />
    </CardsContainer>
  </ServicesContainer>
);