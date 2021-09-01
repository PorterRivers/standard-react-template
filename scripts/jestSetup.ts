import { toHaveNoViolations } from 'jest-axe';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

expect.extend(toHaveNoViolations);

global.beforeEach(() => {
	expect.hasAssertions();
});

const deleteAllCookies = () => {
	document.cookie.split(';').forEach((cookie) => {
		const eqPos = cookie.indexOf('=');
		const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
	});
};

global.afterEach(() => {
	cleanup();
	deleteAllCookies();
	jest.useRealTimers();
});
