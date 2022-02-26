import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.less';
import 'moment/dist/locale/zh-cn';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';

export const UserContext = createContext({ name: '', age: -1 });
export const ThemeContext = createContext('');

ReactDOM.render(
  <UserContext.Provider value={{ name: 'denis', age: 18 }}>
    <ThemeContext.Provider value={'tencent'}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContext.Provider>
  </UserContext.Provider>,
  document.getElementById('root'),
);
