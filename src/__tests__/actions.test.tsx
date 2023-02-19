import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserEvent from '@testing-library/user-event';
import * as actions from '../components/state/actions';
import { act } from 'react-dom/test-utils';

describe('actions module', () => {
	it('setProducts returns an action if correctly fetched data', () => {
		const data = [
			{
				id: '61ab420c0f34753bcedfa787',
				title: 'special cotton shirt for men',
			},
		];

		const expected = {
			type: 'setProducts',
			productData: expect.arrayContaining([
				expect.objectContaining({
					title: 'special cotton shirt for men',
				}),
			]),
		};

		expect(actions.setProductData(data)).toEqual(expected);
	});
});
