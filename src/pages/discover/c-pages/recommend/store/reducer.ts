import Immutable, { Map } from 'immutable';
import { TypeReducerAction } from '@/types/store';
import * as actionTypes from './contants';

const defaultRecommendState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  topNewList: {},
  topOriginList: {},
  topUpList: {},
  settleSingers: [],
  hotRadios: [],
});

const reducer = (state = defaultRecommendState, action: TypeReducerAction) => {
  switch (action.type) {
    case actionTypes.CHANGE_RECOMMEND_TOP_BANNER:
      return state.set('topBanners', action.topBanners);
    case actionTypes.CHANGE_RECOMEND_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends);
    case actionTypes.CHANGE_RECOMMEND_NEW_ALBUM:
      return state.set('newAlbums', action.newAlbums);
    case actionTypes.CHANGE_NEW_LIST:
      return state.set('topNewList', action.topNewList);
    case actionTypes.CHANGE_ORIGIN_LIST:
      return state.set('topOriginList', action.topOriginList);
    case actionTypes.CHANGE_UP_LIST:
      return state.set('topUpList', action.topUpList);
    case actionTypes.CHANGE_SETTLE_SINGERS:
      return state.set('settleSingers', action.settleSingers);
    case actionTypes.CHANGE_HOT_RADIO:
      return state.set('hotRadios', action.hotRadios);
    default:
      return state;
  }
};

export default reducer;

export type RecommendState = Immutable.Map<string, any[] | Record<string, any>>;
