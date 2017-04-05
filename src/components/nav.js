import React, { Component } from 'react';

import NavItem from './navitem';


class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {};

	}

	render(){
		const navCategories = ["hello", "work", "portfolio", "contact"];

		const categories = navCategories.map((category, idx) => {
			return (
				<NavItem id={idx} key={category} category={category} setMainView={this.props.setMainView} />
			)
		});

		return (
			<div className="navigation section">
				<ul className="navigation-categories">
					{categories}
				</ul>
			</div>
		)
		
	}

};

export default Nav;
