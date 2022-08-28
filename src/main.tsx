import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactLocation, Router } from '@tanstack/react-location';
import routes from './routes';
import App from './App';

import 'antd/dist/antd.less';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';
const location = new ReactLocation();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router location={location} routes={routes}>
      <App />
      <ReactLocationDevtools />
    </Router>
  </React.StrictMode>
);
