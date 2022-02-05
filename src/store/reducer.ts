import { ADD_NUM, SUB_NUM, INCREMENT, DECREMENT } from './constants';
const initState = {
  counter: 0,
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
    default:
      return state;
  }
};

export default reducer;
