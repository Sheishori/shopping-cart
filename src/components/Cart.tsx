import { stat } from 'fs';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Cart.css';

function Cart() {
	const cartContents = useSelector((state: any) => state.cart);

	useEffect(() => {
		console.log(cartContents);
	}, []);

	function init() {
		if (cartContents.length === 0) {
			return <div role='dialog'>Your cart is empty!</div>;
		} else {
			return (
				<div>
					<h3>Your cart:</h3>
					<div className='contents'>
						<div className='left'>{}</div>
						<div className='right'>
							<p>Total:</p>
							<button id='checkout'>Checkout</button>
						</div>
					</div>
					<button className='back'>Go back</button>
				</div>
			);
		}
	}

	return <main id='cart'>{init()}</main>;
}

export default Cart;
