import { TypePlaySequence, TypeReducerAction } from '@/types/store';
import Immutable, { Map } from 'immutable';
import * as actionType from './contants';

const defaultState = Map({
  playList: [],
  playSequence: TypePlaySequence.order, // 0顺序播放, 1随机播放, 2单曲循环
  currentSong: {},
  currentLyrics: [],
  simiPlayList: [],
  simiSongs: [],
  currentLyricIndex: 0,
});

const reducer = (state = defaultState, action: TypeReducerAction) => {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.song);
    case actionType.CHANGE_LYRIC:
      return state.set('currentLyrics', action.lyrics);
    case actionType.CHANGE_SIMI_PLAYLIST:
      return state.set('simiPlayList', action.simiPlayList);
    case actionType.CHANGE_SIMI_SONGS:
      return state.set('simiSongs', action.simiSongs);
    case actionType.CHANGE_PLAYLIST:
      return state.set('playList', action.playList);
    case actionType.CHANGE_PLAY_SEQUENCE:
      return state.set('playSequence', action.sequence);
    default:
      return state;
  }
};

export default reducer;

export type PlayerState = Immutable.Map<string, string[] | Record<string, any> | number>;
