import React from 'react';
import Search from '../Search'
import './index.css';

export default function() {
    return(
        <header>
            <Search />
            <div className="temp-wrapper">
                <div>cloud</div>
                <h1>temp</h1>
            </div>
            <div>
                <div>
                    <h6>Wind</h6>
                    <div>
                        <h6>15</h6>
                        <h6>MPH</h6>
                    </div>
                </div>
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