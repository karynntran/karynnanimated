import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import Hero from './components/hero';
import Nav from './components/nav';

import HelloView from './components/helloview';
import WorkView from './components/workview';
import PortfolioView from './components/portfolioview';
import ContactView from './components/contactview';


import MainView from './components/mainview';


// create a new component. this component should produce some html

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			loaded: false,
			data: {},
			currentView: '',
			title: 'karynn elio tran'
		};

		this.handleScroll = this.handleScroll.bind(this);

	}

	componentDidMount(){
		let mainWindow = document.getElementsByClassName('main-content')[0];
		mainWindow.addEventListener('scroll', this.handleScroll);
		this.state.loaded = true;
	}

	componentWillUnmount() {
	    mainWindow.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(e){
		let views = [HelloView, WorkView, PortfolioView, ContactView]

		let sections = 4,
			containerHeight = document.getElementsByClassName('main-content-container')[0].clientHeight,
			sectionHeight = containerHeight/sections,
			section = document.getElementsByTagName('section');

		console.log(containerHeight, containerHeight/sections)

		if (this.state.loaded) {
			let currentPos = Math.floor((e.target.scrollTop / containerHeight) * sections);
			let activeSection = views[currentPos];

			this.setState({
				currentView: activeSection
			})

		}
	}

	render(){
		return (
			<div className="content-container">
				<Hero title={this.state.title} />
				<MainView currentView={this.state.currentView}/>
			</div>
		)
	}
}

// take this component's generated  html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));