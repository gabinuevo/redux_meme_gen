import React, { Component } from 'react';
import './App.css';

class MemeForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            topText: "",
            bottomText: "",
            imgURL: ""
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.triggerAddMeme(this.state);

        this.setState({
            topText: "",
            bottomText: "",
            imgURL: ""
        })
    }



    render() {
        return (
            <form className="MemeForm" onSubmit={this.handleSubmit}>
                <label htmlFor="topText">Top text: </label>
                <input id="topText" name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange} />

                <label htmlFor="bottomText">Bottom text: </label>
                <input id="bottomText" name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange} />

                <label htmlFor="imgURL">Image url: </label>
                <input id="imgURL" name="imgURL"
                        value={this.state.imgURL}
                        onChange={this.handleChange} />
                <button>Add a new Meme!</button>
            </form>
        );
    }
}

export default MemeForm;
