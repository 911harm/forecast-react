import React, { useEffect, useState } from 'react'
import Day from './Day'


export default function Days() {
  const [forecast, setForecast] = useState(false)
  useEffect(() => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        setForecast(response)
        // console.log(forecast)
      }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/onecall?lat=4.61&lon=-74.08&appid=65ddec2df57701a814f3e6aa34ee8edc&units=metric", true);
    xhttp.send();

  }, []);

  return (
    <div className="days">
      <h3>3 Days Forecast</h3>
      {/* bucle =? for 3  */}
      {forecast &&
            <React.Fragment>
              <Day Day={forecast.daily[0]}></Day>
              <Day Day={forecast.daily[1]}></Day>
              <Day Day={forecast.daily[2]}></Day>
            </React.Fragment>
      }

    </div>
  )
}