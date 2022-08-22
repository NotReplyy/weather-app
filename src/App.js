import React, {useState} from 'react';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

import  app from './App.module.css';


function App(){
  const [cities, setCities] = useState([]);

  console.log(cities)


  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${'9ec47a8150e44e6385aae05be36f9e11'}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

  return (
    <div className={app.App}>
      { /* Tu código acá: */ }
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose} />
    </div>
  )

  


}

export default App;
