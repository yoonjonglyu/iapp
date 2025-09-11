// RecentApps.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export interface RecentAppProps {
  id: string;
  name: string;
  icon: string;
  uri: string;
  lastOpened: number;
}

const Container = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #444;
`;

const List = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AppButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 64px;
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const AppIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
`;

const AppName = styled.span`
  font-size: 12px;
  margin-top: 6px;
  color: #555;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const RecentApps: React.FC<RecentAppProps> = () => {
  const [recent, setRecent] = useState<RecentAppProps[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('recentApps') || '[]');
    setRecent(data);
  }, []);

  if (recent.length === 0) return null;

  return (
    <Container>
      <Title>최근 사용 앱</Title>
      <List>
        {recent.map((app) => (
          <AppButton key={app.id} onClick={() => openApp(app)}>
            <AppIcon src={app.icon} alt={app.name} />
            <AppName>{app.name}</AppName>
          </AppButton>
        ))}
      </List>
    </Container>
  );
};

export default RecentApps;

function openApp(app: RecentAppProps) {
  window.location.href = app.uri;

  const recent = JSON.parse(localStorage.getItem('recentApps') || '[]');
  const updated = [
    { ...app, lastOpened: Date.now() },
    ...recent.filter((a: RecentAppProps) => a.id !== app.id),
  ].slice(0, 5);

  localStorage.setItem('recentApps', JSON.stringify(updated));
}
