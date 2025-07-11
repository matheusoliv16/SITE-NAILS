// src/components/BemVindo.tsx
import React from "react";
import imagemBemVindo from "../assets/images/bemvindo.png";

export const BemVindo: React.FC = () => (
  <section id="bemvindo" className="bemvindo-section section">
    <div className="bemvindo-texto">
      <h2>Bem-vindo à Let Cordeiro Nails</h2>
      <p>
        Somos especializados em alongamento em acrílico, esmaltação em gel e nail design moderno.
        Cuidamos das suas unhas com técnica, criatividade e carinho — garantindo sempre as últimas tendências para você.
      </p>
      <a href="#agendamento" className="botao-agendar">Agendar agora</a>
    </div>

    <div className="bemvindo-imagem">
      <img src={imagemBemVindo} alt="Atendimento Let Cordeiro Nails" />
    </div>
  </section>
);
