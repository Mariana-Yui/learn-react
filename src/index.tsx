import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.less';
import 'moment/dist/locale/zh-cn';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
