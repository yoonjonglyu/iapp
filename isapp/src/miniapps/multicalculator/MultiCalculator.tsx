import React, { useState } from 'react';
import styled from 'styled-components';
import { Plus, Play, RotateCcw, Calculator as CalcIcon } from 'lucide-react';

export interface CalculatorProps {
  index: number;
  input: string;
  onInputChange: (v: string) => void;
  result: string;
}

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--text-primary);
`;

const IntroBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: var(--glass-card);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);

  .info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .tip {
    font-size: 0.72rem;
    color: var(--accent-cyan);
  }
`;

const CalcRowCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 14px;
  background: var(--glass-card);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  transition: all 0.2s var(--ease-spring);

  &:focus-within {
    border-color: rgba(59, 130, 246, 0.4);
    background: var(--glass-card-hover);
  }

  .input-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .idx {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--text-muted);
    min-width: 18px;
  }

  input {
    flex: 1;
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-md);
    padding: 8px 12px;
    color: var(--text-primary);
    font-size: 0.95rem;
    font-family: monospace;

    &::placeholder {
      color: var(--text-muted);
      font-size: 0.8rem;
      font-family: var(--font-sans);
    }

    &:focus {
      border-color: var(--accent-blue);
    }
  }

  .result-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 26px;
    font-size: 0.85rem;

    .label {
      color: var(--text-muted);
      font-size: 0.75rem;
    }

    .val {
      font-weight: 700;
      font-family: monospace;
      color: #10b981;
      letter-spacing: 0.02em;
    }
  }
`;

const BottomButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  position: sticky;
  bottom: 12px;
  padding-top: 8px;
`;

const ActionBtn = styled.button<{ $primary?: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  border-radius: var(--radius-lg);
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  background: ${({ $primary }) =>
    $primary ? 'var(--accent-gradient)' : 'rgba(255, 255, 255, 0.08)'};
  border: 1px solid
    ${({ $primary }) =>
      $primary ? 'transparent' : 'rgba(255, 255, 255, 0.12)'};
  box-shadow: ${({ $primary }) =>
    $primary ? '0 6px 18px rgba(139, 92, 246, 0.35)' : 'none'};
  transition: all 0.2s var(--ease-spring);

  &:hover {
    transform: translateY(-1px);
    background: ${({ $primary }) =>
      $primary ? 'var(--accent-gradient)' : 'rgba(255, 255, 255, 0.12)'};
  }
`;

const MultiCalculator: React.FC = () => {
  const [calculators, setCalculators] = useState(['', '', '']);
  const [results, setResults] = useState<string[]>(['', '', '']);

  const addCalculator = () => {
    setCalculators([...calculators, '']);
    setResults([...results, '']);
  };

  const updateCalculatorInput = (index: number, value: string) => {
    const newCalculators = [...calculators];
    newCalculators[index] = value;
    setCalculators(newCalculators);
  };

  const resetAll = () => {
    setCalculators(['', '', '']);
    setResults(['', '', '']);
  };

  const calculateResults = () => {
    const newResults = calculators.map((input) => {
      if (!input.trim()) return '';
      try {
        const normalized = input
          .replace(/,/g, '+')
          .replace(/×/g, '*')
          .replace(/÷/g, '/');

        // 기본 사칙연산 안전 처리 (정규식 검증)
        if (!/^[\d\s+\-*/().%]+$/.test(normalized)) {
          return '수식 오류';
        }

        // eslint-disable-next-line no-new-func
        const res = Function(`'use strict'; return (${normalized})`)();
        return Number.isFinite(res) ? String(res) : '오류';
      } catch {
        return '수식 오류';
      }
    });
    setResults(newResults);
  };

  return (
    <Wrapper>
      <IntroBar>
        <div className="info">
          <CalcIcon size={16} color="var(--accent-cyan)" />
          <span>동시 다중 수식 연산기</span>
        </div>
        <span className="tip">콤마(,)는 더하기(+) 처리</span>
      </IntroBar>

      {calculators.map((input, idx) => (
        <CalcRowCard key={idx}>
          <div className="input-row">
            <span className="idx">#{idx + 1}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => updateCalculatorInput(idx, e.target.value)}
              placeholder="수식 입력 (예: 12000 * 3, 500, 100)"
              onKeyDown={(e) => {
                if (e.key === 'Enter') calculateResults();
              }}
            />
          </div>
          <div className="result-row">
            <span className="label">계산 결과</span>
            <span className="val">{results[idx] || '—'}</span>
          </div>
        </CalcRowCard>
      ))}

      <BottomButtonGroup>
        <ActionBtn type="button" className="pressable" onClick={addCalculator}>
          <Plus size={16} />
          라인 추가
        </ActionBtn>
        <ActionBtn type="button" className="pressable" onClick={resetAll}>
          <RotateCcw size={16} />
          초기화
        </ActionBtn>
        <ActionBtn
          type="button"
          $primary
          className="pressable"
          onClick={calculateResults}
        >
          <Play size={16} fill="currentColor" />
          전체 연산
        </ActionBtn>
      </BottomButtonGroup>
    </Wrapper>
  );
};

export default MultiCalculator;
