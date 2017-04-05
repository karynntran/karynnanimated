import React, { Component } from 'react';


const ContactView = (props) => {

	return (
		<section className="content contact-content">
			<div className="inner-content">
				<ul className="email-ul">
					<li className="contact-li">
						<div className="contact-type email">
							<a href="mailto:karynn.tran@gmail.com?subject=Hi Karynn" target="_blank"></a>
						</div>
					</li>
					<li className="contact-li">
						<div className="contact-type github">
							<a href="https://github.com/karynntran" target="_blank"></a>
						</div>
					</li>
					<li className="contact-li">
						<div className="contact-type linkedin">
							<a href="https://linkedin.com/in/karynneliotran" target="_blank"></a>
						</div>
					</li>
				</ul>
			</div>
		</section>
	); 
};

export default ContactView;