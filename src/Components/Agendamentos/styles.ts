import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  padding: 40px 0;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  max-width: 400px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 320px;
  padding: 10px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
`;

export const Select = styled.select`
  width: 100%;
  max-width: 320px;
  padding: 10px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  background: #fafafa;
`;

export const Button = styled.button`
  background: #e91e63;
  color: #fff;
  padding: 12px 32px;
  border: none;
  border-radius: 24px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ad1457;
  }
`;