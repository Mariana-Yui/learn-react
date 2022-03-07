import {
  getArtistList,
  getHotRadio,
  getHotRecommend,
  getNewAlbum,
  getTopBanners,
  getTopList,
} from '@/service/recommend';
import * as actionType from './contants';

export const changeTopBannersAction = (res) => ({
  type: actionType.CHANGE_RECOMMEND_TOP_BANNER,
  topBanners: res.banners,
});

export const getTopBannersAction = () => {
  return async (dispatch) => {
    const data = await getTopBanners();
    dispatch(changeTopBannersAction(data));
  };
};

export const changeHotRecommendAction = (res) => ({
  type: actionType.CHANGE_RECOMEND_HOT_RECOMMEND,
  hotRecommends: res.result,
});

export const getRecommendAction = () => {
  return async (dispatch) => {
    const data = await getHotRecommend();
    dispatch(changeHotRecommendAction(data));
  };
};

export const changeNewAlbumAction = (res) => ({
  type: actionType.CHANGE_RECOMMEND_NEW_ALBUM,
  newAlbums: res.weekData,
});

export const getNewAlbumAction = () => {
  return async (dispatch) => {
    const data = await getNewAlbum();
    dispatch(changeNewAlbumAction(data));
  };
};

export const changeNewListAction = (res) => ({
  type: actionType.CHANGE_NEW_LIST,
  topNewList: res.playlist,
});

export const changeOriginListAction = (res) => ({
  type: actionType.CHANGE_ORIGIN_LIST,
  topOriginList: res.playlist,
});

export const changeUpListAction = (res) => ({
  type: actionType.CHANGE_UP_LIST,
  topUpList: res.playlist,
});

export const getTopListAction = (index: number) => {
  return async (dispatch) => {
    const data = await getTopList(index);
    switch (index) {
      case 0:
        dispatch(changeNewListAction(data));
        break;
      case 2:
        dispatch(changeOriginListAction(data));
        break;
      case 3:
        dispatch(changeUpListAction(data));
        break;
      default:
        console.log('其他数据处理');
    }
  };
};

export const changeSettleSingerAction = (res) => ({
  type: actionType.CHANGE_SETTLE_SINGERS,
  settleSingers: res.artists,
});

export const getSettleSingerAction = () => {
  return async (dispatch) => {
    const data = await getArtistList(5, 1, 7);
    dispatch(changeSettleSingerAction(data));
  };
};

export const changeHotRadioAction = (res) => ({
  type: actionType.CHANGE_HOT_RADIO,
  hotRadios: res.djRadios,
});

export const getHotRadioAction = () => {
  return async (dispatch) => {
    const data = await getHotRadio(2001, 5);
    dispatch(changeHotRadioAction(data));
  };
};
