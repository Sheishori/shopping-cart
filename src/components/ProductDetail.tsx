import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
	const [amount, setAmount] = useState(1);

	useEffect(() => {
		async function setProduct(product: Product | undefined, productId: number) {
			if (product === undefined) {
				const fetch: Product = await fetchOne(productId);
				product = fetch;
			}
			setproductDetail(product);
		}
		setProduct(product, productId);
		setInitializing(false);
	}, []);

	function handleChange(event: any) {
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
	}

	function init(initializing: boolean, product: any) {
		if (initializing) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className='details'>
					<div className='image'>
						<img src={product.image} alt={product.title} />
					</div>
					<div className='info'>
						<h3>{product.title}</h3>
						<div className='desc'>{product.description}</div>
						<div className='price'>${product.price}</div>
						<div className='amount'>
							{' '}
							<button className='decrement' onClick={decrement}>
								-
							</button>
							<input
								type='text'
								name='amount'
								id='amount'
								pattern='[1-9]'
								min='1'
								value={amount}
								onChange={handleChange}
							/>
							<button className='increment' onClick={increment}>
								+
							</button>
						</div>
						<button className='add' onClick={addToCart}>
							Add to cart
						</button>
					</div>
				</div>
			);
		}
	}

	return <main id='product'>{init(initializing, productDetail)}</main>;
}

export default ProductDetail;
