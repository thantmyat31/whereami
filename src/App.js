import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/Home/Home.page';
import PlacesPage from './pages/Places/Places.page';
import NotFoundPage from './pages/NotFound/NotFound.page';

import MainHeader from './components/MainHeader';
import { PlacesContext } from './contexts/places.context';

function App() {
	const [ value, setValue ] = useState([]);
	useEffect(() => {
		setValue(JSON.parse(localStorage.getItem('localData')));
	}, []);
	return (
		<React.Fragment>
			<PlacesContext.Provider value={{ value, setValue }}>
				<MainHeader />
				<Switch>
					<Route path="/places" component={PlacesPage} />
					<Route path="/not-found" component={NotFoundPage} />
					<Route exact path="/" component={HomePage} />
					<Redirect to="/not-found" />
				</Switch>
			</PlacesContext.Provider>
		</React.Fragment>
	);
}

export default App;
