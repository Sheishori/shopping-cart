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

	useEffect(() => {
		async function setProduct(product: any, productId: number) {
			if (product === undefined) {
				const fetch = await fetchOne(productId);
				product = fetch;
			}
			console.log(product);
			setproductDetail(product);
		}

		setProduct(product, productId);
	}, []);

	return <div id='product'></div>;
}

export default ProductDetail;
