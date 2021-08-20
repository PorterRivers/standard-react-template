import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

global.beforeEach(() => {
	expect.hasAssertions();
});
