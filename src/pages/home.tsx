import React, { PureComponent } from 'react';
import { getMultiDataAsyncAction } from '@/store/home/actionCreator';
import { connect } from 'react-redux';

class Home extends PureComponent<any, any> {
  componentDidMount() {
    this.props.getMultiDataAsync();
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
  recommends: state.home.recommends,
  banners: state.home.banners,
});

const mapDispatchToProps = (dispatch) => ({
  getMultiDataAsync() {
    dispatch(getMultiDataAsyncAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
