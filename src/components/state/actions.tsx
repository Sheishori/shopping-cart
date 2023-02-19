import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	SET_PRODUCTS,
	UPDATE_QUANTITY,
} from './actionTypes';
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

export function updateQuantityInCart(product: any, quantity: number) {
	const updateQuantity = {
		type: UPDATE_QUANTITY,
		payload: {
			id: product.id,
			quantity: quantity,
		},
	};

	return updateQuantity;
}

export function removeFromCart(product: any) {
	const removeProduct = {
		type: REMOVE_FROM_CART,
		payload: {
			id: product.id,
		},
	};

	return removeProduct;
}
