import React, { memo } from 'react';
import HotRadio from './c-cpns/hot-radio';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import RankList from './c-cpns/rank-list';
import SettleSinger from './c-cpns/settle-singer';
import TopBanners from './c-cpns/top-banner';
import UserLogin from './c-cpns/user-login';
import { Content, RecommendLeft, RecommendRight, RecommendWrapper } from './style';

const Recommend = memo((props: any) => {
  return (
    <RecommendWrapper>
      <TopBanners />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RankList />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <HotRadio />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});

export default Recommend;

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: async () => {
//     await dispatch(getTopBannersAction());
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
