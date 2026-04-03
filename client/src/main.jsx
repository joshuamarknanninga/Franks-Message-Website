import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';
import { ReadingModeProvider } from './context/ReadingModeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReadingModeProvider>
        <App />
      </ReadingModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
