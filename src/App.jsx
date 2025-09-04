import { useState } from "react";
import Header from "./components/Header";
import "./css/global.css"; // Só Tailwind!

function App() {
  const [entrada, setEntrada] = useState("");
  const [resultado, setResultado] = useState(null);

  const adicionar = (valor) => {
    setEntrada((prev) => prev + valor);
  };

  const calcular = () => {
    try {
      const expressao = entrada
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-")
        .replace(/,/g, ".");
      const res = eval(expressao);
      setResultado(res);
    } catch {
      setResultado("Erro");
    }
  };

  const limpar = () => {
    setEntrada("");
    setResultado(null);
  };

  const apagarUltimo = () => {
    setEntrada((prev) => prev.slice(0, -1));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-200">
      {/* Calculadora com borda branca */}
      <div className="bg-white rounded-3xl shadow-2xl p-12 w-full max-w-md border-8 border-white">
        <Header />

        {/* Display da operação e resultado */}
        <div className="mb-8">
          <div className="w-full text-right text-6xl font-mono border-b-4 border-blue-400 bg-gray-50 px-6 py-5 mb-4 rounded-xl shadow">
            {entrada || "0"}
          </div>
          <div className="w-full text-right text-4xl font-bold text-blue-700 min-h-[48px]">
            {resultado !== null ? resultado : ""}
          </div>
        </div>

        {/* Botões */}
        <div className="grid grid-cols-4 gap-6">
          {/* Primeira linha */}
          <button
            type="button"
            onClick={limpar}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-6 rounded-xl text-2xl transition shadow"
          >
            C
          </button>
          <button
            type="button"
            onClick={apagarUltimo}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-6 rounded-xl text-2xl transition shadow"
          >
            ⌫
          </button>
          <button
            type="button"
            onClick={() => adicionar("÷")}
            className="bg-blue-200 hover:bg-blue-400 text-blue-900 font-bold py-6 rounded-xl text-2xl transition shadow"
          >
            ÷
          </button>
          <button
            type="button"
            onClick={() => adicionar("×")}
            className="bg-blue-200 hover:bg-blue-400 text-blue-900 font-bold py-6 rounded-xl text-2xl transition shadow"
          >
            ×
          </button>

          {/* Segunda linha */}
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => adicionar(num.toString())}
              className="bg-blue-300 hover:bg-blue-500 text-blue-900 font-bold py-6 rounded-xl text-2xl transition shadow"
            >
              {num}
            </button>
          ))}
          <button
            type="button"
            onClick={() => adicionar("-")}
            className="bg-blue-200 hover:bg-blue-400 text-blue-900 font-bold py-6 rounded-xl text-2xl transition shadow"
          >
            −
          </button>

          {/* Terceira linha */}
          {[4, 5, 6].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => adicionar(num.toString())}
              className="bg-blue-300 hover:bg-blue-500 text-blue-900 font-bold py-6 rounded-xl text-2xl transition shadow"
            >
              {num}
            </button>
          ))}
          <button
            type="button"
            onClick={() => adicionar("+")}
            className="bg-blue-200 hover:bg-blue-400 text-blue-900 font-bold py-6 rounded-xl text-2xl transition shadow"
          >
            +
          </button>

          {/* Quarta linha */}
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => adicionar(num.toString())}
              className="bg-blue-300 hover:bg-blue-500 text-blue-900 font-bold py-6 rounded-xl text-2xl transition shadow"
            >
              {num}
            </button>
          ))}
          <button
            type="button"
            onClick={calcular}
            className="row-span-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-6 rounded-xl text-2xl transition shadow flex items-center justify-center"
          >
            =
          </button>

          {/* Quinta linha */}
          <button
            type="button"
            onClick={() => adicionar("0")}
            className="col-span-2 bg-blue-300 hover:bg-blue-500 text-blue-900 font-bold py-6 rounded-xl text-2xl transition shadow"
          >
            0
          </button>
          <button
            type="button"
            onClick={() => adicionar(".")}
            className="bg-blue-300 hover:bg-blue-500 text-blue-900 font-bold py-6 rounded-xl text-2xl transition shadow"
          >
            ,
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
