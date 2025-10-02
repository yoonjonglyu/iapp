import React, { useState } from 'react';
import styled from 'styled-components';

// Define types for result
type CalcType = 'simple' | 'compound' | 'loan-equal' | 'loan-principal';
type CompoundFreqType = 'yearly' | 'quarterly' | 'monthly' | 'daily';

type SimpleResult = number;
type CompoundResult = {
  finalAmount: number;
  schedule: number[];
  totalPayment: number;
  totalInterest: number;
  freqLabel: string;
};
type LoanEqualResult = {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
};
type LoanPrincipalResult = {
  schedule: number[];
  totalPayment: number;
  totalInterest: number;
};

type ResultType =
  | SimpleResult
  | CompoundResult
  | LoanEqualResult
  | LoanPrincipalResult
  | null;

// Styled Components
const Container = styled.div`
  padding: 16px;
  color: #cccccc;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const Field = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 4px 8px;
  font-size: 1rem;
  width: 140px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-top: 12px;
  & > button {
    margin-right: 8px;
  }
`;

const Button = styled.button`
  padding: 6px 16px;
  font-size: 1rem;
  color: #333;
  border: 1px solid #aaa;
  background: #f7f7f7;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #eaeaea;
  }
`;

const ResultBox = styled.div`
  max-height: 200px;
  margin-top: 16px;
  padding: 16px;
  color: #222;
  background: #f5f8fa;
  border-radius: 6px;

  overflow-y: auto;
`;

const ScheduleList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const FreqSelect = styled.select`
  padding: 4px 8px;
  font-size: 1rem;
  margin-left: 8px;
`;

const freqOptions: { value: CompoundFreqType; label: string; freq: number }[] =
  [
    { value: 'yearly', label: '연 1회', freq: 1 },
    { value: 'quarterly', label: '분기별(연 4회)', freq: 4 },
    { value: 'monthly', label: '월별(연 12회)', freq: 12 },
    { value: 'daily', label: '일별(연 365회)', freq: 365 },
  ];

const getFreqLabel = (type: CompoundFreqType) => {
  switch (type) {
    case 'yearly':
      return '연 1회';
    case 'quarterly':
      return '분기별(연 4회)';
    case 'monthly':
      return '월별(연 12회)';
    case 'daily':
      return '일별(연 365회)';
    default:
      return '';
  }
};

const FinanceCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(1000000);
  const [rate, setRate] = useState<number>(5);
  const [time, setTime] = useState<number>(1);
  const [months, setMonths] = useState<number>(12);
  const [calcType, setCalcType] = useState<CalcType>('simple');
  const [compoundFreqType, setCompoundFreqType] =
    useState<CompoundFreqType>('yearly');
  const [result, setResult] = useState<ResultType>(null);

  const calculate = () => {
    const r = rate / 100;
    let output: ResultType = null;

    switch (calcType) {
      case 'simple':
        output = principal * (1 + r * time);
        break;

      case 'compound': {
        const freqObj = freqOptions.find((f) => f.value === compoundFreqType)!;
        const freq = freqObj.freq;
        const finalAmount = principal * Math.pow(1 + r / freq, freq * time);
        // 복리 schedule 계산 (주기별로)
        const schedule: number[] = [];
        for (let i = 1; i <= freq * time; i++) {
          const amount = principal * Math.pow(1 + r / freq, i);
          schedule.push(amount);
        }
        const totalPayment = finalAmount;
        const totalInterest = finalAmount - principal;
        output = {
          finalAmount,
          schedule,
          totalPayment,
          totalInterest,
          freqLabel: freqObj.label,
        };
        break;
      }
      case 'loan-equal': {
        const monthlyRate = r / 12;
        const n = months;
        const M =
          (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
          (Math.pow(1 + monthlyRate, n) - 1);
        output = {
          monthlyPayment: M,
          totalPayment: M * n,
          totalInterest: M * n - principal,
        };
        break;
      }

      case 'loan-principal': {
        const monthlyRate = r / 12;
        const n = months;
        const monthlyPrincipal = principal / n;
        const schedule = Array.from({ length: n }).map((_, i) => {
          const remaining = principal - monthlyPrincipal * i;
          return monthlyPrincipal + remaining * monthlyRate;
        });
        output = {
          schedule,
          totalPayment: schedule.reduce((a, b) => a + b, 0),
          totalInterest: schedule.reduce((a, b) => a + b, 0) - principal,
        };
        break;
      }
    }

    setResult(output);
  };

  return (
    <Container>
      <Title>금융 계산기</Title>

      <Field>
        <Label>원금: </Label>
        <Input
          type='number'
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
        />
      </Field>

      <Field>
        <Label>이율 (%): </Label>
        <Input
          type='number'
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
      </Field>

      {calcType === 'simple' || calcType === 'compound' ? (
        <Field>
          <Label>기간 (년): </Label>
          <Input
            type='number'
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
          />
        </Field>
      ) : (
        <Field>
          <Label>기간 (개월): </Label>
          <Input
            type='number'
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
          />
        </Field>
      )}

      {calcType === 'compound' && (
        <Field>
          <Label>복리 주기: </Label>
          <FreqSelect
            value={compoundFreqType}
            onChange={(e) =>
              setCompoundFreqType(e.target.value as CompoundFreqType)
            }>
            {freqOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </FreqSelect>
        </Field>
      )}

      <ButtonGroup>
        <Button onClick={() => setCalcType('simple')}>단리</Button>
        <Button onClick={() => setCalcType('compound')}>복리</Button>
        <Button onClick={() => setCalcType('loan-equal')}>
          대출(원리금균등)
        </Button>
        <Button onClick={() => setCalcType('loan-principal')}>
          대출(원금균등)
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button onClick={calculate}>계산하기</Button>
      </ButtonGroup>
      {result !== null && (
        <ResultBox>
          {calcType === 'simple' && typeof result === 'number' ? (
            <h3>최종 금액: {result.toLocaleString()} 원</h3>
          ) : calcType === 'loan-equal' &&
            result !== null &&
            typeof result === 'object' &&
            'monthlyPayment' in result ? (
            <>
              <h3>
                월 상환액:{' '}
                {(result as LoanEqualResult).monthlyPayment.toFixed(0)} 원
              </h3>
              <p>
                총 상환액: {(result as LoanEqualResult).totalPayment.toFixed(0)}{' '}
                원
              </p>
              <p>
                총 이자: {(result as LoanEqualResult).totalInterest.toFixed(0)}{' '}
                원
              </p>
            </>
          ) : calcType === 'compound' &&
            result !== null &&
            typeof result === 'object' &&
            'finalAmount' in result ? (
            <>
              <h3>
                최종 금액:{' '}
                {(result as CompoundResult).finalAmount.toLocaleString()} 원
              </h3>
              <p>
                총 수령액:{' '}
                {(result as CompoundResult).totalPayment.toLocaleString()} 원
              </p>
              <p>
                총 이자:{' '}
                {(result as CompoundResult).totalInterest.toLocaleString()} 원
              </p>
              <p>
                복리 주기: <b>{(result as CompoundResult).freqLabel}</b>
              </p>
              <details>
                <summary>기간별 복리 스케줄</summary>
                <ScheduleList>
                  {(result as CompoundResult).schedule.map(
                    (amount: number, i: number) => (
                      <li key={i}>
                        {i + 1}회({getFreqLabel(compoundFreqType)}):{' '}
                        {amount.toLocaleString()} 원
                      </li>
                    ),
                  )}
                </ScheduleList>
              </details>
            </>
          ) : calcType === 'loan-principal' &&
            result !== null &&
            typeof result === 'object' &&
            'schedule' in result ? (
            <>
              <h3>
                총 상환액:{' '}
                {(result as LoanPrincipalResult).totalPayment.toFixed(0)} 원
              </h3>
              <p>
                총 이자:{' '}
                {(result as LoanPrincipalResult).totalInterest.toFixed(0)} 원
              </p>
              <details>
                <summary>월별 상환 스케줄</summary>
                <ScheduleList>
                  {(result as LoanPrincipalResult).schedule.map(
                    (p: number, i: number) => (
                      <li key={i}>
                        {i + 1}개월차: {p.toFixed(0)} 원
                      </li>
                    ),
                  )}
                </ScheduleList>
              </details>
            </>
          ) : null}
        </ResultBox>
      )}
    </Container>
  );
};

export default FinanceCalculator;
