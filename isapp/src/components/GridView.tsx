import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
`;

const GridItem = styled.div`
  border: none;
  padding: 10px;
  text-align: center;
`;

export interface GridViewProps {
  items: React.ReactNode[];
}

const GridView: React.FC<GridViewProps> = ({ items }) => {
  return (
    <GridContainer>
      {items.map((item, index) => (
        <GridItem key={index}>{item}</GridItem>
      ))}
    </GridContainer>
  );
};

export default GridView;
