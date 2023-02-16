import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductData } from './state/actions';

function Products({ set = setProductData }) {
	const dispatch = useDispatch();

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
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		</div>
	);
}

export default Products;
