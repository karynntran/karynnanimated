import React, { Component } from 'react';


const IntroView = (props) => {
	const introViewWords = ["new yorker", "web developer", "frontend engineer", "researcher", "crafter", "kickboxer", "marathoner"];

	return (
		<div className="content intro-content">
			<div className="intro">hi, my name is karynn.</div>
			<div className="intro-changer">
				i am a 
				<span className="word"></span>
			</div>
		</div>
	); 
};

export default IntroView;