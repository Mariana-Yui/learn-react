import AlbumCover from '@/components/album-cover';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import { RootState } from '@/store/reducer';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import React, { memo, MutableRefObject, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getNewAlbumAction } from '../../store/actionCreator';
import { AlbumWrapper } from './style';

const NewAlbum = memo(() => {
  const state = useSelector(
    (state: RootState) => ({
      newAlbums: state.getIn(['recommend', 'newAlbums']) as any[],
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const carouselRef = useRef() as MutableRefObject<CarouselRef>;

  useEffect(() => {
    dispatch(getNewAlbumAction());
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <div className="arrow arrow-left sprite_02" onClick={(e) => carouselRef.current.prev()}></div>
        <div className="album">
          <Carousel effect="scrollx" ref={carouselRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {state.newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                    return <AlbumCover key={album.id} info={album} />;
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02" onClick={(e) => carouselRef.current.next()}></div>
      </div>
    </AlbumWrapper>
  );
});

export default NewAlbum;
