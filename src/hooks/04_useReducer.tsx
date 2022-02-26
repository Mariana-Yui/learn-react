import React, { useReducer } from 'react';

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div>
      <h2>UseReducer</h2>
      <div>当前计数: {state.counter}</div>
      <button onClick={(e) => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={(e) => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  );
}

function reducer(prevState, action) {
  switch (action.type) {
    case 'increment':
      return { counter: prevState.counter + 1 };
    case 'decrement':
      return { counter: prevState.counter - 1 };
    default:
      return prevState;
  }
}
