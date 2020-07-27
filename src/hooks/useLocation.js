import { useState, useEffect } from 'react';
import axios from 'axios';
import ENV from './../env/env';

const useLocation = () => {
	const [ location, setLocation ] = useState();

	useEffect(() => {
		getGeolocation();
	}, []);

	const getGeolocation = async () => {
		const URL = 'https://www.googleapis.com/geolocation/v1/geolocate';
		try {
			const result = await axios.post(`${URL}?key=${ENV.GOOGLE_API_KEY}`);
			setLocation(result.data.location);
		} catch (error) {
			console.log(error);
		}
	};

	if (location) return location;
	return null;
};
export default useLocation;
