import React, { useState, useEffect, useContext } from 'react';

import CardItem from './../../components/CardItem';

import { PlacesContext } from '../../contexts/places.context';
import './Places.css';

const PlacesPage = () => {
	const [ localData, setLocalData ] = useState();
	const { value } = useContext(PlacesContext);

	useEffect(
		() => {
			if (value) setLocalData(value);
		},
		[ value ]
	);
	return (
		<div className="placespage">{localData && localData.map((data) => <CardItem key={data.id} data={data} />)}</div>
	);
};

export default PlacesPage;
