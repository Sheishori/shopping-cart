import fetchFromAPI from '../modules/fetchFromAPI';

async function setProducts(fetch = fetchFromAPI) {
	const data = await fetch();
	if (typeof data === 'string') return data;

	const setProducts = {
		type: 'setProducts',
		productData: data,
	};

	return setProducts;
}

export default setProducts;
