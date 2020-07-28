import { useState, useEffect } from 'react';

const useLocation = () => {
	const [ location, setLocation ] = useState();

	useEffect(() => {
		getGeolocation();
	}, []);

	const getGeolocation = () => {
		const options = {
			enableHighAccuracy: true,
			timeout: 1000,
			maximumAge: 0
		};
		const success = (position) => {
			if (position) setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
		};
		const error = (error) => {
			console.log(error);
		};
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error, options);
		} else {
			alert('Your brower/OS is not support to use your location.');
		}
	};

	if (location) return location;
	return null;
};
export default useLocation;
