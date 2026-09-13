import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },

  projects: [
  {
    name: 'chromium',
    testIgnore: /api\/.*\.spec\.ts/,
    use: { ...devices['Desktop Chrome'] },
  },

  {
    name: 'firefox',
    testIgnore: /api\/.*\.spec\.ts/,
    use: { ...devices['Desktop Firefox'] },
  },

  {
    name: 'webkit',
    testIgnore: /api\/.*\.spec\.ts/,
    use: { ...devices['Desktop Safari'] },
  },

  {
    name: 'api',
    testMatch: /api\/.*\.spec\.ts/,
    use: {
      baseURL: 'https://jsonplaceholder.typicode.com',
      extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
     },
    },
  },
],

    webServer: {
     command: 'npm run dev -- --port 5173 --strictPort',
     url: 'http://localhost:5173',
     reuseExistingServer: !process.env.CI,
     //lokalt: återanvänd gärna en redan startad server
     //i CI: starta en ny kontrollerad server
  },

});