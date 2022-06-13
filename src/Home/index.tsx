import React, { PureComponent } from 'react';
import { HomeWrapper, TitleWrapper } from './style';
import style from './style.less';

export class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <h2 className={style.hd}>我是Header信息</h2>
        <TitleWrapper>我也是Header信息</TitleWrapper>
        <div className="banner">
          <span>轮播图1</span>
          <span className="active">轮播图2</span>
          <span>轮播图3</span>
          <span>轮播图4</span>
        </div>
      </HomeWrapper>
    );
  }
}

export default Home;
