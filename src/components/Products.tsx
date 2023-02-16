import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProductData } from './state/actions';

function Products({ set = setProductData }) {
	const dispatch = useDispatch();
	const products = useSelector((state: { products: [] }) => state.products);
	type Product = {
		readonly _id: '';
		title: '';
		price: number;
		category: { name: '' };
		description: '';
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
					<li key={item._id}>
						<Link to={`/products/${item._id}`}>{item.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Products;
