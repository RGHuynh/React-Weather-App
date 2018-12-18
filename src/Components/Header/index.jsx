import React from 'react';
import Search from '../Search';
import WeatherMetric from './WeatherMetric';
import Cloud from '../../images/cloud.svg';
import Drop from '../../images/drop.svg';
import Rain from '../../images/rain.svg';
import Wind from '../../images/wind.svg';
import './index.css';

export default function() {
    return(
        <header>
            <Search />
            <div className="temp-wrapper">
                <img className="temp-image" src={Cloud} />
                <h1 className="temp-degree">15</h1>
            </div>
            <div className="weatherMetric-wrapper">
                <WeatherMetric 
                    image={Wind}
                    title="Wind"
                    metric="15"
                    acronym="MPH"
                />
                <WeatherMetric 
                    image={Rain}
                    title="Rain"
                    metric="15"
                    acronym="%"
                />
                <WeatherMetric 
                    image={Drop}
                    title="Humidity"
                    metric="15"
                    acronym="%"
                />
            </div>

            {/* <div>
                <div>
                    <div>img</div>
                    <h6>40</h6>
                    <h6>Tomorrow</h6>
                </div>
            </div> */}
        </header>
    )
}