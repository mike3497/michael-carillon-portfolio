import React from 'react';
import './Label.css';

export const Label = ({ props, children }) => {
	return (
		<label {...props} className="label">
			{children}
		</label>
	);
};
