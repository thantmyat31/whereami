import React, { useState, useEffect } from 'react';

import CardItem from './../../components/CardItem';

import './Places.css';

const PlacesPage = () => {
	const [ localData, setLocalData ] = useState();
	useEffect(() => {
		setLocalData(JSON.parse(localStorage.getItem('localData')));
	}, []);
	return (
		<div className="placespage">{localData && localData.map((data) => <CardItem key={data.id} data={data} />)}</div>
	);
};

export default PlacesPage;
