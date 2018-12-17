import React, {Component} from 'react';
import './index.css';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "______"
        };
    }
    render(){
        return(
            <section className="section-container">
                <div className="container">
                    <h1 className="description">Check out ______, it's raining</h1>
                </div>
            </section>
        );
    }
}