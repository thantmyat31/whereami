import React, { useState, useEffect, useContext } from 'react';

import CardItem from './../../components/CardItem';

import { PlacesContext } from '../../contexts/places.context';
import './Places.css';
import ImageLightBox from '../../components/ImageLightBox';

const PlacesPage = () => {
	const [ localData, setLocalData ] = useState();
	const [ showLightBox, setShowLightBox ] = useState(false);
	const [ imageUri, setImageUri ] = useState();
	const { value } = useContext(PlacesContext);

	useEffect(
		() => {
			if (value) setLocalData(value);
		},
		[ value ]
	);

	const handleOnViewImage = (imageUri) => {
		setShowLightBox(true);
		setImageUri(imageUri);
	};
	const handleOnLightBoxClose = () => {
		setShowLightBox(false);
		setImageUri('');
	};

	return (
		<React.Fragment>
			<div className="placespage">
				{localData &&
					localData.map((data) => (
						<CardItem onClick={() => handleOnViewImage(data.image)} key={data.id} data={data} />
					))}
			</div>
			{imageUri && showLightBox ? <ImageLightBox onClose={handleOnLightBoxClose} uri={imageUri} /> : null}
		</React.Fragment>
	);
};

export default PlacesPage;
