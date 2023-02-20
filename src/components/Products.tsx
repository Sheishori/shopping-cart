import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAll } from './modules/fetchFromAPI';
import { setProductData } from './state/actions';
import { Product } from './state/types';
import '../styles/Products.css';

function Products({ fetch = fetchAll }) {
	const dispatch = useDispatch();
	const products = useSelector((state: { products: [] }) => state.products);
	const [initializing, setInitializing] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function setProducts() {
			if (products.length === 0) {
				const data = await fetch();
				if (data === 'error') {
					setError(true);
				} else {
					const productsAction = setProductData(data);
					dispatch(productsAction);
					setInitializing(false);
				}
			}
		}
		if (products.length !== 0) {
			setInitializing(false);
		} else setProducts();
	}, []);

	function init(products: []) {
		if (initializing === false && error === false) {
			return (
				<ul>
					{products.map((item: Product) => (
						<li key={item.id}>
							<Link to={`/products/${item.id}`}>
								<img src={item.image} alt={item.title} />
							</Link>
							<div className='name'>
								<Link to={`/products/${item.id}`}>{item.title}</Link>
							</div>
							<div className='price'>
								${(Math.round(item.price * 100) / 100).toFixed(2)}
							</div>
						</li>
					))}
				</ul>
			);
		}
		if (error) return <div role='dialog'>Error! Please refresh try again</div>;
		else return <div role='dialog'>Loading...</div>;
	}

	return <main id='products'>{init(products)}</main>;
}

export default Products;
