import React, {useState} from "react"

export default function WeatherTemperature(props) {
    const [units,setUnits] = useState("celsius")
    
    function showFahrenheit(event) {
        event.preventDefault()
        setUnits("fahrenheit")
    }

    function showCelsius(event) {
        event.preventDefault()
        setUnits("celsius")
    }

    function fahrenheit(){
       return (props.celsius * 9 / 5) + 32
    }

    if (units === "celsius") {
        return (
            <span className="WeatherTemperature">
            <span className="temperature">{props.celsius}</span>
            <span className="units">ºC | <a href="/" onClick={showFahrenheit}>F</a></span>
            </span>
        );
    } else {
        return (
            <span className="WeatherTemperature">
            <span className="temperature">{Math.round(fahrenheit())}</span>
            <span className="units">º<a href="/" onClick={showCelsius}>C</a> | F</span>
            </span>
        );
    }
}