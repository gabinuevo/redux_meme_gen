import React, { Component } from 'react';
import Meme from './Meme'

class MemeBox extends Component {

	constructor(props) {
		super(props);
		this.deleteAMeme = this.deleteAMeme.bind(this);
	}

	deleteAMeme(memeId) {
		this.props.triggerDeleteMeme(memeId);
	}

	render() {
        debugger;
        let memeComponents = this.props.memes.map((m) => <Meme 
                                                topText={m.topText}
                                                bottomText={m.bottomText}
                                                imgURL={m.imgURL}
                                                deleteMeme={() => this.deleteAMeme(m.id)}/>)
		return (
		<div className="MemeBox" >
			{memeComponents}
		</div>
		);
	}
}

export default MemeBox

