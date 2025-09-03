import React from 'react';

export interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <h1>ISA App</h1>
    </header>
  );
};

export default Header;
