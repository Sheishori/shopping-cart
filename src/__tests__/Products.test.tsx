import React, { ReactComponentElement, ReactFragment, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserEvent from '@testing-library/user-event';
import Products from '../components/Products';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Products component', () => {
	it('renders a products list', () => {
		const mockStore = configureStore();
		const store = mockStore({ products: [] });

		const providers = ({ children }: React.PropsWithChildren<unknown>) => {
			return <Provider store={store}>{children}</Provider>;
		};

		render(<Products />, { wrapper: providers });
		expect(screen.getByRole('list')).toBeInTheDocument();
	});
});
