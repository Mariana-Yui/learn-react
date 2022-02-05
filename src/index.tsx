import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.less';
import 'moment/dist/locale/zh-cn';
import App from '@/App';
import { Provider } from 'react-redux';
import store from '@/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
