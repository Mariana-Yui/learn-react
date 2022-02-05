import { ADD_NUM, SUB_NUM, INCREMENT, DECREMENT } from './constants';

export const addNumAction = (num) => ({
  type: ADD_NUM,
  num,
});

export const subNumAction = (num) => ({
  type: SUB_NUM,
  num,
});

export const incrementAction = () => ({
  type: INCREMENT,
});

export const decrementAction = () => ({
  type: DECREMENT,
});
