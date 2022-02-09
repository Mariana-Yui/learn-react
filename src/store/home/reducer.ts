import { CHANGE_RECOMMENDS, CHANGE_BANNERS } from './constants';
const initState = {
  recommends: [],
  banners: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    default:
      return state;
  }
};

export default reducer;
