import { useState } from 'react';

import Header from './components/Header';
import Kanbans from './features/kanbans/Kanbans';
import AppList from './features/applist/AppList';
import AppBrowser from './features/appbrowser/AppBrowser';
import BottomNav from './features/bottomnavigation/BottomNav';
import AppWrapper from './miniapps/AppWrapper';

import useRecent from './hooks/useRecent';

import apps from './apps';

import './App.css';

function App() {
  const [MiniApp, setMiniApp] = useState<null | string>(null);
  const [inappMode, setInappMode] = useState(false);
  const [inappUrl, setInappUrl] = useState(
    'https://www.google.com/webhp?igu=1',
  );
  const { addRecentApp } = useRecent();

  const handleAppClick = (app: { name: string; icon: string; uri: string }) => {
    openAppByInAppBrowser(app.uri);
    addRecentApp(app);
  };
  const openAppByInAppBrowser = (url: string) => {
    setInappUrl(url);
    toggleInAppBrowser();
  };
  const toggleInAppBrowser = () => setInappMode(!inappMode);

  return (
    <>
      <Header />
      <Kanbans
        handleAppClick={handleAppClick}
        handleMiniAppClick={setMiniApp}
      />
      <AppList apps={apps} handleAppClick={handleAppClick} />
      {inappMode ? (
        <AppBrowser initialUrl={inappUrl} handleClose={toggleInAppBrowser} />
      ) : null}
      {MiniApp ? (
        <AppWrapper app={MiniApp} closeApp={() => setMiniApp(null)} />
      ) : null}
      <BottomNav />
    </>
  );
}

export default App;
