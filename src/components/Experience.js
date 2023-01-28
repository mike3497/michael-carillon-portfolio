import React, { useState } from 'react';
import './Experience.css';
import Button from './ui/Button';

export const Experience = () => {
	const [selectedIndex, setSelectedIndex] = useState(2);

	const handleClickCompany = (e) => {
		const index = Number.parseInt(e.target.dataset.index);

		setSelectedIndex(index);
	};

	return (
		<div id="experience" className="container mt-8 mb-8">
			<div className="row mb-2">
				<div className="col-sm-12">
					<h5>//Experience</h5>
				</div>
			</div>
			<div className="row mb-2">
				<div className="col-lg-4">
					<ul className="experience-list mb-4">
						<li>
							<button
								data-index="0"
								onClick={handleClickCompany}
								className={selectedIndex === 0 ? 'active' : ''}
							>
								Acme Fresh Market
							</button>
						</li>
						<li>
							<button
								data-index="1"
								onClick={handleClickCompany}
								className={selectedIndex === 1 ? 'active' : ''}
							>
								Acumen Solutions / Salesforce
							</button>
						</li>
						<li>
							<button
								data-index="2"
								onClick={handleClickCompany}
								className={selectedIndex === 2 ? 'active' : ''}
							>
								The Goodyear Tire & Rubber Co.
							</button>
						</li>
					</ul>
				</div>
				<div className="col-lg-8">
					{selectedIndex === 0 && (
						<div>
							<p className="small mb-1">Acme Fresh Market</p>
							<p className="bold mb-1">
								Digital Content Specialist / Data Analyst
							</p>
							<p className="small">December 2017 - October 2020</p>
							<p>
								Maintain the digital shelf for all items on e-commerce platform,
								including editing product and brand descriptions to make them
								customer-facing and adding product images for items that do not
								have images using a custom content management system
							</p>
							<p>
								Merchandise products within the e-commerce platform to drive
								traffic, conversion, and average order value by representing the
								weekly ad online and simplifying customers’ online experience
							</p>
							<p>
								Analyze Google Analytics Data and Apply knowledge to drive
								conversion and basket size growth, and to suggest ways to
								simplify customers’ online experience
							</p>
							<p>
								Implement and create effective and innovative online
								merchandising strategies to drive total online sales and
								profitability
							</p>
							<p>
								Manage the Placement of products that are displayed digitally
								across acmestores.com
							</p>
							<p>
								Execute email campaigns to specific lists using Mailchimp, and
								analyze performance of campaigns
							</p>
							<p>
								Post social media content using Later / Hootsuite or similar
								social media management tool
							</p>
							<p>
								Use Customer Relationship Management software and customer
								database to manage promotions and create targeted groups, and to
								provide analysis of the performance of promotions
							</p>
							<p>
								Create weekly store signage package using custom web-based
								platform
							</p>
						</div>
					)}

					{selectedIndex === 1 && (
						<div>
							<p className="small mb-1">Acumen Solutions / Salesforce</p>
							<p className="bold mb-1">Associate Technical Consultant</p>
							<p className="small">October 2020 - April 2022</p>
							<p>
								Participate in the full application life cycle from technical
								design to development, testing, and deployment using
								contemporary Cloud based development tools
							</p>
							<p>
								Interact directly with customer, development team, and other
								stakeholders to ensure customer success
							</p>
							<p>
								Design, develop and integrate Salesforce applications using
								Visualforce, APEX, Java, .NET, modern web technologies, and
								native mobile platforms (iOS, Android)
							</p>
							<p>
								Work with technical teams and senior architects to finalize
								architecture specifications, and creates design as it relates to
								the customization and/or integration of software solutions
							</p>
							<p>
								Develop proofs of concept (POC) as needed, integrating new
								components with back office systems during the design and
								requirements phase to evaluate products and integration
								strategies
							</p>
							<p>
								Validate application code against unit tests, security tests,
								and profiling tools
							</p>
							<p>
								Assist in identifying, troubleshooting, and resolving defects
								encountered during various stages of project delivery, including
								during the deployment and implementation of the solution in
								production environments
							</p>
							<p>
								Produce project documentation, including functional and
								technical designs, and end-user guides
							</p>
						</div>
					)}

					{selectedIndex === 2 && (
						<div>
							<p className="small mb-1">The Goodyear Tire & Rubber Co.</p>
							<p className="bold mb-1">Applications Developer Senior Analyst</p>
							<p className="small">April 2022 - January 2023</p>
							<p>
								Odio urna aliquet amet facilisis massa blandit ut ac iaculis.
								Ornare in sit urna elementum orci fermentum vitae amet. Est
								mauris ipsum non facilisis. Lacus elit nunc eget faucibus odio
								dignissim cursus mi. Egestas mattis pharetra pretium diam eget
								quis. Ante fames ornare aliquet varius turpis. Iaculis cursus
								faucibus ullamcorper auctor gravida venenatis maecenas laoreet
								sit.
							</p>
						</div>
					)}
				</div>
			</div>
			<div className="row">
				<div className="col-lg-8">
					<p>
						I am a web developer with 2 years of experience in designing and
						developing responsive websites and web applications. I am proficient
						in HTML, CSS, JavaScript. I have a strong understanding of front-end
						development and web design principles. I am experienced in using
						React, NextJS, and Node.Js. I am familiar with Agile development
						methodologies and version control systems such as Git. I am a team
						player with excellent communication and problem-solving skills. I am
						highly motivated to stay current with industry trends and
						advancements in web development technology.
					</p>
					<p>Some languages I speak are:</p>
					<ul className="languages-list">
						<li>
							<i className="fa-solid fa-caret-right"></i> HTML
						</li>
						<li>
							<i className="fa-solid fa-caret-right"></i> CSS
						</li>
						<li>
							<i className="fa-solid fa-caret-right"></i> Javascript
						</li>
					</ul>
					<ul className="languages-list">
						<li>
							<i className="fa-solid fa-caret-right"></i> C#
						</li>
						<li>
							<i className="fa-solid fa-caret-right"></i> Node.js
						</li>
						<li>
							<i className="fa-solid fa-caret-right"></i> SQL
						</li>
					</ul>
					<div className="mt-2">
						<Button>
							<i className="fa-solid fa-download"></i> Resume
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
