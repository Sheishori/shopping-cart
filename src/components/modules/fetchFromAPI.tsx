async function fetchFromAPI() {
	try {
		const fetchProducts = await fetch('https://fakestoreapi.com/products').then(
			(response) => response.json()
		);
		return fetchProducts;
	} catch (error) {
		console.log(error);
	}
}

export default fetchFromAPI;
