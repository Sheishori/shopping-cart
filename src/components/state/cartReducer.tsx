import { ADD_TO_CART, UPDATE_QUANTITY, REMOVE_FROM_CART } from './actionTypes';

export default function cartReducer(state: any = [], action: any) {
	switch (action.type) {
		case ADD_TO_CART:
			return [
				...state,
				{
					id: action.payload.id,
					quantity: action.payload.id,
				},
			];
		default:
			return state;
	}
}
