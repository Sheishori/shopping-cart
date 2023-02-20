import { AnyAction } from '@reduxjs/toolkit';
import { SET_PRODUCTS } from './actionTypes';
import { Product } from './types';

export default function productsReducer(
	state: Product[] = [],
	action: AnyAction
) {
	switch (action.type) {
		case SET_PRODUCTS:
			return action.productData;
		default:
			return state;
	}
}
