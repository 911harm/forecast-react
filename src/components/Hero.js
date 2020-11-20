import React, { useEffect, useState } from 'react'
import clear from '../access/images/clear.png'
import {Global} from '../Global'

export default function Hero() {
    const [forecast,setForecast]=useState(false)
    useEffect(() => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
               let response = JSON.parse(this.responseText);
                setForecast(response)
            }
        };
        xhttp.open("GET", `${Global.url}weather?q=Bogota&appid=${Global.key}&units=metric`, true);
        xhttp.send();

    }, []);
    return (
        <div className="Hero">
            <div className="image-forecast">
                {forecast &&
                    (<div className="data-forecast">
                        <div className="weather">
                            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="forecast" /><br/>
                            <span>{forecast.weather[0].main}</span>
                        </div>
                        <div className="temp">
                            <span>{forecast.main.temp}°C</span>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}