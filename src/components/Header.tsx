import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
	return (
		<header>
			<Link to='/'>
				<h1>Manics</h1>
			</Link>
			<Navigation />
		</header>
	);
}

export default Header;
