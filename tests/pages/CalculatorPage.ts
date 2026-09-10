import { type Page, type Locator } from '@playwright/test';
export class CalculatorPage {
  readonly page: Page;
  readonly numberOfPanelsInput: Locator;
  readonly panelPowerInput: Locator;
  readonly dailySunHoursInput: Locator;
  readonly systemEfficiencyInput: Locator;
  readonly calculateButton: Locator;
  readonly dailyEnergyResult: Locator;
  readonly annualEnergyResult: Locator;
  readonly errorMessage: Locator;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.numberOfPanelsInput = page.getByLabel('Number of solar panels');
    this.panelPowerInput = page.getByLabel('Power per panel (Watts)');
    this.dailySunHoursInput = page.getByLabel('Peak sun hours per day');
    this.systemEfficiencyInput = page.getByLabel('System efficiency (%)');
    this.calculateButton = page.getByRole('button', { name: 'Calculate' });
    this.dailyEnergyResult = page.getByText(/Daily energy production:/);
    this.annualEnergyResult = page.getByText(/Annual energy production:/);
    this.errorMessage = page.getByText(/Number of solar panels must/);
    this.heading = page.getByRole('heading', { name: 'Solar Energy Calculator',});
  }

  async goto() {
  await this.page.goto('/');
  }
  
  async calculateWithPanels(numberOfPanels: number) {
  await this.numberOfPanelsInput.fill(String(numberOfPanels));
  await this.calculateButton.click();
  }

  async calculate(
    numberOfPanels: number,
    panelPower: number,
    dailySunHours: number,
    systemEfficiency: number
  ) {
    await this.numberOfPanelsInput.fill(String(numberOfPanels));
    await this.panelPowerInput.fill(String(panelPower));
    await this.dailySunHoursInput.fill(String(dailySunHours));
    await this.systemEfficiencyInput.fill(String(systemEfficiency));

    await this.calculateButton.click();   
  }
}