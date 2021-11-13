import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../src/features/cart';
import usersReducer from '../src/features/user';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: usersReducer,
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(26, 100%, 55%)',
    },
    secondary: {
      main: 'hsl(25, 100%, 94%)',
    },
  },
  typography: {
    fontFamily: "'Kumbh Sans', sans-serif",
    htmlFontSize: 16,
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
