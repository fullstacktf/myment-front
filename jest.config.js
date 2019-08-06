module.exports = {
  verbose: true,
<<<<<<< HEAD
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
=======
  moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts$': 'ts-jest',
>>>>>>> 1863ff2744c261473b8e58a14d87bdcc23910c70
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
