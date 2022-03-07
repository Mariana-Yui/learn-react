import ThemeHeaderSmall from '@/components/theme-header-small';
import { RootState } from '@/store/reducer';
import { getSizedImage } from '@/utils/format';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSettleSingerAction } from '../../store/actionCreator';
import { SettleSingerWrapper } from './style';

const SettleSinger = memo(() => {
  const state = useSelector((state: RootState) => ({
    settleSingers: state.getIn(['recommend', 'settleSingers']) as any[],
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSettleSingerAction());
  }, [dispatch]);

  return (
    <SettleSingerWrapper>
      <ThemeHeaderSmall title="入住歌手" more="查看全部>" />
      <div className="singer-list">
        {state.settleSingers.map((singer, index) => {
          return (
            <a href="singer" key={singer.id} className="item">
              <img src={getSizedImage(singer.img1v1Url, 62)} alt="" />
              <div className="info text-nowrap">
                <div className="title text-nowrap">{singer.alias.join('') || singer.name}</div>
                <div className="name">{singer.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  );
});

export default SettleSinger;
