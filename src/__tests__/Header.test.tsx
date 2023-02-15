import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';

describe('Header component', () => {
	it('renders a heading', () => {
		render(<Header />);
		expect(screen.getByRole('heading').textContent).toMatch('Store');
	});

	it('renders a nav bar', () => {
		render(<Header />);
		expect(screen.getByRole('list')).toBeInTheDocument();
	});
});
