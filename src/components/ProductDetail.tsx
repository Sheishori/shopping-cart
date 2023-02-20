import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchOne } from './modules/fetchFromAPI';
import { Product } from './state/types';
import { addProductToCart } from './state/actions';
import '../styles/ProductDetail.css';

function ProductDetail() {
	const dispatch = useDispatch();
	const products = useSelector((state: { products: [] }) => state.products);
	const productId = Number(useParams().id);
	let product = products.find((item: Product) => item.id === productId);
	const [productDetail, setproductDetail] = useState({});
	const [initializing, setInitializing] = useState(true);
	const [error, setError] = useState(false);
	const [toCart, setToCart] = useState(false);
	const [amount, setAmount] = useState(1);

	useEffect(() => {
		async function setProduct(
			product: Product | undefined | string,
			productId: number
		) {
			if (product === undefined) {
				const fetch: Product = await fetchOne(productId);
				product = fetch;
			}
			if (product === 'error') {
				setError(true);
			} else {
				setproductDetail(product);
			}
		}
		setProduct(product, productId);
		setInitializing(false);
	}, []);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newValue = Number(event.target.value);
		if (newValue === 0) setAmount(1);
		if (newValue > 0) setAmount(newValue);
	}

	function increment() {
		setAmount(amount + 1);
	}

	function decrement() {
		if (amount > 1) setAmount(amount - 1);
	}

	function addToCart() {
		const cartItem = addProductToCart(productDetail, amount);
		dispatch(cartItem);
		setToCart(true);
	}

	function showToCart() {
		if (toCart)
			return (
				<Link className='cartLink' to='/cart'>
					<button>Go to cart</button>
				</Link>
			);
		else return;
	}

	function init(product: any) {
		if (initializing === false && error === false) {
			return (
				<div className='details'>
					<div className='image'>
						<img src={product.image} alt={product.title} />
					</div>
					<div className='info'>
						<h3>{product.title}</h3>
						<div className='desc'>{product.description}</div>
						<div className='price'>
							${(Math.round(product.price * 100) / 100).toFixed(2)}
						</div>
						<div className='amount'>
							<button onClick={decrement}>-</button>
							<input
								type='text'
								name='amount'
								id='amount'
								pattern='[1-9]'
								min='1'
								value={amount}
								onChange={handleChange}
							/>
							<button onClick={increment}>+</button>
						</div>
						<button className='add' onClick={addToCart}>
							Add to cart
						</button>
						{showToCart()}
					</div>
				</div>
			);
		}
		if (error) return <div role='dialog'>Error! Please refresh try again</div>;
		else return <div role='dialog'>Loading...</div>;
	}

	return <main id='product'>{init(productDetail)}</main>;
}

export default ProductDetail;
