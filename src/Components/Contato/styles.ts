import styled from "styled-components";

export const Section = styled.section`
  padding: 48px 0;
  background: #26364d;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  @media (max-width: 480px) {
        font-size: 1.7rem;
    }
  `;

export const Subtitulo = styled.p`
  font-size: 1.2rem;
  color: #ededed;
  line-height: 1.6;
  margin-bottom: 40px;
  @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin-top: 1.5rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: #fafafa;
  border-radius: 12px;
  padding: 18px 24px;
  min-width: 220px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  cursor: pointer;
  @media (max-width: 480px) {
    min-width: 180px;
    max-width: 330px;
    padding: 15px 18px;
    gap: 13px;
  }
`;

export const Icon = styled.i`
  font-size: 2rem;
  color: #e91e63;
  margin-top: 4px;
`;

export const Info = styled.div`
  text-align: left;
  font-size: 1rem;
`;

export const Link = styled.a`
  color: #e91e63;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;