import { useState } from "react"

function ConditionalRender() {
    const [x] = useState(false)
    const [nome, setName] = useState('Robson')

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <h3>Se x for true, sim!</h3>} {/*condicional simples, como o if{}*/}
            {!x && <h3>Agora x é falso</h3>}

            <div>
                <h4>Condicional ternário  = condição ? bloco : bloco </h4> {/*condiconal como if{} else{}*/}
                {nome === 'Joao' ? (
                    <div>
                        <p>O nome é Joao</p>
                    </div>    
                ) : (
                    <div>
                    <p>Nome não encontrado</p>
                </div> 
                ) }
                <button onClick={() => setName('Joao')}>Clique Joao</button>
            </div>

        </div>

    )
}

export default ConditionalRender