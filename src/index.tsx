import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import 'moment/dist/locale/zh-cn';
import App from '@/App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
