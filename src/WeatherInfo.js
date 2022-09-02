import React from "react"
import CurrentDate from "./CurrentDate"

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
                <div className="row">
                  <div className="col-4">
                    <p>
                      <img src={props.date.icon} alt={props.date.description} className="icon" /><span className="temperature">{Math.round(props.date.temperature)}</span>
                      <span className="units">ºC</span>
                    </p>
                    <p className="dayTemperature">Day 27ºC / Night 17ºC</p>
                  </div>
                  <div className="col-3 dayIndicators">
                    {/* <p className="rain">Rain: 4%</p> */}
                    <p className="humidity">Humidity: {props.date.humidity}%</p>
                    <p className="wind">Wind: {Math.round(props.date.wind)}km/h</p>
                  </div>
                  <div className="col-5 cityNow">
                    <p className="city">{props.date.city}</p>
                    <p className="data"><CurrentDate date={props.date.date} /></p>
                    <p className="typeSky">{props.date.description}</p>
                  </div>
                </div>
              </div>
    )
}