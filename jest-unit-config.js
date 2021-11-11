/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line no-undef
const config = require('./jest.config')
config.testMatch = ['**/*.spec.ts']
// eslint-disable-next-line no-undef
module.exports = config
