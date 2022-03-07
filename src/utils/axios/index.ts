import axios from 'axios';
import { baseURL, timeout } from './config';

const instance = axios.create({
  baseURL,
  timeout,
});

instance.interceptors.request.use(
  (config) => {
    // TODO
    return config;
  },
  (err) => {
    return err;
  },
);

instance.interceptors.response.use(
  (response) => {
    // TODO
    return response.data;
  },
  (err) => {
    console.log('response 拦截 failure');
    if (err?.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误';
          break;
        case 401:
          err.message = '未授权访问';
          break;
        default:
          err.message = '其他错误信息';
      }
    }
    return err;
  },
);

export default instance;
