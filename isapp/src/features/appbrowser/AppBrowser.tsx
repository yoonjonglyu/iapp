import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  X,
  RotateCw,
  ExternalLink,
  Lock,
} from 'lucide-react';

export interface AppBrowserProps {
  initialUrl: string;
  appName?: string;
  handleClose?: () => void;
}

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  z-index: 1000;
  animation: ${slideUp} 0.3s var(--ease-spring);
  overflow: hidden;

  @media (min-width: 461px) {
    top: 20px;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 460px;
    border-radius: var(--radius-2xl);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  }
`;

const HeaderBar = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(18, 23, 33, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
  padding: 8px 12px 10px 12px;
  gap: 8px;
`;

const DragHandle = styled.div`
  width: 36px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  margin: 2px auto 0 auto;
`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.2s var(--ease-spring);

  &:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.12);
  }

  &.close-btn {
    color: #f87171;
    background: rgba(239, 68, 68, 0.1);
    border-color: rgba(239, 68, 68, 0.2);

    &:hover {
      background: rgba(239, 68, 68, 0.2);
      color: #fca5a5;
    }
  }
`;

const UrlCapsule = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 34px;
  padding: 0 12px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-full);
  color: var(--text-secondary);
  font-size: 0.78rem;
  overflow: hidden;

  .lock-icon {
    color: #10b981;
    flex-shrink: 0;
  }

  .url-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 180px;
  }
`;

const IframeWrapper = styled.div`
  flex: 1;
  position: relative;
  background: #ffffff;
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const AppBrowser: React.FC<AppBrowserProps> = ({
  initialUrl,
  appName,
  handleClose,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isRotating, setIsRotating] = useState(false);

  const getDomain = (rawUrl: string) => {
    try {
      const parsed = new URL(rawUrl);
      return parsed.hostname;
    } catch {
      return rawUrl;
    }
  };

  const handleReload = () => {
    setIsRotating(true);
    if (iframeRef.current) {
      iframeRef.current.src = initialUrl;
    }
    setTimeout(() => setIsRotating(false), 800);
  };

  const handleOpenExternal = () => {
    window.open(initialUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Container>
      <HeaderBar>
        <DragHandle />
        <NavRow>
          <ActionBtn
            type="button"
            className="pressable"
            onClick={handleReload}
            title="새로고침"
          >
            <RotateCw
              size={15}
              style={{
                transform: isRotating ? 'rotate(360deg)' : 'none',
                transition: 'transform 0.8s ease',
              }}
            />
          </ActionBtn>

          <UrlCapsule>
            <Lock className="lock-icon" size={12} />
            <span className="url-text">
              {appName ? `${appName} (${getDomain(initialUrl)})` : getDomain(initialUrl)}
            </span>
          </UrlCapsule>

          <ActionBtn
            type="button"
            className="pressable"
            onClick={handleOpenExternal}
            title="새 창에서 열기"
          >
            <ExternalLink size={15} />
          </ActionBtn>

          <ActionBtn
            type="button"
            className="close-btn pressable"
            onClick={handleClose}
            title="닫기"
          >
            <X size={16} />
          </ActionBtn>
        </NavRow>
      </HeaderBar>

      <IframeWrapper>
        <StyledIframe ref={iframeRef} src={initialUrl} title={appName || 'App Browser'} />
      </IframeWrapper>
    </Container>
  );
};

export default AppBrowser;
