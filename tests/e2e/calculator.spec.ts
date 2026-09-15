import { expect } from '@playwright/test';
import { test } from '../fixtures/testFixtures';
import {
  validCalculation,
  invalidPanelCalculation,
  negativePanelCalculation,
  invalidPanelPowerCalculation,
  negativePanelPowerCalculation,
  invalidDailySunHoursCalculation,
  negativeDailySunHoursCalculation,
  invalidSystemEfficiencyCalculation,
  negativeSystemEfficiencyCalculation,
  overMaxSystemEfficiencyCalculation,
} from '../data/calculatorData';

const invalidPanelCases = [
  invalidPanelCalculation,
  negativePanelCalculation,
];

const invalidPanelPowerCases = [
  invalidPanelPowerCalculation,
  negativePanelPowerCalculation,
];

const invalidDailySunHoursCases = [
  invalidDailySunHoursCalculation,
  negativeDailySunHoursCalculation,
];

const invalidSystemEfficiencyCases = [
  invalidSystemEfficiencyCalculation,
  negativeSystemEfficiencyCalculation,
  overMaxSystemEfficiencyCalculation,
];

test.describe('Solar Energy Calculator', () => {
    test.beforeEach(async ({ calculatorPage }) => {
      await calculatorPage.goto();
  });

 test(
    'displays the solar energy calculator',
    { tag: '@smoke' },
    async ({ calculatorPage }) => {

      await expect(calculatorPage.heading).toBeVisible();
    }
  );  

  test(
  'calculates daily and annual energy production',
  { tag: '@regression' },
  async ({ calculatorPage }) => {
    await calculatorPage.calculate(
      validCalculation.numberOfPanels,
      validCalculation.panelPower,
      validCalculation.dailySunHours,
      validCalculation.systemEfficiency
    );

    await expect(calculatorPage.dailyEnergyResult)
      .toHaveText(validCalculation.expectedDailyEnergy);

    await expect(calculatorPage.annualEnergyResult)
      .toHaveText(validCalculation.expectedAnnualEnergy);
  }
);

  test.describe(
    'Validation',
    { tag: '@regression' },
    () => {
    for (const testCase of invalidPanelCases) {
      test(`shows an error when number of panels is ${testCase.numberOfPanels}`, async ({ calculatorPage }) => {

        await calculatorPage.calculateWithPanels(testCase.numberOfPanels);

        await expect(calculatorPage.errorMessage)
          .toHaveText(testCase.expectedError);
      });
    }
    for (const testCase of invalidPanelPowerCases) {
      test(`shows an error when panel power is ${testCase.panelPower}`, async ({ calculatorPage }) => {

      await calculatorPage.calculateWithPanelPower(testCase.panelPower);

      await expect(calculatorPage.errorMessage)
        .toHaveText(testCase.expectedError);
      });
    }
    for (const testCase of invalidDailySunHoursCases) {
      test(`shows an error when daily sun hours is ${testCase.dailySunHours}`, async ({ calculatorPage }) => {

        await calculatorPage.calculateWithDailySunHours(testCase.dailySunHours);

        await expect(calculatorPage.errorMessage)
          .toHaveText(testCase.expectedError);
      });
    }
    for (const testCase of invalidSystemEfficiencyCases) {
      test(`shows an error when system efficiency is ${testCase.systemEfficiency}`, async ({ calculatorPage }) => {

        await calculatorPage.calculateWithSystemEfficiency(testCase.systemEfficiency);

        await expect(calculatorPage.errorMessage)
          .toHaveText(testCase.expectedError);
      });
    }
  });

});