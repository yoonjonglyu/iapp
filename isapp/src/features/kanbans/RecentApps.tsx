// RecentApps.tsx
import React from 'react';
import styled from 'styled-components';

import KanbanItem from '../../components/KanbanItem';

import useRecent from '../../hooks/useRecent';

const AppButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 64px;
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
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

export interface RecentAppProps {
  openApp: (app: { icon: string; name: string; uri: string }) => void;
}

const RecentApps: React.FC<RecentAppProps> = ({ openApp }) => {
  const { recentApps } = useRecent();

  return (
    <KanbanItem title='최근 사용 앱'>
      {recentApps.map((app) => (
        <AppButton key={app.name} onClick={() => openApp(app)}>
          <AppIcon src={app.icon} alt={app.name} />
          <AppName>{app.name}</AppName>
        </AppButton>
      ))}
    </KanbanItem>
  );
};

export default RecentApps;
