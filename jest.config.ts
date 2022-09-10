import type { Config } from '@jest/types';

const directories = {
	NODE_MODULES: './node_modules/',
	BUILD: './build/',
	COVERAGE: './coverage/',
};

const config: Config.InitialOptions = {
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
	coverageDirectory: directories.COVERAGE,
	coveragePathIgnorePatterns: [directories.NODE_MODULES, directories.BUILD, directories.COVERAGE, 'index.tsx'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: [directories.NODE_MODULES, directories.BUILD, directories.COVERAGE],
	verbose: true,
	setupFilesAfterEnv: ['./scripts/jestSetup.ts'],
};

export default config;
