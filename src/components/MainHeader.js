import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png';
import { PlacesContext } from '../contexts/places.context';

const MainHeader = () => {
	const { value, setValue } = useContext(PlacesContext);

	return (
		<header style={styles.header}>
			<img src={Logo} alt="logo" />
			<div style={styles.container}>
				<Link style={styles.link} to="/">
					Home
				</Link>
				<Link style={styles.link} to="/places">
					Places {value ? <span style={styles.counter}>{value.length}</span> : null}
				</Link>
			</div>
		</header>
	);
};

const styles = {
	header: {
		padding: 15,
		backgroundColor: '#719671',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},
	link: {
		color: '#fff',
		textDecoration: 'none',
		textTransform: 'uppercase',
		margin: '0 20px'
	},
	counter: {
		display: 'inline-block',
		padding: '3px 4px',
		textAlign: 'center',
		color: '#fff',
		backgroundColor: '#ff0000',
		borderRadius: 12
	}
};

export default MainHeader;
