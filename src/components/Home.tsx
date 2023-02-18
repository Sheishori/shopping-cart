import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
	return (
		<main id='home'>
			<div className='left'>
				<h2>Welcome to Manics</h2>
				<p>Everything you need just a couple clicks away</p>
				<Link to='/products'>
					<button>Shop now</button>
				</Link>
			</div>
			<div className='background'> </div>
		</main>
	);
}

export default Home;
