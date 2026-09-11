# Playwright Solar Calculator

A demo solar energy calculator built to demonstrate a Playwright E2E test automation framework.

## About

This project was created as a portfolio project to demonstrate how to set up and structure an end-to-end test automation framework using Playwright and TypeScript.

The application is a simple solar energy calculator used as the system under test.

## Test Framework Features

- Playwright with TypeScript
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

## Project Structure

```text
playwright_calc/
├── src/
│   ├── App.tsx
│   └── main.tsx
├── tests/
│   ├── data/
│   │   └── calculatorData.ts
│   ├── e2e/
│   │   └── calculator.spec.ts
│   ├── fixtures/
│   │   └── testFixtures.ts
│   └── pages/
│       └── CalculatorPage.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json
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

Run all E2E tests:

```bash
npm run test:e2e
```

The tests run across Chromium, Firefox, and WebKit.

## HTML Report

After running the tests, open the Playwright HTML report with:

```bash
npx playwright show-report
```