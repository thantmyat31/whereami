import React from 'react';
import ENV from './../env/env';

const MapPreview = ({ location, style }) => {
	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=16&size=300x350&maptype=roadmap&markers=color:red%7Clabel:C%7C${location.lat},${location.lng}&key=${ENV.GOOGLE_API_KEY}`;

	return <img style={style} src={imagePreviewUrl} alt="current location" />;
};

export default MapPreview;
