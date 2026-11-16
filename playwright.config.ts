import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// 1. Read the environment from the terminal command (defaults to 'qa' if none is given)
export const environment = (process.env.TEST_ENV || 'qa').trim().toUpperCase();

// 2. Load the matching .env file from your root folder
dotenv.config({ path: path.resolve(__dirname, '.env') });
//const baseUrl = process.env[`${environment}_BASE_URL`] || 'https://saucedemo.com';
//const username = process.env[`${environment}_USERNAME`] || '';
//const password = process.env[`${environment}_PASSWORD`] || '';
 
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],['allure-playwright', { outputFolder: 'allure-results' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }

   ],

  
});
