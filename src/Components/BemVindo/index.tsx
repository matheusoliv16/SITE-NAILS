import React from "react";
import imagemBemVindo from "../../assets/images/bemvindo.png";
import { Section, Texto, BotaoAgendar, Imagem } from "./styles";

export const BemVindo: React.FC = () => (
  <Section id="bemvindo">
    <Texto>
      <h2>Bem-vindo à Let Cordeiro Nails</h2>
      <p>
        Somos especializados em alongamento em acrílico, esmaltação em gel e nail design moderno.
        Cuidamos das suas unhas com técnica, criatividade e carinho — garantindo sempre as últimas tendências para você.
      </p>
      <BotaoAgendar href="#contato">Entre em Contato</BotaoAgendar>
    </Texto>
    <Imagem>
      <img src={imagemBemVindo} alt="Atendimento Let Cordeiro Nails" />
    </Imagem>
  </Section>
);