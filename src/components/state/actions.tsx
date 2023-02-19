import { ADD_TO_CART, SET_PRODUCTS } from './actionTypes';

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
			quantity: quantity,
		},
	};

	return addProduct;
}
