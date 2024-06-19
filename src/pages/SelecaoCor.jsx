import { useState } from "react";

function SelecaoCor() {
  const [corFavorita, setCorFavorita] = useState("vermelho");

  const handleChange = (e) => {
    setCorFavorita(e.target.value);
  };

  return (
    <div>
      <h2>Selecione sua cor favorita:</h2>
      <select value={corFavorita} onChange={handleChange}>
        <option value="vermelho">Vermelho</option>
        <option value="azul">Azul</option>
        <option value="verde">Verde</option>
        <option value="amarelo">Amarelo</option>
      </select>
      <p>Sua cor favorita é: {corFavorita}</p>
    </div>
  );
}

export default SelecaoCor;
