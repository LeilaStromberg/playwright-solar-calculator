import { expect } from '@playwright/test';
import { test } from '../fixtures/testFixtures';
import {
  validCalculation,
  invalidPanelCalculation,
  negativePanelCalculation,
} from '../data/calculatorData';

const invalidPanelCases = [
  invalidPanelCalculation,
  negativePanelCalculation,
];

test.describe('Solar Energy Calculator', () => {
    test.beforeEach(async ({ calculatorPage }) => {
      await calculatorPage.goto();
  });

  // Ett enkelt smoke test
  test('displays the solar energy calculator', async ({ calculatorPage }) => {

    await expect(calculatorPage.heading).toBeVisible();
  });

  test('calculates daily and annual energy production', async ({ calculatorPage }) => {

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
  });

  test.describe('Validation', () => {
    for (const testCase of invalidPanelCases) {
      test(`shows an error when number of panels is ${testCase.numberOfPanels}`, async ({ calculatorPage }) => {

        await calculatorPage.calculateWithPanels(testCase.numberOfPanels);

        await expect(calculatorPage.errorMessage)
          .toHaveText(testCase.expectedError);
      });
    }
  });

});