import { fetchAll } from '../modules/fetchFromAPI';
import { SET_PRODUCTS } from './actionTypes';

export async function setProductData(fetch = fetchAll) {
	const data = await fetch();

	const setProducts = {
		type: SET_PRODUCTS,
		productData: data,
	};

	return setProducts;
}
