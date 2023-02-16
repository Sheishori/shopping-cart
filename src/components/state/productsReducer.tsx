export default function productsReducer(state = [], action: any) {
	switch (action.type) {
		case 'setProducts':
			return action.productData;
		default:
			return state;
	}
}
