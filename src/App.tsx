import React, { PureComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';
import Home from './Home';
import Profile from './Profile';
export class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{ fontSize: '20px', themeColor: 'gray', themeBgColor: 'aliceblue' }}>
        <Home />
        <Profile />
        <Button />
      </ThemeProvider>
    );
  }
}

export default App;
