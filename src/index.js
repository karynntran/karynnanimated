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
import Swipe from 'react-easy-swipe';



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
		this.handleScroll = this.handleScroll.bind(this);


	}


	componentDidMount(){
		let mainWindow = document.getElementsByClassName('main-content')[0],
			contentcontainer = document.getElementsByClassName('content-container')[0];

		mainWindow.addEventListener('scroll', this.handleScroll);
		this.state.loaded = true;

		setTimeout(function(){
			contentcontainer.classList.remove('animate');	
		},500)
	}

	componentWillUnmount() {
	    mainWindow.removeEventListener('scroll', this.handleScroll);
	}

	_setMainView(option, section){

		let sections = document.querySelectorAll('section'),
		maincontainer = document.getElementsByClassName('main-content-container')[0],
		activeSectionOffset = sections[option].offsetTop;

		maincontainer.style.top = '-' + activeSectionOffset + 'px';


		// maincontainer.classList.remove('hello', 'work', 'portfolio', 'contact');
		// maincontainer.classList.add(section);


		let views = [HelloView, WorkView, PortfolioView, ContactView]

		this.setState({
			currentView: views[option]
		})
	};

	handleScroll(e){
		let views = [HelloView, WorkView, PortfolioView, ContactView]

		let sections = 4,
			containerHeight = document.getElementsByClassName('main-content-container')[0].clientHeight,
			sectionHeight = containerHeight/sections,
			section = document.querySelectorAll('section'),
			maincontainer = document.getElementsByClassName('main-content-container')[0];

		
			maincontainer.style.top = 0;


		if (this.state.loaded) {
			let currentPos = Math.floor(((e.target.scrollTop / containerHeight + .1)) * sections);
			let activeSection = section[currentPos];

			if (!(activeSection.className.indexOf('active') != -1)) {
				[].forEach.call(section, function(sect) {
				    sect.classList.remove("active");
				});
				activeSection.className += " active";

				this.setState({
					currentView: views[currentPos]
				})
			}

		}
	}

	render(){
		return (
			<div className="content-container animate">
				<Hero title={this.state.title} />
				<MainView currentView={this.state.currentView} setMainView={this._setMainView}/>
			</div>
		)
	}
}

// take this component's generated  html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));