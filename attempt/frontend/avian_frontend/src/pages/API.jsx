import axios from "axios"
import { useState } from "react";


function API() {
    
    const [weather, setWeather] = useState(null)

    function getWeather(){

        axios.get(`/API/${document.getElementById('longitude').value}/${document.getElementById('latitude').value}`).then((response) => {console.log(response.data.weather[0].description) 
        setWeather(response.data.weather[0].description)
        })
    
    }

    function getPokemon(){
        console.log('trying to get api to work')

        axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((response)=>{
            typeUrl = response.data.types[0].type.url
            return axios.get(typeUrl)})
    }

    return (
    <div className="content">
        <div className="banner_container">
            <img className="eagle" src="static/banner.jpeg"></img>
        </div>
        <nav class="container">
        <div class="row align-items-center py-2">
          <div class="input-group col-sm">
            <span class="input-group-text" id="basic-addon1">Latitude</span>
            <input
              type="text"
              class="form-control"
              inputmode="numeric"
              id="latitude"
              placeholder="latitude"
              aria-label="latitude"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group col-sm">
            <span class="input-group-text" id="basic-addon1">Longitude</span>
            <input
              type="text"
              class="form-control"
              inputmode="numeric"
              id="longitude"
              placeholder="longitude"
              aria-label="longitude"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div class="row align-items-center py-2">
          <div class="col-auto me-auto">
            <button onClick={getWeather} id="btnGet" type="button" class="btn btn-primary mb-3">
              Get Weather
            </button>
            <button onClick={getPokemon} id="btnCurrent" type="button" class="btn btn-primary mb-3">
              Use Current Location
            </button>
          </div>
        </div>
      </nav>
        <h2>Weather</h2>
        <p>{weather}</p>
      

    </div>
    )
  }

  export default API