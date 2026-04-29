import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import './index.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <ColorSchemeScript />
      <MantineProvider defaultColorScheme="dark">
        <Notifications />
        <App />   
      </MantineProvider>
  </React.StrictMode>
);

