import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';
import { CartItem } from './state/types';
import '../styles/CartIndicator.css';

function CartIndicator() {
	const cart = useSelector((state: RootState) => state.cart);
	const cartContents = cart.reduce(
		(sum: number, item: CartItem) => sum + item.quantity,
		0
	);

	function showIndicator() {
		if (cartContents) return <div className='indicator'>{cartContents}</div>;
		else return;
	}

	return (
		<div id='cart-indicator'>
			<span className='material-symbols-sharp'>shopping_bag</span>
			{showIndicator()}
		</div>
	);
}

export default CartIndicator;
