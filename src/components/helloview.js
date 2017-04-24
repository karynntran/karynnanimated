import React, { Component } from 'react';


const HelloView = (props) => {

	return (
		<section className="content hello-content">
			<div className="inner-content">
				<div className="hello0">Hi there!</div>
				<div className="hello1">I am a native New Yorker, currently working as a <div className="inline">web developer in Manhattan</div>, focusing on front end technologies, <div className="inline">UX</div> and creating interactive experiences. In addition, I have 6 years of <div className="inline">experience in consumer insights</div>.</div>
			</div>
			<div className="scroll-container">
				<div className="scroll">Scroll</div>
				<div className="down-arrow"></div>
			</div>
		</section>
	); 
};

export default HelloView;