import { stat } from 'fs';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Cart.css';

function Cart() {
	const cartContents = useSelector((state: any) => state.cart);

	useEffect(() => {
		console.log(cartContents);
	}, []);

	return (
		<main id='cart'>
			<h3>Your cart:</h3>
			<div className='contents'>
				<div className='left'>
					<p role='dialog'>Your cart is empty!</p>
				</div>
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
