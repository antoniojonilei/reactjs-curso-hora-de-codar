function CarDetailsDest({ brand, km, color, newCar }) {
    return(
        <div>
            <h3>Detalhes do carro: (destructuring props)</h3>
            <ul>
                <li>Marca: {brand}</li>
                <li>km: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {newCar && <p>Esse carro é novo</p>}
        </div>
    )
}

export default CarDetailsDest