import { reducer as counterReducer } from './counter';
import { reducer as homeReducer } from './home';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
});

export default reducer;
