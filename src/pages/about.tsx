import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addNumAction, decrementAction, incrementAction, subNumAction } from '@/store/counter/actionCreator';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

class AboutCpn extends PureComponent<any, any> {
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
          <NavLink
            to="us/1008"
            state={{ name: 'denis', age: 18 }}
            className={({ isActive }) => (isActive ? 'n-active' : '')}>
            个人
          </NavLink>
          <Button onClick={() => this.contactThem()}>联系他们</Button>
        </nav>

        <Outlet />
      </div>
    );
  }
  contactThem() {
    this.props.navigation('them', { replace: true });
  }
}

function About(props) {
  const navigation = useNavigate();
  return <AboutCpn {...props} navigation={navigation} />;
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
