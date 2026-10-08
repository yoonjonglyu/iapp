import React from 'react';
import styled from 'styled-components';
import { Play } from 'lucide-react';

interface MiniAppsViewProps {
  onOpenMiniApp: (name: string) => void;
}

const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  span {
    font-size: 0.75rem;
    color: var(--text-muted);
  }
`;

const MiniAppCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const MiniCard = styled.div<{ $gradient: string }>`
  position: relative;
  overflow: hidden;
  padding: 18px;
  background: var(--glass-card);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  transition: all 0.25s var(--ease-spring);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ $gradient }) => $gradient};
  }

  &:hover {
    background: var(--glass-card-hover);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon-box {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: ${({ $gradient }) => $gradient};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .badge {
      font-size: 0.68rem;
      font-weight: 600;
      color: var(--accent-cyan);
      background: rgba(6, 182, 212, 0.12);
      padding: 3px 8px;
      border-radius: var(--radius-full);
      border: 1px solid rgba(6, 182, 212, 0.25);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h4 {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    p {
      font-size: 0.8rem;
      color: var(--text-secondary);
      line-height: 1.4;
    }
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;

    span {
      font-size: 0.7rem;
      color: var(--text-muted);
      background: rgba(255, 255, 255, 0.04);
      padding: 3px 7px;
      border-radius: 6px;
    }
  }

  .btn-run {
    margin-top: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: var(--radius-lg);
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--text-primary);
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.25);
    }
  }
`;

const MiniAppsView: React.FC<MiniAppsViewProps> = ({ onOpenMiniApp }) => {
  return (
    <Container>
      <SectionTitle>
        <h3>내장 도구 & 위젯 컬렉션</h3>
        <span>오프라인 독립 실행 지원</span>
      </SectionTitle>

      <MiniAppCards>
        <MiniCard
          className="pressable"
          $gradient="linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
          onClick={() => onOpenMiniApp('multicalculator')}
        >
          <div className="header-row">
            <div className="icon-box">🧮</div>
            <span className="badge">내장 코어</span>
          </div>
          <div className="content">
            <h4>스마트 다기능 계산기</h4>
            <p>기본 사칙연산부터 공학용 수식, 연속 연산 히스토리를 완벽하게 지원합니다.</p>
          </div>
          <div className="features">
            <span>#사칙연산</span>
            <span>#공학용</span>
            <span>#빠른반응</span>
          </div>
          <button className="btn-run" type="button">
            <Play size={14} fill="currentColor" />
            미니앱 열기
          </button>
        </MiniCard>

        <MiniCard
          className="pressable"
          $gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
          onClick={() => onOpenMiniApp('financecalculator')}
        >
          <div className="header-row">
            <div className="icon-box">💰</div>
            <span className="badge">금융 전문</span>
          </div>
          <div className="content">
            <h4>스마트 금융 계산기</h4>
            <p>예금/적금 만기 이자, 대출 원리금 상환액, 복리 투자 수익률을 스마트하게 시뮬레이션합니다.</p>
          </div>
          <div className="features">
            <span>#적금이자</span>
            <span>#대출상환</span>
            <span>#복리수익</span>
          </div>
          <button className="btn-run" type="button">
            <Play size={14} fill="currentColor" />
            미니앱 열기
          </button>
        </MiniCard>
      </MiniAppCards>
    </Container>
  );
};

export default MiniAppsView;
