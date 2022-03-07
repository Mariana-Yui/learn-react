import { getCount, getSizedImage } from '@/utils/format';
import React, { memo } from 'react';
import { ThemeCoverWrapper } from './style';

const ThemeCover = memo(
  (props: {
    info: {
      picUrl: string;
      coverImgUrl: string;
      playCount: number;
      copywriter: string;
      creator: { nickname: string };
      name: string;
    };
    right: number;
  }) => {
    const { info, right } = props;
    return (
      <ThemeCoverWrapper right={right}>
        <div className="cover-top">
          <img src={getSizedImage(info.picUrl || info.coverImgUrl, 150)} alt="" />
          <div className="cover sprite_cover">
            <div className="info sprite_cover">
              <span>
                <i className="sprite_icon erji"></i>
                {getCount(info.playCount)}
              </span>
              <i className="sprite_icon play"></i>
            </div>
          </div>
        </div>
        <div className="cover-bottom text-nowrap">{info.name}</div>
        <div className="cover-source">by {info.copywriter || '热门推荐'}</div>
      </ThemeCoverWrapper>
    );
  },
);

export default ThemeCover;
