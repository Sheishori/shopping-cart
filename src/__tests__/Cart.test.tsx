import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserEvent from '@testing-library/user-event';
import Cart from '../components/Cart';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Cart component', () => {
	it('notifies if the cart is empty', () => {
		const mockStore = configureStore();
		const store = mockStore({ cart: [] });

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return <Provider store={store}>{children}</Provider>;
		};

		render(<Cart />, { wrapper: providers });
		expect(screen.getByRole('dialog').textContent).toMatch(
			'Your cart is empty!'
		);
	});

	it("doesn't show 'empty' notification if cart has items", () => {
		const mockStore = configureStore();
		const store = mockStore({
			cart: [
				{
					id: '1',
					quantity: 1,
				},
			],
		});

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return <Provider store={store}>{children}</Provider>;
		};

		render(<Cart />, { wrapper: providers });
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('displays cart contents', () => {
		const mockStore = configureStore();
		const store = mockStore({
			cart: [
				{
					id: 1,
					title: 'T-Shirt',
					quantity: 1,
					price: 10,
					image: '',
				},
			],
		});

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return <Provider store={store}>{children}</Provider>;
		};

		render(<Cart />, { wrapper: providers });
		expect(screen.getByRole('list').textContent).toMatch(/T-Shirt/);
	});
});
