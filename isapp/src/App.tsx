import { useState } from 'react';

import Header from './components/Header';
import Kanbans from './features/kanbans/Kanbans';
import AppList from './features/applist/AppList';
import AppBrowser from './features/appbrowser/AppBrowser';

import useRecent from './hooks/useRecent';

import apps from './apps';

import './App.css';

function App() {
  const [inappMode, setInappMode] = useState(false);
  const [inappUrl, setInappUrl] = useState(
    'https://www.google.com/webhp?igu=1',
  );
  const { addRecentApp } = useRecent();

  const handleToggleMode = () => {
    setInappMode(!inappMode);
  };
  const handleAppClick = (app: { name: string; icon: string; uri: string }) => {
    setInappUrl(app.uri);
    handleToggleMode();
    addRecentApp(app);
  };

  return (
    <>
      <Header />
      <Kanbans handleAppClick={handleAppClick} />
      <AppList apps={apps} handleAppClick={handleAppClick} />
      {inappMode ? (
        <AppBrowser initialUrl={inappUrl} handleClose={handleToggleMode} />
      ) : null}
    </>
  );
}

export default App;
