import React from 'react';
import '../styles/Cart.css';

function Cart() {
	return (
		<main id='cart'>
			<h3>Your cart:</h3>
			<div className='contents'>
				<div className='left'>Your cart is empty!</div>
				<div className='right'>
					<p>Total:</p>
					<button id='checkout'>Checkout</button>
				</div>
			</div>
			<button className='back'>Go back</button>
		</main>
	);
}

export default Cart;
