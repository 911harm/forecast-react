import React, { useState, useEffect } from 'react'
import { windDirection } from '../helpers'

export default function Location() {

    const [forecast, setForecast] = useState(false)

    useEffect(() => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(this.responseText);
                setForecast(response)
            }
        };
        xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Francia&appid=65ddec2df57701a814f3e6aa34ee8edc&units=metric", true);
        xhttp.send();

    }, []);
    
    return (
        <div className="location">
            {forecast &&
                <React.Fragment>
                    <div className="container">
                        <div className="weather">
                            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="forecast" />
                        </div>
                        <div className="location-temp">
                            {forecast.main.temp}°C
            </div>
                        <div className="location-city">
                            <b>Paris</b><br />
                            <b>{forecast.name}</b>
                        </div>
                    </div>
                    <div className="container more-info">
                        <p>Humidity {forecast.main.humidity}%</p>
                        <p>{windDirection(forecast.wind.deg)}</p>
                        <p>{forecast.wind.speed*3.6} km/h</p>
                    </div>
                </React.Fragment>
            }
        </div>
    )
}
