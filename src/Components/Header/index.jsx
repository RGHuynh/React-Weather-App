import React from 'react';
import Search from '../Search';
import WeatherMetric from './WeatherMetric';
import Cloud from '../../images/cloud.svg';
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
                    title="Wind"
                    metric="15"
                    acronym="MPH"
                />
                <WeatherMetric 
                    title="Rain"
                    metric="15"
                    acronym="%"
                />
                <WeatherMetric 
                    title="Humidity"
                    metric="15"
                    acronym="%"
                />
            </div>

            <div>
                <div>
                    <div>img</div>
                    <h6>40</h6>
                    <h6>Tomorrow</h6>
                </div>
            </div>
        </header>
    )
}