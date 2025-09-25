import React, { useState } from 'react';

export interface CalculatorProps {
  input: string;
  onInputChange: (v: string) => void;
  result: string;
}
// Calculator: Single calculator logic
const Calculator: React.FC<CalculatorProps> = ({
  input,
  onInputChange,
  result,
}) => {
  return (
    <>
      <input
        type='text'
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder='Enter expression or number, 2,3 = 2+3'
        style={{ width: '100%', padding: '8px', fontSize: '1rem' }}
      />
      <div style={{ marginTop: '8px', fontWeight: 'bold' }}>
        Result: {result}
      </div>
    </>
  );
};

// MultiCalculator: Manages multiple calculators
const MultiCalculator: React.FC = () => {
  const [calculators, setCalculators] = useState(['', '', '', '', '', '']);
  const [results, setResults] = useState<string[]>([]);

  const addCalculator = () => {
    setCalculators([...calculators, '']);
    setResults([...results, '']);
  };
  const updateCalculatorInput = (index: number, value: string) => {
    const newCalculators = [...calculators];
    newCalculators[index] = value;
    setCalculators(newCalculators);
  };
  const calculateResults = () => {
    const newResults = calculators.map((input) => {
      try {
        const _input = input.split(',').join('+');

        const evalResult = eval(_input);
        return evalResult.toString();
      } catch {
        return 'Error';
      }
    });
    setResults(newResults);
  };

  return (
    <>
      <div
        style={{
          border: '1px solid #ccc',
          padding: 16,
          marginBottom: 16,
          borderRadius: 8,
        }}>
        {calculators.map((input, key) => (
          <Calculator
            key={key}
            input={input}
            onInputChange={(value) => updateCalculatorInput(key, value)}
            result={results[key] || ''}
          />
        ))}

        <button onClick={calculateResults} style={{ marginTop: 8 }}>
          Calculate
        </button>
      </div>
      <button onClick={addCalculator}>Add Calculator</button>
    </>
  );
};

export default MultiCalculator;
