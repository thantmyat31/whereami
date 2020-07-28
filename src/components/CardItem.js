import React, { useContext } from 'react';
import CardItemList from './CardItemList';
import Button from './Button';
import { PlacesContext } from '../contexts/places.context';
import useScreenSize from './../hooks/useScreenSize';

const CardItem = ({ data, onClick }) => {
	const { setValue } = useContext(PlacesContext);

	const screenSize = useScreenSize();

	const handleOnDelete = (id) => {
		const localData = JSON.parse(localStorage.getItem('localData'));
		const insertData = localData.filter((data) => data.id !== id);
		localStorage.setItem('localData', JSON.stringify(insertData));

		setValue(insertData);
	};

	return (
		<div
			style={
				screenSize && screenSize.width < 400 ? (
					{ ...styles.placeContainer, ...styles.placeContainerSD }
				) : (
					styles.placeContainer
				)
			}
		>
			<img
				style={screenSize && screenSize.width < 400 ? { ...styles.image, ...styles.widthSD } : styles.image}
				onClick={onClick}
				src={data.image}
				alt="location map"
			/>
			<div
				style={screenSize && screenSize.width < 400 ? { ...styles.details, ...styles.widthSD } : styles.details}
			>
				<ul style={styles.list}>
					<CardItemList label="Address" value={data.address ? data.address : 'Unknown address'} />
					<CardItemList label="Latitude" value={data.location.lat.toFixed(4)} />
					<CardItemList label="Longitude" value={data.location.lng.toFixed(4)} />
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
	placeContainerSD: {
		flexDirection: 'column'
	},
	widthSD: {
		maxWidth: '100%'
	},
	image: {
		maxWidth: '30%',
		minWidth: '160px',
		height: 'auto',
		cursor: 'pointer',
		objectFit: 'cover'
	},
	details: {
		maxWidth: '70%',
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
