// src/App.tsx
import React from "react";
import "./styles/main.css";
import { Header } from "./components/Header";
import { BemVindo } from "./components/BemVindo";
import { Servicos } from "./components/Servicos";
import { Portfolio } from "./components/Portfolio";
import { Agendamento } from "./components/Agendamento";
import { Contato } from "./components/Contato";

const App: React.FC = () => (
  <>
    <Header />
    <BemVindo />
    <Servicos />
    <Portfolio />
    <Agendamento />
    <Contato />
    <footer>
      <p>&copy; 2025 Let Cordeiro Nails. Todos os direitos reservados.</p>
    </footer>
  </>
);

export default App;
