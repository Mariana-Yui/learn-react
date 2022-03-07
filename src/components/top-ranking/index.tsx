import { getSizedImage } from '@/utils/format';
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { TopRankingWrapper } from './style';

const TopRanking = memo(
  (props: {
    info: { id: number; coverImgUrl: string; name: string; tracks?: Array<{ id: number; name: string }> };
  }) => {
    const { info } = props;
    const { tracks = [] } = info;
    return (
      <TopRankingWrapper>
        <div className="header">
          <div className="image">
            <img src={getSizedImage(info.coverImgUrl)} alt="" />
            <a href="ranking" className="image_cover"></a>
          </div>
          <div className="info">
            <NavLink to="/discover/ranking" state={{ id: info.id }}>
              {info.name}
            </NavLink>
            <div>
              <button className="btn sprite_02 play"></button>
              <button className="btn sprite_02 favor"></button>
            </div>
          </div>
        </div>
        <div className="list">
          {tracks.slice(0, 10).map((track, index) => {
            return (
              <div className="list-item" key={track.id}>
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{track.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play"></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer">
          <a href="ranking">查看全部 &gt;</a>
        </div>
      </TopRankingWrapper>
    );
  },
);

export default TopRanking;
