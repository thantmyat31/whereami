import { useLayoutEffect, useState } from 'react';

const useScreenSize = () => {
	const [ screenSize, setScreenSize ] = useState();
	useLayoutEffect(() => {
		const updateSize = () => {
			setScreenSize({ width: window.innerWidth, height: window.innerHeight });
		};
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	if (screenSize) return screenSize;
	return null;
};

export default useScreenSize;
