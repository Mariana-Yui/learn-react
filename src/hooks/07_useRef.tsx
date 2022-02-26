import React, { Component, ForwardedRef, forwardRef, memo, useEffect, useRef, useState } from 'react';

class MyTitleCpn extends Component {
  render(): React.ReactNode {
    console.log('rerender');
    return <h2>MyTitleCpn</h2>;
  }
}

/** 函数组件不存在ref 需要使用forwardRef套一层 */
const MyTitleCpn2 = forwardRef(function MyTitleCpn2(props, ref: ForwardedRef<HTMLHeadingElement>) {
  return <h2 ref={ref}>MyTitleCpn2</h2>;
});

export default function UseRef() {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const titleRef = useRef() as React.MutableRefObject<MyTitleCpn>;
  const titleRef2 = useRef() as React.MutableRefObject<HTMLHeadingElement>;

  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  const changeDOM = () => {
    inputRef.current.focus();
    titleRef.current.render();
    titleRef2.current.innerHTML = 'Hello React';
  };

  return (
    <div>
      <h2>UseRef</h2>
      <input type="text" ref={inputRef} />
      <MyTitleCpn ref={titleRef} />
      <MyTitleCpn2 ref={titleRef2} />
      <button onClick={(e) => changeDOM()}>修改DOM</button>
      <h3>上次计数: {countRef.current}</h3>
      <h3>当前计数: {count}</h3>
      <button onClick={(e) => setCount(count + 5)}>+5</button>
    </div>
  );
}
