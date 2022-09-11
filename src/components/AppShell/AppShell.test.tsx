import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import AppShell from './AppShell';

test('loads and displays text', () => {
	render(<AppShell />);

	expect(screen.getByRole('heading')).toHaveTextContent('My React and Typescript Template.');
});

test('has no axe violations', async () => {
	const { container } = render(<AppShell />);

	expect(await axe(container)).toHaveNoViolations();
});
