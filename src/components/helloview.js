import React, { Component } from 'react';
import ReactSlider from 'react-slider';


const HelloView = (props) => {

	return (
		<section className="content hello-content">
			<div className="inner-content">
				<div className="col left-col">
					<div className="hi1">Hi my name is Karynn.</div>	
					<div className="hi2">I am a native New Yorker, a front end developer at Quartz with 6 years of additional experience in consumer insights, and an aspiring crafter.
						<div className="text 25">I currently work at Quartz. </div>
						<div className="text 50">Here is some of my code. </div>
						<div className="text 75">These are a few of my projects. </div>
						<div className="text 100">Here is my github, linkedin and instagram if you want to learn more. </div>
					</div>
					<ReactSlider withBars onAfterChange={test}>
					    <div className="my-handle">X</div>
					  </ReactSlider>
				</div>
				<div className="col right-col">
					<div className="example 0">
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
					</div>
					<div className="example 25">
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
					</div>
					<div className="example 50">
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
					</div>
					<div className="example 75">
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
					</div>
					<div className="example 100">
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
					</div>
				</div>
			</div>
		</section>
	); 

	function test() {
		let value = document.getElementsByClassName('handle')[0].getAttribute('aria-valuenow');
		if (value >= 25 ) {
			document.getElementsByClassName('25')[0].classList += ' show';
		}
		if (value >= 50 ) {
			document.getElementsByClassName('50')[0].classList += ' show';
		}
		if (value >= 75 ) {
			document.getElementsByClassName('75')[0].classList += ' show';
		}
		if (value == 100 ) {
			document.getElementsByClassName('100')[0].classList += ' show';
		}
	}
};

export default HelloView;