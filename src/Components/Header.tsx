// src/components/Header.tsx
import React from "react";
import logo from "../assets/images/logo.png";

export const Header: React.FC = () => (
  <header className="fixed-header">
    <div className="header-content">
      <div className="logo">
        <img src={logo} alt="Logo Let Cordeiro Nails" />
        <span>Let Cordeiro Nails</span>
      </div>

      <div className="contacts">
        <span>📞 929179922 / 216046974</span>
      </div>

      <nav className="menu">
        <a href="#bemvindo">Bem Vindo</a>
        <a href="#servicos">Serviços</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#agendamento">Agendar</a>
        <a href="#contato">Contato</a>
      </nav>
    </div>
  </header>
);
