import { combineReducers } from 'redux-immutable';
import { reducer as discoverRecommendReducer } from '@/pages/discover/c-pages/recommend/store';
import { RecommendState } from '@/pages/discover/c-pages/recommend/store/reducer';
import Immutable from 'immutable';

const reducer = combineReducers({
  recommend: discoverRecommendReducer,
});

export default reducer;

export type RootState = Immutable.Map<string, RecommendState>;
