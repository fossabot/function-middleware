module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  roots: [
    '<rootDir>/src',
    '<rootDir>/examples'
  ],
  testEnvironment: 'node',
  testRegex: '.*\.(int-)?(test|spec)\\.(t|j)sx?$',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  }
}
