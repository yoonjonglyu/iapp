import React, { useState } from 'react';
import styled from 'styled-components';

const navItems = [
  { label: 'ChatGPT', icon: '🤖', link: 'https://chat.openai.com/' },
  { label: 'Gemini', icon: '🔮', link: 'https://gemini.google.com/' },
  { label: 'Grok', icon: '🦉', link: 'https://grok.x.ai/' },
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

const NavButton = styled.a<{ active: boolean }>`
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
  text-decoration: none;
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
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          active={value === idx}
          onClick={() => setValue(idx)}
        >
          <Icon>{item.icon}</Icon>
          {item.label}
        </NavButton>
      ))}
    </Nav>
  );
};

export default BottomNav;
