import styled from "styled-components";

export const FixedHeader = styled.div`
  width: 100%;
  height: 110px;
  background-color: #ededed;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  @media (max-width: 768px) {
      height: 90px;
    }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 20px;

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const LogoText = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: #26364d;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.nav`
  display: flex;
  gap: 18px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const MenuLink = styled.a`
  color: #26364d;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.2s;
  border-radius: 6px;
  padding: 0.5rem 1rem;

  &:hover {
    color: #ededed;
    background-color: #4f6d89;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  @media (max-width: 425px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
  }
`;
