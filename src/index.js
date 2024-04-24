import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import { createRoot } from 'react-dom/client';

import './services';

import { Provider } from 'react-redux';
import { ConfigProvider } from './contexts/ConfigContext';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import'./Index.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ConfigProvider>
      <App />
      <ToastContainer/>
    </ConfigProvider>
  </Provider>
);

reportWebVitals();
