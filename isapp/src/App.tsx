import React from 'react';
import AppList from './features/applist/AppList';
import './App.css';

function App() {
  return (
    <>
      <h1>superApp</h1>
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
