async function getProductData() {
	try {
		const fetchProducts = await fetch(
			'https://api.storerestapi.com/products'
		).then((response) => response.json());
		if (fetchProducts.status === 200) return fetchProducts.data;
		else return fetchProducts.message;
	} catch (error) {
		console.log(error);
	}
}

export default getProductData;
