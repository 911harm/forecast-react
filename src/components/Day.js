import React from 'react'

export default function Day({ Day, DayWeek }) {

    return (
        <div className="day">

            <React.Fragment>
                <img src={`http://openweathermap.org/img/wn/${Day.weather[0].icon}@2x.png`} alt="" />
                <div className="day-data">
                    <b>{DayWeek}</b><br />
                    <span>{Day.weather[0].main}</span>
                </div>
                <div className="temp">
                    <span>{Math.round(Day.temp.min)}°/{Math.round(Day.temp.max)}°</span>
                </div>
            </React.Fragment>

        </div>
    )
}