import '../css/global.css'
import '../css/resultado.css'

// desestruturação - pega a prop resultado
function Resultado({ resultado }) {
    return (
        <div className="resultado">
            <h2>
                Resultado: <span className="resultadoSpan">{resultado}</span>
            </h2>
        </div>
    )
}

export default Resultado
