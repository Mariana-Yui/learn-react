/**
 * useLayoutEffect和useEffect的区别: 前者的回调在渲染前执行, 后者的后调在渲染后执行
 * 后者会看到明显闪烁
 */
import React, { useEffect, useLayoutEffect, useState } from 'react';

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random() + 200);
    }
  }, [count]);
  return (
    <div>
      <h2>UseLayoutEffect</h2>
      <h3>当前数字: {count}</h3>
      <button onClick={(e) => setCount(0)}>修改数字</button>
    </div>
  );
}
