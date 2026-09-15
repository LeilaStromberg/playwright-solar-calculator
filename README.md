# Playwright Solar Calculator

A demo solar energy calculator built to demonstrate a Playwright E2E test automation framework.

## About

This project was created as a portfolio project to demonstrate how to set up and structure an end-to-end test automation framework using Playwright and TypeScript.

The application is a simple solar energy calculator used as the system under test.

## Test Framework Features

- Playwright with TypeScript
- UI and API testing
- REST API testing (GET, POST, PUT, DELETE)
- API status code and response body validation
- API response header validation
- API response time validation
- Query parameter and filtering tests
- JSON Schema validation with Ajv
- Reusable API assertions
- Positive and negative authentication tests
- Environment variables and GitHub Secrets for API credentials
- Page Object Model (POM)
- Custom Playwright fixtures
- Separate test data
- Data-driven / parameterized tests
- Smoke, functional, and negative tests
- Cross-browser testing with Chromium, Firefox, and WebKit
- Automatic application startup with Playwright `webServer`
- `beforeEach` setup
- Test grouping with `test.describe`
- Automatic retry on test failure
- Trace collection on first retry
- HTML test reporting
- CI integration with GitHub Actions
- Playwright report artifacts in CI

## Project Structure

```text
playwright_calc/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── src/
│   ├── App.tsx
│   └── main.tsx
├── tests/
│   ├── api/
│   │   ├── api.spec.ts
│   │   └── auth.spec.ts
│   ├── data/
│   │   ├── apiData.ts
│   │   ├── calculatorData.ts
│   │   └── postSchema.ts
│   ├── e2e/
│   │   └── calculator.spec.ts
│   ├── fixtures/
│   │   └── testFixtures.ts
│   ├── pages/
│   │   └── CalculatorPage.ts
│   └── utils/
│       └── apiAssertions.ts
├── README.md
├── index.html
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
└── .gitignore
```

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

## Running the Tests

Run all Playwright tests:

```bash
npm run test:e2e
```

Run all API tests:

```bash
npx playwright test tests/api/
```

Run only the Posts API tests:

```bash
npx playwright test tests/api/api.spec.ts
```

Run only the authentication API tests:

```bash
npx playwright test tests/api/auth.spec.ts
```

The UI tests run across Chromium, Firefox, and WebKit, while the API tests run once in the dedicated API project.
