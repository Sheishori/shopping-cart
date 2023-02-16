import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserEvent from '@testing-library/user-event';
import Products from '../components/Products';

describe('Products component', () => {
	it('renders a products list', () => {
		render(<Products />);
		expect(screen.getByRole('list')).toBeInTheDocument();
	});
});
