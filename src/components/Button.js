import React, { useState } from 'react';

const Button = ({ children, onClick }) => {
	const [ hoverStyle, setHoverStyle ] = useState();
	const handleOnMouseOver = () => {
		setHoverStyle({ backgroundColor: '#777' });
	};
	const handleOnMouseOut = () => {
		setHoverStyle({ backgroundColor: '#535353' });
	};
	return (
		<button
			style={hoverStyle ? { ...styles.button, ...hoverStyle } : styles.button}
			onMouseOver={handleOnMouseOver}
			onMouseOut={handleOnMouseOut}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

const styles = {
	button: {
		backgroundColor: '#535353',
		padding: '5px 20px',
		marginBottom: 10,
		border: 'none',
		borderRadius: 5,
		outline: 'none',
		cursor: 'pointer',
		color: '#fff',
		boxShadow: '0 2px 5px 2px #d6d6d6',
		fontSize: 14,
		textTransform: 'uppercase',
		transition: '0.3s'
	}
};

export default Button;
