import { headerLinks } from '@/common/local-data';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';

const YuiAppHeader = memo(() => {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01"></a>
          <div className="select-list">
            {headerLinks.map((link, index) => {
              return (
                <div className="select-item" key={link.title}>
                  {showSelectItem(link, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default YuiAppHeader;
