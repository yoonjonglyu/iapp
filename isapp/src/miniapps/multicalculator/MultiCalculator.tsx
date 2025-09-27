import React, { useState } from 'react';
import styled from 'styled-components';

export interface CalculatorProps {
  input: string;
  onInputChange: (v: string) => void;
  result: string;
}

const Input = styled.input`
  width: 90%;
  padding: 8px;
  font-size: 1rem;
`;

const Result = styled.div`
  margin-top: 8px;
  font-weight: bold;
  color: #c9c9c9;
`;

const CalculatorContainer = styled.div`
  max-height: 70vh;
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: auto;
`;

const Button = styled.button<{ marginTop?: number }>`
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : '0')};
`;

const Calculator: React.FC<CalculatorProps> = ({
  input,
  onInputChange,
  result,
}) => {
  return (
    <>
      <Input
        type='text'
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder='Enter expression or number, 2,3 = 2+3'
      />
      <Result>Result: {result}</Result>
    </>
  );
};

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
        const normalized = input
          .replace(/,/g, '+') // 콤마 → +
          .replace(/×/g, '*') // 유니코드 곱하기 → *
          .replace(/÷/g, '/'); // 유니코드 나누기 → /

        const evalResult = eval(normalized);
        return evalResult.toString();
      } catch {
        return 'Error';
      }
    });
    setResults(newResults);
  };

  return (
    <>
      <CalculatorContainer>
        {calculators.map((input, key) => (
          <Calculator
            key={key}
            input={input}
            onInputChange={(value) => updateCalculatorInput(key, value)}
            result={results[key] || ''}
          />
        ))}
        <Button onClick={calculateResults} marginTop={8}>
          Calculate
        </Button>
      </CalculatorContainer>
      <Button onClick={addCalculator}>Add Calculator</Button>
    </>
  );
};

export default MultiCalculator;
