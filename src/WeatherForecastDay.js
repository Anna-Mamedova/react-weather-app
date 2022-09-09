import React from "react"
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}º`
    }
    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}º`
    }
    function day(){
        let date = new Date(props.data.dt * 1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = date.getDay()

        return days[day];
    }
    return (
        <div>
        <p className="WeatherForecast-day">{day()}</p>
        <WeatherIcon code={props.data.weather[0].icon} />
        <p className="WeatherForecast-temp"><span className="WeatherForecast-temp-max"></span>{maxTemp()}<span className="WeatherForecast-temp-min">{minTemp()}</span></p>
        </div>
    )
}