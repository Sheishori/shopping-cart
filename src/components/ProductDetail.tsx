import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchOne } from './modules/fetchFromAPI';
import { Product } from './state/types';
import '../styles/ProductDetail.css';

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
					<div className='image'>
						<img src={product.image} alt={product.title} />
					</div>
					<div className='info'>
						<h3>{product.title}</h3>
						<div className='desc'>{product.description}</div>
						<div className='price'>${product.price}</div>
					</div>
				</div>
			);
		}
	}

	return (
		<main id='product'>
			{init(initializing, productDetail)}
			<Link className='back' to='/products'>
				<button>Back</button>
			</Link>
		</main>
	);
}

export default ProductDetail;
