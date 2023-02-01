import React from 'react';
import { ExperienceTab } from './ExperienceTab';

export const GoodyearExperience = () => {
	return (
		<ExperienceTab
			companyName="The Goodyear Tire & Rubber Co."
			jobTitle="Applications Developer Senior Analyst"
			datesWorked="April 2022 - January 2023"
		>
			<p>Worked for NASCAR division</p>
			<p>
				Maintained an application used to keep track of tire inventory in
				warehouse
			</p>
			<p>
				Created dashboard web application for tire engineers to view data from
				NASCAR races using a NextJS front-end, a .NET Web API back-end, and a
				MySQL database
			</p>
			<p>
				Wrote and tested software on schedule in support of company objectives
				as defined by the software development manager
			</p>
			<p>
				Communicated with other developers as well as supervisor concerning
				software changes before, during, and upon their completion
			</p>
			<p>Conformed software to established coding guidelines</p>
			<p>
				Created UI/UX mockups in Figma with help and guidance from UI/UX
				Specialist
			</p>
		</ExperienceTab>
	);
};
