import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import StoreProvider from './store/StoreProvider.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
);
