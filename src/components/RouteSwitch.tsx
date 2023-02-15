import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Catalog from './Catalog';
import Cart from './Cart';

function RouteSwitch() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Catalog />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default RouteSwitch;
