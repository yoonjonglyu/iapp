import React from 'react';
import styled from 'styled-components';

import MultiCalculator from './multicalculator/MultiCalculator';

const Container = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 40px);
  background-color: #131212;
  z-index: 1000;
`;
const Toolbar = styled.form`
  display: flex;
  align-items: center;
  padding: 8px;
  background: #f5f5f5;
`;

const ToolbarButton = styled.button`
  margin-right: 4px;
`;
const MiniAppWrapper = styled.div`
  flex: 1;
  border-top: 1px solid #ddd;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  overflow: hidden;
`;

interface AppWrapperProps {
  closeApp?: () => void;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ closeApp }) => {
  const miniApp = <MultiCalculator />; // Change this to switch mini-apps

  return (
    <Container className='app-wrapper'>
      <Toolbar>
        <ToolbarButton type='button' onClick={closeApp} title='Close'>
          X
        </ToolbarButton>
        <span>Mini App</span>
      </Toolbar>
      <MiniAppWrapper>{miniApp}</MiniAppWrapper>
    </Container>
  );
};

export default AppWrapper;
