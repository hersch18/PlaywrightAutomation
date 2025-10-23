// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  testMatch: ['**/*.specs.js'],
  timeout: 40000,
  expect :{

    timeout : 40000
  },
  reporter : 'html',
  use: {
   
    browserName : 'chromium',
    headless : true
  },

  
});

module.exports = config

