import React from 'react';
import styled from 'styled-components';
import useRecent from '../../hooks/useRecent';
import { ClockIcon } from '../../components/Icons';


interface RecentAppsProps {
  openApp: (app: { name: string; icon: string; uri: string; type?: string; id?: string; category?: string }) => void;
}

const WidgetBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 14px 16px;
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
  margin-bottom: 12px;

  .title-group {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--text-secondary);
  }

  .icon {
    color: var(--accent-cyan);
  }

  .count-tag {
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--text-muted);
    background: rgba(255, 255, 255, 0.05);
    padding: 2px 8px;
    border-radius: var(--radius-full);
  }
`;

const AppsScroll = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 4px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 9999px;
  }
`;

const AppItemBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-width: 56px;
  background: transparent;

  .icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s var(--ease-spring);
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover .icon-wrap {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.28);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  .name {
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--text-secondary);
    max-width: 58px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const fallbackPresets = [
  {
    name: 'Logos Path',
    icon: '📜',
    uri: 'https://app.ryuislabs.com/logos-path',
    type: 'external',
  },
  {
    name: 'MemoFlow',
    icon: 'https://yoonjonglyu.github.io/memo/assets/apple-touch-icon-60x60.png',
    uri: 'https://yoonjonglyu.github.io/memo/',
    type: 'external',
  },
  {
    name: 'Daoxin',
    icon: 'https://yoonjonglyu.github.io/daoxin/pwa-64x64.png',
    uri: 'https://yoonjonglyu.github.io/daoxin/',
    type: 'external',
  },
  {
    name: 'Asharyu Docs',
    icon: '🎨',
    uri: 'https://docs.ryuislabs.com/',
    type: 'external',
  },
  {
    name: '다기능 계산기',
    icon: '🧮',
    uri: 'multicalculator',
    type: 'internal',
  },
  {
    name: '금융 계산기',
    icon: '💰',
    uri: 'financecalculator',
    type: 'internal',
  },
];

const isExternalLink = (app: { uri: string; type?: string; category?: string }) => {
  return (
    app.type === 'external_link' ||
    app.category === 'ai' ||
    app.uri.includes('openai.com') ||
    app.uri.includes('gemini.google.com') ||
    app.uri.includes('claude.ai') ||
    app.uri.includes('grok.x.ai') ||
    app.uri.includes('perplexity.ai')
  );
};

const renderRecentIcon = (icon: string) => {
  if (icon.startsWith('http')) {
    return <img src={icon} alt="app icon" />;
  }
  return <span>{icon}</span>;
};

const RecentApps: React.FC<RecentAppsProps> = ({ openApp }) => {
  const { recentApps } = useRecent();

  // 순수 앱/미니앱만 필터링 (외부 웹사이트 링크 제외)
  const validRecentApps = recentApps.filter((app) => !isExternalLink(app));
  const displayApps = validRecentApps.length > 0 ? validRecentApps : fallbackPresets;

  return (
    <WidgetBox>
      <WidgetHeader>
        <div className="title-group">
          <ClockIcon className="icon" size={14} />
          <span>{validRecentApps.length > 0 ? '최근 실행한 앱' : '추천 바로가기'}</span>
        </div>
        <span className="count-tag">{displayApps.length}개</span>
      </WidgetHeader>

      <AppsScroll>
        {displayApps.map((app, idx) => (
          <AppItemBtn
            key={`${app.name}-${idx}`}
            className="pressable"
            onClick={() => openApp(app)}
          >
            <div className="icon-wrap">{renderRecentIcon(app.icon)}</div>
            <span className="name">{app.name}</span>
          </AppItemBtn>
        ))}
      </AppsScroll>
    </WidgetBox>
  );
};

export default RecentApps;
