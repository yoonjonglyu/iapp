import React from 'react';
import styled from 'styled-components';

import KanbanItem from '../../components/KanbanItem';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  height: 100%;
`;

const WidgetItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: #e0e0e0;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export interface SquareWidgetProps {
  openApp?: (app: { icon: string; name: string; uri: string }) => void;
}

const SquareWidget: React.FC<SquareWidgetProps> = ({ openApp }) => {
  return (
    <KanbanItem>
      <Container>
        <WidgetItem onClick={() => openApp}></WidgetItem>
        <WidgetItem onClick={() => openApp}></WidgetItem>
        <WidgetItem onClick={() => openApp}></WidgetItem>
        <WidgetItem onClick={() => openApp}></WidgetItem>
      </Container>
    </KanbanItem>
  );
};

export default SquareWidget;
