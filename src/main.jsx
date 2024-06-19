import React from "react";
import { createRoot } from "react-dom/client";
import Contador from "./pages/Contador";
import Saudacao from "./pages/Saudacao";
import Mensagens from "./pages/Mensagens";
import SelecaoCor from "./pages/SelecaoCor"; // Importe o novo componente

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Saudacao nomeInicial="João" />
    <Contador />
    <Mensagens mensagensIniciais={["Bem-vindo!", "Deixe sua mensagem."]} />
    <SelecaoCor /> {/* Adicione o componente SelecaoCor */}
  </React.StrictMode>
);
