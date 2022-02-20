import { Button } from 'antd';
import React, { PureComponent } from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from 'react-router-dom';
// import About from './pages/about';
// import Login from './pages/About/Login';
// import Them from './pages/About/them';
// import Us from './pages/About/us';
// import Home from './pages/home';
// import NoMatch from './pages/noMatch';
// import Profile from './pages/profile';
import GetRoutes from '@/router/index';
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
      <div>
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
          <Button type="primary" onClick={() => this.contactUs()}>
            联系我们
          </Button>
        </nav>

        <h2>Router-View</h2>

        {/* v6Routes replace v5Switch 不再需要exact 默认精确匹配 */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="us/:id" element={<Us />} />
            <Route path="login" element={<Login />} />
            <Route path="them" element={<Them />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoMatch />} />
        </Routes> */}
        <GetRoutes />
      </div>
    );
  }
  contactUs() {
    this.props.router.navigate('/about/us/1141');
  }
}

// v6已不支持withRouter 需要↓polyfill
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter(App);
