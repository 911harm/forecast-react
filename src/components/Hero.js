import React from 'react'
import clear from '../access/images/clear.png'
 
export default function Hero() {
    return (
        <div className="Hero">
            <div className="image-forecast">
                <div className="data-forecast">
                    <div className="weather">
                        <img src={clear} alt="forecast"/>
                        <span>cloudy</span>
                    </div>
                    <div className="temp">
                        <span>31°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}