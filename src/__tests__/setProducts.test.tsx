import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserEvent from '@testing-library/user-event';
import setProducts from '../components/state/setProducts';
import { act } from 'react-dom/test-utils';

describe('setProducts module', () => {
	it('returns an action if correctly fetched data', async () => {
		const expected = {
			type: 'setProducts',
			productData: expect.arrayContaining([
				expect.objectContaining({
					title: 'special cotton shirt for men',
				}),
			]),
		};

		async function fetch() {
			return [
				{
					_id: '61ab420c0f34753bcedfa787',
					title: 'special cotton shirt for men',
				},
			];
		}

		return setProducts(fetch).then((products) => {
			expect(products).toEqual(expected);
		});
	});
});
