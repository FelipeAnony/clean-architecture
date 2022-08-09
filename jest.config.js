export const roots = ['<rootDir>/src'];
export const collectCoverageFrom = ['<rootDir>/src/**/*.{ts, tsx}'];
export const coverageDirectory = 'coverage';
export const testEnvironment = 'node';
export const transform = {
  '.+\\.ts$': 'ts-jest',
};
export const moduleNameMapper = {
  '@/(.*)': '<rootDir>/src/$1',
};
