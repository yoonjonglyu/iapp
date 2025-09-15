import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px 0;
  padding: 0;
  color: #333;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;

  /* Scrollbar styles */
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export interface KanbanItemProps {
  title?: string;
  children?: React.ReactNode;
}

const KanbanItem: React.FC<KanbanItemProps> = ({ title, children }) => {
  return (
    <Container>
      {title ? <Title>{title}</Title> : null}
      <List>{children}</List>
    </Container>
  );
};

export default KanbanItem;
