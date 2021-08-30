/* eslint-disable sonarjs/no-duplicate-string */
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
	coverageDirectory: './coverage/',
	coveragePathIgnorePatterns: ['./node_modules/', './build/', './coverage/'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['./node_modules/', './build/', './coverage/'],
	verbose: true,
	setupFilesAfterEnv: ['./scripts/jestSetup.ts'],
};

export default config;
