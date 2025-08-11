import styled from "styled-components";

export const Card = styled.div`
  background: #ededed;;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 24px;
  text-align: center;
  box-sizing: border-box;
  max-width: 100%; /* evita estourar a coluna */
  overflow: hidden; /* evita conteúdo extra passar */
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-8px);
  }
  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const Imagem = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;

  img {
    width: 90px;
    height: 90px;
    max-width: 100%; /* garante que não estoure */
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
`;

export const Titulo = styled.h3`
  font-size: 1.2rem;
  color: #26364d;
  margin-bottom: 8px;
`;

export const Descricao = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 12px;
`;

export const Preco = styled.span`
  display: block;
  font-size: 1.1rem;
  font-weight: 700;
  color: #26364d;
  margin-top: 8px;
`;
