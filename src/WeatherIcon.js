import React from "react"
import clearDay from "./images/clear-day.svg"
import clearNight from "./images/clear-night.svg"
import partlyCloudyDay from "./images/partly-cloudy-day.svg"
import partlyCloudyNight from "./images/partly-cloudy-night.svg"
import cloudy from "./images/cloudy.svg"
import overcastDay from "./images/overcast-day.svg"
import overcastNight from "./images/overcast-night.svg"

import overcastRain from "./images/overcast-rain.svg"
import partlyCloudyDayRain from "./images/partly-cloudy-day-rain.svg"
import partlyCloudyNightRain from "./images/partly-cloudy-night-rain.svg"
import thunderstormsDay from "./images/thunderstorms-day.svg"
import thunderstormsNight from "./images/thunderstorms-night.svg"
import snow from "./images/snow.svg"
import mist from "./images/mist.svg"

export default function WeatherIcon(props) {
    const iconMapping = {
        "01d" : clearDay,
        "01n" : clearNight,
        "02d" : partlyCloudyDay,
        "02n" : partlyCloudyNight,
        "03d" : cloudy,
        "03n" : cloudy,
        "04d" : overcastDay,
        "04n" : overcastNight,
        "09d" : overcastRain,
        "09n" : overcastRain,
        "10d" : partlyCloudyDayRain,
        "10n" : partlyCloudyNightRain,
        "11d" : thunderstormsDay,
        "11n" : thunderstormsNight,
        "13d" : snow,
        "13n" : snow,
        "50d" : mist,
        "50n" : mist
    }
    
    return ( <img src={iconMapping[props.code]} alt={props.description} />

  )
}