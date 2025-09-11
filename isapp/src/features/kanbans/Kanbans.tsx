import React, { useEffect } from 'react';
import styled from 'styled-components';

import RecentApps from '../../components/RecentApps';

const Container = styled.div`
  position: relative;
  width: calc(100% - 16px);
  height: 100%;
  min-height: 150px;
  background-color: #fafafa;
  border-radius: 12px;
  overflow: hidden;
  padding: 8px;
`;
const KanbanWraps = styled.ul`
  display: flex;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
  & li {
    flex: 1;
    width: 50%;
    height: 100%;
    min-height: 150px;
    padding: 8px;
    overflow: hidden;
    background: #92929221;
    border: 1px solid #ebeaea;
    border-radius: 8px;
    box-sizing: border-box;
  }
`;

const Kanbans: React.FC = () => {
  useEffect(() => {
    localStorage.setItem(
      'recentApps',
      JSON.stringify([
        {
          id: 'memo',
          name: 'Memo',
          icon: 'https://yoonjonglyu.github.io/memo/assets/apple-touch-icon-60x60.png',
          uri: 'https://yoonjonglyu.github.io/memo/',
          lastOpened: Date.now(),
        },
        {
          id: 'daoxin',
          name: 'Daoxin',
          icon: 'https://yoonjonglyu.github.io/daoxin/assets/apple-touch-icon-60x60.png',
          uri: 'https://yoonjonglyu.github.io/daoxin/',
          lastOpened: Date.now() - 1000,
        },
      ]),
    );
  }, []);
  return (
    <Container>
      <KanbanWraps>
        <li>
          <RecentApps id={''} name={''} icon={''} uri={''} lastOpened={0} />
        </li>
        <li>Kanban 2</li>
      </KanbanWraps>
    </Container>
  );
};

export default Kanbans;
