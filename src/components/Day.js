import React from 'react'
import clear from '../access/images/clear.png'

export default function Day() {
    return (
        <div className="day">
            <img src={clear} alt="" />
            <div className="day-data">
                <b>Sunday</b><br />
                <span>cloudy</span>
            </div>
            <div className="temp">
                <span>31°/34°</span>
            </div>
        </div>
    )
}