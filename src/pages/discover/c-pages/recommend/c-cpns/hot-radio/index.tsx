import ThemeHeaderSmall from '@/components/theme-header-small';
import { RootState } from '@/store/reducer';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotRadioAction } from '../../store/actionCreator';
import { HotRadioWrapper } from './style';

const HotRadio = memo(() => {
  const state = useSelector((state: RootState) => ({
    hotRadios: state.getIn(['recommend', 'hotRadios']) as any[],
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRadioAction());
  }, [dispatch]);
  return (
    <HotRadioWrapper>
      <ThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {state.hotRadios.slice(0, 5).map((radio, index) => {
          return (
            <div className="item" key={radio.id}>
              <a href="/abc" className="image">
                <img src={radio.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{radio.name}</div>
                <div className="position text-nowrap">{radio.rcmdtext}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotRadioWrapper>
  );
});

export default HotRadio;
