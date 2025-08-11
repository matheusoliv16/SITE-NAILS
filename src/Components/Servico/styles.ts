import { styled } from "styled-components";

export const ServicesContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h2`
    font-size: 2.5rem;
    color: #fff;
    @media (max-width: 480px) {
        font-size: 1.7rem;
    }
`

export const Subtitle = styled.p`
    font-size: 1.2rem;
    color: white;
    @media (max-width: 480px) {
        font-size: 1rem;
    }
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, auto);
    gap: 1.5rem;
    margin-top: 1.5rem;
    max-width: 825px;
    @media (max-width: 1024px) {
        max-width: 750px;
    }
    @media (max-width: 768px) {
        max-width: 400px;
        margin-top: 1.2rem;
        gap: 1.2rem;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, auto);
    }
    @media (max-width: 480px) {
        max-width: 330px;
        margin-top: 1.2rem;
        gap: 1.2rem;
        
    }
`