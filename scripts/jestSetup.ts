import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

global.beforeEach(() => {
	expect.hasAssertions();
});

const deleteAllCookies = () => {
	document.cookie.split(';').forEach((cookie) => {
		const eqPos = cookie.indexOf('=');
		const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
		document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
	});
};

global.afterEach(() => {
	cleanup();
	deleteAllCookies();
	jest.useRealTimers();
});
