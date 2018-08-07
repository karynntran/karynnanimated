import React, { Component } from 'react';
import ReactSlider from 'react-slider';


const HelloView = (props) => {

	return (

		<section className="content hello-content">
			<div className="inner-content">
				<div className="col left-col">
					<div className="intro">
						<div className="hello hello1">Hi, my name is Karynn.</div>
						<div className="hello hello2">I am a native <span className="purple-highlight">New Yorker</span>, a front end <span className="purple-highlight">developer</span>, and have <span className="purple-highlight">six years</span> of additional experience in <span className="purple-highlight">consumer insights</span>.</div>
					</div>	
						<div className="text" id="text-two">I currently work at <span className="robinsegg-highlight">Quartz</span>, but I used to work at <span className="robinsegg-highlight">TD Ameritrade, </span><span className="robinsegg-highlight">CSpace, </span>and <span className="robinsegg-highlight">MediaPlanet</span>. </div>
						<div className="text" id="text-three"><span className="robinsegg-highlight">Here</span> is some of my code. </div>
						<div className="text" id="text-four">These are a <span className="robinsegg-highlight">few creative pursuits</span> I explore in my spare time. </div>
						<div className="text" id="text-five">Here is my <span className="robinsegg-highlight">github, linkedin</span> and <span className="robinsegg-highlight">instagram</span> if you want to learn more. </div>
				</div>
				<div className="col right-col">
					<div className="example" id="example-one">
						<div className="square"></div>
					</div>
					<div className="example" id="example-two">
						<div className="square"><a href="https://www.qz.com" target="_blank"></a></div>
						<div className="square"><a href="https://www.tdameritrade.com/education.page" target="_blank"></a></div>
						<div className="square"><a href="https://cspace.com/" target="_blank"></a></div>
						<div className="square"><a href="https://www.mediaplanet.com/us/" target="_blank"></a></div>
					</div>
					<div className="example" id="example-three">
						<div className="square"><a href="https://qz.com/788690/interactive-beauty-through-creation/" target="_blank"></a></div>
						<div className="square"><a href="https://qz.com/828163/what-drives-success-a/" target="_blank"></a></div>
						<div className="square"><a href="https://kcsrestaurantsupply.herokuapp.com/" target="_blank"></a></div>
						<div className="square"><a href="https://lolaskusina.herokuapp.com/" target="_blank"></a></div>
						<div className="square"><a href="https://www.investools.com/" target="_blank"></a></div>
					</div>
					<div className="example" id="example-four">
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
						<div className="square"></div>
					</div>
					<div className="example" id="example-five">
						<div className="square"><a href="https://github.com/karynntran/" target="_blank">github</a></div>
						<div className="square"><a href="https://www.linkedin.com/in/karynneliotran" target="_blank">linkedin</a></div>
						<div className="square"><a href="https://www.instagram.com/thereyouarekar/" target="_blank">instagram</a></div>
						<div className="square"><a href="mailto:karynn.tran@email.com?Subject=hey there,%20kar">email</a></div>
					</div>
				</div>
				<ReactSlider withBars onChange={getValue}>
					<div className="sub-handle"></div>
				</ReactSlider>
				<div className="slider-labels">
					<div className="label">&#9672;</div>
					<div className="label">work</div>
					<div className="label">portfolio</div>
					<div className="label">creative</div>
					<div className="label">contact</div>

				</div>
			</div>
		</section>
	); 

	function selectLabel(category) {
	}

	function getValue() {
		let value = document.getElementsByClassName('handle')[0].getAttribute('aria-valuenow'),
			subhandle = document.getElementsByClassName('sub-handle')[0];

		if (value <= 5 ) {
			document.getElementsByClassName('inner-content')[0].classList = 'inner-content';
		}
		if (value > 5 && value < 25 ) {
			document.getElementsByClassName('inner-content')[0].classList = 'inner-content work';
		}
		if (value > 25 && value < 50 ) {
			document.getElementsByClassName('inner-content')[0].classList = 'inner-content portfolio';
		}
		if (value > 50 && value < 75 ) {
			document.getElementsByClassName('inner-content')[0].classList = 'inner-content creative';
		}
		if (value > 75 && value < 100 ) {
			document.getElementsByClassName('inner-content')[0].classList = 'inner-content contact';
		}
	}
};

export default HelloView;