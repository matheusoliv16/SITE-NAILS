// src/components/ServicoCard.tsx
import React from "react";

interface Props {
  imagem: string;
  alt: string;
  titulo: string;
  descricao: string;
  preco: string;
}

export const ServicoCard: React.FC<Props> = ({ imagem, alt, titulo, descricao, preco }) => (
  <div className="servico-card">
    <div className="servico-imagem">
      <img src={imagem} alt={alt} />
    </div>
    <h3>{titulo}</h3>
    <p>{descricao}</p>
    <span className="preco">{preco}</span>
  </div>
);
    