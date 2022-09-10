import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import AppShell from './AppShell';

test('loads and displays text', () => {
	render(<AppShell />);

	expect(screen.getByRole('heading')).toHaveTextContent('My React and Typescript Template.');
});
