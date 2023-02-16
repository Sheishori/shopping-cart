import fetchFromAPI from '../modules/fetchFromAPI';

export async function setProductData(fetch = fetchFromAPI) {
	const data = await fetch();

	const setProducts = {
		type: 'setProducts',
		productData: data,
	};

	return setProducts;
}
