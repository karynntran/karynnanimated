import React, { Component } from 'react';


const WorkView = (props) => {

	return (
		<section className="content work-content">
			<div className="inner-content">
				<ul className="positions-ul">
					<li className="positions-li quartz">
						<div className="work-logo"></div>
						<div className="work-details">
							<div className="work-description">
								<p className="work-title">Junior Ad Engineer</p>
								I work with designers, producers and content specialists to create custom, interactive creatives. Recent projects include experiments with CSS animations, 3D frameworks like Web-GL and Three.js and mobile native pressure touch functionality.
							</div>
						</div>
					</li>
					<li className="positions-li tda">
						<div className="work-logo"></div>
						<div className="work-details">
							<div className="work-description">
								<p className="work-title">Web Developer Apprentice</p>
								I designed and developed multiple reporting dashboards, as well as collaborated on building TDs new Investools website.
							</div>
						</div>
					</li>
					<li className="positions-li cspace">
						<div className="work-logo"></div>
						<div className="work-details">
							<div className="work-description">
								<p className="work-title">Senior Consultant</p>
								I experimented with research methodologies to understand consumer mindset around brands, and wrote and designed visually engaging presentations around key insights.
							</div>
						</div>
					</li>
					<li className="positions-li mediaplanet">
						<div className="work-logo"></div>
						<div className="work-details">
							<div className="work-description">
								<p className="work-title">Publisher</p>
								I published two reports in the Washington Post and USA Today for over 1 million readers, by researching and sourcing content, as well as developing business partnerships for key campaigns.
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	); 
};

export default WorkView;