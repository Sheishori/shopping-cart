import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div id='nav'>
			<Link to='/'>Home</Link>
			<Link to='/products'>Products</Link>
			<Link to='/cart'>Cart</Link>
		</div>
	);
}

export default Navigation;
