import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { DataProvider } from 'context/DataContext';
import { ViewProvider } from 'context/ViewContext';
import { ThemeProvider } from 'context/ThemeContext';
import AuthDataProvider from 'context/AuthContext';
import App from './App';
import theme from './themes/theme';
import { GlobalResetStyle } from 'styles/reset';
import { GlobalFonts } from 'styles/fonts';

import { GlobalClasses } from 'styles/globalClasses';

ReactDOM.render(
  <React.StrictMode>
    <AuthDataProvider>
      <DataProvider>
        <ViewProvider>
          <ThemeProvider theme={theme}>
            <GlobalResetStyle />
            <GlobalFonts />
            <GlobalClasses />
            <App />
          </ThemeProvider>
        </ViewProvider>
      </DataProvider>
    </AuthDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
