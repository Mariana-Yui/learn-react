import { RootState } from '@/store/reducer';
import { formatMinuteSecond } from '@/utils/format';
import classNames from 'classnames';
import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { PlayListWrapper } from './style';

const PlayList = memo(() => {
  const { playList, currentSongIndex } = useSelector(
    (state: RootState) => ({
      playList: state.getIn(['player', 'playList']) as any[],
      currentSongIndex: state.getIn(['player', 'currentSongIndex']) as number,
    }),
    shallowEqual,
  );

  return (
    <PlayListWrapper>
      {playList.map((item, index) => {
        return (
          <div key={item.id} className={classNames('play-item', { active: index === currentSongIndex })}>
            <div className="left">{item.name}</div>
            <div className="right">
              <span className="singer">{item.ar[0].name}</span>
              <span className="duration">{formatMinuteSecond(item.dt)}</span>
              <span className="sprite_playlist link"></span>
            </div>
          </div>
        );
      })}
    </PlayListWrapper>
  );
});

export default PlayList;
