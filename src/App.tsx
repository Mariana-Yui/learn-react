import React, { PureComponent } from 'react';
import CardTransition from './CSSTransition';
import ButtonTransition from './SwitchTransition';
import ListTransition from './TransitionGroup';

export class App extends PureComponent<any, any> {
  render() {
    return (
      <div style={{ margin: 20 }}>
        <CardTransition />
        <ButtonTransition />
        <ListTransition />
      </div>
    );
  }
}

export default App;
