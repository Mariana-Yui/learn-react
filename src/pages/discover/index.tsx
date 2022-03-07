import { dicoverMenu } from '@/common/local-data';
import React, { memo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { DiscoverWrapper, TopMenu } from './style';

const YuiDiscover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {item.title}
                </NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      <Outlet />
    </DiscoverWrapper>
  );
});

export default YuiDiscover;
