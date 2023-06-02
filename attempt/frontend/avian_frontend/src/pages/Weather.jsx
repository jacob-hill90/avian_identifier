import axios from "axios"
import { useState } from "react";

function Weather() {
    
    const [weather, setWeather] = useState(null)

    function getWeather(){

        axios.get(`/API/${document.getElementById('longitude').value}/${document.getElementById('latitude').value}`).then((response) => {console.log(response.data.weather[0].description) 
        setWeather(response.data.weather[0].description)
        })
    }

    return (
            <div className="weather">
            <button onClick={getWeather} id="btnGet" type="button" class="btn btn-primary mb-3">
              Get Weather
            </button>
            <button id="btnCurrent" type="button" class="btn btn-primary mb-3">
              Use Current Location
            </button>
     
        <div className="weather-box">
          <h2>Weather</h2>
          <h4>LAT/LONG Weather: {weather}</h4>
          </div>
          </div>
    )
  }

  export default Weather