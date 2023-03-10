import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantityInCart } from './state/actions';
import { CartItem } from './state/types';
import { RootState } from './state/store';
import '../styles/Cart.css';

function Cart() {
	const dispatch = useDispatch();
	const cartContents = useSelector((state: RootState) => state.cart);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const sum = cartContents.reduce(
			(sum: number, item: CartItem) => sum + item.price * item.quantity,
			0
		);
		setTotal(sum);
	}, [cartContents]);

	function handleChange(
		event: React.ChangeEvent<HTMLInputElement>,
		id: number
	) {
		const newQty = Number(event.target.value);
		if (newQty === 0) dispatch(updateQuantityInCart(id, 1));
		if (newQty > 0) dispatch(updateQuantityInCart(id, newQty));
	}

	function increment(id: number) {
		const product = cartContents.find((item: CartItem) => item.id === id);
		if (product !== undefined) {
			const quantity = product.quantity;
			dispatch(updateQuantityInCart(id, quantity + 1));
		}
	}

	function decrement(id: number) {
		const product = cartContents.find((item: CartItem) => item.id === id);
		if (product !== undefined) {
			const quantity = product.quantity;
			dispatch(updateQuantityInCart(id, quantity - 1));
		}
	}

	function removeProduct(id: number) {
		dispatch(removeFromCart(id));
	}

	function init() {
		if (cartContents.length === 0) {
			return <div role='dialog'>Your cart is empty!</div>;
		} else {
			return (
				<div className='cartInfo'>
					<h2>Your cart:</h2>
					<div className='contents'>
						<ul className='left'>
							{cartContents.map((item: CartItem) => (
								<li key={item.id}>
									<Link to={`/products/${item.id}`}>
										<img src={item.image} alt={item.title} />
									</Link>
									<div className='info'>
										<Link to={`/products/${item.id}`} className='title'>
											{item.title}
										</Link>
										<div className='price'>
											${(Math.round(item.price * 100) / 100).toFixed(2)}
										</div>
									</div>
									<div className='quantity'>
										<label htmlFor={'quantity-of-' + item.title}>Qty:</label>
										<div className='qty-input'>
											<button onClick={() => decrement(item.id)}>-</button>
											<input
												type='text'
												name={'quantity-of-' + item.title}
												id={'quantity-of-' + item.title}
												pattern='[1-9]'
												min='1'
												value={item.quantity}
												onChange={(event) => handleChange(event, item.id)}
											/>
											<button onClick={() => increment(item.id)}>+</button>
										</div>
									</div>
									<button
										className='remove'
										onClick={() => removeProduct(item.id)}
									>
										x
									</button>
								</li>
							))}
						</ul>
						<div className='right'>
							<p>Total:</p>
							<div data-testid='total' className='total'>
								${(Math.round(total * 100) / 100).toFixed(2)}
							</div>
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
			<Link className='back-link' to='/products'>
				<button className='back'>Go back</button>
			</Link>
		</main>
	);
}

export default Cart;
