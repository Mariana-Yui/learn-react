import { RootState } from '@/store/reducer';
import { TypePlaySequence } from '@/types/store';
import { formatMinuteSecond, getPlayUrl } from '@/utils/format';
import { message, Slider } from 'antd';
import React, { memo, MutableRefObject, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import AppPlayerPanel from '../app-play-panel';
import {
  changeCurrentLyricIndexAction,
  changePlaySequenceAction,
  changePlaySongAction,
  getSongDetailAction,
} from '../store/actionCreator';
import { Control, Operator, PlayerBarWrapper, PlayInfo } from './style';
import './transition.less';

const AppPlayerBar = memo(() => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [barSlide, setBarSlide] = useState(false);

  const { currentSong, currentLyrics, currentLyricIndex, playList, playSequence } = useSelector(
    (state: RootState) => ({
      currentSong: state.getIn(['player', 'currentSong']) as any,
      currentLyrics: state.getIn(['player', 'currentLyrics']) as any[],
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']) as number,
      playList: state.getIn(['player', 'playList']) as any[],
      playSequence: state.getIn(['player', 'playSequence']) as TypePlaySequence,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;

  // 先往playList里加一首
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
    setDuration(currentSong.dt);
  }, [currentSong]);

  const play = useCallback(() => {
    if (audioRef.current.muted) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.3;
    }
    setIsPlaying(!isPlaying);
    // 如果无法播放置为false
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play().catch((err) => {
          setIsPlaying(false);
        });
  }, [isPlaying]);

  const timeUpdate = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    const currentTime = (e.target as HTMLAudioElement).currentTime;
    // 正常播放进度条, 非人为拖动
    if (!isChanging) {
      setCurrentTime(currentTime);
      duration > 0 && setProgress(((currentTime * 1000) / duration) * 100);
    }

    // 切换歌词
    const lrcLength = currentLyrics.length;
    let i;
    for (i = 0; i < lrcLength; i++) {
      const lrcTime = currentLyrics[i].time;
      if (currentTime * 1000 < lrcTime) {
        break;
      }
    }
    const finalIndex = i - 1;
    if (finalIndex >= 0 && finalIndex !== currentLyricIndex) {
      dispatch(changeCurrentLyricIndexAction(finalIndex));
      message.open({
        type: 'info',
        content: currentLyrics[finalIndex].content,
        key: 'lyric',
        duration: 0,
        className: 'lyric-message',
      });
    }
  };

  const timeEnded = () => {
    // 单曲循环或播放列表只有一首歌
    if (playSequence === TypePlaySequence.single || playList.length === 1) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changePlaySongAction(1));
    }
  };

  const sliderChange = useCallback(
    (value) => {
      setProgress(value);
      // currentTime为秒
      const time = ((value / 100.0) * duration) / 1000;
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      setIsChanging(true);
    },
    [duration],
  );

  const sliderAfterChange = useCallback(
    (value) => {
      setProgress(value);
      const time = ((value / 100.0) * duration) / 1000;
      audioRef.current.currentTime = time;
      setCurrentTime(time);
      setIsChanging(false);

      if (!isPlaying) {
        play();
      }
    },
    [duration, isPlaying, play],
  );

  const timeFormatter = useCallback(
    (value) => {
      return <span>{formatMinuteSecond(currentTime * 1000)}</span>;
    },
    [currentTime],
  );

  return (
    <CSSTransition in={barSlide} timeout={500} classNames="slide-bar">
      <PlayerBarWrapper
        className="sprite_playbar"
        onMouseEnter={(e) => setBarSlide(true)}
        onMouseLeave={(e) => {
          setBarSlide(false);
          setShowPanel(false);
        }}>
        <div className="lock"></div>
        <div className="content wrap-v2">
          <Control isPlaying={isPlaying}>
            <button className="sprite_player btn prev" onClick={(e) => dispatch(changePlaySongAction(-1))}></button>
            <button className="sprite_player btn play" onClick={(e) => play()}></button>
            <button className="sprite_player btn next" onClick={(e) => dispatch(changePlaySongAction(1))}></button>
          </Control>
          <PlayInfo>
            <div className="image">
              <NavLink to="/discover/player">
                <img
                  src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34"
                  alt=""
                />
              </NavLink>
            </div>
            <div className="info">
              {currentSong.name && (
                <div className="song">
                  <span className="song-name">{currentSong.name}</span>
                  <span className="singer-name">{currentSong.ar[0].name}</span>
                </div>
              )}
              <div className="progress">
                <Slider
                  step={0.1}
                  value={progress}
                  onChange={sliderChange}
                  onAfterChange={sliderAfterChange}
                  tipFormatter={timeFormatter}
                />
                <div className="time">
                  <span className="now-time">{formatMinuteSecond(currentTime * 1000)}</span>
                  <span className="divider">/</span>
                  <span className="total-time">{formatMinuteSecond(duration)}</span>
                </div>
              </div>
            </div>
          </PlayInfo>
          <Operator sequence={playSequence}>
            <div className="left">
              <button className="sprite_playbar btn favor"></button>
              <button className="sprite_playbar btn share"></button>
            </div>
            <div className="right sprite_playbar">
              <button className="sprite_playbar btn volume"></button>
              <button
                className="sprite_playbar btn loop"
                onClick={(e) => dispatch(changePlaySequenceAction(playSequence + 1))}></button>
              <button className="sprite_playbar btn playlist" onClick={(e) => setShowPanel(true)}>
                {playList.length}
              </button>
            </div>
          </Operator>
        </div>
        {/* chrome 66后禁止自动播放 需要加上muted */}
        <audio muted={true} ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded} />
        {showPanel && <AppPlayerPanel />}
      </PlayerBarWrapper>
    </CSSTransition>
  );
});

export default AppPlayerBar;
