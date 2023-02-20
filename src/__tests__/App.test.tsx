import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('App component', () => {
	it('renders a header', () => {
		const mockStore = configureStore();
		const store = mockStore({ cart: [] });

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return <Provider store={store}>{children}</Provider>;
		};

		render(<App />, { wrapper: providers });
		expect(screen.getByRole('banner')).toBeInTheDocument();
	});

	it('renders main', () => {
		const mockStore = configureStore();
		const store = mockStore({ cart: [] });

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return <Provider store={store}>{children}</Provider>;
		};

		render(<App />, { wrapper: providers });
		expect(screen.getByRole('main')).toBeInTheDocument();
	});

	it('renders a footer', () => {
		const mockStore = configureStore();
		const store = mockStore({ cart: [] });

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return <Provider store={store}>{children}</Provider>;
		};

		render(<App />, { wrapper: providers });
		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});
});
