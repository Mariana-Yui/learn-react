import { RootState } from '@/store/reducer';
import { getScreenFps, scrollTo } from '@/utils/ui-helper';
import Item from 'antd/lib/list/Item';
import classNames from 'classnames';
import React, { memo, MutableRefObject, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { PannelWrapper } from './style';

const LyricPanel = memo(() => {
  const [perFrameTime, setPerFrameTime] = useState(0);
  const { currentLyrics, currentLyricIndex } = useSelector((state: RootState) => ({
    currentLyrics: state.getIn(['player', 'currentLyrics']) as Array<{ time: number; content: string }>,
    currentLyricIndex: state.getIn(['player', 'currentLyricIndex']) as number,
  }));

  useEffect(() => {
    getScreenFps().then((fps) => {
      setPerFrameTime(Math.floor(1000 / fps));
    });
  }, []);
  const panelRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    if (currentLyricIndex >= 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300, perFrameTime);
  }, [currentLyricIndex, perFrameTime]);

  return (
    <PannelWrapper ref={panelRef}>
      <div className="lrc-content">
        {currentLyrics.map((lyric, index) => {
          return (
            <div key={lyric.time} className={classNames('lrc-item', { active: index === currentLyricIndex })}>
              {lyric.content}
            </div>
          );
        })}
      </div>
    </PannelWrapper>
  );
});

export default LyricPanel;
