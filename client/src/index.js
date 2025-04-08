// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18+
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import reducers from './reducers';  // Default import from reducers file
import App from './App';  // Default import from App
import './index.css';

// Set up Redux store
const store = configureStore({
  reducer: reducers,
});

// Create a Material-UI theme (you can customize it as needed)
const theme = createTheme();

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the app wrapped in ThemeProvider and Redux Provider
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
