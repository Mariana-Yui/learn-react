import React, { PureComponent } from 'react';
import Home from './pages/home';
import Home2 from './pages/home2';
import Profile from './pages/profile';
import Profile2 from './pages/profile2';

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <hr />
        <Profile />
        <hr />
        <Home2 />
        <hr />
        <Profile2 />
      </div>
    );
  }
}

export default App;
