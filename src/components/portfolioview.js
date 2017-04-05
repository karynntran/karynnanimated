import React, { Component } from 'react';


class PortfolioView extends Component {

		constructor(props) {
		super(props);

		this.state = { currentProject: 0 };
		this._arrowClick = this._arrowClick.bind(this);

	}

	_arrowClick(e, el){

		if (e.target.id === 'left' && this.state.currentProject >=1 ) {
			el.style.left = '-' + (this.state.currentProject - 1) * 100 + '%';
			this.setState({
				currentProject: this.state.currentProject -= 1
			})
		} else if (e.target.id === 'right' && this.state.currentProject < 4) {
			console.log('right')
			el.style.left = '-' + (this.state.currentProject + 1) * 100 + '%';
			this.setState({
				currentProject: this.state.currentProject += 1
			})
		}

		console.log(this.state.currentProject)
	}

	render() {
		const slider = document.getElementsByClassName('portfolio-ul')[0];
		console.log(slider)
		return (
			<section className="content portfolio-content">
				<div className="inner-content">
					<div id="left" className="arrow left-arrow" onClick={(e) => { this._arrowClick(e) }}></div>
					<div className="portfolio-slider">
					<ul className="portfolio-ul">
						<li className="portfolio-li">
							<a href="https://qz.com/788690/interactive-beauty-through-creation/" target="_blank"></a>
							<div className="portfolio-proj cartier">
								<div className="project-img"></div>
								<div className="project-name">Beauty through Creation</div>
								<div className="project-client">Cartier</div>
								<div className="project-description">A highly visual interactive created to engage and guide readers through artists&#39; creative processes.</div>						
								<div className="project-notables">Selected as one of Brandtale&#39;s <em>Best of the Week</em>, this experience included heavy design and development collaboration to finesse lighting, shading and other animation techniques.</div>
							</div>
						</li>
						<li className="portfolio-li">
							<a href="https://qz.com/828163/what-drives-success-a/" target="_blank"></a>
							<div className="portfolio-proj hennessy">
								<div className="project-img"></div>
								<div className="project-name">What drives success?</div>
								<div className="project-client">Hennessey</div>
								<div className="project-description">A 3D interactive experience where users can plot themselves on a grid of mastery traits.</div>
								<div className="project-notables">Three.js and Web-GL were the key frameworks used to develop a three-dimensional world. Check out the experience on mobile; this was also given a mention on Brandtale.</div>
							</div>
						</li>
						<li className="portfolio-li">
							<a href="https://www.investools.com/" target="_blank"></a>
							<div className="portfolio-proj investools">
								<div className="project-img"></div>
								<div className="project-name">Investools</div>
								<div className="project-client">TD Ameritrade</div>
								<div className="project-description">A re-design launch of the Investools, a Node.js-based education site</div>
								<div className="project-notables">This site was built with Jade, Stylus, and Jeet.gs for styling, and Selenium and Nightwatch.js for automated browser and tiered regression testing</div>
							</div>
						</li>
						<li className="portfolio-li">
							<a href="https://kcsrestaurantsupply.herokuapp.com/" target="_blank"></a>
							<div className="portfolio-proj kcs">
								<div className="project-img"></div>
								<div className="project-name">KCS Restaurant Kitchen Supply</div>
								<div className="project-client">KCS Restaurant Kitchen Supply</div>
								<div className="project-description">An easy-to-navigate website that started from a wholesale company&#39;s Excel catalogue.</div>
								<div className="project-notables">This site is the company&#39;s first web presence. It&#39;s a self-designed and developed using React and Sass, with a goal of creating a B2C look and feel for a B2B company.</div>
							</div>
						</li>
						<li className="portfolio-li">
							<a href="https://lolaskusina.herokuapp.com/" target="_blank"></a>
							<div className="portfolio-proj lolaskusina">
								<div className="project-img"></div>
								<div className="project-name">Lolas Kusina</div>
								<div className="project-client">Self</div>
								<div className="project-description">A tribute to my late grandmother - my dear Lola - and a gift for the kids and grandkids she left behind - a bright repository of her favorite recipes translated from her written recipe book (coagulated 'chocolate meat' and all!).</div>
								<div className="project-notables">React and Sass</div>
							</div>
						</li>
					</ul>
					</div>
					<div id="right" className="arrow right-arrow" onClick={(e) => { this._arrowClick(e) }}></div>

				</div>
			</section>
		)
	}; 
};

export default PortfolioView;