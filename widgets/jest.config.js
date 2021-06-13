const path = require('path')

module.exports = {
  moduleDirectories: ["node_modules", path.join(__dirname, '../../', 'node_modules')],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
    // 'styled-components': path.join(__dirname, '../../', 'node_modules/styled-components'),
    // 'react': path.join(__dirname, '../../', 'node_modules/react/cjs/react.production.min.js'),
    // 'react-is': path.join(__dirname, '../../', 'node_modules/react-is/cjs/react-is.production.min.js'),
    // 'react': '<rootDir>/node_modules/react/cjs/react.development.js',
    // 'react-is': '<rootDir>/node_modules/react-is/cjs/react-is.development.js',
    // 'react-dom': '<rootDir>/node_modules/react-dom',
    // 'react-test-renderer': '<rootDir>/node_modules/react-test-renderer/cjs/react-test-renderer.development.js',
  },
}