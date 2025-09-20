import React, { useState } from 'react';
import styled from 'styled-components';

const navItems = [
  { label: 'Home', icon: '🏠' },
  { label: 'Search', icon: '🔍' },
  { label: 'Profile', icon: '👤' },
];

const Nav = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background: #fff;
  border-top: 1px solid #ccc;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 8px 0;
  z-index: 20;
`;

const NavButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  outline: none;
  color: ${({ active }) => (active ? '#1976d2' : '#555')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.span`
  font-size: 24px;
`;

const BottomNav: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <Nav>
      {navItems.map((item, idx) => (
        <NavButton
          key={item.label}
          onClick={() => setValue(idx)}
          active={value === idx}>
          <Icon>{item.icon}</Icon>
          {item.label}
        </NavButton>
      ))}
    </Nav>
  );
};

export default BottomNav;
