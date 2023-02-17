import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
	return (
		<main id='home'>
			<div className='left'>
				<h2>Welcome</h2>
				<Link to='/products'>
					<button>Shop now</button>
				</Link>
			</div>
		</main>
	);
}

export default Home;
