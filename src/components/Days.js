import React, { useEffect, useState } from 'react'
import { Global } from '../Global'
import { DayWeek } from '../helpers'
import Day from './Day'


export default function Days() {
  //Today 
  const today = new Date()

  const [forecast, setForecast] = useState(false)

  //Call API
  useEffect(() => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        setForecast(response)
      }
    };
    xhttp.open("GET", `${Global.url}onecall?lat=4.61&lon=-74.08&appid=${Global.key}&units=metric`, true);
    xhttp.send();

  }, []);
  //end Call Api
  //bucle 

  return (
    <div className="days">
      <h3>3 Days Forecast</h3>
      {/* bucle =? for 3  */}
      {forecast &&
        <React.Fragment>
           {/* {forecast.daily.map(i =>(<Day Day={forecast.daily[i]} DayWeek={DayWeek(today.getDay() + i)}></Day>) ).slice(1, 3)}  */}
          <Day Day={forecast.daily[0]} DayWeek={DayWeek(today.getDay())}></Day>
          <Day Day={forecast.daily[1]} DayWeek={DayWeek(today.getDay() + 1)}></Day>
          <Day Day={forecast.daily[2]} DayWeek={DayWeek(today.getDay() + 2)}></Day>
        </React.Fragment>
      }

    </div>
  )
}