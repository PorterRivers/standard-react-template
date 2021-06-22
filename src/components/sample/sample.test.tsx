import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sample from './sample';

test('loads and displays text', () => {
	render(<Sample />);

	expect(screen.getByRole('heading')).toHaveTextContent('This is a sample react component!');
});
