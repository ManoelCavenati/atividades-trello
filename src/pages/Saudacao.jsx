import { useState } from "react";
import PropTypes from "prop-types";

function Saudacao({ nomeInicial }) {
  const [nome, setNome] = useState(nomeInicial);

  const mudarNome = () => {
    setNome(nome === "João" ? "Maria" : "João");
  };

  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <button onClick={mudarNome}>Mudar Nome</button>
    </div>
  );
}

Saudacao.propTypes = {
  nomeInicial: PropTypes.string.isRequired,
};

export default Saudacao;
