import React, { Component } from 'react';



class NavItem extends Component {
	constructor(props) {
		super(props);

		this.state = { active: false };
		this._selectedNav = this._selectedNav.bind(this);

	}

	_selectedNav(id, category){
		this.props.setMainView(id, category);
	}


	render(){
		return (
			<li data-id={this.props.id} className="category-container" key={this.props.category} onClick={() => { this._selectedNav(this.props.id, this.props.category) }}>
				<div className={["category", this.props.category].join(" ")}>{this.props.category}</div>
			</li>
		)
	}

};

export default NavItem;