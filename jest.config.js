module.exports = {
  browser: true,
  verbose: true,
  rootDir: '.',
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**.{js,jsx}',
    '!**/node_modules/**',
    '!src/index.js',
    '!src/store.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/assets',
    '<rootDir>/logs',
    '<rootDir>/node_modules',
    '<rootDir>/.tmp'
  ],
  coverageDirectory: 'test/reports',
  coverageReporters: [
    'text',
    'html',
    'json-summary'
  ],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/test/utils/file-transform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^actions(.*)$': '<rootDir>/src/actions$1',
    '^assets(.*)$': '<rootDir>/assets$1',
    '^test(.*)$': '<rootDir>/test$1',
    '^config(.*)$': '<rootDir>/src/config$1'
  },
  unmockedModulePathPatterns: [
    'react'
  ],
  testMatch: [
    '**/?(*.)(spec|test).js?(x)'
  ],
  setupFilesAfterEnv: [
    './node_modules/jest-enzyme/lib/index.js'
  ],
  setupFiles: [
    '<rootDir>/test/utils/enzyme.setup.js'
  ],
  testURL: 'http://localhost'
};
