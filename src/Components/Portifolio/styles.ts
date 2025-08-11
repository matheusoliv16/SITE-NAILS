import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  background-color: #26364d;
  padding: 60px 20px;
`;

export const Title = styled.h2`
   font-size: 2.5rem;
  margin-bottom: 10px;
  color: #ededed;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 32px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  justify-items: center;
`;

export const Item = styled.div`
  background: #fafafa;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 12px;
  width: 100%;
  max-width: 260px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;