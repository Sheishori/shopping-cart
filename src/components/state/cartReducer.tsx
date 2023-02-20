import { ADD_TO_CART, UPDATE_QUANTITY, REMOVE_FROM_CART } from './actionTypes';

function addToExisting(state: any, action: any) {
	return state.map((item: any) => {
		if (item.id === action.payload.id) {
			return {
				...item,
				quantity: item.quantity + action.payload.quantity,
			};
		}
		return item;
	});
}

export default function cartReducer(state: any = [], action: any) {
	switch (action.type) {
		case ADD_TO_CART:
			if (state.find((item: any) => item.id === action.payload.id))
				return addToExisting(state, action);
			return [
				...state,
				{
					id: action.payload.id,
					title: action.payload.title,
					quantity: action.payload.quantity,
					price: action.payload.price,
					image: action.payload.image,
				},
			];

		case UPDATE_QUANTITY:
			return state.map((item: any) => {
				if (item.id === action.payload.id) {
					return {
						...item,
						quantity: action.payload.quantity,
					};
				}
				return item;
			});

		case REMOVE_FROM_CART:
			return state.fiter((item: any) => item.id !== action.payload.id);

		default:
			return state;
	}
}
