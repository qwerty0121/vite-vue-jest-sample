module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^.+\\.svg': '<rootDir>/test/unit/module-stub.js'
  },
  coverageProvider: 'v8',
  collectCoverageFrom: ['src/**/*.{js,vue}']
}
