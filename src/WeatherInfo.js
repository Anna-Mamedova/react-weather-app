import React from "react"
import CurrentDate from "./CurrentDate"
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature"
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
                <div className="row">
                    <div className="col-4">
                        <WeatherIcon code = {props.date.icon} description = {props.date.description}/>
                        <WeatherTemperature celsius = {Math.round(props.date.temperature)} />
                        <p className="humidity dayIndicators">Humidity: {props.date.humidity}%</p>
                        <p className="wind dayIndicators">Wind: {Math.round(props.date.wind)}km/h</p>
                    </div>
                    <div className="col-8 cityNow">
                        <p className="city">{props.date.city}</p>
                        <p className="data"><CurrentDate date={props.date.date} /></p>
                        <p className="typeSky">{props.date.description}</p>
                  </div>
                </div>
              </div>
    );
}