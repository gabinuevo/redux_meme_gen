import React, { Component } from 'react';
import { connect } from "react-redux";
import MemeForm from './MemeForm'
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.addMeme = this.addMeme.bind(this);
	}

	addMeme(memeObj) {
		this.props.dispatch({ type: "MAKE_MEME", payload: memeObj });
	}

	render() {
		return (
		<div className="App" >
			<MemeForm triggerAddMeme={this.addMeme}/>
		</div>
		);
	}
}

function mapStateToProps(reduxState) {
  return {
      memes: reduxState.memes
  };
}

const connectToReduxStore = connect(mapStateToProps);

export default connectToReduxStore(App)

