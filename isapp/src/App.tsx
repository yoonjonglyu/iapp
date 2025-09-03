import AppList from './features/applist/AppList';
import Header from './components/Header';

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
    </>
  );
}

export default App;
