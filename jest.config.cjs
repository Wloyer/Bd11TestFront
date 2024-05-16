module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    },
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub',
    },
    testMatch: ['**/__tests__/**/*.test.js?(x)'],
    setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom'],
};