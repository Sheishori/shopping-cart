import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div id='nav'>
			<ul>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link to='/products'>
					<li>Products</li>
				</Link>
				<Link to='/cart'>
					<li>Cart</li>
				</Link>
			</ul>
		</div>
	);
}

export default Navigation;
