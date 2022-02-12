import React, { PureComponent } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Login from './pages/About/Login';
import Us from './pages/About/us';
import Home from './pages/home';
import NoMatch from './pages/noMatch';
import Profile from './pages/profile';
import './style.scss';

export class App extends PureComponent<any, any> {
  state = {
    links: [
      {
        to: '/',
        text: '首页',
      },
      {
        to: '/about',
        text: '关于',
      },
      {
        to: '/profile',
        text: '资料',
      },
      {
        to: '/nomatch',
        text: '法外之地',
      },
    ],
  };
  render() {
    return (
      <BrowserRouter>
        <nav
          style={{
            borderBottom: 'solid 1px',
            padding: '1rem',
          }}>
          {this.state.links.map((link) => {
            // return (
            //   <Link to={link.to} key={link.to}>
            //     {link.text}
            //   </Link>
            // );
            return (
              <NavLink to={link.to} key={link.to} className={({ isActive }) => (isActive ? 'm-active' : '')}>
                {link.text}
              </NavLink>
            );
          })}
        </nav>

        <h2>Router-View</h2>

        {/* v6Routes replace v5Switch 不再需要exact 默认不再模糊匹配 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="us" element={<Us />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
