import React, { useState } from 'react'
import clear from '../access/images/clear.png'

export default function Day({ Day }) {
    // const [cDay, setcDay] = useState(false)
    return (
        <div className="day">
            
                <React.Fragment>
                    <img src={`http://openweathermap.org/img/wn/${Day.weather[0].icon}@2x.png`} alt="" />
                    <div className="day-data">
                        <b>Sunday</b><br />
                        <span>{Day.weather[0].main}</span>
                    </div>
                    <div className="temp">
                        <span>{Math.round(Day.temp.min)}°/{Math.round(Day.temp.max)}°</span>
                    </div>
                </React.Fragment>
            
        </div>
    )
}