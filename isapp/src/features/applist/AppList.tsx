import React from 'react';
import GridView from '../../components/GridView';

export interface AppListProps {
  apps: { name: string; icon: string }[];
}

const AppList: React.FC<AppListProps> = ({ apps }) => {
  const appItems = apps.map((app) => (
    <div key={app.name}>
      <img
        src={app.icon}
        alt={app.name}
        style={{ width: '50px', height: '50px' }}
      />
      <p>{app.name}</p>
    </div>
  ));

  return <GridView items={appItems} />;
};

export default AppList;
