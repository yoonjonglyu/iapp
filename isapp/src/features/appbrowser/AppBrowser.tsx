import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #131212;
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

const UrlInput = styled.input`
  flex: 1;
  margin: 0 8px;
  padding: 4px;
`;

const IframeWrapper = styled.div`
  flex: 1;
  border-top: 1px solid #ddd;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export interface AppBrowserProps {
  handleClose?: () => void;
  initialUrl: string;
}

const AppBrowser: React.FC<AppBrowserProps> = ({ initialUrl,handleClose }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [url, setUrl] = useState(initialUrl);
  const [inputUrl, setInputUrl] = useState(initialUrl);

  const handleNavigate = (e: React.FormEvent) => {
    e.preventDefault();
    setUrl(inputUrl);
  };

  const handleReload = () => {
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }
  };

  return (
    <Container>
      <Toolbar onSubmit={handleNavigate}>
        <ToolbarButton type='button' onClick={handleClose} title='Close'>
          X
        </ToolbarButton>
        <UrlInput
          type='text'
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <ToolbarButton type='button' onClick={handleReload} title='Reload'>
          ⟳
        </ToolbarButton>
      </Toolbar>
      <IframeWrapper>
        <StyledIframe ref={iframeRef} src={url} title='App Browser' />
      </IframeWrapper>
    </Container>
  );
};

export default AppBrowser;
