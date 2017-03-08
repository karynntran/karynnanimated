import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import Header from './components/header';
import Nav from './components/nav';
import Intro from './components/intro';



// create a new component. this component should produce some html

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			data: {}
		};

	}

	render(){
		return (
			<div>
				<Header />
				<Nav />
				<Intro />
			</div>
		)
	}
}

// take this component's generated  html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));