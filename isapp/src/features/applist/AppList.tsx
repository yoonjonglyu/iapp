import React from 'react';
import styled from 'styled-components';

import GridView from '../../components/GridView';

import type { AppsProps } from '../../apps';

const ItemContainer = styled.div`
  cursor: pointer;
  text-align: center;
  & p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }
`;
const ItemIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 12px;
`;

export interface AppListProps {
  apps: AppsProps;
  handleAppClick: (app: { name: string; icon: string; uri: string }) => void;
}

const AppList: React.FC<AppListProps> = ({ apps, handleAppClick }) => {
  const appItems = apps.map((app) => (
    <ItemContainer
      key={app.name}
      onClick={() => handleAppClick(app)}>
      <ItemIcon
        src={app.icon}
        alt={app.name}
      />
      <p>{app.name}</p>
    </ItemContainer>
  ));

  return <GridView items={appItems} />;
};

export default AppList;
