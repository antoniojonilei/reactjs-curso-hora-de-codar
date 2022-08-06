function Events() {

    function handleMyEvent(e) {
        console.log(e)

        console.log('Ativou o evento')
    }

    function renderSomething(x) {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('clicou!!!')}>Clique aqui também</button>

                <button onClick={() => {
                    console.log('Isso não deveria exixtir')
                }}>
                    Clique aqui, Por favor</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events