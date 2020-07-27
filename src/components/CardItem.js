import React from 'react';

const CardItem = ({ data }) => {
	return (
		<div style={styles.placeContainer}>
			<img style={styles.image} src={data.image} alt="location map" />
			<div style={styles.details}>
				<ul style={styles.list}>
					<li style={styles.listItem}>
						<strong>Address : </strong> <span style={styles.text}>{data.address}</span>
					</li>
					<li style={styles.listItem}>
						<strong>Latitude : </strong> <span style={styles.text}>{data.location.lat}</span>
					</li>
					<li style={styles.listItem}>
						<strong>Longitude : </strong> <span style={styles.text}>{data.location.lng}</span>
					</li>
					<li style={styles.listItem}>
						<strong>Date : </strong> <span style={styles.text}>{data.date}</span>
					</li>
					<li style={styles.listItem}>
						<strong>Time : </strong> <span style={styles.text}>{data.time}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

const styles = {
	placeContainer: {
		maxWidth: 300,
		height: 'auto',
		border: '1px solid #d6d6d6',
		margin: 10
	},
	image: {
		width: '100%',
		height: 'auto'
	},

	details: {
		padding: 10
	},
	list: {
		listStyle: 'none'
	},

	listItem: {
		marginBottom: 5
	},

	text: {
		color: '#777'
	}
};

export default CardItem;
