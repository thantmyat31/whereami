import React, { useState } from 'react';

const Button = ({ children, onClick, style }) => {
	const [ hoverStyle, setHoverStyle ] = useState();
	const handleOnMouseOver = () => {
		setHoverStyle({ opacity: 0.6 });
	};
	const handleOnMouseOut = () => {
		setHoverStyle({ opacity: 1 });
	};
	return (
		<button
			style={hoverStyle ? { ...styles.button, ...hoverStyle, ...style } : { ...styles.button, ...style }}
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
