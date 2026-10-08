import React from 'react';
import styled from 'styled-components';
import {
  Home,
  LayoutGrid,
  Sparkles,
  Settings,
} from 'lucide-react';

export type NavTabType = 'home' | 'miniapps' | 'ai' | 'settings';

interface BottomNavProps {
  currentTab: NavTabType;
  onTabChange: (tab: NavTabType) => void;
}

const DockContainer = styled.div`
  position: fixed;
  bottom: 16px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  pointer-events: none;
`;

const GlassDock = styled.nav`
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: rgba(15, 20, 30, 0.75);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-full);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
  transition: all 0.3s var(--ease-spring);
`;

const DockItem = styled.button<{ $active: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  min-width: 62px;
  padding: 6px 8px;
  border-radius: var(--radius-full);
  background: ${({ $active }) =>
    $active ? 'rgba(255, 255, 255, 0.12)' : 'transparent'};
  color: ${({ $active }) =>
    $active ? 'var(--text-primary)' : 'var(--text-muted)'};
  transition: all 0.25s var(--ease-spring);

  &:hover {
    color: var(--text-primary);
    background: ${({ $active }) =>
      $active ? 'rgba(255, 255, 255, 0.14)' : 'rgba(255, 255, 255, 0.05)'};
  }

  .icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s var(--ease-spring);
    color: ${({ $active }) => ($active ? 'var(--accent-cyan)' : 'inherit')};
  }

  &:active .icon-wrap {
    transform: scale(0.85);
  }

  .label {
    font-size: 0.65rem;
    font-weight: ${({ $active }) => ($active ? '600' : '500')};
    letter-spacing: -0.01em;
  }

  .active-dot {
    position: absolute;
    bottom: 2px;
    width: 3px;
    height: 3px;
    background: var(--accent-cyan);
    border-radius: 50%;
    box-shadow: 0 0 6px var(--accent-cyan);
  }
`;

const navItems: { id: NavTabType; label: string; icon: React.ReactNode }[] = [
  { id: 'home', label: '런처', icon: <Home size={19} /> },
  { id: 'miniapps', label: '미니앱', icon: <LayoutGrid size={19} /> },
  { id: 'ai', label: 'AI 허브', icon: <Sparkles size={19} /> },
  { id: 'settings', label: '설정', icon: <Settings size={19} /> },
];

const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange }) => {
  return (
    <DockContainer>
      <GlassDock>
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <DockItem
              key={item.id}
              className="pressable"
              $active={isActive}
              onClick={() => onTabChange(item.id)}
            >
              <div className="icon-wrap">{item.icon}</div>
              <span className="label">{item.label}</span>
              {isActive && <div className="active-dot" />}
            </DockItem>
          );
        })}
      </GlassDock>
    </DockContainer>
  );
};

export default BottomNav;
