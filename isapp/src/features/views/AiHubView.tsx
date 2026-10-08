import React from 'react';
import styled from 'styled-components';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import type { AppItem } from '../../apps';
import {
  ChatGptLogo,
  GeminiLogo,
  ClaudeLogo,
  GrokLogo,
  PerplexityLogo,
} from '../../components/AiLogos';

interface AiHubViewProps {
  onOpenApp: (app: AppItem) => void;
  aiApps: AppItem[];
}

const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-sizing: border-box;
`;

const BannerCard = styled.div`
  position: relative;
  overflow: hidden;
  padding: 18px 20px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.22));
  border: 1px solid rgba(139, 92, 246, 0.35);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  gap: 8px;

  &::before {
    content: '';
    position: absolute;
    top: -40%;
    right: -20%;
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.35), transparent 70%);
    pointer-events: none;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--accent-cyan);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  p {
    font-size: 0.8rem;
    color: var(--text-secondary);
    line-height: 1.45;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  span {
    font-size: 0.75rem;
    color: var(--text-muted);
  }
`;

const AiList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AiCard = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: var(--glass-card);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s var(--ease-spring);

  &:hover {
    background: var(--glass-card-hover);
    border-color: rgba(255, 255, 255, 0.22);
    transform: translateY(-2px);
  }

  .left {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .logo-box {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.15);
    flex-shrink: 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .name-row {
      display: flex;
      align-items: center;
      gap: 6px;

      .name {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-primary);
      }

      .badge {
        font-size: 0.62rem;
        font-weight: 700;
        padding: 1px 6px;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: var(--text-secondary);
        border-radius: var(--radius-full);
      }
    }

    .desc {
      font-size: 0.78rem;
      color: var(--text-muted);
    }
  }

  .right-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--text-muted);
    font-size: 0.75rem;
    padding: 6px 10px;
    border-radius: var(--radius-full);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 0.2s ease;
  }

  &:hover .right-btn {
    color: var(--accent-cyan);
    border-color: rgba(6, 182, 212, 0.3);
    background: rgba(6, 182, 212, 0.1);
  }
`;

const renderAiLogo = (key?: string) => {
  switch (key) {
    case 'chatgpt':
      return <ChatGptLogo size={26} />;
    case 'gemini':
      return <GeminiLogo size={26} />;
    case 'claude':
      return <ClaudeLogo size={26} />;
    case 'grok':
      return <GrokLogo size={24} />;
    case 'perplexity':
      return <PerplexityLogo size={24} />;
    default:
      return <Sparkles size={24} />;
  }
};

const AiHubView: React.FC<AiHubViewProps> = ({ onOpenApp, aiApps }) => {
  return (
    <Container>
      <BannerCard>
        <span className="tag">
          <Sparkles size={13} />
          Direct Launchpad
        </span>
        <h3>AI 에이전트 스튜디오</h3>
        <p>
          각 사의 최신 AI 서비스를 다이렉트 새 탭으로 즉시 열어 바로 사용하세요.
        </p>
      </BannerCard>

      <SectionHeader>
        <h4>공식 지원 AI 도구</h4>
        <span>{aiApps.length}개 모델</span>
      </SectionHeader>

      <AiList>
        {aiApps.map((ai) => (
          <AiCard
            key={ai.id}
            className="pressable"
            href={ai.uri}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onOpenApp(ai)}
          >
            <div className="left">
              <div
                className="logo-box"
                style={{
                  background: ai.gradient || 'rgba(255, 255, 255, 0.08)',
                }}
              >
                {renderAiLogo(ai.aiLogoKey)}
              </div>
              <div className="info">
                <div className="name-row">
                  <span className="name">{ai.name}</span>
                  {ai.badge && <span className="badge">{ai.badge}</span>}
                </div>
                <span className="desc">{ai.description}</span>
              </div>
            </div>
            <div className="right-btn">
              <span>열기</span>
              <ArrowUpRight size={14} />
            </div>
          </AiCard>
        ))}
      </AiList>
    </Container>
  );
};

export default AiHubView;
