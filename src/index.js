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
			data: {},
			currentView: HelloView,
			title: 'karynn elio tran'
		};

		this.loaded = false;

		this._setMainView = this._setMainView.bind(this);
		this.handleScroll = this.handleScroll.bind(this);


	}


	componentDidMount(){
		this.loaded = true;
		let mainWindow = document.getElementsByClassName('main-content')[0],
			contentcontainer = document.getElementsByClassName('content-container')[0];

		mainWindow.addEventListener('scroll', this.handleScroll);

		setTimeout(function(){
			contentcontainer.classList.remove('animate');	
		},500)
	}

	componentWillUnmount() {
	    mainWindow.removeEventListener('scroll', this.handleScroll);
	}

	_setMainView(option, section){

		console.log(option)

		let sectionsOne = document.querySelectorAll('section'),
			 mainWindowOne = document.getElementsByClassName('main-content')[0],

		maincontainerOne = document.getElementsByClassName('main-content-container')[0],
		activeSectionOffsetOne = sectionsOne[option].offsetTop;


		mainWindowOne.removeEventListener('scroll', this.handleScroll);

		maincontainerOne.style.top = '-' + option + '00%';


		// maincontainer.classList.remove('hello', 'work', 'portfolio', 'contact');
		// maincontainer.classList.add(section);


		let viewsOne = [HelloView, WorkView, PortfolioView, ContactView]

		this.setState({
			currentView: viewsOne[option]
		})

		setTimeout(function(){
			mainWindowOne.addEventListener('scroll', this.handleScroll);
		},1500)

	};

	handleScroll(e){
		let viewsTwo = [HelloView, WorkView, PortfolioView, ContactView]

		let sectionsTwo = 4,
			containerHeightTwo = document.getElementsByClassName('main-content-container')[0].clientHeight,
			sectionHeight = containerHeightTwo/sectionsTwo,
			sectionTwo = document.querySelectorAll('section'),
			maincontainerTwo = document.getElementsByClassName('main-content-container')[0];

			maincontainerTwo.style.top = 'auto';


		if (this.state.loaded) {
			let currentPos = Math.floor(((e.target.scrollTop / containerHeightTwo + .1)) * sectionsTwo);
			let activeSection = sectionTwo[currentPos];

			if (!(activeSection.className.indexOf('active') != -1)) {
				[].forEach.call(sectionTwo, function(sect) {
				    sect.classList.remove("active");
				});
				activeSection.className += " active";

				console.log(currentPos)

				// maincontainerTwo.style.top = '-' + currentPos + '00%';

				this.setState({
					currentView: viewsTwo[currentPos]
				})
			}

		}
	}

	render(){
		if (this.loaded) {
			return (
				<div className="content-container animate">
					<Hero title={this.state.title} />
					<MainView currentView={this.state.currentView} setMainView={this._setMainView}/>
				</div>
			)
		} else {
			return (
				<div>
					Loading...
				</div>
			)	
		}
	}
}

// take this component's generated  html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));