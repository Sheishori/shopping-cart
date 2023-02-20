import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';
import { removeFromCart, updateQuantityInCart } from './state/actions';

function Cart() {
	const dispatch = useDispatch();
	const cartContents = useSelector((state: any) => state.cart);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const sum = cartContents.reduce(
			(sum: number, item: any) => sum + item.price * item.quantity,
			0
		);
		setTotal(sum);
	}, [cartContents]);

	function handleChange(event: any, id: number) {
		const newQty = Number(event.target.value);
		if (newQty === 0) dispatch(updateQuantityInCart(id, 1));
		if (newQty > 0) dispatch(updateQuantityInCart(id, newQty));
	}

	function increment(id: number) {
		const quantity = cartContents.find((item: any) => item.id === id).quantity;
		dispatch(updateQuantityInCart(id, quantity + 1));
	}

	function decrement(id: number) {
		const quantity = cartContents.find((item: any) => item.id === id).quantity;
		if (quantity > 1) dispatch(updateQuantityInCart(id, quantity - 1));
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
							{cartContents.map((item: any) => (
								<li key={item.id}>
									<Link to={`/products/${item.id}`}>
										<img src={item.image} alt={item.title} />
									</Link>
									<div className='info'>
										<div className='title'>
											<Link to={`/products/${item.id}`}>{item.title}</Link>
										</div>
										<div className='price'>
											${(Math.round(item.price * 100) / 100).toFixed(2)}
										</div>
									</div>
									<div className='quantity'>
										<label htmlFor={'quantity-of-' + item.title}>Qty:</label>
										<div className='qty-input'>
											<button
												className='decrement'
												onClick={() => decrement(item.id)}
											>
												-
											</button>
											<input
												type='text'
												name={'quantity-of-' + item.title}
												id={'quantity-of-' + item.title}
												pattern='[1-9]'
												min='1'
												value={item.quantity}
												onChange={(event) => handleChange(event, item.id)}
											/>
											<button
												className='increment'
												onClick={() => increment(item.id)}
											>
												+
											</button>
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
							<div className='total'>
								Total:{' '}
								<div data-testid='total' className='totalPrice'>
									${(Math.round(total * 100) / 100).toFixed(2)}
								</div>
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
