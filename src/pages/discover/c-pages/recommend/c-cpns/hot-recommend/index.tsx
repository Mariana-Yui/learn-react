import ThemeCover from '@/components/theme-cover';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import { RootState } from '@/store/reducer';
import React, { memo, useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRecommendAction } from '../../store/actionCreator';
import { RecommendWrapper } from './style';

const HotRecommend = memo(() => {
  const state = useSelector(
    (state: RootState) => ({
      recommends: state.getIn(['recommend', 'hotRecommends']) as any[],
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRecommendAction());
  }, [dispatch]);

  const keywordClick = useCallback((keyword) => {
    navigate('/discover/songs', { replace: false, state: keyword });
  }, []);
  return (
    <RecommendWrapper>
      <ThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
        keywordClick={keywordClick}
      />
      <div className="recommend-list">
        {state.recommends.slice(0, 8).map((item, index) => {
          return <ThemeCover info={item} key={item.id} right={0} />;
        })}
      </div>
    </RecommendWrapper>
  );
});

export default HotRecommend;
