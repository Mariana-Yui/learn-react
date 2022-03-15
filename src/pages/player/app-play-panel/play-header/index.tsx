import { RootState } from '@/store/reducer';
import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';

const PlayHeader = memo(() => {
  const { playList, currentSong } = useSelector(
    (state: RootState) => ({
      playList: state.getIn(['player', 'playList']),
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual,
  );

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
          </button>
          <button>
            <i className="sprite_playlist icon remove"></i>
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>{currentSong.name}</HeaderRight>
    </HeaderWrapper>
  );
});

export default PlayHeader;
