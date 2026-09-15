import { useState } from 'react';

function App() {
  const [numberOfPanels, setNumberOfPanels] = useState(10);
  const [panelPower, setPanelPower] = useState(450);
  const [dailySunHours, setDailySunHours] = useState(4.5);
  const [systemEfficiency, setSystemEfficiency] = useState(85);
  const [dailyEnergy, setDailyEnergy] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

return (
  <main>
    <h1>Solar Energy Calculator</h1>
    <p>Estimate the energy production of a solar panel system.</p>

    <label>
      Number of solar panels
      <input
        type="number"
        value={numberOfPanels}
        onChange={(event) => setNumberOfPanels(Number(event.target.value))}
      />
    </label>

    <label>
      Power per panel (Watts)
      <input
        type="number"
        value={panelPower}
        onChange={(event) => setPanelPower(Number(event.target.value))}
      />
    </label>

    <label>
      Peak sun hours per day
      <input
        type="number"
        value={dailySunHours}
        onChange={(event) => setDailySunHours(Number(event.target.value))}
      />
    </label>

    <label>
      System efficiency (%)
      <input
        type="number"
        step="0.01"
        value={systemEfficiency}
        onChange={(event) => setSystemEfficiency(Number(event.target.value))}
      />
    </label>

    <button
        onClick={() => {
          if (numberOfPanels <= 0) {
            setError('Number of solar panels must be greater than 0.');
            setDailyEnergy(null);
            return;
          }
          if (panelPower <= 0) {
            setError('Power per panel must be greater than 0.');
            setDailyEnergy(null);
            return;
          }
          if (dailySunHours <= 0) {
            setError('Daily sun hours must be greater than 0.');
            setDailyEnergy(null);
            return;
          }
          if (systemEfficiency <= 0 || systemEfficiency > 100) {
            setError('System efficiency must be greater than 0 and at most 100.');
            setDailyEnergy(null);
            return;
          }   
            const result =
                (numberOfPanels *
                    panelPower *
                    dailySunHours *
                    (systemEfficiency / 100)) /
                    1000;

                setError(null); 
                setDailyEnergy(result);
            }}
        >
        Calculate
    </button>

    {error !== null && (
      <p role="alert">{error}</p>
    )}
    
    {dailyEnergy !== null && (
        <div>
            <p>Daily energy production: {dailyEnergy.toFixed(2)} kWh</p>
            <p>Annual energy production: {(dailyEnergy * 365).toFixed(2)} kWh</p>
         </div>
    )}
  </main>
);
}

export default App; //andra filer kan importera och använda komponenten