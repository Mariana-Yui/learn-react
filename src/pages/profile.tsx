import React, { PureComponent } from 'react';
import store from '@/store';
import { decrementAction, subNumAction } from '@/store/actionCreator';

export class Profile extends PureComponent<any, any> {
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
          <button onClick={() => this.decrement()}>-1</button>
          <button onClick={() => this.subNum(5)}>-5</button>
        </div>
      </div>
    );
  }
  decrement() {
    store.dispatch(decrementAction());
  }
  subNum(num) {
    store.dispatch(subNumAction(num));
  }
}

export default Profile;
