import React from 'react';
import '@testing-library/jest-dom';
import * as actions from '../components/state/actions';
import { ADD_TO_CART, SET_PRODUCTS } from '../components/state/actionTypes';

describe('actions module', () => {
	it('setProductData returns an action', () => {
		const data = [
			{
				id: '61ab420c0f34753bcedfa787',
				title: 'special cotton shirt for men',
			},
		];

		const expected = {
			type: SET_PRODUCTS,
			productData: expect.arrayContaining([
				expect.objectContaining({
					title: 'special cotton shirt for men',
				}),
			]),
		};

		expect(actions.setProductData(data)).toEqual(expected);
	});

	it('addProductToCart returns an action', () => {
		const data = {
			id: 1,
			title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
			price: 109.95,
			image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
		};

		const expected = {
			type: ADD_TO_CART,
			payload: {
				id: 1,
				title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
				price: 109.95,
				quantity: 1,
				image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
			},
		};

		expect(actions.addProductToCart(data, 1)).toEqual(expected);
	});
});
