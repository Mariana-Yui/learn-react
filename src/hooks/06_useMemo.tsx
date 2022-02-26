import React, { memo, useMemo, useState } from 'react';

const MyInfo = memo(function MyInfo(props: { info: { name: string; age: number } }) {
  console.log('MyInfo重新渲染');
  return (
    <h2>
      名字: {props.info.name} - 年龄: {props.info.age}
    </h2>
  );
});

export default function UseMemo() {
  console.log('MemoHookDemo重新渲染');
  const [show, setShow] = useState(true);

  const info = useMemo(() => {
    return { name: 'denis', age: 18 };
  }, []);
  return (
    <div>
      <h2>UseMemo</h2>
      <MyInfo info={info} />
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
