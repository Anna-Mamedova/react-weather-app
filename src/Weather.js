import React from "react";
import "./Weather.css";

export default function Weather() {
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
                  <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="icon" className="icon" /><span className="temperatureNow">30</span>
                  <span className="units">ºC</span>
                </p>
                <p className="dayTemperature">Day 27ºC / Night 17ºC</p>
              </div>
              <div className="col-3 dayIndicators">
                <p className="rain">Rain: 4%</p>
                <p className="humidity">Humidity: 48%</p>
                <p className="wind">Wind: 3km/h</p>
              </div>
              <div className="col-5 cityNow">
                <p className="yourCity">Kharkiv</p>
                <p>
                  <span className="day">Monday</span>
                  <span className="time">12:00</span>
                </p>
                <p className="typeSky">Sunny</p>
              </div>
            </div>
          </div>
        </div>
    )
}