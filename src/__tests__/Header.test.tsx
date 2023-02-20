import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../components/Header';

describe('Header component', () => {
	it('renders a heading', () => {
		const mockStore = configureStore();
		const store = mockStore({ cart: [] });

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return (
				<Provider store={store}>
					<MemoryRouter>{children}</MemoryRouter>
				</Provider>
			);
		};

		render(<Header />, { wrapper: providers });
		expect(screen.getByRole('heading').textContent).toMatch('Manics');
	});

	it('renders a nav bar', () => {
		const mockStore = configureStore();
		const store = mockStore({ cart: [] });

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return (
				<Provider store={store}>
					<MemoryRouter>{children}</MemoryRouter>
				</Provider>
			);
		};

		render(<Header />, { wrapper: providers });
		expect(screen.getByRole('list')).toBeInTheDocument();
	});
});
