import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from '../components/Cart';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe('Cart component', () => {
	it('notifies if the cart is empty', () => {
		const mockStore = configureStore();
		const store = mockStore({ cart: [] });

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return (
				<Provider store={store}>
					<BrowserRouter>{children}</BrowserRouter>
				</Provider>
			);
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
			return (
				<Provider store={store}>
					<BrowserRouter>{children}</BrowserRouter>
				</Provider>
			);
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
			return (
				<Provider store={store}>
					<BrowserRouter>{children}</BrowserRouter>
				</Provider>
			);
		};

		render(<Cart />, { wrapper: providers });
		expect(screen.getByRole('list').textContent).toMatch(/T-Shirt/);
	});

	it('calculates total (1)', () => {
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
				{
					id: 2,
					title: 'Socks',
					quantity: 2,
					price: 5,
					image: '',
				},
			],
		});

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return (
				<Provider store={store}>
					<BrowserRouter>{children}</BrowserRouter>
				</Provider>
			);
		};

		render(<Cart />, { wrapper: providers });
		expect(screen.getByTestId('total').textContent).toBe('$20.00');
	});

	it('calculates total (2)', () => {
		const mockStore = configureStore();
		const store = mockStore({
			cart: [
				{
					id: 1,
					title: 'T-Shirt',
					quantity: 2,
					price: 10.99,
					image: '',
				},
				{
					id: 2,
					title: 'Socks',
					quantity: 3,
					price: 5.37,
					image: '',
				},
			],
		});

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return (
				<Provider store={store}>
					<BrowserRouter>{children}</BrowserRouter>
				</Provider>
			);
		};

		render(<Cart />, { wrapper: providers });
		expect(screen.getByTestId('total').textContent).toBe('$38.09');
	});
});
