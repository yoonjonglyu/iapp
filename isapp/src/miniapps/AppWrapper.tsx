import React from 'react';
import styled, { keyframes } from 'styled-components';
import { X, Sparkles } from 'lucide-react';
import MultiCalculator from './multicalculator/MultiCalculator';
import FinanceCalculator from './financecalculator/FinanceCalculator';

interface AppWrapperProps {
  app: string;
  closeApp?: () => void;
}

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  z-index: 1000;
  animation: ${slideUp} 0.3s var(--ease-spring);
  overflow: hidden;

  @media (min-width: 461px) {
    top: 20px;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 460px;
    border-radius: var(--radius-2xl);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  }
`;

const HeaderBar = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(18, 23, 33, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
  padding: 8px 14px 10px 14px;
  gap: 8px;
`;

const DragHandle = styled.div`
  width: 36px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  margin: 2px auto 0 auto;
`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .title {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .badge {
    font-size: 0.65rem;
    font-weight: 600;
    padding: 2px 7px;
    background: rgba(59, 130, 246, 0.15);
    color: var(--accent-cyan);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: var(--radius-full);
  }
`;

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #f87171;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  transition: all 0.2s var(--ease-spring);

  &:hover {
    background: rgba(239, 68, 68, 0.2);
    color: #fca5a5;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  background: var(--bg-secondary);
`;

const AppWrapper: React.FC<AppWrapperProps> = ({ app, closeApp }) => {
  let miniAppComponent = null;
  let appDisplayName = '내장 미니앱';

  if (app === 'multicalculator') {
    miniAppComponent = <MultiCalculator />;
    appDisplayName = '스마트 다기능 계산기';
  } else if (app === 'financecalculator') {
    miniAppComponent = <FinanceCalculator />;
    appDisplayName = '스마트 금융 계산기';
  } else {
    miniAppComponent = (
      <div style={{ padding: 32, textAlign: 'center', color: '#94a3b8' }}>
        앱을 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <Container className="app-wrapper">
      <HeaderBar>
        <DragHandle />
        <NavRow>
          <TitleInfo>
            <Sparkles size={16} color="var(--accent-purple)" />
            <span className="title">{appDisplayName}</span>
            <span className="badge">내장 앱</span>
          </TitleInfo>
          <CloseBtn
            type="button"
            className="pressable"
            onClick={closeApp}
            title="닫기"
          >
            <X size={16} />
          </CloseBtn>
        </NavRow>
      </HeaderBar>
      <ContentWrapper>{miniAppComponent}</ContentWrapper>
    </Container>
  );
};

export default AppWrapper;
