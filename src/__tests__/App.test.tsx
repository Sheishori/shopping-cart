import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App component', () => {
	it('renders a header', () => {
		render(<App />);
		expect(screen.getByRole('banner')).toBeInTheDocument();
	});

	it('renders main', () => {
		render(<App />);
		expect(screen.getByRole('main')).toBeInTheDocument();
	});

	it('renders a footer', () => {
		render(<App />);
		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});
});
