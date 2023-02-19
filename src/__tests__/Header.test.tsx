import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header component', () => {
	it('renders a heading', () => {
		render(<Header />, { wrapper: MemoryRouter });
		expect(screen.getByRole('heading').textContent).toMatch('Manics');
	});

	it('renders a nav bar', () => {
		render(<Header />, { wrapper: MemoryRouter });
		expect(screen.getByRole('list')).toBeInTheDocument();
	});
});
