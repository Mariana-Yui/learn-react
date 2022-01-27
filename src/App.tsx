import React, { Component } from 'react';
import Tabs from './Tabs';

interface IProps {
  name: string;
  age: number;
  height: string;
}
class Cpn extends Component<IProps, any> {
  render(): React.ReactNode {
    const { name, age, height } = this.props;
    return <h3>{name + ' ' + age + ' ' + height}</h3>;
  }
}

class ClickButton extends Component<{ increment: (e) => void }, any> {
  render(): React.ReactNode {
    const { increment } = this.props;
    return <button onClick={increment}>+1</button>;
  }
}

interface IAppProps {
  count: number;
  tabs: Array<string>;
  curIndex: number;
}
class App extends Component<any, IAppProps> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      tabs: ['首页', '稳健', '进阶', '我的'],
      curIndex: 0,
    };
  }
  render() {
    const { count, tabs, curIndex } = this.state;
    return (
      <div>
        {/* <Cpn name={'denis'} age={18} height={'1.88'} />
        <h2>当前计数: {count}</h2>
        <ClickButton increment={(e) => this.increment()} /> */}
        <Tabs tabs={tabs} curIndex={curIndex} click={(index: number) => this.changeCurTab(index)}></Tabs>
        <h2>{tabs[curIndex]}</h2>
      </div>
    );
  }
  changeCurTab(index) {
    this.setState({
      curIndex: index,
    });
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}

export default App;
