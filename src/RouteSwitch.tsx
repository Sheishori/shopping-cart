import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';

function RouteSwitch() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Catalog />} />
			</Routes>
		</BrowserRouter>
	);
}

export default RouteSwitch;
