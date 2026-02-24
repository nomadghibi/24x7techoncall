import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { installToastAlerts } from './utils/installToastAlerts';
import './index.css';

try {
  installToastAlerts();
} catch (error) {
  console.error('Failed to install custom toast alerts', error);
}

if (typeof window !== 'undefined' && !window.__bctGlobalErrorHandlersInstalled) {
  window.__bctGlobalErrorHandlersInstalled = true;
  let lastRuntimeMessage = '';
  let lastRuntimeMessageAt = 0;

  const notifyRuntimeIssue = (message) => {
    const fallbackMessage = 'An unexpected issue occurred. Please refresh and try again.';
    const text = typeof message === 'string' && message.trim() ? message : fallbackMessage;
    const now = Date.now();
    if (text === lastRuntimeMessage && now - lastRuntimeMessageAt < 4000) {
      return;
    }
    lastRuntimeMessage = text;
    lastRuntimeMessageAt = now;
    if (typeof window.alert === 'function') {
      window.alert(text);
    }
  };

  window.addEventListener('error', (event) => {
    const message = event?.error?.message || event?.message;
    notifyRuntimeIssue(message);
  });

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event?.reason;
    const message = typeof reason === 'string' ? reason : reason?.message;
    notifyRuntimeIssue(message);
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Unable to find root element '#root' for app bootstrap.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
