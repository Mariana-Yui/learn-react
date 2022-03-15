import { getLyric, getSimiSong, getSongDetail } from '@/service/player';
import { GetState, TypePlaySequence } from '@/types/store';
import { parseLyric } from '@/utils/lrc-parse';
import * as actionType from './contants';

export const changeCurrentSongIndexAction = (index: number) => ({
  type: actionType.CHANGE_CURRENT_SONG_INDEX,
  index,
});

export const changeCurrentSongAction = (song) => ({
  type: actionType.CHANGE_CURRENT_SONG,
  song,
});

export const changePlayListAction = (playList) => ({
  type: actionType.CHANGE_PLAYLIST,
  playList,
});

export const changeLyricsAction = (currentLyrics) => ({
  type: actionType.CHANGE_CURRENT_LYRIC,
  currentLyrics,
});

export const changeSimiSongsAction = (simiSongs) => ({
  type: actionType.CHANGE_SIMI_SONGS,
  simiSongs,
});

export const changeCurrentLyricIndexAction = (index: number) => ({
  type: actionType.CHANGE_CURRENT_LYRIC_INDEX,
  index,
});

export const changePlaySequenceAction = (currentSequence) => {
  if (currentSequence === 3) currentSequence = TypePlaySequence.order;
  return {
    type: actionType.CHANGE_PLAY_SEQUENCE,
    sequence: currentSequence,
  };
};

export // 手动切换当前song, 播放完毕切换song
const changePlaySongAction = (tag: number) => {
  return async (dispatch, getState: GetState) => {
    // 1. 获取当前index, 播放方式, 播放列表
    const state = getState();
    let currentSongIndex = state.getIn(['player', 'currentSongIndex']) as number;
    const playSequence = state.getIn(['player', 'playSequence']) as TypePlaySequence;
    const playList = state.getIn(['player', 'playList']) as any[];

    // 2. 判断播放方式
    switch (playSequence) {
      case TypePlaySequence.random:
        currentSongIndex = Math.floor(Math.random() * playList.length - 1);
        break;
      default:
        currentSongIndex += tag;
        if (currentSongIndex === playList.length) currentSongIndex = 0;
        if (currentSongIndex === -1) currentSongIndex = playList.length - 1;
    }

    // 3. 处理修改数据
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(changeCurrentSongAction(currentSong));
  };
};

export const getSongDetailAction = (ids: number) => {
  return async (dispatch, getState: GetState) => {
    // 获取当前播放列表
    const playList = getState().getIn(['player', 'playList']) as any[];
    const songIndex = playList.findIndex((song) => song.id === ids);
    if (songIndex !== -1) {
      // 找到数据直接切换当前index和当前song
      const currentSong = playList[songIndex];
      dispatch(changeCurrentSongIndexAction(songIndex));
      dispatch(changeCurrentSongAction(currentSong));
    } else {
      const res = await getSongDetail(ids);
      const song = res?.songs?.[0];
      if (!song) return;
      // 1. 添加到playList中
      const newPlayList = [...playList, song];
      dispatch(changePlayListAction(newPlayList));
      // 2. 改变当前index和song
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
      dispatch(changeCurrentSongAction(song));
    }

    // 获取当前歌词并解析
    const res = await getLyric(ids);
    const rawLyric = res.lrc.lyric;
    const lyric = parseLyric(rawLyric);
    dispatch(changeLyricsAction(lyric));
  };
};

export const getSimiPlayListAction = () => {
  return async (dispatch, getState: GetState) => {
    const id = (getState().getIn(['player', 'currentSong']) as any).id;
    if (!id) return;

    const res = await getSimiSong(id);
    dispatch(changeSimiSongsAction(res.songs));
  };
};

export const getSimiSongAction = () => {
  return async (dispatch, getState: GetState) => {
    const id = (getState().getIn(['player', 'currentSong']) as any).id;
    if (!id) return;

    const res = await getSimiSong(id);
    dispatch(changeSimiSongsAction(res.songs));
  };
};
