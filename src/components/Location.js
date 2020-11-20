import React from 'react'
import clear from '../access/images/clear.png'

export default function Location() {
    return (
        <div className="location">
            <div className="container">
                <div className="weather">
                    <img src={clear} alt="forecast" />
                </div>
                <div className="location-temp">
                    21°
                </div>
                <div className="location-city">
                    <b>Paris</b><br/>
                    <b>France</b>
                </div>
            </div>
            <div className="container more-info">
                <p>Humidity</p>
                <p>North</p>
                <p>83 km/h</p>
            </div>
        </div>
    )
}
