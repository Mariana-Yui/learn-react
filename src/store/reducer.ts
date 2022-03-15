import { combineReducers } from 'redux-immutable';
import { reducer as discoverRecommendReducer } from '@/pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '@/pages/player/store';
import { RecommendState } from '@/pages/discover/c-pages/recommend/store/reducer';
import Immutable from 'immutable';
import { PlayerState } from '@/pages/player/store/reducer';

const reducer = combineReducers({
  recommend: discoverRecommendReducer,
  player: playerReducer,
});

export default reducer;

export type RootState = Immutable.Map<string, RecommendState | PlayerState>;
