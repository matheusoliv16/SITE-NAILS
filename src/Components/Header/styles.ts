import styled from "styled-components";

interface LogoProps {
  imageUrl: string;
}

export const HeaderContainer = styled.div`
    height:120px;
    width: 100%;
    background-color: black;
    padding:20px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 2rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #26364d;
`

export const Logo = styled.div<LogoProps>`
    width: 250px;
    height: 120px;
    background-image: ${props => `url(${props.imageUrl})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`



