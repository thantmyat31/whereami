import { useState, useEffect } from 'react';

import axios from 'axios';
import ENV from './../env/env';
import useLocation from './useLocation';

const useGeocoding = () => {
	const [ address, setAddress ] = useState();

	const location = useLocation();
	useEffect(
		() => {
			if (location) getGeocoding(location);
		},
		[ location ]
	);

	const getGeocoding = async (location) => {
		const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}`;

		try {
			const result = await axios.get(`${URL}&key=${ENV.GOOGLE_API_KEY}`);
			if (result) setAddress(result.data.results[0].formatted_address);
		} catch (error) {
			console.log(error);
		}
	};

	if (address) return address;
	return null;
};

export default useGeocoding;
