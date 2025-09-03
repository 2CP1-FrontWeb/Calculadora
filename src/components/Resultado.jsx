import '../css/global.css'
import '../css/resultado.css'

// desestruturação - pega a prop resultado
function Resultado({ resultado }) {
    return (
        <div className="resultado">
            <h2>Resultado: </h2>
            <span className="resultadoSpan">{resultado}</span>
        </div>
    );
}

export default Resultado;
