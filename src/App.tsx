// src/App.tsx
import React from "react";
import { Header } from "./Components/Header";
import { BemVindo } from "./Components/BemVindo";
import { Servicos } from "./Components/Servico";
import { Portfolio } from "./Components/Portifolio";
import { Agendamento } from "./Components/Agendamentos";
import { Contato } from "./Components/Contato";
import Layout from "./Layout";

const App: React.FC = () => (
  <Layout/>
);

export default App;
