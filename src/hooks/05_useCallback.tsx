/**
 * useCallback(() => void, deps) 相当于 useMemo(() => (() => void), deps)
 * 必须指定依赖的deps
 * 用于子组件传入函数时的性能优化, 当然前提是子组件要使用memo或者PureComponent
 */
import React, { memo, useCallback, useState } from 'react';

const MyButton = memo(function MyButton(props: { title: string; increment: () => void }) {
  console.log('MyButon被重新渲染: ' + props.title);
  return <button onClick={(e) => props.increment()}>+1</button>;
});

export default function UseCallback() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);

  const increment1 = () => {
    console.log('increment1被调用');
    setCounter(counter + 1);
  };

  const increment2 = useCallback(() => {
    console.log('increment2被调用');
    setCounter(counter + 1);
  }, [counter]);
  return (
    <div>
      <h2>UseCallback</h2>
      <MyButton title={'title1'} increment={increment1} />
      <MyButton title={'title2'} increment={increment2} />
      <button onClick={(e) => setShow(!show)}>切换</button>
    </div>
  );
}
