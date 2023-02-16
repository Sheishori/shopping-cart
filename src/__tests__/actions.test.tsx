import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserEvent from '@testing-library/user-event';
import * as actions from '../components/state/actions';
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

		return actions.setProductData(fetch).then((data) => {
			expect(data).toEqual(expected);
		});
	});

	it('returns an error message if fetching failed', async () => {
		const expected = 'Fetching failed';

		async function fetch() {
			return 'Fetching failed';
		}

		return actions.setProductData(fetch).then((data) => {
			expect(data).toEqual(expected);
		});
	});
});
