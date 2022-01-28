/**
 * createRef获取原生DOM或组件
 */
import React, { PureComponent, createRef } from 'react';
import { IStates } from './types/App';

class Counter extends PureComponent<any, IStates> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render(): React.ReactNode {
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={() => this.increment()}>Counter按钮</button>
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
export class App extends PureComponent {
  private titleRef = createRef<HTMLHeadingElement>();
  private titleEl: HTMLHeadingElement | null = null;
  private counterRef = createRef<Counter>();
  render() {
    return (
      <div>
        {/* <h2 ref="titleRef"></h2> 字符串创建ref方式已经废弃 */}
        <h2>Hello SH</h2>
        <h2 ref={this.titleRef}></h2>
        <h2 ref={(arg) => (this.titleEl = arg)}></h2>
        <button onClick={() => this.changeText()}>按钮</button>
        <br />
        <Counter ref={this.counterRef} />
      </div>
    );
  }
  changeText() {
    if (this.titleRef.current) {
      this.titleRef.current.innerHTML = 'Hello World';
    }
    if (this.titleEl) {
      this.titleEl.innerHTML = 'Hello React';
    }
    if (this.counterRef.current) {
      this.counterRef.current.increment();
    }
  }
}

export default App;
