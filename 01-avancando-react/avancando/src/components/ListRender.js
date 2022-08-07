import { useState } from 'react'

function ListRender() {
    const [list]  = useState(['Mateus', 'Pedro', 'Josias'])

    const [users, setUsers] = useState([
        { id:1, name:'Jonilei', age: 31 },
        { id:2, name:'fernanda', age: 27 },
        { id:3, name:'Maria', age: 45 },
        { id:4, name:'janescelia', age: 38 }
    ])

    function adicionarTeste() {
        const teste = document.querySelector('.teste')
        const randomUser = Math.floor(Math.random() * 5)

        teste.innerHTML = randomUser
    }

    function deleteRandom() {        
        const randomDelete = Math.floor(Math.random() * 5)

        setUsers((prevUsers) => {
            // console.log(prevUsers)
            return prevUsers.filter((user) => randomDelete !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((user) => (
                   <li key={user.id}>Nome: {user.name} -  idade: {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random</button>

            <p>Este botão é para testar uma função de DOM em React</p>
            <div className='teste'>aqui vai mudar</div>
            <button onClick={adicionarTeste}>Adicionar teste Aleatório</button>

            
        </div>
    )
}

export default ListRender