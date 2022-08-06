function TemplateExpressions() {
    
    const name = 'Jonilei'
    const data = {
        age: 31,
        job:'Programador'    
    }

    return (
        <div>
            <h1>Olá {name}</h1>
            <p>Você tem {data.age} anos</p>
            <p>Trabalha como {data.job}</p>
        </div>
    )
}

export default TemplateExpressions