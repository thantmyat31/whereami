import React from 'react';

const CardItemList = ({ label, value }) => {
	return (
		<li style={styles.listItem}>
			<strong>{label} : </strong> <span style={styles.text}>{value}</span>
		</li>
	);
};

const styles = {
	listItem: {
		marginBottom: 5
	},
	text: {
		color: '#777'
	}
};

export default CardItemList;
