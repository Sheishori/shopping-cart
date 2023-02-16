import { SET_PRODUCTS } from './actionTypes';

export default function productsReducer(state = [], action: any) {
	switch (action.type) {
		case SET_PRODUCTS:
			return action.productData;
		default:
			return state;
	}
}
