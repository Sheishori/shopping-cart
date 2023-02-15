import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div id='home'>
			<h2>Welcome</h2>
			<Link to='/products'>
				<button>Shop now</button>
			</Link>
		</div>
	);
}

export default Home;
