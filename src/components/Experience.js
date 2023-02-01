import React, { useState } from 'react';
import './Experience.css';
import { AcmeFreshMarketExperience } from './work-experiences/AcmeFreshMarketExperience';
import { GoodyearExperience } from './work-experiences/GoodyearExperience';
import { SalesforceExperience } from './work-experiences/SalesforceExperience';
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
					<ul className="experience-list mb-2">
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
					{selectedIndex === 0 && <AcmeFreshMarketExperience />}

					{selectedIndex === 1 && <SalesforceExperience />}

					{selectedIndex === 2 && <GoodyearExperience />}
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
					<p>
						I am dedicated to providing high-quality work that meets your
						expectations. I take pride in my attention to detail and am
						constantly updating my knowledge and skills to stay ahead of
						industry trends and to provide the best work possible.
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
						<a
							className="button"
							href="/pdfs/Michael Carillon Resume 2023.pdf"
							download="Michael Carillon Resume 2023"
						>
							<i className="fa-solid fa-download"></i> Resume PDF
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
