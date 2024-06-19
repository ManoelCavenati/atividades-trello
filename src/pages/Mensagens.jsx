import { useState } from "react";
import PropTypes from "prop-types";

function Mensagens({ mensagensIniciais }) {
  const [mensagens, setMensagens] = useState(mensagensIniciais);
  const [novaMensagem, setNovaMensagem] = useState("");

  const handleNovaMensagem = (e) => {
    setNovaMensagem(e.target.value);
  };

  const adicionarMensagem = () => {
    if (novaMensagem.trim()) {
      setMensagens([...mensagens, novaMensagem]);
      setNovaMensagem("");
    }
  };

  return (
    <div>
      <h2>Mensagens</h2>
      {mensagens.map((mensagem, index) => (
        <p key={index}>{mensagem}</p>
      ))}
      <input
        type="text"
        value={novaMensagem}
        onChange={handleNovaMensagem}
        placeholder="Adicione uma nova mensagem"
      />
      <button onClick={adicionarMensagem}>Adicionar Mensagem</button>
    </div>
  );
}

Mensagens.propTypes = {
  mensagensIniciais: PropTypes.arrayOf(PropTypes.string),
};

export default Mensagens;
