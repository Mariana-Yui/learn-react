import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.less';
import 'moment/dist/locale/zh-cn';
import App from '@/App';
import { storeContext } from '@/utils/context';
import store from '@/store';

ReactDOM.render(
  <storeContext.Provider value={store}>
    <App />
  </storeContext.Provider>,
  document.getElementById('root'),
);
