import React, { PureComponent } from 'react';
import { EventEmitter } from 'events';

const eventBus = new EventEmitter();
export class App extends PureComponent {
  componentDidMount() {
    eventBus.addListener('showArgs', this.showArgs);
  }
  componentWillUnmount() {
    eventBus.removeListener('showArgs', this.showArgs);
  }
  render() {
    return (
      <div>
        <h2>Hello </h2>
        <button onClick={() => this.trigger()}>触发事件总线</button>
      </div>
    );
  }
  trigger() {
    eventBus.emit('showArgs', 'React', 2022);
  }
  // showArgs(...args) {
  //   console.log(this);
  //   console.log('args:', ...args);
  // }
  showArgs = (...args) => {
    console.log(this);
    console.log('args:', ...args);
  };
}

export default App;
