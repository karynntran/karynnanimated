import React, { Component } from 'react';

class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render(){
		const navCategories = ["aboutme", "work", "portfolio", "contact"];

		const categories = navCategories.map((category) => {
			return (
				<li className="category-container" key={category}>
					<div className={["category", category].join(" ")}></div>
				</li>
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
