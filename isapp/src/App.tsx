import AppList from './features/applist/AppList';
import Header from './components/Header';
import AppBrowser from './features/appbrowser/AppBrowser';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <AppList
      apps={[
        { name: 'App One', icon: 'https://via.placeholder.com/50' },
        { name: 'App Two', icon: 'https://via.placeholder.com/50' },
        { name: 'App Three', icon: 'https://via.placeholder.com/50' },
        { name: 'App Four', icon: 'https://via.placeholder.com/50' },
        { name: 'App One', icon: 'https://via.placeholder.com/50' },
        { name: 'App Two', icon: 'https://via.placeholder.com/50' },
        { name: 'App Three', icon: 'https://via.placeholder.com/50' },
        { name: 'App Four', icon: 'https://via.placeholder.com/50' },
        { name: 'App One', icon: 'https://via.placeholder.com/50' },
        { name: 'App Two', icon: 'https://via.placeholder.com/50' },
        { name: 'App Three', icon: 'https://via.placeholder.com/50' },
        { name: 'App Four', icon: 'https://via.placeholder.com/50' },
        { name: 'App Four', icon: 'https://via.placeholder.com/50' },
      ]}
      />
      <AppBrowser initialUrl="https://www.google.com/webhp?igu=1" />
    </>
  );
}

export default App;
