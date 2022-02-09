import axios from 'axios';
import { CHANGE_BANNERS, CHANGE_RECOMMENDS } from './constants';

axios.defaults.baseURL = 'http://123.207.32.32:8000';

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends,
});

export const getMultiDataAsyncAction = () => async (dispatch, getState) => {
  const res = await axios.get('/home/multidata');
  const data = res.data.data;
  dispatch(changeRecommendsAction(data.recommend.list));
  dispatch(changeBannersAction(data.banner.list));
};
