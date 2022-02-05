import { ADD_NUM, SUB_NUM, INCREMENT, DECREMENT, CHANGE_BANNERS, CHANGE_RECOMMENDS } from './constants';

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

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends,
});
