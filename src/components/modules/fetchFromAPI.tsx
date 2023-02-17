export async function fetchAll() {
	try {
		const fetchProducts = await fetch('https://fakestoreapi.com/products').then(
			(response) => response.json()
		);
		return fetchProducts;
	} catch (error) {
		console.log(error);
	}
}

export async function fetchOne(id: number) {
	try {
		const fetchProduct = await fetch(
			`https://fakestoreapi.com/products/${id}`,
			{ mode: 'cors' }
		).then((response) => response.json());
		return fetchProduct;
	} catch (error) {
		console.log(error);
	}
}
