import React, { useState } from 'react';
import styled from 'styled-components';
import type { AppItem } from '../../apps';
import {
  ChatGptLogo,
  GeminiLogo,
  ClaudeLogo,
  GrokLogo,
  PerplexityLogo,
} from '../../components/AiLogos';

export interface AppListProps {
  apps: AppItem[];
  handleAppClick: (app: AppItem) => void;
  searchQuery?: string;
}

const Container = styled.div`
  width: 100%;
  padding: 8px 16px 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;

  h2 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.01em;
  }

  span.count {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-weight: 500;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 2px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabButton = styled.button<{ $active: boolean }>`
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: ${({ $active }) => ($active ? '600' : '500')};
  color: ${({ $active }) => ($active ? '#fff' : 'var(--text-secondary)')};
  background: ${({ $active }) =>
    $active ? 'var(--accent-gradient)' : 'rgba(255, 255, 255, 0.04)'};
  border: 1px solid
    ${({ $active }) =>
      $active ? 'transparent' : 'rgba(255, 255, 255, 0.08)'};
  box-shadow: ${({ $active }) =>
    $active ? '0 4px 12px rgba(139, 92, 246, 0.3)' : 'none'};
  transition: all 0.25s var(--ease-spring);
  white-space: nowrap;

  &:hover {
    color: #fff;
    background: ${({ $active }) =>
      $active ? 'var(--accent-gradient)' : 'rgba(255, 255, 255, 0.08)'};
  }
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 12px;

  @media (max-width: 360px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AppCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
  text-align: center;
`;

const IconWrapper = styled.div<{ $gradient?: string }>`
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $gradient }) =>
    $gradient || 'linear-gradient(135deg, #1f2937, #111827)'};
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 16px -2px rgba(0, 0, 0, 0.35);
  transition: all 0.25s var(--ease-spring);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .emoji {
    font-size: 2rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }

  ${AppCard}:hover & {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 12px 20px -2px rgba(0, 0, 0, 0.45);
    border-color: rgba(255, 255, 255, 0.3);
  }

  ${AppCard}:active & {
    transform: scale(0.93);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background: #ef4444;
  color: white;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 8px;
  border: 1.5px solid var(--bg-primary);
  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.5);
`;

const AppLabel = styled.span`
  font-size: 0.76rem;
  font-weight: 500;
  color: var(--text-primary);
  max-width: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -0.01em;
`;

const EmptySearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
  color: var(--text-muted);
  gap: 8px;

  span.icon {
    font-size: 2rem;
  }

  p {
    font-size: 0.85rem;
  }
`;

const categories = [
  { id: 'all', label: '전체' },
  { id: 'labs', label: 'RyuisLabs' },
  { id: 'productivity', label: '생산성' },
  { id: 'utility', label: '유틸리티' },
  { id: 'ai', label: 'AI 도구' },
];

const AppList: React.FC<AppListProps> = ({
  apps,
  handleAppClick,
  searchQuery = '',
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredApps = apps.filter((app) => {
    const matchesSearch =
      searchQuery === '' ||
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || app.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const renderAppIcon = (app: AppItem) => {
    if (app.iconType === 'ai-logo') {
      switch (app.aiLogoKey) {
        case 'chatgpt':
          return <ChatGptLogo size={32} style={{ color: '#fff' }} />;
        case 'gemini':
          return <GeminiLogo size={32} />;
        case 'claude':
          return <ClaudeLogo size={32} style={{ color: '#fff' }} />;
        case 'grok':
          return <GrokLogo size={28} style={{ color: '#fff' }} />;
        case 'perplexity':
          return <PerplexityLogo size={28} style={{ color: '#fff' }} />;
        default:
          return <span className="emoji">{app.icon}</span>;
      }
    }
    if (app.iconType === 'img') {
      return <img src={app.icon} alt={app.name} />;
    }
    return <span className="emoji">{app.icon}</span>;
  };

  return (
    <Container>
      <SectionHeader>
        <h2>앱 런치패드</h2>
        <span className="count">{filteredApps.length}개의 앱</span>
      </SectionHeader>

      {!searchQuery ? (
        <CategoryTabs>
          {categories.map((cat) => (
            <TabButton
              key={cat.id}
              className="pressable"
              $active={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </TabButton>
          ))}
        </CategoryTabs>
      ) : null}

      {filteredApps.length > 0 ? (
        <AppGrid>
          {filteredApps.map((app) => (
            <AppCard
              key={app.id}
              className="pressable"
              onClick={() => handleAppClick(app)}
            >
              <IconWrapper $gradient={app.gradient}>
                {renderAppIcon(app)}
                {app.badge ? <Badge>{app.badge}</Badge> : null}
              </IconWrapper>
              <AppLabel>{app.name}</AppLabel>
            </AppCard>
          ))}
        </AppGrid>
      ) : (
        <EmptySearch>
          <span className="icon">🔍</span>
          <p>검색 결과와 일치하는 앱이 없습니다.</p>
        </EmptySearch>
      )}
    </Container>
  );
};

export default AppList;
