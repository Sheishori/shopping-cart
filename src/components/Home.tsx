import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
	return (
		<main id='home'>
			<h2>Welcome</h2>
			<Link to='/products'>
				<button>Shop now</button>
			</Link>
		</main>
	);
}

export default Home;
