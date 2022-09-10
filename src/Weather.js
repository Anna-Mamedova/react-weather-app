import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo"
import WeatherForecast from "./WeatherForecast"
import axios from "axios"
import "./Weather.css";

export default function Weather(props) {
    const [units,setUnits] = useState("metric")
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity)
    function handleResponse(response){
        setWeatherData({
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description
        })
        setReady(true);
    }

    function search() {
        const apiKey = "98dc9516d2cb8fe245b1b135cfa17cfe";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);   
    }

    function handleSubmit(event) {
        event.preventDefault()
        search()
    }

    function handleCityChange(event) {
       setCity(event.target.value) 
    }

    function showFahrenheit(event) {
        event.preventDefault()
        setUnits("imperial")
    }

    function showCelsius(event) {
        event.preventDefault()
        setUnits("metric")
    }

    function unitsChange() {
      if (units === "metric") {
        return(
          <span className="units">ºC | <a href="/" onClick={showFahrenheit}>ºF</a></span>
        )
      } else {
        return(
          <span className="units">º<a href="/" onClick={showCelsius}>C</a> | ºF</span>
        )}
      }

      useEffect(function(){
        setReady(false)
    }, [units])

    if (ready) {
        return (
            <div className="Weather">
              <form onSubmit={handleSubmit}>
                <div className="d-flex">
                  <div className="col-10 pe-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your city"
                      onChange={handleCityChange}
                      />
                  </div>
                  <div className="col-2">
                    <input
                      type="submit"
                      className="btn btn-secondary form-control"
                      value="Search"
                      />
                  </div>
                </div>
              </form>
              {unitsChange()}
              <WeatherInfo date={weatherData} />
              <WeatherForecast coordinates = {weatherData.coordinates} units = {units}/>
            </div>
        )
    } else {
        search()
        return ("Loading...")      
    }
}