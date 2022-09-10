import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css"
import axios from "axios"

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(function(){
        setLoaded(false)
    }, [props.coordinates])

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if(loaded) {
        return (
            <div className="WeatherForecast card p-3">
                <div className="row">
                    {forecast.map(function (dayliForecast, index){
                        if (index < 5){
                            return (
                                <div className="col" key = {index}>
                                <WeatherForecastDay data = {dayliForecast}/>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        );
    } else {
        let lat = props.coordinates.lat;
        let lon = props.coordinates.lon;
        let apiKey = "98dc9516d2cb8fe245b1b135cfa17cfe";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${props.units}`
        axios.get(apiUrl).then(handleResponse);  
        return null; 
    }
}