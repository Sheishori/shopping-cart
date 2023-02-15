import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import './styles/App.css';

function App() {
	return (
		<div id='App'>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/products' element={<Products />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
