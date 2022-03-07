import { RootState } from '@/store/reducer';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import React, { memo, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopBannersAction } from '../../store/actionCreator';
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style';

const TopBanners = memo(() => {
  const state = useSelector(
    (state: RootState) => ({
      topBanners: state.getIn(['recommend', 'topBanners']) as any[],
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, []);

  const bannerRef = useRef() as MutableRefObject<CarouselRef>;
  const [currrentIndex, setCurrentIndex] = useState(0);

  const bgImage = `${state.topBanners[currrentIndex]?.imageUrl}?imageView&blur=40x20`;
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {state.topBanners.map((banner, index) => {
              return (
                <div className="banner-item" key={banner.imageUrl}>
                  <img className="image" src={banner.imageUrl} alt={banner.typeTitle} />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button className="btn left" onClick={(e) => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={(e) => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default TopBanners;
