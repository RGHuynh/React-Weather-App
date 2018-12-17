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
                <div className="container">
                    <h1 className="description">Check out </h1>
                    {/* <form className="description-form">
                        <input className="description-textbox" type="text" placeholder="____" value={this.state.input} onChange={this.handleChange}></input>
                    </form> */}
                    <AutosizeInput 
                        className="description-form"
                        name="form-field-location"
                        value={this.state.input}
                        onChange={this.handleChange}
                        placeholder="_________"
                    />
                    <h1 className="description">it's raining</h1>
                </div>
            </section>
        );
    }
}