import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SearchIcon, SparklesIcon, CloseIcon } from './Icons';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 14px 16px 12px 16px;
  background: rgba(10, 13, 20, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TimeAndDate = styled.div`
  display: flex;
  flex-direction: column;
  
  .time {
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text-primary);
  }

  .date {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--text-muted);
  }
`;

const DynamicIslandPill = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s var(--ease-spring);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }

  .pill-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
    animation: pulse 2s infinite;
  }

  .pill-text {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--text-secondary);
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.9); }
  }
`;

const SearchContainer = styled.div<{ $isFocused: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  background: ${({ $isFocused }) =>
    $isFocused ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.04)'};
  border: 1px solid
    ${({ $isFocused }) =>
      $isFocused ? 'rgba(59, 130, 246, 0.5)' : 'var(--glass-border)'};
  border-radius: var(--radius-lg);
  box-shadow: ${({ $isFocused }) =>
    $isFocused ? '0 0 0 3px rgba(59, 130, 246, 0.15)' : 'none'};
  transition: all 0.25s var(--ease-spring);

  .search-icon {
    color: ${({ $isFocused }) =>
      $isFocused ? 'var(--accent-cyan)' : 'var(--text-muted)'};
    margin-right: 8px;
    transition: color 0.2s ease;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-size: 0.88rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-muted);
      font-weight: 400;
    }
  }

  .clear-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    padding: 4px;
    border-radius: 50%;
    &:hover {
      color: var(--text-primary);
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
      setCurrentDate(
        now.toLocaleDateString('ko-KR', {
          month: 'long',
          day: 'numeric',
          weekday: 'short',
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeaderWrapper>
      <TopRow>
        <TimeAndDate>
          <span className="time">{currentTime || '09:41'}</span>
          <span className="date">{currentDate || '10월 9일 목요일'}</span>
        </TimeAndDate>

        <DynamicIslandPill className="pressable">
          <div className="pill-dot" />
          <span className="pill-text">IsApp OS</span>
          <SparklesIcon size={12} color="var(--accent-purple)" />
        </DynamicIslandPill>
      </TopRow>

      <SearchContainer $isFocused={isFocused}>
        <SearchIcon className="search-icon" size={16} />
        <input
          type="text"
          placeholder="앱, 도구 또는 기능 검색..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {searchQuery ? (
          <button
            className="clear-btn"
            type="button"
            onClick={() => onSearchChange('')}
          >
            <CloseIcon size={14} />
          </button>
        ) : null}
      </SearchContainer>
    </HeaderWrapper>
  );
};

export default Header;
