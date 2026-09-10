import { test as base } from '@playwright/test'; 
import { CalculatorPage } from '../pages/CalculatorPage';

type MyFixtures = {
  calculatorPage: CalculatorPage;
};

//skapa en utökad version av Playwrights test som dessutom kan ge oss calculatorPage
export const test = base.extend<MyFixtures>({
  calculatorPage: async ({ page }, use) => {
    await use(new CalculatorPage(page)); //det som skickar det färdiga Page Object-objektet till testet
  },
});