// jest.config.js
export default {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/src/config/setupTests.ts"
  ]
};