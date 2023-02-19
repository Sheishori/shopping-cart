import { ADD_TO_CART, UPDATE_QUANTITY, REMOVE_FROM_CART } from './actionTypes';

export default function cartReducer(state: any = [], action: any) {
	switch (action.type) {
		case ADD_TO_CART:
			return [
				...state,
				{
					id: action.payload.id,
					title: action.payload.title,
					quantity: action.payload.id,
					price: action.payload.price,
					image: action.payload.image,
				},
			];
		default:
			return state;
	}
}
