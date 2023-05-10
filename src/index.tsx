import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './router';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}