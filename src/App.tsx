import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RouteSwitch from './components/RouteSwitch';
import './styles/App.css';

function App() {
	return (
		<div id='App'>
			<Header />
			<RouteSwitch />
			<Footer />
		</div>
	);
}

export default App;
