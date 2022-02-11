
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
          <div className="logoTitolo">
            <div class="logo-image"></div>
            <h1 className="titolo">Weather App</h1>
          </div>
          <div className="ricercaDiv">
            <input type="text" className="inputTextField" value={city} onChange={(ev) => setCity(ev.target.value)}/>
            <button className="btn"> <i class="gg-search"></i> </button>
          </div>
        </nav>

      </form>

      <div className="container">
        {(typeof weather.main != "undefined") ? (
          
          <div className="headerDiv">
            <div className="info">
            <img src="./assets/location.png" height="30px" />
              <p className="citta">{weather.name}</p>
            </div>
            <div className="info_condition">
              <img src={"https://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"} 
              height="50px"/>
              <p className="info_stat">{weather.weather[0].main}</p>
            </div>
            <div className="info">
            <img src="./assets/temp.png" height="30px" />
            <p className="temperatura">{weather.main.temp}°C</p>
            </div>


          </div>
        ) : ('')}
        {(typeof weather.main != "undefined") ? (
          <div className="centerDiv">
            <button className="btn" type="btn"><a href={"https://www.google.it/maps/place/" + weather.name}><img src="./assets/map.png" height="30px" /></a>Cerca su Maps</button>
          </div>
        ) : ('')}

        {(typeof weather.main != "undefined") ? (
          <div className="sideDiv">

            <div className="info">
            <img src="./assets/humidity.png" height="30px" />
              Umidità
              <p className="stat">{weather.main.humidity}%</p>
            </div>

            <div className="info">
            <img src="./assets/atmPressure.png" height="30px" />
              Pressione atmosferica
              <p className="stat">{weather.main.pressure} PS</p>
            </div>

            <div className="info">
            <img src="./assets/wind.png" height="30px" />
              Vento
              <p className="stat">{weather.wind.speed} km/h, {weather.wind.deg}°</p>
            </div>

            <div className="info">
            <img src="./assets/visibility.png" height="30px" />
              Visibilità
              <p className="stat">{weather.visibility} m</p>
            </div>

          </div>
        ) : ('')}
        {/* 
        <div class="slideshow-container">
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="img1.jpg" style="width:100%"/>
            <div class="text">Caption Text</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="img2.jpg" style="width:100%"/>
            <div class="text">Caption Two</div>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="img3.jpg" style="width:100%"/>
            <div class="text">Caption Three</div>
          </div>

          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>

        <div style="text-align:center">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div> */}
       
      </div> 
    </div> 
  );
}

export default App;
