import React from 'react';
import './Button.css';

function Button({ props, children }) {
	return (
		<button {...props} className="button">
			{children}
		</button>
	);
}

export default Button;
