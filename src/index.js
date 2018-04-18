import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import Hero from './components/hero';
// import Nav from './components/nav';

import HelloView from './components/helloview';
import WorkView from './components/workview';
import PortfolioView from './components/portfolioview';
import ContactView from './components/contactview';


import MainView from './components/mainview';
import Swipe from 'react-easy-swipe';

import ReactSlider from 'react-slider';


// create a new component. this component should produce some html

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			loaded: false,
			data: {},
			currentView: HelloView,
			title: 'karynn elio tran'
		};

		this._setMainView = this._setMainView.bind(this);

	}


	componentDidMount(){
		let mainWindow = document.getElementsByClassName('main-content')[0],
			contentcontainer = document.getElementsByClassName('content-container')[0];

		document.getElementsByClassName('container')[0].classList += ' loaded'
		this.state.loaded = true;
	}

	componentWillUnmount() {

	}

	_setMainView(option, section){

		console.log(option)

		let sectionsOne = document.querySelectorAll('section'),
			mainWindowOne = document.getElementsByClassName('main-content')[0],
			maincontainerOne = document.getElementsByClassName('main-content-container')[0];



		let viewsOne = [HelloView, WorkView, PortfolioView, ContactView]

		this.setState({
			currentView: viewsOne[option]
		})


	};


	render(){
		return (
			<div className="content-container">
				<MainView currentView={this.state.currentView} setMainView={this._setMainView}/>
			</div>
		)
	}
}

// take this component's generated  html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));