import React from 'react';
import { connect } from 'react-redux';
import { addNumAction, decrementAction, incrementAction, subNumAction } from '@/store/counter/actionCreator';

function About(props: any) {
  return (
    <div>
      <h2>当前计数: {props.counter}</h2>
      <div>
        <button onClick={() => props.increment()}>+1</button>
        &nbsp;
        <button onClick={() => props.addNum(5)}>+5</button>
      </div>
      <div>
        <button onClick={() => props.decrement()}>-1</button>
        &nbsp;
        <button onClick={() => props.subNum(5)}>-5</button>
      </div>
    </div>
  );
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
