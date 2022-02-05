import { ADD_NUM, SUB_NUM, INCREMENT, DECREMENT, CHANGE_RECOMMENDS, CHANGE_BANNERS } from './constants';
const initState = {
  counter: 0,
  recommends: [],
  banners: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NUM:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUM:
      return { ...state, counter: state.counter - action.num };
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    default:
      return state;
  }
};

export default reducer;
