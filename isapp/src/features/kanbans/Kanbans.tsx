import React from 'react';
import styled from 'styled-components';
import RecentApps from './RecentApps';
import SquareWidget from './SquareWidget';

const Container = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
`;

export interface KanbansProps {
  handleAppClick: (app: { name: string; icon: string; uri: string; type?: string; category?: string }) => void;
  handleMiniAppClick: (name: string) => void;
}

const Kanbans: React.FC<KanbansProps> = ({
  handleAppClick,
  handleMiniAppClick,
}) => {
  return (
    <Container>
      <RecentApps openApp={handleAppClick} />
      <SquareWidget
        openMiniApp={handleMiniAppClick}
        openExternalApp={handleAppClick}
      />
    </Container>
  );
};

export default Kanbans;
