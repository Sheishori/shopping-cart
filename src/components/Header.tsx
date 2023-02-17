import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<Link to='/'>
				<h1>Store</h1>
			</Link>
			<Navigation />
		</header>
	);
}

export default Header;
