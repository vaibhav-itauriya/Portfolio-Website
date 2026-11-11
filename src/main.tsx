import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LensProvider } from './lens.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LensProvider>
      <App />
    </LensProvider>
  </StrictMode>
);
