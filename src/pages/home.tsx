import React, { PureComponent } from 'react';
import store from '@/store';
import { addNumAction, incrementAction } from '@/store/actionCreator';

export class Home extends PureComponent<any, any> {
  state = {
    counter: store.getState().counter,
  };
  unsubscribe;

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h2>当前计数: {this.state.counter}</h2>
        <div>
          <button onClick={() => this.increment()}>+1</button>
          <button onClick={() => this.addNum(5)}>+5</button>
        </div>
      </div>
    );
  }
  increment() {
    store.dispatch(incrementAction());
  }
  addNum(num) {
    store.dispatch(addNumAction(num));
  }
}

export default Home;
