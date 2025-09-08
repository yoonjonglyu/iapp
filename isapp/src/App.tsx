import { useState } from 'react';

import Header from './components/Header';
import Kanbans from './features/kanbans/Kanbans';
import AppList from './features/applist/AppList';
import AppBrowser from './features/appbrowser/AppBrowser';

import apps from './apps';

import './App.css';

function App() {
  const [inappMode, setInappMode] = useState(false);
  const [inappUrl, setInappUrl] = useState(
    'https://www.google.com/webhp?igu=1',
  );

  const handleToggleMode = () => {
    setInappMode(!inappMode);
  };
  const handleAppClick = (app: { name: string; icon: string; uri: string }) => {
    setInappUrl(app.uri);
    handleToggleMode();
  };

  return (
    <>
      <Header />
      <Kanbans />
      <AppList apps={apps} handleAppClick={handleAppClick} />
      {inappMode ? (
        <AppBrowser initialUrl={inappUrl} handleClose={handleToggleMode} />
      ) : null}
    </>
  );
}

export default App;
