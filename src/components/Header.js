import React from 'react';
import './Header.css';
import { Experience } from './Experience';

export const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="header-topbar">
							<ul className="header-social-media">
								<li>
									<a
										href="https://github.com/mike3497"
										aria-label="GitHub Link"
									>
										<i className="fa-brands fa-github"></i>
									</a>
								</li>
								<li>
									<a
										href="https://linkedin.com/in/michael-carillon"
										aria-label="LinkedIn link"
									>
										<i className="fa-brands fa-linkedin-in"></i>
									</a>
								</li>
							</ul>

							<ul className="header-navbar">
								<li>
									<a href="#about">About</a>
								</li>
								<li>
									<a href="#experience">Experience</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="header-message">
							<p className="mb-1">Hi, I am</p>
							<h1 className="mb-1">Michael Carillon</h1>
							<p className="mb-1">Full-stack Web Developer</p>
							<div className="header-message__contact-info">
								<a className="small bold" href="mailto:mcarillon97@gmail.com">
									mcarillon97@gmail.com
								</a>
								<a className="small" href="tel:3307037919">
									(330)703-7919
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
