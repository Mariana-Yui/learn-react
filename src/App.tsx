import React, { Component } from 'react';

class Cmp extends Component {
  componentWillUnmount() {
    console.log('Cmp组件即将卸载');
  }
  render() {
    return <div>我是Cmp组件</div>;
  }
}

interface IState {
  count: number;
  toggle: boolean;
}
class App extends Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      toggle: false,
    };
  }
  componentDidMount() {
    console.log('App组件挂载完成');
  }
  componentDidUpdate() {
    console.log('App组件更新完成');
  }
  render() {
    return (
      <div>
        <div>
          <span>计数器: {this.state.count}</span>
          <button onClick={(e) => this.setState({ count: this.state.count + 1 })}>+1</button>
        </div>
        <div>
          <button onClick={(e) => this.setState({ toggle: !this.state.toggle })}>切换</button>
          {this.state.toggle && <Cmp />}
        </div>
      </div>
    );
  }
}

export default App;
