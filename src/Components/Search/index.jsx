import React from 'react';
import './index.css';

export default function Navigation() {
    return(
        <section className="section-container">
            <div className="container">
                <p className="description">Check out</p>
                <span className="search" contentEditable="true">___</span>
                <p className="description">it is raining</p>
            </div>
        </section>
    );
}