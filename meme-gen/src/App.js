import React, { Component } from 'react';
import { connect } from "react-redux";
import MemeForm from './MemeForm'
import MemeBox from './MemeBox'
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.addMeme = this.addMeme.bind(this);
		this.deleteMeme = this.deleteMeme.bind(this);
	}

	addMeme(memeObj) {
		this.props.dispatch({ type: "MAKE_MEME", payload: memeObj });
	}

	deleteMeme(id) {
		this.props.dispatch({ type: "DELETE_MEME", payload: {id} });
	}

	render() {
		return (
		<div className="App" >
			<MemeForm triggerAddMeme={this.addMeme}/>
			<MemeBox memes={this.props.memes} triggerDeleteMeme={this.deleteMeme}/>
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

