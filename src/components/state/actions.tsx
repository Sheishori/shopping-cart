import { fetchAll } from '../modules/fetchFromAPI';
import { ADD_TO_CART, SET_PRODUCTS } from './actionTypes';

export async function setProductData(fetch = fetchAll) {
	const data = await fetch();

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
