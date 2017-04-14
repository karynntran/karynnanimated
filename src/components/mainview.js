import React, { Component } from 'react';

import Nav from './nav';
import HelloView from './helloview';
import WorkView from './workview';
import PortfolioView from './portfolioview';
import ContactView from './contactview';



class MainView extends Component {
	constructor(props) {
		super(props);

		this.state = { currentView: this.props.currentView};

		console.log(this.props)
	}

	render(){
		return (
			<div className="main-view HelloView">
				<Nav setMainView={this.props.setMainView}/>
				<div className="main-content">
					<div className="main-content-container">
						<HelloView />
						<WorkView />
						<PortfolioView />
						<ContactView />
					</div>
				</div>
			</div>
		)
	}

};


export default MainView;