import React from "react";
import {
  Section,
  Subtitulo,
  Container,
  Item,
  Icon,
  Info,
  Link,
  Title
} from "./styles";

export const Contato: React.FC = () => (
  <Section id="contato">
    <Title>Contato</Title>
    <Subtitulo>Fale conosco ou venha nos visitar</Subtitulo>
    <Container>
      <Item>
        <Icon className="fas fa-map-marker-alt" />
        <Info>
          <strong>Endereço:</strong><br />
          <Link href="https://share.google/hJnXRZDNy0ayCVABw" target="_blank" rel="noreferrer">
            Rua Joaquim Frota, 1200 — Fortaleza, CE 
          </Link>
        </Info>
      </Item>
      <Item>
        <Icon className="fab fa-whatsapp" />
        <Info>
          <strong>WhatsApp:</strong><br />
          <Link href="https://wa.me/558592950332" target="_blank" rel="noreferrer">(85) 9295-0332</Link>
        </Info>
      </Item> 
      <Item>
        <Icon className="fab fa-instagram" />
        <Info>
          <strong>Instagram:</strong><br />
          <Link href="https://www.instagram.com/letcordeironails/" target="_blank" rel="noreferrer">@letcordeironails</Link>
        </Info>
      </Item>
      <Item>
        <Icon className="fab fa-tiktok" />
        <Info>
          <strong>TikTok:</strong><br />
          <Link href="https://www.tiktok.com/@letcordeironails" target="_blank" rel="noreferrer">@letcordeironails</Link>
        </Info>
      </Item>
    </Container>
  </Section>
);