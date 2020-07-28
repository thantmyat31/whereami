import React from 'react';

const ImageLightBox = ({ uri, onClose }) => {
	return (
		<div style={styles.lightBox} onClick={onClose}>
			<div style={styles.imageContainer}>
				<img style={styles.image} src={uri} alt="lightbox" />
			</div>
		</div>
	);
};

const styles = {
	lightBox: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.6)',
		cursor: 'pointer'
	},
	imageContainer: {
		position: 'relative'
	},
	image: {
		width: '100%'
	}
};

export default ImageLightBox;
