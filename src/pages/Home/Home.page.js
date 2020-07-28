import React, { useContext } from 'react';

import Button from '../../components/Button';
import MapPreview from '../../components/MapPreview';

import useLocation from './../../hooks/useLocation';
import useGeocoding from './../../hooks/useGeocoding';
import useMapPreviewUrl from '../../hooks/useMapPreviewUrl';
import { PlacesContext } from '../../contexts/places.context';

import NoLocation from './../../assets/no-location.png';
import './Home.css';

const HomePage = () => {
	const { setValue } = useContext(PlacesContext);

	const location = useLocation();
	const address = useGeocoding();
	const image = useMapPreviewUrl();

	const handleOnSavePlace = () => {
		const getDate = new Date();
		const date = getDate.toLocaleDateString();
		const time = getDate.toLocaleTimeString();
		const id = Math.random().toString() + getDate.toLocaleString();
		const currentData = { id, location, address, image, date, time };
		const localData = JSON.parse(localStorage.getItem('localData'));
		const insertData = localData ? [ currentData, ...localData ] : [ currentData ];
		localStorage.setItem('localData', JSON.stringify(insertData));

		setValue(insertData);
	};

	return (
		<div className="homepage">
			<div className="imageContainer">
				{location ? (
					<MapPreview style={styles.image} location={location} />
				) : (
					<img style={styles.image} src={NoLocation} alt="no location" />
				)}
			</div>

			{location ? <Button onClick={handleOnSavePlace}>Save My Place</Button> : null}
		</div>
	);
};

const styles = {
	image: {
		width: '100%',
		height: '100%'
	}
};

export default HomePage;
