import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/Cart.css';

function Cart() {
	const cartContents = useSelector((state: any) => state.cart);

	function init() {
		if (cartContents.length === 0) {
			return <div role='dialog'>Your cart is empty!</div>;
		} else {
			return (
				<div>
					<h2>Your cart:</h2>
					<div className='contents'>
						<ul className='left'>
							{cartContents.map((item: any) => (
								<li key={item.id}>
									<div className='img'>
										<img src={item.image} alt={item.title} />
									</div>
									<div className='info'>
										<div className='title'>{item.title}</div>
										<div className='price'>${item.price}</div>
									</div>
									<div className='quantity'>
										Qty: <div>{item.quantity}</div>
									</div>
								</li>
							))}
						</ul>
						<div className='right'>
							<p>Total:</p>
							<button id='checkout'>Checkout</button>
						</div>
					</div>
				</div>
			);
		}
	}

	return (
		<main id='cart'>
			{init()}
			<button className='back'>Go back</button>
		</main>
	);
}

export default Cart;
