import { ADD_TO_CART, SET_PRODUCTS } from './actionTypes';
import { Product } from './types';

export function setProductData(data: any) {
	const setProducts = {
		type: SET_PRODUCTS,
		productData: data,
	};

	return setProducts;
}

export function addProductToCart(product: any, quantity: number) {
	const addProduct = {
		type: ADD_TO_CART,
		payload: {
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: quantity,
			image: product.image,
		},
	};

	return addProduct;
}
