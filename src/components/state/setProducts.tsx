import fetchFromAPI from '../modules/fetchFromAPI';

async function setProducts(fetch = fetchFromAPI) {
	const setProducts = {
		type: 'setProducts',
		productData: await fetch(),
	};
	return setProducts;
}

export default setProducts;
