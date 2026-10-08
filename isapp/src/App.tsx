import { useState } from 'react';
import Header from './components/Header';
import Kanbans from './features/kanbans/Kanbans';
import AppList from './features/applist/AppList';
import AppBrowser from './features/appbrowser/AppBrowser';
import BottomNav, { type NavTabType } from './features/bottomnavigation/BottomNav';
import AppWrapper from './miniapps/AppWrapper';
import AiHubView from './features/views/AiHubView';
import MiniAppsView from './features/views/MiniAppsView';
import SettingsView from './features/views/SettingsView';

import useRecent from './hooks/useRecent';
import apps from './apps';

import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState<NavTabType>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [miniApp, setMiniApp] = useState<null | string>(null);
  const [inappMode, setInappMode] = useState(false);
  const [inappUrl, setInappUrl] = useState('https://yoonjonglyu.github.io/memo/');
  const [currentAppName, setCurrentAppName] = useState('');

  const { addRecentApp } = useRecent();

  const handleAppClick = (app: { name: string; icon: string; uri: string; type?: string; category?: string }) => {
    // 내부 미니앱인 경우
    if (app.type === 'internal' || app.uri === 'multicalculator' || app.uri === 'financecalculator') {
      setMiniApp(app.uri);
      addRecentApp({
        name: app.name,
        icon: app.icon,
        uri: app.uri,
      });
      return;
    }

    // AI 도구 또는 외부 직접 링크인 경우 새 탭으로 바로 열기 (최근 사용 앱에는 등록하지 않음)
    if (app.type === 'external_link' || app.category === 'ai') {
      window.open(app.uri, '_blank', 'noopener,noreferrer');
      return;
    }

    // 일반 연동 웹앱인 경우 인앱 브라우저로 실행
    openAppByInAppBrowser(app.uri, app.name);
    addRecentApp({
      name: app.name,
      icon: app.icon,
      uri: app.uri,
    });
  };

  const openAppByInAppBrowser = (url: string, name: string = '') => {
    setInappUrl(url);
    setCurrentAppName(name);
    setInappMode(true);
  };

  const closeInAppBrowser = () => setInappMode(false);

  const aiApps = apps.filter((app) => app.category === 'ai');

  return (
    <>
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Main Tab Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {currentTab === 'home' && (
          <>
            {!searchQuery && (
              <Kanbans
                handleAppClick={handleAppClick}
                handleMiniAppClick={setMiniApp}
              />
            )}
            <AppList
              apps={apps}
              handleAppClick={handleAppClick}
              searchQuery={searchQuery}
            />
          </>
        )}

        {currentTab === 'miniapps' && (
          <MiniAppsView onOpenMiniApp={setMiniApp} />
        )}

        {currentTab === 'ai' && (
          <AiHubView onOpenApp={handleAppClick} aiApps={aiApps} />
        )}

        {currentTab === 'settings' && <SettingsView />}
      </main>

      {/* In-App Browser Window */}
      {inappMode ? (
        <AppBrowser
          initialUrl={inappUrl}
          appName={currentAppName}
          handleClose={closeInAppBrowser}
        />
      ) : null}

      {/* Mini App Modal */}
      {miniApp ? (
        <AppWrapper app={miniApp} closeApp={() => setMiniApp(null)} />
      ) : null}

      {/* Bottom Floating Glass Dock */}
      <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
    </>
  );
}

export default App;
