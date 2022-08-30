import React, { useState } from "react";
import axios from "axios"
import "./Weather.css";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response){
        console.log(response)
        setWeatherData({
            temperature: response.data.main.temp,
            city: response.data.name,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            description: response.data.weather[0].description
        })
        setReady(true)
    }

    if (ready) {
        return (
            <div className="Weather">
              <form id="enter-city">
                <div className="d-flex">
                  <div className="col-10 pe-3">
                    <input
                      className="form-control"
                      id="input-city"
                      type="text"
                      placeholder="Enter your city"
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
              <div className="weatherNow">
                <div className="row">
                  <div className="col-4">
                    <p>
                      <img src={weatherData.icon} alt={weatherData.description} className="icon" /><span className="temperature">{Math.round(weatherData.temperature)}</span>
                      <span className="units">ºC</span>
                    </p>
                    <p className="dayTemperature">Day 27ºC / Night 17ºC</p>
                  </div>
                  <div className="col-3 dayIndicators">
                    {/* <p className="rain">Rain: 4%</p> */}
                    <p className="humidity">Humidity: {weatherData.humidity}%</p>
                    <p className="wind">Wind: {Math.round(weatherData.wind)}km/h</p>
                  </div>
                  <div className="col-5 cityNow">
                    <p className="city">{weatherData.city}</p>
                    <p>
                      <span className="day">Monday</span>
                      <span className="time">12:00</span>
                    </p>
                    <p className="typeSky">{weatherData.description}</p>
                  </div>
                </div>
              </div>
            </div>
        )
    } else {
        const apiKey = "98dc9516d2cb8fe245b1b135cfa17cfe";
        let city = props.defaultCity;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);   
        return ("Loading...")      
    }
}