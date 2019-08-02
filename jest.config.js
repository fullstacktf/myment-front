module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/index.js',
    '!**/node_modules/**',
  ],
  coverageReporters: ['html', 'text-summary'],
  testURL: 'http://localhost/tests',
};
