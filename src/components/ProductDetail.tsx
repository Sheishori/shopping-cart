import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOne } from './modules/fetchFromAPI';
import { Product } from './state/types';

function ProductDetail() {
	const products = useSelector((state: { products: [] }) => state.products);
	const productId = Number(useParams().id);
	let product = products.find((item: Product) => item.id === productId);
	const [productDetail, setproductDetail] = useState({});
	const [initializing, setInitializing] = useState(true);

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

	function init(initializing: boolean, product: any) {
		if (initializing) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className='details'>
					<h3>{product.title}</h3>
					<div className='image'>
						<img src={product.image} alt={product.title} />
					</div>
					<div className='info'>
						<div className='desc'>{product.description}</div>
						<div className='price'>${product.price}</div>
					</div>
				</div>
			);
		}
	}

	return <div id='product'>{init(initializing, productDetail)}</div>;
}

export default ProductDetail;
