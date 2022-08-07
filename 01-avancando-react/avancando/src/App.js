import { useState } from 'react';

//components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

// styles CSS
import './App.css';

//imagens
import Game from './assets/game.jpg'
import CarDetailsDest from './components/CarDetailsDest';

function App() {
  //let nomeProps = 'Maria'
  let [userName] = useState('Fernando')

  const [carsList] = useState([
    { id:1, brand: "Ford", km: 2515, color: "Vermelho", newCar: false },
    { id:2, brand: "marca1", km: 2545, color: "quialquer-cor", newCar: false },
    { id:3, brand: "marca2", km: 0, color: "quialquer-cor", newCar: true },
    { id:4, brand: "marca3", km: 0, color: "quialquer-cor", newCar: true },
    { id:5, brand: "marca8", km: 25, color: "quialquer-cor", newCar: false },
  ])

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src="/backgroun-gamer.jpg" alt="wallpaper gamer" />
      </div>
      
      {/* padrão de imagens é colocar na pasta src/assets */}
      <div>
        <img src={Game} alt="imagem " />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      { /*props*/ }
      <ShowUserName name={userName}/>
      { /*destructuring props*/ }
      <CarDetails brand="VolksVagem" km={189000} color="Azul"/>
      <CarDetailsDest brand="Corolaao" km={120333} color="Preto"/>
      { /*reaproveitando components*/ }
      <CarDetailsDest brand="Ford" km={2354} color="Vermelho" newCar={false}/>
      <CarDetailsDest brand="MiniCooper" km={0} color="Amarelo" newCar={true}/>
      <CarDetailsDest brand="Toyota" km={5055055} color="Branco" newCar={false}/>
      { /*loop com array de objetos*/ }
      {carsList.map((car) => (
        <CarDetailsDest 
          key={car.id} 
          brand={car.brand} 
          km={car.km} 
          color={car.color} 
          newCar={car.newCar} 
        />
      ))}

    </div>
  );
}

export default App;