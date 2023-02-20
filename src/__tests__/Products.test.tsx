import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Products from '../components/Products';

describe('Products component', () => {
	it('renders a loading div when initializing', async () => {
		const mockStore = configureStore();
		const store = mockStore({ products: [] });
		async function fetch() {
			return;
		}

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return <Provider store={store}>{children}</Provider>;
		};
		render(<Products fetch={fetch} />, { wrapper: providers });
		expect((await screen.findByRole('dialog')).textContent).toMatch(
			'Loading...'
		);
	});

	it('renders a products list', async () => {
		const mockStore = configureStore();
		const store = mockStore({ products: [] });
		async function fetch() {
			return [
				{
					id: 1,
					title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
					price: 109.95,
					description:
						'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
					category: "men's clothing",
					image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
					rating: {
						rate: 3.9,
						count: 120,
					},
				},
			];
		}

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return <Provider store={store}>{children}</Provider>;
		};
		render(<Products fetch={fetch} />, { wrapper: providers });
		expect(await screen.findByRole('list')).toBeInTheDocument();
	});
});
