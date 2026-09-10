export const validCalculation = {
  numberOfPanels: 12,
  panelPower: 450,
  dailySunHours: 4.5,
  systemEfficiency: 85,
  expectedDailyEnergy: 'Daily energy production: 20.66 kWh',
  expectedAnnualEnergy: 'Annual energy production: 7539.08 kWh',
};

export const invalidPanelCalculation = {
  numberOfPanels: 0,
  expectedError: 'Number of solar panels must be greater than 0.',
};

export const negativePanelCalculation = {
  numberOfPanels: -1,
  expectedError: 'Number of solar panels must be greater than 0.',
};