import React, { useContext } from 'react';
import CardItemList from './CardItemList';
import Button from './Button';
import { PlacesContext } from '../contexts/places.context';

const CardItem = ({ data }) => {
	const { setValue } = useContext(PlacesContext);

	const handleOnDelete = (id) => {
		const localData = JSON.parse(localStorage.getItem('localData'));
		const insertData = localData.filter((data) => data.id !== id);
		localStorage.setItem('localData', JSON.stringify(insertData));

		setValue(insertData);
	};
	return (
		<div style={styles.placeContainer}>
			<img style={styles.image} src={data.image} alt="location map" />
			<div style={styles.details}>
				<ul style={styles.list}>
					<CardItemList label="Address" value={data.address ? data.address : 'Unknown address'} />
					<CardItemList label="Latitude" value={data.location.lat} />
					<CardItemList label="Longitude" value={data.location.lng} />
					<CardItemList label="Date" value={data.date} />
					<CardItemList label="Time" value={data.time} />
				</ul>
				<div style={styles.buttonContainer}>
					<Button style={styles.button} onClick={() => handleOnDelete(data.id)}>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
};

const styles = {
	placeContainer: {
		maxWidth: '100%',
		height: 'auto',
		border: '1px solid #d6d6d6',
		display: 'flex',
		flexDirection: 'row',
		margin: 10
	},
	image: {
		maxWidth: '30%',
		minWidth: '160px',
		maxHeight: '217.69px'
	},
	details: {
		width: '70%',
		padding: 10,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	list: {
		listStyle: 'none'
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	button: {
		backgroundColor: 'rgb(226 61 61)'
	}
};

export default CardItem;
