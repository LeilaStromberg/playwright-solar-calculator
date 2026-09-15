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

export const invalidPanelPowerCalculation = {
  panelPower: 0,
  expectedError: 'Power per panel must be greater than 0.',
};

export const negativePanelPowerCalculation = {
  panelPower: -1,
  expectedError: 'Power per panel must be greater than 0.',
};

export const invalidDailySunHoursCalculation = {
  dailySunHours: 0,
  expectedError: 'Daily sun hours must be greater than 0.',
};

export const negativeDailySunHoursCalculation = {
  dailySunHours: -1,
  expectedError: 'Daily sun hours must be greater than 0.',
};

export const invalidSystemEfficiencyCalculation = {
  systemEfficiency: 0,
  expectedError: 'System efficiency must be greater than 0 and at most 100.',
};

export const negativeSystemEfficiencyCalculation = {
  systemEfficiency: -1,
  expectedError: 'System efficiency must be greater than 0 and at most 100.',
};

export const overMaxSystemEfficiencyCalculation = {
  systemEfficiency: 101,
  expectedError: 'System efficiency must be greater than 0 and at most 100.',
};