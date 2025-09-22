import React, { useState } from 'react';

// CalculatorInput: Handles number input
const CalculatorInput: React.FC<{ value: string; onChange: (v: string) => void }> = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder="Enter expression"
    style={{ width: '100%', padding: '8px', fontSize: '1rem' }}
  />
);

// CalculatorResult: Displays result
const CalculatorResult: React.FC<{ result: string }> = ({ result }) => (
  <div style={{ marginTop: '8px', fontWeight: 'bold' }}>Result: {result}</div>
);

// Calculator: Single calculator logic
const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    try {
      // Simple eval for demonstration; consider using a math parser for production
       
      setResult(eval(input).toString());
    } catch {
      setResult('Error');
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, marginBottom: 16, borderRadius: 8 }}>
      <CalculatorInput value={input} onChange={setInput} />
      <button onClick={calculate} style={{ marginTop: 8 }}>Calculate</button>
      <CalculatorResult result={result} />
    </div>
  );
};

// MultiCalculator: Manages multiple calculators
const MultiCalculator: React.FC = () => {
  const [calculators, setCalculators] = useState([0,1,2,3,4,5]);

  const addCalculator = () => setCalculators([...calculators, calculators.length]);

  return (
    <div>
      <h2>Multi Calculator</h2>
      {calculators.map(key => (
        <Calculator key={key} />
      ))}
      <button onClick={addCalculator}>Add Calculator</button>
    </div>
  );
};

export default MultiCalculator;