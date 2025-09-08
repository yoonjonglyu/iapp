import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 8px;
  color: white;
  text-align: center;
  & h1 {
    margin: 0;
    font-size: 1.3rem;
  }
`;

export interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <h1>ISA Apps</h1>
    </HeaderContainer>
  );
};

export default Header;
