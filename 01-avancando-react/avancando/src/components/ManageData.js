import { useState } from 'react'


function ManageData() {
    let somaData = 10

    let [ number, setNumber ] = useState(15)

    return (
        <div>
            <div>
                <p>Valor: {somaData}</p>
                <button onClick={() => (somaData = 15)}>Mudar variavel</button>
            </div>

            <div>
                <p>valor de Number: { number }</p>
                <button onClick={() => setNumber(20)}>Mudar Number</button>
            </div>
        </div>
    )
}

export default ManageData