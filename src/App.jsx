import { useState } from "react";
import Header from "./components/Header";
import "./css/global.css"; // Só Tailwind!

function App() {
  const [entrada, setEntrada] = useState("");
  const [resultado, setResultado] = useState(null);

  // Adiciona número ou operador à expressão
  const adicionar = (valor) => {
    setEntrada((prev) => prev + valor);
  };

  // Calcula o resultado da expressão
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

  // Limpa tudo
  const limpar = () => {
    setEntrada("");
    setResultado(null);
  };

  // Apaga só o último caractere
  const apagarUltimo = () => {
    setEntrada((prev) => prev.slice(0, -1));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-200">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xs">
        <Header />

        {/* Display da operação e resultado */}
        <div className="mb-4">
          <div className="w-full text-right text-3xl font-mono border-b-2 border-blue-300 bg-gray-50 px-3 py-2 mb-2 rounded-lg">
            {entrada || "0"}
          </div>
          <div className="w-full text-right text-2xl font-bold text-blue-700 min-h-[32px]">
            {resultado !== null ? resultado : ""}
          </div>
        </div>

        {/* Botões */}
        <div className="grid grid-cols-4 gap-3">
          {/* Primeira linha */}
          <button type="button" onClick={limpar} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition">C</button>
          <button type="button" onClick={apagarUltimo} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition">⌫</button>
          <button type="button" onClick={() => adicionar("÷")} className="bg-blue-100 hover:bg-blue-300 text-blue-900 font-bold py-3 rounded-lg text-xl transition">÷</button>
          <button type="button" onClick={() => adicionar("×")} className="bg-blue-100 hover:bg-blue-300 text-blue-900 font-bold py-3 rounded-lg text-xl transition">×</button>
          {/* Segunda linha */}
          {[7,8,9].map((num) => (
            <button key={num} type="button" onClick={() => adicionar(num.toString())}
              className="bg-blue-200 hover:bg-blue-400 text-blue-900 font-bold py-3 rounded-lg text-xl transition">{num}</button>
          ))}
          <button type="button" onClick={() => adicionar("-")} className="bg-blue-100 hover:bg-blue-300 text-blue-900 font-bold py-3 rounded-lg text-xl transition">−</button>
          {/* Terceira linha */}
          {[4,5,6].map((num) => (
            <button key={num} type="button" onClick={() => adicionar(num.toString())}
              className="bg-blue-200 hover:bg-blue-400 text-blue-900 font-bold py-3 rounded-lg text-xl transition">{num}</button>
          ))}
          <button type="button" onClick={() => adicionar("+")} className="bg-blue-100 hover:bg-blue-300 text-blue-900 font-bold py-3 rounded-lg text-xl transition">+</button>
          {/* Quarta linha */}
          {[1,2,3].map((num) => (
            <button key={num} type="button" onClick={() => adicionar(num.toString())}
              className="bg-blue-200 hover:bg-blue-400 text-blue-900 font-bold py-3 rounded-lg text-xl transition">{num}</button>
          ))}
          <button type="button" onClick={calcular} className="row-span-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded-lg text-xl transition flex items-center justify-center">=</button>
          {/* Quinta linha */}
          <button type="button" onClick={() => adicionar("0")}
            className="col-span-2 bg-blue-200 hover:bg-blue-400 text-blue-900 font-bold py-3 rounded-lg text-xl transition">0</button>
          <button type="button" onClick={() => adicionar(".")}
            className="bg-blue-200 hover:bg-blue-400 text-blue-900 font-bold py-3 rounded-lg text-xl transition">,</button>
        </div>
      </div>
    </div>
  );
}

export default App;