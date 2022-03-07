import { applyMiddleware, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from '@/middleware/logger';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, logger)));
// dispatch will return last middleware return value

export default store;
