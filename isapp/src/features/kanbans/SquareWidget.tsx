import React from 'react';
import styled from 'styled-components';
import { ZapIcon } from '../../components/Icons';

export interface QuickWidgetProps {
  openMiniApp: (name: string) => void;
  openExternalApp: (app: {
    name: string;
    icon: string;
    uri: string;
    type?: string;
    category?: string;
  }) => void;
}

const WidgetBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 12px;
  background: var(--glass-card);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.3s var(--ease-spring);

  &:hover {
    border-color: var(--glass-border-highlight);
    background: var(--glass-card-hover);
  }
`;

const WidgetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  .title-group {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .icon {
    color: var(--accent-purple);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  flex: 1;
`;

const QuickActionBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 4px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  transition: all 0.2s var(--ease-spring);

  &:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }

  .emoji {
    font-size: 1.25rem;
  }

  .label {
    font-size: 0.68rem;
    font-weight: 600;
    color: var(--text-secondary);
  }
`;

const SquareWidget: React.FC<QuickWidgetProps> = ({
  openMiniApp,
  openExternalApp,
}) => {
  return (
    <WidgetBox>
      <WidgetHeader>
        <div className="title-group">
          <ZapIcon className="icon" size={14} />
          <span>퀵 유틸리티</span>
        </div>
      </WidgetHeader>

      <Grid>
        <QuickActionBtn
          className="pressable"
          onClick={() => openMiniApp('multicalculator')}
        >
          <span className="emoji">🧮</span>
          <span className="label">계산기</span>
        </QuickActionBtn>

        <QuickActionBtn
          className="pressable"
          onClick={() => openMiniApp('financecalculator')}
        >
          <span className="emoji">💰</span>
          <span className="label">금융계산</span>
        </QuickActionBtn>

        <QuickActionBtn
          className="pressable"
          onClick={() =>
            openExternalApp({
              name: 'Logos Path',
              icon: '📜',
              uri: 'https://app.ryuislabs.com/logos-path',
              type: 'external',
              category: 'labs',
            })
          }
        >
          <span className="emoji">📜</span>
          <span className="label">Logos Path</span>
        </QuickActionBtn>

        <QuickActionBtn
          className="pressable"
          onClick={() =>
            openExternalApp({
              name: '스마트 메모',
              icon: 'https://yoonjonglyu.github.io/memo/assets/apple-touch-icon-60x60.png',
              uri: 'https://yoonjonglyu.github.io/memo/',
            })
          }
        >
          <span className="emoji">📝</span>
          <span className="label">메모장</span>
        </QuickActionBtn>
      </Grid>
    </WidgetBox>
  );
};

export default SquareWidget;
