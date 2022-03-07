import { getSizedImage } from '@/utils/format';
import React, { memo } from 'react';
import { AlbumWrapper } from './style';

const AlbumCover = memo(
  (props: {
    info: { picUrl: string; name: string; artist: { name: string }; id: number };
    size?: string;
    width?: string;
    bgp?: string;
  }) => {
    const { info, size = '100px', width = '118px', bgp = '-570px' } = props;
    return (
      <AlbumWrapper size={size} width={width} bgp={bgp}>
        <div className="album-image">
          <img src={getSizedImage(info.picUrl, 150)} alt="" />
          <a href={`https://music.163.com/#/album?id=${info.id}`} className="cover sprite_covor">
            {info.name}
          </a>
        </div>
        <div className="album-info">
          <div className="name">{info.name}</div>
          <div className="artist">{info.artist.name}</div>
        </div>
      </AlbumWrapper>
    );
  },
);

export default AlbumCover;
