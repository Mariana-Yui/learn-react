import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addNumAction, decrementAction, incrementAction, subNumAction } from '@/store/counter/actionCreator';
import { NavLink, Outlet } from 'react-router-dom';

class About extends PureComponent<any, any> {
  render(): React.ReactNode {
    return (
      <div>
        <h2>当前计数: {this.props.counter}</h2>
        <div>
          <button onClick={() => this.props.increment()}>+1</button>
          &nbsp;
          <button onClick={() => this.props.addNum(5)}>+5</button>
        </div>
        <div>
          <button onClick={() => this.props.decrement()}>-1</button>
          &nbsp;
          <button onClick={() => this.props.subNum(5)}>-5</button>
        </div>

        <nav>
          <NavLink to="login" className={({ isActive }) => (isActive ? 'n-active' : '')}>
            登录
          </NavLink>
          <NavLink to="us" className={({ isActive }) => (isActive ? 'n-active' : '')}>
            个人
          </NavLink>
        </nav>

        <Outlet />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment() {
    dispatch(incrementAction());
  },
  addNum(num) {
    dispatch(addNumAction(num));
  },
  decrement() {
    dispatch(decrementAction());
  },
  subNum(num) {
    dispatch(subNumAction(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
