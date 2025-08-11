
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:25px;
  padding: 48px 0;
  color: white;
  @media (max-width: 1024px) {
    gap:20px;
  }
  @media (max-width: 768px) {
    gap:30px;
    flex-direction : column;
    justify-content: center;
  }
`;

export const Texto = styled.div`
  width: 450px;
  @media (max-width: 1024px) {
      width: 350px;
  }
  @media (max-width: 768px) {
    width: 400px;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 480px) {
    max-width: 330px;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
   } 
  h2 {
    font-size: 2.5rem;
    margin-bottom: 16px;
    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }
    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 24px;
    @media (max-width: 1024px) {
      font-size: 1rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
  
`;

export const BotaoAgendar = styled.a`
  display: inline-block;
  background-color: #e5ba73;
  width: fit-content;
  color: #fff;
  padding: 12px 32px;
  border-radius: 24px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
  &:hover {
    background-color: #d0a45f;
  }
  @media (max-width: 1024px) {
    padding: 10px 28px;
  }
  @media (max-width: 480px) {
    padding: 8px 24px;    
  }
`;

export const Imagem = styled.div`
  img {
    max-width: 350px;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    @media (max-width: 1024px) {
    max-width: 380px;
   } 
   @media (max-width: 768px) {
   
    max-width: 400px;
   } 
   @media (max-width: 480px) {
    max-width: 330px;
   } 
  }

`;