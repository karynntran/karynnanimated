import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
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
				<Intro />
			</div>
		)
	}
}

// take this component's generated  html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));