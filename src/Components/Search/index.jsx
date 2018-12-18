import React, {Component} from 'react';
import AutosizeInput from 'react-input-autosize';
import './index.css';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    render(){
        return(
            <section className="section-container">
                <div className="container description-wrapper">
                    <h1 className="description">Weather in </h1>
                    <AutosizeInput 
                        className="description-form"
                        name="form-field-location"
                        value={this.state.input}
                        onChange={this.handleChange}
                        placeholder="_______"
                    />
                    <h1 className="description">. Sucks</h1>
                </div>
            </section>
        );
    }
}