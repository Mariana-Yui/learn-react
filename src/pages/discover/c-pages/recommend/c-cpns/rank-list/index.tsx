import ThemeHeaderRCM from '@/components/theme-header-rcm';
import TopRanking from '@/components/top-ranking';
import { RootState } from '@/store/reducer';
import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { getTopListAction } from '../../store/actionCreator';
import { RankingWrapper } from './syle';

const RankList = memo(() => {
  const state = useSelector(
    (state: RootState) => ({
      topUpList: state.getIn(['recommend', 'topUpList']) as any,
      topNewList: state.getIn(['recommend', 'topNewList']) as any,
      topOriginList: state.getIn(['recommend', 'topOriginList']) as any,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单" moreLink="/discover/ranking" />
      <div className="tops">
        <TopRanking info={state.topNewList} />
        <TopRanking info={state.topOriginList} />
        <TopRanking info={state.topUpList} />
      </div>
    </RankingWrapper>
  );
});

export default RankList;
