import React from "react";
import { Card, Imagem, Titulo, Descricao, Preco } from "./styles";

interface Props {
  imagem: string;
  alt: string;
  titulo: string;
  descricao: string;
  preco: string;
}

export const ServicoCard: React.FC<Props> = ({ imagem, alt, titulo, descricao, preco }) => {
  
  return (
  <Card>
    <Imagem>
      <img src={imagem} alt={alt} />
    </Imagem>
    <Titulo>{titulo}</Titulo>
    <Descricao>{descricao}</Descricao>
    <Preco>{preco}</Preco>
  </Card>
)
};