import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Smartphone,
  GitFork,
  Trash2,
  CheckCircle,
  Moon,
} from 'lucide-react';

const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-sizing: border-box;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px;
  background: var(--glass-card);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);

  .avatar {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: var(--accent-gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4);
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .name {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .desc {
      font-size: 0.78rem;
      color: var(--text-muted);
    }
  }
`;

const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-muted);
    padding: 0 4px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--glass-card);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: none;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--text-primary);
    font-size: 0.88rem;
    font-weight: 500;
  }

  .right {
    font-size: 0.8rem;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #f87171;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 12px 16px;
  width: 100%;
  border-radius: var(--radius-lg);
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.16);
  }
`;

const SettingsView: React.FC = () => {
  const [cleared, setCleared] = useState(false);

  const handleClearRecent = () => {
    localStorage.removeItem('recentApps');
    setCleared(true);
    setTimeout(() => {
      window.location.reload();
    }, 600);
  };

  return (
    <Container>
      <ProfileCard>
        <div className="avatar">🚀</div>
        <div className="meta">
          <span className="name">IsApp Super Launcher</span>
          <span className="desc">Version 2.0.0 (Dark Glass Edition)</span>
        </div>
      </ProfileCard>

      <SectionGroup>
        <h4>환경 및 상태</h4>
        <MenuList>
          <MenuItem>
            <div className="left">
              <Moon size={18} color="var(--accent-purple)" />
              <span>디자인 테마</span>
            </div>
            <div className="right">
              <span>Dark Glass (고정)</span>
            </div>
          </MenuItem>

          <MenuItem>
            <div className="left">
              <Smartphone size={18} color="var(--accent-cyan)" />
              <span>PWA 앱 상태</span>
            </div>
            <div className="right">
              <CheckCircle size={14} color="#10b981" />
              <span>설치 준비 완료</span>
            </div>
          </MenuItem>
        </MenuList>
      </SectionGroup>

      <SectionGroup>
        <h4>데이터 관리</h4>
        <ActionButton className="pressable" onClick={handleClearRecent}>
          <Trash2 size={16} />
          <span>{cleared ? '기록 삭제 완료! 새로고침 중...' : '최근 사용 앱 기록 초기화'}</span>
        </ActionButton>
      </SectionGroup>

      <SectionGroup>
        <h4>정보 & 링크</h4>
        <MenuList>
          <a
            href="https://github.com/yoonjonglyu/iapp"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <MenuItem className="pressable">
              <div className="left">
                <GitFork size={18} />
                <span>GitHub 저장소 방문</span>
              </div>
              <div className="right">
                <span>yoonjonglyu/iapp</span>
              </div>
            </MenuItem>
          </a>
        </MenuList>
      </SectionGroup>
    </Container>
  );
};

export default SettingsView;
