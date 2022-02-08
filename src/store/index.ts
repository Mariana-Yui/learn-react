import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { logger } from '@/middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState */ composeEnhancers(applyMiddleware(thunkMiddleware, logger)));

export default store;

/**
 * redux的中间件范式 redux-thunk也是↓
 * (store) => (next) => (action) => {const result = next(action); return result;}
 * next代表的是store.dispatch
 * 中间件必须要返回dispatch作为chaining
 * 参考文章:https://segmentfault.com/a/1190000037437347
 * 写的针不戳
 */
