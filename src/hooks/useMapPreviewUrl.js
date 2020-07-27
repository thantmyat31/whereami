import { useState, useEffect } from 'react';
import useLocation from './useLocation';
import ENV from './../env/env';

const useMapPreviewUrl = () => {
	const [ url, setUrl ] = useState();
	const location = useLocation();

	useEffect(
		() => {
			if (location)
				setUrl(
					`https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=16&size=300x350&maptype=roadmap&markers=color:red%7Clabel:C%7C${location.lat},${location.lng}&key=${ENV.GOOGLE_API_KEY}`
				);
		},
		[ location ]
	);

	if (url) return url;
	return null;
};

export default useMapPreviewUrl;
