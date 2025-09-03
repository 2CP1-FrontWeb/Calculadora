import { useState } from "react";
import Header from "./components/Header";
import Resultado from "./components/Resultado";
import "./css/global.css";
import "./css/estilo.css";

function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(null);

  // Funções das operações
  const somar = () => setResultado(numero1 + numero2);
  const subtrair = () => setResultado(numero1 - numero2);
  const multiplicar = () => setResultado(numero1 * numero2);
  const dividir = () => {
    if (numero2 === 0) {
      setResultado("Erro: divisão por zero");
    } else {
      setResultado((numero1 / numero2).toFixed(2));
    }
  };

  return (
    <div className="container">
      <div className="box">
        <Header />

        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="num1">Número 1:</label>
            <input
              type="number"
              id="num1"
              onChange={(e) => setNumero1(parseFloat(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="num2">Número 2:</label>
            <input
              type="number"
              id="num2"
              onChange={(e) => setNumero2(parseFloat(e.target.value))}
            />
          </div>

          <div className="botoes">
            <button type="button" onClick={somar}>+</button>
            <button type="button" onClick={subtrair}>-</button>
            <button type="button" onClick={multiplicar}>×</button>
            <button type="button" onClick={dividir}>÷</button>
          </div>
        </form>
      </div>

      {resultado !== null && <Resultado resultado={resultado} />}
    </div>
  );
}

export default App;
