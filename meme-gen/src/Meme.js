import React, { Component } from 'react';

class Meme extends Component {

	render() {
        debugger;
        let style = {backgroundImage: "url(" + this.props.imgURL + ")"}

		return (
            <div style={style} className="Meme" >
                <p>{this.props.topText}</p>
                <p>{this.props.bottomText}</p>
                <button onClick={this.props.deleteMeme}>X</button>
            </div>
		);
	}
}

export default Meme

