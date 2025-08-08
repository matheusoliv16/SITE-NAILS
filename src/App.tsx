// src/App.tsx
import React from "react";
import "./styles/main.css";
import Header from "./Components/Header/index";
import { BemVindo } from "./Components/BemVindo";
import { Servicos } from "./Components/Servicos";
import { Portfolio } from "./Components/Portfolio";
import { Agendamento } from "./Components/Agendamento";
import { Contato } from "./Components/Contato";
import Layout from "./Layout";

const App: React.FC = () => (
    <Layout/>
);

export default App;
