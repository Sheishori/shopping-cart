import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProductData } from './state/actions';
import { Product } from './state/types';

function Products({ set = setProductData }) {
	const dispatch = useDispatch();
	const products = useSelector((state: { products: [] }) => state.products);
	const [initializing, setInitializing] = useState(true);

	useEffect(() => {
		async function setProducts() {
			const productsAction = await set();
			dispatch(productsAction);
		}
		setProducts();
		setInitializing(false);
	}, []);

	function init(initializing: boolean, products: []) {
		if (initializing) {
			return <div>Loading...</div>;
		} else {
			return (
				<ul>
					{products.map((item: Product) => (
						<li key={item.id}>
							<Link to={`/products/${item.id}`}>{item.title}</Link>
						</li>
					))}
				</ul>
			);
		}
	}

	return <main id='products'>{init(initializing, products)}</main>;
}

export default Products;
