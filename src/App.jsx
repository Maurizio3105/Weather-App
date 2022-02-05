
import React, { useState, useEffect } from 'react';


const API_KEY = "80b87de9907125aa065d41b29792b7e9"

function App() {
  const [weather, setWeather] = useState({})
  const [city, setCity] = useState("")

  useEffect(() => {
  }, [])

  function CercaDati(ev) {
    ev.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(body => setWeather(body))
    
    setCity("")

  }

  return (
    <div>
      <form onSubmit={(ev) => CercaDati(ev)}>
        <nav className="navbar">
          <h1 className="titolo">Weather App</h1>
          <div className="ricercaDiv">
            <input type="text" className="inputTextField" value={city} onChange={(ev) => setCity(ev.target.value)} />
            <button className="btn"> <i class="gg-search"></i> </button>
          </div>

        </nav>

      </form>

      <div className="container">
        {(typeof weather.main != "undefined") ? (
          <div className="headerDiv">

            <p className="citta">{weather.name}</p>

             <img src={"https://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"} height="60px" />
            
             <p className="main_info">{weather.weather[0].main}</p>

            <p className="temperatura">{weather.main.temp}°C</p>


          </div>
        ) : ('')}
        {(typeof weather.main != "undefined") ? (
          <div className="centerDiv">
            <button className="btn" type="btn"><a href={"https://www.google.it/maps/place/" + weather.name}><i class="gg-external"></i></a>Cerca su Maps</button>
          </div>
        ) : ('')}

        {(typeof weather.main != "undefined") ? (
          <div className="sideDiv">

            <div className="info">
              Umidità
              <p className="stat">{weather.main.humidity}%</p>
            </div>

            <div className="info">
              Pressione atmosferica
              <p className="stat">{weather.main.pressure} PS</p>
            </div>

            <div className="info">
              Vento
              <p className="stat">{weather.wind.speed} km/h, {weather.wind.deg}°</p>
            </div>

            <div className="info">
              Visibilità
              <p className="stat">{weather.visibility} m</p>
            </div>

          </div>
        ) : ('')}

      </div>
    </div>
  );
}

export default App;
