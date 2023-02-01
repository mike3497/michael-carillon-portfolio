import React from 'react';
import PropTypes from 'prop-types';

export const ExperienceTab = (props) => {
	const { companyName, jobTitle, datesWorked, children } = props;

	return (
		<div className="experience-tab">
			<p className="small mb-1">{companyName}</p>
			<p className="bold mb-1">{jobTitle}</p>
			<p className="small">{datesWorked}</p>
			{children}
		</div>
	);
};

ExperienceTab.propTypes = {
	companyName: PropTypes.string.isRequired,
	jobTitle: PropTypes.string.isRequired,
	datesWorked: PropTypes.string.isRequired,
};
