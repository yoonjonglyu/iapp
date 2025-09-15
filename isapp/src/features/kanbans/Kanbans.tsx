import React from 'react';
import styled from 'styled-components';

import RecentApps from './RecentApps';
import KanbanItem from '../../components/KanbanItem';

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
  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    flex: 1;
    width: 50%;
    height: 150px;
    padding: 8px;
    overflow: hidden;
    background: #92929221;
    border: 1px solid #ebeaea;
    border-radius: 8px;
    box-sizing: border-box;
  }
`;

export interface KanbansProps {
  handleAppClick: (app: { name: string; icon: string; uri: string }) => void;
}

const Kanbans: React.FC<KanbansProps> = ({ handleAppClick }) => {
  return (
    <Container>
      <KanbanWraps>
        <li>
          <RecentApps openApp={handleAppClick}></RecentApps>
        </li>
        <li>
          <KanbanItem>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', height: '100%' }}>
              <div style={{ background: '#e0e0e0', borderRadius: '6px', minHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>
              <div style={{ background: '#e0e0e0', borderRadius: '6px', minHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>
              <div style={{ background: '#e0e0e0', borderRadius: '6px', minHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 3</div>
              <div style={{ background: '#e0e0e0', borderRadius: '6px', minHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 4</div>
            </div>
          </KanbanItem>
        </li>
      </KanbanWraps>
    </Container>
  );
};

export default Kanbans;
