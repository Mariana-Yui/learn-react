import React from 'react';
import { addNumAction, incrementAction } from '@/store/actionCreator';
import { connect } from '@/utils/connect';

function Home(props: any) {
  return (
    <div>
      <h2>Home</h2>
      <h2>当前计数: {props.counter}</h2>
      <div>
        <button onClick={() => props.increment()}>+1</button>
        <button onClick={() => props.addNum(5)}>+5</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment() {
    dispatch(incrementAction());
  },
  addNum(num) {
    dispatch(addNumAction(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
