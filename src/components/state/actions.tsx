import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	SET_PRODUCTS,
	UPDATE_QUANTITY,
} from './actionTypes';
import { Product } from './types';

export function setProductData(productData: any) {
	const setProducts = {
		type: SET_PRODUCTS,
		productData,
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
			image: product.image,
			quantity,
		},
	};

	return addProduct;
}

export function updateQuantityInCart(id: number, quantity: number) {
	const updateQuantity = {
		type: UPDATE_QUANTITY,
		payload: {
			id,
			quantity,
		},
	};

	return updateQuantity;
}

export function removeFromCart(id: number) {
	const removeProduct = {
		type: REMOVE_FROM_CART,
		payload: {
			id,
		},
	};

	return removeProduct;
}
