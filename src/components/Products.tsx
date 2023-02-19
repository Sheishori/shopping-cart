import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAll } from './modules/fetchFromAPI';
import { setProductData } from './state/actions';
import { Product } from './state/types';
import '../styles/Products.css';

function Products() {
	const dispatch = useDispatch();
	const products = useSelector((state: { products: [] }) => state.products);
	const [initializing, setInitializing] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function setProducts() {
			const data = await fetchAll();
			if (data === 'error') {
				setError(true);
			}
			if (data !== 'error') {
				const productsAction = setProductData(data);
				dispatch(productsAction);
				setInitializing(false);
			}
		}
		setProducts();
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
							<div className='price'>${item.price}</div>
						</li>
					))}
				</ul>
			);
		}
		if (error) return <div>{error}</div>;
		else return <div>Loading...</div>;
	}

	return <main id='products'>{init(products)}</main>;
}

export default Products;
