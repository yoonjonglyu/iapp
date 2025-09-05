import React, { useRef, useState } from "react";

interface AppBrowserProps {
  initialUrl: string;
}

const AppBrowser: React.FC<AppBrowserProps> = ({ initialUrl }) => {
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

  const handleBack = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.history.back();
    }
  };

  const handleForward = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.history.forward();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <form
        onSubmit={handleNavigate}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "8px",
          background: "#f5f5f5",
        }}
      >
        <button type="button" onClick={handleBack} title="Back">
          ◀
        </button>
        <button type="button" onClick={handleForward} title="Forward">
          ▶
        </button>
        <button type="button" onClick={handleReload} title="Reload">
          ⟳
        </button>
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          style={{ flex: 1, margin: "0 8px", padding: "4px" }}
        />
        <button type="submit">Go</button>
      </form>
      <div style={{ flex: 1, borderTop: "1px solid #ddd" }}>
        <iframe
          ref={iframeRef}
          src={url}
          title="App Browser"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </div>
  );
};

export default AppBrowser;