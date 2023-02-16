import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProductData } from './state/actions';

function Products({ set = setProductData }) {
	const dispatch = useDispatch();
	const products = useSelector((state: { products: [] }) => state.products);
	type Product = {
		readonly id: number;
		title: '';
		price: number;
		description: '';
		category: '';
		image: '';
	};

	useEffect(() => {
		async function setProducts() {
			const productsAction = await set();
			dispatch(productsAction);
		}
		setProducts();
	}, []);

	return (
		<div id='products'>
			<ul>
				{products.map((item: Product) => (
					<li key={item.id}>
						<Link to={`/products/${item.id}`}>{item.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Products;
