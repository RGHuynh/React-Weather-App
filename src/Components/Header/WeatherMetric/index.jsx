import React from 'react';
import './index.css';

export default function WeatherMetric({metric, acronym, title}) {
    return(
        <div className="weatherMetric-container">
            <h6 className="weatherMetric-title">{title}</h6>
            <div className="metric-wrapper">
                <h6 className="metric">{metric}</h6>
                <h6 className="metric-acronym">{acronym}</h6>
            </div>
        </div>
    )
}