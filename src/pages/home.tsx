import React, { PureComponent } from 'react';
import { changeBannersAction, changeRecommendsAction } from '@/store/actionCreator';
import { connect } from 'react-redux';
import axios from 'axios';

axios.defaults.baseURL = 'http://123.207.32.32:8000';

class Home extends PureComponent<any, any> {
  componentDidMount() {
    axios.get('/home/multidata').then((res) => {
      const data = res.data.data;
      this.props.changeRecommends(data.recommend.list);
      this.props.changeBanners(data.banner.list);
    });
  }
  render() {
    return (
      <div>
        <h2>Recommends</h2>
        <ul>
          {this.props.recommends.map((recommend) => {
            return <li key={recommend.acm}>{recommend.title}</li>;
          })}
        </ul>
        <h2>Banners</h2>
        <ul>
          {this.props.banners.map((banner) => {
            return <li key={banner.acm}>{banner.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recommends: state.recommends,
  banners: state.banners,
});

const mapDispatchToProps = (dispatch) => ({
  changeRecommends(recommends) {
    dispatch(changeRecommendsAction(recommends));
  },
  changeBanners(banners) {
    dispatch(changeBannersAction(banners));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
