import type {Config} from 'jest';

const config: Config = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/test/jest-setup.ts'],
  collectCoverageFrom: ['src/{components,utils,hooks,domain}/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleDirectories: ['node_modules', './src/test'],
  modulePathIgnorePatterns: ['.*/mockedData/.*'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-safe-area-context)/)',
  ],
};

export default config;
