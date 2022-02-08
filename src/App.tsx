import React, { PureComponent } from 'react';
import About from './pages/about';
import Home from './pages/home';

export class App extends PureComponent {
  render() {
    return (
      <div>
        <About />
        <hr />
        <Home />
      </div>
    );
  }
}

export default App;
