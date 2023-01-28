import React from 'react';
import './Footer.css';
import CircleIcon from './ui/CircleIcon';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="footer__email">
							<a href="mailto:mcarillon97@gmail.com">mcarillon97@gmail.com</a>
						</div>
						<div className="footer__phone">
							<a href="tel:3307037919">(330)703-7919</a>
						</div>
						<div className="footer-icons">
							<ul>
								<li>
									<CircleIcon>
										<a href="https://github.com/mike3497">
											<i className="fa-brands fa-github"></i>
										</a>
									</CircleIcon>
								</li>
								<li>
									<CircleIcon>
										<a href="https://linkedin.com/in/michael-carillon">
											<i className="fa-brands fa-linkedin-in"></i>
										</a>
									</CircleIcon>
								</li>
							</ul>
						</div>
						<div className="footer__copyright">
							&copy; Copyright 2023 Michael Carillon
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
