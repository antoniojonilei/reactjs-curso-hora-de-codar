function CarDetails(props) {
    return(
        <div>
            <h3>Detalhes do carro:</h3>
            <ul>
                <li>Marca: {props.brand}</li>
                <li>km: {props.km}</li>
                <li>Cor: {props.color}</li>
            </ul>
        </div>
    )
}

export default CarDetails