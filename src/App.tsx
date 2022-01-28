import React, { PureComponent, memo } from 'react';
import { IStates } from './types/App';

class Header extends PureComponent {
  render(): React.ReactNode {
    console.log('render header');
    return <h2>这是Header</h2>;
  }
}

function Banner() {
  console.log('render banner');
  return <h2>这是Banner</h2>;
}

// 函数式组件如果要使用scu优化, 需要使用memo
const Main = memo(function Main() {
  console.log('render main');
  return (
    <section>
      <Banner />
      <ul>
        <li>1这是Body li</li>
        <li>2这是Body li</li>
        <li>3这是Body li</li>
      </ul>
    </section>
  );
});

class Footer extends PureComponent {
  render(): React.ReactNode {
    console.log('render footer');
    return <h2>这是Footer</h2>;
  }
}
class App extends PureComponent<any, IStates> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    console.log('render App');
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default App;
