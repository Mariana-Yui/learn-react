import React, { memo } from 'react';
import LyricPanel from './lyric-panel';
import PlayHeader from './play-header';
import PlayList from './play-list';
import { PanelWrapper } from './style';

const AppPlayerPanel = memo(() => {
  return (
    <PanelWrapper>
      <PlayHeader />
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt="" />
        <PlayList />
        <LyricPanel />
      </div>
    </PanelWrapper>
  );
});

export default AppPlayerPanel;
